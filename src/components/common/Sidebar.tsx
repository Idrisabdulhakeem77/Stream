import { FC  } from "react";
import { Link } from "react-router-dom";




interface SidebarProps  {}
 
const Sidebar : FC<SidebarProps> = ( ) => {
    
    return (
          <div>
           <Link to="/">
            <h1>
               <span>Anime</span>
               <span>Stream</span>
               </h1>
           </Link>
           
          </div>
    )
} 


export default Sidebar
