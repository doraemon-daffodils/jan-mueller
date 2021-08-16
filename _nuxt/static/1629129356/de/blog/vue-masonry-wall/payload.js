__NUXT_JSONP__("/de/blog/vue-masonry-wall", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{post:{slug:ac,description:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3.",title:"Masonry layout for Vue 2 and Vue 3",createdAt:"2021-08-16T00:00:00.000Z",tags:["Vue","Masonry","Layout"],toc:[{id:ak,depth:ad,text:al},{id:am,depth:ad,text:an},{id:ao,depth:ap,text:aq},{id:ar,depth:ap,text:as},{id:at,depth:ad,text:au}],body:{type:"root",children:[{type:b,tag:ae,props:{id:ak},children:[{type:b,tag:l,props:{href:"#introduction",ariaHidden:H,tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:al}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"In quite a few of my Vue 2 projects I'm using the library "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Ffuxingloh\u002Fvue-masonry-wall",rel:[t,u,v],target:w},children:[{type:a,value:ac}]},{type:a,value:".\nIts ease-of-use and SSR support were key factors in my decision to use this library in particular."}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"However, I'm currently in the progress of preparing my projects for the release of Nuxt 3 and the accompanying migration to Vue 3.\nSince I couldn't find a comparable masonry layout for Vue 3, I chose to create a new library based on "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Ffuxingloh",rel:[t,u,v],target:w},children:[{type:a,value:"Fuxing Loh's"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:ac}]},{type:a,value:R}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"The result is "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002FDerYeger\u002Fvue-masonry-wall",rel:[t,u,v],target:w},children:[{type:a,value:"@yeger\u002Fvue-masonry-wall"}]},{type:a,value:", a rewrite of the original library in TypeScript and Vue 3.\nIt has no dependencies, resulting in a bundle size decrease of up to 54%."}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"I also created "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002FDerYeger\u002Fvue2-masonry-wall",rel:[t,u,v],target:w},children:[{type:a,value:"@yeger\u002Fvue2-masonry-wall"}]},{type:a,value:" for use in Vue 2 projects.\nIt, too, drops any dependencies, achieving a bundle size decrease of up to 40%"}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"In addition, multiple issues have been fixed.\nNotably, padding is now considered while calculating the column count, and the removal of elements is now supported."}]},{type:a,value:g},{type:b,tag:ae,props:{id:am},children:[{type:b,tag:l,props:{href:"#installation",ariaHidden:H,tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:an}]},{type:a,value:g},{type:b,tag:av,props:{id:ao},children:[{type:b,tag:l,props:{href:"#vue-2",ariaHidden:H,tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aq}]},{type:a,value:g},{type:b,tag:z,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:aw}]},{type:b,tag:N,props:{className:[O,ax]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:ay}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:a,value:" @yeger\u002Fvue2-masonry-wall\n\n"},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:aB}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:a,value:" @yeger\u002Fvue2-masonry-wall\n"}]}]}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:aE},{type:b,tag:l,props:{href:"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fguide\u002Fplugins.html#Using-a-Plugin",rel:[t,u,v],target:w},children:[{type:a,value:"Vue 2 documentation"}]},{type:a,value:aF}]},{type:a,value:g},{type:b,tag:z,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:aG}]},{type:b,tag:N,props:{className:[O,aH]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:U}]},{type:a,value:" Vue "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aI}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:U}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'@yeger\u002Fvue2-masonry-wall'"}]},{type:a,value:"\n\nVue"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:av,props:{id:ar},children:[{type:b,tag:l,props:{href:"#vue-3",ariaHidden:H,tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:as}]},{type:a,value:g},{type:b,tag:z,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:aw}]},{type:b,tag:N,props:{className:[O,ax]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:ay}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:a,value:" @yeger\u002Fvue-masonry-wall\n\n"},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:aB}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:a,value:" @yeger\u002Fvue-masonry-wall\n"}]}]}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:aE},{type:b,tag:l,props:{href:"https:\u002F\u002Fv3.vuejs.org\u002Fguide\u002Fplugins.html#using-a-plugin",rel:[t,u,v],target:w},children:[{type:a,value:"Vue 3 documentation"}]},{type:a,value:aF}]},{type:a,value:g},{type:b,tag:z,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:aG}]},{type:b,tag:N,props:{className:[O,aH]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:" createApp "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aI}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:U}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'@yeger\u002Fvue-masonry-wall'"}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"const"}]},{type:a,value:" app "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"createApp"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:"\n\napp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:ae,props:{id:at},children:[{type:b,tag:l,props:{href:"#usage",ariaHidden:H,tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:au}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"The component is available as "},{type:b,tag:i,props:{},children:[{type:a,value:ag}]},{type:a,value:aM},{type:b,tag:i,props:{},children:[{type:a,value:af}]},{type:a,value:".\nThe only required prop is "},{type:b,tag:i,props:{},children:[{type:a,value:P}]},{type:a,value:", an array of type "},{type:b,tag:i,props:{},children:[{type:a,value:"any"}]},{type:a,value:".\nEach element of "},{type:b,tag:i,props:{},children:[{type:a,value:P}]},{type:a,value:" is passed to the default slot, alongside its index.\nThe prop "},{type:b,tag:i,props:{},children:[{type:a,value:"columnWidth"}]},{type:a,value:" takes in a "},{type:b,tag:i,props:{},children:[{type:a,value:Q}]},{type:a,value:", specifying the targeted column width.\nIt is used to calculate the column count but does not define the actual width of columns.\nSimilarly, "},{type:b,tag:i,props:{},children:[{type:a,value:"padding"}]},{type:a,value:" defines the padding between items in pixels and is respected while calculating the column count.\nLastly, the prop "},{type:b,tag:i,props:{},children:[{type:a,value:"ssrColumns"}]},{type:a,value:" can be used to specify the column count in server-side-rendering contexts."}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"While every prop of the component is reactive, mutations to the "},{type:b,tag:i,props:{},children:[{type:a,value:P}]},{type:a,value:" array will not update the layout.\nTo force updates, assign a new array to the "},{type:b,tag:i,props:{},children:[{type:a,value:P}]},{type:a,value:" prop."}]},{type:a,value:g},{type:b,tag:s,props:{},children:[{type:a,value:"The following example demonstrates basic usage of the component.\nFor an interactive demonstrations, visit "},{type:b,tag:l,props:{href:"https:\u002F\u002Fvue-masonry-wall.yeger.eu\u002F",rel:[t,u,v],target:w},children:[{type:a,value:"vue-masonry-wall.yeger.eu"}]},{type:a,value:aM},{type:b,tag:l,props:{href:"https:\u002F\u002Fvue2-masonry-wall.yeger.eu\u002F",rel:[t,u,v],target:w},children:[{type:a,value:"vue2-masonry-wall.yeger.eu"}]},{type:a,value:R}]},{type:a,value:g},{type:b,tag:z,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:"vue"}]},{type:b,tag:N,props:{className:[O,"language-html"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:":items"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:":ssr-columns"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:":column-width"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:":padding"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"16"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"#default"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"{ item, index }"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:":style"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"`height: ${item.height}px`"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:"{{ item.title }}"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:c}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:"{{ item.description }}"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:c}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,ai]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,o,aP]},children:[{type:a,value:"export"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o,aP]},children:[{type:a,value:"default"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,o,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"\n      items"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'First'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'The first item.'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aQ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'Second'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aN}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'Third'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aQ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'Fourth'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"450"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:g}]}]}]}]},dir:"\u002Fen\u002Fblog",path:"\u002Fen\u002Fblog\u002Fvue-masonry-wall",extension:".md",updatedAt:"2021-08-16T15:54:53.560Z",readingTime:"3 min read",bodyText:"\u003Ch2\u003EIntroduction\u003C\u002Fh2\u003E\n\u003Cp\u003EIn quite a few of my Vue 2 projects I'm using the library \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffuxingloh\u002Fvue-masonry-wall\"\u003Evue-masonry-wall\u003C\u002Fa\u003E.\nIts ease-of-use and SSR support were key factors in my decision to use this library in particular.\u003C\u002Fp\u003E\n\u003Cp\u003EHowever, I'm currently in the progress of preparing my projects for the release of Nuxt 3 and the accompanying migration to Vue 3.\nSince I couldn't find a comparable masonry layout for Vue 3, I chose to create a new library based on \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffuxingloh\"\u003EFuxing Loh's\u003C\u002Fa\u003E \u003Ccode\u003Evue-masonry-wall\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003EThe result is \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FDerYeger\u002Fvue-masonry-wall\"\u003E@yeger\u002Fvue-masonry-wall\u003C\u002Fa\u003E, a rewrite of the original library in TypeScript and Vue 3.\nIt has no dependencies, resulting in a bundle size decrease of up to 54%.\u003C\u002Fp\u003E\n\u003Cp\u003EI also created \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FDerYeger\u002Fvue2-masonry-wall\"\u003E@yeger\u002Fvue2-masonry-wall\u003C\u002Fa\u003E for use in Vue 2 projects.\nIt, too, drops any dependencies, achieving a bundle size decrease of up to 40%\u003C\u002Fp\u003E\n\u003Cp\u003EIn addition, multiple issues have been fixed.\nNotably, padding is now considered while calculating the column count, and the removal of elements is now supported.\u003C\u002Fp\u003E\n\u003Ch2\u003EInstallation\u003C\u002Fh2\u003E\n\u003Ch3\u003EVue 2\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash[bash]\"\u003E# yarn\n$ yarn add @yeger\u002Fvue2-masonry-wall\n\n# npm\n$ npm install @yeger\u002Fvue2-masonry-wall\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EFirst, you have to install the component like any other plugin.\nConsult the \u003Ca href=\"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fguide\u002Fplugins.html#Using-a-Plugin\"\u003EVue 2 documentation\u003C\u002Fa\u003E for detailed information on installing plugins.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-ts[ts]\"\u003Eimport Vue from 'vue'\nimport MasonryWall from '@yeger\u002Fvue2-masonry-wall'\n\nVue.use(MasonryWall)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003EVue 3\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash[bash]\"\u003E# yarn\n$ yarn add @yeger\u002Fvue-masonry-wall\n\n# npm\n$ npm install @yeger\u002Fvue-masonry-wall\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EFirst, you have to install the component like any other plugin.\nConsult the \u003Ca href=\"https:\u002F\u002Fv3.vuejs.org\u002Fguide\u002Fplugins.html#using-a-plugin\"\u003EVue 3 documentation\u003C\u002Fa\u003E for detailed information on installing plugins.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-ts[ts]\"\u003Eimport { createApp } from 'vue'\nimport MasonryWall from '@yeger\u002Fvue-masonry-wall'\n\nconst app = createApp()\n\napp.use(MasonryWall)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2\u003EUsage\u003C\u002Fh2\u003E\n\u003Cp\u003EThe component is available as \u003Ccode\u003Emasonry-wall\u003C\u002Fcode\u003E or \u003Ccode\u003EMasonryWall\u003C\u002Fcode\u003E.\nThe only required prop is \u003Ccode\u003Eitems\u003C\u002Fcode\u003E, an array of type \u003Ccode\u003Eany\u003C\u002Fcode\u003E.\nEach element of \u003Ccode\u003Eitems\u003C\u002Fcode\u003E is passed to the default slot, alongside its index.\nThe prop \u003Ccode\u003EcolumnWidth\u003C\u002Fcode\u003E takes in a \u003Ccode\u003Enumber\u003C\u002Fcode\u003E, specifying the targeted column width.\nIt is used to calculate the column count but does not define the actual width of columns.\nSimilarly, \u003Ccode\u003Epadding\u003C\u002Fcode\u003E defines the padding between items in pixels and is respected while calculating the column count.\nLastly, the prop \u003Ccode\u003EssrColumns\u003C\u002Fcode\u003E can be used to specify the column count in server-side-rendering contexts.\u003C\u002Fp\u003E\n\u003Cp\u003EWhile every prop of the component is reactive, mutations to the \u003Ccode\u003Eitems\u003C\u002Fcode\u003E array will not update the layout.\nTo force updates, assign a new array to the \u003Ccode\u003Eitems\u003C\u002Fcode\u003E prop.\u003C\u002Fp\u003E\n\u003Cp\u003EThe following example demonstrates basic usage of the component.\nFor an interactive demonstrations, visit \u003Ca href=\"https:\u002F\u002Fvue-masonry-wall.yeger.eu\u002F\"\u003Evue-masonry-wall.yeger.eu\u003C\u002Fa\u003E or \u003Ca href=\"https:\u002F\u002Fvue2-masonry-wall.yeger.eu\u002F\"\u003Evue2-masonry-wall.yeger.eu\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-vue[vue]\"\u003E&lt;template&gt;\n  &lt;masonry-wall :items=&quot;items&quot; :ssr-columns=&quot;1&quot; :column-width=&quot;300&quot; :padding=&quot;16&quot;&gt;\n    &lt;template #default=&quot;{ item, index }&quot;&gt;\n      &lt;div :style=&quot;`height: ${item.height}px`&quot;&gt;\n        &lt;h1&gt;{{ item.title }}&lt;\u002Fh1&gt;\n        &lt;span&gt;{{ item.description }}&lt;\u002Fspan&gt;\n      &lt;\u002Fdiv&gt;\n    &lt;\u002Ftemplate&gt;\n  &lt;\u002Fmasonry-wall&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nexport default {\n  data() {\n    return {\n      items: [\n        { title: 'First', description: 'The first item.', height: 150 },\n        { title: 'Second', description: 'The second item.', height: 300 },\n        { title: 'Third', description: 'The second item.', height: 150 },\n        { title: 'Fourth', description: 'The second item.', height: 450 },\n      ]\n    }\n  }\n}\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},prev:{slug:"nuxt-vue-and-typescript",title:"Nuxt, Vue and TypeScript",path:"\u002Fde\u002Fblog\u002Fnuxt-vue-and-typescript"},next:void 0}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\n","tag","code","operator","\u003E","a",":","function","keyword","string","\"",",","p","nofollow","noopener","noreferrer","_blank","{","}","div","=","\u003C","\u003C\u002F","attr-name","attr-value","attr-equals","\n        ","true",-1,"icon","icon-link","nuxt-content-highlight","filename","pre","line-numbers","items","number",".","comment","\n$ ","import","from","(",")","template","\n  ","\n    "," title"," description"," height","vue-masonry-wall",2,"h2","MasonryWall","masonry-wall","\n      ","script","'The second item.'","introduction","Introduction","installation","Installation","vue-2",3,"Vue 2","vue-3","Vue 3","usage","Usage","h3","bash","language-bash","# yarn","yarn","add","# npm","npm","install","First, you have to install the component like any other plugin.\nConsult the "," for detailed information on installing plugins.","ts","language-ts","'vue'"," MasonryWall ","use","\n\n"," or ","300","h1","module","150")));