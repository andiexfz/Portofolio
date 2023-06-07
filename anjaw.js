  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }
                            , false)
    }
              )
  }
  )()
//
function hideshow(event,event2) {
var ta = document.getElementById(event);
if (ta.style.display == "none")
{ ta.style.display = "block"; $("#"+event2).text("Hide"); }
 else { ta.style.display = "none"; $("#"+event2).text("Show"); } }
//
function Copy(event){document.getElementById(event).select(),document.execCommand("copy"),toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": true,
  "showDuration": "300",
  "hideDuration": "500",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}; toastr.success("Success To Copied", "Copied");}
//
function Clear(event) {
    document.getElementById(event).value = "";
    toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": true,
  "showDuration": "300",
  "hideDuration": "500",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}; toastr.error("Text Has Been Cleaned", "Cleared");
}
//

var Beep = new Audio('/assets/media/instantsound/beep.mp3');
var Good = new Audio('/assets/media/instantsound/good.mp3');
var Bad = new Audio('/assets/media/instantsound/perfect-fart.mp3');
var Failed = "/assets/media/instantsound/failed.mp3";
function Sound1() {
  Beep.currentTime = 0;
  Beep.play();
}
function Sound2() {
  Good.currentTime = 0;
  Good.play();
}
function Sound3() {
  Bad.currentTime = 0;
  Bad.play();
}
//
   function DownloadText(event){
    var text = document.getElementById(event).value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var SaveWibu = document.createElement("a");
    SaveWibu.download = "RahsenSaved-" + Math.floor(Math.random() * 1234) + ".txt";
    SaveWibu.href = window.URL.createObjectURL(blob);
    SaveWibu.target ="_blank";
    SaveWibu.style.display = "none";
    document.body.appendChild(SaveWibu);
    SaveWibu.click();
    document.body.removeChild(SaveWibu);
 }
//
function upFile(event,event2) {
  var uplist = event.target;
  var read = new FileReader();
  read.onload = function(){
    var restext = read.result;
    document.getElementById(event2).value = restext;
  };
 read.readAsText(uplist.files[0]);
};