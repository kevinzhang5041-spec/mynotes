A [[Jordan Canonical Form|Jordan]] block for eigenvalue $\lambda$ looks like 

$$  
J=  
\begin{bmatrix}  
\lambda & 1 & 0 & \cdots & 0 \\  
0 & \lambda & 1 & \cdots & 0 \\  
0 & 0 & \lambda & \cdots & 0 \\  
\vdots & \vdots & \vdots & \ddots & 1 \\  
0 & 0 & 0 & \cdots & \lambda  
\end{bmatrix}  
$$

Write it as //

$$  
J = \lambda I + N  
$$

where:

- $N$ has 1’s on the superdiagonal
    
- $N$ is nilpotent: $N^k = 0$ for size $k$
    

---

## Key idea

Use binomial theorem for matrices:

$$  
(\lambda I + N)^n = \sum_{m=0}^{k-1} \binom{n}{m} \lambda^{,n-m} N^m  
$$

(since $N^k = 0$, the sum stops)

---

## Entry formula

The $(i,j)$ entry of $J^n$ is //

$$  
(J^n)_{ij} = \binom{n}{j-i}\lambda^{,n-(j-i)}  
$$

for $j \ge i$, and $0$ otherwise.

Equivalently (as your book writes) //

$$  
(J^n)_{ij} = \binom{n}{j-i}\lambda^{,n+i-j}  
$$

---

## Why binomial coefficients appear

- Each step of multiplying by $J$ can either:
    
    - stay on the diagonal (multiply by $\lambda$), or
        
    - move upward via the superdiagonal 1’s
        
- Counting how many ways to make $j-i$ “moves upward” in $n$ steps gives:
    

$$  
\binom{n}{j-i}  
$$

So:

- powers of $\lambda$ come from diagonal scaling
    
- binomial coefficients count paths through the Jordan chain
    

---

## Simple example (2×2 block)

$$  
J=  
\begin{bmatrix}  
\lambda & 1 \\  
0 & \lambda  
\end{bmatrix}  
$$

Then 

$$  
J^n=  
\begin{bmatrix}  
\lambda^n & n\lambda^{n-1} \\  
0 & \lambda^n  
\end{bmatrix}  
$$

because:

- $\binom{n}{1}=n$
    

---

## Intuition summary

- Jordan block = “almost diagonal” matrix
    
- diagonal part gives $\lambda^n$
    
- superdiagonal creates combinatorial mixing
    
- binomial coefficients count how many times the “shift” happens
    

---

## Big picture

Jordan blocks explain why solutions to recurrences include terms like:

$$  
n\lambda^n,\quad n^2\lambda^n,\quad \dots  
$$

instead of only pure exponentials.