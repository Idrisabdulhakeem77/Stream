import { HTMLProps, useState } from "react";

interface ReadMoreProps {
  limitTextNumber: number;
  className?: string;
  children: React.ReactNode;
}

const ReadMore = ({
  children,
  limitTextNumber,
  className = " ",
  ...others
}: ReadMoreProps & HTMLProps<HTMLSpanElement>) => {
  const [isReadingMore, setIsReadingMore] = useState(false);

  const content = isReadingMore
    ? children
    : (children as string).slice(0, limitTextNumber);

  return (
    <>
      <span {...others} className={`${className} inline-block`}>
        {content}

        <button
          onClick={() => setIsReadingMore((prev) => !prev)}
          className="font-medium italic hover:brightness-75 transition duration-300"
        >
          {!isReadingMore &&
            (children as string).length > limitTextNumber &&
            "... See more"}
          {isReadingMore && <>&nbsp; Show less</>}
        </button>
      </span>
    </>
  );
};

export default ReadMore;
