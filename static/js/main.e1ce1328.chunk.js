(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(A,e,t){"use strict";t.d(e,"a",(function(){return c}));var n=t(38),r=t(5);var a={messages:[{id:1,message:"hilol"},{id:2,message:"h2"},{id:3,message:"h3"}],dialogs:[{id:1,name:"Valer"},{id:2,name:"Pam"}]};function c(A){return{type:"dialogs/ADD-MESSAGE",newMessageText:A}}e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"dialogs/ADD-MESSAGE":return Object(r.a)(Object(r.a)({},A),{},{messages:[].concat(Object(n.a)(A.messages),[{id:5,message:e.newMessageText}])});default:return A}}},128:function(A,e,t){"use strict";t.d(e,"d",(function(){return m})),t.d(e,"e",(function(){return C})),t.d(e,"c",(function(){return f})),t.d(e,"b",(function(){return w})),t.d(e,"f",(function(){return h}));var n=t(9),r=t.n(n),a=t(16),c=t(38),s=t(5),o=t(13),i=function(A,e,t,n){return A.map((function(A){return A[t]===e?Object(s.a)(Object(s.a)({},A),n):A}))},u={users:[],pagesSizes:10,totalCount:0,currentPage:1,isFetching:!1,followingProgress:[]};function l(A){return{type:"users/FOLLOW",userId:A}}function E(A){return{type:"users/UNFOLLOW",userId:A}}function m(A){return{type:"users/SET-CURRENT-PAGE",currentPage:A}}function p(A){return{type:"users/TOGGLE-IS-FETCHING",isFetching:A}}function C(A,e){return{type:"users/TOGGLE-IS-FOLLOWING",isFetching:A,userId:e}}var f=function(A,e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p(!0)),n(m(A)),t.next=4,o.b.getUsers(A,e);case 4:a=t.sent,n(p(!1)),n({type:"users/SET-USERS",users:a.items}),n({type:"users/SET-TOTAL-USERS-COUNT",totalCount:a.totalCount});case 8:case"end":return t.stop()}}),t)})));return function(A){return t.apply(this,arguments)}}()},M=function(){var A=Object(a.a)(r.a.mark((function A(e,t,n,a){return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e(C(!0,t)),A.next=3,n(t);case 3:0==A.sent.data.resultCode&&e(a(t)),e(C(!1,t));case 6:case"end":return A.stop()}}),A)})));return function(e,t,n,r){return A.apply(this,arguments)}}(),w=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=o.b.follow.bind(o.b),M(t,A,n,l);case 3:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},h=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=o.b.unfollow.bind(o.b),M(t,A,n,E);case 3:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()};e.a=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"users/FOLLOW":return Object(s.a)(Object(s.a)({},A),{},{users:i(A.users,e.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(s.a)(Object(s.a)({},A),{},{users:i(A.users,e.userId,"id",{followed:!1})});case"users/SET-USERS":return Object(s.a)(Object(s.a)({},A),{},{users:e.users});case"users/SET-CURRENT-PAGE":return Object(s.a)(Object(s.a)({},A),{},{currentPage:e.currentPage});case"users/SET-TOTAL-USERS-COUNT":return Object(s.a)(Object(s.a)({},A),{},{totalCount:e.totalCount});case"users/TOGGLE-IS-FETCHING":return Object(s.a)(Object(s.a)({},A),{},{isFetching:e.isFetching});case"users/TOGGLE-IS-FOLLOWING":return Object(s.a)(Object(s.a)({},A),{},{followingProgress:e.isFetching?[].concat(Object(c.a)(A.followingProgress),[e.userId]):A.followingProgress.filter((function(A){return A!=e.userId}))});default:return A}}},13:function(A,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return c}));var n=t(83),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"1b72a5ea-663b-4004-ae2d-398b341d2ec2"}}),a={getUsers:function(A,e){return r.get("users?page=".concat(A,"&count=").concat(e)).then((function(A){return A.data}))},follow:function(A){return r.post("follow/".concat(A))},unfollow:function(A){return r.delete("follow/".concat(A))},setAuthUserData:function(){return r.get("auth/me")},setAuthLogin:function(A,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:A,password:e,rememberMe:t})},setAuthLoginOut:function(){return r.delete("auth/login")},setUsersProfile:function(A){return c.setUsersProfile(A)}},c={setUsersProfile:function(A){return r.get("profile/".concat(A))},getStatus:function(A){return r.get("profile/status/".concat(A))},updateStatus:function(A){return r.put("profile/status",{status:A})}}},132:function(A,e){A.exports="data:image/gif;base64,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"},14:function(A,e,t){A.exports={nav:"Navbar_nav__3ycd5",item:"Navbar_item__1oBGm",activeLink:"Navbar_activeLink__1RF5n"}},158:function(A,e,t){A.exports=t(287)},241:function(A,e,t){},242:function(A,e,t){},284:function(A,e,t){},285:function(A,e,t){},286:function(A,e,t){},287:function(A,e,t){"use strict";t.r(e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(8),r=t(92),a=t(102),c=t(128),s=t(9),o=t.n(s),i=t(16),u=t(5),l=t(13),E=t(52),m={userId:null,email:null,login:null,isAuth:!1,password:null,rememberMe:!1,captcha:!1};function p(A,e,t,n){return{type:"auth/SET-USER-DATA",data:{userId:A,email:e,login:t,isAuth:n}}}var C=function(){return function(){var A=Object(i.a)(o.a.mark((function A(e){var t,n,r,a,c;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,l.b.setAuthUserData();case 2:0===(t=A.sent).data.resultCode&&(n=t.data.data,r=n.id,a=n.email,c=n.login,e(p(r,a,c,!0)));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},f=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"auth/SET-USER-DATA":return Object(u.a)(Object(u.a)({},A),e.data);case"auth/SET-LOGIN":return{isAuth:!0};default:return A}},M={init:!1};var w=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"app/SET-INIT":return Object(u.a)(Object(u.a)({},A),{},{init:!0});default:return A}},h=t(129),B=t(127),g=Object(n.c)({profilePage:r.b,messagesPage:a.b,usersPage:c.a,auth:f,form:B.a,app:w}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.d,L=Object(n.e)(g,b(Object(n.a)(h.a))),I=t(0),O=t.n(I),d=t(61),S=t.n(d),K=(t(241),t(48)),Q=t(49),J=t(51),k=t(50),v=(t(242),t(86)),y=t.n(v),D=t(20);var x=function(A){return O.a.createElement("header",{className:y.a.header},O.a.createElement("img",{src:"https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ee/91/eb/ee91ebc6-f7e6-2fa2-356e-d5930900691b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",alt:""}),O.a.createElement("div",{className:y.a.loginBlock},A.isAuth?O.a.createElement("div",null,A.login,":",O.a.createElement("button",{onClick:A.setAuthLoginOut},"Log out")):O.a.createElement(D.b,{to:"/login"},"Login")))},T=(t(83),t(19)),G=function(A){Object(J.a)(t,A);var e=Object(k.a)(t);function t(){return Object(K.a)(this,t),e.apply(this,arguments)}return Object(Q.a)(t,[{key:"render",value:function(){return O.a.createElement(x,this.props)}}]),t}(O.a.Component),R=Object(T.b)((function(A){return{isAuth:A.auth.isAuth,userId:A.auth.userId,email:A.auth.email,login:A.auth.login}}),{setAuthLoginOut:function(){return function(){var A=Object(i.a)(o.a.mark((function A(e){return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,l.b.setAuthLoginOut();case 2:0===A.sent.data.resultCode&&e(C(null,null,null,!1));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()}})(G),H=t(14),F=t.n(H);var N=function(){return O.a.createElement("nav",{className:F.a.nav},O.a.createElement("div",{className:F.a.item},O.a.createElement(D.b,{to:"/profile",activeClassName:F.a.activeLink},"Profile")),O.a.createElement("div",{className:F.a.item},O.a.createElement(D.b,{to:"/dialogs",activeClassName:F.a.activeLink},"Messages")),O.a.createElement("div",{className:F.a.item},O.a.createElement(D.b,{to:"/news",activeClassName:F.a.activeLink},"News")),O.a.createElement("div",{className:F.a.item},O.a.createElement(D.b,{to:"/music",activeClassName:F.a.activeLink},"Music")),O.a.createElement("div",{className:F.a.item},O.a.createElement(D.b,{to:"/settings",activeClassName:F.a.activeLink},"Settings")),O.a.createElement("div",{className:F.a.item},O.a.createElement(D.b,{to:"/users",activeClassName:F.a.activeLink},"Users")))},q=t(125),z=t(126),U=t(62),P=t(80),j=t(10),Y=t(32),W=t.n(Y),Z=Object(z.a)({form:"login"})((function(A){var e=A.handleSubmit,t=A.error;return O.a.createElement("form",{onSubmit:e},O.a.createElement("div",{className:""},O.a.createElement(q.a,{validate:[P.b],placeholder:"Email",name:"email",component:U.a})),O.a.createElement("div",{className:""},O.a.createElement(q.a,{validate:[P.b],placeholder:"Password",name:"password",component:U.a,type:"password"})),O.a.createElement("div",{className:""},O.a.createElement(q.a,{component:U.a,name:"rememberme",type:"checkbox"})," remember me"),t&&O.a.createElement("div",{className:W.a.formSummaryError},t),O.a.createElement("div",{className:""},O.a.createElement("button",null,"Login")))}));var X=Object(T.b)((function(A){return{isAuth:A.auth.isAuth}}),{setAuthLogin:function(A,e,t){return function(){var n=Object(i.a)(o.a.mark((function n(r){var a,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.b.setAuthLogin(A,e,t);case 2:0===(a=n.sent).data.resultCode?r(C()):(c=a.data.messages.length>0?a.data.messages[0]:"some error",r(Object(E.a)("login",{_error:c})));case 4:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}()}})((function(A){return A.isAuth?O.a.createElement(j.a,{to:"/profile"}):O.a.createElement("div",{className:""},O.a.createElement("h1",null,"login"),O.a.createElement(Z,{onSubmit:function(e){A.setAuthLogin(e.email,e.password,e.rememberMe)}}))}));t(284);var V=function(){return O.a.createElement("div",null,"News")};t(285);var _=function(){return O.a.createElement("div",null,"music")};t(286);var $=function(){return O.a.createElement("div",null,"settings")},AA=t(91),eA=O.a.lazy((function(){return t.e(4).then(t.bind(null,298))})),tA=O.a.lazy((function(){return t.e(5).then(t.bind(null,299))})),nA=O.a.lazy((function(){return t.e(3).then(t.bind(null,297))})),rA=function(A){Object(J.a)(t,A);var e=Object(k.a)(t);function t(){return Object(K.a)(this,t),e.apply(this,arguments)}return Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return this.props.init?O.a.createElement(D.a,null,O.a.createElement("div",{className:"app-wrapper"},O.a.createElement(R,null),O.a.createElement(N,null),O.a.createElement("div",{className:"app-wrapper-content"},O.a.createElement(O.a.Suspense,{fallback:O.a.createElement("div",null,"Loading...")},O.a.createElement("section",null,O.a.createElement(j.b,{path:"/login",render:function(){return O.a.createElement(X,null)}}),O.a.createElement(j.b,{path:"/profile/:userId?",render:function(){return O.a.createElement(nA,null)}}),O.a.createElement(j.b,{path:"/dialogs",render:function(){return O.a.createElement(tA,null)}}),O.a.createElement(j.b,{path:"/news",component:V}),O.a.createElement(j.b,{path:"/music",component:_}),O.a.createElement(j.b,{path:"/settings",component:$}),O.a.createElement(j.b,{path:"/users",render:function(){return O.a.createElement(eA,null)}})))))):O.a.createElement(AA.a,null)}}]),t}(O.a.Component),aA=Object(n.d)(Object(T.b)((function(A){return{init:A.app.init}}),{initApp:function(){return function(A){var e=A(C());Promise.all([e]).then((function(){A({type:"app/SET-INIT"})}))}}}))(rA);S.a.render(O.a.createElement(O.a.StrictMode,null,O.a.createElement(T.a,{store:L},O.a.createElement(aA,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))},32:function(A,e,t){A.exports={formControl:"FormControl_formControl__36Wkc",error:"FormControl_error__1Xw__",formSummaryError:"FormControl_formSummaryError__151iN"}},62:function(A,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return i}));var n=t(84),r=t(0),a=t.n(r),c=t(32),s=t.n(c),o=function(A){var e=A.input,t=A.meta,r=t.touched,c=t.error,o=Object(n.a)(A,["input","meta"]),i=r&&c;return a.a.createElement("div",{className:s.a.formControl+""+(i?s.a.error:"")},a.a.createElement("div",null,a.a.createElement("textarea",Object.assign({},e,o))),i&&a.a.createElement("span",null,c))},i=function(A){var e=A.input,t=A.meta,r=Object(n.a)(A,["input","meta"]),c=t.touched&&t.error;return a.a.createElement("div",{className:s.a.formControl+""+(c?s.a.error:"")},a.a.createElement("div",null,a.a.createElement("input",Object.assign({},e,r))),c&&a.a.createElement("span",null,t.error))}},80:function(A,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"a",(function(){return r}));var n=function(A){if(!A)return"field is required"},r=function(A){return function(e){if(e.length>A)return"max length is ".concat(A," symbols")}}},86:function(A,e,t){A.exports={header:"Header_header__1xMd4",loginBlock:"Header_loginBlock__22Y_6"}},91:function(A,e,t){"use strict";var n=t(0),r=t.n(n),a=t(132),c=t.n(a);e.a=function(){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:c.a}))}},92:function(A,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"d",(function(){return m})),t.d(e,"c",(function(){return p})),t.d(e,"e",(function(){return C}));var n=t(9),r=t.n(n),a=t(16),c=t(38),s=t(5),o=t(13);var i={posts:[{id:1,message:"hi66",likesCount:666},{id:2,message:"lol_f",likesCount:11}],profile:null,status:""};function u(A){return{type:"profile/ADD-POST",newPostText:A}}function l(A){return{type:"profile/SET-USER-PROFILE",profile:A}}function E(A){return{type:"profile/SET-STATUS",status:A}}var m=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.setUsersProfile(A);case 2:n=e.sent,t(l(n.data));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},p=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getStatus(A);case 2:n=e.sent,t(E(n.data));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},C=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.updateStatus(A);case 2:0===e.sent.data.resultCode&&t(E(A));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"profile/ADD-POST":return Object(s.a)(Object(s.a)({},A),{},{newPostText:"",posts:[].concat(Object(c.a)(A.posts),[{id:5,message:e.newPostText,likesCount:0}])});case"profile/UPDATE-NEW-POST-TEXT":return Object(s.a)(Object(s.a)({},A),{},{newPostText:e.newText});case"profile/SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},A),{},{profile:e.profile});case"profile/SET-STATUS":return Object(s.a)(Object(s.a)({},A),{},{status:e.status});case"profile/DELETE":return Object(s.a)(Object(s.a)({},A),{},{posts:A.posts.filter((function(A){return A.id!=e.postId}))});default:return A}}}},[[158,1,2]]]);
//# sourceMappingURL=main.e1ce1328.chunk.js.map