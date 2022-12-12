import { Cast, DetailMovie, DetailTV, Reviews } from "../../shared/types"

interface FilmTabInfoProps {
    detail?: DetailMovie | DetailTV | undefined;
    credits?: Cast[] | undefined;
    reviews?: Reviews[] | undefined;
}

const FilmTabInfo = ( {detail} : FilmTabInfoProps) => {
  return (
    <>
      <div>Film Tab Info</div>
    </>
  );
};

export default FilmTabInfo;
