function mergesort(array) {
     var n = array.length;
     var temp = new Array(n);

     for (f = 1; f < n; f *= 2) 
          {
               for(first = 0; first < n; first += 2 * f)
                    {
                         var middle = Math.min(first + f, n);
                         var end = Math.min(first + 2 * f, n);
                         merge(array, temp, first, middle, end);
                    }
          }
     
    return array;
}

function merge(array, temp, first, middle, end) {
     var firstNum = first;
     var middleNum = middle;
     var tempNum = first;
     while (firstNum < middle && middleNum < end)
          {
               if(array[firstNum] <= array[middleNum])
                    temp[tempNum++] = array[firstNum++];
               else
                    temp[tempNum++] = array[middleNum++];
          }
     while (firstNum < middle)
        temp[tempNum++] = array[firstNum++];
     while (middleNum < end)
          temp[tempNum++] = array[middleNum++];
     for (i = first; i < end; i++)
          array[i] = temp[i];
     
}
