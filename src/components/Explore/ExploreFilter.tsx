import {FC} from 'react'
import SortBy from '../../components/Explore/SortBy'



interface ExpoloreFilterProps {
     currentTab : string | null
}


const ExploreFilter : FC<ExpoloreFilterProps> = ( { currentTab }) => {
    return (
        <>
          <SortBy/>
         </>
    )
}


export default ExploreFilter