import { FunctionComponent } from "react";


interface PaginationProps {
    currentPage : number ,
    onPageChange : ( page : number) => string
    maxPage : number
}


const Pagination : FunctionComponent<PaginationProps> = ({ currentPage , maxPage , onPageChange}) => {
      return (
         <div>
             
         </div>
      )
}


export default Pagination