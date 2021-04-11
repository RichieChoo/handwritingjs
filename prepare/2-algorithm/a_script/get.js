const fetch = require("node-fetch");
let opts = {
	headers: {
		accept: "application/json, text/plain, */*",
		"accept-language": "zh-CN,zh;q=0.9",
		authorization: "Token 37c411c8a3aae83dda356047f081cf0382dfdc75",
		"sec-ch-ua":
			'"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
		"sec-ch-ua-mobile": "?0",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		cookie:
			"Hm_lvt_27a927196d810bc17f08a3ca40510a2f=1615950135,1616294603,1617618538,1618106027; Hm_lpvt_27a927196d810bc17f08a3ca40510a2f=1618106182",
	},
	referrer: "https://codetop.cc/",
	referrerPolicy: "strict-origin-when-cross-origin",
	body: null,
	method: "GET",
	mode: "cors",
};

Promise.all(
	Array.from({ length: 5 }, (v, p) =>
		fetch(
			`https://codetop.cc/api/questions/?job=4&company=4&page=${
				p + 1
			}&search=&ordering=-frequency`,
			opts,
		)
			.then(res => res.json())
			.then(res =>
				res.list
					.map(v => {
						let id = v.leetcode && v.leetcode.frontend_question_id;
						if (!isNaN(id) || !id) return id;
						return id + "#" + v.leetcode.slug_title;
					})
					.filter(Boolean),
			),
	),
).then(res => {
	let result = res.flat(Infinity);
	let leetCode = result.filter(v => !isNaN(v));
	let offer = result.filter(v => isNaN(v));
	console.log("leetcode:\n", leetCode.toString(), "\n");
	console.log(
		"剑指offer:\n",
		offer
			.map(
				v =>
					`- [${v.split("#")[0]}](https://leetcode-cn.com/problems/${
						v.split("#")[1]
					})`,
			)
			.join("\n"),
	);
});
