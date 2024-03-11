import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((name) => (
        <button className={styles.buttons}>{name}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
