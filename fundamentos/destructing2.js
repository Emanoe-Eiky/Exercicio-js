// const [a] =[10]
// console.log(a)
function rand  ({min = 0, max = 100}){
    const varlor = Math.random() *  (max - min )+ min
    return  Math.floor(varlor)
}
 
const obs = {min: 40, max: 100}
console.log(rand(obs))
console.log(rand({min: 955}))