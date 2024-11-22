import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Calendar, MessageSquare, Heart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Browse Friends",
    description: "Explore profiles of verified companions in your area"
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Book Time",
    description: "Choose your preferred date, time, and activity"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Connect",
    description: "Chat with your companion and plan your meetup"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Meet & Enjoy",
    description: "Have a great time with your new friend"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="text-muted-foreground mt-4">Simple steps to rent a friend</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 text-primary">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}