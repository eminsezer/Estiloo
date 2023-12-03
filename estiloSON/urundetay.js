document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const displayedImage = document.getElementById('displayedImage');
  
    thumbnails.forEach(function (thumbnail) {
      thumbnail.addEventListener('click', function () {
        const clickedImageUrl = this.getAttribute('src');
        displayedImage.setAttribute('src', clickedImageUrl);

        thumbnails.forEach(function (thumb) {
          thumb.classList.remove('opacity-50');
        });
        this.classList.add('opacity-50');
      });
    });
  });
  