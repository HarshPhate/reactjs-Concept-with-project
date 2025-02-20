import { useEffect,useState } from "react";

function useCurrencyinfo(currency){
const [data ,setData]= useState(1)

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    },[currency])
    return data
}

export default useCurrencyinfo;