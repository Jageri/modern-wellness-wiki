# Modern Wellness Wiki

[中文](README.md)

An evidence-based knowledge base on all-cause mortality.

---

## Why We Built This

There's too much information online about "how to live longer" — wellness influencers, supplement ads, clickbait headlines cherry-picking study results, contradictory dietary advice. It's nearly impossible for ordinary people to tell real evidence from noise.

We wanted a longevity guide that **anyone can understand and no expert can poke holes in**.

### Core Principle

**All information comes from authoritative research, with sources cited.** This encyclopedia does not fabricate, speculate, or "reasonably extrapolate." Every number, every conclusion can be traced back to a specific peer-reviewed paper. When there is no reliable evidence, we clearly state "insufficient evidence" or "no conclusive finding" — which is itself an accurate conclusion.

## Goals

- **Cover all factors that significantly affect all-cause mortality** — diet, exercise, sleep, environment, psychology, medicine, supplements
- **Every entry withstands scrutiny** — source quality, contradictory evidence, conflicts of interest, population applicability — audited item by item
- **Honest about uncertainty** — "no conclusive finding" is a conclusion too

## How to Read

### Browse by Category

The `wiki_en/` directory is organized by topic:

| Directory | Content |
|-----------|---------|
| Exercise/ | Physical activity, daily movement, cardiorespiratory fitness |
| Medical/ | Chronic disease markers, medications, screening, vaccines |
| Diet/ | Food, nutrition, beverages, supplements, dietary patterns |
| Environment/ | Air, noise, temperature, social environment |
| Body/ | Physical state: obesity, muscle, oral health, senses |
| Mind/ | Emotions, social connection, sense of purpose |
| Sleep/ | Sleep duration, quality, circadian rhythm |

Subdirectories (e.g., `Diet/Supplements/`, `Exercise/Cardio/`) group multiple entries on the same topic.

### Sort by Mortality Impact

Each filename is prefixed with its mortality impact. Sort by name in your file manager to see at a glance:

- `+100~300% Smoking.md` → Most harmful
- `-47% Racket Sports.md` → Most beneficial
- `~ Vitamin D.md` → Effect uncertain

### Entry Structure

Each entry contains:
- **Mortality Impact**: Specific effect on all-cause mortality (number or "uncertain")
- **Evidence Level**: 1-5 stars, reflecting evidence strength
- **Actionability**: What you can do about it
- **Conclusion**: One-sentence core takeaway
- **Evidence**: Key studies supporting the conclusion
- **Do**: Specific action items
- **References**: Links to original papers

## How We Ensure Quality

The above principles are enforced through the following mechanisms:

### Completeness Audit

Systematically identify missing entries by cross-referencing 7+ authoritative sources (HowToLiveLonger, Blue Zones, Peter Attia's *Outlive*, GBD 2019, WHO, Examine.com, Huberman Lab, etc.).

- Audit standards: `条目完整性审计标准.md`
- Audit records: `完整性审计记录/`

### Authority Audit

Every entry must pass 10 checks:

1. **Source Quality** — Peer-reviewed journal? Large RCT/meta-analysis?
2. **Conclusion Consistency** — Consistent with mainstream literature?
3. **Contradictory Evidence** — Are there equally rigorous opposing studies?
4. **Effect Size Accuracy** — Relative vs. absolute risk confusion?
5. **Conflict of Interest** — Funded by interested parties?
6. **Causation vs. Correlation** — Is correlation being stated as causation?
7. **Population Applicability** — Age, sex, ethnicity, health status of study populations
8. **Study Limitations** — Bias, sample size, follow-up duration disclosed?
9. **Publication Bias** — Are negative results being ignored?
10. **Currency** — Are there newer studies that supersede the cited evidence?

- Audit standards: `条目权威性审计标准.md`
- Audit records: `权威性审计记录/`

### Entry Writing Standards

Format, evidence requirements, and uncertainty labeling conventions: `条目撰写标准.md`.

## Contributing

Issues and PRs are welcome. New entries must pass both completeness and authority audits before merging.

## Acknowledgments

This project was inspired by [geekan/HowToLiveLonger](https://github.com/geekan/HowToLiveLonger) (Programmer's Guide to Living Longer), expanded into a systematic longevity knowledge base.

## License

[CC BY-SA 4.0](LICENSE)
