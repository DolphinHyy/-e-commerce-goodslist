import React from 'react';
import GoodsImage from "../../../GoodsImage";

const GoodsChild = ({item = {}}) => {
  return (
    <div className="goodsItem" key={item.id}>
      <GoodsImage style={{width: '36.2667vw'}} imageUrl={item.imageUrl} effectiveDiscount={item.effectiveDiscount}/>
      <div className="contentContainer">
        <div className="goodsTitle">
          {item.title}
        </div>
        <div className="goodsDescription">
          {item?.sellingPointsAll?.marketingSellingpoint?.[0]?.textContent}
        </div>
        <div className="orderCount">
          <div className="orderNumber">
            <span>{item.stock} </span>
            <span> orders</span>
          </div>
          <div className="orderLine"> |</div>
          <img src={'https://ae01.alicdn.com/kf/Hadf2fb4b21034e498c1601c7f697febfL/36x36.png_.webp'} alt=""/>
          <div className="orderScore"> {item.reviewStar}</div>
        </div>
        <div className="priceContainer">
          <div className="priceCurrent">
            {item.effectivePromotionMinPrice}
          </div>
          <div className="priceDel">
            {item.oriMinPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsChild;
