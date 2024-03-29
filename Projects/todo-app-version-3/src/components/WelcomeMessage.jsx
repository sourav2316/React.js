import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 && (
      <h1 className={styles.welcome}>Enter Your 1st Todo</h1>
    )
  );
};

export default WelcomeMessage;
