

// implement a function that makes multiple API calls and process the data using calbacks
function makeApiCall(url, callback){
    fetch(url)
    .then(response => response.json())
    .then(data=>callback(data))
    .catch(err=> console.error("error in api call", err.message))

}
function handleData(data){
    console.log("processed data",data)
}


function main(){
    const apiUrl1 = ""
    const apiUrl2 = ""
    makeApiCall(apiUrl1, handleData);
    makeApiCall(apiUrl2, handleData);
}
