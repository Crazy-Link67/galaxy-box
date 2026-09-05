# 🤖 AGENTS.md — Contributor & AI Agent Guidelines

Welcome to the **GALAXYBOX** codebase. This repository contains the source code for the high-performance, zero-dependency 2D god sandbox simulator.

All AI agents, pair programmers, and autonomous assistants operating within this repository **MUST** adhere to the instructions and protocols outlined below.

---

## 📌 Critical Repository Rules

### 1. 💾 Commit After Every Task
* **MANDATORY**: Create a clean, well-described Git commit immediately after completing every task, feature, or bugfix.
* Use clear and conventional commit messages summarizing changes:
  ```bash
  git add .
  git commit -m "feat(weapons): add modular weapon equipping and projectile visuals"
  ```
* Verify `git status` shows a clean working tree before concluding the turn.

### 2. 🚫 DO NOT PUSH TO REMOTE
* **STRICT RULE**: **NEVER** run `git push` under any circumstances unless explicitly commanded by the user with exact instructions.
* All commits must remain local to this repository.

### 3. ⚡ Zero External Dependencies
* **NO NPM / NO NODE PACKAGES / NO BUNDLERS**:
  * Do **NOT** install npm packages, `package.json`, webpack, vite, babel, or external libraries.
  * The entire game must remain 100% vanilla browser-executable.
  * Double-clicking `index.html` or executing `Start-Process index.html` must instantly boot the game in any modern web browser.
* **Pure Web Audio API**:
  * All sound effects must be synthesized procedurally in `js/audio.js` using oscillators, gain nodes, and biquad filters. Zero audio asset files (`.mp3`, `.wav`) are permitted.

---

## 🏛️ Codebase Architecture

```
galaxy-box/
├── index.html          # HTML5 Canvas container, HUD overlays, modals, and dock tabs
├── style.css           # Retro pixel aesthetic, glassmorphism UI, and cinematic mode
├── README.md           # User documentation, game features, and manuals
├── AGENTS.md           # AI Agent guidelines and development protocols (THIS FILE)
└── js/
    ├── audio.js        # Procedural Web Audio API sound effect synthesizer
    ├── particles.js    # Zero-allocation pooled particle engine (fire, smoke, sparks, stardust)
    ├── world.js        # Cellular automata tile grid, terrain generation, and fluid physics
    ├── entities.js     # Entity Component System, species AI, kingdoms, weapons, and combat
    ├── disasters.js    # Disasters, weather storms, airstrikes, forcefields, and apocalypse powers
    ├── renderer.js     # High-density 2D canvas pixel renderer, edge lighting, and sprites
    ├── ui.js           # Category menus, tool dispatcher, inspector, creator, and diplomacy ledger
    └── game.js         # Main loop, input dispatcher, possession controller, and save system
```

### Key Modules & Responsibilities:
1. **`js/world.js`**:
   - Stores the grid: `tiles`, `fire`, `variation` flat typed arrays.
   - Simulates fluids (`WATER`, `LAVA`, `ACID`), plant growth, fire propagation, and terrain generation algorithms.
   - Dynamic world sizing via `World.resize(width, height)`.

2. **`js/entities.js`**:
   - `Entity`: Base class for humans, elves, orcs, dwarves, animals, monsters, titans, vehicles, mechs, and wizards.
   - `EntityManager`: Spawns, updates, manages kingdom diplomacy, equips weapons, and handles projectiles.
   - When adding new species or vehicles, always define stats in `SPECIES_DATA` and implement primary and special abilities.

3. **`js/disasters.js`**:
   - Houses standalone disaster objects: `NukeMissile`, `IonCannon`, `DimensionRift`, `Forcefield`, `Tornado`, `Volcano`, `Meteor`, `BlackHole`, `UFO`.
   - Manages global weather systems (`rain`, `snow`, `acid`, `sandstorm`, `clone_rain`).

4. **`js/renderer.js`**:
   - Renders cellular terrain at native pixel resolution using an offscreen canvas ImageData buffer.
   - Directional top-edge shading, shoreline wave foam highlights, and cosmic star sparkles.
   - Multi-pixel sprites for humanoid races, winged dragons, mechs, and beasts.
   - Displays equipped weapons, overclock electric auras, and direct control banners (`[WASD / SPACE / Q]`).

5. **`js/ui.js`**:
   - Defines `CATEGORIES` (6 core categories) and `CATEGORY_TOOLS`.
   - Connects modal dialogs (`modal-generator`, `modal-creator`, `modal-diplomacy`, `modal-save`, `modal-settings`, `modal-codex`).

6. **`js/game.js`**:
   - Orchestrates the 60 FPS tick loop, camera transforms, time scale (0x, 0.5x, 1x, 2x, 5x, 10x), and tool dispatching in `applyTool()`.
   - Handles creature possession mode via `possess(entity)` and `unpossess()`.

---

## 🎮 Direct Control ("Possess Mode") Standards

Any controllable creature, titan, monster, or vehicle must support:
1. **Movement**: Responsive `WASD` / arrow key navigation.
2. **Primary Ability (`usePrimaryAbility`)**: Mapped to **Left-Click** and **Spacebar**.
3. **Special Ability (`useSpecialAbility`)**: Mapped to **Right-Click**, **`Q`**, or **`E`**.
4. **On-Screen HUD Banner**: Rendered in `js/renderer.js` above the entity with appropriate prompt (e.g. `DRAGON [WASD / SPACE / Q]`).

---

## ✅ Verification Protocol Before Committing

Before committing changes:
1. **Bracket & Syntax Balance Check**:
   - Ensure all open brackets `{` match closed brackets `}` across all `.js` files.
2. **Browser Execution Test**:
   - Verify the game launches without syntax errors or unhandled exceptions:
     ```powershell
     Start-Process index.html
     ```
3. **Check Git Status**:
   - Ensure only intentional files are modified.
4. **Commit Locally**:
   ```powershell
   git add .
   git commit -m "<concise description of task>"
   ```
   *Remember: Never push to remote.*
