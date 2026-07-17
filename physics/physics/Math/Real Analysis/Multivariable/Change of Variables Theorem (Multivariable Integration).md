The **Change of Variables Theorem** allows us to transform an integral from one coordinate system to another. It is the multivariable analogue of substitution in one-variable calculus.

#### Theorem

Let

- $f : D \subset \mathbb{R}^n \rightarrow \mathbb{R}$ be an integrable function.
    
- Let
    

$$  
x=x(u),  
$$

where

$$  
u=(u_1,u_2,\dots,u_n),  
$$

be a one-to-one, continuously differentiable change of coordinates mapping a domain

$$  
D^*  
$$

onto

$$  
D.  
$$

Then

$$  
\int_D f(x)dx
=
\int_{D^*}  
f(x(u))  
\left|  
\frac{\partial x}{\partial u}  
\right|  
du.  
$$

where

$$  
\frac{\partial x}{\partial u}
=
\det\left(  
\frac{\partial x_i}{\partial u_j}  
\right)  
$$

is the **Jacobian determinant** of the transformation. Another way to express this is

$$
J=\frac{\partial (x,y)}{\partial(u,v)} =  

\begin{vmatrix}  
\dfrac{\partial u}{\partial x} & \dfrac{\partial u}{\partial y}\newline  
\dfrac{\partial v}{\partial x} & \dfrac{\partial v}{\partial y}  
\end{vmatrix}.  
$$


The absolute value is used because area and volume must always remain nonnegative. 


In general, to determine a Jacobian matrix, you simply **arrange all the first-order partial derivatives of a vector-valued function into a matrix**.

Suppose you have a transformation

$$  
T:\mathbb{R}^n\to\mathbb{R}^m,  
$$

given by

$$  
y_1=f_1(x_1,\ldots,x_n),\qquad  
y_2=f_2(x_1,\ldots,x_n),\qquad  
\ldots,\qquad  
y_m=f_m(x_1,\ldots,x_n).  
$$

The Jacobian matrix is

$$  
J=  
\begin{pmatrix}  
\dfrac{\partial y_1}{\partial x_1} & \dfrac{\partial y_1}{\partial x_2} & \cdots & \dfrac{\partial y_1}{\partial x_n}\newline  
\dfrac{\partial y_2}{\partial x_1} & \dfrac{\partial y_2}{\partial x_2} & \cdots & \dfrac{\partial y_2}{\partial x_n}\newline  
\vdots & \vdots & \ddots & \vdots\newline  
\dfrac{\partial y_m}{\partial x_1} & \dfrac{\partial y_m}{\partial x_2} & \cdots & \dfrac{\partial y_m}{\partial x_n}  
\end{pmatrix}.  
$$

Rows correspond to the output variables.

Columns correspond to the input variables.

#### Interpretation

The theorem says:

1. Rewrite every variable in terms of the new coordinates.
    
2. Replace the differential element
    

$$  
dx  
$$

with

$$  
\left|  
\frac{\partial x}{\partial u}  
\right|  
du.  
$$

3. Integrate over the transformed region
    

$$  
D^*.  
$$

The Jacobian measures how much the transformation stretches or compresses infinitesimal area or volume elements.

---

#### Why the Jacobian Appears

A tiny rectangle (or box) in the new coordinates generally becomes a parallelogram (or parallelepiped) in the original coordinates.

The Jacobian determinant gives the scaling factor:

$$  
dV
=
\left|  
\frac{\partial x}{\partial u}  
\right|  
dU.  
$$

Thus,
$$  
\text{new volume}

(\text{stretch factor})  
\times  
(\text{old volume}).  
$$

---

#### Steps for Using the Theorem

Given

$$  
\int_D f(x)dx  
$$

perform the following steps:

- Choose a convenient coordinate transformation.
    
- Express every variable in terms of the new variables.
    
- Compute the Jacobian determinant.
    
- Transform the region of integration.
    
- Replace
    

$$  
dx  
\rightarrow  
\left|  
\frac{\partial x}{\partial u}  
\right|  
du.  
$$

