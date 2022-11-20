import { FunctionComponent } from "react";
import  {useSearchParams} from 'react-router-dom'
import Title from "../components/Common/Title"

interface SearchProps {}


const Search : FunctionComponent<SearchProps> = () => {
    const [searchParams  , setSearchParams] = useSearchParams()

    const query = searchParams.get("query")
      return (
         <>
          {!query ? <Title value="Search | Stream"/> : null}
          { query ? <Title value={`Search | ${query} | Steam`}/> : null}
           
          </>
      )
}


export default Search