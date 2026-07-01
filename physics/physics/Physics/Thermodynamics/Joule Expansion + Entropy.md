
Joule Expansion is the irreversible process of a gas, initially confined in volume $V_0$ with pressure $p$, expanding in a vacuum. It has been experimentally confirmed that the internal energy of the gas does not change during the expansion; alternatively, this can be seen since the system is thermally isolated from the environment. The temperature does not change since the internal energy $U$ is a state function of $T$. It has been experimentally verified that no work has been done on the system (the gas isn't pushing against anything, just freely expanding in a vacuum).

All of these conclusions yield $p_f V_f = nRT = pV_0$, or $p_f = p \frac{V_0}{V_f}$.
****
*Entropy*
Clearly, there is a change in entropy as there is some $dQ$ at each point in expansion, seen through the first law. Since entropy is a state function, we may calculate its change in any path from the initial to the final state, the easiest being a reversible isothermal expansion.

By the first law, $$dQ = p dV = T dS \implies dS = \frac{p dV}{T}.$$Using $\frac{p}{T} = \frac{nR}{V}$ yields $$\Delta S = \int dS = \int_{V_0}^{V_f} \frac{nR dV}{V} = nR \ln \frac{V_f}{V_0}.$$

For this reversible isothermal expansion, $\Delta S_{\text{gas}} = \Delta S$ while $\Delta S_{\text{surroundings}} = -\Delta S$, so $\Delta S_{\text{universe}} = 0$. This is because for a reversible process, $\Delta S_{\text{universe}} = 0$.
However, for the Joule expansion, $\Delta S_{\text{gas}} = \Delta S$ while $\Delta S_{\text{surroundings}}=0$ since the system is thermally isolated from the surroundings, yielding $\Delta S_{\text{universe}} = \Delta S$.

Since $\Delta W = \Delta U = 0$, this means that $\Delta Q = 0$. So, it appears that $\Delta S = 0$. However, since the Joule expansion is irreversible, $\Delta Q \leq T \Delta S$ so $\Delta S = nR \ln \frac{V_f}{V_0}$ is valid.
****
Alternatively, $\Delta S$ can be calculated using the statistical definition of entropy, $\Delta S = k_B \ln \Omega$. Suppose that $V_f = 2V_0$ for simplicity, such that a gas molecule is equally likely to be in either the original container or in place of the vacuum. Then, $\Omega = 2^{nN_A}$ and $$\Delta S = k_B \ln 2^{nN_A} = nR \ln 2$$as expected.