document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
     },
     effect: 'flip',
    pagination: {
       el: '.swiper-pagination',
      type: 'bullets',
     },
    navigation: {
       nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   });

    // Manually control slider

  });

const hamburgerMenu = document.getElementById('hamburger')
const mobil = document.getElementById('mobilMenu')

// console.log(mobil.classList[7]);
//  addEventListener('click', () => {
//   if(mobil.classList.values = 'hidden'){
//     mobil.classList.remove('hidden')
//     mobil.classList.add('block')
//     kapatici.classList.add('kapatacak')
//   }
//   else if(kapatici.classList.values = 'kapatacak')
//   {  
//         console.log("test1");  
//   }
  
//  })
console.log(mobil.classList.value)
hamburgerMenu.addEventListener('click' , () => {
  if(mobil.classList.values = "hidden"){
   mobil.classList.remove("hidden")
   mobil.classList.add("block")
  }
})

const kapatici = document.getElementById('kapat')


kapatici.addEventListener('click' , () => {
  if(mobil.classList.values = "block"){
   mobil.classList.remove("block")
   mobil.classList.add("hidden")
  }
})

const sepetAcilir = document.getElementById('sepet')
const sepet = document.getElementById('sepetAcilir')


sepetAcilir.addEventListener('click', () => {
  if(sepet.classList.values = 'hidden'){
    sepet.classList.remove('hidden')
    sepet.classList.add('block')
  }
})
const kapaticiSepet = document.getElementById('sepetKapat')

kapaticiSepet.addEventListener('click', () => {
  if(sepet.classList.values = 'block')
  {
    sepet.classList.remove('block')
    sepet.classList.add('hidden')
  }
}) 

const checkboxes = document.querySelectorAll('i.fa-square.beden');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    if (checkbox.classList.contains("fa-square")) {
      checkbox.classList.remove("fa-square");
      checkbox.classList.add("fa-square-check");
    } else if (checkbox.classList.contains("fa-square-check")) {
      checkbox.classList.remove("fa-square-check");
      checkbox.classList.add("fa-square");
    }
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== checkbox && otherCheckbox.classList.contains("fa-square-check")) {
        otherCheckbox.classList.remove("fa-square-check");
        otherCheckbox.classList.add("fa-square");
      }
    });
  });
});
const checkboxesRenk = document.querySelectorAll('i.fa-square.renk');

checkboxesRenk.forEach(checkbox1 => {
  checkbox1.addEventListener('click', () => {
    if (checkbox1.classList.contains("fa-square")) {
      checkbox1.classList.remove("fa-square");
      checkbox1.classList.add("fa-square-check");
    } else if (checkbox1.classList.contains("fa-square-check")) {
      checkbox1.classList.remove("fa-square-check");
      checkbox1.classList.add("fa-square");
    }
    checkboxesRenk.forEach(otherCheckbox2 => {
      if (otherCheckbox2 !== checkbox1 && otherCheckbox2.classList.contains("fa-square-check")) {
        otherCheckbox2.classList.remove("fa-square-check");
        otherCheckbox2.classList.add("fa-square");
      }
    });
  });
});




const quint = document.getElementById('sayac')
const quintArttir = document.getElementById('arttir')
const quintAzalt = document.getElementById('azalt')
let sayacDegeri = 0;

quintArttir.addEventListener('click', () =>  {
 if(quint.innerHTML = 1){
  sayacDegeri += 1;
  quint.innerHTML = sayacDegeri;
 }
})
quintAzalt.addEventListener('click', () =>  {
  if(quint.innerHTML > 1){  
    sayacDegeri -= 1;
    quint.innerHTML = sayacDegeri;
  }

});



