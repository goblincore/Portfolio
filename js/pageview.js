/* global store, aboutPage,workPage,funPage */
// eslint-disable-next-line no-unused-vars
'use strict';

const pageview = (function(){

  const render = () => {
    // Outputs to DOM
    let page = store.page;
    $('.main').html(page);

  };

  const linkMap ={
    'about-link':aboutPage,
    'home-link':workPage,
    'fun-link':funPage
  };
  

  const handleChangePage =()=>{
    $('.nav-item, .mobile-nav-item, .header-title').on('click', 'a', event => {
      event.preventDefault();
       
      if(event.delegateTarget.className !== 'header-title'){
        // console.log('linkclicked',event);
        $('.nav-item a.active, .mobile-nav-item a.active,.header-title a.active').removeClass('active');
        store.page = linkMap[event.currentTarget.className];
        
        $(`.${event.currentTarget.className}`).addClass('active');
      } else {
        //  console.log('linkclicked',event);
        $('.nav-item a.active, .mobile-nav-item a.active,.header-title a.active').removeClass('active');
        store.page = linkMap[event.currentTarget.className];
        $('.home-link').addClass('active');
      }
       

      render();
      if(event.delegateTarget.className === 'mobile-nav-item'){
        mobileNavBehavior();
      }
    });

  };


  const handleMobileNav=()=>{
    $('.mobile-nav-trigger').on('click', event => {
      event.preventDefault();
      // console.log('mobile nav trigger',event);
      mobileNavBehavior();
       
    });

  };


  const mobileNavBehavior=()=>{
    if(!store.menuOpen){

      $('.shell').addClass('isFix');
      $('.mobile-nav-trigger,.mobile-nav,.footer').addClass('isOpen');
      store.menuOpen = true;
    } else if(store.menuOpen) {
        
      $('.mobile-nav-trigger,.mobile-nav,.footer').removeClass('isOpen');
      $('.shell').removeClass('isFix');
      store.menuOpen = false;

    }

  };
  
  function bindEventListeners() {
    handleChangePage();
    handleMobileNav();
  }

  // This object contains the only exposed methods from this module:
  return {
    render: render,
    bindEventListeners: bindEventListeners,
    
  };
}());