(this["webpackJsonphomework3-app"]=this["webpackJsonphomework3-app"]||[]).push([[0],{101:function(e,t,n){e.exports=n.p+"static/media/lunbotu2.347fdcd2.jpg"},102:function(e,t,n){e.exports=n.p+"static/media/lunbotu3.93290ec5.jpg"},103:function(e,t,n){e.exports=n.p+"static/media/lunbotu5.f3572b07.jpg"},104:function(e,t,n){e.exports=n.p+"static/media/lunbotu6.7ea9c5d2.jpg"},105:function(e,t,n){e.exports=n.p+"static/media/lunbotu7.5aec6f24.jpg"},106:function(e,t,n){e.exports=n.p+"static/media/lunbotu8.74dde724.jpg"},109:function(e,t,n){e.exports=n(190)},114:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c),r=(n(114),n(40)),l=n(11),s=n(57),u=n(14),p=n(15),m=n(17),d=n(16),h=n(23),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(p.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(h.c,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},o.a.createElement(h.c.Item,(e={title:"\u9996\u9875",key:"home",icon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selected:"/home"===n},Object(s.a)(e,"selected","/"===n),Object(s.a)(e,"onPress",(function(){t.props.history.push("/home")})),Object(s.a)(e,"data-seed","logId"),e)),o.a.createElement(h.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shoucang",onclick:function(){}}),title:"\u6536\u85cf",key:"collection",onPress:function(){null===localStorage.getItem("userinfo")?t.props.history.push("./login"):t.props.history.push("/showcang")},"data-seed":"logId1"}),o.a.createElement(h.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),title:"\u8ba2\u5355\u5217\u8868",key:"orderlist",selected:"/orderlist"===n,onPress:function(){t.props.history.push("/orderlist")},"data-seed":"logId2"}),o.a.createElement(h.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-wodetaobao"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-wodetaobao"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"mytaobao",selected:"/mytaobao"===n,onPress:function(){t.props.history.push("/mytaobao")},"data-seed":"logId3"})))}}]),n}(o.a.Component),b=Object(l.f)(f),g=(n(186),n(101)),E=n.n(g),y=n(102),v=n.n(y),j=n(103),O=n.n(j),w=n(104),k=n.n(w),x=n(105),C=n.n(x),N=n(106),T=n.n(N),I=(n(187),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{background:"#ff852a",height:"60px",width:"100%"}},o.a.createElement("i",{className:"iconfont icon-taobao",style:{display:"inline-block",float:"left",marginTop:"10px"}}),o.a.createElement("button",{onClick:function(){return e.props.history.push("/searchbarexample")},style:{width:"330px",height:"40px",display:"inline-block",background:"#ff4e22",color:"white",marginTop:"13px",border:"0px #ff4e22 solid"}},o.a.createElement("i",{className:"iconfont icon-search"}),"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa"))}}]),n}(o.a.Component)),S=n(31),X=function(){return function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"Good",datalist:t.data})}))}},B=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(X())}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.datalist.map((function(t){return o.a.createElement("div",{onClick:function(){localStorage.setItem("key",t.id),e.props.history.push("/Detail")}},o.a.createElement("img",{src:t.img,style:{width:"100%"},alt:""}),o.a.createElement("p",null,t.title))})))}}]),n}(o.a.Component),R=Object(S.b)((function(e){return{datalist:e.homereducer.datalist}}))(B),D=(E.a,v.a,O.a,k.a,C.a,T.a,function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:["1","2","3","4","5","6"],imgHeight:176},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg","https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg","https://gw.alicdn.com/imgextra/i4/45/O1CN01rNyxVF1CCeS74h08l_!!45-0-ppp-picassogw.jpg","https://gw.alicdn.com/imgextra/i3/31/O1CN01L9bDGG1C6EuRtgbuT_!!31-0-lubanu.jpg","7https://gw.alicdn.com/imgextra/i2/121/O1CN01dNHOp91ClSYRigyke_!!121-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i2/181/O1CN019P74nf1DCwJtEAzR3_!!181-0-ppp-picassogw.jpg"]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement(h.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return o.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},o.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))}}]),n}(o.a.Component)),L=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"side"},o.a.createElement(I,{history:this.props.history}),o.a.createElement(D,null),o.a.createElement(R,{history:this.props.history}),o.a.createElement(b,null))}}]),n}(o.a.Component),G=function(){return o.a.createElement("div",null,"shoucang")},_=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(X())}},{key:"render",value:function(){var e=this,t=this.props.datalist.map((function(e){var t=localStorage.getItem("key");if(e.id==t)return o.a.createElement("img",{src:e.img,style:{width:"100%"},alt:""})}));return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont icon-fanhui",onClick:function(){return e.props.history.goBack()},style:{position:"absolute",left:"15px"}}),t),o.a.createElement("div",{style:{marginTop:"230px"}},o.a.createElement("button",{style:{background:"#f5f4f9",border:"0px white solid",paddingRight:"10px"}},o.a.createElement("i",{className:"iconfont icon-dianpu"}),o.a.createElement("p",{style:{marginTop:"4px"}},"\u5e97\u94fa")),o.a.createElement("button",{style:{background:"#f5f4f9",border:"0px white solid",paddingRight:"10px"}},o.a.createElement("i",{className:"iconfont icon-taobaokefu-01"}),o.a.createElement("p",{style:{marginTop:"4px"}},"\u5ba2\u670d")),o.a.createElement("button",{style:{background:"#f5f4f9",border:"0px white solid",paddingRight:"10px",paddingLeft:"10px"}},o.a.createElement("i",{className:"iconfont icon-shoucang"}),o.a.createElement("p",{style:{marginTop:"4px"}},"\u6536\u85cf")),o.a.createElement("button",{style:{width:"100px",height:"40px",border:"0px white solid",background:"#ff9705",borderTopLeftRadius:"17px",borderBottomLeftRadius:"17px",color:"white",marginLeft:"30px",marginTop:"4px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{width:"100px",height:"40px",border:"0px white solid",background:"#ff5a08",borderTopRightRadius:"17px",borderBottomRightRadius:"17px",color:"white"}},"\u7acb\u5373\u8d2d\u4e70")))}}]),n}(o.a.Component),F=Object(S.b)((function(e){return{datalist:e.homereducer.datalist}}))(_),P=function(){return o.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868",o.a.createElement(b,null))},A=function(){return o.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d",o.a.createElement(b,null))},H=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:"\u5b9d\u8d1d"},e.onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.b,{value:this.state.value,placeholder:"Search",onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){e.props.history.goBack()},showCancelButton:!0,onChange:this.onChange}))}}]),n}(o.a.Component),M=n(35),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userinfo:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{userinfo:t.userinfo};default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{datalist:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Good":return{datalist:t.datalist};default:return e}},V=n(83),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{datalist:[]},t=arguments.length>1?arguments[1]:void 0;if("DEL_TODO"==t.type)return[].concat(Object(V.a)(e),[t.value]);if("DEL_TODO"==t.type){var n=Object(V.a)(e);return n.splice(t.index,1),n}return e},K=Object(M.c)({loginreducer:J,homereducer:z,shoucangreducer:q});var W=Object(M.e)(K,Object(M.d)(Object(M.a)((function(e){var t=e.getState;return function(e){return function(n){console.log("will dispatch",n);var a=e(n);return console.log("state after dispatch",t()),a}}}),(function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return console.log("thunk"),"function"===typeof a?a(t,n):e(a)}}})))),Y=n(108),Q=Object(S.b)((function(e){return{userinfo:e.loginreducer.userinfo}}))((function(e){var t=Object(a.useState)(!1),n=Object(Y.a)(t,2),c=(n[0],n[1],function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",userinfo:t.data.name})}))}))});return o.a.createElement("div",null,e.userinfo?o.a.createElement("div",null,e.userinfo,o.a.createElement("button",{onClick:function(){e.history.goBack()}},"\u9000\u51fa")):o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"\u7528\u6237\u540d"}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",placeholder:"\u5bc6\u7801"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){c(),localStorage.setItem("userinfo","\u5f20\u4e09")}},"\u767b\u5f55")))})),U=function(){return o.a.createElement(S.a,{store:W},o.a.createElement(r.a,null,o.a.createElement(l.b,{path:"/home",component:L}),o.a.createElement(l.b,{path:"/Showcang",component:G}),o.a.createElement(l.b,{path:"/Login",component:Q}),o.a.createElement(l.b,{path:"/Detail",component:F}),o.a.createElement(l.b,{path:"/orderlist",component:P}),o.a.createElement(l.b,{path:"/mytaobao",component:A}),o.a.createElement(l.b,{path:"/searchBarExample",component:H}),o.a.createElement(l.b,{render:function(){return o.a.createElement(l.a,{to:"/home"})}})))};n(189);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.015cede7.chunk.js.map