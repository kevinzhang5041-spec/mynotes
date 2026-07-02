
Bayes' theorem finds the probability of an event after receiving new information.

It reverses conditional probabilities.

---

## Conditional Probability

The probability of $A$ given $B$:

$$  
P(A|B)=\frac{P(A\cap B)}{P(B)}  
$$

where:

- $P(A|B)$ = probability of $A$ after knowing $B$
    
- $P(A\cap B)$ = probability both happen
    
- $P(B)$ = probability of the evidence
    

---

## Bayes Formula

Starting from:

$$  
P(A|B)=\frac{P(A\cap B)}{P(B)}  
$$

and using:

$$  
P(A\cap B)=P(B|A)P(A)  
$$

we get:

$$  
\boxed{  
P(A|B)=\frac{P(B|A)P(A)}{P(B)}  
}  
$$

---

## Meaning of Terms

$$  
P(A|B)  
$$

= **posterior**

Probability of $A$ after seeing $B$

---

$$  
P(B|A)  
$$

= **likelihood**

How likely the evidence is if $A$ is true

---

$$  
P(A)  
$$

= **prior**

Initial probability of $A$

---

$$  
P(B)  
$$

= **evidence**

Total probability of observing $B$

---

## Finding $P(B)$

If $A_1,A_2,...,A_n$ are all possible cases:

$$  
P(B)=\sum_i P(B|A_i)P(A_i)  
$$

So Bayes becomes:

# $$  
P(A_i|B)

\frac{P(B|A_i)P(A_i)}  
{\sum_jP(B|A_j)P(A_j)}  
$$

---

## Example: Medical Test

Suppose:

- Disease probability:
    

$$  
P(D)=0.01  
$$

- Test detects disease:
    

$$  
P(+|D)=0.99  
$$

- False positive rate:
    

$$  
P(+|\bar D)=0.05  
$$

Find:

$$  
P(D|+)  
$$

Using Bayes:

# $$  
P(D|+)

\frac{P(+|D)P(D)}  
{P(+|D)P(D)+P(+|\bar D)P(\bar D)}  
$$

Substitute:

# $$

\frac{0.99(0.01)}  
{0.99(0.01)+0.05(0.99)}  
$$

# $$

\frac{0.0099}{0.0594}  
$$

$$  
\approx0.167  
$$

Even with a positive test, probability of disease is only about $16.7%$.

---

## Odds Form

Bayes can be written as:

# $$  
\text{Posterior odds}

\text{Prior odds}  
\times  
\text{Likelihood ratio}  
$$

where

# $$  
\frac{P(A|B)}{P(\bar A|B)}

\frac{P(A)}{P(\bar A)}  
\cdot  
\frac{P(B|A)}{P(B|\bar A)}  
$$

---

## Independence Check

If $A$ and $B$ are independent:

$$  
P(A|B)=P(A)  
$$

because

$$  
P(B|A)=P(B)  
$$

---

## Common Mistake

Do not confuse:

$$  
P(A|B)  
$$

with

$$  
P(B|A)  
$$

They are usually different.

---

## Key Formula to Memorize

$$  
\boxed{  
P(A|B)=\frac{P(B|A)P(A)}{P(B)}  
}  
$$

Bayes = **update prior belief using new evidence**.