import {
 i as y, br as p, ch as m, a8 as w, cs as d, cP as x, bg as M, gO as z, cr as T, gP as k, z as E, gQ as L, b2 as N, gR as P, gS as S, bG as A, cd as H 
}
 from "./index-BngrJOd-.js";
 function _(s, n) {
 if (s.length !== n.length) throw new y({
 expectedLength: s.length, givenLength: n.length 
}
);
 const c = [];
 for (let a = 0;
 a < s.length;
 a++) {
 const g = s[a], i = n[a];
 c.push(l(g, i)) 
}
 return p(c) 
}
 function l(s, n, c = !1) {
 if (s === "address") {
 const e = n;
 if (!m(e)) throw new w({
 address: e 
}
);
 return d(e.toLowerCase(), {
 size: c ? 32 : null 
}
) 
}
 if (s === "string") return x(n);
 if (s === "bytes") return n;
 if (s === "bool") return d(M(n), {
 size: c ? 32 : 1 
}
);
 const a = s.match(z);
 if (a) {
 const [e, t, r = "256"] = a, o = Number.parseInt(r, 10) / 8;
 return T(n, {
 size: c ? 32 : o, signed: t === "int" 
}
) 
}
 const g = s.match(k);
 if (g) {
 const [e, t] = g;
 if (Number.parseInt(t, 10) !== (n.length - 2) / 2) throw new E({
 expectedSize: Number.parseInt(t, 10), givenSize: (n.length - 2) / 2 
}
);
 return d(n, {
 dir: "right", size: c ? 32 : null 
}
) 
}
 const i = s.match(L);
 if (i && Array.isArray(n)) {
 const [e, t] = i, r = [];
 for (let o = 0;
 o < n.length;
 o++)r.push(l(t, n[o], !0));
 return r.length === 0 ? "0x" : p(r) 
}
 throw new N(s) 
}
 function B(s) {
 const {
 source: n 
}
 = s, c = new Map, a = new P(8192), g = new Map, i = ({
 address: e, chainId: t 
}
) => `${
e
}
.${
t
}
`;
 return {
 async consume({
 address: e, chainId: t, client: r 
}
) {
 const o = i({
 address: e, chainId: t 
}
), h = this.get({
 address: e, chainId: t, client: r 
}
);
 this.increment({
 address: e, chainId: t 
}
);
 const u = await h;
 return await n.set({
 address: e, chainId: t 
}
, u), a.set(o, u), u 
}
, async increment({
 address: e, chainId: t 
}
) {
 const r = i({
 address: e, chainId: t 
}
), o = c.get(r) ?? 0;
 c.set(r, o + 1) 
}
, async get({
 address: e, chainId: t, client: r 
}
) {
 const o = i({
 address: e, chainId: t 
}
);
 let h = g.get(o);
 return h || (h = (async () => {
 try {
 const b = await n.get({
 address: e, chainId: t, client: r 
}
), f = a.get(o) ?? 0;
 return f > 0 && b <= f ? f + 1 : (a.delete(o), b) 
}
 finally {
 this.reset({
 address: e, chainId: t 
}
) 
}
 
}
)(), g.set(o, h)), (c.get(o) ?? 0) + await h 
}
, reset({
 address: e, chainId: t 
}
) {
 const r = i({
 address: e, chainId: t 
}
);
 c.delete(r), g.delete(r) 
}
 
}
 
}
 function $(s) {
 const {
 address: n, data: c, signature: a, to: g = "hex" 
}
 = s, i = p([A([{
 type: "address" 
}
, {
 type: "bytes" 
}
, {
 type: "bytes" 
}
], [n, c, a]), S]);
 return g === "hex" ? i : H(i) 
}
 export {
 B as c, _ as e, $ as s 
}
;

