(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{26442:function(e,o,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BooksPage/BooksPage",function(){return a(23619)}])},23619:function(e,o,a){"use strict";a.r(o),a.d(o,{default:function(){return F}});var t=a(85893),s=a(67294),n=a(9473);a(71730);var i=a(18993),l=a(50921),r=a(73935);a(85845);var c=e=>{let{portalId:o,children:a,onClose:n,className:i,title:c="",visible:d=!1,hideTitle:m=!1}=e,_=e=>{"Escape"===e.key&&n()};(0,s.useEffect)(()=>(document.addEventListener("keydown",_,!1),()=>{document.removeEventListener("keydown",_,!1)}),[]);let u=(0,t.jsx)("div",{className:"modal__container ".concat(d?"modal__container--visible":""),onClick:n,children:(0,t.jsxs)("div",{className:"modal__box ".concat(i),onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[!m&&(0,t.jsxs)("div",{className:"modal__title",children:[(0,t.jsx)("div",{children:c}),(0,t.jsx)("div",{className:"modal__close-btn",onClick:n,children:(0,t.jsx)(l.Z,{})})]}),(0,t.jsx)("div",{className:"modal__content",children:a})]})});return o&&document.getElementById(o)?r.createPortal(u,document.getElementById(o)):u};a(55872);var d=e=>{let{className:o,title:a,message:s,onOk:n,onCancel:l}=e;return(0,t.jsx)(c,{className:"prompt-modal ".concat(o),onClose:()=>l(),title:a||"Warning",visible:!0,portalId:"portal-prompt-id",children:(0,t.jsxs)("div",{className:"prompt-modal__box",children:[(0,t.jsx)("div",{className:"prompt-modal__message",children:s}),(0,t.jsxs)("div",{className:"prompt-modal__btns",children:[(0,t.jsx)(i.Z,{"data-testid":"prompt-modal__ok-btn",variant:"contained",className:"prompt-modal__ok-btn",onClick:n,children:"OK"}),l&&(0,t.jsx)(i.Z,{"data-testid":"prompt-modal__cancel-btn",variant:"contained",className:"prompt-modal__cancel-btn",onClick:l,children:"Cancel"})]})]})})},m=a(42142),_=e=>{let{book:o,className:a="",onDelete:n,onSelect:i}=e,[l,r]=(0,s.useState)(!1);return(0,t.jsxs)("div",{"data-testid":"book-item__container",className:"book-item__container ".concat(a),onClick:()=>{i&&i(o.id)},children:[(0,t.jsxs)("div",{className:"book-item__title",children:[(0,t.jsx)("div",{className:"book-item__name",children:o.name}),(0,t.jsx)("div",{className:"book-item__category",children:o.category})]}),(0,t.jsxs)("div",{className:"book-item__price",children:[o.price,"\xa0$"]}),(0,t.jsx)("div",{className:"book-item__desc",children:o.description}),(0,t.jsx)("div",{"data-testid":"book-item__delete",className:"book-item__delete",onClick:e=>{e.preventDefault(),e.stopPropagation(),r(!0)},children:(0,t.jsx)(m.Z,{className:"book-item__delete-icon"})}),l&&(0,t.jsx)(d,{message:"Are you sure?",onCancel:()=>r(!1),onOk:()=>{r(!1),n&&n(o.id)}})]})},u=a(66741),k=a(25309),b=a.n(k),v=a(30381),x=a.n(v);let p=()=>{let e="".concat(x()().unix()).concat(Math.floor(1e6*Math.random()));return e},h=(0,u.oM)({name:"books",initialState:{books:[]},reducers:{addBook:(e,o)=>{let a=b()(e.books),t=p(),s=b()(o.payload),n={...s,id:t};a.push(n),e.books=a},modifyBook:(e,o)=>{let a=b()(o.payload),t=a.id,s=e.books.findIndex(e=>e.id===t);if(s>=0){let o=b()(e.books);o[s]=a,e.books=o}},deleteBook:(e,o)=>{let a=o.payload,t=e.books,s=t.filter(e=>e.id!==a);e.books=s}}}),{addBook:j,modifyBook:N,deleteBook:f}=h.actions;var g=h.reducer,C=a(50361),w=a.n(C),y=a(38358),E=a(94810),B=a(82244);a(56808);var P=e=>{let{className:o,size:a="small",...s}=e;return(0,t.jsx)(E.Z,{injectFirst:!0,children:(0,t.jsx)(B.Z,{className:"textFieldView ".concat(o),size:a,...s})})};a(41750);var D=e=>{let{children:o,className:a,onClick:s,...n}=e;return(0,t.jsx)(i.Z,{onClick:s,className:"button__container ".concat(a),...n,children:o})};a(18526);var S=e=>{let{book:o,onClose:a,onSave:n,onDelete:i}=e,[l,r]=(0,s.useState)(o),[d,m]=(0,s.useState)(!0),_=(e,o)=>{let a=w()(l);a[e]=o,r(a)},u=()=>{if(!l.name)return!1;n(l)};return(0,t.jsx)(c,{visible:!0,onClose:a,title:l.id?"Edit Book Details":"Add Book Details",className:"book-list__editor-modal",portalId:"portal-modal-id",children:(0,t.jsxs)("div",{className:"book-editor__container",children:[(0,t.jsxs)("div",{className:"book-editor__rows",children:[(0,t.jsx)("div",{className:"book-editor__row",children:(0,t.jsx)(P,{autoFocus:!0,error:!d&&""===l.name,helperText:d||l.name?"":"Please enter name.",className:"book-editor__row-name",label:"Name",onBlur:()=>m(!1),onChange:e=>{_("name",e.target.value)},value:l.name})}),(0,t.jsxs)("div",{className:"book-editor__row",children:[(0,t.jsx)(P,{className:"book-editor__row-category",label:"Category",onChange:e=>{_("category",e.target.value)},value:l.category}),(0,t.jsx)(P,{className:"book-editor__row-price",label:"Price",type:"number",onChange:e=>{let o=Number(e.target.value);_("price",o)},value:l.price}),(0,t.jsx)(y.Z,{className:"book-editor__currency-icon"})]}),(0,t.jsx)("div",{className:"book-editor__row",children:(0,t.jsx)(P,{className:"book-editor__row-desc",label:"Description",multiline:!0,minRows:3,maxRows:3,onChange:e=>{_("description",e.target.value)},value:l.description})})]}),(0,t.jsxs)("div",{className:"book-editor__row book-editor__submit-row",children:[o.id&&i&&(0,t.jsx)(D,{className:"book-editor__delete-btn",onClick:()=>i(o.id),variant:"contained",children:"Delete"}),(0,t.jsx)(D,{className:"book-editor__save-btn",onClick:()=>u(),variant:"contained",children:"Save"})]})]})})};a(82124);var Z=()=>{let{books:e}=(0,n.v9)(e=>e.books),o=(0,n.I0)(),[a,i]=(0,s.useState)(null),l=o=>{let a=e.find(e=>e.id===o);a&&i(a)},r=e=>{i(null),o(f(e))};return(0,t.jsxs)("div",{className:"book-list__container",children:[e.length>0?(0,t.jsx)("div",{className:"book-list__items",children:e.map(e=>(0,t.jsx)(_,{book:e,onSelect:l,onDelete:r},e.id))}):(0,t.jsx)("div",{"data-testid":"book-list__empty",className:"book-list__empty",children:"No books added yet."}),a&&(0,t.jsx)(S,{book:a,onClose:()=>i(null),onSave:e=>{i(null),o(e.id?N(e):j(e))},onDelete:r})]})};let I=(0,u.xC)({reducer:{books:g}});var O=e=>{let{children:o}=e;return(0,t.jsx)(n.zt,{store:I,children:o})};a(22176);var F=()=>(0,t.jsx)("div",{className:"books-page__container",children:(0,t.jsx)(O,{children:(0,t.jsx)(Z,{})})})},18526:function(){},71730:function(){},82124:function(){},41750:function(){},85845:function(){},55872:function(){},56808:function(){},22176:function(){}},function(e){e.O(0,[774,885,656,888,179],function(){return e(e.s=26442)}),_N_E=e.O()}]);