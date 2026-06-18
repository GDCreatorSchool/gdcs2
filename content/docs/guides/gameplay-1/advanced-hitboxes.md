---
draft: false
authors:
  - mateussdev
title: Advanced Hitboxes
weight: 4215
date: 2023-11-01T00:00:00.000Z
contributors:
  - mateussdev
  - notamoderatr
description: Have you ever wondered when you hit a spike in an unconventional
  way you die, or wonder why the latter happened when you clearly hit a spike?
  These scenarios happen due to quirks in how the game handles object
  collisions. In this guide, we will learn how GD handles said collisions, the
  perks of having this system, and how you can use this to your advantage to get
  a desired difficulty.
tags:
  - Grade 1
  - Gameplay Basics
  - Gameplay Features
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}


- The game uses hitboxes that are not the same as the sprites that they represent.
- The player has 3 hitboxes, with an extra one for slopes. The main Hitbox collides with mostly spikes and the floor/ceiling, the small - - Hitbox collides with solid objects, and the rotated Hitbox collides with everything that is rotated.
- The game will check for collisions 4 times between processing, which are called sub-frames.



{{< /callout >}}

- - -

To preface things: Geometry Dash uses multiple **hitboxes** to register collision between the player and many hazards and gameplay elements. This same goes for collision blocks.

These hitboxes, from a game design standpoint, do not need to be accurate to the object’s texture, hence you get hitboxes like this:

{{< img src="https://lh3.googleusercontent.com/d/12rLUgwsms6AQZVJp51PdN34McN8R1kA2" >}}

You most likely know that hitboxes in GD are not perfect, however you may be interested to know how the player behaves, and in what cases will the player die.

# 1: The Player Hitbox

The player hitbox consists of three main parts: the **main hitbox** (AKA the AABB hitbox), the **small hitbox** (AKA The Solid hitbox/The Blue hitbox) and the **rotation hitbox** (OBB hitbox).

There is also an extra hitbox-like area that’s called the **slope hitbox.**

Each of these hitboxes have different conditions for collision and registering events.

# 2: The Main Hitbox

This is the largest hitbox and the one that is most often used. It is exactly 30 units tall and 30 units wide.

This hitbox is also sometimes called the AABB hitbox (Axis Aligned Bounding Box) because the game performs a different mathematical formula to calculate the position, unlike most other hitboxes.

{{< img src="https://lh3.googleusercontent.com/d/1qUG96e1Pm4w-fWefKFTXvY52rhpD_n2S" >}}

## Collisions

* This hitbox collides with any object that is not rotated, such as blocks and spikes if they are facing upward. It also collides with slopes.
* This hitbox collides with solid blocks, but is not the reason why you die from horizontal collision of blocks.
* This hitbox will not collide with anything rotated, meaning that if you rotate a spike by a small degree it will no longer collide with the main hitbox. It will instead collide with the Rotated hitbox, which will be gone over later.
* This hitbox is used as an anchor on collisions with solid blocks, allowing the player to stay on top of structures.

{{< img src="https://lh3.googleusercontent.com/d/1e3bGwPqGYHWb_S487Vzf_E_vA5pRQGKS" >}}

## Properties

* This Hitbox has **Subframes**: **4 additional checks between every 2 frames of processing** that prevent the player from phasing through objects on low FPS.
* This hitboxes rightmost edge is used to calculate snapping, known as the snap bug, on the X axis.
* This hitbox is also used for snapping on the Y axis, in scenarios where the player falls slightly short of touching the surface of a block. The conditions to trigger a Y snap are as follows:
* The player’s Y velocity is 0 or it points towards the block
* The player is on a 24 unit offset from the block

# 3: The Solid Hitbox

This hitbox resides inside of the main one that is exclusively for **checking collisions between itself and solid blocks**. It’s there to prevent the player from simply crashing into a structure and moving through it. This hitbox is smaller so that you have more time to react to collisions with solid objects.

{{< img src="https://lh3.googleusercontent.com/d/1IprS3loJGUmIdhW2BCnwzAgJtsTle-U0" >}}

## Collisions

* This hitbox will only collide with solid objects and slopes.
* This hitbox determines whether the player dies if a solid object collides with it.

# 4: Rotated Hitbox

This hitbox is an interesting one, as it uses the Oriented Bounding Box formula (OBB for short) compared to other mentioned hitboxes.

