// ==UserScript==
// @name          Wikipedia polyglot dictionary (Japanese Version)
// @namespace     http://d.hatena.ne.jp/Koumei_S/
// @description	  uses Wikipedia(and other Wikimedia Projects) as a polyglot dictionary
// @include       http://*.wikipedia.org/wiki/*
// @include       http://*.wikimedia.org/wiki/*
// @include       http://*.wiktionary.org/wiki/*
// @include       http://*.wikibooks.org/wiki/*
// @include       http://*.wikiquote.org/wiki/*
// @include       http://*.wikisource.org/wiki/*
// @include       http://*.wikinews.org/wiki/*
// @include       http://*.wikiversity.org/wiki/*
// @version       1.3
// ==/UserScript==

/*
ver 1.0
	Release
ver 1.1
	adds Tooltip
ver 1.2
	fixed a bug(wikiemdia?)
ver 1.3
	incorporated alala's idea. Thanks (:->)
*/
(function(){
	var langlist = {
	'en':'\u82f1\u8a9e',
	'de':'\u30c9\u30a4\u30c4\u8a9e',
	'fr':'\u30d5\u30e9\u30f3\u30b9\u8a9e',
	'pl':'\u30dd\u30fc\u30e9\u30f3\u30c9\u8a9e',
	'ja':'\u65e5\u672c\u8a9e',
	'it':'\u30a4\u30bf\u30ea\u30a2\u8a9e',
	'nl':'\u30aa\u30e9\u30f3\u30c0\u8a9e',
	'pt':'\u30dd\u30eb\u30c8\u30ac\u30eb\u8a9e',
	'es':'\u30b9\u30da\u30a4\u30f3\u8a9e',
	'sv':'\u30b9\u30a6\u30a7\u30fc\u30c7\u30f3\u8a9e',
	'ru':'\u30ed\u30b7\u30a2\u8a9e',
	'zh':'\u4e2d\u56fd\u8a9e',
	'fi':'\u30d5\u30a3\u30f3\u30e9\u30f3\u30c9\u8a9e',
	'no':'\u30ce\u30eb\u30a6\u30a7\u30fc\u8a9e\uff08\u30d6\u30fc\u30af\u30e2\u30fc\u30eb\uff09',
	'eo':'\u30a8\u30b9\u30da\u30e9\u30f3\u30c8',
	'tr':'\u30c8\u30eb\u30b3\u8a9e',
	'sk':'\u30b9\u30ed\u30d0\u30ad\u30a2\u8a9e',
	'cs':'\u30c1\u30a7\u30b3\u8a9e',
	'ro':'\u30eb\u30fc\u30de\u30cb\u30a2\u8a9e',
	'ca':'\u30ab\u30bf\u30eb\u30fc\u30cb\u30e3\u8a9e',
	'da':'\u30c7\u30f3\u30de\u30fc\u30af\u8a9e',
	'uk':'\u30a6\u30af\u30e9\u30a4\u30ca\u8a9e',
	'hu':'\u30cf\u30f3\u30ac\u30ea\u30fc\u8a9e',
	'id':'\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u8a9e',
	'he':'\u30d8\u30d6\u30e9\u30a4\u8a9e',
	'lmo':'\u30ed\u30f3\u30d0\u30eb\u30c9\u8a9e',
	'sl':'\u30b9\u30ed\u30d9\u30cb\u30a2\u8a9e',
	'lt':'\u30ea\u30c8\u30a2\u30cb\u30a2\u8a9e',
	'sr':'\u30bb\u30eb\u30d3\u30a2\u8a9e',
	'bg':'\u30d6\u30eb\u30ac\u30ea\u30a2\u8a9e',
	'ko':'\u671d\u9bae\u8a9e',
	'et':'\u30a8\u30b9\u30c8\u30cb\u30a2\u8a9e',
	'ar':'\u30a2\u30e9\u30d3\u30a2\u8a9e',
	'ceb':'\u30bb\u30d6\u30a2\u30ce\u8a9e',
	'te':'\u30c6\u30eb\u30b0\u8a9e',
	'hr':'\u30af\u30ed\u30a2\u30c1\u30a2\u8a9e',
	'vo':'\u30f4\u30a9\u30e9\u30d4\u30e5\u30af',
	'gl':'\u30ac\u30ea\u30b7\u30a2\u8a9e',
	'el':'\u30ae\u30ea\u30b7\u30a2\u8a9e',
	'th':'\u30bf\u30a4\u8a9e',
	'nn':'\u30ce\u30eb\u30a6\u30a7\u30fc\u8a9e\uff08\u30cb\u30fc\u30ce\u30b7\u30e5\u30af\uff09',
	'new':'\u30cd\u30d1\u30fc\u30eb\u30fb\u30d0\u30b5\u8a9e',
	'fa':'\u30da\u30eb\u30b7\u30a2\u8a9e',
	'ms':'\u30de\u30ec\u30fc\u8a9e',
	'vi':'\u30d9\u30c8\u30ca\u30e0\u8a9e',
	'bs':'\u30dc\u30b9\u30cb\u30a2\u8a9e',
	'eu':'\u30d0\u30b9\u30af\u8a9e',
	'bpy':'\u30d3\u30b7\u30e5\u30cc\u30d7\u30ea\u30e4\u30fb\u30de\u30cb\u30d7\u30ea\u8a9e',
	'simple':'\u30b7\u30f3\u30d7\u30eb\u82f1\u8a9e',
	'sq':'\u30a2\u30eb\u30d0\u30cb\u30a2\u8a9e',
	'is':'\u30a2\u30a4\u30b9\u30e9\u30f3\u30c9\u8a9e',
	'lb':'\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u8a9e',
	'bn':'\u30d9\u30f3\u30ac\u30eb\u8a9e',
	'ka':'\u30b0\u30eb\u30b8\u30a2\u8a9e',
	'io':'\u30a4\u30c9\u8a9e',
	'br':'\u30d6\u30eb\u30c8\u30f3\u8a9e',
	'la':'\u30e9\u30c6\u30f3\u8a9e',
	'nap':'\u30ca\u30dd\u30ea\u8a9e',
	'hi':'\u30d2\u30f3\u30c7\u30a3\u30fc\u8a9e',
	'sh':'\u30bb\u30eb\u30d3\u30a2\u30fb\u30af\u30ed\u30a2\u30c1\u30a2\u8a9e',
	'ta':'\u30bf\u30df\u30eb\u8a9e',
	'su':'\u30b9\u30f3\u30c0\u8a9e',
	'mk':'\u30de\u30b1\u30c9\u30cb\u30a2\u8a9e',
	'mr':'\u30de\u30e9\u30fc\u30c6\u30a3\u30fc\u8a9e',
	'jv':'\u30b8\u30e3\u30ef\u8a9e',
	'cy':'\u30a6\u30a7\u30fc\u30eb\u30ba\u8a9e',
	'scn':'\u30b7\u30c1\u30ea\u30a2\u8a9e',
	'nds':'\u4f4e\u30b6\u30af\u30bb\u30f3\u8a9e',
	'lv':'\u30e9\u30c8\u30d3\u30a2\u8a9e',
	'ku':'\u30af\u30eb\u30c9\u8a9e',
	'wa':'\u30ef\u30ed\u30f3\u8a9e',
	'oc':'\u30aa\u30c3\u30af\u8a9e',
	'ast':'\u30a2\u30b9\u30c8\u30a5\u30ea\u30a2\u8a9e',
	'pms':'\u30d4\u30a8\u30e2\u30f3\u30c6\u8a9e',
	'af':'\u30a2\u30d5\u30ea\u30ab\u30fc\u30f3\u30b9\u8a9e',
	'tg':'\u30bf\u30b8\u30af\u8a9e',
	'be-x-old':'\u30d9\u30e9\u30eb\u30fc\u30b7\u8a9e(Tarashkevitsa)',
	'ru-sib':'\u30b7\u30d9\u30ea\u30a2\u8a9e',
	'az':'\u30a2\u30bc\u30eb\u30d0\u30a4\u30b8\u30e3\u30f3\u8a9e',
	'ht':'\u30cf\u30a4\u30c1\u8a9e',
	'ksh':'\u30ea\u30d7\u30a2\u30fc\u30ea\u8a9e',
	'an':'\u30a2\u30e9\u30b4\u30f3\u8a9e',
	'tl':'\u30bf\u30ac\u30ed\u30b0\u8a9e',
	'ur':'\u30a6\u30eb\u30c9\u30a5\u30fc\u8a9e',
	'cv':'\u30c1\u30e5\u30f4\u30a1\u30b7\u8a9e',
	'uz':'\u30a6\u30ba\u30d9\u30af\u8a9e',
	'co':'\u30b3\u30eb\u30b7\u30ab\u8a9e',
	'be':'\u30d9\u30e9\u30eb\u30fc\u30b7\u8a9e',
	'ga':'\u30a2\u30a4\u30eb\u30e9\u30f3\u30c9\u8a9e',
	'vec':'\u30f4\u30a7\u30cd\u30c4\u30a3\u30a2\u8a9e',
	'fy':'\u30d5\u30ea\u30b8\u30a2\u8a9e',
	'kn':'\u30ab\u30f3\u30ca\u30c0\u8a9e',
	'sw':'\u30b9\u30ef\u30d2\u30ea\u8a9e',
	'gd':'\u30b9\u30b3\u30c3\u30c8\u30e9\u30f3\u30c9\u30fb\u30b2\u30fc\u30eb\u8a9e',
	'zh-yue':'\u5e83\u6771\u8a9e',
	'yi':'\u30a4\u30c7\u30a3\u30c3\u30b7\u30e5\u8a9e',
	'tt':'\u30bf\u30bf\u30fc\u30eb\u8a9e',
	'sa':'\u30b5\u30f3\u30b9\u30af\u30ea\u30c3\u30c8',
	'yo':'\u30e8\u30eb\u30d0\u8a9e',
	'ia':'\u30a4\u30f3\u30bf\u30fc\u30ea\u30f3\u30b0\u30a2',
	'pam':'\u30d1\u30f3\u30d1\u30f3\u30ac\u8a9e',
	'hy':'\u30a2\u30eb\u30e1\u30cb\u30a2\u8a9e',
	'li':'\u30ea\u30f3\u30d6\u30eb\u30b0\u8a9e',
	'als':'\u30a2\u30ec\u30de\u30f3\u8a9e',
	'map-bms':'\u30d0\u30cb\u30e5\u30de\u30b9\u8a9e',
	'ml':'\u30de\u30e9\u30e4\u30fc\u30e9\u30e0\u8a9e',
	'am':'\u30a2\u30e0\u30cf\u30e9\u8a9e',
	'nrm':'\u30ce\u30eb\u30de\u30f3\u8a9e',
	'zh-min-nan':'?\u5357\u8a9e',
	'fo':'\u30d5\u30a7\u30ed\u30fc\u8a9e',
	'qu':'\u30b1\u30c1\u30e5\u30a2\u8a9e',
	'nds-nl':'\u30aa\u30e9\u30f3\u30c0\u4f4e\u30b6\u30af\u30bb\u30f3\u8a9e',
	'se':'\u5317\u90e8\u30b5\u30fc\u30df\u8a9e',
	'bh':'\u30d3\u30cf\u30fc\u30eb\u8a9e',
	'pi':'\u30d1\u30fc\u30ea\u8a9e',
	'hsb':'\u9ad8\u5730\u30bd\u30eb\u30d6\u8a9e',
	'ilo':'\u30a4\u30ed\u30ab\u30ce\u8a9e',
	'fur':'\u30d5\u30ea\u30a6\u30ea\u8a9e',
	'war':'\u30ef\u30e9\u30a4\u8a9e',
	'nov':'\u30ce\u30f4\u30a3\u30a2\u30eb',
	'bat-smg':'\u30b5\u30e2\u30ae\u30c6\u30a3\u30a2\u8a9e',
	'sco':'\u30b9\u30b3\u30c3\u30c8\u30e9\u30f3\u30c9\u8a9e',
	'frp':'\u30a2\u30eb\u30d4\u30bf\u30f3\u8a9e',
	'nah':'\u30ca\u30ef\u30c8\u30eb\u8a9e',
	'vls':'\u897f\u30d5\u30e9\u30de\u30f3\u8a9e',
	'os':'\u30aa\u30bb\u30c3\u30c8\u8a9e',
	'lij':'\u30ea\u30b0\u30ea\u30a2\u8a9e',
	'csb':'\u30ab\u30b7\u30e5\u30fc\u30d6\u8a9e',
	'diq':'\u30b6\u30b6\u30ad\u8a9e',
	'mt':'\u30de\u30eb\u30bf\u8a9e',
	'dv':'\u30c7\u30a3\u30d9\u30d2\u8a9e',
	'zh-classical':'\u6f22\u6587',
	'pdc':'\u30da\u30f3\u30b7\u30eb\u30d0\u30cb\u30a2\u30c9\u30a4\u30c4\u8a9e',
	'ne':'\u30cd\u30d1\u30fc\u30eb\u8a9e',
	'kw':'\u30b3\u30fc\u30f3\u30a6\u30a9\u30fc\u30eb\u8a9e',
	'fiu-vro':'\u30f4\u30a9\u30ed\u8a9e',
	'to':'\u30c8\u30f3\u30ac\u8a9e',
	'lad':'\u30b8\u30e5\u30c7\u30ba\u30e2\u8a9e',
	'pag':'\u30d1\u30f3\u30ac\u30b7\u30ca\u30f3\u8a9e',
	'ps':'\u30d1\u30b7\u30e5\u30c8\u30fc\u8a9e',
	'tk':'\u30c8\u30eb\u30af\u30e1\u30f3\u8a9e',
	'bar':'\u30d0\u30f4\u30a1\u30ea\u30a2\u8a9e',
	'ang':'\u53e4\u82f1\u8a9e',
	'kk':'\u30ab\u30b6\u30d5\u8a9e',
	'ln':'\u30ea\u30f3\u30ac\u30e9\u8a9e',
	'mi':'\u30de\u30aa\u30ea\u8a9e',
	'mn':'\u30e2\u30f3\u30b4\u30eb\u8a9e',
	'jbo':'\u30ed\u30b8\u30d0\u30f3',
	'ty':'\u30bf\u30d2\u30c1\u8a9e',
	'arc':'\u30a2\u30e9\u30e0\u8a9e',
	'rm':'\u30ed\u30de\u30f3\u30b7\u30e5\u8a9e',
	'ky':'\u30ad\u30eb\u30ae\u30b9\u8a9e',
	'mo':'\u30e2\u30eb\u30c9\u30d0\u8a9e',
	'wo':'\u30a6\u30a9\u30ed\u30d5\u8a9e',
	'ks':'\u30ab\u30b7\u30df\u30fc\u30eb\u8a9e',
	'gu':'\u30b0\u30b8\u30e3\u30e9\u30fc\u30c8\u8a9e',
	'roa-rup':'\u30a2\u30eb\u30fc\u30de\u30cb\u30a2\u8a9e',
	'tpi':'\u30c8\u30af\u30fb\u30d4\u30b7\u30f3',
	'ie':'\u30a4\u30f3\u30bf\u30fc\u30ea\u30f3\u30b0',
	'glk':'\u30ae\u30e9\u30ad\u8a9e',
	'kab':'\u30ab\u30d3\u30eb\u8a9e',
	'wuu':'\u5449\u65b9\u8a00',
	'kg':'\u30b3\u30f3\u30b4\u8a9e',
	'tet':'\u30c6\u30c8\u30a5\u30f3\u8a9e',
	'rmy':'\u30ed\u30de\u8a9e',
	'udm':'\u30a6\u30c9\u30e0\u30eb\u30c8\u8a9e',
	'na':'\u30ca\u30a6\u30eb\u8a9e',
	'sc':'\u30b5\u30eb\u30c7\u30fc\u30cb\u30e3\u8a9e',
	'tokipona':'\u30c8\u30ad\u30dd\u30ca',
	'mg':'\u30de\u30c0\u30ac\u30b9\u30ab\u30eb\u8a9e',
	'iu':'\u30a4\u30cc\u30af\u30c6\u30a3\u30c8\u30a5\u30c3\u30c8\u8a9e',
	'so':'\u30bd\u30de\u30ea\u8a9e',
	'eml':'\u30a8\u30df\u30ea\u30a2\u30fb\u30ed\u30de\u30fc\u30cb\u30e3\u8a9e',
	'ig':'\u30a4\u30dc\u8a9e',
	'cu':'\u53e4\u4ee3\u6559\u4f1a\u30b9\u30e9\u30f4\u8a9e',
	'bo':'\u30c1\u30d9\u30c3\u30c8\u8a9e',
	'pa':'\u30d1\u30f3\u30b8\u30e3\u30fc\u30d6\u8a9e',
	'chr':'\u30c1\u30a7\u30ed\u30ad\u30fc\u8a9e',
	'lo':'\u30e9\u30fc\u30aa\u8a9e',
	'si':'\u30b7\u30f3\u30cf\u30e9\u8a9e',
	'cbk-zam':'\u30b5\u30f3\u30dc\u30a2\u30f3\u30ac\u30fb\u30c1\u30e3\u30d0\u30ab\u30ce\u8a9e',
	'got':'\u30b4\u30fc\u30c8\u8a9e',
	'sd':'\u30b7\u30f3\u30c9\u8a9e',
	'ba':'\u30d0\u30b7\u30ad\u30fc\u30eb\u8a9e',
	'om':'\u30aa\u30ed\u30e2\u8a9e',
	'gv':'\u30de\u30f3\u5cf6\u8a9e',
	'as':'\u30a2\u30c3\u30b5\u30e0\u8a9e',
	'sm':'\u30b5\u30e2\u30a2\u8a9e',
	'hak':'\u5ba2\u5bb6\u8a9e',
	'av':'\u30a2\u30f4\u30a1\u30eb\u8a9e',
	'km':'\u30af\u30e1\u30fc\u30eb\u8a9e',
	'cdo':'?\u6771\u8a9e',
	'bm':'\u30d0\u30f3\u30d0\u30e9\u8a9e',
	'ti':'\u30c6\u30a3\u30b0\u30ea\u30cb\u30e3\u8a9e',
	'zea':'\u30bc\u30fc\u30e9\u30f3\u30c8\u8a9e',
	'ce':'\u30c1\u30a7\u30c1\u30a7\u30f3\u8a9e',
	'cr':'\u30af\u30ea\u30fc\u8a9e',
	'zu':'\u30ba\u30fc\u30eb\u30fc\u8a9e',
	'ik':'\u30a4\u30cc\u30d4\u30a2\u30c3\u30af\u8a9e',
	'my':'\u30d3\u30eb\u30de\u8a9e',
	'nv':'\u30ca\u30d0\u30db\u8a9e',
	'pap':'\u30d1\u30d4\u30a2\u30e1\u30f3\u30c8',
	'tlh':'\u30af\u30ea\u30f3\u30b4\u30f3\u8a9e',
	'ab':'\u30a2\u30d6\u30cf\u30ba\u8a9e',
	'pih':'\u30ce\u30fc\u30d5\u30a9\u30fc\u30af\u8a9e\u30fb\u30d4\u30c8\u30b1\u30a2\u30f3\u8a9e',
	'roa-tara':'\u30bf\u30e9\u30f3\u30c8\u8a9e',
	'ay':'\u30a2\u30a4\u30de\u30e9\u8a9e',
	'kl':'\u30b0\u30ea\u30fc\u30f3\u30e9\u30f3\u30c9\u8a9e',
	'bug':'\u30d6\u30ae\u30b9\u8a9e',
	'bxr':'\u30d6\u30ea\u30e4\u30fc\u30c8\u8a9e',
	'haw':'\u30cf\u30ef\u30a4\u8a9e',
	'dz':'\u30be\u30f3\u30ab\u8a9e',
	'kv':'\u30b3\u30df\u8a9e',
	'mzn':'\u30de\u30fc\u30b6\u30f3\u30c0\u30e9\u30fc\u30f3\u8a9e',
	'xh':'\u30b3\u30b5\u8a9e',
	'ug':'\u30a6\u30a4\u30b0\u30eb\u8a9e',
	'ss':'\u30b9\u30ef\u30c6\u30a3\u8a9e',
	'gn':'\u30b0\u30a2\u30e9\u30cb\u30fc\u8a9e',
	'st':'\u30bd\u30c8\u8a9e',
	'rw':'\u30eb\u30ef\u30f3\u30c0\u8a9e',
	'bi':'\u30d3\u30b9\u30e9\u30de\u8a9e',
	've':'\u30f4\u30a7\u30f3\u30c0\u8a9e',
	'hz':'\u30d8\u30ec\u30ed\u8a9e',
	'fj':'\u30d5\u30a3\u30b8\u30fc\u8a9e',
	'ny':'\u30c1\u30a7\u30ef\u8a9e',
	'xal':'\u30aa\u30a4\u30e9\u30c8\u8a9e',
	'ak':'\u30a2\u30ab\u30f3\u8a9e',
	'tn':'\u30c4\u30ef\u30ca\u8a9e',
	'or':'\u30aa\u30ea\u30e4\u30fc\u8a9e',
	'ee':'\u30a8\u30a6\u30a7\u8a9e',
	'sn':'\u30b7\u30e7\u30ca\u8a9e',
	'tum':'\u30c8\u30a5\u30f3\u30d6\u30ab\u8a9e',
	'za':'\u30c1\u30ef\u30f3\u8a9e',
	'ha':'\u30cf\u30a6\u30b5\u8a9e',
	'ff':'\u30d5\u30e9\u8a9e',
	'ki':'\u30ad\u30af\u30e6\u8a9e',
	'sg':'\u30b5\u30f3\u30b4\u8a9e',
	'ii':'\u5f5d\u8a9e',
	'lbe':'\u30e9\u30af\u8a9e',
	'tw':'\u30c8\u30a6\u30a3\u8a9e',
	'lg':'\u30eb\u30ac\u30f3\u30c0\u8a9e',
	'mh':'\u30de\u30fc\u30b7\u30e3\u30eb\u8a9e',
	'rn':'\u30eb\u30f3\u30c7\u30a3\u8a9e',
	'mus':'\u30de\u30b9\u30b3\u30ae\u8a9e',
	'aa':'\u30a2\u30d5\u30a1\u30eb\u8a9e',
	'ho':'\u30e2\u30c8\u30a5\u8a9e',
	'cho':'\u30c1\u30e7\u30af\u30c8\u30fc\u8a9e',
	'chy':'\u30b7\u30e3\u30a4\u30a2\u30f3\u8a9e',
	'ts':'\u30c4\u30a9\u30f3\u30ac\u8a9e',
	'ch':'\u30c1\u30e3\u30e2\u30ed\u8a9e',
	'kr':'\u30ab\u30cc\u30ea\u8a9e',
	'ng':'\u30f3\u30c9\u30f3\u30ac\u8a9e',
	'kj':'\u30af\u30ef\u30cb\u30e3\u30de\u8a9e',
	};
	var linklist = document.evaluate("//li[starts-with(@class,'interwiki-')]//a", document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for(var i=0;i<linklist.snapshotLength;i++){
		var item = linklist.snapshotItem(i);
		var item_lang = item.host.match(/^[\w-]{2,}(?=\.)/);
		var item_word = decodeURI(item.href.match(/\/wiki\/(.*)$/)[1]);
		if(langlist[item_lang]){
			if(item_word){
				item.innerHTML = langlist[item_lang] + ': ' + item_word.replace("_"," ");
				item.title = item.innerHTML; //item_word.replace(/_/g," ") + ' [' + langlist[item_lang] + ']';
			}
			else{
				item.innerHTML = langlist[item_lang];
				item.title = langlist[item_lang];
			}
		}
	}
})();