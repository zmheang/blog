---
sidebarDepth: 3
---
# 丝滑的轮播图

首先看下效果图：



上代码：

###### `html:`

我们全部使用div来完成，主要看css样式

```html
<body>
<div class="container">
    <div class="panel active" style="background-image: url('./images/timg-001-01.png')">
        <h3>Explore The World</h3>
    </div>
    <div class="panel" style="background-image: url('./images/timg-001-02.png')">
        <h3>Wild Forest</h3>
    </div>
    <div class="panel" style="background-image: url('./images/timg-001-03.png')">
        <h3>Sunny Beach</h3>
    </div>
    <div class="panel" style="background-image: url('./images/timg-001-04.png')">
        <h3>City on Winter</h3>
    </div>
</div>
</body>
```

`css:`

这才是重头戏。

```css
/* 加载字体 */
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
/* 定义了如何计算一个元素的总宽高： border-box不包含margin */
* {
    box-sizing: border-box;
}

/* 采用flex布局 */
body {
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}

.container {
    display: flex;
    width: 90vw;
}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    -webkit-transition: all 700ms ease-in;
}

.panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
}

.panel.active {
    flex: 5;
}

.panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
    .container {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
```

`js:`

添加事件

```javascript
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
```

总体的一个思路呢就是：通过`flex布局`中的`flex`属性，

首先解释一下`flex`这个属性：是`flex-grow,flex-shrink 和 flex-basis`的简写，默认值为0 1 auto。

然后添加点击事件，在点击的panel添加一个active的class。将点击的元素放大即可实现效果。然后添加过渡动画增加美观性。

















