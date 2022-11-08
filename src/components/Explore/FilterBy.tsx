import {FunctionComponent} from 'react'



interface FilterByProps {
     currentTab : string | null
}


const FilterBy : FunctionComponent<FilterByProps> = ({ currentTab} ) => {
      return (
         <div>
             Filterby
         </div>
      )
}


export default FilterBy