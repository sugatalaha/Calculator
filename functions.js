
let btn_plus = document.getElementById('btn+')
let btn_minus = document.getElementById('btn-')
let btn_mult = document.getElementById('btn*')
let btn_div= document.getElementById('btn/')
let btn_AC = document.getElementById('btnAC')
let btn_equal = document.getElementById('btnequal')
let btn_point=document.getElementById('point');
let btn_sqrt=document.getElementById('sqrt');

btn_AC.addEventListener('click',()=>
{
    document.getElementById('screen').innerHTML="";
    console.log('AC');
})

btn_plus.addEventListener('click',()=>
{   
    document.getElementById('screen').innerHTML+= "+";
})

btn_minus.addEventListener('click',()=>
{
    document.getElementById('screen').innerHTML+= "-";
    console.log(op);
})

btn_mult.addEventListener('click', () => {
    document.getElementById('screen').innerHTML+= "*";
})

btn_div.addEventListener('click', () => {
    document.getElementById('screen').innerHTML+= "/";
})

btn_equal.addEventListener('click',()=>
{   
    document.getElementById('screen').innerHTML=eval(document.getElementById('screen').innerHTML);
})
for( let i=0;i<=9;i++)
{
    document.getElementById('btn'+i.toString()).addEventListener('click',()=>
    {
        document.getElementById('screen').innerHTML+=i.toString();
    })
}

document.getElementById('point').addEventListener('click',()=>
{
    document.getElementById('screen').innerHTML+='.';
})