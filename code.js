function mergesort(array) {
     var n = array.length;

     for (f = 1; f < n; f *= 2) 
          {
               for(first = 0; first < n; first += 2 * f)
                    {
                         var middle = Math.min(first + f, n);
                         var end = Math.min(first + 2 * f, n);
                         merge(array, first, middle, end);
                    }
          }
     
    return array;
}

function merge(array, first, middle, end) {
     var firstNum = first;
     var middleNum = middle;
     var temp;
     while (firstNum < middleNum && middleNum < end)
          {
               if(array[firstNum] <= array[middleNum])
                    firstNum++;
               else
               {
                    temp = array[middleNum];
                    for (var loop = middleNum; loop > firstNum; loop--)
                         array[loop] = array[loop - 1];
               
                    array[firstNum] = temp;
                    firstNum++;
                    middleNum++;
               }
          }
     
}
