---
draft: false
title: Attempt-Based Data 2 (2.1)
weight: 6180
date: 2024-04-19T00:00:00.000Z
description: This guide delves into an application of Activation Order to save integer values between attempts.
authors:
  - typexleta
contributors:
  - soondslash
  - typexleta
tags:
  - Grade 2
  - Legacy Setups
---

{{< callout context="caution" title="Outdated Guide" icon="outline/info-circle" >}}
As of Update 2.2, this guide is now functionally useless. It will remain for legacy reasons, but you should visit the [Item Persistence Trigger](/docs/guides/triggers-1/item-edit-comp-pers) if you wish to replicate this setup.

{{< /callout >}}

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- As we explored in the prior lesson, there is a way to save binary data between attempts by exploiting the game’s Priority Order mechanic.
- This can be expanded upon to save integer values as well.
- You'll have to start with the binary save system from the prior lesson, but modified so you can have multiple saves. Then, you'll have to convert the binary values to integers and create a system to reset them as necessary.
- Finally, you'll have to make a system that converts integers back to binary.

{{< /callout >}}

** **

In this guide, we’ll be expanding making a system that can store integer numbers instead of simple binary values. To do this, we'll adapt the setup from the previous guide and add a binary converter to it.

# 1: Binary Numbers

When we refer to the base of a counting system, we mean the maximum number of values we can put into a single column of digits. For **binary**, that base is 2, and the __only values that numbers can use are 0 and 1__. Counting in binary would go like 0, 1, 10, 11, 100, 101, 110, 111 and so on. Counting in **decimal**, or __base-10, is what we’re used to; 0, 1, 2, 3, 4, 5, and so on__.

## Binary numbers

Numbers in binary are made of binary digits (bits for short). __Each bit represents a power of 2, starting with 2⁰ (or 1), and this value can increase indefinitely__. You can work out the maximum value you can store in a given number of bits with the formula 2ⁿ - 1, where n is the number of bits you have. With 7 bits, for example, the maximum number you can store is 2⁷ - 1, or 127.

{{< img src="https://lh3.googleusercontent.com/d/18Y1qGWPyqCfCA7bJ06gUwtS5VnJTkMkL" >}}

## Converting Binary to Decimal

Converting from binary to decimal is a rather straightforward process. You simply need to add the value of every bit with a 1 in it to a decimal total. For example, here’s how we convert the binary number 0010110 into decimal to achieve a result of 22.

{{< img src="https://lh3.googleusercontent.com/d/1B37MZP_94IPm29zHdSId_Lyl7OfzbZTs" >}}

Converting from decimal to binary is a bit more complex. You’ll need to start by finding the largest power of 2 that’s smaller than your number. Once you’ve got that value, you’ll need to subtract it from your number and put a 1 in its corresponding bit.

Next, compare every power of 2 below the one you just subtracted to your new number. _If the next power of 2 is smaller than your number, repeat the process of subtracting it and setting its bit’s value to 1. If it’s larger, put a 0 in its bit and carry on until you find another power you can subtract, or you pass 2⁰ (or 1)_.

For example, here’s the process of converting the number 22 back into binary:

{{< img src="https://lh3.googleusercontent.com/d/1oCrZyEdF4EYzDF7A76DPWDvSMc-b_p5o" >}}

# 2: Setup

The setup for the save consists of four modules: the binary saves that save and load the actual binary data, a module to convert the binary values to decimal, a module to reset the saves, and a final module to convert from decimal to binary and save that. They'll need to be in that specific order within the level.

## Binary saves

To save decimal values, you’ll need to have a clear maximum value in mind, because you can’t do it without making binary saves (and you can’t save infinite binary values). Once you choose your maximum value, convert it to binary and keep the number of bits in mind.

1. Begin by creating a binary save system (refer to **Attempt-Based Data 1** for instructions), but make sure you leave out the four Move triggers that save the value. If you want, you can assign the Pickup trigger and Collision Block `C` to the same Group; this saves one Group per digit and make future steps easier._
2. Make both of the Collision triggers Spawn-triggered and assign them to a new Group `A`.
3. Place down a Spawn trigger at the very start of the level and make it target Group `A`.
4. Copy-paste the entire system, excluding the new Spawn trigger. Move it at least four grid spaces away on the X-axis (as the Y-axis is irrelevant to the Blocks’ priority order) and use Build Helper to update all the Groups.
5. Select the Pickup trigger and open the Edit Object menu. There, click the :BluePlus: icon next to the Item ID field to target the next free Item ID.
6. Do the same for all of the Collision blocks’ Block ID fields, and update the Collision triggers accordingly.
7. Repeat steps `4` to `6` until the number of binary saves matches the number of bits for your maximum value.

{{< youtube OS1_ubhnWEE >}}

You should end up with something like this.

{{< img src="https://lh3.googleusercontent.com/d/1aolfJa0i77Sdje_vwAdoeGGXOlluNcCu" >}}

