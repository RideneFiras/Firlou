export type Testimonial = {
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    author: "Yassine Ben Ali",
    role: "Founder & CEO",
    company: "Northwind Logistics",
    content:
      "Firlou shipped our entire SaaS in 8 weeks. The design, the speed, the attention to detail — everything felt premium. Our investors thought we'd worked with a Berlin agency.",
    rating: 5,
  },
  {
    author: "Sarah M.",
    role: "Marketing Lead",
    company: "Salam Group",
    content:
      "We needed a website that matched the quality of our brand. Firlou delivered something we still get compliments on, months later. Our online orders tripled.",
    rating: 5,
  },
  {
    author: "Dr. Karim Trabelsi",
    role: "Medical Director",
    company: "MediSphere",
    content:
      "Our clinic's operations transformed. The dashboard saves each doctor about 6 hours a week. Firlou understood our workflow better than our last vendor.",
    rating: 5,
  },
  {
    author: "Hela Jaziri",
    role: "Co-founder",
    company: "Lumen Labs",
    content:
      "Their AI integration work is on another level. Clean code, thoughtful architecture, and they actually understood the product, not just the spec.",
    rating: 5,
  },
  {
    author: "Mehdi K.",
    role: "Head of Ops",
    company: "Confidential",
    content:
      "We've now built three internal tools with Firlou. They've become an extension of our team. Reliable, fast and proactive.",
    rating: 5,
  },
  {
    author: "Anissa B.",
    role: "Realtor & Owner",
    company: "Estate Luxury",
    content:
      "Beautiful work. Our agents finally have a tool they actually enjoy using and our leads come in 4x faster than before.",
    rating: 5,
  },
];
