---
draft: false
authors:
  - electrifyxd
title: Sound Design 1 (Making Sounds)
weight: 7225
date: 2025-03-01T00:00:00.000Z
contributors:
  - electrifyxd
  - notamoderatr
description: This guide explains how you can create basic sounds using a DAW,
  also known as an external audio-editing program.
tags:
  - Grade 2
  - Sound Design
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Using DAW software, you can create a variety of sounds to use in your level, making use of free plugins such as Vital for FL Studio.
- There are four main soundwave types: Sine, Saw, Square, and Triangle waves.
- Using Additive or Subtractive Synthesis, you can use the four basic soundwaves and combine them into more interesting sounds. Samplers can add to this process, giving the sound a distinct texture.

{{< /callout >}}

** **

Now that we understand how to upload our own sounds to Geometry Dash, it’s time to actually create these sounds. The most common way to make sounds is through a program called a Digital Audio Workstation, or DAW for short. A **DAW** is a **device used for creating audio files such as soundtracks or audio editing**. Any program that supports .vst or .vst3 plugins will be sufficient, with some examples being Ableton Live, Reaper, and Bitwig, but for this guide FL Studio will be our DAW of choice. Using the “Vital” plugin is recommended as it is free to use and covers all the content provided in this section.

# 1: Installing Plugins

To install plugins on FL Studio, make sure to have a .vst3 or .vst file prepared. On the top-left hand side of the UI, go to Options > “Manage Plugins”. This will open up the Plugin Manager window.

{{< img src="https://lh3.googleusercontent.com/d/1MWDmAY4PZxxDtfxw-U4LwBsSq5JoaXMy" >}}

From here, you’ll want to place the plugin file you downloaded in a directory under “Plugin search paths”. If you would like to add your own file path destination for searching for plugins, click on the folder to the far left of the list.

{{< img src="https://lh3.googleusercontent.com/d/1rGawnK13UqVbgU-PMvUF5wuhOVyFrsmH" >}}

Once you are ready, navigate to “Find Installed Plugins.” If you did everything correctly, you should have your desired plugin highlighted in yellow on the list. For convenience, you should click the star icon next to the plugin that you want so you can refer to it in the drop-down menu on the channel rack.

{{< img src="https://lh3.googleusercontent.com/d/18OmN48EFPePLEJCCQlEvMlNK2fTTbFS-" >}}

From here, go to a channel rack and click on + to see your synth plugin listed.

{{< img src="https://lh3.googleusercontent.com/d/1LcCquRdgPtjFO_BZhhZbkV6yNPbp8vV1" >}}

Click on the plugin you want to use. In this unit, our plugin of choice will be the **Vital** plugin, as it's free and accessible for everyone to use. When using Vital, you may need to register a new account before accessing the plugin, but this process is completely free.

Once you’ve found and opened your plugin, you will be greeted with this screen. This may look complex, but we will go over what each element does one-by-one.

{{< img src="https://lh3.googleusercontent.com/d/1DL3DGHGUHUUPkx7XzLrMNEwGXrAAQkVq" >}}

# 2: Basic Waveforms

A waveform is a signal that visually depicts a soundwave relative to time. There are four basic shapes that waveforms will be in. Knowing the shape and sound of these waveforms is very useful in sound design. These are sine, saw, triangle, and square.

A **sine wave** is the only basic shape that has a continuous curve.

{{< img src="https://lh3.googleusercontent.com/d/1cAYiDbWTPypdeyCKBG240QCW3bCBPHK6" >}}

This is what the spectrogram looks like when played on C6. Notice how there is only a single notch in the frequency. Sine waves are also the only waveform that produces one frequency without any post processing or modulation.

{{< img src="https://lh3.googleusercontent.com/d/1_K_QL_HslphioTyIw_jBofly2q4sdElt" >}}

A **saw wave** (or sawtooth) is more linear, going up diagonally and then immediately back down. This waveform has a distinct buzzy sound, which is great for creating fuzzy textures in any analog synth. They are also commonly used for creating supersaws by creating several voices and detuning.

{{< img src="https://lh3.googleusercontent.com/d/1-PZpDhDC6GN6MXDkny5D1wyYzl5Mhuhz" >}}

This is what the spectrogram looks like when a saw wave is played on C3. Notice how now there's a series of frequencies scattered down.

{{< img src="https://lh3.googleusercontent.com/d/1-MgxlQcV_FL5xoruQSj04tHeK21WS7_Y" >}}

