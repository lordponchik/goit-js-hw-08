function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,s=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function x(e){return l=e,u=setTimeout(S,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=o}function S(){var e=v();if(h(e))return j(e);u=setTimeout(S,function(e){var n=t-(e-f);return m?s(n,o-(e-l)):n}(e))}function j(e){return u=void 0,p&&r?y(e):(r=i=void 0,a)}function E(){var e=v(),n=h(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(m)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,o=(m="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),E.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},E.flush=function(){return void 0===u?a:j(v())},E}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};let x={};localStorage.getItem("feedback-form-state")&&(x=JSON.parse(localStorage.getItem("feedback-form-state")),y.inputEmail.value=x.email?x.email:"",y.textarea.value=x.message?x.message:""),y.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),y.form.addEventListener("submit",(function(e){if(e.preventDefault(),0===y.inputEmail.value.trim().length||0===y.textarea.value.trim().length)return void alert("Необходимо заполнить оба поля");localStorage.removeItem("feedback-form-state"),y.inputEmail.value="",y.textarea.value="",console.log(x),x={}}));
//# sourceMappingURL=03-feedback.125c8f1d.js.map
