
Minkowski's inequality is the triangle inequality for $L^p$ norms. It generalizes the ordinary triangle inequality in Euclidean space.

---

#### Statement

For $p \ge 1$ and real (or complex) numbers $a_i,b_i$,

$$  
\left(\sum_{i=1}^{n}|a_i+b_i|^p\right)^{1/p}  
\le  
\left(\sum_{i=1}^{n}|a_i|^p\right)^{1/p}  
+  
\left(\sum_{i=1}^{n}|b_i|^p\right)^{1/p}.  
$$

In norm notation,

$$  
|a+b|_p\le |a|_p+|b|_p.  
$$

---

#### Equality Condition

If $p>1$, equality holds iff the vectors are positively proportional:

$$  
a_i=\lambda b_i  
\quad\text{for all }i,  
\qquad  
\lambda\ge0,  
$$

or one vector is zero.

---

#### Special Cases

##### $p=1$

$$  
\sum |a_i+b_i|  
\le  
\sum |a_i|  
+  
\sum |b_i|,  
$$

which is just the ordinary triangle inequality.

##### $p=2$

$$  
\sqrt{\sum (a_i+b_i)^2}  
\le  
\sqrt{\sum a_i^2}  
+  
\sqrt{\sum b_i^2},  
$$

the Euclidean triangle inequality.

---

#### Continuous Version

For measurable functions,

$$  
\left(\int |f+g|^p\right)^{1/p}  
\le  
\left(\int |f|^p\right)^{1/p}  
+  
\left(\int |g|^p\right)^{1/p},  
\qquad p\ge1.  
$$

---

#### Proof (Using Hölder's Inequality)

Let

$$  
M=\left(\sum |a_i+b_i|^p\right)^{1/p}.  
$$

If $M=0$, the result is trivial.

Using

$$  
|a_i+b_i|  
\le  
|a_i|+|b_i|,  
$$

we obtain

# $$  
M^p

# \sum |a_i+b_i|^p

\sum |a_i+b_i|^{p-1}|a_i+b_i|  
$$

$$  
\le  
\sum |a_i||a_i+b_i|^{p-1}  
+  
\sum |b_i||a_i+b_i|^{p-1}.  
$$

Apply Hölder's inequality with exponents

$$  
p,\qquad  
q=\frac{p}{p-1}.  
$$

For the first sum,

$$  
\sum |a_i||a_i+b_i|^{p-1}  
\le  
\left(\sum |a_i|^p\right)^{1/p}  
\left(\sum (|a_i+b_i|^{p-1})^q\right)^{1/q}.  
$$

Since

# $$  
(p-1)q

# (p-1)\frac{p}{p-1}

p,  
$$

we have

# $$  
\left(\sum (|a_i+b_i|^{p-1})^q\right)^{1/q}

# \left(\sum |a_i+b_i|^p\right)^{(p-1)/p}

M^{p-1}.  
$$

Thus,

$$  
\sum |a_i||a_i+b_i|^{p-1}  
\le  
|a|_p,M^{p-1}.  
$$

Similarly,

$$  
\sum |b_i||a_i+b_i|^{p-1}  
\le  
|b|_p,M^{p-1}.  
$$

Hence,

$$  
M^p  
\le  
(|a|_p+|b|_p)M^{p-1}.  
$$

Since $M>0$, divide by $M^{p-1}$:

$$  
M  
\le  
|a|_p+|b|_p,  
$$

which is exactly Minkowski's inequality.

---

#### Geometric Interpretation

The $L^p$ norm behaves like a distance:

$$  
|x+y|_p  
\le  
|x|_p+|y|_p.  
$$

This is precisely the triangle inequality in the vector space equipped with the $L^p$ norm.

---

#### Relationship with Hölder

Hölder's inequality:

$$  
\sum |a_ib_i|  
\le  
\left(\sum |a_i|^p\right)^{1/p}  
\left(\sum |b_i|^q\right)^{1/q},  
\qquad  
\frac1p+\frac1q=1.  
$$

↓

Used in the proof of Minkowski.

↓

Minkowski's inequality:

$$  
|a+b|_p  
\le  
|a|_p+|b|_p.  
$$

---

#### Common Uses

- Proving that $L^p$ is a normed vector space.
    
- Establishing metric properties of $L^p$ spaces.
    
- Functional analysis.
    
- Probability theory (moments of random variables).
    
- Real analysis and measure theory.
    
- Bounding sums and integrals in inequalities.
    

---

#### Common Strategy for Olympiad Problems

If an expression has the form

$$  
\left(\sum |x_i+y_i|^p\right)^{1/p},  
$$

or

$$  
\left(\int |f+g|^p\right)^{1/p},  
$$

consider applying Minkowski directly.

If the problem instead involves products,

$$  
\sum |x_iy_i|,  
$$

Hölder is usually the correct tool.