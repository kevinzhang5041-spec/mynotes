A force $F(x,v,t)$ can vary with time $t$, velocity $v$, and time $t$. In most cases, we will only deal with a force that varies with one variable, allowing us to differentiate [[Newton's Laws]]. 

We can then solve for constants with given initial conditions.

$F$ is a function of $t$ only:
$$
m\frac{dv}{dt}= F(t)
$$
Separating and integrating,
$$
m \, v(t) = m \int_{v_0}^{v(t)}dv' = \int_{t_0}^{t}F(t')dt' 
$$
Can be used in combination with
$$
\int_{x_0}^{x(t)}dx' = \int_{t_0}^{t} v(t')dt'
$$
to solve for $x(t)$.

$F$ is a function of $x$ only:
$$
a = \frac{dv}{dt} = \frac{dx}{dt}\frac{dv}{dx} = v \frac{dv}{dx}
$$
$F=ma$ becomes
$$
mv\frac{dv}{dx} = F(x).
$$
This then becomes
$$
m \int_{x_0}^{x(t)}\frac{dx'}{v(x')} = \int_{t_0}^{t}dt'.
$$
This is useful in the case of [[Simple Harmonic Motion|simple harmonic motion]]. 

$F$ is a function of $v$:
$F=ma$ is written as
$$
m\frac{dv}{dt}=F(v).
$$

Separating and integrating,
$$
m\int_{v_0}^{v(t)} \frac{dv'}{F(v')}=\int_{t_0}^{t}
dt'.$$
We can also then write
$$
m\int_{v_0}^{v(t)} \frac{v'dv'}{F(v')}=\int_{x_0}^{x}
dx'
$$
to obtain a function $v$ of $x$.

This is useful in the case of [[Drag|drag]].



#Differentials
