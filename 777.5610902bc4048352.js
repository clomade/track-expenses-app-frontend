"use strict";(self.webpackChunktrack_expenses_app_frontend=self.webpackChunktrack_expenses_app_frontend||[]).push([[777],{3777:(H,w,o)=>{o.r(w),o.d(w,{PagesWalletsModule:()=>R});var d=o(6895);class m{constructor(l){this.id=0===l.id?null:l.id,this.createdAt=new Date(l.creationDate),this.name=l.name}toPayload(){return{name:this.name}}static create(l){return new m({id:l.id??0,name:l.name??"",creationDate:l.creationDate??(new Date).toString()})}}var i=o(5412),r=o(4006),e=o(4650),f=o(4859),y=o(9549),v=o(4144);let _=(()=>{class a{constructor(t,n){this.dialogRef=t,this.data=n,this.form=new r.cw({name:new r.NI(this.data?.name??"",{nonNullable:!0})})}save(){this.dialogRef.close(this.form.value)}cancel(){this.dialogRef.close(null)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.so),e.Y36(i.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-wallet-form-modal"]],decls:12,vars:3,consts:[[3,"formGroup"],["mat-dialog-title",""],["appearance","fill"],["matInput","",3,"formControl"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"mat-form-field",2)(4,"mat-label"),e._uU(5,"Wallet Name"),e.qZA(),e._UZ(6,"input",3),e.qZA(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return n.cancel()}),e._uU(9,"Cancel"),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return n.save()}),e._uU(11,"Save"),e.qZA()()()),2&t&&(e.Q6J("formGroup",n.form),e.xp6(2),e.Oqu(n.data?"Update Wallet":"Create Wallet"),e.xp6(4),e.Q6J("formControl",n.form.controls.name))},dependencies:[f.lW,i.uh,i.H8,y.KE,y.hX,v.Nt,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg]}),a})();var p=(()=>{return(a=p||(p={})).Error="error",a.Warning="warning",a.Success="success",p;var a})(),g=o(4004);const u=o(2340).N.apiUrl+"/wallet";var x=o(529);let P=(()=>{class a{constructor(t){this.http=t}getWallets(){return this.http.get(u)}createWallet({name:t}){return this.http.post(u,{name:t})}updateWallet(t,{name:n}){return this.http.put(u,{id:t,name:n})}deleteWallet(t){return this.http.delete(u+`/${t}`)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(x.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),T=(()=>{class a{constructor(t){this.gateway=t}getWallets(){return this.gateway.getWallets().pipe((0,g.U)(t=>t.map(n=>new m(n))))}createWallet(t){return this.gateway.createWallet(t.toPayload()).pipe((0,g.U)(n=>new m(n)))}updateWallet(t){return this.gateway.updateWallet(t.id,t.toPayload()).pipe((0,g.U)(n=>new m(n)))}deleteWallet(t){return this.gateway.deleteWallet(t.id)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(P))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),Z=(()=>{class a{constructor(t){this.data=t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-confirmation-modal"]],decls:9,vars:6,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1),e._uU(3),e.qZA(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6),e.qZA(),e.TgZ(7,"button",3),e._uU(8),e.qZA()()),2&t&&(e.xp6(1),e.Oqu(n.data.headerText),e.xp6(2),e.Oqu(n.data.confirmationText),e.xp6(2),e.Q6J("mat-dialog-close",!1),e.xp6(1),e.Oqu(n.data.denyBtnText||"No"),e.xp6(1),e.Q6J("mat-dialog-close",!0),e.xp6(1),e.Oqu(n.data.confirmBtnText||"Yes"))},dependencies:[f.lW,i.ZT,i.uh,i.xY,i.H8]}),a})(),S=(()=>{class a{constructor(t){this.dialog=t}openConfirmModal(t){return this.dialog.open(Z,{data:t}).afterClosed().pipe((0,g.U)(n=>!!n))}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(i.uw))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var h=o(7009),W=o(1572);let O=(()=>{class a{constructor(t){this.message=t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(h.qD))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-loading-modal"]],decls:4,vars:2,consts:[[1,"snackbar"],[3,"diameter"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"mat-spinner",1),e.TgZ(2,"div"),e._uU(3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("diameter",70),e.xp6(2),e.Oqu(n.message))},dependencies:[W.Ou],styles:[".snackbar[_ngcontent-%COMP%]{display:flex;font-size:32px;align-items:center}.snackbar[_ngcontent-%COMP%] > mat-spinner[_ngcontent-%COMP%]{margin-right:50px}"]}),a})(),D=(()=>{class a{constructor(t){this.snackBar=t}show(t){this.snackBarRef=this.snackBar.openFromComponent(O,{data:t})}hide(){if(void 0===this.snackBarRef)throw new Error("hide() called before showing loading indicator");this.snackBarRef.dismiss()}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(h.ux))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),A=(()=>{class a{constructor(t){this.snackBar=t}showNotification({message:t,dismissBtnText:n="OK"}){this.snackBar.open(t,n,{duration:3e3})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(h.ux))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function N(a,l){if(1&a&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.description)}}let k=(()=>{class a{constructor(){this.type=p.Success}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-system-message"]],inputs:{type:"type",text:"text",description:"description"},decls:4,vars:3,consts:[[3,"ngClass"],[4,"ngIf"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,N,2,1,"p",1),e.qZA()),2&t&&(e.Q6J("ngClass",n.type),e.xp6(2),e.Oqu(n.text),e.xp6(1),e.Q6J("ngIf",n.description))},dependencies:[d.mk,d.O5],styles:["div[_ngcontent-%COMP%]{padding:1.23rem;line-height:1.5;border-radius:.5rem;width:100%}div.error[_ngcontent-%COMP%]{color:#dc2603;background-color:#fee2e2}div.warning[_ngcontent-%COMP%]{color:#ffff65;background-color:#879b55}div.success[_ngcontent-%COMP%]{color:#1d3f25;background-color:#e2fee5}div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.5rem}"]}),a})(),U=(()=>{class a{constructor(){this.walletEdit=new e.vpe,this.walletDelete=new e.vpe}editWallet(){this.walletEdit.emit(this.wallet)}deleteWallet(){this.walletDelete.emit(this.wallet)}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-my-wallet"]],inputs:{wallet:"wallet"},outputs:{walletEdit:"walletEdit",walletDelete:"walletDelete"},decls:10,vars:1,consts:[[1,"my-wallet"],[1,"my-wallet__actions"],["mat-raised-button","","color","primary",3,"click"],["mat-stroked-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4," Some description which is not yet implemented at all "),e.qZA(),e.TgZ(5,"div",1)(6,"button",2),e.NdJ("click",function(){return n.editWallet()}),e._uU(7,"Edit"),e.qZA(),e.TgZ(8,"button",3),e.NdJ("click",function(){return n.deleteWallet()}),e._uU(9,"Delete"),e.qZA()()()),2&t&&(e.xp6(2),e.Oqu(n.wallet.name))},dependencies:[f.lW],styles:[".my-wallet[_ngcontent-%COMP%]{border:1px solid #CAC4D0;border-radius:12px;background:#ffffff;padding:25px}.my-wallet[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:6px}.my-wallet[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a0a0a0}.my-wallet__actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;margin-top:50px}.my-wallet__actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:15px;width:100px}"]}),a})();var E=o(7392);let I=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-new-wallet"]],decls:4,vars:0,consts:[[1,"add-new-wallet"],["fontIcon","add"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"mat-icon",1),e.TgZ(2,"span"),e._uU(3,"Create wallet"),e.qZA()())},dependencies:[E.Hw],styles:[".add-new-wallet[_ngcontent-%COMP%]{height:200px;border:1px solid #CAC4D0;border-radius:12px;padding:25px;color:#cac4d0;background:rgba(229,229,229,.3);display:flex;align-items:center;justify-content:center;flex-direction:column}.add-new-wallet[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:70px;width:70px;height:70px;margin-bottom:10px}.add-new-wallet[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:20px}.add-new-wallet[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),a})();function F(a,l){1&a&&(e.TgZ(0,"div",4),e._UZ(1,"mat-spinner"),e.qZA())}function J(a,l){if(1&a&&(e.TgZ(0,"div",5),e._UZ(1,"app-system-message",6),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("type",t.notificationTypes.Error)}}function Y(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"app-my-wallet",10),e.NdJ("walletEdit",function(s){e.CHM(t);const c=e.oxw(2);return e.KtG(c.handleWalletEdit(s))})("walletDelete",function(s){e.CHM(t);const c=e.oxw(2);return e.KtG(c.handleWalletDelete(s))}),e.qZA()}2&a&&e.Q6J("wallet",l.$implicit)}function L(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div",7),e.YNc(1,Y,1,1,"app-my-wallet",8),e.TgZ(2,"app-add-new-wallet",9),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.handleWalletCreate())}),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.myWalletsData.data)}}let q=(()=>{class a{constructor(t,n,s,c,X){this.myWalletsService=t,this.confirmDialogService=n,this.loadingDialogService=s,this.systemNotificationsService=c,this.dialog=X,this.notificationTypes=p,this.myWalletsData={isLoading:!0,data:null,hasError:!1}}ngOnInit(){this.myWalletsService.getWallets().subscribe({next:t=>{this.myWalletsData={data:t,isLoading:!1,hasError:!1}},error:()=>{this.myWalletsData={data:null,isLoading:!1,hasError:!0}}})}createWallet({name:t}){this.myWalletsService.createWallet(m.create({name:t})).subscribe({next:n=>{this.myWalletsData.data=[n,...this.myWalletsData.data],this.systemNotificationsService.showNotification({message:"Congratulations! Your wallet was created successfully."})},error:()=>{this.systemNotificationsService.showNotification({message:"Sorry. Something went wrong and your wallet was not saved. Contact administrator."})}})}updateWallet({id:t},{name:n}){this.myWalletsService.updateWallet(m.create({id:t,name:n})).subscribe({next:s=>{this.myWalletsData.data=this.myWalletsData.data.map(c=>c.id===t?s:c)},error:()=>{this.systemNotificationsService.showNotification({message:"Some server error during updating"})}})}handleWalletCreate(){this.openWalletModal().subscribe(t=>{t&&this.createWallet(t)})}handleWalletEdit(t){this.openWalletModal(t).subscribe(n=>{void 0!==n&&this.updateWallet(t,n)})}openWalletModal(t){return this.dialog.open(_,{data:t}).afterClosed()}handleWalletDelete(t){this.confirmDialogService.openConfirmModal({headerText:`Deleting ${t.name} wallet`,confirmationText:`Are you sure you want to delete ${t.name} wallet and all related data?`}).subscribe(n=>{!n||this.deleteWallet(t)})}deleteWallet(t){this.loadingDialogService.show("Deleting wallet"),this.myWalletsService.deleteWallet(t).subscribe({next:()=>{this.loadingDialogService.hide(),this.myWalletsData.data=this.myWalletsData.data.filter(n=>n.id!==t.id)},error:()=>{this.loadingDialogService.hide()}})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(T),e.Y36(S),e.Y36(D),e.Y36(A),e.Y36(i.uw))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-wallets-management"]],decls:4,vars:3,consts:[[1,"container"],["class","loading-container",4,"ngIf"],["class","message-container",4,"ngIf"],["class","wallets-management",4,"ngIf"],[1,"loading-container"],[1,"message-container"],["text","Something went wrong. We were not able to get your wallets","description","Please try refreshing your browser",3,"type"],[1,"wallets-management"],[3,"wallet","walletEdit","walletDelete",4,"ngFor","ngForOf"],[3,"click"],[3,"wallet","walletEdit","walletDelete"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,F,2,0,"div",1),e.YNc(2,J,2,1,"div",2),e.YNc(3,L,3,1,"div",3),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.myWalletsData.isLoading),e.xp6(1),e.Q6J("ngIf",n.myWalletsData.hasError),e.xp6(1),e.Q6J("ngIf",n.myWalletsData.data))},dependencies:[d.sg,d.O5,W.Ou,k,U,I],styles:[".wallets-management[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;gap:25px 25px;padding:50px 15px 0}@media only screen and (min-width: 900px){.wallets-management[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 50px)}.message-container[_ngcontent-%COMP%]{margin-top:20px}"]}),a})();var C=o(9030),B=o(9986),G=o(3806),Q=o(8562);const z=[{path:"management",component:q}];let R=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[C.Bz.forChild(z),d.ez,B.k,G.q,r.UX,Q.U,C.Bz]}),a})()}}]);