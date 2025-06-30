import s from "./ImageCard.module.css";
import type { UnsplashImage } from "../App/App.types";

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps): JSX.Element => {
  const { urls, alt_description } = image;

  return (
    <div className={s.card}>
      <img
        src={urls.thumb ?? urls.small}
        alt={
          alt_description && alt_description.length <= 18 ? alt_description : ""
        }
        className={s.image}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
