const themes = [
  {
    name: "化妆品",
    bg: ["#ffe1df", "#f7edc5", "#d8f0ec"],
    items: [
      ["lipstick", "口红", 10, 15, 9, 17, "tube", "#d94f5f"],
      ["brush", "化妆刷", 25, 12, 12, 20, "brush", "#b87954"],
      ["compact", "粉饼", 43, 18, 14, 14, "round", "#f6c9d1"],
      ["palette", "眼影盘", 62, 13, 20, 14, "palette", "#a98bc7"],
      ["perfume", "香水", 76, 22, 12, 18, "bottle", "#7bc1c3"],
      ["mascara", "睫毛膏", 18, 42, 8, 20, "tube", "#222833"],
      ["cream", "面霜", 37, 45, 16, 14, "jar", "#f7f1e2"],
      ["sponge", "粉扑", 58, 43, 12, 12, "drop", "#f0ad9c"]
    ]
  },
  {
    name: "书本学习用具",
    bg: ["#dbe8f4", "#f7f4df", "#e2efd7"],
    items: [
      ["book", "课本", 8, 14, 20, 24, "book", "#3d78b8"],
      ["notebook", "笔记本", 32, 13, 18, 23, "book", "#f0b44e"],
      ["pencil", "铅笔", 57, 13, 8, 24, "pencil", "#f2cc4b"],
      ["ruler", "尺子", 70, 16, 22, 7, "ruler", "#7ec0a1"],
      ["eraser", "橡皮", 12, 48, 12, 9, "eraser", "#f3a5b5"],
      ["clips", "回形针", 30, 46, 13, 12, "clips", "#9ca6b3"],
      ["lamp", "台灯", 51, 42, 18, 22, "lamp", "#536a79"],
      ["calculator", "计算器", 75, 44, 14, 18, "calculator", "#405160"]
    ]
  },
  {
    name: "美工工具",
    bg: ["#f4d7bc", "#e8f1df", "#d7e6ee"],
    items: [
      ["scissors", "剪刀", 9, 15, 16, 18, "scissors", "#e05b50"],
      ["glue", "胶水", 29, 13, 10, 22, "bottle", "#f3d36b"],
      ["paint", "颜料", 45, 16, 20, 13, "palette", "#6eb4d8"],
      ["paper", "彩纸", 69, 13, 18, 24, "paper", "#df8fcc"],
      ["knife", "刻刀", 14, 47, 8, 22, "knife", "#67727c"],
      ["tape", "胶带", 33, 46, 13, 13, "round", "#f5f0d2"],
      ["marker", "马克笔", 55, 46, 8, 21, "marker", "#56a36f"],
      ["clips-art", "夹子", 75, 45, 14, 12, "clip", "#d9864c"]
    ]
  },
  {
    name: "医疗器具",
    bg: ["#dff3f1", "#f8f4e8", "#e8dff0"],
    items: [
      ["stethoscope", "听诊器", 8, 15, 20, 18, "stethoscope", "#44566a"],
      ["syringe", "注射器", 34, 15, 18, 10, "syringe", "#6bb8cf"],
      ["bandage", "绷带", 56, 13, 15, 15, "bandage", "#efe1c6"],
      ["thermo", "体温计", 76, 14, 8, 22, "thermo", "#e75d57"],
      ["pills", "药片", 12, 46, 16, 12, "pills", "#f5a7bf"],
      ["firstaid", "急救盒", 34, 43, 18, 16, "firstaid", "#e74d43"],
      ["mask", "口罩", 58, 46, 18, 12, "mask", "#8fd0da"],
      ["gloves", "手套", 79, 45, 13, 15, "gloves", "#f4f0c8"]
    ]
  },
  {
    name: "厨房餐具",
    bg: ["#fff0cf", "#dfeee9", "#efd9d2"],
    items: [
      ["plate", "盘子", 8, 13, 17, 17, "round", "#f7f3e8"],
      ["cup", "杯子", 30, 14, 12, 17, "cup", "#6ab0d4"],
      ["fork", "叉子", 49, 13, 8, 22, "fork", "#c0c7c9"],
      ["spoon", "勺子", 63, 13, 8, 22, "spoon", "#adb7bd"],
      ["pan", "煎锅", 76, 14, 20, 15, "pan", "#394550"],
      ["knife-kitchen", "餐刀", 15, 47, 8, 21, "knife", "#777d83"],
      ["bowl", "碗", 36, 45, 16, 13, "bowl", "#e89075"],
      ["spice", "调料瓶", 62, 43, 11, 19, "bottle", "#d9a047"]
    ]
  },
  {
    name: "衣柜配饰",
    bg: ["#eadff2", "#f4e8cc", "#ddeee5"],
    items: [
      ["shirt", "衬衫", 9, 12, 19, 21, "shirt", "#62a7d8"],
      ["pants", "裤子", 32, 13, 14, 24, "pants", "#375071"],
      ["hat", "帽子", 53, 15, 15, 12, "hat", "#e37c64"],
      ["shoes", "鞋子", 73, 17, 19, 12, "shoes", "#5a4236"],
      ["scarf", "围巾", 11, 48, 20, 9, "scarf", "#d7537c"],
      ["watch", "手表", 38, 45, 12, 14, "watch", "#222833"],
      ["bag", "包包", 58, 43, 16, 19, "bag", "#b97952"],
      ["socks", "袜子", 80, 45, 12, 16, "socks", "#f2f0dd"]
    ]
  },
  {
    name: "电子设备",
    bg: ["#d7e5ee", "#eef0d9", "#f2dddc"],
    items: [
      ["phone", "手机", 10, 13, 10, 21, "phone", "#27323a"],
      ["tablet", "平板", 27, 12, 18, 24, "tablet", "#3f5e70"],
      ["camera", "相机", 51, 15, 17, 14, "camera", "#2f3338"],
      ["headphones", "耳机", 73, 12, 18, 18, "headphones", "#e46d55"],
      ["mouse", "鼠标", 12, 47, 12, 17, "mouse", "#f3f0e4"],
      ["keyboard", "键盘", 31, 47, 23, 10, "keyboard", "#65747d"],
      ["charger", "充电器", 61, 43, 12, 18, "charger", "#ffffff"],
      ["gamepad", "手柄", 78, 46, 17, 12, "gamepad", "#5f8dca"]
    ]
  },
  {
    name: "旅行箱",
    bg: ["#f0dfc3", "#dbe9f0", "#e6ead4"],
    items: [
      ["passport", "护照", 9, 13, 14, 19, "book", "#295177"],
      ["ticket", "机票", 28, 15, 19, 10, "ticket", "#f5f2df"],
      ["sunglasses", "墨镜", 52, 16, 18, 10, "glasses", "#293137"],
      ["toothbrush", "牙刷", 75, 14, 8, 22, "brush", "#4ab0a2"],
      ["camera-travel", "相机", 9, 45, 18, 15, "camera", "#4a4d50"],
      ["shirt-travel", "T恤", 33, 43, 18, 21, "shirt", "#e79b4e"],
      ["bottle-travel", "水瓶", 58, 42, 12, 21, "bottle", "#75b7d0"],
      ["suitcase", "小包", 78, 42, 16, 18, "bag", "#9b6a50"]
    ]
  },
  {
    name: "儿童玩具",
    bg: ["#f7d8c9", "#ddebd8", "#d8e4f1"],
    items: [
      ["bear", "玩偶", 8, 12, 18, 22, "bear", "#b87a4c"],
      ["car", "小车", 32, 17, 19, 12, "car", "#dc5a4d"],
      ["blocks", "积木", 55, 13, 17, 17, "blocks", "#e0b74d"],
      ["ball", "皮球", 78, 14, 14, 14, "round", "#5ba7cf"],
      ["rocket", "火箭", 11, 45, 13, 23, "rocket", "#e4626f"],
      ["puzzle", "拼图", 33, 46, 15, 14, "puzzle", "#79b05f"],
      ["drum", "小鼓", 56, 46, 16, 14, "drum", "#d7904d"],
      ["kite", "风筝", 78, 44, 15, 18, "kite", "#a275c4"]
    ]
  },
  {
    name: "园艺工具",
    bg: ["#dcebd4", "#f2e5c7", "#d9e8e7"],
    items: [
      ["shovel", "铲子", 9, 13, 10, 24, "shovel", "#8d6b4b"],
      ["rake", "耙子", 27, 12, 13, 24, "rake", "#9a784e"],
      ["watering", "水壶", 46, 15, 19, 17, "watering", "#65a6bf"],
      ["pot", "花盆", 72, 16, 15, 16, "pot", "#b26845"],
      ["seed", "种子袋", 10, 48, 16, 14, "paper", "#e0c46b"],
      ["gloves-garden", "手套", 34, 45, 15, 17, "gloves", "#e8e1ba"],
      ["spray", "喷壶", 57, 43, 13, 20, "bottle", "#6bb887"],
      ["shears", "修枝剪", 78, 45, 17, 14, "scissors", "#556c5a"]
    ]
  }
];

