const fs = require('fs');
const path = require('path');

exports.command = 'debug';

exports.describe = '调试应用';

exports.builder = yargs => {
	return yargs
		.option('config', {
			alias: 'c',
			default: 'debug.js',
			describe: '配置文件',
			type: 'string',
		})
		.option('port', {
			alias: 'p',
			default: 3000,
			describe: '端口',
			type: 'number',
		})
    .argv
};

exports.handler = function(argv) {
	const configPath = path.resolve(process.cwd(), argv.config);
	if (!fs.existsSync(configPath)) {
		console.log('没有配置文件');
		process.exit();
	}

	process.env.PORT = argv.port;
	process.env.CONFIG_PATH = configPath;
	process.env.NAMESPACE = argv.namespace;
	require('../index.js');
};
