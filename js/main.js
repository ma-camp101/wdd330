const portfolio = 'json/weeklist.json';
fetch(portfolio)

.then((response) => response.json())

.then(function (jsonObject) {
  let items = jsonObject['weeks'];
  items.forEach((week) => {

    let weeks = document.createElement('ol');
    let label = document.createElement('li');
    let anchor = document.createElement('a');

    anchor.setAttribute('href', `${week.url}`);
    anchor.innerHTML =  `${week.label}`;
    label.appendChild(anchor);
  weeks.appendChild(label);
          
    document.querySelector('div.weeks').appendChild(weeks);
    });
  }
);