# computed

1. 初始化 initState
2. opts.computed && initComputed
3. initComputed 过程：
   - init computedWatchers
   - 实例化 Watcher,设置 opt.lazy = true ,getter ,
     - 将 lazy 赋值给 dirty
     - 初始化 deps=[]
   - definedComputed (vm,key)
     - 设置 set
     - 设置 get=> createComputedGutter
       - dirty true => watcher.evalute()
       - Dep.target => watcher.depend()

4. 假如 computed A 依赖data.B,B会收集A的watcher,当B改变时，会通知A更新即设置dirty为true,
引用A的地方会触发A的getter(这个getter就是createComputedGutter创建的)，对应的watcher就会evalute，
同时设置dirty为false
