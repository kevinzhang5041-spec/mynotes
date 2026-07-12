
Abel's Test is a convergence test for products of sequences. It extends [[Dirichlet's|Dirichlet's]] Test by replacing the requirement that $b_n\to0$ with the stronger assumption that $\sum a_n$ itself converges.

---

#### Statement

Let $(a_n)$ and $(b_n)$ be sequences such that

1. the series

   $$
   \sum_{n=1}^{\infty}a_n
   $$

   converges;

2. $(b_n)$ is monotone;

3. $(b_n)$ is bounded.

Then the series

$$
\sum_{n=1}^{\infty}a_nb_n
$$

converges.

---

#### Why the Assumptions Work

Since

$$
\sum a_n
$$

converges, its partial sums

$$
A_n=\sum_{k=1}^na_k
$$

are bounded.

Also, because $(b_n)$ is monotone and bounded,

$$
\lim_{n\to\infty}b_n=L
$$

exists for some finite number $L$.

Write

$$
b_n=L+(b_n-L).
$$

Then

$$
\sum a_nb_n
=
L\sum a_n
+
\sum a_n(b_n-L).
$$

Since

$$
b_n-L\longrightarrow0,
$$

and the partial sums $A_n$ are bounded, the second series converges by Dirichlet's Test.

Therefore the entire series converges.

---

#### Proof Using Abel's Summation Formula

Let

$$
A_n=\sum_{k=1}^na_k.
$$

Since

$$
\sum a_n
$$

converges,

$$
A_n\longrightarrow A,
$$

so $(A_n)$ is bounded.

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

Because

- $(A_n)$ is bounded,
- $(b_n)$ is monotone and bounded,

the first two terms converge, while the last sum converges by comparison since

$$
\sum_{k=m}^{n-1}(b_k-b_{k+1})
=
b_m-b_n.
$$

Hence the tails satisfy the Cauchy criterion, proving convergence.

---

#### Intuition

The convergence of

$$
\sum a_n
$$

already guarantees substantial cancellation.

Multiplying by a bounded monotone sequence cannot destroy this convergence because the multiplier changes only gradually.

---

#### Example 1

Show that

$$
\sum_{n=1}^{\infty}\frac{(-1)^n}{n}
\left(1+\frac1n\right)
$$

converges.

Take

$$
a_n=\frac{(-1)^n}{n},
\qquad
b_n=1+\frac1n.
$$

Since

$$
\sum\frac{(-1)^n}{n}
$$

converges (Alternating Series Test), and

$$
1+\frac1n
$$

is bounded and decreasing,

Abel's Test implies convergence.

---

#### Example 2

Show that

$$
\sum_{n=1}^{\infty}
\frac{(-1)^n}{n}
\cdot
\frac{n}{n+1}
$$

converges.

Here

$$
a_n=\frac{(-1)^n}{n},
\qquad
b_n=\frac{n}{n+1}.
$$

The sequence

$$
\frac{n}{n+1}
$$

is bounded and increasing, so Abel's Test applies.

---

#### Example 3

Suppose

$$
\sum a_n
$$

converges.

Then for every real number $c$,

$$
\sum a_n\left(c+\frac1n\right)
$$

also converges because

$$
c+\frac1n
$$

is bounded and monotone.

---

#### Relationship with Dirichlet's Test

Abel's Test is a direct consequence of Dirichlet's Test.

Indeed,

$$
b_n=L+(b_n-L),
$$

where

$$
L=\lim b_n.
$$

Then

$$
\sum a_nb_n
=
L\sum a_n
+
\sum a_n(b_n-L).
$$

The first series converges by assumption.

The second converges by Dirichlet's Test since

$$
b_n-L\longrightarrow0.
$$

---

#### Comparison

| Dirichlet's Test | Abel's Test |
|------------------|-------------|
| Partial sums of $(a_n)$ are bounded | $\sum a_n$ converges |
| $b_n\to0$ monotonically | $b_n$ is bounded and monotone |
| Applies to oscillatory series | Applies when $\sum a_n$ already converges |

Since convergence of

$$
\sum a_n
$$

implies bounded partial sums, Abel's Test can be viewed as a corollary of Dirichlet's Test.

---

#### Key Takeaways

- If

  $$
  \sum a_n
  $$

  converges and

  $$
  b_n
  $$

  is bounded and monotone, then

  $$
  \sum a_nb_n
  $$

  converges.

- The proof follows by writing

  $$
  b_n=L+(b_n-L)
  $$

  and applying Dirichlet's Test.

- Abel's Test is useful when multiplying a convergent series by a bounded monotone sequence.

- It is closely connected to Abel's summation formula and Dirichlet's Test.