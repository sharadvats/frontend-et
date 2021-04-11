function showData()
{
    event.preventDefault();
    var country=document.getElementById("cname").value;
    var sDate=document.getElementById("sdate").value;
    var eDate=document.getElementById("edate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("Enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((vats) => vats.json())
        .then((vats) => {
            console.log(vats);
            var length=vats.length;
            var index=length-1;

            var c=vats[index].Confirmed;
            var a=vats[index].Active;
            var d=vats[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("vats").style.display="block";
            
        })
    }
}