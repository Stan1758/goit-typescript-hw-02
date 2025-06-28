import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <div className={s.card}>
      <img
        src={urls.thumb}
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
