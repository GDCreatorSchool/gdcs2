---
draft: false
authors:
  - chuckolate
title: Stacking Properties
seo:
  title: How to Stack Triggers in Geometry Dash
  description: Learn how stacking combines trigger effects and how to control multiple values in Geometry Dash setups.
  canonical: ""
  noindex: false
weight: 6045
date: 2026-09-02T00:00:00.000Z
description: Stacking is an important component of using triggers. By combining two triggers, you can achieve different effects depending on the type of triggers used. For example, an object targeted by two move triggers activated simultaneously will have both move effects applied at once. In this guide, we’ll untangle the ways that triggers can stack, and also cover useful setups involving stacking.
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
  - electrifyxd
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Trigger stacking involves activating triggers on the same group at once to combine their effects, which can have varying output based on the type of triggers and stacking at play.
- Stacking can be used to achieve physics simulations through the use of triggers like Advanced Follow and its properties like Acceleration and NearDist.
- Binary Stacking can help save on time, groups, and performance in some cases, along with allowing modifiable trigger parameters with the help of Item Comp / Edit.

{{< /callout >}}

- - -

# 1. Stacking

**Stacking** is the act of **combining two or more triggers of *the same type* in order to mix their *prolonged* effects**. For example, an object targeted by two move triggers activated simultaneously will have both effects applied.

It’s important to make the distinction between stacking and dependencies. A trigger **dependency** is **a relation between multiple triggers where they rely on each other in order to produce a desired output**. In this context, trigger stacking is a special type of dependency, but not all dependencies have to do with stacking. You can check more information about dependencies in the [Trigger Dependencies](</docs/guides/triggers-2/trigger-dependencies>) guide.

## No Stacking

Triggers that apply their effects instantly cannot be stacked. If multiple triggers of this type are activated simultaneously, their actions will be performed separately, regardless of their target properties. Some examples are:

* {{< img src="images/GDEmotes/Triggers/ItemEdit.png" class="emote">}} {{< img src="images/GDEmotes/Triggers/GChange.png" class="emote">}} Instant Effect Triggers
* {{< img src="images/GDEmotes/Triggers/Spawn.png" class="emote">}} {{< img src="images/GDEmotes/Triggers/ItemComp.png" class="emote">}} Instant Condition Triggers (Spawn, Instant Count, Item Comp, etc).
* {{< img src="images/GDEmotes/Triggers/Count.png" class="emote">}} {{< img src="images/GDEmotes/Triggers/Collision.png" class="emote">}} Continuous Condition Triggers (Count, Collision, etc).
* {{< img src="images/GDEmotes/Triggers/UI.png" class="emote">}} {{< img src="images/GDEmotes/Triggers/LinkVisible.png" class="emote">}} UI, Link Visible

## Override Stacking

Some triggers can **override** the effects of another trigger of the same type. There are two different types of override stacking.

### Instant Override

If a trigger of this category is activated while another is active, the trigger activated last will instantly override the previous one. {{< img src="images/GDEmotes/Triggers/Shake.png" class="emote">}} Shake Triggers and {{< img src="images/GDEmotes/Triggers/ShockWave.png" class="emote">}} {{< img src="images/GDEmotes/Triggers/ShockLine.png" class="emote">}} Shockwave/line Shaders are examples of such.

{{< youtube euEAwh64zWo >}}

### Progressive Override

If a trigger of this category is activated while other ones are active, the trigger activated last will override the previous ones over time, which can also be altered by easing, if the option is available. This trigger's action will start from where the previous left off, and then transition smoothly toward its final state. Some examples are:

* {{< img src="images/GDEmotes/Triggers/Color.png" class="emote">}} Color, Alpha.
* {{< img src="images/GDEmotes/Triggers/CameraZoom.png" class="emote">}} Zoom, Static, Offset.
* {{< img src="images/GDEmotes/Triggers/EditColor.png" class="emote">}} Shaders with fade times.

Do note that when triggers are overridden by another trigger, the previous trigger’s action will stop completely.

{{< youtube YcCrcqH_uE0 >}}

## Mixed Stacking

Certain triggers can *combine* their effects if triggered within the duration time of other active triggers. The effects of this can vary depending on which triggers are used.

### Additive Stacking

