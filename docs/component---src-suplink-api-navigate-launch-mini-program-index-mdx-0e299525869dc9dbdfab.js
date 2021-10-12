(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Ovne:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t("Fcif"),r=t("+I+c"),i=(t("mXGw"),t("/FXl")),o=t("TjRS"),p=t("Xa5l"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/navigate/launchMiniProgram/index.mdx"}});var s={_frontmatter:c},d=o.a;function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"launchminiprogram-唤起其他小程序"},"launchMiniProgram 唤起其他小程序"),Object(i.b)("span",{style:{fontSize:14}},"launchMiniProgram:(params:Params)=> Promise<Return>"),Object(i.b)("h5",{id:"入参：-params"},"入参： Params"),Object(i.b)(p.b,{require:!0,data:[{property:"appId",type:"string",desc:"supLink小程序的appId",require:"是"},{property:"url",type:"string",desc:"小程序完整的url路径",require:"是"}],mdxType:"Table"}),Object(i.b)("h5",{id:"基本用法"},"基本用法"),Object(i.b)("h5",{id:"代码演示"},"代码演示"),Object(i.b)(p.a,{code:"\n    import Suplink from 'suplink-sdk';\n    const params = {\n      appId: '03fc93435d404a099a4f0f150c7f468e',\n      url: 'www.baidu.com'\n    }\n    Suplink.launchMiniProgram(params).then(res=>{\n      let {code,msg,data} = res;\n      // do something\n    })\n",title:"基本用法",desc:"唤起其他小程序",mdxType:"Box"}),Object(i.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(i.b)("p",null,"返回格式请参照 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://confluence.bluetron.cn/pages/viewpage.action?pageId=48759390"}),"https://confluence.bluetron.cn/pages/viewpage.action?pageId=48759390")),Object(i.b)(p.a,{code:"\n    {/* 可编程组件 */}\n    import React from 'react'\n    import {Button} from 'antd'\n    export default class Component extends React.Component {\n      \n      onClick = ()=>{\n          const params = {\n            appId: '03fc93435d404a099a4f0f150c7f468e',\n            url: 'www.baidu.com'\n          }\n          window.zhizhiDispatchAppEvent('sl.operation.openMinApp', params).then(res=>{\n            console.log(res.responseResult)\n          })\n      }\n      render(){\n        return <>\n          <Button onClick={this.onClick}>唤起其他小程序</Button>\n        </>\n      }\n    }\n",title:"基本用法",desc:"唤起其他小程序",mdxType:"Box"}),Object(i.b)("h6",{id:"返回值：-return"},"返回值： Return"),Object(i.b)(p.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:"string",desc:""}],mdxType:"Table"}))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/navigate/launchMiniProgram/index.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-navigate-launch-mini-program-index-mdx-0e299525869dc9dbdfab.js.map