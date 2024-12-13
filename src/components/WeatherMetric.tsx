import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WeatherMetricProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function WeatherMetric({ icon: Icon, label, value }: WeatherMetricProps) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <Icon className="w-6 h-6" />
      <div>
        <p className="text-sm">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}