---
draft: false
authors:
  - tdp9
title: Screen Filters
weight: 3220
date: 2024-03-11T00:00:00.000Z
contributors:
  - tv_box
  - tdp9
description: This guide explains how the Screen Filter triggers work. These
  triggers place various screen filters or shaders on the level.
tags:
  - Grade 1
  - Effect Triggers
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Shader Triggers alter the player’s and level’s qualities and colors.
- Shader Triggers are divided into two categories: Screen effects and Color filters.
- Screen effects distort the screen and the player, while Color filters change the colors of the player and the level.


{{< /callout >}}

- - -

Shader triggers/screen filters apply a filter to a level, affecting the level itself and the player. Shader triggers alter the level’s colors and qualities, and can make effects that can’t be replicated with regular objects. This guide will teach you how to use all of the shader triggers.

Generally, shaders can be divided into 2 categories: Screen effects and Color filters. **Screen effects** distort the screen in some way, shape, or form, while **Color filters** change the color or hue of the level.

{{< callout context="caution" title="Important" icon="outline/clipboard-text" >}}

- Shader triggers cannot be stopped using a stop or pause trigger. You have to use the same trigger with all of its settings off, or the shader trigger with “disable all” enabled.
- Checking the box in the top right of the shader menus disables the shader from previewing in the editor. The relative checkbox makes the effects relative to a screen’s aspect ratio rather than a fixed amount.

{{< /callout >}}

# 1: Screen Effects

## Shader

**{{< img src="images/GDEmotes/Triggers/Shader.png" class="emote">}} Sets a range of Z layers that other shader triggers will affect.**

* The cyan buttons are the minimum and maximum layers.
* The green buttons are layers affected by the other shader triggers.
* The gray buttons are layers unaffected by the other shader triggers.
* **Disable All**: **Disables any active shaders**.
* **Disable player particles**: **Prevents any shaders from affecting the particles that come from the player during gameplay**. This option is here since the rendering of some shaders on these particles can look a bit weird.

{{< youtube GBMR-d0AkqU >}}

## Shock Wave

**{{< img src="images/GDEmotes/Triggers/ShockWave.png" class="emote">}} Creates a shock wave that moves to or from a center point.**

* **Speed**: **How fast the wave will move**. Higher values mean higher speed.
* **Strength**: **The amount of distortion of the wave**. The higher the value, the more distorted objects will be in the wave.
* **Thickness**: **How “long” the wave is**. The higher the value, the longer the wave of the effect will last. Generally, if the thickness is higher than the wave width, multiple waves will spawn to fill the gap of time, however the ratio is not 1:1 and more like 1.5:1 (in the thickness’s favor).
* **WaveW**: Stands for “Wave Width”. **Sets the width of each wave**. The higher the value, the wider the wave.
* **FadeIn**: **How smooth the wave will fade into distortion**. In other words, this affects the outer part of the *first* wave in a wave sequence.
* **FadeOut**: **How smooth the wave will fade out from distortion**. In other words, this affects the inner part of the *last* wave in a wave sequence.
* **TimeOff**: **The amount of seconds the effect will be offset by**. Negative values will delay the start of the waves, positive values will start the waves at an earlier point of the effect (This does not start the effect before the trigger is activated, think of it as the song offset but for an effect).
* **MaxSize**: **The maximum distance the waves can travel**. 0 is the default and leaves no limit.
* **ScreenOffX**: **The X offset of where the waves spawn**. Negative values go left, positive values go right.
* **ScreenOffY**: **The Y offset of where the waves spawn**. Negative values go down, positive values go up.
* **Invert**: **Inverts the movement of the wave** so that it spawns waves that go from the edge of the screen to the center.
* **Inner**: **How big the radius of distortion is from the center of the screen**. Basically creates a circle you set the size of that distorts the area it is in as waves get to it.
* **Outer**: **How far the waves spawn away from the center of the screen**. The waves will travel the same distance as before, so higher values may not be seen without any offset.
* **Target**: **Sets the center of the effect to a player or a single object using a group ID**. The default position of this option is around 3 blocks under the player’s spawn point.
* **Follow**: **If enabled, the center of the effect will follow the Target if it is moving**. If not enabled, the center of the effect will stay at the place the Target was at when the shader was originally activated.
* **Animate**: **Allows you to change the settings of an active shock wave effect**. Pressing the trash button next to a setting will have that setting ignored.
* **FadeTime**: **How long the effect lasts**. To the right are some easing options for the transition.

