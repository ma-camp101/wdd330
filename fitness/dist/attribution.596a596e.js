const thanks = 'json/attribution.json';
fetch(thanks).then((response)=>response.json()
).then(function(jsonObject) {
    let items = jsonObject['attributes'];
    items.forEach((attribute)=>{
        let attributes = document.createElement('ol');
        let label = document.createElement('li');
        label.innerHTML = `${attribute.person} <a href="${attribute.url}">Renee Fisher<a/> ${attribute.site} <a href="${attribute.url2}">unsplash.com<a/>`;
        // anchor.setAttribute('href', `${attribute.url}`);
        // anchor.innerHTML =  `${attribute.label}`;
        // label.appendChild(anchor);
        attributes.appendChild(label);
        document.querySelector('div.attribute').appendChild(attributes);
    });
});

//# sourceMappingURL=attribution.596a596e.js.map
