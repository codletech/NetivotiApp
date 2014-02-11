/**
 Creates the categories page content.
 */
var single_image_page = {
    loadPage: function(img_src) {
        var single_image_page_content =
            viewsFactory.header({title: 'נתיבות <span style="color:#00a6ed;">Online</span>',page_content_class: 'single_image_page_content',content_scroll_id:'single_image_page_main_content', backButton:true, title_id: 'single_image_page_title_id'})+
                '<img src="'+img_src+'"/>'+
                viewsFactory.footer;
        cPages.addPage("single_image_page",single_image_page_content);
        cPages.moveToPage(app.container,"single_image_page",cPages.directions.left);
    }
}
