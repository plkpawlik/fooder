(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{29:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(22),s=n.n(r),o=(n(28),n(29),n(3)),i=n.n(o),u=n(6),l=n(4),d=n(5),b=n.n(d),j={API:{host:"https://fooder-back.herokuapp.com/",image:"https://fooder-back.herokuapp.com/img/",types:"https://fooder-back.herokuapp.com/type/",foods:"https://fooder-back.herokuapp.com/food/",makeSelect:"https://fooder-back.herokuapp.com/select/",authFacebook:"https://fooder-back.herokuapp.com/auth/facebook/",userAuth:"https://fooder-back.herokuapp.com/user/auth/",userName:"https://fooder-back.herokuapp.com/user/name/",userID:"https://fooder-back.herokuapp.com/user/id/",userAdd:"https://fooder-back.herokuapp.com/user/friend/",newestSelect:"https://fooder-back.herokuapp.com/select/newest/",waitingSelect:"https://fooder-back.herokuapp.com/select/waiting/",putSelect:"https://fooder-back.herokuapp.com/select/id/",deleteSelect:"https://fooder-back.herokuapp.com/select/"},view:{saved:"saved",select:"select",waiting:"waiting",profile:"profile"},views:["saved","select","waiting","profile"]},f=n(1),m=Object(c.createContext)(null),p=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)([]),d=Object(l.a)(o,2),p=d[0],x=d[1],h=Object(c.useState)([]),O=Object(l.a)(h,2),v=O[0],y=O[1],k=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=JSON.parse(localStorage.getItem("user")))||void 0===t?void 0:t.hasOwnProperty("auth"))){e.next=6;break}return e.next=4,b.a.get(j.API.userAuth+t.auth);case 4:(n=e.sent).data&&s((function(e){return n.data}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(j.API.types);case 2:t=e.sent,x((function(e){return t.data}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(j.API.foods);case 2:t=e.sent,y((function(e){return t.data.sort((function(e,t){return.5-Math.random()}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N={user:r,setUser:s,types:p,setTypes:x,foods:v,setFoods:y};return Object(c.useEffect)((function(){r||k(),r&&(localStorage.setItem("user",JSON.stringify(r)),g(),w())}),[r]),Object(f.jsx)(m.Provider,{value:N,children:t})},x=function(){var e=Object(c.useContext)(m).setUser,t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],s=function(){var t=Object(u.a)(i.a.mark((function t(n){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,b.a.get(j.API.userAuth+a);case 3:c=t.sent,(null===(r=c.data)||void 0===r?void 0:r.auth)===a&&e(r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("section",{className:"container row my-auto",children:Object(f.jsxs)("form",{className:"col-12 col-md-8 mx-auto p-2 card shadow bg-light",children:[Object(f.jsxs)("div",{className:"m-3",children:[Object(f.jsx)("label",{className:"form-label lead",children:"Tw\xf3j token logowania"}),Object(f.jsx)("input",{className:"form-control",type:"password",onChange:function(e){r((function(t){return e.target.value}))},value:a})]}),Object(f.jsxs)("div",{className:"m-3",children:[Object(f.jsx)("a",{target:"blank",href:j.API.authFacebook,className:"btn btn-primary me-1",children:"Pobierz z Facebook"}),Object(f.jsx)("button",{type:"button",className:"btn btn-success ms-1",onClick:s,children:"Zaloguj"})]})]})})})},h=n(8),O=function(e){var t=e.curr,n=e.views,c=e.selectView,a=function(e){var t=e.target.closest("button");c((function(e){return t.value}))};return Object(f.jsxs)("nav",{id:"selector",className:"row p-3",children:[Object(f.jsx)("button",{onClick:a,value:n.saved,type:"button",className:"col-2 selectItem mx-auto ".concat(t===n.saved&&"active"),children:Object(f.jsx)(h.b,{})}),Object(f.jsx)("button",{onClick:a,value:n.select,type:"button",className:"col-2 selectItem mx-auto ".concat(t===n.select&&"active"),children:Object(f.jsx)(h.c,{})}),Object(f.jsx)("button",{onClick:a,value:n.waiting,type:"button",className:"col-2 selectItem mx-auto ".concat(t===n.waiting&&"active"),children:Object(f.jsx)(h.a,{})}),Object(f.jsx)("button",{onClick:a,value:n.profile,type:"button",className:"col-2 selectItem mx-auto ".concat(t===n.profile&&"active"),children:Object(f.jsx)(h.f,{})})]})},v=function(){var e=Object(c.useContext)(m),t=e.user,n=e.types,a=Object(c.useState)([]),r=Object(l.a)(a,2),s=r[0],o=r[1],d=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,a,r,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(j.API.newestSelect+t._id);case 2:if(!(n=e.sent).data.length){e.next=29;break}c=0;case 5:if(!(c<n.data.length)){e.next=28;break}a=n.data[c],r=0;case 8:if(!(r<a.participants.length)){e.next=25;break}return s=a.participants[r],e.prev=10,e.next=13,b.a.get(j.API.userID+s);case 13:u=e.sent,l=u.data,a.participants[r]=l,e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),console.error(e.t0),a.participants[r]={id:"0",body:{name:"user",picture:{data:{url:""}}}};case 22:r++,e.next=8;break;case 25:c++,e.next=5;break;case 28:o((function(e){return n.data}));case 29:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(){return e.apply(this,arguments)}}(),p=s.map((function(e){return Object(f.jsxs)("div",{className:"card col-12 p-2 m-1",children:[Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:e.date.split("T")[0]})}),e.participants.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.body.picture.data.url,alt:e.body.name,className:"rounded mx-auto mx-2 my-1",style:{maxWidth:32}}),Object(f.jsx)("span",{className:"small mx-2",children:e.body.name})]},e._id)})),Object(f.jsxs)("details",{className:"container lead mt-2",children:[Object(f.jsx)("summary",{children:"Rezultat"}),e.result.map((function(e,t){var c,a,r,s;return Object(f.jsxs)("div",{className:"my-2 p-1 row rounded",style:{border:"1px solid ".concat((null===(c=n.filter((function(t){return t.name===e.type}))[0])||void 0===c?void 0:c.color)||"whitesmoke"),boxShadow:"0 0 15px -5px ".concat((null===(a=n.filter((function(t){return t.name===e.type}))[0])||void 0===a?void 0:a.color)||"whitesmoke")},children:[Object(f.jsxs)("figure",{children:[Object(f.jsx)("blockquote",{className:"blockquote",children:Object(f.jsx)("span",{style:{fontSize:"28px",fontWeight:"300",lineHeight:"130%"},children:"".concat(t+1,". ").concat(e.name)})}),Object(f.jsx)("figcaption",{className:"blockquote-footer",style:{color:"".concat((null===(r=n.filter((function(t){return t.name===e.type}))[0])||void 0===r?void 0:r.color)||"whitesmoke"),textShadow:"1px 1px 5px ".concat((null===(s=n.filter((function(t){return t.name===e.type}))[0])||void 0===s?void 0:s.color)||"whitesmoke")},children:Object(f.jsx)("cite",{title:"food type",children:e.type})})]}),Object(f.jsx)("img",{src:j.API.image+e.img,alt:e.name,className:"rounded mx-auto m-1",style:{maxWidth:128}})]},e._id)}))]})]},e._id)}));return Object(c.useEffect)((function(){d()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"lead",children:"Zapisane rezultaty"}),p]})},y=function(e){var t=e.userFriends,n=e.setFriend,a=e.url,r=Object(c.useState)(null),s=Object(l.a)(r,2),o=s[0],d=s[1],j=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Array(t.length),c=0;case 2:if(!(c<t.length)){e.next=10;break}return e.next=5,b.a.get(a+t[c]);case 5:r=e.sent,n[c]=r.data;case 7:c++,e.next=2;break;case 10:d((function(e){return n}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=null===o||void 0===o?void 0:o.map((function(e){return Object(f.jsxs)("div",{className:"col-12 p-1 m-1 border rounded",onClick:function(){n(e._id)},children:[Object(f.jsx)("img",{src:e.body.picture.data.url,alt:e.body.name,className:"rounded mx-auto mx-2 my-1 float-left",style:{maxWidth:44}}),Object(f.jsx)("span",{className:"leed mx-2",children:e.body.name})]},e._id)}));return Object(c.useEffect)((function(){j()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"lead",children:"Zapro\u015b znajomego do wyboru"}),m]})},k=n(23),g=n(13),w=function(e){var t=e.foods,n=e.types,a=e.sendSelect,r=Object(c.useState)([]),s=Object(l.a)(r,2),o=s[0],i=s[1],u=function(e,t,n){t.score=n-Math.random(),e.target.closest("button").classList.add("selected"),e.target.closest(".swipe").classList.add(t.score>5?"right":"left"),i((function(e){return[].concat(Object(k.a)(e),[t])}))},d=t.map((function(e){var t;return Object(f.jsxs)("div",{className:"rounded swipe p-1",children:[Object(f.jsxs)("div",{className:"col-12 mx-auto p-2 rounded unrated",style:{border:"3px solid ".concat((null===(t=n.filter((function(t){return t.name===e.type}))[0])||void 0===t?void 0:t.color)||"whitesmoke"),flexGrow:"1"},children:[Object(f.jsx)("img",{src:j.API.image+e.img,alt:e.name,className:"rounded img-fluid mx-auto my-auto"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("blockquote",{className:"blockquote",children:Object(f.jsx)("span",{style:{fontSize:"28px",fontWeight:"300",lineHeight:"110%",textAlign:"center"},children:e.name})}),Object(f.jsx)("figcaption",{className:"blockquote-footer",style:{color:"#343434"},children:Object(f.jsx)("cite",{title:"food type",children:e.type})})]})]}),Object(f.jsxs)("div",{className:"col-12 row mx-auto my-1 p-1",children:[Object(f.jsx)("button",{className:"col-2 mx-auto btn-rate",onClick:function(t){return u(t,e,2)},style:{backgroundColor:"#dc3545"},children:Object(f.jsx)(h.d,{})}),Object(f.jsx)("button",{className:"col-2 mx-auto btn-rate",onClick:function(t){return u(t,e,4)},style:{backgroundColor:"#ffc107"},children:Object(f.jsx)(h.e,{})}),Object(f.jsx)("button",{className:"col-2 mx-auto btn-rate",onClick:function(t){return u(t,e,6)},style:{backgroundColor:"#20c997"},children:Object(f.jsx)(g.a,{})}),Object(f.jsx)("button",{className:"col-2 mx-auto btn-rate",onClick:function(t){return u(t,e,8)},style:{backgroundColor:"#198754"},children:Object(f.jsx)(g.b,{})})]})]},e._id)}));return Object(c.useEffect)((function(){o.length===t.length&&(a(o),i((function(e){return[]})))}),[o]),Object(f.jsx)(f.Fragment,{children:d})},N=function(){var e=Object(c.useContext)(m),t=e.user,n=e.foods,a=e.types,r=e.setFoods,s=Object(c.useState)(null),o=Object(l.a)(s,2),d=o[0],p=o[1],x=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.post(j.API.makeSelect,{participants:[t._id,d],realizedBy:[t._id],sets:[n]}).finally((function(){return p((function(e){return null}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=d?Object(f.jsx)(w,{foods:n,types:a,sendSelect:x}):Object(f.jsx)(y,{userFriends:t.friends,setFriend:p,url:j.API.userID});return Object(c.useEffect)((function(){r((function(e){return e.sort((function(e,t){return.5-Math.random()}))}))}),[]),Object(f.jsx)(f.Fragment,{children:h})},S=function(e){var t=e.user,n=e.setWaiting,a=Object(c.useState)([]),r=Object(l.a)(a,2),s=r[0],o=r[1],d=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,a,r,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(j.API.waitingSelect+t._id);case 2:if(!(n=e.sent).data.length){e.next=28;break}c=0;case 5:if(!(c<n.data.length)){e.next=28;break}a=n.data[c],r=0;case 8:if(!(r<a.participants.length)){e.next=25;break}return s=a.participants[r],e.prev=10,e.next=13,b.a.get(j.API.userID+s);case 13:u=e.sent,l=u.data,a.participants[r]=l,e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),console.error(e.t0),a.participants[r]={id:"0",body:{name:"user",picture:{data:{url:""}}}};case 22:r++,e.next=8;break;case 25:c++,e.next=5;break;case 28:o((function(e){return n.data}));case 29:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.delete(j.API.deleteSelect+t).finally((function(){return o((function(e){return e.filter((function(e){return e._id!==t}))}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=s.map((function(e){return Object(f.jsxs)("div",{className:"m-1 p-2 border rounded col-12",children:[Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:e.date.split("T")[0]})}),e.participants.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.body.picture.data.url,alt:e.body.name,className:"rounded mx-auto mx-2 my-1",style:{maxWidth:32}}),Object(f.jsx)("span",{className:"small mx-2",children:e.body.name})]},e._id)})),Object(f.jsxs)("div",{className:"col-12 row p-1 mt-1",children:[Object(f.jsx)("button",{className:"col-5 btn btn-success mx-auto mt-1",onClick:function(){return n((function(t){return e}))},children:"Wykonaj"}),Object(f.jsx)("button",{className:"col-5 btn btn-danger mx-auto mt-1",onClick:function(){return m(e._id)},children:"Anuluj"})]})]},e._id)}));return Object(c.useEffect)((function(){d()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"lead",children:"Zaproszenia do zrealizowania"}),p]})},I=function(){var e=Object(c.useContext)(m),t=e.user,n=e.foods,a=e.types,r=Object(c.useState)(null),s=Object(l.a)(r,2),o=s[0],d=s[1],p=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.put(j.API.putSelect+o._id,{participant:t._id,set:n}).finally((function(){return d((function(e){return null}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=o?Object(f.jsx)(w,{foods:n,types:a,sendSelect:p}):Object(f.jsx)(S,{user:t,setWaiting:d});return Object(c.useEffect)((function(){}),[]),Object(f.jsx)(f.Fragment,{children:x})},A=function(){var e=Object(c.useContext)(m),t=e.user,n=e.setUser,a=Object(c.useState)(null),r=Object(l.a)(a,2),s=r[0],o=r[1],d=Object(c.useState)(null),p=Object(l.a)(d,2),x=p[0],h=p[1],O=Object(c.useState)(""),v=Object(l.a)(O,2),y=v[0],k=v[1],g=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Array(t.friends.length),c=0;case 2:if(!(c<t.friends.length)){e.next=10;break}return e.next=5,b.a.get(j.API.userID+t.friends[c]);case 5:a=e.sent,n[c]=a.data;case 7:c++,e.next=2;break;case 10:o((function(e){return n}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(n){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.target,k((function(e){return c.value})),!(c.value.trim().length>=3)){e.next=9;break}return e.next=5,b.a.get(j.API.userName+c.value.trim());case 5:a=e.sent,h((function(e){return a.data.filter((function(e){return!t.friends.includes(e._id)&&e._id!==t._id}))})),e.next=10;break;case 9:h((function(e){return null}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.put(j.API.userAdd+t._id+"/"+c);case 3:return e.next=5,b.a.get(j.API.userAuth+t.auth);case 5:a=e.sent,n((function(e){return a.data})),h((function(e){return null})),k((function(e){return""})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),n((function(e){return null}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=null===s||void 0===s?void 0:s.map((function(e){return Object(f.jsxs)("div",{className:"col-12 p-1 mx-auto my-1 border rounded",children:[Object(f.jsx)("img",{src:e.body.picture.data.url,alt:e.body.name,className:"rounded mx-auto mx-2 my-1 float-left",style:{maxWidth:44}}),Object(f.jsx)("span",{className:"leed mx-2",children:e.body.name})]},e._id)}));return Object(c.useEffect)((function(){g()}),[t.friends]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("section",{className:"col-12 p-2 m-1",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:t.body.picture.data.url,alt:t.body.name,className:"rounded mx-auto mx-2 my-1"}),Object(f.jsx)("span",{className:"lead mx-2",children:Object(f.jsx)("em",{children:t.body.name})})]}),Object(f.jsx)("button",{className:"col-12 btn btn-danger",onClick:S,children:"Wyloguj"}),Object(f.jsx)("hr",{})]}),Object(f.jsxs)("section",{className:"row col-12 my-3 mx-auto",children:[Object(f.jsxs)("div",{className:"col-12 input-group",children:[Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Dodaj znajomego",value:y,onChange:w}),Object(f.jsx)("div",{className:"input-group-text",children:"\ud83d\udd0d"})]}),Object(f.jsx)("div",{className:"col-12 my-2",children:null===x||void 0===x?void 0:x.map((function(e){return Object(f.jsxs)("div",{className:"col-12 card p-1 mx-auto my-1",children:[Object(f.jsx)("img",{src:e.body.picture.data.url,alt:e.body.name,className:"rounded mx-auto mx-2 my-1"}),Object(f.jsx)("p",{className:"mx-auto",children:Object(f.jsx)("em",{children:e.body.name})}),Object(f.jsx)("button",{className:"btn btn-info",onClick:function(){return N(e._id)},children:"+"})]},e._id)}))})]}),Object(f.jsxs)("section",{className:"row col-12 p-2",children:[Object(f.jsx)("h2",{className:"lead",children:"Znajomi"}),I]})]})},C=function(){var e,t=Object(c.useState)(j.view.profile),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),o=Object(l.a)(s,2),i=o[0],u=o[1];switch(a){case j.view.saved:e=Object(f.jsx)(v,{});break;case j.view.select:e=Object(f.jsx)(N,{});break;case j.view.waiting:e=Object(f.jsx)(I,{});break;case j.view.profile:default:e=Object(f.jsx)(A,{})}var d={x:null,y:null},b=function(e){var t=function(e){return e.touches}(e)[0];d.x=t.clientX,d.y=t.clientY},m=function(e){if(d.x&&d.y){var t=e.touches[0].clientX,n=e.touches[0].clientY,c=d.x-t,s=d.y-n;if(Math.abs(c)>Math.abs(s)&&Math.abs(c)>window.innerWidth/3){var o=j.views.length-1,i=j.views.indexOf(a);c<0&&i-1>=0&&(r(j.views[i-1]),u("left")),c>0&&i+1<=o&&(r(j.views[i+1]),u("right"))}}};return Object(c.useEffect)((function(){return document.addEventListener("touchstart",b),document.addEventListener("touchmove",m),function(){document.removeEventListener("touchstart",b),document.removeEventListener("touchmove",m)}}),[a]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{curr:a,views:j.view,selectView:r}),Object(f.jsx)("main",{id:"view",className:"p-1 ".concat(i),children:e},a)]})},P=function(){var e=Object(c.useContext)(m).user?Object(f.jsx)(C,{}):Object(f.jsx)(x,{});return Object(f.jsx)(f.Fragment,{children:e})},_=function(){return Object(f.jsx)(p,{children:Object(f.jsx)(P,{})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0b1e9f9a.chunk.js.map