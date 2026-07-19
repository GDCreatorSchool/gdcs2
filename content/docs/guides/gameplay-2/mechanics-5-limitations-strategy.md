---
draft: false
authors:
  - illusion2
title: Mechanics 5 (Limitations & Strategy)
weight: 7050
date: 2024-10-15T00:00:00.000Z
contributors:
  - illusion2
  - psytrancegd
  - everedeck
  - themilkcat_tmc
description: Designing mechanics involves heavy nuance behind connecting major principles of strategic gameplay. This guide will help you apply the concept of limitations to creating strategic mechanics and gameplay.
tags:
  - Grade 2
  - Mechanics
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Limitations are a great way to make players think about their approach to certain obstacles
- Locks and keys force the player to interact with your gameplay, which is important for engagement
- Strategic freedom is when you allow the player to go unbounded; it makes them play around with your system to find the most optimal setup

{{< /callout >}}

** **

# 1: Limitations

## The Definition of Limitations
As you’ve seen from the first paragraph, **limitations** are a vital part of gameplay. Limitations are exactly what you think they are: things that prevent you from doing other things. In the case of game design, limitations are __things that stop the player’s progress__, kind of like an obstacle. You can use limitations to make the player think about the solution to a problem, or work around it. You have to set boundaries that the player can’t get past easily, so it requires thought on the player’s part to make a strategy revolving around that limitation.

But why is this even useful? Take a look at the image below. As you can see, the green square has to get to the upper ledge. Letting the green square fly would remove any thought behind the action, but having the player think about their options and see what they can do to get to the upper ledge creates an engaging strategic experience.

{{< img src="https://lh3.googleusercontent.com/d/1TZf_5PSwO3Y7fNHWtflSdjKZgGY4eeuL" >}}

## Limitations Within Mechanics
But how do you create limits for your mechanics anyway? The easiest is to have clear boundaries for your mechanics. A dash can only go a specific distance, an attack can only do a specific amount of damage, a mechanic can only do a specific thing.

This doesn’t mean everything is set and you can’t have changes, it only means you have to control your mechanic and make sure the players can’t break your game. Allowing players to break your game does have some strategic possibilities, but generally mechanics should only do what they are meant to.

Let's go over an example of this real quick: Tears of the Kingdom. A problem with TotK is that, with the Ultrahand ability, you can create ANYTHING. Flying machines, killing machines, anything you can name, you can make. The problem with this is that when there are platforming sequences or puzzles that require a strategy to complete, you can quickly create a flying machine and bypass the whole thing. This doesn’t mean the Ultrahand ability is bad and that TotK is bad, in fact TotK came up with a genius solution! However, giving the player too much freedom ruins 3 out of 4 of the main dungeons in TotK, as well as the exploration aspect for a lot of people.

*(a hoverbike in TotK, which allows you to fly anywhere with ease, made out of only 3 objects.)*

{{< img src="https://lh3.googleusercontent.com/d/11svvwXJeHM04BjghMUwkDdcKysq8HBSp" >}}

Now hold your horses, this doesn’t mean that freedom is absolutely horrible and you should restrict your player whenever possible, because if you use freedom right it can create incredible strategies and experiences. The main takeaway is that creating limitations matters, and you should always set boundaries on your mechanics.
## Lock & Key
The reason why you’re learning about limitations is because of the **lock & key** concept. This concept is pretty simple: __you need to perform an action to progress, like getting a key to open a lock__. When designing your mechanic, you should always think about how it can either be a lock or a key. Now, how do I create locks and keys within my gameplay? Having a literal key is always a good option; it shows the player the solution while also forcing the player to find a path to the key. In most circumstances you’ll be able to have the player backtrack through the path, using old gameplay in a different context as well.

However, having 7 different keys per room would be overbearing and hard to incorporate into other mechanics related to level design. That’s why it’s always good to mix lock & key into your mechanics themselves. Doing this is extremely simple: just make action A required to progress. If action A is a dash, then make dashing required to beat the room; if action A is a strong attack, then make the attack required to defeat the enemy.

