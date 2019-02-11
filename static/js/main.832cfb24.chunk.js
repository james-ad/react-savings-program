(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),i=(n(14),n(6)),s=n(1),u=n(2),l=n(4),h=n(3),p=n(5),d=(n(15),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{id:this.props.id,onClick:this.props.buttonFunc,className:"app-button"},this.props.buttonName))}}]),t}(a.Component));function m(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function g(e,t){return(e*t*.01).toFixed(2)}var v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).currentCheckInput=c.a.createRef(),n.percentageInput=c.a.createRef(),n.percentageReadout=c.a.createRef(),n.amountSaved=c.a.createRef(),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.currentCheckAmount,a=t.currentPercentage;return c.a.createElement("div",{className:"check-input-wrapper",name:"wrapper",id:"wrapper"},c.a.createElement("input",{type:"number",name:"check-input",id:"check-input",ref:this.currentCheckInput,onKeyUp:function(t){"Enter"===t.key&&e.props.depositCheck()},onInput:function(){e.props.updateCheckValue(e.currentCheckInput.current.value)},placeholder:"$"+n}),c.a.createElement("input",{type:"range",name:"check-input-percentage",id:"check-input-percentage",defaultValue:a,default:"".concat(a," %"),ref:this.percentageInput,onInput:function(){e.props.updatePercentageValue(e.percentageInput.current.value)}}),c.a.createElement("div",{id:"check-percentage-readout",ref:this.percentageReadout},a," %"),c.a.createElement("div",{className:"amount-saved",ref:this.amountSaved},"$",m(g(n,a))),c.a.createElement(d,{buttonName:"Deposit Check",buttonFunc:this.props.depositCheck}))}}]),t}(a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",{className:"page-heading"},"Savings Calculator")}}]),t}(a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"savings-total-wrapper"},c.a.createElement("h2",null,"Savings Total"),c.a.createElement("div",{className:"total-savings-readout"},"$",m(this.props.renderSavingsTotal().toFixed(2))),c.a.createElement(d,{buttonFunc:this.props.clearCheckHistory,buttonName:"Clear Check Button"}))}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.checkAmount,t=this.props.percentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{className:"entry"},c.a.createElement("td",null,"$",m(e)),c.a.createElement("td",null,t,"%"),c.a.createElement("td",{className:"savings-class"},"$",m(g(e,t))),c.a.createElement("td",null,c.a.createElement(d,{buttonFunc:this.props.deleteCheck,buttonName:"\xd7",id:this.props.id},"\xd7"))))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).tableBody=c.a.createRef(),n.deleteButton=c.a.createRef(),n.renderTableEntry=function(){var e=n.props.savingsAccount;return Object.keys(n.props.savingsAccount).map(function(t){return c.a.createElement(b,{deleteCheck:n.props.deleteCheck,id:t,checkAmount:e[t].check,percentage:e[t].percentage})})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.renderTableEntry()}},{key:"componentDidUpdate",value:function(){this.renderTableEntry()}},{key:"render",value:function(){return c.a.createElement("div",{className:"table-wrapper"},c.a.createElement("table",{className:"checks-table"},c.a.createElement("thead",{className:"table-heading"},c.a.createElement("tr",{className:"table-heading-row"},c.a.createElement("th",{className:"check-amount-column"},"Check Amount"),c.a.createElement("th",{className:"percentage-saved-column"},"Percentage Saved"),c.a.createElement("th",{className:"amount-saved-column"},"Savings"),c.a.createElement("th",{className:"remove-check-column"},"Remove Check"))),c.a.createElement("tbody",{ref:this.tableBody,id:"table-body"},this.renderTableEntry())))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={currentCheckAmount:100,currentPercentage:10,savingsAccount:{check1:{check:100,percentage:10},check2:{check:200,percentage:20}}},n.clearCheckHistory=function(){var e=Object(i.a)({},n.state.savingsAccount);Object.keys(e).forEach(function(t){delete e[t]}),n.setState({savingsAccount:e})},n.deleteCheck=function(e){var t=Object(i.a)({},n.state.savingsAccount);delete t[e.currentTarget.id],n.setState({savingsAccount:t})},n.depositCheck=function(e,t){var a="check#".concat(Date.now()),c={check:parseFloat(n.state.currentCheckAmount).toFixed(2),percentage:parseInt(n.state.currentPercentage)},r=Object(i.a)({},n.state.savingsAccount);r[a]=c,n.setState({savingsAccount:r})},n.renderSavingsTotal=function(){var e=n.state.savingsAccount;return Object.keys(e).reduce(function(t,n){return t+e[n].check*e[n].percentage*.01},0)},n.updateCheckValue=function(e){n.setState({currentCheckAmount:e})},n.updatePercentageValue=function(e){n.setState({currentPercentage:e})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"app-wrapper"},c.a.createElement(f,null),c.a.createElement(v,{currentCheckAmount:this.state.currentCheckAmount,deleteCheck:this.deleteCheck,depositCheck:this.depositCheck,currentPercentage:this.state.currentPercentage,updateCheckValue:this.updateCheckValue,updatePercentageValue:this.updatePercentageValue}),c.a.createElement(C,{className:"table-component",currentCheckAmount:this.state.currentCheckAmount,deleteCheck:this.deleteCheck,depositCheck:this.depositCheck,currentPercentage:this.state.currentPercentage,savingsAccount:this.state.savingsAccount}),c.a.createElement(k,{clearCheckHistory:this.clearCheckHistory,renderSavingsTotal:this.renderSavingsTotal}))}}]),t}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(c.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-savings-program",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-savings-program","/service-worker.js");E?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):j(t,e)})}}(),window.addEventListener("resize",function(){var e=document.querySelector("html");console.log(e),e.style.minHeight="100%"})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.832cfb24.chunk.js.map