function loadTOC()
{
  var x = document.getElementById("mainContent").querySelectorAll("h1, h2");
  var i;
  for (i = 0; i < x.length; i++) {
    var section = x[i].innerHTML;
    console.log(section);
	
    var idtag = x[i].getAttribute("id");
    console.log(idtag);
  
	var li = "<li><a href=\"#" + idtag + "\">" + section + "</a></li>";
    console.log(li);
	document.getElementById("tocTest").innerHTML += li;
   
  };
  alert("TOC successfully loaded!");
};



<button onClick="loadTOC();this.style.visibility= 'hidden'">Load TOC</button>
							<br>