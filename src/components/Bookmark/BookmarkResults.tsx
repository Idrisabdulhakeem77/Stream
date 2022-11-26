import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Items } from "../../shared/types";


interface BookmarkResultsProps {
    films : Items[],
    isEditting : boolean 
    pageType  : string
    selections : number[]
    setSelection : any
    isLoading: boolean
} 


const BookmarkResults :  FunctionComponent<BookmarkResultsProps> = ( { films , isEditting ,isLoading,pageType ,selections , setSelection} ) => {
     return ( 
        <>
           { films.length === 0 && !isLoading && (
             <div>
                 <div> 
                    <LazyLoadImage
                    src="/error.png"
                      effect="opacity"
                     />
                 </div>
             </div>
           )}
         </>
     )
}


export default BookmarkResults