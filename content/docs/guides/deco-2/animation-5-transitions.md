---
draft: true
title: Animation 5 (Transitions)
weight: 8015
date: 2026-05-19
description: Transitions let you smoothly change the decoration in your level.
  Good transitions can be just as interesting as the actual decoration you're
  making. This guide will go over many types of transitions and explain how you
  can make them.
tags:
  - Grade 2
  - Animation
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}





- A part transition within a level connects two separate parts together. How these parts connect can make or break a level's selling point depending on its execution.
- There are many ways to choose the “right” transition for your parts which can be boiled down to 5 categories: Hard Cut, Fade, Screen Wipe, Match Cut, and Continuous.
- Match cuts are subdivided to 3 more categories depending on which element you're putting more attention to: Shape, Momentum, and Color.
- Each category communicates specific types of change, atmosphere, emotion, and context.
- If you are unsure about which combination of transitions is appropriate for your level, reconsult your level’s vision to flesh out tangible details.



{{< /callout >}}

A level may have individual parts that vastly differ from each other, and yet still connect. This is all thanks to part transitions. Creators have developed many ways in the editor to make transitions, but the vast majority fall under five categories depending on how you want to connect these parts:

1. Hard cut: one part will instantly switch to the next part with little to no other effects.
2. Fades: the screen turns to a solid color, usually black, before turning into the next part.
3. Screen wipes: the screen shifts from one part to another, revealing the next part.
4. Match cuts: the screen instantly changes to the next part, but keeps one detail the same in between parts: shape, momentum & color.
5. Continuous: a seamless transition that integrates almost all the elements of both parts together so that there is no definitive time stamp separating the two parts.

# 1: Hard Cuts

Have you ever turned off your room’s lights and noticed how instant it went from on to off? That’s the gist of a hard cut. They range from 1 instant cut or multiple cuts through glitch effects or camera shutters.

