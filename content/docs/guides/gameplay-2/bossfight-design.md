---
draft: false
authors:
  - illusion2
title: Game Design 4 (Bossfight Design)
weight: 7210
date: 2024-09-18T00:00:00.000Z
contributors:
  - illusion2
  - psytrancegd
description: What makes a bossfight feel like one? Levels with bosses used to be
  quite limited, but Update 2.2 has broadened the scope of what you can make a
  boss do. And yet with more freedom comes more design choices, so this guide
  will explain how you can make bosses and what can contribute to its design.
tags:
  - Grade 2
  - Game Design
seo:
  title: How to Make a Bossfight in Geometry Dash
  canonical: bossfight-design
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Bossfights have three main goals: provide thrilling action, make the player think critically, and help the player learn the boss effectively.
- Decision-making is one of the most important parts of boss design, which you can emphasize by mixing the concept of risk vs reward into your boss.
- You can help the player learn the boss more easily by making sure the boss is responsive and gives enough visual information to the player.
- Simple bosses are generally better than complex bosses because their concepts are intuitive and easy for the player to digest.
- You can make the boss’s attacks work together against the player to make the action feel complex and interesting, despite the attacks being simple on a flat level.
- A boss design should have a simple concept as well, in order to be understood better, as that leads to the boss being memorable and having its own identity.
- Giving the bossfight an overarching attack strategy will help the boss feel more cohesive, but make sure that the attack strategy is unique as it may blend in with other bosses.
- Turn-based or strategy bosses are usually based around a mechanic that limits the player in some way, forcing the player to think around the obstacle.
- Strategy bosses have a learning curve that focuses on trial and error, meaning you need to make it clear to the player if they’re doing something wrong or right.

{{< /callout >}}

** **
# 1: What makes a Bossfight?

This can be interpreted in many ways, but it usually revolves around how you present, or “frame” the boss. **Framing** is __how you position the boss in relation to its surroundings__. The framing of an enemy will change how the player perceives the enemy.

For example, putting a boss in a long hall will notify the player it’s a boss; placing the boss in a small or otherwise unimportant area will present it as just a regular enemy. There are other details like giving the boss a special theme or title card that can convey the importance of an enemy.

Aspects like difficulty and health can separate a boss from a regular enemy, since normal enemies have fewer and simpler attacks that are easier to learn for the player. Normal enemies are simpler in design as they’re something you’ll often encounter along the way and would likely hinder the experience for the player if they were much tougher to defeat.

Progression also plays a role; at the beginning of a game, the player is new and must become familiar with the skill tree provided, but later on the player will understand the mechanics enough such that the boss feels like a normal enemy. In Hollow Knight, the Gruz Mother and the Vengefly King are both early-game bosses, but later in the game they show up in the Colosseum of Fools as a normal obstacle. In Blasphemous, the same idea is used. The Warden of the Silent Brotherhood, an early-game boss, shows up again in a late-game area as a normal enemy.

## Gameplay
When making a bossfight, attacks should be fair to the player. This is often overlooked in the GD community, leading to bossfights that have bad execution in their attacks or end up being a bullet hell. But some bossfights such as those from Xender Game and others follow three principles that help prevent these issues:

- **Excitement:** Things like quick movements and close calls or using turns effectively to narrowly avoid danger can up the tension and thrill throughout the battle.
- **Creating Strategy:** Forcing the player to make decisions about whether to take a certain path or dodge attacks is good to keep the boss interesting. This is seen in many turn-based fighting games. This can make attacks more satisfying to pull off or dodge.
- **Conveying Information:** When denoting how attacks play out or what the boss plans to do next, the player should have enough time to dodge or make an attack. The attacks themselves should be intuitive and easy to learn, as that minimizes frustration.

## How do GD Bosses compare?
If you look at almost all current GD bossfights, they usually consist of bullet hell, with no understanding of what is happening and how to actually dodge these attacks. Most bossfights will fail to convey information, which purposely overloads the player's brain, and ends up being a choreographed show. The Cursed Thorn, seen in the last level of The Tower, doesn’t do its job very well because there’s no depth or complexity to the attacks other than the ground pound attack. It fails both the first and the second point, although it does convey information to the player. The skill tree the Cursed Thorn possesses is very predictable, so they don’t require much quick thinking. It also only has one way of attacking the boss, ending up very repetitive over time.

