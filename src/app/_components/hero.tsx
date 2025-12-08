"use client";

import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ...existing code...

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-background py-20 sm:py-32">
      {/* background grid mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="mx-auto max-w-6xl px-4">
        {/* top badge */}
        <div className="mb-8 inline-flex">
          <Badge variant="outline" className="gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Production-grade starter kit
          </Badge>
        </div>

        {/* title */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Build AI Image
          <span className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
            {" "}
            Websites
          </span>{" "}
          that rank
        </h1>

        {/* subtitle */}
        <p className="mb-10 max-w-2xl text-muted-foreground">
          A long-term maintained Next.js starter built for SEO-safe, curated AI
          image products. Headless DAM + Admin + Tailwind + Shadcn UI.
        </p>

        {/* CTA group */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="/docs/get-started">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-muted/40">
            <Link href="/docs">View Docs</Link>
          </Button>
        </div>

        {/* features */}
        <div className="mb-12 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Card
              key={feature.title}
              className={cn(
                "group relative rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md",
              )}
            >
              <CardHeader className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3 text-sm text-muted-foreground">
                {feature.desc}
              </CardContent>

              {/* hover accent dots */}
              <div className="absolute right-4 top-4 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                <span className="inline-flex h-2 w-2 rounded-full bg-primary/60" />
              </div>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        {/* bottom highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          {HIGHLIGHTS.map((text) => (
            <span key={text} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "SEO-Safe Architecture",
    desc: "Curated pages only. Hidden tags. No thin content.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Admin + DAM",
    desc: "Bulk upload, tag, describe, and publish with clean workflows.",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
  },
  {
    title: "Modern Stack",
    desc: "Next.js, Tailwind, Shadcn UI, Prisma, TypeScript, R2.",
    icon: <ArrowRight className="h-6 w-6 text-primary" />,
  },
] satisfies { title: string; desc: string; icon: React.ReactNode }[];

const HIGHLIGHTS = [
  "Production-Ready",
  "TypeScript + Prisma",
  "Long-term Maintained",
];

// ...existing code...
