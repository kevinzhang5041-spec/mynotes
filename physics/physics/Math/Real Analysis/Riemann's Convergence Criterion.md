Applies to alternating series of the form  
$$  
\sum_{n=1}^{\infty}(-1)^na_n  
\quad\text{or}\quad  
\sum_{n=1}^{\infty}(-1)^{n-1}a_n,  
$$
where $a_n\ge0$.  
#### Conditions:

- $a_n\ge0$
    
- $a_n$ is eventually decreasing
    
- $$\lim_{n\to\infty}a_n=0$$
#### Conclusion:
    
- The series converges.
    
- Convergence is **not necessarily absolute** (it may be conditional).  
    **Error estimate (Alternating Series Estimation Theorem):**  
    If  
    $$  
    S=\sum_{n=1}^{\infty}(-1)^{n-1}a_n,\qquad  
    S_N=\sum_{n=1}^N(-1)^{n-1}a_n,  
    $$  
    then  
    $$  
    |S-S_N|\le a_{N+1}.  
    $$  
    The error has the same sign as the first omitted term.  
    **Common strategy:**
    

1. Rewrite the series as $(-1)^na_n$ or $(-1)^{n-1}a_n$.
    
2. Verify $a_n>0$.
    
3. Show $a_n$ is eventually decreasing.
    
4. Show $a_n\to0$.
    
5. Conclude convergence by Riemann's criterion.  

#### Important notes:
- If $a_n\nrightarrow0$, the series diverges (nth-term test).
    
- Monotonicity only needs to hold **eventually**.
    
- If $\sum|a_n|$ converges, then the series converges **absolutely**, so Riemann's criterion is unnecessary.
    
- Typical examples:
    
    - $$\sum\frac{(-1)^n}{n}$$ converges (conditionally).
        
    - $$\sum\frac{(-1)^n}{\sqrt n}$$ converges (conditionally).
        
    - $$\sum(-1)^n\frac{n}{n+1}$$ diverges since $a_n\nrightarrow0$.