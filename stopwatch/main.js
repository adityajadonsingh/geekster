let hour = 0, min = 0, sec = 0, milli = 0;
    let timer;
    let isRunning = false;

    const hourElement = document.querySelector('.hour');
    const minElement = document.querySelector('.min');
    const secElement = document.querySelector('.sec');
    const milliElement = document.querySelector('.milli');

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    function updateDisplay() {
        hourElement.textContent = String(hour).padStart(2, '0');
        minElement.textContent = String(min).padStart(2, '0');
        secElement.textContent = String(sec).padStart(2, '0');
        milliElement.textContent = String(milli).padStart(2, '0');
    }

    function startStopwatch() {
        if (isRunning) return;
        isRunning = true;
        timer = setInterval(() => {
            milli++;
            if (milli === 100) {
                milli = 0;
                sec++;
            }
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hour++;
            }
            updateDisplay();
        }, 10);
    }

    function stopStopwatch() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetStopwatch() {
        stopStopwatch();
        hour = 0;
        min = 0;
        sec = 0;
        milli = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);