const state = {
  level: 0,
  hints: 3,
  mistakes: 0,
  startTime: 0,
  elapsed: 0,
  timerId: 0,
  placed: new Set(),
  placedSlots: new Map(),
  dragging: null,
  z: 1,
  completed: new Set(),
  bestStars: loadBestStars(),
  discoveredSchemes: loadDiscoveredSchemes(),
  schemes: [],
  layout: { slots: [], items: new Map() },
  runSeed: 1
};

const stage = document.getElementById("stage");
const sceneLayer = document.getElementById("sceneLayer");
const slotsLayer = document.getElementById("slotsLayer");
const itemsLayer = document.getElementById("itemsLayer");
const levelTrack = document.getElementById("levelTrack");
const hintButton = document.getElementById("hintButton");
const restartButton = document.getElementById("restartButton");
const timerText = document.getElementById("timerText");
const mistakeText = document.getElementById("mistakeText");
const hintCount = document.getElementById("hintCount");
const schemeText = document.getElementById("schemeText");
const levelName = document.getElementById("levelName");
const progressText = document.getElementById("progressText");
const schemeRuleText = document.getElementById("schemeRuleText");
const toast = document.getElementById("toast");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const resultStars = document.getElementById("resultStars");
const modalText = document.getElementById("modalText");
const modalPrimary = document.getElementById("modalPrimary");
const modalSecondary = document.getElementById("modalSecondary");

