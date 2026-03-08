import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After",
  className 
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden cursor-ew-resize select-none h-[400px] lg:h-[600px] group", className)}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={onMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Bottom) */}
      <img 
        src={afterImage} 
        alt="After Renovation" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-6 right-6 px-4 py-2 bg-secondary text-primary border border-secondary text-[10px] uppercase tracking-widest font-bold z-0">
        {afterLabel}
      </div>

      {/* Before Image (Top) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10"
        style={{ width: `${position}%` }}
      >
        <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.offsetWidth || '100vw' }}>
          <img 
            src={beforeImage} 
            alt="Before Renovation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 left-6 px-4 py-2 bg-primary text-white border border-white/10 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
          {beforeLabel}
        </div>
      </div>

      {/* Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center -ml-5 border border-primary/10">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-secondary rounded-full" />
            <div className="w-1 h-3 bg-secondary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
