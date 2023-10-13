// switch
// 1 masala 
// let n = prompt("hafta kunini kiriting");
// n= n*1;
// switch (n){
//        case 1:
//         document.write ("Dushanba");
//         break;
//        case 2:
//         document.write ("Seshanba");
//         break;
//        case 3:
//         document.write ("Chorshanba");
//         break;
//        case 4:
//         document.write ("Payshanba");
//         break;
//        case 5:
//         document.write ("Juma");
//         break;
//        case 6:
//         document.write ("Shanba");
//         break;
//        case 7:
//         document.write ("Yakshanba");
//         break;
//         default:
//         document.write ("Bunday hafta kuni mabvjud emas");
//         break;

// }
// 2 masala 
// let n = prompt ("baho kiriting");

// n = n*1;

// switch (n){
//     case 1:
//         document.write ("yomon");
//         break;
//     case 2:
//         document.write ("qoniqarsiz");
//         break;
//     case 3:
//         document.write ("Qoiqarli");
//         break;
//     case 4:
//         document.write ("yaxshi");
//         break;
//     case 5:
//         document.write ("a'lo");
//         break;
//         default:
//             document.write("xato");
//             break;

// }
// 3 masala 
// let n = prompt ("oy raqamini kiriting");

// n = n*1;

// switch (n){
//     case 1:
//     case 2:
//     case 12:
//         document.write ("qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         document.write ("bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         document.write ("yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         document.write ("kuz");
//         break;


// }
// 4 masala 
// let n = prompt ("oy raqamini kiriting");

// n = n*1;
// switch (n){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write ("31 kun bor");
//         break;
//     case 3:    
//     case 6:    
//     case 9:    
//     case 11:
//         document.write ("30 kun bor");
//         break;
//     case 2 :
//         document.write ("28 kun bor");
//         break;
        
// }
// 5 masala 
// let a = +prompt ("a son kiriting");
// let b = +prompt ("b son kiriting");
// let c = +prompt ("amal kriting 1...4 gacha");
// let result;

// switch (c){
//     case 1 :
//         console.log (a+b);
//         break;
//     case 2:
//             console.log (a-b);
//             break;
//     case 3:
//                 console.log (a/b);
//                 break;
//     case 4 :
//                     console.log  (a*b);
//                     break;
//      default:
//                     console.log  ("xato");
//                     break;               
// }

// while 1
let a = +prompt('1-sonni kiriting: ');
let b = +prompt('2-sonni kiriting: ');


if ( a > b){
    while (a >b ) {
        a = a - b;
    }
    console.log(a);
}
else{
    console.log('You made a mistake');
}
