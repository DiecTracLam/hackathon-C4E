let count=14;
let btn=document.getElementById('btn').addEventListener('click',(e)=>{
    e.preventDefault();
    let b=prompt("Fill in topic");
    let div=document.getElementsByClassName('content');
    let h1=document.createElement('h1');
    b=b.toUpperCase();
    let text=document.createTextNode(b);
    h1.appendChild(text);
    div[0].appendChild(h1);
    let src="../public 2/Gallery";
    for(let i=0;i<6;i++)
    {
        let div2=document.createElement('div');
        div2.className="img-baby";
        let img=document.createElement('img');
        img.setAttribute('src',src.concat(count,'.jpg'));
        div2.appendChild(img);
        div[0].appendChild(div2);
        count++;
    }
})