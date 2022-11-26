import { FunctionComponent } from "react";
import {MdArrowBackIos , MdArrowForwardIos} from 'react-icons/md'
import { Link } from "react-router-dom";

interface PaginationProps {
    currentPage : number ,
    onPageChange : ( page : number) => string
    maxPage : number
}


const Pagination : FunctionComponent<PaginationProps> = ({ currentPage , maxPage , onPageChange}) => {
      return (
         <div>
             { currentPage > 1  && (
                 <Link to={onPageChange(currentPage - 1)}>
                     <MdArrowBackIos size={25}/>
                 </Link>
             )}
         </div>
      )
}


export default Pagination