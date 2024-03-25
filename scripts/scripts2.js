

new Swiper("#swiper-2", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  initialSlide: 1,
  direction: "horizontal",
  freeMode: false,
  mousewheel: {
     forceToAxis: true,
   }

});



new Swiper("#swiper-3", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  initialSlide: 1,
  direction: "horizontal",
  freeMode: false,

  mousewheel: {
     forceToAxis: true,
   },

    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

});


const fText = new SplitType('span.md_text',{ types: 'chars' })
const chars = fText.chars


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  console.log('clicked')
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* Open when someone clicks on the span element */
function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
  console.log('clicked')
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}





gsap.set(".hero_footer",{opacity: 0})
gsap.set(".hero",{opacity: 0})
gsap.set('.hero2',{opacity: 0})
gsap.set('.m_image',{opacity: 0})
gsap.set('.m_text',{opacity: 0})



gsap.to(".hero_footer", {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      ease: "power1.inOut"
    })
   
    gsap.to(".hero", {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      ease: "power1.inOut"
    })

gsap.to('.hero2',{
 opacity: 1,
 delay: 0.5,
 ease: "power1.inOut"
})

gsap.to('.m_image',{
 opacity: 1,
 delay: 0.5,
 ease: "power1.inOut"
})

gsap.to('.m_text',{
 opacity: 1,
 delay: 0.5,
 ease: "power1.inOut"
})




gsap.set(".villas_grid_single",{opacity: 0})
gsap.to('.villas_grid_single',{
 scrollTrigger: {
     trigger: '.villas_section',
     start: 'top 20%',
 },
 opacity: 1,
 stagger: 0.3
})

gsap.from('.ts',{
 scrollTrigger: {
     trigger: '.text_section',
     start: 'top 60%'
 },
 y: -50,
 opacity: 0,
 stagger: 0.3,
})

gsap.from('.text_section2',{
 scrollTrigger: {
     trigger: '.text_section',
     start: 'top 60%'
 },
 y: -50,
 delay: 1,
 opacity: 0
})


gsap.from('.g_img',{
 scrollTrigger: {
     trigger: '.g_text',
     start: 'top 150%'
 },
 top: "50%",
 left: "50%",
 width: 0,
 height: 0,
 duration: 1,
 stagger: 0.05,
 delay: 0.5
})


gsap.from('.text1',{
 scrollTrigger: {
   trigger: '.about_text',
   start: 'top center',
   scrub: true
},
opacity: 0,
left: -200,
})

gsap.from('.text2',{
 scrollTrigger: {
   trigger: '.about_text',
   start: 'top center',
},
opacity: 0,
right: -200,
})


gsap.from('.swp1',{
 scrollTrigger: {
   trigger: '.swp1',
   start: 'top 120%',
},
opacity: 0,
y: 500,
})



gsap.fromTo(chars,{ 
   y: 100,
   opacity: 0
 },
 {
   scrollTrigger: {
     trigger: '.md_text',
     start: 'top 100%',
 },
   y: 0,
   opacity: 1,
   stagger: 0.05,
   duration: 2,
   ease: 'power4.out',
 }
)


gsap.from('.docs_grid_section',{
 scrollTrigger: {
   trigger: '.docs_grid',
   start: 'top 100%',
},
opacity: 0,
y: 300,
duration: 1,
ease: 'power4.out'

})

gsap.from('.docs_grid_section2',{
 scrollTrigger: {
   trigger: '.docs_grid2',
   start: 'top 100%',
},
opacity: 0,
y: 300,
duration: 1,
ease: 'power4.out'

})




gsap.from('.ft_text',{
 scrollTrigger: {
   trigger: '.features_section',
   start: 'top top',
},
opacity: 0,
y: 500
})


gsap.from('.feature_text_big',{
 scrollTrigger: {
   trigger: '.feature_text',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
y: 500
})


gsap.from('.feature_text_small',{
 scrollTrigger: {
   trigger: '.feature_text',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
y: 500
})

gsap.from('.feature_image',{
 scrollTrigger: {
   trigger: '.feature_text',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
x: 500
})

gsap.from('.feature_text_big2',{
 scrollTrigger: {
   trigger: '.feature_text2',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
y: 500
})


gsap.from('.feature_text_small2',{
 scrollTrigger: {
   trigger: '.feature_text2',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
y: 500
})

gsap.from('.feature_image2',{
 scrollTrigger: {
   trigger: '.feature_text2',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
x: -500
})



gsap.from('.feature_text_big3',{
 scrollTrigger: {
   trigger: '.feature_text3',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
y: 500
})


gsap.from('.feature_text_small3',{
 scrollTrigger: {
   trigger: '.feature_text3',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
y: 500
})

gsap.from('.feature_image3',{
 scrollTrigger: {
   trigger: '.feature_text3',
   start: 'top 70%',
},
opacity: 0,
duration: 1,
x: 500
})











var cursor = $(".cursor")
var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;


    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".g_text").on("mouseenter", function() {
cursor.addClass("active");
});

$(".g_text").on("mouseleave", function() {
cursor.removeClass("active");
});






// Open the Modal
function openModal() {
  document.getElementById("popup").style.width = "100%";
  document.getElementById("popup").style.opacity = "1";
  console.log('true')
}

// Close the Modal
function closeModal() {
  document.getElementById("popup").style.width = "0%";
  document.getElementById("popup").style.opacity = "0";
  console.log('true')
}



function onSubmit(token) {
  document.getElementById("demo-form").submit();
}



