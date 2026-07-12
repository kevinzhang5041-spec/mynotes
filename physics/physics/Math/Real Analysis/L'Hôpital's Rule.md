L'Hôpital's Rule is a method for evaluating limits that initially have an **indeterminate form** such as

$$  
\frac{0}{0}  
\quad\text{or}\quad  
\frac{\infty}{\infty}.  
$$

Instead of working with the original functions, we replace them by their derivatives.

---

#### Statement

Suppose

- (f) and (g) are differentiable on an open interval around (x_0) (except possibly at (x_0) itself),
    
- (g'(x)\neq0) for all (x\neq x_0),
    
- and one of the following holds:
    

**Case 1 (0/0 form):**

$$  
\lim_{x\to x_0}f(x)=0,  
\qquad  
\lim_{x\to x_0}g(x)=0.  
$$

or

**Case 2 ((\infty/\infty) form):**

$$  
\lim_{x\to x_0}|f(x)|=\infty,  
\qquad  
\lim_{x\to x_0}|g(x)|=\infty.  
$$

Finally, suppose the limit

$$  
\lim_{x\to x_0}\frac{f'(x)}{g'(x)}  
$$

exists (or is (\pm\infty)).

Then

# $$  
\boxed{  
\lim_{x\to x_0}\frac{f(x)}{g(x)}

\lim_{x\to x_0}\frac{f'(x)}{g'(x)}.  
}  
$$

---

#### Why do we need the hypotheses?

##### 1. (f) and (g) must be differentiable

Since we are replacing the functions by their derivatives, the derivatives must exist.

---

##### 2. (g'(x)\neq0)

Otherwise,

$$  
\frac{f'(x)}{g'(x)}  
$$

might be undefined.

For example,

$$  
\frac{1}{0}  
$$

has no meaning.

---

##### 3. The original limit must be indeterminate

The rule only applies to

$$  
\frac00  
\quad\text{or}\quad  
\frac{\infty}{\infty}.  
$$

For example,

$$  
\lim_{x\to0}\frac{1}{x}  
$$

is not an indeterminate form, so L'Hôpital's Rule does **not** apply.

---

##### 4. The derivative limit must exist

Otherwise replacing the functions by their derivatives does not simplify anything.

---

#### Intuition

Near (x_0),

$$  
f(x)\approx f'(x)(x-x_0),  
$$

and

$$  
g(x)\approx g'(x)(x-x_0),  
$$

provided both functions vanish at (x_0).

Therefore,

# $$  
\frac{f(x)}{g(x)}  
\approx  
\frac{f'(x)(x-x_0)}  
{g'(x)(x-x_0)}

\frac{f'(x)}{g'(x)}.  
$$

L'Hôpital's Rule makes this intuition rigorous.

---

#### Example 1

Evaluate

$$  
\lim_{x\to0}\frac{\sin x}{x}.  
$$

Both numerator and denominator approach (0):

$$  
\frac00.  
$$

Differentiate:

$$  
(\sin x)'=\cos x,  
\qquad  
(x)'=1.  
$$

Hence

# $$  
\lim_{x\to0}\frac{\sin x}{x}

# \lim_{x\to0}\cos x

$$

---

#### Example 2

Evaluate

$$  
\lim_{x\to\infty}\frac{\ln x}{x}.  
$$

Both numerator and denominator tend to (\infty).

Differentiate:

$$  
(\ln x)'=\frac1x,  
\qquad  
(x)'=1.  
$$

Therefore

# $$  
\lim_{x\to\infty}\frac{\ln x}{x}

# \lim_{x\to\infty}\frac1x

$$

---

#### Example 3

Evaluate

$$  
\lim_{x\to0}\frac{e^x-1}{x}.  
$$

Again,

$$  
\frac00.  
$$

Differentiate:

$$  
(e^x-1)'=e^x,  
\qquad  
(x)'=1.  
$$

Thus

# $$  
\lim_{x\to0}\frac{e^x-1}{x}

# \lim_{x\to0}e^x

$$

---

#### Why is the theorem true? (Idea of the proof)

The proof uses the **Cauchy Mean Value Theorem**.

For (x\neq x_0), apply the theorem to (f) and (g) on the interval between (x) and (x_0). There exists some point (c) between (x) and (x_0) such that

# $$  
\frac{f(x)-f(x_0)}  
{g(x)-g(x_0)}

\frac{f'(c)}  
{g'(c)}.  
$$

If (f(x_0)=g(x_0)=0), this becomes

# $$  
\frac{f(x)}{g(x)}

\frac{f'(c)}  
{g'(c)}.  
$$

As (x\to x_0), the intermediate point (c\to x_0), so

$$  
\frac{f'(c)}  
{g'(c)}  
\longrightarrow  
\lim_{x\to x_0}\frac{f'(x)}{g'(x)}.  
$$

Therefore,

# $$  
\lim_{x\to x_0}\frac{f(x)}{g(x)}

\lim_{x\to x_0}\frac{f'(x)}{g'(x)}.  
$$

The (\infty/\infty) case is proved similarly after first rewriting the functions so that Cauchy's Mean Value Theorem can be applied. This is why Cauchy's Mean Value Theorem is the fundamental theorem underlying L'Hôpital's Rule.