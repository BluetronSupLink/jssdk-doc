(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"6X83":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));var o=n("Fcif"),p=n("+I+c"),r=(n("mXGw"),n("/FXl")),a=n("TjRS"),s=n("Xa5l"),i=(n("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/openApi/login/index.mdx"}});var c={_frontmatter:i},d=a.a;function b(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"login-获取-token"},"login 获取 token"),Object(r.b)("span",{style:{fontSize:14}},"login:()=> Promise<Return>"),Object(r.b)("h5",{id:"入参：-无"},"入参： 无"),Object(r.b)("h5",{id:"基本用法"},"基本用法"),Object(r.b)("h5",{id:"代码演示"},"代码演示"),Object(r.b)(s.a,{code:"\n    import Suplink from 'suplink-sdk';\n    Suplink.login().then(res=>{\n        let {code,msg,data} = res;\n        // do something\n    })\n",title:"基本用法",desc:"获取token",mdxType:"Box"}),Object(r.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(r.b)("p",null,"返回格式请参照 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://confluence.bluetron.cn/pages/viewpage.action?pageId=2327083"}),"http://confluence.bluetron.cn/pages/viewpage.action?pageId=2327083")),Object(r.b)(s.a,{code:"\n    {/* 可编程组件 */}\n    import React from 'react'\n    import {Button} from 'antd'\n    export default class Component extends React.Component {\n      \n      onClick = ()=>{\n           window.zhizhiDispatchAppEvent('reqGetOpenId').then(res=>{\n            window.localStorage.setItem('supostoken',res.responseResult.supostoken)\n            window.localStorage.setItem('suplinktoken',res.responseResult.token)\n           })\n      }\n      render(){\n        return <>\n          <Button onClick={onClick}>获取token</Button>\n        </>\n      }\n    }\n",title:"基本用法",desc:"获取token",mdxType:"Box"}),Object(r.b)("h6",{id:"返回值：-return"},"返回值： Return"),Object(r.b)(s.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:Object(r.b)("span",null,Object(r.b)("a",{href:"#data"},"Data")),desc:"object"}],mdxType:"Table"}),Object(r.b)("h6",{id:"data"},"Data"),Object(r.b)(s.b,{data:[{property:"token",type:"string",desc:"suplink的token"},{property:"userName",type:"string",desc:"登录supLink的userName"},{property:"appId",type:"string",desc:"小程序的appId"},{property:"baseUrl",type:"string",desc:"小程序的baseurl"},{property:"appName",type:"string",desc:"小程序的名字"},{property:"supostoken",type:"string",desc:"supOS的token"}],mdxType:"Table"}))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/openApi/login/index.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-open-api-login-index-mdx-664512edffc2be6c5d29.js.map