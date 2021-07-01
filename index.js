class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = document.querySelector(
      `${this.selector} span[data-value="days"]`
    );
    this.hours = document.querySelector(
      `${this.selector} span[data-value="hours"]`
    );
    this.mins = document.querySelector(
      `${this.selector} span[data-value="mins"]`
    );
    this.secs = document.querySelector(
      `${this.selector} span[data-value="secs"]`
    );
  }

  printTimer({ days, hours, mins, secs }) {
    this.days.innerHTML = days;
    this.hours.innerHTML = hours;
    this.mins.innerHTML = mins;
    this.secs.innerHTML = secs;
  }

  calcDate() {
    const date = new Date();
    const time = this.targetDate - date;
    this.calcElemTimer(time);
    console.log(date);
  }

  calcElemTimer(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.printTimer({ days, hours, mins, secs });
  }

  startTimer() {
    this.calcDate();
    const timeoutID = setInterval(() => {
      this.calcDate();
    }, 1000);
  }
}

const valueDate = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

valueDate.startTimer();
