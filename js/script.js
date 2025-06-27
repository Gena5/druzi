document.addEventListener("DOMContentLoaded", () => {
  // ВАЖНО: Имена файлов изображений были изменены на строчные (маленькие) буквы.
  // Убедитесь, что имена ваших файлов в папке /img/objects/ на GitHub
  // ТОЧНО соответствуют этим новым именам (например, 'vova1.webp', 'andreo1.webp' и т.д.).
  const itemsData = [
    {
      title: '"PUG MAN"',
      description: "He got bitten by radioactive pug!",
      imageUrl: "img/objects/vova1.webp", // Было VOVA1.webp
      backDescription: "Это уникальное описание для задней стороны Объекта 1.",
      backLink: "/details/1",
    },
    {
      title: '"LISTENER"',
      description: "Shhhh.... <br> Walls have ears...",
      imageUrl: "img/objects/andreo1.webp", // Было ANDREO1.webp
      backDescription: "Здесь другая информация, специально для Объекта 2.",
      backLink: "/details/2",
    },
    {
      title: '"CAVE MAN"',
      description: "Blessed by the oldest of all cats!",
      imageUrl: "img/objects/kiril1.webp", // Было KIRIL1.webp
      backDescription: "Подробности о проекте 'CAVE MAN'.",
      backLink: "/details/3",
    },
    {
      title: '"LEGION"',
      description: 'Son of the great warrior <br /> "ONE MAN ARMY"',
      imageUrl: "img/objects/denis1.webp", // Было DENIS1.webp
      backDescription: "Вся дополнительная информация по Объекту 4.",
      backLink: "/details/4",
    },
    {
      title: '"MR.A"',
      description: "You beter not mess with him!",
      imageUrl: "img/objects/aladin1.webp",
      backDescription: "Вся дополнительная информация по Объекту 5.",
      backLink: "/details/5",
    },
    {
      title: '"Calamitos"',
      description: "The Calamity itself.",
      imageUrl: "img/objects/gena2.webp",
      backDescription: "Вся дополнительная информация по Объекту 6.",
      backLink: "/details/6",
    },
    {
      title: '"FACELESS"',
      description: "He has no soul...",
      imageUrl: "img/objects/timurito.webp",
      backDescription: "Вся дополнительная информация по Объекту 7.", // Исправлено
      backLink: "/details/7", // Исправлено
    },
    {
      title: '"D.O.G"',
      description: "THE DEVOURER OF GODS",
      imageUrl: "img/objects/dog1.webp",
      backDescription: "THE DEVOURER OF GODS",
      backLink: "/details/8", // Исправлено
    },
    {
      title: '"SON OF GOD"',
      description: "THE ALMIGHTY",
      imageUrl: "img/objects/hena1.webp",
      backDescription: "THE ALMIGHTY", // Добавлено описание
      backLink: "/details/9", // Исправлено
    },
    {
      title: '"OLDEST CAT"',
      description: "eternal creature",
      imageUrl: "img/objects/oldcat.webp",
      backDescription: "An eternal, wise creature.", // Добавлено описание
      backLink: "/details/10", // Исправлено
    },
    {
      title: '"The Beast"',
      description: "The Beast of the Apocalypse",
      imageUrl: "img/objects/funtik.webp", // Было Funtik.webp
      backDescription: "The Beast of the Apocalypse.", // Добавлено описание
      backLink: "/details/11", // Исправлено
    },
    {
      title: '"The Doll"',
      description: "The charming face",
      imageUrl: "img/objects/artem1.webp", // Было Artem1.webp
      backDescription: "A charming face with a dark secret.", // Добавлено описание
      backLink: "/details/12", // Исправлено
    },
  ];

  const objectsContainer = document.querySelector(".objects");

  itemsData.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "item-card";

    // Новая структура для эффекта переворота
    itemCard.innerHTML = `
      <div class="item-card-inner">
        <div class="item-card-front">
          <img src="${item.imageUrl}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div class="item-card-back">
          <h3>${item.title}</h3>
          <p>${item.backDescription}</p>
          <a href="${item.backLink}">Подробнее</a>
        </div>
      </div>
    `;

    // Добавляем обработчик клика для переворота
    itemCard.addEventListener("click", () => {
      const cardInner = itemCard.querySelector(".item-card-inner");
      cardInner.classList.toggle("is-flipped");
    });

    objectsContainer.appendChild(itemCard);
  });
});
