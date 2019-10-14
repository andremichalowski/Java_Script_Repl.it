// Good morning! Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

// Input:
// 'dcba'
// 'zycxbwa'
// 'AzycxbCwBaA'

// Expected Output:
// 'abcd'
// 'abcwxyz'
// 'AABCabcwxyz'


function sortString(str){
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        /* if ASCII code greater then swap the elements position*/
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
  }
  