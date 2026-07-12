**Theorem.** Let $f:[a,b]\to\mathbb{R}$ be continuous, and define

$$  
F(x)=\int_a^x f(t),dt.  
$$

Then $F$ is differentiable on $(a,b)$ and

$$  
F'(x)=f(x).  
$$

Moreover, if $F$ is **any** antiderivative of $f$, then

$$  
\int_a^b f(x),dx=F(b)-F(a).  
$$

This theorem connects differentiation and integration, showing that they are inverse operations.

---

#### Part I: Derivative of an Integral

Let

$$  
F(x)=\int_a^x f(t),dt.  
$$

Then

$$  
\boxed{F'(x)=f(x).}  
$$

**Proof.**

Using the definition of the derivative,

$$  
F'(x)=\lim_{h\to0}\frac{F(x+h)-F(x)}{h}.  
$$

Since

$$  
F(x+h)-F(x)=\int_x^{x+h}f(t),dt,  
$$

we obtain

$$  
F'(x)=\lim_{h\to0}\frac1h\int_x^{x+h}f(t),dt.  
$$

By continuity of $f$,

$$  
\min_{[x,x+h]}f  
\le  
\frac1h\int_x^{x+h}f(t),dt  
\le  
\max_{[x,x+h]}f.  
$$

As $h\to0$,

$$  
\min_{[x,x+h]}f,;  
\max_{[x,x+h]}f  
\longrightarrow  
f(x),  
$$

so by the squeeze theorem,

$$  
F'(x)=f(x).  
$$

---

#### Part II: Evaluation of Definite Integrals

If

$$  
F'(x)=f(x),  
$$

then

$$  
\boxed{\int_a^b f(x),dx=F(b)-F(a).}  
$$

**Proof.**

Since both

$$  
F(x)  
\quad\text{and}\quad  
\int_a^x f(t),dt  
$$

have derivative $f(x)$,

their difference has derivative zero, so it is constant:

$$  
F(x)-\int_a^x f(t),dt=C.  
$$

Evaluating at $x=a$,

$$  
C=F(a).  
$$

Hence

$$  
F(x)=F(a)+\int_a^x f(t),dt.  
$$

Setting $x=b$ gives

$$  
F(b)-F(a)=\int_a^b f(x),dx.  
$$

---

#### Geometric Interpretation

If $f(x)\ge0$, then

$$  
\int_a^b f(x),dx  
$$

equals the area under the graph of $f$ from $a$ to $b$.

The theorem states that this area can be computed by evaluating an antiderivative at the endpoints:

$$  
\boxed{\text{Area}=F(b)-F(a).}  
$$

---

#### Consequences

If

$$  
F'(x)=f(x),  
$$

then

$$  
\int_a^a f(x),dx=0.  
$$

$$  
\int_a^b f(x),dx=-\int_b^a f(x),dx.  
$$

For any $c$ with

$$  
a<c<b,  
$$

# $$  
\int_a^b f(x),dx

\int_a^c f(x),dx  
+  
\int_c^b f(x),dx.  
$$

---

#### Common Antiderivatives

$$  
\int x^n,dx=\frac{x^{n+1}}{n+1}+C,  
\qquad  
n\ne-1.  
$$

$$  
\int\frac1x,dx=\ln|x|+C.  
$$

$$  
\int e^x,dx=e^x+C.  
$$

$$  
\int a^x,dx=\frac{a^x}{\ln a}+C.  
$$

$$  
\int\sin x,dx=-\cos x+C.  
$$

$$  
\int\cos x,dx=\sin x+C.  
$$

---

#### Useful Forms

If

$$  
F'(x)=f(x),  
$$

then

$$  
\int_a^x f(t),dt=F(x)-F(a).  
$$

If

$$  
G(x)=\int_x^b f(t),dt,  
$$

then

$$  
G'(x)=-f(x).  
$$

More generally,

$$  
H(x)=\int_{u(x)}^{v(x)}f(t),dt  
$$

satisfies

# $$  
H'(x)

## f(v(x))v'(x)

f(u(x))u'(x).  
$$

---

#### Key Facts

- Differentiating an integral recovers the original continuous function.
    
- A definite integral is computed using any antiderivative.
    
- Differentiation and integration are inverse operations.
    
- Endpoint evaluation replaces area computation by Riemann sums.
    
- The theorem is the foundation of integral calculus and most integration techniques.