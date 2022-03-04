window.onscroll = function() {rafet()};

function rafet() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("myP").className = "test";
    document.querySelector('img').className = "db";
  } else {
    // document.getElementById("myP").className = "";
    document.querySelector('img').className = "dn";
  }



}

// window.onscroll = function() {rafet1()};

// function rafet1() {
//   if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
//     document.querySelector('img').className = "dn";
//   } else {
//     document.getElementById("myP").className = "";
//   }
// }