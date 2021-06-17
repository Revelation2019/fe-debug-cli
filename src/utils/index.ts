import { IProxy } from '@src/interfaces';

/** 读取配置文件 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const config = require(process.env.CONFIG_PATH || '../../config/debug.js');

/** 代理url */
export const getProxy = (path: string): string => {
	const { proxy, html } = config;
	const t = proxy.filter((p: IProxy) => p.path.some((s: string) => path.includes(s)));
	return t.length ? t[0].target + path : html + path;
};