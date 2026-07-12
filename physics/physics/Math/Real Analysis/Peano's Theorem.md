There exists a continuous surjective function

$$  
\phi:[0,1]\to[0,1]\times[0,1].  
$$

Equivalently,

$$  
\phi(t)=(x(t),y(t)),  
$$

where both coordinate functions are continuous, and every point of the unit square is attained by some $t\in[0,1]$.

---

#### Meaning

- **Continuous:** Nearby values of $t$ map to nearby points in the square.
    
- **Surjective (onto):** Every point of the unit square is visited by the curve.
    
- **Not injective:** Many different values of $t$ generally map to the same point.
    

Thus, a **one-dimensional interval** can continuously "fill" an entire two-dimensional square.

---

#### Why It Is Surprising

Intuitively, one might expect that a curve cannot cover an entire region with positive area.

Peano's theorem shows this intuition is false:

- A continuous curve can pass through **every point** of the square.
    
- Although the interval is one-dimensional, continuity alone does not prevent such behavior.
    

---

#### What the Theorem Does **Not** Say

The theorem does **not** imply that

$$  
[0,1]\cong[0,1]^2  
$$

(homeomorphic).

The interval and the square have different topological dimensions.

The map is

- continuous,
    
- onto,
    

but **not one-to-one**.

---

#### Construction Idea

Peano's original proof constructs a sequence of polygonal curves.

1. Divide the square into four smaller squares.
    
2. Draw a path through the centers.
    
3. Repeat inside each smaller square.
    
4. The polygonal paths converge uniformly to a continuous limit curve.
    

At every stage the curve visits increasingly finer subdivisions of the square.

The limit curve passes arbitrarily close to every point, and in fact reaches every point.

---

#### Modern Interpretation

Modern constructions usually use the **Hilbert curve**.

At stage $n$:

- Divide the square into
    

$$  
2^n\times2^n  
$$

small squares.

- Connect their centers in a continuous path.
    

As

$$  
n\to\infty,  
$$

these polygonal paths converge uniformly to a continuous map

$$  
\phi:[0,1]\to[0,1]^2,  
$$

which is surjective.

---

#### Why Surjectivity Holds

Given any point

$$  
P\in[0,1]^2,  
$$

there is a nested sequence of subsquares

$$  
Q_1\supset Q_2\supset Q_3\supset\cdots  
$$

whose diameters tend to zero and whose intersection is exactly

$$  
{P}.  
$$

The approximating curves pass through each $Q_n$, so a corresponding sequence of parameters converges to some

$$  
t\in[0,1].  
$$

Continuity then gives

$$  
\phi(t)=P.  
$$

Hence every point is hit.

---

#### Important Properties

- Continuous.
    
- Uniformly continuous (since $[0,1]$ is compact).
    
- Surjective.
    
- Not injective.
    
- Images of compact sets are compact.
    
- The image has positive area even though the domain is one-dimensional.
    

---

#### Consequences

1. Continuous images can increase geometric dimension.
    
2. Continuous maps need not preserve injectivity.
    
3. Compact metric spaces can exhibit highly unintuitive continuous mappings.
    
4. The theorem motivated the development of **dimension theory** in topology.
    

---

#### Related Results

- **Hilbert Curve:** Another continuous space-filling curve with a simpler recursive construction.
    
- **Hahn–Mazurkiewicz Theorem:** A topological space is the continuous image of $[0,1]$ iff it is compact, connected, locally connected, and second countable (equivalently, a Peano continuum).
    
- There is **no continuous bijection** between $[0,1]$ and $[0,1]^2$ because they are not homeomorphic.
    

---

#### Key Facts to Remember

- There exists a continuous onto map
    

$$  
\phi:[0,1]\to[0,1]^2.  
$$

- The map is **surjective but not injective**.
    
- It does **not** contradict the fact that the interval and the square have different dimensions.
    
- Peano's theorem is the first example of a **space-filling curve** and is a foundational result in topology and geometric analysis.