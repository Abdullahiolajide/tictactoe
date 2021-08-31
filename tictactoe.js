// var firstp = player1.value;
// var Secondp = player2.value;
// var turncount = 0;


// const cl = (e) =>{ 
          
//         myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[0].cells[1].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[1].cells[0].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[1].cells[2].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[2].cells[1].getElementsByTagName('button')[0].innerText = '';
//         myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText = '';

      
// }



// const insert = e =>{

// // const buttonn = document.querySelectorAll('button')[0].innerText;
// // buttonn.disabled = true;


// turncount++;
// if (firstp == '' || Secondp == '') {
// //   e.target.innerText = '';
// //e.target.innerText=();
// }
// else if (turncount % 2 == 0){
// // e.target.innerText = 'X ';
// e.target.innerText='O';
// //count2.innerText++;


// }else{
// e.target.innerText='X';
// // ++count.innerText;

// }

// if (myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[0].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText == 'X'
//                             ||
// myTable.rows[1].cells[0].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[2].getElementsByTagName('button')[0].innerText == 'X'

//                              ||
// myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText == 'X'
//                        ||

// myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[0].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText == 'X'


//         ||
// myTable.rows[0].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[1].getElementsByTagName('button')[0].innerText == 'X'

// ||
// myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[2].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText == 'X'

// ||
// myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText == 'X'

// ||
// myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'X'
// && myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText == 'X') { 


// count.innerText++;
// console.log(1);
// alert(1);
//    }


//  else if (myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[0].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText == 'O'
//                             ||
// myTable.rows[1].cells[0].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[2].getElementsByTagName('button')[0].innerText == 'O'

//                              ||
// myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText == 'O'
//                        ||

// myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[0].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText == 'O'


//         ||
// myTable.rows[0].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[1].getElementsByTagName('button')[0].innerText == 'O'

// ||
// myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[2].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText == 'O'

// ||
// myTable.rows[0].cells[0].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[2].getElementsByTagName('button')[0].innerText == 'O'

// ||
// myTable.rows[0].cells[2].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[1].cells[1].getElementsByTagName('button')[0].innerText == 'O'
// && myTable.rows[2].cells[0].getElementsByTagName('button')[0].innerText == 'O') { 


// count2.innerText++;
// alert(2);
//    }

//  else if (e.target.innerText == 'X' || e.target.innerText == 'O') {
//      console.log(1);
//  }

//     draw.innerText++;
//  if (draw.innerText == '9') {
//      alert('DRAW');
//  }




// // winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9],
// // [1, 5, 9], [3, 5, 7]];
// }

// const players = ()=>{
// //   location.reload();
// var firstp = player1.value;
// var Secondp = player2.value;

//  if (firstp == '' || Secondp == '') {
    
//      info1.innerText =  ' finish insert before game start ';
//      info2.innerText =  ' finish insert before game start';
//  }else{
    
//     info1.innerText = firstp + ' your sign is "X" you can start';
//      info2.innerText = Secondp +'  your sign is "O" you can start';
//  }

// }


