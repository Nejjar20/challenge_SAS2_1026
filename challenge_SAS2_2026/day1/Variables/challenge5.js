const prompt=require("prompt-sync")();
let F=prompt("entrer la durée du film en minutes");
if(F<60){
    console.log("Court métrage");
}else if(F>=60 && F<120){
    console.log("Film standard");
}else
{
    console.log("Film long");
}