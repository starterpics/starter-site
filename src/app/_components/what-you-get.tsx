"use client";

import {
  Database,
  Globe,
  Search,
  Settings,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatYouGet() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            Complete Starter Kit
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What You Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to launch a professional image website that
            generates real traffic and revenue.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Headless DAM - 2x2 */}
          <Card className="md:col-span-2 lg:col-span-2 md:row-span-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-6">
                <Database className="h-7 w-7 text-primary" />
                <CardTitle className="text-xl">Headless DAM System</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-base leading-relaxed">
                Multi-CDN delivery with Cloudflare R2 integration and optimized
                caching for ultra-fast image loading.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Multi-CDN global distribution</li>
                <li>• Cloudflare R2 integration</li>
                <li>• Intelligent caching layers</li>
                <li>• Automatic image optimization</li>
              </ul>
            </CardContent>
          </Card>

          {/* AI-Powered SEO Engine - 1x1 */}
          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Search className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  AI-Powered SEO Engine
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automated alt text, titles, and schema markup to boost search
                visibility.
              </p>
            </CardContent>
          </Card>

          {/* Smart Content Automation - 1x1 */}
          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Smart Content Automation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered content processing, organization, and bulk
                operations.
              </p>
            </CardContent>
          </Card>

          {/* Google-Safe Architecture - 1x1 */}
          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Google-Safe Architecture
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Anti-spam design with manual publishing controls. No thin
                content risk.
              </p>
            </CardContent>
          </Card>

          {/* Production Ready - 1x1 */}
          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Production Ready
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete deployment setup with monitoring and one-click launch.
              </p>
            </CardContent>
          </Card>

          {/* Performance Optimized - 2x1 */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Performance Optimized</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Built with Next.js 15 App Router, edge caching, and optimized
                images for lightning-fast page loads.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  Next.js 15
                </span>
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  App Router
                </span>
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  Edge Caching
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Admin Dashboard - 2x1 */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Admin Dashboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Comprehensive content management with:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  Bulk Upload
                </span>
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  Auto Tagging
                </span>
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  Publishing Controls
                </span>
                <span className="px-2 py-1 bg-primary/10 rounded-md">
                  User Management
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to turn your images into a profitable business?
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Next.js 15 + App Router
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              TypeScript + Prisma
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Tailwind + shadcn/ui
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
