(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{603:function(t,e,n){"use strict";function r(title,t){var image="https://jan-mueller.at/og-logo.png",e="".concat(title," · Jan Müller");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",name:"twitter:site",content:"@DerYeger"},{hid:"twitter:creator",name:"twitter:creator",content:"@DerYeger"},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image",property:"og:image",content:image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:image},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return r}))},604:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return f}));var r=n(52),o=n(139),c={text:o.c.home.title,to:o.c.home.to,icon:r.j},d={text:o.c.blog.title,to:o.c.blog.to},l={text:o.c.projects.title,to:o.c.projects.to},m={text:o.c.documents.title,to:o.c.documents.to},h={text:o.c.about.title,to:o.c.about.to};function f(t,e){return{text:t.title,to:Object(o.a)(t,e).path}}},693:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(16),c=(n(77),n(29)),d=n(640),l=n(604),m=n(139),meta=n(603),h=Object(c.b)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("en/blog").without(["body","bodyText","toc"]).sortBy("createdAt","desc").fetch();case 2:return n=e.sent,e.abrupt("return",{posts:Object(m.b)(n,t.app.i18n.locale)});case 4:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(m.c.blog.title),t=this.$t("meta.description");return{title:title,meta:Object(r.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[l.e,l.b])},methods:{hasTags:d.a}}),f=n(25),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("masonry-wall",{staticClass:"px-3",attrs:{items:t.posts,"ssr-columns":1,"column-width":400,padding:24},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[n("blog-post-card",{attrs:{"blog-post":e}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogPostCard:n(686).default})}}]);