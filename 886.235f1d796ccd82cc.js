"use strict";(self.webpackChunkAngularERP=self.webpackChunkAngularERP||[]).push([[886],{9886:($,g,c)=>{c.r(g),c.d(g,{ShopModule:()=>z,createTranslateLoader:()=>v});var h=c(6895),p=c(3060),f=c(6880),y=c(5861),t=c(4650),Z=c(7009),_=c(4921),u=c(9066),d=c(4006),m=c(4021);function T(o,i){if(1&o&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij("",e.name," ")}}function b(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31),t._UZ(2,"img",32),t.TgZ(3,"div",33)(4,"span",34),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"span",34),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"div",35)(11,"button",36),t.NdJ("click",function(){const r=t.CHM(e).index,s=t.oxw();return t.KtG(s.eventUP(r))}),t._uU(12," + "),t.qZA(),t.TgZ(13,"button",37),t.NdJ("click",function(){const r=t.CHM(e).index,s=t.oxw();return t.KtG(s.eventDown(r))}),t._uU(14," - "),t.qZA(),t.TgZ(15,"input",38),t.NdJ("change",function(a){const s=t.CHM(e).index,G=t.oxw();return t.KtG(G.val(a,s))})("ngModelChange",function(a){const s=t.CHM(e).$implicit;return t.KtG(s.quantity=a)}),t.qZA()(),t.TgZ(16,"div",39)(17,"input",40),t.NdJ("ngModelChange",function(a){const s=t.CHM(e).$implicit;return t.KtG(s.quantity*(s.price=a))}),t.qZA()()()()}if(2&o){const e=i.$implicit;t.xp6(2),t.Q6J("defaultImage",e.img)("lazyLoad",e.img),t.xp6(3),t.AsE("",t.lcZ(6,9,"Name")," : ",e.name,""),t.xp6(3),t.AsE("",t.lcZ(9,11,"Price")," : ",e.price,""),t.xp6(5),t.Q6J("disabled",e.quantity<=0),t.xp6(2),t.Q6J("ngModel",e.quantity),t.xp6(2),t.Q6J("ngModel",e.quantity*e.price)}}function A(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"img",41),t.qZA()()),2&o){const e=i.index,n=t.oxw();t.xp6(2),t.Oqu(n.PurchasesItem[e].name),t.xp6(2),t.Oqu(n.PurchasesItem[e].quantity),t.xp6(2),t.Oqu(n.PurchasesItem[e].quantity*n.PurchasesItem[e].price),t.xp6(2),t.Oqu(n.PurchasesItem[e].price),t.xp6(2),t.Q6J("src",n.PurchasesItem[e].img,t.LSH)}}let S=(()=>{class o{constructor(e,n,a,r){this._MatSnackBar=e,this._LanguageService=n,this.translate=a,this._Router=r,this.lang="",this.isSend=!1,this.productSelect=[],this.productList=[],this.device=[{id:0,name:"All"},{id:1,name:"Mobile"},{id:2,name:"TV"},{id:3,name:"TAPLET"}],this.dataPage={totalSale:0,allItems:[]},this.PurchasesItem=[],this.productList=[{id:100,name:"IPhone 12",price:4250,quantity:0,device:1,img:"https://picsum.photos/200/300"},{id:104,name:"OPPO F9",price:6300,quantity:0,device:1,img:"https://picsum.photos/200/300"},{id:100,name:"Sumsung a52",price:6730,quantity:0,device:1,img:"https://picsum.photos/200/300"},{id:99,name:"Huawei Nova 9",price:9800,quantity:0,device:1,img:"https://picsum.photos/200/300"},{id:110,name:"TV TOSHIBA",price:7690,quantity:0,device:2,img:"https://picsum.photos/200/300"},{id:111,name:"TV TORNADO",price:6540,quantity:0,device:2,img:"https://picsum.photos/200/300"},{id:112,name:"TV SHARP",price:3450,quantity:0,device:2,img:"https://picsum.photos/200/300"},{id:98,name:"TV Sumsung",price:8750,quantity:0,device:2,img:"https://picsum.photos/200/300"},{id:114,name:"TAP LENOVO",price:3200,quantity:0,device:3,img:"https://picsum.photos/200/300"},{id:115,name:"TAP Huawei",price:4300,quantity:0,device:3,img:"https://picsum.photos/200/300"},{id:116,name:"TAP Samsung",price:4320,quantity:0,device:3,img:"https://picsum.photos/200/300"},{id:116,name:"TAP Apple",price:7e3,quantity:0,device:3,img:"https://picsum.photos/200/300"}],this.productSelect=this.productList}ngOnInit(){this._LanguageService.change.subscribe(e=>{"en"==e?(this.translate.use("en"),this.lang="en"):"ar"==e&&(this.translate.use("ar"),this.lang="ar")})}openSnackBar(e,n){this._MatSnackBar.open(e,n,{duration:1500})}filterProduct(e){this.productSelect=0==e.target.value?this.productList:this.productList.filter(n=>n.device==e.target.value)}trackHero(e,n){return n?n.id:void 0}eventUP(e){let n=this.productSelect[e].quantity++;if(0>n||isNaN(n)||n<-1)return(this.lang="en")?this.openSnackBar("There Error Amount",""):this.openSnackBar("\u062e\u0637\u0627 \u0628\u0627\u0644\u0643\u0645\u064a\u0629",""),this.productSelect[e].quantity=0}eventDown(e){let n=--this.productSelect[e].quantity;if(0>n||isNaN(n)||n<=-1)return(this.lang="en")?this.openSnackBar("There Error Amount",""):this.openSnackBar("\u062e\u0637\u0627 \u0628\u0627\u0644\u0643\u0645\u064a\u0629",""),this.productSelect[e].quantity=0}totalInvoice(){return this.productList.reduce((e,n)=>0|e+this.getItemTotal(n),0)}getItemTotal(e){return e.quantity&&e.price?e.price*e.quantity:0}val(e,n){console.log(e.target.value),(e.target.value<0||isNaN(e.target.value)||""==e.target.value)&&(this.openSnackBar("en"==this.lang?"There Error Amount":"\u062e\u0637\u0627 \u0628\u0627\u0644\u0643\u0645\u064a\u0629",""),e.target.value=0,this.productSelect[n].quantity=0)}Submit(){var e=this;return(0,y.Z)(function*(){if(0==e.productList.filter(n=>0!=n.quantity).length)return"en"==e.lang?void e.openSnackBar(" There is an error",""):void e.openSnackBar(" \u0647\u0646\u0627\u0643 \u062e\u0637\u0627 \u0628\u0627\u0644\u0639\u0645\u0644\u064a\u0629","");e.dataPage.allItems=e.productList.filter(n=>0!=n.quantity),e.PurchasesItem=e.dataPage.allItems,e.dataPage.totalSale=e.totalInvoice(),yield setTimeout(()=>{window.print()},50)})()}additems(){this._Router.navigate(["shop/additems"])}ngOnDestroy(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.ux),t.Y36(_.T),t.Y36(u.sK),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-buy"]],decls:60,vars:37,consts:[[1,"direction"],["id","whenPrint",1,"direction","pt-5"],[1,"d-flex","flex-wrap","align-items-center","pt-lg-4","px-lg-3","direction"],[1,"col-10","col-md-4","col-lg-3","p-2","mx-auto"],[1,"AddItems","col-12",3,"click"],[1,"form-select","text-center","fs-5","w-100",3,"change"],["value","","disabled","","selected","",1,"text-center"],["class","text-center",3,"value",4,"ngFor","ngForOf"],["type","number","disabled","","name","total","id","",1,"form-control","fs-5","text-center","text-dark",3,"value"],[1,"btn-buy","fs-5","d-block","w-100",3,"click"],[1,"d-flex","flex-wrap","justify-content-center","mt-2","px-lg-3","mt-md-4"],["class","col-10 col-sm-6 col-md-4 col-lg-3 p-2 ",4,"ngFor","ngForOf","ngForTrackBy"],["id","SectionInvoice",1,"invoice","px-2"],["id","Invoice",1,"table-responsive","py-2","px-3"],["Invoice",""],[1,"d-flex","align-items-center","justify-content-around","my-4","px-1"],[1,"col-4","text-center"],[1,"fs-2","fw-bolder"],[1,"logoInvoice","col-4","p-0","text-center"],["src","assets/photo/logo.webp","alt","logo","srcset","",1,"col-5"],[1,"table"],[1,"col-2"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","align-items-center"],[1,"mt-4","px-3","d-flex","pb-3","pt-4","col-6","totlinvo","info"],[1,"fs-3"],[1,"fs-3","mx-3"],[1,"col-6","text-center"],["src","assets/photo/signature.png","alt","","srcset","",1,"col-5"],[1,"text-center",3,"value"],[1,"col-10","col-sm-6","col-md-4","col-lg-3","p-2"],[1,"DivBorder"],["height","200","width","200","alt","",1,"col-12","p-0","mx-auto",3,"defaultImage","lazyLoad"],[1,"d-flex","justify-content-around","py-3","px-2"],[1,"text-center"],[1,"d-flex","mb-4","px-2","justify-content-between"],["value","0",1,"btn-Up","col-2","mx-1",3,"click"],["value","0",1,"btn-Down","col-2","mx-1",3,"disabled","click"],["type","number","name","quantity","id","quantity",1,"form-control","text-center","fs-6","w-50",3,"ngModel","change","ngModelChange"],[1,"col-12","px-2","pb-3"],["type","number","name","","disabled","","id","",1,"form-control","fs-6","text-center",3,"ngModel","ngModelChange"],["width","250","height","250","alt","",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return n.additems()}),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",3)(8,"select",5),t.NdJ("change",function(r){return n.filterProduct(r)}),t.TgZ(9,"option",6),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.YNc(12,T,2,2,"option",7),t.qZA()(),t.TgZ(13,"div",3),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"div",3)(16,"button",9),t.NdJ("click",function(){return n.Submit()}),t._uU(17),t.ALo(18,"translate"),t.qZA()()(),t.TgZ(19,"div",10),t.YNc(20,b,18,13,"div",11),t.qZA()(),t.TgZ(21,"section",12)(22,"div",13,14)(24,"div",15)(25,"div",16)(26,"h1",17),t._uU(27),t.ALo(28,"translate"),t.qZA()(),t.TgZ(29,"div",18),t._UZ(30,"img",19),t.qZA()(),t.TgZ(31,"table",20)(32,"thead")(33,"tr")(34,"th",21),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"th",21),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.TgZ(40,"th",21),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"th",21),t._uU(44),t.ALo(45,"translate"),t.qZA(),t.TgZ(46,"th",21),t._uU(47),t.ALo(48,"translate"),t.qZA()()(),t.TgZ(49,"tbody"),t.YNc(50,A,11,5,"tr",22),t.qZA()(),t.TgZ(51,"div",23)(52,"div",24)(53,"p",25),t._uU(54),t.ALo(55,"translate"),t.qZA(),t.TgZ(56,"p",26),t._uU(57),t.qZA()(),t.TgZ(58,"div",27),t._UZ(59,"img",28),t.qZA()()()()()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,17,"AddItemsShop")),t.xp6(5),t.Oqu(t.lcZ(11,19,"ChooseDevice")),t.xp6(2),t.Q6J("ngForOf",n.device),t.xp6(2),t.Q6J("value",n.totalInvoice()),t.xp6(3),t.hij(" ",t.lcZ(18,21,"Buy")," "),t.xp6(3),t.Q6J("ngForOf",n.productSelect)("ngForTrackBy",n.trackHero),t.xp6(7),t.Oqu(t.lcZ(28,23,"PurchasesInvoice")),t.xp6(8),t.Oqu(t.lcZ(36,25,"Name")),t.xp6(3),t.Oqu(t.lcZ(39,27,"Amount")),t.xp6(3),t.Oqu(t.lcZ(42,29,"Price")),t.xp6(3),t.Oqu(t.lcZ(45,31,"Total")),t.xp6(3),t.Oqu(t.lcZ(48,33,"Photo")),t.xp6(3),t.Q6J("ngForOf",n.PurchasesItem)("ngForTrackBy",n.trackHero),t.xp6(4),t.hij(" ",t.lcZ(55,35,"TotalInvoice")," : "),t.xp6(3),t.hij(" ",n.dataPage.totalSale," "))},dependencies:[h.sg,d.YN,d.Kr,d.Fj,d.wV,d.JJ,d.On,m.z1,u.X$],styles:["main[_ngcontent-%COMP%]{background:#FAFAD2!important;padding-bottom:5rem}.btn-Down[_ngcontent-%COMP%], .btn-Up[_ngcontent-%COMP%]{border-radius:5px;font-size:1.6rem;color:#fff}.btn-Up[_ngcontent-%COMP%]{background-color:#5f9ea0}.btn-Down[_ngcontent-%COMP%]{background-color:#6495ed}.btn-Down[_ngcontent-%COMP%]:disabled{background-color:#a9a9a9}.btn-buy[_ngcontent-%COMP%]{background-color:#5f9ea0;padding:5px 10px!important;font-weight:400;line-height:1.5;color:#fff;border-radius:5px}.DivBorder[_ngcontent-%COMP%]{border:2px solid #4682B4;border-radius:9px;overflow:hidden}.AddItems[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:400;line-height:1.5;border-radius:.25rem;padding:.6rem;background:-webkit-linear-gradient(-45deg,#183850 0,#183850 25%,#192C46 50%,#22254C 75%,#22254C 100%)}table[_ngcontent-%COMP%]{background:-webkit-linear-gradient(-45deg,#183850 0,#183850 25%,#192C46 50%,#22254C 75%,#22254C 100%)!important;color:#fff!important}table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5rem;height:5rem}@media (max-width:450px){table[_ngcontent-%COMP%]{background:transparent!important}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:none!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap;flex-direction:column-reverse;margin-top:15px!important;padding:7px 0;background:-webkit-linear-gradient(-45deg,#183850 0,#183850 25%,#192C46 50%,#22254C 75%,#22254C 100%)!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block!important;width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-radius:10px!important}}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff;padding:.75rem;font-size:1.4rem!important}.table-hover[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover > *[_ngcontent-%COMP%]{background-color:#224b66;color:#fff}table[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:0!important}.logoInvoice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.info[_ngcontent-%COMP%]{background:#eee;border-bottom:1px solid #ddd;font-weight:700}#Invoice[_ngcontent-%COMP%]{background-image:ur}.totlinvo[_ngcontent-%COMP%]{border:1px solid #ddd;border-left:none;border-right:none}"]}),o})();var O=c(9123),P=c(5412),q=c(4859),l=c(671);const M=["paginator"],I=["TableOneSort"];function k(o,i){1&o&&(t.TgZ(0,"th",19),t._uU(1," # "),t.qZA())}function w(o,i){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function D(o,i){1&o&&(t.TgZ(0,"th",19),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"Item")))}function U(o,i){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function B(o,i){1&o&&(t.TgZ(0,"th",19),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Price")," "))}function N(o,i){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.salary," ")}}function L(o,i){1&o&&(t.TgZ(0,"th",21),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Options")," "))}function J(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",22)(1,"div",23)(2,"a",24),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.openDialog("Update",r))}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"a",25),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.openDialog("Delete",r))}),t._uU(6),t.ALo(7,"translate"),t.qZA()()()}2&o&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"Edit")),t.xp6(3),t.Oqu(t.lcZ(7,4,"Delete")))}function R(o,i){1&o&&t._UZ(0,"tr",26)}function F(o,i){1&o&&t._UZ(0,"tr",27)}const C=[{id:1,name:"Ahmed Adel",salary:5e3}],Y=[{path:"",redirectTo:"shop",pathMatch:"full"},{path:"shop",title:"Shop",component:S,canActivate:[f.l]},{path:"additems",title:"Add Items",component:(()=>{class o{constructor(e,n,a,r){this._Router=e,this.translate=n,this.dialog=a,this._LanguageService=r,this.SqlID=1,this.displayedColumns=["id","name","salary","action"],this.dataDelete=[],this.dataSource=C,this.lang=""}openDialog(e,n){n.movement=e,this.dialog.open(O.y,{width:"85%",data:n}).afterClosed().subscribe(r=>{"Add"==r.event?this.addRowData(r.data):"Update"==r.event?this.updateRowData(r.data):"Delete"==r.event&&this.DeleteRowData(r.data)})}addRowData(e){let n=++this.SqlID;this.dataSource.push({id:n,name:e.name,salary:e.salary}),this.dataSource.sort(function(a,r){return a.id-r.id}),localStorage.setItem("dataSource",JSON.stringify(this.dataSource)),this.tableOneSort?.renderRows()}updateRowData(e){this.dataSource=this.dataSource.filter((n,a)=>(n.id==e.id&&(n.name=e.name,n.salary=e.salary),!0)),this.dataSource.sort(function(n,a){return n.id-a.id})}DeleteRowData(e){this.dataSource=this.dataSource.filter(n=>n.id!=e.id),this.dataSource.sort(function(n,a){return n.id-a.id}),localStorage.setItem("dataSource",JSON.stringify(this.dataSource))}ShowAllInvoice(){this._Router.navigate(["order/product"])}ngOnDestroy(){}ngOnInit(){this._LanguageService.change.subscribe(n=>{"en"==n?(this.translate.use("en"),this.lang="en"):"ar"==n&&(this.translate.use("ar"),this.lang="ar")});let e=localStorage.getItem("dataSource");null!=e||null!=e?(this.dataSource=JSON.parse(e),this.dataSource.sort(function(n,a){return n.id-a.id}),this.SqlID=this.dataSource[this.dataSource.length-1].id):(this.dataSource=C,this.SqlID=1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.F0),t.Y36(u.sK),t.Y36(P.uw),t.Y36(_.T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-itemsshop"]],viewQuery:function(e,n){if(1&e&&(t.Gf(M,5),t.Gf(I,7)),2&e){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first),t.iGM(a=t.CRH())&&(n.tableOneSort=a.first)}},decls:24,vars:6,consts:[[1,"pt-3"],[1,"px-2"],[1,"text-center"],[1,"fs-1","my-3","text-center"],["mat-button","","mat-flat-button","","color","",1,"AddEmployee","fs-5","px-3",3,"click"],[1,"table-responsive"],["mat-table","",1,"my-table","text-white","mat-elevation-z8","table","table-dark","table-hover","table-striped",3,"dataSource"],["TableOneSort",""],["matColumnDef","id"],["mat-header-cell","","class","col-3",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","class"," col-3",4,"matHeaderCellDef"],["matColumnDef","salary"],["matColumnDef","action"],["mat-header-cell","","class","py-3 col-4",4,"matHeaderCellDef"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"col-3"],["mat-cell",""],["mat-header-cell","",1,"py-3","col-4"],["mat-cell","",1,"action-link"],[1,"d-flex","justify-content-around","my-3"],[1,"btn","btn-info","text-white","fs-5","col-6","col-md-4",3,"click"],[1,"btn","btn-danger","text-white","fs-5","col-6","col-md-4",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return n.openDialog("Add",{})}),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",5)(8,"table",6,7),t.ynx(10,8),t.YNc(11,k,2,0,"th",9),t.YNc(12,w,2,1,"td",10),t.BQk(),t.ynx(13,11),t.YNc(14,D,3,3,"th",12),t.YNc(15,U,2,1,"td",10),t.BQk(),t.ynx(16,13),t.YNc(17,B,3,3,"th",12),t.YNc(18,N,2,1,"td",10),t.BQk(),t.ynx(19,14),t.YNc(20,L,3,3,"th",15),t.YNc(21,J,8,6,"td",16),t.BQk(),t.YNc(22,R,1,0,"tr",17),t.YNc(23,F,1,0,"tr",18),t.qZA()()()()()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,4,"AddProduct")),t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(14),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[q.lW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,u.X$],styles:[".AddInvoice[_ngcontent-%COMP%], .AddEmployee[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:400;line-height:1.5;border-radius:.25rem;padding:.6rem;background:-webkit-linear-gradient(-45deg,#183850 0,#183850 25%,#192C46 50%,#22254C 75%,#22254C 100%)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center!important;padding:1rem!important;color:#fff!important;font-size:1.8rem!important}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center!important;font-size:1.3rem!important;color:#fff!important}"]}),o})(),canActivate:[f.l]}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(Y),p.Bz]}),o})();var E=c(9832),x=c(529),j=c(1745);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[{provide:m.sN,useClass:m.TD}],imports:[h.ez,Q,d.u5,j.q,x.JF,d.UX,m.mZ,u.aw.forRoot({defaultLanguage:"en",loader:{provide:u.Zw,useFactory:v,deps:[x.eN]}})]}),o})();function v(o){return new E.w(o,"./assets/i18n/",".json")}}}]);