import{d as y,r as x,a as c,c as E,w as l,S as v,o as V,b as e,e as m,f as k,g as n,_ as C}from"./index.ffe27343.js";const L=y({__name:"ContactPage",setup(F){const _=x(),a=c({name:"",surname:"",email:""}),s=c({name:[{required:!0,message:'Fill in "Name" field',trigger:"blur"},{min:3,max:100,message:"Length should be 3 to 100",trigger:"blur"}],surname:[{required:!0,message:'Fill in "Surname" field',trigger:"blur"},{min:3,max:100,message:"Length should be 3 to 100",trigger:"blur"}],email:[{required:!0,message:'Fill in "Email" field',trigger:"blur"},{type:"email",message:"Please input valid email address",trigger:["blur","change"]}]}),f=async i=>{!i||await i.validate((t,r)=>{t?console.log(a):console.error("Provide valid values for those elements:",r)})};return(i,t)=>{const r=n("ElInput"),u=n("ElFormItem"),g=n("ElButton"),b=n("ElForm"),d=n("RouterLink"),p=n("ElLink");return V(),E(v,null,{sidebar:l(()=>[e(p,null,{default:l(()=>[e(d,{to:"/"},{default:l(()=>[m("Home")]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(d,{to:"/"},{default:l(()=>[m("Contact")]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(d,{to:"/"},{default:l(()=>[m("Listing")]),_:1})]),_:1})]),default:l(()=>[e(b,{model:a,rules:s,ref_key:"formRef",ref:_,"status-icon":""},{default:l(()=>[e(u,{label:"Name",prop:"name",onKeyup:k(f,["enter"])},{default:l(()=>[e(r,{placeholder:"Name",modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=o=>a.name=o),type:"text",required:"",min:2,max:50},null,8,["modelValue"])]),_:1},8,["onKeyup"]),e(u,{rules:s.surname,prop:"surname",label:"Surname"},{default:l(()=>[e(r,{placeholder:"Surname",modelValue:a.surname,"onUpdate:modelValue":t[1]||(t[1]=o=>a.surname=o),type:"text",required:"",min:2,max:100},null,8,["modelValue"])]),_:1},8,["rules"]),e(u,{rules:s.email,prop:"email",label:"Email"},{default:l(()=>[e(r,{placeholder:"Email",modelValue:a.email,"onUpdate:modelValue":t[2]||(t[2]=o=>a.email=o),type:"email",required:"",min:2,max:100},null,8,["modelValue"])]),_:1},8,["rules"]),e(u,null,{default:l(()=>[e(g,{type:"primary",onClick:t[3]||(t[3]=o=>f(_.value))},{default:l(()=>[m("Submit")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}});const q=C(L,[["__scopeId","data-v-0c47ee07"]]);export{q as default};