Here’s an example from my level, meow map nya. The gap at the end of the segment requires a dash to get through, then a jump and another dash to land on the wall, but the player can’t dash twice. This is the lock. The red hook on the left gives the player two hooks. This means the red hook is the key.

{{< youtube ydf25gTuPzo >}}

This isn’t what makes the concept of locks & keys within mechanics special, they’re special because of a concept I call a **lock & key chain**. Lock & key chains are a __chain of keys, which open up more keys, which open up even more keys, until you finally reach the final lock__. The way you create a chain is by having action A cause action B. If you have action A cause action B and then you make action B vital to progressing, the player will have to find a way to do action A. What you did is simulate a lock and key chain with your mechanics. It may be obvious, but chains involve much more strategy and thinking than a single key, and with well-designed mechanics you can apply them seamlessly. I’ve hidden a small lock & key chain in the video example from earlier: you need to be on the left of the red hook hitbox, so you need to hook from the right first.

In this video, we have a green swing which brings the player 180° around the center of the green swing. Let’s dissect this and see all the locks & keys.

{{< youtube fV17tlonBZo >}}

- Lock: I need to launch right.
- Key: I can launch right from the top left.
- Lock: I need to get to the top left.
- Key: I can get to the top left from the bottom right.
- Lock: I need to get to the bottom right.
- Key: I can get to the bottom right from the bottom left.

This is slightly unrelated to strategy, but I’ve put this room early on in the level in order to introduce the player to the concept of lock & key chains early on. If the player doesn’t know how they work, they’ll struggle a lot later on when they encounter more difficult and confusing gameplay.

# 2: Strategic Gameplay

Now that you’ve learned how limitations work, let’s go over how you can apply them to create strategic gameplay.

## Applying Limitations to Strategy

To put it simply, a **strategy** is __a self-derived process made to fulfill a goal__. When solving a puzzle, you start at the solution and find the way backwards. Lock & key chains allow the creator to make a puzzle that works backwards seamlessly. However, even if you have a “critical path” through the room, you still need to make the critical path interesting and detailed enough that it makes the player feel smart. For example, let’s take a look at this collectible section in my level.

{{< img src="https://lh3.googleusercontent.com/d/1kGE5y_v4HAZmkZ7FtP2L-0WgOGt0i8Xp" >}}

First, let’s analyze the situation. We start on the bottom left and we have two collectibles we want to get:

{{< img src="https://lh3.googleusercontent.com/d/1lYn_z2FpLjRigVjZQEO69VVukC8GBkhn" >}}

For the right collectible, we would need to start on the bottom left, and for the left collectible we would need to dash from the top left:

{{< img src="https://lh3.googleusercontent.com/d/1AgTCSiZevR8514NhLjfHifQZwxn8R0Kk" >}}

Because we already start on the bottom left, we can take that out of the equation, meaning we need to find a way to get to the top left. This can be done by hooking from the bottom right:

{{< img src="https://lh3.googleusercontent.com/d/1Zp5Hi_u9xT3JxuQUcOEOjByOK8bc_sBR" >}}

To get to the bottom right, we can easily just dash from the bottom left, which was where we started:

{{< img src="https://lh3.googleusercontent.com/d/1Uv7sK1IOr3sTGiQcqQTcACFM2JqwaamX" >}}

Now how do we get both? Let’s say we take the right collectible first, meaning we end up in the top right. To get back to the bottom left for the path to the other collectible, we would need to hook from the top right to the bottom left:

{{< img src="https://lh3.googleusercontent.com/d/16x5hBoEER8RcoOIrTvORmC6nLonSKqTp" >}}

Congratulations, we now have our path to both collectibles!

{{< youtube DSB7mTveSp0 >}}

The strategy or puzzle in this comes from how we have only one resource, yet we have to think about how to use that resource to get a path to both of these collectibles. The player can’t just look at the section and instantly know what to do because the problem isn’t linear and involves taking advantage of something in multiple ways. Speaking of using something in multiple ways, **using existing gameplay in a different context is extremely useful in making the player think about what they’re doing**. This is because they have to erase their preconceived image of the section and then figure out how to complete the puzzle. The section above is a good example of this because I’m using the red hook in different contexts and angles, but you can apply this on a larger scale too.

