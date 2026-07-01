**Statement:** Carnot's engine is the engine which has the greatest working efficiency of all engines.
**Proof:** Suppose there exists an engine $E$ with greater efficiency than Carnot's engine, existing between two reservoirs of temperatures $T_h$ and $T_l$.
![[Pasted image 20250103122554.png]]
This engine takes in heat $Q_h'$ and expels heat $Q_l'$, doing work $W$ in the process. It is connected in conjunction with a reversed Carnot engine that requires work $W$ to run. Since $E$'s efficiency is greater than that of Carnot's, $$\frac{W}{Q_h'} > \frac{W}{Q_h} \implies Q_h > Q_h'.$$Furthermore, $W = Q_h'-Q_l' = Q_h - Q_l$, meaning $$Q_h-Q_h' = Q_l-Q_l'.$$Since $Q_h > Q_h'$, this means a net amount of heat $Q_l-Q_l'$ is extracted from the cold reservoir. In conjunction, the two engines result in a net amount of heat being extracted from the cold reservoir and being deposited to the hot reservoir, contradicting Clausius's statement of the Second Law of Thermodynamics. Thus, engine $E$ cannot exist.


**Corollary:** All reversible heat engines have the same efficiency, namely the Carnot efficiency.
**Proof:** Consider the reversible engine $R$ run in reverse with the Carnot engine running forward.
![[Pasted image 20250103123244.png]] 
Note that $W = Q_h-Q_l = Q_h'-Q_l'$ once again. If $Q_h' > Q_h$, then there will be a net transfer of heat from the cold reservoir to the hot reservoir. If $Q_h > Q_h'$, then connecting the engine $R$ forwards and the Carnot engine in reverse will yield the same. Therefore, $Q_h = Q_h'$ is the only way Clausius's statement isn't contradicted, meaning $$\eta_R = \frac{W}{Q_h'} = \frac{W}{Q_h} = \eta_{\text{Carnot}}.$$
