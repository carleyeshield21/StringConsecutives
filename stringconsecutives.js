function stringConsecutives(arr, k){
    // The crucial concept in this code is the increment in the for loop, it will depend on the value of k. We will still iterate through the elements of array arr but we will increment the value of i by adding k. We will create another array arr1 because we will push the elements here, the first element to be pushed in the current value of arr[i], then we nest a while condition because we will create the variable j, we will add j to the current value of i in each iteration, and then push those elements in the arr1 array. Inside the while we nest an if condition to detect an undefined and break to stop adding to the array. Then the final array will be arrtotal,pushing each value of arr1, outside the while loop but still inside the for loop.
    let arrtotal = []
    for(i=0; i<=arr.length-1; i=i+k){
        // console.log(i)
        let arr1 = []
        arr1.push(arr[i])
        let j = 1
        while(j<=k-1){
            if(arr[i+j] != undefined){
                arr1.push(arr[i+j])
            } else {
                break
            }
            j++
        }
        // console.log('========')
        // console.log(arr1)
        arrtotal.push(arr1)
    }
console.log(arrtotal)
}
stringConsecutives(['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eight','Ninth','Tenth'], 3)
console.log('==========')
stringConsecutives(['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eight','Ninth','Tenth'], 2)
console.log('==========')
stringConsecutives(['ab','cde','fg','hij','kl','mnop','qr','stu','vwx'], 2)
console.log('==========')
stringConsecutives(['ab','cde','fg','hij','kl','mnop','qr','stu','vwx'], 3)