function init() {
  renderLevelTrack();
  loadLevel(0);
  hintButton.addEventListener("click", useHint);
  restartButton.addEventListener("click", () => loadLevel(state.level));
  modalSecondary.addEventListener("click", () => {
    modal.hidden = true;
    loadLevel(state.level);
  });
  modalPrimary.addEventListener("click", () => {
    modal.hidden = true;
    if (state.placed.size === currentItems().length && state.level < themes.length - 1) {
      loadLevel(state.level + 1);
    } else {
      loadLevel(0);
    }
  });
}

function currentItems() {
  return themes[state.level].items;
}

function renderLevelTrack() {
  levelTrack.innerHTML = "";
  themes.forEach((theme, index) => {
    const button = document.createElement("button");
    button.className = "level-pill";
    button.type = "button";
    button.dataset.index = index;
    button.innerHTML = `<span class="level-index">${index + 1}</span><span>${theme.name}</span><span class="level-stars">${starMarkup(state.bestStars[index] || 0)}</span>`;
    button.addEventListener("click", () => loadLevel(index));
    levelTrack.appendChild(button);
  });
}

function loadLevel(index, keepProgress = false) {
  stopTimer();
  state.level = index;
  state.hints = 3;
  state.mistakes = 0;
  state.elapsed = 0;
  state.placed = new Set();
  state.placedSlots = new Map();
  state.dragging = null;
  state.z = 1;
  state.schemes = buildSchemes(currentItems());
  state.runSeed += 1;
  state.layout = generateLayout(currentItems(), state.runSeed + Math.floor(Math.random() * 100000));
  slotsLayer.innerHTML = "";
  itemsLayer.innerHTML = "";
  renderScene(index);
  stage.className = `stage scene-${sceneName(index)}`;
  const theme = themes[index];
  levelName.textContent = `第 ${index + 1} 关 · ${theme.name}`;
  schemeRuleText.textContent = schemeRuleDescription();
  currentItems().forEach((item, slotIndex) => createSlot(item, slotIndex));
  currentItems().forEach(createItem);
  updateHud();
  startTimer();
  if (!keepProgress) showToast(`${theme.name}：尝试发现 ${state.schemes.length} 种收纳方案`);
}

function createSlot(data, slotIndex) {
  const pos = state.layout.slots[slotIndex];
  const slot = document.createElement("div");
  slot.className = "slot";
  slot.dataset.index = slotIndex;
  slot.setAttribute("aria-label", `收纳位置 ${slotIndex + 1}`);
  setBox(slot, pos.x, pos.y, pos.w, pos.h);
  slotsLayer.appendChild(slot);
}

function createItem(data, index) {
  const [id, label, , , w, h, shape, color] = data;
  const item = document.createElement("div");
  const start = state.layout.items.get(id) || scatterPosition(index, w, h);
  item.className = "item";
  item.dataset.id = id;
  item.dataset.homeX = start.x;
  item.dataset.homeY = start.y;
  item.dataset.w = w;
  item.dataset.h = h;
  setBox(item, start.x, start.y, w, h);
  item.style.zIndex = state.z++;
  item.innerHTML = `${drawShape(shape, color)}<span class="item-label">${label}</span>`;
  item.addEventListener("pointerdown", beginDrag);
  itemsLayer.appendChild(item);
}

function setBox(el, x, y, w, h) {
  el.style.left = `${x}%`;
  el.style.top = `${y}%`;
  el.style.width = `${w}%`;
  el.style.height = `${h}%`;
}

function scatterPosition(index, w, h) {
  const row = Math.floor(index / 4);
  const col = index % 4;
  const jitter = (state.level * 13 + index * 17) % 9;
  return {
    x: Math.min(88 - w, 7 + col * 22 + jitter * 0.55),
    y: Math.min(84 - h, 70 + row * 9 - jitter * 0.3)
  };
}

function renderScene(levelIndex) {
  sceneLayer.className = `scene-layer scene-${sceneName(levelIndex)}`;
  sceneLayer.innerHTML = `
    <span class="scene-prop prop-a"></span>
    <span class="scene-prop prop-b"></span>
    <span class="scene-prop prop-c"></span>
  `;
}

function sceneName(levelIndex) {
  return [
    "vanity",
    "desk",
    "craft",
    "clinic",
    "kitchen",
    "closet",
    "tech",
    "travel",
    "toy",
    "garden"
  ][levelIndex] || "desk";
}

function buildSchemes(items) {
  const byAreaDesc = [...items].sort((a, b) => b[4] * b[5] - a[4] * a[5]);
  const byAreaAsc = [...items].sort((a, b) => a[4] * a[5] - b[4] * b[5]);
  const byColor = [...items].sort((a, b) => colorHue(a[7]) - colorHue(b[7]));
  return [
    { id: "size-desc", name: "由大到小", hint: "从左到右按物品大小由大到小", order: byAreaDesc.map(([id]) => id) },
    { id: "size-asc", name: "由小到大", hint: "从左到右按物品大小由小到大", order: byAreaAsc.map(([id]) => id) },
    { id: "color", name: "按颜色渐变", hint: "从左到右按颜色色相渐变", order: byColor.map(([id]) => id) }
  ];
}

function schemeRuleDescription() {
  return `可尝试：${state.schemes.map((scheme) => scheme.hint).join("；")}。`;
}

function colorHue(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return 0;
  let hue = 0;
  if (max === r) hue = ((g - b) / d) % 6;
  if (max === g) hue = (b - r) / d + 2;
  if (max === b) hue = (r - g) / d + 4;
  return (hue * 60 + 360) % 360;
}

