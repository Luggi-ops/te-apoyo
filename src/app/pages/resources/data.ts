
const blogCategories = [
  {
    id: 1,
    name: "Recients",
    active: true,
  },
  {
    id: 2,
    name: "Tech"
  },
  {
    id: 3,
    name: "Finanzas"
  },
  {
    id: 4,
    name: "Inspiración"
  },
  {
    id: 5,
    name: "Familia"
  },
  {
    id: 6,
    name: "Podcast"
  },
]

const blogs = [
  {
    categorieName: "Tech",
    title: "El futuro de las fintech se encuentran en su pleno apogeo-te contamos todo",
    preview: "En esta ocasión, nuestra CMO, Karina Marey nos comparte todo sobre el impacto que vienen teniendo las fintech durante los últimos dos años.",
    img: "assets/images/resources/blog-1.png",
    user: {
      name: "Karina Marey",
      area: "Marketing",
      avatar: "assets/images/resources/avatar-1.png"
    }
  },
  {
    categorieName: "Finanzas",
    title: "Diez claves del wellbeing corporativo. Apuesta por una empresa saludable",
    preview: "Mauricio Torres, nuestro CEO, nos cuenta cómo el bienestar corporativo es la clave del éxito empresarial hoy en día.",
    img: "assets/images/resources/blog-2.png",
    user: {
      name: "Mauricio Torres",
      area: "Finanzas",
      avatar: "assets/images/resources/avatar-2.png"
    }
  },
]

const courses = [
  {
    title: "Finanzas para no financieros",
    author: "Señor Burns",
    duration: "30m",
    modules: 3,
    mode: "100% online",
    img: "assets/images/resources/curso-1.png",
    isFree: true
  },
  {
    title: "Finanzas familiares",
    author: "Homero Simpson",
    duration: "1h10m",
    modules: 5,
    mode: "100% online",
    img: "assets/images/resources/curso-2.png",
    isFree: false
  },
  {
    title: "Finanzas y tecnología",
    author: "Tony Stark",
    duration: "1h10m",
    modules: 5,
    mode: "100% online",
    img: "assets/images/resources/curso-3.png",
    isFree: false
  }
]

export { blogCategories, blogs, courses };