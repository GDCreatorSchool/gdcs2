---
draft: false
authors:
  - tdp9
  - print6165
title: Choosing a Song
weight: 1080
date: 2024-01-30T00:00:00.000Z
contributors:
  - tdp9
  - tv_box
  - print6165
  - halfcookedramen
  - komatic5
  - poryii
description: As a GD creator, you actually have a lot more options for songs
  than just the main level soundtracks. You can grab songs from Newgrounds, the
  music library, or even use a NONG (Not On NewGrounds). Here are a couple of
  ways to do that.
tags:
  - Grade 0
  - Basic Editor
seo:
  title: How to Choose a Song in Geometry Dash
  description: A short guide to choosing a song for your Geometry Dash level,
    using Newgrounds, the Music Library, and NONG file replacement.
  canonical: ""
  noindex: false
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- There are 3 main ways to use songs in GD: Newgrounds, the music library and NONGs.
- Newgrounds is the built in way to use songs that aren’t used in official levels.
- The music library is a list of songs that users can choose for their levels; you can choose songs from a specific artist or genre.
- NONGs involve replacing a song in GD’s song folder on your device.
- The start offset dictates what part of the song should start playing when a level begins.

{{< /callout >}}

- - -

# 1: Newgrounds

Newgrounds is the official website RobTop endorses for songs that aren’t in the main levels. Only certain artists and their songs whitelisted by RobTop can be used, which explains why not every newgrounds song ID can be used in GD. Here’s how you use a song from Newgrounds.

