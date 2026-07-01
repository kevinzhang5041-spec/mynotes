**Charging a Capacitor**
Assume a constant emf of $\mathcal{E}$ and resistance $R$, capacitance $C$.

$$Q(t) = C \mathcal{E}(1- e^{-t/\tau})$$
$$I(t) = \frac{\mathcal{E}}{R}e^{-t/\tau},$$
where $\tau = RC$.

*Proof:*
Since potential decreases along the direction of an electric field, by the loop rule,
$$\begin{align*}
	\mathcal{E} - \frac{dQ}{dt} R - \frac{Q}{C}=0,
\end{align*}$$Solving this first-order differential results in the above charge function and differentiating w.r.t. time gives current.

**Discharging a Capacitor**
Assume an initial potential difference $V_0$ across the capacitor and resistance $R$, capacitance $C$. 
$$\begin{align*}
	Q(t) = CV_0 e^{-t/\tau} \\
	I(t) = \frac{V_0}{R} e^{-t/\tau}
\end{align*}$$
where $\tau = RC$.

*Proof:*
By the loop rule,
$$-\frac{Q}{C}- \frac{dQ}{dt} R = 0.$$Solving this first-order differential results in the above charge function and differentiating w.r.t. time gives current.

