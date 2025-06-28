import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes, description } = image;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.backdrop}
      contentLabel="Image Modal"
    >
      <button className={s.close} onClick={onClose}>
        ×
      </button>

      <div className={s.content}>
        <img
          src={urls.regular}
          alt={alt_description || "Image"}
          className={s.image}
        />
        <div className={s.details}>
          {description && (
            <p>
              <strong>Опис:</strong> {description}
            </p>
          )}
          <p>
            <strong>Автор:</strong> {user.name}
          </p>
          <p>
            <strong>Лайки:</strong> {likes}
          </p>
          {user.links?.html && (
            <a
              href={user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              Профіль автора
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
