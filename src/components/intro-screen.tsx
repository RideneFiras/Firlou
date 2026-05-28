"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Phase = "enter" | "logo" | "text" | "scan" | "exit";

function revealPage() {
  if (typeof document !== "undefined") {
    document.documentElement.removeAttribute("data-intro-pending");
  }
}

function buildUtterance(muted: boolean): SpeechSynthesisUtterance | null {
  if (muted || typeof window === "undefined" || !window.speechSynthesis) return null;
  const u = new SpeechSynthesisUtterance("Welcome to Firlou.");
  u.rate = 0.82;
  u.pitch = 1.18;
  u.volume = 0.42;
  const voices = window.speechSynthesis.getVoices();
  const preferred = [
    "Google UK English Female",
    "Microsoft Aria Online",
    "Microsoft Zira",
    "Samantha",
    "Karen",
    "Moira",
    "Tessa",
  ];
  const pick =
    preferred.reduce<SpeechSynthesisVoice | null>((found, name) => {
      if (found) return found;
      return voices.find((v) => v.name.includes(name)) ?? null;
    }, null) ??
    voices.find((v) => v.lang.startsWith("en") && v.name.toLowerCase().includes("female")) ??
    voices.find((v) => v.lang === "en-US" || v.lang === "en-GB") ??
    null;
  if (pick) u.voice = pick;
  return u;
}

