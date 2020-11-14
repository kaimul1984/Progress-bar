
const progressBars = document.querySelectorAll('.progress-bar');

const values = ['90%', '90%', '70%', '80%', '60%', '70%', '60%', '50%'];


window.addEventListener('load', () => {
    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
    });
});
