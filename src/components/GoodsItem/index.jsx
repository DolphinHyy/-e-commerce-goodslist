import React from 'react';
import styles from './index.module.scss'
import GoodsChild from "./components/GoodsChild";
import GoodsTheme from "./components/GoodsTheme";

const GoodsItem = ({data = []}) => {
  return (
    <div className={styles.root}>
      {
        data.map((item, index) => (
          item.type === 'ITEM' ? <GoodsChild item={item} key={`${item.id}-${index}`}/> : <GoodsTheme item={item} key={`${item.id}-${index}`}/>
        ))
      }
    </div>
  );
};

export default GoodsItem;
