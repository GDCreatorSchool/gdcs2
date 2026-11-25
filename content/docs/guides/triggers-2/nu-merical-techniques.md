---
draft: true
title: Numerical Techniques
weight: 6170
date: 2026-10-25T00:00:00.000Z
description: null
authors:
  - tildeman123
  - chuckolate
contributors:
  - chuckolate
tags:
  - Grade 2
  - Trigger Abstraction
math: true
seo:
  title: null
  description: null
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Numbers in Geometry Dash are finite, and the two provided types of numbers each have different ranges.
- Positions of players (and other objects) can be represented with two numbers, and a trigger setup can be used to keep track of it.
- A TPS loop can be utilized to create custom delays.
- Plenty of calculator functions can be evaluated using polynomial sums of varying patterns.
- The inputs of some functions can be shrunk to a small range near the center, allowing for accurate computations.
- Chebyshev roots serve as useful, anti-wobble reference points for approximating certain functions.
- One big number can be broken down into smaller, component values by alternating two simple operations.

{{< /callout >}}

{{< callout context="tip" title="Useful Stuff" icon="outline/book" >}}

While there are no hard pre-requisites for reading this guide, the following guides may also be helpful when read in conjunction.
- [Using IDs](/docs/guides/the-editor/using-ids) provides instructions on how assign names to your variables. A lot of numerical-based functions can be clunky to read through, and ItemID/TimerID names provide the needed context for understanding them.
- [Making Functions](/docs/guides/triggers-2/making-functions) goes deep into how functions operate, as well as how they can be represented in the structure of a programming language. Pseudocode may be provided as an alternative for video tutorials if a more intuitive explanation of a procedure is needed.
- [Stacking Properties](/docs/guides/triggers-2/stacking-properties) has a detailed explanation on binary stacking and ID conversion setups. This stacking technique will be frequently employed in this guide to handle repeated multiplications with doubling numbers.

Additionally, there will be further reading materials sprinkled throughout this guide for in-depth explanations of certain procedures. These may include dedicated guides, tutorials or supplementary lecture notes on complex topics.

{{< /callout >}}

# Motivation

If you’ve tried out game making, you might be familiar with a few fancy operations. Maybe you’ve used sine or cosine for directional movement, or perhaps you might have heard of the normal distribution for random values.

In any case, these aren’t normally values that you can calculate by hand, but rather something you put in a scientific calculator during your math exam. That said, how they arrive at those results might still be a mystery to you.

Even if you don’t know what functions are or how to use them, this guide can help you get a basic understanding of various number tricks you can implement in Geometry Dash.

{{< callout context="note" icon="outline/photo" >}}

Hello! I’m Kelly, your favorite soybean drone! I talk a lot, so don’t mind me if I go too deep!

{{< /callout >}}

# 0. A Gentle Introduction into Variables

{{< callout context="success" title="1. Variable" title="1. Variable" icon="outline/movie" >}}

Place down a counter…

Go to “Edit Special”, then set “ItemID” to 1.

It should now show up as `C:1`.

Now, when you press ▶️, the object will change to `0`.

{{< /callout >}}

If you managed to successfully reproduce this, congratulations! You have made what’s known as a **variable**.

The details of it are not important for now, but this allows you to have numbers in your level.

Well… sort of. The keen in you might be yelling at me: “This is the 0️⃣ object, you can only make more 0️⃣s from this!”.

You’re valid to say that, as we haven’t added anything to this number. Let’s put something in there.

{{< callout context="success" title="1. Variable" title="2. Changing Variable" icon="outline/movie" >}}

Place down a pickup trigger where you can reach.

Go to “Edit Object”, then set “ItemID” to 1.

Set the “Count” to 4.

Don’t forget to enable Touch Trigger and Multi Trigger!

When you press ▶️, the object will start at `0` as normal.

However, when you touch the pickup trigger, the number will change to `4`!

Touch it again, it increases to `8`.

{{< /callout >}}

This is one way to change the number, and it works! You can keep playing around with this simple mechanic, who knows, maybe you can get as high as `100`!

{{< callout context="note" icon="outline/photo" >}}

You may already know this, but how do we subtract? What do the other checkboxes do?

{{< /callout >}}

Our first variable is fun to play around, maybe you’ve already found out its biggest and smallest value, and everything interesting in between.

Eventually, it too got bored of itself, and oftentimes we can’t just use one number for everything. This is where you’ll want a second number. Two numbers, double the fun!

{{< callout context="success" title="1. Variable" title="3. Two Variables" icon="outline/movie" >}}

Place down a counter…

Go to “Edit Special”, then set “ItemID” to 2.

It should now show up as `C:2`.

Now, when you press ▶️, the object will change to `0`.

{{< /callout >}}

You might have noticed that the number doesn’t change when you hit the pickup trigger. You have just made your second variable!

{{< callout context="success" title="1. Variable" title="4. Separate Variable Values" icon="outline/movie" >}}

Copy and paste that pickup trigger to a separate location.

Go to “Edit Object”, then set “ItemID” to 2.

When you press ▶️, the new counter will start at `0` as normal.

When you touch the pickup trigger, only that number will change to `4`!

The other number stays the same!

{{< /callout >}}

You can, of course, call them by their ItemID. Variable 1, variable 2, variable 68, so on and so forth. But what if you want to describe what they actually do? This is where names come in.

{{< callout context="tip" title="Further Reading" icon="outline/book" >}}

The main ID names we'll be using throughout this guide are Group ID Names, Item ID Names and Timer ID Names. These will be indicated in the examples as needed.

For more information, refer to the [Using IDs](/docs/guides/the-editor/using-ids/) guide. You are not required to name your variables the same as the guide, but try to name them something memorable.

{{< /callout >}}

# 1. Functions

## Your First Function

{{< callout context="note" icon="outline/photo" >}}

Kelly holding 4 color package CDs next to a PlayStation 5.

{{< /callout >}}

It is very fun to play with the systems, but you soon get bored even with two variables. So far you can only do one thing with these numbers every time: add, subtract, multiply, or divide.

{{< callout context="note" icon="outline/photo" >}}

Kelly holding a spawn trigger, with arrows chaining across item edit triggers

{{< /callout >}}

The answer is the humble Spawn Trigger. Recall from the previous guides, the spawn trigger runs triggers left to right. This means you can order triggers by the order they run onto a horizontal sequence.

I will take the quick example of doubling and then subtracting 1. This is broken down into two steps, multiplying by 2 and then adding -1. Example: 2 × 2 = 4, 4 - 1 = 3; quick math. Let’s see the triggers in action:

{{< callout context="success" title="1. Variable" title="5. Function" icon="outline/movie" >}}

Place down two Pickup triggers side by side.

Set both to ItemID 1. This will bind them to the first counter.

Set the left one 2 and enable multiply. This tells the game to double the number.

Set the right one to -1.

Both triggers should be spawn trigger and multi trigger.

Select both, then go to Edit Group and assign group 1.

When a spawn trigger is activated…

Both pickup triggers will activate in order.

{{< /callout >}}

Congratulations, you have just made your first function in the game!

## Making it proper

The attentive among you might have noticed that I’m modifying the input and might be yelling at me for creating so-called “side effects.” In real life, functions do not produce an output by writing on top of the input. This is why I instructed you to make two variables rather than one, such that the second one can serve as our function’s output.

Let’s revisit our workflow and improve on it a bit.

1. Copy input to output
2. Multiply output by 2
3. Subtract output by 1

The latter two steps are exactly the same as our previous one, but the first one is different. Up to now we’ve only ever added raw numbers, not other variables. Unfortunately, our Pickup trigger cannot accomplish such a task, so I will introduce you to a new trigger, Item Edit.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

You can find more information about this trigger in [Item Edit, Comp, & Pers](/docs/guides/triggers-1/item-edit-comp-pers/) guide.

{{< /callout >}}

Observe closely.

{{< callout context="success" title="1. Variable" title="6. Proper Function" icon="outline/movie" >}}

Place down an item edit trigger.

Set ItemID1 to 1 and enable Item. Our input is Variable 1, or `I1`.

Set Target ItemID to 2 and enable Item. Our output is Variable 2, or `I2`.

Set Mod to `2.000`. We are multiplying the input by 2.

Don’t forget to enable Spawn Trigger and Multi Trigger!

Grant this object group 3.

Now, whenever group 3 is activated, the output `I2` becomes the input `I1`, doubled.

`I2 = I1 · 2.000` This frame shows you what operation is being done.

Place down another item edit trigger.

Set Target ItemID to 2 and enable Item.

Set the first operation button to `-`.

This will subtract the Mod (`1.000`) from the output `I2`.

*Spawn + Multi + Group 3*

`I2 = I2 - 1.000` From now on, only this section is shown for this trigger.

{{< /callout >}}

With this, you now have a proper function, the output is now one less than double the input, and the input stays intact, matching up with how actual functions work.

## Understanding Integer & Float Numbers

The item edit trigger has quite a lot of buttons, and I mean it! This is because Geometry Dash offers multiple **kinds** of numbers. The main two we'll be looking at for this guide are **ItemIDs** (for whole numbers) and **TimerIDs** (for decimals)

### TL;DR - Numbers in Geometry Dash

I have sorted the main properties of each kind of ID on a table, as well as some triggers that interact with them.

|              | ItemID                                     | TimerID                       |
|--------------|--------------------------------------------|-------------------------------|
| **Values**   | Whole numbers (e.g. $342$)                 | Decimals (e.g. $3.42$)        |
| **Lowest**   | $-2,147,483,648$                           | $-9,999,999.00$               |
| **Highest**  | $2,147,483,647$ (Displayed as `999999999`) | $9,999,999.00$                |
| **Triggers** | Pickup, Count, Item Edit, Item Compare     | Time, Item Edit, Item Compare |

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

The following two sections will go into a **lot** of detail about how numbers work, and I mean it!

You are not required to understand how numbers are stored in Geometry Dash to follow along the guide, so these sections can be freely skipped!

{{< /callout >}}

### Whole numbers (a.k.a.) Integers

The letter `I` here stands for "Item," or a number to count items, this is typically done with **whole numbers**.

In theory, numbers can extend out and up to infinity, and some games do make use of really large numbers. However, most computer programs only need to work with numbers within a certain range. This is where we see the distinction between 32-bit and 64-bit values come into play.

When looking at numbers, you can see the individual digits that compose them, as well as how much they contribute. For example, the hundreds digit shows how much of a multiple of 100 is needed for this number.

{{< callout context="note" icon="outline/photo" >}}

Kelly in front of a row of 0, 100, 200, …, 900

{{< /callout >}}

Let's take our example: 158. It has three digits, 1 hundred, 5 tens and 8 ones. From a mathematical perspective:

$$ 158 = 100 + 50 + 8 $$

{{< callout context="note" icon="outline/photo" >}}

Kelly tapping digits 1, 5 and 8.

{{< /callout >}}

Computers do indeed store numbers in a very similar fashion. That said you'll probably know that under the hood they never work with decimal values directly, but in "bits and bytes" or "binary."

I know the idea of bits might sound scary at first, but one of the special things about it is how simple it really is. Each bit is presented as a yes-no choice: chicken or egg, live wire or neutral wire, to add 64 or not to, zero or one, that’s it.

{{< callout context="note" icon="outline/photo" >}}

To peanut or not to peanut (Kelly in peanut shape)

{{< /callout >}}

To illustrate an example, let’s take our 158 again and run it through my curated set of yes-no questions:

1. Is 158… larger than or equal to 256? No! ❎
2. Is 158… larger than or equal to 128? Yes! ✅ 158 - 128 = 30
3. Is 30… larger than or equal to 64? No! ❎
4. Is 30… larger than or equal to 32? No! ❎
5. Is 30… larger than or equal to 16? Yes! ✅ 30 - 16 = 14
6. Is 14… larger than or equal to 8? Yes! ✅ 14 - 8 = 6
7. Is 6… larger than or equal to 4? Yes! ✅ 6 - 4 = 2
8. Is 2… larger than or equal to 2? Yes! ✅ 2 - 2 = 0
9. Is 0… larger than or equal to 1? No! ❎

This is interesting in a few ways. Each question is always double the one after it, 32 is 16 twice, 128 is 64 twice, so on and so forth. However, you can start trying out the numbers immediately after it: 159, 160, etc. What you’ll see is that they all eventually reach 0 in some way or another, meaning that if you add up all the values to the “Yes!” responses, you get back to the original number.

$$ 158 = 128 + 16 + 8 + 4 + 2 $$

The “yes-no” responses act as digits for the number’s binary representation. In this case, we can write down 158 in binary as `010011110`.

Much like how numbers are unique in decimal, they also have unique representations in binary. In a way, all “yes-no” sequences are exclusive to one number.

{{< callout context="note" icon="outline/photo" >}}

It’s like a Rorschach test for numbers! Don’t you think?

{{< /callout >}}

All numbers below 500 can be broken down into a sum with only these 9 numbers, and they either appear once (Yes) or not at all (No). This is what's known as a **9-bit number**.

As stated earlier, a computer generally deals with 32 or 64 bits, meaning they have 32 or 64 of these yes-no questions, and they have very long strings of `0`s and `1`s!

$$ 387420489_{10} = 00010111000101111001000101001001_2 $$

The maximum that a 32 bit number can hold is the number $1$, doubled 32 times, which amounts to $4,294,967,296$ (a huge number!), but since computers also need to store the number $0$, the actual cap is bumped down to $4,294,967,295$.

Additionally, they might also need to store negative numbers in equal capacity, so the leading bit is typically reserved for a different yes-no question:

> Is this number negative?

