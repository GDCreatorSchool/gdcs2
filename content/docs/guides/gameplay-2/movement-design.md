---
draft: false
authors:
  - interestex
title: Game Design 2 (Movement Design)
weight: 7190
date: 2024-11-30T00:00:00.000Z
contributors:
  - interestex
  - illusion2
  - psytrancegd
description: Movement is a core aspect of any game, and can make or break a
  game’s immersion and enjoyability. This guide will cover many fundamental
  details in the process of designing good movement systems.
tags:
  - Grade 2
  - Game Design
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Movement is the core of most systems and can make something as simple as traversing feel fun.
- Players should be able to see, hear, and expect a motion as soon as an input is executed.
- Movements should feel consistent to refine accuracy and skill as opposed to feeling random.
- Moving around should feel dynamic and satisfying, and the system should be easy to use.
- When travelling around, players shouldn’t be able to abuse the movement system to bypass everything, yet it shouldn’t feel like a chore to use.

{{< /callout >}}

** **
# 1: What Is Movement Design?

**Movement design** usually refers to __how (and in what ways) the player moves around in their environment__. This is pretty crucial if you want to make a fun game, since the player spends most of their time using these mechanics to navigate—it wouldn't really be a fun game if you had to fight the controls to get to where you want to go.

# 2: What Makes Good Movement Design?

## Responsive Controls
If you want your player to feel like their inputs are WORKING in your game, you’re going to need responsive controls. **Responsiveness** refers to __the time in which the action pressed corresponds to the actual movement of your player__. If I press the right arrow key, the player should (as crazy as it sounds) move right, but good responsive controls let the player KNOW that the action is happening within a reasonable amount of time.

-# *When swapping directions, you don’t immediately reverse which can lead to unintended results like falling off the platform at the end.*

{{< img src="https://lh3.googleusercontent.com/d/1wCsCU9JSutEoJEvGRiDxjAYUOUp5Oysk" >}}

This can be incredibly important depending on the game you’re making. For instance, if you want to make a precise platformer, you need your controls to be responsive to the point where the action happens *immediately* after the button is pressed. Input delay would make the game seem extremely unfair and annoying (which probably isn't fun). It isn’t a be all end all though, because unresponsive controls can feel more limiting which will need to new forms of gameplay as mentioned later on in the guide and also in [Mechanics 5](/docs/guides/gameplay-2/mechanics-5-limitations-strategy/), as long as it feels intended and still fun to use.

## Consistency
**Consistency** is __the accuracy of the same movement under repeated inputs__. If the player jumps, it should be to reach the same height no matter how many times it repeats. If a certain movement isn't consistent (meaning that it varies every time it's activated), it may seem like RNG for an input to happen correctly, since you’re pretty much at the game’s mercy of it working or not.

-# *Small differences can lead to different results, even though the player did almost all of the inputs correctly. This is an example of a small part from Zip Lash by GD Colon*

{{< img src="https://lh3.googleusercontent.com/d/1I-RfBmkkp8kv6X_L84J3iHyHwh-2CqnQ" >}}

This might seem easy to do, but it really depends on how your mechanics are made. Having a movement that’s heavily influenced by other subtle aspects can feel inconsistent, even though you still generally get the same movement, because small things like the timing and the direction you’re moving can change a lot.

## Level design
Level design comes into play when you have a certain mechanic you want to use in the level. If you want your movement to seem like it's actually *useful* in your game, make sure the level requires them to use it when needed. If I have a dash mechanic, and nowhere in the level does it feel useful, why would I ever need it (if not to wave dash back and forth whenever I get bored ???) For every mechanic, there should be areas in the game where the player would find that “X mechanic works best here.”

There are plenty more layers to level design, but that’s outside the scope of this guide, so instead I’ll link you to the [Level Design](/docs/guides/gameplay-2/level-design/) guide.

## Player Feedback
**Player feedback** is __the visual/audible response given to the player after executing a certain input__. Although not as important, you should 100% keep this in mind to make it more obvious that input was performed successfully, instead of observing just off of movement alone. This especially comes into play when you want the player to execute several actions consecutively, by letting them know what the input was and when it happens. This is covered more in [Mechanics 3](/docs/guides/gameplay-2/mechanics-3-feedback/) as well.

