// ==UserScript==
// @name            Innovation Posts Updated
// @namespace       Innovation Posts originally by +Amaze
// @description     Innovation Style post Updated
// @include         http://www.hackforums.net/newreply.php*
// @include         http://hackforums.net/newreply.php*
// @include         http://www.hackforums.net/newthread.php*
// @include         http://hackforums.net/newthread.php*
// @include         http://www.hackforums.net/showthread.php*
// @include         http://hackforums.net/showthread.php*
// @version         1.3
// ==/UserScript==

function form_submit(event) {
   var form = event ? event.target : this;
   var arTextareas = form.getElementsByTagName('textarea');
   for (var i = arTextareas.length - 1; i >= 0; i--) {
       var elmTextarea = arTextareas[i];
       elmTextarea.value = "[color=#01c1c1][font=Times New Roman][size=medium]" + elmTextarea.value + "[/size][/font][/color]";
   }

   form._submit();
}
try {
document.getElementById('message').value = "[color=#01c1c1][font=Times New Roman][size=medium] [/size][/font][/color]";
} catch(ex) { } 
window.addEventListener('submit',form_submit, true);
HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = form_submit;
