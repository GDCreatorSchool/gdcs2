---
title: Data Storage
weight: 614
date: 2024-07-31
authors:
- v1ewsh0t
contributors:
- komatic5
- v1ewsh0t
draft: false
---

## TLDR - What this guide covers
- Data Storage systems detect and store various types of data, such as player telemetry.
- You can make a variety of simple data detection systems to detect if the player’s in LDM, Practice Mode, the Editor, or just completed the level.
- You can also make complex data storage systems like save codes, to save the player’s data between play sessions so they don’t lose all their progress upon exiting.

** **

Data is a useful tool for knowing what the player’s doing at a given moment, which makes it useful for many trigger setups. If you need a system to store data about the player or the game’s state, you’ll most likely use a **data storage system**. There are many types of data storage, like save codes, detectors, and data structures; we’ll go over the first two in this guide.

Here are some levels which use data storage to their benefit:
- MasterGame by Serponge
- BlockDude by Zejoant
- Geometry Dash Platformer (Discontinued) by V1ewSh0t

<iframe width="560" height="315" src="https://www.youtube.com/embed/azgK0u-MsNI" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Yh-sHc0oQk" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/qfMJanunKNc" frameborder="0" allowfullscreen></iframe>

# 2: Detecting Player Data

You can find out a lot about a player’s game state, just by using properties which exist within the game. While the list here contains many types of data detection, it should be possible to make many others as well.

## Low Detail Mode (LDM) Detection

This can be very useful if you need to detect when the player is in Low Detail Mode (LDM). For example, my level Geometry Dash Platformer (Discontinued) uses LDM detection to lock and unlock the ULDM mode.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qfMJanunKNc" frameborder="0" allowfullscreen></iframe>

This also has a very straightforward setup. All you need is a toggle trigger with the “High Detail” setting enabled.

Then, all you need is the toggle trigger to toggle off a group and you should be all set! Here is an example of it working in action: https://youtu.be/MH3jwlpy80o

There are many ways you can use LDM Detection. You can make setups that only show a ULDM option if the LDM has been selected. You can even make sections of your level only accessible through the in-game LDM.

## Practice Mode Detection

As before, this is useful if you need to detect when the player is in Practice Mode. In my level Travel to the Sun, I used practice mode detection to blur the end screen.

<iframe width="560" height="315" src="https://www.youtube.com/embed/hEwPLLVLGtA" frameborder="0" allowfullscreen></iframe>

This is also a simple setup, although it’s more involved than LDM detection:

1. Place down 2 Toggle Triggers, each with the same group (Group A). Make the second trigger Spawn & Multi Triggered with “Activate Group” enabled, and give it a Group B.

2. Place an Event Link trigger. Set its Target Group to Group B, and select the “Checkpoint Respawn” option.

You can then add any objects to Group A and it should work if you set it up correctly. This doesn’t work in Platformer Mode if you use checkpoint objects, but you can circumvent this by using “Spawn Group” in your checkpoint objects to activate another toggle trigger, disabling Group A when respawning from them.

Here is a video showcasing the final product: https://youtu.be/58sIT6Ytgzc

As before, you can use this for many purposes. You can blur your level’s endscreen while in practice mode, show helpful hints in the mode, or even just add a custom “Practice Mode” label. If your level has collectibles which persist after death, you can also prevent players from picking them up in practice.

## In-Editor Detection

As with Practice Detection, this is useful for preventing cheeses. It’s also very practical if you need debug objects in the editor, or notes only you can only see.

Before making an editor detection system, you must understand two things:
- Gameplay portals like the Cube and Gravity portals count as one object in the editor, but two in-game.
- Rotate triggers (and other triggers which require a center group) don’t work when multiple objects are in the center group. In the case of rotate triggers, the target group’s objects will rotate around themselves.

1. Place any gameplay portal and give it group A. I used a cube portal for this example.
2. Place two collision blocks; one two blocks to the *left* and the other two blocks *down* from the portal. The collision block on the left needs a Block ID (such as 2), while the one below the portal needs another Block ID (such as 1), a Group ID (i.e. B), and the “Dynamic Block” option activated.
3. Place a rotate trigger :Rotate: with these settings. You can replace the groups with the specific ones in your setup, as long as they match the portal and collision blocks’ groups.
4. Place two toggle triggers, and give the first a new group C. Make the second toggle trigger Spawn & Multi Triggered with “Activate Group” enabled, as with the last setup. Give this second toggle trigger group D.
5. Place a collision trigger with these settings. BlockA should be your stationary collision block, while BlockB should be your rotating one. Make the collision trigger target Group D.

If everything was followed correctly, then it should work.

Here is a video demonstrating the system: https://youtu.be/vNhawG8w1gA

As mentioned before, you can use editor detection to show debug labels and objects only while in the editor. You can also use it to remove obstructing deco while playtesting, or to add In-Editor labels. And if you’re really cheeky, you can hide the entire level to prevent people from figuring out how to solve any puzzles you put into it.

