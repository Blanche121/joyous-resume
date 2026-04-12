/**
 * 工具函数
 */

// 合并类名的辅助函数
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// 滚动到指定元素
export function scrollToSection(href: string): void {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// 格式化日期范围
export function formatDateRange(start: string, end: string): string {
  return `${start} - ${end}`;
}
