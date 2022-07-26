const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const creatorImagesEl = images.map((image) => {
  const itemEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = image.url;
  images.alt = image.alt;
  itemEl.append(imageEl);
  return itemEl;
});
listEl.append(creatorImagesEl);
