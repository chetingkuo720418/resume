// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Che-Ting Kuo</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Che-Ting Kuo</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links Che-Ting Kuo wants you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Che-Ting Kuo is at stuff</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Che-Ting Kuo's CV</td>\
  </tr>\
  <tr>\
    <td>cellist</td>\
    <td>Never Gonna Give You Up</td>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:chetingkuo0418@gmail.com\">chetingkuo0418@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+886-0929-223-755\">+886-0929-223-755</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Che-Ting Kuo</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Tongde street</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>112</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Taipei</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Taiwan</td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>System Architecture</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>LLM</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 70%</td>\
  </tr>\
  <tr>\
    <td>Playstation player</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Cellist</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr></table>";
}

function about(){
  return "<p>data analysis, and cloud technologies. Proficient in Python and cloud platforms (AWS, GCP, Azure), I have successfully led and delivered large-scale projects for more than 200 clients, optimizing solutions for performance and scalability. Skilled in technical leadership, cross-functional collaboration, and client relationship management.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/chetingkuo720418\" target=\"_blank\"><i class=\"fab fa-github\"></i> Che-Ting Kuo</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/che-ting-kuo-2689a040\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com/chetingkuo720418\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}

function cellist(){
  return "<p>D   A   Bm  F#m G   D   G   A <br>\
    D   A   Bm  F#m G   D   G   A <br>\
    D   A   Bm  F#m G   D   G   A <br>\
    <br>\
    D   A   Bm  F#m G   D   G   A <br>\
    </p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "cellist") {
      var win = window.open("https://www.youtube.com/watch?v=ybuPhpaE9Sw", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
