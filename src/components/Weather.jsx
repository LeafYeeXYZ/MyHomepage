import { useState, useEffect } from 'react'
import '../styles/Weather.css'

export default function Weather() {
  // 天气
  const [weather, setWeather] = useState('Loading...')
  // 渲染后执行异步操作
  useEffect(() => {
    const weatherExpire = localStorage.getItem('weatherExpire')
    const weather = localStorage.getItem('weather')
    if (weatherExpire && weather && Date.now() < weatherExpire) {
      setWeather(weather)
    } else {
      fetch(`https://api.leafyee.xyz/weather`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const daily = data.daily[0]
        const date = new Date()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const week = ['天', '一', '二', '三', '四', '五', '六'][date.getDay()]
        const text = `${month}月${day}日, 星期${week}, 天气${daily.textDay}, ${daily.tempMin}-${daily.tempMax}℃; 明日${data.daily[1].textDay}, ${data.daily[1].tempMin}-${data.daily[1].tempMax}℃`
        setWeather(text)
        // 存入 localStorage
        localStorage.setItem('weather', text)
        const weatherExpire = Date.now() + 60 * 60 * 1000
        localStorage.setItem('weatherExpire', weatherExpire)
      })
    }
  }, [])
  // 返回 JSX 元素
  return <section className='weather'>{weather}</section>
}