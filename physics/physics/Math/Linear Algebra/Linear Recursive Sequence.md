**Definition**  
A $k$th-order linear recurrence with constant coefficients has the form 

$$  
x_n = a_1 x_{n-1} + a_2 x_{n-2} + \cdots + a_k x_{n-k}, \quad n \ge k  
$$

- $a_1, \dots, a_k$ are constants
    
- Sequence is fully determined by initial values $x_0, \dots, x_{k-1}$
    

---

**Goal**  
Find an explicit formula for $x_n$.

---

**Matrix Form**

Define the state vector

$$  
v_n =  
\begin{bmatrix}  
x_{n+k-1} \\  
x_{n+k-2} \\  
\vdots \\  
x_n  
\end{bmatrix}  
$$

Then the recurrence becomes

$$  
v_{n+1} = A v_n  
$$

where $A$ is the companion matrix 

$$  
A =  
\begin{bmatrix}  
a_1 & a_2 & \cdots & a_k \\  
1 & 0 & \cdots & 0 \\  
0 & 1 & \cdots & 0 \\  
\vdots & \vdots & \ddots & \vdots \\  
0 & 0 & \cdots & 1  
\end{bmatrix}  
$$

---

**Key Reduction**

Iterating gives 

$$  
v_n = A^n v_0  
$$

So the problem becomes computing $A^n$.

---

**Eigenvalue Method**

If $A = PDP^{-1}$ (diagonalization), then

$$  
A^n = P D^n P^{-1}  
$$

and since $D$ is diagonal 

$$  
D^n =  
\begin{bmatrix}  
\lambda_1^n & 0 & \cdots \\  
0 & \lambda_2^n & \cdots \\  
\vdots & \vdots & \ddots  
\end{bmatrix}  
$$

---

**Characteristic Equation**

[[Eigenvectors and Eigenvalues|Eigenvalues]] satisfy

$$  
\det(A - \lambda I) = 0  
$$

This becomes the **[[Characteristic Equations|characteristic polynomial]]** of the recurrence.

---

**General Solution Form**

If eigenvalues are distinct:

$$  
x_n = c_1 \lambda_1^n + c_2 \lambda_2^n + \cdots + c_k \lambda_k^n  
$$

If repeated eigenvalues occur, terms like appear:

$$  
n \lambda^n, n^2 \lambda^n, \dots  
$$

(due to [[Jordan Canonical Form|Jordan blocks]])

Explicitly, a linear recurrence with constant coefficients has general solution of the form:

$$  
x_n = \sum_{i=1}^{t} \sum_{j=0}^{m_i - 1} \alpha_{ij} , n^{j} , \lambda_i^{,n}  
$$

Equivalently:

$$  
x_n = \sum_{i=1}^{t} \lambda_i^{,n} \sum_{j=0}^{m_i - 1} c_{ij} , n^{j}  
$$
- Each eigenvalue $\lambda_i$ contributes a term
    
- Each term is an exponential $\lambda_i^n$
    
- If eigenvalues are repeated (Jordan blocks), you multiply by powers of $n$
    
- So solutions look like:
    

$$  
(\text{polynomial in } n)\cdot(\lambda_i^n)  
$$

The general solution is always a **sum of exponential terms**, possibly multiplied by **polynomials in $n$** when eigenvalues repeat.


## Inhomogeneous Linear Recurrences 

A recurrence with an extra forcing term is:

$$  
x_n = a_1 x_{n-1} + \cdots + a_k x_{n-k} + f(n)  
$$

This is called **inhomogeneous** because of $f(n)$.


1. **Solve the homogeneous recurrence** (set $f(n)=0$):
    
$$  
x_n^{(h)} \ \text{(general solution)}  
$$

2. **Find one particular solution** to the full recurrence:
    
$$  
x_n^{(p)}  
$$

3. **Add them together**:
    
$$  
x_n = x_n^{(h)} + x_n^{(p)}  
$$

- $x_n^{(h)}$ = all solutions from the “no forcing” system
    
- $x_n^{(p)}$ = specific response to $f(n)$
    
- Total solution = homogeneous + particular
    

---

### Big picture

This is directly analogous to differential equations:

- homogeneous part = natural behavior
    
- particular part = effect of forcing term
    
- general solution = sum of both
---

**Connection to ODEs**

Linear recurrences are the discrete analogue of linear differential equations:

- exponentials in ODEs ↔ powers $\lambda^n$ in recurrences
    
- eigenvalues play the same role as characteristic roots
    

---

**Summary**

- Recurrence → matrix form $v_{n+1}=Av_n$
    
- Solution reduces to $A^n v_0$
    
- Use eigenvalues / diagonalization / Jordan form
    
- Final answer is a combination of $\lambda^n$ terms (and possibly $n\lambda^n$ terms)