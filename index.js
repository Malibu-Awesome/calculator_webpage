//TODO:
//change the hls to hex color
//get webfont

var main = function() {

  var showdate = function() {

    var result = document.getElementById("result");
    var resulttext = timenow.innerHTML;
    timenow.innerHTML = timeshow;
    result.style.color=backgroundcolor;

    document.body.style.background = backgroundcolor;

    var hexBackgroundcolor = "hsla("+ gethue(seconds) + "," + getSat(minute)+ "," + getlight(hour) + ")";
    var curColor = document.getElementById("curColor");
    curColor.innerHTML = hexBackgroundcolor;

    window.setTimeout(showdate, 1000);
  };
};

// tellcolor.addEventListener("click", clickcolor, false);


// showdate();
// };

window.onload = main;
