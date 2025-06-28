import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.message}>
      <p> {message || "Сталася помилка при завантаженні зображень."}</p>
    </div>
  );
};

export default ErrorMessage;
