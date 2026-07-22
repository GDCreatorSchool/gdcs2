---
draft: false
authors:
  - komatic5
title: Parallax
weight: 5140
date: 2024-01-15T00:00:00.000Z
contributors:
  - komatic5
  - sparktwee
description: This guide will explain the main properties you need to know to
  effectively make use of parallax in your GD levels.
tags:
  - Grade 1
  - Visual Effects
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Objects further away from the reference point move faster and vice-versa.
- Relative motion determines your objects’ speed relative to another point of view.
- For a more natural tone, create more parallax layers, but make sure they move correctly.
- You can set up three types of parallax: normal parallax, deceleration, and spinning around a point.


{{< /callout >}}

- - -

# 1: Parallax Basics

**Parallax** is an **effect where things appear to move slower when they are further away from you.** It’s a large part of how you can perceive depth.

Basic parallax is described in the Making Backgrounds guide, and is demonstrated by this video. The background moves slower than the gameplay layer, while the foreground moves faster than the gameplay layer.

{{< youtube 2z4OTRFuLP8 >}}

At a high level, parallax can be used to figure out how far away things are - this is often applied for astronomy, such as calculating the distance between the earth and stars.

In this guide, however, we’ll focus on two theoretical concepts to learn how to create far more interesting environmental movements: reference point and relative motion.

# 2: Reference Point

**Your parallax is based around this reference point**. Objects further from the reference point will appear to move faster, while objects that are near will appear to move slower.

If the reference point is infinitely far away, then it practically doubles as a vanishing point. Everything will move in the same direction, and something infinitely far away will appear to be stationary. This is the way things will appear when you’re moving in a perfectly straight line and looking to your side. Observe this the next time you’re in a car.

{{< youtube SgmwyoRCHxM >}}

If the reference point is finitely far away, everything in front of it will move in one direction. Everything behind it will move in the other direction. This is the way things appear when you’re moving in a circle/curve around a specific point. For example, try spinning around in one place and you'll notice that things closer to you appear to move slower.

{{< gif src="https://media.tenor.com/tXgy3p4gxp8AAAAC/attack-on-titan-the-final-season-part2ending-akuma-no-ko.gif" >}}

Still Life by Empika places the reference point in the tower itself. The ground in front of the tower moves to the left while the ground behind the tower moves to the right.

{{< youtube id="OpUG1Aim0wU" start="71" >}}

# 3: Relative Motion

The other concept you must know before we start is **relative motion**. This shows **how fast an object looks when it’s being viewed from another point.** When you’re in a car, does the car move forward, or does the rest of the world move backwards? Parallax hinges on this because from your point of view as a creator and player, depth is merely an illusion.

An absolute movement will be seen from a single, stationary point, while relative movements will be seen from a moving point. A movement may push an object to the right from a stationary point, but still be moving leftwards from a different point of view.

Parallax is always done in relative terms, relative to the camera’s position. Before 2.2, this is much easier to see when you enable “Follow Player” in the pause menu. As of Update 2.200, Follow Player is removed.

This illusion also helps creators to make ambiguous movement in their levels, but that will be settled in a later guide.

# 4: Implementing Parallax

__Follow triggers__ let your parallax adjust automatically with the camera’s speed. Once your level is complete you can use the player’s speed to manually adjust the parallax values, which is more optimized for actual gameplay but requires more work for you.

In GD 2.2, you can use “__Lock to Camera X__” and “__Lock to Camera Y__” with a modifier less than 1 instead of the follow trigger setup. This is useful in comparison to "Lock to *Player* X/Y" because the parallax will automatically adjust to any custom camera movements that occur, rather than looking strange due to the parallax only following the player's constant movement. Some actions, like slowing down the player’s movement relative to everything, will require you to use additional follow triggers.

Sometimes you’ll see parallax where some of the moving objects just look out of place. This is due to how many layers there are. The more parallax layers you have, the more context you’ll give your parallax and the more natural it’ll look.

{{< youtube G64lle9kIpQ >}}

{{< youtube KmP5h5rhkgo >}}

Make sure your layers are CORRECT. When the camera moves in one direction, everything should move in the other direction. Objects closer to the camera than your reference point should move faster as well.

When making objects that need additional movements besides their parallax layer’s movement, make sure those movements have context. If you have something like a train, then make sure the tracks and the layers around those tracks move correctly.

Similarly, if you have objects that are moving freely, have multiple of them on different layers to provide context for how fast their movements actually are.

## Types of Parallax Setups

1. Normal parallax: Exactly what you see most of the time.

{{< youtube 8rTsIroAb8M >}}

2. Player slowing down: Add another set of follow triggers with X and Y mods which’ll stack with the normal parallax triggers. These values must add up to 1 so everything gets locked to the player position when the parallax is locked to Camera X and Y.

{{< youtube LtayUqMxCZE >}}

3. Rotating around a point: Think of this as being the same way that parallax looks when you’re in the editor. You can essentially take the normal parallax setup and move everything towards the right, so the layers behind the point move towards the right while the layers in front of it move towards the left. Make sure that you set a reference point for the parallax so that this can work properly; add a new follow trigger with X/Y mods that stack with the original so they add up to 1, then just add another follow trigger with X/Y mods of 1 to all other layers.

{{< youtube sp4ttPeX-7A >}}

## Setup

1. Take an object which you’ll use as your reference point. In 2.1, lock it to Player X and use the Camera Simulation mechanism to lock it to Camera Y; in 2.2, lock it to Camera X and Y. Relative to the camera, this object will not move.
2. Use follow triggers and X/Y mods to copy its movements.

* An X/Y mod between 0 and 1 will make a background movement
* A negative multiplier will signify foreground movement
* A multiplier greater than 1 will move those objects backwards (only use this for rotations around a point).
* In 2.2, you can tweak the multipliers in “Lock to Camera X” and “Lock to Camera Y” to this extent.

3. Create your background and foreground, assigning these layers to the respective parallax groups.
