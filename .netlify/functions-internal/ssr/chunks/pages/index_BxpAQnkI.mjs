/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_tXq9p84I.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Modal from 'react-modal';

const $$Astro$b = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<section class="home" id="home" data-astro-cid-xhaoqxbd> <article class="w-[90%] mx-auto flex flex-col items-center h-full justify-center gap-5" data-astro-cid-xhaoqxbd> <h2 class="" data-astro-cid-xhaoqxbd>BarberíApp</h2> <span class="text-4xl lg:text-6xl" data-astro-cid-xhaoqxbd>✂️</span> <h3 class="text-white text-xl font-semibold lg:text-2xl" data-astro-cid-xhaoqxbd>
La mejor opción para tu estilo
</h3> <a href="#contact" class="text-white transition-all hover:bg-[#1d92d6] bg-[#8e1515] hover:scale-110 font-bold rounded-lg px-5 py-3 lg:text-2xl lg:px-8 lg:py-5 flex justify-center items-center gap-4 my-12" data-astro-cid-xhaoqxbd>
Agenda cita
<figure data-astro-cid-xhaoqxbd> <img src="icons/Check.svg" alt="ícono de verificación" data-astro-cid-xhaoqxbd> </figure> </a> </article> </section> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/Home.astro", void 0);

const $$Astro$a = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="my-[2em] md:my-[6em]" data-astro-cid-v2cbyr3p> <article class="about-container-child w-[90%] max-w-5xl mx-auto" data-astro-cid-v2cbyr3p> <div class="title-about-container w-fit mx-auto relative" data-astro-cid-v2cbyr3p> <h2 class="title-about md:text-[2rem] " data-astro-cid-v2cbyr3p>Sobre nosotros</h2> <div class="flex h-[2px] w-full rounded-full overflow-hidden md:h-[5px] md:absolute md:bottom-4 " data-astro-cid-v2cbyr3p> <span class="bg-blue-600 w-full flex-1" data-astro-cid-v2cbyr3p></span> <span class="bg-red-600 w-full flex-1" data-astro-cid-v2cbyr3p></span> </div> </div> <div data-astro-cid-v2cbyr3p> <h3 class="font-semibold text-center text-lg lg:my-[2em] lg:text-2xl" data-astro-cid-v2cbyr3p>
Somos líderes en el campo del estilo
</h3> <p class="text-justify my-[1em] tracking-wide lg:my-[-1em] md:text-xl " data-astro-cid-v2cbyr3p>
En <b data-astro-cid-v2cbyr3p>BarberíApp</b>, no solo te ofrecemos un corte de cabello, te
        ofrecemos una experiencia de estilo incomparable. Con una combinación de
        habilidades artesanales tradicionales y un toque moderno, nuestro equipo
        de barberos está dedicado a brindarte un servicio excepcional en un
        ambiente acogedor y relajante.
<br data-astro-cid-v2cbyr3p> <br data-astro-cid-v2cbyr3p>
Nuestra pasión por la barbería se refleja en cada detalle, desde los cortes 
        clásicos hasta las tendencias más modernas en peinados masculinos. Nos enorgullece no solo en transformar tu aspecto, sino también en ofrecerte un momento de desconexión y renovación.
</p> </div> <figure class="image-about w-[300px] h-[300px] mx-auto
      my-3 rounded-lg overflow-hidden shadow-md shadow-black
      md:w-[90%] md:h-[90%] md:max-w-[500px] md:max-h-[600px] md:mx-0" data-astro-cid-v2cbyr3p> <img src="image-about.jpg" alt="Imagen de nuestro trabajo" class="w-full h-full object-cover object-center" data-astro-cid-v2cbyr3p> </figure> </article> </section> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/About.astro", void 0);

