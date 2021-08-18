(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cQSI:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t("Fcif"),o=t("+I+c"),s=(t("mXGw"),t("/FXl")),i=t("TjRS"),a=t("Xa5l"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/device/gesture/index.mdx"}});var p={_frontmatter:c},d=i.a;function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(d,Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"gesture-手势"},"gesture 手势"),Object(s.b)("span",{style:{fontSize:14}},"gesture:()=> Promise<Return>"),Object(s.b)("h5",{id:"入参：-无"},"入参： 无"),Object(s.b)("h5",{id:"基本用法"},"基本用法"),Object(s.b)("h5",{id:"代码演示"},"代码演示"),Object(s.b)(a.a,{code:"\n    import Suplink from 'suplink-sdk';\n    export default class Component extends React.Component {\n      state = {\n        logined:false\n      }\n      componentDidMount(){\n        Suplink.gesture().then(res=>{\n          let {code,msg,data} = res;\n            if( +res.responseCode === 200){\n                //has auth\n                this.setState({\n                  logined:true\n                })\n            }\n        })\n      }\n      render(){\n        const {logined} = this.state\n        if(logined) return \"登录成功\"\n          return '登录失败'\n      }\n    }\n",title:"基本用法",desc:"手势",mdxType:"Box"}),Object(s.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(s.b)("p",null,"返回格式请参照 ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://confluence.bluetron.cn/pages/viewpage.action?pageId=43088572"}),"http://confluence.bluetron.cn/pages/viewpage.action?pageId=43088572")),Object(s.b)(a.a,{code:"\n    {/* 可编程组件 */}\n    import React from 'react'\n    \n    export default class Component extends React.Component {\n      componentDidMount(){\n         window.zhizhiDispatchAppEvent('sl.security.gesture').then(res=>{\n        \n           if( +res.responseCode === 200){\n               //has auth\n           }\n         })\n      }\n      render(){\n        {/* ... */}\n      }\n    }\n",title:"基本用法",desc:"手势",mdxType:"Box"}),Object(s.b)("h6",{id:"返回值：-return"},"返回值： Return"),Object(s.b)(a.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:"string",desc:"string"}],mdxType:"Table"}))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/device/gesture/index.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-device-gesture-index-mdx-59a97d25d97c5fa8302a.js.map