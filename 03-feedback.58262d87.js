function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function T(e){return l=e,u=setTimeout(x,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function x(){var e=v();if(h(e))return j(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,g&&r?b(e):(r=o=void 0,a)}function S(){var e=v(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(x,t),b(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:j(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},T={email:"",message:""};b.form.addEventListener("input",e(t)((function(e){"TEXTAREA"==e.target.nodeName?T.message=e.target.value:"INPUT"==e.target.nodeName&&(T.email=e.target.value);return void localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500));try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));""!==e.email&&(b.input.value=e.email),""!==e.message&&(b.textarea.value=e.message)}catch(e){console.log(e.message)}b.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.input.value||""===b.textarea.value)return void alert('Please fill all the field"s!!');console.log(T),b.form.reset(),localStorage.removeItem("feedback-form-state"),T.email="",T.message=""}));
//# sourceMappingURL=03-feedback.58262d87.js.map