A function $z(x,y)$ is called **homogeneous of degree $n$** if

$$  
z(tx,ty)=t^n z(x,y)  
\qquad\text{for all }t>0.  
$$

This means that scaling both variables by a factor of $t$ scales the function by $t^n$.

---

#### Examples

$$  
z(x,y)=x^2+xy+y^2  
$$

is homogeneous of degree $2$ since

$$  
z(tx,ty)  
=(tx)^2+(tx)(ty)+(ty)^2  
=t^2z(x,y).  
$$

---

$$  
z(x,y)=x^3-2xy^2  
$$

is homogeneous of degree $3$ since

$$  
z(tx,ty)  
=(tx)^3-2(tx)(ty)^2  
=t^3z(x,y).  
$$

---

$$  
z(x,y)=\frac{x^2}{y}  
$$

is homogeneous of degree $1$ because

$$  
z(tx,ty)  
=\frac{(tx)^2}{ty}  
=t\frac{x^2}{y}.  
$$

---

#### Euler's Theorem (First Order)

If $z(x,y)$ is homogeneous of degree $n$, then

# $$  
x\frac{\partial z}{\partial x}  
+  
y\frac{\partial z}{\partial y}

nz.  
$$

This is the classical form of Euler's theorem.

---

#### Proof

From homogeneity,

$$  
z(tx,ty)=t^n z(x,y).  
$$

Differentiate both sides with respect to $t$.

Using the chain rule,

# $$  
\frac{d}{dt}z(tx,ty)

x\frac{\partial z}{\partial x}(tx,ty)  
+  
y\frac{\partial z}{\partial y}(tx,ty).  
$$

Differentiate the right-hand side:

# $$  
\frac{d}{dt}(t^n z(x,y))

nt^{,n-1}z(x,y).  
$$

Now set

$$  
t=1.  
$$

Then

$$  
\boxed{  
xz_x+yz_y=nz.  
}  
$$

---

#### Higher-Order Euler's Theorem

For every integer

$$  
k\le n+1,  
$$

the following identity holds:

# $$  
\boxed{  
\sum_{j=0}^{k}  
\binom{k}{j}  
x^j y^{k-j}  
\frac{\partial^k z}  
{\partial x^j\partial y^{,k-j}}

n(n-1)\cdots(n-k+1)z.  
}  
$$

The book writes the sum from $j=1$ to $k$, but the standard and correct form is from $j=0$ to $k$, since the $j=0$ term corresponds to the pure $y$-derivative.

---

#### Meaning of the Formula

The left-hand side is a weighted sum of all $k$th-order partial derivatives of $z$.

Each derivative is multiplied by

- a binomial coefficient,
    
- an appropriate power of $x$,
    
- an appropriate power of $y$.
    

The right-hand side is the falling factorial

$$  
n(n-1)\cdots(n-k+1)  
$$

times the original function.

---

#### Cases

For $k=1$,

$$  
xz_x+yz_y=nz.  
$$

---

For $k=2$,

# $$  
x^2z_{xx}  
+  
2xyz_{xy}  
+  
y^2z_{yy}

n(n-1)z.  
$$

---

For $k=3$,

# $$  
x^3z_{xxx}  
+  
3x^2yz_{xxy}  
+  
3xy^2z_{xyy}  
+  
y^3z_{yyy}

n(n-1)(n-2)z.  
$$

---

#### Why Binomial Coefficients Appear

Repeated differentiation with respect to the scaling parameter $t$ repeatedly applies the chain rule.

Each differentiation may act on either the $x$-part or the $y$-part, producing all possible mixed partial derivatives.

The number of ways to choose exactly $j$ differentiations acting on the $x$ variable out of $k$ total differentiations is

$$  
\binom{k}{j},  
$$

which explains the coefficients.

---

#### Proof Idea

Start from

$$  
z(tx,ty)=t^n z(x,y).  
$$

Differentiate both sides $k$ times with respect to $t$.

Using repeated applications of the chain rule,

# $$  
\frac{d^k}{dt^k}z(tx,ty)

\sum_{j=0}^{k}  
\binom{k}{j}  
x^j y^{k-j}  
\frac{\partial^k z(tx,ty)}  
{\partial x^j\partial y^{,k-j}}.  
$$

Differentiating the right side gives

# $$  
\frac{d^k}{dt^k}(t^nz)

n(n-1)\cdots(n-k+1)t^{,n-k}z.  
$$

Setting

$$  
t=1  
$$

yields

# $$  
\boxed{  
\sum_{j=0}^{k}  
\binom{k}{j}  
x^j y^{k-j}  
\frac{\partial^k z}  
{\partial x^j\partial y^{,k-j}}

n(n-1)\cdots(n-k+1)z.  
}  
$$

---

#### Falling Factorial

The product

$$  
n(n-1)\cdots(n-k+1)  
$$

is called the **falling factorial** and is often written as

$$  
(n)_k.  
$$

Examples:

$$  
(n)_1=n,  
$$

$$  
(n)_2=n(n-1),  
$$

$$  
(n)_3=n(n-1)(n-2).  
$$

---

#### Summary

- A homogeneous function satisfies
    
    $$  
    z(tx,ty)=t^n z(x,y).  
    $$
    
- Euler's first-order identity is
    
    $$  
    xz_x+yz_y=nz.  
    $$
    
- The higher-order version is
    
    # $$  
    \sum_{j=0}^{k}  
    \binom{k}{j}  
    x^j y^{k-j}  
    \frac{\partial^k z}  
    {\partial x^j\partial y^{,k-j}}
    
    n(n-1)\cdots(n-k+1)z.  
    $$
    
- The coefficients arise from repeated applications of the chain rule to the identity
    
    $$  
    z(tx,ty)=t^n z(x,y).  
    $$