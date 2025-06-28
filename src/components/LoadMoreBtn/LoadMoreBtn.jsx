import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMore = ({ onClick }) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
