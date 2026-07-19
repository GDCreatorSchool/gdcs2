---
draft: false
authors:
  - komatic5
title: Optimizing
weight: 5130
date: 2023-06-26T00:00:00.000Z
contributors:
  - creeperiv
  - komatic5
  - v1ewsh0t
description: Optimization, like simplification, is an important way to make your decoration efficient. Unlike simplification, its main goal is to keep your levels as accessible as possible. This guide explains the process you should use to optimize your levels.
tags:
  - Grade 1
  - Deco Skills
---


{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Optimizing refers to reducing the amount of objects used without affecting appearance, important for creating less lag when playing levels.
- Some important efficiency skills to include are overlapping objects, using scaling (scalehacks), and using certain object archetypes to achieve something in a conservative manner.
- Reducing objects can be done by creating a second copy of any group of objects that need to be optimize and using efficiency skills to reduce object count.

{{< /callout >}}

** **

**Object Efficiency**, or **Optimization**, refers to decreasing the object count while keeping the visuals the same. This is important because poor optimization can often make levels far more difficult to play, and much more laggy. In this guide, we'll go over how you can optimize your decoration.

# 1: Efficiency Skills

There are many techniques you can use to make your object use more efficient.

## Overlapping

Removing **Overlapping** objects is usually the easiest way to optimize. You simply delete objects which are fully covered by others. This works best on decoration that utilizes many layers.

{{< img src="https://lh3.googleusercontent.com/d/1Lge92lAIYBDXYsGVR-ylEOvxTaoF1Leh" >}}

## Scaling

**Scaling** is another simple way to reduce object counts. By making one object take up more space, you can use far fewer objects to fill in a space. In order to do this, you can use the warp function introduced in update 2.2, but keep in mind that warping an object too much may cause it to bug out.

{{< img src="https://lh3.googleusercontent.com/d/1JGbw0hMG0e2TSnwFLWCSPcUMb56QhSRF" >}}

{{< callout context="caution" title="Warning: GD renders large objects differently depending on their hitboxes. Be careful with this because it can cause visual errors." icon="outline/info-circle" >}}
Note: This can be remedied by enabling NoTouch to remove the hitbox.
{{< /callout >}}

## Object Types

**Object Types** are the strongest way to efficiently optimize, although using them requires experience. Essentially, some objects can be sufficient to maintain similar quality with far lower object counts. These objects will depend on what you’re trying to do with the objects.

{{< img src="https://lh3.googleusercontent.com/d/1cTddEgtJ9tYvgeYDakYHuqbyIewQFait" >}}

For example, you can get away with using the wood objects in the 1st and 9th tabs instead making your own custom wood. In general, be aware that custom assets will always be more inefficient than using default objects, which include things like custom curves.

{{< callout context="caution" title="Warning: Layer Issues" icon="outline/info-circle" >}}
Certain objects have different priority when it comes to layering, no matter what z order you set it to. You can check this by looking at the number next to the "Z Layer" text. The lower the number, the higher the priority. This means, objects with priority 0 will always be above objects with priority 8 if both are on the same Z layer.

(The priority is due to which spritesheet the object is located on.)
{{< /callout >}}

# 2: Reducing Objects

This is an algorithm which lets you reduce object counts without affecting the overall look of the deco. If applied properly, you can use half or even one-third of the prior objects, without impacting the visuals much at all.

1. Make two copies of the deco you want to optimize. Unlink all of the objects if necessary.

2. Using the “All” layer, remove all objects that don’t show up above others.

3. Disable Preview Mode and go through each layer. Use scaling and object types to reduce object counts for filled-in shapes.

Note that this works significantly better if you use a lot of Editor layers. This will help you stay organized and makes the layering task less tedious.

Here is an example of this process. This video shows all of the efficiency techniques, as well as the object reduction algorithm.

{{< youtube NMwzuKoi3Nk >}}
