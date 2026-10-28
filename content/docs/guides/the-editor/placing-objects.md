---
draft: false
authors:
  - komatic5
title: Creating Basics
weight: 1000
date: 2023-03-20T00:00:00.000Z
contributors:
  - komatic5
description: Welcome to the first Editor guide! Here, we’ll show you how to
  place objects, remove them, and navigate the editor.
tags:
  - Grade 0
  - Basic Editor
seo:
  title: How to Use the Geometry Dash Editor
  description: How to use Geometry Dash's level editor, going over how to navigate
    the editor, and the build, edit, and delete tabs.
  canonical: placing-objects
  noindex: false
---

{{< callout context="caution" title="Some emojis are outdated or missing" icon="alert-triangle" >}}

- The emojis for the Build, Edit, and Delete tabs are outdated as of update 2.209, so keep in mind that these icons are different in-game.
- Some emojis for the View tab are missing.

{{< /callout >}}

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Click and drag in the editor to move around.
- Use the Build tab to place objects, the Edit tab to edit objects, and the Delete tab to remove them.

{{< /callout >}}

** **

**If you've ever been confused by the Geometry Dash level editor, you're not alone.** The editor looks quite complex on first glance, but it is a lot simpler than you think. All levels are made of objects, and the level editor lets you place, edit, and delete them.

**Here, you will learn how to navigate the editor and accomplish those basic tasks.** In future guides, you will learn more complex ways to place, edit, and delete objects.

{{< callout context="tip" title="Tip: Practice while reading" icon="outline/rocket" >}}

Try opening the GD editor and following along while you read this guide. You'll learn much faster that way!
{{< /callout >}}

# 1: Navigation

When you first open the editor you'll see buttons all around the screen, and an open space in the middle. While this may feel overwhelming, it is much simpler than you think.

First, start by moving around your level. Simply **click and drag** in the open space to move around your level. This is the most basic thing you'll do in the game, but it quickly gets more complex as you'll see soon.

At the **top** of the screen, you'll see a **slider** with a **circular {{< img src="images/GDEmotes/Buttons/Flip.png" class="emote">}}** button. Use this to move around your level quickly. The slider is quite useful when making long levels, since it gets faster the longer your level gets.

On the **left side** of the screen, you'll see these {{< img src="images/GDEmotes/Buttons/ZoomIn.png" class="emote">}}{{< img src="images/GDEmotes/Buttons/ZoomOut.png" class="emote">}} buttons. These are the **Zoom** buttons, which let you see more (or less) of your level at once. Zoom out move around faster, and zoom in to fine-tune your location.

{{< youtube MepeaDa8tM0 >}}

# 2: The Build Tab

{{< img src="images/GDEmotes/Buttons/BuildTab.png" class="largeemote">}} The **Build** tab is where you can find and place objects. To place an object, *click on its button* in the Build tab, then *click* anywhere in the open space.

Once you place an object, it will be **selected**. Any changes you make in other tabs, such as the Edit tab, will *only apply to objects you have selected*. You can use the {{< img src="images/GDEmotes/Buttons/DeSelect.png" class="emote">}} **De-Select** button to stop selecting an object.

{{< callout context="" title="Fun Fact" icon="outline/info-circle" >}}

If you click on an object while in the Build tab, the tab will **show you where to find that object again**.

Doing this while the object is **selected** lets you *copy its properties*, such as its size and color, when placing a new one.
{{< /callout >}}

{{< youtube BS2FuhxDZ6Y >}}

**Objects are organized into many tabs**, which you’ll learn about later. If you want to find a specific object, decide what [category](/docs/guides/the-editor/object-types) it goes in, such as blocks or spikes, then try searching for it in that tab.

But what if you want to place many objects at once?

If you want to do that, look in the *bottom-right corner* of your editor, and find the {{< img src="images/GDEmotes/Buttons/Swipe.png" class="emote">}} **Swipe** button. While you're in the Build tab, this lets you **click and drag** to place lots of objects on the grid.

{{< callout context="caution" title="Caution: Swipe and Navigation" icon="outline/alert-triangle" >}}

While **Swipe** is enabled, clicking and dragging will **not** move you around the editor. You must use the slider to get around, or **disable Swipe** by clicking on it again.
{{< /callout >}}

{{< youtube Z2RrqbYK-v8 >}}

# 3: The Edit Tab

{{< img src="images/GDEmotes/Buttons/EditTab.png" class="largeemote">}} The **Edit** tab is where you can change an object’s location, size, and rotation. You must **select** objects before you can edit these properties.

To **select** objects, either *place a new one* from the Build tab, or *click on an existing one* while in the Edit tab. If you want to **select multiple objects**, click on the {{< img src="images/GDEmotes/Buttons/Swipe.png" class="emote">}} **Swipe** button.

As before, use the {{< img src="images/GDEmotes/Buttons/DeSelect.png" class="emote">}} **De-Select** button to de-select every object.

{{< youtube v_dmm_C2-iQ >}}

After selecting objects, you can change their properties as follows:

## Moving Objects

The {{< img src="images/GDEmotes/Buttons/EditTabArrow.png" class="emote">}} arrows in this tab determine how far an object will move when the movement arrows are clicked. The movement arrows surround a number, which displays how far an object will move. Here are the arrow buttons you'll probably be using the most:

