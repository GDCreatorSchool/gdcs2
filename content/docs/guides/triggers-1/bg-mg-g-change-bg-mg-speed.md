---
draft: false
authors:
  - eyz
title: BG/MG/G Change & BG/MG Speed
weight: 3470
date: 2024-01-21T00:00:00.000Z
contributors:
  - komatic5
  - eyz
description: This guide explains how the BG/MG/G Change & BG/MG Speed triggers
  work. They're triggers that let you change your level's background, midground,
  and ground, the speed of your background or midground, and the position of the
  midground.
tags:
  - Grade 1
  - Effect Triggers
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
* The BG, MG, and G Change triggers let you change the background, midground, and ground in your level. You may also change the defaults for these through the Level Settings menu.
* The BG and MG Speed triggers let you change your background and midground's speed.
* The MG trigger also lets you change the midground's position.
{{< /callout >}}

- - -

# 1: Recap

In case you haven't read the editor guides, here is a quick recap of how backgrounds, midgrounds, and grounds work. Geometry Dash has a variety of backgrounds and grounds you can use, with midgrounds being added in Update 2.2.

{{< youtube 9bkYAJDwna0 >}}

To change any of these options, go to the {{< img src="images/GDEmotes/Buttons/Settings.png" class="emote" >}} Level Settings page and set them through the UI given. Note that if you're playing on version 2.200 (such as being on mobile), adding a MG to your level will permanently lock you out of the editor.

{{< youtube jOQVZ_QocTw >}}

# 2: BG, MG, & G Change Triggers

{{< img src="images/GDEmotes/Triggers/BGChange.png" >}}

 {{< img src="images/GDEmotes/Triggers/MGChange.png" class="largeemote" >}} {{< img src="images/GDEmotes/Triggers/GChange.png" class="largeemote" >}} These triggers let you change the BG, MG, and G currently in your level. Their UIs all look somewhat like this when you click go to the {{< img src="images/GDEmotes/Buttons/EditObject.png" class="emote" >}} Edit Object.

{{< img src="https://lh3.googleusercontent.com/d/1LEq4LkGM-QMV_RgkJx-hPArIky8tkdsx" >}}

When you click on the button in the middle, you'll be able to select a new BG, MG, or G for your level. You may also make these triggers Touch or Spawn Triggered of course.

{{< youtube Bu4VhA8erj8 >}}

# 3: BG & MG Speed Triggers

{{< img src="images/GDEmotes/Triggers/BGSpeed.png" >}}

 {{< img src="images/GDEmotes/Triggers/MGSpeed.png" class="largeemote" >}} These triggers let you change the speed at which your BG and MG move.

{{< img src="https://lh3.googleusercontent.com/d/12W9r6DeNBNT3k-_VbFYT4zG_valVURiz" >}}

The **Mod X** and **Mod Y** values are the same as in the Follow trigger and set the speed of the BG and MG. A value of 1 makes the BG move at the camera's speed, while a value of 0 makes it stop entirely.

By default these are set to 0.1, but there are other criteria which determine how fast they move - most notably the {{< img src="images/GDEmotes/Triggers/TimeWarp.png" class="largeemote" >}} Timewarp trigger and your speed changes.

{{< youtube jjLmU5pvNfU >}}

# 4: MidGround Trigger

You may also change the position of your level's MG using this trigger. As with the Move trigger you can input an offset, set a move time, and add an easing. As always, this can be touch-triggered and spawn-triggered.

{{< img src="https://lh3.googleusercontent.com/d/11XJa36O8a0r2UJlh3eqng4QAO4bRpwP_" >}}

{{< youtube alf7q7p3tZ0 >}}

# 5: Additional BG Changes

If you are bored with the default backgrounds that GD offers, you can make your own custom ones. Most art-themed levels use complex backgrounds with custom designs and movements You can learn more about decorating custom backgrounds by reading [another guide](/docs/guides/deco-1/making-backgrounds/) here.
