---
draft: false
authors:
  - komatic5
  - naem.less
title: Particle System
weight: 5033
date: 2023-11-01T00:00:00.000Z
contributors:
  - komatic5
  - naem.less
  - halfcookedramen
description: The particle system, while extremely powerful, can be daunting.
  This is especially due to the number of options, and values. However, with
  this guide and a little practice, you should be able to navigate the system
  with at least a little more confidence.
tags:
  - Grade 1
  - Deco Features
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- While the particle system has a plethora of options, most of them are fairly self-explanatory.
- The first window controls particle movement, the second controls their size, and visuals, the third contains extra features, and the fourth lets you set their texture.
- There are many smaller features which help make the particle editor much easier to use as well.

{{< /callout >}}

** **
# 1: Page 1

## Particle Spawning

These options let you control how particles spawn; how many will spawn, how often they’ll spawn, and long they’ll last.

- **Max particles:** The maximum particles outputted by a singular instance.
- **Duration:** The interval in which the particles will spawn. For example, a duration of 0.5 means that for every lifetime, particles will spawn for 0.5 seconds (-1 for constant).
- **Lifetime:** How long the particles last.
- **Emission:** Amount of particles spawned per duration.

{{< youtube 4gUrjIcaz8g >}}
## Particle Movement
These options let you control where particles spawn and how they move.

- **Angle:** Angle value for the particles. 0° is straight to the right, while -90° is straight up.
- **Speed:** Starting speed value for the particles. This is measured in small arrow units, so inputting 15 will render 1 block per second.
- **PostVar X and Y:** Parameters for where the particles spawn. This is also measured in small arrow units, so 15 = 1 block. Use this to define the particle concentration.
- **Gravity X and Y:** Determine how the particles accelerate linearly.
- **AccelRad:** Determines if the particles spread outwards from a center point (positive value), or spread inwards (negative value).
- **AccelTan:** Determines if the particles turn in a counterclockwise (positive value) or clockwise direction (negative value).

{{< youtube uspCPoGk5sI >}}
# 2: Page 2

## Particle Size, Rotation, and Color
These options determine the size, rotation, and color of particles over their lifetime.

- **Start & End Size:** Starting and ending size of the particles. 30 Units = 1 block.
- **Start & End Spin:** Starting and ending degree measure of the particles. Positive values are clockwise; negative values are counterclockwise.
- **Start RGBA & End RGBA:** Starting and Ending RGBA values for the particles.
 - You can fine-tune the color options in the top left corner.
 - Use the <> button to make them the same. Using this button will always copy the color of the first color box to the second box.

{{< youtube XH3xXaMxVik >}}
# 3: Page 3

## Movement Options
These options determine how the particle object will respond to being moved in-game.

Free, Relative, and Grouped determine how the particles generate when the particle object is moved:
- **Free:** Group particles relative to camera position.
- **Relative:** Allow particles to move on their own, regardless of camera position.
- **Grouped:** Make particles move together.
You can see this by clicking and dragging the particle object in the bottom left window.
- **Fade In and Fade Out:** Impacts opacity; works like the pulse trigger

{{< youtube KESz6-AX2Gg >}}
## Particle Friction
These options allow you to simulate friction on particles.

- **FrictionP:** Increases the friction on particles after they start moving, making them stop faster
- **FrictionS:** Increases the friction on particles as they grow, making them change size slower over time.
- **FrictionR:** Increases the rotational friction on particles, making them rotate slower over time.
- **Respawn:** Lets you control how fast the particles respawn when using a fast emission rate, like -1.

{{< youtube SDdYdwkVED4 >}}
## Particle Visuals
These options control some of each particle’s visuals; their color, size, spin, and if they have blending.

- **Additive:** Makes the colors use blending.
- **Start size/spin/rad:** Changes the size, spin, and radians of the particle.
 - If you input a value for start and end and enable these checkboxes, the particle will start with the start size but end with `start size + end size`.
 - This means a start size of 30 and an end size of 60 will make the particle start with size 30 and end with size 90.
- **Start rot is dir:** Makes particles move in the direction their rotation started with.
- **Use obj color:** Makes the particles use the color channels assigned in Edit Object.
- **Uniform obj color:** Makes the particles all have the same color no matter what (no variation).
 - This setting ignores blending, so use the “Enable Additive” function to make the particles have blending.
- **Dynamic rotation:** Makes the particles dynamically change their rotation depending on how they’re rotated.

{{< youtube CPW65JMNOdQ >}}
## Technical Settings
These options let you control how particles interact with other aspects of your level, like their layering and if they respond to triggers.

- **Animate on Trigger:** Allows you to control when the particles activate using an Animate trigger. This is explained further in the Animate Trigger guide.
- **Quick Start:** Removes a “start animation” when first loading into the level.
- **Order Sensitive:** Allows particles to respond to Z order.
 - Otherwise they will ignore Z order and display below the Z layer they’re on, similar to portals.
 - This only works if blending is disabled in the particle menu, as well as the color you chose in the color picker when using “use obj color”.
- **StartRGB/EndRGB var sync:** If you use the random sliders in the visual tab to select a color enabling this will make the particles either start or end with a grayscale effect.

{{< youtube f22qTJ378uE >}}
# 4: Page 4

- **Texture:** Sets the texture the particle will use.
## Extra Settings

These buttons let you change multiple properties found in the motion tab simultaneously, depending on what button you press. You can’t multi-select these buttons.

- **StartRad:** Determines the length of the diameter measured in small arrow units. This means a StartRad of 15 is 1 block long. This is the place where the particles will start at/spawn in.
- **EndRad:** Functions exactly the same as StartRad but this time it determines where the particles will end/move to.
- **RotSec:** Determines how much the particles will rotate before reaching the EndRad. It is measured in degrees and the particles will move clockwise for positive value.

{{< youtube VD8Z61SBH-s >}}
These buttons let you copy every setting from one particle to a different one entirely.
The `c` button copies the properties and the `p` button pastes them.

Finally, you can use the numbered buttons to quickly change particle parameters:

1. Lets you edit the PosVarX and PosVarY.
2. Lets you edit the GravityX and Y.
3. Lets you edit the angle and speed.

The **C** button doesn't have a purpose at the time of writing. Alternatively, the **black square** to its right lets you set a background color for the particle viewer.

{{< youtube _iBZWxMGrrA >}}

** **

**Video:**

{{< youtube -744rW8WKmA >}}
