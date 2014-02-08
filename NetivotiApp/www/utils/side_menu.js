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
            '<div id="side_menu_container" class="side_menu_hidden"></div>'+
            '<div id="side_menu_whitespace" style="display:none;" class="side_menu_visible" ontouchstart="side_menu.whiteSpaceTouch();"></div>'
        ;
        app.container.innerHTML+=(this.content);

    },

    showOrHide: function() {
        if (!this.content) {
            this.create();
            app.container.clientHeight;
        }

        if (this.state == 'hidden') {
            document.getElementById('side_menu_container').className = document.getElementById('side_menu_container').className.replace('side_menu_hidden','side_menu_visible');
            document.getElementById('side_menu_whitespace').style.display="";
            document.getElementById('side_menu_whitespace').style.width = window.innerWidth-45+"px";
            document.getElementById('side_menu_whitespace').style.marginRight="45px";
            this.state = 'visible';
        }
        else {
            document.getElementById('side_menu_container').className = document.getElementById('side_menu_container').className.replace('side_menu_visible','side_menu_hidden');
            document.getElementById('side_menu_whitespace').style.display="none";
            this.state = 'hidden';
        }

    }

}