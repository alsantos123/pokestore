(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(93),a(35)),l=a(9),s=a(25),m=a(156),u=a(157),p=a(159),d=a(73),b=a.n(d).a.create({baseURL:"https://pokeapi.co/api/v2/"}),f=a(81),g=(Object(f.a)({palette:{primary:{light:"#015d82",main:"#004561",dark:"#03374c",contrastText:"#000"}}}),Object(f.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object(f.a)({palette:{primary:{light:"#97d1f4",main:"#74bbe8",dark:"#2d92d1",contrastText:"#fff"}}}),Object(f.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),Object(m.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))),h=function(e){var t=g(),a=(Object(l.f)(),Object(n.useState)([])),o=Object(s.a)(a,2);o[0],o[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/market"},r.a.createElement(u.a,{color:"primary","aria-label":"Adicionar Noticia",className:t.fab},r.a.createElement(p.a,null))))},E=a(175),k=a(181),x=a(28),v=a.n(x),j=a(45),O=Object(n.createContext)(),w=function(){var e=Object(n.useContext)(O);return{pokemon:e.pokemon,setPokemon:e.setPokemon}},y=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],i=o[1],l=function(){var e=Object(j.a)(v.a.mark((function e(){var t,a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=151,a=[],n=v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/pokemon/".concat(t)).then((function(e){var n=e.data;a.push({id:t,name:n.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),price:Math.floor(100*Math.random()),type:n.types[0].type.name})}));case 2:case"end":return e.stop()}}),e)})),r=1;case 4:if(!(r<=t)){e.next=9;break}return e.delegateYield(n(r),"t0",6);case 6:r++,e.next=4;break;case 9:i(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(O.Provider,{value:{pokemon:c,setPokemon:i}},t)},C=a(29),N=a(171),P=a(172),I=a(186),F=a(168),B=a(187),L=a(185),S=a(173),T=a(174),R=a(12),A=a(77),M=a.n(A),z=a(160),G=a(78),D=a.n(G),H=a(161),$=Object(m.a)((function(e){return{root:Object(C.a)({position:"fixed",bottom:e.spacing(2),right:"315px"},e.breakpoints.down("xs"),{right:e.spacing(2)}),ScrollTopFab:{backgroundColor:"#005BAC",color:"#fff","&:active":{color:"#000",boxShadow:"none"}}}})),J=function(e){var t=e.window,a=$(),n=Object(z.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(H.a,{in:n},r.a.createElement("div",{onClick:function(e){e.preventDefault();var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},r.a.createElement(u.a,{className:a.ScrollTopFab,size:"small","aria-label":"de volta ao inicio"},r.a.createElement(D.a,null))))},U=a(162),V=a(163),q=a(164),Y=a(190),_=a(165),K=a(188),Q=a(166),W=a(167),X=a(184),Z=a(170),ee=a(169),te=Object(n.createContext)(),ae=function(){var e=Object(n.useContext)(te);return{cartList:e.cartList,setCartList:e.setCartList}},ne=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],i=o[1];return r.a.createElement(te.Provider,{value:{cartList:c,setCartList:i}},t)},re=a(79),oe=a.n(re),ce=Object(m.a)((function(e){return{toolbar:e.mixins.toolbar,buyButton:{position:"absolute",bottom:0,right:0,width:"100%",textAlign:"center",height:"50px",borderRadius:0},resumeBuy:{position:"absolute",bottom:"55px",right:0,width:"100%",height:"30px",borderTop:"1px solid rgba(0, 0, 0, 0.12)"},avatarContainer:{borderRadius:0},pokedexImage:{top:5,height:25,position:"relative",paddingRight:10}}})),ie=function(e){var t=ce(),a=ae(),o=a.cartList,c=a.setCartList,i=Object(n.useState)(0),l=Object(s.a)(i,2),m=l[0],u=l[1],p=function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(o.filter((function(e){return e.id!==t})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.reduce((function(e,t){return e+t.price}),0));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(U.a,{subheader:r.a.createElement(V.a,{component:"div",id:"nested-list-subheader"},r.a.createElement("img",{src:oe.a,alt:"PokeStore",className:t.pokedexImage}),"Carrinho")},r.a.createElement(q.a,null),o?o.map((function(e){return r.a.createElement(Y.a,{key:e.id},r.a.createElement(_.a,null,r.a.createElement(K.a,{className:t.avatarContainer,alt:"Pokemon",src:e.image})),r.a.createElement(Q.a,{primary:e.name,secondary:"R$ ".concat(e.price,",00")}),r.a.createElement(W.a,null,r.a.createElement(F.a,{edge:"end","aria-label":"delete",onClick:function(){return p(e.id)}},r.a.createElement(ee.a,null))))})):"Carrinho Vazio"),m?r.a.createElement(X.a,{className:t.resumeBuy},"`Total:  R$",m,",00`"):"",r.a.createElement(Z.a,{variant:"contained",className:t.buyButton,color:"primary",href:"#contained-buttons"},"Finalizar"))},le=Object(m.a)((function(e){var t;return{root:{display:"flex"},logoContainer:Object(C.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),logoImage:{height:"75px",position:"absolute",top:"5px"},search:(t={position:"relative",backgroundColor:Object(R.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(C.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(C.a)(t,"borderRadius",100),t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"0","&:focus":{width:"20ch"}}),drawer:Object(C.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),appBar:Object(C.a)({zIndex:"1000000000000",padding:e.spacing(0)},e.breakpoints.up("sm"),{width:"100%",padding:e.spacing(0,2)}),menuButton:Object(C.a)({},e.breakpoints.up("sm"),{display:"none"}),drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(13,5,5,5)}}})),se=function(e){var t=e.window,a=e.children,n=le(),o=r.a.useState(!1),c=Object(s.a)(o,2),i=c[0],l=c[1],m=function(){l(!i)},u=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(N.a,{position:"fixed",className:n.appBar},r.a.createElement(P.a,null,r.a.createElement("div",{className:n.logoContainer},r.a.createElement("img",{src:M.a,alt:"PokeStore",className:n.logoImage})),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(S.a,null)),r.a.createElement(I.a,{placeholder:"Ca\xe7ar Pok\xe9mon...",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"Ca\xe7ar Pok\xe9mon..."}})),r.a.createElement(F.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:m,className:n.menuButton},r.a.createElement(T.a,null)))),r.a.createElement("main",{className:n.content},a,r.a.createElement(J,e)),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(B.a,{smUp:!0,implementation:"css"},r.a.createElement(L.a,{container:u,variant:"temporary",anchor:"right",open:i,onClose:m,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(ie,null))),r.a.createElement(B.a,{xsDown:!0,implementation:"css"},r.a.createElement(L.a,{classes:{paper:n.drawerPaper},variant:"permanent",anchor:"right",open:!0},r.a.createElement(ie,null)))))},me=a(82),ue=a(176),pe=a(177),de=a(178),be=a(54),fe=a(179),ge=a(180),he=a(46),Ee=Object(m.a)((function(e){return{cardMedia:{width:"130px",height:"130px",margin:"auto",marginTop:"10px"},cardContent:{textAlign:"center"},cardActions:{padding:0},cardButton:{width:"100%"}}})),ke=function(e){var t=e.pokemonId,a=Ee(),n=w().pokemon,o=ae(),c=o.cartList,i=o.setCartList,l=n[t],s=l.id,m=l.name,u=l.image,p=l.price,d=l.type;return r.a.createElement(E.a,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(ue.a,null,r.a.createElement(pe.a,{className:a.cardMedia,image:u}),r.a.createElement(de.a,{className:a.cardContent},r.a.createElement(be.a,null,"".concat(s,". ").concat(m)),r.a.createElement(be.a,null,"R$ ".concat(p,",00")),r.a.createElement("strong",null,d)),r.a.createElement(fe.a,{className:a.cardActions,aligh:"center"},r.a.createElement(Z.a,{className:a.cardButton,onClick:function(){return function(e){var t=[];c?t.push.apply(t,Object(me.a)(c).concat([n[e-1]])):t.push(n[e-1]),i(t)}(s)},startIcon:r.a.createElement(ge.a,null),color:"primary",href:"#contained-buttons"},"Capturar Pokemon"))))},xe=window.innerHeight,ve=Object(m.a)((function(e){return{pokedexContainer:{padding:0},loadingContainer:{height:xe-200}}})),je=function(e){var t=w(),a=t.pokemon,n=(t.setPokemon,ve());return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null,a?r.a.createElement(E.a,{container:!0,spacing:2,className:n.pokedexContainer},Object.keys(a).map((function(e){return r.a.createElement(ke,{pokemonId:e,key:e})}))):r.a.createElement(E.a,{container:!0,className:n.loadingContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(k.a,null)))))},Oe=a(83),we=a(80),ye=a.n(we),Ce=a(182),Ne=Object(m.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),Pe=function(){var e=Object(l.g)(),t=Object(l.f)(),a=Ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{elevation:2,className:a.root},r.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("img",{src:ye.a})),r.a.createElement(E.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(Ce.a,{color:"action",style:{fontSize:30}}))))))};function Ie(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:h}),r.a.createElement(l.a,{path:"/pokestore",component:h}),r.a.createElement(l.a,{path:"/market",component:je}),r.a.createElement(l.a,{path:"*",component:Pe})))}var Fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(ne,null,r.a.createElement(Ie,null))))},Be=(Object(f.a)({palette:{primary:{light:"#FFF",main:"#005BAC",dark:"#FFF",contrastText:"#FFF"}}}),a(183));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"back-to-top-anchor"}),r.a.createElement(Fe,null),r.a.createElement(he.ToastsContainer,{store:he.ToastsStore,position:he.ToastsContainerPosition.TOP_RIGHT,lightBackground:!0}),r.a.createElement(Be.a,null)),document.getElementById("root"))},77:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"},79:function(e,t,a){e.exports=a.p+"static/media/Pokedex.1575f911.png"},80:function(e,t,a){e.exports=a.p+"static/media/Error404.b47d9f87.png"},88:function(e,t,a){e.exports=a(129)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.304607b4.chunk.js.map