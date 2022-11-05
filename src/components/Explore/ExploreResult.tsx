import { FunctionComponent, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ConfigType, ItemsPage } from "../../shared/types";
import FilmItem from "../Common/FilmItem";
import Skeleton from "../Common/Skeleton";

interface ExploreMovieResultProps {
  pages?: ItemsPage[];
}

const ExploreMovieResult: FunctionComponent<ExploreMovieResultProps> = ({
  pages,
}) => {
  return (
    <ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10 pt-2">
      {pages &&
        pages.map((page) =>
          page.results.map((item) => (
            <li key={item.id}>
              <FilmItem item={item} />
            </li>
          ))
        )}
      {!pages &&
        [...new Array(15)].map((_, index) => (
          <li key={index}>
            <Skeleton className="h-0 pb-[160%]" />
          </li>
        ))}
    </ul>
  );
};

interface ExploreTvResultProps {
    pages?: ItemsPage[];
  }
  
  const ExploreTvResult: FunctionComponent<ExploreTvResultProps> = ({
    pages,
  }) => {
    return (
      <ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10 pt-2">
        {pages &&
          pages.map((page) =>
            page.results.map((item) => (
              <li key={item.id}>
                <FilmItem item={item} />
              </li>
            ))
          )}
        {!pages &&
          [...new Array(15)].map((_, index) => (
            <li key={index}>
              <Skeleton className="h-0 pb-[160%]" />
            </li>
          ))}
      </ul>
    );
  };
  






interface ExploreResultProps {
   currentTab : string ;
    config : ConfigType
}

const ExploreResult: FunctionComponent<ExploreResultProps> = ({ currentTab , config }) => {
  return <div>Explore Results</div>;
};

export default ExploreResult;
