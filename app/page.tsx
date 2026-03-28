'use client'

import { useState, useEffect, useCallback } from 'react'
import { Tool } from './lib/types'
import { CATEGORIES } from './lib/types'
import { getTools, getFeaturedTools } from './lib/data'

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([])
  const [filteredTools, setFilteredTools] = useState<Tool[]>([])
  const [featuredTools, setFeaturedTools] = useState<Tool[]>([])
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)
  const [currentCat, setCurrentCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [toast, setToast] = useState('')

  useEffect(() => {
    setTools(getTools())
    setFilteredTools(getTools())
    setFeaturedTools(getFeaturedTools())
  }, [])

  useEffect(() => {
    let filtered = currentCat === 'all' ? tools : tools.filter(t => t.cat === currentCat)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.desc.toLowerCase().includes(q) || 
        t.tags.some(tag => tag.toLowerCase().includes(q))
      )
    }
    if (sortBy === 'popular') {
      filtered.sort((a, b) => (b.badge === 'hot' ? 1 : 0) - (a.badge === 'hot' ? 1 : 0))
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0))
    } else {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    }
    setFilteredTools(filtered)
  }, [tools, currentCat, searchQuery, sortBy])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2500)
  }, [])

  const handleCategoryChange = useCallback((catId: string) => {
    setCurrentCat(catId)
  }, [])

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleSort = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value)
  }, [])

  const handleOpenTool = useCallback((tool: Tool) => {
    setSelectedTool(tool)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedTool(null)
  }, [])

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href)
    showToast('链接已复制')
  }, [showToast])

  const handleVisit = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleCloseModal()
  }, [handleCloseModal])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const getCategoryCounts = () => {
    const counts: Record<string, number> = { all: tools.length }
    tools.forEach(t => {
      counts[t.cat] = (counts[t.cat] || 0) + 1
    })
    return counts
  }

  const categoryCounts = getCategoryCounts()

  return (
    <main className="relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-xl shadow-lg shadow-accent/30">
              ⚡
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                SkillHub
              </h1>
              <p className="text-xs text-white/40">AI工具 & 技能聚合平台</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-md relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">🔍</span>
            <input
              type="text"
              placeholder="搜索工具、技能、AI助手..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-11 pr-4 py-2.5 bg-bg3 border border-white/[0.08] rounded-full text-white text-sm outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] transition-all"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="bg-bg3 border border-white/[0.08] rounded-full px-4 py-2 text-sm flex items-center gap-2">
              📦 <span className="font-bold text-accent">{tools.length}</span> 工具
            </div>
            <div className="bg-bg3 border border-white/[0.08] rounded-full px-4 py-2 text-sm flex items-center gap-2">
              🏷️ <span className="font-bold text-accent">{CATEGORIES.length - 1}</span> 分类
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-bg2 border-b border-white/[0.08] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                currentCat === cat.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-bg3 border border-white/[0.08] text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.icon} {cat.name}
              <span className="ml-1.5 text-xs opacity-60">{categoryCounts[cat.id] || 0}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          发现全球最优秀的<span className="bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text text-transparent">AI工具与技能</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
          收录全球100+精品AI工具，覆盖AI模型、编程开发、图像生成、视频制作等全品类
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['🔥 每日更新', '⭐ 精选推荐', '🆓 免费可用', '⚡ 即刻体验'].map(tag => (
            <span key={tag} className="bg-bg2 border border-white/[0.08] px-5 py-2 rounded-full text-sm hover:bg-bg3 hover:border-accent/50 transition-all cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured */}
      {currentCat === 'all' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-gradient-to-br from-bg2 to-bg3 border border-white/[0.08] rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">🔥 精选推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {featuredTools.slice(0, 8).map(tool => (
                <ToolCard key={tool.id} tool={tool} onOpen={handleOpenTool} onVisit={handleVisit} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tools */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            📦 全部工具 
            <span className="text-sm font-normal text-white/40">({filteredTools.length})</span>
          </h3>
          <select
            value={sortBy}
            onChange={handleSort}
            className="px-4 py-2 bg-bg3 border border-white/[0.08] rounded-lg text-sm text-white outline-none cursor-pointer"
          >
            <option value="popular">🔥 热度排序</option>
            <option value="newest">✨ 最新发布</option>
            <option value="name">🔤 名称排序</option>
          </select>
        </div>

        {filteredTools.length === 0 ? (
          <div className="text-center py-20">
            <h4 className="text-xl text-white/60 mb-2">🔍 未找到匹配的工具</h4>
            <p className="text-white/40">尝试其他关键词或分类</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} onOpen={handleOpenTool} onVisit={handleVisit} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-bg2 border-t border-white/[0.08] py-12 text-center">
        <p className="text-2xl font-bold mb-3">⚡ SkillHub</p>
        <p className="text-white/50 text-sm mb-2">汇聚全球AI工具与技能，助力高效工作</p>
        <p className="text-white/30 text-xs">© 2026 SkillHub. All rights reserved.</p>
      </footer>

      {/* Modal */}
      {selectedTool && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 modal-backdrop"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-bg2 border border-white/[0.08] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-bg2 border-b border-white/[0.08] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedTool.icon}</span>
                <div>
                  <h4 className="text-xl font-bold">{selectedTool.title}</h4>
                  {selectedTool.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      selectedTool.badge === 'hot' ? 'bg-red-500/20 text-red-400' :
                      selectedTool.badge === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {selectedTool.badge === 'hot' ? '🔥 热' : selectedTool.badge === 'new' ? '✨ 新' : '🆓 免费'}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-bg3 hover:bg-accent flex items-center justify-center transition-all hover:rotate-90"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-white/60 mb-2">📝 描述</h5>
                <p className="text-white/80 leading-relaxed">{selectedTool.desc}</p>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-white/60 mb-2">✨ 核心功能</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-bg3 rounded-lg text-sm text-white/70">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-white/60 mb-2">🏷️ 分类标签</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedTool.pricing && (
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-white/60 mb-2">💰 定价</h5>
                  <p className="text-white/80">{selectedTool.pricing}</p>
                </div>
              )}
            </div>
            
            <div className="sticky bottom-0 bg-bg3 p-6 flex gap-3 justify-center">
              <button
                onClick={() => handleVisit(selectedTool.url)}
                className="px-6 py-3 bg-accent hover:bg-accent2 rounded-xl font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                🚀 访问官网
              </button>
              <button
                onClick={handleCopyLink}
                className="px-6 py-3 bg-bg4 hover:bg-white/10 rounded-xl font-semibold transition-all"
              >
                📋 复制链接
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] bg-bg2 border border-accent px-6 py-3 rounded-xl flex items-center gap-2 shadow-xl toast">
          ✅ {toast}
        </div>
      )}
    </main>
  )
}

