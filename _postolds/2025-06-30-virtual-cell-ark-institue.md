---
layout: post
title: "🚀 Arc’s Virtual Cell Challenge: Accelerating Drug Discovery with AI Models"
date: 2025-06-29 16:40:16
description: march & april, looking forward to summer
tags: "virtual cell"
categories: sample-posts
---

🧬 What if we could predict how cells change state under different conditions, and discover drugs to shift “diseased” cells back to “healthy” ones? The Arc Institute is taking a major step toward this vision with the launch of the inaugural Virtual Cell Challenge, a public competition offering $100,000+ in prizes for the best machine learning models predicting cellular responses to genetic perturbations.

#### 🧪 Why is this hard?
“Cells are living dynamic systems,” explains Yusuf Roohani, PhD, ML group lead at Arc. “They’re constantly in flux, messy, and experiment-dependent.”
Virtual cell models must account for cell type, genetic background, and context while navigating technical noise and inconsistent reproducibility across datasets—challenges that have slowed progress and made benchmarking difficult.

#### 🏆 A new benchmark for the community
Modeled after CASP (which transformed protein structure prediction and paved the way for AlphaFold), Arc’s challenge—described in a new Cell commentary led by Roohani—aims to align the community around standardized evaluation for virtual cells. Sponsored by Nvidia, 10x Genomics, and Ultima Genomics, the competition invites academia, biotech, and independent researchers to participate.

🔬 For the competition, Arc generated a new single-cell transcriptomics dataset of 300,000 human embryonic stem cells with 300 genetic perturbations, rolled out in phases for fine-tuning, validation, and testing. Models will be evaluated on:

  1️⃣ Predicting differentially expressed genes\\
  2️⃣ Discriminating perturbation effects\\
  3️⃣ General error in expression count deviation

### STATE: virtual cell model from Arc Institute
Competitors will initially face off against Arc’s own STATE model, released last week for non-commercial use. Composed of:

🔹 State Transition (ST) module: Uses data from 100M+ perturbed cells across 70 contexts, leveraging a bi-directional transformer to predict perturbation effects across cell collections.
🔹 State Embedding (SE) module: Trained on 167M human cells to learn robust gene expression variation, optimized for detecting biological perturbations while handling technical noise.

The STATE model has shown over 50% improvement in perturbation effect discrimination and 2x accuracy in identifying differentially expressed genes compared to existing models.

#### 🩺 Why this matters:
If successful, virtual cell models could transform drug discovery and precision medicine, enabling the design of interventions with fewer off-target effects and higher clinical success rates.

For those interested, registration is open now, with final evaluations happening in late October and winners revealed in December. This could be the next frontier in biology x AI—and your team could help build it. 🌱