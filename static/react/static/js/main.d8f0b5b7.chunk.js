(this["webpackJsonpcomplaint-system"]=this["webpackJsonpcomplaint-system"]||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(24),function(){return c.a.createElement("nav",{className:"custom-bluegreen-bg-1"},c.a.createElement("div",{className:"nav-wrapper container"},c.a.createElement("a",{href:"#",class:"brand-logo"},"Complaint Classifier")))}),s=a(9),o=a(10),m=a(18),d=a(17),u=a(1),h=a(2),E=a(11),f=a.n(E),v=a(12),p=a.n(v),w=a(13),b=a.n(w);function N(){var e=Object(u.a)(["\n  animation: 10s ",";\n"]);return N=function(){return e},e}function g(){var e=Object(u.a)(["",""]);return g=function(){return e},e}function y(){var e=Object(u.a)(["\n  animation: 15s ",";\n"]);return y=function(){return e},e}function S(){var e=Object(u.a)(["",""]);return S=function(){return e},e}function O(){var e=Object(u.a)(["\n  animation: 12s ",";\n"]);return O=function(){return e},e}function _(){var e=Object(u.a)(["",""]);return _=function(){return e},e}var k=Object(h.b)(_(),b.a),j=h.a.div(O(),k),x=Object(h.b)(S(),p.a),C=(h.a.div(y(),x),Object(h.b)(g(),f.a)),F=(h.a.div(N(),C),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={predictions:[],showForm:!0,showState:!1,showLoader:!1,timeOutnumber:0,categories:[["Stray Animals","pets","iconorange"],["Electrical","electrical_services","iconcyansus"],["Gardens","local_florist","iconyellow"],["Roads","add_road","iconmagenta"],["Building Permission","location_city","iconpurple"],["Water Supply","water_damage","iconblue"],["Encroachment","follow_the_signs","icondarkerorange"],["Drainage","waves","iconviolet"],["Traffic","traffic","iconred"],["Property Tax","monetization_on","iconlightgreen"],["Garbage","delete","icongrey"],["Health","local_hospital","icongreen"]]},e.handleFormSubmit=function(t){t.preventDefault();var a={query:document.getElementById("complaint").value};fetch("/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){e.setState({predictions:t.labels,showLoader:!0,showForm:!1}),console.log(t)}))},e.handleButton=function(){e.setState({predictions:[],showState:!1,showForm:!0})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a=this;this.state.categories.map((function(e){return c.a.createElement("span",null,c.a.createElement("i",{className:"medium material-icons"},e[1])," ",e[0],c.a.createElement("br",null))}));return e=this.state.showState?null:this.state.categories.map((function(e){return c.a.createElement("div",{className:"col s2"},c.a.createElement("div",{className:"card z-depth-3 darken-1",style:{height:"100%",width:"100%"}},c.a.createElement("ul",{className:"card-content collection with-header"},c.a.createElement("li",{className:"collection-item center"},c.a.createElement("i",{className:"material-icons medium "+e[2],style:{fontSize:"3rem"}},e[1])),c.a.createElement("li",{className:"card-title collection-header center",style:{fontSize:"86%",padding:"0px"}},e[0]))))})),t=this.state.showState?this.state.predictions.map((function(e){var t=100*e.confidence;return c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"card z-depth-3 darken-1"},c.a.createElement("ul",{className:"card-content collection with-header"},c.a.createElement("li",{className:"collection-item center"},c.a.createElement("i",{className:"material-icons medium "+a.state.categories[e.id][2]},a.state.categories[e.id][1])),c.a.createElement("li",{className:"card-title collection-header center"},e.category),c.a.createElement("li",{className:"collection-item center"},"Confidence: ",Math.round(100*(t+Number.EPSILON))/100,"%"))))})):null,c.a.createElement("div",{className:"container center"},this.state.showForm&&c.a.createElement("div",null,c.a.createElement("h3",null,"Complaint Form"),c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("div",{className:"row container"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"first_name",type:"text",className:"validate",required:!0}),c.a.createElement("label",{for:"first_name"},"First Name")),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"last_name",type:"text",className:"validate",required:!0}),c.a.createElement("label",{for:"last_name"},"Last Name"))),c.a.createElement("div",{className:"row container"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"email",type:"email",className:"validate",required:!0}),c.a.createElement("label",{for:"email"},"E-Mail")),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"address",type:"text",className:"validate",required:!0}),c.a.createElement("label",{for:"address"},"Address"))),c.a.createElement("div",{class:"row container"},c.a.createElement("div",{class:"input-field col s12"},c.a.createElement("input",{id:"complaint",type:"text",className:"validate",required:!0}),c.a.createElement("label",{for:"complaint"},"Enter complaint here"))),c.a.createElement("button",{class:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit Complaint"))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),this.state.showLoader&&c.a.createElement("div",{className:this.state.showLoader?"fadeIn":""},c.a.createElement("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},c.a.createElement("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),c.a.createElement("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})),c.a.createElement("div",{style:{visibility:"hidden"}},setTimeout((function(){a.setState({showState:!0,showLoader:!1})}),2150))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:this.state.showLoader?"fadeOut":""},e)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:this.state.showState?"fadeIn":""},c.a.createElement(j,null,t))),this.state.showState&&c.a.createElement("div",{className:"row"},c.a.createElement("button",{class:"btn waves-effect waves-light",onClick:this.handleButton},"Submit another Complaint")))}}]),a}(n.Component)),L=function(){return c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.d8f0b5b7.chunk.js.map