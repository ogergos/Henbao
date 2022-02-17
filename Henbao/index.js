window.onload = function(){
    var index = 0;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var region1 = document.getElementById("region1");
    var region2 = document.getElementById("region2");
    var x = document.getElementById("pos");

    $("img").css("left", "31vw");
    $("h1").css("left", "31vw");
    $("img").eq(index).css("left", "0vw");
    $("h1").eq(index).css("left", "0vw");
    $(".dot").eq(index).addClass("active");

    var showNext = function (){
        $("img").eq(index).css("left", "-31vw")
        $("h1").eq(index).css("left", "-31vw")
        $(".dot").eq(index).removeClass("active");
        index++;
        $(".dot").eq(index).addClass("active");
        $("img").eq(index).css("left", "0");
        $("h1").eq(index).css("left", "0");
        if(index > 4){
            index = 0;
            $(".dot").eq(index).addClass("active");
            $("img").eq(index).css("left", "0");
            $("h1").eq(index).css("left", "0");
        }
    };

    next.onclick = showNext;
    
    prev.onclick =  function showPrev(){
        $("img").eq(index).css("left", "31vw");
        $("h1").eq(index).css("left", "31vw");
        $(".dot").eq(index).removeClass("active");
        index--;
        $(".dot").eq(index).addClass("active");
        $("img").eq(index).css("left", "0");
        $("h1").eq(index).css("left", "0");
        if(index < 0){
            index = 4;
        }
    };

    setInterval(showNext, 2000);


    region1.onclick = function(){
        $(".grid-item7").hide();
        $(".grid-item3").show();
        $(".grid-item4").show();
    }

    region2.onclick = function(){
        $(".grid-item7").show();
        $(".grid-item3").hide();
        $(".grid-item4").hide();
    }

    x.onclick =  function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            x.innerHTML = "未獲得瀏覽器獲得位置允許!";
        }
    }
        function showPosition(position){
            x.innerHTML = "緯度: " + position.coords.latitude + "<br />經度: " + position.coords.longitude;
        }



}