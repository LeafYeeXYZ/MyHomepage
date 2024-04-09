import './App.css'
import { links } from './config'
import { useState, useEffect } from 'react'
import { CompassFilled } from '@ant-design/icons'

function App() {
  // 天气
  const [weather, setWeather] = useState('Loading...')
  // 一言
  const [essay, setEssay] = useState('Loading...')
  // 链接列表
  const Links = links.map((link, index) => <a key={index} href={link.url} className='link' target='_blank'>{link.icon}&nbsp;{link.name}</a>)
  Links.push(<a key='essay' className='link essay'>&quot;{essay}&quot;</a>)
  // 渲染后执行异步操作
  useEffect(() => {
    // 一言
    fetch('https://v1.hitokoto.cn?c=j&c=a&c=b&c=d&c=i&max_length=30')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setEssay(data.hitokoto)
    })
    // 天气
    fetch(`https://devapi.qweather.com/v7/weather/3d?location=101010100&key=${import.meta.env.WEATHER}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      const daily = data.daily[0]
      const date = new Date()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const week = ['天', '一', '二', '三', '四', '五', '六'][date.getDay()]
      setWeather(`${month}月${day}日, 星期${week}, 天气${daily.textDay}, ${daily.tempMin}-${daily.tempMax}℃; 明日${data.daily[1].textDay}, ${data.daily[1].tempMin}-${data.daily[1].tempMax}℃`)
    })
  })
  // 返回 JSX 元素
  return (
    <main className='container'>
      <section className='nav weather'>{weather}</section>
      <a href='https://blog.leafyee.xyz/about/#%E5%B8%B8%E7%94%A8%E7%BD%91%E7%AB%99%E5%AF%BC%E8%88%AA' target='_blank' className='nav compass'><CompassFilled /></a>
      <section className='links'>{Links}</section>
    </main>
  )
}

export default App
