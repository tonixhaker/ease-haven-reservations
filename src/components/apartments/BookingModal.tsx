
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Apartment } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface BookingModalProps {
  apartment: Apartment;
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
}

type DurationType = "day" | "week" | "month";

const BookingModal = ({
  apartment,
  isOpen,
  onClose,
  isAuthenticated,
}: BookingModalProps) => {
  const navigate = useNavigate();
  
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [durationType, setDurationType] = useState<DurationType>("day");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(apartment.pricePerDay);

  useEffect(() => {
    // Calculate total price based on durationType and quantity
    let basePrice = apartment.pricePerDay;
    if (durationType === "week") {
      basePrice = apartment.pricePerWeek;
    } else if (durationType === "month") {
      basePrice = apartment.pricePerMonth;
    }
    setTotalPrice(basePrice * quantity);
  }, [durationType, quantity, apartment]);

  const handleDurationChange = (value: string) => {
    setDurationType(value as DurationType);
    setQuantity(1); // Reset quantity when duration type changes
  };

  const handleQuantityChange = (value: string) => {
    setQuantity(parseInt(value, 10));
  };

  const handleBooking = () => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to login
      onClose();
      navigate("/login", { state: { from: `/apartments/${apartment.id}` } });
      return;
    }

    // Simulate booking process
    toast.success("Booking successful!", {
      description: `You have booked ${apartment.title} for ${quantity} ${durationType}${quantity > 1 ? "s" : ""} starting ${format(date!, "PPP")}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Your Stay</DialogTitle>
          <DialogDescription>
            Choose your preferred dates and duration for staying at {apartment.title}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Check-in Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border pointer-events-auto"
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Duration</label>
              <Select value={durationType} onValueChange={handleDurationChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">
                {durationType === "day"
                  ? "Days"
                  : durationType === "week"
                  ? "Weeks"
                  : "Months"}
              </label>
              <Select
                value={quantity.toString()}
                onValueChange={handleQuantityChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i} value={(i + 1).toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 rounded-md bg-gray-50 p-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Base price:</span>
              <span className="text-sm">
                $
                {durationType === "day"
                  ? apartment.pricePerDay
                  : durationType === "week"
                  ? apartment.pricePerWeek
                  : apartment.pricePerMonth}{" "}
                / {durationType}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Quantity:</span>
              <span className="text-sm">
                {quantity} {durationType}
                {quantity > 1 ? "s" : ""}
              </span>
            </div>
            <div className="mt-2 flex justify-between border-t border-gray-200 pt-2">
              <span className="font-medium">Total:</span>
              <span className="font-bold">${totalPrice}</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleBooking} className="bg-brand-blue hover:bg-brand-blue/90">
            Book Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
