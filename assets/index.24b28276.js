import{u as h,d as g,D as x}from"./app.b7e940c8.js";import{d as w,x as D,m as b,u as k,r,o as v,p as y,w as c,f as o,e as s,t as n,g as m}from"./vendor.3fac7b10.js";const B={class:"card"},C={class:"text-xl"},j={class:"text-lighter"},N={class:"text-light"},S=w({setup(R){h("button.blog");const l=D().getRoutes().filter(t=>{var e;return t.path.startsWith("/blog/")&&((e=t.meta.frontmatter)==null?void 0:e.date)}).sort((t,e)=>+new Date(e.meta.frontmatter.date)-+new Date(t.meta.frontmatter.date)),i=b(()=>l),{t:_}=k();return(t,e)=>{const u=g,d=x,p=r("router-link"),f=r("masonry-wall");return v(),y(f,{items:m(i),"ssr-columns":1,"column-width":300,gap:16,class:"text-sm"},{default:c(({item:a})=>[o(p,{to:a.path,class:"no-underline"},{default:c(()=>[s("div",B,[s("span",C,n(a.meta.frontmatter.title),1),s("span",j,[o(u,{date:a.meta.frontmatter.date,format:"default"},null,8,["date"]),o(d),s("span",null,n(m(_)(a.meta.frontmatter.language)),1)]),s("span",N,n(a.meta.frontmatter.description),1)])]),_:2},1032,["to"])]),_:1},8,["items"])}}});export{S as default};
