document.addEventListener('DOMContentLoaded', () => {
  // CLASS TARGET

  // FOR HEADER TOGGLE SHOW WHEN SCROLL
  let pageY = 0;
  let prevY = 0;

  // init
//   if (window.pageYOffset === document.body.offsetTop) {
//     scrollTop.style.display = "none";
//     btnScroll.style.display = "none";
//     scrollTopSp.style.display = "none";
//   }




//   window.onscroll = () => {
//     prevY = pageY;
//     pageY = window.pageYOffset;

//     console.log('prevY = ' + window.pageYOffset + 'currentY = ' + document.body.offsetTop);


//     //STORY SECTION
//     if(hero_blur){
//         fullpage_api.setResponsive(true);
//         console.log('yawa');
//     }



//   };
});


// // MODAL
// var modal = document.getElementById("Modal");

// // Get the button that opens the modal
// var btn = document.getElementById("Btn");
// var btn2 = document.getElementById("Butn");


// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// btn2.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }





new fullpage('#fullpage', {
    autoscrolling: true,
    anchors: ['hero', 'news', 'information', 'activity', 'pictures', 'contact', 'oceanShiga',
        'p-footer'
    ],
    css3: true,
    scrollingSpeed: 1000,
    fitToSection: true,
    dragAndMove: true,
    responsiveWidth:641,
    afterLoad:(origin,destination,direction) =>{
        const philosophy = document.querySelector('.philosophy');
        const hero_blur = document.querySelector('.hero__blur');
        
        if(destination.index){
            philosophy.classList.remove('fadeIn');
            hero_blur.classList.remove('blur');

        }else{
            philosophy.classList.add('fadeIn');
            hero_blur.classList.add('blur');
            
        }

    },
    onLeave:(origin,destination,direction)=>{
        // SECTION 
        const section = destination.item;
        const philosophy = document.querySelector('.philosophy');
        const hero_blur = document.querySelector('.hero__blur');
        // NAVIGATION
        const navigation_a = document.querySelectorAll('.l-navigation__links > a');
        const navigation_links = document.querySelectorAll('.l-navigation__links ');
        const navigation = document.querySelector('.l-navigation');
        // NAVIGATION SCROLLS
        const scrollLine = document.querySelector('.ah');
        const scroll = document.querySelector('.scroll');

        //NAVIGATION BY ID
        const nav_top = document.getElementById('nav_top');
        const nav_news = document.getElementById('nav_news');
        const nav_info = document.getElementById('nav_info');
        const nav_activity = document.getElementById('nav_activity');
        const nav_contact = document.getElementById('nav_contact');
        


        if(destination.index){
            philosophy.classList.remove('fadeIn');


        }else{
            philosophy.classList.add('fadeIn');
            hero_blur.classList.add('blur');
        }

        if(destination.index === 1  || destination.index === 2 || destination.index === 3 ){
            nav_top.src ="public/img/navigation/nav_btop.png";
            nav_news.src ="public/img/navigation/nav_bnews.png";
            nav_info.src ="public/img/navigation/nav_binformation.png";
            nav_activity.src ="public/img/navigation/nav_bactivity.png";
            nav_contact.src ="public/img/navigation/nav_bcontact.png";

            navigation_links[0].style.borderBottom = "2px solid #000";
            navigation_links[1].style.borderBottom = "2px solid #000";
            navigation_links[2].style.borderBottom = "2px solid #000";
            navigation_links[3].style.borderBottom = "2px solid #000";

            scrollLine.style.backgroundColor="#000";
            scroll.style.color="#000";
            
        }else{
            nav_top.src ="public/img/navigation/nav_wtop.png";
            nav_news.src ="public/img/navigation/nav_wnews.png";
            nav_info.src ="public/img/navigation/nav_winformation.png";
            nav_activity.src ="public/img/navigation/nav_wactivity.png";
            nav_contact.src ="public/img/navigation/nav_wcontact.png";

            navigation_links[0].style.borderBottom = "2px solid #FFF";
            navigation_links[1].style.borderBottom = "2px solid #FFF";
            navigation_links[2].style.borderBottom = "2px solid #FFF";
            navigation_links[3].style.borderBottom = "2px solid #FFF";

            scrollLine.style.backgroundColor="#FFF";
            scroll.style.color="#FFF";
        }

        if( destination.index === 5 || destination.index === 6 || destination.index === 7){
            scrollLine.style.display="none";
            scroll.style.display="none";
            navigation.style.display="none";

        }else{
            scrollLine.style.display="block";
            scroll.style.display="inline-block";
            navigation.style.display="block";

        }

        
        
    },
});


$(window).resize(function () {
    var container_width = $('.fb-frame').width();
    $('.fb-frame').html(
        '<div class="fb-page" data-href="https://www.facebook.com/oceanshigablacks" data-width="' +
        container_width +
        '" data-height="450" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/oceanshigablacks"><a href="https://www.facebook.com/oceanshigablacks">Facebook</a></blockquote></div></div>'
        );
    FB.XFBML.parse();
});


var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("Btn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}