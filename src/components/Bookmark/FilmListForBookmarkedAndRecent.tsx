import { FunctionComponent } from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react"
import { useAppSelector } from '../../store/hooks'
import { Items } from "../../shared/types";
import Sidebar from '../Common/Sidebar'
import Skeleton from '../Common/Skeleton'
import { updateDoc , doc} from "firebase/firestore"
import { Link } from "react-router-dom";
import {db} from '../../shared/firebase'

interface FilmListForBookmarkedAndRecentProps {
  films: Items[];
  pageType: string;
  loading: boolean;
}

const FilmListForBookmarkedAndRecent: FunctionComponent<
  FilmListForBookmarkedAndRecentProps
> = ({ films, loading, pageType }) => {
    
    const user = useAppSelector(state => state.user.user)

   const [parent] = useAutoAnimate()
  return <div>Something</div>;
};

export default FilmListForBookmarkedAndRecent;
