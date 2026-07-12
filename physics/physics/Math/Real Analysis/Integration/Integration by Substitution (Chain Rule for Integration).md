Integration by substitution, also called $u$-substitution, is the reverse process of the chain rule in differentiation.

It is used when an integral contains a composite function together with the derivative of its inner function.

---

#### Chain Rule (Differentiation)

If

$$
F'(x)=f(x),
$$

then

$$
\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x)
=
f(g(x))g'(x).
$$

Integration reverses this process.

---

#### Substitution Formula (Indefinite Integrals)

Let

$$
u=g(x).
$$

Then

$$
du=g'(x)\,dx.
$$

Therefore,

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du.
}
$$

If

$$
\int f(u)\,du=F(u)+C,
$$

then

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
F(g(x))+C.
}
$$

---

#### Definite Integral Substitution

For a definite integral, use the substitution

$$
u=g(x)
$$

and change the limits:

$$
x=a \implies u=g(a),
$$

$$
x=b \implies u=g(b).
$$

Therefore,

$$
\boxed{
\int_a^b f(g(x))g'(x)\,dx
=
\int_{g(a)}^{g(b)} f(u)\,du.
}
$$

For definite integrals, do not substitute back after integrating.

---

#### Steps for $u$-Substitution

1. Choose the inner function:

$$
u=g(x).
$$

2. Differentiate:

$$
du=g'(x)\,dx.
$$

3. Rewrite the entire integral in terms of $u$.

4. Integrate with respect to $u$.

5. Substitute back if the integral is indefinite.

---

#### Recognizing Substitution

The main pattern is:

$$
\boxed{
\text{function}\times\text{derivative of the function}.
}
$$

Examples:

$$
(x^2+1)^5(2x)
$$

Use

$$
u=x^2+1.
$$

---

$$
e^{x^3}(3x^2)
$$

Use

$$
u=x^3.
$$

---

$$
\frac{\cos x}{\sin x}
$$

Use

$$
u=\sin x.
$$

---

#### Common Substitution Forms

#### Power Functions

For

$$
\int(ax+b)^n\,dx,
$$

let

$$
u=ax+b.
$$

Then

$$
du=a\,dx.
$$

Hence,

$$
\boxed{
\int(ax+b)^n\,dx
=
\frac{(ax+b)^{n+1}}{a(n+1)}
+
C,
\qquad n\neq -1.
}
$$

---

#### Exponential Functions

For

$$
\int e^{ax+b}\,dx,
$$

let

$$
u=ax+b.
$$

Then

$$
\boxed{
\int e^{ax+b}\,dx
=
\frac{1}{a}e^{ax+b}+C.
}
$$

---

#### Logarithmic Functions

For

$$
\int\frac{1}{ax+b}\,dx,
$$

let

$$
u=ax+b.
$$

Then

$$
\boxed{
\int\frac{dx}{ax+b}
=
\frac1a\ln|ax+b|+C.
}
$$

---

#### Trigonometric Functions

For

$$
\int\sin(ax+b)\,dx,
$$

we have

$$
\boxed{
\int\sin(ax+b)\,dx
=
-\frac1a\cos(ax+b)+C.
}
$$

For

$$
\int\cos(ax+b)\,dx,
$$

we have

$$
\boxed{
\int\cos(ax+b)\,dx
=
\frac1a\sin(ax+b)+C.
}
$$

For

$$
\int\sec^2(ax+b)\,dx,
$$

we have

$$
\boxed{
\int\sec^2(ax+b)\,dx
=
\frac1a\tan(ax+b)+C.
}
$$

---

#### Example 1: Polynomial Substitution

Evaluate

$$
\int (x^2+1)^5x\,dx.
$$

Let

$$
u=x^2+1.
$$

Then

$$
du=2x\,dx.
$$

Therefore,

$$
x\,dx=\frac12du.
$$

The integral becomes

$$
\int (x^2+1)^5x\,dx
=
\frac12\int u^5\,du.
$$

Integrating,

$$
=
\frac12\cdot\frac{u^6}{6}+C.
$$

Substituting back,

$$
\boxed{
\int (x^2+1)^5x\,dx
=
\frac{(x^2+1)^6}{12}+C.
}
$$

---

#### Example 2: Rational Function

Evaluate

$$
\int\frac{x}{x^2+1}\,dx.
$$

Let

$$
u=x^2+1.
$$

Then

$$
du=2x\,dx.
$$

Thus,

$$
\int\frac{x}{x^2+1}\,dx
=
\frac12\int\frac1u\,du.
$$

Therefore,

$$
\boxed{
\int\frac{x}{x^2+1}\,dx
=
\frac12\ln|x^2+1|+C.
}
$$

---

#### Example 3: Definite Integral

Evaluate

$$
\int_0^1 2xe^{x^2}\,dx.
$$

Let

$$
u=x^2.
$$

Then

$$
du=2x\,dx.
$$

Change the limits:

$$
x=0 \implies u=0,
$$

$$
x=1 \implies u=1.
$$

Therefore,

$$
\int_0^1 2xe^{x^2}\,dx
=
\int_0^1 e^u\,du.
$$

Hence,

$$
=
e^u\Big|_0^1
=
e-1.
$$

---

#### Common Mistakes

- Forgetting the derivative factor $g'(x)$.
- Forgetting constants when converting $dx$ into $du$.
- Leaving $x$ terms after substitution.
- Changing variables without changing limits in definite integrals.
- Substituting back after changing limits.

---

#### Relationship Between Differentiation and Integration

The chain rule says

$$
\frac{d}{dx}F(g(x))
=
F'(g(x))g'(x).
$$

The reverse operation is substitution:

$$
\boxed{
\int F'(g(x))g'(x)\,dx
=
F(g(x))+C.
}
$$

---

#### Key Facts

- $u$-substitution is the reverse of the chain rule.
- Choose $u$ as the inner function.
- Replace $dx$ using

$$
du=g'(x)\,dx.
$$

- Rewrite the whole integral before integrating.
- For definite integrals, change the bounds.
- The fundamental formula is

$$
\boxed{
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du.
}
$$