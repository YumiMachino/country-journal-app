!function(){var t={757:function(t,n,e){t.exports=e(666)},666:function(t){var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var a=n&&n.prototype instanceof v?n:v,o=Object.create(a.prototype),i=new I(r||[]);return o._invoke=function(t,n,e){var r=d;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===a)throw o;return A()}for(e.method=a,e.arg=o;;){var i=e.delegate;if(i){var l=C(i,e);if(l){if(l===h)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===d)throw r=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var c=s(t,n,e);if("normal"===c.type){if(r=e.done?y:f,c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=y,e.method="throw",e.arg=c.arg)}}}(t,e,i),o}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",y="completed",h={};function v(){}function m(){}function g(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(S([])));E&&E!==e&&r.call(E,o)&&(b=E);var j=g.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function e(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?n.resolve(d.__await).then((function(t){e("next",t,i,l)}),(function(t){e("throw",t,i,l)})):n.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,l)}))}l(c.arg)}var a;this._invoke=function(t,r){function o(){return new n((function(n,a){e(t,r,n,a)}))}return a=a?a.then(o,o):o()}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function J(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(J,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:n,done:!0}}return m.prototype=g,c(j,"constructor",g),c(g,"constructor",m),m.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},L(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,a,o){void 0===o&&(o=Promise);var i=new x(u(n,e,r,a),o);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(j),c(j,l,"Generator"),c(j,o,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return l.type="throw",l.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;k(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";function t(t,n,e,r,a,o,i){try{var l=t[o](i),c=l.value}catch(t){return void e(t)}l.done?n(c):Promise.resolve(c).then(r,a)}function n(n){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=n.apply(e,r);function l(n){t(i,a,o,l,c,"next",n)}function c(n){t(i,a,o,l,c,"throw",n)}l(void 0)}))}}var r=e(757),a=e.n(r);function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function t(n,e,r,a,i,l){o(this,t),this.id=n,this.country=e,this.emoji=r,this.date=a,this.title=i,this.text=l};function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),t}var s,d=function(){function t(){o(this,t)}return u(t,null,[{key:"getAllCountries",value:function(){return null===localStorage.getItem("countries")?this.allCountries=[]:this.allCountries=JSON.parse(localStorage.getItem("countries")),this.allCountries}},{key:"addCountry",value:function(n){this.allCountries=t.getAllCountries(),this.allCountries.push(n),localStorage.setItem("countries",JSON.stringify(this.allCountries))}},{key:"updateCountries",value:function(t){localStorage.setItem("countries",JSON.stringify(t))}},{key:"getAllFavorites",value:function(){return this.allCountries=this.getAllCountries(),this.allCountries.filter((function(t){return!0===t.favorite}))}},{key:"getAllJournals",value:function(){return null===localStorage.getItem("journals")?this.allJournals=[]:this.allJournals=JSON.parse(localStorage.getItem("journals")),this.allJournals}},{key:"addJournal",value:function(n){this.allJournals=t.getAllJournals(),this.allJournals.push(n),localStorage.setItem("journals",JSON.stringify(this.allJournals))}},{key:"updateJournals",value:function(t){localStorage.setItem("journals",JSON.stringify(t))}},{key:"updateJournal",value:function(n){this.allJournals=t.getAllJournals(),this.allJournals.forEach((function(t){t.id===n.id&&(t.country=n.country,t.emoji=n.emoji,t.date=n.date,t.title=n.title,t.text=n.text)})),localStorage.setItem("journals",JSON.stringify(this.allJournals))}},{key:"deleteJournal",value:function(n){this.allJournals=t.getAllJournals();var e=this.allJournals.filter((function(t){return t.id!==n.id}));localStorage.setItem("journals",JSON.stringify(e))}},{key:"getNewId",value:function(){var t,n=(t=Array(100).keys(),function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(){return 3*Math.random()-1})).slice(0,3).join("");return Number(n)}},{key:"getJournalById",value:function(n){var e;return this.allJournals=t.getAllJournals(),this.allJournals.forEach((function(t){t.id==n&&(e=t)})),e}}]),t}(),f=document.querySelector(".navbar"),p=document.querySelector(".hamburger-menu"),y=function(){function t(){o(this,t)}return u(t,null,[{key:"getTargetCountry",value:function(t,n){return n.filter((function(n){return n.id===t}))}},{key:"displayCountries",value:function(n){this.countryContainer.innerHTML="",n.forEach((function(n){t.addCountryToContainer(n),t.addModalToContainer(n)}))}},{key:"addCountryToContainer",value:function(t){var n=document.createElement("div");n.classList.add("country"),n.innerHTML='\n        <div class="img-container">\n            <img src="'.concat(t.flags.png,'" alt="" />\n            <div class="country-overlay">\n              <button class="favorite-btn" style=').concat(t.favorite?"color:red;":"color:#f6e8c9;",'>\n                <i id="fav-').concat(t.id,'" class="fas fa-heart"></i>\n              </button>\n              <button id="btn-').concat(t.id,'" class="btn primary-btn">Check</button>\n            </div>\n          </div>\n          <h5 class="country-name">').concat(t.commonName,"</h5>\n    "),this.countryContainer.appendChild(n)}},{key:"addModalToContainer",value:function(t){var n=document.createElement("div");n.classList.add("modal"),n.id="modal-".concat(t.id),n.innerHTML='\n      <div class="modal-content">\n            <span id="modal-close-'.concat(t.id,'" class="modal-close">&times;</span>\n            <div class="modal-img-container">\n              <img src="').concat(t.flags.png,'" alt="" />\n            </div>\n            <div class="modal-text">\n              <p class="category">\n                Country: <span class="category-info common-name">').concat(t.commonName,'</span>\n              </p>\n              <p class="category">\n                Country: <span class="category-info official-name">').concat(t.officialName,'</span>\n              </p>\n              <p class="category">\n                Capital: <span class="category-info capital">').concat(t.capital,'</span>\n              </p>\n              <p class="category">\n                Language(s):\n                <span class="category-info language">').concat(function(t){var n=[];for(var e in t)n.push(t[e]);return n.join(", "),n}(t.languages),'</span>\n              </p>\n              <p class="category">\n                Currency(s):\n                <span class="category-info currency">').concat(function(t){var n=[];for(var e in t)n.push(t[e].name),n.push("(".concat(t[e].symbol,")"));return n.join(""),n}(t.currency),'</span>\n              </p>\n              <p class="category">\n                Continent:\n                <span class="category-info continent">').concat(t.continent,'</span>\n              </p>\n              <p class="category">\n                Population:\n                <span class="category-info country-continent">').concat(t.population.toLocaleString("en-US"),'</span>\n              </p>\n              <p class="category">\n                maps:\n                <span class="category-info map"><a href="').concat(t.map.googleMaps,'" class="map-link" target="_blank">Check map</a></span>\n              </p>\n            </div>\n            <button class="btn primary-btn">\n              <a href="journals.html">Write Journal</a>\n            </button>\n          </div>\n    \n    '),this.countryContainer.appendChild(n)}},{key:"displayEmojis",value:function(t){var n=this,e=[];t.forEach((function(t){e.includes(t.emoji)||e.push(t.emoji)})),this.emojisWrapper.innerHTML="",e.forEach((function(t){var e=document.createElement("SPAN");e.classList.add("country-emoji"),e.innerHTML=t,n.emojisWrapper.append(e)}))}},{key:"displayAllJournals",value:function(n){console.log("displaying all journals...."),this.journalWrapper.innerHTML="";var e=t.getAllCountryNames(n);console.log("country name arr: ",e),e.forEach((function(e){var r=t.journalsPerCounry(e,n);console.log("journals per counry",r),t.addJournalsToContainer(e,r)}))}},{key:"addJournalsToContainer",value:function(n,e){var r=document.createElement("div");r.classList.add("journal-container"),r.innerHTML='\n      <div class="journal-country" id="'.concat(n,'-container">\n            <h1 class="journal-country-name">').concat(n,"</h1>\n          </div>\n    "),this.journalWrapper.appendChild(r),e.forEach((function(e){t.addJournalToContainer(n,e),t.addModalToCountainer(n,e)}))}},{key:"addJournalToContainer",value:function(t,n){var e=document.createElement("div");e.classList.add("journal"),e.innerHTML='\n     <div class="journal-text">\n              <div class="journal-date">'.concat(n.date,'</div>\n              <h5 class="journal-title">').concat(n.title,'</h5>\n              <div class="journal-para">\n                ').concat(n.text,'\n              </div>\n              <div class="btn-wrapper">\n                <button id="edit-').concat(n.id,'" class="btn secondary-btn">Edit</button>\n                <button id="delete-').concat(n.id,'" class="btn tertiary-btn">Delete</button>\n              </div>\n            </div>\n    '),document.getElementById("".concat(t,"-container")).appendChild(e)}},{key:"addModalToCountainer",value:function(t,n){var e=document.createElement("div");e.classList.add("modal"),e.id="edit-modal-".concat(n.id),e.innerHTML='\n       <div class="edit-modal-content" data-country="'.concat(t,'" >\n            <span id="edit-close-').concat(n.id,'" class="modal-close">&times;</span>\n\n            <form>\n              <div class="form-group">\n                <label for="title">Title</label>\n                <input\n                  type="text"\n                  name="title"\n                  id="title-').concat(n.id,'"\n                  class="form-control"\n                  placeholder="Enter title"\n                />\n              </div>\n              <div class="form-group">\n                <label for="date">Date</label>\n                <input type="date" name="date" id="date-').concat(n.id,'" placeholder="Enter date" />\n              </div>\n              <div class="form-group">\n                <label for="body">Body</label>\n                <textarea id="text-').concat(n.id,'" class="textarea" placeholder="Enter text"></textarea>\n              </div>\n            </form>\n            <button class="btn primary-btn save">Save Changes</button>\n          </div>\n     '),this.journalWrapper.appendChild(e);var r=document.getElementById("title-".concat(n.id)),a=document.getElementById("date-".concat(n.id)),o=document.getElementById("text-".concat(n.id));r.value=n.title,a.value=n.date,o.value=n.text}},{key:"getAllCountryNames",value:function(t){var n=[];return t.forEach((function(t){var e=t.country.toLowerCase();n.includes(e)||n.push(e)})),n}},{key:"journalsPerCounry",value:function(t,n){var e=[];return n.forEach((function(n){n.country.toLowerCase()===t&&e.push(n)})),e}}]),t}();d.allJournals=s,p.addEventListener("click",(function(){f.classList.toggle("open")})),document.getElementById("create").addEventListener("click",(function(){h.style.display="block",g.value="",b.value="",w.value="",E.value=""}));var h=document.getElementById("new-modal"),v=document.getElementById("new-close"),m=document.getElementById("new-save");v.addEventListener("click",(function(){h.style.display="none"}));var g=document.getElementById("new-country"),b=document.getElementById("new-title"),w=document.getElementById("new-date"),E=document.getElementById("new-body");function j(){return(j=n(a().mark((function t(n){var e,r,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:if((e=t.sent).ok){t.next=10;break}r="An error has occured: ".concat(e.status),console.log(r),L(g.value,"",w.value,b.value,E.value),t.next=15;break;case 10:return t.next=12,e.json();case 12:o=t.sent,i=o[0].flag,L(g.value,i,w.value,b.value,E.value);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t,n,e,r,a){var o=d.getNewId(),l=new i(o,t,n,e,r,a);d.addJournal(l),alert("New item has been added."),h.style.display="none",s=d.getAllJournals(),y.displayAllJournals(s),y.displayEmojis(s)}document.getElementById("new-save"),m.addEventListener("click",(function(){var t;t=g.value,function(t){j.apply(this,arguments)}("https://restcountries.com/v3.1/name/".concat(t))}));var x=document.querySelector(".journals-wrapper"),C=document.querySelector(".countries-emojis");y.emojisWrapper=C,y.journalWrapper=x,window.addEventListener("load",(function(){s=d.getAllJournals(),y.displayAllJournals(s),y.displayEmojis(s)})),x.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName){var n=t.target.id.split("-")[0];if("edit"===n){var e=Number(t.target.id.split("-")[1]);document.getElementById("edit-modal-".concat(e)).style.display="block"}else if("delete"===n){alert("Do you want to delete item?");var r=Number(t.target.id.split("-")[1]),a=d.getJournalById(r);d.deleteJournal(a),s=d.getAllJournals(),y.displayAllJournals(s),y.displayEmojis(s)}else{var o=t.target.parentElement.parentElement.id.split("-")[2],i=(t.target.parentElement.dataset.country,document.getElementById("title-".concat(o)).value),l=document.getElementById("date-".concat(o)).value,c=document.getElementById("text-".concat(o)).value,u=d.getJournalById(o);u.title=i,u.date=l,u.text=c,d.updateJournal(u),document.getElementById("edit-modal-".concat(o)).style.display="none",s=d.getAllJournals(),y.displayAllJournals(s)}}if("SPAN"===t.target.tagName)if("new-close"===t.target.id)h.style.display="none";else{var f=Number(t.target.id.split("-")[2]);document.getElementById("edit-modal-".concat(f)).style.display="none"}}))}()}();