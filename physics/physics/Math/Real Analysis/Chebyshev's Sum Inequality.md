Chebyshev's sum inequality states that similarly ordered sequences have a large average product.

---

#### Statement

Let

$$  
a_1\le a_2\le\cdots\le a_n,  
$$

and

$$  
b_1\le b_2\le\cdots\le b_n,  
$$

(or both decreasing). Then

$$  
\frac1n\sum_{i=1}^n a_ib_i  
\ge  
\left(\frac1n\sum_{i=1}^n a_i\right)  
\left(\frac1n\sum_{i=1}^n b_i\right).  
$$

Equivalently,

$$  
n\sum_{i=1}^n a_ib_i  
\ge  
\left(\sum_{i=1}^n a_i\right)  
\left(\sum_{i=1}^n b_i\right).  
$$

---

#### Reverse Chebyshev

If one sequence is increasing and the other is decreasing, then

$$  
\frac1n\sum_{i=1}^n a_ib_i  
\le  
\left(\frac1n\sum_{i=1}^n a_i\right)  
\left(\frac1n\sum_{i=1}^n b_i\right).  
$$

---

#### Equality Condition

Equality holds iff

- one sequence is constant, or
    
- both sequences are constant.
    

For strictly monotone sequences, the inequality is strict.

---

#### Intuition

Large values of one sequence are paired with large values of the other.

Therefore,

$$  
\sum a_ib_i  
$$

is larger than what would occur by random pairing.

If one sequence is reversed, large values pair with small values, producing the reverse inequality.

---

#### Proof

Consider

$$  
S
=
n\sum_{i=1}^n a_ib_i
=
\left(\sum_{i=1}^n a_i\right)  
\left(\sum_{i=1}^n b_i\right).  
$$

Expand:

$$  
S

\sum_{i,j}(a_i-a_j)b_i.  
$$

Symmetrize:
 $$  
2S

\sum_{i,j}(a_i-a_j)(b_i-b_j).  
$$

Hence

#$$  
S

\frac12  
\sum_{i,j}  
(a_i-a_j)(b_i-b_j).  
$$

Since both sequences are similarly ordered,

$$  
(a_i-a_j)(b_i-b_j)\ge0  
$$

for every pair $(i,j)$.

Therefore,

$$  
S\ge0,  
$$

which gives

$$  
n\sum a_ib_i  
\ge  
\left(\sum a_i\right)  
\left(\sum b_i\right).  
$$

---

#### Weighted Chebyshev

If

$$  
w_i\ge0,  
\qquad  
\sum w_i=1,  
$$

and both sequences have the same ordering, then

$$  
\sum_{i=1}^n w_ia_ib_i  
\ge  
\left(\sum_{i=1}^n w_ia_i\right)  
\left(\sum_{i=1}^n w_ib_i\right).  
$$

---

#### Integral Version

If $f$ and $g$ are both increasing (or both decreasing) on $[a,b]$, then

$$  
\frac1{b-a}  
\int_a^b f(x)g(x),dx  
\ge  
\left(  
\frac1{b-a}  
\int_a^b f(x),dx  
\right)  
\left(  
\frac1{b-a}  
\int_a^b g(x),dx  
\right).  
$$

The inequality reverses if one function is increasing and the other decreasing.

---

#### Common Forms

Average form:

$$  
\overline{ab}  
\ge  
\overline a,\overline b.  
$$

Sum form:

$$  
n\sum a_ib_i  
\ge  
\left(\sum a_i\right)  
\left(\sum b_i\right).  
$$

Difference form:

## $$  
\sum a_ib_i

# \frac1n  
\left(\sum a_i\right)  
\left(\sum b_i\right)

\frac1{2n}  
\sum_{i,j}  
(a_i-a_j)(b_i-b_j)  
\ge0.  
$$

---

#### Relationship with Rearrangement Inequality

Suppose

$$  
a_1\le\cdots\le a_n,  
\qquad  
b_1\le\cdots\le b_n.  
$$

Rearrangement states

$$  
\sum a_ib_i  
$$

is the **maximum** possible pairing.

Chebyshev follows immediately because

$$  
\frac1n  
\left(\sum a_i\right)  
\left(\sum b_i\right)  
$$

is the average value over all pairings.

Thus,

$$  
\max(\text{pairings})  
\ge  
\text{average(pairings)},  
$$

which is exactly Chebyshev's inequality.

---

#### Common Uses

- Bounding sums of similarly ordered sequences.
    
- Estimating averages of products.
    
- Olympiad inequalities involving monotone sequences.
    
- Proving inequalities after sorting variables.
    
- Combined with Rearrangement, Hölder, Cauchy–Schwarz, Jensen, or AM-GM.
    

---

#### Recognition Strategy

Consider Chebyshev when:

- Both sequences can be arranged in the same order.
    
- The expression contains
    

$$  
\sum a_ib_i.  
$$

- You need to compare a product average with the product of averages.
    
- The variables are explicitly sorted or monotonic.