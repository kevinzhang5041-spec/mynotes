This identity is called the **Hockey-Stick Identity**:
 $$  
\binom{m}{m}  
+\binom{m+1}{m}  
+\cdots+  
\binom{m+p}{m}

\binom{m+p+1}{m+1}.  
$$

Here's a clean proof using Pascal's identity.

---

Recall that

$$  
\binom{n+1}{r+1}

\binom{n}{r+1}  
+  
\binom{n}{r}.  
$$
Rearrange:
$$  
\binom{n}{r}

\binom{n+1}{r+1}

\binom{n}{r+1}.  
$$

Now let (r=m). Then

$$  
\binom{k}{m}

\binom{k+1}{m+1}

\binom{k}{m+1}.  
$$

Summing from $(k=m)$ to $(k=m+p)$ ,

$$  
\sum_{k=m}^{m+p}\binom{k}{m}

\sum_{k=m}^{m+p}  
\left(  
\binom{k+1}{m+1}

\binom{k}{m+1}  
\right).  
$$

Writing out a few terms: $$

\bigg[  
\binom{m+1}{m+1}  
-\binom{m}{m+1}  
\bigg]  
+  
\bigg[  
\binom{m+2}{m+1}  
-\binom{m+1}{m+1}  
\bigg]  
+\cdots  
$$
$$  
+  
\bigg[  
\binom{m+p+1}{m+1}  
-\binom{m+p}{m+1}  
\bigg].  
$$

Everything cancels telescopically:
$$

\binom{m+p+1}{m+1}  
-\binom{m}{m+1}.  
$$

Since
$$  
\binom{m}{m+1}=0,  
$$
we obtain
$$  
\boxed{  
\sum_{k=m}^{m+p}\binom{k}{m}

\binom{m+p+1}{m+1}.  
}  
$$

---
### Combinatorial proof
Count the $(m+1)$-element subsets of

$$  
{1,2,\dots,m+p+1}.  
$$

There are

$$  
\binom{m+p+1}{m+1}  
$$

such subsets.

Now classify them by their largest element.

If the largest element is $(m+r+1) ((0\le r\le p))$, then the other (m) elements must be chosen from

$$  
{1,\dots,m+r},  
$$

which can be done in

$$  
\binom{m+r}{m}  
$$

ways.

Summing over all possible largest elements gives

$$  
\binom{m}{m}  
+\binom{m+1}{m}  
+\cdots  
+\binom{m+p}{m},  
$$

which must equal the total number of subsets,

$$  
\binom{m+p+1}{m+1}.  
$$

Hence the identity follows.