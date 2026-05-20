---
draft: false
title: Priority Order
weight: 6030
date: 2024-09-17T00:00:00.000Z
description: Priority Order is the second activation system in Geometry Dash. It’s a lot more subtle than Spawn Order, but its impacts are far and wide. Priority order affects how objects with the same Z-Order will layer, Spawn Family triggers activate, and which orbs you click first when they’re layered on each other. This guide explains how Priority Order works in-game. Although this is no longer manipulable in-game, it is still useful to know for various in-editor circumstances.
authors:
  - theibra
  - typexleta
contributors:
  - notamoderatr
  - theibra
  - typexleta
tags:
  - Grade 2
  - Trigger Concepts
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Ordering of triggers is important, as it prevents possible randomness in the way they fire.
- Priority Order is a hidden system that determines which objects get processed first, such as collision blocks, stacked orbs, and triggers on the same X axis.
- There are plenty of ordering algorithms that the game puts into place, but you can change this yourself with the Trigger Order option found in the Edit Group menu.

{{< /callout >}}

** **

# 1: Priority Order

Geometry dash is separated into invisible sections 100 units (3.33 blocks) wide, and infinitely tall. They can’t be seen in the editor, but if you could see them they’d look like the orange lines in the image below. These sections help determine the priority or order that objects or triggers activate.

{{< img src="https://lh3.googleusercontent.com/d/1j03rQYlowQdWY40gikt6-AiBH8EoGMyT" >}}

The rules for Priority Order are as follows:

- Each section has its own priority. Sections further left in the editor will have higher priority than ones to their right.
- Priority order is determined within a section. Think of it as a “list” detailing all the objects in a section and where they stand on the game’s priority.
- When an object is added to a section or moved in from a different one, it’ll have the lowest priority of that section.
- When an object is deleted or moved out of a section, the object with the lowest priority will take its place on the priority list. For example: If the list is `1, 2, 3, 4`, and object `2` is removed, then the new priority is `1, 4, 3`.
- In **Update 2.1,** priority order is saved between attempts.

Remember that Priority Order doesn’t care about an object’s X position, as long as it’s within the same section.

Here’s an example of Priority Order at work. The yellow orb has a priority of `1`, as it’s the first object in this section.

{{< img src="https://lh3.googleusercontent.com/d/1igrVte49FH2rvXM7YIk67MZhzbwY5ax8" >}}

The purple orb is placed within the same section as the yellow orb, so it gets the lowest priority of `2`.

{{< img src="https://lh3.googleusercontent.com/d/1BRzrK0osfUfqDp6Je0Fed8jqZ6UxIrrV" >}}

The red orb is added to the section to the left of the other two orbs. It gets the highest priority since it’s in the leftmost section.

{{< img src="https://lh3.googleusercontent.com/d/1vATFKk3YRiyCcqrC63dgm4sV4wY_RrE1" >}}

The red orb is moved into the section with the other two orbs, so it gets the lowest priority. The purple and yellow orb gain priority as a result.

{{< img src="https://lh3.googleusercontent.com/d/148rDtgT2mgg9w0OQepJBB6opYSv0Jusz" >}}

The best way to check an object’s priority is through layering. If two objects share the same Z layers and Z order, the object in front will have lower priority than the object behind it. This will only update in the editor when you save & exit, then re-enter the level.

# 2: Applications

In this section, we’ll focus on some applications of Priority Order and how you can use it for yourself.
## Changing Priority Order

Changing the Priority Order of two objects in the same section is fairly easy. Take the object with the highest Priority Order, move it at least three and a half blocks to the *right* of its original place, and then move it back where it was before.

For example, the yellow orb in this image has a priority of `1` while the purple one has a priority of `2`.

{{< img src="https://lh3.googleusercontent.com/d/1tCYmZPOFpkJzBRlfdK_OdgN5vI0g-fnk" >}}

Moving the yellow orb into the next section resets its priority.

{{< img src="https://lh3.googleusercontent.com/d/1kALNPDIu8YlOYmqw7TbFIvlEbLdTYvjk" >}}

Then, the yellow orb is moved back - resetting its priority and switching the locations of the orbs on the priority list.

{{< img src="https://lh3.googleusercontent.com/d/1LFzcqzkE0WpbMXkLg22qQTcZe8P15fsc" >}}

This can be done inside a level with move triggers, and lets you change the priority of orbs, collision blocks, and object Z layers. However, it’s much more finnicky for triggers because they can’t be moved on the X axis using move triggers.

## (2.1 Only) Saving Between Attempts

One of Priority Order’s most useful features is that it saves in between attempts. Since you can change it using move triggers, it’ll be saved for the next attempt - letting you save information between attempts.

Most importantly, this info will only save when you’re inside the level. If you exit then the priority will reset and that data will be lost. This will be expanded upon in the Binary Save lessons.

Here is a basic example of using portals of saving data. In the video below, you enter the portal with the highest priority taking you to one place. The portal is then moved to the right and back, setting it to the lowest priority. On the next attempt, you enter through the other portal as it has a higher priority.

{{< youtube JPyb8Dc-xVg >}}

Be aware that *Priority Order does NOT save between attempts in 2.2, only in 2.1*. However, Update 2.2 also introduces the **Order** system which also impacts how triggers work.

In most cases, triggers aren’t commutative, meaning that the result can vary drastically depending on the order they activate at. Setting up when triggers activate ensures you get the wanted results.

{{< youtube RecbfdJFl9Q >}}

# 3: Simultaneous Ordering in 2.2

In certain cases, the game will order what triggers activate first to prevent unwanted randomness. An example of this is 2 pickup triggers activating at the same time, where trigger A adds 1 to itemID 1, and trigger B multiplies the itemID 1 by 10; what will the final ItemID value be? The result can either be 1 or 10 based on which trigger activates first.

In order to eliminate randomness, triggers activated on the same frame happen in a set order, much like how a calculator processes mathematical operations. The game uses 3 different ordering algorithms to achieve this.

## Left to Right Priority

If "spawn triggered" is enabled, triggers will be activated from left to right, meaning the leftmost triggers will activate first, cascading until the last trigger is activated.

{{< youtube Wy4kVg7cxmA >}}

## Order Value Priority

**As of 2.206, this feature suffers from multiple bugs, and should be avoided when possible until it’s fixed.** This can trigger on portals, pads, and orbs but has no visible effects. This can also break triggers if they aren’t set up properly.

This feature is only used for regular or touch-enabled triggers. Their order values are compared in ascending order, meaning the triggers with the lowest value activate first. You can change a trigger’s order value in the bottom left of EditGroup , and a trigger’s value must be larger than all other triggers before it in order to prevent breaking.

{{< youtube 07Ras4igAMs >}}

## Placement Priority

In the case of 2 or more triggers having the same X position and the same order value, the most recently created trigger will activate first, with the oldest activating last. For example, copy + pasting a trigger means the copy will activate before the original.

{{< youtube Kvk8a-bfHxM >}}

## Order Inheritance

An important thing to note is that a trigger’s priority depends on the previous triggers’ priority, so the order of 2 triggers activated by different spawn triggers is based on the order of these spawn triggers.

{{< youtube bI8iyrOKVnc >}}
