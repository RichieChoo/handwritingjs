// 有赞面试

// 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
//例如`110000000000000000000000000000000000000000000000`，
// 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
//也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
// 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，
///表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

function timeBitmapToRanges(bitmap) {
	let arr = bitmap.split("");
	let map = new Map();
	let c = 0,
		index = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "1") {
			if (c === 0) index = i;
			c++;
			map.set(index, c);
		} else c = 0;
	}
	return [...map.entries()].map(([i, c]) => {
		let sH = String(i >> 1).padStart(2, 0);
		let sM = i % 2 === 0 ? "00" : "30";
		let eH = String((i + c) >> 1).padStart(2, 0);
		let eM = (i + c) % 2 === 0 ? "00" : "30";
		return `${sH}:${sM}~${eH}:${eM}`;
	});
}
console.log(
	timeBitmapToRanges("110001010101001010000011110000111111111111111111"),
);
