function dailyHours() {
  $.ajax({
    url: "data.json",
    dataType: "json",

    success: function (data) {
      const dailyWork = document.querySelector("#work");
      const dailyPlay = document.querySelector("#play");
      const dailyStudy = document.querySelector("#study");
      const dailyExercise = document.querySelector("#exercise");
      const dailySocial = document.querySelector("#social");
      const dailySelf = document.querySelector("#self");

      dailyWork.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[0].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[0].timeframes.daily.current}hrs</p>
            <p>Previous - ${data[0].timeframes.daily.previous}hrs</p>
          </div>
        </div>
      `;

      dailyPlay.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[1].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[1].timeframes.daily.current}hrs</p>
            <p>Previous - ${data[1].timeframes.daily.previous}hrs</p>
          </div>
        </div>
      `;

      dailyStudy.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[2].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[2].timeframes.daily.current}hrs</p>
            <p>Previous - ${data[2].timeframes.daily.previous}hrs</p>
          </div>
        </div>
      `;

      dailyExercise.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[3].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[3].timeframes.daily.current}hrs</p>
            <p>Previous - ${data[3].timeframes.daily.previous}hrs</p>
          </div>
        </div>
      `;

      dailySocial.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[4].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[4].timeframes.daily.current}hrs</p>
            <p>Previous - ${data[4].timeframes.daily.previous}hrs</p>
          </div>
        </div>
      `;

      dailySelf.innerHTML = `
        <div class="hours">
          <div class="title">
            <h4>${data[5].title}</h4>
            <img src="./public/images/icon-ellipsis.svg" alt="options" />
          </div>
          <div class="text-hours">
            <p id="time">${data[5].timeframes.daily.current}hrs</p>
            <p>Previous - ${data[5].timeframes.daily.previous}hrs</p>
          </div>
        </div>
      `;
    },
  });
}
