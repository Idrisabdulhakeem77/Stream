import {FunctionComponent , useState} from 'react'
import{ useAutoAnimate } from '@formkit/auto-animate/react'
import { useSearchParams } from 'react-router-dom'


interface SortByProps {}


const SortBy :FunctionComponent<SortByProps>  = () => {
    const [openSort , setOpenSort] = useState(false)
    const [parent] = useAutoAnimate()


    const [searchParams , setSearchParams] = useSearchParams()

    const options = [
        { value: "popularity.desc", label: "Most popular" },
        { value: "vote_average.desc", label: "Most rating" },
        { value: "release_date.desc", label: "Most recent" },
      ];

      

     return (
         <div className='px-4 pt-3 bg-dark-lighten rounded-md'>
             Sort By
         </div>
     )
}

export default SortBy


