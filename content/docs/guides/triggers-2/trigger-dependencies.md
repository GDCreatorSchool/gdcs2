---
draft: true
authors:
  - komatic5
title: Trigger Dependencies
weight: 3470
date: 2026-07-22
contributors:
  - komatic5
description: This guide explains how more complex trigger uses create
  dependencies where one trigger relies on another to operate, and how that can
  lead to unexpected behavior if not handled properly. Introduces a few ways of
  mapping out trigger dependencies as well.
tags:
  - Grade 2
  - Trigger Concepts
---



# What Are Dependencies?
Triggers technically are **functions** - they take various **inputs** *(e.g. groups, delays, ect)* and perform **outputs**. These outputs can range from changing object properties *(such as position, rotation, scale, color, ect)* to triggering **other triggers**. Functions can be either **Independent** or **Dependent.**

## Independent Functions
**Independent** functions are functions that work completely on their own. This means the set of their inputs is fully disjoint, and neither trigger is an action of the other.
- **Fully disjoint** means both functions or in our case, triggers share no inputs. They target/use completely different groups, item ids, ect. and no object shares inputs used by both triggers. *(e.g. having groups both triggers target)*
- **Neither trigger is an action of the other** means they don’t activate each other. Note that this means triggers activated as part of the same function can still be independent from each other


- **Spawn-activating triggers** operate **independently** from non trigger objects. *(e.g. you can add a trigger and a block to group A, and spawning/stopping that group doesn’t affect the block at all)*

## Dependent Functions
**Dependent** functions are functions that **depend** on another produce an output.

For example, activating a rotate trigger **before** a move trigger when the object is off center will make the object to rotate first, then move, causing the object to **rest outside the original objects circle of revolution.** Activating the rotate trigger **after** the move trigger will **shift the circle of revolution**, increasing or decreasing its size, but keeping the rotating object aligned with it.

{{< img src="https://lh3.googleusercontent.com/d/1srVzLgeM2YN0ksdc2Ow5yd9qi-Qh_nhs" >}}

Other examples include:
- **Item edit triggers** and PEMDAS order of operations
- **Compare triggers** with conditional operations and logic gates
- Any **Object State Changing** or **World State Changing** triggers

- Any other **Priority bugs** that may occur *(e.g. invert/multiply gradient triggers disabled by shaders)*

This means **many trigger output combinations** are **noncommutative**, since they’re dependent on each other, their relation isn’t symmetric.

{{< callout context="N/A" title="Quick Definitions:" icon="outline/info-circle" >}}

- **Object State Changing:** Any trigger that changes object properties such as position, rotation, scale, color, ect.
- **World State Changing:** Any trigger that changes world properties such as the background, mid-ground, and ground textures and colors, camera movements, rotations, scales, shaders, ect.
- **Noncommutative:** Operations that are dependent on order of application. Inversely, commutative operations do not depend on order of application.
- **Circle of Revolution:** The circle created from the center and a point that rotates around the center.

{{< /callout >}}

### Reversal
Reversing dependent trigger operations require **reversing** the **original order of operation.** 

For example, reversing **move, rotate, scale** operations in sequence requires **scale, rotate, move** operations in sequence.

For move and rotate triggers, utilizing the **target options** can significantly help with reversal as those specific operations are **commutative** as they don't change values, they set them.
{{< callout context="caution" title="Warning:" icon="outline/info-circle" >}}

Depending on certain delays and durations, you may be required to **configure the triggers in unconventional ways.**

For example, reversing this operation:

- Activating a **move trigger** with a `1.00` second duration and a **rotate trigger** with a `0.5` second duration + `0.5` second delay from the move trigger activation.

requires activating a **move trigger** with a `1.00` second duration + reversed movement and a **rotate trigger** with a `0.5` second duration, a reversed rotation, and a **distance of `3.5` units to the right** of the move trigger.

{{< /callout >}}

# Why does this matter?
Many trigger setups **Include dependencies** that can easily cause issues if not properly handled. For example:
- Activating an **Advanced Follow** trigger to have an object follow the player **After** a normal **Follow** trigger connected to a sprite and the center object can make the sprite **missaligned** with the player.

When changing one part of a system, **everything else has potential to change too.** This can increase workload and make the system more prone to errors. For example:
- Creating a **ground collision function** that checks to see if collision block `1` is colliding with collision block `2` and **changing** collision block `1` to be collision block `3` can **break** another unrelated system that uses collision block `1` to detect damaging objects.

