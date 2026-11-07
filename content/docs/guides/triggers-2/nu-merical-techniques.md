---
draft: false
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

-

{{< /callout >}}

# Motivation

If you’ve tried out game making, you might be familiar with a few fancy operations. Maybe you’ve used sine or cosine for directional movement, or perhaps you might have heard of the normal distribution for random values.

In any case, these aren’t normally values that you can calculate by hand, but rather something you put in a scientific calculator during your math exam. That said, how they arrive at those results might still be a mystery to you.

Even if you don’t know what functions are or how to use them, this guide can help you get a basic understanding of various number tricks you can implement in Geometry Dash.

{{< callout context="note" icon="outline/photo" >}}

Hello! I’m Kelly, your favorite soybean drone! I talk a lot, so don’t mind me if I go too deep!

{{< /callout >}}

# 0. A Gentle Introduction into Variables

{{< callout context="success" icon="outline/movie" >}}

Place down a counter…

Go to “Edit Special”, then set “ItemID” to 1.

It should now show up as `C:1`.

Now, when you press ▶️, the object will change to `0`.

{{< /callout >}}

If you managed to successfully reproduce this, congratulations! You have made what’s known as a **variable**.

The details of it are not important for now, but this allows you to have numbers in your level.

Well… sort of. The keen in you might be yelling at me: “This is the 0️⃣ object, you can only make more 0️⃣s from this!”.

You’re valid to say that, as we haven’t added anything to this number. Let’s put something in there.

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

Place down a counter…

Go to “Edit Special”, then set “ItemID” to 2.

It should now show up as `C:2`.

Now, when you press ▶️, the object will change to `0`.

{{< /callout >}}

You might have noticed that the number doesn’t change when you hit the pickup trigger. You have just made your second variable!

{{< callout context="success" icon="outline/movie" >}}

Copy and paste that pickup trigger to a separate location.

Go to “Edit Object”, then set “ItemID” to 2.

When you press ▶️, the new counter will start at `0` as normal.

When you touch the pickup trigger, only that number will change to `4`!

The other number stays the same!

{{< /callout >}}

You can, of course, call them by their ItemID. Variable 1, variable 2, variable 68, so on and so forth. But what if you want to describe what they actually do? This is where names come in.

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Names

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

The maximum that a 32 bit number can hold is the number $1$, doubled 32 times, which amounts to $4,294,967,296$ (a huge number!), but since computers also needs to store the number $0$, the actual cap is bumped down to $4,294,967,295$.

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

