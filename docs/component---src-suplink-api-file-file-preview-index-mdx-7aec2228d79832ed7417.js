(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3ZX9":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n("Fcif"),r=n("+I+c"),a=(n("mXGw"),n("/FXl")),c=n("TjRS"),o=n("Xa5l"),s=(n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/suplink/API/file/filePreview/index.mdx"}});var p={_frontmatter:s},l=c.a;function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(l,Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"filepreview-文件、图片、视频预览"},"filePreview 文件、图片、视频预览"),Object(a.b)("span",{style:{fontSize:14}},"filePreview:(params:Params)=> Promise<Return>"),Object(a.b)("h5",{id:"入参：-params"},"入参： Params"),Object(a.b)(o.b,{require:!0,data:[{property:"title",type:"string",desc:"需要预览文件的名字（用于显示在导航栏title，例如：附件_研发部人员名单.xlsx）",require:"否",default:"预览"},{property:"url",type:"string",desc:"文件完整的url路径（例如：http://192.168.9.29:3000/zhizhi/static/resource/load/manage/notice/2019-10/1b634795-9c15-4616-a91e-52e5702cf94f.xlsx）",require:"是"}],mdxType:"Table"}),Object(a.b)("h5",{id:"基本用法"},"基本用法"),Object(a.b)("h5",{id:"代码演示"},"代码演示"),Object(a.b)(o.a,{code:"\n    import Suplink from 'suplink-sdk';\n    Suplink.filePreview({\n        title:'预览',\n        url:'http://192.168.9.29:3000/zhizhi/static/resource/load/manage/notice/2019-10/1b634795-9c15-4616-a91e-52e5702cf94f.xlsx',\n    }).then(res=>{\n        let {code,msg,data} = res;\n        // do something\n    })\n",title:"基本用法",desc:"文件、图片、视频预览",mdxType:"Box"}),Object(a.b)("h4",{id:"supos-组态页面调用"},"supOS 组态页面调用"),Object(a.b)("p",null,"返回格式请参照 ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://confluence.bluetron.cn/pages/viewpage.action?pageId=31319111"}),"http://confluence.bluetron.cn/pages/viewpage.action?pageId=31319111")),Object(a.b)(o.a,{code:'\n    {/* 可编程组件 */}\n    import React from \'react\'\n    import {Button} from \'antd\'\n    export default class Component extends React.Component {\n      \n      onClick = ()=>{\n           window.zhizhiDispatchAppEvent(\'sl.multiMedia.preview\',{\n             title:"示例视频",\n             previewUrl:"http://v2v.cc/~j/theora_testsuite/320x240.ogg",\n             sourceFileUrl:"http://v2v.cc/~j/theora_testsuite/320x240.ogg"\n           })\n      }\n      render(){\n        return <>\n          <video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" ></video>\n          <Button onClick={this.onClick}>点击播放</Button>\n        </>\n      }\n    }\n',title:"基本用法",desc:"文件选择/拍照上传",mdxType:"Box"}),Object(a.b)("h6",{id:"返回值：-return"},"返回值： Return"),Object(a.b)(o.b,{data:[{property:"code",type:"string",desc:'"200"代表成功'},{property:"msg",type:"string",desc:"native 返回的 message"},{property:"data",type:"string",desc:"返回信息:null"}],mdxType:"Table"}))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/suplink/API/file/filePreview/index.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-suplink-api-file-file-preview-index-mdx-7aec2228d79832ed7417.js.map