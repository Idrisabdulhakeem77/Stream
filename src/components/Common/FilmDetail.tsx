import { FC, useState } from "react";
import { DetailMovie, DetailTV, FilmInfo } from "../../shared/types";
import { useAppSelector } from "../../store/hooks";
import Title from "./Title";

const FilmDetail: FC<FilmInfo> = ({
  similar,
  details,
  credits,
  videos,
  reviews,
}) => {
     const currentUser = useAppSelector(state => state.user.user)
     const [isBookMarked , setIsBookMarked] = useState(false)
     const [isSidebarActive , setIsSidebarActive] = useState(false)
  return (
     <>
       { details ? <Title value={`${( details as DetailTV).name || (details as DetailMovie).title}`}/> : null}
     </>
  );
};

export default FilmDetail;
