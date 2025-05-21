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

gallery.innerHTML = images.map((image, index) => `
  <li>
    <img
      src="${image.preview}"
      data-index="${index}"
      data-original="${image.original}"
      alt="${image.description}"
    />
  </li>
`).join("");

let currentIndex = 0;
let instance = null;

gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") return;
  currentIndex = parseInt(event.target.dataset.index, 10);
  showImage(currentIndex);
});

function showImage(index) {
  const { original, description } = images[index];
  instance = basicLightbox.create(`
    <div class="modal-wrapper">
      <button class="nav-btn left-btn" aria-label="Попереднє зображення">&#10094;</button>
      <img src="${original}" alt="${description}" />
      <button class="nav-btn right-btn" aria-label="Наступне зображення">&#10095;</button>
    </div>
  `, {
    onShow: () => {
      document.addEventListener('keydown', onKeydown);
      instance.element().querySelector('.left-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

instance.element().querySelector('.right-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

    },
    onClose: () => document.removeEventListener('keydown', onKeydown)
  });
  instance.show();
}

function onKeydown(event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  } else if (event.key === "Escape") {
    instance.close();
  }
}

function updateImage() {
  const { original, description } = images[currentIndex];
  const img = instance.element().querySelector("img");
  img.src = original;
  img.alt = description;
}
