---
draft: false
authors:
  - poryii
title: Using Shaders
weight: 5125
date: 2026-03-29T00:00:00.000Z
contributors:
  - poryii
description: "This guide explains different shader usages, and when to apply them. "
tags:
  - Grade 1
  - Visual Effects
---
{{< callout context="caution" title="Incomplete guide" icon="outline/info-circle" >}}


This guide is missing the following:

* Proofreading


{{< /callout >}}

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}


* Shaders can enhance your level's atmosphere and immersion, but they do not affect gameplay itself.
* Use shaders in key moments like drops, transitions, and intensity changes to emphasize important beats in the music and structure of your level.
* Keep effects controlled and make sure they have a clear purpose. Overusing shaders can cause lag, reduce visibility, and make your level feel messy, rather than polished.
* You can use shaders beyond their regular "limits" to get different effects.


{{< /callout >}}

- - -

Shaders are powerful visual tools that allow many creators to change how the entire screen looks or feels during the level. Instead of simply decorating to make the level visually appealing, shaders let you apply many different effects, such as:

* Glitchy effects
* Pixelation effects
* Blur
* Lens circles

These help create a more immersive feeling to your level. However, using shaders effectively requires practice, planning, and a clear understanding on how they work. This guide explains how to use shaders properly, especially for people who want to improve the level design and atmosphere of their level.

# 1: When to Use a Shader

Shaders are usually best added after your level's main decoration and layout is finished, since they work as a "final layer" that enhances what you've already built, rather than interfering with it. However, this doesn't mean that you should ignore them until the very end.

In most cases, you probably already have an idea on what kind of effects or shaders you want to add when you're decorating, especially if certain effects (like chromatic glitch and lens circle) will influence how your visuals will look. Some techniques, (which we will get into later) such as shader masks or more complex effects, actually require you to start using shaders early so you can build your deco around it.

Because of this, shaders should be treated as something you keep in mind throughout the entire creation process of your level. The more you think that shaders are important to your level's concept and theme, the earlier they should be introduced. If they're only there for small visual improvements, it's totally fine to add them in later. At the same time, adding shaders to your level is your own choice, and forcing them into a level where you think it may not fit can make the level worse instead of better, so it is important to remember to use them only when they serve a clear purpose.

{{< callout context="caution" title="Ask yourself these 3 questions:" icon="outline/info-circle" >}}


- Does the shader effect match the theme/mood of the music?
- Does it improve the quality of the theme/mood?
- Is it making the player's experience better and more immersive?


{{< /callout >}}

If the answer is no, it's probably better to leave the shader out. Using shaders does not mean adding as many effects as possible. It's more about using them at the right time to enhance the overall feel and atmosphere of your level, without distracting them from the gameplay.

One of the most important moments to use shaders is during key parts of the level, such as beat drops, exaggerated beats, transitions, high-intensity sections, or just anywhere you feel like it belongs. For example, you might use a shader when there's a shift in the song, which helps emphasize the structure and feeling of the level. Using shaders like this helps emphasize the structure of the level and keeps the player engaged.

Shaders are also very useful when you want to establish or change the atmosphere of your level. If your level has many speed changes or if the song has a major change, shaders can help you communicate that into your level. If your level has different sections because of the song changes, (like calm -> intense -> calm.) shaders can help you implement that.

However, creators should be careful with their shader usage. Keeping effects active at all times can overwhelm the player and make the level hard to read and understand. (Not to mention the lag) Instead, it's better to use shaders in short, controlled moments that show a clear impact in the level. This will also prevent performance issues that may occur.

## Understanding What Shaders do

Shaders can enhance the visuals and overall feeling of the level in real-time. This means that they can influence the brightness, colour, and distortion of what the player sees. At their core, shaders act like filters layerered on your level.

It is important to realize that shaders do not change the actual gameplay; they only affect the visuals and how the level looks. However, shaders can strongly influence how the player experiences the level. Due to the fact that shaders affect the whole screen, they must be used carefully. Even a small change in your shader trigger settings can have a big impact on the player's visibility. For this reason, you should think of shaders as a tool for enhancing your level, and not overusing them and abusing them.

# 2: How to Use Shaders

