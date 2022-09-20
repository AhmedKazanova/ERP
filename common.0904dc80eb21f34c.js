"use strict";(self.webpackChunkAngularERP=self.webpackChunkAngularERP||[]).push([[592],{4021:($,E,r)=>{r.d(E,{sN:()=>A,z1:()=>re,mZ:()=>ie,TD:()=>ae});var z=r(7579),S=r(9646),p=r(8306),C=r(4707),I=r(1848),v=r(515),g=r(4986),b=r(4482),f=r(5032),d=r(5403),w=r(5963);var N=r(9300),u=r(8505),D=r(5698),K=r(5577),Y=r(4004),G=r(262),F=r(3900),W=r(8675),R=r(3099),J=r(6895),l=r(4650);function k(n){return Boolean(n.parentElement&&"picture"===n.parentElement.nodeName.toLowerCase())}function L(n){return"img"===n.nodeName.toLowerCase()}function B(n,e,t){return L(n)?t&&"srcset"in n?n.srcset=e:n.src=e:n.style.backgroundImage=`url('${e}')`,n}function x(n){return e=>{const t=e.parentElement.getElementsByTagName("source");for(let s=0;s<t.length;s++){const o=t[s].getAttribute(n);o&&("srcset"in t[s]?t[s].srcset=o:t[s].src=o)}}}const Q=x("defaultImage"),T=x("lazyLoad"),X=x("errorImage");function M(n){return(e,t,s)=>{L(e)&&k(e)&&n(e),t&&B(e,t,s)}}const q=M(Q),_=M(T),ee=M(X);function H(n,e){n.className=n.className.replace(e,"")}function P(n,e){n.className.includes(e)||(n.className+=` ${e}`)}class V extends class te{constructor(){this.navigator=function U(){return typeof window<"u"?window.navigator:void 0}()}setPlatformId(e){this.platformId=e}onDestroy(e){}onAttributeChange(e){}}{setup(e){q(e.element,e.defaultImagePath,e.useSrcset),e.imagePath&&P(e.element,"ng-lazyloading"),function ne(n,e){return n.className&&n.className.includes(e)}(e.element,"ng-lazyloaded")&&H(e.element,"ng-lazyloaded")}finally(e){P(e.element,"ng-lazyloaded"),H(e.element,"ng-lazyloading")}loadImage(e){if(this.skipLazyLoading(e))return[e.imagePath];const{element:t,useSrcset:s,imagePath:o,decode:i}=e;let a;return L(t)&&k(t)?(a=t.parentNode.cloneNode(!0).getElementsByTagName("img")[0],T(a),B(a,o,s)):(a=new Image,L(t)&&t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),L(t)&&t.sizes&&(a.sizes=t.sizes),s&&"srcset"in a?a.srcset=o:a.src=o),i&&a.decode?a.decode().then(()=>o):new Promise((m,O)=>{a.onload=()=>m(o),a.onerror=()=>O(null)})}setErrorImage(e,t){const{element:s,useSrcset:o,errorImagePath:i}=t;ee(s,i,o),P(s,"ng-failed-lazyloaded")}setLoadedImage(e,t){const{element:s,useSrcset:o}=t;_(s,e,o)}isDisabled(){return(0,J.PM)(this.platformId)&&!this.isBot()}skipLazyLoading(e){return this.isBot(e)}isBot(e){return!!this.navigator?.userAgent&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot|prerender/i.test(this.navigator.userAgent)}}class se extends V{constructor(){super(...arguments),this.observers=new WeakMap,this.intersectionSubject=new z.x,this.uniqKey={}}getObservable(e){if(this.skipLazyLoading(e))return(0,S.of)({isIntersecting:!0});if(e.customObservable)return e.customObservable;const t=e.scrollContainer||this.uniqKey,s={root:e.scrollContainer||null};e.offset&&(s.rootMargin=`${e.offset}px`);let o=this.observers.get(t);return o||(o=new IntersectionObserver(i=>this.loadingCallback(i),s),this.observers.set(t,o)),o.observe(e.element),p.y.create(i=>{const a=this.intersectionSubject.pipe((0,N.h)(m=>m.target===e.element)).subscribe(i);return()=>{a.unsubscribe(),o.unobserve(e.element)}})}isVisible(e){return e.isIntersecting}loadingCallback(e){e.forEach(t=>this.intersectionSubject.next(t))}}const A=new l.OlP("LazyLoadImageHooks");let re=(()=>{class n{constructor(t,s,o,i){this.onStateChange=new l.vpe,this.elementRef=t,this.ngZone=s,this.propertyChanges$=new C.t,this.hooks=i,this.hooks.setPlatformId(o),this.uid=Math.random().toString(36).substr(2,9)}ngOnChanges(){!0===this.debug&&!this.debugSubscription&&(this.debugSubscription=this.onStateChange.subscribe(t=>console.log(t))),this.propertyChanges$.next({element:this.elementRef.nativeElement,imagePath:this.lazyImage,defaultImagePath:this.defaultImage,errorImagePath:this.errorImage,useSrcset:this.useSrcset,offset:this.offset?0|this.offset:0,scrollContainer:this.scrollTarget,customObservable:this.customObservable,decode:this.decode,onStateChange:this.onStateChange,id:this.uid})}ngAfterContentInit(){if(this.hooks.isDisabled())return null;this.ngZone.runOutsideAngular(()=>{this.loadSubscription=this.propertyChanges$.pipe((0,u.b)(t=>this.hooks.onAttributeChange(t)),(0,u.b)(t=>t.onStateChange.emit({reason:"setup"})),(0,u.b)(t=>this.hooks.setup(t)),(0,F.w)(t=>t.imagePath?this.hooks.getObservable(t).pipe(function oe(n,e){return t=>t.pipe((0,u.b)(s=>e.onStateChange.emit({reason:"observer-emit",data:s})),(0,N.h)(s=>n.isVisible(s,e)),(0,D.q)(1),(0,u.b)(()=>e.onStateChange.emit({reason:"start-loading"})),(0,K.z)(()=>n.loadImage(e)),(0,u.b)(()=>e.onStateChange.emit({reason:"mount-image"})),(0,u.b)(s=>n.setLoadedImage(s,e)),(0,u.b)(()=>e.onStateChange.emit({reason:"loading-succeeded"})),(0,Y.U)(()=>!0),(0,G.K)(s=>(e.onStateChange.emit({reason:"loading-failed",data:s}),n.setErrorImage(s,e),(0,S.of)(!1))),(0,u.b)(()=>{e.onStateChange.emit({reason:"finally"}),n.finally(e)}))}(this.hooks,t)):(0,I.F)())).subscribe({next:()=>null})})}ngOnDestroy(){this.propertyChanges$.pipe((0,D.q)(1)).subscribe({next:t=>this.hooks.onDestroy(t)}).unsubscribe(),this.loadSubscription?.unsubscribe(),this.debugSubscription?.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(l.Y36(l.SBq),l.Y36(l.R0b),l.Y36(l.Lbi),l.Y36(A))},n.\u0275dir=l.lG2({type:n,selectors:[["","lazyLoad",""]],inputs:{lazyImage:["lazyLoad","lazyImage"],defaultImage:"defaultImage",errorImage:"errorImage",scrollTarget:"scrollTarget",customObservable:"customObservable",offset:"offset",useSrcset:"useSrcset",decode:"decode",debug:"debug"},outputs:{onStateChange:"onStateChange"},features:[l.TTD]}),n})(),ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({providers:[{provide:A,useClass:se}]}),n})();class c{constructor(e,t,s,o){this.left=e,this.top=t,this.right=s,this.bottom=o}static fromElement(e){const{left:t,top:s,right:o,bottom:i}=e.getBoundingClientRect();return 0===t&&0===s&&0===o&&0===i?c.empty:new c(t,s,o,i)}static fromWindow(e){return new c(0,0,e.innerWidth,e.innerHeight)}inflate(e){this.left-=e,this.top-=e,this.right+=e,this.bottom+=e}intersectsWith(e){return e.left<this.right&&this.left<e.right&&e.top<this.bottom&&this.top<e.bottom}getIntersectionWith(e){const t=Math.max(this.left,e.left),s=Math.max(this.top,e.top),o=Math.min(this.right,e.right),i=Math.min(this.bottom,e.bottom);return o>=t&&i>=s?new c(t,s,o,i):c.empty}}c.empty=new c(0,0,0,0);class ae extends V{constructor(){super(...arguments),this.getWindow=()=>window,this.scrollListeners=new WeakMap,this.getScrollListener=e=>{if(!e||"function"!=typeof e.addEventListener)return console.warn("`addEventListener` on "+e+" (scrollTarget) is not a function. Skipping this target"),(0,v.c)();const t=this.scrollListeners.get(e);if(t)return t;const s=p.y.create(i=>{const a="scroll",m=le=>i.next(le),O={passive:!0,capture:!1};return e.addEventListener(a,m,O),()=>e.removeEventListener(a,m,O)}),o=this.sampleObservable(s);return this.scrollListeners.set(e,o),o}}getObservable(e){return this.skipLazyLoading(e)?(0,S.of)("load"):e.customObservable?e.customObservable.pipe((0,W.O)("")):this.getScrollListener(e.scrollContainer?e.scrollContainer:this.getWindow())}isVisible(e,t){const s=c.fromElement(t.element);if(s===c.empty)return!1;const o=c.fromWindow(this.getWindow());if(s.inflate(t.offset),t.scrollContainer){const a=c.fromElement(t.scrollContainer).getIntersectionWith(o);return s.intersectsWith(a)}return s.intersectsWith(o)}sampleObservable(e,t){return e.pipe(function j(n,e=g.z){return function h(n){return(0,b.e)((e,t)=>{let s=!1,o=null;e.subscribe((0,d.x)(t,i=>{s=!0,o=i})),n.subscribe((0,d.x)(t,()=>{if(s){s=!1;const i=o;o=null,t.next(i)}},f.Z))})}(function Z(n=0,e=g.z){return n<0&&(n=0),(0,w.H)(n,n,e)}(n,e))}(100,t),(0,R.B)(),(0,W.O)(""))}}},5861:($,E,r)=>{function z(p,C,I,v,g,b,f){try{var d=p[b](f),h=d.value}catch(w){return void I(w)}d.done?C(h):Promise.resolve(h).then(v,g)}function S(p){return function(){var C=this,I=arguments;return new Promise(function(v,g){var b=p.apply(C,I);function f(h){z(b,v,g,f,d,"next",h)}function d(h){z(b,v,g,f,d,"throw",h)}f(void 0)})}}r.d(E,{Z:()=>S})}}]);