-# *The movement feels much more substantial and satisfying after the visuals and sound effects.*

{{< img src="https://lh3.googleusercontent.com/d/14pIqcMEaQ7dlxPZPdq_hcRqbvHBEVGjD" >}}

Here are also some more complex, but important ideas that should be thought about:

- Dynamism: **Dynamism** is pretty much __how dynamic (or fluid) the player’s movement is__. The player should be able to execute actions in a smooth manner that “flows nicely” with the main premise of the level. Adding this makes your game feel satisfying to go through and not feel so stiff. Without any type of dynamic movement, the movement can feel unpolished and annoying to use.

For example, if I was to make a platformer that uses different abilities consecutively to move from one area to another, it should be dynamic to the point where it’s easy to execute this sequence of actions without feeling too clunky/rigid. Player feedback plays a big role in this too, because having something feel satisfying can make it flow better too.

- Limitations/Freedoms: Limitations and Freedoms are 100% necessary for well-balanced movement, basically referring to what the player can (and can’t) do with their movement (i.e. I shouldn’t be able to skip whole parts of a level due to how broken a certain mechanic is). Limitations allow you to construct your main gameplay around a balanced movement system, allowing for some creativity when it comes to applying it to a game.

It is also pretty important to balance the player’s freedom’s and limits in a game. There shouldn't be too many limits to the point where the player has no freedom in executing something (making the game seem like a chore), and there shouldn't be too many freedoms to the point where the player can do literally everything, making them overlook your intended way of playing the game. For more on this, see the [Limitations](/docs/guides/gameplay-2/mechanics-5-limitations-strategy/) guide.

** **

- Manageability: **Manageability** is __the idea of how manageable the required inputs are for an average player__. The player should be able to accurately execute controls that relate to what they want to do without it seeming confusing. If somebody had to press 2 or more different keys or press several keys at the same time like it’s Mortal Kombat in order to do a simple jump or dash, that wouldn't be very fair or manageable. The controls for your game should be simple and fair to execute, especially with the limited amount of keys GD has for platformer mode.

# 3: Examples

## Bad Movement System 1 (Dash)

{{< img src="https://lh3.googleusercontent.com/d/1iEdcQ5wbtVvOK2AJBa0KgNFkLWoSs6Iw" >}}

This is an example of a bad movement system. For starters, the dash feels WAY too inconsistent and unresponsive, making it hard to use it in the right way when it’s needed. Also, there’s no feedback for the player to know that a dash was used, apart from the movement alone.

{{< img src="https://lh3.googleusercontent.com/d/1JayiH2lnkK4pU5nVVRauuddc9fuoBN97" >}}

** **

How do we fix this? We can try making the dash more consistent by using two teleport triggers instead of a force block, allowing the player to dash the same length with high speed. You can even add simple feedback to it, like a flash and a screenshake to show the player they executed the action.

## Bad Movement System 2 (Wall Jump)

{{< img src="https://lh3.googleusercontent.com/d/1BUNk82LoHKGpHUhVYSgtunjZzf0xcFzV" >}}

Here’s another example; a basic wall jump that you see in lots of levels. It gets the job done, but not only does it lack player feedback (which is extra annoying in this example as it just looks like weird sliding), but the weird bouncing makes the wall jump feel uncontrollable and inconsistent, making it less dynamic and harder to manage.

{{< img src="https://lh3.googleusercontent.com/d/1pWA8zpVtUKALnuj8BHd5zU0GtbwTAoty" >}}

** **

To fix the player feedback, we can just simply add more **cues** (__visual/audio effects for the player to see__). Particles now appear when you wall jump, and a sound effect plays when you grab a wall, helping the player know that they *can* wall jump. The wall jump also now bounces the player out a bit, making the jump feel smoother (and actually like a jump) instead of weird sliding, while adding another visual cue to the wall jump. The player can also now slide down the wall rather than just fall, giving more overall freedom and making it more obvious (and noticeable) that the player can wall jump.

