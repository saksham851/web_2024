function sum()
{
    let total=0;
    for(let value of Object.values(arguments))
    {
        total+=value;
       
    }
    return total;
}

let ans=sum(1,2,3,4,5);
console.log(ans);
