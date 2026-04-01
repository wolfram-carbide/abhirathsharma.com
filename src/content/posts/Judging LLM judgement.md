---
title: "Judging LLM judgement"
description: "Gemini is naive, Claude isn't"
date: 2026-03-31
tags:
    - AI
    - LLM
    - Tech
size: L
---

In my early days of consulting, I had quoted the annual report to answer my case team's questions. The annual report painted a rosy picture of the company's future earnings, and tried to hide its shortcomings. The associate partner pulled me aside. He asked me to use an analyst report instead of the annual report. "The analysts would do their research and paint a more skeptical, a more real picture" - he said. What he really wanted to say was "Use their judgement, till you develop yours". This was 2017. Almost a decade later, as LLMs have become better at ingesting large reports, judgment has become more important.

I got a taste of judgement across LLMs when I was investigating the effects of chai on headaches. Gemini convinced me that my ginger chai was the elixir of life, while Claude told me clearly that this was all pop science BS. Some screenshots below: 

![LLM-judge-1](/images/posts/LLM-judge-1.png)
*Gemini decided I was Walter White.* 

![LLM-judge-2](/images/posts/LLM-judge-2.png)
*I then asked Claude the same question. Different experience.*

I wanted to do assess this further. So, I pretended for a Sunday evening that I am part of a frontier research lab and performed a small test. I asked Claude, Perplexity, Gemini and ChatGPT (Free version, because I stopped paying for it^) the same question, and then rated them on on 1) Research (how good was the research), 2) judgement (How did it judge the info it researched) and 3) Presentation (How crisply did it present the info?) on a scale of 1 to 10. 

The question was: *Has Grammarly been able to weather the AI storm, and come out well positioned? Or has it been affected in a material way?*

Short answer - yes. Even though AI hasn't killed the company, it has pushed the company into the "growth via product acquisition" territory. Grammarly now owns Coda and Superhuman. I am sure these make the narrative of a "productivity suite" easier to sell to investors but it might take a LOT of work to get this one right. The customer segments and their jobs-to-be-done are different, the products are different, and the people behind the product are different too. It's not surprising that only 20-30% of such consolidations in B2B SaaS are successful. The legendary Slack and Salesforce integration is yet to yield the returns people expected.

Coming back to the LLMs, this is how they responded to the question:

![LLM-judge-3](/images/posts/LLM-judge-3.png)
![LLM-judge-4](/images/posts/LLM-judge-4.png)

From both examples, it is pretty clear that Anthropic does a better job at judging information. It is better at not accepting things at face value. I like its thoughtfulness, its judgment, and its wisdom. And, I am not alone in this. It's not uncommon to hear new Claude converts (or Plebians) say "Claude's answers are generally better" or "I wish I had starting using Claude sooner". 

In "The Intelligence Trap", David Robson argues that wisdom is a better predictor of success than raw IQ. I think something similar is true here. Notwithstanding the rate limits, Claude seems like a wiser bot to deal with despite underperming ChatGPT in some benchmarks (GDPVal). Standard LLM benchmarks (Humanity's last exam, GDPval, SWE-bench verified etc.) all filter for the seemingly smart student. Not the wise one. Maybe they should.


:::aside

^ This has become such a strong anti-signal - "Oh, I don't use ChatGPT anymore". I have annoyed more than a few people with this. 
