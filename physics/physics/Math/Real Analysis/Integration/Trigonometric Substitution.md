Trigonometric substitution is a technique for evaluating integrals involving radicals of quadratic expressions.

It uses trigonometric identities to simplify expressions involving:

$$
\sqrt{a^2-x^2},
$$

$$
\sqrt{a^2+x^2},
$$

and

$$
\sqrt{x^2-a^2}.
$$

The method replaces algebraic expressions with trigonometric functions whose identities simplify the radical.

---

#### Key Trigonometric Identities

The main identities used are:

$$
\sin^2\theta+\cos^2\theta=1.
$$

$$
1+\tan^2\theta=\sec^2\theta.
$$

$$
\sec^2\theta-1=\tan^2\theta.
$$

---

#### General Strategy

1. Identify the quadratic expression under the square root.

2. Choose a trigonometric substitution.

3. Compute $dx$.

4. Rewrite the integral entirely in terms of $\theta$.

5. Integrate using trigonometric identities.

6. Substitute back using a triangle or inverse trigonometric functions.

---

#### Case 1: $\sqrt{a^2-x^2}$

For expressions of the form

$$
\sqrt{a^2-x^2},
$$

use

$$
\boxed{
x=a\sin\theta.
}
$$

Then

$$
dx=a\cos\theta\,d\theta.
$$

The radical becomes

$$
\sqrt{a^2-x^2}
=
\sqrt{a^2-a^2\sin^2\theta}.
$$

Factor:

$$
=
a\sqrt{1-\sin^2\theta}.
$$

Using

$$
1-\sin^2\theta=\cos^2\theta,
$$

we get

$$
\boxed{
\sqrt{a^2-x^2}=a\cos\theta.
}
$$

---

#### Case 2: $\sqrt{a^2+x^2}$

For expressions of the form

$$
\sqrt{a^2+x^2},
$$

use

$$
\boxed{
x=a\tan\theta.
}
$$

Then

$$
dx=a\sec^2\theta\,d\theta.
$$

The radical becomes

$$
\sqrt{a^2+x^2}
=
\sqrt{a^2+a^2\tan^2\theta}.
$$

Factor:

$$
=
a\sqrt{1+\tan^2\theta}.
$$

Using

$$
1+\tan^2\theta=\sec^2\theta,
$$

we get

$$
\boxed{
\sqrt{a^2+x^2}=a\sec\theta.
}
$$

---

#### Case 3: $\sqrt{x^2-a^2}$

For expressions of the form

$$
\sqrt{x^2-a^2},
$$

use

$$
\boxed{
x=a\sec\theta.
}
$$

Then

$$
dx=a\sec\theta\tan\theta\,d\theta.
$$

The radical becomes

$$
\sqrt{x^2-a^2}
=
\sqrt{a^2\sec^2\theta-a^2}.
$$

Factor:

$$
=
a\sqrt{\sec^2\theta-1}.
$$

Using

$$
\sec^2\theta-1=\tan^2\theta,
$$

we get

$$
\boxed{
\sqrt{x^2-a^2}=a\tan\theta.
}
$$

---

#### Summary Table

| Radical | Substitution | Identity |
|---|---|---|
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ | $1-\sin^2\theta=\cos^2\theta$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ | $1+\tan^2\theta=\sec^2\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$ | $\sec^2\theta-1=\tan^2\theta$ |

---

#### Example 1: $\sqrt{a^2-x^2}$

Evaluate

$$
\int\sqrt{a^2-x^2}\,dx.
$$

Use

$$
x=a\sin\theta.
$$

Then

$$
dx=a\cos\theta\,d\theta.
$$

The integral becomes

$$
\int
(a\cos\theta)(a\cos\theta)\,d\theta.
$$

Therefore,

$$
=
a^2\int\cos^2\theta\,d\theta.
$$

Use the identity

$$
\cos^2\theta=\frac{1+\cos2\theta}{2}.
$$

Then integrate and substitute back.

---

#### Example 2: $\sqrt{x^2+a^2}$

Evaluate

$$
\int\frac{dx}{\sqrt{x^2+a^2}}.
$$

Use

$$
x=a\tan\theta.
$$

Then

$$
dx=a\sec^2\theta\,d\theta.
$$

The denominator becomes

$$
\sqrt{x^2+a^2}=a\sec\theta.
$$

Therefore,

