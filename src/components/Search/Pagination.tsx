import { FunctionComponent } from "react";


interface PaginationProps {
    currentPage : number ,
    onPageChaneg : ( page : number) => string
    maxPage : number
}


const Pagination : FunctionComponent<PaginationProps> = ({ currentPage , maxPage , onPageChaneg}) => {
      return (
         <div>
             
         </div>
      )
}


export default Pagination