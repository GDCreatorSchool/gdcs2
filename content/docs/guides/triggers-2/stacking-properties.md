---
draft: true
authors:
  - chuckolate
title: Stacking Properties
weight: 6130
date: 2026-05-15T00:00:00.000Z
description: If you have ideas for effects or mechanics but don’t want to go
  through the tedious task of placing many triggers for a precise action,
  stacking them can help speed up creation time. By stacking triggers, you can
  achieve different effects depending on the types of triggers used.
tags:
  - Grade 2
  - Trigger Concepts
  - Trigger Setups
math: true
contributors:
  - chuckolate
  - notamoderatr
  - komatic5
  - typexleta
---
THIS GUIDE HAS MISSING EXAMPLES, DON'T MAKE PUBLIC YET!

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}



- Trigger stacking involves activating triggers on the same group at once to combine their effects, which can have varying output based on the type of triggers and stacking at play.
- Stacking can be used to achieve physics simulations through the use of triggers like Advanced Follow and its properties like Acceleration and NearDist.
- Binary Stacking can help save on time, groups, and performance in some cases, along with allowing modifiable trigger parameters with the help of Item Comp / Edit.




{{< /callout >}}

- - -

# Stacking

**Stacking** is the act of **combining two or more triggers of *the same type* in order to mix their *prolonged* effects**. For example, an object targeted by two move triggers activated simultaneously will have both effects applied.

It’s important to make the distinction between stacking and dependencies. A trigger **dependency** is **a relation between multiple triggers where they rely on each other in order to produce a desired output**. In this context, trigger stacking is a special type of dependency, but not all dependencies have to do with stacking. You can check more information about dependencies in the [Trigger Dependencies](<>) guide.

## No Stacking

Triggers that apply their effects instantly cannot be stacked. If multiple triggers of this type are activated simultaneously, their actions will be performed separately, regardless of their target properties. Some examples are:

* Instant Effect Triggers
* Instant Condition Triggers (Spawn, Instant Count, Item Comp, etc).
* Continuous Condition Triggers (Count, Collision, etc).
* UI, Link Visible

## Override Stacking

Some triggers can **override** the effects of another trigger of the same type. There are two different types of override stacking.

### Instant Override

If a trigger of this category is activated while another is active, the trigger activated last will instantly override the previous one. Shake Triggers and Shockwave/line Shaders are examples of such.

(Trigger Stacking - Instant Override Stacking)

### Progressive Override

If a trigger of this category is activated while other ones are active, the trigger activated last will override the previous ones over time, which can also be altered by easing, if the option is available. This trigger's action will start from where the previous left off, and then transition smoothly toward its final state. Some examples are:

* Color, Alpha
* Zoom, Static, Offset
* Shaders with fade times

(Trigger Stacking - Progressive Override Stacking 1)

Do note that when triggers are overridden by another trigger, the previous trigger’s action will stop completely.

(Trigger Stacking - Progressive Override Stacking 2)

## Mixed Stacking

Certain triggers can *combine* their effects if triggered within the duration time of other active triggers. The effects of this can vary depending on which triggers are used.

### Additive Stacking

When multiple triggers are active simultaneously, their effects are added. If an object is being affected, its state will be the net result of applying all transformations over time. Triggers of this type include:

* Move, Area Move, Rotate, Area Rotate
* Keyframe, when keyframes move or rotate objects
* Follow Player Y

(Trigger Stacking - Additive Stacking)

### Multiplicative Stacking

If several triggers of this type are active, their effects combine multiplicatively. If an object is being affected, its state will be amplified by each active trigger over time. Scale/Area Scale and Keyframe scaling can produce this effect.

(Trigger Stacking - Multiplicative Stacking)

Activating many multiplicative triggers at different times will still output a transformation that’s the product of all actions. What happens during this heavily depends on the duration, easing and values of the triggers, since these parameters are being multiplied in real time. For instance, scaling an object from 1x to 4x while performing another scale operation halfway through with a target of 2x, the output will be an object 8x the original size. However, the scale of the object won’t necessarily increase linearly.

### Group Stacking

If you give an object multiple groups, all effects applied to each group will mix together. This works for triggers that support additive and multiplicative stacking, where the result would be the same as applying them all to a single group. Some triggers that support override stacking can stack across groups too, which are:

* Toggle Triggers: If an object has multiple groups, it will be toggled off if any one of the groups are toggled off. This is common for AND gates, which are covered in the [logic gates guide](/docs/guides/triggers-2/making-logic-gates/).
* Alpha Triggers: If an object has multiple groups, its opacity will be the product of each group's opacity.