{{< youtube 9tm6Vzmm4Qo >}}

## Shock Line

**{{< img src="images/GDEmotes/Triggers/ShockLine.png" class="emote">}} Creates a shock wave effect that moves across the screen.**

* **Speed**: How fast the wave will move. Higher values mean higher speed.
* **Strength**: The amount of distortion of the effect. The higher the value, the more distorted the effect will make objects.
* **Thickness**: How “long” the wave is. The higher the value, the longer the wave of the effect will last. Generally, if Thickness is higher than the Wave Width, multiple waves will spawn to fill the gap of time, however the ratio is not 1:1 and more like 1.5:1 (in the thickness’s favor)
* **WaveW**: Stands for “Wave Width”. Sets the width of each wave. The higher the value, the wider the wave.
* **FadeIn**: How smooth the wave will fade into distortion. Basically effects the outer part of the *first* wave in a wave sequence.
* **FadeOut**: How smooth the wave will fade out from distortion. Basically effects the inner part of the *last* wave in a wave sequence.
* **TimeOff**: The amount of seconds the effect will be offset by. Negative values will delay the start of the waves, positive values will start the waves at an earlier point of the effect (This does not start the effect before the trigger is activated, think of it as the song offset but for an effect).
* **MaxSize**: The maximum distance the waves can show up from in the center of the screen. 0 is the default and leaves no limit.
* **Invert**: **Inverts the amplitude of the wave**. Basically it turns the high parts of the wave to low parts and vice versa.
* **Flip**: **Reflects the effect so that it moves from the opposite side of the screen**.
* **Rotate**: **Rotates the effect so it moves along the y-axis instead of the x-axis**.
* **Dual**: **Spawns two waves that spawn at the center of the target that move away from each other**.
* **Target**: Sets the center of the effect to a player or a single object using a group ID. The default position of this option is around 5 blocks to the right of the player’s spawn point.
* **Follow**: If enabled, the center of the effect will follow the Target if it is moving. If not enabled, the effect will stay at the place the Target was at during the original activation of the shader.
* **Animate**: Allows you to change the settings of an active shock line effect. Pressing the trash button next to a setting will have that setting ignored.
* **FadeTime**: How long the new changes will take effect. To the right are some easing options for the transition.

{{< youtube Gmau8P_saiQ >}}

## Glitch

**{{< img src="images/GDEmotes/Triggers/Glitch.png" class="emote">}}Creates a glitch effect.**

* **FadeTime**: **How long, in seconds, it takes to transition into the effect**.
* **Strength**: **How strong the distortion is**. It is a multiplier for the other adjustable settings.
* **Speed**: **How fast each glitch will occur**. Higher values mean more glitches happening per second.
* **SliceHeight**: Slices are horizontal strips that offset the visuals within them. **This setting sets the *max* height these slices can be**.
* **MaxSliceXOff**: **How much each slice can distort objects from its original x-axis**.
* **MaxColXOff**: **How far the RGB values can be offset from its original x-axis**.
* **MaxColYOff**: **How far the RGB values can be offset from its original y-axis**.

{{< youtube IeHcRQEcg4A >}}

## Chromatic

**{{< img src="images/GDEmotes/Triggers/Chromatic.png" class="emote">}} Splits up RGB values and offsets them from each other.**

* **TargetX**: **How far the colors move on the x-axis**. Must have “Use X” enabled for this to apply.
* **TargetY**: **How far the colors move on the y-axis**. Must have “Use Y” enabled for this to apply.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.

{{< youtube EM2WCzJT-p8 >}}

## Chromatic Glitch

**{{< img src="images/GDEmotes/Triggers/ChromaticGlitch.png" class="emote">}} Creates a different glitch effect, with slightly more emphasis on chromatic effects.**

* **Speed**: **How fast the distortion effect moves**.
* **RGBOff**: **How far from the x-axis the color split is offset**. Negative values can be entered to offset it to the right.
* **Strength**: The amount of distortion of the effect. Higher values mean more distortion.
* **FadeTime**: How long in seconds it takes to transition the effect. Easing options at the bottom give easing for the transition.
* **LineThickness**: How wide the horizontal lines on screen are.
* **SegmentH**: **How high each segment is (how far apart they are)**. Each segment is marked by the lines on screen.
* **LineStrength**: **The opacity of the lines**. Lower values make the lines more transparent.
* **Disable**: **Disables the effect**.
* **Relative Pos**: **Locks the segments to the grid instead of them following the camera**.

