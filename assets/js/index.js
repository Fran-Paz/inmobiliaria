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


/*
window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);
*/
//Elementos constantes sacados desde el html
const btn = document.querySelector("nav button");
const propiedadesSection = document.querySelector(".propiedades");
const totalSpan = document.querySelector("#Propiedades span");

//lo que hará el botón al hacerle click
btn.addEventListener("click", () => {
  //obtener los valores de los inputs del html
  let dormitorios = document.getElementById("cuartos").value;
  let valorMin = document.getElementById("valorMin").value;
  let valorMax = document.getElementById("valorMax").value;

  if (dormitorios > "0" && valorMin > "0" && valorMax > "0") {
    //condiciones para el filtrado
    const propiedadesFiltradas = propertiesArray.filter(
      (propiedad) =>
      propiedad.rooms <= dormitorios &&
      propiedad.m >= valorMin &&
      propiedad.m <= valorMax
    );
    fillPropiedades(propiedadesFiltradas);
  } else {
    alert("Debes ingresar valores en todos los campos para realizar una búsqueda");
  }
});

const fillPropiedades = (propiedades = propertiesArray) => {
  clearPropiedades();
  totalSpan.innerHTML = propiedades.length;
  propiedades.forEach((propiedad) => {
    const propiedadTemplate = prepareTemplatePropiedad(propiedad);
    propiedadesSection.innerHTML += propiedadTemplate;
  });
};

const prepareTemplatePropiedad = ({
  name,
  description,
  src,
  rooms,
  m
}) => {
  return `
    <div class="propiedad">
        <div class="img" style="background-image: url('${src}')"></div>
        <section>
            <h5>${name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${rooms}</p>
                <p>Metros: ${m}</p>
            </div>
            <p class="my-3">${description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>
            `;
};

const clearPropiedades = () => (propiedadesSection.innerHTML = "");

fillPropiedades();


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
}

function filter(e) {
  let temp = '';
  const result = list.filter(item => item.includes(e.target.value));
  console.log(result)
}
*/