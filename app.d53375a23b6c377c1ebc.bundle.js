(()=>{"use strict";var e,r,t,n={9604:(e,r,t)=>{var n=t(7294),o=t(745),i=t(9250),c=t(9655),l=t(9164),a=t(7896),s=t(9573),u=t(6011),f=t(3694),d=t(6926),p=t(8732),y=t(5893);const h=function(e){var r=e.data,t=e.onRowClick;return(0,y.jsx)(a.Z,{style:{maxWidth:"100%"},children:(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(u.Z,{children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(d.Z,{style:{flexGrow:1},children:"序"}),(0,y.jsx)(d.Z,{style:{flexGrow:1},children:"姓名"}),(0,y.jsx)(d.Z,{style:{flexGrow:1},children:"組別"}),(0,y.jsx)(d.Z,{style:{flexGrow:1},children:"班級"}),(0,y.jsx)(d.Z,{style:{flexGrow:1},children:"簽到時間"})]})}),(0,y.jsx)(p.Z,{children:r.map((function(e,r){return(0,y.jsxs)(f.Z,{onClick:function(){return t(e)},children:[(0,y.jsx)(d.Z,{children:e.id}),(0,y.jsx)(d.Z,{children:e.name}),(0,y.jsx)(d.Z,{children:e.group}),(0,y.jsx)(d.Z,{children:e.class}),(0,y.jsx)(d.Z,{children:e.checkinTime?(n=e.checkinTime,o=new Date(n),o.getMonth(),o.getDate(),i=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0"),"".concat(i,":").concat(c)):""})]},r);var n,o,i,c}))})]})})};var m=t(6755),j=t(6089),b=t(2094),v=t(3013);const x=function(e){var r=e.id,t=e.name,o=e.onConfirm,c=(0,i.s0)(),l=(0,v.Z)(new Date,"M/d HH:mm");return(0,n.useEffect)((function(){t||c("/")}),[t,c]),(0,y.jsxs)(j.Z,{maxWidth:"sm",children:[" ",(0,y.jsxs)(b.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:2,children:[" ",(0,y.jsx)(b.Z,{children:"姓名"}),(0,y.jsx)(b.Z,{children:t}),(0,y.jsx)(b.Z,{children:"簽到時間"}),(0,y.jsx)(b.Z,{children:l}),(0,y.jsxs)(b.Z,{children:[(0,y.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){return o(r)},children:"確認簽到"}),(0,y.jsx)(m.Z,{variant:"outlined",color:"secondary",onClick:function(){c("/")},style:{marginLeft:"10px"},children:"返回"})]})]})]})};var g=(0,t(9617).Z)({breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},typography:{fontSize:16}});g.components.Button={styleOverrides:{root:{padding:"12px 20px"},label:{fontSize:"2rem"}}};const O=g;function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function Z(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,c,l=[],a=!0,s=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;a=!1}else for(;!(a=(n=i.call(t)).done)&&(l.push(n.value),l.length!==r);a=!0);}catch(e){s=!0,o=e}finally{try{if(!a&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return S(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){C(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function C(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==w(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===w(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function D(e){var r=e.data,t=e.setData,n=e.handleConfirm,o=(0,i.s0)();return(0,y.jsxs)(i.Z5,{children:[(0,y.jsx)(i.AW,{path:"/checkin",element:(0,y.jsx)(x,P(P({},r.selectedRow),{},{onConfirm:function(){return n(o)}}))}),(0,y.jsx)(i.AW,{path:"/",element:(0,y.jsx)(h,{data:r.rows,onRowClick:function(e){t(P(P({},r),{},{selectedRow:e})),o("/checkin")}})})]})}function M(){for(var e=[],r=1;r<=20;r++)e.push({id:r,name:"姓名".concat(r),group:r%2==0?"A":"B",gender:r%2==0?"M":"F",class:"".concat(100*r>=1e3?100*r/10:100*r),checkinTime:null});return e}function _(){var e=Z((0,n.useState)({rows:M(),selectedRow:null}),2),r=e[0],t=e[1];return(0,y.jsx)(c.VK,{children:(0,y.jsx)(D,{data:r,setData:t,handleConfirm:function(e){var n=r.rows.map((function(e){if(e.id===r.selectedRow.id){var t=(0,v.Z)(new Date,"M/d HH:mm");return P(P({},e),{},{checkinTime:t})}return e}));t(P(P({},r),{},{rows:n})),e("/")}})})}o.createRoot(document.getElementById("root")).render((0,y.jsx)(l.Z,{theme:O,children:(0,y.jsx)(n.StrictMode,{children:(0,y.jsx)(_,{})})}))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return n[e](t,t.exports,i),t.exports}i.m=n,e=[],i.O=(r,t,n,o)=>{if(!t){var c=1/0;for(u=0;u<e.length;u++){for(var[t,n,o]=e[u],l=!0,a=0;a<t.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](t[a])))?t.splice(a--,1):(l=!1,o<c&&(c=o));if(l){e.splice(u--,1);var s=n();void 0!==s&&(r=s)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,n,o]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};r=r||[null,t({}),t([]),t(t)];for(var l=2&n&&e;"object"==typeof l&&!~r.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((r=>c[r]=()=>e[r]));return c.default=()=>e,i.d(o,c),o},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0};i.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[c,l,a]=t,s=0;if(c.some((r=>0!==e[r]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(a)var u=a(i)}for(r&&r(t);s<c.length;s++)o=c[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},t=self.webpackChunkjnps_checkin=self.webpackChunkjnps_checkin||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var c=i.O(void 0,[216],(()=>i(9604)));c=i.O(c)})();
//# sourceMappingURL=app.d53375a23b6c377c1ebc.bundle.js.map?_=1696940224702