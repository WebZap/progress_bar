import { progressLine, btnNext, btnPrev } from "../main.js";
let width = 0;

export const moveProgressBar = () => {
    btnNext.addEventListener('click', () => {

        width = width + 30;
        progressLine.style.width = `${width}%`;

        if (width === 90) {
            btnNext.disabled = true
        }
        if (width > 0) {
            btnPrev.disabled = false
        }

    })

    btnPrev.addEventListener('click', () => {

        width = width - 30;
        progressLine.style.width = `${width}%`
        if (width === 0) {
            btnPrev.disabled = true
        }
        if (width < 90) {
            btnNext.disabled = false
        }
    })

}