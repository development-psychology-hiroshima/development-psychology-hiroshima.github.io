System.register([],(function(n,e){"use strict";return{execute:function(){n("messageSW",e);try{self["workbox:window:6.5.2"]&&_()}catch(e){}function e(n,e){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function r(n,e){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.2"]&&_()}catch(e){}var i=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function o(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var a=n("WorkboxEvent",(function(n,e){this.type=n,Object.assign(this,e)}));function s(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function c(){}var u={type:"SKIP_WAITING"};function f(n,e){if(!e)return n&&n.then?n.then(c):Promise.resolve()}n("Workbox",function(n){var t,r;function c(e,t){var r,c;return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new i,r.en=new i,r.on=new i,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing;r.tn>0||!o(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,i=t.state,o=t===r.vn,s={sw:t,isExternal:o,originalEvent:n};!o&&r.mn&&(s.isUpdate=!0),r.dispatchEvent(new a(i,s)),"installed"===i?r.wn=self.setTimeout((function(){"installed"===i&&e.waiting===t&&r.dispatchEvent(new a("waiting",s))}),200):"activating"===i&&(clearTimeout(r.wn),o||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(c=function(n){var e=n.data,t=n.ports,i=n.source;return s(r.getSW(),(function(){r.an.has(i)&&r.dispatchEvent(new a("message",{data:e,originalEvent:n,ports:t,sw:i}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}r=n,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var v,h=c.prototype;return h.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e;try{var r=this;return function(n,e){var t=n();return t&&t.then?t.then(e):e()}((function(){if(!t&&"complete"!==document.readyState)return f(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),s(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&o(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},h.update=function(){try{return this.fn?f(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(n){try{return s(this.getSW(),(function(t){return e(t,n)}))}catch(e){return Promise.reject(e)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&e(this.fn.waiting,u)},h.pn=function(){var n=navigator.serviceWorker.controller;return n&&o(n.scriptURL,this.sn.toString())?n:void 0},h.bn=function(){try{var n=this;return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){return s(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(v=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(c.prototype,v),c}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this;for(var e,t=r(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}()))}}}));
