import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MainBanner() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Find Your Perfect Companion
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect with friendly companions for meals, drinks, and activities. 
            Make memories and share experiences with verified friends.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/services">
              <Button size="lg">
                Find Friends
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}