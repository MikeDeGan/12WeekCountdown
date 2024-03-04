(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7;
  const periodStart = new Date("2024-03-02T00:00:00Z").getTime();
  const periodEnd = new Date(periodStart + 12 * week + 2 * day);
  const countDown = new Date(periodEnd).getTime();

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = periodEnd - now;
    const daysRemaining = Math.floor(distance / day);
    const weeksRemaining = Math.floor(daysRemaining / 7);
    const currentWeek = 12 - weeksRemaining;

    (document.getElementById("headline").innerText = periodEnd),
      (document.getElementById("currentWeek").innerText =
        Math.ceil(currentWeek)),
      (document.getElementById("weeksRemaining").innerText = weeksRemaining),
      (document.getElementById("days").innerText = daysRemaining);

    //do something later when date is reached
    if (distance < 0) {
      document.getElementById("headline").innerText = "It's my birthday!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
    //seconds
  }, 0);
})();
