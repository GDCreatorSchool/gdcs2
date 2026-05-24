---
draft: false
authors:
  - illusion2
title: Using Gamemodes
weight: 4010
date: 2025-03-01T00:00:00.000Z
contributors:
  - komatic5
  - illusion2
description: Choosing gamemodes and gameplay elements for your levels is an
  important process, but one which many people mess up nonetheless. This guide
  will prepare you to use gamemodes properly.
tags:
  - Grade 1
  - Gameplay Basics
---
{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
* Everything you do in gameplay, especially your gamemode choices, should be with a purpose.
* Each gamemode has unique properties that allow them to function in different situations. These properties should be used to choose your gamemodes.
* There are a lot of unique interactions between gamemodes and other gameplay objects which you can use to your advantage.
* This guide contains an overview on each gamemode's properties and interactions, and also includes good use cases for each gamemode.
{{< /callout >}}

- - -

# 1: Introduction

One of the most crucial parts of gameplay in Geometry Dash is knowing *how to use gamemodes*. These dictate how the player navigates levels, as well as the entire feeling of a part or level. As such, gamemode use can massively impact how fun or frustrating a level is.

The key to using gamemodes, and creating gameplay as a whole, is to do **everything with intent**. You should pick your gamemodes for a *reason* and then utilize that reason to its fullest. For instance, don’t switch to Robot for ten seconds just for the player to do a single hold, as you’re not using the gamemode’s unique properties at all. Unless you have a *really good reason* to change gamemodes like this, it’s best to avoid it.

Knowing why you’re picking your gamemodes is a conscious skill that takes practice and knowledge of how each gamemode works. This guide outlines the properties of gamemodes, how to choose gamemodes based on their properties, and unique interactions with other portals and orbs which you can use to your advantage in gameplay.

# 2: Properties

The first thing to understand with gamemodes is **their properties and how to use them**. For each gamemode, I’ll begin with an explanation of their unique properties, an explanation of where you can use these gamemodes based on these properties, and then a short list of pros and cons.

## Cube

* Click to jump, Hold to keep jumping
* No air control, can only be controlled on the ground
* Jump arcs are always the same, smaller when in mini version
* Dies when hitting the side or bottom of a block
* Faster speeds makes it jump longer 

{{< img src="https://lh3.googleusercontent.com/d/1D6pKF9VB00QZU0PVsuzQi-5yfaign5Hc" >}}

Cube is the simplest gamemode. Since it always moves on a preset path, it’s incredibly simple to make gameplay with it in any environment, making it a good jack of all trades. Its path is responsive enough for players to intuitively use it, but not so snappy that it’s incredibly limiting to make gameplay with. Due to its simplicity, the Cube may need to rely on orbs or portals to function interestingly, a tradeoff you may have to balance.

**Pros & Cons**

* Versatile
* Snappy, but not too snappy
* Familiarity; used in basically every level
* Fixed path can be boring at times

## Ship

* Hold to fly up, release to stop flying
* Has air control
* Movement of the Ship depends on its previous momentum, more gravity when in mini version
* Dies when hitting the side of a block
* Becomes floatier as speed increases

{{< img src="https://lh3.googleusercontent.com/d/1cbYsm2ZkiQ-Cp3btsRXzdM6BLpokYdmQ" >}}

The Ship is probably the most complicated gamemode for the player to use, requiring a deep understanding of the game’s physics to master. As you can see from the image above, the Ship takes a long time to go back up after clicking whenever the player is falling down, but goes up almost immediately when the player is moving up. It’s not always snappy and responsive, and requires a lot of player control. Because the Ship gets floatier the higher the speed, slow Ship parts will require much more control than fast Ships.

This gamemode is typically quite floaty, but you can make good use of it in fast & snappy parts thanks to orbs, giving it an edge over a gamemode like the Robot. This also means it has countless ways to be used; you can create simple straight flies, tight curved sections like the one in Astral Divinity, and so on.

In 2.2, RobTop updated the ship gamemode's physics while upside down and in a dual to be consistent with the regular ship gravity. In levels created prior to this change, the upside down and dual gravities are much stronger. You can revert this change in the 2.2 editor and modify other physics changes under Legacy Options in the editor's settings page.

{{< youtube Wt76QZqF-os >}}

**Pros & Cons**

* Uses holds and releases in the most varied ways
* Works well in slower parts where an immediate response isn’t necessary
* Requires the most player control and understanding, difficult to fully understand
* Smooth and floaty

## Ball

* Click to swap gravity
* No air control
* Path when clicking is always the same
* Dies when hitting the side of a block
* Path through the air gets steeper as speed decreases

{{< img src="https://lh3.googleusercontent.com/d/1cfrDo4ReuL6mgpS6LMBQfwCRvl5KZAOl" >}}

The Ball isn’t as snappy as the Cube, but it’s still relatively fast. It’s extremely simple and acts like a blue orb, yet that alone is enough to be really interesting. Since its movement is the same each time, it’s predictable and repetitive. Unlike the Cube though, you can click on platforms much faster. You don’t need to wait for the Ball to fall down or stabilize or anything as the movement is basically a straight line, giving more freedom when designing gameplay.

**Pros & Cons**

* Smooth, but snappy enough to work in fast environments
* Great at creating controlled repetition
* Really quite simple yet interesting
* Fixed path can be boring at times

## UFO

* Click to jump midair
* Has air control
* Jump arcs are always the same, but smaller when mini
* Dies when hitting the side of a block
* Jumps go farther as speed increases

{{< img src="https://lh3.googleusercontent.com/d/1lxIblNcu5TqdF9RaFYeq-QTIkYwXuoDh" >}}

This is the most snappy air gamemode, apart from Wave which is a whole other story. That alone makes it unique from the rest. Though it may seem like a floating Cube, the decreased gravity and air control allows it to be used in many different situations. For instance, you may see UFO parts where you must rapidly click to ascend, which isn’t easy to achieve with the Cube. Just like Cube however, the UFO doesn’t have too much control due to its snappiness and low gravity, so most UFO parts you see will usually have a set path for the UFO to follow.

**Pros & Cons**

* Simple, like the Cube
* Snappy air gamemode
* Has set paths while midair
* Still relatively floaty

## Wave

* Hold to fly diagonally up, release to fly diagonally down
* Has air control
* Travels in a straight 45° line in normal size, and roughly 63.43° in mini size.
* Dies when hitting everything except for the camera border grounds
* Nothing changes as speed increases

{{< img src="https://lh3.googleusercontent.com/d/1H-4MFWGHdww5GlyRZHBzY3RPTiN0IojH" >}}

This is one the snappiest gamemode with air control, instantly changing direction when the player holds or releases. Due to the insanely fast response and the air control, this is also known to be one of the most precise and difficult gamemodes to play. The trail behind the Wave is a consistent line, which helps create repetition like the Ball gamemode. It can be used in parts that have high speeds or in parts that require control in a sharper way than the Ship. Be careful of combining it in high speeds with other gamemodes though; because it has no physics and travels in straight lines, it can very easily disrupt the flow of a part and feel extremely jarring. Because nothing changes as the speed increases, inputs have to be much more precise at high speeds; you don’t get any additional leeway like other gamemodes.

**Pros & Cons**

* Very fast and snappy
* Sharp, requires a lot of control
* Good at making repetition
* Has no physics, different from every other gamemode
* The most limiting fixed path of any gamemode - high risk of becoming boring

## Robot

* Hold to jump higher until the maximum height, release to stop jumping
* Limited air control - can choose when to release when in midair
* Has an arc that changes in height depending on when you release
* Dies when hitting the side or bottom of the block
* Jumps go farther as speed increases

{{< img src="https://lh3.googleusercontent.com/d/1Ge_DeWj2ejgu-ridp7zvqquMw51aq9S3" >}}

The Robot functions similarly to the Cube, but uses holds instead. Due to this it requires more control, but the fact that it isn’t an air gamemode makes it a lot simpler to use. The Robot is good for a lot of long holds and emphasizing specific clicks, but because the jump height depends on the hold length, it’s harder to do high-click-per-second gameplay with a lot of movement. The gamemode may be similar to the Cube, but the changes make it useful in many different situations.

**Pros & Cons**

* Floatier, and less snappy
* Harder to use in high-cps parts
* Good at emphasizing long clicks
* Micro-clicks (releasing shortly after holding) can be frustrating

## Spider

* Click to teleport up and reverse your gravity
* No air control
* Travels in a vertical line every time
* Dies when hitting the side or bottom of a block
* Nothing changes as speed increases

{{< img src="https://lh3.googleusercontent.com/d/1yKKnsqA_4IUzKnz1mCGks8Xso_XoqXZA" >}}

This IS the snappiest gamemode in the game, hands down. The instant teleportation of the Spider allows for an extreme amount of movement in the shortest amount of time. Unfortunately, due to the instant teleportation, the player may die instantly without knowing why, as slightly mistiming a click can lead to you completely missing a platform. The Spider doesn’t need to wait to reach the ground or anything after clicking, meaning you can perform high-cps parts more easily with the Spider while still emphasizing the clicks a lot. Repetition will work for this gamemode too, due to the movements being straight vertical lines.

**Pros & Cons**

* Snappy and strong
* Can perform high cps parts well
* Great for click emphasis and repetition
* Precision can make it buggier with certain platform setups

## Swing

* Click to change gravity midair
* Has air control
* Movement of the Swing depends on its previous momentum, more gravity when mini
* Dies when hitting the side of a block
* Floatier as speed increases

{{< img src="https://lh3.googleusercontent.com/d/1KdbKUPQeXGSKNhSS5EUBs72EuDFmRejH" >}}

The Swing is the least responsive of all the gamemodes; it will take a while for you to actually see that you changed gravity and are going the other direction. Some argue that this makes Swing the worst gamemode, while others believe it’s unique because of it. The Swing requires an understanding of the physics as well as control over your gravity, and the movement of the gamemode allows for very curvy gameplay. As most recent gamemode, it’s unfamiliar to a majority of the playerbase. Due to the obviously different mechanics from the Ship, controlled gameplay shaped around the movement of the Swing will work a lot better than trying to substitute it into Ship parts.

**Pros & Cons**

* Extremely smooth and unresponsive
* Requires understanding of the physics and control over your gravity
* Creates very curvy and smooth gameplay

# 3: Techniques & Interactions

Last section covered where you should use these gamemodes and why; this section will cover how. However, first I need to talk about something much more important to using your gamemode right: actually utilizing them.

To utilize a gamemode is to use it for the reason that you chose it. If you want the player to have a certain amount of control over their position, you’ll choose a gamemode that works best with that. As a result, if you’re filling your gameplay with lots of orbs, pads, and portals without using each gamemode’s unique properties, your gameplay will come off as purposeless.

For example, in a very fast part that swaps gamemodes twice a second after each click, your gamemodes won’t have any time to shine: they’ll blend together, and then none of them will stand out. Another example is if you have a Robot part, which you chose to emphasize long clicks. In the actual part, only 2 of your clicks are Robot clicks; the rest are all orbs. Once again, there’s no point in using Robot to emphasize long clicks when you only do two of them.

Ultimately, the how is a lot more nuanced as there are a nearly limitless amount of ways to use gamemodes. A lot of these uses will come down to experience and the inspiration sources you use. The rest of this section will go over common techniques, unique interactions, some tips, and some examples for how to use each gamemode.

## Cube

As mentioned earlier, Cube is reliant on orbs due to its simplicity. We don’t want to spam orbs though, because orb chains are inconsistent and it’ll diminish the value of the gamemode. Thus, try not to use orbs unless you need to; they can emphasize or mix things up, but try to make use of pads, falling, gravity changes, and even things like head hitters to make things interesting.

The Cube takes good advantage of holding after orbs, as holding after a black orb or a blue orb straight onto a platform will make the player automatically jump. This can make the Cube more unique, but can also be buggy at times so use it well. When holding before an orb, you’ll automatically click it when making contact. Keep in mind that the yellow orb functions exactly like a normal jump, allowing mixups, but it can also make the yellow orb feel less unique.

Here’s an example Cube part I made that uses orbs and the Cube’s natural properties to my advantage. I chose it here because it’s snappy enough to function in fast, strong parts and can emphasize the high-cps parts well, while also being simple enough to ease the player into the drop.

{{< youtube 1W4B5ZuAVSI >}}

## Ship

Ship parts can have a free-flowing nature, but you can still make this really interesting. Don’t always have the player idly float, and give them something to do. For example, have the player go up when the song’s melody or volume rises, or vice versa. As a gamemode with air control, structuring is really important for players to understand your gameplay, so try to keep things at least somewhat understandable.

The Ship can also feel snappier using orbs as well. There are a lot of unique interactions with orbs because the Ship takes into account hold inputs at all times.

Blue orbs act as a small burst of momentum when holding

Black orbs bounce the player if they touch a platform

Green, yellow, pink, and red orbs send the player straight up

Yellow, pink, and red orbs into gravity portals will act like a bounce, creating an arc

You can use these held orbs to emphasize some long clicks; they make snappy bursts of momentum which not only use the gamemodes properties, but also feel really clean. Another way people commonly use orbs in Ship is to mark where the player shouldn’t click (hitting the orbs would throw them into spikes, for example), and this way they can construct a click pattern within the Ship part.

{{< img src="https://lh3.googleusercontent.com/d/1T6vOTg9Q65OYfWEXdzPGLD-8wKeD2q9-" >}}

This is a small Ship part from the level earlier. I chose the gamemode here because of how the song noticeably gets more smooth and flowy, while also having strong notes that I can emphasize with the unique orb interactions. Notice how I made the player actually move up and down, and that I used orbs to emphasize important clicks with a punch.

{{< youtube oQbt0qP52MU >}}

## Ball

Ball, as mentioned before, is good as an in-between of snappiness and smoothness, and it can function in both environments. Because you swap gravity on clicks, you can make a lot of interesting interactions with a lot of control over what you want the player to do.

You should generally try to keep an even blend of normal clicks and orbs. Try to focus on creating interesting and fun patterns to play; the repetition of its patterns can be both impactful and boring depending on how you use it. The blue orb functions exactly the same as a Ball click, which you can use for the same function but in midair.

This is a Ball part in the same level; the slower repetitive melody that slowly increases in energy is perfect for this gamemode. Notice how I constantly repeat the same three-click pattern and have a constant up & down pattern at around 0:05 to emphasize the song.

{{< youtube 15-g2Wgv2xs >}}

## UFO

UFO has most of the pros and cons of the Cube with some noticeable differences. First off, because it’s an air gamemode, you have much more freedom with what you do. Focus on having a set path that’s fun to pull off and constantly interesting, only using orbs to emphasize important clicks as always.

The UFO does have a consistent jump arc every time, allowing for easy repetition, especially paired up with things like gravity portals. It’s why you tend to see patterns like this very often in levels.

{{< img src="https://lh3.googleusercontent.com/d/1QdlP64sP0UGi9f95DonbukgJv_twsHTp" >}}

Aside from normal orb use, the UFO can jump into the bottom of a block to kind of “reset momentum”, similar to when you have a blue orb inside of a gravity portal. It works with smaller subtle beats in the background like with syncopation. Keep in mind that the yellow orb sends the player a bit higher and the pink orb sends the player a bit lower than usual; this can help if you need the player to reach some specific heights or want to subtly change the energy of your clicks.

This part is repetitive, slow, and floaty, hence why I chose the UFO. I made use of a lot of repeating patterns and orb usage to emphasize the song.

{{< youtube yKnEqV1Qu3o >}}

## Wave

Wave is incredibly unique because it has no physics whatsoever and has little to no interactions with anything gameplay-related. Having no diversity in your gameplay can get incredibly boring, which is why you should take advantage of everything you have. As another reminder: Wave is incredibly fast, precise, and the lack of physics makes it extremely jarring to use on a whim. Make sure you’re conscious of this whenever swapping to the Wave gamemode, as lots of perfectly good levels have developed chokepoints from this. If you’re not careful when transitioning to or from the gamemode, you’ll get inconsistency in your level.

That aside, let’s look at what the Wave can actually do. The only orbs that actually work with the Wave are the blue, green, dash, spider, and purple dash orbs. The blue and green are functionally the same, flipping your gravity, but you won’t see any actual difference in your trail until you release. The dash orbs are fun to use on the other hand, as the freedom of direction combined with the sharp and straight trail of the Wave work very well together. The spider orb can also be used to snap the wave to a surface and change its gravity. In addition, the Wave dies on contact with any surface unless you’ve placed the D block; make sure to take advantage of this as well.

This is still a relatively fast part yet different enough from the previous parts, so I chose wave. I made use of blue orbs, dash orbs, and D blocks wherever I could to keep the gameplay interesting.

{{< youtube ZtGk2iNmtzA >}}

## Robot

The Robot is simple and precise. Its greatest weapon is in holds and micro clicks, and it uses orbs as seasoning rather than the sauce. One of the strengths of the Robot compared to other grounded gamemodes is that it can bring diversity to a part with just its default jump, something you should definitely take advantage of.

Now will be a good time to talk about micro clicks and holds. Micro clicks, similar to head hitters with the UFO, work for subtler notes and variation. Holds are for long drawn-out notes, used for the emphasis and power behind those notes. However, you should also make use of everything in between; having controlled jumps where you’re not instantly letting go nor holding out for the full duration will make the player judge the length of their click based on your structuring, and it makes the player have something to constantly watch out for.

This Robot part is the very first part in my level. The song is slow and low energy, allowing me to effectively use Robot jumps in an otherwise boring part. I made use of a lot of differently sized jumps, basing them off of the strength of the note.

{{< youtube _M2c0bPS7KE >}}

## Spider

The Spider is the most powerful gamemode for emphasizing notes, and is successful at repetition too. Though it may look stale and uninteresting, only going up and down, the instantaneous teleportation combined with some interactions with orbs makes it an extremely bouncy and fun gamemode.

Like the Cube, holding after of a black orb will perform a click as soon as you land (though not with a blue orb). This allows you to make clicks much more consistent as well as control the flow of the part much easier. In addition, clicking into a pad will instantly activate it, letting you bounce, change gravity, or do whatever you want after a click. This constant up and down combined with bounces and orbs is extremely satisfying; you can see an example of it in this part of TROLLMACHINE.

{{< youtube VSw1c3L8szo >}}

This is the spider part in my level, rounding out this part of the drop. This specific part of the song is higher energy compared to the cube, hence why I’m choosing a snappier gamemode. However, it’s still very similar, so I avoided using a gamemode like Wave. You can see that I’m using a lot of pads to emphasize the clicks as well as orbs to make the gameplay way more interesting.

{{< youtube WgDc_lDeRvc >}}

## Swing

Swing is widely considered as the "worst gamemode" to many players and creators alike primarily due to how inexperienced creators can be at using it. They tend to slap it on top of Ship gameplay without considering what the Swing does best: big arcs and curves. Swing uses big curves best, so it is best to take advantage of that. Another important part of Swing is how long it takes for you to actually see your input. You can either you can use the gamemode’s unresponsiveness to your advantage (like BUTTON MASHER by Viprin & More), or you can somewhat remedy it using the gravity trigger to increase the player’s gravity to make it more similar to the old dual ball physics.

{{< youtube 7b6NTNIa2Lg >}}

You can use orbs in the Swing to help with the responsiveness problem as well. Clicking right after a blue orb will act as a boost of momentum, kind of like the Ship’s interaction with the blue orb. Other interactions are fairly intuitive, but for some reason only dash orbs will flip your gravity after using them. Thus, the green dash orb will flip your gravity and the purple dash orb won’t. Using pads with the Swing can be interesting too, as they force you to be a specific gravity before landing on them.

The swing is the slowest of all gamemodes, which is why I thought it would fit as the final part of my level to end everything off. The song here is also low cps and repetitious too, allowing me to create my own click patterns and make the gameplay more interesting myself.

{{< youtube A3ie-ALvmzE >}}

# 4: Conclusion

In the end, this guide is still just a beginner's guide for you to understand how to choose and use your gamemodes. As time goes on and you get more and more experienced, you will be able to make intentional choices based on your own gameplay ideas, and use them effectively.

One common misconception you may have from this guide is that every part must have a single standalone gamemode in it. This is not true at all; a part can have as many gamemodes as you want, as long as you have a good reason for it and you’re actually utilizing the gamemodes.

The part below is a video of me using multiple gamemodes in a single part of the song, yet it still works well because I’m using them intentionally. I have a reason for each gamemode and I’m using them for that reason; notice as well that I’m using ball, ufo, ship (with orbs), cube, and spider, all gamemodes that work well with high speed, as well as robot at the end to emphasize the ending and some clicks. Admittedly I wouldn’t do this in an actual level because the song didn’t change much between this and the previous Spider, so this is purely for demonstration purposes.

{{< youtube 0bNsWQJW1Es >}}

Lastly, here’s a video of the entire level if you’re interested in seeing how it all turned out.

{{< youtube FGAftuAcquM >}}

**Video:**

{{< youtube Se2KWB1XgfE >}}
