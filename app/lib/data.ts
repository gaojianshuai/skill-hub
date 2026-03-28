import { Tool } from './types';

// 实时AI工具数据库 - 真实收录全球主流AI工具
export const TOOLS: Tool[] = [
  // AI 模型
  { id: 'gpt-4', title: 'GPT-4', icon: '🤖', cat: 'ai', desc: 'OpenAI最强大的多模态AI模型，支持图像理解、代码生成、长文本处理等', tags: ['AI模型', '对话', '免费/付费'], badge: 'hot', url: 'https://chat.openai.com', featured: true, features: ['多模态理解', '代码生成', '长文本处理', '插件支持'], pricing: '免费/付费' },
  { id: 'claude-3', title: 'Claude 3', icon: '🧠', cat: 'ai', desc: 'Anthropic推出的安全AI助手，超长上下文理解，业界领先', tags: ['AI模型', '安全', '免费/付费'], badge: 'new', url: 'https://claude.ai', featured: true, features: ['超长上下文', '安全对齐', '多语言', '文档分析'], pricing: '免费/付费' },
  { id: 'gemini-pro', title: 'Gemini Pro', icon: '✨', cat: 'ai', desc: 'Google多模态AI模型，深度集成Google生态', tags: ['AI模型', '多模态', '免费'], url: 'https://gemini.google.com', features: ['多模态理解', 'Google生态集成', '代码生成'], pricing: '免费' },
  { id: 'llama-3', title: 'Llama 3', icon: '🦙', cat: 'ai', desc: 'Meta开源大语言模型，可本地部署', tags: ['AI模型', '开源', '免费'], url: 'https://llama.meta.com', features: ['开源免费', '多种规格', '本地部署'], pricing: '免费' },
  { id: 'qwen', title: '通义千问', icon: '🏯', cat: 'ai', desc: '阿里云中文AI模型，性能优异', tags: ['AI模型', '中文', '免费'], url: 'https://tongyi.aliyun.com', features: ['中文优化', '阿里云集成'], pricing: '免费' },
  { id: 'ernie', title: '文心一言', icon: '📝', cat: 'ai', desc: '百度中文大语言模型，知识增强', tags: ['AI模型', '中文', '免费'], url: 'https://yiyan.baidu.com', features: ['中文理解', '百度生态', '知识增强'], pricing: '免费' },
  { id: 'deepseek', title: 'DeepSeek', icon: '🔮', cat: 'ai', desc: '中国开源大模型，性能对标GPT-4', tags: ['AI模型', '开源', '免费'], badge: 'hot', url: 'https://deepseek.com', features: ['开源可商用', '代码能力强', '低成本API'], pricing: '免费' },
  { id: 'minimax', title: 'MiniMax', icon: '🤖', cat: 'ai', desc: '中国AI平台，专注Agent应用开发', tags: ['AI模型', 'Agent', '商业'], url: 'https://minimax.chat', features: ['Agent开发', 'API接入', '多模态'], pricing: '商业' },
  { id: 'moonshot', title: 'Moonshot(Kimi)', icon: '🚀', cat: 'ai', desc: '月之暗面Kimi，长上下文大模型', tags: ['AI模型', '长文本', '中文'], badge: 'new', url: 'https://kimi.moonshot.cn', features: ['超长上下文', '中文优化'], pricing: '免费' },
  { id: 'perplexity', title: 'Perplexity', icon: '🔍', cat: 'ai', desc: 'AI搜索引擎，实时网络答案', tags: ['AI模型', '搜索', '免费'], badge: 'hot', url: 'https://perplexity.ai', features: ['实时搜索', '来源引用', '多语言'], pricing: '免费' },
  { id: 'grok', title: 'Grok', icon: '🤖', cat: 'ai', desc: 'xAI推出的AI助手', tags: ['AI模型', '搜索'], badge: 'new', url: 'https://x.ai/grok', features: ['实时信息', '幽默风格'], pricing: '付费' },
  { id: 'mistral', title: 'Mistral', icon: '🌊', cat: 'ai', desc: '法国AI公司开源模型', tags: ['AI模型', '开源'], url: 'https://mistral.ai', features: ['开源', '多语言'], pricing: '免费' },
  
  // 编程开发
  { id: 'cursor', title: 'Cursor', icon: '💻', cat: 'coding', desc: 'AI代码编辑器，革新编程体验', tags: ['编程', 'AI助手', 'VS Code'], badge: 'hot', url: 'https://cursor.sh', featured: true, features: ['AI补全', '代码解释', 'Bug修复', '多文件编辑'], pricing: '免费/付费' },
  { id: 'github-copilot', title: 'GitHub Copilot', icon: '⚡', cat: 'coding', desc: '微软AI编程助手，代码补全首选', tags: ['编程', 'AI助手', 'GitHub'], badge: 'hot', url: 'https://github.com/features/copilot', features: ['实时代码补全', '函数生成', 'Bug检测'], pricing: '付费' },
  { id: 'claude-code', title: 'Claude Code', icon: '🧠', cat: 'coding', desc: 'Anthropic命令行AI助手', tags: ['编程', 'CLI', '自动化'], badge: 'new', url: 'https://claude.com/code', features: ['终端集成', '项目级理解', '自动化任务'], pricing: '免费' },
  { id: 'replit', title: 'Replit Agent', icon: '🚀', cat: 'coding', desc: 'AI驱动的在线IDE', tags: ['编程', '云IDE', '协作'], url: 'https://replit.com', features: ['AI开发', '即时部署', '协作编辑'], pricing: '免费' },
  { id: 'lovable', title: 'Lovable', icon: '❤️', cat: 'coding', desc: '自然语言网站构建器', tags: ['编程', '网站', '无代码'], badge: 'new', url: 'https://lovable.dev', features: ['自然语言建站', '响应式设计', '发布上线'], pricing: '免费' },
  { id: 'v0', title: 'v0 Dev', icon: '🎯', cat: 'coding', desc: 'Vercel AI前端生成器', tags: ['编程', '前端', 'React'], url: 'https://v0.dev', features: ['React组件生成', 'Next.js支持', '设计转代码'], pricing: '免费' },
  { id: 'windsurf', title: 'Windsurf', icon: '🌊', cat: 'coding', desc: 'Codeium AI编辑器', tags: ['编程', 'AI', '免费'], badge: 'new', url: 'https://codeium.com/windsurf', features: ['AI Flow', '免费使用', '深度集成'], pricing: '免费' },
  { id: 'devin', title: 'Devin', icon: '🛠️', cat: 'coding', desc: 'Cognition AI软件工程师', tags: ['编程', 'Agent', '自动化'], badge: 'hot', url: 'https://cognition.ai', featured: true, features: ['端到端开发', 'Bug修复', '测试生成'], pricing: '付费' },
  { id: 'bolt', title: 'Bolt', icon: '⚡', cat: 'coding', desc: 'StackBlitz AI开发环境', tags: ['编程', '云IDE'], badge: 'new', url: 'https://bolt.new', features: ['浏览器开发', 'AI辅助'], pricing: '免费' },
  { id: 'openinterpreter', title: 'Open Interpreter', icon: '💻', cat: 'coding', desc: '在本地运行大模型的AI编程助手', tags: ['编程', '开源', '本地'], badge: 'new', url: 'https://openinterpreter.com', features: ['本地运行', '代码执行', '文件操作'], pricing: '免费' },
  
  // 图像生成
  { id: 'midjourney', title: 'Midjourney', icon: '🎨', cat: 'image', desc: '顶级AI图像生成，质量顶尖', tags: ['图像', '艺术', '设计'], badge: 'hot', url: 'https://midjourney.com', featured: true, features: ['高质量图像', '风格多样', '社区分享'], pricing: '付费' },
  { id: 'dalle-3', title: 'DALL-E 3', icon: '🖼️', cat: 'image', desc: 'OpenAI图像生成模型', tags: ['图像', 'AI模型', '付费'], url: 'https://openai.com/dall-e-3', features: ['精准理解', '高清生成', '编辑修改'], pricing: '付费' },
  { id: 'stable-diffusion', title: 'Stable Diffusion', icon: '🌅', cat: 'image', desc: '开源AI图像生成，可本地运行', tags: ['图像', '开源', '免费'], badge: 'hot', url: 'https://stability.ai', featured: true, features: ['本地运行', '自定义模型', 'ControlNet'], pricing: '免费' },
  { id: 'adobe-firefly', title: 'Adobe Firefly', icon: '🔥', cat: 'image', desc: 'Adobe创意AI工具', tags: ['图像', 'Adobe', '设计'], url: 'https://adobe.com/firefly', features: ['Photoshop集成', '创意填充', '文字效果'], pricing: '免费' },
  { id: 'leonardo', title: 'Leonardo.ai', icon: '🎭', cat: 'image', desc: '游戏资产AI生成平台', tags: ['图像', '游戏', '资产'], badge: 'new', url: 'https://leonardo.ai', features: ['游戏资产', '风格控制', '多角色'], pricing: '免费' },
  { id: 'ideogram', title: 'Ideogram', icon: '✏️', cat: 'image', desc: '文字图像生成专家', tags: ['图像', '文字', '设计'], badge: 'new', url: 'https://ideogram.ai', features: ['精准文字渲染', '海报设计', 'logo生成'], pricing: '免费' },
  { id: 'flux', title: 'FLUX', icon: '⚡', cat: 'image', desc: 'Black Forest Lab高画质模型', tags: ['图像', '开源', '高质量'], badge: 'new', url: 'https://blackforestlabs.ai', features: ['开源可商用', '高细节', '多种风格'], pricing: '免费' },
  { id: 'recraft', title: 'Recraft', icon: '🎨', cat: 'image', desc: 'AI设计和插图生成', tags: ['图像', '设计', '插图'], badge: 'new', url: 'https://recraft.ai', features: ['矢量图生成', '风格一致'], pricing: '免费' },
  
  // 视频制作
  { id: 'sora', title: 'Sora', icon: '🎬', cat: 'video', desc: 'OpenAI视频生成模型', tags: ['视频', 'AI模型', '付费'], badge: 'hot', url: 'https://openai.com/sora', featured: true, features: ['文本转视频', '最长60秒', '高画质'], pricing: '付费' },
  { id: 'runway', title: 'Runway', icon: '🎥', cat: 'video', desc: 'AI视频编辑与生成', tags: ['视频', '编辑', '特效'], badge: 'hot', url: 'https://runwayml.com', featured: true, features: ['视频生成', '编辑工具', '绿幕抠像'], pricing: '免费/付费' },
  { id: 'pika', title: 'Pika', icon: '📽️', cat: 'video', desc: 'AI视频生成工具', tags: ['视频', '生成', '免费'], badge: 'new', url: 'https://pika.art', features: ['文本转视频', '图片转视频', '编辑修改'], pricing: '免费' },
  { id: 'kling', title: '可灵AI', icon: '🌊', cat: 'video', desc: '快手视频生成大模型', tags: ['视频', '中文', '免费'], badge: 'new', url: 'https://klingai.com', features: ['长视频生成', '动作控制', '高画质'], pricing: '免费' },
  { id: 'heygen', title: 'HeyGen', icon: '👤', cat: 'video', desc: 'AI数字人视频制作', tags: ['视频', '数字人', '营销'], url: 'https://heygen.com', features: ['数字人生成', '多语言配音', '模板丰富'], pricing: '免费/付费' },
  { id: 'viggle', title: 'Viggle', icon: '🕺', cat: 'video', desc: 'AI角色动画生成', tags: ['视频', '动画', '角色'], badge: 'new', url: 'https://viggle.ai', features: ['角色动画', '动作控制'], pricing: '免费' },
  { id: 'luma-dream', title: 'Luma Dream', icon: '💭', cat: 'video', desc: '高质量视频生成', tags: ['视频', '生成', '高质量'], badge: 'new', url: 'https://lumalabs.ai/dream-machine', features: ['物理真实', '高一致性', '文本/图片转视频'], pricing: '免费' },
  
  // 音频处理
  { id: 'elevenlabs', title: 'ElevenLabs', icon: '🎙️', cat: 'audio', desc: 'AI语音合成平台，超真实配音', tags: ['音频', '语音', '配音'], badge: 'hot', url: 'https://elevenlabs.io', featured: true, features: ['超真实配音', '多语言', '声音克隆'], pricing: '免费/付费' },
  { id: 'murf', title: 'Murf AI', icon: '🎵', cat: 'audio', desc: '专业AI语音生成', tags: ['音频', '配音', '企业'], url: 'https://murf.ai', features: ['多音色', '本地化', '背景音乐'], pricing: '付费' },
  { id: 'suno', title: 'Suno', icon: '🎶', cat: 'audio', desc: 'AI音乐生成，创作完整歌曲', tags: ['音频', '音乐', '创作'], badge: 'hot', url: 'https://suno.ai', featured: true, features: ['歌词生成', '多风格', '完整歌曲'], pricing: '免费' },
  { id: 'udio', title: 'Udio', icon: '🎧', cat: 'audio', desc: 'AI音乐创作平台', tags: ['音频', '音乐', '创作'], badge: 'new', url: 'https://udio.com', features: ['高音质', '风格多样', '社区分享'], pricing: '免费' },
  { id: 'capcut', title: 'CapCut', icon: '🎬', cat: 'audio', desc: 'AI视频剪辑+音频处理', tags: ['音频', '视频', '剪辑'], url: 'https://capcut.com', features: ['AI剪辑', '音频处理', '特效'], pricing: '免费' },
  { id: 'speechify', title: 'Speechify', icon: '🔊', cat: 'audio', desc: '文字转语音', tags: ['音频', 'TTS', '无障碍'], url: 'https://speechify.com', features: ['多语言', '多音色'], pricing: '免费' },
  
  // 写作创作
  { id: 'notion-ai', title: 'Notion AI', icon: '📓', cat: 'writing', desc: 'Notion智能写作助手', tags: ['写作', '知识管理', 'AI助手'], badge: 'hot', url: 'https://notion.so', featured: true, features: ['智能补全', '内容优化', '翻译', '摘要'], pricing: '付费' },
  { id: 'copy-ai', title: 'Copy.ai', icon: '📋', cat: 'writing', desc: 'AI营销文案生成', tags: ['写作', '营销', '文案'], url: 'https://copy.ai', features: ['多场景模板', '品牌语调', '批量生成'], pricing: '免费/付费' },
  { id: 'jasper', title: 'Jasper', icon: '✨', cat: 'writing', desc: '企业级AI内容平台', tags: ['写作', '企业', 'SEO'], url: 'https://jasper.ai', features: ['SEO优化', '品牌一致性', '多语言'], pricing: '付费' },
  { id: 'writesonic', title: 'Writesonic', icon: '🖊️', cat: 'writing', desc: 'AI写作与SEO工具', tags: ['写作', 'SEO', '文章'], url: 'https://writesonic.com', features: ['文章生成', 'SEO分析', 'Chatsonic'], pricing: '免费/付费' },
  
  // 效率工具
  { id: 'notion', title: 'Notion', icon: '📓', cat: 'productivity', desc: '全能笔记与协作工具', tags: ['效率', '笔记', '协作'], badge: 'hot', url: 'https://notion.so', featured: true, features: ['笔记', '数据库', '团队协作', '模板'], pricing: '免费' },
  { id: 'linear', title: 'Linear', icon: '📊', cat: 'productivity', desc: '现代化项目管理工具', tags: ['效率', '项目', '开发'], url: 'https://linear.app', features: ['极速体验', 'Git集成', '敏捷管理'], pricing: '免费' },
  { id: 'raycast', title: 'Raycast', icon: '⚡', cat: 'productivity', desc: 'Mac效率启动器', tags: ['效率', 'Mac', '工具'], url: 'https://raycast.com', features: ['快捷命令', 'AI搜索', '工作流'], pricing: '免费' },
  { id: 'obsidian', title: 'Obsidian', icon: '💎', cat: 'productivity', desc: '本地笔记与知识图谱', tags: ['效率', '笔记', '知识管理'], url: 'https://obsidian.md', features: ['本地存储', '双向链接', '插件生态'], pricing: '免费' },
  
  // 自动化
  { id: 'zapier', title: 'Zapier', icon: '⚡', cat: 'automation', desc: '工作流自动化平台', tags: ['自动化', '无代码', '集成'], badge: 'hot', url: 'https://zapier.com', featured: true, features: ['5000+应用集成', '自动化流程', '无代码'], pricing: '免费/付费' },
  { id: 'make', title: 'Make', icon: '🔧', cat: 'automation', desc: '可视化自动化平台', tags: ['自动化', '无代码', '流程'], url: 'https://make.com', features: ['可视化编辑器', '复杂逻辑', '调度'], pricing: '免费' },
  { id: 'n8n', title: 'n8n', icon: '🔗', cat: 'automation', desc: '开源自动化工具', tags: ['自动化', '开源', '自托管'], url: 'https://n8n.io', features: ['开源免费', '自托管', '代码支持'], pricing: '免费' },
  { id: 'diflow', title: 'Diflow', icon: '🌊', cat: 'automation', desc: 'AI工作流自动化', tags: ['自动化', 'AI', '易用'], badge: 'new', url: 'https://diflow.app', features: ['AI驱动', '简单易用', '模板丰富'], pricing: '免费' },
  
  // AI Agent
  { id: 'coze', title: 'Coze', icon: '🤖', cat: 'agent', desc: '字节AI Agent平台', tags: ['AI代理', '字节', 'Bot'], badge: 'new', url: 'https://coze.com', features: ['Bot开发', '多渠道发布'], pricing: '免费' },
  { id: 'dify', title: 'Dify', icon: '📱', cat: 'agent', desc: '开源LLM应用开发平台', tags: ['AI代理', '开源', '开发'], badge: 'hot', url: 'https://dify.ai', features: ['开源', 'RAG', '工作流'], pricing: '免费' },
  { id: 'langflow', title: 'LangFlow', icon: '🔄', cat: 'agent', desc: '可视化AI应用构建', tags: ['AI代理', '可视化', '开源'], url: 'https://github.com/logspace-ai/langflow', features: ['拖拽式', '多模型'], pricing: '免费' },
  { id: 'max', title: 'Max', icon: '🚀', cat: 'agent', desc: 'AI Agent开发平台', tags: ['AI代理', '开发'], badge: 'new', url: 'https://max.io', features: ['Agent框架', '多模态'], pricing: '免费' },
];

export function getTools(): Tool[] {
  return TOOLS;
}

export function getToolById(id: string): Tool | undefined {
  return TOOLS.find(t => t.id === id);
}

export function getFeaturedTools(): Tool[] {
  return TOOLS.filter(t => t.featured);
}

export function getToolsByCategory(cat: string): Tool[] {
  if (cat === 'all') return TOOLS;
  return TOOLS.filter(t => t.cat === cat);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return TOOLS.filter(t => 
    t.title.toLowerCase().includes(q) || 
    t.desc.toLowerCase().includes(q) || 
    t.tags.some(tag => tag.toLowerCase().includes(q))
  );
}
