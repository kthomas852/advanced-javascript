//Higher Order Functions

function plusomeValue(val){
    return (x) => {
        return x + val
    }
}

let plusone = plusomeValue(1);

const a = 7
const b = plusone(a)
console.log('b ', b)