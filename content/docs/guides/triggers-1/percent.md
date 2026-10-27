---
draft: false
authors:
  - ibra
contributors:
  - ibra
title: Percent
weight: 3271
date: 2026-10-26
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
{{< callout context="caution" title="This guide needs proofreading" icon="outline/info-circle" >}}
{{< /callout >}}
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The Percent Trigger allows you to add visible progress to your Platformer levels

{{< /callout >}}

# 1: Overview

The Percent Trigger {{< img src="images/GDEmotes/Triggers/Percent.png" class="emote" >}} brings Classic mode's progress bar to Platformer mode, you can use this trigger to show the player how far they have gotten into your level. As such, the Percent Trigger can **only** be used in Platformer mode.

Similarly to Classic mode, when the player dies, their progress is saved automatically, and, if the level is rated, they also recieve orb rewards.

## Progress Bars

{{< callout context="caution" icon="outline/info-circle" >}}
This section will explain the difference between the 2 progress bars and how they're used in Classic and Platformer modes, you can skip this section if you want to.
{{< /callout >}}


### Attempt progress bar
In Classic mode, an attempt progress bar is located at the top of the screen, which shows the player's progress in this current attempt (Attempt %), and is reset on the next one. It gradually increases and cannot be modified.

The Attempt % progress bar is determined by the duration of the last verification of the level; if the level creator verified the level in 2 minutes, then 50% on the bar is equivalent to 1 minute, and 100% to 2 minutes.

This means that if the player is slowed down (by teleporting it or using speed portals for example), the 100% mark will be reached before the level is complete. Similarly, if the player is sped up, they will complete the level before getting to 100%

This attempt progress bar is also visible in the pause menu for both modes. In Platformer, it displays 0% unless if changed with {{< img src="images/GDEmotes/Triggers/Percent.png" class="emote" >}} the Percent Trigger.

### Level progress bar
The level progress bars are visible in the level page and in the pause menu while playing the level, for Classic mode, the green bar is for Normal mode and the cyan for Practice.

This bar shows the highest percentage the player achieved in the level throughout all of their attempts (Best %).

In the pause menu, it's displayed as a "Best %" and a grey bar behind the attempt progress bar.

This percentage only changes when the player dies and if their Attempt % is higher than their Best %, they are also rewarded with orbs if the level is rated.

# 2 : Features

{{< image-details src="https://lh3.googleusercontent.com/d/1jXI3ixsaqMm5GP8iNx-q3fPjI5AcF0-G" tlbr="24 22.7 10 7.5">}}

{{< detail name="input" src="https://lh3.googleusercontent.com/d/18sVBpe0P59j-2YSBRO8OGAwkkffRJIvO" tlbr="24 22.7 10 7.5" >}}


{{< /image-details >}}

### Percent
Slide or Type a number in the textbox to set the Attempt % to the desired value. Only integers **between 0 and 99** are allowed.

Attempt % will only change if the value in the Percent Trigger is higher than it.

### Input
Check to change the percent textbox into an itemID textbox, when the trigger is activated, the Attempt % will be equal to the value of the specified itemID.

if the itemID's value is negative, the Percent Trigger will default it to **0**, and if it is 100 or higher, it will be changed to **99**.

The Percent Trigger does **not** accept itemIDs that are timers.

### Add
If checked, this triggers percent value will be added to the current Attempt % instead of overriding it.

### Target itemID
When activated, the trigger copies the value of the Attempt % to the target itemID.

This is most useful for displaying progress, as the attempt progress bar is not visible in Platformer mode like it is in Classic.
