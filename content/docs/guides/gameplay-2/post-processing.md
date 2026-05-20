---
draft: false
authors:
  - electrifyxd
title: Sound Design 3 (Post Processing)
weight: 7230
date: 2025-10-01T00:00:00.000Z
contributors:
  - electrifyxd
  - notamoderatr
description: At this point you’ve created your sound, but you may notice
  something’s off. Unless your sounds are soft or light, they likely lack any
  room or loudness to make them stand out. This is where post processing is
  used. This guide explains how you can edit and change your SFX afterward to
  mix it in seamlessly or to transform it into something different.
tags:
  - Grade 2
  - Sound Design
seo:
  canonical: post-processing
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Post Processing involves changing characteristics of sounds through methods like Distortion, Wave Folding, Delays & Reverb, and Compression. This can help make certain sounds more distinct in your track.
- Delays can be used to add an echo to sounds, which allows effects like Reverb to function. This effect also helps with creating hypothetical rooms and their acoustics, like how a church has a large amount of echo.
- Equalization (EQ) is commonly used in music production and can be utilized to limit certain frequencies of a sound, all of which are divided into their own groups: Low, Mid, and High bands. Filters can control these bands depending on the hz.

{{< /callout >}}

** **

# 1: FX Processing / Post Processing

In short, **post processing is adding effects to your sounds to change the characteristics of them**. Post processing is generally done after you’ve finished creating your sound. Post processing in music production generally has 2 main uses:

- Music producers utilize post processing to mix sounds and blend them into their track.
- Helps transform any sound into something completely different.

This lesson covers the latter in-depth. Let's start with one of the most notable forms of post processing: Distortion.

## Distortion

Distortion is defined as **a way to deviate an audio waveform from its original state**. Other effects such as EQing and Phasing could also be considered distortion to an extent, but distortion itself is used to make your sound “warmer” as some sound engineers describe it. Distortion has a vast range of forms it can take on, but we're going to look at the ones used in a majority of post processing effects.

First, we have downsampling, or referred to as bitcrushing. **Downsampling** is *lowering the sample rate of a sound*, effectively reducing the quality of it. The lower the sample rate, the more fuzzy or crunchy the sound becomes. In 8-bit hardware like the Gameboy and NES, the sound chip can only produce so high quality of a sound or is limited by cartridge space that the sounds effectively become downsampled. **Soft Clip** is also a means of producing crunchy audio, involving *saturating the sound to a degree where the “crunchiness” of a sound is more prominent*, but doesn't go past the threshold of clipping.

Saturation is a commonly used form of distortion. **Saturation** *introduces harmonics to sounds while also adding in “warmth”*+ from earlier. This is usually used to make a sound louder in mixing. Another thing that makes saturation useful is the slight compression it yields, which will be covered later in the lesson.

**Hard Clip** is similar to Soft Clip, except *it has a sudden cutoff once it reaches the clipping threshold*. Due to this sudden cutoff, it creates aggressive tones that you don't get with Soft Clipping / Soft Knee.

The image below shows a representation of this difference in action.

{{< img src="https://lh3.googleusercontent.com/d/1PTyKK-ev4dKw3ktfLZm58xMnGyV4Jadn" >}}

<span style="color: gray;">Source: abletonlessons.com</span>

**Sine Fold / Wavefolding** is akin to Soft Clipping and Hard Clipping, however *once the clipping threshold is reached, the sound will be inverted into multiple waves* instead of crunching the sound, hence the name. Similarly to Saturation, this can be used to create harmonics.

