(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/pikachu-face.70afa18b.png"},101:function(e,t,a){e.exports=a.p+"static/media/pokeLazyPB.a6e18362.png"},102:function(e,t,a){e.exports=a.p+"static/media/Error404.dd00f18e.png"},114:function(e,t,a){e.exports=a(155)},119:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(119),a(53)),l=a(13),s=a(197),m=a(200),u=a(18),p=a.n(u),d=a(36),g=a(21),f=a(89),b=a.n(f).a.create({baseURL:"https://pokeapi.co/api/v2/"}),h=Object(n.createContext)(),E=function(){var e=Object(n.useContext)(h);if(!e)throw new Error("usePokemon must be used within a PokemonProvider");return{pokemon:e.pokemon,setPokemon:e.setPokemon}},k=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(g.a)(a,2),c=o[0],i=o[1],l=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=151,a=[],n=p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/pokemon/".concat(t)).then((function(e){var n=e.data;a.push({id:t,name:n.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),price:Math.floor(100*Math.random()),types:n.types.map((function(e){return e.type.name}))})}));case 2:case"end":return e.stop()}}),e)})),r=1;case 4:if(!(r<=t)){e.next=9;break}return e.delegateYield(n(r),"t0",6);case 6:r++,e.next=4;break;case 9:console.log(a),i(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(h.Provider,{value:{pokemon:c,setPokemon:i}},t)},v=a(23),x=Object(s.a)(Object(v.a)({mixins:{boxSizing:"border-box"},pokeball:{width:60,height:60,backgroundColor:"#fff",borderRadius:"50%",position:"relative",overflow:"hidden",border:"3px solid",animation:"$".concat("frames"," .8s linear 0s infinite"),"&::after":{content:'""',position:"absolute",width:60,height:30,backgroundColor:"#ff0000ab",borderBottom:"4px solid",top:0},"&::before":{content:'""',position:"absolute",backgroundColor:"#fff",width:20,height:20,border:"4px solid",borderRadius:"50%",bottom:17,right:17,zIndex:1}}},"@keyframes ".concat("frames"),{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}})),w=function(){var e=x();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.pokeball}))},y=a(104),j=a(202),C=a(203),O=a(204),N=a(49),P=a(205),I=a(206),S=a(207),T=Object(n.createContext)(),B=function(){var e=Object(n.useContext)(T);if(!e)throw new Error("useCart must be used within a CartProvider");return{cartList:e.cartList,setCartList:e.setCartList}},L=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(g.a)(a,2),c=o[0],i=o[1];return r.a.createElement(T.Provider,{value:{cartList:c,setCartList:i}},t)},F=a(32),R=a(93),A=a.n(R),z=Object(s.a)((function(e){return{priceSpan:{whiteSpace:"nowrap",color:"rgb(51, 51, 51)",fontSize:"18px"},pokeAmeLogo:{height:25,paddingRight:10,top:10,position:"relative"},percent:{textAlign:"left",lineHeight:1.2,fontSize:"12px"}}})),M=function(e){var t=e.type,a=e.value,o=z(),c=Object(n.useState)(0),i=Object(g.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(0),p=Object(g.a)(u,2),d=p[0],f=p[1],b=function(e){return"R$ ".concat(e)};return Object(n.useEffect)((function(){if(s(a.toFixed(2).replace(".",",")),"pokeame"===t){f((.02*a).toFixed(2).replace(".",","))}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,className:o.emptyCartContainer,direction:"column",justify:"space-between",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(N.a,{className:o.priceSpan,variant:"span",gutterBottom:!0},b(l))),"pokeame"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{item:!0},r.a.createElement(N.a,{className:o.emptyCartText,variant:"caption"},"com  PokeAme")),r.a.createElement(m.a,{item:!0},r.a.createElement("img",{className:o.pokeAmeLogo,src:A.a}),r.a.createElement(N.a,{className:o.emptyCartText,variant:"caption"},"Receba ".concat(b(d)," ")),r.a.createElement(N.a,{className:o.percent,variant:"caption",color:"primary"},"(2% de volta)"))):null))},G=Object(s.a)((function(e){return{cardMedia:{width:"130px",height:"130px",margin:"auto",marginTop:"10px"},cardContent:{textAlign:"center"},cardActions:{padding:0},cardButton:{width:"100%"}}})),H=function(e){var t=e.xs,a=e.sm,n=e.md,o=e.lg,c=e.pokemonId,i=G(),l=E().pokemon,s=B(),u=s.cartList,p=s.setCartList,d=l[c],g=d.id,f=d.name,b=d.image,h=d.price,k=d.types,v=[];return r.a.createElement(m.a,{item:!0,xs:t,sm:a,md:n,lg:o},r.a.createElement(j.a,null,r.a.createElement(C.a,{className:i.cardMedia,image:b}),r.a.createElement(O.a,{className:i.cardContent},r.a.createElement(N.a,null,f),r.a.createElement(N.a,null,r.a.createElement(M,{type:"pokeame",value:h})),r.a.createElement("strong",null,k)),r.a.createElement(P.a,{className:i.cardActions,aligh:"center"},r.a.createElement(I.a,{className:i.cardButton,onClick:function(){return function(e){u.find((function(t){return t===l[e-1]}))?F.ToastsStore.warning("Pokemon ja capturado !"):(v.push.apply(v,Object(y.a)(u).concat([l[e-1]])),p(v))}(g)},startIcon:r.a.createElement(S.a,null),color:"primary"},"Capturar Pokemon"))))},V=a(208),$=a(103),D=Object($.a)({palette:{primary:{main:"#005BAC"}}}),J=(Object($.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object($.a)({palette:{primary:{light:"#97d1f4",main:"#2d92d1",dark:"#2d92d1",contrastText:"#fff"}}}),Object($.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),D),U=(Object(s.a)((function(e){return{cardContainer:{margin:e.spacing(0,0,5,0)},cardContent:{textAlign:"center"},cardActions:{padding:0},cardButton:{width:"100%"}}})),a(228)),q=a(229),W=a(214),Y=a(234),_=a(28),K=a(221),Q=a(235),X=a(94),Z=a.n(X),ee=a(209),te=a(211),ae=a(95),ne=a.n(ae),re=a(210),oe=Object(s.a)((function(e){return{root:Object(v.a)({position:"fixed",bottom:e.spacing(2),right:"315px"},e.breakpoints.down("xs"),{right:e.spacing(2)}),ScrollTopFab:{color:"#fff","&:active":{color:"#000",boxShadow:"none"}}}})),ce=function(e){var t=e.window,a=oe(),n=Object(ee.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(re.a,{in:n},r.a.createElement("div",{onClick:function(e){e.preventDefault();var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},r.a.createElement(te.a,{className:a.ScrollTopFab,color:"primary",size:"small","aria-label":"de volta ao inicio"},r.a.createElement(ne.a,null))))},ie=a(8),le=a(232),se=a(215),me=a(233),ue=a(96),pe=a.n(ue),de=a(97),ge=a.n(de),fe=Object(s.a)((function(e){var t;return{search:(t={position:"relative",backgroundColor:Object(ie.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ie.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(v.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(v.a)(t,"borderRadius",100),t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"0","&:focus":{width:"20ch"}})}})),be=function(e){e.value;var t=fe(),a=E().pokemon;return r.a.createElement(me.a,{id:"search-pokemon",style:{width:300},options:a,getOptionLabel:function(e){return e.name},renderInput:function(e){return r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(se.a,null)),r.a.createElement(le.a,Object.assign({},e,{classes:{root:t.inputRoot,input:t.inputInput},variant:"outlined",label:"Ca\xe7ar Pok\xe9mon...",placeholder:"Escolha alguns Pok\xe9mon ..."})))},renderOption:function(e,t){var a=t.inputValue,n=ge()(e.name,a),o=pe()(e.name,n);return r.a.createElement("div",null,o.map((function(e,t){return r.a.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},console.log(e),e.text)})))}})},he=a(216),Ee=a(213),ke=a(222),ve=a(223),xe=a(224),we=a(236),ye=a(225),je=a(226),Ce=a(227),Oe=a(156),Ne=a(217),Pe=a(218),Ie=a(219),Se=a(220),Te=a(100),Be=a.n(Te),Le=Object(s.a)((function(e){return{dialogContainer:{background:"#f4cd17",textAlign:"center"},buyButton:{position:"absolute",bottom:0,right:0,width:"100%",textAlign:"center",height:"50px",borderRadius:0},pikachuFaceContainer:{padding:"20px 25px 10px"},PikachuFaceImage:{width:"40%"}}})),Fe=r.a.forwardRef((function(e,t){return r.a.createElement(Oe.a,Object.assign({direction:"left",ref:t},e))}));function Re(e){var t=Le(),a=Object(n.useState)(!1),o=Object(g.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(0),s=Object(g.a)(l,2),u=s[0],f=s[1],b=B().setCartList,h=e.resumeBuy,E=function(){i(!0)},k=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:2,f(.02*h);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h>0&&k()}),[e.resumeBuy]),r.a.createElement("div",null,e.resumeBuy?r.a.createElement(I.a,{onClick:E,variant:"contained",className:t.buyButton,color:"primary"},"Finalizar"):r.a.createElement(I.a,{disabled:!0,onClick:E,variant:"contained",className:t.buyButton,color:"primary"},"Finalizar"),r.a.createElement(Ne.a,{open:c,TransitionComponent:Fe,keepMounted:!0,onClose:function(){i(!1),b([])},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement("div",{className:t.dialogContainer},r.a.createElement(m.a,{container:!0,className:t.pikachuFaceContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement("img",{src:Be.a,alt:"PokeStore",className:t.PikachuFaceImage}))),r.a.createElement(Pe.a,{id:"alert-dialog-slide-title"},r.a.createElement(N.a,{className:t.emptyCartText,variant:"h6"},"Obrigado !!!")),r.a.createElement(Ie.a,null,r.a.createElement(Se.a,{id:"alert-dialog-slide-description"},r.a.createElement(N.a,{className:t.emptyCartText,variant:"h8",gutterBottom:!0},"Voce ganhou de volta "),r.a.createElement(M,{value:u}))))))}var Ae=a(101),ze=a.n(Ae),Me=Object(s.a)((function(e){return{toolbar:e.mixins.toolbar,resumeBuy:{position:"absolute",bottom:"55px",right:0,width:"100%",height:"30px",borderTop:"1px solid rgba(0, 0, 0, 0.12)",padding:"0 16px"},avatarContainer:{borderRadius:0},CartIcon:{top:5,height:20,position:"relative",marginRight:10},emptyCartContainer:{marginTop:"45%"},emptyCartImage:{height:"135px"},emptyCartText:{color:"rgba(0, 0, 0, 0.4)"}}})),Ge=function(e){var t=Me(),a=B(),o=a.cartList,c=a.setCartList,i=Object(n.useState)(0),l=Object(g.a)(i,2),s=l[0],u=l[1],f=function(){var e=Object(d.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(o.filter((function(e){return e.id!==t})));case 3:F.ToastsStore.warning("".concat(a," deletado !")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),F.ToastsStore.error("Erro ao deletar !");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.reduce((function(e,t){return e+t.price}),0));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(he.a,{subheader:r.a.createElement(Ee.a,{component:"div",id:"nested-list-subheader"},r.a.createElement(K.a,{className:t.CartIcon}),"Carrinho")},r.a.createElement(ke.a,null),0!==o.length?o.map((function(e,a){return r.a.createElement(ve.a,{key:a},r.a.createElement(xe.a,null,r.a.createElement(we.a,{className:t.avatarContainer,alt:"Pokemon",src:e.image})),r.a.createElement(ye.a,{primary:e.name,secondary:"R$ ".concat(e.price,",00")}),r.a.createElement(je.a,null,r.a.createElement(W.a,{edge:"end","aria-label":"delete",onClick:function(){return f(e.id,e.name)}},r.a.createElement(Ce.a,null))))})):r.a.createElement(m.a,{container:!0,className:t.emptyCartContainer,direction:"column",justify:"space-between",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement("img",{src:ze.a,alt:"carrinho vazio",className:t.emptyCartImage})),r.a.createElement(m.a,{item:!0},r.a.createElement(N.a,{className:t.emptyCartText,variant:"h6"},"Carrinho Vazio . . .")),r.a.createElement(m.a,{item:!0},r.a.createElement(N.a,{className:t.emptyCartText,variant:"caption"},"Para encher, basta capturar alguns pokemon.")))),s?r.a.createElement(m.a,{container:!0,className:t.resumeBuy,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(N.a,null,"Total: ")),r.a.createElement(m.a,{item:!0},r.a.createElement(N.a,null,"R$ ".concat(s,",00")))):"",r.a.createElement(Re,{resumeBuy:s}))},He=Object(s.a)((function(e){return{root:{display:"flex"},logoContainer:Object(v.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),logoImage:Object(v.a)({height:"75px",position:"absolute",top:"5px"},e.breakpoints.down("xs"),{position:"relative",paddingRight:10,height:"45px"}),drawer:Object(v.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),appBar:Object(v.a)({zIndex:"1000000000000",padding:e.spacing(0)},e.breakpoints.up("sm"),{width:"100%",padding:e.spacing(0,2)}),menuButton:Object(v.a)({},e.breakpoints.up("sm"),{display:"none"}),drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(12,5,5,5)}}})),Ve=function(e){var t=e.window,a=e.children,n=He(),o=r.a.useState(!1),c=Object(g.a)(o,2),i=c[0],l=c[1],s=function(){l(!i)},m=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(U.a,{position:"fixed",className:n.appBar},r.a.createElement(q.a,null,r.a.createElement("div",{className:n.logoContainer},r.a.createElement("img",{src:Z.a,alt:"PokeStore",className:n.logoImage})),r.a.createElement(be,null),r.a.createElement(W.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:s,className:n.menuButton},r.a.createElement(K.a,null)))),r.a.createElement("main",{className:n.content},a,r.a.createElement(ce,e)),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(Y.a,{smUp:!0,implementation:"css"},r.a.createElement(Q.a,{container:m,anchor:"right",open:i,onClose:s,onOpen:s,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(Ge,null))),r.a.createElement(Y.a,{xsDown:!0,implementation:"css"},r.a.createElement(_.a,{classes:{paper:n.drawerPaper},variant:"permanent",anchor:"right",open:!0},r.a.createElement(Ge,null)))))},$e=window.innerHeight,De=Object(s.a)((function(e){return{mainContainer:{padding:0},loadingContainer:{height:$e-200}}})),Je=function(e){var t=E(),a=t.pokemon,n=(t.setPokemon,De());return console.log(a.length),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,null,0!==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,spacing:2,className:n.mainContainer},Object.keys(a).map((function(e){return r.a.createElement(H,{pokemonId:e,key:e,xs:12,sm:6,md:4,lg:3})})))):r.a.createElement(m.a,{container:!0,className:n.loadingContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(w,null)))))},Ue=a(66),qe=a(230),We=a(102),Ye=a.n(We),_e=Object(s.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),Ke=function(){var e=Object(l.g)(),t=Object(l.f)(),a=_e();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,null,r.a.createElement(Ue.a,{elevation:2,className:a.root},r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement("img",{src:Ye.a})),r.a.createElement(m.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(qe.a,{color:"action",style:{fontSize:30}})))))))};function Qe(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Je}),r.a.createElement(l.a,{path:"/pokestore",component:Je}),r.a.createElement(l.a,{path:"/pokestore/type/:name",component:Je}),r.a.createElement(l.a,{path:"*",component:Ke})))}var Xe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(L,null,r.a.createElement(Qe,null))))},Ze=a(231);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{theme:J},r.a.createElement("div",{id:"back-to-top-anchor"}),r.a.createElement(Xe,null),r.a.createElement(F.ToastsContainer,{store:F.ToastsStore,position:F.ToastsContainerPosition.TOP_RIGHT,lightBackground:!0}),r.a.createElement(Ze.a,null))),document.getElementById("root"))},93:function(e,t,a){e.exports=a.p+"static/media/pokeAmeLogo.d273d896.png"},94:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.4e4527ac.chunk.js.map