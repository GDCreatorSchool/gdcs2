---
draft: false
authors:
  - theibra
title: Control Schemes
weight: 6160
date: 2026-03-05T00:00:00.000Z
contributors:
  - theibra
description: When making minigames, controls are a major aspect as they are what
  the player uses to interact with your level. Making them complicated or
  confusing can lead to the experience being less enjoyable. However, having
  only 2 or 6 inputs can make this challenging. This guide discusses how
  different button combinations can be used to create more actions while keeping
  the control layout manageable.
tags:
  - Grade 2
  - Trigger Setups
seo:
  title: How to Make Minigame Controls in Geometry Dash
  description: A complete guide to creating custom controls for a Geometry Dash level.
  canonical: ""
  noindex: false
---
{{< callout context="caution" title="Incomplete guide" icon="outline/info-circle" >}}





This guide is missing the following:
- Examples






{{< /callout >}}

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}



* While Geometry Dash only offers so many usable keys, you can add more actions to your level using various trigger setups.
* Control schemes should be intuitive to the player, making sure they are easy to learn.



{{< /callout >}}

{{< callout context="tip" title="Note" icon="outline/circle-plus" >}}





This guide contains interactive images; you can click or hover over elements to learn more about them.





{{< /callout >}}

- - -

# 1: Inputs

## Single Player Mode

For mobile, tapping on the screen anywhere other than the buttons on the UI will count as a jump. Platformer controls will make arrow buttons visible on mobile.

<!-- EXAMPLE HERE -->

## 2-Player Mode

There are 6 available keys spread across both players; each player has Left/Right and Jump inputs. On mobile, this shows as Arrow buttons in a WASD configuration for both players.

<!-- EXAMPLE HERE -->

# 2: Input Detection Methods

Geometry Dash provides various methods to detect button presses. This section lists them in order from most to least direct.

## Triggers (Event and Touch)

The Event and Touch trigger are the most versatile ways to detect player input, however they differ slightly:

| Touch Trigger                                    | Event Trigger                    |
| ------------------------------------------------ | -------------------------------- |
| detects all keys, even in classic                | only detects jumps in classic    |
| cannot differentiate between jump, left or right | can detect actions independently |
| not blocked by the options trigger               | blocked by the options trigger   |

Choosing between these triggers mostly comes down to the gamemode in use. Touch is more suited for classic while Event works better for platformer, but both can be used depending on your needs.

## Toggle Orb and Toggle Block

Toggle Orbs/blocks can only detect jumps, but allow for a simpler way to toggle actions.

For example, if there is a “chest opening” action, you can place a toggle block near the  chest, and the action will trigger when the player jumps within the block.

## Collision

Collisions work differently; while Toggle Orbs/Blocks exclusively detect jumps within the block, collisions only require the player to come in contact. This makes them the least reliable option thus far as the player must be boxed to prevent unintended movement.

A common usecase for collision is making mutually exclusive actions; the player can go left or right, but never both at once.

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}


It's also possible to detect collisions with the player and objects like portals or pads using the Event Trigger, although doing this has no visible benefits over Collision Blocks.


{{< /callout >}}

# 3: Custom Player

If normal player controls don’t fit your needs (e.g. top-down gameplay), you can create  your own playable character.

We will break this down into individual movements, which can be created using one of 2 setups:

## A. Spawn loop

1. Place 2 event triggers. {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} Make the first detect \[key] push and activate group X.
2. Place a Spawn Trigger that activates group X and a move trigger that moves your character a certain direction.
3. Give both triggers the same delay and groupID X.
4. The second Event Trigger should detect \[key] release and activate a Stop Trigger that stops groupID X.

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

The Move Trigger in this setup can be replaced with Rotate.

{{< /callout >}}

## B. Advanced Follow

1. Give your character group X and make it the group parent.
2. Place another object away from your character in the direction you want, and give it groups X and Y.
3. Place 2 Event Triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}}. The first should detect \[key] push and activate group Z, and the second should detect \[key] release and stop group Z.
4. Place an Advanced Follow Trigger and give it group Z. Set the following values:

