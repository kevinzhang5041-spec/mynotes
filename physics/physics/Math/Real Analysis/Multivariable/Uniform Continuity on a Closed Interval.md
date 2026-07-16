If $\phi:[a,b]\to\mathbb{R}$ is continuous, then for every $\epsilon>0$ there exists $\delta>0$ such that whenever

$$  
|x-y|<\delta,  
$$

we have

$$  
|\phi(x)-\phi(y)|<\epsilon.  
$$

This is the definition of **uniform continuity**.

#### Ordinary Continuity vs Uniform Continuity

For ordinary continuity, the $\delta$ can depend on the point $x$.

At each point $x_0$:

$$  
\forall \epsilon>0,\ \exists \delta_{x_0}>0  
$$

such that

$$  
|x-x_0|<\delta_{x_0}  
\implies  
|\phi(x)-\phi(x_0)|<\epsilon.  
$$

The important point is:

$$  
\delta=\delta_{x_0}  
$$

may be different for every $x_0$.

---

For uniform continuity, the same $\delta$ works everywhere on the interval.

We require:

$$  
\forall \epsilon>0,\ \exists \delta>0  
$$

such that for **all** $x,y\in[a,b]$,

$$  
|x-y|<\delta  
\implies  
|\phi(x)-\phi(y)|<\epsilon.  
$$

The $\delta$ depends only on $\epsilon$, not on the location of $x$ or $y$.

---

#### Why is this true for $\phi:[a,b]\to\mathbb{R}$?

This is the **Heine–Cantor theorem**:

$$  
\boxed{\text{Every continuous function on a closed bounded interval is uniformly continuous.}}  
$$

The conditions are important:

- $\phi$ is continuous.
    
- The domain $[a,b]$ is closed and bounded (compact).
    

A continuous function on a compact set cannot have infinitely steep behavior that requires smaller and smaller $\delta$ values.

---

#### Proof Idea (Contradiction)

Assume $\phi$ is not uniformly continuous.

Then there exists some $\epsilon_0>0$ such that no matter how small $\delta$ is, we can find $x,y\in[a,b]$ satisfying

$$  
|x-y|<\delta  
$$

but

$$  
|\phi(x)-\phi(y)|\geq\epsilon_0.  
$$

Choose sequences:

$$  
x_n,y_n\in[a,b]  
$$

such that

$$  
|x_n-y_n|<\frac1n  
$$

but

$$  
|\phi(x_n)-\phi(y_n)|\geq\epsilon_0.  
$$

Because $[a,b]$ is compact, the sequence $(x_n)$ has a convergent subsequence:

$$  
x_{n_k}\to c.  
$$

Since

$$  
|x_{n_k}-y_{n_k}|\to0,  
$$

we also get:

$$  
y_{n_k}\to c.  
$$

Continuity of $\phi$ gives:

$$  
\phi(x_{n_k})\to\phi(c)  
$$

and

$$  
\phi(y_{n_k})\to\phi(c).  
$$

Therefore,

$$  
|\phi(x_{n_k})-\phi(y_{n_k})|\to0.  
$$

But we assumed:

$$  
|\phi(x_{n_k})-\phi(y_{n_k})|\geq\epsilon_0,  
$$

a contradiction.

Hence $\phi$ must be uniformly continuous.

---

#### Key Difference

|Continuity|Uniform Continuity|
|---|---|
|$\delta$ depends on $x$|$\delta$ works for all $x,y$|
|Local property|Global property|
|True for every continuous function|Requires extra conditions in general|
|Example: $\frac1x$ on $(0,1)$ is continuous but not uniformly continuous|Every continuous function on $[a,b]$ is uniformly continuous|

The closed interval $[a,b]$ is what allows local continuity to become a single global $\delta$.