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
- __Hold__ is optionally a second transitional point between the Attack and the Decay. Speaking of which: - Decay is the time it takes for the Attack (or Hold when its applicable) to transition over to the Sustain.
- __Sustain__ is the second (or third, once again if Hold is being applied) point where the sound softens down once the note is held past the Decay. At this point, if the note is held any longer, the envelope stays at the sustain until the note is released from the key.
- __Release__ is the time it needs for it to fade out once the key is released.  The Delay knob is grouped up with the rest of the knobs, but I can assure you that it is not a part of AHDSR. The delay knob in this case delays the entire envelope if the note is held.   A good usage of implementing Envelopes to sound is creating plucks. Many audio engineers and sound designers like to create plucks using this envelope by getting rid of all knobs minus the decay.  

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

- __Trigger__: The most basic mode; starts from first point to the last point, and then loops back to the first point and repeats until the note is released.  Sync - The LFO cycle is constant and never re-triggers its cycle, regardless of whether the user presses or releases the note; syncs with the DAW and not the note.  

- __Envelope__: Acts like a traditional envelope, starts from first point to the last point, but stays at the last point until the user releases the note. It re-triggers the cycle once the user presses the note again.

-   __Sustain Envelope__: Similar to the envelope, it starts from first point to the last point, but ONLY when the sustain part of the Envelope is triggered. You can adjust this with the Envelope’s release knob.

- __Loop Point__: Starts from the first point, then loops a segment of the waveform between this slider position. 

image

- __Loop Hold__: Loops from the first point to the slider position shown above, and then goes all the way to the end point and holds there depending on the Envelope’s Release.   

- __Point Cycle__: For every press a user hits a note on, it traverses to the next point on the LFO and holds it there.  

The last thing LFO offers is its tempo. You can essentially adjust the speed of the LFO by the tempo of the DAW.  

image

You can slide up and down on the fraction to speed up or slow down the tempo of the LFO however you see fit. If you click on the note, there are other options to play around with including Triplets, Dotted, and even time-orientated tempos (in seconds).   

Already you can see how much potential this LFO brings to the table in terms of producing sound. Just to name a couple of examples, we can use this to create vibratos (Modulating Pitches with LFO), tremolo (Modulating OSC with LFO), and many more.

# 4: Warping Waveforms

  You do not have to confine yourself to basic shapes in a waveform. You can warp a basic shape into more complex shapes that create unique, distinct sounds.

Warping in a wavetable synthesis is the process of mathematically deforming a single wave cycle before applying other effects. This alters, boosts, or otherwise creates new harmonics that we otherwise don't really get to hear in timbre from other shapes.

  Vital is fortunate to give us 2 types of warping: Wave morph warping, and Spectral warp. Lets look into each warp modes and see what we can do to pre-existing shapes. On the right side of the shape of the oscillator, there is an unlabelled knob.

Clicking on “---” brings you to a dropdown menu that allows you to play with different modes. We’ll knock out wave morph warping first since its more common to find on wavetable synths: 

image

- __Sync__: Multiplies the speed of the waveform cycle, leading to higher frequencies and sometimes aggressive sounds.

- __Formant__: Shifts the partial positions forward while it still preserves its pitch center.  

- __Quantize__: Creates steps for the wave shape, ultimately lowering the resolution of the sound and creating its own bitcrush distortion.  

- __Bend__: Warps the shape symmetrically or asymmetrically, creating distortions in the process.  

- __Squeeze__: Compresses or otherwise expands the waveform for timbre shifts.

- __Pulse__: Creates a single square in between the cycle to make a pulse sound.  

- __FM <- Destination__: Frequency Modulation to another oscillator. The output frequency of one oscillator alters the destination’s frequency, creating more metallic harmonics.

