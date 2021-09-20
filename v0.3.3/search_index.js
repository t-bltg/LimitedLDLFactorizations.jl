var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [LimitedLDLFactorizations]","category":"page"},{"location":"reference/#LimitedLDLFactorizations.LimitedLDLFactorizations","page":"Reference","title":"LimitedLDLFactorizations.LimitedLDLFactorizations","text":"A Pure Julia Version of limited-memory LDLᵀ factorization. A left-looking implementation of the sparse LDLᵀ factorization of a symmetric matrix with the possibility to compute a limited-memory incomplete factorization.\n\nDominique Orban <dominique.orban@gmail.com> Montreal, April 2015, December 2015, July 2017.\n\nThis code is strongly inspired by Lin and Moré's ICFS [1,2]. The modified version is described in [3,4].\n\nReferences\n\n[1] C.-J. Lin and J. J. Moré. Incomplete Cholesky factorizations with limited     memory. SIAM Journal on Scientific Computing, 21(1):24–45, 1999. [2] http://www.mcs.anl.gov/~more/icfs [3] D. Orban. Limited-Memory LDLᵀ Factorization of Symmetric Quasi-Definite     Matrices with Application to Constrained Optimization. Numerical Algorithms     70(1):9–41, 2015. DOI 10.1007/s11075-014-9933-x [4] https://github.com/optimizers/lldl\n\n\n\n\n\n","category":"module"},{"location":"reference/#LimitedLDLFactorizations.abspermute!-Union{Tuple{Ti}, Tuple{Tv}, Tuple{Vector{Tv}, AbstractVector{Ti}, Ti}} where {Tv<:Number, Ti<:Integer}","page":"Reference","title":"LimitedLDLFactorizations.abspermute!","text":"Permute the elements of keys in place so that     abs(x[keys[i]]) ≤ abs(x[keys[k]])  for i = 1, ..., k     abs(x[keys[k]]) ≤ abs(x[keys[i]])  for i = k, ..., n, where n is the length of keys. The length of x should be at least n. Only keys is modified. From the MINPACK2 function dsel2 by Kastak, Lin and Moré.\n\n\n\n\n\n","category":"method"},{"location":"reference/#LimitedLDLFactorizations.lldl-Union{Tuple{SparseArrays.SparseMatrixCSC{Tv, Ti}}, Tuple{Ti}, Tuple{Tv}} where {Tv<:Number, Ti<:Integer}","page":"Reference","title":"LimitedLDLFactorizations.lldl","text":"lldl(A)\n\nCompute the limited-memory LDLᵀ factorization of A without pivoting.\n\nArguments\n\nA::SparseMatrixCSC{Tv,Ti}: matrix to factorize (its strict lower triangle and                              diagonal will be extracted)\n\nKeyword arguments\n\nmemory::Int=0: extra amount of memory to allocate for the incomplete factor L.                  The total memory allocated is nnz(T) + n * memory, where                  T is the strict lower triangle of A and n is the size of A.\nα::Tv=Tv(0): initial value of the shift in case the incomplete LDLᵀ                factorization of A is found to not exist. The shift will be                gradually increased from this initial value until success.\ndroptol::Tv=Tv(0): to further sparsify L, all elements with magnitude smaller                      than droptol are dropped.\n\n\n\n\n\n","category":"method"},{"location":"#LimitedLDLFactorizations.jl","page":"Home","title":"LimitedLDLFactorizations.jl","text":"","category":"section"},{"location":"tutorial/#LimitedLDLFactorizations.jl-Tutorial","page":"Tutorial","title":"LimitedLDLFactorizations.jl Tutorial","text":"","category":"section"}]
}
