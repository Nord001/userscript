// ==UserScript==
// @name           Adlerfront Orders
// @namespace      eAF Orders
// @description    Orders for the Adlerfront
// @include        http://www.erepublik.com/en
// ==/UserScript==

GM_xmlhttpRequest({
	method: 'GET',
	url: 'http://mithradates.mi.funpic.de/viewtopic.php?f=19&t=41',

	onload:function(response){
            //Retrieve and truncate string
            var order_string = response.responseText.match('<div class="content".*?#');
            order_string = order_string.join("");   //Array->string
            order_string = order_string.substring(order_string.indexOf('>')+1,order_string.length-1)

            var tags = order_string.split('|');
			var orders1 = tags[0];
			var orders2 = tags[1];
			var link = tags[2];
			var date_issued = tags[3];
			var poster = tags[4];

			latest=document.getElementById('latestnews');

			header = document.createElement("h1");
			header.textContent = 'Bundeswehr Orders ';
			
			empty1 = document.createElement("h2");
			empty1.textContent = ' ';
			
			empty2 = document.createElement("h2");
			empty2.textContent = '                               ';
			
			order1 = document.createElement("h2");
			order1.textContent = orders1;
			
			empty3 = document.createElement("h2");
			empty3.textContent = '                               ';
			
			order2 = document.createElement("i");
			order2.textContent = orders2;
			
			empty5 = document.createElement("h2");
			empty5.textContent = '                               ';

			links = document.createElement("a"); 
			links.setAttribute('href',link);
			links.innerHTML = link;
			
			poster_el = document.createElement("small");
			poster_el.textContent = ' by ' + poster;

			updated=document.createElement("small")
			updated.textContent = date_issued;
			
			empty4= document.createElement("h3");
			empty4.textContent = ' ';

            //Insert elements on page
            if(order_string.length) {   //Only insert if string is uncommented
                latest.parentNode.insertBefore(header, latest);
				latest.parentNode.insertBefore(updated, latest);
				latest.parentNode.insertBefore(poster_el, latest);	
				latest.parentNode.insertBefore(empty1, latest);
				latest.parentNode.insertBefore(order1, latest);
				latest.parentNode.insertBefore(empty3, latest);
				latest.parentNode.insertBefore(order2, latest);
				latest.parentNode.insertBefore(empty5, latest);
				latest.parentNode.insertBefore(links, latest);
				latest.parentNode.insertBefore(empty2, latest);
				latest.parentNode.insertBefore(empty4, latest);				
				
				
            }
		}	
		}
	);