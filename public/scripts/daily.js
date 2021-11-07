$.ajax({
  url: "data.json",
  dataType: "json",

  success: function daily(data) {
    data.map((time) => {
      const dailyComponents = document.querySelectorAll(".hours");

      dailyComponents.forEach((hour) => {
        console.log(hour);

        hour.innerHTML = `
        <div class="title">
          <h4>${time.title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${time.timeframes.daily.current}</p>
          <p>Previous - ${time.timeframes.daily.previous}hrs</p>
        </div>
        `;
      });
    });
  },
});