[This video](https://www.youtube.com/watch?v=dqroIJ5wwfs) demonstrates the usage of sine fold on a sine wave using a ER-301 sound computer.

**Linear Fold** works similarly to Sine Fold where the waveform will invert, but instead of producing sine waves, *it folds waveforms into triangular waves*. Increasing the drive multiplies the folds, potentially creating a higher pitch.

{{< img src="https://lh3.googleusercontent.com/d/1FR34Lj8WbfmYl4LZAT6zbdJgPFTZM137" >}}

X-Shaper is a software that lets you create custom saturation waveshapes from Point A to Point B, allowing for more flexibility than what regular saturation could provide. These waveshapes can also be mapped to Drive knobs.

{{< img src="https://lh3.googleusercontent.com/d/1KfUmlrB3jhOxqeGYeZFsqi-6YlBsFDb_" >}}

**Asymmetrical Distortion** *creates a sharp curve leading up to the threshold and clips it*, which makes the waveshape asymmetrical. This could also be described as “shearing” the waveform.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1vZFx2x_MfuNWDq0l4rBu94swMBBc9zyA" >}}

{{< img src="https://lh3.googleusercontent.com/d/1nm-I_LV5YhKbHw1pb87ENACAP_7s7Kvq" >}}

{{< /img-grid>}}

Expanding on asymmetrical distortion, **Phasing**, or phase-frequency distortion *changes the waveform by creating delay when merging two other waveforms*. Low frequencies increase the delay while higher ones do not. and thus, they create stronger inertia when played in real environments on speakers such as subwoofers.

## Compression

Compression in sound design **limits how loud a sound can get**. When sounds start to get louder than the threshold, a compressor sends it back to its out gain. In electronic music, this is commonly used to make sounds tight and compact. In this guide we will cover 3 types of compression: Standard, Multi-Band and Sidechain compression.

Standard Compression, as explained earlier, can be used to control the range of a sound. There’s also different compression ratios that control how much gain reduction is applied once it hits the threshold, being measured in ratios or percentages. (I.e. 4:1, or 60%)

**Multi-Band Compression** *applies compression to each band (Low, Medium, and High Frequencies) of your sound separately*. Plugins such as OTT have features that can bring up quiet sounds to make them more noticeable and rich. Multi-Band Compressors use time as measurement  instead of ratios, which controls the attack and release rates to allow for more transients on the out gain.

In music production, combining different components in music often leads to clashing frequencies that sound messy in mixing. **Sidechain Compression** silences or ducks other components to bring focus to one or more components of a sound. This can be done through tools such as macros, which will be covered in Advanced Sound Design, or plugins like Nicky Romero’s Kickstart that automate this process (paid VST effect plugin).

{{< img src="https://lh3.googleusercontent.com/d/1sEngR0gbW87b_SzWIJwpRqjy0iOHuqPZ" >}}

# 2: Delays

If you've ever been in a small room and talked, you’d notice a small delay when speaking. This goes vice-versa with larger areas like a church, along with added reverb. This is essentially the concept of an echo, but in music production this is referred to as Delays. **Delays take in audio input and will repeat it back on the output**, usually having a fade out. Delays use time-based measurement to set the delay of the output, and are an important aspect of sound design due to its wide range of applications, as seen later.

The image below shows how delays fade out through feedback over time.

{{< img src="https://lh3.googleusercontent.com/d/19mGXHKteYA9j398cZS62v1Ja6I4WRvEb" >}}

## Reverb

Reverb is where **a sound gets reflected back in every direction**. If delay is a fundamental aspect of space, then reverb is the most efficient use of space; reverb is used to make delays sound more natural. If you see a large chamber like a church, you'd normally expect reverb and not metallic sounding short delays, hence the space in sound.

{{< img src="https://lh3.googleusercontent.com/d/1vWlLMWaZBBV8GpKGggwij5HLvyv-Rwgt" >}}

FL Studio has a stock reverb plugin, but this guide will use “TAL Reverb 4” as an example, which should also work with other DAWs supporting VSTs and DLLs. You can get this plugin for free on [TAL’s products page](https://tal-software.com/products/tal-reverb-4). The Main and Mix tabs are primarily the sliders that are most applicable for reverbs, and will be the ones that this guide will cover.

{{< img src="https://lh3.googleusercontent.com/d/1Mq-hqfZ20KkdBqqPRxw9l2G4EK35Rn78" >}}

The Main tab has 5 sliders to control, only 3 of which will be covered. Diffuse and Stereo are miscellaneous sliders that do have their uses, but in most cases will not be used, so they will be ignored.

- Size: Controls how large the reverb should be, or how large the hypothetical room is that the sound is played in.
- Damp: Softens the reflected sound; muffles the sound when it hits a wall, much like studio soundproofing.
- Delay: As explained earlier, delays control the time between when the sound is repeated back.

The Mix tab only has 2 sliders. These can change how the settings on the Main tab can sound.

- Dry: Controls how much the original sound blends with the reverb or applied settings to the sound. Useful for creating ambience without being able to hear the original samples.
- Wet: Amplifies the output of the settings for the reverbed sound. For example, this could amplify the “Size” slider, or multiply the size of the hypothetical room.

## Flanger

Flangers **create a “swooshing” filter to your sound by copying the audio and then applying a delay to the copy**. This ends up creating a sound that’s similar to what a jet engine would be on your audio signal as a filter. Most flangers create slow, predictable sweeps, but you can control the range and rate of modulation.

The video below demonstrates this effect with a melody.

{{ video }}

## Phaser

Phasers are similar to Flangers, but with added complexity. Earlier, Flangers were compared to jet engines, while Phasers are akin to the sound of brushing your teeth. The same principle for Flangers apply for Phasers in its technicality; its audio is duplicated, but instead of being delayed, **it creates many  “all-time” filters to produce a phasing effect on its frequencies through a curve.**

The video below demonstrates the difference between a phaser and a flanger using white noise. Volume adjustment is needed, as this video can be loud to some.

{{ video }}

## Chorus

Chorus is not a commonly used effect, but it’s distinct for its wobbly nature when applied to sound. **Chorus works by copying your audio input, adding a miniscule delay, modulating its pitch with an LFO, and then layering it on top of the raw audio back into the output**, producing a robotic tone.

- Delay: Sets how much delay to apply alongside the metric of time.
- Depth: Controls how much the delay can vary.
- Rate: Speed in which the depth varies.

The video below demonstrates audio with and without chorus.

{{ video }}

# 3: Equalization / EQ

Equalization (EQ) is the foundation of audio mixing, as it takes the entire frequency spectrum of the audio and *adjusts the volume around a frequency or a range of frequencies* called **bands**.

Low range frequencies (Lows) range from 0 to 300hz. The human ear can’t process frequencies that are lower than 10hz, so it's good practice to cut off frequencies below 30hz for the sake of safety. These frequencies are reserved for waves like bass and subs. In music production, it’s common to mono low ranges via side **Side EQ**, which *removes the stereo from the frequencies of a certain band*, effectively cleaning up your mix. This can be accomplished with plugins such as Fabfilter Pro-Q 3 (Paid). There are other options if you can’t afford some plugins, but note that not all EQ Plugins are capable of applying mono in this manner.

{{< img src="https://lh3.googleusercontent.com/d/1MmXSXZhoJFvJERWh9rDQsv5ZOKAvxUm5" >}}

The blue curve with a range of frequencies before it represents side EQ that allows for monos on anything before that band. In this case, any frequencies below 200hz are mono, which would be the appropriate mix for low range frequencies.

Middle range frequencies (Mids) go from 300hz to 6kHz. This is mainly a supplementary gap between lows and highs, where any sound that is defined clearly would be. For instance, bass is typically reserved for lows, but can be moved to the mids if they have more prominence in your track. This can also apply to tenor vocals, saxophones, flutes, and clarinets.

High range frequencies (Highs) go above 6kHz. The human ear can’t process frequencies from anything higher than 24kHz, so in the same manner as lows, it’s fair to cut off frequencies past 20kHz. Sounds that are higher pitched such as white noise, cymbals, crashes, and hats all cover high range frequencies, and should be taken into account when using them.

## Filters

Filters are a tool that allows you to let through or block certain range frequencies. There are plenty of these that you should familiarize yourself with when equalizing:

- **Bell**: As the name may imply, it gives you a bell curve to adjust frequencies with. This is also the most common filter you’ll see in parametric EQ’s.

{{< img src="https://lh3.googleusercontent.com/d/1Ud7b2Z7n1kh9gWXhROn-5ERi7ktuJxYT" >}}

- **Low Shell Pass**: Increases volume of frequencies on the left side of a band.

{{< img src="https://lh3.googleusercontent.com/d/1sbB_cWL2bsKGfxf50_m8wWQCNQt4ZrHs" >}}

- **Low Cut Pass**: Cuts off frequencies in a curve as it goes along the left side of the band.

{{< img src="https://lh3.googleusercontent.com/d/1-mDdxK6W6BXGqaJ8GhHz_ozoToRe6oG7" >}}

- **High Shelf Pass**: Increases volume on the right side of the band.

{{< img src="https://lh3.googleusercontent.com/d/1lDViP21HoQGVxS0w2F3Yq9FH_eD6TV5n" >}}

- **High Cut Pass**: ICuts off frequencies in a curve as it goes along the right side of the band.

{{< img src="https://lh3.googleusercontent.com/d/1FJYKBH05DNaM77nLfV-pLN_mxH5pndSV" >}}

- **Notch Pass**: Leaves a gap between each side of the band. Typically used to cut out a specific range of frequencies.

{{< img src="https://lh3.googleusercontent.com/d/1qBDkYTdH6OOdW_cSf0N_3xIqKHZPxRKS" >}}

- **Band Pass**: The inverse of the Notch Pass; isolates a frequency or range of frequencies.

{{< img src="https://lh3.googleusercontent.com/d/1BbTNhUp1zJbAHW1WyLJ-rfTodNq3HeeG" >}}

- **Tilt Shelf Pass**: Polarizes a high or low shelf against the opposite side of the band depending if the value of decibels is positive or negative.

{{< img src="https://lh3.googleusercontent.com/d/1VkbaPPrfSCSfpuPaFHVKkAN8uKt7xPnw" >}}

- **Flat Tilt Pass**: Creates a linear slope along the band. The slope of this filter depends on the value of the decibel. Positive values lead to an upwards slope, and the opposite goes for negative values.

{{< img src="https://lh3.googleusercontent.com/d/1PEgb_cNGmu43OEe_ikuDOyfX38zhxs1w" >}}

## Miscellaneous Filters

There are other filters that some EQ plugins may not have as a standalone, but may be included in your synthesis. The reason why you may want to use standalone EQs over synths filters matters in the order of post processing. In a lot of cases, you’d want to save equalizing for last. If you are changing the frequency of your sounds before going into post processing, here are some other filters you should be familiar with:

- **Comb Filter**: Creates different band passes that shorten in length the higher the frequency gets. This creates a comb-shaped waveform, and in turn the effect of a vibrating string.

{{< img src="https://lh3.googleusercontent.com/d/1BU9vgWAW99GwWOfuYZdb69OU2So8AoIW" >}}

- **Formant Filter**: Produces a sound similar to that of human speech; creates a set of band passes in parallel and moves them around to mimic the way the vocal tract works when pronouncing vowels. Each vowel has their own range of frequencies, but all are made up of 3 band passes. Below shows the filter itself, along with a cheat sheet of each vowel and their respective passes.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1Q4OLHgtFgcOrJptHonjix71tiUXwWlIu" >}}

{{< img src="https://lh3.googleusercontent.com/d/1Muc1PwBROrmOfT5LV1OZTNzZCkR1_bh-" >}}

{{< /img-grid>}}

# Sources

- [Vowel Formant Cheat Sheet | Polyverse Music](https://polyversemusic.com/vowel-formant-cheat-sheet/)
- [“What exactly is Comb Filtering?” by Paul White](https://www.soundonsound.com/sound-advice/q-what-exactly-comb-filtering)
- [What is Reverb? | Premium Beat](https://www.premiumbeat.com/blog/what-is-reverb/)
- [Using Delay Effects in Music Production](https://renegadeproducer.com/delay-effects.html)
- [“What is Harmonic Distortion vs. Total Harmonic Distortion (THD)” by Peter Susic](https://headphonesaddict.com/total-harmonic-distortion/)
