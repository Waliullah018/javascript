function cubeNumber(number) {
    if(typeof number !== "number"|| number<0){
        return "Please Provide a number"
    }
    else{
        
    let num = number * number * number;
    return num;
    }
}
// const name = "number"
// let x =cubeNumber(name);
// console.log(x);
//-----------------------------------------------------------------------------------
function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "please Provide a String";
    }   
        let search  = string1.includes(string2);
        if(search ==true){
           return true;
        }   
        return false;      
}
//------------------------------------------------------------------

function sortMaker(arr) {
if(!Array.isArray(arr)|| arr[0] < 0 || arr[1]< 0 || arr.length !== 2){
    return "invalid";
}
else{
    if(arr[0] == arr[1] ){
        return "equal";
    }
    else if(arr[0]>0 && arr[1]>0){
        let i = [];
        if(arr[0] > arr[1]){
            i.push(arr[0]);
            i.push(arr[1]);
            return i;
        }
        else{
            i.push(arr[1]);
            i.push(arr[0]);
            return i;
        }
        
    }

}


}
//---------------------------------------------------------

