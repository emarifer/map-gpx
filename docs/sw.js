var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var K=(s,e,t)=>e in s?X(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,A=(s,e)=>{for(var t in e||(e={}))ee.call(e,t)&&K(s,t,e[t]);if(M)for(var t of M(e))te.call(e,t)&&K(s,t,e[t]);return s},O=(s,e)=>Y(s,Z(e));try{self["workbox:core:6.4.1"]&&_()}catch{}const se=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},ne=se;class l extends Error{constructor(e,t){const n=ne(e,t);super(n);this.name=e,this.details=t}}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},E=s=>[d.prefix,s,d.suffix].filter(e=>e&&e.length>0).join("-"),ae=s=>{for(const e of Object.keys(d))s(e)},m={updateDetails:s=>{ae(e=>{typeof s[e]=="string"&&(d[e]=s[e])})},getGoogleAnalyticsName:s=>s||E(d.googleAnalytics),getPrecacheName:s=>s||E(d.precache),getPrefix:()=>d.prefix,getRuntimeName:s=>s||E(d.runtime),getSuffix:()=>d.suffix};function S(s,e){const t=e();return s.waitUntil(t),t}try{self["workbox:precaching:6.4.1"]&&_()}catch{}const re="__WB_REVISION__";function ie(s){if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const r=new URL(s,location.href);return{cacheKey:r.href,url:r.href}}const{revision:e,url:t}=s;if(!t)throw new l("add-to-cache-list-unexpected-type",{entry:s});if(!e){const r=new URL(t,location.href);return{cacheKey:r.href,url:r.href}}const n=new URL(t,location.href),a=new URL(t,location.href);return n.searchParams.set(re,e),{cacheKey:n.href,url:a.href}}class ce{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;n?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return n}}}class oe{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:n})=>{const a=(n==null?void 0:n.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}let w;function he(){if(w===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),w=!0}catch{w=!1}w=!1}return w}async function le(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new l("cross-origin-copy-response",{origin:t});const n=s.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=e?e(a):a,i=he()?n.body:await n.blob();return new Response(i,r)}const ue=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");function v(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function de(s,e,t,n){const a=v(e.url,t);if(e.url===a)return s.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await s.keys(e,r);for(const c of i){const o=v(c.url,t);if(a===o)return s.match(c,n)}}class fe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const B=new Set;async function pe(){for(const s of B)await s()}function ge(s){return new Promise(e=>setTimeout(e,s))}try{self["workbox:strategies:6.4.1"]&&_()}catch{}function C(s){return typeof s=="string"?new Request(s):s}class me{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new fe,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=C(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const i=await t.preloadResponse;if(i)return i}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const i of this.iterateCallbacks("requestWillFetch"))n=await i({request:n.clone(),event:t})}catch(i){if(i instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let i;i=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))i=await c({event:t,request:r,response:i});return i}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:r.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=C(e);let n;const{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},r),{cacheName:a});n=await caches.match(i,c);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:a,matchOptions:r,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(e,t){const n=C(e);await ge(0);const a=await this.getCacheKey(n,"write");if(!t)throw new l("cache-put-with-no-response",{url:ue(a.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),g=h?await de(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,h?r.clone():r)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await pe(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:i,oldResponse:g,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let a=e;for(const r of this.iterateCallbacks("cacheKeyWillBeUsed"))a=C(await r({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[n]=a}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield r=>{const i=Object.assign(Object.assign({},r),{state:n});return t[e](i)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class W{constructor(e={}){this.cacheName=m.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new me(this,{event:t,request:n,params:a}),i=this._getResponse(r,n,t),c=this._awaitComplete(i,r,n,t);return[i,c]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new l("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:n,request:t}),a)break}if(!a)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:n,request:t,response:a});return a}async _awaitComplete(e,t,n,a){let r,i;try{r=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:n,response:r}),await t.doneWaiting()}catch(c){c instanceof Error&&(i=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:n,response:r,error:i}),t.destroy(),i)throw i}}class p extends W{constructor(e={}){e.cacheName=m.getPrecacheName(e.cacheName);super(e);this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(p.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const a=t.params||{};if(this._fallbackToNetwork){const r=a.integrity,i=e.integrity,c=!i||i===r;n=await t.fetch(new Request(e,{integrity:i||r})),r&&c&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}else throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new l("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,a]of this.plugins.entries())a!==p.copyRedirectedCacheableResponsesPlugin&&(a===p.defaultPrecacheCacheabilityPlugin&&(e=n),a.cacheWillUpdate&&t++);t===0?this.plugins.push(p.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}p.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}};p.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await le(s):s}};class we{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new p({cacheName:m.getPrecacheName(e),plugins:[...t,new oe({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:a,url:r}=ie(n),i=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==a)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:a});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==n.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(a,n.integrity)}if(this._urlsToCacheKeys.set(r,a),this._urlsToCacheModes.set(r,i),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return S(e,async()=>{const t=new ce;this.strategy.plugins.push(t);for(const[r,i]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(i),o=this._urlsToCacheModes.get(r),h=new Request(r,{integrity:c,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:h,event:e}))}const{updatedURLs:n,notUpdatedURLs:a}=t;return{updatedURLs:n,notUpdatedURLs:a}})}activate(e){return S(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),n=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),r=[];for(const i of n)a.has(i.url)||(await t.delete(i),r.push(i.url));return{deletedURLs:r}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let D;const j=()=>(D||(D=new we),D);try{self["workbox:routing:6.4.1"]&&_()}catch{}const q="GET",x=s=>s&&typeof s=="object"?s:{handle:s};class y{constructor(e,t,n=q){this.handler=x(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=x(e)}}class ye extends y{constructor(e,t,n){const a=({url:r})=>{const i=e.exec(r.href);if(!!i&&!(r.origin!==location.origin&&i.index!==0))return i.slice(1)};super(a,t,n)}}class _e{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const r=new Request(...a);return this.handleRequest({request:r,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:n});let c=i&&i.handler;const o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;let h;try{h=c.handle({url:n,request:e,event:t,params:r})}catch(u){h=Promise.reject(u)}const g=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||g)&&(h=h.catch(async u=>{if(g)try{return await g.handle({url:n,request:e,event:t,params:r})}catch(N){N instanceof Error&&(u=N)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw u})),h}findMatchingRoute({url:e,sameOrigin:t,request:n,event:a}){const r=this._routes.get(n.method)||[];for(const i of r){let c;const o=i.match({url:e,sameOrigin:t,request:n,event:a});if(o)return c=o,(Array.isArray(c)&&c.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(c=void 0),{route:i,params:c}}return{}}setDefaultHandler(e,t=q){this._defaultHandlerMap.set(t,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}let R;const Re=()=>(R||(R=new _e,R.addFetchListener(),R.addCacheListener()),R);function F(s,e,t){let n;if(typeof s=="string"){const r=new URL(s,location.href),i=({url:c})=>c.href===r.href;n=new y(i,e,t)}else if(s instanceof RegExp)n=new ye(s,e,t);else if(typeof s=="function")n=new y(s,e,t);else if(s instanceof y)n=s;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return Re().registerRoute(n),n}function be(s,e=[]){for(const t of[...s.searchParams.keys()])e.some(n=>n.test(t))&&s.searchParams.delete(t);return s}function*Ce(s,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(s,location.href);r.hash="",yield r.href;const i=be(r,e);if(yield i.href,t&&i.pathname.endsWith("/")){const c=new URL(i.href);c.pathname+=t,yield c.href}if(n){const c=new URL(i.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:r});for(const o of c)yield o.href}}class xe extends y{constructor(e,t){const n=({request:a})=>{const r=e.getURLsToCacheKeys();for(const i of Ce(a.url,t)){const c=r.get(i);if(c){const o=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:o}}}};super(n,e.strategy)}}function Ee(s){const e=j(),t=new xe(e,s);F(t)}const De="-precache-",Le=async(s,e=De)=>{const n=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==s);return await Promise.all(n.map(a=>self.caches.delete(a))),n};function Ue(){self.addEventListener("activate",s=>{const e=m.getPrecacheName();s.waitUntil(Le(e).then(t=>{}))})}function Te(s){j().precache(s)}function Pe(s,e){Te(s),Ee(e)}class ke extends W{async _handle(e,t){let n=await t.cacheMatch(e),a;if(!n)try{n=await t.fetchAndCachePut(e)}catch(r){r instanceof Error&&(a=r)}if(!n)throw new l("no-response",{url:e.url,error:a});return n}}function H(s){s.then(()=>{})}const Ie=(s,e)=>e.some(t=>s instanceof t);let V,$;function Ne(){return V||(V=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Me(){return $||($=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G=new WeakMap,L=new WeakMap,Q=new WeakMap,U=new WeakMap,T=new WeakMap;function Ke(s){const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("success",r),s.removeEventListener("error",i)},r=()=>{t(f(s.result)),a()},i=()=>{n(s.error),a()};s.addEventListener("success",r),s.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&G.set(t,s)}).catch(()=>{}),T.set(e,s),e}function Ae(s){if(L.has(s))return;const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",i),s.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",r),s.addEventListener("error",i),s.addEventListener("abort",i)});L.set(s,e)}let P={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return L.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Q.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return f(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Oe(s){P=s(P)}function Se(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(k(this),e,...t);return Q.set(n,e.sort?e.sort():[e]),f(n)}:Me().includes(s)?function(...e){return s.apply(k(this),e),f(G.get(this))}:function(...e){return f(s.apply(k(this),e))}}function ve(s){return typeof s=="function"?Se(s):(s instanceof IDBTransaction&&Ae(s),Ie(s,Ne())?new Proxy(s,P):s)}function f(s){if(s instanceof IDBRequest)return Ke(s);if(U.has(s))return U.get(s);const e=ve(s);return e!==s&&(U.set(s,e),T.set(e,s)),e}const k=s=>T.get(s);function Be(s,e,{blocked:t,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(s,e),c=f(i);return n&&i.addEventListener("upgradeneeded",o=>{n(f(i.result),o.oldVersion,o.newVersion,f(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),c.then(o=>{r&&o.addEventListener("close",()=>r()),a&&o.addEventListener("versionchange",()=>a())}).catch(()=>{}),c}function We(s,{blocked:e}={}){const t=indexedDB.deleteDatabase(s);return e&&t.addEventListener("blocked",()=>e()),f(t).then(()=>{})}const je=["get","getKey","getAll","getAllKeys","count"],qe=["put","add","delete","clear"],I=new Map;function z(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(I.get(e))return I.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=qe.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||je.includes(t)))return;const r=async function(i,...c){const o=this.transaction(i,a?"readwrite":"readonly");let h=o.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),a&&o.done]))[0]};return I.set(e,r),r}Oe(s=>O(A({},s),{get:(e,t,n)=>z(e,t)||s.get(e,t,n),has:(e,t)=>!!z(e,t)||s.has(e,t)}));try{self["workbox:expiration:6.4.1"]&&_()}catch{}const Fe="workbox-expiration",b="cache-entries",J=s=>{const e=new URL(s,location.href);return e.hash="",e.href};class He{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(b,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&We(this._cacheName)}async setTimestamp(e,t){e=J(e);const n={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(b,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const n=await(await this.getDb()).get(b,this._getId(e));return n==null?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let a=await n.transaction(b).store.index("timestamp").openCursor(null,"prev");const r=[];let i=0;for(;a;){const o=a.value;o.cacheName===this._cacheName&&(e&&o.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}const c=[];for(const o of r)await n.delete(b,o.id),c.push(o.url);return c}_getId(e){return this._cacheName+"|"+J(e)}async getDb(){return this._db||(this._db=await Be(Fe,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class Ve{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new He(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const a of t)await n.delete(a,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,H(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<n:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}function $e(s){B.add(s)}class Ge{constructor(e={}){this.cachedResponseWillBeUsed=async({event:t,request:n,cacheName:a,cachedResponse:r})=>{if(!r)return null;const i=this._isResponseDateFresh(r),c=this._getCacheExpiration(a);H(c.expireEntries());const o=c.updateTimestamp(n.url);if(t)try{t.waitUntil(o)}catch{}return i?r:null},this.cacheDidUpdate=async({cacheName:t,request:n})=>{const a=this._getCacheExpiration(t);await a.updateTimestamp(n.url),await a.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&$e(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===m.getRuntimeName())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new Ve(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const n=Date.now();return t>=n-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),a=new Date(t).getTime();return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}F(/.*(www.ign.es\/wms-inspire|openstreetmap|opentopomap).*/,new ke({cacheName:"cache-map",plugins:[new Ge({maxEntries:500,maxAgeSeconds:24*60*60})]}));Ue();self.addEventListener("message",s=>{s.data&&s.data.type==="SKIP_WAITING"&&self.skipWaiting()});Pe([{"revision":null,"url":"assets/index.e4f7ad5d.css"},{"revision":null,"url":"assets/index.ed26938d.js"},{"revision":null,"url":"assets/vendor.d65df07c.js"},{"revision":"aefc22c49a3ce0cbcb01fe190d23b5f7","url":"index.html"},{"revision":"aaa56f365dcb8ab9a38667fadc9ea758","url":"img/favicon.svg"},{"revision":"5e0bd1c281a62a380d7a948085bfe2d1","url":"robots.txt"},{"revision":"d6de97c4deeb4b0352f51d3d5a3db476","url":"fonts/ubuntu.woff2"},{"revision":"d379118f2cd6a5fea1ff6608eeb7fb09","url":"icons/apple-touch-icon.png"},{"revision":"fbce62186574f5a028bc54a0696216fe","url":"icons/android-chrome-192x192.png"},{"revision":"3a27431b07a176a154e28e2a1fc645f6","url":"icons/android-chrome-512x512.png"},{"revision":"7c3af6415ad2c1c03bc501ef0db430fd","url":"markers/pin-icon-end.png"},{"revision":"03e932422ce5f6ce1be68aada0557424","url":"markers/pin-icon-start.png"},{"revision":"0c6faef174039bf253be61e5cf380e45","url":"markers/pin-icon-wpt.png"},{"revision":"5094ae9c7e31b81ee102cd92d6f80187","url":"markers/pin-shadow.png"},{"revision":"2273e3d8ad9264b7daa5bdbf8e6b47f8","url":"markers/marker-icon.png"},{"revision":"401d815dc206b8dc1b17cd0e37695975","url":"markers/marker-icon-2x.png"},{"revision":"44a526eed258222515aa21eaffd14a96","url":"markers/marker-shadow.png"},{"revision":"38b3043dd9ee79cc1cefbd597e19d3e4","url":"manifest.webmanifest"}]);
