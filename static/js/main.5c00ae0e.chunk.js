(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(7),i=n.n(l),c=(n(13),n(1)),r=n(2),u=n(4),s=n(3),d=n(5);n(15);var m=function(e){return a.a.createElement("button",{onClick:e.handleChange,type:e.type||"button"},e.text)},p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleChange=function(){e.state.isEdited||(e.props.handleChange(),e.setState({isEdited:!0}))},e.state={isEdited:!1},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log("render"),a.a.createElement("li",{className:"d-flex flex-row list-group-item"},a.a.createElement("div",{className:"mr-auto p-2"},this.props.name),a.a.createElement("div",{className:"p-2 btn-group",role:"group"},a.a.createElement(m,{type:"button",className:"btn btn-secondary",handleChange:this.handleChange.bind(this),text:"edit"}),a.a.createElement(m,{type:"button",className:"btn btn-secondary",text:"x"})))}}]),t}(a.a.Component),h=function(e){function t(){var e;return Object(c.a)(this,t),console.log("czesto constructor"),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleChange=function(){e.setState({edited:e.state.edited+1})},e.state={edited:0},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount niecz\u0119sto")}},{key:"componentDidMount",value:function(){console.log("czesto componentDidMount: AJAX, timery liczniki, setInterval")}},{key:"componentWillReceiveProps",value:function(e){console.log("zniknie componentWillReceiveProps raczej nie u\u017cywa si\u0119 zmiana stanu w oparciu o nowe propsy")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate optymalizacja komponent\xf3w na du\u017cych obiektach"),!0}},{key:"componentWillUpdate",value:function(e){console.log("zniknnie componentWillUpdate nie u\u017cywa si\u0119")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate jako componentDidMount lepiej uzywac handleChange")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount destructor ,kasujemy timery-czyszczenie przegl\u0105daki po naszym komponencie")}},{key:"render",value:function(){var e=null,t=null;return 0===this.state.edited?e=a.a.createElement("h3",null,"Login3"):t=a.a.createElement("h3",null,"Logout3"),a.a.createElement("div",null,0===this.state.edited&&a.a.createElement("h3",null,"Login"),0===this.state.edited?a.a.createElement("h3",null,"Login2"):null,e,0===this.state.edited&&a.a.createElement(function(){return a.a.createElement("h3",null,"Login4")},null),"nie polecany lepiej w oddzielnym komponencie",a.a.createElement("h2",null,"Zedytowano: ",this.state.edited," razy"),t,this.state.edited>0?a.a.createElement("h3",null,"Logout"):null,a.a.createElement("ul",{className:"list-group"},0===this.state.edited?a.a.createElement(p,{handleChange:this.handleChange.bind(this),name:"Kasia"}):null))}}]),t}(a.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{name:"Kasia1"}))}}]),t}(o.Component);n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.5c00ae0e.chunk.js.map