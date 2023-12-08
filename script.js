const images = [
  {
    url: 'willian-justen-de-vasconcellos-mZKEIRBStv4-unsplash.jpg',
    desc: 'Panorama of Miraflores Coast. Lima - Peru'
  },
  {
    url: 'hans-luiggi-uvQmacxnfcE-unsplash.jpg',
    desc: 'Mountain in La Merced - Peru'
  },
  {
    url: 'jeison-higuita-KD9AsSBYz3Q-unsplash.jpg',
    desc: 'Woman standing under brown rock formation. Machupicchu - Peru'
  },
  {
    url: 'peter-livesey-WEME5LOrLpE-unsplash.jpg',
    desc: 'Woman in store with display of assorted shirts and textiles. Cuzco - Peru'
  },
  {
    url: 'carlos-ruiz-huaman-l91dwhigRu8-unsplash.jpg',
    desc: 'Man carring flag on top of cliff. Apurimac - Peru'
  },
  {
    url: 'persnickety-prints-piGJujLGW_s-unsplash.jpg',
    desc: 'Several women standing near to tower. Floating islands in The Titicaca Lake - Peru'
  }
  


];


let index = 0;
const btn = document.getElementById('btn');
const imageDesc = document.querySelector('.image-desc');


document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/alexmarinmendez/js-basics-bg-img-flipper/main/img/" + images[index].url + ")";
imageDesc.textContent = images[index].desc;


btn.addEventListener('click', function() {
  let imageIndex = getImage();
  document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/alexmarinmendez/js-basics-bg-img-flipper/main/img/" + images[imageIndex].url + ")";
  imageDesc.textContent = images[imageIndex].desc;
});

function getImage() {
  if(index < images.length - 1) {
    index++;
  } else {
  index = 0;
  }
  return index;
}
