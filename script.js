// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector('video');
const playButton = document.createElement('button');
const volumeControl = document.createElement('input');
const speedControl = document.createElement('input');
const rewindButton = document.createElement('button');
const forwardButton = document.createElement('button');
const progress = document.createElement('div');
const progressFilled = document.createElement('div');
const controls = document.createElement('div');

// Set attributes and initial values
playButton.textContent = '►';
playButton.classList.add('player__button');

volumeControl.type = 'range';
volumeControl.min = '0';
volumeControl.max = '1';
volumeControl.step = '0.05';
volumeControl.value = video.volume;
volumeControl.classList.add('volume');

speedControl.type = 'range';
speedControl.min = '0.5';
speedControl.max = '2';
speedControl.step = '0.1';
speedControl.value = '1';
speedControl.classList.add('playbackSpeed');

rewindButton.textContent = '« 10s';
forwardButton.textContent = '25s »';

progress.classList.add('progress');
progressFilled.classList.add('progress__filled');
progress.appendChild(progressFilled);

controls.appendChild(playButton);
controls.appendChild(volumeControl);
controls.appendChild(speedControl);
controls.appendChild(rewindButton);
controls.appendChild(forwardButton);
controls.appendChild(progress);
document.body.appendChild(controls);

// Play/Pause Toggle
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
});

// Volume Control
volumeControl.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

// Playback Speed Control
speedControl.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Rewind 10s
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Forward 25s
forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Progress Bar Update
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

// Seek Video by Clicking Progress Bar
progress.addEventListener('click', (e) => {
    const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
});

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
