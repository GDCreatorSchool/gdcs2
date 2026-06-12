---
draft: false
authors:
  - delts1550
title: UI & Link Visible
weight: 3470
date: 2024-01-21T00:00:00.000Z
contributors:
  - delts1550
  - eyz
  - komatic5
description: This guide explains how the UI and the Link Visible triggers work.
  The UI trigger helps you create a UI for your level and the Link Visible
  trigger forces objects to always render.
tags:
  - Grade 1
  - Effect Triggers
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- The UI Trigger lets you create a UI that stays on screen at all times.
- The Link Visible Trigger lets you force objects in a group to always render.

{{< /callout >}}

** **

# 1: UI Trigger

The UI Trigger allows you to keep objects on screen at all times. This also means that any objects in the UI will not have a hitbox, so they cannot be used as center objects for triggers like :Rotate: and :GradientTrigger:. The camera guide is a good object to center your UI around as it tells you what is visible on the screen when playing.

{{< img src="https://lh3.googleusercontent.com/d/1IpF-Y98S5wLBUKExt4zLr8XP4IJ6Uo9D" >}}

The green box represents the size of your UI; anything outside of this box will not be visible.

{{< youtube 74DF2dxxiAI >}}

## Relative

The UI used in the video does not consider devices with different aspect ratios. The inner box represents the typical 4:3 aspect ratio while the outer box represents the aspect ratio of your device. To accommodate for this issue there is an option to select “relative” in the UI trigger.

{{< youtube wuCN5dIv28k >}}

In the video above, you can see that using the relative option on multiple objects in a group spaces it out. To fix it you need to add a single-object parent group ID in the center of the objects, the parent ID must match the ID of the objects. You can create a parent ID by selecting the P icon after entering the group ID.

## Extra Options

If you ever want the objects in your UI to be oriented in a certain way automatically, you can select that option under the XRef and YRef as shown in the video.

For XRef, if “Center” is selected it will orientate the object in the center of the UI relative to the x-axis, the same rule applies for selecting “Left” and “Right”.

YRef works similarly to XRef but only orientates objects on the y-axis and has slightly different options, that being “Bottom” and “Top”.

For Auto, the object is orientated based on the camera’s edge of the “UI Target Object.”

{{< youtube WCXNZvePguc >}}

Here is a practical example of how a UI could look.

{{< youtube TzCJ2NvaLEs >}}

# 2: Link Visible

The Link Visible Trigger is useful if you need to render an object regardless of its location.

For this to work you must have an object that can be rendered at all times acting as a reference such as a basic block, and the object you are trying to render. In my example, I used a scaled-up basic block. As long as one object in the group is rendered, all of them will be.

> **Note:** All of the objects must be under the same group ID.

{{< youtube XIAXrFaaOuc >}}

The scaled-up object will remain rendered until the reference block goes off the screen. You can add more reference blocks to continue rendering the scaled object. __Once the trigger is activated it cannot be stopped.__

