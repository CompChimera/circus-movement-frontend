import{r as t}from"./index-WEX2kSVK.js";const o=t([{id:1,name:"Straddle Mount",apparatus:1},{id:2,name:"Horse",apparatus:1},{id:3,name:"Roll (transition)",apparatus:1},{id:4,name:"Ankle Hang",apparatus:1},{id:5,name:"Person in the Moon",apparatus:1}]);function u(){return o}function i(n,e){const a=e.find(r=>r.id===n);return a&&a.name?a.name:"(Error finding move data)"}function p(n){return o.value.filter(a=>a.apparatus==n)}export{i as a,u as g,p as u};