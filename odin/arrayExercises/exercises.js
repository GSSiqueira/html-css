function shuffle(array){
    let copyOfarray = array.slice();
    let result = [];
    for(let i=0;i<array.length;i++){
        let randonIndex = Math.floor( Math.random() * copyOfarray.length );
        result.push(copyOfarray[randonIndex]);
        copyOfarray = copyOfarray.filter(num => num!==copyOfarray[randonIndex])
    }
    return result;
}


console.log(shuffle([1,2,3]));