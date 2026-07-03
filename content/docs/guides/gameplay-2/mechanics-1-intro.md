---
draft: false
authors:
  - komatic5
title: Mechanics 1 (Intro)
weight: 7010
date: 2023-04-24T00:00:00.000Z
contributors:
  - komatic5
  - notamoderatr
description: This guide explains what mechanics are, how they relate to player
  skill, and how best to introduce them to the player in your gameplay.
tags:
  - Grade 2
  - Mechanics
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Effective mechanics generally follow these 3 principles: Extensiveness, Immersion, and Engagement.
- Mechanics need to be introduced to the player, but be careful to not forget about them and cause burnout.
- Knowing how to combine existing mechanics to create new ones and introduce those is also important as well.

{{< /callout >}}

** **

**Mechanics** are __rules or gimmicks in gameplay that add more to the existing gameplay a level has__. An example of this is the health bar, where once it’s depleted, you die. What makes mechanics interesting is their ability to completely change how the player approaches the level, giving the opportunity to make creative gameplay.

This guide will explain the process behind creating custom mechanics for your gameplay. For implementing them, you should check out the [Intermediate Triggers](/docs/guides/triggers-2/the-trigger-process/) unit for its logic-based guides.

# 1: Getting Ideas

The first step of making a mechanic is to define your idea. If you haven’t read [Getting Ideas](/docs/guides/main-skills/getting-ideas/), it should help with coming up with ideas for gameplay. All good mechanics follow general principles which makes them effective. Keep this in mind as you make ideas to better evaluate them after your brainstorming sessions.

- **Extensive:** Mechanics should affect game rules, as it will fundamentally change how the level plays. They should be extensive enough to make an actual impact. A change to the health bar, for example, does nothing if the player doesn’t take damage multiple times; depending on the implementation of healing, they will either want to conserve health, or go willy-nilly taking damage. Similarly, using a breath meter only works if the player encounters water.

- **Immersive:** Most mechanics need visuals to really sell their ideas. Without visual effects, gimmicks like fire and poison are just typical gradual damage. Decoration can help with selling mechanics, as it can reveal clues about their functions. Audio also helps by making the game feel more immersive. As of GD 2.2, you can add sound effects to your level using the SFX trigger, so be sure to use this to your advantage.

- **Fair and Engaging:** Mechanics should follow the same rules as your normal gameplay. They need to be fair for players, as well as engaging so it’ll fall into the Flow State. This largely depends on what you do with the mechanics compared to what the mechanics are.

# 2: Introducing Mechanics

Once you’ve decided on a mechanic, you should consider how to implement it in your level. The main things you should have now are how to relay information and hints to the player, and how to make the player use the skills they’re going to learn.

Every mechanic in a game requires a certain level of skill. Take knowing when to click an orb for example; you must decide if you should click, take the action of clicking, watch as the game plays out an action and gives you feedback, then change what you do next time so you can improve. This entire process feels invisible at first, but it happens subconsciously whether it’s noticeable. It becomes apparent - and frustrating - when you have to kickstart the process without any information.

These are some steps toward establishing a good mechanic:

1. **Introduction** - Introducing your mechanic involves showing and making sure that the player understands the task. If this is ignored, players will end up completely lost. It’s fine to leave room for experimentation to the player, but it’s used best when not part of the fundamental gameplay loop, like the game’s controls. For example, Stereo Madness tells you the basic controls to jump after enough deaths, as not doing so would be unfair, no matter how obvious it seems.

2. **Experimentation** - After establishing the rules for your new mechanic, give the player some time to experiment with it. It’s fine to assume that they’ve already mastered a default mechanic in-game, but when adding new mechanics you should let them understand it first. If a player can’t understand the mechanic, it’s likely not to be used; if that mechanic is integral to your gameplay, then you’ve just lost a player. For example, Hollow Knight provides you with the Dash ability shortly after one of the early bosses in the game. You’re given the information you need to know on dashing, but as you leave the arena you have to dash over some small pits of acid. These dashes start off simple, and after the first few dashes are done you then get shown that you can dash in midair. Past this point you’ve mastered that mechanic and it can be added to the gameplay loop.

3. **Burnout** - Using a skill consistently makes the gameplay feel more tied together. Players will forget about mechanics that serve no integral purpose to the gameplay, ultimately undermining its purpose. Those who try to master that skill will be unable to if it’s not used, and people who have already mastered that skill will stop using it without being given that chance. In either case, that mechanic is now wasted, causing **burnout** - __a skill which you introduced is no longer seen as important for the player.__

Burnout can occur early in your level; introducing a mechanic but the player never figures out how it could be applied is a good example. On the flipside, it can occur later; chances to meaningfully use the mechanic are less frequent, so they stop caring about it. Burnout is a sign of boredom, so it’s crucial to watch out for it when playtesting.

# 3: Combining Mechanics

Sometimes mechanics can be combined to add to the gameplay flow. For example, spears in Rain World can be used to damage enemies, but it can also be used as a grabbable bar for platforming. Communicating when mechanics are used at the same time is important as well. If you want the player to learn how to apply existing skills they’ve learned, consider telling the player upfront how to combine certain skills together. An example of this is how you can stack orbs and portals together, requiring the player to understand both mechanics to know how the new one works. If you want the player to master your gameplay by learning new combinations of skills, consider leaving the skills as things the player themselves can discover.

You can use a **Skill Chain**, or a __combination of skills which the player learns in a sequence__, to determine which mechanics will work together. For example, you must know how to pick up a pencil before you can learn how to write.

All skill chains start with **pre-existing skills**, which are __skills already mastered by the player__. Within Geometry Dash, you’re safe to assume that the player knows the fundamental mechanics before they play your level. From here, introducing skills and mechanics will make players form connections to their pre-existing skills. You can map out a skill chain to understand the order in which players may learn new skills, such as in this example here.

{{< img src="https://lh3.googleusercontent.com/d/1l8Qrjv1UEpHMgOol6F9uBwZ-Q7SLgcRM" >}}

Making a flowchart like this makes identifying the pre-existing skills players need to start playing your level, which ones they need to beat your level, and which skills need to have explicit feedback such as a UI, visual changes, and so on easier. However, it won’t tell you how players may actually respond to your mechanics. For that, you must get playtesters and use your skill chain framework to determine where playtesters enjoy the learning curve, and where they’re getting burnout. This requires documenting their behavior as they play, and being aware of when mechanics go unused. For example, a player may enjoy learning how each gamemode responds to a swimming mechanic you made, but if they get burnout shortly after the introduction, you may need to look at how you first introduced it. If they get burnout later but enjoyed learning the mechanic, you should look at how you used it later on in the level. This can be a long process to truly perfect a mechanic, but it’ll ensure that your gameplay can be easily approached and will remain interesting over time.

# Sources

- [Adapting Cognitive Task Analysis to Elicit the Skill Chain of a Game](<https://www.researchgate.net/publication/319537800_Adapting_Cognitive_Task_Analysis_to_Elicit_the_Skill_Chain_of_a_Game>)
- [The Chemistry of Game Design](<https://lostgarden.home.blog/2021/03/13/the-chemistry-of-game-design-2/>)

