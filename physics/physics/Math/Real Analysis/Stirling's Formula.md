Stirling's formula is one of the most important asymptotic approximations in analysis and combinatorics. It estimates factorials for large $n$.

---

#### Statement

As $n\to\infty$,

$$  
n!\sim\sqrt{2\pi n}\left(\frac{n}{e}\right)^n.  
$$

The notation

$$  
a_n\sim b_n  
$$

means

$$  
\lim_{n\to\infty}\frac{a_n}{b_n}=1.  
$$

Thus,

$$  
\lim_{n\to\infty}  
\frac{n!}  
{\sqrt{2\pi n}(n/e)^n}  
=1.  
$$

---

#### More Accurate Version

A stronger approximation is

# $$  
n!

\sqrt{2\pi n}  
\left(\frac{n}{e}\right)^n  
\left(1+\frac1{12n}+O\left(\frac1{n^2}\right)\right).  
$$

Even more terms are

# $$  
n!

\sqrt{2\pi n}  
\left(\frac{n}{e}\right)^n  
\left(  
1+\frac1{12n}  
+\frac1{288n^2}  
-\frac{139}{51840n^3}  
+\cdots  
\right).  
$$

---

#### Equivalent Forms

Taking logarithms,

# $$  
\ln(n!)

## n\ln n

n  
+  
\frac12\ln(2\pi n)  
+  
o(1).  
$$

Equivalently,

# $$  
\ln(n!)

## n\ln n

n  
+  
O(\ln n).  
$$

---

#### Intuition

Since

# $$  
n!

1\cdot2\cdots n,  
$$

taking logarithms gives

# $$  
\ln(n!)

\sum_{k=1}^n\ln k.  
$$

This sum is approximately the integral

# $$  
\int_1^n\ln x,dx

n\ln n-n+1,  
$$

which explains the dominant factor

$$  
\left(\frac ne\right)^n.  
$$

The factor

$$  
\sqrt{2\pi n}  
$$

comes from a more refined error analysis (Euler–Maclaurin formula or Laplace's method).

---

#### Useful Limits

From Stirling,

$$  
(n!)^{1/n}  
\sim  
\frac ne.  
$$

Hence

# $$  
\lim_{n\to\infty}  
\frac{(n!)^{1/n}}n

\frac1e.  
$$

Also,

# $$  
\lim_{n\to\infty}  
\frac{n!}{(n/e)^n\sqrt n}

\sqrt{2\pi}.  
$$

---

#### Central Binomial Coefficient

Applying Stirling,

# $$  
\binom{2n}{n}

\frac{(2n)!}{(n!)^2}  
\sim  
\frac{4^n}{\sqrt{\pi n}}.  
$$

This estimate appears frequently in combinatorics and power series.

---

#### Binomial Coefficients

For fixed $k$,

$$  
\binom{n}{k}  
\sim  
\frac{n^k}{k!}.  
$$

More generally, if $0<p<1$,

$$  
\binom{n}{pn}  
\sim  
\frac{1}{\sqrt{2\pi np(1-p)}}  
\cdot  
\frac1{p^{pn}(1-p)^{(1-p)n}}.  
$$

---

#### Catalan Numbers

The Catalan numbers satisfy

# $$  
C_n

\frac1{n+1}\binom{2n}{n}.  
$$

Using Stirling,

$$  
C_n  
\sim  
\frac{4^n}{\sqrt{\pi}n^{3/2}}.  
$$

---

#### Ratio Estimates

Stirling implies

$$  
\frac{(n+1)!}{n!}  
=n+1.  
$$

More generally,

$$  
\frac{(n+k)!}{n!}  
\sim  
n^k  
\qquad(k\text{ fixed}).  
$$

Also,

$$  
\frac{n!}{(n-k)!}  
\sim  
n^k.  
$$

---

#### Gamma Function

Since

$$  
\Gamma(n+1)=n!,  
$$

Stirling generalizes to

$$  
\Gamma(x)  
\sim  
\sqrt{2\pi},  
x^{x-\frac12}e^{-x},  
\qquad x\to\infty.  
$$

---

#### Common Applications

- Estimating factorials.
    
- Computing limits involving $n!$.
    
- Estimating binomial coefficients.
    
- Approximating Catalan numbers.
    
- Probability (normal approximation to the binomial distribution).
    
- Analysis of algorithms.
    
- Asymptotic expansions.
    
- Radius of convergence problems.
    

---

#### Standard Limits Using Stirling

# $$  
\lim_{n\to\infty}  
\frac{(n!)^{1/n}}n

\frac1e.  
$$

$$  
\lim_{n\to\infty}  
\frac{n!}{n^n}  
=0.  
$$

# $$  
\lim_{n\to\infty}  
\frac{n^n}{e^nn!}

\frac1{\sqrt{2\pi n}}  
\to0.  
$$

$$  
\lim_{n\to\infty}  
\frac{\binom{2n}{n}}{4^n}  
=0.  
$$

More precisely,

$$  
\frac{\binom{2n}{n}}{4^n}  
\sim  
\frac1{\sqrt{\pi n}}.  
$$

---

#### Frequently Used Consequences

For fixed constants $a,b$,

$$  
\frac{(n+a)!}{(n+b)!}  
\sim  
n^{a-b}.  
$$

If

$$  
a_n=(n!)^\alpha,  
$$

then

$$  
a_n  
\sim  
(2\pi n)^{\alpha/2}  
\left(\frac ne\right)^{\alpha n}.  
$$

---

#### Things to Remember

- The most important formula is
    

$$  
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n.  
$$

- Taking logarithms converts products into sums.
    
- Stirling is most useful when factorials appear in limits, asymptotics, binomial coefficients, Catalan numbers, or probability.
    
- When simplifying expressions with factorials, first apply Stirling to each factorial, then cancel common factors before taking limits.