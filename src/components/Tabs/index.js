import React, {useRef} from 'react';
import classnames from 'classnames'
import styles from './index.module.scss'


const Tabs = ({data = [], onChange = () => null, rowKey = '', activeKey = 0}) => {
  const rootRef = useRef(null)
  const handleChange = (index, e) => {
    onChange(index)
    rootRef.current.scrollTo({
      left: e.target.offsetLeft - window.innerWidth / 2,
      behavior: 'smooth'
    })
  }
  return (
    <div className={styles.root} ref={rootRef}>
      <ul className={'cateContainer'}>
        {
          data.map((cateItem, index) => (
            <li
              className={classnames({active: index === activeKey})}
              key={cateItem[rowKey]}
              onClick={(e) => handleChange(index, e)}
            >
              {cateItem.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Tabs;
