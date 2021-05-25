(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Ff1L:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n("Fcif"),r=n("+I+c"),a=(n("mXGw"),n("/FXl")),c=n("TjRS"),p=n("Xa5l"),i=(n("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/netWork/getNetworkInfo/index.mdx"}});var s={_frontmatter:i},b=c.a;function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(b,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"getnetworkinfo-获取网络状态"},"getNetworkInfo 获取网络状态"),Object(a.b)("span",{style:{fontSize:14}},"getNetworkInfo:()=> Promise<ReturnNetworkInfo>"),Object(a.b)("h5",{id:"入参：无"},"入参：无"),Object(a.b)("h5",{id:"基本用法"},"基本用法"),Object(a.b)("h5",{id:"代码演示"},"代码演示"),Object(a.b)(p.a,{code:"\n    import Suplink from 'suplink-sdk';\n    Suplink.ReturnNetworkInfo().then(res=>{\n        let {code,msg,data} = res;\n        // do something\n    })\n",title:"基本用法",desc:"获取网络状态",mdxType:"Box"}),Object(a.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(a.b)("p",null,"返回格式请参照 ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://confluence.bluetron.cn/pages/viewpage.action?pageId=2327062"}),"http://confluence.bluetron.cn/pages/viewpage.action?pageId=2327062")),Object(a.b)(p.a,{code:"\n    {/* 可编程组件 */}\n    import React from 'react'\n    import {Button} from 'antd'\n    export default class Component extends React.Component {\n      \n      onClick = ()=>{\n           window.zhizhiDispatchAppEvent('reqGetNetworkType').then(res=>{\n            console.log(res.responseResult)\n           })\n      }\n      render(){\n        return <>\n         \n          <Button onClick={onClick}>获取网络信息</Button>\n        </>\n      }\n    }\n",title:"基本用法",desc:"获取网络状态",mdxType:"Box"}),Object(a.b)("h6",{id:"返回值：-returnnetworkinfo"},"返回值： ReturnNetworkInfo"),Object(a.b)(p.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:Object(a.b)("a",{href:"#typedata"},"TypeData"),desc:"返回的 data"}],mdxType:"Table"}),Object(a.b)("h6",{id:"typedata"},"TypeData"),Object(a.b)(p.b,{data:[{property:"networkAvailable",type:"boolean",desc:"网络是否可用 "},{property:"networkType",type:"string",desc:'"UNKNOWN" | "NOTREACHABLE" | "WIFI" | "4G" | "3G" | "2G" | "WWAN"'}],mdxType:"Table"}))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/netWork/getNetworkInfo/index.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-net-work-get-network-info-index-mdx-aacd77cf33c4da893d9a.js.map