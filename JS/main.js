import { activateCircle } from "./modules/active_circle.js";
import { moveProgressBar } from "./modules/progress_bar.js";


export const btnPrev = document.getElementById('prev');
export const btnNext = document.getElementById('next');
export const progressLine = document.getElementById('progress');
export const circlesAll = document.querySelectorAll('.circle')


activateCircle()
moveProgressBar()




