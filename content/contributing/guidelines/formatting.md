---
draft: false
title: Formatting
weight: 500
date: 2026-03-23T00:00:00.000Z
description: Once your setup is ready, you can start writing guides. This guide covers how to structure content using a frontmatter, format your text, and use shortcodes to embed media and standard components.
authors:
  - komatic5
  - chuckolate
contributors:
  - komatic5
  - chuckolate
tags:
  - Contributing
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Write guides with Markdown and HTML.
- Use shortcodes to embed different types of media.
- Store important metadata in a guide's frontmatter.

{{< /callout >}}

# 1: Frontmatter

Every page starts with a **frontmatter** section. It defines metadata such as the page title, description, and visibility. The frontmatter *must* be included at the top of every file, and it's very important to configure correctly to ensure that more people will see your work.

To do this, modify the frontmatter for your page. Every page starts with a frontmatter which is inside `---` triple dash areas. Here's an example from the [Making Optimized Setups](/docs/guides/triggers-2/making-optimized-setups) guide:

```
---
title: "Making Optimized Setups"
weight: 6150
date: 2025-03-17T00:00:00.000Z
authors:
  - "theibra"
contributors:
  - "chuckolate"
  - "theibra"
  - "themilkcat_tmc"
draft: false
math: true
seo:
  title: "How to Optimize Geometry Dash Setups"
  description: "Tips for optimizing Geometry Dash setups."
  canonical: ""
  noindex: false
---
```

We'll now cover what each of these attributes mean.

## Title
It's the title that shows on the website.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1Pu9IgFnAXArdpWmMhPWlzNgdUP1L7InU" >}}
{{< /img-grid >}}

