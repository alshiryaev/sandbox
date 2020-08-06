// Kata https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

function snail(arr) {

  const set = new Set();
  let xIndex = 0, yIndex = 0;

  function goWithConstIndex(index, arr) {
    for (let i = 0; i < arr.length; i ++) {
      
      console.log(i, index);
      xIndex = i;

    }
  }

  goWithConstIndex(0, arr);

}

const array = [[1,2,3],[8,9,4],[7,6,5]];
const result = snail(array);

/*
 00  10  20

 01  11  21

 02  12  22

*/
