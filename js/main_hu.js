(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Ford\u00edt\u00e1s",1:"M\u00e9gse",2:"Bez\u00e1r\u00e1s",3:function(a){return"A Google automatikusan leford\u00edtotta az oldalt a k\u00f6vetkez\u0151 nyelvre: "+a},4:function(a){return"Leford\u00edtva "+(a+" nyelvre")},5:"Hiba: a szerver nem tudta teljes\u00edteni a k\u00e9r\u00e9st. Pr\u00f3b\u00e1lkozzon k\u00e9s\u0151bb.",6:"Tov\u00e1bbi inform\u00e1ci\u00f3",7:function(a){return"\u00dczemeltet\u0151: "+a},8:"Ford\u00edt\u00f3",9:"Ford\u00edt\u00e1s folyamatban",10:function(a){return"Leford\u00edtja az oldalt a Google Translate seg\u00edts\u00e9g\u00e9vel "+
(a+" nyelvre?")},11:function(a){return"Oldal megtekint\u00e9se "+(a+" nyelven")},12:"Eredeti megjelen\u00edt\u00e9se",13:"A helyi f\u00e1jl tartalma biztons\u00e1gos kapcsolaton kereszt\u00fcl ker\u00fcl a Google-hoz ford\u00edt\u00e1sra.",14:"A biztons\u00e1gos oldal tartalma biztons\u00e1gos kapcsolaton kereszt\u00fcl ker\u00fcl a Google-hoz ford\u00edt\u00e1sra.",15:"Az intranetoldal tartalma biztons\u00e1gos kapcsolaton kereszt\u00fcl ker\u00fcl a Google-hoz ford\u00edt\u00e1sra.",16:"Nyelv kiv\u00e1laszt\u00e1sa",
17:function(a){return a+" nyelv\u0171 ford\u00edt\u00e1s kikapcsol\u00e1sa"},18:function(a){return"Ford\u00edt\u00e1s kikapcsol\u00e1sa err\u0151l a nyelvr\u0151l: "+a},19:"Mindig elrejt",20:"Eredeti sz\u00f6veg:",21:"K\u00fcldj\u00f6n be egy jobb ford\u00edt\u00e1st",22:"Bek\u00fcld\u00e9s",23:"\u00d6sszes leford\u00edt\u00e1sa",24:"\u00d6sszes vissza\u00e1ll\u00edt\u00e1sa",25:"\u00d6sszes visszavon\u00e1sa",26:"Szakaszok leford\u00edt\u00e1sa a saj\u00e1t nyelvemre",27:function(a){return"Minden leford\u00edt\u00e1sa "+
(a+" nyelvre")},28:"Eredeti nyelvek megjelen\u00edt\u00e9se",29:"Be\u00e1ll\u00edt\u00e1sok",30:"Ford\u00edt\u00e1s kikapcsol\u00e1sa ezen a webhelyen",31:null,32:"M\u00e1s ford\u00edt\u00e1sok megjelen\u00edt\u00e9se.",33:"Kattintson a fenti szavakra m\u00e1s ford\u00edt\u00e1sok megtekint\u00e9s\u00e9hez",34:"Haszn\u00e1lat",35:"A Shift billenty\u0171 lenyom\u00e1s\u00e1val h\u00fazza az \u00e1trendez\u00e9shez.",36:"Kattintson m\u00e1s ford\u00edt\u00e1sokhoz",37:"Tartsa nyomva a Shift billenty\u0171t, kattintson, \u00e9s h\u00fazza a fenti szavakat az \u00e1trendez\u00e9shez.",
38:"K\u00f6sz\u00f6nj\u00fcnk, hogy elk\u00fcldte ford\u00edt\u00e1si javaslat\u00e1t a Google Ford\u00edt\u00f3 szolg\u00e1ltat\u00e1snak.",39:"Ford\u00edt\u00e1s kezel\u00e9se ezen a webhelyen",40:"Kattintson egy sz\u00f3ra m\u00e1s ford\u00edt\u00e1sokhoz, vagy kattintson dupl\u00e1n a k\u00f6zvetlen szerkeszt\u00e9shez.",41:"Eredeti nyelv\u0171 sz\u00f6veg",42:"Ford\u00edt\u00f3",43:"Ford\u00edt\u00e1s",44:"A jav\u00edt\u00e1st elk\u00fcldt\u00fck.",45:"Hiba: a weboldal nyelve nem t\u00e1mogatott.",
46:"Ford\u00edt\u00f3modul"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_hu.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
