- An **eigenvector** is a nonzero vector whose **direction does not change** when multiplied by a matrix.
    
- An **eigenvalue** is the scalar by which the eigenvector is stretched, shrunk, or flipped.
    

$$  
A\mathbf{v}=\lambda\mathbf{v}  
$$

where:

- $A$ = matrix
    
- $\mathbf{v}$ = eigenvector
    
- $\lambda$ = eigenvalue
    

---

**Example**

Given

$$  
A=  
\begin{bmatrix}  
2&0\\  
0&3  
\end{bmatrix},  
$$

let

$$  
\mathbf{v}=  
\begin{bmatrix}  
1\\0  
\end{bmatrix}.  
$$

Then
$$  
A\mathbf{v}
=
\begin{bmatrix}  
2\\  
0  
\end{bmatrix}
=
2\mathbf{v},  
$$

so:

- Eigenvector: $\begin{bmatrix}1\\0\end{bmatrix}$
    
- Eigenvalue: $2$
    

Similarly,

$$  
\mathbf{w}=  
\begin{bmatrix}  
0\\  
1  
\end{bmatrix}  
$$

satisfies

$$  
A\mathbf{w}=3\mathbf{w},  
$$

so its eigenvalue is $3$.

---

**Repeated Matrix Multiplication**

If

$$  
A\mathbf{v}=\lambda\mathbf{v},  
$$

then

$$  
A^2\mathbf{v}=\lambda^2\mathbf{v},  
$$

$$  
A^3\mathbf{v}=\lambda^3\mathbf{v},  
$$

and, in general,

$$  
A^n\mathbf{v}=\lambda^n\mathbf{v}.  
$$

This is why eigenvalues make computing powers of matrices much easier.

---

**Finding Eigenvalues**

Start with

$$  
A\mathbf{v}=\lambda\mathbf{v}.  
$$

Rearrange:

$$  
(A-\lambda I)\mathbf{v}=0,  
$$

where $I$ is the identity matrix.

For a nonzero solution $\mathbf{v}$,

$$  
\det(A-\lambda I)=0.  
$$

This is the [[Characteristic Equation]]. Its solutions are the eigenvalues.

---

**Example**

For

$$  
A=  
\begin{bmatrix}  
2&0\\  
0&3  
\end{bmatrix},  
$$

compute

$$  
A-\lambda I=  
\begin{bmatrix}  
2-\lambda&0\\  
0&3-\lambda  
\end{bmatrix}.  
$$

Then

$$  
\det(A-\lambda I)  
=(2-\lambda)(3-\lambda)=0.  
$$

Therefore,

$$  
\lambda=2,3.  
$$

---

**Connection to Linear Recurrences**

A $k$th-order linear recurrence can be rewritten as

$$  
v_{n+1}=Av_n,  
$$

so

$$  
v_n=A^n v_0.  
$$

The difficult part is computing $A^n$. Eigenvalues simplify this because

$$  
A^n\mathbf{v}=\lambda^n\mathbf{v},  
$$

reducing matrix powers to ordinary powers of the eigenvalues. This is the key idea behind solving linear recurrences using matrices.