---
draft: false
title: Localhost
weight: 300
date: 2026-03-01T00:00:00.000Z
description: If Decap isn't your cup of tea, or you want to make changes to the site that go beyond guide creation, you'll need a local setup. This guide walks through installing the required tools, running the site on localhost, and testing your changes before pushing them.
authors:
  - imtherealimagineiq
contributors:
  - imtherealimagineiq
tags:
  - Contributing
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- How to setup a localhost.
- How to make changes to the website.

{{< /callout >}}

# 1: Requirements

While small changes can be made directly in the GitHub web interface, it is highly recommended to use an EditorConfig capable editor such as Notepad++ or VSCode (Preferred) for larger projects and changes.

To preview changes locally, you will need Node.js, NPM, and Hugo version 0.147.8. NPM should come with installing Node.js by default. You will also need to have winget tool as well if you do not already have it as its necessary for installing certain packages, although usually it comes standard with windows OS as part of the app installer.

Node.js has an installer that can be found at: [https://nodejs.org/en](https://nodejs.org/en
)

Hugo can be installed from the Winget package manager directly on the command line for windows. To access the command line: press the windows key, type cmd, and press enter, you should see a Command Prompt window appear.

{{< img src="https://lh3.googleusercontent.com/d/1J1f7jX6bPKN0qgxTewvz1uPcXVrz0rfc" >}}

Inside the command line you will paste the following command: `winget install Hugo.Hugo.Extended` and press enter; if it asks you to agree to all the source agreements terms type `Y` and press enter again.

{{< img src="https://lh3.googleusercontent.com/d/1rTekzU6qpn_oqQoFOQS89zSIZcw2voNT" >}}

If all goes well you should get a message back saying it was successfully installed. That message should look something like this:

{{< img src="https://lh3.googleusercontent.com/d/1rvdQJWml_ZnPeCjCV-j20s_5o-BLf2ce" >}}

