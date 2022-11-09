import React, { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";
import { useCurrentSeaarchParams } from '../hooks/useCurrentSearchParams'

interface FilterByDateProps {}

const FilterByDate: FunctionComponent<FilterByDateProps> = () => {
  const [searchParams , setSearchParams] = useSearchParams()
  const [currentSearchParms]  = useCurrentSeaarchParams()

  const handleFilterDate =  ( e : React.ChangeEvent<HTMLInputElement>) => {
     if(e.target.name === "from") {
         setSearchParams({ 
             ...currentSearchParms ,
             from  : e.target.value
         } )
     }  else {
         setSearchParams({
             ...currentSearchParms,
            to : e.target.value
         })
     }
  }

  return <div>FilterByDate</div>;
};

export default FilterByDate;
