import { FunctionComponent } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {useQuery} from '@tanstack/react-query'
import {getRecommendedGenreType} from '../../shared/types'
import { getRecommendedGenre} from '../../services/search'
interface FilterByGenreProps {
  currentTab: string | null;
}

const FilterByGenre: FunctionComponent<FilterByGenreProps> = ({
  currentTab,
}) => {
  const [genres] = useAutoAnimate();
  const { data , isLoading , error , isError} = useQuery<getRecommendedGenreType ,Error>(["genres"] , getRecommendedGenre)
  return (
    <div
      //@ts-ignore
      ref={genres}
    >
      FilterByGenre
    </div>
  );
};

export default FilterByGenre;
