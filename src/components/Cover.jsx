import { useEffect, useState } from 'react'
import { SlidersFilled } from '@ant-design/icons'
import './Cover.css'
import localforage from 'localforage'

function Cover() {
  // 定义封面状态
  const [cover, setCover] = useState('')
  // 点击打开对话框
  function openDialog() {
    const dialog = document.querySelector('.cover-dialog')
    dialog.show()
  }
  // 点击关闭对话框
  function closeDialog() {
    // 清空文件
    document.querySelector('#cover-file').value = ''
    // 清空预览的 URL
    const previewDynamic = document.querySelector('.cover-preview-dynamic')
    const previewStatic = document.querySelector('.cover-preview-static')
    if (previewDynamic.src) {
      URL.revokeObjectURL(previewDynamic.src)
      previewDynamic.src = ''
    }
    previewDynamic.style.opacity = 0
    previewStatic.style.opacity = 1
    // 关闭对话框
    const dialog = document.querySelector('.cover-dialog')
    dialog.close()
  }
  // 点击保存封面
  async function saveCover() {
    // 获取文件
    const file = document.querySelector('#cover-file').files[0]
    // 如果没有文件
    if (!file) {
      alert('请选择文件')
      return
    }
    // 将文件存入 IndexedDB
    await localforage.setItem('cover', file)
    // 创建 URL
    const url = URL.createObjectURL(file)
    // 设置封面
    setCover(url)
    // 关闭对话框
    closeDialog()
  }
  // 点击重置封面
  async function resetCover() {
    // 获取默认封面
    const cover = await fetch('/cover.jpg')
    // 转为 blob
    const blob = await cover.blob()
    // 将 blob 存入 IndexedDB
    await localforage.setItem('cover', blob)
    // 创建 URL
    const url = URL.createObjectURL(blob)
    // 设置封面
    setCover(url)
    // 关闭对话框
    closeDialog()
  }
  // 选择文件后预览
  function previewCover() {
    const previewStatic = document.querySelector('.cover-preview-static')
    const previewDynamic = document.querySelector('.cover-preview-dynamic')
    // 如果是第一次选择文件
    if (!previewDynamic.src) {
      previewDynamic.style.opacity = 1
      previewStatic.style.opacity = 0
    // 否则清空预览图片
    } else {
      URL.revokeObjectURL(previewDynamic.src)
    }
    // 创建 URL
    const file = document.querySelector('#cover-file').files[0]
    const url = URL.createObjectURL(file)
    // 设置预览图片
    previewDynamic.src = url
  }

  // 渲染后执行异步操作
  useEffect(() => {
    // 从 IndexedDB 中获取封面
    localforage.getItem('cover').then(file => {
      // 如果有封面, 设置封面
      if (file) {
        const url = URL.createObjectURL(file)
        setCover(url)
      // 如果没有封面, 则重置封面
      } else {
        fetch('/cover.jpg')
        .then(res => res.blob())
        .then(blob => {
          // note: 存储不一定先于设置完成
          localforage.setItem('cover', blob)
          const url = URL.createObjectURL(blob)
          setCover(url)
        })
      }
    })
  }, [])

  return (
    <>
      {/* 打开对话框的按钮 */}
      <section className='cover-btn nav' onClick={openDialog}>
        <SlidersFilled />
      </section>
      {/* 用来装封面的 */}
      <section 
        className='cover-container'
        style={{ backgroundImage: `url(${cover})` }}
      ></section>
      {/* 对话框 */}
      <dialog className='cover-dialog'>
        <div className='cover-dialog-container'>
          <div className='cover-select-file'>
            <p className='cover-title'>自定义封面</p>
            <input type='file' accept='image/*' id='cover-file' onChange={previewCover} />
            <img src={cover} className='cover-preview-static' style={{ opacity: 1 }} />
            <img className='cover-preview-dynamic' style={{ opacity: 0 }} />
          </div>
          <div className='cover-buttons'>
            <input type='button' onClick={resetCover} name='cover-reset' value='重置' />
            <input type='button' onClick={saveCover} name='cover-set' value='保存' />
            <input type='button' onClick={closeDialog} name='cover-close' value='关闭' />
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Cover