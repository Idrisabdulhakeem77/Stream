import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DetailSeason } from "../../shared/types";
import { resizeImage } from "../../shared/utils";
import Skeleton from "../Common/Skeleton";
import { Link } from "react-router-dom";

interface SeasonSelectionProps {
  episodeId?: number;
  seasonId?: number;
  detailSeasons: DetailSeason[] | undefined;
}

interface SeasonProps {
  episodeId?: number;
  seasonId?: number;
  season: DetailSeason;
}

const Season = ({ season, episodeId, seasonId }: SeasonProps) => {
  const [list] = useAutoAnimate();
  const [seasonExpanded, setSeasonExpanded] = useState<number | undefined>(
    seasonId
  );

  return (
    <li
      // @ts-ignore
      ref={list}
    >
      <button
        onClick={() =>
          setSeasonExpanded(
            seasonExpanded !== season.season_number
              ? season.season_number
              : undefined
          )
        }
        className="w-full rounded-md px-2 pt-2 pb-1 inline-flex items-center gap-7 transition duration-300 hover:bg-gray-500"
      >
        <div className="w-full shrink-0 max-w-[100px]">
          <LazyLoadImage
            src={resizeImage(season.poster_path, "w154")}
            effect="opacity"
            className="object-cover rounded-sm h-[100px] w-[100px]"
          />
        </div>

        <div className="flex-grow text-left">
          <p
            className={`text-white text-lg mb-2 transition duration-300 ${
              season.season_number === seasonId && "!text-primary"
            }`}
          >
            {" "}
            {season.name}{" "}
          </p>
          <p
            className={` transition duration-300 ${
              season.season_number === seasonId && "text-white"
            }`}
          >
            Episodes : {season.episodes.length}{" "}
          </p>
        </div>
      </button>

      {seasonExpanded === season.season_number && (
        <ul className="flex flex-col gap-4 pl-6 mt-2">
          {season.episodes.map((episode) => (
            <li key={episode.id}>
              <Link
                to={{
                  pathname: "",
                  search: `?season=${season.season_number}&episode=${episode.episode_number}`,
                }}
                className="flex items-center gap-3 hover:bg-dark-lighten transiton duration-300 rounded-md pl-2"
              >
                <div className="shrink-0 max-w-[15px] w-full">
                  <p
                    className={`text-white font-medium transition duration-300 ${
                      episode.episode_number === episodeId &&
                      season.season_number === seasonId &&
                      "!text-primary"
                    }`}
                  >
                    {episode.episode_number}
                  </p>
                </div>
                <div className="shrink-0 max-w-[120px] w-full pt-2">
                  <LazyLoadImage
                    src={resizeImage(episode.still_path, "w185")}
                    alt=""
                    effect="opacity"
                    className="object-cover w-[120px] rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <p
                    className={`transition duration-300 text-sm ${
                      episode.episode_number === episodeId &&
                      season.season_number === seasonId &&
                      "text-white"
                    }`}
                  >
                    {episode.name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const SeasonSelection = ({
  detailSeasons,
  episodeId,
  seasonId,
}: SeasonSelectionProps) => {
  const [parent] = useAutoAnimate();
  return (
    <ul
      //@ts-ignore
      ref={parent}
    >
      {detailSeasons &&
        (detailSeasons as DetailSeason[]).map((season) => (
          <Season
            seasonId={seasonId}
            season={season}
            episodeId={episodeId}
            key={season.id}
          />
        ))}

      {!detailSeasons && (
        <div>
          <Skeleton className="h-[118px] mb-6" />

          <ul className="flex flex-col gap-4 pl-10">
            {new Array(6).fill("").map((_, index) => (
              <li key={index}>
                <Skeleton className="h-[81px]" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </ul>
  );
};

export default SeasonSelection;
