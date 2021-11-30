// $(function(){

//     $("button").click(function() {
//         $("p").show()
    
//     })
//     })



// nə ilə 

// necə 

// nəyi 

// edim


// $(function(){

// $("button")// nə ilə 
// .click(function() {// necə 

//     $("p")// nəyi 
//     .hide()// edim

// })

// });
// =====================JQuery Structure==============================

// Selector
// JQuery selector element similar css selector

// $(function(){
//     // https://www.w3schools.com/jquery/jquery_selectors.asp
//     $("button").click(function() {
//         // $("a[target!='_blank']").hide()
//         // $(".myListItem").hide()
//         // $("#myList").hide()
//         // $(this).hide()
//         // $("*").hide()
    
//     })
    
//     });

// =====================JQuery Second Chapter==============================


// $(function(){

// $("button").click(function() {
//     // $("p,h1").css({"color":"red", "background":"#000"});
//     // $("p,h1").css({"color":"red", "background":"#000"}); çoxlu css yazmaq üçün
//     // $("p,h1").css("color","red"); tək css yazmaq üçün

// })
// })
// =====================JQuery Third Chapter==============================


// $(function(){

//         // $("button").dblclick(function() {
//     // $("button").mouseleave(function() {
//     // $("button").mouseenter(function() {
//         $("button").click(function() {
//         $("p,h1").toggleClass("red")
    
//     })
//     })
// =====================JQuery Fourth Chapter==============================


    $(function(){

        $("button").click(function() {
            $("p,h1").fadeToggle(1000, ()=>{
                alert("Success")
            })
            // $("p,h1").fadeTo(1000, 0.5)
            // $("p,h1").fadeToggle(3000)
            // $("p,h1").fadeIn(3000)
            // $("p,h1").fadeOut("slow")
            // $("p,h1").toggle(2000)
        
        })
        })