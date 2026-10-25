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

Select both, then go to Edit Group and assign one group.

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

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Item Edit

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

Don’t forget to enable Spawn Trigger and Multi Trigger!

Go to Edit Group, then grant this object group 4.

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

Luckily, move triggers can have their effects **stacked**, meaning two move triggers running at the same time will produce the combined distance. This allows us to combine the effects of multiple move triggers as if they were a single one.

Let’s focus on the “Move X” for the Move trigger. Suppose, you want the object to move 158 blocks to the right. How would you do that?

{{< callout context="note" icon="outline/photo" >}}

Kelly tapping digits 1, 5 and 8.

{{< /callout >}}

Your first instinct could be to split these numbers into digits, and then move them said digits. 158 = 100 + 50 + 8, so it’d be intuitive to have three move triggers to do the job: one to pull the 100, one to pull the 50 and the other to pull the 8.

This is easy to think about, but you quickly run into a problem. For each position you would need to check for the 10 possibilities for the digit, and for each of them you have to move a fixed amount of distance. An increase of 20 triggers for every digit is impractical at best and time-consuming at worst.

{{< callout context="note" icon="outline/photo" >}}

Kelly in front of a row of 0, 10, 20, …, 90

{{< /callout >}}

If you’re smart enough, you may have already found a better method. But to those who aren’t, all it takes is a change in perspective. Previously we have been looking at numbers in their decimal representation, but we can also look at it, how computers interpret it: binary!

I know the term might sound scary at first, but one of the special things about it is how simple it really is. Everything is presented as a yes-no choice: chicken or egg, live wire or neutral wire, to add 64 or not to, zero or one, that’s it.

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

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

If you want to be a bit more in-depth, the “yes-no” responses act as digits for the number’s binary representation. In this case, we can write down 158 in binary as `010011110`.

Much like how numbers are unique in decimal, they also have unique representations in binary. In a way, all “yes-no” sequences are exclusive to one number.

{{< /callout >}}

{{< callout context="note" icon="outline/photo" >}}

It’s like a Rorschach test for numbers! Don’t you think?

{{< /callout >}}

All numbers below 500 can be broken down into a sum with only these 9 numbers, and they either appear once (Yes) or not at all (No).

This means that with only 9 move triggers you can move an object any distance to the right within 500 units. Let’s see how you can make use of this:

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

Anyways, we have now the bread and butter setup that converts IDs into trigger values. With this idea you can make the move trigger move to the left, up or down instead of to the right, or use other triggers like the rotate trigger in order to input numbers as degrees of rotation, or use the scale trigger to increase or decrease the size of anything. From here, we can add, modify, and optimize some aspects about the setup to improve it.

## Ratios

Sometimes it may not be desirable to

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Ratios

{{< /callout >}}

## Precision

{{< callout context="tip" title="TODO" icon="outline/edit" >}}

Precision

{{< /callout >}}

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

- $x$ is our input number (Variable 1)
- $p(x)$ is our output (Variable 2)
- $2$ is the number we multiply
- $- 1$ is the number we add

Together, this means that we take our input number $x$, multiply it by $2$, add $-1$ and then give the result as an output.

Usually we omit the multiplication sign (×), so our function is written as $p(x) = 2x-1$.

{{< callout context="note" icon="outline/photo" >}}

What does this function do? ($4x+9$)

{{< /callout >}}

This is the point where I need to introduce you to the concept of multiplying a number by itself. This is simple to pull off in Geometry Dash on its own, only requiring an item edit trigger.

{{< callout context="note" icon="outline/photo" >}}

This is how you do it! (`T2 = T1 * T1`)

{{< /callout >}}

If you pay close attention, the mod slider is also used in the multiplication. If you set it to a value other than 1, the right hand side gets multiplied by the mod.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

In reality, this extra number is known as a coefficient. However I will be consistent with game terminology for this guide by using “mod.”

{{< /callout >}}

By setting the mod to `3.000`, the operation now reads `T2 = T1 * T1 * 3.000`, meaning that the output multiplies the input by itself, and then multiplies it by 3.

In mathematical notation, this is referred to as $p(x) = x \times x \times 3$. Since we multiply the input (`T1` or $x$) two times, we can simplify the expression to $p(x) = 3x^2$.

{{< callout context="caution" title="Note" icon="outline/info-circle" >}}

For any whole number $x$, the function $p(x) = x^2$ produces a square number, therefore we refer to $x^2$ as “$x$ squared.”

