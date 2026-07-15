The Taylor series represents a function as an infinite polynomial centered at a point $a$.

$$
\boxed{
f(x)=\sum_{n=0}^{\infty}
\frac{f^{(n)}(a)}{n!}(x-a)^n
}
$$

where $f^{(n)}(a)$ is the $n$-th derivative evaluated at $x=a$.

---

#### Maclaurin Series

A Taylor series centered at $a=0$ is called a Maclaurin series.

$$
\boxed{
f(x)=\sum_{n=0}^{\infty}
\frac{f^{(n)}(0)}{n!}x^n
}
$$

---

#### Taylor Polynomial

The $n$-th degree Taylor polynomial is the finite approximation:

$$
\boxed{
T_n(x)=
\sum_{k=0}^{n}
\frac{f^{(k)}(a)}{k!}(x-a)^k
}
$$

The approximation error is

$$
R_n(x)=f(x)-T_n(x).
$$

---

#### Deriving the Taylor Coefficients

Assume

$$
f(x)=a_0+a_1(x-a)+a_2(x-a)^2+\cdots
$$

Evaluating at $x=a$:

$$
a_0=f(a)
$$

Differentiate:

$$
f'(x)=a_1+2a_2(x-a)+3a_3(x-a)^2+\cdots
$$

so

$$
a_1=f'(a).
$$

Continuing,

$$
a_n=\frac{f^{(n)}(a)}{n!}.
$$

Therefore,

$$
f(x)=
\sum_{n=0}^{\infty}
\frac{f^{(n)}(a)}{n!}(x-a)^n.
$$

---

#### Important Maclaurin Series

#### Exponential Function

$$
\boxed{
e^x=
\sum_{n=0}^{\infty}
\frac{x^n}{n!}
}
$$

Examples:

$$
e^{-x}
=
\sum_{n=0}^{\infty}
(-1)^n\frac{x^n}{n!}
$$

---

#### Sine Function

$$
\boxed{
\sin x
=
\sum_{n=0}^{\infty}
(-1)^n
\frac{x^{2n+1}}{(2n+1)!}
}
$$

Expansion:

$$
\sin x
=
x-\frac{x^3}{3!}
+\frac{x^5}{5!}
-\cdots
$$

---

#### Cosine Function

$$
\boxed{
\cos x
=
\sum_{n=0}^{\infty}
(-1)^n
\frac{x^{2n}}{(2n)!}
}
$$

Expansion:

$$
\cos x
=
1-\frac{x^2}{2!}
+\frac{x^4}{4!}
-\cdots
$$

---

#### Geometric Series

For $|x|<1$,

$$
\boxed{
\frac1{1-x}
=
\sum_{n=0}^{\infty}x^n
}
$$

Replacing $x$ by $-x$:

$$
\boxed{
\frac1{1+x}
=
\sum_{n=0}^{\infty}(-1)^nx^n
}
$$

---

#### Natural Logarithm

For $|x|<1$,

$$
\boxed{
\ln(1+x)
=
\sum_{n=1}^{\infty}
(-1)^{n+1}\frac{x^n}{n}
}
$$

Expansion:

$$
\ln(1+x)
=
x-\frac{x^2}{2}
+\frac{x^3}{3}
-\cdots
$$

---

#### Arctangent

$$
\boxed{
\arctan x
=
\sum_{n=0}^{\infty}
(-1)^n
\frac{x^{2n+1}}{2n+1}
}
$$

Expansion:

$$
\arctan x
=
x-\frac{x^3}{3}
+\frac{x^5}{5}
-\cdots
$$

---

#### Taylor's Theorem

Taylor's theorem states:

$$
f(x)=T_n(x)+R_n(x)
$$

where the Lagrange remainder is

$$
\boxed{
R_n(x)=
\frac{f^{(n+1)}(c)}{(n+1)!}
(x-a)^{n+1}
}
$$

for some $c$ between $a$ and $x.

---

#### Error Bound

If

$$
|f^{(n+1)}(x)|\le M,
$$

then

$$
\boxed{
|R_n(x)|
\le
\frac{M|x-a|^{n+1}}{(n+1)!}
}
$$

---

#### Radius of Convergence

A power series has the form

$$
\sum_{n=0}^{\infty}c_n(x-a)^n.
$$

It converges for

$$
|x-a|<R,
$$

where $R$ is the radius of convergence.

---

#### Ratio Test for Radius

Compute

$$
L=
\lim_{n\to\infty}
\left|
\frac{c_{n+1}}{c_n}
\right|.
$$

Then

$$
\boxed{
R=\frac1L
}
$$

---

#### Operations on Taylor Series

#### Differentiation

$$
\frac{d}{dx}
\sum_{n=0}^{\infty}c_nx^n
=
\sum_{n=1}^{\infty}nc_nx^{n-1}
$$

---

#### Integration

$$
\int
\sum_{n=0}^{\infty}c_nx^n dx
=
C+
\sum_{n=0}^{\infty}
\frac{c_n}{n+1}x^{n+1}
$$

---

#### Multiplication

Cauchy product:

$$
\left(\sum_{n=0}^{\infty}a_nx^n\right)
\left(\sum_{n=0}^{\infty}b_nx^n\right)
=
\sum_{n=0}^{\infty}
\left(
\sum_{k=0}^{n}a_kb_{n-k}
\right)x^n
$$

---

#### Common Strategies

1. Identify the center $a$.

$$
a=0 \Rightarrow \text{Maclaurin series}
$$

$$
a\neq0 \Rightarrow \text{Taylor series}
$$

2. Rewrite into known forms.

Example:

$$
\frac1{1+x^2}
=
\frac1{1-(-x^2)}
$$

Use the geometric series.

3. Differentiate or integrate known expansions.

Example:

$$
\frac1{1-x}
=
1+x+x^2+\cdots
$$

Integrating:

$$
-\ln(1-x)
=
x+\frac{x^2}{2}
+\frac{x^3}{3}
+\cdots
$$

4. Always check the radius and endpoint convergence.