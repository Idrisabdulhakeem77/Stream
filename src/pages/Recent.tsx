import { FunctionComponent, useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
import Title from "../components/Common/Title";
import FilmListForBookmarkedAndRecent from "../components/FilmListForBookmarkedAndRecent/FilmListForBookmarkedAndRecent";
import { Items } from "../shared/types";
import { useAppSelector } from "../store/hooks";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../shared/firebase";

interface BookmarkProps {}

const Bookmark: FunctionComponent<BookmarkProps> = () => {
  const user = useAppSelector((state) => state.user.user);
  const [recent, setRecent] = useState<Items[]>([]);

  const [loading, setLoading] = useState(!Boolean(recent?.length));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user) return;

    const unSubscribe = onSnapshot(
      doc(db, "users", user?.uid),
      (doc) => {
        setRecent(doc.data()?.recentlyWatched?.slice().reverse());
        setLoading(false);
      },
      (error) => {
        alert(error);
        setRecent([]);
        setLoading(false);
        setError(true);
      }
    );

    return () => unSubscribe();
  }, [user]);

  if (error) return <div>Error : {error} </div>;
  return (
    <>
      <div>
        <Title value="Recent | Stream" />
        <FilmListForBookmarkedAndRecent
          films={recent}
          loading={loading}
          pageType="recent"
        />
        <Footer />
      </div>
    </>
  );
};

export default Bookmark;
