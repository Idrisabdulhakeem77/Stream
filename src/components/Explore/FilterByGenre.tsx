import {FunctionComponent} from 'react'


interface FilterByGenreProps {
     currentTab  : string | null
}


const FilterByGenre : FunctionComponent<FilterByGenreProps>  = ( { currentTab}) => {
     return (
         <div>
             FilterByGenre
         </div>
     )
}


export default FilterByGenre