---
draft: false
authors:
  - komatic5
title: Making Animations
weight: 5110
date: 2023-08-05T00:00:00.000Z
contributors:
  - komatic5
  - yoreid
  - poryii
  - l.ucs
description: Animations are often a complex and tedious part of creating levels,
  but there are many practices you can use to simplify this process for
  yourself. This guide explains the main types of animation you should consider
  when making a block move, adding a custom cutscene to your level, or anything
  similar.
tags:
  - Grade 1
  - Deco Skills
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Animation in GD can be divided into four different parts; X movement, Y movement, Rotation, and Frame-by-frame.
- It’s very useful to think of X and Y movements separately, and use easings to get the specific type of movement that you want.
- You can then use rotation to make your animations feel slightly more lifelike, and anything more complex (such as objects changing shapes or morphing) can be done using frame-by-frame animation.
- Keep in mind that you probably won’t get your animations perfect on the first try; always be open to adjusting your movements or adding more parts to your animation, like particles and pulses.


{{< /callout >}}

- - -

# 1: X and Y movement

Although these two forms of movement are essentially the same, it is very useful to **imagine them as separate elements that should not be done by the same move triggers**. If the animation includes complex movement in both the X and Y direction, try to imagine the animation only in terms of its movement from side to side and then make move triggers that accomplish that motion. Afterwards, imagine it in terms of vertical motion and make a second set of triggers that cause that motion. While this simplifies planar motion down a good amount, there still are many ways you can go about it because of the many easings that move triggers have. Understanding what each easing actually means will reveal a lot about when and where they should be used in animating.

* **None:** Good for robotic motion, but try not to default to this for easing unless it is for movement that is very fast and brief.
* **Ease In:** This is a perfect representation of an accelerating object, if you want to make an object fall, this is the easing you use.
* **Ease Out:** It is best not to use this easing almost ever, as RobTop seems to have programmed it incorrectly so that it forms a square root graph instead of a negative quadratic graph, so the movement ends up looking very choppy and unnatural.

{{< callout context="caution" title="Note: If you need to animate using a proper 'ease out' trigger, try instead combining two triggers together, one using a 'none' easing and DOUBLE the distance you want, the other using 'ease in' with the NEGATIVE of the distance you want." icon="outline/info-circle" >}}


{{< /callout >}}

* **Elastic In/Out:** This is a bizarre easing, it seems to be a combination of sine waves depending on the easing value you give it. Either way it doesn't have many uses that other easings don't already do better.
* **Bounce Out:** Of the bouncing easings, bounce out is the only useful one for obvious reasons. This can be used for making an object fall a short distance and interact with the ground, but it often can look lazy and overused for that purpose so use it sparingly.
* **Exponential In/Out:** A very fast paced easing, mostly best for motion that either has a large distance or long duration
* **Sine In/Out:** This is a perfect representation of a sine wave, making it work well for movement that repeats itself back and forth. Anything that moves in a wave-like way should use this.
* **Back In/Out:** Great for fast paced motion to make an object look like it has force behind it.

# 2: Rotation

Rotating in animation is not as complex as other aspects, but it is still important to making movement feel complete. Most of the time a lifeless animation can be improved greatly with subtle swaying and rotating that corresponds to its motion. If something moves to the left quickly, it should lean to the right, and vice versa.

# 3: Frame by Frame

This is where animation can get interesting, as frame by frame theoretically allows limitless visual manipulation. **Frame by frame is used when there is certain movement that can't be accomplished with normal triggers**, such as objects morphing into different shapes, changing size, or tracing paths that are too complicated to do normally. Normally frame by frame is done by making objects or sets of objects assigned to different groups where each is toggled on and off one after the other, but there are of course other ways to do it, like color channels or move triggers with 0 duration.

When using frame by frame, it is best to take advantage of the techniques used in animation outside Geometry Dash. A notable one is smear frames, where an object will briefly appear stretched out as it travels very fast. Another technique is giving objects a two or three frame loop that changes the shape or outside of it ever so slightly to make it look more alive.

Of course, a major drawback to frame by frame is it can be incredibly object heavy, because each frame is its own set of objects while being on the screen for intervals less than a fraction of a second. When using this, **make sure the object being animated is as heavily optimized as it can be, and make sure you only have as many frames as you need**. A good rule of thumb is to space each frame apart by about 0.06 seconds, as it is a nice compromise between 24 and 12 fps animation. Of course spacing between frames can vary for each frame, as doing this allows tweaking the easing of frame by frame artificially, but generally speaking: anything slower looks choppy, and anything faster is unnecessary.

# 4. Using Keyframes

Keyframes can heavily enhance your animations, as it is easy to get the hang of, and using them is quite simple.