When multiple triggers are active simultaneously, their effects are added. If an object is being affected, its state will be the net result of applying all transformations over time. Triggers of this type include:

* {{< img src="images/GDEmotes/Triggers/Move.png" class="emote">}} {{< img src="images/GDEmotes/Triggers/AreaMove.png" class="emote">}}Move, Area Move, Rotate, Area Rotate.
* {{< img src="images/GDEmotes/Triggers/Keyframe.png" class="emote">}} Keyframe, when keyframes move or rotate objects.
* {{< img src="images/GDEmotes/Triggers/FollowPlayerY.png" class="emote">}} Follow Player Y.

{{< youtube ZsK8spsg3zw >}}

### Multiplicative Stacking

If several triggers of this type are active, their effects combine multiplicatively. If an object is being affected, its state will be amplified by each active trigger over time. {{< img src="images/GDEmotes/Triggers/Scale.png" class="emote">}} Scale/Area Scale and {{< img src="images/GDEmotes/Triggers/Keyframe.png" class="emote">}} Keyframe scaling can produce this effect.

{{< youtube KPxXhf3_ZZc >}}

Activating many multiplicative triggers at different times will still output a transformation that’s the product of all actions. What happens during this heavily depends on the duration, easing and values of the triggers, since these parameters are being multiplied in real time. For instance, scaling an object from 1x to 4x while performing another scale operation halfway through with a target of 2x, the output will be an object 8x the original size. However, the scale of the object won’t necessarily increase linearly.

### Group Stacking

**If you give an object multiple groups, all effects applied to each group will mix together**. This works for triggers that support additive and multiplicative stacking, where the result would be the same as applying them all to a single group. Some triggers that support override stacking can stack across groups too, which are:

* {{< img src="images/GDEmotes/Triggers/Toggle.png" class="emote">}} Toggle Triggers: If an object has multiple groups, it will be toggled off if any one of the groups are toggled off. This is common for AND gates, which are covered in the [logic gates guide](/docs/guides/triggers-2/making-logic-gates/).
* {{< img src="images/GDEmotes/Triggers/Alpha.png" class="emote">}} Alpha Triggers: If an object has multiple groups, its opacity will be the product of each group's opacity.

{{< youtube hAYcHdrSgzg >}}

## Complex Stacking

Some triggers support multiple stacking types, allowing you to modify when and where stacking takes place depending on the features you use. As this varies from trigger to trigger, we'll go through each one of these separately.

### Follow

The result of stacking {{< img src="images/GDEmotes/Triggers/Follow.png" class="emote">}} Follow triggers depends on how they are stacked:

* Many groups can follow one group, and vice-versa. In this case, Follow triggers will stack *additively*.
* If two or more triggers with the same target and center groups are activated, the latter will *override* the first. If you want to additively stack multiple follow triggers that target the same groups, you can use group stacking.
* If one center group is another’s target group, then the results will vary upon activation order. In this case, an object’s final X/Y mod values are obtained by multiplying all the X/Y mod values from the Follow triggers it depends on.

{{< youtube UVhgGHfovU0 >}}

### Pulse

{{< img src="images/GDEmotes/Triggers/Pulse.png" class="emote">}} Pulse trigger modes can affect the way these triggers stack:

* Pulse triggers in Color mode will use *Progressive Override stacking*, regardless of target type.
* Pulse triggers in HSV mode will use *Mixed stacking*; Hue attributes always stack additively, while Saturation and Brightness attributes stack multiplicatively by default. They can stack additively if you enable their respective checkboxes.
* If you combine multiple Pulse triggers with different pulse modes, every time a Color mode trigger or a HSV mode trigger that pulses with a specific color ID activates, it will override all the other effects acting on the target group/channel.

{{< youtube UeUOhO9baX4 >}}

Unlike other triggers that use Override stacking, Pulse triggers are reversible; even if other pulse triggers are being overridden, their action will hold until the fade time has elapsed. If the most recent trigger is interrupted, the previous triggers will continue their action, as if the last trigger had never activated.

Additionally, if you enable **exclusive** on a pulse trigger, it will override all previous pulse triggers acting on the same ID. This option makes overriding act as usual, though it currently only works while playing or playtesting the level, not in-editor.

{{< youtube s8-DRLBXsHw >}}

