# Phase 1 Refinement — Homepage Experience (Do Not Change the Core Concept)

The current homepage concept is final. Do **not** redesign it or replace the solar system metaphor. Your task is to refine the experience to feel more premium, cinematic, and intentional.

## Goal

Transform the homepage from a collection of planets into an immersive "Choose Your Perspective" experience.

Maintain the existing Three.js scene, camera controls, and overall layout while improving hierarchy, interaction, and storytelling.

---

# 1. Replace Technical Labels

Remove all internal naming such as:

* Personal Journal (Origin) (A)
* Work (Realist) (B)
* Storytelling (Narrative) (C)
* Systems Thinking (D)
* Future (E)

Replace them with simple, memorable names:

* Human
* Builder
* Thinker
* Explorer
* Future

On hover, display a short descriptive sentence below the title.

Examples:

Human
"The experiences that shaped who I am."

Builder
"How I turn complex problems into simple products."

Thinker
"The ideas and mental models behind my decisions."

Explorer
"What inspires me beyond work."

Future
"What I'm learning and building next."

The labels should feel elegant and minimal.

---

# 2. Improve Visual Hierarchy

Currently every planet competes equally.

Create a clear visual hierarchy.

The first thing visitors should notice is the title.

The second should be the currently highlighted planet.

The remaining planets should become secondary.

When no planet is selected:

* all planets have reduced emphasis
* labels remain subtle
* no planet dominates

When hovering a planet:

* increase brightness
* increase subtle glow
* slightly increase scale (3–5%)
* gently slow the rotation
* fade all other planets to approximately 60–70% opacity
* slightly brighten the selected label

The visitor's eye should always know where to focus.

---

# 3. Give Every Planet a Unique Personality

Each planet should communicate its meaning before it is clicked.

Do not replace existing models.

Instead adjust lighting, color grading, atmosphere, rotation speed, glow, and particle effects.

Human

* warm amber tones
* soft atmosphere
* slow calm rotation
* welcoming feeling

Builder

* Earth-like
* subtle grid overlays
* tiny satellites
* clean structured motion

Thinker

* cooler blue tones
* slightly mysterious
* minimal orbit particles
* deeper shadows

Explorer

* energetic
* brighter atmosphere
* small moving comets
* feeling of discovery

Future

* brightest planet
* minimal texture
* clean white glow
* slightly futuristic appearance

Each planet should immediately communicate a different personality while remaining visually consistent.

---

# 4. Replace Instruction-Based Onboarding

Remove any instructional text such as:

Drag to rotate
Scroll to zoom
Click to enter

Do not explain interactions.

Instead guide users through visual feedback.

Homepage copy should become:

Choose a Perspective

Everyone sees a different version of me.
Which one would you like to explore?

Teach interactions naturally.

Examples:

* cursor changes when draggable
* planets subtly react on hover
* camera responds naturally
* interactions feel discoverable

The interface should demonstrate interaction instead of describing it.

---

# Motion Guidelines

Keep motion premium.

Avoid gaming aesthetics.

No exaggerated animations.

Everything should feel:

* calm
* intentional
* cinematic
* Apple-quality
* museum-like

Motion should support curiosity rather than distract from it.

---

# Preserve

Do NOT change:

* Three.js solar system concept
* camera controls
* planet positions
* routing
* overall architecture

This is a refinement pass, not a redesign.

The final feeling should be:

"I am exploring different perspectives of one person, not clicking through website pages."
