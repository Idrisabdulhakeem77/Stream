import {useState , useEffect} from  'react'

export const useCurrentViewPort = () => {
    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize" , () => {
            setWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener("resize" , () => {
                 setWidth(window.innerWidth)
            })
        }
         
    } , [])

    return { width  , isMobile : width < 768 }
}