Next up, we have the **square wave**. The square wave creates a cleaner buzzing sound than what a saw would make by bringing up the rest of the series of tonal fundamental frequencies called **harmonics**. The saw wave comes with odd multiples of frequencies in these harmonics which is used to create a richer, cleaner buzz to the sound.

{{< img src="https://lh3.googleusercontent.com/d/1NWDD712ItvU2cyg12lME3ffza1BJxG9E" >}}

Finally, we have the **triangle**. This is one of the least used basic shapes of the four but still has its uses. It’s a combination of both sine and square waves, which gives the right balance between a buzz and the smoothness of a sine wave.

{{< img src="https://lh3.googleusercontent.com/d/1nolfazrJpOf9hz2JjzSGPXNxLmZ7cqZa" >}}

It is also worth noting that every sound is made up of sine waves. This also includes the 3 other basic shapes shown above.
## Unison
Only one waveform playing sounds pretty empty. Lets use unison to create more space. **Unison** allows the user to __layer in multiple sounds on the same pitch to create a thicker sound.__ In Vital, we can easily do this next to the wavetable.

{{< img src="https://lh3.googleusercontent.com/d/14v76l3eYf9abH0T6Sp7Hikz1lvjRYXpt" >}}

There are two sliders which we can utilize called Voices and Detuning. Voices are the main aspect of Unison; voices allow you to create multiple sounds of the same waveform playing with the same pitch by multiplying the signal that’s produced by the oscillator.

Detuning allows voices to separate from each other, creating off-pitch voices that make a chorus-like effect.

# 3: Layering Synthesis

Now that we understand some basic waveshapes, it's time to use these shapes to make more complex ones using Additive Synthesis and Subtractive Synthesis. **Additive Synthesis** is __a technique involving combining many sine waves with different frequencies into one shape.__ Ideally, this can be accomplished using other shapes since we have another oscillator. Doing this gives you access to many new shapes that you can experiment with.

In this clip below, different combined sine waves are demonstrated in an oscilloscope.

https://cdn.discordapp.com/attachments/396504131088547842/1304489208680943617/2024-11-08_11-52-32.mp4?ex=672f93bf&is=672e423f&hm=037fb2577d028d480c4631deaa393c6968479529d634427803b829a89df0f370&

**Subtractive Synthesis** works in the opposite way of Additive Synthesis. Instead of adding new waveshapes to an existing waveshape, we can take frequencies away from that one waveshape to create new waveshapes. You can accomplish this with a filter on a synth.

The example below showcases taking away the high end of a frequency with an oscilloscope. Pay attention to the waveshape taking form on the oscilloscope.

https://cdn.discordapp.com/attachments/396504131088547842/1304490189866926212/2024-11-08_11-57-06.mp4?ex=672f94a9&is=672e4329&hm=5a1907a11a379385f79d36f9cac013a9ff355afd6cda233227cb2abd27f93589&

# 4: Noise / Samplers

**Samplers**, or SMP for short, is __a playback mode for your synth to add texture to the sound.__ The most common forms of SMP are different forms of white noise.

White noise usually covers the high end frequencies of sound, and are generally made to fill out more space. A good analogy to this is cooking something with salt. You obviously want to add salt to bring in more flavors to your food, and it works the same way in sound design.

White noise has many practical uses. For instance, we can layer white noise with a sine wave to create a sick bass. (We can use EQ to improve the sound, but this will be covered in a later section.) You can layer white noise with a snare drum to create a wider snare, etc. White noise is commonly used with post processing effects to create a distinct grainy texture used for layering in with other sounds.

The example below demonstrates a saw wave and white noise to make a clicky sub-bass.

https://cdn.discordapp.com/attachments/396504131088547842/1330602353409130566/2025-01-19_13-15-01.mp4?ex=678e9382&is=678d4202&hm=3cee02faaed1972fba9b690d876b31798282a61f40e3b533ccaf81df69610cd5&

Another example demonstrates white noise to create a riser and downlifter by moving the EQ. (LFO is normally used to automate this, but this will be covered in a more advanced lesson.)

https://cdn.discordapp.com/attachments/396504131088547842/1330604468072353823/2025-01-19_13-24-18.mp4?ex=678e957a&is=678d43fa&hm=9c48f2f02f27397835611277c29de715e509d90935a28527f47a65656a0100c7&

