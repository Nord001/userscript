// ==UserScript==
// @name           Forum Jump
// @namespace      Here
// @include        http://goallineblitz.com/game/*
// ==/UserScript==

var toolbox=document.getElementById('toolbar');
toolbox.innerHTML='<a href="/game/home.pl" class="toolbar_item">Home</a><a href="/game/leagues.pl" class="toolbar_item">Leagues</a><a href="/game/search.pl" class="toolbar_item">Search</a><a href="/game/market_free_agents.pl" class="toolbar_item">Marketplace</a><a href= "/game/forum_main.pl" class="toolbar_item">Forum</a><a href="/game/inbox.pl" class="toolbar_item">Inbox</a><a href="/game/flex_points.pl" class="toolbar_item">Flex Points</a><a href="/faq.html" class="toolbar_item">FAQ</a><a href="/guides.html" class="toolbar_item">Guides</a><a target="_new" class="toolbar_item" href="http://www.glbwiki.com">Wiki</a><a class= "toolbar_item" href="/game/support.pl">Support</a><center><form class="toolbar_item" name="form1"><select onchange="window.location=document.form1.menu.options[document.form1.menu.selectedIndex].value;" name="menu" style="font-size: 12px; color: rgb(0, 0, 0); font-family: Arial; background-color: rgb(255, 255, 255);"><option disabled="true" selected="true">- Select a forum -</option><optgroup label="Goal Line Blitz"><option value="forum_thread_list.pl?forum_id=1">Announcements</option><option value="forum_thread_list.pl?forum_id=2">Suggestions</option><option value="forum_thread_list.pl?forum_id=3">Bugs</option><option value="forum_thread_list.pl?forum_id=19">FAQ`s, Player Guides and Newbie Help</option ><option value="forum_thread_list.pl?forum_id=4">Goal Line Blitz</option><option value="forum_thread_list.pl?forum_id=8">Game Recaps</option></optgroup><option value="forum_thread_list.pl?forum_id=175">Oceania AA2</option></optgroup><optgroup label="SRBIJA"><option value="forum_thread_list.pl?team_id=2933">ENDZONA</option><option value="forum_thread_list.pl?team_id=2750">Answer Please</option></optgroup></select>\n</form><a id="logout" href="/game/logout.pl" class="toolbar_item">Logout</a>';