## Level Complete Detection

This has a few obvious purposes, like showing an endscreen when the player finishes the level, as well as some interesting ones if you choose to pursue them.

As you may expect this setup uses the End Trigger, particularly its “Spawn ID” feature, to activate a group when the player completes the level. Here’s a demonstration of the trigger working in action: https://youtu.be/myfZjY7qOfA

As for uses, there are quite a few. You can use this to stop any moving objects when the player finishes the level, to help with optimization or prevent visual bugs. You can also use it to display an endscreen when the level’s complete, or to change the song to something like end credits music.

If you combine this setup with the Item Pers trigger, you can use Item IDs to detect if the player’s beaten the level (and how many times they have). This lets you do things like make collectibles see-through, the same way coins appear when you’ve beaten a level with them. This will not work if the player leaves the level though; they must restart on the endscreen.

# 3: Save Codes

Save codes solve a major issue I mentioned with level completion detection; they let you leave the game and then come back with all your data intact. This is very useful when making levels that are too long to finish in one sitting.

MasterGame by Serponge is one of the first levels to use save codes, and one of the most well-known. However, other levels do make use of them, like BlockDude by Zejoant and once again, my Geometry Dash Platformer (Discontinued) level.

<iframe width="560" height="315" src="https://www.youtube.com/embed/azgK0u-MsNI" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Yh-sHc0oQk" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/qfMJanunKNc" frameborder="0" allowfullscreen></iframe>

This section is the most difficult part of this guide. If you get confused at any point, please take the time to reread the prior sections and analyze the examples.

## Inputs

First, we need a way to input the save code. There are many methods for doing this, but I’ll personally use this one here.

This system assigns a Spawn & Multi-Triggered Pickup trigger to increment each Item ID when the player touches their respective State Blocks. However, this has some drawbacks as you can see here: https://youtu.be/HpgjGLXqoms. ||Iif you guessed that the Item ID’s are going above 9, then you would be correct!||

To fix this, I’ll use Item Compare triggers to check when each Item ID is at our maximum amount, such as 9. If the Item IDs surpass this maximum value, their value will be reset to 0. Each Item Compare trigger will be activated by the same State Block as their corresponding Pickup trigger.

If you have been following so far, this is how it should act: https://youtu.be/rQUbTTmS3aI

## Loading Codes

While we have the start of a save and load system right now, it’s really just a glorified item counter. We need a way to submit a code and load it into the system.

Before that, we need to figure out what exactly we want to save and load. This is subject to what your level needs, but here I’ll use these values.

We also need to figure out what constitutes a valid save code. For this example, these are the conditions I will be using.
- 0 < Lives < 4
- 0 < Level <16
- 1 < Money <100
- 1 < Color <10
- 1 < Outfit <10

As before - you don’t need to follow these exact conditions; just use this as an example of how to build your own system.

To check if the save code entered is valid, you must  check each Item ID for their specific conditions. If it meets those conditions, then you can increment another Item ID (which is ID 8 in this case). We can then use that ID to check if it’s equal to the number of conditions which need to be met; if so, the save code is valid and you can use its value to execute conditions within the level, like enabling certain checkpoints or changing the player’s outfit.

For example: If I was to check for Lives, I would first check to see if Lives is greater than 0, then if it is less than 4. If it meets those conditions, then I would increment Item ID 8 by 1.

If I were to do the same for the Level ID’s, it wouldn't work because there are two Item IDs instead of one. But in the same way, we can use another Item ID and use Item Edit triggers to do math. We can create a sequence of Item Edit triggers like this:
I9 = I1 * 10.000 >> I9 = I9 + I2

This sequence allows us to compress both Item ID’s into one Item ID, which can then have the same comparison process as before.

If you combine both of those methods, then you can end up with something like this: https://youtu.be/G_WGBtXpDCQ

## Saving Codes

The rest of this is fairly straightforward. To save this data, all you need is to display the Item IDs to the player when they request it. They can then write the code down somewhere, and input it later to continue playing.

This example uses a fairly simple save & load system, but  you can make it much more complex. You can add letters and use more data cells, but there are pros and cons to everything. A more complex system lets you save more data and potentially encrypt it better, so players can’t easily share codes to bypass most of your level. However, this also results in longer input times and loading speeds, while using more groups.

# 4: Combining Save Systems

While having all these different ways of data storage is useful on their own, here are some ideas you can use to combine them!
1. You could use the Level Complete Detector in conjunction with the Save Code System to display a save code once you complete the level. That way, when you play again, you could have a different route.
2. You could use the Practice Mode Detector in conjunction with the Save Code System to display a different save code for practice mode vs normal mode.
3. You could use the LDM Detector in conjunction with the Level Complete Detector to show a different end screen depending on if you are playing with LDM or not.
4. You could use the In-Editor Detector in conjunction with the Save Code System to allow for a cheats/dev-mode system that only works in the editor.

These are just some out of many ways you can use these systems, so play around with the info you learned to make new things. Happy creating!
