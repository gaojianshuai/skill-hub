import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillHub - 全球AI工具与技能聚合平台',
  description: '收录全球100+精品AI工具，覆盖AI模型、编程开发、图像生成、视频制作等全品类',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        <div className="fixed inset-0 bg-gradient pointer-events-none" />
        {children}
      </body>
    </html>
  )
}
