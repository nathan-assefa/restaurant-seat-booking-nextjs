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
    <div className="flex flex-col min-h-screen bg-green-50 bg-opacity-50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="relative z-10">
        {/* <header className="flex justify-between items-center p-4 border-b bg-white bg-opacity-90">
          <Menu className="h-6 w-6 text-green-700" />
          <h1 className="text-xl font-semibold text-green-800">
            Eco-friendly Restaurant
          </h1>
          <span className="text-sm text-green-700">VIEW</span>
        </header> */}

        <main className="flex-grow p-6 max-w-md mx-auto">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-2 text-green-800">
              Table Booking
            </h2>
            <p className="text-green-700 mb-8">
              Book your table now and enjoy our sustainable dishes crafted with
              fresh, local produce.
            </p>

            <div className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium mb-2 text-green-700">
                  <Users className="mr-2 h-4 w-4" />
                  Guest Count
                </label>
                <Select>
                  <SelectTrigger className="border-green-300 focus:ring-green-500">
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
                <label className="flex items-center text-sm font-medium mb-2 text-green-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date
                </label>
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={handlePrevMonth}
                      className="text-green-700 hover:text-green-900"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <h3 className="text-lg font-semibold text-green-800">
                      {currentMonth.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                    <button
                      onClick={handleNextMonth}
                      className="text-green-700 hover:text-green-900"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="text-sm font-medium text-green-600"
                      >
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(currentMonth).map((date, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        className={cn(
                          "h-8 w-8 rounded-full text-sm",
                          date
                            ? "hover:bg-green-200 text-green-800"
                            : "invisible",
                          date &&
                            date.toDateString() ===
                              selectedDate?.toDateString() &&
                            "bg-green-500 text-white hover:bg-green-600"
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
                <label className="flex items-center text-sm font-medium mb-2 text-green-700">
                  <Clock className="mr-2 h-4 w-4" />
                  Time
                </label>
                <Select>
                  <SelectTrigger className="border-green-300 focus:ring-green-500">
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

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Book Now
              </Button>
            </div>
          </div>
        </main>

        <footer className="bg-green-800 text-green-100 p-6 text-sm">
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
    </div>
  );
}
