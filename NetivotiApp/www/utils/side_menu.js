/***
 Slide Side Menu.
 **/
var side_menu = {
    content: null,
    state: 'hidden',
    addTouchListenet: function(){
        document.getElementById('side_menu_whitespace').addEventListener('touchstart', function(event){
            side_menu.showOrHide();
        }, false);
    },
    create: function() {
        this.content =
            '<div id="side_menu_container" class="side_menu_hidden"></div>'+
            '<div id="side_menu_whitespace"  class="side_menu_hidden"></div>'
        ;
        app.container.innerHTML+=(this.content);
        this.addTouchListenet();
    },

    showOrHide: function() {
        if (!this.content) {
            this.create();
            document.getElementById('side_menu_container').clientHeight;
        }
        if (typeof(document.getElementById("side_menu_whitespace").touchstart) == "undefined"){
            this.addTouchListenet();
        }

        if (this.state == 'hidden') {
            document.getElementById('side_menu_container').className = document.getElementById('side_menu_container').className.replace('side_menu_hidden','side_menu_visible');
            document.getElementById('side_menu_whitespace').className = document.getElementById('side_menu_container').className.replace('side_menu_hidden','side_menu_visible');
            this.state = 'visible';
        }
        else {
            document.getElementById('side_menu_container').className = document.getElementById('side_menu_container').className.replace('side_menu_visible','side_menu_hidden');
            document.getElementById('side_menu_whitespace').className = document.getElementById('side_menu_container').className.replace('side_menu_visible','side_menu_hidden');
            this.state = 'hidden';
        }

    }

}