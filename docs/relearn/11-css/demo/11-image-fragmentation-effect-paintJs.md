[图像碎片效果](https://css-tricks.com/exploring-the-css-paint-api-image-fragmentation-effect/)  

上一篇使用了CSS遮罩(mask)和自定义属性(@property)创建了一个图像碎片效果，这次使用一个新的API：CSS Painting API来实现同样的效果。

首先我们了解一下什么是CSS Painting API:属于 CSS Houdini APIs 的一部分，允许开发人员编写JavaScript函数，这些函数会直接绘制道元素的背景、边框和内容中

又牵扯出来一个新词：[CSS Houdini](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Houdini):

```html
Houdini是一组底层API，它们公开了CSS引擎的的各个部分，从而使得开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展CSS。通俗地讲就是之前都是浏览器直接一整套流程直接渲染成页面展示出来，现在浏览器提供了一组API，使得在适当的时机开发人员可以直接访问CSS对象模型(CSSOM),开发人员可以编写浏览器解析为CSS的代码从而创建新的CSS功能，而不用等待浏览器本身厂家的实现...大致先理解到这里吧，跑远了，回归正题。
```

下一步：CSS Painting API怎么使用？

`既然属于CSS Houdini APIs的一部分，那么也就是说最后还是要解析成为CSS的，只不过过程使用了非常规方案，那么就让我们来了解一下它的使用步骤：`

1. 使用`registerPaint()`定义一个`paint worklet`
2. 注册定义的`worklet`
3. 放在`paint()`中

知道了使用方法之后我们就可以在之前的基础上进行修改了：之前主要是使用scss生成了超级多的代码显得很多余，那么我们就可以使用`CSS paint API`来创建遮罩(mask).

`html代码：`

```html
<!-- n*m代表遮罩的总个数 -->
<img src="https://z3.ax1x.com/2021/08/18/f7Uya4.png" style="--f-n:100;--f-m:100;">
```

`css代码：`

```css
// 原理同上次
@property --f-o{
    syntax: '<number>';
    inherits: false;
    initial-value: 1;
  }

  img {
    width: 500px;
    height: 400px;
    -webkit-mask: paint(fragmentation);
    --f-o:1;
    transition:--f-o 1s;
  }

  img:hover {
    --f-o:0;
  }
```

`js代码：`

```js
// index.html
if (CSS.paintWorklet) {
    CSS.paintWorklet.addModule('./index.js');
  }

// index.js
registerPaint('fragmentation', class  {
		// inputProperties() 可以返回影响元素的所有属性，不仅仅是自定义属性
    static get inputProperties() {
        return [
            '--f-n',
            '--f-m',
            '--f-o'
        ]
    }

    paint(ctx, size, properties) {

        const n = properties.get('--f-n');
        const m = properties.get('--f-m');
        const o = properties.get('--f-o');
        const w = size.width/n;
        const h = size.height/m;
        const l = 10;

        const mask = 0xffffffff;
        const seed = 30;
        let m_w  = (123456789 + seed) & mask;
        let m_z  = (987654321 - seed) & mask;
        let random =  function() {
            m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
            m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

            var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
            result /= 4294967296;
            return result;
        }

        for(var i=0;i<n;i++) {
            for(var j=0;j<m;j++) {
                ctx.fillStyle = 'rgba(0,0,0,'+((random()*(l-1) + 1) - (1-o)*l)+')';
                ctx.fillRect(i*w, j*h, w, h);
            }
        }
    }

})

```

整体的思路没有变化，还是利用n*m个遮罩的先后渐变实现碎片效果，不同的是代码量变少了，其实就是利用`houdini API我们使用js代码将之前重复的代码生成了出来`

关于`CSS painting API`的具体使用方法见： [->](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API/Guide)

```js
paint()函数有三个参数：
 - drawing context
 - paint size
 - properties

我们还可以在class内部自定义属性
```

最后的效果和之前是一样的

接着不仅仅满足于矩形碎片，既然是碎片那大多都是三角形的，这样看起来比较有感觉：其实思路都是一样的，关键在于mask生成的算法，所以换一个生成算法即可实现不同的效果：

`css代码：`

```css
// 将index.html中的index.js替换即可
// index2.js
import Delaunator from 'https://cdn.skypack.dev/delaunator@5.0.0';

registerPaint('fragmentation', class  {

    static get inputProperties() {
        return [
            '--f-n',
            '--f-m',
            '--f-o'
        ]
    }

    paint(ctx, size, properties) {
        const n = properties.get('--f-n');
        const o = properties.get('--f-o');
        const w = size.width;
        const h = size.height;
        const l = 7;

        var dots = [[0,0],[0,w],[h,0],[w,h]]; /* we always include the corners */
        /* we generate N random points within the area of the element */
        for (var i = 0; i < n; i++) {
            dots.push([Math.random() * w, Math.random() * h]);
        }
        /**/
        /* We call Delaunator to generate the triangles*/
        var delaunay = Delaunator.from(dots);
        var triangles = delaunay.triangles;
        /**/
        for (var i = 0; i < triangles.length; i += 3) { /* we loop the triangles points */
            /* we draw the path of the triangles */
            ctx.beginPath();
            ctx.moveTo(dots[triangles[i]][0]    , dots[triangles[i]][1]);
            ctx.lineTo(dots[triangles[i + 1]][0], dots[triangles[i + 1]][1]);
            ctx.lineTo(dots[triangles[i + 2]][0], dots[triangles[i + 2]][1]);
            ctx.closePath();
            /**/
            var alpha = (Math.random()*(l-1) + 1) - (1-o)*l; /* the alpha value */
            /* we fill the area of triangle with the semi-transparent color */
            ctx.fillStyle = 'rgba(0,0,0,'+alpha+')';
            /* we consider stroke to fight the gaps */
            ctx.strokeStyle = 'rgba(0,0,0,'+alpha+')';
            ctx.stroke();
            ctx.fill();
        }
    }

})
```

当然，还可以是🪜，⭕️，⭐️...