---
draft: true
title: Perspective 4 (Custom Grids)
weight: 8230
date: 2026-06-22
description: Equipped with the perspective tools from the previous guides, you
  are now able to construct custom perspective grids, which you can use for
  various complex drawings. This guide will cover the techniques needed in order
  to accurately construct these grids, along with other crucial skills needed to
  use them.
tags:
  - Grade 2
  - Perspective
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Various pieces of terminology relating to perspective are needed for understanding how to create different types of perspective grids.
- Scaling objects with a perspective grid requires certain techniques that must be taken into account.
- Some GD creators try to get creative with perspective in their levels to add depth, and perspective grids make this process much easier.

{{< /callout >}}

** **

# 1: Constructing Types of Grids

Before attempting to create a perspective grid, you must understand a few ideas that can be used to draw forms in perspective.

The __station point__ (abbreviated as “**SP**”) is usually placed at the bottom of the picture plane, directly below the center vanishing point. __This represents the viewer’s location__ in the scene and is used as a reference point for various other techniques, making it essential for creating forms in perspective.

The __picture plane__ is a flat, 2D rectangle that lines are drawn onto, effectively __serving as the "camera" separating the viewer from the scene__. If you think of this as a 3D camera, anything in front of the picture plane gets culled (removed from view). This is mainly used to help with proportions, marking the boundaries of your scene.

{{< img src="https://lh3.googleusercontent.com/d/1duv-FANsVKowO4_ETL6fn-bR7nYQ5KZA" >}}

The __Cone of Vision__ (abbreviated as “**CoV**”) defines a space on the picture plane where objects can safely be drawn without being unnaturally distorted. Distortions like these can look odd, so it’s best to avoid them by __placing all your forms within this cone__.  If this is not possible, keep your forms minor so they don’t look distorted or out of place. This distortion can be compared to Field of View settings in 3D games; the higher the FOV, the more distortion there is on the sides of the screen, essentially “widening the lens” and placing more objects outside the Cone of Vision. This cone can be made by tilting a line by the station point by a certain amount depending on the number of vanishing points in the drawing, then tilting another line by that same measure in the opposite direction. Later in this guide, you'll learn the Cone of Vision recommended for each type of perspective grid.

{{< img src="https://lh3.googleusercontent.com/d/1aUbd20r_YiMfWESsKhsRVTz6hi_GnjU1" >}}

The 45° Vanishing Point, also called the diagonal vanishing point (abbreviated as “DVP”), helps make a perfect cube or square in perspective without relying on guesswork. This can be made by tilting two lines to the left and right respectively by 45°, with the station point as your pivot point. The points where those lines intersect the horizon line represent your vanishing points.

{{< img src="https://lh3.googleusercontent.com/d/10mv5V55Fus5IhfQAIUi6zlU-RJVsLycU" >}}

## 1-Point Perspective Grids

1-point grids are the most commonly found in Geometry Dash levels, especially ones with dynamic perspective; it’s generally the simplest and least complicated. This type of grid requires lines on the z-axis to point towards the sole vanishing point, which is typically in the middle of the screen. A __50° Cone of Vision__ is recommended here, meaning you must rotate two vertical lines by 25° in each direction, with the station point being your pivot point.

To create a 1-point perspective grid in Geometry Dash, do the following:

1. Establish the essentials such as the picture plane, horizon line, and center vanishing point (abbreviated as “CVP”). Additionally, place a 45° vanishing point to the left or right of the CVP.
2. Draw a line segment below the CVP. This will define the length of your square.
3. Draw two lines from each side of the line through the CVP.
4. Finally, draw a line from the opposite corner of your square through the 45° vanishing point. Where the line intersects with the side of your square, place a line.
5. Use the rectangle multiplication technique described in Perspective 3 to create more of these squares as needed.

{{< youtube fh2vX1IgvOY >}}

## 2-Point Perspective Grids

In Geometry Dash, 2-point grids can be found in still images like transitions or endscreens, and they help add a lot of depth to them. This type of grid has two vanishing points on either side of the picture plane, and lines on the x- and z-axis point to each one respectively. Note that the initial square will have a corner facing towards the viewer, so the CVP will be called the DVP instead. A __60° Cone of Vision__ is recommended here, meaning you must rotate two vertical lines by 30° in each direction, with the station point being your pivot point.

To create a 2-point perspective grid in Geometry Dash, do the following:
1. Establish the essentials such as the picture plane, horizon line, station point, and DVP. Additionally, place a vanishing point to the left *and* right of the DVP, spacing them equally. These will be called the left vanishing point (abbreviated as “LVP”) and the right vanishing point (abbreviated as “RVP”).
2. Place a point somewhere above but near the station point, connecting two lines between it and the LVP and RVP. Note that the horizontal position on which you place this point will change the "angle" of the drawing. If it’s closer to the LVP, the view will face more to the left, and vice versa.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1vDg1rTr8Wcml7eghyyoQzVy4sMVdm6BE" >}}

