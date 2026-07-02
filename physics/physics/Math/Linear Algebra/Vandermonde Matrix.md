
A **Vandermonde matrix** is a matrix built from powers of numbers.

Given numbers $x_1, x_2, \dots, x_n$, the Vandermonde matrix is:

$$  
V=  
\begin{bmatrix}  
1 & x_1 & x_1^2 & \cdots & x_1^{n-1}\\  
1 & x_2 & x_2^2 & \cdots & x_2^{n-1}\\  
1 & x_3 & x_3^2 & \cdots & x_3^{n-1}\\  
\vdots & \vdots & \vdots & \ddots & \vdots\\  
1 & x_n & x_n^2 & \cdots & x_n^{n-1}  
\end{bmatrix}  
$$

---

## Key Idea

Each row corresponds to one value $x_i$, and each column is a higher power:

- Column 1: all $1$
    
- Column 2: $x_i$
    
- Column 3: $x_i^2$
    
- etc.
    

---

## Determinant Formula

The [[determinant]] of a Vandermonde matrix has a famous closed form:

$$  
\det(V)=\prod_{1 \le i < j \le n}(x_j - x_i)  
$$

---

## Important Consequences

### 1. When is it zero?

$$  
\det(V)=0 \quad \text{iff some } x_i=x_j  
$$

So:

- If any two values repeat → matrix is singular (not invertible)
    
- If all $x_i$ are distinct → matrix is invertible
    

---

### 2. Structure Meaning

The determinant measures how “separated” the values $x_i$ are:

- More distinct spacing → larger determinant magnitude
    
- Repeated values collapse the matrix
    

---

## Why It Appears

Vandermonde matrices show up in:

- Polynomial [[Lagrange Interpolation Formula|interpolation]]
    
- Solving systems involving powers
    
- [[Linear Recursive Sequence|Linear recurrences]] (via eigenvalues)
    
- Discrete transforms
    

---

## Connection to Linear Algebra

If you diagonalize a matrix with distinct eigenvalues $\lambda_1, \dots, \lambda_n$, you often get expressions involving:

$$  
\lambda_i^k  
$$

This creates Vandermonde-like structure when solving for coefficients in recurrences or interpolation problems.

---

## Simple Example (2×2)

For $x_1, x_2$:

$$  
V=  
\begin{bmatrix}  
1 & x_1\\  
1 & x_2  
\end{bmatrix}  
$$

Determinant:

$$  
\det(V)=x_2 - x_1  
$$

---

## Simple Example (3×3)

$$  
V=  
\begin{bmatrix}  
1 & x_1 & x_1^2\\  
1 & x_2 & x_2^2\\  
1 & x_3 & x_3^2  
\end{bmatrix}  
$$

$$  
\det(V)=(x_2-x_1)(x_3-x_1)(x_3-x_2)  
$$

---

## Summary

- Vandermonde matrix = powers of variables
    
- Structure:
    

$$  
V_{ij}=x_i^{j-1}  
$$

- Determinant:
    

$$  
\det(V)=\prod_{i<j}(x_j-x_i)  
$$

- Key fact: invertible iff all $x_i$ are distinct
    
- Strong connection to polynomials and linear recurrences