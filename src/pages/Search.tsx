import { FunctionComponent } from "react";
import  {useSearchParams} from 'react-router-dom'

interface SearchProps {}


const Search : FunctionComponent<SearchProps> = () => {
    const [searchParams  , setSearchParams] = useSearchParams()
      return (
         <div>
             Search page
         </div>
      )
}


export default Search