# Contact form: evidence log

Recorded for Magnus/Mark review. Facts only; each line says who established it.

## Established (reported by Mark)
- The contact form (Formspree endpoint `https://formspree.io/f/xbglydjo`) was previously tested successfully.
- That test delivered to `information@civicfin.co.uk`, an alias of `mark@civicfin.co.uk`.
- So the endpoint and destination mailbox have worked before. Neither is to be changed without an established reason.

## Not a cause / not relevant
- Old Google Workspace/Squarespace billing history: not treated as a cause.
- Absence of Formspree mail in Mark's personal Gmail: not evidence either way. No further personal Gmail investigation is needed.

## Open: fresh end-to-end check on the CURRENT live site (main, not this branch)
Pending. To be recorded here once done:
1. Does the message arrive (CivicFin inbox / spam)?
2. What does the browser show after submission?
3. If it does not arrive: Formspree's record of that specific submission.

## Branch status
Unmerged. Changes cover the thanks page, success/failure handling and duplicate-submit protection only.
