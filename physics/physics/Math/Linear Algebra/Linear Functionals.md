
## Definition

A **linear functional** is a linear transformation from a vector space $(V)$ to its field of scalars $(F)$.

$$  
f:V\to F  
$$

It satisfies

$$  
f(u+v)=f(u)+f(v)  
$$

and

$$  
f(cv)=cf(v).  
$$

---

## Kernel (Null Space)

The kernel of a linear functional is

$$  
\ker(f)={v\in V:f(v)=0}.  
$$

- It is always a subspace of (V).
    
- If (f\neq0), then
    

$$  
\dim(\ker f)=\dim(V)-1.  
$$

Thus the kernel is a **hyperplane**.

---

## Zero Functional

The function

$$  
f(v)=0\quad\forall v\in V  
$$

is called the **zero functional**.

Its kernel is

$$  
\ker(f)=V.  
$$

---

## Matrix Representation

If

$$  
V=F^n,  
$$

every linear functional has the form

# $$  
f(x_1,\ldots,x_n)

a_1x_1+\cdots+a_nx_n.  
$$

Equivalently,

$$  
f(x)=  
\begin{bmatrix}  
a_1&\cdots&a_n  
\end{bmatrix}  
x.  
$$

So a linear functional is represented by a **row vector**.

---

## Basis Representation

Let

$$  
B={v_1,\ldots,v_n}.  
$$

A linear functional is completely determined by its values on the basis:

$$  
f(v_1),\ldots,f(v_n).  
$$

For

$$  
v=\sum_{i=1}^n c_i v_i,  
$$

we have

$$  
f(v)=\sum_{i=1}^n c_i f(v_i).  
$$

---

## Dual Space

The set of all linear functionals on (V) is called the **dual space**,

$$  
V^*.  
$$

If

$$  
\dim(V)=n,  
$$

then

$$  
\dim(V^*)=n.  
$$

---

## Dual Basis

If

$$  
B={v_1,\ldots,v_n}  
$$

is a basis of (V), then the **dual basis**

$$  
B^*={f_1,\ldots,f_n}  
$$

is defined by

$$  
f_i(v_j)=  
\begin{cases}  
1,&i=j,\newline  
0,&i\neq j.  
\end{cases}  
$$

Equivalently,

$$  
f_i(v_j)=\delta_{ij},  
$$

where

$$  
\delta_{ij}=  
\begin{cases} 
1,&i=j,\newline  
0,&i\neq j  
\end{cases}  
$$

---

## Constructing the Dual Basis

If

$$  
v=\sum_{i=1}^n c_i v_i,  
$$

then

$$  
f_i(v)=c_i.  
$$

Each dual basis functional simply extracts one coordinate.

---

## Rank–Nullity

For a nonzero linear functional,

$$  
\operatorname{rank}(f)=1.  
$$

Hence
$$  
\dim(V)

\dim(\ker f)+1.  
$$

---

## Composition

If

$$  
T:V\to W  
$$

is linear and

$$  
g:W\to F  
$$

is a linear functional, then

$$  
g\circ T  
$$

is also a linear functional on (V).

---

## Important Facts

- A linear functional is determined entirely by its values on a basis.
    
- Every nonzero linear functional has rank $(1)$.
    
- Every nonzero linear functional has a kernel of codimension $(1)$.
    
- Every row vector defines a unique linear functional on $(F^n)$.
    
- The dual space $(V^*)$ has the same dimension as $(V)$.
    
- The dual basis extracts coordinates relative to a chosen basis.