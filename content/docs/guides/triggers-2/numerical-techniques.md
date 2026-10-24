---
draft: true
title: Numerical Techniques
weight: 6170
date: 2026-09-06T00:00:00.000Z
description: null
authors:
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

{{< callout context="caution" title="Important" icon="outline/info-circle" >}}

Before reading this guide, you must understand the contents of the [Making Functions](</docs/guides/triggers-2/making-functions>) guide.

{{< /callout >}}

** **

# Motivation

The 2.2 update brought a ton of new features that have made trigger work much easier and have raised the ceiling of what is possible to create in GD. However, there are a lot of cases where the default tools provided by the game can’t directly produce the stuff we want for a specific setup, or if they can, their use comes as clunky at best or impossible to manage at worst. **In particular, GD lacks the ability to use IDs as trigger values, numerically compute functions, declare data structures, among other things.** This makes coding and math really difficult to do, limiting the scope of the projects we can do.

Even so, GD currently has enough features so that we can create setups that approximate or replicate these missing tools. This guide will go over how to use numerical IDs (item and time IDs) in order to construct those setups, it will explain what’s the logic behind them and how we can use them to create more complex stuff, and it will lay the groundwork for other guides like [Making Data Structures](/docs/guides/triggers-2/making-data-structures). It will be assumed you are fairly familiar with the content’s of the required guides listed, but even if not, this guide will explain everything necessary and will show plenty of examples to better digest these concepts.

# 1. Understanding Integer & Float Numbers

Talk about:
- how integer & floats are stored in computers
- differences between 32bit & 64bit
- go a bit in depth on floating point precision
- how GD stores numbers (PC & mobile), and what are their limits

# 2. Numerical IDs as Trigger Values

## Basic IDs to Values Conversion

