// ==UserScript==
// @name        CashNhits
// @namespace   CashNhits
// @include     http://www.cashnhits.com/index.php?view=ptcads&*
// @include     http://www.cashnhits.com/index.php?view=account&ac=youtube_auto*
// @require     http://userscripts.org/scripts/source/163375.user.js?
// @include     http://*.*cks.com/
// @include     http://*dfoc.us/*
// @include     http://*df.ly/*
// @version     update
// ==/UserScript==

var wind=$(window)[0];var wparent=(wind.wrappedJSObject)?wind.wrappedJSObject:wind;var url=wparent.location.href;var sid=url.match(/sid=[0-9]+/)[0].replace("sid=","");var sid2=url.match(/sid2=[0-9]+/)[0].replace("sid2=","");var siduid=url.match(/siduid=[0-9]+/)[0].replace("siduid=","");if(wparent.location.href.indexOf("www.cashnhits.com/index.php?view=ptcads")!=-1){var arr=[],ctr=0;var div=$("<div>");var clickNum=ctr+1;var loading=0;if(!arr.length){clickNum=0}div.css({zIndex:1000000,textAlign:"center",padding:5,position:"fixed",width:299,height:20,background:"#00ffff",border:"2px solid blue",bottom:10,right:10}).text("working : "+clickNum+" / "+arr.length+" - loading : "+loading);$("body").css({position:"relative"}).append(div);$.each($("#content > .ptcaWrap"),function(k,v){var obj={href:$("> a",$(v)).attr("href"),jObj:$(v)};arr.push(obj)});console.log(arr.length);console.log(arr);function rec(ctr){loading=0;if(arr[ctr]){var frame=$("<iframe>");$("body").append(frame);frame.attr({src:arr[ctr].href}).css({position:"absolute",top:(Math.abs($(window).height()-475))/2,left:(Math.abs($(window).width()-675))/2,width:675,height:475,background:"#666",opacity:0,zIndex:-100});var frameW=(frame[0].contentWindow.wrappedJSObject)?frame[0].contentWindow.wrappedJSObject:frame[0].contentWindow;var inter=setInterval(function(){loading+=1;div.text("working : "+clickNum+" / "+arr.length+" - loading : "+loading);if(frameW.length){var chopHref=frameW.location.href.split(",")[1].split("=");var sid=chopHref[1].replace("&sid2","");var sid2=chopHref[2].replace("&siduid","");var siduid=chopHref[3];var pwd=0;var key=$('#captcha input[name="captcha_key"]',$(frame[0].contentDocument)).val();console.log(frameW.fulltimer);clearInterval(inter);console.log(frameW);function recAjax(pwd){$.ajax({url:"http://www.cashnhits.com/ptc.php?c=true&key="+key+"&pwd="+pwd+"&sid="+sid+"&sid2="+sid2+"&siduid="+siduid,success:function(e){var res=$.parseJSON(e);if(res.status=="ERROR"){pwd++;if(pwd<5){recAjax(pwd)}}if(res.status=="OK"){arr[ctr].jObj.text("done").css({background:"#000",color:"#FFF"});ctr++;clickNum=ctr+1;frame.remove();rec(ctr)}}})}var timerCtr=frameW.fulltimer;var timerMe=setInterval(function(){timerCtr--;div.text("searching: "+timerCtr)},1000);setTimeout(function(){clearInterval(timerMe);recAjax(pwd)},(frameW.fulltimer*1000));frameW.stop()}if(loading==100){clearInterval(inter);arr[ctr].jObj.text("failed").css({background:"red",color:"#FFF"});ctr++;clickNum=ctr+1;frame.remove();rec(ctr)}},100)}else{var timeReload=180;setInterval(function(){timeReload-=1;div.text("refreshing :"+timeReload)},1000);var win=window.open(objj[Math.floor((Math.random()*objj.length))]);setTimeout(function(){window.location.reload()},180000)}}rec(ctr);var div2=$("<div>");div2.css({zIndex:1000000,textAlign:"center",padding:5,position:"fixed",width:299,height:20,background:"#00ffff",border:"2px solid blue",bottom:50,right:10});$("body").css({position:"relative"}).append(div2);$.each($("a"),function(){if($(this).text()=="Autosurf"){$(this).addClass("AS");return false}});var AS=$(".AS").attr("href");var earnings=0.00014;var timer;function rec2(){$.ajax({url:"http://www.cashnhits.com/youtube_auto_credit.php?next=go&sid="+AS.split("=")[3].replace("&sid2","")+"&sid2="+sid2+"&siduid="+siduid,success:function(data){var res=$.parseJSON(data);if(res.status=="OK"){timer=res.timer/10;console.log(timer);console.log(res);var ajaxInter=setInterval(function(){div2.text("Autosurf earnings: "+earnings+" - timer: "+timer);timer--},1000);setTimeout(function(){clearInterval(ajaxInter);earnings+=0.00014;div2.text("ernings: "+earnings);rec2()},((timer+2)*1000))}if(res.status=="TOO_FAST"){var ten=10;var tenInter=setInterval(function(){div2.text("TOO FAST: wait "+(ten--))},1000);setTimeout(function(){clearInterval(tenInter);clearInterval(ajaxInter);rec2()},10000)}}})}rec2();$.each($("a"),function(){if($(this).text()=="Click Exchange"){$(this).addClass("CE");return false}});var div3=$("<div>");div3.css({zIndex:1000000,textAlign:"center",padding:5,position:"fixed",width:299,height:20,background:"#00ffff",border:"2px solid blue",bottom:90,right:10});$("body").css({position:"relative"}).append(div3);var CE=$(".CE").attr("href");var frame=$("<iframe>");$("body").append(frame);frame.attr({src:CE}).css({position:"absolute",top:(Math.abs($(window).height()-475))/2,left:(Math.abs($(window).width()-675))/2,width:675,height:475,background:"#666",opacity:0,zIndex:-1});var frameW=(frame[0].contentWindow.wrappedJSObject)?frame[0].contentWindow.wrappedJSObject:frame[0].contentWindow;var ceCtr=0;var interCE=setInterval(function(){if(frameW.length){console.log(frameW);clearInterval(interCE);var CEhref=$("iframe",$(frame[0].contentDocument)).attr("src").split("=");function ceHref(CEhref){var id=CEhref[4].replace("&sid","");var pretime=CEhref[3].replace("&id","");var sid=CEhref[5].replace("&sid2","");var sid2=CEhref[6].replace("&s","");var siduid=CEhref[9];var buttonClicked=0;function CEajaxRec(buttonClicked){$.ajax({url:"http://www.cashnhits.com/gpt.php?v=verify&buttonClicked="+buttonClicked+"&id="+id+"&type=ce&pretime="+pretime+"&sid="+sid+"&sid2="+sid2+"&s=1&type=ce&siduid="+siduid,success:function(res){if(res.indexOf("<title>Error</title>")>=0){buttonClicked++;if(buttonClicked==5){return false}CEajaxRec(buttonClicked)}else{if(res.indexOf("parent.location.href")>=0){var href=res.match(/href='[a-z0-9A-Z.?=&]+/g)[0].replace("href='","").replace('"',"");console.log(href);div3.text("Click exchange: "+(++ceCtr));$.ajax({url:href,success:function(_res){var href=_res.match(/src="[a-z0-9A-Z.?=&]+/g)[0].replace('src="',"").replace('"',"");div3.text("Click exchange: "+(++ceCtr));ceHref(href.split("="))}})}else{var href=res.match(/src="[a-z0-9A-Z.?=&]+/g)[0].replace('src="',"").replace('"',"");div3.text("Click exchange: "+(++ceCtr));ceHref(href.split("="))}}}})}div3.text("Click exchange: "+(ceCtr));setTimeout(function(){CEajaxRec(buttonClicked)},10000)}ceHref(CEhref);frameW.stop()}},100)}else{if(wparent.location.href.indexOf("ucks.com")!=-1){var wind=$(window)[0];var wparent=(wind.wrappedJSObject)?wind.wrappedJSObject:wind;$(function($){var secs=9;var div=$("<div>");div.css({textAlign:"center",padding:5,position:"fixed",width:80,height:20,background:"#00ffff",border:"2px solid blue",bottom:10,left:10}).text("counter : "+secs);$("body").css({position:"relative"}).append(div);$("#framebar").css({opacity:0});setInterval(function(){secs--;if(secs==0){wparent.close()}div.text("counter : "+secs)},1000)})}};