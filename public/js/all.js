document.addEventListener("DOMContentLoaded",(()=>{})),new fullpage("#fullpage",{autoscrolling:!0,anchors:["hero","news","information","activity","pictures","contact","oceanShiga","p-footer"],css3:!0,scrollingSpeed:1e3,fitToSection:!0,dragAndMove:!0,responsiveWidth:641,afterLoad:(e,t,o)=>{const n=document.querySelector(".philosophy"),a=document.querySelector(".hero__blur");t.index?(n.classList.remove("fadeIn"),a.classList.remove("blur")):(n.classList.add("fadeIn"),a.classList.add("blur"))},onLeave:(e,t,o)=>{t.item;const n=document.querySelector(".philosophy"),a=document.querySelector(".hero__blur"),i=(document.querySelectorAll(".l-navigation__links > a"),document.querySelectorAll(".l-navigation__links ")),l=document.querySelector(".l-navigation"),c=document.querySelector(".ah"),s=document.querySelector(".scroll"),d=document.getElementById("nav_scroll"),r=document.getElementById("nav_top"),m=document.getElementById("nav_news"),p=document.getElementById("nav_info"),g=document.getElementById("nav_activity"),u=document.getElementById("nav_contact");t.index?n.classList.remove("fadeIn"):(n.classList.add("fadeIn"),a.classList.add("blur")),1===t.index||2===t.index||3===t.index?(r.src="public/img/navigation/nav_btop.png",m.src="public/img/navigation/nav_bnews.png",p.src="public/img/navigation/nav_binformation.png",g.src="public/img/navigation/nav_bactivity.png",u.src="public/img/navigation/nav_bcontact.png",i[0].style.borderBottom="2px solid #000",i[1].style.borderBottom="2px solid #000",i[2].style.borderBottom="2px solid #000",i[3].style.borderBottom="2px solid #000",c.style.backgroundColor="#000",d.src="public/img/navigation/nav_bscroll.png"):(r.src="public/img/navigation/nav_wtop.png",m.src="public/img/navigation/nav_wnews.png",p.src="public/img/navigation/nav_winformation.png",g.src="public/img/navigation/nav_wactivity.png",u.src="public/img/navigation/nav_wcontact.png",i[0].style.borderBottom="2px solid #FFF",i[1].style.borderBottom="2px solid #FFF",i[2].style.borderBottom="2px solid #FFF",i[3].style.borderBottom="2px solid #FFF",c.style.backgroundColor="#FFF",d.src="public/img/navigation/nav_wscroll.png"),5===t.index||6===t.index||7===t.index?(c.style.display="none",s.style.display="none",l.style.display="none"):(c.style.display="block",s.style.display="inline-block",l.style.display="block")}}),$(window).resize((function(){var e=$(".fb-frame").width();$(".fb-frame").html('<div class="fb-page" data-href="https://www.facebook.com/oceanshigablacks" data-width="'+e+'" data-height="450" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/oceanshigablacks"><a href="https://www.facebook.com/oceanshigablacks">Facebook</a></blockquote></div></div>'),FB.XFBML.parse()}));var modal=document.getElementById("Modal"),btn=document.getElementById("Btn"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")};