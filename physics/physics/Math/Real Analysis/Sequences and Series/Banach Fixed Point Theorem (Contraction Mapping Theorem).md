Let $X \subseteq \mathbb{R}^n$ be closed (hence complete), and let $f:X \to X$ satisfy

$$  
|f(x)-f(y)| \le c |x-y| \quad \text{for all } x,y \in X,  
$$

where $0<c<1$.

Then:

- $f$ has a **unique fixed point** $x^* \in X$
    
- i.e.  
    $$  
    f(x^-) = x^-  
    $$
    
---
# Proof 

## 1. Construct iteration

Pick any $x_0 \in X$, define:

$$  
x_{n+1} = f(x_n).  
$$

So:  
$$  
x_1 = f(x_0), \quad x_2 = f(x_1), \dots  
$$

---

## 2. Show it is a contraction sequence

Using the hypothesis:

$$  
|x_{n+1} - x_n|  
= |f(x_n) - f(x_{n-1})|  
\le c |x_n - x_{n-1}|.  
$$

Iterating:

$$  
|x_{n+1} - x_n| \le c^n |x_1 - x_0|.  
$$

---

## 3. Show Cauchy property

For $m>n$:

$$  
|x_m - x_n|  
\le \sum_{k=n}^{m-1} |x_{k+1}-x_k|  
\le \sum_{k=n}^{m-1} c^k |x_1-x_0|.  
$$

So:

$$  
|x_m - x_n|  
\le |x_1-x_0| \sum_{k=n}^{\infty} c^k  
= |x_1-x_0| \frac{c^n}{1-c}.  
$$

As $n \to \infty$, this goes to $0$, so $(x_n)$ is [[Cauchy's Criterion for Convergence|Cauchy]].

---

## 4. Use completeness

Since $X$ is closed in $\mathbb{R}^n$, it is complete, so:

$$  
x_n \to x^* \in X.  
$$

---

## 5. Show it is a fixed point

Since $f$ is Lipschitz:

$$  
f(x_n) \to f(x^*).  
$$

But also:  
$$  
f(x_n) = x_{n+1} \to x^*.  
$$

So:  
$$  
f(x^-) = x^-.  
$$

---

## 6. Uniqueness

If $x^-, y^-$ are fixed points:

$$  
|x^* - y^-|  
= |f(x^-) - f(y^-)|  
\le c |x^- - y^*|.  
$$

So:  
$$  
(1-c)|x^--y^-| \le 0  
\Rightarrow |x^--y^--|=0  
\Rightarrow x^-=y^-.  
$$

---

# Final conclusion

$$  
\boxed{\text{There exists a unique fixed point } x^* \in X \text{ such that } f(x^-)=x^-.}  
$$

---

# Key intuition

- $f$ strictly shrinks distances ($c<1$)
    
- repeated iteration forces points closer and closer
    
- everything collapses to a single stable point
    
- completeness guarantees the limit exists inside $X$
    

---

# Big picture idea

A contraction map is like:

> “Every iteration pulls points closer together at a uniform rate, so iteration must converge to a unique equilibrium.”

---

If you want, I can also show:

- a geometric picture intuition
    
- or how this connects to solving equations $x = f(x)$ in analysis and PDEs