---
draft: false
authors:
  - komatic5
title: How to Decorate
weight: 5001
date: 2024-07-19T00:00:00.000Z
contributors:
  - galofuf
  - komatic5
  - notamoderatr
  - poryii
description: Once you're familiar with the objects you use to decorate, and the
  types of details you can create with them, it's time to combine things to make
  entire levels filled with deco. This guide explains the process you should use
  to create deco parts, as well as the technical conventions people use to
  organize and classify their deco.
tags:
  - Grade 1
  - Deco Basics
seo:
  title: How To Decorate in Geometry Dash
  description: Are you struggling to decorate? This guide provides a full overview
    of everything you must know to get started.
  canonical: ""
  noindex: false
aliases:
  - Creating Decoration
---

{{< callout context="note" title="TLDR – What this guide covers" icon="outline/info-circle" >}}

- There are many types of decoration you can create; elements of deco are things like block designs and backgrounds, while styles are *how* you make those things.
- It's important to stay organized when decorating. Use the editor's features, like editor layers, z layers, colors, and triggers, to organize your level in a way that's comfortable for you.
- To actually decorate, start by getting a deco idea and references. Then use those references to come up with basic shapes and details for your deco. Finally, get feedback from other creators and repeat the process.

{{< /callout >}}

** **

**Decoration**, or deco, is the visuals you see when viewing a level. The deco made in Geometry Dash can range from restrained and simple, to flashy and complex.

However, learning how to decorate can be a very difficult process. This guide introduce you to that process, and give you the fundamental knowledge you need to decorate well.

# 1: Types of Deco

As mentioned before, deco is the visuals you see when viewing a level. However, there are *countless* variations to deco, so it helps to know what *types* of deco exist.

## Deco Elements

These are the common types of deco you'll learn to make. You don't need *every element* for every level, but it's useful to recognize them when you see them.

**Block Designs** are decoration that signifies platforms you can touch as part of gameplay. The point of block designs is to *make it clear where the level's gameplay is*.

An example of clear block designs is in the level Royal Roost Ruins by Glubfuberz. The blocks clearly stand out against the other decoration, making it clear where the gameplay is.

{{< youtube id="BmDUemwIJ-I" end=26 >}}

- Sometimes, other gameplay objects will be decorated too, such as spikes and orbs. Here, the spikes have some glow added to make them look more interesting.
- You can read more about block designs [here](/docs/guides/deco-1/making-blocks/).


The mountains behind the blocks in Royal Roost Ruins are part of the **Background**. These *fill up space behind the blocks* so the decoration can look more interesting.
- It's important for your background to "feel" different from your block designs. This way, players won't be confused about what's a gameplay object and what is not.
- **Foregrounds** also exist to *fill up space in front of blocks*. They aren't as common, but some levels make use of them. Here, some trees and rocks are intentionally darkened and used as foreground.
- You can read more about backgrounds [here](/docs/guides/deco-1/making-backgrounds/).


The arrows in the level are a form of **Air Deco**. While backgrounds fill space behind blocks and foregrounds fill space in front of them, air deco *fills space on the same layer as blocks*.
- Air deco comes in many forms. Particles are one such form, but creators often use arrows, connectors between blocks, and other decoration for the same purpose.
- You can find info on air deco [here](/docs/guides/deco-1/making-air-deco/).


When watching a video of this level, there are many parts of the deco that move, change shape, or change color. These are **Animations**, which *make levels feel alive* instead of static.
- Animation is a very common thing in decoration, since there are plenty of ways to go about it.
- Most animation techniques will use [animated objects](/docs/guides/deco-1/animated-objects/), or [triggers](/docs/guides/triggers-1/trigger-intro/) to work.
- You can find info on animations [here](/docs/guides/deco-1/making-animations/).


Some levels use animations with optical illusions to make neat decorations that wouldn't be possible otherwise. These are **Visual Effects**, and they often create crazy visuals because of their nature.
- Visual effects require a lot of technical knowledge. You must know how editor features like Z layers, blending, and opacity work innately.
- These effects often make use of triggers and the game's rendering quirks as well.
- You can find info on visual effects [here](/docs/guides/deco-1/making-effects/).

## Deco Styles

As mentioned before, you don't need every deco element in your levels. In fact, some creators choose to intentionally add or remove these elements as needed.

A **style** is simply an extension of that. A decoration style is *how you make a piece of deco*. These include aspects like how detailed your deco is, if you use certain shapes, and so on.

You'll learn plenty about styles in future guides. For now, it helps to recognize some of the most basic *genres* of level you'll see:


**Classic Design** levels use the game's objects as-is. They typically don't create custom assets from the game's objects, but try to use the existing objects in smart ways.

{{< youtube B1QEuwagoGw >}}

{{< youtube lPoggVWbZbg >}}


**Custom Art** levels use the game's objects to create new, custom assets. This leads to more varied levels, but is harder to do.

