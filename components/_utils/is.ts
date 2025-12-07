/**
 * 类型判断工具函数
 * @author: ZhangHF adays@foxmail.com
 * @description: 提供各种类型判断的工具函数
 * @since: 1.0.0
 */

/**
 * 判断是否为字符串
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为字符串
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * 判断是否为数字
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为数字
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * 判断是否为布尔值
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为布尔值
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 判断是否为函数
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为函数
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * 判断是否为对象
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为对象
 */
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object';
}

/**
 * 判断是否为数组
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为数组
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

/**
 * 判断是否为 undefined
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为 undefined
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

/**
 * 判断是否为 null
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为 null
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * 判断是否为 null 或 undefined
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为 null 或 undefined
 */
export function isNil(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/**
 * 判断是否为 Promise
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为 Promise
 */
export function isPromise(value: any): value is Promise<any> {
  return isObject(value) && isFunction(value.then) && isFunction(value.catch);
}

/**
 * 判断是否为 Dayjs 对象
 * @param {any} value - 要判断的值
 * @returns {boolean} 是否为 Dayjs 对象
 */
export function isDayjs(value: any): boolean {
  return isObject(value) && isFunction(value.isValid) && isFunction(value.format);
}
