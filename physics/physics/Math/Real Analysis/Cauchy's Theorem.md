Use these as foundational results in real analysis. The three theorems build on one another:

$$
\boxed{\text{Rolle's Theorem}\Longrightarrow\text{Mean Value Theorem}\Longrightarrow\text{Cauchy's Mean Value Theorem}}
$$

#### Statement

Let $f:[a,b]\to\mathbb{R}$ satisfy

1. $f$ is continuous on $[a,b]$.
2. $f$ is differentiable on $(a,b)$.
3. $f(a)=f(b)$.

Then there exists $c\in(a,b)$ such that

$$
f'(c)=0.
$$

#### Geometric Interpretation

If the graph begins and ends at the same height, then somewhere in between it has a horizontal tangent.

#### Why are the hypotheses needed?

- Continuity guarantees a maximum and minimum exist.
- Differentiability allows derivatives at interior extrema.
- Equal endpoint values force an interior extremum unless the function is constant.

#### Proof

Since $f$ is continuous on a closed interval, it attains a maximum and minimum.

- If $f$ is constant, then

$$
f'(x)=0
$$

everywhere.

- Otherwise, either the maximum or minimum occurs at an interior point $c$.

By Fermat's theorem,

$$
f'(c)=0.
$$

#### Common Uses

- Proving uniqueness.
- Counting roots of polynomials.
- Showing derivatives vanish.
- Inductive proofs involving repeated differentiation.

#### Example

Let

$$
Q_n(x)=(x^2-1)^n.
$$

Since

$$
Q_n^{(k)}(\pm1)=0,
$$

Rolle's theorem implies that between every two consecutive zeros of $Q_n^{(k)}$ there is a zero of

$$
Q_n^{(k+1)}.
$$

Repeated application produces $n$ distinct interior roots of $Q_n^{(n)}$.

#### Mean Value Theorem (Lagrange)

#### Statement

Let $f$ satisfy

- $f$ is continuous on $[a,b]$.
- $f$ is differentiable on $(a,b)$.

Then there exists $c\in(a,b)$ such that

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

#### Geometric Interpretation

The tangent line is parallel to the secant line joining

$$
(a,f(a))
\quad\text{and}\quad
(b,f(b)).
$$

#### Proof Using Rolle's Theorem

Define

$$
g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a).
$$

Then

$$
g(a)=g(b).
$$

Applying Rolle's theorem,

$$
g'(c)=0.
$$

Since

$$
g'(x)=f'(x)-\frac{f(b)-f(a)}{b-a},
$$

we obtain

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

#### Important Consequences

##### Constant Derivative

If

$$
f'(x)=0,
$$

then $f$ is constant.

##### Monotonicity

If

$$
f'(x)\ge0,
$$

then $f$ is increasing.

If

$$
f'(x)\le0,
$$

then $f$ is decreasing.

##### Lipschitz Estimate

If

$$
|f'(x)|\le M,
$$

then

$$
|f(x)-f(y)|\le M|x-y|.
$$

##### Uniqueness

If

$$
f'(x)>0,
$$

then $f$ is strictly increasing, so it can have at most one root.

#### Example

Show that

$$
\sin x<x,\qquad x>0.
$$

Apply the Mean Value Theorem to $f(x)=\sin x$ on $[0,x]$.

Then there exists $c\in(0,x)$ such that

$$
\sin x-\sin0=x\cos c.
$$

Since

$$
\cos c<1,
$$

we conclude

$$
\sin x=x\cos c<x.
$$

#### Cauchy's Mean Value Theorem

#### Statement

Let $f$ and $g$ satisfy

- both are continuous on $[a,b]$,
- both are differentiable on $(a,b)$.

Then there exists $c\in(a,b)$ such that

$$
(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c).
$$

If

$$
g'(c)\ne0,
$$

this is equivalent to

$$
\frac{f'(c)}{g'(c)}
=
\frac{f(b)-f(a)}
{g(b)-g(a)}.
$$

#### Interpretation

The ordinary Mean Value Theorem compares the change in $f$ with the change in $x$.

Cauchy's Mean Value Theorem compares the change in $f$ with the change in another function $g$, making it a generalization of the Mean Value Theorem.

#### Proof

Define

$$
H(x)
=
(f(b)-f(a))g(x)
-
(g(b)-g(a))f(x).
$$

Then

$$
H(a)=H(b).
$$

By Rolle's theorem,

$$
H'(c)=0.
$$

Differentiating gives

$$
(f(b)-f(a))g'(c)
-
(g(b)-g(a))f'(c)
=
0,
$$

which is exactly the desired conclusion.

#### Relationship Between the Three Theorems

| Theorem | Key Assumption | Conclusion |
|---------|----------------|------------|
| Rolle | $f(a)=f(b)$ | $f'(c)=0$ |
| Mean Value | General endpoints | $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ |
| Cauchy Mean Value | Two functions $f,g$ | $\dfrac{f'(c)}{g'(c)}=\dfrac{\Delta f}{\Delta g}$ |

#### Why Cauchy's Mean Value Theorem is Important

It is the key ingredient in many advanced proofs, including

- [[L'Hôpital's Rule|L'Hôpital's Rule]].
- Generalized mean value inequalities.
- Error estimates in Taylor's theorem.
- Monotone forms of L'Hôpital's Rule.
- Comparison of the growth of two differentiable functions.

Whenever a proof involves a quotient like

$$
\frac{f(x)}{g(x)},
$$

Cauchy's Mean Value Theorem is often the underlying tool.