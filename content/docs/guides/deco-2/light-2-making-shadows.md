---
draft: false
authors:
  - komatic5
title: Light 2 (Making Shadows)
weight: 8070
date: 2025-06-30T00:00:00.000Z
contributors:
  - alexunam_777
  - komatic5
description: Shadow constructions are a crucial part of understanding light.
  After all, they let you accurately determine where light shines and where it’s
  blocked, without relying on guesswork. This guide will explain the main
  principles behind constructing shadows in Geometry Dash.
tags:
  - Grade 2
  - Light & Color
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Shadow constructions are essential for determining where light shines and is obscured, primarily in 3D scenarios. The most basic construction involves casting line shadows from a light source onto a "stick" to create a "light plane".
- When casting shadows onto obstacles, identify where the light plane intersects the obstacle and extend a new "light stick" from that intersection to define the shadow's extent.
- The approach used for shadow constructions varies depending on if the form is simple, complex, or an X-Y-Z form.
- Shadow edges can be sharp or blurry, depending on their distance from the object and the light source's size; blurrier shadows are more realistic.
- Direct light creates highlights, where light reflects from a form directly to the eye, and center light which receives the most direct light.
- Reflected light, where photons bounce off surfaces, reduces shadow intensity and contributes to softer shadows and ambient occlusion.

{{< /callout >}}

** **

**Note:** This guide applies to both 2D and 3D creations, but the skill ceiling for shadows is significantly higher in 3D scenarios. As such, it’s highly recommended that you familiarize yourself with advanced perspective techniques (at least up to Perspective 4).

