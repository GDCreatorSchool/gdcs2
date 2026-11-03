---
draft: false
authors:
  - theibra
title: Percent
weight: 3271
date: 2026-10-26T00:00:00.000Z
contributors:
  - theibra
description: The Percent trigger allows you to modify how the percent bar is
  displayed on platformer levels. This guide will explain how to use it.
tags:
  - Grade 1
  - Gameplay Triggers
seo:
  title: How to Use the Percent Trigger in Geometry Dash.
  description: Learn how to change the percent bar on platformer levels in Geometry Dash.
  canonical: ""
  noindex: false
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The Percent Trigger allows you to add visible progress to your Platformer levels.

{{< /callout >}}

# 1: Overview

The {{< img src="images/GDEmotes/Triggers/Percent.png" class="emote" >}} __Percent__ trigger brings Classic mode’s progress bar to Platformer mode. You can use this trigger to show the player how far they have gotten into your level. As such, the Percent Trigger can *only* be used in __Platformer__ mode.

Similarly to Classic mode, the player’s progress will be __updated__ when they die if they’ve __touched__ or __spawned__ this trigger, and they will recieve orb rewards accordingly if the level is rated.

## Progress Bars

This section will explain the difference between the two types of progress bars and how they’re used in Classic and Platformer modes. You can skip this section if you want to.

### Attempt Progress Bar

In Classic mode, an __attempt progress bar__ is located at the top of the screen, which shows the player’s progress in this current attempt (Attempt %), and is reset on the next one. It gradually increases and cannot be modified.

The Attempt % progress bar is determined by the duration of the __last verification__ of the level; if the level creator verified the level in 2 minutes, then 50% on the bar is equivalent to 1 minute, and 100% to 2 minutes.

This means that if the player is slowed down (by teleporting it or using speed portals for example), the 100% mark will be reached before the level is complete. Similarly, if the player is sped up, they will complete the level before getting to 100%.

This attempt progress bar is also visible in the pause menu for both modes. In Platformer, it displays 0% unless changed with the Percent trigger.

### Level Progress Bar

The __level progress bars__ are visible in the level page and in the pause menu while playing the level. For Classic mode, the green bar is for Normal mode and the cyan for Practice.

This bar shows the highest percentage the player achieved in the level throughout all of their attempts (Best %).

In the pause menu, it’s displayed as a “Best %” and a grey bar behind the attempt progress bar.

This percentage only changes if the player dies when their Attempt % is higher than their Best %. They are also rewarded with orbs if the level is rated.

# 2: Features

{{< image-details src="https://lh3.googleusercontent.com/d/1jXI3ixsaqMm5GP8iNx-q3fPjI5AcF0-G" tlbr="24 22.7 10 7.5">}}

{{< detail name="input" src="https://lh3.googleusercontent.com/d/18sVBpe0P59j-2YSBRO8OGAwkkffRJIvO" tlbr="24 22.7 10 7.5" >}}


{{< /image-details >}}

{{< img src="https://lh3.googleusercontent.com/d/18sVBpe0P59j-2YSBRO8OGAwkkffRJIvO"

### Percent
Use the slider or type a number in the textbox to set the Attempt % to the desired value. Only integers between 0 and 99 are allowed.

Attempt % will only change if the value in the Percent Trigger is higher than it.

### Input
Check this box to change the Percent textbox into an ItemID textbox. When the trigger is activated, the Attempt % will be equal to the value of the specified itemID.

if the itemID’s value is negative, the Percent trigger will default it to 0, and if it is 100 or higher, it will be changed to 99.

The Percent trigger does not accept ItemIDs that are timers.

### Add
If checked, this trigger’s Percent value will be added to the current Attempt % instead of overriding it.

### Target ItemID
When activated, the trigger copies the value of the Attempt % to the target ItemID.

This is most useful for displaying progress, as the attempt progress bar is not visible in Platformer mode like it is in Classic.
