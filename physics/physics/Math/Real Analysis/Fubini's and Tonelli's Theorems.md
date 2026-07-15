These are the fundamental theorems that justify:

- Changing the order of integration.
    
- Interchanging infinite sums and integrals.
    

Although they are often mentioned together, **Tonelli's theorem is stronger for nonnegative functions**, while **Fubini's theorem applies to absolutely integrable functions.**

---

#### Tonelli's Theorem

##### Statement

Let

$$  
f:X\times Y\rightarrow[0,\infty]  
$$

be a measurable **nonnegative** function.

Then

# $$  
\int_{X\times Y}f(x,y),d(x,y)

# \int_X\left(\int_Yf(x,y),dy\right)dx

\int_Y\left(\int_Xf(x,y),dx\right)dy.  
$$

Thus, **the order of integration may always be exchanged for nonnegative functions**, even if the integral is infinite.

---

##### Interpretation

If

$$  
f(x,y)\ge0,  
$$

then

# $$  
\boxed{  
\int!!\int f

# \int\left(\int f\right)

\int\left(\int f\right).  
}  
$$

No assumption of absolute integrability is needed.

---

##### Infinite Series Version

Suppose

$$  
f_n(x)\ge0.  
$$

Then

# $$  
\int\sum_{n=0}^{\infty}f_n(x),dx

\sum_{n=0}^{\infty}\int f_n(x),dx.  
$$

This is one of the most common uses of Tonelli's theorem.

---

#### Fubini's Theorem

##### Statement

Let

$$  
f:X\times Y\rightarrow\mathbb R  
$$

be measurable.

If

$$  
\int_{X\times Y}|f(x,y)|,d(x,y)<\infty,  
$$

then

# $$  
\int_{X\times Y}f

# \int_X\left(\int_Yf\right)

\int_Y\left(\int_Xf\right).  
$$

Every iterated integral exists and all are equal.

---

##### Absolute Integrability

The hypothesis is

$$  
\boxed{  
\int|f|<\infty.  
}  
$$

This is called **absolute integrability**.

It is stronger than merely requiring

$$  
\int f  
$$

to exist.

---

#### Why Absolute Integrability Matters

Conditional convergence is dangerous.

For example,

$$  
\sum_{m,n}a_{mn}  
$$

may converge in one ordering but not another.

Absolute convergence,

$$  
\sum|a_{mn}|<\infty,  
$$

guarantees that every rearrangement has the same value.

Fubini is the integral analogue of this fact.

---

#### Series Version of Fubini

Suppose

$$  
f(x)=\sum_{n=0}^{\infty}f_n(x),  
$$

and

$$  
\sum_{n=0}^{\infty}  
\int|f_n(x)|,dx  
<  
\infty.  
$$

Then

# $$  
\boxed{  
\int\sum_{n=0}^{\infty}f_n

\sum_{n=0}^{\infty}\int f_n.  
}  
$$

This is exactly the theorem used when integrating power series.

---

#### Example: Gaussian Integral

Consider

$$  
\int_{-\infty}^{\infty}  
e^{-x^2}\cos(ax),dx.  
$$

Expand

# $$  
\cos(ax)

\sum_{n=0}^{\infty}  
\frac{(-1)^na^{2n}x^{2n}}{(2n)!}.  
$$

Then

# $$  
f_n(x)

e^{-x^2}  
\frac{(-1)^na^{2n}x^{2n}}{(2n)!}.  
$$

Compute

$$  
\sum_{n=0}^{\infty}  
\int|f_n(x)|,dx.  
$$

Since

# $$  
\int_{-\infty}^{\infty}  
e^{-x^2}x^{2n},dx

\frac{(2n)!}{4^nn!}\sqrt{\pi},  
$$

we obtain

# $$  
\sum_{n=0}^{\infty}  
\int|f_n|

# \sqrt{\pi}  
\sum_{n=0}^{\infty}  
\frac{\left(a^2/4\right)^n}{n!}

\sqrt{\pi}e^{a^2/4}  
<  
\infty.  
$$

Therefore,

# $$  
\boxed{  
\int\sum f_n

\sum\int f_n.  
}  
$$

---

#### Relationship Between Tonelli and Fubini

|Tonelli|Fubini|
|---|---|
|Requires $f\ge0$|Allows positive and negative values|
|No integrability assumption|Requires $\int|
|Integral may be infinite|Integral is finite|
|Guarantees order can be exchanged|Guarantees order can be exchanged|

---

#### Comparison with Dominated Convergence

Dominated Convergence is another common way to justify exchanging limits and integrals.

If

$$  
f_n(x)\to f(x)  
$$

pointwise and

$$  
|f_n(x)|\le g(x)  
$$

for some integrable function

$$  
g\in L^1,  
$$

then

# $$  
\boxed{  
\lim_{n\to\infty}\int f_n

\int\lim_{n\to\infty}f_n.  
}  
$$

Many proofs using power series can be justified either by:

- Fubini (absolute convergence of the series of integrals), or
    
- Dominated Convergence (finding an integrable dominating function).
    

---

#### Choosing the Right Theorem

|Situation|Theorem|
|---|---|
|Function is nonnegative|Tonelli|
|Function changes sign but $\int|f|
|Interchanging a limit and an integral|Dominated Convergence|
|Increasing sequence of nonnegative functions|Monotone Convergence|

---

#### Key Facts to Remember

$$  
\boxed{\text{Tonelli: } f\ge0}  
$$

$$  
\boxed{\text{Fubini: } \int|f|<\infty}  
$$

# $$  
\boxed{  
\sum\int|f_n|<\infty  
\Longrightarrow  
\int\sum f_n

\sum\int f_n.  
}  
$$

A useful mnemonic is:

- **Tonelli = Nonnegative** ("T" for "Totally nonnegative")
    
- **Fubini = Finite absolute integral**
    
- **Dominated Convergence = Dominating function controls the limit**