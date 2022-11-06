import { FC} from 'react'
import { Animes } from '../../shared/types'
import AnimeBannerSlider from '../Slider/AnimeBannerSlider'
import Skeleton from '../../components/Common/Skeleton'
import SectionSlider from '../Slider/SectionSlider'


interface AnimeProps {
     data : Animes[] | undefined 
     isSectionLoading : boolean
}


const Anime : FC<AnimeProps> = ( { data  , isSectionLoading }) => {

     return (
        <>
          <AnimeBannerSlider animes={data}/>

           <ul className='flex flec-col mt-12'>
           {isSectionLoading ? (
          <>
            {new Array(2).fill("").map((_, index) => (
              <li key={index}>
                <Skeleton className="mb-3 max-w-[10%] h-8 rounded-md" />
                <SectionSlider films={undefined} />
              </li>
            ))}
          </>
        ) : (
          Object.entries(data as Animes[])
            .map((section, index) =>  {
                console.log(section)
                return (
                   <div>
                       Section
                   </div>
                )
            })
        )}
           </ul>
         </>
     )
     
}


export default Anime