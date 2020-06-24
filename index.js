let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]




function largestSubarraySum(array){

    let total=0;
    let max=0;

    for(let i =0;i<array.length;i++){
  
            total+=array[i]

            /* if the total is less than zero (negative)
            you need to reset the total equal to zero again.*/
            if(total<0){
                total=0
            }
        
            if(max<total){
                max=total
            }



        }
    

return max
}

largestSubarraySum(array)