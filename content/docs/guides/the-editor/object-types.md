---
draft: false
authors:
  - illusion2
title: Object Types
weight: 1010
date: 2024-04-28T00:00:00.000Z
contributors:
  - sparktwee
  - illusion2
  - poryii
description: There are lots of object types in Geometry Dash, and this guide
  will go over them.
tags:
  - Grade 0
  - Basic Editor
seo:
  title: Every Type of Object in Geometry Dash
  description: Do you struggle to find objects in the Geometry Dash editor? This
    guide explains how to find them faster.
  canonical: ""
  noindex: false
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The Build Tab has 14 different tabs that contain lots of different object types.
- These object types can be divided into 6 categories that have different uses.
- Most objects can be put into general tilesets, especially blocks.
- Out of the 6 categories, Detail Objects contain the most objects.
- It’s easy to get intimidated by the amount of detail objects when you decorate, so take things slowly.

{{< /callout >}}

- - -

Objects are located in the tabs at the top of the heads-up display (HUD) bar.

{{< img src="https://lh3.googleusercontent.com/d/1qa5j3wmSR95lC03uT9Rx4URXPx96w7ys" >}}

# 1: Different Types of Objects

Objects fall into different categories. These categories all have unique properties and uses. Here is a list of them below:

* [Static Objects](/docs/guides/the-editor/static-objects/)
* [Gameplay Objects](/docs/guides/gameplay-1/gameplay-objects/)
* [Collectable Objects](/docs/guides/the-editor/collectable-objects/)
* [Animated Objects](/docs/guides/deco-1/animated-objects/)
* [Detail objects](/docs/guides/deco-1/detail-objects/)
* [Custom Objects](/docs/guides/the-editor/custom-objects-autobuild/)

You can check which category an object is in by turning on hitboxes or clicking on it while in the Build Tab, however you would need to at least understand the different types before you can use them sufficiently. You can get more information on each type of object by checking out their respective guides.

# 2: Blocks and Slabs

This is the first tab, and it consists of all objects that are used as block or slab details. Blocks are the square objects, and slabs are the shorter ones. There might be some slope details as well, however the majority of them appear in the slopes tab. Note that not all objects have hitboxes, so you would need to combine them with the outline objects, which are covered in the next section. There are also objects used for Autobuild, which you can find in the [Custom Objects & Autobuild](/docs/guides/the-editor/custom-objects-autobuild/) guide.

{{< img src="https://lh3.googleusercontent.com/d/1fUb0t-LwYFFapE0VTwBq2SuidFJX-P4Y" >}}

Most of the blocks are put into tilesets, which are basically a group of objects. Most tilesets include:

* 1 x 1 object: a lonely object that doesn’t have to be put into a tileset
* Edge object: goes along the edges of an object
* Corner object: goes in the corner of a structure
* Corner piece: goes inbetween two corners in order to connect them
* Base object: used on the inside of a structure
* Pillar head: used at the top of a pillar
* Pillar object: used as a pillar rather than two edge objects

  Some tilesets might differ from this, but most tilesets consist of those objects. You can see an example of a tileset in the grid objects above.

# 3: Outlines

This tab consists of outlines; they have mostly the same functions as the blocks in the first tab, except that they dont have any details inside of them. There are loads of outline variations: slab outlines, smaller block outlines, and slope outlines; they also come with different thicknesses. Some of these other outlines may have weird hitboxes, so keep that in mind.

{{< img src="https://lh3.googleusercontent.com/d/1BUm8cRZGtyreqQZOttV0xgEcQjaTbvQp" >}}

# 4: Slopes

The third tab consists of slope-related objects; it’s basically the first tab but for slopes. Slopes are divided into 45° slopes, and for some reason, 26.6° slopes. Remember that some of the slope textures might still be in the first tab.

{{< img src="https://lh3.googleusercontent.com/d/1VyZedVeVc64Y0jpYY2M1v2hTBhmw-60H" >}}

# 5: Hazards

**Hazards** are **static objects that kill the player**. This includes different types of spikes and ground spikes. There are obviously other hazards, like saws and monsters. However, they aren’t covered in this tab. Unlike blocks, these hazards come with a killing hitbox.

{{< img src="https://lh3.googleusercontent.com/d/1yTjX0DY5U2R2RnTG6tqtUeFDeRWTumiO" >}}

# 6: 3D Lines

**3D objects** are **pre-made objects meant to help your structures become 3D**. Most of the 3D objects come in tilesets that differ from the usual block tilesets. As detail objects, they don’t have a hitbox, so they can be used for art as well. Keep in mind that all the vanishing points of these objects are infinitely far away, which can break down some immersion. Perspective will be covered more in-depth in [Grade 2 guides](/docs/guides/deco-2/).


