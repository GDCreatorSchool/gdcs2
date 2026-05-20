---
draft: false
authors:
  - zek.1612
title: Game Design 5 (Camera Controls)
weight: 7215
date: 2026-02-27T00:00:00.000Z
contributors:
  - zek.1612
  - averageundertalefan
description: The camera in Geometry Dash is an effective tool that you can use
  to your advantage to make your gameplay more effective. It can be tricky to
  master, but it helps to convey a level's atmosphere exceptionally well. This
  guide explains how to create a camera for your level that conveys ideas (tone,
  scale) while supporting the gameplay (padding, dynamism, framing).
tags:
  - Grade 2
  - Gameplay Pacing
seo:
  canonical: camera-controls
  title: How to Use Cameras in Geometry Dash
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- The camera is a tool you can use to your advantage to enhance your gameplay.
- The camera shouldn‘t distract but support the gameplay, for example by showing the player everything they need to see.
- The camera can and should also be framed around certain things that need more attention.
- The zoom and speed of the camera influence the vibe of your level, for instance by increasing intensity through fast speed or affecting progression in the level through different zoom and speed values throughout.
- There are multiple ways to control the camera that could be considered to use, such as offsetting it or making a static camera follow a specific part of the level.
- You can make a part feel massive by zooming out, or make the player feel confined by zooming in.
- Other techniques like padding, easing or damping are also usable for cameras, depending on the vibe of your level.
{{< /callout >}}

** **
# 1: Supporting aspects

## Framing and Supporting

The player's view is one of the most important parts of controlling the camera. It is key to ensure sight-readability, as including everything the player needs to react to at any given moment is essential for a good level experience. The camera has a big impact on creating a fair playthrough, so there are several techniques to ensure this.

The first one is the **lookahead**. Lookahead is a __technique that focuses on upcoming motion or intent__, where the camera is positioned onwards to the player’s direction. This makes the players see the upcoming structures and enables them to react more easily.

Another technique to focus on an aspect is **framing**: what kind of things you __bring and draw attention from__.
In all creative projects, whether it is paintings, games, or Geometry Dash levels, there are different aspects that vary in visual importance. This is usually due to their size or the context around the piece. As described in the Game Maker’s Toolkit video How to Make a Good 2D Camera, it can be a good idea to draw attention to both the player and the key aspect we want to frame. For this we will use a **sphere of influence**. In this case, a sphere of influence is __a specific area, which upon entering makes the camera lock onto an object__. This can be a structure, key item, or aesthetic element.

{{< youtube TdWFzpgnljs >}}

Another method shown in the mentioned video is **temporary framing**. This consists of __showing a scene that is important to the story, context...__ For this, it is less important to show the player when framing, since it is temporary. This lets the camera go back to showing the player whenever decided upon convenience.

## Potential dangers

Playing around with the camera settings can be a lot of fun, but it is very crucial to be careful when using them. In Geometry Dash there are multiple ways to utilize the camera triggers to influence the experience while playing, either making it better or worse. The simplest way to avoid making your levels worse is ensuring that your camera isn't distracting the player from the gameplay, but rather supporting it. Distraction can happen due to many different things, such as noticeably fast and frequent movement or rotation of your camera. Of course, this does not mean you should avoid these aspects entirely, but rather try to not overuse them. Everything has a balance; not too little or not too much, and cameras are one of them. Even more, these can help match the intensity of the scene and can be great for representation, but you should always prioritize the fairness and sight-readability of your gameplay over its visual representation. Playtesters are normally a good and reliable way to check if your camera work is too distracting. For this, simply watch how they first react to your level and where they tend to fail the most. This can tell you whether the camera work improves or worsens the level.

## Compromise of gameplay and deco

As described above, camera settings contribute to the overall atmosphere and intensity of your projects, but this comes with a compromise. The camera changes need to be apparent enough to contribute to the visuals, but not too apparent to distract you from the gameplay. However this highly varies depending on each project and how important gameplay and visuals are for each work. For instance, the camera work in an animation is usually centered around the transitions and visual movements as there is not any gameplay. However, the role it takes on an effect layout will most likely be supporting gameplay and helping with song representation. Furthermore, it is impossible to reach a perfect state of balance as each experience is subject to the individual.
Due to this, the best way to approximate to the point of evenness is gaining feedback by experimenting and getting your level playtested.

# 2: Camera Changes

