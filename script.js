(function () {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // const week = day * 7;

  const periodStart = new Date("06/10/2024");
  const startMonth = String(periodStart.getMonth() + 1).padStart(2, "0");
  const startDate = String(periodStart.getDate()).padStart(2, "0");
  const startYear = periodStart.getFullYear();
  const displayStartDate = startMonth + "/" + startDate + "/" + startYear;

  var periodEnd = new Date(periodStart);
  periodEnd.setDate(periodStart.getDate() + 84);
  const endMonth = String(periodEnd.getMonth() + 1).padStart(2, "0");
  const endDate = String(periodEnd.getDate() - 1).padStart(2, "0");
  const endYear = periodEnd.getFullYear();
  const displayEndDate = endMonth + "/" + endDate + "/" + endYear;

  const x = setInterval(function () {
    const now = new Date();
    const daysRemaining = Math.ceil((periodEnd - now) / day) - 1;
    const weeksRemaining = Math.floor(daysRemaining / 7);
    const currentWeek = 12 - weeksRemaining;

    document.getElementById("headline").innerText =
      displayStartDate + " - " + displayEndDate;
    document.getElementById("currentWeek").innerText = currentWeek;
    document.getElementById("weeksRemaining").innerText = weeksRemaining;
    document.getElementById("daysRemaining").innerText = daysRemaining;
  }, 0);
})();
