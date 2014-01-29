/**
 Creates the main page content.
 */

var mainPageContentArr = [];

    mainPageContentArr.push(

    viewsFactory.div({
        cssClasses: "nav_bar_back",
        content: viewsFactory.title({
            id: "main_title",
            title: "נתיבות Online",
            cssClasses: "title1"
        })
    }),

    viewsFactory.div({
        cssClasses: "main_slider",
        divId: "netivoti_main_slider",
        content: "<div class=\"callbacks_container\"> <ul class=\"rslides\" id=\"slider4\"> </ul></div>"
    }),

    viewsFactory.div({
        cssClasses: "title_bar_back",
        divId: "news_row",
        content: viewsFactory.title({
            id: "news_title",
            title: "חדשות",
            cssClasses: "news_title_class"
        })
    }),

    viewsFactory.div({
        cssClasses: "title_bar_back",
        divId: "magazine_row",
        content: viewsFactory.title({
            id: "magazine",
            title: "המגזין",
            cssClasses: "news_title_class"
        })
    }),


    viewsFactory.centeredDiv( {
        content: viewsFactory.button({
            id: "main_button",
            text: "קטגוריות",
            cssClasses: "button1",
            inlineStyle:"margin-top:5px;",
            onClick: function() {
                cPages.moveToPage(app.container,"articles",cPages.directions.left);
            }
        })
    } )

    );

(function() {
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?category_id=2";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
            $.each( JSON.parse(xmlhttp.responseText), function( key, val ) {
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
    xmlhttp.open("GET",netivotiAPI,true);
    xmlhttp.send();
    /*$.getJSON( netivotiAPI, function( json ) {
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
    });*/
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
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data2.php";
    $.getJSON( netivotiAPI, {category_id: '3'} ,function( json ) {
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



var mainPageContent = mainPageContentArr.join("");

cPages.addPage("main",mainPageContent);