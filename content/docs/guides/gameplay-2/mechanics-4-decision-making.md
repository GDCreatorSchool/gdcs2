---
draft: false
authors:
  - intercomprehensible
title: Mechanics 4 (Decision-Making)
weight: 7040
date: 2025-03-01T00:00:00.000Z
contributors:
  - intercomprehensible
  - illusion2
  - psytrancegd
  - komatic5
description: Have you ever wondered how game designers make compelling decisions
  that leave you thinking for hours on end? Maybe you’ve spent a lot of time
  carefully optimizing your gear and accessories, or maybe you were stumped by a
  puzzle that ended up clicking in a satisfying way. These are examples of
  decision making, which we’ll cover the fundamentals of in this guide.
tags:
  - Grade 2
  - Mechanics
desccription: This guide explains different kinds of choices (obvious,
  uninformed, and interested), how you can promote further strategy with
  tradeoffs, and the concept of Risk vs Reward.
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Choices are an integral part of game design, making a game strategic and interesting
- Interested choices strike a balance between giving enough information and leaving room for player preference
- Tradeoffs and risk vs reward add nuance to choices and allow players to experiment with different playstyles

{{< /callout >}}

** **

# 1: What are choices?

A **choice** is a __decision that a player has to make during gameplay__. These can range from a small movement during a fight to a permanent upgrade for a weapon or character. They can also be long term day to day actions like deciding which chore to do first, or which movie to watch tonight.

Generally, when you’re presented with any decision between two things, no matter how inconsequential it seems, you’re making a choice.

As shown before, choices can be very varied. They can be defined by their impact, and how much information is given to the player to help them make the choice.
## Uninformed choices
Uninformed choices are choices where no information is given at all. When you think about it, this is a pretty boring choice, isn’t it? The player is forced to choose at random, which makes this decision devoid of any strategy.

Another way a choice can be uninformed is when two separate options have nearly identical outcomes. This situation also constitutes an uninformed choice, as it would lead the player into having to choose at random.

As a real-life example of an uninformed choice, imagine you’re deciding to buy one of two newly released games. There are little to no insightful reviews of the game, which means you have to go completely blind. How would you pick?
## Obvious choices
Obvious choices are basically the opposite of uninformed choices. The information given is so abundant that it feels like the game is telling you “option A is strictly better than option B.”
Again, if you think about it, is this really a choice at all? The decision is very obvious and thus devoid of any meaningful strategy.

Coming back to the previous game example, imagine one of the games was received incredibly well, while the other was critiqued heavily. Which one would you pick now?

However, there is still a use to an obvious choice. They’re useful in tutorials, but if you make the obvious choice itself interesting/unique, it can provide lots of depth to other choices down the line. If the obvious choice is supported by information that is difficult to uncover, it will provide much more engagement even though there’s one obvious solution. Think of it like a puzzle; one answer, still interesting.

## Interested choices
After looking at uninformed and obvious choices, the next sensible step is to try to find a nice middle ground. There we find interested choices. **Interested choices** are __choices which contain some information, but not enough to make the choice entirely devoid of strategy__.

Interested choices don’t have to be exactly in the middle between uninformed and obvious choices. Sometimes, if you want the player to think through their options thoroughly before making a choice, you can lean towards giving more limited information. If you want a choice that requires some strategy, but can be done quickly, you can lean towards giving more extensive information.

As another example, imagine a forest with a path that splits into two. One path leads into a barren field, while the other into a dense part of the forest. Which one seems more appealing to you?

Both of these examples are interesting prospects, and they don’t really have a single “correct” choice. Because of this, the choice may be based more on specific preferences the players might have.

# 2: Tradeoffs

The last choice we introduced can be considered an example of a tradeoff. These are an important aspect to consider when designing interested choices, and when implemented properly help create variety in your game overall.
## What is a tradeoff?
In simple terms, a **tradeoff** is __a decision where there isn’t a clear best option__. Regardless of what you do, there will be benefits and drawbacks. These serve to cater to specific preferences, as mentioned before.

Note that we still need to figure out what preferences a player might have in a given game. These are crucial to understand, as they’re the essence of tradeoffs themselves. Traditionally, this can be accomplished by extensive playtesting, but it can also be done by identifying your target audiences and adapting to their needs.

What if we don’t test to find the preferences a player might have? What if we assume specific things about the player?

One thing that might happen is that the tradeoffs we design wouldn’t really create interested choices. Some preferences we take for granted may actually be unappealing to the average player, and may create a tradeoff leaning obviously one way over the other.

To solidify the concept of tradeoffs, we’ll go through two broader examples.

GD itself has a lot of tradeoffs, and here’s an example shown in one of our GDCS videos:

{{< img src="https://lh3.googleusercontent.com/d/1TVHYbdUi2Bw-jMDD1L6k7dX_v97p6eEE" >}}

When creating a level, you’ll have to sacrifice a specific aspect of the level in order to benefit the others.

- If you focus on adding more details and optimizing them, it’ll take longer to finish building your level.
- If you spend more time adding details, you won’t have a very optimized level.
- If you focus on optimizing the level and spend your time there, you won’t have as detailed of a level.

