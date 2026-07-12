
Abel's summation formula is the discrete analogue of **integration by parts**. It is an essential tool in the study of series, especially when applying [[Dirichlet's Test|Dirichlet's]] and [[Abel's Convergence Test|Abel's]] convergence tests.

---

#### Statement

Let

$$
A_n=\sum_{k=1}^n a_k
$$

be the sequence of partial sums of $(a_n)$.

Then for any sequences $(a_n)$ and $(b_n)$,

$$
\sum_{k=m}^{n}a_kb_k
=
A_nb_n-A_{m-1}b_m
+
\sum_{k=m}^{n-1}A_k(b_k-b_{k+1}).
$$

Equivalently,

$$
\boxed{
\sum_{k=m}^{n}a_kb_k
=
A_nb_n-A_{m-1}b_m
-
\sum_{k=m}^{n-1}A_k(b_{k+1}-b_k)
}
$$

Both forms are completely equivalent.

---

#### Special Case

If

$$
m=1,
$$

then

$$
A_0=0,
$$

so

$$
\sum_{k=1}^{n}a_kb_k
=
A_nb_n
+
\sum_{k=1}^{n-1}A_k(b_k-b_{k+1}).
$$

This is the form used most often.

---

#### Why It Is Useful

Instead of studying

$$
\sum a_nb_n,
$$

we study

- the partial sums

  $$
  A_n=\sum_{k=1}^na_k,
  $$

- and the differences

  $$
  b_{k+1}-b_k.
  $$

This is often much easier because $A_n$ may remain bounded while the differences of $b_n$ become very small.

---

#### Interpretation

Integration by parts says

$$
\int u\,dv
=
uv-\int v\,du.
$$

Abel's formula is the discrete version:

| Calculus | Series |
|----------|---------|
| $u$ | $A_n$ |
| $dv$ | $b_n$ |
| $du$ | $A_{n+1}-A_n=a_{n+1}$ |
| $v$ | discrete differences of $b_n$ |

Hence Abel's formula is often called **summation by parts**.

---

#### Proof

Starting from

$$
a_k=A_k-A_{k-1},
$$

we have

$$
\sum_{k=m}^{n}a_kb_k
=
\sum_{k=m}^{n}(A_k-A_{k-1})b_k.
$$

Expanding,

$$
=
\sum_{k=m}^{n}A_kb_k
-
\sum_{k=m}^{n}A_{k-1}b_k.
$$

Shift the index in the second sum:

$$
=
\sum_{k=m}^{n}A_kb_k
-
\sum_{k=m-1}^{n-1}A_kb_{k+1}.
$$

Separate the boundary terms:

$$
=
A_nb_n
-
A_{m-1}b_m
+
\sum_{k=m}^{n-1}A_k(b_k-b_{k+1}).
$$

This proves the formula.

---

#### Applications

##### 1. Dirichlet's Test

If

- the partial sums

  $$
  A_n=\sum_{k=1}^na_k
  $$

  are bounded,

- $b_n$ decreases monotonically to $0$,

then

$$
\sum a_nb_n
$$

converges.

Abel's formula rewrites the series as

$$
A_nb_n
+
\sum A_k(b_k-b_{k+1}),
$$

where

- $A_nb_n\to0$,
- the second series converges by comparison.

---

##### 2. Abel's Test

If

- $\sum a_n$ converges,
- $b_n$ is monotone and bounded,

then

$$
\sum a_nb_n
$$

converges.

Again, Abel's formula separates the bounded partial sums from the small differences.

---

##### 3. Estimating Oscillatory Series

Useful for sums such as

$$
\sum\frac{\sin n}{n},
$$

$$
\sum\frac{\cos n}{n},
$$

and more generally

$$
\sum a_nb_n,
$$

where $a_n$ oscillates but its partial sums remain bounded.

---

#### Example 1

Show

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

Dirichlet's test (proved using Abel's formula) gives convergence.

---

#### Example 2

Evaluate

$$
\sum_{k=1}^{n}ka_k.
$$

Take

$$
b_k=k.
$$

Since

$$
b_k-b_{k+1}=-1,
$$

Abel's formula gives

$$
\sum_{k=1}^{n}ka_k
=
nA_n
-
\sum_{k=1}^{n-1}A_k.
$$

This identity is frequently used in asymptotic estimates.

---

#### Common Difference Formula

If

$$
b_n=\frac1n,
$$

then

$$
b_k-b_{k+1}
=
\frac1k-\frac1{k+1}
=
\frac1{k(k+1)}.
$$

Thus

$$
\sum a_n\frac1n
=
\frac{A_n}{n}
+
\sum_{k=1}^{n-1}
\frac{A_k}{k(k+1)}.
$$

This form appears often in convergence proofs.

---

#### Key Takeaways

- Abel's summation formula is the discrete analogue of integration by parts.
- Define

  $$
  A_n=\sum_{k=1}^na_k.
  $$

- The main identity is

  $$
  \sum_{k=m}^{n}a_kb_k
  =
  A_nb_n-A_{m-1}b_m
  +
  \sum_{k=m}^{n-1}A_k(b_k-b_{k+1}).
  $$

- It converts products $a_nb_n$ into partial sums and first differences.
- It is the key tool behind **Dirichlet's Test**, **Abel's Test**, and many estimates of oscillatory series.