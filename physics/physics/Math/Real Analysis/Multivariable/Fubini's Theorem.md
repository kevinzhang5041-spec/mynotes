#### Fubini's Theorem

Suppose $f(x,y)$ is integrable on a product domain $A\times B$.

If $f$ is **absolutely integrable**, i.e.

$$  
\int_{A\times B}|f(x,y)|,dA<\infty  
$$

then the double integral may be computed as either iterated integral:

$$  
\int_A\int_B f(x,y),dy,dx
=
\int_B\int_A f(x,y),dx,dy
=
\int_{A\times B}f(x,y),dA.  
$$

Thus **the order of integration may be exchanged**.

#### Tonelli's Theorem

Suppose

$$  
f(x,y)\ge0.  
$$

Then

$$  
\int_{A\times B}f(x,y),dA
=
\int_A\left(\int_B f(x,y),dy\right)dx
=
\int_B\left(\int_A f(x,y),dx\right)dy,  
$$

even if the integral is infinite.

Tonelli therefore allows us to interchange the order **without assuming absolute integrability**, provided the integrand is nonnegative.

#### Relationship

Tonelli is the more fundamental theorem.

- Tonelli: $f\ge0$
    
- Fubini: $\int|f|<\infty$
    

Since every absolutely integrable function satisfies

$$  
f=f^+-f^-,  
$$

where

$$  
f^+=\max(f,0),\qquad  
f^-=\max(-f,0),  
$$

Tonelli applies separately to $f^+$ and $f^-$, yielding Fubini.

#### When to Use

|Situation|Theorem|
|---|---|
|$f\ge0$|Tonelli|
|$f$ changes sign but $\int|f|
|$f$ changes sign and absolute convergence is unknown|Cannot interchange without further justification|

#### Common Applications

- Changing the order of integration.
    
- Separating variables:
    

$$  
\int_A\int_B g(x)h(y),dy,dx
=
\left(\int_A g(x),dx\right)  
\left(\int_B h(y),dy\right).  
$$

- Justifying term-by-term integration of nonnegative series:
    

$$  
\int\sum_{n=1}^\infty f_n
=
\sum_{n=1}^\infty\int f_n,  
\qquad f_n\ge0.  
$$

#### Trick for Remembering

- **Tonelli** → **T** for **Totally nonnegative**.
    
- **Fubini** → **F** for **Finite absolute integral**.
    

Tonelli proves that nonnegative functions may always be integrated iteratively. Fubini extends this to signed functions whose absolute value is integrable.