- __RM <- Destination__: Ring Modulation to another oscillator. The output sound of one oscillator multiplies the signal to its destination, creating more metallic harmonics or inverted sidebands.

  Here’s a video demonstration of applying each wave morph in an oscillator: https://cdn.discordapp.com/attachments/396504131088547842/1566197973799665955/2026-10-31_17-06-19.mp4?ex=6ae7ab07&is=6ae65987&hm=20f01a19cbe05321d5c6f3d78d0c31c50dabd18822bb764ca238dbde94dbe1f4&   

Now that you are familiar with the traditional warping modes, lets look at Vital’s spectral warp modes. The knob next to the one on the far-right should give you another drop-down menu with its own set of modes to play around with. Let's look at each one: 

image

- __Vocode__: adds a vocoder-like warp to the wavetable by adding formant textures to make it sound “vowel”-y  

- __Formant Scale__: Changes the tonal character of the oscillator  

- __Harmonic Stretch__: Stretches or compresses the harmonic spacing of the wavetable  

- __Inharmonic Stretch__: Distorts the harmonic spacing of the wavetable, creating more metallic textures.  

- __Smear__: Blurs the partial boundaries for a softer timbre

- __Random Amplitude__: Randomizes the partial levels for a noisier, evolving sound  

- __Low Pass / High Pass__: I would categorize them into one section here because they are similar; adjust the brightness of the sound akin to a high pass and a low pass filter.  

- __Phase Disperse__: Shifts the phases of the partials, almost as if its applying a swirly characteristic to the wavetable as it shifts along.  

- __Shepard Tone__: Loops a pitch thats continuously rising and falling at the same time, creating an auditory illusion by overlapping 2 octaves together and phasing in-between them.  

Example: Shepard Tone (link here)

-   __Spectral Time Skew / Time Skew__: skews the partial of the wavetable in terms of time, creating phase-like effects.  

- __Data Compress__: Compresses the data of the sound down to its harmonic peaks  

- __Spectral Filter / Phaser / Flanger__: I’ll group them all into 3 simply because these are all self-explanatory; they simply apply a filter, or phaser, or flanger into a tunable knob and applied directly to the oscillator.   Here’s a video applying each spectral morph into an oscillator for demonstration: https://cdn.discordapp.com/attachments/396504131088547842/1566195990560505907/2026-10-31_16-57-42.mp4?ex=6ae7a92e&is=6ae657ae&hm=6713503f5308905627d3358da525ab9559335b1feb79277239ac80a448f6ad3c&  

# 5: Miscellaneous Features  

We want to briefly cover some of the extra sound design techniques and effects that are less common, but far more interesting. Unfortunately, we would be here all day if we were to talk about them all. But let’s go over some of the more advanced techniques that professional producers and sound designers use to make their sounds. I don't think these are stuff to be glossed over, hence why we bring them up, so I suggest looking into these for your recommendation:

- __Macros__: This term should sound familiar to you outside of music production. Perhaps you have used a macro for a Geometry Dash hack. This works the same way. Essentially, it is a function thats binded to something else. In this case, we have four knobs to set a macro to, visibly seen on the left side of the OSC tab.  

image

To set a knob to one of the macros, simply hold click where the macro text is, and drag it to a destination that you want to control. This is especially useful because in the Matrix, you can set macros to multiple destinations at once simply by dragging them to another destination, creating dynamic and versatile sounds at your disposal in one knob instead of multiple automations.   

image

This creates a macro wheel, where you can adjust how much control the macro should have onto the knob.  If you want to remove a destination, simply right click the macro wheel and click “Remove”. You may also click “Bypass” if you want to remove its destination temporarily.  

image

- __Portamento / Vibrato__: creates a smooth pitch slide from one note to another when multiple notes are played at once. This is done by having only one voice, Activating “Always Glide” and “Legato” and setting the Glide time using the Glide knob. This creates a “vibrato” effect in notes.  

- __Voices__: As shown in the screenshot above, it creates a stacked, wider, layered sound on top of the same sound. Note that this ends up creating more CPU Load onto your DAW.   