The method Geometry Dash (as well as a lot of other programs) uses to store these numbers can get really complicated, you can refer to [Kahan's FPA Lecture Notes](https://people.eecs.berkeley.edu/~wkahan/ieee754status/IEEE754.PDF) for further information. That page is almost 30 years old at the time of writing!

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

{{< callout context="caution" title="Note: Item Edit Clamping" icon="outline/info-circle" >}}

Numbers lose precision as they get bigger in magnitude, TimerIDs like all other floats can only theoretically store second-accurate time up to `16,777,216.00` before it starts "skipping" (or counting by twos).

The Item Edit trigger sets a soft limit for what timer values it can output, between `-9,999,999.00` and `9,999,999.00`. You can look to range reduction as a workaround, it is discussed later in this guide.

{{< /callout >}}

{{< callout context="note" icon="outline/photo" >}}

(Derp mechanic Kelly sitting in a maintenance room) If you can't handle big jumpy timers, might as well bump it down to some arbitrary maximum...

{{< /callout >}}

{{< callout context="caution" title="Note: Limits" icon="outline/info-circle" >}}

The magnitude of TimerIDs can go as small as $1.1755\times 10^{-38}$ and as large as $3.403\times10^{38}$.

{{< /callout >}}

{{< callout context="caution" title="Note: Double-Precision format" icon="outline/info-circle" >}}

As with any 64-bit value, these are values you have to implement by yourself. IEEE 754 designates 1 bit for the sign, 11 bits for the exponent and 53 bits for the mantissa.

(Diagram of IEEE 754 double-precision float)

These numbers cover a much greater range (up to $1.79\times10^{308}$) and achieve a precision level of 16-17 significant digits.

{{< /callout >}}

## Easing Math Functions thing

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

ChuckOlate did provide some info, this was a convo with Niten

{{< /callout >}}

# 2. Numerical IDs as trigger values

{{< callout context="note" icon="outline/photo" >}}

(Kelly points up like Plato) I, the wise man…

{{< /callout >}}

One problem you’ll see frequently with move triggers is that they only allow you to type in hard-coded values, no variables - how terrible!

For simple uses this is not a problem, as you can always place more triggers as you need, but if we wanted to warp the distance dynamically over time, the manual way can get  clunky and messy and may not even cover all the cases we need.

This is possible, though you will need more than one of these triggers, as well as a dedicated setup to go with it.

## Basic IDs to Values Conversion

Here’s a problem: You are making a background such that it changes color based on the number of times you click during the transition.

{{< callout context="success" icon="outline/movie" >}}

(You clicked 5 times, blue)

(You clicked 2 times, orange)

(You clicked 3 times, yellow)

{{< /callout >}}

The idea is that for every distinct value, you assign to it a particular color, 1 for red, 2 for orange, 5 for blue. To pull this off, you need a series of conditions: If 1, show red; If 2, show orange. This is achievable with the item compare trigger.

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

Luckily, there's already a better method discussed previously, which is looking at it, how computers interpret it: binary!

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

A detailed explanation about how this works can be found in [Binary Stacking](/docs/guides/triggers-2/stacking-properties/#4-binary-stacking) section of the guide. I will only go through a basic example to illustrate how it can be applied.

{{< /callout >}}

We're moving objects within 1000 units, so all that's needed is 10 bits. Let’s see how you can make use of this:

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

Enabling **Small Step** will make your input values three times smaller, so inputting “+30” into the X input will move your object 1 block to the right instead of 3.

{{< /callout >}}

This allows us to increase our movement precision by a factor of 3. Here is how it works:

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

We have taken a look at how ID conversion works when moving objects. One chain moves in one direction, so four of them will move in all four directions!

Normally, the object will start moving from its current position. To position the object relative to an origin, you can prefix the movement by relocating to the origin object.

{{< callout context="success" icon="outline/movie" >}}

(A move trigger, then four ID conversion chains)

First, move an object to the origin.

Then, move up (+Y), down (-Y), left (-X) and right(+X).

▶️

{{< /callout >}}

## Using IDs as Spawn Delays

{{< callout context="tip" title="Further Reading: TPS Loops" icon="outline/edit" >}}

The main idea behind spawn delays involves creating a [TPS Loop](making-loops/#5-tps-loop), provided in the Making Loops guide.

{{< /callout >}}

The game runs triggers at a constant rate of 240 times within a second, or 240 tps, so a TPS loop will run exactly 240 times in a second.

The method used to create and break the TPS loop will be slightly different in this guide, as we'll be using ItemIDs rather than collision boxes. The core idea should remain the same.

I will make use of an example that pulses the background yelllow after 3.5 seconds, it's my favorite color after all!

{{< callout context="success" icon="outline/movie" >}}
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

They work by having an internal cumulative delay that checks every tick if the specified time has passed. A spawn trigger calling itself would add its delay on top of the now-negative cumulative delay, syncing the loop back to real time.

*(Diagram of game tick alignment with spawn delay)*

Making the delay too small would make it insufficient for the cumulative delay to catch up with new tick window.

Placing an item compare trigger helps reset the cumulative delay to 0, allowing the spawn trigger to keep pushing the delay positive and align itself onto game ticks.

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

{{< callout context="success" icon="outline/movie" >}}

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

By multiplying the polynomial by $x$, we have effectively made its number corner one higher! You may have noticed that I’m working through the function from the lowest to the highest “corner number,” and you’ll be correct for that.

The idea behind this is you have an extra “accumulator” variable, it increases from $x^0, x^1, x^2, \ldots$ all the way to $x^8$. The output then appends this accumulator multiplied by a mod.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

$x^0$ is **always** equal to 1.

$x^1$ is **always** equal to $x$.

{{< /callout >}}

Let’s take a look at the first step.

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

`T3 = T3 · T1`

The `T3` variable now contains $x^1$.

`T2 = T2 + T3 · 132`

{{< /callout >}}

Our second step calculates $136x$ and adds it to the output total.

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

T:2 =

{{< /callout >}}

You will see that with this iterative method you can easily tackle any amount of “corner number” within a reasonable amount of objects and time.

### The alternative method

Watch.

{{< callout context="success" icon="outline/movie" >}}

$24 x^3 - 68 x^2 - 154 + 421$

`T2 = T2 · T1`

$24 x^4 - 68 x^3 - 154 x^2 + 421 x$

{{< /callout >}}

The core idea behind this transformation is absurdly simple, you shift everything to a higher “corner number.”

An interesting result is that the number that comes first, will have the highest corner number. This means, rather than working backwards from $x^0$, we start from the highest ($x^8$) and work our way down.

Let’s look at the first two steps with this method:

{{< callout context="success" icon="outline/movie" >}}

`T2 = 24`

Now for the second step,

`T2 = T2 · T1`

`T2 = T2 - 68`

{{< /callout >}}

The steps here are deceptively easy, just multiply by `T1` then add the mod. However, it is important that you know the underlying concept behind this method, it will be very useful once you start working with other breeds of functions.

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

`I5 = I5 + 1.000`

`T3 = T3 · T1`

`T3 = T3 / I5`

Now, add the fraction to the total

`T2 = T2 + T3`

*Spawn + Multi + Group*

{{< /callout >}}

We will see that the more we run this, the closer `T3` approaches zero. Since factorials are already baked in the term, we no longer have to worry about number limits. This means we can finally go past 13 repeats and get eerily close to the actual value! Amazing!

## Periodic Functions

You might know a thing or two about rotations, the observation at hand here is that when a wheel rotates 360^{\circ}, it makes a full turn. Turning a wheel 15^{\circ} produces the same result as turning it 375^{\circ}.

{{< callout context="note" icon="outline/photo" >}}

(Kelly spinning a disc upright)

{{< /callout >}}

If you've used the Rotate trigger before, you will know what the "x360" option does, leaving the resulting rotation intact while adding one or two additional twists in the process:

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

Normally, you'll be taught the definition of sine and cosine involving angles in **degrees** (^{\circ}). However, most computer programs, including Geometry Dash, will involve calculations with **radians**.

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

{{< callout context="success" icon="outline/movie" >}}

T:6=2.40 (Input) T:7 = ??? (Output) T:8 = ??? (Term) I:9 = 5

`T8 = T8 · -1.000`

`T8 = T8 · T6 * T6`

`T8 = T8 / I9`

`I9 = I9 + 1.000` $n \to n+1$

`T8 = T8 / I9`

`T7 = T7 + T8`

`I9 = I9 + 1.000` $n+1 \to n+2$

*(Spawn + Trigger + Multi + G21)*

{{< /callout >}}

As stated earlier, both functions share the same loop. This means that they differ only by the first step. Let's take a look at both and see how they differ.

Let's first look at one for $\cos(x)$:

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}
C:12 = 13176195 C:13 = 4194304 T:314 ($\pi$) T:628 ($2\pi$)

`T314 = I12 / I13`

`T157 = T314 / 2.000`

`T628 = T314 · 2.000`

▶️

T:157=1.57 T:314=3.14 T:315=6.28

{{< /callout >}}

Now, we can try getting the remainder once again with a more accurate value of $\pi$:

{{< callout context="success" icon="outline/movie" >}}

T:6 (Remainder) C:10 (Quotient) T:11=24000 (Input) T:628 ($2\pi$)

`T6 = T11`

`I10 = FLR(T6 / T628)`

`T6 = T6 - I10 · T628`

▶️

T:6=4.515

{{< /callout >}}

This value is now practically the same as our calculator's! We're still not done with it, though we're not done yet. Flooring the quotient will yield a number from $0$ to $2\pi$. However, our Taylor expansions are centered at $0$, so we want to shift our range of remainders to between $-\pi$ and $\pi$.

This is as simple as changing the NA-operation to `RND`; when the fractional part surpasses $0.5$, the division rounds the quotient up, causing the remainder to be negative:

{{< callout context="success" icon="outline/movie" >}}

T:6 (Remainder) C:10 (Quotient) T:11=24000 (Input) T:628 ($2\pi$)

`I10 = RND(T6 / T628)`

▶️

T:6=-1.769

{{< /callout >}}

We have effectively made sine and cosine reasonably accurate for all values. However, don't get too excited about that just yet, because there is one more ad-hoc optimization for our functions.

The sine function input can be further constrained between $-\frac \pi 2$ and $\frac \pi 2$ through the trigonometric property:

$$ \sin(x) = \cos \left( x - \frac \pi 2 \right) = -\cos \left( x + \frac \pi 2 \right) $$

To implement it, we branch into two conditions: negative and positive.

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}
T:13=66.60 (Input) T:14 (Working) T:15 (Output) C:16 (Quotient)

`I16 = RND(T13)` (Division by 1 is ignored)

`T14 = T13 - I16` (Multiplication by 1 is ignored)

`T15 = T14 * T14`

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

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}
T:2=1.20 (Output) C:7=12 (Quotient)

