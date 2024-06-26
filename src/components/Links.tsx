import { links } from '../config.jsx'
import { useState, useEffect } from 'react'
import '../styles/Links.css'

export function Links() {
  // 一言
  const [essay, setEssay] = useState('Loading...')
  // 链接列表
  const Links = links.map((link, index) => <a key={index} href={link.url} className='link' target='_blank'>{link.icon}&nbsp;{link.name}</a>)
  // 添加一言
  Links.push(<a key='essay' className='link essay'>&quot;{essay}&quot;</a>)
  // 在页面加载时获取一言
  useEffect(() => {
    // 一言
    fetch('https://v1.hitokoto.cn?c=j&c=a&c=b&c=d&c=i&max_length=30')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setEssay(data.hitokoto)
    })
  }, [])
  // 返回 JSX 元素
  return <section className='links'>{Links}</section>
}