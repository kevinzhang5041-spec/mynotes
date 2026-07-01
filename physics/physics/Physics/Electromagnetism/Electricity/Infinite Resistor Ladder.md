![[Pasted image 20241126140652.png]]

**SOLUTION:**
Let $R_{eq}$ be the equivalent resistance of the circuit. We may create an equivalent circuit by replacing the right of BC with a resistor on a rung of the ladder directly to the right of BC. Then, the equivalent resistance satisfies $$R_{eq} = R + \frac{1}{\frac{1}{R} + \frac{1}{R_{eq}}}.$$ Solving yields $R_{eq} = \left( \frac{1+\sqrt5}{2} \right) R$.

**NOTE:**
You can't calculate $R_{eq}$ by considering until the first $n$ rungs from the left, then adding on the two resistors (one on the top, one on the rung) because that would violate the fact that the resistor on the rung is in parallel with what is to the right of it. Therefore, solving for $R_{eq}$ through $$R_{eq} = \frac{1}{\frac{1}{2R} + \frac{1}{R_{eq}}}$$ is invalid (and rather yields a short circuit).

**TAKEAWAY:**
When solving infinite equivalent resistor problems, make sure each resistor maintains its relationship with the rest of the circuit (parallel or series). The first solution does, while the second doesn't.