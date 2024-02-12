const http = require('https');

const options = {
	method: 'GET',
	hostname: 'navitime-maps.p.rapidapi.com',
	port: null,
	path: '/map_script?host=localhost',
	headers: {
		'X-RapidAPI-Key': '971b78459emshea0ace131e1af42p17344cjsncc113a914668',
		'X-RapidAPI-Host': 'navitime-maps.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();