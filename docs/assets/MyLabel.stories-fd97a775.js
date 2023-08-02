import{j as A}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const n=({label:t="no label",size:q="normal",capitalize:x=!1,color:L="primary",fontColor:V,backgroundColor:T="transparent"})=>A.jsx("span",{className:` ${q} text-${L} label`,style:{color:`${V}`,backgroundColor:T},children:x?t.toUpperCase():t});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"no label"},description:"Label to display in the component",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},capitalize:{defaultValue:{value:"false"},description:"Change to capitalize the label",name:"capitalize",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom label color",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const N={title:"UI/MyLabel",component:n,tags:["autodocs"],argTypes:{color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic",size:"normal",capitalize:!1}},a={args:{label:"All Caps",capitalize:!0}},r={args:{label:"Secondary",color:"secondary"}},o={args:{label:"Tertiary",size:"h2",color:"tertiary"}},l={args:{label:"Custom Font Color",size:"h1",capitalize:!0,fontColor:"#5717ac"}},s={args:{label:"Custom Background Color",size:"h1",fontColor:"white",backgroundColor:"black"}};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Basic",
    size: "normal",
    capitalize: false
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "All Caps",
    capitalize: true
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var C,g,y;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    color: "secondary"
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Tertiary",
    size: "h2",
    color: "tertiary"
  }
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var h,v,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Custom Font Color",
    size: "h1",
    capitalize: true,
    fontColor: "#5717ac"
  }
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,_,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Custom Background Color",
    size: "h1",
    fontColor: "white",
    backgroundColor: "black"
  }
}`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const $=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,s as CustomBackgroundColor,l as CustomFontColor,r as Secondary,o as Tertiary,$ as __namedExportsOrder,N as default};
//# sourceMappingURL=MyLabel.stories-fd97a775.js.map
