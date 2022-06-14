import {useEffect, useState, useRef} from 'react';
import {useThrottleFn} from "ahooks";


const useTouch = ({ref}) => {
  const [mouse, setMouse] = useState({x: 0, y: 0})
  const [startPoint, setStartPoint] = useState(0)
  const [movePoint, setMovePoint] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const currentPoint = useRef(0)

  useEffect(() => {
    console.log(offsetX)
    ref.current.style.transform = `translateX(${offsetX}px)`
  }, [offsetX])
  /**
   *
   * @param {TouchEvent} e
   */
  const {run} = useThrottleFn(e => {
    setOffsetX(() => {
      return e.targetTouches[0].pageX - startPoint + currentPoint.current
    })
  }, {wait: 16})

  /**
   *
   * @param {TouchEvent} e
   */
  const startTouch = e => {
    setStartPoint(e.targetTouches[0].pageX)
  }

  /**
   *
   * @param {TouchEvent} e
   */
  const endTouch = e => {
    console.log(offsetX)
    currentPoint.current = offsetX
  }
  console.log(offsetX)
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('touchmove', run)
      ref.current.addEventListener('touchend', endTouch)
      ref.current.addEventListener('touchstart', startTouch)
      return () => ref.current.removeEventListener('touchmove', run)
    }
  }, [ref.current])
  return [];
};

export default useTouch;