## Converting Binary to Decimal

This step is the same inside and outside GD. We simply need to test for bits that have a value of 1, and add those bits’ values together. This can be achieved with a simple Instant Count and Pickup trigger-based setup.

1. Begin by placing down a Spawn trigger after all the binary saves have activated and setting its Target Group to a new Group `B`.
2. Place an Instant Count trigger. Make it Spawn Triggered, assign it to Group `B`, and enable Activate Group. Then, make the Item ID the ID of the bit you're testing, the Target Count 1, and the Target ID a new group `C`. We recommend that you go in ascending order of Item IDs for the bits with the lowest ID representing the **most significant bit**, or the bit with the highest number value. However, you can do it any way you like.
3. Place down a Pickup trigger and set the Item ID to a new ID `X` (this ID will represent the decimal value you’re saving). Set the Count to the value of the bit. For example, since this is the most significant bit, its value would be 128 in an 8-bit system.
4. Copy-paste the two triggers and use Build Helper to change their Groups.
5. Set the Instant Count trigger and Pickup triggers’ Item IDs to the one for the next bit, and halve the number in the Pickup trigger’s Count field.
6. Repeat steps `4` and `5` until you reach the final bit, with a value of 1 in the Pickup trigger’s Count field.

{{< youtube iPMHdaZa7gE >}}

Your result should resemble this (but potentially expanded to include however many values you would like, of course).

{{< img src="https://lh3.googleusercontent.com/d/14VxhFcRjmb-qdxILZztlmkMVRDlQAlgF" >}}

## Resetting Binary Saves

This part of the system will reset all saved binary digits to 0. We’re doing this so that we can save new values every attempt without interference from the previous attempts.

- **1.** Place down a Spawn trigger and set its Target Group to a new Group `D`.
- **2.** Place down a Move trigger and set its Target Group ID to the Group for Collision block `B` (or whichever block corresponds to it in the binary saves’ duplicates). Set its Move Time to 0, its Move X value to -40, and enable “Spawn triggered”.
- **3.** Duplicate this trigger and change the new trigger’s Move Time to 0.03 and its Move X value to 40.
- **4.** Finally, assign both triggers to Group `D`.
- **5.** Repeat steps `2` and `3` for each binary save, updating the Move triggers’ Target Groups accordingly. Make sure to keep all of the triggers on Group `D` when you’re done.

{{< youtube DDk-OsRNoIg >}}

What you end up with should look something like this.

{{< img src="https://lh3.googleusercontent.com/d/1lS7bwkUdkHXxhj2PgkN3gnHObr8cPxkt" >}}

## Converting Decimal to Binary

Finally, we'll convert our decimal value to binary and send it forward to the next attempt. Similar to how we did this conversion the other way round, we can do it the same way we’d do it outside GD with a simple Instant Count and Pickup trigger-based setup. However, we’ll need to add something extra to make this work smoothly with our binary save systems.

1. Place a Spawn trigger and set its Target Group ID to a new Group `E` (in the future, this trigger can be replaced with whatever trigger you want to activate the save).
2. Place down an Instant Count trigger. Set the Item ID field to Item ID `X`. Set the Target Count to _one less than the value of your binary number’s most significant bit_ (in an 8-bit number this would be 127), and enable the “Larger” parameter. Finally, set the Target ID to a new Group `F`, assign the trigger to Group `E` and ensure that “Spawn Triggered” is enabled. _This trigger is what’s checking if a certain power of 2 can fit into our decimal number._
3. Place down a Pickup trigger. Make it target Item ID `X`, and make it subtract the most significant bit’s value (so for an 8-bit number, the count would be -128). Finally, make it Spawn Triggered.
4. Place down a Move trigger. Set the Target ID to Group `B`. Set the Move Time to 0, the Move X value to 40, and make it Spawn Triggered.
5. Duplicate this trigger, set the new trigger’s Move Time to 0.03, and set its Move X value to -40.
6. Add both Move triggers and the Pickup trigger from step `3` to Group `F`. _These triggers will subtract the bit’s value from the decimal number and set the bit itself to 1_.
7. Duplicate the triggers from steps `2` to `6` and use Build Helper. Next, ensure that the new Instant Count trigger is placed _at least one grid space to the right of the previous one_.
8. Set the Instant Count trigger’s Target Count to *one less* than the value of the next bit (63, 31, 15, etc.), and update the Pickup trigger accordingly. You’ll also need to update the Move triggers’ Target Group IDs to match the corresponding block in the next binary save.
9. Repeat step `8` for each binary save.

{{< youtube vd-2DdjE-HA >}}

Your final product should resemble this.

{{< img src="https://lh3.googleusercontent.com/d/1sJABpe8NruNrBxIYBzEvJfdP2FhLxFME" >}}

Here's an example of what you can do with this setup; here, the counter increases by 1111 each attempt.

{{< youtube mPntGMPYrqI >}}
