import{v as Z,w as ee,r as x,x as te,i as _,c as j,j as r,y as se,h as C,d as E,u as O,q as F,a as G,z as I,D as H,E as q,b as z,J as ae,K as ne,G as D,s as B,B as w,n as S,M as oe}from"./index-HDkU-BHf.js";function re(s){const{theme:a}=Z(),o=ee();return x.useMemo(()=>te(a.direction,{...o,...s}),[s,a.direction,o])}var ie={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},le={horizontal:s=>({"& > *:not(style) ~ *:not(style)":{marginStart:s}}),vertical:s=>({"& > *:not(style) ~ *:not(style)":{marginTop:s}})},M=_(function(a,o){const{size:t,colorScheme:e,variant:n,className:i,spacing:c="0.5rem",isAttached:l,isDisabled:m,orientation:d="horizontal",...p}=a,u=j("chakra-button__group",i),h=x.useMemo(()=>({size:t,colorScheme:e,variant:n,isDisabled:m}),[t,e,n,m]);let y={display:"inline-flex",...l?ie[d]:le[d](c)};const v=d==="vertical";return r.jsx(se,{value:h,children:r.jsx(C.div,{ref:o,role:"group",__css:y,className:u,"data-attached":l?"":void 0,"data-orientation":d,flexDir:v?"column":void 0,...p})})});M.displayName="ButtonGroup";var[de,A]=E({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[ce,P]=E({strict:!1,name:"FormControlContext"});function ue(s){const{id:a,isRequired:o,isInvalid:t,isDisabled:e,isReadOnly:n,...i}=s,c=x.useId(),l=a||`field-${c}`,m=`${l}-label`,d=`${l}-feedback`,p=`${l}-helptext`,[u,h]=x.useState(!1),[y,v]=x.useState(!1),[g,L]=x.useState(!1),K=x.useCallback((f={},b=null)=>({id:p,...f,ref:G(b,T=>{T&&v(!0)})}),[p]),U=x.useCallback((f={},b=null)=>({...f,ref:b,"data-focus":I(g),"data-disabled":I(e),"data-invalid":I(t),"data-readonly":I(n),id:f.id!==void 0?f.id:m,htmlFor:f.htmlFor!==void 0?f.htmlFor:l}),[l,e,g,t,n,m]),Y=x.useCallback((f={},b=null)=>({id:d,...f,ref:G(b,T=>{T&&h(!0)}),"aria-live":"polite"}),[d]),Q=x.useCallback((f={},b=null)=>({...f,...i,ref:b,role:"group","data-focus":I(g),"data-disabled":I(e),"data-invalid":I(t),"data-readonly":I(n)}),[i,e,g,t,n]),X=x.useCallback((f={},b=null)=>({...f,ref:b,role:"presentation","aria-hidden":!0,children:f.children||"*"}),[]);return{isRequired:!!o,isInvalid:!!t,isReadOnly:!!n,isDisabled:!!e,isFocused:!!g,onFocus:()=>L(!0),onBlur:()=>L(!1),hasFeedbackText:u,setHasFeedbackText:h,hasHelpText:y,setHasHelpText:v,id:l,labelId:m,feedbackId:d,helpTextId:p,htmlProps:i,getHelpTextProps:K,getErrorMessageProps:Y,getRootProps:Q,getLabelProps:U,getRequiredIndicatorProps:X}}var $=_(function(a,o){const t=O("Form",a),e=F(a),{getRootProps:n,htmlProps:i,...c}=ue(e),l=j("chakra-form-control",a.className);return r.jsx(ce,{value:c,children:r.jsx(de,{value:t,children:r.jsx(C.div,{...n({},o),className:l,__css:t.container})})})});$.displayName="FormControl";var me=_(function(a,o){const t=P(),e=A(),n=j("chakra-form__helper-text",a.className);return r.jsx(C.div,{...t==null?void 0:t.getHelpTextProps(a,o),__css:e.helperText,className:n})});me.displayName="FormHelperText";var R=_(function(a,o){var t;const e=H("FormLabel",a),n=F(a),{className:i,children:c,requiredIndicator:l=r.jsx(J,{}),optionalIndicator:m=null,...d}=n,p=P(),u=(t=p==null?void 0:p.getLabelProps(d,o))!=null?t:{ref:o,...d};return r.jsxs(C.label,{...u,className:j("chakra-form__label",n.className),__css:{display:"block",textAlign:"start",...e},children:[c,p!=null&&p.isRequired?l:m]})});R.displayName="FormLabel";var J=_(function(a,o){const t=P(),e=A();if(!(t!=null&&t.isRequired))return null;const n=j("chakra-form__required-indicator",a.className);return r.jsx(C.span,{...t==null?void 0:t.getRequiredIndicatorProps(a,o),__css:e.requiredIndicator,className:n})});J.displayName="RequiredIndicator";function V(s){const{isDisabled:a,isInvalid:o,isReadOnly:t,isRequired:e,...n}=pe(s);return{...n,disabled:a,readOnly:t,required:e,"aria-invalid":q(o),"aria-required":q(e),"aria-readonly":q(t)}}function pe(s){var a,o,t;const e=P(),{id:n,disabled:i,readOnly:c,required:l,isRequired:m,isInvalid:d,isReadOnly:p,isDisabled:u,onFocus:h,onBlur:y,...v}=s,g=s["aria-describedby"]?[s["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&g.push(e.feedbackId),e!=null&&e.hasHelpText&&g.push(e.helpTextId),{...v,"aria-describedby":g.join(" ")||void 0,id:n??(e==null?void 0:e.id),isDisabled:(a=i??u)!=null?a:e==null?void 0:e.isDisabled,isReadOnly:(o=c??p)!=null?o:e==null?void 0:e.isReadOnly,isRequired:(t=l??m)!=null?t:e==null?void 0:e.isRequired,isInvalid:d??(e==null?void 0:e.isInvalid),onFocus:z(e==null?void 0:e.onFocus,h),onBlur:z(e==null?void 0:e.onBlur,y)}}var[fe,Ce]=E({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),N=_(function(a,o){const t=O("Input",a),{children:e,className:n,...i}=F(a),c=j("chakra-input__group",n),l={},m=ae(e),d=t.field;m.forEach(u=>{var h,y;t&&(d&&u.type.id==="InputLeftElement"&&(l.paddingStart=(h=d.height)!=null?h:d.h),d&&u.type.id==="InputRightElement"&&(l.paddingEnd=(y=d.height)!=null?y:d.h),u.type.id==="InputRightAddon"&&(l.borderEndRadius=0),u.type.id==="InputLeftAddon"&&(l.borderStartRadius=0))});const p=m.map(u=>{var h,y;const v=ne({size:((h=u.props)==null?void 0:h.size)||a.size,variant:((y=u.props)==null?void 0:y.variant)||a.variant});return u.type.id!=="Input"?x.cloneElement(u,v):x.cloneElement(u,Object.assign(v,l,u.props))});return r.jsx(C.div,{className:c,ref:o,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...t.group},"data-group":!0,...i,children:r.jsx(fe,{value:t,children:p})})});N.displayName="InputGroup";var k=_(function(a,o){const{htmlSize:t,...e}=a,n=O("Input",e),i=F(e),c=V(i),l=j("chakra-input",a.className);return r.jsx(C.input,{size:t,...c,__css:n.field,ref:o,className:l})});k.displayName="Input";k.id="Input";function xe(s,a=[]){const o=Object.assign({},s);for(const t of a)t in o&&delete o[t];return o}var he=["h","minH","height","minHeight"],W=_((s,a)=>{const o=H("Textarea",s),{className:t,rows:e,...n}=F(s),i=V(n),c=e?xe(o,he):o;return r.jsx(C.textarea,{ref:a,rows:e,...i,className:j("chakra-textarea",t),__css:c})});W.displayName="Textarea";const ye=async s=>(s.currentTarget,{status:"error",title:"Oops!",description:"Something went wrong"}),ve=({states:s})=>{const a=re(),[o,t]=x.useState(s.normal);return{emailReqState:o,sendEmail:async n=>{t(s.loading);const{status:i,title:c,description:l}=await ye(n);i==="success"&&t(s.success),i==="error"&&t(s.failed),a({title:c,status:i,description:l,isClosable:!0,duration:3e3})}}};function ge(s){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 128L192 384l-96-96"}}]})(s)}function be(s){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(s)}function Ie(s){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M16 464l480-208L16 48v160l320 48-320 48z"}}]})(s)}function _e({initialFocusRef:s,onClose:a,lan:o}){const{formData:t,emailRequestStates:e}=oe[o],n={normal:{status:"normal",text:e.normal,icon:r.jsx(Ie,{})},success:{status:"success",text:e.success,description:"Your message was sent successfully",icon:r.jsx(ge,{})},failed:{status:"failed",text:e.failed,icon:r.jsx(be,{})},loading:{status:"loading",text:e.loading}},{emailReqState:i,sendEmail:c}=ve({states:n}),l=d=>{d.preventDefault(),c(d)},m={bg:"gray.600",px:4,py:2,required:!0};return r.jsxs($,{as:"form",display:"flex",flexDirection:"column",gap:2,onSubmit:l,children:[r.jsxs(N,{flexDirection:"column",variant:"unstyled",children:[r.jsx(R,{my:1,children:t.name}),r.jsx(k,{type:"text",name:"user_name",id:"user_name",placeholder:t.namePlaceholder,sx:{"&::-webkit-input-placeholder":{color:"gray.400"}},...m,ref:s})]}),r.jsxs(N,{flexDirection:"column",variant:"unstyled",children:[r.jsx(R,{my:1,children:t.email}),r.jsx(k,{type:"email",name:"user_email",id:"user_email",sx:{"&::-webkit-input-placeholder":{color:"gray.400"}},...m,placeholder:t.emailPlaceholder})]}),r.jsxs(N,{flexDirection:"column",variant:"unstyled",children:[r.jsx(R,{my:1,children:t.message}),r.jsx(W,{name:"message",id:"message",placeholder:t.messagePlaceholder,sx:{"&::-webkit-scrollbar-track":{bg:B},"&::-webkit-scrollbar-thumb":{borderColor:B},"&::-webkit-input-placeholder":{color:"gray.400"}},resize:"none",...m})]}),r.jsx(k,{type:"text",name:"from_name",value:"Chemical Group Page",hidden:!0,readOnly:!0}),r.jsxs(M,{justifyContent:"end",size:"sm",mt:1,children:[i===n.failed&&r.jsx(w,{as:"a",variant:"solid",colorScheme:"blackAlpha",me:"auto",href:"mailto:jr.ramirez.varon@gmail.com",children:t.email}),r.jsx(w,{colorScheme:"gray",onClick:a,children:t.cancel}),r.jsx(w,{colorScheme:i.text!==n.failed.text?"green":"red",type:"submit",isLoading:i.text===n.loading.text,loadingText:i.text===n.loading.text&&i.text,isDisabled:i.text===n.success.text||i.text===n.failed.text,rightIcon:i.icon,spinnerPlacement:"end",children:n[i.status].text})]})]})}_e.propTypes={initialFocusRef:S.oneOfType([S.func,S.shape({current:S.instanceOf(Element)})]),onClose:S.func,lan:S.string};export{_e as ContactUsForm};