* **TargetGID**: Group X
* **FollowGID**: Group Y
* **MaxSpeed**: Any number greater than 0

<!-- EXAMPLE HERE -->

These setups can be used to create more controls:

## 8-Directional controls

Using setup A for each of the 4 cardinal directions (up, down, right, left), you can create simple 8-directional movement.

<!-- EXAMPLE HERE -->


{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}


Because Geometry Dash doesn't have native support for the S key (as of 2.2081), you can't add downwards movement with conventional means. You can bind down to any P2 key if all P1 keys are reserved.


{{< /callout >}}

You may notice with setup A that moving 2 opposite directions at the same time can create some unexpected results, which can be fixed with either of these 2 solutions:

* **Overriding the Previous Input**: Event Trigger 1 activates a Stop Trigger that stops the loop of the opposite direction, and vice versa for Event Trigger 2.
* **Changing Directions after Releasing a Key**: Event Trigger 1 activates a Pause Trigger that pauses the Event Trigger of the opposite direction, Event Trigger 2 activates a resume trigger that resumes it.
 
These solutions can also be used to limit your options to 4 directions!

## Driving controls

If you want to create a top down racing game for example, you can use this setup:

* **Move Forward**: use setup B on your character
* **Steer left/right**: use setup A on the object your character follows, making sure to replace the move trigger with a rotate trigger that rotates around the character group.

<!-- EXAMPLE HERE -->

# 4: Advanced Inputs

With a limited number of available inputs, you may have to think outside the box to add more controls. This section will teach you how to create key combinations using holding or double-tapping.

## Hold (and release)

### Touch Trigger

This trigger already has a built-in Hold Mode, which is generally used in Classic as it can't differentiate between keys. Since this mode toggles objects, it can be used with collision blocks to create similar effects to what Event Triggers can do.

### Event Triggers

1. Place 2 event triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} A and B.
2. Event trigger A detects \[key] push, this is what activates your action.
3. Event trigger B detects \[key] release, meaning the player let go of the key. This should revert or stop your action using a Stop Trigger, Toggle Trigger, etc.

<!-- EXAMPLE HERE -->

## Double Taps

This can be used to create actions like sprinting, or a stronger variation of a single-tap action.

1. Place an Event Trigger {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} with \[key] push enabled, set to trigger Group X.
3. Add a Pickup Trigger on Group X that adds 1 to Item ID X.
4. Add a Spawn Trigger on Group X with a small delay that activates a Pickup Trigger, subtracting 1 from itemID X.
5. Place a Count Trigger on Multi-Activate that detects when itemID X reaches a value of 2. This will detect a double-tap.

<!-- EXAMPLE HERE -->

This setup can work for any number of taps by adjusting the value in the Count Trigger, making sure the delay inside the spawn trigger has a lenient window for the player to perform the double tap.

## Key Combinations

### Unordered Key Combination

Order doesn’t matter, but the action should occur when all required keys are pressed at once. This can trigger when all keys are simply held, or if they are pressed within a certain time frame.

1. For each key in the combination, place an Event Trigger {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} that detects \[key] push.
2. Each Event Trigger will activate a Pickup Trigger increasing Item ID X by 1, and a Spawn Trigger that subtracts 1 from X after some delay.
3. Place a Count Trigger on Multi-Activate that detects when Item ID X reaches the desired number of keys, activating your action.

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

If you want the player to just hold all required keys instead of timing inputs, you can replace the Spawn Triggers with Event Triggers that detect \[key] release.

{{< /callout >}}

### Modifier Keys

Modifier keys can be any usable keys that are analogous to the Shift and Ctrl keys on most keyboards. Although these keys aren't usable directly, any of the total 6 inputs can work as a substitute.

1. Place two Event Triggers. {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} Trigger A will detect \[mod key] push (A) and trigger B will detect \[mod key] release.
2. Event Trigger A spawns an Event Trigger C that detects \[key] push.
3. Event trigger B spawns a Stop Trigger that stops Event Trigger C.

