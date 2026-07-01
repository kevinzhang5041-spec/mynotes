


A function

$$  
T:V\rightarrow W  
$$

between vector spaces is a **linear transformation** if for all vectors $$u,v\in V$$ and scalars: $$c\in F$$
Addition:

$$  
T(u+v)=T(u)+T(v)  
$$

Scalar multiplication:

$$  
T(cu)=cT(u)  
$$

Together:

$$  
T(cu+v)=cT(u)+T(v)  
$$

---

# 2. Important consequences

### Zero goes to zero

$$  
T(0)=0  
$$

Proof:

$$  
T(0)=T(0+0)=T(0)+T(0)  
$$

Subtract $$T(0)$$:

$$  
T(0)=0  
$$

---

### Negative vectors

$$  
T(-v)=-T(v)  
$$

because:

$$  
0=T(0)=T(v-v)=T(v)+T(-v)  
$$

---

# 3. Kernel / Null Space

The **null space** is:

$$  
N(T)={v\in V:T(v)=0}  
$$

It is the set of vectors that get sent to zero.

Example:

$$  
T(x,y)=(y,0)  
$$

Then:

$$  
T(x,y)=0  
$$

means:

$$  
(y,0)=(0,0)  
$$

so:

$$  
y=0  
$$

Therefore:

$$  
N(T)={(x,0)}  
$$

---

# 4. Range

The **range** is all possible outputs:

$$  
R(T)={T(v):v\in V}  
$$

Example:

$$  
T(x,y)=(y,0)  
$$

Outputs:

$$  
(a,0)  
$$

so:

$$  
R(T)={(a,0):a\in F}  
$$

---

# 5. Basis determines a transformation

If

$$  
{v_1,\dots,v_n}  
$$

is a basis of $$V$$, then choosing

$$  
T(v_1),\dots,T(v_n)  
$$

completely determines $$T$$.

Because every vector:

$$  
v=c_1v_1+\cdots+c_nv_n  
$$

and therefore:

$$  
T(v)=c_1T(v_1)+\cdots+c_nT(v_n)  
$$

---

# 6. Matrix representation

A linear map:

$$  
T:F^n\rightarrow F^m  
$$

is represented by an

$$  
m\times n  
$$

matrix.

The matrix columns are:

$$  
A=  
\begin{bmatrix}  
|&|&&|\  
T(e_1)&T(e_2)&\cdots&T(e_n)\  
|&|&&|  
\end{bmatrix}  
$$

and:

$$  
T(x)=Ax  
$$

---

# 7. Range of a matrix

For:

$$  
T(x)=Ax  
$$

the range is the column space:

$$  
R(T)=\operatorname{Col}(A)  
$$

because:

$$  
Ax=x_1A_1+\cdots+x_nA_n  
$$

---

# 8. Rank and Nullity

Rank:

$$  
\operatorname{rank}(T)=\dim R(T)  
$$

Nullity:

$$  
\operatorname{nullity}(T)=\dim N(T)  
$$

---

# 9. Rank-Nullity Theorem

For finite-dimensional $$V$$:

$$  
\operatorname{rank}(T)+\operatorname{nullity}(T)=\dim V  
$$

Example:

If:

$$  
\dim V=5  
$$

and:

$$  
\operatorname{nullity}(T)=2  
$$

then:

$$  
\operatorname{rank}(T)=5-2=3  
$$

---

# 10. Zero transformation

The zero map:

$$  
T(v)=0  
$$

for every $$v$$.

Range:

$$  
{0}  
$$

Null space:

$$  
V  
$$

---

# 11. Identity transformation

$$  
I(v)=v  
$$

Range:

$$  
V  
$$

Null space:

$$  
{0}  
$$

---

# 12. Composition

If:

$$  
T:V\rightarrow W  
$$

and:

$$  
S:W\rightarrow U  
$$

then:

$$  
(S\circ T)(v)=S(T(v))  
$$

is linear.

---

# 13. Invertible transformations

A linear transformation has an inverse if:

$$  
T^{-1}T=I  
$$

Equivalent conditions:

$$  
T \text{ is one-to-one}  
$$

$$  
T \text{ is onto}  
$$

$$  
N(T)={0}  
$$

$$  
\operatorname{rank}(T)=\dim V  
$$

---

# 14. Dimension of all transformations

If:

$$  
\dim V=n  
$$

and:

$$  
\dim W=m  
$$

then:

$$  
\dim L(V,W)=mn  
$$

because an $$m\times n$$ matrix has $$mn$$ entries.

---

## Problem checklist

Linearity:

$$  
T(cu+v)=cT(u)+T(v)  
$$

Null space:

$$  
T(v)=0  
$$

Range:

$$  
{T(v)}  
$$

Rank:

$$  
\dim(\text{range})  
$$

Nullity:

$$  
\dim(\text{kernel})  
$$

Main theorem:

$$  
\boxed{\operatorname{rank}(T)+\operatorname{nullity}(T)=\dim V}  
$$