---
draft: false
authors:
  - kde
title: Color 1 (Basics)
weight: 8010
date: 2023-10-15T00:00:00.000Z
contributors:
  - gustonguygermany
  - kde
description: Using color effectively is a complex and a difficult thing to master that requires a certain skill. However, investing the time required to study will help you create appealing deco. Understanding basic concepts such as using hue, saturation, and value, will greatly help you make appealing and sensible colors for your designs. This guide will teach you the important basics of color.
tags:
  - Grade 2
  - Light & Color
seo:
  title: Color Theory Basics for Geometry Dash
  description: Learn the fundamentals of color and how hue, saturation, and value can improve Geometry Dash decoration.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Colors are represented by Hue, Saturation, and Value.
- Hue is normally the Main color, Saturation is a term for how pure the color is and Value is the brightness of the color.
- The Color Wheel contains the colors of the rainbow and can help you to decide what colors you want to use.
- A common method to render colored objects under colored light is to locate them as points on the color wheel and connect them with a line.

{{< /callout >}}

- - -

# 1: Basic Color Terms

Colors are commonly represented by three concepts: **Hue, Saturation, and Value**. Let’s get a look at what these concepts mean.

* **Hue** might be described as the “base” color; hue is **independent of how bright or how dark the color is**. A dark crimson red and a bright pale red would be considered the same hue, for example, as they are both red.
* **Saturation** measures **how pure the color is. The lower the saturation, the “grayer” the color becomes**. When the saturation reaches zero, the color’s hue completely disappears and only gray remains.
* Value / Brightness is **how light a color is. The darker the value, the closer to black the color gets**.

Each of these aspects is demonstrated by the first three sliders in the {{< img src="images/GDEmotes/Buttons/RGB.png" class="emote" >}} color picker.

{{< img src="https://lh3.googleusercontent.com/d/1YG742b1oRKnLXQm4XN-G0xLccbdYGQ07" >}}

It is common for artists to refer only to hue and saturation when talking about color, while value is considered separately. In similar fashion, this guide will only cover the aspects of color theory related to hue and saturation. If you need to learn about value, visit {{< img src="images/GDEmotes/CustomGuideIcons/IntermediateDeco/light-3-value.png" class="emote" >}} [Light 3](/docs/guides/deco-2/light-3-value/) instead.

# 2: The Color Wheel

The color wheel is composed of gradually changing hues moving around a circle, representing the colors of the rainbow.

Artists consider the color wheel a powerful tool because it is easy to visualize color combinations on it. The following are some common examples for color combinations.

{{< img src="https://lh3.googleusercontent.com/d/1Fx7CBcOms-FK2ivv4WXvb3e0AQQF7eYV" >}}

## Complementary Colors

**Opposite colors on the color wheel** are called **complementary colors**, and they are said to be complements of each other. Hues are always 180° away from each other when using Complementary Colors.

A famous example of a pair of complementary colors is blue and orange.

## Analogous Colors

**Adjacent colors on the color wheel** are called **analogous colors**. Hues are always 30° away from each other or less when using Analogous Colors.

An example of analogous colors would be green, yellow, and orange.

## Triadic Colors

**Colors that occupy equidistant thirds on the color wheel** are called **triadic colors**. Hues are always 60° away from each other when using Triadic Colors.

An example of triadic colors would be red, blue, and yellow.

# 3: Light’s Effect on Color

Many light sources in our daily lives do not emit pure white light. Rather, the light is usually colored in some other way. Knowing the color of your light is important because it affects how we perceive an object’s color.

For example, a white wall might appear yellow or white in the sun during noon, but in a setting sun, it might have a red tint from the sunlight's red glow.

By understanding how colored light affects the colors in your deco, you sell the illusion of an accurate light source in your scene. Here are 2 Light effects that we’ll get a look at:

## Local Color

When a colored object is cast under a white light, the resulting color you perceive is called the local color. It can be thought of as a “base” color for the object. However, when the light is colored, the perceived color will not necessarily be the same as the local color.

Observe in the figure below how the same object appears to have different colors under different colored light. Now ask yourself as a creator: how might one determine the color to use?

{{< img src="https://lh3.googleusercontent.com/d/1EXmplbdii5K6Pt_pYmzbyl_AwtArS9fk" >}}

## Rendering Colored Light

A lot of the difficulty in rendering colored light on a local color comes from determining the final hue and saturation of the reflected light, the light that the viewer will perceive. In addition, the reflected light color varies greatly depending on the intensity of the light source.

Fortunately, there are a few guidelines you can follow to help decide what color to use for your decoration. A method to mix the local color and light color is to consider their positions on the color wheel:

{{< img src="https://lh3.googleusercontent.com/d/1HHEqyE8IM6l5uk9lvm4Ij4ngegSNOonT" >}}

* Note that in this version of the color wheel, the saturation decreases towards the center of the wheel. This is intentional.

To mix the light and local colors, locate them as points on the color wheel and connect them with a line. The mixed color will likely be somewhere between the points on this line, depending on how intense the light is.

{{< img src="https://lh3.googleusercontent.com/d/11sl-icW_2nf5YldHVOgHHAV3Knkec_8c" >}}

The diagram above shows how you might use this method to determine the color of a blue object under a harsh yellow light (like sunlight). Drawing a line on the color wheel between two colors shows the in-between colors that would form the middle of a gradient. As you can see, when the yellow and blue hues are far apart, the line will approach the middle of the wheel. The midpoint between these points gets closer to the center of the wheel, and therefore less saturated.

* Notice how the candidate colors in this example are not strictly yellow or blue. Rather, there is a shift of hue from the yellow to a more green-like color, and finally to the blues. Also, you should notice that there is a desaturation in color as the hue transitions from one hue to another.

The final gradient would look like this, with the brighter areas being directly lit by the light source taking the hues to the left, and the darker areas taking the colors to the right.

{{< img src="https://lh3.googleusercontent.com/d/161PFVrvFXVIzmGkKw-HfAJDqdo2IULrH" >}}

# Sources

* James Gurney: *Color and Light*, Pages 73-78

**Video:**

{{< youtube id="P2r4Z5kbx7M" start="27" >}}