(Trigger Stacking - Group Stacking)

## Complex Stacking

Some triggers support multiple stacking types, allowing you to modify when and where stacking takes place depending on the features you use. As this varies from trigger to trigger, we'll go through each one of these separately.

### Follow

The result of stacking Follow triggers depends on how they are stacked:

* Many groups can follow one group, and vice-versa. In this case, Follow triggers will stack additively.
* If two or more triggers with the same target and center groups are activated, the latter will override the first. If you want to additively stack multiple follow triggers that target the same groups, you can use group stacking.
* If one center group is another’s target group, then the results will vary upon activation order. In this case, an object’s final X/Y mod values are obtained by multiplying all the X/Y mod values from the Follow triggers it depends on.

(Trigger Stacking - Follow Stacking)

### Pulse

Pulse trigger modes can affect the way these triggers stack:

* Pulse triggers in Color mode will use Progressive Override stacking.
* Pulse triggers in HSV mode will use Mixed stacking; Hue attributes always stack additively, while Saturation and Brightness attributes stack multiplicatively by default. They can stack additively if you enable their respective checkboxes.
* If you combine multiple Pulse triggers with different pulse modes, every time a Color mode trigger or a HSV mode trigger that pulses with a specific color ID activates, it will override all the other effects acting on the target group/channel.

(Trigger Stacking - Pulse Stacking 1)

Unlike other triggers that use Override stacking, Pulse triggers are reversible; even if other pulse triggers are being overridden, their action will hold until the fade time has elapsed. If the most recent trigger is interrupted, the previous triggers will continue their action, as if the last trigger had never activated.

Additionally, if you enable **exclusive** on a pulse trigger, it will override all previous pulse triggers acting on the same ID. This option makes overriding act as usual, though it currently only works while playing or playtesting the level, not in-editor.

(Trigger Stacking - Pulse Stacking 2)

### Area & Enter

Area & Enter triggers have different types of stacking depending on which transformations are applied:

* Area/Enter Move and Area/Enter Rotate stack additively.
* Area/Enter Scale, Area/Enter Fade and Area/Enter Tint multiply their output.
* Each Area/Enter effect keeps its own effect areas, conditioning stacking to only occur if an object intersects multiple effect areas.

(Trigger Stacking - Area/Enter Stacking)

Area triggers have the option to change their priority; Area priority goes from highest to lowest, where lower priorities will only apply once higher priority triggers have activated. This can change the result depending on which triggers have higher priority.

(Trigger Stacking - Area Priority Stacking)

## Advanced Follow Stacking

When stacking multiple Advanced Follow triggers, their effects mix together to produce complex movements which fall into override and additive stacking. When an object is under the influence of Advanced Follow, the game not only has to keep track of its position in 2D space, but also *its destination and how far it has to travel*. This is done with **velocity**, which is **a vector that points in the direction the object should that describes its length**. For the purposes of this guide, we will refer to length as speed.

(Trigger Stacking - Velocity Diagram)

Advanced Follow Triggers will adjust the velocity of the target group, then update the position of the group based on said velocity on *every frame*. The process works as follows:

* The trigger with the highest priority value in a set of *n* amount of triggers acts first.
* Reads the current positions of the target and follow groups, and then modifies the velocity of the target group according to the trigger’s parameters.
* Once the velocity has been changed, the trigger uses it to transform the position of the target group.
* Each trigger that succeeds the highest priority trigger will use the next new position as its starting point to apply changes to. This is repeated until all triggers have acted, where the final positions achieved will be the ones that are visible in-game.

(Trigger Stacking - Advanced Follow Basics)

Depending on the settings of the advanced follow triggers being stacked, they can either overwrite the velocity, add small adjustments to it, or not change it at all. In particular,

* Mode 1: *Overwrites* the current velocity with a new one, calculated from the trigger’s parameters.
* Modes 2 and 3: *Adds* to the existing velocity, altering its direction and speed over time. These also have the option to overwrite or add the target’s current velocity with the one specified in *startSpeed* and *startDir*. In those cases, the trigger first applies said velocity to the current one when it activates, and *then* proceeds to compute a new velocity normally.

If the speed of the resulting velocity from any mode exceeds the value in *maxSpeed*, the trigger will cap the speed to that value, but preserve the direction. There may be situations where the trigger won’t change the current speed. For instance, if the target group isn't within range of *maxRange* of the Follow group. In those cases, the trigger skips its transformation for that frame, letting the others resume normally.

