# url 输入到页面渲染过程

1. dns 解析（递归的过程）
   a. 浏览器 dns 缓存
   b. 操作系统 查找 hosts
   c. 路由器 dns 缓存
   d. 本地 dns 服务器查询
   e. 根服务器查询
2. tcp 链接、 tcp 三次握手
   a. 客户端 向 服务器 发送 SYN 及 seq=x ，此时处于 SYN-SEND
   b. 服务端 向 客户端 发送 ACK =x+1, seq= y，此时处于 SYN-RECEIVEd
   c. 客户端接收到 发送 ACK= y+1,SYN 给服务器，此时处于 ESTABLISHED
3. 浏览器缓存
   a. memory cache / disk cache
   b. 强缓存 Expries/ Cache Control
   c. 协商缓存 Last Modified(If Modify Since) / ETag(If None Match)
   d. 启发式缓存（两个 Date 与 Last Modified 差的的 10%）
4. 页面渲染（DOM/Style/Layout/Layer/Paint->tiles/raster/drawquad/display）
   a. HTML Parser 解析 html 成 Dom Tree
   b. CSS Parser 解析 css 成 Css Object Model tree( CSSOM)
   c. 生成 LayOut Tree 布局树，以前叫 Render 渲染树
   d. 对布局树分层生成 LayerTree 图层树
   e. 为每个图层生成绘制列表，提交给合成线程，也就是 compositor
   f. 合成线程 compositor 将图层分成图块 tile
   g. 光栅线程池 将图块转成位图，也就是显示器的像素
   h. 合成线程 发送 DrawQuad 给浏览器
   i. 浏览器中有个 viz 组件，接受 DrawQuad 命令，合成帧，然后发送给 GPU 呈现在显示器
