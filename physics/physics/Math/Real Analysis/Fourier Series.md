#### Definition

A Fourier series represents a periodic function as a combination of sine and cosine functions.

$$  
\boxed{  
f(x)=\frac{a_0}{2}  
+\sum_{n=1}^{\infty}a_n\cos(nx)  
+\sum_{n=1}^{\infty}b_n\sin(nx)  
}  
$$

where:

- $a_n$ are cosine coefficients.
    
- $b_n$ are sine coefficients.
    
- $\frac{a_0}{2}$ is the average value of the function.
    

The idea:

$$  
\boxed{  
\text{Periodic function}=\text{sum of waves of different frequencies}  
}  
$$

---

#### Orthogonality

Sine and cosine functions are orthogonal on $[-\pi,\pi]$.

For $m\neq n$,

$$  
\int_{-\pi}^{\pi}\cos(mx)\cos(nx),dx=0  
$$

$$  
\int_{-\pi}^{\pi}\sin(mx)\sin(nx),dx=0  
$$

$$  
\int_{-\pi}^{\pi}\sin(mx)\cos(nx),dx=0  
$$

This allows each coefficient to be extracted independently.

---

#### Fourier Coefficients

For

$$  
f(x)=\frac{a_0}{2}  
+\sum_{n=1}^{\infty}a_n\cos(nx)  
+\sum_{n=1}^{\infty}b_n\sin(nx),  
$$

the coefficients are:

$$  
\boxed{  
a_0=  
\frac1\pi  
\int_{-\pi}^{\pi}f(x),dx  
}  
$$

$$  
\boxed{  
a_n=  
\frac1\pi  
\int_{-\pi}^{\pi}  
f(x)\cos(nx),dx  
}  
$$

$$  
\boxed{  
b_n=  
\frac1\pi  
\int_{-\pi}^{\pi}  
f(x)\sin(nx),dx  
}  
$$

---

#### Fourier Series on $[-L,L]$

For a function with period $2L$:
$$  
\boxed{  
f(x)

\frac{a_0}{2}  
+  
\sum_{n=1}^{\infty}  
a_n  
\cos\left(\frac{n\pi x}{L}\right)  
+  
\sum_{n=1}^{\infty}  
b_n  
\sin\left(\frac{n\pi x}{L}\right)  
}  
$$

where

$$  
a_n=  
\frac1L  
\int_{-L}^{L}  
f(x)  
\cos\left(\frac{n\pi x}{L}\right)dx  
$$

and

$$  
b_n=  
\frac1L  
\int_{-L}^{L}  
f(x)  
\sin\left(\frac{n\pi x}{L}\right)dx  
$$

---

#### Symmetry

##### Even Functions

If

$$  
f(-x)=f(x),  
$$

then $f$ is even.

Properties:

$$  
\boxed{  
b_n=0  
}  
$$

Only cosine terms remain:

$$  
f(x)

\frac{a_0}{2}  
+  
\sum_{n=1}^{\infty}a_n\cos(nx)  
$$

Example:

$$  
f(x)=x^2  
$$

---

##### Odd Functions

If

$$  
f(-x)=-f(x),  
$$

then $f$ is odd.

Properties:

$$  
\boxed{  
a_0=0,\qquad a_n=0  
}  
$$

Only sine terms remain:

$$  
f(x)

\sum_{n=1}^{\infty}b_n\sin(nx)  
$$

Example:

$$  
f(x)=x  
$$

---

#### Important Examples

##### Fourier Series of $x$

Since $x$ is odd:

$$  
a_n=0  
$$

Compute:

$$  
b_n=  
\frac1\pi  
\int_{-\pi}^{\pi}x\sin(nx),dx  
$$

Integration by parts gives:

$$  
b_n=  
\frac{2(-1)^{n+1}}n  
$$

Therefore:

$$  
\boxed{  
x=  
2\sum_{n=1}^{\infty}  
\frac{(-1)^{n+1}}n\sin(nx)  
}  
$$

---

##### Fourier Series of $x^2$

Since $x^2$ is even:

$$  
b_n=0  
$$

The expansion is:

$$  
\boxed{  
x^2

\frac{\pi^2}{3}  
+  
4\sum_{n=1}^{\infty}  
\frac{(-1)^n}{n^2}\cos(nx)  
}  
$$

---

#### Complex Fourier Series

Using Euler's formula:

$$  
e^{inx}=\cos(nx)+i\sin(nx)  
$$

the Fourier series becomes:

$$  
\boxed{  
f(x)=  
\sum_{n=-\infty}^{\infty}  
c_ne^{inx}  
}  
$$

where:

$$  
\boxed{  
c_n=  
\frac1{2\pi}  
\int_{-\pi}^{\pi}  
f(x)e^{-inx},dx  
}  
$$

---

#### Convergence

If $f$ is:

- periodic,
    
- piecewise continuous,
    
- has finitely many discontinuities,
    

then the Fourier series converges.

At continuous points:

$$  
\boxed{  
\text{Fourier series}=f(x)  
}  
$$

At jump discontinuities:

$$  
\boxed{  
\text{Fourier series}

\frac{f(x^-)+f(x^+)}2  
}  
$$

---

#### Parseval's Identity

Fourier series preserve energy:

$$  
\boxed{  
\frac1\pi  
\int_{-\pi}^{\pi}  
|f(x)|^2dx

\frac{a_0^2}{2}  
+  
\sum_{n=1}^{\infty}  
(a_n^2+b_n^2)  
}  
$$

Used to convert integrals into infinite sums.

---

#### Recognizing Fourier Series Problems

If a problem contains:

$$  
\sum_{n=1}^{\infty}  
a_n\cos(nx)  
$$

or

$$  
\sum_{n=1}^{\infty}  
b_n\sin(nx),  
$$

think:

$$  
\boxed{  
\text{Find the function with these Fourier coefficients}  
}  
$$

---

#### Common Coefficient Patterns

If coefficients contain:

$$  
\frac1{n^2+a^2},  
$$

look at exponential functions:

$$  
e^{ax}  
$$

because:

$$  
\int e^{ax}\cos(nx),dx  
$$

produces denominators of the form:

$$  
n^2+a^2  
$$

Example:

$$  
\int e^x\cos(nx)dx

\frac{e^x(\cos(nx)+n\sin(nx))}  
{n^2+1}  
$$

---

#### Removing Unwanted Terms

Often:

$$  
e^x  
$$

produces both:

$$  
\sum\frac{\cos(nx)}{n^2+1}  
$$

and

$$  
\sum\frac{n\sin(nx)}{n^2+1}.  
$$

Using:

$$  
e^{-x}  
$$

produces the same cosine terms but the opposite sine terms.

Adding the two equations cancels the sine series.

---

#### Main Takeaways

$$  
\boxed{  
\text{Fourier series decomposes periodic functions into frequencies}  
}  
$$

$$  
\boxed{  
\text{Even functions produce cosine series}  
}  
$$

$$  
\boxed{  
\text{Odd functions produce sine series}  
}  
$$

$$  
\boxed{  
\text{Coefficients are found by orthogonality integrals}  
}  
$$