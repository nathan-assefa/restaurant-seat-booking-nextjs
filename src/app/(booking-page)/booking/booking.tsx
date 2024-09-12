import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Users,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const timeSlots = [
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
];

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Array(35);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < 35; i++) {
      const day = i - firstDay + 1;
      if (day > 0 && day <= daysInMonth) {
        days[i] = new Date(year, month, day);
      }
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex justify-between items-center p-4 border-b">
        <Menu className="h-6 w-6" />
        <h1 className="text-xl font-semibold">Eco-friendly Restaurant</h1>
        <span className="text-sm">VIEW</span>
      </header>

      <main className="flex-grow p-6 max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-2">Table Booking</h2>
        <p className="text-gray-600 mb-8">
          Book your table now and enjoy our sustainable dishes crafted with
          fresh, local produce.
        </p>

        <div className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium mb-2">
              <Users className="mr-2 h-4 w-4" />
              Guest Count
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select guest count" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium mb-2">
              <Calendar className="mr-2 h-4 w-4" />
              Date
            </label>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrevMonth}>
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h3 className="text-lg font-semibold">
                  {currentMonth.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <button onClick={handleNextMonth}>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {days.map((day) => (
                  <div key={day} className="text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {getDaysInMonth(currentMonth).map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={cn(
                      "h-8 w-8 rounded-full text-sm",
                      date ? "hover:bg-gray-200" : "invisible",
                      date &&
                        date.toDateString() === selectedDate?.toDateString() &&
                        "bg-purple-400 text-white"
                    )}
                    disabled={!date}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium mb-2">
              <Clock className="mr-2 h-4 w-4" />
              Time
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full bg-purple-400 hover:bg-purple-500 text-white">
            Book
          </Button>
        </div>
      </main>

      <footer className="bg-gray-100 p-6 text-sm text-gray-600">
        <h3 className="font-semibold mb-2">GreenE</h3>
        <p className="mb-4">
          Serving delicious meals with a touch of green for over a decade!
        </p>
        <p>GreenEats © 2023</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">
            Support team
          </a>
          <a href="#" className="hover:underline">
            Guidelines
          </a>
          <a href="#" className="hover:underline">
            Reach out
          </a>
        </div>
      </footer>
    </div>
  );
}
