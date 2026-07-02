
A matrix is called **triangular** if all entries below or above the main diagonal are zero.

---

### Upper Triangular Matrix

A matrix $U$ is **upper triangular** if all entries below the diagonal are zero:

$$  
U=  
\begin{bmatrix}  
a_{11}&a_{12}&a_{13}\\  
0&a_{22}&a_{23}\\  
0&0&a_{33}  
\end{bmatrix}  
$$

- Nonzero entries only on or **above** the diagonal.
    

---

### Lower Triangular Matrix

A matrix $L$ is **lower triangular** if all entries above the diagonal are zero:

$$  
L=  
\begin{bmatrix}  
a_{11}&0&0\\  
a_{21}&a_{22}&0\\  
a_{31}&a_{32}&a_{33}  
\end{bmatrix}  
$$

- Nonzero entries only on or **below** the diagonal.
    

---

### Key Property (Eigenvalues)

For any triangular matrix, the [[Eigenvectors and Eigenvalues|eigenvalues]] are simply the diagonal entries.

If

$$  
A=  
\begin{bmatrix}  
\lambda_1&*&*\\  
0&\lambda_2&*\\  
0&0&\lambda_3  
\end{bmatrix},  
$$


then the eigenvalues are

$$  
\lambda_1,\ \lambda_2,\ \lambda_3.  
$$

(Here $*$ means any value.)

---

### Why this works

The [[Characteristic Equation|characteristic polynomial]] is

$$  
\det(A-\lambda I),  
$$

and for triangular matrices the determinant is just the product of diagonal entries:

$$  
\det(A-\lambda I)=  
(\lambda_1-\lambda)(\lambda_2-\lambda)(\lambda_3-\lambda).  
$$

So the roots are the diagonal entries.

---

### Why triangular matrices matter

- Easier to compute determinants.
    
- Eigenvalues are immediate.
    
- Powers are easier to compute than general matrices.
    
- Every matrix can be transformed into **upper triangular form** using similarity transformations (and in stronger cases, Jordan form).
    

---

### Connection to Recurrences

In [[Linear recursive Sequence|linear recurrences]]:

$$  
v_{n+1}=Av_n,  
$$

if $A$ is triangular or can be transformed into triangular form, then:

- Eigenvalues are easy to read off.
    
- Long-term behavior is determined by diagonal entries.
    
- Powers $A^n$ become much simpler.
    

---

### Summary

- **Upper triangular:** zeros below diagonal.
    
- **Lower triangular:** zeros above diagonal.
    
- Eigenvalues = diagonal entries.
    
- Great for simplifying matrix powers and understanding recurrences.