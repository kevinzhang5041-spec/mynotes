
The **transpose** of a matrix is obtained by swapping its rows and columns.

If

$$  
A=(a_{ij}),  
$$

then

$$  
(A^T)_{ij}=a_{ji}.  
$$

Equivalently,

$$  
A=[a_{ij}]  
\quad\Longrightarrow\quad  
A^T=[a_{ji}].  
$$

Example:

$$  
A=  
\begin{bmatrix}  
1&2&3\  
4&5&6  
\end{bmatrix},  
\qquad  
A^T=  
\begin{bmatrix}  
1&4\  
2&5\  
3&6  
\end{bmatrix}.  
$$

---

# Basic Properties

For matrices of compatible sizes:

Addition:

$$  
(A+B)^T=A^T+B^T.  
$$

Scalar multiplication:

$$  
(cA)^T=cA^T.  
$$

Transpose of a transpose:

$$  
(A^T)^T=A.  
$$

Product:

$$  
(AB)^T=B^TA^T.  
$$

Notice the order reverses.

Inverse:

If (A) is invertible,

$$  
(A^{-1})^T=(A^T)^{-1}.  
$$

---

# Symmetric Matrices

A matrix is **symmetric** if

$$  
A^T=A.  
$$

Example:

$$  
\begin{bmatrix}  
2&1\  
1&3  
\end{bmatrix}.  
$$

Properties:

- Must be square.
    
- Entries satisfy
    

$$  
a_{ij}=a_{ji}.  
$$

---

# Skew-Symmetric Matrices

A matrix is **skew-symmetric** if

$$  
A^T=-A.  
$$

Therefore,

$$  
a_{ij}=-a_{ji}.  
$$

The diagonal entries must all be zero since

$$  
a_{ii}=-a_{ii}  
\quad\Rightarrow\quad  
a_{ii}=0.  
$$

Example:

$$  
\begin{bmatrix}  
0&2&-1\  
-2&0&4\  
1&-4&0  
\end{bmatrix}.  
$$

---

# Orthogonal Matrices

A square matrix is **orthogonal** if

$$  
A^TA=AA^T=I.  
$$

Equivalently,

$$  
A^{-1}=A^T.  
$$

Properties:

- Columns form an orthonormal set.
    
- Rows form an orthonormal set.
    
- Preserve lengths and angles.
    

For any vector,

$$  
|Ax|=|x|.  
$$

---

# Transpose and Dot Products

For vectors (x,y),

$$  
x^Ty  
$$

is the dot product.

Norm:

$$  
|x|^2=x^Tx.  
$$

---

# Important Identities

For vectors (x,y),

$$  
(xy^T)^T=yx^T.  
$$

For matrices,

# $$  
(A_1A_2\cdots A_n)^T

A_n^T\cdots A_2^TA_1^T.  
$$

---

# Common Proof Strategy

When proving transpose identities:

1. Compute the ((i,j))-entry of each side.
    
2. Use
    

$$  
(A^T)_{ij}=a_{ji}.  
$$

3. Show corresponding entries are equal.
    

---

# Key Facts to Memorize

- $$A^T$$ swaps rows and columns.
    
- $$\left(A^T\right)^T=A.$$
    
- $$\left(A+B\right)^T=A^T+B^T.$$
    
- $$\left(cA\right)^T=cA^T.$$
    
- $$\left(AB\right)^T=B^TA^T.$$
    
- $$\left(A^{-1}\right)^T=\left(A^T\right)^{-1}.$$
    
- Symmetric: $$A^T=A.$$
    
- Skew-symmetric: $$A^T=-A.$$
    
- Orthogonal: $$A^{-1}=A^T.$$