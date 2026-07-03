---
draft: false
authors:
  - zars70
title: Camera Triggers
weight: 3290
date: 2024-05-31T00:00:00.000Z
contributors:
  - etherail
  - itsnub1x
  - sparktwee
  - zars70
description: Camera Triggers allow you to manipulate the camera in a level. In
  this guide, we'll explore nine different triggers that can affect the level’s
  camera and how they function.
tags:
  - Grade 1
  - Gameplay Triggers
seo:
  title: How to Use Camera Triggers in Geometry Dash
  description: A short guide to camera triggers - Zoom, Static, Offset, Gameplay
    Offset, Rotate, Edge, Mode, Guide, and Shake.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- With Update 2.2, various Camera Triggers are added to the game.
- These triggers can manipulate the camera in several ways, such as rotating it or fixing it to a certain point.

{{< /callout >}}

** **
# 1: Zoom

Use the {{< img src="images/GDEmotes/Triggers/CameraZoom.png" class="emote">}} **Zoom** trigger to __simply zoom the camera in and out__:
- Numbers exceeding 1 zooms the camera in {{< img src="images/GDEmotes/Buttons/ZoomIn.png" class="emote">}}.
- Numbers less than 1 zooms the camera out {{< img src="images/GDEmotes/Buttons/ZoomOut.png" class="emote">}}.

{{< img src="https://lh3.googleusercontent.com/d/1cAkUSTzbr1DJMPNVCvkHm3QKybF6CfhA" >}}

The trigger has sliders for adjusting the zoom value and the time. It also has various easings just like the Move, Rotate and Scale triggers.
Just like most other triggers, it's also able to be Touch and Spawn-triggered.

This is how it looks fully zoomed in:

{{< img src="https://lh3.googleusercontent.com/d/1oEBHSKAsdR3gokmeNnsU_Lh3SHTN6rX3" >}}

This is how it looks fully zoomed out:

{{< img src="https://lh3.googleusercontent.com/d/1VNeEdz1SaNkfNh7B3SLLfrp-B7httXhx" >}}

Here's a video demonstrating the Zoom trigger:

{{< youtube tfgrxSFtBh0 >}}

# 2: Static Trigger

The {{< img src="images/GDEmotes/Triggers/CameraStatic.png" class="emote">}} **Static** trigger __fixes the camera to a selected point on the screen.__

{{< img src="https://lh3.googleusercontent.com/d/1KjXTRnDWlPruiL37WUeyvTkdEyNef0rL" >}}

**Target Pos Group ID** is for the object the camera will lock to. *You can only have one object as the center.*

**X Only** makes the trigger ignore the Y-axis when moving the camera. **Y Only** does the opposite; ignoring the X-axis.

If the center moves via a Move or Rotate trigger, the **Follow** option makes the camera move along with the center. The **Easing** slider to the right modifies the easing rate.

The **Smooth Velocity** option makes the transition to the target adapt to the current cameras velocity using a bezier curve with its **Modifier** Slider modifying the velocity itself.

As the name implies, **Exit Static** disables the trigger and reverts the camera to its previous state. Ticking **Exit Instant** does it in an instant rather than easing to the previous state.

{{< callout context="caution" title="Warning:" icon="outline/info-circle" >}}
As of 2.208, there is a bug pertaining to the exit static option. When using a static camera with the Follow option enabled, attempting to exit the static camera will force the camera's Y level to be the same as the object originally being followed when entering a portal without Free mode enabled.

** **
To fix this, copy the original static camera trigger and place it 0.1 blocks before the exit static camera trigger, making sure to uncheck the follow option.
{{< /callout >}}
This is how the Static Camera looks in game:

{{< img src="https://lh3.googleusercontent.com/d/1dm6TVhzTuSDZgMoHTalqwUmvd4jFGrGf" >}}

Here's a video demonstrating the Static trigger:

{{< youtube Twv7jRXqlGg >}}

# 3: Offset Trigger

The {{< img src="images/GDEmotes/Triggers/CameraOffset.png" class="emote">}} **Offset** trigger __shifts the camera by a certain distance in the X and Y axes.__ You're essentially using a Move Trigger for the camera.

{{< img src="https://lh3.googleusercontent.com/d/1DWc0rHciyOREEzoBp1fW2Wtp1yeTbpX0" >}}

**Offset X** shifts the camera left and right, while **Offset Y** shifts the camera up and down.
Enabling **X Only** will make the trigger ignore the Y axis on activation, while enabling **Y Only** ignores the X axis. The Easings work like usual.

Here's how offset X(-50) looks in game:

{{< img src="https://lh3.googleusercontent.com/d/1kmT-putkt450K5EYxhgMJYHYrKzUk7ou" >}}

Here's how offset Y(50) looks in game:

{{< img src="https://lh3.googleusercontent.com/d/1iOCcApdouVGYKssLT24jsy4f3roGAScz" >}}

Here's how offsets X(50) and Y(50) look in game:

{{< img src="https://lh3.googleusercontent.com/d/1retqq1e4cehd4I3kB3ob70ODocx-CKfA" >}}

Here's a video demonstrating the Offset trigger:

{{< youtube JScHLkRc4gk >}}

# 4: GP Offset Trigger

