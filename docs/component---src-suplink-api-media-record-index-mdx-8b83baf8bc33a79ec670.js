(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+9Cc":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n("Fcif"),c=n("+I+c"),r=(n("mXGw"),n("/FXl")),a=n("TjRS"),i=n("Xa5l"),p=(n("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/media/record/index.mdx"}});var b={_frontmatter:p},d=a.a;function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"record-语音录制"},"record 语音录制"),Object(r.b)("span",{style:{fontSize:14}},"record:()=> Promise<Return>"),Object(r.b)("h5",{id:"入参：无"},"入参：无"),Object(r.b)("h5",{id:"基本用法"},"基本用法"),Object(r.b)("h5",{id:"代码演示"},"代码演示"),Object(r.b)(i.a,{code:"\n    import Suplink from 'suplink-sdk';\n    \n    export default class Component extends React.Component {\n      render(){\n        <button onClick={()=>{\n           Suplink.record().then(res => {\n             console.log(res)\n           })\n        }}></button>\n      }\n    }\n",title:"基本用法",desc:"语音录制",mdxType:"Box"}),Object(r.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(r.b)("p",null,"返回格式请参照 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://confluence.bluetron.cn/pages/viewpage.action?pageId=58436988"}),"https://confluence.bluetron.cn/pages/viewpage.action?pageId=58436988")),Object(r.b)(i.a,{code:"\n    import React from 'react'\n    \n    export default class Component extends React.Component {\n    \n      render(){\n        <button onClick={()=>{\n           window.zhizhiDispatchAppEvent('sl.multiMedia.voiceRecording')\n        }}></button>\n      }\n    }\n",title:"基本用法",desc:"语音录制",mdxType:"Box"}),Object(r.b)("h6",{id:"返回值：-return"},"返回值： Return"),Object(r.b)(i.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:Object(r.b)("span",null,Object(r.b)("a",{href:"#data"},"Data")),desc:"object"}],mdxType:"Table"}),Object(r.b)("h6",{id:"data"},"Data"),Object(r.b)(i.b,{data:[{property:"voiceUrl",type:"string",desc:"录音文件的路径"}],mdxType:"Table"}))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/media/record/index.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-media-record-index-mdx-8b83baf8bc33a79ec670.js.map