Bosses that follow these principles end up being more enjoyable to play. In BOSS RUSH by GDTicLos, the Illuminati bossfight utilizes terrain to create interesting movement. You would need to navigate the area, dealing with platforms and gravity rather than just floating around with a jetpack, while dodging attacks and catching up with the boss. This adds complexity that isn’t just a lightshow, and gives the bossfight more thrill. All the attacks are clear and intuitive as well. While this is only one in-game example, there are plenty of bosses outside of GD that are better in terms of functionality than those in GD, so those are worth looking at for inspiration or reference.

{{< youtube SPXmmLx1Pp0 >}}

The principles provided earlier in the guide should be seen as guidelines rather than rules. Bosses can serve tons of different purposes depending on the story or target audience, so it’s not necessarily needed to have a quick-to-learn boss at the end of the game designed purposely for people that love learning chaotic and messy bosses.

# 2: Decision & Information

Expanding on the point of creating strategy, an important part of enemy design is decision-making. This is known as **”Risk vs Reward”**, which is __when the player decides between two or more different actions or attacks__. While one of these options is safer, the other one has more benefits if it’s pulled off.
## Risk vs Reward
Risk vs reward is involved a lot in bossfights, as the fight would otherwise become uninteresting. In-game this is usually not noticeable due to the speed, but the subconscious thought still makes the bossfight much more thrilling in the end.

The outcome of the available actions should be balanced, though. If you disrupt the balance and prioritize one benefit over the other, then there won’t be any engagement in the battle at all. Too little risk can nerf the fight and rid the need for any thought while playing, while too little reward will make you hide in a corner waiting for attacks to pass by, neither of which promotes interesting action.

You can either dodge attacks and not be able to deal any damage, or you can stay closer and risk getting hit again for plentiful damage to the boss. This situation only applies to real-time bossfights, but you can still have risk-reward in completely different scenarios. In a turn-based game, you can either use some energy to perform a weak attack now, or you can save up energy to deal more damage at the risk of the boss attacking you and killing you before you get the chance.

You can find risk vs reward in almost any situation as it's one of the main driving factors of boss design, but in cases where the fine lines of risk vs reward aren’t clear, feedback is critical.

## Feedback
When an action is performed, you should instantly get a response, telling you whether it was worth taking the risk. For example, __failing a dodge should instantly tell you made a mistake, denoted by getting hit. Repeatedly attacking without taking proper cover can also be shown as a mistake__. This is **feedback**, also known as responsiveness. Feedback can also work conversely; feedback should tell the player they’re progressing through the fight, otherwise the player would feel like their attacks aren’t doing anything. The reason this is needed is that it’s key in the learning phase of a fight. Players entering a bossfight should have an immediate understanding of what they did right or wrong, which helps with learning the boss in general. It teaches the player what to do on the next turn or attempt, which is important in decision-making, tying back to risk vs reward. Trial and error is good as it’s purely controlled by the student rather than the teacher, with feedback speeding up the process.

How exactly do you create feedback? Tying into the point of conveying information quickly, attacks should be clear to the player. If the boss dashes in a direction, you should instantly understand that you need to move and avoid the attack. If projectiles fall from the ceiling, you should stand in between them in spots where they don’t hit. These are examples of the boss giving *feedback* to your actions.

Feedback may tell you what to do the next time you face an attack, but that won’t help at all if you’re confused by what the boss is even going to do. The player might understand how to dodge attacks and punish the boss, but if they can’t quickly understand what the attack will be, then it gets frustrating as they just have to hope to not get hit. The solution to this problem is to have the boss be visually clear as well.

## Visual Information
Just like how you should be able to tell what’s right and wrong against a boss, you should understand what the boss is doing too. This section delves a bit into the animation aspect of a boss, but it’s still important to understand this to make your attacks fair. An enemy’s attack is split into 3 parts:

- **Anticipation:** The wind-up of the attack. These are commonly known as “telegraphs” in bossfights, and this is easily the most important part. For example, to punch, the anticipation would be winding up your fist, and to shoot a gun, it would be raising it and then pulling the trigger.
- **Impact:** The actual impact of the attack, for example, your fist extending as far as possible or the bullet actually flying out of the gun. This part is usually short but it's important because that’s when the actual hitbox of the attack will show up.
- **Recovery:** The last part of an attack, returning back to normal. This can be like pulling your fist back in or recoiling from the gun. This is the part where players can usually punish the boss.

