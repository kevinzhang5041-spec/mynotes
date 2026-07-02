
The Jordan canonical form is a way to rewrite a matrix into an almost-diagonal form that is much easier to raise to powers.

Instead of working with

$$  
A,  
$$

we write

$$  
A=PJP^{-1},  
$$

where:

- $P$ is an invertible matrix whose columns are (generalized) [[Eigenvectors and Eigenvalues|eigenvectors]].
    
- $J$ is the **Jordan canonical form**.
    

Then

$$  
A^n=PJ^nP^{-1},  
$$

so computing $A^n$ reduces to computing $J^n$.

---

**Case 1: Distinct Eigenvalues**

If $A$ has enough independent eigenvectors, then $J$ is simply a diagonal matrix:

$$  
J=  
\begin{bmatrix}  
\lambda_1&0&0\\  
0&\lambda_2&0\\  
0&0&\lambda_3  
\end{bmatrix}.  
$$

Then

$$  
J^n=  
\begin{bmatrix}  
\lambda_1^n&0&0\\  
0&\lambda_2^n&0\\  
0&0&\lambda_3^n  
\end{bmatrix}.  
$$

This is the easiest case.

---

**Case 2: Repeated Eigenvalues**

Sometimes an eigenvalue is repeated, but there are **not enough eigenvectors** to diagonalize the matrix.

Instead, the Jordan form contains **Jordan blocks**.

For example,

$$  
J=  
\begin{bmatrix}  
3&1\\  
0&3  
\end{bmatrix}.  
$$

Notice:

- The eigenvalue $3$ appears on the diagonal.
    
- The $1$ above the diagonal indicates the matrix is **not diagonalizable**.
    

---

**Powers of a Jordan Block**

A [[Jordan block]] has a simple formula:

$$  
J^n=  
\begin{bmatrix}  
3^n&n3^{n-1}\\  
0&3^n  
\end{bmatrix}.  
$$

Notice the extra factor of $n$.

This is why repeated eigenvalues often produce terms like

$$  
n\lambda^n,\quad  
n^2\lambda^n,\quad  
\ldots  
$$

in the solution of a recurrence.

---

**Why It Matters for Linear Recurrences**

Your textbook converts a recurrence into

$$  
v_{n+1}=Av_n,  
$$

so

$$  
v_n=A^n v_0.  
$$

To compute $A^n$:

1. Find the eigenvalues.
    
2. Form the Jordan canonical form $J$.
    
3. Compute $J^n$ (easy).
    
4. Recover
    

$$  
A^n=PJ^nP^{-1}.  
$$

---

**Key Takeaway**

- If the matrix has enough eigenvectors:
    

$$  
A=PDP^{-1},  
$$

where $D$ is diagonal, and powers are very easy.

- If not:
    

$$  
A=PJP^{-1},  
$$

where $J$ is Jordan canonical form, an "almost diagonal" matrix with $1$'s above repeated eigenvalues.

Jordan canonical form is a generalization of diagonalization—it works for **every** square matrix, even those that cannot be diagonalized.