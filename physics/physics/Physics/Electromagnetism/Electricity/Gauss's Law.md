Gauss's law states that the [[Physics/Electromagnetism/Flux|flux]] $\phi$ passing through a Gaussian surface (closed surface) is given by
$$
\phi_e = \frac{Q_{enc}}{\epsilon_0} = \oint \vec{E}  d\vec{A}
$$
where $Q_{enc}$ is the charge enclosed by the surface. 

$$
\rho(y) =- \epsilon_0\frac{dE}{dy}
$$
#Proof
Consider two concentric spheres with radii $r$ and $R$, ![[Gauss's Law Spheres]]

The [[Electric Field|electric field]] at a point on $s_1$ is $\frac{q}{4\pi\epsilon_0 r^2}$ and the field on $s_2$ is  $s_1$ is $\frac{q}{4\pi\epsilon_0 R^2}$. Taking these values and multiplying it over the surface areas $4\pi r^2$ and $4\pi R^2$ we get
$$
\frac{q}{\epsilon_0} =  Es_1 = Es_2
$$
proving that flux is constant no matter the distance from the source. This result is a direct consequence of the fact that field falls of with the $\frac{1}{d^2}$ of [[Coulomb's Law]]. A very similar statement is [[Shell Theorem]]. 

For a non-spherical surface $s_o$, first consider a spherical surface $s_i$ within $s_o$.![[Gauss's Law Non Spherical]]
Consider a slice like the one drawn above. $A_i$ of $S_i$ and $A_o$ of $S_o$ are small enough to be considered as flat planes, and where $A_o$'s surface vector is offset from the vertical by an angle $\theta$.  The field arriving at $dA_i$ is completely normal (the image is not very good scale), while the the field arriving at $dA_o$ is at an angle $\theta$ from the surface vector. 
The size of $A_o$ is a factor $(\frac{R}{r})^2 \cos(\theta)$ larger than $A_i$, and the field $E_0$ at $A_0$ is is a factor $(\frac{R}{r})^2 \cos(\theta)$ smaller than $E_i$, the field at $A_i$. Considering flux,
$$
E_o A_o = E_i((\frac{r}{R})^2 \frac{1}{\cos(\theta)}) A_i((\frac{R}{r})^2 \cos(\theta)) = E_i A_i
$$

Extrapolating this across the entirety of $S_o$, we find that $\phi_o = \phi_i$.  

For charge distributions with more than a single charge, simply [[Superimposition|superimpose]] the fluxes. 
$$
\int E \cdot dA = \frac{1}{\epsilon_0} \sum_{i} q_i = \frac{1}{\epsilon_0}\int \rho dv
$$

Add these problems to handout:
Some Ideas:
The field inside a uniformly charged spherical shell is $0$. Confirm this result using Gauss's law. Why can't we use the same logic with a non uniformly charged shell?


