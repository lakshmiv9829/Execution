function findPair(array,key){
    var x
    var newArray=[]
    for(var i=0;i<array.length-1;i++){
        x=i+1;
        if(array[i]+array[x]==key){
            newArray.push(array[i])
            newArray.push(array[x])
            return newArray;
        }
    }


}
var array=[3,9,2,5,6,7]
var key=11;
var result=findPair(array,key)
console.log(result)