## Movement
The speed and movement of cameras in games plays a big role in the way atmosphere and the theming are conveyed. For instance, song representation is another factor that impacts the atmosphere and, among other aspects, the camera's speed helps achieving it.
The velocity changes how the level is perceived generally, as a slow camera makes the entire project feel somber, while fast cameras create more intensity and chaos.
Sudden changes of velocity can impact the player’s experience, like surprising or creating tense atmospheres, while steadily moving cameras transmit a safer and calming atmosphere.
This means that velocity and movement play a huge role in intensity and atmosphere, so it is very important to be careful with it. One common flaw is abusing fast moving cameras, which can significantly impair the sight-readability and therefore the enjoyability of the level.
Additionally, since GD is deprived of an actual third dimension, camera movement is limited to two-dimensional spaces. While it can be partially circumvented by effects like parallax and zooming, this restriction influences how speed and direction can impact your level. For instance, the level design in classic levels is more rhythm-based than spatially navigational, resulting in more predictable hazards and movement patterns

## Zooming
This is yet another aspect that influences the vibe and atmosphere of a project, as **zooming** changes the feeling of the player when compared to the surrounding terrain or when talking about GD, the level. When zoomed out, the playable character itself feels less significant to the overall experience, shifting the focus on the now very spacious feeling atmosphere or overall location. Whereas zooming in shifts the focus more on the player's movement and interactions with the limited viewable surroundings.
Additionally, doing any of these movements influences the speed at which objects move relative to the player, objects look faster when zoomed in and slower when zoomed out. This way, the zoom can be used as another tool to further emphasize the illusion of speed.
In side-scroller levels, zooming also changes how much the player can anticipate incoming hazards, obstacles, or structures. This makes zooming not only a simple camera movement, but also a big agent on the sight-readability and enjoyability of your project, meaning you have to balance the playability and ambient you want to create.

## Progression
When talking about **progression** in this context, it usually refers to the evolution of the camera’s behavior. The camera fundamentally defines how players perceive a part. This helps you control the vibe of a part compared to others in your level. This means the camera is an essential factor for making your levels evolve. A good example for this is how a zoomed in part leading into a zoomed out part can emphasize the contrast in space perception or how camera movements can increase in speed to focalize the rising tension or danger. This evolution is multidirectional, this means that said movements can go back and forth, creating a cycle or going to its original state anytime. This also applies for any action or event, like velocity or rotation in movement.
Progression, among other elements like designs, is what makes a part feel unique and distinguishable while also putting it into relation to the other parts. It essentially shows you how far you have come, giving your project a type of sequence which can greatly help make your project feel cohesive. If you want to know more about progression, you should read our [progression guide](https://www.gdcreatorschool.com/docs/guides/gameplay-2/pacing-progression/)

# 3: Different Camera Controls

## Keyframes
Keyframes are another way to control, move, and change your level’s camera. Instead of using specific motions, keyframes let you control the exact path and length from one point to another. This enables the movements to be a lot more precise, since the creator can see the exact path taken by the objects at all times when configuring the movement.
By using keyframes you can customize the velocity and easing of each item, giving you higher customizability and control. When creating a sidescroller, seeing the path of the keyframes help with controlling the distance of a movement on the x-axis. This opposes using move triggers, which can be seen as unintuitive for these kinds of levels, as keyframes let you keep track of the exact movement through the visualized path. If you want to keep the x-axis as typically projected, a good tip is to use the “Dist” mode on these triggers so that the camera moves from the start to the end without worrying about timing.
A key feature a lot of creators take advantage of when using keyframes is the curve mode. As the name suggests, it creates a curve between two of these triggers based on the position of the previous ones, unlike the straight path you get without the mode. A great example to use the curve mode for is when making cutscenes, as the direction changes become way smoother without sudden rotations.

## Easing, padding and damping
The last camera control worth pointing out is the standard GD camera system. With 2.2, it received different updates such as damping and a general better control of the camera, which reduced the need to create a custom camera. **Damping** essentially creates an easing in between the camera’s center and the player’s position, which can be changed and customized to regulate the smoothness of the camera’s movement and variates how much the player can get ahead of it. This is useful because small player movements can lead to a stutter-like camera effect, which can disorient and destroy the level’s immersion.

To better understand how the second factor added in 2.2 works, we need to first understand what deadzones are. As shown in the video *How to Make a Good 2D Camera*, **deadzones** are a term used for a specific area where the camera doesn’t follow the player constantly. The camera’s center is pulled toward a specific target, similar to the static trigger, shifting the focus onto a locked target, often being the center of a room, rather than the actions made by the player. Stepping out of that box makes the camera ease back into following the player directly. This is a primary tool in directing the player’s attention towards what the creator desires.

With that in mind, the last aspect worth talking about is **padding**. It is similar to the deadzone aspect, but in a more active way. It does this by preventing constant and abrupt movement only letting the camera move when the player gets into a configurable proximity within the camera borders. Using padding helps remove visual jitter and make the camera feel reactive and not entirely bound to what the player does.
