document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.foto');
    const displayImg = document.querySelector('.displayimg');

    smallImages.forEach(img => {
        img.addEventListener('click', function() {
            const imgSrc = img.src;
            const newImg = document.createElement('img');
            newImg.src = imgSrc;
            newImg.style.width = '300px';
            newImg.style.height = '300px';
            newImg.style.opacity = '0';
            newImg.style.transition = 'opacity 0.5s';
            newImg.style.border = '3px solid white';
            newImg.style.borderRadius = '10px'
            displayImg.innerHTML = '';
            displayImg.appendChild(newImg);
            setTimeout(() => {
                newImg.style.opacity = '1';
            }, 100);
        });
    });
});