## What is a Determinant?

The **determinant** is a number associated with a square matrix that tells you important things like:

- whether the matrix is invertible
    
- how the matrix scales area/volume
    
- whether a system of equations has a unique solution
    

We write it as

$$  
\det(A) \quad \text{or} \quad |A|  
$$

---

## 2×2 Determinant

For

$$  
A=  
\begin{bmatrix}  
a&b\  
c&d  
\end{bmatrix},  
$$

the determinant is

$$  
\det(A)=ad-bc  
$$

---

## 3×3 Determinant (Cofactor Method)

For

$$  
A=  
\begin{bmatrix}  
a&b&c\  
d&e&f\  
g&h&i  
\end{bmatrix},  
$$

we expand along a row (often the first row).

---

## Minors and Cofactors

### Minor

The **minor** $M_{ij}$ is the determinant of the matrix formed by deleting row $i$ and column $j$.

### Cofactor

The **[[Cofactor Expansion Formula|cofactor]]** is

$$  
C_{ij}=(-1)^{i+j}M_{ij}  
$$

The signs alternate like:

$$  
\begin{bmatrix}  
+&-&+\\  
-&+&-\\  
+&-&+  
\end{bmatrix}  
$$

---

## Cofactor Expansion (First Row)

Expand along row 1:

$$  
\det(A)=aC_{11}+bC_{12}+cC_{13}  
$$

So explicitly:

$$  
\det(A)=  
a  
\begin{vmatrix}  
e&f\\  
h&i  
\end{vmatrix}
+
b  
\begin{vmatrix}  
d&f\\  
g&i  
\end{vmatrix}  
+  
c  
\begin{vmatrix}  
d&e\\  
g&h  
\end{vmatrix}  
$$

---

## Example

$$  
A=  
\begin{bmatrix}  
1&2&3\\  
0&4&5\\  
1&0&6  
\end{bmatrix}  
$$

Expand along row 1:

$$  
\det(A)=  
1  
\begin{vmatrix}  
4&5\\  
0&6  
\end{vmatrix}
+
2  
\begin{vmatrix}  
0&5\\  
1&6  
\end{vmatrix}  
+  
3  
\begin{vmatrix}  
0&4\\  
1&0  
\end{vmatrix}  
$$

Compute:

- $=1(24-0)$
    
- $-2(0-5)$
    
- $+3(0-4)$
    

So:

$$  
\det(A)=24 +10 -12 = 22  
$$

---

## Important Properties

- $\det(A)=0$ means $A$ is **not invertible**
    
- $\det(AB)=\det(A)\det(B)$
    
- Swapping two rows flips the sign of the determinant
    
- Triangular matrices: determinant is product of diagonal entries
    

---

## Why Determinants Matter for Eigenvalues

[[Eigenvectors and Eigenvalues|Eigenvalues]] satisfy:

$$  
\det(A-\lambda I)=0  
$$

This is called the [[Characteristic Equation|characteristic equation]], and solving it gives the eigenvalues.

---

## Summary

- Determinant is a scalar measure of a matrix.
    
- For $2\times2$: $ad-bc$
    
- For larger matrices: use **cofactor expansion**
    
- Cofactor:
    

$$  
C_{ij}=(-1)^{i+j}M_{ij}  
$$

- Expand along any row or column.
    
- Core role in eigenvalues:
    

$$  
\det(A-\lambda I)=0  
$$