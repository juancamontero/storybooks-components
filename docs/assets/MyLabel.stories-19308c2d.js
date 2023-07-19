import{j as q}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:s="no label",size:S="normal",capitalize:_=!1,color:x="primary",fontColor:L})=>q.jsx("span",{className:` ${S} text-${x} label`,style:{color:`${L}`},children:_?s.toUpperCase():s});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"no label"},description:"Label to display in the component",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},capitalize:{defaultValue:{value:"false"},description:"Change to capitalize the label",name:"capitalize",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom label color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const B={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic",size:"normal",capitalize:!1}},a={args:{label:"All Caps",capitalize:!0}},r={args:{label:"Secondary",color:"secondary"}},o={args:{label:"Tertiary",size:"h2",color:"tertiary"}},l={args:{label:"Custom Font Color",size:"h1",capitalize:!0,fontColor:"#5717ac"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Basic",
    size: "normal",
    capitalize: false
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "All Caps",
    capitalize: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    color: "secondary"
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Tertiary",
    size: "h2",
    color: "tertiary"
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var z,h,v;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Custom Font Color",
    size: "h1",
    capitalize: true,
    fontColor: "#5717ac"
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const F=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,l as CustomFontColor,r as Secondary,o as Tertiary,F as __namedExportsOrder,B as default};
//# sourceMappingURL=MyLabel.stories-19308c2d.js.map
