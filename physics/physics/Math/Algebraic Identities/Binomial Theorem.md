

#### Binomial Theorem

For any positive integer (n),
$$  
(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k  
$$
or explicitly,
$$  
(a+b)^n

a^n+\binom{n}{1}a^{n-1}b+\binom{n}{2}a^{n-2}b^2+\cdots+b^n.  
$$

---

#### Binomial Coefficients
 $$  
\binom{n}{k}

\frac{n!}{k!(n-k)!}.  
$$

Properties:

$$  
\binom{n}{k}

\binom{n}{n-k}  
$$

and

$$  
\binom{n}{k}

\binom{n-1}{k-1}  
+  
\binom{n-1}{k}.  
$$

(Pascal's Identity)

---

#### General Term

The ((k+1))-st term is
$$  
T_{k+1}

\binom{n}{k}a^{,n-k}b^k.  
$$

---

#### Pascal's Triangle

Coefficients of ((a+b)^n):

$$  
\begin{aligned}  
n=0 &: \quad 1\  
n=1 &: \quad 1;;1\  
n=2 &: \quad 1;;2;;1\  
n=3 &: \quad 1;;3;;3;;1\  
n=4 &: \quad 1;;4;;6;;4;;1\  
n=5 &: \quad 1;;5;;10;;10;;5;;1  
\end{aligned}  
$$

---

#### Common Expansions

$$  
(a+b)^2=a^2+2ab+b^2  
$$

$$  
(a+b)^3=a^3+3a^2b+3ab^2+b^3  
$$$$  
(a-b)^n

\sum_{k=0}^{n}  
(-1)^k  
\binom{n}{k}  
a^{n-k}b^k.  
$$

---
#### Sums of Coefficients

Setting (a=b=1):

$$  
\sum_{k=0}^{n}\binom{n}{k}=2^n.  
$$

Setting (a=1,; b=-1):

$$  
\sum_{k=0}^{n}(-1)^k\binom{n}{k}=0  
\qquad (n\ge1).  
$$

---

#### Newton's Generalized Binomial Theorem

For any real (or complex) exponent $r$,
$$  
(1+x)^r

1+rx+\frac{r(r-1)}{2!}x^2  
+\frac{r(r-1)(r-2)}{3!}x^3+\cdots,  
$$

valid for

$$  
|x|<1.  
$$

General coefficient:
$$  
\binom{r}{k}

\frac{r(r-1)\cdots(r-k+1)}{k!}.  
$$

Thus
$$  
(1+x)^r

\sum_{k=0}^{\infty}  
\binom{r}{k}x^k.  
$$

---

#### Useful Special Cases

 $$  
\frac{1}{1-x}

1+x+x^2+x^3+\cdots  
$$

$$  
\sqrt{1+x}

1+\frac12x-\frac18x^2+\frac1{16}x^3-\cdots  
$$

$$  
\frac{1}{\sqrt{1-x}}

1+\frac12x+\frac38x^2+\frac5{16}x^3+\cdots  
$$

for $|x|<1$.