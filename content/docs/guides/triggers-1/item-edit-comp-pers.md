---
draft: false
title: Item Edit, Comp, & Pers
weight: 3450
date: 2023-12-30T00:00:00.000Z
description: This guide explains how to use the Item Edit, Compare, and Persistence triggers. These are triggers which give you control over how Item IDs work in your level.
authors:
  - komatic5
contributors:
  - komatic5
  - vexilo5
  - poryii
tags:
  - Grade 1
  - Item Triggers
seo:
  title: How to Use Item Edit, Compare, and Persist
  description: A short guide to using the Item Edit, Item Compare, and Item Persist triggers in Geometry Dash.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}




- **Item Edit** lets you form simple or complex equations using two Item ID values and store the result.
- **Item Comp** compares two Item ID values and activates groups based on the result.
- **Item Pers** gives Item IDs the ability to remain after the player has died.






{{< /callout >}}


- - -


# 1: Item Edit


The **Item Edit** {{< img src="images/GDEmotes/Triggers/ItemEdit.png" class="emote" >}} trigger lets you make simple equations using the values stored in Item IDs.


To start, you need at least one existing Item ID. Ideally, these IDs should already be modified by a Pickup trigger so its value is not zero.


{{< img src="https://lh3.googleusercontent.com/d/1_6Ki7c4fn7SIgHPALg3Obw_68TQiB4Nw" >}}


ItemID1 & ItemID2 are the IDs containing the values you want to use in your equation. The Target ItemID is the ID that stores the result of the equation.


The checkboxes correspond to each Item ID’s type:


* Item - A normal item counter like that used in the Pickup trigger.
* Timer - A timer item counter. Place a Counter object, set its Item ID, and enable the “Time Counter” checkbox. You can then use this with the Time triggers.
* Points - A point item counter. In the Counter object, use the “Points” checkbox; this works with the Points mechanic in Platformer Mode.
* Time - The amount of time you’ve taken on your current attempt. Use the “MainTime” checkbox in the Counter object.
* Attempts (Att) - The amount of attempts you’ve taken so far. Use the “Attempts” checkbox in the Counter object.


Once your IDs are set up, you’ll get an equation in the box.


{{< img src="https://lh3.googleusercontent.com/d/1J7zEIloKWa-w4T858WzV1OkePLo5yLh3" >}}


Use the first three green buttons to manipulate the equation. The first button modifies how the new values affect the Target ID, the second modifies the operation between ID1 and ID2, and the third chooses to either multiply or divide by the value in the “Mod” slider.


The 4th and 5th options choose between absolute value or negative value.


{{< img src="https://lh3.googleusercontent.com/d/1pTx-GsHOdYoPab2g7W6fbLFKqV1EFi8B" >}}


* Equals (=) - Equals sign; there can be only one in the equation.
* Addition (+) - Adds the two Item IDs.
* Subtraction (-) - Subtracts the first Item ID by the second Item ID.
* Multiplication (•) - Multiplies the two Item IDs.
* Division (/) - Divides the first Item ID by the second.
* Absolute value (A) - Makes the equation result always positive.
* Negative value (N) - Makes the equation result always negative.


{{< callout context="caution" title="Note:" icon="outline/info-circle" >}}


Pay attention to the order of operations by looking at the parenthesis in your equation. Some operations listed above will always occur before or after other operations.


{{< /callout >}}
You can set the Target ID to be an Item ID, Timer value, or points.
>
>
>
> The “NA” options allow for rounding:


* Round (RND) - Rounds numbers to the nearest integer. `0.4` rounds to `0`, while `0.5` goes to `1`.
* Floor (FLR) - Rounds numbers to the nearest *lesser* integer. `0.9` rounds to `0`.
* Ceiling (CEI) - Rounds numbers to the nearest *greater* integer. `0.1` rounds to `1`.


{{< callout context="caution" title="Note:" icon="outline/alert-triangle" >}}


Be careful when taking the floor or ceiling of negative numbers, as they may not do what you would expect. For example, the floor of `2.5` is `2`, but the floor of `-2.5` is `-3` because `-3` is less than `-2.5`.


{{< /callout >}}


{{< youtube SG0LNJ_Omvw >}}


**Item Edit** {{< img src="images/GDEmotes/Triggers/ItemEdit.png" class="emote" >}}  also allows you to do complex algorithms like the Fibonacci Sequence and Recursion.


{{< youtube rupPPGXXYos >}}


{{< youtube O8doXySQH9A >}}


# 2: Item Compare (Item Comp)


The **Item Comp** {{< img src="images/GDEmotes/Triggers/ItemComp.png" class="emote" >}} trigger compares the values of two Item IDs and activates group IDs depending on the outcome.


{{< callout context="caution" title="Note:" icon="outline/alert-triangle">}}


**Item Comp** ONLY works as a **Spawn trigger**, not a **Toggle trigger.**


{{< /callout >}}


The options in this trigger are very similar to {{< img src="images/GDEmotes/Triggers/ItemEdit.png" class="emote" >}} **Item Edit;** the values from two Item IDs are used in an equation and the outcome is saved in another Item ID.


* TrueID - the ID that activates if the comparison is true.
* FalseID - the ID that activates if the comparison is false.
* Tol - the allowed margin of error for the True and False ID conditions.


{{< img src="https://lh3.googleusercontent.com/d/1FEyfics0P0rjGuZe0fAzFQUov3alVUMr" >}}


The modification options and ID types are the same as well, but the differences come in the operations it lets you perform. These operations are **relational** and **compare values instead of manipulating them**:


* Equals (==) - I1 must equal I2 in value.
* Less than (<) - I1 must be less than I2.
* Less than or equal to (<=) - I1 must be less than or equal to I2.
* Greater than (>) - I1 must be greater than I2.
* Greater than or equal to (>=) - I1 must be greater than or equal to I2.
* Not equals (!=) - I1 must not equal I2.


{{< youtube FSBUYABrU4w >}}


# 3: Persistent Item (Item Pers)


The **Item Pers** {{< img src="images/GDEmotes/Triggers/ItemPers.png" class="emote" >}} trigger lets Item ID values remain the same after the player dies. This basically acts as a replacement for the Attempt-Based Data guides from 2.1.


{{< img src="https://lh3.googleusercontent.com/d/1gL9eh-cBKJwAK6FRibY0EWYj0holzW6K" >}}


The checkboxes provide options for the Item ID:


* Timer - select if the Item ID is a timer item counter.
* Persistent - sets the Item ID as “persistent” to work after the player dies.
* Target All - targets every persistent item at once.
* Reset - reset the Item ID’s value.


{{< youtube Hwx1Q1-nGzI >}}


**Video:**
{{< youtube BT8PyW4iG0s >}}