export function IntroScreen() {
  const [visible, setVisible] = React.useState(false);
  const [phase, setPhase] = React.useState<Phase>("enter");
  const [muted, setMuted] = React.useState(false);
  const [audioUnlocked, setAudioUnlocked] = React.useState(false);
  const mutedRef = React.useRef(false);
  const timersRef = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const addTimer = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  };

  const clearAll = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
  };

  // Speak — always safe to call; pass forceGesture=true when triggered by a click
  const speakWelcome = React.useCallback((forceGesture = false) => {
    if (mutedRef.current) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;

    // If already speaking and this is NOT a forced gesture, do nothing
    if (synth.speaking && !forceGesture) return;

    const trySpeak = () => {
      const u = buildUtterance(mutedRef.current);
      if (!u) return;
      synth.cancel();
      synth.speak(u);
    };

    // getVoices() is synchronous on most browsers once loaded
    if (synth.getVoices().length > 0) {
      trySpeak();
    } else {
      // Voices not loaded yet — wait for event, but only if we have a user gesture
      // (async callbacks after voiceschanged won't work without prior gesture)
      if (forceGesture) {
        // For gesture path: speak immediately with default voice
        const u = new SpeechSynthesisUtterance("Welcome to Firlou.");
        u.rate = 0.82; u.pitch = 1.18; u.volume = 0.42;
        synth.cancel();
        synth.speak(u);
      } else {
        synth.addEventListener("voiceschanged", trySpeak, { once: true });
      }
    }
  }, []);

  React.useEffect(() => {
    const shouldShow = document.documentElement.hasAttribute("data-intro-pending");
    if (!shouldShow) return;
    try { sessionStorage.setItem("firlou-intro", "1"); } catch (_) {}

    setVisible(true);
    setPhase("logo");

    addTimer(() => setPhase("text"), 1200);
    addTimer(() => setPhase("scan"), 2400);
    addTimer(() => {
      setPhase("exit");
      revealPage();
      addTimer(() => setVisible(false), 900);
    }, 5000);

    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Try auto-speak when logo appears (works if page opened via link click)
  React.useEffect(() => {
    if (phase !== "logo") return;
    const t = addTimer(() => speakWelcome(false), 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // First tap/click anywhere on overlay = guaranteed user gesture → force speech
  const handleOverlayClick = () => {
    if (!audioUnlocked) {
      setAudioUnlocked(true);
      speakWelcome(true); // forceGesture = true → bypasses all guards
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearAll();
    revealPage();
    setPhase("exit");
    addTimer(() => setVisible(false), 500);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !mutedRef.current;
    mutedRef.current = next;
    setMuted(next);
    if (next) window.speechSynthesis?.cancel();
    else speakWelcome(true); // unmuting = user gesture, try to speak
  };

  if (!visible) return null;

  const exiting = phase === "exit";
  const showTapHint = (phase === "logo" || phase === "text") && !audioUnlocked && !muted;

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: exiting ? 0.85 : 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030712] cursor-pointer"
        aria-modal="true"
        aria-label="Intro screen"
        onClick={handleOverlayClick}
      >
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.18]" />

        {/* Radial glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[560px] w-[560px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,102,255,0.12) 40%, transparent 70%)" }}
          />
        </motion.div>

        {/* Pulsing secondary glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.07, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[340px] w-[340px] rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(232,121,249,0.14) 0%, transparent 70%)" }}
          />
        </motion.div>

        {/* Orbiting ring 1 */}
        <motion.div
          className="pointer-events-none absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-[360px] w-[360px] rounded-full" style={{ border: "1px solid rgba(139,92,246,0.08)" }} />
        </motion.div>

        {/* Orbiting ring 2 */}
        <motion.div
          className="pointer-events-none absolute"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-[500px] w-[500px] rounded-full" style={{ border: "1px solid rgba(59,102,255,0.06)" }} />
        </motion.div>

        {/* Dot on ring 1 */}
        <motion.div
          className="pointer-events-none absolute flex items-start justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ height: 360, width: 360 }}
        >
          <div
            className="mt-[-4px] h-2 w-2 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.9) 0%, transparent 70%)",
              boxShadow: "0 0 8px 2px rgba(139,92,246,0.5)",
            }}
          />
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.72, filter: "blur(14px)" }}
            animate={phase !== "enter" ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <motion.div
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 blur-3xl"
              style={{
                background: "radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, transparent 70%)",
                transform: "scale(1.6)",
              }}
            />
            <Image
              src="/firlou-logo.png"
              alt="Firlou"
              width={290}
              height={103}
              className="relative h-[58px] w-auto object-contain sm:h-[70px]"
              priority
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase === "text" || phase === "scan" ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-5 h-px w-40 origin-left"
            style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.6), transparent)" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={phase === "text" || phase === "scan" ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-[10px] tracking-[0.35em] text-white/35 uppercase"
          >
            Digital Development Studio
          </motion.p>

          {/* Tap-for-audio hint */}
          <AnimatePresence>
            {showTapHint && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: [0, 0.5, 0.3, 0.5] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="mt-6 flex items-center gap-1.5 pointer-events-none select-none"
              >
                <svg className="h-3 w-3 text-violet-400/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <span className="text-[8px] tracking-[0.5em] text-violet-400/40 uppercase">tap for audio</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scanning bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={phase === "scan" ? { opacity: [0, 0.7, 0], scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="mt-7 h-[1px] w-52 origin-left"
            style={{ background: "linear-gradient(to right, transparent, rgba(232,121,249,0.8), rgba(59,102,255,0.8), transparent)" }}
          />

          {/* Status */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={phase === "scan" ? { opacity: [0, 0.4, 0] } : {}}
            transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
            className="mt-3 text-[9px] tracking-[0.6em] text-violet-400/50 uppercase"
          >
            Entering
          </motion.p>
        </div>

        {/* Corner brackets */}
        {(["tl", "tr", "bl", "br"] as const).map((pos) => (
          <motion.div
            key={pos}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`absolute ${
              pos === "tl" ? "top-7 left-7 border-t border-l"
              : pos === "tr" ? "top-7 right-7 border-t border-r"
              : pos === "bl" ? "bottom-7 left-7 border-b border-l"
              : "bottom-7 right-7 border-b border-r"
            } h-9 w-9`}
            style={{ borderColor: "rgba(139,92,246,0.35)" }}
          />
        ))}

        {/* Bottom labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-6 left-8 text-[9px] tracking-[0.45em] text-white uppercase"
        >
          FIRLOU.TN
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-6 right-8 text-[9px] tracking-[0.45em] text-white uppercase"
        >
          Studio v2
        </motion.div>

        {/* Controls */}
        <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={toggleMute}
            aria-label={muted ? "Unmute voice" : "Mute voice"}
            className="flex h-7 w-7 items-center justify-center rounded-full border transition-colors"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: muted ? "rgba(255,255,255,0.3)" : "rgba(139,92,246,0.7)",
            }}
          >
            {muted ? (
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="text-[9px] tracking-[0.45em] uppercase transition-colors"
            style={{ color: "rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
          >
            Skip
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