{{< youtube mgzTHUKATqo >}}

{{< youtube tI_xHDnj3I4 >}}

There are many subgenres in the game as well, such as Modern, Glow, and Effect levels. However, this is purely an aesthetic choice, so don't get too worried about choosing a style yet.

The upcoming guides will ensure you have the skills necessary to decorate in any style you want.

# 2: Organizing Your Deco

Since decoration is so complex, it helps to remain organized and comfortable when making it. Here are some of the important ways that creators stay organized when decorating.

## Editor Layers

Editor layers organize how you select objects. You have lots of freedom with how you organize objects using these, but here are my recommendations.

- Use **one editor layer for each type of major shape or detail**. For example, you may put your main structure shape on Layer 1, then add some segments inside it on Layer 2, and then some further details on Layers 3-5.
- **Complex deco may require more layers**, so feel free to use as many as necessary. In general, if it takes more than 20 seconds to select a specific object on a layer, you may need to use more editor layers.
- As you get more comfortable with layers, you may want to **document which editor layers you use**, and use editor Layer 2 to group layers together. This can help with organization since you can see entire segments of decoration (such as the blocks) without everything else getting in the way too.

Here is an example video from And Ever by Galofuf, showing how he organized his objects into layers.

{{< youtube i2W1eLXuaPI >}}

## Z Layers & Z Order

Z Layers and Z Order control what objects show on top of others. This is explained more in [this guide](/docs/guides/the-editor/editing-objects).

As before, you have a lot of freedom with how you organize objects, but experienced creators typically follow some of these guidelines.

- Use **one Z Layer** for each deco element. For example, you may put blocks on layer T1, a custom background on layer B1, and so on.
- **Complex deco will use more Z layers** for everything; for example, a background may be from B5-B3, blocks from B2-T1, and so on.
- **Make sure your deco doesn't overlap!** It looks very weird if parts of your background show up above objects in your blocks, because your background uses B2-T1 and your blocks use T1.
- Be aware of how [tilesets and blending colors](/docs/guides/the-editor/editing-objects/#tilesets) work, especially when using animated objects and particles. These can complicate your layers a lot otherwise.
- When using Z Order, try to **leave gaps of 3-5 orders between objects**. For instance, if the base of a block is on T1 with order 5, your first details should be on T1 with order 10, then the next on T1 with order 15, and so on. This makes it much easier to adjust your deco later.

Although Z Order and Z Layer are quite similar, they have many differences too. Z Order is a more precise version of Z Layer, where you can adjust the layering of objects even if they're on the same Z Layer. Think about it Like this: I have several objects in the background of my level, and my background is on Z Layer B5. By using Z Order, I can layer the objects in the background even when they're on the same Z Layer. This helps you organize your decoration between the base and the details, on just one Z Layer, especially if you have a lot of things in your level going on.

Editor and Z layers are best seen in the actual editor, so I strongly recommend opening up actual levels to see how other creators use these. In addition, here is another example from Galofuf's work where the objects are on T1. Each number shows the Z Order of the object it points to.

{{< img src="https://lh3.googleusercontent.com/d/1Gca5UsozBUx-Ujaw7ArsCCU-H_RtjflI" >}}

## Color Channels

Color Channels are another resource you should organize. These are explained in the [Using Channels](/docs/guides/the-editor/using-channels/) guide, but as before, creators often follow certain guidelines when using them.

- **Set aside some channels for special colors.** For instance, many creators use either Color 1 or 2 for pure black. I personally use 1 for pure white, 2 for pure black, and 3 for black with blending (which is invisible).
- **Know how to find colors you need.** You don't need to organize every single color like how you use Z Layers & Z Order, but you should know how to find colors you use frequently in a level. I personally will scroll through the custom color list until I find one that looks good enough for my needs; if I don't find one, I'll use a new channel or the HSV button.
- **Use plenty of color channels.** Unless you're limited to using a few color channels (such as when you're in a collab), it helps to use plenty of color channels. Keep in mind that changing the color of one channel changes the color of *every object* with that channel.

## Triggers

You'll likely use plenty of triggers when decorating. As such, it's important to know how to organize them. Here are some tips I follow:

- Place triggers on the **same editor layer** as the decoration they affect. This makes it easy to select the right triggers when you need to add or change animations.
- Try to **organize triggers based on group ID** – for instance, sorting them in ascending order.
- **Don't put triggers in the same editor space** as decoration. This makes it a lot easier to select *just* triggers or *just* deco when building.

## Editor Settings

The final thing you should know how to use are editor settings. Many editor settings can help you to create faster, or enable creating at all.

These settings can be accessed on the main editor screen by pressing the “Esc” button or by clicking the {{< img class="emote" src="images/GDEmotes/Buttons/Pause.png" >}} pause button in the top right corner:

