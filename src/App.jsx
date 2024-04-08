import './App.css'
import { links } from './config'
import { useState } from 'react'
import { CompassFilled } from '@ant-design/icons'

function App() {
  // 一言的内容
  const [essay, setEssay] = useState('Loading...')
  fetch('https://v1.hitokoto.cn?c=j&c=a&c=b&c=d&c=i&max_length=30')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setEssay(data.hitokoto)
    })
  // 渲染链接列表为 JSX 元素
  const Links = links.map((link, index) => {
    return (
      <a key={index} href={link.url} className='link' target='_blank'>
        {link.icon}&nbsp;{link.name}
      </a>
    )
  })
  // 返回 JSX 元素
  return (
    <main className='container'>
      <section className='essay'>{essay}</section>
      <section className='links'>{Links}</section>
      <a href='https://blog.leafyee.xyz/about/#%E5%B8%B8%E7%94%A8%E7%BD%91%E7%AB%99%E5%AF%BC%E8%88%AA' target='_blank' className='compass'><CompassFilled /></a>
    </main>
  )
}

export default App