function generateLayout(items, seed) {
  const rand = mulberry32(seed);
  const layout = { slots: [], items: new Map() };
  const itemBoxes = [];
  const shuffledItems = shuffle(items, rand);
  const slotCells = [
    { x: 12, y: 11, w: 15, h: 21 },
    { x: 29, y: 11, w: 15, h: 21 },
    { x: 46, y: 11, w: 15, h: 21 },
    { x: 63, y: 11, w: 15, h: 21 },
    { x: 12, y: 37, w: 15, h: 21 },
    { x: 29, y: 37, w: 15, h: 21 },
    { x: 46, y: 37, w: 15, h: 21 },
    { x: 63, y: 37, w: 15, h: 21 }
  ];
  const rowShift = rand() * 5 - 2.5;
  slotCells.forEach((cell) => {
    layout.slots.push({
      x: round1(cell.x + rowShift + rand() * 1.8 - 0.9),
      y: round1(cell.y + rand() * 1.6 - 0.8),
      w: cell.w,
      h: cell.h
    });
  });
  shuffledItems.forEach((data, index) => {
    const [id, , , , w, h] = data;
    const pos = findOpenPosition(itemBoxes, w, h, {
      minX: 5,
      maxX: 92 - w,
      minY: 67,
      maxY: 92 - h,
      attempts: 28,
      rand,
      loose: true,
      fallback: {
        x: 7 + (index % 4) * 22 + rand() * 7,
        y: 70 + Math.floor(index / 4) * 9 + rand() * 5
      }
    });
    itemBoxes.push({ ...pos, w, h });
    layout.items.set(id, pos);
  });
  return layout;
}

function findOpenPosition(boxes, w, h, options) {
  for (let i = 0; i < options.attempts; i++) {
    const pos = {
      x: round1(options.minX + options.rand() * Math.max(1, options.maxX - options.minX)),
      y: round1(options.minY + options.rand() * Math.max(1, options.maxY - options.minY))
    };
    const box = { ...pos, w, h };
    if (!boxes.some((other) => overlaps(box, other, options.loose ? -5 : 2))) return pos;
  }
  return {
    x: clamp(round1(options.fallback.x), options.minX, options.maxX),
    y: clamp(round1(options.fallback.y), options.minY, options.maxY)
  };
}

function overlaps(a, b, padding = 0) {
  return !(
    a.x + a.w + padding < b.x ||
    b.x + b.w + padding < a.x ||
    a.y + a.h + padding < b.y ||
    b.y + b.h + padding < a.y
  );
}

function shuffle(items, rand) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function beginDrag(event) {
  const item = event.currentTarget;
  if (item.classList.contains("locked")) return;
  const rect = item.getBoundingClientRect();
  state.dragging = {
    item,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top
  };
  item.classList.add("dragging");
  item.style.zIndex = state.z++;
  item.setPointerCapture(event.pointerId);
  item.addEventListener("pointermove", moveDrag);
  item.addEventListener("pointerup", endDrag, { once: true });
  item.addEventListener("pointercancel", endDrag, { once: true });
}

function moveDrag(event) {
  if (!state.dragging) return;
  const { item, offsetX, offsetY } = state.dragging;
  const area = stage.getBoundingClientRect();
  const w = item.offsetWidth;
  const h = item.offsetHeight;
  const left = clamp(event.clientX - area.left - offsetX, 0, area.width - w);
  const top = clamp(event.clientY - area.top - offsetY, 0, area.height - h);
  item.style.left = `${(left / area.width) * 100}%`;
  item.style.top = `${(top / area.height) * 100}%`;
}

function endDrag(event) {
  if (!state.dragging) return;
  const item = state.dragging.item;
  item.classList.remove("dragging");
  item.removeEventListener("pointermove", moveDrag);
  try {
    item.releasePointerCapture(event.pointerId);
  } catch {
    /* Pointer may already be released on touch cancel. */
  }
  const slot = findSlotAt(item);
  if (slot && canPlace(item.dataset.id, Number(slot.dataset.index))) {
    snapToSlot(item, slot);
  } else {
    wrongDrop(item);
  }
  state.dragging = null;
}

function isInside(item, slot) {
  const a = item.getBoundingClientRect();
  const b = slot.getBoundingClientRect();
  const ax = a.left + a.width / 2;
  const ay = a.top + a.height / 2;
  return ax > b.left && ax < b.right && ay > b.top && ay < b.bottom;
}

function findSlotAt(item) {
  const a = item.getBoundingClientRect();
  const ax = a.left + a.width / 2;
  const ay = a.top + a.height / 2;
  return [...document.querySelectorAll(".slot")].find((slot) => {
    if (slot.classList.contains("correct")) return false;
    const b = slot.getBoundingClientRect();
    return ax > b.left && ax < b.right && ay > b.top && ay < b.bottom;
  });
}

function canPlace(itemId, slotIndex) {
  if (state.placedSlots.has(slotIndex) || state.placed.has(itemId)) return false;
  const trial = new Map(state.placedSlots);
  trial.set(slotIndex, itemId);
  return matchingSchemes(trial).length > 0;
}

function matchingSchemes(placements = state.placedSlots) {
  return state.schemes.filter((scheme) =>
    [...placements.entries()].every(([slotIndex, itemId]) => scheme.order[slotIndex] === itemId)
  );
}