### Area & Enter

Area & Enter triggers have different types of stacking depending on which transformations are applied:

* {{< img src="images/GDEmotes/Triggers/AreaRotate.png" class="emote">}} Area/Enter Move and Area/Enter Rotate stack additively.
* {{< img src="images/GDEmotes/Triggers/AreaTint.png" class="emote">}} Area/Enter Scale, Area/Enter Fade and Area/Enter Tint multiply their output.
* Each Area/Enter effect keeps its own effect areas, **conditioning stacking to only occur if an object intersects multiple effect areas**.

{{< youtube S2IjRh7IqDU >}}

Area triggers have the option to change their priority; Area priority goes from highest to lowest, where lower priorities will only apply once higher priority triggers have activated. This can change the result depending on which triggers have higher priority.

{{< youtube prigiKHooEI >}}

## Advanced Follow Stacking

When stacking multiple {{< img src="images/GDEmotes/Triggers/AdvancedFollow.png" class="emote">}} Advanced Follow triggers, their effects mix together to produce complex movements which fall into override and additive stacking. When an object is under the influence of Advanced Follow, the game not only has to keep track of its position in 2D space, but also *its destination and how far it has to travel*. This is done with **velocity**, which is **a vector that points in the direction the object should move to**. On the example below, the velocity is the red arrow, where the object moves according to the velocity's direction, and how fast it moves is determined by the *length* of the vector and their components. For the purposes of this guide, we will refer to length as **speed**.

<div style="width: 100%; height: 450px; overflow: hidden; position: relative; display: flex; justify-content: center;">
  {{< gif src="https://lh3.googleusercontent.com/d/12ugKELzYiN81bvjR87apkV_yNrSDMSZq" style="position: center;" >}}
</div>

**Advanced Follow Triggers will adjust the velocity of the target group, then update the position of the group based on said velocity on *every frame***. The process works as follows:

1. The trigger with the highest priority value in a set of *n* amount of triggers acts first.
2. Reads the current positions of the target and follow groups, and then modifies the velocity of the target group according to the trigger’s parameters.
3. Once the velocity has been changed, the trigger uses it to transform the position of the target group.
4. Each trigger that succeeds the highest priority trigger will use the next new position as its starting point to apply changes to. This is repeated until all triggers have acted, where the final positions achieved will be the ones that are visible in-game.

This process is showcased in the video below. There, group ID 10 triggers the stacked Advanced Follow triggers normally, while group ID 11 triggers them one frame at a time, simulating how the position is calculated internally in-game.

{{< youtube W8DD-9UljXI >}}

Depending on the settings of the advanced follow triggers being stacked, **they can either overwrite the velocity, add small adjustments to it, or not change it at all**. In particular,

* Mode 1: *Overwrites* the current velocity with a new one, calculated from the trigger’s parameters.
* Modes 2 and 3: *Adds* to the existing velocity, altering its direction and speed over time. These also have the option to overwrite or add the target’s current velocity with the one specified in *startSpeed* and *startDir*. In those cases, the trigger first applies said velocity to the current one when it activates, and *then* proceeds to compute a new velocity normally.
* If the speed of the resulting velocity from any mode exceeds the value in *maxSpeed*, the trigger will cap the speed to that value, but preserve the direction.

There may be situations where the trigger won’t change the current speed. For instance, if the target group isn't within range of *maxRange* of the Follow group. In those cases, the trigger skips its transformation for that frame, letting the others resume normally.

{{< callout context="caution" title="Caution: Even if an Advanced Follow trigger doesn't have any parameters, it will *still* modify the object's velocity." icon="outline/info-circle" >}}
{{< /callout >}}

This can be seen in the following video, where triggering an "empty" Advanced Follow makes the object move at twice the speed, but if we limit the trigger effect under a certain range, then the trigger will truly do nothing until it gets to the active range.

{{< youtube 4-C-N6DkKUg >}}

Lastly, enabling **exclusive** on an Advanced Follow Trigger will stop other triggers from stacking their transformations onto the target group, regardless of Follow group or mode. If more triggers activate *while* the exclusive Advanced Follow is active, they won’t act unless the exclusive trigger is stopped. Do note that if multiple Advanced Follow triggers activate *before* enabling an exclusive trigger, the action of the previous ones won’t stop.

