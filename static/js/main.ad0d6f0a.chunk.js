(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=(a(78),a(20)),l=a(7),m=a(35),s=a(126),p=a(127),u=a(128),d=a(57),g=a.n(d).a.create({baseURL:"https://pokeapi.co/api/v2/"}),f=a(66),b=(Object(f.a)({palette:{primary:{light:"#015d82",main:"#004561",dark:"#03374c",contrastText:"#000"}}}),Object(f.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object(f.a)({palette:{primary:{light:"#97d1f4",main:"#74bbe8",dark:"#2d92d1",contrastText:"#fff"}}}),Object(f.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),Object(s.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))),h=function(e){var t=b(),a=(Object(l.f)(),Object(n.useState)([])),o=Object(m.a)(a,2);o[0],o[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/market"},r.a.createElement(p.a,{color:"primary","aria-label":"Adicionar Noticia",className:t.fab},r.a.createElement(u.a,null))))},E=a(41),k=a.n(E),x=a(61),j=a(130),O=a(131),v=a(132),w=a(133),y=a(134),C=a(135),F=a(136),N=a(138),I=a(137),P=a(129),R=a(62),B=a.n(R),L=a(145),S=Object(s.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),T=function(e){var t=e.window,a=S(),n=Object(P.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(L.a,{in:n},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},r.a.createElement(p.a,{color:"primary",size:"small","aria-label":"scroll back to top"},r.a.createElement(B.a,null))))},A=Object(s.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},cardButton:{width:"100%"}}})),M=function(e){var t=A(),a=Object(n.useState)({}),o=Object(m.a)(a,2),c=o[0],i=o[1],l=function(){var e=Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((function(e){var t=e.data.results,a={};t.forEach((function(e,t){a[t+1]={id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t+1,".png"),price:Math.floor(100*Math.random())}})),console.log(t),i(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(j.a,{container:!0,spacing:2,className:t.pokedexContainer},Object.keys(c).map((function(e){return function(e){var a=c[e],n=a.id,o=a.name,i=a.image,l=a.price;return r.a.createElement(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:e},r.a.createElement(O.a,null,r.a.createElement(v.a,{className:t.cardMedia,image:i,style:{width:"130px",height:"130px"}}),r.a.createElement(w.a,{className:t.cardContent},r.a.createElement(y.a,null,"".concat(n,". ").concat(o)),r.a.createElement(y.a,null,"R$ ".concat(l,",00"))),r.a.createElement(C.a,{aligh:"center"},r.a.createElement(F.a,{className:t.cardButton,startIcon:r.a.createElement(I.a,null),color:"primary",href:"#contained-buttons"},"Capturar Pokemon"))))}(e)}))):r.a.createElement(N.a,null),r.a.createElement(T,e))},G=a(67),z=a(63),J=a.n(z),q=a(139),D=Object(s.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),H=function(){var e=Object(l.g)(),t=Object(l.f)(),a=D();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{elevation:2,className:a.root},r.a.createElement(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement("img",{src:J.a})),r.a.createElement(j.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(q.a,{color:"action",style:{fontSize:30}}))))))};function U(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:h}),r.a.createElement(l.a,{path:"/pokestore",component:h}),r.a.createElement(l.a,{path:"/market",component:M}),r.a.createElement(l.a,{path:"*",component:H})))}var V=a(25),$=a(140),K=a(15),Q=a(141),W=a(142),X=a(144),Y=a(64),Z=a.n(Y),_=a(65),ee=a.n(_),te=Object(s.a)((function(e){var t,a;return{root:{flexGrow:1,marginBottom:35},logoContainer:(t={flexGrow:1,display:"none"},Object(V.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(V.a)(t,"textAlign","center"),t),logoImage:{height:"110%",position:"absolute",top:"15%"},search:(a={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(V.a)(a,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(V.a)(a,"borderRadius","100px"),a),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(V.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"0","&:focus":{width:"20ch"}})}})),ae=function(e){var t=te();return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{position:"static",className:t.root,id:"back-to-top-anchor"},r.a.createElement(Q.a,{fixed:!0},r.a.createElement(W.a,null,r.a.createElement("div",{className:t.logoContainer},r.a.createElement("img",{src:Z.a,alt:"PokeStore",className:t.logoImage})),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(ee.a,null)),r.a.createElement(X.a,{placeholder:"Ca\xe7ar Pok\xe9mon...",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"Ca\xe7ar Pok\xe9mon..."}}))))))};var ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(Q.a,{fixed:!0},r.a.createElement(U,null)))},re=a(143),oe=Object(f.a)({palette:{primary:{light:"#FFF",main:"#005BAC",dark:"#FFF",contrastText:"#FFF"}}});c.a.render(r.a.createElement(re.a,{theme:oe},r.a.createElement(ne,null)),document.getElementById("root"))},63:function(e,t,a){e.exports=a.p+"static/media/Error404.b47d9f87.png"},64:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"},73:function(e,t,a){e.exports=a(103)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.ad0d6f0a.chunk.js.map