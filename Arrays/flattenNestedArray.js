function flattenArray(arr){
    return arr.reduce((acc, element)=>{
        return Array.isArray(element)? acc.concat(flattenArray(element)) : acc.concat(element);
    },[])
}
////////////////////////////////
console.log(flattenArray([[1,2,3],[4,5,6],[7,8,9],[10,11]]))