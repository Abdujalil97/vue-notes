(function(){"use strict";var e={3267:function(e,t,n){var o=n(9242),l=n(3396),s=n.p+"img/add-note.10842793.svg";const a=(0,l._)("img",{src:s,alt:""},null,-1),i=[a];function r(e,t,n,s,a,r){const d=(0,l.up)("Header"),c=(0,l.up)("Notes"),u=(0,l.up)("Modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d,{onGetSearch:t[0]||(t[0]=e=>a.search=e)}),(0,l.Wm)(c,{notes:r.filterNotes,onDel:r.delNote,onEdit:r.editNote},null,8,["notes","onDel","onEdit"]),(0,l.wy)((0,l.Wm)(u,{title:a.modalTitle,desc:a.modalDesc,id:a.curID,onChangeTitle:t[1]||(t[1]=e=>a.modalTitle=e),onChangeDesc:t[2]||(t[2]=e=>a.modalDesc=e),onAddOrChange:r.addOrChange,onShowOrClose:r.closeModal},null,8,["title","desc","id","onAddOrChange","onShowOrClose"]),[[o.F8,a.showModal]]),(0,l._)("a",{href:"#",class:"openModal",onClick:t[3]||(t[3]=(0,o.iM)((e=>a.showModal=!0),["prevent"]))},i)],64)}n(6699);const d=e=>((0,l.dD)("data-v-157ee6a1"),e=e(),(0,l.Cn)(),e),c={class:"header"},u=d((()=>(0,l._)("h1",{class:"header__title"},"Notes",-1))),h={class:"header__form"};function _(e,t,n,s,a,i){return(0,l.wg)(),(0,l.iD)("header",c,[u,(0,l._)("form",h,[(0,l.wy)((0,l._)("input",{type:"text",class:"header__form-input",placeholder:"Search...","onUpdate:modelValue":t[0]||(t[0]=e=>a.search=e)},null,512),[[o.nr,a.search]])])])}var m={data(){return{search:""}},watch:{search(e){this.$emit("getSearch",e)}}},f=n(89);const p=(0,f.Z)(m,[["render",_],["__scopeId","data-v-157ee6a1"]]);var g=p,v=n(7139),w=n.p+"img/list.4bf38f66.svg",b=n.p+"img/grid.e2c63407.svg";const C={class:"notes"},O={class:"container"},D={class:"notes__content"},y={class:"notes__title"},k=["disabled"],M={src:w,alt:"",class:"notes__cheker-icon"},S={src:b,alt:"",class:"notes__cheker-icon"};function N(e,t,n,s,a,i){const r=(0,l.up)("OneNote");return(0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("div",O,[(0,l._)("div",D,[(0,l._)("h2",y,(0,v.zw)(n.notes.length?"All notes":"No notes"),1),(0,l._)("button",{class:"notes__checker",onClick:t[0]||(t[0]=e=>a.grid=!a.grid),disabled:!n.notes.length},[(0,l.wy)((0,l._)("img",M,null,512),[[o.F8,a.grid]]),(0,l.wy)((0,l._)("img",S,null,512),[[o.F8,!a.grid]]),(0,l._)("b",null,(0,v.zw)(a.grid?"List":"Grid"),1)],8,k)]),(0,l._)("div",{class:(0,v.C_)(["notes__grid",{column:!a.grid}])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.notes,(t=>((0,l.wg)(),(0,l.j4)(r,{key:t.id,note:t,onDel:n=>e.$emit("del",t.id),onEdit:n=>e.$emit("edit",t.id)},null,8,["note","onDel","onEdit"])))),128))],2)])])}var I=n.p+"img/edit.10842793.svg",T=n.p+"img/delete.f2533121.svg";const $=e=>((0,l.dD)("data-v-43d378a2"),e=e(),(0,l.Cn)(),e),j={class:"notes__item"},x={class:"notes__item-title"},z={class:"notes__item-date"},A={class:"notes__item-desc"},E={class:"notes__item-control"},Z=$((()=>(0,l._)("img",{src:I,alt:"",class:"notes__item-icon"},null,-1))),F=(0,l.Uk)(" edit "),H=[Z,F],L=$((()=>(0,l._)("img",{src:T,alt:"",class:"notes__item-icon"},null,-1))),U=(0,l.Uk)(" delete "),W=[L,U];function q(e,t,n,o,s,a){return(0,l.wg)(),(0,l.iD)("div",j,[(0,l._)("h3",x,(0,v.zw)(n.note.title),1),(0,l._)("span",z,(0,v.zw)(n.note.date),1),(0,l._)("p",A,(0,v.zw)(n.note.desc),1),(0,l._)("div",E,[(0,l._)("a",{href:"#!",class:"notes__item-edit",onClick:t[0]||(t[0]=t=>e.$emit("edit",n.note.id))},H),(0,l._)("a",{href:"#!",class:"notes__item-del",onClick:t[1]||(t[1]=t=>e.$emit("del",n.note.id))},W)])])}var G={props:{note:{type:Object,default:{title:"",desc:"",date:"",id:0}}}};const J=(0,f.Z)(G,[["render",q],["__scopeId","data-v-43d378a2"]]);var P=J,Y={components:{OneNote:P},data(){return{grid:!0}},props:{notes:{type:Array,default:[]}}};const K=(0,f.Z)(Y,[["render",N],["__scopeId","data-v-3602c118"]]);var V=K;const B={class:"modal__content-title"},Q=["value"],R=["value"],X={class:"modal__content-btns"},ee={class:"modal__content-add"};function te(e,t,n,s,a,i){return(0,l.wg)(),(0,l.j4)(o.uT,{name:"modal"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:"modal",onClick:t[5]||(t[5]=t=>e.$emit("showOrClose","close"))},[(0,l._)("div",{class:"modal__content",onClick:t[4]||(t[4]=(0,o.iM)((()=>{}),["stop"]))},[(0,l._)("h3",B,(0,v.zw)(n.id?"Edit note":"Add note"),1),(0,l._)("form",{action:"",class:"modal__content-form",onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>i.addOrChange&&i.addOrChange(...e)),["prevent"]))},[(0,l._)("input",{type:"text",class:"modal__content-inp",placeholder:"Title",value:n.title,onInput:t[0]||(t[0]=t=>e.$emit("changeTitle",t.target.value)),required:""},null,40,Q),(0,l._)("textarea",{name:"",id:"",cols:"30",rows:"5",class:"modal__content-area",placeholder:"Content",value:n.desc,onInput:t[1]||(t[1]=t=>e.$emit("changeDesc",t.target.value)),required:""},null,40,R),(0,l._)("div",X,[(0,l._)("a",{href:"#!",class:"modal__content-cancel",onClick:t[2]||(t[2]=t=>e.$emit("showOrClose","close"))},"Cancel"),(0,l._)("button",ee,(0,v.zw)(n.id?"Edit":"Add"),1)])],32)])])])),_:1})}var ne={props:{title:{type:String,default:""},desc:{type:String,default:""},id:{type:String,default:null}},methods:{addOrChange(){this.$emit("showOrClose","open"),this.$emit("addOrChange",this.id)}}};const oe=(0,f.Z)(ne,[["render",te],["__scopeId","data-v-2f3d127d"]]);var le=oe,se=n(536),ae={name:"App",components:{Header:g,Notes:V,Modal:le},data(){return{modalTitle:"",modalDesc:"",label:localStorage.label?JSON.parse(localStorage.label):[],showModal:!1,curID:null,search:""}},computed:{filterNotes(){return this.search?this.label.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.label}},methods:{addOrChange(e){let t={title:this.modalTitle,desc:this.modalDesc,date:new Date(Date.now()).toLocaleDateString(),id:e||(0,se.Z)()};if(e){let n=this.label.findIndex((t=>t.id==e));this.label[n]=t}else this.label.push(t);this.curID=null,this.closeModal("close"),this.save()},closeModal(e){"close"==e&&(this.modalTitle="",this.modalDesc="",this.showModal=!this.showModal,this.curId=null)},save(){localStorage.label=JSON.stringify(this.label)},delNote(e){let t=this.label.findIndex((t=>t.id==e));this.label.splice(t,1),this.save()},editNote(e){const t=this.label.find((t=>t.id==e));this.modalTitle=t.title,this.modalDesc=t.desc,this.curID=t.id,this.showModal=!0}}};const ie=(0,f.Z)(ae,[["render",r]]);var re=ie;(0,o.ri)(re).mount("#app")}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,s){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],s=e[c][2];for(var i=!0,r=0;r<o.length;r++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(i=!1,s<a&&(a=s));if(i){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,l,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vue-notes/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,s,a=o[0],i=o[1],r=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(r)var c=r(n)}for(t&&t(o);d<a.length;d++)s=a[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},o=self["webpackChunknotes"]=self["webpackChunknotes"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3267)}));o=n.O(o)})();
//# sourceMappingURL=app.3a921d3a.js.map