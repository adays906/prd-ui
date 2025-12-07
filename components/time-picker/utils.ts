// 临时的 time-picker/utils.ts 文件，用于提供 DatePicker 组件所需的工具函数

import dayjs from 'dayjs';

/**
 * 将日期值格式化为字符串
 * @param value 日期值
 * @param format 格式
 * @returns 格式化后的字符串
 */
export function getFormattedValue(value: any, format: string): string {
  if (!value) return '';
  
  try {
    return dayjs(value).format(format);
  } catch (error) {
    return '';
  }
}

/**
 * 检查输入值是否有效
 * @param value 输入值
 * @param format 格式
 * @returns 是否有效
 */
export function isValidInputValue(value: any, format: string): boolean {
  if (!value) return true;
  
  try {
    const result = dayjs(value, format, true);
    return result.isValid();
  } catch (error) {
    return false;
  }
}
