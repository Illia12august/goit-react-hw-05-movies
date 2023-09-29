"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[354],{354:function(e,r,n){n.r(r);var t=n(861),i=n(439),c=n(687),s=n.n(c),a=n(791),o=n(689),l=n(87),u=n(985),d=n(184);r.default=function(){var e,r,n=(0,o.UO)().id,c=(0,a.useState)(null),h=(0,i.Z)(c,2),v=h[0],p=h[1],j=(0,a.useState)([]),x=(0,i.Z)(j,2),f=x[0],m=x[1],g=(0,a.useState)(null),w=(0,i.Z)(g,2),Z=w[0],b=w[1],_=(0,o.TH)(),I=(0,a.useRef)(null!==(e=null===(r=_.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");(0,a.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.X)("/movie/".concat(r,"?language=en-US"));case 3:n=e.sent,p(n.data),m(n.data.genres),b(n.data.vote_average),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}();e(n)}),[n]);var k=f.map((function(e){return e.name})).join(", "),N=(10*Z).toFixed(0);if(!v)return(0,d.jsx)("div",{children:"Loading..."});var U=v.title,J=v.overview,M=v.poster_path;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(M),alt:"poster of ".concat(U," movie")}),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.rU,{to:I.current,children:"Back"}),(0,d.jsx)("h2",{children:U}),(0,d.jsxs)("p",{children:["User Score: ",N," %"]}),(0,d.jsx)("b",{children:"Overview"}),(0,d.jsx)("p",{children:J}),(0,d.jsx)("b",{children:"Genres: "}),(0,d.jsx)("p",{children:k})]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsx)("div",{children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"/movies/".concat(n,"/cast"),children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})})]})}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading"}),children:(0,d.jsx)(o.j3,{})})]})}},985:function(e,r,n){n.d(r,{X:function(){return o}});var t=n(861),i=n(687),c=n.n(i),s=n(243),a={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU5MDZhNjdiYjRmODc1NTE2MjUxMWYwYmMwZmZjNSIsInN1YiI6IjY0ZTc4OGRlYzYxM2NlMDE0ZGZiODg4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mEzgbWM_HLA1BRaNaEMWbU8KxVgihcTDELuXNFHkmI"}},o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat("https://api.themoviedb.org/3").concat(r),a);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=354.e1c38294.chunk.js.map