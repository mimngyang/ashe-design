import React, { useRef, useState } from 'react'
import { CountDown } from './countdown'

interface countdownRefState {
  start: () => void
  pause: () => void
  reset: () => void
}
const partItemStyle = {
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '25px',
  background: '#e8220e',
  color: '#fff',
  fontSize: '14px',
  borderRadius: '6px',
}
const partItemSymbolStyle = {
  margin: '0 5px',
}

interface countdownRefState {
  start: () => void
  pause: () => void
  reset: () => void
}
const CountDownDemo = () => {
  const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
  })

  const countDownRef = useRef<countdownRefState>(null)

  const onChange = (v: any) => {
    setResetTime(v)
  }

  const onStart = () => {
    countDownRef.current && countDownRef.current.start()
  }
  const onPause = () => {
    countDownRef.current && countDownRef.current.pause()
  }
  const onReset = () => {
    countDownRef.current && countDownRef.current.reset()
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <CountDown
          endTime={Date.now() + 30 * 60 * 60 * 1000}
          format="DD:HH:mm:ss:SS"
        />

        <div>毫秒级渲染</div>
        <CountDown
          endTime={Date.now() + 60 * 1000}
          millisecond
          format="HH:mm:ss:SS"
        />

        <div>自定义格式</div>
        <CountDown
          endTime={Date.now() + 60 * 1000 * 60 * 60}
          format="DD 天 HH 时 mm 分 ss 秒"
        />

        <div>自定义样式</div>
        <CountDown endTime={Date.now() + 60 * 1000 * 60} onChange={onChange}>
          <div
            className="countdown-part-box"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div className="part-item-symbol" style={partItemSymbolStyle}>
              {resetTime.d}天
            </div>
            <div className="part-item h" style={partItemStyle}>
              {resetTime.h}
            </div>
            <span className="part-item-symbol" style={partItemSymbolStyle}>
              :
            </span>
            <div className="part-item m" style={partItemStyle}>
              {resetTime.m}
            </div>
            <span className="part-item-symbol" style={partItemSymbolStyle}>
              :
            </span>
            <div className="part-item s" style={partItemStyle}>
              {resetTime.s}
            </div>
          </div>
        </CountDown>

        <div>手动控制</div>
        <CountDown
          ref={countDownRef}
          time={80000}
          autoStart={false}
          onFinish={() => {
            console.log('倒计时结束')
          }}
        />
        <span onClick={onStart}>开始</span>
        <span onClick={onPause}>暂停</span>
        <span onClick={onReset}>重置</span>
      </div>
    </>
  )
}

export default CountDownDemo
