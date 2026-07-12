Integration by parts is a technique used to integrate products of functions.

It is derived from the product rule of differentiation and is the reverse process of the product rule.

---

#### Product Rule (Differentiation)

The product rule states that

$$
\frac{d}{dx}(u(x)v(x))
=
u'(x)v(x)+u(x)v'(x).
$$

Integrating both sides gives

$$
u(x)v(x)
=
\int u(x)v'(x)\,dx
+
\int v(x)u'(x)\,dx.
$$

Rearranging,

$$
\boxed{
\int u\,dv
=
uv-\int v\,du.
}
$$

This is the formula for integration by parts.

---

#### Integration by Parts Formula

If

$$
u=u(x)
$$

and

$$
dv=v'(x)\,dx,
$$

then

$$
\boxed{
\int u\,dv
=
uv-\int v\,du.
}
$$

The goal is to choose $u$ and $dv$ so that the new integral

$$
\int v\,du
$$

is easier to evaluate.

---

#### Choosing $u$ and $dv$

A common guideline is **LIATE**:

$$
\boxed{
\text{L I A T E}
}
$$

Choose $u$ from the first category that appears:

| Priority | Function |
|---|---|
| L | Logarithmic functions |
| I | Inverse trigonometric functions |
| A | Algebraic functions |
| T | Trigonometric functions |
| E | Exponential functions |

The remaining factor becomes $dv$.

---

#### Steps for Integration by Parts

1. Identify the two factors.

2. Choose

$$
u=\text{one factor},
$$

and

$$
dv=\text{the other factor}\,dx.
$$

3. Compute

$$
du
$$

and

$$
v.
$$

4. Apply

$$
\boxed{
\int u\,dv=uv-\int v\,du.
}
$$

5. Simplify the remaining integral.

---

#### Example 1: Polynomial Times Exponential

Evaluate

$$
\int xe^x\,dx.
$$

Choose

$$
u=x,
$$

and

$$
dv=e^x\,dx.
$$

Then

$$
du=dx,
$$

and

$$
v=e^x.
$$

Using integration by parts,

$$
\int xe^x\,dx
=
xe^x-\int e^x\,dx.
$$

Therefore,

$$
\boxed{
\int xe^x\,dx
=
xe^x-e^x+C.
}
$$

---

#### Example 2: Polynomial Times Trigonometric Function

Evaluate

$$
\int x\sin x\,dx.
$$

Choose

$$
u=x,
$$

and

$$
dv=\sin x\,dx.
$$

Then

$$
du=dx,
$$

and

$$
v=-\cos x.
$$

Therefore,

$$
\int x\sin x\,dx
=
-x\cos x+\int\cos x\,dx.
$$

Hence,

$$
\boxed{
\int x\sin x\,dx
=
-x\cos x+\sin x+C.
}
$$

---

#### Example 3: Logarithmic Integral

Evaluate

$$
\int\ln x\,dx.
$$

Rewrite as

$$
\int \ln x\cdot1\,dx.
$$

Choose

$$
u=\ln x,
$$

and

$$
dv=dx.
$$

Then

$$
du=\frac1x\,dx,
$$

and

$$
v=x.
$$

Applying integration by parts,

$$
\int\ln x\,dx
=
x\ln x-\int x\frac1x\,dx.
$$

Therefore,

$$
\boxed{
\int\ln x\,dx
=
x\ln x-x+C.
}
$$

---

#### Repeated Integration by Parts

Some integrals require applying integration by parts multiple times.

Example:

$$
\int x^2e^x\,dx.
$$

First application:

$$
u=x^2,
\qquad
dv=e^x\,dx.
$$

Then

$$
du=2x\,dx,
\qquad
v=e^x.
$$

So

$$
\int x^2e^x\,dx
=
x^2e^x-2\int xe^x\,dx.
$$

The remaining integral requires another application of integration by parts.

---

#### Tabular Integration

For repeated integration by parts, a table method can simplify the process.

Example:

$$
\int x^3e^x\,dx.
$$

Differentiate $x^3$ repeatedly:

$$
x^3
\rightarrow
3x^2
\rightarrow
6x
\rightarrow
6
\rightarrow
0
$$

Integrate $e^x$ repeatedly:

$$
e^x
\rightarrow
e^x
\rightarrow
e^x
\rightarrow
e^x
$$

Multiply diagonally with alternating signs.

---

#### Special Results

##### Exponential and Sine/Cosine Products

For

$$
\int e^{ax}\sin(bx)\,dx,
$$

or

$$
\int e^{ax}\cos(bx)\,dx,
$$

integration by parts is often applied twice.

The result is a system of equations that can be solved algebraically.

---

#### When to Use Integration by Parts

Use integration by parts for:

- Products of functions.
- Logarithmic functions.
- Inverse trigonometric functions.
- Polynomial times exponential functions.
- Polynomial times trigonometric functions.

Common examples:

$$
\int x e^x\,dx
$$

$$
\int x\sin x\,dx
$$

$$
\int \ln x\,dx
$$

$$
\int x^2\cos x\,dx
$$

---

#### Common Mistakes

- Choosing $u$ and $dv$ incorrectly.
- Forgetting the negative sign:

$$
\int u\,dv=uv-\int v\,du.
$$

- Making the remaining integral harder.
- Forgetting the constant of integration.
- Not applying integration by parts repeatedly when needed.

---

#### Relationship to Differentiation

Product rule:

$$
\frac{d}{dx}(uv)
=
u\,dv+v\,du.
$$

Integration by parts reverses this:

$$
\boxed{
\int u\,dv
=
uv-\int v\,du.
}
$$

---

#### Key Facts

- Integration by parts is the reverse of the product rule.
- It is used mainly for integrals involving products.
- The formula is

$$
\boxed{
\int u\,dv=uv-\int v\,du.
}
$$

- Choose $u$ using LIATE.
- The goal is to transform a difficult integral into an easier one.