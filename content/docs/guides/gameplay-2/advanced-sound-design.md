---
draft: true
title: Sound Design 4 (Advanced Sounds)
weight: 7235
date: 2026-05-20T00:00:00.000Z
description: This guide explains advanced and complicated techniques to bring
  your sound creation to the next level.
tags:
  - Grade 2
  - Sound Design
seo:
  title: How to Use Advanced Sound Design in Geometry Dash
  description: Learn advanced sound design techniques for creating richer, more
    expressive, and more immersive Geometry Dash levels.
  canonical: ""
  noindex: false
---
In the previous lesson, we’ve discussed various post processing effects that can be utilized to sharpen, or mudden sounds; make sounds louder, or softer. 

  Modern-day electronic artists and audio engineers like Mike Dean and Markiss usually use sounds that shape and alter the initial sound altogether. However, the means to accomplish that are… complicated to say the least at a glance. Don't worry, however! By the end of this course, you should be able to approach most, if not all synthesizers, both analog or digital, to create the perfect sounds for your levels. We will underscore, however, that there are a vast amount of techniques that are both niche or common, that we will not be discussing here for the sake of the length of this lesson - only the remaining aspects of synthesis that were too complicated to discuss in previous lessons.   So, without further ado, lets start out with… 

# 1: Filters in Oscillators

Now, I will go very briefly because this seems self explanatory.   

image

You might be asking, "Didn't we talk about Filters in the previous lesson?”, and you’d be right! This is essentially another variation of a filter post-processing, with some exceptions. Instead of the sound itself signaling directly into the effect, you can *filter* whichever input goes through the filter before going into the effects.   In Vital, you can do this by selecting OSC1, OSC2, OSC3, SMP, and FIL2.  - OSC1-3 are all of the 3 oscillators. - SMP would be the Sampler in the synthesis, most commonly used for creating white noise. 

Finally, FIL2 is used to direct it into a *secondary* Filter. Thats right! There are 2 Filters for you to play around with! 

image

If you look closely, you may notice that in Filter 2, FIL2 is now replaced with FIL1, implying that you can instead input the secondary filter into the first filter instead of the other way around.  The drive knob next to the selected oscillators saturates the frequencies, making it louder. 

The mix knob is how much should this effect be applied to your sound.  Theres sliders for a low pass and a high pass above and next to the visualizer, allowing you to add resonances to your frequencies, and the slider at the bottom shows how much of a band pass you to either ends, or in the mids. 

# 2: Envelopes

  So you created a nice bright or dark sound, but sometimes you want something extra. Sometimes I don't wanna just hold the note down. Sometimes I want to let it fade in and fade out, or perhaps eventually lean into a softer sound over time.   Envelopes shape out the sound’s volume automatically without controlling a knob, all done over time. You may even use Envelopes to change pitch and filters, but that will come up later.

image

Vital has 3 unique envelopes to play around with, and its represented by a graph here. The longer the shape, the more time has passed whilst holding down the note.   The knobs at the bottom represent the 4 (sometimes 5) main fundamentals of Envelopes, to which we create the acronym: ADSR (or AHDSR)  - Attack is how much time it needs to fade into its first point in the envelope, usually its loudest.
- Hold is optionally a second transitional point between the Attack and the Decay. Speaking of which: - Decay is the time it takes for the Attack (or Hold when its applicable) to transition over to the Sustain.
- Sustain is the second (or third, once again if Hold is being applied) point where the sound softens down once the note is held past the Decay. At this point, if the note is held any longer, the envelope stays at the sustain until the note is released from the key.
- Release is the time it needs for it to fade out once the key is released.  The Delay knob is grouped up with the rest of the knobs, but I can assure you that it is not a part of AHDSR. The delay knob in this case delays the entire envelope if the note is held.   A good usage of implementing Envelopes to sound is creating plucks. Many audio engineers and sound designers like to create plucks using this envelope by getting rid of all knobs minus the decay.  

image

This ensures that when the note is pressed, you have a sharp stab synth, before quickly fading out, giving you that “pluck” that producers tend to use.

# 3:   Low-Frequency Oscillator (LFO)  

LFOs, or Low-Frequency Oscillators, are essentially waveforms that produce sound at around 20hz in frequency. You may ask, “Wouldn’t this be too low for the human ear?”, and you’d be right. This oscillator isn't really for making sound - its for modulating pre-existing sound. There are many practical cases for utilizing LFOs in modular synthesis, but first we need to understand how it works:  

image

 On your LFO tab in the OSC menu, you can see that you have multiple LFO’s to play with. What you are seeing by default should be a triangle wave, and much like the envelope, it goes from Point A -> Point B -> … -> Point N (let N be however many points you have; by default it's 2), with curve points in between two points. You can double-click anywhere on the graph to create a new point. To start modulating the LFO, you may click and drag “LFO 1” to a knob or any parameter you want to adjust. Now, whenever you start pressing a note, you may notice that knobs are automatically turning by itself.  

https://cdn.discordapp.com/attachments/396504131088547842/1558295989679423521/2026-10-09_21-48-23.mp4?ex=6acaebbb&is=6ac99a3b&hm=6475e96f2812f3d31c54f87723f02a6541ce53e9bcc6f30d77b8cacac645f016&  

The video below shows an example of dragging LFO to Osc 1’s level knob to control it whilst also adjusting the modulation amount. As you can see in the video, you can also be able to adjust the wavetable itself. If you don't like a particular wavetable, you can switch a preset of wavetables in the Triangle dropdown menu.  

image

The LFO also applies to the effects, but you can't simply just click and drag it into the effects tab. You would have to do this manually by going over to the Matrix tab at the top of the UI and change its Destination.  

image

There are different modes for how you may utilize an LFO: 

image

- Trigger - The most basic mode; starts from first point to the last point, and then loops back to the first point and repeats until the note is released.  Sync - The LFO cycle is constant and never re-triggers its cycle, regardless of whether the user presses or releases the note; syncs with the DAW and not the note.  

- Envelope - Acts like a traditional envelope, starts from first point to the last point, but stays at the last point until the user releases the note. It re-triggers the cycle once the user presses the note again.

-   Sustain Envelope - Similar to the envelope, it starts from first point to the last point, but ONLY when the sustain part of the Envelope is triggered. You can adjust this with the Envelope’s release knob.

-   Loop Point - Starts from the first point, then loops a segment of the waveform between this slider position. 
