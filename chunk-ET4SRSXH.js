import{j as a}from"./chunk-T42KVLIE.js";import{$ as n,Hb as c,ja as r,ka as p,sb as m,tb as s,xc as l}from"./chunk-I3VSXKWL.js";var d=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-login"]],decls:2,vars:0,template:function(o,h){o&1&&(m(0,"p"),c(1,"login works!"),s())}});let e=t;return e})();var u=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-sign-up"]],decls:2,vars:0,template:function(o,h){o&1&&(m(0,"p"),c(1,"sign-up works!"),s())}});let e=t;return e})();var y=[{path:"sign-up",component:u},{path:"login",component:d},{path:"",redirectTo:"login",pathMatch:"full"}],g=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t}),t.\u0275inj=n({imports:[a.forChild(y),a]});let e=t;return e})();var E=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t}),t.\u0275inj=n({imports:[l,g]});let e=t;return e})();export{E as AuthModule};