
    const arr = [1,9,0,8,2,0,3,0,1]

function movezerostoend(arr){
	let newArr = new Array(arr.length).fill(0);//its a fixed length, you cannot push elements into it
  let index = 0;
  console.log(newArr)
  arr.forEach((element,i)=>{
  	if(element!==0){
    	newArr[index] = element;
      index++
    }
  })
  return newArr
}
console.log(movezerostoend(arr));