- Evaluate the new integral.
    

---

#### Polar Coordinates (2D)

Transformation:

$$  
x=r\cos\theta,  
$$

$$  
y=r\sin\theta.  
$$

Jacobian:
 $$  
\frac{\partial(x,y)}{\partial(r,\theta)}

r.  
$$
Therefore,
 $$  
dx,dy

r,dr,d\theta.  
$$

Hence,
$$  
\iint_D f(x,y)\ dx \ dy
=
\iint_{D^*}  
f(r\cos\theta \ r\sin\theta)  
\ r \ dr \ d\theta.  
$$

##### When to Use

Use polar coordinates whenever the region or integrand contains expressions like

$$  
x^2+y^2,  
$$

circles,

$$  
x^2+y^2=a^2,  
$$

or radial symmetry.

---

#### Cylindrical Coordinates (3D)

Transformation:

$$  
x=r\cos\theta,  
$$

$$  
y=r\sin\theta,  
$$

$$  
z=z.  
$$

Jacobian:
$$  
\frac{\partial(x,y,z)}{\partial(r,\theta,z)}
=
r.  
$$

Thus,

$$  
dV
=
r \ dr \ d\theta \ dz.  
$$

Integral formula:

$$  
\iiint_D f(x,y,z) \ dV
=
\iiint_{D^*}  
f(r\cos\theta \  r\sin\theta \ z)  
r \ dr \ d\theta \ dz.  
$$

##### When to Use

Useful for

- cylinders,
    
- cones,
    
- problems with rotational symmetry about the $z$-axis.
    

---

#### Spherical Coordinates (3D)

Transformation:

$$  
x=\rho\sin\phi\cos\theta,  
$$

$$  
y=\rho\sin\phi\sin\theta,  
$$

$$  
z=\rho\cos\phi.  
$$

Here

- $\rho$ is the distance from the origin,
    
- $\theta$ is the azimuthal angle in the $xy$-plane,
    
- $\phi$ is the angle measured from the positive $z$-axis.
    

Jacobian:

$$  
\frac{\partial(x,y,z)}{\partial(\rho,\theta,\phi)}
=
\rho^2\sin\phi.  
$$

Hence,
$$  
dV
=
\rho^2\sin\phi  
,d\rho,d\theta,d\phi.  
$$

Integral formula:

$$  
\iiint_D f(x,y,z)dV
=
\iiint_{D^*}  
f(\rho,\theta,\phi) \ 
\rho^2 \ \sin\phi \ 
d\rho \ d\theta \ d\phi.  
$$

##### When to Use

Use spherical coordinates whenever the problem involves

- spheres,
    
- balls,
    
- expressions such as
    

$$  
x^2+y^2+z^2,  
$$

or full radial symmetry in three dimensions.

---

#### Common Jacobians

|Coordinate System|Transformation|Jacobian|Differential Element|
|---|---|---|---|
|Cartesian (2D)|$(x,y)$|$1$|$dx,dy$|
|Polar|$x=r\cos\theta,;y=r\sin\theta$|$r$|$r,dr,d\theta$|
|Cartesian (3D)|$(x,y,z)$|$1$|$dx,dy,dz$|
|Cylindrical|$x=r\cos\theta,;y=r\sin\theta,;z=z$|$r$|$r,dr,d\theta,dz$|
|Spherical|$x=\rho\sin\phi\cos\theta,;y=\rho\sin\phi\sin\theta,;z=\rho\cos\phi$|$\rho^2\sin\phi$|$\rho^2\sin\phi,d\rho,d\theta,d\phi$|

---

#### Key Points to Remember

- Multivariable substitution always requires the **Jacobian determinant**.
    
- The Jacobian accounts for stretching or shrinking of area/volume.
    
- Always transform **both** the integrand and the region of integration.
    
- Common Jacobians:
    
    - Polar: $r$
        
    - Cylindrical: $r$
        
    - Spherical: $\rho^2\sin\phi$
        
- Use the absolute value of the Jacobian determinant in the change of variables formula.