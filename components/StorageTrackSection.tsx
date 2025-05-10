"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Video, ArrowRight } from "lucide-react";

export function StorageTrackSection() {
  return (
    <section className="py-4 px-2">
      <div className="container mx-auto max-w-md">
        <div className="space-y-4">
          {/* Map Card */}
          <Card className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Storage Location</h3>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <img
                  src="/map.png"
                  alt="Storage Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm">
                  <p className="font-medium">Istanbul, Turkey</p>
                  <p className="text-xs opacity-80">Last updated: 2 mins ago</p>
                </div>
              </div>
              <Button size="sm" className="w-full group">
                View Full Map
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>

          {/* Camera Preview Card */}
          <Card className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Video className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Live Camera Feed</h3>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-gray-400">
                      Camera Feed Loading...
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                    LIVE
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Camera 1
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Camera 2
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Camera 3
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
