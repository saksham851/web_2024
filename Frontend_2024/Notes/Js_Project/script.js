const constValue=document.querySelector('#counter');

const increment=()=>
{
    let value=parseInt(constValue.innerText);
    value+=1;
    constValue.innerText=value;
};

const decrement =()=>
{
    let value=parseInt(constValue.innerText);
    value-=1;
    constValue.innerText=value;
 
};