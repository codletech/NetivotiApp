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
    '<div class="main_slider" id="netivoti_main_slider">'+
        '<div class=\"callbacks_container\"> <ul class=\"rslides\" id=\"slider4\"> </ul></div>'+
    '</div>'+

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
                        onClick: function(){ article_page.loadPage(val.id); }
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
                        onClick: function(){ article_page.loadPage(val.id); }
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
            // for each record - inject html after the "news_row" div
            $.each( jsonAfterParse, function( key, val ) {
                $( "#slider4" ).append(
                    viewsFactory.sliderRow({
                        imgLink: val.logo,
                        imgDesc: val.name
                    }));
            });
            /*
            $(function () {
                $("#slider4").responsiveSlides({
                    auto: true,
                    pager: false,
                    nav: false,
                    speed: 500,
                    namespace: "callbacks"
                });
            });
            */
            $("#slider4").responsiveSlides({
                auto: true,
                pager: true,
                nav: true,
                speed: 500,
                maxwidth: 800,
                namespace: "centered-btns"
            });
        }
    }
    // open the connection using get method and send it
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
})();



/*
(function() {
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=2";
    $.getJSON( netivotiAPI, function( json ) {
        $.each( json, function( key, val ) {
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
    });
})();

(function() {
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=3";
    $.getJSON( netivotiAPI, function( json ) {
        $.each( json, function( key, val ) {
            $( "#magazine_row" ).after(
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
    });
})();

(function() {
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=2&imgWidth=800&imgHeight=400";
    $.getJSON( netivotiAPI ,function( json ) {
        $.each( json, function( key, val ) {
            $( "#slider4" ).append(
                viewsFactory.sliderRow({
                    imgLink: val.logo,
                    imgDesc: val.name
                }));
        });
        $(function () {
            $("#slider4").responsiveSlides({
                auto: true,
                pager: false,
                nav: false,
                speed: 500,
                namespace: "callbacks"
            });
        });
    });
})();


*/

cPages.addPage("main",mainPageContent);