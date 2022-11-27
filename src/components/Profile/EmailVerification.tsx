import {useAppSelector} from '../../store/hooks'
import {useState} from "react"

interface EmailVerificationProps {
    setIsUpdating : any
}


const EmailVerificatin  = ( {setIsUpdating} : EmailVerificationProps) => {
    const user = useAppSelector(state => state.user.user)
    const [isShowSendButton , setIsShowSendButton] = useState(true)
    const [isEmailVerificationSent , setIsEmailVerificationSent]
    return (
        <div>
             Email
            </div>
    )
}


export default EmailVerificatin