import { FC , useState , useEffect  } from "react";
import Title from "../components/Common/Title";
import MiniSidebar from '../components/Common/MiniSidebar'

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  return (
     <>
       <Title value="Explore"/>
        <MiniSidebar/>
        
      </>
  );
};

export default Explore;
