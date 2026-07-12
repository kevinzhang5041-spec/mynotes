
The Jacobian is a determinant that describes how a transformation changes volume and how variables change under a multivariable transformation.

It is the multivariable analogue of the derivative.

---

#### Jacobian of Two Variables

Suppose

$$
x=x(u,v),
$$

and

$$
y=y(u,v).
$$

The Jacobian of $(x,y)$ with respect to $(u,v)$ is

$$
\boxed{
\frac{\partial(x,y)}{\partial(u,v)}
=
\begin{vmatrix}
\frac{\partial x}{\partial u} &
\frac{\partial x}{\partial v}
\\
\frac{\partial y}{\partial u} &
\frac{\partial y}{\partial v}
\end{vmatrix}.
}
$$

Expanding the determinant,

$$
\boxed{
\frac{\partial(x,y)}{\partial(u,v)}
=
\frac{\partial x}{\partial u}
\frac{\partial y}{\partial v}
-
\frac{\partial x}{\partial v}
\frac{\partial y}{\partial u}.
}
$$

---

#### Jacobian Matrix

The matrix

$$
\boxed{
J=
\begin{pmatrix}
\frac{\partial x_1}{\partial u_1} &
\frac{\partial x_1}{\partial u_2}
&
\cdots
&
\frac{\partial x_1}{\partial u_n}
\\
\frac{\partial x_2}{\partial u_1} &
\frac{\partial x_2}{\partial u_2}
&
\cdots
&
\frac{\partial x_2}{\partial u_n}
\\
\vdots & \vdots & \ddots & \vdots
\\
\frac{\partial x_n}{\partial u_1} &
\frac{\partial x_n}{\partial u_2}
&
\cdots
&
\frac{\partial x_n}{\partial u_n}
\end{pmatrix}
}
$$

is called the Jacobian matrix.

The Jacobian determinant is

$$
\boxed{
\det(J)
=
\frac{\partial(x_1,x_2,\ldots,x_n)}
{\partial(u_1,u_2,\ldots,u_n)}.
}
$$

---

#### Chain Rule for Jacobians

If

$$
x=x(u,v),
$$

and

$$
u=u(r,s),
$$

then

$$
\boxed{
\frac{\partial(x,y)}{\partial(r,s)}
=
\frac{\partial(x,y)}{\partial(u,v)}
\frac{\partial(u,v)}{\partial(r,s)}.
}
$$

The Jacobian of a composite transformation is the product of the Jacobians.

---

#### Inverse Jacobian

If the transformation is invertible, then

$$
\boxed{
\frac{\partial(u,v)}{\partial(x,y)}
=
\frac{1}
{\frac{\partial(x,y)}{\partial(u,v)}}.
}
$$

This requires

$$
\frac{\partial(x,y)}{\partial(u,v)}\neq0.
$$

---

#### Change of Variables in Double Integrals

If

$$
x=x(u,v),
$$

and

$$
y=y(u,v),
$$

then

$$
\boxed{
dx\,dy
=
\left|
\frac{\partial(x,y)}{\partial(u,v)}
\right|
du\,dv.
}
$$

Therefore,

$$
\boxed{
\iint_R f(x,y)\,dx\,dy
=
\iint_S
f(x(u,v),y(u,v))
\left|
\frac{\partial(x,y)}{\partial(u,v)}
\right|
du\,dv.
}
$$

---

#### Polar Coordinates

The transformation is

$$
x=r\cos\theta,
$$

$$
y=r\sin\theta.
$$

The Jacobian is

$$
\frac{\partial(x,y)}{\partial(r,\theta)}
=
\begin{vmatrix}
\cos\theta & -r\sin\theta
\\
\sin\theta & r\cos\theta
\end{vmatrix}.
$$

Expanding,

$$
=
r\cos^2\theta+r\sin^2\theta.
$$

Using

$$
\cos^2\theta+\sin^2\theta=1,
$$

we get

$$
\boxed{
\frac{\partial(x,y)}{\partial(r,\theta)}
=
r.
}
$$

Hence,

$$
\boxed{
dx\,dy=r\,dr\,d\theta.
}
$$

---

#### Cylindrical Coordinates

The transformation is

$$
x=r\cos\theta,
$$

$$
y=r\sin\theta,
$$

$$
z=z.
$$

The volume element becomes

$$
\boxed{
dV=r\,dr\,d\theta\,dz.
}
$$

---

#### Spherical Coordinates

The transformation is

$$
x=\rho\sin\phi\cos\theta,
$$

$$
y=\rho\sin\phi\sin\theta,
$$

$$
z=\rho\cos\phi.
$$

The Jacobian determinant is

$$
\boxed{
\left|
\frac{\partial(x,y,z)}
{\partial(\rho,\phi,\theta)}
\right|
=
\rho^2\sin\phi.
}
$$

Therefore,

$$
\boxed{
dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
}
$$

---

#### Geometric Meaning

The Jacobian measures the local scaling factor of a transformation.

If

$$
\left|
\frac{\partial(x,y)}
{\partial(u,v)}
\right|>1,
$$

areas are expanded.

If

$$
\left|
\frac{\partial(x,y)}
{\partial(u,v)}
\right|<1,
$$

areas are compressed.

If

$$
\frac{\partial(x,y)}
{\partial(u,v)}=0,
$$

the transformation loses dimension locally and may not be invertible.

---

#### Key Facts

- The Jacobian is a determinant of partial derivatives.
- It generalizes the derivative to multiple variables.
- It appears in multivariable change of variables.
- The absolute value accounts for changes in orientation.
- A nonzero Jacobian allows a local inverse transformation.
- The fundamental formula is

$$
\boxed{
dx_1dx_2\cdots dx_n
=
\left|
\frac{\partial(x_1,\ldots,x_n)}
{\partial(u_1,\ldots,u_n)}
\right|
du_1du_2\cdots du_n.
}
$$