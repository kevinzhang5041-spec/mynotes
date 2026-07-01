
For infinite plane, it is the charge reflected over the plane (with opposite sign)

For sphere, if a charge $Q$ is at position $A$ and there is a neutral spherical shell of radius $r$, then the image charge is $$q = - \frac{Qr}{A} \hspace{0.5cm}\text{ at }\hspace{0.5cm} a = \frac{r^2}{A}$$
(derive from either bashing out $\phi = 0$ at the surface of the shell or using the fact that electromagnetism shows conformal symmetry, which is inversion in math)

EXTENSIONS:
- If the shell is **nongrounded**, can create it by first having a zero surface potential shell and getting the image charge, then adding a charge at the center to balance out the image charge and the surface charge

NUANCES:
- The total external field is the sum of the fields of the real charge and the image charge, in the region of the real charge (if the real charge is outside, then outside; if the real charge is inside, then inside)
	- the reasoning is because uniqueness theorem requires the same charge distribution in the relevant region in both setups
	- and, the new boundary condition is that the field right outside is $\frac{q}{4\pi \epsilon_0 r}$ so you need to add an extra charge $q+q'$ at the center along with the image charge $q'$ (since the field at that point is determined by charges enclosed)
- Still, inside of a conductor, by the uniqueness theorem, the field (no matter what external fields it's subjected to) inside is zero. Therefore, when dealing with image charges inside shells you need to either look out for a changing current density or an extra image charge to keep the enclosed charge zero.
	- just outside the shell, $\phi_{\text{due to sphere}} = \frac{\sigma}{\epsilon_0}$ and $\phi_{\text{due to real charge}} = - \frac{\sigma}{\epsilon_0}$, as $\phi = 0 \implies E = 0$ just outside the shell
	- not considering the shell and rather just the image charge or real charge, $\phi = 0 \implies E = 0$, so the enclosed charge (including the image image or the original charge) is zero
		- there is a changing surface charge density of the original sphere, but this doesn't change $E = 0$ inside the sphere nor does it change the external field (as still, the enclosed charge is zero)
		- by the uniqueness theorem, you can just "throw away" the sphere once you add the image charges that satisfy the boundary conditions, remembering that they physically affect the charge density of sphere along with the real charge
- You can have non-grounded spheres that are neutral! These will have some voltage at the surface (because of the real charge) since they aren't grounded.


See this for a good discussion on this: https://farside.ph.utexas.edu/teaching/355/Surveyhtml/node85.html

