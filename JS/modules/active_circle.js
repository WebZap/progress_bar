
import { btnNext, btnPrev, circlesAll } from "../main.js";

let currentActive = 1;

export const activateCircle = () => {
    btnNext.addEventListener('click', () => {
        currentActive++
        if (currentActive > circlesAll.length) {
            currentActive = circlesAll.length
        }
        updateCircle();

    })

    btnPrev.addEventListener('click', () => {
        currentActive--
        if (currentActive === 1) {
            currentActive = 1
        }
        updateCircle();

    })
}

const updateCircle = () => {
    circlesAll.forEach((el, index) => {
        if (index < currentActive) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
        }
    })
}