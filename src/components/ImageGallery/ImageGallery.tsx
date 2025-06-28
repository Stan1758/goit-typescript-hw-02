import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((img) => (
        <li key={img.id} className={s.item}>
          <ImageCard image={img} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
