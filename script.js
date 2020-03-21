let slide_left = document.getElementById('chev-left'),
    slide_right = document.getElementById('chev-right'),
    total_img = document.getElementsByTagName('img'),
    idx = 0;

slide_right.addEventListener('click', moveLeft);

function moveLeft() {
    slide_left.style.display = 'block';
    total_img[idx].style.display = 'none';
    total_img[++idx].style.display = 'block';
    if (idx === total_img.length - 1) {
        slide_right.style.display = 'none';
    }
}


slide_left.addEventListener('click', moveRight);

function moveRight() {
    slide_right.style.display = 'block';
    total_img[idx].style.display = 'none';
    total_img[--idx].style.display = 'block';
    if (idx === 0) {
        slide_left.style.display = 'none';
    }
}