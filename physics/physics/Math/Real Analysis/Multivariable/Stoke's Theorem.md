#### The Generalized Stokes Theorem

The three major integral theorems of vector calculus are all special cases of the **Generalized Stokes Theorem**.

It states that the integral of a derivative over a region equals the integral of the original quantity over the boundary of that region.

In differential forms notation,

$$  
\int_M d\omega=\int_{\partial M}\omega.  
$$

The philosophy is:

- **Differentiate inside.**
    
- **Integrate over the boundary.**
    

---

#### Green's Theorem (2D)

Relates a **line integral around a closed curve** to a **double integral over the enclosed region**.

Suppose

- $C=\partial D$ is a positively oriented (counterclockwise) simple closed curve.
    
- $P,Q$ have continuous first partial derivatives.
    

Then

$$  
\oint_C P \ dx+Q \ dy
=
\iint_D  
\left(  
\frac{\partial Q}{\partial x}
-
\frac{\partial P}{\partial y}  
\right)  \
dA.  
$$

The quantity

$$  
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}  
$$

is the **2D curl**.

**Interpretation**

- Left side: circulation around the boundary.
    
- Right side: total rotation inside the region.
    

---

#### Stokes' Theorem (3D)

Generalizes Green's theorem to surfaces in $\mathbb R^3$.

Suppose

- $S$ is an oriented smooth surface.
    
- $\partial S=C$ is its positively oriented boundary.
    
- $\mathbf F$ is continuously differentiable.
    

Then

$$  
\oint_C\mathbf F\cdot d\mathbf r
=
\iint_S  
(\nabla\times\mathbf F)\cdot\mathbf n \ dS.  
$$

**Interpretation**

- Left side: circulation around the boundary curve.
    
- Right side: total curl passing through the surface.
    

The orientation follows the **right-hand rule**:

- Curl fingers in the direction of traversal.
    
- Thumb points along the chosen normal.
    

---

#### Divergence (Gauss) Theorem

Relates the **flux across a closed surface** to the **divergence inside the volume**.

Suppose

- $V$ is a solid region.
    
- $S=\partial V$ is its closed boundary surface.
    
- $\mathbf F$ is continuously differentiable.
    

Then

$$  
\iint_S  
\mathbf F\cdot\mathbf n \ dS
=
\iiint_V  
\nabla\cdot\mathbf F \ dV.  
$$

where

$$  
\nabla\cdot\mathbf F
=
\frac{\partial P}{\partial x}  
+  
\frac{\partial Q}{\partial y}  
+  
\frac{\partial R}{\partial z}.  
$$

**Interpretation**

- Left side: total outward flux through the boundary.
    
- Right side: total source strength inside the region.
    

Positive divergence means the field behaves like a source.

Negative divergence means the field behaves like a sink.

---

#### Comparison

|Theorem|Boundary Integral|Interior Integral|Measures|
|---|---|---|---|
|Green|Line integral|Double integral|2D curl|
|Stokes|Line integral|Surface integral|Curl|
|Gauss|Surface integral|Triple integral|Divergence|

---

#### Relationship Between the Three

Green's theorem is simply Stokes' theorem applied to a flat surface in the $xy$-plane.

For

$$  
\mathbf F=(P,Q,0),  
$$

we have

$$  
\nabla\times\mathbf F
=
\left(  
0,  
0,  
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}  
\right).  
$$

Thus Stokes becomes Green.

Gauss' theorem is another version of the same general principle, replacing **curl** with **divergence** and relating a volume to its enclosing surface.

---

#### Geometric Picture

**Green**

Boundary of a region $\rightarrow$ interior of the region

$$  
\oint_C  
\longleftrightarrow  
\iint_D  
$$

**Stokes**

Boundary curve $\rightarrow$ surface

$$  
\oint_{\partial S}  
\longleftrightarrow  
\iint_S  
$$

**Gauss**

Boundary surface $\rightarrow$ volume

$$  
\iint_{\partial V}  
\longleftrightarrow  
\iiint_V  
$$

---

#### Physical Interpretation

- **Green's theorem:** circulation around a planar loop equals total microscopic rotation inside.
    
- **Stokes' theorem:** circulation around a space curve equals total vorticity (curl) through the spanning surface.
    
- **Gauss' theorem:** net outward flow equals total amount produced inside.
    

---

#### When to Use

**Use Green's theorem when**

- The curve is closed in the plane.
    
- You need to convert a line integral to a double integral or vice versa.
    

**Use Stokes' theorem when**

- The boundary is a space curve.
    
- You are given or can compute the curl.
    

**Use Gauss' theorem when**

- The surface is closed.
    
- You are computing total flux.
    
- Computing the divergence is easier than evaluating the surface integral directly.
    

---

#### Summary

$$  
\boxed{  
\text{Circulation around a boundary}
=
\text{Curl through the interior}  
}  
$$

(Green and Stokes)

$$  
\boxed{  
\text{Flux through a boundary}
=
\text{Divergence inside}  
}  
$$

(Gauss)

All three are manifestations of the **Generalized Stokes Theorem**:

$$  
\boxed{  
\int_M d\omega=\int_{\partial M}\omega.  
}  
$$