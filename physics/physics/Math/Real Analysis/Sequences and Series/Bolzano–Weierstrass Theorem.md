Every **bounded sequence** of real numbers has a **convergent subsequence**.

$$  
(x_n)\text{ bounded } \Longrightarrow \exists,(x_{n_k})\text{ such that }x_{n_k}\to L  
$$

where $L$ is a real number.

---

### Key Definitions

- **Bounded sequence**:  
    $$  
    \exists,M>0\text{ such that }|x_n|\le M\quad\forall n.  
    $$
    
- **Subsequence**:  
    $$  
    (x_{n_k}),\qquad n_1<n_2<\cdots  
    $$
    
- A subsequence keeps the original order but may skip terms.
    

---

### Contrapositive (Useful Idea)

If a bounded sequence has **no convergent subsequence**, then this contradicts Bolzano–Weierstrass.

Thus, proving that every subsequence fails to converge is impossible for a bounded sequence.

---

### Common Uses

1. **Extract a convergent subsequence** from any bounded sequence.
    
2. **Prove convergence of the whole sequence**:
    
    - Show every convergent subsequence has the same limit $L$.
        
    - Then  
        $$  
        x_n\to L.  
        $$
        
3. **Proof by contradiction**:
    
    - Assume $(x_n)$ is bounded but has no convergent subsequence.
        
    - Apply Bolzano–Weierstrass to obtain one.
        

---

### Standard Strategy

Given a bounded sequence:

1. Verify boundedness.
    
2. Invoke Bolzano–Weierstrass.
    
3. Let  
    $$  
    x_{n_k}\to L.  
    $$
    
4. Use additional information (recurrence, monotonicity, uniqueness of limits, etc.) to determine $L$.
    

---

### Frequently Combined Results

- **Monotone Convergence Theorem**
    
    - Monotone + bounded $\Rightarrow$ whole sequence converges.
        
- **Nested Interval Theorem**
    
    - Often used in proofs of Bolzano–Weierstrass.
        
- **Heine–Borel Theorem**
    
    - Compact subsets of $\mathbb{R}$ are exactly closed and bounded.
        
    - Bolzano–Weierstrass is equivalent to sequential compactness of closed bounded intervals.
        

---

### Useful Facts

- Bounded $\not\Rightarrow$ convergent.
    
    - Example:  
        $$  
        x_n=(-1)^n.  
        $$  
        It is bounded but does not converge.
        
- However,  
    $$  
    (-1)^{2k}=1,\qquad (-1)^{2k-1}=-1,  
    $$  
    so it has convergent subsequences.
    
- An unbounded sequence need not have any convergent subsequence.
    

---

### Typical Proof Pattern

If every convergent subsequence converges to the same value $L$:

Assume $x_n\nrightarrow L$. Then there exists $\varepsilon>0$ and a subsequence $(x_{n_k})$ such that

$$  
|x_{n_k}-L|\ge\varepsilon  
\quad\forall k.  
$$

Since $(x_{n_k})$ is bounded, Bolzano–Weierstrass gives a convergent subsubsequence

$$  
x_{n_{k_j}}\to M.  
$$

By assumption, every convergent subsequence converges to $L$, so $M=L$, contradicting

$$  
|x_{n_{k_j}}-L|\ge\varepsilon.  
$$

Hence

$$  
x_n\to L.  
$$

---

### Common Examples

- $x_n=(-1)^n$
    
    - Bounded, not convergent.
        
    - Convergent subsequences:  
        $$  
        x_{2k}=1,\qquad x_{2k-1}=-1.  
        $$
        
- $x_n=\sin n$
    
    - Bounded.
        
    - May not converge, but has at least one convergent subsequence by Bolzano–Weierstrass.
        

---

### What to Remember

- **Bounded sequence $\Rightarrow$ convergent subsequence.**
    
- Does **not** guarantee the whole sequence converges.
    
- Extremely useful for extracting limits and proving convergence via subsequences.
    
- Often paired with monotonicity, compactness, or uniqueness of subsequential limits.