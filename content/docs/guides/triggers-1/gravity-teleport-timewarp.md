---
draft: false
authors:
  - notamoderatr
  - tdp9
title: Gravity, Teleport, & Timewarp
weight: 3300
date: 2024-07-19T00:00:00.000Z
contributors:
  - notamoderatr
  - tdp9
description: This guide explains how the Gravity, Teleport, & Timewarp triggers
  work. They let you control the player's location, gravity, and flow of time.
tags:
  - Grade 1
  - Gameplay Triggers
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The Gravity Trigger can control the amount of gravity applied to the player or players whether the player is in a dual.
- The Teleport Trigger teleports the player to a specified Group ID. There are also many options to customize the behavior of the trigger.
- The Timewarp trigger sets the speed of the game based on a single value. This is incomplete as of 2.206.


{{< /callout >}}

- - -

# 1: Gravity Trigger

{{< img src="images/GDEmotes/Triggers/Gravity.png" class="emote">}} The Gravity Trigger changes the amount of gravity inflicted onto the player. Lower values mean a lower gravity and higher ones have higher gravity. This value can be set to a maximum of 2.00.

{{< youtube VDpWQOh8_hg >}}

This trigger has 3 options: P1, P2, and PT. P1 targets Player 1, P2 targets Player 2 if the current gamemode is a dual, and PT targets the player that comes in contact if Touch Triggered is enabled. If all options are disabled, both players will be affected.

{{< youtube fAwEJEViJ04 >}}

# 2: Teleport Trigger 

{{< img src="images/GDEmotes/Triggers/Teleport.png" class="emote">}} The Teleport Trigger teleports the player to the position of an object with a target Group ID. If multiple objects have the Group ID, a random one will be chosen to be teleported to. The blue unlinked teleport portal in the orb tab has the same options as this trigger.

**Teleport Triggers only work on Player 1, as of the time of writing.** If you wish to teleport the second player (e.g. for a dual), you need to use the normal teleport portal.

{{< youtube LP7mvG8ROyE >}}

* **Gravity:** Allows you to determine if the player's gravity is normal, upside-down, or switched between the two on teleport.
* **Rotate Force:** Sets the force applied to the player when teleported. This force is done at the angle the target object’s rotation is at. Rotating the trigger itself can have an effect on this force as well.
* **Static Force:** Sets the player's exit force to a set value. Enabling “Additive” will add the specified force to the player’s current force instead.
* **Redirect Force:** Multiplies the player’s force by the mod value. You can set the minimum and maximum force output using the respective sliders; keeping it at 0 will have it ignored.

{{< youtube qsBNjMI5bo8 >}}

* **Smooth Ease:** Eases the camera to the new teleport position. This operates much like the Smooth Ease option on teleport portals in 2.113.
* **Save Offset:** Offsets the teleport position to the target object based on where the player hits the teleport trigger instead of teleporting them to the center of the target object.

{{< youtube N-8tVyueWy0 >}}

* **Ignore X/Ignore Y:** Teleports you to only the X or Y position of the target object respectively.
* **Instant Camera:** Snaps the camera to the teleported position instantly.
* **Snap Ground:** Useless as of 2.208.
* **Redirect Dash:** Redirects a dash orb into the angle of the target object’s rotation.

{{< youtube 4LjpSZAYof8 >}}

# 3: Timewarp Trigger

{{< img src="images/GDEmotes/Triggers/TimeWarp.png" class="emote">}} This trigger speeds up or slows down game speed to a specified value in the 0.10 to 2.00 range. This can affect many things in a level, such as triggers (namely time-related triggers), game physics, etc. This trigger is incomplete as of 2.208, suggested by the triggers UI help button.

**Easings are not possible by default with the trigger;** if you want anything of the sort, you need to place multiple triggers down with different values inside them.

{{< youtube 6PyT0AEI15w >}}
