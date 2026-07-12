#### 

Dirichlet's Test is a fundamental convergence test for series whose terms oscillate. It is especially useful for series involving trigonometric functions.

---


Let $(a_n)$ and $(b_n)$ be sequences such that

1. the partial sums

   $$
   A_n=\sum_{k=1}^n a_k
   $$

   are bounded; that is, there exists a constant $M>0$ such that

   $$
   |A_n|\le M
   $$

   for all $n$;

2. $(b_n)$ is monotone;

3. 

   $$
   \lim_{n\to\infty}b_n=0.
   $$

Then the series

$$
\sum_{n=1}^{\infty}a_nb_n
$$

converges.

---

#### Intuition

The sequence $(a_n)$ may oscillate wildly, but its partial sums never become large.

Meanwhile, $(b_n)$ shrinks to zero.

The oscillation causes cancellation, while the decreasing factor forces the terms to become sufficiently small.

---

#### Proof

Let

$$
A_n=\sum_{k=1}^na_k.
$$

By Abel's summation formula,

$$
\sum_{k=m}^{n}a_kb_k
=
A_nb_n
-
A_{m-1}b_m
+
\sum_{k=m}^{n-1}A_k(b_k-b_{k+1}).
$$

Since the partial sums are bounded,

$$
|A_k|\le M.
$$

Therefore,

$$
|A_nb_n|
\le
M|b_n|
\longrightarrow0.
$$

Also,

$$
\left|
\sum_{k=m}^{n-1}A_k(b_k-b_{k+1})
\right|
\le
M
\sum_{k=m}^{n-1}(b_k-b_{k+1}).
$$

Because $(b_n)$ is monotone,

$$
\sum_{k=m}^{n-1}(b_k-b_{k+1})
=
b_m-b_n.
$$

Hence

$$
\left|
\sum_{k=m}^{n}a_kb_k
\right|
\le
M|b_n|
+
M|b_m|
+
M(b_m-b_n).
$$

As

$$
m,n\to\infty,
$$

every term tends to zero, so the tails of the series tend to zero.

Therefore the series satisfies the Cauchy criterion and converges.

---

#### Typical Choices for $a_n$

Many oscillatory sequences have bounded partial sums.

Examples include

$$
a_n=(-1)^n,
$$

$$
a_n=\sin n,
$$

$$
a_n=\cos n,
$$

and more generally

$$
a_n=e^{in\theta},
\qquad
\theta\not\equiv0\pmod{2\pi}.
$$

---

#### Example 1

Show that

$$
\sum_{n=1}^{\infty}\frac{\sin n}{n}
$$

converges.

Take

$$
a_n=\sin n,
\qquad
b_n=\frac1n.
$$

Since

- the partial sums of $\sin n$ are bounded,
- $\frac1n$ decreases to $0$,

Dirichlet's Test implies convergence.

---

#### Example 2

Show that

$$
\sum_{n=1}^{\infty}\frac{\cos n}{n}
$$

converges.

Take

$$
a_n=\cos n,
\qquad
b_n=\frac1n.
$$

Again,

- the partial sums of $\cos n$ are bounded,
- $\frac1n\to0$ monotonically,

so the series converges.

---

#### Example 3

Consider

$$
\sum_{n=1}^{\infty}\frac{(-1)^n}{\sqrt n}.
$$

Here

$$
a_n=(-1)^n,
\qquad
b_n=\frac1{\sqrt n}.
$$

The partial sums of $(-1)^n$ satisfy

$$
|A_n|\le1,
$$

and

$$
\frac1{\sqrt n}
$$

is decreasing to $0$.

Therefore the series converges.

---

#### When the Test Cannot Be Used

Dirichlet's Test does **not** apply if

- the partial sums of $(a_n)$ are unbounded,
- $(b_n)$ is not monotone,
- or $b_n\nrightarrow0$.

The test gives sufficient conditions, not necessary ones.

---

#### Comparison with Abel's Test

| Dirichlet's Test | Abel's Test |
|------------------|-------------|
| Partial sums of $(a_n)$ are bounded | $\sum a_n$ converges |
| $(b_n)$ decreases to $0$ | $(b_n)$ is bounded and monotone |
| Gives convergence of $\sum a_nb_n$ | Gives convergence of $\sum a_nb_n$ |

Dirichlet's Test is stronger when $\sum a_n$ does not converge but its partial sums remain bounded.

---

#### Key Takeaways

- Let

  $$
  A_n=\sum_{k=1}^na_k.
  $$

- If

  $$
  |A_n|\le M,
  $$

  $b_n$ is monotone, and

  $$
  b_n\to0,
  $$

  then

  $$
  \sum a_nb_n
  $$

  converges.

- The proof follows directly from Abel's summation formula.

- Dirichlet's Test is particularly useful for oscillatory series such as

  $$
  \sum\frac{\sin n}{n},
  \qquad
  \sum\frac{\cos n}{n},
  \qquad
  \sum\frac{(-1)^n}{n^\alpha},
  \quad
  \alpha>0.
  $$