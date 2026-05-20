---
draft: false
authors:
  - intercomprehensible
title: Game Design 1 (Level Design)
weight: 7180
date: 2025-01-14T00:00:00.000Z
contributors:
  - everedeck
  - komatic5
  - illusion2
  - intercomprehensible
  - sethlai
description: Level design is the process of designing and building areas, or
  levels, for games. This majorly influences how players will experience your
  map, and is a crucial part of complex gameplay. This guide will delve into the
  fundamentals of level design, and how you can use them to influence player
  behavior.
tags:
  - Grade 2
  - Game Design
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Level Design is divided into two parts: Room Design and World Design.
- Room Design is how you create small sections or “rooms” of gameplay. This requires an objective for the player, obstacles they must overcome to reach the objective, and a Critical Path through the room.
- World Design is how you combine rooms to make larger areas. This is an important way to weave Pacing and Flow into your gameplay. You can also make use of design patterns and Cognitive Mapping to help players learn what’s in an area.

{{< /callout >}}

** **
# 1: What is Level Design?

Level design has a few crucial components to it, the most important of which is a **level**. These are spaces where the player can interact with their environment. For instance, a board is the level for a board game, and a Geometry Dash level is the space itself. Levels are the most important part of a game; without them there wouldn’t even be any game to play, just rules with no actual setting.

A good way to visualize levels is with a football field. The field falls under the definition of a level; the whole game happens inside the field, and it’s the space where all the players can interact with each other and the ball. Football is designed with the field in mind, and the field is designed around the game.
## Why is level design important?
Level Design can influence the players’ *decisions* and *choices*, and guide them along the path set by the designer. It also greatly influences the player’s *emotions*, and can complement other seemingly unrelated concepts, such as decoration or theming.

Level design is also important because it makes up the majority of the gameplay and influences the feel of the game in general. As such, mistakes in level design are usually quite obvious and worsen the overall experience.
## Types of level design
Level design generally has two main parts, being Room and World Design.

**Room Design** focuses on smaller spaces known as rooms. Designers usually design these rooms around principles like objectives and progression, to create a satisfying product. Most rooms can be likened to *puzzles*, as they follow a sequence of steps that are used to reach an end goal.

**World Design** focuses on the game’s areas at large. These are designed around other principles like flow and perception, to alter the player’s *choices*, *experience*, and *emotions*. World design also helps link rooms together, creating a more cohesive product instead of a bunch of rooms carelessly thrown together.

** **

Together, Room and World Design work together to influence what a player feels, thinks, and does. Players will be more likely to positively recall a game when both world and room design are executed correctly.

# 2: Room Design

**Room Design**, as mentioned before, focuses on the physical aspects of the “room” you’re playing in. This is crucial to do well; poor room design can lead to unfair gameplay and a frustrating player experience.

Good room design requires a few elements you learned about in the Mechanics guides; those being feedback, objectives, the Lock & Key principle, Progression, and a central mechanic.
## Feedback
Feedback is key when designing rooms; it lets the player determine certain things by themselves, without being treated like a baby. There are many ways you can achieve this, such as the next three methods.

**Sense of progression**: This helps the player feel like they’re making progress or going in the right direction. You might not realize this, but designers do this constantly; often with quest objectives, showing progress bars, or other visual changes.

For example, in the game *Spore*, a certain stage lets you enter barren planets that are "unfit for life" and make them "fit for life" using different tools and resources. To indicate this, the planet shifts around and begins to have more vibrant colors as you traverse the planet with these tools, showing that you're actually changing things around you.

**Shape language**: This is how different shapes convey different things to the player. Round shapes usually give a feeling of safety, sharp shapes convey danger and make the player avoid them, and square shapes represent utility. This usually gives the player a general idea of what to do when first entering a room, which is great for introducing new mechanics. You’ll learn more about this in the advanced decoration guides as well.