{{< img src="https://lh3.googleusercontent.com/d/1fwHzsXw9wraRV1pHgerikqm5BoIGfKdi" >}}

# 7: Orbs, Pads, and Portals

This tab features orbs, pads, portals, and some other miscellaneous gameplay objects. There are also some other miscellaneous objects like text objects here as well. Most of the objects here aren’t immediately self-explanatory, but they’re useful for making gameplay. For more info, check the [Gameplay Objects](/docs/guides/gameplay-1/gameplay-objects/) guide.

{{< img src="https://lh3.googleusercontent.com/d/1fPt43RAwMlEYD6mAfV-qrRWPeRLN8bTt" >}}

# 8: Animated Objects

Almost all of the animated objects are in this tab, such as 2.0 monsters, electricity, fire, particles, and pretty much anything you can think of. Most of these objects don’t have hitboxes, so keep that in mind if you want to use them as obstacles. There is a whole separate menu for animated objects, which you can find in the [Animated Objects](/docs/guides/deco-1/animated-objects/) guide.

{{< img src="https://lh3.googleusercontent.com/d/1fEgOrcVjrY3lm16Iu_roB7akg6H6My1W" >}}

# 9: Pixel Objects

This tab consists of almost ALL pixel-art objects, excluding some collectable pixel art objects. Most of them follow the usual tileset, and all of them are detail objects, meaning they don’t have a hitbox. Note that it’s hard to see what most of the pixel objects are when you're in the build tab because the base colors are nearly white.

{{< img src="https://lh3.googleusercontent.com/d/1hwHUUV_lKWuq7--PnOooX_0OLXf6b12p" >}}

# 10: Collectable Objects

Collectable objects are objects that you can collect in-game, like keys, coins, or various other objects, as well as, for some reason, some pixel art objects at the end of the tab. The basis of collectable objects is that when you walk over them, they disappear and activate something. More detail on these can be found in the [Collectable Objects](/docs/guides/the-editor/collectable-objects/) guide.

{{< img src="https://lh3.googleusercontent.com/d/1iaZ90mUS3I-R7XNRb-3MYdPnPfu8WtF_" >}}

# 11: Miscellaneous Objects

This tab consists of miscellaneous detail objects, like small circles, stars, and some other various details. Most of these objects are kind of random and don’t have anywhere else to be, so they’re in this tab; feel free to use them for whatever you want. Note that ALL of these objects are also usable in the particle editor object.

{{< img src="https://lh3.googleusercontent.com/d/1pLR5JsT_sGQXKd29cTP0RPo3CaaicP1C" >}}

# 12: Detail Objects

This tab is full of detail objects that you can use for decorating or any other purpose. It’s somewhat similar to the miscellaneous tab, where there are lots of unrelated objects, however they all share the same purpose as a detail object. At this point, you may have noticed that [detail objects](/docs/guides/deco-1/detail-objects/) as a category contains the most objects in the build tab. It’s easy to get intimidated by the sheer amount of them, so it’s ok to take your time exploring them.

{{< img src="https://lh3.googleusercontent.com/d/1gyITednOWOvQNnr-mN6839Wk2ffZ7P0z" >}}

# 13: Saws and Round Details

Saws and gears are another set of hazards. While this tab has plenty of saws to choose from, it also has detail objects that rotate. Most of these details help with air deco, but there are also objects at the end of the tab that pulse to the song.

{{< img src="https://lh3.googleusercontent.com/d/1gAx-_RQx4N8zYq-DsIMX5dE8jBvQqmBr" >}}

# 14: Triggers

This tab consists of basically every trigger in the game. ALL of these triggers are covered in [Triggers 1](/docs/guides/triggers-1/trigger-intro/).

{{< img src="https://lh3.googleusercontent.com/d/1VxerRkvB5OUH0F3qOGf1OIgFRTVM-IHs" >}}

# 15: Custom Tab

The custom tab allows you to combine lots of other objects into one singular custom asset. This can be used to simplify a lot of things, and also transfer things across levels. More information about the custom tab can be found in the [Custom Objects & Autobuild](/docs/guides/the-editor/custom-objects-autobuild/) guide.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1nDZgaiDYs0v0YZaLdZxv0q8Ckbr5d9Mu" >}}

{{< img src="https://lh3.googleusercontent.com/d/1US19udANEM-IlpjBjkTpeGOORF8qoK3O" >}}
{{< /img-grid >}}

{{< callout context="note" title="How the contents of this tab looks will depend on your saved assets." icon="outline/info-circle" >}}
{{< /callout >}}
