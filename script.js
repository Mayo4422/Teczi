// Array de recursos desde tu bucket de S3
const resources = [
  { type: "image", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/1.jpg" },
  { type: "image", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/2.jpg" },
  { type: "image", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/3.jpg" },
  { type: "image", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/4.jpg" },
  { type: "image", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/5.jpg" },
  { type: "video", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/v1.mp4" },
  { type: "video", url: "https://galeria-mayo.s3.us-east-1.amazonaws.com/v2.mp4" }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close");

// Generar la galería dinámicamente
resources.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = `Imagen ${index + 1}`;
    div.appendChild(img);
  } else if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.url;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    div.appendChild(video);
  }

  // Evento para abrir modal
  div.addEventListener("click", () => {
    modal.style.display = "flex";
    modalContent.innerHTML = ""; // limpiar modal
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.url;
      modalContent.appendChild(img);
    } else if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.url;
      video.controls = true;
      video.autoplay = true;
      modalContent.appendChild(video);
    }
  });

  gallery.appendChild(div);
});

// Cerrar modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  modalContent.innerHTML = "";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }
};
