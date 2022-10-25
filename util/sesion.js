
function addCarProductToSesion(product){
    localStorage.setItem("car", JSON.stringify(product));
}

function getCarProductToSesion(){
    const data = localStorage.getItem("car");
    if(!data)return [];
    return JSON.parse(data);
}

function CleanCarProductToSesion(){
    localStorage.setItem("car", JSON.stringify([]));
}
module.exports = {
    addCarProductToSesion,
    getCarProductToSesion,
    CleanCarProductToSesion
}