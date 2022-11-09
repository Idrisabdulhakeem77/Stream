import React, { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";
import { useCurrentSeaarchParams } from "../hooks/useCurrentSearchParams";

interface FilterByDateProps {}

const FilterByDate: FunctionComponent<FilterByDateProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentSearchParms] = useCurrentSeaarchParams();

  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "from") {
      setSearchParams({
        ...currentSearchParms,
        from: e.target.value,
      });
    } else {
      setSearchParams({
        ...currentSearchParms,
        to: e.target.value,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label htmlFor="from"> From</label>
        <input
          className="outline-none bg-dark-lighten-2 px-3 py-1 rounded-md"
          type="date"
          name="from"
          id="from"
          onChange={handleFilterDate}
          value={searchParams.get("from") || "2000-12-13"}
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="to"> To</label>
        <input
          className="outline-none bg-dark-lighten-2 px-3 py-1 rounded-md"
          type="date"
          name="to"
          id="to"
          onChange={handleFilterDate}
          value={searchParams.get("to") || "2023-01-01"}
        />
      </div>
    </div>
  );
};

export default FilterByDate;