$$
\int
\frac{a\sec^2\theta}
{a\sec\theta}
\,d\theta
=
\int\sec\theta\,d\theta.
$$

Hence,

$$
=
\ln|\sec\theta+\tan\theta|+C.
$$

Substitute back:

$$
\tan\theta=\frac{x}{a},
$$

and

$$
\sec\theta=\frac{\sqrt{x^2+a^2}}{a}.
$$

Therefore,

$$
\boxed{
\int\frac{dx}{\sqrt{x^2+a^2}}
=
\ln
\left|
x+\sqrt{x^2+a^2}
\right|
+C.
}
$$

---

#### Back Substitution Using Triangles

After substitution, use a right triangle.

Example:

If

$$
x=a\sin\theta,
$$

then

$$
\sin\theta=\frac{x}{a}.
$$

Draw a triangle:

$$
\text{opposite}=x,
$$

$$
\text{hypotenuse}=a.
$$

Therefore,

$$
\cos\theta
=
\frac{\sqrt{a^2-x^2}}{a}.
$$

---

#### When to Use Trigonometric Substitution

Use trigonometric substitution when you see:

$$
\sqrt{a^2-x^2}
$$

or

$$
\sqrt{a^2+x^2}
$$

or

$$
\sqrt{x^2-a^2}.
$$

It is especially useful for:

- Integrals containing square roots.
- Circular and hyperbolic geometry problems.
- Arc length calculations.
- Area and volume problems.

---

#### Common Mistakes

- Choosing the wrong substitution.
- Forgetting to replace $dx$.
- Not simplifying the radical completely.
- Forgetting the absolute value in logarithmic answers.
- Forgetting to substitute back to $x$.

---

#### Key Facts

The three fundamental substitutions are:

$$
\boxed{
x=a\sin\theta
\quad\text{for}\quad
\sqrt{a^2-x^2}
}
$$

$$
\boxed{
x=a\tan\theta
\quad\text{for}\quad
\sqrt{a^2+x^2}
}
$$

$$
\boxed{
x=a\sec\theta
\quad\text{for}\quad
\sqrt{x^2-a^2}
}
$$

The goal is always to transform the radical into a trigonometric identity that can be simplified.#### Trigonometric Substitution

Trigonometric substitution is a technique for evaluating integrals involving radicals of quadratic expressions.

It uses trigonometric identities to simplify expressions involving:

$$
\sqrt{a^2-x^2},
$$

$$
\sqrt{a^2+x^2},
$$

and

$$
\sqrt{x^2-a^2}.
$$

The method replaces algebraic expressions with trigonometric functions whose identities simplify the radical.

---

#### Key Trigonometric Identities

The main identities used are:

$$
\sin^2\theta+\cos^2\theta=1.
$$

$$
1+\tan^2\theta=\sec^2\theta.
$$

$$
\sec^2\theta-1=\tan^2\theta.
$$

---

#### General Strategy

1. Identify the quadratic expression under the square root.

2. Choose a trigonometric substitution.

3. Compute $dx$.

4. Rewrite the integral entirely in terms of $\theta$.

5. Integrate using trigonometric identities.

6. Substitute back using a triangle or inverse trigonometric functions.

---

#### Case 1: $\sqrt{a^2-x^2}$

For expressions of the form

$$
\sqrt{a^2-x^2},
$$

use

$$
\boxed{
x=a\sin\theta.
}
$$

Then

$$
dx=a\cos\theta\,d\theta.
$$

The radical becomes

$$
\sqrt{a^2-x^2}
=
\sqrt{a^2-a^2\sin^2\theta}.
$$

Factor:

$$
=
a\sqrt{1-\sin^2\theta}.
$$

Using

$$
1-\sin^2\theta=\cos^2\theta,
$$

we get

$$
\boxed{
\sqrt{a^2-x^2}=a\cos\theta.
}
$$

---

#### Case 2: $\sqrt{a^2+x^2}$

For expressions of the form

$$
\sqrt{a^2+x^2},
$$

use

$$
\boxed{
x=a\tan\theta.
}
$$

Then

$$
dx=a\sec^2\theta\,d\theta.
$$

The radical becomes

$$
\sqrt{a^2+x^2}
=
\sqrt{a^2+a^2\tan^2\theta}.
$$

Factor:

$$
=
a\sqrt{1+\tan^2\theta}.
$$

