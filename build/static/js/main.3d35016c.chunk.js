(this.webpackJsonpwizard=this.webpackJsonpwizard||[]).push([[0],{108:function(e,t,a){e.exports=a(136)},113:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=(a(113),a(54)),l=a(55),o=a(62),m=a(56),d=a(63),u=(a(36),a(10)),f=a(178),h=a(179),p=a(16),g=a(23),y=a(12),E=a(184),b=a(169),v=function(e){return new RegExp("[a-zA-Z]").test(e)||""===e};function N(e){return{type:"SSN_ACTION",ssn:e}}function O(e){return{type:"MS_ACTION",ms:e}}function j(e){return{type:"STEP2_ACTION",mulJob:e}}var x=a(171),w=a(44),k=a(168);var C=Object(u.b)((function(e){return e}))((function(e){var t=Object(k.a)("(max-width:420px)");return r.a.createElement(b.a,{container:!0,item:!0,xs:12,justify:"center",className:"navigation"},e.prev&&r.a.createElement(w.b,{to:e.prev,style:{margin:"1%",textDecoration:"none"}},t?r.a.createElement(x.a,{variant:"outlined",color:"primary",size:"medium",style:{width:"100px"}},"PREVIOUS"):r.a.createElement(x.a,{variant:"outlined",color:"primary",size:"large",style:{width:"100px"}},"PREVIOUS")),e.next&&r.a.createElement(w.b,{to:e.next,style:{margin:"1%",textDecoration:"none"}},t?r.a.createElement(x.a,{variant:"outlined",color:"primary",size:"medium",style:{width:"100px"},onClick:function(){return e.action&&e.dispatch(e.action)}},"NEXT"):r.a.createElement(x.a,{variant:"outlined",color:"primary",size:"large",style:{width:"100px"},onClick:function(){return e.action&&e.dispatch(e.action)}},"NEXT")))}));var S=Object(u.b)((function(e){return e}))((function(e){var t,a=Object(n.useState)(e.formReducer.step1.name),i=Object(p.a)(a,2),c=i[0],s=i[1];return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"Let's get your Name")),Object.keys(c).map((function(e){return r.a.createElement(b.a,{container:!0,item:!0,key:e,xs:12,className:"root"},r.a.createElement(E.a,{className:"root",label:e.charAt(0).toUpperCase()+e.substring(1,e.length),variant:"outlined",value:c[e],onChange:function(t){return function(e,t,a,n){var r=e.target.value.replace(a[t],"");v(r)&&n(Object(y.a)({},a,Object(g.a)({},t,e.target.value)))}(t,e,c,s)}}))})),r.a.createElement(C,{prev:"/pdffed",next:"/pdffed/step1/ssn",action:(t=c,{type:"NAME_ACTION",firstName:t.firstName,middleName:t.middleName,lastName:t.lastName})}))}));function _(){return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement("h1",{className:"heading"},"Hit Next to Get Started")),r.a.createElement(C,{next:"/pdffed/step1/name"}))}var I=function(e){return e.length>=4&&"-"!==e.charAt(3)&&(e=e.substring(0,3)+"-"+e.substring(3,e.length)),e.length>=7&&"-"!==e.charAt(6)&&(e=e.substring(0,6)+"-"+e.substring(6,e.length)),e};var A=Object(u.b)((function(e){return e}))((function(e){var t=Object(n.useState)(e.formReducer.step1.ssn),a=Object(p.a)(t,2),i=a[0],c=a[1];return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"Enter Your 9-Digit Social Security Number")),r.a.createElement(b.a,{container:!0,item:!0,key:"ssn",xs:12,className:"root"},r.a.createElement(E.a,{className:"root",label:"SSN",variant:"outlined",value:i,onChange:function(e){return function(e,t,a){t=t.split("-").join("");var n=e.target.value.split("-").join(""),r=t.length<n.length;if(n.length<10){if(r){var i=n.replace(t,"");return void(isNaN(i)||a(n=I(n)))}a(I(e.target.value))}}(e,i,c)}})),r.a.createElement(C,{prev:"/pdffed/step1/name",next:"/pdffed/step1/address",action:N(i)}))})),T=a(174),D=a(181),z=a(186),M=a(187),R=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=a.props.formReducer.step1.address,a.validateCity=function(e,t){return"city"===e&&v(t.replace(a.state.city,""))},a.validateZip=function(e,t){return"zip"===e&&!isNaN(t)&&t.length<6},a.handleAddr=function(e,t){(a.validateCity(t,e.target.value)||a.validateZip(t,e.target.value)||"state"===t||"street"===t)&&a.setState(Object(y.a)({},a.state,Object(g.a)({},t,e.target.value)))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"Address Information")),r.a.createElement(b.a,{container:!0,item:!0,key:"street",xs:12,className:"root"},r.a.createElement(E.a,{className:"root",label:"Street",variant:"outlined",value:this.state.street,onChange:function(e){return t.handleAddr(e,"street")}})),r.a.createElement(b.a,{container:!0,item:!0,key:"city",xs:12,className:"root"},r.a.createElement(E.a,{className:"root",label:"City",variant:"outlined",value:this.state.city,onChange:function(e){return t.handleAddr(e,"city")}})),r.a.createElement(b.a,{container:!0,item:!0,key:"state",xs:12,className:"root"},r.a.createElement(T.a,{variant:"filled",className:"root"},r.a.createElement(z.a,null,"State"),r.a.createElement(D.a,{value:this.state.state,onChange:function(e){return t.handleAddr(e,"state")}},r.a.createElement(M.a,{value:""},r.a.createElement("em",null,"None")),R.map((function(e){return r.a.createElement(M.a,{key:e,value:e},e)}))))),r.a.createElement(b.a,{container:!0,item:!0,key:"zip",xs:12,className:"root"},r.a.createElement(E.a,{className:"root",label:"Zip",variant:"outlined",value:this.state.zip,onChange:function(e){return t.handleAddr(e,"zip")}})),r.a.createElement(C,{prev:"/pdffed/step1/ssn",next:"/pdffed/step1/ms",action:(e=this.state,{type:"ADDRESS_ACTION",street:e.street,city:e.city,state:e.state,zip:e.zip})}))}}]),t}(r.a.Component);var P=Object(u.b)((function(e){return e}))(W);var H=Object(u.b)((function(e){return e}))((function(e){var t=Object(n.useState)(e.formReducer.step1.maritalStatus),a=Object(p.a)(t,2),i=a[0],c=a[1],s={si:"Single or Married filing separately",ma:"Married filing jointly (or Qualifying widow(er))",hh:"Head of household"};return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"What's your Marital Status?")),r.a.createElement(b.a,{container:!0,item:!0,key:"state",xs:12,className:"root"},r.a.createElement(T.a,{variant:"filled",className:"root"},r.a.createElement(z.a,null,"Marital Status"),r.a.createElement(D.a,{value:i,onChange:function(e){return c(e.target.value)}},r.a.createElement(M.a,{value:""},r.a.createElement("em",null,"None")),Object.keys(s).map((function(e){return r.a.createElement(M.a,{key:e,value:s[e]},s[e])}))))),r.a.createElement(C,{prev:"/pdffed/step1/address",next:"/pdffed/step2",action:O(i)}))})),L=a(34),G=a(176),q=a(182),B=a(177),U=a(139),F=a(175),V=a(180),X=a(94),J=a.n(X),Z=a(70),$=a.n(Z),Q=a(66),K=a.n(Q),Y=a(71),ee=Object(G.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(1,1,6),width:"50%",height:"90%",background:"beige"}}})),te="";function ae(e){var t=new XMLHttpRequest;t.open("GET",J.a,!0),t.responseType="arraybuffer",t.onreadystatechange=function(){4===t.readyState&&(200!==t.status&&0!==t.status||!t.response||(t.onloadend=function(){var t=function(e,t){var a=$()().list_fields(e);ne(a);for(var n=t.step1,r=t.step2,i=t.step3,c=t.step4,s=0,l=Object.keys(a);s<l.length;s++){switch(l[s]){case"f1_01":var o=n.name.firstName+" "+n.name.middleName;a.f1_01=[o];break;case"f1_02":var m=n.name.lastName;a.f1_02=[m];break;case"f1_03":var d=n.address.street;a.f1_03=[d];break;case"f1_04":var u="";n.address.city&&(u+=n.address.city),n.address.state&&(u+=", "+n.address.state),n.address.zip&&(u+=", "+n.address.zip),a.f1_04=[u];break;case"f1_05":var f=n.ssn;a.f1_05=[f];break;case"f1_06":a.f1_06=[i.qualifyingChildren];break;case"f1_07":a.f1_07=[i.dependents];break;case"f1_08":a.f1_08=[i.totalDependents];break;case"f1_09":a.f1_09=[c.otherIncome];break;case"f1_10":a.f1_10=[c.deductions];break;case"f1_11":a.f1_11=[c.extraWithholding];break;case"c1_1":var h=[!1,!1,!1];"Single or Married filing separately"===n.maritalStatus?h=[1,!1,!1]:"Married filing jointly (or Qualifying widow(er))"===n.maritalStatus?h=[!1,2,!1]:"Head of household"===n.maritalStatus&&(h=[!1,!1,3]),a.c1_1=h;break;case"c1_2":a.c1_2=r.multiCheckBox}}return a}(this.response,e.formReducer),a=$()(K.a).transform(this.response,t),n=new Blob([a],{type:"application/pdf"});te=URL.createObjectURL(n);var r=document.getElementById("pdfFrame");Y.isMobile&&(window.location=te),r.src=te}))},t.send()}var ne=function(e){var t=Object.keys(e);for(var a in t)e[t[a]]=[]};var re=Object(u.b)((function(e){return e}))((function(e){var t=ee(),a=r.a.useState(!1),n=Object(p.a)(a,2),i=n[0],c=n[1];return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0},r.a.createElement("h1",{className:"heading"},"Preview your data on form")),r.a.createElement(b.a,{container:!0,item:!0,xs:12,className:"root"},r.a.createElement("div",null,r.a.createElement(x.a,{variant:"contained",size:"large",onClick:function(){ae(e),Y.isMobile||c(!0)}},"Show Data on Actual Form"),r.a.createElement(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:i,closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:500}},r.a.createElement(U.a,{in:i},r.a.createElement(F.a,{className:"paper"},r.a.createElement("iframe",{id:"pdfFrame",style:{boxSsizing:"border-box",width:"100%",height:"100%"},title:"Federal W4 Form"}),r.a.createElement("div",{id:"annotation-layer"}),r.a.createElement(V.a,{display:"flex",justifyContent:"center"},r.a.createElement(x.a,{variant:"outlined",size:"medium",onClick:function(){c(!1)}},"Close"))))))),r.a.createElement(C,{prev:"/pdffed/step4"}))})),ie=a(183);var ce=Object(u.b)((function(e){return e}))((function(e){var t=Object(n.useState)(e.formReducer.step2.multiCheckBox),a=Object(p.a)(t,2),i=a[0],c=a[1];return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"Multiple Jobs or Spouse Works")),r.a.createElement(b.a,{item:!0,className:"wording"},r.a.createElement("h4",null,"If there are only two jobs total, you may check this box. Do the same on Form W-4 for the other job. This option is accurate for jobs with similar pay; otherwise, more tax than necessary may be withheld",r.a.createElement("span",null,r.a.createElement(ie.a,{style:{color:"#3f51b5","&$checked":{color:"green"}},inputProps:{"aria-label":"secondary checkbox"},onChange:function(e){return c(e.target.checked?"1":"Off")}})))),r.a.createElement(C,{prev:"/pdffed/step1/ms",next:"/pdffed/step3",action:j(i)}))})),se=function(e,t,a){return isNaN(e.target.value.replace(a[t],""))||e.target.value.length>=9?a:Object(y.a)({},a,Object(g.a)({},t,e.target.value))};var le=Object(u.b)((function(e){return e}))((function(e){var t,a=Object(n.useState)(e.formReducer.step3),i=Object(p.a)(a,2),c=i[0],s=i[1],l=Object(k.a)("(max-width:420px)");return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"Claim Dependents")),r.a.createElement(b.a,{container:!0,item:!0,key:"qualifyingChildren",xs:9,className:"root",direction:"column",style:{marginLeft:"20%",color:"grey"}},r.a.createElement("h4",null,"Multiply the number of qualifying children under age 17 by $2,000"),r.a.createElement(E.a,{style:{width:"80%"},label:"Qualifying Children Amount",variant:"outlined",value:c.qualifyingChildren,size:l?"small":"medium",onChange:function(e){return s(se(e,"qualifyingChildren",c))}})),r.a.createElement(b.a,{container:!0,item:!0,key:"dependents",xs:9,className:"root",direction:"column",style:{marginLeft:"20%",color:"grey"}},r.a.createElement("h4",null,"Multiply the number of other dependents by $500"),r.a.createElement(E.a,{style:{width:"80%"},label:"Number of Dependents",variant:"outlined",value:c.dependents,size:l?"small":"medium",onChange:function(e){return s(se(e,"dependents",c))}})),r.a.createElement(b.a,{container:!0,item:!0,key:"totalDependents",xs:9,className:"root",direction:"column",style:{marginLeft:"20%",color:"grey"}},r.a.createElement("h4",null,"Add the amounts above and enter the total here"),r.a.createElement(E.a,{style:{width:"80%"},label:"Total Amount",variant:"outlined",value:c.totalDependents,onChange:function(e){return s(se(e,"totalDependents",c))},size:l?"small":"medium"})),r.a.createElement(b.a,{item:!0,className:"wording"}),r.a.createElement(C,{prev:"/pdffed/step2",next:"/pdffed/step4",action:(t=c,{type:"STEP3_ACTION",qualifyingChildren:t.qualifyingChildren,dependents:t.dependents,totalDependents:t.totalDependents})}))})),oe=function(e,t,a){return isNaN(e.target.value.replace(a[t],""))||e.target.value.length>=9?a:Object(y.a)({},a,Object(g.a)({},t,e.target.value))};var me=Object(u.b)((function(e){return e}))((function(e){var t,a=Object(n.useState)(e.formReducer.step4),i=Object(p.a)(a,2),c=i[0],s=i[1],l=Object(k.a)("(max-width:420px)");return r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center",className:"mainGrid"},r.a.createElement(b.a,{item:!0,className:"gridHeading"},r.a.createElement("h1",{className:"heading"},"Other Adjustments")),r.a.createElement(b.a,{container:!0,item:!0,key:"otherIncome",xs:9,className:"root",direction:"column",style:{marginLeft:"20%",color:"grey"}},r.a.createElement("h4",null,"If you want tax withheld for other income you expect this year that won\u2019t have withholding, enter the amount of other income here. This may include interest, dividends, and retirement income"),r.a.createElement(E.a,{style:{width:"80%"},label:"Other income (not from jobs)",variant:"outlined",value:c.otherIncome,className:"ips",size:l?"small":"medium",onChange:function(e){return s(oe(e,"otherIncome",c))}})),r.a.createElement(b.a,{container:!0,item:!0,key:"deductions",xs:9,className:"root",direction:"column",style:{marginLeft:"20%",color:"grey"}},r.a.createElement("h4",null,"If you expect to claim deductions other than the standard deduction and want to reduce your withholding, use the Deductions Worksheet on page 3 and enter the result here"),r.a.createElement(E.a,{style:{width:"80%"},label:"Deductions",variant:"outlined",value:c.deductions,size:l?"small":"medium",onChange:function(e){return s(oe(e,"deductions",c))}})),r.a.createElement(b.a,{container:!0,item:!0,key:"extraWithholding",xs:9,className:"root",direction:"column",style:{marginLeft:"20%",color:"grey"}},r.a.createElement("h4",null,"Enter any additional tax you want withheld each pay period"),r.a.createElement(E.a,{style:{width:"80%"},label:"Total Amount",variant:"outlined",value:c.extraWithholding,size:l?"small":"medium",onChange:function(e){return s(oe(e,"extraWithholding",c))}})),r.a.createElement(b.a,{item:!0,className:"wording"}),r.a.createElement(C,{prev:"/pdffed/step3",next:"/pdffed/done",action:(t=c,{type:"STEP4_ACTION",otherIncome:t.otherIncome,deductions:t.deductions,extraWithholding:t.extraWithholding})}))})),de=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).classes={container:{backgroundColor:"beige",minHeight:"100%",display:"flex"}},a.state={numPages:null,pageNumber:1},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{maxWidth:"md",style:{height:"100%"},className:"mainContainer"},r.a.createElement(h.a,{component:"div",style:this.classes.container},r.a.createElement(L.a,{path:"/pdffed",exact:!0,render:function(){return r.a.createElement(_,null)}}),r.a.createElement(L.a,{path:"/pdffed/step1/name",exact:!0,render:function(){return r.a.createElement(S,null)}}),r.a.createElement(L.a,{path:"/pdffed/step1/ssn",exact:!0,render:function(){return r.a.createElement(A,null)}}),r.a.createElement(L.a,{path:"/pdffed/step1/address",exact:!0,render:function(){return r.a.createElement(P,null)}}),r.a.createElement(L.a,{path:"/pdffed/step1/ms",exact:!0,render:function(){return r.a.createElement(H,null)}}),r.a.createElement(L.a,{path:"/pdffed/step2",exact:!0,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(L.a,{path:"/pdffed/step3",exact:!0,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(L.a,{path:"/pdffed/step4",exact:!0,render:function(){return r.a.createElement(me,null)}}),r.a.createElement(L.a,{path:"/pdffed/done",exact:!0,render:function(){return r.a.createElement(re,null)}})))}}]),t}(r.a.Component);var ue=Object(u.b)((function(e){return e}))(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=a(43),he={step1:{name:{firstName:"",middleName:"",lastName:""},address:{street:"",city:"",state:"",zip:""},maritalStatus:"",ssn:""},step2:{multiCheckBox:""},step3:{qualifyingChildren:"",dependents:"",totalDependents:""},step4:{otherIncome:"",deductions:"",extraWithholding:""}},pe={screen:0};var ge=Object(fe.b)({screenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return arguments.length>1&&arguments[1],e},formReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAME_ACTION":var a=t.firstName,n=t.middleName,r=t.lastName;return Object(y.a)({},e,{step1:Object(y.a)({},e.step1,{name:{firstName:a,middleName:"undefined"===n?"":n,lastName:r}})});case"SSN_ACTION":var i=t.ssn;return Object(y.a)({},e,{step1:Object(y.a)({},e.step1,{ssn:i})});case"ADDRESS_ACTION":var c=t.street,s=t.city,l=t.state,o=t.zip;return Object(y.a)({},e,{step1:Object(y.a)({},e.step1,{address:{street:c,city:s,state:l,zip:o}})});case"MS_ACTION":var m=t.ms;return Object(y.a)({},e,{step1:Object(y.a)({},e.step1,{maritalStatus:m})});case"STEP2_ACTION":return Object(y.a)({},e,{step2:Object(y.a)({},e.step2,{multiCheckBox:t.mulJob})});case"STEP3_ACTION":var d=t.qualifyingChildren,u=t.dependents,f=t.totalDependents;return Object(y.a)({},e,{step3:{qualifyingChildren:d,dependents:u,totalDependents:f}});case"STEP4_ACTION":var h=t.otherIncome,p=t.deductions,g=t.extraWithholding;return Object(y.a)({},e,{step4:{otherIncome:h,deductions:p,extraWithholding:g}})}return e}}),ye=Object(fe.c)(ge,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(u.a,{store:ye},r.a.createElement(w.a,null,r.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/fw4.e733c24f.pdf"}},[[108,1,2]]]);
//# sourceMappingURL=main.3d35016c.chunk.js.map