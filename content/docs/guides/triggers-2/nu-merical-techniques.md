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

The maximum that a 32 bit number can hold is the number $1$, doubled 32 times, which amounts to $4,294,967,296$ (a huge number!), but since computers also needs to store the number $0$, so the actual cap is $4,294,967,295$.

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

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

include a bit of info on magnitude limits, as well as a bit of double-precision.

a tl;dr would help if the reader wants to skip some nasty math

{{< /callout >}}

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
6. The decimal point always evens out at $127$, since we're halving the mantissa 23 times, the expressed exponent is $127_{10} - 23_{10} = 104_{10}$.
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
>

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

Luckily, there's a way to fix this. Instead of making 1 correspond to $1°$, we can make it so that it only moves $0.1°$. We would now need to input 10 for it to rotate the same $1°$ as before. This is the second method, moving (or rotating) less for every input.

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

Our input moves 355 units, or 35.5 degrees.

▶️

Double-check the provided rotation.

{{< /callout >}}

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Provide more info about Small step in move triggers

{{< /callout >}}

These changes will allow our setup to convert numerical IDs into trigger values however we want, with the most precision the game allows. We will now cover one of the most interesting applications that using IDs as trigger values has.

## Coordinate Systems

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

A guide about Descartes' coordinates

{{< /callout >}}

## Using IDs as Spawn Delays

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Spawn Delays

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

In mathematical notation, this is referred to as $p(x) = x \times x \times 3$. Since we multiply the input (`T1` or $x$) two times, we can simplify the expression to $p(x) = 3x^2$.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

For any whole number $x$, the function $p(x) = x^2$ produces a square number, therefore we refer to $x^2$ as “$x$ squared.”

The expression $x^7$ would be called "$x$ to the power of $7$," and the corner number is known as the **power**. The power can be any number, like $8$, $15$ or $22$.

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

{{< callout context="note" title="TODO" icon="outline/photo" >}}

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

You might know a thing or two about rotations, the observation at hand here is that when a wheel rotates 360°, it makes a full turn. Turning a wheel 15° produces the same result as turning it 375°.

{{< callout context="note" title="TODO" icon="outline/photo" >}}

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

{{< callout context="note" title="TODO" icon="outline/photo" >}}

Just like a swing! (Swing moving up and down with dashed trails)

{{< /callout >}}

You might have noticed another of the same wave that goes up, it traces out basically the same path! That's our sine's cousin function! We'll call it the co-sine, since it's a **co**usin of **sine** (get it?); or $\cos(x)$ for short. It's always ahead of the regular sine by a right angle, this is where we get the relation:

$$\cos(x) = \sin(x + 90°)$$

These two functions are the bread and butter for all things periodic, we will use them a lot moving on!

{{< callout context="caution" title="Degrees and Radians" icon="outline/info-circle" >}}

Normally, you'll be taught the definition of sine and cosine involving angles in **degrees** (°). However, most computer programs, including Geometry Dash, will involve calculations with **radians**.

Radians are special in that they make angles act like arc lengths:
- An arc length of $\frac {\pi} 2$ is a quarter of the circumference $2\pi$, covering an angle of $90°$.
- An arc length of $\frac {\pi} 3$ is a sixth of the circumference $2\pi$, covering an angle of $60°$.

For this guide, we will assume that **units are given in radians**. If you have inputs in degrees, apply this conversion recipe: $1 ° = \frac {180} {\pi}$

{{< /callout >}}

Their Taylor series are the following:

$$
\sin(x) = \frac {x^1} {1!} - \frac {x^3} {3!} + \frac {x^5} {5!} - \frac {x^7} {7!} + \frac {x^9} {9!} - \frac {x^{11}} {11!} + \cdots
$$

$$
\cos(x) = \frac {x^0} {0!} - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \frac {x^8} {8!} - \frac {x^{10}} {10!} + \cdots
$$

These two functions look quite similar, and they in fact are. The key idea is that we can use the same loop for both sine and cosine. Let's see how the terms relate:

$$
- \frac {x^{10}} {10!} = -1 \times \frac {x^2 \times x^8} {10 \times 9 \times 8!} = \frac {-1 \times x^2} {10 \times 9} \times \frac {x^8} {8!}
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

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

How to reduce inputs to $\left[-\frac {\pi} 2, \frac {\pi} 2 \right]$, as well as the idea behind the reduction

{{< /callout >}}

### Making everything periodic

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

How to generate any periodicity using reduction, with a contrived example

{{< /callout >}}