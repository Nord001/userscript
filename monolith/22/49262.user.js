// ==UserScript==
// @name           Ikariam Military Cargo (Blank Canvas)
// @namespace      http://blankcanvasweb.com
// @description	   Shows cargo icons and quantities in military view
// @include        http://s*.ikariam.*/index.php?view=militaryAdvisorMilitaryMovements*
// @version		   0.01
// @author		   Jerome Dane
// ==/UserScript==

GM_addStyle('.resourcesOnBoard h5 { display:none; }\
			.resourcesOnBoard .unitBox { width:35px; float:left; margin-top:4px; text-align:center; }\
			.resourcesOnBoard .unitBox img { width:20px; }\
			.resourcesOnBoard .unitBox .iconSmall { padding-top:4px; }\
			.resourcesOnBoard .count { text-align:center; font-weight:normal; font-size:10px; }\
			.resourcesOnBoard .icon { text-align:center; }\
			tr.own td:first-child + td {  }');

var elems = document.getElementById('mainview').getElementsByTagName('div');
for(var i = 0; i < elems.length; i++) {
	if(elems[i].className == 'tooltip2' && elems[i].innerHTML.match(/count/)) {
		try {
			var src = elems[i].innerHTML;
			var target = elems[i].parentNode;
			target.wrappedJSObject.onmouseover = null;
			target.style.cursor = "auto";
			target.innerHTML = "";
			target.innerHTML += '<table class="resourcesOnBoard" style="width:275px;">' + src + '</table>';	
		} catch(e) {}
	}
}