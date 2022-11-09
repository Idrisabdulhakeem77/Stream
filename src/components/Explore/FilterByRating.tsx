import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useCurrentSeaarchParams } from "../hooks/useCurrentSearchParams";

interface FilterByRatingProps {}

const MAX_RUNTIME = 200;
const GAP = 20;

const FilterByRating: FunctionComponent<FilterByRatingProps> = () => {
  const sliderRangeRef = useRef<HTMLDivElement>(null!);
  const location = useLocation();

  const [minRuntime, setMinRuntime] = useState(0);
  const [maxRuntime, setMaxRuntime] = useState(200);

  const timeoutRef = useRef<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentSearchparams] = useCurrentSeaarchParams();

  useEffect(() => {
    updateMinRangeBar(Number(searchParams.get("minRuntime")) ?? 0);
    updateMaxRangeBar(Number(searchParams.get("maxRuntime")) || 200);

    // eslint-disable-next-line
  }, [location.search]);


  const updateMinRangeBar = (value: number) => {
    setMinRuntime(value);
    const leftOffet = (value / MAX_RUNTIME) * 100;
    sliderRangeRef.current.style.left = leftOffet + "%";
  };

  const updateMaxRangeBar = (value: number) => {
    setMaxRuntime(value);
    const rightOffet = 100 - (value / MAX_RUNTIME) * 100;
    sliderRangeRef.current.style.right = rightOffet + "%";
  };


  const handleDragSliderRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (e.target.name === "min-range") {
      updateMinRangeBar(
        maxRuntime - Number(e.target.value) < GAP
          ? maxRuntime - GAP
          : Number(e.target.value)
      );

      timeoutRef.current = setTimeout(() => {
        setSearchParams({
          ...currentSearchparams,
          minRuntime: e.target.value,
        });
      }, 500);
    } else {
      updateMaxRangeBar(
        Number(e.target.value) - minRuntime < GAP
          ? minRuntime + GAP
          : Number(e.target.value)
      );

      timeoutRef.current = setTimeout(() => {
        setSearchParams({
          ...currentSearchparams,
          maxRuntime: e.target.value,
        });
      }, 500);
    }
  };

  return <div>Filter By rating</div>;
};

export default FilterByRating;
