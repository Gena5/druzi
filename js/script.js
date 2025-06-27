document.addEventListener("DOMContentLoaded", () => {
  // --- СЛОВАРИ И ДАННЫЕ ---

  const statValueMapping = {
    X: 30,
    "S+": 20,
    S: 18,
    "A+": 16,
    A: 14,
    "B+": 13,
    B: 12,
    "C+": 11,
    C: 10,
    F: 5,
  };

  // ОБЫЧНЫЕ ДАННЫЕ
  const itemsData = [
    {
      title: '"PUG MAN"',
      description: "He got bitten by radioactive pug!",
      imageUrl: "img/objects/VOVA1.webp",
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "A" },
        { name: "HAX", value: "B" },
      ],
    },
    {
      title: '"LISTENER"',
      description: "Shhhh.... <br> Walls have ears...",
      imageUrl: "img/objects/ANDREO1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "S+" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "A" },
      ],
    },
    {
      title: '"CAVE MAN"',
      description: "Blessed by the oldest of all cats!",
      imageUrl: "img/objects/KIRIL1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "B" },
        { name: "Stamina", value: "C" },
        { name: "Health", value: "F" },
        { name: "HAX", value: "S" },
      ],
    },
    {
      title: '"LEGION"',
      description: 'Son of the great warrior <br /> "ONE MAN ARMY"',
      imageUrl: "img/objects/DENIS1.webp",
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "A" },
        { name: "Health", value: "B+" },
        { name: "HAX", value: "C" },
      ],
    },
    {
      title: '"MR.A"',
      description: "You beter not mess with him!",
      imageUrl: "img/objects/ALADIN1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "S+" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "A" },
        { name: "HAX", value: "S" },
      ],
    },
    {
      title: '"Calamitos"',
      description: "The Calamity itself.",
      imageUrl: "img/objects/Gena2.webp",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "C" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"FACELESS"',
      description: "He has no soul...",
      imageUrl: "img/objects/TIMURITO.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "C" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "B" },
        { name: "HAX", value: "A" },
      ],
    },
    {
      title: '"D.O.G"',
      description: "THE DEVOURER OF GODS",
      imageUrl: "img/objects/DOG1.webp",
      stats: [
        { name: "Strength", value: "S+" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "S+" },
        { name: "HAX", value: "S" },
      ],
    },
    {
      title: '"SON OF GOD"',
      description: "THE ALMIGHTY",
      imageUrl: "img/objects/hena1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "B+" },
        { name: "Intellect", value: "B+" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "B" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"OLDEST CAT"',
      description: "eternal creature",
      imageUrl: "img/objects/OldCat.webp",
      stats: [
        { name: "Strength", value: "F" },
        { name: "Agility", value: "F" },
        { name: "Intellect", value: "X" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "F" },
        { name: "HAX", value: "X" },
      ],
    },
    {
      title: '"The Beast"',
      description: "The Beast of the Apocalypse",
      imageUrl: "img/objects/Funtik.webp",
      stats: [
        { name: "Strength", value: "B+" },
        { name: "Agility", value: "B+" },
        { name: "Intellect", value: "B" },
        { name: "Stamina", value: "A" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "A" },
      ],
    },
    {
      title: '"The Doll"',
      description: "The charming face",
      imageUrl: "img/objects/ARTEM1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "B+" },
      ],
    },
  ];

  // ПРОБУЖДЕННЫЕ ДАННЫЕ
  const awokenItemsData = [
    {
      title: '"AWOKEN PUG MAN"',
      description: "The pug essence is now fully unleashed!",
      imageUrl: "img/objects/VOVA1_awoken.webp", // ПРЕДПОЛАГАЕТСЯ НОВОЕ ИЗОБРАЖЕНИЕ
      stats: [
        { name: "Strength", value: "S+" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "A" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"AWOKEN LISTENER"',
      description: "The listener's senses are heightened!",
      imageUrl: "img/objects/ANDREO1_awoken.webp",
      stats: [
        { name: "Strength", value: "B+" },
        { name: "Agility", value: "S+" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"AWOKEN CAVE MAN"',
      description: "The primal power is overwhelming!",
      imageUrl: "img/objects/KIRIL1_awoken.webp",
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "B" },
        { name: "Stamina", value: "C" },
        { name: "Health", value: "F" },
        { name: "HAX", value: "S+" },
      ],
    },
    {
      title: '"AWOKEN LEGION"',
      description: "The warrior's spirit is unyielding!",
      imageUrl: "img/objects/DENIS1_awoken.webp",
      stats: [
        { name: "Strength", value: "S+" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "A" },
        { name: "Health", value: "B+" },
        { name: "HAX", value: "C" },
      ],
    },
    {
      title: '"AWOKEN MR.A"',
      description: "The ultimate form of vigilance and power.",
      imageUrl: "img/objects/ALADIN1_awoken.webp",
      stats: [
        { name: "Strength", value: "B+" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "S+" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "A+" },
        { name: "HAX", value: "S+" },
      ],
    },
    {
      title: '"AWOKEN Calamitos"',
      description: "The embodiment of catastrophe and might.",
      imageUrl: "img/objects/Gena2_awoken.webp",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "C" },
        { name: "Health", value: "S+" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"AWOKEN FACELESS"',
      description: "The soulless one now wields greater power...",
      imageUrl: "img/objects/TIMURITO_awoken.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "S+" },
        { name: "Intellect", value: "C" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "B" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"AWOKEN D.O.G"',
      description: "A divine beast awakened to its true potential.",
      imageUrl: "img/objects/DOG1_awoken.webp",
      stats: [
        { name: "Strength", value: "S+" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "S+" },
        { name: "HAX", value: "S" },
      ],
    },
    {
      title: '"AWOKEN SON OF GOD"',
      description: "The divine heir radiates power.",
      imageUrl: "img/objects/hena1_awoken.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "B+" },
        { name: "Intellect", value: "B+" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "B" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: '"AWOKEN OLDEST CAT"',
      description: "The ancient one awakens with limitless wisdom and power.",
      imageUrl: "img/objects/OldCat_awoken.webp",
      stats: [
        { name: "Strength", value: "F" },
        { name: "Agility", value: "F" },
        { name: "Intellect", value: "X" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "F" },
        { name: "HAX", value: "X" },
      ],
    },
    {
      title: '"AWOKEN The Beast"',
      description: "The ultimate predator of the Apocalypse.",
      imageUrl: "img/objects/Funtik_awoken.webp",
      stats: [
        { name: "Strength", value: "B+" },
        { name: "Agility", value: "B+" },
        { name: "Intellect", value: "B" },
        { name: "Stamina", value: "A" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "A" },
      ],
    },
    {
      title: '"AWOKEN The Doll"',
      description: "The charming face now hides a powerful spirit.",
      imageUrl: "img/objects/ARTEM1_awoken.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "B+" },
      ],
    },
  ];

  // --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ И ЭЛЕМЕНТЫ ---

  const objectsContainer = document.querySelector(".objects");
  const awakeButton = document.getElementById("awake-button");
  const transitionOverlay = document.getElementById("transition-overlay"); // Получаем оверлей
  let isAwakened = false; // Отслеживаем состояние

  // --- ОСНОВНАЯ ЛОГИКА ---

  /**
   * Функция для отрисовки карточек на основе переданных данных
   * @param {Array} dataSet - Массив с данными карточек (itemsData или awokenItemsData)
   */
  function renderCards(dataSet) {
    // Очищаем контейнер перед новой отрисовкой
    objectsContainer.innerHTML = "";

    dataSet.forEach((item) => {
      // --- Расчет ранга ---
      let totalPower = 0;
      item.stats.forEach((stat) => {
        totalPower += statValueMapping[stat.value] || 0;
      });
      console.log(`${item.title} : ${totalPower}`);

      let calculatedRank = "F";
      if (totalPower > 110) calculatedRank = "X";
      else if (totalPower > 90) calculatedRank = "S+";
      else if (totalPower > 80) calculatedRank = "S";
      else if (totalPower > 70) calculatedRank = "A+";
      else if (totalPower > 60) calculatedRank = "A";
      else if (totalPower > 50) calculatedRank = "B";
      else if (totalPower > 40) calculatedRank = "C";
      item.rank = calculatedRank;

      // --- Создание HTML элемента ---
      const itemCard = document.createElement("div");
      itemCard.className = "item-card";
      itemCard.innerHTML = `
        <div class="item-card-inner">
          <div class="item-card-front">
            <img src="${item.imageUrl}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="item-card-back">
            <div class="back-top">
              <div class="rank-circle">${item.rank}</div>
              <h3>${item.title}</h3>
            </div>
            <div class="back-middle">
              <div class="stats-list">
                <ul>
                  ${item.stats
                    .map(
                      (stat) =>
                        `<li><span class="stat-name stat-${stat.name.toLowerCase()}">${
                          stat.name
                        }:</span><span class="stat-value">${
                          stat.value
                        }</span></li>`
                    )
                    .join("")}
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;

      // Добавляем обработчик переворота
      itemCard.addEventListener("click", () => {
        const cardInner = itemCard.querySelector(".item-card-inner");
        cardInner.classList.toggle("is-flipped");
      });

      objectsContainer.appendChild(itemCard);
    });
  }

  // --- ОБРАБОТЧИКИ СОБЫТИЙ ---

  awakeButton.addEventListener("click", () => {
    const totalDuration = 2000;
    const swapTime = totalDuration / 2;

    awakeButton.disabled = true;

    // 1. Запускаем анимацию тряски на картах
    objectsContainer.classList.add("is-transitioning");
    // 2. Запускаем анимацию вспышки на оверлее
    transitionOverlay.classList.add("is-flashing");

    // 3. Таймер для смены карт НА ПИКЕ вспышки
    setTimeout(() => {
      isAwakened = !isAwakened;
      const currentDataSet = isAwakened ? awokenItemsData : itemsData;
      renderCards(currentDataSet);
      objectsContainer.classList.toggle("is-awakened", isAwakened);
      document.body.classList.toggle("is-awakened", isAwakened); // <-- ДОБАВЬТЕ ЭТУ СТРОКУ
      awakeButton.textContent = isAwakened ? "REVERT" : "AWAKE";
    }, swapTime);

    // 4. Таймер для завершения всех процессов ПОСЛЕ анимации
    setTimeout(() => {
      objectsContainer.classList.remove("is-transitioning");
      transitionOverlay.classList.remove("is-flashing");
      awakeButton.disabled = false;
    }, totalDuration);
  });

  // --- ПЕРВИЧНАЯ ЗАГРУЗКА ---
  renderCards(itemsData); // При загрузке страницы показываем обычные карты
});