{{< youtube 8p9ySqcezMg >}}

## Pixelate

**{{< img src="images/GDEmotes/Triggers/Pixelate.png" class="emote">}} Pixelates the screen**.

* **TargetX**: **How much the screen is pixelated on the x-axis**. “Use X” must be enabled for this to work.
* **TargetY**: **How much the screen is pixelated on the y-axis**. “Use Y” must be enabled for this to work.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Snap Grid**: **Enabling this makes the pixels follow the grid instead of the camera**.
* **Hard Edges**: **Sharpens the pixelation effect so it looks less blurred**.

{{< youtube euBSob6lH_A >}}

## Lens Circle

**{{< img src="images/GDEmotes/Triggers/LensCircle.png" class="emote">}} Creates a lens circle around a center point**

* **Size**: **The radius of the effect**. Higher values means a larger circle.
* **Fade**: **The size of the gradient of the circle**. The fade is dependent on the size. Any values higher than the current size of the circle will be ignored as the max size is the max fade of the circle.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Strength**: **The opacity of the effect**. Lower values make it more transparent.
* **ScreenOffX**: The x-axis offset from the center of the effect.
* **ScreenOffY**: The y-axis offset from the center of the effect.
* **CenterID**: **The ID of the object the effect centers on**. You can have player 1 or 2 set as this ID. By default, the center of the effect is the center of the screen.
* **Tint Channel**: **The color channel that the effect takes the color of**. By default, the effect is black. The opacity of the color channel is ignored.

{{< youtube XKRk8oeeB54 >}}

## Radial Blur

**{{< img src="images/GDEmotes/Triggers/RadialBlur.png" class="emote">}} Blurs the screen from a center point**.

* **Size**: **How far each layer of “blur” is from the origin**.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Intensity**: **Doesn’t seem to work as of now**. **Is supposed to change the opacity of the blur**.
* **Ref Channel**: Sets the color channel the blur will use as reference to fade objects to. By default, the blur will go into the color of the background.
* **ScreenOffX**: Offsets the center of the blur from its original x-value.
* **ScreenOffY**: Offsets the center of the blur from its original y-value.
* **Fade**: **How blurred the blur effect is**. Higher values mean less blur. Negative values don't do anything.
* **Target**: Sets the center of the effect to a player or a single object (using a group ID). The default position used if this is enabled is around the spawn point.
* **EmptyOnly**: Only blurs pixels without objects inside.

{{< youtube TOtKl_kzBYc >}}

## Motion Blur

**{{< img src="images/GDEmotes/Triggers/MotionBlur.png" class="emote">}} Blurs the screen based on the movement of the camera, player, or selected object**.

* **TargetX**: How much the screen is blurred on the x-axis. Positive numbers offset it to the left, negative numbers to the right. “Use X” must be enabled for this to work.
* **TargetY**: How much the screen is blurred on the y-axis. Positive numbers offset it down, negative numbers up. “Use Y” must be enabled for this to work.
* **Ref Channel**: Sets the color channel the blur will use as reference to fade objects to. By default, the blur will go into the color of the background.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Fade**: How blurred the blur effect is. Higher values mean less blur.
* **Follow Ease**: **How smoothly the blur reacts to movement**. Higher values means better easing.
* **Intensity**: **Doesn’t seem to work as of now**. Is supposed to change the opacity of the blur.
* **DualDir**: **Blurs objects in two directions instead of one**.
* **EmptyOnly**: Only blurs pixels without objects inside.
* **TargetID**: Sets the center of the effect to a player, the camera, or a single object using a group ID. The default uses the default position as viewed in the editor, and the blur will not move.

{{< youtube 6yDiecQ_h1Y >}}

## Bulge

**{{< img src="images/GDEmotes/Triggers/Bulge.png" class="emote">}} Bulges the screen**.

