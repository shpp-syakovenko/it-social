(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{307:function(e,a,t){e.exports={dialogs:"dialogs_dialogs__3BpRc",dialogsItem:"dialogs_dialogsItem__2eso7",dialog:"dialogs_dialog__3JFFj",active:"dialogs_active__1Vu4q",messagesItem:"dialogs_messagesItem__2vRI1",message:"dialogs_message__1tf-U",formAddMessage:"dialogs_formAddMessage__bscI-"}},310:function(e,a,t){"use strict";t.r(a);var s=t(29),n=t(0),i=t.n(n),o=t(307),r=t.n(o),m=t(13),c=function(e){var a=e.name,t=e.id;return i.a.createElement("div",{className:r.a.dialog},i.a.createElement(m.b,{to:"/dialogs/"+t},a))},d=function(e){var a=e.text;return i.a.createElement("div",{className:r.a.message},a)},l=t(42),u=t(106),g=t(73),f=t(74),_=Object(f.a)(30),b=Object(u.a)({form:"dialogsAddMessageForm"})(function(e){var a=e.handleSubmit;return i.a.createElement("form",{className:r.a.formAddMessage,onSubmit:a},i.a.createElement("div",{className:r.a.messageText},i.a.createElement(l.a,{component:g.b,placeholder:"Enter text...",name:"messageText",validate:[f.b,_]})),i.a.createElement("div",{className:r.a.messageAdd},i.a.createElement("button",null,"Send")))}),E=function(e){var a=e.dialogs,t=e.addMessageElement;return i.a.createElement("div",{className:r.a.dialogs},i.a.createElement("div",{className:r.a.dialogsItem},a.dialogsData.map(function(e){return i.a.createElement(c,{key:e.id,id:e.id,name:e.name})})),i.a.createElement("div",{className:r.a.messagesItem},a.messagesData.map(function(e){return i.a.createElement(d,{key:e.id,id:e.id,text:e.message})}),i.a.createElement(b,{onSubmit:function(e){t(e.messageText)}})))},p=t(116),v=t(39),h=t(40),j=t(43),O=t(41),A=t(44),I=t(32),N=function(e){return{isAuth:e.auth.isAuth}},x=Object(s.a)(function(e){return{dialogs:e.dialogs}},function(e){return{addMessageElement:function(a){e(Object(p.a)(a))}}})(E);a.default=function(e){var a=function(a){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(A.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(I.a,{to:"login"})}}]),t}(i.a.Component);return Object(s.a)(N)(a)}(x)}}]);
//# sourceMappingURL=4.62d895bb.chunk.js.map