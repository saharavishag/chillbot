(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(9),i=n.n(r),o=n(153),s=n(24),l=n(12),u=(n(83),n(37)),d=n(146),j=n(48),b=n(68),m="#428C7F",h="#3B7E72",O="#2A3858",g="#F2F2F2",x="#121213",f=Object(b.a)({palette:{success:{main:m},primary:{main:g},secondary:{main:O},error:{main:j.a.A400}}}),p=Object(d.a)((function(e){var t;return t={pageTitle:{color:m,margin:"20px auto",textAlign:"center"},title:{flexGrow:1,color:O},container:{margin:"3% auto"},multilineColor:{color:O},card:{minWidth:400,minHeight:620,textAlign:"center"},contentContainer:{display:"flex",flexFlow:"row",justifyContent:"space-between"},cardContainer:{},media:{height:400,width:400},cardText:{color:m}},Object(u.a)(t,"cardContainer",{border:"15px solid transparent",borderImage:"url(https://www.kudoboard.com/images/lines-background.png) 100 repeat"}),Object(u.a)(t,"sendButton",{margin:"16px auto",width:"100%",backgroundColor:m,color:g,"&:hover":{backgroundColor:h,color:g}}),t})),v=n(148),y=(n.p,function(){p();var e=Object(l.f)();Object(c.useEffect)((function(){return document.body.id="mainPageBody",function(){document.body.id=""}}),[]);return Object(a.jsxs)("div",{className:"mainPageContainer",children:[Object(a.jsx)("div",{className:"header"}),Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(v.a,{className:"sendButton",onClick:function(){null==localStorage.getItem("currentUser")?e.push({pathname:"/register"}):e.push({pathname:"/sendsong"})},children:"Send SongHug"}),Object(a.jsx)("div",{className:"love",children:"Spread The Love!"}),Object(a.jsx)("div",{className:"heart"})]})}),N=n(18),S=Object(d.a)((function(e){return{title:{color:x,fontSize:50,marginTop:120}}})),C=function(e){var t=e.title,n=S();return Object(a.jsx)("p",{className:n.title,children:t})},k=n(152),w=n(53),A=n.n(w),T=n(66),B=n(19),L=n(154),H=n(4),E=(n(59),function(e){var t=e.title,n=e.resources;e.allowBlank;return Object(a.jsxs)("div",{className:"flexCol",children:[Object(a.jsx)("label",{className:"textboxLabel",children:t}),Object(a.jsx)("div",{className:"resourceContainer",children:n.map((function(t,n){return Object(a.jsx)("img",{src:t,className:Object(H.a)("resource",{selected:t==e.value}),onClick:function(n){return a=t,console.log("select:",a),void e.setValue(a);var a}},n)}))})]})}),F=["https://robotunion.eu/wp-content/uploads/2019/06/giphy-2.gif","https://i.pinimg.com/originals/3e/87/b5/3e87b5e21e8b25f967c545fedcdf9230.gif","https://c.tenor.com/lVlj3Z219BMAAAAj/sound-classical-music.gif","https://media.tenor.com/images/d215ecf4447232813f51cb9ce3246b72/tenor.gif","https://i.pinimg.com/originals/59/a5/f0/59a5f025e75fe29104bd9597f5f7b0f1.gif","https://i.pinimg.com/originals/e7/ab/1e/e7ab1ede1eea99b1de9a8f6eaf0582a9.gif","https://media.giphy.com/media/dJ936uvjIVO9ybI2ci/giphy.gif","https://media3.giphy.com/media/ZFo9Jf12rYxWwr1mFd/source.gif"],I={type:"TextBlock",text:"",wrap:!0,fontType:"Default",size:"ExtraLarge",weight:"Bolder",color:"Accent",horizontalAlignment:"Center",isSubtle:!0},z={type:"Image",size:"Large",horizontalAlignment:"Center",url:"imageUrl",isVisible:!0,selectAction:{type:"Action.OpenUrl",url:"Youtube link"}},M={type:"TextBlock",text:"",wrap:!0,horizontalAlignment:"Center",weight:"Bolder",size:"Medium",color:"Accent"},P={type:"TextBlock",text:"click on the picture for listen to the song!",wrap:!0,horizontalAlignment:"Center",isSubtle:!0},Y={contentType:"application/vnd.microsoft.card.adaptive",content:{type:"AdaptiveCard",$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2",body:[I,z,M,P]}},D=function(e,t,n,a){var c=Object(B.a)(Object(B.a)({},I),{},{text:e}),r=Object(B.a)(Object(B.a)({},z),{},{url:t,selectAction:Object(B.a)(Object(B.a)({},z.selectAction),{},{url:n})}),i=Object(B.a)(Object(B.a)({},M),{},{text:a});return Object(B.a)(Object(B.a)({},Y),{},{content:Object(B.a)(Object(B.a)({},Y.content),{},{body:[c,r,i,P]})})};function U(e,t){return{toPersonEmail:t,attachments:[e],text:"If you see this - i failed to create songHug for you"}}var V=n(151),J={NOT_VALID:"Email must be a cisco mail",EMPTY:"Enter an email"},W={NOT_VALID:"Link must be a Youtube link",EMPTY:"Enter a music link"},Z="",G="NjFkZDcyNDctY2EzZC00ZWFlLTg2NGItZWJlOGY2YjlmNDZlN2E0NjJhODYtNzBj_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",_=n(157),R=n(155),q=function(e){var t=Object(c.useState)(F[0]),n=Object(N.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(""),s=Object(N.a)(o,2),l=s[0],u=s[1],d=Object(c.useState)(e.email),j=Object(N.a)(d,2),b=j[0],m=j[1],h=Object(c.useState)(""),O=Object(N.a)(h,2),g=O[0],x=O[1],f=Object(c.useState)(""),p=Object(N.a)(f,2),y=(p[0],p[1]),S=Object(c.useState)(!1),C=Object(N.a)(S,2),k=C[0],w=C[1],I=Object(c.useState)(localStorage.getItem("currentUser")),z=Object(N.a)(I,1)[0],M=Object(c.useState)(Z),P=Object(N.a)(M,2),Y=P[0],q=P[1],$=Y!==Z,K=Object(c.useState)(Z),Q=Object(N.a)(K,2),X=Q[0],ee=Q[1],te=X!==Z,ne=Object(c.useState)(!1),ae=Object(N.a)(ne,2),ce=ae[0],re=ae[1],ie=function(e){return Object(a.jsx)(R.a,Object(B.a)({elevation:6,variant:"filled"},e))},oe=function(){var e=Object(T.a)(A.a.mark((function e(){var t,n,a,c,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch("https://webexapis.com/v1/people?email=".concat(b),{method:"GET",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return b}));case 3:return t=e.sent,e.next=6,fetch("https://webexapis.com/v1/people?email=".concat(z),{method:"GET",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return z}));case 6:if(n=e.sent,r&&b&&l){e.next=11;break}return y("Some field is missing!"),w(!1),e.abrupt("return");case 11:return a="https://shakedzrihen.github.io/chillbot/#"+"/songHug?receiver=".concat(b,"&displayLink=").concat(l,"&sender=").concat(n,"&senderMail=").concat(z),console.log("formattedLink",a),c="Hi ".concat(t,"!"),i=D(c,r,a,g),o=U(i,b),e.next=18,fetch("https://webexapis.com/v1/messages",{method:"POST",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){return console.log(e)})).then((function(){return w(!1)}));case 18:re(!0);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"cardFromContainer",children:[Object(a.jsxs)("div",{className:"flex spaceBetween",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"Send a SongHug for (email)"}),Object(a.jsx)(L.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email ".concat($?"error":""),value:b,onChange:function(e){var t=e.target.value;return m(t),t&&t.trim().length>0?t.indexOf("cisco.com")<=0?(q(J.NOT_VALID),!1):(q(Z),!0):(q(J.EMPTY),!1)},helperText:Y,error:$})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"youtubeLink",className:"textboxLabel",children:"Paste YouTube Link here"}),Object(a.jsx)(L.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox ".concat(te?"error":""),multiline:!0,rows:1,value:l,onChange:function(e){var t=e.target.value;return u(t),t&&t.trim().length>0?t.indexOf("youtube.com/watch")<=0?(ee(W.NOT_VALID),!1):(ee(Z),!0):(ee(W.EMPTY),!1)},helperText:X,error:te})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"message",className:"textboxLabel",children:"Add Message"}),Object(a.jsx)(L.a,{multiline:!0,id:"dscription",variant:"outlined",className:"textbox",value:g,onChange:function(e){var t=e.target.value;t.length<=65&&x(t)},rows:4})]})]}),Object(a.jsx)("div",{className:"resourcePickerContainer",children:Object(a.jsx)(E,{title:"Choose a GIF",resources:F,allowBlank:!1,value:r,setValue:i})})]}),k?Object(a.jsx)(V.a,{disableShrink:!0,className:"spinner"}):Object(a.jsx)(v.a,{className:Object(H.a)("sendButton"),onClick:oe,children:"Send SongHug"}),Object(a.jsx)(_.a,{open:ce,autoHideDuration:6e3,onClose:function(){return re(!1)},children:Object(a.jsx)(ie,{onClose:function(){return re(!1)},severity:"success",children:"SongHug On his way!"})})]})},$=(n(90),function(){var e=new URLSearchParams(Object(l.g)().search),t=p(),n=Object(l.f)(),r=Object(c.useState)(localStorage.getItem("currentUser")),i=Object(N.a)(r,1)[0];if(console.log("currentUser",i),i)return Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"sendSongFrame",children:Object(a.jsxs)(k.a,{className:Object(H.a)(t.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(C,{title:"Make Someone Happy!"}),Object(a.jsx)("div",{className:t.contentContainer,children:Object(a.jsx)(q,{email:e.get("email")})})]})});n.push({pathname:"/register"})}),K=(n(91),n(67)),Q=n.n(K),X=(n(109),function(e){var t=function(t){console.log(t),localStorage.setItem("currentUser",e.receiver)};return Object(a.jsxs)("div",{className:"songHugContainer",children:[Object(a.jsx)(Q.a,{url:e.displayLink,config:{youtube:{playerVars:{autoplay:1}}},playing:!0}),Object(a.jsxs)("div",{className:"description",children:[e.sender," sent you a ",Object(a.jsx)("span",{className:"songhug",children:"SongHug!"})]}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(s.b,{to:"/sendSong?email=".concat(e.senderMail),children:Object(a.jsx)(v.a,{className:"sendBack",onClick:function(){return t(e.sender)},children:"Send SongHug Back!"})}),Object(a.jsx)(s.b,{to:"/sendSong",children:Object(a.jsx)(v.a,{className:"sendButton",onClick:function(){return t(e.sender)},children:"Send SongHug"})})]})]})}),ee=function(){var e=new URLSearchParams(Object(l.g)().search),t=p();return Object(c.useEffect)((function(){return document.body.id="songHugBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"songHugFrame",children:Object(a.jsx)(k.a,{className:Object(H.a)(t.container,"songHugContainer"),maxWidth:"xl",children:Object(a.jsx)(X,{receiver:e.get("receiver"),displayLink:e.get("displayLink"),sender:e.get("sender"),senderMail:e.get("senderMail")})})})},te=(n(110),function(){var e=p(),t=Object(c.useState)(""),n=Object(N.a)(t,2),r=n[0],i=n[1],o=Object(l.f)();Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]);return Object(a.jsx)("div",{className:"registerContainer",children:Object(a.jsxs)(k.a,{className:Object(H.a)(e.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(C,{title:"Nice to Meet ya!"}),Object(a.jsx)("p",{className:"subtitle",children:"Before we start let\u2019s get to know you a little bit"}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"what is your cisco mail?"}),Object(a.jsx)(L.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsx)(v.a,{className:Object(H.a)("sendButton"),onClick:function(e){localStorage.setItem("currentUser",r),o.push({pathname:"/sendsong"})},children:"Continue"})]})})}),ne=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/sendsong",children:Object(a.jsx)($,{})}),Object(a.jsx)(l.a,{path:"/songhug",children:Object(a.jsx)(ee,{})}),Object(a.jsx)(l.a,{path:"/register",children:Object(a.jsx)(te,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(y,{})})]})})};n(111);i.a.render(Object(a.jsx)(o.a,{theme:f,children:Object(a.jsx)(ne,{})}),document.querySelector("#root"))},59:function(e,t,n){},83:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.ce78bc95.chunk.js.map