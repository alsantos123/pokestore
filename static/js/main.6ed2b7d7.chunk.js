(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(88),a(33)),l=a(8),s=a(29),m=a(154),p=a(155),u=a(157),d=a(71),b=a.n(d).a.create({baseURL:"https://pokeapi.co/api/v2/"}),g=a(79),f=(Object(g.a)({palette:{primary:{light:"#015d82",main:"#004561",dark:"#03374c",contrastText:"#000"}}}),Object(g.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#97d1f4",main:"#74bbe8",dark:"#2d92d1",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),Object(m.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))),h=function(e){var t=f(),a=(Object(l.f)(),Object(n.useState)([])),o=Object(s.a)(a,2);o[0],o[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/market"},r.a.createElement(p.a,{color:"primary","aria-label":"Adicionar Noticia",className:t.fab},r.a.createElement(u.a,null))))},E=a(173),k=a(179),x=a(30),v=a.n(x),j=a(50),O=Object(n.createContext)(),w=function(){var e=Object(n.useContext)(O);return{pokemon:e.pokemon,setPokemon:e.setPokemon}},C=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)([]),m=Object(s.a)(l,2),p=(m[0],m[1],function(){var e=Object(j.a)(v.a.mark((function e(){var t,a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=151,a=[],n=v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/pokemon/".concat(t)).then((function(e){var n=e.data;a.push({id:t,name:n.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),price:Math.floor(100*Math.random()),type:n.types[0].type.name})}));case 2:case"end":return e.stop()}}),e)})),r=1;case 4:if(!(r<=t)){e.next=9;break}return e.delegateYield(n(r),"t0",6);case 6:r++,e.next=4;break;case 9:i(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){p()}),[]),Object(n.useEffect)((function(){}),[c]),r.a.createElement(O.Provider,{value:{pokemon:c,setPokemon:i}},t)},y=a(27),N=a(169),P=a(170),I=a(183),F=a(166),L=a(184),S=a(182),B=a(171),T=a(172),R=a(12),A=a(75),M=a.n(A),z=a(158),G=a(76),D=a.n(G),H=a(159),J=Object(m.a)((function(e){return{root:Object(y.a)({position:"fixed",bottom:e.spacing(2),right:"315px"},e.breakpoints.down("xs"),{right:e.spacing(2)}),ScrollTopFab:{backgroundColor:"#005BAC",color:"#fff","&:active":{color:"#000",boxShadow:"none"}}}})),U=function(e){var t=e.window,a=J(),n=Object(z.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(H.a,{in:n},r.a.createElement("div",{onClick:function(e){e.preventDefault();var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},r.a.createElement(p.a,{className:a.ScrollTopFab,size:"small","aria-label":"de volta ao inicio"},r.a.createElement(D.a,null))))},V=a(160),$=a(161),q=a(162),Y=a(186),_=a(163),K=a(185),Q=a(164),W=a(165),X=a(168),Z=a(167),ee=Object(n.createContext)(),te=function(){var e=Object(n.useContext)(ee);return{cartList:e.cartList,setCartList:e.setCartList}},ae=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],i=o[1];return r.a.createElement(ee.Provider,{value:{cartList:c,setCartList:i}},t)},ne=a(77),re=a.n(ne),oe=Object(m.a)((function(e){return{toolbar:e.mixins.toolbar,buyButton:{position:"absolute",bottom:0,right:0,width:"100%",textAlign:"center",height:"50px",borderRadius:0},resumeBuy:{position:"absolute",bottom:"55px",right:0,width:"100%",height:"30px",borderTop:"1px solid rgba(0, 0, 0, 0.12)"},avatarContainer:{borderRadius:0},pokedexImage:{top:5,height:25,position:"relative",paddingRight:10}}})),ce=function(e){var t=oe(),a=te(),n=a.cartList,o=a.setCartList;console.log(n);var c=function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(n.filter((function(e){return e.id!==t})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(V.a,{subheader:r.a.createElement($.a,{component:"div",id:"nested-list-subheader"},r.a.createElement("img",{src:re.a,alt:"PokeStore",className:t.pokedexImage}),"Carrinho")},r.a.createElement(q.a,null),n?n.map((function(e){return r.a.createElement(Y.a,null,r.a.createElement(_.a,null,r.a.createElement(K.a,{className:t.avatarContainer,alt:"Pokemon",src:e.image})),r.a.createElement(Q.a,{primary:e.name,secondary:"R$ ".concat(e.price,",00")}),r.a.createElement(W.a,null,r.a.createElement(F.a,{edge:"end","aria-label":"delete",onClick:function(){return c(e.id)}},r.a.createElement(Z.a,null))))})):"Carrinho Vazio"),r.a.createElement(X.a,{variant:"contained",className:t.buyButton,color:"primary",href:"#contained-buttons"},"Finalizar"))},ie=Object(m.a)((function(e){var t;return{root:{display:"flex"},logoContainer:Object(y.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),logoImage:{height:"75px",position:"absolute",top:"5px"},search:(t={position:"relative",backgroundColor:Object(R.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(y.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(y.a)(t,"borderRadius",100),t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"0","&:focus":{width:"20ch"}}),drawer:Object(y.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),appBar:Object(y.a)({zIndex:"1000000000000",padding:e.spacing(0)},e.breakpoints.up("sm"),{width:"100%",padding:e.spacing(0,2)}),menuButton:Object(y.a)({},e.breakpoints.up("sm"),{display:"none"}),drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(13,5,5,5)}}})),le=function(e){var t=e.window,a=e.children,n=ie(),o=r.a.useState(!1),c=Object(s.a)(o,2),i=c[0],l=c[1],m=function(){l(!i)},p=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(N.a,{position:"fixed",className:n.appBar},r.a.createElement(P.a,null,r.a.createElement("div",{className:n.logoContainer},r.a.createElement("img",{src:M.a,alt:"PokeStore",className:n.logoImage})),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(B.a,null)),r.a.createElement(I.a,{placeholder:"Ca\xe7ar Pok\xe9mon...",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"Ca\xe7ar Pok\xe9mon..."}})),r.a.createElement(F.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:m,className:n.menuButton},r.a.createElement(T.a,null)))),r.a.createElement("main",{className:n.content},a,r.a.createElement(U,e)),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(L.a,{smUp:!0,implementation:"css"},r.a.createElement(S.a,{container:p,variant:"temporary",anchor:"right",open:i,onClose:m,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(ce,null))),r.a.createElement(L.a,{xsDown:!0,implementation:"css"},r.a.createElement(S.a,{classes:{paper:n.drawerPaper},variant:"permanent",anchor:"right",open:!0},r.a.createElement(ce,null)))))},se=a(80),me=a(174),pe=a(175),ue=a(176),de=a(52),be=a(177),ge=a(178),fe=a(44),he=Object(m.a)((function(e){return{cardMedia:{width:"130px",height:"130px",margin:"auto",marginTop:"10px"},cardContent:{textAlign:"center"},cardActions:{padding:0},cardButton:{width:"100%"}}})),Ee=function(e){var t=e.pokemonId,a=he(),n=w().pokemon,o=te(),c=o.cartList,i=o.setCartList,l=n[t],s=l.id,m=l.name,p=l.image,u=l.price,d=l.type;console.log(c);return r.a.createElement(E.a,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:a.cardMedia,image:p}),r.a.createElement(ue.a,{className:a.cardContent},r.a.createElement(de.a,null,"".concat(s,". ").concat(m)),r.a.createElement(de.a,null,"R$ ".concat(u,",00")),r.a.createElement("strong",null,d)),r.a.createElement(be.a,{className:a.cardActions,aligh:"center"},r.a.createElement(X.a,{className:a.cardButton,onClick:function(){return function(e){var t=[];c?t.push.apply(t,Object(se.a)(c).concat([n[e-1]])):t.push(n[e-1]),i(t)}(s)},startIcon:r.a.createElement(ge.a,null),color:"primary",href:"#contained-buttons"},"Capturar Pokemon"))))},ke=window.innerHeight,xe=Object(m.a)((function(e){return{pokedexContainer:{padding:0},loadingContainer:{height:ke-200}}})),ve=function(e){var t=w(),a=t.pokemon,n=(t.setPokemon,xe());return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null,a?r.a.createElement(E.a,{container:!0,spacing:2,className:n.pokedexContainer},Object.keys(a).map((function(e){return r.a.createElement(Ee,{pokemonId:e,key:e})}))):r.a.createElement(E.a,{container:!0,className:n.loadingContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(k.a,null)))))},je=a(81),Oe=a(78),we=a.n(Oe),Ce=a(180),ye=Object(m.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),Ne=function(){var e=Object(l.g)(),t=Object(l.f)(),a=ye();return r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{elevation:2,className:a.root},r.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("img",{src:we.a})),r.a.createElement(E.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(Ce.a,{color:"action",style:{fontSize:30}}))))))};function Pe(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:h}),r.a.createElement(l.a,{path:"/pokestore",component:h}),r.a.createElement(l.a,{path:"/market",component:ve}),r.a.createElement(l.a,{path:"*",component:Ne})))}var Ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement(ae,null,r.a.createElement(Pe,null))))},Fe=(Object(g.a)({palette:{primary:{light:"#FFF",main:"#005BAC",dark:"#FFF",contrastText:"#FFF"}}}),a(181));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"back-to-top-anchor"}),r.a.createElement(Ie,null),r.a.createElement(fe.ToastsContainer,{store:fe.ToastsStore,position:fe.ToastsContainerPosition.TOP_RIGHT,lightBackground:!0}),r.a.createElement(Fe.a,null)),document.getElementById("root"))},75:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"},77:function(e,t,a){e.exports=a.p+"static/media/Pokedex.1575f911.png"},78:function(e,t,a){e.exports=a.p+"static/media/Error404.b47d9f87.png"},83:function(e,t,a){e.exports=a(124)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.6ed2b7d7.chunk.js.map