{{< youtube -feKmJPFA6M >}}

## Performance

Stacking can be costly on performance in some cases, since the game needs to do a sizable amount of math for transformations. If a trigger modifies a target group based on a center group, then stacking several of them will:

* **Multiply** the number of calculations by the number of different target groups if the center groups are the same, on all transformative triggers.
* **Multiply** the number of calculations by the number of different center groups, if the target groups are the same (the only exception to this is the move trigger).

Notably, Move & Rotate triggers do **not** increase the number of calculations if all target groups and all center groups are the same. The rest of the transformative triggers **do** so. This means that Move & Rotate triggers are more optimized for stacking than the rest of the transformative triggers, so you may prefer them if your transformations affect a lot of objects. Note that this will also apply for keyframe animations, as long as no scaling is involved.

{{< youtube esvwceystGw >}}

Any other situation will fall into a combination of the three cases described above. Let’s say there are two center groups, named $A_1$ and $A_2$, that move differently. We make a group $B$ follow both, along with a group $C$ following $B$, which has $n$ amount of objects. What will happen is that $B$ will require two calculations to be moved as there are two different center groups (point 3), and $C$ will require $n$ calculations to be moved since they all follow one center group (point 1).

---

This concludes basic stacking. Once we know how stacking works on an advanced level, it can be used to produce effects that wouldn't be possible with just one trigger. There are many ways to use stacking properties, so only a handful of useful applications will be covered. As we cover when and how to use stacking for said applications, you can apply this knowledge to make more complex setups.

# 2. Stacking Transformations

A single trigger gives limited options for modifying objects. For complex transformations, you can stack many triggers with Mixed Stacking in mind. There are a lot of ways of doing this, all of which will be covered in order of complexity.

## Transformation Splitting

Trigger **splitting** can be defined as **separating transformations performed by a single trigger into many triggers**; if a trigger has parameters $A$ and $B$, it can be split into 2 triggers: One to modify $A$ with a set easing, and another to modify $B$ with a different easing. The final result will be equivalent to using one trigger to change both parameters, except with added freedom for easings and durations. For example, a move trigger can be split so that the first changes the $x$ component and the latter changes the $y$ component.

{{< youtube r_Au6aINrYo >}}

This is useful when you want certain parameters to behave independently, where one change in a component doesn't have to correspond with another. Some examples are simulating parabolic trajectories, having some parameters be player-controlled, or plotting functions.

## Cumulative Movements

Stacking can also be used to *combine or cancel effects between triggers*. When stacking, their effects mix together, meaning you can create transformations that accelerate, decelerate, or oscillate depending on their interaction.

Sometimes, triggers stack in a **cumulative** manner, where **all triggers apply transformations that build up into a larger overall effect**.

{{< youtube GmCe4Z7tVnI >}}

An application of cumulative stacking is parallax. Normally you would set many groups with their own follow rates; with group stacking, this can be achieved in marginally less groups by adding the rates together. This is an example of binary stacking, which will be covered later.

## Counteracting Movements

Conversely, **triggers can be set to counteract each other**. If multiple triggers act on the same object, opposing transformations may cancel each other out, reducing or balancing the resulting effects depending on which triggers are more dominant. This can be illustrated using advanced follow triggers. If an object follows point $A$, and another follows point $B$, the effects will cancel each other, where the dominant interaction will be determined by factors like easing. This can be useful to find the middle point between objects, or slow down/oscillate a transformation by changing parameters over time.

{{< youtube _7XxNNcuIWU >}}

## Custom Movements

Keeping the stacking techniques described above in mind, **we can mix cumulative and counteracting movements with different parameters to create more complex effects**. There’s plenty of options on combining these methods, one key example being animation.

In animation, *multiple components need to move together in a coordinated way*. A lot of the time, these movements may inherit another, if it depends on that movement. For instance, an enemy whose head, eyes, torso, and four limbs are moving may have some dependencies: the eyes may depend on the movement of the head, which may depend on the torsos’ movement. Every component will mesh together to create complex movements like blinking, head tilting, or walking cycles, using cumulative and counteractive movements.

{{< img src="https://lh3.googleusercontent.com/d/1XWp4UzYR7I6Vn-M7D_Y1VznM39wEWFGH" >}}

