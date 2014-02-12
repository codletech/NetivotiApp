/**
 Creates the categories page content.
 */
var archive_page = {
    loadPage: function(cat_id) {
        var archivePageContents =
            viewsFactory.header({title: 'נתיבות <span style="color:#00a6ed;">Online</span>',page_content_class: 'articles_page_content',content_scroll_id:'articles_page_main_content', backButton:true, title_id: 'articles_page_title_id'})+
                viewsFactory.footer;
        (function() {
            // api address
            var netivotiAPI = "http://www.netivoti.co.il/wp-content/Application/get_data.php?archive_id="+cat_id;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange=function()
            {
                // debug : console.log("log: in news - status"+ xmlhttp.status+" and readystate: "+xmlhttp.readyState);
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    //parse the response to json
                    var jsonAfterParse = JSON.parse(xmlhttp.responseText);
                    console.log(jsonAfterParse.name);
                    var bodyTextToAppend='<div id="news_row" class="news_title_class title_bar_back">'+jsonAfterParse.name+'</div>';
                    var articles = jsonAfterParse.articles;
                    for (var i=0;i<articles.length;i++)
                    {
                        console.log(i);
                        bodyTextToAppend+=viewsFactory.article_row({
                            cssClasses: "article_wrap",
                            imgSrc: articles[i].logo,
                            imgClass: "cont_image",
                            titleClass: "articles_main_title",
                            mainTitle: articles[i].name,
                            descriptionClass: "main_article_description",
                            description: articles[i].excerpt,
                            onClick:  "article_page.loadPage("+articles[i].id+");"
                        });
                    }

                    document.getElementById('articles_page_main_content').innerHTML = bodyTextToAppend;
                }
            }
            // open the connection using get method and send it
            xmlhttp.open("GET",netivotiAPI,true);
            xmlhttp.send();
        })();
        cPages.addPage("cur_archive_page",archivePageContents);
        cPages.moveToPage(app.container,"cur_archive_page",cPages.directions.left);
    }
}