Learning what the different shader triggers do and can be found in Screen Filters in the Basic Triggers Section. We have a full guide on how to use and set up each shader trigger. If you don't know how to use one of them, you can read the guide [here](https://www.gdcreatorschool.com/docs/guides/triggers-1/screen-filters/).

We won't go too in-depth as we already have a guide on how to use them, but here's how it works.

1. Place any shader trigger, (like sepia, bulge, shockwave, etc.) found in the triggers tab (you may need to scroll a bit)

{{< img src="https://lh3.googleusercontent.com/d/1mMld5_389hVGZg3SSOfiFm7-KNaypcxR" >}}

2. Press "Edit Object" and edit the trigger settings respectively.
3. Change the Trigger however you like! There's many different options for all of the different shaders, so you can play around with them yourself to see what they do. You can also use the shader trigger (the trigger literally called shader, not to be confused with the other shader triggers.) to change what Z Layers the shader will affect!

# 3. Scenarios & Techniques Involving Shaders

Like we've said before, shaders are most effective when used in specific situations, rather than being applied randomly. Understanding when and how to use them are cruicial, as they can improve level design, and the level quality and overall experience. Here are some examples how you can use shaders effectively:

## Treating Shaders as Pulses

Shaders can be used to create quick pulses that sync on beat with the music, and it's actually very simple to set up. For example, you can combine a radial blur with a lens circle with the colour black, and set them up like this, acting as a "pulse trigger" while still having a unique effect that a pulse trigger couldn't set up. Take Nullscapes for example. It uses radial blur to simulate intensity on the beat, instead of using a standard pulse trigger.

{{< youtube id="C-KDhWkXlvI" start="58" >}}

## Using Them During Transitions

By using shaders during transitions, you can make a transition smoother between different sections of the level. You can change the colour hue, have a shockwave effect, or even a slight distortion to signal a shift or change in the level. This helps make the level feel more connected with the theme and the music. Here is an example of a chromatic glitch enhancing a transition in the level Andromeda by Inxane97, at 0:49.

{{< youtube id="fFtQxxepyDo" start="49" >}}

## Utilizing Shaders as Subtle Enhancements

Instead of just relying on strong effects lasting a lifetime, shaders can be used in small amounts so you can polish up your level. For example, you can add a glitch effect to your level if there's already a kind of "glitchy vibe" to it, that slowly gets more intense over time, to give a sense of buildup throughout the level.

An example of this in the level 3RROR by Angel669. As you can see, the level already has a glitchy and trippy vibe to it, and it utilizes shaders to express that effect.

{{< img src="https://lh3.googleusercontent.com/d/1OeEYkPE0HgAeKJVFT00Ssrb0PwrUSVqP" >}}

# 4: Using Shaders to Mask Certain Objects

Shader Masking gives you control over where visual effects appear in your level. Instead of applying a visual effect to everything on the screen, you can choose specific objects or areas to be affected. This allows you to make parts of the background change colour, highlight certain areas, or create effects that only appear in specific regions, all while keeping important parts of the level like the gameplay completely clear.

One important fact you should know is that you are not limited to the “normal” values shown in the editor. Shader effects can become much more useful when you push their values far beyond what you would typically use. For "normal" shader usage, small values are usually enough to give you the effects you want. However, for masking and more complex visuals, larger values are often required to make the effect strong enough. Here are some examples of shader effects and masks that use values beyond the "normal" ones:

## Shockwave/line Mask

By using a Shockwave or Shockline Shader and setting it to a very high value (such as 10000 or 50000), you can hide any objects behind it. You can also configure what the shader mask affects by using the Shader Trigger and changing it so it only affects a specific Z Layer. 

This short video explains how it works in more depth.

{{< youtube id="gCxbqoOpQYE" start="49" >}}

## Gradient Trigger Mask

By using a Gradient Trigger, you can do all sorts of things, including additive, inversion, and multiply effects. Anything under the gradient will be affected, and it requires 3-4 points set to different Group IDs. (To create a shape) Also note that some gradient effects aren't compatible with shaders, like invert gradient with lens circle. Although it isn't a shader, it can be used alongside them, serving as a useful tool, if needed.

