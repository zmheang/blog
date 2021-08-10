
# html

##### 安全

##### 结构：

- quick introduction

    - HTML文档由树状的元素和文本组成，源码中每个元素由一个开始标签和一个结束标签表示（某些开始标签和结束标签可以在某些情况下省略）
    - 属性应放置在开始标签中，由属性名和属性值构成，以‘=’分隔，如果不包含空格、逗号、顿号、等号、大小于号，属性值可以不加引号，否则必须使用单引号或者双引号，如果属性值是空字符串，属性值以及‘=’可以一起省略
    - HTML用户代理（browser...）解析这些标记，把它转化为DOM（Document Object Model）树。DOM树是文档在内存中的表示

- common infrastructure

- Semantics、structure、`APIs of HTML documents`

  `Document:在HTML UA里每一个xml或者HTML都代表一个document对象，包含许多对象和方法`

  `Semantics: 语义`标签的使用要符合语义

- `elements of HTML`

  将所有的elements分类：

    - `Metadata content`

      Metadata content is content that sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.

      元数据内容是设置其余内容的表示或行为的内容，或设置文档与其他文档的关系的内容，或传递其他“带外”信息的内容。

      `ex:base、link、meta、noscript、script、style、template、title`

    - `Flow content`

      Most elements that are used in the body of documents and applications are categorized as flow content.

      文档和应用程序主体中使用的大多数元素都被归类为流内容。

      `ex:a、abbr、address、area、article、aside、audio、b、bdi、bdo、blockquote、br、button、canvas、cite、code、data、datalist、del、details、dfn、dialog、div、dl、em、embed、fieldset、figure、footer、form、h1、h2、h3、h4、h5、h6、header、hgroup、hr、i、iframe、img、input、ins、kbd、label、link、main、map、mark、MathML math、menu、meta、meter、nav、noscript、object、ol、output、p、picture、pre、progress、q、ruby、s、samp、script、section、select、slot、small、strong、sub、sup、svg、table、template、textarea、time、u、ul、var、video、wbr、text`

    - `Sectioning content`

      Sectioning content is content that defines the scope of [headings](https://html.spec.whatwg.org/multipage/dom.html#heading-content-2) and [footers](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element).

      分段内容是定义标题和页脚范围的内容。

      `ex:article、aside、nav、section`

    - `Heading content`

      Heading content defines the header of a section (whether explicitly marked up using [sectioning content](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2) elements, or implied by the heading content itself).

      标题内容定义了一个节的标题(无论是使用分段内容元素显式标记的，还是由标题内容本身隐含的)。

      `ex:hgroup、h1、h2...h6`

    - `Phrasing content`

      Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) form [paragraphs](https://html.spec.whatwg.org/multipage/dom.html#paragraph).

      措辞内容是文档的文本，以及在段内级别标记该文本的元素。段落由一连串的措辞内容构成。

      `ex:a、abbr、area、audio、b、bdi、bdo、br、button、canvas、cite、code、data、datalist、del、dfn、em、embed、i、iframe、img、input、ins、kbd、label、link、map、mark、math、meta、meter、noscript、object、output、pricture、progress、q、ruby、s、samp、script、select、slot、small、span、strong、sub、sup、svg、template、textarea、time、u、var、video、wbr、text`

    - `Embedded content`

      Embedded content is content that imports another resource into the document, or content from another vocabulary that is inserted into the document.

      内嵌内容是将另一个资源导入文档的内容，或插入文档的另一个词汇表中的内容

      `ex:audio、canvas、embed、iframe、img、math、object、picture、svg、video`

    - `Interactive content`

      Interactive content is content that is specifically intended for user interaction.

      交互式内容是专门为用户交互设计的内容。

      `ex:a、audio、button、details、embed、iframe、img、input、label、select、textarea、video`

    - Palpable content

      As a general rule, elements whose content model allows any [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) or [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) should have at least one node in its [contents](https://html.spec.whatwg.org/multipage/dom.html#concept-html-contents) that is palpable content and that does not have the `hidden` attribute specified.

      作为一般规则，其内容模型允许任何流内容或措辞内容的元素应该在其内容中至少有一个节点，该节点是可感知的内容，并且没有指定的隐藏属性。

      `ex:a、abbr、address、article、aside、audio、b、bdi、bdo、blockquote、button、canvas、cite、code、data、datalist、dfn、div、dl、em、embed、fieldset、figure、footer、form、h1...h6、header、hgroup、i、iframe、img、input、ins、kbd、label、main、map、mark、math、meta、meter、nav、object、ol、output、p、pre、q、ruby、s、samp、section、select、small、span、strong、sub、sup、svg、table、textarea、time、u、ul、var、video、text`

    - Script-supporting elements

      `ex:script、template`

- `Microdata`

- `User interaction`



- `Loading web pages`

  `browsing context：是浏览器向用户展示Document对象的环境`

    - 有一个对应的`WindowProxy`对象

    - 有一个`opener browsing context`,刚开始是`null`

    - 有一个`boolean类型的属性disowned`，刚开始是`false`,对应`window.opener`

    - 有一个`boolean类型的属性closing`，刚开始是`false`,对应`window.close()`

      ```javascript
      // Neither disowned nor is closing:
      const popup1 = window.open();
      
      // Disowned, but not is closing:
      const popup2 = window.open();
      popup2.opener = null;
      
      // Not disowned, but is closing:
      const popup3 = window.open();
      popup3.close();
      
      // Disowned, is closing:
      const popup4 = window.open();
      popup4.opener = null;
      popup4.close();
      ```

    - 有一个origin，初始化时为null

    - 有一个URL，初始化时为null

- `Web application APIs`

  `Event loops:`

  `An event loop has one or more rask queue,A task queue is a set of tasks`

  `the microtask queue is not a task queue`



- `Communication`

- `Web workers`

- `Worklets`

- `Web storage`

- `HTML syntax`

- `XML syntax`

- `Rendering`

- `Events`

- `Attributes`

- `MIME Types`

- `Interfaces`

