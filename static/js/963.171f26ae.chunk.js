"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[963],{9692:function(e,n,t){t.r(n),t.d(n,{default:function(){return tn}});var a="Title_title__3rmu7",s="Title_part__GfMrt",r=t(184),c=function(){return(0,r.jsxs)("h1",{className:a,children:["Learn to Cook ",(0,r.jsx)("span",{className:s,children:"Tasty Treats'\xa0"}),"Customizable Masterclass"]})},i=t(5861),l=t(9439),o=t(4687),u=t.n(o),p=t(2791),d=t(9705),m=(t(6497),t(8870)),_={wrapper:"SliderCookItem_wrapper__BG-Oo"},h=function(e){var n=e.cook;return(0,r.jsx)("div",{className:_.wrapper,children:(0,r.jsx)("img",{className:_.cook,src:n.imgUrl,loading:"lazy",width:"412",alt:n.name})})},x="SliderTopicInfoItem_topicImg__Nj3dG",f="SliderTopicInfoItem_topicImgPizza__GWLWW",j="SliderTopicInfoItem_topicInfo__QmQ7G",v="SliderTopicInfoItem_blur__rq-jV",g="SliderTopicInfoItem_topicDesc__5Sk6Z",N="SliderTopicInfoItem_topicArea__yDznQ",S=function(e){var n=e.topic,t=e.imgTopicName,a=j,s=x,c=g,i=N,l=v,o=f;return(0,r.jsxs)("div",{className:a,children:[(0,r.jsx)("img",{className:"".concat(s," ").concat(t?o:""),src:n.previewUrl,loading:"lazy",alt:n.name}),(0,r.jsx)("p",{className:c,children:n.name}),(0,r.jsx)("p",{className:i,children:n.area}),(0,r.jsx)("div",{className:l})]})},w="SliderBigTopicItem_wrapper__NardE",y=function(e){var n=e.topic;return(0,r.jsx)("div",{className:w,style:{backgroundImage:"url(".concat(n.previewUrl,")")}})},b=t(1687),k="Slider_slider__r18YZ",I="Slider_slide__m2+Nq",C=function(){var e=(0,p.useState)([]),n=(0,l.Z)(e,2),t=n[0],a=n[1];return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.sZ)();case 3:n=e.sent,a(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsx)(d.tq,{slidesPerView:1,spaceBetween:16,pagination:{clickable:!0},className:k,modules:[m.tl],children:t.map((function(e,n){return(0,r.jsxs)(d.o5,{className:I,children:[(0,r.jsx)(h,{cook:e.cook}),(0,r.jsx)(S,{topic:e.topic,imgTopicName:1===n?"pizza":null}),(0,r.jsx)(y,{topic:e.topic})]})}))})},R=t(445),Z=t(3504),P=t(2918),T="Button_btn__V-qWH",M="Button_orderNowModal__6ZB-L",L=function(){var e=(0,P.d)(),n=e.showModal,t=e.openModal,a=e.closeModal;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:t,className:T,children:"Order now"}),n&&(0,r.jsx)(Z.u,{onClose:a,modalClass:M,children:(0,r.jsx)(R.D,{})})]})},z="Hero_hero__cfzjB",E="Hero_desc__mw354",W="Hero_wrapper__ySlFi",B="Hero_container__7m903",F="Hero_mainWrapper__0gEKH",O=function(){return(0,r.jsx)("section",{className:"".concat(z),children:(0,r.jsx)("div",{className:"".concat(B," container"),children:(0,r.jsxs)("div",{className:F,children:[(0,r.jsxs)("div",{className:W,children:[(0,r.jsx)(c,{}),(0,r.jsx)("p",{className:E,children:"TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step Video Guides. "}),(0,r.jsx)(L,{})]}),(0,r.jsx)(C,{})]})})})},V=t(1087),D=t(2899),A={btn:"CategoryItem_btn__qZoax",selected:"CategoryItem_selected__8w-ry"},H=function(e){var n=e.category,t=e.onChangeCategory,a=e.selectedCategory;return(0,r.jsx)("li",{className:A.item,children:(0,r.jsx)("button",{className:"".concat(A.btn," ").concat(a===n.name?A.selected:""),type:"button",onClick:function(){t(n.name)},children:n.name})},n._id)},Q="Categories_btn__hNQZW",U="Categories_selected__Vl2ma",q="Categories_list__ssUZQ",G=function(){var e,n=(0,p.useState)([]),t=(0,l.Z)(n,2),a=t[0],s=t[1],c=(0,V.lr)(),o=null!==(e=(0,l.Z)(c,1)[0].get("category"))&&void 0!==e?e:"",d=(0,D.a)().updatingSearchParams,m=function(e){d("category",e)};return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.pE)();case 3:n=e.sent,s(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsxs)("section",{children:[(0,r.jsx)("button",{type:"button",className:"".concat(Q," ").concat(""===o?U:""),onClick:function(){m("")},children:"All resipes"}),(0,r.jsx)("ul",{className:q,children:a.map((function(e){return(0,r.jsx)(H,{category:e,onChangeCategory:m,selectedCategory:o})}))})]})},Y=t(9170),K={item:"PopularRecipeItem_item__OtxPH",img:"PopularRecipeItem_img__lxd6W",title:"PopularRecipeItem_title__6lsyg",desc:"PopularRecipeItem_desc__J-rGY"},J=function(e){var n=e.recipeData,t=e.onOpen,a=n._id,s=n.preview,c=n.description,i=n.title;return(0,r.jsxs)("li",{className:K.item,onClick:function(){return t(a)},children:[(0,r.jsx)("img",{src:s,alt:i,width:"64",height:"64",className:K.img}),(0,r.jsxs)("div",{className:K.info,children:[(0,r.jsx)("h4",{className:K.title,children:i}),(0,r.jsx)("p",{className:K.desc,children:c})]})]},a)},X=t(728),$="PopularRecipes_list__NviSS",ee="PopularRecipes_title__ypSVi",ne=function(){var e=(0,p.useState)([]),n=(0,l.Z)(e,2),t=n[0],a=n[1],s=(0,Y.iP)().width,c=(0,P.d)(),o=c.showModal,d=c.handleOpenModal,m=c.handleCloseModal,_=c.searchParams;return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.r1)();case 3:n=e.sent,a(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{className:ee,children:"Popular recipes"}),(0,r.jsx)("ul",{className:$,children:t.map((function(e,n){return s<768&&n>=2?null:(0,r.jsx)(J,{recipeData:e,onOpen:d})}))}),o&&(0,r.jsx)(Z.u,{onClose:m,children:(0,r.jsx)(X.K,{recipeId:_.get("id")})})]})},te={},ae=function(){return(0,r.jsxs)("aside",{className:te.aside,children:[(0,r.jsx)(G,{}),(0,r.jsx)(ne,{})]})},se=t(9434),re=t(6351),ce=t(7873),ie=function(){var e=(0,se.v9)(re.rm),n=(0,D.a)().updatingSearchParams;return(0,r.jsx)(ce.t,{totalRecipes:e,onPageClick:function(e){n("page",e+1)}})},le=t(3433),oe=t(208),ue=t(6930),pe="ResipesList_list__YdQtZ",de=function(e){var n=e.perPage,t=(0,se.I0)(),a=(0,V.lr)(),s=(0,l.Z)(a,1)[0],c=(0,p.useMemo)((function(){return Object.fromEntries((0,le.Z)(s))}),[s]),i=c.page,o=c.title,u=c.category,d=c.area,m=c.ingredient,_=c.time,h=(0,P.d)(),x=h.showModal,f=h.handleOpenModal,j=h.handleCloseModal,v=h.searchParams,g=(0,se.v9)(re.O2);return(0,p.useEffect)((function(){v.get("id")&&f(v.get("id"))}),[]),(0,p.useEffect)((function(){var e={page:null!==i&&void 0!==i?i:1,title:null!==o&&void 0!==o?o:"",category:null!==u&&void 0!==u?u:"",area:null!==d&&void 0!==d?d:"",ingredient:null!==m&&void 0!==m?m:"",time:null!==_&&void 0!==_?_:"",limit:n};t((0,oe.A)(e))}),[t,i,o,u,d,m,_,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ul",{className:pe,children:g.map((function(e){return(0,r.jsx)(ue.x,{recipeData:e})}))}),x&&(0,r.jsx)(Z.u,{onClose:j,children:(0,r.jsx)(X.K,{recipeId:v.get("id")})})]})},me=t(6194),_e={},he=t(7609),xe="NoRecipesFound_container__lXVwI",fe="NoRecipesFound_icon__wfkjx",je="NoRecipesFound_text__7q3x-",ve=function(){return(0,r.jsxs)("div",{className:xe,children:[(0,r.jsx)("svg",{className:fe,width:"97",height:"83",children:(0,r.jsx)("use",{href:"".concat(he.Z,"#chefs-hat")})}),(0,r.jsx)("p",{className:je,children:"Unfortunately, no recipes match the selected filters."})]})},ge=function(){var e=(0,Y.iP)().width,n=(0,p.useState)(e>=1200?9:e>=768?8:e<768?6:void 0),t=(0,l.Z)(n,2),a=t[0],s=t[1],c=(0,se.v9)(re.xU),i=(0,se.v9)(re.rm);return(0,p.useEffect)((function(){e>=1200?s(9):e>=768?s(8):e<768&&s(6)}),[e]),(0,r.jsxs)("section",{className:_e.section,children:[c&&(0,r.jsx)(me.a,{}),!i&&(0,r.jsx)(ve,{}),(0,r.jsx)(de,{perPage:a}),i>a&&(0,r.jsx)(ie,{})]})},Ne=t(763),Se=t.n(Ne),we="LabelName_title__wEG-S",ye=function(e){var n=e.name;return(0,r.jsx)("span",{className:we,children:n})},be="TitleLabel_label__6w7b6",ke="TitleLabel_wrapper__kMIuL",Ie="TitleLabel_input__w9Xk5",Ce="TitleLabel_icon__iVME-",Re=function(){var e,n=(0,V.lr)(),t=(0,l.Z)(n,1)[0],a=(0,D.a)().updatingSearchParams,s=Se().debounce((function(e){e.preventDefault(),a("title",e.target.value)}),300,{leading:!1,trailing:!0});return(0,r.jsxs)("label",{className:be,children:[(0,r.jsx)(ye,{name:"Search"}),(0,r.jsxs)("span",{className:ke,children:[(0,r.jsx)("input",{type:"text",id:"search-key",className:Ie,name:"search-key",defaultValue:null!==(e=t.get("title"))&&void 0!==e?e:"",placeholder:"Enter text",onInput:s}),(0,r.jsx)("svg",{className:"icon ".concat(Ce),width:"18px",height:"18px",children:(0,r.jsx)("use",{href:"".concat(he.Z,"#search")})})]})]})},Ze=t(1315),Pe=(t(209),t(8617)),Te="Select_container__LlxKB",Me="Select_wrapper__+QvDZ",Le="Select_control__h95jl",ze="Select_placeholder__VAzJN",Ee="Select_menu__1YqJg",We=function(e){var n,t=e.options,a=e.placeholder,s=e.onSelect,c=e.filterToReset,i=(0,V.lr)(),o=(0,l.Z)(i,1)[0];return(0,r.jsx)("div",{className:Te,children:(0,r.jsx)(Ze.Z,{options:t,placeholder:a,value:null!==(n=o.get(c))&&void 0!==n?n:"",className:Me,controlClassName:Le,placeholderClassName:ze,menuClassName:Ee,onChange:function(e){s(e)},arrowClosed:(0,r.jsx)("span",{className:"arrow-open",children:(0,r.jsx)(Pe.kWQ,{size:18,color:"var(--filter-text-color)"})}),arrowOpen:(0,r.jsx)("span",{className:"arrow-open",children:(0,r.jsx)(Pe.ALZ,{size:18,color:"var(--filter-text-color)"})})})})},Be="TimeLabel_label__xXzIl",Fe=function(e){var n=e.onReset,t=e.optionStyles,a=(0,D.a)().updatingSearchParams,s=Array.from({length:24},(function(e,n){return{value:"".concat(5*n+5),label:"".concat(5*n+5," min"),className:t}}));return(0,r.jsxs)("label",{className:Be,children:[(0,r.jsx)(ye,{name:"Time"}),(0,r.jsx)(We,{options:s,placeholder:"0 min",onSelect:function(e){a("time",e.value)},onReset:n,filterToReset:"time"})]})},Oe="AreaLabel_label__2fWfv",Ve=function(e){var n=e.onReset,t=e.optionStyles,a=(0,p.useState)([]),s=(0,l.Z)(a,2),c=s[0],o=s[1],d=(0,D.a)().updatingSearchParams;(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.s4)();case 3:n=e.sent,a=n.map((function(e){return{value:e.name,label:e.name,className:t}})),o(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return(0,r.jsxs)("label",{className:Oe,children:[(0,r.jsx)(ye,{name:"Area"}),(0,r.jsx)(We,{options:c,placeholder:"Region",onSelect:function(e){d("area",e.value)},onReset:n,filterToReset:"area"})]})},De="IngredientsLabel_label__VjfI2",Ae=function(e){var n=e.onReset,t=e.optionStyles,a=(0,D.a)().updatingSearchParams,s=(0,p.useState)([]),c=(0,l.Z)(s,2),o=c[0],d=c[1];(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.D8)();case 2:n=e.sent,a=n.map((function(e){return{value:e._id,label:e.name,className:t}})),d(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return(0,r.jsxs)("label",{className:De,children:[(0,r.jsx)(ye,{name:"Ingredients"}),(0,r.jsx)(We,{options:o,placeholder:"Product",onSelect:function(e){a("ingredient",e.value)},onReset:n,filterToReset:"ingredient"})]})},He="FilterReset_btn__kqU6a",Qe=function(){return(0,r.jsxs)("button",{className:He,type:"reset",children:[(0,r.jsx)("svg",{width:"16",height:"16",children:(0,r.jsx)("use",{href:"".concat(he.Z,"#search-close")})}),(0,r.jsx)("span",{children:"Reset the filter"})]})},Ue="SearchForm_form__y2HDd",qe="SearchForm_container__U24gR",Ge="SearchForm_option__r3MWn",Ye=function(){var e=(0,D.a)(),n=e.updatingSearchParams,t=e.updatingAllSearchParams,a=function(e){n("".concat(e),"")};return(0,r.jsxs)("form",{className:Ue,onReset:function(){t()},children:[(0,r.jsxs)("span",{className:qe,children:[(0,r.jsx)(Re,{}),(0,r.jsx)(Fe,{onReset:a,optionStyles:Ge}),(0,r.jsx)(Ve,{onReset:a,optionStyles:Ge}),(0,r.jsx)(Ae,{onReset:a,optionStyles:Ge})]}),(0,r.jsx)(Qe,{onReset:a})]})},Ke={},Je=function(){return(0,r.jsx)("section",{className:Ke.section,children:(0,r.jsx)("div",{className:Ke.container,children:(0,r.jsx)(Ye,{})})})},Xe="MainWrapper_mainWrapper__UrSzc",$e="MainWrapper_leftBlock__YpPWB",en="MainWrapper_rightBlock__+RL-Q",nn=function(){return(0,r.jsxs)("div",{className:"".concat(Xe," container"),children:[(0,r.jsx)("div",{className:$e,children:(0,r.jsx)(ae,{})}),(0,r.jsxs)("div",{className:en,children:[(0,r.jsx)(Je,{}),(0,r.jsx)(ge,{})]})]})},tn=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(nn,{})]})}}}]);
//# sourceMappingURL=963.171f26ae.chunk.js.map