import express, { Request, Response } from 'express';
import { userAgent } from '@src/interfaces';
import { config, getProxy } from '@src/utils';
import request, { RequiredUriUrl, CoreOptions } from 'request';
import chalk from 'chalk';

const router = express.Router();
const ask = request.defaults({ jar: true });

router.all('*', async (req: Request, res: Response) => {
	const options: RequiredUriUrl & CoreOptions = {
		method: req.method,
		url: getProxy(req.originalUrl),
		headers: {
			'Content-Type': req.headers['content-type'] || req.headers['Content-Type'],
			'User-Agent': userAgent,
		},
	};
	if (req.method === 'POST' && JSON.stringify(req.body) !== '{}') {
		options.json = true;
		options.body = req.body;
	}
	const result = ask(options);
	if (result instanceof Promise) {
		const { result: r } = await result; 
		res.send(r);
		return;
	}
	result.pipe(res);
	return;
});

/** 自动登录 */
const login = () => {
	const host = config.proxy[0].target;
	console.log('url', `${host}/passport/login`);
	const options = {
		method: 'POST',
		url: `${host}/passport/login`,
		headers: {
			'Content-Type': 'multipart/form-data',
			'User-Agent': userAgent,
		},
		formData: {
			...config.user,
			logintype: 'PASSWORD',
		},
	};
	ask(options, (error) => {
		if (error) throw new Error(error);
		ask({
			method: 'GET',
			url: host,
			headers: {
				'User-Agent': userAgent,
			},
		}, (e, r, b) => {
			if (e) {
				throw new Error(e);
			}
			if (b && b.indexOf('登录') > -1 && b.indexOf('注册') > -1) {
				console.log(chalk.green.bold('登录失败，请检查!'));
			} else {
				console.log(chalk.green.bold('登录成功!'));
			}
		});
	});
};

login();

module.exports = router;