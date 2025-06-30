import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: LoadMoreProps): JSX.Element => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
