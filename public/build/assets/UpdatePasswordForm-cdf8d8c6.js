import{r as i,W as g,j as a,a as s}from"./app-c7b81e2d.js";import{T as d,I as c}from"./TextInput-2a72d9fa.js";import{I as p}from"./InputLabel-c331a6b4.js";import{P as _}from"./PrimaryButton-454860ac.js";import{t as y}from"./transition-1bf49112.js";function S({className:w=""}){const l=i.useRef(),u=i.useRef(),{data:e,setData:o,errors:t,put:f,reset:n,processing:h,recentlySuccessful:v}=g({current_password:"",password:"",password_confirmation:""});return a("section",{className:w,children:[a("header",{children:[s("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),a("form",{onSubmit:r=>{r.preventDefault(),f(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:m=>{m.password&&(n("password","password_confirmation"),l.current.focus()),m.current_password&&(n("current_password"),u.current.focus())}})},className:"mt-6 space-y-6",children:[a("div",{children:[s(p,{htmlFor:"current_password",value:"Current Password"}),s(d,{id:"current_password",ref:u,value:e.current_password,onChange:r=>o("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:t.current_password,className:"mt-2"})]}),a("div",{children:[s(p,{htmlFor:"password",value:"New Password"}),s(d,{id:"password",ref:l,value:e.password,onChange:r=>o("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:t.password,className:"mt-2"})]}),a("div",{children:[s(p,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(d,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>o("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center gap-4",children:[s(_,{disabled:h,children:"Save"}),s(y,{show:v,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:s("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{S as default};
