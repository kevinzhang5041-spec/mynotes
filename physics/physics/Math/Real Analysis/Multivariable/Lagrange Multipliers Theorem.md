The **Lagrange Multipliers Theorem** is a method for finding the **maximum** or **minimum** values of a function subject to one or more constraints.

#### Problem Setup

Suppose we want to optimize

$$  
f(x,y,z)  
$$

subject to the constraint

$$  
g(x,y,z)=C,  
$$

where $C$ is a constant.

The set

$$  
g(x,y,z)=C  
$$

is called the **constraint surface**.

#### Theorem

If $f(x,y,z)$ attains a maximum or minimum on the constraint surface

$$  
g(x,y,z)=C,  
$$

and the gradients exist with

$$  
\nabla g\neq \mathbf{0},  
$$

then at the optimal point,

$$  
\nabla f=\lambda \nabla g,  
$$

for some real number $\lambda$, called the **Lagrange multiplier**.

Equivalently,

$$  
\boxed{\nabla f \parallel \nabla g.}  
$$

---

#### Why the Gradients Must Be Parallel

Recall that:

- $\nabla f$ points in the direction of **greatest increase** of $f$.
    
- $\nabla g$ is **normal (perpendicular)** to the constraint surface.
    

At a constrained maximum or minimum, you are only allowed to move **along the constraint surface**.

If $\nabla f$ had any component tangent to the surface, then moving slightly along the surface would increase or decrease $f$, contradicting that the point is an optimum.

Therefore,

- $\nabla f$ cannot have a tangential component.
    
- It must point entirely in the normal direction.
    

Since $\nabla g$ is also normal to the surface,

$$  
\nabla f=\lambda\nabla g.  
$$

---

#### System of Equations

For

$$  
f(x,y,z)  
$$

subject to

$$  
g(x,y,z)=C,  
$$

compute

$$  
\nabla f=  
\left(  
\frac{\partial f}{\partial x},  
\frac{\partial f}{\partial y},  
\frac{\partial f}{\partial z}  
\right),  
$$

and

$$  
\nabla g=  
\left(  
\frac{\partial g}{\partial x},  
\frac{\partial g}{\partial y},  
\frac{\partial g}{\partial z}  
\right).  
$$

Then solve

$$  
\nabla f=\lambda\nabla g,  
$$

together with the constraint

$$  
g(x,y,z)=C.  
$$

This gives the system

# $$  
\frac{\partial f}{\partial x}

\lambda  
\frac{\partial g}{\partial x},  
$$

# $$  
\frac{\partial f}{\partial y}

\lambda  
\frac{\partial g}{\partial y},  
$$

# $$  
\frac{\partial f}{\partial z}

\lambda  
\frac{\partial g}{\partial z},  
$$

$$  
g(x,y,z)=C.  
$$

There are four equations in the four unknowns

$$  
x,;y,;z,;\lambda.  
$$

---

#### Geometric Interpretation

Think of

$$  
f(x,y,z)=k  
$$

as a family of **level surfaces**.

As $k$ changes, these level surfaces move.

The maximum or minimum occurs when a level surface of $f$ **just touches** the constraint surface

$$  
g(x,y,z)=C  
$$

without crossing it.

At the point of tangency, the two surfaces share the same tangent plane.

Since the gradient is perpendicular to the tangent plane, both surfaces have parallel normals:

$$  
\nabla f\parallel\nabla g.  
$$

---

#### Procedure

1. Write the objective function $f$.
    
2. Write the constraint $g=C$.
    
3. Compute $\nabla f$ and $\nabla g$.
    
4. Set
    
    $$  
    \nabla f=\lambda\nabla g.  
    $$
    
5. Include the constraint equation.
    
6. Solve for $x,y,z,\lambda$.
    
7. Evaluate $f$ at all candidate points to determine the maximum and minimum.
    

---

#### Example

Maximize

$$  
f(x,y)=xy  
$$

subject to

$$  
x^2+y^2=1.  
$$

Compute

$$  
\nabla f=(y,x),  
$$

$$  
\nabla g=(2x,2y).  
$$

Set

$$  
(y,x)=\lambda(2x,2y).  
$$

This gives

$$  
y=2\lambda x,  
$$

$$  
x=2\lambda y,  
$$

together with

$$  
x^2+y^2=1.  
$$

From the first two equations,

$$  
x=\pm y.  
$$

Using the constraint,

$$  
x=\pm\frac{1}{\sqrt2},  
\qquad  
y=\pm\frac{1}{\sqrt2}.  
$$

Evaluating

$$  
f(x,y)=xy,  
$$

gives

- Maximum:
    
    $$  
    \frac12  
    $$
    
    at
    
    $$  
    \left(\frac1{\sqrt2},\frac1{\sqrt2}\right),  
    \qquad  
    \left(-\frac1{\sqrt2},-\frac1{\sqrt2}\right).  
    $$
    
- Minimum:
    
    $$  
    -\frac12  
    $$
    
    at
    
    $$  
    \left(\frac1{\sqrt2},-\frac1{\sqrt2}\right),  
    \qquad  
    \left(-\frac1{\sqrt2},\frac1{\sqrt2}\right).  
    $$
    

---

#### Key Facts

- Lagrange multipliers find extrema **subject to constraints**.
    
- At an optimum,
    
    $$  
    \boxed{\nabla f=\lambda\nabla g.}  
    $$
    
- The constraint equation must always be solved together with the multiplier equations.
    
- Geometrically, the optimum occurs where the level surface of $f$ is **tangent** to the constraint surface.