(Trigger Stacking - Advanced Follow Velocity Stacking)

Enabling **exclusive** on an Advanced Follow Trigger will stop other triggers from stacking their transformations onto the target group, regardless of Follow group or mode. If more triggers activate *while* the exclusive Advanced Follow is active, they won’t act unless the exclusive trigger is stopped. Do note that if multiple Advanced Follow triggers activate *before* enabling an exclusive trigger, the action of the previous ones won’t stop.

(Trigger Stacking - Advanced Follow Exclusive)

## Performance

Stacking can be costly on performance in some cases, since the game needs to do a sizable amount of math for transformations. If a trigger modifies a target group based on a center group, then stacking several of them will:

* **Not** increase the number of calculations if all target groups and all center groups are the same.
* **Multiply** the number of calculations by the number of different target groups, if the center groups are the same.
* **Multiply** the number of calculations by the number of different center groups, if the target groups are the same.

(Trigger Stacking - Performance Video)

Any other situation will fall into a combination of the three cases described above. Let’s say there are two center groups, named $A_1$ and $A_2$, that move differently. We make a group $B$ follow both, along with a group $C$ following $B$, which has $n$ amount of objects. What will happen is that $B$ will require two calculations to be moved as there are two different center groups (point 3), and $C$ will require $n$ calculations to be moved since they all follow one center group (point 1).

This concludes basic stacking. Once we know how stacking works on an advanced level, it can be used to produce effects that wouldn't be possible with just one trigger. There are many ways to use stacking properties, so only a handful of useful applications will be covered. As we cover when and how to use stacking for said applications, you can apply this knowledge to make more complex setups.

# Stacking Transformations

A single trigger gives limited options for modifying objects. For complex transformations, you can stack many triggers with Mixed Stacking in mind. There are a lot of ways of doing this, all of which will be covered in order of complexity.

## Transformation Splitting

Trigger **splitting** can be defined as **separating transformations performed by a single trigger into many triggers**; if a trigger has parameters $A$ and $B$, it can be split into 2 triggers: One to modify $A$ with a set easing, and another to modify $B$ with a different easing. The final result will be equivalent to using one trigger to change both parameters, except with added freedom for easings and durations. For example, a move trigger can be split so that the first changes the $x$ component and the latter changes the $y$ component.

(Stacking Transformations - Transformation Splitting)

This is useful when you want certain parameters to behave independently, where one change in a component doesn't have to correspond with another. Some examples are simulating parabolic trajectories, having some parameters be player-controlled, or plotting functions.

## Cumulative Movements

Stacking can also be used to combine or cancel effects between triggers. When stacking, their effects mix together, meaning you can create transformations that accelerate, decelerate, or oscillate depending on their interaction.

Sometimes, triggers stack in a **cumulative** manner, where **all triggers apply transformations that build up into a larger overall effect**. An application of cumulative stacking is parallax. Normally you would set many groups with their own follow rates; with group stacking, this can be achieved in marginally less groups by adding the rates together. This is an example of binary stacking, which will be covered later.

(Stacking Transformations - Cumulative Movements)

## Counteracting Movements

Conversely, triggers can be set to counteract each other. If multiple triggers act on the same object, opposing transformations may cancel each other out, reducing or balancing the resulting effects depending on which triggers are more dominant. This can be illustrated using advanced follow triggers. If an object follows point $A$, and another follows point $B$, the effects will cancel each other, where the dominant interaction will be determined by factors like easing. This means of movement can also be defined as **subtractive stacking**. This can be useful to find the middle point between objects, or slow down/oscillate a transformation by changing parameters over time.

(Stacking Transformations - Counteracting Movements)

## Custom Movements

Keeping the stacking techniques described above in mind, we can mix cumulative and counteracting movements with different parameters to create more complex effects. There’s plenty of options on combining these methods, one key example being animation.

In animation, multiple components need to move together in a coordinated way. A lot of the time, these movements may inherit another, if it depends on that movement. For instance, an enemy whose head, eyes, torso, and four limbs are moving may have some dependencies; the eyes may depend on the movement of the head, which may depend on the torsos’ movement. Every component will mesh together to create complex movements like blinking, head tilting, or walking cycles, using cumulative and counteractive movements.

{{< img src="https://lh3.googleusercontent.com/d/1XWp4UzYR7I6Vn-M7D_Y1VznM39wEWFGH/view?usp=drive_link" >}}

To achieve this, we can use simple principles while creating animations:

