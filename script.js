function teks0(){document.getElementById('foto').style.opacity = "1"; document.getElementById('foto').style.margin = "70px 0 15px 0";document.getElementById('teksblur').style.opacity = "1"; document.getElementById('teksblur').style.margin = "0";}
function teks1(){document.getElementById('foto').style.opacity = "0";document.getElementById('teksblur').style.opacity = "0";document.getElementById('text1').style. tampilan = "blok-inline";document.getElementById('text1').style.opacity = "1"; setTimeout(teks2,4000);}
function teks2(){document.getElementById('text2').style.display = "inline-block";document.getElementById('text2').style.opacity = "1"; setTimeout(teks3,4000);scroll()}
function teks3(){document.getElementById('text3').style.display = "inline-block";document.getElementById('text3').style.opacity = "1"; setTimeout(teks4,4000);scroll()}
function teks4(){document.getElementById('text4').style.display = "inline-block";document.getElementById('text4').style.opacity = "1"; setTimeout(selesai,3000);scroll()}         

function check() {document.getElementById('bodyblur').style.opacity = "0";document.getElementById('bodyblur').style.visibility = "hidden";document.getElementById("offchatMenu").checked = benar;}
  function selesai() {document.getElementById('bodyblur').style.opacity = "1";document.getElementById('bodyblur').style.visibility = "visible";setTimeout(pertanyaan,3000);}
  fungsi scroll(){var objDiv = document.getElementById("data");objDiv.scrollTop = objDiv.scrollHeight;}