To achieve this, we can use simple principles while creating animations. Keeping these in mind while animating will help you produce more intricate and better quality animations.

* **Transform Individual Components:** Before we animate our subject, we must identify all the individual parts of it. Start by making animations for each part independently to give every component their own movements. In most cases, you may also need to add parent groups to each component, to set where their center of transformation is.
* **Share Dependent Groups:** Components that move together or influence each other should share groups, so newer transformations will still influence earlier ones.
* **Stacking:** Once both the individual movements and dependencies are made, stacking can help combine them all into one; all independent and dependent transformations contribute to allow cumulative and subtractive movements to occur.

Using the enemy example described earlier along with our principles, we will create two animations: *Idle and Walking*.

**Individual and dependant components**<br>
In this case, our enemy has a head, two eyes, a torso, and four limbs. We must give them separate groups as they will move independently of each other. For the eyes, we will only make a blink animation, so we can assing them the same group so they blink the same way.

{{< callout context="note" title="The more independent parts there are, you will need more groups. For example, here every leg will have its own movement, so they must have at least one different group each." icon="outline/info-circle" >}}
{{< /callout >}}

Next, dependent components must share groups. We will make the eyes move alongside the head, the head move with the torso, and finally move the enemy as a whole. This establishes three dependencies between individual parts, so we will group them using three different group IDs.

{{< youtube 7acom_L_NSU >}}

Once we have identified every independent component and the relations between each other, we can move on to animation.

**Idle Animation**<br>

In our example, the eyes will blink at a random pace, the head will aim slowly to the player, and the torso and head will move up and down to simulate breathing.

1. First we focus on the individual components' animation. Here the only independent components at play are the eyes.
2. Next, we move on to animate the component dependencies, which in this case are the whole head, and the head+torso combination.

Stack all the animations to wrap everything up.

{{< youtube IRPD5HbXkxM >}}

**Walking Animation**<br>

We will make the walking animation now. Same principles will apply.

Here, the enemy will close its eyes and crouch backwards. Its legs will move in a cyclic pattern, and when the movement is done, everything will bounce back to its original state.

1. As before, we animate all the independent components first. They are the eyes and legs in this case.
2. Then, we focus on the dependencies. For these animations, they are the head+torso dependency for crouching, and the whole enemy for traslating.

Finally, stacking all these transformations together will produce a natural looking animation.

{{< youtube X28LWz8kSeo >}}

# 3. Physics

An Advanced Follow trigger can move an object to another at an initial speed, acceleration, friction and more. **This allows us to model an Advanced Follow trigger as a physical force**; the follow group applies a force to the target group, thus moving it closer or further from said group. Because of how advanced follow stacking works, many objects can apply different forces to each other, producing actual physics models with only a couple of triggers.

## General Physics

Just a few Advanced Follow triggers are enough to create basic physics simulations; Advanced Follow triggers, when set up, will do the following:

* Set an initial speed and direction.
* Follow objects with a set acceleration to simulate different forces, which can either pull or repel targets from the Follow group. For example, an object can be set to follow the y-axis of another object that's a considerate distance away with a set acceleration as terminal velocity to simulate gravity.
* Apply friction to dampen the movement of objects, which can be used to simulate things like air resistance.

With these in mind, we can simulate the parabolic movement of a particle. A particle can be launched with a set speed and angle, following a parabolic path if gravity is applied. Friction can be set on the x-axis to replicate air resistance, and more Advanced Follow triggers can be used later to set a new initial speed and angle.

{{< youtube I_dlYkkL624 >}}

{{< callout context="danger" title="It is very important to note that stacking too many Advanced Follow triggers may produce unstable behaviour." icon="outline/alert-triangle" >}}

{{< /callout>}}

As we saw before on the Advanced Follow stacking subsection, **even if an Advanced Follow trigger does not contribute to the velocity of an object, it will *still* update the object's velocity based on the values layed by other Advanced Follow triggers**. This is why on the video above we use stop triggers when applying an extra velocity: once the set velocity is applied, if we don't stop the trigger it will keep updating the velocity, making it go faster everytime a new trigger activates.