They can be helpful in many ways, as they allow for complex, smooth, and synchronized animations. (Moving, rotating, scaling, etc.) It can give your levels smoother transitions, with different easing settings to enhance the overall look of the animation.

Keyframes are also more viable and easier to use than the standard move/rotate triggers, as you can just edit the keyframe, rather than changing a whole system of move triggers that all have different properties. This also reduces clutter in the editor. Not only are they very reusable, they also give you an easy way to visualize the way your animation will look, and what you are trying to do.

## How to use Keyframes

* First, let's lay out the way we want the animation to look. This is what I did, but you can make your keyframes in any way you like.

{{< img src="https://lh3.googleusercontent.com/d/1yjptIfJ9wx0qdEaT0oN4ddYTIWUlVg53" >}}

* Then, we can give the object that is going to be animated a Group ID, and give the keyframes a separate group id.
* We can place a Keyframe Trigger, and edit it so that the Animation ID is the same group ID as the Keyframes, and the target ID is the block we are trying to move.

![](https://lh3.googleusercontent.com/d/1-zCDJu_wl0jjjKR61XAqV-vJ9PNa1xKG)

* Now, you can change the keyframe settings and add more, if you need.

{{< youtube h-VihAUadQ0 >}}

This is my finished product, feel free to try to make your own!

## Important Things to Note:

* You can rotate the keyframes itself to rotate the object that is being animated. This applies to scaling too.
* You can make your animation curved if you have more than 3 keyframes in your animation, which will make it so that the keyframes can move more smoothly and freely, rather than just moving in a straight line.
* Changing the duration of the keyframes is simple, it's the amount of time it will take for the object to get to the next keyframe.
* Easing can also make your animation look more smooth, just like we said earlier in X and Y movement.

This video here shows how keyframes work more in-depth:
{{< youtube ABErZxRhQXc >}}

# 5: Examples

A simple but thorough example of these 4 aspects of animation in motion is the bossfight in `BEATDEMON`. The boss begins by summoning obstacles by chomping forcefully in a rhythmic manner, with each barrage of obstacles using a different pattern of motion the boss moves in while chomping.

## X movement

{{< gif src="https://lh3.googleusercontent.com/d/1_uwV0Tyk1nNaERhW8VB2EO6PO1tJuyxZ" >}}

This movement is the simplest. The boss is alternating from left and right with each bite, so the movement is simply a 'none' easing switching at every beat. As the bossfight progresses, though, the X movement eventually becomes more dramatic like the Y movement to match the rising intensity.

## Y movement

{{< gif src="https://lh3.googleusercontent.com/d/1MRhXcziH-h078BluS-mQa262xCa1hqDf" >}}

This bouncing motion is a combination of 'exponential out' move trigger activated first going up, followed immediately by an 'exponential in' move trigger going down. Despite the triggers having the same duration, it results in a sudden jolt up caused by the first trigger, which is only corrected later when the second trigger catches up.

## Rotation

{{< gif src="https://lh3.googleusercontent.com/d/1qijHawfe1DemjiHP5EmeF8If8XPbDJvy" >}}

This part of the motion is as simple as the X movement, it's a rotation loop with no easing. It is still very important, though, as it displays the same leaning motion described earlier; whatever direction the boss moves, it will ‘lean’ the other way.

Notice that in the X and Y movement and rotation, there is a bit of randomness in the trigger values. While the movement loop is already life-like on its own, it becomes very robotic when the exact same movement is repeated over and over. As such, adding some slight variation helps to make the animation feel more dynamic.

## Frame by Frame

{{< gif src="https://lh3.googleusercontent.com/d/1MKD80aDiv_04IQIqnIQb8-hDhLslRbTL" >}}

This animation shows a perfect instance to use frame by frame. The bosses movement and design is already cartoony, so a squash and stretch loop as well as the exaggerated impact frame reflects this vibe even more. Also, the boss design is very simple, so making several copies of the boss for each frame is not object heavy at all.

Here is the finished product:

{{< gif src="https://lh3.googleusercontent.com/d/1TKUus9idxs2C1RlPbHivLxpEcHGN4Tmc" >}}

Notice how the design for the boss is very simple, yet is the most iconic part of the level due to the execution of its animation. One of the best ways to get the most out of your animations is to make the animation the entire theme of the level.

Getting easing and frame by frame right on the first try is near impossible, even if you have excellent mental imaging skills when setting up triggers. So always remember an animation can be turned from terrible to very natural with only small tweaks to the values of your move triggers. If something in the movement seems off, try to picture what you want it to look like and contrast that with what you have, then translate that to tweaking triggers. Another way to improve a lifeless animation is to simply add more; small additions of impact frames, particles, and pulses can be excellent finishing touches when done well.
