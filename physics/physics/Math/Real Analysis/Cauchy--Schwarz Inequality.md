The **Cauchy--Schwarz inequality** is one of the most fundamental inequalities in mathematics. It provides an upper bound for the inner product of two vectors and is a cornerstone of linear algebra, analysis, probability, and geometry.

---

#### Statement (Finite Sums)

For any real or complex numbers

$$  
a_1,\ldots,a_n,\qquad  
b_1,\ldots,b_n,  
$$

we have

$$  
\boxed{  
\left|\sum_{i=1}^n a_ib_i\right|  
\le  
\left(\sum_{i=1}^n |a_i|^2\right)^{1/2}  
\left(\sum_{i=1}^n |b_i|^2\right)^{1/2}.  
}  
$$

In vector notation,

$$  
\boxed{  
|\langle x,y\rangle|  
\le  
|x|,|y|.  
}  
$$

---

#### Inner Product Form

In any inner product space,

$$  
\boxed{  
|\langle x,y\rangle|^2  
\le  
\langle x,x\rangle  
\langle y,y\rangle.  
}  
$$

This is the most general form of the inequality.

---

#### Integral Form

If $f,g\in L^2[a,b]$, then

$$  
\boxed{  
\left|  
\int_a^b f(x)g(x),dx  
\right|  
\le  
\left(  
\int_a^b |f(x)|^2dx  
\right)^{1/2}  
\left(  
\int_a^b |g(x)|^2dx  
\right)^{1/2}.  
}  
$$

---

#### Infinite Series Form

If

$$  
\sum a_n^2<\infty,  
\qquad  
\sum b_n^2<\infty,  
$$

then

$$  
\boxed{  
\left|  
\sum a_nb_n  
\right|  
\le  
\left(\sum a_n^2\right)^{1/2}  
\left(\sum b_n^2\right)^{1/2}.  
}  
$$

---

#### Proof Using Quadratic Polynomials

For any real number $t$,

$$  
0  
\le  
\sum (a_i-tb_i)^2.  
$$

Expanding,

$$  
0  
\le  
\sum a_i^2

2t\sum a_ib_i  
+  
t^2\sum b_i^2.  
$$

This quadratic in $t$ is always nonnegative, so its discriminant is nonpositive:

$$  
\Delta
=
4\left(\sum a_ib_i\right)^2
-
4\left(\sum a_i^2\right)  
\left(\sum b_i^2\right)  
\le0.  
$$

Hence,

$$  
\boxed{  
\left(\sum a_ib_i\right)^2  
\le  
\left(\sum a_i^2\right)  
\left(\sum b_i^2\right).  
}  
$$

Taking square roots gives the result.

---

#### Alternative Proof via Hölder

[[Hölder's Inequality|Hölder's inequality]] with

$$  
p=q=2  
$$

gives

$$  
\sum |a_ib_i|  
\le  
\left(\sum a_i^2\right)^{1/2}  
\left(\sum b_i^2\right)^{1/2},  
$$

which is exactly the Cauchy--Schwarz inequality.

---

#### Equality Condition

Equality holds iff the vectors are linearly dependent.

That is,

$$  
\boxed{  
a_i=\lambda b_i  
\quad  
\text{for all }i,  
}  
$$

for some constant $\lambda$.

---

#### Geometric Interpretation

For vectors $x,y$,

# $$  
\langle x,y\rangle

|x||y|\cos\theta.  
$$

Since

$$  
|\cos\theta|\le1,  
$$

we obtain

$$  
|\langle x,y\rangle|  
\le  
|x||y|.  
$$

Thus Cauchy--Schwarz expresses the fact that the cosine of an angle lies between $-1$ and $1$.

---

#### Norm Inequality

Since

$$  
|\langle x,y\rangle|  
\le  
|x||y|,  
$$

the projection of one vector onto another never exceeds its length.

---

#### Important Corollaries

##### Triangle Inequality

Using Cauchy--Schwarz,

$$  
\boxed{  
|x+y|  
\le  
|x|+|y|.  
}  
$$

---

##### Arithmetic Mean--Quadratic Mean

Applying Cauchy--Schwarz to

$$  
(1,\ldots,1)  
\quad\text{and}\quad  
(a_1,\ldots,a_n),  
$$

gives

$$  
\boxed{  
\left(\sum a_i\right)^2  
\le  
n\sum a_i^2.  
}  
$$

Equivalently,

$$  
\boxed{  
\frac{a_1+\cdots+a_n}{n}  
\le  
\sqrt{\frac{a_1^2+\cdots+a_n^2}{n}}.  
}  
$$

---

##### Estimate for Sums

$$  
\boxed{  
\left|  
\sum a_i  
\right|  
\le  
\sqrt{n}  
\left(\sum a_i^2\right)^{1/2}.  
}  
$$

---

##### Integral Estimate

For continuous functions,

$$  
\left(  
\int_a^b f(x),dx  
\right)^2  
\le  
(b-a)  
\int_a^b f(x)^2dx.  
$$

---

##### Variance is Nonnegative

Applying Cauchy--Schwarz,

$$  
\left(\sum x_i\right)^2  
\le  
n\sum x_i^2,  
$$

which implies

$$  
\sum (x_i-\bar x)^2\ge0.  
$$

---

#### Applications

Cauchy--Schwarz is used to:

- Prove the triangle inequality.
    
- Bound sums and integrals.
    
- Estimate series.
    
- Establish norm inequalities.
    
- Prove AM--QM and RMS inequalities.
    
- Derive inequalities in probability and statistics.
    
- Solve Olympiad inequalities involving sums of products.
    
- Analyze angles and projections in vector spaces.
    

---

#### Generalizations

- Hölder's inequality:
    
    $$  
    \boxed{  
    \sum |a_ib_i|  
    \le  
    \left(\sum |a_i|^p\right)^{1/p}  
    \left(\sum |b_i|^q\right)^{1/q}.  
    }  
    $$
    
- Minkowski's inequality:
    
    $$  
    \boxed{  
    |x+y|_p  
    \le  
    |x|_p+|y|_p.  
    }  
    $$
    
- Bessel's inequality.
    
- Jensen's inequality (different setting).
    

---

#### Relationships

$$  
\boxed{  
\text{Young}  
\Longrightarrow  
\text{Hölder}  
\Longrightarrow  
\text{Cauchy--Schwarz }(p=q=2).  
}  
$$

and

$$  
\boxed{  
\text{Cauchy--Schwarz}  
\Longrightarrow  
\text{Triangle Inequality}.  
}  
$$

---

#### Common Forms

For vectors,

$$  
|\langle x,y\rangle|  
\le  
|x||y|.  
$$

For sums,

$$  
\left(\sum a_ib_i\right)^2  
\le  
\left(\sum a_i^2\right)  
\left(\sum b_i^2\right).  
$$

For integrals,

$$  
\left|  
\int fg  
\right|  
\le  
\left(\int f^2\right)^{1/2}  
\left(\int g^2\right)^{1/2}.  
$$

For expectations,

$$  
\boxed{  
|E[XY]|  
\le  
\sqrt{E[X^2],E[Y^2]}.  
}  
$$

---

#### Key Facts to Remember

- Cauchy--Schwarz bounds an inner product by the product of norms.
    
- It is equivalent to
    
    $$  
    |\cos\theta|\le1.  
    $$
    
- Equality holds iff the vectors are linearly dependent.
    
- It is the special case of Hölder's inequality with
    
    $$  
    p=q=2.  
    $$
    
- It is one of the most frequently used inequalities in mathematics and underlies the geometry of Euclidean and Hilbert spaces.