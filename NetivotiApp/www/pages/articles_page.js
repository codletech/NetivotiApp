/**
 Creates the categories page content.
 */
var article_page = {
    loadPage: function(article_id) {
        var articlesPageContent =
            viewsFactory.header({title:article_id,backButton:true})+
            '<div class="button1" onclick="cPages.moveBack(app.container)">חזור</div>'
            +
            viewsFactory.footer;
        cPages.addPage("single_article_page",articlesPageContent);
        cPages.moveToPage(app.container,"single_article_page",cPages.directions.left);
    }
}
