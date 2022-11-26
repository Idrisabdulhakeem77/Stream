import { FunctionComponent , useEffect , useState } from "react";
import Footer from "../components/Common/Footer";
import Title from "../components/Common/Title";
import FilmListForBookmarkedAndRecent from '../components/Bookmark/FilmListForBookmarkedAndRecent'
import { Items} from '../shared/types'
import {useAppSelector} from "../store/hooks"
import {doc , onSnapshot} from 'firebase/firestore' 
import {db} from '../shared/firebase'


interface BookmarkProps {}


const Bookmark : FunctionComponent<BookmarkProps> = () => {

    const user = useAppSelector(state => state.user.user)
    const [bookmarkFilms , setBookMarkFilms] = useState<Items[]>([] )
   
    const [loading , setLoading ] = useState(!Boolean(bookmarkFilms.length)) 
    const [error , setError] = useState(false)

    useEffect(() => {
          if(!user) return
          
        const unSubscribe =  onSnapshot( doc(db , "users" , user?.uid) , (doc) =>  {
             setBookMarkFilms(doc.data()?.bookmarks.slice().reverse() )
             setLoading(false)
        } , (error) => {
             alert(error)
             setBookMarkFilms([]);
             setLoading(false);
             setError(true);
        }   )
            
 

      return () => unSubscribe()
    } , [user])

    if(error) return <div>Error : {error} </div>
     return (
        <>
         { console.log(bookmarkFilms)}
        <div>
            
           <Title value="Bookmark | Stream"/>
              <FilmListForBookmarkedAndRecent
                 films={}
                />
           <Footer/>
        </div>
        </>
     )
}


export default Bookmark