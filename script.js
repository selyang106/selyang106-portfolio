/* script.js - builds the page from content.js (the SITE object).
   You normally don't need to edit this file. */
(function () {
  var S = window.SITE;
  function esc(t){var d=document.createElement("div");d.textContent=t==null?"":String(t);return d.innerHTML;}
  function $(id){return document.getElementById(id);}

  document.title = S.name + " | Geospatial Data Science";
  $("brand").textContent = S.name;
  $("name").textContent = S.name;
  $("location").textContent = S.location;
  $("intro").textContent = S.intro;
  $("year").textContent = new Date().getFullYear();
  $("foot-name").textContent = S.name;

  // Fact card
  var facts = [["STUDYING",S.studying],["SCHOOL",S.school]];
  $("facts").innerHTML = facts.map(function(f){
    return '<div><div class="label">'+f[0]+'</div><div>'+esc(f[1])+'</div></div>';
  }).join("") + '<div style="grid-column:1/-1"><div class="label">INTERESTS</div><div>'+esc(S.skills.join(", "))+'</div></div>';

  // Headshot (the photo file named in content.js)
  $("portrait").innerHTML = S.photo
    ? '<img src="'+esc(S.photo)+'" alt="Portrait of '+esc(S.name)+'">'
    : '<span class="ph">[YOUR PHOTO]</span>';

  // Email + location card
  var email = S.links.email ? '<a href="mailto:'+esc(S.links.email)+'">'+esc(S.links.email)+'</a>' : '<span>[YOUR EMAIL]</span>';
  $("contact-card").innerHTML =
    '<div><div class="label">EMAIL</div><div>'+email+'</div></div>'+
    '<div><div class="label">LOCATION</div><div>'+esc(S.location)+'<br><span class="muted">'+esc(S.coords)+'</span></div></div>';

  // Works grid + filters
  var current = "All";
  function renderGrid(){
    $("grid").innerHTML = S.projects.filter(function(p){return current==="All"||p.filter===current;}).map(function(p){
      var inner = '<div class="frame" style="aspect-ratio:'+esc(p.ratio||"4/3")+'">'+
        (p.image?'<img src="'+esc(p.image)+'" alt="'+esc(p.title)+'">':'<span class="ph">[IMAGE]</span>')+'</div>'+
        '<h3>'+esc(p.title)+'</h3><p>'+esc(p.tools)+'<br>'+esc(p.filter)+' · '+esc(p.year)+'</p>';
      // Projects with a `study` open their own page; otherwise use `link` if there is one.
      var href = p.study ? "project.html?p=" + encodeURIComponent(p.id) : p.link;
      return href ? '<a class="item" href="'+esc(href)+'">'+inner+'</a>' : '<article class="item">'+inner+'</article>';
    }).join("");
  }
  function renderFilters(){
    $("filters").innerHTML = ["All"].concat(S.filters).map(function(f){
      return '<button type="button" class="'+(f===current?"on":"")+'" aria-pressed="'+(f===current)+'" data-f="'+esc(f)+'">'+esc(f)+'</button>';
    }).join("");
  }
  $("filters").addEventListener("click", function(e){
    var b = e.target.closest("button"); if(!b) return;
    current = b.getAttribute("data-f"); renderFilters(); renderGrid();
  });
  renderFilters(); renderGrid();

  // Notes
  if (S.blog && S.blog.length) {
    $("notes-list").innerHTML = S.blog.map(function(p,i){
      var inner = '<span>0'+(i+1)+'</span><span class="t">'+esc(p.title)+'</span><span class="tp">'+esc(p.topic)+'</span><span class="d">'+esc(p.date||"[DATE]")+'</span>';
      return p.url ? '<a class="row" href="'+esc(p.url)+'">'+inner+'</a>' : '<div class="row">'+inner+'</div>';
    }).join("");
  } else { $("notes").style.display = "none"; }

  // Contact
  $("contact-text").textContent = S.contactText;
  var l = "";
  l += S.links.email ? '<a href="mailto:'+esc(S.links.email)+'">'+esc(S.links.email)+'</a>' : '<a href="#contact">[YOUR EMAIL]</a>';
  // LinkedIn and Resume always show too. No link yet = stays on the page.
  function btn(url, label){
    return url ? '<a href="'+esc(url)+'" target="_blank" rel="noopener">'+label+'</a>'
               : '<a href="#contact" aria-disabled="true" title="Link coming soon">'+label+'</a>';
  }
  l += btn(S.links.linkedin, "LinkedIn");
  l += btn(S.links.github, "GitHub");
  l += btn(S.links.resume, "Resume");
  $("links").innerHTML = l;
})();
