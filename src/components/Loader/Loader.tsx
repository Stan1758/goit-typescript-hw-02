import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = (): JSX.Element => {
  return (
    <div className={css.backdrop}>
      <BeatLoader color="#27b954" />
    </div>
  );
};

export default Loader;
