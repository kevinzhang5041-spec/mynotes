A sequence $(x_n)$ in $\mathbb{R}^n$ (or any **complete metric space**) converges **if** it is a **Cauchy sequence**.

$$  
x_n \text{ converges }  
\iff  
\forall,\varepsilon>0,\ \exists,N\text{ such that }m,n\ge N  
\Rightarrow  
|x_n-x_m|<\varepsilon.  
$$

---

### Definition (Cauchy Sequence)

A sequence is **Cauchy** if its terms become arbitrarily close to each other:

$$  
\forall,\varepsilon>0,\ \exists,N\text{ such that }  
m,n\ge N  
\Rightarrow  
|x_n-x_m|<\varepsilon.  
$$

No limit needs to be known.

---

### Key Idea

Instead of showing $x_n\to L$, show the sequence **clusters together**.

- Convergent $\Rightarrow$ Cauchy (always true).
    
- Cauchy $\Rightarrow$ Convergent **only in complete spaces** (e.g. $\mathbb{R}$, $\mathbb{R}^n$).
    

---

### Common Proof Strategy

To prove $(x_n)$ converges:

1. Show  
    $$  
    |x_n-x_m|\to0  
    \quad(m,n\to\infty).  
    $$
    
2. Conclude $(x_n)$ is Cauchy.
    
3. Since $\mathbb{R}^n$ is complete,  
    $$  
    x_n\to L  
    $$  
    for some $L$.
    

---

### Useful Estimates

A common approach is to bound differences:

$$  
|x_n-x_m|  
\le  
\sum_{k=n}^{m-1}|x_{k+1}-x_k|.  
$$

If the tail sum can be made arbitrarily small, then $(x_n)$ is Cauchy.

---

### Important Facts

- Every convergent sequence is bounded.
    
- Every Cauchy sequence is bounded.
    
- In $\mathbb{Q}$, a Cauchy sequence need **not** converge (since $\mathbb{Q}$ is not complete).
    

---

### What to Remember

- **Convergence** compares $x_n$ to a limit.
    
- **Cauchy** compares $x_n$ to $x_m$.
    
- In complete spaces:  
    $$  
    \boxed{\text{Convergent }\iff\text{ Cauchy}.}  
    $$