/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
	return points
		.sort(([a1, a2], [b1, b2]) => a1 * a1 + a2 * a2 - (b1 * b1 + b2 * b2))
		.slice(0, k);
};

//快排
// https://leetcode-cn.com/problems/k-closest-points-to-origin/solution/pai-xu-kuai-su-xuan-ze-you-xian-dui-lie-1xing-dai-/
var kClosest = function(points, K, s = 0, e = points.length - 1, l = s, r = e, t) {
    if (K >= points.length) return points
    var d = p => (t = points[p], t[0] * t[0] + t[1] * t[1]), q = d(s), c = (a, m, n) => (t = a[m], a[m] = a[n], a[n] = t)
    while(l < r) {
        while (l < r && d(r) >= q) r--
        while (l < r && d(l) <= q) l++
        c(points, l, r)
    }
    c(points, l, s)
    return l === K ? points.slice(0, l) : l > K ? kClosest(points, K, s, l - 1) : kClosest(points, K, l + 1, e)
};
// @lc code=end