- **Hide Invisible**: Makes all objects with the “Hide” option enabled invisible.
- **Preview Mode**: Changes the editor to look more like how everything is displayed normally is. When disabled, all objects are shown regardless of opacity or if they are toggled and all objects are colored based on what color channel they are on instead of the color of the color channel itself.
- **Preview Animations**: Plays animations while in the editor for animated objects.
- **Preview Particles**: Animates particles from the custom particle system.
- **Preview Shaders**: Enables shaders to be rendered in the editor.

These settings can be found by clicking the {{< img class="emote" src="images/GDEmotes/Buttons/Settings.png" >}} in the top right of the pause menu of the editor:

- **Enable Link Controls**: Allows you to link objects together, which means they will be selected and deleted together when one object in the link is selected/deleted. Linking objects and combining it with an “Area Parent” object can allow object movement to be linked in Area triggers.

# 3: How To Decorate

After all the previous steps, the last is to figure out how to make the deco itself. There are many caveats and additional details you'll learn in future guides, but the general workflow is as follows.

1. **Define your deco ideas.** These may be ideas for a whole part, a specific block design, or a specific section of a block design.

Ideas are the first step of decorating. Without knowing *what* you want to make, it's hard to decide *how* you'll make it.

If you're unfamiliar, you should read the [guide on making ideas](/docs/guides/main-skills/getting-ideas).

In this example, my idea was to recreate a block from the level Azimuth by Knots, and put my own spin on it.

2. Get **inspiration and reference images** to help you create your deco.

It's *very difficult* to make an idea completely from scratch. You may have an idea in your head, but keeping that image while trying to decorate can be very difficult.

That's why references and inspiration are so helpful. Inspiration helps you think of ideas you could include in your deco, while references are images you rely on when learning how to make a detail.

It helps to read the [guide on inspiration](/docs/guides/main-skills/getting-inspired) if you're unfamiliar. Reference images will be covered in a [later guide](/docs/guides/deco-1/creating-details).

In this example, my inspiration source *and* reference was this screenshot from the level Azimuth.

{{< img src="https://lh3.googleusercontent.com/d/1fqw0nfPsjA4A_i4hmJ-yIDbBueSvCJA7" >}}

3. Create the **basic shapes and colors** for your deco ideas.

It's tempting to start working on details first, but that is risky. It helps to create the basic shapes and colors for your deco first. That way, your details will have a good foundation to stand on.

Think of this like making a house. You can't get started on buying furniture before the foundations and structure of the house are set up. Otherwise, your furniture might not fit in the rooms – or worse yet, the house might collapse completely.

Making basic shapes is covered in a [later guide](/docs/guides/deco-1/fill-1) – in fact, there are [two of them](/docs/guides/deco-1/fill-2). For now, I used squares as my basic shapes, and used a few shades of blue for the basic colors.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1Ic1gsaww1OHriOFQxsBp5iLyI4x0l77k" >}}

{{< img src="https://lh3.googleusercontent.com/d/1BWEAPLJ5LVklUoMMasEPpeBaKnGHykzv" >}}

{{< /img-grid >}}

4. Create **details and complexity** for your deco.

With your foundation set up, it's finally time to add details. Details are just additional features of your deco, like new shapes, colors, and textures. They usually fit inside the foundation, meaning you'll have plenty of small, intricate shapes to manage.

Details will be covered more in a [later guide](/docs/guides/deco-1/creating-details). For now, try not to go overboard; adding too many details to a small place can make it messy.

Here, I included some bright sections as details. They're smaller than the full block, but that helps make it more intricate.

{{< img src="https://lh3.googleusercontent.com/d/1AgIyP3vu7MQxIviqlTNIszn_LmwILybj" >}}

5. Get **feedback** on your work and use it to *repeat the process*.

It helps *a lot* to get other people's input when making things. Other creators will think of details and ideas you didn't think of, and show you techniques that you may not know.

While it can feel embarassing to show your deco for the first time, note that everyone goes through this, and don't feel bad about making something you aren't fully proud of.

After all, this step involves going back to the beginning. Use the ideas, feedback, and inspiration others give to come up with new shapes and details for your deco. This way, you can refine your work and make a product you're truly proud of.

Here, I added additional detail to the sections that I already made.

{{< img src="https://lh3.googleusercontent.com/d/1b2xOtOMAHIWMS5-QzptJ87lEVArPCi_C" >}}

I then refined the details more by including some gradients, which gives them some more variety.

{{< img src="https://lh3.googleusercontent.com/d/1w7PI5_TZm8q97tWc5HK4fG7eRq7G5fUl" >}}

Finally, I added some details to the rest of the block; that way I could make something that felt more like *my own* deco instead of just copying Azimuth.

{{< img src="https://lh3.googleusercontent.com/d/1c5X6FL8Ef6TdtlA4SNBhJNwmYgeuuPpc" >}}

** **

**Video:**

{{< youtube 3ofZI82lKQ8 >}}
