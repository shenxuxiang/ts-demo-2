(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{20:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r,o=n(0),a=n.n(o),c=n(14),u=n.n(c),i=n(8),p=n(1),l=function(t){return function(e){return Object.prototype.toString.call(e)==="[object "+t+"]"}},s=l("Array"),f=l("Map"),h=l("Set"),m=l("Object"),y=l("NodeList"),d=l("HTMLCollection");r=function(t){return!t||(s(t)||y(t)||d(t)?t.length>0:f(t)||h(t)?t.size>0:!!m(t)&&Object.keys(t).length>0)};var b,O=(b=function(t,e){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},_=function(t){return function(e){function n(t){var n=e.call(this,t)||this;return n.state={Comp:null},n}return O(n,e),n.prototype.componentDidMount=function(){var e=this;t().then((function(t){e.setState({Comp:t.default})}))},n.prototype.render=function(){var t=this.state.Comp;return r(t)?a.a.createElement("div",null,"loading..."):a.a.createElement(t,v({},this.props))},n}(o.PureComponent)},j=[{exact:!0,path:"/home",component:_((function(){return n.e(0).then(n.bind(null,29))}))},{exact:!0,path:"/goods",component:_((function(){return n.e(4).then(n.bind(null,28))}))},{exact:!1,path:"*",component:_((function(){return n.e(0).then(n.bind(null,29))}))}],g=(n(20),function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return g(e,t),e.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"ts-header"},a.a.createElement(i.b,{to:"/home",className:"ts-header-item",activeClassName:"active"},"home"),a.a.createElement(i.b,{to:"/goods",className:"ts-header-item",activeClassName:"active"},"goods")),a.a.Children.map(this.props.children,(function(t){return t})))},e}(o.PureComponent),E=function(){return(E=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};u.a.render(a.a.createElement((function(){return a.a.createElement(i.a,null,a.a.createElement(w,null,a.a.createElement(p.c,null,j.map((function(t){return a.a.createElement(p.a,E({},t,{key:t.path}))})))))}),null),document.getElementById("root"))}},[[25,2,3]]]);