**Limitations and Strategy**: How different elements restrict the player or present them with opportunities. Using Limitations and Strategy correctly can inspire creative strategies from the player, while still being limited to a certain direction of play. A fun example is this Celeste room, where the player must reach every switch to progress (limitation), but can access them in any order thanks to the dream block and springs (strategy) in the middle.

{{< img src="https://lh3.googleusercontent.com/d/172wJOSFiFolV8SKmkzOL4yK-ar-WGjQV" >}}

You won’t usually need *all* of these methods at once in your gameplay, or you may overwhelm players. This is especially true of Sense of Progression and Limitations & Strategy; throwing every mechanic at the player just overwhelms them and will likely prevent them from actually learning. On the other hand, giving the player every pointer possible will likely make them feel babied.

*Celeste* as a whole is a very good example of these concepts applied well. It gradually teaches the player the basic movement, and does the same for its custom mechanics. You won’t have to use more than two mechanics at a time for most rooms too, which keeps players from getting overwhelmed. There is always a sense of progression shown, and the shape language excels at its job.

## Objective

An **objective** is what the player strives to achieve in a game. This can be as simple as opening a door or jumping to a platform, or as complex as figuring out an intricate puzzle, or beating a difficult boss with multiple attack patterns. Usually, objectives have a lock (problem) and a key (solution). This makes it easy for players to dissect the objective and solve it.

Good objectives usually have these two criteria: *identifiable goals*, and *identifiable solutions*. Goals should be clear to the player so they know exactly what they need to achieve. This can be done in a few ways, such as making the goal easy to view from a distance but blocked by a challenge. You can also just explicitly state the goal to the player as well, such as a quest objective.

Once the player knows what they need to achieve, they must be able to deduce a general solution. This way, they can roughly know how to make progress. Solutions should also be interesting, have some sort of reward, and be satisfying to figure out. This way, the player is encouraged to keep solving puzzles.

** **

A great example of a good goal is the Rubik’s cube. The Rubik’s cube already has an identifiable goal, which is shown right when the player first finds the cube. The solution isn’t as simple though, as the cube may be very complex for a beginner. Once the player has completed the cube for their first time, they might feel rewarded, or satisfied.

While there are many ways to ensure players’ solutions are valid, the most common way is to playtest your rooms. Others can provide different insights to help make your puzzles match your criteria better. They can also help you understand how the average player may feel when encountering your rooms for the first time, so always make sure that playtesting is part of your design process.
## Lock and Key principle
As mentioned before, the Lock and Key principle is greatly related to objectives. Most objectives will follow it by having a lock (problem) opened by a key (solution). Do note that the Lock and Key principle is covered more in depth in [Mechanics 5](/docs/guides/gameplay-2/mechanics-5-limitations-strategy/); this just explains some ways it’s used in room design.

The Lock and Key principle can be used in far more complex ways. It’s very easy to make intricate puzzles by combining many small objectives together into one larger task. For instance, a player may need to obtain two keys; one to open the main lock, and a second key to open a *path to* the first key.

However, chaining small objectives like this can make your puzzles more disorganized, turning them into an irritating scavenger hunt instead of meaningful progress. This can be avoided by making the small objectives more complex, and chaining these complex objectives moderately.
An example of chaining multiple locks & keys together would be this room. Here, there are multiple locks and keys chained together in order to create a small routing puzzle.

** **

