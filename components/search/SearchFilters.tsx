'use client';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SearchFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[20, 150]}
            max={300}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>$20</span>
            <span>$300</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Activities</h3>
        <div className="space-y-2">
          {['Dining', 'Coffee', 'Movies', 'Shopping', 'Gaming', 'Study'].map((activity) => (
            <div key={activity} className="flex items-center space-x-2">
              <Checkbox id={activity} />
              <Label htmlFor={activity}>{activity}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Location</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="downtown">Downtown</SelectItem>
            <SelectItem value="north">North</SelectItem>
            <SelectItem value="south">South</SelectItem>
            <SelectItem value="east">East</SelectItem>
            <SelectItem value="west">West</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Languages</h3>
        <div className="space-y-2">
          {['English', 'Spanish', 'French', 'Chinese', 'Japanese'].map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox id={language} />
              <Label htmlFor={language}>{language}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}