import {FC} from 'react'

interface FilmItemProps {
     item : any 
}


const FilmItem : FC<FilmItemProps> = ( { item }) => {
    return (
         <div>
             Film Item
         </div>
    )
}

export default FilmItem