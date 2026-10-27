---
draft: false
authors:
  - poryii
contributors:
  - poryii
  - azgamezyt
title: Helper Tools
weight: 1110
date: 2026-10-21T00:00:00.000Z
description: With the new 2.209 update, RobTop added several new tools that you can use in the editor. These include the Visibility tab, the Grid tab, the View tab, and the Helper tab. This guide will explain their usage, purposes, and how to best utilize them to their full potential.
tags:
  - Grade 0
  - Advanced Editor
seo:
  title: How to Use the Visibility, Grid, View and Helper tabs in Geometry Dash.
  description: null
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
* The Visibility tab lets you hide the editor interface.
* The Grid tab gives you the ability to modify the grid size.
* The View tab shows options for changing what visuals are shown.
* The Helper tab enables the use of auxiliary tools to speed up creation.
{{< /callout >}}

# 1. Visibility Tab

**The Visibility tab allows you to hide the Editor's UI and interface**, so you can get a clear look at your own level inside the editor. Since it removes all menus on your screen, you are able to see the level the way a normal player would see it when they play the level. It also allows you to take clear screenshots without any visual obstructions, or to spot any defects there may be in your level.

Below are two images of the editor with and without the visibility tab option turned on. If you are on PC, you can also activate it by pressing Tab.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1tSoGw22tKe8b8NZPC85A9b2NMIU9BSY0" >}}

{{< img src="https://lh3.googleusercontent.com/d/1N-cAUINsrkgvHmN1vBW-B1bFLHN08Ycu" >}}
{{< /img-grid >}}

# 2. Grid Tab

**The Grid tab allows you to change the size of the grid in the editor**. You may be thinking, "Well, isn't that kind of useless? Compared to the Visibility tab, the Grid tab doesn't really do much!" You'd be right, if not for these factors.

With Grid Snap enabled, **anything you move freely will automatically snap to the center of the nearest grid square**. Adjusting the grid size with the Grid tab changes the snapping precision, enabling you to lock objects cleanly to your desired grid spaces. It also modifies the distance objects move, as the scale of movement is proportional to the grid size.

An example of this is separating triggers from each other to make them more organized. It also provides a clearer reference if you are trying to make objects bigger or smaller.

Additionally, this feature is particularly useful when working with different decorative details, as certain grid sizes may serve as better references. When creating small details in a block design, you can make the grid size smaller so you can line everything up as smoothly as possible. On the other hand, if you are creating a large background, a bigger grid size might be better so you can see everything more clearly and use larger reference points, similar to the grid method used in portrait drawing

You can use Shift+G to toggle your custom grid size, Ctrl+G to swap between them, or simply click the "Grid" button to adjust it.

{{< youtube YCXkqCEfpwY >}}

# 3. View Tab

The View tab is a new feature in the 2.209 update that was put alongside the main editor tools, Build, Edit, and Delete. Prior to this update, players were forced to go to the pause menu, enable their desired option, and then unpause. Some of the features of the View tab didn't exist before 2.209. Now, the View tab allows you to turn on and off many visual settings, like making Shader effects visible or off, turning the grid on or off, Ignore Damage, or LDM at your will.

Most options that were previously in the pause menu are located here now. If you can't find an option, such as Select Filter, it's probably relocated here now.

Here is an image of the new View Tab:

{{< img src="https://lh3.googleusercontent.com/d/1NL3O7U3qQ1JROgPTFxFvYpfJ7iGXoPDK" >}}

The list of options here is:

* **Preview Mode:** Preview the level as you would see it in-game when you are playing it.
* **Hitbox:** Shows hitboxes of objects.
* **Hide Invis:** Toggles on or off showing objects with the "Hide" option enabled in Edit Group -> Extra.
* **LDM:** Preview the level how you would see it in-game with Low-Detail Mode.
* **Anims:** Toggles on/off animations of objects in the animated tab.
* **Particle:** Toggles on/off previewing particle objects in the editor.
* **Shader:** Toggles on/off previewing shaders in the editor.
* **Ground:** Shows/Hides the ground.
* **O Info**: Shows/Hides object information when selecting them.
* **Grid:** Toggles on/off the editor grid.
* **Select Filter:** Toggles on/off the select filter option, allowing you to select certain objects.
* **Ignore Damage:** Ignores deaths during playtesting in the editor.
* **Effect Lines:** Toggles on/off trigger lines that show when it will occur.
* **Dur Lines:** Toggles on/off trigger lines that show the duration of the trigger.
* **Song Lines:** Shows/Hides lines you make yourself in Custom Song Selection -> Create Lines.
* **BPM Lines:** Shows/Hides lines made from the BPM trigger.
* **Local Markers:** Shows/Hides where you have died in the level.
* **Global Markers:** Shows/Hides where everyone has died in the level.
* **Marker Labels:** Shows/Hides the number of times someone has died there.
* **Trace In:** Traces the trigger that activates/affects the selected object.
* **Trace Out:** Traces the objects that the trigger activates/affects; the opposite of Trace In.

Here is a video showcasing these options:

{{< youtube Jpp53xs6kZ4 >}}

Here is a video showcasing Death Markers:

{{< youtube jUrzbceaC6o >}}

# 4. Helper Tab

The Helper Tab holds buttons that were previously in the Pause Menu prior to the 2.209 update. Options such as Build Helper, Select All, Copy + Color, Reset Unused, and Select All Left are all relocated here. It should also be noted that several creators have not known that you can actually scroll down in this tab, revealing more options. The buttons all have identical functions as they did before. Try experimenting with them if you haven't already.

{{< img src="https://lh3.googleusercontent.com/d/1giHyQEabmYcDiHhoXN2yDs04ZL1oEqzD" >}}

The list of options here is:

* **Regroup:** Assigns existing triggers the lowest next free group.
* **Build Helper:** Assigns the next free group IDs when copying a trigger setup.
* **Create Loop:** Quickly sets up a spawn loop for your trigger setup.
* **Create Gradient:** Quickly sets up a gradient with vertex mode and assigns group IDs for the corners of the gradient.
* **Align X:** Equally distributes selected objects horizontally.
* **Align Y:** Equally distributes selected objects vertically.
* **Distribute X:** Evenly distributes selected objects on the X axis with the same spacing.
* **Distribute Y:** Evenly distributes selected objects on the Y axis with the same spacing.
* **Select All:** Selects every object in the current layer; can be used with Select Filter option in the Delete tab.
* **Select All Left:** Selects every object in the current layer, but only to the left of the editor; can be used with Select Filter option in the Delete tab.
* **Select All Right:** Selects every object in the current layer, but only to the right of the editor; can be used with the Select Filter option in the Delete tab.
* **New Group X:** For multiple groups, new IDs are ordered horizontally, from least to greatest (Left to right).
* **New Group Y:** For multiple groups, new IDs are ordered vertically, from greatest to least (Top to bottom).
* **Copy + Color:** Copies an object while saving its color; good for transferring assets over to other levels.
* **Paste + Color:** Pastes an object keeping its color using the next available Color channels.
* **Create Extras:** Adds extra details for certain objects such as filling in the 2.1 rock objects.
* **Unlock Layers:** Unlocks every locked layer at once.
* **Reset Unused:** Resets every color channel that is not targeting an object to white. (Unused color channels)
* **Uncheck Portals:** Removes the lines that mark a game mode portal’s border when you enable the "Preview" option in the edit group.

Here is a video showcasing the Helper tab:

{{< youtube Jpp53xs6kZ4 >}}
