---
draft: false
authors:
  - sparktwee
title: Animation 1 (Timing & Easing)
weight: 8108
date: 2025-11-15T00:00:00.000Z
contributors:
  - averageundertalefan
  - sparktwee
description: "How does a drawing come to life? For every animation movie that
  you’ve watched and every crazy Geometry Dash effect that you’ve seen, there
  are individual objects that change positions to simulate life-like movement.
  For the first animation principles guide, we’ll discuss two principles that
  communicate an object’s speed and acceleration: Timing and Easing."
tags:
  - Grade 2
  - Animation
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}








- Timing measures movement in terms of frames: slow moving objects have more frames in between while fast moving objects have less frames.
- Slow timing usually communicates the following: delay, old age, heaviness, grace, timelessness, patience.
- Fast timing usually communicates the following: responsiveness, youth, lightweight, flashiness, rush hour, deadlines.
- Easing explains how these frames are spaced out. Due to how objects tend to accelerate and decelerate when they move, it also can be translated in animation: Slow In, Slow Out.
- Within the context of Geometry Dash, some triggers are equipped with their own easings that you can choose; some of which will have more versatile use cases than others.








{{< /callout >}}

- - -

# 1: Timing

While time is measured in seconds, animation is measured in **frames**, *which are single images captured at a particular point in time*. Timing shows how many frames are required to complete a specific action. Assuming the creator is using the same framerate, more frames between poses create slower actions, while less frames between poses seem faster. Knowing when to use slow or fast timings will give you a strong foundation to animate.

{{< img src="https://lh3.googleusercontent.com/d/1QmuaIRG4iFh1emuYhbtKnXo_qCVHaqIk" >}}

{{< youtube aeWPcZLNT_c >}}

## Slow Timing

Sequences that use more frames result in slower timings; movements are stretched out, allowing the viewer to focus on the subtle details and nuances of a structure’s animation or the surrounding environment, like the background. This is often used to convey a range of emotions, like tranquillity, suspense, or weight. By prolonging the action, **the viewer’s attention is more drawn to the emotional or physical significance of an element**, developing atmosphere and helping to anticipate what comes next, which enhances the contrast of dramatic moments that can be done with its counterpart: fast timings.

