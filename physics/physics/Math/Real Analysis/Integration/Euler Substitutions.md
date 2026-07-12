Euler substitutions are a method for integrating expressions involving square roots of quadratic polynomials.

They transform integrals containing radicals into rational functions, which can then be evaluated using partial fractions or standard integration techniques.

The general form is

$$
\int R(x,\sqrt{ax^2+bx+c})\,dx,
$$

where $R$ is a rational function.

---

#### Why Euler Substitution Works

The goal is to introduce a new variable $t$ such that both

$$
x
$$

and

$$
\sqrt{ax^2+bx+c}
$$

become rational functions of $t$.

This converts the integral into the form

$$
\int R(t)\,dt.
$$

---

#### Three Euler Substitutions

There are three standard cases depending on the quadratic expression.

---

#### Case 1: $a>0$

For

$$
\sqrt{ax^2+bx+c},
$$

use

$$
\boxed{
\sqrt{ax^2+bx+c}=t+\sqrt{a}x.
}
$$

Solving for $x$:

Square both sides:

$$
ax^2+bx+c
=
t^2+2t\sqrt{a}x+ax^2.
$$

Cancel $ax^2$:

$$
bx+c=t^2+2t\sqrt{a}x.
$$

Therefore,

$$
\boxed{
x=\frac{t^2-c+b}{2t\sqrt{a}}.
}
$$

The square root becomes

$$
\boxed{
\sqrt{ax^2+bx+c}
=
t+\sqrt{a}x,
}
$$

which is rational in $t$.

---

#### Case 2: $c>0$

For

$$
\sqrt{ax^2+bx+c},
$$

use

$$
\boxed{
\sqrt{ax^2+bx+c}=tx+\sqrt{c}.
}
$$

Squaring:

$$
ax^2+bx+c
=
t^2x^2+2t\sqrt{c}x+c.
$$

Cancel $c$:

$$
ax^2+bx=t^2x^2+2t\sqrt{c}x.
$$

Factor:

$$
x(ax+b-t^2x-2t\sqrt{c})=0.
$$

Thus,

$$
\boxed{
x=\frac{2t\sqrt{c}-b}{a-t^2}.
}
$$

---

#### Case 3: Discriminant Positive

For

$$
ax^2+bx+c
$$

with two real roots, factor it as

$$
ax^2+bx+c=a(x-r_1)(x-r_2).
$$

Use

$$
\boxed{
\sqrt{ax^2+bx+c}
=
t(x-r_1).
}
$$

Then

$$
ax^2+bx+c=t^2(x-r_1)^2.
$$

Solving gives a rational expression for $x$.

---

#### Example: Euler Substitution

Evaluate

$$
\int\frac{dx}{\sqrt{x^2+x+1}}.
$$

Use the substitution

$$
\sqrt{x^2+x+1}=tx+1.
$$

Squaring,

$$
x^2+x+1=t^2x^2+2tx+1.
$$

Cancel $1$:

$$
x^2+x=t^2x^2+2tx.
$$

Factor:

$$
x(x+1-t^2x-2t)=0.
$$

Hence,

$$
x=\frac{2t-1}{1-t^2}.
$$

Differentiate:

$$
dx
=
\frac{2(1+t^2)}{(1-t^2)^2}\,dt.
$$

The radical becomes

$$
\sqrt{x^2+x+1}
=
tx+1,
$$

which is rational in $t$.

The original integral becomes a rational integral in $t$.

---

#### Relationship to Trigonometric Substitution

Trigonometric substitution handles special radicals:

$$
\sqrt{a^2-x^2},
$$

$$
\sqrt{a^2+x^2},
$$

$$
\sqrt{x^2-a^2}.
$$

Euler substitution handles the general case:

$$
\sqrt{ax^2+bx+c}.
$$

Therefore,

$$
\boxed{
\text{Euler substitution is a generalization of trigonometric substitution.}
}
$$

---

#### Euler vs. Trigonometric Substitution

| Method | Best Used For |
|---|---|
| Trigonometric substitution | Special quadratic radicals |
| Euler substitution | General quadratic radicals |
| Partial fractions | Resulting rational integrals |

---

#### Common Integrals Using Euler Substitution

Euler substitution is useful for integrals such as

$$
\int R(x,\sqrt{x^2+x+1})\,dx,
$$

$$
\int R(x,\sqrt{2x^2-3x+5})\,dx,
$$

and

$$
\int R(x,\sqrt{ax^2+bx+c})\,dx.
$$

---

#### Advantages

- Converts radical expressions into rational expressions.
- Works for all quadratic square roots.
- Avoids complicated trigonometric identities.
- Connects directly with partial fraction decomposition.

---

#### Common Mistakes

- Choosing the wrong Euler substitution.
- Forgetting to rationalize both $x$ and the radical.
- Not differentiating the substitution carefully.
- Failing to convert the entire integral into the new variable.

---

#### Key Facts

Euler substitutions transform

$$
\sqrt{ax^2+bx+c}
$$

into a rational expression.

The three main substitutions are:

$$
\boxed{
\sqrt{ax^2+bx+c}=t+\sqrt{a}x
}
$$

$$
\boxed{
\sqrt{ax^2+bx+c}=tx+\sqrt{c}
}
$$

$$
\boxed{
\sqrt{ax^2+bx+c}=t(x-r_1)
}
$$

They are especially useful when trigonometric substitution does not simplify the integral.