!function(){var e=document.createElement("style");e.innerHTML="li[data-v-6179a8dc]{list-style:none;margin-bottom:.75rem}.papers-list[data-v-062dfd68]{margin-bottom:1rem}.card[data-v-a773772a]{margin-top:1rem}\n",document.head.appendChild(e),System.register(["./getConfig-legacy.d81b2bf1.js"],(function(){"use strict";var e,t,r,a,n,s,i,l,c,m,u,o,d,p,v,h,b,g;return{setters:[function(f){e=f._,t=f.o,r=f.c,a=f.F,n=f.r,s=f.a,i=f.t,l=f.b,c=f.j,m=f.l,u=f.p,o=f.h,d=f.g,p=f.n,v=f.d,h=f.e,b=f.m,g=f.f}],execute:async function(){const f=["innerHTML"];const y={style:{"margin-bottom":"1.5rem"}},T={class:"papers-list"},_=["innerHTML"];const A={name:"memberPapers",inject:["researches"],data(){return{researchActivity:this.researches}},components:{memberResearchesCommon:e({name:"membersResearches",props:{activities:Array},setup:()=>({getStructuredText:e=>{return e.url?`<a href="${e.url}" target="_blank" download="${t=e.title,`${t.replace(/"/g,"_")}`}">${e.title}</a>`:`<p>${e.title}</p>`;var t}})},[["render",function(e,s,i,l,c,m){return t(),r("ul",null,[(t(!0),r(a,null,n(i.activities,(e=>(t(),r("li",{innerHTML:l.getStructuredText(e)},null,8,f)))),256))])}],["__scopeId","data-v-6179a8dc"]]),memberResearchesMember:e({name:"memberResearchesMember",props:{members:Array},methods:{getStructuredText:e=>`<a href="${e}">${e}</a>`}},[["render",function(e,c,m,u,o,d){return t(!0),r(a,null,n(m.members,(e=>(t(),r("div",y,[s("h4",null,[s("span",null,i(e.name),1)]),s("ul",null,[(t(!0),r(a,null,n(e.papers,(e=>(t(),r("li",T,[s("p",null,i(e.title),1),e.url?(t(),r("p",{key:0,innerHTML:d.getStructuredText(e.url)},null,8,_)):l("",!0)])))),256))])])))),256)}],["__scopeId","data-v-062dfd68"]])}},M=e=>(u("data-v-a773772a"),e=e(),o(),e),$=M((()=>s("h3",null,[s("span",null,"発達心理学研究室の出身・所属メンバーの主要論文")],-1))),x={class:"card"},H=M((()=>s("div",{class:"split-line"},[s("h3",null,[s("span",null,"過去のメンバーの卒業論文")])],-1))),L={class:"card"},S=M((()=>s("div",{class:"split-line"},[s("h3",null,[s("span",null,"過去のメンバーの修士論文")])],-1))),R={class:"card"},j=M((()=>s("div",{class:"split-line"},[s("h3",null,[s("span",null,"過去のメンバーの博士論文")])],-1))),k={class:"card"};var w=e(A,[["render",function(e,n,i,l,u,o){const d=c("member-researches-member"),p=c("member-researches-common");return t(),r(a,null,[$,s("div",x,[m(d,{members:u.researchActivity.members},null,8,["members"])]),H,s("div",L,[m(p,{activities:u.researchActivity.bachelors},null,8,["activities"])]),S,s("div",R,[m(p,{activities:u.researchActivity.masters},null,8,["activities"])]),j,s("div",k,[m(p,{activities:u.researchActivity.doctors},null,8,["activities"])])],64)}],["__scopeId","data-v-a773772a"]]);const C=await d(),I=await p();v(h).provide("config",C).mount("#vue-carousel"),v(b).provide("config",C).mount("#mobile-menu"),v(g).provide("config",C).mount("#container-desktop-menu"),v(w).provide("researches",I).mount("#members-research-activities")}}}))}();
