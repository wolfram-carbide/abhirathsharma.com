---
title: "It's easier to rate 5-on-5 than 10-on-10"
date: 2026-04-25
description: "Obsessing over ratings and scales in Greece"
tags: ["travel", "behaviour"]
size: L
---

### Obsessing about ratings in Greece

Mykonos, the party island, was deserted. Most of the shops were closed, the sea too cold for a swim and its roads empty. But I had a great time - traffic wasn't a problem, the wind was calming and the solace, much needed. The hotel was great too - we had a view of the famous windmills from the room, the hotel managers were very friendly. No complaints. A few days later, it was time to rate the property. I was wondering how to rate it - 8 felt like a downgrade, 10 felt excessive so I settled on 9.

![Mykonos-hotel](/images/posts/Mykonos-hotel-wide.png)
*This isn't a great photo, I know. There are 2 reasons for that: 1. I didn't take too many photos - which is something I am happy about. 2. Mykonos is less pretty than other Greek islands. If you have to choose, go to Naxos - my favourite by a margin.**

A few days later, it was time to rate our Airbnb in Athens. The host was super nice, the neighbourhood was excellent, and the apartment had a direct view of the Parthenon. It also made me feel like I was visiting a version of Udaipur. It was an obvious 5 stars.

![Athens-hotel](/images/posts/Athens-airbnb-view.png)
*Athens looks like Udaipur without its lakes

Now had the Mykonos property been an Airbnb, I would have rated it 5 stars. And had the Athens property been on Booking.com, I would have hesitated giving it 10-on-10. It felt too perfect a score. I would have settled on a 9.5.

When you are rating an Airbnb, you are rating the host as much as you are the property. It is "Athina's apartment with a sea view" on Airbnb whereas it is "Sea view room in an apartment hosted by Athina" on Booking. So you naturally tend to be polite, and you let a few things slip by. If you have been inconvenienced, you give it 4 stars, and start with the good things before quietly slipping in the thing that irritated you the most. Even if you want to be honest, you still give it 4 stars.

Look at these reviews. Do you think they enjoyed their stay at an Airbnb rated 4.68 (if scaled linearly, this would be ~9.4/10 on Booking.com)?

![Airbnb-review-Athens](/images/posts/Airbnb-review-Athens.png)

And we have all seen this and experienced it: you would be hesitant to book an Airbnb in Athens that is rated 4.2, but you would not hesitate to book a room on Booking.com if it were 8.4, which is 4.2 x 2 (the Airbnb rating linearly scaled). It's not uncommon to find hundreds of Airbnbs rated 4.8 and above, which would be an equivalent of 9.6 on Booking - something that would be truly exceptional on that platform.

Here's an apartment in Athens that is 4.79, but has been classified as being in the bottom 10% of eligible listings based on ratings, reviews and reliability. Three out of the 4 recent reviewers gave it 5 stars. It's not obvious that the apartment is poorly located, which is probably the major factor behind Airbnb's warning.

![Airbnb-review-callout](/images/posts/Airbnb-review-callout.png)

And here is what the overall distribution looks like across all Athens listings. Nearly everything is north of 4.5, and a median of 4.87. The scale is a 0.5-point range dressed up as a 5-point one. Airbnb's 2025 report said guest favourites on average are at 4.92. The same report mentions that 4.75 is the average listing rating. So the average becomes a guest favourite in a gap of 0.17 points on the scale. Let that sink in!

![Athens-histogram](/images/posts/athens_rating_distribution_histogram.svg)
*Source: https://insideairbnb.com/get-the-data/ 

There's another related problem here. When you tell someone that one apartment scored 5% higher than another, you are reporting something technically true and very very misleading. It's a bit like when scientists said we needed to keep global warming to 1.5 degrees Celsius - a number so small it sounds like a rounding error, but it's actually a civilisational threshold. The percentage gap on a compressed scale tells you nothing about the magnitude underneath it.

I would love for Airbnb to do a more interesting experiment. What if they send someone to all Airbnbs and ask them to compare 2 of them at a time with the question: how many times better was one than the other? Not 4.79 versus 4.99. Just - was this one twice as good? Or 5 times as good? Or 20%? The actual quality delta in mathematical vs. perceived ratings might look like this -->

![Perceived-rating-Airbnb](/images/posts/Perceived-rating-Airbnb.png)
*The magic here is - as we get close to the 4.7s, the % difference in ratings reduces but the perceived rating multiplier goes up. Perceived rating multiplier is illustrative

### To sum up

1. A rating out of 5 doesn't scale linearly to a rating out of 10. 4/5 is not the same as 8/10 - it is probably 5-6/10.
2. Rating hosts instead of properties causes rating inflation on Airbnb. In some cases, Airbnb has to intervene to make sure people don't get deceived by the rating number.
3. The difference between a 4.79 and a 4.99 is not just 0.2 points or 5%. The 4.99 apartment is likely 2-3 times better than the one rated 4.79. 

### Appendix - The link between IMDb and Airbnb ratings

The last point got me thinking about the IMDb ratings. They behave in a very similar fashion. A movie rated 9 or so is exponentially better than a movie rated 7 or so. So I conducted an experiment, and rated 114 movie pairs to find out my perceived rating multipliers. You can try it out here too: https://true-imdb-scale.lovable.app/. Here are my results: 

![Perceived-rating-IMDb](/images/posts/Perceived-rating-IMDb.png)

Another post on the IMDb ratings coming hopefully soon. Stay tuned!
