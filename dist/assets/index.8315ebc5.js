import{j as v,r as d,R as F,a as O}from"./vendor.f9f31fd9.js";const L=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};L();const e=v.exports.jsx,t=v.exports.jsxs,R=v.exports.Fragment,j=({children:n})=>e("div",{className:"bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md",children:e("p",{children:n})}),C=({patients:n,setPatients:l,patient:r,setPatient:i})=>{const[a,o]=d.exports.useState(""),[c,m]=d.exports.useState(""),[u,h]=d.exports.useState(""),[b,f]=d.exports.useState(""),[g,x]=d.exports.useState(""),[N,y]=d.exports.useState(""),[P,S]=d.exports.useState(!1);d.exports.useEffect(()=>{Object.keys(r).length>0&&(o(r.name),m(r.owner),h(r.email),f(r.rut),x(r.date),y(r.symptom))},[r]);const E=()=>{const s=Math.random().toString(36).substring(2),p=Date.now().toString(36);return s+p};return t("div",{className:"md:w-1/2 lg:w-2/5",children:[e("h2",{className:"font-black text-3xl text-center",children:"Seguimiento Pacientes"}),t("p",{className:"text-lg mt-5 text-center mb-10",children:["A\xF1ade Pacientes y ","",e("span",{className:"text-indigo-600 font-bold",children:"Administralos"})]}),t("form",{onSubmit:s=>{if(s.preventDefault(),S(!0),[a,c,u,b,g,N].includes("")){console.log("Hay al menos 1 campo vacio");return}S(!1);const p={name:a,owner:c,email:u,rut:b,date:g,symptom:N};if(r.id){p.id=r.id;const k=n.map(w=>w.id===r.id?p:w);l(k),i({})}else p.id=E(),l([...n,p]);o(""),m(""),h(""),f(""),x(""),y("")},className:"bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10",children:[P&&e(j,{children:e("p",{children:'"Todos los campos son OBLIGATORIOS"'})}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"mascota",className:"block text-gray-800 uppercase font-bold",children:"Nombre Mascota"}),e("input",{id:"mascota",type:"text",placeholder:"Nombre de la Mascota",className:"border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md",value:a,onChange:s=>o(s.target.value)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"propietario",className:"block text-gray-800 uppercase font-bold",children:"Nombre Propietario"}),e("input",{id:"propietario",type:"text",placeholder:"Nombre del Propietario",className:"border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md",value:c,onChange:s=>m(s.target.value)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"email",className:"block text-gray-800 uppercase font-bold",children:"E-mail"}),e("input",{id:"email",type:"email",placeholder:"E-mail para contactar al Propietario",className:"border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md",value:u,onChange:s=>h(s.target.value)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"rut",className:"block text-gray-800 uppercase font-bold",children:"Rut del Propietario"}),e("input",{id:"rut",type:"text",placeholder:"Introduzca su Rut",className:"border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md",value:b,onChange:s=>f(s.target.value)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"alta",className:"block text-gray-800 uppercase font-bold",children:"Alta"}),e("input",{id:"alta",type:"date",className:"border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md",value:g,onChange:s=>x(s.target.value)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"sintomas",className:"block text-gray-800 uppercase font-bold",children:"Sintomas"}),e("textarea",{id:"sintomas",placeholder:"Introduzca los Sintomas de la Mascota",className:"border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md",value:N,onChange:s=>y(s.target.value)})]}),e("input",{type:"submit",className:"bg-indigo-600 w-full p-3 text-indigo-100 uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all",value:r.id?"Guardar cambios":"Agregar Paciente"})]})]})};function A(){return t("h1",{className:"font-black text-5xl text-center w-1/2 mx-auto",children:["Seguimiento pacientes ","",e("span",{className:"text-indigo-600",children:"Veterinaria"})]})}const I=({patients:n,setPatient:l,removePatient:r})=>{const{name:i,owner:a,email:o,rut:c,date:m,symptom:u,id:h}=n;return t("div",{className:"m-3 bg-white shadow-md px-5 py-10 rounded-md",children:[t("p",{className:"font-bold mb-3 text-gray-800 uppercase",children:["Nombre de la Mascota: ","",e("span",{className:"font-normal normal-case",children:i})]}),t("p",{className:"font-bold mb-3 text-gray-800 uppercase",children:["Nombre del Propietario: ","",e("span",{className:"font-normal normal-case",children:a})]}),t("p",{className:"font-bold mb-3 text-gray-800 uppercase",children:["E-mail: ","",e("span",{className:"font-normal normal-case",children:o})]}),t("p",{className:"font-bold mb-3 text-gray-800 uppercase",children:["Rut: ","",e("span",{className:"font-normal normal-case",children:c})]}),t("p",{className:"font-bold mb-3 text-gray-800 uppercase",children:["Fecha de Alta: ","",e("span",{className:"font-normal normal-case",children:m})]}),t("p",{className:"font-bold mb-3 text-gray-800 uppercase",children:["Sintomas: ","",e("span",{className:"font-normal normal-case",children:u})]}),t("div",{className:"flex justify-between mt-10",children:[e("button",{type:"button",className:"py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-indigo-100 font-bold uppercase rounded-md cursor-pointer transition-all",onClick:()=>l(n),children:"Editar"}),e("button",{type:"button",className:"py-2 px-10 bg-red-600 hover:bg-red-800 text-indigo-100 font-bold uppercase rounded-md cursor-pointer transition-all",onClick:()=>{confirm("\xBFDeseas eliminar este paciente?")&&r(h)},children:"Eliminar"})]})]})},M=({patients:n,setPatient:l,removePatient:r})=>e("div",{className:"md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll",children:n.length!==0?t(R,{children:[e("h2",{className:"font-black text-3xl text-center",children:"Listado de Pacientes"}),t("p",{className:"text-xl mt-5 mb-10 text-center",children:["Administra tus ","",e("span",{className:"text-indigo-600 font-bold ",children:"Pacientes y Citas"})]}),n.map(i=>e(I,{patients:i,setPatient:l,removePatient:r},i.id))]}):t("div",{children:[e("h2",{className:"font-black text-3xl text-center",children:"No hay pacientes"}),t("p",{className:"text-xl mt-5 mb-10 text-center",children:["Comienza agregando pacientes ","",e("span",{className:"text-indigo-600 font-bold ",children:"y aparecer\xE1n en este lugar"})]})]})});function D(){const[n,l]=d.exports.useState([]),[r,i]=d.exports.useState({});return d.exports.useEffect(()=>{(()=>{var m;const c=(m=JSON.parse(localStorage.getItem("pacientes")))!=null?m:[];l(c)})()},[]),d.exports.useEffect(()=>{localStorage.setItem("pacientes",JSON.stringify(n))},[n]),t("div",{className:"container mx-auto mt-20",children:[e(A,{}),t("div",{className:"mt-12 md:flex",children:[e(C,{patients:n,setPatients:l,patient:r,setPatient:i}),e(M,{patients:n,setPatient:i,removePatient:o=>{const c=n.filter(m=>m.id!==o);l(c)}})]})]})}F.render(e(O.StrictMode,{children:e(D,{})}),document.getElementById("root"));