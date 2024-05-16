# 介绍
写一个自己喜欢的新标签页

## 特点
- 使用和风天气 `API` 获取天气信息, 并保存到 `localStorage` 中, 每小时更新一次, 以减少 `API` 请求次数
- 采用 `React` 和 `Vite` 构建
- 整体为半透明毛玻璃风格
- 使用 `Hitokoto` 获取一言
- 将壁纸存储在 `IndexedDB` 中, 避免每次加载都请求图片; 支持自定义壁纸

## 使用
1. 克隆本仓库
2. `bun i` 安装依赖
3. `bun run dev` 本地预览
4. `bun run build` 构建

> 请修改 `Weather.jsx` 组件中的 `API` 为您自己的 `API`, 详见[这个项目](https://github.com/LeafYeeXYZ/MyAPIs)