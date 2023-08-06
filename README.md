# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/sgarcialaguna/fm-product-preview-card)
- Live Site URL: [Add live site URL here](https://sgarcialaguna.github.io/fm-product-preview-card/)

## My process

### Built with

- UnoCSS (Tailwind-like)
- CSS Grid
- Vite

### What I learned

I was pleasantly surprised that Grid got the spacing almost perfect. Initially I used flex and manually spaced items. Just using Grid let me remove all the individual spacings between items. That approach will rarely be pixel perfect, but that's not generally something I'm super interested in. Actually I'm trying to get away from explicity setting sizes and spacing on everything unless it is actually needed.

### Continued development

I'm not super sure about the active color on the button as it doesn't appear in the style guide. I just halved the luminance value and rounded down and that seems pretty close.

I don't usually use UnoCSS / TailwindCSS, but I'm liking it quite a bit for these small, self-contained challenges as it lets me quickly put something together. Occasionally names aren't immediately obvious (e.g. leading instead of line-height, but that isn't a huge issue.)

It does get somewhat unwieldy once you have a lot of properties, so I'm not ready to become a Tailwind evangelist quite yet.
