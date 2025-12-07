// 临时的 TimePickerProps 类型定义，用于解决 DatePicker 组件的依赖问题

import { Dayjs } from 'dayjs';

export type CalendarValue = Date | string | number;

export interface TimePickerProps {
  /**
   * @zh 绑定值
   * @en Value
   */
  modelValue?: CalendarValue;
  /**
   * @zh 默认值
   * @en Default value
   */
  defaultValue?: CalendarValue;
  /**
   * @zh 展示日期的格式
   * @en Display the format of the date
   */
  format?: string;
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 不可选取的小时
   * @en Unselectable hours
   */
  disabledHours?: () => number[];
  /**
   * @zh 不可选取的分钟
   * @en Unselectable minutes
   */
  disabledMinutes?: (selectedHour?: number) => number[];
  /**
   * @zh 不可选取的秒
   * @en Unselectable seconds
   */
  disabledSeconds?: (selectedHour?: number, selectedMinute?: number) => number[];
  /**
   * @zh 步长
   * @en Step
   */
  step?: number[];
  /**
   * @zh 尺寸
   * @en Size
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
  /**
   * @zh 允许清除
   * @en Whether to allow clear
   */
  allowClear?: boolean;
  /**
   * @zh 只读
   * @en Whether it is read-only
   */
  readonly?: boolean;
  /**
   * @zh 错误状态
   * @en Error state
   */
  error?: boolean;
  /**
   * @zh 占位符
   * @en Placeholder
   */
  placeholder?: string;
}