- {{< img src="images/GDEmotes/Buttons/EditTabDoubleArrow.png" class="emote">}} The **double arrow** (WASD) moves objects by **1 grid space**.
- {{< img src="images/GDEmotes/Buttons/EditTabTripleArrow.png" class="emote">}} The **triple arrow** moves objects by **5 grid spaces**.
- {{< img src="images/GDEmotes/Buttons/EditTabSubArrow.png" class="emote">}} The **leftmost split arrow** moves objects by **1/2 of a grid space**.
- {{< img src="images/GDEmotes/Buttons/EditTabArrowYellow.png" class="emote">}} The **leftmost yellow arrow** (Shift + WASD) moves objects by **1/15th of a grid space**.

You can find out about the rest of the movement options in [this guide](/docs/guides/the-editor/transforming-objects/#1-arrow-buttons) once you feel ready to explore this area of the editor more.

In the **bottom right** of the editor, you can find the {{< img src="images/GDEmotes/Buttons/FreeMove.png" class="emote">}} **Free Move** and {{< img src="images/GDEmotes/Buttons/Snap.png" class="emote">}} **Snap** buttons.
- The {{< img src="images/GDEmotes/Buttons/FreeMove.png" class="emote">}} **Free Move** button lets you *drag objects* to new places on the screen.
- While using **Free Move**,  the {{< img src="images/GDEmotes/Buttons/Snap.png" class="emote">}} **Snap** button lets you *snap those objects to the grid*.

## Rotating and Flipping Objects

- {{< img src="images/GDEmotes/Buttons/RotateCW.png" class="emote">}} {{< img src="images/GDEmotes/Buttons/RotateCCW.png" class="emote">}} The **rotate buttons** rotate objects by 90 degrees, either *clockwise* or *counter-clockwise*.

- {{< img src="images/GDEmotes/Buttons/Rotate45CW.png" class="emote">}} {{< img src="images/GDEmotes/Buttons/Rotate45CCW.png" class="emote">}} The **45 degree rotate buttons** rotate objects by 45 degrees.

- {{< img src="images/GDEmotes/Buttons/FreeRotate.png" class="emote">}} The **Free Rotate** button lets you rotate objects by *any amount of degrees*.

- {{< img src="images/GDEmotes/Buttons/SnapRotate.png" class="emote">}} When *placing an object near a slope*, you can use the **Snap Rotate** button to snap the object's rotation with the slope.

- {{< img src="images/GDEmotes/Buttons/Flip.png" class="emote">}} {{< img src="images/GDEmotes/Buttons/FlipY.png" class="emote">}} The **flip buttons** let you flip objects horizontally or vertically.

- In the **bottom right** of the editor, you can find the {{< img src="images/GDEmotes/Buttons/RotateButton.png" class="emote">}} **Rotate** button. This is identical to the {{< img src="images/GDEmotes/Buttons/FreeRotate.png" class="emote">}} **Free Rotate** button.

## Scaling Objects

- {{< img src="images/GDEmotes/Buttons/ScaleButton.png" class="emote">}} Use the **scale button** to change an object's size. Objects can have any size between `0.25` and `4`.

- {{< img src="images/GDEmotes/Buttons/ScaleXY.png" class="emote">}} Use the **scale XY button** to squash or stretch an object. You can make an object's X or Y scale anything between `0.25` and `4`.

- {{< img src="images/GDEmotes/Buttons/Warp.png" class="emote">}} Use the **warp button** to change an object's size and skew. Unlike scaling, there is no size limit here. This is explained more in the [Transforming Objects](/docs/guides/the-editor/transforming-objects/#4-warp--scale-buttons) guide.

{{< youtube KQF2t2wYFaU >}}

# 4: The Delete Tab

{{< img src="images/GDEmotes/Buttons/DeleteTab.png" class="largeemote">}} This is where you can remove objects you don’t want. **Click on any object** to delete it instantly.

{{< img src="images/GDEmotes/Buttons/Delete.png" class="emote">}} You can use the **trash** button to delete any objects you have selected.

While in this tab, the {{< img src="images/GDEmotes/Buttons/Swipe.png" class="emote">}} **Swipe** button lets you **delete many objects** by *clicking and dragging*.

The other buttons in this tab let you *filter what objects you delete* based on their properties. This is explained in more detail [in this guide](/docs/guides/the-editor/organizing-objects/#2-select-filter).

{{< youtube XzBn1lW2eXo >}}

# 5: The View Tab

This tab houses different settings that affect how you view the editor. You can enable or disable these settings for visual clarity, playtesting, or other purposes. **They do *not* change the level's appearance when playing said level outside of the editor.** For now, the most useful settings for you will likely be:
- {{< img src="images/GDEmotes/Buttons/DamageOff.png" class="emote">}}  **Ignore Damage**: Allows you to playtest your level in the editor **without fear of crashing**. This option can also be toggled in the pause menu while playing outside of the editor.
- **Hitbox**: Allows you to toggle the **internal hitboxes** of your level.
- **Ground**: Allows you to toggle the **ground** of your level in the editor.

If you'd like to know more, this tab is explained in detail in the {{< img src="images/GDEmotes/CustomGuideIcons/TheEditor/helper-tools.png" class="emote">}} [Helper Tools](/docs/guides/the-editor/helper-tools/#3-view-tab) guide.

{{< youtube ZbzPyO53O2M >}}

# Wrap-Up

With this guide complete, you should now understand the basics of navigating the Geometry Dash level editor. In the next guide, you'll learn how to edit more object properties, such as their *colors*.
