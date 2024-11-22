'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Music, Book, GamepadIcon, Camera } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Coffee & Chat",
    description: "Casual conversation over a cup of coffee",
    price: "From $20/hour",
    href: "/services/coffee-chat"
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Dining Companion",
    description: "Share a meal and great conversation",
    price: "From $30/hour",
    href: "/services/dining"
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "Concert Buddy",
    description: "Enjoy live music together",
    price: "From $40/hour",
    href: "/services/concerts"
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: "Study Partner",
    description: "Productive study sessions together",
    price: "From $25/hour",
    href: "/services/study"
  },
  {
    icon: <GamepadIcon className="h-8 w-8" />,
    title: "Gaming Friend",
    description: "Play your favorite games together",
    price: "From $25/hour",
    href: "/services/gaming"
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Photography Partner",
    description: "Explore and take photos together",
    price: "From $35/hour",
    href: "/services/photography"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Popular Activities</h2>
          <p className="text-muted-foreground mt-4">Choose from our most requested companion services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 text-primary">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-4">{service.price}</p>
                <Link href={service.href}>
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}