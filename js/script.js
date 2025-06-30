/**
 * THE DRUZI - Awakening System
 *
 * ИНСТРУКЦИЯ ПО ОБНОВЛЕНИЮ КЕША:
 * 1. При изменении контента (карточки, стили, изображения) увеличьте CACHE_VERSION на 1
 * 2. Кеш пользователей очистится автоматически при следующем посещении
 *
 * ОТЛАДКА:
 * - getCacheVersion() - показать версию кеша
 * - forceClearCache() - принудительно очистить кеш и перезагрузить
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- ВЕРСИОНИРОВАНИЕ КЕША ---
  const CACHE_VERSION = 20; // УВЕЛИЧЕНО с 19 до 20
  const CACHE_KEY = "druzi-cache-version";

  // Проверяем версию кеша при загрузке
  function checkCacheVersion() {
    const storedVersion = localStorage.getItem(CACHE_KEY);
    const currentVersion = CACHE_VERSION;

    // ИСПРАВЛЕНО: кеш удаляется только если версия БОЛЬШЕ сохраненной
    if (storedVersion === null) {
      // Первое посещение - просто сохраняем версию
      localStorage.setItem(CACHE_KEY, currentVersion.toString());
      console.log(`Cache version set to ${currentVersion} (first visit)`);
    } else if (parseInt(storedVersion) < currentVersion) {
      // Версия увеличилась - очищаем кеш
      clearSiteCache();
      localStorage.setItem(CACHE_KEY, currentVersion.toString());
      console.log(
        `Cache updated from version ${storedVersion} to ${currentVersion}`
      );
    } else {
      // Версии совпадают или старая больше - ничего не делаем
      console.log(
        `Cache version ${currentVersion} is current, no changes needed`
      );
    }
  }

  // Функция очистки кеша сайта
  function clearSiteCache() {
    // Очищаем localStorage
    const keysToKeep = [CACHE_KEY]; // Оставляем только ключ версии
    const allKeys = Object.keys(localStorage);

    allKeys.forEach((key) => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });

    // Очищаем sessionStorage
    sessionStorage.clear();

    // Очищаем кеш браузера (если поддерживается)
    if ("caches" in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (
            cacheName.includes("druzi") ||
            cacheName.includes(location.hostname)
          ) {
            caches.delete(cacheName);
          }
        });
      });
    }

    console.log("Site cache cleared successfully");
  }

  // Запускаем проверку версии кеша
  checkCacheVersion();

  // --- СЛОВАРИ И ДАННЫЕ ---

  const statValueMapping = {
    "Z+": 85, // Increased
    Z: 75, // Increased
    "X+": 65, // Unchanged
    X: 55, // Reduced
    SSS: 45, // Unchanged
    "SS+": 38, // Adjusted
    SS: 32, // Adjusted
    "S+": 27, // Adjusted
    S: 22, // Reduced
    "A+": 18, // Reduced
    A: 15, // Reduced
    "B+": 12, // Reduced
    B: 10, // Reduced
    "C+": 8, // Reduced
    C: 6, // Reduced
    F: 3, // Reduced
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
      title: 'AWOKEN: <br> "PUG MAN"',
      description: "Even hell can`t hendle him.",
      imageUrl: "img/awk/pugman.jpg", // ПРЕДПОЛАГАЕТСЯ НОВОЕ ИЗОБРАЖЕНИЕ
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "S" },
        { name: "Stamina", value: "X" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "X" },
      ],
    },
    {
      title: 'AWOKEN: <br> "LISTENER"',
      description: "The listener's senses are heightened!",
      imageUrl: "img/awk/meh.jpg",
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "X" },
        { name: "Intellect", value: "X" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "S" },
      ],
    },
    {
      title: 'AWOKEN: <br> "CAVE MAN"',
      description: "The primal power is overwhelming!",
      imageUrl: "img/awk/kiril.jpg",
      stats: [
        { name: "Strength", value: "SSS" },
        { name: "Agility", value: "SSS" },
        { name: "Intellect", value: "B" },
        { name: "Stamina", value: "SSS" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "S+" },
      ],
    },
    {
      title: 'AWOKEN: <br> "LEGION"',
      description: "The warrior's spirit is unyielding!",
      imageUrl: "img/awk/DENIS.jpg",
      stats: [
        { name: "Strength", value: "Z+" },
        { name: "Agility", value: "X" },
        { name: "Intellect", value: "S" },
        { name: "Stamina", value: "X" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "A+" },
      ],
    },
    {
      title: 'AWOKEN: <br> "MR.A"',
      description: "The ultimate form of vigilance and power.",
      imageUrl: "img/awk/aladin.jpg",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "A+" },
        { name: "Intellect", value: "Z+" },
        { name: "Stamina", value: "A" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "S+" },
      ],
    },
    {
      title: 'AWOKEN: <br> "Calamitos"',
      description: "The embodiment of catastrophe and might.",
      imageUrl: "img/awk/GENA_AWAKE.png",
      stats: [
        { name: "Strength", value: "A+" },
        { name: "Agility", value: "A" },
        { name: "Intellect", value: "X" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "Z+" },
        { name: "HAX", value: "Z+" },
      ],
    },
    {
      title: 'AWOKEN: <br> "FACELESS"',
      description: "The soulless one now wields greater power...",
      imageUrl: "img/awk/faL.jpg",
      stats: [
        { name: "Strength", value: "A" },
        { name: "Agility", value: "SS" },
        { name: "Intellect", value: "A+" },
        { name: "Stamina", value: "Z" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "SSS" },
      ],
    },
    {
      title: 'AWOKEN: <br> "D.O.G"',
      description: "A divine beast awakened to its true potential.",
      imageUrl: "img/awk/DOG_AWAKE.png",
      stats: [
        { name: "Strength", value: "Z+" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "F" },
        { name: "Stamina", value: "Z+" },
        { name: "Health", value: "Z+" },
        { name: "HAX", value: "S" },
      ],
    },
    {
      title: 'AWOKEN: <br> "THE ELDER"',
      description: "The divine heir radiates power.",
      imageUrl: "img/awk/elder.jpg",
      stats: [
        { name: "Strength", value: "SS" },
        { name: "Agility", value: "SS" },
        { name: "Intellect", value: "SS" },
        { name: "Stamina", value: "SS" },
        { name: "Health", value: "SS" },
        { name: "HAX", value: "Z+" },
      ],
    },
    {
      title: 'AWOKEN: <br> "OLDEST CAT"',
      description: "The ancient one awakens with limitless wisdom and power.",
      imageUrl: "img/awk/oldcat.jpg",
      stats: [
        { name: "Strength", value: "S" },
        { name: "Agility", value: "S" },
        { name: "Intellect", value: "X" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "S" },
        { name: "HAX", value: "X" },
      ],
    },
    {
      title: 'AWOKEN: <br> "The Beast"',
      description: "The ultimate predator of the Apocalypse.",
      imageUrl: "img/awk/cerber.jpg",
      stats: [
        { name: "Strength", value: "S+" },
        { name: "Agility", value: "SS" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "C" },
        { name: "HAX", value: "A" },
      ],
    },
    {
      title: 'AWOKEN: <br> "The Doll"',
      description: "The charming face now hides a powerful spirit.",
      imageUrl: "img/awk/mask.jpg",
      stats: [
        { name: "Strength", value: "SSS" },
        { name: "Agility", value: "SSS" },
        { name: "Intellect", value: "A" },
        { name: "Stamina", value: "S" },
        { name: "Health", value: "A" },
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

  // --- ОБРАБОТЧИК ДЛЯ КНОПКИ VIEW MORE ---
  function setupViewMoreButtons() {
    document.querySelectorAll(".view-more-btn").forEach((button) => {
      button.removeEventListener("click", handleViewMoreClick); // Удаляем старый обработчик если есть
      button.addEventListener("click", handleViewMoreClick);
    });
  }

  function handleViewMoreClick(event) {
    event.stopPropagation(); // Останавливаем распространение клика
    const cardElement = event.target.closest(".item-card");
    const characterId = cardElement.dataset.id;
    openCharacterModal(characterId);
  }

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
      if (totalPower > 280) calculatedRank = "Z+"; // For D.O.G and Calamitos
      else if (totalPower > 250) calculatedRank = "Z"; // For LEGION
      else if (totalPower > 230) calculatedRank = "X+"; // For THE ELDER
      else if (totalPower > 200) calculatedRank = "X"; // For FACELESS
      else if (totalPower > 180)
        calculatedRank = "SSS"; // For PUG MAN, LISTENER, etc.
      else if (totalPower > 150) calculatedRank = "SS+"; // For THE DOLL
      else if (totalPower > 120) calculatedRank = "SS"; // For The Beast
      else if (totalPower > 100) calculatedRank = "S+";
      else if (totalPower > 85) calculatedRank = "S";
      else if (totalPower > 70) calculatedRank = "A+";
      else if (totalPower > 60) calculatedRank = "A";
      else if (totalPower > 50) calculatedRank = "B+";
      else if (totalPower > 40) calculatedRank = "B";
      else if (totalPower > 30) calculatedRank = "C+";
      else if (totalPower > 20) calculatedRank = "C";
      item.rank = calculatedRank;

      // --- Создание HTML элемента ---
      const itemCard = document.createElement("div");
      itemCard.className = "item-card";
      itemCard.dataset.id = item.title; // Добавляем data-атрибут с ID

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
                        }</span><span class="stat-value">${
                          stat.value
                        }</span></li>`
                    )
                    .join("")}
                </ul>
              </div>
            </div>
            <div class="back-bottom">
              <button class="view-more-btn">View More</button>
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

    // Настройка кнопок View More после рендеринга всех карточек
    setupViewMoreButtons();
  }

  // --- ФУНКЦИИ ДЛЯ МОДАЛЬНОГО ОКНА ---

  /**
   * Открывает модальное окно с информацией о персонаже
   * @param {String} characterId - ID персонажа (title)
   */
  window.openCharacterModal = function (characterId) {
    console.log("Opening modal for:", characterId);

    // Определяем, какой набор данных использовать
    const dataSet = isAwakened ? awokenItemsData : itemsData;

    // Находим персонажа в соответствующем массиве
    const character = dataSet.find((item) => item.title === characterId);

    if (!character) {
      console.error(`Character with ID ${characterId} not found`);
      return;
    }

    const modal = document.getElementById("character-modal");
    const modalContent = modal.querySelector(".modal-content");

    // Лор зависит от состояния пробуждения
    const loreTexts = {
      // Обычные версии
      "PUG MAN":
        "Once an ordinary man, he was bitten by a radioactive pug during a late-night walk. Now he possesses the incredible ability to sense treats from miles away and an unstoppable urge to sleep 18 hours a day.",
      LISTENER:
        "In the shadows, he waits and watches. His enhanced hearing allows him to detect whispers through concrete walls. They say he knows your secrets before you do.",
      "CAVE MAN":
        "Blessed by the ancient feline spirits, he draws power from the oldest cat in existence. His connection to primal forces makes him unpredictable and dangerous.",
      LEGION:
        'Son of the legendary "ONE MAN ARMY", he inherited his father\'s tactical genius and fighting prowess. His strategic mind can turn any battle in his favor.',
      "MR.A":
        "A mysterious figure whose true identity remains hidden. His intellectual capabilities are matched only by his ruthless efficiency in eliminating threats.",
      Calamitos:
        "The living embodiment of disaster itself. Wherever he goes, chaos follows. Some say he doesn't cause calamities - he IS the calamity.",
      FACELESS:
        "Without a soul, without mercy, without remorse. This entity moves through the world like a shadow, leaving only questions in his wake.",
      "D.O.G":
        "The Devourer of Gods has awakened from his eternal slumber. Ancient prophecies speak of his return, and now that time has come.",
      "SON OF GOD":
        "Divine blood flows through his veins. Though he appears humble, the power of creation and destruction lies dormant within him.",
      "OLDEST CAT":
        "Eternal, ancient, and infinitely wise. This creature has witnessed the rise and fall of civilizations, holding secrets that could reshape reality.",
      "The Beast":
        "The prophesied Beast of the Apocalypse. His awakening signals the end times, yet he remains surprisingly fond of belly rubs.",
      "The Doll":
        "Behind that charming face lies a complex web of emotions and hidden power. Never judge a book by its cover - or a doll by its smile.",

      // Пробужденные версии
      "AWOKEN PUG MAN":
        "The pug essence has completely overtaken his humanity. With newfound cosmic awareness, he can bend reality to his will and manipulate the very fabric of existence with a single bark.",
      "AWOKEN LISTENER":
        "He has transcended physical hearing, now perceiving the whispers of the universe itself. Past, present, and future conversations merge into a symphony of knowledge that guides his every move.",
      "AWOKEN CAVE MAN":
        "The ancient connection has fully merged with his being. He commands the primal energies of creation, with the oldest cat now serving as his spiritual guide between realms.",
      "AWOKEN LEGION":
        "He has achieved the impossible - surpassing his legendary father. Where once there was a man, now stands a force of nature, capable of confronting gods and reshaping battlefields with mere thoughts.",
      "AWOKEN MR.A":
        "The mask has shattered, revealing something beyond human comprehension. His intellect now operates on a level that can predict and manipulate events decades in advance.",
      "AWOKEN Calamitos":
        "No longer merely embodying calamity, he has become a nexus of cosmic catastrophe. Entire realities bend around him, reality itself struggling to contain his awakened essence.",
      "AWOKEN FACELESS":
        "The void where his soul should be has become a gateway to dimensions beyond understanding. In his awakened state, reality itself bends away from his touch.",
      "AWOKEN D.O.G":
        "The full might of the Devourer has been unleashed. Stars tremble in his presence, and gods themselves seek shelter as his true hunger awakens.",
      "AWOKEN SON OF GOD":
        "The divine blood now boils with unrestricted power. His awakened form channels energies that could unmake or remake existence on a whim.",
      "AWOKEN OLDEST CAT":
        "Time and space are merely toys to this being now. The awakened ancient one remembers the beginning of everything and glimpses its end with casual indifference.",
      "AWOKEN The Beast":
        "The Beast of Prophecy now fully manifests. The apocalypse walks on four paws, bringing judgment to the cosmos while still appreciating a good scratching behind the ears.",
      "AWOKEN The Doll":
        "The mask of innocence has fallen away. What remains is a perfect vessel channeling powers from beyond the veil, wrapped in an increasingly unsettling smile.",
    };

    // Выбираем лор в зависимости от персонажа
    const characterKey = character.title.replace(/["']/g, "");
    const loreText =
      loreTexts[characterKey] ||
      "This character holds many secrets that have yet to be uncovered...";

    // Формируем HTML для модального окна
    modalContent.innerHTML = `
    <button class="modal-close" onclick="closeCharacterModal()">&times;</button>
    <div class="modal-header">
      <img src="${character.imageUrl}" alt="${character.title}">
      <div class="modal-title-section">
        <h2>${character.title}</h2>
        <p>${character.description}</p>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-stats">
        <h3>Stats</h3>
        <ul>
          ${character.stats
            .map(
              (stat) =>
                `<li><span class="stat-name stat-${stat.name.toLowerCase()}">${
                  stat.name
                }</span> <span class="stat-value">${stat.value}</span></li>`
            )
            .join("")}
        </ul>
      </div>
      <div class="modal-lore">
        <h3>Lore</h3>
        <p>${loreText}</p>
      </div>
    </div>
  `;

    // Открываем модальное окно
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Блокируем скролл страницы
  };

  /**
   * Закрывает модальное окно
   */
  window.closeCharacterModal = function () {
    const modal = document.getElementById("character-modal");
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  // Закрытие модального окна при клике на фон
  document
    .getElementById("character-modal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeCharacterModal();
      }
    });

  // --- ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ УПРАВЛЕНИЯ КЕШЕМ ---

  /**
   * Принудительно очищает весь кеш сайта
   * Можно вызвать из консоли: forceClearCache()
   */
  window.forceClearCache = function () {
    clearSiteCache();
    localStorage.removeItem(CACHE_KEY);
    location.reload();
  };

  /**
   * Показывает текущую версию кеша
   * Можно вызвать из консоли: getCacheVersion()
   */
  window.getCacheVersion = function () {
    const stored = localStorage.getItem(CACHE_KEY);
    console.log(`Current cache version: ${CACHE_VERSION}`);
    console.log(`Stored cache version: ${stored || "none"}`);
    return { current: CACHE_VERSION, stored: stored ? parseInt(stored) : null };
  };

  // --- ПЕРВИЧНАЯ ЗАГРУЗКА ---
  renderCards(itemsData);

  // --- ОБРАБОТЧИК КНОПКИ AWAKE ---
  awakeButton.addEventListener("click", () => {
    console.log("AWAKE button clicked!");

    // Блокируем кнопку на время анимации
    awakeButton.disabled = true;

    // Блокируем скролл во время анимации
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // 1. ЗАПУСКАЕМ ПЛАВНУЮ ПРОКРУТКУ ВВЕРХ
    extremeScreenRise();

    // 2. После небольшой задержки запускаем вспышку
    setTimeout(() => {
      transitionOverlay.classList.add("is-flashing");
      console.log("Added is-flashing class");
    }, 800); // Даем время для прокрутки

    // 3. Добавляем классы анимации
    setTimeout(() => {
      document.body.classList.add("is-awakening");
      objectsContainer.classList.add("is-transitioning");
      console.log("Added animation classes");
    }, 900);

    // 4. Обрабатываем перевернутые карты
    const flippedCards = document.querySelectorAll(
      ".item-card-inner.is-flipped"
    );
    if (flippedCards.length > 0) {
      console.log(`Found ${flippedCards.length} flipped cards to reset`);

      // Шаг 1: Применяем класс медленного переворота
      flippedCards.forEach((card) => {
        card.classList.add("slow-flip-back");
      });

      // Шаг 2: Запускаем переворот с задержкой
      setTimeout(() => {
        flippedCards.forEach((card) => {
          card.classList.remove("is-flipped");
        });
      }, 1200); // Увеличили задержку для более плавного переворота
    }

    // 5. Меняем карты в момент максимальной белизны экрана
    const swapTime = 2000;
    setTimeout(() => {
      isAwakened = !isAwakened;
      const currentDataSet = isAwakened ? awokenItemsData : itemsData;
      renderCards(currentDataSet);
      objectsContainer.classList.toggle("is-awakened", isAwakened);
      document.body.classList.toggle("is-awakened", isAwakened);
      awakeButton.textContent = isAwakened ? "REVERT" : "AWAKE";
      console.log("Cards swapped, isAwakened:", isAwakened);
    }, swapTime);

    // 6. Убираем эффекты анимации
    setTimeout(() => {
      objectsContainer.classList.remove("is-transitioning");
      transitionOverlay.classList.remove("is-flashing");
      document.body.classList.remove("is-awakening");
      console.log("Animation effects removed");
    }, 2500);

    // 7. Восстанавливаем возможность скролла
    setTimeout(() => {
      awakeButton.disabled = false;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      console.log("Animation complete!");
    }, 2700);
  });

  // --- НОВАЯ ФУНКЦИЯ ДЛЯ ПЛАВНОГО ПОДЪЕМА ЭКРАНА К ВЕРХУ ---
  function extremeScreenRise() {
    // Плавно прокручиваем страницу к верху
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Создаем эффект "засасывания" страницы вверх
    const header = document.querySelector("header");
    const objects = document.querySelector(".objects");

    // Добавляем временные стили для анимации
    header.style.transform = "translateY(0)";
    objects.style.transform = "translateY(0)";

    // Принудительный reflow для применения стилей
    header.offsetHeight;

    // Запускаем анимацию движения вверх
    header.style.transition = "transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)";
    objects.style.transition = "transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)";

    header.style.transform = "translateY(-30px)";
    objects.style.transform = "translateY(-20px)";

    // Через указанные время удаляем временные стили
    setTimeout(() => {
      header.style.transition = "";
      objects.style.transition = "";
      header.style.transform = "";
      objects.style.transform = "";
    }, 1500);
  }
});
