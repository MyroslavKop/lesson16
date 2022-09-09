"use strict";

// Переменная для родителя
let albumList = document.getElementById("albums");

// Удаление элементов по клику
albumList.addEventListener("click", (event) => {
  let removeBtn = event.target.className === "album_btn";
  if (removeBtn) {
    event.target.closest(".album_title").remove();
  }
});

// ---------------------------------------------------/
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((result) => {
    result.forEach((element) => {
      // Переменные для создания элементов (список и кнопка)
      let albumTitle = document.createElement("li");
      let btn = document.createElement("button");

      // Добавление к созданным элементам значения
      btn.innerHTML = "Delete";
      albumTitle.innerHTML = element.title;

      // Внедрение созданных элементов в структуру
      albumList.append(albumTitle);
      albumTitle.append(btn);

      // Добавление классов для элементов
      albumTitle.classList.add("album_title");
      btn.classList.add("album_btn");
    });
  })
  .catch((error) => console.error(error));
