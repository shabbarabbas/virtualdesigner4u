---
title: Structuring a Phaser 3 Game So It Survives Six Months
description: Most Phaser projects become unmaintainable around week eight. The fix is architectural, and it costs about a day to set up properly at the start.
publishDate: 2025-03-27
category: Game Development
tags: [Phaser, TypeScript, Architecture, Games]
cover: /images/blog/phaser-architecture.svg
coverAlt: Diagram showing scene flow in a Phaser game architecture
featured: true
---

Phaser 3 is an excellent framework with a genuine structural trap: it is entirely possible to
build a working game inside a single scene file, and for the first few weeks that feels
productive.

Then you add a second level, a pause menu, a save system, and suddenly you have a 2,000-line
file where changing the jump height breaks the score display. I have been called in to rescue
several projects at exactly this stage.

The fix is architectural and takes about a day to set up at the start of a project.

## Separate your scenes properly

Every game needs at least four:

```ts
// main.ts
new Phaser.Game({
  type: Phaser.AUTO,
  scene: [BootScene, PreloadScene, MenuScene, GameScene, UIScene],
});
```

- **Boot** — configuration and the handful of assets needed for the loading screen itself
- **Preload** — everything else, with a real progress bar
- **Menu** — title screen and options
- **Game** — actual gameplay, and nothing else
- **UI** — HUD running *in parallel* with the game scene

That last one is the detail most projects miss. Running your HUD as a separate scene launched
alongside gameplay means pausing the game does not freeze the interface, and the HUD survives
level transitions without being rebuilt.

```ts
// Inside GameScene.create()
this.scene.launch('UIScene');
```

## Put state outside the scenes

Scenes get destroyed and recreated. Anything stored on a scene instance disappears with it,
which is why so many Phaser games lose the player's score between levels.

Keep game state in one plain module that scenes read from and write to:

```ts
// state/gameState.ts
export interface GameState {
  score: number;
  lives: number;
  level: number;
  unlocked: string[];
}

const state: GameState = { score: 0, lives: 3, level: 1, unlocked: [] };

export const getState = (): Readonly<GameState> => state;

export function addScore(points: number): void {
  state.score += points;
}

export function resetRun(): void {
  state.score = 0;
  state.lives = 3;
}
```

Returning `Readonly<GameState>` from the getter is a small thing that prevents a large class of
bugs — scenes cannot quietly mutate state without going through an explicit function.

## Pool anything you create repeatedly

Bullets, particles, enemies and pickups should never be created and destroyed inside the update
loop. Allocating every frame produces garbage-collection pauses, which on lower-end hardware
appear as periodic stutter.

```ts
// Create once, reuse forever
this.bullets = this.physics.add.group({
  classType: Bullet,
  maxSize: 40,
  runChildUpdate: true,
});

// Firing: grab an inactive instance instead of allocating
const bullet = this.bullets.get() as Bullet | null;
bullet?.fire(this.player.x, this.player.y);
```

This one change is frequently the difference between 60fps and 40fps on a five-year-old tablet.

## Keep systems out of gameplay code

Audio, input, persistence and analytics do not belong inside your gameplay scene. Extract them
into modules with narrow interfaces:

```ts
// systems/audio.ts
export const audio = {
  play(key: string) { /* … */ },
  setMuted(muted: boolean) { /* … */ },
};
```

Now muting the game is one call from anywhere, and swapping the audio implementation does not
require touching gameplay logic.

## Why this is worth the day it costs

The measure of a game's architecture is what happens when someone asks for a new level in month
four. With this structure it is a new scene plus a data file. Without it, it is a week of
untangling and a fresh set of regressions.

I have never regretted setting this up at the start of a project. I have repeatedly regretted
not doing so.
