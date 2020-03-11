import React from "react";
import styles from './list.module.css'

const List = ({ title, image }) => {
  return (
    <div className={window.innerWidth>800?styles.ListContainerBig:styles.ListContainerSmall}>
      <h2 >{title}</h2>
      <img className={styles.image} src={image} alt="img" />
    </div>
  );
};


export default List;
