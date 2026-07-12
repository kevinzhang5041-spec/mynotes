#### Statement (Convex Function)

Let

$$  
f:I\rightarrow \mathbb{R}  
$$

be a **convex function** on an interval $I$.

For any numbers

$$  
x_1,x_2,\dots,x_n\in I  
$$

and weights

$$  
\lambda_1,\lambda_2,\dots,\lambda_n\geq0,  
$$

satisfying

$$  
\lambda_1+\lambda_2+\cdots+\lambda_n=1,  
$$

we have:

$$  
\boxed{  
f(\lambda_1x_1+\lambda_2x_2+\cdots+\lambda_nx_n)  
\leq  
\lambda_1f(x_1)+\lambda_2f(x_2)+\cdots+\lambda_nf(x_n)  
}  
$$

This is **Jensen's inequality**.

---

#### Two-point case

The definition of convexity says:

For

$$  
0\leq\lambda\leq1,  
$$

we have:

$$  
\boxed{  
f(\lambda x+(1-\lambda)y)  
\leq  
\lambda f(x)+(1-\lambda)f(y)  
}  
$$

This is Jensen's inequality for two points.

The general case follows by repeatedly applying the two-point case.

---

#### Equal-weight form

If all weights are equal:

$$  
\lambda_1=\cdots=\lambda_n=\frac1n,  
$$

then Jensen becomes:

$$  
\boxed{  
f\left(\frac{x_1+x_2+\cdots+x_n}{n}\right)  
\leq  
\frac{f(x_1)+f(x_2)+\cdots+f(x_n)}{n}  
}  
$$

Meaning:

$$  
\text{function of average}  
\leq  
\text{average of function values}.  
$$

---

#### Concave Version

If $f$ is **concave**, then the inequality reverses:

$$  
\boxed{  
f(\lambda_1x_1+\cdots+\lambda_nx_n)  
\geq  
\lambda_1f(x_1)+\cdots+\lambda_nf(x_n)  
}  
$$

because:

$$  
f\text{ concave}  
\iff  
-f\text{ convex}.  
$$

---

#### Geometric Interpretation

For a convex function:

The graph lies below every chord.

For two points:

$$  
(x,f(x)),(y,f(y)),  
$$

the point

$$  
(\lambda x+(1-\lambda)y,  
f(\lambda x+(1-\lambda)y))  
$$

lies below the line segment joining the two points.

Therefore:

$$  
f(\text{average})  
\leq  
\text{average of }f.  
$$

---

#### Proof by Induction (Equal Weights)

We prove:

$$  
f\left(\frac{x_1+\cdots+x_n}{n}\right)  
\leq  
\frac{f(x_1)+\cdots+f(x_n)}n.  
$$

The case $n=2$ is the definition of convexity.

Assume it holds for $n$ points.

Let:

$$  
A=\frac{x_1+\cdots+x_n}{n}.  
$$

Consider $n+1$ points:

$$  
x_1,\dots,x_n,x_{n+1}.  
$$

Their average is:

 $$  
\frac{x_1+\cdots+x_n+x_{n+1}}{n+1}

\frac n{n+1}A+\frac1{n+1}x_{n+1}.  
$$

Using convexity:

$$  
f\left(  
\frac n{n+1}A+\frac1{n+1}x_{n+1}  
\right)  
\leq  
\frac n{n+1}f(A)  
+\frac1{n+1}f(x_{n+1}).  
$$

Using the induction hypothesis:

$$  
f(A)  
\leq  
\frac{f(x_1)+\cdots+f(x_n)}n.  
$$

Therefore:

$$  
f\left(  
\frac{x_1+\cdots+x_{n+1}}{n+1}  
\right)  
\leq  
\frac{f(x_1)+\cdots+f(x_{n+1})}{n+1}.  
$$

---

#### Equality Conditions

For a **strictly convex** function:

$$  
f(\lambda x+(1-\lambda)y)  
<  
\lambda f(x)+(1-\lambda)f(y)  
$$

unless:

$$  
x=y.  
$$

Therefore equality in Jensen occurs only when:

$$  
x_1=x_2=\cdots=x_n  
$$

(for positive weights).

Examples:

$$  
f(x)=x^2  
$$

gives:

$$  
\left(\frac{x_1+\cdots+x_n}{n}\right)^2  
\leq  
\frac{x_1^2+\cdots+x_n^2}{n}.  
$$

This is equivalent to:

$$  
(\text{mean})^2\leq\text{mean of squares}.  
$$

---

#### Important Applications

#### AM-GM Inequality

Since:

$$  
f(x)=e^x  
$$

is convex:

$$  
e^{(x_1+\cdots+x_n)/n}  
\leq  
\frac{e^{x_1}+\cdots+e^{x_n}}n.  
$$

Let:

$$  
a_i=e^{x_i}.  
$$

Then:

$$  
\boxed{  
\sqrt[n]{a_1a_2\cdots a_n}  
\leq  
\frac{a_1+\cdots+a_n}{n}  
}  
$$

---

#### Power Mean Inequality

For:

$$  
f(x)=x^p,\quad p\geq1,  
$$

Jensen gives:

$$  
\left(\frac{x_1+\cdots+x_n}{n}\right)^p  
\leq  
\frac{x_1^p+\cdots+x_n^p}{n}.  
$$

---

#### Integral Jensen Inequality

For a probability density $\rho(x)$:

$$  
\int\rho(x),dx=1,  
$$

a convex function satisfies:

$$  
\boxed{  
f\left(\int x\rho(x),dx\right)  
\leq  
\int f(x)\rho(x),dx  
}  
$$

In probability notation:

$$  
\boxed{  
f(\mathbb E[X])  
\leq  
\mathbb E[f(X)]  
}  
$$

---

#### Summary

For convex $f$:

$$  
\boxed{  
f(\text{average})  
\leq  
\text{average}(f)  
}  
$$

For concave $f$:

$$  
\boxed{  
f(\text{average})  
\geq  
\text{average}(f)  
}  
$$

Jensen's inequality is the general principle that **convex functions increase the value of averaging**.