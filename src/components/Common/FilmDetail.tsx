import { FC, useState } from "react";
import { DetailMovie, DetailTV, FilmInfo } from "../../shared/types";
import { useAppSelector } from "../../store/hooks";
import Title from "./Title";

const FilmDetail: FC<FilmInfo> = ({
  similar,
  detail,
  credits,
  videos,
  reviews,
}) => {
     const currentUser = useAppSelector(state => state.user.user)
     const [isBookMarked , setIsBookMarked] = useState(false)
     const [isSidebarActive , setIsSidebarActive] = useState(false)
  return (
     <>
       { detail ? <Title value={`${( detail as DetailTV).name || (detail as DetailMovie).title} | Stream`}/> : null}

       
     </>
  );
};

export default FilmDetail;
