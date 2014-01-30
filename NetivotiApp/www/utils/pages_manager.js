/**
 *  Page Manager is created to help create multi-paged applications in single html file.
 */
var cPages;
cPages = {
    /* the pages */
    pages: {},
    firstLoad: true,
    historyStack: new Array(),
    directions: {right:"right",left:"left"},
    directions_css_classes: {
        right:{
            container_class:"slide_right",
            page_before_class:"page_before_slide_right"
        },
        left:{
            container_class:"slide_left",
            page_before_class:"page_before_slide_left"
        }
    },
    moveBackDirection: "right",

    /**
     * Add new page to the page manager.
     * @param pageName: the name of the page.
     * @param pageContent: the content of the page.
     */
    addPage: function(pageName,pageContent) {
        //Create new page.
        this.pages[pageName] = {
            page_id: "page_"+pageName,
            content:        "<div id='page_"+pageName+"' style='width:"+ "100%"+";display:inline-block;translate3d:(0,0,0);'>"+pageContent+'</div>',
            vars:  {}
        }
    },

    /**
     * Remove page from the page manager.
     * @param pageName
     */
    removePage: function(pageName) {
        //Check if exist.
        if (pageName in this.pages) {
            //Deletes content.
            delete this.pages[pageName];
        }
    },

    /**
     * Returns the page with pageName.
     * @param pageName
     * @returns {{content: *, vars: {}}|*}
     */
    get: function(pageName) {
        return this.pages[pageName];
    },

    /**
     * move to page.
     * @param container
     * @param toPage
     * @param direction
     */
    moveToPage: function(container,toPage,direction) {
        if (toPage in this.pages) {
            //Push to stack history.
            this.historyStack.push(toPage);

            if (this.firstLoad) {
                container.innerHTML = this.pages[toPage].content;
                this.firstLoad = false;
                return;
            }

            // Default direction
            if (!direction in this.directions || direction== undefined) {
                direction = this.directions.right;
            }

            container.style.position = "relative";

            var toPageDiv = document.getElementById('page_'+toPage);
            //Add to container.
            if (!toPageDiv) {
                container.innerHTML += this.pages[toPage].content;
                toPageDiv = document.getElementById('page_'+toPage);
            }

            toPageDiv.style.display = "inline-block";


            //Move to the side.
            toPageDiv.className = toPageDiv.className + " "+cPages.directions_css_classes[direction].page_before_class;
            toPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!

            //Unbind all transition callbacks.
            $("#"+container.id).unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
            //Bind transition end callback.
            $("#"+container.id).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                toPageDiv.className =  toPageDiv.className.replace(cPages.directions_css_classes[direction].page_before_class,"");
                container.className =  container.className.replace(cPages.directions_css_classes[direction].container_class,"");
                //container.innerHTML = cPages.pages[toPage].content;
                for (var page in cPages.pages) {
                    //alert(toPage);
                    //alert(page);
                    if (page != toPage){
                        var toHidePage = document.getElementById(cPages.pages[page].page_id);
                        if (toHidePage!=null && toHidePage!=undefined){
                            toHidePage.style.display = "none";
                        }
                    }
                }
            });
            //Start Transition.
            container.className = container.className + " "+this.directions_css_classes[direction].container_class;
            //container.clientHeight; //Force layout refresh. IMPORTANT!!!
            //toPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!

        }
        else {
            console.error("moveToPage Error: page "+toPage+" doesn't exist.");
        }
    },

    moveBack: function(container) {
        //Remove last page from the history.
        this.historyStack.pop();
        var page = this.historyStack.pop();
        this.moveToPage(container,page,this.moveBackDirection);
    }



}
