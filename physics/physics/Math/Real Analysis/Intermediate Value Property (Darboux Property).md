A function

$$  
f:I\to\mathbb{R},  
$$

where $I$ is an interval, is said to have the **intermediate value property (IVP)** or **Darboux property** if for every $a,b\in I$ with $a<b$, and every number $y$ satisfying

$$  
\min{f(a),f(b)}\le y\le\max{f(a),f(b)},  
$$

there exists a point

$$  
c\in[a,b]  
$$

such that

$$  
f(c)=y.  
$$

Equivalently,

$$  
f([a,b])  
$$

contains every value between $f(a)$ and $f(b)$.

---

#### Geometric Interpretation

The graph of a Darboux function cannot **jump over** a value.

If the function changes from one value to another, it must pass through every intermediate value.

Unlike continuity, the graph **may still have discontinuities**.

---

#### Relation to Continuity

Every continuous function has the intermediate value property.

**Reason:** If $[a,b]$ is connected and $f$ is continuous, then

$$  
f([a,b])  
$$

is connected. Since the connected subsets of $\mathbb{R}$ are exactly intervals,

$$  
f([a,b])  
$$

contains every intermediate value.

The converse is **false**.

There exist functions with the intermediate value property that are discontinuous everywhere.

---

#### Equivalent Characterization

A function has the Darboux property if and only if for every interval

$$  
J\subseteq I,  
$$

the image

$$  
f(J)  
$$

is an interval.

Thus Darboux functions preserve connectedness of intervals, even if they are not continuous.

---

#### Intermediate Value Theorem

If

$$  
f:[a,b]\to\mathbb{R}  
$$

is continuous and

$$  
f(a)\ne f(b),  
$$

then for every
$$
y  
$$
between

$$  
f(a)  
\quad\text{and}\quad  
f(b),  
$$

there exists

$$  
c\in(a,b)  
$$

such that

$$  
f(c)=y.  
$$

This theorem states that **continuity implies the Darboux property**.

---

#### Darboux's Theorem (Derivatives)

Every derivative has the intermediate value property.

If

$$  
f  
$$

is differentiable on an interval, then

$$  
f'  
$$

cannot have jump discontinuities.

A derivative need **not** be continuous, but it is always a Darboux function.

---

#### Examples

**Continuous functions**

- Polynomials
    
- Exponential and logarithmic functions
    
- Trigonometric functions
    
- Absolute value
    

All are continuous, hence Darboux.

---

**Derivative that is not continuous**

$$  
f(x)=  
\begin{cases}  
x^2\sin\left(\frac1x\right), & x\ne0,\  
0, & x=0.  
\end{cases}  
$$

Its derivative is

$$  
f'(x)=  
\begin{cases}  
2x\sin\left(\frac1x\right)-\cos\left(\frac1x\right), & x\ne0,\  
0, & x=0,  
\end{cases}  
$$

which is discontinuous at

$$  
x=0,  
$$

yet still has the intermediate value property because it is a derivative.

---

**Lebesgue's Everywhere Discontinuous Function**

There exists a function

$$  
f:[0,1]\to[0,1]  
$$

such that

- every interval is mapped onto
    
    $$  
    [0,1],  
    $$
    
- hence it satisfies the Darboux property,
    
- but it is discontinuous at every point.
    

This demonstrates that the Darboux property is strictly weaker than continuity.

---

#### Properties

If $f$ has the Darboux property, then:

- Every interval is mapped to an interval.
    
- Jump discontinuities are impossible.
    
- Oscillatory discontinuities are possible.
    
- The image of a connected set is connected.
    

---

#### What Is Not Preserved

The Darboux property **does not imply**:

- continuity,
    
- boundedness,
    
- monotonicity,
    
- differentiability,
    
- existence of limits at points.
    

---

#### Typical Proof Technique

To prove a function has the Darboux property:

1. Show the function is continuous, then apply the Intermediate Value Theorem.
    

or

2. Show the function is a derivative and apply Darboux's theorem.
    

or

3. Prove directly that the image of every interval is itself an interval.
    

---

#### Common Applications

- Existence of roots.
    
- Showing equations have solutions.
    
- Proving fixed-point results.
    
- Showing derivatives cannot jump.
    
- Establishing existence of points satisfying inequalities.
    
- Connectedness arguments in topology and analysis.
    

---

#### Key Facts to Remember

- **Continuous $\implies$ Darboux.**
    
- **Derivative $\implies$ Darboux.**
    
- **Darboux $\centernot\implies$ Continuous.**
    
- A function is Darboux **iff** the image of every interval is an interval.
    
- The essential idea is **no value between two attained values can be skipped**.