* **Bulge**: **How intense the bulge effect is**.
* **Radius**: **The size of the radius of where the bulge is contained**.
* **ScreenOffX**: Offsets the center of the blur from its original x-value.
* **ScreenOffY**: Offsets the center of the blur from its original y-value.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Target**: Sets the center of the effect to a player or a single object using a group ID. If no reference is put in, the bulge will act the same as if Target was not enabled.

{{< youtube ChPFTMYxHBY >}}

## Pinch

**{{< img src="images/GDEmotes/Triggers/Pinch.png" class="emote">}} Distorts the screen by “pinching” it**. The opposite of the bulge effect.

* **TargetX**: How much the x-axis gets distorted. Higher values mean higher distortion. “Use X” must be enabled for this to work.
* **TargetY**: How much the y-axis gets distorted. Higher values mean higher distortion. “Use Y” must be enabled for this to work.
* **ScreenOffX**: Offsets the center of the effect from its original x-value.
* **ScreenOffY**: Offsets the center of the effect from its original y-value.
* **Radius**: The radius in which the pinch effect is contained.
* **Modifier**: **Modifies the distortion values used**. A lower value means less distortion.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Target**: Sets the center of the effect to a player or a single object using a group ID. The default position used is around 3 blocks under the spawn.

{{< youtube Y9TshK-hWAg >}}

# 2: Color Filters

## Grayscale

**{{< img src="images/GDEmotes/Triggers/GrayScale.png" class="emote">}} Filters the screen to a grayscale color**.

* **Target**: **How much the filter is applied**. Lower values mean less grayscale.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **Tint Channel**: Uses a color channel to tint the screen by instead of gray. The box next to the input must be checked in order to work.
* **UseLum**: **Uses a different color conversion method for the grayscale filter**. Instead of simply desaturating the end image, it applies a “value” filter which is more accurate for [color theory](/docs/guides/deco-2/light-3-value/).

{{< youtube VLX5-fKeYpg >}}

## Sepia

**{{< img src="images/GDEmotes/Triggers/Sepia.png" class="emote">}} Filters the screen with a sepia effect**.

* **Target**: How much the filter is applied. Lower values mean less sepia coloring.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.

{{< youtube H2807GrOMFM >}}

## Invert Color

**{{< img src="images/GDEmotes/Triggers/InvertColor.png" class="emote">}} Inverts the color of the screen**.

* **Target**: How much the filter is applied. Lower values mean less inversion.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **R G B Sliders**: **Determines the percentage of the RGB values that will be affected by the options below**.
* **EditRGB**: **Edits the final inversion filter**. The RGB sliders determine how much each color is affected by the inversion. Lower percentages mean less inversion. Values higher than 1 will transition into inversion faster, but will tint the final image.
* **TweenRGB**: **Transitions new values for an invert color trigger smoothly instead of instantly**. Needs “EditRGB” to work and only works after an active invert color effect.
* **ClampRGB**: **Limits the final max values for each color to 1/1/1**. Any values over 1 in the RGB sliders will be ignored.

{{< youtube MtO29gS8ttg >}}

## Hue Shift

**{{< img src="images/GDEmotes/Triggers/Hue.png" class="emote">}} Shifts the hue of the colors on screen**.

* **Degree**: **How many degrees the colors shift by**.
* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.

{{< youtube lfgdCSofICw >}}

## Edit Color

**{{< img src="images/GDEmotes/Triggers/EditColor.png" class="emote">}} Edits the RGB values of the colors on screen**.

* **FadeTime**: How long, in seconds, it takes to transition into the effect. Easing gives options on what easing the transition will use.
* **CR CG CB sliders**: C stands for color. **These sliders edit how much red, green, and blue colors are displayed**. Higher values mean more color and smaller values mean less color.
* **BR BG BB sliders**: B stands for brightness. **These sliders edit the brightness of the red, green, blue values**. Higher values mean more brightness and lower values mean less brightness.

{{< youtube SUraX52EAwA >}}

## Split Screen

**{{< img src="images/GDEmotes/Triggers/SplitScreen.png" class="emote">}} Splits the screen into multiple screens**.

* **TargetX**: **How many screens the trigger adds to the x-axis**. Higher values mean more screens. Negative values invert the x-axis. “Use X” must be enabled for this to work.
* **TargetY**: **How many screens the trigger adds to the y-axis**. Higher values mean more screens. Negative values invert the y-axis. “Use Y” must be enabled for this to work.

{{< youtube fMXuJoW3o40 >}}
