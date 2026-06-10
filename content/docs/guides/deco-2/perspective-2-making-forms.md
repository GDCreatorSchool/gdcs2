---
draft: false
authors:
  - komatic5
  - chunlv1
title: Perspective 2 (Making Forms)
weight: 8210
date: 2023-11-01T00:00:00.000Z
contributors:
  - komatic5
  - chunlv1
  - notamoderatr
description: Once you know basic perspective concepts like vanishing points and
  horizon lines, it's important to learn the technical skills required to make
  perspective work in-game. This guide explains the specific skills you'll need
  to manually create forms like prisms, cylinders, cones, and more.
tags:
  - Grade 2
  - Perspective
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- We learned how to create stencils for our 3D shapes, and the ways you can easily create ellipses.
- From those stencils, we can make basic forms.
- We can merge basic forms together to form more complex shapes and decorate them as needed.


{{< /callout >}}

- - -

# 1: Recap on Lines

Remember that straight lines, C curves, and S curves are used to make shapes. This is important when making ***forms*** because **forms are just shapes put into a 3D space**.

However, you’ll need more precise ways to make planes when working in 3D. As such, here are some ways to make precise lines and curves.

## Lines

If you want a line with a specific length regardless of the angle, you can use a GD feature called **Group Parent** to easily rotate lines. When you enable Group Parent on one object and then select multiple objects, that object becomes the center point for rotation and scaling.

1. Place two small objects to act as the start and end points for the line. Select **one** of them and enable “Group Parent” in the Edit Group interface.

* I’ll refer to the point with Group Parent enabled as the **Pivot Point** (PP), and the other point as the **Non-Pivot Point** (NPP).

2. Duplicate the Non-Pivot Point, and select the Pivot Point. Rotate both around the Pivot until they’re perfectly horizontal.
3. Use line objects to make a line between both points.
4. Rotate the line around the Pivot until its other end touches the NPP at the right angle.

{{< youtube "1S9rH-eUsHk" >}}

Alternative method: (convenient for Steam users)

1. Follow the same instructions as Step 1 of the prior method.
2. Make your line first. Attach one end of the line to the Pivot Point and rotate it until the other end crosses the NPP.
3. Delete the parts of the line which extend past the NPP.
4. Use the Free Move tool to extend the line until its length is precise. You can zoom the camera in for better accuracy.

{{< youtube "ORBjJe576bA" >}}

## Ellipses

Ellipses are a mess in-game, no matter which update you’re playing on. Even in Geometry Dash 2.2, where you can create a circle and transform the objects to be wider, you won’t get an ellipse with consistent line thickness without doing more work.

The simplest way to make an optimized ellipse is by using an ellipse helper. There are two types you can make; one which uses Follow and Rotate triggers, along with movement tracing, and another which uses the circular saw objects. Both ellipse helpers are available using the ID ‘96013135’.

There is also a special tool catered to this very process called the ‘Circle Tool’, which can change the angle, amount of compression, and the amount of units each object steps. [Circle Tool](https://matcool.github.io/mods)

Once you create your ellipse guidelines using one of these methods, you can simply freehand the ellipse using objects, then remove the ellipse helper. You’ll have to use scaling and rotation extensively for this to work.

Since ellipses have major and minor axes, you should also get used to constructing ellipses by defining their major and minor axes *first*.

{{< youtube "wu5OweMeUtU" >}}

# 2: Basic Forms

With your guide/stencil set in place, we can move on to making basic forms. These are ones you’ll use extensively when working in perspective.

## Rectangular Prisms

To make a rectangular prism, start by deciding how many planes are visible from the viewing angle of the camera. If one plane is visible, build a rectangle/parallelogram.

If two or more planes are visible, make a line for the edge closest to the viewer. Then, construct two points somewhere else in your workspace which will serve as vanishing points. Construct lines which extend from the points on your prism’s edge to the vanishing points, then create more lines which define the other corners of the prism. Finally, connect everything together.

{{< youtube "cN_xvbnQRfo" >}}

Rectangular prisms are also commonly made using ***Orthographic Perspective***. This is **where depth exists, but parallel lines don’t converge to vanishing points**. The game’s default 3DL objects are an example of orthographic perspective.

Simply create a prism, then make a copy and offset it a bit. Then, connect the closest corners together using lines that have the same angle.

{{< youtube "GjBieM2-Fa8" >}}

## Spheres

Spheres are one of the simpler forms you can make. Simply construct a circle, then construct two ellipses. One ellipse will divide the sphere into a top hemisphere and a bottom hemisphere, like the Equator. The other will divide it into a right and left hemisphere.

To ensure that your construction is correct, place a point at the center of the circle. Then, draw lines extending outwards and upwards to define the major and minor axes of both ellipses. This is largely to get used to making accurate ellipses, as it’s important for some other constructions later.

{{< youtube "uLUeNasaf8E" >}}

## Cylinders

Cylinders combine the practices from rectangular prisms and spheres. Start by drawing two lines – in perspective, of course – to determine the top and bottom of the cylinder.

Next, construct ellipses at the front and back of the cylinder. Remember that ellipses are circles being viewed in perspective, so their width will change depending on the camera’s viewpoint.
This is something that requires practice to gain intuition for where exactly each ellipse will be placed.

{{< youtube "lYLYk98XRTY" >}}

## Cones

Cones are fairly simple. Create an ellipse in perspective by marking the major and minor axes. Then construct a line starting at the ellipse’s center which extends upwards to whatever height you desire. Connect the edges of the ellipse to the top of this line and you have a cone.

{{< youtube "x2knyvbvOrk" >}}

# 3: Combining Forms

These basic forms are used to make more complex forms by connecting them together and deleting any hidden edges from the final draft. Adding forms together is as easy as making two simple forms, then putting one of their planes next to the other form’s plane and erasing the lines between them.

{{< youtube "cAO7n7lF1Zk" >}}

Subtracting forms from each other requires you to make the larger form, then make the smaller form *inside it* and erase the lines where they intersect. In some cases this is known as negation.

{{< youtube "I-GC_t1GtU0" >}}

As you can imagine from the prior Decoration guides, the same process applies when working with forms as it does with 2D shapes and objects. Choose the forms which will most efficiently achieve your decoration ideas. And when studying forms, be sure to dissect them into their most basic versions.

Here are some examples from Chunlv1 which demonstrate this process.

{{< img src="https://lh3.googleusercontent.com/d/1YI2Ui_-5M-nXWX8e9m2ZX_If6ahBYhLW" >}}

# Sources

* [Proko: Structure Basics](<https://youtu.be/3uEtdDvK6Xo>)
