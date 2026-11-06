/* project.js - builds a project page (project.html?p=ny-wind) from content.js.
   The text comes from the project's `study` block. You normally don't edit this file. */
(function () {
  var S = window.SITE;
  function esc(t){var d=document.createElement("div");d.textContent=t==null?"":String(t);return d.innerHTML;}
  function $(id){return document.getElementById(id);}

  $("brand").textContent = S.name;
  $("year").textContent = new Date().getFullYear();
  $("foot-name").textContent = S.name;

  var id = new URLSearchParams(location.search).get("p");
  var p = S.projects.filter(function(x){return x.id === id && x.study;})[0];

  if (!p) {
    $("study").innerHTML = '<section class="case"><h1 class="case-title">Project not found</h1><p class="body"><a href="index.html#works">← Back to all works</a></p></section>';
    return;
  }
  var st = p.study;
  document.title = p.title + " | " + S.name;

  function meta(label, value){
    return '<div><div class="label">'+label+'</div><div class="mv">'+esc(value)+'</div></div>';
  }

  var html = '<section class="case">' +
    '<a class="back muted small" href="index.html#works">← All works</a>' +
    '<div class="case-top">' +
      '<h1 class="case-title">'+esc(p.title)+'</h1>' +
      '<div class="case-meta">' +
        meta("INDUSTRY", st.industry) + meta("LOCATION", st.location) +
        meta("DATA", st.data) + meta("METHODS", st.methods) + meta("YEAR", p.year) +
      '</div>' +
    '</div>' +
    (st.summary ? '<p class="statement case-sum">'+esc(st.summary)+'</p>' : '') +
    (p.image ? '<div class="hero"><img src="'+esc(p.image)+'" alt="'+esc(p.title)+'"></div>' : '') +
    '<div class="sections">' +
    (st.sections||[]).map(function(s){
      return '<div class="sec"><h2 class="sec-h">'+esc(s.heading)+'</h2><div class="sec-b">'+
        (s.body||[]).map(function(t){return '<p>'+esc(t)+'</p>';}).join("")+'</div></div>';
    }).join("") +
    '</div>' +
    ((st.images && st.images.length > 1) || (st.images && st.images[0] && st.images[0].file !== p.image) ?
      '<div class="figs">'+st.images.map(function(im){
        return '<figure><div class="fig"><img src="'+esc(im.file)+'" alt="'+esc(im.caption||p.title)+'"></div><figcaption class="muted small">'+esc(im.caption||"")+'</figcaption></figure>';
      }).join("")+'</div>' : '') +
  '</section>';
  $("study").innerHTML = html;
})();
