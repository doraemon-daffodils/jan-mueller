(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h}));n(8),n(7),n(11),n(13),n(10),n(14);var r=n(2);n(46),n(31),n(65),n(66),n(24);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={home:{title:"home.title",to:"/",icon:"mdi-home"},projects:{title:"projects.title",to:"/projects",icon:"mdi-code-tags"},blog:{title:"blog.title",to:"/blog",icon:"mdi-pen"},about:{title:"about.title",to:"/about",icon:"mdi-file-document"}};function d(t,e){var n="en"===e?"/":"/".concat(e,"/");return t.map((function(t){return l(l({},t),{},{path:t.path.replace("/en/",n)})}))}function h(t,e){if(null!==t){var n="en"===e?"/":"/".concat(e,"/");return l(l({},t),{},{path:t.path.replace("/en/",n)})}}},217:function(t,e,n){"use strict";var r=n(1),o=n(311);r.default.use(o.a)},279:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5eb631ce",content,!0,{sourceMap:!1})},280:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("59ee0068",content,!0,{sourceMap:!1})},281:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5ff4ef78",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);n(46);var r=n(39),o=Object(r.a)({computed:{breadcrumbs:function(){var t=this,e=this.$i18n.locale,n=this.$store.state.breadcrumbs;return n.length<2?[]:n.map((function(r,o){return{text:r.text,to:t.localePath(r.to,e),disabled:o>=n.length-1}}))}}}),l=(n(420),n(30)),c=n(34),d=n.n(c),h=n(563),m=n(306),v=n(207),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.breadcrumbs,nuxt:"true",large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("v-breadcrumbs-item",{staticClass:"unselectable",attrs:{to:r.to,disabled:r.disabled,exact:!0}},[r.text.startsWith("mdi-")?n("v-icon",{staticClass:"text--primary",domProps:{textContent:t._s(r.text)}}):[t._v("\n        "+t._s(t.$t(r.text))+"\n      ")]],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBreadcrumbs:h.a,VBreadcrumbsItem:m.a,VIcon:v.a})},316:function(t,e,n){"use strict";var r=n(39),o=n(83),l=Object(r.a)({data:function(){return{drawerOpen:!1}},head:function(){return{htmlAttrs:{lang:this.$i18n.locale},meta:[{hid:"description",name:"description",content:this.$t("meta.description")}],link:[{rel:"canonical",href:"https://jan-mueller.at".concat(this.$route.path,"/")}]}},computed:Object(o.c)(["breadcrumbs"]),methods:{toggleDrawer:function(){this.drawerOpen=!this.drawerOpen}}}),c=n(30),d=n(34),h=n.n(d),m=n(557),v=n(564),f=n(558),x=n(562),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"","expand-on-hover":t.$vuetify.breakpoint.lgAndUp},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{attrs:{"drawer-open":t.drawerOpen,"on-nav-icon-clicked":t.toggleDrawer}}),t._v(" "),n("v-main",[t.$vuetify.breakpoint.mdAndDown&&t.breadcrumbs.length>0?n("breadcrumbs",{staticClass:"pa-3"}):t._e(),t._v(" "),n("v-container",{staticClass:"page-container"},[n("nuxt")],1)],1),t._v(" "),n("app-footer")],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{AppSidebar:n(540).default,AppHeader:n(535).default,Breadcrumbs:n(301).default,AppFooter:n(542).default}),h()(component,{VApp:m.a,VContainer:v.a,VMain:f.a,VNavigationDrawer:x.a})},319:function(t,e,n){t.exports=n.p+"img/logo.7275089.svg"},327:function(t,e,n){n(328),n(329),t.exports=n(333)},382:function(t,e,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("736e5d00",content,!0,{sourceMap:!1})},383:function(t,e,n){var r=n(18)(!1);r.push([t.i,'.bitter-font,h1,h2,h3,h4,h5,h6{font-family:"Bitter",serif!important}h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2.5rem,3vw,3.5rem);margin-bottom:1rem}h2{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}p{line-height:1.6}.justify-text p{-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;text-align:justify}html{overflow-y:auto!important;overflow-x:hidden!important}.v-application a{text-decoration:none}.v-application a:hover{color:var(--v-secondary-base)}.unselectable,.v-btn,article .nuxt-content-highlight .filename{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page-container{display:flex;justify-content:center;height:100%}.bound-width,article{max-width:960px!important}article{margin:auto}article .nuxt-content-highlight,article ul,article video{margin-bottom:1rem}article .nuxt-content-highlight{position:relative;border-radius:3px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}article .nuxt-content-highlight+p{margin-top:1rem}article .nuxt-content-highlight code{all:unset!important}article .nuxt-content-highlight pre{border-radius:3px}article .nuxt-content-highlight .filename{position:absolute;right:0;top:0;z-index:1;margin-right:.5rem;margin-top:.25rem;font-weight:300;font-size:.875rem;color:#c3cee3}@media(max-width:960px){article .nuxt-content-highlight,article iframe{margin-left:-12px;margin-right:-12px}article iframe{width:calc(100% + 24px)}article .nuxt-content-highlight pre{border-radius:0}}.masonry-wall{width:100%}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem}.responsive-list>*{margin-top:1rem}.responsive-list>:not(:last-child){margin-right:1rem}.svg-icon{font-size:0}.v-footer,.v-toolbar__content{display:flex}.v-footer>div,.v-toolbar__content>div{flex:1}.v-footer div:first-child>*,.v-toolbar__content div:first-child>*{margin-right:auto}.v-footer div:last-child>*,.v-toolbar__content div:last-child>*{margin-left:auto}',""]),t.exports=r},420:function(t,e,n){"use strict";n(279)},421:function(t,e,n){var r=n(18)(!1);r.push([t.i,".breadcrumbs li .v-icon{font-size:1.5rem}.breadcrumbs a{font-weight:700}.breadcrumbs a:not(.v-breadcrumbs__item--disabled){color:unset}",""]),t.exports=r},424:function(t,e,n){"use strict";n(280)},425:function(t,e,n){var r=n(18)(!1);r.push([t.i,".search-input{max-width:16rem}",""]),t.exports=r},441:function(t,e,n){"use strict";n(281)},442:function(t,e,n){var r=n(18)(!1);r.push([t.i,'.bitter-font[data-v-54d7916a],h1[data-v-54d7916a],h2[data-v-54d7916a],h3[data-v-54d7916a],h4[data-v-54d7916a],h5[data-v-54d7916a],h6[data-v-54d7916a]{font-family:"Bitter",serif!important}h1[data-v-54d7916a],h2[data-v-54d7916a],h3[data-v-54d7916a],h4[data-v-54d7916a],h5[data-v-54d7916a],h6[data-v-54d7916a]{line-height:1.2}h1[data-v-54d7916a]{font-size:clamp(2.5rem,3vw,3.5rem);margin-bottom:1rem}h2[data-v-54d7916a]{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3[data-v-54d7916a]{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}p[data-v-54d7916a]{line-height:1.6}.justify-text p[data-v-54d7916a]{-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;text-align:justify}html[data-v-54d7916a]{overflow-y:auto!important;overflow-x:hidden!important}.v-application a[data-v-54d7916a]{text-decoration:none}.v-application a[data-v-54d7916a]:hover{color:var(--v-secondary-base)}.unselectable[data-v-54d7916a],.v-btn[data-v-54d7916a],article .nuxt-content-highlight .filename[data-v-54d7916a],img[data-v-54d7916a]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page-container[data-v-54d7916a]{display:flex;justify-content:center;height:100%}.bound-width[data-v-54d7916a],article[data-v-54d7916a]{max-width:960px!important}article[data-v-54d7916a]{margin:auto}article .nuxt-content-highlight[data-v-54d7916a],article ul[data-v-54d7916a],article video[data-v-54d7916a]{margin-bottom:1rem}article .nuxt-content-highlight[data-v-54d7916a]{position:relative;border-radius:3px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}article .nuxt-content-highlight+p[data-v-54d7916a]{margin-top:1rem}article .nuxt-content-highlight code[data-v-54d7916a]{all:unset!important}article .nuxt-content-highlight pre[data-v-54d7916a]{border-radius:3px}article .nuxt-content-highlight .filename[data-v-54d7916a]{position:absolute;right:0;top:0;z-index:1;margin-right:.5rem;margin-top:.25rem;font-weight:300;font-size:.875rem;color:#c3cee3}@media(max-width:960px){article .nuxt-content-highlight[data-v-54d7916a],article iframe[data-v-54d7916a]{margin-left:-12px;margin-right:-12px}article iframe[data-v-54d7916a]{width:calc(100% + 24px)}article .nuxt-content-highlight pre[data-v-54d7916a]{border-radius:0}}.masonry-wall[data-v-54d7916a]{width:100%}.responsive-list[data-v-54d7916a]{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem}.responsive-list>*[data-v-54d7916a]{margin-top:1rem}.responsive-list[data-v-54d7916a]>:not(:last-child){margin-right:1rem}.svg-icon[data-v-54d7916a]{font-size:0}.v-footer[data-v-54d7916a],.v-toolbar__content[data-v-54d7916a]{display:flex}.v-footer>div[data-v-54d7916a],.v-toolbar__content>div[data-v-54d7916a]{flex:1}.v-footer div:first-child>*[data-v-54d7916a],.v-toolbar__content div:first-child>*[data-v-54d7916a]{margin-right:auto}.v-footer div:last-child>*[data-v-54d7916a],.v-toolbar__content div:last-child>*[data-v-54d7916a]{margin-left:auto}.logo-container[data-v-54d7916a]{width:48px;height:48px}img[data-v-54d7916a]{width:36px;height:36px;margin:6px}',""]),t.exports=r},467:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{useDarkTheme:!0,breadcrumbs:[]}},o={setBreadcrumbs:function(t,e){t.breadcrumbs=e},loadTheme:function(t){var e=localStorage.getItem("useDarkTheme");null===e&&localStorage.setItem("useDarkTheme",String(t.useDarkTheme)),t.useDarkTheme=e!==String(!1)},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme,localStorage.setItem("useDarkTheme",String(t.useDarkTheme))}}},534:function(t,e,n){"use strict";n.r(e);n(156);var r=n(39),o=n(137),l=Object(r.a)({setup:function(){return{routes:Object.values(o.c)}}}),c=n(30),d=n(34),h=n.n(d),m=n(207),v=n(131),f=n(50),x=n(212),_=n(112),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",[t._l(t.routes,(function(e,r){return n("v-list-item",{key:r,attrs:{to:t.localePath(e.to),exact:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)})),t._v(" "),n("source-repository-link")],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{SourceRepositoryLink:n(541).default}),h()(component,{VIcon:m.a,VListItem:v.a,VListItemContent:f.a,VListItemGroup:x.a,VListItemIcon:_.a,VListItemTitle:f.b})},535:function(t,e,n){"use strict";n.r(e);var r=n(39),o=Object(r.a)({props:{drawerOpen:{type:Boolean,required:!0},onNavIconClicked:{type:Function,required:!0}}}),l=n(30),c=n(34),d=n.n(c),h=n(561),m=n(555),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{fixed:"",app:"","elevate-on-scroll":"",dense:"",color:t.$vuetify.theme.dark?"#121212":"white"}},[n("div",{class:{"ml-n4":t.$vuetify.breakpoint.mdAndDown}},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],attrs:{"aria-label":t.$t(t.drawerOpen?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return e.stopPropagation(),t.onNavIconClicked()}}}),t._v(" "),n("breadcrumbs",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgAndUp,expression:"$vuetify.breakpoint.lgAndUp"}],staticClass:"pa-0"})],1),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"center"},style:t.$vuetify.breakpoint.mdAndDown?"flex-basis: auto":"margin-left: -56px"},[n("content-search")],1),t._v(" "),n("div",{staticStyle:{"margin-right":"-16px"}},[n("logo")],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{Breadcrumbs:n(301).default,ContentSearch:n(536).default,Logo:n(537).default}),d()(component,{VAppBar:h.a,VAppBarNavIcon:m.a})},536:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(17),l=(n(24),n(31),n(152),n(74),n(39)),c=n(137),d=Object(l.a)({data:function(){return{results:[],query:"",showResults:!1}},computed:{currentLocale:function(){return this.$i18n.locale}},watch:{currentLocale:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(e.query,t);case 2:case"end":return n.stop()}}),n)})))()},query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(t,e.currentLocale);case 2:case"end":return n.stop()}}),n)})))()}},methods:{updateSearchResults:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=3;break}return n.results=[],o.abrupt("return");case 3:return o.t0=c.b,o.t1=[],o.t2=r.a,o.next=8,n.$content("en/blog",{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 8:return o.t3=o.sent,o.t4=(0,o.t2)(o.t3),o.t5=r.a,o.next=13,n.$content("en/projects",{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 13:o.t6=o.sent,o.t7=(0,o.t5)(o.t6),o.t8=o.t1.concat.call(o.t1,o.t4,o.t7),o.t9=e,n.results=(0,o.t0)(o.t8,o.t9);case 18:case"end":return o.stop()}}),o)})))()},reset:function(){this.query="",this.showResults=!1}}}),h=(n(424),n(30)),m=n(34),v=n.n(m),f=n(208),x=n(131),_=n(50),w=n(560),y=n(559),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{value:t.showResults,"offset-y":"",bottom:"",rounded:"xl","open-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"search-input unselectable",attrs:{dense:"",rounded:"",filled:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("actions.search")},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},"v-text-field",o,!1),r))]}}])},[t._v(" "),t.results.length>0?n("v-list",t._l(t.results,(function(e){return n("v-list-item",{key:e.path,attrs:{to:e.path,width:"100%"},on:{click:function(e){return t.reset()}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):n("v-list",[n("v-list-item",[t._v(t._s(t.$t("misc.no-results")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VList:f.a,VListItem:x.a,VListItemTitle:_.b,VMenu:w.a,VTextField:y.a})},537:function(t,e,n){"use strict";n.r(e);var r=n(39),o=Object(r.a)({data:function(){return{logo:n(319)}}}),l=(n(441),n(30)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,"54d7916a",null);e.default=component.exports},538:function(t,e,n){"use strict";n.r(e);var r=n(39),o=n(83),l=Object(r.a)({computed:Object(o.c)(["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){this.$store.commit("loadTheme")},methods:Object(o.b)(["toggleTheme"])}),c=n(30),d=n(34),h=n.n(d),m=n(307),v=n(207),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","x-small":"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:m.a,VIcon:v.a})},539:function(t,e,n){"use strict";n.r(e);var r=n(39),o=Object(r.a)({data:function(){return{locales:[{code:"de",name:"DE"},{code:"en",name:"EN"}]}}}),l=n(30),c=n(34),d=n.n(c),h=n(307),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"max-content"}},t._l(t.locales,(function(e){return n("v-btn",{key:e.code,attrs:{plain:"","x-small":"",to:t.switchLocalePath(e.code)}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a})},540:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n(34),l=n.n(o),c=n(208),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-list",{attrs:{dense:"",nav:""}},[e("app-navigation")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppNavigation:n(534).default}),l()(component,{VList:c.a})},541:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n(34),l=n.n(o),c=n(207),d=n(131),h=n(50),m=n(112),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{staticClass:"unselectable source-link-container",attrs:{rel:"noopener",href:"https://github.com/DerYeger/jan-mueller",target:"_blank"}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-github")}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Website Source Code")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:c.a,VListItem:d.a,VListItemContent:h.a,VListItemIcon:m.a,VListItemTitle:h.b})},542:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n(34),l=n.n(o),c=n(556),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:"",dark:""}},[n("div",{staticStyle:{flex:"2"}},[n("span",{staticClass:"unselectable",staticStyle:{"font-size":"0.75rem"}},[t._v("\n      © "+t._s((new Date).getFullYear())+", Jan Müller\n    ")])]),t._v(" "),n("div",[n("theme-toggle")],1),t._v(" "),n("div",[n("language-toggle")],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{ThemeToggle:n(538).default,LanguageToggle:n(539).default}),l()(component,{VFooter:c.a})},98:function(t,e,n){"use strict";var r=n(39),o=Object(r.a)({layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}}),l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("home.title")))])],1)}),[],!1,null,null,null);e.a=component.exports}},[[327,24,2,25]]]);