1. Open a level in the editor and locate the {{< img class="emote" src="images/GDEmotes/Buttons/Settings.png" >}} [level settings](/docs/guides/the-editor/editor-settings/#1-level-settings) button.

{{< img src="https://lh3.googleusercontent.com/d/1IlP67nmieM95CK8lKnmu04CL6pszKjYi" >}}

2. By the **Select Song** text, click "Custom" instead of "Normal". Then, click "Select Custom Song".
3. You can choose a Newgrounds song using its ID, or by using your saved songs. If you download custom songs used in levels, the songs should be saved to your device. Clicking the "Saved" button in the bottom right will open a list of your saved songs to choose from and use.

* To check which artists are whitelisted, click the blue "Artists" button.
* To launch Newgrounds, click the green "Newgrounds" button.

4. Search for a song that you like on Newgrounds, and open that song's Newgrounds page.
5. To locate the song ID required to use a Newgrounds song, simply look at the URL. The song ID is located at the end of the URL as a unique set of numbers (*newgrounds.com/audio/listen/[**string of numbers**]*). Copy those numbers into the textbox and click "Search".

* For example, the Newgrounds link for *At the Speed of Light* by *Dimrain47* is `newgrounds.com/audio/listen/467339`, so the ID is **467339**.

6. Copy those numbers into the textbox and click search. After clicking the search, a card for the song should pop up. Click use to use the song in your level.

{{< youtube 06gFmlNyY0g >}}

# 2: Music Library

The music library is a 2.2 feature that will allow the user to pick a song for their level. This section will teach you how to use it.

1. From the GD Editor, click the gear at the top right corner.

{{< img src="https://lh3.googleusercontent.com/d/1HDAkHBsRriWCJGc3E9oT1RM6w5f71wK2" >}}

2. Select the "Custom" option.

{{< img src="https://lh3.googleusercontent.com/d/10N5IoGaeLiGZmrF4RxVfTwO7jRwPsU8M" >}}

3. Click the "Select Custom Song" button.

{{< img src="https://lh3.googleusercontent.com/d/1u40pEtF6FumCuBLMqBRaKjgAJmGpPBUu" >}}

4. Select the "Music Library" button.

{{< img src="https://lh3.googleusercontent.com/d/122QDfZVNfGBIPQJYMwp2yEnOpZPanRfd" >}}

5. Select the song you want to use. If you would like to search up a song, press the magnifying glass on the left. You can also scroll down the library and press the pink arrows on the left and the right. Once you have found the song you want, click the blue download button.

{{< img src="https://lh3.googleusercontent.com/d/1Zolb8m8PbTuj_YGjRzODJAfmjlcArH4p" >}}

6. After downloading the song, click the "Use" button.

{{< img src="https://lh3.googleusercontent.com/d/1R_vpaVFpl-PZ3uTvtlqmZldlL7h-gFl6" >}}

To hear the song as well, click the play button to the right of the "use" button.

{{< img src="https://lh3.googleusercontent.com/d/1oSZ4nCo-LwUNpW2Gd0Jj0E5c0gjn-a0_" >}}

Use the slider in the top left to skip through the song. Slide the slider to the left if you want to go back to an earlier part of the song, and to the right if you want to hear a later part of the song.

{{< img src="https://lh3.googleusercontent.com/d/1nMPgcJTjgklw-_D0iFLuZqsXQ0uJxjkq" >}}

The music symbol on the right is where you can choose a specific artist. The symbol above allows you to choose a specific music genre.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1m9C6Zz4erZOj5HlFNlcKlqeNqmJ1me0j" >}}

{{< img src="https://lh3.googleusercontent.com/d/1n0fsovm5Zmjo2vCUHqww_ZXgVHNXAbTu" >}}

{{< img src="https://lh3.googleusercontent.com/d/1zO67qSxcmowXw8LBQlu36pbWxf89FVIQ" >}}
{{< /img-grid >}}

Once you have picked your desired song you’re all set to play.

# 3: Not on Newgrounds (NONG)

## Windows (On Steam)

When downloading and using a NONG song, you’re basically tricking GD into thinking that the NONG is an official song, or one you have already downloaded from Newgrounds. This explains why the song for slaughterhouse in game (Tennobyte - Fly Away) sounds nothing like the songs for showcases or completions of the level.

1. Download the `.mp3` file of the song you wish to use. The format has to be **mp3**, and any other file type won’t work. If your song isn’t an `.mp3`, then you can use a file converter (like CloudConvert). Make sure you trust the converter you are using, as some are malicious, and can give viruses.
2. If you don't have "Change Song Location" enabled, then use the shortcut `Win+R` to open the "Run Program" window. Enter %appdata% and press Enter. Navigate to Appdata/Local/GeometryDash. This is where all your saved songs will be.
3. If you DO have "Change Song Location" enabled, then open the GD steam page in your game library. On the right side, there will be 3 buttons. Press the cog icon, then navigate to `Manage -> Browse Local Files`. From here, open your resources folder, which will show all game data, including your songs.
4. Right click on your song folder, go to "Properties", and disable "Read-Only". Click "Apply", then drag your custom song that you downloaded into the open folder.
5. Rename the song file to either the title of the song you wish to replace (e.g. StereoMadness, xStep, ClutterFunk), or the ID of the song from Newgrounds (ID 1 is *Chilled 2* in game).
6. Close the game, or just move to a place in the game where the song can’t play (for instance, exiting your level).

{{< youtube mzXcOG6eVuk >}}

## Mac (On Steam)

The process for using a NONG song on Mac is basically the same as on windows.

1.Open a new finder window and press `Command + Shift + G`

2. Type in `Library/Caches/` and click `Go` when prompted with a text box asking where you want to go

* You should now see a spread of your downloaded GD songs.

3. Download the song of your choosing as an `.mp3` file. Any other file type will not work. You can either do this legally, or illegally with an mp3 file converter. Make sure you trust the converter you are using, as some are malicious, and can give viruses.
4. Rename the song file to either the title of the song you wish to replace (e.g. StereoMadness, xStep, ClutterFunk), or the ID of the song from Newgrounds (ID 1 is *Chilled 2* in game).
5. Close the game, or just move to a place in the game where the song can’t play.

## Android (Mobile)

Using NONG songs on Android is a bit different than on Windows or Mac. For this to work, you need to install a mod menu (a bit like MegaHack) for Android.

1. Download the Android Mod Menu from Italian APK Downloader

{{< youtube YNF_wk7uMuA >}}

2. Install the APK. On newer phones, locating the file and pressing on it should automatically update GD.
3. In your level, load a newgrounds ID of the song you’re going to replace. It can be any ID, but it should generally be a song you’re never going to actually use (like Chilled 1).
4. Download the .mp3 file of the song you wish to use. The format has to be **mp3**, and any other file type won’t work. If your song isn’t an mp3, then you can use a file converter (like CloudConvert). Make sure you trust the converter you are using, as some are malicious, and can give viruses.
5. In your files app, navigate to the `GD Mods` and then `Songs` folders.
6. Move the song file you’ve downloaded into that folder, and rename it to the newgrounds ID from step **3**.
7. Go back to the editor, and the song card should have changed to something like the figure below.

{{< youtube 7h6O_v_LN2E >}}

# 4: Changing a Song’s Offset

A song’s **offset** is **where it starts playing in game**. For instance, Bloodbath (which uses *At the Speed of Light*) has an offset of 81 seconds. This means that the game skips the first 81 seconds of the song, and starts playing at the 81 second offset whenever there is a new attempt. Here are the steps to do this.

1. In the GD editor, navigate to the custom song selection page, as detailed in the "Newgrounds" section.
2. Click on the gear icon on the right side of the screen, below the **Help** button.
3. There should be a box labeled "Start Offset" In this box, the song will skip forward `X` seconds ahead in the song - `X` being any number with one decimal point.

* e.g. 142.2 will skip 2 minutes and 22.2 seconds ahead in the song.
* To test if it is the exact offset you want, click the {{< img src="images/GDEmotes/Buttons/MusicPlaytest.png" class="emote">}} music play button (the start button with a music note next to it). If the song starts too far in, decrease `X`. If it doesn't start far enough in, increase `X`.

{{< img src="https://lh3.googleusercontent.com/d/1CCh5BfSI4XKhS2Ee4stjzXFe3DLpr6mS" >}}

4. The "Fade In" and "Fade Out" buttons at the bottom allow for the song to fade in to the level, and fade out once the last block has been passed respectively.

{{< youtube ZFZiChCyjHA >}}
