import { FunctionComponent } from "react";
import { Items } from "../../shared/types";

interface FilmListForBookmarkedAndRecentProps {
  films: Items[];
  pageType: string;
  loading: boolean;
}

const FilmListForBookmarkedAndRecent: FunctionComponent<
  FilmListForBookmarkedAndRecentProps
> = ({ films, loading, pageType }) => {
  return <div>Something</div>;
};

export default FilmListForBookmarkedAndRecent;
