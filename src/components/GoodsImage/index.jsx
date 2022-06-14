import React from 'react';
import styles from './index.module.scss'

const GoodsImage = ({imageUrl = '', effectiveDiscount = '', style = {}}) => {
  return (
    <div style={style} className={styles.imgContainer}>
      <img src={imageUrl} alt=""/>
      <div className={'goodsPercent'}>
        <span className={'percentTxt percentNumber'}>{effectiveDiscount}</span><span
        className={'percentTxt percentPointer'}>%</span>
      </div>
    </div>
  );
};

export default GoodsImage;
