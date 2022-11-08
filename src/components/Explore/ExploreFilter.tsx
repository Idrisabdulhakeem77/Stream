import {FC} from 'react'
import SortBy from '../../components/Explore/SortBy'
import FilterBy from './FilterBy'



interface ExpoloreFilterProps {
     currentTab : string | null
}


const ExploreFilter : FC<ExpoloreFilterProps> = ( { currentTab }) => {
    return (
        <>
          <SortBy/>
          <FilterBy currentTab={currentTab}/>
         </>
    )
}


export default ExploreFilter