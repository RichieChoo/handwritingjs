# BFS

## 本质

在一幅「图」中找到从起点 start 到终点 target 的最近距离

## 框架

```javascript
// 计算从起点 start 到终点 target 的最近距离
function BFS(start, target) {
    const q = []; // 核心数据结构
    const visited = []; // 避免走回头路

    q.push(start); // 将起点加入队列
    visited.push(start);
    let step = 0; // 记录扩散的步数

    while (q.length !== 0) {
        let size = q.length;

        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < size; i++) {
            const  cur = q.shift();

            /* 划重点：这里判断是否到达终点 */
            if (cur === target){
                return step;
            }

            /* 将 cur 的相邻节点加入队列 */
            for (x in cur.other())
                if (visited.includes(x)) {
                    q.push(x);
                    visited.push(x);
                }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
}

```

## 解释

- 队列q--BFS 的核心数据结构
- cur.other()---泛指cur相邻的节点，比如说二维数组中，cur上下左右四面的位置就是相邻节点
- visited的主要作用是防止走回头路，大部分时候都是必须的，但是像一般的二叉树结构，没有子节点到父节点的指针，不会走回头路就不需要visited数组
