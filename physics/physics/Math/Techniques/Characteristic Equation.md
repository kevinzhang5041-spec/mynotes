
For a [[Linear Recursive Sequence|linear recurrence]] with constant coefficients

$$  
a_{n+k}=c_1a_{n+k-1}+c_2a_{n+k-2}+\cdots+c_ka_n,  
$$

assume a solution of the form

$$  
a_n=r^n.  
$$

Substitute into the recurrence:

$$  
r^{n+k}=c_1r^{n+k-1}+c_2r^{n+k-2}+\cdots+c_kr^n.  
$$

Divide both sides by $$r^n$$ (assuming $r\neq0$):

$$  
r^k=c_1r^{k-1}+c_2r^{k-2}+\cdots+c_k.  
$$

Rearranging gives the **characteristic equation**:

$$  
r^k-c_1r^{k-1}-c_2r^{k-2}-\cdots-c_k=0.  
$$

If the characteristic equation has distinct roots $$r_1,r_2,\ldots,r_k$$then the general solution is

$$  
a_n=A_1r_1^n+A_2r_2^n+\cdots+A_kr_k^n,  
$$

where the constants $$A_1,A_2,\ldots,A_k$$ are determined by the initial conditions.

---

### Example

Solve

$$  
a_{n+2}=4a_{n+1}+a_n,\qquad a_0=0,\ a_1=2.  
$$

Assume

$$  
a_n=r^n.  
$$

Substitute:

$$  
r^{n+2}=4r^{n+1}+r^n.  
$$

Divide by $r^n$:

$$  
r^2=4r+1.  
$$

The characteristic equation is

$$  
r^2-4r-1=0.  
$$

Its roots are

$$  
r=2\pm\sqrt5.  
$$

Thus the general solution is

$$  
a_n=A(2+\sqrt5)^n+B(2-\sqrt5)^n.  
$$

Use the initial conditions to solve for $A$ and $B.$