Here's an example where the player has to go through the section, but later they have to backtrack through it, making them think about it in a new way. On the topic of this video, notice how it has locks and keys as well, but it’s made in a linear way where the player doesn’t have to think too hard about how to get through.

{{< youtube BOtrLdhjBM4 >}}

Let's also talk about one key opening up two different locks. You can do this in many different ways; for example, using the double-dashes in my level to reach two different places. The reason this is useful is because, once again, it makes your player think about something in different ways. In this case that is how a key can be used to open two different locks. You can hide the other lock within your critical path, which rewards the player for thinking about how to circumvent your limitations creatively. You may see the pattern here: things that make the player think in different ways have a plethora of strategic possibilities.

Let’s look at another example. Everedeck and TheMilkCat’s pylon system, a system where you can enter and switch between diamonds, creates a lot of lock & key possibilities. The unique part is that, when you enter a certain type of pylon, you store the momentum you have. That momentum then gets released when you exit the pylon. This offers many different keys (getting a certain amount of momentum to complete the section), which can open up many different locks (exiting different pylons with the same momentum allows you to reach different places). Here’s some gameplay I made with the pylon system; pay attention to the coin at the start and how I used one dash orb to access multiple paths.

{{< youtube hbT_EcKTqSw >}}

Alongside this topic, let’s talk about readability. If you want to create strategic gameplay, you will have to sacrifice the readability of your part. Though GD players value readability a lot, it isn’t really possible if you have to stop and think about how you approach something. Making strategic gameplay also requires your player to be smart, so don’t rework your entire system if a stupid player is complaining that they can’t figure out what to do. Discarding readability and relying on your players being smart is a tradeoff you need to be willing to make. However, there’s still a difference between an overly confusing mechanic and a stupid player, which is why I can’t stress this enough: PLAYTEST your levels well.

## Balancing Limitations

Although I’ve been advocating adding limitations to your gameplay, there’s a line where you have to stop. We established that you use limitations to prevent the player from breaking your game, but limitations that are too strict make the player feel like they don’t get to do anything fun. **When designing a limitation, you need to make it harsh enough to keep the player on track, while still allowing the player to have fun**. If there’s a debuff that slows down the player’s speed, it should only slow down to around 75% and not 0%. However, if you do completely stop the player with a stun, make the effect go away quickly so it doesn’t feel too punishing. Any kind of limitation on the player needs to be balanced so that the player feels it is fair and enjoyable. The balance for this is extremely fine and requires a lot of playtesting, so make sure you and others test your game as much as possible.

Even if your gameplay is extremely restrictive, you can keep the gameplay engaging by designing around these limitations. In Laika: Aged Through Blood, you ride around in a bike that can’t gain any height at all without a bump in the road. You have only 2 ammo and you refresh with a backflip; to stop enemy bullets you need to either block with your bike in midair or parry (which you can refresh with a frontflip), and you die in one hit as well. As you can see, this game is very limited in terms of what the player can do both in combat and in movement. The game’s solution is to put small bumps everywhere, so you can easily gain height. There’s never a flat road. Along with adding slopes, the game devs have also put checkpoints every 30 seconds so there’s less punishment for making a mistake. This keeps the game fair, which is extremely important to making your game fun.

A general rule of thumb with creating harsh limitations or any form of tradeoff in general is to **still keep it stimulating**. Rewarding the player for doing nothing is hardly ever a good thing. Let’s look at cooldowns for example. Cooldowns are a popular way of limiting the player; after using a powerful ability, you get a cooldown which stops you from using it again right away. Usually, the stronger an ability is, the longer its cooldown is. The problem with this is that it doesn’t promote strategic thinking and ends up being a boring wait. Punishing the player with boredom is a horrible idea. Because you can just sit still and your cooldown will eventually refresh, it hardly serves as a limitation unless time is of the essence.

