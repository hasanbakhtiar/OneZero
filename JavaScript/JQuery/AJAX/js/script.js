// Axaj Jquery də "load" methodu vasitəsi ilə işlədilir.

// ====================================================
// JS Ajax
// https://www.w3schools.com/js/js_ajax_http.asp
// ====================================================


// $(function(){
//     $("button").click(function(){
//       $("p").load("data/myText.txt .a");
//     });
//   });

$(function(){
$("button").click(function(){
    $("p").load("data/myText.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("Bizim melumat ugurla yuklendi");
      if(statusTxt == "error")
        alert("Xeta: " + xhr.status + ": " + xhr.statusText);
    });
  });
});