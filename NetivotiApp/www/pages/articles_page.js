/**
 Creates the categories page content.
 */
var article_page = {
    loadPage: function(article_id) {
        var articlesPageContent =
            '<div class="nav_bar_back">'+
                '<div class="title1" id="main_title">'+article_id+'</div>'+
            '</div>' +
            '<div class="button1" onclick="cPages.moveBack(app.container)">חזור</div>';
        cPages.addPage("single_article_page",articlesPageContent);
        cPages.moveToPage(app.container,"single_article_page",cPages.directions.right);
    }
}
