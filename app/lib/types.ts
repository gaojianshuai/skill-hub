export interface Tool {
  id: string;
  title: string;
  icon: string;
  cat: string;
  desc: string;
  tags: string[];
  badge?: 'hot' | 'new' | 'free';
  url: string;
  featured?: boolean;
  features: string[];
  pricing?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

export const CATEGORIES: Category[] = [
  { id: 'all', name: '全部', icon: '🎯' },
  { id: 'ai', name: 'AI模型', icon: '🤖' },
  { id: 'coding', name: '编程开发', icon: '💻' },
  { id: 'image', name: '图像生成', icon: '🎨' },
  { id: 'video', name: '视频制作', icon: '🎬' },
  { id: 'audio', name: '音频处理', icon: '🎵' },
  { id: 'writing', name: '写作创作', icon: '✍️' },
  { id: 'productivity', name: '效率工具', icon: '⚡' },
  { id: 'automation', name: '自动化', icon: '🔄' },
];
