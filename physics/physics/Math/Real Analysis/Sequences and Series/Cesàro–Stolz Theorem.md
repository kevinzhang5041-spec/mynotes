Let $a_n$, $b_n$ be real sequences with:

- $b_n$ strictly increasing,
    
- $b_n\to\infty$.
    

If

$$  
\lim_{n\to\infty}\frac{a_{n+1}-a_n}{b_{n+1}-b_n}=L  
$$

exists (finite or $\pm\infty$), then

$$  
\lim_{n\to\infty}\frac{a_n}{b_n}=L.  
$$

---

### ε–δ Proof

Discrete analogue of L'Hôpital's Rule:

- Derivative $\rightarrow$ first difference.
    
- Useful for indeterminate forms like $\frac{\infty}{\infty}$ involving sequences.


Let $x_n,y_n$ be sequences with $y_n$ strictly increasing and $y_n\to\infty$. Assume  
$$\frac{x_{n+1}-x_n}{y_{n+1}-y_n}\to L \quad (\text{finite}).$$

Fix $\varepsilon>0$. Then $\exists n_0$ such that for $n\ge n_0$,  
$$L-\frac{\varepsilon}{2}<\frac{x_{n+1}-x_n}{y_{n+1}-y_n}<L+\frac{\varepsilon}{2}.$$

Since $y_{n+1}-y_n\ge0$, multiply through:  
$$\left(L-\frac{\varepsilon}{2}\right)(y_{n+1}-y_n)<x_{n+1}-x_n<\left(L+\frac{\varepsilon}{2}\right)(y_{n+1}-y_n).$$

Sum from $n=n_0$ to $m-1$ (telescoping):  
$$\left(L-\frac{\varepsilon}{2}\right)(y_m-y_{n_0})<x_m-x_{n_0}<\left(L+\frac{\varepsilon}{2}\right)(y_m-y_{n_0}).$$

Divide by $y_m>0$:  
$$\left(L-\frac{\varepsilon}{2}\right)\left(1-\frac{y_{n_0}}{y_m}\right)<\frac{x_m}{y_m}-\frac{x_{n_0}}{y_m}<\left(L+\frac{\varepsilon}{2}\right)\left(1-\frac{y_{n_0}}{y_m}\right).$$

Rearranging gives  
$$\frac{x_m}{y_m}=L+\text{error terms}$$  
where the error terms involve $\frac{y_{n_0}}{y_m},\frac{x_{n_0}}{y_m}$.

Since $y_m\to\infty$, choose $n_1>n_0$ such that for $m\ge n_1$ all error terms have absolute value $<\frac{\varepsilon}{2}$. Then for $m\ge n_1$,  
$$L-\varepsilon<\frac{x_m}{y_m}<L+\varepsilon.$$

Hence  
$$\frac{x_n}{y_n}\to L.$$

---

### Conditions

- $b_n$ strictly increasing.
    
- $b_n\to\infty$.
    
- Difference quotient limit exists.
    

---

### Cesàro Means Application

Cesàro means of $(a_n)$ are  
$$s_n=\frac{a_1+a_2+\cdots+a_n}{n}.$$

Apply Cesàro–Stolz with  
$$x_n=a_1+\cdots+a_n,\quad y_n=n.$$

Then  
$$x_{n+1}-x_n=a_{n+1},\quad y_{n+1}-y_n=1,$$

so if $a_n\to L$, then  
$$\frac{x_{n+1}-x_n}{y_{n+1}-y_n}=a_{n+1}\to L.$$

Thus  
$$s_n=\frac{x_n}{y_n}\to L.$$
If the increment ratio stabilizes:  
$$\frac{\Delta x_n}{\Delta y_n}\to L,$$  
then the global ratio follows:  
$$\frac{x_n}{y_n}\to L.$$

---

### Common Applications

Use when $a_n,b_n$ are sums, products, factorials, powers, or recursively defined, making

$$  
\frac{a_{n+1}-a_n}{b_{n+1}-b_n}  
$$

much simpler than

$$  
\frac{a_n}{b_n}.  
$$

---

### Typical Forms

If

$$  
a_n=\sum_{k=1}^n c_k,\qquad b_n=n,  
$$

then

$$  
a_{n+1}-a_n=c_{n+1},\qquad b_{n+1}-b_n=1,  
$$

so

$$  
\lim\frac{a_n}{n}=\lim c_n.  
$$

If

$$  
a_n=\ln(n!),\qquad b_n=n,  
$$

then

$$  
a_{n+1}-a_n=\ln(n+1),  
$$

reducing the limit immediately.

---

### Proof Strategy

1. Verify $b_n$ is increasing and unbounded.
    
2. Compute  
    $$  
    a_{n+1}-a_n,\qquad b_{n+1}-b_n.  
    $$
    
3. Evaluate  
    $$  
    \lim\frac{a_{n+1}-a_n}{b_{n+1}-b_n}.  
    $$
    
4. Conclude  
    $$  
    \lim\frac{a_n}{b_n}=L  
    $$  
    by Cesàro–Stolz.
    

---

### Common Examples

Average of a sequence:  
If

$$  
a_n=\sum_{k=1}^n k^2,\qquad b_n=n,  
$$

then

$$  
\frac{a_{n+1}-a_n}{b_{n+1}-b_n}=(n+1)^2,  
$$

so

$$  
\frac{a_n}{n}\to\infty.  
$$

Log-factorial:  
If

$$  
a_n=\ln(n!),\qquad b_n=n\ln n,  
$$

then

$$  
a_{n+1}-a_n=\ln(n+1),  
$$

$$  
b_{n+1}-b_n=(n+1)\ln(n+1)-n\ln n,  
$$

which is much easier to analyze than $\frac{\ln(n!)}{n\ln n}$.

---

### Relation to Other Results

- Sequence analogue of L'Hôpital's Rule.
    
- Frequently used with arithmetic means, partial sums, and asymptotic estimates.
    
- Can derive results such as  
    $$  
    \lim_{n\to\infty}\frac{\sum_{k=1}^n a_k}{n}=L  
    $$  
    whenever $a_n\to L$.
    

---

### Key Facts

- Requires $b_n\uparrow\infty$.
    
- Converts ratio limits into difference limits.
    
- Especially effective for $\frac{\infty}{\infty}$ sequence limits.
    
- Often simplifies sums, factorials, logarithms, and recursive sequences.
    
- If the difference quotient limit exists, then the original ratio has the same limit.