(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4608"],{"3b25":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const l={key:0,class:"container mt-5"},i={class:"h5"},o=Object(c["createElementVNode"])("span",{class:"mdi mdi-triangle text-primary mr-2"},null,-1),r={class:"row row-cols-2 row-cols-lg-4 row-cols-xl-5 mx-n1"},n=["onClick"],s={class:"card data-card-sm h-100"},d={class:"card-body p-2"},m={class:"data-card-sm-pic"},b=["src","alt"],p={class:"subtitle-1 mt-2"},j={class:"card-footer p-2 subtitle-1"},O={class:"mdi mdi-map-marker text-primary mr-2"},u=Object(c["createStaticVNode"])('<nav aria-label="分頁選單"><ul class="pagination justify-content-center"><li class="page-item mx-3"><a class="page-link btn btn-sm btn-left btn-primary text-white" href="#" aria-label="Previous"><span class="mdi mdi-triangle"></span></a></li><li class="page-item mx-1 active"><a class="page-link" href="#">1</a></li><li class="page-item mx-3"><a class="page-link btn btn-sm btn-right btn-primary text-white" href="#" aria-label="Next"><span class="mdi mdi-triangle"></span></a></li></ul></nav>',1),g={class:"modal fade",id:"detailModal",tabindex:"-1",role:"dialog","aria-labelledby":"詳細內容","aria-hidden":"true"},h={class:"modal-dialog modal-lg",role:"document"},y={key:0,class:"modal-content"},k=Object(c["createElementVNode"])("span",{"aria-hidden":"true",class:"h3 font-weight-bold mb-0"},"×",-1),D=[k],N={class:"modal-body"},E=["src","alt"],V=["src","alt"],w=["src","alt"],C={key:1,class:"d-flex justify-content-end mt-4"},v=Object(c["createElementVNode"])("span",{class:"mdi mdi-triangle"},null,-1),P=[v],f=Object(c["createElementVNode"])("span",{class:"mdi mdi-triangle"},null,-1),B=[f],x={class:"h5 my-3"},M={class:"subtitle-1"},I={class:"container"},S={class:"row row-cols-1 row-cols-lg-2"},T={class:"col"},L={class:"subtitle-1"},U=Object(c["createElementVNode"])("span",{class:"mdi mdi-clock-time-five-outline text-primary pr-2"},null,-1),G={class:"subtitle-1"},$=Object(c["createElementVNode"])("span",{class:"mdi mdi-map-marker text-primary pr-2"},null,-1),A={class:"col"},J=Object(c["createElementVNode"])("span",{class:"mdi mdi-food-fork-drink text-primary pr-2"},null,-1),q=Object(c["createElementVNode"])("span",{class:"mdi mdi-phone text-primary pr-2"},null,-1);function F(e,t,a,k,v,f){const F=Object(c["resolveComponent"])("NoData");return e.cityDatas.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createElementVNode"])("h3",i,[o,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(f.cityChName.CityName),1)]),Object(c["createElementVNode"])("div",r,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.cityDatas,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"col mb-5 px-1",key:e.ID},[Object(c["createElementVNode"])("a",{href:"#",class:"d-block text-black h-100",onClick:Object(c["withModifiers"])(t=>f.toDetail(e),["prevent"])},[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("img",{src:e.Picture.PictureUrl1,class:"card-img-top",alt:e.Picture.PictureDescription1},null,8,b)]),Object(c["createElementVNode"])("h6",p,Object(c["toDisplayString"])(e.Name),1)]),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("span",O,Object(c["toDisplayString"])(e.Address),1)])])],8,n)]))),128))]),u,Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("div",h,[v.detailData?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",y,[Object(c["createElementVNode"])("button",{type:"button",class:"custom-close btn btn-primary","aria-label":"關閉",onClick:t[0]||(t[0]=(...e)=>f.closeModal&&f.closeModal(...e))},D),Object(c["createElementVNode"])("div",N,[v.detailData.Picture.PictureUrl1?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Transition"],{key:0,name:"fade",mode:"out-in"},{default:Object(c["withCtx"])(()=>[0===v.currentImg?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,class:"w-100",src:v.detailData.Picture.PictureUrl1,alt:v.detailData.Picture.PictureDescription1},null,8,E)):2===v.currentImg?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:1,class:"w-100",src:v.detailData.Picture.PictureUrl2,alt:v.detailData.Picture.PictureDescription2},null,8,V)):4===v.currentImg&&v.detailData.Picture.PictureUrl3?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:2,class:"w-100",src:v.detailData.Picture.PictureUrl3,alt:v.detailData.Picture.PictureDescription3},null,8,w)):Object(c["createCommentVNode"])("",!0)]),_:1})):Object(c["createCommentVNode"])("",!0),v.detailData.Picture.PictureUrl2?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,[v.currentImg>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:0,type:"button",class:"btn btn-white btn-sm btn-left mr-3",onClick:t[1]||(t[1]=e=>f.imgControl(-1))},P)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-black btn-sm btn-right",onClick:t[2]||(t[2]=e=>f.imgControl(1))},B)])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("h3",x,Object(c["toDisplayString"])(v.detailData.Name),1),Object(c["createElementVNode"])("p",M,Object(c["toDisplayString"])(v.detailData.Description),1),Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("p",L,[U,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(v.detailData.OpenTime),1)]),Object(c["createElementVNode"])("p",G,[$,v.detailData.Address?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,href:"#",onClick:t[3]||(t[3]=Object(c["withModifiers"])((...e)=>f.toGoogleMap&&f.toGoogleMap(...e),["prevent"]))},Object(c["toDisplayString"])(v.detailData.Address),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:1,href:"#",onClick:t[4]||(t[4]=Object(c["withModifiers"])((...e)=>f.toGoogleMap&&f.toGoogleMap(...e),["prevent"]))},"前往 Google map"))])]),Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("p",null,[J,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(v.detailData.Class?v.detailData.Class:"無分類"),1)]),Object(c["createElementVNode"])("p",null,[q,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(v.detailData.Phone?v.detailData.Phone:"-"),1)])])])])])])):Object(c["createCommentVNode"])("",!0)])])])):(Object(c["openBlock"])(),Object(c["createBlock"])(F,{key:1}))}var _=a("83b6"),z=a("1157"),H=a.n(z),K=a("b166"),Q=a("5502"),R={name:"CateringDetail",computed:{...Object(Q["c"])({cityDatas:"hotel/cityCatering"}),cityChName(){return _.find(e=>e.CityEngName===this.$route.params.city)},activityTime(){var e;return null!==(e=this.detailData)&&void 0!==e&&e.StartTime?`${Object(K["a"])(new Date(this.detailData.StartTime),"yyyy-MM-dd")} ~ ${Object(K["a"])(new Date(this.detailData.EndTime),"yyyy-MM-dd")}`:null}},data(){return{detailData:null,currentImg:0}},methods:{...Object(Q["b"])("hotel",["getCityCatering"]),...Object(Q["b"])(["setIsLoading"]),loadCityScenicSpot(e){this.setIsLoading(!0),this.getCityCatering(e).then(()=>{this.setIsLoading(!1)}).catch(e=>{this.setIsLoading(!1),console.log(e)})},toDetail(e){H()("#detailModal").modal("show"),H()(".modal-backdrop").removeClass("show fade"),this.detailData={...e}},closeModal(){H()("#detailModal").modal("hide"),this.detailData=null,this.currentImg=0},imgControl(e){1===e?(this.currentImg+=2,this.currentImg===Object.keys(this.detailData.Picture).length&&(this.currentImg=0)):-1===e&&this.currentImg>0&&(this.currentImg-=2)},toGoogleMap(){const e=this.detailData.Position.PositionLat,t=this.detailData.Position.PositionLon;window.open(`https://www.google.com/maps/search/?api=1&query=${e},${t}`)}},watch:{"$route.params.city":{immediate:!0,handler(e){e&&this.loadCityScenicSpot(e)}}}},W=a("6b0d"),X=a.n(W);const Y=X()(R,[["render",F]]);t["default"]=Y}}]);
//# sourceMappingURL=chunk-2d0c4608.aefad70b.js.map