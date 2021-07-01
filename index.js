class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  printTimer({ days, hours, mins, secs }) {
    document.querySelector(
      `${this.selector} span[data-value="days"]`
    ).innerHTML = days;
    document.querySelector(
      `${this.selector} span[data-value="hours"]`
    ).innerHTML = hours;
    document.querySelector(
      `${this.selector} span[data-value="mins"]`
    ).innerHTML = mins;
    document.querySelector(
      `${this.selector} span[data-value="secs"]`
    ).innerHTML = secs;
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
