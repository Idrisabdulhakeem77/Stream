import { useState } from "react";

interface AnimeFilterByRating {}

const MAX_RUNTIME = 200

const AnimeFilterByRating = () => {
  const [minRuntime, setMinRuntime] = useState(0);
  const [maxRuntime, setMaxRuntime] = useState(200);
  return (
    <div>
      <div className="flex justify-between mb-3">
        <div className="flex gap-2 items-center">
          <span>From</span>
          <p className="flex gap-1 items-center">
            <span className="text-lg font-medium text-white/60">
              {minRuntime}
            </span>
            <span className="text-sm">min</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>To</span>
          <p className="flex gap-1 items-center">
            <span className="text-lg font-medium text-white/60">
              {maxRuntime}
            </span>
            <span className="text-sm">min</span>
          </p>
        </div>
      </div>

      <div className="relative h-[5px] bg-dark-darken rounded-md">
        <div
           
        //   ref={sliderRangeRef}
          className="absolute top-0 h-[5px]  rounded-md"
        ></div>
      </div>
      <div className="relative">
        <input
          className="absolute -top-[5px] left-0 w-full h-[5px] appearance-none [background:none] pointer-events-none tw-slider-range"
          type="range"
          min="0"
          max={MAX_RUNTIME}
          step="10"
          name="min-range"
          value={minRuntime}
        />
        <input
          className="absolute -top-[5px] left-0 w-full h-[5px] appearance-none [background:none] pointer-events-none tw-slider-range"
          type="range"
          min="0"
          max={MAX_RUNTIME}
          step="10"
          name="max-range"
          value={maxRuntime}
        
        />
      </div>
    </div>
  );
};

export default AnimeFilterByRating;
