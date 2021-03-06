// ==UserScript==
// @name         Delicious StackOverflow Tag
// @namespace    deliciousStackOverflowTag
// @include      http://delicious.com/save?*
// @include      https://delicious.com/save?*
// @match        http://delicious.com/save?*
// @match        https://delicious.com/save?*
// @datecreated  2010-04-24
// @lastupdated  2010-08-05
// @version      0.1.1
// @author       Erik Vergobbi Vold
// @license      GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @description  This userscript will add a 'stackoverflow' tag to delicious bookmarks for stackoverflow.com, when you save them.
// ==/UserScript==

(function(d){
	var urlInput = d.getElementById('url');
	if(!urlInput) return;

	var tagsInput = d.getElementById('tags');
	if(!tagsInput) return;

	var domain = ( /^https?:\/\/([^\/]*)/i ).exec( urlInput.value );
	if(!/https?:\/\/stackoverflow\.com\//i.test(urlInput.value)) return;

	var newTag = "stackoverflow";
	if( tagsInput.value.match( "(^|\s)" + newTag + "(\s|$)" )  ) {
		return;
	}
	else if ( tagsInput.value.length == 0 || tagsInput.value.match( / $/ ) ) {
		tagsInput.value += newTag+" ";
	}
	else {
		tagsInput.value += " "+newTag+" ";
	}
})(document);