{{< img src="https://lh3.googleusercontent.com/d/1pTEqOmICFH2Y2JG-fB_-wT7kpN6K-XCw" >}}

## Collisions

* This hitbox collides only with rotated objects that have hitboxes and does not collide with any other objects.
* This hitbox is also responsible for **Coyote Time**, which is **the amount of time you have as leeway to make a jump after falling from a ledge**. This behavior is present in the ball gamemode.

## Properties

* This hitbox has no sub-frames, as the formula itself is resource-intensive and is usually not required to register collisions.
* The rotation of this hitbox is connected to the **FPS**, **where high FPS (>= 1000) slows down the rotation of this hitbox, changing it's rotation and changing the bounding box**. This is most visible on the Ship gamemode, where rotation of the hitbox is the most sensitive. (Due to the 240 fps physics change in GD 2.2 this might become obsolete in future versions)

# 5: The Slope Hitbox

This hitbox is usually not noticed by the player, which determines collisions with slopes on their diagonal side. It takes form as a circle that is inscribed within the main hitbox of the wave.

{{< img src="https://lh3.googleusercontent.com/d/1dlMO_fyATvm8bNgrJ4i0DKSvdToJYwqt" >}}

This hitbox is most noticeable during the wave gamemode, where the cause of death is usually not known, as the other hitboxes mentioned above don’t match the conditions for collision and/or death. From a game design standpoint, this may not be a true hitbox, and may be only used to enable collision for the other hitboxes in select cases.

## Collisions

* This hitbox collides only with slopes and diagonal surfaces. It functions identically like the solid hitbox, however it stays miniscule in size during any other gamemode except for the wave.

## Properties

* This hitbox cannot be used to add difficulty, only to ensure that potential gaps like these are physically impossible.

{{< img src="https://lh3.googleusercontent.com/d/1VCZI3rY1Pnl4MzufBratHEsgJbHNHc-N" >}}

* This hitbox has no subframes.

# 6: Subframes

You may have read this term multiple times and not fully understand the meaning behind this term. This section shows all the details of how subframe hitboxes work.

Subframes are **4 additional checks between every 2 frames** of the game. They are placed in a perfect line between the center points of the hitboxes.

In most cases the collisions are not the same as running the game on your frame rate multiplied by 4 due to some notable inaccuracies.

{{< img src="https://lh3.googleusercontent.com/d/1jgDYiRQFQ0CpDdosYWymEST8lZVe_X7A" >}}

In this diagram we are running the game on a low frame rate. Red squares are hitboxes that are placed during physics frames and the Pink boxes represent subframes. Subframes do not move in a parabolic motion, but are instead linear across each frame of physics.

{{< img src="https://lh3.googleusercontent.com/d/1jJn7a3ZUjf-m9oI9GNx_ij1-ZLc0SdkR" >}}

This mechanic was mainly created to prevent the player from phasing through structures on low FPS, hence this mechanic isn’t applicable for levels that are above 240 fps since the distance is minuscule.

However, you can use subframes to create difficult frame perfects on lower frame rates that require **Snap Alignment**, which itself is the position at which these subframes are placed depending on how the collisions in a frame were placed (e.g. the collisions on a given frame were 0.84 units upward, shifting the subframes). This makes the timing depend on other timings.

And due to how alignments work in GD, you’ll create 2 frame perfects instead of making 1 frame perfect in the process, because to get the correct alignment you have to align yourself in specific positions, which will usually end up as a blind frame perfect on N fps.

# 7: Collision blocks

Collision blocks have a hitbox similar to the OBB Hitbox, and have subframes like the player does. Both types of collision blocks inherit this property, but static blocks have a quirk in the editor that forces collisions into 90 degrees of rotation instead of the usual 360 degrees given by the rotation tool. Most modmenus will not display the hitbox doing this.

Dynamic blocks detect collisions under the condition that they are moving, which can include miniscule movements such as moving dynamic blocks forwards and backwards by one unit in the X/Y directions in the same frame.

# 8: Moving Platforms

Moving platforms use the hitboxes of the group they affect and apply the math assigned to it every frame until the movement ends. Since this is the case, moving objects do not need subframes, it would be unnecessary processing that could lead to performance issues.

A way to use this mechanic is to move objects within one frame. To do this, place any object with a hazard or platform hitbox and assign a group to it. Then, place a move trigger set to move a large distance with 0 duration. The result should be that the player is not flung or killed from the moving obstacle.