function snapToSlot(item, slot) {
  const id = item.dataset.id;
  const slotIndex = Number(slot.dataset.index);
  state.placed.add(id);
  state.placedSlots.set(slotIndex, id);
  item.classList.add("locked");
  slot.classList.add("correct");
  centerItemInSlot(item, slot);
  item.style.transform = "scale(0.96)";
  item.style.zIndex = "6";
  updateHud();
  showToast("归位成功");
  if (state.placed.size === currentItems().length) {
    stopTimer();
    const completedScheme = matchingSchemes()[0];
    if (completedScheme) {
      markSchemeDiscovered(completedScheme.id);
    }
    const stars = calculateStars(state.elapsed, state.mistakes);
    state.bestStars[state.level] = Math.max(state.bestStars[state.level] || 0, stars);
    saveBestStars();
    state.completed.add(state.level);
    renderLevelStates();
    setTimeout(() => showWin(stars, completedScheme), 450);
  }
}

function centerItemInSlot(item, slot) {
  const slotLeft = parseFloat(slot.style.left);
  const slotTop = parseFloat(slot.style.top);
  const slotW = parseFloat(slot.style.width);
  const slotH = parseFloat(slot.style.height);
  const itemW = parseFloat(item.dataset.w);
  const itemH = parseFloat(item.dataset.h);
  item.style.left = `${round1(slotLeft + (slotW - itemW) / 2)}%`;
  item.style.top = `${round1(slotTop + (slotH - itemH) / 2)}%`;
  item.style.width = `${itemW}%`;
  item.style.height = `${itemH}%`;
}

function wrongDrop(item) {
  state.mistakes += 1;
  updateHud();
  showToast("这个位置不符合当前可行方案，可以继续试");
  gravityDrop(item);
}

