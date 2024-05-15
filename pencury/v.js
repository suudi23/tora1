
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var f=p[u].split("="),l=f[0].replace(d,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(d,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

/* docReady is a single plain javascript function that provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

// exit modal window
if (typeof popup_style == 'undefined') {
	var popup_style = "popup-light";
}

if (typeof popup_glow == 'undefined') {
	var popup_glow = "glow-red";
}		

var thePopup = '<div id="popup_exit" class="popup-modal '+ popup_style +'"><div class="modal-offer '+ popup_glow +'"><div class="modal-content"><div class="modal-text" id="popupText"></div></div></div></div><div class="popup_overlay"></div>';

var current_href = window.location.hostname;
var PreventExitSplash = false;

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
getUrlParameter("p") === "0" ? PreventExitSplash = true : PreventExitSplash = false;

// classes for text colors in <span class=""></span>: text-red, text-green, text-white, text-yellow
var alert_lang = {
		en: "<br/><br/>*********************************************<br/><br/>*** WAIT! *** <strong>DON'T LET FREE YOUR COUPON EXPIRE!</strong><br/><br/>Special Discount and *** <strong><span class='text-green'>FREE</span></strong> *** Shipping Activated!<br/><br/>New Original Pills, Better Than Viagra, Fuck For Hours!<br/><br/><strong>Click STAY ON PAGE below to receive your instant discount.</strong><br/><br/>*********************************************<br/><br/>",
		fr: "<br/><br/>*********************************************<br/><br/>*** ATTENDS! *** NE LAISSES PAS TON COUPON GRATUIT EXPIRER!<br/><br/>Remise sp Ã©ciale et livraison gratuite activÃ©e.<br/><br/>De nouvelles pilules, meilleures que le viagra, baiser pour des heures!<br/><br/>Cliques RESTER SUR LA PAGE en dessous pour recevoir ta remise instantanÃ©e<br/><br/>*********************************************<br/><br/>",
		de: "<br/><br/>*********************************************<br/><br/>*** WARTE! *** LASS DEINEN GRATIS GUTSCHEIN NICHT VERFALLEN!<br/><br/>Spezial Rabatt und GRATIS Versand Aktiviert.<br/><br/>Neue Original Pillen, Besser als Viagra, Stundenlanges Ficken!<br/><br/>Klick AUF DIESER SEITE BLEIBEN, um deinen Sofortrabatt zu erhalten.<br/><br/>*********************************************<br/><br/>",
		nl: "<br/><br/>*********************************************<br/><br/>*** WACHT!  *** LAAT Vrij Uw COUPON EXPIRE!<br/><br/>Speciale Korting en *** GRATIS *** Shipping geactiveerd.<br/><br/>Nieuwe Originele Pillen, beter dan Viagra, Fuck voor uren!<br/><br/>Klik hieronder Blijf op pagina toe aan uw onmiddellijke korting te ontvangen.<br/><br/>*********************************************<br/><br/>",
		it: "<br/><br/>*********************************************<br/><br/>*** ASPETTA! *** NON LASCIARE SCADERE IL TUO COUPON GRATUITO<br/><br/>Attivato lo sconto speciale e la spedizione GRATUITA.<br/><br/>Nuove pillole originali, meglio del Viagra, scopi per ore!<br/><br/>Clicca su RESTA SULLA PAGINA qui sotto per ricevere subito il tuo sconto<br/><br/>*********************************************<br/><br/>",
		es: "<br/><br/>*********************************************<br/><br/>*** ESPERE! *** NO DEJE EXPIRAR SU CUPÃ“N!<br/><br/>Descuento Especial y envÃ­o sin costo Activados.<br/><br/>Nuevas pÃ­ldoras originales, Mejores que el Viagra, Folle durante horas!<br/><br/>Haga Click en el botÃ³n de abajo PERMANECER EN LA PÃGINA para recibir su descuento alinstante.<br/><br/>*********************************************<br/><br/>",
		no: "<br/><br/>*********************************************<br/><br/>*** VENT! *** IKKE LA GRATISKUPONGEN DIN UTLÃ˜PE!<br/><br/>Spesialrabatt og GRATIS frakt er aktivert.<br/><br/>Nye originalpiller, bedre enn Viagra, pul i timevis!<br/>\Klikk FORBLI PÃ… SIDEN nedenfor for Ã¥ motta din Ã¸yeblikkelige rabatt.<br/><br/>*********************************************<br/><br/>",
		dk: "<br/><br/>*********************************************<br/><br/>*** VENT! *** VENT!LAD IKKE DIN GRATIS KUPON UDLÃ˜BE!<br/><br/>Speciel Rabat og *** GRATIS *** Levering Er Aktiveret!<br/><br/>Nye Originale Piller, Bedre End Viagra, Knep I Flere Timer<br/><br/> KlikBLIV PÃ… SIDE nedenfor for at modtage din Ã¸jeblikkelige rabat.<br/><br/>*********************************************<br/><br/>",
		fi: "<br/><br/>*********************************************<br/><br/>*** ODOTA! *** Ã„LÃ„ ANNA ILMAISEN KUPONKISI VANHENTUA!<br/><br/>Erikoistarjous ja ILMAINEN toimitus aktivoitu!<br/><br/>Uudet alkuperÃ¤iset pillerit,parempaa kuin viagra,nussi tunteja.<br/><br/>Paina PYSY SIVULLA alla saadaksesi vÃ¤littÃ¶mÃ¤n tarjouksesi!<br/><br/>*********************************************<br/><br/>",
		tr: "<br/><br/>*********************************************<br/><br/>*** BEKLEYÄ°N! *** SÄ°ZÄ°N KUPON EXPIRE ÃœCRETSÄ°Z Ä°ZÄ°N VERMEYÄ°N!<br/><br/> Ã–zel Ä°ndirim ve *** BEDAVA *** Kargo Aktif.<br/><br/>Yeni Orijinal Hap, Daha Ä°yi Viagra, Saatleri iÃ§in Kahretsin!<br/><br/>anlÄ±k indirim almak iÃ§in aÅŸaÄŸÄ±daki KONAKLAMA AÃ‡IK SAYFA tÄ±klayÄ±n.<br/><br/>*********************************************<br/><br/>",
		pt: "<br/><br/>*********************************************<br/><br/>*** ESPERE! *** NÃƒO DEIXE SEU CUPOM GR ÃTIS EXPIRAR!<br/><br/>Desconto Especial e Frete GR ÃTIS Ativados.<br/><br/>Novas PÃ­lulas Originais, Melhores que Viagra, Foda por horas!<br/><br/>Clique PERMANECER NA PÃGINA abaixo para receber seu desconto instantÃ¢neo<br/><br/>*********************************************<br/><br/>",
		pl: "<br/><br/>*********************************************<br/><br/>*** CZEKAÄ†! *** NIE POZWALA uwolniÄ‡ KUPON EXPIRE!<br/><br/>Specjalna ZniÅ¼ka i *** *** wysyÅ‚ka GRATIS aktywowany.<br/><br/>Nowe oryginalne tabletki, lepiej niÅ¼ Viagra, Fuck na wiele godzin!<br/><br/>Kliknij poniÅ¼ej PAGE Stay On, aby otrzymaÄ‡ natychmiastowy rabat.<br/><br/>*********************************************<br/><br/>",
		cz: "<br/><br/>*********************************************<br/><br/>*** POÄŒKEJTE! *** NENECHTE osvobodit svou KUPÃ“N EXPIRE!<br/><br/>SpeciÃ¡lnÃ­ slevy a *** ZDARMA *** PÅ™epravnÃ­ AktivovanÃ©.<br/><br/>NovÃ© originÃ¡lnÃ­ Pilulky lepÅ¡Ã­ neÅ¾ Viagra, Fuck celÃ© hodiny!<br/><br/>KliknÄ›te na POBYT na stranÄ› nÃ­Å¾e a obdrÅ¾Ã­te okamÅ¾itÃ© slevu.<br/><br/>*********************************************<br/><br/>",
		hu: "<br/><br/>*********************************************<br/><br/>*** VÃRJON! *** NE szabadon engednek a kupon EXPIRE!<br/><br/>KÃ¼lÃ¶nleges kedvezmÃ©ny Ã©s FREE *** *** SzÃ¡llÃ­tÃ¡si aktivÃ¡lt.<br/><br/>Ãšj Eredeti Pills, jobb, mint a Viagra, Bassza az Ã³ra!<br/><br/>Kattintson Maradok az oldalon, amelyen fogadni az azonnali kedvezmÃ©ny.<br/><br/>*********************************************<br/><br/>",
		sk: "<br/><br/>*********************************************<br/><br/>*** ProsÃ­m! *** NENECHAJTE oslobodiÅ¥ svoju KUPÃ“N expire!<br/><br/>Å peciÃ¡lne zÄ¾avy a *** ZADARMO *** PrepravnÃ¡ AktivovanÃ©.<br/><br/>NovÃ© originÃ¡lne Pilulky lepÅ¡Ã­ ako Viagra, Fuck celÃ© hodiny!<br/><br/>Kliknite na POBYT na strane niÅ¾Å¡ie a obdrÅ¾Ã­te okamÅ¾itÃ© zÄ¾avu.<br/><br/>*********************************************<br/><br/>",
		ro: "<br/><br/>*********************************************<br/><br/>*** AÈ˜TEPTA! *** NU GRATUIT SÄ‚ Cuponul dvs. EXPIRE!<br/><br/>Reducere specialÄƒ È™i *** GRATUIT *** Transport activat.<br/><br/>Pastile noi originale, mai bine decÃ¢t Viagra, dracu 'ore Ã®n È™ir!<br/><br/>FaceÈ›i clic pe RÄƒmÃ¢neÈ›i pe pagina de mai jos pentru a primi o reducere instant.<br/><br/>*********************************************<br/><br/>",
		gr: "<br/><br/>*********************************************<br/><br/>*** Î Î•Î¡Î™ÎœÎˆÎÎ•Î¤Î•! ÎœÎ—Î Î‘Î¦Î—Î£Î•Î¤Î• Î´Ï‰ÏÎµÎ¬Î½ ÎºÎ¿Ï…Ï€ÏŒÎ½Î¹ Î£Î‘Î£ Î›Î—ÎžÎ•Î™! *** Î•Î¹Î´Î¹ÎºÎ® Î­ÎºÏ€Ï„Ï‰ÏƒÎ· ÎºÎ±Î¹ *** Î”Î©Î¡Î•Î‘Î *** Î±Ï€Î¿ÏƒÏ„Î¿Î»Î® ÎµÎ½ÎµÏÎ³Î¿Ï€Î¿Î¹Î·Î¸ÎµÎ¯.<br/><br/>ÎÎ­Î± Original Ï‡Î¬Ï€Î¹Î±, ÎºÎ±Î»ÏÏ„ÎµÏÎ± Î±Ï€ÏŒ Ï„Î¿ Viagra, Î“Î¬Î¼Î± Î³Î¹Î± ÏŽÏÎµÏ‚!<br/><br/>ÎšÎ¬Î½Ï„Îµ ÎºÎ»Î¹Îº Ï€Î±ÏÎ±ÎºÎ¬Ï„Ï‰ Î³Î¹Î± Î½Î± Ï€Î±ÏÎ±Î¼ÎµÎ¯Î½Î¿Ï…Î½ ÏƒÏ„Î·Î½ ÏƒÎµÎ»Î¯Î´Î± Î³Î¹Î± Î½Î± Î»Î¬Î²ÎµÏ„Îµ Î¬Î¼ÎµÏƒÎ· Î­ÎºÏ€Ï„Ï‰ÏƒÎ· ÏƒÎ±Ï‚.<br/><br/>*********************************************<br/><br/>",
		ru: "<br/><br/>*********************************************<br/><br/>*** ÐŸÐžÐ”ÐžÐ–Ð”Ð˜Ð¢Ð•! ***<br/><br/> Ð£ Ð²Ð°Ñ ÐµÑÑ‚ÑŒ ÑˆÐ°Ð½Ñ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ *** Ð¡ÐŸÐ•Ð¦Ð˜ÐÐ›Ð¬ÐÐ£Ð® Ð¡ÐšÐ˜Ð”ÐšÐ£ Ð¸ Ð‘Ð•Ð¡ÐŸÐ›ÐÐ¢ÐÐ£Ð® Ð”ÐžÐ¡Ð¢ÐÐ’ÐšÐ£ *** Ð½Ð° Ð½Ð¾Ð²Ñ‹Ðµ Ð¾Ñ€Ð¸Ð³Ð¸Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ñ‚Ð°Ð±Ð»ÐµÑ‚ÐºÐ¸!<br/><br/>ÐšÑ€ÑƒÑ‡Ðµ, Ñ‡ÐµÐ¼ Ð’Ð¸Ð°Ð³Ñ€Ð°, ÑÑ‚Ð¾ÑÐº Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¸Ñ… Ñ‡Ð°ÑÐ¾Ð²!<br/><br/>ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ ÐžÑÑ‚Ð°Ñ‚ÑŒÑÑ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ  Ð¼Ð³Ð½Ð¾Ð²ÐµÐ½Ð½ÑƒÑŽ ÑÐºÐ¸Ð´ÐºÑƒ.<br/><br/>*********************************************<br/><br/>",
		id: "<br/><br/>*********************************************<br/><br/>*** TUNGGU! *** JANGAN BIARKAN GRATIS KUPON ANDA EXPIRE!<br/><br/>Diskon khusus dan *** GRATIS *** Pengiriman Diaktifkan.<br/><br/>Pil baru asli, Better Than Viagra, Persetan Untuk Jam!<br/><br/>Klik STAY DI HALAMAN bawah ini untuk menerima diskon instan Anda.<br/><br/>*********************************************<br/><br/>",
		th: "<br/><br/>*********************************************<br/><br/>*** à¸£à¸­! *** à¸­à¸¢à¹ˆà¸²à¸›à¸¥à¹ˆà¸­à¸¢à¹ƒà¸«à¹‰à¸£à¸±à¸šà¸Ÿà¸£à¸µà¸„à¸¹à¸›à¸­à¸‡à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸! à¸ªà¹ˆà¸§à¸™à¸¥à¸”à¸žà¸´à¹€à¸¨à¸©à¹à¸¥à¸°à¸Ÿà¸£à¸µ *** *** à¸à¸²à¸£à¸ˆà¸±à¸”à¸ªà¹ˆà¸‡à¸ªà¸´à¸™à¸„à¹‰à¸²à¸—à¸µà¹ˆà¹€à¸›à¸´à¸”à¹ƒà¸Šà¹‰à¸‡à¸²à¸™ à¸¢à¸²à¹ƒà¸«à¸¡à¹ˆà¸—à¸µà¹ˆà¹€à¸›à¹‡à¸™à¸•à¹‰à¸™à¸‰à¸šà¸±à¸šà¸”à¸µà¸à¸§à¹ˆà¸²à¹„à¸§à¸­à¸²à¸à¸£à¹‰à¸², à¹€à¸žà¸¨à¸ªà¸±à¸¡à¸žà¸±à¸™à¸˜à¹Œà¸ªà¸³à¸«à¸£à¸±à¸šà¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡! à¸„à¸¥à¸´à¸à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸šà¸™à¸«à¸™à¹‰à¸²à¹€à¸§à¹‡à¸šà¸”à¹‰à¸²à¸™à¸¥à¹ˆà¸²à¸‡à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸±à¸šà¸ªà¹ˆà¸§à¸™à¸¥à¸”à¸—à¸±à¸™à¸—à¸µ<br/><br/>*********************************************<br/><br/>",
		vn: "<br/><br/>*********************************************<br/><br/>*** CHá»œ Äá»¢I! *** KHÃ”NG CHO MIá»„N PHÃ PHIáº¾U GIáº¢M GIÃ Cá»¦A Báº N EXPIRE!<br/><br/>Giáº£m giÃ¡ Ä‘áº·c biá»‡t vÃ  *** MIá»„N PHÃ *** Váº­n Chuyá»ƒn hoáº¡t.<br/><br/>Thuá»‘c gá»‘c má»›i, tá»‘t hÆ¡n Viagra, fuck VÃ­ giá»!<br/><br/>Nháº¥n TRANG TRÃš ON dÆ°á»›i Ä‘Ã¢y Ä‘á»ƒ nháº­n Ä‘Æ°á»£c giáº£m giÃ¡ ngay láº­p tá»©c cá»§a báº¡n.<br/><br/>*********************************************<br/><br/>",
		bg: "<br/><br/>*********************************************<br/><br/>*** ÐŸÐžÐ§ÐÐšÐÐ™Ð¢Ð•! *** ÐÐµ Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐ²Ð°Ð¹Ñ‚Ðµ Ð½Ð° Ð²Ð°ÑˆÐµÑ‚Ð¾ ÑÐ²Ð¾Ð±Ð¾Ð´Ð½Ð¾ Ð¢ÐÐ›ÐžÐ EXPIRE!<br/><br/>Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»Ð½Ð¾ Ð½Ð°Ð¼Ð°Ð»ÐµÐ½Ð¸Ðµ Ð¸ *** Ð‘Ð•Ð—ÐŸÐ›ÐÐ¢ÐÐž *** Ð”Ð¾ÑÑ‚Ð°Ð²ÐºÐ° Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°Ð½Ð¸.<br/><br/>ÐÐ¾Ð²Ð¸ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»Ð½Ð¸ Ñ…Ð°Ð¿Ñ‡ÐµÑ‚Ð°, Ð¿Ð¾-Ð´Ð¾Ð±Ñ€Ðµ Ð¾Ñ‚ Viagra, Fuck Ð² Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶ÐµÐ½Ð¸Ðµ Ð½Ð° Ñ‡Ð°ÑÐ¾Ð²Ðµ!<br/><br/>ÐšÐ»Ð¸ÐºÐ½ÐµÑ‚Ðµ Ð¾ÑÑ‚Ð°Ð½ÐµÑ‚Ðµ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°Ñ‚Ð° Ð¿Ð¾-Ð´Ð¾Ð»Ñƒ, Ð·Ð° Ð´Ð° Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ñ Ð¼Ð¸Ð³ Ð¾Ñ‚ÑÑ‚ÑŠÐ¿ÐºÐ°.<br/><br/>*********************************************<br/><br/>",
		rs: "<br/><br/>*********************************************<br/><br/>*** Ð§Ð•ÐšÐÐ¢Ð˜! *** ÐÐ• Ð›Ð•Ð¢ Ð¤Ñ€ÐµÐµ Ð˜Ð¾ÑƒÑ€ ÐšÐ£ÐŸÐžÐ Ð•ÐšÐ¡ÐŸÐ˜Ð Ð•!<br/><br/>ÐÐºÑ†Ð¸Ñ˜ÑÐºÐ¸ Ð¿Ð¾Ð¿ÑƒÑÑ‚ Ð¸ *** Ð‘Ð•Ð¡ÐŸÐ›ÐÐ¢ÐÐž *** Ð”Ð¾ÑÑ‚Ð°Ð²Ð° ÐÑ†Ñ‚Ð¸Ð²Ð°Ñ‚ÐµÐ´.<br/><br/>ÐÐ¾Ð²Ðµ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð» Ð¿Ð¸Ð»ÑƒÐ»Ðµ, Ð‘ÐµÑ‚Ñ‚ÐµÑ€ Ð¢Ñ…Ð°Ð½ Ð¦Ð¸Ð°Ð»Ð¸Ñ, ÐˆÐµÐ±Ð¸ ÑÐ°Ñ‚Ð¸Ð¼Ð°!<br/><br/>ÐšÐ»Ð¸ÐºÐ½Ð¸Ñ‚Ðµ ÐžÑÑ‚Ð°Ð½Ð¸ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸ Ð¸ÑÐ¿Ð¾Ð´ Ð´Ð° Ð¿Ñ€Ð¸Ð¼Ð°Ñ‚Ðµ Ð¸Ð½ÑÑ‚Ð°Ð½Ñ‚ Ð¿Ð¾Ð¿ÑƒÑÑ‚.<br/><br/>*********************************************<br/><br/>",
		ph: "<br/><br/>*********************************************<br/><br/>*** WAIT! *** HUWAG HAYAAN ANG FREE Na!<br/><br/>COUPON mawawalan ng bisa!<br/><br/>Espesyal na Diskwento at *** LIBRENG *** Pagpapadala activate.<br/><br/>New Original Pills, Better Than Viagra, Fuck For Hours! I-click STAY ON PAGE ibaba upang makatanggap ng iyong mga instant discount.<br/><br/>*********************************************<br/><br/>",
		hr: "<br/><br/>*********************************************<br/><br/>*** ÄŒEKATI! *** NE neka slobodno svoj kupon EXPIRE!<br/><br/>Akcijski popust i *** BESPLATNO *** Dostava aktivirano.<br/><br/>Novi Izvorni pilule, bolje od Viagre, JebeÅ¡ satima!<br/><br/>Kliknite Ostanak na stranici ispod primati instant popust.<br/><br/>*********************************************<br/><br/>",
		se: "<br/><br/>*********************************************<br/><br/>*** VÃ„NTA! *** LÃ…T INTE DIN KOSTNADSFRIA KUPONG BLI OGILTIG!<br/><br/>ASpeciell rabatt och GRATIS leverans har aktiverats.<br/><br/>Nya piller, bÃ¤ttre Ã¤n viagra, knulla i timmar!<br/><br/>Klicka pÃ¥ STANNA KVAR nedan fÃ¶r att motta din rabatt.<br/><br/>*********************************************<br/><br/>"

};

/* Start: language detection */
function trans_available(trObj, lang) {
	if (trObj[lang]) {
		return lang;
	} else {
		console.log("Translation not Found: " + lang);
		return "en"; // set to "en" when detected language is not in translation
	}
}

function detect_lang() {
	var cur_lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

	if (cur_lang == "zh-CN") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-SG") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-MY") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-CHS") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-HK") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-MO") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-TW") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-CHT") {
		cur_lang = "zh-Hant";
	} else if (cur_lang.length > 2) {
		cur_lang = cur_lang[0] + cur_lang[1];
	}
	return trans_available(alert_lang, cur_lang);
}

