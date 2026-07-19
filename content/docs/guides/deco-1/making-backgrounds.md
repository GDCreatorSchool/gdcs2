---
draft: false
authors:
  - kde
title: Making Backgrounds
weight: 5090
date: 2023-06-22T00:00:00.000Z
contributors:
  - kde
  - komatic5
description: Backgrounds are often difficult to create because they must not only look interesting on their own, but also work well with your block designs. This guide explains how you can accomplish both of these goals when making your backgrounds.
tags:
  - Grade 1
  - Deco Skills
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Backgrounds should express a slightly different interpretation of your main ideas compared to the blocks.
- When making your background, make sure that it contrasts from the blocks in terms of details and colors. This will help keep the level’s gameplay readable.
- Finally, you can use multiple layers in your background, and an effect called Parallax, to make your level feel like it’s a 3D space. To complement this, you can create depth by having a lot of varying shape sizes and using overlap.

{{< /callout >}}

** **

# 1: Creating Fitting Backgrounds

Backgrounds are **the non-interactive visual elements behind a level's layout and block designs**. They should always help the block design express the key ideas or themes of a part. Their main point shouldn’t be to just fill space, *but to provide another way to show your ideas*.

Picture what things would make sense to be with the block design, and mark them as candidates to be put into the background. As an example, suppose your part takes place in a factory, where your block design might be based on the factory’s industrial machinery. Then, a good choice may be to include conveyor belts and foundries in the background to elaborate further upon the theme.

For maximum effectiveness, ensure that your background and foreground ideas aren’t too similar. Instead, use the background as an opportunity to further explore the theme. At the same time, the background should still fit together coherently with the foreground, and not stick out like a sore thumb.

# 2: Background Contrast

The background must contrast from the foreground so that it is easy to distinguish between the two at simply a glance. **You don’t want your blocks to blend in with the background, as that’ll make it hard to see where the gameplay is**.

Furthermore, with enough contrast you can establish a focal point for your level. Do you want the player to focus on the level’s background, or should the player be drawn to the block design instead? Your decisions here will affect what people focus on, and as such, what should be more detailed.

Consider the following methods of making contrast, and determine which of them would be most appropriate for your level. This is not an exhaustive list, but is enough for a start.

## Detail Contrast

The human eye is naturally attracted to detail. As such, by placing more detail in one place than the other, you tell players that area is important. You can use this principle to contrast the foreground and background.

A common mistake is to stuff both the foreground and background with high amounts of detail. This makes it difficult to identify the focus and will make your work messy. It also ruins the sense of depth.

One thing you can do is make less important details contrast less. For example, in many open scenes, the background often has less contrast in hue and brightness than the foreground. (This is due to a concept called atmospheric perspective, which will not be elaborated on here.) On the other hand, some works choose to make the foreground a plain solid color silhouette to draw attention to a starkly contrasting background.

Here are some levels which use detail contrast effectively.

**Bloomng’s part in Honeydew** – The background is low contrast in color, with only a few subtle brightness and hue changes in the leaves and the sky. Additionally, it is quite simple in terms of details. This differs from the foreground, which has a high contrast in color between the gray stone, the green grass, and the flowers – all of which have lots of detail. This way, the player’s attention is dominated by the foreground.

{{< youtube jLplew2Dwsw >}}

**No Return (Preview) by Culuc and nikrodox** – The background is the main focus for this particular section. The foreground is intentionally left as a solid color to allow the background to stand out more.

{{< youtube tuN6gERbMk0 >}}

## Brightness Contrast

Your eyes are naturally attracted to brightness. As such, contrasting the brightness of the foreground and background is a strong way to distinguish both. However, make sure that your environment & theme work with the brightness differences. It wouldn’t do to have the foreground be much brighter than the background during a clear noon day.

A good way to check if there’s adequate contrast is to take a screenshot of your part, and desaturate it in some image editor. If you cannot see everything clearly in black and white, you may have to adjust how bright some colors are. Alternatively, you can add a high-contrast silhouette around the structure, like a white outline of a structure in a dark background. However, since high contrast elements attract a lot of attention, be careful not to overuse this technique and muddle your focus.

Sometimes, you may have an orb that happens to match the color of the background (e.g. a pink orb against a pink background). To achieve the proper contrast, sometimes a contrasting solid color shape is put behind the orb so it is easily visible.

Here are some examples of levels which use brightness contrast well.

**Reunomi’s part in Scorpius** – The foreground block design is considerably darker than the background, allowing you to clearly see the shape of the structures.

{{< youtube 7HJPL4RLZdc >}}

**Dynamical by HanStor** – This level uses a more abstract style. Even so, notice how despite the numerous changes in hue, the difference in brightness between the foreground and background is maintained throughout the level.

{{< youtube 4wl_mpnIjGI >}}

# 3: Creating Depth

A background and foreground can work spectacularly together to create depth, an illusion of three dimensional space. While contrast is a crucial way to create depth, here are some other methods that weren’t discussed in the prior section.

## Parallax

This is an easy way to create depth in your part. The basic principle of **parallax** is this: __As something moves further into the background, it will move slower on the screen__. For example, a mountain deep in the background should appear to hardly move on the screen at all, while the foreground moves backwards at a faster rate. The following video demonstrates how parallax works intuitively.

{{< youtube 2z4OTRFuLP8 >}} 

To implement parallax in GD, get some object to follow player X and player Y using a move trigger. Then, use the follow trigger on the background layers and set the trigger’s follow group to the group of the aforementioned object. To tweak the speed of the background layer, you can vary the “XMod” and “YMod” properties on the trigger.

{{< youtube 8MkAhM8Nwxs >}}

Furthermore, your background can have multiple layers, each further back than the last. As more layers are added, the more the overall result resembles a three dimensional space. The effect is especially strong when combined with parallax.

For example, look at **Culuc’s part in Emerald Realm**. Many parallax background layers are used in this part, which gives the impression of a three dimensional space. The way it affects the viewer’s perception of the river is especially powerful; because of the many parallax background layers moving at the river banks, an illusion is created where the river (which is ultimately just a flat rectangle in shape) looks like it is being viewed from above, going into the far distance.

{{< youtube fMAYifajDac >}}

## Scale

By varying the scale of elements in your background – especially between background layers – you can create a sense of depth. Even a flat shape can contribute to depth using scale. In the below figure the three planes appear to move backwards in space because the rectangles have varied sizes.

Furthermore, you should use this as an opportunity to vary scales between the foreground and background. If you use lots of small blocks in the foreground, try using large background shapes to keep things readable.

{{< img src="https://lh3.googleusercontent.com/d/16iOUpdn99hndJb0BUaKRLfzJIOPnF1Tl" >}}

## Overlap

Making shapes smaller as they move further back in the background layers isn't always the best idea. For example, a mountain in the far background doesn’t need to be as small as a foreground tree, even if it is further away. In such cases, you can create depth by utilizing shape overlap.

From the figure below, there are two pairs of rectangles. In the left pair, the blue rectangle appears to be in front in space despite being smaller than the red rectangle. This is because there is a clear overlap of the blue rectangle over the red rectangle. However, once the overlap is removed as it is in the right pair, the relationship between the two rectangles in space becomes ambiguous, making it harder to create depth.

{{< img src="https://lh3.googleusercontent.com/d/1F6HLzpcoNGWK1h_Of5MYWAsTCxkXgEZY" >}}

