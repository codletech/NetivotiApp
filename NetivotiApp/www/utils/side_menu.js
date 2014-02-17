function showHideSubMenu(id)
{
    if(document.getElementById(id).style.display=="block")
    {
        document.getElementById(id).style.display="none";
    }
    else
    {
        document.getElementById(id).style.display="block";
    }
}
/***
 Slide Side Menu.
 **/
var side_menu = {
    content: null,
    state: 'hidden',
    whiteSpaceTouch: function() {
        side_menu.showOrHide();
    },
    create: function() {
        this.content =
            '<div id="side_menu_container" class="side_menu_hidden">'+
            '<div id="side_menu_business_button" class="menu_button">עסקים</div>'+
            '<div id="side_menu_app_content" class="menu_button" onclick="showHideSubMenu(\'side_menu_app_content_sub_menu\')">תוכן האפליקציה</div>'+
            '<div id="side_menu_app_content_sub_menu" class="menu_hidden_container">'+
                '<div class="menu_sub_button" onclick="side_menu.showOrHide(function(){archive_page.loadPage(2);});">חדשות</div>'+
                '<div class="menu_sub_button" onclick="side_menu.showOrHide(function(){archive_page.loadPage(3);});">המגזין</div>'+
                '<div class="menu_sub_button" onclick="side_menu.showOrHide(function(){archive_page.loadPage(9);});">גלריות</div>'+
            '</div>'+
            '<div id="side_menu_app_content" class="menu_button">צור קשר / פרסם כאן</div>'+
            '</div>'+
            '<div id="side_menu_whitespace" style="display:none;" class="side_menu_visible" ontouchstart="side_menu.whiteSpaceTouch();">'+
            +
            '</div>'
        ;
        app.container.innerHTML+=(this.content);

    },

    showOrHide: function(onFinish) {
        if (this.state == 'onHide') {
            return;
        }

        if (!this.content) {
            this.create();
            app.container.clientHeight;
        }
        // unbind ontransition end.
        $("#side_menu_container").unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");

        if (this.state == 'hidden') {
            document.getElementById('side_menu_container').style.display="";
            document.getElementById('side_menu_container').clientHeight;
            document.getElementById('side_menu_container').className = document.getElementById('side_menu_container').className.replace('side_menu_hidden','side_menu_visible');
            document.getElementById('side_menu_whitespace').style.display="";
            document.getElementById('side_menu_whitespace').style.width = window.innerWidth-45+"px";
            document.getElementById('side_menu_whitespace').style.marginRight="90px";
            this.state = 'visible';
            app.container.clientHeight;
        }
        else if (this.state == 'visible'){
            document.getElementById('side_menu_container').className = document.getElementById('side_menu_container').className.replace('side_menu_visible','side_menu_hidden');
            $("#side_menu_container").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                document.getElementById('side_menu_container').style.display="none";
                document.getElementById('side_menu_whitespace').style.display="none";
                side_menu.state = 'hidden';
                if (onFinish) {
                    onFinish();
                }
            });
            this.state = 'onHide';
            if (cPages.pages[cPages.currentPage] && cPages.pages[cPages.currentPage].refresh) {
                cPages.pages[cPages.currentPage].refresh();
            }
        }

    }

}