/**
 Creates the main page content.
 */
var mainPageContent =
    /*
        Header - netivot online
     */
    viewsFactory.header({content_scroll_id:'main_page_content_scroller',title: 'נתיבות <span style="color:#00a6ed;">Online</span>'} )+
    '<div id="main_page_content"></div>'+
    viewsFactory.footer;

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
    var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_main_page_data.php";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var cats_divs = {0:'',1:'',2:'',3:''};
            cats_divs[2]+="<div class='galleries_row_wrap'><div style='width: 450px;'>";
            var index = 0;
            //parse the response to json
            var categories_data = JSON.parse(xmlhttp.responseText);
            for (var key in categories_data) {
                var category_data = categories_data[key];
                for (var post_key in category_data) {
                    var post = category_data[post_key];

                    if (index!=3) {
                        if(index==2)
                        {
                            cats_divs[index]+=
                                viewsFactory.gallery_row({
                                    cssClasses: "galleries_wrap",
                                    imgSrc: post.logo,
                                    imgClass: "cont_image",
                                    titleClass: "articles_main_title",
                                    mainTitle: post.name,
                                    onClick:  "gallery_page.loadPage("+post.id+");"
                                });
                        }
                        else
                        {
                            cats_divs[index]+=
                                viewsFactory.article_row({
                                    cssClasses: "article_wrap",
                                    imgSrc: post.logo,
                                    imgClass: "cont_image",
                                    titleClass: "articles_main_title",
                                    mainTitle: post.name,
                                    descriptionClass: "main_article_description",
                                    description: post.excerpt,
                                    onClick:  "article_page.loadPage("+post.id+");"
                                });
                        }
                    }
                    else {
                        cats_divs[index]+=
                            viewsFactory.sliderRow({
                                imgLink: post.logo,
                                imgDesc: post.name
                            });
                    }
                }
                index++;
            }
            cats_divs[2]+="</div></div>";
            //Add the data to the view.
            var main_data =
                '<div class="main_slider_top_container"><div class="swipe" id="netivoti_main_slider">'+
                    '<div id="netivoti_main_slider_content" class="swipe-wrap">'+cats_divs[3]+' </div>'+
                '</div></div>'+
                '<div id="news_row" class="news_title_class title_bar_back" onclick="archive_page.loadPage(2);">חדשות</div>'+cats_divs[0]+
                '<div id="magazine_row" class="news_title_class title_bar_back" onclick="archive_page.loadPage(3);">המגזין</div>'+cats_divs[1]+
                '<div id="galleries_row" class="news_title_class title_bar_back" onclick="archive_page.loadPage(9);" >גלריות</div>'+cats_divs[2];

            document.getElementById('main_page_content').innerHTML = main_data;
            app.container.clientHeight;
            var sliderContent = document.getElementById("netivoti_main_slider_content");
            var slider = document.getElementById('netivoti_main_slider');

            if (sliderContent && slider) {
                //alert(slider.id);
                sliderContent.innerHTML = cats_divs[3];
                sliderContent.clientHeight;
                //Save the data
                cPages.get("main").vars.sliderData = cats_divs[3];

                cPages.get("main").vars.mySwiper = new Swipe(slider,{
                    //Your options here:

                    //etc..
                });
            }
            app.container.clientHeight;
            cPages.get("main").vars.mainScroll = new IScroll('#main_page_content_scroller',{
                bounce:false,
                scrollbars: true
            });

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
        cPages.get("main").vars.mySwiper = new Swipe(slider,{
            //Your options here:

            //etc..
        });
        cPages.get("main").vars.mainScroll = new IScroll('#main_page_content_scroller',{
            bounce:false,
            scrollbars: true
        });
    }

}
cPages.addPage("main",mainPageContent,mainInitFunction);
