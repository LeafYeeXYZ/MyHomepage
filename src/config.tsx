import {
  GithubFilled,
  HomeFilled,
  BankFilled,
  BulbFilled,
  PictureFilled,
  CalendarFilled,
  CloudFilled,
  StarFilled,
  SunFilled,
  BilibiliOutlined,
} from '@ant-design/icons'

export type Link = {
  url: string
  name: string
  icon: React.JSX.Element
}

export const links: Link[] = [
  { url: 'https://one.bnu.edu.cn/', name: '北京师范大学', icon: <BankFilled /> },
  { url: 'https://www.leafyee.xyz/', name: '小站', icon: <HomeFilled /> },
  { url: 'https://blog.leafyee.xyz/', name: '博客', icon: <BulbFilled /> },
  { url: 'https://paint.leafyee.xyz/', name: '赛博画师小叶子', icon: <PictureFilled /> },
  { url: 'https://comment.leafyee.xyz/ui', name: 'Waline', icon: <CalendarFilled /> },
  { url: 'https://github.com', name: 'GitHub', icon: <GithubFilled /> },
  { url: 'https://dash.cloudflare.com', name: 'Cloudflare', icon: <CloudFilled /> },
  { url: 'https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx', name: 'NewBing', icon: <StarFilled /> },
  { url: 'https://aistudio.google.com/', name: 'GoogleAI', icon: <SunFilled /> },
  { url: 'https://t.bilibili.com/?tab=video', name: 'Bilibili', icon: <BilibiliOutlined /> },
]
