$(function(){
    $("#txNilai").val(0);
    vaccordion('');
    $("#txMODE").change(function(){
        let md = $("#txMODE").val();
        vaccordion(md);
        conv();
    })

    $("#txNilai").keyup(function(){
        conv();
    })
})

function vaccordion(xmode){
    $(".HC").show();
    $(".HF").show();
    $(".HK").show();
    $(".HR").show();
    switch(xmode){
        case "Celcius":
            $(".HC").hide();
            break;
        case "Fahrenheit":
            $(".HF").hide();
            break;
        case "Rheamur":
            $(".HR").hide();
            break;
        case "Kelvin":
            $(".HK").hide();
            break;
        default:
            $(".HC").hide();
            $(".HF").hide();
            $(".HK").hide();
            $(".HR").hide(); 
    }
    
}
function conv(){
    let ncx,nfx,nkx,nrx;
    let nil = $("#txNilai").val();
    let from = $("#txMODE").val();
    let tc,tf,tk,tr;

    switch(from){
        case "Celcius":
            ncx = nil;
            nfx = 9/5*parseFloat(ncx)+32;
            nkx = parseFloat(ncx)+273.15;
            nrx = 4/5*parseFloat(ncx);
            tf = "°F = 9 / 5 X °C + 32<br>&nbsp;&nbsp;&nbsp;&nbsp;= 9 / 5 X "+ncx+"°C + 32<br>&nbsp;&nbsp;&nbsp;&nbsp;= "+nfx+" °F";
            tk = "K = °C + 273.15<br>&nbsp;&nbsp;&nbsp;= "+ncx+" °C + 273.15<br>&nbsp;&nbsp;&nbsp;= "+nkx+" K";
            tr = "°R = °C + 273<br>&nbsp;&nbsp;&nbsp;= "+ncx+" °C + 273<br>&nbsp;&nbsp;&nbsp;= "+nrx+" °R";
            $("#txResFahrenheit").html("Nilai : "+nil+" °C maka<br>"+tf);
            $("#txResKelvin").html("Nilai : "+nil+" °C maka<br>"+tk);
            $("#txResReamur").html("Nilai : "+nil+" °C maka<br>"+tr);
            break;
        case "Fahrenheit":
            nfx = nil;
            ncx = (parseFloat(nfx)-32)*5/9;
            nkx = (parseFloat(nfx)-32)*5/9+273.15;
            nrx = (parseFloat(nfx)-32)*4/9;
            tc = "°C = (°F - 32) X 5 / 9<br>&nbsp;&nbsp;&nbsp;&nbsp;= ("+nfx+"°F - 32) X 5 / 9<br>&nbsp;&nbsp;&nbsp;&nbsp;= "+ncx+" °C";
            tk = "K = (°F - 32) X 5 / 9 - 273.15<br>&nbsp;&nbsp;&nbsp;= ("+nfx+" °F - 32) X 5 / 9 + 273.15<br>&nbsp;&nbsp;&nbsp;= "+nkx+" K";
            tr = "°R = (°F - 32) X 4 / 9<br>&nbsp;&nbsp;&nbsp;= ("+nfx+" °F - 32) X 4 / 9<br>&nbsp;&nbsp;&nbsp;= "+nrx+" °R";
            $("#txResCelcius").html("Nilai : "+nil+" °F maka<br>"+tc);
            $("#txResKelvin").html("Nilai : "+nil+" °F maka<br>"+tk);
            $("#txResReamur").html("Nilai : "+nil+" °F maka<br>"+tr);
            break;
        case "Kelvin":
            nkx = nil;
            ncx = parseFloat(nkx)-273.15;
            nfx = (parseFloat(nkx)-273.15)*9/5+32;
            nrx = (parseFloat(nkx)-273.15)*4/5;
            tc = "°C = K - 273.15<br>&nbsp;&nbsp;&nbsp;&nbsp;= ("+nkx+" K - 273.15<br>&nbsp;&nbsp;&nbsp;&nbsp;= "+ncx+" °C";
            tf = "°F = (K - 273.15) X 9 / 5 + 32<br>&nbsp;&nbsp;&nbsp;= ("+nkx+" K - 273.15) X 9 / 5 + 32<br>&nbsp;&nbsp;&nbsp;= "+nfx+" °F";
            tr = "°R = (K - 273.15) X 4 / 5<br>&nbsp;&nbsp;&nbsp;= ("+nkx+" K - 273.15) X 4 / 5<br>&nbsp;&nbsp;&nbsp;= "+nrx+" °R";
            $("#txResCelcius").html("Nilai : "+nil+" K maka<br>"+tc);
            $("#txResFahrenheit").html("Nilai : "+nil+" K maka<br>"+tf);
            $("#txResReamur").html("Nilai : "+nil+" K maka<br>"+tr);
            break;
        case "Rheamur":
            nrx = nil;
            ncx = parseFloat(nrx)*5/4;
            nfx = 9/4*parseFloat(nrx)+32;
            nkx = parseFloat(nrx)*5/4+273.15;
            
            tc = "°C = °R X 5 / 4<br>&nbsp;&nbsp;&nbsp;&nbsp;= "+nfx+"°R X 5 / 4<br>&nbsp;&nbsp;&nbsp;&nbsp;= "+ncx+" °C";
            tf = "°F = (°R - 32) X 9 / 4<br>&nbsp;&nbsp;&nbsp;= ("+nrx+" °R - 32) X 4 / 9<br>&nbsp;&nbsp;&nbsp;= "+nfx+" °F";
            tk = "K = °R X 5 / 4 + 273.15<br>&nbsp;&nbsp;&nbsp;= "+nrx+" °R X 5 / 4 + 273.15<br>&nbsp;&nbsp;&nbsp;= "+nkx+" K";
            $("#txResCelcius").html("Nilai : "+nil+" °R maka<br>"+tc);
            $("#txResFahrenheit").html("Nilai : "+nil+" °R maka<br>"+tf);
            $("#txResKelvin").html("Nilai : "+nil+" °R maka<br>"+tk);
            break;
    }
}