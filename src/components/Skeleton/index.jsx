import React, {useEffect, useState} from 'react';
import styles from './index.module.scss'

const Skeleton = ({count = 1}) => {

  const [ele, setEle] = useState(null)


  // 延迟500ms之后再去展示骨架屏
  // 防止网速比较快的情况下，页面闪动问题
  // 同时网速比较快的时候不需要展示骨架屏
  useEffect(() => {
    const timer = setTimeout(() => {
      setEle(<div className={styles.root}>
        {
          Array.from(Array(count), (item, index) => (
            <div className="skeItem" key={index}>
              <div className="common left"></div>
              <div className="right">
                <div className="common title"></div>
                <div className="common title"></div>
                <div className="common des"></div>

                <div className="common price"></div>
                <div className="footer">
                  <div className="common footerLeft"></div>
                  <div className="common footerRight"></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>)
    }, 0)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return ele
};

export default Skeleton;
