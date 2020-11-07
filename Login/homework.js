// let btn=document.getElementById('btn').addEventListener('click',(e)=>{
//         e.preventDefault();
//         let username=document.getElementById('email').value;
//         console.log(username);
//         let password=document.getElementById('Password').value;
//         console.log(password);
//         if(username!=="admin")
//         {
//             alert('User nhap sai ')
//         }
//         else
//         {
//             if(password === "123")
//             {
//                 //window.location.href = '../HTML/shoppe.html';
//                 window.open('../HTML/Traveling.html');
//                 //let login =document.getElementById('login').remove();
//             }
//             else{
//                 alert("Mat khau khong dung")
//             }
//         }
//     },false);

let click=response=>{
    let username=document.getElementById('email').value;
    console.log(username);
    let password=document.getElementById('Password').value;
    console.log(password);
    for(let i=0;i<response.length;i++)
    {
        if(username===response[i].email)
        {
            if(password===response[i].password)
            {
                window.location.href='../HTML/Traveling.html';
                //window.open('../HTML/Traveling.html');
            }
            else
                alert("Mat khau khong dung");
        }
    }
}
let btn=document.getElementById('btn');
btn.addEventListener('click',async(e)=>{
    e.preventDefault();
    let response=await fetch('https://5f9420069ecf720016bfc321.mockapi.io/schools');
    if(response.status==='200' || response.ok)
    {
        let value=await response.json();
        click(value);
    }
    else
    {
        alert("Not found");
    }

},false);