For example, you could use a gradient trigger set to the invert setting to create a invert colour mask on a specific z layer by using 2 different gradients, where one gradient is on a higher layer (actually affecting the objects) and the other is on a lower z layer, (reinverting the background and everything else normal) which makes it so that only one z layer is actually affected, like this:

{{< youtube id="cgXTq9ZXJjw" start="1" >}}

This is just one example, and I highly suggest playing around with gradients so you can understand them better, and to get the hang of them.

## Motion Blur Opacity Control Mask

This mask acts like an alpha trigger but makes it so that objects don't overlap.

 {{< img src="https://lh3.googleusercontent.com/d/14_kaYx9uTyo_Qe332VolPqY0gHlia7nR" >}}

As you can see, the objects on the left don't overlap with eachother, unlike the objects on the right. Due to the fact that motion blur spaces out the blurs by the z layer on the x and y axis, if we just scale it up to something like 10000, the blurring effect will disappear, giving us the opaque object. This is because motion blur lowers the opacity of the objects based on the intensity, and also makes it so that any overlapping objects don't have the "overlapping" effect a standard alpha trigger would give. This mask is best used when there are many details in your level, just like Aperture.

But you may have noticed that the colours look "washed out," or desaturated. This is because it is, which we can simply fix by adding a color booster.

## Color Boosting

Color Boosting will be very beneficial for the next example and the example before. There are actually 2 kinds of Color Boosters, Saturation Boosters and Contrast Boosters. By using a Sepia, Grayscale, or Edit Color Shader, you can boost the saturation and color of any object on a z layer by pushing their values over 1. It's most useful when you feel like an object is washed out, or when other shader effects unintentionally lower the saturation of an object.

#### Contrast Boosters

Contrast Boosters are created from edit colour shaders, where you just simply multiply the RGB values of an object. They are mainly used for reverting the effect of objects being washed out. For example, the 3 images below show the before and after of using an edit colour contrast booster, combined with the motion blur opacity mask.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1M9IMZb0QkZmr9cc6oOGs5aoSiJlAQ8i7" >}}

{{< img src="https://lh3.googleusercontent.com/d/1lJW1OVSyr6Dy7b2urTiYBVoXDe-TNPSC" >}}

{{< img src="https://lh3.googleusercontent.com/d/1XZeH6jYLxRIFilIO1tYZwqvvjj59aH3f" >}}
{{< /img-grid >}}

#### Saturation Boosters

Saturation Boosters on the other hand, increases the intensity and vividness of colors in objects. By pushing the colour intensity higher, it makes visuals more vibrant, which makes muted colours stand out more. It is made using a high value Grayscale or Sepia shader, you can boost the values of an object by a 180 degree hue. For the banding effect below, you need to use a Saturation Booster, or it won't work.

## Colour Banding Gradient Effect

Although this effect isn't very well known, it's actually used in levels like Eta Carnis. By using a gradient trigger and setting one colour pitch black (0, 0, 0,) and the other one to some very dark color that tints toward one colour, (eg. 8, 7, 7, where 8 would be the color that it's tinted towards. also check first image below.) we can add a saturation booster which boosts the saturation of the colour that it's tinted towards, (In this case red, image 2.) and keep the other one pitch black. (As 0, 0, 0, saturation boosted is still the same)

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1GEpvA1tt22IkKo_FFEE4QbVG5qUbuJVr" >}}

{{< img src="https://lh3.googleusercontent.com/d/1jssxRc76nk9Q8JO6iSbS2H2nsDsHLXV-" >}}


{{< img src="https://lh3.googleusercontent.com/d/1oJo-pADPmMSizJEMj6jLS9Yl0WmN735d" >}}
{{< /img-grid >}}

This creates a banding effect, despite being just one gradient trigger. It's a trippy effect that is very unstable, and very chaotic. Due to this fact, I suggest trying it out in a separate level and experimenting with it. You can also try putting black glow circles above the gradient to see what happens. Enjoy ;)

{{< youtube id="LNMpe_BXtQM" start="56" >}}

An example of this banding effect being used in Eta Carnis. You might not see it at first, but the colour banding is used for the background of this part (Screenshot of it below)

{{< img src="https://lh3.googleusercontent.com/d/1kxYleL1JM1TMxV_CXw0rHOBDh9cuCNfu" >}}