`I7 >= 16.000` → `I7 = I7 - 16.000` `T2 = T2 * 65536.000`

`I7 >= 8.000` → `I7 = I7 - 8.000` `T2 = T2 * 256.000`

`I7 >= 4.000` → `I7 = I7 - 4.000` `T2 = T2 * 16.000`

`I7 >= 2.000` → `I7 = I7 - 2.000` `T2 = T2 * 4.000`

`I7 >= 1.000` → `I7 = I7 - 1.000` `T2 = T2 * 2.000`

▶️

T:2=4914.77 C:7=0

{{< /callout >}}

If the quotient `I7` turns out to be negative, the doubling numbers also continue on the negative side, generating numbers that halve every time ($0.5, 0.25, 0.125, 0.0625, etc.$)

A similar ID conversion setup can be used to handle negative values of `I7`, forcing the number back to $0$ regardless of what it currently holds:

{{< callout context="success" icon="outline/movie" >}}
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



{{< callout context="success" icon="outline/movie" >}}
T:1 = 12 (Input) T:2 (Output) T:3 ($m-1$) T:4 ($z$) T:5 (${2z^k}$) C:6 ($2k + 1$)

The first step is initialization

`T4 = T1 + 1` $m - 1$

`T3 = T1 - 1` $m + 1$

