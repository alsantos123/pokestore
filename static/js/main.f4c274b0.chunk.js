(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{102:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(102),a(55)),l=a(10),s=a(164),m=a(172),u=a(193),p=a(20),d=a.n(p),g=a(34),f=a(25),b=a(79),h=a.n(b).a.create({baseURL:"https://pokeapi.co/api/v2/"}),E=Object(n.createContext)(),k=function(){var e=Object(n.useContext)(E);if(!e)throw new Error("usePokemon must be used within a PokemonProvider");return{pokemon:e.pokemon,setPokemon:e.setPokemon}},v=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(f.a)(a,2),c=o[0],i=o[1],l=function(){var e=Object(g.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=151,a=[],n=d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/pokemon/".concat(t)).then((function(e){var n=e.data;a.push({id:t,name:n.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),price:Math.floor(100*Math.random()),types:n.types.map((function(e){return e.type.name}))})}));case 2:case"end":return e.stop()}}),e)})),r=1;case 4:if(!(r<=t)){e.next=9;break}return e.delegateYield(n(r),"t0",6);case 6:r++,e.next=4;break;case 9:console.log(a),i(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(E.Provider,{value:{pokemon:c,setPokemon:i}},t)},w=a(26),x=a(184),j=a(185),O=a(197),C=a(182),y=a(198),P=a(22),N=a(186),I=a(187),S=a(14),B=a(200),F=a(80),T=a.n(F),L=a(166),R=a(168),A=a(84),M=a.n(A),z=a(167),H=Object(s.a)((function(e){return{root:Object(w.a)({position:"fixed",bottom:e.spacing(2),right:"315px"},e.breakpoints.down("xs"),{right:e.spacing(2)}),ScrollTopFab:{color:"#fff","&:active":{color:"#000",boxShadow:"none"}}}})),G=function(e){var t=e.window,a=H(),n=Object(L.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(z.a,{in:n},r.a.createElement("div",{onClick:function(e){e.preventDefault();var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},r.a.createElement(R.a,{className:a.ScrollTopFab,color:"primary",size:"small","aria-label":"de volta ao inicio"},r.a.createElement(M.a,null))))},$=a(176),D=a(177),V=a(178),J=a(201),U=a(179),q=a(199),Y=a(180),_=a(181),K=a(43),Q=a(183),W=Object(n.createContext)(),X=function(){var e=Object(n.useContext)(W);if(!e)throw new Error("useCart must be used within a CartProvider");return{cartList:e.cartList,setCartList:e.setCartList}},Z=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(f.a)(a,2),c=o[0],i=o[1];return r.a.createElement(W.Provider,{value:{cartList:c,setCartList:i}},t)},ee=a(85),te=a.n(ee),ae=a(170),ne=a(139),re=a(171),oe=a(173),ce=a(174),ie=a(175),le=a(86),se=a.n(le),me=Object(s.a)((function(e){return{dialogContainer:{background:"#f4cd17",textAlign:"center"},buyButton:{position:"absolute",bottom:0,right:0,width:"100%",textAlign:"center",height:"50px",borderRadius:0},pikachuFaceContainer:{padding:"20px 25px 10px"},PikachuFaceImage:{width:"40%"}}})),ue=r.a.forwardRef((function(e,t){return r.a.createElement(ne.a,Object.assign({direction:"left",ref:t},e))}));function pe(e){var t=me(),a=Object(n.useState)(!1),o=Object(f.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(0),s=Object(f.a)(l,2),u=s[0],p=s[1],b=X().setCartList,h=function(){i(!0)},E=function(){var t=Object(g.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.resumeBuy,3,p(.03*a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[e.resumeBuy]),r.a.createElement("div",null,e.resumeBuy?r.a.createElement(ae.a,{onClick:h,variant:"contained",className:t.buyButton,color:"primary"},"Finalizar"):r.a.createElement(ae.a,{disabled:!0,onClick:h,variant:"contained",className:t.buyButton,color:"primary"},"Finalizar"),r.a.createElement(re.a,{open:c,TransitionComponent:ue,keepMounted:!0,onClose:function(){i(!1),b([])},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement("div",{className:t.dialogContainer},r.a.createElement(m.a,{container:!0,className:t.pikachuFaceContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement("img",{src:se.a,alt:"PokeStore",className:t.PikachuFaceImage}))),r.a.createElement(oe.a,{id:"alert-dialog-slide-title"},"Obrigado !!!"),r.a.createElement(ce.a,null,r.a.createElement(ie.a,{id:"alert-dialog-slide-description"},"Voce ganhou de volta R$ ".concat(u))))))}var de=a(33),ge=Object(s.a)((function(e){return{toolbar:e.mixins.toolbar,resumeBuy:{position:"absolute",background:"#FFF",bottom:"55px",right:0,width:"100%",height:"30px",borderTop:"1px solid rgba(0, 0, 0, 0.12)",padding:"0 16px"},avatarContainer:{borderRadius:0},pokedexImage:{top:5,height:25,position:"relative",paddingRight:10}}})),fe=function(e){var t=ge(),a=X(),o=a.cartList,c=a.setCartList,i=Object(n.useState)(0),l=Object(f.a)(i,2),s=l[0],u=l[1],p=function(){var e=Object(g.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(o.filter((function(e){return e.id!==t})));case 3:de.ToastsStore.warning("".concat(a," deletado !")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),de.ToastsStore.error("Erro ao deletar !");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.reduce((function(e,t){return e+t.price}),0));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement($.a,{subheader:r.a.createElement(D.a,{component:"div",id:"nested-list-subheader"},r.a.createElement("img",{src:te.a,alt:"PokeStore",className:t.pokedexImage}),"Carrinho")},r.a.createElement(V.a,null),o?o.map((function(e,a){return r.a.createElement(J.a,{key:a},r.a.createElement(U.a,null,r.a.createElement(q.a,{className:t.avatarContainer,alt:"Pokemon",src:e.image})),r.a.createElement(Y.a,{primary:e.name,secondary:"R$ ".concat(e.price,",00")}),r.a.createElement(_.a,null,r.a.createElement(C.a,{edge:"end","aria-label":"delete",onClick:function(){return p(e.id,e.name)}},r.a.createElement(Q.a,null))))})):"Carrinho Vazio"),s?r.a.createElement(m.a,{container:!0,className:t.resumeBuy,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(K.a,null,"Total: ")),r.a.createElement(m.a,{item:!0},r.a.createElement(K.a,null,"R$ ".concat(s,",00")))):"",r.a.createElement(pe,{resumeBuy:s}))},be=window.innerHeight,he=Object(s.a)((function(e){var t;return{root:{display:"flex"},logoContainer:Object(w.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),logoImage:Object(w.a)({height:"75px",position:"absolute",top:"5px"},e.breakpoints.down("xs"),{position:"relative",paddingRight:10,height:"45px"}),search:(t={position:"relative",backgroundColor:Object(S.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(w.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(w.a)(t,"borderRadius",100),t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(w.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"0","&:focus":{width:"20ch"}}),drawer:Object(w.a)({},e.breakpoints.up("sm"),{width:300,height:be,flexShrink:0}),appBar:Object(w.a)({zIndex:"1000000000000",padding:e.spacing(0)},e.breakpoints.up("sm"),{width:"100%",padding:e.spacing(0,2)}),menuButton:Object(w.a)({},e.breakpoints.up("sm"),{display:"none"}),drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(12,5,5,5)}}})),Ee=function(e){var t=e.window,a=e.children,n=he(),o=r.a.useState(!1),c=Object(f.a)(o,2),i=c[0],l=c[1],s=function(){l(!i)},m=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(x.a,{position:"fixed",className:n.appBar},r.a.createElement(j.a,null,r.a.createElement("div",{className:n.logoContainer},r.a.createElement("img",{src:T.a,alt:"PokeStore",className:n.logoImage})),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(N.a,null)),r.a.createElement(O.a,{placeholder:"Ca\xe7ar Pok\xe9mon...",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"Ca\xe7ar Pok\xe9mon..."}})),r.a.createElement(C.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:s,className:n.menuButton},r.a.createElement(I.a,null)))),r.a.createElement("main",{className:n.content},a,r.a.createElement(G,e)),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(y.a,{smUp:!0,implementation:"css"},r.a.createElement(B.a,{container:m,anchor:"right",open:i,onClose:s,onOpen:s,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(fe,null))),r.a.createElement(y.a,{xsDown:!0,implementation:"css"},r.a.createElement(P.a,{classes:{paper:n.drawerPaper},variant:"permanent",anchor:"right",open:!0},r.a.createElement(fe,null)))))},ke=a(89),ve=a(188),we=a(189),xe=a(190),je=a(191),Oe=a(192),Ce=Object(s.a)((function(e){return{cardMedia:{width:"130px",height:"130px",margin:"auto",marginTop:"10px"},cardContent:{textAlign:"center"},cardActions:{padding:0},cardButton:{width:"100%"}}})),ye=function(e){var t=e.pokemonId,a=Ce(),n=k().pokemon,o=X(),c=o.cartList,i=o.setCartList,l=n[t],s=l.id,u=l.name,p=l.image,d=l.price,g=l.types,f=[];return r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(ve.a,null,r.a.createElement(we.a,{className:a.cardMedia,image:p}),r.a.createElement(xe.a,{className:a.cardContent},r.a.createElement(K.a,null,"".concat(s,". ").concat(u)),r.a.createElement(K.a,null,"R$ ".concat(d,",00")),r.a.createElement("strong",null,g)),r.a.createElement(je.a,{className:a.cardActions,aligh:"center"},r.a.createElement(ae.a,{className:a.cardButton,onClick:function(){return function(e){c.find((function(t){return t===n[e-1]}))?de.ToastsStore.warning("Pokemon ja capturado !"):(f.push.apply(f,Object(ke.a)(c).concat([n[e-1]])),i(f))}(s)},startIcon:r.a.createElement(Oe.a,null),color:"primary"},"Capturar Pokemon"))))},Pe=window.innerHeight,Ne=Object(s.a)((function(e){return{mainContainer:{padding:0},loadingContainer:{height:Pe-200}}})),Ie=function(e){var t=k(),a=t.pokemon,n=(t.setPokemon,Ne());return console.log(a.length),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null,0!==a.length||"undefined"!==a.length?r.a.createElement(m.a,{container:!0,spacing:2,className:n.mainContainer},Object.keys(a).map((function(e){return r.a.createElement(ye,{pokemonId:e,key:e})}))):r.a.createElement(m.a,{container:!0,className:n.loadingContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,null)))))},Se=window.innerHeight,Be=Object(s.a)((function(e){return{pokedexContainer:{padding:0},loadingContainer:{height:Se-200}}})),Fe=function(e){var t=k(),a=t.pokemon,n=(t.setPokemon,Be());return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null,a?r.a.createElement(m.a,{container:!0,spacing:2,className:n.pokedexContainer},Object.keys(a).map((function(e){return r.a.createElement(ye,{pokemonId:e,key:e})}))):r.a.createElement(m.a,{container:!0,className:n.loadingContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,null)))))},Te=a(56),Le=a(87),Re=a.n(Le),Ae=a(194),Me=Object(s.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),ze=function(){var e=Object(l.g)(),t=Object(l.f)(),a=Me();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,{elevation:2,className:a.root},r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement("img",{src:Re.a})),r.a.createElement(m.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(Ae.a,{color:"action",style:{fontSize:30}}))))))};function He(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Ie}),r.a.createElement(l.a,{path:"/pokestore",component:Ie}),r.a.createElement(l.a,{path:"/market",component:Fe}),r.a.createElement(l.a,{path:"*",component:ze})))}var Ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(Z,null,r.a.createElement(He,null))))},$e=a(195),De=a(88),Ve=Object(De.a)({palette:{primary:{main:"#005BAC"}}}),Je=(Object(De.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object(De.a)({palette:{primary:{light:"#97d1f4",main:"#74bbe8",dark:"#2d92d1",contrastText:"#fff"}}}),Object(De.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),Ve),Ue=a(196);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement($e.a,{theme:Je},r.a.createElement("div",{id:"back-to-top-anchor"}),r.a.createElement(Ge,null),r.a.createElement(de.ToastsContainer,{store:de.ToastsStore,position:de.ToastsContainerPosition.TOP_RIGHT,lightBackground:!0}),r.a.createElement(Ue.a,null))),document.getElementById("root"))},80:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"},85:function(e,t,a){e.exports=a.p+"static/media/Pokedex.1575f911.png"},86:function(e,t,a){e.exports=a.p+"static/media/pikachu-face.70afa18b.png"},87:function(e,t,a){e.exports=a.p+"static/media/Error404.b47d9f87.png"},97:function(e,t,a){e.exports=a(138)}},[[97,1,2]]]);
//# sourceMappingURL=main.f4c274b0.chunk.js.map