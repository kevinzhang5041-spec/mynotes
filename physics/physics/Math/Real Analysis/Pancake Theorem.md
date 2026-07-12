Given any planar region of finite area (a "pancake"), there exists a line that divides it into two parts of **equal area**.

More generally, given **two** planar regions of finite area, there exists a single line that simultaneously bisects both regions.

---

#### Geometric Interpretation

A straight line can always be chosen so that

- half of the area of the region lies on one side,
    
- half lies on the other side.
    

For two regions, the same line bisects both simultaneously.

---

#### One-Pancake Version

Let

$$  
R\subseteq\mathbb{R}^2  
$$

be a bounded measurable region.

Then there exists a line

$$  
L  
$$

such that

# $$  
\operatorname{Area}(R\cap L^+)

# \operatorname{Area}(R\cap L^-)

\frac12\operatorname{Area}(R),  
$$

where

- $L^+$ and $L^-$ are the two half-planes determined by $L$.
    

---

#### Proof Idea (Single Region)

Fix a direction.

Slide a line perpendicular to that direction across the region.

Define

# $$  
A(t)

\text{area on one side of the line}.  
$$

Then

- $A(t)$ is continuous,
    
- initially
    
    $$  
    A(t)=0,  
    $$
    
- eventually
    
    $$  
    A(t)=\operatorname{Area}(R).  
    $$
    

By the Intermediate Value Theorem,

there exists a position where

# $$  
A(t)

\frac12\operatorname{Area}(R).  
$$

---

#### Two-Pancake Theorem

Given two bounded regions

$$  
R_1,R_2\subseteq\mathbb{R}^2,  
$$

there exists a line that simultaneously satisfies

# $$  
\operatorname{Area}(R_1\cap L^+)

\operatorname{Area}(R_1\cap L^-),  
$$

and

# $$  
\operatorname{Area}(R_2\cap L^+)

\operatorname{Area}(R_2\cap L^-).  
$$

---

#### Proof Idea

For every angle

$$  
\theta,  
$$

choose the unique line of direction

$$  
\theta  
$$

that bisects the first region.

Now define

# $$  
F(\theta)

## \text{area of }R_2\text{ on one side}

\text{area on the other side}.  
$$

Properties:

- $F$ is continuous.
    
- Rotating the line by
    
    $$  
    180^\circ  
    $$
    
    reverses the sides, so
    
    # $$  
    F(\theta+\pi)
    
    -F(\theta).  
    $$
    

Therefore,

- either
    
    $$  
    F(\theta)=0  
    $$
    
    immediately,
    
- or
    
    $$  
    F(\theta)  
    $$
    
    changes sign.
    

By the Intermediate Value Theorem,

there exists

$$  
\theta_0  
$$

such that

$$  
F(\theta_0)=0.  
$$

The corresponding line bisects both regions.

---

#### Four-Quarter (Pizza) Theorem

Given one planar region, there exist two perpendicular lines dividing it into four equal-area parts.

---

#### Proof Idea

1. Rotate the region by an angle
    
    $$  
    \phi.  
    $$
    
2. Translate so the horizontal axis bisects the area.
    
3. Translate again so the vertical axis bisects the upper half.
    
4. Let
    
    $$  
    C(\phi),D(\phi)  
    $$
    
    denote the lower-left and lower-right areas.
    
5. The function
    
    $$  
    C(\phi)-D(\phi)  
    $$
    
    is continuous.
    
6. After a
    
    $$  
    180^\circ  
    $$
    
    rotation,
    
    $$  
    C-D  
    $$
    
    changes sign.
    
7. By the Intermediate Value Theorem,
    
    there exists
    
    $$  
    \phi_0  
    $$
    
    such that
    
    $$  
    C(\phi_0)=D(\phi_0).  
    $$
    

Since

$$  
A=B  
$$

by construction and

$$  
A+B=C+D,  
$$

all four regions have equal area.

---

#### Ham Sandwich Theorem

The Pancake Theorem is the two-dimensional case of the Ham Sandwich Theorem.

In $\mathbb{R}^n$:

Given $n$ bounded measurable sets,

there exists a hyperplane that simultaneously bisects all of them.

Examples:

- $\mathbb{R}^1$: one interval can be bisected by one point.
    
- $\mathbb{R}^2$: two pancakes can be bisected by one line.
    
- $\mathbb{R}^3$: a ham, a slice of cheese, and a piece of bread can all be bisected by one plane.
    

---

#### Why the Intermediate Value Theorem Works

Each proof constructs a continuous function measuring an imbalance.

Examples include

# $$  
F(t)

## \text{area on left}

\text{area on right},  
$$

or

# $$  
F(\theta)

\text{difference between two halves}.  
$$

Initially,

$$  
F<0,  
$$

and later,

$$  
F>0.  
$$

Continuity guarantees some parameter where

$$  
F=0,  
$$

producing the desired balanced cut.

---

#### Applications

- Computational geometry
    
- Fair division problems
    
- Image segmentation
    
- Geographic districting
    
- Measure theory
    
- Topological combinatorics
    
- The Borsuk–Ulam Theorem (a far-reaching generalization)
    

---

#### Key Facts

- Every planar region can be bisected by a line.
    
- Any two planar regions can be simultaneously bisected by one line.
    
- One planar region can be divided into four equal areas by two perpendicular lines.
    
- The Pancake Theorem is the $2$-dimensional case of the Ham Sandwich Theorem.
    
- All standard proofs rely on **continuity** and the **Intermediate Value Theorem** (or, in greater generality, the Borsuk–Ulam Theorem).