Most of the simplest trigger setups come from hard cut transitions; you might use an [alpha](https://www.gdcreatorschool.com/docs/guides/triggers-1/alpha/), a [toggle trigger](https://www.gdcreatorschool.com/docs/guides/triggers-1/toggle/) or a [shader trigger](https://www.gdcreatorschool.com/docs/guides/triggers-1/screen-filters/), and 2 groups for switching the cut.

{{< callout context="note" title="" icon="outline/info-circle" >}}

* Key message: snappiness. Like a snap of a finger, you’re not meant to dwell on a hard cut for that long unless you’re doing glitches. Otherwise, you’re trying to communicate a loading state or a part being off.

{{< /callout >}}


Factors to consider:

1. Frequency of hard cuts

## Example

In [STARPUNK](https://youtu.be/-9fKSBc7naQ?si=k5JdQ8CNZDiYjvLb&t=7) by Ferdefunky, the cube transitions to the ball part with some minor glitches before an instant hard cut to the next part. The reason why this works is because the song allows this type of transition to happen.

[Beachie](https://youtu.be/p4XUF_fvU5Q?si=DD4Z7ZDEUlSoiWmV&t=2)’s intro for this example has the song starting out with this glitchy voice that speaks backwards, hence used both chromatic glitch and the glitch shader to convey that voice. Once the music starts playing, that's when the colors cut into place starting the level.

# 2: Fades

You may think that hard cuts are too fast for your transition and require a softer and slower change. That’s where fades come in: a part has a timeframe where it either switches to the next part or an overlay in between (usually black).

With fades, timing is a huge factor. Do you want the fade to be short, resembling a soft cut? Or do you want a much longer fade?

Fades provide the most gentle tone in transitions which makes them an excellent combination with slow-paced segments in the song. It’s simple to use, albeit slightly more challenging than hard cuts because duration is a big factor. However, I'd be careful if your fade transitions rely on opacity especially when the objects overlap.

* Key message: delay

Factors to consider:

1. Frequency of fades
2. Time taken to complete the transition

## Example

[Stargaze](https://youtu.be/sgbl2hnOS5A?si=dz21Er3w7ciB6Uns)  by Miracatsy & GDLudvigg introduces the level with a black overlay that slowly fades out showing the scene. This fits excellently because the song hasn’t started yet and it gives expectations to the relaxing atmosphere in the upcoming parts. Arguably, using a fading black screen for this case provides a solid narrative detail.

[Stereo Madness](https://youtu.be/hI8AoSVkScA?si=-01FYyVFl8GWmJ_d&t=24) also does a fade before entering the first ship section as a form of anticipation. It goes to show how these transitions are made in older updates considering its limitations.

In contrast, [PXTTXRN SXXKXR](https://youtu.be/e9iIZMfUg94?si=JIDLncwx93RDKTul&t=13) by Viot uses a black overlay and a quicker fade time before going straight to the drop.

# 3: Screen Wipes

Screen wipe transitions are made when one part is covered by a moving overlay that reveals the next part. So alongside the time showing the speed of the overlay, the overall shape is also a factor. They fit the middle ground of being simple enough to set up but also versatile enough to make interesting transitions.

* Depending on your trigger setup, screen wipes are reusable.
* Requires some amount of planning to set it accordingly to the level's vision

Key message: direction

Factors to consider:

1. Frequency of screen wipe
2. Shape of screen wipe
3. Time taken
4. Direction of screen wipe

## Example

[Virtualization](https://youtu.be/9Hl7ZlVAwm4?si=2ZVf6rr9JOFjP8gp&t=28) by Splinter25 has a vertical screen wipe where a white overlay moves downwards to show the UFO section.

[STARGAZE](https://youtu.be/HxzcrtNtYw0?si=7VjS_aSTxT2wK8JN&t=65)’s drop section has a vertical screen wipe with circle objects that descend in size in its edges. The same wipe was used consistently throughout the drop section until the last climactic part of the level where the background turns white.

[Beachie](https://youtu.be/p4XUF_fvU5Q?si=tbqdWvqlUQib01MR&t=58) has a split screen that exits from the middle, effectively creating 2 different screen wipes, opening up the next part.

# 4: Match Cuts

Match cuts happen when there is one element in between parts that stays consistent, while everything else changes, even when the parts seem disjointed.

Key message: relationship

Due to the extra factors to consider, it is tedious to set up. Make sure you have a plan for what you want to do and commit. Otherwise, the cleanup will be messy. Depending on which element you want to use as the main link, you can subdivide match cuts into three major variations:

1. Shape
2. Momentum
3. Color

## Shape

A transition cuts to the next part by connecting their shapes whether it’s through the background, block designs, or even the player icon.
[Virtualization](https://youtu.be/9Hl7ZlVAwm4?si=UnCRfNARUJ3opQNE&t=67) by Splinter25
[Shards of Siberia](https://youtu.be/lSAu5YE3TgI?si=fun4BRJZ5xO3mxZO&t=37) by Xender Game
[Ring Trick](https://youtu.be/60UYMj1gXRY?si=EtMAtdEA4RuQB4kW&t=97) by Zoroa is arguably the level with the most shape-based match cuts.

## By Momentum

For this cut, both transition parts share the same speed that the cut looks like it’s moving quickly. This is similar to a cut on action transition.

[Dream Flower](https://youtu.be/oi3X4s9tSiw?si=h_bXMEIPeykKxMRS&t=64) by Xender Game & Knots

[PXTTXRN SXXKXR](https://youtu.be/bYHDgyngz9s?si=I1ndnJbTaFIypXPr&t=33) by Viot
[Shards of Siberia](https://youtu.be/lSAu5YE3TgI?si=fh3aWB6MyhiL0yJ7&t=17) by Xender Game

## By Color

For this cut, both transition parts share the same color even if it has a different shape.

[CICADA3302](https://youtu.be/d6BbxlwY0lY?si=4JSWSRxCBn3KoT2M&t=364) by Darwin has a 4x speed transition that has a red color UI matching the color of the speed portal, and once the drop starts, the red blares throughout the background.

# 5: Continuous

Finally, a true continuous transition integrates almost all the elements of both parts together so that there is no definitive timestamp or visible cut separating the two parts.

Key message: seamlessness

Most players when they talk about immersion usually flock to continuous transitions. However, similar to match cuts, you need a strong plan to commit to before doing this kind of transition, while also having a more complex trigger setup to make the transition seamless.

Factors to consider
Elements before the transition
Elements after the transition
In-betweens
Trigger setup
Lag considerations
Substitute for Low Detail Mode

## Example

[City Rush’s transition from lumpy’s part to Devon’s part](https://youtu.be/w1269ZHvOk4?si=CokjbZ8W3iTZlkkI&t=37) is seamless due to how the part reveals itself through a single pink dash orb. And even then, lumpy’s part is still visible below as you’re playing Devon’s part.

2.2 has made the setup for Continuous transitions much easier thanks to the new camera triggers:

* [Space Invaders](https://youtu.be/q9fAbO15sts?si=docZTaXshM93D412&t=37) by Cornbread integrates the scale trigger and zooming effects to give a sense of travelling through space as per the Earth planet zooming out far into the background.
* [Experiment](https://www.youtube.com/watch?v=vY2bwvFyg_A) by mbed and more has the static camera move seamlessly for each stage making them look like one gigantic whole.
* [Duckstep](https://youtu.be/bO2M9D9G29Y?si=ewF2YaG0YUMuXAOP&t=41) by Knots
* [Skeletal Shenanigans](https://youtu.be/AKqLAchDj4k?si=bSwuQFFbskYy4K9y&t=42) by YoReid & Airz has a cannonball section that while implements a continuous transition in the cannonball, the use of scale triggers also make the part lag, especially for lower-end devices.

# 6: Wrap Up

Now you can choose which transition fits best for the part, note that usually multiple of these could work. To choose the combo that is the best or close enough, think about the environment your level takes place in and imagine which transition would make the most sense logically and/or emotionally with the song. If the player is teleporting a great distance or even between dimensions, a hard cut could be enough. If it’s not an instant teleportation or is a slower paced part, a fade could be added to soften the transition. If the player is moving continuously between environments that are too hard to integrate into each other, a screen wipe or match cut would fit more easily. What matters here is that the transitions that you choose clearly conveys your level’s vision.

You can have have different transitions for the entry and exit between two parts. Maybe the player can enter with a pulse fade followed by a screen wipe such as [Swingie’s TV transition](https://youtu.be/phrXeZSrGPY?si=ybCK8y20rXnz0_Ij&t=25). Or maybe, you can combine multiple transitions for the same entry/exit transition such as [STARGAZE](https://youtu.be/HxzcrtNtYw0?si=MtH8-ooU2ZY7JsAC&t=23)’s screen wipe and momentum match cut combo in the first ball part.

Again, while all transitions are valid, make sure you are confident with the transition that you want that fits the level’s vision. So if you want to figure out when a part transition “fits” for your level, reconsult your level’s vision.

\~\~                                                                       \~\~

## Summary

* A part transition within a level connects two separate parts together. How these parts connect can make or break a level's selling point depending on its execution.
* There are many ways to choose the “right” transition for your parts which can be boiled down to 5 categories: Hard Cut, Fade, Screen Wipe, Match Cut, and Continuous.
* Match cuts are subdivided to 3 more categories depending on which element you're putting more attention to: Shape, Momentum, and Color.
* Each category communicates specific types of change, atmosphere, emotion, and context.
* If you are unsure about which combination of transitions is appropriate for your level, revisit your level’s vision to flesh out tangible details.

\~\~                                                                       \~\~

* **Research:**  <@521057526393995285> <@723445194862624808>
* **Examples:** <@723445194862624808>
* **Proofreading:** <@User ID>

## Return To the [Table of Contents](https://discord.com/channels/414295025883545600/1104659252984946760/1104659252984946760) here
