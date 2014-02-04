/**
 Creates the main page content.
 */
var mainPageContent =
    /*
        Main title row - netivot online
     */
    '<div class="nav_bar_back"><div class="title1" id="main_title">נתיבות Online</div></div>'+
    
    /*
        div for the slider
        the slider content will be injected later
     */
    '<div style="display: inline-block;position: relative;height: 200px;width: 100%;"><div class="swiper-container" id="netivoti_main_slider">'+
        '<div id="netivoti_main_slider_content" class="swiper-wrapper"> </div>'+
        '<div class="main_page_pagination"></div>' +
    '</div></div>'+

    /*
        news title row
        the news content will be injected later
     */
    '<div class="title_bar_back" id="news_row">'+
        '<div id="news_title" class="news_title_class">חדשות</div>'+
    '</div>'+
    /*
     news container
     the news content will be injected here
     */
    '<div class="main_news_container" id="news_container"></div>'+

    /*
         magazine title row
         the magazine content will be injected later
    */
    '<div class="title_bar_back" id="magazine_row">'+
        '<div id="magazine" class="news_title_class">המגזין</div>'+
    '</div>'+

    /*
         magazine container
         the magazine content will be injected here
     */
    '<div class="main_magazine_container" id="magazine_container"></div>'+

    /*
     Galleries title row
     the galleries content will be injected later
     */
    '<div class="title_bar_back" id="galleries_row">'+
        '<div id="galleries" class="news_title_class">גלריות</div>'+
    '</div>'+

    /*
     galleries container
     the galleries content will be injected here
     */
    '<div class="main_magazine_container" id="galleries_container"></div>';

/*
    ------------------------ Html injection functions --------------------------
    -- get data from netivoti server through json , parse it and inject it to --
    -- the html. TODO - arrange the struction and design those functions.     --
    ----------------------------------------------------------------------------
 */

/*
    =============================== news injection =============================
     Anonymous function to inject the news records into them curresponding div
     TODO - find a proper design to this function
    ============================================================================
 */

(function() {
    // api address
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=2&numOfPosts=4";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        // debug : console.log("log: in news - status"+ xmlhttp.status+" and readystate: "+xmlhttp.readyState);
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            //parse the response to json
            var jsonAfterParse = JSON.parse(xmlhttp.responseText);
            // for each record - inject html after the "news_row" div
            $.each( jsonAfterParse , function( key, val ) {
                // console.log(val.name);
                $( "#news_container" ).append(
                    viewsFactory.article_row({
                        cssClasses: "article_wrap",
                        imgSrc: val.logo,
                        imgClass: "cont_image",
                        titleClass: "articles_main_title",
                        mainTitle: val.name,
                        descriptionClass: "main_article_description",
                        description: val.excerpt,
                        onClick:  "article_page.loadPage("+val.id+");"
                    }));
            });
        }
    }
    // open the connection using get method and send it
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
})();

/*
 =============================== magazine injection =============================
 Anonymous function to inject the magazine records into them curresponding div
 TODO - find a proper design to this function
 ============================================================================
 */
(function() {
    // api address
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=3&numOfPosts=4";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        // console.log("log: in magazine - status"+ xmlhttp.status+" and readystate: "+xmlhttp.readyState);
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            entered = true;
            //parse the response to json
            var jsonAfterParse = JSON.parse(xmlhttp.responseText);
            // for each record - inject html after the "news_row" div
            $.each( jsonAfterParse , function( key, val ) {
                $( "#magazine_container" ).append(
                    viewsFactory.article_row({
                        cssClasses: "article_wrap",
                        imgSrc: val.logo,
                        imgClass: "cont_image",
                        titleClass: "articles_main_title",
                        mainTitle: val.name,
                        descriptionClass: "main_article_description",
                        description: val.excerpt,
                        onClick:  "article_page.loadPage("+val.id+");"
                    }));
            });
        }
    }
    // open the connection using get method and send it
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
})();

/*
 =============================== galleries injection =============================
 Anonymous function to inject the galleries records into them curresponding div
 TODO - find a proper design to this function
 ============================================================================
 */
(function() {
    // api address
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=9&numOfPosts=4";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        // console.log("log: in magazine - status"+ xmlhttp.status+" and readystate: "+xmlhttp.readyState);
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            entered = true;
            //parse the response to json
            var jsonAfterParse = JSON.parse(xmlhttp.responseText);
            // for each record - inject html after the "news_row" div
            $.each( jsonAfterParse , function( key, val ) {
                $( "#galleries_container" ).append(
                    viewsFactory.article_row({
                        cssClasses: "article_wrap",
                        imgSrc: val.logo,
                        imgClass: "cont_image",
                        titleClass: "articles_main_title",
                        mainTitle: val.name,
                        descriptionClass: "main_article_description",
                        description: val.excerpt,
                        onClick: "article_page.loadPage("+val.id+");"
                    }));
            });
        }
    }
    // open the connection using get method and send it
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
})();

/*
 =============================== slider injection =============================
 Anonymous function to inject the slider records into them curresponding div
 TODO - find a proper design to this function
 ============================================================================
 */

(function() {
    // api address
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=8&numOfPosts=4&imgWidth=800&imgHeight=400";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        console.log("tal log: in magazine - status"+ xmlhttp.status+" and readystate: "+xmlhttp.readyState);
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            entered = true;
            //parse the response to json
            var jsonAfterParse = JSON.parse(xmlhttp.responseText);
            var sliderData = "";
            // for each record - inject html after the "news_row" div
            $.each( jsonAfterParse, function( key, val ) {
                sliderData +=
                    viewsFactory.sliderRow({
                        imgLink: val.logo,
                        imgDesc: val.name
                    });
            });
            var sliderContent = document.getElementById("netivoti_main_slider_content");
            var slider = document.getElementById('netivoti_main_slider');

            if (sliderContent && slider) {
                //alert(slider.id);
                sliderContent.innerHTML = sliderData;
                sliderContent.clientHeight;
                //Save the data
                cPages.get("main").vars.sliderData = sliderData;

                cPages.get("main").vars.mySwiper = new Swiper(slider,{
                    //Your options here:
                    mode:'horizontal',
                    loop: true,
                    autoplay: 3000,
                    autoplayDisableOnInteraction: false,
                    pagination: '.main_page_pagination',
                    paginationClickable: true
                    //etc..
                });
            }

        }
    }
    // open the connection using get method and send it
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
})();

var mainInitFunction = function() {
    var slider = document.getElementById('netivoti_main_slider');
    var sliderContent = document.getElementById("netivoti_main_slider_content");
    if (slider && sliderContent) {
        if (cPages.get("main").vars.sliderData) {
            sliderContent.innerHTML = cPages.get("main").vars.sliderData;
        }
        else {
            sliderContent.innerHTML = "";
        }
        cPages.get("main").vars.mySwiper = new Swiper(slider,{
            //Your options here:
            mode:'horizontal',
            loop: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            pagination: '.main_page_pagination',
            paginationClickable: true
            //etc..
        });

    }

}
cPages.addPage("main",mainPageContent,mainInitFunction);
