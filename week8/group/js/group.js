const starwarsURL = "https://swapi.dev/api/people/"
fetch(starwarsURL)

  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }})

    .then(function (jsonObject) {
      let character = jsonObject['people'];
      character.forEach((person) => {

        let character = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
        let p7 = document.createElement('p');
        let p8 = document.createElement('p');
        let p9 = document.createElement('p');
        let p10 = document.createElement('p');
        let p11 = document.createElement('p');
        let p12 = document.createElement('p');
        let p13 = document.createElement('p');
        let p14 = document.createElement('p');
        let p15 = document.createElement('p');
  
          h2.innerHTML = 
            `${person.name}`;
          character.appendChild(h2);
          p1.innerHTML = 
            `${person.birth_year}`;
          character.appendChild(p1);
          p2.innerHTML =
            `${person.eye_color}`;
          character.appendChild(p2);
          p3.innerHTML = 
          `${person.gender}`;
          character.appendChild(p3);
          p4.innerHTML =
          `${person.hair_color}`;
          character.appendChild(p4);
          p5.innerHTML =
          `${person.height}`;
          character.appendChild(p5);
          p6.innerHTML =
          `${person.mass}`;
          character.appendChild(p6);
          p7.innerHTML =
          `${person.skin_color}`;
          character.appendChild(p7);
          p8.innerHTML =
          `${person.homeworld}`;
          character.appendChild(p8);
          p9.innerHTML =
          `${person.films}`;
          character.appendChild(p9);
          p10.innerHTML =
          `${person.species}`;
          character.appendChild(p10);
          p11.innerHTML =
          `${person.starships}`;
          character.appendChild(p11);
          p12.innerHTML =
          `${person.vehicles}`;
          character.appendChild(p12);
          p13.innerHTML =
          `${person.url}`;
          character.appendChild(p13);
          p14.innerHTML =
          `${person.created}`;
          character.appendChild(p14);
          p15.innerHTML =
          `${person.edited}`;
          character.appendChild(p15);

        document.querySelector('div.list').appendChild(character);
      })
  }); 