`T4 = T4 - T3` $z = \frac {m-1} {m+1}$

`T5 = T4 · 2.000` (First term is $2z$)

`T2 = T5` (Add first term to the series)

`I6 = 1.000` (Denominator is currently 1)

Now, we start the loop.

`T5 = T5 * T4 * T4` ($z \to z^{k + 2}$)

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

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}
T:1=0.0005369 (Input) C:7=0 (Exponent)

`T1 · 65536.000 <= 1.000` → `I7 = I7 - 16.000` `T1 = T1 * 65536.000`

`T1 · 256.000 <= 1.000` → `I7 = I7 - 8.000` `T1 = T1 * 256.000`

`T1 · 16.000 <= 1.000` → `I7 = I7 - 4.000` `T1 = T1 * 16.000`

`T1 · 4.000 <= 1.000` → `I7 = I7 - 2.000` `T1 = T1 * 4.000`

`T1 · 2.000 <= 1.000` → `I7 = I7 - 1.000` `T1 = T1 * 2.000`

▶️

T:1=1.10 C:7=-11
{{< /callout >}}

This should extend our range of logarithms to work with any TimerID.

The final step is to add back the logarithm of the exponent. This is a linear term, so a bare multiplication is all that's needed.

{{< callout context="success" icon="outline/movie" >}}
T:2=0.095 (Output) C:7=9 (Exponent) T:8=0.693 ($\ln(2)$)

`T2 = T2 + I7 · T8`

▶️

T:2=6.33
{{< /callout >}}

And we are finally done! I hope so... correct?

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="success" icon="outline/movie" >}}
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

A more clever way to work with this is via special "Chebyshev" points: solutions to a collection of polynomials known as **Chebyshev polynomials**. These data points are strategically placed such that you eliminate the nasty wobble and get really accurate results.

