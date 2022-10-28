import { FC, useEffect } from "react";

interface Titleprops {
  value: string;
}

const Title: FC<Titleprops> = ({ value }) => {
  useEffect(() => {
    document.title = value;
  }, [value]);

  return <></>;
};

export default Title;
