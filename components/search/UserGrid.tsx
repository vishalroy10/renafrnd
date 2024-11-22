'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const users = [
  {
    id: 1,
    name: 'Sarah',
    age: 24,
    location: 'Downtown',
    rating: 4.8,
    reviews: 127,
    price: 30,
    activities: ['Coffee', 'Dining', 'Movies'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Michael',
    age: 28,
    location: 'North',
    rating: 4.9,
    reviews: 89,
    price: 35,
    activities: ['Gaming', 'Movies', 'Coffee'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  // Add more users as needed
];

export default function UserGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Card key={user.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative h-64 w-full">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90">
                  ${user.price}/hr
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{user.name}, {user.age}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {user.location}
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{user.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({user.reviews})</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {user.activities.map((activity) => (
                <Badge key={activity} variant="outline">
                  {activity}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button asChild className="flex-1">
              <Link href={`/profile/${user.id}`}>View Profile</Link>
            </Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}