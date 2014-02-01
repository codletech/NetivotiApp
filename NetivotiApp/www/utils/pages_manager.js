/**
 *  Page Manager is created to help create multi-paged applications in single html file.
 */
var cPages;
cPages = {
    /* the pages */
    pages: {},
    firstLoad: true,
    historyStack: new Array(),
    currentPage: "",
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
            content:        "<div class='gpu_accelerated pages_manager_page' id='page_"+pageName+"' style='width:"+ "100%"+";display:inline-block;'>"+pageContent+'</div>',
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
            var toDeletePage = document.getElementById(this.pages[pageName].page_id);
            //Add to container.
            if (toDeletePage) {
                toDeletePage.parentNode.removeChild(toDeletePage);
            }
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
    moveToPage: function(container,toPage,direction,onFinish) {
        if (toPage in this.pages) {
            //Push to stack history.
            this.historyStack.push(toPage);
            var lastPage = cPages.currentPage;
            var lastPageDiv = null;
            if (lastPage!="") {
                lastPageDiv = document.getElementById(cPages.pages[lastPage].page_id);
            }

            if (this.firstLoad || !lastPageDiv) {
                container.innerHTML = this.pages[toPage].content;
                this.firstLoad = false;
                cPages.currentPage = toPage;
                return;
            }
            //Replace current page.
            cPages.currentPage = toPage;


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
            lastPageDiv = document.getElementById(cPages.pages[lastPage].page_id);


            //Move to the side.
            toPageDiv.className = toPageDiv.className + " "+cPages.directions_css_classes[direction].page_before_class;
            toPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!
            //lastPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!


            //Unbind all transition callbacks.
            $("#"+lastPageDiv.id).unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
            //Bind transition end callback.
            $("#"+lastPageDiv.id).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                //alert(lastPageDiv.id);
                //alert(toPageDiv.id);
                toPageDiv.className =  toPageDiv.className.replace(cPages.directions_css_classes[direction].page_before_class,"");
                lastPageDiv.className =  lastPageDiv.className.replace(cPages.directions_css_classes[direction].container_class,"");
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
                if (onFinish) {
                    onFinish();
                }
            });
            //Start Transition.
            //alert(lastPageDiv.id);
            lastPageDiv.className = lastPageDiv.className+ " "+this.directions_css_classes[direction].container_class;
            //alert(lastPageDiv.className);
            //container.clientHeight; //Force layout refresh. IMPORTANT!!!
            //toPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!
            //lastPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!
            //toPageDiv.clientHeight; //Force layout refresh. IMPORTANT!!!

        }
        else {
            console.error("moveToPage Error: page "+toPage+" doesn't exist.");
        }
    },

    moveBack: function(container) {
        //Remove last page from the history.
        var toDelete = this.historyStack.pop();
        var page = this.historyStack.pop();
        this.moveToPage(container,page,this.moveBackDirection,function() {cPages.removePage(toDelete);});
    }



}
