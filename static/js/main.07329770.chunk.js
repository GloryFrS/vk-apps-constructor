(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);a(67),a(92);var n=a(0),o=a.n(n),i=a(39),r=a.n(i),c=a(6),s=a.n(c),l=a(41),u=a(8),d=a(9),p=a(11),h=a(10),f=a(12),b=a(40),m=a(1),w=(a(114),a(64),a(115),a(23)),v=a.n(w),k=a(16),g=a.n(k),O=(Object(m.platform)(),a(116),a(117),Object(m.platform)()),y=!1,E=(o.a.Component,a(118),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleOnclick=function(){},a.state={},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#87C2E7"}),window.addEventListener("message",function(e){if(e.data){var t;try{t=JSON.parse(e.data)}catch(a){return}"cosuvOrder"===t.type&&(window.location="https://www.robokassa.ru/ru/")}})}},{key:"render",value:function(){return o.a.createElement(m.Panel,{id:this.props.id},o.a.createElement("div",null,o.a.createElement("iframe",{src:"https://cosuv.ru/app/3868",style:{width:"100%",height:"600px",position:"relative"},frameBorder:"0"})))}}]),t}(o.a.Component)),j=(a(38),Object(m.platform)()),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#87C2E7"})}},{key:"render",value:function(){var e=this;return o.a.createElement(m.Panel,{id:this.props.id},o.a.createElement(m.PanelHeader,{left:o.a.createElement(m.HeaderButton,{onClick:function(){e.props.goBack()},"data-to":"home"},"ios"===j?o.a.createElement(v.a,null):o.a.createElement(g.a,null))},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"))}}]),t}(o.a.Component),P=Object(m.platform)(),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#87C2E7"})}},{key:"render",value:function(){var e=this;return o.a.createElement(m.Panel,{id:this.props.id},o.a.createElement(m.PanelHeader,{left:o.a.createElement(m.HeaderButton,{onClick:function(){e.props.goBack()}},"ios"===P?o.a.createElement(v.a,null):o.a.createElement(g.a,null))},"Panel2"),o.a.createElement("div",{className:"vict-main"},"\u0432\u0430\u0448 \u043a\u043e\u043d\u0442\u0435\u043d\u0442"))}}]),t}(o.a.Component),M=(a(119),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).chMenu=function(){a.setState({showMenu:!a.state.showMenu})},a.goBack=function(){window.history.back()},a.goForward=function(e){var t=Object(l.a)(a.state.history);t.push(e),"main"===a.state.activePanel&&s.a.send("VKWebAppEnableSwipeBack"),window.history.pushState({},"",e),a.setState({history:t,activePanel:e})},a.state={activePanel:"main",history:["main"],loadApp:!1,fetchedUser:null,showMenu:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",function(t){console.log("\u043d\u0430\u0437\u0430\u0434");var a=Object(l.a)(e.state.history);a.pop();var n=a[a.length-1];"main"===n&&s.a.send("VKWebAppDisableSwipeBack"),e.setState({history:a,activePanel:n})},!1),b.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":setTimeout(function(){e.setState({fetchedUser:t.detail.data,loadApp:!0})},500);break;default:console.log(t.detail.type)}}),s.a.subscribe(function(e){e.detail.type,console.log("qwe ",e.detail.type)}),b.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return this.state.loadApp?o.a.createElement(m.ConfigProvider,null,o.a.createElement(m.View,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack},o.a.createElement(E,{fetchedUser:this.state.fetchedUser,id:"main",goBack:this.goBack,goForward:this.goForward}),o.a.createElement(B,{fetchedUser:this.state.fetchedUser,id:"Panel1",goBack:this.goBack,goForward:this.goForward,chMenu:this.chMenu}),o.a.createElement(S,{fetchedUser:this.state.fetchedUser,id:"Panel2",goBack:this.goBack,goForward:this.goForward,chMenu:this.chMenu}))):o.a.createElement("div",null,"Loading ...")}}]),t}(o.a.Component));s.a.send("VKWebAppInit",{}),r.a.render(o.a.createElement(M,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},66:function(e,t,a){e.exports=a(120)}},[[66,1,2]]]);
//# sourceMappingURL=main.07329770.chunk.js.map