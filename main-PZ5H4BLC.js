import{b as B,g as _,i as U}from"./chunk-27EIMFBE.js";import{b as D,c as E,d as O,e as S,g as T,h as x,i as k,j as m}from"./chunk-QY6754KU.js";import"./chunk-5IC5DNT2.js";import{$ as l,Ga as b,Wa as c,X as f,Xa as A,Ya as R,_ as g,_a as w,ab as N,bb as j,da as y,ea as v,ja as M,ka as d,lc as h,na as C,tb as F,wc as P,ya as I}from"./chunk-REQTKGLC.js";var X=[{path:"auth",loadChildren:()=>import("./chunk-N2FH62QN.js").then(i=>i.AuthModule)},{path:"pages",loadChildren:()=>import("./chunk-HN4PRBKE.js").then(i=>i.PagesModule)}],V=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e}),e.\u0275inj=l({imports:[m.forRoot(X),m]});let i=e;return i})();var z=(()=>{let e=class e{constructor(t,o,n){this.router=t,this.document=n,this.title="vehicles-park",t.navigate(["pages","vehicles"],{relativeTo:o}),this.document.body.dir="ltr"}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)(c(k),c(T),c(h))},e.\u0275cmp=M({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(o,n){o&1&&F(0,"router-outlet")},dependencies:[x]});let i=e;return i})();var Y="@",Z=(()=>{let e=class e{constructor(t,o,n,s,a){this.doc=t,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=v(R,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-DM6RCYHG.js")).catch(o=>{throw new f(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,o){let n=this.delegate.createRenderer(t,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new u(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let W=a.createRenderer(t,o);s.use(W)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){A()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let i=e;return i})(),u=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,o){this.delegate.insertBefore(e,r,t,o)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,o){this.delegate.setAttribute(e,r,t,o)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,o){this.delegate.setStyle(e,r,t,o)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(o=>o.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(o=>o.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Y)}};function H(i="animations"){return N("NgAsyncAnimations"),C([{provide:w,useFactory:(e,r,t)=>new Z(e,r,t,i),deps:[h,E,j]},{provide:b,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var L=(()=>{let e=class e{constructor(t){this.injector=t,_.injector=t}};e.\u0275fac=function(o){return new(o||e)(y(I))},e.\u0275mod=d({type:e,bootstrap:[z]}),e.\u0275inj=l({providers:[H()],imports:[S,P,V,B.forRoot(),D,U]});let i=e;return i})();O().bootstrapModule(L).catch(i=>console.error(i));