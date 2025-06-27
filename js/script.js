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
        { name: "Strength", value: "S" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "A" },
        { name: "HAX", value: "B" },
      ],
      backLink: "/details/1",
    },
    {
      title: '"LISTENER"',
      description: "Shhhh.... <br> Walls have ears...",
      imageUrl: "img/objects/ANDREO1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "S+" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "A" },
      ],
      backLink: "/details/2",
    },
    {
      title: '"CAVE MAN"',
      description: "Blessed by the oldest of all cats!",
      imageUrl: "img/objects/KIRIL1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "C+" },
        { name: "Stamina", value: "F" },
        { name: "Health", value: "F" },
        { name: "HAX", value: "S" },
      ],
      backLink: "/details/3",
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
      backLink: "/details/4",
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
      backLink: "/details/5",
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
      backLink: "/details/6",
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
      backLink: "/details/7",
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
      backLink: "/details/8",
    },
    {
      title: '"SON OF GOD"',
      description: "THE ALMIGHTY",
      imageUrl: "img/objects/hena1.webp",
      stats: [
        { name: "Strength", value: "B" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "B+" },
        { name: "Stamina", value: "B" },
        { name: "Health", value: "B" },
        { name: "HAX", value: "A+" },
      ],
      backLink: "/details/9",
    },
    {
      title: '"OLDEST CAT"',
      description: "eternal creature",
      imageUrl: "img/objects/OldCat.webp",
      stats: [
        { name: "Strength", value: "F" },
        { name: "Agility", value: "B" },
        { name: "Intellect", value: "X" },
        { name: "Stamina", value: "C" },
        { name: "Health", value: "F" },
        { name: "HAX", value: "X" },
      ],
      backLink: "/details/10",
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
      backLink: "/details/11",
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
        { name: "HAX", value: "A+" },
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
    // Пороги увеличены, чтобы соответствовать большему количеству статов
    let calculatedRank = "F";
    if (totalPower > 110) calculatedRank = "X";
    else if (totalPower > 90) calculatedRank = "S+";
    else if (totalPower > 80) calculatedRank = "S";
    else if (totalPower > 70) calculatedRank = "A+";
    else if (totalPower > 60) calculatedRank = "A";
    else if (totalPower > 50) calculatedRank = "B";
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

    itemCard.addEventListener("click", () => {
      const cardInner = itemCard.querySelector(".item-card-inner");
      cardInner.classList.toggle("is-flipped");
    });

    objectsContainer.appendChild(itemCard);
  });
});
