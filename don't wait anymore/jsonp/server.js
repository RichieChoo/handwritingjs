const http = require("http");
const url = require("url");
let server = http.createServer();
server.on("request", function (req, res) {
	let urlData = url.parse(req.url);
	console.log();
	if (urlData.pathname === "/jsonp") {
		let matchArr = urlData.query
			.split("&")
			.filter(v => v.includes("callback"))[0]
			.match(/(?<=callback\=)\w+/);
		if (matchArr && matchArr[0]) {
			res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
			let data = {
				name: "JSONP_Request",
				type: "JSONP",
			};
			let fn = matchArr[0];
			var callback = `${fn}(${JSON.stringify(data)})`;
			res.end(callback);
		}
	}
});
server.listen("8888");
console.log("server running");
