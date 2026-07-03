
The **Poisson probability scheme** encodes the probabilities of independent events into a polynomial.

For each independent trial:

- success probability:
$$  
p_i  
$$
- failure probability:
$$  
1-p_i  
$$Create a polynomial:
$$  
(1-p_i)+p_i x  
$$
where:

- constant term = failure
    
- coefficient of $x$ = success
    

---

## Combined Polynomial

For $n$ independent trials:

$$  
P(x)=\prod_{i=1}^{n}((1-p_i)+p_ix)  
$$

When expanded:

$$  
P(x)=a_0+a_1x+a_2x^2+\cdots+a_nx^n  
$$

the coefficient gives the probability:

$$  
a_k=P(\text{exactly }k\text{ successes})  
$$

---

## Example: 3 Students

Student probabilities:

$$  
p_1,p_2,p_3  
$$

Generating function:

$$  
((1-p_1)+p_1x)  
((1-p_2)+p_2x)  
((1-p_3)+p_3x)  
$$

Expansion:

$$  
=a_0+a_1x+a_2x^2+a_3x^3  
$$

Meaning:

$$  
a_0=P(0\text{ pass})  
$$

$$  
a_1=P(1\text{ pass})  
$$

$$  
a_2=P(2\text{ pass})  
$$

$$  
a_3=P(3\text{ pass})  
$$

---

## Equal Probability Case (Binomial)

If every trial has the same probability $p$:

$$  
P(x)=((1-p)+px)^n  
$$

Using the binomial theorem:

$$  
P(X=k)=\binom nk p^k(1-p)^{n-k}  
$$

---

## Finding Probabilities from the Polynomial

### Exactly (k) successes

Take the coefficient of:

$$  
x^k  
$$

---

### No successes

Take the constant term:

$$  
P(X=0)=\prod(1-p_i)  
$$

---

### All successes

Take the highest power:

$$  
P(X=n)=\prod p_i  
$$

---

## Recovering Unknown $p_i$

The roots of

$$  
P(x)=\prod((1-p_i)+p_ix)  
$$

come from

$$  
(1-p_i)+p_ix=0  
$$

so

$$  
x=\frac{p_i-1}{p_i}  
$$

or

$$  
x=1-\frac1{p_i}  
$$

Therefore, if a root is (r_i),

$$  
p_i=\frac1{1-r_i}  
$$

---

## Why It Works

Multiplying polynomials lists every possible combination of successes and failures.

Example:

$$  
(p_1x+1-p_1)(p_2x+1-p_2)  
$$

The term

$$  
p_1p_2x^2  
$$

means both succeed.

The term

$$  
p_1(1-p_2)x  
$$

means first succeeds, second fails.

The exponent of $x$ counts successes.

---

## Key Formulas

$$  
P(x)=\prod_{i=1}^n((1-p_i)+p_ix)  
$$

$$  
[x^k]P(x)=P(X=k)  
$$

$$  
\sum_{k=0}^{n}[x^k]P(x)=1  
$$

$$  
\text{root}=1-\frac1{p_i}  
$$

This method turns probability problems into polynomial algebra.