---
slug: zap-beta-v0.0.2
title: Zap (Beta) v0.0.2
authors: [madebyaremu]
---

Well, hello again! 👋 Victor here 😍

It's been a month and a few days since the last release. Today we have a new beta release.

The update is packed with new features, UI improvements, and bug fixes.

[Click here to download Zap (Beta) v0.0.2.](https://victoraremu.gumroad.com/l/zap)

If you have the previous beta version installed on your mac, delete it and revoke its accessibility permission at system _preferences > security > privacy > accessibility_. Then download and install the new Zap (Beta) v0.0.2.

## Now to the updates:

We have updated our [landing page, headline, and tagline!](https://usezap.sh/) Please have a look, and join our Discord channel, we want your feedback.

### ✨ New feature: Cmd + Tab

Press **Cmd + Tab** to toggle Zap dock window. In this update, by default, Zap now replace your macOS cmd + tab app switcher.

If you want to keep using your native app switcher, you can turn off this behavior at the Zap preferences window.

![zap preferences](https://public-files.gumroad.com/pui79ql5ox95hm411bluq3pmu7np)

### 💅 UI improvements:

We have made some new UI improvements.

- Change the + icon at the dock to a plan-rounded rectangle.
- The app library now scrolls under the Zap dock. We added a nice backdrop filter to spice the look.
- Update the active and running apps indicator shape from a rectangle to a circle.

![Zap demo](https://public-files.gumroad.com/xlutab8vx8nvmpqgb8muo3yxm2no)

### ✨ New feature: Zap now ships its own toast!

Using the native macOS notification to alert you about Zap actions works but it can get annoying as these notifications pile up quickly and play sound. We have built a new toast system to easily alert you! It's silent, sleek, and unobtrusive.

![zap toast](https://public-files.gumroad.com/yltwyp9k0ajt7ac69t26spw3k2lw)

### ✨ New feature: Normal mode

When in normal mode, Zap is able to grab your keyboard inputs as well as your system's general shortcuts and then remaps them for window management purposes or any other user-defined commands.

Think of normal mode as a mode that opens up a new layer of shortcuts for your computer where you can bind new shortcuts, and remap existing shortcuts to different actions.

To enter normal mode, press **Cmd + Esc**. This takes you into normal mode. You'll receive a toast alert that you are in normal mode. The Zap menu bar icon will also change to indicate normal mode.

![zap insert mode](https://public-files.gumroad.com/iufrvfhwghfux1x82s5rhsodcmi1)

_alt: the default Zap menubar icon._

![zap normal mode](https://public-files.gumroad.com/vr570kb11s1yc46shkyvc7536axw)

_alt: the Zap menubar icon changed to indicate that you're in normal mode._

![now in normal mode](https://public-files.gumroad.com/mx99ho4wf7n80nr50c7fsg4ygfe5)

_alt: Zap's toast will alert you when you enter normal mode._

![left normal mode](https://public-files.gumroad.com/c11f8ib5ozgc9gj4vwat8bo2thnt)

_alt: press escape to exit zap's normal mode, you'll get a toast message once you exit the normal mode._

When in Zap's normal mode, you'll notice regular typing does not work. This is because each key on your keyboard is now been handled by Zap so they now serve another purpose when in normal mode.

In this beta update, we have added a few window management shortcuts that you can use while in normal mode.

Focus on any window with your cursor (A window might already be focused when you enter the normal mode).

While in normal mode and a window is focused, press the key:

- **-** to minimize a window
- **=** to maximize a window
- **-** to make a window enter fullscreen
- **s** to show window
- **h** to hide window
- **0** to close window
  These are the few window management shortcuts that we've added in this beta release. In future updates, we will add more window management shortcuts and make the key bindings similar to Vim's ergonomic key bindings.

### ✨ New feature: Mark and recall window

A **mark** allows you to record your current window so you can return to it later. There is no visible indication of when marks are set, however, a toast message will inform you that the window was marked.

Each window mark is identified by lowercase letters (a-z), these identifiers are known as tags. You can only mark a window when in Zap's normal mode.

#### Setting window marks

To mark a window:

- Enter Zap's normal mode. Press **Cmd + Esc**
- Focus on a window, (you might have focused on a window before entering the normal mode, then you might skip this step). You can choose to focus on a different window.
- press _m_, this tells Zap that you want to mark your focused window.
- then, press a mark identifier, any key **(a-z)**.
- A toast message will inform you that your "window" was marked with a "x" tag.
- You are done!
- You can focus on another window and repeat the process. This time use a different tag, otherwise, Zap will replace an old window marked with the same tag with the new window.
- You can press Esc, to exit the normal mode!

#### Using marks

To recall a marked window, enter normal mode, press apostrophe (') followed by a letter (tag).

To recall a marked window:

- Enter Zap's normal mode.
- Press apostrophe (').
- Press a letter (tag) you've used to mark a window earlier.
- If the mark exists, the marked window will be focused and brought to the top!
- You can press Esc, to exit the normal mode!

To better understand how to use this feature watch the tutorial video [https://youtu.be/artn2oSb9FA](https://youtu.be/artn2oSb9FA)

## 🥾🐞 Bug fixes

We squashed some bugs and made some performance improvements to make Zap better and faster!

### 🗑 Remove autofocus next window

Oops! We remove the autofocus next window feature in this beta release. This was done so that we can spend the time it takes to maintain and polish this feature on the cool updates we have today.

And that's about it for this beta release! 😉

Hey, you, yes you! I'm glad you made it here. One more thing, [we want to hear from you on how to improve Zap](https://discord.gg/ywXtvqtb). T for thanks. 🤝

Keep zapping! 🔫

_-_ Victor