{{< img src="https://lh3.googleusercontent.com/d/1R-C63nVrbKMRbJPro6JV6xKEpZtpruBd" >}}

{{< img src="https://lh3.googleusercontent.com/d/1xyiMrx-253hpd9nd7aTeUlej4_dqRPOk" >}}

{{< /img-grid >}}

3. Create another point along the right line that is relatively close to the initial point, connecting that point to the LVP with a line as well. This will determine the width of your square.
4. Draw a line from the closest corner of the square to the DVP, and where the line intersects is where the far corner of the square is. Place a point there.
Draw a line from the RVP through that intersection, connecting it to the original left line.
5. Use the rectangle multiplication technique described in Perspective 3 to create more of these squares as needed.

{{< youtube r2Ligzs8v6o >}}

{{< callout context="note" title="Other Perspective Grids" icon="outline/info-circle" >}}
- While 3-point grids are arguably the most dynamic, they are quite difficult to accurately create and can look odd if the horizon line is not near the bottom or top of the picture plane. 
- Curvilinear, or 5-point, perspective grids can be seen in fisheye-lens photography and are usually not needed in Geometry Dash. However, if you would like to make one, the **Bulge** shader can easily recreate the effect.


{{< /callout >}}

# 2: Transferring Scale in Perspective

In Geometry Dash, the scale tool makes the process of transferring scale in perspective extremely easy. Simply place a point on the horizon in the direction you’d like to scale, apply “Group Parent” in the Edit Group interface, and scale as much as you like as long as you adjust your form to fit the viewing angle. You may need another point if you’d like to scale in a different direction for more precise positioning.

However, when attempting to translate a form across multiple axes at the same time, you may run into a distortion in the form due to it passing over a vanishing point. To avoid this, simply translate it on one axis of the grid, then the other, as opposed to doing both at once.

Now, what if your form is elevated or in the ground? For this kind of positioning, there are a few extra steps in order to make the perspective convincing.

## Elevated Above the Ground

1. Scale the form to your liking as if it were level to the ground.
2. Transfer the form however high you desire. Since all vertical lines are parallel, no vertical foreshortening will occur. The viewing angle will change, however, so adjust the form as needed.

{{< img src="https://lh3.googleusercontent.com/d/1ic_uwXU-PKSdF7rpknNcYecu9pEvn9xb" >}}

## In the Ground

1. Scale the form as if it were level to the ground, then move it until you’ve reached the “wall” of the hole in the ground.
2. Transfer the form onto the ground of the hole and move the form as needed, ensuring to move it one axis at a time.

{{< gif src="https://lh3.googleusercontent.com/d/1ASr_bAJlVVt0fg4YrALg0C4UrVWxJVRd" >}}

# 3. Practical Use Cases

Due to the nature of the game, Geometry Dash creators are able to get creative with how they do perspective.

In the first part of "Alien Dream Emulator" by kira9999, different statues in the background are scaled down with the sole vanishing point as the centerpoint. This technique is an efficient and simple way to scale things in perspective, and it's used frequently in levels like these.

{{< img src="https://lh3.googleusercontent.com/d/1lqaaBU2FbJc38WNgZQ0DNotOcpnBZvhH" >}}

LightPotatoDev decided to create an alleyway scene for a transition in their upcoming level "Hyperheist", which is a perfect setup for 1-point perspective. You'll notice that objects outside the Cone of Vision are simple, unobtrusive forms that won't look strange or unnatural. The main subjects of the scene reside almost entirely within the Cone of Vision.

{{< img src="https://lh3.googleusercontent.com/d/1MnieaOZYBOAw43LtiUdpxyiiJ3LKW4xY" >}}

"Wall" by Vegtam and fJud has an endscreen, and it has a background full of city buildings made with 2-point perspective. The horizon line is low, making it seem as if the camera is angled up slightly.

{{< img src="https://lh3.googleusercontent.com/d/1G6B62TMHG3qG-gs9T0MYxwDttOYU1QXt" >}}

There are cases in which you can use both types of perspective in a single situation. At the 0:41 mark in "entropie" by empsea, a cutscene transition utilizes both one- and two- point perspective as the camera moves around the bridge.

{{< youtube dFI8pEitf9M >}}

# Sources
- Scott Robertson: How to Draw, Chapter 4
- [Drawing Perfect Squares in Perspective](https://www.youtube.com/watch?v=h0HrmywKzFk)
