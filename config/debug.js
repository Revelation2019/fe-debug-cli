module.exports = {
	user: {
		username: 'ddxyq',
		password: '123456',
	},
	proxy: [
		{
			path: [
				'/oauth2',
				'/market',
				'/terminal-api',
				'/agentBuy',
				'/inquiryWeb',
				'/webim',
				'/cart/web',
				'/msg',
				'/maindata',
				'/pointshop',
				'/partycredit',
				'/bill-incomeandexpenses',
				'/mall',
			],
			target: 'https://ec-hwbeta.casstime.com',
		},
	],
	html: 'http://localhost:3000',
	frontPage: true,
};