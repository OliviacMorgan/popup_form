/*1. var for id of main nav bar not including button and sidebar*/
var content = document.querySelector('#navi-content');
/*2.Var: ID for Side bar div which is currently empty*/
var sidebarBody = document.querySelector('#navi-sidebar');
var sidebarBodyContent = document.querySelector('#navi-sidebar-body');
/*3.Var: ID for Hamburgerbutton*/
var button = document.querySelector('#navi-button');
/*4.Var: ID for background grey color when sidebard is visable*/
var overlay = document.querySelector('#navi-overlay');
/*2.Var: class name in css to add to side bar and button when hamburger clicked*/
var activatedClass = 'navi-activated';

/*We are pulling in nav bar content into sidebar so we don't have to update both*/
sidebarBodyContent.innerHTML = content.innerHTML

/**
 * Allows to add the navi-activated CSS class if the button is clicked
 */

button.addEventListener('click', function (e){ /*button lisiening for a click, Anynomus function with a event argument */
    e.preventDefault;
    sidebarBody.parentNode.classList.toggle(activatedClass); /*"this" refering button*/
        /*parentNode pulls entire containing html content from largest div*/
        /*classList returns live DOMtokenlist of class attributes*/
        /*There are many methods other than add you can use with DOMtokenList*/
    });


/**
 *Allows you to close the sidebar with the escape key on the keyboard
 */
button.addEventListener('keydown', function (e){
    if (sidebarBody.parentNode.classList.contains(activatedClass)) /*Checks to see if div currently has activeclass css*/
    {
        if (e.repeat === false && e.which === 27)
            /*not sure why we are using e.repeat here. it is checking to see if the event has not repeated*/
            /*e.which spesifies listening for escape key only using Unicode key number. Otherwise any key would remove activeclass*/
            sidebarBody.parentNode.classList.remove(activatedClass);
    }
});

/**
 * Allows to close the sidebar if click in the overlay
 */
overlay.addEventListener('click', function (e){
    e.preventDefault;
    sidebarBody.parentNode.classList.remove(activatedClass);
})
