monthly;

$.ajax({
  url: "data.json",
  dataType: "json",

  success: function (data) {
    const monthlyWork = document.querySelector("#work");
    const monthlyPlay = document.querySelector("#play");
    const monthlyStudy = document.querySelector("#study");
    const monthlyExercise = document.querySelector("#exercise");
    const monthlySocial = document.querySelector("#social");
    const monthlySelf = document.querySelector("#self");

    monthlyWork.innerHTML = `
      <div class="hours">
        <div class="title">
          <h4>${data[0].title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${data[0].timeframes.monthly.current}</p>
          <p>Previous - ${data[0].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
    `;

    monthlyPlay.innerHTML = `
      <div class="hours">
        <div class="title">
          <h4>${data[1].title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${data[1].timeframes.monthly.current}</p>
          <p>Previous - ${data[1].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
    `;

    monthlyStudy.innerHTML = `
      <div class="hours">
        <div class="title">
          <h4>${data[2].title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${data[2].timeframes.monthly.current}</p>
          <p>Previous - ${data[2].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
    `;

    monthlyExercise.innerHTML = `
      <div class="hours">
        <div class="title">
          <h4>${data[3].title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${data[3].timeframes.monthly.current}</p>
          <p>Previous - ${data[3].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
    `;

    monthlySocial.innerHTML = `
      <div class="hours">
        <div class="title">
          <h4>${data[4].title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${data[4].timeframes.monthly.current}</p>
          <p>Previous - ${data[4].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
    `;

    monthlySelf.innerHTML = `
      <div class="hours">
        <div class="title">
          <h4>${data[5].title}</h4>
          <img src="./public/images/icon-ellipsis.svg" alt="options" />
        </div>
        <div class="text-hours">
          <p id="time">${data[5].timeframes.monthly.current}</p>
          <p>Previous - ${data[5].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
    `;
  },
});
