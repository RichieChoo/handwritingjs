# vue computed

1. initState 时会 opts.computed && initComputed
2. initComputed 流程
   a. 初始化\_computedWatchers
   b. 便利 computed 的 key，生成 watcher 实例，复制 lazy 为 true，同时把 lazy 赋值给 dirty
   c. 对这个 computed key 的 watcher 进行的 getter、setter 设置，通过 dirty 判断是否执行 watcher.evalute()
3. 假如 computed A 依赖 data.B,B 会收集 A 的 watcher,当 B 改变时，会通知 A 更新即设置 dirty 为 true,
   引用 A 的地方会触发 A 的 getter(这个 getter 就是 createComputedGutter 创建的)，对应的 watcher 就会 evalute，
   同时设置 dirty 为 false,A 的 getter 返回更新后 watcher.value，页面更新
