Let $(L,\le)$ be a **complete lattice**, and let $f:L\to L$ be **monotone**, i.e.,  
$$x\le y\implies f(x)\le f(y).$$  
Then:

- $f$ has at least one fixed point.
    
- The set of fixed points of $f$ is itself a complete lattice.
    
- In particular, $f$ has a **least fixed point** $\mu f$ and a **greatest fixed point** $\nu f$.
    
#### Definitions
 
- **Complete lattice:** Every subset has a supremum (join) and an infimum (meet).
    
- **Monotone:** $x\le y\Rightarrow f(x)\le f(y)$.
    
- **Fixed point:** $f(x)=x$.
    

#### Construction

- Pre-fixed points:  
    $$P={x\in L:f(x)\le x}.$$
    
- Post-fixed points:  
    $$Q={x\in L:x\le f(x)}.$$  
    Then  
    $$\mu f=\inf P,\qquad \nu f=\sup Q.$$
    
#### Proof of Knaster's 


Assume, for contradiction, that $f$ has no fixed point. Then  
$$f(a)>a,\qquad f(b)<b.$$

Construct sequences $(a_n)$ and $(b_n)$ recursively with $a_1=a$, $b_1=b$. Let  
$$m_n=\frac{a_n+b_n}{2}.$$  
If  
$$f(m_n)<m_n,$$  
set  
$$a_{n+1}=a_n,\qquad b_{n+1}=m_n,$$  
and if  
$$f(m_n)>m_n,$$  
set  
$$a_{n+1}=m_n,\qquad b_{n+1}=b_n.$$

At each step,  
$$a_n<f(a_n)<f(b_n)<b_n,$$  
and the intervals satisfy  
$$[a_1,b_1]\supset[a_2,b_2]\supset\cdots,$$  
with  
$$b_n-a_n=\frac{b-a}{2^n}\longrightarrow0.$$

By **Cantor's Nested Intervals Theorem**, there exists a unique point  
$$\xi\in\bigcap_{n=1}^\infty[a_n,b_n],$$  
so  
$$\xi=\lim_{n\to\infty}a_n=\lim_{n\to\infty}b_n.$$

Since  
$$a_n<f(a_n)<f(b_n)<b_n,$$  
the Squeeze Theorem gives  
$$\lim_{n\to\infty}f(a_n)=\lim_{n\to\infty}f(b_n)=\xi.$$

Now, because $a_n\le\xi\le b_n$ and $f$ is monotone,  
$$f(a_n)\le f(\xi)\le f(b_n).$$  
Applying the Squeeze Theorem again,  
$$f(\xi)=\lim_{n\to\infty}f(a_n)=\lim_{n\to\infty}f(b_n)=\xi.$$

Thus $\xi$ is a fixed point, contradicting the assumption that no fixed point exists. Therefore, there exists  
$$\boxed{\xi\in[a,b]\text{ such that }f(\xi)=\xi.}$$

#### Key Facts

- Complete lattice + monotone map $\Rightarrow$ fixed points exist.
    
- Fixed points form a complete lattice.
    
- Least and greatest fixed points always exist.
    
- Uniqueness is **not** guaranteed.
    

#### Comparison

- **Banach:** Complete metric space + contraction $\Rightarrow$ unique fixed point.
    
- **Brouwer:** Continuous map on compact convex set $\Rightarrow$ at least one fixed point.
    
- **Knaster–Tarski:** Complete lattice + monotone map $\Rightarrow$ least and greatest fixed points.
    

#### Applications

- Logic and model theory.
    
- Program semantics and recursive definitions.
    
- Formal verification.
    
- Lattice theory.
    
- Game theory and dynamic programming.