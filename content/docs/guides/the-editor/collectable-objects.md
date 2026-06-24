---
draft: false
authors:
  - naem.less
title: Collectable Objects
weight: 1110
date: 2024-01-12T00:00:00.000Z
contributors:
  - naem.less
  - notamoderatr
  - icefire100062
description: Collectables are interactive objects that have a lot of
  miscellaneous properties and interesting use cases. This guide will explain
  how to use them.
tags:
  - Grade 0
  - Advanced Editor
seo:
  title: How to Use Keys in Geometry Dash
  description: A full explanation of collectable objects in Geometry Dash, such as
    keys and coins.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- The properties and functions of all collectable items.
- How collectables can be used to make levels more interactive using counters.

{{< /callout >}}

** **

**Collectable items** are objects which players can collect by default, like keys or coins. Usually, when they are collected, they trigger an action. For instance, in Fingerdash the player must collect 10 small coins to receive a large one later on.

{{< youtube id=gd8KO_vD8jQ start=61 >}}

# 1: Properties

Collectable objects can be set to give the player points, [toggle](/docs/guides/triggers-1/toggle/) or [spawn](/docs/guides/triggers-1/spawn/) groups, or change the value of an [item ID](/docs/guides/triggers-1/pickup/#1-item-ids--pickup-trigger/). To edit the properties of a collectable, you need to click on the edit special button {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote">}}. This will bring up a menu with the following options:

**Pickup Item:** Lets you set an [Item ID](/docs/guides/triggers-1/pickup/#1-item-ids--pickup-trigger/) that the collectable affects. You specify the Item ID by typing one into the "Item ID" field. By default on collection the item id will increase by 1, but if you enable the “Sub Count” (Subtract Count) it will decrease by 1.

{{< youtube xEPtX2kVoRU >}}

**Toggle Trigger:** Enabling this option will make the collectable use the properties of a toggle trigger. This works similar to how the toggle trigger operates, you can select a group of objects in the “Group ID” box, this toggles said group on or off. The “Enable Group” function will toggle and spawn the group in the “Group ID” box at the same time. To properly spawn the group, set the trigger(s) to “Spawn Triggered” (Findable in the bottom left of the trigger(s) edit object page), if this option is not enabled the spawn cannot perform any actions.

{{< youtube dMBGEMf5nds >}}

**Particle:** Lets you customize the particles created when the object is collected. You must create a particle with the [Particle Editor](/docs/guides/deco-1/particle-system/), give that object a group, and enter that group into this field. Multiple particles can be activated at once.

**No Anim:** If you enable this option, the collectable will turn off its "floaty" animation, making it stay completely still.

**Points:** The value you set in here will increase the level’s “Points” value. This is only usable in platformer mode, as it has no effect in the classic levels. You can your total point count in the level’s pause menu (not playtesting, just playing the level), this is shown in the video below.

{{< youtube rHlKqZXz470 >}}

In the collectible tab you can also find the Silver Coin objects. Its edit special menu is different from the rest of the collectable objects, it has the same edit special menu as an [Animated Object](/docs/guides/deco-1/animated-objects/) would.

