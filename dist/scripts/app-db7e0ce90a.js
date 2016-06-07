!function(){"use strict";function e(){function e(e){var t=this;t.techs=[{title:"MongoDB",desc:"Banco de dados orientado a documentos - NoSQL",logo:"mongodb.png"},{title:"Express",desc:"Framework para Node.js. Flexível e robusto para desenvolver aplicações web.",logo:"express.png"},{title:"AngularJS",desc:"Framework Javascript para criação de aplicações single-page",logo:"angular.png"},{title:"Node.js",desc:"Plataforma baseada em Javascript para construir aplicações de rede rápidas e escaláveis",logo:"node.png"}]}var t={restrict:"A",templateUrl:"app/utils/directives/techs/techs.tpl.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],t}angular.module("core.utils").directive("techs",e)}(),function(){"use strict";angular.module("core.utils").service("Busy",["$page",function(e){function t(e){this._status={},e=e?e:{},angular.extend(this,e)}function a(e,t){return t||t===!1?this._status[e]=t:this._status[e]}function o(t,a){return this.status(t)?!0:(this.status(t,!0),a||e.load.init(),!1)}function i(t,a){this.status(t,!1),a||e.load.done()}this.service=t,this.service.prototype.status=a,this.service.prototype.start=o,this.service.prototype.end=i}])}(),function(){"use strict";angular.module("core.utils").filter("dotToDash",function(){return function(e){return e?e.replace(/\./g,"-"):""}})}(),function(){"use strict";function e(){function e(e,t){function a(){var e=i.scrollTop();"add"!==n&&e>220?(n="add",s.hide().slideDown("slow").addClass("fixed")):"remove"!==n&&220>e&&(n="remove",s.hide().show().removeClass("fixed"))}var o=this;o.sidenav=t,o.relativeDate=moment(o.creationDate).fromNow();var i=$(window),s=$(e[0]),n=!1;i.bind("scroll",a)}var t={restrict:"E",templateUrl:"app/layout/navbar/navbar.tpl.html",scope:{},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["$element","$mdSidenav"],t}angular.module("core.app").directive("acmeNavbar",e)}(),function(){"use strict";angular.module("core.app").controller("BodyCtrl",["$rootScope","$scope","$timeout","$page","$http","$state","$app","$user","$location","$menu","lodash","api","setting",function(e,t,a,o,i,s,n,r,l,c,d,m,p){function u(){v.toolbarMenu=o.config.toolbarMenu}function g(e){s.go(e,s.params)}var v=this,h=r.instance();h&&!h.id&&(window.localStorage.removeItem(p.slug+".user"),window.localStorage.removeItem(p.slug+".session_token"),l.path(l.url())),e.$on("$UserLeft",function(){!e.$Unauthorized||e.$Unauthorized===!1,v.companyid=!1}),e.$on("$stateChangeStart",function(e){u()}),e.$on("$stateChangeSuccess",function(){a(function(){},1e3)}),v.backFunc=g}])}(),angular.module("app.setting",[]).constant("setting",{name:"mtda.de",slug:"mtdaDe",version:"0.0.2",title:"mtda.de",baseUrl:"https://www.mtda.de",titleSeparator:" — ",description:"sites, e-commerce e aplicações web",copyright:"mtda.de (beta)",google:{clientId:"130659612163-85bs2fcla6caehkbrh0pf0aj8kfbuitb.apps.googleusercontent.com",language:"pt-BR"},facebook:{scope:"email",appId:"351845598327281",appSecret:"7ccae2d2dfd18d1b763aa6b6d14cea5b",language:"pt-BR"},https:["mtda.de"],redirWww:!0,ogLocale:"pt_BR",ogSiteName:"mtda.de",ogTitle:"mtda.de",ogDescription:"sites, e-commerce e aplicações web",ogUrl:"https://www.mtda.de",ogImage:"https://s3-sa-east-1.amazonaws.com/mtda/logo.png",ogSection:"sites",ogTag:"sites, e-commerce, web design, desenvolvimento web, aplicação web"}),function(){"use strict";angular.module("mtdaDe",["app.kit","core.contact","core.gmap","vcRecaptcha"])}(),function(){"use strict";function e(e,t,a,o,i,s){i.state("app.perfil",{toolbar:"white",url:"/perfil/",views:{content:{templateUrl:"app/layout/not-ready.tpl.html"}},resolve:{}}).state("app.services",{toolbar:"white",url:"/servicos/",views:{content:{templateUrl:"app/layout/not-ready.tpl.html"}},resolve:{}}).state("app.cases",{toolbar:"white",url:"/cases/",views:{content:{templateUrl:"app/layout/not-ready.tpl.html"}},resolve:{}}).state("app.blog",{toolbar:"white",url:"/blog/",views:{content:{templateUrl:"app/layout/not-ready.tpl.html"}},resolve:{}}),e.theme("default").primaryPalette("light-green",{"hue-1":"600"}).accentPalette("brown",{}),o.set({name:"Home",type:"link",iconMi:"home",url:"/",state:"app.home"}),o.set({name:"Perfil",type:"link",iconMi:"account_box",url:"/perfil/",state:"app.perfil"}),o.set({name:"Serviços",type:"link",iconMi:"view_carousel",url:"/servicos/",state:"app.services"}),o.set({name:"Cases",type:"link",iconMi:"web",url:"/cases/",state:"app.cases"}),o.set({name:"Contato",type:"link",iconMi:"mail",url:"/contato/",state:"app.contact"}),a.layoutUrl("app/layout/layout.tpl.html"),a.sidenavUrl("app/layout/sidenav.tpl.html"),t.debugEnabled(!0),s.allowHtml=!0,s.timeOut=3e3,s.positionClass="toast-top-right",s.preventDuplicates=!0,s.progressBar=!0}angular.module("mtdaDe").config(e),e.$inject=["$mdThemingProvider","$logProvider","$appProvider","$menuProvider","$stateProvider","toastrConfig"]}(),function(){"use strict";angular.module("core.home",["ui.router","angularMoment","ngLodash"])}(),function(){"use strict";angular.module("core.home").controller("HomeCtrl",["$scope","$page","setting",function(e,t,a){t.title(a.name+a.titleSeparator+"sites, e-commerce e aplicações web"),t.description("sites, e-commerce e aplicações web")}])}(),function(){"use strict";angular.module("core.home").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,a){e.state("app.home",{toolbar:"white",url:"/",views:{content:{templateUrl:"app/home/home.tpl.html",controller:"HomeCtrl as vm"}},resolve:{}}),a.html5Mode(!0)}])}(),function(){"use strict";angular.module("core.gmap",[])}(),function(){"use strict";function e(e,t){function a(t,a,i){e.load().then(function(){o(a)})}function o(e){var t=new google.maps.Geocoder,a=new google.maps.InfoWindow;t.geocode({placeId:"ChIJb_gY6CU-uAARWmX1ZTyMAHg"},function(t,o){if(o===google.maps.GeocoderStatus.OK)if(t[0]){var i=new google.maps.Map(e[0],{center:t[0].geometry.location,zoom:17}),s=new google.maps.Marker({map:i,position:t[0].geometry.location});a.setContent(t[0].formatted_address),a.open(i,s)}else window.alert("No results found");else window.alert("Geocoder failed due to: "+o)})}var i={restrict:"A",link:a};return i}angular.module("core.gmap").directive("gmap",e),e.$inject=["gmapInit","$timeout"]}(),function(){"use strict";function e(e,a){function o(){var e="https://maps.googleapis.com/maps/api/js?key="+t+"&libraries=places&signed_in=true&callback=",o=a.defer(),s="undefined"==typeof google||!google;return s?i(o,e):o.resolve(),o.promise}function i(t,a){e.googleMapsInitialized=t.resolve,s(a,"googleMapsInitialized")}function s(e,t){var a=document.createElement("script");a.async=!0,a.defer=!0,a.src=e+t,document.body.appendChild(a)}return{load:o}}angular.module("core.gmap").factory("gmapInit",e);var t="AIzaSyCINENGCI6kIl-pRV-vzNl3uSMBimMd1sk";e.$inject=["$window","$q"]}(),function(){"use strict";angular.module("core.contact",["ui.router"])}(),function(){"use strict";angular.module("core.contact").service("Contact",["$http","$page","$state","$q","api","Busy",function(e,t,a,o,i,s){function n(e){this.busy=new s.service,e=e?e:{},angular.extend(this,e)}function r(){if(this.busy.start("create"))return this.negativePromise();var a=this.captcha,o=m(this);return e.post(p,{model:o,captcha:a}).success(function(e){return t.toast("Contato enviado com sucesso, responderemos em breve!"),this.busy.end("create"),e}.bind(this)).error(function(e){return t.toast(e&&e.error?e.error:"não foi possível enviar a mensagem, tente novamente!"),this.busy.end("create"),e}.bind(this))}function l(e,t){return!1}function c(){return[{value:"Contato",name:"Contato"},{value:"Proposta",name:"Proposta"},{value:"Sugestão",name:"Sugestão"},{value:"Outros",name:"Outros"}]}function d(){var e=o.defer();return e.reject(!1),e.promise}function m(e){if(!e)return e;var t=$.extend({},e);t.busy=void 0,t.captcha=void 0;var a=$.extend({},t);return a}var p=i.url+"/api/contacts/";this.service=n,this.service.prototype.create=r,this.service.prototype.formStatus=l,this.service.prototype.subjects=c,this.service.prototype.negativePromise=d}])}(),function(){"use strict";angular.module("core.contact").controller("ContactCtrl",["$scope","$page","$http","setting","gmapInit","vcRecaptchaService","Contact",function(e,t,a,o,i,s,n){function r(e){console.info("Captcha available",e),m.contact.captcha=e}function l(e){console.info("Created widget ID: %s",e),m.widgetId=e}function c(){console.info("Captcha expired. Resetting captcha object"),m.contact.captcha=null}function d(){function e(e){}function t(e){s.reload(m.widgetId),console.log("response",e),console.log("falhou")}m.contact.create().then(e,t)}var m=this;t.title(o.name+o.titleSeparator+"Contato"),t.description("Entre em contato com Matheus Davidson para desenvolvimento de sites, e-commerce e aplicações web"),m.contact=new n.service,m.subjects=m.contact.subjects(),m.rcKey="6LfR1g0TAAAAAFrMY2FgxFPIL-no4I05oumJQKvu",m.widgetId=null,m.contact.captcha=null,m.setCaptcha=r,m.setWidgetId=l,m.cbExpiration=c,m.submit=d}])}(),function(){"use strict";angular.module("core.contact").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,a){e.state("app.contact",{toolbar:"white",url:"/contato/",views:{content:{templateUrl:"app/contact/contact.tpl.html",controller:"ContactCtrl as vm"}},resolve:{}})}])}(),angular.module("mtdaDe").run(["$templateCache",function(e){e.put("app/contact/contact.tpl.html",'<iframe class="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.973050564934!2d-40.315225000000005!3d-20.384000999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83e25eab20401%3A0xb62d59f71c07c6c1!2smtda.de+-+sites%2C+e-commerce+e+aplica%C3%A7%C3%B5es+web!5e0!3m2!1spt-BR!2sbr!4v1443540098954" width="100%" height="220" frameborder="0" style="border:0" allowfullscreen=""></iframe><div class="wrapper content-area" layout-gt-sm="row" layout-sm="column"><div flex-gt-sm="" layout-gt-sm="row" layout-sm="column"><div flex-gt-sm=""><h2 class="page-title">Entre em contato</h2><p>Preencha o formulário para falar com Matheus Davidson, durante o horário comercial a resposta geralmente é em minutos:</p><md-content><form name="form"><div layout="" layout-sm="column"><md-input-container flex=""><label>Nome</label> <input ng-model="vm.contact.name" required=""></md-input-container><md-input-container flex=""><label>Email</label> <input type="email" ng-model="vm.contact.email" required=""></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex=""><label>Telefone</label> <input ng-model="vm.contact.phone" ui-br-phone-number="" required=""></md-input-container><md-input-container flex=""><label>Assunto</label><md-select ng-model="vm.contact.subject" required=""><md-option ng-repeat="item in vm.subjects" value="{{item.value}}">{{item.name}}</md-option></md-select></md-input-container></div><md-input-container flex=""><label>Mensagem</label> <textarea ng-model="vm.contact.message" columns="1" md-maxlength="500" required=""></textarea></md-input-container><div class="recaptcha" vc-recaptcha="" theme="\'light\'" key="vm.rcKey" on-create="vm.setWidgetId(vm.widgetId)" on-success="vm.setCaptcha(response)" on-expire="vm.cbExpiration()"></div><p class="md-caption">* controle anti-spam, marque a opção "não sou um robô" para enviar</p><md-progress-circular class="md-hue-2" md-mode="indeterminate" md-diameter="20px" ng-if="vm.contact.busy.status(\'create\')"></md-progress-circular><md-button ng-disabled="vm.contact.formStatus(\'create\', form.$invalid)" ng-click="vm.submit($event)" class="md-raised md-primary md-hue-2" ng-if="!vm.contact.busy.status(\'create\')">Enviar<md-tooltip>Enviar o email</md-tooltip></md-button></form></md-content></div><span class="fake-divider"></span></div><div><h2 class="page-title">Endereço</h2><p>Avenida dos estados, 15<br>Jockey de Itaparica - Vila Velha<br>Espírito Santo - Brasil</p><h2 class="page-title">Outros contatos</h2><p><i class="material-icons">phone_iphone</i> +55 27 9 9999-9803<br><i class="material-icons">mail</i> contato@mtda.de<br></p><h2 class="page-title">Atendimento</h2><p>08:00 ás 17:00</p></div></div><br><br>'),e.put("app/home/home.tpl.html",'<div class="hero"><div class="wrapper"><h1 class="animated fadeInLeft">Desenvolvedor WEB e especialista em SEO</h1><p>Matheus Davidson tem 10 anos de experiência de mercado no Brasil e Inglaterra, apaixonado por tecnologia, está sempre antenado nas novidades da internet!</p><div class="hero-action"><md-button class="md-raised">Perfil</md-button><md-button class="md-raised">Cases</md-button></div></div><div class="hero-mkt"><div class="wrapper"><p class="md-small-headline">Pensando em desenvolver um site, e-commerce ou aplicação? Posso te ajudar, <a href="#">entre em contato.</a></p></div></div></div><div class="wrapper techs-wrapper"><h2 class="intro-title md-display-2 text-primary text-dark">Tecnologia utilizada recentemente</h2><p class="intro-desc">A tecnologia utilizada em cada aplicação vai depender do caso de uso, mas trabalho preferencialmente com a MEAN stack, uma full-stack javascript que da agilidade e qualidade ao processo de desenvolvimento.</p><br><div techs="" class="techs" layout-align="center center" layout-align-gt-sm="space-between" layout="column" layout-gt-sm="row"></div><br></div><div class="cur-project"><div class="wrapper"><h2 class="md-headline">Projeto que estou trabalhando no momento</h2><p class="md-body-2"><span class="client">Fiorebella</span><br>Desenvolvimento de e-commerce para vendas de flores e cestas de café da manhã no espírito santo.</p><br><img class="pro-image" src="assets/images/iphone.png" alt=""></div></div>'),e.put("app/layout/layout.tpl.html",'<md-sidenav ui-view="sidenav" class="page-menu md-sidenav-left md-whiteframe-z2" md-component-id="left"></md-sidenav><div class="layout-wrapper" layout="column" flex=""><loader></loader><md-content class="layout-content"><div class="layout-content-inner" layout="column" layout-fill=""><header><acme-navbar class="animated fadeInDown"></acme-navbar></header><div ui-view="content" class="anim-in-out anim-slide-below-fade" layout="column" flex=""></div><footer><div class="wrapper" layout="row" layout-align="start end"><div class="copyright" layout="row" layout-align="start end" flex=""><img class="logo" src="assets/images/logo.png" alt=""> <span class="md-body-2">© 2005 - 2015</span></div><div class="social" layout="row" layout-align="end end" flex=""><a href="https://www.facebook.com/matheusdavidson" target="_blank"><i class="fa fa-facebook-official"></i><md-tooltip>Ir para o facebook</md-tooltip></a> <a href="https://plus.google.com/+MatheusAndradeD" target="_blank"><i class="fa fa-google-plus-square"></i><md-tooltip>Ir para o google+</md-tooltip></a> <a href="https://twitter.com/mtdade" target="_blank"><i class="fa fa-twitter-square"></i><md-tooltip>Ir para o twitter</md-tooltip></a> <a href="https://github.com/matheusdavidson" target="_blank"><i class="fa fa-github-square"></i><md-tooltip>Ir para o github</md-tooltip></a></div></div></footer></div></md-content></div>'),e.put("app/layout/not-ready.tpl.html",'<div class="not-ready" flex=""><div class="wrapper" layout="column" layout-align="center center"><h4 class="md-headline">Esta página ainda não está disponível</h4><h1 class="animated fadeInLeft md-display-2">Estamos construindo um novo site com muitas novidades para você!</h1><p>Em breve você poderá acompanhar a história, serviços, cases de sucesso e o blog da mtda</p><div class="hero-action"><md-button ui-sref="app.home" class="md-raised">Home</md-button><md-button ui-sref="app.contact" class="md-raised">Contato</md-button></div></div></div>'),e.put("app/layout/sidenav.tpl.html",'<div layout="column" layout-fill="" flex=""><p class="sn-title">Menu de acesso:</p><div flex=""><ul class="app-menu"><li ng-repeat="section in app.menu.sections" class="parent-list-item" ng-class="{\'parentActive\' : app.menu.isSectionSelected(section)}"><h2 class="menu-heading" ng-if="section.type === \'heading\'" id="heading_{{ section.name | nospace }}" layout="row"><i ng-if="section.icon" class="{{section.icon}}"></i><md-icon ng-if="section.iconMi" md-font-set="material-icons">{{section.icon}}</md-icon><my-svg-icon ng-if="section.iconSvg" class="ic_24px" icon="{{section.iconSvg}}"></my-svg-icon><span>{{section.name}}</span></h2><menu-link section="section" ng-if="section.type === \'link\'"></menu-link><menu-toggle section="section" ng-if="section.type === \'toggle\'"></menu-toggle><ul ng-if="section.children" class="menu-nested-list"><li ng-repeat="child in section.children" ng-class="{\'childActive\' : app.menu.isChildSectionSelected(child)}"><menu-toggle section="child"></menu-toggle></li></ul></li></ul></div><div layout="column" layout-align="center center" class="page-footer"><p class="copyright">{{ app.setting.copyright }} © {{ app.year }}</p></div></div>'),e.put("app/main/main.html",'<md-content layout="column" class="home"><header><acme-navbar></acme-navbar></header><div class="hero"><div class="wrapper"><h1>Desenvolvedor WEB e especialista em SEO</h1><p>Matheus Davidson tem 10 anos de experiência de mercado no Brasil e Inglaterra, apaixonado por tecnologia, está sempre antenado nas novidades da internet!</p><div class="hero-action"><md-button class="md-raised">Perfil</md-button><md-button class="md-raised">Cases</md-button></div></div><div class="hero-mkt"><div class="wrapper"><p class="md-small-headline">Pensando em desenvolver um site, e-commerce ou aplicação? Posso te ajudar, <a href="#">entre em contato.</a></p></div></div></div><div class="wrapper techs-wrapper"><h2 class="intro-title md-display-2 text-primary text-dark">Tecnologia utilizada recentemente</h2><p class="intro-desc">A tecnologia utilizada em cada aplicação vai depender do caso de uso, mas trabalho preferencialmente com a MEAN stack, uma full-stack javascript que da agilidade e qualidade ao processo de desenvolvimento.</p><br><div class="techs" layout-align-gt-sm="space-between" layout-align-sm="center"><div class="item" ng-repeat="item in main.techs"><img ng-src="assets/images/{{ item.logo }}" alt="{{ item.title }}"><h3 class="md-title text-primary">{{ item.title }}</h3><p>{{ item.desc }}</p></div></div><br></div><div class="cur-project"><div class="wrapper"><h2 class="md-headline">Projeto que estou trabalhando no momento</h2><p class="md-body-2"><span class="client">Fiorebella</span><br>Desenvolvimento de e-commerce para vendas de flores e cestas de café da manhã no espírito santo.</p><br><img class="pro-image" src="assets/images/iphone.png" alt=""></div></div><footer><div class="wrapper" layout="row" layout-align="start end"><div class="copyright" layout="row" layout-align="start end" flex=""><img class="logo" src="assets/images/logo.png" alt=""> <span class="md-body-2">© 2005 - 2015</span></div><div class="social" layout="row" layout-align="end end" flex=""><a href="https://www.facebook.com/matheusdavidson" target="_blank"><i class="fa fa-facebook-official"></i><md-tooltip>Ir para o facebook</md-tooltip></a> <a href="https://plus.google.com/+MatheusAndradeD" target="_blank"><i class="fa fa-google-plus-square"></i><md-tooltip>Ir para o google+</md-tooltip></a> <a href="https://twitter.com/mtdade" target="_blank"><i class="fa fa-twitter-square"></i><md-tooltip>Ir para o twitter</md-tooltip></a> <a href="https://github.com/matheusdavidson" target="_blank"><i class="fa fa-github-square"></i><md-tooltip>Ir para o github</md-tooltip></a></div></div></footer></md-content>'),e.put("app/layout/navbar/navbar.tpl.html",'<md-toolbar class="toolbar-default" layout="row" layout-align="center center"><div class="wrapper" layout="row" layout-align="space-between center"><a ui-sref="app.home"><img class="main-logo" src="assets/images/logo-white.png" alt=""><md-tooltip>Ir para a home</md-tooltip></a><section class="main-menu" flex="" layout="row" layout-align="end center" hide-sm="" hide-md=""><md-button ui-sref="app.perfil">Perfil <i class="material-icons">keyboard_arrow_down</i></md-button><md-button ui-sref="app.services">Serviços <i class="material-icons">keyboard_arrow_down</i></md-button><md-button ui-sref="app.cases">Cases <i class="material-icons">keyboard_arrow_down</i></md-button><md-button ui-sref="app.contact">Contato <i class="material-icons">keyboard_arrow_down</i></md-button><md-button ui-sref="app.blog" class="md-raised">Blog</md-button></section><md-button class="md-icon-button" ng-click="vm.sidenav(\'left\').open()" hide-gt-sm="" show-md=""><md-icon md-font-set="material-icons">menu</md-icon></md-button></div></md-toolbar>'),e.put("app/utils/directives/techs/techs.tpl.html",'<div class="item animated bounceIn" ng-repeat="item in vm.techs" flex=""><img ng-src="assets/images/{{ item.logo }}" alt="{{ item.title }}"><h3 class="md-title text-primary">{{ item.title }}</h3><p>{{ item.desc }}</p></div>')}]);
//# sourceMappingURL=../maps/scripts/app-db7e0ce90a.js.map