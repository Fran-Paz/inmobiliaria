const propertiesArray = [{
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

var filters = {
  rooms: "",
  min: "",
  max: ""
};

rooms.value = filters.rooms;
minValue.value = filters.min;
maxValue.value = filters.max;

rooms.addEventListener("input", function () {
  filters.rooms = rooms.value;
  update();
});
min.addEventListener("input", function () {
  filters.min = min.value;
  update();
});

max.addEventListener("input", function () {
  filters.max = max.value;
  update();
});



function filterRooms(properties) {
  return properties.rooms >= filters.rooms;
}

function filterMin(properties) {
  return properties.min >= filters.min;
}

function filterMax(properties) {
  return properties.max >= filters.max;
}


function update() {
  let filteredProperties = propertiesArray().filter(filterRooms).filter(filterMin).filter(filterMax);
  console.log(filters);
  output.innerHTML = filteredProperties.map(properties => `<div class="propiedad">
  <div class="img"
    style="background-image: url('${item.src}')">
</div>
<section>
    <h5>${item.name}</h5>
    <div class="d-flex justify-content-between">
        <p>Cuartos: ${item.rooms} </p>
        <p>Metros: ${item.m}</p>
    </div>
    <p class="my-3">${item.description}</p>
    <button class="btn btn-info">Ver más</button>
</section>
</div>
`).join("");
};
update();












/*
window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);
*/
//Elementos constantes sacados desde el html

//lo que hará el botón al hacerle click

//condiciones para el filtrado
/*

function loadList() {
  let temp = `<section id="Propiedades"> <div class="propiedades">`;
  propiedadesArray.forEach((item) => {
    temp += `<div class="propiedad">
                  <div class="img"
                    style="background-image: url('${item.src}')">
              </div>
                <section>
                    <h5>${item.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${item.rooms} </p>
                        <p>Metros: ${item.m}</p>
                    </div>
                    <p class="my-3">${item.description}</p>
                    <button class="btn btn-info">Ver más</button>
                </section>
            </div>
       `
  });
  temp += `</section> </div>`;

  output.innerHTML = temp
}*/