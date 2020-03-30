export const startgame_sound = new Audio('assets/sounds/startgame.mp3');
export const correct_sound = new Audio('assets/sounds/correct.wav');
export const wrong_sound = new Audio('assets/sounds/wrong2.wav');
export const gameover_sound = new Audio('assets/sounds/gameover.wav');
export const reset_sound = new Audio('assets/sounds/reset.wav');
export const music = new Audio('assets/sounds/BEPmidi.mp3');
music.currentTime = 2;
music.volume = 0.6;
music.loop = true; 
export const select_sound = new Audio('assets/sounds/select.wav');
export const submit_sound = new Audio('assets/sounds/submit.wav');
export let sound = true;
export function toggleSound() { sound = !sound};