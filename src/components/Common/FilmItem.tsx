import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { resizeImage } from "../../shared/utils";
import {AiFillStar} from 'react-icons/ai'
import {Items} from '../../shared/types'

interface FilmItemProps {
  item: Items;
}

const FilmItem: FC<FilmItemProps> = ({ item }) => {
  return (
      <div>
         { item.name}
      </div>
  );
};

export default FilmItem;