interface ToolCardProps {
  tool: Tool
  onOpen: (tool: Tool) => void
  onVisit: (url: string) => void
}

function ToolCard({ tool, onOpen, onVisit }: ToolCardProps) {
  return (
    <div 
      className="bg-bg2 border border-white/[0.08] rounded-2xl overflow-hidden card-hover cursor-pointer group"
      onClick={() => onOpen(tool)}
    >
      <div className="p-5">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bg3 to-bg4 border border-white/[0.08] flex items-center justify-center text-3xl mb-4 group-hover:border-accent/50 transition-all">
          {tool.icon}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-semibold text-white group-hover:text-accent transition-colors">{tool.title}</h4>
          {tool.badge && (
            <span className={`text-xs px-2 py-0.5 rounded ${
              tool.badge === 'hot' ? 'bg-red-500/20 text-red-400' :
              tool.badge === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {tool.badge === 'hot' ? '🔥热' : tool.badge === 'new' ? '✨新' : '免费'}
            </span>
          )}
        </div>
        <p className="text-sm text-white/50 line-clamp-2 mb-3 leading-relaxed">{tool.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tool.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-bg3 rounded-md text-white/40">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 bg-bg3 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-sm text-white/50">访问</span>
        <button 
          onClick={e => { e.stopPropagation(); onVisit(tool.url) }}
          className="w-8 h-8 rounded-lg bg-bg2 flex items-center justify-center text-sm hover:bg-accent transition-colors"
        >
          🔗
        </button>
      </div>
    </div>
  )
}
