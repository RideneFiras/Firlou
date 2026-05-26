"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, Clock } from "lucide-react";

import { posts, postCategories } from "@/lib/data/posts";
import { cn, formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function BlogList() {
  const [category, setCategory] = React.useState<string>("All");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {postCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-all",
                category === cat
                  ? "border-primary/50 bg-primary text-primary-foreground"
                  : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          No articles found. Try a different search.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="muted">{post.category}</Badge>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime} min
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors group-hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <span>
                    {post.author} · {formatDate(post.publishedAt)}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-primary" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
