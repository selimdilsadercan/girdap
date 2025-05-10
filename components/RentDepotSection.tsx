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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import {
  CalendarIcon,
  MapPin,
  Package,
  Coins,
  Loader2,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function RentDepotSection() {
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [storageType, setStorageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);

  // Mock calculation for estimated daily income
  const calculateEstimate = () => {
    const baseRate = 15; // Base rate per m²
    const areaNum = parseFloat(area) || 0;
    const typeMultiplier = storageType === "temperature-controlled" ? 1.5 : 1;
    return Math.round(baseRate * areaNum * typeMultiplier);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setShowEstimate(true);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6 py-4 px-3">
      {showEstimate ? (
        <section>
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => {
              setShowEstimate(false);
              setIsLoading(false);
            }}
          >
            ← Back
          </Button>
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Estimated Daily Income</h2>
              <div className="text-2xl font-bold text-primary">
                ₺{calculateEstimate()}
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  /day
                </span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Based on your inputs:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Location: {location}</li>
                <li>Area: {area}m²</li>
                <li>Storage Type: {storageType}</li>
                {startDate && endDate && (
                  <li>
                    Period: {format(startDate, "MMM d")} -{" "}
                    {format(endDate, "MMM d, yyyy")}
                  </li>
                )}
              </ul>
            </div>
            <Button className="w-full">List My Storage</Button>
          </Card>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Storage Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter city or district"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Available Storage Area
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                placeholder="Enter area in m²"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Storage Type</label>
            <Select value={storageType} onValueChange={setStorageType}>
              <SelectTrigger>
                <SelectValue placeholder="Select storage type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="closed">Closed Storage</SelectItem>
                <SelectItem value="open-air">Open Air Storage</SelectItem>
                <SelectItem value="temperature-controlled">
                  Temperature Controlled
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Availability Period (Optional)
            </label>
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

          <Button
            type="submit"
            className="w-full disabled:opacity-80 bg-black hover:bg-black/80 disabled:bg-gray-200 disabled:text-gray-500 gap-0"
            disabled={isLoading}
            style={{ opacity: 1 }}
          >
            <Coins className="mr-2 h-4 w-4" />
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Calculating Estimate...
              </>
            ) : (
              "Calculate Potential Earnings"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
