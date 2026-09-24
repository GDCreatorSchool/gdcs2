---
draft: false
authors:
  - eyz
  - naem.less
title: Reverse & Arrow
weight: 3280
date: 2024-02-06T00:00:00.000Z
contributors:
  - eyz
  - naem.less
  - sparktwee
description: This guide explains how the Reverse & Arrow triggers work. The
  Reverse trigger lets you change the player's movement direction, while the
  Arrow trigger lets you change the direction of gravity.
tags:
  - Grade 1
  - Gameplay Triggers
seo:
  title: How to Use Reverse and Arrow Triggers in Geometry Dash
  description: Learn how Reverse and Arrow triggers change player direction and
    movement behavior in Geometry Dash gameplay.
  canonical: ""
  noindex: false
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The Reverse Trigger makes you go backwards, but it has the least uses if you need more complex sideways gameplay.
- The Reverse option in the Extras menu lets you change direction by using most orbs and pads.
- The Arrow trigger allows you to go in any direction, but you need to be mindful with setting up the channels and order.


{{< /callout >}}

- - -

# 1: Reverse Trigger

{{< img src="https://lh3.googleusercontent.com/d/1ckqDhwTumt2IHfk_9efgvfXlxElffrf7" >}}

{{< img src="images/GDEmotes/Triggers/Reverse.png" >}}

 This is probably one of the simplest triggers in the game. Just place it down and the player goes backwards. However, it might be too simple that it also borders on useless. For example, placing two reverse triggers like below won’t work properly if you want the rightmost trigger to activate first:

{{< img src="https://lh3.googleusercontent.com/d/1LZSQMhF_gTwSB8JmeVJg3vc2noc-tC9R" >}}

This is because the reverse trigger placed on the left activates first. While you can use the **Touch Triggered** option to make your gameplay, this will mess up the music playtest line unless you change the [trigger order](https://www.gdcreatorschool.com/docs/guides/the-editor/using-channels/#trigger-order) or use an arrow trigger to change the target channel, which will be explained in a later section.

{{< youtube cGpifgeiIX8 >}}

# 2: Reverse Option

Another way to change directions is enabling the **Reverse** option in the {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}} Edit Group tab’s extras menu. It makes jump pads & orbs switch the direction you're going in, with the only exceptions being Dash and Toggle orbs.

{{< img src="https://lh3.googleusercontent.com/d/1408NOQrNn0eCfnkc01mnL4J_IDOuqn69" >}}

Here's an example of this option being used in a level.

{{< youtube id="LhLE9MqU_SQ" start="24" >}}

*Keep in mind that both the Reverse trigger and option are useless in Platformer mode because you can freely move left and right as you please.*

# 3: Arrow Trigger

The Arrow trigger {{< img src="images/GDEmotes/Triggers/Arrow.png" class="emote" >}} allows you to go in any direction, not just in reverse. By changing its rotation you'll change the player’s direction.

*If there are multiple arrow triggers without target channels set, the ones with the smaller X or Y value get activated first. This changes based on the rotation of the arrow trigger.*

{{< img src="https://lh3.googleusercontent.com/d/1MkrmEwBHsSegAE9jQD88SqgrLUe8mnKx" >}}

The features include the following:

* **Edit Velocity:** Lets you edit the velocity when switching rotation.
* **VelModX / VelModY:** Multiplies the amount of force applied in X and Y axis after changing directions.
* **Override Velocity:** Sets the velocity instead of multiplying it.
* **Change Channel:** Changes the Channel to the number entered in the **Target Channel** box below. Only triggers set to this channel will activate after this trigger, unless you change the channel again. (This does not apply to triggers activated by {{< img src="images/GDEmotes/Triggers/Spawn.png" class="emote">}} a Spawn / condition trigger.)
* To **revert the channel change**, place another Arrow trigger, go to Edit Group, and set the channel in the bottom right corner to the one you entered in the first trigger. Once you do that, click the Edit Object button and set the Target Channel back to zero.

{{< youtube 8Z7hGnH-OwI >}}

* **Channel Only:** Only changes the Channel and keeps the same direction.
* **Instant Offset:** The camera updates instantly after changing directions.
* **Don’t Slide:** Stops the sliding effect when you rotate gameplay in platformer mode.

{{< youtube vdW8DkczH4o >}}

Additionally, you can replace a gravity portal with this trigger. However, it is less intuitive because it's invisible.

{{< youtube SQiCS1G5UwU >}}

# 4: Cool Gameplay Applications

## Offsetting Players in Dual Mode

By placing two purple jump pads next to each other, you can offset one of the icons, making the dual the more engaging and challenging. This was doable in Update 2.1, however it relied on a [bug](/docs/guides/gameplay-1/player-snap-bug/) to make it possible.

This exact thing was done multiple times in Badland Full Version by MusicSounds.

{{< youtube id="p4iYbmeWn9E" start="62" >}}

You can also go crazy with this gimmick just like in a later part of the same level.

{{< youtube id="p4iYbmeWn9E" start="136" >}}

## Going UP

By making the player go back and forth while guiding a camera to slowly go up, you can create some interesting gameplay. This was used twice in Toxic Surge by GiaMmix.

{{< youtube LhLE9MqU_SQ >}}
