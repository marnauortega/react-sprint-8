import { useEffect } from "react";

const Page = ({ title, mainClass = "", children }) => {
  useEffect(() => {
    document.title = `Star Wars | ${title}`;
    window.scrollTo(0, 0);
  }, []);

  return <main className={mainClass}>{children}</main>;
};

export default Page;
