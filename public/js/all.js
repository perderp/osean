document.addEventListener("DOMContentLoaded",(()=>{})),new fullpage("#fullpage",{autoscrolling:!0,anchors:["hero","news","information","activity","pictures","contact","oceanShiga","p-footer"],css3:!0,scrollingSpeed:1e3,fitToSection:!0,dragAndMove:!0,responsiveWidth:480,afterLoad:(e,o,t)=>{const a=document.querySelector(".philosophy"),n=document.querySelector(".hero__blur");o.index?(a.classList.remove("fadeIn"),n.classList.remove("blur")):(a.classList.add("fadeIn"),n.classList.add("blur"))},onLeave:(e,o,t)=>{o.item;const a=document.querySelector(".philosophy"),n=document.querySelector(".hero__blur"),i=(document.querySelectorAll(".l-navigation__links > a"),document.querySelectorAll(".l-navigation__links ")),l=document.querySelector(".l-navigation"),s=document.querySelector(".ah"),c=document.querySelector(".scroll"),d=document.getElementById("nav_top"),r=document.getElementById("nav_news"),p=document.getElementById("nav_info"),m=document.getElementById("nav_activity"),g=document.getElementById("nav_contact");o.index?a.classList.remove("fadeIn"):(a.classList.add("fadeIn"),n.classList.add("blur")),1===o.index||2===o.index||3===o.index?(d.src="public/img/navigation/nav_btop.png",r.src="public/img/navigation/nav_bnews.png",p.src="public/img/navigation/nav_binformation.png",m.src="public/img/navigation/nav_bactivity.png",g.src="public/img/navigation/nav_bcontact.png",i[0].style.borderBottom="2px solid #000",i[1].style.borderBottom="2px solid #000",i[2].style.borderBottom="2px solid #000",i[3].style.borderBottom="2px solid #000",s.style.backgroundColor="#000",c.style.color="#000"):(d.src="public/img/navigation/nav_wtop.png",r.src="public/img/navigation/nav_wnews.png",p.src="public/img/navigation/nav_winformation.png",m.src="public/img/navigation/nav_wactivity.png",g.src="public/img/navigation/nav_wcontact.png",i[0].style.borderBottom="2px solid #FFF",i[1].style.borderBottom="2px solid #FFF",i[2].style.borderBottom="2px solid #FFF",i[3].style.borderBottom="2px solid #FFF",s.style.backgroundColor="#FFF",c.style.color="#FFF"),5===o.index||6===o.index||7===o.index?(s.style.display="none",c.style.display="none",l.style.display="none"):(s.style.display="block",c.style.display="inline-block",l.style.display="block")}}),$(window).resize((function(){var e=$(".fb-frame").width();$(".fb-frame").html('<div class="fb-page" data-href="https://www.facebook.com/oceanshigablacks" data-width="'+e+'" data-height="450" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/oceanshigablacks"><a href="https://www.facebook.com/oceanshigablacks">Facebook</a></blockquote></div></div>'),FB.XFBML.parse()}));