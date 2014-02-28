/**
 * Created by tallevi on 27/02/14.
 */

/**
 * Function that gets the div of the ad strip
 * and get random ad from the server
 * then place the ad in the strip
 */
function loadAdToStrip(divID)
{
    var page_ad = document.getElementById(divID);
    //page_ad.style.backgroundImage.
    // api address
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?get_ads=1";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var jsonAfterParse = JSON.parse(xmlhttp.responseText);
            page_ad.style.backgroundImage = ' url("'+jsonAfterParse.ad+'")';
        }
    }
    // open the connection using get method and send it
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
}

