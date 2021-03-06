---
layout: post
title: "[技能分享] 利用R包Pheatmap绘制简单热图"
author: Hengyi Yang
url_author: Hengyi-Yang
description: pheatmap是一种R包；热图可以聚合大量的数据，利用渐进色来优雅很直观地展现数据的疏密程度或频率高低。

---
> 介绍

热图可以聚合大量的数据，并可以用一种渐进色来优雅地表现，可以很直观地展现数据的疏密程度或频率高低。基因和样本都可以单独聚类，排序，聚类再分组，行列注释，配色调整，调整聚类线以及单元格的宽度和高度均可实现。因此记录一下解决办法。
![](/lab_images/blogs/利用R包Pheatmap绘制简单热图.png)

>内容

- install.packages("pheatmap")

- 选择CHINA节点

- library(pheatmap)

- 准备数据，最简单粗暴的方式，从Excel中复制

- Exp<-read.delim("clipboard",header=T,row.names=1)

- pheatmap(Exp, cluster_row = FALSE,cluster_col = FALSE,display_numbers = TRUE,number_color = "white",border=FALSE,cluster_cols=F,color = colorRampPalette(c("navy", "white", "firebrick3"))(50))

Tips:本示例未作行列方向聚类。

> 参考

```
[1]最简单最实用的R语言热图绘制教程 https://www.jianshu.com/p/3ff336a74d7a
[2]pheatmap|暴雨暂歇，“热图”来袭！！！ https://mp.weixin.qq.com/s/QBZ7y1e_jOjYh8Yxq4aAbw
```


