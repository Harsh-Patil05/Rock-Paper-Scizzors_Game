const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("#btn");
const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const toCurr=document.querySelector(".to select");
const fromCurr=document.querySelector(".from select");
for(let select of dropdown)
{
    for(let currCode in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(currCode==="USD" && select.name=="from")
        {
            newOption.selected="selected";
        }
        if(currCode==="INR" && select.name=="to")
        {
            newOption.selected="selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag=(element)=>{
    let extractname=element.value;
    console.log(extractname);
    let countrycode=countryList[extractname];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let enteredvalue=amount.value;
    console.log(enteredvalue);
    if(enteredvalue ==="" || enteredvalue<1)
    {
        enteredvalue=1;
        amount.value="1"
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let fromCurrency = fromCurr.value.toLowerCase();
let toCurrency = toCurr.value.toLowerCase(); // Assuming you have toCurr element

if (data[fromCurrency] && data[fromCurrency][toCurrency]) {
rate = data[fromCurrency][toCurrency]
  console.log(data[fromCurrency][toCurrency]);
} else {
  console.error("Currency data not found in the response");
}
    let finalAmount=enteredvalue*rate;
    document.querySelector(".message").innerText=`${enteredvalue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
})
