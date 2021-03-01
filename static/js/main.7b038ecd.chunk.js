(this["webpackJsonpgo-it-react-hw-06-phonebook"]=this["webpackJsonpgo-it-react-hw-06-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__3UsUh",filter:"Filter_filter__2_vAX",enter:"Filter_enter__2sCOO",enterActive:"Filter_enterActive__3OL2O",exit:"Filter_exit__WoGZI",exitActive:"Filter_exitActive__80P-4"}},24:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__3Ede_",contactsListItem:"ContactsList_contactsListItem__1haWH",enter:"ContactsList_enter__36wN0",enterActive:"ContactsList_enterActive__3q2Iz",exit:"ContactsList_exit__2SE5u",exitActive:"ContactsList_exitActive__2bRxC"}},25:function(t,e,n){t.exports={sectionTitle:"App_sectionTitle__3szAW",appear:"App_appear__PPw11",appearActive:"App_appearActive__3Al1P"}},26:function(t,e,n){t.exports={alert:"Alert_alert__2behH",enter:"Alert_enter__Yq7M3",enterActive:"Alert_enterActive__31qpU",exit:"Alert_exit__JxAjg",exitActive:"Alert_exitActive__1xEFe"}},28:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2XY88"}},30:function(t,e,n){t.exports={contactsListItem:"ContactsListItems_contactsListItem__3AiFd"}},39:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(8),a=n.n(r),i=(n(39),n(9)),o=n(13),s=n(14),l=n(17),u=n(16),b=n(28),j=n.n(b),m=n(3),p=n(50),d=n(6),f={addContact:Object(d.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(p.a)(),name:e,number:n}}})),deleteContact:Object(d.b)("contacts/delete",(function(t){return{payload:{id:t}}})),changeFilter:Object(d.b)("contacts/filter",(function(t){return{payload:{filter:t}}})),showAlert:Object(d.b)("contacts/alert")},h=n(1),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,r=n.value;t.setState(Object(i.a)({},c,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;if(t.props.items.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return t.props.onChangeAlert(),void setTimeout((function(){return t.props.onChangeAlert()}),1500);t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.contactForm,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),_=Object(m.b)((function(t){return{items:t.contacts.items,alert:t.contacts.alert}}),(function(t){return{onAddContact:function(e){return t(f.addContact(e))},onChangeAlert:function(){return t(f.showAlert())}}}))(O),x=n(51),v=n(49),C=n(24),A=n.n(C),g=n(30),F=n.n(g);var y=Object(m.b)(null,(function(t){return{onDeleteContact:function(e){return t(f.deleteContact(e))}}}))((function(t){var e=t.contact,n=t.onDeleteContact;return Object(h.jsxs)("li",{className:F.a.ContactsListItem,children:[e.name,": ",e.number,Object(h.jsx)("button",{type:"button",onClick:function(){n(e.id)},children:"Delete"})]})})),L=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.a,{component:"ul",className:A.a.contactsList,children:this.props.contacts.map((function(e){return Object(h.jsx)(v.a,{in:t.props.contacts.length>0,timeout:250,classNames:A.a,children:Object(h.jsx)(y,{contact:e})},e.id)}))})})}}]),n}(c.Component),w=Object(m.b)((function(t){return{contacts:t.contacts.filter?t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())})):t.contacts.items}}))(L),N=n(18),k=n.n(N),I=Object(m.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{getFilter:function(e){return t(f.changeFilter(e))}}}))((function(t){var e=t.filter,n=t.getFilter;return Object(h.jsx)("div",{className:k.a.filterWrapper,children:Object(h.jsx)(v.a,{in:!0,timeout:1e3,classNames:k.a,children:Object(h.jsxs)("label",{className:k.a.filter,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){n(t.target.value)}})]})})})})),E=n(25),S=n.n(E),T=n(26),W=n.n(T);var P=Object(m.b)((function(t){return{alert:t.contacts.alert}}))((function(t){var e=t.alert;return Object(h.jsx)(v.a,{in:e,classNames:W.a,timeout:250,unmountOnExit:!0,children:Object(h.jsx)("p",{className:W.a.alert,children:"The name is already exist"})})}));var D,q=Object(m.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onChangeFilter:function(e){return t(f.changeFilter(e))}}}))((function(t){var e=t.items,n=t.alert;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P,{alert:n}),Object(h.jsx)(v.a,{in:!0,timeout:500,classNames:S.a,appear:!0,unmountOnExit:!0,children:Object(h.jsx)("p",{className:S.a.sectionTitle,children:" Phonebook "})}),Object(h.jsx)(_,{}),e.length>1&&Object(h.jsx)(I,{}),Object(h.jsx)(w,{})]})})),z=n(31),J=n(15),U=n(32),H=n.n(U),X=n(2),Y=Object(d.c)([],(D={},Object(i.a)(D,f.addContact,(function(t,e){return[].concat(Object(J.a)(t),[e.payload])})),Object(i.a)(D,f.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),D)),B=Object(d.c)("",Object(i.a)({},f.changeFilter,(function(t,e){return e.payload.filter}))),G=Object(d.c)(!1,Object(i.a)({},f.showAlert,(function(t,e){return!t}))),M=Object(X.c)({items:Y,filter:B,alert:G}),R=n(33),Z=n.n(R),K=n(7),Q={key:"items",storage:Z.a,blacklist:["filter","alert"]},V=[].concat(Object(J.a)(Object(d.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[H.a]),$=Object(d.a)({reducer:{contacts:Object(K.g)(Q,M)},middleware:V,devTools:!1}),tt={store:$,persistor:Object(K.h)($)};a.a.render(Object(h.jsx)(m.a,{store:tt.store,children:Object(h.jsx)(z.a,{loading:null,persistor:tt.persistor,children:Object(h.jsx)(q,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7b038ecd.chunk.js.map