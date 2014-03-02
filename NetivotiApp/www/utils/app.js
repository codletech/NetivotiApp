/**
 * App object.
 */
var app;
app = {
    container: document.getElementById("app_container"),
    init: function() {
        FastClick.attach(document.body);
        cPages.moveToPage(this.container,"main","right");
    }


};

app.init();