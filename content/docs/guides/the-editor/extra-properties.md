---
draft: false
title: Extra Properties
weight: 1100
date: null
description: Once you have a basic understanding of the editor, we can move on onto more advanced or niche features. This guide will cover how to use the Extra tabs & Anim tab available at the Edit Group menu.
authors:
  - xplode09
  - illusion2
contributors:
  - xplode09
  - illusion2
  - chuckolate
tags:
  - Grade 0
  - Advanced Editor
seo:
  title: How to Use Extra Properties in Geometry Dash
  description: null
  canonical: ""
  noindex: false
---

{{< callout context="caution" title="Incomplete guide" icon="outline/info-circle" >}}

This guide is missing the following:
- Image & video examples on some sections

{{< /callout >}}

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- You can change a lot of miscellaneous object properties using the Extra & Extra 2 tabs.
- The Anim tab allows you to conveniently use keyframes in your creating workflow.

{{< /callout >}}

# 1. Extra Tab

**Extra Tab 1** lets you select different options to give your objects different properties. This section will go over the different options.

{{< img src="https://lh3.googleusercontent.com/d/1ApFT8E7higf7WeAfVDrdMJ9pVH92CXN9" >}}

## Gameplay Options

- **IceBlock** __gives blocks in Platformer an ice-like property__, making acceleration much slower when the player attempts to do so on the block's surface.

{{< img src="https://lh3.googleusercontent.com/d/1TSlMDTVPWB45myZm7rJuWZSeAWMU8_RE" >}}

{{< youtube 05Z6yPc7ZSM >}}

- **NoTouch** __removes an object's hitbox completely__, making it unable to be interacted with by the player. This option converts [static objects](/docs/guides/the-editor/static-objects/) into [detail objects](/docs/guides/deco-1/detail-objects/), allowing them to be rotated.

{{< img src="https://lh3.googleusercontent.com/d/1yhkBYgZnFhYFg8LuXc-Gc3KesqWFcMzK" >}}

{{< youtube -5S0WJjHYXE >}}

- **GripSlope** __allows the player to stand still on a 45° slope__, instead of sliding down it in Platformer.

{{< img src="https://lh3.googleusercontent.com/d/1gob0D7oJ2paa3UpK-rDPjKTWVq9zZ5kx" >}}

{{< youtube Tfcru5SFdKE >}}

- **Passable** __allows the player to pass through a block from the bottom, but still allows the players to stand on the block__. You can move onto the top from below too.

{{< img src="https://lh3.googleusercontent.com/d/1dkR6fbq-2UD0aoEefUUPkQ2SNyqgz2qr" >}}

{{< youtube PngcEN0fDRM >}}

- **NonStickX/NonStickY** __stops the player from sticking to moving blocks in Platformer__.

{{< img src="https://lh3.googleusercontent.com/d/1nIugS0VRHjjPBgmEcpYg03gItaBhYmHn" >}}

{{< youtube PSOZ5TvpH5Y >}}

- **DontBoostX/DontBoostY** __stops the player from being boosted by moving blocks__.

{{< img src="https://lh3.googleusercontent.com/d/1LiJSLoQaeBfmp--O_VtVCXKKAsemGwNR" >}}

{{< youtube RSaNW87d0iQ >}}

- **ExtraSticky** __keeps the player stuck onto blocks moving downwards at higher speeds__, rather than having the player fall as if walking off a platform. This has a limit, however: moving too fast can still cause the player to stop sticking to the block.

{{< img src="https://lh3.googleusercontent.com/d/1ixiYaIj0SvYVpJtzr6QFW3ff63O0plfc" >}}

{{< youtube IBtR39cuu9Q >}}

- **ScaleStick** __allows the player to move along the X axis of a block relative to its center when it is scaled__. Usually, when using a scale trigger on an object with the player on it, the player will only move up. However, with this option, the player will move to the side as well relative to the center of the scaling.

