// -> 原生hook&第三方hook
import {useEffect, useRef, useState} from "react";
import {useRequest, useInfiniteScroll} from "ahooks";

// -> 组件
import Tabs from "./components/Tabs";
import GoodsItem from './components/GoodsItem'
import Loading from "./components/Loading";
import Skeleton from "./components/Skeleton";

// -> api
import {getCateList, getScrollGoodsList} from "./api/goods";

// -> 样式
import './App.css'


const App = () => {
  const goodsRef = useRef(null)
  const {data = {}, loading, loadMore, reload} = useInfiniteScroll((data) => {
    console.log(data)
    return getScrollGoodsList(data?.list?.at(-1)?.id)
  }, {
    target: goodsRef, // 通过ref指定需要无线滚动的容器
    isNoMore: d => d?.nextId === '没有更多了' // 模拟没有数据的条件，通过接口定义决定
  })
  const {data: cateList = []} = useRequest(getCateList)
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeCurrentIndex = index => {
    setCurrentIndex(index)
    reload()
  }

  return (
    <div className={'container'} ref={goodsRef}>
      <Tabs
        data={cateList}
        rowKey={'id'}
        onChange={changeCurrentIndex}
        activeKey={currentIndex}
      />
      {
        loading && <Skeleton count={10}/>
      }
      <GoodsItem data={data?.list}/>
      {
        loadMore && <Loading/>
      }
    </div>
  );
};

export default App;
