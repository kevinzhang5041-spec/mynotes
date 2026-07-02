A [[Basis|basis]] is is a set of vectors that can be used to represent every vector in a vector  space.

A **change of basis** rewrites the same vector using a different basis.

---

**Standard Basis**

For $\mathbb{R}^2$, the standard basis is

$$  
e_1=  
\begin{bmatrix}  
1\  
0  
\end{bmatrix},  
\qquad  
e_2=  
\begin{bmatrix}  
0\  
1  
\end{bmatrix}.  
$$

Any vector can be written as

$$  
x=  
\begin{bmatrix}  
x_1\  
x_2  
\end{bmatrix}  
=x_1e_1+x_2e_2.  
$$

---

**New Basis**

Suppose we choose

$$  
v_1=  
\begin{bmatrix}  
1\\  
1  
\end{bmatrix},  
\qquad  
v_2=  
\begin{bmatrix}  
1\\  
-1  
\end{bmatrix}.  
$$

These vectors also form a basis for $\mathbb{R}^2$.

---

**Change-of-Basis Matrix**

The change-of-basis matrix is formed by placing the new basis vectors as columns:

$$  
P=  
\begin{bmatrix}  
1&1\\  
1&-1  
\end{bmatrix}.  
$$

---

**Coordinate Transformations**

If $[x]_B$ is the coordinate vector of $x$ in the new basis $B$, then

Standard coordinates:

$$  
x=P[x]_B.  
$$

New basis coordinates:

$$  
[x]_B=P^{-1}x.  
$$

---

**Why It Is Useful**

Changing basis can simplify a matrix.

If the new basis consists of [[Eigenvectors and Eigenvalues|eigenvectors]] of $A$, then

$$  
A=PDP^{-1},  
$$

where

$$  
D=  
\begin{bmatrix}  
\lambda_1&0&\cdots&0\\  
0&\lambda_2&\cdots&0\\  
\vdots&\vdots&\ddots&\vdots\\  
0&0&\cdots&\lambda_n  
\end{bmatrix}.  
$$

Instead of working with $A$, computations are performed using the simpler matrix $D$.

---

**Interpretation of $P$ and $P^{-1}$**

- $P$: Converts **new basis coordinates $\rightarrow$ standard coordinates**.
    
- $P^{-1}$: Converts **standard coordinates $\rightarrow$ new basis coordinates**.
    

Thus,

$$  
A=PDP^{-1}  
$$

means:

1. Convert to the eigenvector basis using $P^{-1}$.
    
2. Apply the simple diagonal matrix $D$.
    
3. Convert back using $P$.
    

---

**Summary**

- A basis is a set of vectors that spans the space.
    
- A change of basis expresses vectors in a different coordinate system.
    
- The columns of $P$ are the new basis vectors.
    
- Coordinate conversions:
    
    - $x=P[x]_B$
        
    - $[x]_B=P^{-1}x$
        
- Choosing eigenvectors as the new basis diagonalizes the matrix when possible:
    

$$  
A=PDP^{-1}.  
$$