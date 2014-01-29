/**
 Creates the categories page content.
 */
var articlesPageContentArr = [];
articlesPageContentArr.push(
    viewsFactory.title({
        id: "articles_title",
        title: "כתבות",
        cssClasses: "title1"
    }),
    viewsFactory.centeredDiv( {
        content: viewsFactory.button({
                    id: "articles_button",
                    text: "חזור",
                    cssClasses: "button1",
                    inlineStyle:"margin-top:5px;",
                    onClick: function() {
                        cPages.moveBack(app.container);
                    }
                }) +
                viewsFactory.button({
                    id: "to_businesses_button",
                    text: "עסקים",
                    cssClasses: "button1",
                    inlineStyle:"margin-top:5px;margin-left:5px;",
                    onClick: function() {
                        cPages.moveToPage(app.container,"business",cPages.directions.left);
                    }
                })
    } )

);

var articlesPageContent = articlesPageContentArr.join("");

cPages.addPage("articles",articlesPageContent);