if (!lang) {
    var lang = detect_lang();
}
/* End: language detection */

var exitsplashpage =  getUrlWithParam('x=3');
var exitsplashmessage = alert_lang[lang];

function getUrlWithParam(param)
{
	var url = window.location.href;
				
	if (url.includes("x="))
	{
		url = url.replace(/(x=)[0-9]{1,2}/,param)
	}
	else
	{
		url = url + "&" + param;
	}
				
	return url; 
}

/**
 * Add cookie IsNotUnique on page closing event to detect unique visitors.
*/
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
function DisplayExitSplash() {
    if (PreventExitSplash == false) {
        // setting cookie and expires of the cookie
        //Cookies.set('IsNotUnique', 'true', {expires: 7});

        appendHtml(document.body, thePopup);
        document.getElementById("popup_exit").style.display = "block";
        document.getElementsByClassName("popup_overlay")[0].style.display = "block";
        document.getElementById("popupText").innerHTML = exitsplashmessage;

		
        setTimeout(function () {
            PreventExitSplash = true;
            window.location.href = exitsplashpage;
        }, 500);
		

	    var exitsplashmessageText = exitsplashmessage.replace(/<br\s*[\/]?>/gi, '\n').replace(/(<([^>]+)>)/ig,'');

        return exitsplashmessageText;
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function addClickEvent(a, i, func) {
    if (typeof a[i].onclick != 'function') {
        a[i].onclick = func;
    }
}

var a = document.getElementsByTagName('A');

for (var i = 0; i < a.length; i++) {
    if (a[i].target !== '_blank') {
        addClickEvent(a, i, function () {
            PreventExitSplash = true;
        });
    } else {
        addClickEvent(a, i, function () {
            PreventExitSplash = false;
        });
    }
}

var disablelinksfunc = function() {
    var a = document.getElementsByTagName('A');
    for (var i = 0; i < a.length; i++) {
        if (a[i].target !== '_blank') {
            addClickEvent(a, i, function() {
                PreventExitSplash = true;
            });
        } else {
            addClickEvent(a, i, function() {
                PreventExitSplash = false;
            });
        }
    }
};

addLoadEvent(disablelinksfunc);

var disableformsfunc = function() {
    var f = document.getElementsByTagName('FORM');
    for (var i = 0; i < f.length; i++) {
        if (!f[i].onclick) {
            f[i].onclick = function() {
                PreventExitSplash = true;
            }
        } else if (!f[i].onsubmit) {
            f[i].onsubmit = function() {
                PreventExitSplash = true;
            }
        }
    }
};

addLoadEvent(disableformsfunc);

docReady(function() {
    if ('1' == '1') {
        window.onbeforeunload = DisplayExitSplash;
    }
});