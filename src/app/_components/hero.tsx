"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <div className="space-y-8 mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl leading-tight">
              Turn Your Images Into a{" "}
              <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Profitable Website
              </span>
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground ">
              Stop letting your{" "}
              <span className="font-medium text-foreground">images</span> sit on
              your hard drive, Build a professional image website that generates{" "}
              <span className="font-medium text-primary">
                real google traffic
              </span>{" "}
              and revenue.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-base">
              Start Building Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              View Live Demo
            </Button>
          </div>

          {/* Quick Features */}
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground group">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="group-hover:text-foreground transition-colors">
                SEO Optimized
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground group">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="group-hover:text-foreground transition-colors">
                Zero Spam Risk
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground group">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="group-hover:text-foreground transition-colors">
                Admin Dashboard
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">$0</div>
            <div className="text-sm text-muted-foreground">
              Monthly hosting costs
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">10,000+</div>
            <div className="text-sm text-muted-foreground">
              Images supported
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">{"<"} 1 Day</div>
            <div className="text-sm text-muted-foreground">To launch</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Google safe</div>
          </div>
        </div>
      </div>
    </section>
  );
}