Also, **the order on which Advanced Follow triggers activate highly matters as well**, because each trigger will update de position & velocity the other triggers pick up from. That's why if you need very precise simulations, you may need to switch to numerical methods for physics simulations, which we'll cover on another guide. But for simulating simple physics or for simulations that don't require that much precision, Advanced Follow triggers are enough.

## Symmetric and Asymmetric Relations

In real life, forces come in pairs; if object $A$ exerts a force on object $B$, then $B$ applies an opposite force on $A$. The result can change depending on certain criteria of these forces:

* Forces approaching each other are attractive, meaning the objects will come closer as time progresses. Opposing forces are the opposite of this.
* One force approaching an object while another moves away is considered asymmetric.

The diagram below illustrate these types of forces. The notation $F_{AB}$ indicates the force directed from object $A$ to object $B$, and $F_{BA}$ the force directed from object $B$ to object $A$.

{{< img src="https://lh3.googleusercontent.com/d/10PuJd4cumCgtKJdPYI4qNi5krOT9jVb2" >}}

The magnitude of these forces is also important. **They can have equal magnitudes, or there can be forces with higher magnitude than another**. By managing the direction and magnitude of the forces, you can model a lot of physics situations, where the more objects and interactions you have, the more complex and unpredictable the model will get.

To make two or more objects attract, use two Advanced Follow Triggers – one for each object – with positive acceleration towards each other. This creates a symmetric interaction where both objects pull themselves together. If negative accelerations are used, the objects will push themselves away unlike positive acceleration. With multiple objects, this creates a scattering effect as they repel.

{{< youtube M5SDRPSm8Ow >}}

Combining symmetric forces with different magnitudes and directions will result in asymmetric interactions. New movements may emerge due to the forces counteracting or adding with each other, but by nature these can end up being difficult to predict.

{{< youtube 4FC7fms_F9Q >}}

## Collisions

In real life, two objects colliding will apply forces on each other upon contact; the forces of objects will be sent in the opposite direction so they do not phase between each other.

{{< img src="https://lh3.googleusercontent.com/d/15EQPICbJ40p17UtKfYKJdy3B3dv8Phhf" >}}

We can use the NearDist option in Advanced Follows’ second and third modes to emulate such behaviour. NearDist should set the point where a collision should occur, so an opposite force can be applied to prevent phasing.

* Low NearDist values apply force when both objects are closer, whereas larger ones happen further away. For scale, every 30 units in NearDist *approximately* equates to 1 full block in the editor.
* High Acceleration values will make the objects repel or attract quickly, depending on whether it’s negative or positive. Lower Acceleration will repel or attract considerably slower.
* If the Friction parameter is non-zero, the higher the value the more motion is lost on contact, until eventually all kinetic force is lost from the collision.

{{< youtube t6X3uF34iPA >}}

With these basic principles, many physical interactions can be recreated via stacking. For example, using the symmetric/asymmetric & contact forces principles, you can do stuff like soft body physics.

{{< youtube hCkIh4keKcc >}}

If you combine this with other triggers like Collision blocks, the possibilities expand further.

# 4. Binary Stacking

Sometimes you’ll run into situations where stacking individual triggers isn’t efficient, for one reason or another. In these cases, Binary Stacking may help you to save time and/or groups. This technique does require pre-planning, but can heavily decrease the amount of groups used along with providing a performance increase.

## What is Binary?

Unlike our base$-$10 decimal system consisting of digits 0 to 9, binary represents numbers using only 1s and 0s, referred to as base$-$2. **Each place value in binary** is called a **bit**. Counting in decimal would look like this: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and so on, whereas counting in binary would look like this: 0, 1, 10, 11, 100, 101, and so on.
In base$-$10, each place value represents a power of 10; the rightmost digit is multiplied by $10^0$, the next digit by $10^1$, the next by $10^2$ and so on. For example, 3472 in decimal equals
$$
3\cdot 10^3 + 4\cdot 10^2 + 7\cdot 10^1 + 2\cdot 10^0.
$$

In binary, each bit represents a power of 2. For example, the number 1101 in binary equals
$$
1\cdot 2^3 + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0,
$$

which equates to 13 in base$-$10. The maximum value you can store in a given number of bits can be found with the formula $2^n - 1$, where $n$ is the number of bits you have. For example, 4 bits gives you a maximum of $2^4 - 1$, or 15.