[Video](https://cdn.discordapp.com/attachments/1285394476118052864/1308582282054860900/RPReplay_Final1725764529.mov?ex=673e77b8&is=673d2638&hm=b8bcf0136dc85b04bfe20f39140447a5970ca2e14098fceff52e2af4df4a4067&)

First, the player should notice that they must cross the chasm. Then, the player should notice that to reach the right side, they must get launched from the top left. After that, they should figure out that they have to go to the bottom right in order to reach the top left.

The Lock and Key principle can be applied to your custom mechanics. Almost any mechanic can act as a key, since mechanics help the player do things that would not be possible otherwise. Mechanics can also contribute to locks, as some mechanics can impede the player from progressing or require some sort of setup in order to use.

The previous example does a fairly good job at demonstrating this. The hook can act as both a lock *and* a key. The limitations of the mechanic prevent the player from rushing through the room, while still helping them reach the desired destination with a little thinking.
## Progression
**Progression** refers to the player seeing their own progress while trying to reach an objective. Making your goals feel reachable will motivate players to keep working on them, and can also push them in the right direction. This can also be referred to as Sense of Progression, which makes solutions more identifiable as stated before.

Sense of Progression can be applied in two ways; letting the player know that there *is* a reachable goal beforehand, and showing the player’s progress while they’re reaching an objective. These two approaches can (and should) be used simultaneously, and can also be applied in many different ways.

For example, you can directly tell the player that there is a goal and a reward. Alternatively, you can imply it more subtly by showing the reward behind some obstacle the player has to overcome. You can also use quest objectives, progress bars, or visual indicators. Ultimately it’s up to you how you implement Sense of Progression in your rooms.

** **

Going back to the previous Rubik’s cube example, we can see that it also satisfies these criteria as well. The goal is shown to the player right after they pick it up for the first time; they see the cube in its solved state and then start to fiddle around with it. After some time, they scramble the cube completely, and try to solve it to return it to its original state. They might also notice how the cube slowly starts to resemble its solved state, showing their progress over time.
## Central Mechanic & Critical Path.
The **Central Mechanic** in a room is the main one used within that room. This helps the player learn that mechanic, and it also helps make the room feel less tedious and more cohesive. To implement a central mechanic, choose one of the mechanics in your level, and make that the main focus of that room.

If your rooms use random mechanics instead of sticking to a few central ones, they could feel inconsistent and hard to learn, like the final room in The Core C-Side in *Celeste*. This room uses almost every mechanic available at this point, at the cost of being one of the least fun rooms in the game.

{{< youtube etbgXCe8zuU >}}

Once you’ve chosen a central mechanic for your room, you must also decide what the player will do with it: how they will get from point A to point B. This is what the **Critical Path** is: the intended path through a room. Having critical paths helps you predict where the player will go when designing a room, so you know what enemies and items they’ll likely encounter when playing.

At the same time, these are almost never the *only* paths you can take, but just the most direct path available. You can hide secrets and collectibles on alternative paths, away from the critical path. This also means that unintended strategies you discover when playtesting can often be turned into good spots for collectibles, ones which reward the player for taking detours or traversing harder terrain. Obstacles should mostly be placed near the critical path as well, or players would just bypass them and make the room feel boring.

Mechanics can also be used to make interesting collectibles and secrets. This is mostly applied in the same way you’d create secrets with alternate paths. You can use mechanics in unique ways or test the player’s knowledge of them to create collectibles, like in this example made by everedeck and illusion2.

[Video](https://cdn.discordapp.com/attachments/1285394476118052864/1308580774043451442/13_Pylons.mov?ex=673e7650&is=673d24d0&hm=84e8345af56b2ac4ef8c61527811767be8114013a2f24806810420298a223da1&)

This example has an optional collectible which seems to be locked off limits. However, once the player gets comfortable with storing momentum, they might look for an opportunity to gain extra momentum. This unlocks the opportunity to jump off to get the coin. Many collectibles like these are made with the same process that was mentioned earlier, where the creator finds an unintended path and uses it to hide a collectible.

# 3: World Design

As mentioned before, **World Design** is the practice of designing larger areas of gameplay. These larger areas are composed of individual rooms, as you can expect. In addition to linking different rooms together, well-done world design can heavily influence a player’s emotions and decisions as well.
## Player Perception
When designing large areas, it’s crucial to think about how players will see certain features in your gameplay. Keeping this in mind can help you direct players towards or away from certain spots, and make your areas more cohesive.

There are many ways of influencing how the player perceives your world design, but here are a few useful ones to start with.
**Occlusion**: Keeping the player away from certain areas by hiding them behind seemingly unimportant objects. This could include hiding things like small cabins behind a thick mass of trees, or hiding the entrance to a secret area and placing more interesting-looking features further from it.

You can also do the opposite of occlusion, and make objects seem important by proudly displaying them on their own. Placing a house in the middle of an empty landscape will grab the players attention, making them think the house is important.

**Dissonance**: Bringing attention towards a specific point by breaking expected patterns in the area. For example, if you have a desert environment, you can introduce dissonance by placing a lush environment in the middle, complete with an oasis.

This keeps your environment fresh, but it has to be balanced. Too little dissonance will make your areas feel dull and boring, making players less likely to explore them. Too much will make your area chaotic and overwhelming. The right amount will keep players interested with new content, while keeping the area familiar enough as well.

** **

**Positive & Negative Space**: Using an area’s scale to your advantage. Areas with lots of positive space are big and open, implying that players have lots of things they can potentially do. Areas with lots of negative space are smaller and more closed off, which can convey feelings of safety and coziness.

As with Dissonance, both of these must be balanced. Too much positive space may overwhelm players with potential choices, which stops them from choosing one and continuing. This depends on the type of gameplay you’re making, of course; a metroidvania would include more positive space than a straightforward RPG. You may also need some sort of guidance for the player as well, like landmarks or paths.

On the other hand, too much negative space can feel claustrophobic and repel players, depending on the contents of the space. A horror game could greatly benefit from this feeling, for instance. You can also use negative space to force the player into encounters like combat or puzzles, and it’s also where most rooms can take place.

## Design Patterns

Another important method for influencing the player’s choices and emotions is **Design Patterns**, the way you place features and gameplay elements in an area. These help players understand the purpose of an area, give it a more distinct identity, and complement the perception methods mentioned above.

As with Player Perception, there are many design patterns you can use, such as the common ones covered here.

**Centralized**: Elements in the area are neatly organized around a central landmark, like a roundabout or a fountain. You can use this to direct the player towards a specific area or point of interest. This pattern is very useful for man-made areas like cities, but less so with natural places like landscapes. When it’s used though, it can make the landmark far more memorable.

Less centralized areas can feel less artificial and more vast, but they’ll often still use important areas like landmarks. As a result, it’s still useful to practice designing areas around landmarks. In this example, all of the buildings are centered around a singular landmark in the center, marked in red.

{{< img src="https://lh3.googleusercontent.com/d/1kHuf3UPXDr9SAnQV6MfMi7WmINtjsqSC" >}}

**Symmetrical:** Elements are organized around at least one axis of symmetry. This lets you place elements more evenly around the area or make the space feel more man-made, but can also result in repetition if overdone.

You can mask some symmetry by slightly changing one side of the area, or by covering the symmetry with other features like importing landmarks or decorative elements that differ from one side to the other. In this example, the buildings are roughly symmetrical; however, some of them are slightly varied so the map isn’t dull.

{{< img src="https://lh3.googleusercontent.com/d/1SrV7o4e4O4UlgUNCcbZHubd1FbzLj5cH" >}}

**Environmental**: Elements are placed depending on the terrain around them. For instance, in this example the buildings are arranged so some fit the cliffside marked in red, and others fit the bridge on the left side.

This can make your area feel more realistic, and it greatly changes how players will approach the area. However, it also depends on the specific environment you’re creating *and* your understanding of that environment in the real world. You’ll likely need to use references when planning out your area.

{{< img src="https://lh3.googleusercontent.com/d/144iXhc8DK57-7btPub6jCbkAyrVqpKLO" >}}

Regardless of the design patterns you use, it’s important to get feedback and playtesters for your areas when designing your gameplay. These decisions can have major impacts on how your gameplay is experienced, so it’s important to use them with purpose.
## Exploration & Incentives
Exploration is an important part of world design; after all, you want the player to experience everything your gameplay has to offer. To put it simply, **exploration** is how much the player is motivated to search your world. You’ll want them to naturally be interested in exploring, and have fun while doing so. Not all worlds will require exploration, but it’s still important to consider in your design process.

The most important tactic for fueling exploration is through **incentives**. These are rewards and motivations the player can encounter in your area, such as currency, new abilities, or achievements. Incentives are basically a morale boost for players, a push they need to keep searching for rewards elsewhere. You can basically turn anything into an incentive, although some work better than others; if the player must do a hard task to get something, reward them with a bigger incentive.

There are other ways to encourage exploration from players, such as using interesting world design to keep players exploring. When you make new areas fresh and exciting, this makes players curious of the possibilities in your level, instead of them expecting more of the same. This is as simple as changing the colors and details between the areas; the contrast between the areas will motivate more exploration. Of course, you still need cohesion; it would be jarring to enter a burning desert right after a frigid tundra.

** **

Diverting the player’s expectations can also make areas seem more interesting. If you enter a seemingly unimportant side path and get rewarded with a new area, this can motivate you to explore that area. You can also use **Scale Reveal**, where you greatly contrast the sizes of the rooms that connect two areas. This is usually done by making the new area much larger, and the one before it smaller and claustrophobic; the contrast makes the new area feel much larger.

As always, make sure you don’t overwhelm the player with these tactics. Make sure you don’t have far too many connections from one area to another, and make sure that incentives like collectibles and secrets are sparse enough to keep their allure.

Once the player starts exploring, it’s important that they know where they are on the map. This is where **Paths** come in, as ways for players to know their location. For instance, you can use unique landmarks so players can recognize where they came from, like spacing out some rocks so each path in and out is distinguishable.

{{< img src="https://lh3.googleusercontent.com/d/1AvuXujrVzvvNpV5SBX1Bz6b3L_StmGDT" >}}

Alternatively, you can intentionally confuse the player if need be, and space out the objects so every path in and out is indistinguishable. This can be very effective for things such as horror gameplay where you want the player to feel lost. In the example below, if you rotated the scene randomly, there would be no way to tell what direction you came from.

{{< img src="https://lh3.googleusercontent.com/d/18Z0QbSZNhSf4ejnjN3v1nJ1IdUBAMrRq" >}}

## Cognitive Mapping
Paths and entry points are crucial for world design because of **Cognitive Mapping** - the way people make sense of unknown spaces. Cognitive mapping usually follows a general sequence like this:

- The player gets a sense of the area upon entering, forming expectations based on the first room.
- They explore, finding points of interest and making connections between them.
- They fill in the blanks on their mental map, eventually learning everything in the area.

Entry points and points of interest should be self-explanatory at this point, but they still have some nuance. For instance, entry points work best when the goals/points of interest are visible from the start. A ledge with a clear view of the area is a good example, as it lets you see many relevant locations. Points of interest need incentives *and* a way to stand out from their surroundings. They should contrast enough to draw attention and signify that something important is there.

The third thing to cover is Readability. You’ve probably heard this term before, but it has a lot of depth when applied to world design. A space is **readable** when players can easily recognize it. This makes it easier to remember that location during cognitive mapping. You can make a space recognizable by making the area itself distinct, and by using recognizable shapes and patterns - elements that can easily be broken down into their primary components by the player.

The easiest way to make recognizable shapes and patterns is to use **Grayboxing**. This is where you block out the general map layout using simple shapes, before developing details. In addition to being a good practice for decoration, grayboxing improves the playtesting process; playtesters understand the map faster, and changes can be made more easily. More generally, grayboxing is an application of **Parti** - using your main design ideas to simplify a space down to its most important aspects. This helps others understand the intent of your areas more easily.

Ultimately, cognitive mapping isn’t as simple as blindly following these principles. You’ll still need to gain a sense for what players will do in your areas. Think about what players will notice first when entering a new area, and then make an educated guess of their next move. For instance, in *Zelda: Breath of the Wild*, exiting the starting area brings you to a ledge, revealing the world with Hyrule Castle in the center. From there, players will either beeline for the castle out of curiosity, or avoid it as it looks like the final region of the game.
## Flow
**Flow** is how it *feels* to progress in an area. There are many factors that influence it like gameplay speed and complexity, but it generally boils down to how it feels to move and control the player. There isn’t a “best” type of flow either; depending on what you’re trying to make, you may want fast, snappy movements for the player like *Celeste*, or calm, smooth movements like *The Planet of Lana*.

Flow can also be vertical as well. **Verticality** or vertical flow is how it feels to move up or down in a level. This mostly depends on the mechanics you use - some are more suited for flat ground, others for varied terrain.

** **

When designing flow, keep these factors in mind:
- **Speed**: How fast or slow should the player go through the path?
- **Direction**: Will your path have smooth turns, or abrupt ones?
- **Wayfinding**: How obvious should the path be? Will you use occlusion or design patterns to alter it?

Use these factors intentionally to alter flow. You’ll want high speed and abrupt turns for fast paced paths, but slow speed for slow paced ones. More obvious paths will be useful when designing manmade areas, but organic settings will feel more natural with less obvious wayfinding.

Keep your critical path in mind when controlling these factors. As with room design, the critical path here is just the most direct path through an area, so altering that path will alter the area’s flow. In addition to the concepts mentioned in Room Design, you’ll also need to consider the player’s “desired path” through your area. If the critical path is very convoluted compared to a straight path from one place to another, it may hurt your pacing and be frustrating. Some developers accommodate this by adding difficult skips that save time.

For example, in Flipswap Factory by zejoant, the main gimmick features platforms quickly rotating around an axis 180° each time you jump. Later in the level, you have to use these platforms to launch you in different directions; however, if you utilize this mechanic in some earlier areas, you can use alternate paths to skip parts of the level that would otherwise take a lot of time.

## Pacing
As you should know from the Pacing guide, this is how you control the gameplay’s tempo and order of events. Pacing will affect the difficulty you choose for the rooms in an area, as well as the area’s difficulty relative to the whole level. Each room in an area is equivalent to a pacing beat, or an event the player experiences.

When designing your gameplay areas, you’ll need to design high-intensity rooms and lower intensity rooms depending on how you plan your pacing. You can arrange these rooms however you wish, although there are a few conventional ways to do so. You can use a **Pile of Beats**, where you make a large amount of rooms separately and connect them afterwards, or you can **Teach, Test, & Twist** where you introduce a technique in one room, test it in the next, and add a twist in a third.

Regardless of how you organize your gameplay beats, make sure the gameplay at the start is simple, and switch up the intensity every so often. Starting simple sets the mood for the introduction and lets the player get used to your gameplay. If you have story elements like characters, it’s also a good place to get players invested. Switching up the intensity every so often also helps to keep players engaged, instead of giving them more of the same.

# 4: Advanced Techniques

By this point, you should generally understand all the major techniques used for level design. There are a few additional techniques you can use to elevate your gameplay design even further, but these are optional. It’s advised to tackle these once you’re comfortable with the other topics in this guide.
## Node Based Mapping
This is a way to efficiently plan out areas. **Nodes** are specific points around an area which players can visit, with larger nodes being more important decisions and points of interest. You can also place nodes together, making **spatial clusters** - patterns the player can analyze when reading a map. Not only do nodes help make physical gameplay paths less linear, but they can also be used with interactive stories to make them far more interesting.

Think of Node Based Mapping as creating the paths for one or many areas. When designing the area, you’ll employ a variety of nodes to work around the player’s potential paths, as follows:

** **

- **Continuance**: Designing the area around the node so players know they’re on the right path.
- **Redirection**: Redirecting the player, either with small changes or large obstacles. These greatly alter gameplay flow, so you can use them when planning your progression.
- **Termination**: The current path suddenly stops, either due to a dead end or a destination. You can place rewards here to make players feel accomplished, or dead ends to make them wary in the future.
- **Divergence**: The current path either splits up or dissolves entirely, heading into a large negative space. This creates choices for the player which can impact their freedom down the line. Divergence nodes are quite useful for planning hidden areas and collectibles.
- **Convergence**: These nodes end divergence nodes. The split paths join back together and the player goes towards one destination. Be careful not to overuse these, or players will feel like they have no control over their path. You also don’t need *every* divergence node to converge again either.

Here’s an example map which uses the nodes mentioned above, grouped into spatial clusters for better organization. This graph is a top-down view of a cave entrance, and the most important nodes are larger as mentioned before. You can plan areas much faster this way, and it’s useful even before you start grayboxing.

{{< img src="https://lh3.googleusercontent.com/d/1vaVUrHINjTk9-8mWk8511gLnKCd9Yc_L" >}}

## Environmental Storytelling
This is how you tell a story using elements in the environment. Environmental storytelling has major ties to your decoration, but it has a place in gameplay so it’s worth mentioning here.

To start environmental storytelling, decide what story you’re telling and the environment you want to design, including the emotions you wish to convey. It helps to get inspiration sources and brainstorm with others during this process, as mentioned in the [Getting Ideas](/docs/guides/main-skills/getting-ideas/) guide. You may also develop concept art or sketches to assist here.

When actually developing your gameplay, it’s crucial to make the world feel **tangible**. Environments don’t revolve around the player unless you’re a deity in the story; as such, things should feel like they can logically continue without your presence. If a location’s been abandoned for a while, make its elements look overgrown and weathered, and include that as part of the gameplay. A warzone would have contested territory, barracks for soldiers, front & back lines, and so on.

Tangibility often means researching the environment to learn what components exist in it and how they interact with each other. While doing this, you can consider logic from the real world, such as geography. For instance, prosperous cities are built around rivers more often than deserts, and deserts can occur if rain clouds are blocked by mountains. Fortresses may often be built into rough terrain which makes them easier to defend, and bodies of water like rivers always come from a source. An example of this is the City of Tears in *Hollow Knight*, which experiences constant rainfall due to being built below the Blue Lake - while this doesn’t influence gameplay at all, it shows players that you *care* about your world.

** **

In addition to tangibility, be aware of how you present your environment and the inferences players can draw from it. If your environment includes weathered ruins, players will conclude that a civilization used to live there. You can use [Narrative Details](/docs/guides/deco-1/creating-details/) to your advantage here by creating context clues for the player to use.

When decorating, we suggest learning about color theory via the Deco 2 guides. Different color schemes can greatly impact the emotions an area gives off, and provide info about things like the climate at play. As an example, the first panel below feels boring and dull compared to the ones next to it.

{{< img src="https://lh3.googleusercontent.com/d/12sNCw9o67Oh_4vRW40qYXeFXGfHZtnXf" >}}

Finally, it’s helpful to keep **dynamism** in mind when making environments. Just because environments should feel tangible doesn’t mean the player’s actions aren’t impactful. For instance, an area may look ruined after an intense fight with an enemy, or a building may look renovated after completing a quest. This can even occur on a small scale; in *Hollow Knight* some decoration elements can be destroyed by the player, changing the environment in small but noticeable ways.

# Sources

- [The Level Design Book: What is level design](https://book.leveldesignbook.com/introduction)
- [Epic Developer Community: Level Design Fundamentals](https://dev.epicgames.com/community/learning/tutorials/3VKJ/unreal-engine-fortnite-level-design-fundamentals)
- [Josh Bycer: A Study Into Puzzle Design](https://www.gamedeveloper.com/design/a-study-into-puzzle-design)
- Staffs Games Institute: Introduction to Puzzle Design (Basic Principles, Player Knowledge Considerations, and Setting Gameplay Objectives)

{{< youtube dVjibdYG4bs >}}