* **Transform Individual Components:** Start by making animations for each part independently to give every component their own movements.
* **Share Dependent Groups:** Components that move together or influence each other should share groups, so newer transformations will still influence earlier ones.
* **Stacking:** Once both the individual movements and dependencies are made, stacking can help combine them all into one; all independent and dependent transformations contribute to allow cumulative and subtractive movements to occur.

Using the enemy example described earlier along with our principles, we will create two animations: Idle and Walking.

(Stacking Transformations - Animation)

By transforming individual components, sharing dependent groups, and stacking them, motions produced can be more complex. Keeping this logic in mind while animating will help produce better results.

# Physics

An Advanced Follow trigger can move an object to another at an initial speed, acceleration, friction and more. This allows us to model an Advanced Follow trigger as a physical force; the follow group applies a force to the target group, thus moving it closer or further from said group. Because of how advanced follow stacking works, many objects can apply different forces to each other, producing actual physics models with only a couple of triggers.

## Simple Physics

Just a few Advanced Follow triggers are enough to create basic physics simulations; Advanced Follow triggers, when set up, will do the following:

* Set an initial speed and direction.
* Follow objects with a set acceleration to simulate different forces, which can either pull or repel targets from the Follow group. For example, an object can be set to follow the y-axis of another object that's a considerate distance away with a set acceleration as terminal velocity to simulate gravity.
* Apply friction to dampen the movement of objects, which can be seen in real physics.

With these in mind, we can simulate the parabolic movement of a particle. A particle can be launched with a set speed and angle, following a parabolic path if gravity is applied. Friction can be set on the x-axis to replicate air resistance, and more Advanced Follow triggers can be used later to set a new initial speed and angle.

(Physics - Simple Physics)

## Symmetric and Asymmetric Relations

In real life, forces come in pairs; if object $A$ exerts a force on object $B$, then $B$ applies an opposite force on $A$. The result can change depending on certain criteria of these forces:

* Forces approaching each other are attractive, meaning the objects will come closer as time progresses. Opposing forces are the opposite of this.
* One force approaching an object while another moves away is considered asymmetric.

(Physics - Relations Diagram)

The magnitude of these forces is also important. They can have equal magnitudes, or there can be forces with higher magnitude than another. By managing the direction and magnitude of the forces, you can model a lot of physics situations, where the more objects and interactions you have, the more complex and unpredictable the model will get.

To make two objects attract, use two Advanced Follow Triggers – one for each object – with positive acceleration towards each other. This creates a symmetric interaction where both objects pull themselves together.

You can introduce more than 2 objects to the interaction. Each object will follow every other object, using their own Advanced Follow. This means every object pulls each other simultaneously, allowing for dynamic movement and by extension more chaotic the more objects are added.If negative accelerations are used, the objects will push themselves away unlike positive acceleration. With multiple objects, this creates a scattering effect as they repel.

Combining the previous forces will result in asymmetric interactions. New movements may emerge due to the forces counteracting or adding with each other, but by nature these can end up being difficult to predict.

(Physics - Symmetric and asymmetric physics)

## Collisions

In real life, two objects colliding will apply forces on each other upon contact; the forces of objects will be sent in the opposite direction so they do not phase between each other.

(Physics - Collision Diagram)

We can use the NearDist option in Advanced Follows’ second and third modes to emulate such behaviour. NearDist should set the point where a collision should occur, so an opposite force can be applied to prevent phasing.

* Low NearDist values apply force when both objects are closer, whereas larger ones happen further away. For scale, every 30 units in NearDist *approximately* equates to 1 full block in the editor.
* High Acceleration values will make the objects repel or attract quickly, depending on whether it’s negative or positive. Lower Acceleration will repel or attract considerably slower.
* If the Friction parameter is non-zero, the higher the value the more motion is lost on contact, until eventually all kinetic force is lost from the collision.

(Physics - Contact Forces)

With these basic principles, many physical interactions can be recreated via stacking. If you combine this with other triggers like Collision blocks, the possibilities expand further.

# Binary Stacking

Sometimes you’ll run into situations where stacking individual triggers isn’t efficient, for one reason or another. In these cases, Binary Stacking may help you to save time and/or groups. This technique does require pre-planning, but can heavily decrease the amount of groups used along with providing a performance increase.

## What is Binary?

