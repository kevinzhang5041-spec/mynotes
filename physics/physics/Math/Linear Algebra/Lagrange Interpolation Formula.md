

Given $n+1$ distinct points:

$$
(x_0,y_0),(x_1,y_1),...,(x_n,y_n)
$$

there exists a unique polynomial $f(x)$ of degree at most $n$ such that:

$$
f(x_i)=y_i
$$

The polynomial is:

$$
f(x)=\sum_{i=0}^{n} y_iL_i(x)
$$

where the Lagrange basis polynomials are:

$$
L_i(x)=\prod_{j\neq i}\frac{x-x_j}{x_i-x_j}
$$

Properties of basis polynomials:

$$
L_i(x_j)=
\begin{cases}
1,& i=j\\
0,& i\neq j
\end{cases}
$$

Meaning each $L_i(x)$ "turns on" only at its own data point.

Example for four points:

$$
(x_0,y_0),(x_1,y_1),(x_2,y_2),(x_3,y_3)
$$

$$
f(x)=y_0L_0(x)+y_1L_1(x)+y_2L_2(x)+y_3L_3(x)
$$

with:

$$
L_0(x)=
\frac{(x-x_1)(x-x_2)(x-x_3)}
{(x_0-x_1)(x_0-x_2)(x_0-x_3)}
$$

and similarly for $L_1,L_2,L_3$.

Steps to solve:
1. List the points $(x_i,y_i)$.
2. Construct each $L_i(x)$.
3. Multiply each by its corresponding $y_i$.
4. Add all terms.
5. Simplify to obtain $f(x)$.

Degree:

$$
\deg(f)\leq n
$$

The interpolation is unique because a degree $\le n$ polynomial is completely determined by $n+1$ distinct points.