To make a fair bossfight, you should strive to have a long anticipation and recovery, with a fairly short impact. The anticipation should be long to give the player enough time to spot the attack and get ready to dodge it. Each telegraph should be unique as well in order to be able to differentiate different attacks. The impact being short isn’t necessarily a rule as it completely depends on the type of attack, but most attacks keep it short so the player can immediately punish the boss afterwards. The recovery is prime time for the player to go back in, punish the boss, and actually feel rewarded for dodging the attack, so the recovery time being longer is perfect.

Make sure you remember that you don’t HAVE to follow this “ruleset” exactly all the time because everything differs depending on the situation. For instance, tougher bosses typically have shorter anticipation and recovery times. This is only a guideline for you to understand how to shape your attacks to be visually clear.

## Examples
You can’t understand a concept without having an example to reference. The video below shows the very first bossfight in a platformer game called Hollow Knight (which will be referenced many times further in the guide).
{{< youtube uN8O57b12WI >}}
Since this is the first boss that the players will likely encounter, the boss will have to be simple enough that a new player could comprehend it, and it does exactly that. The boss has three main attacks: a jump, a grounded swing, and a jump and swing combo. The jumps have slow, clear arcs which allow the player plenty of time to see what’s happening and run out of the way. The grounded swing sends out a white shockwave that contrasts heavily with the dark background, making sure you see it. It’s clear and obvious what the attack is, so although it may take a couple of attempts to get used to it, there’s enough anticipation and feedback to learn easily.

The telegraphs are distinct as well: holding its mace at its chest when jumping around, holding its mace above its head when trying to pounce on you, and winding back when it's about to swing on the ground. There’s another telegraph that new players might not notice, yet it still exists, where the boss tries to jump away before performing the grounded swing. This is so that the player can see the shockwave come out and ripple across the ground; if the boss was right next to the player when swinging the player may dodge the swing itself but get hit by the shockwave and be confused as to what had happened. This is a hidden feature of the boss that subtly helps the player learn the attacks more easily.

It may be harder to spot the risk vs reward factor of the boss, but it still exists. For example, you can try to sneak in a heal but there's a high chance that the boss will jump onto you or send a shockwave coming your way and you won’t be able to get out fast enough. If you’ve seen speedruns of this game, you might see top players attacking the boss WHILE the boss is jumping, which is a lot harder yet you can get a lot of damage off that way. You can also hit the rubble that falls toward the boss to damage it whenever the boss goes into a frenzy, which requires more timing and getting closer to the rubble.

# 3: Simplicity & Complexity

Bosses can be simple or complex, but in most situations simple bosses beat complex bosses. This section of the guide will go over what simple and complex mean in the context of bosses, why simple bosses are usually better than complex bosses, and how to make sure a boss is interesting despite all this.
## What is simple/complex?
Before starting this section, you’ll need to know what “simple” even means in the context of bossfights. If you look at a boss's functions (attacks, movements, etc.) on the conceptual level, it shouldn’t take long to explain. Let’s look at two examples from Hollow Knight for you to fully understand what I mean.

First off, let’s cover the Watcher Knights. This is a difficult and intense boss which requires constant awareness of your surroundings and may sometimes overwhelm you. However, despite saying that the boss may overwhelm you, the concepts of all the attacks are as simple as you can get. There are three attacks that each Watcher Knight may use: a roll, a jump, and a swing. All of these attacks can be described in only ONE word, yet the final product does not feel simple at all.

{{< youtube SnBU0UOqq88 >}}

For the next example, we’ll be looking at the Soul Master boss. This boss is a relatively complicated bossfight compared to others, but it still wouldn’t take long to explain. The first phase has 4 attacks; a run/dash, a projectile that tracks you, a dive that sometimes fakes you out, and a slow float with projectiles circling the boss. Outside of the attacks, the boss teleports around as well. All of these attacks could be explained in about only 3 keywords, (for example “float, projectile, circling” for the last attack), and some could even be explained in just one.

{{< youtube XLBhKzHzdlM >}}