{{< img src="https://lh3.googleusercontent.com/d/1NHYm2FqTxGyGykqTHyjx2E3Ulrk3tjir" >}}

{{< youtube OBZ90fm9_D8 >}}

- **Extended Collision** __fixes the hitboxes of objects with a scale above 6__. This option exists because hitboxes of very large objects don't match perfectly with its sprite by default. Do note that having a lot of objects with this option enabled can make the game laggier, so use it only when necessary.

{{< img src="https://lh3.googleusercontent.com/d/1PV8LK4QG3ToTXgWZVFIoXmvRopaIkMXH" >}}

{{< youtube -7X9YNVWyb0 >}}

## Visual Options

- **Don’t Fade** and **Don’t Enter**: Stops the object from having an [enter effect](/docs/guides/triggers-1/enter-triggers/) at the edge of the screen.

- **No Effects**: Stops pads and portals from having effects as you interact with them, like the background flashes in size portals.

- **Hide** __completely removes the visual appearance of an object__. You can press `F6` in the editor to show these hidden objects if needed.

{{< img src="https://lh3.googleusercontent.com/d/1XK-4cyA_wFJ86juqLeyKEP0KQYsEV5FI" >}}

{{< youtube yoJi1rqKi5Q >}}

- **High Detail**: When enabling "Low Detail Mode" outside the editor and playing the level, objects with High Detail will disappear, making the level less laggy.

(img)

(video)

- **Group Parent**: When rotating or scaling several objects, the objects will transform relative to the group parent; in other words, the group parent acts as the center point. This is not to be confused with Parent Group.

(img)

(video)

- **Area Parent**: Functions as a group parent, but for [area triggers](/docs/guides/triggers-1/area-triggers/). Make sure you link a set of objects together before making one object the area parent.

(img)

(video)

- **NoGlow**: Static objects have an inherent glow on their outlines only visible in normal mode; this option removes the glow.

(img)

(video)

- **NoParticle**: Removes particles from objects like portals and pads.

(img)

(video)

- **NoAudioScale**: Disables the scaling/pulsing on objects that pulse relative to the song, like the big pulsing circles.

(img)

(video)


## Specific Options

In addition to these properties, some objects can have more options, which include the following:

- **Reverse**: Reverses the gameplay direction as soon as you hit an orb or a pad. *Orbs and Pads Only*.

(video)

- **Single P Touch**: If one player touches an arrow trigger {{< img src="images/GDEmotes/Triggers/Arrow.png" class="emote" >}} in Dual Mode, the trigger will only activate for the player that touches it. *However, this feature is currently bugged as of Update 2.205.*

- **Center Effect**: [Touch Triggered](/docs/guides/triggers-1/spawn/) triggers will only activate once the player touches the center of the trigger.

(video)

- **Smooth Ease**: Moves the camera smoothly rather than instantly when using any kind of teleport.

(video)

# 2. Extra 2 Tab

This tab is somewhat self-explanatory. There are various counters that let you to change the IDs shown in the [Using IDs](/docs/guides/the-editor/using-ids/) guide.

Keep in mind that not all objects are able to have certain IDs, meaning that some objects will not have some counters that other objects do have.

{{< img src="https://lh3.googleusercontent.com/d/1iRSBsrj-PS2xdcgpjb4eVgFEXSrnLZsV" >}}

# 3. Anim Tab

The **Anim** button right under the Extra2 button serves as a shortcut to creating [keyframes](/docs/guides/triggers-1/keyframes/#3-the-keyframe-object).

If you give some objects a group, and have only one object as the "parent group", you can click the Snim button and it will spawn a {{< img src="images/GDEmotes/Triggers/KeyframeObject.png" class="emote">}} keyframe object on top of the parent group. You can then use the keyframe object as normal.

{{< youtube d0TATu-MdOI >}}

Keep in mind that **this ONLY WORKS if you have a parent group**. Check out the [Keyframes](/docs/guides/triggers-1/keyframes/#3-the-keyframe-object) guide for more information.