For example, in [Shadow of the Colossus](https://www.youtube.com/watch?v=7YHHYthPIc4), notice how slowly the 3rd colossus, Gaius, takes its time waking up before going to a fighting stance. This gives the impression that it is old, gigantic and heavy. In addition, due to how slow its anticipation is when it is preparing to attack, it clearly signals the player on how powerful the attack is, prompting them to avoid it.

Applying this to Geometry Dash, [alas](https://www.youtube.com/watch?v=rtTFemGXReQ&t=41s) by Tohey also creates the same impression thanks to how slow the timing is in its setpieces. From the airplane to the dragon flapping its wings and how the plane ditches into the sea.

## Fast Timing

On the other hand, fast timing communicates urgency, excitement, or lightness. Movements are sharp and energetic, which can reflect dynamic action, responsiveness, or spontaneity. With fast timings, **a creator can draw the viewer’s attention as a focal point, making scenes feel thrilling**. It’s also essential in accentuating contrasts, such as transitioning from calm, slow moments to fast, chaotic ones, which can create surprise and impact.

A great example is the contrast shown with Gaius and the adventurer that you’re controlling, Wander. While it also moves slowly to indicate gracefulness, when running alongside Gaius, it makes you look small, swift, and fragile.

This fragility also applies to how Hollow Knight handles its own animation and fights. With the player being much smaller and nimbler compared to the bosses, notice how the controls use faster timings to communicate responsiveness. Not to mention, due to how tiny these bugs are, it also communicates the game’s scale and scope accordingly.

In GD, most flashy effects fall into fast timings since most Newgrounds songs facilitate fast beats ranging from dubstep to EDMs. But one example that uses fast timings especially well is in [Circus Dash](https://www.youtube.com/watch?v=eKXN8qzT6gU&t=15s) by MCAASJ. Combining how the characters are rigged and how nonstop their movements are, it creates an energetic, whimsical, and chaotic atmosphere fitting its circus theme cleanly.

# 2: Easing

While Timing explains how many frames are used to complete an action, **Easing explains how the frames are spaced**. How is the object moving? Is it accelerating, decelerating, or staying consistent?

## Application

Most living beings move like this. They slowly gain speed in, then slowly lose speed as they come to a stop: Slow In, Slow Out.

{{< img src="https://lh3.googleusercontent.com/d/1TVwF3MX9_Ib4tSw6UbRfxbTgzIR5qJT9" >}}

Animals rarely move in a normal straight line because when it comes to living things (large and small), their limbs have to move in arcs. This explains part of why the “None” Easing is rarely used.

On the other hand, if the aim is to communicate a more industrial/factory setting where precision is key, having zero easings can be a more fitting choice, such as in [Alika](https://www.youtube.com/watch?v=UpOfN5UrT4Y) by 2003Devin.

## Trigger Easings

Some triggers in the Geometry Dash editor such as the move trigger, rotate trigger, or keyframes trigger offer 19 easing options, each with their own matching velocity graph and use. In reality, there are 5 types of easing curves, each with an ‘in-out’, ‘in’, and ‘out’ variation. The ‘in-out’ variation indicates that the special graphical properties of the easing graph are seen at the beginning and ending of the graph, whereas the ‘in’ and ‘out’ variants only include these variations at the end and start, respectively. These easings can be plotted into a graph to note down how the speed changes.

When choosing an easing, **think about the movement you’re trying to make**. Are you making a heavy object that needs a lot of time to start or stop moving? Is there a “wind-up” where the object must “charge” up its speed before rapidly moving, or is it suddenly screeching to a halt? Do you want a more natural or a more robotic movement? Keeping this in mind will help you use the easings below for intentional reasons.

### Easing Options

{{< youtube pPfMCqZe360 >}}



2. None - Completely linear and moves in a constant velocity. Usually for robotic movements or instant movements where easings are irrelevant.
3. Ease In Out - Mildly faster velocity at the middle of the motion.
4. Ease In - Mildly faster velocity at the end of the motion.
5. Ease Out - Mildly faster velocity at the beginning of the motion. HOWEVER, due to how this easing was coded, it won’t accurately follow the movement in the video, even if the difference is subtle. As an alternative, you can stack 2 different move triggers where one has the Ease In and None Easing as long as the values cancel each other. (Or you can use sine out instead)
6. Elastic In Out - Overshoots the elastic velocity at the beginning and end of the motion.
7. Elastic In - Overshoots elastic velocity at the end of the motion. Think of this like pulling a rubber band back before letting it fly.
8. Elastic Out - Overshoots elastic velocity at the beginning of the motion. Think of this like a car screeching to a halt; you’ll move forward as the car brakes, then backwards into your seat after.
9. Bounce In Out - Provides bounce-back velocity at the beginning and end of the motion. Usually for chaotic and erratic movements.
10. Bounce In - Bounce-back velocity at the end of the motion. This is usually for objects that are building up their jumps like a spring.
11. Bounce Out - Bounce-back velocity at the beginning of the motion. Usually for objects to move into place in a more lenient and lively manner
12. Exponential In Out - Sharp velocity at the beginning and end of the motion. Usually for smooth movements that require a large contrast in its velocities to achieve an effect, such as motion graphics.
13. Exponential In - Sharp velocity at the end of the motion. Usually for objects accelerating as they exit.
14. Exponential Out - Sharp velocity at the beginning of the motion. One good use of it is for air particles to swoosh quickly at a drop section.
15. Sine In Out - Sine wave-like velocity at the beginning and end of the motion. Usually for floaty S-curved movements
16. Sine In - Sine wave-like velocity at the end of the motion creating a gradual exit from the screen.
17. Sine Out - Sine wave-like velocity at the beginning of the motion. Creating a gradual entrance to the screen.
18. Back In Out - Slight anticipation and overshoot at the beginning and end of the motion. Usually for skittish or giddy movements.
19. Back In - Slight anticipation at the beginning of the motion
20. Back Out - Slight overshoot at the end of the motion

You have the freedom to use easings to communicate how an object moves and behaves. Even more, you can stack those easings to create more complex movements. For instance, by stacking Sine In and Sine Out easings, you can create curvy movements like the example below.

# 3. Examples

Here we will explore many examples of timing and easing and explain them in depth.

![](https://ssb.wiki.gallery/images/thumb/0/00/GanondorfFSmashSSBU.gif/300px-GanondorfFSmashSSBU.gif "Ganondorf attack gif")

Take this attack animation for example. Because the sword is extremely heavy, Ganondorf cannot swing it immediately, due to the inertia. The animation shows this by exaggerating the ease-in of the animation, to show him fighting against the sword's weight, before violently striking the ground from gravity.

![](https://media1.tenor.com/m/tvWglgD9r8cAAAAd/sonic-the-hedgehog-sonic.gif "sonic slowing down")

You can also take Sonic's sudden halt for example. Because he runs faster than the speed of light, he cannot just "stop moving" (Unless you break the laws of physics, of course.) That is why he goes into a dramatic sliding animation to fight his intense forward force and momentum. It mimics friction and the sudden deceleration of speed, making the viewer see how fast Sonic was before the stop.

You can even show emotion through timing.

![](https://media.tenor.com/hKhRBbx1Oi8AAAAM/squidward-squidward-meme.gif)

As you can see, Squidward clearly looks happy and relaxed, as he plops into the chair with fast movement. The fast timing directly correlates to the positive energy. The quick motion and the way he "plops" onto the chair and bounces shows that he feels good, rather then it being instantaneous with a hard impact where he just plummets onto it. On the other hand, if Squidward were tired, he'd probably get on the chair slowly, instead of quickly.

![](https://media1.tenor.com/m/8UmntBwQJSsAAAAd/spongebob-spongebob-squarepants.gif "squidward annoyed putting back chair")

Or even here, where  Squidward is annoyed and quickly packs up his lawn chair. If it had a smooth, slow ease, it would probably look like he was gently packing up everything, looking happy and calm. If it didn't have any real timing at all, the movement would look robotic, like an emotionless task being completed. Because it starts slow and Squidward rushes back to his house, it tells us he is doing that out of pure spite and annoyance.
