import { FunctionComponent , useEffect , useState } from "react";
import Footer from "../components/Common/Footer";
import Title from "../components/Common/Title";

interface BookmarkProps {}


const Bookmark : FunctionComponent<BookmarkProps> = () => {
     return (
        <div>
           <Title value="Bookmark | Stream"/>

           <Footer/>
        </div>
         
     )
}


export default Bookmark