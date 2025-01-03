fetch('pajamas.json')
.then(response => response.json())
.then(data => {
  const pajamaItemsContainer = document.getElementById("pajama-items");

  data.forEach(item => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-6", "col-md-3", "col-lg-3");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const defaultImg = document.createElement("img");
    defaultImg.classList.add("img-responsive", "default-image");
    defaultImg.src = item.imgSrc;
    defaultImg.alt = item.heading;

    const hoverImg = document.createElement("img");
    hoverImg.classList.add("img-responsive", "hover-image");
    hoverImg.src = item.hoverImg;
    hoverImg.alt = "Hover " + item.heading;

    imageContainer.appendChild(defaultImg);
    imageContainer.appendChild(hoverImg);

    const heading = document.createElement("h4");
    heading.innerText = item.heading;

    colDiv.appendChild(imageContainer);
    colDiv.appendChild(heading);
    pajamaItemsContainer.appendChild(colDiv);
  });
})
.catch(error => console.error('Error loading JSON:', error));



fetch('images.json')
        .then(response => response.json())
        .then(data => {
          const container = document.getElementById('image-container2');
          data.forEach(item => {
            
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-6', 'col-md-4', 'col-lg-4');
            colDiv.innerHTML = `
              <div class="image-container">
                <img class="img-responsive default-image" width="100%" src="${item.default_image}" alt="${item.title}">
                <img class="img-responsive hover-image" width="100%" src="${item.hover_image}" alt="Hover ${item.title}">
              </div>
            `;
            container.appendChild(colDiv);
          });
        })
        .catch(error => console.error('Error loading the JSON:', error));


        