As we saw on the [Stacking Properties](/docs/guides/triggers-2/stacking-properties/#id-to-trigger-values-conversion) guide, we can use numerical IDs and binary stacking to control the amount of a trigger effect, treating the IDs as if they were trigger parameters. On the [Making Functions](/docs/guides/triggers-2/making-functions/#bounded-loops) guide, we also described the ID conversion algorithm for a move trigger with pseudocode, where we used the `move_x` parameter as the trigger effect parametrized by the numerical ID.

The setup can generalized to any additive trigger effect as:

```c
// n is the exponent of the largest power of two the setup considers
int n

// temp is a temporary ID used during the conversion
ID_C temp

// X stores the input value we want to convert into trigger effects
// O is the object affected by the trigger
GID_D ID_to_trigger_conversion(ID_A X, ID_B object) {
    value := X.item
    remaining := temp.item

    // Copy X to temp so we can modify the value without changing the original input
    remaining = value

    repeat (i; [2^n, 2^(n-1), ..., 2, 1]) {
        if (remaining >= i) {
            remaining = remaining - i

            // Apply the effect by i units. The function 'trigger' denotes your chosen trigger
            trigger(target=object.group, trigger_effect=i)
        }
    }
}
```

This is the bread and butter setup that converts IDs into trigger values. From here, we can add, modify, and optimize some aspects about it to improve it.

## Ratios

Currently, the setup is using a 1:1 ratio between the input IDs and the transformation applied, that is, if we move, rotate, or scale $A$ by ID $X$, then $A$ will move/rotate/scale $X$ units. This is fine, but we may want to use different ratios for different purposes, like graphing some segments of a function, recreating zoom effects, or visually tracking some attributes (like a map, progress indicators, or enemy bars). In order to use a different ratio, follow this steps:

Define the ratio $$R = \frac{\text{transformation units}}{\text{numerical units}},$$

which will tell us how many transformation units (XY movement, rotation degrees, scale increase/decrease, etc) correspond to the numerical units you are inputting. For instance, if you wanted to move an object 20 units when you input the number 10 into the setup, then $R = \frac{20}{10} = 2$.

Achieving this is straightforward. Instead of just copying the input value $X$ to the temporal ID $\verb|temp|$ on the basic conversion setup, we also have to multiply it by the desired ratio $R$. With this, the setup will transform object $O$ by $R \cdot X$ units.

```c
int n
ID_C temp

// Define the ratio of your choice. It can be an item or timer ID
// In this case we will consider it as fixed value, but you could also use it as a remappable variable
int ratio

GID_D ID_to_trigger_conversion(ID_A X, ID_B object) {
    value := X.item
    remaining := temp.item

    // Copy X to the temp variable and multiply it by the ratio
    remaining = ratio * value

    repeat (i; [2^n, 2^(n-1), ..., 2, 1]) {
        if (remaining >= i) {
            remaining = remaining - i

            trigger(target=object.group, trigger_effect=i)
        }
    }
}`
```

(ID to Values - Ratios and more transformative trigger examples)

## Precision

Depending on the input number and ratio chosen, the number stored in $\verb|temp|$ will be a real number with decimal places. These will not be taken into account while the setup converts the number into transformative trigger units, because it subtracts integers to $\verb|temp|$, leaving the decimals untouched. This may lead to issues if we want to do really precise transformations where decimal places are important. Fortunately, most triggers have either an option to do precise transformations with decimal places (like the rotation and scale triggers), or the option to use a different ratio of transformation (like the small units in the move trigger). We can use these options, and then define a ratio that transforms real numbers into integers that the setup can process. Here’s how it works:

- Go back to the ID conversion setup, and make every transformative trigger do finer transformations by a factor $P$. In the case of the move trigger, switching from normal units to small units will make every movement three times smaller, meaning that you need to consider a factor of $P = 3$. In the case of triggers that allow inputting decimal units, like the rotate trigger, if instead of only using integer degrees of rotation, you also allow one decimal place, then every movement will be 10 times more precise, so you need to consider a factor of $P = 10$.
- Once you’ve modified every trigger, go back to the item edit trigger that controls the conversion ratio, and change the operation performed to `temp.item = R * P * X.item`. This is to ensure that the ratio remains the same as before; because we are using finer transformations now, the same input value $X$ would produce a smaller transformation, so we multiply by $P$ to compensate for that fact.

In pseudocode, we can describe the conversion setup as follows:

```c
int n
ID_C temp
int ratio

// Define the precision you want. As it is embedded into the trigger effect, it cannot be an ID.
// We will use an integer in this case
int precision

GID_D ID_to_trigger_conversion(ID_A X, ID_B object) {
    value := X.item
    remaining := temp.item

    // Multiply the temporal value by precision to compensate for finer trigger effects on the loop
    remaining = ratio * precision * value

    repeat (i; [2^n, 2^(n-1), ..., 2, 1]) {
        if (remaining >= i) {
            remaining = remaining - i

            // Consider finer transformations by a factor of `precision` you defined
            // In the case of small units in the move trigger, you don't have to divide by precision, but enable small units instead
            trigger(target=object.group, trigger_effect=i/precision)
        }
    }
}`
```
(ID to Values - Precision)

{{< callout context="caution" title="Important" icon="outline/info-circle" >}}

Using larger values of $P$ reduces the input range by a factor of $1/P$, so you may need to increase $n$ and include additional powers of two in the conversion loop to conserve the original input range.

{{< /callout >}}

These changes will allow our setup to convert numerical IDs into trigger values however we want, with the most precision the game allows. We will now cover one of the most interesting applications that using IDs as trigger values has.

## Coordinate Systems

A coordinate system is a system that uses numbers called coordinates to determine the position of objects in space, relative to a reference point. These values give us the information of where the objects are. There are multiple types of coordinate systems, but all of them allow us to describe how objects can behave in space using a set of numbers and rules, making them really useful for physics and geometry. In 2D the most common coordinate systems are the cartesian and polar coordinate systems, both of which are implemented natively into GD triggers.

Every trigger that has an attribute with an X or Y on its name (e.g. “Move X” or “Move Y” in the move trigger) will use a cartesian coordinate system, where the target object’s center will act as the origin of whatever transformation the trigger does. This is great when we want to control the object in isolation, but if we wanted to control it relative to other coordinate systems we would have to do a bit more work. If $A$ is our object, and $O$ is the reference point we want to use as the origin of another coordinate system, it would suffice to move $A$ to $O$, and then apply the necessary trigger work to $A$ from there. This could be enough in some cases, but here we will generalize this idea and use IDs as coordinates in order to precisely control the position of objects, at any time and at arbitrary positions.

Again, we will first only view the $x$ coordinate, and we will also use negative coordinates this time.

...

## Using IDs as Spawn Delays

How to use item & time IDs to make dynamic spawn delays

# 3. Computing Math Functions

So far we have found a way to use numbers and transform them into values that triggers can use. We could theoretically use any math function to use numbers in interesting ways that would allow us to create more advanced setups, however in GD we can only do math with addition and multiplication of numbers and IDs, using the item edit trigger. Even so, these are enough tools to reproduce most useful functions, via approximation methods. We will see what methods we can use, and how to compute them efficiently.

## Polynomials

A polynomial is a mathematical function that, given an input $x$, it's a finite sum of terms where each term is a number multiplied by $x$ raised to a non-negative integer power. For example,

<div>
$$
\begin{align*}
f(x) &= x^2 + 2x + 1,\\
g(x) &= x^6 - x^5 + x^4 - x^3 + x^2 - x,\\
h(x) &= 1,
\end{align*}
$$
</div>

are all polynomial functions, but the functions $\ell(x) = \frac{1}{x}$, $\sin(x)$ and $\exp(x)$ are not. Polynomials are useful to model a wide range of problems, like physics, but also they are used in numerical analysis to approximate other, more complicated functions. The latter application will be their most important purpose for this guide, so having an efficient way to compute them in GD will be crucial for the rest of the section.

From now on, we will denote an arbitrary polynomial as

$$p(x) = a_0 + a_1x + a_2x^2 + \ldots + a_nx^n,$$

where each $a_k$ is a constant number. The first idea that would come to mind is to compute each $x^k$ power, multiply them by their respective constant, and then add everything together. This is valid, but the problem is that this would require a lot of calculations. A single item edit trigger can at most take a value $x$, and output $x^2$, so we would need approximately $k$ item edit triggers to compute $x^k$ for a single $k$-th power. Then, to calculate the whole polynomial we’d need an order of $O(n^2)$ operations, which can escalate a lot even for small values of $n$. We can solve this in two ways.

### Term by Term Evaluation

First, we can consider the fact that if we already know the value of $x^{k-1}$, we can easily get the value of $x^{k+1}$ with a single item edit trigger. This means we can construct the polynomial step by step, using only $O(n)$ operations with the following procedure:

- Set an ID $P$ where you will store the polynomial, an ID $x$ that’s the value you want to input, and a temporal ID $Y$ that will store the value of $x^k$, at each step $k$.
- Spawn two item edit triggers that initialize `(time ID)P = 0` and `(time ID)Y = 1` respectively.
- Then, repeat this process $n+1$ times, starting from $k = 0$: If we are in step $k$, place an item edit trigger that performs `(time ID)P = (time ID)P + aₖ * (time ID)Y`, and then place another that performs `(time ID)Y = (time ID)Y * (time ID)X`. Once we do that, at that point we would have computed $P = a_0 + a_1x + a_2x^2 + \ldots + a_kx^k$ and $Y = x^{k+1}$, so we can move on to step $k+1$.

If we keep doing this until $k = n$, we will end up with $P = a_0 + a_1x + \ldots + a_nx^n$ and $Y = x^{n+1}$.

(Computing Functions - Polynomial Algorithm 1)

### Holder Factorization

Another way we can approach this is via factorization. If we have a polynomial $p(x) = a_0 + a_1x + a_2x^2 + \ldots + a_nx^n$, then we can factor out the $x$ for all the terms that a power of $x$, yielding $p(x) = a_0 + x(a_1 + a_2x + \ldots + a_nx^{n-1})$. The $x$ we factored out will be multiplied by a new polynomial, so we can repeat this process iteratively until we cannot factor out more $x$ terms. Doing so, we can transform the original polinomial into a expression of nested polynomials of degree $1$.

$$p(x) = a_0 + x(a_1 + x(a_2 + x(\ldots + x(a_{n-1} + a_nx))\ldots)).$$

(Computing Functions - Horner Factorization)

This process is useful because we can calculate the polynomial from the inside out: if we know the value of $b_n = a_{n-1} + a_nx$, then we can compute $b_{n-1} = a_{n-2} + xb_n$, then $b_{n-2} = a_{n-3} + xb_{n-1}$, and so on until we have all the polynomial expression evaluated. This is optimal, because we need $O(n)$ steps to compute the polynomial, without having to store the value of powers of $x$ inside an auxiliary variable. In GD this can be done in the following way:

- Set an ID $P$ where you will store the polynomial, and an ID $X$ that stores the value you want to input.
- Spawn an item edit trigger that initializes "(time ID)P = aₙ". This will set the most inner coefficient inside all the nested parentheses.
- Repeat this process $n+1$ times, starting from $k = n-1$: If we are in step $k$, place an item edit trigger that performs `(time ID)P = (time ID)P * (time ID)X`, and then place another that performs `(time ID)P = (time ID)P + aₖ`. Once we do that, at that point we would have computed $P = a_k + x(a_{k+1} + x(\ldots + x(a_{n-1} + a_nx))\ldots)$, so we can move on to step $k-1$.

If we keep doing this until $k = 0$, we will end up computing

$$P = a_0 + x(a_1 + x(a_2 + x(\ldots + x(a_{n-1} + a_nx))\ldots)).$$

(Computing Functions - Polynomial Algorithm 2)

This second algorithm for computing polynomials works best if we want to compute very specific polynomials (like Taylor expansions, as we will see in the next subsection) because then we already know its polynomial expression and thus we can factorize it conveniently to use the less amount of item edit triggers possible, depending on the expression. On the other hand, the first algorithm we saw earlier works best if we need to compute arbitrary polynomials (for example, if we want to enable the player to input any coefficient), because then we can treat coefficients as time IDs to be remapped, and the polynomial computation process can be extended using loops, which is not possible in the second algorithm.

## Taylor Series

As we know how to compute polynomials, we can move on to more complicated functions. Trying to calculate arbitrary functions is trickier because they won’t necessarily be defined by using only summation and multiplication; the exponential functions is defined as a limit, the logarithm as the inverse of the exponential, sin and cosine as the projections on the $x$ and $y$ plane respectively of the unit circle, and so on. We can't apply these definitions using the item edit trigger since it only allows basic operations.

Fortunately, we can work around this. Even though functions like the exponential, logarithm or sine aren't defined directly by basic arithmetic, we can approximate them using polynomials, and although the approximation may not be perfect, it can come extremely close to the actual result. This is the key idea behind the Taylor series. Given this, if we can write a complicated function as a sum of polynomial terms, then we can compute it using the methods already discussed.

From now on, we will introduce derivatives into the mix. If you’re not familiar with them, or calculus as a whole, and you want to understand the logic of the stuff we will use, it’s highly recommended that you watch the Essence of Calculus series by 3Blue1Brown, as it intuitively explains where do derivatives come from and why they are useful, among other stuff.

Back on track, the Taylor series of a function is a way to express that function as an infinite sum of terms, based on its derivatives around a single point $x = a$. If a function $f$ has enough derivatives, then its Taylor series at the point $x = a$ is:

Each term in this sum is a polynomial, and the more terms we include, the better the approximation of the function near point $a$ is. The intuition behind this equation is the following: Imagine we want to approximate $f$ using polynomials, starting from point $a$. We have infinite different ways to approach this task, but we can begin using the simplest polynomials possible and expand from there.

The most basic polynomials are constants, and we want our polynomial to match the value of $f$ at point $a$, so the first term of our polynomial will be $f(a)$. Now the polynomial matches $f$ only at point $a$, but we can do better.

If we add a term $c_1(x-a)$ where $c_1$ is any coefficient, the polynomial will now be a line that touches point $a$, and by changing the value of $c_1$ we can influence how good the line matches $f$. The best term we can choose is $f'(a)$, because then the polynomial will match the rate of change of $f$ around point $a$, or in other words, the line will be tangent to $f$ at point $a$.

We can keep adding terms of the form $\frac{f^{(n)}(a) \cdot (x-a)^n}{n!}$, where each new term makes the approximation more accurate near the chosen point, as they ensure the approximation has the same $n$-th derivative at point $a$ as the original function. That is, the more terms we add, the more features of $f$ we replicate near $a$.

(Computing Functions - Taylor Visual Example)

For a more detailed explanation, check the [Taylor Series chapter](https://www.youtube.com/watch?v=3d6DsjIBzJ4&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=11) of The Essence of Calculus. Going back to GD now, if we want to compute a function $f$ around a certain point $a$, then we’d need to:

Get the Taylor expansion of $f$ around point $a$, using the amount of terms we need. As we saw, the more terms we include in the sum, the result will be closer to the real $f$. It’s possible to directly ask for the Taylor expansion to AI, we just need to provide $f$, $a$, and the number of terms needed.

Compute the polynomial given by the Taylor expansion in GD, using any method.

Here’s an example for the exponential function. Let’s say we want to compute $\exp(x)$ for values of $x$ close to 0. Because all the derivatives of $\exp(x)$ equal to $\exp(x)$ itself, and $\exp(0) = 1$, then the Taylor expansion centered around 0 is given by

This equation is valid for any value of $x$, meaning we can compute the exponential of any number as long as there are enough terms. Also, we know the form of all the terms as a closed expression, so we can compute the polynomial in two main ways: First, we can iteratively add terms of the form $\frac{x^n}{n!}$ to an ID $P$ using loops, and stop once the doesn’t change much upon each iteration. The problem would be that this process doesn’t carry on within a single frame. The other way we could do this is by using a fixed amount of terms, and then compute those. The issue here would be that we can’t be as precise as we want, as there’s only so many terms we can choose. Both methods are done [here](<https://discord.com/channels/414295025883545600/1230631371211276298/1351286097887363272>).

This already shows one of the limitations with the Taylor series: they slowly converge to the real function, and are only valid if the input numbers are close to the point from which the series is expanded. There are multiple ways we can work around this though, depending on the functions chosen

## Periodic Functions
- How to compute periodic functions
- Sine, cosine examples
- Transform any function into a periodic one + examples

## Range Reduction
- What it is
- Log example
- Exponential example

## Other Polynomial Approximation Methods
- Faster convergence than taylor but requires additional software
- Chebyshev polynomials
- Arctan example

## Newton-Raphson’s Method
- What it is
- Square root example

## Function Composition
- Composition using already defined functions (tan example)
- Composition using expansions of other functions

# 4. Multiple entries per ID

Item and time IDs can hold numbers up to 999.999.999 and 9.999.999,999 respectively (these numbers are outdated), but most of the time the values we want to store are much smaller. This grants the possibility of storing a large string of values, but interpret it as a set of concatenated smaller values or substrings. For example, the number 280.038.212 can be read as 280-038-212, where 280, 38 and 212 are separated numbers that can be put to different uses independently. In this way, a single ID can hold multiple entries on its item and time ID, allowing for more space efficient storing and making spawn remapping easier, as you will be using less IDs to store more information. Given this idea, we want a way to read a large number and extract a specific part of it, while keeping the original number intact in order to not alter its information.

## Setup

In order to achieve this, we will need the floor and modulo functions. The floor function receives any number $A$ and rounds it down to the nearest integer. It's represented by the symbol $\lfloor A \rfloor$, and luckily its implemented natively on the item edit trigger, so no special setup is needed to use it. The modulo on the other hand, is a function that returns the remainder of the division of two numbers $A$ and $B$. It's notated as $A \bmod B$ and we will have to use a [custom setup](/docs/guides/triggers-2/making-functions/#example-modulo-function) to perform it as it isn't an option in the item edit trigger.

The reason we need these functions is because of the following:
- If $B$ is the $n$-th power of 10, then $A \bmod 10^n$ will output the first $n$-th digits of $A$ (counting from right to left). (e.g. $280.038.212 \bmod 10^5 = 38.212$).
- If we take a number $A$, divide it by $10^m$, and then apply floor, the result is equivalent to removing the first $m$ digits of $A$ (counting from right to left). (e.g. $\lfloor 38.212 / 10^2 \rfloor = 382$).

We can use these two ideas to extract any subset of digits within a larger number, by locating its digits positions as read from right to left. Say $A$ is our large number and $T$ is the value we want to extract. First, perform $T = A \bmod 10^N$, where $N$ is the position of the leftmost digit of the desired range; this will remove every digit of position $N+1$ or more. Then, perform $T = \lfloor T / 10^{M-1} \rfloor$, where $M$ is the position of the rightmost digit of the interval; this will trim every digit of position $M-1$ or lower. For example, to extract the number 382 in 280.038.212, we can notice its stored between the 3th and 5th digits counting from the right. Then by performing $\left\lfloor \frac{280.038.212 \bmod 10^5}{10^{3-1}} \right\rfloor$ we'll extract 382. Here's how to do it in GD:

(Multiple IDs - Extract setup).

## How to Use It

Once we can store a subset of a number in an ID $T$, we can use it to do any sort of operation or control flow. The idea now is to extract a subset of $A$ and store it in ID $T$, perform operations using $T$, and then free ID $T$ once it is no longer needed in order to store other substrings. In a sense, **ID $T$ is only temporarily holding subsets of $A$ as long as they are required**. However, *you have to be really careful of how you manage your original large ID $A$ and your temporal IDs in operations and comparisons to not break the setup*.

- When you store a subset of $A$ in ID $T$, perform the operation you want using $T$ immediately after updating $T$. This is to ensure the value of $T$ isn't modified by other instances of temporal substring storing. Once you do the operation, $T$ can be used to store other substrings freely. Order of operations is extremely important here, so keep that in mind.

(Multiple IDs - Order Consideration)

- If you want to change a segment of $A$ upon doing an operation, make sure the modifications target the correct digit placements of $A$ in order to not modify other substrings of $A$. That is, if you want to modify a substring between digits $n$ and $m$, the operations you do must change the value of $A$ only between $n$ and $m$. This is in order to not mistakenly change the information that each substring holds.

(Multiple IDs - Segment Consideration)

- If you want to use multiple substrings at the same time for an operation or comparison, **make sure you are storing different substrings in different temporal IDs to avoid overriding information**. To make your setups more readable and understandable, use an specific range of IDs only for temporal substring storage; between and 1 and 5 IDs should be enough in most cases.

(Multiple IDs - Multiple Substrings Consideration)

So far we've explained the concept and implementation of multiple entries per ID. It can be used for technical applications (as we will see for the [Linked Lists data structure](/docs/guides/triggers-2/making-data-structures)), but also for more practical ones.

Let's say you want to make a battle system where the player and enemies have health and attack stats. You could use different IDs that store separately the health and attack stats of the enemies, but if you intend to create a lot of enemies that could get difficult to manage and you'd have less IDs for everything else. This problem would be further exacerbated if the enemies also have defense, evasion, speed or other stats. For this reason, we can store all that information in one or few IDs and use different functions for stat manipulation.

(Multiple IDs - Enemy Example)
