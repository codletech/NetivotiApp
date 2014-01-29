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

    article_row: doT.template("<div class='{{=it.cssClasses || \"\" }}'><img src='{{=it.imgSrc || \"\" }}' class='{{=it.imgClass || \"\" }}'> <h3 class='{{=it.titleClass || \"\" }}'>{{=it.mainTitle || \"\" }}</h3> <div class='{{=it.descriptionClass || \"\" }}'>{{=it.description || \"\" }}</div></div> "),

    sliderRow: doT.template("<li> <img src='{{=it.imgLink || \"\" }}'> <p class=\"caption\">{{=it.imgDesc || \"\" }}</p> </li> ")


}
