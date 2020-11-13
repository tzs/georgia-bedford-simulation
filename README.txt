This is a web-based simple simulation of an election in the US state of
Georgia. You can specify the voter turnout, and what percent of the vote
goes to a candidate.

You can run it here:

    https://tzs.github.io/georgia-benford-simulation/

This turnout and vote percent will be applied to each Georgia county, to
give the total votes for the candidate in that vote based on the number
of registered voters in that county.

The distribution of the first digits of the county vote totals is displayed
in a bar graph.

The purpose for this is to let you see how far this differs from the first
digit distribution that you might naively expect from Benford's Law, and
to see how much the distribution changes when you make small changes in
the voter turnout or in the percent the candidate gets.

If you don't know what Benford's Law is, this might help:

    https://en.wikipedia.org/wiki/Benford%27s_law

Benford's Law only applies to data sets that meet certain criteria, and
the underlying distribution of population among Georgia counties does not
meet that criteria, and neither does things that are closely coupled to
that such as the distribution of registered voters among the counties.

There have been some widely circulated claims of election fraud in Georgia
based on the county totals in the actual election not followed Benford's
Law. By playing around with the parameters of the simulated election here,
you may gain a better understanding of why those claims are completely
bogus.

A more realistic election simulation would take into account that candidates
that do the best in small population counties tend to do the worst in large
population counties, and vice versa, and would also take into account that
voter turnout is not uniform.

That would not yeild simulated elections that follow Benford's Law. Just as
with the simple simulation, they would vary widely as you varied the exact
turnout and vote percentages.

Note: this was just a quick hack, written over maybe 3 hours. If you'd like
to see a more realistic simulation or better presentation or more data sources
feel free to fork this. I'm not really an HTML/JS/CSS guy, so you'd be best
off just starting from scratch.
