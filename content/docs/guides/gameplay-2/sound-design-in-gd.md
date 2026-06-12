---
draft: false
authors:
  - electrifyxd
title: Sound Design 1 (Basics)
weight: 7220
date: 2024-09-06T00:00:00.000Z
contributors:
  - electrifyxd
  - psytrancegd
description: Making sound effects to include in your level will make the
  experience much more immersive. This guide will explain how to find sound
  effects to fit your level.
tags:
  - Grade 2
  - Sound Design
seo:
  title: How Sound Effects Make Geometry Dash Better
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Sound design is an important concept behind making custom sounds for levels
- To add fully custom sounds, you can upload sounds to the Newgrounds platform if you have an eligible account
- Another way to use interesting sounds is with the in-game sound library and the SFX trigger

{{< /callout >}}

** **
If you've ever played [Between Worlds](https://www.youtube.com/watch?v=Hg-YzsRDhG8) by xXLOCOXx, you may have noticed how it cleverly uses sound effects to add to the level’s worldbuilding.

{{< youtube Hg-YzsRDhG8>}}

What not a lot of people know is that the song was specially made to accomplish this. This level uses a custom song with various sound effects to incorporate layers of atmosphere into the level, and it does that wonderfully. This isn't the only level to use sound design to its advantage, as there are plenty of other levels that use custom sound effects and songs, such as Apeirophobia by Ph4lip and Anarchy Road by komatic5. But what exactly IS sound design?

Well, to put it simply, **sound design** is __the art of making sounds for any kind of audio and visual media, such as film, music, and in this case, video games__!

There are two ways of incorporating your own sounds for your GD Level:

{{< youtube p-BUROO_-z0 >}}

{{< youtube tRXA8FqUCds >}}

# 1: Making Custom Sounds

Note: This method requires a whitelisted Newgrounds account.

This is the best method of incorporating sounds for GD, as you have way more control of what sounds you can use. To make your own custom sounds, head over to Newgrounds and upload an audio file containing all of your sounds. **Please isolate each soundbite that you would like to use for your levels to make it easier to fade in and out of them.** You should come across the Details page for your song projects; it should look like the image shown below:

{{< img src="https://lh3.googleusercontent.com/d/1YEh1jhkprCJFiSHep-pFJTj4olx7fUiZ" >}}

At this point, scroll down to the bottom of the details and look for a checkbox labelled “External API Use”. This allows us to automatically allow GD to use the current Song ID as an available song.

{{< img src="https://lh3.googleusercontent.com/d/1bF3-msJNypdG1qi-YRxdgZ_XjtpK24NL" >}}

Once you're ready to upload your sounds, hit “Publish Changes” and you should be able to upload your work to the Newgrounds servers.

{{< img src="https://lh3.googleusercontent.com/d/1Gk91h4VuUlEGXoBCdeBVEj1vEvMlERyc" >}}

Now, look for the Song ID that contains your sounds. To find your Song ID, look for the string of numbers that appears at the end of the url of your song page.

{{< img src="https://lh3.googleusercontent.com/d/1ERxq_HcwJA4T-KLP3XPAtLuvJBkCUtIa" >}}

In my case, 1273853 is the song ID for my voice lines that I would like to use for my level. In Geometry Dash, place a song trigger and make sure that the channel is set to anything other than “0”, as 0 is the default channel. Remember that songs in the same channel will override each other.

{{< img src="https://lh3.googleusercontent.com/d/1B3kCz8gExrz7wyvfPk0q22NPufaZHurq" >}}

To locate the exact part of the song that you would like to use, head over to the second page of the song trigger. From here, type in the Start and End sliders accordingly so that it plays the soundbite that you want. There are also FadeTime sliders for you to Fade In and Fade Out your audio clip. Note that, as mentioned in the Song Trigger lesson, the values are multiplied by 1000, so 1 second is actually 1000 in value, 2 seconds = 2000, and so on. Use the play button above the “New” button so that you can keep track of what sound will be playing.

{{< img src="https://lh3.googleusercontent.com/d/1CbsZdm2K7Tl0SlKhEDi4u3MtvjFjdMJN" >}}

Now, whenever you need to play your soundbyte, activate the appropriate song trigger to play it. If you have made an error on your song in Newgrounds or would like to make changes to it, head over to the “Your Projects” page on Newgrounds and locate your song. Under the “Submission File” section, you may resubmit the audio file and publish changes to change the NG song for your level.

{{< img src="https://lh3.googleusercontent.com/d/1Qros3tNLDzTzy2wFCN9egS_hBBP4P4Yg" >}}

# 2: Selecting Pre-Made Sounds

In Geometry Dash 2.2, players now have access to the SFX trigger, which comes with the SFX library. This library comes with over 10,000 sounds to choose from. You'll usually be able to find a soundbite that fits what you want for your level. If for some reason you can't seem to find audio that appropriately fits in your level, consider using sampling.

In audio engineering, disk jockeying (DJing), and music production, **sampling** is __the process of taking audio from another source, and using it in a new audio recording__. These sources can vary from sound effects, music, or any recording from any audio-based media.

Geometry Dash has limited options to play around with sound effects, but sometimes it can be enough to change into a new sound.

Let's say I want to find a bald eagle’s calling or screech sound for my level. Well, nothing shows up when I look for “Eagle” and none of the bird sounds available are EXACTLY what I'm looking for…

{{< img src="https://lh3.googleusercontent.com/d/1xvDtcAyEV9S2oloQ_85yHUEJwI0h7s_M" >}}

Well, technically speaking, the famous bald eagle calling is actually taken (or sampled, if you will) from a red-tailed hawk. Maybe searching up “hawk” would yield some results?

{{< img src="https://lh3.googleusercontent.com/d/1MIlWmcBxL1au1q16NCUierWfQdVTU6_K" >}}

I guess not. Well then, that's fine. I'd say we can use a completely different sound to try to replicate one of a red-tailed hawk. I'll use this SFX for my example:

{{< img src="https://lh3.googleusercontent.com/d/1ZwaqtYMBGfx34vr70z_2jKtZw0UiBDqE" >}}

If I speed up and pitch up the SFX using the SFX trigger’s sliders, it'll sound a lot like what a red-tailed hawk would sound like.

{{< img src="https://lh3.googleusercontent.com/d/1qN-O-5zOyVH5U75zqGgUs0C0h5VjYlhg" >}}

Furthermore, I can enable FFT to stretch the audio without having it sound digitised, and enable Reverb with the “Forest” setting to really sell the effect. Later on we'll talk more about exactly what reverb is in this unit.

{{< img src="https://lh3.googleusercontent.com/d/1o1ApAT2sJk2ELDqcsH5d5h7G5O1RPNkK" >}}

And… voila! Now this sounds precisely like what I wanted out of my “Bald Eagle” calling sound effect, and I can finally use it for my **TOTALLY AMERICAN-THEMED GD LEVEL!!!**

{{< youtube Sl29xVnj7Z0 >}}
