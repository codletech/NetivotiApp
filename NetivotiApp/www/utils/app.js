/**
 * App object.
 */
var app;
app = {
    container: document.getElementById("app_container"),
    init: function() {
        FastClick.attach(document.body);
        document.addEventListener("deviceready", initPushwoosh, true);
        cPages.moveToPage(this.container,"main","right");
    }


};

app.init();

function initPushwoosh()
{
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();

    pushNotification.registerDevice({ projectid: "centered-sol-520", appid : "94550-3136B" },
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );

    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;

        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }

        navigator.notification.alert(title);
    });
}