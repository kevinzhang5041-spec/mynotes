The **Cauchy functional equation** is

$$  
f(x+y)=f(x)+f(y)  
$$

for all $x,y\in \mathbb{R}$.

A function satisfying this equation is called **additive**.

The goal is to determine all possible functions $f:\mathbb{R}\to\mathbb{R}$.

---

#### Basic Properties

Set $x=y=0$:

$$  
f(0)=f(0)+f(0)  
$$

so

$$  
f(0)=0.  
$$

Set $y=-x$:

$$  
f(x+(-x))=f(x)+f(-x)  
$$

so

$$  
0=f(x)+f(-x),  
$$

therefore

$$  
f(-x)=-f(x).  
$$

Hence every Cauchy solution is odd.

---

#### Integer and Rational Scaling

For positive integers $n$:

$$  
f(nx)=f(\underbrace{x+\cdots+x}_{n\text{ times}})  
$$

so

$$  
f(nx)=nf(x).  
$$

For negative integers this also holds because $f$ is odd:

$$  
f(nx)=nf(x).  
$$

Now let $n\neq0$:

$$  
f(x)=f\left(n\frac{x}{n}\right)  
$$

which gives

$$  
f(x)=nf\left(\frac{x}{n}\right).  
$$

Therefore,

$$  
f\left(\frac{x}{n}\right)=\frac{f(x)}{n}.  
$$

For any rational number $q=\frac{m}{n}$,

$$  
f(qx)=f\left(\frac{m}{n}x\right)  
$$

and hence

$$  
f(qx)=qf(x).  
$$

In particular,

$$  
f(q)=qf(1),\qquad q\in\mathbb{Q}.  
$$

---

#### Linear Solutions

Let

$$  
c=f(1).  
$$

For rational $x$,

$$  
f(x)=cx.  
$$

Thus every linear function

$$  
\boxed{f(x)=cx}  
$$

satisfies Cauchy's equation because

$$  
f(x+y)=c(x+y)=cx+cy=f(x)+f(y).  
$$

So all linear functions are solutions.

---

#### Why Continuity Forces Linearity

Without extra assumptions, Cauchy's equation has many pathological solutions.

If $f$ is continuous, then we can extend the rational result to all real numbers.

Take any real $x$ and choose a sequence of rationals

$$  
q_n\to x.  
$$

Since

$$  
f(q_n)=cq_n,  
$$

continuity gives

$$  
f(x)=\lim_{n\to\infty}f(q_n)  
$$

and therefore

$$  
f(x)=\lim_{n\to\infty}cq_n.  
$$

Hence

$$  
\boxed{f(x)=cx}.  
$$

Therefore:

**Every continuous solution of the Cauchy functional equation is linear.**

---

#### General Theorem

If

$$  
f(x+y)=f(x)+f(y)  
$$

and $f$ satisfies any regularity condition such as:

- continuity at one point,
    
- boundedness on an interval,
    
- monotonicity,
    
- measurability,
    

then

$$  
\boxed{f(x)=cx}  
$$

for some constant $c$.

---

#### Exponential Form of Cauchy Equation

Another common functional equation is

$$  
f(x+y)=f(x)f(y).  
$$

Assume $f$ is continuous and nonzero.

Set $x=y=0$:

$$  
f(0)=f(0)^2,  
$$

so

$$  
f(0)=1.  
$$

Also,

$$  
f(x)=f\left(\frac{x}{2}+\frac{x}{2}\right)  
$$

gives

$$  
f(x)=f(x/2)^2>0.  
$$

Therefore $\ln f(x)$ is defined. Let

$$  
g(x)=\ln f(x).  
$$

Then

$$  
g(x+y)=\ln(f(x+y))  
$$

$$  
=\ln(f(x)f(y))  
$$

$$  
=\ln f(x)+\ln f(y),  
$$

so $g$ satisfies the additive Cauchy equation.

By continuity,

$$  
g(x)=kx.  
$$

Hence

$$  
\ln f(x)=kx,  
$$

and therefore

$$  
\boxed{f(x)=e^{kx}}.  
$$

Equivalently, writing $c=e^k>0$,

$$  
\boxed{f(x)=c^x}.  
$$

---

#### Summary

Additive Cauchy equation:

$$  
f(x+y)=f(x)+f(y)  
$$

Continuous solutions:

$$  
\boxed{f(x)=cx}  
$$

Multiplicative Cauchy equation:

$$  
f(x+y)=f(x)f(y)  
$$

Continuous nonzero solutions:

$$  
\boxed{f(x)=e^{kx}=c^x,\quad c>0}  
$$