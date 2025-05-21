const images = [
  {
    preview: "https://picsum.photos/id/1011/300/200",
    original: "https://picsum.photos/id/1011/1200/800",
    description: "Дівчина в човні"
  },
  {
    preview: "https://picsum.photos/id/1015/300/200",
    original: "https://picsum.photos/id/1015/1200/800",
    description: "Річка та гори"
  },
  {
    preview: "https://picsum.photos/id/1020/300/200",
    original: "https://picsum.photos/id/1020/1200/800",
    description: "Ведмідь"
  },
  {
    preview: "https://picsum.photos/id/1025/300/200",
    original: "https://picsum.photos/id/1025/1200/800",
    description: "Собака в пледі"
  },
  {
    preview: "https://picsum.photos/id/1035/300/200",
    original: "https://picsum.photos/id/1035/1200/800",
    description: "Водоспад"
  },
  {
    preview: "https://picsum.photos/id/1043/300/200",
    original: "https://picsum.photos/id/1043/1200/800",
    description: "Ліс та гори"
  },
  {
    preview: "https://picsum.photos/id/1050/300/200",
    original: "https://picsum.photos/id/1050/1200/800",
    description: "Море та скелі"
  },
  {
    preview: "https://picsum.photos/id/1065/300/200",
    original: "https://picsum.photos/id/1065/1200/800",
    description: "Вулиця"
  },
  {
    preview: "https://picsum.photos/id/1071/300/200",
    original: "https://picsum.photos/id/1071/1200/800",
    description: "Маслкар"
  }
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    (image) => `
  <li>
    <img
      src="${image.preview}"
      data-original="${image.original}"
      alt="${image.description}"
    />
  </li>
`
  )
  .join("");

gallery.innerHTML = markup;

// Делегування події click
gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") return;
  const originalUrl = event.target.dataset.original;
  console.log("Велике зображення:", originalUrl);
});