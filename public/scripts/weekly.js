function weeklyHour() {
  $.ajax({
    url: "data.json",
    dataType: "json",

    success: function (data) {
      const weeklyWork = document.querySelector("#work");
      const weeklyPlay = document.querySelector("#play");
      const weeklyStudy = document.querySelector("#study");
      const weeklyExercise = document.querySelector("#exercise");
      const weeklySocial = document.querySelector("#social");
      const weeklySelf = document.querySelector("#self");

      weeklyWork.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[0].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[0].timeframes.weekly.current}hrs</p>
            <p>Previous - ${data[0].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      `;

      weeklyPlay.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[1].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[1].timeframes.weekly.current}hrs</p>
            <p>Previous - ${data[1].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      `;

      weeklyStudy.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[2].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[2].timeframes.weekly.current}hrs</p>
            <p>Previous - ${data[2].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      `;

      weeklyExercise.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[3].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[3].timeframes.weekly.current}hrs</p>
            <p>Previous - ${data[3].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      `;

      weeklySocial.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[4].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[4].timeframes.weekly.current}hrs</p>
            <p>Previous - ${data[4].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      `;

      weeklySelf.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[5].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[5].timeframes.weekly.current}hrs</p>
            <p>Previous - ${data[5].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      `;
    },
  });
}
