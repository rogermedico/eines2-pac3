/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 
// import 'bootstrap';
// import $ from 'jquery';

/**
 * Write any other JavaScript below
 */

 /* check if actual page is home page */
function iAmInHome(){
  const path = window.location.pathname.split('/');
  const actualPage = path[path.length-1];
  if(['index.html',''].includes(actualPage)) return true;
  else return false;
}

/* add or remove link class to tickets link depending on resolution */
function addLinkClassToEntrades(){
  const mainTickets = document.querySelector('#home__tickets__link');
  if(mainTickets) {
    if(window.innerWidth<640) mainTickets.classList.add('primary-link','text-white');
    else mainTickets.classList.remove('primary-link','text-white');
  }
}

/* ticket link tweak wrapper */
function ticketLinkTweak(){
  addLinkClassToEntrades();
  window.addEventListener('resize', addLinkClassToEntrades);
}

(() => {
  /* if home page */
  if(iAmInHome()) ticketLinkTweak();
})();
