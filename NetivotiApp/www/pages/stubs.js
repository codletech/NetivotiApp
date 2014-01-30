/**
 * Created by tallevi on 30/01/14.
 */


/*
 anonymous function to inject the news records into them curresponding div
 TODO - find a proper design to this function

 (function() {
 // api address
 var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=2";
 xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange=function()
 {
 if (xmlhttp.readyState==4 && xmlhttp.status==200)
 {
 //parse the response to json
 var jsonAfterParse = JSON.parse(xmlhttp.responseText);
 // for each record - inject html after the "news_row" div
 $.each( jsonAfterParse , function( key, val ) {
 $( "#news_row" ).after(
 viewsFactory.article_row({
 cssClasses: "article_wrap",
 imgSrc: val.logo,
 imgClass: "cont_image",
 titleClass: "articles_main_title",
 mainTitle: val.name,
 descriptionClass: "main_article_description",
 description: val.excerpt
 }));
 });
 }
 }
 // open the connection using get method and send it
 xmlhttp.open("GET",netivotiAPI,true);
 xmlhttp.send();
 })();
 */