{{< img src="https://lh3.googleusercontent.com/d/1uylbjmkxui3xUsL4lxn8s1BqquSmaGku" >}}

## Binary Conversion

To convert from binary to base$-$10, we add the value of every non-zero bit multiplied by its place value power to get the decimal sum. For example, the binary number 10110 converts into 22.

{{< youtube G_tgVExtc3g >}}

To convert from decimal into binary, start at the largest power of 2 that can fit into the number you are converting. If the number being converted is larger than the current bits’ power of 2, change the bit to a 1, and subtract its respective power of 2 from your number. If the number being converted is smaller, leave the bit as is and don’t subtract. Move on to the next highest bit with your new number and repeat this for each bit afterwards.

For example, we will perform the inverse of our conversion from earlier:

* The highest power 22 can fit into is 24 (16), so change the bit representing 16 to 1 and subtract 16 from 22 to get 6.
* 8 cannot fit into 6, so leave the bit representing 8 as is.
* 4 can fit into 6, so set the bit representing 4 to 1 and subtract 4 from 6 to get 2.
* 2 can fit into 2, so set the bit representing 2 to 1 and subtract 2 from 2 to get 0.
* Since there are no remainders from calculating the previous difference, we can leave the bit with power 20 (1) as is, finishing the conversion.

{{< youtube 8BHdjCa9HLQ >}}

**The reason binary is useful is because it can represent $2^n-1$ different states using only $n$ numbers**. These “states” can be anything: group IDs, item/time IDs, or even valid trigger values. Additionally, those $n$ numbers could be groups, item IDs or only one item ID containing all the information. If we combine this concept with stacking, many IDs can be saved. We will now cover the ways binary logic can be applied and the pros they have.

## Toggle Logic

We discussed earlier that Toggle Triggers essentially work like AND gates; if an object is linked to multiple groups, it will only be toggled on if *all* groups are toggled on. Because of this, you can see how Toggle Triggers relate to bits and Binary Counting; With one Toggle Trigger, you get 2 possible states, 2 triggers get you 3 states, 3 gets you 8 states, etc.

{{< img src="https://lh3.googleusercontent.com/d/1OLE9c3ZtT4XT0tfYuFBFDpq_pigJhdRr" >}}

If we stack multiple Toggle Triggers, keeping Binary Counting in mind, we can save a lot of groups as the number of states increase *exponentially* the more bits you use. Any trigger with toggling capabilities can do this technique, but does require some setup:

1. You need to have a base set of Toggle triggers; one trigger that toggles one group on, and another to toggle another group off. We’ll refer to this setup as a “switch” from now on; this first switch will be for the Ones Digit.
2. Next, place down any amount of Ones Digit switches so the groups being toggled alternate every time the triggers activate. Use as many as you need here.
3. After this, place your Twos Digit switches; use two new free groups to make each Twos switch, and place one for every other Ones switch. Repeat with Fours, Eights, Sixteens, and so on, just as we discussed in Binary Counting.

{{< youtube D4Vi1TQf6p4 >}}

Overall this results in $2^{n/2}-1$ possible states, where $n$ is the number of groups you’ve used on the switches, which is always an even number because you need two groups per switch. This setup is especially useful for cases requiring many unique states, such as frame-by-frame animation or data structures.

## Transformative Logic

Much like Toggle triggers, we can think of transformative triggers as being “active” or “inactive”, which falls into our definition of a bit: The “active” state is on or 1, and “inactive” is off or 0. When many transformative triggers are combined, their effects add together to make a single effect.

What this means is that you can get significantly more efficient stacks without using nearly as many groups. **Instead of needing a unique trigger for every possible transformation, you can reuse smaller “building blocks” that combine to form all our target outcomes**, following the same logic as binary does. With $n$ stacked triggers, this method gives you up to $2^n-1$ unique effect combinations.

A good example is parallax movement. Instead of making a new Follow trigger for each layer speed, you can use smaller base speeds like 0.5x, 0.25x, and 0.12x. By turning them on in different combinations, you get 7 different net speeds ($0.12$, $0.25$, $0.37$, $0.5$, $0.62$, $0.75$, $0.87$), which are almost evenly spaced. You can do this with any set of numbers as long as they are in multiples of base$-$2. (e.g. the first layer moves 0.25x, on the 4th bit, you multiply $8 \cdot 0.25$ to get $2$.)

