
const form = document.querySelector('form')

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
   
    const button = document.querySelector('button')
    console.log(height,weight)
    if (height ==="" || height<0 || isNaN(height) ){
       
       button.innerHTML=`please give a valid height ${height}` 
    } else if (weight ==="" || weight<0 || isNaN(weight) ){
        
        button.innerHTML=`please give a valid weight ${weight}` 
    }
    else{
       const bmi = (weight/((height*height)/10000)).toFixed(2);
       button.innerHTML=`BMI:${bmi}`
       button.style.fontColor=" #706233"
     
    }
    
});
// submitBtn.addEventListener("click",(e)=>{
    
//     console.log("calculate")
    
// });