As a more complex example, we can look at chess. Even with its simple rules, it comes with very rich and complex strategies. We’ll be focusing mainly on the many styles of play people can choose from. They usually fall into either the “aggressive” or “defensive” styles of play.

From here, a very obvious tradeoff emerges. **The question of if you should play aggressively or defensively is a tradeoff itself.** However, there is a lot more nuance to this than it may seem; chess grandmasters adapt through these styles as needed and don’t just stick to one for the entirety of a game or even their career. They instead pick the choices that best fit their situation.

A more nuanced example we’ll touch on is the concept of openings. Openings are a predefined set of moves that are traditionally played by most chess players. They should provide some sort of advantage to the player, be it a positional advantage or a material lead.

The key tradeoff here is **choosing to open defensively or aggressively**. Aggressive openings usually sacrifice pieces for a greater positional advantage, while defensive openings usually value defending the king and avoiding captures.

As a more technical example (for those more familiar with chess), the Queen’s Gambit (1. d4 d5 2. f4) usually plays more aggressively, putting pressure on black’s queen-side pawn and fighting for the center. Here, black has many options to respond to the opening, either by opting to play e6 (a more defensive move) or taking the f4 pawn (usually more aggressive).

{{< img src="https://lh3.googleusercontent.com/d/1zfxK_8xmc2C1DxmOIPSWf-WwgJbF3UUt" >}}

The point here is, choosing an aggressive option is risky but offers positional momentum, while choosing a defensive option can provide more solid formations, while running into the possibility of attacks from the enemy.

Of course, there is more nuance towards openings than just what is shown here, which makes the general tradeoff all the more interesting.

This checks all the boxes that we’d look for in a good tradeoff. It values players’ preferences and doesn’t have one “correct” answer.

Another thing that’s worth considering when making tradeoffs is that they don’t always have to follow a “win this, lose this” dynamic. The act of choosing one option means you won’t be able to choose the other. The tradeoff is contained in the choice, prioritizing one benefit over the other.

An example of this is given in the roguelike game *Hades*.

{{< img src="https://lh3.googleusercontent.com/d/1Q4jZEN8VJ3U8JuSZUcclXtMiuviv5TWn" >}}

- The “Splitting Headache” ability gives a powerful damage boost, but it relies on critical hits. Critical hits are reliant on your playstyle and gear, and are luck based as well, which may fit some playstyles better than others.
- “Bad Influence” is another good damage boost, but it relies on the amount of AOE attacks you have which are able to inflict the Hangover effect. Again, this depends on your playstyle and gear.
- Lastly, “After Party” is really useful for players who like to tank a lot of attacks head-on, as it allows players to regain health. However, they’re also missing out on extra damage they would’ve gotten from choosing the other upgrades.

# 3: Risk vs Reward

The last concept we’ll cover here is risk vs. reward.

**Risk vs Reward** is __an important concept related to tradeoffs, which relates the **risk** of performing a task to the **reward** from completing it__. The gist of risk and reward is to reward players for performing risky actions and to provide less of a reward to players for performing easier, low-risk actions.

In other words, low risk usually equals low reward, and high risk usually equals high reward.

However, risk vs reward has a lot more nuance to unpack than this.

If you leverage risk vs reward cleverly, you can be able to generate types of choices other than just tradeoffs. Making one playstyle *situationally* have a slight edge over another is a great way to force players to adapt and weigh risk and reward in real time. In other words, you’re making the player **learn** your game.

As an example, many RPGs, such as the Xenoblade Chronicles series, almost *force* the player to juggle between taking risks and playing things safe. For example, it’s usually better to risk fighting more enemies than to actively avoid them. If you avoid them, you won’t be able to collect the enemies’ loot, and you might be underleveled later on. However, other times you’ll have to be able to avoid and pick out enemies one at a time, so you don’t end up dying to them.

Hollow Knight also implements risk and reward in a neat way. Players unlock trinkets called charms. Charms act like extra skills/accessories which need notches (kind of like slots) to use. Another thing to note is that stronger charms use more notches, which creates an interesting tradeoff. You can’t use as many stronger charms as weaker charms, as they’ll take up more notches. However, you wouldn’t really want to use weaker charms, would you? This forces players to find the right balance of charms that fit.

{{< img src="https://lh3.googleusercontent.com/d/1RqGB-S9ikffapmKNH_xuuNCbebF7wGaB" >}}

Less powerful charms take up less notches. Note that there are less charms and notches than there otherwise would’ve been, because they’re not unlocked yet.

{{< img src="https://lh3.googleusercontent.com/d/1VWsTUP9AODh2urG0r9Jf_cp-9b5xCT0j" >}}

More powerful charms take up more notches. This screenshot is from later in the game, which shows how they’re gradually unlocked during progression, but you can also see that the Shaman Stone charm costs 3 notches due to being extremely useful.

However, I'd like to state that Risk vs Reward is one of those concepts that is very difficult to implement properly. If done incorrectly, it can lead to a game being more unbalanced than if it had not implemented risk vs reward.

Adding on to this, it’s definitely worth knowing that not every game needs risk vs reward mechanics. As with a lot of other concepts, **it’s important to have your target audience in mind when choosing to implement or exclude them**.