## Why is simple good?
There are some reasons why simple bosses are good, and they all relate to the core factors we talked about in the beginning (thinking innovatively and conveying information):
- Simple attacks allow for an easy learning curve; there are no niches you need to know about and you can understand the attack immediately. (This plays into feedback as well, because you can easily tell what you did wrong if the attack is simple.)
- Simple attacks give you much more freedom and control. Having a crazy bombastic attack that gives you only one option to dodge won’t promote any decision-making at all; having a simple attack like a dash can give you multiple different options (dashing through the boss, jumping over and attacking the boss, outrunning the boss, or getting out of its range)
Once you start analyzing attacks from good bossfights, you’ll see how they're extremely simple on a flat level. You don’t need to make complicated attack AI or flashy attacks that cover up the entire screen, because sometimes sticking to a punch is good enough.

Let's look at an example from Hollow Knight. Before I get started, keep in mind that this bossfight may spoil an interesting reveal; however, it doesn’t impact the main plot of the game at all. The Sisters of Battle bossfight is a late-game boss that features some of the fastest gameplay yet, similar to the Watcher Knights but toned up. The battle feels complicated and exhilarating, but once you start analyzing it on a flat level, the battle vastly simplifies. All of the mantises have only 3 attacks: a dash, a dive, and a projectile. The dashes and the dives are extremely simple; aside from occasionally having another mantis dash from the other side, it doesn’t get simpler than that. The projectiles aren’t as simple, but they only come in two consistent patterns and are the slowest attack of the boss to make up for it.

All of this is to say that you don’t need complicated bossfights for them to be good. You don’t need to make flashy and unpredictable attacks to make your bossfight satisfying. If you just focus on the core concepts, then your boss will do well. Although simple bosses are good, you can still pull off complex bosses.

{{< youtube 2oOVXhx6dHk >}}

## When is complex good?
Overall, simple bosses are better than complex bosses, but in case you want to bend the rules a bit, then this small subsection will go over what to keep in mind when making complex bosses. For example, a boss at the end of the game intended for dedicated players could totally be complex as dedicated players are completely fine with spending time learning a boss, and players should already know the game’s mechanics at that point. You'll be able to mix in quick decision-making if you assume that your players are good and will be able to figure out the openings. In general, if you want a complex attack that still produces quick thinking, just make sure to give it options.

An example of a good complex bossfight is the Alvess boss from Afterimage. This boss doesn’t use the usual “dash, jump, projectile, dive, etc” attacks, instead using massive walls of fire and weird jumps that you probably wouldn’t expect. It’s the type of boss that makes you think, “What the hell is going on?” However, this boss comes really late into the game and by now players would be experienced enough to counter the complex attacks. It may be hard to learn, but it doesn’t matter if your target audience is towards people who are okay with so-called “learny” bossfights.

{{< youtube Rl-AmtNWJWc >}}

## How to keep it interesting?
All this time I’ve been talking about simple bosses, but how do you actually make something simple turn into an interesting attack? A simple attack is an attack that has a simple concept attached to it, like a dash. There are factors to this that I haven’t mentioned yet; how fast is the dash? How far does it go? Are you able to jump through it or dodge it via other means? If I wanted to make a dash attack that was big and impending, I would make the hitbox big so that you would have to find a way to go over it. If I wanted to make the dash attack require quick reflexes to dodge, I would make the dash fast and go far so that you wouldn’t be able to outrun it. There are a lot of factors you can experiment with which aren’t included in the concept and give you various different results.

There’s also the opportunity to have your attacks work in tandem. The simplest way to go about this is by having the concepts of your attack work well together; a dash requires vertical movement to dodge and a dive requires horizontal movement to dodge, making sure you’d have to mix up your dodging patterns. A projectile, on the other hand, allows the boss to attack you from a distance and a swing stops you from getting too close. Both of these scenarios make the attacks cover each other’s weaknesses and make the player think more about how they’ll approach the boss.

Even outside of pure concepts, you can have your attacks work together by using the other factors. Let’s say you have a dash and a projectile. Both of these attacks can be dodged by simply jumping over them which isn’t interesting. Now let's say the dash requires you to jump over it and the projectile requires you to stay on the ground to dodge under it, you’d have to keep track of your location and think about how to dodge an attack without committing too much and getting hit by the next attack (or alternatively allowing you to commit if you’re sure you can land an attack, which is more risk but more reward). Though the concepts of your attacks don’t synergize well, you can adjust the hidden factors to make sure the player is always vigilant and paying attention.

