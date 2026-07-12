#### Motivation

Mahler's theorem provides a powerful criterion for proving that certain infinite series define **transcendental numbers**. It applies to numbers whose digits (or nonzero terms) occur at very rapidly growing positions.

For example,

$$
\sum_{n=0}^{\infty}\frac{1}{2^{n^2}}
$$

is not only irrational—it is transcendental.

---

#### Mahler's Theorem (Classical Form)

Let

$$
f(x)=\sum_{n=0}^{\infty}x^{a_n},
$$

where

- $a_0<a_1<a_2<\cdots$ are nonnegative integers,
- the gaps satisfy

$$
\frac{a_{n+1}}{a_n}\longrightarrow\infty.
$$

Then for every algebraic number $\alpha$ satisfying

$$
0<|\alpha|<1,
$$

the value

$$
f(\alpha)
$$

is transcendental.

---

#### Important Special Case

Take

$$
a_n=n^2.
$$

Since

$$
\frac{(n+1)^2}{n^2}
=
1+\frac{2}{n}+\frac{1}{n^2},
$$

this sequence does **not** satisfy the ratio condition above. Nevertheless, Mahler also proved a stronger theorem covering polynomial sequences such as

$$
a_n=n^2,\quad n^3,\quad n^4,\ldots
$$

Hence

$$
\sum_{n=0}^{\infty}x^{n^2}
$$

takes transcendental values at every algebraic number $x$ with

$$
0<|x|<1.
$$

In particular,

$$
\sum_{n=1}^{\infty}\frac1{2^{n^2}}
=
\sum_{n=1}^{\infty}\left(\frac12\right)^{n^2}
$$

is transcendental.

---

#### General Mahler Theorem (Polynomial Version)

Let

$$
P(n)\in\mathbb Z[n]
$$

be a nonconstant polynomial taking nonnegative integer values for sufficiently large $n$.

Then

$$
\sum_{n=0}^{\infty}x^{P(n)}
$$

is transcendental at every algebraic number $x$ satisfying

$$
0<|x|<1.
$$

Examples include

$$
P(n)=n^2,\qquad
P(n)=n^3,\qquad
P(n)=n^2+n,\qquad
P(n)=2n^2+5.
$$

---

#### Examples

##### Example 1

$$
\sum_{n=1}^{\infty}\frac1{2^{n^2}}
$$

is transcendental.

---

###### Example 2

$$
\sum_{n=0}^{\infty}\frac1{3^{n^3}}
$$

is transcendental.

---

##### Example 3

$$
\sum_{n=0}^{\infty}\left(\frac45\right)^{n^2+n}
$$

is transcendental.

---

#### Why the Theorem Works (Idea)

The exponents

$$
n^2,\;n^3,\;2^n,\;\ldots
$$

grow so rapidly that the nonzero digits of the expansion are extremely sparse.

If the value were algebraic, it would satisfy a polynomial equation with integer coefficients.

Mahler proved that algebraic numbers cannot have such sparse expansions, leading to a contradiction.

Thus the number must be transcendental.

---

#### Relation to Irrationality

A typical irrationality proof shows

$$
\sum_{n=1}^{\infty}\frac1{2^{n^2}}
\notin\mathbb Q.
$$

Mahler's theorem proves the stronger statement

$$
\sum_{n=1}^{\infty}\frac1{2^{n^2}}
\notin\overline{\mathbb Q},
$$

where $\overline{\mathbb Q}$ denotes the set of algebraic numbers.

Since every rational number is algebraic,

$$
\text{transcendental}
\implies
\text{irrational}.
$$

The converse is false.

---

#### Common Examples of Transcendental Numbers

- $e$
- $\pi$
- $e^\pi$
- $2^{\sqrt2}$
- $$\displaystyle\sum_{n=1}^{\infty}\frac1{2^{n^2}}$$
- $$\displaystyle\sum_{n=0}^{\infty}\frac1{10^{n!}}$$ (Liouville number)

---

#### Takeaways

- Mahler's theorem studies series of the form

  $$
  \sum x^{P(n)}.
  $$

- If $P(n)$ is a nonconstant integer polynomial and

  $$
  0<|x|<1
  $$

  is algebraic, then the sum is transcendental.

- Therefore,

  $$
  \sum_{n=1}^{\infty}\frac1{2^{n^2}}
  $$

  is transcendental.

- Every transcendental number is irrational, but not every irrational number is transcendental.