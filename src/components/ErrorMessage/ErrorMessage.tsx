import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return (
    <div className={styles.message}>
      <p>{message || "Сталася помилка при завантаженні зображень."}</p>
    </div>
  );
};

export default ErrorMessage;
