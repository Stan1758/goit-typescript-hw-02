import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import type { UnsplashImage } from "../App/App.types";

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

const ImageGallery = ({
  images,
  onImageClick,
}: ImageGalleryProps): JSX.Element => {
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
