---
layout: post
title: "[工具分享] Mathpix Snip 公式"
author: Hengyi Yang
url_author: Hengyi-Yang
description: 好用的数学公式识别神器：Mathpix Snip，只需要截图就能识别公式，手写的公式也能识别。
---
> 介绍

理工科的学生或者经常用到数学的科研工作者，对于很多数学公式非常头疼，而Mathpix Snip，只需要截个图，Mathpix Snip就可以将截图中的公式自动转化为 LaTex或Word 代码表达式。
![](/lab_images/blogs/MathpixSnip数学公式识别.png)

>下载地址

[https://mathpix.com/#downloads](https://mathpix.com/#downloads)

>教程

- 下载，安装（一路Next即可），注册（免费账户有使用次数额度，可更换邮箱重新注册使用），登录

- 截图截取公式图片，自动生成公式代码

- 对于Word，选择复制前后缀为$的代码，例如：

```
$x(t)=\frac{x_{m}}{1+\left(\frac{x_{m}}{x_{0}}-1\right) e^{-r\left(t-t_{0}\right)}}$
```

或MathML代码

```
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <msub>
      <mi>x</mi>
      <mrow>
        <mi>m</mi>
      </mrow>
    </msub>
    <mfenced open="" close=")" separators="|">
      <mrow>
        <mn>1</mn>    
        <mo>+</mo>    
        <mfenced open="(" close=")" separators="|">
          <mrow>
            <mfrac>
              <msub>
                <mi>x</mi>
                <mrow>
                  <mi>m</mi>
                </mrow>
              </msub>
              <msub>
                <mi>x</mi>
                <mrow>
                  <mn>0</mn>
                </mrow>
              </msub>
            </mfrac>        
            <mo>−</mo>        
            <mn>1</mn>        
          </mrow>        
        </mfenced>    
        <msup>
          <mi>e</mi>
          <mrow>
            <mo>−</mo>
            <mi>r</mi>
            <mfenced open="(" close="" separators="|">
              <mrow>
                <mi>t</mi>            
                <mo>−</mo>            
                <msub>
                  <mi>t</mi>
                  <mrow>
                    <mn>0</mn>
                  </mrow>
                </msub>            
              </mrow>            
            </mfenced>
          </mrow>
        </msup>    
      </mrow>    
    </mfenced>
  </mfrac>
</math>
```

解析效果：

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <msub>
      <mi>x</mi>
      <mrow>
        <mi>m</mi>
      </mrow>
    </msub>
    <mfenced open="" close=")" separators="|">
      <mrow>
        <mn>1</mn>    
        <mo>+</mo>    
        <mfenced open="(" close=")" separators="|">
          <mrow>
            <mfrac>
              <msub>
                <mi>x</mi>
                <mrow>
                  <mi>m</mi>
                </mrow>
              </msub>
              <msub>
                <mi>x</mi>
                <mrow>
                  <mn>0</mn>
                </mrow>
              </msub>
            </mfrac>        
            <mo>−</mo>        
            <mn>1</mn>        
          </mrow>        
        </mfenced>    
        <msup>
          <mi>e</mi>
          <mrow>
            <mo>−</mo>
            <mi>r</mi>
            <mfenced open="(" close="" separators="|">
              <mrow>
                <mi>t</mi>            
                <mo>−</mo>            
                <msub>
                  <mi>t</mi>
                  <mrow>
                    <mn>0</mn>
                  </mrow>
                </msub>            
              </mrow>            
            </mfenced>
          </mrow>
        </msup>    
      </mrow>    
    </mfenced>
  </mfrac>
</math>

- 对于Word，需要下载mathtype插件，[点击下载](https://www.mathtype.cn/xiazai.html)

- 光标点到输入公式的地方，直接粘贴，这个时候，word里面显示的还是tex代码（即$代码$）

- 直接使用mathtype的转换快捷键:**ALT+\\**或者点击Word菜单栏中的MathType，发布栏目里的**切换Tex** 将代码转换为公式

> 参考

```
[1]最好用的数学神器Mathpix Snip https://blog.csdn.net/qq_34243930/article/details/89158366
[2]Mathpix Snip 2019 https://www.cr173.com/soft/971926.html
[3]复制公式到word https://www.jianshu.com/p/a70bdeed2046
```


