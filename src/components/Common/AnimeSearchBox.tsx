import {FaSearch} from 'react-icons/fa'


interface AnimeSerachBoxProps {}

const AnimeSearchBox = () => {
  return (
    <div>
      <form>
        <button className="absolute top-1/2 -translate-y-1/2 left-5 text-white">
          <FaSearch size={25} className="" />
        </button>
      </form>
    </div>
  );
};

export default AnimeSearchBox;
