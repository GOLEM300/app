(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{305:function(e,a,t){e.exports={dialogs:"Dialog_dialogs__30d5x",dialogsItem:"Dialog_dialogsItem__1l3tY",active:"Dialog_active__UP-OJ",messages:"Dialog_messages__1FjeZ",message:"Dialog_message__3XCT-"}},306:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(95),s=t(0),i=t.n(s),c=t(11),r=t(9),m=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(r.b)(m,{})((function(a){var t=a.isAuth,s=Object(n.a)(a,["isAuth"]);return t?i.a.createElement(e,s):i.a.createElement(c.a,{to:"/login"})}))}},311:function(e,a,t){"use strict";t.r(a);var n=t(4),s=t(115),i=t(0),c=t.n(i),r=t(305),m=t.n(r),l=t(16),o=function(e){var a="/dialogs/"+e.id;return c.a.createElement("div",{className:m.a.dialog+" "+m.a.active},c.a.createElement(l.b,{to:a},e.name))},u=function(e){return c.a.createElement("div",{className:m.a.dialog},e.message)},g=t(65),d=t(138),b=t(28),f=Object(g.a)(10),v=Object(d.a)({form:"newMessageText"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,Object(b.c)("enter your message","newMessageText",[g.b,f],b.a)),c.a.createElement("div",null,c.a.createElement("button",null,"Text")))})),E=(Object(g.a)(10),function(e){var a=e.messagesPage,t=a.dialogs.map((function(e){return c.a.createElement(o,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return c.a.createElement(u,{message:e.message,key:e.id})}));return c.a.createElement("div",{className:m.a.dialogs},c.a.createElement("div",{className:m.a.dialogsItem},t),c.a.createElement("div",{className:m.a.messages},n),c.a.createElement(v,{onSubmit:function(a){e.addMessage(a.newMessageText)}}))}),_=t(9),p=t(306),j=t(10);a.default=Object(j.compose)(Object(_.b)((function(e){return{messagesPage:e.messagesPage}}),Object(n.a)({},s.a)),p.a)(E)}}]);
//# sourceMappingURL=4.f834ed7a.chunk.js.map