// ==UserScript==
// @name	    	Super for Airline Manager
// @description	Super for Facebook's Airline Manager
// @author	  	tony2504
// @namespace   tony2504scripts
// @version	    0.1
// @include	    http://airlinemanager.activewebs.dk/am/*
// @resource    jQuery       http://code.jquery.com/jquery-latest.js
// @resource    jQueryCookie http://plugins.jquery.com/files/jquery.cookie.js.txt
// @resource    normalLogo   http://img826.imageshack.us/img826/2507/normaljq.jpg
// @resource    trustedLogo  http://img151.imageshack.us/img151/9458/trusted.jpg
// ==/UserScript==
(function(){var h,u,i,o,b;h=document.createElement("script");h.type="text/javascript";h.src=GM_getResourceURL("jQuery");document.getElementsByTagName("head").item(0).appendChild(h);u=document.createElement("script");u.type="text/javascript";u.src=GM_getResourceURL("jQueryCookie");document.getElementsByTagName("head").item(0).appendChild(u);function l(){if(typeof unsafeWindow.jQuery=="undefined"||typeof unsafeWindow.jQuery.cookie=="undefined"){window.setTimeout(l,100)}else{$=unsafeWindow.jQuery;f()}}l();o=GM_getResourceURL("normalLogo");b=GM_getResourceURL("trustedLogo");function f(){$(document).ready(function(){if($("table:eq(0) td:eq(0) div:eq(0)").css("backgroundImage").substr(-13,11)=="trusted.jpg"){$("table:eq(0) td:eq(0) div:eq(0)").css("backgroundImage","url("+b+")");$("table:eq(0) td:eq(0) div:eq(0) div").css("left","257px")}else{$("table:eq(0) td:eq(0) div:eq(0)").css("backgroundImage","url("+o+")");$("table:eq(0) td:eq(0) div:eq(0) div").css("left","321px")}$("table:eq(0) td:eq(0) div:eq(0)").append('<input type="button" class="autoButtons" id="startAutoInterval" value="Start" />');$("table:eq(0) td:eq(0) div:eq(0)").append('<input type="button" class="autoButtons" id="stopAutoInterval" value="Stop" />');$("table:eq(0) td:eq(0) div:eq(0)").css("position","relative");$(".autoButtons").css("position","absolute").css("right","7px").css("bottom","5px").css("width","50px");$("#startAutoInterval").click(function(){i=setInterval(m,1000*60*10);$("#startAutoInterval").hide();$("#stopAutoInterval").show();m()});$("#stopAutoInterval").click(function(){clearInterval(i);$("#stopAutoInterval").hide();$("#startAutoInterval").show()}).hide();q();c();setInterval(c,1000)})}function c(){if($("#optionsPanel").length==0&&$(".l_menu").length>0){var w=$(".l_menu td").length-1;if(w==1||w==2||w==4){$(".l_menu td:eq("+w+")").parent().parent().append("<tr><td></td></tr>");$(".l_menu td:eq("+(w+1)+")").addClass("menu_bg").css("fontSize","12px");$(".l_menu td:eq("+(w+1)+")").html('<div id="optionsPanel" style="color: white; text-align: center; direction: ltr;"></div>')}else{$(".l_menu td:eq("+w+")").addClass("menu_bg").css("fontSize","12px");$(".l_menu td:eq("+w+")").html('<div id="optionsPanel" style="color: white; text-align: center; direction: ltr;"></div>')}$("#optionsPanel").html('<u><b>Advertisement</b></u><br />Maximum price: <br /><input style="width: 100px;" type="text" id="sM_adv_maxPrice" value="'+$.cookie("sM_adv_maxPrice")+'" /><br />Days: <br /><select id="sM_adv_days" style="width: 100px;"><option value="1"'+($.cookie("sM_adv_days")==1?' selected="selected"':"")+'>1 Day</option><option value="2"'+($.cookie("sM_adv_days")==2?' selected="selected"':"")+'>2 Days</option><option value="3"'+($.cookie("sM_adv_days")==3?' selected="selected"':"")+'>3 Days</option><option value="4"'+($.cookie("sM_adv_days")==4?' selected="selected"':"")+'>4 Days</option><option value="5"'+($.cookie("sM_adv_days")==5?' selected="selected"':"")+'>5 Days</option><option value="6"'+($.cookie("sM_adv_days")==6?' selected="selected"':"")+'>6 Days</option><option value="7"'+($.cookie("sM_adv_days")==7?' selected="selected"':"")+'>7 Days</option></select><br />Type: <br /><select id="sM_adv_type" style="width: 100px;"><option value="1"'+($.cookie("sM_adv_type")==1?' selected="selected"':"")+'>Newspaper advertising</option><option value="2"'+($.cookie("sM_adv_type")==2?' selected="selected"':"")+'>1 tv commercial</option><option value="3"'+($.cookie("sM_adv_type")==3?' selected="selected"':"")+'>Internet: In major search engines</option><option value="4"'+($.cookie("sM_adv_type")==4?' selected="selected"':"")+'>Internet: In major social networks</option><option value="5"'+($.cookie("sM_adv_type")==5?' selected="selected"':"")+'>Bus and Taxi posters</option><option value="6"'+($.cookie("sM_adv_type")==6?' selected="selected"':"")+'>10 tv commercials + newspaper advertising</option><option value="7"'+($.cookie("sM_adv_type")==7?' selected="selected"':"")+'>Cross country newspaper advertising</option><option value="8"'+($.cookie("sM_adv_type")==8?' selected="selected"':"")+'>Billboards on major streets</option><option value="9"'+($.cookie("sM_adv_type")==9?' selected="selected"':"")+'>Billboards on 1 major airport</option><option value="10"'+($.cookie("sM_adv_type")==10?' selected="selected"':"")+'>Billboards on 20 international airports</option></select><br /><br/><u><b>Fuel</b></u><br />Maximum price: <br /><input style="width: 100px;" type="text" id="sM_fuel_maxPrice" value="'+$.cookie("sM_fuel_maxPrice")+'" /><br />Maximum fuel: <br /><input style="width: 79px;" type="text" id="sM_fuel_maxFuel" value="'+$.cookie("sM_fuel_maxFuel")+'" /> lbs<br />Amout: <br /><input style="width: 79px;" type="text" id="sM_fuel_amout" value="'+$.cookie("sM_fuel_amout")+'" /> lbs<br /><br/><u><b>Other</b></u><br /><input type="checkbox" id="sM_doRepairs" value="1"'+($.cookie("sM_doRepairs")==1?' checked="checked"':"")+' /> Do repairs&nbsp;&nbsp;&nbsp;<br /><input type="checkbox" id="sM_doCChecks" value="1"'+($.cookie("sM_doCChecks")==1?' checked="checked"':"")+' /> Do C-Checks<br /><br /><input type="button" style="width: 103px;" id="sM_save" value="Save" />');$("#sM_save").click(function(){$.cookie("sM_adv_maxPrice",parseInt($("#sM_adv_maxPrice").val()),{expires:1000});$.cookie("sM_adv_days",parseInt($("#sM_adv_days").val()),{expires:1000});$.cookie("sM_adv_type",parseInt($("#sM_adv_type").val()),{expires:1000});$.cookie("sM_fuel_maxPrice",parseInt($("#sM_fuel_maxPrice").val()),{expires:1000});$.cookie("sM_fuel_maxFuel",parseInt($("#sM_fuel_maxFuel").val()),{expires:1000});$.cookie("sM_fuel_amout",parseInt($("#sM_fuel_amout").val()),{expires:1000});$.cookie("sM_doRepairs",($("#sM_doRepairs:checked").val()?parseInt($("#sM_doRepairs").val()):0),{expires:1000});$.cookie("sM_doCChecks",($("#sM_doCChecks:checked").val()?parseInt($("#sM_doCChecks").val()):0),{expires:1000});alert("Saved!")})}}function q(){if($.cookie("sM_fuel_maxPrice")==null){$.cookie("sM_adv_maxPrice",35000,{expires:1000});$.cookie("sM_adv_days",7,{expires:1000});$.cookie("sM_adv_type",10,{expires:1000});$.cookie("sM_fuel_maxPrice",700,{expires:1000});$.cookie("sM_fuel_maxFuel",2000000,{expires:1000});$.cookie("sM_fuel_amout",1000000,{expires:1000});$.cookie("sM_doRepairs",1,{expires:1000});$.cookie("sM_doCChecks",1,{expires:1000})}}function m(){$("#hroute").html("");$("a[onclick]:eq(1)").click();setTimeout(k,1000)}function k(){if($(".l_menu a").length==0){setTimeout(k,1000)}else{$(".l_menu a:eq(2)").click();setTimeout(j,1000)}}function j(){if($("form table td").length==0){setTimeout(j,1000)}else{var x,w,y;x=a($("form table td:eq("+((3*$.cookie("sM_adv_type"))-1)+")").html());w=$("form:eq(0)").attr("action");y={};y.routes="all";y.type=$.cookie("sM_adv_type");y.days=$.cookie("sM_adv_days");if(x<=$.cookie("sM_adv_maxPrice")){$.post(w,y,function(){r()})}else{r()}}}function r(){$("a[onclick]:eq(0)").click();setTimeout(t,1000)}function t(){if($("table:eq(7) td").length==0){setTimeout(t,1000)}else{var x,w;x=a($("table:eq(7) td:eq(1) b").html());w=a($("table:eq(7) td:eq(3) b").html());if((w<=$.cookie("sM_fuel_maxPrice"))&&(x<=$.cookie("sM_fuel_maxFuel"))){$("#amountto").val($.cookie("sM_fuel_amout"));$("input[onclick]").click();setTimeout(s,2000)}else{s()}}}function s(){unsafeWindow.toggle("hfuel","0");$("a[onclick]:eq(2)").click();setTimeout(g,1000)}function g(){if($("table:eq(9) b").length==0){setTimeout(g,1000)}else{var y=1000,x,w;if($.cookie("sM_doRepairs")>0){x=$("table:eq(15) td").length/4;for(w=0;w<x;w++){setTimeout(function(){p(w)},y);y=y+1000}}if($.cookie("sM_doCChecks")>0){x=$("table:eq(17) td").length/4;for(w=0;w<x;w++){setTimeout(function(){v(w)},y);y=y+1000}}setTimeout(n,y+1000)}}function p(w){$("table:eq(15) a:eq("+((2*(w+1))-1)+")").click()}function v(w){$("table:eq(17) a:eq("+((2*(w+1))-1)+")").click()}function n(){$("a[onclick]:eq(1)").click();setTimeout(e,1000)}function e(){if($("#starter").length==0){setTimeout(e,1000)}else{d()}}function d(){if($("#flight").text().indexOf("flying or unable to fly")>0){setTimeout(function(){$("a[onclick]:eq(1)").click()},1000)}else{$("#starter input").click();setTimeout(d,3000)}}function a(w){return parseInt(w.replace(/[^0-9]/g,""))}})();