{{< callout context="tip" title="Further Reading" icon="outline/book" >}}

For a more detailed explanation of how Lagrange interpolators work, you can check out [University of Oslo's Approximation Theory Lecture Notes](https://www.uio.no/studier/emner/matnat/math/MAT3110/h26/undervisningsmateriale/lecture7.pdf).

You can also check out [lecture slides provided by San Diego State University](https://jmahaffy.sdsu.edu/courses/s10/math541/lectures/pdf/week12/lecture.pdf) for a guide on least-squares data fitting.

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

{{< callout context="success" icon="outline/movie" >}}

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

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Range reduction for Newton

{{< /callout >}}

## Function Composition

Did you know that you can combine multiple smaller functions into one big function? Yes? Not surprising at all? Oh well...

{{< callout context="note" icon="outline/photo" >}}

Kelly thinking

{{< /callout >}}

### The (Normal) Tangent - $\tan(x)$

The tangent is just defined as:

$$ \tan(x) = \frac {\sin(x)}{\cos(x)} $$

Super easy, right?

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}

G:10 (Exp) G:11 (Log) T:1 (Exp/Log Input), T:2 (Exp/Log Output) T:12=1.4 (Input) T:13 (Output)

`T1 = T12`

*Spawn G10* (Logarithm)

`T1 = T2 / 2.000` (Divide logarithm by 2 before exponentiating)

*Spawn G11* (Exponential)

`T13 = T2` (Wrap output)

{{< /callout >}}

While it may give more accurate results than naive Newton's Method, it generally does not perform as well once range reduction comes into play, and the computational overhead for this kind of exchange is quite expensive. This example only exists here for demonstration purposes.

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Mingle computations to avoid trigger limits

{{< /callout >}}

## Appendix: Powers of 8 reduction

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Powers of 8 reduction

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

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="success" icon="outline/movie" >}}
C:1=280038212 (Input) C:5=36 (Lakhs to add)

`I1 = I1 + I5 · 100000.00`

C:1=283638212

{{< /callout >}}

We have effectively added $36$ lakhs to our wallet, bringing the number to $28,36,38,212$.

Let's say we spend some lakhs such that $24$ remain. You know what the solution is: subtract all lakhs, then add $24$.

{{< callout context="success" icon="outline/movie" >}}
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

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Enemy Example

{{< /callout >}}

## Binary-maxxing, Sign-maxxing

You may have realized that we're not making use of the last digit, or even the leftovers of very large or very small quantities. We have also left out all of the potentially useful negative numbers like $-2,067,420,666$. This is partly due to how ItemIDs are stored: binary, not decimal.

To recap, here is how a number is really stored in game:

$$ -2067420666_{10} = 1~~0000100110001011010101000000110_2 $$

The leading bit acts as the sign. It is $1$, meaning that the number is negative.

Suppose we want four numbers that range from $-128$ to $127$. There are 256 values in total, which fit into 8 bits (256 is the 8th doubling number).

Our number salami will look as follows:

$$ 1\space\space00001001\space\space\space\space1\space\space1000101\space\space\space\space1\space\space0101010\space\space\space\space0\space\space0000110 $$

In decimal, this corresponds to $-124,-59,-42,6$. Note that the second number $-59$ would be $197$, but due to the negative sign bit it gets subtracted by $256$

Processing this chain would proceed rather normally for the latter 3 numbers, using a binary knife, chopping them all into raw values, and making them negative when they are above certain threshold (in this case $127$).

The first part demands a more special treatment. The sign bit affects the whole number, meaning that you must get rid of the sign first before continuing.

All of these steps can be done in GD as follows:

{{< callout context="success" icon="outline/movie" >}}
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

C:5=-59 C:6=-42 C:7=6

{{< /callout >}}

As for the recombination, the flow is the same for the other three parts, the first part will be treated differently.

{{< callout context="success" icon="outline/movie" >}}
C:1 (Output) C:4=-124 (First part) C:5=-59 (Second part) C:6=-42 (Third part) C:7=6 (Fourth part) C:8=0 (Sign tracker)

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