Using

$$
1+\tan^2\theta=\sec^2\theta,
$$

we get

$$
\boxed{
\sqrt{a^2+x^2}=a\sec\theta.
}
$$

---

#### Case 3: $\sqrt{x^2-a^2}$

For expressions of the form

$$
\sqrt{x^2-a^2},
$$

use

$$
\boxed{
x=a\sec\theta.
}
$$

Then

$$
dx=a\sec\theta\tan\theta\,d\theta.
$$

The radical becomes

$$
\sqrt{x^2-a^2}
=
\sqrt{a^2\sec^2\theta-a^2}.
$$

Factor:

$$
=
a\sqrt{\sec^2\theta-1}.
$$

Using

$$
\sec^2\theta-1=\tan^2\theta,
$$

we get

$$
\boxed{
\sqrt{x^2-a^2}=a\tan\theta.
}
$$

---

#### Summary Table

| Radical | Substitution | Identity |
|---|---|---|
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ | $1-\sin^2\theta=\cos^2\theta$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ | $1+\tan^2\theta=\sec^2\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$ | $\sec^2\theta-1=\tan^2\theta$ |

---

#### Example 1: $\sqrt{a^2-x^2}$

Evaluate

$$
\int\sqrt{a^2-x^2}\,dx.
$$

Use

$$
x=a\sin\theta.
$$

Then

$$
dx=a\cos\theta\,d\theta.
$$

The integral becomes

$$
\int
(a\cos\theta)(a\cos\theta)\,d\theta.
$$

Therefore,

$$
=
a^2\int\cos^2\theta\,d\theta.
$$

Use the identity

$$
\cos^2\theta=\frac{1+\cos2\theta}{2}.
$$

Then integrate and substitute back.

---

#### Example 2: $\sqrt{x^2+a^2}$

Evaluate

$$
\int\frac{dx}{\sqrt{x^2+a^2}}.
$$

Use

$$
x=a\tan\theta.
$$

Then

$$
dx=a\sec^2\theta\,d\theta.
$$

The denominator becomes

$$
\sqrt{x^2+a^2}=a\sec\theta.
$$

Therefore,

$$
\int
\frac{a\sec^2\theta}
{a\sec\theta}
\,d\theta
=
\int\sec\theta\,d\theta.
$$

Hence,

$$
=
\ln|\sec\theta+\tan\theta|+C.
$$

Substitute back:

$$
\tan\theta=\frac{x}{a},
$$

and

$$
\sec\theta=\frac{\sqrt{x^2+a^2}}{a}.
$$

Therefore,

$$
\boxed{
\int\frac{dx}{\sqrt{x^2+a^2}}
=
\ln
\left|
x+\sqrt{x^2+a^2}
\right|
+C.
}
$$

---

#### Back Substitution Using Triangles

After substitution, use a right triangle.

Example:

If

$$
x=a\sin\theta,
$$

then

$$
\sin\theta=\frac{x}{a}.
$$

Draw a triangle:

$$
\text{opposite}=x,
$$

$$
\text{hypotenuse}=a.
$$

Therefore,

$$
\cos\theta
=
\frac{\sqrt{a^2-x^2}}{a}.
$$

---

#### When to Use Trigonometric Substitution

Use trigonometric substitution when you see:

$$
\sqrt{a^2-x^2}
$$

or

$$
\sqrt{a^2+x^2}
$$

or

$$
\sqrt{x^2-a^2}.
$$

It is especially useful for:

- Integrals containing square roots.
- Circular and hyperbolic geometry problems.
- Arc length calculations.
- Area and volume problems.

---

#### Common Mistakes

- Choosing the wrong substitution.
- Forgetting to replace $dx$.
- Not simplifying the radical completely.
- Forgetting the absolute value in logarithmic answers.
- Forgetting to substitute back to $x$.

---

#### Key Facts

The three fundamental substitutions are:

$$
\boxed{
x=a\sin\theta
\quad\text{for}\quad
\sqrt{a^2-x^2}
}
$$

$$
\boxed{
x=a\tan\theta
\quad\text{for}\quad
\sqrt{a^2+x^2}
}
$$

$$
\boxed{
x=a\sec\theta
\quad\text{for}\quad
\sqrt{x^2-a^2}
}
$$

The goal is always to transform the radical into a trigonometric identity that can be simplified.