There are other ways to make bosses interesting too, which is by pacing the fight. Most bosses you see have a stagger, which is basically when the boss doesn’t move for a bit after you deal a lot of damage. This allows for the player to take a break and not get too stressed out, as well as creating a back-and-forth in the action as it swaps between taking it slow or fast. This is similar to a gameplay loop, as you basically attack the boss, stagger it, then repeat. Even without staggers, you can mix in pacing within the attacks themselves.

Let’s look back at the Sisters of Battle bossfight again. As stated earlier, there are 3 attacks; dash, dive, projectile. The dash and the dive complement each other well, as one covers the ground and the other covers the air, but the projectile as mentioned earlier is a lot slower. After a long stretch of jumping and dancing between the attacks, the boss throws an attack at you that allows you to take a breather. In other bossfights, the “relax” attack serves as a time for you to heal, but daring players might take the chance to deal as much damage to the boss as possible (risk vs reward, again).

# 4: Identity & Cohesion

We know how to make bosses good, but you can’t just slap on a formula and make all of your bosses the same. Stumbling upon a boss should be awe-inspiring and feel amazing, but you can’t pull this off without making all of your bosses unique and a new experience. Identity is what makes a bossfight memorable and it’s a big part of what comes to mind when you think of that boss.
## Concept
The most important part of a bosses identity is its concept. Every boss should have a unique concept and should, similarly to the attacks, be able to be explained easily. For example, take a look at the image below.

{{< img src="https://lh3.googleusercontent.com/d/1z1NCkY2iKCSykl5ggwUQfUtx7_zbx6oR" >}}

How are you supposed to describe a boss like this? The only thing that stands out are the wings, but it can’t be described by some simple keywords. The vision in our heads is unclear because the concept itself is unclear. The best thing we can say to describe the boss is “some weird bird guy with a spear,” which would have been fine as “a bird with a spear;” however, the boss ended up being overcomplicated which led to confusion about its concept. Now let’s look at a different boss from the same game.

{{< img src="https://lh3.googleusercontent.com/d/1d49m_LjIELSXgu3z9MOoFetN_92e2OSD" >}}

This boss is obviously a big fiery face. If you think back to this boss, you’ll instantly remember what it is. The simple concept makes it memorable.

All of the bosses below have a simple concept, see if you can define them.

{{< img src="https://lh3.googleusercontent.com/d/1R66C_B5a30h-6Fe0du_BNmiuo4VEgIx-" >}}

*(left to right: red wolf, ghostly mage, mushroom boxer)*

In addition to making sure the boss concept is easily explainable, you still need to make sure the concept is unique as well. The concept may be well defined, but if they’re too similar, they start to blend together. As another example, let’s look at the Gruz Mother and Vengefly King bosses from Hollow Knight. These bosses can be defined simply, as shown below.

{{< youtube WqwuVjYxHnQ >}}

{{< youtube IwuCi5YiMKA >}}

*(Gruz Mother, bigger version of a gruzzer)*

{{< img src="https://lh3.googleusercontent.com/d/10EaRXwleqYMzn_5gKAEUE7RVu41ro_mp" >}}

*(Vengefly King, bigger version of a vengefly)*

{{< img src="https://lh3.googleusercontent.com/d/1QYbs6nKV2o-NQs8fXMf2cVCQbYuQO1Bn" >}}

However, their concepts are both just improved versions of a normal enemy, which really isn’t unique at all, not to mention they tried to pull off the concept twice which heavily undermines the impact of the bosses.