### Key Sequence

Key sequences can activate an action only when the required keys are pressed in a certain order. In this example we’ll use the following sequence: key A -> key B -> key C.

1. Place an Event Trigger X {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} that detects \[key A] push. This will spawn an Event Trigger Y that detects \[Key B] push, and a Spawn Trigger that stops Event Trigger Y after some delay.
2. Repeat Step 1 for Event Trigger Y that activates an Event Trigger Z detecting \[key C] push.
3. Since event trigger Z is the last key in our sequence, this will be the one to trigger our action.

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

You can switch out the delayed Spawn Triggers for Event triggers detecting \[key] release if you want to remove the timing window.

{{< /callout >}}

## Buttons

Buttons usually require controls separate from the player's movement, but you might want to implement a different approach depending on the usecase. 

For the following examples that don’t use the player as a cursor, we will use a Collision Block. Collision can be detected by using the Collision Trigger and toggling the block, or by spawning an Instant Collision Trigger.

### Cycling Through Buttons

This is the most common method to create buttons, as the player can use 1 or 2 keys to cycle through all available buttons. This is useful for  menus or inventory systems.

For a 2-key setup (cycle and select), use a Sequence Trigger with loop enabled that loops through move triggers on \[key 1] push, and each Move Trigger moves the Collision Block to the selected button. Then, with an Event Trigger on \[key 2] push, toggle the block or spawn an Instant Collision Trigger.

{{< image-details src="https://lh3.googleusercontent.com/d/1LEGZMgmZAbU4pHS8p0k3MnOfeqvxfMm4" tlbr="89 94 10 5">}}

{{< detail name="sequence" src="https://lh3.googleusercontent.com/d/1lGUmQok9Q84FITBvTnOZRnCeo5O4P5Zj" tlbr="35 18.5 10 7.5" >}}

{{< detail name="eventselect" src="https://lh3.googleusercontent.com/d/1nsrrVodamcmOWE6yjFS7wZpqp-AlNCkQ" tlbr="15 19 10 6.5" >}}
{{< detail name="eventclick" src="https://lh3.googleusercontent.com/d/1cukhbL63arpX5fwGcP9uLQbI1oWFP0Jl" tlbr="15 70.5 10 6.5" >}}

{{< detail name="move2" src="https://lh3.googleusercontent.com/d/1n8_w4pcVrmioJPSqrPZNti8iounpL_yl" tlbr="35 35 10 5" >}}
{{< detail name="move3" src="https://lh3.googleusercontent.com/d/1Gw5cd5PFBmSSRk_btJPzw15BAi810PEn" tlbr="53 35 10 5" >}}
{{< detail name="move4" src="https://lh3.googleusercontent.com/d/1VfJH7woXE16fdbJbiDl4WcM5vlI__tQ1" tlbr="71 35 10 5" >}}

{{< detail name="instcoll2" src="https://lh3.googleusercontent.com/d/1-PMYWrMAR7rMjKzsjCUIS6Qzmw1tGWlK" tlbr="32 70.5 12 7" >}}
{{< detail name="instcoll3" src="https://lh3.googleusercontent.com/d/1BCSue8QubLMgdID4kh205VLrg9PVXYaZ" tlbr="51 70.5 12 7" >}}
{{< detail name="instcoll4" src="https://lh3.googleusercontent.com/d/1LMjWl6X_NkYO4IbeP1N5eNAsb8Awvm30" tlbr="69 70.5 12 7" >}}

{{< tooltip-detail tooltip="Cursor GID1" tlbr="35 45 9 6" >}}
{{< tooltip-detail tooltip="Button GID2" tlbr="32 49 14 8" >}}
{{< tooltip-detail tooltip="Button GID3" tlbr="51 49 14 8" >}}
{{< tooltip-detail tooltip="Button GID4" tlbr="69 49 14 8" >}}

{{< /image-details >}}

