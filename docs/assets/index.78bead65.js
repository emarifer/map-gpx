var L=Object.defineProperty,_=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var w=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&w(t,o,e[o]);if(k)for(var o of k(e))A.call(e,o)&&w(t,o,e[o]);return t},h=(t,e)=>_(t,M(e));import{r as p,j as n,L as y,u as x,M as N,a as l,P as O,b as g,W as v,T,c as E,S as R,F as b,B as I,A as F,d as D,e as P,v as U,n as B,R as W,f as G,g as $}from"./vendor.0c6e8dc3.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};j();const u=p.exports.createContext({}),z=(t,e)=>{switch(e.type){case"addTrack":return h(m({},t),{data:e.payload});case"startLocation":return h(m({},t),{location:e.payload});case"deleteTrack":return h(m({},t),{deleteTrack:e.payload,data:"",infoTrack:{}});case"setInfo":return h(m({},t),{infoTrack:e.payload});case"setDisplay":return h(m({},t),{displayInfo:e.payload});case"setUserAccurcy":return h(m({},t),{userAccuracy:Math.round(e.payload*100)/100});default:return t}},K={data:"",location:!1,deleteTrack:!1,infoTrack:{},displayInfo:!1,userAccuracy:0},q=({children:t})=>{const[e,o]=p.exports.useReducer(z,K),c=i=>{o({type:"addTrack",payload:i})},r=i=>{o({type:"startLocation",payload:i})},a=i=>{o({type:"deleteTrack",payload:i})},s=i=>{o({type:"setInfo",payload:i})},d=i=>{o({type:"setDisplay",payload:i})},f=i=>{o({type:"setUserAccurcy",payload:i})};return n(u.Provider,{value:{trackState:e,setTrack:c,setLocation:r,deleteTrack:a,setInfoTrack:s,setDisplayInfo:d,setUserAccuracy:f},children:t})};var V="/map-gpx/markers/marker-icon.png",X="/map-gpx/markers/marker-shadow.png";const Y=y.icon({iconSize:[25,40],iconAnchor:[12.5,40],popupAnchor:[0,-40],iconUrl:V,shadowUrl:X});y.Marker.prototype.options.icon=Y;const H=()=>{const{trackState:{location:t,userAccuracy:e},setUserAccuracy:o}=p.exports.useContext(u),[c,r]=p.exports.useState(null),a=x();return p.exports.useEffect(()=>(t?a.locate({watch:!0,timeout:5e3}).on("locationfound",s=>{r(s.latlng),o(s.accuracy)}):r(null),()=>{a.stopLocate()}),[t]),c===null?null:n(N,{position:c,children:l(O,{children:["You are less than ",e," meters"]})})},J=()=>l(g,{position:"topright",children:[n(g.BaseLayer,{checked:!0,name:"Mapa raster IGN - Spain",children:n(v,{layers:"mtn_rasterizado",url:"https://www.ign.es/wms-inspire/mapa-raster",attribution:'\xA9 <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geogr\xE1fico Nacional de Espa\xF1a</a> contributors',crossOrigin:!0})}),n(g.BaseLayer,{name:"Ortoimagen PNOA - Spain",children:n(v,{layers:"OI.OrthoimageCoverage",url:"https://www.ign.es/wms-inspire/pnoa-ma",attribution:'PNOA cedido por \xA9 <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geogr\xE1fico Nacional de Espa\xF1a</a> contributors',crossOrigin:!0})}),n(g.BaseLayer,{name:"OpenStreetMap",children:n(T,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",crossOrigin:!0})}),n(g.BaseLayer,{name:"OpenTopoMap",children:n(T,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",crossOrigin:!0})})]}),Q=()=>{var e;return l(E,{bounds:[[24.9300000311,-19.6],[46.0700000311,5.6]],children:[((e=window.localStorage.getItem("gpx"))==null?void 0:e.length)===0?null:n(re,{}),n(H,{}),n(R,{}),n(J,{})]})},Z=()=>{const{trackState:{displayInfo:t,infoTrack:e},setDisplayInfo:o}=p.exports.useContext(u),{name:c,distance:r,maxElevation:a,time:s}=e,d=f=>{f.stopPropagation()};return l(b,{children:[t&&n("div",{className:"modal__overlay",onClick:()=>o(!1)}),l("div",{className:`modal ${t&&"modal--show"}`,onClick:d,children:[l("div",{className:"modal__header",children:[n("h2",{children:"Track Info"}),n("div",{style:{fontSize:"1.4rem"},children:n(I,{})})]}),c?l("div",{className:"modal__content",children:[l("p",{children:[n("b",{children:"Name:"})," ",c]}),l("p",{children:[n("b",{children:"Distance:"})," ",r]}),l("p",{children:[n("b",{children:"Max. Elevation:"})," ",a]}),l("p",{children:[n("b",{children:"Time:"})," ",s]})]}):n("div",{className:"modal__content",children:n("p",{style:{textAlign:"center"},children:n("strong",{children:"No Info \u{1F641}"})})}),n("div",{className:"modal__footer",children:n("button",{onClick:()=>o(!1),children:"OK"})})]})]})},ee=()=>{const{deleteTrack:t,trackState:e}=p.exports.useContext(u);return n("button",{title:"Remove Track",onClick:()=>{window.localStorage.removeItem("gpx"),t(!e.deleteTrack)},className:"buttons buttons__remove",children:n(F,{})})},te=()=>{const{setDisplayInfo:t}=p.exports.useContext(u);return n("button",{title:"Track Info",onClick:()=>t(!0),className:"buttons buttons__info",children:n(I,{})})},ne=()=>{const{setLocation:t,trackState:e}=p.exports.useContext(u);return n("button",{title:"Geolocation",onClick:()=>t(!e.location),className:`buttons buttons__location ${e.location&&"buttons__location--active"}`,children:n(D,{})})},oe=t=>{const e={};e.name=`${t.get_name()}`,e.distance=`${Math.round(t.get_distance()/1e3*100)/100} km`,e.maxElevation=`${Math.round(t.get_elevation_max()*100)/100} m`;const o=Math.round(t.get_total_time()/36e5*100)/100,c=Math.ceil((o-Math.floor(o))*60);return e.time=`${Math.floor(o)} horas y ${c} minutos`,e},re=()=>{const t=x(),{trackState:{deleteTrack:e,data:o},setInfoTrack:c}=p.exports.useContext(u);return p.exports.useEffect(()=>{const r=window.localStorage.getItem("gpx")||"",a=new y.GPX(r,{async:!0,marker_options:{wptIconUrls:{"":"markers/pin-icon-wpt.png"},startIconUrl:"markers/pin-icon-start.png",endIconUrl:"markers/pin-icon-end.png",shadowUrl:"markers/pin-shadow.png"}}).on("loaded",s=>{const d=s.target;c(oe(d)),t.fitBounds(d.getBounds())}).addTo(t);return()=>{t.removeLayer(a)}},[t,e,o]),null},ae=()=>{const{setTrack:t}=p.exports.useContext(u),e=p.exports.useRef(null);return l(b,{children:[n("label",{title:"Add Track",className:"buttons buttons__label",htmlFor:"input-track",children:n(P,{})}),n("input",{ref:e,type:"file",accept:"application/gpx+xml",id:"input-track",onClick:()=>{e.current&&(e.current.value="")},onChange:r=>{const a=r.target,s=new FileReader;s.onload=()=>{const d=s.result;t(d),window.localStorage.setItem("gpx",d)},a.files&&s.readAsText(a.files[0])}})]})};const se=()=>l(q,{children:[l("header",{children:[n("h4",{children:"Camina \u{1F97E} con mi App GPS"}),n("p",{children:"(React TS/React-Leaflet)"}),l("div",{className:"controls",children:[n(ae,{}),n(ne,{}),n(ee,{}),n(te,{})]})]}),n(Q,{}),n(Z,{}),l("footer",{children:["MIT Licensed | Copyright \xA9 ",Date().split(" ")[3]," Enrique Mar\xEDn"]})]});function ie(t={}){const{immediate:e=!1,onNeedRefresh:o,onOfflineReady:c,onRegistered:r,onRegisterError:a}=t;let s,d;const f=async(i=!0)=>{i&&(s==null||s.addEventListener("controlling",S=>{S.isUpdate&&window.location.reload()})),d&&d.waiting&&await B(d.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){s=new U("/map-gpx/sw.js",{scope:"/map-gpx/"}),s.addEventListener("activated",i=>{i.isUpdate||c==null||c()});{const i=()=>{o==null||o()};s.addEventListener("waiting",i),s.addEventListener("externalwaiting",i)}s.register({immediate:e}).then(i=>{d=i,r==null||r(i)}).catch(i=>{a==null||a(i)})}return f}const ce=ie({onNeedRefresh(){$.fire({icon:"info",title:"New Content Available!!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ok, update it!"}).then(t=>{t.isConfirmed&&ce()})}});W.render(n(G.StrictMode,{children:n(se,{})}),document.getElementById("root"));
