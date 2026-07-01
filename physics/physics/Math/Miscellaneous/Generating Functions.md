
## Definition

For a sequence

$$  
a_0,a_1,a_2,\dots  
$$

its **ordinary generating function (OGF)** is

$$  
G(x)=\sum_{n=0}^{\infty}a_nx^n.  
$$

The coefficient of $$x^n$$ is $$a_n.$$

Notation:

$$  
[x^n]G(x)=a_n.  
$$

---

# Basic Generating Functions

### Constant sequence

Sequence:

$$  
1,1,1,\dots  
$$

Generating function:

# $$  
\frac{1}{1-x}

\sum_{n=0}^{\infty}x^n.  
$$

---

### Geometric sequence

Sequence:

$$  
1,r,r^2,\dots  
$$

Generating function:

# $$  
\frac{1}{1-rx}

\sum_{n=0}^{\infty}r^nx^n.  
$$

---

### Natural numbers

Sequence:

$$  
0,1,2,3,\dots  
$$

Generating function:

# $$  
\frac{x}{(1-x)^2}

\sum_{n=0}^{\infty}nx^n.  
$$

---

### Consecutive integers

Sequence:

$$  
1,2,3,\dots  
$$

Generating function:

# $$  
\frac{1}{(1-x)^2}

\sum_{n=0}^{\infty}(n+1)x^n.  
$$

---

### Squares

Sequence:

$$  
0,1,4,9,\dots  
$$

Generating function:

# $$  
\frac{x(x+1)}{(1-x)^3}

\sum_{n=0}^{\infty}n^2x^n.  
$$

---

# Common Operations

## Addition

If

$$  
A(x)=\sum a_nx^n,  
\qquad  
B(x)=\sum b_nx^n,  
$$

then

# $$  
A(x)+B(x)

\sum(a_n+b_n)x^n.  
$$

---

## Multiplication by $$x$$

If

$$  
A(x)=\sum_{n=0}^{\infty}a_nx^n,  
$$

then

# $$  
xA(x)

\sum_{n=1}^{\infty}a_{n-1}x^n.  
$$

This shifts the sequence one place to the right.

---

## Multiplication by $$x^k$$

# $$  
x^kA(x)

\sum_{n=k}^{\infty}a_{n-k}x^n.  
$$

---

## Differentiation

If

$$  
A(x)=\sum_{n=0}^{\infty}a_nx^n,  
$$

then

# $$  
A'(x)

\sum_{n=1}^{\infty}na_nx^{n-1}.  
$$

Useful for sums involving

$$  
na_n.  
$$

Example:

# $$  
(1+x)^n

\sum_{k=0}^{n}\binom nkx^k.  
$$

Differentiate:

# $$  
n(1+x)^{n-1}

\sum_{k=1}^{n}  
k\binom nkx^{k-1}.  
$$

Setting

$$  
x=1  
$$

gives

# $$  
\sum_{k=1}^{n}  
k\binom nk

n2^{n-1}.  
$$

---

## Integration

Integrating gives

# $$  
\int A(x),dx

\sum_{n=0}^{\infty}  
\frac{a_n}{n+1}x^{n+1}.  
$$

Useful for sums involving

$$  
\frac{a_n}{n+1}.  
$$

Example:

# $$  
\int(1+x)^ndx

\sum_{k=0}^{n}  
\frac1{k+1}\binom nkx^{k+1}.  
$$

Setting

$$  
x=1  
$$

gives

# $$  
\sum_{k=0}^{n}  
\frac1{k+1}\binom nk

\frac{2^{n+1}-1}{n+1}.  
$$

---

# Product of Generating Functions

If

$$  
A(x)=\sum a_nx^n,  
$$

and

$$  
B(x)=\sum b_nx^n,  
$$

then

# $$  
A(x)B(x)

\sum_{n=0}^{\infty}  
\left(  
\sum_{k=0}^{n}  
a_kb_{n-k}  
\right)x^n.  
$$

The coefficient of $$x^n$$ is

$$  
\sum_{k=0}^{n}  
a_kb_{n-k}.  
$$

This is called the **Cauchy product** (or convolution).

---

# Finding Coefficients

If

$$  
F(x)=\frac1{1-ax},  
$$

then

$$  
[x^n]F(x)=a^n.  
$$

Example:

$$  
[x^5]\frac1{1-3x}=3^5.  
$$

---

# Partial Fractions

When

# $$  
G(x)

\frac1{(1-ax)(1-bx)},  
$$

write

# $$  
G(x)

\frac{A}{1-ax}  
+  
\frac{B}{1-bx}.  
$$

Since

# $$  
\frac1{1-cx}

\sum_{n=0}^{\infty}c^nx^n,  
$$

the coefficient of $$x^n$$ becomes

$$  
Aa^n+Bb^n.  
$$

Useful for solving recurrences.

---

# Solving Recurrences

Example:

$$  
y_n=ay_{n-1}+b^n,  
\qquad  
y_0=1.  
$$

Let

$$  
G(x)=\sum y_nx^n.  
$$

Then
 $$  
(1-ax)G(x)
=
\frac1{1-bx}.  
$$

Hence
 $$  
G(x)
=
\frac1{(1-ax)(1-bx)}.  
$$

Using partial fractions,
$$  
G(x)=
\frac{a}{a-b}\cdot\frac1{1-ax}
-
\frac{b}{a-b}\cdot\frac1{1-bx}.  
$$

Therefore
 $$  
\boxed{  
y_n =

\frac{a^{n+1}-b^{n+1}}{a-b}.  
}  
$$

---

# Catalan Numbers

Catalan numbers satisfy
$$  
C_0=1,  
$$
and $$  
C_n

\sum_{k=0}^{n-1}  
C_kC_{n-k-1}.  
$$

Generating function:
$$  
G(x)

\sum_{n=0}^{\infty}C_nx^n.  
$$
Then
$$  
G(x)

1+xG(x)^2.  
$$

Solving,
$$  
G(x)

\frac{1-\sqrt{1-4x}}{2x}.  
$$

Expanding gives
$$  
\boxed{  
C_n =

\frac1{n+1}  
\binom{2n}{n}.  
}  
$$

---

# Binomial Theorem
 $$  
(1+x)^n

\sum_{k=0}^{n}  
\binom nkx^k.  
$$

Coefficient:
$$  
[x^k](1+x)^n

\binom nk.  
$$

Useful substitutions:
 $$  
x=1  
\quad\Rightarrow\quad  
\sum_{k=0}^{n}\binom nk

2^n.  
$$
$$  
x=-1  
\quad\Rightarrow\quad  
\sum_{k=0}^{n}  
(-1)^k\binom nk

$$

---

# Vandermonde Identity

Multiply

$$  
(1+x)^m  
$$

and

$$  
(1+x)^n.  
$$

Comparing coefficients of $x^k$ gives
$$  
\boxed{  
\binom{m+n}{k}

\sum_{j=0}^{k}  
\binom mj  
\binom n{k-j}.  
}  
$$

---

# General Strategy

When asked to:

- find a recurrence → define a generating function.
    
- solve a recurrence → derive a functional equation for the generating function.
    
- evaluate sums → differentiate, integrate, or substitute values into a known generating function.
    
- prove identities → compare coefficients of the same power of $x$ in two equal generating functions.
    
- evaluate convolutions → multiply generating functions and compare coefficients.
- Find an equivalent expression for a coefficient of a term in a sequence and simplify.