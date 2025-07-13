import React, { useState, useEffect, useRef } from "react";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number, active: boolean) => React.ReactNode;
  autoRotateMs?: number;
};

export function Carousel<T>({ items, renderItem, autoRotateMs = 5000 }: CarouselProps<T>) {
  const [active, setActive] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoRotateMs > 0) {
      timeout.current = setTimeout(() => {
        setActive((a) => (a + 1) % items.length);
      }, autoRotateMs);
      return () => timeout.current && clearTimeout(timeout.current);
    }
  }, [active, autoRotateMs, items.length]);

  const go = (dir: number) => {
    setActive((a) => (a + dir + items.length) % items.length);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="flex flex-row items-center justify-center w-full">
        <button
          className="mr-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-xl"
          onClick={() => go(-1)}
          aria-label="Previous"
        >
          ◀
        </button>
        <div className="flex-1 flex justify-center overflow-hidden relative" style={{ minHeight: 320, width: '100%', maxWidth: 400 }}>
          <div
            className="flex transition-transform duration-500 w-full"
            style={{
              transform: `translateX(-${active * 100}%)`,
              width: `${items.length * 100}%`,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex justify-center"
                style={{ width: '100%' }}
              >
                {renderItem(item, i, i === active)}
              </div>
            ))}
          </div>
        </div>
        <button
          className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-xl"
          onClick={() => go(1)}
          aria-label="Next"
        >
          ▶
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 ${i === active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-gray-300 border-gray-400'}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