You can still pull off the “bigger version of a normal enemy” concept by introducing something new to the boss, which is something that the [Soul Master](<https://www.youtube.com/watch?v=XLBhKzHzdlM&t=14s>) boss, a boss mentioned before in the guide, does well.

*(Soul Master, similar to the Soul Twister)*

{{< img src="https://lh3.googleusercontent.com/d/1VB006lbzIRrUtik6cxGXz1CqmkB5YKc7" >}}

This boss, rather than being a better Soul Twister, has a completely self-contained identity and only shares traits with the Soul Twister. It may be the leader of all Soul Twisters and the strongest of them all, but it’s independent from its common counterpart. When you think of the boss afterwards, you think of a separate entity rather than just another Soul Twister.

Keep in mind however that the concept of a boss is still just a concept; you can make it whatever you want. The stuff I’m talking about in this section is mostly just guidelines and shouldn’t be treated as hard rules.

## Theming in Attacks
You can have a completely unique boss concept but the impact will still be heavily reduced if your attacks themselves don’t contribute to the bosses identity. Just like how the player can have a strategy to win a game, bosses may have strategies to defeat the player as well. If their attacks follow a theme, the attacks will feel a lot more unified and cohesive to its specific boss. Once again, let’s look at this subsection by using examples and counterexamples.

To start off, we’ll look at the Watcher Knights boss. I mentioned the Watcher Knights earlier and how they were a really good boss, and it holds up here as well. Let’s start by identifying their concepts. The Watcher Knights are bugs that roll around and swarm the player. This concept is exemplary as it’s unique and also not that hard to understand.

{{< youtube SnBU0UOqq88 >}}

Now let’s look at the attacks. All of the Watcher Knights have 3 attacks; slash, roll, and roll jump. The Watcher Knights’ attacks obviously have a theme to them: overwhelm the player and swarm them. This is shown by how there are always multiple Watcher Knights on the screen, and how their rolls come from all over the place, making sure the player always has to keep track of the bosses. The attacks work in tandem, not only to keep the boss interesting, but to keep the boss feeling cohesive and unique. These attacks aren’t too common within other bosses, making the Watcher Knight stand out.

For the next boss, we’ll analyze Nosk. As you can see by the intro, it’s a creepy boss inside a creepy area, so it makes sense that the boss should be cramped and uncomfortable as well. The concept is clearly a spider-like creature that took on the player’s identity, which is once again unique and simple.

The attacks fit this concept extremely well. Nosk has a big hitbox, especially compared to the player, and runs around fast enough that it may overwhelm you. Nosk sometimes spits acid everywhere, which heavily limits the space the player has to stand, once again pressuring the player. These attacks make the boss feel a lot more menacing and plays really well into the boss’s identity (however in-game there’s a cheese for the boss so it doesn’t really play out as well). Although there are a lot of other bosses that spit acid and run around, the special factors to the attacks (Nosk’s hitbox, the checkered pattern to the acid spots) are what make them continue to be unique and successful.

{{< youtube mJqOOSDspvk >}}

For the last boss, we’ll look at God Tamer, a boss that actually doesn’t pull off its attack synergy well. The God Tamer is a warrior who has tamed a beast to use in battle under her control, which is a unique concept that gives her an identity. The God Tamer only has a jumping attack which lands with a slash, and the beast has two attacks: spitting acid and rolling at the player. After the roll, the beast bounces back and lands on where the player last was. The roll affects the ground area, making the player jump into the air or commit to a dash, and the bounce controls the air, making the player not stay too high up. The acid controls the player’s spacing and keeps the player aware of where they land, and the God Tamer’s jumps constantly keep the player moving and introduces another factor to keep track of.

{{< youtube cFRIW1F931M >}}

These attacks limit the player’s movements and require the player to maneuver around masterfully, fitting for a boss that was able to tame that massive beast. Now, after I used the Watcher Knights and Nosk as an example before, you might be able to see similarities between the God Tamer and these two bosses. The rolls of both the God Tamer and the Watcher Knights are exactly the same, and the God Tamer even has the bounce that matches with the Watcher Knight’s jump. The acid spit on the other hand has the same pattern and function as Nosk’s acid spit, limiting ground movement and making sure the player is aware of their surroundings. The God Tamer feeds off of the successes of other bosses, and rather than learning what the Watcher Knights and Nosk do well and changing, it ends up being too similar in attacks. The boss might work as a standalone boss but in a game full of other bosses, it ends up lacking its own identity.

# 5: Turn-based & Strategy

You might have noticed that throughout the guide I’ve mostly talked about real-time bosses, but you can also have amazing turn-based bosses, or bosses that focus on a strategy or mechanic. It may seem difficult trying to translate the guide into strategy-based bosses, but it’s just like translating perspective and lighting into “glow” levels. This section will help simplify the translation process, as well as provide additional info to keep in mind.
## Focusing on a “mechanic”
First, let's define what I consider a “strategy” boss. These are bosses that focus on a unique mechanic. For example, you may have a boss that’s invulnerable to specific attacks, forcing you to come up with a different strategy to tackle it, or you may have multiple bosses at once, each with different roles, forcing you to determine which boss to defeat first. Strategy is often found in turn-based games, like Persona 5 or Pokemon, because turn-based games rely less on mechanical attacks.

Similar to how a normal boss should have a focal concept or attack theme, a turn-based boss should revolve around its mechanic. The mechanic is the identity of the boss. This means that you shouldn’t have a soup of mechanics purely to be visually cool or complex, because the mechanics will likely clash. Instead, focus on a singular mechanic and stretch the bounds of the mechanic as much as possible. This should not be confused with introducing a new mechanic, but rather expanding on one. Expanding on mechanics that the player has will prevent burnout, covered in [Mechanics 1 (Intro)](/docs/guides/gameplay-2/mechanics-1-intro/), but introducing new mechanics will confuse the player more, as they have to learn a new mechanic right after building up consistency for all of their other mechanics.

When brainstorming or planning out your mechanic, you should keep in mind the idea of limitations. Usually, turn-based/strategy games offer you lots of options to build your character or team however you want, so restricting the amount of options the player has will force them to think outside the box and refine their strategy as much as possible. For example, gym leaders in Pokemon focus on a specific type, restricting you from using pokemon that are weak to that type. You would need to rearrange your team setup in order to counteract your opponent.

The mechanics of a boss may have lots of strengths; however, it must have a clear weakness too. Strategy bosses usually have an “intended” route to defeating them, and the satisfaction of the battle comes from discovering the route and playing your cards well to stay on that route. As mentioned with the Pokemon example, focusing on a specific type gives the gym leader an advantage over some types, but also gives them a disadvantage against other types.

Also keep in mind that limiting the player from doing whatever they want will shift the focus from the boss to the player, which means that you’ll need an in-depth combat system to carry the battle. Turn-based bossfights heavily rely on your combat system; no matter how good your bossfight is, if the system itself isn’t good, then your boss won’t be either (unless it does something really special). Limitations in general are a complex topic, so if you want more info, head to the [Mechanics 5 (Limitations & Strategy)](/docs/guides/gameplay-2/mechanics-5-limitations-strategy/) guide which covers the topic in more detail.

## Learning curve of a strategy boss
Since we’re talking about mechanics here, the learning curve will definitely come into play. The learning curve of a strategy boss should follow the same guidelines as other mechanics; start off simple, slowly make sure the player understands the mechanic, and then have fun with whatever you intend the boss to do. As emphasized by the last subsection, the mechanic must be heavily tied together with the boss, otherwise the player will experience burnout.

Now how exactly do you have a player *learn* the mechanics of a bossfight? Due to the nature of bossfights, most of the learning will come from trial and error. When you first encounter a mechanic, you won't instantly know what it does and how you should counter it. However, if you make it **clear to the player** if they’re doing the right thing or not, they should learn fairly quickly. This concept is the same feedback concept we discussed at the beginning of the guide.

This section is best looked at by analyzing examples, specifically Sweetheart from Omori. The main element of the combat system in this game is the Emotion system. You can make your party members or enemies happy, sad, or angry, with varying levels of intensity for each. The emotions are strong or weak against other emotions, and Sweetheart takes advantage of this and expands on it.

Pretty early on, Sweetheart makes herself happy and makes your whole team angry, which is a disadvantage for you as happy beats angry. To counteract this, you would need to make yourself sad, because sad beats happy. You can already see everything I discussed being shown here; showing the mechanic early on, and then displaying both a strength (making you angry, making her happy) and a weakness (you can now turn sad and have an advantage without needing to turn her happy manually).

In addition to that, Sweetheart has a variety of strong attacks that hit every party member. These attacks usually one-shot the entire team assuming that Sweetheart is happy and your team is angry. This is a clear example of feedback; you instantly get killed if you play incorrectly, and so, hopefully, on the next attempt you’ll learn that you would need to make your team sad.

{{< youtube 2D1VBDjamoA >}}

# Sources
- https://www.thegamer.com/afterimage-loss-the-galefeather-boss-battle-unlock-double-jump-ability-guide/
- https://www.youtube.com/watch?v=Lfof1rrtTY8
- https://www.thegamer.com/afterimage-lush-wolf-boss-battle-guide/
- https://www.thegamer.com/afterimage-all-core-afterimages-locations-guide/
- https://www.youtube.com/watch?v=Z3McXAS65L0
- https://hollowknight.fandom.com/wiki/Hollow_Knight_Wiki

