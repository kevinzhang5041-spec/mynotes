From [[Dirichlet's Test]].

Let $(b_n)$ be a decreasing sequence with $b_n \ge 0$ and $b_n \to 0$. Then the alternating series
$$  
\sum_{n=1}^{\infty} (-1)^{n-1} b_n  
$$
converges.

---
## Key conditions

1. $b_n \ge 0$
    
2. $b_{n+1} \le b_n$ (monotone decreasing)
    
3. $b_n \to 0$
    
---
## Main idea

Define partial sums:  
$$  
S_n = \sum_{k=1}^n (-1)^{k-1} b_k.  
$$

Then:

- even partial sums $S_{2n}$ are increasing
    
- odd partial sums $S_{2n+1}$ are decreasing
    
- and  
    $$  
    S_{2n} \le S_{2n+1}  
    $$
    

So both subsequences are monotone and bounded ⇒ converge.

---

## Proof structure (core steps)

### Step 1: group terms

$$  
S_{2n} = (b_1 - b_2) + (b_3 - b_4) + \cdots + (b_{2n-1} - b_{2n})  
$$

Each bracket is $\ge 0$, so:

- $S_{2n}$ is increasing.
    

---

### Step 2: boundedness

Since terms alternate and $b_n \to 0$,  
$$  
S_{2n} \le b_1  
$$  
so $(S_{2n})$ is bounded.

---

### Step 3: convergence of subsequences

- $S_{2n}$ increases and is bounded ⇒ converges
    
- $S_{2n+1} = S_{2n} + b_{2n+1}$ ⇒ same limit
    

Thus full sequence converges.

---

## Error estimate (very important)

Let $S = \sum (-1)^{n-1} b_n$. Then:

$$  
|S - S_n| \le b_{n+1}.  
$$

So truncation error is bounded by the next term.

---

## Intuition

- partial sums “zig-zag”
    
- step size shrinks because $b_n \downarrow 0$
    
- oscillations collapse into a limit
    

---

## Geometric picture

Even terms approach from below, odd terms from above:

$$  
S_{2n} \uparrow S \quad,\quad S_{2n+1} \downarrow S  
$$

---

## Typical applications

- $\sum (-1)^n \frac{1}{n}$
    
- $\sum (-1)^n \frac{1}{n^p}$ for $p>0$
    
- many Fourier-style alternating estimates
    

---

## Relationship to other tests

- stronger than “term test” (needs monotonicity)
    
- special case of Dirichlet’s test:
    
    - $a_n = (-1)^n$
        
    - partial sums bounded
        
    - $b_n \downarrow 0$
        

---

## Key takeaway

Alternating + decreasing to zero ⇒ convergence, and error is controlled:

$$  
\boxed{|S - S_n| \le b_{n+1}}  
$$