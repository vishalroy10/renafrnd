import { Card } from '@/components/ui/card';
import SearchFilters from '@/components/search/SearchFilters';
import UserGrid from '@/components/search/UserGrid';

export default function SearchPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4 md:col-span-1 h-fit">
          <SearchFilters />
        </Card>
        <div className="md:col-span-3">
          <UserGrid />
        </div>
      </div>
    </div>
  );
}