console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");
function* iterator(obj){
    for(let key in obj){
        yield [key,obj[key]]
    }
}

obj = {a:"1",b:"2",c:"3"}

iteratorObj = iterator(obj)

console.log("Properties using Iterator")
for(let [key,value] of iteratorObj){
    console.log(key,value)
}

//generator

function* generator(obj){
    for(let key in obj){
        yield key
    }
}

let generatorObj = generator(obj)

console.log("Properties using generator")
for(let keys of generatorObj){
    console.log(keys)
}