Unlike our base$-$10 decimal system consisting of digits 0 to 9, binary represents numbers using only 1s and 0s, referred to as base$-$2. **Each place value in binary** is called a **bit**. Counting in decimal would look like this: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and so on, whereas counting in binary would look like this: 0, 1, 10, 11, 100, 101, and so on.
In base$-$10, each place value represents a power of 10; the rightmost digit is multiplied by 10⁰, the next digit by 10¹, the next by 10² and so on. For example, 3472 in decimal equals 3·10³ + 4·10² + 7·10¹ + 2·10⁰. In binary, each bit represents a power of 2. For example, the number 1101 in binary equals 1·2³ + 1·2² + 0·2¹ + 1·2⁰, which equates to 13 in base$-$10. The maximum value you can store in a given number of bits can be found with the formula $2^n - 1$, where $n$ is the number of bits you have. For example, 4 bits gives you a maximum of $2^4 - 1$, or 15.

{{< img src="https://lh3.googleusercontent.com/d/1uylbjmkxui3xUsL4lxn8s1BqquSmaGku/view?usp=drive_link" >}}

## Binary Conversion

To convert from binary to base$-$10, we add the value of every non-zero bit multiplied by its place value power to get the decimal sum. For example, the binary number 10110 converts into 22.

(Binary Stacking - Binary to Decimal Conversion)

To convert from decimal into binary, start at the largest power of 2 that can fit into the number you are converting. If the number being converted is larger than the current bits’ power of 2, change the bit to a 1, and subtract its respective power of 2 from your number. If the number being converted is smaller, leave the bit as is and don’t subtract. Move on to the next highest bit with your new number and repeat this for each bit afterwards.

For example, we will perform the inverse of our conversion from earlier:

* The highest power 22 can fit into is 24 (16), so change the bit representing 16 to 1 and subtract 16 from 22 to get 6.
* 8 cannot fit into 6, so leave the bit representing 8 as is.
* 4 can fit into 6, so set the bit representing 4 to 1 and subtract 4 from 6 to get 2.
* 2 can fit into 2, so set the bit representing 2 to 1 and subtract 2 from 2 to get 0.
* Since there are no remainders from calculating the previous difference, we can leave the bit with power 20 (1) as is, finishing the conversion.

(Binary Stacking - Decimal to Binary Conversion)

The reason binary is useful is because it can represent $2^n-1$ different states using only $n$ numbers. These “states” can be anything: group IDs, item/time IDs, or even valid trigger values. Additionally, those $n$ numbers could be groups, item IDs or only one item ID containing all the information. If we combine this concept with stacking, many IDs can be saved. We will now cover the ways binary logic can be applied and the pros they have.

## Toggle Logic

We discussed earlier that Toggle Triggers essentially work like AND gates; if an object is linked to multiple groups, it will only be toggled on if *all* groups are toggled on. Because of this, you can see how Toggle Triggers relate to bits and Binary Counting; With one Toggle Trigger, you get 2 possible states, 2 triggers get you 3 states, 3 gets you 8 states, etc.

{{< img src="https://lh3.googleusercontent.com/d/1OLE9c3ZtT4XT0tfYuFBFDpq_pigJhdRr/view?usp=drive_link" >}}

If we stack multiple Toggle Triggers, keeping Binary Counting in mind, we can save a lot of groups as the number of states increase *exponentially* the more bits you use. Any trigger with toggling capabilities can do this technique, but does require some setup:

1. You need to have a base set of Toggle triggers; one trigger that toggles one group on, and another to toggle another group off. We’ll refer to this setup as a “switch” from now on; this first switch will be for the Ones Digit.
2. Next, place down any amount of Ones Digit switches so the groups being toggled alternate every time the triggers activate. Use as many as you need here.
3. After this, place your Twos Digit switches; use two new free groups to make each Twos switch, and place one for every other Ones switch. Repeat with Fours, Eights, Sixteens, and so on, just as we discussed in Binary Counting.

(Binary Stacking - Toggle Logic Video)

Overall this results in $2^{n/2} - 1$ possible states, where $n$ is the number of groups you’ve used on the switches. This setup is especially useful for cases requiring many unique states, such as frame-by-frame animation or data structures.

## Transformative Logic

Much like Toggle triggers, we can think of transformative triggers as being “active” or “inactive”, which falls into our definition of a bit: The “active” state is on or 1, and “inactive” is off or 0. When many transformative triggers are combined, their effects add together to make a single effect.

What this means is that you can get significantly more efficient stacks without using nearly as many groups. Instead of needing a unique trigger for every possible transformation, you can reuse smaller “building blocks” that combine to form all our target outcomes, following the same logic as binary does. With $n$ stacked triggers, this method gives you up to $2^n-1$ unique effect combinations.

