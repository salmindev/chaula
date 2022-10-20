function bg(){
    const bgImage = ['url("/images/vikoba.jpg")','url("/images/img1.jpg")','url("/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg")'];
    const bgImages = bgImage[Math.floor(Math.random() * bgImage.length)];
    const header = document.getElementById('intro');
    header.style.backgroundImage = bgImages;
    
  }
  setInterval(bg, 2000);