(this["webpackJsonpcomplaint-system"]=this["webpackJsonpcomplaint-system"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(2),r=a.n(i),c=(a(12),function(){return l.a.createElement("nav",{className:"custom-bluegreen-bg-1"},l.a.createElement("div",{className:"nav-wrapper container"},l.a.createElement("a",{href:"#",class:"brand-logo"},"Complaint Classifier"),l.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Option 1")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Option 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Option 3")))))}),o=a(3),s=a(4),m=a(6),d=a(5),u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={prediction:"",confidence:0,showState:!1},e.handleFormSubmit=function(t){t.preventDefault(),console.log("Form submitted. Please delete this line in final submission.");var a={query:document.getElementById("complaint")};fetch("/predict",{method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){e.setState({prediction:t.prediction,confidence:t.confidence}),console.log(t)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return this.state.showState?l.a.createElement("div",{className:"center"},"Prediction: ",this.state.prediction,l.a.createElement("br",null),"Confidence: ",this.state.confidence):null,l.a.createElement("div",{className:"container center"},l.a.createElement("h3",null,"Complaint Form"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"row container"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"first_name",type:"text",className:"validate",required:!0}),l.a.createElement("label",{for:"first_name"},"First Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"last_name",type:"text",className:"validate",required:!0}),l.a.createElement("label",{for:"last_name"},"Last Name"))),l.a.createElement("div",{className:"row container"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"email",type:"email",className:"validate",required:!0}),l.a.createElement("label",{for:"email"},"E-Mail")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"address",type:"text",className:"validate",required:!0}),l.a.createElement("label",{for:"address"},"Address"))),l.a.createElement("div",{class:"row container"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{id:"complaint",type:"text",className:"validate",required:!0}),l.a.createElement("label",{for:"complaint"},"Enter complaint here"))),l.a.createElement("button",{class:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit Complaint")),l.a.createElement("displayOutput",null))}}]),a}(n.Component),p=function(){return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement(u,null),l.a.createElement("p",null,"My Token = ",window.token," (this line to be removed once development complete)"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3cdc8371.chunk.js.map