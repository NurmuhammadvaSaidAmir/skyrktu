const hourDiv = document.querySelector('.hour');
    const minuteDiv = document.querySelector('.minute');
    const secondDiv = document.querySelector('.second');

    function updateClock() {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');

      hourDiv.textContent = h;
      minuteDiv.textContent = m;
      secondDiv.textContent = s;
    }

    setInterval(updateClock, 1000);
    updateClock();