(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),r=c(3),s=c(5),i=c(4),l=c(1),u=c.n(l),d=(c(12),c(0)),m=function(t){Object(s.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=window.setInterval((function(){t.setState({date:new Date})}),1e3),t}return Object(r.a)(c,[{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.log("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName)),console.log(this.state.date.toLocaleTimeString())}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("strong",{children:this.props.clockName})," time is ",this.state.date.toLocaleTimeString()]})}}]),c}(u.a.Component);function h(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}var k=function(t){Object(s.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:h()},t.nameId=0,t}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",(function(){t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),this.nameId=window.setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,c=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(m,{clockName:c})]})}}]),c}(u.a.Component),p=k;a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fd8c9fec.chunk.js.map