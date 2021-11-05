// https://www.w3schools.com/js/js_es6.asp

//VARIABLE TYPES
// ES5
// var -> varibale
// ES6
//const -> constant
//let -> let


// const infoData1 = "Hello Const";
// infoData1 = "Hello Const1";
// console.log(infoData1);

// var infoData = "Hello Var";
// infoData = "Hello Var1"
// console.log(infoData);

// let infoData2 = "Hello Let";
// infoData2 = "Hello Let1"
// console.log(infoData2);

// const and var,let deference


// var infoData = "Var";
// var infoData = "New Var";

// console.log(infoData);

// let infoData = "Let";
// let infoData = "New Let";
// console.log(infoData);

// let $info1Data = 'Hello';

// console.log($info1Data);


// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield



//let local 
//var global

// if(true){
//     //local
//         var a = "Hello";
//         if(true){
//                 let b = "Hello1";

//         }
//         console.log(b);


// }
// console.log(a);

//global



// 
// if -> əgər
// else if -> deyilsə əgər
// esle -> deyilsə


const myTime = new Date().getHours();
console.log(myTime);
// const myTime = 9;

if (myTime>=5 && myTime <= 10) {
    console.log('Good Morning');
                if (myTime == 7) {
                    console.log("Get up");
                }else if (myTime == 9){
                    console.log("Do Breakfast");
                }
}else if(myTime >= 11 && myTime <=15){
    console.log("Good Afternoon");

}else if(myTime >= 16 && myTime <=21){
    console.log("Good Evening");
}
else if(myTime >= 21 && myTime <=23){
    console.log("Good Night");
}
else{
    console.log("No Time");
}


