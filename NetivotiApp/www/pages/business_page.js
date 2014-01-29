/**
 Creates the business page content.
 */

var businessPageContentArr = [];
businessPageContentArr.push(
    viewsFactory.title({
        id: "business_title",
        title: "עסק",
        cssClasses: "title1"
    }),
    viewsFactory.centeredDiv( {
        content: viewsFactory.button({
            id: "business_button",
            text: "חזור",
            cssClasses: "button1",
            inlineStyle:"margin-top:5px;",
            onClick: function() {
                cPages.moveBack(app.container);
            }
        })
    } )

);

var businessPageContent = businessPageContentArr.join("");

cPages.addPage("business",businessPageContent);