To better understand making your limitations fun, let’s look at a couple examples, starting with Brawl Stars. In this game, Supers are a player’s most powerful abilities. After you use them, you need to deal damage for them to recharge. This forces you to engage with your enemies to recharge your Super. This also makes dodging attacks way more important, as even if you can heal the damage easily, you may charge the enemy’s Super a little bit. This also puts more risk in just running headfirst into the enemy to kill them, as it’ll charge their Super a lot. This is why brawlers who can charge their Super over time without engaging enemies are extremely strong. This turns matches into a camping game because your enemies are gaining rewards for going off and hiding. However, since matches involve constant engagements with enemies, every brawler has a chance to use one or even several Supers per game.

However, something like this won’t work in every game. In League of Legends, every encounter with your enemy is tight and extremely important. It’ll feel like a drag if you’re unable to use your abilities without damaging the enemy because of how rare and important the encounters are. Regaining charge by attacking minions helps, but then that puts you at extreme risk when there either aren’t any minions around or there are, but the enemy is right there, meaning the enemy can easily jump you while you recharge your abilities. Because every second matters in League of Legends, cooldowns still work because you can only use your abilities once per engagement.

## Strategic Freedom

I’ve been saving this topic until now, so here it is. **Strategic freedom** is when __the player is basically unbounded in what they can do__. This goes against the presence of limitations and basically everything I’ve been talking about, but hear me out. If you give the player lots of freedom, they’ll have to think about how to use that freedom to maximize their success. If you look at various sandbox communities, you can see players constantly optimizing different things. In Minecraft, people make more compact and fast redstone contraptions; in TotK, people make cooler and more efficient machines; even in an RPG like Xenoblade Chronicles 3, people make stronger builds and team compositions.

The good thing about this idea is that it is entirely player-driven. The community is the one creating the strategic gameplay. What this also means is that there is **no right or wrong answer**, so every approach to something will be different. The player will have to think and create their own approach to a problem, and making the player think is a great indicator of strategic gameplay. Alongside this, strategic freedom also promotes replayability and an interlinked community, as it’s a community effort to constantly play the game and find better strategies.

Now, how do you create strategic freedom? You can make strategic freedom with LOTS of customizability and scaling. The more options you give the player, the more they can stretch your system. Scaling is what makes the difference between a good strategy and a great strategy. Adding a single accessory increases your damage input by a lot in Xenoblade Chronicles 3 (XC3), so creating an extremely optimized setup will feel 10x stronger than an average setup. This makes the player WANT to optimize more. What’s the point of optimizing if you barely get any reward?

Along the topic of XC3, let’s look at how its main combat mechanic, the class system, works well with strategic freedom. The game uses a job system, which means you unlock classes as you get through the game, and you can rank up the classes if you put them on a character. When ranking up classes, you can get their arts and skills to use them while using other classes. Every class is a big upgrade to your arsenal; your damage will scale a lot. There are 24 classes in total, with 5 different arts/skills from each of them, which is 120 different abilities. This gives the player options to customize a lot. With 6 characters, the possibilities are nearly endless. At the max level you do around a million damage per minute, but the best players can do about 20 million because of how far they’ve been able to push the game.

There’s another great way to create strategic freedom, though it’s pretty different from the other techniques. **Rather than making an extremely complex system, you could make a simple system that has a lot of options when combined**, like a sandbox system. TotK is like this; you have simple Zonai devices that you can combine in different ways. This is how Minecraft and Chess do it too. In Minecraft, you have somewhat simple components like redstone dust or the repeater, but the way you combine them allows you to use them in almost any way. In chess, you only have 6 unique pieces, yet almost every game is different. Because this technique works best in sandbox or multiplayer games, it won’t clash with limitations or balancing (which is why TotK doesn’t work as well).

Speedrunning is another good way to have your player find strategies for different things, but the difference is *how* you promote the strategy. Celeste Minimum Grabs% is a speedrun category where you have to minimize grabs in Celeste, and it takes about 118 hours standing still to optimize it. It’s a cool speedrun category but the game mechanics aren’t necessarily built around this. Speedrunning Celeste in general is more interesting because the game naturally has you find cooler movement tech to go faster. Great Hopper% in Hollow Knight is a speedrun where you have to kill a Great Hopper enemy. The reason why this speedrun relates to strategic freedom better is because it forces the player to find a way to skip to a late-game area, using all their resources in a unique way.

## Balancing Freedom & Limits