A good example is parallax movement. Instead of making a new Follow trigger for each layer speed, you can use smaller base speeds like 0.5x, 0.25x, and 0.12x. By turning them on in different combinations, you get 7 different net speeds (0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87), which are almost evenly spaced. You can do this with any set of numbers as long as they are in multiples of base$-$2. (e.g. the first layer moves 0.25x, on the 4th bit, you multiply 8 * 0.25 to get 2.)

(Binary Stacking - Parallax Example)

Another example is Pulse Triggers. Since HSV values stack additively, you can place several pulse triggers that adjust the hue by different amounts. The values used aren’t too important, but it’s recommended that they follow the format $a\cdot 2^{n-1}$, where $a$ is the value that the first trigger holds. For instance, if you use 4 pulse triggers that shift the hue in units of +15, +30, +60 and +120, then by combining them you can reach hues 15, 30, 45, up to 225. The same idea can be applied to saturation or brightness values as well, allowing a wider color palette from only a few Pulse Triggers.

(Binary Stacking - HSV Example)

The difference between the additive and multiplicative cases lies in how the possible outcomes are distributed. With additive triggers, every time you activate an extra “bit” you are adding a constant amount to the final result. This means the spacing between outcomes is always the same, like in the HSV example. No matter how many triggers you add, the increments are uniform, and you can cover an entire range of numbers using evenly spaced steps. This is essentially the same principle as binary numbers: each additional bit adds a fixed power of two, and the sum gives you a clean coverage of all numbers in between.
Multiplicative triggers can’t cover a range of numbers in linear increments; the spacing between outcomes grows/diminishes exponentially depending on the input, so at best you can approximate even spacing like our parallax example.

## ID to Trigger Values Conversion

Most triggers offer a wide range of parameters for producing a desired effect. However, one of the main issues with them is that they are **static**: **once placed and configured, their values can’t be changed during playtest**. This is fine for simple cases, as you can always place more triggers when needed. Over time though, this can get out of hand when changing parameters on the fly; the more triggers that are added, the less maintainable and messy it becomes. Fortunately, we can use stacking and binary conversion to convert any numerical ID (item & pickup IDs) to trigger parameters so they can be more easily controlled.

Suppose we want to use a number $X$ to control the value of some effect applied by an additive-stacking trigger on an object $A$. For example, if we want to move $A$ on the x-axis, where $X$ is the number of units moved, then we do the following:

1. Determine a maximum value $d$ the effect should reach, then determine the largest integer $n$ such that $2^n \le d$. For example, if we want to move $A$ at most 300 units, then we need to choose $n = 8$, because $2^8 = 256 \le 300$. This way, we will cover $2^n, 2^{n-1}, \dots, 1$ units total, which in this case would be 511 units.
2. Use a spawn trigger to activate an Item Edit Trigger. Item Edit will perform the operation “(Time ID)$A$ = (Time ID)$X$” to save the input number $X$ to the time ID of $A$, which will enable us to modify the input number stored in $A$ without changing $X$.
3. Using the same spawn trigger, activate $n+1$ Item Comp Triggers ordered horizontally, making sure they are placed after the Item Edit. Each Item Comp will correspond to a power of two, ordered from largest to smallest.
4. For every $k-$th item comp, make it check if “(Time ID)$A$ ≥ $2^{k-1}$”. If that condition passes, spawn an Item Edit Trigger that performs “(Time ID)$A$ = (Time ID)$A$ - $2^{k-1}$”, then spawn the trigger that applies the effect you want by an amount of $2^{k-1}$ units. Repeat for all Item Comp Triggers until you have checked all $n+1$ of them.

(Binary Stacking - ID conversion diagram)

What we are essentially doing here is converting from decimal to binary, where we transform an object by $2^k$ units, if and only if the $k-$th position of the binary representation of $X$ is 1. Since the effects stack additively, the sum of all contributions will match $X$ exactly, and thus $A$ will be transformed $X$ units.

(Binary Stacking - ID to Values)

We use binary units to ensure the entire process is done within a frame. Since any number can be represented in binary, we read the digits from left to right to determine how the object should move; object $A$ moves $2^k$ units if the $k-$th digit is 1. By setting a maximum distance $d$, we know the binary representations of all numbers available will not exceed $d$, guaranteeing spawn loops won’t be used to handle digit lengths as long as enough Item Comp Triggers are used. We will expand more on this setup and other ones involving advanced logic on the [Making Functions](<>) guide.