function gravityDrop(item) {
  const stageRect = stage.getBoundingClientRect();
  const top = parseFloat(item.style.top);
  const h = parseFloat(item.dataset.h);
  const floor = Math.max(0, 95 - h);
  item.animate(
    [
      { transform: "translateY(0) rotate(0deg)" },
      { transform: "translateY(18px) rotate(4deg)", offset: 0.45 },
      { transform: "translateY(0) rotate(-2deg)" }
    ],
    { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" }
  );
  item.style.top = `${Math.min(floor, Math.max(top + 12, floor - 9 - Math.random() * 8))}%`;
  item.style.left = `${clamp(parseFloat(item.style.left) + (Math.random() * 10 - 5), 0, 92)}%`;
  if (stageRect.width < 520) item.style.left = `${clamp(parseFloat(item.style.left), 0, 86)}%`;
}

function useHint() {
  if (state.hints <= 0) {
    showToast("本关提示用完了");
    return;
  }
  const scheme = preferredHintScheme();
  const nextIndex = scheme.order.findIndex((id, index) => !state.placedSlots.has(index) && !state.placed.has(id));
  if (nextIndex < 0) return;
  const nextId = scheme.order[nextIndex];
  const next = currentItems().find(([id]) => id === nextId);
  state.hints -= 1;
  updateHud();
  const slot = document.querySelector(`.slot[data-index="${nextIndex}"]`);
  const item = document.querySelector(`.item[data-id="${nextId}"]`);
  slot.classList.remove("match-flash");
  item.classList.remove("match-flash");
  void slot.offsetWidth;
  slot.classList.add("match-flash");
  item.classList.add("match-flash");
  showToast(`提示：${scheme.name}，下一格放「${next[1]}」`);
}

function preferredHintScheme() {
  const discovered = discoveredForLevel();
  return (
    matchingSchemes().find((scheme) => !discovered.has(scheme.id)) ||
    matchingSchemes()[0] ||
    state.schemes[0]
  );
}

function updateHud() {
  timerText.textContent = formatTime(state.elapsed);
  mistakeText.textContent = state.mistakes;
  hintCount.textContent = state.hints;
  progressText.textContent = `${state.placed.size} / ${currentItems().length}`;
  const found = discoveredForLevel().size;
  schemeText.textContent = `${found}/${state.schemes.length}`;
  renderLevelStates();
}

function renderLevelStates() {
  document.querySelectorAll(".level-pill").forEach((button) => {
    const index = Number(button.dataset.index);
    const stars = button.querySelector(".level-stars");
    if (stars) stars.innerHTML = starMarkup(state.bestStars[index] || 0);
    button.classList.toggle("active", index === state.level);
    button.classList.toggle("done", state.completed.has(index));
  });
}

function showWin(stars, scheme) {
  const last = state.level === themes.length - 1;
  modalTitle.textContent = last ? "全部收纳完成" : "本关完成";
  resultStars.hidden = false;
  resultStars.innerHTML = starMarkup(stars);
  const best = state.bestStars[state.level] || stars;
  const found = discoveredForLevel().size;
  const schemeName = scheme ? `完成方案：${scheme.name}。` : "";
  modalText.textContent = `${schemeName}已发现 ${found}/${state.schemes.length} 种方案。用时 ${formatTime(state.elapsed)}，错误 ${state.mistakes} 次，本关最高 ${best} 星。${last ? "10 个主题都整整齐齐了。" : "可以继续下一关，也可以重玩探索其他方案。"}`;
  modalPrimary.textContent = last ? "从头再玩" : "下一关";
  modalSecondary.textContent = "重玩刷星";
  modal.hidden = false;
}

function startTimer() {
  state.startTime = Date.now();
  timerText.textContent = "00:00";
  state.timerId = window.setInterval(() => {
    state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    timerText.textContent = formatTime(state.elapsed);
  }, 250);
}

function stopTimer() {
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = 0;
  if (state.startTime) state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
}

function calculateStars(seconds, mistakes) {
  let stars = 3;
  if (seconds > 45) stars -= 1;
  if (seconds > 75) stars -= 1;
  stars -= mistakes;
  return clamp(stars, 1, 3);
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, "0");
  const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

function starMarkup(count) {
  return [0, 1, 2]
    .map((index) => `<span class="${index < count ? "earned" : ""}">★</span>`)
    .join("");
}

function loadBestStars() {
  try {
    const saved = JSON.parse(localStorage.getItem("tidy-game-best-stars") || "[]");
    return Array.from({ length: themes.length }, (_, index) => Number(saved[index]) || 0);
  } catch {
    return Array.from({ length: themes.length }, () => 0);
  }
}

function saveBestStars() {
  try {
    localStorage.setItem("tidy-game-best-stars", JSON.stringify(state.bestStars));
  } catch {
    /* Best stars remain in memory if storage is unavailable. */
  }
}

function discoveredForLevel() {
  const key = String(state.level);
  if (!state.discoveredSchemes[key]) state.discoveredSchemes[key] = [];
  return new Set(state.discoveredSchemes[key]);
}

function markSchemeDiscovered(schemeId) {
  const key = String(state.level);
  const found = discoveredForLevel();
  found.add(schemeId);
  state.discoveredSchemes[key] = [...found];
  saveDiscoveredSchemes();
}

function loadDiscoveredSchemes() {
  try {
    return JSON.parse(localStorage.getItem("tidy-game-discovered-schemes") || "{}");
  } catch {
    return {};
  }
}

function saveDiscoveredSchemes() {
  try {
    localStorage.setItem("tidy-game-discovered-schemes", JSON.stringify(state.discoveredSchemes));
  } catch {
    /* Scheme discovery remains in memory if storage is unavailable. */
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1400);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function drawShape(shape, color) {
  const dark = shade(color, -24);
  const light = shade(color, 28);
  const common = `stroke="${dark}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
  const fill = `fill="${color}"`;
  const pale = `fill="${light}"`;
  const shapes = {
    tube: `<rect x="34" y="12" width="32" height="76" rx="10" ${fill} ${common}/><rect x="39" y="4" width="22" height="18" rx="5" fill="${dark}"/>`,
    brush: `<path d="M48 28 L72 82" ${common}/><path d="M38 10 C52 2 70 10 68 27 C55 35 42 30 38 10Z" fill="${light}" ${common}/>`,
    round: `<circle cx="50" cy="50" r="34" ${fill} ${common}/><circle cx="50" cy="50" r="19" fill="rgba(255,255,255,.32)" ${common}/>`,
    palette: `<path d="M18 52 C18 28 39 14 61 18 C82 22 94 43 82 62 C75 73 59 62 53 75 C47 88 18 78 18 52Z" ${fill} ${common}/><circle cx="42" cy="39" r="7" fill="#e65f4f"/><circle cx="60" cy="37" r="7" fill="#f2b84b"/><circle cx="54" cy="58" r="7" fill="#2d9a8a"/>`,
    bottle: `<rect x="36" y="25" width="28" height="62" rx="10" ${fill} ${common}/><rect x="41" y="9" width="18" height="20" rx="4" ${pale} ${common}/>`,
    jar: `<rect x="25" y="32" width="50" height="48" rx="14" ${fill} ${common}/><rect x="31" y="21" width="38" height="15" rx="6" fill="${dark}"/>`,
    drop: `<path d="M50 12 C64 31 76 44 76 60 C76 78 63 90 50 90 C37 90 24 78 24 60 C24 44 36 31 50 12Z" ${fill} ${common}/>`,
    book: `<path d="M20 14 H73 C79 14 84 19 84 25 V86 H28 C22 86 17 81 17 75 V20 C17 17 18 15 20 14Z" ${fill} ${common}/><path d="M30 14 V86" ${common}/><path d="M39 30 H70 M39 44 H70" ${common}/>`,
    pencil: `<path d="M44 11 H60 V74 L52 90 L44 74Z" ${fill} ${common}/><path d="M44 20 H60" ${common}/><path d="M44 74 H60" ${common}/>`,
    ruler: `<rect x="9" y="36" width="82" height="28" rx="5" ${fill} ${common}/><path d="M21 37 V49 M34 37 V55 M47 37 V49 M60 37 V55 M73 37 V49" ${common}/>`,
    eraser: `<path d="M22 36 H69 L82 50 L67 68 H18 L10 53Z" ${fill} ${common}/><path d="M25 36 L67 68" ${common}/>`,
    clips: `<path d="M36 71 V30 C36 18 55 18 55 30 V72 C55 88 26 88 26 72 V29" fill="none" ${common}/><path d="M56 34 C72 34 72 51 72 51 V70" fill="none" ${common}/>`,
    lamp: `<path d="M35 18 H70 L62 45 H25Z" ${fill} ${common}/><path d="M49 45 V78 M31 84 H69" ${common}/>`,
    calculator: `<rect x="24" y="10" width="52" height="80" rx="10" ${fill} ${common}/><rect x="32" y="20" width="36" height="16" rx="3" ${pale}/><path d="M35 49 H38 M50 49 H53 M65 49 H68 M35 64 H38 M50 64 H53 M65 64 H68" ${common}/>`,
    scissors: `<circle cx="31" cy="70" r="13" fill="none" ${common}/><circle cx="56" cy="70" r="13" fill="none" ${common}/><path d="M42 61 L75 20 M48 61 L23 19" ${common}/>`,
    paper: `<path d="M25 12 H64 L80 28 V86 H25Z" ${fill} ${common}/><path d="M64 12 V29 H80" ${common}/>`,
    knife: `<path d="M48 9 C62 30 59 49 49 64 L39 59 C48 43 45 27 48 9Z" fill="${light}" ${common}/><path d="M37 58 L65 83" ${common}/>`,
    marker: `<rect x="37" y="11" width="26" height="72" rx="7" ${fill} ${common}/><path d="M37 24 H63 M37 71 H63" ${common}/>`,
    clip: `<rect x="22" y="33" width="56" height="34" rx="9" ${fill} ${common}/><path d="M36 33 V22 H64 V33" ${common}/>`,
    stethoscope: `<path d="M26 17 V42 C26 61 50 61 50 42 V17 M50 56 C50 75 78 74 78 54" fill="none" ${common}/><circle cx="79" cy="50" r="8" ${fill} ${common}/>`,
    syringe: `<path d="M16 58 L58 16 M49 12 L64 27 M24 51 L39 66 M60 18 L82 8" ${common}/><rect x="27" y="31" width="36" height="18" rx="4" transform="rotate(-45 45 40)" ${pale} ${common}/>`,
    bandage: `<rect x="15" y="36" width="70" height="28" rx="12" ${fill} ${common}/><rect x="40" y="36" width="20" height="28" rx="4" fill="#d8c9ad"/>`,
    thermo: `<path d="M46 14 V62" ${common}/><circle cx="46" cy="72" r="14" ${fill} ${common}/><rect x="40" y="13" width="12" height="60" rx="6" fill="${light}" ${common}/>`,
    pills: `<path d="M22 50 C22 34 40 26 52 38 L62 48 C74 60 66 78 50 78 C34 78 22 66 22 50Z" ${fill} ${common}/><path d="M41 31 L69 59" ${common}/>`,
    firstaid: `<rect x="18" y="26" width="64" height="56" rx="10" ${fill} ${common}/><path d="M37 26 V18 H63 V26 M50 39 V68 M36 54 H64" ${common} stroke="#fff"/>`,
    mask: `<path d="M19 38 C35 25 65 25 81 38 V63 C64 76 36 76 19 63Z" ${fill} ${common}/><path d="M31 45 H69 M31 55 H69" ${common}/>`,
    gloves: `<path d="M30 78 C23 63 25 43 34 27 C39 18 48 23 45 35 L43 46 L53 20 C57 12 67 16 65 26 L61 48 L69 31 C73 23 83 27 80 37 L70 71 C65 88 40 90 30 78Z" ${fill} ${common}/>`,
    cup: `<path d="M30 24 H66 L61 82 H35Z" ${fill} ${common}/><path d="M66 37 H78 C83 48 76 60 63 58" fill="none" ${common}/>`,
    fork: `<path d="M50 13 V87 M38 13 V37 M50 13 V37 M62 13 V37 M38 37 C38 47 62 47 62 37" ${common}/>`,
    spoon: `<ellipse cx="50" cy="28" rx="16" ry="22" ${fill} ${common}/><path d="M50 50 V88" ${common}/>`,
    pan: `<circle cx="39" cy="51" r="25" ${fill} ${common}/><path d="M61 51 H91" ${common}/>`,
    bowl: `<path d="M20 42 H80 C76 70 64 82 50 82 C36 82 24 70 20 42Z" ${fill} ${common}/><path d="M17 42 H83" ${common}/>`,
    shirt: `<path d="M35 18 L50 29 L65 18 L86 32 L75 48 L67 42 V86 H33 V42 L25 48 L14 32Z" ${fill} ${common}/>`,
    pants: `<path d="M32 14 H68 L73 87 H55 L50 45 L45 87 H27Z" ${fill} ${common}/>`,
    hat: `<path d="M24 57 C28 24 72 24 76 57Z" ${fill} ${common}/><path d="M13 61 H87" ${common}/>`,
    shoes: `<path d="M17 62 C36 62 42 48 53 48 C63 49 71 59 87 61 V72 H17Z" ${fill} ${common}/><path d="M45 55 H66" ${common}/>`,
    scarf: `<path d="M13 44 H82 V60 H13Z" ${fill} ${common}/><path d="M62 60 L78 86 M72 60 L90 84" ${common}/>`,
    watch: `<circle cx="50" cy="50" r="20" ${fill} ${common}/><path d="M42 10 H58 L56 30 H44Z M44 70 H56 L58 90 H42Z" ${pale} ${common}/>`,
    bag: `<rect x="23" y="34" width="54" height="52" rx="10" ${fill} ${common}/><path d="M36 34 C36 14 64 14 64 34" fill="none" ${common}/>`,
    socks: `<path d="M36 12 H58 V52 C68 54 78 62 78 73 C66 83 42 80 32 70 C39 61 36 47 36 12Z" ${fill} ${common}/>`,
    phone: `<rect x="32" y="9" width="36" height="82" rx="10" ${fill} ${common}/><circle cx="50" cy="80" r="3" fill="${light}"/>`,
    tablet: `<rect x="21" y="10" width="58" height="80" rx="10" ${fill} ${common}/><rect x="29" y="20" width="42" height="60" rx="4" fill="${light}"/>`,
    camera: `<rect x="17" y="30" width="66" height="47" rx="10" ${fill} ${common}/><circle cx="52" cy="54" r="15" fill="${light}" ${common}/><path d="M31 30 L38 20 H57 L64 30" ${common}/>`,
    headphones: `<path d="M22 52 C22 15 78 15 78 52" fill="none" ${common}/><rect x="14" y="48" width="18" height="30" rx="8" ${fill} ${common}/><rect x="68" y="48" width="18" height="30" rx="8" ${fill} ${common}/>`,
    mouse: `<path d="M31 21 C47 8 69 21 70 48 C71 76 58 88 48 88 C37 88 27 76 28 48 C28 35 29 27 31 21Z" ${fill} ${common}/><path d="M50 18 V38" ${common}/>`,
    keyboard: `<rect x="10" y="28" width="80" height="44" rx="8" ${fill} ${common}/><path d="M22 43 H25 M36 43 H39 M50 43 H53 M64 43 H67 M78 43 H81 M25 58 H68" ${common}/>`,
    charger: `<rect x="31" y="19" width="38" height="42" rx="9" ${fill} ${common}/><path d="M42 19 V7 M58 19 V7 M50 61 V89" ${common}/>`,
    gamepad: `<path d="M21 42 C28 30 72 30 79 42 L88 66 C92 78 78 86 68 72 H32 C22 86 8 78 12 66Z" ${fill} ${common}/><path d="M30 55 H44 M37 48 V62 M63 52 H64 M75 60 H76" ${common}/>`,
    ticket: `<path d="M14 35 H86 V65 H14 C23 56 23 44 14 35Z" ${fill} ${common}/><path d="M65 35 V65 M31 46 H55 M31 55 H51" ${common}/>`,
    glasses: `<circle cx="33" cy="53" r="17" ${fill} ${common}/><circle cx="67" cy="53" r="17" ${fill} ${common}/><path d="M50 53 H50" ${common}/>`,
    bear: `<circle cx="34" cy="29" r="10" ${fill} ${common}/><circle cx="66" cy="29" r="10" ${fill} ${common}/><circle cx="50" cy="49" r="27" ${fill} ${common}/><circle cx="50" cy="58" r="10" ${pale}/><path d="M43 45 H44 M56 45 H57 M47 57 Q50 61 53 57" ${common}/>`,
    car: `<path d="M15 57 L25 39 H67 L82 57 V71 H15Z" ${fill} ${common}/><circle cx="31" cy="72" r="8" fill="${dark}"/><circle cx="67" cy="72" r="8" fill="${dark}"/>`,
    blocks: `<rect x="18" y="18" width="28" height="28" ${fill} ${common}/><rect x="46" y="18" width="28" height="28" fill="${light}" ${common}/><rect x="32" y="46" width="28" height="28" fill="#e65f4f" ${common}/>`,
    rocket: `<path d="M50 8 C72 32 66 65 50 83 C34 65 28 32 50 8Z" ${fill} ${common}/><circle cx="50" cy="38" r="9" ${pale} ${common}/><path d="M38 70 L25 86 M62 70 L75 86" ${common}/>`,
    puzzle: `<path d="M20 24 H45 C43 12 61 12 59 24 H80 V47 C68 45 68 63 80 61 V80 H20 V61 C32 63 32 45 20 47Z" ${fill} ${common}/>`,
    drum: `<ellipse cx="50" cy="30" rx="29" ry="12" ${fill} ${common}/><path d="M21 30 V70 C21 86 79 86 79 70 V30" ${fill} ${common}/><ellipse cx="50" cy="70" rx="29" ry="12" fill="${light}" ${common}/>`,
    kite: `<path d="M50 10 L82 45 L50 90 L18 45Z" ${fill} ${common}/><path d="M50 10 V90 M18 45 H82" ${common}/>`,
    shovel: `<path d="M50 9 V58" ${common}/><path d="M32 58 C35 87 65 87 68 58Z" ${fill} ${common}/>`,
    rake: `<path d="M50 11 V88 M25 35 H75 M28 35 V52 M39 35 V52 M50 35 V52 M61 35 V52 M72 35 V52" ${common}/>`,
    watering: `<path d="M22 43 C29 22 68 22 76 43 V78 H22Z" ${fill} ${common}/><path d="M76 47 C91 43 92 61 76 61 M24 45 L8 35" fill="none" ${common}/>`,
    pot: `<path d="M24 34 H76 L68 84 H32Z" ${fill} ${common}/><path d="M20 34 H80 M39 28 C39 14 61 14 61 28" ${common}/>`,
  };
  return `<svg viewBox="0 0 100 100" aria-hidden="true">${shapes[shape] || shapes.round}</svg>`;
}

function shade(hex, amount) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  const r = clamp((num >> 16) + amount, 0, 255);
  const g = clamp(((num >> 8) & 255) + amount, 0, 255);
  const b = clamp((num & 255) + amount, 0, 255);
  return `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}

init();
