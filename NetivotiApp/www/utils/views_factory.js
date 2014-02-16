/**
 * Views manipulations.
 * Created by dvircn on 25/01/14.
 */
var viewsFactory;
var doT;

viewsFactory = {
    /**
     *
     */
    title: doT.template("<h1 id='{{=it.id || \"\" }}' class='{{=it.cssClasses || \"\" }}' style='{{=it.inlineStyle || \"\" }}'>{{=it.title || \"\" }}</h1>"),

    button: doT.template("<div id='{{=it.id || \"\" }}' class='{{=it.cssClasses || \"\" }}' style='{{=it.inlineStyle || \"\" }}' onclick='({{=it.onClick || \"function(){}\" }})();'>{{=it.text || \"\" }}</div>"),

    centeredDiv: doT.template("<div style=\"text-align: center;\">{{=it.content || \"\" }}</div> "),

    div: doT.template("<div class='{{=it.cssClasses || \"\" }}' id='{{=it.divId || \"\" }}' >{{=it.content || \"\" }}</div> "),

    article_row: doT.template("<div onclick='{{=it.onClick || \"\" }}' class='{{=it.cssClasses || \"\" }}' style='background-image:url(\"{{=it.imgSrc || \"\" }}\")'><div class='article_content_container'> <div class='{{=it.titleClass || \"\" }}'>{{=it.mainTitle || \"\" }}</div> <div class='{{=it.descriptionClass || \"\" }}'>{{=it.description || \"\" }}</div></div></div> "),

    gallery_row: doT.template("<div onclick='{{=it.onClick || \"\" }}' class='{{=it.cssClasses || \"\" }}' style='background-image:url(\"{{=it.imgSrc || \"\" }}\")'><div class='gallery_content_container'> <div class='{{=it.titleClass || \"\" }}'>{{=it.mainTitle || \"\" }}</div> </div></div> "),

    sliderRow: doT.template("<div class='swiper-slide main_photo_slide' style='background: url(\"{{=it.imgLink || \"\" }}\");background-size: 100% auto;' > <!--<img class='responsive_image' src='{{=it.imgLink || \"\" }}'>--> <div class=\"mainSliderCaption\">{{=it.imgDesc || \"\" }}</div> </div> "),

    header: function(options) {
        var header_str = '<div class="page_header">'+
            '<div class="nav_bar_back"><div class="main_menu_button" onclick="side_menu.showOrHide();"></div><div class="title1" id='+(options.title_id || "main_title")+'>'+(options.title || "" )+'</div></div>'+
            (options.backButton ?
                '<div class="back_button" onclick="cPages.moveBack(app.container)"></div>' : '') +
            '<div id="main_top_row_div"></div>'+
            '</div>'+
            '<div class="'+(options.page_content_class? options.page_content_class:'page_content')+'" id="'+(options.content_scroll_id? options.content_scroll_id:'')+'">';

        return header_str;
    },
    footer: '</div>'

}