{{< /callout >}}

A full quadratic function is a sum of three things:

1. The input multiplied by itself, then by some number: `T3 = T1 * T1 * 4.000`
2. The input multiplied by some number: `T4 = T1 * 12.000`
3. A loose number: `T5 = 9.000`

I’ll give an example by constructing $p(x) = 4x^2 + 12x + 9$, our output `I2` will be a sum of the three above variables:

{{< callout context="success" icon="outline/movie" >}}

T:1=5.00 T:2 T:3 T:4 T:5

`T3 = T1 * T1 * 4.000`

`T4 = T1 * 12.000`

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

`T2 = T2 + T3 * -36.000`

This is our first term.

{{< /callout >}}

In the first step, the term $-36$ (or $-36x^0$) is added to the total. Our timer variable 2 now has a value of -36.

{{< callout context="success" icon="outline/movie" >}}

`T3 = T3 * T1`

The `T3` variable now contains $x^1$.

`T2 = T2 + T3 * 132`

{{< /callout >}}

Our second step calculates $136x$ and adds it to the output total.

{{< callout context="success" icon="outline/movie" >}}

`T3 = T3 * T1`

The `T3` variable now contains $x^2$.

`T2 = T2 + T3 * 101`

{{< /callout >}}

Our third step calculates $101x^2$ and adds it to the output total.

{{< callout context="note" icon="outline/photo" >}}

`T3 = T3 * T1` $x^3$

`T2 = T2 + T3 * -629.000`

`T3 = T3 * T1` $x^4$

`T2 = T2 + T3 * 209.000`

`T3 = T3 * T1` $x^5$

`T2 = T2 + T3 * 421.000`

`T3 = T3 * T1` $x^6$

`T2 = T2 + T3 * -154.000`

`T3 = T3 * T1` $x^7$

`T2 = T2 + T3 * -68.000`

`T3 = T3 * T1` $x^8$

`T2 = T2 + T3 * 24.000`

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

`T2 = T2 * T1`

$24 x^4 - 68 x^3 - 154 x^2 + 421 x$

{{< /callout >}}

The core idea behind this transformation is absurdly simple, you shift everything to a higher “corner number.”

An interesting result is that the number that comes first, will have the highest corner number. This means, rather than working backwards from $x^0$, we start from the highest ($x^8$) and work our way down.

Let’s look at the first two steps with this method:

{{< callout context="success" icon="outline/movie" >}}

`T2 = 24`

Now for the second step,

`T2 = T2 * T1`

`T2 = T2 - 68`

{{< /callout >}}

The steps here are deceptively easy, just multiply by `T1` then add the mod. However, it is important that you know the underlying concept behind this method, it will be very useful once you start working with other breeds of functions.

## Taylor Series

{{< callout context="note" icon="outline/photo" >}}

Don’t you sweat it, baby, $x$’s alright!

{{< /callout >}}

As we know how to compute polynomials, we can move on to more complicated functions. Trying to calculate arbitrary functions is trickier because they won’t necessarily be defined by using only summation and multiplication; the exponential functions is defined as a limit, the logarithm as the inverse of the exponential, sin and cosine as the projections on the x and y plane respectively of the unit circle, and so on. We can't apply these definitions using the item edit trigger since it only allows basic operations. Fortunately, we can work around this. Even though functions like the exponential, logarithm or sine aren't defined directly by basic arithmetic, we can *approximate* them using polynomials, and although the approximation may not be perfect, it can come extremely close to the actual result. This is the key idea behind the **Taylor series**. Given this, if we can write a complicated function as a sum of polynomial terms, then we can compute it using the methods already discussed.

From now on, we will introduce derivatives into the mix. If you’re not familiar with them, or calculus as a whole, *and* you want to understand the logic of the stuff we will use, it’s highly recommended that you watch the Essence of Calculus series by 3Blue1Brown, as it intuitively explains where do derivatives come from and why they are useful, among other stuff.

{{< callout context="note" icon="outline/photo" >}}

These stuff just won’t come off my teeth will they? (Kelly using dental floss)

{{< /callout >}}

The main takeaway here is that **you do not need to actually memorize the definition** of a Taylor series, just know that a lot of the following functions you’re constructing will make use of this idea at some point.

### The Exponential Function - $\exp(x)$

We will start with the easiest example, I’ll call it $\exp(x) = e^x$, where the number $e=2.71828...$

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

I will assume you know a thing or two about the !