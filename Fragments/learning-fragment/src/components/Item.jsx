import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  const buttonclick = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li
      className={`${styles["sk-item"]} list-group-item ${bought && "active"} `}
    >
      <span className={styles["sk-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
