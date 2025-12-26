let btn = document.getElementById("searching");
let failure= "Fail";


btn.addEventListener("click", function()
{

    let num = parseInt(document.getElementById("inputBox").value);
    let result;

   if(num>=91 && num<=100)
     {
        result=num+": A+ :"+"Excellent";
     }
    else if(num>=81 && num<=90)
       {
        result=num+": A :"+"Good";
       }
    else if(num>=71 && num<=80)
    {
        result=num+": B :"+"Normal";
    }
    else if(num>=61 && num<=70)
    {
        result=num+": C :"+"Average";
    }
    else if(num>=51 && num<=60)
    {
        result=num+": D :"+"Poor";
    }
    else if(num>=33 && num<=50)
    {
        result=num+": E :"+"Very Poor";
    }
    else if(num>=0 && num<=33)
    {
           result=num+": F :"+ failure;
    }
       else
       {
        result="Error";
       }
     document.getElementById("res").innerText=result;
    })

    let reloa = document.getElementById("forgot");

    reloa.addEventListener("click",function()
     {
             
        location.reload();

     })
