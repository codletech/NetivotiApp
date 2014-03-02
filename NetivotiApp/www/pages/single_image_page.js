/**
 Creates the categories page content.
 */
var single_image_page = {
    loadPage: function(img_src, name) {
        var single_image_page_content =
            viewsFactory.header({title: 'נתיבות <span style="color:#00a6ed;">Online</span>',page_content_class: 'gallery_page_content',content_scroll_id:'gallery_page_main_content', backButton:true, title_id: 'single_image_page_title_id'})+
                '<div id="gallery_second_title">'+name+'</div>'+
                '<div class="line_sep"></div>'+
                '<img class="full_image" src="'+img_src+'"/>'+
                viewsFactory.footer({id:"single_image_footer"});
        cPages.addPage("single_image_page",single_image_page_content);
        cPages.moveToPage(app.container,"single_image_page",cPages.directions.left, function(){ loadAdToStrip('single_image_footer'); touchScroll('gallery_page_main_content'); });
    }
}