1. For a 3-key setup (previous, next and select), space out every button evenly (using Align X/Y can help with this), and use 2 Event Triggers to move the Collision Block to the next or previous button. Make sure the cursor can’t leave the bounds of the buttons by Collision Blocks on both sides that prevent the controlled Collision Block from moving outside or loops back to the button on the opposite side. This trick can be used for other behaviors like moving to a next row of buttons.

{{< image-details src="https://lh3.googleusercontent.com/d/1Lc1cc4XFF4x-ZSc4Dym7XD9YA25UOQXE" tlbr="89 94 10 5">}}

{{< detail name="eventup" src="https://lh3.googleusercontent.com/d/1XUAvrfgP3gekTs08ILa_HZuptjyzhjK9" tlbr="37 20 10 6.5" >}}
{{< detail name="eventdown" src="https://lh3.googleusercontent.com/d/1G50RipDXjYFm0CFFXG0uiWEKiuv7CfWj" tlbr="56 20 10 6.5" >}}
{{< detail name="eventclick" src="https://lh3.googleusercontent.com/d/1cukhbL63arpX5fwGcP9uLQbI1oWFP0Jl" tlbr="10 71.5 10 6.5" >}}

{{< detail name="collisiondown" src="https://lh3.googleusercontent.com/d/12rb8FnMpxDA-vLc6qJ6GpuTGm0hp1G6y" tlbr="10 30 10 7" >}}
{{< detail name="collisionup" src="https://lh3.googleusercontent.com/d/1HWvww3uJBOqrO9Y_J3J3mNnqRsdE8cc4" tlbr="84 30 10 7" >}}
{{< detail name="moveup" src="https://lh3.googleusercontent.com/d/1FD8Q2heXDNgZaQqyD8vr1A3I0qslwAOR" tlbr="38 31 10 5" tooltip="Moves the cursor up">}}
{{< detail name="movedown" src="https://lh3.googleusercontent.com/d/1bH6AEmpvJ0fvBDc8f7djZvNU8augjHXf" tlbr="57 31 10 5" tooltip="Moves the cursor down">}}

{{< detail name="move2" src="https://lh3.googleusercontent.com/d/1yL7fdlZXKvTsHzk3_CZKJuMYBxCeR5SY" tlbr="10 41.5 10 5" >}}
{{< detail name="move4" src="https://lh3.googleusercontent.com/d/1V1CGOi6sfWyhl7rDS5ui4G-84IRxAdjg" tlbr="84 41.5 10 5" >}}

{{< detail name="instcoll2" src="https://lh3.googleusercontent.com/d/1-PMYWrMAR7rMjKzsjCUIS6Qzmw1tGWlK" tlbr="26 71 13 7.5" >}}
{{< detail name="instcoll3" src="https://lh3.googleusercontent.com/d/1BCSue8QubLMgdID4kh205VLrg9PVXYaZ" tlbr="44 71 13 7.5" >}}
{{< detail name="instcoll4" src="https://lh3.googleusercontent.com/d/1LMjWl6X_NkYO4IbeP1N5eNAsb8Awvm30" tlbr="62 71 13 7.5" >}}

{{< tooltip-detail tooltip="Top limit" tlbr="9 50 14 8" >}}
{{< tooltip-detail tooltip="Cursor GID1" tlbr="29.5 46 9 5" >}}
{{< tooltip-detail tooltip="Button GID2" tlbr="27 50 14 8" >}}
{{< tooltip-detail tooltip="Button GID3" tlbr="45 50 14 8" >}}
{{< tooltip-detail tooltip="Button GID4" tlbr="64 50 14 8" >}}
{{< tooltip-detail tooltip="Bottom limit" tlbr="82 50 14 8" >}}

{{< /image-details >}}

### Ship/Jetpack controlled Cursor

This method is simplest to create a cursor, which is useful for things like point-and-click games.

