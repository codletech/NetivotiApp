/**
 Creates the main page content.
 */

var mainPageContentArr = [];

    mainPageContentArr.push(


    /*
        Main title row - netivot online
     */
    viewsFactory.div({
        cssClasses: "nav_bar_back",
        content: viewsFactory.title({
            id: "main_title",
            title: "נתיבות Online",
            cssClasses: "title1"
        })
    }),

    /*
        div for the slider
        the slider content will be injected later
     */
    viewsFactory.div({
        cssClasses: "main_slider",
        divId: "netivoti_main_slider",
        content: "<div class=\"callbacks_container\"> <ul class=\"rslides\" id=\"slider4\"> </ul></div>"
    }),

    /*
        news title row
        the news content will be injected later
     */
    viewsFactory.div({
        cssClasses: "title_bar_back",
        divId: "news_row",
        content: viewsFactory.title({
            id: "news_title",
            title: "חדשות",
            cssClasses: "news_title_class"
        })
    }),

    /*
     news container
     the news content will be injected here
     */
    viewsFactory.div({
        cssClasses: "main_news_container",
        divId: "news_container",
        content: ""
    }),

    /*
         magazine title row
         the magazine content will be injected later
    */
    viewsFactory.div({
        cssClasses: "title_bar_back",
        divId: "magazine_row",
        content: viewsFactory.title({
            id: "magazine",
            title: "המגזין",
            cssClasses: "news_title_class"
        })
    }),

    /*
         magazine container
         the magazine content will be injected here
     */
    viewsFactory.div({
        cssClasses: "main_magazine_container",
        divId: "magazine_container",
        content: ""
    }),


    /*
     Galleries title row
     the galleries content will be injected later
     */
    viewsFactory.div({
        cssClasses: "title_bar_back",
        divId: "galleries_row",
        content: viewsFactory.title({
            id: "galleries",
            title: "גלריות",
            cssClasses: "galleries_title_class"
        })
    }),

    /*
     galleries container
     the galleries content will be injected here
     */
    viewsFactory.div({
        cssClasses: "main_galleries_container",
        divId: "galleries_container",
        content: ""
    })

    );

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
                        description: val.excerpt
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
                        description: val.excerpt
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
            $(function () {
                $("#slider4").responsiveSlides({
                    auto: true,
                    pager: false,
                    nav: false,
                    speed: 500,
                    namespace: "callbacks"
                });
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
var mainPageContent = mainPageContentArr.join("");

cPages.addPage("main",mainPageContent);