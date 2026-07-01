

Let $(T:V\to W)$ be a linear transformation with

$$  
\dim V=\dim W=n<\infty.  
$$

Then the following are equivalent:

- (T) is invertible.
    
- (T) is non-singular (one-to-one).
    
- (T) is onto ((T(V)=W)).
    
- For **every** basis $${\alpha_1,\ldots,\alpha_n}$$ of (V),  
    $${T\alpha_1,\ldots,T\alpha_n}$$ is a basis of (W).
    
- There exists **some** basis $${\alpha_1,\ldots,\alpha_n}$$ of (V) such that  
    $${T\alpha_1,\ldots,T\alpha_n}$$ is a basis of (W).
    

---

### Key Fact

$$  
\operatorname{rank}(T)+\operatorname{nullity}(T)=n.  
$$

- (T) non-singular iff
    

$$  
\operatorname{nullity}(T)=0.  
$$

- (T) onto iff
    

$$  
\operatorname{rank}(T)=n.  
$$

Since

$$  
\operatorname{rank}(T)+\operatorname{nullity}(T)=n,  
$$

we have

$$  
\operatorname{nullity}(T)=0  
\iff  
\operatorname{rank}(T)=n.  
$$

Therefore

$$  
\text{one-to-one}  
\iff  
\text{onto}  
\iff  
\text{invertible}.  
$$

(Only valid when $$\dim V=\dim W<\infty$$.)

---

### Chain of Implications

$$  
(i)\Rightarrow(ii)\Rightarrow(iii)\Rightarrow(iv)\Rightarrow(v)\Rightarrow(i).  
$$

- Invertible $$\Rightarrow$$ one-to-one.
    
- One-to-one $$\Rightarrow$$ images of a basis are linearly independent.
    
- Onto $$\Rightarrow$$ images of any basis span (W), hence form a basis.
    
- If images of some basis form a basis, then (T) is both onto and one-to-one, hence invertible.
    

---

### Exam Shortcut

For linear maps between finite-dimensional spaces of equal dimension,

$$  
\text{Injective}  
\iff  
\text{Surjective}  
\iff  
\text{Invertible}.  
$$

To prove invertibility, it suffices to show **any one** of:

$$  
\ker(T)={0},  
$$

or

$$  
T(V)=W,  
$$

or

the images of a basis of (V) form a basis of (W).