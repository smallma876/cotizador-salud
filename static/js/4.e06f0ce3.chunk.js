(this["webpackJsonpcotizador-salud"]=this["webpackJsonpcotizador-salud"]||[]).push([[4],{40:function(e,a,n){"use strict";n(41);var t=n(4);a.a=function(e){var a=e.content;return Object(t.jsxs)("div",{className:"bannerleft",children:[Object(t.jsx)("div",{className:"bannerleft__content",children:a}),Object(t.jsx)("div",{className:"bannerleft__image"})]})}},41:function(e,a,n){},42:function(e,a,n){"use strict";n(43);var t=n(4);a.a=function(e){var a=e.left,n=e.right;return Object(t.jsxs)("div",{className:"layout",children:[Object(t.jsx)("section",{className:"layout__left",children:a}),Object(t.jsx)("section",{className:"layout__right",children:n})]})}},43:function(e,a,n){},44:function(e,a,n){"use strict";n(45);var t=n(78),s=n(4);a.a=function(e){var a=e.value,n=e.onChange,r=e.label;return Object(s.jsxs)("div",{className:"inputdate",children:[Object(s.jsx)("input",{type:"text",className:"inputdate__input",placeholder:"  ",value:a,onChange:n}),Object(s.jsx)("label",{className:"inputdate__label",children:r}),Object(s.jsx)("div",{className:"inputdate__icon",children:Object(s.jsx)(t.a,{fontSize:"large",color:"inherit"})})]})}},45:function(e,a,n){},46:function(e,a,n){"use strict";n(0),n(47);var t=n(4);a.a=function(e){var a=e.value,n=e.onChange,s=e.onChangeSelect,r=e.label,c=e.valueselect,l=e.isValid,i=e.texterror,o=l?"":"inputdropdown--invalid";return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"inputdropdown ".concat(o),children:[Object(t.jsxs)("select",{className:"inputdropdown__select",onChange:s,value:c,children:[Object(t.jsx)("option",{className:"inputdropdown__option",value:"dni",children:"DNI"}),Object(t.jsx)("option",{className:"inputdropdown__option",value:"ce",children:"CE"})]}),Object(t.jsx)("input",{type:"text",className:"inputdropdown__text",placeholder:" ",value:a,onChange:n}),Object(t.jsx)("label",{className:"inputdropdown__label",children:r})]}),Object(t.jsx)("div",{className:"inputdropdown__error",children:l?null:i})]})}},47:function(e,a,n){},48:function(e,a,n){"use strict";n(0),n(49);var t=n(4);a.a=function(e){var a=e.value,n=e.onChange,s=e.label;return Object(t.jsxs)("div",{className:"inputtext",children:[Object(t.jsx)("input",{type:"text",className:"inputtext__input",placeholder:"  ",value:a,onChange:n}),Object(t.jsx)("label",{className:"inputtext__label",children:s})]})}},49:function(e,a,n){},50:function(e,a,n){"use strict";n(0);var t=n(14),s=(n(51),n(4));a.a=function(e){var a=e.text,n=e.path;return Object(s.jsx)("div",{className:"breadcrumb",children:Object(s.jsxs)("div",{className:"breadcrumb__container",children:[Object(s.jsx)("div",{className:"breadcrumb__arrow",children:Object(s.jsx)(t.b,{href:"#",className:"breadcrumb__link",to:n,children:Object(s.jsx)("span",{className:"breadcrumb__left"})})}),Object(s.jsx)("span",{children:a})]})})}},51:function(e,a,n){},61:function(e,a,n){},62:function(e,a,n){},63:function(e,a,n){},64:function(e,a,n){},81:function(e,a,n){"use strict";n.r(a);var t=n(40),s=n(42),r=n(0),c=n(2),l=n(50),i=n(44),o=n(46),u=(n(61),n(4)),d=function(e){var a=e.value,n=e.label,t=e.name,s=e.selected,r=e.onChange;return Object(u.jsx)("div",{className:"inputradio",children:Object(u.jsxs)("label",{className:"inputradio__label",children:[n,Object(u.jsx)("input",{type:"radio",className:"inputradio__input",name:t,value:a,checked:a===s,onChange:r}),Object(u.jsx)("span",{className:"inputradio__checkmark"})]})})},j=n(48),b=(n(62),n(79)),m=Object(b.a)(r.createElement("path",{d:"M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"}),"ArrowForwardIosSharp"),h=function(){return Object(u.jsx)("div",{className:"secondarybutton",children:Object(u.jsxs)("button",{className:"secondarybutton__button",children:[Object(u.jsx)("span",{children:"CONTINUAR"}),Object(u.jsx)("div",{className:"secondarybutton__icon",children:Object(u.jsx)(m,{fontSize:"small",color:"inherit"})})]})})},p=n(13),f=function(){var e=Object(r.useContext)(p.a).dispatch;return{onChangeTypeDocument:function(a){e({type:"changeTypeDocument",payload:a})},onChangeNumberDocument:function(a){e({type:"changeNumberDocument",payload:a})},onChangeNames:function(a){e({type:"changeNames",payload:a})},onChangePaternal:function(a){e({type:"changePaternal",payload:a})},onChangeMaternal:function(a){e({type:"changeMaternal",payload:a})},onChangeDateOfBirth:function(a){e({type:"changeDateBirth",payload:a})},onChangeGender:function(a){e({type:"changeGender",payload:a})},onChangeInsured:function(a){e({type:"changeInsured",payload:a})}}},O=function(){var e=Object(r.useContext)(p.a).appState,a=Object(r.useRef)(!0),n=Object(r.useRef)(!0),t=Object(r.useRef)(!0),s=Object(r.useRef)(!0),c=Object(r.useRef)(!0),l=Object(r.useRef)(!0),i=Object(r.useRef)(!0),o=Object(r.useRef)(!0);return{isValidFormPersonal:function(){return n.current=""!==e.documentnumber.trim(),a.current&&n.current&&t.current&&s.current&&c.current&&l.current&&i.current&&o.current},isValidDocumentTypePersonal:a,isValidDocumentNumberPersonal:n,isValidNamesPersonal:s,isValidPaternoPersonal:t,isValidMaternoPersonal:c,isValidBirthDatePersonal:l,isValidGenderPersonal:i,isValidInsuredPersonal:o}},x=(n(63),function(){var e=Object(c.f)(),a=f(),n=a.onChangeTypeDocument,t=a.onChangeNumberDocument,s=a.onChangeNames,b=a.onChangePaternal,m=a.onChangeMaternal,x=a.onChangeDateOfBirth,_=a.onChangeGender,v=a.onChangeInsured,g=O(),N=g.isValidFormPersonal,C=(g.isValidDocumentTypePersonal,g.isValidDocumentNumberPersonal),y=(g.isValidNamesPersonal,g.isValidPaternoPersonal,g.isValidMaternoPersonal,g.isValidBirthDatePersonal,g.isValidGenderPersonal,g.isValidInsuredPersonal,Object(r.useContext)(p.a)),P=y.appState,w=y.dispatch,V=Object(u.jsxs)("div",{className:"frmpersonal__step",children:["PASO 1 ",Object(u.jsx)("span",{className:"frmpersonal__totalsteps",children:"DE 7"})]});return Object(u.jsxs)("div",{className:"frmpersonal",children:[Object(u.jsx)("div",{className:"frmpersonal__breadcrumb",children:Object(u.jsx)(l.a,{text:V,path:"/home"})}),Object(u.jsxs)("h1",{className:"frmpersonal__title",children:["Hola, ",Object(u.jsx)("span",{className:"frmpersonal__highlighted",children:P.names})]}),Object(u.jsx)("h2",{className:"frmpersonal__subtitle",children:"Valida que los datos sean correctos"}),Object(u.jsx)("h3",{className:"frmpersonal__subtitle2",children:"Datos personales del titular"}),Object(u.jsxs)("form",{onSubmit:function(a){a.preventDefault(),N()?e.push("/health-plans"):w({type:"changeIsValidFormPersonal",payload:!1})},children:[Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(o.a,{value:P.documentnumber,onChange:function(e){return t(e.target.value)},onChangeSelect:function(e){return n(e.target.value)},label:"Nro. de documento",valueselect:P.documenttype,isValid:C.current,texterror:"Complete los campos"})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(j.a,{value:P.names,onChange:function(e){return s(e.target.value)},label:"Nombres"})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(j.a,{value:P.paternal,onChange:function(e){return b(e.target.value)},label:"Apellido Paterno"})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(j.a,{value:P.maternal,onChange:function(e){return m(e.target.value)},label:"Apellido Materno"})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(i.a,{value:P.dateofbirth,onChange:function(e){return x(e.target.value)},label:"Fecha de Nacimiento"})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(d,{name:"sex",label:"Masculino",value:"M",selected:P.gender,onChange:function(e){return _(e.target.value)}})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(d,{name:"sex",label:"Femenino",value:"F",selected:P.gender,onChange:function(e){return _(e.target.value)}})}),Object(u.jsx)("h3",{className:"frmpersonal__subtitle2",children:"\xbfA qui\xe9n vamos a asegurar?"}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(d,{name:"insured",label:"Solo a mi",value:"0",selected:P.insured,onChange:function(e){return v(e.target.value)}})}),Object(u.jsx)("div",{className:"frmpersonal__row",children:Object(u.jsx)(d,{name:"insured",label:"A mi y a mi familia",value:"1",selected:P.insured,onChange:function(e){return v(e.target.value)}})}),Object(u.jsx)("div",{className:"frmpersonal__row frmpersonal__right",children:Object(u.jsx)(h,{})})]})]})});n(64),a.default=function(){return Object(u.jsx)(s.a,{right:Object(u.jsx)(x,{}),left:Object(u.jsx)(t.a,{content:Object(u.jsx)("div",{})})})}}}]);
//# sourceMappingURL=4.e06f0ce3.chunk.js.map