If you want to display a guide emote alongside the title, you should go to the location `assets/images/GDEmotes/CustomGuideIcons` of the repository, and save the emote in a corresponding folder. The name of the file should be the `title` set on the frontmatter, written in [kebab-case](https://www.theserverside.com/definition/Kebab-case). For instance, the emote of the Using Gamemodes guide is stored in `assets/images/GDEmotes/CustomGuideIcons/BasicGameplay/using-gamemodes.png`

## Weight
The `weight` of the page determines its order: lower weight means a page shows up first. For example, Data Storage has a weight of 6140, Making Optimized Setups has a weight of 6150, and Control Schemes has a weight of 6160.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1Q05w4BJYGJi_kdvP-YczFojs8pr7rgfz" >}}
{{< /img-grid >}}

The "Next" and "Previous" buttons also use page weight to link between pages.

{{< img src="https://lh3.googleusercontent.com/d/15AfbNg4qpEPqKTwT0kulPjiK6ivEMfau" >}}

## Draft
Whether the guide should be committed as a draft. If `true`, the page will not be published on the website.

## Date
The date of when the guide is officially ***published*** on the site. It must follow the `YYYY-MM-DD` convention, and everything starting from the `T` (including it) can be ommited.

This parameter is mainly used to display the most recent guides on the frontpage. If a guide has been set to a future date, it won't be published on the site until that day arrives, even if `draft` is set to `false`.

## Math
Whether to enable math formatting in this guide. If `true`, you'll be able to use MathJax for richer math syntax. It is an optional attribute, set to `false` by default.

## SEO

The `seo` section controls how the page appears in search engines and when shared on platforms like Discord, Twitter, or other social media. While optional, it is strongly recommended to configure this properly. To configure it, you can pass these parameters:

- **title**: This overrides the default page title used in embeds and browser tabs.If not specified, the regular `title` parameter from the frontmatter will be used.
- **description**: A short summary of the page content. This is what appears in search results and link previews, and ideally it should be concise.
- **canonical**: Defines the [canonical URL](https://developers.google.com/search/docs/crawling-indexing/canonicalization) of the page, used to avoid duplicate content issues in search engines. Leave this empty unless the same content exists under multiple URLs. If that is the case, you should set this parameter to be the full URL of the preferred page.
- **noindex**: Controls whether search engines should index the page. If set to `false` (default), the page can appear in search results.

## Authors & Contributors

The property `contributors` receives a list of all [contributors](/contributors/) who have helped shape the guide in some way. This can encompass writing segments, researching, proofreading, adding examples, and so on.

The list of contributors can be found in [data/contributors.yaml](https://github.com/GDCreatorSchool/gdcs2/blob/main/data/contributors.yaml). The file stores for each contributor:

- `ID`: Their **discord** user ID.
- `username`: Their **discord** username.
- `preferredName`: If the contributor wants to use on the site a name that's not their discord username, they can add that new name on this attribute.
- `usePreferred`: If set to `true`, the `preferredName` attribute will be used for display. Otherwise, the discord `username` will be used on all pages instead.
- `safeUsername`: Transforms the username attribute to be url-safe. You don't have to fill this attribute.

The property `authors` is a subset of `contributors`. It specifies which contributors are the **main writers** of the guide, who did the main researching, drafting, and writing tasks. All contributors will be credited on the final section of the guide, and guide authors will be distinguished with a small batch.

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/13ZxzcyAO13XCe9EjIfIQbnA3djRG9Vp5" >}}
{{< /img-grid >}}

To fill the authors and contributors attributes in the frontmatter, **you must register the username of the contributors**, not the ID nor preferredUsername. If a new contributor not in [data/contributors.yaml](https://github.com/GDCreatorSchool/gdcs2/blob/main/data/contributors.yaml) needs to be credited on a guide, their attributes should be added to that file.

Do note that filling these is optional, but it is recommended to include them so everyone's work gets recognized directly on the site. Either way, all contributions get registered on GitHub and show up on the *Recent Page Edits* section of the [homepage](/).

{{< callout context="caution" title="Note: adding contributors through Decap is not currently supported. If you want to add or change the attributes of a contributor, do it yourself through localhost or ask a contributor in the discord server to do it." icon="outline/info-circle" >}}
{{< /callout >}}

## Body

Everything else that's not inside the frontmatter is the **body** of the guide, and is where the main contents of the guide are. The following sections will teach you how to style it properly.

# 2: Body Syntax

## Markdown

Markdown is a markup language that you can use to add formatting to text documents. Here are all the Markdown syntax tools that you can use.

### Headers

Headers use hashtags (#) followed by a space. The number of hashtags determines the size and hierarchy.

| Syntax | Result |
|--------|--------|
| `# Large Headers` | <h1> Large Headers </h1> |
| `## Medium Headers` | <h2> Medium Headers </h2> |
| `### Small Headers` | <h3> Small Headers </h3> |

Using more hashtags will make headers appear smaller but we only use the header sizes specified below. Large headers are used for main sections, medium headers for subsections, and small headers for subsubsections (these are rare).

### Italics

To italicize your text, surround it in single asterisks (*).
| Syntax | Result |
|--------|--------|
| `Your text *here*.` | Your text *here*. |
| `*Your text* here.` | *Your text* here. |

### Bold
To bold your text, surround it in double asterisks (**) or double underscores (__).

| Syntax | Result |
|--------|--------|
| `Your text **here**.` | Your text **here**. |
| `Your text __here__.` | Your text __here__. |
| `**Your text** here.` | **Your text** here. |
| `__Your text__ here.` | __Your text__ here. |

### Code Blocks

To create *inline* code blocks, surround your text in backticks (`). This is useful for highlighting text that must obey a strict or specific syntax.

| Syntax | Result |
|--------|--------|
| ``Your text `here`.`` | Your text `here`. |
| `` `Your text` here.`` | `Your text` here. |

You can also create *fenced* code blocks, using three or more backticks to surround the text. These are used for displaying multi-line code segments with precise formatting. For example, the text
````
```
const message = "Hello, World!";
console.log(message);
```
````
will be displayed as follows.

```
const message = "Hello, World!";
console.log(message);
```

To enable syntax highlighting, add a language identifier (like `js`, `cpp`, or `json`) after the first set of backticks. This way, the text
````
```js
const message = "Hello, World!";
console.log(message);
```
````
will render like this.
```js
const message = "Hello, World!";
console.log(message);
```

### Quotes

To create a blockquote, place an angle bracket (>) before your text. You can extend quotes across multiple lines by adding > to each line. Here are a few examples.

**Single quote**<br>
The line ` > This is a quote. ` gets rendered as:
> This is a quote.

**Multiline quote**<br>
The block
```
> This is a multiline quote
>
> that continues here
>
> and here.
```
gets rendered as:
> This is a multiline quote
>
> that continues here
>
> and here.

### Embed Links
Links are formatted as `[text you want](link you want)`. You can link to external websites or internal pages of GDCS.

| Syntax | Result |
|--------|--------|
| `[Object Types](/docs/guides/the-editor/object-types)` | [Object Types](/docs/guides/the-editor/object-types) |
| `[Youtube](https://www.youtube.com/watch?v=BbeeuzU5Qc8)` | [Youtube](https://www.youtube.com/watch?v=BbeeuzU5Qc8) |

For internal links, use the folder/file path shown on the website URL, not the GitHub file path. For instance, if you want to link to the page `https://www.gdcreatorschool.com/docs/guides/the-editor/object-types`, use the URL `/docs/guides/the-editor/object-types`.

### Tables

Tables are created using vertical bars (`|`) to separate columns, and hyphens (`-`) to define the header row. Each row must have the same number of columns. Here's an example of a simple table:
```
| Header 1 | Header 2 |
|----------|----------|
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |
```
This will render as follows.
| Header 1 | Header 2 |
|----------|----------|
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |

You can align text within columns by adding colons (:) to the separator row:

- `:---`: Left-aligned (default)
- `:---:`: Centered
- `---:`: Right-aligned

For instance, the following table:
```
| Left | Center | Right |
| :--- | :----: | ---: |
| Text | Text | Text |
```
will have this display.

| Left | Center | Right |
| :--- | :----: | ---: |
| Text | Text | Text |

## HTML

{{< callout context="danger" title="This subsection is a work in progress." icon="outline/info-circle" >}}
Check the [Sharing Levels](/docs/guides/the-editor/sharing-levels/) guide for a working example.
{{< /callout >}}

## MathJax

{{< callout context="danger" title="This subsection is a work in progress." icon="outline/info-circle" >}}
Check the [Making Vectors](/docs/guides/triggers-2/making-vectors/) guide for a working example.
{{< /callout >}}


# 3: Shortcodes

Shortcodes are predefined components used throughout the site to handle elements that Markdown or HTML alone cannot easily format without extensive bits of code. Since they're standardized, it's much easier to use them compared to working from scratch.

Use shortcodes whenever you need to embed media (such as images, videos, or audio), display structured UI elements, or apply standardized formatting like callouts. Here are the most important shortcodes you should know.

## Images

We typically use Google Drive for guide images. In fact, you can find the full list of images [here](https://drive.google.com/drive/folders/1K5_PvefU8SsakcN2kDn-xiTEA-Pbl5Np). However, Google Drive is famously fussy when it comes to linking images from it.

To ensure your images show up properly and don't error out when building, follow these steps:
1. Find the image you want to show. Right-click on it, press "Share", and click "Copy link".
2. You should have a link in the form `https://drive.google.com/file/d/12rLUgwsms6AQZVJp51PdN34McN8R1kA2/view?usp=drive_link`. What you want from this link is the File ID. This can be found between the `/file/d/` part, and the `/view?` part. For this example, the **file ID** is `12rLUgwsms6AQZVJp51PdN34McN8R1kA2`.
3. Create a new link with the form `https://lh3.googleusercontent.com/d/{FILE ID}`. For this example, the link would be `https://lh3.googleusercontent.com/d/12rLUgwsms6AQZVJp51PdN34McN8R1kA2`.
4. Insert your new link into an `{{</* img src="{LINK}" */>}}` shortcode. For this example, the shortcode would be `{{</* img src="https://lh3.googleusercontent.com/d/12rLUgwsms6AQZVJp51PdN34McN8R1kA2" */>}}`, rendering the following image:

{{< img src="https://lh3.googleusercontent.com/d/12rLUgwsms6AQZVJp51PdN34McN8R1kA2" >}}

You can quickly place multiple images in the same row using the `{{</* img-grid */>}}` shortcode, which works like an HTML tag. To use it, place the opening tag `{{</* img-grid */>}}`, place your image shortcodes, and then close it with `{{</* /img-grid */>}}`. Here's an example:
```
{{</* img-grid */>}}

{{</* img src="https://lh3.googleusercontent.com/d/1jAuoVuM2sHe_0HHCuywijgCy8mpEyNVM" */>}}

{{</* img src="https://lh3.googleusercontent.com/d/1zOr3zewAKJLhxFxMUxB1Rol07oTldgj1" */>}}

{{</* /img-grid */>}}
```
The images will render as follows.

{{< img-grid >}}

{{< img src="https://lh3.googleusercontent.com/d/1jAuoVuM2sHe_0HHCuywijgCy8mpEyNVM" >}}

{{< img src="https://lh3.googleusercontent.com/d/1zOr3zewAKJLhxFxMUxB1Rol07oTldgj1" >}}

{{< /img-grid >}}

## Emojis

Some guides make use of certain emojis, such as {{< img src="images/GDEmotes/Triggers/Move.png" class="emote" >}} triggers and {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} editor buttons.

You can find a list of all emojis [here](https://github.com/GDCreatorSchool/gdcs2/tree/main/assets/images/GDEmotes). If you need to add more emojis, this is also where you add them.

When inserting an emoji, use the `{{</* img */>}}` shortcode. For instance, `{{</* img src="images/GDEmotes/Icons/Clock.png" class="emote" */>}}` displays as the {{< img src="images/GDEmotes/Icons/Clock.png" class="emote" >}} emoji. Use the `class="emote"` part to ensure emotes show as the right size.

You can find multiple examples of emojis in the [github page](https://github.com/GDCreatorSchool/gdcs2/blob/main/content/docs/guides/The%20Editor/Placing%20Objects.md) for this example.

## Videos

We typically use YouTube for guide videos. The full playlist of [videos](https://www.youtube.com/playlist?list=PLZ5NwCCPN0OCMA2QuNYNP1VEMf-aUiPUX) can be found here. Fortunately, embedding YouTube links is much simpler than Google Drive links.

Each YouTube video has a **Video** ID which can be found after the `youtu.be/` or `youtube.com/watch/` parts. It's always 11 characters long, and has letters, numbers, `-`, and `_` in it. For instance, in the link `https://youtu.be/v9PjLdzX3Vw?si=5JJm_mzjYPFupCHC`, the video ID is `v9PjLdzX3Vw`.
Copy ONLY the video ID, and place it in a `{{</* youtube */>}}` shortcode. For this example, the shortcode will be `{{</* youtube v9PjLdzX3Vw */>}}`. (Pasting the full link will break the shortcode, so don't do it.)
You can control what parts of the video are shown. For instance, the shortcode `{{</* youtube id=v9PjLdzX3Vw start=1 end=2 */>}}` will play the video starting at second 1, and ending at second 2.

You might've noticed that the Google Drive linked above contains videos, and that the website references these videos. **This needs to be fixed**, and you can help by replacing these Google Drive videos with ones linked on YouTube.
Each video in the drive has the same name as a video in the playlist. For instance, "1_Zoom_Pan" in the Placing Objects guide is on YouTube as "1_Zoom_Pan (Placing Objects, The Editor)". This should help make it clear which videos to replace Google Drive links with.

## Audios

To display audio files on the website, you can use the `{{</* audio */>}}` shortcode. It receives two parameters:

- `src`, which corresponds to the audio file's path, located in the `assets` folder of the repository.
- `title`, which will display the title of the audio on top of the audio player.

For instance, the shortcode `{{</* audio src=/audio/sync-rhythm/1-Unsyncopated.mp3 title="Unsyncopated" */>}}` will display the following output:

{{< audio src=/audio/sync-rhythm/1-Unsyncopated.mp3 title="Unsyncopated" >}}

You can check audio shortcodes being used in the [Note Representation](/docs/guides/gameplay-2/note-representation) guide.


## Callouts

Callouts are used to highlight important information such as summaries, tips, or warnings. They appear as visually distinct blocks, making them useful for separating key content from the rest of the page.

 Guide summaries / TLDRs, such as the one shown below, should use callouts to make them easier to find and read.

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

  - Click and drag in the editor to move around.
  - Use the Build tab to place objects, the Edit tab to edit objects, and the Delete tab to remove them.

{{< /callout >}}

Here is the shortcode used for the callout above.

```
{{</* callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" */>}}

  - Click and drag in the editor to move around.
  - Use the Build tab to place objects, the Edit tab to edit objects, and the Delete tab to remove them.

{{</* /callout */>}}
```

A few things to note:
- Callouts come in different types, known as "contexts". The example above uses the note context, but others exist, such as **tip**, **caution**, and **danger**. A full list of callout types can be found [here](https://getdoks.org/docs/basics/shortcodes/).
- There are two shortcodes here: the `{{</* callout */>}}` one starts the callout, and the `{{</* /callout */>}}` one ends it. You must include both for a callout, otherwise the page will not work properly.
- Keep callout content concise. They are meant to emphasize key points, not replace the main text.

## Details

{{< callout context="danger" title="This subsection is a work in progress." icon="outline/info-circle" >}}
Check the [Control Schemes](/docs/guides/triggers-2/control-schemes/) guide for a working example.
{{< /callout >}}