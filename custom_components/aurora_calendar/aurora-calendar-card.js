/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$2=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$1=t=>t,s$1=t$2.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$2.litHtmlPolyfillSupport;B?.(S,k),(t$2.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

const CONFIG_DEFAULTS = {
    week_start: "sunday",
    height_mode: "auto",
    fixed_height: "640px",
    dim_past_events: true,
    show_event_time: true,
    show_location: true,
    event_text_color: "auto",
    time_format: "12h",
    visible_start_hour: 6,
    visible_end_hour: 22,
    event_font_size: 14,
    event_font_family: "inherit",
    show_calendar_grid_lines: true,
    keep_all_day_events_visible: false,
    glass_background: false,
    card_opacity: 100,
    background_media: null,
    background_image: "",
    background_image_opacity: 35,
    background_blur: 0,
    show_filter: true,
    show_view_selector: true,
    show_jump_to: true,
    show_nav: true,
    show_weather: true,
    weather_icon_style: "static",
    show_fab: true,
};

/**
 * Pure helpers for working with the create/edit-event draft state.
 *
 * Extracted from `aurora-calendar-card.ts` so they can be unit-tested
 * without instantiating the full Lit element. Anything in this module
 * MUST be a pure function — no `this`, no DOM, no `hass`.
 */
/**
 * Auto-correct silently-fixable issues on the draft. Currently:
 *   - end date < start date  →  bumped to equal start date
 *
 * Times are NOT auto-corrected: validation surfaces them inline so the
 * user can see and fix what they typed.
 */
function normalizeDraft(draft) {
    if (!draft.startDate)
        return draft;
    if (!draft.endDate || draft.endDate < draft.startDate) {
        return { ...draft, endDate: draft.startDate };
    }
    return draft;
}
/**
 * Returns a user-facing error string when the draft is invalid, or
 * empty string when it's OK. Used to disable the Save button and show
 * an inline message in the dialog.
 */
function draftError(draft) {
    if (!draft.startDate || !draft.endDate)
        return "";
    if (draft.allDay) {
        return draft.endDate < draft.startDate
            ? "End date must be on or after start date."
            : "";
    }
    if (!draft.startTime || !draft.endTime)
        return "";
    const start = `${draft.startDate} ${draft.startTime}`;
    const end = `${draft.endDate} ${draft.endTime}`;
    if (end <= start)
        return "End time must be after start time.";
    return "";
}

const TRANSLATIONS = {
    en: {
        allDay: "all-day",
        animated: "Animated",
        appearance: "Appearance",
        backgroundBlur: "Background blur",
        backgroundImage: "Background image URL",
        backgroundImageHelper: "Optional. Example: /local/family-background.jpg",
        backgroundImageOpacity: "Background image opacity",
        backgroundMedia: "Background image",
        backgroundMediaHelper: "Choose an image from Home Assistant media. Manual URL below remains available as a fallback.",
        background: "Background",
        calendarFilters: "Calendar filters",
        calendarGridLines: "Calendar grid lines",
        calendarGridLinesDesc: "Show dividers in Month, Week, and Biweek views.",
        calendarNavigation: "Calendar navigation",
        calendarView: "Calendar view",
        close: "Close",
        cleanDashboard: "Clean dashboard",
        date: "Date",
        default: "Default",
        description: "Description",
        dimPastEvents: "Dim past events",
        dimPastEventsDesc: "Reduces opacity once an event has ended.",
        eventFont: "Event font",
        eventFontSize: "Event font size",
        eventDisplay: "Event display",
        extraLarge: "Extra large",
        features: "Features",
        filters: "Filters",
        friendlyRounded: "Friendly rounded",
        general: "General",
        fixedHeight: "Fixed calendar height",
        fixedHeightHelper: "Use any CSS height, for example 640px, 70vh, or 42rem.",
        heightAuto: "Auto fit screen",
        heightFixed: "Fixed height",
        heightHomeAssistant: "Home Assistant layout",
        heightMode: "Height mode",
        heightNatural: "Natural height",
        hi: "HI",
        integration: "Integration",
        integrationHelper: "Domain of your Aurora Calendar integration (usually aurora_calendar)",
        jumpTo: "Jump To",
        keepAllDayEventsVisible: "Keep all-day events visible",
        keepAllDayEventsVisibleDesc: "Always keep all-day events pinned at the top instead of hiding them when active events reach them.",
        large: "Large",
        loading: "Loading...",
        lo: "LO",
        medium: "Medium",
        monday: "Monday",
        next: "Next",
        nextWeek: "Next Week",
        openWeatherForecast: "Open weather forecast",
        previous: "Previous",
        removeBackgroundImage: "Remove selected image",
        serif: "Serif",
        showCalendars: "Show calendars",
        eventTextColor: "Event text color",
        eventTextColorAuto: "Auto (contrast)",
        eventTextColorWhite: "Always white",
        eventTextColorDark: "Always dark",
        showEventTimes: "Show event times",
        showEventTimesDesc: "Display start time on event chips.",
        scheduleWindow: "Schedule window",
        small: "Small",
        static: "Static",
        sunday: "Sunday",
        timeFormat: "Time format",
        time: "Time",
        today: "Today",
        twelveHour: "12 hour",
        twentyFourHour: "24 hour",
        unconfigured: "Open Settings -> Integrations -> Aurora Calendar -> Configure to add your calendars.",
        viewBiweek: "Biweek",
        viewRolling2Weeks: "Rolling 2 Weeks",
        viewMonth: "Month",
        viewNext7Days: "Next 7 Days",
        viewToday: "Today",
        viewWeek: "Week",
        calendar: "Calendar",
        addEvent: "Add event",
        allDayLabel: "All day",
        cardOpacity: "Card opacity",
        cancel: "Cancel",
        createEvent: "Create event",
        deleteEvent: "Delete event",
        deleteEventConfirm: "Delete this event?",
        deleteEventUnavailable: "This calendar event cannot be deleted from Aurora.",
        editEvent: "Edit event",
        end: "End",
        glassBackground: "Glass background",
        glassBackgroundDesc: "Adds a soft translucent surface so dashboard backgrounds or images can show through.",
        location: "Location",
        noWritableCalendars: "No configured calendars currently report event creation support.",
        save: "Save",
        start: "Start",
        title: "Title",
        updateEvent: "Update event",
        visibleEndHour: "Visible end hour",
        visibleEndHourHelper: "Exclusive end; 22:00 shows through 9:59 PM.",
        visibleStartHour: "Visible start hour",
        showFab: "Add-event button",
        showFabDesc: "Show the floating + button for creating new events.",
        showLocation: "Show location",
        showLocationDesc: "Display the event location below the time on event cards.",
        showFilter: "Calendar filter",
        showFilterDesc: "Show the filter button for toggling calendars on/off.",
        showJumpTo: "Jump to date",
        showJumpToDesc: "Show the date-picker button for jumping to a specific date.",
        showNav: "Navigation arrows",
        showNavDesc: "Show the previous/today/next navigation controls.",
        showViewSelector: "View selector",
        showViewSelectorDesc: "Show the dropdown for switching between Month, Week, and other views.",
        toolbar: "Toolbar",
        weatherForecast: "Weather forecast",
        weatherForecastDesc: "Show daily condition icon and temperature on each day cell.",
        weatherIconStyle: "Weather icon style",
        weekStartsOn: "Week starts on",
        visualBehavior: "Visual behavior",
    },
    es: {
        allDay: "todo el dia",
        animated: "Animado",
        appearance: "Apariencia",
        backgroundBlur: "Desenfoque del fondo",
        backgroundImage: "URL de imagen de fondo",
        backgroundImageHelper: "Opcional. Ejemplo: /local/family-background.jpg",
        backgroundImageOpacity: "Opacidad de imagen de fondo",
        backgroundMedia: "Imagen de fondo",
        backgroundMediaHelper: "Elige una imagen desde medios de Home Assistant. La URL manual queda disponible como respaldo.",
        background: "Fondo",
        calendarFilters: "Filtros del calendario",
        calendarGridLines: "Lineas del calendario",
        calendarGridLinesDesc: "Mostrar divisores en las vistas Mes, Semana y Quincena.",
        calendarNavigation: "Navegacion del calendario",
        calendarView: "Vista del calendario",
        cleanDashboard: "Panel limpio",
        default: "Predeterminado",
        dimPastEvents: "Atenuar eventos pasados",
        dimPastEventsDesc: "Reduce la opacidad cuando un evento ha terminado.",
        eventFont: "Fuente de eventos",
        eventFontSize: "Tamano de fuente de eventos",
        eventDisplay: "Visualizacion de eventos",
        extraLarge: "Extra grande",
        features: "Funciones",
        filters: "Filtros",
        friendlyRounded: "Redondeada amigable",
        general: "General",
        fixedHeight: "Altura fija del calendario",
        fixedHeightHelper: "Usa cualquier altura CSS, por ejemplo 640px, 70vh o 42rem.",
        heightAuto: "Ajustar a la pantalla",
        heightFixed: "Altura fija",
        heightHomeAssistant: "Diseno de Home Assistant",
        heightMode: "Modo de altura",
        heightNatural: "Altura natural",
        hi: "MAX",
        integration: "Integracion",
        integrationHelper: "Dominio de tu integracion Aurora Calendar (normalmente aurora_calendar)",
        jumpTo: "Ir a",
        keepAllDayEventsVisible: "Mantener visibles los eventos de todo el dia",
        keepAllDayEventsVisibleDesc: "Mantiene los eventos de todo el dia fijos arriba en vez de ocultarlos cuando llegan eventos activos.",
        large: "Grande",
        loading: "Cargando...",
        lo: "MIN",
        medium: "Mediano",
        monday: "Lunes",
        next: "Siguiente",
        nextWeek: "Proxima semana",
        openWeatherForecast: "Abrir pronostico del tiempo",
        previous: "Anterior",
        removeBackgroundImage: "Quitar imagen seleccionada",
        serif: "Serif",
        showCalendars: "Mostrar calendarios",
        showEventTimes: "Mostrar horas de eventos",
        showEventTimesDesc: "Muestra la hora de inicio en las tarjetas de eventos.",
        scheduleWindow: "Horario visible",
        small: "Pequeno",
        static: "Estatico",
        sunday: "Domingo",
        timeFormat: "Formato de hora",
        today: "Hoy",
        twelveHour: "12 horas",
        twentyFourHour: "24 horas",
        unconfigured: "Abre Ajustes -> Integraciones -> Aurora Calendar -> Configurar para agregar tus calendarios.",
        viewBiweek: "Quincena",
        viewMonth: "Mes",
        viewNext7Days: "Proximos 7 dias",
        viewToday: "Hoy",
        viewWeek: "Semana",
        cardOpacity: "Opacidad de la tarjeta",
        glassBackground: "Fondo tipo cristal",
        glassBackgroundDesc: "Agrega una superficie translucida para mostrar fondos o imagenes del panel.",
        visibleEndHour: "Hora final visible",
        visibleEndHourHelper: "Fin exclusivo; 22:00 muestra hasta las 9:59 PM.",
        visibleStartHour: "Hora inicial visible",
        weatherForecast: "Pronostico del tiempo",
        weatherForecastDesc: "Muestra condicion diaria y temperatura en cada dia.",
        weatherIconStyle: "Estilo de icono del tiempo",
        weekStartsOn: "La semana empieza el",
        visualBehavior: "Comportamiento visual",
    },
    de: {
        allDay: "ganztagig",
        animated: "Animiert",
        appearance: "Darstellung",
        calendarFilters: "Kalenderfilter",
        calendarGridLines: "Kalender-Rasterlinien",
        calendarGridLinesDesc: "Trennlinien in Monats-, Wochen- und Zweiwochenansicht anzeigen.",
        calendarNavigation: "Kalendernavigation",
        calendarView: "Kalenderansicht",
        cleanDashboard: "Klares Dashboard",
        default: "Standard",
        dimPastEvents: "Vergangene Ereignisse abdunkeln",
        dimPastEventsDesc: "Verringert die Deckkraft, sobald ein Ereignis beendet ist.",
        eventFont: "Ereignisschrift",
        eventFontSize: "Ereignis-Schriftgroesse",
        extraLarge: "Extra gross",
        features: "Funktionen",
        filters: "Filter",
        friendlyRounded: "Freundlich gerundet",
        general: "Allgemein",
        hi: "MAX",
        integration: "Integration",
        integrationHelper: "Domain deiner Aurora Calendar Integration (normalerweise aurora_calendar)",
        jumpTo: "Springen zu",
        large: "Gross",
        loading: "Wird geladen...",
        lo: "MIN",
        medium: "Mittel",
        monday: "Montag",
        next: "Weiter",
        nextWeek: "Naechste Woche",
        openWeatherForecast: "Wettervorhersage oeffnen",
        previous: "Zurueck",
        serif: "Serif",
        showCalendars: "Kalender anzeigen",
        showEventTimes: "Ereigniszeiten anzeigen",
        showEventTimesDesc: "Startzeit auf Ereignis-Chips anzeigen.",
        small: "Klein",
        static: "Statisch",
        sunday: "Sonntag",
        timeFormat: "Zeitformat",
        today: "Heute",
        twelveHour: "12 Stunden",
        twentyFourHour: "24 Stunden",
        unconfigured: "Oeffne Einstellungen -> Integrationen -> Aurora Calendar -> Konfigurieren, um deine Kalender hinzuzufuegen.",
        viewBiweek: "Zwei Wochen",
        viewMonth: "Monat",
        viewNext7Days: "Naechste 7 Tage",
        viewToday: "Heute",
        viewWeek: "Woche",
        visibleEndHour: "Sichtbare Endstunde",
        visibleEndHourHelper: "Exklusives Ende; 22:00 zeigt bis 21:59.",
        visibleStartHour: "Sichtbare Startstunde",
        weatherForecast: "Wettervorhersage",
        weatherForecastDesc: "Taegliches Wettersymbol und Temperatur in jeder Tageszelle anzeigen.",
        weatherIconStyle: "Wettericon-Stil",
        weekStartsOn: "Woche beginnt am",
    },
    fr: {
        allDay: "toute la journee",
        animated: "Anime",
        appearance: "Apparence",
        calendarFilters: "Filtres du calendrier",
        calendarGridLines: "Lignes de grille du calendrier",
        calendarGridLinesDesc: "Afficher les separateurs dans les vues Mois, Semaine et Deux semaines.",
        calendarNavigation: "Navigation du calendrier",
        calendarView: "Vue du calendrier",
        cleanDashboard: "Tableau de bord epure",
        default: "Par defaut",
        dimPastEvents: "Attenuer les evenements passes",
        dimPastEventsDesc: "Reduit l'opacite lorsqu'un evenement est termine.",
        eventFont: "Police des evenements",
        eventFontSize: "Taille de police des evenements",
        extraLarge: "Tres grand",
        features: "Fonctionnalites",
        filters: "Filtres",
        friendlyRounded: "Arrondie conviviale",
        general: "General",
        hi: "MAX",
        integration: "Integration",
        integrationHelper: "Domaine de votre integration Aurora Calendar (generalement aurora_calendar)",
        jumpTo: "Aller a",
        large: "Grand",
        loading: "Chargement...",
        lo: "MIN",
        medium: "Moyen",
        monday: "Lundi",
        next: "Suivant",
        nextWeek: "Semaine suivante",
        openWeatherForecast: "Ouvrir les previsions meteo",
        previous: "Precedent",
        serif: "Serif",
        showCalendars: "Afficher les calendriers",
        showEventTimes: "Afficher les heures des evenements",
        showEventTimesDesc: "Afficher l'heure de debut sur les cartes d'evenement.",
        small: "Petit",
        static: "Statique",
        sunday: "Dimanche",
        timeFormat: "Format de l'heure",
        today: "Aujourd'hui",
        twelveHour: "12 heures",
        twentyFourHour: "24 heures",
        unconfigured: "Ouvrez Parametres -> Integrations -> Aurora Calendar -> Configurer pour ajouter vos calendriers.",
        viewBiweek: "Deux semaines",
        viewMonth: "Mois",
        viewNext7Days: "7 prochains jours",
        viewToday: "Aujourd'hui",
        viewWeek: "Semaine",
        visibleEndHour: "Heure de fin visible",
        visibleEndHourHelper: "Fin exclusive; 22:00 affiche jusqu'a 21:59.",
        visibleStartHour: "Heure de debut visible",
        weatherForecast: "Previsions meteo",
        weatherForecastDesc: "Afficher l'icone de condition quotidienne et la temperature sur chaque jour.",
        weatherIconStyle: "Style d'icone meteo",
        weekStartsOn: "La semaine commence le",
    },
    it: {
        allDay: "tutto il giorno",
        animated: "Animato",
        appearance: "Aspetto",
        calendarFilters: "Filtri calendario",
        calendarGridLines: "Linee griglia calendario",
        calendarGridLinesDesc: "Mostra divisori nelle viste Mese, Settimana e Bisettimanale.",
        calendarNavigation: "Navigazione calendario",
        calendarView: "Vista calendario",
        cleanDashboard: "Dashboard pulita",
        default: "Predefinito",
        dimPastEvents: "Attenua eventi passati",
        dimPastEventsDesc: "Riduce l'opacita quando un evento e terminato.",
        eventFont: "Carattere eventi",
        eventFontSize: "Dimensione carattere eventi",
        extraLarge: "Molto grande",
        features: "Funzioni",
        filters: "Filtri",
        friendlyRounded: "Arrotondato amichevole",
        general: "Generale",
        hi: "MAX",
        integration: "Integrazione",
        integrationHelper: "Dominio della tua integrazione Aurora Calendar (di solito aurora_calendar)",
        jumpTo: "Vai a",
        large: "Grande",
        loading: "Caricamento...",
        lo: "MIN",
        medium: "Medio",
        monday: "Lunedi",
        next: "Avanti",
        nextWeek: "Prossima settimana",
        openWeatherForecast: "Apri previsioni meteo",
        previous: "Indietro",
        serif: "Serif",
        showCalendars: "Mostra calendari",
        showEventTimes: "Mostra orari eventi",
        showEventTimesDesc: "Mostra l'ora di inizio sulle schede evento.",
        small: "Piccolo",
        static: "Statico",
        sunday: "Domenica",
        timeFormat: "Formato ora",
        today: "Oggi",
        twelveHour: "12 ore",
        twentyFourHour: "24 ore",
        unconfigured: "Apri Impostazioni -> Integrazioni -> Aurora Calendar -> Configura per aggiungere i calendari.",
        viewBiweek: "Due settimane",
        viewMonth: "Mese",
        viewNext7Days: "Prossimi 7 giorni",
        viewToday: "Oggi",
        viewWeek: "Settimana",
        visibleEndHour: "Ora finale visibile",
        visibleEndHourHelper: "Fine esclusiva; 22:00 mostra fino alle 21:59.",
        visibleStartHour: "Ora iniziale visibile",
        weatherForecast: "Previsioni meteo",
        weatherForecastDesc: "Mostra icona condizione giornaliera e temperatura in ogni giorno.",
        weatherIconStyle: "Stile icona meteo",
        weekStartsOn: "La settimana inizia di",
    },
    nl: {
        allDay: "hele dag",
        animated: "Geanimeerd",
        appearance: "Uiterlijk",
        calendarFilters: "Kalenderfilters",
        calendarGridLines: "Kalenderrasterlijnen",
        calendarGridLinesDesc: "Toon scheidingslijnen in maand-, week- en tweewekenweergave.",
        calendarNavigation: "Kalendernavigatie",
        calendarView: "Kalenderweergave",
        cleanDashboard: "Strak dashboard",
        default: "Standaard",
        dimPastEvents: "Afgelopen gebeurtenissen dimmen",
        dimPastEventsDesc: "Vermindert de dekking zodra een gebeurtenis is afgelopen.",
        eventFont: "Lettertype gebeurtenissen",
        eventFontSize: "Lettergrootte gebeurtenissen",
        extraLarge: "Extra groot",
        features: "Functies",
        filters: "Filters",
        friendlyRounded: "Vriendelijk afgerond",
        general: "Algemeen",
        hi: "MAX",
        integration: "Integratie",
        integrationHelper: "Domein van je Aurora Calendar-integratie (meestal aurora_calendar)",
        jumpTo: "Ga naar",
        large: "Groot",
        loading: "Laden...",
        lo: "MIN",
        medium: "Gemiddeld",
        monday: "Maandag",
        next: "Volgende",
        nextWeek: "Volgende week",
        openWeatherForecast: "Weersverwachting openen",
        previous: "Vorige",
        serif: "Serif",
        showCalendars: "Kalenders tonen",
        showEventTimes: "Tijden van gebeurtenissen tonen",
        showEventTimesDesc: "Starttijd op gebeurteniskaarten tonen.",
        small: "Klein",
        static: "Statisch",
        sunday: "Zondag",
        timeFormat: "Tijdnotatie",
        today: "Vandaag",
        twelveHour: "12 uur",
        twentyFourHour: "24 uur",
        unconfigured: "Open Instellingen -> Integraties -> Aurora Calendar -> Configureren om je kalenders toe te voegen.",
        viewBiweek: "Twee weken",
        viewMonth: "Maand",
        viewNext7Days: "Volgende 7 dagen",
        viewToday: "Vandaag",
        viewWeek: "Week",
        visibleEndHour: "Zichtbare eindtijd",
        visibleEndHourHelper: "Exclusief einde; 22:00 toont tot 21:59.",
        visibleStartHour: "Zichtbare starttijd",
        weatherForecast: "Weersverwachting",
        weatherForecastDesc: "Toon dagelijkse conditie-icoon en temperatuur in elke dagcel.",
        weatherIconStyle: "Stijl weericoon",
        weekStartsOn: "Week begint op",
    },
    pt: {
        allDay: "dia inteiro",
        animated: "Animado",
        appearance: "Aparencia",
        calendarFilters: "Filtros do calendario",
        calendarGridLines: "Linhas da grelha do calendario",
        calendarGridLinesDesc: "Mostrar divisorias nas vistas Mes, Semana e Quinzenal.",
        calendarNavigation: "Navegacao do calendario",
        calendarView: "Vista do calendario",
        cleanDashboard: "Painel limpo",
        default: "Predefinido",
        dimPastEvents: "Atenuar eventos passados",
        dimPastEventsDesc: "Reduz a opacidade quando um evento termina.",
        eventFont: "Tipo de letra dos eventos",
        eventFontSize: "Tamanho do texto dos eventos",
        extraLarge: "Extra grande",
        features: "Funcionalidades",
        filters: "Filtros",
        friendlyRounded: "Arredondado amigavel",
        general: "Geral",
        hi: "MAX",
        integration: "Integracao",
        integrationHelper: "Dominio da integracao Aurora Calendar (normalmente aurora_calendar)",
        jumpTo: "Ir para",
        large: "Grande",
        loading: "A carregar...",
        lo: "MIN",
        medium: "Medio",
        monday: "Segunda-feira",
        next: "Seguinte",
        nextWeek: "Proxima semana",
        openWeatherForecast: "Abrir previsao meteorologica",
        previous: "Anterior",
        serif: "Serif",
        showCalendars: "Mostrar calendarios",
        showEventTimes: "Mostrar horas dos eventos",
        showEventTimesDesc: "Mostra a hora de inicio nos cartoes de evento.",
        small: "Pequeno",
        static: "Estatico",
        sunday: "Domingo",
        timeFormat: "Formato da hora",
        today: "Hoje",
        twelveHour: "12 horas",
        twentyFourHour: "24 horas",
        unconfigured: "Abra Definicoes -> Integracoes -> Aurora Calendar -> Configurar para adicionar os calendarios.",
        viewBiweek: "Quinzenal",
        viewMonth: "Mes",
        viewNext7Days: "Proximos 7 dias",
        viewToday: "Hoje",
        viewWeek: "Semana",
        visibleEndHour: "Hora final visivel",
        visibleEndHourHelper: "Fim exclusivo; 22:00 mostra ate 21:59.",
        visibleStartHour: "Hora inicial visivel",
        weatherForecast: "Previsao meteorologica",
        weatherForecastDesc: "Mostrar icone da condicao diaria e temperatura em cada dia.",
        weatherIconStyle: "Estilo do icone meteorologico",
        weekStartsOn: "A semana comeca em",
    },
    "pt-BR": {
        allDay: "dia inteiro",
        animated: "Animado",
        appearance: "Aparencia",
        calendarFilters: "Filtros do calendario",
        calendarGridLines: "Linhas do calendario",
        calendarGridLinesDesc: "Mostrar divisorias nas visualizacoes Mes, Semana e Quinzenal.",
        calendarNavigation: "Navegacao do calendario",
        calendarView: "Visualizacao do calendario",
        cleanDashboard: "Painel limpo",
        default: "Padrao",
        dimPastEvents: "Escurecer eventos passados",
        dimPastEventsDesc: "Reduz a opacidade quando um evento termina.",
        eventFont: "Fonte dos eventos",
        eventFontSize: "Tamanho da fonte dos eventos",
        extraLarge: "Extra grande",
        features: "Recursos",
        filters: "Filtros",
        friendlyRounded: "Arredondada amigavel",
        general: "Geral",
        hi: "MAX",
        integration: "Integracao",
        integrationHelper: "Dominio da integracao Aurora Calendar (normalmente aurora_calendar)",
        jumpTo: "Ir para",
        large: "Grande",
        loading: "Carregando...",
        lo: "MIN",
        medium: "Medio",
        monday: "Segunda-feira",
        next: "Proximo",
        nextWeek: "Proxima semana",
        openWeatherForecast: "Abrir previsao do tempo",
        previous: "Anterior",
        serif: "Serif",
        showCalendars: "Mostrar calendarios",
        showEventTimes: "Mostrar horarios dos eventos",
        showEventTimesDesc: "Mostra o horario de inicio nos cartoes de evento.",
        small: "Pequeno",
        static: "Estatico",
        sunday: "Domingo",
        timeFormat: "Formato de hora",
        today: "Hoje",
        twelveHour: "12 horas",
        twentyFourHour: "24 horas",
        unconfigured: "Abra Configuracoes -> Integracoes -> Aurora Calendar -> Configurar para adicionar seus calendarios.",
        viewBiweek: "Quinzenal",
        viewMonth: "Mes",
        viewNext7Days: "Proximos 7 dias",
        viewToday: "Hoje",
        viewWeek: "Semana",
        visibleEndHour: "Hora final visivel",
        visibleEndHourHelper: "Fim exclusivo; 22:00 mostra ate 21:59.",
        visibleStartHour: "Hora inicial visivel",
        weatherForecast: "Previsao do tempo",
        weatherForecastDesc: "Mostra icone da condicao diaria e temperatura em cada dia.",
        weatherIconStyle: "Estilo do icone do tempo",
        weekStartsOn: "A semana comeca em",
    },
    pl: {
        allDay: "caly dzien",
        animated: "Animowana",
        appearance: "Wyglad",
        calendarFilters: "Filtry kalendarza",
        calendarGridLines: "Linie siatki kalendarza",
        calendarGridLinesDesc: "Pokazuj linie w widokach miesiaca, tygodnia i dwoch tygodni.",
        calendarNavigation: "Nawigacja kalendarza",
        calendarView: "Widok kalendarza",
        cleanDashboard: "Czysty pulpit",
        default: "Domyslne",
        dimPastEvents: "Przyciemnij minione wydarzenia",
        dimPastEventsDesc: "Zmniejsza krycie po zakonczeniu wydarzenia.",
        eventFont: "Czcionka wydarzen",
        eventFontSize: "Rozmiar czcionki wydarzen",
        extraLarge: "Bardzo duzy",
        features: "Funkcje",
        filters: "Filtry",
        friendlyRounded: "Przyjaznie zaokraglona",
        general: "Ogolne",
        hi: "MAX",
        integration: "Integracja",
        integrationHelper: "Domena integracji Aurora Calendar (zwykle aurora_calendar)",
        jumpTo: "Przejdz do",
        large: "Duzy",
        loading: "Ladowanie...",
        lo: "MIN",
        medium: "Sredni",
        monday: "Poniedzialek",
        next: "Nastepny",
        nextWeek: "Nastepny tydzien",
        openWeatherForecast: "Otworz prognoze pogody",
        previous: "Poprzedni",
        serif: "Szeryfowa",
        showCalendars: "Pokaz kalendarze",
        showEventTimes: "Pokaz godziny wydarzen",
        showEventTimesDesc: "Pokazuj czas rozpoczecia na kartach wydarzen.",
        small: "Maly",
        static: "Statyczna",
        sunday: "Niedziela",
        timeFormat: "Format czasu",
        today: "Dzisiaj",
        twelveHour: "12-godzinny",
        twentyFourHour: "24-godzinny",
        unconfigured: "Otworz Ustawienia -> Integracje -> Aurora Calendar -> Konfiguruj, aby dodac kalendarze.",
        viewBiweek: "Dwa tygodnie",
        viewMonth: "Miesiac",
        viewNext7Days: "Nastepne 7 dni",
        viewToday: "Dzisiaj",
        viewWeek: "Tydzien",
        visibleEndHour: "Widoczna godzina koncowa",
        visibleEndHourHelper: "Koniec wylaczny; 22:00 pokazuje do 21:59.",
        visibleStartHour: "Widoczna godzina poczatkowa",
        weatherForecast: "Prognoza pogody",
        weatherForecastDesc: "Pokazuj ikone warunkow i temperature w kazdej komorce dnia.",
        weatherIconStyle: "Styl ikony pogody",
        weekStartsOn: "Tydzien zaczyna sie w",
    },
    sv: {
        allDay: "hela dagen",
        animated: "Animerad",
        appearance: "Utseende",
        calendarFilters: "Kalenderfilter",
        calendarGridLines: "Kalenderrutnat",
        calendarGridLinesDesc: "Visa avdelare i manads-, vecko- och tvaveckorsvyer.",
        calendarNavigation: "Kalendernavigering",
        calendarView: "Kalendervy",
        cleanDashboard: "Ren instrumentpanel",
        default: "Standard",
        dimPastEvents: "Tona ned tidigare handelser",
        dimPastEventsDesc: "Minskar opaciteten nar en handelse har slutat.",
        eventFont: "Handelsetypsnitt",
        eventFontSize: "Textstorlek for handelser",
        extraLarge: "Extra stor",
        features: "Funktioner",
        filters: "Filter",
        friendlyRounded: "Vanligt rundad",
        general: "Allmant",
        hi: "MAX",
        integration: "Integration",
        integrationHelper: "Doman for din Aurora Calendar-integration (vanligtvis aurora_calendar)",
        jumpTo: "Ga till",
        large: "Stor",
        loading: "Laddar...",
        lo: "MIN",
        medium: "Medium",
        monday: "Mandag",
        next: "Nasta",
        nextWeek: "Nasta vecka",
        openWeatherForecast: "Oppna vaderprognos",
        previous: "Foregaende",
        serif: "Serif",
        showCalendars: "Visa kalendrar",
        showEventTimes: "Visa tider for handelser",
        showEventTimesDesc: "Visa starttid pa handelsekort.",
        small: "Liten",
        static: "Statisk",
        sunday: "Sondag",
        timeFormat: "Tidsformat",
        today: "Idag",
        twelveHour: "12 timmar",
        twentyFourHour: "24 timmar",
        unconfigured: "Oppna Installningar -> Integrationer -> Aurora Calendar -> Konfigurera for att lagga till dina kalendrar.",
        viewBiweek: "Tva veckor",
        viewMonth: "Manad",
        viewNext7Days: "Nasta 7 dagarna",
        viewToday: "Idag",
        viewWeek: "Vecka",
        visibleEndHour: "Synlig sluttimme",
        visibleEndHourHelper: "Exklusivt slut; 22:00 visar till 21:59.",
        visibleStartHour: "Synlig starttimme",
        weatherForecast: "Vaderprognos",
        weatherForecastDesc: "Visa daglig vaderikon och temperatur i varje dagruta.",
        weatherIconStyle: "Stil for vaderikon",
        weekStartsOn: "Veckan borjar pa",
    },
};
const VIEW_LABEL_KEYS = {
    Month: "viewMonth",
    Week: "viewWeek",
    Biweek: "viewBiweek",
    "Rolling 2 Weeks": "viewRolling2Weeks",
    Today: "viewToday",
    "Next 7 Days": "viewNext7Days",
};
function localeFromHass(hass) {
    return (hass?.locale?.language ||
        navigator.languages?.[0] ||
        navigator.language ||
        "en");
}
function t(locale, key) {
    const normalized = normalizeLocale(locale);
    return (TRANSLATIONS[normalized]?.[key] ||
        TRANSLATIONS[baseLocale(normalized)]?.[key] ||
        TRANSLATIONS.en[key] || key);
}
function viewModeLabel(locale, mode) {
    return t(locale, VIEW_LABEL_KEYS[mode]);
}
function formatWeekday(locale, date, width = "short") {
    return new Intl.DateTimeFormat(locale, { weekday: width }).format(date);
}
function formatMonth(locale, date, width = "short") {
    return new Intl.DateTimeFormat(locale, { month: width }).format(date);
}
function formatMonthTitle(locale, date) {
    return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date);
}
function formatTodayTitle(locale, date) {
    return new Intl.DateTimeFormat(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
    }).format(date);
}
function formatRangeTitle(locale, start, end) {
    const s = formatMonthDay(locale, start);
    const e = sameMonth(start, end)
        ? new Intl.DateTimeFormat(locale, { day: "numeric" }).format(end)
        : formatMonthDay(locale, end);
    return `${s} - ${e}`;
}
function formatFullWeekRange(locale, start, end) {
    const s = formatMonthDay(locale, start, "long");
    const e = sameMonth(start, end)
        ? new Intl.DateTimeFormat(locale, { day: "numeric" }).format(end)
        : formatMonthDay(locale, end, "long");
    return `${s} - ${e}`;
}
function formatMonthDay(locale, date, month = "short") {
    return new Intl.DateTimeFormat(locale, { month, day: "numeric" }).format(date);
}
function sameMonth(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
function normalizeLocale(locale) {
    let canonical = "en";
    try {
        canonical = Intl.getCanonicalLocales(locale || "en")[0] || "en";
    }
    catch {
        canonical = "en";
    }
    if (canonical.toLowerCase() === "pt-br")
        return "pt-BR";
    return baseLocale(canonical);
}
function baseLocale(locale) {
    return locale.split("-")[0];
}

const VIEW_MODES = [
    "Month",
    "Week",
    "Biweek",
    "Rolling 2 Weeks",
    "Today",
    "Next 7 Days",
];
function localToday() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}
function dateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}
function weekStartDay(weekStart) {
    return weekStart === "monday" ? 1 : 0;
}
function startOfWeek(date, weekStart) {
    const startDay = weekStartDay(weekStart);
    const d = new Date(date);
    const diff = (d.getDay() - startDay + 7) % 7;
    d.setDate(d.getDate() - diff);
    return d;
}
function endOfWeek(date, weekStart) {
    const end = startOfWeek(date, weekStart);
    end.setDate(end.getDate() + 6);
    return end;
}
function getDateRange(mode, offset, weekStart = "sunday") {
    const today = localToday();
    if (mode === "Month") {
        // JS Date handles month overflow automatically (e.g. month 13 → Jan next year)
        const first = new Date(today.getFullYear(), today.getMonth() + offset, 1);
        const last = new Date(today.getFullYear(), today.getMonth() + offset + 1, 0);
        return [startOfWeek(first, weekStart), endOfWeek(last, weekStart)];
    }
    if (mode === "Week") {
        const start = startOfWeek(today, weekStart);
        start.setDate(start.getDate() + offset * 7);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return [start, end];
    }
    if (mode === "Biweek") {
        const start = startOfWeek(today, weekStart);
        start.setDate(start.getDate() + offset * 14);
        const end = new Date(start);
        end.setDate(start.getDate() + 13);
        return [start, end];
    }
    if (mode === "Rolling 2 Weeks") {
        const start = new Date(today);
        start.setDate(today.getDate() + offset * 14);
        const end = new Date(start);
        end.setDate(start.getDate() + 13);
        return [start, end];
    }
    if (mode === "Today") {
        const d = new Date(today);
        d.setDate(today.getDate() + offset);
        return [d, new Date(d)];
    }
    // Next 7 Days
    const start = new Date(today);
    start.setDate(today.getDate() + offset * 7);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return [start, end];
}
function getViewTitle(mode, offset, start, end, locale = "en") {
    if (mode === "Month") {
        // Use offset to find the actual displayed month (start may be prior-month padding)
        const today = localToday();
        const ref = new Date(today.getFullYear(), today.getMonth() + offset, 1);
        return formatMonthTitle(locale, ref);
    }
    if (mode === "Today") {
        return formatTodayTitle(locale, start);
    }
    return `${formatRangeTitle(locale, start, end)}, ${end.getFullYear()}`;
}
function loadPersistedView(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        return VIEW_MODES.includes(parsed.viewMode)
            ? parsed.viewMode
            : null;
    }
    catch {
        return null;
    }
}
function persistView(key, viewMode) {
    try {
        localStorage.setItem(key, JSON.stringify({ viewMode }));
    }
    catch {
        // Storage full or unavailable — silently ignore
    }
}
// Retry an img that failed to load (e.g. HA image service not ready on startup).
// Clears the src (removes broken-image icon) then restores it after a delay so
// the browser makes a fresh, uncached request.
function retryImgOnError(e) {
    const img = e.target;
    const src = img.src;
    img.removeAttribute("src");
    setTimeout(() => { if (img.isConnected)
        img.src = src; }, 5000);
}

function eventHasConcluded(event, now = new Date()) {
    if (event.all_day) {
        return new Date(`${event.end}T00:00:00`).getTime() <= now.getTime();
    }
    return new Date(event.end).getTime() <= now.getTime();
}
async function fetchEventsForRange(hass, calendars, start, end) {
    if (calendars.length === 0)
        return [];
    const fetchEnd = new Date(end);
    fetchEnd.setDate(fetchEnd.getDate() + 1);
    // Build a lookup so we can map entity_id back to CalendarInfo
    const calByEntityId = new Map(calendars.map((c) => [c.entity_id, c]));
    let wsEvents;
    try {
        const result = await hass.callWS({
            type: "aurora_calendar/get_events",
            entity_ids: calendars.map((c) => c.entity_id),
            start: start.toISOString(),
            end: fetchEnd.toISOString(),
        });
        wsEvents = result.events;
    }
    catch {
        // WebSocket command unavailable (integration not loaded yet) — fall back
        // to the standard REST API so the card still works during development.
        return _fetchViaRestApi(hass, calendars, start, fetchEnd);
    }
    const events = wsEvents.flatMap((ev, i) => {
        const cal = calByEntityId.get(ev.entity_id);
        if (!cal)
            return [];
        return [_mapWsEvent(ev, cal, i)];
    });
    return deduplicateEvents(events);
}
// ---------------------------------------------------------------------------
// Deduplication
// ---------------------------------------------------------------------------
function deduplicateEvents(events) {
    // Group events by a stable key.  UID is preferred (iCal spec); fall back to
    // title+start for calendars that don't expose UIDs.
    const groups = new Map();
    for (const event of events) {
        const key = event.uid
            ? `uid:${event.uid}:${event.recurrenceId ?? ""}`
            : `title:${event.title}:${event.start}`;
        const group = groups.get(key);
        if (group) {
            group.push(event);
        }
        else {
            groups.set(key, [event]);
        }
    }
    const deduped = [];
    for (const group of groups.values()) {
        if (group.length === 1) {
            deduped.push(group[0]);
            continue;
        }
        // Pick the primary copy:
        //   1. Prefer the copy where hasSelfAttendee === false — the calendar owner
        //      is NOT an explicit attendee, meaning this is the home/originating
        //      calendar the event was created in (Google Calendar only).
        //   2. Fall back to the first entry, which preserves config order.
        const primary = group.find((e) => e.hasSelfAttendee === false) ?? group[0];
        // Collect every person that appears in the duplicate group, primary first.
        const others = group.filter((e) => e !== primary).map((e) => e.person);
        const allPersons = [primary.person, ...new Set(others)];
        deduped.push({
            ...primary,
            attendees: allPersons,
        });
    }
    return deduped;
}
// ---------------------------------------------------------------------------
// Mapping helpers
// ---------------------------------------------------------------------------
function _mapWsEvent(ev, cal, index) {
    const startStr = ev.start.dateTime ?? ev.start.date ?? "";
    return {
        id: ev.uid ??
            `${cal.entity_id}:${index}:${startStr}`,
        title: ev.summary ?? "(no title)",
        start: startStr,
        end: ev.end.dateTime ?? ev.end.date ?? "",
        all_day: !ev.start.dateTime,
        person: cal.person,
        color: cal.effective_color ?? cal.color,
        description: ev.description,
        location: ev.location,
        calendarEntity: cal.entity_id,
        calendarName: cal.person,
        uid: ev.uid,
        recurrenceId: ev.recurrence_id ?? ev.recurrenceId,
        hasSelfAttendee: ev.has_self_attendee,
    };
}
// ---------------------------------------------------------------------------
// REST API fallback (used when the WebSocket command is unavailable)
// ---------------------------------------------------------------------------
async function _fetchViaRestApi(hass, calendars, start, end) {
    const s = encodeURIComponent(start.toISOString());
    const e = encodeURIComponent(end.toISOString());
    const results = await Promise.all(calendars.map(async (cal) => {
        try {
            const raw = await hass.callApi("GET", `calendars/${cal.entity_id}?start=${s}&end=${e}`);
            return raw.map((ev, i) => ({
                id: ev.uid ??
                    `${cal.entity_id}:${i}:${ev.start.dateTime ?? ev.start.date ?? ""}`,
                title: ev.summary ?? "(no title)",
                start: ev.start.dateTime ?? ev.start.date ?? "",
                end: ev.end.dateTime ?? ev.end.date ?? "",
                all_day: !ev.start.dateTime,
                person: cal.person,
                color: cal.effective_color ?? cal.color,
                description: ev.description,
                location: ev.location,
                calendarEntity: cal.entity_id,
                calendarName: cal.person,
                uid: ev.uid,
                recurrenceId: ev.recurrence_id ?? ev.recurrenceId,
            }));
        }
        catch {
            return [];
        }
    }));
    return deduplicateEvents(results.flat());
}

async function fetchDailyWeather(hass, weatherEntity) {
    if (!weatherEntity)
        return {};
    const state = hass.states[weatherEntity];
    const temperatureUnit = String(state?.attributes.temperature_unit ?? "");
    try {
        const result = await hass.callWS({
            type: "call_service",
            domain: "weather",
            service: "get_forecasts",
            service_data: { type: "daily" },
            target: { entity_id: weatherEntity },
            return_response: true,
        });
        const forecast = result.response?.[weatherEntity]?.forecast ?? [];
        return forecast.reduce((acc, item) => {
            const day = normalizeForecast(item, temperatureUnit);
            if (!day)
                return acc;
            acc[dateKey(new Date(item.datetime))] = day;
            return acc;
        }, {});
    }
    catch {
        return {};
    }
}
function normalizeForecast(forecast, temperatureUnit) {
    if (!forecast.datetime || !forecast.condition)
        return null;
    return {
        condition: forecast.condition,
        temperature: forecast.temperature,
        templow: forecast.templow,
        temperatureUnit,
        precipitation_probability: forecast.precipitation_probability,
    };
}
function weatherSvgUrl(condition, style = "static") {
    const icon = weatherSvgName(condition);
    return `/aurora_calendar_static/weather-icons/${style}/${icon}.svg`;
}
function weatherSvgName(condition) {
    switch (condition) {
        case "clear-night":
            return "clear-night";
        case "cloudy":
            return "cloudy";
        case "fog":
            return "fog";
        case "hail":
            return "hail";
        case "lightning":
            return "thunderstorms";
        case "lightning-rainy":
            return "scattered-thunderstorms";
        case "partlycloudy":
            return "cloudy-2-day";
        case "pouring":
            return "rainy-3";
        case "rainy":
            return "rainy-2";
        case "snowy":
            return "snowy-2";
        case "snowy-rainy":
            return "rain-and-snow-mix";
        case "sunny":
            return "clear-day";
        case "windy":
        case "windy-variant":
            return "wind";
        case "exceptional":
            return "severe-thunderstorm";
        default:
            return "cloudy";
    }
}
function weatherTempLabel(day) {
    const high = formatTemp(day.temperature, day.temperatureUnit);
    const low = formatTemp(day.templow, day.temperatureUnit);
    if (high !== "" && low !== "")
        return `${high}/${low}`;
    if (high !== "")
        return high;
    if (low !== "")
        return low;
    return "";
}
function weatherTempParts(day) {
    return {
        high: formatTemp(day.temperature, day.temperatureUnit),
        low: formatTemp(day.templow, day.temperatureUnit),
    };
}
function formatTemp(value, unit) {
    if (typeof value !== "number")
        return "";
    return `${Math.round(value)}${normalizeTempUnit(unit)}`;
}
function normalizeTempUnit(unit) {
    if (!unit)
        return "";
    if (unit === "C" || unit === "F")
        return `°${unit}`;
    return unit;
}

function hexToRgb(color) {
    const raw = color.trim().replace(/^#/, "");
    const hex = raw.length === 3
        ? raw.split("").map((char) => char + char).join("")
        : raw;
    if (!/^[0-9a-fA-F]{6}$/.test(hex))
        return null;
    const value = Number.parseInt(hex, 16);
    return {
        r: (value >> 16) & 255,
        g: (value >> 8) & 255,
        b: value & 255,
    };
}
function toHex(value) {
    return Math.min(255, Math.max(0, value)).toString(16).padStart(2, "0");
}
function contrastText(color) {
    const rgb = hexToRgb(color);
    if (!rgb)
        return "var(--primary-text-color)";
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 150 ? "#1f2933" : "#ffffff";
}
function shadeColor(color, amount) {
    const rgb = hexToRgb(color);
    if (!rgb)
        return color;
    return `#${toHex(rgb.r + amount)}${toHex(rgb.g + amount)}${toHex(rgb.b + amount)}`;
}

function sameDay$2(a, b) {
    return (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate());
}
function fillsFullDay$1(event, day) {
    if (event.all_day)
        return true;
    const s = new Date(event.start);
    const en = new Date(event.end);
    const dayStart = new Date(day);
    dayStart.setHours(0, 0, 0, 0);
    const nextDay = new Date(day);
    nextDay.setHours(24, 0, 0, 0);
    return s <= dayStart && en >= nextDay;
}
function fmtTime$2(d, format) {
    if (format === "24h") {
        return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    }
    const h = d.getHours() % 12 || 12;
    const m = d.getMinutes();
    const ap = d.getHours() >= 12 ? "pm" : "am";
    return m ? `${h}:${m.toString().padStart(2, "0")}${ap}` : `${h}${ap}`;
}
function fmtTimeRange$1(event, format, locale) {
    const s = new Date(event.start);
    const en = new Date(event.end);
    const startT = fmtTime$2(s, format);
    const endT = fmtTime$2(en, format);
    if (sameDay$2(s, en)) {
        return `${startT} - ${endT}`;
    }
    const dateOpts = { month: "numeric", day: "numeric" };
    const sD = s.toLocaleDateString(locale, dateOpts);
    const enD = en.toLocaleDateString(locale, dateOpts);
    return `${sD} ${startT} - ${enD} ${endT}`;
}
let AuroraCalendarMonth = class AuroraCalendarMonth extends i {
    constructor() {
        super(...arguments);
        this.events = [];
        this.dimOtherMonths = true;
        this.weekStart = "sunday";
        this.weatherByDate = {};
        this.weatherEntity = "";
        this.locale = "en";
        this.persons = [];
        this.occasionsEntityId = "";
        // When set (0–6), overrides weekStart for column headers — used by Rolling 2 Weeks
        // so headers start from today's day of week rather than the fixed Sun/Mon anchor.
        this.gridStart = -1;
        this._autoScrollKey = "";
    }
    updated() {
        this._applyAppearanceVars();
        this._syncScrollFades();
        this._autoScrollCurrentDayEvents();
    }
    _applyAppearanceVars() {
        if (!this.config)
            return;
        this.style.setProperty("--aurora-event-font-size", `${this.config.event_font_size}px`);
        this.style.setProperty("--aurora-event-font-family", this.config.event_font_family || "inherit");
    }
    render() {
        const today = localToday();
        const days = this._days();
        const firstHeader = this.gridStart >= 0 ? this.gridStart : (this.weekStart === "monday" ? 1 : 0);
        const dayHeaders = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(2026, 1, 1 + ((firstHeader + i) % 7));
            return formatWeekday(this.locale, date, "short");
        });
        return b `
      <div class="month-grid ${this.config.show_calendar_grid_lines ? "" : "no-grid"}">
        <div class="col-headers">
          ${dayHeaders.map((d) => b `<div class="col-header">${d}</div>`)}
        </div>
        <div class="cells">
          ${days.map((day) => {
            const isToday = sameDay$2(day, today);
            const isCurrent = !this.dimOtherMonths ||
                (day.getMonth() === this.currentMonth &&
                    day.getFullYear() === this.currentYear);
            const isPast = day < today && !isToday;
            const events = this._eventsOn(day);
            const grouped = this._groupEvents(events, day);
            const focusEventId = isToday ? this._focusEventId(events, day) : "";
            const weather = this.weatherByDate[dateKey(day)];
            const temps = weather ? weatherTempParts(weather) : null;
            const shouldDimOtherMonth = this.dimOtherMonths && !isCurrent;
            return b `
              <div
                class="cell
                  ${isToday ? "today" : ""}
                  ${!isCurrent ? "other-month" : ""}
                  ${isPast ? "past" : ""}"
              >
                <div class="day-meta">
                  <div class="day-num ${isToday ? "circle" : ""}">
                    ${day.getDate()}
                  </div>
                  ${weather ? b `
                    <button
                      class="weather-pill"
                      title="${weather.condition}"
                      aria-label=${t(this.locale, "openWeatherForecast")}
                      @click=${this._openWeatherMoreInfo}
                    >
                      <span class="weather-temps">
                        <span>${temps?.high || "--"} / ${temps?.low || "--"}</span>
                      </span>
                      ${weather.precipitation_probability != null && weather.precipitation_probability > 0
                ? b `<span class="weather-rain">💧 ${Math.round(weather.precipitation_probability)}%</span>`
                : ""}
                      <img src=${weatherSvgUrl(weather.condition, this.config.weather_icon_style)} alt="${weather.condition}" />
                    </button>
                  ` : ""}
                </div>
                <div class="events-wrap">
                  <div
                    class="events-scroll"
                    data-current-day=${isToday ? "true" : "false"}
                    @scroll=${this._handleEventScroll}
                  >
                  ${grouped.allDay.length ? b `
                    <div class="all-day-stack ${focusEventId ? "yields-to-focus" : ""}">
                      ${grouped.allDay.map((e) => this._renderEventChip(e, focusEventId, shouldDimOtherMonth, true, isPast))}
                    </div>
                  ` : ""}
                  ${grouped.expiredTimed.map((e) => this._renderEventChip(e, focusEventId, shouldDimOtherMonth, false, isPast))}
                  ${grouped.activeTimed.map((e) => this._renderEventChip(e, focusEventId, shouldDimOtherMonth, false, isPast))}
                  </div>
                </div>
              </div>
            `;
        })}
        </div>
      </div>
    `;
    }
    _renderEventChip(e, focusEventId, shouldDimOtherMonth, asAllDay, isPast = false) {
        const concluded = eventHasConcluded(e);
        const dim = this.config.dim_past_events && (concluded || (e.all_day && isPast));
        const time = this.config.show_event_time
            ? (e.all_day || asAllDay ? t(this.locale, "allDayLabel") : fmtTimeRange$1(e, this.config.time_format, this.locale))
            : "";
        const textColor = this._eventTextColor(e.color);
        const avatars = this._personAvatars(e);
        const numAvatars = e.attendees && e.attendees.length > 1 ? Math.min(e.attendees.length, 3) : 1;
        const rightPad = numAvatars > 1 ? `padding-right:${56 + (numAvatars - 1) * 18}px;` : "";
        return b `
      <div
        class="chip aurora-event-chip ${e.all_day ? "all-day-chip" : ""} ${dim || shouldDimOtherMonth ? "dim" : ""}"
        data-focus-event=${e.id === focusEventId ? "true" : "false"}
        data-event-concluded=${concluded ? "true" : "false"}
        @click=${() => this._openEvent(e)}
        style="--aurora-chip-bg:${e.color};--aurora-chip-border-color:${shadeColor(e.color, -32)};--aurora-chip-fg:${textColor};${rightPad}"
      >
        <div class="chip-title">${e.title}</div>
        ${time ? b `<div class="chip-time">${time}</div>` : ""}
        ${this.config.show_location && !e.all_day && e.location ? b `<div class="chip-location">${e.location}</div>` : ""}
        ${avatars}
      </div>
    `;
    }
    _days() {
        const days = [];
        const cur = new Date(this.start);
        while (cur <= this.end) {
            days.push(new Date(cur));
            cur.setDate(cur.getDate() + 1);
        }
        return days;
    }
    _eventsOn(day) {
        return this.events
            .filter((e) => {
            if (e.all_day) {
                // HA all-day end is exclusive (next day midnight)
                const s = new Date(e.start + "T00:00:00");
                const en = new Date(e.end + "T00:00:00");
                return s <= day && day < en;
            }
            // Timed: show on any day the event spans (cross-midnight and multi-day)
            const s = new Date(e.start);
            const en = new Date(e.end);
            const dayStart = new Date(day);
            dayStart.setHours(0, 0, 0, 0);
            const dayEnd = new Date(day);
            dayEnd.setHours(23, 59, 59, 999);
            return s <= dayEnd && en > dayStart;
        })
            .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    }
    _handleEventScroll(event) {
        this._updateScrollFade(event.currentTarget);
    }
    _syncScrollFades() {
        this.shadowRoot
            ?.querySelectorAll(".events-scroll")
            .forEach((el) => this._updateScrollFade(el));
    }
    _updateScrollFade(el) {
        const canScrollUp = el.scrollTop > 1;
        const canScrollDown = el.scrollTop + el.clientHeight < el.scrollHeight - 1;
        el.classList.toggle("can-scroll-up", canScrollUp);
        el.classList.toggle("can-scroll-down", canScrollDown);
        this._updateAllDayStickiness(el);
        this._updateFadeOffset(el);
        this._updateUnderAllDayDimming(el);
    }
    _updateAllDayStickiness(el) {
        const stack = el.querySelector(".all-day-stack.yields-to-focus");
        const target = el.querySelector('.chip[data-focus-event="true"]');
        if (!stack || !target) {
            // Today: keep sticky (no focus event yet, or no timed events). Non-today: always static.
            if (el.dataset.currentDay === "true") {
                el.classList.remove("all-day-static");
            }
            else {
                el.classList.add("all-day-static");
            }
            el.querySelectorAll(".all-day-stack").forEach((stackEl) => {
                stackEl.style.setProperty("--all-day-shift", "0px");
                stackEl.style.setProperty("--all-day-collapse", "0px");
                stackEl.style.setProperty("--all-day-progress", "0");
                stackEl.style.pointerEvents = "auto";
            });
            return;
        }
        if (this.config.keep_all_day_events_visible) {
            el.classList.remove("all-day-static");
            stack.style.setProperty("--all-day-shift", "0px");
            stack.style.setProperty("--all-day-collapse", "0px");
            stack.style.setProperty("--all-day-progress", "0");
            stack.style.pointerEvents = "auto";
            return;
        }
        const stackHeight = Math.max(1, stack.offsetHeight);
        const targetCollisionPoint = Math.max(0, target.offsetTop - stackHeight - 1);
        const targetHasReachedAllDay = el.scrollTop >= targetCollisionPoint;
        // Size-based fallback is disabled while we validate the collision-based flow.
        const needsStaticFlow = targetHasReachedAllDay;
        if (needsStaticFlow) {
            el.classList.add("all-day-static");
            stack.style.setProperty("--all-day-shift", "0px");
            stack.style.setProperty("--all-day-collapse", "0px");
            stack.style.setProperty("--all-day-progress", "0");
            stack.style.pointerEvents = "auto";
            return;
        }
        el.classList.remove("all-day-static");
        stack.style.setProperty("--all-day-shift", "0px");
        stack.style.setProperty("--all-day-collapse", "0px");
        stack.style.setProperty("--all-day-progress", "0");
        stack.style.pointerEvents = "auto";
    }
    _updateFadeOffset(el) {
        const stack = el.querySelector(".all-day-stack");
        const rawProgress = stack ? Number(stack.style.getPropertyValue("--all-day-progress") || "0") : 1;
        const progress = Number.isFinite(rawProgress) ? rawProgress : 1;
        const offset = stack && getComputedStyle(stack).position === "sticky"
            ? Math.max(0, stack.offsetHeight * (1 - progress) - 2)
            : 0;
        el.style.setProperty("--fade-top-offset", `${offset}px`);
    }
    _updateUnderAllDayDimming(el) {
        const stack = el.querySelector(".all-day-stack");
        const stackIsSticky = stack &&
            !el.classList.contains("all-day-static") &&
            getComputedStyle(stack).position === "sticky";
        const stackHeight = stackIsSticky ? stack.offsetHeight : 0;
        el.querySelectorAll(".chip:not(.all-day-chip)").forEach((chip) => {
            const top = chip.offsetTop - el.scrollTop;
            const bottom = top + chip.offsetHeight;
            const chipHeight = Math.max(1, chip.offsetHeight);
            const fadeStartTop = stackHeight - chipHeight * 0.25;
            const fullyHiddenTop = stackHeight - chipHeight;
            if (stackHeight <= 0 || bottom <= 0 || top >= fadeStartTop) {
                chip.classList.remove("under-all-day");
                chip.classList.remove("under-all-day-hidden");
                chip.style.removeProperty("--under-all-day-opacity");
                return;
            }
            const baseOpacity = chip.classList.contains("dim") ? 0.35 : 1;
            const ratio = bottom <= stackHeight
                ? 1
                : Math.min(1, Math.max(0, (fadeStartTop - top) / Math.max(1, fadeStartTop - fullyHiddenTop)));
            const opacity = ratio >= 1 ? 0 : Math.max(0.06, baseOpacity * (1 - ratio * 0.94));
            chip.classList.add("under-all-day");
            chip.classList.toggle("under-all-day-hidden", opacity === 0);
            chip.style.setProperty("--under-all-day-opacity", opacity.toFixed(2));
        });
    }
    _autoScrollCurrentDayEvents() {
        const today = localToday();
        const events = this._eventsOn(today);
        const focusEventId = this._focusEventId(events, today);
        const key = `${dateKey(today)}|${focusEventId}|${events.map((event) => event.id).join(",")}`;
        if (!focusEventId || key === this._autoScrollKey)
            return;
        requestAnimationFrame(() => {
            const scroll = this.shadowRoot?.querySelector('.events-scroll[data-current-day="true"]');
            const target = scroll?.querySelector('.chip[data-focus-event="true"]');
            if (!scroll || !target)
                return;
            const allDayStack = scroll.querySelector(".all-day-stack");
            const shouldReserveAllDaySpace = allDayStack && !target.classList.contains("all-day-chip");
            const scrollOffset = shouldReserveAllDaySpace
                ? allDayStack.offsetHeight + 6
                : 4;
            scroll.scrollTop = Math.max(0, target.offsetTop - scrollOffset);
            this._autoScrollKey = key;
            this._updateScrollFade(scroll);
        });
    }
    _focusEventId(events, day) {
        if (events.length === 0)
            return "";
        // Exclude events rendered as all-day chips (either native all-day or spanning the full day),
        // since their offsetTop is relative to the sticky stack, not the scroll container.
        const timed = events.filter((event) => !event.all_day && !fillsFullDay$1(event, day));
        return timed.find((event) => !eventHasConcluded(event))?.id || "";
    }
    _groupEvents(events, day) {
        return {
            allDay: events.filter((event) => fillsFullDay$1(event, day)),
            expiredTimed: events.filter((event) => !fillsFullDay$1(event, day) && eventHasConcluded(event)),
            activeTimed: events.filter((event) => !fillsFullDay$1(event, day) && !eventHasConcluded(event)),
        };
    }
    _openEvent(event) {
        this.dispatchEvent(new CustomEvent("aurora-event-open", {
            detail: { event },
            bubbles: true,
            composed: true,
        }));
    }
    _eventTextColor(bgColor) {
        if (this.config.event_text_color === "white")
            return "#ffffff";
        if (this.config.event_text_color === "dark")
            return "#1f2933";
        return contrastText(bgColor);
    }
    _personAvatars(event) {
        const attendees = event.attendees && event.attendees.length > 1
            ? event.attendees.slice(0, 3)
            : null;
        if (!attendees) {
            const person = this.persons.find((p) => p.person === event.person);
            const color = person?.color || event.color;
            const t = event.title.toLowerCase();
            const isOccasions = !!this.occasionsEntityId && event.calendarEntity === this.occasionsEntityId;
            if (isOccasions && t.includes("birthday")) {
                return b `
          <span class="event-avatar lottie-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
            <aurora-lottie
              src="/aurora_calendar_static/event-icons/birthday-cake.json"
            ></aurora-lottie>
          </span>
        `;
            }
            if (isOccasions && t.includes("anniversary")) {
                return b `
          <span class="event-avatar lottie-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
            <aurora-lottie src="/aurora_calendar_static/event-icons/clinking-glasses.json"></aurora-lottie>
          </span>
        `;
            }
            const avatarContent = (person?.person || event.person || "?").charAt(0).toUpperCase();
            return b `
        <span class="event-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
          ${avatarContent}
          ${person?.avatar ? b `<img src="${person.avatar}" alt="${event.person}" @error=${retryImgOnError} />` : A}
        </span>
      `;
        }
        // Stacked avatars: render in reverse order so the primary person ends up
        // rightmost (last in DOM = highest stacking order in normal flow).
        const reversed = [...attendees].reverse();
        const spans = reversed.map((name, i) => {
            const p = this.persons.find((p) => p.person === name);
            const color = p?.color || event.color;
            return b `
        <span
          class="event-avatar"
          style="--event-avatar-color:${color};${i > 0 ? "margin-left:-24px;" : ""}"
          title="${name}"
        >
          ${(name || "?").charAt(0).toUpperCase()}
          ${p?.avatar ? b `<img src="${p.avatar}" alt="${name}" @error=${retryImgOnError} />` : A}
        </span>
      `;
        });
        return b `<div class="avatar-stack">${spans}</div>`;
    }
    _openWeatherMoreInfo(event) {
        event.stopPropagation();
        if (!this.weatherEntity)
            return;
        const moreInfoEvent = new Event("hass-more-info", {
            bubbles: true,
            composed: true,
        });
        moreInfoEvent.detail = { entityId: this.weatherEntity };
        this.dispatchEvent(moreInfoEvent);
    }
};
AuroraCalendarMonth.styles = i$3 `
    :host {
      display: block;
      height: 100%;
    }

    .month-grid {
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      overflow: hidden;
      box-shadow:
        inset 0 -1px 0 var(--divider-color, #e0e0e0),
        inset 0 0 0 1px var(--divider-color, #e0e0e0);
    }

    .col-headers {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      background: var(--secondary-background-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .col-header {
      text-align: center;
      padding: 8px 0 6px;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--secondary-text-color);
    }

    .cells {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-auto-rows: 1fr;
      flex: 1;
      min-height: 0;
    }

    .cell {
      min-height: 72px;
      padding: 6px;
      border-right: 1px solid var(--divider-color, #e0e0e0);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }

    .events-wrap {
      position: relative;
      flex: 1;
      min-height: 0;
    }

    .events-scroll {
      height: 100%;
      flex: 1;
      overflow-y: auto;
      min-height: 0;
      scrollbar-width: none;
      overscroll-behavior: contain;
      overflow-anchor: none;
      padding-bottom: 18px;
      --fade-top-offset: 0px;
      --fade-top-size: 12px;
      --fade-bottom-size: 22px;
    }

    .events-scroll.can-scroll-down {
      -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - var(--fade-bottom-size)), transparent);
      mask-image: linear-gradient(to bottom, #000 calc(100% - var(--fade-bottom-size)), transparent);
    }

    .events-scroll.can-scroll-up {
      -webkit-mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 100%
      );
      mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 100%
      );
    }

    .events-scroll.can-scroll-up.can-scroll-down {
      -webkit-mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 calc(100% - var(--fade-bottom-size)),
        transparent
      );
      mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 calc(100% - var(--fade-bottom-size)),
        transparent
      );
    }

    .events-scroll::-webkit-scrollbar {
      display: none;
    }

    .all-day-stack {
      --all-day-shift: 0px;
      --all-day-collapse: 0px;
      --all-day-progress: 0;
      position: sticky;
      top: 0;
      z-index: 3;
      padding: 0 0 4px;
      margin: 0;
      margin-bottom: calc(var(--all-day-collapse, 0px) * -1);
      background: transparent;
      transform: translateY(var(--all-day-shift, 0px));
      transition: none;
      will-change: transform, margin-bottom;
    }

    .events-scroll.all-day-static .all-day-stack {
      position: relative;
      top: auto;
      z-index: 1;
      margin-bottom: 0;
      transform: none;
      will-change: auto;
    }

    .all-day-label {
      margin: 0 0 2px 2px;
      color: var(--secondary-text-color);
      font-size: 0.58rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      line-height: 1;
      text-transform: uppercase;
    }

    .cell:nth-child(7n) {
      border-right: none;
    }

    .cell.other-month .day-num {
      color: var(--disabled-text-color, #bbb);
    }

    .cell.other-month .day-meta,
    .cell.other-month .events-wrap {
      opacity: 0.48;
    }

    .day-num {
      font-size: var(--aurora-day-num-font-size, 1.7rem);
      font-weight: 800;
      width: 1.4em;
      height: 1.4em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      color: var(--primary-text-color);
      line-height: 1;
    }

    .day-meta {
      position: relative;
      min-height: 42px;
      margin-bottom: 6px;
      min-width: 0;
    }

    .day-num.circle {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-radius: 6px;
      font-weight: 700;
    }

    .chip {
      display: block;
      position: relative;
      min-height: 48px;
      padding: var(--aurora-event-padding, 7px 56px 7px 8px);
      border-radius: var(--aurora-event-radius, 7px);
      margin-bottom: 4px;
      overflow: hidden;
      line-height: 1.18;
      box-shadow: var(--aurora-event-shadow, 0 1px 2px rgba(0, 0, 0, 0.16));
      cursor: pointer;
      background: var(--aurora-chip-bg);
      border-left: var(--aurora-event-border-width, 4px) solid var(--aurora-chip-border-color);
      color: var(--aurora-chip-fg);
      font-size: var(--aurora-event-font-size);
      font-family: var(--aurora-event-font-family);
    }

    .chip.all-day-chip {
      margin-bottom: 2px;
    }

    .all-day-stack .chip.all-day-chip:last-child {
      margin-bottom: 0;
    }

    .chip.under-all-day {
      opacity: var(--under-all-day-opacity, 0.18) !important;
      filter: saturate(0.55);
    }

    .chip.under-all-day-hidden {
      pointer-events: none;
    }



    .chip-title,
    .chip-time {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chip-title {
      font-size: 1em;
      font-weight: 800;
    }

    .chip-time {
      margin-top: 2px;
      font-size: 0.92em;
      font-weight: 700;
      opacity: 0.82;
    }

    .chip-location {
      margin-top: 1px;
      font-size: 0.86em;
      font-weight: 700;
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chip.dim {
      opacity: 0.38;
    }

    .avatar-stack {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .avatar-stack .event-avatar {
      position: relative;
      right: auto;
      top: auto;
      transform: none;
      flex-shrink: 0;
    }

    .event-avatar {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--event-avatar-color, var(--primary-color));
      border: 1.5px solid rgba(255, 255, 255, 0.72);
      color: #fff;
      font-size: 0.58rem;
      font-weight: 900;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .event-avatar img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .event-avatar ha-icon {
      --mdc-icon-size: 26px;
      color: #fff;
    }

    .lottie-avatar aurora-lottie {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .weather-pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      max-width: calc(100% - 44px);
      position: absolute;
      top: 0;
      right: 0;
      height: 38px;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--secondary-text-color);
      font: inherit;
      font-weight: 600;
      overflow: hidden;
      cursor: pointer;
    }

    .weather-rain {
      font-size: 0.9rem;
      font-weight: 700;
      color: #60a5fa;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .weather-pill img {
      width: 38px;
      height: 38px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .weather-temps {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 1.05rem;
      font-weight: 700;
      line-height: 1;
      text-align: right;
      white-space: nowrap;
    }

    .weather-temps span {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .month-grid.no-grid {
      box-shadow: none;
    }

    .month-grid.no-grid .col-headers,
    .month-grid.no-grid .cell {
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

  `;
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "events", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "start", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "end", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "currentMonth", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "currentYear", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "config", void 0);
__decorate([
    n({ type: Boolean })
], AuroraCalendarMonth.prototype, "dimOtherMonths", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "weekStart", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "weatherByDate", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "weatherEntity", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "locale", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "persons", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarMonth.prototype, "occasionsEntityId", void 0);
__decorate([
    n({ type: Number })
], AuroraCalendarMonth.prototype, "gridStart", void 0);
AuroraCalendarMonth = __decorate([
    t$1("aurora-calendar-month")
], AuroraCalendarMonth);

function sameDay$1(a, b) {
    return (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate());
}
function fillsFullDay(event, day) {
    if (event.all_day)
        return true;
    const s = new Date(event.start);
    const en = new Date(event.end);
    const dayStart = new Date(day);
    dayStart.setHours(0, 0, 0, 0);
    const nextDay = new Date(day);
    nextDay.setHours(24, 0, 0, 0);
    return s <= dayStart && en >= nextDay;
}
function fmtTime$1(d, format) {
    if (format === "24h") {
        return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    }
    const h = d.getHours() % 12 || 12;
    const m = d.getMinutes();
    const ap = d.getHours() >= 12 ? "pm" : "am";
    return m ? `${h}:${m.toString().padStart(2, "0")}${ap}` : `${h}${ap}`;
}
function fmtTimeRange(event, format, locale) {
    const s = new Date(event.start);
    const en = new Date(event.end);
    const startT = fmtTime$1(s, format);
    const endT = fmtTime$1(en, format);
    if (sameDay$1(s, en)) {
        return `${startT} - ${endT}`;
    }
    const dateOpts = { month: "numeric", day: "numeric" };
    const sD = s.toLocaleDateString(locale, dateOpts);
    const enD = en.toLocaleDateString(locale, dateOpts);
    return `${sD} ${startT} - ${enD} ${endT}`;
}
let AuroraCalendarWeekBox = class AuroraCalendarWeekBox extends i {
    constructor() {
        super(...arguments);
        this.events = [];
        this.days = [];
        this.weatherByDate = {};
        this.weatherEntity = "";
        this.locale = "en";
        this.persons = [];
        this.occasionsEntityId = "";
        this._autoScrollKey = "";
    }
    updated() {
        this._applyAppearanceVars();
        this._syncScrollFades();
        this._autoScrollCurrentDayEvents();
    }
    _applyAppearanceVars() {
        if (!this.config)
            return;
        this.style.setProperty("--aurora-event-font-size", `${this.config.event_font_size}px`);
        this.style.setProperty("--aurora-event-font-family", this.config.event_font_family || "inherit");
    }
    render() {
        const today = localToday();
        const days = this.days.slice(0, 7);
        const nextWeekLabel = this._nextWeekLabel(days);
        return b `
      <div class="week-box-grid ${this.config.show_calendar_grid_lines ? "" : "no-grid"}">
        ${days.map((day) => {
            const isToday = sameDay$1(day, today);
            const isPast = day < today && !isToday;
            const events = this._eventsOn(day);
            const grouped = this._groupEvents(events, day);
            const focusEventId = isToday ? this._focusEventId(events, day) : "";
            const weather = this.weatherByDate[dateKey(day)];
            const temps = weather ? weatherTempParts(weather) : null;
            return b `
            <div class="day-cell ${isToday ? "today" : ""} ${isPast ? "past" : ""}">
              <div class="day-heading">
                <div class="date-wrap">
                  <span class="date-num ${isToday ? "circle" : ""}">${day.getDate()}</span>
                  <span class="day-label">
                    <span class="dow">${formatWeekday(this.locale, day, "long")}</span>
                    <span class="month-lbl">${formatMonth(this.locale, day, "short")}</span>
                  </span>
                </div>
                ${weather ? b `
                  <button
                    class="weather-pill"
                    title="${weather.condition}"
                    aria-label=${t(this.locale, "openWeatherForecast")}
                    @click=${this._openWeatherMoreInfo}
                  >
                    <span class="weather-temps">
                      <span>${temps?.high || "--"} / ${temps?.low || "--"}</span>
                    </span>
                    ${weather.precipitation_probability != null && weather.precipitation_probability > 0
                ? b `<span class="weather-rain">💧 ${Math.round(weather.precipitation_probability)}%</span>`
                : ""}
                    <img src=${weatherSvgUrl(weather.condition, this.config.weather_icon_style)} alt="${weather.condition}" />
                  </button>
                ` : ""}
              </div>
              <div class="events-wrap">
                <div
                  class="events-scroll"
                  data-current-day=${isToday ? "true" : "false"}
                  @scroll=${this._handleEventScroll}
                >
                ${grouped.allDay.length ? b `
                  <div class="all-day-stack ${focusEventId ? "yields-to-focus" : ""}">
                    ${grouped.allDay.map((e) => this._renderEventChip(e, focusEventId, true, isPast))}
                  </div>
                ` : ""}
                ${grouped.expiredTimed.map((e) => this._renderEventChip(e, focusEventId, false, isPast))}
                ${grouped.activeTimed.map((e) => this._renderEventChip(e, focusEventId, false, isPast))}
                </div>
              </div>
            </div>
          `;
        })}
        <button
          class="empty-action"
          type="button"
          title=${t(this.locale, "nextWeek")}
          aria-label=${t(this.locale, "nextWeek")}
          @click=${this._handleEmptyClick}
        >
          <span class="empty-title">${t(this.locale, "nextWeek")}</span>
          <span class="empty-date">${nextWeekLabel}</span>
        </button>
      </div>
    `;
    }
    _handleEmptyClick() {
        this.dispatchEvent(new CustomEvent("week-empty-click", {
            bubbles: true,
            composed: true,
        }));
    }
    _nextWeekLabel(days) {
        if (days.length === 0)
            return "";
        const start = new Date(days[0]);
        start.setDate(start.getDate() + 7);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return formatFullWeekRange(this.locale, start, end);
    }
    _eventsOn(day) {
        return this.events
            .filter((e) => {
            if (e.all_day) {
                const s = new Date(e.start + "T00:00:00");
                const en = new Date(e.end + "T00:00:00");
                return s <= day && day < en;
            }
            // Timed: show on any day the event spans (cross-midnight and multi-day)
            const s = new Date(e.start);
            const en = new Date(e.end);
            const dayStart = new Date(day);
            dayStart.setHours(0, 0, 0, 0);
            const dayEnd = new Date(day);
            dayEnd.setHours(23, 59, 59, 999);
            return s <= dayEnd && en > dayStart;
        })
            .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    }
    _renderEventChip(e, focusEventId, asAllDay, isPast = false) {
        const concluded = eventHasConcluded(e);
        const dim = this.config.dim_past_events && (concluded || (e.all_day && isPast));
        const time = this.config.show_event_time
            ? (e.all_day || asAllDay ? t(this.locale, "allDayLabel") : fmtTimeRange(e, this.config.time_format, this.locale))
            : "";
        const textColor = this._eventTextColor(e.color);
        const avatars = this._personAvatars(e);
        const numAvatars = e.attendees && e.attendees.length > 1 ? Math.min(e.attendees.length, 3) : 1;
        const rightPad = numAvatars > 1 ? `padding-right:${56 + (numAvatars - 1) * 18}px;` : "";
        return b `
      <div
        class="chip aurora-event-chip ${e.all_day ? "all-day-chip" : ""} ${dim ? "dim" : ""}"
        data-focus-event=${e.id === focusEventId ? "true" : "false"}
        data-event-concluded=${concluded ? "true" : "false"}
        @click=${() => this._openEvent(e)}
        style="--aurora-chip-bg:${e.color};--aurora-chip-border-color:${shadeColor(e.color, -32)};--aurora-chip-fg:${textColor};${rightPad}"
      >
        <div class="chip-title">${e.title}</div>
        ${time ? b `<div class="chip-time">${time}</div>` : ""}
        ${this.config.show_location && !e.all_day && e.location ? b `<div class="chip-location">${e.location}</div>` : ""}
        ${avatars}
      </div>
    `;
    }
    _handleEventScroll(event) {
        this._updateScrollFade(event.currentTarget);
    }
    _syncScrollFades() {
        this.shadowRoot
            ?.querySelectorAll(".events-scroll")
            .forEach((el) => this._updateScrollFade(el));
    }
    _updateScrollFade(el) {
        const canScrollUp = el.scrollTop > 1;
        const canScrollDown = el.scrollTop + el.clientHeight < el.scrollHeight - 1;
        el.classList.toggle("can-scroll-up", canScrollUp);
        el.classList.toggle("can-scroll-down", canScrollDown);
        this._updateAllDayStickiness(el);
        this._updateFadeOffset(el);
        this._updateUnderAllDayDimming(el);
    }
    _updateAllDayStickiness(el) {
        const stack = el.querySelector(".all-day-stack.yields-to-focus");
        const target = el.querySelector('.chip[data-focus-event="true"]');
        if (!stack || !target) {
            // Today: keep sticky (no focus event yet, or no timed events). Non-today: always static.
            if (el.dataset.currentDay === "true") {
                el.classList.remove("all-day-static");
            }
            else {
                el.classList.add("all-day-static");
            }
            el.querySelectorAll(".all-day-stack").forEach((stackEl) => {
                stackEl.style.setProperty("--all-day-shift", "0px");
                stackEl.style.setProperty("--all-day-collapse", "0px");
                stackEl.style.setProperty("--all-day-progress", "0");
                stackEl.style.pointerEvents = "auto";
            });
            return;
        }
        if (this.config.keep_all_day_events_visible) {
            el.classList.remove("all-day-static");
            stack.style.setProperty("--all-day-shift", "0px");
            stack.style.setProperty("--all-day-collapse", "0px");
            stack.style.setProperty("--all-day-progress", "0");
            stack.style.pointerEvents = "auto";
            return;
        }
        const stackHeight = Math.max(1, stack.offsetHeight);
        const targetCollisionPoint = Math.max(0, target.offsetTop - stackHeight - 1);
        const targetHasReachedAllDay = el.scrollTop >= targetCollisionPoint;
        // Size-based fallback is disabled while we validate the collision-based flow.
        const needsStaticFlow = targetHasReachedAllDay;
        if (needsStaticFlow) {
            el.classList.add("all-day-static");
            stack.style.setProperty("--all-day-shift", "0px");
            stack.style.setProperty("--all-day-collapse", "0px");
            stack.style.setProperty("--all-day-progress", "0");
            stack.style.pointerEvents = "auto";
            return;
        }
        el.classList.remove("all-day-static");
        stack.style.setProperty("--all-day-shift", "0px");
        stack.style.setProperty("--all-day-collapse", "0px");
        stack.style.setProperty("--all-day-progress", "0");
        stack.style.pointerEvents = "auto";
    }
    _updateFadeOffset(el) {
        const stack = el.querySelector(".all-day-stack");
        const rawProgress = stack ? Number(stack.style.getPropertyValue("--all-day-progress") || "0") : 1;
        const progress = Number.isFinite(rawProgress) ? rawProgress : 1;
        const offset = stack && getComputedStyle(stack).position === "sticky"
            ? Math.max(0, stack.offsetHeight * (1 - progress) - 2)
            : 0;
        el.style.setProperty("--fade-top-offset", `${offset}px`);
    }
    _updateUnderAllDayDimming(el) {
        const stack = el.querySelector(".all-day-stack");
        const stackIsSticky = stack &&
            !el.classList.contains("all-day-static") &&
            getComputedStyle(stack).position === "sticky";
        const stackHeight = stackIsSticky ? stack.offsetHeight : 0;
        el.querySelectorAll(".chip:not(.all-day-chip)").forEach((chip) => {
            const top = chip.offsetTop - el.scrollTop;
            const bottom = top + chip.offsetHeight;
            const chipHeight = Math.max(1, chip.offsetHeight);
            const fadeStartTop = stackHeight - chipHeight * 0.25;
            const fullyHiddenTop = stackHeight - chipHeight;
            if (stackHeight <= 0 || bottom <= 0 || top >= fadeStartTop) {
                chip.classList.remove("under-all-day");
                chip.classList.remove("under-all-day-hidden");
                chip.style.removeProperty("--under-all-day-opacity");
                return;
            }
            const baseOpacity = chip.classList.contains("dim") ? 0.35 : 1;
            const ratio = bottom <= stackHeight
                ? 1
                : Math.min(1, Math.max(0, (fadeStartTop - top) / Math.max(1, fadeStartTop - fullyHiddenTop)));
            const opacity = ratio >= 1 ? 0 : Math.max(0.06, baseOpacity * (1 - ratio * 0.94));
            chip.classList.add("under-all-day");
            chip.classList.toggle("under-all-day-hidden", opacity === 0);
            chip.style.setProperty("--under-all-day-opacity", opacity.toFixed(2));
        });
    }
    _autoScrollCurrentDayEvents() {
        const today = localToday();
        const events = this._eventsOn(today);
        const focusEventId = this._focusEventId(events, today);
        const key = `${dateKey(today)}|${focusEventId}|${events.map((event) => event.id).join(",")}`;
        if (!focusEventId || key === this._autoScrollKey)
            return;
        requestAnimationFrame(() => {
            const scroll = this.shadowRoot?.querySelector('.events-scroll[data-current-day="true"]');
            const target = scroll?.querySelector('.chip[data-focus-event="true"]');
            if (!scroll || !target)
                return;
            const allDayStack = scroll.querySelector(".all-day-stack");
            const shouldReserveAllDaySpace = allDayStack && !target.classList.contains("all-day-chip");
            const scrollOffset = shouldReserveAllDaySpace
                ? allDayStack.offsetHeight + 6
                : 4;
            scroll.scrollTop = Math.max(0, target.offsetTop - scrollOffset);
            this._autoScrollKey = key;
            this._updateScrollFade(scroll);
        });
    }
    _focusEventId(events, day) {
        if (events.length === 0)
            return "";
        // Exclude events rendered as all-day chips (either native all-day or spanning the full day),
        // since their offsetTop is relative to the sticky stack, not the scroll container.
        const timed = events.filter((event) => !event.all_day && !fillsFullDay(event, day));
        return timed.find((event) => !eventHasConcluded(event))?.id || "";
    }
    _groupEvents(events, day) {
        return {
            allDay: events.filter((event) => fillsFullDay(event, day)),
            expiredTimed: events.filter((event) => !fillsFullDay(event, day) && eventHasConcluded(event)),
            activeTimed: events.filter((event) => !fillsFullDay(event, day) && !eventHasConcluded(event)),
        };
    }
    _openEvent(event) {
        this.dispatchEvent(new CustomEvent("aurora-event-open", {
            detail: { event },
            bubbles: true,
            composed: true,
        }));
    }
    _eventTextColor(bgColor) {
        if (this.config.event_text_color === "white")
            return "#ffffff";
        if (this.config.event_text_color === "dark")
            return "#1f2933";
        return contrastText(bgColor);
    }
    _personAvatars(event) {
        const attendees = event.attendees && event.attendees.length > 1
            ? event.attendees.slice(0, 3)
            : null;
        if (!attendees) {
            const person = this.persons.find((p) => p.person === event.person);
            const color = person?.color || event.color;
            const t = event.title.toLowerCase();
            const isOccasions = !!this.occasionsEntityId && event.calendarEntity === this.occasionsEntityId;
            if (isOccasions && t.includes("birthday")) {
                return b `
          <span class="event-avatar lottie-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
            <aurora-lottie
              src="/aurora_calendar_static/event-icons/birthday-cake.json"
            ></aurora-lottie>
          </span>
        `;
            }
            if (isOccasions && t.includes("anniversary")) {
                return b `
          <span class="event-avatar lottie-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
            <aurora-lottie src="/aurora_calendar_static/event-icons/clinking-glasses.json"></aurora-lottie>
          </span>
        `;
            }
            const avatarContent = (person?.person || event.person || "?").charAt(0).toUpperCase();
            return b `
        <span class="event-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
          ${avatarContent}
          ${person?.avatar ? b `<img src="${person.avatar}" alt="${event.person}" @error=${retryImgOnError} />` : A}
        </span>
      `;
        }
        const reversed = [...attendees].reverse();
        const spans = reversed.map((name, i) => {
            const p = this.persons.find((p) => p.person === name);
            const color = p?.color || event.color;
            return b `
        <span
          class="event-avatar"
          style="--event-avatar-color:${color};${i > 0 ? "margin-left:-24px;" : ""}"
          title="${name}"
        >
          ${(name || "?").charAt(0).toUpperCase()}
          ${p?.avatar ? b `<img src="${p.avatar}" alt="${name}" @error=${retryImgOnError} />` : A}
        </span>
      `;
        });
        return b `<div class="avatar-stack">${spans}</div>`;
    }
    _openWeatherMoreInfo(event) {
        event.stopPropagation();
        if (!this.weatherEntity)
            return;
        const moreInfoEvent = new Event("hass-more-info", {
            bubbles: true,
            composed: true,
        });
        moreInfoEvent.detail = { entityId: this.weatherEntity };
        this.dispatchEvent(moreInfoEvent);
    }
};
AuroraCalendarWeekBox.styles = i$3 `
    :host {
      display: block;
      height: 100%;
    }

    .week-box-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
      height: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      overflow: hidden;
      box-shadow:
        inset 0 -1px 0 var(--divider-color, #e0e0e0),
        inset 0 0 0 1px var(--divider-color, #e0e0e0);
    }

    .day-cell,
    .empty-action {
      min-height: 0;
      border-right: 1px solid var(--divider-color, #e0e0e0);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      box-sizing: border-box;
    }

    .day-cell:nth-child(4n),
    .empty-action {
      border-right: none;
    }

    .day-cell {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 10px;
      position: relative;
    }

    .day-heading {
      position: relative;
      min-height: 54px;
      margin-bottom: 10px;
      min-width: 0;
    }

    .date-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      padding-right: 112px;
    }

    .dow {
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      line-height: 1;
      color: var(--secondary-text-color);
    }

    .day-label {
      display: flex;
      flex-direction: column;
      gap: 0;
      min-width: 0;
    }

    .date-num {
      width: 1.3em;
      height: 1.3em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      color: var(--primary-text-color);
      font-size: var(--aurora-day-num-font-size, 2.5rem);
      font-weight: 800;
      line-height: 1;
    }

    .date-num.circle {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      font-weight: 700;
    }

    .month-lbl {
      font-size: 0.88rem;
      line-height: 1.2;
      color: var(--secondary-text-color);
    }

    .events-wrap {
      position: relative;
      flex: 1;
      min-height: 0;
    }

    .events-scroll {
      height: 100%;
      overflow-y: auto;
      min-height: 0;
      scrollbar-width: none;
      overscroll-behavior: contain;
      overflow-anchor: none;
      padding-bottom: 22px;
      --fade-top-offset: 0px;
      --fade-top-size: 14px;
      --fade-bottom-size: 28px;
    }

    .events-scroll.can-scroll-down {
      -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - var(--fade-bottom-size)), transparent);
      mask-image: linear-gradient(to bottom, #000 calc(100% - var(--fade-bottom-size)), transparent);
    }

    .events-scroll.can-scroll-up {
      -webkit-mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 100%
      );
      mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 100%
      );
    }

    .events-scroll.can-scroll-up.can-scroll-down {
      -webkit-mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 calc(100% - var(--fade-bottom-size)),
        transparent
      );
      mask-image: linear-gradient(
        to bottom,
        #000 0,
        #000 var(--fade-top-offset),
        transparent var(--fade-top-offset),
        #000 calc(var(--fade-top-offset) + var(--fade-top-size)),
        #000 calc(100% - var(--fade-bottom-size)),
        transparent
      );
    }

    .events-scroll::-webkit-scrollbar {
      display: none;
    }

    .all-day-stack {
      --all-day-shift: 0px;
      --all-day-collapse: 0px;
      --all-day-progress: 0;
      position: sticky;
      top: 0;
      z-index: 3;
      padding: 0 0 4px;
      margin: 0;
      margin-bottom: calc(var(--all-day-collapse, 0px) * -1);
      background: transparent;
      transform: translateY(var(--all-day-shift, 0px));
      transition: none;
      will-change: transform, margin-bottom;
    }

    .events-scroll.all-day-static .all-day-stack {
      position: relative;
      top: auto;
      z-index: 1;
      margin-bottom: 0;
      transform: none;
      will-change: auto;
    }

    .all-day-label {
      margin: 0 0 2px 2px;
      color: var(--secondary-text-color);
      font-size: 0.62rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      line-height: 1;
      text-transform: uppercase;
    }

    .chip {
      display: block;
      position: relative;
      min-height: 54px;
      padding: var(--aurora-event-padding, 8px 56px 8px 9px);
      border-radius: var(--aurora-event-radius, 8px);
      margin-bottom: 5px;
      overflow: hidden;
      line-height: 1.18;
      box-shadow: var(--aurora-event-shadow, 0 1px 2px rgba(0, 0, 0, 0.16));
      cursor: pointer;
      background: var(--aurora-chip-bg);
      border-left: var(--aurora-event-border-width, 4px) solid var(--aurora-chip-border-color);
      color: var(--aurora-chip-fg);
      font-size: var(--aurora-event-font-size);
      font-family: var(--aurora-event-font-family);
    }

    .chip.all-day-chip {
      margin-bottom: 2px;
    }

    .all-day-stack .chip.all-day-chip:last-child {
      margin-bottom: 0;
    }

    .chip.under-all-day {
      opacity: var(--under-all-day-opacity, 0.18) !important;
      filter: saturate(0.55);
    }

    .chip.under-all-day-hidden {
      pointer-events: none;
    }



    .chip-title,
    .chip-time {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chip-title {
      font-size: 1em;
      font-weight: 800;
    }

    .chip-time {
      margin-top: 2px;
      font-size: 0.92em;
      font-weight: 700;
      opacity: 0.82;
    }

    .chip-location {
      margin-top: 1px;
      font-size: 0.86em;
      font-weight: 700;
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chip.dim {
      opacity: 0.38;
    }

    .avatar-stack {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .avatar-stack .event-avatar {
      position: relative;
      right: auto;
      top: auto;
      transform: none;
      flex-shrink: 0;
    }

    .event-avatar {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--event-avatar-color, var(--primary-color));
      border: 1.5px solid rgba(255, 255, 255, 0.72);
      color: #fff;
      font-size: 0.62rem;
      font-weight: 900;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .event-avatar img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .event-avatar ha-icon {
      --mdc-icon-size: 26px;
      color: #fff;
    }

    .lottie-avatar aurora-lottie {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .empty-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      appearance: none;
      border: 0;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      padding: 0;
      transition: background 0.15s, color 0.15s;
    }

    .empty-action:hover,
    .empty-action:focus-visible {
      background: transparent;
      color: var(--primary-color);
      outline: none;
    }

    .empty-title {
      color: var(--primary-text-color);
      font-size: 1.08rem;
      font-weight: 700;
    }

    .empty-date {
      color: var(--secondary-text-color);
      font-size: 0.86rem;
      font-weight: 500;
    }

    .weather-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      max-width: 130px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 52px;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--secondary-text-color);
      font: inherit;
      font-weight: 600;
      overflow: hidden;
      cursor: pointer;
    }

    .weather-rain {
      font-size: 0.9rem;
      font-weight: 700;
      color: #60a5fa;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .weather-pill img {
      width: 52px;
      height: 52px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .weather-temps {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 700;
      line-height: 1;
      text-align: right;
      white-space: nowrap;
    }

    .weather-temps span {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .week-box-grid.no-grid {
      box-shadow: none;
    }

    .week-box-grid.no-grid .day-cell,
    .week-box-grid.no-grid .empty-action {
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
  `;
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "events", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "days", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "config", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "weatherByDate", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "weatherEntity", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "locale", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "persons", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarWeekBox.prototype, "occasionsEntityId", void 0);
AuroraCalendarWeekBox = __decorate([
    t$1("aurora-calendar-week-box")
], AuroraCalendarWeekBox);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var lottie_light$1 = {exports: {}};

var lottie_light = lottie_light$1.exports;

var hasRequiredLottie_light;

function requireLottie_light () {
	if (hasRequiredLottie_light) return lottie_light$1.exports;
	hasRequiredLottie_light = 1;
	(function (module, exports$1) {
		(typeof document !== "undefined") && (typeof navigator !== "undefined") && (function (global, factory) {
		  module.exports = factory() ;
		})(lottie_light, (function () {
		  var svgNS = 'http://www.w3.org/2000/svg';
		  var locationHref = '';
		  var _useWebWorker = false;
		  var initialDefaultFrame = -999999;
		  var setWebWorker = function setWebWorker(flag) {
		    _useWebWorker = !!flag;
		  };
		  var getWebWorker = function getWebWorker() {
		    return _useWebWorker;
		  };
		  var setLocationHref = function setLocationHref(value) {
		    locationHref = value;
		  };
		  var getLocationHref = function getLocationHref() {
		    return locationHref;
		  };

		  function createTag(type) {
		    // return {appendChild:function(){},setAttribute:function(){},style:{}}
		    return document.createElement(type);
		  }

		  function extendPrototype(sources, destination) {
		    var i;
		    var len = sources.length;
		    var sourcePrototype;
		    for (i = 0; i < len; i += 1) {
		      sourcePrototype = sources[i].prototype;
		      for (var attr in sourcePrototype) {
		        if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
		      }
		    }
		  }
		  function createProxyFunction(prototype) {
		    function ProxyFunction() {}
		    ProxyFunction.prototype = prototype;
		    return ProxyFunction;
		  }

		  // import Howl from '../../3rd_party/howler';

		  var audioControllerFactory = function () {
		    function AudioController(audioFactory) {
		      this.audios = [];
		      this.audioFactory = audioFactory;
		      this._volume = 1;
		      this._isMuted = false;
		    }
		    AudioController.prototype = {
		      addAudio: function addAudio(audio) {
		        this.audios.push(audio);
		      },
		      pause: function pause() {
		        var i;
		        var len = this.audios.length;
		        for (i = 0; i < len; i += 1) {
		          this.audios[i].pause();
		        }
		      },
		      resume: function resume() {
		        var i;
		        var len = this.audios.length;
		        for (i = 0; i < len; i += 1) {
		          this.audios[i].resume();
		        }
		      },
		      setRate: function setRate(rateValue) {
		        var i;
		        var len = this.audios.length;
		        for (i = 0; i < len; i += 1) {
		          this.audios[i].setRate(rateValue);
		        }
		      },
		      createAudio: function createAudio(assetPath) {
		        if (this.audioFactory) {
		          return this.audioFactory(assetPath);
		        }
		        if (window.Howl) {
		          return new window.Howl({
		            src: [assetPath]
		          });
		        }
		        return {
		          isPlaying: false,
		          play: function play() {
		            this.isPlaying = true;
		          },
		          seek: function seek() {
		            this.isPlaying = false;
		          },
		          playing: function playing() {},
		          rate: function rate() {},
		          setVolume: function setVolume() {}
		        };
		      },
		      setAudioFactory: function setAudioFactory(audioFactory) {
		        this.audioFactory = audioFactory;
		      },
		      setVolume: function setVolume(value) {
		        this._volume = value;
		        this._updateVolume();
		      },
		      mute: function mute() {
		        this._isMuted = true;
		        this._updateVolume();
		      },
		      unmute: function unmute() {
		        this._isMuted = false;
		        this._updateVolume();
		      },
		      getVolume: function getVolume() {
		        return this._volume;
		      },
		      _updateVolume: function _updateVolume() {
		        var i;
		        var len = this.audios.length;
		        for (i = 0; i < len; i += 1) {
		          this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
		        }
		      }
		    };
		    return function () {
		      return new AudioController();
		    };
		  }();

		  var createTypedArray = function () {
		    function createRegularArray(type, len) {
		      var i = 0;
		      var arr = [];
		      var value;
		      switch (type) {
		        case 'int16':
		        case 'uint8c':
		          value = 1;
		          break;
		        default:
		          value = 1.1;
		          break;
		      }
		      for (i = 0; i < len; i += 1) {
		        arr.push(value);
		      }
		      return arr;
		    }
		    function createTypedArrayFactory(type, len) {
		      if (type === 'float32') {
		        return new Float32Array(len);
		      }
		      if (type === 'int16') {
		        return new Int16Array(len);
		      }
		      if (type === 'uint8c') {
		        return new Uint8ClampedArray(len);
		      }
		      return createRegularArray(type, len);
		    }
		    if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
		      return createTypedArrayFactory;
		    }
		    return createRegularArray;
		  }();
		  function createSizedArray(len) {
		    return Array.apply(null, {
		      length: len
		    });
		  }
		  var subframeEnabled = true;
		  var expressionsPlugin = null;
		  var idPrefix$1 = '';
		  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		  var bmPow = Math.pow;
		  var bmSqrt = Math.sqrt;
		  var bmFloor = Math.floor;
		  var bmMin = Math.min;
		  var defaultCurveSegments = 150;
		  var degToRads = Math.PI / 180;
		  var roundCorner = 0.5519;
		  function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
		    this.type = type;
		    this.currentTime = currentTime;
		    this.totalTime = totalTime;
		    this.direction = frameMultiplier < 0 ? -1 : 1;
		  }
		  function BMCompleteEvent(type, frameMultiplier) {
		    this.type = type;
		    this.direction = frameMultiplier < 0 ? -1 : 1;
		  }
		  function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
		    this.type = type;
		    this.currentLoop = currentLoop;
		    this.totalLoops = totalLoops;
		    this.direction = frameMultiplier < 0 ? -1 : 1;
		  }
		  function BMSegmentStartEvent(type, firstFrame, totalFrames) {
		    this.type = type;
		    this.firstFrame = firstFrame;
		    this.totalFrames = totalFrames;
		  }
		  function BMDestroyEvent(type, target) {
		    this.type = type;
		    this.target = target;
		  }
		  function BMRenderFrameErrorEvent(nativeError, currentTime) {
		    this.type = 'renderFrameError';
		    this.nativeError = nativeError;
		    this.currentTime = currentTime;
		  }
		  function BMConfigErrorEvent(nativeError) {
		    this.type = 'configError';
		    this.nativeError = nativeError;
		  }
		  var createElementID = function () {
		    var _count = 0;
		    return function createID() {
		      _count += 1;
		      return idPrefix$1 + '__lottie_element_' + _count;
		    };
		  }();
		  function HSVtoRGB(h, s, v) {
		    var r;
		    var g;
		    var b;
		    var i;
		    var f;
		    var p;
		    var q;
		    var t;
		    i = Math.floor(h * 6);
		    f = h * 6 - i;
		    p = v * (1 - s);
		    q = v * (1 - f * s);
		    t = v * (1 - (1 - f) * s);
		    switch (i % 6) {
		      case 0:
		        r = v;
		        g = t;
		        b = p;
		        break;
		      case 1:
		        r = q;
		        g = v;
		        b = p;
		        break;
		      case 2:
		        r = p;
		        g = v;
		        b = t;
		        break;
		      case 3:
		        r = p;
		        g = q;
		        b = v;
		        break;
		      case 4:
		        r = t;
		        g = p;
		        b = v;
		        break;
		      case 5:
		        r = v;
		        g = p;
		        b = q;
		        break;
		    }
		    return [r, g, b];
		  }
		  function RGBtoHSV(r, g, b) {
		    var max = Math.max(r, g, b);
		    var min = Math.min(r, g, b);
		    var d = max - min;
		    var h;
		    var s = max === 0 ? 0 : d / max;
		    var v = max / 255;
		    switch (max) {
		      case min:
		        h = 0;
		        break;
		      case r:
		        h = g - b + d * (g < b ? 6 : 0);
		        h /= 6 * d;
		        break;
		      case g:
		        h = b - r + d * 2;
		        h /= 6 * d;
		        break;
		      case b:
		        h = r - g + d * 4;
		        h /= 6 * d;
		        break;
		    }
		    return [h, s, v];
		  }
		  function addSaturationToRGB(color, offset) {
		    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
		    hsv[1] += offset;
		    if (hsv[1] > 1) {
		      hsv[1] = 1;
		    } else if (hsv[1] <= 0) {
		      hsv[1] = 0;
		    }
		    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
		  }
		  function addBrightnessToRGB(color, offset) {
		    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
		    hsv[2] += offset;
		    if (hsv[2] > 1) {
		      hsv[2] = 1;
		    } else if (hsv[2] < 0) {
		      hsv[2] = 0;
		    }
		    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
		  }
		  function addHueToRGB(color, offset) {
		    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
		    hsv[0] += offset / 360;
		    if (hsv[0] > 1) {
		      hsv[0] -= 1;
		    } else if (hsv[0] < 0) {
		      hsv[0] += 1;
		    }
		    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
		  }
		  (function () {
		    var colorMap = [];
		    var i;
		    var hex;
		    for (i = 0; i < 256; i += 1) {
		      hex = i.toString(16);
		      colorMap[i] = hex.length === 1 ? '0' + hex : hex;
		    }
		    return function (r, g, b) {
		      if (r < 0) {
		        r = 0;
		      }
		      if (g < 0) {
		        g = 0;
		      }
		      if (b < 0) {
		        b = 0;
		      }
		      return '#' + colorMap[r] + colorMap[g] + colorMap[b];
		    };
		  })();
		  var setSubframeEnabled = function setSubframeEnabled(flag) {
		    subframeEnabled = !!flag;
		  };
		  var getSubframeEnabled = function getSubframeEnabled() {
		    return subframeEnabled;
		  };
		  var setExpressionsPlugin = function setExpressionsPlugin(value) {
		    expressionsPlugin = value;
		  };
		  var getExpressionsPlugin = function getExpressionsPlugin() {
		    return expressionsPlugin;
		  };
		  var setDefaultCurveSegments = function setDefaultCurveSegments(value) {
		    defaultCurveSegments = value;
		  };
		  var getDefaultCurveSegments = function getDefaultCurveSegments() {
		    return defaultCurveSegments;
		  };
		  var setIdPrefix = function setIdPrefix(value) {
		    idPrefix$1 = value;
		  };

		  function createNS(type) {
		    // return {appendChild:function(){},setAttribute:function(){},style:{}}
		    return document.createElementNS(svgNS, type);
		  }

		  function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
		  var dataManager = function () {
		    var _counterId = 1;
		    var processes = [];
		    var workerFn;
		    var workerInstance;
		    var workerProxy = {
		      onmessage: function onmessage() {},
		      postMessage: function postMessage(path) {
		        workerFn({
		          data: path
		        });
		      }
		    };
		    var _workerSelf = {
		      postMessage: function postMessage(data) {
		        workerProxy.onmessage({
		          data: data
		        });
		      }
		    };
		    function createWorker(fn) {
		      if (window.Worker && window.Blob && getWebWorker()) {
		        var blob = new Blob(['var _workerSelf = self; self.onmessage = ', fn.toString()], {
		          type: 'text/javascript'
		        });
		        // var blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });
		        var url = URL.createObjectURL(blob);
		        return new Worker(url);
		      }
		      workerFn = fn;
		      return workerProxy;
		    }
		    function setupWorker() {
		      if (!workerInstance) {
		        workerInstance = createWorker(function workerStart(e) {
		          function dataFunctionManager() {
		            function completeLayers(layers, comps) {
		              var layerData;
		              var i;
		              var len = layers.length;
		              var j;
		              var jLen;
		              var k;
		              var kLen;
		              for (i = 0; i < len; i += 1) {
		                layerData = layers[i];
		                if ('ks' in layerData && !layerData.completed) {
		                  layerData.completed = true;
		                  if (layerData.hasMask) {
		                    var maskProps = layerData.masksProperties;
		                    jLen = maskProps.length;
		                    for (j = 0; j < jLen; j += 1) {
		                      if (maskProps[j].pt.k.i) {
		                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
		                      } else {
		                        kLen = maskProps[j].pt.k.length;
		                        for (k = 0; k < kLen; k += 1) {
		                          if (maskProps[j].pt.k[k].s) {
		                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
		                          }
		                          if (maskProps[j].pt.k[k].e) {
		                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
		                          }
		                        }
		                      }
		                    }
		                  }
		                  if (layerData.ty === 0) {
		                    layerData.layers = findCompLayers(layerData.refId, comps);
		                    completeLayers(layerData.layers, comps);
		                  } else if (layerData.ty === 4) {
		                    completeShapes(layerData.shapes);
		                  } else if (layerData.ty === 5) {
		                    completeText(layerData);
		                  }
		                }
		              }
		            }
		            function completeChars(chars, assets) {
		              if (chars) {
		                var i = 0;
		                var len = chars.length;
		                for (i = 0; i < len; i += 1) {
		                  if (chars[i].t === 1) {
		                    // var compData = findComp(chars[i].data.refId, assets);
		                    chars[i].data.layers = findCompLayers(chars[i].data.refId, assets);
		                    // chars[i].data.ip = 0;
		                    // chars[i].data.op = 99999;
		                    // chars[i].data.st = 0;
		                    // chars[i].data.sr = 1;
		                    // chars[i].w = compData.w;
		                    // chars[i].data.ks = {
		                    //   a: { k: [0, 0, 0], a: 0 },
		                    //   p: { k: [0, -compData.h, 0], a: 0 },
		                    //   r: { k: 0, a: 0 },
		                    //   s: { k: [100, 100], a: 0 },
		                    //   o: { k: 100, a: 0 },
		                    // };
		                    completeLayers(chars[i].data.layers, assets);
		                  }
		                }
		              }
		            }
		            function findComp(id, comps) {
		              var i = 0;
		              var len = comps.length;
		              while (i < len) {
		                if (comps[i].id === id) {
		                  return comps[i];
		                }
		                i += 1;
		              }
		              return null;
		            }
		            function findCompLayers(id, comps) {
		              var comp = findComp(id, comps);
		              if (comp) {
		                if (!comp.layers.__used) {
		                  comp.layers.__used = true;
		                  return comp.layers;
		                }
		                return JSON.parse(JSON.stringify(comp.layers));
		              }
		              return null;
		            }
		            function completeShapes(arr) {
		              var i;
		              var len = arr.length;
		              var j;
		              var jLen;
		              for (i = len - 1; i >= 0; i -= 1) {
		                if (arr[i].ty === 'sh') {
		                  if (arr[i].ks.k.i) {
		                    convertPathsToAbsoluteValues(arr[i].ks.k);
		                  } else {
		                    jLen = arr[i].ks.k.length;
		                    for (j = 0; j < jLen; j += 1) {
		                      if (arr[i].ks.k[j].s) {
		                        convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
		                      }
		                      if (arr[i].ks.k[j].e) {
		                        convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
		                      }
		                    }
		                  }
		                } else if (arr[i].ty === 'gr') {
		                  completeShapes(arr[i].it);
		                }
		              }
		            }
		            function convertPathsToAbsoluteValues(path) {
		              var i;
		              var len = path.i.length;
		              for (i = 0; i < len; i += 1) {
		                path.i[i][0] += path.v[i][0];
		                path.i[i][1] += path.v[i][1];
		                path.o[i][0] += path.v[i][0];
		                path.o[i][1] += path.v[i][1];
		              }
		            }
		            function checkVersion(minimum, animVersionString) {
		              var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];
		              if (minimum[0] > animVersion[0]) {
		                return true;
		              }
		              if (animVersion[0] > minimum[0]) {
		                return false;
		              }
		              if (minimum[1] > animVersion[1]) {
		                return true;
		              }
		              if (animVersion[1] > minimum[1]) {
		                return false;
		              }
		              if (minimum[2] > animVersion[2]) {
		                return true;
		              }
		              if (animVersion[2] > minimum[2]) {
		                return false;
		              }
		              return null;
		            }
		            var checkText = function () {
		              var minimumVersion = [4, 4, 14];
		              function updateTextLayer(textLayer) {
		                var documentData = textLayer.t.d;
		                textLayer.t.d = {
		                  k: [{
		                    s: documentData,
		                    t: 0
		                  }]
		                };
		              }
		              function iterateLayers(layers) {
		                var i;
		                var len = layers.length;
		                for (i = 0; i < len; i += 1) {
		                  if (layers[i].ty === 5) {
		                    updateTextLayer(layers[i]);
		                  }
		                }
		              }
		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);
		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;
		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();
		            var checkChars = function () {
		              var minimumVersion = [4, 7, 99];
		              return function (animationData) {
		                if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
		                  var i;
		                  var len = animationData.chars.length;
		                  for (i = 0; i < len; i += 1) {
		                    var charData = animationData.chars[i];
		                    if (charData.data && charData.data.shapes) {
		                      completeShapes(charData.data.shapes);
		                      charData.data.ip = 0;
		                      charData.data.op = 99999;
		                      charData.data.st = 0;
		                      charData.data.sr = 1;
		                      charData.data.ks = {
		                        p: {
		                          k: [0, 0],
		                          a: 0
		                        },
		                        s: {
		                          k: [100, 100],
		                          a: 0
		                        },
		                        a: {
		                          k: [0, 0],
		                          a: 0
		                        },
		                        r: {
		                          k: 0,
		                          a: 0
		                        },
		                        o: {
		                          k: 100,
		                          a: 0
		                        }
		                      };
		                      if (!animationData.chars[i].t) {
		                        charData.data.shapes.push({
		                          ty: 'no'
		                        });
		                        charData.data.shapes[0].it.push({
		                          p: {
		                            k: [0, 0],
		                            a: 0
		                          },
		                          s: {
		                            k: [100, 100],
		                            a: 0
		                          },
		                          a: {
		                            k: [0, 0],
		                            a: 0
		                          },
		                          r: {
		                            k: 0,
		                            a: 0
		                          },
		                          o: {
		                            k: 100,
		                            a: 0
		                          },
		                          sk: {
		                            k: 0,
		                            a: 0
		                          },
		                          sa: {
		                            k: 0,
		                            a: 0
		                          },
		                          ty: 'tr'
		                        });
		                      }
		                    }
		                  }
		                }
		              };
		            }();
		            var checkPathProperties = function () {
		              var minimumVersion = [5, 7, 15];
		              function updateTextLayer(textLayer) {
		                var pathData = textLayer.t.p;
		                if (typeof pathData.a === 'number') {
		                  pathData.a = {
		                    a: 0,
		                    k: pathData.a
		                  };
		                }
		                if (typeof pathData.p === 'number') {
		                  pathData.p = {
		                    a: 0,
		                    k: pathData.p
		                  };
		                }
		                if (typeof pathData.r === 'number') {
		                  pathData.r = {
		                    a: 0,
		                    k: pathData.r
		                  };
		                }
		              }
		              function iterateLayers(layers) {
		                var i;
		                var len = layers.length;
		                for (i = 0; i < len; i += 1) {
		                  if (layers[i].ty === 5) {
		                    updateTextLayer(layers[i]);
		                  }
		                }
		              }
		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);
		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;
		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();
		            var checkColors = function () {
		              var minimumVersion = [4, 1, 9];
		              function iterateShapes(shapes) {
		                var i;
		                var len = shapes.length;
		                var j;
		                var jLen;
		                for (i = 0; i < len; i += 1) {
		                  if (shapes[i].ty === 'gr') {
		                    iterateShapes(shapes[i].it);
		                  } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
		                    if (shapes[i].c.k && shapes[i].c.k[0].i) {
		                      jLen = shapes[i].c.k.length;
		                      for (j = 0; j < jLen; j += 1) {
		                        if (shapes[i].c.k[j].s) {
		                          shapes[i].c.k[j].s[0] /= 255;
		                          shapes[i].c.k[j].s[1] /= 255;
		                          shapes[i].c.k[j].s[2] /= 255;
		                          shapes[i].c.k[j].s[3] /= 255;
		                        }
		                        if (shapes[i].c.k[j].e) {
		                          shapes[i].c.k[j].e[0] /= 255;
		                          shapes[i].c.k[j].e[1] /= 255;
		                          shapes[i].c.k[j].e[2] /= 255;
		                          shapes[i].c.k[j].e[3] /= 255;
		                        }
		                      }
		                    } else {
		                      shapes[i].c.k[0] /= 255;
		                      shapes[i].c.k[1] /= 255;
		                      shapes[i].c.k[2] /= 255;
		                      shapes[i].c.k[3] /= 255;
		                    }
		                  }
		                }
		              }
		              function iterateLayers(layers) {
		                var i;
		                var len = layers.length;
		                for (i = 0; i < len; i += 1) {
		                  if (layers[i].ty === 4) {
		                    iterateShapes(layers[i].shapes);
		                  }
		                }
		              }
		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);
		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;
		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();
		            var checkShapes = function () {
		              var minimumVersion = [4, 4, 18];
		              function completeClosingShapes(arr) {
		                var i;
		                var len = arr.length;
		                var j;
		                var jLen;
		                for (i = len - 1; i >= 0; i -= 1) {
		                  if (arr[i].ty === 'sh') {
		                    if (arr[i].ks.k.i) {
		                      arr[i].ks.k.c = arr[i].closed;
		                    } else {
		                      jLen = arr[i].ks.k.length;
		                      for (j = 0; j < jLen; j += 1) {
		                        if (arr[i].ks.k[j].s) {
		                          arr[i].ks.k[j].s[0].c = arr[i].closed;
		                        }
		                        if (arr[i].ks.k[j].e) {
		                          arr[i].ks.k[j].e[0].c = arr[i].closed;
		                        }
		                      }
		                    }
		                  } else if (arr[i].ty === 'gr') {
		                    completeClosingShapes(arr[i].it);
		                  }
		                }
		              }
		              function iterateLayers(layers) {
		                var layerData;
		                var i;
		                var len = layers.length;
		                var j;
		                var jLen;
		                var k;
		                var kLen;
		                for (i = 0; i < len; i += 1) {
		                  layerData = layers[i];
		                  if (layerData.hasMask) {
		                    var maskProps = layerData.masksProperties;
		                    jLen = maskProps.length;
		                    for (j = 0; j < jLen; j += 1) {
		                      if (maskProps[j].pt.k.i) {
		                        maskProps[j].pt.k.c = maskProps[j].cl;
		                      } else {
		                        kLen = maskProps[j].pt.k.length;
		                        for (k = 0; k < kLen; k += 1) {
		                          if (maskProps[j].pt.k[k].s) {
		                            maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
		                          }
		                          if (maskProps[j].pt.k[k].e) {
		                            maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
		                          }
		                        }
		                      }
		                    }
		                  }
		                  if (layerData.ty === 4) {
		                    completeClosingShapes(layerData.shapes);
		                  }
		                }
		              }
		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);
		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;
		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();
		            function completeData(animationData) {
		              if (animationData.__complete) {
		                return;
		              }
		              checkColors(animationData);
		              checkText(animationData);
		              checkChars(animationData);
		              checkPathProperties(animationData);
		              checkShapes(animationData);
		              completeLayers(animationData.layers, animationData.assets);
		              completeChars(animationData.chars, animationData.assets);
		              animationData.__complete = true;
		            }
		            function completeText(data) {
		              if (data.t.a.length === 0 && !('m' in data.t.p)) ;
		            }
		            var moduleOb = {};
		            moduleOb.completeData = completeData;
		            moduleOb.checkColors = checkColors;
		            moduleOb.checkChars = checkChars;
		            moduleOb.checkPathProperties = checkPathProperties;
		            moduleOb.checkShapes = checkShapes;
		            moduleOb.completeLayers = completeLayers;
		            return moduleOb;
		          }
		          if (!_workerSelf.dataManager) {
		            _workerSelf.dataManager = dataFunctionManager();
		          }
		          if (!_workerSelf.assetLoader) {
		            _workerSelf.assetLoader = function () {
		              function formatResponse(xhr) {
		                // using typeof doubles the time of execution of this method,
		                // so if available, it's better to use the header to validate the type
		                var contentTypeHeader = xhr.getResponseHeader('content-type');
		                if (contentTypeHeader && xhr.responseType === 'json' && contentTypeHeader.indexOf('json') !== -1) {
		                  return xhr.response;
		                }
		                if (xhr.response && _typeof$2(xhr.response) === 'object') {
		                  return xhr.response;
		                }
		                if (xhr.response && typeof xhr.response === 'string') {
		                  return JSON.parse(xhr.response);
		                }
		                if (xhr.responseText) {
		                  return JSON.parse(xhr.responseText);
		                }
		                return null;
		              }
		              function loadAsset(path, fullPath, callback, errorCallback) {
		                var response;
		                var xhr = new XMLHttpRequest();
		                // set responseType after calling open or IE will break.
		                try {
		                  // This crashes on Android WebView prior to KitKat
		                  xhr.responseType = 'json';
		                } catch (err) {} // eslint-disable-line no-empty
		                xhr.onreadystatechange = function () {
		                  if (xhr.readyState === 4) {
		                    if (xhr.status === 200) {
		                      response = formatResponse(xhr);
		                      callback(response);
		                    } else {
		                      try {
		                        response = formatResponse(xhr);
		                        callback(response);
		                      } catch (err) {
		                        if (errorCallback) {
		                          errorCallback(err);
		                        }
		                      }
		                    }
		                  }
		                };
		                try {
		                  // Hack to workaround banner validation
		                  xhr.open(['G', 'E', 'T'].join(''), path, true);
		                } catch (error) {
		                  // Hack to workaround banner validation
		                  xhr.open(['G', 'E', 'T'].join(''), fullPath + '/' + path, true);
		                }
		                xhr.send();
		              }
		              return {
		                load: loadAsset
		              };
		            }();
		          }
		          if (e.data.type === 'loadAnimation') {
		            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
		              _workerSelf.dataManager.completeData(data);
		              _workerSelf.postMessage({
		                id: e.data.id,
		                payload: data,
		                status: 'success'
		              });
		            }, function () {
		              _workerSelf.postMessage({
		                id: e.data.id,
		                status: 'error'
		              });
		            });
		          } else if (e.data.type === 'complete') {
		            var animation = e.data.animation;
		            _workerSelf.dataManager.completeData(animation);
		            _workerSelf.postMessage({
		              id: e.data.id,
		              payload: animation,
		              status: 'success'
		            });
		          } else if (e.data.type === 'loadData') {
		            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
		              _workerSelf.postMessage({
		                id: e.data.id,
		                payload: data,
		                status: 'success'
		              });
		            }, function () {
		              _workerSelf.postMessage({
		                id: e.data.id,
		                status: 'error'
		              });
		            });
		          }
		        });
		        workerInstance.onmessage = function (event) {
		          var data = event.data;
		          var id = data.id;
		          var process = processes[id];
		          processes[id] = null;
		          if (data.status === 'success') {
		            process.onComplete(data.payload);
		          } else if (process.onError) {
		            process.onError();
		          }
		        };
		      }
		    }
		    function createProcess(onComplete, onError) {
		      _counterId += 1;
		      var id = 'processId_' + _counterId;
		      processes[id] = {
		        onComplete: onComplete,
		        onError: onError
		      };
		      return id;
		    }
		    function loadAnimation(path, onComplete, onError) {
		      setupWorker();
		      var processId = createProcess(onComplete, onError);
		      workerInstance.postMessage({
		        type: 'loadAnimation',
		        path: path,
		        fullPath: window.location.origin + window.location.pathname,
		        id: processId
		      });
		    }
		    function loadData(path, onComplete, onError) {
		      setupWorker();
		      var processId = createProcess(onComplete, onError);
		      workerInstance.postMessage({
		        type: 'loadData',
		        path: path,
		        fullPath: window.location.origin + window.location.pathname,
		        id: processId
		      });
		    }
		    function completeAnimation(anim, onComplete, onError) {
		      setupWorker();
		      var processId = createProcess(onComplete, onError);
		      workerInstance.postMessage({
		        type: 'complete',
		        animation: anim,
		        id: processId
		      });
		    }
		    return {
		      loadAnimation: loadAnimation,
		      loadData: loadData,
		      completeAnimation: completeAnimation
		    };
		  }();

		  var ImagePreloader = function () {
		    var proxyImage = function () {
		      var canvas = createTag('canvas');
		      canvas.width = 1;
		      canvas.height = 1;
		      var ctx = canvas.getContext('2d');
		      ctx.fillStyle = 'rgba(0,0,0,0)';
		      ctx.fillRect(0, 0, 1, 1);
		      return canvas;
		    }();
		    function imageLoaded() {
		      this.loadedAssets += 1;
		      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
		        if (this.imagesLoadedCb) {
		          this.imagesLoadedCb(null);
		        }
		      }
		    }
		    function footageLoaded() {
		      this.loadedFootagesCount += 1;
		      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
		        if (this.imagesLoadedCb) {
		          this.imagesLoadedCb(null);
		        }
		      }
		    }
		    function getAssetsPath(assetData, assetsPath, originalPath) {
		      var path = '';
		      if (assetData.e) {
		        path = assetData.p;
		      } else if (assetsPath) {
		        var imagePath = assetData.p;
		        if (imagePath.indexOf('images/') !== -1) {
		          imagePath = imagePath.split('/')[1];
		        }
		        path = assetsPath + imagePath;
		      } else {
		        path = originalPath;
		        path += assetData.u ? assetData.u : '';
		        path += assetData.p;
		      }
		      return path;
		    }
		    function testImageLoaded(img) {
		      var _count = 0;
		      var intervalId = setInterval(function () {
		        var box = img.getBBox();
		        if (box.width || _count > 500) {
		          this._imageLoaded();
		          clearInterval(intervalId);
		        }
		        _count += 1;
		      }.bind(this), 50);
		    }
		    function createImageData(assetData) {
		      var path = getAssetsPath(assetData, this.assetsPath, this.path);
		      var img = createNS('image');
		      if (isSafari) {
		        this.testImageLoaded(img);
		      } else {
		        img.addEventListener('load', this._imageLoaded, false);
		      }
		      img.addEventListener('error', function () {
		        ob.img = proxyImage;
		        this._imageLoaded();
		      }.bind(this), false);
		      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
		      if (this._elementHelper.append) {
		        this._elementHelper.append(img);
		      } else {
		        this._elementHelper.appendChild(img);
		      }
		      var ob = {
		        img: img,
		        assetData: assetData
		      };
		      return ob;
		    }
		    function createImgData(assetData) {
		      var path = getAssetsPath(assetData, this.assetsPath, this.path);
		      var img = createTag('img');
		      img.crossOrigin = 'anonymous';
		      img.addEventListener('load', this._imageLoaded, false);
		      img.addEventListener('error', function () {
		        ob.img = proxyImage;
		        this._imageLoaded();
		      }.bind(this), false);
		      img.src = path;
		      var ob = {
		        img: img,
		        assetData: assetData
		      };
		      return ob;
		    }
		    function createFootageData(data) {
		      var ob = {
		        assetData: data
		      };
		      var path = getAssetsPath(data, this.assetsPath, this.path);
		      dataManager.loadData(path, function (footageData) {
		        ob.img = footageData;
		        this._footageLoaded();
		      }.bind(this), function () {
		        ob.img = {};
		        this._footageLoaded();
		      }.bind(this));
		      return ob;
		    }
		    function loadAssets(assets, cb) {
		      this.imagesLoadedCb = cb;
		      var i;
		      var len = assets.length;
		      for (i = 0; i < len; i += 1) {
		        if (!assets[i].layers) {
		          if (!assets[i].t || assets[i].t === 'seq') {
		            this.totalImages += 1;
		            this.images.push(this._createImageData(assets[i]));
		          } else if (assets[i].t === 3) {
		            this.totalFootages += 1;
		            this.images.push(this.createFootageData(assets[i]));
		          }
		        }
		      }
		    }
		    function setPath(path) {
		      this.path = path || '';
		    }
		    function setAssetsPath(path) {
		      this.assetsPath = path || '';
		    }
		    function getAsset(assetData) {
		      var i = 0;
		      var len = this.images.length;
		      while (i < len) {
		        if (this.images[i].assetData === assetData) {
		          return this.images[i].img;
		        }
		        i += 1;
		      }
		      return null;
		    }
		    function destroy() {
		      this.imagesLoadedCb = null;
		      this.images.length = 0;
		    }
		    function loadedImages() {
		      return this.totalImages === this.loadedAssets;
		    }
		    function loadedFootages() {
		      return this.totalFootages === this.loadedFootagesCount;
		    }
		    function setCacheType(type, elementHelper) {
		      if (type === 'svg') {
		        this._elementHelper = elementHelper;
		        this._createImageData = this.createImageData.bind(this);
		      } else {
		        this._createImageData = this.createImgData.bind(this);
		      }
		    }
		    function ImagePreloaderFactory() {
		      this._imageLoaded = imageLoaded.bind(this);
		      this._footageLoaded = footageLoaded.bind(this);
		      this.testImageLoaded = testImageLoaded.bind(this);
		      this.createFootageData = createFootageData.bind(this);
		      this.assetsPath = '';
		      this.path = '';
		      this.totalImages = 0;
		      this.totalFootages = 0;
		      this.loadedAssets = 0;
		      this.loadedFootagesCount = 0;
		      this.imagesLoadedCb = null;
		      this.images = [];
		    }
		    ImagePreloaderFactory.prototype = {
		      loadAssets: loadAssets,
		      setAssetsPath: setAssetsPath,
		      setPath: setPath,
		      loadedImages: loadedImages,
		      loadedFootages: loadedFootages,
		      destroy: destroy,
		      getAsset: getAsset,
		      createImgData: createImgData,
		      createImageData: createImageData,
		      imageLoaded: imageLoaded,
		      footageLoaded: footageLoaded,
		      setCacheType: setCacheType
		    };
		    return ImagePreloaderFactory;
		  }();

		  function BaseEvent() {}
		  BaseEvent.prototype = {
		    triggerEvent: function triggerEvent(eventName, args) {
		      if (this._cbs[eventName]) {
		        var callbacks = this._cbs[eventName];
		        for (var i = 0; i < callbacks.length; i += 1) {
		          callbacks[i](args);
		        }
		      }
		    },
		    addEventListener: function addEventListener(eventName, callback) {
		      if (!this._cbs[eventName]) {
		        this._cbs[eventName] = [];
		      }
		      this._cbs[eventName].push(callback);
		      return function () {
		        this.removeEventListener(eventName, callback);
		      }.bind(this);
		    },
		    removeEventListener: function removeEventListener(eventName, callback) {
		      if (!callback) {
		        this._cbs[eventName] = null;
		      } else if (this._cbs[eventName]) {
		        var i = 0;
		        var len = this._cbs[eventName].length;
		        while (i < len) {
		          if (this._cbs[eventName][i] === callback) {
		            this._cbs[eventName].splice(i, 1);
		            i -= 1;
		            len -= 1;
		          }
		          i += 1;
		        }
		        if (!this._cbs[eventName].length) {
		          this._cbs[eventName] = null;
		        }
		      }
		    }
		  };

		  var markerParser = function () {
		    function parsePayloadLines(payload) {
		      var lines = payload.split('\r\n');
		      var keys = {};
		      var line;
		      var keysCount = 0;
		      for (var i = 0; i < lines.length; i += 1) {
		        line = lines[i].split(':');
		        if (line.length === 2) {
		          keys[line[0]] = line[1].trim();
		          keysCount += 1;
		        }
		      }
		      if (keysCount === 0) {
		        throw new Error();
		      }
		      return keys;
		    }
		    return function (_markers) {
		      var markers = [];
		      for (var i = 0; i < _markers.length; i += 1) {
		        var _marker = _markers[i];
		        var markerData = {
		          time: _marker.tm,
		          duration: _marker.dr
		        };
		        try {
		          markerData.payload = JSON.parse(_markers[i].cm);
		        } catch (_) {
		          try {
		            markerData.payload = parsePayloadLines(_markers[i].cm);
		          } catch (__) {
		            markerData.payload = {
		              name: _markers[i].cm
		            };
		          }
		        }
		        markers.push(markerData);
		      }
		      return markers;
		    };
		  }();

		  var ProjectInterface = function () {
		    function registerComposition(comp) {
		      this.compositions.push(comp);
		    }
		    return function () {
		      function _thisProjectFunction(name) {
		        var i = 0;
		        var len = this.compositions.length;
		        while (i < len) {
		          if (this.compositions[i].data && this.compositions[i].data.nm === name) {
		            if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
		              this.compositions[i].prepareFrame(this.currentFrame);
		            }
		            return this.compositions[i].compInterface;
		          }
		          i += 1;
		        }
		        return null;
		      }
		      _thisProjectFunction.compositions = [];
		      _thisProjectFunction.currentFrame = 0;
		      _thisProjectFunction.registerComposition = registerComposition;
		      return _thisProjectFunction;
		    };
		  }();

		  var renderers = {};
		  var registerRenderer = function registerRenderer(key, value) {
		    renderers[key] = value;
		  };
		  function getRenderer(key) {
		    return renderers[key];
		  }
		  function getRegisteredRenderer() {
		    // Returns canvas by default for compatibility
		    if (renderers.canvas) {
		      return 'canvas';
		    }
		    // Returns any renderer that is registered
		    for (var key in renderers) {
		      if (renderers[key]) {
		        return key;
		      }
		    }
		    return '';
		  }

		  function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
		  var AnimationItem = function AnimationItem() {
		    this._cbs = [];
		    this.name = '';
		    this.path = '';
		    this.isLoaded = false;
		    this.currentFrame = 0;
		    this.currentRawFrame = 0;
		    this.firstFrame = 0;
		    this.totalFrames = 0;
		    this.frameRate = 0;
		    this.frameMult = 0;
		    this.playSpeed = 1;
		    this.playDirection = 1;
		    this.playCount = 0;
		    this.animationData = {};
		    this.assets = [];
		    this.isPaused = true;
		    this.autoplay = false;
		    this.loop = true;
		    this.renderer = null;
		    this.animationID = createElementID();
		    this.assetsPath = '';
		    this.timeCompleted = 0;
		    this.segmentPos = 0;
		    this.isSubframeEnabled = getSubframeEnabled();
		    this.segments = [];
		    this._idle = true;
		    this._completedLoop = false;
		    this.projectInterface = ProjectInterface();
		    this.imagePreloader = new ImagePreloader();
		    this.audioController = audioControllerFactory();
		    this.markers = [];
		    this.configAnimation = this.configAnimation.bind(this);
		    this.onSetupError = this.onSetupError.bind(this);
		    this.onSegmentComplete = this.onSegmentComplete.bind(this);
		    this.drawnFrameEvent = new BMEnterFrameEvent('drawnFrame', 0, 0, 0);
		    this.expressionsPlugin = getExpressionsPlugin();
		  };
		  extendPrototype([BaseEvent], AnimationItem);
		  AnimationItem.prototype.setParams = function (params) {
		    if (params.wrapper || params.container) {
		      this.wrapper = params.wrapper || params.container;
		    }
		    var animType = 'svg';
		    if (params.animType) {
		      animType = params.animType;
		    } else if (params.renderer) {
		      animType = params.renderer;
		    }
		    var RendererClass = getRenderer(animType);
		    this.renderer = new RendererClass(this, params.rendererSettings);
		    this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
		    this.renderer.setProjectInterface(this.projectInterface);
		    this.animType = animType;
		    if (params.loop === '' || params.loop === null || params.loop === undefined || params.loop === true) {
		      this.loop = true;
		    } else if (params.loop === false) {
		      this.loop = false;
		    } else {
		      this.loop = parseInt(params.loop, 10);
		    }
		    this.autoplay = 'autoplay' in params ? params.autoplay : true;
		    this.name = params.name ? params.name : '';
		    this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
		    this.assetsPath = params.assetsPath;
		    this.initialSegment = params.initialSegment;
		    if (params.audioFactory) {
		      this.audioController.setAudioFactory(params.audioFactory);
		    }
		    if (params.animationData) {
		      this.setupAnimation(params.animationData);
		    } else if (params.path) {
		      if (params.path.lastIndexOf('\\') !== -1) {
		        this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
		      } else {
		        this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
		      }
		      this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
		      this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));
		      dataManager.loadAnimation(params.path, this.configAnimation, this.onSetupError);
		    }
		  };
		  AnimationItem.prototype.onSetupError = function () {
		    this.trigger('data_failed');
		  };
		  AnimationItem.prototype.setupAnimation = function (data) {
		    dataManager.completeAnimation(data, this.configAnimation);
		  };
		  AnimationItem.prototype.setData = function (wrapper, animationData) {
		    if (animationData) {
		      if (_typeof$1(animationData) !== 'object') {
		        animationData = JSON.parse(animationData);
		      }
		    }
		    var params = {
		      wrapper: wrapper,
		      animationData: animationData
		    };
		    var wrapperAttributes = wrapper.attributes;
		    params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-path').value : wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
		    params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('bm-type').value : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas';
		    var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-loop').value : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-loop').value : wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';
		    if (loop === 'false') {
		      params.loop = false;
		    } else if (loop === 'true') {
		      params.loop = true;
		    } else if (loop !== '') {
		      params.loop = parseInt(loop, 10);
		    }
		    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-autoplay').value : wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
		    params.autoplay = autoplay !== 'false';
		    params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-name').value : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value : '';
		    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-prerender').value : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-prerender').value : wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';
		    if (prerender === 'false') {
		      params.prerender = false;
		    }
		    if (!params.path) {
		      this.trigger('destroy');
		    } else {
		      this.setParams(params);
		    }
		  };
		  AnimationItem.prototype.includeLayers = function (data) {
		    if (data.op > this.animationData.op) {
		      this.animationData.op = data.op;
		      this.totalFrames = Math.floor(data.op - this.animationData.ip);
		    }
		    var layers = this.animationData.layers;
		    var i;
		    var len = layers.length;
		    var newLayers = data.layers;
		    var j;
		    var jLen = newLayers.length;
		    for (j = 0; j < jLen; j += 1) {
		      i = 0;
		      while (i < len) {
		        if (layers[i].id === newLayers[j].id) {
		          layers[i] = newLayers[j];
		          break;
		        }
		        i += 1;
		      }
		    }
		    if (data.chars || data.fonts) {
		      this.renderer.globalData.fontManager.addChars(data.chars);
		      this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
		    }
		    if (data.assets) {
		      len = data.assets.length;
		      for (i = 0; i < len; i += 1) {
		        this.animationData.assets.push(data.assets[i]);
		      }
		    }
		    this.animationData.__complete = false;
		    dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
		  };
		  AnimationItem.prototype.onSegmentComplete = function (data) {
		    this.animationData = data;
		    var expressionsPlugin = getExpressionsPlugin();
		    if (expressionsPlugin) {
		      expressionsPlugin.initExpressions(this);
		    }
		    this.loadNextSegment();
		  };
		  AnimationItem.prototype.loadNextSegment = function () {
		    var segments = this.animationData.segments;
		    if (!segments || segments.length === 0 || !this.autoloadSegments) {
		      this.trigger('data_ready');
		      this.timeCompleted = this.totalFrames;
		      return;
		    }
		    var segment = segments.shift();
		    this.timeCompleted = segment.time * this.frameRate;
		    var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
		    this.segmentPos += 1;
		    dataManager.loadData(segmentPath, this.includeLayers.bind(this), function () {
		      this.trigger('data_failed');
		    }.bind(this));
		  };
		  AnimationItem.prototype.loadSegments = function () {
		    var segments = this.animationData.segments;
		    if (!segments) {
		      this.timeCompleted = this.totalFrames;
		    }
		    this.loadNextSegment();
		  };
		  AnimationItem.prototype.imagesLoaded = function () {
		    this.trigger('loaded_images');
		    this.checkLoaded();
		  };
		  AnimationItem.prototype.preloadImages = function () {
		    this.imagePreloader.setAssetsPath(this.assetsPath);
		    this.imagePreloader.setPath(this.path);
		    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
		  };
		  AnimationItem.prototype.configAnimation = function (animData) {
		    if (!this.renderer) {
		      return;
		    }
		    try {
		      this.animationData = animData;
		      if (this.initialSegment) {
		        this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
		        this.firstFrame = Math.round(this.initialSegment[0]);
		      } else {
		        this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
		        this.firstFrame = Math.round(this.animationData.ip);
		      }
		      this.renderer.configAnimation(animData);
		      if (!animData.assets) {
		        animData.assets = [];
		      }
		      this.assets = this.animationData.assets;
		      this.frameRate = this.animationData.fr;
		      this.frameMult = this.animationData.fr / 1000;
		      this.renderer.searchExtraCompositions(animData.assets);
		      this.markers = markerParser(animData.markers || []);
		      this.trigger('config_ready');
		      this.preloadImages();
		      this.loadSegments();
		      this.updaFrameModifier();
		      this.waitForFontsLoaded();
		      if (this.isPaused) {
		        this.audioController.pause();
		      }
		    } catch (error) {
		      this.triggerConfigError(error);
		    }
		  };
		  AnimationItem.prototype.waitForFontsLoaded = function () {
		    if (!this.renderer) {
		      return;
		    }
		    if (this.renderer.globalData.fontManager.isLoaded) {
		      this.checkLoaded();
		    } else {
		      setTimeout(this.waitForFontsLoaded.bind(this), 20);
		    }
		  };
		  AnimationItem.prototype.checkLoaded = function () {
		    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas') && this.imagePreloader.loadedFootages()) {
		      this.isLoaded = true;
		      var expressionsPlugin = getExpressionsPlugin();
		      if (expressionsPlugin) {
		        expressionsPlugin.initExpressions(this);
		      }
		      this.renderer.initItems();
		      setTimeout(function () {
		        this.trigger('DOMLoaded');
		      }.bind(this), 0);
		      this.gotoFrame();
		      if (this.autoplay) {
		        this.play();
		      }
		    }
		  };
		  AnimationItem.prototype.resize = function (width, height) {
		    // Adding this validation for backwards compatibility in case an event object was being passed down
		    var _width = typeof width === 'number' ? width : undefined;
		    var _height = typeof height === 'number' ? height : undefined;
		    this.renderer.updateContainerSize(_width, _height);
		  };
		  AnimationItem.prototype.setSubframe = function (flag) {
		    this.isSubframeEnabled = !!flag;
		  };
		  AnimationItem.prototype.gotoFrame = function () {
		    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

		    if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
		      this.currentFrame = this.timeCompleted;
		    }
		    this.trigger('enterFrame');
		    this.renderFrame();
		    this.trigger('drawnFrame');
		  };
		  AnimationItem.prototype.renderFrame = function () {
		    if (this.isLoaded === false || !this.renderer) {
		      return;
		    }
		    try {
		      if (this.expressionsPlugin) {
		        this.expressionsPlugin.resetFrame();
		      }
		      this.renderer.renderFrame(this.currentFrame + this.firstFrame);
		    } catch (error) {
		      this.triggerRenderFrameError(error);
		    }
		  };
		  AnimationItem.prototype.play = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    if (this.isPaused === true) {
		      this.isPaused = false;
		      this.trigger('_play');
		      this.audioController.resume();
		      if (this._idle) {
		        this._idle = false;
		        this.trigger('_active');
		      }
		    }
		  };
		  AnimationItem.prototype.pause = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    if (this.isPaused === false) {
		      this.isPaused = true;
		      this.trigger('_pause');
		      this._idle = true;
		      this.trigger('_idle');
		      this.audioController.pause();
		    }
		  };
		  AnimationItem.prototype.togglePause = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    if (this.isPaused === true) {
		      this.play();
		    } else {
		      this.pause();
		    }
		  };
		  AnimationItem.prototype.stop = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    this.pause();
		    this.playCount = 0;
		    this._completedLoop = false;
		    this.setCurrentRawFrameValue(0);
		  };
		  AnimationItem.prototype.getMarkerData = function (markerName) {
		    var marker;
		    for (var i = 0; i < this.markers.length; i += 1) {
		      marker = this.markers[i];
		      if (marker.payload && marker.payload.name === markerName) {
		        return marker;
		      }
		    }
		    return null;
		  };
		  AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    var numValue = Number(value);
		    if (isNaN(numValue)) {
		      var marker = this.getMarkerData(value);
		      if (marker) {
		        this.goToAndStop(marker.time, true);
		      }
		    } else if (isFrame) {
		      this.setCurrentRawFrameValue(value);
		    } else {
		      this.setCurrentRawFrameValue(value * this.frameModifier);
		    }
		    this.pause();
		  };
		  AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    var numValue = Number(value);
		    if (isNaN(numValue)) {
		      var marker = this.getMarkerData(value);
		      if (marker) {
		        if (!marker.duration) {
		          this.goToAndStop(marker.time, true);
		        } else {
		          this.playSegments([marker.time, marker.time + marker.duration], true);
		        }
		      }
		    } else {
		      this.goToAndStop(numValue, isFrame, name);
		    }
		    this.play();
		  };
		  AnimationItem.prototype.advanceTime = function (value) {
		    if (this.isPaused === true || this.isLoaded === false) {
		      return;
		    }
		    var nextValue = this.currentRawFrame + value * this.frameModifier;
		    var _isComplete = false;
		    // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
		    // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
		    if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
		      if (!this.loop || this.playCount === this.loop) {
		        if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
		          _isComplete = true;
		          nextValue = this.totalFrames - 1;
		        }
		      } else if (nextValue >= this.totalFrames) {
		        this.playCount += 1;
		        if (!this.checkSegments(nextValue % this.totalFrames)) {
		          this.setCurrentRawFrameValue(nextValue % this.totalFrames);
		          this._completedLoop = true;
		          this.trigger('loopComplete');
		        }
		      } else {
		        this.setCurrentRawFrameValue(nextValue);
		      }
		    } else if (nextValue < 0) {
		      if (!this.checkSegments(nextValue % this.totalFrames)) {
		        if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
		          // eslint-disable-line no-plusplus
		          this.setCurrentRawFrameValue(this.totalFrames + nextValue % this.totalFrames);
		          if (!this._completedLoop) {
		            this._completedLoop = true;
		          } else {
		            this.trigger('loopComplete');
		          }
		        } else {
		          _isComplete = true;
		          nextValue = 0;
		        }
		      }
		    } else {
		      this.setCurrentRawFrameValue(nextValue);
		    }
		    if (_isComplete) {
		      this.setCurrentRawFrameValue(nextValue);
		      this.pause();
		      this.trigger('complete');
		    }
		  };
		  AnimationItem.prototype.adjustSegment = function (arr, offset) {
		    this.playCount = 0;
		    if (arr[1] < arr[0]) {
		      if (this.frameModifier > 0) {
		        if (this.playSpeed < 0) {
		          this.setSpeed(-this.playSpeed);
		        } else {
		          this.setDirection(-1);
		        }
		      }
		      this.totalFrames = arr[0] - arr[1];
		      this.timeCompleted = this.totalFrames;
		      this.firstFrame = arr[1];
		      this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
		    } else if (arr[1] > arr[0]) {
		      if (this.frameModifier < 0) {
		        if (this.playSpeed < 0) {
		          this.setSpeed(-this.playSpeed);
		        } else {
		          this.setDirection(1);
		        }
		      }
		      this.totalFrames = arr[1] - arr[0];
		      this.timeCompleted = this.totalFrames;
		      this.firstFrame = arr[0];
		      this.setCurrentRawFrameValue(0.001 + offset);
		    }
		    this.trigger('segmentStart');
		  };
		  AnimationItem.prototype.setSegment = function (init, end) {
		    var pendingFrame = -1;
		    if (this.isPaused) {
		      if (this.currentRawFrame + this.firstFrame < init) {
		        pendingFrame = init;
		      } else if (this.currentRawFrame + this.firstFrame > end) {
		        pendingFrame = end - init;
		      }
		    }
		    this.firstFrame = init;
		    this.totalFrames = end - init;
		    this.timeCompleted = this.totalFrames;
		    if (pendingFrame !== -1) {
		      this.goToAndStop(pendingFrame, true);
		    }
		  };
		  AnimationItem.prototype.playSegments = function (arr, forceFlag) {
		    if (forceFlag) {
		      this.segments.length = 0;
		    }
		    if (_typeof$1(arr[0]) === 'object') {
		      var i;
		      var len = arr.length;
		      for (i = 0; i < len; i += 1) {
		        this.segments.push(arr[i]);
		      }
		    } else {
		      this.segments.push(arr);
		    }
		    if (this.segments.length && forceFlag) {
		      this.adjustSegment(this.segments.shift(), 0);
		    }
		    if (this.isPaused) {
		      this.play();
		    }
		  };
		  AnimationItem.prototype.resetSegments = function (forceFlag) {
		    this.segments.length = 0;
		    this.segments.push([this.animationData.ip, this.animationData.op]);
		    if (forceFlag) {
		      this.checkSegments(0);
		    }
		  };
		  AnimationItem.prototype.checkSegments = function (offset) {
		    if (this.segments.length) {
		      this.adjustSegment(this.segments.shift(), offset);
		      return true;
		    }
		    return false;
		  };
		  AnimationItem.prototype.destroy = function (name) {
		    if (name && this.name !== name || !this.renderer) {
		      return;
		    }
		    this.renderer.destroy();
		    this.imagePreloader.destroy();
		    this.trigger('destroy');
		    this._cbs = null;
		    this.onEnterFrame = null;
		    this.onLoopComplete = null;
		    this.onComplete = null;
		    this.onSegmentStart = null;
		    this.onDestroy = null;
		    this.renderer = null;
		    this.expressionsPlugin = null;
		    this.imagePreloader = null;
		    this.projectInterface = null;
		  };
		  AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
		    this.currentRawFrame = value;
		    this.gotoFrame();
		  };
		  AnimationItem.prototype.setSpeed = function (val) {
		    this.playSpeed = val;
		    this.updaFrameModifier();
		  };
		  AnimationItem.prototype.setDirection = function (val) {
		    this.playDirection = val < 0 ? -1 : 1;
		    this.updaFrameModifier();
		  };
		  AnimationItem.prototype.setLoop = function (isLooping) {
		    this.loop = isLooping;
		  };
		  AnimationItem.prototype.setVolume = function (val, name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    this.audioController.setVolume(val);
		  };
		  AnimationItem.prototype.getVolume = function () {
		    return this.audioController.getVolume();
		  };
		  AnimationItem.prototype.mute = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    this.audioController.mute();
		  };
		  AnimationItem.prototype.unmute = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }
		    this.audioController.unmute();
		  };
		  AnimationItem.prototype.updaFrameModifier = function () {
		    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
		    this.audioController.setRate(this.playSpeed * this.playDirection);
		  };
		  AnimationItem.prototype.getPath = function () {
		    return this.path;
		  };
		  AnimationItem.prototype.getAssetsPath = function (assetData) {
		    var path = '';
		    if (assetData.e) {
		      path = assetData.p;
		    } else if (this.assetsPath) {
		      var imagePath = assetData.p;
		      if (imagePath.indexOf('images/') !== -1) {
		        imagePath = imagePath.split('/')[1];
		      }
		      path = this.assetsPath + imagePath;
		    } else {
		      path = this.path;
		      path += assetData.u ? assetData.u : '';
		      path += assetData.p;
		    }
		    return path;
		  };
		  AnimationItem.prototype.getAssetData = function (id) {
		    var i = 0;
		    var len = this.assets.length;
		    while (i < len) {
		      if (id === this.assets[i].id) {
		        return this.assets[i];
		      }
		      i += 1;
		    }
		    return null;
		  };
		  AnimationItem.prototype.hide = function () {
		    this.renderer.hide();
		  };
		  AnimationItem.prototype.show = function () {
		    this.renderer.show();
		  };
		  AnimationItem.prototype.getDuration = function (isFrame) {
		    return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
		  };
		  AnimationItem.prototype.updateDocumentData = function (path, documentData, index) {
		    try {
		      var element = this.renderer.getElementByPath(path);
		      element.updateDocumentData(documentData, index);
		    } catch (error) {
		      // TODO: decide how to handle catch case
		    }
		  };
		  AnimationItem.prototype.trigger = function (name) {
		    if (this._cbs && this._cbs[name]) {
		      switch (name) {
		        case 'enterFrame':
		          this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
		          break;
		        case 'drawnFrame':
		          this.drawnFrameEvent.currentTime = this.currentFrame;
		          this.drawnFrameEvent.totalTime = this.totalFrames;
		          this.drawnFrameEvent.direction = this.frameModifier;
		          this.triggerEvent(name, this.drawnFrameEvent);
		          break;
		        case 'loopComplete':
		          this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
		          break;
		        case 'complete':
		          this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
		          break;
		        case 'segmentStart':
		          this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
		          break;
		        case 'destroy':
		          this.triggerEvent(name, new BMDestroyEvent(name, this));
		          break;
		        default:
		          this.triggerEvent(name);
		      }
		    }
		    if (name === 'enterFrame' && this.onEnterFrame) {
		      this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult));
		    }
		    if (name === 'loopComplete' && this.onLoopComplete) {
		      this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
		    }
		    if (name === 'complete' && this.onComplete) {
		      this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult));
		    }
		    if (name === 'segmentStart' && this.onSegmentStart) {
		      this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
		    }
		    if (name === 'destroy' && this.onDestroy) {
		      this.onDestroy.call(this, new BMDestroyEvent(name, this));
		    }
		  };
		  AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
		    var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
		    this.triggerEvent('error', error);
		    if (this.onError) {
		      this.onError.call(this, error);
		    }
		  };
		  AnimationItem.prototype.triggerConfigError = function (nativeError) {
		    var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
		    this.triggerEvent('error', error);
		    if (this.onError) {
		      this.onError.call(this, error);
		    }
		  };

		  var animationManager = function () {
		    var moduleOb = {};
		    var registeredAnimations = [];
		    var initTime = 0;
		    var len = 0;
		    var playingAnimationsNum = 0;
		    var _stopped = true;
		    var _isFrozen = false;
		    function removeElement(ev) {
		      var i = 0;
		      var animItem = ev.target;
		      while (i < len) {
		        if (registeredAnimations[i].animation === animItem) {
		          registeredAnimations.splice(i, 1);
		          i -= 1;
		          len -= 1;
		          if (!animItem.isPaused) {
		            subtractPlayingCount();
		          }
		        }
		        i += 1;
		      }
		    }
		    function registerAnimation(element, animationData) {
		      if (!element) {
		        return null;
		      }
		      var i = 0;
		      while (i < len) {
		        if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
		          return registeredAnimations[i].animation;
		        }
		        i += 1;
		      }
		      var animItem = new AnimationItem();
		      setupAnimation(animItem, element);
		      animItem.setData(element, animationData);
		      return animItem;
		    }
		    function getRegisteredAnimations() {
		      var i;
		      var lenAnims = registeredAnimations.length;
		      var animations = [];
		      for (i = 0; i < lenAnims; i += 1) {
		        animations.push(registeredAnimations[i].animation);
		      }
		      return animations;
		    }
		    function addPlayingCount() {
		      playingAnimationsNum += 1;
		      activate();
		    }
		    function subtractPlayingCount() {
		      playingAnimationsNum -= 1;
		    }
		    function setupAnimation(animItem, element) {
		      animItem.addEventListener('destroy', removeElement);
		      animItem.addEventListener('_active', addPlayingCount);
		      animItem.addEventListener('_idle', subtractPlayingCount);
		      registeredAnimations.push({
		        elem: element,
		        animation: animItem
		      });
		      len += 1;
		    }
		    function loadAnimation(params) {
		      var animItem = new AnimationItem();
		      setupAnimation(animItem, null);
		      animItem.setParams(params);
		      return animItem;
		    }
		    function setSpeed(val, animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.setSpeed(val, animation);
		      }
		    }
		    function setDirection(val, animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.setDirection(val, animation);
		      }
		    }
		    function play(animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.play(animation);
		      }
		    }
		    function resume(nowTime) {
		      var elapsedTime = nowTime - initTime;
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.advanceTime(elapsedTime);
		      }
		      initTime = nowTime;
		      if (playingAnimationsNum && !_isFrozen) {
		        window.requestAnimationFrame(resume);
		      } else {
		        _stopped = true;
		      }
		    }
		    function first(nowTime) {
		      initTime = nowTime;
		      window.requestAnimationFrame(resume);
		    }
		    function pause(animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.pause(animation);
		      }
		    }
		    function goToAndStop(value, isFrame, animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.goToAndStop(value, isFrame, animation);
		      }
		    }
		    function stop(animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.stop(animation);
		      }
		    }
		    function togglePause(animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.togglePause(animation);
		      }
		    }
		    function destroy(animation) {
		      var i;
		      for (i = len - 1; i >= 0; i -= 1) {
		        registeredAnimations[i].animation.destroy(animation);
		      }
		    }
		    function searchAnimations(animationData, standalone, renderer) {
		      var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin')));
		      var i;
		      var lenAnims = animElements.length;
		      for (i = 0; i < lenAnims; i += 1) {
		        if (renderer) {
		          animElements[i].setAttribute('data-bm-type', renderer);
		        }
		        registerAnimation(animElements[i], animationData);
		      }
		      if (standalone && lenAnims === 0) {
		        if (!renderer) {
		          renderer = 'svg';
		        }
		        var body = document.getElementsByTagName('body')[0];
		        body.innerText = '';
		        var div = createTag('div');
		        div.style.width = '100%';
		        div.style.height = '100%';
		        div.setAttribute('data-bm-type', renderer);
		        body.appendChild(div);
		        registerAnimation(div, animationData);
		      }
		    }
		    function resize() {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.resize();
		      }
		    }
		    function activate() {
		      if (!_isFrozen && playingAnimationsNum) {
		        if (_stopped) {
		          window.requestAnimationFrame(first);
		          _stopped = false;
		        }
		      }
		    }
		    function freeze() {
		      _isFrozen = true;
		    }
		    function unfreeze() {
		      _isFrozen = false;
		      activate();
		    }
		    function setVolume(val, animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.setVolume(val, animation);
		      }
		    }
		    function mute(animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.mute(animation);
		      }
		    }
		    function unmute(animation) {
		      var i;
		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.unmute(animation);
		      }
		    }
		    moduleOb.registerAnimation = registerAnimation;
		    moduleOb.loadAnimation = loadAnimation;
		    moduleOb.setSpeed = setSpeed;
		    moduleOb.setDirection = setDirection;
		    moduleOb.play = play;
		    moduleOb.pause = pause;
		    moduleOb.stop = stop;
		    moduleOb.togglePause = togglePause;
		    moduleOb.searchAnimations = searchAnimations;
		    moduleOb.resize = resize;
		    // moduleOb.start = start;
		    moduleOb.goToAndStop = goToAndStop;
		    moduleOb.destroy = destroy;
		    moduleOb.freeze = freeze;
		    moduleOb.unfreeze = unfreeze;
		    moduleOb.setVolume = setVolume;
		    moduleOb.mute = mute;
		    moduleOb.unmute = unmute;
		    moduleOb.getRegisteredAnimations = getRegisteredAnimations;
		    return moduleOb;
		  }();

		  /* eslint-disable */
		  var BezierFactory = function () {
		    /**
		       * BezierEasing - use bezier curve for transition easing function
		       * by Gaëtan Renaudeau 2014 - 2015 – MIT License
		       *
		       * Credits: is based on Firefox's nsSMILKeySpline.cpp
		       * Usage:
		       * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
		       * spline.get(x) => returns the easing value | x must be in [0, 1] range
		       *
		       */

		    var ob = {};
		    ob.getBezierEasing = getBezierEasing;
		    var beziers = {};
		    function getBezierEasing(a, b, c, d, nm) {
		      var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');
		      if (beziers[str]) {
		        return beziers[str];
		      }
		      var bezEasing = new BezierEasing([a, b, c, d]);
		      beziers[str] = bezEasing;
		      return bezEasing;
		    }

		    // These values are established by empiricism with tests (tradeoff: performance VS precision)
		    var NEWTON_ITERATIONS = 4;
		    var NEWTON_MIN_SLOPE = 0.001;
		    var SUBDIVISION_PRECISION = 0.0000001;
		    var SUBDIVISION_MAX_ITERATIONS = 10;
		    var kSplineTableSize = 11;
		    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
		    var float32ArraySupported = typeof Float32Array === 'function';
		    function A(aA1, aA2) {
		      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
		    }
		    function B(aA1, aA2) {
		      return 3.0 * aA2 - 6.0 * aA1;
		    }
		    function C(aA1) {
		      return 3.0 * aA1;
		    }

		    // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
		    function calcBezier(aT, aA1, aA2) {
		      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
		    }

		    // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
		    function getSlope(aT, aA1, aA2) {
		      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
		    }
		    function binarySubdivide(aX, aA, aB, mX1, mX2) {
		      var currentX,
		        currentT,
		        i = 0;
		      do {
		        currentT = aA + (aB - aA) / 2.0;
		        currentX = calcBezier(currentT, mX1, mX2) - aX;
		        if (currentX > 0.0) {
		          aB = currentT;
		        } else {
		          aA = currentT;
		        }
		      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
		      return currentT;
		    }
		    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
		      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
		        var currentSlope = getSlope(aGuessT, mX1, mX2);
		        if (currentSlope === 0.0) return aGuessT;
		        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		        aGuessT -= currentX / currentSlope;
		      }
		      return aGuessT;
		    }

		    /**
		       * points is an array of [ mX1, mY1, mX2, mY2 ]
		       */
		    function BezierEasing(points) {
		      this._p = points;
		      this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
		      this._precomputed = false;
		      this.get = this.get.bind(this);
		    }
		    BezierEasing.prototype = {
		      get: function get(x) {
		        var mX1 = this._p[0],
		          mY1 = this._p[1],
		          mX2 = this._p[2],
		          mY2 = this._p[3];
		        if (!this._precomputed) this._precompute();
		        if (mX1 === mY1 && mX2 === mY2) return x; // linear
		        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
		        if (x === 0) return 0;
		        if (x === 1) return 1;
		        return calcBezier(this._getTForX(x), mY1, mY2);
		      },
		      // Private part

		      _precompute: function _precompute() {
		        var mX1 = this._p[0],
		          mY1 = this._p[1],
		          mX2 = this._p[2],
		          mY2 = this._p[3];
		        this._precomputed = true;
		        if (mX1 !== mY1 || mX2 !== mY2) {
		          this._calcSampleValues();
		        }
		      },
		      _calcSampleValues: function _calcSampleValues() {
		        var mX1 = this._p[0],
		          mX2 = this._p[2];
		        for (var i = 0; i < kSplineTableSize; ++i) {
		          this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
		        }
		      },
		      /**
		           * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
		           */
		      _getTForX: function _getTForX(aX) {
		        var mX1 = this._p[0],
		          mX2 = this._p[2],
		          mSampleValues = this._mSampleValues;
		        var intervalStart = 0.0;
		        var currentSample = 1;
		        var lastSample = kSplineTableSize - 1;
		        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
		          intervalStart += kSampleStepSize;
		        }
		        --currentSample;

		        // Interpolate to provide an initial guess for t
		        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
		        var guessForT = intervalStart + dist * kSampleStepSize;
		        var initialSlope = getSlope(guessForT, mX1, mX2);
		        if (initialSlope >= NEWTON_MIN_SLOPE) {
		          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
		        }
		        if (initialSlope === 0.0) {
		          return guessForT;
		        }
		        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
		      }
		    };
		    return ob;
		  }();

		  var pooling = function () {
		    function _double(arr) {
		      return arr.concat(createSizedArray(arr.length));
		    }
		    return {
		      "double": _double
		    };
		  }();

		  var poolFactory = function () {
		    return function (initialLength, _create, _release) {
		      var _length = 0;
		      var _maxLength = initialLength;
		      var pool = createSizedArray(_maxLength);
		      var ob = {
		        newElement: newElement,
		        release: release
		      };
		      function newElement() {
		        var element;
		        if (_length) {
		          _length -= 1;
		          element = pool[_length];
		        } else {
		          element = _create();
		        }
		        return element;
		      }
		      function release(element) {
		        if (_length === _maxLength) {
		          pool = pooling["double"](pool);
		          _maxLength *= 2;
		        }
		        if (_release) {
		          _release(element);
		        }
		        pool[_length] = element;
		        _length += 1;
		      }
		      return ob;
		    };
		  }();

		  var bezierLengthPool = function () {
		    function create() {
		      return {
		        addedLength: 0,
		        percents: createTypedArray('float32', getDefaultCurveSegments()),
		        lengths: createTypedArray('float32', getDefaultCurveSegments())
		      };
		    }
		    return poolFactory(8, create);
		  }();

		  var segmentsLengthPool = function () {
		    function create() {
		      return {
		        lengths: [],
		        totalLength: 0
		      };
		    }
		    function release(element) {
		      var i;
		      var len = element.lengths.length;
		      for (i = 0; i < len; i += 1) {
		        bezierLengthPool.release(element.lengths[i]);
		      }
		      element.lengths.length = 0;
		    }
		    return poolFactory(8, create, release);
		  }();

		  function bezFunction() {
		    var math = Math;
		    function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
		      var det1 = x1 * y2 + y1 * x3 + x2 * y3 - x3 * y2 - y3 * x1 - x2 * y1;
		      return det1 > -1e-3 && det1 < 0.001;
		    }
		    function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
		      if (z1 === 0 && z2 === 0 && z3 === 0) {
		        return pointOnLine2D(x1, y1, x2, y2, x3, y3);
		      }
		      var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
		      var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
		      var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
		      var diffDist;
		      if (dist1 > dist2) {
		        if (dist1 > dist3) {
		          diffDist = dist1 - dist2 - dist3;
		        } else {
		          diffDist = dist3 - dist2 - dist1;
		        }
		      } else if (dist3 > dist2) {
		        diffDist = dist3 - dist2 - dist1;
		      } else {
		        diffDist = dist2 - dist1 - dist3;
		      }
		      return diffDist > -1e-4 && diffDist < 0.0001;
		    }
		    var getBezierLength = function () {
		      return function (pt1, pt2, pt3, pt4) {
		        var curveSegments = getDefaultCurveSegments();
		        var k;
		        var i;
		        var len;
		        var ptCoord;
		        var perc;
		        var addedLength = 0;
		        var ptDistance;
		        var point = [];
		        var lastPoint = [];
		        var lengthData = bezierLengthPool.newElement();
		        len = pt3.length;
		        for (k = 0; k < curveSegments; k += 1) {
		          perc = k / (curveSegments - 1);
		          ptDistance = 0;
		          for (i = 0; i < len; i += 1) {
		            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
		            point[i] = ptCoord;
		            if (lastPoint[i] !== null) {
		              ptDistance += bmPow(point[i] - lastPoint[i], 2);
		            }
		            lastPoint[i] = point[i];
		          }
		          if (ptDistance) {
		            ptDistance = bmSqrt(ptDistance);
		            addedLength += ptDistance;
		          }
		          lengthData.percents[k] = perc;
		          lengthData.lengths[k] = addedLength;
		        }
		        lengthData.addedLength = addedLength;
		        return lengthData;
		      };
		    }();
		    function getSegmentsLength(shapeData) {
		      var segmentsLength = segmentsLengthPool.newElement();
		      var closed = shapeData.c;
		      var pathV = shapeData.v;
		      var pathO = shapeData.o;
		      var pathI = shapeData.i;
		      var i;
		      var len = shapeData._length;
		      var lengths = segmentsLength.lengths;
		      var totalLength = 0;
		      for (i = 0; i < len - 1; i += 1) {
		        lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
		        totalLength += lengths[i].addedLength;
		      }
		      if (closed && len) {
		        lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
		        totalLength += lengths[i].addedLength;
		      }
		      segmentsLength.totalLength = totalLength;
		      return segmentsLength;
		    }
		    function BezierData(length) {
		      this.segmentLength = 0;
		      this.points = new Array(length);
		    }
		    function PointData(partial, point) {
		      this.partialLength = partial;
		      this.point = point;
		    }
		    var buildBezierData = function () {
		      var storedData = {};
		      return function (pt1, pt2, pt3, pt4) {
		        var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');
		        if (!storedData[bezierName]) {
		          var curveSegments = getDefaultCurveSegments();
		          var k;
		          var i;
		          var len;
		          var ptCoord;
		          var perc;
		          var addedLength = 0;
		          var ptDistance;
		          var point;
		          var lastPoint = null;
		          if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
		            curveSegments = 2;
		          }
		          var bezierData = new BezierData(curveSegments);
		          len = pt3.length;
		          for (k = 0; k < curveSegments; k += 1) {
		            point = createSizedArray(len);
		            perc = k / (curveSegments - 1);
		            ptDistance = 0;
		            for (i = 0; i < len; i += 1) {
		              ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
		              point[i] = ptCoord;
		              if (lastPoint !== null) {
		                ptDistance += bmPow(point[i] - lastPoint[i], 2);
		              }
		            }
		            ptDistance = bmSqrt(ptDistance);
		            addedLength += ptDistance;
		            bezierData.points[k] = new PointData(ptDistance, point);
		            lastPoint = point;
		          }
		          bezierData.segmentLength = addedLength;
		          storedData[bezierName] = bezierData;
		        }
		        return storedData[bezierName];
		      };
		    }();
		    function getDistancePerc(perc, bezierData) {
		      var percents = bezierData.percents;
		      var lengths = bezierData.lengths;
		      var len = percents.length;
		      var initPos = bmFloor((len - 1) * perc);
		      var lengthPos = perc * bezierData.addedLength;
		      var lPerc = 0;
		      if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
		        return percents[initPos];
		      }
		      var dir = lengths[initPos] > lengthPos ? -1 : 1;
		      var flag = true;
		      while (flag) {
		        if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
		          lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
		          flag = false;
		        } else {
		          initPos += dir;
		        }
		        if (initPos < 0 || initPos >= len - 1) {
		          // FIX for TypedArrays that don't store floating point values with enough accuracy
		          if (initPos === len - 1) {
		            return percents[initPos];
		          }
		          flag = false;
		        }
		      }
		      return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
		    }
		    function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
		      var t1 = getDistancePerc(percent, bezierData);
		      var u1 = 1 - t1;
		      var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000;
		      var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000;
		      return [ptX, ptY];
		    }
		    var bezierSegmentPoints = createTypedArray('float32', 8);
		    function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
		      if (startPerc < 0) {
		        startPerc = 0;
		      } else if (startPerc > 1) {
		        startPerc = 1;
		      }
		      var t0 = getDistancePerc(startPerc, bezierData);
		      endPerc = endPerc > 1 ? 1 : endPerc;
		      var t1 = getDistancePerc(endPerc, bezierData);
		      var i;
		      var len = pt1.length;
		      var u0 = 1 - t0;
		      var u1 = 1 - t1;
		      var u0u0u0 = u0 * u0 * u0;
		      var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase
		      var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase
		      var t0t0t0 = t0 * t0 * t0;
		      //
		      var u0u0u1 = u0 * u0 * u1;
		      var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase
		      var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase
		      var t0t0t1 = t0 * t0 * t1;
		      //
		      var u0u1u1 = u0 * u1 * u1;
		      var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase
		      var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase
		      var t0t1t1 = t0 * t1 * t1;
		      //
		      var u1u1u1 = u1 * u1 * u1;
		      var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase
		      var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase
		      var t1t1t1 = t1 * t1 * t1;
		      for (i = 0; i < len; i += 1) {
		        bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
		        bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
		        bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
		        bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
		      }
		      return bezierSegmentPoints;
		    }
		    return {
		      getSegmentsLength: getSegmentsLength,
		      getNewSegment: getNewSegment,
		      getPointInSegment: getPointInSegment,
		      buildBezierData: buildBezierData,
		      pointOnLine2D: pointOnLine2D,
		      pointOnLine3D: pointOnLine3D
		    };
		  }
		  var bez = bezFunction();

		  var initFrame = initialDefaultFrame;
		  var mathAbs = Math.abs;
		  function interpolateValue(frameNum, caching) {
		    var offsetTime = this.offsetTime;
		    var newValue;
		    if (this.propType === 'multidimensional') {
		      newValue = createTypedArray('float32', this.pv.length);
		    }
		    var iterationIndex = caching.lastIndex;
		    var i = iterationIndex;
		    var len = this.keyframes.length - 1;
		    var flag = true;
		    var keyData;
		    var nextKeyData;
		    var keyframeMetadata;
		    while (flag) {
		      keyData = this.keyframes[i];
		      nextKeyData = this.keyframes[i + 1];
		      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
		        if (keyData.h) {
		          keyData = nextKeyData;
		        }
		        iterationIndex = 0;
		        break;
		      }
		      if (nextKeyData.t - offsetTime > frameNum) {
		        iterationIndex = i;
		        break;
		      }
		      if (i < len - 1) {
		        i += 1;
		      } else {
		        iterationIndex = 0;
		        flag = false;
		      }
		    }
		    keyframeMetadata = this.keyframesMetadata[i] || {};
		    var k;
		    var kLen;
		    var perc;
		    var jLen;
		    var j;
		    var fnc;
		    var nextKeyTime = nextKeyData.t - offsetTime;
		    var keyTime = keyData.t - offsetTime;
		    var endValue;
		    if (keyData.to) {
		      if (!keyframeMetadata.bezierData) {
		        keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
		      }
		      var bezierData = keyframeMetadata.bezierData;
		      if (frameNum >= nextKeyTime || frameNum < keyTime) {
		        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
		        kLen = bezierData.points[ind].point.length;
		        for (k = 0; k < kLen; k += 1) {
		          newValue[k] = bezierData.points[ind].point[k];
		        }
		        // caching._lastKeyframeIndex = -1;
		      } else {
		        if (keyframeMetadata.__fnct) {
		          fnc = keyframeMetadata.__fnct;
		        } else {
		          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
		          keyframeMetadata.__fnct = fnc;
		        }
		        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
		        var distanceInLine = bezierData.segmentLength * perc;
		        var segmentPerc;
		        var addedLength = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastAddedLength : 0;
		        j = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastPoint : 0;
		        flag = true;
		        jLen = bezierData.points.length;
		        while (flag) {
		          addedLength += bezierData.points[j].partialLength;
		          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
		            kLen = bezierData.points[j].point.length;
		            for (k = 0; k < kLen; k += 1) {
		              newValue[k] = bezierData.points[j].point[k];
		            }
		            break;
		          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
		            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
		            kLen = bezierData.points[j].point.length;
		            for (k = 0; k < kLen; k += 1) {
		              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
		            }
		            break;
		          }
		          if (j < jLen - 1) {
		            j += 1;
		          } else {
		            flag = false;
		          }
		        }
		        caching._lastPoint = j;
		        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
		        caching._lastKeyframeIndex = i;
		      }
		    } else {
		      var outX;
		      var outY;
		      var inX;
		      var inY;
		      var keyValue;
		      len = keyData.s.length;
		      endValue = nextKeyData.s || keyData.e;
		      if (this.sh && keyData.h !== 1) {
		        if (frameNum >= nextKeyTime) {
		          newValue[0] = endValue[0];
		          newValue[1] = endValue[1];
		          newValue[2] = endValue[2];
		        } else if (frameNum <= keyTime) {
		          newValue[0] = keyData.s[0];
		          newValue[1] = keyData.s[1];
		          newValue[2] = keyData.s[2];
		        } else {
		          var quatStart = createQuaternion(keyData.s);
		          var quatEnd = createQuaternion(endValue);
		          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
		          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
		        }
		      } else {
		        for (i = 0; i < len; i += 1) {
		          if (keyData.h !== 1) {
		            if (frameNum >= nextKeyTime) {
		              perc = 1;
		            } else if (frameNum < keyTime) {
		              perc = 0;
		            } else {
		              if (keyData.o.x.constructor === Array) {
		                if (!keyframeMetadata.__fnct) {
		                  keyframeMetadata.__fnct = [];
		                }
		                if (!keyframeMetadata.__fnct[i]) {
		                  outX = keyData.o.x[i] === undefined ? keyData.o.x[0] : keyData.o.x[i];
		                  outY = keyData.o.y[i] === undefined ? keyData.o.y[0] : keyData.o.y[i];
		                  inX = keyData.i.x[i] === undefined ? keyData.i.x[0] : keyData.i.x[i];
		                  inY = keyData.i.y[i] === undefined ? keyData.i.y[0] : keyData.i.y[i];
		                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
		                  keyframeMetadata.__fnct[i] = fnc;
		                } else {
		                  fnc = keyframeMetadata.__fnct[i];
		                }
		              } else if (!keyframeMetadata.__fnct) {
		                outX = keyData.o.x;
		                outY = keyData.o.y;
		                inX = keyData.i.x;
		                inY = keyData.i.y;
		                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
		                keyData.keyframeMetadata = fnc;
		              } else {
		                fnc = keyframeMetadata.__fnct;
		              }
		              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
		            }
		          }
		          endValue = nextKeyData.s || keyData.e;
		          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;
		          if (this.propType === 'multidimensional') {
		            newValue[i] = keyValue;
		          } else {
		            newValue = keyValue;
		          }
		        }
		      }
		    }
		    caching.lastIndex = iterationIndex;
		    return newValue;
		  }

		  // based on @Toji's https://github.com/toji/gl-matrix/
		  function slerp(a, b, t) {
		    var out = [];
		    var ax = a[0];
		    var ay = a[1];
		    var az = a[2];
		    var aw = a[3];
		    var bx = b[0];
		    var by = b[1];
		    var bz = b[2];
		    var bw = b[3];
		    var omega;
		    var cosom;
		    var sinom;
		    var scale0;
		    var scale1;
		    cosom = ax * bx + ay * by + az * bz + aw * bw;
		    if (cosom < 0.0) {
		      cosom = -cosom;
		      bx = -bx;
		      by = -by;
		      bz = -bz;
		      bw = -bw;
		    }
		    if (1.0 - cosom > 0.000001) {
		      omega = Math.acos(cosom);
		      sinom = Math.sin(omega);
		      scale0 = Math.sin((1.0 - t) * omega) / sinom;
		      scale1 = Math.sin(t * omega) / sinom;
		    } else {
		      scale0 = 1.0 - t;
		      scale1 = t;
		    }
		    out[0] = scale0 * ax + scale1 * bx;
		    out[1] = scale0 * ay + scale1 * by;
		    out[2] = scale0 * az + scale1 * bz;
		    out[3] = scale0 * aw + scale1 * bw;
		    return out;
		  }
		  function quaternionToEuler(out, quat) {
		    var qx = quat[0];
		    var qy = quat[1];
		    var qz = quat[2];
		    var qw = quat[3];
		    var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
		    var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
		    var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
		    out[0] = heading / degToRads;
		    out[1] = attitude / degToRads;
		    out[2] = bank / degToRads;
		  }
		  function createQuaternion(values) {
		    var heading = values[0] * degToRads;
		    var attitude = values[1] * degToRads;
		    var bank = values[2] * degToRads;
		    var c1 = Math.cos(heading / 2);
		    var c2 = Math.cos(attitude / 2);
		    var c3 = Math.cos(bank / 2);
		    var s1 = Math.sin(heading / 2);
		    var s2 = Math.sin(attitude / 2);
		    var s3 = Math.sin(bank / 2);
		    var w = c1 * c2 * c3 - s1 * s2 * s3;
		    var x = s1 * s2 * c3 + c1 * c2 * s3;
		    var y = s1 * c2 * c3 + c1 * s2 * s3;
		    var z = c1 * s2 * c3 - s1 * c2 * s3;
		    return [x, y, z, w];
		  }
		  function getValueAtCurrentTime() {
		    var frameNum = this.comp.renderedFrame - this.offsetTime;
		    var initTime = this.keyframes[0].t - this.offsetTime;
		    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
		    if (!(frameNum === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime && frameNum >= endTime || this._caching.lastFrame < initTime && frameNum < initTime))) {
		      if (this._caching.lastFrame >= frameNum) {
		        this._caching._lastKeyframeIndex = -1;
		        this._caching.lastIndex = 0;
		      }
		      var renderResult = this.interpolateValue(frameNum, this._caching);
		      this.pv = renderResult;
		    }
		    this._caching.lastFrame = frameNum;
		    return this.pv;
		  }
		  function setVValue(val) {
		    var multipliedValue;
		    if (this.propType === 'unidimensional') {
		      multipliedValue = val * this.mult;
		      if (mathAbs(this.v - multipliedValue) > 0.00001) {
		        this.v = multipliedValue;
		        this._mdf = true;
		      }
		    } else {
		      var i = 0;
		      var len = this.v.length;
		      while (i < len) {
		        multipliedValue = val[i] * this.mult;
		        if (mathAbs(this.v[i] - multipliedValue) > 0.00001) {
		          this.v[i] = multipliedValue;
		          this._mdf = true;
		        }
		        i += 1;
		      }
		    }
		  }
		  function processEffectsSequence() {
		    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
		      return;
		    }
		    if (this.lock) {
		      this.setVValue(this.pv);
		      return;
		    }
		    this.lock = true;
		    this._mdf = this._isFirstFrame;
		    var i;
		    var len = this.effectsSequence.length;
		    var finalValue = this.kf ? this.pv : this.data.k;
		    for (i = 0; i < len; i += 1) {
		      finalValue = this.effectsSequence[i](finalValue);
		    }
		    this.setVValue(finalValue);
		    this._isFirstFrame = false;
		    this.lock = false;
		    this.frameId = this.elem.globalData.frameId;
		  }
		  function addEffect(effectFunction) {
		    this.effectsSequence.push(effectFunction);
		    this.container.addDynamicProperty(this);
		  }
		  function ValueProperty(elem, data, mult, container) {
		    this.propType = 'unidimensional';
		    this.mult = mult || 1;
		    this.data = data;
		    this.v = mult ? data.k * mult : data.k;
		    this.pv = data.k;
		    this._mdf = false;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.k = false;
		    this.kf = false;
		    this.vel = 0;
		    this.effectsSequence = [];
		    this._isFirstFrame = true;
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.addEffect = addEffect;
		  }
		  function MultiDimensionalProperty(elem, data, mult, container) {
		    this.propType = 'multidimensional';
		    this.mult = mult || 1;
		    this.data = data;
		    this._mdf = false;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.k = false;
		    this.kf = false;
		    this.frameId = -1;
		    var i;
		    var len = data.k.length;
		    this.v = createTypedArray('float32', len);
		    this.pv = createTypedArray('float32', len);
		    this.vel = createTypedArray('float32', len);
		    for (i = 0; i < len; i += 1) {
		      this.v[i] = data.k[i] * this.mult;
		      this.pv[i] = data.k[i];
		    }
		    this._isFirstFrame = true;
		    this.effectsSequence = [];
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.addEffect = addEffect;
		  }
		  function KeyframedValueProperty(elem, data, mult, container) {
		    this.propType = 'unidimensional';
		    this.keyframes = data.k;
		    this.keyframesMetadata = [];
		    this.offsetTime = elem.data.st;
		    this.frameId = -1;
		    this._caching = {
		      lastFrame: initFrame,
		      lastIndex: 0,
		      value: 0,
		      _lastKeyframeIndex: -1
		    };
		    this.k = true;
		    this.kf = true;
		    this.data = data;
		    this.mult = mult || 1;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.v = initFrame;
		    this.pv = initFrame;
		    this._isFirstFrame = true;
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.interpolateValue = interpolateValue;
		    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
		    this.addEffect = addEffect;
		  }
		  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
		    this.propType = 'multidimensional';
		    var i;
		    var len = data.k.length;
		    var s;
		    var e;
		    var to;
		    var ti;
		    for (i = 0; i < len - 1; i += 1) {
		      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
		        s = data.k[i].s;
		        e = data.k[i + 1].s;
		        to = data.k[i].to;
		        ti = data.k[i].ti;
		        if (s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1]) || s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2])) {
		          data.k[i].to = null;
		          data.k[i].ti = null;
		        }
		        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
		          if (s.length === 2 || s[2] === e[2] && to[2] === 0 && ti[2] === 0) {
		            data.k[i].to = null;
		            data.k[i].ti = null;
		          }
		        }
		      }
		    }
		    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
		    this.data = data;
		    this.keyframes = data.k;
		    this.keyframesMetadata = [];
		    this.offsetTime = elem.data.st;
		    this.k = true;
		    this.kf = true;
		    this._isFirstFrame = true;
		    this.mult = mult || 1;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.interpolateValue = interpolateValue;
		    this.frameId = -1;
		    var arrLen = data.k[0].s.length;
		    this.v = createTypedArray('float32', arrLen);
		    this.pv = createTypedArray('float32', arrLen);
		    for (i = 0; i < arrLen; i += 1) {
		      this.v[i] = initFrame;
		      this.pv[i] = initFrame;
		    }
		    this._caching = {
		      lastFrame: initFrame,
		      lastIndex: 0,
		      value: createTypedArray('float32', arrLen)
		    };
		    this.addEffect = addEffect;
		  }
		  var PropertyFactory = function () {
		    function getProp(elem, data, type, mult, container) {
		      if (data.sid) {
		        data = elem.globalData.slotManager.getProp(data);
		      }
		      var p;
		      if (!data.k.length) {
		        p = new ValueProperty(elem, data, mult, container);
		      } else if (typeof data.k[0] === 'number') {
		        p = new MultiDimensionalProperty(elem, data, mult, container);
		      } else {
		        switch (type) {
		          case 0:
		            p = new KeyframedValueProperty(elem, data, mult, container);
		            break;
		          case 1:
		            p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
		            break;
		        }
		      }
		      if (p.effectsSequence.length) {
		        container.addDynamicProperty(p);
		      }
		      return p;
		    }
		    var ob = {
		      getProp: getProp
		    };
		    return ob;
		  }();

		  function DynamicPropertyContainer() {}
		  DynamicPropertyContainer.prototype = {
		    addDynamicProperty: function addDynamicProperty(prop) {
		      if (this.dynamicProperties.indexOf(prop) === -1) {
		        this.dynamicProperties.push(prop);
		        this.container.addDynamicProperty(this);
		        this._isAnimated = true;
		      }
		    },
		    iterateDynamicProperties: function iterateDynamicProperties() {
		      this._mdf = false;
		      var i;
		      var len = this.dynamicProperties.length;
		      for (i = 0; i < len; i += 1) {
		        this.dynamicProperties[i].getValue();
		        if (this.dynamicProperties[i]._mdf) {
		          this._mdf = true;
		        }
		      }
		    },
		    initDynamicPropertyContainer: function initDynamicPropertyContainer(container) {
		      this.container = container;
		      this.dynamicProperties = [];
		      this._mdf = false;
		      this._isAnimated = false;
		    }
		  };

		  var pointPool = function () {
		    function create() {
		      return createTypedArray('float32', 2);
		    }
		    return poolFactory(8, create);
		  }();

		  function ShapePath() {
		    this.c = false;
		    this._length = 0;
		    this._maxLength = 8;
		    this.v = createSizedArray(this._maxLength);
		    this.o = createSizedArray(this._maxLength);
		    this.i = createSizedArray(this._maxLength);
		  }
		  ShapePath.prototype.setPathData = function (closed, len) {
		    this.c = closed;
		    this.setLength(len);
		    var i = 0;
		    while (i < len) {
		      this.v[i] = pointPool.newElement();
		      this.o[i] = pointPool.newElement();
		      this.i[i] = pointPool.newElement();
		      i += 1;
		    }
		  };
		  ShapePath.prototype.setLength = function (len) {
		    while (this._maxLength < len) {
		      this.doubleArrayLength();
		    }
		    this._length = len;
		  };
		  ShapePath.prototype.doubleArrayLength = function () {
		    this.v = this.v.concat(createSizedArray(this._maxLength));
		    this.i = this.i.concat(createSizedArray(this._maxLength));
		    this.o = this.o.concat(createSizedArray(this._maxLength));
		    this._maxLength *= 2;
		  };
		  ShapePath.prototype.setXYAt = function (x, y, type, pos, replace) {
		    var arr;
		    this._length = Math.max(this._length, pos + 1);
		    if (this._length >= this._maxLength) {
		      this.doubleArrayLength();
		    }
		    switch (type) {
		      case 'v':
		        arr = this.v;
		        break;
		      case 'i':
		        arr = this.i;
		        break;
		      case 'o':
		        arr = this.o;
		        break;
		      default:
		        arr = [];
		        break;
		    }
		    if (!arr[pos] || arr[pos] && !replace) {
		      arr[pos] = pointPool.newElement();
		    }
		    arr[pos][0] = x;
		    arr[pos][1] = y;
		  };
		  ShapePath.prototype.setTripleAt = function (vX, vY, oX, oY, iX, iY, pos, replace) {
		    this.setXYAt(vX, vY, 'v', pos, replace);
		    this.setXYAt(oX, oY, 'o', pos, replace);
		    this.setXYAt(iX, iY, 'i', pos, replace);
		  };
		  ShapePath.prototype.reverse = function () {
		    var newPath = new ShapePath();
		    newPath.setPathData(this.c, this._length);
		    var vertices = this.v;
		    var outPoints = this.o;
		    var inPoints = this.i;
		    var init = 0;
		    if (this.c) {
		      newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
		      init = 1;
		    }
		    var cnt = this._length - 1;
		    var len = this._length;
		    var i;
		    for (i = init; i < len; i += 1) {
		      newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
		      cnt -= 1;
		    }
		    return newPath;
		  };
		  ShapePath.prototype.length = function () {
		    return this._length;
		  };

		  var shapePool = function () {
		    function create() {
		      return new ShapePath();
		    }
		    function release(shapePath) {
		      var len = shapePath._length;
		      var i;
		      for (i = 0; i < len; i += 1) {
		        pointPool.release(shapePath.v[i]);
		        pointPool.release(shapePath.i[i]);
		        pointPool.release(shapePath.o[i]);
		        shapePath.v[i] = null;
		        shapePath.i[i] = null;
		        shapePath.o[i] = null;
		      }
		      shapePath._length = 0;
		      shapePath.c = false;
		    }
		    function clone(shape) {
		      var cloned = factory.newElement();
		      var i;
		      var len = shape._length === undefined ? shape.v.length : shape._length;
		      cloned.setLength(len);
		      cloned.c = shape.c;
		      for (i = 0; i < len; i += 1) {
		        cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
		      }
		      return cloned;
		    }
		    var factory = poolFactory(4, create, release);
		    factory.clone = clone;
		    return factory;
		  }();

		  function ShapeCollection() {
		    this._length = 0;
		    this._maxLength = 4;
		    this.shapes = createSizedArray(this._maxLength);
		  }
		  ShapeCollection.prototype.addShape = function (shapeData) {
		    if (this._length === this._maxLength) {
		      this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
		      this._maxLength *= 2;
		    }
		    this.shapes[this._length] = shapeData;
		    this._length += 1;
		  };
		  ShapeCollection.prototype.releaseShapes = function () {
		    var i;
		    for (i = 0; i < this._length; i += 1) {
		      shapePool.release(this.shapes[i]);
		    }
		    this._length = 0;
		  };

		  var shapeCollectionPool = function () {
		    var ob = {
		      newShapeCollection: newShapeCollection,
		      release: release
		    };
		    var _length = 0;
		    var _maxLength = 4;
		    var pool = createSizedArray(_maxLength);
		    function newShapeCollection() {
		      var shapeCollection;
		      if (_length) {
		        _length -= 1;
		        shapeCollection = pool[_length];
		      } else {
		        shapeCollection = new ShapeCollection();
		      }
		      return shapeCollection;
		    }
		    function release(shapeCollection) {
		      var i;
		      var len = shapeCollection._length;
		      for (i = 0; i < len; i += 1) {
		        shapePool.release(shapeCollection.shapes[i]);
		      }
		      shapeCollection._length = 0;
		      if (_length === _maxLength) {
		        pool = pooling["double"](pool);
		        _maxLength *= 2;
		      }
		      pool[_length] = shapeCollection;
		      _length += 1;
		    }
		    return ob;
		  }();

		  var ShapePropertyFactory = function () {
		    var initFrame = -999999;
		    function interpolateShape(frameNum, previousValue, caching) {
		      var iterationIndex = caching.lastIndex;
		      var keyPropS;
		      var keyPropE;
		      var isHold;
		      var j;
		      var k;
		      var jLen;
		      var kLen;
		      var perc;
		      var vertexValue;
		      var kf = this.keyframes;
		      if (frameNum < kf[0].t - this.offsetTime) {
		        keyPropS = kf[0].s[0];
		        isHold = true;
		        iterationIndex = 0;
		      } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
		        keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
		        /* if(kf[kf.length - 1].s){
		                  keyPropS = kf[kf.length - 1].s[0];
		              }else{
		                  keyPropS = kf[kf.length - 2].e[0];
		              } */
		        isHold = true;
		      } else {
		        var i = iterationIndex;
		        var len = kf.length - 1;
		        var flag = true;
		        var keyData;
		        var nextKeyData;
		        var keyframeMetadata;
		        while (flag) {
		          keyData = kf[i];
		          nextKeyData = kf[i + 1];
		          if (nextKeyData.t - this.offsetTime > frameNum) {
		            break;
		          }
		          if (i < len - 1) {
		            i += 1;
		          } else {
		            flag = false;
		          }
		        }
		        keyframeMetadata = this.keyframesMetadata[i] || {};
		        isHold = keyData.h === 1;
		        iterationIndex = i;
		        if (!isHold) {
		          if (frameNum >= nextKeyData.t - this.offsetTime) {
		            perc = 1;
		          } else if (frameNum < keyData.t - this.offsetTime) {
		            perc = 0;
		          } else {
		            var fnc;
		            if (keyframeMetadata.__fnct) {
		              fnc = keyframeMetadata.__fnct;
		            } else {
		              fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
		              keyframeMetadata.__fnct = fnc;
		            }
		            perc = fnc((frameNum - (keyData.t - this.offsetTime)) / (nextKeyData.t - this.offsetTime - (keyData.t - this.offsetTime)));
		          }
		          keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
		        }
		        keyPropS = keyData.s[0];
		      }
		      jLen = previousValue._length;
		      kLen = keyPropS.i[0].length;
		      caching.lastIndex = iterationIndex;
		      for (j = 0; j < jLen; j += 1) {
		        for (k = 0; k < kLen; k += 1) {
		          vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
		          previousValue.i[j][k] = vertexValue;
		          vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
		          previousValue.o[j][k] = vertexValue;
		          vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
		          previousValue.v[j][k] = vertexValue;
		        }
		      }
		    }
		    function interpolateShapeCurrentTime() {
		      var frameNum = this.comp.renderedFrame - this.offsetTime;
		      var initTime = this.keyframes[0].t - this.offsetTime;
		      var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
		      var lastFrame = this._caching.lastFrame;
		      if (!(lastFrame !== initFrame && (lastFrame < initTime && frameNum < initTime || lastFrame > endTime && frameNum > endTime))) {
		        /// /
		        this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
		        this.interpolateShape(frameNum, this.pv, this._caching);
		        /// /
		      }
		      this._caching.lastFrame = frameNum;
		      return this.pv;
		    }
		    function resetShape() {
		      this.paths = this.localShapeCollection;
		    }
		    function shapesEqual(shape1, shape2) {
		      if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
		        return false;
		      }
		      var i;
		      var len = shape1._length;
		      for (i = 0; i < len; i += 1) {
		        if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) {
		          return false;
		        }
		      }
		      return true;
		    }
		    function setVValue(newPath) {
		      if (!shapesEqual(this.v, newPath)) {
		        this.v = shapePool.clone(newPath);
		        this.localShapeCollection.releaseShapes();
		        this.localShapeCollection.addShape(this.v);
		        this._mdf = true;
		        this.paths = this.localShapeCollection;
		      }
		    }
		    function processEffectsSequence() {
		      if (this.elem.globalData.frameId === this.frameId) {
		        return;
		      }
		      if (!this.effectsSequence.length) {
		        this._mdf = false;
		        return;
		      }
		      if (this.lock) {
		        this.setVValue(this.pv);
		        return;
		      }
		      this.lock = true;
		      this._mdf = false;
		      var finalValue;
		      if (this.kf) {
		        finalValue = this.pv;
		      } else if (this.data.ks) {
		        finalValue = this.data.ks.k;
		      } else {
		        finalValue = this.data.pt.k;
		      }
		      var i;
		      var len = this.effectsSequence.length;
		      for (i = 0; i < len; i += 1) {
		        finalValue = this.effectsSequence[i](finalValue);
		      }
		      this.setVValue(finalValue);
		      this.lock = false;
		      this.frameId = this.elem.globalData.frameId;
		    }
		    function ShapeProperty(elem, data, type) {
		      this.propType = 'shape';
		      this.comp = elem.comp;
		      this.container = elem;
		      this.elem = elem;
		      this.data = data;
		      this.k = false;
		      this.kf = false;
		      this._mdf = false;
		      var pathData = type === 3 ? data.pt.k : data.ks.k;
		      this.v = shapePool.clone(pathData);
		      this.pv = shapePool.clone(this.v);
		      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		      this.paths = this.localShapeCollection;
		      this.paths.addShape(this.v);
		      this.reset = resetShape;
		      this.effectsSequence = [];
		    }
		    function addEffect(effectFunction) {
		      this.effectsSequence.push(effectFunction);
		      this.container.addDynamicProperty(this);
		    }
		    ShapeProperty.prototype.interpolateShape = interpolateShape;
		    ShapeProperty.prototype.getValue = processEffectsSequence;
		    ShapeProperty.prototype.setVValue = setVValue;
		    ShapeProperty.prototype.addEffect = addEffect;
		    function KeyframedShapeProperty(elem, data, type) {
		      this.propType = 'shape';
		      this.comp = elem.comp;
		      this.elem = elem;
		      this.container = elem;
		      this.offsetTime = elem.data.st;
		      this.keyframes = type === 3 ? data.pt.k : data.ks.k;
		      this.keyframesMetadata = [];
		      this.k = true;
		      this.kf = true;
		      var len = this.keyframes[0].s[0].i.length;
		      this.v = shapePool.newElement();
		      this.v.setPathData(this.keyframes[0].s[0].c, len);
		      this.pv = shapePool.clone(this.v);
		      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		      this.paths = this.localShapeCollection;
		      this.paths.addShape(this.v);
		      this.lastFrame = initFrame;
		      this.reset = resetShape;
		      this._caching = {
		        lastFrame: initFrame,
		        lastIndex: 0
		      };
		      this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
		    }
		    KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
		    KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
		    KeyframedShapeProperty.prototype.setVValue = setVValue;
		    KeyframedShapeProperty.prototype.addEffect = addEffect;
		    var EllShapeProperty = function () {
		      var cPoint = roundCorner;
		      function EllShapePropertyFactory(elem, data) {
		        this.v = shapePool.newElement();
		        this.v.setPathData(true, 4);
		        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		        this.paths = this.localShapeCollection;
		        this.localShapeCollection.addShape(this.v);
		        this.d = data.d;
		        this.elem = elem;
		        this.comp = elem.comp;
		        this.frameId = -1;
		        this.initDynamicPropertyContainer(elem);
		        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
		        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
		        if (this.dynamicProperties.length) {
		          this.k = true;
		        } else {
		          this.k = false;
		          this.convertEllToPath();
		        }
		      }
		      EllShapePropertyFactory.prototype = {
		        reset: resetShape,
		        getValue: function getValue() {
		          if (this.elem.globalData.frameId === this.frameId) {
		            return;
		          }
		          this.frameId = this.elem.globalData.frameId;
		          this.iterateDynamicProperties();
		          if (this._mdf) {
		            this.convertEllToPath();
		          }
		        },
		        convertEllToPath: function convertEllToPath() {
		          var p0 = this.p.v[0];
		          var p1 = this.p.v[1];
		          var s0 = this.s.v[0] / 2;
		          var s1 = this.s.v[1] / 2;
		          var _cw = this.d !== 3;
		          var _v = this.v;
		          _v.v[0][0] = p0;
		          _v.v[0][1] = p1 - s1;
		          _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
		          _v.v[1][1] = p1;
		          _v.v[2][0] = p0;
		          _v.v[2][1] = p1 + s1;
		          _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
		          _v.v[3][1] = p1;
		          _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
		          _v.i[0][1] = p1 - s1;
		          _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
		          _v.i[1][1] = p1 - s1 * cPoint;
		          _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
		          _v.i[2][1] = p1 + s1;
		          _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
		          _v.i[3][1] = p1 + s1 * cPoint;
		          _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
		          _v.o[0][1] = p1 - s1;
		          _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
		          _v.o[1][1] = p1 + s1 * cPoint;
		          _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
		          _v.o[2][1] = p1 + s1;
		          _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
		          _v.o[3][1] = p1 - s1 * cPoint;
		        }
		      };
		      extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);
		      return EllShapePropertyFactory;
		    }();
		    var StarShapeProperty = function () {
		      function StarShapePropertyFactory(elem, data) {
		        this.v = shapePool.newElement();
		        this.v.setPathData(true, 0);
		        this.elem = elem;
		        this.comp = elem.comp;
		        this.data = data;
		        this.frameId = -1;
		        this.d = data.d;
		        this.initDynamicPropertyContainer(elem);
		        if (data.sy === 1) {
		          this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
		          this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
		          this.convertToPath = this.convertStarToPath;
		        } else {
		          this.convertToPath = this.convertPolygonToPath;
		        }
		        this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
		        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
		        this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
		        this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
		        this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
		        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		        this.localShapeCollection.addShape(this.v);
		        this.paths = this.localShapeCollection;
		        if (this.dynamicProperties.length) {
		          this.k = true;
		        } else {
		          this.k = false;
		          this.convertToPath();
		        }
		      }
		      StarShapePropertyFactory.prototype = {
		        reset: resetShape,
		        getValue: function getValue() {
		          if (this.elem.globalData.frameId === this.frameId) {
		            return;
		          }
		          this.frameId = this.elem.globalData.frameId;
		          this.iterateDynamicProperties();
		          if (this._mdf) {
		            this.convertToPath();
		          }
		        },
		        convertStarToPath: function convertStarToPath() {
		          var numPts = Math.floor(this.pt.v) * 2;
		          var angle = Math.PI * 2 / numPts;
		          /* this.v.v.length = numPts;
		                  this.v.i.length = numPts;
		                  this.v.o.length = numPts; */
		          var longFlag = true;
		          var longRad = this.or.v;
		          var shortRad = this.ir.v;
		          var longRound = this.os.v;
		          var shortRound = this.is.v;
		          var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
		          var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
		          var i;
		          var rad;
		          var roundness;
		          var perimSegment;
		          var currentAng = -Math.PI / 2;
		          currentAng += this.r.v;
		          var dir = this.data.d === 3 ? -1 : 1;
		          this.v._length = 0;
		          for (i = 0; i < numPts; i += 1) {
		            rad = longFlag ? longRad : shortRad;
		            roundness = longFlag ? longRound : shortRound;
		            perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
		            var x = rad * Math.cos(currentAng);
		            var y = rad * Math.sin(currentAng);
		            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
		            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
		            x += +this.p.v[0];
		            y += +this.p.v[1];
		            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);

		            /* this.v.v[i] = [x,y];
		                      this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
		                      this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
		                      this.v._length = numPts; */
		            longFlag = !longFlag;
		            currentAng += angle * dir;
		          }
		        },
		        convertPolygonToPath: function convertPolygonToPath() {
		          var numPts = Math.floor(this.pt.v);
		          var angle = Math.PI * 2 / numPts;
		          var rad = this.or.v;
		          var roundness = this.os.v;
		          var perimSegment = 2 * Math.PI * rad / (numPts * 4);
		          var i;
		          var currentAng = -Math.PI * 0.5;
		          var dir = this.data.d === 3 ? -1 : 1;
		          currentAng += this.r.v;
		          this.v._length = 0;
		          for (i = 0; i < numPts; i += 1) {
		            var x = rad * Math.cos(currentAng);
		            var y = rad * Math.sin(currentAng);
		            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
		            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
		            x += +this.p.v[0];
		            y += +this.p.v[1];
		            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
		            currentAng += angle * dir;
		          }
		          this.paths.length = 0;
		          this.paths[0] = this.v;
		        }
		      };
		      extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);
		      return StarShapePropertyFactory;
		    }();
		    var RectShapeProperty = function () {
		      function RectShapePropertyFactory(elem, data) {
		        this.v = shapePool.newElement();
		        this.v.c = true;
		        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		        this.localShapeCollection.addShape(this.v);
		        this.paths = this.localShapeCollection;
		        this.elem = elem;
		        this.comp = elem.comp;
		        this.frameId = -1;
		        this.d = data.d;
		        this.initDynamicPropertyContainer(elem);
		        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
		        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
		        this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);
		        if (this.dynamicProperties.length) {
		          this.k = true;
		        } else {
		          this.k = false;
		          this.convertRectToPath();
		        }
		      }
		      RectShapePropertyFactory.prototype = {
		        convertRectToPath: function convertRectToPath() {
		          var p0 = this.p.v[0];
		          var p1 = this.p.v[1];
		          var v0 = this.s.v[0] / 2;
		          var v1 = this.s.v[1] / 2;
		          var round = bmMin(v0, v1, this.r.v);
		          var cPoint = round * (1 - roundCorner);
		          this.v._length = 0;
		          if (this.d === 2 || this.d === 1) {
		            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
		            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);
		            if (round !== 0) {
		              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
		              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
		              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
		              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
		            } else {
		              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
		              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
		            }
		          } else {
		            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);
		            if (round !== 0) {
		              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
		              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
		              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
		              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
		              this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
		            } else {
		              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
		              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
		              this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
		            }
		          }
		        },
		        getValue: function getValue() {
		          if (this.elem.globalData.frameId === this.frameId) {
		            return;
		          }
		          this.frameId = this.elem.globalData.frameId;
		          this.iterateDynamicProperties();
		          if (this._mdf) {
		            this.convertRectToPath();
		          }
		        },
		        reset: resetShape
		      };
		      extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);
		      return RectShapePropertyFactory;
		    }();
		    function getShapeProp(elem, data, type) {
		      var prop;
		      if (type === 3 || type === 4) {
		        var dataProp = type === 3 ? data.pt : data.ks;
		        var keys = dataProp.k;
		        if (keys.length) {
		          prop = new KeyframedShapeProperty(elem, data, type);
		        } else {
		          prop = new ShapeProperty(elem, data, type);
		        }
		      } else if (type === 5) {
		        prop = new RectShapeProperty(elem, data);
		      } else if (type === 6) {
		        prop = new EllShapeProperty(elem, data);
		      } else if (type === 7) {
		        prop = new StarShapeProperty(elem, data);
		      }
		      if (prop.k) {
		        elem.addDynamicProperty(prop);
		      }
		      return prop;
		    }
		    function getConstructorFunction() {
		      return ShapeProperty;
		    }
		    function getKeyframedConstructorFunction() {
		      return KeyframedShapeProperty;
		    }
		    var ob = {};
		    ob.getShapeProp = getShapeProp;
		    ob.getConstructorFunction = getConstructorFunction;
		    ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
		    return ob;
		  }();

		  /*!
		   Transformation Matrix v2.0
		   (c) Epistemex 2014-2015
		   www.epistemex.com
		   By Ken Fyrstenberg
		   Contributions by leeoniya.
		   License: MIT, header required.
		   */

		  /**
		   * 2D transformation matrix object initialized with identity matrix.
		   *
		   * The matrix can synchronize a canvas context by supplying the context
		   * as an argument, or later apply current absolute transform to an
		   * existing context.
		   *
		   * All values are handled as floating point values.
		   *
		   * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
		   * @prop {number} a - scale x
		   * @prop {number} b - shear y
		   * @prop {number} c - shear x
		   * @prop {number} d - scale y
		   * @prop {number} e - translate x
		   * @prop {number} f - translate y
		   * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
		   * @constructor
		   */

		  var Matrix = function () {
		    var _cos = Math.cos;
		    var _sin = Math.sin;
		    var _tan = Math.tan;
		    var _rnd = Math.round;
		    function reset() {
		      this.props[0] = 1;
		      this.props[1] = 0;
		      this.props[2] = 0;
		      this.props[3] = 0;
		      this.props[4] = 0;
		      this.props[5] = 1;
		      this.props[6] = 0;
		      this.props[7] = 0;
		      this.props[8] = 0;
		      this.props[9] = 0;
		      this.props[10] = 1;
		      this.props[11] = 0;
		      this.props[12] = 0;
		      this.props[13] = 0;
		      this.props[14] = 0;
		      this.props[15] = 1;
		      return this;
		    }
		    function rotate(angle) {
		      if (angle === 0) {
		        return this;
		      }
		      var mCos = _cos(angle);
		      var mSin = _sin(angle);
		      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		    }
		    function rotateX(angle) {
		      if (angle === 0) {
		        return this;
		      }
		      var mCos = _cos(angle);
		      var mSin = _sin(angle);
		      return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
		    }
		    function rotateY(angle) {
		      if (angle === 0) {
		        return this;
		      }
		      var mCos = _cos(angle);
		      var mSin = _sin(angle);
		      return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
		    }
		    function rotateZ(angle) {
		      if (angle === 0) {
		        return this;
		      }
		      var mCos = _cos(angle);
		      var mSin = _sin(angle);
		      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		    }
		    function shear(sx, sy) {
		      return this._t(1, sy, sx, 1, 0, 0);
		    }
		    function skew(ax, ay) {
		      return this.shear(_tan(ax), _tan(ay));
		    }
		    function skewFromAxis(ax, angle) {
		      var mCos = _cos(angle);
		      var mSin = _sin(angle);
		      return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		      // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
		    }
		    function scale(sx, sy, sz) {
		      if (!sz && sz !== 0) {
		        sz = 1;
		      }
		      if (sx === 1 && sy === 1 && sz === 1) {
		        return this;
		      }
		      return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
		    }
		    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
		      this.props[0] = a;
		      this.props[1] = b;
		      this.props[2] = c;
		      this.props[3] = d;
		      this.props[4] = e;
		      this.props[5] = f;
		      this.props[6] = g;
		      this.props[7] = h;
		      this.props[8] = i;
		      this.props[9] = j;
		      this.props[10] = k;
		      this.props[11] = l;
		      this.props[12] = m;
		      this.props[13] = n;
		      this.props[14] = o;
		      this.props[15] = p;
		      return this;
		    }
		    function translate(tx, ty, tz) {
		      tz = tz || 0;
		      if (tx !== 0 || ty !== 0 || tz !== 0) {
		        return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
		      }
		      return this;
		    }
		    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
		      var _p = this.props;
		      if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
		        // NOTE: commenting this condition because TurboFan deoptimizes code when present
		        // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
		        _p[12] = _p[12] * a2 + _p[15] * m2;
		        _p[13] = _p[13] * f2 + _p[15] * n2;
		        _p[14] = _p[14] * k2 + _p[15] * o2;
		        _p[15] *= p2;
		        // }
		        this._identityCalculated = false;
		        return this;
		      }
		      var a1 = _p[0];
		      var b1 = _p[1];
		      var c1 = _p[2];
		      var d1 = _p[3];
		      var e1 = _p[4];
		      var f1 = _p[5];
		      var g1 = _p[6];
		      var h1 = _p[7];
		      var i1 = _p[8];
		      var j1 = _p[9];
		      var k1 = _p[10];
		      var l1 = _p[11];
		      var m1 = _p[12];
		      var n1 = _p[13];
		      var o1 = _p[14];
		      var p1 = _p[15];

		      /* matrix order (canvas compatible):
		           * ace
		           * bdf
		           * 001
		           */
		      _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
		      _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
		      _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
		      _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
		      _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
		      _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
		      _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
		      _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
		      _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
		      _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
		      _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
		      _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
		      _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
		      _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
		      _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
		      _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
		      this._identityCalculated = false;
		      return this;
		    }
		    function multiply(matrix) {
		      var matrixProps = matrix.props;
		      return this.transform(matrixProps[0], matrixProps[1], matrixProps[2], matrixProps[3], matrixProps[4], matrixProps[5], matrixProps[6], matrixProps[7], matrixProps[8], matrixProps[9], matrixProps[10], matrixProps[11], matrixProps[12], matrixProps[13], matrixProps[14], matrixProps[15]);
		    }
		    function isIdentity() {
		      if (!this._identityCalculated) {
		        this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
		        this._identityCalculated = true;
		      }
		      return this._identity;
		    }
		    function equals(matr) {
		      var i = 0;
		      while (i < 16) {
		        if (matr.props[i] !== this.props[i]) {
		          return false;
		        }
		        i += 1;
		      }
		      return true;
		    }
		    function clone(matr) {
		      var i;
		      for (i = 0; i < 16; i += 1) {
		        matr.props[i] = this.props[i];
		      }
		      return matr;
		    }
		    function cloneFromProps(props) {
		      var i;
		      for (i = 0; i < 16; i += 1) {
		        this.props[i] = props[i];
		      }
		    }
		    function applyToPoint(x, y, z) {
		      return {
		        x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
		        y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
		        z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
		      };
		      /* return {
		           x: x * me.a + y * me.c + me.e,
		           y: x * me.b + y * me.d + me.f
		           }; */
		    }
		    function applyToX(x, y, z) {
		      return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
		    }
		    function applyToY(x, y, z) {
		      return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
		    }
		    function applyToZ(x, y, z) {
		      return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
		    }
		    function getInverseMatrix() {
		      var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
		      var a = this.props[5] / determinant;
		      var b = -this.props[1] / determinant;
		      var c = -this.props[4] / determinant;
		      var d = this.props[0] / determinant;
		      var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
		      var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
		      var inverseMatrix = new Matrix();
		      inverseMatrix.props[0] = a;
		      inverseMatrix.props[1] = b;
		      inverseMatrix.props[4] = c;
		      inverseMatrix.props[5] = d;
		      inverseMatrix.props[12] = e;
		      inverseMatrix.props[13] = f;
		      return inverseMatrix;
		    }
		    function inversePoint(pt) {
		      var inverseMatrix = this.getInverseMatrix();
		      return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
		    }
		    function inversePoints(pts) {
		      var i;
		      var len = pts.length;
		      var retPts = [];
		      for (i = 0; i < len; i += 1) {
		        retPts[i] = inversePoint(pts[i]);
		      }
		      return retPts;
		    }
		    function applyToTriplePoints(pt1, pt2, pt3) {
		      var arr = createTypedArray('float32', 6);
		      if (this.isIdentity()) {
		        arr[0] = pt1[0];
		        arr[1] = pt1[1];
		        arr[2] = pt2[0];
		        arr[3] = pt2[1];
		        arr[4] = pt3[0];
		        arr[5] = pt3[1];
		      } else {
		        var p0 = this.props[0];
		        var p1 = this.props[1];
		        var p4 = this.props[4];
		        var p5 = this.props[5];
		        var p12 = this.props[12];
		        var p13 = this.props[13];
		        arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
		        arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
		        arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
		        arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
		        arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
		        arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
		      }
		      return arr;
		    }
		    function applyToPointArray(x, y, z) {
		      var arr;
		      if (this.isIdentity()) {
		        arr = [x, y, z];
		      } else {
		        arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
		      }
		      return arr;
		    }
		    function applyToPointStringified(x, y) {
		      if (this.isIdentity()) {
		        return x + ',' + y;
		      }
		      var _p = this.props;
		      return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
		    }
		    function toCSS() {
		      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
		      /* if(this.isIdentity()) {
		              return '';
		          } */
		      var i = 0;
		      var props = this.props;
		      var cssValue = 'matrix3d(';
		      var v = 10000;
		      while (i < 16) {
		        cssValue += _rnd(props[i] * v) / v;
		        cssValue += i === 15 ? ')' : ',';
		        i += 1;
		      }
		      return cssValue;
		    }
		    function roundMatrixProperty(val) {
		      var v = 10000;
		      if (val < 0.000001 && val > 0 || val > -1e-6 && val < 0) {
		        return _rnd(val * v) / v;
		      }
		      return val;
		    }
		    function to2dCSS() {
		      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
		      /* if(this.isIdentity()) {
		              return '';
		          } */
		      var props = this.props;
		      var _a = roundMatrixProperty(props[0]);
		      var _b = roundMatrixProperty(props[1]);
		      var _c = roundMatrixProperty(props[4]);
		      var _d = roundMatrixProperty(props[5]);
		      var _e = roundMatrixProperty(props[12]);
		      var _f = roundMatrixProperty(props[13]);
		      return 'matrix(' + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ')';
		    }
		    return function () {
		      this.reset = reset;
		      this.rotate = rotate;
		      this.rotateX = rotateX;
		      this.rotateY = rotateY;
		      this.rotateZ = rotateZ;
		      this.skew = skew;
		      this.skewFromAxis = skewFromAxis;
		      this.shear = shear;
		      this.scale = scale;
		      this.setTransform = setTransform;
		      this.translate = translate;
		      this.transform = transform;
		      this.multiply = multiply;
		      this.applyToPoint = applyToPoint;
		      this.applyToX = applyToX;
		      this.applyToY = applyToY;
		      this.applyToZ = applyToZ;
		      this.applyToPointArray = applyToPointArray;
		      this.applyToTriplePoints = applyToTriplePoints;
		      this.applyToPointStringified = applyToPointStringified;
		      this.toCSS = toCSS;
		      this.to2dCSS = to2dCSS;
		      this.clone = clone;
		      this.cloneFromProps = cloneFromProps;
		      this.equals = equals;
		      this.inversePoints = inversePoints;
		      this.inversePoint = inversePoint;
		      this.getInverseMatrix = getInverseMatrix;
		      this._t = this.transform;
		      this.isIdentity = isIdentity;
		      this._identity = true;
		      this._identityCalculated = false;
		      this.props = createTypedArray('float32', 16);
		      this.reset();
		    };
		  }();

		  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
		  var lottie = {};
		  function setLocation(href) {
		    setLocationHref(href);
		  }
		  function searchAnimations() {
		    {
		      animationManager.searchAnimations();
		    }
		  }
		  function setSubframeRendering(flag) {
		    setSubframeEnabled(flag);
		  }
		  function setPrefix(prefix) {
		    setIdPrefix(prefix);
		  }
		  function loadAnimation(params) {
		    return animationManager.loadAnimation(params);
		  }
		  function setQuality(value) {
		    if (typeof value === 'string') {
		      switch (value) {
		        case 'high':
		          setDefaultCurveSegments(200);
		          break;
		        default:
		        case 'medium':
		          setDefaultCurveSegments(50);
		          break;
		        case 'low':
		          setDefaultCurveSegments(10);
		          break;
		      }
		    } else if (!isNaN(value) && value > 1) {
		      setDefaultCurveSegments(value);
		    }
		  }
		  function inBrowser() {
		    return typeof navigator !== 'undefined';
		  }
		  function installPlugin(type, plugin) {
		    if (type === 'expressions') {
		      setExpressionsPlugin(plugin);
		    }
		  }
		  function getFactory(name) {
		    switch (name) {
		      case 'propertyFactory':
		        return PropertyFactory;
		      case 'shapePropertyFactory':
		        return ShapePropertyFactory;
		      case 'matrix':
		        return Matrix;
		      default:
		        return null;
		    }
		  }
		  lottie.play = animationManager.play;
		  lottie.pause = animationManager.pause;
		  lottie.setLocationHref = setLocation;
		  lottie.togglePause = animationManager.togglePause;
		  lottie.setSpeed = animationManager.setSpeed;
		  lottie.setDirection = animationManager.setDirection;
		  lottie.stop = animationManager.stop;
		  lottie.searchAnimations = searchAnimations;
		  lottie.registerAnimation = animationManager.registerAnimation;
		  lottie.loadAnimation = loadAnimation;
		  lottie.setSubframeRendering = setSubframeRendering;
		  lottie.resize = animationManager.resize;
		  // lottie.start = start;
		  lottie.goToAndStop = animationManager.goToAndStop;
		  lottie.destroy = animationManager.destroy;
		  lottie.setQuality = setQuality;
		  lottie.inBrowser = inBrowser;
		  lottie.installPlugin = installPlugin;
		  lottie.freeze = animationManager.freeze;
		  lottie.unfreeze = animationManager.unfreeze;
		  lottie.setVolume = animationManager.setVolume;
		  lottie.mute = animationManager.mute;
		  lottie.unmute = animationManager.unmute;
		  lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
		  lottie.useWebWorker = setWebWorker;
		  lottie.setIDPrefix = setPrefix;
		  lottie.__getFactory = getFactory;
		  lottie.version = '5.13.0';
		  function checkReady() {
		    if (document.readyState === 'complete') {
		      clearInterval(readyStateCheckInterval);
		      searchAnimations();
		    }
		  }
		  function getQueryVariable(variable) {
		    var vars = queryString.split('&');
		    for (var i = 0; i < vars.length; i += 1) {
		      var pair = vars[i].split('=');
		      if (decodeURIComponent(pair[0]) == variable) {
		        // eslint-disable-line eqeqeq
		        return decodeURIComponent(pair[1]);
		      }
		    }
		    return null;
		  }
		  var queryString = '';
		  {
		    var scripts = document.getElementsByTagName('script');
		    var index = scripts.length - 1;
		    var myScript = scripts[index] || {
		      src: ''
		    };
		    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, '') : ''; // eslint-disable-line no-useless-escape
		    getQueryVariable('renderer');
		  }
		  var readyStateCheckInterval = setInterval(checkReady, 100);

		  // this adds bodymovin to the window object for backwards compatibility
		  try {
		    if (!(('object' === "undefined" ? "undefined" : _typeof(exports$1)) === 'object' && 'object' !== 'undefined') && !(typeof undefined === 'function' && undefined.amd) // eslint-disable-line no-undef
		    ) {
		      window.bodymovin = lottie;
		    }
		  } catch (err) {
		    //
		  }

		  var ShapeModifiers = function () {
		    var ob = {};
		    var modifiers = {};
		    ob.registerModifier = registerModifier;
		    ob.getModifier = getModifier;
		    function registerModifier(nm, factory) {
		      if (!modifiers[nm]) {
		        modifiers[nm] = factory;
		      }
		    }
		    function getModifier(nm, elem, data) {
		      return new modifiers[nm](elem, data);
		    }
		    return ob;
		  }();
		  function ShapeModifier() {}
		  ShapeModifier.prototype.initModifierProperties = function () {};
		  ShapeModifier.prototype.addShapeToModifier = function () {};
		  ShapeModifier.prototype.addShape = function (data) {
		    if (!this.closed) {
		      // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
		      data.sh.container.addDynamicProperty(data.sh);
		      var shapeData = {
		        shape: data.sh,
		        data: data,
		        localShapeCollection: shapeCollectionPool.newShapeCollection()
		      };
		      this.shapes.push(shapeData);
		      this.addShapeToModifier(shapeData);
		      if (this._isAnimated) {
		        data.setAsAnimated();
		      }
		    }
		  };
		  ShapeModifier.prototype.init = function (elem, data) {
		    this.shapes = [];
		    this.elem = elem;
		    this.initDynamicPropertyContainer(elem);
		    this.initModifierProperties(elem, data);
		    this.frameId = initialDefaultFrame;
		    this.closed = false;
		    this.k = false;
		    if (this.dynamicProperties.length) {
		      this.k = true;
		    } else {
		      this.getValue(true);
		    }
		  };
		  ShapeModifier.prototype.processKeys = function () {
		    if (this.elem.globalData.frameId === this.frameId) {
		      return;
		    }
		    this.frameId = this.elem.globalData.frameId;
		    this.iterateDynamicProperties();
		  };
		  extendPrototype([DynamicPropertyContainer], ShapeModifier);

		  function TrimModifier() {}
		  extendPrototype([ShapeModifier], TrimModifier);
		  TrimModifier.prototype.initModifierProperties = function (elem, data) {
		    this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
		    this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
		    this.sValue = 0;
		    this.eValue = 0;
		    this.getValue = this.processKeys;
		    this.m = data.m;
		    this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
		  };
		  TrimModifier.prototype.addShapeToModifier = function (shapeData) {
		    shapeData.pathsData = [];
		  };
		  TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
		    var segments = [];
		    if (e <= 1) {
		      segments.push({
		        s: s,
		        e: e
		      });
		    } else if (s >= 1) {
		      segments.push({
		        s: s - 1,
		        e: e - 1
		      });
		    } else {
		      segments.push({
		        s: s,
		        e: 1
		      });
		      segments.push({
		        s: 0,
		        e: e - 1
		      });
		    }
		    var shapeSegments = [];
		    var i;
		    var len = segments.length;
		    var segmentOb;
		    for (i = 0; i < len; i += 1) {
		      segmentOb = segments[i];
		      if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
		        var shapeS;
		        var shapeE;
		        if (segmentOb.s * totalModifierLength <= addedLength) {
		          shapeS = 0;
		        } else {
		          shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
		        }
		        if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
		          shapeE = 1;
		        } else {
		          shapeE = (segmentOb.e * totalModifierLength - addedLength) / shapeLength;
		        }
		        shapeSegments.push([shapeS, shapeE]);
		      }
		    }
		    if (!shapeSegments.length) {
		      shapeSegments.push([0, 0]);
		    }
		    return shapeSegments;
		  };
		  TrimModifier.prototype.releasePathsData = function (pathsData) {
		    var i;
		    var len = pathsData.length;
		    for (i = 0; i < len; i += 1) {
		      segmentsLengthPool.release(pathsData[i]);
		    }
		    pathsData.length = 0;
		    return pathsData;
		  };
		  TrimModifier.prototype.processShapes = function (_isFirstFrame) {
		    var s;
		    var e;
		    if (this._mdf || _isFirstFrame) {
		      var o = this.o.v % 360 / 360;
		      if (o < 0) {
		        o += 1;
		      }
		      if (this.s.v > 1) {
		        s = 1 + o;
		      } else if (this.s.v < 0) {
		        s = 0 + o;
		      } else {
		        s = this.s.v + o;
		      }
		      if (this.e.v > 1) {
		        e = 1 + o;
		      } else if (this.e.v < 0) {
		        e = 0 + o;
		      } else {
		        e = this.e.v + o;
		      }
		      if (s > e) {
		        var _s = s;
		        s = e;
		        e = _s;
		      }
		      s = Math.round(s * 10000) * 0.0001;
		      e = Math.round(e * 10000) * 0.0001;
		      this.sValue = s;
		      this.eValue = e;
		    } else {
		      s = this.sValue;
		      e = this.eValue;
		    }
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var pathsData;
		    var pathData;
		    var totalShapeLength;
		    var totalModifierLength = 0;
		    if (e === s) {
		      for (i = 0; i < len; i += 1) {
		        this.shapes[i].localShapeCollection.releaseShapes();
		        this.shapes[i].shape._mdf = true;
		        this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
		        if (this._mdf) {
		          this.shapes[i].pathsData.length = 0;
		        }
		      }
		    } else if (!(e === 1 && s === 0 || e === 0 && s === 1)) {
		      var segments = [];
		      var shapeData;
		      var localShapeCollection;
		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
		        if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
		          shapeData.shape.paths = shapeData.localShapeCollection;
		        } else {
		          shapePaths = shapeData.shape.paths;
		          jLen = shapePaths._length;
		          totalShapeLength = 0;
		          if (!shapeData.shape._mdf && shapeData.pathsData.length) {
		            totalShapeLength = shapeData.totalShapeLength;
		          } else {
		            pathsData = this.releasePathsData(shapeData.pathsData);
		            for (j = 0; j < jLen; j += 1) {
		              pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
		              pathsData.push(pathData);
		              totalShapeLength += pathData.totalLength;
		            }
		            shapeData.totalShapeLength = totalShapeLength;
		            shapeData.pathsData = pathsData;
		          }
		          totalModifierLength += totalShapeLength;
		          shapeData.shape._mdf = true;
		        }
		      }
		      var shapeS = s;
		      var shapeE = e;
		      var addedLength = 0;
		      var edges;
		      for (i = len - 1; i >= 0; i -= 1) {
		        shapeData = this.shapes[i];
		        if (shapeData.shape._mdf) {
		          localShapeCollection = shapeData.localShapeCollection;
		          localShapeCollection.releaseShapes();
		          // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
		          if (this.m === 2 && len > 1) {
		            edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
		            addedLength += shapeData.totalShapeLength;
		          } else {
		            edges = [[shapeS, shapeE]];
		          }
		          jLen = edges.length;
		          for (j = 0; j < jLen; j += 1) {
		            shapeS = edges[j][0];
		            shapeE = edges[j][1];
		            segments.length = 0;
		            if (shapeE <= 1) {
		              segments.push({
		                s: shapeData.totalShapeLength * shapeS,
		                e: shapeData.totalShapeLength * shapeE
		              });
		            } else if (shapeS >= 1) {
		              segments.push({
		                s: shapeData.totalShapeLength * (shapeS - 1),
		                e: shapeData.totalShapeLength * (shapeE - 1)
		              });
		            } else {
		              segments.push({
		                s: shapeData.totalShapeLength * shapeS,
		                e: shapeData.totalShapeLength
		              });
		              segments.push({
		                s: 0,
		                e: shapeData.totalShapeLength * (shapeE - 1)
		              });
		            }
		            var newShapesData = this.addShapes(shapeData, segments[0]);
		            if (segments[0].s !== segments[0].e) {
		              if (segments.length > 1) {
		                var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
		                if (lastShapeInCollection.c) {
		                  var lastShape = newShapesData.pop();
		                  this.addPaths(newShapesData, localShapeCollection);
		                  newShapesData = this.addShapes(shapeData, segments[1], lastShape);
		                } else {
		                  this.addPaths(newShapesData, localShapeCollection);
		                  newShapesData = this.addShapes(shapeData, segments[1]);
		                }
		              }
		              this.addPaths(newShapesData, localShapeCollection);
		            }
		          }
		          shapeData.shape.paths = localShapeCollection;
		        }
		      }
		    } else if (this._mdf) {
		      for (i = 0; i < len; i += 1) {
		        // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
		        // Don't remove this even if it's losing cached info.
		        this.shapes[i].pathsData.length = 0;
		        this.shapes[i].shape._mdf = true;
		      }
		    }
		  };
		  TrimModifier.prototype.addPaths = function (newPaths, localShapeCollection) {
		    var i;
		    var len = newPaths.length;
		    for (i = 0; i < len; i += 1) {
		      localShapeCollection.addShape(newPaths[i]);
		    }
		  };
		  TrimModifier.prototype.addSegment = function (pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
		    shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
		    shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);
		    if (newShape) {
		      shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
		    }
		    shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
		  };
		  TrimModifier.prototype.addSegmentFromArray = function (points, shapePath, pos, newShape) {
		    shapePath.setXYAt(points[1], points[5], 'o', pos);
		    shapePath.setXYAt(points[2], points[6], 'i', pos + 1);
		    if (newShape) {
		      shapePath.setXYAt(points[0], points[4], 'v', pos);
		    }
		    shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
		  };
		  TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
		    var pathsData = shapeData.pathsData;
		    var shapePaths = shapeData.shape.paths.shapes;
		    var i;
		    var len = shapeData.shape.paths._length;
		    var j;
		    var jLen;
		    var addedLength = 0;
		    var currentLengthData;
		    var segmentCount;
		    var lengths;
		    var segment;
		    var shapes = [];
		    var initPos;
		    var newShape = true;
		    if (!shapePath) {
		      shapePath = shapePool.newElement();
		      segmentCount = 0;
		      initPos = 0;
		    } else {
		      segmentCount = shapePath._length;
		      initPos = shapePath._length;
		    }
		    shapes.push(shapePath);
		    for (i = 0; i < len; i += 1) {
		      lengths = pathsData[i].lengths;
		      shapePath.c = shapePaths[i].c;
		      jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
		      for (j = 1; j < jLen; j += 1) {
		        currentLengthData = lengths[j - 1];
		        if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
		          addedLength += currentLengthData.addedLength;
		          shapePath.c = false;
		        } else if (addedLength > shapeSegment.e) {
		          shapePath.c = false;
		          break;
		        } else {
		          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
		            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
		            newShape = false;
		          } else {
		            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
		            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
		            // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
		            newShape = false;
		            shapePath.c = false;
		          }
		          addedLength += currentLengthData.addedLength;
		          segmentCount += 1;
		        }
		      }
		      if (shapePaths[i].c && lengths.length) {
		        currentLengthData = lengths[j - 1];
		        if (addedLength <= shapeSegment.e) {
		          var segmentLength = lengths[j - 1].addedLength;
		          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
		            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
		            newShape = false;
		          } else {
		            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
		            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
		            // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
		            newShape = false;
		            shapePath.c = false;
		          }
		        } else {
		          shapePath.c = false;
		        }
		        addedLength += currentLengthData.addedLength;
		        segmentCount += 1;
		      }
		      if (shapePath._length) {
		        shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
		        shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
		      }
		      if (addedLength > shapeSegment.e) {
		        break;
		      }
		      if (i < len - 1) {
		        shapePath = shapePool.newElement();
		        newShape = true;
		        shapes.push(shapePath);
		        segmentCount = 0;
		      }
		    }
		    return shapes;
		  };

		  function PuckerAndBloatModifier() {}
		  extendPrototype([ShapeModifier], PuckerAndBloatModifier);
		  PuckerAndBloatModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
		    this._isAnimated = !!this.amount.effectsSequence.length;
		  };
		  PuckerAndBloatModifier.prototype.processPath = function (path, amount) {
		    var percent = amount / 100;
		    var centerPoint = [0, 0];
		    var pathLength = path._length;
		    var i = 0;
		    for (i = 0; i < pathLength; i += 1) {
		      centerPoint[0] += path.v[i][0];
		      centerPoint[1] += path.v[i][1];
		    }
		    centerPoint[0] /= pathLength;
		    centerPoint[1] /= pathLength;
		    var clonedPath = shapePool.newElement();
		    clonedPath.c = path.c;
		    var vX;
		    var vY;
		    var oX;
		    var oY;
		    var iX;
		    var iY;
		    for (i = 0; i < pathLength; i += 1) {
		      vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
		      vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
		      oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
		      oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
		      iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
		      iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
		      clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
		    }
		    return clonedPath;
		  };
		  PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var amount = this.amount.v;
		    if (amount !== 0) {
		      var shapeData;
		      var localShapeCollection;
		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;
		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;
		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
		          }
		        }
		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }
		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  var TransformPropertyFactory = function () {
		    var defaultVector = [0, 0];
		    function applyToMatrix(mat) {
		      var _mdf = this._mdf;
		      this.iterateDynamicProperties();
		      this._mdf = this._mdf || _mdf;
		      if (this.a) {
		        mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
		      }
		      if (this.s) {
		        mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
		      }
		      if (this.sk) {
		        mat.skewFromAxis(-this.sk.v, this.sa.v);
		      }
		      if (this.r) {
		        mat.rotate(-this.r.v);
		      } else {
		        mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
		      }
		      if (this.data.p.s) {
		        if (this.data.p.z) {
		          mat.translate(this.px.v, this.py.v, -this.pz.v);
		        } else {
		          mat.translate(this.px.v, this.py.v, 0);
		        }
		      } else {
		        mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
		      }
		    }
		    function processKeys(forceRender) {
		      if (this.elem.globalData.frameId === this.frameId) {
		        return;
		      }
		      if (this._isDirty) {
		        this.precalculateMatrix();
		        this._isDirty = false;
		      }
		      this.iterateDynamicProperties();
		      if (this._mdf || forceRender) {
		        var frameRate;
		        this.v.cloneFromProps(this.pre.props);
		        if (this.appliedTransformations < 1) {
		          this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
		        }
		        if (this.appliedTransformations < 2) {
		          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
		        }
		        if (this.sk && this.appliedTransformations < 3) {
		          this.v.skewFromAxis(-this.sk.v, this.sa.v);
		        }
		        if (this.r && this.appliedTransformations < 4) {
		          this.v.rotate(-this.r.v);
		        } else if (!this.r && this.appliedTransformations < 4) {
		          this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
		        }
		        if (this.autoOriented) {
		          var v1;
		          var v2;
		          frameRate = this.elem.globalData.frameRate;
		          if (this.p && this.p.keyframes && this.p.getValueAtTime) {
		            if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
		              v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
		              v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
		            } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
		              v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate, 0);
		              v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
		            } else {
		              v1 = this.p.pv;
		              v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
		            }
		          } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
		            v1 = [];
		            v2 = [];
		            var px = this.px;
		            var py = this.py;
		            if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
		              v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
		              v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
		              v2[0] = px.getValueAtTime(px.keyframes[0].t / frameRate, 0);
		              v2[1] = py.getValueAtTime(py.keyframes[0].t / frameRate, 0);
		            } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
		              v1[0] = px.getValueAtTime(px.keyframes[px.keyframes.length - 1].t / frameRate, 0);
		              v1[1] = py.getValueAtTime(py.keyframes[py.keyframes.length - 1].t / frameRate, 0);
		              v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
		              v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
		            } else {
		              v1 = [px.pv, py.pv];
		              v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
		              v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
		            }
		          } else {
		            v2 = defaultVector;
		            v1 = v2;
		          }
		          this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
		        }
		        if (this.data.p && this.data.p.s) {
		          if (this.data.p.z) {
		            this.v.translate(this.px.v, this.py.v, -this.pz.v);
		          } else {
		            this.v.translate(this.px.v, this.py.v, 0);
		          }
		        } else {
		          this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
		        }
		      }
		      this.frameId = this.elem.globalData.frameId;
		    }
		    function precalculateMatrix() {
		      this.appliedTransformations = 0;
		      this.pre.reset();
		      if (!this.a.effectsSequence.length) {
		        this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
		        this.appliedTransformations = 1;
		      } else {
		        return;
		      }
		      if (!this.s.effectsSequence.length) {
		        this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
		        this.appliedTransformations = 2;
		      } else {
		        return;
		      }
		      if (this.sk) {
		        if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
		          this.pre.skewFromAxis(-this.sk.v, this.sa.v);
		          this.appliedTransformations = 3;
		        } else {
		          return;
		        }
		      }
		      if (this.r) {
		        if (!this.r.effectsSequence.length) {
		          this.pre.rotate(-this.r.v);
		          this.appliedTransformations = 4;
		        }
		      } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
		        this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
		        this.appliedTransformations = 4;
		      }
		    }
		    function autoOrient() {
		      //
		      // var prevP = this.getValueAtTime();
		    }
		    function addDynamicProperty(prop) {
		      this._addDynamicProperty(prop);
		      this.elem.addDynamicProperty(prop);
		      this._isDirty = true;
		    }
		    function TransformProperty(elem, data, container) {
		      this.elem = elem;
		      this.frameId = -1;
		      this.propType = 'transform';
		      this.data = data;
		      this.v = new Matrix();
		      // Precalculated matrix with non animated properties
		      this.pre = new Matrix();
		      this.appliedTransformations = 0;
		      this.initDynamicPropertyContainer(container || elem);
		      if (data.p && data.p.s) {
		        this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
		        this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);
		        if (data.p.z) {
		          this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
		        }
		      } else {
		        this.p = PropertyFactory.getProp(elem, data.p || {
		          k: [0, 0, 0]
		        }, 1, 0, this);
		      }
		      if (data.rx) {
		        this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
		        this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
		        this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);
		        if (data.or.k[0].ti) {
		          var i;
		          var len = data.or.k.length;
		          for (i = 0; i < len; i += 1) {
		            data.or.k[i].to = null;
		            data.or.k[i].ti = null;
		          }
		        }
		        this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this);
		        // sh Indicates it needs to be capped between -180 and 180
		        this.or.sh = true;
		      } else {
		        this.r = PropertyFactory.getProp(elem, data.r || {
		          k: 0
		        }, 0, degToRads, this);
		      }
		      if (data.sk) {
		        this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
		        this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
		      }
		      this.a = PropertyFactory.getProp(elem, data.a || {
		        k: [0, 0, 0]
		      }, 1, 0, this);
		      this.s = PropertyFactory.getProp(elem, data.s || {
		        k: [100, 100, 100]
		      }, 1, 0.01, this);
		      // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
		      if (data.o) {
		        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
		      } else {
		        this.o = {
		          _mdf: false,
		          v: 1
		        };
		      }
		      this._isDirty = true;
		      if (!this.dynamicProperties.length) {
		        this.getValue(true);
		      }
		    }
		    TransformProperty.prototype = {
		      applyToMatrix: applyToMatrix,
		      getValue: processKeys,
		      precalculateMatrix: precalculateMatrix,
		      autoOrient: autoOrient
		    };
		    extendPrototype([DynamicPropertyContainer], TransformProperty);
		    TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
		    TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
		    function getTransformProperty(elem, data, container) {
		      return new TransformProperty(elem, data, container);
		    }
		    return {
		      getTransformProperty: getTransformProperty
		    };
		  }();

		  function RepeaterModifier() {}
		  extendPrototype([ShapeModifier], RepeaterModifier);
		  RepeaterModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
		    this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
		    this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
		    this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
		    this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
		    this.data = data;
		    if (!this.dynamicProperties.length) {
		      this.getValue(true);
		    }
		    this._isAnimated = !!this.dynamicProperties.length;
		    this.pMatrix = new Matrix();
		    this.rMatrix = new Matrix();
		    this.sMatrix = new Matrix();
		    this.tMatrix = new Matrix();
		    this.matrix = new Matrix();
		  };
		  RepeaterModifier.prototype.applyTransforms = function (pMatrix, rMatrix, sMatrix, transform, perc, inv) {
		    var dir = inv ? -1 : 1;
		    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
		    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
		    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
		    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
		    rMatrix.rotate(-transform.r.v * dir * perc);
		    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
		    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
		    sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
		    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
		  };
		  RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
		    this.elem = elem;
		    this.arr = arr;
		    this.pos = pos;
		    this.elemsData = elemsData;
		    this._currentCopies = 0;
		    this._elements = [];
		    this._groups = [];
		    this.frameId = -1;
		    this.initDynamicPropertyContainer(elem);
		    this.initModifierProperties(elem, arr[pos]);
		    while (pos > 0) {
		      pos -= 1;
		      // this._elements.unshift(arr.splice(pos,1)[0]);
		      this._elements.unshift(arr[pos]);
		    }
		    if (this.dynamicProperties.length) {
		      this.k = true;
		    } else {
		      this.getValue(true);
		    }
		  };
		  RepeaterModifier.prototype.resetElements = function (elements) {
		    var i;
		    var len = elements.length;
		    for (i = 0; i < len; i += 1) {
		      elements[i]._processed = false;
		      if (elements[i].ty === 'gr') {
		        this.resetElements(elements[i].it);
		      }
		    }
		  };
		  RepeaterModifier.prototype.cloneElements = function (elements) {
		    var newElements = JSON.parse(JSON.stringify(elements));
		    this.resetElements(newElements);
		    return newElements;
		  };
		  RepeaterModifier.prototype.changeGroupRender = function (elements, renderFlag) {
		    var i;
		    var len = elements.length;
		    for (i = 0; i < len; i += 1) {
		      elements[i]._render = renderFlag;
		      if (elements[i].ty === 'gr') {
		        this.changeGroupRender(elements[i].it, renderFlag);
		      }
		    }
		  };
		  RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
		    var items;
		    var itemsTransform;
		    var i;
		    var dir;
		    var cont;
		    var hasReloaded = false;
		    if (this._mdf || _isFirstFrame) {
		      var copies = Math.ceil(this.c.v);
		      if (this._groups.length < copies) {
		        while (this._groups.length < copies) {
		          var group = {
		            it: this.cloneElements(this._elements),
		            ty: 'gr'
		          };
		          group.it.push({
		            a: {
		              a: 0,
		              ix: 1,
		              k: [0, 0]
		            },
		            nm: 'Transform',
		            o: {
		              a: 0,
		              ix: 7,
		              k: 100
		            },
		            p: {
		              a: 0,
		              ix: 2,
		              k: [0, 0]
		            },
		            r: {
		              a: 1,
		              ix: 6,
		              k: [{
		                s: 0,
		                e: 0,
		                t: 0
		              }, {
		                s: 0,
		                e: 0,
		                t: 1
		              }]
		            },
		            s: {
		              a: 0,
		              ix: 3,
		              k: [100, 100]
		            },
		            sa: {
		              a: 0,
		              ix: 5,
		              k: 0
		            },
		            sk: {
		              a: 0,
		              ix: 4,
		              k: 0
		            },
		            ty: 'tr'
		          });
		          this.arr.splice(0, 0, group);
		          this._groups.splice(0, 0, group);
		          this._currentCopies += 1;
		        }
		        this.elem.reloadShapes();
		        hasReloaded = true;
		      }
		      cont = 0;
		      var renderFlag;
		      for (i = 0; i <= this._groups.length - 1; i += 1) {
		        renderFlag = cont < copies;
		        this._groups[i]._render = renderFlag;
		        this.changeGroupRender(this._groups[i].it, renderFlag);
		        if (!renderFlag) {
		          var elems = this.elemsData[i].it;
		          var transformData = elems[elems.length - 1];
		          if (transformData.transform.op.v !== 0) {
		            transformData.transform.op._mdf = true;
		            transformData.transform.op.v = 0;
		          } else {
		            transformData.transform.op._mdf = false;
		          }
		        }
		        cont += 1;
		      }
		      this._currentCopies = copies;
		      /// /

		      var offset = this.o.v;
		      var offsetModulo = offset % 1;
		      var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
		      var pProps = this.pMatrix.props;
		      var rProps = this.rMatrix.props;
		      var sProps = this.sMatrix.props;
		      this.pMatrix.reset();
		      this.rMatrix.reset();
		      this.sMatrix.reset();
		      this.tMatrix.reset();
		      this.matrix.reset();
		      var iteration = 0;
		      if (offset > 0) {
		        while (iteration < roundOffset) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
		          iteration += 1;
		        }
		        if (offsetModulo) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
		          iteration += offsetModulo;
		        }
		      } else if (offset < 0) {
		        while (iteration > roundOffset) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
		          iteration -= 1;
		        }
		        if (offsetModulo) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
		          iteration -= offsetModulo;
		        }
		      }
		      i = this.data.m === 1 ? 0 : this._currentCopies - 1;
		      dir = this.data.m === 1 ? 1 : -1;
		      cont = this._currentCopies;
		      var j;
		      var jLen;
		      while (cont) {
		        items = this.elemsData[i].it;
		        itemsTransform = items[items.length - 1].transform.mProps.v.props;
		        jLen = itemsTransform.length;
		        items[items.length - 1].transform.mProps._mdf = true;
		        items[items.length - 1].transform.op._mdf = true;
		        items[items.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));
		        if (iteration !== 0) {
		          if (i !== 0 && dir === 1 || i !== this._currentCopies - 1 && dir === -1) {
		            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
		          }
		          this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
		          this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
		          this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);
		          for (j = 0; j < jLen; j += 1) {
		            itemsTransform[j] = this.matrix.props[j];
		          }
		          this.matrix.reset();
		        } else {
		          this.matrix.reset();
		          for (j = 0; j < jLen; j += 1) {
		            itemsTransform[j] = this.matrix.props[j];
		          }
		        }
		        iteration += 1;
		        cont -= 1;
		        i += dir;
		      }
		    } else {
		      cont = this._currentCopies;
		      i = 0;
		      dir = 1;
		      while (cont) {
		        items = this.elemsData[i].it;
		        itemsTransform = items[items.length - 1].transform.mProps.v.props;
		        items[items.length - 1].transform.mProps._mdf = false;
		        items[items.length - 1].transform.op._mdf = false;
		        cont -= 1;
		        i += dir;
		      }
		    }
		    return hasReloaded;
		  };
		  RepeaterModifier.prototype.addShape = function () {};

		  function RoundCornersModifier() {}
		  extendPrototype([ShapeModifier], RoundCornersModifier);
		  RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
		    this._isAnimated = !!this.rd.effectsSequence.length;
		  };
		  RoundCornersModifier.prototype.processPath = function (path, round) {
		    var clonedPath = shapePool.newElement();
		    clonedPath.c = path.c;
		    var i;
		    var len = path._length;
		    var currentV;
		    var currentI;
		    var currentO;
		    var closerV;
		    var distance;
		    var newPosPerc;
		    var index = 0;
		    var vX;
		    var vY;
		    var oX;
		    var oY;
		    var iX;
		    var iY;
		    for (i = 0; i < len; i += 1) {
		      currentV = path.v[i];
		      currentO = path.o[i];
		      currentI = path.i[i];
		      if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
		        if ((i === 0 || i === len - 1) && !path.c) {
		          clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
		          /* clonedPath.v[index] = currentV;
		                  clonedPath.o[index] = currentO;
		                  clonedPath.i[index] = currentI; */
		          index += 1;
		        } else {
		          if (i === 0) {
		            closerV = path.v[len - 1];
		          } else {
		            closerV = path.v[i - 1];
		          }
		          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
		          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
		          iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
		          vX = iX;
		          iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
		          vY = iY;
		          oX = vX - (vX - currentV[0]) * roundCorner;
		          oY = vY - (vY - currentV[1]) * roundCorner;
		          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
		          index += 1;
		          if (i === len - 1) {
		            closerV = path.v[0];
		          } else {
		            closerV = path.v[i + 1];
		          }
		          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
		          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
		          oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
		          vX = oX;
		          oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
		          vY = oY;
		          iX = vX - (vX - currentV[0]) * roundCorner;
		          iY = vY - (vY - currentV[1]) * roundCorner;
		          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
		          index += 1;
		        }
		      } else {
		        clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
		        index += 1;
		      }
		    }
		    return clonedPath;
		  };
		  RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var rd = this.rd.v;
		    if (rd !== 0) {
		      var shapeData;
		      var localShapeCollection;
		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;
		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;
		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
		          }
		        }
		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }
		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  function floatEqual(a, b) {
		    return Math.abs(a - b) * 100000 <= Math.min(Math.abs(a), Math.abs(b));
		  }
		  function floatZero(f) {
		    return Math.abs(f) <= 0.00001;
		  }
		  function lerp(p0, p1, amount) {
		    return p0 * (1 - amount) + p1 * amount;
		  }
		  function lerpPoint(p0, p1, amount) {
		    return [lerp(p0[0], p1[0], amount), lerp(p0[1], p1[1], amount)];
		  }
		  function quadRoots(a, b, c) {
		    // no root
		    if (a === 0) return [];
		    var s = b * b - 4 * a * c;
		    // Complex roots
		    if (s < 0) return [];
		    var singleRoot = -b / (2 * a);
		    // 1 root
		    if (s === 0) return [singleRoot];
		    var delta = Math.sqrt(s) / (2 * a);
		    // 2 roots
		    return [singleRoot - delta, singleRoot + delta];
		  }
		  function polynomialCoefficients(p0, p1, p2, p3) {
		    return [-p0 + 3 * p1 - 3 * p2 + p3, 3 * p0 - 6 * p1 + 3 * p2, -3 * p0 + 3 * p1, p0];
		  }
		  function singlePoint(p) {
		    return new PolynomialBezier(p, p, p, p, false);
		  }
		  function PolynomialBezier(p0, p1, p2, p3, linearize) {
		    if (linearize && pointEqual(p0, p1)) {
		      p1 = lerpPoint(p0, p3, 1 / 3);
		    }
		    if (linearize && pointEqual(p2, p3)) {
		      p2 = lerpPoint(p0, p3, 2 / 3);
		    }
		    var coeffx = polynomialCoefficients(p0[0], p1[0], p2[0], p3[0]);
		    var coeffy = polynomialCoefficients(p0[1], p1[1], p2[1], p3[1]);
		    this.a = [coeffx[0], coeffy[0]];
		    this.b = [coeffx[1], coeffy[1]];
		    this.c = [coeffx[2], coeffy[2]];
		    this.d = [coeffx[3], coeffy[3]];
		    this.points = [p0, p1, p2, p3];
		  }
		  PolynomialBezier.prototype.point = function (t) {
		    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
		  };
		  PolynomialBezier.prototype.derivative = function (t) {
		    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
		  };
		  PolynomialBezier.prototype.tangentAngle = function (t) {
		    var p = this.derivative(t);
		    return Math.atan2(p[1], p[0]);
		  };
		  PolynomialBezier.prototype.normalAngle = function (t) {
		    var p = this.derivative(t);
		    return Math.atan2(p[0], p[1]);
		  };
		  PolynomialBezier.prototype.inflectionPoints = function () {
		    var denom = this.a[1] * this.b[0] - this.a[0] * this.b[1];
		    if (floatZero(denom)) return [];
		    var tcusp = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / denom;
		    var square = tcusp * tcusp - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / denom;
		    if (square < 0) return [];
		    var root = Math.sqrt(square);
		    if (floatZero(root)) {
		      if (root > 0 && root < 1) return [tcusp];
		      return [];
		    }
		    return [tcusp - root, tcusp + root].filter(function (r) {
		      return r > 0 && r < 1;
		    });
		  };
		  PolynomialBezier.prototype.split = function (t) {
		    if (t <= 0) return [singlePoint(this.points[0]), this];
		    if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
		    var p10 = lerpPoint(this.points[0], this.points[1], t);
		    var p11 = lerpPoint(this.points[1], this.points[2], t);
		    var p12 = lerpPoint(this.points[2], this.points[3], t);
		    var p20 = lerpPoint(p10, p11, t);
		    var p21 = lerpPoint(p11, p12, t);
		    var p3 = lerpPoint(p20, p21, t);
		    return [new PolynomialBezier(this.points[0], p10, p20, p3, true), new PolynomialBezier(p3, p21, p12, this.points[3], true)];
		  };
		  function extrema(bez, comp) {
		    var min = bez.points[0][comp];
		    var max = bez.points[bez.points.length - 1][comp];
		    if (min > max) {
		      var e = max;
		      max = min;
		      min = e;
		    }
		    // Derivative roots to find min/max
		    var f = quadRoots(3 * bez.a[comp], 2 * bez.b[comp], bez.c[comp]);
		    for (var i = 0; i < f.length; i += 1) {
		      if (f[i] > 0 && f[i] < 1) {
		        var val = bez.point(f[i])[comp];
		        if (val < min) min = val;else if (val > max) max = val;
		      }
		    }
		    return {
		      min: min,
		      max: max
		    };
		  }
		  PolynomialBezier.prototype.bounds = function () {
		    return {
		      x: extrema(this, 0),
		      y: extrema(this, 1)
		    };
		  };
		  PolynomialBezier.prototype.boundingBox = function () {
		    var bounds = this.bounds();
		    return {
		      left: bounds.x.min,
		      right: bounds.x.max,
		      top: bounds.y.min,
		      bottom: bounds.y.max,
		      width: bounds.x.max - bounds.x.min,
		      height: bounds.y.max - bounds.y.min,
		      cx: (bounds.x.max + bounds.x.min) / 2,
		      cy: (bounds.y.max + bounds.y.min) / 2
		    };
		  };
		  function intersectData(bez, t1, t2) {
		    var box = bez.boundingBox();
		    return {
		      cx: box.cx,
		      cy: box.cy,
		      width: box.width,
		      height: box.height,
		      bez: bez,
		      t: (t1 + t2) / 2,
		      t1: t1,
		      t2: t2
		    };
		  }
		  function splitData(data) {
		    var split = data.bez.split(0.5);
		    return [intersectData(split[0], data.t1, data.t), intersectData(split[1], data.t, data.t2)];
		  }
		  function boxIntersect(b1, b2) {
		    return Math.abs(b1.cx - b2.cx) * 2 < b1.width + b2.width && Math.abs(b1.cy - b2.cy) * 2 < b1.height + b2.height;
		  }
		  function intersectsImpl(d1, d2, depth, tolerance, intersections, maxRecursion) {
		    if (!boxIntersect(d1, d2)) return;
		    if (depth >= maxRecursion || d1.width <= tolerance && d1.height <= tolerance && d2.width <= tolerance && d2.height <= tolerance) {
		      intersections.push([d1.t, d2.t]);
		      return;
		    }
		    var d1s = splitData(d1);
		    var d2s = splitData(d2);
		    intersectsImpl(d1s[0], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
		    intersectsImpl(d1s[0], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
		    intersectsImpl(d1s[1], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
		    intersectsImpl(d1s[1], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
		  }
		  PolynomialBezier.prototype.intersections = function (other, tolerance, maxRecursion) {
		    if (tolerance === undefined) tolerance = 2;
		    if (maxRecursion === undefined) maxRecursion = 7;
		    var intersections = [];
		    intersectsImpl(intersectData(this, 0, 1), intersectData(other, 0, 1), 0, tolerance, intersections, maxRecursion);
		    return intersections;
		  };
		  PolynomialBezier.shapeSegment = function (shapePath, index) {
		    var nextIndex = (index + 1) % shapePath.length();
		    return new PolynomialBezier(shapePath.v[index], shapePath.o[index], shapePath.i[nextIndex], shapePath.v[nextIndex], true);
		  };
		  PolynomialBezier.shapeSegmentInverted = function (shapePath, index) {
		    var nextIndex = (index + 1) % shapePath.length();
		    return new PolynomialBezier(shapePath.v[nextIndex], shapePath.i[nextIndex], shapePath.o[index], shapePath.v[index], true);
		  };
		  function crossProduct(a, b) {
		    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
		  }
		  function lineIntersection(start1, end1, start2, end2) {
		    var v1 = [start1[0], start1[1], 1];
		    var v2 = [end1[0], end1[1], 1];
		    var v3 = [start2[0], start2[1], 1];
		    var v4 = [end2[0], end2[1], 1];
		    var r = crossProduct(crossProduct(v1, v2), crossProduct(v3, v4));
		    if (floatZero(r[2])) return null;
		    return [r[0] / r[2], r[1] / r[2]];
		  }
		  function polarOffset(p, angle, length) {
		    return [p[0] + Math.cos(angle) * length, p[1] - Math.sin(angle) * length];
		  }
		  function pointDistance(p1, p2) {
		    return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
		  }
		  function pointEqual(p1, p2) {
		    return floatEqual(p1[0], p2[0]) && floatEqual(p1[1], p2[1]);
		  }

		  function ZigZagModifier() {}
		  extendPrototype([ShapeModifier], ZigZagModifier);
		  ZigZagModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.amplitude = PropertyFactory.getProp(elem, data.s, 0, null, this);
		    this.frequency = PropertyFactory.getProp(elem, data.r, 0, null, this);
		    this.pointsType = PropertyFactory.getProp(elem, data.pt, 0, null, this);
		    this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
		  };
		  function setPoint(outputBezier, point, angle, direction, amplitude, outAmplitude, inAmplitude) {
		    var angO = angle - Math.PI / 2;
		    var angI = angle + Math.PI / 2;
		    var px = point[0] + Math.cos(angle) * direction * amplitude;
		    var py = point[1] - Math.sin(angle) * direction * amplitude;
		    outputBezier.setTripleAt(px, py, px + Math.cos(angO) * outAmplitude, py - Math.sin(angO) * outAmplitude, px + Math.cos(angI) * inAmplitude, py - Math.sin(angI) * inAmplitude, outputBezier.length());
		  }
		  function getPerpendicularVector(pt1, pt2) {
		    var vector = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
		    var rot = -Math.PI * 0.5;
		    var rotatedVector = [Math.cos(rot) * vector[0] - Math.sin(rot) * vector[1], Math.sin(rot) * vector[0] + Math.cos(rot) * vector[1]];
		    return rotatedVector;
		  }
		  function getProjectingAngle(path, cur) {
		    var prevIndex = cur === 0 ? path.length() - 1 : cur - 1;
		    var nextIndex = (cur + 1) % path.length();
		    var prevPoint = path.v[prevIndex];
		    var nextPoint = path.v[nextIndex];
		    var pVector = getPerpendicularVector(prevPoint, nextPoint);
		    return Math.atan2(0, 1) - Math.atan2(pVector[1], pVector[0]);
		  }
		  function zigZagCorner(outputBezier, path, cur, amplitude, frequency, pointType, direction) {
		    var angle = getProjectingAngle(path, cur);
		    var point = path.v[cur % path._length];
		    var prevPoint = path.v[cur === 0 ? path._length - 1 : cur - 1];
		    var nextPoint = path.v[(cur + 1) % path._length];
		    var prevDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - prevPoint[0], 2) + Math.pow(point[1] - prevPoint[1], 2)) : 0;
		    var nextDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - nextPoint[0], 2) + Math.pow(point[1] - nextPoint[1], 2)) : 0;
		    setPoint(outputBezier, path.v[cur % path._length], angle, direction, amplitude, nextDist / ((frequency + 1) * 2), prevDist / ((frequency + 1) * 2));
		  }
		  function zigZagSegment(outputBezier, segment, amplitude, frequency, pointType, direction) {
		    for (var i = 0; i < frequency; i += 1) {
		      var t = (i + 1) / (frequency + 1);
		      var dist = pointType === 2 ? Math.sqrt(Math.pow(segment.points[3][0] - segment.points[0][0], 2) + Math.pow(segment.points[3][1] - segment.points[0][1], 2)) : 0;
		      var angle = segment.normalAngle(t);
		      var point = segment.point(t);
		      setPoint(outputBezier, point, angle, direction, amplitude, dist / ((frequency + 1) * 2), dist / ((frequency + 1) * 2));
		      direction = -direction;
		    }
		    return direction;
		  }
		  ZigZagModifier.prototype.processPath = function (path, amplitude, frequency, pointType) {
		    var count = path._length;
		    var clonedPath = shapePool.newElement();
		    clonedPath.c = path.c;
		    if (!path.c) {
		      count -= 1;
		    }
		    if (count === 0) return clonedPath;
		    var direction = -1;
		    var segment = PolynomialBezier.shapeSegment(path, 0);
		    zigZagCorner(clonedPath, path, 0, amplitude, frequency, pointType, direction);
		    for (var i = 0; i < count; i += 1) {
		      direction = zigZagSegment(clonedPath, segment, amplitude, frequency, pointType, -direction);
		      if (i === count - 1 && !path.c) {
		        segment = null;
		      } else {
		        segment = PolynomialBezier.shapeSegment(path, (i + 1) % count);
		      }
		      zigZagCorner(clonedPath, path, i + 1, amplitude, frequency, pointType, direction);
		    }
		    return clonedPath;
		  };
		  ZigZagModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var amplitude = this.amplitude.v;
		    var frequency = Math.max(0, Math.round(this.frequency.v));
		    var pointType = this.pointsType.v;
		    if (amplitude !== 0) {
		      var shapeData;
		      var localShapeCollection;
		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;
		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;
		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], amplitude, frequency, pointType));
		          }
		        }
		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }
		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  function linearOffset(p1, p2, amount) {
		    var angle = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]);
		    return [polarOffset(p1, angle, amount), polarOffset(p2, angle, amount)];
		  }
		  function offsetSegment(segment, amount) {
		    var p0;
		    var p1a;
		    var p1b;
		    var p2b;
		    var p2a;
		    var p3;
		    var e;
		    e = linearOffset(segment.points[0], segment.points[1], amount);
		    p0 = e[0];
		    p1a = e[1];
		    e = linearOffset(segment.points[1], segment.points[2], amount);
		    p1b = e[0];
		    p2b = e[1];
		    e = linearOffset(segment.points[2], segment.points[3], amount);
		    p2a = e[0];
		    p3 = e[1];
		    var p1 = lineIntersection(p0, p1a, p1b, p2b);
		    if (p1 === null) p1 = p1a;
		    var p2 = lineIntersection(p2a, p3, p1b, p2b);
		    if (p2 === null) p2 = p2a;
		    return new PolynomialBezier(p0, p1, p2, p3);
		  }
		  function joinLines(outputBezier, seg1, seg2, lineJoin, miterLimit) {
		    var p0 = seg1.points[3];
		    var p1 = seg2.points[0];

		    // Bevel
		    if (lineJoin === 3) return p0;

		    // Connected, they don't need a joint
		    if (pointEqual(p0, p1)) return p0;

		    // Round
		    if (lineJoin === 2) {
		      var angleOut = -seg1.tangentAngle(1);
		      var angleIn = -seg2.tangentAngle(0) + Math.PI;
		      var center = lineIntersection(p0, polarOffset(p0, angleOut + Math.PI / 2, 100), p1, polarOffset(p1, angleOut + Math.PI / 2, 100));
		      var radius = center ? pointDistance(center, p0) : pointDistance(p0, p1) / 2;
		      var tan = polarOffset(p0, angleOut, 2 * radius * roundCorner);
		      outputBezier.setXYAt(tan[0], tan[1], 'o', outputBezier.length() - 1);
		      tan = polarOffset(p1, angleIn, 2 * radius * roundCorner);
		      outputBezier.setTripleAt(p1[0], p1[1], p1[0], p1[1], tan[0], tan[1], outputBezier.length());
		      return p1;
		    }

		    // Miter
		    var t0 = pointEqual(p0, seg1.points[2]) ? seg1.points[0] : seg1.points[2];
		    var t1 = pointEqual(p1, seg2.points[1]) ? seg2.points[3] : seg2.points[1];
		    var intersection = lineIntersection(t0, p0, p1, t1);
		    if (intersection && pointDistance(intersection, p0) < miterLimit) {
		      outputBezier.setTripleAt(intersection[0], intersection[1], intersection[0], intersection[1], intersection[0], intersection[1], outputBezier.length());
		      return intersection;
		    }
		    return p0;
		  }
		  function getIntersection(a, b) {
		    var intersect = a.intersections(b);
		    if (intersect.length && floatEqual(intersect[0][0], 1)) intersect.shift();
		    if (intersect.length) return intersect[0];
		    return null;
		  }
		  function pruneSegmentIntersection(a, b) {
		    var outa = a.slice();
		    var outb = b.slice();
		    var intersect = getIntersection(a[a.length - 1], b[0]);
		    if (intersect) {
		      outa[a.length - 1] = a[a.length - 1].split(intersect[0])[0];
		      outb[0] = b[0].split(intersect[1])[1];
		    }
		    if (a.length > 1 && b.length > 1) {
		      intersect = getIntersection(a[0], b[b.length - 1]);
		      if (intersect) {
		        return [[a[0].split(intersect[0])[0]], [b[b.length - 1].split(intersect[1])[1]]];
		      }
		    }
		    return [outa, outb];
		  }
		  function pruneIntersections(segments) {
		    var e;
		    for (var i = 1; i < segments.length; i += 1) {
		      e = pruneSegmentIntersection(segments[i - 1], segments[i]);
		      segments[i - 1] = e[0];
		      segments[i] = e[1];
		    }
		    if (segments.length > 1) {
		      e = pruneSegmentIntersection(segments[segments.length - 1], segments[0]);
		      segments[segments.length - 1] = e[0];
		      segments[0] = e[1];
		    }
		    return segments;
		  }
		  function offsetSegmentSplit(segment, amount) {
		    /*
		      We split each bezier segment into smaller pieces based
		      on inflection points, this ensures the control point
		      polygon is convex.
		       (A cubic bezier can have none, one, or two inflection points)
		    */
		    var flex = segment.inflectionPoints();
		    var left;
		    var right;
		    var split;
		    var mid;
		    if (flex.length === 0) {
		      return [offsetSegment(segment, amount)];
		    }
		    if (flex.length === 1 || floatEqual(flex[1], 1)) {
		      split = segment.split(flex[0]);
		      left = split[0];
		      right = split[1];
		      return [offsetSegment(left, amount), offsetSegment(right, amount)];
		    }
		    split = segment.split(flex[0]);
		    left = split[0];
		    var t = (flex[1] - flex[0]) / (1 - flex[0]);
		    split = split[1].split(t);
		    mid = split[0];
		    right = split[1];
		    return [offsetSegment(left, amount), offsetSegment(mid, amount), offsetSegment(right, amount)];
		  }
		  function OffsetPathModifier() {}
		  extendPrototype([ShapeModifier], OffsetPathModifier);
		  OffsetPathModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
		    this.miterLimit = PropertyFactory.getProp(elem, data.ml, 0, null, this);
		    this.lineJoin = data.lj;
		    this._isAnimated = this.amount.effectsSequence.length !== 0;
		  };
		  OffsetPathModifier.prototype.processPath = function (inputBezier, amount, lineJoin, miterLimit) {
		    var outputBezier = shapePool.newElement();
		    outputBezier.c = inputBezier.c;
		    var count = inputBezier.length();
		    if (!inputBezier.c) {
		      count -= 1;
		    }
		    var i;
		    var j;
		    var segment;
		    var multiSegments = [];
		    for (i = 0; i < count; i += 1) {
		      segment = PolynomialBezier.shapeSegment(inputBezier, i);
		      multiSegments.push(offsetSegmentSplit(segment, amount));
		    }
		    if (!inputBezier.c) {
		      for (i = count - 1; i >= 0; i -= 1) {
		        segment = PolynomialBezier.shapeSegmentInverted(inputBezier, i);
		        multiSegments.push(offsetSegmentSplit(segment, amount));
		      }
		    }
		    multiSegments = pruneIntersections(multiSegments);

		    // Add bezier segments to the output and apply line joints
		    var lastPoint = null;
		    var lastSeg = null;
		    for (i = 0; i < multiSegments.length; i += 1) {
		      var multiSegment = multiSegments[i];
		      if (lastSeg) lastPoint = joinLines(outputBezier, lastSeg, multiSegment[0], lineJoin, miterLimit);
		      lastSeg = multiSegment[multiSegment.length - 1];
		      for (j = 0; j < multiSegment.length; j += 1) {
		        segment = multiSegment[j];
		        if (lastPoint && pointEqual(segment.points[0], lastPoint)) {
		          outputBezier.setXYAt(segment.points[1][0], segment.points[1][1], 'o', outputBezier.length() - 1);
		        } else {
		          outputBezier.setTripleAt(segment.points[0][0], segment.points[0][1], segment.points[1][0], segment.points[1][1], segment.points[0][0], segment.points[0][1], outputBezier.length());
		        }
		        outputBezier.setTripleAt(segment.points[3][0], segment.points[3][1], segment.points[3][0], segment.points[3][1], segment.points[2][0], segment.points[2][1], outputBezier.length());
		        lastPoint = segment.points[3];
		      }
		    }
		    if (multiSegments.length) joinLines(outputBezier, lastSeg, multiSegments[0][0], lineJoin, miterLimit);
		    return outputBezier;
		  };
		  OffsetPathModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var amount = this.amount.v;
		    var miterLimit = this.miterLimit.v;
		    var lineJoin = this.lineJoin;
		    if (amount !== 0) {
		      var shapeData;
		      var localShapeCollection;
		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;
		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;
		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], amount, lineJoin, miterLimit));
		          }
		        }
		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }
		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  function getFontProperties(fontData) {
		    var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];
		    var fWeight = 'normal';
		    var fStyle = 'normal';
		    var len = styles.length;
		    var styleName;
		    for (var i = 0; i < len; i += 1) {
		      styleName = styles[i].toLowerCase();
		      switch (styleName) {
		        case 'italic':
		          fStyle = 'italic';
		          break;
		        case 'bold':
		          fWeight = '700';
		          break;
		        case 'black':
		          fWeight = '900';
		          break;
		        case 'medium':
		          fWeight = '500';
		          break;
		        case 'regular':
		        case 'normal':
		          fWeight = '400';
		          break;
		        case 'light':
		        case 'thin':
		          fWeight = '200';
		          break;
		      }
		    }
		    return {
		      style: fStyle,
		      weight: fontData.fWeight || fWeight
		    };
		  }

		  var FontManager = function () {
		    var maxWaitingTime = 5000;
		    var emptyChar = {
		      w: 0,
		      size: 0,
		      shapes: [],
		      data: {
		        shapes: []
		      }
		    };
		    var combinedCharacters = [];
		    // Hindi characters
		    combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
		    var BLACK_FLAG_CODE_POINT = 127988;
		    var CANCEL_TAG_CODE_POINT = 917631;
		    var A_TAG_CODE_POINT = 917601;
		    var Z_TAG_CODE_POINT = 917626;
		    var VARIATION_SELECTOR_16_CODE_POINT = 65039;
		    var ZERO_WIDTH_JOINER_CODE_POINT = 8205;
		    var REGIONAL_CHARACTER_A_CODE_POINT = 127462;
		    var REGIONAL_CHARACTER_Z_CODE_POINT = 127487;
		    var surrogateModifiers = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];
		    function trimFontOptions(font) {
		      var familyArray = font.split(',');
		      var i;
		      var len = familyArray.length;
		      var enabledFamilies = [];
		      for (i = 0; i < len; i += 1) {
		        if (familyArray[i] !== 'sans-serif' && familyArray[i] !== 'monospace') {
		          enabledFamilies.push(familyArray[i]);
		        }
		      }
		      return enabledFamilies.join(',');
		    }
		    function setUpNode(font, family) {
		      var parentNode = createTag('span');
		      // Node is invisible to screen readers.
		      parentNode.setAttribute('aria-hidden', true);
		      parentNode.style.fontFamily = family;
		      var node = createTag('span');
		      // Characters that vary significantly among different fonts
		      node.innerText = 'giItT1WQy@!-/#';
		      // Visible - so we can measure it - but not on the screen
		      parentNode.style.position = 'absolute';
		      parentNode.style.left = '-10000px';
		      parentNode.style.top = '-10000px';
		      // Large font size makes even subtle changes obvious
		      parentNode.style.fontSize = '300px';
		      // Reset any font properties
		      parentNode.style.fontVariant = 'normal';
		      parentNode.style.fontStyle = 'normal';
		      parentNode.style.fontWeight = 'normal';
		      parentNode.style.letterSpacing = '0';
		      parentNode.appendChild(node);
		      document.body.appendChild(parentNode);

		      // Remember width with no applied web font
		      var width = node.offsetWidth;
		      node.style.fontFamily = trimFontOptions(font) + ', ' + family;
		      return {
		        node: node,
		        w: width,
		        parent: parentNode
		      };
		    }
		    function checkLoadedFonts() {
		      var i;
		      var len = this.fonts.length;
		      var node;
		      var w;
		      var loadedCount = len;
		      for (i = 0; i < len; i += 1) {
		        if (this.fonts[i].loaded) {
		          loadedCount -= 1;
		        } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
		          this.fonts[i].loaded = true;
		        } else {
		          node = this.fonts[i].monoCase.node;
		          w = this.fonts[i].monoCase.w;
		          if (node.offsetWidth !== w) {
		            loadedCount -= 1;
		            this.fonts[i].loaded = true;
		          } else {
		            node = this.fonts[i].sansCase.node;
		            w = this.fonts[i].sansCase.w;
		            if (node.offsetWidth !== w) {
		              loadedCount -= 1;
		              this.fonts[i].loaded = true;
		            }
		          }
		          if (this.fonts[i].loaded) {
		            this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
		            this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
		          }
		        }
		      }
		      if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
		        setTimeout(this.checkLoadedFontsBinded, 20);
		      } else {
		        setTimeout(this.setIsLoadedBinded, 10);
		      }
		    }
		    function createHelper(fontData, def) {
		      var engine = document.body && def ? 'svg' : 'canvas';
		      var helper;
		      var fontProps = getFontProperties(fontData);
		      if (engine === 'svg') {
		        var tHelper = createNS('text');
		        tHelper.style.fontSize = '100px';
		        // tHelper.style.fontFamily = fontData.fFamily;
		        tHelper.setAttribute('font-family', fontData.fFamily);
		        tHelper.setAttribute('font-style', fontProps.style);
		        tHelper.setAttribute('font-weight', fontProps.weight);
		        tHelper.textContent = '1';
		        if (fontData.fClass) {
		          tHelper.style.fontFamily = 'inherit';
		          tHelper.setAttribute('class', fontData.fClass);
		        } else {
		          tHelper.style.fontFamily = fontData.fFamily;
		        }
		        def.appendChild(tHelper);
		        helper = tHelper;
		      } else {
		        var tCanvasHelper = new OffscreenCanvas(500, 500).getContext('2d');
		        tCanvasHelper.font = fontProps.style + ' ' + fontProps.weight + ' 100px ' + fontData.fFamily;
		        helper = tCanvasHelper;
		      }
		      function measure(text) {
		        if (engine === 'svg') {
		          helper.textContent = text;
		          return helper.getComputedTextLength();
		        }
		        return helper.measureText(text).width;
		      }
		      return {
		        measureText: measure
		      };
		    }
		    function addFonts(fontData, defs) {
		      if (!fontData) {
		        this.isLoaded = true;
		        return;
		      }
		      if (this.chars) {
		        this.isLoaded = true;
		        this.fonts = fontData.list;
		        return;
		      }
		      if (!document.body) {
		        this.isLoaded = true;
		        fontData.list.forEach(function (data) {
		          data.helper = createHelper(data);
		          data.cache = {};
		        });
		        this.fonts = fontData.list;
		        return;
		      }
		      var fontArr = fontData.list;
		      var i;
		      var len = fontArr.length;
		      var _pendingFonts = len;
		      for (i = 0; i < len; i += 1) {
		        var shouldLoadFont = true;
		        var loadedSelector;
		        var j;
		        fontArr[i].loaded = false;
		        fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
		        fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');
		        if (!fontArr[i].fPath) {
		          fontArr[i].loaded = true;
		          _pendingFonts -= 1;
		        } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
		          loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');
		          if (loadedSelector.length > 0) {
		            shouldLoadFont = false;
		          }
		          if (shouldLoadFont) {
		            var s = createTag('style');
		            s.setAttribute('f-forigin', fontArr[i].fOrigin);
		            s.setAttribute('f-origin', fontArr[i].origin);
		            s.setAttribute('f-family', fontArr[i].fFamily);
		            s.type = 'text/css';
		            s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
		            defs.appendChild(s);
		          }
		        } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
		          loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
		          for (j = 0; j < loadedSelector.length; j += 1) {
		            if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
		              // Font is already loaded
		              shouldLoadFont = false;
		            }
		          }
		          if (shouldLoadFont) {
		            var l = createTag('link');
		            l.setAttribute('f-forigin', fontArr[i].fOrigin);
		            l.setAttribute('f-origin', fontArr[i].origin);
		            l.type = 'text/css';
		            l.rel = 'stylesheet';
		            l.href = fontArr[i].fPath;
		            document.body.appendChild(l);
		          }
		        } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
		          loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
		          for (j = 0; j < loadedSelector.length; j += 1) {
		            if (fontArr[i].fPath === loadedSelector[j].src) {
		              // Font is already loaded
		              shouldLoadFont = false;
		            }
		          }
		          if (shouldLoadFont) {
		            var sc = createTag('link');
		            sc.setAttribute('f-forigin', fontArr[i].fOrigin);
		            sc.setAttribute('f-origin', fontArr[i].origin);
		            sc.setAttribute('rel', 'stylesheet');
		            sc.setAttribute('href', fontArr[i].fPath);
		            defs.appendChild(sc);
		          }
		        }
		        fontArr[i].helper = createHelper(fontArr[i], defs);
		        fontArr[i].cache = {};
		        this.fonts.push(fontArr[i]);
		      }
		      if (_pendingFonts === 0) {
		        this.isLoaded = true;
		      } else {
		        // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
		        // Adding this timeout seems to fix it
		        setTimeout(this.checkLoadedFonts.bind(this), 100);
		      }
		    }
		    function addChars(chars) {
		      if (!chars) {
		        return;
		      }
		      if (!this.chars) {
		        this.chars = [];
		      }
		      var i;
		      var len = chars.length;
		      var j;
		      var jLen = this.chars.length;
		      var found;
		      for (i = 0; i < len; i += 1) {
		        j = 0;
		        found = false;
		        while (j < jLen) {
		          if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
		            found = true;
		          }
		          j += 1;
		        }
		        if (!found) {
		          this.chars.push(chars[i]);
		          jLen += 1;
		        }
		      }
		    }
		    function getCharData(_char, style, font) {
		      var i = 0;
		      var len = this.chars.length;
		      while (i < len) {
		        if (this.chars[i].ch === _char && this.chars[i].style === style && this.chars[i].fFamily === font) {
		          return this.chars[i];
		        }
		        i += 1;
		      }
		      if ((typeof _char === 'string' && _char.charCodeAt(0) !== 13 || !_char) && console && console.warn // eslint-disable-line no-console
		      && !this._warned) {
		        this._warned = true;
		        console.warn('Missing character from exported characters list: ', _char, style, font); // eslint-disable-line no-console
		      }
		      return emptyChar;
		    }
		    function measureText(_char2, fontName, size) {
		      var fontData = this.getFontByName(fontName);
		      // Using the char instead of char.charCodeAt(0)
		      // to avoid collisions between equal chars
		      var index = _char2;
		      if (!fontData.cache[index]) {
		        var tHelper = fontData.helper;
		        if (_char2 === ' ') {
		          var doubleSize = tHelper.measureText('|' + _char2 + '|');
		          var singleSize = tHelper.measureText('||');
		          fontData.cache[index] = (doubleSize - singleSize) / 100;
		        } else {
		          fontData.cache[index] = tHelper.measureText(_char2) / 100;
		        }
		      }
		      return fontData.cache[index] * size;
		    }
		    function getFontByName(name) {
		      var i = 0;
		      var len = this.fonts.length;
		      while (i < len) {
		        if (this.fonts[i].fName === name) {
		          return this.fonts[i];
		        }
		        i += 1;
		      }
		      return this.fonts[0];
		    }
		    function getCodePoint(string) {
		      var codePoint = 0;
		      var first = string.charCodeAt(0);
		      if (first >= 0xD800 && first <= 0xDBFF) {
		        var second = string.charCodeAt(1);
		        if (second >= 0xDC00 && second <= 0xDFFF) {
		          codePoint = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
		        }
		      }
		      return codePoint;
		    }

		    // Skin tone modifiers
		    function isModifier(firstCharCode, secondCharCode) {
		      var sum = firstCharCode.toString(16) + secondCharCode.toString(16);
		      return surrogateModifiers.indexOf(sum) !== -1;
		    }
		    function isZeroWidthJoiner(charCode) {
		      return charCode === ZERO_WIDTH_JOINER_CODE_POINT;
		    }

		    // This codepoint may change the appearance of the preceding character.
		    // If that is a symbol, dingbat or emoji, U+FE0F forces it to be rendered
		    // as a colorful image as compared to a monochrome text variant.
		    function isVariationSelector(charCode) {
		      return charCode === VARIATION_SELECTOR_16_CODE_POINT;
		    }

		    // The regional indicator symbols are a set of 26 alphabetic Unicode
		    /// characters (A–Z) intended to be used to encode ISO 3166-1 alpha-2
		    // two-letter country codes in a way that allows optional special treatment.
		    function isRegionalCode(string) {
		      var codePoint = getCodePoint(string);
		      if (codePoint >= REGIONAL_CHARACTER_A_CODE_POINT && codePoint <= REGIONAL_CHARACTER_Z_CODE_POINT) {
		        return true;
		      }
		      return false;
		    }

		    // Some Emoji implementations represent combinations of
		    // two “regional indicator” letters as a single flag symbol.
		    function isFlagEmoji(string) {
		      return isRegionalCode(string.substr(0, 2)) && isRegionalCode(string.substr(2, 2));
		    }
		    function isCombinedCharacter(_char3) {
		      return combinedCharacters.indexOf(_char3) !== -1;
		    }

		    // Regional flags start with a BLACK_FLAG_CODE_POINT
		    // folowed by 5 chars in the TAG range
		    // and end with a CANCEL_TAG_CODE_POINT
		    function isRegionalFlag(text, index) {
		      var codePoint = getCodePoint(text.substr(index, 2));
		      if (codePoint !== BLACK_FLAG_CODE_POINT) {
		        return false;
		      }
		      var count = 0;
		      index += 2;
		      while (count < 5) {
		        codePoint = getCodePoint(text.substr(index, 2));
		        if (codePoint < A_TAG_CODE_POINT || codePoint > Z_TAG_CODE_POINT) {
		          return false;
		        }
		        count += 1;
		        index += 2;
		      }
		      return getCodePoint(text.substr(index, 2)) === CANCEL_TAG_CODE_POINT;
		    }
		    function setIsLoaded() {
		      this.isLoaded = true;
		    }
		    var Font = function Font() {
		      this.fonts = [];
		      this.chars = null;
		      this.typekitLoaded = 0;
		      this.isLoaded = false;
		      this._warned = false;
		      this.initTime = Date.now();
		      this.setIsLoadedBinded = this.setIsLoaded.bind(this);
		      this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
		    };
		    Font.isModifier = isModifier;
		    Font.isZeroWidthJoiner = isZeroWidthJoiner;
		    Font.isFlagEmoji = isFlagEmoji;
		    Font.isRegionalCode = isRegionalCode;
		    Font.isCombinedCharacter = isCombinedCharacter;
		    Font.isRegionalFlag = isRegionalFlag;
		    Font.isVariationSelector = isVariationSelector;
		    Font.BLACK_FLAG_CODE_POINT = BLACK_FLAG_CODE_POINT;
		    var fontPrototype = {
		      addChars: addChars,
		      addFonts: addFonts,
		      getCharData: getCharData,
		      getFontByName: getFontByName,
		      measureText: measureText,
		      checkLoadedFonts: checkLoadedFonts,
		      setIsLoaded: setIsLoaded
		    };
		    Font.prototype = fontPrototype;
		    return Font;
		  }();

		  function SlotManager(animationData) {
		    this.animationData = animationData;
		  }
		  SlotManager.prototype.getProp = function (data) {
		    if (this.animationData.slots && this.animationData.slots[data.sid]) {
		      return Object.assign(data, this.animationData.slots[data.sid].p);
		    }
		    return data;
		  };
		  function slotFactory(animationData) {
		    return new SlotManager(animationData);
		  }

		  function RenderableElement() {}
		  RenderableElement.prototype = {
		    initRenderable: function initRenderable() {
		      // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
		      this.isInRange = false;
		      // layer's display state
		      this.hidden = false;
		      // If layer's transparency equals 0, it can be hidden
		      this.isTransparent = false;
		      // list of animated components
		      this.renderableComponents = [];
		    },
		    addRenderableComponent: function addRenderableComponent(component) {
		      if (this.renderableComponents.indexOf(component) === -1) {
		        this.renderableComponents.push(component);
		      }
		    },
		    removeRenderableComponent: function removeRenderableComponent(component) {
		      if (this.renderableComponents.indexOf(component) !== -1) {
		        this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
		      }
		    },
		    prepareRenderableFrame: function prepareRenderableFrame(num) {
		      this.checkLayerLimits(num);
		    },
		    checkTransparency: function checkTransparency() {
		      if (this.finalTransform.mProp.o.v <= 0) {
		        if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
		          this.isTransparent = true;
		          this.hide();
		        }
		      } else if (this.isTransparent) {
		        this.isTransparent = false;
		        this.show();
		      }
		    },
		    /**
		       * @function
		       * Initializes frame related properties.
		       *
		       * @param {number} num
		       * current frame number in Layer's time
		       *
		       */
		    checkLayerLimits: function checkLayerLimits(num) {
		      if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
		        if (this.isInRange !== true) {
		          this.globalData._mdf = true;
		          this._mdf = true;
		          this.isInRange = true;
		          this.show();
		        }
		      } else if (this.isInRange !== false) {
		        this.globalData._mdf = true;
		        this.isInRange = false;
		        this.hide();
		      }
		    },
		    renderRenderable: function renderRenderable() {
		      var i;
		      var len = this.renderableComponents.length;
		      for (i = 0; i < len; i += 1) {
		        this.renderableComponents[i].renderFrame(this._isFirstFrame);
		      }
		      /* this.maskManager.renderFrame(this.finalTransform.mat);
		          this.renderableEffectsManager.renderFrame(this._isFirstFrame); */
		    },
		    sourceRectAtTime: function sourceRectAtTime() {
		      return {
		        top: 0,
		        left: 0,
		        width: 100,
		        height: 100
		      };
		    },
		    getLayerSize: function getLayerSize() {
		      if (this.data.ty === 5) {
		        return {
		          w: this.data.textData.width,
		          h: this.data.textData.height
		        };
		      }
		      return {
		        w: this.data.width,
		        h: this.data.height
		      };
		    }
		  };

		  var getBlendMode = function () {
		    var blendModeEnums = {
		      0: 'source-over',
		      1: 'multiply',
		      2: 'screen',
		      3: 'overlay',
		      4: 'darken',
		      5: 'lighten',
		      6: 'color-dodge',
		      7: 'color-burn',
		      8: 'hard-light',
		      9: 'soft-light',
		      10: 'difference',
		      11: 'exclusion',
		      12: 'hue',
		      13: 'saturation',
		      14: 'color',
		      15: 'luminosity'
		    };
		    return function (mode) {
		      return blendModeEnums[mode] || '';
		    };
		  }();

		  function SliderEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }
		  function AngleEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }
		  function ColorEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
		  }
		  function PointEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
		  }
		  function LayerIndexEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }
		  function MaskIndexEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }
		  function CheckboxEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }
		  function NoValueEffect() {
		    this.p = {};
		  }

		  function EffectsManager(data, element) {
		    var effects = data.ef || [];
		    this.effectElements = [];
		    var i;
		    var len = effects.length;
		    var effectItem;
		    for (i = 0; i < len; i += 1) {
		      effectItem = new GroupEffect(effects[i], element);
		      this.effectElements.push(effectItem);
		    }
		  }
		  function GroupEffect(data, element) {
		    this.init(data, element);
		  }
		  extendPrototype([DynamicPropertyContainer], GroupEffect);
		  GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;
		  GroupEffect.prototype.init = function (data, element) {
		    this.data = data;
		    this.effectElements = [];
		    this.initDynamicPropertyContainer(element);
		    var i;
		    var len = this.data.ef.length;
		    var eff;
		    var effects = this.data.ef;
		    for (i = 0; i < len; i += 1) {
		      eff = null;
		      switch (effects[i].ty) {
		        case 0:
		          eff = new SliderEffect(effects[i], element, this);
		          break;
		        case 1:
		          eff = new AngleEffect(effects[i], element, this);
		          break;
		        case 2:
		          eff = new ColorEffect(effects[i], element, this);
		          break;
		        case 3:
		          eff = new PointEffect(effects[i], element, this);
		          break;
		        case 4:
		        case 7:
		          eff = new CheckboxEffect(effects[i], element, this);
		          break;
		        case 10:
		          eff = new LayerIndexEffect(effects[i], element, this);
		          break;
		        case 11:
		          eff = new MaskIndexEffect(effects[i], element, this);
		          break;
		        case 5:
		          eff = new EffectsManager(effects[i], element);
		          break;
		        // case 6:
		        default:
		          eff = new NoValueEffect(effects[i]);
		          break;
		      }
		      if (eff) {
		        this.effectElements.push(eff);
		      }
		    }
		  };

		  function BaseElement() {}
		  BaseElement.prototype = {
		    checkMasks: function checkMasks() {
		      if (!this.data.hasMask) {
		        return false;
		      }
		      var i = 0;
		      var len = this.data.masksProperties.length;
		      while (i < len) {
		        if (this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false) {
		          return true;
		        }
		        i += 1;
		      }
		      return false;
		    },
		    initExpressions: function initExpressions() {
		      {
		        return;
		      }
		    },
		    setBlendMode: function setBlendMode() {
		      var blendModeValue = getBlendMode(this.data.bm);
		      var elem = this.baseElement || this.layerElement;
		      elem.style['mix-blend-mode'] = blendModeValue;
		    },
		    initBaseData: function initBaseData(data, globalData, comp) {
		      this.globalData = globalData;
		      this.comp = comp;
		      this.data = data;
		      this.layerId = createElementID();

		      // Stretch factor for old animations missing this property.
		      if (!this.data.sr) {
		        this.data.sr = 1;
		      }
		      // effects manager
		      this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
		    },
		    getType: function getType() {
		      return this.type;
		    },
		    sourceRectAtTime: function sourceRectAtTime() {}
		  };

		  /**
		   * @file
		   * Handles element's layer frame update.
		   * Checks layer in point and out point
		   *
		   */

		  function FrameElement() {}
		  FrameElement.prototype = {
		    /**
		       * @function
		       * Initializes frame related properties.
		       *
		       */
		    initFrame: function initFrame() {
		      // set to true when inpoint is rendered
		      this._isFirstFrame = false;
		      // list of animated properties
		      this.dynamicProperties = [];
		      // If layer has been modified in current tick this will be true
		      this._mdf = false;
		    },
		    /**
		       * @function
		       * Calculates all dynamic values
		       *
		       * @param {number} num
		       * current frame number in Layer's time
		       * @param {boolean} isVisible
		       * if layers is currently in range
		       *
		       */
		    prepareProperties: function prepareProperties(num, isVisible) {
		      var i;
		      var len = this.dynamicProperties.length;
		      for (i = 0; i < len; i += 1) {
		        if (isVisible || this._isParent && this.dynamicProperties[i].propType === 'transform') {
		          this.dynamicProperties[i].getValue();
		          if (this.dynamicProperties[i]._mdf) {
		            this.globalData._mdf = true;
		            this._mdf = true;
		          }
		        }
		      }
		    },
		    addDynamicProperty: function addDynamicProperty(prop) {
		      if (this.dynamicProperties.indexOf(prop) === -1) {
		        this.dynamicProperties.push(prop);
		      }
		    }
		  };

		  function FootageElement(data, globalData, comp) {
		    this.initFrame();
		    this.initRenderable();
		    this.assetData = globalData.getAssetData(data.refId);
		    this.footageData = globalData.imageLoader.getAsset(this.assetData);
		    this.initBaseData(data, globalData, comp);
		  }
		  FootageElement.prototype.prepareFrame = function () {};
		  extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);
		  FootageElement.prototype.getBaseElement = function () {
		    return null;
		  };
		  FootageElement.prototype.renderFrame = function () {};
		  FootageElement.prototype.destroy = function () {};
		  FootageElement.prototype.initExpressions = function () {
		    {
		      return;
		    }
		  };
		  FootageElement.prototype.getFootageData = function () {
		    return this.footageData;
		  };

		  function AudioElement(data, globalData, comp) {
		    this.initFrame();
		    this.initRenderable();
		    this.assetData = globalData.getAssetData(data.refId);
		    this.initBaseData(data, globalData, comp);
		    this._isPlaying = false;
		    this._canPlay = false;
		    var assetPath = this.globalData.getAssetsPath(this.assetData);
		    this.audio = this.globalData.audioController.createAudio(assetPath);
		    this._currentTime = 0;
		    this.globalData.audioController.addAudio(this);
		    this._volumeMultiplier = 1;
		    this._volume = 1;
		    this._previousVolume = null;
		    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
		      _placeholder: true
		    };
		    this.lv = PropertyFactory.getProp(this, data.au && data.au.lv ? data.au.lv : {
		      k: [100]
		    }, 1, 0.01, this);
		  }
		  AudioElement.prototype.prepareFrame = function (num) {
		    this.prepareRenderableFrame(num, true);
		    this.prepareProperties(num, true);
		    if (!this.tm._placeholder) {
		      var timeRemapped = this.tm.v;
		      this._currentTime = timeRemapped;
		    } else {
		      this._currentTime = num / this.data.sr;
		    }
		    this._volume = this.lv.v[0];
		    var totalVolume = this._volume * this._volumeMultiplier;
		    if (this._previousVolume !== totalVolume) {
		      this._previousVolume = totalVolume;
		      this.audio.volume(totalVolume);
		    }
		  };
		  extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);
		  AudioElement.prototype.renderFrame = function () {
		    if (this.isInRange && this._canPlay) {
		      if (!this._isPlaying) {
		        this.audio.play();
		        this.audio.seek(this._currentTime / this.globalData.frameRate);
		        this._isPlaying = true;
		      } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
		        this.audio.seek(this._currentTime / this.globalData.frameRate);
		      }
		    }
		  };
		  AudioElement.prototype.show = function () {
		    // this.audio.play()
		  };
		  AudioElement.prototype.hide = function () {
		    this.audio.pause();
		    this._isPlaying = false;
		  };
		  AudioElement.prototype.pause = function () {
		    this.audio.pause();
		    this._isPlaying = false;
		    this._canPlay = false;
		  };
		  AudioElement.prototype.resume = function () {
		    this._canPlay = true;
		  };
		  AudioElement.prototype.setRate = function (rateValue) {
		    this.audio.rate(rateValue);
		  };
		  AudioElement.prototype.volume = function (volumeValue) {
		    this._volumeMultiplier = volumeValue;
		    this._previousVolume = volumeValue * this._volume;
		    this.audio.volume(this._previousVolume);
		  };
		  AudioElement.prototype.getBaseElement = function () {
		    return null;
		  };
		  AudioElement.prototype.destroy = function () {};
		  AudioElement.prototype.sourceRectAtTime = function () {};
		  AudioElement.prototype.initExpressions = function () {};

		  function BaseRenderer() {}
		  BaseRenderer.prototype.checkLayers = function (num) {
		    var i;
		    var len = this.layers.length;
		    var data;
		    this.completeLayers = true;
		    for (i = len - 1; i >= 0; i -= 1) {
		      if (!this.elements[i]) {
		        data = this.layers[i];
		        if (data.ip - data.st <= num - this.layers[i].st && data.op - data.st > num - this.layers[i].st) {
		          this.buildItem(i);
		        }
		      }
		      this.completeLayers = this.elements[i] ? this.completeLayers : false;
		    }
		    this.checkPendingElements();
		  };
		  BaseRenderer.prototype.createItem = function (layer) {
		    switch (layer.ty) {
		      case 2:
		        return this.createImage(layer);
		      case 0:
		        return this.createComp(layer);
		      case 1:
		        return this.createSolid(layer);
		      case 3:
		        return this.createNull(layer);
		      case 4:
		        return this.createShape(layer);
		      case 5:
		        return this.createText(layer);
		      case 6:
		        return this.createAudio(layer);
		      case 13:
		        return this.createCamera(layer);
		      case 15:
		        return this.createFootage(layer);
		      default:
		        return this.createNull(layer);
		    }
		  };
		  BaseRenderer.prototype.createCamera = function () {
		    throw new Error('You\'re using a 3d camera. Try the html renderer.');
		  };
		  BaseRenderer.prototype.createAudio = function (data) {
		    return new AudioElement(data, this.globalData, this);
		  };
		  BaseRenderer.prototype.createFootage = function (data) {
		    return new FootageElement(data, this.globalData, this);
		  };
		  BaseRenderer.prototype.buildAllItems = function () {
		    var i;
		    var len = this.layers.length;
		    for (i = 0; i < len; i += 1) {
		      this.buildItem(i);
		    }
		    this.checkPendingElements();
		  };
		  BaseRenderer.prototype.includeLayers = function (newLayers) {
		    this.completeLayers = false;
		    var i;
		    var len = newLayers.length;
		    var j;
		    var jLen = this.layers.length;
		    for (i = 0; i < len; i += 1) {
		      j = 0;
		      while (j < jLen) {
		        if (this.layers[j].id === newLayers[i].id) {
		          this.layers[j] = newLayers[i];
		          break;
		        }
		        j += 1;
		      }
		    }
		  };
		  BaseRenderer.prototype.setProjectInterface = function (pInterface) {
		    this.globalData.projectInterface = pInterface;
		  };
		  BaseRenderer.prototype.initItems = function () {
		    if (!this.globalData.progressiveLoad) {
		      this.buildAllItems();
		    }
		  };
		  BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
		    var elements = this.elements;
		    var layers = this.layers;
		    var i = 0;
		    var len = layers.length;
		    while (i < len) {
		      if (layers[i].ind == parentName) {
		        // eslint-disable-line eqeqeq
		        if (!elements[i] || elements[i] === true) {
		          this.buildItem(i);
		          this.addPendingElement(element);
		        } else {
		          hierarchy.push(elements[i]);
		          elements[i].setAsParent();
		          if (layers[i].parent !== undefined) {
		            this.buildElementParenting(element, layers[i].parent, hierarchy);
		          } else {
		            element.setHierarchy(hierarchy);
		          }
		        }
		      }
		      i += 1;
		    }
		  };
		  BaseRenderer.prototype.addPendingElement = function (element) {
		    this.pendingElements.push(element);
		  };
		  BaseRenderer.prototype.searchExtraCompositions = function (assets) {
		    var i;
		    var len = assets.length;
		    for (i = 0; i < len; i += 1) {
		      if (assets[i].xt) {
		        var comp = this.createComp(assets[i]);
		        comp.initExpressions();
		        this.globalData.projectInterface.registerComposition(comp);
		      }
		    }
		  };
		  BaseRenderer.prototype.getElementById = function (ind) {
		    var i;
		    var len = this.elements.length;
		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i].data.ind === ind) {
		        return this.elements[i];
		      }
		    }
		    return null;
		  };
		  BaseRenderer.prototype.getElementByPath = function (path) {
		    var pathValue = path.shift();
		    var element;
		    if (typeof pathValue === 'number') {
		      element = this.elements[pathValue];
		    } else {
		      var i;
		      var len = this.elements.length;
		      for (i = 0; i < len; i += 1) {
		        if (this.elements[i].data.nm === pathValue) {
		          element = this.elements[i];
		          break;
		        }
		      }
		    }
		    if (path.length === 0) {
		      return element;
		    }
		    return element.getElementByPath(path);
		  };
		  BaseRenderer.prototype.setupGlobalData = function (animData, fontsContainer) {
		    this.globalData.fontManager = new FontManager();
		    this.globalData.slotManager = slotFactory(animData);
		    this.globalData.fontManager.addChars(animData.chars);
		    this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
		    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
		    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
		    this.globalData.imageLoader = this.animationItem.imagePreloader;
		    this.globalData.audioController = this.animationItem.audioController;
		    this.globalData.frameId = 0;
		    this.globalData.frameRate = animData.fr;
		    this.globalData.nm = animData.nm;
		    this.globalData.compSize = {
		      w: animData.w,
		      h: animData.h
		    };
		  };

		  var effectTypes = {
		    TRANSFORM_EFFECT: 'transformEFfect'
		  };

		  function TransformElement() {}
		  TransformElement.prototype = {
		    initTransform: function initTransform() {
		      var mat = new Matrix();
		      this.finalTransform = {
		        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
		          o: 0
		        },
		        _matMdf: false,
		        _localMatMdf: false,
		        _opMdf: false,
		        mat: mat,
		        localMat: mat,
		        localOpacity: 1
		      };
		      if (this.data.ao) {
		        this.finalTransform.mProp.autoOriented = true;
		      }

		      // TODO: check TYPE 11: Guided elements
		      if (this.data.ty !== 11) ;
		    },
		    renderTransform: function renderTransform() {
		      this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
		      this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
		      if (this.hierarchy) {
		        var mat;
		        var finalMat = this.finalTransform.mat;
		        var i = 0;
		        var len = this.hierarchy.length;
		        // Checking if any of the transformation matrices in the hierarchy chain has changed.
		        if (!this.finalTransform._matMdf) {
		          while (i < len) {
		            if (this.hierarchy[i].finalTransform.mProp._mdf) {
		              this.finalTransform._matMdf = true;
		              break;
		            }
		            i += 1;
		          }
		        }
		        if (this.finalTransform._matMdf) {
		          mat = this.finalTransform.mProp.v.props;
		          finalMat.cloneFromProps(mat);
		          for (i = 0; i < len; i += 1) {
		            finalMat.multiply(this.hierarchy[i].finalTransform.mProp.v);
		          }
		        }
		      }
		      if (!this.localTransforms || this.finalTransform._matMdf) {
		        this.finalTransform._localMatMdf = this.finalTransform._matMdf;
		      }
		      if (this.finalTransform._opMdf) {
		        this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
		      }
		    },
		    renderLocalTransform: function renderLocalTransform() {
		      if (this.localTransforms) {
		        var i = 0;
		        var len = this.localTransforms.length;
		        this.finalTransform._localMatMdf = this.finalTransform._matMdf;
		        if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
		          while (i < len) {
		            if (this.localTransforms[i]._mdf) {
		              this.finalTransform._localMatMdf = true;
		            }
		            if (this.localTransforms[i]._opMdf && !this.finalTransform._opMdf) {
		              this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
		              this.finalTransform._opMdf = true;
		            }
		            i += 1;
		          }
		        }
		        if (this.finalTransform._localMatMdf) {
		          var localMat = this.finalTransform.localMat;
		          this.localTransforms[0].matrix.clone(localMat);
		          for (i = 1; i < len; i += 1) {
		            var lmat = this.localTransforms[i].matrix;
		            localMat.multiply(lmat);
		          }
		          localMat.multiply(this.finalTransform.mat);
		        }
		        if (this.finalTransform._opMdf) {
		          var localOp = this.finalTransform.localOpacity;
		          for (i = 0; i < len; i += 1) {
		            localOp *= this.localTransforms[i].opacity * 0.01;
		          }
		          this.finalTransform.localOpacity = localOp;
		        }
		      }
		    },
		    searchEffectTransforms: function searchEffectTransforms() {
		      if (this.renderableEffectsManager) {
		        var transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
		        if (transformEffects.length) {
		          this.localTransforms = [];
		          this.finalTransform.localMat = new Matrix();
		          var i = 0;
		          var len = transformEffects.length;
		          for (i = 0; i < len; i += 1) {
		            this.localTransforms.push(transformEffects[i]);
		          }
		        }
		      }
		    },
		    globalToLocal: function globalToLocal(pt) {
		      var transforms = [];
		      transforms.push(this.finalTransform);
		      var flag = true;
		      var comp = this.comp;
		      while (flag) {
		        if (comp.finalTransform) {
		          if (comp.data.hasMask) {
		            transforms.splice(0, 0, comp.finalTransform);
		          }
		          comp = comp.comp;
		        } else {
		          flag = false;
		        }
		      }
		      var i;
		      var len = transforms.length;
		      var ptNew;
		      for (i = 0; i < len; i += 1) {
		        ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
		        // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
		        pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
		      }
		      return pt;
		    },
		    mHelper: new Matrix()
		  };

		  function MaskElement(data, element, globalData) {
		    this.data = data;
		    this.element = element;
		    this.globalData = globalData;
		    this.storedData = [];
		    this.masksProperties = this.data.masksProperties || [];
		    this.maskElement = null;
		    var defs = this.globalData.defs;
		    var i;
		    var len = this.masksProperties ? this.masksProperties.length : 0;
		    this.viewData = createSizedArray(len);
		    this.solidPath = '';
		    var path;
		    var properties = this.masksProperties;
		    var count = 0;
		    var currentMasks = [];
		    var j;
		    var jLen;
		    var layerId = createElementID();
		    var rect;
		    var expansor;
		    var feMorph;
		    var x;
		    var maskType = 'clipPath';
		    var maskRef = 'clip-path';
		    for (i = 0; i < len; i += 1) {
		      if (properties[i].mode !== 'a' && properties[i].mode !== 'n' || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
		        maskType = 'mask';
		        maskRef = 'mask';
		      }
		      if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
		        rect = createNS('rect');
		        rect.setAttribute('fill', '#ffffff');
		        rect.setAttribute('width', this.element.comp.data.w || 0);
		        rect.setAttribute('height', this.element.comp.data.h || 0);
		        currentMasks.push(rect);
		      } else {
		        rect = null;
		      }
		      path = createNS('path');
		      if (properties[i].mode === 'n') {
		        // TODO move this to a factory or to a constructor
		        this.viewData[i] = {
		          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
		          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
		          elem: path,
		          lastPath: ''
		        };
		        defs.appendChild(path);
		      } else {
		        count += 1;
		        path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
		        path.setAttribute('clip-rule', 'nonzero');
		        var filterID;
		        if (properties[i].x.k !== 0) {
		          maskType = 'mask';
		          maskRef = 'mask';
		          x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
		          filterID = createElementID();
		          expansor = createNS('filter');
		          expansor.setAttribute('id', filterID);
		          feMorph = createNS('feMorphology');
		          feMorph.setAttribute('operator', 'erode');
		          feMorph.setAttribute('in', 'SourceGraphic');
		          feMorph.setAttribute('radius', '0');
		          expansor.appendChild(feMorph);
		          defs.appendChild(expansor);
		          path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
		        } else {
		          feMorph = null;
		          x = null;
		        }

		        // TODO move this to a factory or to a constructor
		        this.storedData[i] = {
		          elem: path,
		          x: x,
		          expan: feMorph,
		          lastPath: '',
		          lastOperator: '',
		          filterId: filterID,
		          lastRadius: 0
		        };
		        if (properties[i].mode === 'i') {
		          jLen = currentMasks.length;
		          var g = createNS('g');
		          for (j = 0; j < jLen; j += 1) {
		            g.appendChild(currentMasks[j]);
		          }
		          var mask = createNS('mask');
		          mask.setAttribute('mask-type', 'alpha');
		          mask.setAttribute('id', layerId + '_' + count);
		          mask.appendChild(path);
		          defs.appendChild(mask);
		          g.setAttribute('mask', 'url(' + getLocationHref() + '#' + layerId + '_' + count + ')');
		          currentMasks.length = 0;
		          currentMasks.push(g);
		        } else {
		          currentMasks.push(path);
		        }
		        if (properties[i].inv && !this.solidPath) {
		          this.solidPath = this.createLayerSolidPath();
		        }
		        // TODO move this to a factory or to a constructor
		        this.viewData[i] = {
		          elem: path,
		          lastPath: '',
		          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
		          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
		          invRect: rect
		        };
		        if (!this.viewData[i].prop.k) {
		          this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
		        }
		      }
		    }
		    this.maskElement = createNS(maskType);
		    len = currentMasks.length;
		    for (i = 0; i < len; i += 1) {
		      this.maskElement.appendChild(currentMasks[i]);
		    }
		    if (count > 0) {
		      this.maskElement.setAttribute('id', layerId);
		      this.element.maskedElement.setAttribute(maskRef, 'url(' + getLocationHref() + '#' + layerId + ')');
		      defs.appendChild(this.maskElement);
		    }
		    if (this.viewData.length) {
		      this.element.addRenderableComponent(this);
		    }
		  }
		  MaskElement.prototype.getMaskProperty = function (pos) {
		    return this.viewData[pos].prop;
		  };
		  MaskElement.prototype.renderFrame = function (isFirstFrame) {
		    var finalMat = this.element.finalTransform.mat;
		    var i;
		    var len = this.masksProperties.length;
		    for (i = 0; i < len; i += 1) {
		      if (this.viewData[i].prop._mdf || isFirstFrame) {
		        this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
		      }
		      if (this.viewData[i].op._mdf || isFirstFrame) {
		        this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
		      }
		      if (this.masksProperties[i].mode !== 'n') {
		        if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
		          this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
		        }
		        if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
		          var feMorph = this.storedData[i].expan;
		          if (this.storedData[i].x.v < 0) {
		            if (this.storedData[i].lastOperator !== 'erode') {
		              this.storedData[i].lastOperator = 'erode';
		              this.storedData[i].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[i].filterId + ')');
		            }
		            feMorph.setAttribute('radius', -this.storedData[i].x.v);
		          } else {
		            if (this.storedData[i].lastOperator !== 'dilate') {
		              this.storedData[i].lastOperator = 'dilate';
		              this.storedData[i].elem.setAttribute('filter', null);
		            }
		            this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
		          }
		        }
		      }
		    }
		  };
		  MaskElement.prototype.getMaskelement = function () {
		    return this.maskElement;
		  };
		  MaskElement.prototype.createLayerSolidPath = function () {
		    var path = 'M0,0 ';
		    path += ' h' + this.globalData.compSize.w;
		    path += ' v' + this.globalData.compSize.h;
		    path += ' h-' + this.globalData.compSize.w;
		    path += ' v-' + this.globalData.compSize.h + ' ';
		    return path;
		  };
		  MaskElement.prototype.drawPath = function (pathData, pathNodes, viewData) {
		    var pathString = ' M' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
		    var i;
		    var len;
		    len = pathNodes._length;
		    for (i = 1; i < len; i += 1) {
		      // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
		      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + ' ' + pathNodes.v[i][0] + ',' + pathNodes.v[i][1];
		    }
		    // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
		    if (pathNodes.c && len > 1) {
		      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + ' ' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
		    }
		    // pathNodes.__renderedString = pathString;

		    if (viewData.lastPath !== pathString) {
		      var pathShapeValue = '';
		      if (viewData.elem) {
		        if (pathNodes.c) {
		          pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
		        }
		        viewData.elem.setAttribute('d', pathShapeValue);
		      }
		      viewData.lastPath = pathString;
		    }
		  };
		  MaskElement.prototype.destroy = function () {
		    this.element = null;
		    this.globalData = null;
		    this.maskElement = null;
		    this.data = null;
		    this.masksProperties = null;
		  };

		  var filtersFactory = function () {
		    var ob = {};
		    ob.createFilter = createFilter;
		    ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;
		    function createFilter(filId, skipCoordinates) {
		      var fil = createNS('filter');
		      fil.setAttribute('id', filId);
		      if (skipCoordinates !== true) {
		        fil.setAttribute('filterUnits', 'objectBoundingBox');
		        fil.setAttribute('x', '0%');
		        fil.setAttribute('y', '0%');
		        fil.setAttribute('width', '100%');
		        fil.setAttribute('height', '100%');
		      }
		      return fil;
		    }
		    function createAlphaToLuminanceFilter() {
		      var feColorMatrix = createNS('feColorMatrix');
		      feColorMatrix.setAttribute('type', 'matrix');
		      feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
		      feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
		      return feColorMatrix;
		    }
		    return ob;
		  }();

		  var featureSupport = function () {
		    var ob = {
		      maskType: true,
		      svgLumaHidden: true,
		      offscreenCanvas: typeof OffscreenCanvas !== 'undefined'
		    };
		    if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
		      ob.maskType = false;
		    }
		    if (/firefox/i.test(navigator.userAgent)) {
		      ob.svgLumaHidden = false;
		    }
		    return ob;
		  }();

		  var registeredEffects = {};
		  var idPrefix = 'filter_result_';
		  function SVGEffects(elem) {
		    var i;
		    var source = 'SourceGraphic';
		    var len = elem.data.ef ? elem.data.ef.length : 0;
		    var filId = createElementID();
		    var fil = filtersFactory.createFilter(filId, true);
		    var count = 0;
		    this.filters = [];
		    var filterManager;
		    for (i = 0; i < len; i += 1) {
		      filterManager = null;
		      var type = elem.data.ef[i].ty;
		      if (registeredEffects[type]) {
		        var Effect = registeredEffects[type].effect;
		        filterManager = new Effect(fil, elem.effectsManager.effectElements[i], elem, idPrefix + count, source);
		        source = idPrefix + count;
		        if (registeredEffects[type].countsAsEffect) {
		          count += 1;
		        }
		      }
		      if (filterManager) {
		        this.filters.push(filterManager);
		      }
		    }
		    if (count) {
		      elem.globalData.defs.appendChild(fil);
		      elem.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
		    }
		    if (this.filters.length) {
		      elem.addRenderableComponent(this);
		    }
		  }
		  SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
		    var i;
		    var len = this.filters.length;
		    for (i = 0; i < len; i += 1) {
		      this.filters[i].renderFrame(_isFirstFrame);
		    }
		  };
		  SVGEffects.prototype.getEffects = function (type) {
		    var i;
		    var len = this.filters.length;
		    var effects = [];
		    for (i = 0; i < len; i += 1) {
		      if (this.filters[i].type === type) {
		        effects.push(this.filters[i]);
		      }
		    }
		    return effects;
		  };

		  function SVGBaseElement() {}
		  SVGBaseElement.prototype = {
		    initRendererElement: function initRendererElement() {
		      this.layerElement = createNS('g');
		    },
		    createContainerElements: function createContainerElements() {
		      this.matteElement = createNS('g');
		      this.transformedElement = this.layerElement;
		      this.maskedElement = this.layerElement;
		      this._sizeChanged = false;
		      var layerElementParent = null;
		      // If this layer acts as a mask for the following layer
		      if (this.data.td) {
		        this.matteMasks = {};
		        var gg = createNS('g');
		        gg.setAttribute('id', this.layerId);
		        gg.appendChild(this.layerElement);
		        layerElementParent = gg;
		        this.globalData.defs.appendChild(gg);
		      } else if (this.data.tt) {
		        this.matteElement.appendChild(this.layerElement);
		        layerElementParent = this.matteElement;
		        this.baseElement = this.matteElement;
		      } else {
		        this.baseElement = this.layerElement;
		      }
		      if (this.data.ln) {
		        this.layerElement.setAttribute('id', this.data.ln);
		      }
		      if (this.data.cl) {
		        this.layerElement.setAttribute('class', this.data.cl);
		      }
		      // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
		      if (this.data.ty === 0 && !this.data.hd) {
		        var cp = createNS('clipPath');
		        var pt = createNS('path');
		        pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
		        var clipId = createElementID();
		        cp.setAttribute('id', clipId);
		        cp.appendChild(pt);
		        this.globalData.defs.appendChild(cp);
		        if (this.checkMasks()) {
		          var cpGroup = createNS('g');
		          cpGroup.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
		          cpGroup.appendChild(this.layerElement);
		          this.transformedElement = cpGroup;
		          if (layerElementParent) {
		            layerElementParent.appendChild(this.transformedElement);
		          } else {
		            this.baseElement = this.transformedElement;
		          }
		        } else {
		          this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
		        }
		      }
		      if (this.data.bm !== 0) {
		        this.setBlendMode();
		      }
		    },
		    renderElement: function renderElement() {
		      if (this.finalTransform._localMatMdf) {
		        this.transformedElement.setAttribute('transform', this.finalTransform.localMat.to2dCSS());
		      }
		      if (this.finalTransform._opMdf) {
		        this.transformedElement.setAttribute('opacity', this.finalTransform.localOpacity);
		      }
		    },
		    destroyBaseElement: function destroyBaseElement() {
		      this.layerElement = null;
		      this.matteElement = null;
		      this.maskManager.destroy();
		    },
		    getBaseElement: function getBaseElement() {
		      if (this.data.hd) {
		        return null;
		      }
		      return this.baseElement;
		    },
		    createRenderableComponents: function createRenderableComponents() {
		      this.maskManager = new MaskElement(this.data, this, this.globalData);
		      this.renderableEffectsManager = new SVGEffects(this);
		      this.searchEffectTransforms();
		    },
		    getMatte: function getMatte(matteType) {
		      // This should not be a common case. But for backward compatibility, we'll create the matte object.
		      // It solves animations that have two consecutive layers marked as matte masks.
		      // Which is an undefined behavior in AE.
		      if (!this.matteMasks) {
		        this.matteMasks = {};
		      }
		      if (!this.matteMasks[matteType]) {
		        var id = this.layerId + '_' + matteType;
		        var filId;
		        var fil;
		        var useElement;
		        var gg;
		        if (matteType === 1 || matteType === 3) {
		          var masker = createNS('mask');
		          masker.setAttribute('id', id);
		          masker.setAttribute('mask-type', matteType === 3 ? 'luminance' : 'alpha');
		          useElement = createNS('use');
		          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
		          masker.appendChild(useElement);
		          this.globalData.defs.appendChild(masker);
		          if (!featureSupport.maskType && matteType === 1) {
		            masker.setAttribute('mask-type', 'luminance');
		            filId = createElementID();
		            fil = filtersFactory.createFilter(filId);
		            this.globalData.defs.appendChild(fil);
		            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
		            gg = createNS('g');
		            gg.appendChild(useElement);
		            masker.appendChild(gg);
		            gg.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
		          }
		        } else if (matteType === 2) {
		          var maskGroup = createNS('mask');
		          maskGroup.setAttribute('id', id);
		          maskGroup.setAttribute('mask-type', 'alpha');
		          var maskGrouper = createNS('g');
		          maskGroup.appendChild(maskGrouper);
		          filId = createElementID();
		          fil = filtersFactory.createFilter(filId);
		          /// /
		          var feCTr = createNS('feComponentTransfer');
		          feCTr.setAttribute('in', 'SourceGraphic');
		          fil.appendChild(feCTr);
		          var feFunc = createNS('feFuncA');
		          feFunc.setAttribute('type', 'table');
		          feFunc.setAttribute('tableValues', '1.0 0.0');
		          feCTr.appendChild(feFunc);
		          /// /
		          this.globalData.defs.appendChild(fil);
		          var alphaRect = createNS('rect');
		          alphaRect.setAttribute('width', this.comp.data.w);
		          alphaRect.setAttribute('height', this.comp.data.h);
		          alphaRect.setAttribute('x', '0');
		          alphaRect.setAttribute('y', '0');
		          alphaRect.setAttribute('fill', '#ffffff');
		          alphaRect.setAttribute('opacity', '0');
		          maskGrouper.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
		          maskGrouper.appendChild(alphaRect);
		          useElement = createNS('use');
		          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
		          maskGrouper.appendChild(useElement);
		          if (!featureSupport.maskType) {
		            maskGroup.setAttribute('mask-type', 'luminance');
		            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
		            gg = createNS('g');
		            maskGrouper.appendChild(alphaRect);
		            gg.appendChild(this.layerElement);
		            maskGrouper.appendChild(gg);
		          }
		          this.globalData.defs.appendChild(maskGroup);
		        }
		        this.matteMasks[matteType] = id;
		      }
		      return this.matteMasks[matteType];
		    },
		    setMatte: function setMatte(id) {
		      if (!this.matteElement) {
		        return;
		      }
		      this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');
		    }
		  };

		  /**
		   * @file
		   * Handles AE's layer parenting property.
		   *
		   */

		  function HierarchyElement() {}
		  HierarchyElement.prototype = {
		    /**
		       * @function
		       * Initializes hierarchy properties
		       *
		       */
		    initHierarchy: function initHierarchy() {
		      // element's parent list
		      this.hierarchy = [];
		      // if element is parent of another layer _isParent will be true
		      this._isParent = false;
		      this.checkParenting();
		    },
		    /**
		       * @function
		       * Sets layer's hierarchy.
		       * @param {array} hierarch
		       * layer's parent list
		       *
		       */
		    setHierarchy: function setHierarchy(hierarchy) {
		      this.hierarchy = hierarchy;
		    },
		    /**
		       * @function
		       * Sets layer as parent.
		       *
		       */
		    setAsParent: function setAsParent() {
		      this._isParent = true;
		    },
		    /**
		       * @function
		       * Searches layer's parenting chain
		       *
		       */
		    checkParenting: function checkParenting() {
		      if (this.data.parent !== undefined) {
		        this.comp.buildElementParenting(this, this.data.parent, []);
		      }
		    }
		  };

		  function RenderableDOMElement() {}
		  (function () {
		    var _prototype = {
		      initElement: function initElement(data, globalData, comp) {
		        this.initFrame();
		        this.initBaseData(data, globalData, comp);
		        this.initTransform(data, globalData, comp);
		        this.initHierarchy();
		        this.initRenderable();
		        this.initRendererElement();
		        this.createContainerElements();
		        this.createRenderableComponents();
		        this.createContent();
		        this.hide();
		      },
		      hide: function hide() {
		        // console.log('HIDE', this);
		        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
		          var elem = this.baseElement || this.layerElement;
		          elem.style.display = 'none';
		          this.hidden = true;
		        }
		      },
		      show: function show() {
		        // console.log('SHOW', this);
		        if (this.isInRange && !this.isTransparent) {
		          if (!this.data.hd) {
		            var elem = this.baseElement || this.layerElement;
		            elem.style.display = 'block';
		          }
		          this.hidden = false;
		          this._isFirstFrame = true;
		        }
		      },
		      renderFrame: function renderFrame() {
		        // If it is exported as hidden (data.hd === true) no need to render
		        // If it is not visible no need to render
		        if (this.data.hd || this.hidden) {
		          return;
		        }
		        this.renderTransform();
		        this.renderRenderable();
		        this.renderLocalTransform();
		        this.renderElement();
		        this.renderInnerContent();
		        if (this._isFirstFrame) {
		          this._isFirstFrame = false;
		        }
		      },
		      renderInnerContent: function renderInnerContent() {},
		      prepareFrame: function prepareFrame(num) {
		        this._mdf = false;
		        this.prepareRenderableFrame(num);
		        this.prepareProperties(num, this.isInRange);
		        this.checkTransparency();
		      },
		      destroy: function destroy() {
		        this.innerElem = null;
		        this.destroyBaseElement();
		      }
		    };
		    extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
		  })();

		  function IImageElement(data, globalData, comp) {
		    this.assetData = globalData.getAssetData(data.refId);
		    if (this.assetData && this.assetData.sid) {
		      this.assetData = globalData.slotManager.getProp(this.assetData);
		    }
		    this.initElement(data, globalData, comp);
		    this.sourceRect = {
		      top: 0,
		      left: 0,
		      width: this.assetData.w,
		      height: this.assetData.h
		    };
		  }
		  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);
		  IImageElement.prototype.createContent = function () {
		    var assetPath = this.globalData.getAssetsPath(this.assetData);
		    this.innerElem = createNS('image');
		    this.innerElem.setAttribute('width', this.assetData.w + 'px');
		    this.innerElem.setAttribute('height', this.assetData.h + 'px');
		    this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
		    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
		    this.layerElement.appendChild(this.innerElem);
		  };
		  IImageElement.prototype.sourceRectAtTime = function () {
		    return this.sourceRect;
		  };

		  function ProcessedElement(element, position) {
		    this.elem = element;
		    this.pos = position;
		  }

		  function IShapeElement() {}
		  IShapeElement.prototype = {
		    addShapeToModifiers: function addShapeToModifiers(data) {
		      var i;
		      var len = this.shapeModifiers.length;
		      for (i = 0; i < len; i += 1) {
		        this.shapeModifiers[i].addShape(data);
		      }
		    },
		    isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(data) {
		      var i = 0;
		      var len = this.shapeModifiers.length;
		      while (i < len) {
		        if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
		          return true;
		        }
		      }
		      return false;
		    },
		    renderModifiers: function renderModifiers() {
		      if (!this.shapeModifiers.length) {
		        return;
		      }
		      var i;
		      var len = this.shapes.length;
		      for (i = 0; i < len; i += 1) {
		        this.shapes[i].sh.reset();
		      }
		      len = this.shapeModifiers.length;
		      var shouldBreakProcess;
		      for (i = len - 1; i >= 0; i -= 1) {
		        shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame);
		        // workaround to fix cases where a repeater resets the shape so the following processes get called twice
		        // TODO: find a better solution for this
		        if (shouldBreakProcess) {
		          break;
		        }
		      }
		    },
		    searchProcessedElement: function searchProcessedElement(elem) {
		      var elements = this.processedElements;
		      var i = 0;
		      var len = elements.length;
		      while (i < len) {
		        if (elements[i].elem === elem) {
		          return elements[i].pos;
		        }
		        i += 1;
		      }
		      return 0;
		    },
		    addProcessedElement: function addProcessedElement(elem, pos) {
		      var elements = this.processedElements;
		      var i = elements.length;
		      while (i) {
		        i -= 1;
		        if (elements[i].elem === elem) {
		          elements[i].pos = pos;
		          return;
		        }
		      }
		      elements.push(new ProcessedElement(elem, pos));
		    },
		    prepareFrame: function prepareFrame(num) {
		      this.prepareRenderableFrame(num);
		      this.prepareProperties(num, this.isInRange);
		    }
		  };

		  var lineCapEnum = {
		    1: 'butt',
		    2: 'round',
		    3: 'square'
		  };
		  var lineJoinEnum = {
		    1: 'miter',
		    2: 'round',
		    3: 'bevel'
		  };

		  function SVGShapeData(transformers, level, shape) {
		    this.caches = [];
		    this.styles = [];
		    this.transformers = transformers;
		    this.lStr = '';
		    this.sh = shape;
		    this.lvl = level;
		    // TODO find if there are some cases where _isAnimated can be false.
		    // For now, since shapes add up with other shapes. They have to be calculated every time.
		    // One way of finding out is checking if all styles associated to this shape depend only of this shape
		    this._isAnimated = !!shape.k;
		    // TODO: commenting this for now since all shapes are animated
		    var i = 0;
		    var len = transformers.length;
		    while (i < len) {
		      if (transformers[i].mProps.dynamicProperties.length) {
		        this._isAnimated = true;
		        break;
		      }
		      i += 1;
		    }
		  }
		  SVGShapeData.prototype.setAsAnimated = function () {
		    this._isAnimated = true;
		  };

		  function SVGStyleData(data, level) {
		    this.data = data;
		    this.type = data.ty;
		    this.d = '';
		    this.lvl = level;
		    this._mdf = false;
		    this.closed = data.hd === true;
		    this.pElem = createNS('path');
		    this.msElem = null;
		  }
		  SVGStyleData.prototype.reset = function () {
		    this.d = '';
		    this._mdf = false;
		  };

		  function DashProperty(elem, data, renderer, container) {
		    this.elem = elem;
		    this.frameId = -1;
		    this.dataProps = createSizedArray(data.length);
		    this.renderer = renderer;
		    this.k = false;
		    this.dashStr = '';
		    this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
		    this.dashoffset = createTypedArray('float32', 1);
		    this.initDynamicPropertyContainer(container);
		    var i;
		    var len = data.length || 0;
		    var prop;
		    for (i = 0; i < len; i += 1) {
		      prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
		      this.k = prop.k || this.k;
		      this.dataProps[i] = {
		        n: data[i].n,
		        p: prop
		      };
		    }
		    if (!this.k) {
		      this.getValue(true);
		    }
		    this._isAnimated = this.k;
		  }
		  DashProperty.prototype.getValue = function (forceRender) {
		    if (this.elem.globalData.frameId === this.frameId && !forceRender) {
		      return;
		    }
		    this.frameId = this.elem.globalData.frameId;
		    this.iterateDynamicProperties();
		    this._mdf = this._mdf || forceRender;
		    if (this._mdf) {
		      var i = 0;
		      var len = this.dataProps.length;
		      if (this.renderer === 'svg') {
		        this.dashStr = '';
		      }
		      for (i = 0; i < len; i += 1) {
		        if (this.dataProps[i].n !== 'o') {
		          if (this.renderer === 'svg') {
		            this.dashStr += ' ' + this.dataProps[i].p.v;
		          } else {
		            this.dashArray[i] = this.dataProps[i].p.v;
		          }
		        } else {
		          this.dashoffset[0] = this.dataProps[i].p.v;
		        }
		      }
		    }
		  };
		  extendPrototype([DynamicPropertyContainer], DashProperty);

		  function SVGStrokeStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
		    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
		    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
		    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
		    this.style = styleOb;
		    this._isAnimated = !!this._isAnimated;
		  }
		  extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

		  function SVGFillStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
		    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
		    this.style = styleOb;
		  }
		  extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

		  function SVGNoStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.style = styleOb;
		  }
		  extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

		  function GradientProperty(elem, data, container) {
		    this.data = data;
		    this.c = createTypedArray('uint8c', data.p * 4);
		    var cLength = data.k.k[0].s ? data.k.k[0].s.length - data.p * 4 : data.k.k.length - data.p * 4;
		    this.o = createTypedArray('float32', cLength);
		    this._cmdf = false;
		    this._omdf = false;
		    this._collapsable = this.checkCollapsable();
		    this._hasOpacity = cLength;
		    this.initDynamicPropertyContainer(container);
		    this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
		    this.k = this.prop.k;
		    this.getValue(true);
		  }
		  GradientProperty.prototype.comparePoints = function (values, points) {
		    var i = 0;
		    var len = this.o.length / 2;
		    var diff;
		    while (i < len) {
		      diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
		      if (diff > 0.01) {
		        return false;
		      }
		      i += 1;
		    }
		    return true;
		  };
		  GradientProperty.prototype.checkCollapsable = function () {
		    if (this.o.length / 2 !== this.c.length / 4) {
		      return false;
		    }
		    if (this.data.k.k[0].s) {
		      var i = 0;
		      var len = this.data.k.k.length;
		      while (i < len) {
		        if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
		          return false;
		        }
		        i += 1;
		      }
		    } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
		      return false;
		    }
		    return true;
		  };
		  GradientProperty.prototype.getValue = function (forceRender) {
		    this.prop.getValue();
		    this._mdf = false;
		    this._cmdf = false;
		    this._omdf = false;
		    if (this.prop._mdf || forceRender) {
		      var i;
		      var len = this.data.p * 4;
		      var mult;
		      var val;
		      for (i = 0; i < len; i += 1) {
		        mult = i % 4 === 0 ? 100 : 255;
		        val = Math.round(this.prop.v[i] * mult);
		        if (this.c[i] !== val) {
		          this.c[i] = val;
		          this._cmdf = !forceRender;
		        }
		      }
		      if (this.o.length) {
		        len = this.prop.v.length;
		        for (i = this.data.p * 4; i < len; i += 1) {
		          mult = i % 2 === 0 ? 100 : 1;
		          val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];
		          if (this.o[i - this.data.p * 4] !== val) {
		            this.o[i - this.data.p * 4] = val;
		            this._omdf = !forceRender;
		          }
		        }
		      }
		      this._mdf = !forceRender;
		    }
		  };
		  extendPrototype([DynamicPropertyContainer], GradientProperty);

		  function SVGGradientFillStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.initGradientData(elem, data, styleOb);
		  }
		  SVGGradientFillStyleData.prototype.initGradientData = function (elem, data, styleOb) {
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
		    this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
		    this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
		    this.h = PropertyFactory.getProp(elem, data.h || {
		      k: 0
		    }, 0, 0.01, this);
		    this.a = PropertyFactory.getProp(elem, data.a || {
		      k: 0
		    }, 0, degToRads, this);
		    this.g = new GradientProperty(elem, data.g, this);
		    this.style = styleOb;
		    this.stops = [];
		    this.setGradientData(styleOb.pElem, data);
		    this.setGradientOpacity(data, styleOb);
		    this._isAnimated = !!this._isAnimated;
		  };
		  SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
		    var gradientId = createElementID();
		    var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
		    gfill.setAttribute('id', gradientId);
		    gfill.setAttribute('spreadMethod', 'pad');
		    gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
		    var stops = [];
		    var stop;
		    var j;
		    var jLen;
		    jLen = data.g.p * 4;
		    for (j = 0; j < jLen; j += 4) {
		      stop = createNS('stop');
		      gfill.appendChild(stop);
		      stops.push(stop);
		    }
		    pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + gradientId + ')');
		    this.gf = gfill;
		    this.cst = stops;
		  };
		  SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
		    if (this.g._hasOpacity && !this.g._collapsable) {
		      var stop;
		      var j;
		      var jLen;
		      var mask = createNS('mask');
		      var maskElement = createNS('path');
		      mask.appendChild(maskElement);
		      var opacityId = createElementID();
		      var maskId = createElementID();
		      mask.setAttribute('id', maskId);
		      var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
		      opFill.setAttribute('id', opacityId);
		      opFill.setAttribute('spreadMethod', 'pad');
		      opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
		      jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
		      var stops = this.stops;
		      for (j = data.g.p * 4; j < jLen; j += 2) {
		        stop = createNS('stop');
		        stop.setAttribute('stop-color', 'rgb(255,255,255)');
		        opFill.appendChild(stop);
		        stops.push(stop);
		      }
		      maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + opacityId + ')');
		      if (data.ty === 'gs') {
		        maskElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
		        maskElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
		        if (data.lj === 1) {
		          maskElement.setAttribute('stroke-miterlimit', data.ml);
		        }
		      }
		      this.of = opFill;
		      this.ms = mask;
		      this.ost = stops;
		      this.maskId = maskId;
		      styleOb.msElem = maskElement;
		    }
		  };
		  extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

		  function SVGGradientStrokeStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
		    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
		    this.initGradientData(elem, data, styleOb);
		    this._isAnimated = !!this._isAnimated;
		  }
		  extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

		  function ShapeGroupData() {
		    this.it = [];
		    this.prevViewData = [];
		    this.gr = createNS('g');
		  }

		  function SVGTransformData(mProps, op, container) {
		    this.transform = {
		      mProps: mProps,
		      op: op,
		      container: container
		    };
		    this.elements = [];
		    this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
		  }

		  var buildShapeString = function buildShapeString(pathNodes, length, closed, mat) {
		    if (length === 0) {
		      return '';
		    }
		    var _o = pathNodes.o;
		    var _i = pathNodes.i;
		    var _v = pathNodes.v;
		    var i;
		    var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
		    for (i = 1; i < length; i += 1) {
		      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
		    }
		    if (closed && length) {
		      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
		      shapeString += 'z';
		    }
		    return shapeString;
		  };

		  var SVGElementsRenderer = function () {
		    var _identityMatrix = new Matrix();
		    var _matrixHelper = new Matrix();
		    var ob = {
		      createRenderFunction: createRenderFunction
		    };
		    function createRenderFunction(data) {
		      switch (data.ty) {
		        case 'fl':
		          return renderFill;
		        case 'gf':
		          return renderGradient;
		        case 'gs':
		          return renderGradientStroke;
		        case 'st':
		          return renderStroke;
		        case 'sh':
		        case 'el':
		        case 'rc':
		        case 'sr':
		          return renderPath;
		        case 'tr':
		          return renderContentTransform;
		        case 'no':
		          return renderNoop;
		        default:
		          return null;
		      }
		    }
		    function renderContentTransform(styleData, itemData, isFirstFrame) {
		      if (isFirstFrame || itemData.transform.op._mdf) {
		        itemData.transform.container.setAttribute('opacity', itemData.transform.op.v);
		      }
		      if (isFirstFrame || itemData.transform.mProps._mdf) {
		        itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS());
		      }
		    }
		    function renderNoop() {}
		    function renderPath(styleData, itemData, isFirstFrame) {
		      var j;
		      var jLen;
		      var pathStringTransformed;
		      var redraw;
		      var pathNodes;
		      var l;
		      var lLen = itemData.styles.length;
		      var lvl = itemData.lvl;
		      var paths;
		      var mat;
		      var iterations;
		      var k;
		      for (l = 0; l < lLen; l += 1) {
		        redraw = itemData.sh._mdf || isFirstFrame;
		        if (itemData.styles[l].lvl < lvl) {
		          mat = _matrixHelper.reset();
		          iterations = lvl - itemData.styles[l].lvl;
		          k = itemData.transformers.length - 1;
		          while (!redraw && iterations > 0) {
		            redraw = itemData.transformers[k].mProps._mdf || redraw;
		            iterations -= 1;
		            k -= 1;
		          }
		          if (redraw) {
		            iterations = lvl - itemData.styles[l].lvl;
		            k = itemData.transformers.length - 1;
		            while (iterations > 0) {
		              mat.multiply(itemData.transformers[k].mProps.v);
		              iterations -= 1;
		              k -= 1;
		            }
		          }
		        } else {
		          mat = _identityMatrix;
		        }
		        paths = itemData.sh.paths;
		        jLen = paths._length;
		        if (redraw) {
		          pathStringTransformed = '';
		          for (j = 0; j < jLen; j += 1) {
		            pathNodes = paths.shapes[j];
		            if (pathNodes && pathNodes._length) {
		              pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
		            }
		          }
		          itemData.caches[l] = pathStringTransformed;
		        } else {
		          pathStringTransformed = itemData.caches[l];
		        }
		        itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
		        itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
		      }
		    }
		    function renderFill(styleData, itemData, isFirstFrame) {
		      var styleElem = itemData.style;
		      if (itemData.c._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('fill', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
		      }
		      if (itemData.o._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('fill-opacity', itemData.o.v);
		      }
		    }
		    function renderGradientStroke(styleData, itemData, isFirstFrame) {
		      renderGradient(styleData, itemData, isFirstFrame);
		      renderStroke(styleData, itemData, isFirstFrame);
		    }
		    function renderGradient(styleData, itemData, isFirstFrame) {
		      var gfill = itemData.gf;
		      var hasOpacity = itemData.g._hasOpacity;
		      var pt1 = itemData.s.v;
		      var pt2 = itemData.e.v;
		      if (itemData.o._mdf || isFirstFrame) {
		        var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
		        itemData.style.pElem.setAttribute(attr, itemData.o.v);
		      }
		      if (itemData.s._mdf || isFirstFrame) {
		        var attr1 = styleData.t === 1 ? 'x1' : 'cx';
		        var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
		        gfill.setAttribute(attr1, pt1[0]);
		        gfill.setAttribute(attr2, pt1[1]);
		        if (hasOpacity && !itemData.g._collapsable) {
		          itemData.of.setAttribute(attr1, pt1[0]);
		          itemData.of.setAttribute(attr2, pt1[1]);
		        }
		      }
		      var stops;
		      var i;
		      var len;
		      var stop;
		      if (itemData.g._cmdf || isFirstFrame) {
		        stops = itemData.cst;
		        var cValues = itemData.g.c;
		        len = stops.length;
		        for (i = 0; i < len; i += 1) {
		          stop = stops[i];
		          stop.setAttribute('offset', cValues[i * 4] + '%');
		          stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
		        }
		      }
		      if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
		        var oValues = itemData.g.o;
		        if (itemData.g._collapsable) {
		          stops = itemData.cst;
		        } else {
		          stops = itemData.ost;
		        }
		        len = stops.length;
		        for (i = 0; i < len; i += 1) {
		          stop = stops[i];
		          if (!itemData.g._collapsable) {
		            stop.setAttribute('offset', oValues[i * 2] + '%');
		          }
		          stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
		        }
		      }
		      if (styleData.t === 1) {
		        if (itemData.e._mdf || isFirstFrame) {
		          gfill.setAttribute('x2', pt2[0]);
		          gfill.setAttribute('y2', pt2[1]);
		          if (hasOpacity && !itemData.g._collapsable) {
		            itemData.of.setAttribute('x2', pt2[0]);
		            itemData.of.setAttribute('y2', pt2[1]);
		          }
		        }
		      } else {
		        var rad;
		        if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
		          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
		          gfill.setAttribute('r', rad);
		          if (hasOpacity && !itemData.g._collapsable) {
		            itemData.of.setAttribute('r', rad);
		          }
		        }
		        if (itemData.s._mdf || itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
		          if (!rad) {
		            rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
		          }
		          var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
		          var percent = itemData.h.v;
		          if (percent >= 1) {
		            percent = 0.99;
		          } else if (percent <= -1) {
		            percent = -0.99;
		          }
		          var dist = rad * percent;
		          var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
		          var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
		          gfill.setAttribute('fx', x);
		          gfill.setAttribute('fy', y);
		          if (hasOpacity && !itemData.g._collapsable) {
		            itemData.of.setAttribute('fx', x);
		            itemData.of.setAttribute('fy', y);
		          }
		        }
		        // gfill.setAttribute('fy','200');
		      }
		    }
		    function renderStroke(styleData, itemData, isFirstFrame) {
		      var styleElem = itemData.style;
		      var d = itemData.d;
		      if (d && (d._mdf || isFirstFrame) && d.dashStr) {
		        styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
		        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
		      }
		      if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
		        styleElem.pElem.setAttribute('stroke', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
		      }
		      if (itemData.o._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
		      }
		      if (itemData.w._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('stroke-width', itemData.w.v);
		        if (styleElem.msElem) {
		          styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
		        }
		      }
		    }
		    return ob;
		  }();

		  function SVGShapeElement(data, globalData, comp) {
		    // List of drawable elements
		    this.shapes = [];
		    // Full shape data
		    this.shapesData = data.shapes;
		    // List of styles that will be applied to shapes
		    this.stylesList = [];
		    // List of modifiers that will be applied to shapes
		    this.shapeModifiers = [];
		    // List of items in shape tree
		    this.itemsData = [];
		    // List of items in previous shape tree
		    this.processedElements = [];
		    // List of animated components
		    this.animatedContents = [];
		    this.initElement(data, globalData, comp);
		    // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
		    // List of elements that have been created
		    this.prevViewData = [];
		    // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
		  }
		  extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);
		  SVGShapeElement.prototype.initSecondaryElement = function () {};
		  SVGShapeElement.prototype.identityMatrix = new Matrix();
		  SVGShapeElement.prototype.buildExpressionInterface = function () {};
		  SVGShapeElement.prototype.createContent = function () {
		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
		    this.filterUniqueShapes();
		  };

		  /*
		  This method searches for multiple shapes that affect a single element and one of them is animated
		  */
		  SVGShapeElement.prototype.filterUniqueShapes = function () {
		    var i;
		    var len = this.shapes.length;
		    var shape;
		    var j;
		    var jLen = this.stylesList.length;
		    var style;
		    var tempShapes = [];
		    var areAnimated = false;
		    for (j = 0; j < jLen; j += 1) {
		      style = this.stylesList[j];
		      areAnimated = false;
		      tempShapes.length = 0;
		      for (i = 0; i < len; i += 1) {
		        shape = this.shapes[i];
		        if (shape.styles.indexOf(style) !== -1) {
		          tempShapes.push(shape);
		          areAnimated = shape._isAnimated || areAnimated;
		        }
		      }
		      if (tempShapes.length > 1 && areAnimated) {
		        this.setShapesAsAnimated(tempShapes);
		      }
		    }
		  };
		  SVGShapeElement.prototype.setShapesAsAnimated = function (shapes) {
		    var i;
		    var len = shapes.length;
		    for (i = 0; i < len; i += 1) {
		      shapes[i].setAsAnimated();
		    }
		  };
		  SVGShapeElement.prototype.createStyleElement = function (data, level) {
		    // TODO: prevent drawing of hidden styles
		    var elementData;
		    var styleOb = new SVGStyleData(data, level);
		    var pathElement = styleOb.pElem;
		    if (data.ty === 'st') {
		      elementData = new SVGStrokeStyleData(this, data, styleOb);
		    } else if (data.ty === 'fl') {
		      elementData = new SVGFillStyleData(this, data, styleOb);
		    } else if (data.ty === 'gf' || data.ty === 'gs') {
		      var GradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
		      elementData = new GradientConstructor(this, data, styleOb);
		      this.globalData.defs.appendChild(elementData.gf);
		      if (elementData.maskId) {
		        this.globalData.defs.appendChild(elementData.ms);
		        this.globalData.defs.appendChild(elementData.of);
		        pathElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + elementData.maskId + ')');
		      }
		    } else if (data.ty === 'no') {
		      elementData = new SVGNoStyleData(this, data, styleOb);
		    }
		    if (data.ty === 'st' || data.ty === 'gs') {
		      pathElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
		      pathElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
		      pathElement.setAttribute('fill-opacity', '0');
		      if (data.lj === 1) {
		        pathElement.setAttribute('stroke-miterlimit', data.ml);
		      }
		    }
		    if (data.r === 2) {
		      pathElement.setAttribute('fill-rule', 'evenodd');
		    }
		    if (data.ln) {
		      pathElement.setAttribute('id', data.ln);
		    }
		    if (data.cl) {
		      pathElement.setAttribute('class', data.cl);
		    }
		    if (data.bm) {
		      pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
		    }
		    this.stylesList.push(styleOb);
		    this.addToAnimatedContents(data, elementData);
		    return elementData;
		  };
		  SVGShapeElement.prototype.createGroupElement = function (data) {
		    var elementData = new ShapeGroupData();
		    if (data.ln) {
		      elementData.gr.setAttribute('id', data.ln);
		    }
		    if (data.cl) {
		      elementData.gr.setAttribute('class', data.cl);
		    }
		    if (data.bm) {
		      elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
		    }
		    return elementData;
		  };
		  SVGShapeElement.prototype.createTransformElement = function (data, container) {
		    var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
		    var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
		    this.addToAnimatedContents(data, elementData);
		    return elementData;
		  };
		  SVGShapeElement.prototype.createShapeElement = function (data, ownTransformers, level) {
		    var ty = 4;
		    if (data.ty === 'rc') {
		      ty = 5;
		    } else if (data.ty === 'el') {
		      ty = 6;
		    } else if (data.ty === 'sr') {
		      ty = 7;
		    }
		    var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
		    var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
		    this.shapes.push(elementData);
		    this.addShapeToModifiers(elementData);
		    this.addToAnimatedContents(data, elementData);
		    return elementData;
		  };
		  SVGShapeElement.prototype.addToAnimatedContents = function (data, element) {
		    var i = 0;
		    var len = this.animatedContents.length;
		    while (i < len) {
		      if (this.animatedContents[i].element === element) {
		        return;
		      }
		      i += 1;
		    }
		    this.animatedContents.push({
		      fn: SVGElementsRenderer.createRenderFunction(data),
		      element: element,
		      data: data
		    });
		  };
		  SVGShapeElement.prototype.setElementStyles = function (elementData) {
		    var arr = elementData.styles;
		    var j;
		    var jLen = this.stylesList.length;
		    for (j = 0; j < jLen; j += 1) {
		      if (arr.indexOf(this.stylesList[j]) === -1 && !this.stylesList[j].closed) {
		        arr.push(this.stylesList[j]);
		      }
		    }
		  };
		  SVGShapeElement.prototype.reloadShapes = function () {
		    this._isFirstFrame = true;
		    var i;
		    var len = this.itemsData.length;
		    for (i = 0; i < len; i += 1) {
		      this.prevViewData[i] = this.itemsData[i];
		    }
		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
		    this.filterUniqueShapes();
		    len = this.dynamicProperties.length;
		    for (i = 0; i < len; i += 1) {
		      this.dynamicProperties[i].getValue();
		    }
		    this.renderModifiers();
		  };
		  SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
		    var ownTransformers = [].concat(transformers);
		    var i;
		    var len = arr.length - 1;
		    var j;
		    var jLen;
		    var ownStyles = [];
		    var ownModifiers = [];
		    var currentTransform;
		    var modifier;
		    var processedPos;
		    for (i = len; i >= 0; i -= 1) {
		      processedPos = this.searchProcessedElement(arr[i]);
		      if (!processedPos) {
		        arr[i]._render = render;
		      } else {
		        itemsData[i] = prevViewData[processedPos - 1];
		      }
		      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs' || arr[i].ty === 'no') {
		        if (!processedPos) {
		          itemsData[i] = this.createStyleElement(arr[i], level);
		        } else {
		          itemsData[i].style.closed = arr[i].hd;
		        }
		        if (arr[i]._render) {
		          if (itemsData[i].style.pElem.parentNode !== container) {
		            container.appendChild(itemsData[i].style.pElem);
		          }
		        }
		        ownStyles.push(itemsData[i].style);
		      } else if (arr[i].ty === 'gr') {
		        if (!processedPos) {
		          itemsData[i] = this.createGroupElement(arr[i]);
		        } else {
		          jLen = itemsData[i].it.length;
		          for (j = 0; j < jLen; j += 1) {
		            itemsData[i].prevViewData[j] = itemsData[i].it[j];
		          }
		        }
		        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);
		        if (arr[i]._render) {
		          if (itemsData[i].gr.parentNode !== container) {
		            container.appendChild(itemsData[i].gr);
		          }
		        }
		      } else if (arr[i].ty === 'tr') {
		        if (!processedPos) {
		          itemsData[i] = this.createTransformElement(arr[i], container);
		        }
		        currentTransform = itemsData[i].transform;
		        ownTransformers.push(currentTransform);
		      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
		        if (!processedPos) {
		          itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
		        }
		        this.setElementStyles(itemsData[i]);
		      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
		        if (!processedPos) {
		          modifier = ShapeModifiers.getModifier(arr[i].ty);
		          modifier.init(this, arr[i]);
		          itemsData[i] = modifier;
		          this.shapeModifiers.push(modifier);
		        } else {
		          modifier = itemsData[i];
		          modifier.closed = false;
		        }
		        ownModifiers.push(modifier);
		      } else if (arr[i].ty === 'rp') {
		        if (!processedPos) {
		          modifier = ShapeModifiers.getModifier(arr[i].ty);
		          itemsData[i] = modifier;
		          modifier.init(this, arr, i, itemsData);
		          this.shapeModifiers.push(modifier);
		          render = false;
		        } else {
		          modifier = itemsData[i];
		          modifier.closed = true;
		        }
		        ownModifiers.push(modifier);
		      }
		      this.addProcessedElement(arr[i], i + 1);
		    }
		    len = ownStyles.length;
		    for (i = 0; i < len; i += 1) {
		      ownStyles[i].closed = true;
		    }
		    len = ownModifiers.length;
		    for (i = 0; i < len; i += 1) {
		      ownModifiers[i].closed = true;
		    }
		  };
		  SVGShapeElement.prototype.renderInnerContent = function () {
		    this.renderModifiers();
		    var i;
		    var len = this.stylesList.length;
		    for (i = 0; i < len; i += 1) {
		      this.stylesList[i].reset();
		    }
		    this.renderShape();
		    for (i = 0; i < len; i += 1) {
		      if (this.stylesList[i]._mdf || this._isFirstFrame) {
		        if (this.stylesList[i].msElem) {
		          this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
		          // Adding M0 0 fixes same mask bug on all browsers
		          this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
		        }
		        this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
		      }
		    }
		  };
		  SVGShapeElement.prototype.renderShape = function () {
		    var i;
		    var len = this.animatedContents.length;
		    var animatedContent;
		    for (i = 0; i < len; i += 1) {
		      animatedContent = this.animatedContents[i];
		      if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
		        animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
		      }
		    }
		  };
		  SVGShapeElement.prototype.destroy = function () {
		    this.destroyBaseElement();
		    this.shapesData = null;
		    this.itemsData = null;
		  };

		  function LetterProps(o, sw, sc, fc, m, p) {
		    this.o = o;
		    this.sw = sw;
		    this.sc = sc;
		    this.fc = fc;
		    this.m = m;
		    this.p = p;
		    this._mdf = {
		      o: true,
		      sw: !!sw,
		      sc: !!sc,
		      fc: !!fc,
		      m: true,
		      p: true
		    };
		  }
		  LetterProps.prototype.update = function (o, sw, sc, fc, m, p) {
		    this._mdf.o = false;
		    this._mdf.sw = false;
		    this._mdf.sc = false;
		    this._mdf.fc = false;
		    this._mdf.m = false;
		    this._mdf.p = false;
		    var updated = false;
		    if (this.o !== o) {
		      this.o = o;
		      this._mdf.o = true;
		      updated = true;
		    }
		    if (this.sw !== sw) {
		      this.sw = sw;
		      this._mdf.sw = true;
		      updated = true;
		    }
		    if (this.sc !== sc) {
		      this.sc = sc;
		      this._mdf.sc = true;
		      updated = true;
		    }
		    if (this.fc !== fc) {
		      this.fc = fc;
		      this._mdf.fc = true;
		      updated = true;
		    }
		    if (this.m !== m) {
		      this.m = m;
		      this._mdf.m = true;
		      updated = true;
		    }
		    if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
		      this.p = p;
		      this._mdf.p = true;
		      updated = true;
		    }
		    return updated;
		  };

		  function TextProperty(elem, data) {
		    this._frameId = initialDefaultFrame;
		    this.pv = '';
		    this.v = '';
		    this.kf = false;
		    this._isFirstFrame = true;
		    this._mdf = false;
		    if (data.d && data.d.sid) {
		      data.d = elem.globalData.slotManager.getProp(data.d);
		    }
		    this.data = data;
		    this.elem = elem;
		    this.comp = this.elem.comp;
		    this.keysIndex = 0;
		    this.canResize = false;
		    this.minimumFontSize = 1;
		    this.effectsSequence = [];
		    this.currentData = {
		      ascent: 0,
		      boxWidth: this.defaultBoxWidth,
		      f: '',
		      fStyle: '',
		      fWeight: '',
		      fc: '',
		      j: '',
		      justifyOffset: '',
		      l: [],
		      lh: 0,
		      lineWidths: [],
		      ls: '',
		      of: '',
		      s: '',
		      sc: '',
		      sw: 0,
		      t: 0,
		      tr: 0,
		      sz: 0,
		      ps: null,
		      fillColorAnim: false,
		      strokeColorAnim: false,
		      strokeWidthAnim: false,
		      yOffset: 0,
		      finalSize: 0,
		      finalText: [],
		      finalLineHeight: 0,
		      __complete: false
		    };
		    this.copyData(this.currentData, this.data.d.k[0].s);
		    if (!this.searchProperty()) {
		      this.completeTextData(this.currentData);
		    }
		  }
		  TextProperty.prototype.defaultBoxWidth = [0, 0];
		  TextProperty.prototype.copyData = function (obj, data) {
		    for (var s in data) {
		      if (Object.prototype.hasOwnProperty.call(data, s)) {
		        obj[s] = data[s];
		      }
		    }
		    return obj;
		  };
		  TextProperty.prototype.setCurrentData = function (data) {
		    if (!data.__complete) {
		      this.completeTextData(data);
		    }
		    this.currentData = data;
		    this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
		    this._mdf = true;
		  };
		  TextProperty.prototype.searchProperty = function () {
		    return this.searchKeyframes();
		  };
		  TextProperty.prototype.searchKeyframes = function () {
		    this.kf = this.data.d.k.length > 1;
		    if (this.kf) {
		      this.addEffect(this.getKeyframeValue.bind(this));
		    }
		    return this.kf;
		  };
		  TextProperty.prototype.addEffect = function (effectFunction) {
		    this.effectsSequence.push(effectFunction);
		    this.elem.addDynamicProperty(this);
		  };
		  TextProperty.prototype.getValue = function (_finalValue) {
		    if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
		      return;
		    }
		    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
		    var currentValue = this.currentData;
		    var currentIndex = this.keysIndex;
		    if (this.lock) {
		      this.setCurrentData(this.currentData);
		      return;
		    }
		    this.lock = true;
		    this._mdf = false;
		    var i;
		    var len = this.effectsSequence.length;
		    var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
		    for (i = 0; i < len; i += 1) {
		      // Checking if index changed to prevent creating a new object every time the expression updates.
		      if (currentIndex !== this.keysIndex) {
		        finalValue = this.effectsSequence[i](finalValue, finalValue.t);
		      } else {
		        finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
		      }
		    }
		    if (currentValue !== finalValue) {
		      this.setCurrentData(finalValue);
		    }
		    this.v = this.currentData;
		    this.pv = this.v;
		    this.lock = false;
		    this.frameId = this.elem.globalData.frameId;
		  };
		  TextProperty.prototype.getKeyframeValue = function () {
		    var textKeys = this.data.d.k;
		    var frameNum = this.elem.comp.renderedFrame;
		    var i = 0;
		    var len = textKeys.length;
		    while (i <= len - 1) {
		      if (i === len - 1 || textKeys[i + 1].t > frameNum) {
		        break;
		      }
		      i += 1;
		    }
		    if (this.keysIndex !== i) {
		      this.keysIndex = i;
		    }
		    return this.data.d.k[this.keysIndex].s;
		  };
		  TextProperty.prototype.buildFinalText = function (text) {
		    var charactersArray = [];
		    var i = 0;
		    var len = text.length;
		    var charCode;
		    var secondCharCode;
		    var shouldCombine = false;
		    var shouldCombineNext = false;
		    var currentChars = '';
		    while (i < len) {
		      shouldCombine = shouldCombineNext;
		      shouldCombineNext = false;
		      charCode = text.charCodeAt(i);
		      currentChars = text.charAt(i);
		      if (FontManager.isCombinedCharacter(charCode)) {
		        shouldCombine = true;
		        // It's a potential surrogate pair (this is the High surrogate)
		      } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
		        if (FontManager.isRegionalFlag(text, i)) {
		          currentChars = text.substr(i, 14);
		        } else {
		          secondCharCode = text.charCodeAt(i + 1);
		          // It's a surrogate pair (this is the Low surrogate)
		          if (secondCharCode >= 0xDC00 && secondCharCode <= 0xDFFF) {
		            if (FontManager.isModifier(charCode, secondCharCode)) {
		              currentChars = text.substr(i, 2);
		              shouldCombine = true;
		            } else if (FontManager.isFlagEmoji(text.substr(i, 4))) {
		              currentChars = text.substr(i, 4);
		            } else {
		              currentChars = text.substr(i, 2);
		            }
		          }
		        }
		      } else if (charCode > 0xDBFF) {
		        secondCharCode = text.charCodeAt(i + 1);
		        if (FontManager.isVariationSelector(charCode)) {
		          shouldCombine = true;
		        }
		      } else if (FontManager.isZeroWidthJoiner(charCode)) {
		        shouldCombine = true;
		        shouldCombineNext = true;
		      }
		      if (shouldCombine) {
		        charactersArray[charactersArray.length - 1] += currentChars;
		        shouldCombine = false;
		      } else {
		        charactersArray.push(currentChars);
		      }
		      i += currentChars.length;
		    }
		    return charactersArray;
		  };
		  TextProperty.prototype.completeTextData = function (documentData) {
		    documentData.__complete = true;
		    var fontManager = this.elem.globalData.fontManager;
		    var data = this.data;
		    var letters = [];
		    var i;
		    var len;
		    var newLineFlag;
		    var index = 0;
		    var val;
		    var anchorGrouping = data.m.g;
		    var currentSize = 0;
		    var currentPos = 0;
		    var currentLine = 0;
		    var lineWidths = [];
		    var lineWidth = 0;
		    var maxLineWidth = 0;
		    var j;
		    var jLen;
		    var fontData = fontManager.getFontByName(documentData.f);
		    var charData;
		    var cLength = 0;
		    var fontProps = getFontProperties(fontData);
		    documentData.fWeight = fontProps.weight;
		    documentData.fStyle = fontProps.style;
		    documentData.finalSize = documentData.s;
		    documentData.finalText = this.buildFinalText(documentData.t);
		    len = documentData.finalText.length;
		    documentData.finalLineHeight = documentData.lh;
		    var trackingOffset = documentData.tr / 1000 * documentData.finalSize;
		    var charCode;
		    if (documentData.sz) {
		      var flag = true;
		      var boxWidth = documentData.sz[0];
		      var boxHeight = documentData.sz[1];
		      var currentHeight;
		      var finalText;
		      while (flag) {
		        finalText = this.buildFinalText(documentData.t);
		        currentHeight = 0;
		        lineWidth = 0;
		        len = finalText.length;
		        trackingOffset = documentData.tr / 1000 * documentData.finalSize;
		        var lastSpaceIndex = -1;
		        for (i = 0; i < len; i += 1) {
		          charCode = finalText[i].charCodeAt(0);
		          newLineFlag = false;
		          if (finalText[i] === ' ') {
		            lastSpaceIndex = i;
		          } else if (charCode === 13 || charCode === 3) {
		            lineWidth = 0;
		            newLineFlag = true;
		            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
		          }
		          if (fontManager.chars) {
		            charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
		            cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
		          } else {
		            // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
		            cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
		          }
		          if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
		            if (lastSpaceIndex === -1) {
		              len += 1;
		            } else {
		              i = lastSpaceIndex;
		            }
		            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
		            finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r');
		            // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
		            lastSpaceIndex = -1;
		            lineWidth = 0;
		          } else {
		            lineWidth += cLength;
		            lineWidth += trackingOffset;
		          }
		        }
		        currentHeight += fontData.ascent * documentData.finalSize / 100;
		        if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
		          documentData.finalSize -= 1;
		          documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
		        } else {
		          documentData.finalText = finalText;
		          len = documentData.finalText.length;
		          flag = false;
		        }
		      }
		    }
		    lineWidth = -trackingOffset;
		    cLength = 0;
		    var uncollapsedSpaces = 0;
		    var currentChar;
		    for (i = 0; i < len; i += 1) {
		      newLineFlag = false;
		      currentChar = documentData.finalText[i];
		      charCode = currentChar.charCodeAt(0);
		      if (charCode === 13 || charCode === 3) {
		        uncollapsedSpaces = 0;
		        lineWidths.push(lineWidth);
		        maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
		        lineWidth = -2 * trackingOffset;
		        val = '';
		        newLineFlag = true;
		        currentLine += 1;
		      } else {
		        val = currentChar;
		      }
		      if (fontManager.chars) {
		        charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
		        cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
		      } else {
		        // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
		        // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
		        cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
		      }

		      //
		      if (currentChar === ' ') {
		        uncollapsedSpaces += cLength + trackingOffset;
		      } else {
		        lineWidth += cLength + trackingOffset + uncollapsedSpaces;
		        uncollapsedSpaces = 0;
		      }
		      letters.push({
		        l: cLength,
		        an: cLength,
		        add: currentSize,
		        n: newLineFlag,
		        anIndexes: [],
		        val: val,
		        line: currentLine,
		        animatorJustifyOffset: 0
		      });
		      if (anchorGrouping == 2) {
		        // eslint-disable-line eqeqeq
		        currentSize += cLength;
		        if (val === '' || val === ' ' || i === len - 1) {
		          if (val === '' || val === ' ') {
		            currentSize -= cLength;
		          }
		          while (currentPos <= i) {
		            letters[currentPos].an = currentSize;
		            letters[currentPos].ind = index;
		            letters[currentPos].extra = cLength;
		            currentPos += 1;
		          }
		          index += 1;
		          currentSize = 0;
		        }
		      } else if (anchorGrouping == 3) {
		        // eslint-disable-line eqeqeq
		        currentSize += cLength;
		        if (val === '' || i === len - 1) {
		          if (val === '') {
		            currentSize -= cLength;
		          }
		          while (currentPos <= i) {
		            letters[currentPos].an = currentSize;
		            letters[currentPos].ind = index;
		            letters[currentPos].extra = cLength;
		            currentPos += 1;
		          }
		          currentSize = 0;
		          index += 1;
		        }
		      } else {
		        letters[index].ind = index;
		        letters[index].extra = 0;
		        index += 1;
		      }
		    }
		    documentData.l = letters;
		    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
		    lineWidths.push(lineWidth);
		    if (documentData.sz) {
		      documentData.boxWidth = documentData.sz[0];
		      documentData.justifyOffset = 0;
		    } else {
		      documentData.boxWidth = maxLineWidth;
		      switch (documentData.j) {
		        case 1:
		          documentData.justifyOffset = -documentData.boxWidth;
		          break;
		        case 2:
		          documentData.justifyOffset = -documentData.boxWidth / 2;
		          break;
		        default:
		          documentData.justifyOffset = 0;
		      }
		    }
		    documentData.lineWidths = lineWidths;
		    var animators = data.a;
		    var animatorData;
		    var letterData;
		    jLen = animators.length;
		    var based;
		    var ind;
		    var indexes = [];
		    for (j = 0; j < jLen; j += 1) {
		      animatorData = animators[j];
		      if (animatorData.a.sc) {
		        documentData.strokeColorAnim = true;
		      }
		      if (animatorData.a.sw) {
		        documentData.strokeWidthAnim = true;
		      }
		      if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
		        documentData.fillColorAnim = true;
		      }
		      ind = 0;
		      based = animatorData.s.b;
		      for (i = 0; i < len; i += 1) {
		        letterData = letters[i];
		        letterData.anIndexes[j] = ind;
		        if (based == 1 && letterData.val !== '' || based == 2 && letterData.val !== '' && letterData.val !== ' ' || based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1) || based == 4 && (letterData.n || i == len - 1)) {
		          // eslint-disable-line eqeqeq
		          if (animatorData.s.rn === 1) {
		            indexes.push(ind);
		          }
		          ind += 1;
		        }
		      }
		      data.a[j].s.totalChars = ind;
		      var currentInd = -1;
		      var newInd;
		      if (animatorData.s.rn === 1) {
		        for (i = 0; i < len; i += 1) {
		          letterData = letters[i];
		          if (currentInd != letterData.anIndexes[j]) {
		            // eslint-disable-line eqeqeq
		            currentInd = letterData.anIndexes[j];
		            newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
		          }
		          letterData.anIndexes[j] = newInd;
		        }
		      }
		    }
		    documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
		    documentData.ls = documentData.ls || 0;
		    documentData.ascent = fontData.ascent * documentData.finalSize / 100;
		  };
		  TextProperty.prototype.updateDocumentData = function (newData, index) {
		    index = index === undefined ? this.keysIndex : index;
		    var dData = this.copyData({}, this.data.d.k[index].s);
		    dData = this.copyData(dData, newData);
		    this.data.d.k[index].s = dData;
		    this.recalculate(index);
		    this.setCurrentData(dData);
		    this.elem.addDynamicProperty(this);
		  };
		  TextProperty.prototype.recalculate = function (index) {
		    var dData = this.data.d.k[index].s;
		    dData.__complete = false;
		    this.keysIndex = 0;
		    this._isFirstFrame = true;
		    this.getValue(dData);
		  };
		  TextProperty.prototype.canResizeFont = function (_canResize) {
		    this.canResize = _canResize;
		    this.recalculate(this.keysIndex);
		    this.elem.addDynamicProperty(this);
		  };
		  TextProperty.prototype.setMinimumFontSize = function (_fontValue) {
		    this.minimumFontSize = Math.floor(_fontValue) || 1;
		    this.recalculate(this.keysIndex);
		    this.elem.addDynamicProperty(this);
		  };

		  var TextSelectorProp = function () {
		    var max = Math.max;
		    var min = Math.min;
		    var floor = Math.floor;
		    function TextSelectorPropFactory(elem, data) {
		      this._currentTextLength = -1;
		      this.k = false;
		      this.data = data;
		      this.elem = elem;
		      this.comp = elem.comp;
		      this.finalS = 0;
		      this.finalE = 0;
		      this.initDynamicPropertyContainer(elem);
		      this.s = PropertyFactory.getProp(elem, data.s || {
		        k: 0
		      }, 0, 0, this);
		      if ('e' in data) {
		        this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this);
		      } else {
		        this.e = {
		          v: 100
		        };
		      }
		      this.o = PropertyFactory.getProp(elem, data.o || {
		        k: 0
		      }, 0, 0, this);
		      this.xe = PropertyFactory.getProp(elem, data.xe || {
		        k: 0
		      }, 0, 0, this);
		      this.ne = PropertyFactory.getProp(elem, data.ne || {
		        k: 0
		      }, 0, 0, this);
		      this.sm = PropertyFactory.getProp(elem, data.sm || {
		        k: 100
		      }, 0, 0, this);
		      this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);
		      if (!this.dynamicProperties.length) {
		        this.getValue();
		      }
		    }
		    TextSelectorPropFactory.prototype = {
		      getMult: function getMult(ind) {
		        if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
		          this.getValue();
		        }
		        var x1 = 0;
		        var y1 = 0;
		        var x2 = 1;
		        var y2 = 1;
		        if (this.ne.v > 0) {
		          x1 = this.ne.v / 100.0;
		        } else {
		          y1 = -this.ne.v / 100.0;
		        }
		        if (this.xe.v > 0) {
		          x2 = 1.0 - this.xe.v / 100.0;
		        } else {
		          y2 = 1.0 + this.xe.v / 100.0;
		        }
		        var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
		        var mult = 0;
		        var s = this.finalS;
		        var e = this.finalE;
		        var type = this.data.sh;
		        if (type === 2) {
		          if (e === s) {
		            mult = ind >= e ? 1 : 0;
		          } else {
		            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
		          }
		          mult = easer(mult);
		        } else if (type === 3) {
		          if (e === s) {
		            mult = ind >= e ? 0 : 1;
		          } else {
		            mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
		          }
		          mult = easer(mult);
		        } else if (type === 4) {
		          if (e === s) {
		            mult = 0;
		          } else {
		            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
		            if (mult < 0.5) {
		              mult *= 2;
		            } else {
		              mult = 1 - 2 * (mult - 0.5);
		            }
		          }
		          mult = easer(mult);
		        } else if (type === 5) {
		          if (e === s) {
		            mult = 0;
		          } else {
		            var tot = e - s;
		            /* ind += 0.5;
		                      mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */
		            ind = min(max(0, ind + 0.5 - s), e - s);
		            var x = -tot / 2 + ind;
		            var a = tot / 2;
		            mult = Math.sqrt(1 - x * x / (a * a));
		          }
		          mult = easer(mult);
		        } else if (type === 6) {
		          if (e === s) {
		            mult = 0;
		          } else {
		            ind = min(max(0, ind + 0.5 - s), e - s);
		            mult = (1 + Math.cos(Math.PI + Math.PI * 2 * ind / (e - s))) / 2; // eslint-disable-line
		          }
		          mult = easer(mult);
		        } else {
		          if (ind >= floor(s)) {
		            if (ind - s < 0) {
		              mult = max(0, min(min(e, 1) - (s - ind), 1));
		            } else {
		              mult = max(0, min(e - ind, 1));
		            }
		          }
		          mult = easer(mult);
		        }
		        // Smoothness implementation.
		        // The smoothness represents a reduced range of the original [0; 1] range.
		        // if smoothness is 25%, the new range will be [0.375; 0.625]
		        // Steps are:
		        // - find the lower value of the new range (threshold)
		        // - if multiplier is smaller than that value, floor it to 0
		        // - if it is larger,
		        //     - subtract the threshold
		        //     - divide it by the smoothness (this will return the range to [0; 1])
		        // Note: If it doesn't work on some scenarios, consider applying it before the easer.
		        if (this.sm.v !== 100) {
		          var smoothness = this.sm.v * 0.01;
		          if (smoothness === 0) {
		            smoothness = 0.00000001;
		          }
		          var threshold = 0.5 - smoothness * 0.5;
		          if (mult < threshold) {
		            mult = 0;
		          } else {
		            mult = (mult - threshold) / smoothness;
		            if (mult > 1) {
		              mult = 1;
		            }
		          }
		        }
		        return mult * this.a.v;
		      },
		      getValue: function getValue(newCharsFlag) {
		        this.iterateDynamicProperties();
		        this._mdf = newCharsFlag || this._mdf;
		        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
		        if (newCharsFlag && this.data.r === 2) {
		          this.e.v = this._currentTextLength;
		        }
		        var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
		        var o = this.o.v / divisor;
		        var s = this.s.v / divisor + o;
		        var e = this.e.v / divisor + o;
		        if (s > e) {
		          var _s = s;
		          s = e;
		          e = _s;
		        }
		        this.finalS = s;
		        this.finalE = e;
		      }
		    };
		    extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);
		    function getTextSelectorProp(elem, data, arr) {
		      return new TextSelectorPropFactory(elem, data);
		    }
		    return {
		      getTextSelectorProp: getTextSelectorProp
		    };
		  }();

		  function TextAnimatorDataProperty(elem, animatorProps, container) {
		    var defaultData = {
		      propType: false
		    };
		    var getProp = PropertyFactory.getProp;
		    var textAnimatorAnimatables = animatorProps.a;
		    this.a = {
		      r: textAnimatorAnimatables.r ? getProp(elem, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
		      rx: textAnimatorAnimatables.rx ? getProp(elem, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
		      ry: textAnimatorAnimatables.ry ? getProp(elem, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
		      sk: textAnimatorAnimatables.sk ? getProp(elem, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
		      sa: textAnimatorAnimatables.sa ? getProp(elem, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
		      s: textAnimatorAnimatables.s ? getProp(elem, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
		      a: textAnimatorAnimatables.a ? getProp(elem, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
		      o: textAnimatorAnimatables.o ? getProp(elem, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
		      p: textAnimatorAnimatables.p ? getProp(elem, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
		      sw: textAnimatorAnimatables.sw ? getProp(elem, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
		      sc: textAnimatorAnimatables.sc ? getProp(elem, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
		      fc: textAnimatorAnimatables.fc ? getProp(elem, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
		      fh: textAnimatorAnimatables.fh ? getProp(elem, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
		      fs: textAnimatorAnimatables.fs ? getProp(elem, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
		      fb: textAnimatorAnimatables.fb ? getProp(elem, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
		      t: textAnimatorAnimatables.t ? getProp(elem, textAnimatorAnimatables.t, 0, 0, container) : defaultData
		    };
		    this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
		    this.s.t = animatorProps.s.t;
		  }

		  function TextAnimatorProperty(textData, renderType, elem) {
		    this._isFirstFrame = true;
		    this._hasMaskedPath = false;
		    this._frameId = -1;
		    this._textData = textData;
		    this._renderType = renderType;
		    this._elem = elem;
		    this._animatorsData = createSizedArray(this._textData.a.length);
		    this._pathData = {};
		    this._moreOptions = {
		      alignment: {}
		    };
		    this.renderedLetters = [];
		    this.lettersChangedFlag = false;
		    this.initDynamicPropertyContainer(elem);
		  }
		  TextAnimatorProperty.prototype.searchProperties = function () {
		    var i;
		    var len = this._textData.a.length;
		    var animatorProps;
		    var getProp = PropertyFactory.getProp;
		    for (i = 0; i < len; i += 1) {
		      animatorProps = this._textData.a[i];
		      this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
		    }
		    if (this._textData.p && 'm' in this._textData.p) {
		      this._pathData = {
		        a: getProp(this._elem, this._textData.p.a, 0, 0, this),
		        f: getProp(this._elem, this._textData.p.f, 0, 0, this),
		        l: getProp(this._elem, this._textData.p.l, 0, 0, this),
		        r: getProp(this._elem, this._textData.p.r, 0, 0, this),
		        p: getProp(this._elem, this._textData.p.p, 0, 0, this),
		        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
		      };
		      this._hasMaskedPath = true;
		    } else {
		      this._hasMaskedPath = false;
		    }
		    this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
		  };
		  TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
		    this.lettersChangedFlag = lettersChangedFlag;
		    if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
		      return;
		    }
		    this._isFirstFrame = false;
		    var alignment = this._moreOptions.alignment.v;
		    var animators = this._animatorsData;
		    var textData = this._textData;
		    var matrixHelper = this.mHelper;
		    var renderType = this._renderType;
		    var renderedLettersCount = this.renderedLetters.length;
		    var xPos;
		    var yPos;
		    var i;
		    var len;
		    var letters = documentData.l;
		    var pathInfo;
		    var currentLength;
		    var currentPoint;
		    var segmentLength;
		    var flag;
		    var pointInd;
		    var segmentInd;
		    var prevPoint;
		    var points;
		    var segments;
		    var partialLength;
		    var totalLength;
		    var perc;
		    var tanAngle;
		    var mask;
		    if (this._hasMaskedPath) {
		      mask = this._pathData.m;
		      if (!this._pathData.n || this._pathData._mdf) {
		        var paths = mask.v;
		        if (this._pathData.r.v) {
		          paths = paths.reverse();
		        }
		        // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
		        pathInfo = {
		          tLength: 0,
		          segments: []
		        };
		        len = paths._length - 1;
		        var bezierData;
		        totalLength = 0;
		        for (i = 0; i < len; i += 1) {
		          bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
		          pathInfo.tLength += bezierData.segmentLength;
		          pathInfo.segments.push(bezierData);
		          totalLength += bezierData.segmentLength;
		        }
		        i = len;
		        if (mask.v.c) {
		          bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
		          pathInfo.tLength += bezierData.segmentLength;
		          pathInfo.segments.push(bezierData);
		          totalLength += bezierData.segmentLength;
		        }
		        this._pathData.pi = pathInfo;
		      }
		      pathInfo = this._pathData.pi;
		      currentLength = this._pathData.f.v;
		      segmentInd = 0;
		      pointInd = 1;
		      segmentLength = 0;
		      flag = true;
		      segments = pathInfo.segments;
		      if (currentLength < 0 && mask.v.c) {
		        if (pathInfo.tLength < Math.abs(currentLength)) {
		          currentLength = -Math.abs(currentLength) % pathInfo.tLength;
		        }
		        segmentInd = segments.length - 1;
		        points = segments[segmentInd].points;
		        pointInd = points.length - 1;
		        while (currentLength < 0) {
		          currentLength += points[pointInd].partialLength;
		          pointInd -= 1;
		          if (pointInd < 0) {
		            segmentInd -= 1;
		            points = segments[segmentInd].points;
		            pointInd = points.length - 1;
		          }
		        }
		      }
		      points = segments[segmentInd].points;
		      prevPoint = points[pointInd - 1];
		      currentPoint = points[pointInd];
		      partialLength = currentPoint.partialLength;
		    }
		    len = letters.length;
		    xPos = 0;
		    yPos = 0;
		    var yOff = documentData.finalSize * 1.2 * 0.714;
		    var firstLine = true;
		    var animatorProps;
		    var animatorSelector;
		    var j;
		    var jLen;
		    var letterValue;
		    jLen = animators.length;
		    var mult;
		    var ind = -1;
		    var offf;
		    var xPathPos;
		    var yPathPos;
		    var initPathPos = currentLength;
		    var initSegmentInd = segmentInd;
		    var initPointInd = pointInd;
		    var currentLine = -1;
		    var elemOpacity;
		    var sc;
		    var sw;
		    var fc;
		    var k;
		    var letterSw;
		    var letterSc;
		    var letterFc;
		    var letterM = '';
		    var letterP = this.defaultPropsArray;
		    var letterO;

		    //
		    if (documentData.j === 2 || documentData.j === 1) {
		      var animatorJustifyOffset = 0;
		      var animatorFirstCharOffset = 0;
		      var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
		      var lastIndex = 0;
		      var isNewLine = true;
		      for (i = 0; i < len; i += 1) {
		        if (letters[i].n) {
		          if (animatorJustifyOffset) {
		            animatorJustifyOffset += animatorFirstCharOffset;
		          }
		          while (lastIndex < i) {
		            letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
		            lastIndex += 1;
		          }
		          animatorJustifyOffset = 0;
		          isNewLine = true;
		        } else {
		          for (j = 0; j < jLen; j += 1) {
		            animatorProps = animators[j].a;
		            if (animatorProps.t.propType) {
		              if (isNewLine && documentData.j === 2) {
		                animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
		              }
		              animatorSelector = animators[j].s;
		              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		              if (mult.length) {
		                animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
		              } else {
		                animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
		              }
		            }
		          }
		          isNewLine = false;
		        }
		      }
		      if (animatorJustifyOffset) {
		        animatorJustifyOffset += animatorFirstCharOffset;
		      }
		      while (lastIndex < i) {
		        letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
		        lastIndex += 1;
		      }
		    }
		    //

		    for (i = 0; i < len; i += 1) {
		      matrixHelper.reset();
		      elemOpacity = 1;
		      if (letters[i].n) {
		        xPos = 0;
		        yPos += documentData.yOffset;
		        yPos += firstLine ? 1 : 0;
		        currentLength = initPathPos;
		        firstLine = false;
		        if (this._hasMaskedPath) {
		          segmentInd = initSegmentInd;
		          pointInd = initPointInd;
		          points = segments[segmentInd].points;
		          prevPoint = points[pointInd - 1];
		          currentPoint = points[pointInd];
		          partialLength = currentPoint.partialLength;
		          segmentLength = 0;
		        }
		        letterM = '';
		        letterFc = '';
		        letterSw = '';
		        letterO = '';
		        letterP = this.defaultPropsArray;
		      } else {
		        if (this._hasMaskedPath) {
		          if (currentLine !== letters[i].line) {
		            switch (documentData.j) {
		              case 1:
		                currentLength += totalLength - documentData.lineWidths[letters[i].line];
		                break;
		              case 2:
		                currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
		                break;
		            }
		            currentLine = letters[i].line;
		          }
		          if (ind !== letters[i].ind) {
		            if (letters[ind]) {
		              currentLength += letters[ind].extra;
		            }
		            currentLength += letters[i].an / 2;
		            ind = letters[i].ind;
		          }
		          currentLength += alignment[0] * letters[i].an * 0.005;
		          var animatorOffset = 0;
		          for (j = 0; j < jLen; j += 1) {
		            animatorProps = animators[j].a;
		            if (animatorProps.p.propType) {
		              animatorSelector = animators[j].s;
		              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		              if (mult.length) {
		                animatorOffset += animatorProps.p.v[0] * mult[0];
		              } else {
		                animatorOffset += animatorProps.p.v[0] * mult;
		              }
		            }
		            if (animatorProps.a.propType) {
		              animatorSelector = animators[j].s;
		              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		              if (mult.length) {
		                animatorOffset += animatorProps.a.v[0] * mult[0];
		              } else {
		                animatorOffset += animatorProps.a.v[0] * mult;
		              }
		            }
		          }
		          flag = true;
		          // Force alignment only works with a single line for now
		          if (this._pathData.a.v) {
		            currentLength = letters[0].an * 0.5 + (totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind / (len - 1);
		            currentLength += this._pathData.f.v;
		          }
		          while (flag) {
		            if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
		              perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
		              xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
		              yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
		              matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -(alignment[1] * yOff) * 0.01);
		              flag = false;
		            } else if (points) {
		              segmentLength += currentPoint.partialLength;
		              pointInd += 1;
		              if (pointInd >= points.length) {
		                pointInd = 0;
		                segmentInd += 1;
		                if (!segments[segmentInd]) {
		                  if (mask.v.c) {
		                    pointInd = 0;
		                    segmentInd = 0;
		                    points = segments[segmentInd].points;
		                  } else {
		                    segmentLength -= currentPoint.partialLength;
		                    points = null;
		                  }
		                } else {
		                  points = segments[segmentInd].points;
		                }
		              }
		              if (points) {
		                prevPoint = currentPoint;
		                currentPoint = points[pointInd];
		                partialLength = currentPoint.partialLength;
		              }
		            }
		          }
		          offf = letters[i].an / 2 - letters[i].add;
		          matrixHelper.translate(-offf, 0, 0);
		        } else {
		          offf = letters[i].an / 2 - letters[i].add;
		          matrixHelper.translate(-offf, 0, 0);

		          // Grouping alignment
		          matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -alignment[1] * yOff * 0.01, 0);
		        }
		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;
		          if (animatorProps.t.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		            // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
		            if (xPos !== 0 || documentData.j !== 0) {
		              if (this._hasMaskedPath) {
		                if (mult.length) {
		                  currentLength += animatorProps.t.v * mult[0];
		                } else {
		                  currentLength += animatorProps.t.v * mult;
		                }
		              } else if (mult.length) {
		                xPos += animatorProps.t.v * mult[0];
		              } else {
		                xPos += animatorProps.t.v * mult;
		              }
		            }
		          }
		        }
		        if (documentData.strokeWidthAnim) {
		          sw = documentData.sw || 0;
		        }
		        if (documentData.strokeColorAnim) {
		          if (documentData.sc) {
		            sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
		          } else {
		            sc = [0, 0, 0];
		          }
		        }
		        if (documentData.fillColorAnim && documentData.fc) {
		          fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
		        }
		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;
		          if (animatorProps.a.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		            if (mult.length) {
		              matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
		            } else {
		              matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
		            }
		          }
		        }
		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;
		          if (animatorProps.s.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		            if (mult.length) {
		              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult[0], 1 + (animatorProps.s.v[1] - 1) * mult[1], 1);
		            } else {
		              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult, 1 + (animatorProps.s.v[1] - 1) * mult, 1);
		            }
		          }
		        }
		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;
		          animatorSelector = animators[j].s;
		          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		          if (animatorProps.sk.propType) {
		            if (mult.length) {
		              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
		            } else {
		              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
		            }
		          }
		          if (animatorProps.r.propType) {
		            if (mult.length) {
		              matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
		            } else {
		              matrixHelper.rotateZ(-animatorProps.r.v * mult);
		            }
		          }
		          if (animatorProps.ry.propType) {
		            if (mult.length) {
		              matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
		            } else {
		              matrixHelper.rotateY(animatorProps.ry.v * mult);
		            }
		          }
		          if (animatorProps.rx.propType) {
		            if (mult.length) {
		              matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
		            } else {
		              matrixHelper.rotateX(animatorProps.rx.v * mult);
		            }
		          }
		          if (animatorProps.o.propType) {
		            if (mult.length) {
		              elemOpacity += (animatorProps.o.v * mult[0] - elemOpacity) * mult[0];
		            } else {
		              elemOpacity += (animatorProps.o.v * mult - elemOpacity) * mult;
		            }
		          }
		          if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
		            if (mult.length) {
		              sw += animatorProps.sw.v * mult[0];
		            } else {
		              sw += animatorProps.sw.v * mult;
		            }
		          }
		          if (documentData.strokeColorAnim && animatorProps.sc.propType) {
		            for (k = 0; k < 3; k += 1) {
		              if (mult.length) {
		                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
		              } else {
		                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
		              }
		            }
		          }
		          if (documentData.fillColorAnim && documentData.fc) {
		            if (animatorProps.fc.propType) {
		              for (k = 0; k < 3; k += 1) {
		                if (mult.length) {
		                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
		                } else {
		                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
		                }
		              }
		            }
		            if (animatorProps.fh.propType) {
		              if (mult.length) {
		                fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
		              } else {
		                fc = addHueToRGB(fc, animatorProps.fh.v * mult);
		              }
		            }
		            if (animatorProps.fs.propType) {
		              if (mult.length) {
		                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
		              } else {
		                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
		              }
		            }
		            if (animatorProps.fb.propType) {
		              if (mult.length) {
		                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
		              } else {
		                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
		              }
		            }
		          }
		        }
		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;
		          if (animatorProps.p.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
		            if (this._hasMaskedPath) {
		              if (mult.length) {
		                matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
		              } else {
		                matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
		              }
		            } else if (mult.length) {
		              matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
		            } else {
		              matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
		            }
		          }
		        }
		        if (documentData.strokeWidthAnim) {
		          letterSw = sw < 0 ? 0 : sw;
		        }
		        if (documentData.strokeColorAnim) {
		          letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
		        }
		        if (documentData.fillColorAnim && documentData.fc) {
		          letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
		        }
		        if (this._hasMaskedPath) {
		          matrixHelper.translate(0, -documentData.ls);
		          matrixHelper.translate(0, alignment[1] * yOff * 0.01 + yPos, 0);
		          if (this._pathData.p.v) {
		            tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
		            var rot = Math.atan(tanAngle) * 180 / Math.PI;
		            if (currentPoint.point[0] < prevPoint.point[0]) {
		              rot += 180;
		            }
		            matrixHelper.rotate(-rot * Math.PI / 180);
		          }
		          matrixHelper.translate(xPathPos, yPathPos, 0);
		          currentLength -= alignment[0] * letters[i].an * 0.005;
		          if (letters[i + 1] && ind !== letters[i + 1].ind) {
		            currentLength += letters[i].an / 2;
		            currentLength += documentData.tr * 0.001 * documentData.finalSize;
		          }
		        } else {
		          matrixHelper.translate(xPos, yPos, 0);
		          if (documentData.ps) {
		            // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
		            matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
		          }
		          switch (documentData.j) {
		            case 1:
		              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
		              break;
		            case 2:
		              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
		              break;
		          }
		          matrixHelper.translate(0, -documentData.ls);
		          matrixHelper.translate(offf, 0, 0);
		          matrixHelper.translate(alignment[0] * letters[i].an * 0.005, alignment[1] * yOff * 0.01, 0);
		          xPos += letters[i].l + documentData.tr * 0.001 * documentData.finalSize;
		        }
		        if (renderType === 'html') {
		          letterM = matrixHelper.toCSS();
		        } else if (renderType === 'svg') {
		          letterM = matrixHelper.to2dCSS();
		        } else {
		          letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
		        }
		        letterO = elemOpacity;
		      }
		      if (renderedLettersCount <= i) {
		        letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
		        this.renderedLetters.push(letterValue);
		        renderedLettersCount += 1;
		        this.lettersChangedFlag = true;
		      } else {
		        letterValue = this.renderedLetters[i];
		        this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
		      }
		    }
		  };
		  TextAnimatorProperty.prototype.getValue = function () {
		    if (this._elem.globalData.frameId === this._frameId) {
		      return;
		    }
		    this._frameId = this._elem.globalData.frameId;
		    this.iterateDynamicProperties();
		  };
		  TextAnimatorProperty.prototype.mHelper = new Matrix();
		  TextAnimatorProperty.prototype.defaultPropsArray = [];
		  extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

		  function ITextElement() {}
		  ITextElement.prototype.initElement = function (data, globalData, comp) {
		    this.lettersChangedFlag = true;
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
		    this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
		    this.initTransform(data, globalData, comp);
		    this.initHierarchy();
		    this.initRenderable();
		    this.initRendererElement();
		    this.createContainerElements();
		    this.createRenderableComponents();
		    this.createContent();
		    this.hide();
		    this.textAnimator.searchProperties(this.dynamicProperties);
		  };
		  ITextElement.prototype.prepareFrame = function (num) {
		    this._mdf = false;
		    this.prepareRenderableFrame(num);
		    this.prepareProperties(num, this.isInRange);
		  };
		  ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
		    var j;
		    var jLen = shapes.length;
		    var pathNodes;
		    var shapeStr = '';
		    for (j = 0; j < jLen; j += 1) {
		      if (shapes[j].ty === 'sh') {
		        pathNodes = shapes[j].ks.k;
		        shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
		      }
		    }
		    return shapeStr;
		  };
		  ITextElement.prototype.updateDocumentData = function (newData, index) {
		    this.textProperty.updateDocumentData(newData, index);
		  };
		  ITextElement.prototype.canResizeFont = function (_canResize) {
		    this.textProperty.canResizeFont(_canResize);
		  };
		  ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
		    this.textProperty.setMinimumFontSize(_fontSize);
		  };
		  ITextElement.prototype.applyTextPropertiesToMatrix = function (documentData, matrixHelper, lineNumber, xPos, yPos) {
		    if (documentData.ps) {
		      matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
		    }
		    matrixHelper.translate(0, -documentData.ls, 0);
		    switch (documentData.j) {
		      case 1:
		        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
		        break;
		      case 2:
		        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
		        break;
		    }
		    matrixHelper.translate(xPos, yPos, 0);
		  };
		  ITextElement.prototype.buildColor = function (colorData) {
		    return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')';
		  };
		  ITextElement.prototype.emptyProp = new LetterProps();
		  ITextElement.prototype.destroy = function () {};
		  ITextElement.prototype.validateText = function () {
		    if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
		      this.buildNewText();
		      this.textProperty._isFirstFrame = false;
		      this.textProperty._mdf = false;
		    }
		  };

		  var emptyShapeData = {
		    shapes: []
		  };
		  function SVGTextLottieElement(data, globalData, comp) {
		    this.textSpans = [];
		    this.renderType = 'svg';
		    this.initElement(data, globalData, comp);
		  }
		  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);
		  SVGTextLottieElement.prototype.createContent = function () {
		    if (this.data.singleShape && !this.globalData.fontManager.chars) {
		      this.textContainer = createNS('text');
		    }
		  };
		  SVGTextLottieElement.prototype.buildTextContents = function (textArray) {
		    var i = 0;
		    var len = textArray.length;
		    var textContents = [];
		    var currentTextContent = '';
		    while (i < len) {
		      if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
		        textContents.push(currentTextContent);
		        currentTextContent = '';
		      } else {
		        currentTextContent += textArray[i];
		      }
		      i += 1;
		    }
		    textContents.push(currentTextContent);
		    return textContents;
		  };
		  SVGTextLottieElement.prototype.buildShapeData = function (data, scale) {
		    // data should probably be cloned to apply scale separately to each instance of a text on different layers
		    // but since text internal content gets only rendered once and then it's never rerendered,
		    // it's probably safe not to clone data and reuse always the same instance even if the object is mutated.
		    // Avoiding cloning is preferred since cloning each character shape data is expensive
		    if (data.shapes && data.shapes.length) {
		      var shape = data.shapes[0];
		      if (shape.it) {
		        var shapeItem = shape.it[shape.it.length - 1];
		        if (shapeItem.s) {
		          shapeItem.s.k[0] = scale;
		          shapeItem.s.k[1] = scale;
		        }
		      }
		    }
		    return data;
		  };
		  SVGTextLottieElement.prototype.buildNewText = function () {
		    this.addDynamicProperty(this);
		    var i;
		    var len;
		    var documentData = this.textProperty.currentData;
		    this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
		    if (documentData.fc) {
		      this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
		    } else {
		      this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
		    }
		    if (documentData.sc) {
		      this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
		      this.layerElement.setAttribute('stroke-width', documentData.sw);
		    }
		    this.layerElement.setAttribute('font-size', documentData.finalSize);
		    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
		    if (fontData.fClass) {
		      this.layerElement.setAttribute('class', fontData.fClass);
		    } else {
		      this.layerElement.setAttribute('font-family', fontData.fFamily);
		      var fWeight = documentData.fWeight;
		      var fStyle = documentData.fStyle;
		      this.layerElement.setAttribute('font-style', fStyle);
		      this.layerElement.setAttribute('font-weight', fWeight);
		    }
		    this.layerElement.setAttribute('aria-label', documentData.t);
		    var letters = documentData.l || [];
		    var usesGlyphs = !!this.globalData.fontManager.chars;
		    len = letters.length;
		    var tSpan;
		    var matrixHelper = this.mHelper;
		    var shapeStr = '';
		    var singleShape = this.data.singleShape;
		    var xPos = 0;
		    var yPos = 0;
		    var firstLine = true;
		    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
		    if (singleShape && !usesGlyphs && !documentData.sz) {
		      var tElement = this.textContainer;
		      var justify = 'start';
		      switch (documentData.j) {
		        case 1:
		          justify = 'end';
		          break;
		        case 2:
		          justify = 'middle';
		          break;
		        default:
		          justify = 'start';
		          break;
		      }
		      tElement.setAttribute('text-anchor', justify);
		      tElement.setAttribute('letter-spacing', trackingOffset);
		      var textContent = this.buildTextContents(documentData.finalText);
		      len = textContent.length;
		      yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
		      for (i = 0; i < len; i += 1) {
		        tSpan = this.textSpans[i].span || createNS('tspan');
		        tSpan.textContent = textContent[i];
		        tSpan.setAttribute('x', 0);
		        tSpan.setAttribute('y', yPos);
		        tSpan.style.display = 'inherit';
		        tElement.appendChild(tSpan);
		        if (!this.textSpans[i]) {
		          this.textSpans[i] = {
		            span: null,
		            glyph: null
		          };
		        }
		        this.textSpans[i].span = tSpan;
		        yPos += documentData.finalLineHeight;
		      }
		      this.layerElement.appendChild(tElement);
		    } else {
		      var cachedSpansLength = this.textSpans.length;
		      var charData;
		      for (i = 0; i < len; i += 1) {
		        if (!this.textSpans[i]) {
		          this.textSpans[i] = {
		            span: null,
		            childSpan: null,
		            glyph: null
		          };
		        }
		        if (!usesGlyphs || !singleShape || i === 0) {
		          tSpan = cachedSpansLength > i ? this.textSpans[i].span : createNS(usesGlyphs ? 'g' : 'text');
		          if (cachedSpansLength <= i) {
		            tSpan.setAttribute('stroke-linecap', 'butt');
		            tSpan.setAttribute('stroke-linejoin', 'round');
		            tSpan.setAttribute('stroke-miterlimit', '4');
		            this.textSpans[i].span = tSpan;
		            if (usesGlyphs) {
		              var childSpan = createNS('g');
		              tSpan.appendChild(childSpan);
		              this.textSpans[i].childSpan = childSpan;
		            }
		            this.textSpans[i].span = tSpan;
		            this.layerElement.appendChild(tSpan);
		          }
		          tSpan.style.display = 'inherit';
		        }
		        matrixHelper.reset();
		        if (singleShape) {
		          if (letters[i].n) {
		            xPos = -trackingOffset;
		            yPos += documentData.yOffset;
		            yPos += firstLine ? 1 : 0;
		            firstLine = false;
		          }
		          this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
		          xPos += letters[i].l || 0;
		          // xPos += letters[i].val === ' ' ? 0 : trackingOffset;
		          xPos += trackingOffset;
		        }
		        if (usesGlyphs) {
		          charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
		          var glyphElement;
		          // t === 1 means the character has been replaced with an animated shaped
		          if (charData.t === 1) {
		            glyphElement = new SVGCompElement(charData.data, this.globalData, this);
		          } else {
		            var data = emptyShapeData;
		            if (charData.data && charData.data.shapes) {
		              data = this.buildShapeData(charData.data, documentData.finalSize);
		            }
		            glyphElement = new SVGShapeElement(data, this.globalData, this);
		          }
		          if (this.textSpans[i].glyph) {
		            var glyph = this.textSpans[i].glyph;
		            this.textSpans[i].childSpan.removeChild(glyph.layerElement);
		            glyph.destroy();
		          }
		          this.textSpans[i].glyph = glyphElement;
		          glyphElement._debug = true;
		          glyphElement.prepareFrame(0);
		          glyphElement.renderFrame();
		          this.textSpans[i].childSpan.appendChild(glyphElement.layerElement);
		          // when using animated shapes, the layer will be scaled instead of replacing the internal scale
		          // this might have issues with strokes and might need a different solution
		          if (charData.t === 1) {
		            this.textSpans[i].childSpan.setAttribute('transform', 'scale(' + documentData.finalSize / 100 + ',' + documentData.finalSize / 100 + ')');
		          }
		        } else {
		          if (singleShape) {
		            tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
		          }
		          tSpan.textContent = letters[i].val;
		          tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
		        }
		        //
		      }
		      if (singleShape && tSpan) {
		        tSpan.setAttribute('d', shapeStr);
		      }
		    }
		    while (i < this.textSpans.length) {
		      this.textSpans[i].span.style.display = 'none';
		      i += 1;
		    }
		    this._sizeChanged = true;
		  };
		  SVGTextLottieElement.prototype.sourceRectAtTime = function () {
		    this.prepareFrame(this.comp.renderedFrame - this.data.st);
		    this.renderInnerContent();
		    if (this._sizeChanged) {
		      this._sizeChanged = false;
		      var textBox = this.layerElement.getBBox();
		      this.bbox = {
		        top: textBox.y,
		        left: textBox.x,
		        width: textBox.width,
		        height: textBox.height
		      };
		    }
		    return this.bbox;
		  };
		  SVGTextLottieElement.prototype.getValue = function () {
		    var i;
		    var len = this.textSpans.length;
		    var glyphElement;
		    this.renderedFrame = this.comp.renderedFrame;
		    for (i = 0; i < len; i += 1) {
		      glyphElement = this.textSpans[i].glyph;
		      if (glyphElement) {
		        glyphElement.prepareFrame(this.comp.renderedFrame - this.data.st);
		        if (glyphElement._mdf) {
		          this._mdf = true;
		        }
		      }
		    }
		  };
		  SVGTextLottieElement.prototype.renderInnerContent = function () {
		    this.validateText();
		    if (!this.data.singleShape || this._mdf) {
		      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
		      if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
		        this._sizeChanged = true;
		        var i;
		        var len;
		        var renderedLetters = this.textAnimator.renderedLetters;
		        var letters = this.textProperty.currentData.l;
		        len = letters.length;
		        var renderedLetter;
		        var textSpan;
		        var glyphElement;
		        for (i = 0; i < len; i += 1) {
		          if (!letters[i].n) {
		            renderedLetter = renderedLetters[i];
		            textSpan = this.textSpans[i].span;
		            glyphElement = this.textSpans[i].glyph;
		            if (glyphElement) {
		              glyphElement.renderFrame();
		            }
		            if (renderedLetter._mdf.m) {
		              textSpan.setAttribute('transform', renderedLetter.m);
		            }
		            if (renderedLetter._mdf.o) {
		              textSpan.setAttribute('opacity', renderedLetter.o);
		            }
		            if (renderedLetter._mdf.sw) {
		              textSpan.setAttribute('stroke-width', renderedLetter.sw);
		            }
		            if (renderedLetter._mdf.sc) {
		              textSpan.setAttribute('stroke', renderedLetter.sc);
		            }
		            if (renderedLetter._mdf.fc) {
		              textSpan.setAttribute('fill', renderedLetter.fc);
		            }
		          }
		        }
		      }
		    }
		  };

		  function ISolidElement(data, globalData, comp) {
		    this.initElement(data, globalData, comp);
		  }
		  extendPrototype([IImageElement], ISolidElement);
		  ISolidElement.prototype.createContent = function () {
		    var rect = createNS('rect');
		    /// /rect.style.width = this.data.sw;
		    /// /rect.style.height = this.data.sh;
		    /// /rect.style.fill = this.data.sc;
		    rect.setAttribute('width', this.data.sw);
		    rect.setAttribute('height', this.data.sh);
		    rect.setAttribute('fill', this.data.sc);
		    this.layerElement.appendChild(rect);
		  };

		  function NullElement(data, globalData, comp) {
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.initFrame();
		    this.initTransform(data, globalData, comp);
		    this.initHierarchy();
		  }
		  NullElement.prototype.prepareFrame = function (num) {
		    this.prepareProperties(num, true);
		  };
		  NullElement.prototype.renderFrame = function () {};
		  NullElement.prototype.getBaseElement = function () {
		    return null;
		  };
		  NullElement.prototype.destroy = function () {};
		  NullElement.prototype.sourceRectAtTime = function () {};
		  NullElement.prototype.hide = function () {};
		  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

		  function SVGRendererBase() {}
		  extendPrototype([BaseRenderer], SVGRendererBase);
		  SVGRendererBase.prototype.createNull = function (data) {
		    return new NullElement(data, this.globalData, this);
		  };
		  SVGRendererBase.prototype.createShape = function (data) {
		    return new SVGShapeElement(data, this.globalData, this);
		  };
		  SVGRendererBase.prototype.createText = function (data) {
		    return new SVGTextLottieElement(data, this.globalData, this);
		  };
		  SVGRendererBase.prototype.createImage = function (data) {
		    return new IImageElement(data, this.globalData, this);
		  };
		  SVGRendererBase.prototype.createSolid = function (data) {
		    return new ISolidElement(data, this.globalData, this);
		  };
		  SVGRendererBase.prototype.configAnimation = function (animData) {
		    this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		    this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
		    if (this.renderConfig.viewBoxSize) {
		      this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
		    } else {
		      this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
		    }
		    if (!this.renderConfig.viewBoxOnly) {
		      this.svgElement.setAttribute('width', animData.w);
		      this.svgElement.setAttribute('height', animData.h);
		      this.svgElement.style.width = '100%';
		      this.svgElement.style.height = '100%';
		      this.svgElement.style.transform = 'translate3d(0,0,0)';
		      this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
		    }
		    if (this.renderConfig.width) {
		      this.svgElement.setAttribute('width', this.renderConfig.width);
		    }
		    if (this.renderConfig.height) {
		      this.svgElement.setAttribute('height', this.renderConfig.height);
		    }
		    if (this.renderConfig.className) {
		      this.svgElement.setAttribute('class', this.renderConfig.className);
		    }
		    if (this.renderConfig.id) {
		      this.svgElement.setAttribute('id', this.renderConfig.id);
		    }
		    if (this.renderConfig.focusable !== undefined) {
		      this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
		    }
		    this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio);
		    // this.layerElement.style.transform = 'translate3d(0,0,0)';
		    // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
		    this.animationItem.wrapper.appendChild(this.svgElement);
		    // Mask animation
		    var defs = this.globalData.defs;
		    this.setupGlobalData(animData, defs);
		    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
		    this.data = animData;
		    var maskElement = createNS('clipPath');
		    var rect = createNS('rect');
		    rect.setAttribute('width', animData.w);
		    rect.setAttribute('height', animData.h);
		    rect.setAttribute('x', 0);
		    rect.setAttribute('y', 0);
		    var maskId = createElementID();
		    maskElement.setAttribute('id', maskId);
		    maskElement.appendChild(rect);
		    this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + maskId + ')');
		    defs.appendChild(maskElement);
		    this.layers = animData.layers;
		    this.elements = createSizedArray(animData.layers.length);
		  };
		  SVGRendererBase.prototype.destroy = function () {
		    if (this.animationItem.wrapper) {
		      this.animationItem.wrapper.innerText = '';
		    }
		    this.layerElement = null;
		    this.globalData.defs = null;
		    var i;
		    var len = this.layers ? this.layers.length : 0;
		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i] && this.elements[i].destroy) {
		        this.elements[i].destroy();
		      }
		    }
		    this.elements.length = 0;
		    this.destroyed = true;
		    this.animationItem = null;
		  };
		  SVGRendererBase.prototype.updateContainerSize = function () {};
		  SVGRendererBase.prototype.findIndexByInd = function (ind) {
		    var i = 0;
		    var len = this.layers.length;
		    for (i = 0; i < len; i += 1) {
		      if (this.layers[i].ind === ind) {
		        return i;
		      }
		    }
		    return -1;
		  };
		  SVGRendererBase.prototype.buildItem = function (pos) {
		    var elements = this.elements;
		    if (elements[pos] || this.layers[pos].ty === 99) {
		      return;
		    }
		    elements[pos] = true;
		    var element = this.createItem(this.layers[pos]);
		    elements[pos] = element;
		    if (getExpressionsPlugin()) {
		      if (this.layers[pos].ty === 0) {
		        this.globalData.projectInterface.registerComposition(element);
		      }
		      element.initExpressions();
		    }
		    this.appendElementInPos(element, pos);
		    if (this.layers[pos].tt) {
		      var elementIndex = 'tp' in this.layers[pos] ? this.findIndexByInd(this.layers[pos].tp) : pos - 1;
		      if (elementIndex === -1) {
		        return;
		      }
		      if (!this.elements[elementIndex] || this.elements[elementIndex] === true) {
		        this.buildItem(elementIndex);
		        this.addPendingElement(element);
		      } else {
		        var matteElement = elements[elementIndex];
		        var matteMask = matteElement.getMatte(this.layers[pos].tt);
		        element.setMatte(matteMask);
		      }
		    }
		  };
		  SVGRendererBase.prototype.checkPendingElements = function () {
		    while (this.pendingElements.length) {
		      var element = this.pendingElements.pop();
		      element.checkParenting();
		      if (element.data.tt) {
		        var i = 0;
		        var len = this.elements.length;
		        while (i < len) {
		          if (this.elements[i] === element) {
		            var elementIndex = 'tp' in element.data ? this.findIndexByInd(element.data.tp) : i - 1;
		            var matteElement = this.elements[elementIndex];
		            var matteMask = matteElement.getMatte(this.layers[i].tt);
		            element.setMatte(matteMask);
		            break;
		          }
		          i += 1;
		        }
		      }
		    }
		  };
		  SVGRendererBase.prototype.renderFrame = function (num) {
		    if (this.renderedFrame === num || this.destroyed) {
		      return;
		    }
		    if (num === null) {
		      num = this.renderedFrame;
		    } else {
		      this.renderedFrame = num;
		    }
		    // console.log('-------');
		    // console.log('FRAME ',num);
		    this.globalData.frameNum = num;
		    this.globalData.frameId += 1;
		    this.globalData.projectInterface.currentFrame = num;
		    this.globalData._mdf = false;
		    var i;
		    var len = this.layers.length;
		    if (!this.completeLayers) {
		      this.checkLayers(num);
		    }
		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].prepareFrame(num - this.layers[i].st);
		      }
		    }
		    if (this.globalData._mdf) {
		      for (i = 0; i < len; i += 1) {
		        if (this.completeLayers || this.elements[i]) {
		          this.elements[i].renderFrame();
		        }
		      }
		    }
		  };
		  SVGRendererBase.prototype.appendElementInPos = function (element, pos) {
		    var newElement = element.getBaseElement();
		    if (!newElement) {
		      return;
		    }
		    var i = 0;
		    var nextElement;
		    while (i < pos) {
		      if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
		        nextElement = this.elements[i].getBaseElement();
		      }
		      i += 1;
		    }
		    if (nextElement) {
		      this.layerElement.insertBefore(newElement, nextElement);
		    } else {
		      this.layerElement.appendChild(newElement);
		    }
		  };
		  SVGRendererBase.prototype.hide = function () {
		    this.layerElement.style.display = 'none';
		  };
		  SVGRendererBase.prototype.show = function () {
		    this.layerElement.style.display = 'block';
		  };

		  function ICompElement() {}
		  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);
		  ICompElement.prototype.initElement = function (data, globalData, comp) {
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.initTransform(data, globalData, comp);
		    this.initRenderable();
		    this.initHierarchy();
		    this.initRendererElement();
		    this.createContainerElements();
		    this.createRenderableComponents();
		    if (this.data.xt || !globalData.progressiveLoad) {
		      this.buildAllItems();
		    }
		    this.hide();
		  };

		  /* ICompElement.prototype.hide = function(){
		      if(!this.hidden){
		          this.hideElement();
		          var i,len = this.elements.length;
		          for( i = 0; i < len; i+=1 ){
		              if(this.elements[i]){
		                  this.elements[i].hide();
		              }
		          }
		      }
		  }; */

		  ICompElement.prototype.prepareFrame = function (num) {
		    this._mdf = false;
		    this.prepareRenderableFrame(num);
		    this.prepareProperties(num, this.isInRange);
		    if (!this.isInRange && !this.data.xt) {
		      return;
		    }
		    if (!this.tm._placeholder) {
		      var timeRemapped = this.tm.v;
		      if (timeRemapped === this.data.op) {
		        timeRemapped = this.data.op - 1;
		      }
		      this.renderedFrame = timeRemapped;
		    } else {
		      this.renderedFrame = num / this.data.sr;
		    }
		    var i;
		    var len = this.elements.length;
		    if (!this.completeLayers) {
		      this.checkLayers(this.renderedFrame);
		    }
		    // This iteration needs to be backwards because of how expressions connect between each other
		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
		        if (this.elements[i]._mdf) {
		          this._mdf = true;
		        }
		      }
		    }
		  };
		  ICompElement.prototype.renderInnerContent = function () {
		    var i;
		    var len = this.layers.length;
		    for (i = 0; i < len; i += 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].renderFrame();
		      }
		    }
		  };
		  ICompElement.prototype.setElements = function (elems) {
		    this.elements = elems;
		  };
		  ICompElement.prototype.getElements = function () {
		    return this.elements;
		  };
		  ICompElement.prototype.destroyElements = function () {
		    var i;
		    var len = this.layers.length;
		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i]) {
		        this.elements[i].destroy();
		      }
		    }
		  };
		  ICompElement.prototype.destroy = function () {
		    this.destroyElements();
		    this.destroyBaseElement();
		  };

		  function SVGCompElement(data, globalData, comp) {
		    this.layers = data.layers;
		    this.supports3d = true;
		    this.completeLayers = false;
		    this.pendingElements = [];
		    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
		    this.initElement(data, globalData, comp);
		    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
		      _placeholder: true
		    };
		  }
		  extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);
		  SVGCompElement.prototype.createComp = function (data) {
		    return new SVGCompElement(data, this.globalData, this);
		  };

		  function SVGRenderer(animationItem, config) {
		    this.animationItem = animationItem;
		    this.layers = null;
		    this.renderedFrame = -1;
		    this.svgElement = createNS('svg');
		    var ariaLabel = '';
		    if (config && config.title) {
		      var titleElement = createNS('title');
		      var titleId = createElementID();
		      titleElement.setAttribute('id', titleId);
		      titleElement.textContent = config.title;
		      this.svgElement.appendChild(titleElement);
		      ariaLabel += titleId;
		    }
		    if (config && config.description) {
		      var descElement = createNS('desc');
		      var descId = createElementID();
		      descElement.setAttribute('id', descId);
		      descElement.textContent = config.description;
		      this.svgElement.appendChild(descElement);
		      ariaLabel += ' ' + descId;
		    }
		    if (ariaLabel) {
		      this.svgElement.setAttribute('aria-labelledby', ariaLabel);
		    }
		    var defs = createNS('defs');
		    this.svgElement.appendChild(defs);
		    var maskElement = createNS('g');
		    this.svgElement.appendChild(maskElement);
		    this.layerElement = maskElement;
		    this.renderConfig = {
		      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
		      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
		      contentVisibility: config && config.contentVisibility || 'visible',
		      progressiveLoad: config && config.progressiveLoad || false,
		      hideOnTransparent: !(config && config.hideOnTransparent === false),
		      viewBoxOnly: config && config.viewBoxOnly || false,
		      viewBoxSize: config && config.viewBoxSize || false,
		      className: config && config.className || '',
		      id: config && config.id || '',
		      focusable: config && config.focusable,
		      filterSize: {
		        width: config && config.filterSize && config.filterSize.width || '100%',
		        height: config && config.filterSize && config.filterSize.height || '100%',
		        x: config && config.filterSize && config.filterSize.x || '0%',
		        y: config && config.filterSize && config.filterSize.y || '0%'
		      },
		      width: config && config.width,
		      height: config && config.height,
		      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
		    };
		    this.globalData = {
		      _mdf: false,
		      frameNum: -1,
		      defs: defs,
		      renderConfig: this.renderConfig
		    };
		    this.elements = [];
		    this.pendingElements = [];
		    this.destroyed = false;
		    this.rendererType = 'svg';
		  }
		  extendPrototype([SVGRendererBase], SVGRenderer);
		  SVGRenderer.prototype.createComp = function (data) {
		    return new SVGCompElement(data, this.globalData, this);
		  };

		  // Registering renderers
		  registerRenderer('svg', SVGRenderer);

		  // Registering shape modifiers
		  ShapeModifiers.registerModifier('tm', TrimModifier);
		  ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);
		  ShapeModifiers.registerModifier('rp', RepeaterModifier);
		  ShapeModifiers.registerModifier('rd', RoundCornersModifier);
		  ShapeModifiers.registerModifier('zz', ZigZagModifier);
		  ShapeModifiers.registerModifier('op', OffsetPathModifier);

		  return lottie;

		})); 
	} (lottie_light$1, lottie_light$1.exports));
	return lottie_light$1.exports;
}

var lottie_lightExports = /*@__PURE__*/ requireLottie_light();
var lottie = /*@__PURE__*/getDefaultExportFromCjs(lottie_lightExports);

class AuroraLottie extends i {
    constructor() {
        super(...arguments);
        this.src = "";
        this._anim = null;
    }
    static get properties() {
        return { src: { type: String } };
    }
    render() {
        return b `<div id="c"></div>`;
    }
    firstUpdated() {
        this._load();
    }
    updated(changed) {
        if (changed.has("src") && this._anim) {
            this._anim.destroy();
            this._anim = null;
            this._load();
        }
    }
    _load() {
        const container = this.shadowRoot?.getElementById("c");
        if (!container || !this.src)
            return;
        this._anim = lottie.loadAnimation({
            container,
            renderer: "svg",
            autoplay: true,
            loop: true,
            path: this.src,
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._anim?.destroy();
        this._anim = null;
    }
}
AuroraLottie.styles = i$3 `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    #c,
    #c > svg {
      width: 100% !important;
      height: 100% !important;
    }
  `;
if (!customElements.get("aurora-lottie")) {
    customElements.define("aurora-lottie", AuroraLottie);
}

const HOUR_H = 64; // px per hour
function sameDay(a, b) {
    return (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate());
}
function fmtTime(d, format) {
    if (format === "24h") {
        return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    }
    const h = d.getHours() % 12 || 12;
    const m = d.getMinutes();
    const ap = d.getHours() >= 12 ? "pm" : "am";
    return m ? `${h}:${m.toString().padStart(2, "0")}${ap}` : `${h}${ap}`;
}
function fmtHour(h, format) {
    if (format === "24h") {
        return `${h.toString().padStart(2, "0")}:00`;
    }
    const hour = h % 24;
    if (hour === 0)
        return "12am";
    if (hour === 12)
        return "12pm";
    return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
}
let AuroraCalendarTimeGrid = class AuroraCalendarTimeGrid extends i {
    constructor() {
        super(...arguments);
        this.events = [];
        this.days = [];
        this.weatherByDate = {};
        this.weatherEntity = "";
        this.locale = "en";
        this.persons = [];
        this.autoScrollToNow = false;
        this._scrollbarGutter = -1;
        this._autoScrollKey = "";
        this._drag = null;
        this._pendingMove = null;
        this._suppressClickEventId = "";
        this._handleDragPointerMove = (pointerEvent) => {
            const drag = this._drag;
            if (!drag || pointerEvent.pointerId !== drag.pointerId)
                return;
            pointerEvent.preventDefault();
            const dx = pointerEvent.clientX - drag.startX;
            const dy = pointerEvent.clientY - drag.startY;
            const moved = drag.moved || Math.hypot(dx, dy) > 6;
            const preview = this._previewFromPointer(pointerEvent.clientX, pointerEvent.clientY, drag);
            this._drag = {
                ...drag,
                currentX: pointerEvent.clientX,
                currentY: pointerEvent.clientY,
                moved,
                previewDayIndex: preview.dayIndex,
                previewStartMin: preview.startMin,
            };
            this.requestUpdate();
        };
        this._handleDragPointerUp = (pointerEvent) => {
            const drag = this._drag;
            if (!drag || pointerEvent.pointerId !== drag.pointerId)
                return;
            pointerEvent.preventDefault();
            this._teardownDragListeners(pointerEvent.pointerId);
            if (!drag.moved) {
                this._drag = null;
                return;
            }
            const preview = this._previewFromPointer(pointerEvent.clientX, pointerEvent.clientY, drag);
            const start = this._dateTimeFromPreview(preview.dayIndex, preview.startMin, drag.startHour);
            const end = new Date(start.getTime() + drag.durationMs);
            this._suppressClickEventId = drag.event.id;
            this._pendingMove = { event: drag.event, start, end };
            this._drag = null;
        };
        this._handleDragPointerCancel = (pointerEvent) => {
            const drag = this._drag;
            if (!drag || pointerEvent.pointerId !== drag.pointerId)
                return;
            this._teardownDragListeners(pointerEvent.pointerId);
            this._drag = null;
        };
        this._cancelPendingMove = () => {
            this._pendingMove = null;
        };
        this._confirmPendingMove = () => {
            const move = this._pendingMove;
            if (!move)
                return;
            this._pendingMove = null;
            this.dispatchEvent(new CustomEvent("aurora-event-move", {
                detail: {
                    event: move.event,
                    start: move.start.toISOString(),
                    end: move.end.toISOString(),
                },
                bubbles: true,
                composed: true,
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Redraw every minute so the current-time bar stays accurate
        this._timer = setInterval(() => this.requestUpdate(), 60000);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this._timer);
        this._scrollbarRo?.disconnect();
    }
    firstUpdated() {
        const scroll = this.shadowRoot?.querySelector(".tg-scroll");
        if (!scroll)
            return;
        this._scrollbarRo = new ResizeObserver(() => this._syncScrollbarGutter());
        this._scrollbarRo.observe(scroll);
        this._syncScrollbarGutter();
    }
    updated() {
        this._applyAppearanceVars();
        this._syncScrollbarGutter();
        this._autoScrollToCurrentTime();
    }
    _applyAppearanceVars() {
        if (!this.config)
            return;
        this.style.setProperty("--aurora-event-font-size", `${this.config.event_font_size}px`);
        this.style.setProperty("--aurora-event-font-family", this.config.event_font_family || "inherit");
    }
    _syncScrollbarGutter() {
        const scroll = this.shadowRoot?.querySelector(".tg-scroll");
        if (!scroll)
            return;
        const gutter = Math.max(0, scroll.offsetWidth - scroll.clientWidth);
        if (gutter === this._scrollbarGutter)
            return;
        this._scrollbarGutter = gutter;
        this.style.setProperty("--tg-scrollbar-gutter", `${gutter}px`);
    }
    _autoScrollToCurrentTime() {
        if (!this.autoScrollToNow || this.days.length === 0)
            return;
        const [startHour, endHour] = this._timeBounds(this.events.filter((event) => !event.all_day));
        const key = [
            this.viewMode,
            this.days.map((day) => dateKey(day)).join(","),
            startHour,
            endHour,
        ].join("|");
        if (key === this._autoScrollKey)
            return;
        this._autoScrollKey = key;
        requestAnimationFrame(() => {
            const scroll = this.shadowRoot?.querySelector(".tg-scroll");
            if (!scroll)
                return;
            const now = new Date();
            const nowMin = (now.getHours() - startHour) * 60 + now.getMinutes();
            const windowMin = (endHour - startHour) * 60;
            let target = 0;
            if (nowMin >= windowMin) {
                target = scroll.scrollHeight - scroll.clientHeight;
            }
            else if (nowMin > 0) {
                target = nowMin * (HOUR_H / 60) - scroll.clientHeight * 0.28;
            }
            scroll.scrollTop = Math.max(0, Math.min(target, scroll.scrollHeight - scroll.clientHeight));
        });
    }
    render() {
        const today = localToday();
        const allDay = this.events.filter((e) => e.all_day);
        const timed = this.events.filter((e) => !e.all_day);
        const hasAllDay = this.days.some((d) => allDay.some((e) => this._onDay(e, d)));
        const [startHour, endHour] = this._timeBounds(timed);
        const pxPerMin = HOUR_H / 60;
        const totalPx = (endHour - startHour) * HOUR_H;
        const hourCells = Array.from({ length: endHour - startHour }, (_, i) => i + startHour);
        const hourTicks = Array.from({ length: endHour - startHour + 1 }, (_, i) => i + startHour);
        const dayCount = Math.max(1, this.days.length);
        const drag = this._drag;
        const pendingMove = this._pendingMove;
        return b `
      <div class="tg-wrapper" style="--tg-day-count: ${dayCount}">

        <!-- ── Day header ── -->
        <div class="tg-header">
          <div class="tg-gutter"></div>
          <div class="tg-day-headers">
            ${this.days.map((day) => {
            const isToday = sameDay(day, today);
            const weather = this.weatherByDate[dateKey(day)];
            return b `
                <div class="tg-day-hdr ${isToday ? "today" : ""}">
                  <span class="dow">${formatWeekday(this.locale, day, "short")}</span>
                  <span class="date-num ${isToday ? "circle" : ""}">${day.getDate()}</span>
                  <span class="month-lbl">${formatMonth(this.locale, day, "short")}</span>
                  ${weather ? b `
                    <button
                      class="weather-pill"
                      title="${weather.condition}"
                      aria-label=${t(this.locale, "openWeatherForecast")}
                      @click=${this._openWeatherMoreInfo}
                    >
                      <img src=${weatherSvgUrl(weather.condition, this.config.weather_icon_style)} alt="${weather.condition}" />
                      <span>${weatherTempLabel(weather)}</span>
                    </button>
                  ` : A}
                </div>
              `;
        })}
          </div>
        </div>

        <!-- ── All-day strip ── -->
        ${hasAllDay ? b `
          <div class="tg-allday">
            <div class="tg-gutter tg-allday-lbl">${t(this.locale, "allDay")}</div>
            <div class="tg-allday-cols">
              ${this.days.map((day) => b `
                <div class="tg-allday-col">
                  ${allDay
            .filter((e) => this._onDay(e, day))
            .map((e) => {
            const textColor = this._eventTextColor(e.color);
            const dim = this.config.dim_past_events && eventHasConcluded(e);
            const avatar = this._personAvatar(e);
            return b `
                        <div
                          class="allday-chip aurora-event-chip ${dim ? "dim" : ""}"
                          @click=${() => this._openEvent(e)}
                          style="--aurora-chip-bg:${e.color};--aurora-chip-border-color:${shadeColor(e.color, -32)};--aurora-chip-fg:${textColor};"
                          title="${e.title}"
                        >
                          <span>${e.title}</span>
                          ${avatar}
                        </div>
                      `;
        })}
                </div>
              `)}
            </div>
          </div>
        ` : A}

        <!-- ── Scrollable time body ── -->
        <div class="tg-scroll">
          <div class="tg-inner" style="height:${totalPx}px">

            <!-- Hour labels -->
            <div class="tg-gutter tg-time-gutter">
              ${hourTicks.map((h, i) => b `
                <div
                  class="hour-lbl ${i === 0 ? "first" : i === hourTicks.length - 1 ? "last" : ""}"
                  style="top:${i * HOUR_H}px"
                >${fmtHour(h, this.config.time_format)}</div>
              `)}
            </div>

            <!-- Day columns -->
            <div class="tg-cols">
              ${this.days.map((day) => {
            const isToday = sameDay(day, today);
            const isPast = day < today && !isToday;
            const placed = this._layout(timed.filter((e) => this._onDay(e, day)), day, startHour, endHour, pxPerMin);
            const nowPx = isToday ? this._nowPx(startHour, endHour, pxPerMin) : null;
            return b `
                  <div class="tg-day-col ${isToday ? "today-col" : ""} ${isPast ? "past-col" : ""}">

                    <!-- Grid lines -->
                    ${hourTicks.map((_, i) => b `
                      <div class="hline"      style="top:${i * HOUR_H}px"></div>
                    `)}
                    ${hourCells.map((_, i) => b `
                      <div class="hline half" style="top:${i * HOUR_H + HOUR_H / 2}px"></div>
                    `)}

                    <!-- Events -->
                    ${placed.map((p) => {
                const dim = this.config.dim_past_events && eventHasConcluded(p.event);
                const showT = this.config.show_event_time;
                const s = new Date(p.event.start);
                const en = new Date(p.event.end);
                const textColor = this._eventTextColor(p.event.color);
                const avatar = this._personAvatar(p.event);
                const timeStr = showT
                    ? `${fmtTime(s, this.config.time_format)} – ${fmtTime(en, this.config.time_format)}`
                    : "";
                const isDragging = drag?.event.id === p.event.id;
                return b `
                        <div
                          class="ev-block aurora-event-chip ${dim ? "dim" : ""} ${p.event.canDragEdit ? "can-drag" : ""} ${isDragging ? "drag-source" : ""}"
                          @pointerdown=${(event) => this._handleEventPointerDown(event, p.event, startHour, endHour)}
                          @click=${() => this._handleEventClick(p.event)}
                          style="top:${p.top}px;height:${p.height}px;left:calc(${p.col} / ${p.numCols} * (100% - 4px) + 2px);width:calc(1 / ${p.numCols} * (100% - 4px) - 2px);--aurora-chip-bg:${p.event.color};--aurora-chip-border-color:${shadeColor(p.event.color, -32)};--aurora-chip-fg:${textColor};"
                          title="${p.event.title}${timeStr ? "\n" + timeStr : ""}"
                        >
                          ${p.event.canDragEdit ? b `
                            <button class="drag-handle" title="Move event" aria-label="Move event" @click=${(event) => event.stopPropagation()}>
                              <ha-icon icon="mdi:drag"></ha-icon>
                            </button>
                          ` : A}
                          <div class="ev-title">${p.event.title}</div>
                          ${p.height > 38 && timeStr
                    ? b `<div class="ev-time">${timeStr}</div>`
                    : A}
                          ${this.config.show_location && p.height > 56 && p.event.location
                    ? b `<div class="ev-location">${p.event.location}</div>`
                    : A}
                          ${avatar}
                        </div>
                      `;
            })}

                    <!-- Current-time indicator -->
                    ${nowPx !== null ? b `
                      <div class="now-bar" style="top:${nowPx}px">
                        <div class="now-dot"></div>
                      </div>
                    ` : A}

                  </div>
                `;
        })}
              ${drag ? this._renderDragPreview(drag, dayCount) : A}
            </div>
          </div>
        </div>

      </div>
      ${pendingMove ? this._renderMoveConfirm(pendingMove) : A}
    `;
    }
    // ── helpers ──────────────────────────────────────────────────────────
    _onDay(event, day) {
        if (event.all_day) {
            const s = new Date(event.start + "T00:00:00");
            const en = new Date(event.end + "T00:00:00");
            return s <= day && day < en;
        }
        // Timed: show on any day the event spans (handles cross-midnight and multi-day)
        const s = new Date(event.start);
        const en = new Date(event.end);
        const dayStart = new Date(day);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(day);
        dayEnd.setHours(23, 59, 59, 999);
        return s <= dayEnd && en > dayStart;
    }
    _eventTextColor(bgColor) {
        if (this.config.event_text_color === "white")
            return "#ffffff";
        if (this.config.event_text_color === "dark")
            return "#1f2933";
        return contrastText(bgColor);
    }
    _personAvatar(event) {
        const person = this.persons.find((p) => p.person === event.person);
        const color = person?.color || event.color;
        const t = event.title.toLowerCase();
        const avatarContent = t.includes("birthday")
            ? b `<ha-icon icon="mdi:cake-variant"></ha-icon>`
            : t.includes("anniversary")
                ? b `<ha-icon icon="mdi:glass-cheers"></ha-icon>`
                : (person?.person || event.person || "?").charAt(0).toUpperCase();
        return b `
      <span class="event-avatar" style="--event-avatar-color: ${color}" title="${event.person}">
        ${avatarContent}
        ${person?.avatar ? b `<img src="${person.avatar}" alt="${event.person}" @error=${retryImgOnError} />` : A}
      </span>
    `;
    }
    _openEvent(event) {
        this.dispatchEvent(new CustomEvent("aurora-event-open", {
            detail: { event },
            bubbles: true,
            composed: true,
        }));
    }
    _handleEventClick(event) {
        if (this._suppressClickEventId === event.id) {
            this._suppressClickEventId = "";
            return;
        }
        this._openEvent(event);
    }
    _handleEventPointerDown(pointerEvent, event, startHour, endHour) {
        if (!event.canDragEdit || event.all_day || pointerEvent.button !== 0)
            return;
        const target = pointerEvent.composedPath()[0];
        const isHandle = Boolean(target?.closest?.(".drag-handle"));
        // Drag is only initiated from the handle — clicking anywhere else opens the event details.
        if (!isHandle)
            return;
        pointerEvent.preventDefault();
        pointerEvent.stopPropagation();
        const start = new Date(event.start);
        const end = new Date(event.end);
        const durationMs = Math.max(60000, end.getTime() - start.getTime());
        const durationMin = Math.max(1, Math.round(durationMs / 60000));
        const startMin = (start.getHours() - startHour) * 60 + start.getMinutes();
        const dayIndex = Math.max(0, this.days.findIndex((day) => sameDay(day, start)));
        this._pendingMove = null;
        this._drag = {
            event,
            pointerId: pointerEvent.pointerId,
            startX: pointerEvent.clientX,
            startY: pointerEvent.clientY,
            currentX: pointerEvent.clientX,
            currentY: pointerEvent.clientY,
            startHour,
            endHour,
            durationMs,
            durationMin,
            moved: false,
            previewDayIndex: dayIndex === -1 ? 0 : dayIndex,
            previewStartMin: Math.max(0, startMin),
        };
        this.setPointerCapture(pointerEvent.pointerId);
        window.addEventListener("pointermove", this._handleDragPointerMove);
        window.addEventListener("pointerup", this._handleDragPointerUp);
        window.addEventListener("pointercancel", this._handleDragPointerCancel);
    }
    _teardownDragListeners(pointerId) {
        try {
            this.releasePointerCapture(pointerId);
        }
        catch {
            // Pointer capture may already be gone after cancellation.
        }
        window.removeEventListener("pointermove", this._handleDragPointerMove);
        window.removeEventListener("pointerup", this._handleDragPointerUp);
        window.removeEventListener("pointercancel", this._handleDragPointerCancel);
    }
    _previewFromPointer(x, y, drag) {
        const cols = Array.from(this.shadowRoot?.querySelectorAll(".tg-day-col") ?? []);
        if (cols.length === 0) {
            return { dayIndex: drag.previewDayIndex, startMin: drag.previewStartMin };
        }
        let dayIndex = cols.findIndex((col) => {
            const rect = col.getBoundingClientRect();
            return x >= rect.left && x <= rect.right;
        });
        if (dayIndex === -1) {
            const first = cols[0].getBoundingClientRect();
            const last = cols[cols.length - 1].getBoundingClientRect();
            dayIndex = x < first.left ? 0 : x > last.right ? cols.length - 1 : drag.previewDayIndex;
        }
        const colRect = cols[dayIndex].getBoundingClientRect();
        const windowMin = (drag.endHour - drag.startHour) * 60;
        const maxStartMin = Math.max(0, windowMin - drag.durationMin);
        const rawMin = ((y - colRect.top) / HOUR_H) * 60;
        const snapped = Math.round(rawMin / 15) * 15;
        return {
            dayIndex,
            startMin: Math.max(0, Math.min(maxStartMin, snapped)),
        };
    }
    _dateTimeFromPreview(dayIndex, startMin, startHour) {
        const day = this.days[Math.max(0, Math.min(this.days.length - 1, dayIndex))] || localToday();
        const date = new Date(day);
        date.setHours(startHour, 0, 0, 0);
        date.setMinutes(date.getMinutes() + startMin);
        return date;
    }
    _renderDragPreview(drag, dayCount) {
        const event = drag.event;
        const textColor = this._eventTextColor(event.color);
        const start = this._dateTimeFromPreview(drag.previewDayIndex, drag.previewStartMin, drag.startHour);
        const end = new Date(start.getTime() + drag.durationMs);
        const timeStr = `${fmtTime(start, this.config.time_format)} – ${fmtTime(end, this.config.time_format)}`;
        return b `
      <div
        class="drag-preview aurora-event-chip"
        style="--preview-day-count:${dayCount};--preview-day-index:${drag.previewDayIndex};top:${drag.previewStartMin * (HOUR_H / 60)}px;height:${Math.max(24, drag.durationMin * (HOUR_H / 60))}px;--aurora-chip-bg:${event.color};--aurora-chip-border-color:${shadeColor(event.color, -32)};--aurora-chip-fg:${textColor};"
      >
        <div class="ev-title">${event.title}</div>
        <div class="ev-time">${timeStr}</div>
      </div>
    `;
    }
    _renderMoveConfirm(move) {
        return b `
      <div class="move-confirm" style="--move-color: ${move.event.color}">
        <div>
          <strong>Move event?</strong>
          <span>${move.event.title}</span>
          <small>${this._moveTimeLabel(move.start, move.end)}</small>
        </div>
        <div class="move-actions">
          <button @click=${this._cancelPendingMove}>Cancel</button>
          <button class="confirm" @click=${this._confirmPendingMove}>Move</button>
        </div>
      </div>
    `;
    }
    _moveTimeLabel(start, end) {
        const day = new Intl.DateTimeFormat(this.locale, {
            weekday: "short",
            month: "short",
            day: "numeric",
        }).format(start);
        return `${day}, ${fmtTime(start, this.config.time_format)} - ${fmtTime(end, this.config.time_format)}`;
    }
    /** Assign columns per overlap cluster so unrelated events can use full width. */
    _layout(events, day, startHour, endHour, pxPerMin) {
        if (events.length === 0)
            return [];
        const dayMidnight = new Date(day.getFullYear(), day.getMonth(), day.getDate());
        const dayVisibleEnd = new Date(day.getFullYear(), day.getMonth(), day.getDate(), endHour);
        const windowMin = (endHour - startHour) * 60;
        const visibleEvents = events
            .map((event) => {
            const s = new Date(event.start);
            const en = new Date(event.end);
            // Clip to this day: events starting before this day begin at top of window;
            // events ending after visible end are clamped to bottom of window.
            const rawStartMin = s < dayMidnight ? 0 : (s.getHours() - startHour) * 60 + s.getMinutes();
            const rawEndMin = en >= dayVisibleEnd ? windowMin : (en.getHours() - startHour) * 60 + en.getMinutes();
            if (rawEndMin <= 0 || rawStartMin >= windowMin)
                return null;
            return {
                event,
                startMs: s.getTime(),
                endMs: en.getTime(),
                startMin: Math.max(0, rawStartMin),
                endMin: Math.min(windowMin, rawEndMin),
            };
        })
            .filter((event) => event !== null)
            .sort((a, b) => a.startMs - b.startMs || a.endMs - b.endMs);
        if (visibleEvents.length === 0)
            return [];
        const positioned = [];
        let cluster = [];
        let clusterEndMs = -Infinity;
        const flushCluster = () => {
            if (cluster.length === 0)
                return;
            const colEnds = [];
            const cols = [];
            for (const item of cluster) {
                let col = colEnds.findIndex((endMs) => endMs <= item.startMs);
                if (col === -1) {
                    col = colEnds.length;
                    colEnds.push(item.endMs);
                }
                else {
                    colEnds[col] = item.endMs;
                }
                cols.push(col);
            }
            const numCols = Math.max(...cols) + 1;
            cluster.forEach((item, index) => {
                positioned.push({
                    event: item.event,
                    top: item.startMin * pxPerMin,
                    height: Math.max(24, (item.endMin - item.startMin) * pxPerMin),
                    col: cols[index],
                    numCols,
                });
            });
        };
        for (const item of visibleEvents) {
            if (cluster.length > 0 && item.startMs >= clusterEndMs) {
                flushCluster();
                cluster = [];
                clusterEndMs = -Infinity;
            }
            cluster.push(item);
            clusterEndMs = Math.max(clusterEndMs, item.endMs);
        }
        flushCluster();
        return positioned;
    }
    _nowPx(startHour, endHour, pxPerMin) {
        const now = new Date();
        const min = (now.getHours() - startHour) * 60 + now.getMinutes();
        if (min < 0 || now.getHours() >= endHour)
            return null;
        return min * pxPerMin;
    }
    _startHour() {
        return Math.min(23, Math.max(0, Math.floor(this.config.visible_start_hour)));
    }
    _endHour(startHour) {
        const endHour = Math.min(24, Math.max(1, Math.floor(this.config.visible_end_hour)));
        return Math.max(startHour + 1, endHour);
    }
    _timeBounds(events) {
        let startHour = this._startHour();
        let endHour = this._endHour(startHour);
        for (const event of events) {
            const start = new Date(event.start);
            const end = new Date(event.end);
            if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start)
                continue;
            for (const day of this.days) {
                const dayStart = new Date(day);
                dayStart.setHours(0, 0, 0, 0);
                const dayEnd = new Date(dayStart);
                dayEnd.setDate(dayEnd.getDate() + 1);
                if (start >= dayEnd || end <= dayStart)
                    continue;
                const segmentStart = start <= dayStart ? 0 : start.getHours() + start.getMinutes() / 60;
                const segmentEnd = end >= dayEnd ? 24 : end.getHours() + end.getMinutes() / 60;
                startHour = Math.min(startHour, Math.floor(segmentStart));
                endHour = Math.max(endHour, Math.ceil(segmentEnd));
            }
        }
        startHour = Math.max(0, Math.min(23, startHour));
        endHour = Math.max(startHour + 1, Math.min(24, endHour));
        return [startHour, endHour];
    }
    _openWeatherMoreInfo(event) {
        event.stopPropagation();
        if (!this.weatherEntity)
            return;
        const moreInfoEvent = new Event("hass-more-info", {
            bubbles: true,
            composed: true,
        });
        moreInfoEvent.detail = { entityId: this.weatherEntity };
        this.dispatchEvent(moreInfoEvent);
    }
};
// ── styles ───────────────────────────────────────────────────────────
AuroraCalendarTimeGrid.styles = i$3 `
    :host {
      --tg-scrollbar-gutter: 0px;
      position: relative;
      display: block;
      height: 100%;
    }

    .tg-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      overflow: hidden;
    }

    /* ── Shared gutter ── */
    .tg-gutter {
      width: 52px;
      flex-shrink: 0;
    }

    /* ── Header ── */
    .tg-header {
      display: flex;
      border-bottom: 2px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color);
      flex-shrink: 0;
      padding-right: var(--tg-scrollbar-gutter);
      box-sizing: border-box;
    }

    .tg-day-headers {
      flex: 1;
      display: flex;
    }

    .tg-day-hdr {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 6px 2px;
      border-left: 1px solid var(--divider-color, #e0e0e0);
      gap: 1px;
      min-width: 0;
    }

    .tg-day-hdr.today {
      background: color-mix(in srgb, var(--primary-color) 8%, transparent);
    }

    .dow {
      font-size: 0.62rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--secondary-text-color);
    }

    .date-num {
      font-size: 1.05rem;
      font-weight: 500;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-text-color);
    }

    .date-num.circle {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-radius: 6px;
      font-weight: 700;
    }

    .month-lbl {
      font-size: 0.58rem;
      color: var(--secondary-text-color);
    }

    .weather-pill {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--secondary-text-color);
      font: inherit;
      font-size: 0.72rem;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
    }

    .weather-pill img {
      width: 28px;
      height: 20px;
      object-fit: contain;
    }

    /* ── All-day strip ── */
    .tg-allday {
      display: grid;
      grid-template-columns: 52px minmax(0, 1fr);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
      min-height: 26px;
      padding-right: var(--tg-scrollbar-gutter);
      box-sizing: border-box;
    }

    .tg-allday-lbl {
      font-size: 0.58rem;
      color: var(--primary-text-color);
      font-weight: 700;
      text-shadow: 0 1px 2px color-mix(in srgb, var(--card-background-color, #fff) 75%, transparent);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 6px;
      width: auto;
      box-sizing: border-box;
    }

    .tg-allday-cols {
      min-width: 0;
      display: grid;
      grid-template-columns: repeat(var(--tg-day-count, 1), minmax(0, 1fr));
    }

    .tg-allday-col {
      min-width: 0;
      padding: 2px;
      border-left: 1px solid var(--divider-color, #e0e0e0);
      box-sizing: border-box;
    }

    .allday-chip {
      position: relative;
      padding: var(--aurora-allday-padding, 1px 4px 1px 5px);
      border-radius: var(--aurora-event-radius, 6px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
      line-height: 1.5;
      font-weight: 700;
      cursor: pointer;
      background: var(--aurora-chip-bg);
      border-left: var(--aurora-event-border-width, 4px) solid var(--aurora-chip-border-color);
      color: var(--aurora-chip-fg);
      font-size: var(--aurora-event-font-size);
      font-family: var(--aurora-event-font-family);
    }

    .allday-chip span:first-child {
      display: block;
      padding-right: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .allday-chip.dim {
      opacity: 0.35;
    }

    /* ── Scrollable time body ── */
    .tg-scroll {
      overflow-y: auto;
      flex: 1;
      min-height: 0;
      /* scroll-bar tracks only within this container */
      overscroll-behavior: contain;
    }

    .tg-inner {
      display: flex;
      position: relative;
      box-shadow: inset 0 -1px 0 var(--divider-color, #e0e0e0);
    }

    /* Hour labels */
    .tg-time-gutter {
      position: relative;
      background: color-mix(
        in srgb,
        var(--secondary-background-color, transparent) var(--aurora-card-opacity, 100%),
        transparent
      );
    }

    .hour-lbl {
      position: absolute;
      right: 0;
      transform: translateY(-50%);
      padding-right: 6px;
      font-size: 0.6rem;
      color: var(--primary-text-color);
      font-weight: 700;
      text-shadow: 0 1px 2px color-mix(in srgb, var(--card-background-color, #fff) 75%, transparent);
      box-sizing: border-box;
      line-height: 1;
      text-align: right;
      width: 100%;
    }

    .hour-lbl.first {
      transform: none;
    }

    .hour-lbl.last {
      transform: translateY(-100%);
    }

    /* ── Day columns ── */
    .tg-cols {
      flex: 1;
      display: flex;
      position: relative;
    }

    .tg-day-col {
      flex: 1;
      position: relative;
      border-left: 1px solid var(--divider-color, #e0e0e0);
    }

    .tg-day-col.today-col {
      background: color-mix(in srgb, var(--primary-color) 4%, transparent);
    }

    /* Grid lines */
    .hline {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--divider-color, #e0e0e0);
      pointer-events: none;
    }

    .hline.half {
      opacity: 0.45;
      background: repeating-linear-gradient(
        90deg,
        var(--divider-color, #ccc) 0,
        var(--divider-color, #ccc) 4px,
        transparent 4px,
        transparent 8px
      );
    }

    /* ── Event blocks ── */
    .ev-block {
      position: absolute;
      border-radius: var(--aurora-event-radius, 8px);
      overflow: hidden;
      padding: var(--aurora-event-padding, 8px 56px 8px 10px);
      box-sizing: border-box;
      cursor: pointer;
      transition: filter 0.12s;
      box-shadow: var(--aurora-event-shadow, 0 1px 2px rgba(0, 0, 0, 0.16));
      touch-action: manipulation;
      background: var(--aurora-chip-bg);
      border-left: var(--aurora-event-border-width, 4px) solid var(--aurora-chip-border-color);
      color: var(--aurora-chip-fg);
      font-size: var(--aurora-event-font-size);
      font-family: var(--aurora-event-font-family);
    }

    .ev-block:hover {
      filter: brightness(0.9);
      z-index: 10;
    }

    .ev-block.dim {
      opacity: 0.35;
    }

    .ev-block.can-drag {
      cursor: grab;
    }

    .ev-block.can-drag:active {
      cursor: grabbing;
    }

    .ev-block.drag-source {
      opacity: 0.28;
      filter: grayscale(0.2);
    }

    .drag-handle {
      position: absolute;
      top: 4px;
      right: 5px;
      width: 22px;
      height: 22px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.22);
      color: inherit;
      cursor: grab;
      padding: 0;
      opacity: 0.82;
    }

    .drag-handle ha-icon {
      width: 16px;
      height: 16px;
      pointer-events: none;
    }

    .drag-preview {
      position: absolute;
      z-index: 40;
      left: calc(var(--preview-day-index) / var(--preview-day-count) * 100% + 2px);
      width: calc(1 / var(--preview-day-count) * 100% - 4px);
      border-radius: var(--aurora-event-radius, 8px);
      overflow: hidden;
      padding: var(--aurora-event-padding, 6px 30px 6px 8px);
      box-sizing: border-box;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
      pointer-events: none;
      opacity: 0.92;
      background: var(--aurora-chip-bg);
      border-left: var(--aurora-event-border-width, 4px) solid var(--aurora-chip-border-color);
      color: var(--aurora-chip-fg);
      font-size: var(--aurora-event-font-size);
      font-family: var(--aurora-event-font-family);
    }

    .move-confirm {
      position: absolute;
      right: 16px;
      bottom: 16px;
      z-index: 80;
      width: min(360px, calc(100% - 32px));
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 14px;
      border-radius: 16px;
      border: 1px solid color-mix(in srgb, var(--move-color, var(--primary-color)) 34%, var(--divider-color));
      background: color-mix(in srgb, var(--card-background-color, #fff) 94%, var(--move-color, var(--primary-color)) 6%);
      color: var(--primary-text-color);
      box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
      box-sizing: border-box;
      animation: move-confirm-in 0.16s ease-out both;
    }

    .move-confirm > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }

    .move-confirm strong,
    .move-confirm span,
    .move-confirm small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .move-confirm strong {
      font-size: 0.95rem;
      font-weight: 900;
    }

    .move-confirm span {
      font-size: 0.86rem;
      font-weight: 700;
    }

    .move-confirm small {
      color: var(--secondary-text-color);
      font-size: 0.78rem;
      font-weight: 700;
    }

    .move-actions {
      display: flex;
      gap: 8px;
      flex-shrink: 0;
    }

    .move-actions button {
      min-height: 38px;
      border: 2px solid var(--divider-color, #ccc);
      border-radius: 999px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 88%, var(--move-color, var(--primary-color)) 12%);
      color: var(--primary-text-color);
      cursor: pointer;
      font: inherit;
      font-size: 0.82rem;
      font-weight: 800;
      padding: 0 14px;
    }

    .move-actions button.confirm {
      border-color: color-mix(in srgb, var(--move-color, var(--primary-color)) 70%, var(--divider-color));
      background: var(--move-color, var(--primary-color));
      color: var(--text-primary-color, #fff);
    }

    @keyframes move-confirm-in {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .ev-title {
      font-size: 1em;
      font-weight: 800;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.15;
    }

    .ev-time {
      margin-top: 2px;
      font-size: 0.92em;
      font-weight: 700;
      opacity: 0.82;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ev-location {
      margin-top: 1px;
      font-size: 0.86em;
      font-weight: 700;
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .event-avatar {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--event-avatar-color, var(--primary-color));
      border: 1.5px solid rgba(255, 255, 255, 0.72);
      color: #fff;
      font-size: 0.62rem;
      font-weight: 900;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }

    .event-avatar img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .event-avatar ha-icon {
      --mdc-icon-size: 26px;
      color: #fff;
    }

    /* ── Current-time bar ── */
    .now-bar {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--error-color, #e53935);
      z-index: 5;
      pointer-events: none;
    }

    .now-dot {
      position: absolute;
      left: -5px;
      top: -4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--error-color, #e53935);
    }
  `;
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "events", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "days", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "config", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "viewMode", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "weatherByDate", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "weatherEntity", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "locale", void 0);
__decorate([
    n({ attribute: false })
], AuroraCalendarTimeGrid.prototype, "persons", void 0);
__decorate([
    n({ type: Boolean })
], AuroraCalendarTimeGrid.prototype, "autoScrollToNow", void 0);
__decorate([
    r()
], AuroraCalendarTimeGrid.prototype, "_drag", void 0);
__decorate([
    r()
], AuroraCalendarTimeGrid.prototype, "_pendingMove", void 0);
AuroraCalendarTimeGrid = __decorate([
    t$1("aurora-calendar-time-grid")
], AuroraCalendarTimeGrid);

const VIEW_ICONS = {
    Month: "mdi:calendar-month",
    Week: "mdi:calendar-week",
    Biweek: "mdi:calendar-week-begin",
    "Rolling 2 Weeks": "mdi:calendar-today",
    Today: "mdi:white-balance-sunny",
    "Next 7 Days": "mdi:calendar-range",
};
const CALENDAR_FEATURE_CREATE_EVENT = 1;
const CALENDAR_FEATURE_DELETE_EVENT = 2;
const CALENDAR_FEATURE_UPDATE_EVENT = 4;
let AuroraCalendarCard = class AuroraCalendarCard extends i {
    constructor() {
        super(...arguments);
        this._viewMode = "Month";
        this._offset = 0;
        this._events = [];
        this._weatherByDate = {};
        this._loading = false;
        this._filterMenuOpen = false;
        this._viewMenuOpen = false;
        this._jumpMenuOpen = false;
        this._selectedEvent = null;
        this._createDialogOpen = false;
        this._createDraft = null;
        this._createCalendarMenuOpen = false;
        this._editDialogOpen = false;
        this._editDraft = null;
        this._eventActionError = "";
        this._savingEvent = false;
        this._deletingEvent = false;
        this._deleteConfirmOpen = false;
        this._closingDialog = null;
        this._resolvedBackgroundImage = "";
        this._defaultViewLoaded = false;
        this._storageKey = "";
        this._lastFetchKey = "";
        this._lastWeatherFetchKey = "";
        this._pendingEventsRefresh = false;
        this._pendingWeatherRefresh = false;
        this._fetchRequestId = 0;
        this._backgroundMediaKey = "";
        this._backgroundMediaRequestId = 0;
        this._scheduleGridHeightSync = () => {
            if (this._gridHeightRaf) {
                cancelAnimationFrame(this._gridHeightRaf);
            }
            this._gridHeightRaf = requestAnimationFrame(() => {
                this._gridHeightRaf = requestAnimationFrame(() => {
                    this._gridHeightRaf = undefined;
                    this._syncGridHeightToViewport();
                });
            });
        };
        this._handleDocumentClick = (event) => {
            if (event.composedPath().includes(this))
                return;
            this._filterMenuOpen = false;
            this._viewMenuOpen = false;
            this._jumpMenuOpen = false;
        };
        this._handleStateChanged = (event) => {
            const entityId = event.data?.entity_id;
            if (!entityId || !this._config)
                return;
            if (entityId === this._configSensorEntityId) {
                this._queueRealtimeRefresh(true, true);
                return;
            }
            if (this._calendarEntityIds.has(entityId) || this._isAuroraFilterEntity(entityId)) {
                this._queueRealtimeRefresh(true, false);
                return;
            }
            if (this._config.show_weather && entityId === this._weatherEntity) {
                this._queueRealtimeRefresh(false, true);
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("resize", this._scheduleGridHeightSync);
        document.addEventListener("click", this._handleDocumentClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("resize", this._scheduleGridHeightSync);
        document.removeEventListener("click", this._handleDocumentClick);
        if (this._gridHeightRaf) {
            cancelAnimationFrame(this._gridHeightRaf);
        }
        if (this._gridHeightRetry) {
            window.clearTimeout(this._gridHeightRetry);
        }
        this._clearRealtimeRefreshTimer();
        this._clearDialogCloseTimer();
        this._teardownRealtimeSubscriptions();
    }
    firstUpdated() {
        this._scheduleGridHeightSync();
    }
    _scheduleSettledGridHeightSync() {
        this._scheduleGridHeightSync();
        if (this._gridHeightRetry) {
            window.clearTimeout(this._gridHeightRetry);
        }
        this._gridHeightRetry = window.setTimeout(() => {
            this._gridHeightRetry = undefined;
            this._scheduleGridHeightSync();
        }, 120);
    }
    _syncGridHeightToViewport() {
        const mode = this._config?.height_mode || "auto";
        if (mode === "ha") {
            this.style.removeProperty("--aurora-grid-height");
            return;
        }
        if (mode === "natural") {
            this.style.setProperty("--aurora-grid-height", "auto");
            return;
        }
        if (mode === "fixed") {
            this.style.setProperty("--aurora-grid-height", this._safeCssHeight(this._config.fixed_height));
            return;
        }
        const area = this.shadowRoot?.querySelector(".calendar-area");
        if (!area)
            return;
        const bottomGap = 16;
        const available = window.innerHeight - area.getBoundingClientRect().top - bottomGap;
        const gridH = Math.max(320, Math.floor(available));
        this.style.setProperty("--aurora-grid-height", `${gridH}px`);
    }
    // ------------------------------------------------------------------
    // HA card lifecycle
    // ------------------------------------------------------------------
    setConfig(config) {
        const integration = config.integration || "aurora_calendar";
        this._config = { ...CONFIG_DEFAULTS, ...config, integration };
        this._storageKey = `aurora-calendar-${integration}`;
    }
    getCardSize() {
        return 6;
    }
    getGridOptions() {
        return {
            columns: "full",
            min_columns: 6,
            rows: 12,
            min_rows: 6,
        };
    }
    static getConfigElement() {
        return document.createElement("aurora-calendar-card-editor");
    }
    static getStubConfig() {
        return { type: "custom:aurora-calendar-card", integration: "aurora_calendar", ...CONFIG_DEFAULTS };
    }
    // hass is set by HA on every state change — init view only once, then keep events fresh
    updated(changed) {
        this._scheduleSettledGridHeightSync();
        if (changed.has("hass") && this.hass && !this._defaultViewLoaded) {
            this._initViewMode();
            this._defaultViewLoaded = true;
        }
        if (this.hass && this._config) {
            this._syncRealtimeSubscriptions();
            this._resolveBackgroundMediaIfNeeded();
            const key = this._fetchKey;
            if (key !== this._lastFetchKey) {
                this._lastFetchKey = key;
                void this._fetchEvents();
            }
            const weatherKey = this._weatherFetchKey;
            if (weatherKey !== this._lastWeatherFetchKey) {
                this._lastWeatherFetchKey = weatherKey;
                void this._fetchWeather();
            }
        }
    }
    // ------------------------------------------------------------------
    // View mode initialisation (localStorage → HA default → "Month")
    // ------------------------------------------------------------------
    _initViewMode() {
        const persisted = loadPersistedView(this._storageKey);
        if (persisted) {
            this._viewMode = persisted;
            return;
        }
        const selectId = `select.${this._config.integration}_view_mode`;
        const haDefault = this.hass?.states[selectId]?.state;
        if (haDefault && VIEW_MODES.includes(haDefault)) {
            this._viewMode = haDefault;
        }
    }
    // ------------------------------------------------------------------
    // Derived data from HA entities
    // ------------------------------------------------------------------
    get _calendars() {
        const persons = this._persons;
        return (this._configAttrs.calendars ?? []).map((cal) => {
            const fallbackPerson = cal.entity_id
                .replace(/^calendar\./, "")
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());
            const person = cal.person || fallbackPerson;
            const personInfo = persons.find((p) => p.person === person);
            return {
                ...cal,
                person,
                color: personInfo?.color || cal.color || "#3B82F6",
                avatar: personInfo?.avatar || cal.avatar || "",
            };
        });
    }
    get _writableCalendars() {
        return this._calendars.filter((calendar) => this._supportsCalendarFeature(calendar.entity_id, CALENDAR_FEATURE_CREATE_EVENT));
    }
    _calendarByEntity(entityId) {
        return this._calendars.find((calendar) => calendar.entity_id === entityId);
    }
    _draftColor(draft) {
        if (!draft)
            return "var(--primary-color)";
        return this._calendarByEntity(draft.calendarEntity)?.color || "var(--primary-color)";
    }
    _personAvatarMarkup(person, color, avatarUrl) {
        const initial = (person || "?").charAt(0).toUpperCase();
        return b `
      <span class="event-dialog-avatar" style="--person-color: ${color}">
        ${initial}
        ${avatarUrl ? b `<img src="${avatarUrl}" alt="${person}" @error=${retryImgOnError} />` : A}
      </span>
    `;
    }
    _eventAvatarMarkup(event) {
        const calendar = this._calendarByEntity(event.calendarEntity);
        return this._personAvatarMarkup(event.person, calendar?.color || event.color, calendar?.avatar);
    }
    get _fetchKey() {
        const [start, end] = getDateRange(this._viewMode, this._offset, this._config.week_start);
        const cals = this._calendars.map((c) => c.entity_id).sort().join(",");
        return `${start.toISOString()}|${end.toISOString()}|${cals}`;
    }
    get _filteredEvents() {
        return this._events.filter((e) => this._filters[e.person] !== false);
    }
    get _weatherEntity() {
        return String(this._configAttrs.weather_entity ?? "");
    }
    get _occasionsEntityId() {
        return String(this._configAttrs.occasions_entity_id ?? "");
    }
    get _weatherFetchKey() {
        const [start, end] = getDateRange(this._viewMode, this._offset, this._config.week_start);
        return [
            this._config.show_weather ? "show" : "hide",
            this._weatherEntity,
            start.toISOString(),
            end.toISOString(),
        ].join("|");
    }
    async _fetchEvents() {
        const [start, end] = getDateRange(this._viewMode, this._offset, this._config.week_start);
        const calendars = this._calendars;
        const requestId = ++this._fetchRequestId;
        if (calendars.length === 0) {
            this._events = [];
            this._loading = false;
            return;
        }
        this._loading = true;
        try {
            const events = await fetchEventsForRange(this.hass, calendars, start, end);
            if (requestId === this._fetchRequestId) {
                this._events = events;
            }
        }
        finally {
            if (requestId === this._fetchRequestId) {
                this._loading = false;
            }
        }
    }
    _syncRealtimeSubscriptions() {
        const connection = this.hass?.connection;
        if (!connection || connection === this._subscribedConnection)
            return;
        this._teardownRealtimeSubscriptions();
        this._subscribedConnection = connection;
        void connection
            .subscribeEvents(this._handleStateChanged, "state_changed")
            .then((unsubscribe) => {
            if (this._subscribedConnection === connection) {
                this._unsubscribeStateChanged = unsubscribe;
            }
            else {
                unsubscribe();
            }
        });
    }
    _teardownRealtimeSubscriptions() {
        this._unsubscribeStateChanged?.();
        this._unsubscribeStateChanged = undefined;
        this._subscribedConnection = undefined;
    }
    _queueRealtimeRefresh(events, weather, delay = 350) {
        this._pendingEventsRefresh || (this._pendingEventsRefresh = events);
        this._pendingWeatherRefresh || (this._pendingWeatherRefresh = weather);
        this._clearRealtimeRefreshTimer();
        this._realtimeRefreshTimer = window.setTimeout(() => {
            this._realtimeRefreshTimer = undefined;
            const refreshEvents = this._pendingEventsRefresh;
            const refreshWeather = this._pendingWeatherRefresh;
            this._pendingEventsRefresh = false;
            this._pendingWeatherRefresh = false;
            if (refreshEvents) {
                this._lastFetchKey = "";
                void this._fetchEvents();
            }
            if (refreshWeather) {
                this._lastWeatherFetchKey = "";
                void this._fetchWeather();
            }
        }, delay);
    }
    _clearRealtimeRefreshTimer() {
        if (!this._realtimeRefreshTimer)
            return;
        window.clearTimeout(this._realtimeRefreshTimer);
        this._realtimeRefreshTimer = undefined;
    }
    _clearDialogCloseTimer() {
        if (!this._dialogCloseTimer)
            return;
        window.clearTimeout(this._dialogCloseTimer);
        this._dialogCloseTimer = undefined;
    }
    _closeDialogWithTransition(kind, afterClose) {
        if (this._closingDialog)
            return;
        this._clearDialogCloseTimer();
        this._closingDialog = kind;
        this._dialogCloseTimer = window.setTimeout(() => {
            this._dialogCloseTimer = undefined;
            afterClose();
            this._closingDialog = null;
        }, 170);
    }
    get _configSensorEntityId() {
        return `sensor.${this._config.integration}_events`;
    }
    get _calendarEntityIds() {
        return new Set(this._calendars.map((calendar) => calendar.entity_id));
    }
    _isAuroraFilterEntity(entityId) {
        return entityId.startsWith(`switch.${this._config.integration}_filter_`);
    }
    async _fetchWeather() {
        if (!this._config.show_weather || !this._weatherEntity) {
            this._weatherByDate = {};
            return;
        }
        this._weatherByDate = await fetchDailyWeather(this.hass, this._weatherEntity);
    }
    _daysInRange(start, end) {
        const days = [];
        const cur = new Date(start);
        while (cur <= end) {
            days.push(new Date(cur));
            cur.setDate(cur.getDate() + 1);
        }
        return days;
    }
    get _configAttrs() {
        const id = `sensor.${this._config.integration}_events`;
        return (this.hass?.states[id]?.attributes ?? {});
    }
    get _persons() {
        const raw = this._configAttrs.persons ?? [];
        return raw.map((p) => {
            // Always read entity_picture from live hass state — the coordinator's
            // cached URL can have a stale hash that HA regenerates after restart.
            const livePic = p.person_entity_id
                ? String(this.hass?.states[p.person_entity_id]?.attributes?.entity_picture ?? "")
                : "";
            return livePic ? { ...p, avatar: livePic } : p;
        });
    }
    get _filters() {
        return (this._configAttrs.filters ?? {});
    }
    get _timeGridEvents() {
        return this._filteredEvents.map((event) => ({
            ...event,
            canDragEdit: !event.all_day && !event.recurrenceId && this._canUpdateEvent(event),
        }));
    }
    // ------------------------------------------------------------------
    // User actions (all local — no HA service calls for navigation)
    // ------------------------------------------------------------------
    _navigate(dir) {
        this._offset += dir;
    }
    _resetToToday() {
        this._offset = 0;
    }
    _selectView(mode) {
        this._viewMode = mode;
        this._offset = 0;
        this._viewMenuOpen = false;
        persistView(this._storageKey, mode);
    }
    _toggleFilter(person) {
        this.hass.callService("aurora_calendar", "toggle_filter", { person });
    }
    _handleWeekEmptyClick() {
        this._navigate(1);
    }
    _toggleFilterMenu() {
        this._filterMenuOpen = !this._filterMenuOpen;
        this._viewMenuOpen = false;
        this._jumpMenuOpen = false;
    }
    _toggleViewMenu() {
        this._viewMenuOpen = !this._viewMenuOpen;
        this._filterMenuOpen = false;
        this._jumpMenuOpen = false;
    }
    _toggleJumpMenu() {
        this._jumpMenuOpen = !this._jumpMenuOpen;
        this._filterMenuOpen = false;
        this._viewMenuOpen = false;
    }
    _jumpMonthValue() {
        const today = localToday();
        const ref = new Date(today.getFullYear(), today.getMonth() + this._offset, 1);
        return `${ref.getFullYear()}-${String(ref.getMonth() + 1).padStart(2, "0")}`;
    }
    _jumpDateValue(start) {
        const active = this._viewMode === "Today" || this._viewMode === "Next 7 Days"
            ? start
            : localToday();
        return this._dateInputValue(active);
    }
    _handleJumpMonth(event) {
        const value = event.target.value;
        if (!value)
            return;
        const [year, month] = value.split("-").map(Number);
        if (!year || !month)
            return;
        const today = localToday();
        this._offset = (year - today.getFullYear()) * 12 + (month - 1 - today.getMonth());
        this._jumpMenuOpen = false;
    }
    _handleJumpDate(event) {
        const value = event.target.value;
        if (!value)
            return;
        const selected = new Date(`${value}T00:00:00`);
        if (Number.isNaN(selected.getTime()))
            return;
        const today = localToday();
        if (this._viewMode === "Today") {
            this._offset = this._dayDiff(today, selected);
        }
        else if (this._viewMode === "Next 7 Days") {
            this._offset = Math.trunc(this._dayDiff(today, selected) / 7);
        }
        else if (this._viewMode === "Week") {
            const currentStart = getDateRange("Week", 0, this._config.week_start)[0];
            const selectedStart = this._startOfWeek(selected);
            this._offset = Math.trunc(this._dayDiff(currentStart, selectedStart) / 7);
        }
        else if (this._viewMode === "Biweek") {
            const currentStart = getDateRange("Biweek", 0, this._config.week_start)[0];
            const selectedStart = this._startOfWeek(selected);
            this._offset = Math.trunc(this._dayDiff(currentStart, selectedStart) / 14);
        }
        else if (this._viewMode === "Rolling 2 Weeks") {
            const currentStart = getDateRange("Rolling 2 Weeks", 0, this._config.week_start)[0];
            this._offset = Math.trunc(this._dayDiff(currentStart, selected) / 14);
        }
        this._jumpMenuOpen = false;
    }
    _handleJumpInputClick(event) {
        event.stopPropagation();
    }
    _handleEventOpen(event) {
        this._clearDialogCloseTimer();
        this._closingDialog = null;
        this._eventActionError = "";
        this._deleteConfirmOpen = false;
        this._editDialogOpen = false;
        this._editDraft = null;
        this._selectedEvent = event.detail.event;
    }
    _closeEventDialog() {
        if (this._deletingEvent)
            return;
        this._closeDialogWithTransition("event", () => {
            this._eventActionError = "";
            this._deleteConfirmOpen = false;
            this._editDialogOpen = false;
            this._editDraft = null;
            this._selectedEvent = null;
        });
    }
    _supportsCalendarFeature(entityId, feature) {
        const raw = this.hass?.states[entityId]?.attributes?.supported_features;
        const features = typeof raw === "number" ? raw : Number(raw);
        return Number.isFinite(features) && (features & feature) === feature;
    }
    _defaultCreateDate() {
        const [start, end] = getDateRange(this._viewMode, this._offset, this._config.week_start);
        const today = localToday();
        if (today >= start && today <= end)
            return today;
        if (this._viewMode === "Month") {
            return new Date(today.getFullYear(), today.getMonth() + this._offset, 1);
        }
        return start;
    }
    _defaultCreateTimes(baseDate) {
        const today = localToday();
        if (this._sameLocalDay(baseDate, today)) {
            const now = new Date();
            const startHour = Math.min(22, Math.max(8, now.getHours() + 1));
            return [`${String(startHour).padStart(2, "0")}:00`, `${String(startHour + 1).padStart(2, "0")}:00`];
        }
        return ["09:00", "10:00"];
    }
    _sameLocalDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }
    _openCreateDialog() {
        this._clearDialogCloseTimer();
        this._closingDialog = null;
        const calendar = this._writableCalendars[0] || this._calendars[0];
        const baseDate = this._defaultCreateDate();
        const [startTime, endTime] = this._defaultCreateTimes(baseDate);
        const date = this._dateInputValue(baseDate);
        this._createDraft = {
            calendarEntity: calendar?.entity_id || "",
            title: "",
            allDay: false,
            startDate: date,
            endDate: date,
            startTime,
            endTime,
            location: "",
            description: "",
        };
        this._eventActionError = "";
        this._createDialogOpen = true;
        this._filterMenuOpen = false;
        this._viewMenuOpen = false;
        this._jumpMenuOpen = false;
    }
    _closeCreateDialog() {
        if (this._savingEvent)
            return;
        this._closeDialogWithTransition("create", () => {
            this._eventActionError = "";
            this._createCalendarMenuOpen = false;
            this._createDialogOpen = false;
            this._createDraft = null;
        });
    }
    _addDays(date, days) {
        const next = new Date(date);
        next.setDate(next.getDate() + days);
        return next;
    }
    _addDaysToDateInput(value, days) {
        const date = new Date(`${value}T00:00:00`);
        if (Number.isNaN(date.getTime()))
            return value;
        return this._dateInputValue(this._addDays(date, days));
    }
    _normalizeDraft(draft) {
        return normalizeDraft(draft);
    }
    _draftError(draft) {
        return draftError(draft);
    }
    _updateDraft(draft, field, value) {
        const next = { ...draft, [field]: value };
        return this._normalizeDraft(next);
    }
    _updateCreateDraft(field, value) {
        if (!this._createDraft)
            return;
        this._eventActionError = "";
        this._createDraft = this._updateDraft(this._createDraft, field, value);
    }
    _updateEditDraft(field, value) {
        if (!this._editDraft)
            return;
        this._eventActionError = "";
        this._editDraft = this._updateDraft(this._editDraft, field, value);
    }
    _eventActionErrorMessage(error) {
        if (error instanceof Error && error.message)
            return error.message;
        if (typeof error === "object" && error && "message" in error) {
            return String(error.message || "Calendar action failed");
        }
        return "Calendar action failed";
    }
    _toggleCreateCalendarMenu() {
        this._createCalendarMenuOpen = !this._createCalendarMenuOpen;
    }
    _selectCreateCalendar(entityId) {
        this._updateCreateDraft("calendarEntity", entityId);
        this._createCalendarMenuOpen = false;
    }
    async _handleCreateSubmit(event) {
        event.preventDefault();
        const draft = this._createDraft;
        if (!draft || this._savingEvent)
            return;
        const summary = draft.title.trim();
        if (!summary || !draft.calendarEntity)
            return;
        const data = { summary };
        const description = draft.description.trim();
        const location = draft.location.trim();
        if (description)
            data.description = description;
        if (location)
            data.location = location;
        if (draft.allDay) {
            if (!draft.startDate || !draft.endDate || draft.endDate < draft.startDate) {
                this._eventActionError = "End date must be on or after start date.";
                return;
            }
            data.start_date = draft.startDate;
            data.end_date = this._addDaysToDateInput(draft.endDate, 1);
        }
        else {
            const startDateTime = `${draft.startDate} ${draft.startTime}:00`;
            const endDateTime = `${draft.endDate} ${draft.endTime}:00`;
            if (!draft.startDate || !draft.endDate || !draft.startTime || !draft.endTime || endDateTime <= startDateTime) {
                this._eventActionError = "End time must be after start time.";
                return;
            }
            data.start_date_time = startDateTime;
            data.end_date_time = endDateTime;
        }
        this._savingEvent = true;
        this._eventActionError = "";
        try {
            await this.hass.callService("calendar", "create_event", data, {
                entity_id: draft.calendarEntity,
            });
            this._createDialogOpen = false;
            this._createDraft = null;
            this._lastFetchKey = "";
            await this._fetchEvents();
        }
        catch (error) {
            this._eventActionError = this._eventActionErrorMessage(error);
        }
        finally {
            this._savingEvent = false;
        }
    }
    _canDeleteEvent(event) {
        return Boolean(event.uid) &&
            this._supportsCalendarFeature(event.calendarEntity, CALENDAR_FEATURE_DELETE_EVENT);
    }
    _canUpdateEvent(event) {
        return Boolean(event.uid) &&
            this._supportsCalendarFeature(event.calendarEntity, CALENDAR_FEATURE_UPDATE_EVENT);
    }
    _openEditDialog() {
        const event = this._selectedEvent;
        if (!event)
            return;
        if (!this._canUpdateEvent(event)) {
            this._eventActionError = "This calendar event cannot be edited from Aurora.";
            return;
        }
        const start = this._eventDate(event.start, event.all_day);
        const end = this._eventDate(event.end, event.all_day);
        const endDateInput = event.all_day
            ? this._addDaysToDateInput(this._dateInputValue(end), -1)
            : this._dateInputValue(end);
        this._editDraft = this._normalizeDraft({
            calendarEntity: event.calendarEntity,
            title: event.title,
            allDay: event.all_day,
            startDate: this._dateInputValue(start),
            endDate: endDateInput,
            startTime: this._timeInputValue(start),
            endTime: this._timeInputValue(end),
            location: event.location || "",
            description: event.description || "",
        });
        this._eventActionError = "";
        this._deleteConfirmOpen = false;
        this._clearDialogCloseTimer();
        this._closingDialog = null;
        this._editDialogOpen = true;
    }
    _closeEditDialog() {
        if (this._savingEvent)
            return;
        this._closeDialogWithTransition("edit", () => {
            this._eventActionError = "";
            this._editDialogOpen = false;
            this._editDraft = null;
        });
    }
    _openDeleteConfirm(locale) {
        const event = this._selectedEvent;
        if (!event)
            return;
        if (!this._canDeleteEvent(event)) {
            this._eventActionError = t(locale, "deleteEventUnavailable");
            return;
        }
        this._eventActionError = "";
        this._deleteConfirmOpen = true;
    }
    _cancelDeleteConfirm() {
        if (this._deletingEvent)
            return;
        this._deleteConfirmOpen = false;
    }
    async _deleteSelectedEvent(locale) {
        const event = this._selectedEvent;
        if (!event || this._deletingEvent)
            return;
        if (!this._canDeleteEvent(event) || !event.uid) {
            this._eventActionError = t(locale, "deleteEventUnavailable");
            return;
        }
        const data = { uid: event.uid };
        if (event.recurrenceId) {
            data.recurrence_id = event.recurrenceId;
        }
        this._deletingEvent = true;
        this._eventActionError = "";
        try {
            await this.hass.callWS({
                type: "calendar/event/delete",
                entity_id: event.calendarEntity,
                ...data,
            });
            this._deleteConfirmOpen = false;
            this._selectedEvent = null;
            this._lastFetchKey = "";
            await this._fetchEvents();
        }
        catch (error) {
            this._eventActionError = this._eventActionErrorMessage(error);
        }
        finally {
            this._deletingEvent = false;
        }
    }
    async _handleEditSubmit(event) {
        event.preventDefault();
        const selected = this._selectedEvent;
        const draft = this._editDraft;
        if (!selected || !draft || !selected.uid || this._savingEvent)
            return;
        const eventPayload = this._eventPayloadFromDraft(draft, true);
        if (!eventPayload)
            return;
        eventPayload.description = draft.description.trim();
        eventPayload.location = draft.location.trim();
        const data = {
            type: "calendar/event/update",
            entity_id: selected.calendarEntity,
            uid: selected.uid,
            event: eventPayload,
        };
        if (selected.recurrenceId) {
            data.recurrence_id = selected.recurrenceId;
        }
        this._savingEvent = true;
        this._eventActionError = "";
        try {
            await this.hass.callWS(data);
            this._editDialogOpen = false;
            this._editDraft = null;
            this._selectedEvent = null;
            this._lastFetchKey = "";
            await this._fetchEvents();
        }
        catch (error) {
            this._eventActionError = this._eventActionErrorMessage(error);
        }
        finally {
            this._savingEvent = false;
        }
    }
    async _handleEventMove(event) {
        const calendarEvent = event.detail.event;
        if (!calendarEvent.uid || !this._canUpdateEvent(calendarEvent))
            return;
        const payload = {
            summary: calendarEvent.title,
            dtstart: event.detail.start,
            dtend: event.detail.end,
            description: calendarEvent.description || "",
            location: calendarEvent.location || "",
        };
        const data = {
            type: "calendar/event/update",
            entity_id: calendarEvent.calendarEntity,
            uid: calendarEvent.uid,
            event: payload,
        };
        this._loading = true;
        try {
            await this.hass.callWS(data);
            this._lastFetchKey = "";
            await this._fetchEvents();
        }
        catch (error) {
            console.error("Aurora Calendar: failed to move event", error);
        }
        finally {
            this._loading = false;
        }
    }
    _startOfWeek(date) {
        const startDay = this._config.week_start === "monday" ? 1 : 0;
        const d = new Date(date);
        const diff = (d.getDay() - startDay + 7) % 7;
        d.setDate(d.getDate() - diff);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    _dayDiff(start, end) {
        return Math.round((end.getTime() - start.getTime()) / 86400000);
    }
    _dateInputValue(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    }
    _timeInputValue(date) {
        return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    }
    _eventPayloadFromDraft(draft, useIsoSeparator = false) {
        const summary = draft.title.trim();
        if (!summary || !draft.calendarEntity)
            return null;
        const payload = { summary };
        const description = draft.description.trim();
        const location = draft.location.trim();
        if (description)
            payload.description = description;
        if (location)
            payload.location = location;
        if (draft.allDay) {
            if (!draft.startDate || !draft.endDate || draft.endDate < draft.startDate) {
                this._eventActionError = "End date must be on or after start date.";
                return null;
            }
            payload.dtstart = draft.startDate;
            payload.dtend = this._addDaysToDateInput(draft.endDate, 1);
            return payload;
        }
        const separator = useIsoSeparator ? "T" : " ";
        const startDateTime = `${draft.startDate}${separator}${draft.startTime}:00`;
        const endDateTime = `${draft.endDate}${separator}${draft.endTime}:00`;
        if (!draft.startDate || !draft.endDate || !draft.startTime || !draft.endTime || endDateTime <= startDateTime) {
            this._eventActionError = "End time must be after start time.";
            return null;
        }
        payload.dtstart = startDateTime;
        payload.dtend = endDateTime;
        return payload;
    }
    _eventDateLabel(event, locale) {
        const start = this._eventDate(event.start, event.all_day);
        return new Intl.DateTimeFormat(locale, {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        }).format(start);
    }
    _eventTimeLabel(event, locale) {
        if (event.all_day)
            return t(locale, "allDayLabel");
        const start = this._eventDate(event.start, false);
        const end = this._eventDate(event.end, false);
        const formatter = new Intl.DateTimeFormat(locale, {
            hour: "numeric",
            minute: "2-digit",
        });
        return `${formatter.format(start)} - ${formatter.format(end)}`;
    }
    _eventDate(value, allDay) {
        return new Date(allDay && !value.includes("T") ? `${value}T00:00:00` : value);
    }
    _renderEventDialog(locale) {
        const event = this._selectedEvent;
        if (!event)
            return A;
        const textColor = this._contrastText(event.color);
        const canDelete = this._canDeleteEvent(event);
        const canUpdate = this._canUpdateEvent(event);
        return b `
      <div class="event-dialog-backdrop ${this._closingDialog === "event" ? "closing" : ""}" @click=${this._closeEventDialog}>
        <section
          class="event-dialog create-dialog themed-dialog"
          style="--event-color: ${event.color}; --event-text-color: ${textColor};"
          role="dialog"
          aria-modal="true"
          aria-label=${event.title}
          @click=${(e) => e.stopPropagation()}
        >
          <header class="create-dialog-header">
            <ha-icon icon="mdi:calendar-text"></ha-icon>
            <h2>${event.title}</h2>
            <button class="create-dialog-close" @click=${this._closeEventDialog} aria-label=${t(locale, "close")}>x</button>
          </header>

          <div class="create-form event-view-form">
            <div class="form-notice event-owner-strip">
              ${this._eventAvatarMarkup(event)}
              <span>${event.calendarName || event.person}</span>
            </div>
            <div class="detail-row">
              <ha-icon icon="mdi:calendar"></ha-icon>
              <div>
                <span class="detail-label">${t(locale, "date")}</span>
                <span class="detail-value">${this._eventDateLabel(event, locale)}</span>
              </div>
            </div>
            <div class="detail-row">
              <ha-icon icon="mdi:clock-outline"></ha-icon>
              <div>
                <span class="detail-label">${t(locale, "time")}</span>
                <span class="detail-value">${this._eventTimeLabel(event, locale)}</span>
              </div>
            </div>
            <div class="detail-row">
              <ha-icon icon="mdi:calendar-account"></ha-icon>
              <div>
                <span class="detail-label">${t(locale, "calendar")}</span>
                <span class="detail-value">${event.calendarName || event.calendarEntity}</span>
              </div>
            </div>
            ${event.location ? b `
              <div class="detail-row">
                <ha-icon icon="mdi:map-marker-outline"></ha-icon>
                <div>
                  <span class="detail-label">${t(locale, "location")}</span>
                  <span class="detail-value">${event.location}</span>
                </div>
              </div>
            ` : A}
            ${event.description ? b `
              <div class="detail-section">
                <span class="detail-label">${t(locale, "description")}</span>
                <p>${event.description}</p>
              </div>
            ` : A}
            ${this._eventActionError ? b `
              <div class="event-action-error">${this._eventActionError}</div>
            ` : A}
            ${this._deleteConfirmOpen ? b `
              <div class="delete-confirm-panel">
                <div>
                  <strong>${t(locale, "deleteEventConfirm")}</strong>
                  <span>${event.title}</span>
                </div>
                <div class="event-dialog-actions">
                  <button
                    class="secondary-action"
                    @click=${this._cancelDeleteConfirm}
                    ?disabled=${this._deletingEvent}
                  >
                    ${t(locale, "cancel")}
                  </button>
                  <button
                    class="danger-action"
                    @click=${() => this._deleteSelectedEvent(locale)}
                    ?disabled=${this._deletingEvent}
                  >
                    <ha-icon icon="mdi:trash-can-outline"></ha-icon>
                    <span>${this._deletingEvent ? t(locale, "loading") : t(locale, "deleteEvent")}</span>
                  </button>
                </div>
              </div>
            ` : b `
              <div class="event-dialog-actions">
                <button
                  class="secondary-action"
                  @click=${this._openEditDialog}
                  ?disabled=${this._deletingEvent || !canUpdate}
                  title=${t(locale, "editEvent")}
                >
                  <ha-icon icon="mdi:calendar-edit"></ha-icon>
                  <span>${t(locale, "editEvent")}</span>
                </button>
                <button
                  class="danger-action"
                  @click=${() => this._openDeleteConfirm(locale)}
                  ?disabled=${this._deletingEvent || !canDelete}
                  title=${canDelete ? t(locale, "deleteEvent") : t(locale, "deleteEventUnavailable")}
                >
                  <ha-icon icon="mdi:trash-can-outline"></ha-icon>
                  <span>${t(locale, "deleteEvent")}</span>
                </button>
              </div>
            `}
          </div>
        </section>
      </div>
    `;
    }
    _renderEditDialog(locale) {
        const selected = this._selectedEvent;
        if (!this._editDialogOpen || !this._editDraft || !selected)
            return A;
        const draft = this._editDraft;
        const draftError = this._draftError(draft);
        return b `
      <div class="event-dialog-backdrop ${this._closingDialog === "edit" ? "closing" : ""}" @click=${this._closeEditDialog}>
        <section
          class="event-dialog create-dialog themed-dialog"
          style="--event-color: ${selected.color}; --event-text-color: ${this._contrastText(selected.color)};"
          role="dialog"
          aria-modal="true"
          aria-label=${t(locale, "editEvent")}
          @click=${(e) => e.stopPropagation()}
        >
          <header class="create-dialog-header">
            <ha-icon icon="mdi:calendar-edit"></ha-icon>
            <h2>${t(locale, "editEvent")}</h2>
            <button class="create-dialog-close" @click=${this._closeEditDialog} aria-label=${t(locale, "close")}>x</button>
          </header>

          <form class="create-form" @submit=${this._handleEditSubmit}>
            <div class="form-notice event-owner-strip">
              ${this._eventAvatarMarkup(selected)}
              <span>${selected.calendarName || selected.calendarEntity}</span>
            </div>

            <label>
              <span>${t(locale, "title")}</span>
              <input
                type="text"
                .value=${draft.title}
                required
                @input=${(event) => this._updateEditDraft("title", event.target.value)}
              />
            </label>

            <label class="check-row">
              <input
                type="checkbox"
                .checked=${draft.allDay}
                @change=${(event) => this._updateEditDraft("allDay", event.target.checked)}
              />
              <span>${t(locale, "allDayLabel")}</span>
            </label>

            ${draft.allDay ? b `
              <div class="form-grid">
                <label>
                  <span>${t(locale, "start")}</span>
                  <input
                    type="date"
                    .value=${draft.startDate}
                    required
                    @input=${(event) => this._updateEditDraft("startDate", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "end")}</span>
                  <input
                    type="date"
                    .value=${draft.endDate}
                    required
                    @input=${(event) => this._updateEditDraft("endDate", event.target.value)}
                  />
                </label>
              </div>
            ` : b `
              <div class="form-grid date-time-grid">
                <label>
                  <span>${t(locale, "start")}</span>
                  <input
                    type="date"
                    .value=${draft.startDate}
                    required
                    @input=${(event) => this._updateEditDraft("startDate", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "end")}</span>
                  <input
                    type="date"
                    .value=${draft.endDate}
                    required
                    @input=${(event) => this._updateEditDraft("endDate", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "start")}</span>
                  <input
                    type="time"
                    .value=${draft.startTime}
                    required
                    @input=${(event) => this._updateEditDraft("startTime", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "end")}</span>
                  <input
                    type="time"
                    .value=${draft.endTime}
                    required
                    @input=${(event) => this._updateEditDraft("endTime", event.target.value)}
                  />
                </label>
              </div>
            `}

            <label>
              <span>${t(locale, "location")}</span>
              <input
                type="text"
                .value=${draft.location}
                @input=${(event) => this._updateEditDraft("location", event.target.value)}
              />
            </label>

            <label>
              <span>${t(locale, "description")}</span>
              <textarea
                .value=${draft.description}
                @input=${(event) => this._updateEditDraft("description", event.target.value)}
              ></textarea>
            </label>

            ${draftError ? b `
              <div class="event-action-error">${draftError}</div>
            ` : this._eventActionError ? b `
              <div class="event-action-error">${this._eventActionError}</div>
            ` : A}

            <div class="create-form-actions">
              <button type="button" class="secondary-action" @click=${this._closeEditDialog}>
                ${t(locale, "cancel")}
              </button>
              <button type="submit" class="primary-action" ?disabled=${this._savingEvent || !!draftError}>
                <ha-icon icon="mdi:content-save-outline"></ha-icon>
                <span>${this._savingEvent ? t(locale, "loading") : t(locale, "updateEvent")}</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    `;
    }
    _renderCreateDialog(locale) {
        if (!this._createDialogOpen || !this._createDraft)
            return A;
        const draft = this._createDraft;
        const writableCalendars = this._writableCalendars;
        const canCreate = writableCalendars.length > 0;
        const draftError = this._draftError(draft);
        return b `
      <div class="event-dialog-backdrop ${this._closingDialog === "create" ? "closing" : ""}" @click=${this._closeCreateDialog}>
        <section
          class="event-dialog create-dialog themed-dialog"
          style="--event-color: ${this._draftColor(draft)}; --event-text-color: ${this._contrastText(this._draftColor(draft))};"
          role="dialog"
          aria-modal="true"
          aria-label=${t(locale, "createEvent")}
          @click=${(e) => e.stopPropagation()}
        >
          <header class="create-dialog-header">
            <ha-icon icon="mdi:calendar-plus"></ha-icon>
            <h2>${t(locale, "createEvent")}</h2>
            <button class="create-dialog-close" @click=${this._closeCreateDialog} aria-label=${t(locale, "close")}>x</button>
          </header>

          <form class="create-form" @submit=${this._handleCreateSubmit}>
            ${canCreate ? b `
              <div class="create-calendar-picker">
                <span class="form-field-label">${t(locale, "calendar")}</span>
                <button
                  type="button"
                  class="create-calendar-trigger ${this._createCalendarMenuOpen ? "open" : ""}"
                  @click=${this._toggleCreateCalendarMenu}
                  aria-label=${t(locale, "calendar")}
                  aria-expanded=${this._createCalendarMenuOpen}
                >
                  ${(() => {
            const selected = this._calendarByEntity(draft.calendarEntity) || writableCalendars[0];
            return b `
                      <span class="option-avatar" style="--person-color: ${selected?.color || "var(--primary-color)"}">
                        ${(selected?.person || "?").charAt(0).toUpperCase()}
                        ${selected?.avatar ? b `<img src="${selected.avatar}" alt="${selected.person}" @error=${retryImgOnError} />` : A}
                      </span>
                      <span class="option-name">${selected?.person || selected?.entity_id || t(locale, "calendar")}</span>
                      <span class="chevron">⌄</span>
                    `;
        })()}
                </button>
                ${this._createCalendarMenuOpen ? b `
                  <div class="create-calendar-menu" role="menu">
                    ${writableCalendars.map((calendar) => b `
                      <button
                        type="button"
                        class="filter-option ${calendar.entity_id === draft.calendarEntity ? "active" : ""}"
                        style="--person-color: ${calendar.color}"
                        @click=${() => this._selectCreateCalendar(calendar.entity_id)}
                        role="menuitemradio"
                        aria-checked=${calendar.entity_id === draft.calendarEntity}
                      >
                        <span class="option-avatar">
                          ${(calendar.person || calendar.entity_id).charAt(0).toUpperCase()}
                          ${calendar.avatar ? b `<img src="${calendar.avatar}" alt="${calendar.person}" @error=${retryImgOnError} />` : A}
                        </span>
                        <span class="option-name">${calendar.person || calendar.entity_id}</span>
                        <span class="option-check">${calendar.entity_id === draft.calendarEntity ? "✓" : ""}</span>
                      </button>
                    `)}
                  </div>
                ` : A}
              </div>
            ` : b `
              <div class="form-notice">${t(locale, "noWritableCalendars")}</div>
            `}

            <label>
              <span>${t(locale, "title")}</span>
              <input
                type="text"
                .value=${draft.title}
                required
                ?disabled=${!canCreate}
                @input=${(event) => this._updateCreateDraft("title", event.target.value)}
              />
            </label>

            <label class="check-row">
              <input
                type="checkbox"
                .checked=${draft.allDay}
                ?disabled=${!canCreate}
                @change=${(event) => this._updateCreateDraft("allDay", event.target.checked)}
              />
              <span>${t(locale, "allDayLabel")}</span>
            </label>

            ${draft.allDay ? b `
              <div class="form-grid">
                <label>
                  <span>${t(locale, "start")}</span>
                  <input
                    type="date"
                    .value=${draft.startDate}
                    required
                    ?disabled=${!canCreate}
                    @input=${(event) => this._updateCreateDraft("startDate", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "end")}</span>
                  <input
                    type="date"
                    .value=${draft.endDate}
                    required
                    ?disabled=${!canCreate}
                    @input=${(event) => this._updateCreateDraft("endDate", event.target.value)}
                  />
                </label>
              </div>
            ` : b `
              <div class="form-grid date-time-grid">
                <label>
                  <span>${t(locale, "start")}</span>
                  <input
                    type="date"
                    .value=${draft.startDate}
                    required
                    ?disabled=${!canCreate}
                    @input=${(event) => this._updateCreateDraft("startDate", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "end")}</span>
                  <input
                    type="date"
                    .value=${draft.endDate}
                    required
                    ?disabled=${!canCreate}
                    @input=${(event) => this._updateCreateDraft("endDate", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "start")}</span>
                  <input
                    type="time"
                    .value=${draft.startTime}
                    required
                    ?disabled=${!canCreate}
                    @input=${(event) => this._updateCreateDraft("startTime", event.target.value)}
                  />
                </label>
                <label>
                  <span>${t(locale, "end")}</span>
                  <input
                    type="time"
                    .value=${draft.endTime}
                    required
                    ?disabled=${!canCreate}
                    @input=${(event) => this._updateCreateDraft("endTime", event.target.value)}
                  />
                </label>
              </div>
            `}

            <label>
              <span>${t(locale, "location")}</span>
              <input
                type="text"
                .value=${draft.location}
                ?disabled=${!canCreate}
                @input=${(event) => this._updateCreateDraft("location", event.target.value)}
              />
            </label>

            <label>
              <span>${t(locale, "description")}</span>
              <textarea
                .value=${draft.description}
                ?disabled=${!canCreate}
                @input=${(event) => this._updateCreateDraft("description", event.target.value)}
              ></textarea>
            </label>

            ${draftError ? b `
              <div class="event-action-error">${draftError}</div>
            ` : this._eventActionError ? b `
              <div class="event-action-error">${this._eventActionError}</div>
            ` : A}

            <div class="create-form-actions">
              <button type="button" class="secondary-action" @click=${this._closeCreateDialog}>
                ${t(locale, "cancel")}
              </button>
              <button type="submit" class="primary-action" ?disabled=${!canCreate || this._savingEvent || !!draftError}>
                <ha-icon icon="mdi:content-save-outline"></ha-icon>
                <span>${this._savingEvent ? t(locale, "loading") : t(locale, "save")}</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    `;
    }
    _contrastText(hex) {
        const c = hex.replace("#", "");
        if (c.length !== 6)
            return "#fff";
        const r = parseInt(c.slice(0, 2), 16);
        const g = parseInt(c.slice(2, 4), 16);
        const b = parseInt(c.slice(4, 6), 16);
        return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#111827" : "#fff";
    }
    // ------------------------------------------------------------------
    // Render
    // ------------------------------------------------------------------
    render() {
        if (!this._config || !this.hass)
            return b ``;
        const locale = localeFromHass(this.hass);
        const [start, end] = getDateRange(this._viewMode, this._offset, this._config.week_start);
        const title = getViewTitle(this._viewMode, this._offset, start, end, locale);
        const persons = this._persons;
        const filters = this._filters;
        const activePersons = persons.filter((p) => filters[p.person] !== false);
        const filterStack = activePersons.length ? activePersons.slice(0, 2) : [];
        const hiddenFilterCount = Math.max(0, activePersons.length - filterStack.length);
        const configured = persons.length > 0;
        const days = this._daysInRange(start, end);
        const weatherByDate = this._config.show_weather ? this._weatherByDate : {};
        const eventCountsByPerson = {};
        for (const e of this._events) {
            eventCountsByPerson[e.person] = (eventCountsByPerson[e.person] || 0) + 1;
        }
        // Reference month for the month grid (start may be prior-month padding)
        const today = localToday();
        const refDate = new Date(today.getFullYear(), today.getMonth() + this._offset, 1);
        const surfaceClasses = [
            "aurora-card",
            `height-${this._config.height_mode || "auto"}`,
            this._config.glass_background ? "glass" : "",
            this._backgroundImageSource ? "has-background-image" : "",
        ].filter(Boolean).join(" ");
        const shellClasses = `height-${this._config.height_mode || "auto"}`;
        return b `
      <ha-card class=${shellClasses}>
        <div class=${surfaceClasses} style=${this._appearanceStyle()}>

          <div class="top-toolbar">
            ${this._config.show_filter ? b `<div class="filter-control-wrap">
              <button
                class="filter-trigger ${this._filterMenuOpen ? "open" : ""}"
                @click=${this._toggleFilterMenu}
                aria-label=${t(locale, "calendarFilters")}
                aria-expanded=${this._filterMenuOpen}
              >
                <span class="avatar-stack">
                  ${filterStack.map((p) => b `
                    <span class="stack-avatar" style="--person-color: ${p.color}">
                      ${p.person[0].toUpperCase()}
                      ${p.avatar ? b `<img src="${p.avatar}" alt="${p.person}" @error=${retryImgOnError} />` : A}
                    </span>
                  `)}
                  ${hiddenFilterCount > 0 || activePersons.length === 0 ? b `
                    <span class="stack-avatar stack-more">${activePersons.length === 0 ? "0" : `+${hiddenFilterCount}`}</span>
                  ` : A}
                </span>
                <span class="filter-label">${t(locale, "filters")}</span>
                <span class="chevron">⌄</span>
              </button>

              ${this._filterMenuOpen ? b `
                <div class="filter-menu" role="menu">
                  <div class="menu-heading">${t(locale, "showCalendars")}</div>
                  ${persons.map((p) => {
            const active = filters[p.person] !== false;
            return b `
                      <button
                        class="filter-option ${active ? "active" : "inactive"}"
                        style="--person-color: ${p.color}"
                        @click=${() => this._toggleFilter(p.person)}
                        role="menuitemcheckbox"
                        aria-checked=${active}
                      >
                        <span class="option-avatar">
                          ${p.person[0].toUpperCase()}
                          ${p.avatar ? b `<img src="${p.avatar}" alt="${p.person}" @error=${retryImgOnError} />` : A}
                        </span>
                        <span class="option-name">${p.person}</span>
                        <span class="option-count">${eventCountsByPerson[p.person] || 0}</span>
                        <span class="option-check">${active ? "✓" : ""}</span>
                      </button>
                    `;
        })}
                </div>
              ` : A}
            </div>` : A}

            <span class="view-title">${title}</span>

            <div class="toolbar-actions">
              ${this._config.show_view_selector ? b `<div class="view-control-wrap">
                <button
                  class="view-trigger ${this._viewMenuOpen ? "open" : ""}"
                  @click=${this._toggleViewMenu}
                  aria-label=${t(locale, "calendarView")}
                  aria-expanded=${this._viewMenuOpen}
                >
                  <span>${viewModeLabel(locale, this._viewMode)}</span>
                  <span class="chevron">⌄</span>
                </button>
                ${this._viewMenuOpen ? b `
                  <div class="view-menu" role="menu">
                    ${VIEW_MODES.map((mode) => b `
                      <button
                        class="view-option ${this._viewMode === mode ? "active" : ""}"
                        @click=${() => this._selectView(mode)}
                        role="menuitemradio"
                        aria-checked=${this._viewMode === mode}
                      >
                        <ha-icon icon=${VIEW_ICONS[mode]}></ha-icon>
                        <span>${viewModeLabel(locale, mode)}</span>
                      </button>
                    `)}
                  </div>
                ` : A}
              </div>` : A}

              ${this._config.show_jump_to ? b `<div class="jump-control-wrap">
                <button
                  class="jump-trigger ${this._jumpMenuOpen ? "open" : ""}"
                  @click=${this._toggleJumpMenu}
                  aria-label=${t(locale, "jumpTo")}
                  aria-expanded=${this._jumpMenuOpen}
                >
                  <ha-icon icon="mdi:calendar-search"></ha-icon>
                  <span>${t(locale, "jumpTo")}</span>
                </button>
                ${this._jumpMenuOpen ? b `
                  <div class="jump-menu">
                    <label class="jump-field">
                      <span>${this._viewMode === "Month" ? viewModeLabel(locale, "Month") : t(locale, "jumpTo")}</span>
                      ${this._viewMode === "Month" ? b `
                        <input
                          type="month"
                          .value=${this._jumpMonthValue()}
                          @click=${this._handleJumpInputClick}
                          @change=${this._handleJumpMonth}
                        />
                      ` : b `
                        <input
                          type="date"
                          .value=${this._jumpDateValue(start)}
                          @click=${this._handleJumpInputClick}
                          @change=${this._handleJumpDate}
                        />
                      `}
                    </label>
                  </div>
                ` : A}
              </div>` : A}

              ${this._config.show_nav ? b `<div class="nav-controls" aria-label=${t(locale, "calendarNavigation")}>
                <button class="nav-btn" @click=${() => this._navigate(-1)} aria-label=${t(locale, "previous")}>
                  &#8249;
                </button>
                <button class="today-btn" @click=${this._resetToToday}>${t(locale, "today")}</button>
                <button class="nav-btn" @click=${() => this._navigate(1)} aria-label=${t(locale, "next")}>
                  &#8250;
                </button>
              </div>` : A}
            </div>
          </div>
          <!-- Calendar grid -->
          <div class="calendar-area">
            ${this._loading ? b `<div class="loading-badge">${t(locale, "loading")}</div>` : A}
            ${configured
            ? this._viewMode === "Month"
                ? b `
                    <aurora-calendar-month
                      .events=${this._filteredEvents}
                      .start=${start}
                      .end=${end}
                      .currentMonth=${refDate.getMonth()}
                      .currentYear=${refDate.getFullYear()}
                      .config=${this._config}
                      .dimOtherMonths=${true}
                      .weekStart=${this._config.week_start}
                      .weatherByDate=${weatherByDate}
                      .weatherEntity=${this._weatherEntity}
                      .locale=${locale}
                      .persons=${persons}
                      .occasionsEntityId=${this._occasionsEntityId}
                      @aurora-event-open=${this._handleEventOpen}
                    ></aurora-calendar-month>
                  `
                : this._viewMode === "Biweek"
                    ? b `
                    <aurora-calendar-month
                      .events=${this._filteredEvents}
                      .start=${start}
                      .end=${end}
                      .currentMonth=${start.getMonth()}
                      .currentYear=${start.getFullYear()}
                      .config=${this._config}
                      .dimOtherMonths=${false}
                      .weekStart=${this._config.week_start}
                      .weatherByDate=${weatherByDate}
                      .weatherEntity=${this._weatherEntity}
                      .locale=${locale}
                      .persons=${persons}
                      .occasionsEntityId=${this._occasionsEntityId}
                      @aurora-event-open=${this._handleEventOpen}
                    ></aurora-calendar-month>
                  `
                    : this._viewMode === "Rolling 2 Weeks"
                        ? b `
                    <aurora-calendar-month
                      .events=${this._filteredEvents}
                      .start=${start}
                      .end=${end}
                      .currentMonth=${start.getMonth()}
                      .currentYear=${start.getFullYear()}
                      .config=${this._config}
                      .dimOtherMonths=${false}
                      .weekStart=${this._config.week_start}
                      .gridStart=${start.getDay()}
                      .weatherByDate=${weatherByDate}
                      .weatherEntity=${this._weatherEntity}
                      .locale=${locale}
                      .persons=${persons}
                      .occasionsEntityId=${this._occasionsEntityId}
                      @aurora-event-open=${this._handleEventOpen}
                    ></aurora-calendar-month>
                  `
                        : this._viewMode === "Week"
                            ? b `
                    <aurora-calendar-week-box
                      .events=${this._filteredEvents}
                      .days=${days}
                      .config=${this._config}
                      .weatherByDate=${weatherByDate}
                      .weatherEntity=${this._weatherEntity}
                      .locale=${locale}
                      .persons=${persons}
                      .occasionsEntityId=${this._occasionsEntityId}
                      @week-empty-click=${this._handleWeekEmptyClick}
                      @aurora-event-open=${this._handleEventOpen}
                    ></aurora-calendar-week-box>
                  `
                            : b `
                    <aurora-calendar-time-grid
                      .events=${this._timeGridEvents}
                      .days=${days}
                      .config=${this._config}
                      .viewMode=${this._viewMode}
                      .weatherByDate=${weatherByDate}
                      .weatherEntity=${this._weatherEntity}
                      .locale=${locale}
                      .autoScrollToNow=${this._viewMode === "Today" || this._viewMode === "Next 7 Days"}
                      .persons=${persons}
                      @aurora-event-open=${this._handleEventOpen}
                      @aurora-event-move=${this._handleEventMove}
                    ></aurora-calendar-time-grid>
                  `
            : b `
                  <div class="unconfigured">
                    <p>${t(locale, "unconfigured")}</p>
                  </div>
                `}
          </div>
          ${this._config.show_fab ? b `
          <button
            class="create-trigger floating-create-trigger"
            @click=${this._openCreateDialog}
            aria-label=${t(locale, "addEvent")}
            title=${t(locale, "addEvent")}
            ?disabled=${!configured}
          >
            <ha-icon icon="mdi:calendar-plus"></ha-icon>
          </button>
          ` : A}
          ${this._renderEventDialog(locale)}
          ${this._renderEditDialog(locale)}
          ${this._renderCreateDialog(locale)}

        </div>
      </ha-card>
    `;
    }
    _appearanceStyle() {
        return [
            `--aurora-card-opacity: ${this._clamp(this._config.card_opacity, 0, 100)}%`,
            `--aurora-background-image: ${this._backgroundImageCss(this._backgroundImageSource)}`,
            `--aurora-background-opacity: ${this._clamp(this._config.background_image_opacity, 0, 100) / 100}`,
            `--aurora-background-blur: ${this._clamp(this._config.background_blur, 0, 20)}px`,
        ].join(";");
    }
    get _backgroundImageSource() {
        return this._resolvedBackgroundImage || this._config.background_image || "";
    }
    _resolveBackgroundMediaIfNeeded() {
        const media = this._config.background_media;
        const key = media ? `${media.media_content_id}|${media.media_content_type}` : "";
        if (key === this._backgroundMediaKey)
            return;
        this._backgroundMediaKey = key;
        this._resolvedBackgroundImage = "";
        const requestId = ++this._backgroundMediaRequestId;
        if (!media || !this.hass)
            return;
        void this.hass
            .callWS({
            type: "media_source/resolve_media",
            media_content_id: media.media_content_id,
        })
            .then((result) => {
            if (requestId !== this._backgroundMediaRequestId)
                return;
            const url = typeof result.url === "string" ? result.url : "";
            this._resolvedBackgroundImage = url.startsWith("/") && this.hass.hassUrl
                ? this.hass.hassUrl(url)
                : url;
        })
            .catch((err) => {
            console.warn("Aurora Calendar: failed to resolve background media", err);
        });
    }
    _backgroundImageCss(value) {
        const image = String(value || "").trim();
        if (!image)
            return "none";
        return `url("${image.replace(/["\\\n\r]/g, "")}")`;
    }
    _clamp(value, min, max) {
        if (typeof value !== "number" || Number.isNaN(value))
            return max;
        return Math.min(max, Math.max(min, value));
    }
    _safeCssHeight(value) {
        const height = String(value || "").trim();
        if (!height)
            return CONFIG_DEFAULTS.fixed_height;
        return CSS.supports("height", height) ? height : CONFIG_DEFAULTS.fixed_height;
    }
};
// ------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------
AuroraCalendarCard.styles = i$3 `
    :host {
      --aurora-radius: 10px;
      --aurora-gap: 8px;
      --aurora-grid-height: 500px;
      display: block;
    }

    ha-card {
      overflow: hidden;
      background: transparent;
    }

    ha-card.height-ha {
      height: 100%;
    }

    .aurora-card {
      position: relative;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 16px;
      box-sizing: border-box;
      font-family: var(--paper-font-body1_-_font-family, sans-serif);
    }

    .aurora-card.height-ha {
      height: 100%;
      min-height: 0;
    }

    .aurora-card.height-natural {
      overflow: visible;
    }

    .aurora-card::before,
    .aurora-card::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .aurora-card::before {
      background-image: var(--aurora-background-image);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: var(--aurora-background-opacity);
      filter: blur(var(--aurora-background-blur));
      transform: scale(1.04);
    }

    .aurora-card::after {
      background: color-mix(
        in srgb,
        var(--card-background-color, #fff) var(--aurora-card-opacity),
        transparent
      );
    }

    .aurora-card.glass::after {
      background:
        radial-gradient(circle at 8% 0%, color-mix(in srgb, var(--primary-color) 9%, transparent), transparent 38%),
        color-mix(in srgb, var(--card-background-color, #fff) var(--aurora-card-opacity), transparent);
      -webkit-backdrop-filter: blur(16px) saturate(1.08);
      backdrop-filter: blur(16px) saturate(1.08);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 10%, transparent);
    }

    /* ---- Top toolbar ---- */
    .top-toolbar {
      position: relative;
      z-index: 30;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      grid-template-areas: "filters title actions";
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      flex-shrink: 0;
      min-height: 40px;
    }

    .filter-control-wrap,
    .view-control-wrap,
    .jump-control-wrap {
      position: relative;
      min-width: 0;
    }

    .filter-control-wrap {
      grid-area: filters;
      justify-self: start;
    }

    .filter-trigger,
    .view-trigger,
    .jump-trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 46px;
      border-radius: 999px;
      border: 2px solid var(--divider-color, #ccc);
      background: color-mix(in srgb, var(--card-background-color, transparent) 88%, var(--primary-color) 12%);
      cursor: pointer;
      font-size: 0.88rem;
      font-weight: 800;
      color: var(--primary-text-color);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      transition: border-color 0.15s, background 0.15s, transform 0.15s;
    }

    .filter-trigger {
      gap: 10px;
      padding: 0 14px 0 7px;
      justify-self: start;
    }

    .view-trigger {
      gap: 10px;
      min-width: 142px;
      padding: 0 16px;
    }

    .filter-trigger:hover,
    .filter-trigger.open,
    .view-trigger:hover,
    .view-trigger.open,
    .jump-trigger:hover,
    .jump-trigger.open {
      border-color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 16%, transparent);
    }

    .filter-trigger:active,
    .view-trigger:active,
    .jump-trigger:active {
      transform: scale(0.98);
    }

    .jump-trigger {
      gap: 8px;
      min-width: 116px;
      padding: 0 16px;
    }

    .jump-trigger ha-icon {
      width: 20px;
      height: 20px;
      color: var(--primary-color);
    }

    .avatar-stack {
      display: inline-flex;
      align-items: center;
      min-width: 60px;
      padding-left: 4px;
    }

    .stack-avatar {
      position: relative;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -7px;
      border-radius: 50%;
      border: 2px solid var(--card-background-color, #111);
      background: var(--person-color, var(--primary-color));
      font-weight: 700;
      font-size: 0.72rem;
      color: #fff;
      overflow: hidden;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    .stack-avatar:first-child {
      margin-left: 0;
    }

    .stack-avatar img,
    .option-avatar img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .stack-more {
      background: #e5e7eb;
      color: #1f2937;
      border-color: var(--card-background-color, #111);
    }

    .filter-label,
    .chevron {
      white-space: nowrap;
    }

    .chevron {
      color: var(--secondary-text-color);
      font-size: 1rem;
      line-height: 1;
      transform: translateY(-1px);
    }

    .filter-menu,
    .view-menu,
    .jump-menu {
      position: absolute;
      top: calc(100% + 10px);
      min-width: 220px;
      border: 1px solid color-mix(in srgb, var(--divider-color) 80%, transparent);
      border-radius: 18px;
      background: color-mix(in srgb, var(--card-background-color, #111) 96%, var(--primary-color) 4%);
      box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
      padding: 10px;
      z-index: 40;
    }

    .filter-menu {
      left: 0;
    }

    .view-menu {
      right: 0;
      min-width: 420px;
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0;
      padding: 0;
      overflow: hidden;
    }

    .jump-menu {
      right: 0;
      width: 250px;
      padding: 14px;
    }

    .jump-field {
      display: flex;
      flex-direction: column;
      gap: 9px;
      color: var(--secondary-text-color);
      font-size: 0.74rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .jump-field input {
      min-height: 46px;
      border: 2px solid color-mix(in srgb, var(--divider-color) 80%, transparent);
      border-radius: 14px;
      background: color-mix(in srgb, var(--card-background-color, transparent) 90%, var(--primary-color) 10%);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 1rem;
      font-weight: 800;
      padding: 0 12px;
      outline: none;
      color-scheme: light dark;
    }

    .jump-field input:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 20%, transparent);
    }

    .menu-heading {
      padding: 4px 8px 9px;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
    }

    .filter-option,
    .view-option {
      width: 100%;
      min-height: 42px;
      display: flex;
      align-items: center;
      gap: 10px;
      border: none;
      border-radius: 12px;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      font: inherit;
      text-align: left;
    }

    .filter-option {
      padding: 5px 8px 5px 5px;
    }

    .view-option {
      min-height: 76px;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      padding: 9px 10px;
      border-radius: 0;
      border-right: 1px solid color-mix(in srgb, var(--divider-color) 68%, transparent);
      font-size: 0.7rem;
      font-weight: 800;
      text-align: center;
    }

    .filter-option:hover,
    .filter-option.active,
    .view-option:hover,
    .view-option.active {
      background: color-mix(in srgb, var(--primary-color) 14%, transparent);
    }

    .view-option:last-child {
      border-right: none;
    }

    .view-option ha-icon {
      width: 24px;
      height: 24px;
      color: var(--secondary-text-color);
    }

    .view-option.active {
      color: var(--primary-color);
    }

    .view-option.active ha-icon {
      color: var(--primary-color);
    }

    .filter-option.inactive {
      opacity: 0.58;
    }

    .option-avatar {
      position: relative;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      background: var(--person-color, var(--primary-color));
      color: #fff;
      font-size: 0.76rem;
      font-weight: 800;
      overflow: hidden;
      flex-shrink: 0;
    }

    .option-name {
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 700;
    }

    .option-count {
      min-width: 22px;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.08);
      color: var(--primary-text-color);
      font-size: 0.78rem;
      font-weight: 700;
      text-align: center;
      opacity: 0.8;
    }

    .filter-option.inactive .option-count {
      opacity: 0.45;
    }

    .option-check {
      width: 20px;
      color: var(--primary-color);
      font-weight: 900;
      text-align: center;
    }

    .nav-btn {
      width: 42px;
      height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--card-background-color, transparent) 88%, var(--primary-color) 12%);
      border: 2px solid var(--divider-color, #ccc);
      border-radius: 999px;
      font-size: 2rem;
      line-height: 1;
      cursor: pointer;
      color: var(--primary-text-color);
      padding: 0 0 3px;
      opacity: 0.86;
      transition: border-color 0.15s, background 0.15s, opacity 0.15s, transform 0.15s;
    }
    .nav-btn:hover {
      opacity: 1;
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }
    .nav-btn:active {
      transform: scale(0.96);
    }

    .create-trigger {
      width: 42px;
      height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-color);
      border: 2px solid color-mix(in srgb, var(--primary-color) 76%, var(--divider-color));
      border-radius: 999px;
      color: var(--text-primary-color, #fff);
      cursor: pointer;
      padding: 0;
      transition: filter 0.15s, transform 0.15s, opacity 0.15s;
    }

    .create-trigger ha-icon {
      width: 22px;
      height: 22px;
    }

    .create-trigger:hover {
      filter: brightness(1.06);
    }

    .create-trigger:active {
      transform: scale(0.96);
    }

    .create-trigger:disabled {
      cursor: default;
      opacity: 0.45;
      filter: grayscale(0.2);
    }

    .floating-create-trigger {
      position: absolute;
      right: 28px;
      bottom: 28px;
      z-index: 25;
      width: 56px;
      height: 56px;
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
    }

    .floating-create-trigger ha-icon {
      width: 26px;
      height: 26px;
    }

    .nav-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .toolbar-actions {
      grid-area: actions;
      display: flex;
      align-items: center;
      justify-self: end;
      gap: 8px;
      min-width: 0;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .view-title {
      grid-area: title;
      font-size: 2rem;
      font-weight: 800;
      color: var(--primary-text-color);
      justify-self: center;
      text-align: center;
      white-space: nowrap;
      letter-spacing: -0.01em;
    }

    .today-btn {
      min-height: 42px;
      background: color-mix(in srgb, var(--card-background-color, transparent) 88%, var(--primary-color) 12%);
      border: 2px solid var(--divider-color, #ccc);
      border-radius: 999px;
      padding: 0 16px;
      cursor: pointer;
      font-size: 0.86rem;
      font-weight: 600;
      color: var(--primary-text-color);
      transition: border-color 0.15s, background 0.15s, color 0.15s, transform 0.15s;
    }
    .today-btn:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }
    .today-btn:active {
      transform: scale(0.97);
    }

    .filter-trigger:focus-visible,
    .view-trigger:focus-visible,
    .filter-option:focus-visible,
    .view-option:focus-visible,
    .nav-btn:focus-visible,
    .create-trigger:focus-visible,
    .today-btn:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    /* ---- Calendar area ---- */
    .calendar-area {
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
      height: var(--aurora-grid-height);
      padding: 0 0 1px;
      box-sizing: border-box;
    }

    .aurora-card.height-ha .calendar-area {
      flex: 1 1 auto;
      height: auto;
    }

    .aurora-card.height-natural .calendar-area {
      height: auto;
      min-height: 360px;
      overflow: visible;
    }

    .aurora-card.height-natural aurora-calendar-month,
    .aurora-card.height-natural aurora-calendar-week-box,
    .aurora-card.height-natural aurora-calendar-time-grid {
      min-height: 360px;
    }

    .loading-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 0.7rem;
      color: var(--secondary-text-color);
      z-index: 20;
      pointer-events: none;
    }

    .unconfigured {
      height: var(--aurora-grid-height);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed var(--divider-color, #ccc);
      border-radius: var(--aurora-radius);
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      text-align: center;
      padding: 24px;
      box-sizing: border-box;
    }
    .unconfigured p {
      margin: 0;
      line-height: 1.6;
    }

    .event-dialog-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background: rgba(0, 0, 0, 0.42);
      backdrop-filter: blur(5px);
      box-sizing: border-box;
      animation: aurora-backdrop-in 0.18s ease-out both;
    }

    .event-dialog-backdrop.closing {
      animation: aurora-backdrop-out 0.16s ease-in both;
    }

    .event-dialog {
      width: min(520px, 100%);
      max-height: min(720px, calc(100vh - 48px));
      overflow: hidden;
      border-radius: 24px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
      border: 1px solid color-mix(in srgb, var(--event-color) 28%, var(--divider-color));
      animation: aurora-dialog-in 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }

    .event-dialog-backdrop.closing .event-dialog {
      animation: aurora-dialog-out 0.16s ease-in both;
    }

    @keyframes aurora-backdrop-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes aurora-backdrop-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes aurora-dialog-in {
      from {
        opacity: 0;
        transform: translateY(10px) scale(0.985);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes aurora-dialog-out {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(8px) scale(0.985);
      }
    }

    .event-dialog-header {
      position: relative;
      padding: 24px 64px 22px 24px;
      background:
        radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.32), transparent 28%),
        linear-gradient(135deg, var(--event-color), color-mix(in srgb, var(--event-color) 72%, #000 28%));
      color: var(--event-text-color);
    }

    .event-dialog-kicker {
      font-size: 0.76rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.82;
      margin-bottom: 8px;
    }

    .event-dialog-header h2 {
      margin: 0;
      font-size: clamp(1.4rem, 3vw, 2rem);
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    .event-dialog-person {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 14px;
      font-weight: 800;
      opacity: 0.94;
    }

    .event-dialog-avatar {
      position: relative;
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: var(--person-color, rgba(255, 255, 255, 0.22));
      border: 1.5px solid rgba(255, 255, 255, 0.5);
      font-size: 0.75rem;
      font-weight: 900;
      overflow: hidden;
      flex-shrink: 0;
    }

    .event-dialog-avatar img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .event-dialog-close {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 42px;
      height: 42px;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.18);
      color: inherit;
      cursor: pointer;
      font-size: 1.8rem;
      line-height: 1;
    }

    .event-dialog-close:hover {
      background: rgba(255, 255, 255, 0.28);
    }

    .event-dialog-body {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 22px 24px 24px;
      overflow-y: auto;
      max-height: calc(min(720px, 100vh - 48px) - 150px);
    }

    .detail-row {
      display: grid;
      grid-template-columns: 34px minmax(0, 1fr);
      gap: 12px;
      align-items: start;
      padding: 12px;
      border-radius: 16px;
      background: color-mix(in srgb, var(--event-color) 8%, transparent);
    }

    .detail-row ha-icon {
      color: var(--event-color);
      margin-top: 2px;
    }

    .detail-label {
      display: block;
      color: var(--secondary-text-color);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .detail-value {
      display: block;
      font-size: 1rem;
      font-weight: 750;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .detail-section {
      padding: 14px;
      border-radius: 16px;
      background: color-mix(in srgb, var(--secondary-background-color, #f5f5f5) 88%, var(--event-color) 12%);
    }

    .detail-section p {
      margin: 0;
      white-space: pre-wrap;
      line-height: 1.45;
      overflow-wrap: anywhere;
    }

    .event-action-error {
      padding: 10px 12px;
      border-radius: 12px;
      background: color-mix(in srgb, var(--error-color, #db4437) 12%, transparent);
      color: var(--error-color, #db4437);
      font-size: 0.86rem;
      font-weight: 700;
      line-height: 1.35;
    }

    .event-dialog-actions,
    .create-form-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      padding-top: 4px;
    }

    .delete-confirm-panel {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 14px;
      border: 2px solid color-mix(in srgb, var(--error-color, #db4437) 34%, transparent);
      border-radius: 16px;
      background: color-mix(in srgb, var(--error-color, #db4437) 10%, var(--card-background-color, #fff));
    }

    .delete-confirm-panel > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .delete-confirm-panel strong {
      color: var(--primary-text-color);
      font-size: 1rem;
      line-height: 1.25;
    }

    .delete-confirm-panel span {
      color: var(--secondary-text-color);
      font-size: 0.88rem;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .danger-action,
    .primary-action,
    .secondary-action {
      min-height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 999px;
      border: 2px solid transparent;
      padding: 0 16px;
      cursor: pointer;
      font: inherit;
      font-size: 0.88rem;
      font-weight: 800;
      transition: background 0.15s, border-color 0.15s, opacity 0.15s, transform 0.15s;
    }

    .danger-action {
      background: color-mix(in srgb, var(--error-color, #db4437) 12%, transparent);
      border-color: color-mix(in srgb, var(--error-color, #db4437) 34%, transparent);
      color: var(--error-color, #db4437);
    }

    .primary-action {
      background: var(--event-color, var(--primary-color));
      border-color: color-mix(in srgb, var(--event-color, var(--primary-color)) 74%, var(--divider-color));
      color: var(--text-primary-color, #fff);
    }

    .secondary-action {
      background: color-mix(in srgb, var(--card-background-color, transparent) 88%, var(--event-color, var(--primary-color)) 12%);
      border-color: var(--divider-color, #ccc);
      color: var(--primary-text-color);
    }

    .danger-action:hover,
    .primary-action:hover,
    .secondary-action:hover {
      transform: translateY(-1px);
    }

    .danger-action:disabled,
    .primary-action:disabled,
    .secondary-action:disabled {
      cursor: default;
      opacity: 0.48;
      transform: none;
    }

    .danger-action ha-icon,
    .primary-action ha-icon,
    .secondary-action ha-icon {
      width: 18px;
      height: 18px;
    }

    .create-dialog {
      border-color: color-mix(in srgb, var(--event-color, var(--primary-color)) 28%, var(--divider-color));
    }

    .create-dialog-header {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 20px 62px 18px 22px;
      border-bottom: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);
      background: color-mix(in srgb, var(--event-color, var(--primary-color)) 14%, var(--card-background-color, #fff));
    }

    .create-dialog-header ha-icon {
      width: 30px;
      height: 30px;
      color: var(--event-color, var(--primary-color));
    }

    .create-dialog-header h2 {
      margin: 0;
      font-size: 1.35rem;
      font-weight: 850;
      line-height: 1.1;
      color: var(--primary-text-color);
    }

    .create-dialog-close {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      color: var(--primary-text-color);
      cursor: pointer;
      font-size: 1.35rem;
      line-height: 1;
    }

    .create-form {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 20px 22px 22px;
      max-height: calc(min(720px, 100vh - 48px) - 76px);
      overflow-y: auto;
      box-sizing: border-box;
    }

    .create-calendar-picker {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 7px;
      min-width: 0;
    }

    .form-field-label {
      color: var(--secondary-text-color);
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .create-calendar-trigger {
      min-height: 48px;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 12px 7px 8px;
      border: 2px solid color-mix(in srgb, var(--divider-color) 80%, transparent);
      border-radius: 14px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 92%, var(--event-color, var(--primary-color)) 8%);
      color: var(--primary-text-color);
      cursor: pointer;
      font: inherit;
      text-align: left;
      box-sizing: border-box;
    }

    .create-calendar-trigger:hover,
    .create-calendar-trigger.open {
      border-color: var(--event-color, var(--primary-color));
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--event-color, var(--primary-color)) 14%, transparent);
    }

    .create-calendar-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      z-index: 5;
      display: flex;
      flex-direction: column;
      gap: 2px;
      max-height: 260px;
      overflow-y: auto;
      padding: 8px;
      border: 1px solid color-mix(in srgb, var(--divider-color) 80%, transparent);
      border-radius: 16px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 96%, var(--event-color, var(--primary-color)) 4%);
      box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
    }

    .create-form label {
      display: flex;
      flex-direction: column;
      gap: 7px;
      min-width: 0;
    }

    .create-form label > span {
      color: var(--secondary-text-color);
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .create-form input,
    .create-form select,
    .create-form textarea {
      width: 100%;
      min-height: 42px;
      border: 2px solid color-mix(in srgb, var(--divider-color) 80%, transparent);
      border-radius: 12px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 92%, var(--primary-color) 8%);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 0.95rem;
      padding: 8px 10px;
      outline: none;
      box-sizing: border-box;
      color-scheme: light dark;
    }

    .create-form textarea {
      min-height: 84px;
      resize: vertical;
    }

    .create-form input:focus,
    .create-form select:focus,
    .create-form textarea:focus {
      border-color: var(--event-color, var(--primary-color));
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--event-color, var(--primary-color)) 18%, transparent);
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
    }

    .date-time-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .check-row {
      flex-direction: row !important;
      align-items: center;
      gap: 10px !important;
      width: fit-content;
      cursor: pointer;
    }

    .check-row input {
      width: 20px;
      min-height: 20px;
      height: 20px;
      accent-color: var(--primary-color);
    }

    .check-row span {
      color: var(--primary-text-color) !important;
      font-size: 0.9rem !important;
      letter-spacing: 0 !important;
      text-transform: none !important;
    }

    .form-notice {
      padding: 12px;
      border-radius: 12px;
      background: color-mix(in srgb, var(--event-color, var(--warning-color, #f4b400)) 16%, transparent);
      color: var(--primary-text-color);
      font-size: 0.88rem;
      font-weight: 700;
      line-height: 1.35;
    }

    .event-owner-strip {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--primary-text-color);
    }

    aurora-calendar-month,
    aurora-calendar-week-box,
    aurora-calendar-time-grid {
      display: block;
      height: 100%;
    }

    @media (max-width: 900px) {
      .top-toolbar {
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-areas:
          "filters actions"
          "title title";
        row-gap: 10px;
      }

      .view-title {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    @media (max-width: 620px) {
      .top-toolbar {
        grid-template-columns: 1fr;
        grid-template-areas:
          "title"
          "filters"
          "actions";
      }

      .filter-control-wrap,
      .toolbar-actions,
      .view-title {
        justify-self: center;
      }

      .toolbar-actions {
        justify-content: center;
      }

      .filter-menu {
        left: 50%;
        transform: translateX(-50%);
      }

      .view-menu,
      .jump-menu {
        right: 50%;
        transform: translateX(50%);
      }

      .form-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 430px) {
      .toolbar-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
      }

      .view-control-wrap,
      .jump-control-wrap,
      .nav-controls {
        justify-self: center;
      }

      .nav-controls {
        grid-column: 1 / -1;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], AuroraCalendarCard.prototype, "hass", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_config", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_viewMode", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_offset", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_events", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_weatherByDate", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_loading", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_filterMenuOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_viewMenuOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_jumpMenuOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_selectedEvent", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_createDialogOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_createDraft", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_createCalendarMenuOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_editDialogOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_editDraft", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_eventActionError", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_savingEvent", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_deletingEvent", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_deleteConfirmOpen", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_closingDialog", void 0);
__decorate([
    r()
], AuroraCalendarCard.prototype, "_resolvedBackgroundImage", void 0);
AuroraCalendarCard = __decorate([
    t$1("aurora-calendar-card")
], AuroraCalendarCard);
// ------------------------------------------------------------------
// Visual card editor — uses native HA elements so themes and upgrades
// are handled by HA automatically (ha-switch, ha-select, ha-textfield)
// ------------------------------------------------------------------
let AuroraCalendarCardEditor = class AuroraCalendarCardEditor extends i {
    setConfig(config) {
        const integration = config.integration || "aurora_calendar";
        this._config = { ...CONFIG_DEFAULTS, ...config, integration };
    }
    _set(field, value) {
        if (!this._config)
            return;
        const config = { ...this._config, [field]: value };
        this._config = config;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config },
            bubbles: true,
            composed: true,
        }));
    }
    _setBackgroundMedia(event) {
        const detail = event.detail;
        const value = detail?.value;
        if (value &&
            typeof value === "object" &&
            "media_content_id" in value &&
            "media_content_type" in value) {
            const media = value;
            if (typeof media.media_content_id === "string" &&
                typeof media.media_content_type === "string") {
                this._set("background_media", {
                    media_content_id: media.media_content_id,
                    media_content_type: media.media_content_type,
                });
                return;
            }
        }
        this._set("background_media", null);
    }
    _setBoundedNumber(field, event, min, max) {
        const value = Number(event.target.value);
        if (!Number.isFinite(value))
            return;
        this._set(field, Math.min(max, Math.max(min, Math.round(value))));
    }
    _renderNumberSlider(label, field, min, max, suffix = "") {
        const value = Math.min(max, Math.max(min, Number(this._config[field]) || 0));
        return b `
      <label class="slider-control">
        <span class="slider-header">
          <span>${label}</span>
          <output>${value}${suffix}</output>
        </span>
        <input
          type="range"
          min=${String(min)}
          max=${String(max)}
          .value=${String(value)}
          @input=${(e) => this._setBoundedNumber(field, e, min, max)}
        />
      </label>
    `;
    }
    render() {
        if (!this._config)
            return b ``;
        const locale = localeFromHass(this.hass);
        return b `
      <!-- General -->
      <ha-expansion-panel outlined .expanded=${true}>
        <div slot="header" class="panel-header">
          <ha-icon icon="mdi:cog"></ha-icon>
          ${t(locale, "general")}
        </div>

        <div class="panel-content">
          <label class="selector-control">
            <span>${t(locale, "weekStartsOn")}</span>
            <ha-selector
              .hass=${this.hass}
              .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "sunday", label: t(locale, "sunday") },
                    { value: "monday", label: t(locale, "monday") },
                ],
            },
        }}
              .value=${this._config.week_start}
              @value-changed=${(e) => {
            const value = e.detail?.value;
            if (value === "sunday" || value === "monday") {
                this._set("week_start", value);
            }
        }}
            ></ha-selector>
          </label>
        </div>
      </ha-expansion-panel>

      <!-- Appearance -->
      <ha-expansion-panel outlined .expanded=${true}>
        <div slot="header" class="panel-header">
          <ha-icon icon="mdi:palette-outline"></ha-icon>
          ${t(locale, "appearance")}
        </div>

        <div class="panel-content">
          <section class="editor-section">
            <h3>${t(locale, "heightMode")}</h3>

            <label class="selector-control">
              <span>${t(locale, "heightMode")}</span>
              <ha-selector
                .hass=${this.hass}
                .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "auto", label: t(locale, "heightAuto") },
                    { value: "ha", label: t(locale, "heightHomeAssistant") },
                    { value: "fixed", label: t(locale, "heightFixed") },
                    { value: "natural", label: t(locale, "heightNatural") },
                ],
            },
        }}
                .value=${this._config.height_mode}
                @value-changed=${(e) => {
            const value = e.detail?.value;
            if (value === "auto" || value === "ha" || value === "fixed" || value === "natural") {
                this._set("height_mode", value);
            }
        }}
              ></ha-selector>
            </label>

            ${this._config.height_mode === "fixed"
            ? b `
                  <ha-textfield
                    label=${t(locale, "fixedHeight")}
                    .value=${this._config.fixed_height}
                    helper=${t(locale, "fixedHeightHelper")}
                    @change=${(e) => this._set("fixed_height", e.target.value.trim())}
                  ></ha-textfield>
                `
            : A}
          </section>

          <section class="editor-section">
            <h3>${t(locale, "visualBehavior")}</h3>

            <ha-settings-row>
              <span slot="heading">${t(locale, "dimPastEvents")}</span>
              <span slot="description">${t(locale, "dimPastEventsDesc")}</span>
              <ha-switch
                .checked=${this._config.dim_past_events}
                @change=${(e) => this._set("dim_past_events", e.target.checked)}
              ></ha-switch>
            </ha-settings-row>

            <ha-settings-row>
              <span slot="heading">${t(locale, "calendarGridLines")}</span>
              <span slot="description">${t(locale, "calendarGridLinesDesc")}</span>
              <ha-switch
                .checked=${this._config.show_calendar_grid_lines}
                @change=${(e) => this._set("show_calendar_grid_lines", e.target.checked)}
              ></ha-switch>
            </ha-settings-row>

            <ha-settings-row>
              <span slot="heading">${t(locale, "keepAllDayEventsVisible")}</span>
              <span slot="description">${t(locale, "keepAllDayEventsVisibleDesc")}</span>
              <ha-switch
                .checked=${this._config.keep_all_day_events_visible}
                @change=${(e) => this._set("keep_all_day_events_visible", e.target.checked)}
              ></ha-switch>
            </ha-settings-row>
          </section>

          <section class="editor-section">
            <h3>${t(locale, "eventDisplay")}</h3>

            <ha-settings-row>
              <span slot="heading">${t(locale, "showEventTimes")}</span>
              <span slot="description">${t(locale, "showEventTimesDesc")}</span>
              <ha-switch
                .checked=${this._config.show_event_time}
                @change=${(e) => this._set("show_event_time", e.target.checked)}
              ></ha-switch>
            </ha-settings-row>

            <ha-settings-row>
              <span slot="heading">${t(locale, "showLocation")}</span>
              <span slot="description">${t(locale, "showLocationDesc")}</span>
              <ha-switch
                .checked=${this._config.show_location}
                @change=${(e) => this._set("show_location", e.target.checked)}
              ></ha-switch>
            </ha-settings-row>

            <label class="selector-control">
              <span>${t(locale, "eventTextColor")}</span>
              <ha-selector
                .hass=${this.hass}
                .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "auto", label: t(locale, "eventTextColorAuto") },
                    { value: "white", label: t(locale, "eventTextColorWhite") },
                    { value: "dark", label: t(locale, "eventTextColorDark") },
                ],
            },
        }}
                .value=${this._config.event_text_color}
                @value-changed=${(e) => {
            const value = e.detail?.value;
            if (value === "auto" || value === "white" || value === "dark") {
                this._set("event_text_color", value);
            }
        }}
              ></ha-selector>
            </label>

            <label class="selector-control">
              <span>${t(locale, "timeFormat")}</span>
              <ha-selector
                .hass=${this.hass}
                .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "12h", label: t(locale, "twelveHour") },
                    { value: "24h", label: t(locale, "twentyFourHour") },
                ],
            },
        }}
                .value=${this._config.time_format}
                @value-changed=${(e) => {
            const value = e.detail?.value;
            if (value === "12h" || value === "24h") {
                this._set("time_format", value);
            }
        }}
              ></ha-selector>
            </label>

            <div class="event-typography">
              <label class="selector-control">
                <span>${t(locale, "eventFontSize")}</span>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "12", label: t(locale, "small") },
                    { value: "14", label: t(locale, "medium") },
                    { value: "16", label: t(locale, "large") },
                    { value: "18", label: t(locale, "extraLarge") },
                ],
            },
        }}
                  .value=${String(this._config.event_font_size)}
                  @value-changed=${(e) => {
            const value = Number(e.detail?.value);
            if (Number.isInteger(value) && value >= 11 && value <= 24) {
                this._set("event_font_size", value);
            }
        }}
                ></ha-selector>
              </label>

              <label class="selector-control">
                <span>${t(locale, "eventFont")}</span>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "inherit", label: t(locale, "default") },
                    { value: '"Nunito", "Segoe UI", sans-serif', label: t(locale, "friendlyRounded") },
                    { value: '"Aptos", "Segoe UI", sans-serif', label: t(locale, "cleanDashboard") },
                    { value: '"Georgia", serif', label: t(locale, "serif") },
                ],
            },
        }}
                  .value=${this._config.event_font_family}
                  @value-changed=${(e) => {
            if (typeof e.detail?.value === "string") {
                this._set("event_font_family", e.detail.value);
            }
        }}
                ></ha-selector>
              </label>
            </div>
          </section>

          <section class="editor-section">
            <h3>${t(locale, "scheduleWindow")}</h3>

            <div class="time-window">
              <label class="selector-control">
                <span>${t(locale, "visibleStartHour")}</span>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
            select: {
                mode: "dropdown",
                options: Array.from({ length: 24 }, (_, hour) => ({
                    value: String(hour),
                    label: `${String(hour).padStart(2, "0")}:00`,
                })),
            },
        }}
                  .value=${String(this._config.visible_start_hour)}
                  @value-changed=${(e) => {
            const value = Number(e.detail?.value);
            if (Number.isInteger(value) && value >= 0 && value <= 23) {
                this._set("visible_start_hour", value);
            }
        }}
                ></ha-selector>
              </label>

              <label class="selector-control">
                <span>${t(locale, "visibleEndHour")}</span>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
            select: {
                mode: "dropdown",
                options: Array.from({ length: 24 }, (_, index) => ({
                    value: String(index + 1),
                    label: `${String(index + 1).padStart(2, "0")}:00`,
                })),
            },
        }}
                  .value=${String(this._config.visible_end_hour)}
                  @value-changed=${(e) => {
            const value = Number(e.detail?.value);
            if (Number.isInteger(value) && value >= 1 && value <= 24) {
                this._set("visible_end_hour", value);
            }
        }}
                ></ha-selector>
                <small class="helper-text">${t(locale, "visibleEndHourHelper")}</small>
              </label>
            </div>
          </section>

          <section class="editor-section">
            <h3>${t(locale, "background")}</h3>

            <ha-settings-row>
              <span slot="heading">${t(locale, "glassBackground")}</span>
              <span slot="description">${t(locale, "glassBackgroundDesc")}</span>
              <ha-switch
                .checked=${this._config.glass_background}
                @change=${(e) => this._set("glass_background", e.target.checked)}
              ></ha-switch>
            </ha-settings-row>

            <div class="media-picker">
              <div class="media-picker-heading">
                <div>
                  <span>${t(locale, "backgroundMedia")}</span>
                  <small>${t(locale, "backgroundMediaHelper")}</small>
                </div>
                ${this._config.background_media
            ? b `
                      <button type="button" class="text-button" @click=${() => this._set("background_media", null)}>
                        ${t(locale, "removeBackgroundImage")}
                      </button>
                    `
            : A}
              </div>
              <ha-selector
                .hass=${this.hass}
                .selector=${{ media: { accept: ["image/*"] } }}
                .value=${this._config.background_media || undefined}
                @value-changed=${this._setBackgroundMedia}
              ></ha-selector>
            </div>

            <ha-textfield
              label=${t(locale, "backgroundImage")}
              .value=${this._config.background_image}
              helper=${t(locale, "backgroundImageHelper")}
              @change=${(e) => this._set("background_image", e.target.value.trim())}
            ></ha-textfield>

            <div class="background-controls">
              ${this._renderNumberSlider(t(locale, "cardOpacity"), "card_opacity", 0, 100, "%")}
              ${this._renderNumberSlider(t(locale, "backgroundImageOpacity"), "background_image_opacity", 0, 100, "%")}
              ${this._renderNumberSlider(t(locale, "backgroundBlur"), "background_blur", 0, 20, "px")}
            </div>
          </section>
        </div>
      </ha-expansion-panel>

      <!-- Toolbar -->
      <ha-expansion-panel outlined .expanded=${true}>
        <div slot="header" class="panel-header">
          <ha-icon icon="mdi:toolbar"></ha-icon>
          ${t(locale, "toolbar")}
        </div>

        <div class="panel-content">
          <ha-settings-row>
            <span slot="heading">${t(locale, "showFilter")}</span>
            <span slot="description">${t(locale, "showFilterDesc")}</span>
            <ha-switch
              .checked=${this._config.show_filter}
              @change=${(e) => this._set("show_filter", e.target.checked)}
            ></ha-switch>
          </ha-settings-row>

          <ha-settings-row>
            <span slot="heading">${t(locale, "showViewSelector")}</span>
            <span slot="description">${t(locale, "showViewSelectorDesc")}</span>
            <ha-switch
              .checked=${this._config.show_view_selector}
              @change=${(e) => this._set("show_view_selector", e.target.checked)}
            ></ha-switch>
          </ha-settings-row>

          <ha-settings-row>
            <span slot="heading">${t(locale, "showJumpTo")}</span>
            <span slot="description">${t(locale, "showJumpToDesc")}</span>
            <ha-switch
              .checked=${this._config.show_jump_to}
              @change=${(e) => this._set("show_jump_to", e.target.checked)}
            ></ha-switch>
          </ha-settings-row>

          <ha-settings-row>
            <span slot="heading">${t(locale, "showNav")}</span>
            <span slot="description">${t(locale, "showNavDesc")}</span>
            <ha-switch
              .checked=${this._config.show_nav}
              @change=${(e) => this._set("show_nav", e.target.checked)}
            ></ha-switch>
          </ha-settings-row>
        </div>
      </ha-expansion-panel>

      <!-- Features -->
      <ha-expansion-panel outlined .expanded=${true}>
        <div slot="header" class="panel-header">
          <ha-icon icon="mdi:lightning-bolt"></ha-icon>
          ${t(locale, "features")}
        </div>

        <div class="panel-content">
          <ha-settings-row>
            <span slot="heading">${t(locale, "showFab")}</span>
            <span slot="description">${t(locale, "showFabDesc")}</span>
            <ha-switch
              .checked=${this._config.show_fab}
              @change=${(e) => this._set("show_fab", e.target.checked)}
            ></ha-switch>
          </ha-settings-row>

          <ha-settings-row>
            <span slot="heading">${t(locale, "weatherForecast")}</span>
            <span slot="description">${t(locale, "weatherForecastDesc")}</span>
            <ha-switch
              .checked=${this._config.show_weather}
              @change=${(e) => this._set("show_weather", e.target.checked)}
            ></ha-switch>
          </ha-settings-row>

          <label class="selector-control">
            <span>${t(locale, "weatherIconStyle")}</span>
            <ha-selector
              .hass=${this.hass}
              .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    { value: "static", label: t(locale, "static") },
                    { value: "animated", label: t(locale, "animated") },
                ],
            },
        }}
              .value=${this._config.weather_icon_style}
              @value-changed=${(e) => {
            const value = e.detail?.value;
            if (value === "static" || value === "animated") {
                this._set("weather_icon_style", value);
            }
        }}
            ></ha-selector>
          </label>
        </div>
      </ha-expansion-panel>
    `;
    }
};
AuroraCalendarCardEditor.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0 8px;
    }

    ha-textfield {
      width: 100%;
    }

    .panel-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }

    .panel-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 16px 16px;
    }

    ha-select {
      width: 100%;
    }

    ha-selector {
      display: block;
      width: 100%;
    }

    .editor-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 14px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 18px;
      background: color-mix(in srgb, var(--secondary-background-color, #f5f5f5) 58%, transparent);
    }

    .editor-section h3 {
      margin: 0;
      color: var(--primary-text-color);
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.01em;
    }

    .media-picker {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 12px;
      border-radius: 14px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 72%, transparent);
    }

    .media-picker-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .media-picker-heading div {
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 0;
    }

    .media-picker-heading span {
      color: var(--primary-text-color);
      font-size: 0.9rem;
      font-weight: 700;
    }

    .media-picker-heading small {
      color: var(--secondary-text-color);
      font-size: 0.78rem;
      line-height: 1.35;
    }

    .selector-control {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .selector-control > span {
      color: var(--secondary-text-color);
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0 2px;
    }

    .text-button {
      border: 0;
      background: transparent;
      color: var(--primary-color);
      cursor: pointer;
      font: inherit;
      font-size: 0.82rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .slider-control {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      border-radius: 14px;
      background: color-mix(in srgb, var(--secondary-background-color, #f5f5f5) 76%, transparent);
    }

    .slider-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      color: var(--primary-text-color);
      font-size: 0.9rem;
      font-weight: 600;
    }

    .slider-header output {
      min-width: 48px;
      padding: 3px 8px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-color) 14%, transparent);
      color: var(--primary-color);
      font-size: 0.82rem;
      font-weight: 800;
      text-align: center;
    }

    .slider-control input[type="range"] {
      width: 100%;
      accent-color: var(--primary-color);
      cursor: pointer;
    }

    .time-window,
    .event-typography,
    .background-controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 12px;
    }

    @media (max-width: 640px) {
      .time-window,
      .event-typography,
      .background-controls {
        grid-template-columns: 1fr;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], AuroraCalendarCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], AuroraCalendarCardEditor.prototype, "_config", void 0);
AuroraCalendarCardEditor = __decorate([
    t$1("aurora-calendar-card-editor")
], AuroraCalendarCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "aurora-calendar-card",
    name: "Aurora Calendar",
    description: "Family calendar with month/week/today views, weather overlay, and per-person filters.",
    preview: true,
    documentationURL: "https://github.com/davidlop28/ha-aurora-calendar",
});

export { AuroraCalendarCard, AuroraCalendarCardEditor };
