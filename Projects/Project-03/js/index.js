var imgArr=document.querySelectorAll(".img");

for(var x=0;x<imgArr.length;x++)
{
    imgArr[x].addEventListener("click",function(e)
    {
        var target=e.currentTarget;
        target.className=target.className.replace("img-hide","")
    })
}
document.querySelector(".close-img").addEventListener("click",function(e)
{
    for(var x=0;x<imgArr.length;x++)
    {
        if(imgArr[x].className.indexOf("img-hide")===-1)
        {
            imgArr[x].className=imgArr[x].className+" img-hide";
        }
    }
})

document.getElementById("toNext").addEventListener("click",function(){
    var content2=document.getElementById("content2");
    if(content2.className.indexOf("active")===-1)
    {
        content2.className=content2.className+" active";
    }
})
var closeSmBtn=document.querySelectorAll(".close-img-sm");
for(var i=0;i<closeSmBtn.length;i++)
{
    closeSmBtn[i].addEventListener("click",function(){
        var content2=document.getElementById("content2");
        content2.className=content2.className.replace("active"," ");

    })
}
