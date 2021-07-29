//get number
function number(num){
    var result =document.getElementById("display");
    result.value+=num;
}
//get resilt
function result()
{
    var result =document.getElementById("display");
    result.value = eval(result.value)
}
// clear result
function clearResult()
{
    var result =document.getElementById("display");
    result.value = " ";
}
function deleteChar()
{
    var number=document.getElementById("display");
    var remove=number.value;
    remove=remove.slice(0,-1);//remove last character from a strings
    number.value=remove;
}