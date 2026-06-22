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

1-Point Perspective Grids

1-point grids are the most commonly found in Geometry Dash levels, especially ones with dynamic perspective; it’s generally the simplest and least complicated. This type of grid requires lines on the z-axis to point towards the sole vanishing point, which is typically in the middle of the screen. A 50° Cone of Vision is recommended here, meaning you must rotate two vertical lines by 25° in each direction, with the station point being your pivot point.

To create a 1-point perspective grid in Geometry Dash, do the following:

1. Establish the essentials such as the picture plane, horizon line, and center vanishing point (abbreviated as “CVP”). Additionally, place a 45° vanishing point to the left or right of the CVP.
2. Draw a line segment below the CVP. This will define the length of your square.
3. Draw two lines from each side of the line through the CVP.
4. Finally, draw a line from the opposite corner of your square through the 45° vanishing point. Where the line intersects with the side of your square, place a line.
5. Use the rectangle multiplication technique described in Perspective 3 to create more of these squares as needed.

