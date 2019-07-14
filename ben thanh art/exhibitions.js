// main page data

var list = [
  "Exhibit A", "Exhibit B", "Exhibit C"
];

for (i = 0; i < list.length; i++) {
  var num = i;
  var para = document.createElement("a");
  para.innerHTML = list[i] + "<br>";
  para.setAttribute("class","event");
  para.setAttribute("href","#");

  document.aboutus.appendChild(para);
}
