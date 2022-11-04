import { FC , useState , useEffect  } from "react";
import Title from "../components/Common/Title";
import MiniSidebar from '../components/Common/MiniSidebar'
import SortBy from "../components/Explore/SortBy";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  return (
     <>
       <Title value="Explore"/>
        {/* <MiniSidebar/> */}
         <SortBy/>
      </>
  );
};

export default Explore;
