(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{574:function(t,e,n){"use strict";function r(title,t){var image="https://jan-mueller.at/og-logo.png",e="".concat(title," · Jan Müller");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image",property:"og:image",content:image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:image},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return r}))},579:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return m}));var r=n(133),o={text:"mdi-home",to:r.c.home.to},c={text:r.c.blog.title,to:r.c.blog.to},d={text:r.c.projects.title,to:r.c.projects.to},l={text:r.c.about.title,to:r.c.about.to};function m(t,e){return{text:t.title,to:Object(r.a)(t,e).path}}},642:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(15),c=(n(68),n(37)),d=n(133),l=n(579),meta=n(574),m=Object(c.a)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r("".concat(n.i18n.locale,"/about")).fetch();case 3:return o=e.sent,e.abrupt("return",{document:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(d.c.about.title),t=this.$t("meta.description");return{title:title,meta:Object(r.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[l.d,l.a])}}),f=n(36),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"justify-text"},[n("nuxt-content",{attrs:{document:t.document}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);