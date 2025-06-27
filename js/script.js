document.addEventListener("DOMContentLoaded", () => {
  // Объект для перевода буквенных рангов статов в числовые очки
  const statValueMapping = {
    X: 30, // Новый высший ранг
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

  // Исходные данные без свойства rank. Он будет рассчитан автоматически.
  const itemsData = [
    {
      title: '"PUG MAN"',
      description: "He got bitten by radioactive pug!",
      imageUrl: "img/objects/VOVA1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "C" },
        { name: "Potencial", value: "S+" },
      ],
      backLink: "/details/1",
    },
    {
      title: '"LISTENER"',
      description: "Shhhh.... <br> Walls have ears...",
      imageUrl: "img/objects/ANDREO1.webp",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "C" },
        { name: "Potencial", value: "A" },
      ],
      backLink: "/details/2",
    },
    {
      title: '"CAVE MAN"',
      description: "Blessed by the oldest of all cats!",
      imageUrl: "img/objects/KIRIL1.webp",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "C" },
        { name: "Potencial", value: "A" },
      ],
      backLink: "/details/3",
    },
    {
      title: '"LEGION"',
      description: 'Son of the great warrior <br /> "ONE MAN ARMY"',
      imageUrl: "img/objects/DENIS1.webp",
      stats: [
        { name: "Strength", value: "A" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "B" },
        { name: "Potencial", value: "X" },
      ],
      backLink: "/details/4",
    },
    {
      title: '"MR.A"',
      description: "You beter not mess with him!",
      imageUrl: "img/objects/ALADIN1.webp",
      stats: [
        { name: "Strength", value: "A" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "A" },
        { name: "Potencial", value: "A" },
      ],
      backLink: "/details/5",
    },
    {
      title: '"Calamitos"',
      description: "The Calamity itself.",
      imageUrl: "img/objects/Gena2.webp",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "S+" },
        { name: "Potencial", value: "S" },
      ],
      backLink: "/details/6",
    },
    {
      title: '"FACELESS"',
      description: "He has no soul...",
      imageUrl: "img/objects/TIMURITO.webp",
      stats: [
        { name: "Strength", value: "C" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "A" },
        { name: "Potencial", value: "S" },
      ],
      backLink: "/details/7",
    },
    {
      title: '"D.O.G"',
      description: "THE DEVOURER OF GODS",
      imageUrl: "img/objects/DOG1.webp",
      stats: [
        { name: "Strength", value: "S+" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "F" },
        { name: "Potencial", value: "S+" },
      ],
      backLink: "/details/8",
    },
    {
      title: '"SON OF GOD"',
      description: "THE ALMIGHTY",
      imageUrl: "img/objects/hena1.webp",
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "S" }, // Улучшено для демонстрации нового ранга
        { name: "Potencial", value: "S+" },
      ],
      backLink: "/details/9",
    },
    {
      title: '"OLDEST CAT"',
      description: "eternal creature",
      imageUrl: "img/objects/OldCat.webp",
      stats: [
        { name: "Strength", value: "C" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "S" },
        { name: "Potencial", value: "A+" },
      ],
      backLink: "/details/10",
    },
    {
      title: '"The Beast"',
      description: "The Beast of the Apocalypse",
      imageUrl: "img/objects/Funtik.webp",
      stats: [
        { name: "Strength", value: "A" },
        { name: "Agility", value: "A+" },
        { name: "Intellect", value: "C" },
        { name: "Potencial", value: "B" },
      ],
      backLink: "/details/11",
    },
    {
      title: '"The Doll"',
      description: "The charming face",
      imageUrl: "img/objects/ARTEM1.webp",
      stats: [
        { name: "Strength", value: "F" },
        { name: "Agility", value: "C" },
        { name: "Intellect", value: "A" },
        { name: "Potencial", value: "F" },
      ],
      backLink: "/details/12",
    },
  ];

  const objectsContainer = document.querySelector(".objects");

  itemsData.forEach((item) => {
    // --- ЛОГИКА РАСЧЕТА РАНГА ---
    // 1. Считаем общую силу персонажа
    let totalPower = 0;
    item.stats.forEach((stat) => {
      totalPower += statValueMapping[stat.value] || 0; // || 0 на случай, если ранг не найден
    });

    // 2. Присваиваем ранг в зависимости от общей силы
    // Вы можете легко менять эти пороговые значения для баланса
    let calculatedRank = "F";
    if (totalPower > 90) calculatedRank = "X"; // Условие для нового ранга
    else if (totalPower > 65) calculatedRank = "S+";
    else if (totalPower > 60) calculatedRank = "S";
    else if (totalPower > 55) calculatedRank = "A+";
    else if (totalPower > 50) calculatedRank = "A";
    else if (totalPower > 45) calculatedRank = "B";
    else if (totalPower > 40) calculatedRank = "C";

    // 3. Добавляем рассчитанный ранг к объекту
    item.rank = calculatedRank;
    // --- КОНЕЦ ЛОГИКИ РАСЧЕТА ---

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
          </div>
          <div class="back-middle">
            <h3>${item.title}</h3>
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
          <div class="back-bottom">
            <a href="${item.backLink}">Подробнее</a>
          </div>
        </div>
      </div>
    `;

    itemCard.addEventListener("click", () => {
      const cardInner = itemCard.querySelector(".item-card-inner");
      cardInner.classList.toggle("is-flipped");
    });

    objectsContainer.appendChild(itemCard);
  });
});
