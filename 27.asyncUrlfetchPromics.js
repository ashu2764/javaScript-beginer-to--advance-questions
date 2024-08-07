// const res = require("express/lib/response");

function makeApiCall( url){

 return   fetch(url)
    .then(res=>res.json())
 

}

function handleData(data){
    console.log(`Processed Data`, data);

}
function main(){
    const apiUrl1 = "";
    const apiUrl2 = "";
    makeApiCall(apiUrl1).then(handleData).catch(error => console.log(`Error`))

}
main()