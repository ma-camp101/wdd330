const thanks = 'json/attribution.json';
fetch(thanks)

.then((response) => response.json())

.then(function (jsonObject) {
  let items = jsonObject['attributes'];
  items.forEach((attribute) => {

    let attributes = document.createElement('ul');
    attributes.classList.add("thanks");
    let label = document.createElement('li');
    
    label.innerHTML = `${attribute.by} <a href="${attribute.url}">${attribute.person}<a/> ${attribute.found} <a href="${attribute.url2}">${attribute.site}<a/>`
    attributes.appendChild(label);
          
    document.querySelector('div.attribute').appendChild(attributes);
    });
  }
);