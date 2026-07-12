Hölder's inequality is one of the most important inequalities in analysis. It generalizes the Cauchy--Schwarz inequality and is fundamental in the theory of $L^p$ spaces.

---

#### Conjugate Exponents

Two positive numbers $p,q>1$ are called **conjugate exponents** if

$$  
\frac1p+\frac1q=1.  
$$

Equivalently,

$$  
q=\frac{p}{p-1},  
\qquad  
p=\frac{q}{q-1}.  
$$

Examples:

|$p$|$q$|
|---|---|
|$2$|$2$|
|$3$|$\frac32$|
|$4$|$\frac43$|
|$\frac32$|$3$|

---

#### Hölder's Inequality (Finite Sums)

Let $a_1,\ldots,a_n,b_1,\ldots,b_n\in\mathbb R$, and let $p,q>1$ satisfy

$$  
\frac1p+\frac1q=1.  
$$

Then

$$  
\boxed{  
\sum_{i=1}^n |a_ib_i|  
\le  
\left(\sum_{i=1}^n |a_i|^p\right)^{1/p}  
\left(\sum_{i=1}^n |b_i|^q\right)^{1/q}.  
}  
$$

---

#### Integral Form

If $f\in L^p$ and $g\in L^q$, then

$$  
\boxed{  
\int |fg|  
\le  
\left(\int |f|^p\right)^{1/p}  
\left(\int |g|^q\right)^{1/q}.  
}  
$$

---

#### Special Case: Cauchy--Schwarz

Choosing

$$  
p=q=2,  
$$

Hölder becomes

$$  
\sum |a_ib_i|  
\le  
\sqrt{\sum a_i^2}  
\sqrt{\sum b_i^2},  
$$

which is exactly the **Cauchy--Schwarz inequality**.

Thus,

$$  
\boxed{\text{Cauchy--Schwarz is Hölder with }p=q=2.}  
$$

---

#### Young's Inequality

The proof of Hölder relies on **Young's inequality**.

If

$$  
\frac1p+\frac1q=1,  
$$

then for all $x,y\ge0$,

$$  
\boxed{  
xy  
\le  
\frac{x^p}{p}  
+  
\frac{y^q}{q}.  
}  
$$

Equality holds iff

$$  
x^p=y^q.  
$$

---

#### Proof of Hölder

Let

$$  
A=\left(\sum |a_i|^p\right)^{1/p},  
\qquad  
B=\left(\sum |b_i|^q\right)^{1/q}.  
$$

If either is zero, the result is immediate.

Define

$$  
x_i=\frac{|a_i|}{A},  
\qquad  
y_i=\frac{|b_i|}{B}.  
$$

Then

$$  
\sum x_i^p=1,  
\qquad  
\sum y_i^q=1.  
$$

Applying Young's inequality,

$$  
x_iy_i  
\le  
\frac{x_i^p}{p}  
+  
\frac{y_i^q}{q}.  
$$

Summing,

# $$  
\sum x_iy_i  
\le  
\frac1p\sum x_i^p  
+  
\frac1q\sum y_i^q

\frac1p+\frac1q  
=1.  
$$

Multiplying by $AB$ gives

$$  
\sum |a_ib_i|  
\le AB,  
$$

which is Hölder's inequality.

---

#### Equality Condition

Equality holds iff

$$  
|a_i|^p=c|b_i|^q  
$$

for some constant $c>0$ and every index with $a_ib_i\neq0$.

Equivalently,

# $$  
|a_i|^{p-1}

k|b_i|  
$$

for some constant $k$.

---

#### Weighted Form

For nonnegative weights $w_i$,

$$  
\sum w_i|a_ib_i|  
\le  
\left(\sum w_i|a_i|^p\right)^{1/p}  
\left(\sum w_i|b_i|^q\right)^{1/q}.  
$$

---

#### Infinite Series Form

If

$$  
\sum |a_n|^p<\infty,  
\qquad  
\sum |b_n|^q<\infty,  
$$

then

$$  
\sum |a_nb_n|  
\le  
\left(\sum |a_n|^p\right)^{1/p}  
\left(\sum |b_n|^q\right)^{1/q}.  
$$

---

#### Important Corollaries

##### Cauchy--Schwarz

$$  
\sum a_ib_i  
\le  
\sqrt{\sum a_i^2}  
\sqrt{\sum b_i^2}.  
$$

---

##### Triangle Inequality in $L^p$ (Minkowski)

Using Hölder,

$$  
\boxed{  
\left(\sum |a_i+b_i|^p\right)^{1/p}  
\le  
\left(\sum |a_i|^p\right)^{1/p}  
+  
\left(\sum |b_i|^p\right)^{1/p}.  
}  
$$

Thus Hölder is the key ingredient in proving Minkowski's inequality.

---

##### Dual Norm Formula

For any vector $x$,

# $$  
\sup_{|y|_q=1}  
\sum x_iy_i

|x|_p.  
$$

This characterizes the duality between the $p$-norm and the $q$-norm.

---

#### Applications

Hölder is commonly used to:

- Bound sums and integrals involving products.
    
- Prove convergence of improper integrals and infinite series.
    
- Estimate norms in $L^p$ spaces.
    
- Prove Minkowski's inequality.
    
- Establish norm inequalities in functional analysis.
    
- Derive Sobolev and interpolation inequalities.
    
- Solve Olympiad inequalities involving products and powers.
    

---

#### Common Choices of Exponents

|$p$|$q$|Inequality|
|---|---|---|
|$2$|$2$|Cauchy--Schwarz|
|$3$|$\frac32$|Cubic estimates|
|$4$|$\frac43$|Quartic estimates|
|$\infty$|$1$|$\sum|

---

#### Relationships with Other Inequalities

$$  
\boxed{  
\text{Young}  
\Longrightarrow  
\text{Hölder}  
\Longrightarrow  
\text{Minkowski}.  
}  
$$

Also,
 $$  
\boxed{  
\text{Cauchy--Schwarz}

\text{Hölder with }p=q=2.  
}  
$$

---

#### Key Facts to Remember

- Conjugate exponents satisfy
    
    $$  
    \frac1p+\frac1q=1.  
    $$
    
- Hölder bounds the product of two sequences by their $p$- and $q$-norms.
    
- It generalizes Cauchy--Schwarz.
    
- The proof is a normalization argument combined with Young's inequality.
    
- Equality occurs when
    
    $$  
    |a_i|^p\propto |b_i|^q.  
    $$
    
- Hölder is one of the three cornerstone inequalities of analysis:
    
    $$  
    \boxed{  
    \text{Young}  
    \Longrightarrow  
    \text{Hölder}  
    \Longrightarrow  
    \text{Minkowski}.  
    }$$