Meanwhile, the {{< img src="images/GDEmotes/Triggers/GPOffset.png" class="emote">}} **GP Offset** trigger __shifts the player’s position relative to the camera.__
{{< img src="https://lh3.googleusercontent.com/d/1EfMgGaxgxJxu2wXGFpHsbMszc7JQNTBF" >}}

**X Only** and **Y Only** works exactly like the Offset trigger, where they ignore each other’s axes. Ticking **Don’t Zoom** treats the offset as though no camera zoom was applied.

Pressing the **Default** button restores the original position between the player and the camera, which is typically a bit to the left.

# 5: Rotate Camera Trigger

Not to be confused with the Rotate trigger, the {{< img src="images/GDEmotes/Triggers/CameraRotate.png" class="emote">}} **Rotate Camera** trigger __rotates the camera up to a 360° angle.__

{{< img src="https://lh3.googleusercontent.com/d/1ihKyuIMNJSbfYW5OzYX8qi2B6cMYaINk" >}}

The **Degrees** slider modifies the camera's angle. By default, the angle sets the camera’s position, so adding 20° will always shift the camera 20° regardless of the previous rotation. Additionally, if you use an angle that exceeds 360°, the camera can spin multiple times (720° spins the camera clockwise twice).

2.2’s official release, however, adds the **Add** checkbox which __stacks the angle with the previous rotation.__ If the camera is set to 60°, inputting 20° would rotate the camera to 80° instead of 20°.

Alongside Add is **Snap360** which __rotates the camera’s position to the nearest 360° angle. In other words, it uprights the camera back to its default position__ As of 2.208, however, it seems that this feature does not work. Even so, you can just input 0° and/or 360° if you want to stabilize the camera.

Here's how the game looks rotated 20°:

{{< img src="https://lh3.googleusercontent.com/d/12qx5wwO5_E5uDQt8HIQFrai0P9XnT5dS" >}}

Here's a video demonstrating the Rotate Camera trigger:

{{< youtube UEZ6gdpolZg >}}

# 6: Edge Trigger

The {{< img src="images/GDEmotes/Triggers/CameraEdge.png" class="emote">}} **Edge** trigger __fixes the camera's edge to a certain group.__

{{< img src="https://lh3.googleusercontent.com/d/1eBOFis9BqkGI_bscwHKBYmCmudN8w_UG" >}}

- The checkboxes **Left, Right, Up** and **Down** determine the edge the camera will be fixed to. 
- **Unlock** resets the camera to its normal state.
- Unlike the other camera triggers, you can't use a certain easing or modify the move time.

Here's a video demonstrating the Edge trigger:

{{< youtube 26nq9kkLZ6s >}}

# 7: Mode Trigger

Some gamemodes by default have borders at the top and bottom such as the ball, ship, UFO, wave, spider, and swing gamemode. With the {{< img src="images/GDEmotes/Triggers/CameraMode.png" class="emote">}} **Mode trigger**, __you can remove these borders.__ It’s as simple as ticking **Free Mode**.

{{< img src="https://lh3.googleusercontent.com/d/1DQ41cxpfmbZcbIfhsEjbCFWUd9X8oNG4" >}}

Ticking **Edit Camera Settings** leads you to two features that adjusts how the camera moves along the player:
- **Easing:** changes how quickly the camera moves.
- **Padding:** sets how close the player needs to be to activate the camera’s movement.
Normally, the camera center will snap to the closest grid space. With the Disable GridSnap option enabled, the snapping will not happen.

# 8: Guide Trigger

The {{< img src="images/GDEmotes/Triggers/CameraGuide.png" class="emote">}} **Guide** trigger’s purpose is to __assist creators with camera layouts and aspect ratio, such as 19:6, 4:3, and 5:4.__
The trigger provides a guideline for these ratios when placed.

{{< img src="https://lh3.googleusercontent.com/d/1co55Ps2Ye5Zo3AbEsdlNqCeDWY0B9Nw_" >}}

You can tweak the sliders in order to reflect the previous camera's state if you used the Zoom {{< img src="images/GDEmotes/Triggers/CameraZoom.png" class="emote">}} or Offset trigger {{< img src="images/GDEmotes/Triggers/CameraOffset.png" class="emote">}}.

Here's a video demonstrating how a Guide trigger can be used:

{{< youtube Lg2xJB_ShjE >}}

# 9: Shake Trigger

The {{< img src="images/GDEmotes/Triggers/Shake.png" class="emote">}} **Shake** trigger is self-explanatory: __it shakes your screen__. These jitters in movement come with three variables: strength, interval and duration.

{{< img src="https://lh3.googleusercontent.com/d/1JsDkK6nKzEtS-7eskNP-hVi8pn4Sqhds" >}}

**Strength** affects __how strong the shake will be__. While you can only use the slider to `5`, the highest strength you can input is `100` as of Update 2.2; anything higher than that will return back to `100`.

**Interval** changes __time in between screen shakes.__ The lower the interval, the quicker the shake. The values range between `0` and `0.2` seconds.

**Duration** sets __how long the trigger will last__. The highest duration time you can input is `10` seconds.

Shake triggers can be used to *exaggerate impact*, or emphasize a buildup with drums. You can also use it to add ambience to your scene. For playability in lower end devices, there is an option to **Disable Shake**.

**Video:**

{{< youtube Ib63PvOkxUY >}}
