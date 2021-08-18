(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{bXAu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n("Fcif"),c=n("+I+c"),r=(n("mXGw"),n("/FXl")),i=n("TjRS"),a=n("Xa5l"),p=(n("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/device/ocr/index.mdx"}});var s={_frontmatter:p},d=i.a;function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"ocr-ocr-文字识别"},"ocr ocr 文字识别"),Object(r.b)("span",{style:{fontSize:14}},"ocr:()=> Promise<Return>"),Object(r.b)("h5",{id:"入参：-无"},"入参： 无"),Object(r.b)("h5",{id:"基本用法"},"基本用法"),Object(r.b)("h5",{id:"代码演示"},"代码演示"),Object(r.b)(a.a,{code:"\n    import Suplink from 'suplink-sdk';\n    Suplink.ocr().then(res=>{\n        let {code,msg,data} = res;\n        // do something\n    })\n",title:"基本用法",desc:"ocr文字识别",mdxType:"Box"}),Object(r.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(r.b)("p",null,"返回格式请参照 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://confluence.bluetron.cn/pages/viewpage.action?pageId=39208726"}),"http://confluence.bluetron.cn/pages/viewpage.action?pageId=39208726")),Object(r.b)(a.a,{code:"\n    {/* 可编程组件 */}\n    import React from 'react'\n    import {Button} from 'antd'\n    export default class Component extends React.Component {\n      \n      onClick = ()=>{\n           window.zhizhiDispatchAppEvent('sl.intelligentFunction.ocr').then(res=>{\n             document.querySelector('#content').innerHTML(res.responseResult)\n           })\n      }\n      render(){\n        return <>\n          <p id=\"content\"></p>\n          <Button onClick={this.onClick}>orc文字识别</Button>\n        </>\n      }\n    }\n",title:"基本用法",desc:"orc文字识别",mdxType:"Box"}),Object(r.b)("h6",{id:"返回值：-return"},"返回值： Return"),Object(r.b)(a.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:"string",desc:"识别完数据"}],mdxType:"Table"}))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/device/ocr/index.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-device-ocr-index-mdx-884da47022a6be2c57b1.js.map