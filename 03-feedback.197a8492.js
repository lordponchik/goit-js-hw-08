!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function h(e){return c=e,f=setTimeout(x,t),d?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function x(){var e=g();if(j(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,s&&r?b(e):(r=o=void 0,u)}function w(){var e=g(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(m)return f=setTimeout(x,t),b(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:O(g())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var h={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},j="feedback-form-state",x={};localStorage.getItem(j)&&(x=JSON.parse(localStorage.getItem(j)),h.inputEmail.value=x.email?x.email:"",h.textarea.value=x.message?x.message:""),h.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value.trim(),localStorage.setItem(j,JSON.stringify(x))}),500)),h.form.addEventListener("submit",(function(e){if(e.preventDefault(),0===h.inputEmail.value.trim().length||0===h.textarea.value.trim().length)return void alert("Необходимо заполнить оба поля");localStorage.removeItem(j),h.inputEmail.value="",h.textarea.value="",console.log(x),x={}}))}();
//# sourceMappingURL=03-feedback.197a8492.js.map