The idea is that if the answer is no (meaning that it's a positive number), nothing happens. If the answer is yes (negative), then the actual number is **subtracted by** $\mathbf{4,294,967,296}$, ensuring that it stays negative. This is what's known as the **sign bit**.

This clamps our range of numbers between $-2,147,483,648$ and $2,147,483,647$, and this is exactly the range of item counters in Geometry Dash. You might see that the number seemingly stops increasing past $999,999,999$; this is only a visual quirk and does not affect the actual number value.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

I'll spare you most of the details of 64-bit values, since
- They aren't needed for the vast majority of setups
- They lack out of the box implementaions, so you'll have to implement one yourself.

As they have double the bits, two item counters can do the trick. And similar to how 32-bit numbers operate, they have a hard range that goes from $-9,223,372,036,854,775,808$ to $9,223,372,036,854,775,807$.

{{< /callout >}}

### Decimals and floating-point values

Whole numbers have one bit for the sign (the sign bit) and 31 for everything else... great. The problem comes when you try to put a decimal point somewhere.

If you put it right in the middle:

$$ 0001011100010111.1001000101001001_2 $$

Now, the first 16 bits become part of the whole number, while the latter 16 are used for the fraction. This binary representation corresponds with:

$$ \frac {387420489} {65536} = 5911\frac {37193} {65536} = 5911.5675201416015625 $$

By doing this, you introduce two new problems:

1. When the whole value is too small, the decimal precision might not be adequate.
2. When the whole value is too large, the decimal is effectively nothing.
3. The amount of values this number can take gets massively truncated; now your number can only range from $-32768$ up to $32767.9999...$, which is absurdly low!

{{< callout context="note" icon="outline/photo" >}}

(Kelly next to a dinosaur) Yes, this dinosaur is 66,000,006 years old!

{{< /callout >}}

Don't get me wrong, there are valid uses for this kind of decimal point placement, perhaps you need position calculations to be consistent even at large distances, or maybe you want to simplify operations.

That said, most of the time, this clean 50/50 decimal split is not needed. You might prefer going between -256 and 256 with more precision, or reach the tens of millions with less.

{{< callout context="note" icon="outline/photo" >}}

(Kelly confused in a web of binaries with floating points) Here, there, everywhere, but where?

{{< /callout >}}

Trying to remember where the decimal point is in each case is a solution, albeit not a very good one. Sometimes you want to work between big and small numbers, and a system like this fails to be flexible.

This is where you let computers memorize the decimal point for you: sacrifice 8 bits out of 31 for the decimal point (also called the "exponent"), and the remaining 24 bits (23 available, plus an implicit leading `1`) can be the raw number (the "mantissa").

{{< callout context="note" icon="outline/photo" >}}

(Diagram of IEEE 754 single-precision float)

{{< /callout >}}

This means a floating point technically consists of two numbers, one to locate the decimal point, and the other to represent the raw number.

There are 24 bits in the mantissa, which means we can expect about 6 to 7 significant digits of precision. This is more than enough for what we need... hopefully... I think.

{{< callout context="caution" title="Note: How GD stores decimals under the hood" icon="outline/info-circle" >}}

The method Geometry Dash (as well as a lot of other programs) uses to store these numbers can get really complicated, you can refer to [Kahan's FPA Lecture Notes](https://people.eecs.berkeley.edu/~wkahan/ieee754status/IEEE754.PDF) for further information. That page is over 25 years old!

I will leave an example here for the curious of you.

Let's look at how to represent $\frac {503586} {262144} (\approx 1.92)$ in this format:

1. $503586_{10} = 1111010111100100010_2$.
2. The number currently only has 19 bits, we can bump it up to 24 by doubling the number 5 times, or multiplying by $32$.

$$ 503586_{10} \times 32_{10} = 16114752_{10} $$

$$ 16114752_{10} = 111101011110010001000000_2 $$

3. We can omit the leading `1`, our mantissa becomes `11101011110010001000000`.
4. The denominator must be equivalently multiplied by 32, $262144 \times 32 = 8388608$.
5. This number is also the result of doubling $1$, 23 times!
6. The decimal point always evens out at $127$, since we're halving the mantissa 23 times, the exclssed exponent is $127_{10} - 23_{10} = 104_{10}$.
7. $104_{10} = 1101000_{2}$. Our exponent is `01101000`.
8. The sign bit is `0` since the number is positive.
9. Combining it all into a single representation

`0 01101000 11101011110010001000000`

This is how Geometry Dash internally stores the number as a TimerID.

{{< /callout >}}

Numbers lose precision as they get bigger in magnitude, TimerIDs like all other floats can only theoretically store second-accurate time up to `16,777,216.00` before it starts "skipping" (or counting by twos).

The Item Edit trigger sets a soft limit for what timer values it can output, between `-9,999,999.00` and `9,999,999.00`. You may want to consider storing the exponent on a separate ItemID variable to avoid reaching the cap.

{{< callout context="note" icon="outline/photo" >}}

(Derp mechanic Kelly sitting in a maintenance room) If you can't handle big jumpy timers, might as well bump it down to some arbitrary maximum...

{{< /callout >}}

# 2. Numerical IDs as trigger values

{{< callout context="note" icon="outline/photo" >}}

(Kelly points up like Plato) I, the wise man…

{{< /callout >}}

One problem you’ll see frequently with move triggers is that they only allow you to type in hard-coded values, no variables - how terrible!

For simple uses this is not a problem, as you can always place more triggers as you need, but if we wanted to warp the distance dynamically over time, the manual way can get clunky and messy and may not even cover all the cases we need.

This is possible, though you will need more than one of these triggers, as well as a dedicated setup to go with it.

## Basic IDs to Values Conversion

Here’s a problem: You are making a background such that it changes color based on the number of times you click during the transition.

{{< callout context="success" title="7. ID To Value Mechanic" icon="outline/movie" >}}

(You clicked 5 times, blue)

(You clicked 2 times, orange)

(You clicked 3 times, yellow)

{{< /callout >}}

The idea is that for every distinct value, you assign to it a particular color, 1 for red, 2 for orange, 5 for blue. To pull this off, you need a series of conditions: If 1, show red; If 2, show orange. This is achievable with the item compare trigger.

{{< callout context="success" title="8. ID To Value Impl Module 1" icon="outline/movie" >}}

Place down an item compare trigger.

Set ItemID1 to 1 and enable Item.

The left hand side should be Variable 1.

Set Mod2 to 1.

The right hand side should be the number 1.

Set TrueID to 6.

*Spawn + Multi + Group 4*

Now, place a color trigger.

It changes the background to red.

Also enable Spawn Trigger and Multi Trigger for this one!

This object should be assigned group 6.

Finally, place a spawn trigger somewhere.

It spawns group 4.

{{< /callout >}}

Now, if you click once, the background will change to red.

We can use the same logic for the other colors. Let’s say you want the background to be orange if you click twice. The steps are almost the same as above. Just change up a few things.

{{< callout context="success" title="9. ID To Value Impl Module 2" icon="outline/movie" >}}

Place down an item compare trigger next to your first one.

Set ItemID1 to 1 and enable Item.

Set Mod2 to 2.

Set TrueID to 7.

Don’t forget to enable Spawn Trigger and Multi Trigger!

Grant this object group 4.

Now, place a color trigger.

It changes the background to orange.

Also enable Spawn Trigger and Multi Trigger for this one!

This object should be assigned group 7.

{{< /callout >}}

Now, pressing once corresponds to red, and pressing twice corresponds to orange.

{{< callout context="note" icon="outline/photo" >}}

Let’s do this for every color on the rainbow!

{{< /callout >}}

You can use this idea to switch between different “modes” that an operation can have, and this setup is compatible with all triggers, not just color selection.

## ID Conversion for Stackable Triggers

The previous section has already demonstrated how you may switch between different, distinct modes. This allows you select between a predetermined set of options: Choose 1 to move 232, 2 to move 451, 3 to move 506, the rest is upon you.

However, there are some cases where you want your number value to directly correspond to the amount of movements. Setting the number to 451 should cause the object to move 451 units. While it is tempting to invent a new TrueID and move trigger for every single number possible, this setup becomes messy when the amount of possible inputs becomes arbitrarily large.

{{< callout context="note" icon="outline/photo" >}}

(Kelly gets hit by a row of item compare triggers) Ouch!

{{< /callout >}}

Luckily, move triggers can have their effects **stacked**, meaning two move triggers running at the same time will produce the combined distance. This allows us to combine the effects of multiple move triggers as if they were a single one.

Let’s focus on the “Move X” for the Move trigger. Suppose, you want the object to move 648 blocks to the right. How would you do that?

Your first instinct could be to split these numbers into digits, and then move them said digits. However, making one condition for every tens from `10`, `20` all the way to `90`, takes up a lot of triggers and GroupIDs that could be better used for something else.

There's already a better method discussed previously, which is looking at it, how computers interpret it: binary!

{{< callout context="tip" title="Further Reading: Binary Stacking" icon="outline/book" >}}

A detailed explanation about how this works can be found in [Binary Stacking](/docs/guides/triggers-2/stacking-properties/#4-binary-stacking) section of the Stacking Properties guide. I will only go through a basic example to illustrate how it can be applied.

{{< /callout >}}

We're moving objects within 1000 units, so all that's needed is 10 bits. Let’s see how you can make use of this:

{{< callout context="success" title="10. Stackable ID Impl Module 1" icon="outline/movie" >}}

Look at how far your object should move.

Keep numbers small and easy.

> 1   2    4    8    16    32    64    128    256    512    1024    2048

Then, in this doubling sequence, find the number that’s “just smaller” than the maximum.

512 is “just smaller” than 1000, and 1024 is too big.

Place down an Item Compare trigger.

Set ItemID1 to 1 and enable Item.

Set Mod2 to 512.

Change the comparison mode to “>=”.

Set TrueID to 11.

If the answer is “Yes”, group 11 is run.

Otherwise, nothing happens.

Don’t forget to enable Spawn Trigger and Multi Trigger!

Go to Edit Group, then grant this object group 5.

Place down a move trigger and a pickup trigger.

The move trigger moves 512 units to the right.

The pickup trigger should subtract 512 from the total.

Set both to spawn and multi trigger, then, add group 11 to both.

Now, whenever group 5 is activated, it will activate the comparison.

{{< /callout >}}

This is effectively your first yes-no question: “Is this number larger than or equal to 512?” If the answer is yes, you subtract 512 and then move 512 units.

The other yes-no questions can be done in exactly the same way:

{{< callout context="success" title="11. Stackable ID Impl Module 2" icon="outline/movie" >}}

Place a second Item Compare trigger…

This time set Mod2 to 256.

Set TrueID to 12.

Make sure these options are present.

The second move trigger moves 256 units.

The pickup trigger subtracts 256.

Set both to group 12.

Now, group 5 will ask two yes-no questions.

{{< /callout >}}

The process can be repeated for smaller numbers down the list. The third question, 128. The sixth question, 16. The tenth and last question, 1. Once you’re done with them, the units moved by the move trigger will invariably collect towards the total, and your ItemID will be drained to a perfect 0.

{{< callout context="note" icon="outline/photo" >}}

The completed line setup with annotations and numbers from 256 down to 1

{{< /callout >}}

This is the bread and butter setup that converts IDs into trigger values. From here, we can add, modify, and optimize some aspects about it to improve it.

## Ratios

Sometimes it may not be desirable to move units exactly as indicated by IDs, but perhaps for larger chunks. This is doable in two ways:

1. Scale your inputs before feeding into the yes-no chain
2. Make all your move triggers... move more

A combination of these two will be useful for certain conversion setups. I will mainly demonstrate the use of ratios with the first method.

{{< callout context="note" icon="outline/photo" >}}

(A thorn monster with an arrow pointing to the space 3 grid units right)

{{< /callout >}}

Suppose you want to move an object 3 grid blocks to the right. Since 1 block is 10 move units, moving 3 grid blocks just means moving 30 move units. This just means you multiply the input number by 10.

{{< callout context="note" icon="outline/photo" >}}

`I1 = I1 · 10.000`.

{{< /callout >}}

## Precision

If you look closely at the Rotate trigger, you might have noticed that the "rotate" trigger accepts decimal inputs. This is a problem since most of the values you've worked with only accept whole numbers. Oh no!

Luckily, there's a way to fix this. Instead of making 1 correspond to $1^{\circ}$, we can make it so that it only moves $0.1^{\circ}$. We would now need to input 10 for it to rotate the same $1^{\circ}$ as before. This is the second method, moving (or rotating) less for every input.

Combined with the first method, this gives us a way to input decimal values and get decimal-value rotations.

{{< callout context="success" title="12. Precision Rotation" icon="outline/movie" >}}

T:1=35.5

Degrees: `0.10`

Degrees: `0.20`

Degrees: `0.40`

Degrees: `0.80`

Degrees: `1.60`

Degrees: `3.20`

Degrees: `6.40`

Degrees: `12.80`

Degrees: `25.60`

Degrees: `51.20`

Degrees: `102.40`

Degrees: `204.80`

These are our doubling values...

`T1 = T1 · 10.000`

Our input rotates 355 units, or 35.5 degrees.

▶️

Double-check the provided rotation.

{{< /callout >}}

One other potential use case for more granular control over movement involves using the "Small Step" option in the move trigger

{{< callout context="tip" title="Small Step" icon="outline/edit" >}}

Quoting from the [Move & Rotate](/docs/guides/triggers-1/move-rotate/#1-move-trigger) guide:

> Enabling **Small Step** will make your input values three times smaller, so inputting “+30” into the X input will move your object 1 block to the right instead of 3.

{{< /callout >}}

This allows us to increase our movement precision by a factor of 3. Here is how it works:

{{< callout context="success" title="13. Precision Movement" icon="outline/movie" >}}

T:1=4.68

Move X: `1`

Move X: `2`

Move X: `4`

Move X: `8`

Move X: `16`

Move X: `32`

Move X: `64`

Move X: `128`

Move X: `256`

Move X: `512`

Move X: `1024`

Move X: `2048`

These are our doubling values...

`T1 = T1 · 30.000`

Our input moves 139 small units, or 46.33 large units.

▶️

Double-check the provided movement.

{{< /callout >}}

These changes will allow our setup to convert numerical IDs into trigger values however we want, with the most precision the game allows. We will now cover one of the most interesting applications that using IDs as trigger values has.

## Coordinate Systems

Coordinates operate on one simple basis: Every pixel on your screen has two numbers that intuitively tell where it is.

There are two main methods to describe position, both implemented by GD triggers:

1. **Cartesian:** Move a distance across (X), and another up and down (Y). This is how Niko moves in [OneShot](https://store.steampowered.com/app/420530/OneShot/).
2. **Polar:** Look at somewhere (θ), then move in that direction (r). This is common with 3D first-person games such as [Left 4 Dead 2](https://store.steampowered.com/app/550/Left_4_Dead_2/).

{{< callout context="note" icon="outline/photo" >}}

Illustration for Cartesian + Polar

{{< /callout >}}

All levels have an internal coordinate system, and it is shared by all triggers. For example, the Move trigger moves an object relative to this coordinate system, and the Rotate trigger also takes this system into account for rotations of multiple objects.

However, there is one big caveat: you can't directly read the position of any level object, only change it and guess where it might be. Oh no!

{{< callout context="note" icon="outline/photo" >}}

I don't think, therefore, I don't am. (Kelly brain empty)

{{< /callout >}}

Nevertheless this is not the end of the world when it comes to implementing coordinates. You can set an object to be an aribitrary origin, and then track/reposition other objects relative to it via two ItemIDs.

### Tracking the player

The idea is that every time the player moves, you update its position to where it currently is. If the player moves 15 units up, you add 15 to its Y-position counter.

This is acheived through four collision sensors on four sides, as well as a player collider. Each time the player collides with one of the sensors, the sensors move one unit to readjust to the player.

{{< callout context="success" title="14. Player Coordinates" icon="outline/movie" >}}

C:1=50 C:2=5

The player starts at $(50, 5)$.

Place a player collider. Enable dynamic block.

Place four collisions 1-4.

Space them apart from the player collider 1 purple unit.

Make a TPS loop *Group 5*

Place an instant collision trigger.

Check if the player collider `11` touches the top sensor `1`.

If true, move the sensor up 1 unit and update position.

Enable Silent on move trigger to avoid bugs.

Do the same for the other 3 sensors.

*Spawn + Multi + Group 5*

▶️

The player's position can now be tracked with ItemIDs.

{{< /callout >}}

As you can see, this system is actually quite versatile! For one, the player collider can track other things than the player. Sensors can also be placed further apart for less precision.

The frequency of this check means that the player collider never escapes the sensors, even at 4x mini wave. Escaping only becomes a problem when measurements become more precise or the loop runs less frequently.

{{< callout context="note" icon="outline/photo" >}}

Kelly caging a random player.

{{< /callout >}}

### Repositioning objects

We have taken a look at how ID conversion works when moving objects. One chain moves in one direction, so two of them will move in both directions!

Normally, the object will start moving from its current position. To position the object relative to an origin, you can prefix the movement by relocating to the origin object.

{{< callout context="success" title="15. Repositioning Objects" icon="outline/movie" >}}

(A move trigger, then two ID conversion chains)

First, move an object to the origin.

Then, move up (+Y) and right(+X).

▶️

{{< /callout >}}

The example above makes use of one more trick, and that is the sign check! Our movement currently uses 10 bits (10 yes-no questions), meaning we may reserve one of the bits for moving in the opposite direction, leaving the other 9 for the amount.

Because we set the "512" to be negative, our movement range now covers values from $-512$ to $511$. The number is also added by 512 to remove the sign and process the remaining positive bits.

## Using IDs as Spawn Delays

{{< callout context="tip" title="Further Reading: TPS Loops" icon="outline/book" >}}

The main idea behind spawn delays involves creating a [TPS Loop](making-loops/#5-tps-loop), provided in the Making Loops guide.

{{< /callout >}}

The game runs triggers at a constant rate of 240 times within a second, or 240 tps, so a TPS loop will run exactly 240 times in a second.

The method used to create and break the TPS loop will be slightly different in this guide, as we'll be using ItemIDs rather than collision boxes. The core idea should remain the same.

I will make use of an example that pulses the background yelllow after 3.5 seconds, it's my favorite color after all!

{{< callout context="success" title="16. ID As Spawn Delay" icon="outline/movie" >}}
T:1=3.5 (Input in seconds) C:2 (Ticks)

Our input will be provided in seconds.

The number of ticks is multiplied by 240.

`I2 = RND(T1 · 240.000)`

Place a spawn trigger.

Set its delay to a very small number, `0.0001`.

*Spawn + Multi + Group 2*

GID 2 executes when there is still delay.

In that case, decrease the tick by 1. `I2 = I2 - 1.000`

Place a pulse trigger. Pulse it yellow.

*Spawn + Group 3*

To the left of it, place an item compare trigger

It functions as the initial comparison.

`I2 == 0.000`

If there are remaining ticks, call the spawn trigger. → GID 2

If there are none, call the pulse trigger. ↳ GID 3

{{< /callout >}}

Similar to the collision example, this example sets up a loop that self-activates every single tick, only now we have introduced a different break condition involving an ItemID. Think of it like an hourglass: You flip it to start the timer (adding ticks), and it ends once the sand runs out (there are no more ticks).

{{< callout context="note" icon="outline/photo" >}}

If each tick is a grain of sand, how long will they last? (Kelly watching an hourglass)

{{< /callout >}}

{{< callout context="tip" title="Second vs tick delays" icon="outline/book" >}}

A 0.0001s spawn loop by itself fails after 2 iterations. This is because spawn triggers are **second-accurate**. More information can be found in the [Spawn](/docs/guides/triggers-1/spawn/) trigger guide.

Placing an item compare trigger allows the spawn trigger to adjust its second delay and align itself onto game ticks.

{{< /callout >}}

# 3. Computing Math Functions

So far we have found a way to use numbers and transform them into values that triggers can use. We could theoretically use any math function to use numbers in interesting ways that would allow us to create more advanced setups, however in GD we can only do math with addition and multiplication of numbers and IDs, using the item edit trigger. Even so, these are enough tools to reproduce most useful functions, via approximation methods. We will see what methods we can use, and how to compute them efficiently.

{{< callout context="note" icon="outline/photo" >}}

Kelly holding a wrench and a screwdriver.

{{< /callout >}}

## Polynomials

### A number, times itself

Remember last time? You made a function that doubles the input, subtracts 1 from it, and writes it to the output. This is one of the simplest kinds of functions you can encounter, and a function that does this is **linear**, meaning that it is somehow related to lines.

{{< callout context="note" icon="outline/photo" >}}

This is your line! (Kelly holding a bar slanted $2:1$)

{{< /callout >}}

In mathematical notation, our function would be written as $p(x) = 2 \times x + (- 1)$. Specifically,

- $x$ is our input number `I1`
- $p(x)$ is our output `I2`
- $2$ is the number we multiply
- $- 1$ is the extra number we add

Together, this means that we take our input number $x$, multiply it by $2$, add $-1$ and then give the result as an output.

Usually we omit the multiplication sign (×), so our function is written as $p(x) = 2x-1$.

{{< callout context="note" icon="outline/photo" >}}

What does this function do? ($4x+9$)

{{< /callout >}}

This is the point where I need to introduce you to the concept of multiplying a number by itself. This is simple to pull off in Geometry Dash on its own, only requiring an item edit trigger.

{{< callout context="note" icon="outline/photo" >}}

This is how you do it! (`T2 = T1 · T1`)

{{< /callout >}}

If you pay close attention, the mod slider is also used in the multiplication. If you set it to a value other than 1, the right hand side gets multiplied by the mod.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

In reality, this extra number is known as a coefficient. However I will be consistent with game terminology for this guide by using “mod.”

{{< /callout >}}

By setting the mod to `3.000`, the operation now reads `T2 = T1 · T1 · 3.000`, meaning that the output multiplies the input by itself, and then multiplies it by 3.

In mathematical notation, this is referred to as $p(x) = x \times x \times 3$. Since we multiply the input (`T1` or $x$) two times, we can simplify the exclssion to $p(x) = 3x^2$.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

For any whole number $x$, the function $p(x) = x^2$ produces a square number, therefore we refer to $x^2$ as “$x$ squared.”

The exclssion $x^7$ would be called "$x$ to the power of $7$," and the corner number is known as the **power**. The power can be any number, like $8$, $15$ or $22$.

{{< /callout >}}

A full quadratic function is a sum of three things:

1. The input multiplied by itself, then by some number: `T3 = T1 · T1 · 4.000`
2. The input multiplied by some number: `T4 = T1 · 12.000`
3. A loose number: `T5 = 9.000`

I’ll give an example by constructing $p(x) = 4x^2 + 12x + 9$, our output `I2` will be a sum of the three above variables:

{{< callout context="success" title="17. Polynomial 1" icon="outline/movie" >}}

T:1=5.00 T:2 T:3 T:4 T:5

`T3 = T1 · T1 · 4.000`

`T4 = T1 · 12.000`

`T5 = 9.000`

One item trigger can handle up to 2 variables

To add 3 variables, we use two item triggers.

`T2 = T3 + T4`

`T2 = T2 + T5`

▶️

Double-check the provided values.

{{< /callout >}}

### Constructing the polynomial

Let’s finish off this group of functions with my ultimate final boss:

$$
f(x) = 24 x^8 - 68 x^7 - 154 x^6 + 421 x^5 + 209 x^4 - 629 x^3 + 101 x^2 + 132 x -36
$$

I am deeply sorry if this looks intimidating to you. It is not that hard once you start getting around it.

What is $x^8$? Easy, that’s $x \times x \times x \times x \times x \times x \times x \times x$, it is multiplied 8 times in total.

It is tempting to calculate $x^8$ right away and put it on a variable like last time. However, you’d later have to recalculate $x^7$ and then $x^6$ from the ground up, which incurs a lot of repeated calculations.

{{< callout context="note" icon="outline/photo" >}}

Kelly hit by $x^8$

{{< /callout >}}

There is an easier way to do this. First, observe what happens when I multiply $x^2$ by $x$:

$$
x^2 \times x = x \times x \times x = x^3
$$

By multiplying the polynomial by $x$, we have effectively made it one power higher! You may have noticed that I’m working through the function from the lowest to the highest power, and you’ll be correct for that.

The idea behind this is you have an extra “accumulator” variable, it increases from $x^0, x^1, x^2, \ldots$ all the way to $x^8$. The output then appends this accumulator multiplied by a mod.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

$x^0$ is **always** equal to 1.

$x^1$ is **always** equal to $x$.

{{< /callout >}}

Let’s take a look at the first step.

{{< callout context="success" title="18. Polynomial 2 Part 1" icon="outline/movie" >}}

We will assume `T1` as our input.

`T2 = 0.000`

Set `T2` as your output.

`T3 = 1.000`

Set `T3` as your $x$ accumulator.

It starts at $x^0 = 1$.

`T2 = T2 + T3 · -36.000`

This is our first term.

{{< /callout >}}

In the first step, the term $-36$ (or $-36x^0$) is added to the total. Our timer variable 2 now has a value of -36.

{{< callout context="success" title="19. Polynomial 2 Part 2" icon="outline/movie" >}}

`T3 = T3 · T1`

The `T3` variable now contains $x^1$.

`T2 = T2 + T3 · 132`

{{< /callout >}}

Our second step calculates $136x$ and adds it to the output total.

{{< callout context="success" title="20. Polynomial 2 Part 3" icon="outline/movie" >}}

`T3 = T3 · T1`

The `T3` variable now contains $x^2$.

`T2 = T2 + T3 · 101`

{{< /callout >}}

Our third step calculates $101x^2$ and adds it to the output total.

{{< callout context="note" icon="outline/photo" >}}

`T3 = T3 · T1` $x^3$

`T2 = T2 + T3 · -629.000`

`T3 = T3 · T1` $x^4$

`T2 = T2 + T3 · 209.000`

`T3 = T3 · T1` $x^5$

`T2 = T2 + T3 · 421.000`

`T3 = T3 · T1` $x^6$

`T2 = T2 + T3 · -154.000`

`T3 = T3 · T1` $x^7$

`T2 = T2 + T3 · -68.000`

`T3 = T3 · T1` $x^8$

`T2 = T2 + T3 · 24.000`

{{< /callout >}}

Here’s a video to demonstrate the function that we’ve made

{{< callout context="success" title="21. Polynomial 2 Demo" icon="outline/movie" >}}

T:2 =

{{< /callout >}}

You will see that with this iterative method you can easily tackle any power within a reasonable amount of objects and time.

### The alternative method

Watch.

{{< callout context="success" title="22. Shifting" icon="outline/movie" >}}

$24 x^3 - 68 x^2 - 154 x + 421$

`T2 = T2 · T1`

$24 x^4 - 68 x^3 - 154 x^2 + 421 x$

{{< /callout >}}

The core idea behind this transformation is absurdly simple, you shift everything to one power higher.

An interesting result is that the number that comes first, will have the highest power. This means, rather than working backwards from $x^0$, we start from the highest ($x^8$) and work our way down.

Let’s look at the first two steps with this method:

{{< callout context="success" title="23. Polynomial 3 Shifting" icon="outline/movie" >}}

`T2 = 24`

Now for the second step,

`T2 = T2 · T1`

`T2 = T2 - 68`

{{< /callout >}}

The steps here are deceptively easy, just multiply by `T1` then add the mod. However, it is important that you know the underlying concept behind this method, it will be very useful once you start working with other breeds of functions.

At the final step of the chain, you only add the mod. This constant will not be multiplied by $x$.

{{< callout context="success" title="24. Polynomial 3 Demo" icon="outline/movie" >}}

...

{{< /callout >}}

## Taylor Series

{{< callout context="note" icon="outline/photo" >}}

Don’t you sweat it, baby, $x$’s alright!

{{< /callout >}}

As we know how to compute polynomials, we can move on to more complicated functions. Trying to calculate arbitrary functions is trickier because they won’t necessarily be defined by using only summation and multiplication; the exponential functions is defined as a limit, the logarithm as the inverse of the exponential, sin and cosine as the projections on the x and y plane respectively of the unit circle, and so on. We can't apply these definitions using the item edit trigger since it only allows basic operations.

Fortunately, we can work around this. Even though functions like the exponential, logarithm or sine aren't defined directly by basic arithmetic, we can *approximate* them using polynomials, and although the approximation may not be perfect, it can come extremely close to the actual result. This is the key idea behind the **Taylor series**. Given this, if we can write a complicated function as a sum of polynomial terms, then we can compute it using the methods already discussed.

From now on, we will introduce derivatives into the mix. If you’re not familiar with them, or calculus as a whole, *and* you want to understand the logic of the stuff we will use, it’s highly recommended that you watch the Essence of Calculus series by 3Blue1Brown, as it intuitively explains where do derivatives come from and why they are useful, among other stuff.

The main takeaway here is that **you do not need to actually memorize the definition** of a Taylor series, just know that a lot of the following functions you’re constructing will make use of this idea at some point.

{{< callout context="note" icon="outline/photo" >}}

These stuff just won’t come off my teeth will they? (Kelly using dental floss)

{{< /callout >}}

### The Exponential Function - $\exp(x)$

We will start with the easiest example, I’ll call it $\exp(x) = e^x$, with the number $e=2.71828...$

This function is special in that it turns addition into multiplication. Let’s sprinkle in a magic number to our input…

$$
\exp(x + 0.693) = e^{x+0.693} = e^{0.693} \times e^x = 2 \times e^x
$$

The intuition is, if we add a certain magic number $0.693$ to the input, the output doubles! The reason we chose this number is because $e^{0.693} = 2$. Similarly, if we choose the magic number to be $1.099$, you triple the result:

$$
\exp(x+1.099) = e^{1.099} \times e^x = 3 \times e^x
$$

Again, notice what this number is doing here, we have $e^{1.099} = 3$.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

In case you really want to know, the function that undoes $\exp(x)$ is the natural logarithm $\ln(x)$. This is where we get our magic numbers, $\ln(2) = 0.693$ and $\ln(3) = 1.099$.

{{< /callout >}}

The way we construct $\exp(x)$ is from the following Taylor expansion (memorize - it's simple!)

$$
\exp(x) = \frac {x^0} {0!} + \frac {x^1} {1!} + \frac {x^2} {2!} + \frac {x^3} {3!} + \frac {x^4} {4!} + \cdots
$$

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

You might already be familiar with the $!$ symbol, this is the factorial function where you multiply every whole number up to itself!

$$ 0! = 1 $$

$$ 4! = 4 \times 3 \times 2 \times 1 = 24 $$

$$ 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 $$

{{< /callout >}}

You might have noticed that $4 \times 3 \times 2 \times 1$ also seems to appear in $5!$, which means:

$$ 5! = 5 \times 4 \times 3 \times 2 \times 1 = 5
 \times 4! $$

This is important as we will rely on this knowledge to build up our sum. We can look at this transformation as follows:

$$ \frac {x^5} {5!} = \frac {x^4 \times x} {4! \times 5} = \frac {x^4} {4!} \times \frac x 5 $$

What you'll see is that our current term $\frac {x^5} {5!}$ is just our previous term $\frac {x^4} {4!}$, multiplied by an additional $\frac x 5$.

The intuition follows that you have a variable that keeps track of the multiplied inputs ($x^4$), maybe called `T3`, and another variable `I4` to keep track of the factorial ($5!$), probably one more `I5` to keep track of the next number to multiply for said factorial.

{{< callout context="success" title="25. Exponential Loop" icon="outline/movie" >}}

`I5 = I5 + 1.000`

`I4 = I4 · I5`

`T3 = T3 · T1`

Now, add the fraction to the total

`T2 = T2 + T3 / I4`

*Spawn + Multi + Group*

{{< /callout >}}

You might have noticed that we can repeat this process for as much as we want. We can package this into a spawn sequence and then call it multiple times:

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

You can learn more about zero-tick mechanisms in the [Loop Unrolling](/docs/guides/triggers-2/making-functions/#loop-unrolling) section of the Making Functions guide.

{{< /callout >}}

So far we're 80% of the way there, however we're still missing one important piece - the first step!

There, we will initialize the stuff required to run the loop correctly, namely the output and the extra variables.

{{< callout context="success" title="26. Exponential Setup" icon="outline/movie" >}}

`T2 = 1.000`

Our first term is $\frac {x^0} {0!} = 1$.

`T3 = 1.000` $x^0 = 1$

`I4 = 1.000` $0! = 1$

`I5 = 0.000`

When the loop runs, this will be incremented. $1! = 1 \times 0!$

*Spawn + Multi + Group*

{{< /callout >}}

Great job! You have just made your first complicated function!

You'll notice that each repeat produces smaller and smaller differences to the output, but the numerator `T3` stays positive. Theoretically, the sum goes on forever without an ending, and it would seem quite daunting to add up all of the infinitely many terms.

In reality, Timer IDs can only store numbers up to a certain number of decimal places. Eventually the denominator `I4` will get big enough that the whole fraction is effectively zero. You can safely cut this off after only a few repeats (8 would do) and get a fairly accurate answer.

{{< callout context="note" icon="outline/photo" >}}

(Kelly blowing a balloon)

{{< /callout >}}

That said, there is one slight problem with this: if you repeat the loop 13 or more times, the output value suddenly becomes pretty much useless.

The problem arises when the game tries to compute $13!$, because it evaluates to $6,227,020,800$, which is almost three times the counter limit!

Factorials are known to grow in size absurdly quickly. That said, this is a rather simple fix. Instead of calculating $x^4$ and $4!$ separately, we can combine those into a single variable `T3` that tracks the whole fraction. Here's the reworked version of our repeat code:

{{< callout context="success" title="27. Exponential Loop Rework" icon="outline/movie" >}}

`I5 = I5 + 1.000`

`T3 = T3 · T1`

`T3 = T3 / I5`

Now, add the fraction to the total

`T2 = T2 + T3`

*Spawn + Multi + Group*

{{< /callout >}}

We will see that the more we run this, the closer `T3` approaches zero. Since factorials are already baked in the term, we no longer have to worry about number limits. This means we can finally go past 13 repeats and get eerily close to the actual value! Amazing!

## Periodic Functions

You might know a thing or two about rotations, the observation at hand here is that when a wheel rotates 360°, it makes a full turn. Turning a wheel 15° produces the same result as turning it 375°.

{{< callout context="note" icon="outline/photo" >}}

(Kelly spinning a disc upright)

{{< /callout >}}

If you've used the Rotate trigger before, you will know what the "x360" option does, leaving the resulting rotation intact while adding one or two additional twists in the process:

{{< callout context="success" title="28. Periodic Rotation" icon="outline/movie" >}}

Degrees: `60`
x360: `0`

Degrees: `60`
x360: `1`

▶️

Both objects end up the same...

...but one does an extra spin!

{{< /callout >}}

This is the core idea behind periodic functions: those that cycle over one pattern, over and over again. You will see yourself using them from time to time when dealing with motion, so do keep this in mind.

### Sine and cosine - $\sin(x), \cos(x)$

Try to focus on the up-down motion of that red dot: it goes up, smootly glides over the top, goes down, glides over the bottom, then back up. This motion generates a wavy pattern that is extremely satisfying to watch!

{{< callout context="note" icon="outline/photo" >}}

Illustration of a point on a circle tracing out the sine and cosine functions

{{< /callout >}}

Notice how the blue function has a pattern that repeats forever, that's our periodic function! Let's call this one the sine or $\sin(x)$, since it moves like the "Sine In Out" easing option.

{{< callout context="note" icon="outline/photo" >}}

Just like a swing! (Swing moving up and down with dashed trails)

{{< /callout >}}

You might have noticed another of the same wave that goes up, it traces out basically the same path! That's our sine's cousin function! We'll call it the co-sine, since it's a **co**usin of **sine** (get it?); or $\cos(x)$ for short. It's always ahead of the regular sine by a right angle, this is where we get the relation:

$$\cos(x) = \sin(x + 90^{\circ})$$

These two functions are the bread and butter for all things periodic, we will use them a lot moving on!

{{< callout context="caution" title="Degrees and Radians" icon="outline/info-circle" >}}

Normally, you'll be taught the definition of sine and cosine involving angles in **degrees** (°). However, most computer programs, including Geometry Dash, will involve calculations with **radians**.

Radians are special in that they make angles act like arc lengths:
- An arc length of $\frac {\pi} 2$ is a quarter of the circumference $2\pi$, covering an angle of $90^{\circ}$.
- An arc length of $\frac {\pi} 3$ is a sixth of the circumference $2\pi$, covering an angle of $60^{\circ}$.

For this guide, we will assume that **units are given in radians**. If you have inputs in degrees, apply this conversion recipe: $1 ^{\circ} = \frac {180} {\pi}$

{{< /callout >}}

Their Taylor series are the following:

$$
\sin(x) = \frac {x^1} {1!} - \frac {x^3} {3!} + \frac {x^5} {5!} - \frac {x^7} {7!} + \frac {x^9} {9!} - \frac {x^{11}} {11!} + \cdots
$$

$$
\cos(x) = \frac {x^0} {0!} - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \frac {x^8} {8!} - \frac {x^{10}} {10!} + \cdots
$$

These two functions look quite similar, and they in fact are. The key idea is that we can use the same loop for both sine and cosine. Let's see how the terms relate:

$$ - \frac {x^{10}} {10!} = -1 \times \frac {x^2 \times x^8} {10 \times 9 \times 8!} = \frac {-1 \times x^2} {10 \times 9} \times \frac {x^8} {8!}
$$

Putting this into perspective, there are a total of five things to consider when transforming each term:

1. Multiply by $-1$
2. Multiply by $x^2$
3. Divide by $n$
4. Divide by $n+1$
5. Add to total

Let's look at how we can implement it:

{{< callout context="success" title="29. Sine + Cosine Loop" icon="outline/movie" >}}

T:6=2.40 (Input) T:7 = ??? (Output) T:8 = ??? (Term) I:9 = 5

`T8 = T8 · -1.000`

`T8 = T8 · T6 · T6`

`T8 = T8 / I9`

`I9 = I9 + 1.000` $n \to n+1$

`T8 = T8 / I9`

`T7 = T7 + T8`

`I9 = I9 + 1.000` $n+1 \to n+2$

*(Spawn + Trigger + Multi + G21)*

{{< /callout >}}

As stated earlier, both functions share the same loop. This means that they differ only by the first step. Let's take a look at both and see how they differ.

Let's first look at one for $\cos(x)$:

{{< callout context="success" title="30. Cosine Setup" icon="outline/movie" >}}

T:6=2.40 (Input) T:7 = ??? (Output) T:8 = ??? (Term) I:9 = 5

`T7 = 1.000` First term is $1$

`T8 = 1.000` First term is $1$

`I9 = 1.000` Divide by $1$ and $2$ next

*(Spawn + Trigger + Multi + G22)*

Using 5 iterations...

▶️

Can get you really close!

{{< /callout >}}

Now, for $\sin(x)$:

{{< callout context="success" title="31. Sine Setup" icon="outline/movie" >}}

T:6=2.40 (Input) T:7 = ??? (Output) T:8 = ??? (Term) I:9 = 5

`T7 = T6` First term is $x$

`T8 = T6` First term is $x$

`I9 = 2.000` Divide by $2$ and $3$ next

*(Spawn + Trigger + Multi + G23)*

Using 5 iterations again...

▶️

Is way more than enough!

{{< /callout >}}

Now that you have working sine and cosine functions, let's take a look on how to make them work for large inputs!

### Watching waves repeat

You will see that you need a lot of iterations for $\sin(666)$ to ever approach an acceptable value, and probably waste a lot of your precious computing resources.

The good thing is that periodic functions repeat themselves after a while. For sine and cosine, they repeat along lengths of $2\pi$ each.

$$ \sin(x) = \sin(x+2\pi), ~~~~ \cos(x) = \cos(x + 2\pi) $$

If you still remember how division works, there exists a quotient, and a remainder. The quotient here is irrelevant since it gets multiplied by $2\pi$ and ignored. This means that **only the remainder** is considered.

Let's construct our division scenario:

{{< callout context="success" title="32. Range Error" icon="outline/movie" >}}

T:6 (Remainder) C:10 (Quotient) T:11=24000 (Input)

`T6 = T11`

`I10 = FLR(T6 / 6.283)`

`T6 = T6 - I10 · 6.283`

*(Spawn + Trigger + Multi + G22 + G23)*

▶️

T:6=5.223

{{< /callout >}}

You might have noticed that if you find the remainder on a calculator, it will return a number around $5.223$, which is quite far off from your $4.515$.

{{< callout context="caution" title="Note: Alignment" icon="outline/info-circle" >}}

Remember, small alignment errors can lead to massive differences over large distances!

{{< /callout >}}

Fortunately, TimerIDs can store up to 6 correct decimal places. Since $\pi \approx \frac {13176795}{4194304}$, we can save this fraction into a variable:

{{< callout context="success" title="33. Fixed Pi Range" icon="outline/movie" >}}
C:12 = 13176195 C:13 = 4194304 T:314 ($\pi$) T:628 ($2\pi$)

`T314 = I12 / I13`

`T157 = T314 / 2.000`

`T628 = T314 · 2.000`

▶️

T:157=1.57 T:314=3.14 T:315=6.28

{{< /callout >}}

Now, we can try getting the remainder once again with a more accurate value of $\pi$:

{{< callout context="success" title="34. Corrected Range" icon="outline/movie" >}}

T:6 (Remainder) C:10 (Quotient) T:11=24000 (Input) T:628 ($2\pi$)

`T6 = T11`

`I10 = FLR(T6 / T628)`

`T6 = T6 - I10 · T628`

▶️

T:6=4.515

{{< /callout >}}

This value is now practically the same as our calculator's! We're still not done with it, not yet at least. Flooring the quotient will yield a number from $0$ to $2\pi$. However, our Taylor expansions are centered at $0$, so we want to shift our range of remainders to between $-\pi$ and $\pi$.

This is as simple as changing the NA-operation to `RND`; when the fractional part surpasses $0.5$, the division rounds the quotient up, causing the remainder to be negative:

{{< callout context="success" title="35. Flooring & Rounding" icon="outline/movie" >}}

T:6 (Remainder) C:10 (Quotient) T:11=24000 (Input) T:628 ($2\pi$)

`I10 = RND(T6 / T628)`

▶️

T:6=-1.769

{{< /callout >}}

We have effectively made sine and cosine reasonably accurate for all values. However, don't get too excited about that just yet, because there is one more, ad-hoc optimization for our functions.

The sine function input can be further constrained between $-\frac \pi 2$ and $\frac \pi 2$ through the trigonometric property:

$$ \sin(x) = \cos \left( x - \frac \pi 2 \right) = -\cos \left( x + \frac \pi 2 \right) $$

To implement it, we branch into two conditions: negative and positive.

{{< callout context="success" title="36. Sine Sign Branching" icon="outline/movie" >}}

`T6 >= 0.000`

If true, run the following

`T6 = T6 + T157`

Otherwise, run the following

`T6 = T6 - T157`

`T7 = NEG(T7)`

In both cases, initialize conditions for cosine, then loop.

▶️

{{< /callout >}}

Similarly, with cosine we will use the following property:

$$ \cos(x) = \sin \left( x + \frac \pi 2 \right) = -\sin \left( x - \frac \pi 2 \right) $$

Branch into two conditions: negative and positive.

{{< callout context="success" title="37. Cosine Sign Branching" icon="outline/movie" >}}

`T6 >= 0.000`

If true, run the following

`T6 = T6 - T157`

`T7 = NEG(T7)`

Otherwise, run the following

`T6 = T6 + T157`

In both cases, initialize conditions for sine, then loop.

▶️

{{< /callout >}}

This will ensure that inputs stay very close to the center $0$ and produce accurate results.

### Making everything periodic

Periodicity is not limited to the most special classes of functions, in fact you can construct any periodic function using another function as a base.

{{< callout context="note" icon="outline/photo" >}}

Kelly swimming in wavy function graph

{{< /callout >}}

I will demonstrate an example with this wavy shape function. Each section of this arc corresponds to the base function $f(x) = x^2$ between $-0.5$ and $0.5$.

There are three steps to this procedure:

1. Determine the period, or how far to go before your function repeats itself.
2. Find the remainder after **RND**-dividing by the period. It goes from negative to positive and is centered at 0.
3. Calculate the base function at that point.

Let's see how we can implement this in action:

{{< callout context="success" title="38. Arbitrary Periodic" icon="outline/movie" >}}
T:13=66.60 (Input) T:14 (Working) T:15 (Output) C:16 (Quotient)

`I16 = RND(T13)` (Division by 1 is ignored)

`T14 = T13 - I16` (Multiplication by 1 is ignored)

`T15 = T14 · T14`

▶️

T:15=0.16

{{< /callout >}}

Because the input is wrapped around the negative, the input gets transformed into $-0.4$, meaning the output is $(-0.4)^2=0.16$.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

If your base function is not centered at 0, remember to introduce offsets on both sides!

Suppose your function is centered at $5$:

- Before dividing, subtract 5 from the input. `T14 = T14 - 5.000`
- After dividing and before feeding into the base function, add 5 to shift the input back to the correct position: `T14 = T16 + 5.000`

This way, the range of inputs will be perfectly aligned onto the input range.

{{< /callout >}}

## Range Reduction

### What it is

{{< callout context="note" icon="outline/photo" >}}

(Kelly throwing a computer out of a window)

{{< /callout >}}

Before moving on, let's take one final look of making a periodic function:

1. Take a function, determine what part you want to repeat.
2. Split the input into a quotient and a remainder
3. Throw away the quotient, run the original function through the remainder

Periodic functions are special in that this quotient can be thrown away and forgotten about. This is the simplest kind of what's known as a **range reduction**.

Their ranges can be reduced due to a pure translational symmetry, $\sin(x) = \sin(x + 360^{\circ})$, this allows us to only focus on values $0^{\circ} \le x < 360^{\circ}$. There is no scaling applied here, so our quotient can effectively be ignored.

Certain functions also possess this property of repeating themselves, but the twist is that every subsequent copy is transformed by some factors. This still allows us to perform range reduction, but this time the quotient would also be taken into account.

This is evident when we look at how factors of $2$ show up in the exponentiation, and how better approximations can be done with this method.

### A second look at the exponential

Our exponential function is remarkably accurate for small inputs, but its error also grows exponentially. This is where range reduction becomes useful, it allows us to work with smaller inputs and then scale the output consistently.

We have taken a look at how exponentiation turns addition into multiplication:

$$
\exp(x + 0.693) = e^{x+0.693} = e^{0.693} \times e^x = 2 \times e^x
$$

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

$0.693$ is approximate, not exact!

You can use the fraction $\frac {1453635} {2097152}$, which is GD's best approximation of the real value.

{{< /callout >}}

From this, we can say that by adding $0.693$ to the input, we double the output. Likewise, if we subtract $0.693$, the number is halved.

The idea is that we can continue subtracting $0.693$ until the input is within a small range, then compensate for all the halving by equivalent doubling. The same goes from the negative side, add $0.693$ until the input is within range, then compensate witdh halving.

This allows us to bring our input down to a remainder between $-0.347$ and $0.347$, and a quotient pointing to a multiplier along the doubling sequence (e.g. $512, 1024$).

Let's take a look at how we might implement this:

{{< callout context="success" title="39. Exponential Input Reduction" icon="outline/movie" >}}
T:6=8.5 (Input) C:7 (Quotient) T:1 (Remainder) T:8=0.693

`T1 = T6`

`I7 = T6 / T8`

`T1 = T1 - I7 · T8`

▶️

C:7=12, T:1=0.182

{{< /callout >}}

Notice that we have turned the input into the following:

$$
e^{8.5} = e^{12 \times 0.693} \times e^{0.182} = 2^{12} \times e^{0.182}
$$

This entails two steps:

1. Calculate $e^{0.182}$ using a known method (e.g. Taylor expansion)
2. Multiply its output by $2^{12} = 4096$, the 12th doubling number.

I will assume that you have already implemented the first step in some way, it is explained earlier in this guide. To multiply with a doubling number $2^n$ based on a position, we can use the following ID conversion setup:

{{< callout context="success" title="40. Exponential Output Positive Scaling" icon="outline/movie" >}}
T:2=1.20 (Output) C:7=12 (Quotient)

`I7 >= 16.000` → `I7 = I7 - 16.000` `T2 = T2 · 65536.000`

`I7 >= 8.000` → `I7 = I7 - 8.000` `T2 = T2 · 256.000`

`I7 >= 4.000` → `I7 = I7 - 4.000` `T2 = T2 · 16.000`

`I7 >= 2.000` → `I7 = I7 - 2.000` `T2 = T2 · 4.000`

`I7 >= 1.000` → `I7 = I7 - 1.000` `T2 = T2 · 2.000`

▶️

T:2=4914.77 C:7=0

{{< /callout >}}

If the quotient `I7` turns out to be negative, the doubling numbers also continue on the negative side, generating numbers that halve every time ($0.5, 0.25, 0.125, 0.0625, etc.$)

A similar ID conversion setup can be used to handle negative values of `I7`, forcing the number back to $0$ regardless of what it currently holds:

{{< callout context="success" title="41. Exponential Output Negative Scaling" icon="outline/movie" >}}
T:2=1.20 (Output) C:7=-5 (Quotient)

`I7 <= -16.000` → `I7 = I7 + 16.000` `T2 = T2 / 65536.000`

`I7 <= -8.000` → `I7 = I7 + 8.000` `T2 = T2 / 256.000`

`I7 <= -4.000` → `I7 = I7 + 4.000` `T2 = T2 / 16.000`

`I7 <= -2.000` → `I7 = I7 + 2.000` `T2 = T2 / 4.000`

`I7 <= -1.000` → `I7 = I7 + 1.000` `T2 = T2 / 2.000`

▶️

T:2=0.04 C:7=0

{{< /callout >}}

This allows you to truncate the input range of exponentiation on both sides.

### The Natural Logarithm - $\ln(x)$

If exponents turn additions into multiplications, then logarithms do the reverse, turning multiplications back into addtions. The inverse operation of exponentiation ($e^x$) is the **natural logartihm** ($\ln(x)$).

The series expansion for $\ln(x)$ we're using is:

$$\ln(m) = 2 \cdot \left(z + \frac{z^3}{3} + \frac{z^5}{5} + \frac{z^7}{7} + \cdots \right)$$

where $z = \frac {(m - 1)} {(m + 1)}$.

This is easy enough to implement.



{{< callout context="success" title="42. Logarithm" icon="outline/movie" >}}
T:1 = 12 (Input) T:2 (Output) T:3 ($m-1$) T:4 ($z$) T:5 (${2z^k}$) C:6 ($2k + 1$)

The first step is initialization

`T4 = T1 + 1` $m - 1$

`T3 = T1 - 1` $m + 1$

`T4 = T4 - T3` $z = \frac {m-1} {m+1}$

`T5 = T4 · 2.000` (First term is $2z$)

`T2 = T5` (Add first term to the series)

`I6 = 1.000` (Denominator is currently 1)

Now, we start the loop.

`T5 = T5 · T4 · T4` ($z \to z^{k + 2}$)

`I6 = I6 + 2.000`

`T2 = T2 + T5 / C6` ($z/k \to z^{k + 2}/k+2$)

Repeat five more times.

Five loops are sufficient for inputs between $1$ and $2$.

{{< /callout >}}

Unlike with a standard Taylor series, this series converges regardless of the input. However, it only guarantees a small error between $1$ and $2$. For bigger inputs, we would either need more terms, or find a way to limit inputs to that range.

Evidently for us, range reduction can also be applied in this scenario. as stated earlier, this function produces minimal error between $1$ and $2$, so we'd like to shift our inputs into that range.

Exponents and logarithms are considered polar opposites; whereas exponentiation scales the output by a factor of 2, taking logarithms would involve scaling the input instead! What now?

{{< callout context="note" icon="outline/photo" >}}

(Illustration of exp(x) scaling kelly up, and ln(x) laying kelly sideways)

{{< /callout >}}

The scaling factors also get flipped on their head, take a look:

$$ \ln(x \times 2) = \ln(x) + \ln(2) = \ln(x) + 0.693 $$

Our old friend $0.693$ is back, say hello to it (or not).

Since the inputs are related by multiplication rather than addition, we do not split the input into the usual quotient + remainder, but rather through a technique I'll illustrate with an example:

For a number ($563$), we can keep dividing it until it goes below $2$:

$$ 563.0 \to 281.5 \to 140.75 \to 70.375 \to 35.1875 \to 17.59375 $$

$$ \to 8.796875 \to 4.3984375 \to 2.19921875 \to 1.099609375 $$

We have divided the number by a total of 9 times.

This effectively turns our input into:

$$ 563 = 1.099609375 \times 2^9 $$

We have two numbers at play here, the $9$ corner number is called the "exponent", and $1.099609375$ we will refer to as the mantissa (or the significand).

Let's look at the equation where we can use range reduction:

$$ \ln(563) = \ln(1.099609375 \times 2^9) = \ln(1.099609375) + \ln(2^9) = \ln(1.099609375) + 9 \times 0.693 $$

Finding the exponent and significand involves the usage of an ID conversion setup:

{{< callout context="success" title="43. Logarithm Input Positive Reduction" icon="outline/movie" >}}
T:1=563.00 (Input) C:7=0 (Exponent)

`T1 >= 65536.000` → `I7 = I7 + 16.000` `T1 = T1 / 65536.000`

`T1 >= 256.000` → `I7 = I7 + 8.000` `T1 = T1 / 256.000`

`T1 >= 16.000` → `I7 = I7 + 4.000` `T1 = T1 / 16.000`

`T1 >= 4.000` → `I7 = I7 + 2.000` `T1 = T1 / 4.000`

`T1 >= 2.000` → `I7 = I7 + 1.000` `T1 = T1 / 2.000`

▶️

T:1=1.10 C:7=9

{{< /callout >}}

Likewise, we can do this for inputs between $0$ and $1$, however small they might get:

{{< callout context="success" title="44. Logarithm Input Negative Reduction" icon="outline/movie" >}}
T:1=0.0005369 (Input) C:7=0 (Exponent)

`T1 · 65536.000 <= 2.000` → `I7 = I7 - 16.000` `T1 = T1 · 65536.000`

`T1 · 256.000 <= 2.000` → `I7 = I7 - 8.000` `T1 = T1 · 256.000`

`T1 · 16.000 <= 2.000` → `I7 = I7 - 4.000` `T1 = T1 · 16.000`

`T1 · 4.000 <= 2.000` → `I7 = I7 - 2.000` `T1 = T1 · 4.000`

`T1 · 2.000 <= 2.000` → `I7 = I7 - 1.000` `T1 = T1 · 2.000`

▶️

T:1=1.10 C:7=-11
{{< /callout >}}

This should extend our range of logarithms to work with any TimerID.

The final step is to add back the logarithm of the exponent. This is a linear term, so a bare multiplication is all that's needed.

{{< callout context="success" title="45. Logarithm Output Scaling" icon="outline/movie" >}}
T:2=0.095 (Output) C:7=9 (Exponent) T:8=0.693 ($\ln(2)$)

`T2 = T2 + I7 · T8`

▶️

T:2=6.33
{{< /callout >}}

And we are finally done! I hope so... correct?

{{< callout context="note" icon="outline/photo" >}}

NOOOOOO (Kelly reduced into a cubic pellet)

{{< /callout >}}

## The Cool Kids' Approximators

You would think that using Taylor approximation gives you infinite aura... lol, lmao even, they converge slower than hell, and sometimes they swing off value and refuse to cooperate.

{{< callout context="note" icon="outline/photo" >}}

kelly bleh

{{< /callout >}}

This is the point where I have to introduce you to another class of polynomials, and let me tell you it's so amazing that all the cool kids are onto it: Chebyshev Polynomials!

### The Inverse Tangent - $\tan^{-1}(x)$

To illustrate how powerful Chebyshev can be, let's look at how it is used in the inverse tangent function $\tan^{-1}(x)$.

From the interval between $0$ and $1$, there exists a polynomial that perfectly plops itself into the function:

$$ \tan^{-1}(x) \approx \frac{62280}{440219} x^4 - \frac{184798}{538311} x^3 - \frac{6233}{384314} x^2 + \frac{371310}{369893} x - \frac{32}{204263}, ~~~~0 \le x \le 1 $$

This is easy to replicate. Here's how you do exactly that!

{{< callout context="success" title="46. Inverse Tangent" icon="outline/movie" >}}

T:2=0.00 (Output) T:3 (Fractional Mod) T:4=1.00 ($x^n$ accumulator) T:5=0.50 (Input)

`T3 = -32.000` `T3 = T3 / 204263.000` ($-\frac{32}{204263}$)

`T2 = T2 + T3 · T4` (First term)

`T4 = T4 · T5` ($x^0 \to x^1$)

`T3 = 371310.000` `T3 = T3 / 369893.000` ($\frac{371310}{369893}$)

`T2 = T2 + T3 · T4` (Second term)

`T4 = T4 · T5` ($x^1 \to x^2$)

`T3 = -6233.000` `T3 = T3 / 384314.000` ($-\frac{6233}{384314}$)

`T2 = T2 + T3 · T4` (Third term)

`T4 = T4 · T5` ($x^2 \to x^3$)

`T3 = -184798.000` `T3 = T3 / 538311.000` ($-\frac{184798}{538311}$)

`T2 = T2 + T3 · T4` (Fourth term)

`T4 = T4 · T5` ($x^3 \to x^4$)

`T3 = 62280.000` `T3 = T3 / 440219.000` ($\frac{62280}{440219}$)

`T2 = T2 + T3 · T4` (Fifth term)

▶️

T:5=0.46

{{< /callout >}}

Do note again that this is only guaranteed to work for inputs between $0$ and $1$. To extend it to any number, you can use the following identities:

$$ \tan^{-1}(x) = -\tan^{-1}\left(-x\right) $$

$$ \tan^{-1}(x) = \frac {\pi} 2 - \tan^{-1}\left(\frac 1 x\right) $$

Because of the reciprocal, for values above $1$, this pushes the input between $0$ and $1$; and for values below $-1$, this pushes the input between $-1$ and $0$.

We can plug it into our function this way:

{{< callout context="success" title="47. Inverse Tangent Input Processing" icon="outline/movie" >}}
T:1=2.00 (Input) T:2=0.00 (Output) T:4=1.00 ($x^n$ accumulator) T:5=1.00 (Inner polynomial input) T:157=1.57 ($\frac {\pi} 2$)

`ABS(T1) > 1.000` → `T2 = T157` `T5 = T5 / T1` `T4 = -1.000` Polynomial is negated via $-x^n$

↳ `T5 = T1` Evaluate the polynomial as normal

`T1 < 0.000` → `T2 = T2 · -1.000` `T4 = T4 · -1.000` `T5 = ABS(T5)` If the input is negative, calculate the polynomial negated.

{{< /callout >}}

This should provide an approximation of $\tan^{-1}(x)$ that is dangerously close to the real value, possibly as close as TimerIDs can get.

### Chebyshev Polynomials

These best-fit fractions appear completely random at first glance, they lack a recognizable pattern and explaining where they really come from will involve some knowledge about what's known as "Chebyshev polynomials."

For come-and-go usages like the inverse tangent $\tan^{-1}(x)$, you really only need to memorize the first five mods of the approximating polynomial and move on. However an in-depth look into the process can reveal some interesting things about these mod values.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

This is an overview as to what Chebyshev approximations really do.

The details can get rather complicated, feel free to skip this part if you want. It is not required for most use cases.

{{< /callout >}}

Euclid told you that there is always a line between Dublin and Lublin. Here it is:

{{< callout context="note" icon="outline/photo" >}}

(A map of Europe, with a black line going through Dublin and Lublin)

{{< /callout >}}

Better yet, you might have found through online sources that there exists a parabola that goes through New York, Dallas and Seattle:

{{< callout context="note" icon="outline/photo" >}}

My planet is flat, yours isn't! (Parabola going through all three cities)

{{< /callout >}}

This is the general idea behind Lagrange interpolations: Given enough data points, you can always construct a polynomial function that satisfies all of them!

You may also recognize this when solving systems of linear equations, solving two variables get a system of two equations, solving three variables get a system of three, so on and so forth.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

Each data point will resolve the $x$ in polynomials, turning them into a problem of hunting down mod values via linear equations!

{{< /callout >}}

{{< callout context="note" icon="outline/photo" >}}

Diagram showing how $x, x^2, x^3$ gets evaluated for $x=3$

{{< /callout >}}

Given this, we can try and sample some points of our target function between $0$ and $1$, and see where they land by hand. This should give us a good idea on how the function behaves, and how good we can approximate it with only polynomials:

{{< callout context="note" icon="outline/photo" >}}

Kelly picking up points of equal distance and working out their heights

{{< /callout >}}

We might potentially be churning out dozens of linear equations, and they might not even be solvable!

That is totally okay because our goal isn't to satisfy every of them (and in fact we might satisfy none at all!), we are more concerned with how much it differs from $0$, squared, $\Delta^2$. The main aim of fitting is to minimize that error as much as possible.

{{< callout context="note" icon="outline/photo" >}}

(Diagram showing how 2.12 closely solves x^2 - 3x + 2 = 0, LHS = 0.1344)

{{< /callout >}}

You might be inclined to immediately take 1001 evenly-spaced points along the $0\to1$ range to cover the target function as much as possible, and it might initially seem like you would get a close result. However, there is a downside to this: your polynomial starts to wobble uncontrollably!

{{< callout context="note" icon="outline/photo" >}}

A wobbly polynomial that happens to intersect the first five points of the factorial, compared with $\Gamma(x+1)$.

{{< /callout >}}

A more clever way to work with this is via special **Chebyshev polynomials**, a brand-new collection of functions that make your approximations wobble-free!

Consider the first few Chebyshev polynomials (of the first kind):

$$ T_0(x) = 1 $$

$$ T_1(x) = x $$

$$ T_2(x) = 2x^2 - 1 $$

$$ T_3(x) = 4x^3 - 3x $$

$$ T_4(x) = 8x^4 - 8x^2 + 1 $$

Any function with $x^4$ can be represented as a combination of these polynomials, with scaling of course.

$$ g(x) = 40x^4 + 28x^3 - 34x^2 - 16x + 11 $$
$$ g(x) = 5T_4(x) + 7T_3(x) + 3T_2(x) + 5T_1(x) + 9T_0(x) $$
$$ g(50) = 5T_4(50) + 7T_3(50) + 3T_2(50) + 5T_1(50) + 9T_0(50) $$

The numbers $5, 7, 3, 5$ and $9$ scale these polynomials. Our objective is to find numbers like these for our $\tan^{-1}(x)$.

Now, plug in a value, like $50$. Aim it to the "actual result" of $\tan^{-1}(50)$. We get a linear system of equations after 5 tries. Do it 1000 times over and we will approach the *perfect* combination of these.

{{< callout context="note" icon="outline/photo" >}}

Finding the closest solution for 1000 linear equations can be daunting! (Kelly in front of a paper stack of equations)

{{< /callout >}}

Note that this step is usually done with external software. It is not feasible to implement such a thing in Geometry Dash for the scope of this guide.

{{< callout context="tip" title="Further Reading" icon="outline/book" >}}

You can check out [lecture slides provided by San Diego State University](https://jmahaffy.sdsu.edu/courses/s10/math541/lectures/pdf/week12/lecture.pdf) for a guide on least-squares data fitting.

If you have knowledge in scripting, you can use NumPy to fit Chebyshev polynomials into any function of your choice. An implementation can be found on [GeeksForGeeks](https://www.geeksforgeeks.org/python/get-the-least-squares-fit-of-chebyshev-series-to-data-in-python-numpy/).

{{< /callout >}}

## Newton-Raphson's Method

{{< callout context="note" icon="outline/photo" >}}

Newton gave me an F for not iterating functions correctly

{{< /callout >}}

Suppose you're finding solutions to $x^2 - 3x + 2 = 0$, but you forgot the quadratic formula!

There is a technique that gets you closer and closer to either of the solutions, it goes like this:

1. Take a random input
2. Draw a line across it that just touches the function (the tangent line)
3. Find where it intersects the horizontal axis
4. Repeat 2 and 3

{{< callout context="note" icon="outline/photo" >}}

Graph of $x^3 - 2$, along with tangent slopes that tend towards the intersection.

{{< /callout >}}

It's not perfect since some functions can give off rather offensive slopes, but it produces extremely good results for certain functions.

Taking a tangent line at a certain point makes use of what's known as a **derivative**. In simple terms, the derivative is a function transformation that returns the slope of its tangent, at a given point. It is typically notated as $f'(x)$ or $\frac {df} {dx}$.

The Newton's method is applied as follows:

$$ x_{1}=x_{0}-{\frac {f(x_{0})}{f'(x_{0})}} $$

This is a mathematical description of the same steps listed above: the random input ($x_0$) gets fed into a tangent line, the line gets lifted to a point, and then its intersection at 0 is taken to be a better guess $x_1$.

This process can be repeated indefinitely, but generally you will approach a really good approximation only after a few iterations.

{{< callout context="note" icon="outline/photo" >}}

Same graph, with the inputs now labeled $x_1 \to x_5$

{{< /callout >}}

### The Square Root - $\sqrt{x}$

The square root is defined as the root of a square, that is, for a square input $a$, we want to find a value $x$ such that $x^2 - a = 0$.

The derivative of $f(x) = x^2 - a$ is $f'(x) = 2x$.

Let's plug that into our Newton's Method:

$$ x_{1}=x_{0}-{\frac {f(x_{0})}{f'(x_{0})}} = x_0 - \frac {x_0^2 - a} {2x_0} = \frac 1 2 \left(x_0 + \frac a {x_0}\right) $$

For this example, we will use six iterations:

{{< callout context="success" title="48. Newton Square Root" icon="outline/movie" >}}

T:2 (Output) T:3=2.00 (Current iteration) T:4 ($a/x_0$) T:5 (Input)

`T4 = T5 / T3`

`T2 = 0.500 · (T3 + T4)`

`T3 = T2` (Next iteration: set to current iteration)

`T4 = T5 / T3`

`T2 = 0.500 · (T3 + T4)`

`T3 = T2`

`T4 = T5 / T3`

`T2 = 0.500 · (T3 + T4)`

`T3 = T2`

`T4 = T5 / T3`

`T2 = 0.500 · (T3 + T4)`

`T3 = T2`

`T4 = T5 / T3`

`T2 = 0.500 · (T3 + T4)`

`T3 = T2`

`T4 = T5 / T3`

`T2 = 0.500 · (T3 + T4)`

{{< /callout >}}

This should give off a decent approximation of $\sqrt{x}$, for inputs up to $10000$.

### Range Reducing Roots

To improve on this method, we can apply range reduction such that the input lies between $1$ and $2$.

We can decompose the square root into the following structure:

$$ \sqrt{x} = \sqrt{2^n \times k} = \sqrt{2^n} \times \sqrt{k} $$

Oh look, it's the exponent and mantissa structure again!

{{< callout context="note" icon="outline/photo" >}}

Split it like this! (Kelly separating exponent from mantissa with supernatural powers)

{{< /callout >}}

For values greater than $2$, a positive $m$ will bump $k$ down in range. For values smaller than $1$, a negative $m$ will bump $k$ up in range.

Better yet, this can be further divided into two separate cases:

- If $n$ is even, $\sqrt{2^n} = \sqrt{2^{2m}} = 2^m$
- If $n$ is odd, $\sqrt{2^n} = \sqrt{2^{2m+1}} = 2^m \times \sqrt{2}$

We will visualize the whole process with this example:

{{< callout context="success" title="49. Newton Square Root Reduction" icon="outline/movie" >}}

T:1=1234567.00 (Input) T:5 (Output $k$) T:6=1.00 (Multiplier $\sqrt{2^n}$) T:7=1.41 ($\sqrt{2} \approx \frac {11863283} {8388608}$)

Copy input to output. We will operate on the output value directly.

`T5 = T1`

First, handle the case where $0 \le x < 1$.

`T5 · 65536.000 <= 2.000` → `T6 = T6 / 256.000` `T5 = T5 · 65536.000`

`T5 · 256.000 <= 2.000` → `T6 = T6 / 16.000` `T5 = T5 · 256.000`

`T5 · 16.000 <= 2.000` → `T6 = T6 / 4.000` `T5 = T5 · 16.000`

`T5 · 4.000 <= 2.000` → `T6 = T6 / 2.000` `T5 = T5 · 4.000`

`T5 · 2.000 <= 2.000` → `T6 = T6 · T7 · 0.500` `T5 = T5 · 2.000`

Next, handle the case where $x \ge 2$

`T5 >= 65536.000` → `T6 = T6 · 256.000` `T5 = T5 / 65536.000`

`T5 >= 256.000` → `T6 = T6 · 16.000` `T5 = T5 / 256.000`

`T5 >= 16.000` → `T6 = T6 · 4.000` `T5 = T5 / 16.000`

`T5 >= 4.000` → `T6 = T6 · 2.000` `T5 = T5 / 4.000`

`T5 >= 2.000` → `T6 = T6 · T7` `T5 = T5 / 2.000`

Run the square root function as normal.

After that, multiply the exponent back to the output.

`T2 = T2 · T6`

▶️

T:5=1.177 T:6=0.00 ($= \frac 1 {1024} = 0.0009765625$)

{{< /callout >}}

By reducing the input to a small number, you reap the benefits of very accurate results that can scale infinitely.

## Function Composition

Did you know that you can combine multiple smaller functions into one big function? Yes? Not surprising at all? Oh well...

{{< callout context="note" icon="outline/photo" >}}

Kelly thinking

{{< /callout >}}

### The (Normal) Tangent - $\tan(x)$

The tangent is just defined as:

$$ \tan(x) = \frac {\sin(x)}{\cos(x)} $$

Super easy, right?

{{< callout context="success" title="50. Tangent" icon="outline/movie" >}}
G:10 (Sine) G:11 (Cosine) T:1 (Sine/Cosine Input), T:2 (Sine/Cosine Output) T:12=1.4 (Input) T:13 (Output)

`T1 = T12`

*Spawn G10*

`T13 = T2`

*Spawn G11*

`T13 = T13 / T2`

{{< /callout >}}

### Cheating the square root - $x^{0.5}$

The square root has an alternative notation! $\sqrt{x} = x^{0.5} ~~ (x \ge 0)$

Because this is just exponentiation, you can equally resolve it as follows:

$$ x^{0.5} = e^{0.5 \ln(x)} $$

You are essentially taking the logarithm of the input, halving it, and then exponentiating it back up. A peculiar dog's trick. Here's how it's implemented in-game:

{{< callout context="success" title="51. Composed Square Root" icon="outline/movie" >}}

G:10 (Exp) G:11 (Log) T:1 (Exp/Log Input), T:2 (Exp/Log Output) T:12=1.4 (Input) T:13 (Output)

`T1 = T12`

*Spawn G10* (Logarithm)

`T1 = T2 / 2.000` (Divide logarithm by 2 before exponentiating)

*Spawn G11* (Exponential)

`T13 = T2` (Wrap output)

{{< /callout >}}

While it may give more accurate results than naive Newton's Method, it generally does not perform as well once range reduction comes into play, and the computational overhead for this kind of exchange is quite expensive. This example only exists here for demonstration purposes.

### Calling it twice - $\sin(\sin(x))$

One of the downsides to calling via spawn triggers is that you can only spawn them once, there is apparently a limit to triggers.

The workaround is notoriously simple - just make two of them!

{{< callout context="success" title="52. Composed Sine" icon="outline/movie" >}}
T:6=1.000 (Input) T:7 (Output) T:10 (Inner $\sin(x)$ Output)

Our $\sin(x)$ function is GID 23.

Copy + paste

A duplicate $\sin(x)$ function is GID 24.

Swap its input from `T6` to `T10`.

Between the two, assign one sine's output to another's input.

`T10 = T7`

Now you have the function $\sin(\sin(x))$.

▶️

T:7=-0.75 T:10=0.84
{{< /callout >}}

# 4. Multiple entries per ID

We've looked at how ItemIDs can go up to 2 billion, it is quite big by all means, but such a size is not always necessary. Sometimes we might prefer to store three, even four smaller numbers within a bigger number.

Take an example, one ItemID can store three numbers between 0 and 1000. The number 280,038,212 can be decomposed into three numbers: 280, 38, and 212, each of them potentially serving a wholly different purpose.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

If you know a thing or two about C++, the `std::vector<bool>` data type operates the exact same way, using 8 bits of a byte individually instead of storing each true-false value on all 8.

{{< /callout >}}

## Setup

There are two subroutines at hand here: right shifting and remainder.

Right shifting involves taking the leading digits of a number. It is the whole quotient of a division by a round number. Likewise, the remainder takes over the trailing digits of said number.

{{< callout context="note" icon="outline/photo" >}}

round kelly

{{< /callout >}}

The number $280,038,212$ can be divided by $1,000,000$ (a round number) to obtain $280$, with $38,212$ as the remainder. The right shifting derives the former number, while the remainder churns out the latter.

It can be further divided by $1,000$ (another round number) to obtain $38$ with $212$ as a remainder.

We have decomposed a single number into three smaller numbers. Let's see how they recombine:

$$ 280 \cdot 1,000,000 + 38 \cdot 1,000 + 212 = 280,038,212 $$

There is a minor caveat: the remainder subroutine is not built directly into the triggers. However, you may have noticed that you can extract it by multiplying the round number back into the quotient, and then taking its difference with the original input. Here's how it's done in Geometry Dash:

{{< callout context="success" title="53. Number Decomposition (Thousand + Million)" icon="outline/movie" >}}
C:1=280038212 (Input) C:2=0 (Temp remainder) C:3 (Output Entry 1) C:4 (Output Entry 2) C:5 (Output Entry 3)

`I3 = FLR(I1 / 1000000.000)` (Right shift)

C:3=280

`I2 = I1` `I2 = I2 - I3 · 1000000.000` (Remainder)

C:2=38212

`I4 = FLR(I2 / 1000.000)` (Right shift)

C:4=38

`I5 = I5 - I4 · 1000.000` (Remainder)

C:5=212

{{< /callout >}}

As usual (and I love to say it again!), it's quite easy. Once you have the digits extracted, you can do whatever you want with them. Add, subtract, even multiplication and division are permitted, These dereferenced numbers act just like regular numbers... for the most part.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

When working with these split-up numbers, **do be cautious of their limits.** These numbers may hold any value an ItemID can, but issues **will** arise if you're not careful with out-of-bounds numbers.

{{< /callout >}}

Once you're done working with them, put them back in the correct place. This is where you recombine the small numbers back onto a big one. This is just as simple as splitting them up:

{{< callout context="success" title="54. Number Recombination (Thousand + Million)" icon="outline/movie" >}}
C:1 (Output) C:3=280 (Entry 1) C:4=38 (Entry 2) C:5=212 (Entry 3)

`I1 = I3 · 1000000.000`

`I1 = I1 + I4 · 1000.000`

`I1 = I1 + I5`

C:1=280038212

{{< /callout >}}

## The Number Salami: Uneven Segments

Some of you may prefer dividing the same value into thousands, lakhs and crores instead: $28,00,38,212$

This difference often boils down to the **round numbers** chosen in the right shifting process. They serve as digital knives, splitting up a number chunk into two segments.

{{< callout context="note" icon="outline/photo" >}}

Everything at the $1$ and left, goes on one side, everything to the right of $1$, goes on the other! (Kelly cutting up a number salami)

{{< /callout >}}

By choosing different cutting spots, we get different round numbers. To divide up a number into thousands, lakhs and crores, we use three round numbers to do the slicing: $1,00,00,000$ (crore), $1,00,000$ (lakh) and $1,000$ (thousand).

{{< callout context="success" title="55. Number Decomposition (Lakh + Crore)" icon="outline/movie" >}}
C:1=280038212 (Input) C:2=0 (Lakh remainder) C:3=0 (Thousand remainder) C:4 (Crores) C:5 (Lakhs) C:6 (Thousands) C:7 (Units)

`I4 = FLR(I1 / 10000000.000)` (Right shift)

C:4=28

`I2 = I1` `I2 = I2 - I4 · 10000000.000` (Remainder)

C:2=38212

`I5 = FLR(I2 / 100000.000)` (Right shift)

C:5=0

`I3 = I2` `I3 = I3 - I5 · 100000.000` (Remainder)

C:3=38212

`I6 = FLR(I2 / 1000.000)` (Right shift)

C:6=38

`I7 = I3` `I7 = I7 - I6 · 1000.000` (Remainder)

C:7=212

{{< /callout >}}

Recombining uneven segments uses the same princple:

{{< callout context="success" title="56. Number Recombination (Lakh + Crore)" icon="outline/movie" >}}
C:1 (Output) C:4=28 (Crores) C:5=0 (Lakhs) C:6=38 (Thousands) C:7=212 (Units)

`I1 = I3 · 10000000.000`

`I1 = I1 + I5 · 100000.000`

`I1 = I1 + I6 · 1000.000`

`I1 = I1 + I7`

C:1=280038212

{{< /callout >}}

## Numerical Spot Surgery

<!-- (Multiple IDs - Order Consideration) -->

Say a number salami tracks player movement and attack at the same time. Attacks take a while, but movements are instant. You charge your attack, then you start moving, once the attack is complete, the movement is also reset, causing you to grind into a halt. Whoops!

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

In computer science, this is known as a **race condition**. When both threads read off the same data, the thread that writes first gets overwritten by the one that writes later.

{{< /callout >}}

There are two approaches to this: one is to make a new "lock" ItemID that checks if the data is occupied, and forbid any reading operation until the data is freed. This is known as a mutual exclusion, or **mutex**.

{{< callout context="tip" title="Further Reading" icon="outline/book" >}}

You can read more about concurrency in the [Synchronous & Asynchronous Functions](/docs/guides/triggers-2/making-functions/#synchronous--asynchronous-functions) section of the Making Functions guide.

{{< /callout >}}

The second, more elegant solution is to only target one slice of the number salami. Instead of recombining the slices into a new one, just swap one of them out for the other.

Returning to our uneven slices, we see that we have no spare lakhs! You don't need to decompose all of your money and then add the lakhs, just put them directly into the number.

{{< callout context="success" title="57. Number Spot Addition" icon="outline/movie" >}}
C:1=280038212 (Input) C:5=36 (Lakhs to add)

`I1 = I1 + I5 · 100000.00`

C:1=283638212

{{< /callout >}}

We have effectively added $36$ lakhs to our wallet, bringing the number to $28,36,38,212$.

Let's say we spend some lakhs such that $24$ remain. You know what the solution is: subtract all lakhs, then add $24$.

{{< callout context="success" title="58. Number Spot Replacement" icon="outline/movie" >}}
C:1=283638212 (Input) C:5=36 (Old lakhs) C:8=24 (New lakhs)

`I1 = I1 - I5 · 100000.00`

`I1 = I1 + I8 · 100000.00`

C:1=282438212

{{< /callout >}}

This "spot-surgery" approach allows us to have finer control over the value, preventing some forms of data overwriting.

<!-- (Multiple IDs - Segment Consideration) -->

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

Be careful about where you place your surgical data knives - incisions into the wrong spots can be disastrous!

{{< /callout >}}

<!-- (Multiple IDs - Multiple Substrings Consideration - can ignore) -->

## The Manageable Enemy Horde

So far we've explained the concept and implementation of multiple entries per ID. It can be used for technical applications (as we will see for the [Linked Lists data structure](/docs/guides/triggers-2/making-data-structures)), but also for more practical ones.

Let's say you want to make a battle system where the player and enemies have health and attack stats. You could use different IDs that store separately the health and attack stats of the enemies, but if you intend to create a lot of enemies that could get difficult to manage and you'd have less IDs for everything else. This problem would be further exacerbated if the enemies also have defense, evasion, speed or other stats. For this reason, we can store all that information in one or few IDs and use different functions for stat manipulation.

Suppose we want to make an enemy with five stats: Health (0-100), Attack (0-50), Defense (0-20), Evasion (0-20) and Speed (0-5). The range of values our combined enemy stat can range would be:

$$ 101 \times 51 \times 21 \times 21 \times 6 = 13,629,546 $$

We've looked at an example with clean, round salami knives (à la $1,000,000$), but that need not always be the case. Numbers can be split into slices of **any** size, provided you stack the right multiples together.

{{< callout context="success" title="59. Enemy Stat Decomposition" icon="outline/movie" >}}

C:1=8388608 (Input) C:2 (Health) C:3 (Attack) C:4 (Defense) C:5 (Evasion) C:6 (Speed)
C:7 (Temp Remainder) C:8 (Temp Remultiply) C:9=13629546 (Knife)

Our first knife splits off the unused excess part.

`I8 = I1 / I9`

`I8 = I8 · I9`

`I7 = I1 - I8`

Our salami should be ready for splitting.

First, we cut off the health.

`I9 = I9 / 101.000` (Prepare the knife)

C:9=134946

`I2 = I7 / I9`

`I8 = I2 · I9`

`I7 = I7 - I8`

C:2=62 C:7=21956

Second, cut off the attack.

`I9 = I9 / 51.000`

`I3 = I7 / I9`

`I8 = I3 · I9`

`I7 = I7 - I8`

C:3=8 C:7=788 C:9=2646

Now, the defense.

`I9 = I9 / 21.000`

`I4 = I7 / I9`

`I8 = I4 · I9`

`I7 = I7 - I8`

C:4=6 C:7=32 C:9=126

Finally, the evasion and speed.

`I9 = I9 / 21.000`

`I5 = I7 / I9`

`I8 = I4 · I9`

`I6 = I7 - I8`

C:5=5 C:6=2 C:9=6

{{< /callout >}}

With this, we have effectively decomposed our value into the following stats:

- **Health:** 62/100
- **Attack:** 8/50
- **Defense:** 6/20
- **Evasion:** 5/20
- **Speed:** 2/5

You should also pay attention to the knives used to cut up numbers:

- **Health:** $134,946$
- **Attack:** $2,646$
- **Defense:** $126$
- **Evasion & Speed:** $6$

We will use these values during recombination.

{{< callout context="success" title="60. Enemy Stat Recombination" icon="outline/movie" >}}
C:1 (Output) C:2=62 (Health) C:3=8 (Attack) C:4=6 (Defense) C:5=5 (Evasion) C:6=2 (Speed)

`I1 = I2 · 134946.000` (Health)

`I1 = I1 + I3 · 2646.000` (Attack)

`I1 = I1 + I4 · 126.000` (Defense)

`I1 = I1 + I5 · 6.000` (Evasion)

`I1 = I1 + I6` (Speed)

{{< /callout >}}

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

You can also perform spot surgery with these crooked knives!

Just, be careful with them. Number decomposition can be hard to notice with these uneven divisions.

{{< /callout >}}

{{< callout context="note" icon="outline/photo" >}}

They really aren't that useless after all (Kelly holding crooked knives)

{{< /callout >}}

Each enemy can have one ItemID to store all of its stats. You can use re-mapping to make it work for each enemy you spawn, reducing logical complexity.

{{< callout context="note" icon="outline/photo" >}}

Try these values out! (Diagram with an arrow pointing each small thorn to a value and five decomposed stats)

{{< /callout >}}

## Binary-maxxing, Sign-maxxing

You may have realized that we're not making use of the last digit, or even the leftovers of very large or very small quantities. We have also left out all of the potentially useful negative numbers like $-2,067,420,666$. This is partly due to how ItemIDs are stored: binary, not decimal.

To recap, here is how a number is really stored in game:

$$ -2067420666_{10} = 1~~0000100110001011010101000000110_2 $$

The leading bit acts as the sign. It is $1$, meaning that the number is negative.

Suppose we want four numbers that range from $-128$ to $127$. There are 256 values in total, which fit into 8 bits (256 is the 8th doubling number).

Our number salami will look as follows:

$$ 1\space\space00001001\space\space\space\space1\space\space1000101\space\space\space\space1\space\space0101010\space\space\space\space0\space\space0000110 $$

In decimal, this corresponds to $-124,-59,-86,6$. Note that the second number $-59$ would be $197$, but due to the negative sign bit it gets subtracted by $256$

Processing this chain would proceed rather normally for the latter 3 numbers, using a binary knife, chopping them all into raw values, and making them negative when they are above certain threshold (in this case $127$).

The first part demands a more special treatment. The sign bit is shared with the first number, so a simple floored division-remainder will suffice.

All of these steps can be done in GD as follows:

{{< callout context="success" title="61. Binary Decomposition" icon="outline/movie" >}}
C:1=-2067420666 (Input) C:2 (Temporary second) C:3 (Temporary third)
C:4 (First part) C:5 (Second part) C:6 (Third part) C:8 (Fourth part) C:24=16777216 ($2^{24}$) C:31=-2147483648 ($-2^{31}$)

Process the sign.

If it's negative, add $2^{31} = 2,147,483,648$.

`I1 < 0` → `I4 = -128.000` `I3 = I1 - I31` ($2^{31}$)

↳ `I4 = 0.000` `I3 = I1`

C:3=80062982

`I4 = FLR(I4 + I3 / I24)`

C:4=-124

`I2 = I3` `I2 = I2 - I4 · I24`

C:2=12954118

`I5 = FLR(I2 / 65536.000)`

`I3 = I2` `I3 = I3 - I5 · 65536.000`

C:3=43526 C:5=197

`I6 = FLR(I3 / 256.000)`

`I7 = I3` `I7 = I7 - I6 · 256.000`

C:6=170 C:7=6

Now, for the other three numbers, check for the sign bit.

`I5 > 127.000` → `I5 = I5 - 128.000`

`I6 > 127.000` → `I6 = I6 - 128.000`

`I7 > 127.000` → `I7 = I7 - 128.000`

C:5=-59 C:6=-86 C:7=6

{{< /callout >}}

As for the recombination, the flow is the same for the other three parts with the signs readjusted, while the first part carries the sign.

{{< callout context="success" title="62. Binary Recombination" icon="outline/movie" >}}
C:1 (Output) C:4=-124 (First part) C:5=-59 (Second part) C:6=-86 (Third part) C:7=6 (Fourth part) C:8=0 (Sign tracker)

For the last three parts, check for sign as normal.

`I5 < 0.000` → `I5 = I5 + 256.000`

`I6 < 0.000` → `I6 = I6 + 256.000`

`I7 < 0.000` → `I7 = I7 + 256.000`

For the first part, do not add the sign bit in, and keep a tracker somewhere.

`I4 < 0.000` → `I4 = I4 + 128.000` `I8 = 1.000`

C:4=4 C:5=94 C:6=170 C:7=6

Recombine as normal.

`I1 = I4 · I24`

`I1 = I1 + I5 · 65536.000`

`I1 = I1 + I6 · 256.000`

`I1 = I1 + I7`

If the sign tracker is on, subtract $2^{31}=2,147,483,648$.

`I8 == 1.000` →  `I1 = I1 + I31`

{{< /callout >}}

In binary, our knives are placed apart every 8 bits, so the round numbers are: $256, 65536, 16777216$. Much like how $1000$ is a large round number for decimal, $65536$ is a large round number for binary.

This setup seems a bit ad-hoc at first due to the presence of the sign bit, but this idea can be easily extended into other number ranges. By analyzing a number's binary representation and identifying the sign bit where needed, you can easily extend this concept into other bit divisions, such as 16\~8\~8, 4\~24\~4 or even 17\~3\~4\~8.

{{< callout context="caution" title="Handling the sign bit" icon="outline/info-circle" >}}

When removing the sign (by adding $2,147,483,648$), if the first part has $n$ bits, subtract $2^{n-1}$ if working with signed numbers, otherwise add $2^{n-1}$.

**Example:** If your number has 17 bits and you're working with unsigned numbers, add $2^{16}=65536$ to the first part.

When recombining the sign, if the first part is negative (signed) or is at least $2^{n-1}$ (unsigned), add or subtract $2^{n-1}$ such that it is positive and in range, then subtract the combined number by $2,147,483,648$.

{{< /callout >}}

# Appendix

Random assortments of useful techniques that did not make their way onto the page structure.

## A. Super Fast Sine

You just need to squeeze out every last bit of performance, eh? Well, worry no more as there's an algorithm that does just that, named after Bhaskara I.

The approximation formula is notoriously simple:

$$ \sin x \approx \frac{16x (\pi - x)}{5\pi^2 - 4x (\pi - x)} $$

This can be rewritten as:

$$ \frac {-16x^2 + 16\pi x} {-4x^2 - 4\pi x + 5\pi ^2} $$

Both of these are regular old polynomials, this equates to evaluating two polynomials and then dividing each other.

{{< callout context="note" icon="outline/photo" >}}

(The full implementation)

{{< /callout >}}

This setup only works for inputs from $0$ to $\pi$, and the error range can be as large as 2%. This can usually be ignored in most applications, but if your level requires more accuracy, accumulating via Taylor will work better.

## B. Area Triggers as Math Functions

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

!!!

{{< /callout >}}

## C. Reference Implementations

A list of useful functions presented in this guide.
The code snippets provided can be copied and pasted directly into the game.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

Some extra counters have a set value:

> T8 (=ln 2=0.693)

These are constants that you will have to set before the function is run. Their best approximations are detailed in the guide, or you can set the indicated value directly in exchange for less accuracy.

{{< /callout >}}

### Background by Color ID

- **Entry Point:** Group 4
- **Extra Groups:** 6-12

```txt
1,3620,2,3045,3,495,20,3,57,4,155,1,62,1,87,1,36,1,80,1,51,6,476,1,479,1,483,1,480,3,481,3;1,899,2,3045,3,435,20,3,57,6,155,1,62,1,87,1,36,1,7,255,8,0,9,0,10,0.5,35,1,23,1000;1,3620,2,3135,3,495,20,3,57,4,155,1,62,1,87,1,36,1,80,1,51,7,476,1,479,1,483,2,480,3,481,3;1,899,2,3135,3,435,20,3,57,7,155,1,62,1,87,1,36,1,7,255,8,128,9,0,10,0.5,35,1,23,1000;1,3620,2,3225,3,495,20,3,57,4,155,1,62,1,87,1,36,1,80,1,51,8,476,1,479,1,483,3,480,3,481,3;1,899,2,3585,3,435,20,3,57,12,155,1,62,1,87,1,36,1,7,160,8,0,9,255,10,0.5,35,1,23,1000;1,3620,2,3315,3,495,20,3,57,4,155,1,62,1,87,1,36,1,80,1,51,9,476,1,479,1,483,4,480,3,481,3;1,899,2,3225,3,435,20,3,57,8,155,1,62,1,87,1,36,1,7,255,8,255,9,0,10,0.5,35,1,23,1000;1,3620,2,3405,3,495,20,3,57,4,155,1,62,1,87,1,36,1,80,1,51,10,476,1,479,1,483,5,480,3,481,3;1,899,2,3315,3,435,20,3,57,9,155,1,62,1,87,1,36,1,7,0,8,255,9,0,10,0.5,35,1,23,1000;1,3620,2,3495,3,495,20,3,57,4,155,1,62,1,87,1,36,1,80,1,51,11,476,1,479,1,483,6,480,3,481,3;1,899,2,3405,3,435,20,3,57,10,155,1,62,1,87,1,36,1,7,0,8,193,9,255,10,0.5,35,1,23,1000;1,3620,2,3585,3,495,20,3,57,4,155,1,24,7,62,1,87,1,36,1,80,1,51,12,476,1,479,1,483,7,480,3,481,3;1,899,2,3495,3,435,20,3,57,11,155,1,62,1,87,1,36,1,7,63,8,0,9,255,10,0.5,35,1,23,1000;
```

### Binary Stacked Move, Small Step

- **Entry Point:** Group 5
- **Target:** Group 10
- **Extra Groups:** 11-20

```txt
1,3620,2,4095,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,11,476,1,479,1,483,512,480,3,481,3,482,2;1,1817,2,4095,3,375,20,3,57,11,155,1,62,1,87,1,36,1,80,1,77,-512,449,1;1,901,2,4095,3,345,20,3,57,11,155,1,62,1,87,1,36,1,51,10,28,512,29,0,10,1,30,0,85,2,393,1;1,1268,2,4035,3,375,20,3,155,1,11,1,36,1,51,5;1,3620,2,4185,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,12,476,1,479,1,483,256,480,3,481,3,482,2;1,1817,2,4185,3,375,20,3,57,12,155,1,62,1,87,1,36,1,80,1,77,-256,449,1;1,901,2,4185,3,345,20,3,57,12,155,1,62,1,87,1,36,1,51,10,28,256,29,0,10,1,30,0,85,2,393,1;1,3620,2,4275,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,13,476,1,479,1,483,128,480,3,481,3,482,2;1,1817,2,4275,3,375,20,3,57,13,155,1,62,1,87,1,36,1,80,1,77,-128,449,1;1,901,2,4275,3,345,20,3,57,13,155,1,62,1,87,1,36,1,51,10,28,128,29,0,10,1,30,0,85,2,393,1;1,3620,2,4365,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,14,476,1,479,1,483,64,480,3,481,3,482,2;1,1817,2,4365,3,375,20,3,57,14,155,1,62,1,87,1,36,1,80,1,77,-64,449,1;1,901,2,4365,3,345,20,3,57,14,155,1,62,1,87,1,36,1,51,10,28,64,29,0,10,1,30,0,85,2,393,1;1,3620,2,4455,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,15,476,1,479,1,483,32,480,3,481,3,482,2;1,1817,2,4455,3,375,20,3,57,15,155,1,62,1,87,1,36,1,80,1,77,-32,449,1;1,901,2,4455,3,345,20,3,57,15,155,1,62,1,87,1,36,1,51,10,28,32,29,0,10,1,30,0,85,2,393,1;1,3620,2,4545,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,16,476,1,479,1,483,16,480,3,481,3,482,2;1,1817,2,4545,3,375,20,3,57,16,155,1,62,1,87,1,36,1,80,1,77,-16,449,1;1,901,2,4545,3,345,20,3,57,16,155,1,62,1,87,1,36,1,51,10,28,16,29,0,10,1,30,0,85,2,393,1;1,3620,2,4635,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,17,476,1,479,1,483,8,480,3,481,3,482,2;1,1817,2,4635,3,375,20,3,57,17,155,1,62,1,87,1,36,1,80,1,77,-8,449,1;1,901,2,4635,3,345,20,3,57,17,155,1,62,1,87,1,36,1,51,10,28,8,29,0,10,1,30,0,85,2,393,1;1,914,2,4635,3,475,20,3,155,4,6,315,128,0.75,129,0.75,31,OA==;1,914,2,4549,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,MTY=;1,914,2,4459,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,MzI=;1,914,2,4369,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,NjQ=;1,914,2,4283,3,485,20,3,155,4,6,315,128,0.75,129,0.75,31,MTI4;1,914,2,4193,3,485,20,3,155,4,6,315,128,0.75,129,0.75,31,MjU2;1,914,2,4103,3,485,20,3,155,4,6,315,128,0.75,129,0.75,31,NTEy;1,1817,2,4725,3,375,20,3,57,18,155,1,62,1,87,1,36,1,80,1,77,-4,449,1;1,901,2,4725,3,345,20,3,57,18,155,1,62,1,87,1,36,1,51,10,28,4,29,0,10,1,30,0,85,2,393,1;1,3620,2,4725,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,18,476,1,479,1,483,4,480,3,481,3,482,2;1,914,2,4725,3,475,20,3,155,4,6,315,128,0.75,129,0.75,31,NA==;1,1817,2,4815,3,375,20,3,57,19,155,1,62,1,87,1,36,1,80,1,77,-2,449,1;1,901,2,4815,3,345,20,3,57,19,155,1,62,1,87,1,36,1,51,10,28,2,29,0,10,1,30,0,85,2,393,1;1,3620,2,4815,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,19,476,1,479,1,483,2,480,3,481,3,482,2;1,914,2,4815,3,475,20,3,155,4,6,315,128,0.75,129,0.75,31,Mg==;1,1817,2,4905,3,375,20,3,57,20,155,1,62,1,87,1,36,1,80,1,77,-1,449,1;1,901,2,4905,3,345,20,3,57,20,155,1,62,1,87,1,36,1,51,10,28,1,29,0,10,1,30,0,85,2,393,1;1,3620,2,4905,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,51,20,476,1,479,1,483,1,480,3,481,3,482,2;1,914,2,4905,3,474,20,3,155,4,6,315,128,0.75,129,0.75,31,MQ==;1,3619,2,4035,3,435,20,3,57,5,155,1,62,1,87,1,36,1,80,1,476,2,478,1,51,1,479,30,481,1,482,3;1,914,2,4067.5,3,510,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBUMSAqIDMwLjAwMA==;
```

### Binary Stacked Rotate, 10× Precision

- **Entry Point:** Group 33
- **Target:** Group 10
- **Extra Groups:** 21-32

```txt
1,1817,2,5505,3,375,20,3,57,30,155,1,62,1,87,1,36,1,80,3,77,-512,449,1;1,1817,2,5565,3,375,20,3,57,29,155,1,62,1,87,1,36,1,80,3,77,-256,449,1;1,1817,2,5625,3,375,20,3,57,28,155,1,62,1,87,1,36,1,80,3,77,-128,449,1;1,1817,2,5685,3,375,20,3,57,27,155,1,62,1,87,1,36,1,80,3,77,-64,449,1;1,1817,2,5745,3,375,20,3,57,26,155,1,62,1,87,1,36,1,80,3,77,-32,449,1;1,1817,2,5805,3,375,20,3,57,25,155,1,62,1,87,1,36,1,80,3,77,-16,449,1;1,1817,2,5865,3,375,20,3,57,24,155,1,62,1,87,1,36,1,80,3,77,-8,449,1;1,1817,2,5925,3,375,20,3,57,23,155,1,62,1,87,1,36,1,80,3,77,-4,449,1;1,1817,2,5985,3,375,20,3,57,22,155,1,62,1,87,1,36,1,80,3,77,-2,449,1;1,1817,2,6045,3,375,20,3,57,21,155,1,62,1,87,1,36,1,80,3,77,-1,449,1;1,1817,2,5445,3,375,20,3,57,31,155,1,62,1,87,1,36,1,80,3,77,-1024,449,1;1,1817,2,5385,3,375,20,3,57,32,155,1,62,1,87,1,36,1,80,3,77,-2048,449,1;1,914,2,5869,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,MC44;1,914,2,5809,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,MS42;1,914,2,5749,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,My4y;1,914,2,5689,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,Ni40;1,914,2,5633,3,485,20,3,155,4,6,315,128,0.75,129,0.75,31,MTIuOA==;1,914,2,5573,3,485,20,3,155,4,6,315,128,0.75,129,0.75,31,MjUuNg==;1,914,2,5513,3,485,20,3,155,4,6,315,128,0.75,129,0.75,31,NTEuMg==;1,914,2,5929,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,MC40;1,914,2,5989,3,480,20,3,155,4,6,315,128,0.75,129,0.75,31,MC4y;1,914,2,6049,3,479,20,3,155,4,6,315,128,0.75,129,0.75,31,MC4x;1,914,2,5457.5,3,490,20,3,155,4,6,315,128,0.75,129,0.75,31,MTAyLjQ=;1,914,2,5397.5,3,490,20,3,155,4,6,-45,128,0.75,129,0.75,31,MjA0Ljg=;1,3620,2,5505,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,30,476,1,479,1,483,512,480,3,481,3,482,2;1,3620,2,5565,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,29,476,1,479,1,483,256,480,3,481,3,482,2;1,3620,2,5625,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,28,476,1,479,1,483,128,480,3,481,3,482,2;1,3620,2,5685,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,27,476,1,479,1,483,64,480,3,481,3,482,2;1,3620,2,5745,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,26,476,1,479,1,483,32,480,3,481,3,482,2;1,3620,2,5805,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,25,476,1,479,1,483,16,480,3,481,3,482,2;1,3620,2,5865,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,24,476,1,479,1,483,8,480,3,481,3,482,2;1,3620,2,5925,3,435,20,3,57,33,155,1,25,2,24,5,62,1,87,1,36,1,80,3,51,23,476,1,479,1,483,4,480,3,481,3,482,2;1,3620,2,5985,3,435,20,3,57,33,155,1,25,2,24,5,62,1,87,1,36,1,80,3,51,22,476,1,479,1,483,2,480,3,481,3,482,2;1,3620,2,6045,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,21,476,1,479,1,483,1,480,3,481,3,482,2;1,3620,2,5445,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,31,476,1,479,1,483,1024,480,3,481,3,482,2;1,3620,2,5385,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,3,51,32,476,1,479,1,483,2048,480,3,481,3,482,2;1,1346,2,5385,3,345,20,3,57,32,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,204.8;1,1346,2,5445,3,345,20,3,57,31,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,102.4;1,1346,2,5505,3,345,20,3,57,30,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,51.2;1,1346,2,5565,3,345,20,3,57,29,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,25.6;1,1346,2,5625,3,345,20,3,57,28,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,12.8;1,1346,2,5685,3,345,20,3,57,27,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,6.4;1,1346,2,5745,3,345,20,3,57,26,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,3.2;1,1346,2,5805,3,345,20,3,57,25,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,1.6;1,1346,2,5865,3,345,20,3,57,24,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,0.8;1,1346,2,5925,3,345,20,3,57,23,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,0.4;1,1346,2,5985,3,345,20,3,57,22,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,0.2;1,1346,2,6045,3,345,20,3,57,21,155,1,62,1,87,1,36,1,51,10,10,0.5,85,2,68,0.1;1,1268,2,5265,3,375,20,3,155,1,11,1,36,1,51,33;1,3619,2,5325,3,435,20,3,57,33,155,1,62,1,87,1,36,1,80,1,476,2,478,1,51,3,479,10,481,1,482,3;1,914,2,5357.5,3,510,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STMgPSBUMSAqIDEwLjAwMA==;
```

### Ticks Per Second Loop

- **Entry Point:** Group 39
- **Target:** Group 38 (Included)
- **Extra Groups:** 34-37, 40
- **Extra Counters:** I4, I5
- **Notes:** The player should spawn inside of the collision boxes. Additionally, extra counters can be set at the start.

```txt
1,901,2,6375,3,675,20,3,57,34,155,1,62,1,87,1,36,1,51,38,28,3,29,0,10,0,30,0,85,2,544,1;1,1817,2,6375,3,585,20,3,57,34,155,1,62,1,87,1,36,1,80,4,77,1,449,1;1,901,2,6435,3,675,20,3,57,35,155,1,62,1,87,1,36,1,51,38,28,-3,29,0,10,0,30,0,85,2,544,1;1,1817,2,6435,3,585,20,3,57,35,155,1,62,1,87,1,36,1,80,4,77,-1,449,1;1,901,2,6495,3,675,20,3,57,36,155,1,62,1,87,1,36,1,51,38,28,0,29,3,10,0,30,0,85,2,544,1;1,1817,2,6495,3,585,20,3,57,36,155,1,62,1,87,1,36,1,80,5,77,1,449,1;1,901,2,6555,3,675,20,3,57,37,155,1,62,1,87,1,36,1,51,38,28,0,29,-3,10,0,30,0,85,2,544,1;1,1817,2,6555,3,585,20,3,57,37,155,1,62,1,87,1,36,1,80,5,77,-1,449,1;1,3609,2,6375,3,735,20,3,57,39,155,1,62,1,87,1,36,1,51,34,95,2,138,1,600,1;1,3609,2,6435,3,735,20,3,57,39,155,1,62,1,87,1,36,1,51,35,95,4,138,1,600,1;1,3609,2,6495,3,735,20,3,57,39,155,1,62,1,87,1,36,1,51,36,95,1,138,1,600,1;1,3609,2,6555,3,735,20,3,57,39,155,1,62,1,87,1,36,1,51,37,95,3,138,1,600,1;1,1268,2,6615,3,735,20,3,57,39,155,1,62,1,87,1,36,1,51,40,63,0.0001;1,1912,2,6675,3,735,20,3,57,40,155,1,62,1,87,1,36,1,51,39,10,100;1,1268,2,6225,3,735,20,3,155,1,11,1,36,1,51,39;1,914,2,6381,3,645,20,3,155,4,6,45,21,1,128,0.5,129,0.5,31,WCsx;1,914,2,6441,3,645,20,3,155,4,6,45,21,1,128,0.5,129,0.5,31,WC0x;1,914,2,6501,3,645,20,3,155,4,6,45,21,1,128,0.5,129,0.5,31,WSsx;1,914,2,6561,3,645,20,3,155,4,6,45,21,1,128,0.5,129,0.5,31,WS0x;1,914,2,6405,3,525,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STQgPSBJNCArIDEuMDAw;1,914,2,6465,3,525,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STQgPSBJNCAtIDEuMDAw;1,914,2,6525,3,525,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STUgPSBJNSArIDEuMDAw;1,914,2,6585,3,525,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STUgPSBJNSAtIDEuMDAw;1,1816,2,6195,3,348,20,3,57,38,155,1,36,1,80,1;1,1816,2,6228,3,315,20,3,57,38,155,1,36,1,80,2;1,1816,2,6195,3,282,20,3,57,38,155,1,36,1,80,3;1,1816,2,6162,3,315,20,3,57,38,155,1,36,1,80,4;
```

### Object Repositioning

- **Entry Point:** Group 61
- **Target:** Group 63
- **Extra Groups:** 41-60
- **Extra Counters:** I4, I5

```txt
1,3609,2,6375,3,735,20,3,57,39,155,1,62,1,87,1,36,1,51,34,95,2,138,1,600,1;1,3620,2,7875,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,51,476,1,479,1,480,3,481,3,482,3;1,901,2,7875,3,555,20,3,57,51,155,1,62,1,87,1,36,1,51,63,28,0,29,-1536,10,0.5,30,0,85,2;1,1817,2,7875,3,525,20,3,57,51,155,1,62,1,87,1,36,1,80,5,77,512,449,1;1,901,2,7935,3,555,20,3,57,52,155,1,62,1,87,1,36,1,51,63,28,0,29,768,10,0.5,30,0,85,2;1,1817,2,7935,3,525,20,3,57,52,155,1,62,1,87,1,36,1,80,5,77,-256,449,1;1,901,2,7995,3,555,20,3,57,53,155,1,62,1,87,1,36,1,51,63,28,0,29,384,10,0.5,30,0,85,2;1,1817,2,7995,3,525,20,3,57,53,155,1,62,1,87,1,36,1,80,5,77,-128,449,1;1,901,2,8055,3,555,20,3,57,54,155,1,62,1,87,1,36,1,51,63,28,0,29,192,10,0.5,30,0,85,2;1,1817,2,8055,3,525,20,3,57,54,155,1,62,1,87,1,36,1,80,5,77,-64,449,1;1,901,2,8115,3,555,20,3,57,55,155,1,62,1,87,1,36,1,51,63,28,0,29,96,10,0.5,30,0,85,2;1,1817,2,8115,3,525,20,3,57,55,155,1,62,1,87,1,36,1,80,5,77,-32,449,1;1,901,2,8175,3,555,20,3,57,56,155,1,62,1,87,1,36,1,51,63,28,0,29,48,10,0.5,30,0,85,2;1,1817,2,8175,3,525,20,3,57,56,155,1,62,1,87,1,36,1,80,5,77,-16,449,1;1,901,2,8235,3,555,20,3,57,57,155,1,62,1,87,1,36,1,51,63,28,0,29,24,10,0.5,30,0,85,2;1,1817,2,8235,3,525,20,3,57,57,155,1,62,1,87,1,36,1,80,5,77,-8,449,1;1,901,2,8295,3,555,20,3,57,58,155,1,62,1,87,1,36,1,51,63,28,0,29,12,10,0.5,30,0,85,2;1,1817,2,8295,3,525,20,3,57,58,155,1,62,1,87,1,36,1,80,5,77,-4,449,1;1,901,2,8355,3,555,20,3,57,59,155,1,62,1,87,1,36,1,51,63,28,0,29,6,10,0.5,30,0,85,2;1,1817,2,8355,3,525,20,3,57,59,155,1,62,1,87,1,36,1,80,5,77,-2,449,1;1,901,2,8415,3,555,20,3,57,60,155,1,62,1,87,1,36,1,51,63,28,0,29,3,10,0.5,30,0,85,2;1,1817,2,8415,3,525,20,3,57,60,155,1,62,1,87,1,36,1,80,5,77,-1,449,1;1,3620,2,7935,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,52,476,1,479,1,483,256,480,3,481,3,482,2;1,3620,2,7995,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,53,476,1,479,1,483,128,480,3,481,3,482,2;1,3620,2,8055,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,54,476,1,479,1,483,64,480,3,481,3,482,2;1,3620,2,8115,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,55,476,1,479,1,483,32,480,3,481,3,482,2;1,3620,2,8175,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,56,476,1,479,1,483,16,480,3,481,3,482,2;1,3620,2,8235,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,57,476,1,479,1,483,8,480,3,481,3,482,2;1,3620,2,8295,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,58,476,1,479,1,483,4,480,3,481,3,482,2;1,3620,2,8355,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,59,476,1,479,1,483,2,480,3,481,3,482,2;1,3620,2,8415,3,615,20,3,57,61,155,1,62,1,87,1,36,1,80,5,51,60,476,1,479,1,483,1,480,3,481,3,482,2;1,914,2,8239,3,656,20,3,155,4,6,315,128,0.5,129,0.5,31,MC44;1,914,2,8179,3,656,20,3,155,4,6,315,128,0.5,129,0.5,31,MS42;1,914,2,8119,3,656,20,3,155,4,6,315,128,0.5,129,0.5,31,My4y;1,914,2,8059,3,656,20,3,155,4,6,315,128,0.5,129,0.5,31,Ni40;1,914,2,8003,3,660,20,3,155,4,6,315,128,0.5,129,0.5,31,MTIuOA==;1,914,2,7943,3,660,20,3,155,4,6,315,128,0.5,129,0.5,31,MjUuNg==;1,914,2,8299,3,656,20,3,155,4,6,315,128,0.5,129,0.5,31,MC40;1,914,2,8359,3,656,20,3,155,4,6,315,128,0.5,129,0.5,31,MC4y;1,914,2,8419,3,655,20,3,155,4,6,315,128,0.5,129,0.5,31,MC4x;1,914,2,7883,3,658,20,3,155,9,6,315,21,8,128,0.5,129,0.5,31,LTUxLjI=;1,3620,2,7875,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,41,476,1,479,1,480,3,481,3,482,3;1,901,2,7875,3,345,20,3,57,41,155,1,62,1,87,1,36,1,51,63,28,-1536,29,0,10,0.5,30,0,85,2;1,1817,2,7875,3,315,20,3,57,41,155,1,62,1,87,1,36,1,80,4,77,512,449,1;1,901,2,7935,3,345,20,3,57,42,155,1,62,1,87,1,36,1,51,63,28,768,29,0,10,0.5,30,0,85,2;1,1817,2,7935,3,315,20,3,57,42,155,1,62,1,87,1,36,1,80,4,77,-256,449,1;1,901,2,7995,3,345,20,3,57,43,155,1,62,1,87,1,36,1,51,63,28,384,29,0,10,0.5,30,0,85,2;1,1817,2,7995,3,315,20,3,57,43,155,1,62,1,87,1,36,1,80,4,77,-128,449,1;1,901,2,8055,3,345,20,3,57,44,155,1,62,1,87,1,36,1,51,63,28,192,29,0,10,0.5,30,0,85,2;1,1817,2,8055,3,315,20,3,57,44,155,1,62,1,87,1,36,1,80,4,77,-64,449,1;1,901,2,8115,3,345,20,3,57,45,155,1,62,1,87,1,36,1,51,63,28,96,29,0,10,0.5,30,0,85,2;1,1817,2,8115,3,315,20,3,57,45,155,1,62,1,87,1,36,1,80,4,77,-32,449,1;1,901,2,8175,3,345,20,3,57,46,155,1,62,1,87,1,36,1,51,63,28,48,29,0,10,0.5,30,0,85,2;1,1817,2,8175,3,315,20,3,57,46,155,1,62,1,87,1,36,1,80,4,77,-16,449,1;1,901,2,8235,3,345,20,3,57,47,155,1,62,1,87,1,36,1,51,63,28,24,29,0,10,0.5,30,0,85,2;1,1817,2,8235,3,315,20,3,57,47,155,1,62,1,87,1,36,1,80,4,77,-8,449,1;1,901,2,8295,3,345,20,3,57,48,155,1,62,1,87,1,36,1,51,63,28,12,29,0,10,0.5,30,0,85,2;1,1817,2,8295,3,315,20,3,57,48,155,1,62,1,87,1,36,1,80,4,77,-4,449,1;1,901,2,8355,3,345,20,3,57,49,155,1,62,1,87,1,36,1,51,63,28,6,29,0,10,0.5,30,0,85,2;1,1817,2,8355,3,315,20,3,57,49,155,1,62,1,87,1,36,1,80,4,77,-2,449,1;1,901,2,8415,3,345,20,3,57,50,155,1,62,1,87,1,36,1,51,63,28,3,29,0,10,0.5,30,0,85,2;1,1817,2,8415,3,315,20,3,57,50,155,1,62,1,87,1,36,1,80,4,77,-1,449,1;1,3620,2,7935,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,42,476,1,479,1,483,256,480,3,481,3,482,2;1,3620,2,7995,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,43,476,1,479,1,483,128,480,3,481,3,482,2;1,3620,2,8055,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,44,476,1,479,1,483,64,480,3,481,3,482,2;1,3620,2,8115,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,45,476,1,479,1,483,32,480,3,481,3,482,2;1,3620,2,8175,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,46,476,1,479,1,483,16,480,3,481,3,482,2;1,3620,2,8235,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,47,476,1,479,1,483,8,480,3,481,3,482,2;1,3620,2,8295,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,48,476,1,479,1,483,4,480,3,481,3,482,2;1,3620,2,8355,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,49,476,1,479,1,483,2,480,3,481,3,482,2;1,3620,2,8415,3,405,20,3,57,61,155,1,62,1,87,1,36,1,80,4,51,50,476,1,479,1,483,1,480,3,481,3,482,2;1,914,2,8239,3,446,20,3,155,4,6,315,128,0.5,129,0.5,31,MC44;1,914,2,8179,3,446,20,3,155,4,6,315,128,0.5,129,0.5,31,MS42;1,914,2,8119,3,446,20,3,155,4,6,315,128,0.5,129,0.5,31,My4y;1,914,2,8059,3,446,20,3,155,4,6,315,128,0.5,129,0.5,31,Ni40;1,914,2,8003,3,450,20,3,155,4,6,315,128,0.5,129,0.5,31,MTIuOA==;1,914,2,7943,3,450,20,3,155,4,6,315,128,0.5,129,0.5,31,MjUuNg==;1,914,2,8299,3,446,20,3,155,4,6,315,128,0.5,129,0.5,31,MC40;1,914,2,8359,3,446,20,3,155,4,6,315,128,0.5,129,0.5,31,MC4y;1,914,2,8419,3,445,20,3,155,4,6,315,128,0.5,129,0.5,31,MC4x;1,914,2,7883,3,448,20,3,155,9,6,315,21,8,128,0.5,129,0.5,31,LTUxLjI=;1,901,2,7815,3,345,20,3,57,61,155,1,62,1,87,1,36,1,51,63,28,0,29,0,10,0,30,0,85,2,71,62,100,1,544,1;1,914,2,7875,3,799,20,3,155,9,6,-90,21,8,31,TmVnYXRpdmUgQ2hlY2s=;1,914,2,7815,3,405,20,3,155,4,31,WCAtPg==;1,914,2,7815,3,615,20,3,155,4,31,WSAtPg==;
```

### Cosine, All Inputs

- **Entry Point:** Group 76
- **Input:** T1
- **Output:** T2
- **Extra Groups:** 79, 80
- **Extra Counters:** T3, I4, T5, T157 (=π/2=1.571), T314 (=π=3.142), T628 (=2π=6.283)

```txt
1,914,2,5985.5,3,1062.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJNCArIDEuMDAw;1,914,2,5979,3,1116,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,5985.5,3,1242.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJNCArIDEuMDAw;1,914,2,5979,3,1176,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIEk0;1,914,2,5979,3,1296,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIEk0;1,914,2,5991.5,3,1368.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAqIFQ1ICogVDU=;1,914,2,5990,3,1427,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAqIC0xLjAwMA==;1,3619,2,5625,3,1125,20,3,57,80,155,1,62,1,87,1,36,1,80,5,476,2,478,2,51,2,479,1,481,1,482,3;1,3619,2,5685,3,1125,20,3,57,80,155,1,62,1,87,1,36,1,80,5,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,5415,3,1185,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,2,481,1,482,3;1,914,2,5438,3,1245,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSAyLjAwMA==;1,914,2,5701,3,1178,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUNQ==;1,914,2,5641,3,1178,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUNQ==;1,3619,2,5235,3,1185,20,3,57,76,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,5,479,1,481,1,482,3;1,3619,2,5295,3,1185,20,3,57,76,155,1,62,1,87,1,36,1,80,1,95,628,476,2,477,2,478,1,51,6,479,1,481,4,482,3,485,1;1,3619,2,5355,3,1185,20,3,57,76,155,1,62,1,87,1,36,1,80,6,95,628,476,1,477,2,478,2,51,5,479,1,480,2,481,3,482,3;1,914,2,5251,3,1238,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUMQ==;1,914,2,5343,3,1270,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBybmQoVDEgLyBUNjI4KQ==;1,914,2,5400.5,3,1267.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAtIEk2ICogVDYyOA==;1,507,2,5580,3,1099,20,3,155,6,128,8;1,914,2,5580,3,1089,20,3,155,4,128,0.58,129,0.58,31,U2luZSBjb25kaXRpb25z;1,3620,2,5475,3,1185,20,3,57,76,155,1,62,1,87,1,36,1,80,5,51,79,71,80,476,2,479,1,480,3,481,3,482,2;1,3812,2,5520,3,1215,20,3,155,8,6,-45,21,7;1,3812,2,5520,3,1155,20,3,155,9,6,45,21,8;1,914,2,5501.5,3,1248.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gMC4wMDA=;1,3619,2,5625,3,1245,20,3,57,79,155,1,62,1,87,1,36,1,80,5,476,2,478,2,51,2,479,-1,481,1,482,3;1,3619,2,5685,3,1245,20,3,57,79,155,1,62,1,87,1,36,1,80,5,476,2,478,2,51,3,479,-1,481,1,482,3;1,914,2,5663.5,3,1320.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUNSAqIC0xLjAwMA==;1,914,2,5723.5,3,1320.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUNSAqIC0xLjAwMA==;1,3619,2,5901,3,1395,20,3,57,76,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,5905,3,1335,20,3,57,76,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,5909,3,1275,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5913,3,1215,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5917,3,1155,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5921,3,1095,20,3,57,76,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,5925,3,1035,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5871,3,1395,20,3,57,76,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,5875,3,1335,20,3,57,76,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,5879,3,1275,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5883,3,1215,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5887,3,1155,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5891,3,1095,20,3,57,76,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,5895,3,1035,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5841,3,1395,20,3,57,76,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,5845,3,1335,20,3,57,76,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,5849,3,1275,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5853,3,1215,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5857,3,1155,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5861,3,1095,20,3,57,76,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,5865,3,1035,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5811,3,1395,20,3,57,76,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,5815,3,1335,20,3,57,76,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,5819,3,1275,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5823,3,1215,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5827,3,1155,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5831,3,1095,20,3,57,76,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,5835,3,1035,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5781,3,1395,20,3,57,76,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,5785,3,1335,20,3,57,76,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,5789,3,1275,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5793,3,1215,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,5797,3,1155,20,3,57,76,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,5801,3,1095,20,3,57,76,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,5805,3,1035,20,3,57,76,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,914,2,5599,3,1190,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSArIFQxNTc=;1,3619,2,5565,3,1125,20,3,57,80,155,1,62,1,87,1,36,1,80,157,476,2,478,2,51,5,479,1,480,1,481,1,482,3;1,3619,2,5565,3,1245,20,3,57,79,155,1,62,1,87,1,36,1,80,157,476,2,478,2,51,5,479,1,480,2,481,1,482,3;1,914,2,5599,3,1316,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAtIFQxNTc=;
```

### Sine, All Inputs

- **Entry Point:** Group 75
- **Input:** T1
- **Output:** T2
- **Extra Groups:** 77, 78
- **Extra Counters:** T3, I4, T5, T157 (=π/2=1.571), T314 (=π=3.142), T628 (=2π=6.283)

```txt
1,3619,2,7041,3,1395,20,3,57,75,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,7045,3,1335,20,3,57,75,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,7049,3,1275,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,7053,3,1215,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,7057,3,1155,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,7061,3,1095,20,3,57,75,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,7065,3,1035,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,914,2,7125.5,3,1062.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJNCArIDEuMDAw;1,914,2,7119,3,1116,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,7125.5,3,1242.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJNCArIDEuMDAw;1,914,2,7119,3,1176,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIEk0;1,914,2,7119,3,1296,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIEk0;1,914,2,7131.5,3,1368.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAqIFQ1ICogVDU=;1,914,2,7130,3,1427,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAqIC0xLjAwMA==;1,3619,2,6765,3,1245,20,3,57,77,155,1,62,1,87,1,36,1,80,5,478,2,51,2,479,1,481,1,482,3;1,3619,2,6825,3,1245,20,3,57,77,155,1,62,1,87,1,36,1,80,5,478,2,51,3,479,1,481,1,482,3;1,3619,2,6555,3,1185,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,481,1,482,3;1,3619,2,7011,3,1395,20,3,57,75,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,7015,3,1335,20,3,57,75,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,7019,3,1275,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,7023,3,1215,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,7027,3,1155,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,7031,3,1095,20,3,57,75,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,7035,3,1035,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,6981,3,1395,20,3,57,75,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,6985,3,1335,20,3,57,75,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,6989,3,1275,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,6993,3,1215,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,6997,3,1155,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,7001,3,1095,20,3,57,75,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,7005,3,1035,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,6951,3,1395,20,3,57,75,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,6955,3,1335,20,3,57,75,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,6959,3,1275,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,6963,3,1215,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,6967,3,1155,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,6971,3,1095,20,3,57,75,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,6975,3,1035,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,6921,3,1395,20,3,57,75,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,480,3,481,1,482,3;1,3619,2,6925,3,1335,20,3,57,75,155,1,62,1,87,1,36,1,80,5,95,5,476,2,477,2,478,2,51,3,479,1,480,3,481,3,482,3;1,3619,2,6929,3,1275,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,6933,3,1215,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,6937,3,1155,20,3,57,75,155,1,62,1,87,1,36,1,80,4,476,1,478,2,51,3,479,1,480,4,481,1,482,3;1,3619,2,6941,3,1095,20,3,57,75,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,6945,3,1035,20,3,57,75,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,914,2,6788.5,3,1305.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSAxLjAwMA==;1,914,2,6848.5,3,1305.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAxLjAwMA==;1,914,2,6578,3,1245,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSAxLjAwMA==;1,3619,2,6375,3,1185,20,3,57,75,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,5,479,1,481,1,482,3;1,3619,2,6435,3,1185,20,3,57,75,155,1,62,1,87,1,36,1,80,1,95,628,476,2,477,2,478,1,51,6,479,1,481,4,482,3,485,1;1,3619,2,6495,3,1185,20,3,57,75,155,1,62,1,87,1,36,1,80,6,95,628,476,1,477,2,478,2,51,5,479,1,480,2,481,3,482,3;1,914,2,6391,3,1238,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUMQ==;1,914,2,6483,3,1270,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBybmQoVDEgLyBUNjI4KQ==;1,914,2,6540.5,3,1267.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAtIEk2ICogVDYyOA==;1,507,2,6720,3,1099,20,3,155,6,128,8;1,914,2,6720,3,1089,20,3,155,4,128,0.58,129,0.58,31,Q29zaW5lIGNvbmRpdGlvbnM=;1,3620,2,6615,3,1185,20,3,57,75,155,1,62,1,87,1,36,1,80,5,51,77,71,78,476,2,479,1,480,3,481,3,482,2;1,3812,2,6660,3,1215,20,3,155,8,6,-45,21,7;1,3619,2,6705,3,1245,20,3,57,77,155,1,62,1,87,1,36,1,80,157,476,2,478,2,51,5,479,1,480,2,481,1,482,3;1,3619,2,6705,3,1125,20,3,57,78,155,1,62,1,87,1,36,1,80,157,476,2,478,2,51,5,479,1,480,1,481,1,482,3;1,3812,2,6660,3,1155,20,3,155,9,6,45,21,8;1,3619,2,6765,3,1125,20,3,57,78,155,1,62,1,87,1,36,1,478,2,51,2,479,-1,481,1,482,3;1,3619,2,6825,3,1125,20,3,57,78,155,1,62,1,87,1,36,1,478,2,51,3,479,-1,481,1,482,3;1,914,2,6739,3,1316,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAtIFQxNTc=;1,914,2,6739,3,1196,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSArIFQxNTc=;1,914,2,6791.5,3,1188.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSAtMS4wMDA=;1,914,2,6851.5,3,1188.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAtMS4wMDA=;1,914,2,6641.5,3,1248.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gMC4wMDA=;
```

### Exponential, Range Reduced

- **Entry Point:** Group 71
- **Input:** T1
- **Output:** T2
- **Extra Groups:** 82-91
- **Extra Counters:** T3, I4, I5, T6, T8 (=ln 2=0.693)

```txt
1,3619,2,3255,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3263,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3259,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3267,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,914,2,3321,3,1176,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,3321.5,3,1296.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAqIFQ2;1,914,2,3321,3,1236,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAqIEk1;1,914,2,3327.5,3,1362.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSBJNSArIDEuMDAw;1,3619,2,2835,3,1245,20,3,57,71,155,1,62,1,87,1,36,1,478,2,51,2,479,1,481,1,482,3;1,3619,2,2895,3,1245,20,3,57,71,155,1,62,1,87,1,36,1,478,2,51,3,479,1,481,1,482,3;1,3619,2,2955,3,1245,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,481,1,482,3;1,3619,2,3225,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3233,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3229,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3237,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3195,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3203,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3199,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3207,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3165,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3173,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3169,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3177,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3135,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3143,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3139,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3147,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3105,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3113,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3109,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3117,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3075,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3083,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3079,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3087,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3045,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3053,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3049,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3057,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,3015,3,1335,20,3,57,71,155,1,62,1,87,1,36,1,478,1,51,5,479,1,480,1,481,1,482,3;1,3619,2,3023,3,1215,20,3,57,71,155,1,62,1,87,1,36,1,80,5,476,1,478,2,51,3,479,1,480,4,481,3,482,3;1,3619,2,3019,3,1275,20,3,57,71,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,3,479,1,480,3,481,1,482,3;1,3619,2,3027,3,1155,20,3,57,71,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,4,482,3;1,914,2,2858.5,3,1305.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSAxLjAwMA==;1,914,2,2918.5,3,1305.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAxLjAwMA==;1,914,2,2978,3,1305,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSAwLjAwMA==;1,3619,2,2655,3,1245,20,3,57,71,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,6,479,1,481,1,482,3;1,3619,2,2715,3,1245,20,3,57,71,155,1,62,1,87,1,36,1,80,6,95,8,476,2,477,2,478,1,51,4,479,1,481,4,482,3;1,3619,2,2775,3,1245,20,3,57,71,155,1,62,1,87,1,36,1,80,4,95,8,476,1,477,2,478,2,51,6,479,1,480,2,481,3,482,3;1,914,2,2670.5,3,1297.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDYgPSBUMQ==;1,914,2,2742.5,3,1309.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBUNiAvIFQ4;1,914,2,2814,3,1321,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAtIEk0ICogVDg=;1,3620,2,3387,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,82,476,1,479,1,483,16,480,3,481,3,482,2;1,3619,2,3387,3,1215,20,3,57,82,155,1,62,1,87,1,36,1,478,1,51,4,479,16,480,2,481,1,482,3;1,3619,2,3387,3,1155,20,3,57,82,155,1,62,1,87,1,36,1,478,2,51,2,479,65536,480,3,481,1,482,3;1,3620,2,3417,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,83,476,1,479,1,483,8,480,3,481,3,482,2;1,3619,2,3417,3,1215,20,3,57,83,155,1,62,1,87,1,36,1,478,1,51,4,479,8,480,2,481,1,482,3;1,3619,2,3417,3,1155,20,3,57,83,155,1,62,1,87,1,36,1,478,2,51,2,479,256,480,3,481,1,482,3;1,3620,2,3447,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,84,476,1,479,1,483,4,480,3,481,3,482,2;1,3619,2,3447,3,1215,20,3,57,84,155,1,62,1,87,1,36,1,478,1,51,4,479,4,480,2,481,1,482,3;1,3619,2,3447,3,1155,20,3,57,84,155,1,62,1,87,1,36,1,478,2,51,2,479,16,480,3,481,1,482,3;1,3620,2,3477,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,85,476,1,479,1,483,2,480,3,481,3,482,2;1,3619,2,3477,3,1215,20,3,57,85,155,1,62,1,87,1,36,1,478,1,51,4,479,2,480,2,481,1,482,3;1,3619,2,3477,3,1155,20,3,57,85,155,1,62,1,87,1,36,1,478,2,51,2,479,4,480,3,481,1,482,3;1,3620,2,3507,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,86,476,1,479,1,483,1,480,3,481,3,482,2;1,3619,2,3507,3,1215,20,3,57,86,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,2,481,1,482,3;1,3619,2,3507,3,1155,20,3,57,86,155,1,62,1,87,1,36,1,478,2,51,2,479,2,480,3,481,1,482,3;1,914,2,3432,3,1079,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIDY1NTM2LjAwMA==;1,914,2,3455.5,3,1085.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIDI1Ni4wMDA=;1,914,2,3482.5,3,1088.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIDE2LjAwMA==;1,914,2,3509,3,1092,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIDQuMDAw;1,914,2,3539,3,1092,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIDIuMDAw;1,914,2,3415.5,3,1370.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPj0gMTYuMDAw;1,914,2,3442.5,3,1367.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPj0gOC4wMDA=;1,914,2,3472.5,3,1367.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPj0gNC4wMDA=;1,914,2,3502.5,3,1367.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPj0gMi4wMDA=;1,914,2,3532.5,3,1367.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPj0gMS4wMDA=;1,3812,2,3387,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3417,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3447,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3477,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3507,3,1275,20,3,155,8,6,90,21,7;1,3620,2,3565,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,87,476,1,479,1,483,-16,480,3,481,3,482,4;1,3619,2,3565,3,1215,20,3,57,87,155,1,62,1,87,1,36,1,478,1,51,4,479,16,480,1,481,1,482,3;1,3619,2,3565,3,1155,20,3,57,87,155,1,62,1,87,1,36,1,478,2,51,2,479,65536,480,4,481,1,482,3;1,3620,2,3595,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,88,476,1,479,1,483,-8,480,3,481,3,482,4;1,3619,2,3595,3,1215,20,3,57,88,155,1,62,1,87,1,36,1,478,1,51,4,479,8,480,1,481,1,482,3;1,3619,2,3595,3,1155,20,3,57,88,155,1,62,1,87,1,36,1,478,2,51,2,479,256,480,4,481,1,482,3;1,3620,2,3625,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,89,476,1,479,1,483,-4,480,3,481,3,482,4;1,3619,2,3625,3,1215,20,3,57,89,155,1,62,1,87,1,36,1,478,1,51,4,479,4,480,1,481,1,482,3;1,3619,2,3625,3,1155,20,3,57,89,155,1,62,1,87,1,36,1,478,2,51,2,479,16,480,4,481,1,482,3;1,3620,2,3655,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,90,476,1,479,1,483,-2,480,3,481,3,482,4;1,3619,2,3655,3,1215,20,3,57,90,155,1,62,1,87,1,36,1,478,1,51,4,479,2,480,1,481,1,482,3;1,3619,2,3655,3,1155,20,3,57,90,155,1,62,1,87,1,36,1,478,2,51,2,479,4,480,4,481,1,482,3;1,3620,2,3685,3,1305,20,3,57,71,155,1,62,1,87,1,36,1,80,4,51,91,476,1,479,1,483,-1,480,3,481,3,482,4;1,3619,2,3685,3,1215,20,3,57,91,155,1,62,1,87,1,36,1,478,1,51,4,479,1,480,1,481,1,482,3;1,3619,2,3685,3,1155,20,3,57,91,155,1,62,1,87,1,36,1,478,2,51,2,479,2,480,4,481,1,482,3;1,914,2,3611.5,3,1079.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAvIDY1NTM2LjAwMA==;1,914,2,3635,3,1086,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAvIDI1Ni4wMDA=;1,914,2,3662,3,1089,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAvIDE2LjAwMA==;1,914,2,3688.5,3,1092.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAvIDQuMDAw;1,914,2,3718.5,3,1092.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAvIDIuMDAw;1,914,2,3598,3,1373,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPD0gLTE2LjAwMA==;1,914,2,3625,3,1370,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPD0gLTguMDAw;1,914,2,3655,3,1370,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPD0gLTQuMDAw;1,914,2,3685,3,1370,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPD0gLTIuMDAw;1,914,2,3715,3,1370,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPD0gLTEuMDAw;1,3812,2,3565,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3595,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3625,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3655,3,1275,20,3,155,8,6,90,21,7;1,3812,2,3685,3,1275,20,3,155,8,6,90,21,7;
```

### Logarithm, Range Reduced

- **Entry Point:** Group 92
- **Input:** T1
- **Output:** T2
- **Extra Groups:** 93-99, 111-113
- **Extra Counters:** T3, T4, T5, I6, I7, T8 (=ln 2=0.693), T9

```txt
1,3619,2,9015,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,80,9,476,2,478,2,51,4,479,1,481,1,482,3;1,3619,2,9045,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,2,51,4,479,1,480,2,481,1,482,3;1,3619,2,8955,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,80,9,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,8985,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,2,51,3,479,1,480,1,481,1,482,3;1,3619,2,9075,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,4,479,1,480,4,481,1,482,3;1,3619,2,9105,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,80,4,476,2,478,2,51,5,479,2,481,1,482,3;1,3619,2,9135,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,80,5,476,2,478,2,51,2,479,1,481,1,482,3;1,3619,2,9165,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,1,51,6,479,1,481,1,482,3;1,3619,2,9247,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,4,95,4,476,2,477,2,478,2,51,5,479,1,480,3,481,3,482,3;1,3619,2,9251,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,1,51,6,479,2,480,1,481,3,482,3;1,3619,2,9255,3,1215,20,3,57,92,155,1,62,1,87,1,36,1,80,5,95,6,476,2,477,1,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,9277,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,4,95,4,476,2,477,2,478,2,51,5,479,1,480,3,481,3,482,3;1,3619,2,9281,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,1,51,6,479,2,480,1,481,3,482,3;1,3619,2,9285,3,1215,20,3,57,92,155,1,62,1,87,1,36,1,80,5,95,6,476,2,477,1,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,9307,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,4,95,4,476,2,477,2,478,2,51,5,479,1,480,3,481,3,482,3;1,3619,2,9311,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,1,51,6,479,2,480,1,481,3,482,3;1,3619,2,9315,3,1215,20,3,57,92,155,1,62,1,87,1,36,1,80,5,95,6,476,2,477,1,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,9337,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,4,95,4,476,2,477,2,478,2,51,5,479,1,480,3,481,3,482,3;1,3619,2,9341,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,1,51,6,479,2,480,1,481,3,482,3;1,3619,2,9345,3,1215,20,3,57,92,155,1,62,1,87,1,36,1,80,5,95,6,476,2,477,1,478,2,51,2,479,1,480,1,481,4,482,3;1,3619,2,9367,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,4,95,4,476,2,477,2,478,2,51,5,479,1,480,3,481,3,482,3;1,3619,2,9371,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,478,1,51,6,479,2,480,1,481,3,482,3;1,3619,2,9375,3,1215,20,3,57,92,155,1,62,1,87,1,36,1,80,5,95,6,476,2,477,1,478,2,51,2,479,1,480,1,481,4,482,3;1,914,2,9151,3,1328,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUNQ==;1,914,2,9188,3,1335,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSAxLjAwMA==;1,914,2,9140.5,3,1347.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNCAqIDIuMDAw;1,914,2,9103,3,1340,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDQgPSBUNCAvIFQz;1,914,2,9080,3,1347,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDQgPSBUNCAtIDEuMDAw;1,914,2,9030.5,3,1327.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDQgPSBUOQ==;1,914,2,9020,3,1347,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyArIDEuMDAw;1,914,2,8970.5,3,1327.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUOQ==;1,914,2,9440.5,3,1247.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQ1IC8gSTY=;1,914,2,9435.5,3,1302.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBJNiArIDIuMDAw;1,914,2,9441.5,3,1368.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAqIFQ0ICogVDQ=;1,3620,2,8595,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,93,476,2,479,1,483,65536,480,3,481,3,482,2;1,3619,2,8595,3,1245,20,3,57,93,155,1,62,1,87,1,36,1,478,1,51,7,479,16,480,1,481,1,482,3;1,3619,2,8595,3,1185,20,3,57,93,155,1,62,1,87,1,36,1,478,2,51,9,479,65536,480,4,481,1,482,3;1,3620,2,8625,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,94,476,2,479,1,483,256,480,3,481,3,482,2;1,3619,2,8625,3,1245,20,3,57,94,155,1,62,1,87,1,36,1,478,1,51,7,479,8,480,1,481,1,482,3;1,3619,2,8625,3,1185,20,3,57,94,155,1,62,1,87,1,36,1,478,2,51,9,479,256,480,4,481,1,482,3;1,3620,2,8655,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,95,476,2,479,1,483,16,480,3,481,3,482,2;1,3619,2,8655,3,1245,20,3,57,95,155,1,62,1,87,1,36,1,478,1,51,7,479,4,480,1,481,1,482,3;1,3619,2,8655,3,1185,20,3,57,95,155,1,62,1,87,1,36,1,478,2,51,9,479,16,480,4,481,1,482,3;1,3620,2,8685,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,96,476,2,479,1,483,4,480,3,481,3,482,2;1,3619,2,8685,3,1245,20,3,57,96,155,1,62,1,87,1,36,1,478,1,51,7,479,2,480,1,481,1,482,3;1,3619,2,8685,3,1185,20,3,57,96,155,1,62,1,87,1,36,1,478,2,51,9,479,4,480,4,481,1,482,3;1,3620,2,8715,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,97,476,2,479,1,483,2,480,3,481,3,482,2;1,3619,2,8715,3,1245,20,3,57,97,155,1,62,1,87,1,36,1,478,1,51,7,479,1,480,1,481,1,482,3;1,3619,2,8715,3,1185,20,3,57,97,155,1,62,1,87,1,36,1,478,2,51,9,479,2,480,4,481,1,482,3;1,914,2,8640,3,1109,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAvIDY1NTM2LjAwMA==;1,914,2,8663.5,3,1115.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAvIDI1Ni4wMDA=;1,914,2,8690.5,3,1118.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAvIDE2LjAwMA==;1,914,2,8717,3,1122,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAvIDQuMDAw;1,914,2,8747,3,1122,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAvIDIuMDAw;1,914,2,8634,3,1411,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgPj0gNjU1MzYuMDAw;1,914,2,8657.5,3,1404.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgPj0gMjU2LjAwMA==;1,914,2,8684.5,3,1401.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgPj0gMTYuMDAw;1,914,2,8711,3,1398,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgPj0gNC4wMDA=;1,914,2,8741,3,1398,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgPj0gMi4wMDA=;1,3812,2,8595,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8625,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8655,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8685,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8715,3,1305,20,3,155,8,6,90,21,7;1,3619,2,8535,3,1245,20,3,57,92,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,9,479,1,481,1,482,3;1,914,2,8550.5,3,1297.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgPSBUMQ==;1,3620,2,8775,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,98,476,2,479,65536,483,2,480,3,481,3,482,4;1,3619,2,8775,3,1245,20,3,57,98,155,1,62,1,87,1,36,1,478,1,51,7,479,16,480,2,481,1,482,3;1,3619,2,8775,3,1185,20,3,57,98,155,1,62,1,87,1,36,1,478,2,51,9,479,65536,480,3,481,1,482,3;1,3620,2,8805,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,99,476,2,479,256,483,2,480,3,481,3,482,4;1,3619,2,8805,3,1245,20,3,57,99,155,1,62,1,87,1,36,1,478,1,51,7,479,8,480,2,481,1,482,3;1,3619,2,8805,3,1185,20,3,57,99,155,1,62,1,87,1,36,1,478,2,51,9,479,256,480,3,481,1,482,3;1,3620,2,8835,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,111,476,2,479,16,483,2,480,3,481,3,482,4;1,3619,2,8835,3,1245,20,3,57,111,155,1,62,1,87,1,36,1,478,1,51,7,479,4,480,2,481,1,482,3;1,3619,2,8835,3,1185,20,3,57,111,155,1,62,1,87,1,36,1,478,2,51,9,479,16,480,3,481,1,482,3;1,3620,2,8865,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,112,476,2,479,4,483,2,480,3,481,3,482,4;1,3619,2,8865,3,1245,20,3,57,112,155,1,62,1,87,1,36,1,478,1,51,7,479,2,480,2,481,1,482,3;1,3619,2,8865,3,1185,20,3,57,112,155,1,62,1,87,1,36,1,478,2,51,9,479,4,480,3,481,1,482,3;1,3620,2,8895,3,1335,20,3,57,92,155,1,62,1,87,1,36,1,80,9,51,113,476,2,479,2,483,2,480,3,481,3,482,4;1,3619,2,8895,3,1245,20,3,57,113,155,1,62,1,87,1,36,1,478,1,51,7,479,1,480,2,481,1,482,3;1,3619,2,8895,3,1185,20,3,57,113,155,1,62,1,87,1,36,1,478,2,51,9,479,2,480,3,481,1,482,3;1,914,2,8820,3,1109,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAqIDY1NTM2LjAwMA==;1,914,2,8843.5,3,1115.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAqIDI1Ni4wMDA=;1,914,2,8870.5,3,1118.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAqIDE2LjAwMA==;1,914,2,8897,3,1122,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAqIDQuMDAw;1,914,2,8927,3,1122,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDkgPSBUOSAqIDIuMDAw;1,914,2,8824.5,3,1421.5,108,10,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgKiA2NTUzNi4wMDAgPD0gMi4=;1,914,2,8854.5,3,1421.5,108,11,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgKiAyNTYuMDAwIDw9IDIuMDA=;1,914,2,8884.5,3,1421.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgKiAxNi4wMDAgPD0gMi4wMDA=;1,914,2,8911,3,1418,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgKiA0LjAwMCA8PSAyLjAwMA==;1,914,2,8941,3,1418,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDkgKiAyLjAwMCA8PSAyLjAwMA==;1,3812,2,8775,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8805,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8835,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8865,3,1305,20,3,155,8,6,90,21,7;1,3812,2,8895,3,1305,20,3,155,8,6,90,21,7;1,914,2,8885,3,1482,108,10,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,8908.5,3,1475.5,108,11,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MA==;1,3619,2,9525,3,1275,20,3,57,92,155,1,62,1,87,1,36,1,80,7,95,8,476,1,477,2,478,2,51,2,479,1,480,1,481,3,482,3;1,914,2,9564,3,1351,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIEk3ICogVDg=;
```

### Inverse Tangent, Chebyshev

- **Entry Point:** Group 114
- **Input:** T1
- **Output:** T2
- **Extra Groups:** 115-118
- **Extra Counters:** T3, T4, T157 (=π/2=1.571)

```txt
1,3619,2,9675,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,2,481,1,482,3;1,3619,2,9885,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,62280,481,1,482,3;1,3619,2,9915,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,440219,480,4,481,1,482,3;1,3619,2,9945,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,9975,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,4,476,2,478,2,51,2,479,1,480,3,481,1,482,3;1,3619,2,10365,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,369893,480,4,481,1,482,3;1,3619,2,10095,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,10125,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,4,476,2,478,2,51,2,479,1,480,3,481,1,482,3;1,3619,2,10335,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,371310,481,1,482,3;1,3619,2,10245,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,10275,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,4,476,2,478,2,51,2,479,1,480,3,481,1,482,3;1,3619,2,10185,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,-6233,481,1,482,3;1,3619,2,10215,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,384314,480,4,481,1,482,3;1,3619,2,10395,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3619,2,10425,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,4,476,2,478,2,51,2,479,1,480,3,481,1,482,3;1,3619,2,10035,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,-184798,481,1,482,3;1,3619,2,10065,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,538311,480,4,481,1,482,3;1,3619,2,10485,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,-32,481,1,482,3;1,3619,2,10515,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,478,2,51,3,479,204263,480,4,481,1,482,3;1,3619,2,10545,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,3,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,914,2,10003,3,1340,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIFQ0;1,914,2,9972.5,3,1339.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,10153,3,1340,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIFQ0;1,914,2,10122.5,3,1339.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,10303,3,1340,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIFQ0;1,914,2,10272.5,3,1339.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,10453,3,1340,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIFQ0;1,914,2,10422.5,3,1339.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,10572.5,3,1339.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQz;1,914,2,9698.5,3,1335.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSAwLjAwMA==;1,914,2,9921,3,1348,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSA2MjI4MC4wMDA=;1,914,2,9966.5,3,1363.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIDQ0MDIxOS4wMDA=;1,914,2,10116.5,3,1363.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIDUzODMxMS4wMDA=;1,914,2,10077,3,1354,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAtMTg0Nzk4LjAwMA==;1,914,2,10266.5,3,1363.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIDM4NDMxNC4wMDA=;1,914,2,10220.5,3,1347.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAtNjIzMy4wMDA=;1,914,2,10416.5,3,1363.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIDM2OTg5My4wMDA=;1,914,2,10374.5,3,1351.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAzNzEzMTAuMDAw;1,914,2,10566.5,3,1363.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMyAvIDIwNDI2My4wMDA=;1,914,2,10514.5,3,1341.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAtMzIuMDAw;1,3620,2,10605,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,1,51,117,476,2,479,1,483,1,480,3,481,3,482,1,578,1;1,3812,2,10605,3,1245,20,3,155,8,6,90,21,7;1,3619,2,9705,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,4,479,1,481,1,482,3;1,914,2,9720.5,3,1327.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDQgPSBUMQ==;1,3620,2,10699,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,1,51,116,476,2,479,1,480,3,481,3,482,3;1,3812,2,10699,3,1245,20,3,155,8,6,90,21,7;1,3619,2,9829,3,1185,20,3,57,116,155,1,62,1,87,1,36,1,478,2,51,4,479,-1,480,3,481,4,482,3;1,3619,2,10699,3,1185,20,3,57,118,155,1,62,1,87,1,36,1,478,2,51,2,479,-1,480,3,481,1,482,3;1,3619,2,10635,3,1185,20,3,57,117,155,1,62,1,87,1,36,1,80,157,476,2,478,2,51,2,479,1,480,1,481,1,482,3;1,3620,2,9735,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,1,51,115,476,2,479,1,483,1,480,3,481,3,482,1,578,1;1,3812,2,9735,3,1245,20,3,155,8,6,90,21,7;1,3620,2,9829,3,1275,20,3,57,114,155,1,62,1,87,1,36,1,80,1,51,116,476,2,479,1,480,3,481,3,482,3;1,3812,2,9829,3,1245,20,3,155,8,6,90,21,7;1,3619,2,9765,3,1185,20,3,57,115,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,4,479,1,480,4,481,4,482,3;1,3619,2,9735,3,1185,20,3,57,115,155,1,62,1,87,1,36,1,478,2,51,4,479,1,481,4,482,3;1,3619,2,10605,3,1185,20,3,57,117,155,1,62,1,87,1,36,1,478,2,51,2,479,-1,480,3,481,1,482,3;1,914,2,10722.5,3,1335.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEgPCAwLjAwMA==;1,914,2,10729.5,3,1119,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIC0xLjAwMA==;1,914,2,10642,3,1349,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,QUJTKFQxKSA-IDEuMDAw;1,914,2,9852.5,3,1335.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEgPCAwLjAwMA==;1,914,2,9772,3,1349,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,QUJTKFQxKSA-IDEuMDAw;1,914,2,9859.5,3,1119,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDQgPSBUNCAqIC0xLjAwMA==;1,914,2,9755,3,1134,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDQgPSAxLjAwMA==;1,914,2,9789,3,1130,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDQgPSBUNCAvIFQx;1,914,2,10639.5,3,1119.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIC0xLjAwMA==;1,914,2,10665,3,1124,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiArIFQxNTc=;
```

### Square Root, Newton

- **Entry Point:** Group 119
- **Input:** T1
- **Output:** T2
- **Extra Groups:** 120-129
- **Extra Counters:** T3, T4, T5, T6, T141 (=√2=1.414)

```txt
1,3619,2,11587,3,1395,20,3,57,119,155,1,62,1,87,1,36,1,80,5,95,3,476,2,477,2,478,2,51,4,479,1,481,4,482,3;1,3619,2,11591,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,3,95,4,476,2,477,2,478,2,51,2,479,0.5,481,1,482,3;1,3619,2,11595,3,1275,20,3,57,119,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,11617,3,1395,20,3,57,119,155,1,62,1,87,1,36,1,80,5,95,3,476,2,477,2,478,2,51,4,479,1,481,4,482,3;1,3619,2,11621,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,3,95,4,476,2,477,2,478,2,51,2,479,0.5,481,1,482,3;1,3619,2,11625,3,1275,20,3,57,119,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,11647,3,1395,20,3,57,119,155,1,62,1,87,1,36,1,80,5,95,3,476,2,477,2,478,2,51,4,479,1,481,4,482,3;1,3619,2,11651,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,3,95,4,476,2,477,2,478,2,51,2,479,0.5,481,1,482,3;1,3619,2,11655,3,1275,20,3,57,119,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,11677,3,1395,20,3,57,119,155,1,62,1,87,1,36,1,80,5,95,3,476,2,477,2,478,2,51,4,479,1,481,4,482,3;1,3619,2,11681,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,3,95,4,476,2,477,2,478,2,51,2,479,0.5,481,1,482,3;1,3619,2,11685,3,1275,20,3,57,119,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,11707,3,1395,20,3,57,119,155,1,62,1,87,1,36,1,80,5,95,3,476,2,477,2,478,2,51,4,479,1,481,4,482,3;1,3619,2,11711,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,3,95,4,476,2,477,2,478,2,51,2,479,0.5,481,1,482,3;1,3619,2,11715,3,1275,20,3,57,119,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,3,479,1,481,1,482,3;1,3619,2,11737,3,1395,20,3,57,119,155,1,62,1,87,1,36,1,80,5,95,3,476,2,477,2,478,2,51,4,479,1,481,4,482,3;1,3619,2,11741,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,3,95,4,476,2,477,2,478,2,51,2,479,0.5,481,1,482,3;1,3619,2,11745,3,1275,20,3,57,119,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,3,479,1,481,1,482,3;1,914,2,11787.5,3,1284.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSBUMg==;1,914,2,11816,3,1373,108,12,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSAoVDMgKyBUNCkgKiAwLjU=;1,914,2,11869,3,1426,108,12,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDA=;1,914,2,11799.5,3,1416.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDQgPSBUNSAvIFQz;1,3619,2,11505,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,478,2,51,3,479,2,481,4,482,3;1,914,2,11528.5,3,1395.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDMgPSAyLjAwMA==;1,3620,2,11325,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,125,476,2,479,1,483,65536,480,3,481,3,482,2;1,3619,2,11145,3,1155,20,3,57,120,155,1,62,1,87,1,36,1,478,2,51,5,479,65536,480,3,481,1,482,3;1,3620,2,11355,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,126,476,2,479,1,483,256,480,3,481,3,482,2;1,3619,2,11175,3,1155,20,3,57,121,155,1,24,5,62,1,87,1,36,1,478,2,51,5,479,256,480,3,481,1,482,3;1,3620,2,11385,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,127,476,2,479,1,483,16,480,3,481,3,482,2;1,3619,2,11205,3,1155,20,3,57,122,155,1,62,1,87,1,36,1,478,2,51,5,479,16,480,3,481,1,482,3;1,3620,2,11415,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,128,476,2,479,1,483,4,480,3,481,3,482,2;1,3619,2,11235,3,1155,20,3,57,123,155,1,62,1,87,1,36,1,478,2,51,5,479,4,480,3,481,1,482,3;1,3620,2,11445,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,129,476,2,479,1,483,2,480,3,481,3,482,2;1,3619,2,11265,3,1155,20,3,57,124,155,1,62,1,87,1,36,1,478,2,51,5,479,2,480,3,481,1,482,3;1,914,2,11370,3,1079,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAvIDY1NTM2LjAwMA==;1,914,2,11393.5,3,1085.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAvIDI1Ni4wMDA=;1,914,2,11420.5,3,1088.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAvIDE2LjAwMA==;1,914,2,11447,3,1092,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAvIDQuMDAw;1,914,2,11477,3,1092,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAvIDIuMDAw;1,914,2,11364,3,1441,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gNjU1MzYuMDAw;1,914,2,11387.5,3,1434.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gMjU2LjAwMA==;1,914,2,11414.5,3,1431.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gMTYuMDAw;1,914,2,11441,3,1428,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gNC4wMDA=;1,914,2,11471,3,1428,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPj0gMi4wMDA=;1,3812,2,11145,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11175,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11205,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11235,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11265,3,1341,20,3,155,8,6,90,21,7;1,3620,2,11145,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,120,476,2,479,65536,483,2,480,3,481,3,482,4;1,3619,2,11325,3,1155,20,3,57,125,155,1,62,1,87,1,36,1,478,2,51,5,479,65536,480,4,481,1,482,3;1,3620,2,11175,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,121,476,2,479,256,483,2,480,3,481,3,482,4;1,3619,2,11355,3,1155,20,3,57,126,155,1,62,1,87,1,36,1,478,2,51,5,479,256,480,4,481,1,482,3;1,3620,2,11205,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,122,476,2,479,16,483,2,480,3,481,3,482,4;1,3619,2,11385,3,1155,20,3,57,127,155,1,62,1,87,1,36,1,478,2,51,5,479,16,480,4,481,1,482,3;1,3620,2,11235,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,123,476,2,479,4,483,2,480,3,481,3,482,4;1,3619,2,11415,3,1155,20,3,57,128,155,1,62,1,87,1,36,1,478,2,51,5,479,4,480,4,481,1,482,3;1,3620,2,11265,3,1365,20,3,57,119,155,1,62,1,87,1,36,1,80,5,51,124,476,2,479,2,483,2,480,3,481,3,482,4;1,3619,2,11445,3,1155,20,3,57,129,155,1,62,1,87,1,36,1,478,2,51,5,479,2,480,4,481,1,482,3;1,914,2,11190,3,1079,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAqIDY1NTM2LjAwMA==;1,914,2,11213.5,3,1085.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAqIDI1Ni4wMDA=;1,914,2,11240.5,3,1088.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAqIDE2LjAwMA==;1,914,2,11267,3,1092,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAqIDQuMDAw;1,914,2,11297,3,1092,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDUgPSBUNSAqIDIuMDAw;1,914,2,11194.5,3,1451.5,108,13,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgKiA2NTUzNi4wMDAgPD0gMi4=;1,914,2,11224.5,3,1451.5,108,14,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgKiAyNTYuMDAwIDw9IDIuMDA=;1,914,2,11254.5,3,1451.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgKiAxNi4wMDAgPD0gMi4wMDA=;1,914,2,11281,3,1448,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgKiA0LjAwMCA8PSAyLjAwMA==;1,914,2,11311,3,1448,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgKiAyLjAwMCA8PSAyLjAwMA==;1,3812,2,11325,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11355,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11385,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11415,3,1341,20,3,155,8,6,90,21,7;1,3812,2,11445,3,1341,20,3,155,8,6,90,21,7;1,914,2,11255,3,1512,108,13,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,11278.5,3,1505.5,108,14,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MA==;1,914,2,11183.5,3,1235.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAvIDI1Ni4wMDA=;1,914,2,11210.5,3,1238.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAvIDE2LjAwMA==;1,914,2,11237,3,1242,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAvIDQuMDAw;1,914,2,11267,3,1242,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAvIDIuMDAw;1,914,2,11363.5,3,1235.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAqIDI1Ni4wMDA=;1,914,2,11390.5,3,1238.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAqIDE2LjAwMA==;1,914,2,11417,3,1242,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAqIDQuMDAw;1,914,2,11447,3,1242,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAqIDIuMDAw;1,914,2,11475.5,3,1243.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,VDYgPSBUNiAqIFQxNDE=;1,914,2,11298.6,3,1240.4,108,15,20,3,155,13,6,45,21,9,128,0.4,129,0.4,31,VDYgPSBUNiAqIFQxNDEgKiAwLjU=;1,914,2,11343.4,3,1195.6,108,15,20,3,155,13,6,45,21,9,128,0.4,129,0.4,31,MDA=;1,3619,2,11055,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,1,476,2,478,2,51,5,479,1,481,1,482,3;1,914,2,11070.5,3,1387.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDUgPSBUMQ==;1,3619,2,11085,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,478,2,51,6,479,1,481,1,482,3;1,914,2,11108.5,3,1395.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDYgPSAxLjAwMA==;1,3619,2,11325,3,1305,20,3,57,125,155,1,62,1,87,1,36,1,478,2,51,6,479,256,480,3,481,1,482,3;1,3619,2,11355,3,1305,20,3,57,126,155,1,62,1,87,1,36,1,478,2,51,6,479,16,480,3,481,1,482,3;1,3619,2,11145,3,1305,20,3,57,120,155,1,62,1,87,1,36,1,478,2,51,6,479,256,480,4,481,1,482,3;1,3619,2,11265,3,1305,20,3,57,124,155,1,62,1,87,1,36,1,80,141,476,2,478,2,51,6,479,0.5,480,3,481,1,482,3;1,3619,2,11175,3,1305,20,3,57,121,155,1,62,1,87,1,36,1,478,2,51,6,479,16,480,4,481,1,482,3;1,3619,2,11205,3,1305,20,3,57,122,155,1,62,1,87,1,36,1,478,2,51,6,479,4,480,4,481,1,482,3;1,3619,2,11235,3,1305,20,3,57,123,155,1,62,1,87,1,36,1,478,2,51,6,479,2,480,4,481,1,482,3;1,3619,2,11385,3,1305,20,3,57,127,155,1,62,1,87,1,36,1,478,2,51,6,479,4,480,3,481,1,482,3;1,3619,2,11415,3,1305,20,3,57,128,155,1,62,1,87,1,36,1,478,2,51,6,479,2,480,3,481,1,482,3;1,3619,2,11445,3,1305,20,3,57,129,155,1,62,1,87,1,36,1,80,141,476,2,478,2,51,6,479,1,480,3,481,1,482,3;1,3619,2,11865,3,1335,20,3,57,119,155,1,62,1,87,1,36,1,80,6,476,2,478,2,51,2,479,1,480,3,481,4,482,3;1,914,2,11893,3,1400,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDIgPSBUMiAqIFQ2;
```

### Tangent, Composed

- **Entry Point:** Group 130
- **Input:** T12
- **Output:** T13
- **Extra Groups:** 75 (=Sine), 76 (=Cosine)
- **Extra Counters:** T1, T2, T3, I4, T5, T157 (=π/2=1.571), T314 (=π=3.142), T628 (=2π=6.283)

```txt
1,3619,2,645,3,1875,20,3,57,130,155,1,62,1,87,1,36,1,80,12,476,2,478,2,51,1,479,1,481,1,482,3;1,3619,2,765,3,1875,20,3,57,130,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,13,479,1,481,1,482,3;1,3619,2,885,3,1875,20,3,57,130,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,13,479,1,480,4,481,1,482,3;1,1268,2,705,3,1875,20,3,57,130,155,1,62,1,87,1,36,1,51,75;1,1268,2,825,3,1875,20,3,57,130,155,1,62,1,87,1,36,1,51,76;1,914,2,916.5,3,1947,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEzID0gVDEzIC8gVDI=;1,914,2,661,3,1931.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEgPSBUMTI=;1,914,2,781,3,1931.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEzID0gVDI=;
```

### Square Root, Composed

- **Entry Point:** Group 130
- **Input:** T12
- **Output:** T13
- **Extra Groups:** 71 (=Exponential), 92 (=Logarithm)
- **Extra Counters:** T1, T2, T3, T4, T5, I6, T6, T7, T8 (=ln 2=0.693), T9

```txt
1,3619,2,1815,3,1875,20,3,57,131,155,1,62,1,87,1,36,1,80,12,476,2,478,2,51,1,479,1,481,1,482,3;1,3619,2,1935,3,1875,20,3,57,131,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,1,479,0.5,481,1,482,3;1,3619,2,2055,3,1875,20,3,57,131,155,1,62,1,87,1,36,1,80,2,476,2,478,2,51,13,479,1,481,1,482,3;1,1268,2,1875,3,1875,20,3,57,131,155,1,62,1,87,1,36,1,51,92;1,1268,2,1995,3,1875,20,3,57,131,155,1,62,1,87,1,36,1,51,71;1,914,2,1831,3,1931.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEgPSBUMTI=;1,914,2,1967.5,3,1948,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEgPSBUMiAqIDAuNTAw;1,914,2,2071,3,1931.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,VDEzID0gVDI=;
```

### Multiple Entries, Thousand + Million

- **Entry Point (Decomposition):** Group 136
- **Entry Point (Recombination):** Group 137
- **Input:** I1
- **Output:** I3, I4, I5
- **Extra Counters:** I2

```txt
1,3619,2,4005,3,1905,20,3,57,136,155,1,62,1,87,1,36,1,80,1,476,1,478,1,51,3,479,1e+06,481,1,482,4,485,2;1,3619,2,3945,3,1905,20,3,57,136,155,1,62,1,87,1,36,1,80,1,476,1,478,1,51,2,479,1,481,1,482,3;1,3619,2,4065,3,1905,20,3,57,136,155,1,62,1,87,1,36,1,80,3,476,1,478,1,51,2,479,1e+06,480,2,481,1,482,3;1,3619,2,4125,3,1905,20,3,57,136,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,4,479,1000,481,1,482,4,485,2;1,3619,2,4245,3,1905,20,3,57,136,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,5,479,1,481,1,482,3;1,3619,2,4185,3,1905,20,3,57,136,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,2,479,1000,480,2,481,1,482,3;1,914,2,3960,3,1957,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMQ==;1,914,2,4056.5,3,1993.5,108,16,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STMgPSBGTFIoSTEgLyAxMDAwMDA=;1,914,2,4125.5,3,2062.5,108,16,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MC4wMDAp;1,914,2,4113,3,1990,108,17,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEkzICogMTAwMDA=;1,914,2,4179,3,2056,108,17,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAuMDAw;1,914,2,4175,3,1992,108,18,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBGTFIoSTIgLyAxMDAwLjA=;1,914,2,4234.5,3,2051.5,108,18,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAp;1,914,2,4260,3,1957,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSBJMg==;1,914,2,4231,3,1988,108,19,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEk0ICogMTAwMC4=;1,914,2,4288,3,2045,108,19,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,4005,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,4065,3,1848,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,4125,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,4185,3,1848,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,3619,2,4575,3,1905,20,3,57,137,155,1,62,1,87,1,36,1,80,3,476,1,478,1,51,1,479,1e+06,481,1,482,3;1,3619,2,4635,3,1905,20,3,57,137,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,1,479,1000,480,1,481,1,482,3;1,3619,2,4695,3,1905,20,3,57,137,155,1,62,1,87,1,36,1,80,5,476,1,478,1,51,1,479,1,480,1,481,1,482,3;1,914,2,4626,3,1993,108,20,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMyAqIDEwMDAwMDAuMDA=;1,914,2,4681.5,3,2048.5,108,20,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MA==;1,914,2,4681,3,1988,108,21,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk0ICogMTAwMC4=;1,914,2,4738,3,2045,108,21,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,4721.5,3,1968.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk1;1,914,2,4245,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;
```

### Multiple Entries, Lakh + Crore

- **Entry Point (Decomposition):** Group 138
- **Entry Point (Recombination):** Group 139
- **Input:** I1
- **Output:** I3, I4, I5, I6
- **Extra Counters:** I2

```txt
1,3619,2,5205,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,1,476,1,478,1,51,3,479,1e+07,481,1,482,4,485,2;1,3619,2,5145,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,1,476,1,478,1,51,2,479,1,481,1,482,3;1,3619,2,5265,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,3,476,1,478,1,51,2,479,1e+07,480,2,481,1,482,3;1,3619,2,5325,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,4,479,100000,481,1,482,4,485,2;1,914,2,5160,3,1957,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMQ==;1,914,2,5256.5,3,1993.5,108,22,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STMgPSBGTFIoSTEgLyAxMDAwMDA=;1,914,2,5328.5,3,2065.5,108,22,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAuMDAwKQ==;1,914,2,5433,3,1990,108,23,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEk0ICogMTAwMDA=;1,914,2,5496,3,2053,108,23,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MC4wMDA=;1,914,2,5376.5,3,1993.5,108,24,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBGTFIoSTIgLyAxMDAwMDA=;1,914,2,5442,3,2059,108,24,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,LjAwMCk=;1,914,2,5205,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,5265,3,1848,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,5325,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,3619,2,5745,3,1905,20,3,57,139,155,1,62,1,87,1,36,1,80,3,476,1,478,1,51,1,479,1e+06,481,1,482,3;1,3619,2,5865,3,1905,20,3,57,139,155,1,62,1,87,1,36,1,80,5,476,1,478,1,51,1,479,1000,480,1,481,1,482,3;1,3619,2,5925,3,1905,20,3,57,139,155,1,62,1,87,1,36,1,80,6,476,1,478,1,51,1,479,1,480,1,481,1,482,3;1,914,2,5796,3,1993,108,25,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMyAqIDEwMDAwMDAwLjA=;1,914,2,5854.5,3,2051.5,108,25,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDA=;1,914,2,5911,3,1988,108,26,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk1ICogMTAwMC4=;1,914,2,5968,3,2045,108,26,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,5951.5,3,1968.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk2;1,3619,2,5385,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,2,479,1e+06,480,2,481,1,482,3;1,914,2,5313,3,1990,108,27,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEkzICogMTAwMDA=;1,914,2,5382.5,3,2059.5,108,27,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAwLjAwMA==;1,914,2,5385,3,1848,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,3619,2,5445,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,5,479,1000,481,1,482,4,485,2;1,914,2,5495,3,1992,108,28,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSBGTFIoSTIgLyAxMDAwLjA=;1,914,2,5554,3,2051,108,28,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAp;1,914,2,5445,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,3619,2,5565,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,6,479,1,481,1,482,3;1,3619,2,5505,3,1905,20,3,57,138,155,1,62,1,87,1,36,1,80,5,476,1,478,1,51,2,479,1000,480,2,481,1,482,3;1,914,2,5580,3,1957,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBJMg==;1,914,2,5551,3,1988,108,29,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEk1ICogMTAwMC4=;1,914,2,5608,3,2045,108,29,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,5505,3,1848,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,5565,3,1845,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,3619,2,5805,3,1905,20,3,57,139,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,1,479,100000,480,1,481,1,482,3;1,914,2,5853,3,1990,108,30,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk0ICogMTAwMDA=;1,914,2,5916,3,2053,108,30,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MC4wMDA=;
```

### Multiple Entries, Enemy Example

- **Entry Point (Decomposition):** Group 140
- **Entry Point (Recombination):** Group 141
- **Input:** I1
- **Output:** I2, I3, I4, I5, I6
- **Extra Counters:** I7, I9

```txt
1,3619,2,7485,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,1,95,9,476,1,477,1,478,1,51,8,479,1,481,4,482,3;1,3619,2,7575,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,101,480,4,481,1,482,3;1,3619,2,7635,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,2,479,1,481,4,482,3;1,3619,2,7725,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,51,480,4,481,1,482,3;1,3619,2,7785,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,3,479,1,481,4,482,3;1,3619,2,7815,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,3,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,7875,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,21,480,4,481,1,482,3;1,3619,2,7935,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,4,479,1,481,4,482,3;1,3619,2,8025,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,21,480,4,481,1,482,3;1,3619,2,8085,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,5,479,1,481,4,482,3;1,914,2,7512,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STggPSBJMSAvIEk5;1,914,2,7616.5,3,2043.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDEwMS4wMDA=;1,914,2,7662,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJNyAvIEk5;1,914,2,7763.5,3,2040.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDUxLjAwMA==;1,914,2,7812,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STMgPSBJNyAvIEk5;1,914,2,7913.5,3,2040.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDIxLjAwMA==;1,914,2,7962,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJNyAvIEk5;1,914,2,8063.5,3,2040.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDIxLjAwMA==;1,914,2,8112,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSBJNyAvIEk5;1,914,2,8153,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEk1ICogSTk=;1,3619,2,8205,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,476,1,478,1,51,6,479,1,481,4,482,3;1,914,2,8220.5,3,2017.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBJNw==;1,914,2,7635,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7665,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7785,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7815,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7935,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7965,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,8085,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,8115,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7485,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7515,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7650,3,1845,20,3,155,4,128,0.75,129,0.75,31,SGVhbHRo;1,914,2,7800,3,1845,20,3,155,4,128,0.75,129,0.75,31,QXR0YWNr;1,914,2,7950,3,1845,20,3,155,4,128,0.75,129,0.75,31,RGVmLg==;1,914,2,8100,3,1845,20,3,155,4,128,0.75,129,0.75,31,RXZhc2lvbg==;1,914,2,8205,3,1845,20,3,155,4,128,0.75,129,0.75,31,U3BlZWQ=;1,914,2,7500,3,1845,20,3,155,4,128,0.75,129,0.75,31,KEV4Y2Vzcyk=;1,3619,2,7665,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,2,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,7515,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,8,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,7965,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,4,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,8115,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,5,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,914,2,8003,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEk0ICogSTk=;1,914,2,7853,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEkzICogSTk=;1,914,2,7703,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEkyICogSTk=;1,914,2,7553,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEk4ICogSTk=;1,3619,2,7425,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,1,476,1,478,1,51,7,479,1,481,3,482,3;1,914,2,7440.5,3,2017.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJMQ==;1,914,2,8205,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,3619,2,8685,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,1,479,134946,481,1,482,3;1,3619,2,8745,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,3,476,1,478,1,51,1,479,2646,480,1,481,1,482,3;1,3619,2,8805,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,1,479,126,480,1,481,1,482,3;1,3619,2,8865,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,5,476,1,478,1,51,1,479,6,480,1,481,1,482,3;1,3619,2,8925,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,6,476,1,478,1,51,1,479,1,480,1,481,1,482,3;1,914,2,8736,3,1993,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMiAqIDEzNDk0Ni4wMDA=;1,914,2,8791,3,1988,108,31,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEkzICogMjY0Ni4=;1,914,2,8848,3,2045,108,31,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,8851,3,1988,108,32,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk0ICogMTI2LjA=;1,914,2,8904.5,3,2041.5,108,32,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDA=;1,914,2,8911,3,1988,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk1ICogNi4wMDA=;1,914,2,8951,3,1968,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk2;1,3619,2,7365,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,46,480,1,481,3,482,3;1,3619,2,7335,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,1.36295e+07,481,3,482,3;1,914,2,7403,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSArIDQ2LjAwMA==;1,914,2,7381,3,2048,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSAxMzYyOTUwMC4wMDA=;
```

### Multiple Entries, Binary-maxxing

- **Entry Point (Decomposition):** Group 142
- **Entry Point (Recombination):** Group 143
- **Input:** I1
- **Output:** I3, I4, I5, I6
- **Extra Counters:** I2, I24 (=16777216), I31 (=-2147483648)

```txt
1,3619,2,7485,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,1,95,9,476,1,477,1,478,1,51,8,479,1,481,4,482,3;1,3619,2,7575,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,101,480,4,481,1,482,3;1,3619,2,7635,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,2,479,1,481,4,482,3;1,3619,2,7725,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,51,480,4,481,1,482,3;1,3619,2,7785,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,3,479,1,481,4,482,3;1,3619,2,7815,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,3,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,7875,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,21,480,4,481,1,482,3;1,3619,2,7935,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,4,479,1,481,4,482,3;1,3619,2,8025,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,21,480,4,481,1,482,3;1,3619,2,8085,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,95,9,476,1,477,1,478,1,51,5,479,1,481,4,482,3;1,914,2,7512,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STggPSBJMSAvIEk5;1,914,2,7616.5,3,2043.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDEwMS4wMDA=;1,914,2,7662,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJNyAvIEk5;1,914,2,7763.5,3,2040.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDUxLjAwMA==;1,914,2,7812,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STMgPSBJNyAvIEk5;1,914,2,7913.5,3,2040.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDIxLjAwMA==;1,914,2,7962,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJNyAvIEk5;1,914,2,8063.5,3,2040.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSAvIDIxLjAwMA==;1,914,2,8112,3,2029,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSBJNyAvIEk5;1,914,2,8153,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEk1ICogSTk=;1,3619,2,8205,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,7,476,1,478,1,51,6,479,1,481,4,482,3;1,914,2,8220.5,3,2017.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBJNw==;1,914,2,7635,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7665,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7785,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7815,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7935,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7965,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,8085,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,8115,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7485,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,7515,3,1908,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,7650,3,1845,20,3,155,4,128,0.75,129,0.75,31,SGVhbHRo;1,914,2,7800,3,1845,20,3,155,4,128,0.75,129,0.75,31,QXR0YWNr;1,914,2,7950,3,1845,20,3,155,4,128,0.75,129,0.75,31,RGVmLg==;1,914,2,8100,3,1845,20,3,155,4,128,0.75,129,0.75,31,RXZhc2lvbg==;1,914,2,8205,3,1845,20,3,155,4,128,0.75,129,0.75,31,U3BlZWQ=;1,914,2,7500,3,1845,20,3,155,4,128,0.75,129,0.75,31,KEV4Y2Vzcyk=;1,3619,2,7665,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,2,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,7515,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,8,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,7965,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,4,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,3619,2,8115,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,5,95,9,476,1,477,1,478,1,51,7,479,1,480,2,481,3,482,3;1,914,2,8003,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEk0ICogSTk=;1,914,2,7853,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEkzICogSTk=;1,914,2,7703,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEkyICogSTk=;1,914,2,7553,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJNyAtIEk4ICogSTk=;1,3619,2,7425,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,80,1,476,1,478,1,51,7,479,1,481,3,482,3;1,914,2,7440.5,3,2017.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STcgPSBJMQ==;1,914,2,8205,3,1905,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,3619,2,8685,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,1,479,134946,481,1,482,3;1,3619,2,8745,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,3,476,1,478,1,51,1,479,2646,480,1,481,1,482,3;1,3619,2,8805,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,1,479,126,480,1,481,1,482,3;1,3619,2,8865,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,5,476,1,478,1,51,1,479,6,480,1,481,1,482,3;1,3619,2,8925,3,1905,20,3,57,141,155,1,62,1,87,1,36,1,80,6,476,1,478,1,51,1,479,1,480,1,481,1,482,3;1,914,2,8736,3,1993,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMiAqIDEzNDk0Ni4wMDA=;1,914,2,8791,3,1988,108,31,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEkzICogMjY0Ni4=;1,914,2,8848,3,2045,108,31,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDAw;1,914,2,8851,3,1988,108,32,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk0ICogMTI2LjA=;1,914,2,8904.5,3,2041.5,108,32,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDA=;1,914,2,8911,3,1988,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk1ICogNi4wMDA=;1,914,2,8951,3,1968,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk2;1,3619,2,9915,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,1,476,1,478,1,51,2,479,1,481,1,482,3;1,3619,2,9975,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,2,95,24,476,1,477,1,478,1,51,3,479,1,481,4,482,3,485,2;1,3619,2,10005,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,3,95,24,476,1,477,1,478,1,51,2,479,1,480,2,481,3,482,3;1,3619,2,10095,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,4,476,1,478,1,51,2,479,65536,480,2,481,4,482,3;1,3619,2,10065,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,4,479,65536,481,3,482,4;1,3619,2,10185,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,5,476,1,478,1,51,2,479,256,480,2,481,4,482,3;1,3619,2,10155,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,5,479,256,481,3,482,4;1,3619,2,10245,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,2,476,1,478,1,51,6,479,1,481,3,482,4;1,3620,2,10305,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,4,51,145,476,1,479,1,483,128,480,3,481,3,482,1;1,3619,2,10305,3,1845,20,3,57,145,155,1,62,1,87,1,36,1,478,1,51,4,479,256,480,2,481,1,482,3;1,3812,2,10305,3,1905,20,3,155,8,6,90,21,7;1,3620,2,10335,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,5,51,146,476,1,479,1,483,128,480,3,481,3,482,1;1,3619,2,10335,3,1845,20,3,57,146,155,1,62,1,87,1,36,1,478,1,51,5,479,256,480,2,481,1,482,3;1,3812,2,10335,3,1905,20,3,155,8,6,90,21,7;1,3620,2,10365,3,1935,20,3,57,142,155,1,62,1,87,1,36,1,80,6,51,147,476,1,479,1,483,128,480,3,481,3,482,1;1,3619,2,10365,3,1845,20,3,57,147,155,1,62,1,87,1,36,1,478,1,51,6,479,256,480,2,481,1,482,3;1,3812,2,10365,3,1905,20,3,155,8,6,90,21,7;1,914,2,10260.5,3,1987.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPSBJMg==;1,914,2,10018.5,3,2015.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STMgPSBGTFIoSTIgLyBJMjQp;1,914,2,10046,3,2013,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEkzICogSTI0;1,914,2,10113,3,2020,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPSBJMiAvIDY1NTM2LjAwMA==;1,914,2,10143,3,2020,108,33,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEk0ICogNjU1MzY=;1,914,2,10203,3,2080,108,33,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,LjAwMA==;1,914,2,10196.5,3,2013.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPSBJMiAvIDI1Ni4wMDA=;1,914,2,10231,3,2018,108,34,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMiAtIEk1ICogMjU2LjA=;1,914,2,10284.5,3,2071.5,108,34,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDA=;1,914,2,9930,3,1987,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STIgPSBJMQ==;1,914,2,10335,3,2002,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPiAxMjguMDAw;1,914,2,10395,3,2002,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPiAxMjguMDAw;1,914,2,10401.5,3,1777.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STYgPSBJNiAtIDI1Ni4wMDA=;1,914,2,10371.5,3,1777.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STUgPSBJNSAtIDI1Ni4wMDA=;1,914,2,10341.5,3,1777.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STQgPSBJNCAtIDI1Ni4wMDA=;1,914,2,9975,3,1875,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,10005,3,1878,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,10065,3,1875,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,10095,3,1878,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,10155,3,1875,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,10185,3,1878,20,3,155,4,6,90,128,0.5,129,0.5,31,UmVtYWluZGVy;1,914,2,10245,3,1875,20,3,155,4,6,90,128,0.5,129,0.5,31,UmlnaHQgU2hpZnQ=;1,914,2,10365,3,2002,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPiAxMjguMDAw;1,3620,2,11055,3,1935,20,3,57,143,155,1,62,1,87,1,36,1,80,4,51,148,476,1,479,1,480,3,481,3,482,3;1,3619,2,11055,3,1845,20,3,57,148,155,1,62,1,87,1,36,1,478,1,51,4,479,256,480,1,481,1,482,3;1,3812,2,11055,3,1905,20,3,155,8,6,90,21,7;1,3620,2,11085,3,1935,20,3,57,143,155,1,62,1,87,1,36,1,80,5,51,149,476,1,479,1,480,3,481,3,482,3;1,3619,2,11085,3,1845,20,3,57,149,155,1,62,1,87,1,36,1,478,1,51,5,479,256,480,1,481,1,482,3;1,3812,2,11085,3,1905,20,3,155,8,6,90,21,7;1,3620,2,11115,3,1935,20,3,57,143,155,1,62,1,87,1,36,1,80,6,51,150,476,1,479,1,480,3,481,3,482,3;1,3619,2,11115,3,1845,20,3,57,150,155,1,62,1,87,1,36,1,478,1,51,6,479,256,480,1,481,1,482,3;1,3812,2,11115,3,1905,20,3,155,8,6,90,21,7;1,914,2,11078.5,3,1995.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STQgPCAwLjAwMA==;1,914,2,11138.5,3,1995.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STYgPCAwLjAwMA==;1,914,2,11151.5,3,1777.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STYgPSBJNiArIDI1Ni4wMDA=;1,914,2,11121.5,3,1777.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STUgPSBJNSArIDI1Ni4wMDA=;1,914,2,11091.5,3,1777.5,20,3,155,13,6,45,21,9,128,0.5,129,0.5,31,STQgPSBJNCArIDI1Ni4wMDA=;1,914,2,11108.5,3,1995.5,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STUgPCAwLjAwMA==;1,914,2,10035,3,1770,20,3,155,4,6,45,128,0.5,129,0.5,31,TnVtIFNpZ24gLT4gMXN0IFNpZ24=;1,3619,2,11205,3,1935,20,3,57,143,155,1,25,2,24,5,62,1,87,1,36,1,80,3,95,24,476,1,477,1,478,1,51,1,479,1,481,3,482,3;1,3619,2,11265,3,1935,20,3,57,143,155,1,25,2,24,5,62,1,87,1,36,1,80,4,476,1,478,1,51,1,479,65536,480,1,481,3,482,3;1,3619,2,11325,3,1935,20,3,57,143,155,1,25,2,24,5,62,1,87,1,36,1,80,5,476,1,478,1,51,1,479,256,480,1,481,3,482,3;1,3619,2,11385,3,1935,20,3,57,143,155,1,25,2,24,5,62,1,87,1,36,1,80,6,476,1,478,1,51,1,479,1,480,1,481,3,482,4;1,914,2,11371,3,2018,108,35,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk1ICogMjU2LjA=;1,914,2,11424.5,3,2071.5,108,35,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,MDA=;1,914,2,11313,3,2020,108,36,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk0ICogNjU1MzY=;1,914,2,11373,3,2080,108,36,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,LjAwMA==;1,914,2,11235,3,2002,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMyAqIEkyNA==;1,914,2,11411,3,1998,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STEgPSBJMSArIEk2;1,914,2,11250,3,1860,20,3,155,4,6,45,128,0.5,129,0.5,31,MXN0IFNpZ24gLT4gTnVtIFNpZ24=;1,3619,2,7365,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,46,480,1,481,3,482,3;1,3619,2,7335,3,1965,20,3,57,140,155,1,62,1,87,1,170,1,36,1,478,1,51,9,479,1.36295e+07,481,3,482,3;1,914,2,7403,3,2040,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSBJOSArIDQ2LjAwMA==;1,914,2,7381,3,2048,20,3,155,13,6,-45,21,9,128,0.5,129,0.5,31,STkgPSAxMzYyOTUwMC4wMDA=;
```