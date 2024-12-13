import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-4 flex items-center gap-3 text-white max-w-2xl w-full">
      <AlertCircle className="w-6 h-6 flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
}