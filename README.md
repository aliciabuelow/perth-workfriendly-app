# 💻 Work-Friendly Perth

A curated Perth work spot finder, built to help users discover practical, free, and accessible places to work, study, and read around the city.

## Live Demo

https://perth-workfriendly-app.vercel.app/

---

## Overview

Work-Friendly Perth is a responsive React application featuring a curated list of work-friendly spots around Perth metro, including libraries, parks, student spaces, community hubs, cultural centres, and public spaces.

The goal was to create a simple, polished browsing experience around real local information. Users can search by name, suburb, category, or keyword, and can also click categories, suburbs, and tags directly from the cards to quickly refine the list.

Each spot includes practical tags and a short note to help users understand what the location is best suited for - whether that's focused study, casual laptop work, reading, offline planning, or work lunches.

---

## Features

- Curated dataset of work-friendly Perth locations
- Search by name, suburb, category, or keyword
- Clickable category, suburb, and tag buttons for quick filtering
- Conditional clear search button
- Scroll-to-search behavior after filtering
- Return-to-search button for easier browsing and intuitive UX
- Responsive card grid with type-based colour variation
- Practical tags and notes for each spot
- Subtle hover states and card entrance animation
- Striking, consistent visual branding across UI

---

## Tech Stack

- React (Vite)  
- JavaScript  
- CSS3  
- Vercel 

---

## Challenges / Learning

- A big part of building this project was figuring out what kind of information actually makes a spot 'useful' in this context. I didn't want the cards to feel like generic place descriptions, so I spent time **manually refining the notes** to focus on details that would be most relevant and insightful to users.

- The dataset needed more attention than I expected. Because the information is manually curated, I had to do sufficient research, review and assign consistent spot types, tags, and wording, and ensure practical information like addresses and website links were accurate. Small content choices made a noticeable difference to how **polished and trustworthy** the app felt.

- I also worked through several UI decisions where the simplest feature was not always the most useful one. Instead of adding a heavier filter panel, I used clickable categories, suburbs, and tags so users could filter directly from the displayed cards. This **kept the interface lightweight, while still making the app feel interactive and useful**.

- The card design went through a lot of refinement. I experimented with type-based colours, stronger category headers, hover states, and spacing to make the grid easier to scan. This project gave me more practice in **balancing visual personality with clean usability**.

- On the technical side, I **reinforced React patterns** around derived data, passing functions through components, controlled search input, and conditional rendering. I also solved layout issues around responsive cards, anchored footers, a flexible search bar, and scroll-based UI behaviour.

---

## Final Note

Overall, this project helped me practice building a small, focused product around real-world information, with attention to content quality, interaction design, and visual polish.
