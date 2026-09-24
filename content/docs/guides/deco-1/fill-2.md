---
draft: false
title: Fill 2
seo:
  title: How to Fill Empty Space in Geometry Dash Decoration Part 1
  description: Learn more ways to fill space in Geometry Dash decoration using gradients & glow.
  canonical: ""
  noindex: false
weight: 5124
date: 2023-03-10T00:00:00.000Z
description: Once you've made the outline of a shape, you need to fill it in. This guide will explain how you can fill in shapes using gradients and glow.
authors:
  - komatic5
contributors:
  - komatic5
  - artaire
  - thunderbat
  - graylasagna
tags:
  - Grade 1
  - Deco Skills
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- There are two types of gradients: **Exterior** and **Interior**.
- Exterior gradients fade away into nothing, while Interior gradients transition to another color.
- To make gradients, you can use preset objects like “Glow”, or use low-opacity offset copies of objects. Both techniques have their pros and cons.
{{< /callout >}}

** **

# 1: Types of Gradients

There are two main types of gradients we’ll talk about in this lesson: Exterior Gradients and Interior Gradients.

**Exterior Gradients** __transition from one color to nothing at all__, such as when found on the outside of a block. The most common examples of this are blending, but non-blending examples exist and have their place to be used.

Some examples of these are in `Deadlocked` by `Robtop` and `Culuc`'s part in `Edge of Destiny`.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1oSh5RnuTg1MET-_WbrTgIwawjp47m3Sx" >}}

{{< img src="https://lh3.googleusercontent.com/d/1yYW0o-fdzqhDrty6AgGrGOdMoSfuTL7t" >}}

{{< /img-grid >}}

**Interior Gradients** __transition from one color into a new one__. There are three main types of these.

- **Non-blending to Non-blending:** These are the easiest to do; making them just requires some neat color/opacity tricks. They are the best for more complex shapes, which have a lot of overlap inside them.

{{< img src="https://lh3.googleusercontent.com/d/1kny_s-04k06biWO_sgpBfeOi28LIfxPF" >}}

- **Non-blending to Blending:** These are a bit more difficult. We recommend making the gradient focus more on the non-blending color for best results, because blending with overlap can look very messy. If it helps, you can also add another gradient on top to make the colors more vibrant.

{{< img src="https://lh3.googleusercontent.com/d/1-i7Sgqdh8alM6FznGiTupJuxvuJ5ey2v" >}}

- **Blending to Blending:** These are the most difficult and we don't recommend them complex shapes because of overlap. Overlap can make these look messy and is hard to avoid with limited shapes and object options.

{{< img src="https://lh3.googleusercontent.com/d/12Sx3FZyNWbUfyrLGU_VEIUYBddXLbZGP" >}}

Some examples of these are `Woom`'s part in `Koenigstein` (inside the blocks), and `Xender Game`'s part in `Dream Flower`.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1mIZEYhM6PcgaanbCnfNYnfq1xtkVG-iq" >}}

{{< img src="https://lh3.googleusercontent.com/d/1llIQDADqdVmJbtGG-dcLgWM3n098jJka" >}}

{{< /img-grid >}}

# 2: Making Gradients

Here, we'll explain how to actually make gradients.
## Commonly Used Objects

Geometry Dash has pre-existing gradients in the editor, known as “glow”: These are often the most common objects; they have many uses from large full-screen gradients to outlining complex shapes and can greatly influence a level’s appearance if used right.

{{< img src="https://lh3.googleusercontent.com/d/13ifRK8U3EuROup3v5r8nCFJwXAXRP1P2" >}}

Objects with poor aliasing have become more popular recently as well. These appear blurry or pixelated, especially when scaled up. This means they are quite good for constructing shapes; it can be more efficient to just use blurry objects instead of outlining the shapes in glow. Most of these require partial masking to work, so you need to be aware of the different selection boxes.

{{< img src="https://lh3.googleusercontent.com/d/1O_6k-Gci23Jfp9b0Hv7TuNqPW6PNxAsW" >}}

## Gradient Techniques

There are two main ways of making custom gradients.

The first method works as follows: you start by defining the borders of the colors using hard edges, then use glow to soften that edge and make a gradient. This makes a smooth gradient but if you don’t space out the glow evenly, it can look very choppy.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1UnvOBkLcDPDWNox1BvlACn1DfIGK-cn2" >}}

{{< img src="https://lh3.googleusercontent.com/d/1i25tKNe6DNs0fBGyB0mL2UA90kh0bTSZ" >}}

{{< img src="https://lh3.googleusercontent.com/d/1aS7n18PpidIyrQnX3vRu1pyjjCC_ak4j" >}}

{{< /img-grid >}}

The second technique uses 'afterimages'.

If you select the objects you’re using and make copies of them, you can move these objects a bit and alter their opacity to make a gradient. This can be faster than the prior method, but is a lot more object intensive as well.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1q3jRliO3FxkdiB6bWMOillHZBMiydC1R" >}}

{{< img src="https://lh3.googleusercontent.com/d/1faq9iaDxzXW8GreGl1_C4i23-uD3EVMK" >}}

{{< img src="https://lh3.googleusercontent.com/d/1xuOH4e2KQarV0j4NRg-SCIIb8q6Ck6MJ" >}}

{{< /img-grid >}}

# 3: Tips For Using Gradients

Be intentional with when you use gradients. If you use too many, you’ll make your work become blurry, hazy, or worse. Only use them in the most impactful areas.

Additionally, you should play around with how you use gradients. You can stack them to make your shapes appear as if they're brightly glowing, or you could use them to form new shapes entirely.

{{< img src="https://lh3.googleusercontent.com/d/1nEYCtL87Yd79Y-dq7dwbbwiYsmdFIp9T" >}}

{{< img src="https://lh3.googleusercontent.com/d/1rIscaXtVmqIDOedZdCm6yQyzhhbP4kGQ" >}}
