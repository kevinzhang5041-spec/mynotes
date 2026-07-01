Resistors in series:
$$
R = R_1+R_2.
$$
Resistors in parallel:
$$
\frac{1}{R}=\frac{1}{R_1} + \frac{1}{R_2} \implies R = \frac{R_1R_2}{R_1+R_2}
$$
The power of a resistor is 
$$
P = I^2R
$$

Kirchhoff's rules state that the net current at a node (3 or more wires) is $0$ and the net voltage drop in any loop is $0$.

Thevenin's theorem states that any circuit can be simplified into an a single emf source $\mathcal{E}_{eq}$ and a single resistor $R_{eq}$. The linearity of circuits is critical in the proof of this theorem.

An RC circuit has a [[Capacitance|capacitor]] in conjunction with a voltage source and a resistor. The behavior is modeled by
$$
Q(t) = CV_0e^{-t/RC},
$$
and
$$
I(t) = -\frac{dQ}{dt} = \frac{V_0}{R}e^{-t/RC},
$$
as well as,
$$
V(t) = I(t)R = \frac{Q(t)}{C}.
$$

To generalize, apply Kirchhoff's rules and 