{{< youtube gMYEKSA_-fg >}}

Another example is Pulse Triggers. Since HSV values stack additively, you can place several pulse triggers that adjust the hue by different amounts. The values used aren’t too important, but it’s recommended that they follow the format $a\cdot 2^{n-1}$, where $a$ is the value that the first trigger holds. For instance, if you use 4 pulse triggers that shift the hue in units of $+15$, $+30$, $+60$ and $+120$, then by combining them you can reach hues $15$, $30$, $45$, up to $225$. The same idea can be applied to saturation or brightness values as well, allowing a wider color palette from only a few Pulse Triggers.

{{< youtube 9g8k0kaLIM0 >}}

The difference between the additive and multiplicative cases lies in *how the possible outcomes are distributed*. With additive triggers, every time you activate an extra “bit” you are adding a constant amount to the final result. This means the spacing between outcomes is always the same, like in the HSV example. **No matter how many triggers you add, the increments are uniform, and you can cover an entire range of numbers using evenly spaced steps**. This is essentially the same principle as binary numbers: each additional bit adds a fixed power of two, and the sum gives you a clean coverage of all numbers in between.
Multiplicative triggers can’t cover a range of numbers in linear increments; **the spacing between outcomes grows/diminishes exponentially depending on the input**, so at best you can approximate even spacing like our parallax example.

## ID to Trigger Values Conversion

Most triggers offer a wide range of parameters for producing a desired effect. However, one of the main issues with them is that they are **static**: **once placed and configured, their values can’t be changed during playtest**. This is fine for simple cases, as you can always place more triggers when needed. Over time though, this can get out of hand when changing parameters on the fly; the more triggers that are added, the less maintainable and messy it becomes. Fortunately, we can use stacking and binary conversion to convert any numerical ID (item & timer IDs) to trigger parameters so they can be more easily controlled.

Suppose we want to use a number $X$ to control the value of some effect applied by an additive-stacking trigger on an object $O$. For example, if we want to move $O$ on the x-axis, where $X$ is the number of units moved, then we do the following:

1. Determine a maximum value $d$ the effect should reach, then determine the largest integer $n$ such that $2^n \le d$. For example, if we want to move $O$ at most 200 units, then we need to choose $n = 7$, because $2^7 = 128 \le 200$. This way, we will cover $2^n + 2^{n-1} + \cdots + 1$ units total, which in this case would be 255 units.
2. Use a spawn trigger to activate an Item Edit Trigger targetting an unused ID $A$. Item Edit will perform the operation “$A$ = $X$” to save the input number $X$ to ID $A$, which will enable us to modify the input number stored in $A$ without changing $X$.
3. Using the same spawn trigger, activate $n+1$ Item Comp Triggers ordered horizontally, making sure they are placed after the Item Edit. Each Item Comp will correspond to a power of two, ordered from largest to smallest.
4. For every $k-$th item comp, make it check if “$A \geq 2^{k-1}$”. If that condition passes, spawn an Item Edit Trigger that performs “$A$ = $A - 2^{k-1}$”, then spawn the trigger that applies the effect you want by an amount of $2^{k-1}$ units. Repeat for all Item Comp Triggers until you have checked all $n+1$ of them.

{{< youtube VCt27w9TMY8 >}}

What we are essentially doing here is converting from decimal to binary, where we transform an object by $2^k$ units, if and only if the $k-$th position of the binary representation of $X$ is 1. Since the effects stack additively, the sum of all contributions will match $X$ exactly, and thus $O$ will be transformed $X$ units (this process can be seen in the video when spawn order is activated).

We use binary units to ensure the entire process is done within a frame. Since any number can be represented in binary, we read the digits from left to right to determine how the object should move; object $A$ moves $2^k$ units if the $k-$th digit is 1. By setting a maximum distance $d$, we know the binary representations of all numbers available will not exceed $d$, guaranteeing spawn loops won’t be used to handle digit lengths, which would make this process slower. We will expand more on this setup and other ones involving advanced logic on the [Making Functions](/docs/guides/triggers-2/making-functions.md) guide.

# Sources

- [Velocity GIF](<https://cl.pinterest.com/pin/703546773077635248/>)
