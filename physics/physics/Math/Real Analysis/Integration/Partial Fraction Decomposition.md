Partial fraction decomposition is a technique for rewriting a rational function as a sum of simpler fractions.

It is used to evaluate integrals of rational functions, solve differential equations, and simplify algebraic expressions.

---

#### Rational Functions

A rational function has the form

$$
\frac{P(x)}{Q(x)},
$$

where $P(x)$ and $Q(x)$ are polynomials.

If

$$
\deg(P)<\deg(Q),
$$

the fraction is called a proper rational function.

If

$$
\deg(P)\geq \deg(Q),
$$

first perform polynomial long division.

---

#### Basic Idea

A complicated rational expression can be decomposed as

$$
\boxed{
\frac{P(x)}{Q(x)}
=
\frac{A_1}{x-a_1}
+
\frac{A_2}{x-a_2}
+\cdots
+
\frac{A_n}{x-a_n}.
}
$$

The goal is to determine the constants.

---

#### Linear Factors

Suppose the denominator factors as

$$
Q(x)=(x-a)(x-b).
$$

Then write

$$
\frac{P(x)}{(x-a)(x-b)}
=
\frac{A}{x-a}
+
\frac{B}{x-b}.
$$

Multiply both sides by $(x-a)(x-b)$:

$$
P(x)=A(x-b)+B(x-a).
$$

Solve for $A$ and $B$.

---

#### Example 1: Distinct Linear Factors

Decompose

$$
\frac{5x+1}{(x-1)(x+2)}.
$$

Write

$$
\frac{5x+1}{(x-1)(x+2)}
=
\frac{A}{x-1}
+
\frac{B}{x+2}.
$$

Multiply by $(x-1)(x+2)$:

$$
5x+1=A(x+2)+B(x-1).
$$

Set

$$
x=1:
$$

$$
6=3A,
$$

so

$$
A=2.
$$

Set

$$
x=-2:
$$

$$
-9=-3B,
$$

so

$$
B=3.
$$

Therefore,

$$
\boxed{
\frac{5x+1}{(x-1)(x+2)}
=
\frac{2}{x-1}
+
\frac{3}{x+2}.
}
$$

---

#### Repeated Linear Factors

If a factor is repeated,

$$
(x-a)^n,
$$

include every power:

$$
\boxed{
\frac{P(x)}{(x-a)^n}
=
\frac{A_1}{x-a}
+
\frac{A_2}{(x-a)^2}
+\cdots+
\frac{A_n}{(x-a)^n}.
}
$$

---

#### Example 2: Repeated Factor

Decompose

$$
\frac{1}{x^2(x+1)}.
$$

Write

$$
\frac{1}{x^2(x+1)}
=
\frac{A}{x}
+
\frac{B}{x^2}
+
\frac{C}{x+1}.
$$

Multiply by $x^2(x+1)$:

$$
1=Ax(x+1)+B(x+1)+Cx^2.
$$

Solve for $A,B,C$.

---

#### Irreducible Quadratic Factors

If the denominator contains an irreducible quadratic,

$$
x^2+bx+c,
$$

use a linear numerator:

$$
\boxed{
\frac{Ax+B}{x^2+bx+c}.
}
$$

Example:

$$
\frac{P(x)}
{(x-1)(x^2+1)}
=
\frac{A}{x-1}
+
\frac{Bx+C}{x^2+1}.
$$

---

#### General Forms

##### Distinct Linear Factors

$$
Q(x)=(x-a_1)(x-a_2)\cdots(x-a_n)
$$

gives

$$
\frac{P(x)}{Q(x)}
=
\sum_{i=1}^n\frac{A_i}{x-a_i}.
$$

---

##### Repeated Linear Factors

$$
Q(x)=(x-a)^n
$$

gives

$$
\frac{P(x)}{Q(x)}
=
\frac{A_1}{x-a}
+
\frac{A_2}{(x-a)^2}
+\cdots+
\frac{A_n}{(x-a)^n}.
$$

---

##### Quadratic Factors

For

$$
Q(x)=x^2+bx+c,
$$

use

$$
\frac{Ax+B}{x^2+bx+c}.
$$

---

#### Partial Fractions in Integration

Partial fractions simplify rational integrals.

Example:

$$
\int
\frac{5x+1}{(x-1)(x+2)}
\,dx.
$$

Using decomposition,

$$
=
\int
\left(
\frac{2}{x-1}
+
\frac{3}{x+2}
\right)
dx.
$$

Therefore,

$$
\boxed{
=
2\ln|x-1|
+
3\ln|x+2|
+
C.
}
$$

---

#### Cover-Up Method

For distinct linear factors,

$$
\frac{A}{x-a}
$$

can be found by covering the factor:

$$
A=
\left.
\frac{P(x)}{Q(x)/(x-a)}
\right|_{x=a}.
$$

Example:

$$
\frac{5x+1}{(x-1)(x+2)}
$$

For $A$:

$$
A=
\frac{5(1)+1}{1+2}
=
2.
$$

For $B$:

$$
B=
\frac{5(-2)+1}{-2-1}
=
3.
$$

---

#### Steps for Partial Fraction Decomposition

1. Make sure the fraction is proper.

2. Factor the denominator completely.

3. Write the correct decomposition form.

4. Multiply by the common denominator.

5. Solve for the unknown constants.

6. Integrate or simplify.

---

#### Common Mistakes

- Forgetting polynomial division when the fraction is improper.
- Using constants instead of linear expressions for quadratic factors.
- Missing repeated factor terms.
- Not factoring the denominator completely.
- Forgetting absolute values in logarithmic integrals.

---

#### Key Facts

- Partial fractions split rational functions into simpler pieces.
- Each linear factor gets a constant numerator.
- Each quadratic factor gets a linear numerator.
- Repeated factors require every power.
- The main goal is to reduce complicated fractions into integrable pieces.

$$
\boxed{
\frac{P(x)}{Q(x)}
\longrightarrow
\text{simpler fractions}
\longrightarrow
\text{easier integration}.
}
$$