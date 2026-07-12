
Let $A$ be an $n \times n$ matrix.

---

### General Formula (Expand along row $i$)

$$  
\det(A)=\sum_{j=1}^{n} a_{ij}C_{ij}  
$$

where:

- $a_{ij}$ is the entry in row $i$, column $j$
    
- $C_{ij}$ is the cofactor
    

---

### Cofactor Definition

$$  
C_{ij}=(-1)^{i+j}M_{ij}  
$$

where:

- $M_{ij}$ is the **minor**, i.e. the [[determinant]] of the matrix obtained by deleting row $i$ and column $j$
    

---

### Full Expansion Formula

Substituting cofactor definition:

$$  
\det(A)=\sum_{j=1}^{n} a_{ij}(-1)^{i+j}M_{ij}  
$$

---

### Column Expansion (Alternative)

You can also expand along column $j$:

$$  
\det(A)=\sum_{i=1}^{n} a_{ij}C_{ij}  
$$

or

$$  
\det(A)=\sum_{i=1}^{n} a_{ij}(-1)^{i+j}M_{ij}  
$$

---

### Key Idea

- You can expand along **any row or column**
    
- Choose one with many zeros to simplify computation
    
- The alternating sign pattern is:
    

$$  
\begin{bmatrix}  
+&-&+&\cdots\\  
-&+&-&\cdots\\  
+&-&+&\cdots\\  
\vdots&\vdots&\vdots  
\end{bmatrix}  
$$

---

### Summary

Row expansion:

$$  
\det(A)=\sum_{j=1}^{n} a_{ij}(-1)^{i+j}\det(A_{ij})  
$$

Column expansion:

$$  
\det(A)=\sum_{i=1}^{n} a_{ij}(-1)^{i+j}\det(A_{ij})  
$$

where $A_{ij}$ is the matrix formed by deleting row $i$ and column $j$.