//Adding 100 paragraph....

// const t1=performance.now();
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='this is paragraph' + i;

//     document.body.appendChild(newElement);

// }
// const t2=performance.now();
// console.log("this took " + (t2-t1) + "ms");

//-----------------------------------------------------------------------------------------------------------

//Optimizing above code a bit....

// const t3=performance.now();
// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent='this is paragraph' + i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("this took " + (t4-t3) + "ms");

//standard way to measure the perforance of ur code take to run -> performance.now(); //bhut accurate

//-------------------------------------------------------------------------------------------------------------

//Most Optimal Solution using fragment coz it uses 1 reflow and 1 repaint means that computation on adding 
//multiple tags consume less mathmatical computation ....


// let fragment =document.createDocumentFragment();
// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent='this is paragraph' + i;

//     fragment.appendChild(element);
// }
// document.body.appendChild(fragment);  


//-------------------------------------------------------------------------------------------------------------

//Call stack topic

// let addPara=() =>
// {
//  let para=document.createElement('p');
//  para.textContent='js is single';
//  document.body.appendChild(para);
// }
// let appendNewMsg=()=>
// {
//     let para=document.createElement('p');
//     para.textContent='kiya haal chal bhaiyooo';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMsg(); 