(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),i=n(9),r=n.n(i),o=n(138),s=n(27),l=n(11),d=(n(72),n(33)),u=n(133),b=n(42),j=n(61),m="#428C7F",h="#3B7E72",g="#2A3858",O="#F2F2F2",x="#121213",f=Object(j.a)({palette:{success:{main:m},primary:{main:O},secondary:{main:g},error:{main:b.a.A400}}}),p=Object(u.a)((function(e){var t;return t={pageTitle:{color:m,margin:"20px auto",textAlign:"center"},title:{flexGrow:1,color:g},container:{margin:"3% auto"},multilineColor:{color:g},card:{minWidth:400,minHeight:620,textAlign:"center"},contentContainer:{display:"flex",flexFlow:"row",justifyContent:"space-between"},cardContainer:{},media:{height:400,width:400},cardText:{color:m}},Object(d.a)(t,"cardContainer",{border:"15px solid transparent",borderImage:"url(https://www.kudoboard.com/images/lines-background.png) 100 repeat"}),Object(d.a)(t,"sendButton",{margin:"16px auto",width:"100%",backgroundColor:m,color:O,"&:hover":{backgroundColor:h,color:O}}),t})),v=n(140),y=(n.p,function(){p();return Object(c.useEffect)((function(){return document.body.id="mainPageBody",function(){document.body.id=""}}),[]),Object(a.jsxs)("div",{className:"mainPageContainer",children:[Object(a.jsx)("div",{className:"header"}),Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(v.a,{className:"sendButton",children:"Send SongHug"}),Object(a.jsx)("div",{className:"love",children:"Spread The Love!"}),Object(a.jsx)("div",{className:"heart"})]})}),N=Object(u.a)((function(e){return{title:{color:x,fontSize:50,marginTop:120}}})),k=function(){var e=N();return Object(a.jsx)("p",{className:e.title,children:"Make Someone Happy!"})},C=n(137),S=n(45),w=n.n(S),T=n(59),A=n(23),B=n(139),L=n(3),F=(n(52),function(e){var t=e.title,n=e.resources;e.allowBlank;return Object(a.jsxs)("div",{className:"flexCol",children:[Object(a.jsx)("label",{className:"textboxLabel",children:t}),Object(a.jsx)("div",{className:"resourceContainer",children:n.map((function(t,n){return Object(a.jsx)("img",{src:t,className:Object(L.a)("resource",{selected:t==e.value}),onClick:function(n){return a=t,console.log("select:",a),void e.setValue(a);var a}},n)}))})]})}),E=["https://robotunion.eu/wp-content/uploads/2019/06/giphy-2.gif","https://i.pinimg.com/originals/3e/87/b5/3e87b5e21e8b25f967c545fedcdf9230.gif","https://c.tenor.com/lVlj3Z219BMAAAAj/sound-classical-music.gif","https://media.giphy.com/media/fjxeswpTKg3Uy2INQx/source.gif","https://i.pinimg.com/originals/59/a5/f0/59a5f025e75fe29104bd9597f5f7b0f1.gif","https://i.pinimg.com/originals/e7/ab/1e/e7ab1ede1eea99b1de9a8f6eaf0582a9.gif","https://media1.tenor.com/images/c7059cf0c1ebc7c3ec3562028d141f9d/tenor.gif","https://media3.giphy.com/media/ZFo9Jf12rYxWwr1mFd/source.gif"],H=n(17),P={type:"TextBlock",text:"",wrap:!0,fontType:"Default",size:"ExtraLarge",weight:"Bolder",color:"Accent",horizontalAlignment:"Center",isSubtle:!0},Y={type:"Image",url:"imageUrl",isVisible:!0,selectAction:{type:"Action.OpenUrl",url:"Youtube link"}},z={type:"TextBlock",text:"",wrap:!0,horizontalAlignment:"Center",weight:"Bolder",size:"Medium",color:"Accent"},I={type:"TextBlock",text:"click on the picture for listen to the song!",wrap:!0,horizontalAlignment:"Center",isSubtle:!0},D={contentType:"application/vnd.microsoft.card.adaptive",content:{type:"AdaptiveCard",$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2",body:[P,Y,z,I]}},V=function(e,t,n,a){var c=Object(H.a)(Object(H.a)({},P),{},{text:e}),i=Object(H.a)(Object(H.a)({},Y),{},{url:t,selectAction:Object(H.a)(Object(H.a)({},Y.selectAction),{},{url:n})}),r=Object(H.a)(Object(H.a)({},z),{},{text:a});return Object(H.a)(Object(H.a)({},D),{},{content:Object(H.a)(Object(H.a)({},D.content),{},{body:[c,i,r,I]})})};function M(e,t){return{toPersonEmail:t,attachments:[e],text:"If you see this - i failed to create songHug for you"}}var Z=n(136),J={NOT_VALID:"Email must be a cisco mail",EMPTY:"Enter an email"},W={NOT_VALID:"Link must be a Youtube link",EMPTY:"Enter a music link"},_="",G="NjFkZDcyNDctY2EzZC00ZWFlLTg2NGItZWJlOGY2YjlmNDZlN2E0NjJhODYtNzBj_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",U=function(e){var t=Object(c.useState)(E[0]),n=Object(A.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(""),s=Object(A.a)(o,2),l=s[0],d=s[1],u=Object(c.useState)(e.email),b=Object(A.a)(u,2),j=b[0],m=b[1],h=Object(c.useState)(""),g=Object(A.a)(h,2),O=g[0],x=g[1],f=Object(c.useState)(""),p=Object(A.a)(f,2),y=(p[0],p[1]),N=Object(c.useState)(!1),k=Object(A.a)(N,2),C=k[0],S=k[1],H=Object(c.useState)(_),P=Object(A.a)(H,2),Y=P[0],z=P[1],I=Y!==_,D=Object(c.useState)(_),U=Object(A.a)(D,2),R=U[0],q=U[1],K=R!==_,Q=function(){var e=Object(T.a)(w.a.mark((function e(){var t,n,a,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,fetch("https://webexapis.com/v1/people?email=".concat(j),{method:"GET",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return j}));case 3:if(t=e.sent,i&&j&&l){e.next=8;break}return y("Some field is missing!"),S(!1),e.abrupt("return");case 8:n="https://shakedzrihen.github.io/chillbot/#"+"/songHug?receiver=".concat(j,"&displayLink=").concat(l,"&sender=ekohavi@cisco.com"),console.log("formattedLink",n),a="Hi ".concat(t,"!"),c=V(a,i,n,O),r=M(c,j),fetch("https://webexapis.com/v1/messages",{method:"POST",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"},body:JSON.stringify(r)}).catch((function(e){return console.log(e)})).then((function(){return S(!1)}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"cardFromContainer",children:[Object(a.jsxs)("div",{className:"flex spaceBetween",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"Send a SongHug for (email)"}),Object(a.jsx)(B.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email ".concat(I?"error":""),value:j,onChange:function(e){var t=e.target.value;return m(t),t&&t.trim().length>0?t.indexOf("cisco.com")<=0?(z(J.NOT_VALID),!1):(z(_),!0):(z(J.EMPTY),!1)},helperText:Y,error:I})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"youtubeLink",className:"textboxLabel",children:"Paste YouTube Link here"}),Object(a.jsx)(B.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox ".concat(K?"error":""),multiline:!0,rows:1,value:l,onChange:function(e){var t=e.target.value;return d(t),t&&t.trim().length>0?t.indexOf("youtube.com/watch")<=0?(q(W.NOT_VALID),!1):(q(_),!0):(q(W.EMPTY),!1)},helperText:R,error:K})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"message",className:"textboxLabel",children:"Add Message"}),Object(a.jsx)(B.a,{multiline:!0,id:"dscription",variant:"outlined",className:"textbox",value:O,onChange:function(e){var t=e.target.value;t.length<=65&&x(t)},rows:4})]})]}),Object(a.jsx)("div",{className:"resourcePickerContainer",children:Object(a.jsx)(F,{title:"Choose a GIF",resources:E,allowBlank:!1,value:i,setValue:r})})]}),C?Object(a.jsx)(Z.a,{disableShrink:!0,className:"spinner"}):Object(a.jsx)(v.a,{className:Object(L.a)("sendButton"),onClick:Q,children:"Send SongHug"})]})},R=(n(77),function(){var e=new URLSearchParams(Object(l.f)().search),t=p();return Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"sendSongFrame",children:Object(a.jsxs)(C.a,{className:Object(L.a)(t.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(k,{}),Object(a.jsx)("div",{className:t.contentContainer,children:Object(a.jsx)(U,{email:e.get("email")})})]})})}),q=(n(80),n(60)),K=n.n(q),Q=(n(98),function(e){return Object(a.jsxs)("div",{className:"songHugContainer",children:[Object(a.jsx)(K.a,{url:e.displayLink,config:{youtube:{playerVars:{autoplay:1}}},playing:!0}),Object(a.jsxs)("div",{className:"description",children:[e.sender," sent you a ",Object(a.jsx)("span",{className:"songhug",children:"SongHug!"})]}),Object(a.jsx)(s.b,{to:"/sendSong?email=".concat(e.sender),children:Object(a.jsx)(v.a,{className:"sendButton",onClick:function(){return t=e.sender,void console.log(t);var t},children:"Send SongHug Back!"})})]})}),$=function(){var e=new URLSearchParams(Object(l.f)().search),t=p();return Object(c.useEffect)((function(){return document.body.id="songHugBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"songHugFrame",children:Object(a.jsx)(C.a,{className:Object(L.a)(t.container,"songHugContainer"),maxWidth:"xl",children:Object(a.jsx)(Q,{receiver:e.get("receiver"),displayLink:e.get("displayLink"),sender:e.get("sender")})})})},X=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/sendsong",children:Object(a.jsx)(R,{})}),Object(a.jsx)(l.a,{path:"/songhug",children:Object(a.jsx)($,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(y,{})})]})})};n(99);r.a.render(Object(a.jsx)(o.a,{theme:f,children:Object(a.jsx)(X,{})}),document.querySelector("#root"))},52:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.64d39f7a.chunk.js.map