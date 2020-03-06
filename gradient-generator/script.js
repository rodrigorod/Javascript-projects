const colorOne = document.getElementById('colorone');
const colorTwo = document.getElementById('colortwo');
const bodyBg = document.getElementById('bodybg');
const showData = document.getElementById('showvalue');

function setBackground() {
    bodyBg.style.background = `linear-gradient(to right top, ${colorOne.value}, ${colorTwo.value})`;

    showData.textContent = `linear-gradient(to right top, ${colorOne.value}, ${colorTwo.value})`;
}

colorOne.addEventListener('input', setBackground)

colorTwo.addEventListener('input', setBackground)