Additionally, you should also be sure to install GitHub Desktop along with Git itself. The installer for GitHub Desktop can be found at: [https://desktop.github.com/download/](https://desktop.github.com/download/)

You can install Git through its [website](https://git-scm.com/install/), or through the command line. Here are instructions for that:
- For **Windows**, make sure you have **winget** as described above. Then follow the same instructions to open the command prompt, and type in `winget install -e --id Hugo.Hugo.Extended -v "0.147.8"`.
- For **Mac**, go to Github and install `hugo_extended_0.147.8_darwin-universal.tar.gz`
Open the terminal, run `cd ~/Downloads`, then `tar -xzf hugo_extended_0.147.8_darwin-universal.tar.gz`, after that `sudo mv hugo /opt/homebrew/bin/` (and enter your password)
Finally, you can check with `hugo version` on your terminal and see if it says hugo v0.147.8.
- For **Linux**, follow the instructions on the Git website for your specific distro.

# 2: Instructions

The typical set of steps to contribute to anything hosted on GitHub applies: for the repository, clone the fork, cut a new branch from master, make and commit your changes, and submit a pull request. To create a new branch, run `git switch -c <branch-name> master` in the cloned repository.

The step by step process to open a cloned repository is:

Make a fork of the gdcs2 repository, which can be found [here](https://github.com/GDCreatorSchool/gdcs2/tree/main). The button used to fork should be near the top right.
<span style="color: gray;">*Refer to the image below.*</span>

{{< img src="https://lh3.googleusercontent.com/d/1GNRVlG5tjCV0s2jThHUUshlsXVjEzvpt" >}}

Open up GitHub desktop, the repository should be under **Your repositories**. Make sure it's selected and then press on
**Clone &lt;Username&gt;/gdcs2**. Afterwards a window should appear saying **Clone a repository**; You may change the local path here if you like, but for now everything else should remain the same. Press on clone to continue, this may take a bit of time.

After successfully cloning the repository, a window will appear asking how you will use the fork. Select **To contribute to the parent project** and then press continue.

There are a few options here, but the one we will be paying attention to is **Open the repository in your external editor**. In this case, we will be using VSCode. If you do not see your preferred external editor already enabled, click the options button and select it from there. Afterwards just click the **Open in &lt;Editor&gt;** button to get started.

{{< img src="https://lh3.googleusercontent.com/d/1zMNFtCvWEOXGJnjFGFMKjVrd5SYQi50c" >}}

Once inside the local clone, you can install the local dependencies using the following command: `npm install`.

# 3: Testing Changes

By this point, you should have successfully created your own local fork of the gdcs2 repository. Now its time to actually apply changes to your copy.

To run a locally hosted version of the website with your changes applied, there are a few steps. **You must first locate where the repository is in your pc**. This can be done in multiple ways depending on where you installed it to; but generally it can be found inside of the GitHub folder in documents.

Leave the file manager on the side for now, and open command prompt once again.

In order to properly run the commands needed to host the website, you will need to run command prompt as an administrator. This can be simply done by typing cmd into the searchbar, right clicking on it, and pressing **Run as administrator**. Once inside of command prompt, you need to switch the directory to the same one that the repository is in. All you need to do in order to switch directories is type cd followed by the file directory.

{{< img src="https://lh3.googleusercontent.com/d/1sj6CDt3M-LsH8M2QuXRrm8hPmRi3J1IR" >}}

**Please note that the directory must be copied from inside the file, not the actual file itself**. The command should look something similar to this:

{{< img src="https://lh3.googleusercontent.com/d/1GfG9qsyXOGDOLLM4x9auws3If0ldTPeF" >}}

After you successfully change the directory, you will need to run the following commands in order:

- `npm install`
- `npm run dev`

This should boot up a local copy of the website and give you the link to it.

{{< img src="https://lh3.googleusercontent.com/d/1_gLgJNvyr3WC3wgwoycPZUNkkTUoUprP" >}}

*Please note that if you already have run `npm install` in a given repository, you do not need to do it again and can instead skip straight to `npm run dev` to start the local copy.*
Do be aware that as soon as you close the terminal, it will also stop hosting the link.

# 4: Making a Pull Request

Once you are finished making and adding your changes, you will need to make a pull request in order to get the changes published.

## Comitting to a Branch

Committing is step one when making any pull request, and doing so is quite simple.

Upon opening up GitHub Desktop and you should see your current selected repository. Make sure gdcs2 is selected as your current repository and go to the changes tab if you aren't already there. You should see a list of the files that you have modified in the bar on the left side. That should look like this:

{{< img-grid >}}
{{< img src="https://lh3.googleusercontent.com/d/1SbAmc83YVGUPbya6MRRJKJ0enJ91ATGW" >}}
{{< /img-grid >}}

If you do not see your changes, you may need fetch the origin. (Which is basically just GitHub Desktops version of a refresh.)
To commit the changes:

- Create a new branch, and make sure that everything is moved over. To do this, just press the "Current branch" button near the top, and select "New branch."

- Select your files that you want to submit, add in a brief description in the 2nd to bottom bar, and add a full(er) description on the bottom one, then press "**Commit &lt;number of files&gt; to &lt;branch&gt;.**"

After that is done, a new option should appear in the main area that says "**Publish branch**". After publishing the branch you will get the final option to preview and open the pull request. Clicking on "**Open pull request**" should bring you to the pull request window in your browser. Here, you may double check your title and description, along with submitting the actual request itself.

{{< img src="https://lh3.googleusercontent.com/d/1q7zef3DPXJ4qzkV6OcwLd78opRnKV2cF" >}}

When you are ready, just create the pull request, and that's it!

{{< callout context="caution" title="It may take some time for the changes to be applied as all of the commits must be manually looked over before they get accepted, so do keep that in mind." icon="outline/info-circle" >}}

{{< /callout >}}