## Managing Dependencies

**Anchor operations** - things you can use to explicitly set trigger operations with. While **not independent**, they can give a **Point of Reference** for various operations.
- Ex: Instead of reversing a move triggers operations, requiring **Relative Position operations** *(e.g. +20x -13y)*, utilizing the **target function** can allow for setting **Absolute Positions** *(e.g. to 100, 12) (assuming that absolute position, doesn’t move either)*


Utilizing **tracking objects and item ids** can help **display** the statuses of various dependencies. Some tracking types include:
- **Timer** and **Item IDs**, either stationary, following the player, or as a **UI element**
- **Background Pulses** or **Blank Objects** to indicate when something activates.
- **Text Objects** that toggle on and off depending on what action is being performed.

{{< img src="https://lh3.googleusercontent.com/d/1YsYdNuZwmv2H6fF9TC8y7mOBNLrzknHX" >}}


### Dependent to Independent
**Converting dependent operations into independent operations** can help keep operations seperate and easily reversable.

For **Object State Changing** operations, utilizing **Area Triggers** is one of the best ways to keep operations independent as area triggers are **commutative.** 

(Image goes here)

Breaking seperate operations into **seperate objects** can help keep said operations from **interfering** with each other. Easiest to show with move & rotate example:
- Move triggers **change the distance at which objs rotate**, which impacts the rotation on its way back
**Separate** the rotation from the movement by having an independent group do the rotation, then **copying the change** in position via a **follow trigger**. Does lead to slightly different results but actually reversible

{{< callout context="note" title="Note:" icon="outline/info-circle" >}}

Follow triggers have dependencies with move triggers but they dont affect each other based on order **as long as the follow trigger is active for the entire time the move trigger is.**

{{< /callout >}}

# Non-Spawn Dependencies
## Sequential
These are triggers activated normally one after another, either being activated through **Spawn ordered,** or without being activated by **spawn-activating triggers** at all.
- The **closest** two triggers can be before **activating in the same frame** is `1.00` unit.


By using **Spawn Ordered** spawn triggers, it is possible to change the activation order **In runtime** by physically moving the triggers being activated.

## Simultaneous
The word *Simultaneous* here is A lie. When triggers activate in the same frame, the game doesn't activate all triggers in parallel, it activates triggers in a **very specific order.**

Geometry dash, like every other game, has something called a **Game Loop**. This is a loop the game runs every frame, activating different functions in a specific order. Every trigger in the level can only be activated **once**. That means unless using remaps, a trigger sequence cannot be activated twice in the same frame.



{{< gif src="https://lh3.googleusercontent.com/d/1pqw170XTDCZu5Ed5MHZI_IO-WWTMhdkD" >}}
{{< callout context="N/A" title="Credits:" icon="outline/info-circle" >}}

Massive credits to [HDanke](https://uhdanke.github.io/gd_docs/triggers/general/game_loop) for making this extensive list.

{{< /callout >}}

# Spawn Dependencies & Control Flow
### Branching & Merging
Branching is when one trigger calls multiple different **branches** of triggers, each branch performing different sequences of actions - each branch having the ability to be activated and controlled separately. 

{{< img src="https://lh3.googleusercontent.com/d/1gWNAQZ4sbW5FF_anUfr-4YYr3wRNYxBc" >}}



Activating multiple trigger setups at the same time **does not** activate them in parralel, instead relying on the **game loop's activation order.** 

### Global vs. Local Scope
Because normally triggers activate in whats called the **Global Scope,** different branches have the ability to affect each other, especially if **both rely on the same dependencies.**
- If you have **two branches A and B**, you can make branch B interrupt A by adding a **Pause trigger that targets the original group of A.** Even though A and B are both activated by the same group, you’ll need each to have additional unique groups for this to work *(or you’re just pausing both branches)*

By using remaps, both triggers and item ids can function in the **Local Scope** instead of the global scope. This means triggers and item ids **will not interfere** with each other, even if the same function is activated. This also **removes** the possibility of two functions *(or the same function)* **having dependencies with each other.**
- If you have **function A** that moves an object depending on its location and **function B** that gets said objects location in world spcace, by using **remaps** it's possible to have 2 different objects **activate both functions** while not **interfering** with each other.









