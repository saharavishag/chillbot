(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(9),i=n.n(r),o=n(153),s=n(24),l=n(12),u=(n(83),n(145)),d=function(){var e=Object(l.f)();Object(c.useEffect)((function(){return document.body.id="mainPageBody",function(){document.body.id=""}}),[]);return Object(a.jsxs)("div",{className:"mainPageContainer",children:[Object(a.jsx)("div",{className:"header"}),Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(u.a,{className:"sendButton",onClick:function(){null==localStorage.getItem("currentUser")?e.push({pathname:"/register"}):e.push({pathname:"/sendsong"})},children:"Send SongHug"}),Object(a.jsx)("div",{className:"love",children:"Spread The Love!"}),Object(a.jsx)("div",{className:"heart"})]})},j=n(19),b=n(149),m=n(48),h=n(68),O="#428C7F",g="#3B7E72",x="#2A3858",f="#F2F2F2",p="#121213",v=Object(h.a)({palette:{success:{main:O},primary:{main:f},secondary:{main:x},error:{main:m.a.A400}}}),y=Object(b.a)((function(e){return{title:{color:p,fontSize:50,marginTop:120}}})),N=function(e){var t=e.title,n=y();return Object(a.jsx)("p",{className:n.title,children:t})},S=n(152),C=n(53),k=n.n(C),w=n(66),A=n(16),T=n(154),B=n(4),L=(n(59),function(e){var t=e.title,n=e.resources;e.allowBlank;return Object(a.jsxs)("div",{className:"flexCol",children:[Object(a.jsx)("label",{className:"textboxLabel",children:t}),Object(a.jsx)("div",{className:"resourceContainer",children:n.map((function(t,n){return Object(a.jsx)("img",{src:t,className:Object(B.a)("resource",{selected:t==e.value}),onClick:function(n){return a=t,console.log("select:",a),void e.setValue(a);var a}},n)}))})]})}),F=["https://robotunion.eu/wp-content/uploads/2019/06/giphy-2.gif","https://i.pinimg.com/originals/3e/87/b5/3e87b5e21e8b25f967c545fedcdf9230.gif","https://c.tenor.com/lVlj3Z219BMAAAAj/sound-classical-music.gif","https://media.tenor.com/images/d215ecf4447232813f51cb9ce3246b72/tenor.gif","https://i.pinimg.com/originals/59/a5/f0/59a5f025e75fe29104bd9597f5f7b0f1.gif","https://i.pinimg.com/originals/e7/ab/1e/e7ab1ede1eea99b1de9a8f6eaf0582a9.gif","https://media.giphy.com/media/dJ936uvjIVO9ybI2ci/giphy.gif","https://media3.giphy.com/media/ZFo9Jf12rYxWwr1mFd/source.gif"],H={type:"TextBlock",text:"",wrap:!0,fontType:"Default",size:"Large",weight:"Bolder",color:"Accent",horizontalAlignment:"Center",isSubtle:!0},E={type:"Image",size:"Large",horizontalAlignment:"Center",url:"imageUrl",altText:"*Cute GIF*",isVisible:!0,selectAction:{type:"Action.OpenUrl",url:"Youtube link"}},I={type:"TextBlock",text:"",wrap:!0,horizontalAlignment:"Center",weight:"Bolder",size:"Medium",color:"Accent"},z={type:"TextBlock",text:"click on the picture for listen to the song!",wrap:!0,horizontalAlignment:"Center",isSubtle:!0},M={contentType:"application/vnd.microsoft.card.adaptive",content:{type:"AdaptiveCard",$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2",body:[H,E,I,z],selectAction:{type:"Action.OpenUrl",url:"Youtube link"}}},P=function(e,t,n,a){var c=Object(A.a)(Object(A.a)({},H),{},{text:e}),r=Object(A.a)(Object(A.a)({},E),{},{url:t,selectAction:Object(A.a)(Object(A.a)({},E.selectAction),{},{url:n})}),i=Object(A.a)(Object(A.a)({},I),{},{text:a});return Object(A.a)(Object(A.a)({},M),{},{content:Object(A.a)(Object(A.a)({},M.content),{},{selectAction:Object(A.a)(Object(A.a)({},E.selectAction),{},{url:n}),body:[c,r,i,z]})})};function Y(e,t){return{toPersonEmail:t,attachments:[e],text:"If you see this - i failed to create songHug for you"}}var U=n(151),D={NOT_VALID:"Email must be a cisco mail",EMPTY:"Enter an email"},V={NOT_VALID:"Link must be a Youtube link",EMPTY:"Enter a music link"},G="",J="NjFkZDcyNDctY2EzZC00ZWFlLTg2NGItZWJlOGY2YjlmNDZlN2E0NjJhODYtNzBj_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",W=n(157),Z=n(155),_=function(e){var t=Object(c.useState)(F[0]),n=Object(j.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),l=s[0],d=s[1],b=Object(c.useState)(e.email),m=Object(j.a)(b,2),h=m[0],O=m[1],g=Object(c.useState)(""),x=Object(j.a)(g,2),f=x[0],p=x[1],v=Object(c.useState)(""),y=Object(j.a)(v,2),N=(y[0],y[1]),S=Object(c.useState)(!1),C=Object(j.a)(S,2),H=C[0],E=C[1],I=Object(c.useState)(localStorage.getItem("currentUser")),z=Object(j.a)(I,1)[0],M=Object(c.useState)(G),_=Object(j.a)(M,2),R=_[0],q=_[1],$=R!==G,K=Object(c.useState)(G),Q=Object(j.a)(K,2),X=Q[0],ee=Q[1],te=X!==G,ne=Object(c.useState)(!1),ae=Object(j.a)(ne,2),ce=ae[0],re=ae[1],ie=function(e){return Object(a.jsx)(Z.a,Object(A.a)(Object(A.a)({elevation:6,variant:"filled"},e),{},{className:"alert"}))},oe=function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,a,c,i,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch("https://webexapis.com/v1/people?email=".concat(h),{method:"GET",headers:{Authorization:"Bearer ".concat(J),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return h}));case 3:return t=e.sent,e.next=6,fetch("https://webexapis.com/v1/people?email=".concat(z),{method:"GET",headers:{Authorization:"Bearer ".concat(J),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return z}));case 6:if(n=e.sent,r&&h&&l){e.next=11;break}return N("Some field is missing!"),E(!1),e.abrupt("return");case 11:return a="https://shakedzrihen.github.io/chillbot/#"+"/songHug?receiver=".concat(h,"&displayLink=").concat(l,"&sender=").concat(n,"&senderMail=").concat(z),console.log("formattedLink",a),c="Hi ".concat(t,"!"),i=P(c,r,a,f),o=Y(i,h),e.next=18,fetch("https://webexapis.com/v1/messages",{method:"POST",headers:{Authorization:"Bearer ".concat(J),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){return console.log(e)})).then((function(){return E(!1)}));case 18:re(!0);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"cardFromContainer",children:[Object(a.jsxs)("div",{className:"flex spaceBetween",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"Send a SongHug for (email)"}),Object(a.jsx)(T.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email ".concat($?"error":""),value:h,onChange:function(e){var t=e.target.value;return O(t),t&&t.trim().length>0?t.indexOf("cisco.com")<=0?(q(D.NOT_VALID),!1):(q(G),!0):(q(D.EMPTY),!1)},helperText:R,error:$})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"youtubeLink",className:"textboxLabel",children:"Paste YouTube Link here"}),Object(a.jsx)(T.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox ".concat(te?"error":""),multiline:!0,rows:1,value:l,onChange:function(e){var t=e.target.value;return d(t),t&&t.trim().length>0?t.indexOf("youtube.com/watch")<=0?(ee(V.NOT_VALID),!1):(ee(G),!0):(ee(V.EMPTY),!1)},helperText:X,error:te})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"message",className:"textboxLabel",children:"Add Message"}),Object(a.jsx)(T.a,{multiline:!0,id:"dscription",variant:"outlined",className:"textbox",value:f,onChange:function(e){var t=e.target.value;t.length<=65&&p(t)},rows:4})]})]}),Object(a.jsx)("div",{className:"resourcePickerContainer",children:Object(a.jsx)(L,{title:"Choose a GIF",resources:F,allowBlank:!1,value:r,setValue:i})})]}),H?Object(a.jsx)(U.a,{disableShrink:!0,className:"spinner"}):Object(a.jsx)(u.a,{className:Object(B.a)("sendButton"),onClick:oe,children:"Send SongHug"}),Object(a.jsx)(W.a,{open:ce,autoHideDuration:2e3,onClose:function(){return re(!1)},children:Object(a.jsx)(ie,{onClose:function(){return re(!1)},severity:"success",children:"SongHug is on his way!"})})]})},R=n(40),q=Object(b.a)((function(e){var t;return t={pageTitle:{color:O,margin:"20px auto",textAlign:"center"},title:{flexGrow:1,color:x},container:{margin:"3% auto"},multilineColor:{color:x},card:{minWidth:400,minHeight:620,textAlign:"center"},contentContainer:{display:"flex",flexFlow:"row",justifyContent:"space-between"},cardContainer:{},media:{height:400,width:400},cardText:{color:O}},Object(R.a)(t,"cardContainer",{border:"15px solid transparent",borderImage:"url(https://www.kudoboard.com/images/lines-background.png) 100 repeat"}),Object(R.a)(t,"sendButton",{margin:"16px auto",width:"100%",backgroundColor:O,color:f,"&:hover":{backgroundColor:g,color:f}}),t})),$=(n(90),function(){var e=new URLSearchParams(Object(l.g)().search),t=q(),n=Object(l.f)(),r=Object(c.useState)(localStorage.getItem("currentUser")),i=Object(j.a)(r,1)[0];if(console.log("currentUser",i),i)return Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"sendSongFrame",children:Object(a.jsxs)(S.a,{className:Object(B.a)(t.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(N,{title:"Make Someone Happy!"}),Object(a.jsx)("div",{className:t.contentContainer,children:Object(a.jsx)(_,{email:e.get("email")})})]})});n.push({pathname:"/register"})}),K=(n(91),n(67)),Q=n.n(K),X=(n(109),function(e){var t=function(t){console.log(t),localStorage.setItem("currentUser",e.receiver)};return Object(a.jsxs)("div",{className:"songHugContainer",children:[Object(a.jsx)(Q.a,{url:e.displayLink,config:{youtube:{playerVars:{autoplay:1}}},playing:!0}),Object(a.jsxs)("div",{className:"description",children:[e.sender," sent you a ",Object(a.jsx)("span",{className:"songhug",children:"SongHug!"})]}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(s.b,{to:"/sendSong?email=".concat(e.senderMail),style:{marginBottom:"40px"},children:Object(a.jsxs)("p",{className:"sendBack",onClick:function(){return t(e.sender)},children:["Send ",e.sender," a SongHug Back ",">>"]})}),Object(a.jsx)(s.b,{to:"/sendSong",children:Object(a.jsx)(u.a,{className:"sendButton",onClick:function(){return t(e.sender)},children:"Send SongHug"})})]})]})}),ee=function(){var e=new URLSearchParams(Object(l.g)().search),t=q();return Object(c.useEffect)((function(){return document.body.id="songHugBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"songHugFrame",children:Object(a.jsx)(S.a,{className:Object(B.a)(t.container,"songHugContainer"),maxWidth:"xl",children:Object(a.jsx)(X,{receiver:e.get("receiver"),displayLink:e.get("displayLink"),sender:e.get("sender"),senderMail:e.get("senderMail")})})})},te=(n(110),function(){var e=q(),t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],i=n[1],o=Object(l.f)();Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]);return Object(a.jsx)("div",{className:"registerContainer",children:Object(a.jsxs)(S.a,{className:Object(B.a)(e.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(N,{title:"Nice to Meet ya!"}),Object(a.jsx)("p",{className:"subtitle",children:"Before we start let\u2019s get to know you a little bit"}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"what is your cisco mail?"}),Object(a.jsx)(T.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsx)(u.a,{className:Object(B.a)("sendButton"),onClick:function(e){localStorage.setItem("currentUser",r),o.push({pathname:"/sendsong"})},children:"Continue"})]})})}),ne=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/sendsong",children:Object(a.jsx)($,{})}),Object(a.jsx)(l.a,{path:"/songhug",children:Object(a.jsx)(ee,{})}),Object(a.jsx)(l.a,{path:"/register",children:Object(a.jsx)(te,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(d,{})})]})})};n(111);i.a.render(Object(a.jsx)(o.a,{theme:v,children:Object(a.jsx)(ne,{})}),document.querySelector("#root"))},59:function(e,t,n){},83:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.16ef985a.chunk.js.map