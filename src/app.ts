/* eslint-disable @typescript-eslint/no-var-requires */
import chalk from 'chalk';
import express from 'express';
import log4js from 'log4js';
import bodyParser, { OptionsJson } from 'body-parser';

/** 路由 */
const indexRouter = require('./routes/index');
/** 端口 */
const port = process.env.PORT || 2000;
const app = express();

/** 日志配置 */
log4js.configure({
	appenders: { cheese: { type: 'console' } },
	categories: { default: { appenders: ['cheese'], level: 'INFO' } }
});
app.use(log4js.connectLogger(log4js.getLogger('cheese'), { level: 'INFO' }));
/** body解析 */
app.use(bodyParser.json({ extended: false } as OptionsJson));
/** 注册路由 */
app.use('/', indexRouter);

/** 启用chalk改变颜色 */
chalk.level = 1;

app.listen(port, () => {
	console.log(chalk.blue.bold(`代理已启动: http://localhost:${port}`));
});