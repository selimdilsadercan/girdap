"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiTarget, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { MapPin, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start space-x-3">
        <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-base">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function StorageTrackSection() {
  const features = [
    {
      title: "Live Location & History Tracking",
      description:
        "View where your items are stored, how long they've been there, and their movement history — all visualized on an interactive map.",
      icon: <FiTarget size={20} />,
    },
    {
      title: "Smart Transfer & Routing",
      description:
        "Our logistics algorithm adapts to traffic, demand, and depot load to ensure the most efficient storage distribution.",
      icon: <FiTrendingUp size={20} />,
    },
    {
      title: "Camera Access & Live Monitoring",
      description:
        "Access live camera feeds from your selected depot and get real-time visibility of your stored items.",
      icon: <FiCheckCircle size={20} />,
    },
  ];

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Storage Tracking System
              </h2>
              <p className="text-base text-muted-foreground">
                We've built a centralized physical cloud network with verified
                SME warehouses across Turkey. Track and manage every step of
                your storage operations through one powerful dashboard.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            <Button size="sm" className="group">
              Try Dashboard
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column - Map Preview */}
          <div className="relative">
            <Card className="aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Interactive Map</h3>
                    <p className="text-xs text-muted-foreground">
                      Real-time tracking visualization
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