const $$Astro$9 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Navbar;
  const items = [
    {
      name: "Inicio",
      link: "#home"
    },
    {
      name: "Sobre nosotros",
      link: "#about"
    },
    {
      name: "Miembros",
      link: "#members"
    },
    {
      name: "Servicios",
      link: "#service"
    },
    {
      name: "Reserva",
      link: "#contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-[80px]" data-astro-cid-qqmti5lf> <div class="flex justify-between items-center w-[90%] max-w-7xl my-0 mx-auto h-full" data-astro-cid-qqmti5lf> <h1 class="text-3xl text-white font-semibold md:flex-[40%]" data-astro-cid-qqmti5lf>
BarberíApp💈
</h1> <button class="bg-white absolute right-[1em] rounded-md hover:bg-gray-300 overflow-hidden lg:hidden" id="btn-menu" data-astro-cid-qqmti5lf> <figure class="w-[40px] h-[40px]" data-astro-cid-qqmti5lf> <img src="icons/Menu.svg" alt="Icono de menú de hamburguesa" class="w-full h-full" data-astro-cid-qqmti5lf> </figure> </button> <nav class="hidden lg:flex lg:flex-[60%] w-full h-full" data-astro-cid-qqmti5lf> <ul class="flex text-white xl:text-xl justify-between items-center w-full h-full" data-astro-cid-qqmti5lf> ${items.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="hover:cursor-pointer" data-astro-cid-qqmti5lf> <li class="menu-item hover:text-blue-600" data-astro-cid-qqmti5lf>${item.name}</li> </a>`)} </ul> </nav> </div> <nav class="menu-mobile-active lg:hidden" id="menu-container" data-astro-cid-qqmti5lf> <ul data-astro-cid-qqmti5lf> ${items.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} data-astro-cid-qqmti5lf> <li class="menu-item hover:text-blue-600" data-astro-cid-qqmti5lf>${item.name}</li> </a>`)} </ul> </nav> </header>  `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/layouts/components/Navbar.astro", void 0);

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer-container" data-astro-cid-gion42cw> <div class="footer-container-child" data-astro-cid-gion42cw> <div class="footer-line" data-astro-cid-gion42cw> <span class="line" data-astro-cid-gion42cw></span> <figure class="footer-icon-container" data-astro-cid-gion42cw> <img src="icons/icon-footer.png" alt="Ícono de barbería" data-astro-cid-gion42cw> </figure> <span class="line" data-astro-cid-gion42cw></span> </div> <h2 class="footer-title" data-astro-cid-gion42cw>BarberíApp</h2> <small class="footer-rights" data-astro-cid-gion42cw>Creado por Victor Carvajal - 2024</small> <div class="footer-warning-container" data-astro-cid-gion42cw> <h3 class="footer-warning aux" data-astro-cid-gion42cw>Información legal</h3> <h3 class="footer-warning" data-astro-cid-gion42cw>Política de privacidad</h3> </div> <div class="flex flex-col items-center mt-4" data-astro-cid-gion42cw>
Iconos diseñados por
<a href="https://www.flaticon.es/autores/dinosoftlabs" title="DinosoftLabs" target="_blank" class="text-blue-500" data-astro-cid-gion42cw>
DinosoftLabs
</a>
from
<a href="https://www.flaticon.es/" title="Flaticon" target="_blank" class="text-blue-500" data-astro-cid-gion42cw>
www.flaticon.es
</a> </div> </div> </footer> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/layouts/components/Footer.astro", void 0);

const $$Astro$7 = createAstro();
const $$NavbarLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NavbarLayout;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>BarberíApp</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="my-[80px]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/layouts/NavbarLayout.astro", void 0);

const barbers = [
  {
    id: 1,
    image: "barbero-1.png",
    name: "Andrés",
  },
  {
    id: 2,
    image: "barbera-2.png",
    name: "Natalia",
  },
  {
    id: 3,
    image: "barbero-3.png",
    name: "Carlos",
  },
];

const services = [
    {
        id: 1,
        name: 'Cortes de cabello',
        image: 'servicios/barbería.jpg'
    },
    {
        id: 2,
        name: 'Spa masculino',
        image: 'servicios/spa.jpg'
    },
    {
        id: 3,
        name: 'Perforaciones',
        image: 'servicios/piercing.jpg'
    }
];

// export const cuts = [
//     {
//         id: 1,
//         name: 'Buzz',
//         description: 'Es un corte muy solicitado por aquellos hombres que empiezan a notar pérdida de pelo. Consiste en un cabello muy corto, normalmente cortado al 1 y que se pasa por toda la cabeza por igual.',
//         image: '../../assets/cortes/buzz.jpg',
//     },
//     {
//         id: 2,
//         name: 'fade',
//         description: 'Significa ‘degradado’ y consiste en un corte con nuca, patillas y laterales muy cortos o incluso afeitados, volviéndose más largo en la parte superior de la cabeza, que se corta a una altura del número 4.',
//         image: '../../assets/cortes/fade.jpg',
//     },
//     {
//         id: 3,
//         name: 'Militar',
//         description: 'Corte muy parecido al buzz y que algunos confunden, te ayudamos a distinguirlo. El corte militar es un pelín más largo en los laterales (cortados al 1½ o 2) y algo más largo, muy poco, en la zona de arriba, sobre un 3½).',
//         image: '../../assets/cortes/Militar.jpg',
//     },
//     {
//         id: 4,
//         name: 'Mohicano',
//         description: 'Efectivamente, se trata del corte típico de la tribu americana que has visto en películas de cine. Consiste en rapar ambos lados de la cabeza, dejándose una cresta en la zona central que va desde la frente hasta la nuca.',
//         image: '../../assets/cortes/mohicano.jpg',
//     },
//     {
//         id: 5,
//         name: 'Mullet',
//         description: 'El corte consiste en llevar al número 4 la parte superior y los lados de la cabeza y dejar la parte baja trasera más larga, hasta llegar a los hombros o incluso más. ',
//         image: '../../assets/cortes/mullet.jpg.jpg',
//     },
//     {
//         id: 6,
//         name: 'Pompadour',
//         description: 'Con los años se ha ido adaptando y ahora se lleva con los laterales muy cortos y la zona superior con una onda natural, en forma de tupé.',
//         image: '../../assets/cortes/pompadour.jpg',
//     },
//     {
//         id: 7,
//         name: 'Top-knot',
//         description: 'Es una solución estupenda para aquellos hombres que quieren llevar la melena recogida en ocasiones especiales como bodas o eventos, así como en determinados trabajos que no permiten el cabello largo y suelto.',
//         image: '../../assets/cortes/top-knot.jpg',
//     },
//     {
//         id: 8,
//         name: 'Undercut',
//         description: 'Consiste en llevar el pelo muy corto desde abajo hasta la zona de las sienes, de hecho se corta así, de abajo a arriba y luego más largo en la parte de la coronilla, logrando una desconexión con esa parte.',
//         image: '../../assets/cortes/undercut.jpg',
//     },
//     {
//         id: 9,
//         name: 'Undercut-Bun',
//         description: 'Es una variante del anterior, que comenzó a ponerse de moda sobre 2015 y que se relacionaba con el estilo de vida boho chic y hipster.',
//         image: '../../assets/cortes/undercut-bun.jpg',
//     },
// ];

const $$Astro$6 = createAstro();
const $$MemberItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MemberItem;
  const { image, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="member-card-container-child" data-astro-cid-wwlwct2b> <figure class="member-card-img" data-astro-cid-wwlwct2b> <img class="member-card-image"${addAttribute(image, "src")}${addAttribute(`Imagen de presentaci\xF3n de ${name}`, "alt")} data-astro-cid-wwlwct2b> <h3 class="member-card-name" data-astro-cid-wwlwct2b>${name}</h3> </figure> </div> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/members/MemberItem.astro", void 0);

const $$Astro$5 = createAstro();
const $$Member = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Member;
  return renderTemplate`${maybeRenderHead()}<section id="members" class="bg-gray-900" data-astro-cid-62jptzxi> <div class="member-container-child" data-astro-cid-62jptzxi> <h2 class="member-title" data-astro-cid-62jptzxi>Miembros</h2> <p class="member-paragraph" data-astro-cid-62jptzxi>
Elige al barbero de tu preferencia, aunque es dificil escoger entre tanta
      calidad.
</p> <div class="member-card-container" data-astro-cid-62jptzxi> ${barbers.map((barber) => renderTemplate`${renderComponent($$result, "MemberItem", $$MemberItem, { ...barber, "data-astro-cid-62jptzxi": true })}`)} </div> </div> </section> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/members/Member.astro", void 0);

const $$Astro$4 = createAstro();
const $$ServiceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceItem;
  const { name, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure class="item-image" data-astro-cid-5huei5zs> <img${addAttribute(image, "src")} alt="Imagen del item" class="item-img" data-astro-cid-5huei5zs> </figure> <div class="item-content" data-astro-cid-5huei5zs> <h3 class="item-title" data-astro-cid-5huei5zs>${name}</h3> </div> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/servicios/ServiceItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Service;
  return renderTemplate`${maybeRenderHead()}<section id="service" class="service-container" data-astro-cid-aabuvnpf> <div class="service-container-child" data-astro-cid-aabuvnpf> <div class="w-fit mx-auto relative" data-astro-cid-aabuvnpf> <h2 class="service-title" data-astro-cid-aabuvnpf>Servicios</h2> <div class="flex h-[2px] w-full rounded-full overflow-hidden md:h-[5px] md:absolute md:bottom-4 " data-astro-cid-aabuvnpf> <span class="bg-blue-600 w-full flex-1" data-astro-cid-aabuvnpf></span> <span class="bg-red-600 w-full flex-1" data-astro-cid-aabuvnpf></span> </div> </div> <p class="service-paragraph" data-astro-cid-aabuvnpf>
Dejate impresionar por los diferentes servicios que podemos ofrecerte.
</p> <div class="service-container-flex" data-astro-cid-aabuvnpf> ${services.map(
    (item, index) => renderTemplate`<div class="item" data-astro-cid-aabuvnpf> ${renderComponent($$result, "ServiceItem", $$ServiceItem, { ...item, "data-astro-cid-aabuvnpf": true })} </div>`
  )} </div> </div> </section> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/servicios/Service.astro", void 0);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px"
  }
};
const FormModal = ({ modalIsOpen, closeModal, data }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    Modal,
    {
      isOpen: modalIsOpen,
      onRequestClose: closeModal,
      style: customStyles,
      contentLabel: "Example Modal",
      children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-center font-semibold text-2xl mb-4", children: [
          "Hola ",
          data.name,
          "!"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-center", children: [
          "En breve te contactaremos al número ",
          /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-semibold", children: data.phone }),
          " para agendar tu cita."
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: closeModal,
            className: "bg-red-500 hover:bg-red-400 font-semibold py-2 px-4 rounded-lg block mx-auto mt-10",
            children: "Cerrar"
          }
        )
      ]
    }
  ) });
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Demasiado corto").max(50, "Demasiado largo").required("Este campo es obligatorio"),
  phone: Yup.string().min(10, "Demasiado corto").max(10, "Demasiado largo").required("Este campo es obligatorio"),
  email: Yup.string().email("Correo electrónico inválido").required("Este campo es obligatorio")
});
const FormContact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({});
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return /* @__PURE__ */ jsx(
    Formik,
    {
      initialValues: {
        name: "",
        phone: "",
        email: ""
      },
      validationSchema,
      onSubmit: (values) => {
        const { name, phone } = values;
        setData({ name, phone });
      },
      children: ({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      }) => /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex-[1] lg:flex lg:flex-col mt-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-center text-[2rem] text-blue-500 font-semibold -tracking-tight", children: "Reserva tu cita" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-5 mt-10", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: `block mb-2 text-sm font-medium
               ${errors.name ? "text-red-700" : "text-white"}`, children: "Nombre completo" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "name",
              name: "name",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.name,
              className: `block w-full p-2.5 ${errors.name ? "bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"}`
            }
          ),
          errors.name && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-red-600 dark:text-red-500", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Oops!" }),
            " ",
            errors.name
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: `block mb-2 text-sm font-medium 
               ${errors.phone ? "text-red-700" : "text-white"}`, children: "Teléfono" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              id: "phone",
              name: "phone",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.phone,
              className: `block w-full p-2.5 ${errors.phone ? "bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"}`
            }
          ),
          errors.phone && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-red-600 dark:text-red-500", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Oops!" }),
            " ",
            errors.phone
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: `block mb-2 text-sm font-medium 
               ${errors.email ? "text-red-700" : "text-white"}`, children: "Correo electrónico" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.email,
              className: `block w-full p-2.5 ${errors.email ? "bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"}`
            }
          ),
          errors.email && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-red-600 dark:text-red-500", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Oops!" }),
            " ",
            errors.email
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 \r\n            font-medium rounded-lg text-sm w-[70%] sm:w-auto px-5 py-2.5 hover:cursor-pointer",
            disabled: Object.keys(errors).length > 0,
            onClick: openModal,
            children: "Reservar"
          }
        ),
        /* @__PURE__ */ jsx(FormModal, { modalIsOpen, closeModal, data })
      ] })
    }
  );
};

const $$Astro$2 = createAstro();
const $$InformationContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$InformationContact;
  return renderTemplate`${maybeRenderHead()}<div class="information-container" data-astro-cid-cto6rrhn> <div class="ubication-container" data-astro-cid-cto6rrhn> <h3 class="ubication-title" data-astro-cid-cto6rrhn>UBICACIÓN</h3> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127450.08734972654!2d-76.60806505581098!3d3.395232264740365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1713454274153!5m2!1ses!2sco" width="auto" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="ubication-map" data-astro-cid-cto6rrhn>
        </iframe> </div> <div class="social-container" data-astro-cid-cto6rrhn> <h3 class="social-title" data-astro-cid-cto6rrhn>SÍGUENOS</h3> <figure class="social-icon-image" data-astro-cid-cto6rrhn> <img src="icons/Facebook.svg" alt="Logo de Facebook" class="social-icon-img face" data-astro-cid-cto6rrhn> <img src="icons/Instagram.svg" alt="Logo de Instagram" class="social-icon-img insta" data-astro-cid-cto6rrhn> <img src="icons/Tiktok.svg" alt="Logo de Tiktok" class="social-icon-img tiktok" data-astro-cid-cto6rrhn> </figure> </div> </div> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/contact/components/InformationContact.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="contact-container" data-astro-cid-pbekeiqa> <div class="contact-container-child" data-astro-cid-pbekeiqa> ${renderComponent($$result, "InformationContact", $$InformationContact, { "data-astro-cid-pbekeiqa": true })} ${renderComponent($$result, "FormContact", FormContact, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/contact/components/FormContact", "client:component-export": "FormContact", "data-astro-cid-pbekeiqa": true })} </div> </section> `;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/components/contact/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Navbar", $$NavbarLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Member", $$Member, {})} ${renderComponent($$result2, "Service", $$Service, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/pages/index.astro", void 0);

const $$file = "C:/Users/carva/OneDrive/Escritorio/Estudio/Astro/02-peluqueriApp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
