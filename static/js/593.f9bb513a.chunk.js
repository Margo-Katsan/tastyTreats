"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{3975:function(e,t,n){n.r(t),n.d(t,{default:function(){return $e}});var a="Title_title__3rmu7",s="Title_part__GfMrt",r=n(184),c=function(){return(0,r.jsxs)("h1",{className:a,children:["Learn to Cook ",(0,r.jsx)("span",{className:s,children:"Tasty Treats'\xa0"}),"Customizable Masterclass"]})},i=n(5861),l=n(9439),o=n(4687),u=n.n(o),p=n(2791),d=n(9705),m=(n(6497),n(8870)),_={wrapper:"SliderCookItem_wrapper__BG-Oo"},h=function(e){var t=e.cook;return(0,r.jsx)("div",{className:_.wrapper,children:(0,r.jsx)("img",{className:_.cook,src:t.imgUrl,loading:"lazy",width:"412",alt:t.name})})},f="SliderTopicInfoItem_topicImg__Nj3dG",x="SliderTopicInfoItem_topicImgPizza__GWLWW",j="SliderTopicInfoItem_topicInfo__QmQ7G",v="SliderTopicInfoItem_blur__rq-jV",g="SliderTopicInfoItem_topicDesc__5Sk6Z",N="SliderTopicInfoItem_topicArea__yDznQ",S=function(e){var t=e.topic,n=e.imgTopicName,a=j,s=f,c=g,i=N,l=v,o=x;return(0,r.jsxs)("div",{className:a,children:[(0,r.jsx)("img",{className:"".concat(s," ").concat(n?o:""),src:t.previewUrl,loading:"lazy",alt:t.name}),(0,r.jsx)("p",{className:c,children:t.name}),(0,r.jsx)("p",{className:i,children:t.area}),(0,r.jsx)("div",{className:l})]})},w="SliderBigTopicItem_wrapper__NardE",y=function(e){var t=e.topic;return(0,r.jsx)("div",{className:w,style:{backgroundImage:"url(".concat(t.previewUrl,")")}})},b=n(1687),k="Slider_slider__r18YZ",C="Slider_slide__m2+Nq",I=function(){var e=(0,p.useState)([]),t=(0,l.Z)(e,2),n=t[0],a=t[1];return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.sZ)();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsx)(d.tq,{loop:!0,slidesPerView:"auto",spaceBetween:8,slidesPerGroup:3,breakpoints:{768:{spaceBetween:16}},pagination:{clickable:!0},className:k,modules:[m.tl],children:n.map((function(e,t){return[(0,r.jsx)(d.o5,{className:C,style:{width:"fit-content"},children:(0,r.jsx)(h,{cook:e.cook})}),(0,r.jsx)(d.o5,{className:C,style:{width:"fit-content"},children:(0,r.jsx)(S,{topic:e.topic,imgTopicName:1===t?"pizza":null})}),(0,r.jsx)(d.o5,{className:C,style:{width:"fit-content"},children:(0,r.jsx)(y,{topic:e.topic})})]}))})},R=n(445),Z=n(3504),P=n(2918),T="Button_btn__V-qWH",M="Button_orderNowModal__6ZB-L",L=function(){var e=(0,P.d)(),t=e.showModal,n=e.openModal,a=e.closeModal;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:n,className:T,children:"Order now"}),(0,r.jsx)(Z.u,{showModal:t,onClose:a,modalClass:M,children:(0,r.jsx)(R.D,{})})]})},O="Hero_hero__cfzjB",z="Hero_desc__mw354",W="Hero_wrapper__ySlFi",E="Hero_container__7m903",B="Hero_mainWrapper__0gEKH",D=function(){return(0,r.jsx)("section",{className:"".concat(O),children:(0,r.jsx)("div",{className:"".concat(E," container"),children:(0,r.jsxs)("div",{className:B,children:[(0,r.jsxs)("div",{className:W,children:[(0,r.jsx)(c,{}),(0,r.jsx)("p",{className:z,children:"TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step Video Guides. "}),(0,r.jsx)(L,{})]}),(0,r.jsx)(I,{})]})})})},A=n(1087),G=n(2899),H={btn:"CategoryItem_btn__qZoax",selected:"CategoryItem_selected__8w-ry"},Q=function(e){var t=e.category,n=e.onChangeCategory,a=e.selectedCategory;return(0,r.jsx)("li",{className:H.item,children:(0,r.jsx)("button",{className:"".concat(H.btn," ").concat(a===t.name?H.selected:""),type:"button",onClick:function(){n(t.name)},children:t.name})},t._id)},V="Categories_btn__hNQZW",F="Categories_selected__Vl2ma",U="Categories_list__ssUZQ",q=function(){var e,t=(0,p.useState)([]),n=(0,l.Z)(t,2),a=n[0],s=n[1],c=(0,A.lr)(),o=null!==(e=(0,l.Z)(c,1)[0].get("category"))&&void 0!==e?e:"",d=(0,G.a)().updatingSearchParams,m=function(e){d("category",e)};return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.pE)();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsxs)("section",{children:[(0,r.jsx)("button",{type:"button",className:"".concat(V," ").concat(""===o?F:""),onClick:function(){m("")},children:"All resipes"}),(0,r.jsx)("ul",{className:U,children:a.map((function(e){return(0,r.jsx)(Q,{category:e,onChangeCategory:m,selectedCategory:o})}))})]})},Y=n(9170),J={item:"PopularRecipeItem_item__OtxPH",img:"PopularRecipeItem_img__lxd6W",title:"PopularRecipeItem_title__6lsyg",desc:"PopularRecipeItem_desc__J-rGY"},K=function(e){var t=e.recipeData,n=e.onOpen,a=t._id,s=t.preview,c=t.description,i=t.title;return(0,r.jsxs)("li",{className:J.item,onClick:function(){return n(a)},children:[(0,r.jsx)("img",{src:s,alt:i,width:"64",height:"64",className:J.img}),(0,r.jsxs)("div",{className:J.info,children:[(0,r.jsx)("h4",{className:J.title,children:i}),(0,r.jsx)("p",{className:J.desc,children:c})]})]},a)},X=n(728),$="PopularRecipes_list__NviSS",ee="PopularRecipes_title__ypSVi",te=function(){var e=(0,p.useState)([]),t=(0,l.Z)(e,2),n=t[0],a=t[1],s=(0,Y.iP)().width,c=(0,P.d)(),o=c.showModal,d=c.handleOpenModal,m=c.handleCloseModal,_=c.searchParams;return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.r1)();case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{className:ee,children:"Popular recipes"}),(0,r.jsx)("ul",{className:$,children:n.map((function(e,t){return s<768&&t>=2?null:(0,r.jsx)(K,{recipeData:e,onOpen:d})}))}),(0,r.jsx)(Z.u,{showModal:o,onClose:m,children:(0,r.jsx)(X.K,{recipeId:_.get("id")})})]})},ne={},ae=function(){return(0,r.jsxs)("aside",{className:ne.aside,children:[(0,r.jsx)(q,{}),(0,r.jsx)(te,{})]})},se=n(9434),re=n(6351),ce=n(7873),ie=function(){var e=(0,se.v9)(re.rm),t=(0,G.a)().updatingSearchParams;return(0,r.jsx)(ce.t,{totalRecipes:e,onPageClick:function(e){t("page",e+1)}})},le=n(3433),oe=n(208),ue=n(6930),pe="ResipesList_list__YdQtZ",de=function(){var e=(0,Y.iP)().width,t=(0,se.I0)(),n=(0,A.lr)(),a=(0,l.Z)(n,1)[0],s=(0,p.useMemo)((function(){return Object.fromEntries((0,le.Z)(a))}),[a]),c=s.page,i=s.title,o=s.category,u=s.area,d=s.ingredient,m=s.time,_=(0,p.useState)(e>=1200?9:e>=768?8:e<768?6:void 0),h=(0,l.Z)(_,2),f=h[0],x=h[1],j=(0,se.v9)(re.O2);return(0,p.useEffect)((function(){e>=1200?x(9):e>=768?x(8):e<768&&x(6)}),[e]),(0,p.useEffect)((function(){var e={page:null!==c&&void 0!==c?c:1,title:null!==i&&void 0!==i?i:"",category:null!==o&&void 0!==o?o:"",area:null!==u&&void 0!==u?u:"",ingredient:null!==d&&void 0!==d?d:"",time:null!==m&&void 0!==m?m:"",limit:f};t((0,oe.A)(e))}),[t,c,i,o,u,d,m,f]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{className:pe,children:j.map((function(e){return(0,r.jsx)(ue.x,{recipeData:e})}))})})},me=n(6194),_e={},he=function(){var e=(0,se.v9)(re.xU);return(0,r.jsxs)("section",{className:_e.section,children:[e&&(0,r.jsx)(me.a,{}),(0,r.jsx)(de,{}),(0,r.jsx)(ie,{})]})},fe=n(763),xe=n.n(fe),je="LabelName_title__wEG-S",ve=function(e){var t=e.name;return(0,r.jsx)("span",{className:je,children:t})},ge=n(7609),Ne="TitleLabel_label__6w7b6",Se="TitleLabel_wrapper__kMIuL",we="TitleLabel_input__w9Xk5",ye="TitleLabel_icon__iVME-",be=function(){var e=(0,G.a)().updatingSearchParams,t=xe().debounce((function(t){t.preventDefault(),e("title",t.target.value)}),300,{leading:!1,trailing:!0});return(0,r.jsxs)("label",{className:Ne,children:[(0,r.jsx)(ve,{name:"Search"}),(0,r.jsxs)("span",{className:Se,children:[(0,r.jsx)("input",{type:"text",id:"search-key",className:we,name:"search-key",placeholder:"Enter text",onInput:t}),(0,r.jsx)("svg",{className:"icon ".concat(ye),width:"18px",height:"18px",children:(0,r.jsx)("use",{href:"".concat(ge.Z,"#search")})})]})]})},ke=n(1315),Ce=(n(209),n(8617)),Ie="Select_container__LlxKB",Re="Select_close__vendP",Ze="Select_wrapper__+QvDZ",Pe="Select_control__h95jl",Te="Select_placeholder__VAzJN",Me="Select_menu__1YqJg",Le=function(e){var t=e.options,n=e.placeholder,a=e.onSelect,s=e.onReset,c=e.filterToReset,i=function(e){var t=(0,p.useState)({value:"",label:e}),n=(0,l.Z)(t,2),a=n[0],s=n[1],r=(0,p.useState)(!1),c=(0,l.Z)(r,2),i=c[0],o=c[1];return{selectedOption:a,isSelect:i,handleResetSelectedOption:function(e){o(!1),s(e)},handleChangeSelectedOption:function(e){o(!0),s(e.value)}}}(n),o=i.selectedOption,u=i.isSelect,d=i.handleResetSelectedOption,m=i.handleChangeSelectedOption;return(0,r.jsxs)("div",{className:Ie,children:[(0,r.jsx)(ke.Z,{options:t,placeholder:n,value:o,className:Ze,controlClassName:Pe,placeholderClassName:Te,menuClassName:Me,onChange:function(e){a(e),m(e)},arrowClosed:(0,r.jsx)("span",{className:"arrow-open",children:(0,r.jsx)(Ce.kWQ,{size:18,color:"var(--filter-text-color)"})}),arrowOpen:(0,r.jsx)("span",{className:"arrow-open",children:(0,r.jsx)(Ce.ALZ,{size:18,color:"var(--filter-text-color)"})})}),u&&(0,r.jsx)("span",{className:Re,children:(0,r.jsx)("svg",{width:"16",height:"16",fill:"rgba(5, 5, 5, 0.5)",onClick:function(){s(c),d({value:"",label:n})},children:(0,r.jsx)("use",{href:"".concat(ge.Z,"#search-close")})})})]})},Oe="TimeLabel_label__xXzIl",ze=function(e){var t=e.onReset,n=e.optionStyles,a=(0,G.a)().updatingSearchParams,s=Array.from({length:24},(function(e,t){return{value:"".concat(5*t+5),label:"".concat(5*t+5," min"),className:n}}));return(0,r.jsxs)("label",{className:Oe,children:[(0,r.jsx)(ve,{name:"Time"}),(0,r.jsx)(Le,{options:s,placeholder:"0 min",onSelect:function(e){a("time",e.value)},onReset:t,filterToReset:"time"})]})},We="AreaLabel_label__2fWfv",Ee=function(e){var t=e.onReset,n=e.optionStyles,a=(0,p.useState)([]),s=(0,l.Z)(a,2),c=s[0],o=s[1],d=(0,G.a)().updatingSearchParams;(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.s4)();case 3:t=e.sent,a=t.map((function(e){return{value:e.name,label:e.name,className:n}})),o(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return(0,r.jsxs)("label",{className:We,children:[(0,r.jsx)(ve,{name:"Area"}),(0,r.jsx)(Le,{options:c,placeholder:"Region",onSelect:function(e){d("area",e.value)},onReset:t,filterToReset:"area"})]})},Be="IngredientsLabel_label__VjfI2",De=function(e){var t=e.onReset,n=e.optionStyles,a=(0,G.a)().updatingSearchParams,s=(0,p.useState)([]),c=(0,l.Z)(s,2),o=c[0],d=c[1];(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.D8)();case 2:t=e.sent,a=t.map((function(e){return{value:e._id,label:e.name,className:n}})),d(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return(0,r.jsxs)("label",{className:Be,children:[(0,r.jsx)(ve,{name:"Ingredients"}),(0,r.jsx)(Le,{options:o,placeholder:"Product",onSelect:function(e){a("ingredient",e.value)},onReset:t,filterToReset:"ingredient"})]})},Ae="FilterReset_btn__kqU6a",Ge=function(){return(0,r.jsxs)("button",{className:Ae,type:"reset",children:[(0,r.jsx)("svg",{width:"16",height:"16",children:(0,r.jsx)("use",{href:"".concat(ge.Z,"#search-close")})}),(0,r.jsx)("span",{children:"Reset the filter"})]})},He="SearchForm_form__y2HDd",Qe="SearchForm_container__U24gR",Ve="SearchForm_option__r3MWn",Fe=function(){var e=(0,G.a)(),t=e.updatingSearchParams,n=e.updatingAllSearchParams,a=function(e){t("".concat(e),"")};return(0,r.jsxs)("form",{className:He,onReset:function(){n()},children:[(0,r.jsxs)("span",{className:Qe,children:[(0,r.jsx)(be,{}),(0,r.jsx)(ze,{onReset:a,optionStyles:Ve}),(0,r.jsx)(Ee,{onReset:a,optionStyles:Ve}),(0,r.jsx)(De,{onReset:a,optionStyles:Ve})]}),(0,r.jsx)(Ge,{onReset:a})]})},Ue={},qe=function(){return(0,r.jsx)("section",{className:Ue.section,children:(0,r.jsx)("div",{className:Ue.container,children:(0,r.jsx)(Fe,{})})})},Ye="MainWrapper_mainWrapper__UrSzc",Je="MainWrapper_leftBlock__YpPWB",Ke="MainWrapper_rightBlock__+RL-Q",Xe=function(){return(0,r.jsxs)("div",{className:"".concat(Ye," container"),children:[(0,r.jsx)("div",{className:Je,children:(0,r.jsx)(ae,{})}),(0,r.jsxs)("div",{className:Ke,children:[(0,r.jsx)(qe,{}),(0,r.jsx)(he,{})]})]})},$e=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(Xe,{})]})}}}]);
//# sourceMappingURL=593.f9bb513a.chunk.js.map