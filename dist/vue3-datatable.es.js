var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,d=(e,d)=>{for(var r in d||(d={}))t.call(d,r)&&l(e,r,d[r]);if(a)for(var r of a(d))n.call(d,r)&&l(e,r,d[r]);return e};import{openBlock as r,createBlock as s,createVNode as o,defineComponent as i,pushScopeId as u,popScopeId as c,withScopeId as g,computed as p,mergeProps as b,toHandlers as v,renderSlot as f,resolveComponent as y,withDirectives as m,toDisplayString as h,vShow as P,withModifiers as x,withCtx as w,Fragment as C,createCommentVNode as k,renderList as _,createTextVNode as I,ref as q,watch as O}from"vue";const $={},L={xmlns:"http://www.w3.org/2000/svg",class:"dt-h-5 dt-w-5",viewBox:"0 0 20 20",fill:"currentColor"},S=o("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"},null,-1);$.render=function(e,t){return r(),s("svg",L,[S])};var B=i({name:"Loading"});const j=g("data-v-f17dff8e");u("data-v-f17dff8e");const N={class:"spinner dt-absolute dt-h-full dt-w-full dt-flex dt-justify-center"},D=o("div",{class:"spinner-item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"},null,-1),F=o("div",{class:"spinner-item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"},null,-1);c();const Q=j(((e,t,a,n,l,d)=>(r(),s("div",N,[D,F]))));B.render=Q,B.__scopeId="data-v-f17dff8e";var T=i({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:e=>({linkClasses:p((()=>e.active?"dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200":e.disabled?"dt-cursor-not-allowed dt-text-gray-400":"dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50"))})});T.render=function(e,t,a,n,l,o){return r(),s("a",b({href:"#",class:["dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium",e.linkClasses]},v(d({},e.$attrs))),[f(e.$slots,"default")],16)};var M=i({name:"Pagination",components:{PaginationLink:T},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(e,{emit:t}){const a=p((()=>(e.currentPage-1)*e.perPage+1)),n=p((()=>e.total>e.currentPage*e.perPage?e.currentPage*e.perPage:e.total)),l=p((()=>Math.ceil(e.total/e.perPage))),d=p((()=>1===e.currentPage?1:e.currentPage===l.value?l.value-e.maxVisibleButtons+1:e.currentPage-1)),r=p((()=>Math.min(d.value+e.maxVisibleButtons-1,l.value))),s=p((()=>{const e=[];for(let t=d.value;t<=r.value;t+=1)t>0&&e.push(t);return e})),o=p((()=>1===e.currentPage)),i=p((()=>e.currentPage===l.value)),u=e=>{t("changed",e)};return{currentStart:a,currentEnd:n,totalPages:l,pages:s,isInFirstPage:o,isInLastPage:i,goToPageNumber:u,gotoFirstPage:()=>u(1),gotoLastPage:()=>u(l.value),gotoNextPage:()=>u(e.currentPage>=l.value?l.value:e.currentPage+1),gotoPreviousPage:()=>u(e.currentPage<=1?1:e.currentPage-1),showDots:(e="left")=>{const t="left"===e?1:l.value,a="left"===e?2:l.value-1;return!s.value.includes(t)||!s.value.includes(a)}}}});const E={key:0,class:"dt-bg-white dt-px-4 dt-py-3 dt-flex dt-items-center dt-justify-between dt-border-t dt-border-gray-200 sm:dt-px-6"},R={class:"dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between"},z={class:"dt-text-sm dt-text-gray-700"},A=I(" Showing "),V=I(" to "),G=I(" of "),H=I(" results. "),J={key:0},K={class:"dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px","aria-label":"Pagination"},U=o("span",{class:"dt-sr-only"},"Go to first",-1),W=I(" « "),X=o("span",{class:"dt-sr-only"},"Previous",-1),Y=I(" ‹ "),Z=I(" 1 "),ee=I(" ... "),te=I(" ... "),ae=o("span",{class:"dt-sr-only"},"Next",-1),ne=I(" › "),le=o("span",{class:"dt-sr-only"},"Go to Last",-1),de=I(" » ");M.render=function(e,t,a,n,l,d){const i=y("pagination-link");return e.totalPages?(r(),s("div",E,[o("div",R,[m(o("div",null,[o("p",z,[f(e.$slots,"pagination-info",{currentStart:e.currentStart,currentEnd:e.currentEnd,total:e.total},(()=>[A,o("span",{class:"dt-font-medium",textContent:h(e.currentStart)},null,8,["textContent"]),V,o("span",{class:"dt-font-medium",textContent:h(e.currentEnd)},null,8,["textContent"]),G,o("span",{class:"dt-font-medium",textContent:h(e.total)},null,8,["textContent"]),H]))])],512),[[P,e.total]]),e.totalPages>1?(r(),s("div",J,[o("nav",K,[o(i,{disabled:e.isInFirstPage,class:"dt-rounded-l-md",onClick:x(e.gotoFirstPage,["prevent"])},{default:w((()=>[U,W])),_:1},8,["disabled","onClick"]),o(i,{disabled:e.isInFirstPage,onClick:x(e.gotoPreviousPage,["prevent"])},{default:w((()=>[X,Y])),_:1},8,["disabled","onClick"]),e.showDots("left")?(r(),s(C,{key:0},[o(i,{disabled:e.isInFirstPage,active:e.isInFirstPage,onClick:x(e.gotoFirstPage,["prevent"])},{default:w((()=>[Z])),_:1},8,["disabled","active","onClick"]),o(i,null,{default:w((()=>[ee])),_:1})],64)):k("",!0),(r(!0),s(C,null,_(e.pages,((t,a)=>(r(),s(i,{key:`pages_${a}`,active:t===e.currentPage,disabled:t===e.currentPage,onClick:x((a=>e.goToPageNumber(t)),["prevent"])},{default:w((()=>[I(h(t),1)])),_:2},1032,["active","disabled","onClick"])))),128)),e.showDots("right")?(r(),s(C,{key:1},[o(i,null,{default:w((()=>[te])),_:1}),o(i,{disabled:e.isInLastPage,active:e.isInLastPage,onClick:x(e.gotoLastPage,["prevent"])},{default:w((()=>[I(h(e.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):k("",!0),o(i,{disabled:e.isInLastPage,onClick:x(e.gotoNextPage,["prevent"])},{default:w((()=>[ae,ne])),_:1},8,["disabled","onClick"]),o(i,{disabled:e.isInLastPage,class:"dt-rounded-r-md",onClick:x(e.gotoLastPage,["prevent"])},{default:w((()=>[le,de])),_:1},8,["disabled","onClick"])])])):k("",!0)])])):k("",!0)};const re={},se={class:"dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500"};re.render=function(e,t){return r(),s("td",se,[f(e.$slots,"default")])};const oe={},ie={scope:"col",class:"dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider"};oe.render=function(e,t){return r(),s("th",ie,[f(e.$slots,"default")])};const ue=[5,10,15,25,50,75,100],ce=i({components:{SearchIcon:$,Loading:B,Pagination:M,TableBody:re,TableHead:oe},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>ue},query:{type:Object,required:!1,default:()=>({})}},emits:["loadData"],setup(e,{emit:t}){var a,n;const l=q({page:(null==(a=e.pagination)?void 0:a.page)||1,search:e.query.search||"",per_page:(null==(n=e.pagination)?void 0:n.per_page)||10}),r=p((()=>!!e.pagination)),s=p((()=>{var t;return(null==(t=e.pagination)?void 0:t.total)||e.rows.length})),o=p((()=>e.rows)),i=p((()=>e.columns?e.columns:0===e.rows.length?{}:Object.keys(e.rows[0]).reduce(((e,t)=>d(d({},e),{[t]:t})),{}))),u=p((()=>r.value?l.value.per_page*(l.value.page-1):0));O((()=>d({},l.value)),(()=>{t("loadData",l.value)}),{deep:!0,immediate:!0});const c=((e,t=400)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>e(...n)),t)}})((e=>{l.value=d(d({},l.value),{page:1,search:e.target.value})}));return{tableQuery:l,showPagination:r,totalData:s,tableRows:o,tableColumns:i,paginatedRowIndex:u,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:e=>{l.value.page=e},handleOnSearchChange:c,handleOnChange:e=>{const{name:t,value:a}=e.target;l.value=d(d({},l.value),{page:1,[t]:a})}}}});const ge=g("data-v-19b9c750");u("data-v-19b9c750");const pe={class:"data-table dt-flex dt-flex-col"},be={class:"dt--my-2 dt-overflow-x-auto sm:dt--mx-6 lg:dt--mx-8"},ve={class:"dt-align-middle dt-inline-block dt-min-w-full"},fe={key:0,class:"dt-filter-wrapper dt-mb-3 dt-w-full"},ye={class:"dt-w-64"},me=o("label",{for:"email",class:"dt-sr-only"},"Search",-1),he={class:"dt-relative dt-rounded-md dt-shadow-sm"},Pe={class:"dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none"},xe={class:"table-wrapper dt-relative dt-shadow dt-overflow-hidden dt-border-b dt-border-gray-200 sm:dt-rounded-lg"},we={key:1,class:"pagination-wrapper dt-flex dt-bg-white dt-items-center"},Ce={class:"dt-pr-4"},ke=o("label",{for:"location",class:"dt-sr-only"},"Per page",-1),_e={class:"dt-min-w-full dt-divide-y dt-divide-gray-200"},Ie={class:"dt-bg-gray-50"},qe={key:2,class:"pagination-wrapper"};c();const Oe=ge(((e,t,a,n,l,d)=>{const i=y("search-icon"),u=y("Loading"),c=y("pagination"),g=y("table-head"),p=y("table-body");return r(),s("div",pe,[o("div",be,[o("div",ve,[e.filter?(r(),s("div",fe,[o("div",ye,[me,o("div",he,[o("input",{value:e.tableQuery.search,type:"search",name:"search",class:"focus:dt-ring-0 dt-block dt-w-full dt-pr-10 sm:dt-text-sm dt-border-gray-300 dt-rounded-md",onInput:t[1]||(t[1]=(...t)=>e.handleOnSearchChange&&e.handleOnSearchChange(...t))},null,40,["value"]),o("div",Pe,[o(i,{class:"dt-text-gray-400"})])])])])):k("",!0),o("div",xe,[e.loading?f(e.$slots,"loading",{key:0},(()=>[o(u)]),{},!0):k("",!0),e.showPagination?(r(),s("div",we,[o(c,{class:"dt-flex-1",total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"]),o("div",Ce,[ke,o("select",{value:e.tableQuery.per_page,name:"per_page",class:"dt-block dt-w-full dt-pl-3 dt-pr-10 dt-py-2 dt-text-base dt-border-gray-300 sm:dt-text-sm dt-rounded-md",onInput:t[2]||(t[2]=(...t)=>e.handleOnChange&&e.handleOnChange(...t))},[(r(!0),s(C,null,_(e.perPageOptions,(t=>(r(),s("option",{key:`per_page_${t}`,value:t,selected:t===e.tableQuery.per_page,textContent:h(t)},null,8,["value","selected","textContent"])))),128))],40,["value"])])])):k("",!0),o("table",_e,[o("thead",Ie,[o("tr",null,[e.sn?f(e.$slots,"thead-sn",{key:0},(()=>[o(g,{textContent:h("S.N.")},null,8,["textContent"])]),{},!0):k("",!0),f(e.$slots,"thead",{column:e.tableColumns},(()=>[(r(!0),s(C,null,_(e.tableColumns,((e,t)=>(r(),s(g,{key:`datatable-thead-th-${t}`,textContent:h(e)},null,8,["textContent"])))),128))]),!0)])]),o("tbody",null,[(r(!0),s(C,null,_(e.tableRows,((t,a)=>(r(),s("tr",{key:`datatable-tbody-${e.uniqueId()}-${a}`,class:e.striped&&a%2?"dt-bg-gray-50":"dt-bg-white"},[e.sn?f(e.$slots,"tbody-sn",{key:0,sn:a+1},(()=>[o(p,{textContent:h(a+1+e.paginatedRowIndex)},null,8,["textContent"])]),!0):k("",!0),f(e.$slots,"tbody",{index:a,row:t},(()=>[(r(!0),s(C,null,_(e.tableColumns,((a,n)=>(r(),s(p,{key:`datatable-tbody-td-${e.uniqueId()}-${n}`,name:a,textContent:h(t[n])},null,8,["name","textContent"])))),128))]),!0)],2)))),128))])]),e.showPagination?(r(),s("div",qe,[o(c,{total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"])])):k("",!0)])])])])}));ce.render=Oe,ce.__scopeId="data-v-19b9c750";export{ce as DataTable,re as TableBody,oe as TableHead};