(function(){(function(){function a(a){this.t={};this.tick=function(a,b,c){c=void 0!=c?c:(new Date).getTime();this.t[a]=[c,b]};this.tick("start",null,a)}var b,c;window.performance&&(c=(b=window.performance.timing)&&b.responseStart);var d=0<c?new a(c):new a;window.GA_jstiming={Timer:a,load:d};b&&(b=b.navigationStart,0<b&&c>=b&&(window.GA_jstiming.srt=c-b))})();if(window.GA_jstiming){window.GA_jstiming.c={};window.GA_jstiming.j=1;var k=function(a,b,c){var d=a.t[b],f=a.t.start;if(d&&(f||c))return d=a.t[b][0],f=void 0!=c?c:f[0],a=d-f,Math.round(a)},m=function(a,b,c){var d="";window.GA_jstiming.srt&&(d+="&srt="+window.GA_jstiming.srt,delete window.GA_jstiming.srt);var f=a.t,l=f.start,g=[],e=[],h;for(h in f)if("start"!=h&&0!=h.indexOf("_")){var t=f[h][1];t?f[t]&&e.push(h+"."+k(a,h,f[t][0])):l&&g.push(h+"."+k(a,h))}delete f.start;if(b)for(var G in b)d+="&"+G+
"="+b[G];(b=c)||(b="https://csi.gstatic.com/csi");return a=[b,"?v=3","&s="+(window.GA_jstiming.sn||"gam")+"&action=",a.name,e.length?"&it="+e.join(","):"",d,"&rt=",g.join(",")].join("")},n=function(a,b,c){a=m(a,b,c);if(!a)return"";b=new Image;var d=window.GA_jstiming.j++;window.GA_jstiming.c[d]=b;b.onload=b.onerror=function(){window.GA_jstiming&&delete window.GA_jstiming.c[d]};b.src=a;b=null;return a};window.GA_jstiming.report=function(a,b,c){return n(a,b,c)}};var p=this,q=function(a,b){var c;a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]?c[d]:c[d]={}:c[d]=b},u=function(a){var b=r;function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.m=function(a,c,l){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var v=function(a){var b=!1;return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},aa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,w=function(a,b){return a?(a=a.match(aa))?a[0]:b:b};var ba=v("false"),x=v("false"),y=x||!ba;var z=function(){return w("","pubads.g.doubleclick.net")};var A=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},B=function(a,b){return a<b?-1:a>b?1:0};var C;a:{var D=p.navigator;if(D){var E=D.userAgent;if(E){C=E;break a}}C=""}var F=function(a){var b=C;return-1!=b.indexOf(a)},H=function(){var a="WebKit",b=C;return-1!=b.toLowerCase().indexOf(a.toLowerCase())};var da=function(a,b){var c,d=ca;c=c?c(a):a;Object.prototype.hasOwnProperty.call(d,c)||(d[c]=b(a))};var ea=F("Opera"),I=F("Trident")||F("MSIE"),fa=F("Edge"),J=F("Gecko")&&!(H()&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),ga=H()&&!F("Edge"),ha=function(){var a=C;if(J)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fa)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ga)return/WebKit\/(\S+)/.exec(a);if(ea)return/(?:Version)[ \/]?(\S+)/.exec(a)},K=function(){var a=p.document;return a?a.documentMode:void 0},L;
a:{var M="",N=ha();N&&(M=N?N[1]:"");if(I){var O=K();if(null!=O&&O>parseFloat(M)){L=String(O);break a}}L=M}
var P=L,ca={},Q=function(a){da(a,function(){var b,c=a;b=P;var d=0;b=A(String(b)).split(".");for(var c=A(String(c)).split("."),f=Math.max(b.length,c.length),l=0;0==d&&l<f;l++){var g=b[l]||"",e=c[l]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];if(0==g[0].length&&0==e[0].length)break;var d=0==g[1].length?0:parseInt(g[1],10),h=0==e[1].length?0:parseInt(e[1],10),d=B(d,h)||B(0==g[2].length,0==e[2].length)||B(g[2],e[2]),g=g[3],e=e[3]}while(0==d)}b=d;return 0<=
b})},R;var S=p.document,ia=K();R=S&&I?ia||("CSS1Compat"==S.compatMode?parseInt(P,10):5):void 0;var ja=R;var T;if(!(T=!J&&!I)){var U;if(U=I){var ka=9;U=Number(ja)>=ka}T=U}T||J&&Q("1.9.1");I&&Q("9");var V=function(a,b){var c,d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var la=function(){try{var a=Object.defineProperty({},"passive",{get:function(){}});window.addEventListener("test",null,a)}catch(b){}};la();var W=function(a){this.h={};this.f={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.f[a[b]]=""};W.prototype.b=function(){var a=[];V(this.h,function(b,d){a.push(d)});var b=function(b){""!=b&&a.push(b)};V(this.f,b);return a};function ma(a){var b="adsense";if(a&&"string"==typeof a&&0<a.length&&null!=b){var c=window.GS_googleServiceIds_[b];null==c&&(c="adsense"==b?new X:new Y,window.GS_googleServiceIds_[b]=c);b:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break b;c.a[c.a.length]=a}a=c}else a=null;return a}q("GS_googleAddAdSenseService",ma);function na(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];"function"!=typeof b&&b.enable()}}q("GS_googleEnableAllServices",na);
function oa(){window.GS_googleServiceIds_={}}q("GS_googleResetAllServices",oa);function pa(){var a;a="adsense";a=null==a?null:window.GS_googleServiceIds_[a];return a=null==a?"":a.a.join()}q("GS_googleGetIdsForAdSenseService",pa);function qa(a){return Z(a)}q("GS_googleFindService",qa);function ra(){var a=Z("adsense");return a?a.b():""}q("GS_googleGetExpIdsForAdSense",ra);function r(a){this.l=a;this.a=[];this.i=new W}
r.prototype.toString=function(){for(var a="["+this.l+" ids: ",b=0;b<this.a.length;b++)0<b&&(a+=","),a+=this.a[b];return a+="]"};r.prototype.b=function(){return this.i.b().join()};var Z=function(a){return a=null==a?null:window.GS_googleServiceIds_[a]};function Y(){r.call(this,"unknown")}u(Y);Y.prototype.enable=function(){};function X(){r.call(this,"adsense");this.g=!1}u(X);
X.prototype.enable=function(){y=x;if(!this.g){var a;a=document.URL;var b;if(b=a){var c;a:{if(a){b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var d=b.exec(decodeURIComponent(a));if(d){c=d[1]&&1<d[1].length?d[1].substring(1):"true";break a}}catch(f){}}c=""}b=0<c.length}a=b?"google_ads_dbg.js":"google_ads.js";c="http://"+w("","partner.googleadservices.com");y&&(c="https://"+w("","securepubads.g.doubleclick.net"));d="";b=z();(b="pubads.g.doubleclick.net"==
b)||(d="?prodhost="+z());a=c+"/gampad/"+a+d;document.write('<script src="'+a+'">\x3c/script>');this.g=!0;window.GA_jstiming&&window.GA_jstiming.Timer&&(window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start"))}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});}).call(this);