* The Ship/Jetpack is the cursor.
* You can use Toggle Orbs/Blocks for buttons, which can be resized to fit the button's graphic and set to prevent multiple inputs at once, if needed. This can be achieved by toggling the orb/block once clicked, and can be toggled back on after some delay or if an action finishes.

<!-- EXAMPLE HERE -->

### Cursor-like Directional Controls

Unlike the previous method, this is controlled by 4 directional buttons, with additional buttons for interacting with objects. In this example, we will create a cursor with only one interact key.

1. Place a Collision Block and toggle it off. This will be your cursor.
2. Use the 4-directional setup discussed in the Custom Player example for the cursor.
3. Place 2 Event Triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}}; The first detects \[key] push and toggles the block on, and the second will toggle it off. This will be what counts as the interact key.

<!-- EXAMPLE HERE -->

# 5: Custom keybinds

Sometimes, the default controls may be unintuitive to some players. While mobile players can change the button layout, PC players cannot change the vanilla keybinds (as of 2.2081). Because of this, you may want to give the option to remap your controls.

## Custom Keybinds System

We’ll use the cursor system discussed in [the previous section](<>) as the middle man between the input detection (Touch, Event Trigger...) and the action; the input detection acts on the cursor Collision Block which interacts with buttons that are tied to your actions.

Now, you can add a room or menu at the start of your level where the player can change their keybinds:

1. Organize your cursor and button Collision Blocks for better clarity. Give each cursor Collision Block a group ID that we’ll note g1, g2... etc. Do the same for button Collision Blocks that we’ll note b1, b2, and so on.
2. Use any of the techniques discussed in the previous section to create buttons for actions.
3. When the player selects which action to rebind (for example action1), activate a Spawn Trigger that remaps a group ID X to b1 and activates a setup to check for which key this should be bound to.
4. For said setup, place an Event Trigger for each possible key. When the player selects a key, for example key1, this will activate a Target Mode Move Trigger that moves group ID g1 to X, being the value that the Spawn Trigger will remap.

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Notes" icon="outline/clipboard-text" >}}

* Make sure to add a timer and/or special key to cancel the selection. For example, the Event Triggers could detect \[key] push, and make sure the event stays pushed for 1s to cancel the action.
* Cursors and buttons are interchangeable; you can move buttons to the cursors and vice-versa.

{{< /callout >}}

# 6: Limitations

The previous sections discussed what's possible to achieve using the tools given in the editor, though you should keep in mind that the game has limitations which define what can and cannot be achieved, so you may have to approach your level differently:

* There are 6 usable keys total (as of 2.2081), so more actions require using techniques like key combinations, which get harder to remember the more complex they are.
* Mouse controls are slow and unreliable, making them usually suitable for slow-paced sections or UI navigation.
* Because of the lack of remapping keybinds on PC, players are stuck with WAD, arrow keys, space bar and left click. This means adding actions like moving down for example require a different approach.
* On mobile, players will realistically only be able to use their 2 thumbs.

There are some rules you can follow to help you design a more robust control scheme:

* **Intuitive Controls:** The player should be able to pick them up in the first minutes of your level. If you’re introducing new mechanics, you can include a tutorial or safe area to get the player used to them.
* **Simplicity:** Key combinations get exponentially harder to remember the more keys that are added, so they should stay at a low key count where possible. Time-critical actions can also be abrasive to the experience if they require a complex action in a short time window.
* **Compactness:** One key can fit many actions when they are mutually exclusive (one action can be performed at a time). Some examples include:

  * **UI Controls**: The player usually won’t move while using a menu, so inputs like W/D/Left/Right can be repurposed for navigation.
  * **Toggle Orbs/Blocks**: Can be used to interact with objects/groups, as they only register clicks when inside their hitbox.
  * **Context-Specific Actions**: Actions from the player such as jumping can be used to perform multiple actions based on context. An example would be dashing while mid-air upon clicking.

These rules can be broken in some cases, such as fighting games that utilize complex combinations. Playtesting is recommended for this as it lets you gauge how easy it is to learn your controls without creator bias.