You can also use a reference like [Shading Reference](<https://shadingreference.com/>) to help guide how you shade shapes and construct shadows.

# 1: Basic Constructions & Basic Lights

## Casting Line Shadows in Perspective

This is the most basic shadow construction, and all other constructions in this guide will depend on it. This shadow construction requires you to choose a **light source** (__a point in space__) and have a "stick" somewhere else in that space. You should know that light essentially travels in straight lines. As such, you just draw a line which goes from your light source into the ground, and rotate it so it barely touches your stick. The lines should only touch at one point.

{{< img src="https://lh3.googleusercontent.com/d/1zhOKEzQAe8wI69HA7aDj2icZxEs8mN2T" >}}

You can do this with sticks of any size and rotation. It is strongly suggested you start with horizontal and vertical stick constructions, both in 2D and 3D. Once you’re familiar with these, you can move on to diagonal sticks in either set of dimensions.

{{< img src="https://lh3.googleusercontent.com/d/16DZB6L53OKgva_Fz9EL2DJ1NDUv1By5N" >}}

More generally, this shadow construction creates a **light plane**: __a flat 2D plane which light travels on__. Light planes are the fundamental idea behind creating shadows, since they basically work as a 2D “slice” of any form. If you’re familiar with calculus you’ll know that planes are technically infinite, but in practice you only need to care about the parts of the plane that are obscured by shadow.

## Multiple Sticks & Light Types
Casting shadows with multiple sticks is still fairly simple, just draw the light planes for each stick, from your light source into the scene. The images above, in the prior section, show an example of this. Sometimes you will have sticks which exist on different height levels. For these, draw your light planes as normal, then mark the point on the stick where you want the height line to actually exist. Then, extend those points outwards from your stick until they hit your light plane.

{{< img src="https://lh3.googleusercontent.com/d/1wjyR8IGX0wZXNpu8AV8FOFaazPJt2Oqd" >}}

The types of constructions you make also depend on if you’re working with **local light** (e.g., a lamp) or **sunlight**.
- With **local light**, your light source is at a finite distance away. As such, the light planes from the object are not parallel and intersect at the light source. Your constructions stay the same as what you’ve been doing so far.

{{< img src="https://lh3.googleusercontent.com/d/1BhHUxIRQbJs6j1CV8-drKcV2yXsZOdT-" >}}

- With **sunlight**, the sun is so far away that you can effectively consider the light planes as parallel. As you should know from the perspective guides, this means your parallel light planes converge at a Vanishing Point. However, this VP construction only matters in specific scenarios, such as sunset; otherwise, you can just treat all sunlight as parallel for simplicity’s sake. If your sun is high enough in the sky, such as at noon, feel free to just make parallel lines for all of the lighting instead of dealing with more complex vanishing points.

{{< img src="https://lh3.googleusercontent.com/d/1nCj3flbBazr3WjhETX89LDMEu7DeVpTs" >}}

- Your sun may be above or below the horizon line. If it’s below the horizon line, your shadows will extend “upwards” from the ground.

{{< img src="https://lh3.googleusercontent.com/d/11FcWLaFdyQVmI36dP7JNrmvOj7flwffI" >}}

## Casting Shadows onto Obstacles
**Obstacles** are __forms which your light plane interacts with as the light travels__. These are crucial to understand as they block light from travelling further.

The basic construction for these is pretty simple. Construct your light plane normally so it goes through the ground (ideally on another E layer from your object). Then, find where it intersects with your object and mark the intersection on your form.

{{< img src="https://lh3.googleusercontent.com/d/1JxO9CfcGNMFRX_KcUVmMwNxZrHG5HsVh" >}}

If your obstacle is in front of your main object, it’ll likely cast a shadow onto it. To construct this, you should extend a new light stick that starts where you marked the intersection. Use this to define how far the light plane extends onto your object. In the example, the blue lines on the object are used to define the exact perspective construction.

{{< img src="https://lh3.googleusercontent.com/d/1-JHfWKcVJBYS4aqJkBfETbO0ZvrkT-pl" >}}

You may end up spending a lot of time on these constructions, especially since obstacles and normal objects both cast their own shadows. However, you can simplify this a lot. When your obstacle’s shadows fully extend onto the ground, they will merge with the cast shadow from your main object. If the obstacle fully blocks light from your object, you don’t even need to worry about constructing that shadow at all, saving time especially with complex shapes.

# 2: Casting shadows of forms

There are three main categories of forms we’ll go over here. **Simple forms**, like __cubes and spheres__, are crucial to understand so you can apply the basics. **Complex forms** are __combinations of simple ones__, so move onto those once you’re familiar with the simple forms. Finally, **X-Y-Z forms** are notably complex, and will require familiarity with the methods in the Perspective 4 guide. It’s recommended to only tackle these once you’re mechanically adept at working with perspective.

As a further note, since we’re moving from the basics of light into actual forms, the 2D diagrams won’t be used past this point. If you wish to understand light properly, it’s crucial to do so in perspective, even if you never use it for any 3D work past this point.

## Simple forms
You can group simple forms into two types: those with hard edges and corners, like rectangles, and those with soft edges, like spheres. Some objects, like cylinders, will use both sets of techniques.

- With forms that have hard edges and corners, create light planes that intersect with every corner of your form. Then, mark where your light planes intersect with the ground to create the rest of the shadow.

{{< img src="https://lh3.googleusercontent.com/d/1zbNMQiVU-nctYvBU4PN6CScg9xFcPPk6" >}}

- With forms that have soft edges/no corners, create a set of light planes that intersect with your form. Then, use these planes to approximate the form of the cast shadow on the ground.

{{< img src="https://lh3.googleusercontent.com/d/1ZhCfyBfWGKvVYcDWp__7xoJqZWS2cXg6" >}}

It may be difficult to initially tell where to put your light planes, but with shapes like cones and spheres there are a few crucial places. Most notably, you should construct a few light planes that are tangent to your shape. These define the **terminator**: __where light is parallel with your form, and it should rapidly get darker past this point.__

{{< img src="https://lh3.googleusercontent.com/d/1Ivp9YK3mdN5v0KnaHjkUjiKmNytLi4fe" >}}

The terminator on a sphere is usually around a 50/50 split on its surface, although that depends on where the light source is. A small light casting a pinpoint on a sphere will obviously have a terminator that’s very small. For cones, the terminator isn’t at a perfect 50/50 split; more of the cone is usually in light than shadow. This is important to understand when pairing cones with other shapes, like in the section below.

## Complex Forms (Combinations of Simple Forms)

Fundamentally, this requires the same skills as simple forms, as complex forms are really just combinations of simple ones. However, you’ll also have to deal with light sticks with different heights.

{{< img src="https://lh3.googleusercontent.com/d/1TUkck0WpXUV5H969nlyrTjbSnbDgwi1S" >}}

It is suggested to cast the shadows for the form one at a time.
1. Start with the highest part of the form, and cast the shadows for the top part onto the ground/lower parts of the form.

{{< img src="https://lh3.googleusercontent.com/d/1mPFbJbvLoqEH6dXSd6C2OXEUH2hV7Oam" >}}

2. Then, go through the lower parts of the form, casting the shadows for each part onto the ground/lower parts. If the shadows from the top part overlap, you’ll set these shadows to have the same color, so no ‘stacking’ will occur.

{{< img src="https://lh3.googleusercontent.com/d/1JqTJDtk_yiFjWnBwNUS-ZHSjujmqwRAR" >}}

Some complex forms will have holes in them and other “overhangs”, which requires you to cast shadows onto obstacles as mentioned previously. Construct the basic cast shadow normally, and then construct the intersection between your light plane and the overhang to make the more complex shadow. You may also have to account for where light is blocked by the walls or vertical sections of your form. Depending on the form and the angle of light, this may mean very little light actually makes it through the form.

{{< img src="https://lh3.googleusercontent.com/d/1OHc_K0s9vFkez9HGzlg9dJ8soHYHIsqX" >}}

Notice how the overhang shadow (on the right side of the form) was constructed using the ellipse. Essentially, the ellipse was constructed around where light would hit the form, and used to rotate that light plane to be parallel with the actual form.

{{< img src="https://lh3.googleusercontent.com/d/1Jox26iJMmmAraazaoFQNzbCB7nUWcVRp" >}}

{{< img src="https://lh3.googleusercontent.com/d/1TWsWY3C-7qT6s14ubsU-5tWOtSt-jkLO" >}}

## X-Y-Z forms

These forms are often too complex to render by making light planes for “every single corner” of your form. You’ll have to make multiple cross-sections of your form, create light planes that intersect through each cross-section, and then use these planes and your knowledge of that form to construct a shadow shape.

{{< img src="https://lh3.googleusercontent.com/d/1MWrtZoqB182HA_6888_UF2xOGdJLE9hT" >}}

When the light planes are parallel with the cross-sections you used to create the shape, you can just use the existing cross-section constructions to cast shadows. The green lines here were used to construct the X-Y-Z form, and were simply repurposed to construct the shadow.

{{< img src="https://lh3.googleusercontent.com/d/1X5buoJnAjFR0vdHzFLLdCAij52JrT089" >}}

{{< img src="https://lh3.googleusercontent.com/d/1DyeiPnB86YjQHZhQ92n6a0TD9eVGS6et" >}}

If your light planes aren’t parallel, you’ll need to construct new cross sections in your form for each light plane.

{{< img src="https://lh3.googleusercontent.com/d/1eRASflVRcPoWJQ4zxLOIxKIVsV4l6MeP" >}}

{{< img src="https://lh3.googleusercontent.com/d/1Jbx7onoJErqa02CUT9hZSy_AMCUW9IQW" >}}

# 3: Shadow Specifics

Once you’ve constructed your shadows, there’s still more work to be done. As you should know from the prior guide, light isn’t just as simple as “lit areas” and “shadows”. This section will bridge the gap between those two concepts by exploring a bit more about shadows and highlights.

## Shadow Edges

Shadows aren’t perfectly sharp all the time. The further a shadow extends from an object, the softer and blurrier the shadow edges will be. Longer shadows will also be blurrier than shorter ones, regardless of how close the light source is.

{{< img src="https://lh3.googleusercontent.com/d/1Es-CaR5SMBR-4wsOXrzfaYQ-PtyNJ0-k" >}}

This occurs because in real life, light doesn’t just come from a single point ; light sources have width and height, so photons from one side will end up hitting the other and causing less direct, less sharp shadows. This is what causes partial lunar eclipses, and the same concept also makes shadows get blurry over time.

{{< img src="https://lh3.googleusercontent.com/d/1OifEwzY8nsdYOSS9EUIiP_Uju9ZziQKd" >}}

This can also be a stylistic choice. If you want more realistic-looking deco, incorporate softer shadows and smoother transitions between light and shadow. If you want more cartoony deco, use hard edges more often.

## Highlights

**Highlights** are __the spot on an object where light travels most directly to your eyes__. As such, they’re the brightest area on a form. There are technically two types of “highlights”:
- What we commonly refer to as highlights are the spots where light bounces to your eyes most directly. These highlights move to different areas of the form depending on where you are.
- There’s also **center light**: __the part of the form that receives the most direct light__. Center light always hits the same place.
These two highlight types can overlap sometimes, such as when the light source is behind you, but they *are* distinct. The 3D model provided shows this: the highlight is marked in red, while the center light causes the edge of the form to be lit up.

{{< img src="https://lh3.googleusercontent.com/d/1kbP9i6yeH-Qj-nSC6LmKsdqLeY4gJ9wO" >}}

## Reflected Light

Light doesn’t just sit still—it bounces off objects and the ground constantly. **Reflected light** is __simply photons that bounce off the ground or other objects and light up your main object__. This is usually most visible in the form and cast shadows, as it makes them less intense over time. You can usually eyeball the construction for this, since it affects the darkness of your shadows and not their actual shape. However, you will be able to explicitly construct these after going through the Reflections guide.

{{< img src="https://lh3.googleusercontent.com/d/1Htaq0YeLapdScklHwg-3s8Gd0ONLdkU1" >}}

Reflected light is what makes ambient occlusion possible, and it also makes shadows softer as well. Without it, such as in space, shadows are harsh and absolute; with it, you can describe more of a form.


# Sources
- How to Render (Scott Robertson), chapters 2 & 4
- [Why are shadows sharp close to the object but blurry farther](https://physics.stackexchange.com/questions/690831/why-are-shadows-sharp-close-to-the-object-but-blurry-farther)
- [Eclipses](https://www.astronomy.ohio-state.edu/pogge.1/Ast161/Unit2/eclipses.html)
- [Sphere Lighting Reference](https://sketchfab.com/3d-models/sphere-lighting-reference-f6c6fcf7a7594b7698a206813f412c58)
- [A Short Introduction to Light](https://jeffsearle.blogspot.com/2016/08/a-short-introduction-to-light.html)

