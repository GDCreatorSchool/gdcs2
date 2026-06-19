---
draft: false
authors:
  - unknown
title: Refresh Rates
weight: 4230
date: 2023-03-18T00:00:00.000Z
contributors:
  - graylasagna
  - unknown
description: Refresh Rates are an integral part of how Geometry Dash physics
  work. As such, it's important to understand how refresh rates work when making
  gameplay.
tags:
  - Grade 1
  - Gameplay Features
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The refresh rate is the rate at which your monitor displays new frames. Different refresh rates have different effects on GD’s physics.
- Higher refresh rates lead to more accurate inputs and generally make the game easier to play.
- The introduction of new refresh rates can change how the game functions during play, giving way to bugs. Always make sure you playtest your gameplay on multiple refresh rates to mitigate this.

{{< /callout >}}

** **
# 1: Why Hertz Matters

Geometry Dash runs on changing frames. Every new frame updates the player’s position and replaces the old one, giving the illusion of motion. The rate at which frames are loaded depends on the **refresh rate** of the monitor displaying the game.

This is a value that shows how fast a display screen can renew images, usually expressed in *hertz* [Hz]. For instance, a 60Hz monitor displays 60 frames every second, and a 240Hz monitor displays 240 frames per second.

GD physics generally affect how the player interacts with hitboxes in the level. Every interactable object, such as saws and outlined blocks, has a hitbox. When the player’s hitbox collides with these objects’ hitboxes, an event is triggered that changes what the player is currently doing. The game checks for these collisions every frame, and executes the event the same frame it detects the collision.

This video shows an example of how this works. The important fact here is that since detection occurs every frame, changes to game physics also occur every frame. This means that the higher your framerate, the more control you'll get over your icons and the more accurate you can be.

{{< youtube jHHmPqjRqZY >}}

# 2: Changes in Gameplay

The two most noticeable differences between lower refresh rates and higher refresh rates are *input delay* and *response time* while playing. *Every input the player makes triggers an event in-game, the response time of which depends on the refresh rate*. A higher refresh rate allows for more accurate inputs and a lower response time, while a lower refresh rate limits accuracy and response time.

Given that the game checks for collisions [every frame](/docs/guides/gameplay-1/advanced-hitboxes/), things like frame-perfect inputs will vary between refresh rates. Most of all, this greatly affects ship gameplay. With more accurate controls, ship gameplay becomes far easier to control and create difficult gameplay around, increasing the possibilities for creating gameplay.

A higher refresh rate makes it easier to straight fly, move around objects, and react to quick transitions . It’s no wonder why the most difficult levels in the game have increasingly difficult ship sections, seeing as the refresh rate standard in the community keeps increasing.

{{< youtube wyT4UrkVre4 >}}

# 3: Changes in Consistency

GD was originally made for mobile. While the physics system has changed throughout the updates, the system was, first and foremost, created for 50-60Hz displays, meaning that hitbox physics and bugs were originally only tested for those refresh rates. Playing with a higher refresh rate introduces inconsistencies and bugs in GD physics, such as how players move through portals, and how they interact with slopes. See **Retention** by `WOOGI` as an example .

{{< youtube Uv_cLrQRmLI >}}

Slope physics, even on 60Hz, are slightly inconsistent and prone to bugs, and higher refresh rates only make this issue worse. The problems usually stem from how the player is launched from slopes: specifically, the angle and speed of the launch, and the arc the game creates for the player to land.

These seem to vary between refresh rates, making one person’s bug-tested and consistent gameplay another person’s bug-ridden and inconsistent gameplay. Always make sure to playtest your levels using multiple refresh rates, including 60Hz, 144Hz, 240Hz, and 360Hz.


# Sources

- [KugelBlitZ - Frame Perfects & GD physics](<https://www.youtube.com/watch?v=BiWtvKl0VCQ&ab_channel=KugelBlitZ>)
- [Stormfly - 
The 312 Bugs in Geometry Dash (2.113)](<https://www.youtube.com/watch?v=hhBnSJx-0-k&ab_channel=Stormy>)

