(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);a(67),a(92);var n=a(0),i=a.n(n),c=a(39),o=a.n(c),r=a(6),s=a.n(r),l=a(41),u=a(8),d=a(9),m=a(11),p=a(10),h=a(12),f=a(40),b=a(1),v=(a(114),a(64),a(115),a(23)),E=a.n(v),y=a(16),k=a.n(y),w=(Object(b.platform)(),a(116),a(117),Object(b.platform)()),g=!1,j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).menuClick=function(){g=!g;var e=document.getElementsByClassName("menu"),t=document.getElementsByClassName("overlow");g?(e[0].style.left="0",t[0].style.visibility="visible",t[0].style.opacity="1"):(e[0].style.left="-234px",t[0].style.visibility="hidden",t[0].style.opacity="0")},a.state={},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){"android"===w&&(document.getElementsByClassName("menu")[0].style.paddingTop="56px"),"ios"===w&&console.log("de ios")}},{key:"componentWillUpdate",value:function(){this.menuClick()}},{key:"render",value:function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"overlow",onClick:this.menuClick}),i.a.createElement("div",{className:"menu"},this.props.menuItem))}}]),t}(i.a.Component),O=a(25),C=a.n(O),B=(a(118),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#87C2E7"})}},{key:"render",value:function(){return i.a.createElement(b.Panel,{id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,null,i.a.createElement(C.a,{onClick:this.props.chMenu}))},i.a.createElement(b.PanelHeaderContent,null,i.a.createElement("div",{className:"header-title"},i.a.createElement(b.Avatar,{size:40,src:this.props.fetchedUser.photo_200}),this.props.fetchedUser.first_name))),i.a.createElement("div",null,i.a.createElement("iframe",{src:"https://cosuv.ru/app/3868",style:{width:"100%",height:"600px",position:"relative"},frameBorder:"0"})))}}]),t}(i.a.Component)),P=Object(b.platform)(),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#87C2E7"})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:function(){e.props.goBack()},"data-to":"home"},"ios"===P?i.a.createElement(E.a,null):i.a.createElement(k.a,null))},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"))}}]),t}(i.a.Component),S=Object(b.platform)(),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){s.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#87C2E7"})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.Panel,{id:this.props.id},i.a.createElement(b.PanelHeader,{left:i.a.createElement(b.HeaderButton,{onClick:function(){e.props.goBack()}},"ios"===S?i.a.createElement(E.a,null):i.a.createElement(k.a,null))},"Panel2"),i.a.createElement("div",{className:"vict-main"},"\u0432\u0430\u0448 \u043a\u043e\u043d\u0442\u0435\u043d\u0442"))}}]),t}(i.a.Component),U=(a(119),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).chMenu=function(){a.setState({showMenu:!a.state.showMenu})},a.goBack=function(){window.history.back()},a.goForward=function(e){var t=Object(l.a)(a.state.history);t.push(e),"main"===a.state.activePanel&&s.a.send("VKWebAppEnableSwipeBack"),window.history.pushState({},"",e),a.setState({history:t,activePanel:e})},a.state={activePanel:"main",history:["main"],loadApp:!1,fetchedUser:null,showMenu:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",function(t){console.log("\u043d\u0430\u0437\u0430\u0434");var a=Object(l.a)(e.state.history);a.pop();var n=a[a.length-1];"main"===n&&s.a.send("VKWebAppDisableSwipeBack"),e.setState({history:a,activePanel:n})},!1),f.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":setTimeout(function(){e.setState({fetchedUser:t.detail.data,loadApp:!0})},500);break;default:console.log(t.detail.type)}}),s.a.subscribe(function(e){e.detail.type,console.log("qwe ",e.detail.type)}),f.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var e=this;if(this.state.loadApp){var t=i.a.createElement("div",null,i.a.createElement("div",{className:"menu-item",onClick:function(){e.chMenu(),e.goForward("Panel1")}},i.a.createElement("b",null,"Panel1")),i.a.createElement("div",{className:"menu-item",onClick:function(){e.chMenu(),e.goForward("Panel2")}},i.a.createElement("b",null,"Panel2")));return i.a.createElement(b.ConfigProvider,null,i.a.createElement(j,{menuItem:t,showMenu:this.state.showMenu}),i.a.createElement(b.View,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack},i.a.createElement(B,{fetchedUser:this.state.fetchedUser,id:"main",goBack:this.goBack,goForward:this.goForward,chMenu:this.chMenu}),i.a.createElement(M,{fetchedUser:this.state.fetchedUser,id:"Panel1",goBack:this.goBack,goForward:this.goForward,chMenu:this.chMenu}),i.a.createElement(_,{fetchedUser:this.state.fetchedUser,id:"Panel2",goBack:this.goBack,goForward:this.goForward,chMenu:this.chMenu})))}return i.a.createElement("div",null,"Loading ...")}}]),t}(i.a.Component));s.a.send("VKWebAppInit",{}),o.a.render(i.a.createElement(U,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},66:function(e,t,a){e.exports=a(120)}},[[66,1,2]]]);
//# sourceMappingURL=main.2b0c940f.chunk.js.map