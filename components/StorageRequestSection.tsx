"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  CalendarIcon,
  Package,
  MapPin,
  Shield,
  Wifi,
  Loader2,
  Wand,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for AI recommendations
const mockDepot = {
  id: "depot1",
  name: "Central Storage Hub",
  location: "Downtown",
  distance: "2.5 km",
  price: "₺800/day",
  security: "24/7 CCTV, Motion Sensors",
  iot: "Smart Climate Control",
  rating: 4.8,
  imageUrl:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500",
};

interface DepotCardProps {
  depot: typeof mockDepot;
}

function DepotCard({ depot }: DepotCardProps) {
  return (
    <Card className="p-3 space-y-2">
      <div className="relative h-32 rounded-md overflow-hidden">
        <img
          src={"/bos-alan.jpg"}
          alt={depot.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
          {depot.rating} ★
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-sm">{depot.name}</h3>
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="w-3 h-3 mr-1" />
          {depot.location} • {depot.distance}
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Shield className="w-3 h-3 mr-1" />
          {depot.security}
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Wifi className="w-3 h-3 mr-1" />
          {depot.iot}
        </div>
        <div className="text-sm font-medium text-primary mt-1">
          {depot.price}
        </div>
      </div>
    </Card>
  );
}

export function StorageRequestSection() {
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [itemName, setItemName] = useState("");
  const [boxCount, setBoxCount] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDepot, setShowDepot] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Handle form submission and AI matching logic here
    console.log({
      area,
      startDate,
      endDate,
      itemName,
      boxCount,
      notes,
    });

    setShowDepot(true);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6 py-4 px-3">
      {showDepot ? (
        <section>
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => {
              setShowDepot(false);
              setIsLoading(false);
            }}
          >
            ← Back
          </Button>
          <h2 className="text-sm font-semibold mb-3">Best Matched Depot</h2>
          <DepotCard depot={mockDepot} />
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Storage Area Required</label>
            <Input
              type="number"
              placeholder="Enter area in m²"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Date Range</label>
            <div className="grid grid-cols-2 gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "End date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Item Information</label>
            <Input
              placeholder="Item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Number of boxes"
              value={boxCount}
              onChange={(e) => setBoxCount(e.target.value)}
            />
            <Input
              placeholder="Notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full disabled:opacity-80 bg-black hover:bg-black/80 disabled:bg-gray-200 disabled:text-gray-500 gap-0"
            disabled={isLoading}
            style={{ opacity: 1 }}
          >
            <Wand className="mr-2 h-4 w-4" />
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Finding Best Match...
              </>
            ) : (
              "Find Storage Solution"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