You may have spotted the fact that both freedom and limits counteract each other. The solution for this is simple but genius and rewards players even more for playing well: **just make optimizing difficult**. You can lock certain parts behind progress, so the player can’t break your game until it matters less. However, skilled players who know the tricks will be able to access the peak of optimization a lot earlier than casual players, for example, a difficult hidden side quest or a tough skip that gives you a strong ability that only skilled players know about and can get.

As always, we’ll start with an example, this time bringing up XC3 again. Not every class is part of the main story; you need to know where to get them and when to get them. Some classes are of higher value than others due to the arts and skills, because of the different types of roles (attackers, healers, defenders). Unlike casual players, good players know exactly where and when to get a class, who to put it on and for how long, and early-game optimization strategies in general. However, there’s an extra benefit this system has, because skilled players will have to plan out their classes in accordance to the actual game. It’d be stupid to build up for a specific setup when you’ll only be able to use the setup by chapter 6, making your character extremely underpowered during chapter 4, as they don’t have the correct team balance. Not only is it unrealistic for casual players to hyperoptimize and break the game while going through the story, but it introduces a new realm of difficulty for good returning players.

*(class menu in XC3, as you can see a some of the classes are locked while some are unlocked)*

{{< img src="https://lh3.googleusercontent.com/d/1crjZZywRJPRraC3-Qp-rtToivb8RXgBB" >}}

Now let’s look at what you’ve all been waiting for, TotK. How come something like strategic freedom works with XC3 but not TotK? This is because breaking the game is so easy that even a beginning player could do it right after leaving the tutorial area. With XC3, not only is it difficult to rank up every relevant class to get a specific setup, you can’t access most of those classes while playing through the game. With TotK, there are 3 things that matter to making machines: effectiveness (how well it does its job), cost (how many materials + battery it uses), and how cool it looks. However, not only can you instantly create the best flying machine with a single google search, it only costs 3 materials (which is barely anything, and it uses very little battery), and it flies better than any other flying machine. This makes optimizing and creating cooler transportation machines much less useful, and they basically only function as eye candy (omg look i made a flying mech!).

Now that we’ve seen the issues with TotK, let’s consider how it could be better. At the beginning of the guide, I mentioned how TotK had a brilliant solution for this whole debacle in the Lightning Temple. The way the temples work is by having you navigate through a big dungeon with your partner, using their abilities to activate terminals and get to the dungeon boss. The problem is that in 3 out of the 4 dungeons, you can simply just *fly around* and get to the terminals without any trouble at all. Your partner is able to magically teleport to wherever you are, but the Lightning Temple removes this ability. You need to find a way to create a path for your partner to move through, meaning you actually need to solve the puzzles. Not only does this solve the problem, it also lets the player survey the entire dungeon by flying around, while forcing them to return and actually experience the temple.

This doesn’t solve the exploration aspect though, because you can still just fly to wherever you want out in Hyrule. With some shenanigans, locking Control Sticks and Rockets from the player until they pass a certain point in the story would somewhat fix this, because they’ll only get access to easy flying machines after they’ve explored the rest of the world. This won’t solve the problem of the player launching out of the Skyview Towers and just gliding to their destination (because the limits currently in place can easily be circumvented), but that’s not easily fixed without rewriting a major aspect of either the Skyview Towers or gliding. Overall, since TotK did not implement its limitations properly, the game is able to be broken in many unintended and unfun ways.

*(This entire temple is based around using minecarts for navigation, but it gets completely negated by flying machines and your partner being able to magically teleport.)*

{{< img src="https://lh3.googleusercontent.com/d/1vjnacB3eSlZq0ehV2f9PrzXPSzLsy4r3" >}}

# Sources
- [Reddit - How do you guys think the devs feel about this?](<https://www.reddit.com/r/tearsofthekingdom/comments/14z0g1q/how_do_you_guys_think_the_devs_feel_about_this/>)
- [Xenoblade Wiki - Class](<https://xenoblade.fandom.com/wiki/Class_(XC3)>)
- [BeardBear - Fire Temple Guide](<https://www.youtube.com/watch?v=mz0lwVi6ioY>)

