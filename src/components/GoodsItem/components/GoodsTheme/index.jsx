import React from 'react';
import styles from './index.module.scss'
import GoodsImage from "../../../GoodsImage";

const GoodsTheme = ({item: goodsItem = {}}) => {
  return (
    <div className={styles.root}>
      <div className={'backContainer'}>
        <div className="header">
          <div className="headerLeft">Artka Official Store</div>
          <div className="headerRight">
            see More <img className={'icon'}
                          src="//ae01.alicdn.com/kf/H157b0f3118644521991ade738ac2db80L/48x48.png_.webp"/>
          </div>
        </div>

        <div className="tags">
          <div className="tagsItem">up to 50% off</div>
        </div>
      </div>

      <div className="goodsMain">
        {
          goodsItem.products.map(proItem => {
            return <GoodsImage
              style={{width: '28vw'}}
              key={proItem.id}
              imageUrl={proItem.imageUrl}
              effectiveDiscount={proItem.effectiveDiscount}
            />
          })
        }
      </div>
    </div>
  );
};

export default GoodsTheme;
