// find the richest person of wealth

function maximumWealth(accounts){
    let max =0
    for(let customer in accounts){
        let customertotal =0;
        for(let money of customer){
            customertotal += money
        }
        max = Math.max(max , customertotal)
    }
    return max
}

const result = maximumWealth([[1,2,3] ,[4,3,5],[4,5,6]])
console.log(result)


//=================================================================


function calculatetotalSum(bank){
       let totalAmmount =0
       for(let money of bank ){
        totalAmmount+=money
       }
       return totalAmmount
    }
    function richestPerson(accounts){
        let maxAmmount= 0
        for(let customes of accounts){
            maxAmmount= Math.max(calculatetotalSum(customes),maxAmmount)
        }
        return maxAmmount
    }
    console.log(richestPerson([[1,4,2],[2,3,1],[7,1,0]]))
    