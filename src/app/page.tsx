"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import ResImages from "../images/res-seats.jpg";
import Image from "next/image";

export default function LandingPage() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agelgel</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-green-200">
                  About
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-green-200">
                  Book a Table
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center bg-green-700 text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50"></div>
          <div className="relative z-10 text-center p-2 sm:pd-0">
            <h2 className="text-4xl font-bold mb-1">Welcome to Agelgel</h2>
            <p className="text-xl mb-8">
              Experience nature-inspired dining in the heart of the city
            </p>
            <a
              href="#book"
              className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300"
            >
              Book a Table
            </a>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-800">About Us</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Agelgel is a sustainable, eco-friendly restaurant committed to
              providing delicious, locally-sourced meals in a beautiful,
              nature-inspired setting. Our passion for the environment is
              reflected in every aspect of our dining experience.
            </p>
          </div>
        </section>
        <div></div>
        <section id="book" className="py-24 bg-green-100 text-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-green-800">
              Reserve Your Green Experience
            </h2>
            <div className="max-w-4xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">
                    Book a Table
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className="border-green-300 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-green-300 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="10"
                        placeholder="2"
                        className="border-green-300 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-green-300 focus:border-green-500"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {date ? (
                              date.toDateString()
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Confirm Reservation
                    </Button>
                  </form>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image
                        src={ResImages}
                        alt="Table layout"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-lg font-semibold text-green-700">
                      Choose Your Perfect Spot
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Select your preferred seating area during your visit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>123 Green Street, London, 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@greeneats.com</p>
        </div>
      </footer>
    </div>
  );
}
