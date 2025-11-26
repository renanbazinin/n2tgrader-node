var gr=Object.defineProperty;var b1=s=>{throw TypeError(s)};var vr=(s,t,e)=>t in s?gr(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>vr(s,typeof t!="symbol"?t+"":t,e),w1=(s,t,e)=>t.has(s)||b1("Cannot "+e);var Ht=(s,t,e)=>(w1(s,t,"read from private field"),e?e.call(s):t.get(s)),Te=(s,t,e)=>t.has(s)?b1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),Qt=(s,t,e,r)=>(w1(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const kr={SEP:"\\",WD:"C:\\\\",isAbsolute:s=>!!s.match(new RegExp("^[a-zA-Z]:\\\\"))},ns={SEP:"/",WD:"/",isAbsolute:s=>s[0]=="/"},n0=typeof process<"u"&&process.platform=="win32"?kr:ns,se=n0.SEP,yr=n0.WD,br=n0.isAbsolute;function B1(s){return s.endsWith(se)&&(s=s.substring(0,s.length-1)),s.split(se).at(-1)??""}function is(...s){const t=[];for(const e of s)for(const r of e.split(se))switch(r){case"":case".":break;case"..":t.pop();break;default:t.push(r)}return(n0==ns?se:"")+t.join(se)}let wr=class{constructor(t=new Br){C(this,"adapter");C(this,"wd",yr);C(this,"stack",[]);this.adapter=t}cwd(){return this.wd}cd(t){this.wd=this.p(t)}pushd(t){this.stack.push(this.wd),this.cd(t)}popd(){this.stack.length>0&&(this.wd=this.stack.pop())}stat(t){return this.adapter.stat(this.p(t))}scandir(t){return this.adapter.scandir(this.p(t))}readdir(t){return this.adapter.readdir(this.p(t))}mkdir(t){return this.adapter.mkdir(this.p(t))}copyFile(t,e){return this.adapter.copyFile(this.p(t),this.p(e))}readFile(t){return this.adapter.readFile(this.p(t))}writeFile(t,e){return this.adapter.writeFile(this.p(t),e)}rm(t){return this.adapter.rm(this.p(t))}p(t){return br(t)?t:is(this.cwd(),t)}},Br=class{constructor(t={}){C(this,"fs");this.fs=t}stat(t){return new Promise((e,r)=>{if(this.fs[t])return e({name:B1(t),isDirectory(){return!1},isFile(){return!0}});t.endsWith(se)||(t+=se);for(let o of Object.keys(this.fs))if(o.startsWith(t))return e({name:B1(t),isDirectory(){return!0},isFile(){return!1}});r()})}async scandir(t){return(await this.readdir(t)).map(e=>{let r=this.fs[is(t,e)]!==void 0;return{name:e,isDirectory(){return!r},isFile(){return r}}})}readdir(t){return t.endsWith(se)||(t+=se),new Promise(e=>{let r=new Set;for(const o of Object.keys(this.fs))if(o.startsWith(t)){const n=o.indexOf(se,t.length+1),i=o.substring(t.length,n===-1?void 0:n);r.add(i)}return e([...r].sort())})}mkdir(t){return Promise.resolve()}copyFile(t,e){return new Promise(r=>{this.fs[e]=this.fs[t],r()})}readFile(t){return new Promise((e,r)=>{let o=this.fs[t];if(o===void 0){const n=new Error(`File Not Found ${t}`);r(n)}else e(o)})}writeFile(t,e){return new Promise(r=>{this.fs[t]=e,r()})}rm(t){return new Promise(e=>{delete this.fs[t],e()})}};const _r={SEP:"\\",WD:"C:\\\\",isAbsolute:s=>!!s.match(new RegExp("^[a-zA-Z]:\\\\"))},as={SEP:"/",WD:"/",isAbsolute:s=>s[0]=="/"},i0=typeof process<"u"&&process.platform=="win32"?_r:as,re=i0.SEP,Ar=i0.WD,Sr=i0.isAbsolute;function _1(s){return s.endsWith(re)&&(s=s.substring(0,s.length-1)),s.split(re).at(-1)??""}function us(...s){const t=[];for(const e of s)for(const r of e.split(re))switch(r){case"":case".":break;case"..":t.pop();break;default:t.push(r)}return(i0==as?re:"")+t.join(re)}class xr{constructor(t=new Ir){C(this,"adapter");C(this,"wd",Ar);C(this,"stack",[]);this.adapter=t}cwd(){return this.wd}cd(t){this.wd=this.p(t)}pushd(t){this.stack.push(this.wd),this.cd(t)}popd(){this.stack.length>0&&(this.wd=this.stack.pop())}stat(t){return this.adapter.stat(this.p(t))}scandir(t){return this.adapter.scandir(this.p(t))}readdir(t){return this.adapter.readdir(this.p(t))}mkdir(t){return this.adapter.mkdir(this.p(t))}copyFile(t,e){return this.adapter.copyFile(this.p(t),this.p(e))}readFile(t){return this.adapter.readFile(this.p(t))}writeFile(t,e){return this.adapter.writeFile(this.p(t),e)}rm(t){return this.adapter.rm(this.p(t))}p(t){return Sr(t)?t:us(this.cwd(),t)}}class Ir{constructor(t={}){C(this,"fs");this.fs=t}stat(t){return new Promise((e,r)=>{if(this.fs[t])return e({name:_1(t),isDirectory(){return!1},isFile(){return!0}});t.endsWith(re)||(t+=re);for(let o of Object.keys(this.fs))if(o.startsWith(t))return e({name:_1(t),isDirectory(){return!0},isFile(){return!1}});r()})}async scandir(t){return(await this.readdir(t)).map(e=>{let r=this.fs[us(t,e)]!==void 0;return{name:e,isDirectory(){return!r},isFile(){return r}}})}readdir(t){return t.endsWith(re)||(t+=re),new Promise(e=>{let r=new Set;for(const o of Object.keys(this.fs))if(o.startsWith(t)){const n=o.indexOf(re,t.length+1),i=o.substring(t.length,n===-1?void 0:n);r.add(i)}return e([...r].sort())})}mkdir(t){return Promise.resolve()}copyFile(t,e){return new Promise(r=>{this.fs[e]=this.fs[t],r()})}readFile(t){return new Promise((e,r)=>{let o=this.fs[t];if(o===void 0){const n=new Error(`File Not Found ${t}`);r(n)}else e(o)})}writeFile(t,e){return new Promise(r=>{this.fs[t]=e,r()})}rm(t){return new Promise(e=>{delete this.fs[t],e()})}}const Rr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Nand.tst

output-list a b out;

set a 0,
set b 0,
eval,
output;

set a 0,
set b 1,
eval,
output;

set a 1,
set b 0,
eval,
output;

set a 1,
set b 1,
eval,
output;`,Tr=`| a | b |out|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |`,Mr=`|in |out|
| 0 | 1 |
| 1 | 0 |`,Cr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Not.hdl
/**
 * Not gate:
 * if (in) out = 0, else out = 1
 */
CHIP Not {
    IN in;
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`,Er=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Not.tst

load Not.hdl,
compare-to Not.cmp,
output-list in out;

set in 0,
eval,
output;

set in 1,
eval,
output;`,Pr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/And.hdl
/**
 * And gate:
 * if (a and b) out = 1, else out = 0 
 */
CHIP And {
    IN a, b;
    OUT out;
    
    PARTS:
    //// Replace this comment with your code.
}`,Or=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/And.tst

load And.hdl,
compare-to And.cmp,
output-list a b out;

set a 0,
set b 0,
eval,
output;

set a 0,
set b 1,
eval,
output;

set a 1,
set b 0,
eval,
output;

set a 1,
set b 1,
eval,
output;`,Dr=`| a | b |out|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |`,Fr=`| a | b |out|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |`,Nr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Or.hdl
/**
 * Or gate:
 * if (a or b) out = 1, else out = 0 
 */
CHIP Or {
    IN a, b;
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`,Lr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Or.tst

load Or.hdl,
compare-to Or.cmp,
output-list a b out;

set a 0,
set b 0,
eval,
output;

set a 0,
set b 1,
eval,
output;

set a 1,
set b 0,
eval,
output;

set a 1,
set b 1,
eval,
output;`,zr=`| a | b |out|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |`,jr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Xor.hdl
/**
 * Exclusive-or gate:
 * if ((a and Not(b)) or (Not(a) and b)) out = 1, else out = 0
 */
CHIP Xor {
    IN a, b;
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`,$r=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Xor.tst

load Xor.hdl,
compare-to Xor.cmp,
output-list a b out;

set a 0,
set b 0,
eval,
output;

set a 0,
set b 1,
eval,
output;

set a 1,
set b 0,
eval,
output;

set a 1,
set b 1,
eval,
output;`,Ur=`| a | b |sel|out|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |`,Vr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux.hdl
/** 
 * Multiplexor:
 * if (sel = 0) out = a, else out = b
 */
CHIP Mux {
    IN a, b, sel;
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`,Wr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux.tst

load Mux.hdl,
compare-to Mux.cmp,
output-list a b sel out;

set a 0,
set b 0,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set a 0,
set b 1,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set a 1,
set b 0,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set a 1,
set b 1,
set sel 0,
eval,
output;

set sel 1,
eval,
output;`,Hr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/DMux.hdl
/**
 * Demultiplexor:
 * [a, b] = [in, 0] if sel = 0
 *          [0, in] if sel = 1
 */
CHIP DMux {
    IN in, sel;
    OUT a, b;

    PARTS:
    //// Replace this comment with your code.
}`,Gr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/DMux.tst

load DMux.hdl,
compare-to DMux.cmp,
output-list in sel a b;

set in 0,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set in 1,
set sel 0,
eval,
output;

set sel 1,
eval,
output;`,Kr=`|in |sel| a | b |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |`,qr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/01/Not16.hdl
/**
 * 16-bit Not gate:
 * for i = 0, ..., 15:
 * out[i] = Not(a[i])
 */
CHIP Not16 {
    IN in[16];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,Zr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Not16.tst

load Not16.hdl,
compare-to Not16.cmp,
output-list in%B1.16.1 out%B1.16.1;

set in %B0000000000000000,
eval,
output;

set in %B1111111111111111,
eval,
output;

set in %B1010101010101010,
eval,
output;

set in %B0011110011000011,
eval,
output;

set in %B0001001000110100,
eval,
output;`,Jr=`|        in        |       out        |
| 0000000000000000 | 1111111111111111 |
| 1111111111111111 | 0000000000000000 |
| 1010101010101010 | 0101010101010101 |
| 0011110011000011 | 1100001100111100 |
| 0001001000110100 | 1110110111001011 |`,Xr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/And16.hdl
/**
 * 16-bit And gate:
 * for i = 0, ..., 15:
 * out[i] = a[i] And b[i] 
 */
CHIP And16 {
    IN a[16], b[16];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,Yr=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/And16.tst

load And16.hdl,
compare-to And16.cmp,
output-list a%B1.16.1 b%B1.16.1 out%B1.16.1;

set a %B0000000000000000,
set b %B0000000000000000,
eval,
output;

set a %B0000000000000000,
set b %B1111111111111111,
eval,
output;

set a %B1111111111111111,
set b %B1111111111111111,
eval,
output;

set a %B1010101010101010,
set b %B0101010101010101,
eval,
output;

set a %B0011110011000011,
set b %B0000111111110000,
eval,
output;

set a %B0001001000110100,
set b %B1001100001110110,
eval,
output;`,Qr=`|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 0000000000000000 |
| 1111111111111111 | 1111111111111111 | 1111111111111111 |
| 1010101010101010 | 0101010101010101 | 0000000000000000 |
| 0011110011000011 | 0000111111110000 | 0000110011000000 |
| 0001001000110100 | 1001100001110110 | 0001000000110100 |`,to=`|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1111111111111111 |
| 1111111111111111 | 1111111111111111 | 1111111111111111 |
| 1010101010101010 | 0101010101010101 | 1111111111111111 |
| 0011110011000011 | 0000111111110000 | 0011111111110011 |
| 0001001000110100 | 1001100001110110 | 1001101001110110 |`,eo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Or16.hdl
/**
 * 16-bit Or gate:
 * for i = 0, ..., 15:
 * out[i] = a[i] Or b[i] 
 */
CHIP Or16 {
    IN a[16], b[16];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,so=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Or16.tst

load Or16.hdl,
compare-to Or16.cmp,
output-list a%B1.16.1 b%B1.16.1 out%B1.16.1;

set a %B0000000000000000,
set b %B0000000000000000,
eval,
output;

set a %B0000000000000000,
set b %B1111111111111111,
eval,
output;

set a %B1111111111111111,
set b %B1111111111111111,
eval,
output;

set a %B1010101010101010,
set b %B0101010101010101,
eval,
output;

set a %B0011110011000011,
set b %B0000111111110000,
eval,
output;

set a %B0001001000110100,
set b %B1001100001110110,
eval,
output;`,ro=`|        a         |        b         |sel|       out        |
| 0000000000000000 | 0000000000000000 | 0 | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 1 | 0000000000000000 |
| 0000000000000000 | 0001001000110100 | 0 | 0000000000000000 |
| 0000000000000000 | 0001001000110100 | 1 | 0001001000110100 |
| 1001100001110110 | 0000000000000000 | 0 | 1001100001110110 |
| 1001100001110110 | 0000000000000000 | 1 | 0000000000000000 |
| 1010101010101010 | 0101010101010101 | 0 | 1010101010101010 |
| 1010101010101010 | 0101010101010101 | 1 | 0101010101010101 |`,oo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux16.hdl
/**
 * 16-bit multiplexor: 
 * for i = 0, ..., 15:
 * if (sel = 0) out[i] = a[i], else out[i] = b[i]
 */
CHIP Mux16 {
    IN a[16], b[16], sel;
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,no=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux16.tst

load Mux16.hdl,
compare-to Mux16.cmp,
output-list a%B1.16.1 b%B1.16.1 sel out%B1.16.1;

set a 0,
set b 0,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set a %B0000000000000000,
set b %B0001001000110100,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set a %B1001100001110110,
set b %B0000000000000000,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set a %B1010101010101010,
set b %B0101010101010101,
set sel 0,
eval,
output;

set sel 1,
eval,
output;`,io=`|        a         |        b         |        c         |        d         | sel  |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  00  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  01  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  10  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  11  | 0000000000000000 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  00  | 0001001000110100 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  01  | 1001100001110110 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  10  | 1010101010101010 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  11  | 0101010101010101 |`,ao=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux4Way16.hdl
/**
 * 4-way 16-bit multiplexor:
 * out = a if sel = 00
 *       b if sel = 01
 *       c if sel = 10
 *       d if sel = 11
 */
CHIP Mux4Way16 {
    IN a[16], b[16], c[16], d[16], sel[2];
    OUT out[16];
    
    PARTS:
    //// Replace this comment with your code.
}`,uo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux4Way16.tst

load Mux4Way16.hdl,
compare-to Mux4Way16.cmp,
output-list a%B1.16.1 b%B1.16.1 c%B1.16.1 d%B1.16.1 sel%B2.2.2 out%B1.16.1;

set a 0,
set b 0,
set c 0,
set d 0,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set sel 2,
eval,
output;

set sel 3,
eval,
output;

set a %B0001001000110100,
set b %B1001100001110110,
set c %B1010101010101010,
set d %B0101010101010101,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set sel 2,
eval,
output;

set sel 3,
eval,
output;`,co=`|        a         |        b         |        c         |        d         |        e         |        f         |        g         |        h         |  sel  |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  000  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  001  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  010  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  011  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  100  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  101  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  110  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  111  | 0000000000000000 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  000  | 0001001000110100 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  001  | 0010001101000101 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  010  | 0011010001010110 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  011  | 0100010101100111 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  100  | 0101011001111000 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  101  | 0110011110001001 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  110  | 0111100010011010 |
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  111  | 1000100110101011 |`,lo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux8Way16.hdl
/**
 * 8-way 16-bit multiplexor:
 * out = a if sel = 000
 *       b if sel = 001
 *       c if sel = 010
 *       d if sel = 011
 *       e if sel = 100
 *       f if sel = 101
 *       g if sel = 110
 *       h if sel = 111
 */
CHIP Mux8Way16 {
    IN a[16], b[16], c[16], d[16],
       e[16], f[16], g[16], h[16],
       sel[3];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,po=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Mux8Way16.tst

load Mux8Way16.hdl,
compare-to Mux8Way16.cmp,
output-list a%B1.16.1 b%B1.16.1 c%B1.16.1 d%B1.16.1 e%B1.16.1 f%B1.16.1 g%B1.16.1 h%B1.16.1 sel%B2.3.2 out%B1.16.1;

set a 0,
set b 0,
set c 0,
set d 0,
set e 0,
set f 0,
set g 0,
set h 0,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set sel 2,
eval,
output;

set sel 3,
eval,
output;

set sel 4,
eval,
output;

set sel 5,
eval,
output;

set sel 6,
eval,
output;

set sel 7,
eval,
output;

set a %B0001001000110100,
set b %B0010001101000101,
set c %B0011010001010110,
set d %B0100010101100111,
set e %B0101011001111000,
set f %B0110011110001001,
set g %B0111100010011010,
set h %B1000100110101011,
set sel 0,
eval,
output;

set sel 1,
eval,
output;

set sel 2,
eval,
output;

set sel 3,
eval,
output;

set sel 4,
eval,
output;

set sel 5,
eval,
output;

set sel 6,
eval,
output;

set sel 7,
eval,
output;`,ho=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/DMux4Way.hdl
/**
 * 4-way demultiplexor:
 * [a, b, c, d] = [in, 0, 0, 0] if sel = 00
 *                [0, in, 0, 0] if sel = 01
 *                [0, 0, in, 0] if sel = 10
 *                [0, 0, 0, in] if sel = 11
 */
CHIP DMux4Way {
    IN in, sel[2];
    OUT a, b, c, d;

    PARTS:
    //// Replace this comment with your code.
}`,fo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/DMux4Way.tst

load DMux4Way.hdl,
compare-to DMux4Way.cmp,
output-list in sel%B2.2.2 a b c d;

set in 0,
set sel %B00,
eval,
output;

set sel %B01,
eval,
output;

set sel %B10,
eval,
output;

set sel %B11,
eval,
output;

set in 1,
set sel %B00,
eval,
output;

set sel %B01,
eval,
output;

set sel %B10,
eval,
output;

set sel %B11,
eval,
output;`,mo=`|in | sel  | a | b | c | d |
| 0 |  00  | 0 | 0 | 0 | 0 |
| 0 |  01  | 0 | 0 | 0 | 0 |
| 0 |  10  | 0 | 0 | 0 | 0 |
| 0 |  11  | 0 | 0 | 0 | 0 |
| 1 |  00  | 1 | 0 | 0 | 0 |
| 1 |  01  | 0 | 1 | 0 | 0 |
| 1 |  10  | 0 | 0 | 1 | 0 |
| 1 |  11  | 0 | 0 | 0 | 1 |`,go=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/DMux8Way.hdl
/**
 * 8-way demultiplexor:
 * [a, b, c, d, e, f, g, h] = [in, 0,  0,  0,  0,  0,  0,  0] if sel = 000
 *                            [0, in,  0,  0,  0,  0,  0,  0] if sel = 001
 *                            [0,  0, in,  0,  0,  0,  0,  0] if sel = 010
 *                            [0,  0,  0, in,  0,  0,  0,  0] if sel = 011
 *                            [0,  0,  0,  0, in,  0,  0,  0] if sel = 100
 *                            [0,  0,  0,  0,  0, in,  0,  0] if sel = 101
 *                            [0,  0,  0,  0,  0,  0, in,  0] if sel = 110
 *                            [0,  0,  0,  0,  0,  0,  0, in] if sel = 111
 */
CHIP DMux8Way {
    IN in, sel[3];
    OUT a, b, c, d, e, f, g, h;

    PARTS:
    //// Replace this comment with your code.
}`,vo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/DMux8Way.tst

load DMux8Way.hdl,
compare-to DMux8Way.cmp,
output-list in sel%B2.3.2 a b c d e f g h;

set in 0,
set sel %B000,
eval,
output;

set sel %B001,
eval,
output;

set sel %B010,
eval,
output;

set sel %B011,
eval,
output;

set sel %B100,
eval,
output;

set sel %B101,
eval,
output;

set sel %B110,
eval,
output;

set sel %B111,
eval,
output;

set in 1,
set sel %B000,
eval,
output;

set sel %B001,
eval,
output;

set sel %B010,
eval,
output;

set sel %B011,
eval,
output;

set sel %B100,
eval,
output;

set sel %B101,
eval,
output;

set sel %B110,
eval,
output;

set sel %B111,
eval,
output;`,ko=`|in |  sel  | a | b | c | d | e | f | g | h |
| 0 |  000  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  001  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  010  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  011  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  100  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  101  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  110  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 |  111  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 |  000  | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 |  001  | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 |  010  | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1 |  011  | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1 |  100  | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 1 |  101  | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 1 |  110  | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 1 |  111  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |`,yo=`|     in     |out|
|  00000000  | 0 |
|  11111111  | 1 |
|  00010000  | 1 |
|  00000001  | 1 |
|  00100110  | 1 |`,bo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Or8Way.hdl
/**
 * 8-way Or gate: 
 * out = in[0] Or in[1] Or ... Or in[7]
 */
CHIP Or8Way {
    IN in[8];
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`,wo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/1/Or8Way.tst

load Or8Way.hdl,
compare-to Or8Way.cmp,
output-list in%B2.8.2 out;

set in %B00000000,
eval,
output;

set in %B11111111,
eval,
output;

set in %B00010000,
eval,
output;

set in %B00000001,
eval,
output;

set in %B00100110,
eval,
output;`,Bo={"Nand.tst":Rr,"Nand.cmp":Tr,"Not.hdl":Cr,"Not.tst":Er,"Not.cmp":Mr,"And.hdl":Pr,"And.tst":Or,"And.cmp":Dr,"Or.hdl":Nr,"Or.tst":Lr,"Or.cmp":Fr,"Xor.hdl":jr,"Xor.tst":$r,"Xor.cmp":zr,"Mux.hdl":Vr,"Mux.tst":Wr,"Mux.cmp":Ur,"DMux.hdl":Hr,"DMux.tst":Gr,"DMux.cmp":Kr,"Not16.hdl":qr,"Not16.tst":Zr,"Not16.cmp":Jr,"And16.hdl":Xr,"And16.tst":Yr,"And16.cmp":Qr,"Or16.hdl":eo,"Or16.tst":so,"Or16.cmp":to,"Mux16.hdl":oo,"Mux16.tst":no,"Mux16.cmp":ro,"Mux4Way16.hdl":ao,"Mux4Way16.tst":uo,"Mux4Way16.cmp":io,"Mux8Way16.hdl":lo,"Mux8Way16.tst":po,"Mux8Way16.cmp":co,"DMux4Way.hdl":ho,"DMux4Way.tst":fo,"DMux4Way.cmp":mo,"DMux8Way.hdl":go,"DMux8Way.tst":vo,"DMux8Way.cmp":ko,"Or8Way.hdl":bo,"Or8Way.tst":wo,"Or8Way.cmp":yo},_o=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/HalfAdder.hdl
/**
 * Computes the sum of two bits.
 */
CHIP HalfAdder {
    IN a, b;    // 1-bit inputs
    OUT sum,    // Right bit of a + b 
        carry;  // Left bit of a + b

    PARTS:
    //// Replace this comment with your code.
}`,Ao=`| a | b |sum|car|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |`,So=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/HalfAdder.tst

load HalfAdder.hdl,
compare-to HalfAdder.cmp,
output-list a b sum carry;

set a 0,
set b 0,
eval,
output;

set a 0,
set b 1,
eval,
output;

set a 1,
set b 0,
eval,
output;

set a 1,
set b 1,
eval,
output;`,xo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/FullAdder.hdl
/**
 * Computes the sum of three bits.
 */
CHIP FullAdder {
    IN a, b, c;  // 1-bit inputs
    OUT sum,     // Right bit of a + b + c
        carry;   // Left bit of a + b + c

    PARTS:
    //// Replace this comment with your code.
}`,Io=`| a | b | c |sum|carry|
| 0 | 0 | 0 | 0 |  0  |
| 0 | 0 | 1 | 1 |  0  |
| 0 | 1 | 0 | 1 |  0  |
| 0 | 1 | 1 | 0 |  1  |
| 1 | 0 | 0 | 1 |  0  |
| 1 | 0 | 1 | 0 |  1  |
| 1 | 1 | 0 | 0 |  1  |
| 1 | 1 | 1 | 1 |  1  |`,Ro=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/FullAdder.tst

load FullAdder.hdl,
compare-to FullAdder.cmp,
output-list a b c sum carry%B2.1.2;

set a 0,
set b 0,
set c 0,
eval,
output;

set c 1,
eval,
output;

set b 1,
set c 0,
eval,
output;

set c 1,
eval,
output;

set a 1,
set b 0,
set c 0,
eval,
output;

set c 1,
eval,
output;

set b 1,
set c 0,
eval,
output;

set c 1,
eval,
output;`,To=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/Add16.hdl
/**
 * 16-bit adder: Adds two 16-bit two's complement values.
 * The most significant carry bit is ignored.
 */
CHIP Add16 {
    IN a[16], b[16];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,Mo=`|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1111111111111111 |
| 1111111111111111 | 1111111111111111 | 1111111111111110 |
| 1010101010101010 | 0101010101010101 | 1111111111111111 |
| 0011110011000011 | 0000111111110000 | 0100110010110011 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 |`,Co=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/Add16.tst

load Add16.hdl,
compare-to Add16.cmp,
output-list a%B1.16.1 b%B1.16.1 out%B1.16.1;

set a %B0000000000000000,
set b %B0000000000000000,
eval,
output;

set a %B0000000000000000,
set b %B1111111111111111,
eval,
output;

set a %B1111111111111111,
set b %B1111111111111111,
eval,
output;

set a %B1010101010101010,
set b %B0101010101010101,
eval,
output;

set a %B0011110011000011,
set b %B0000111111110000,
eval,
output;

set a %B0001001000110100,
set b %B1001100001110110,
eval,
output;`,Eo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/Inc16.hdl
/**
 * 16-bit incrementer:
 * out = in + 1
 */
CHIP Inc16 {
    IN in[16];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,Po=`|        in        |       out        |
| 0000000000000000 | 0000000000000001 |
| 1111111111111111 | 0000000000000000 |
| 0000000000000101 | 0000000000000110 |
| 1111111111111011 | 1111111111111100 |
`,Oo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/Inc16.tst

load Inc16.hdl,
compare-to Inc16.cmp,
output-list in%B1.16.1 out%B1.16.1;

set in %B0000000000000000,  // in = 0
eval,
output;

set in %B1111111111111111,  // in = -1
eval,
output;

set in %B0000000000000101,  // in = 5
eval,
output;

set in %B1111111111111011,  // in = -5
eval,
output;`,Do=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/ALU.hdl
/**
 * ALU (Arithmetic Logic Unit):
 * Computes out = one of the following functions:
 *                0, 1, -1,
 *                x, y, !x, !y, -x, -y,
 *                x + 1, y + 1, x - 1, y - 1,
 *                x + y, x - y, y - x,
 *                x & y, x | y
 * on the 16-bit inputs x, y,
 * according to the input bits zx, nx, zy, ny, f, no.
 * In addition, computes the two output bits:
 * if (out == 0) zr = 1, else zr = 0
 * if (out < 0)  ng = 1, else ng = 0
 */
// Implementation: Manipulates the x and y inputs
// and operates on the resulting values, as follows:
// if (zx == 1) sets x = 0        // 16-bit constant
// if (nx == 1) sets x = !x       // bitwise not
// if (zy == 1) sets y = 0        // 16-bit constant
// if (ny == 1) sets y = !y       // bitwise not
// if (f == 1)  sets out = x + y  // integer 2's complement addition
// if (f == 0)  sets out = x & y  // bitwise and
// if (no == 1) sets out = !out   // bitwise not

CHIP ALU {
    IN  
        x[16], y[16],  // 16-bit inputs        
        zx, // zero the x input?
        nx, // negate the x input?
        zy, // zero the y input?
        ny, // negate the y input?
        f,  // compute (out = x + y) or (out = x & y)?
        no; // negate the out output?
    OUT 
        out[16], // 16-bit output
        zr,      // if (out == 0) equals 1, else 0
        ng;      // if (out < 0)  equals 1, else 0

    PARTS:
    //// Replace this comment with your code.
}`,Fo=`|        x         |        y         |zx |nx |zy |ny | f |no |       out        |zr |ng |
| 0000000000000000 | 1111111111111111 | 1 | 0 | 1 | 0 | 1 | 0 | 0000000000000000 | 1 | 0 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 | 0 | 0 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 1 | 0 | 1 | 0 | 1111111111111111 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 0 | 0 | 0000000000000000 | 1 | 0 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 0 | 0 | 1111111111111111 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 0 | 1 | 1111111111111111 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 0 | 1 | 0000000000000000 | 1 | 0 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 1 | 1 | 0000000000000000 | 1 | 0 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 1 | 1 | 0000000000000001 | 0 | 0 |
| 0000000000000000 | 1111111111111111 | 0 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 | 0 | 0 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 1 | 1 | 1 | 0000000000000000 | 1 | 0 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 1 | 0 | 1111111111111111 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 1 | 0 | 1111111111111110 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 0 | 1 | 0 | 1111111111111111 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 0 | 1 | 0 | 0 | 1 | 1 | 0000000000000001 | 0 | 0 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 1 | 1 | 1 | 1111111111111111 | 0 | 1 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 0 | 0 | 0 | 0000000000000000 | 1 | 0 |
| 0000000000000000 | 1111111111111111 | 0 | 1 | 0 | 1 | 0 | 1 | 1111111111111111 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 1 | 0 | 1 | 0 | 1 | 0 | 0000000000000000 | 1 | 0 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 1 | 0 | 1 | 0 | 1111111111111111 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 0 | 0 | 0000000000010001 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 0 | 0 | 0000000000000011 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 0 | 1 | 1111111111101110 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 0 | 1 | 1111111111111100 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 1 | 1 | 1111111111101111 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 1 | 1 | 1111111111111101 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 0 | 1 | 1 | 1 | 1 | 1 | 0000000000010010 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 1 | 1 | 1 | 0000000000000100 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 1 | 0 | 0000000000010000 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 1 | 0 | 0000000000000010 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 0 | 0 | 1 | 0 | 0000000000010100 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 0 | 1 | 0 | 0 | 1 | 1 | 0000000000001110 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 0 | 1 | 1 | 1 | 1111111111110010 | 0 | 1 |
| 0000000000010001 | 0000000000000011 | 0 | 0 | 0 | 0 | 0 | 0 | 0000000000000001 | 0 | 0 |
| 0000000000010001 | 0000000000000011 | 0 | 1 | 0 | 1 | 0 | 1 | 0000000000010011 | 0 | 0 |`,No=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/ALU.tst

load ALU.hdl,
compare-to ALU.cmp,
output-list x%B1.16.1 y%B1.16.1 zx nx zy ny f no out zr ng;

set x %B0000000000000000,  // x = 0
set y %B1111111111111111;  // y = -1

// Compute 0
set zx 1,
set nx 0,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute 1
set zx 1,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute -1
set zx 1,
set nx 1,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute x
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 0,
eval,
output;

// Compute y
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

// Compute !x
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 1,
eval,
output;

// Compute !y
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 1,
eval,
output;

// Compute -x
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute -y
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

// Compute x + 1
set zx 0,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute y + 1
set zx 1,
set nx 1,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute x - 1
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 0,
eval,
output;

// Compute y - 1
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute x + y
set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute x - y
set zx 0,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

// Compute y - x
set zx 0,
set nx 0,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute x & y
set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

// Compute x | y
set zx 0,
set nx 1,
set zy 0,
set ny 1,
set f  0,
set no 1,
eval,
output;

set x %B000000000010001,  // x = 17
set y %B000000000000011;  // y =  3

// Compute 0
set zx 1,
set nx 0,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute 1
set zx 1,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute -1
set zx 1,
set nx 1,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute x
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 0,
eval,
output;

// Compute y
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

// Compute !x
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 1,
eval,
output;

// Compute !y
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 1,
eval,
output;

// Compute -x
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute -y
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

// Compute x + 1
set zx 0,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute y + 1
set zx 1,
set nx 1,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute x - 1
set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 0,
eval,
output;

// Compute y - 1
set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute x + y
set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

// Compute x - y
set zx 0,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

// Compute y - x
set zx 0,
set nx 0,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

// Compute x & y
set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

// Compute x | y
set zx 0,
set nx 1,
set zy 0,
set ny 1,
set f  0,
set no 1,
eval,
output;`,Lo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/2/ALU-basic.tst

// Tests the basic version of the ALU chip.
// DOES NOT replace the final test provided by ALU.tst.
// Specifically: Tests the ALU logic that computes the 'out' output;
// The 'zr' and 'ng' output bits are ignored.

output-list x%B1.16.1 y%B1.16.1 zx nx zy ny f no out%B1.16.1;

set x %B0000000000000000,
set y %B1111111111111111,

set zx 1,
set nx 0,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 1,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 0,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 0,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 0,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

set zx 0,
set nx 1,
set zy 0,
set ny 1,
set f  0,
set no 1,
eval,
output;

set x %B101101110100000,
set y %B001111011010010,

set zx 1,
set nx 0,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 1,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 1,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 0,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  0,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  0,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 1,
set zy 1,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 1,
set ny 1,
set f  1,
set no 0,
eval,
output;

set zx 1,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  1,
set no 0,
eval,
output;

set zx 0,
set nx 1,
set zy 0,
set ny 0,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 0,
set ny 1,
set f  1,
set no 1,
eval,
output;

set zx 0,
set nx 0,
set zy 0,
set ny 0,
set f  0,
set no 0,
eval,
output;

set zx 0,
set nx 1,
set zy 0,
set ny 1,
set f  0,
set no 1,
eval,
output;`,zo=`|        x         |        y         |zx |nx |zy |ny | f |no |       out        |
| 0000000000000000 | 1111111111111111 | 1 | 0 | 1 | 0 | 1 | 0 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 1 | 0 | 1 | 0 | 1111111111111111 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 0 | 0 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 0 | 0 | 1111111111111111 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 0 | 1 | 1111111111111111 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 0 | 1 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 1 | 1 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 1 | 1 | 0000000000000001 |
| 0000000000000000 | 1111111111111111 | 0 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 1 | 1 | 1 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 1 | 0 | 1111111111111111 |
| 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 1 | 0 | 1111111111111110 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 0 | 1 | 0 | 1111111111111111 |
| 0000000000000000 | 1111111111111111 | 0 | 1 | 0 | 0 | 1 | 1 | 0000000000000001 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 1 | 1 | 1 | 1111111111111111 |
| 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 0 | 0 | 0 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 0 | 1 | 0 | 1 | 0 | 1 | 1111111111111111 |
| 0101101110100000 | 0001111011010010 | 1 | 0 | 1 | 0 | 1 | 0 | 0000000000000000 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 1 | 0 | 1 | 0 | 1111111111111111 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 1 | 1 | 0 | 0 | 0101101110100000 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 0 | 0 | 0 | 0 | 0001111011010010 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 1 | 1 | 0 | 1 | 1010010001011111 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 0 | 0 | 0 | 1 | 1110000100101101 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 1 | 1 | 1 | 1 | 1010010001100000 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 0 | 0 | 1 | 1 | 1110000100101110 |
| 0101101110100000 | 0001111011010010 | 0 | 1 | 1 | 1 | 1 | 1 | 0101101110100001 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 0 | 1 | 1 | 1 | 0001111011010011 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 1 | 1 | 1 | 0 | 0101101110011111 |
| 0101101110100000 | 0001111011010010 | 1 | 1 | 0 | 0 | 1 | 0 | 0001111011010001 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 0 | 0 | 1 | 0 | 0111101001110010 |
| 0101101110100000 | 0001111011010010 | 0 | 1 | 0 | 0 | 1 | 1 | 0011110011001110 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 0 | 1 | 1 | 1 | 1100001100110010 |
| 0101101110100000 | 0001111011010010 | 0 | 0 | 0 | 0 | 0 | 0 | 0001101010000000 |
| 0101101110100000 | 0001111011010010 | 0 | 1 | 0 | 1 | 0 | 1 | 0101111111110010 |`,jo={"HalfAdder.hdl":_o,"HalfAdder.tst":So,"HalfAdder.cmp":Ao,"FullAdder.hdl":xo,"FullAdder.tst":Ro,"FullAdder.cmp":Io,"Add16.hdl":To,"Add16.tst":Co,"Add16.cmp":Mo,"Inc16.hdl":Eo,"Inc16.tst":Oo,"Inc16.cmp":Po,"ALU.hdl":Do,"ALU.tst":No,"ALU.cmp":Fo,"ALU-basic.tst":Lo,"ALU-basic.cmp":zo},$o=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/Bit.hdl
/**
 * 1-bit register:
 * If load is asserted, the register's value is set to in;
 * Otherwise, the register maintains its current value:
 * if (load(t)) out(t+1) = in(t), else out(t+1) = out(t)
 */
CHIP Bit {
    IN in, load;
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`,Uo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/Bit.tst

load Bit.hdl,
compare-to Bit.cmp,
output-list time%S1.4.1 in load%B1.1.2 out;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 1,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 1,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 1,
tick,
output;

tock,
output;

set in 1,
set load 1,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 1,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;

set in 1,
set load 0,
tick,
output;

tock,
output;`,Vo=`| time |in |load|out|
| 0+   | 0 | 0  | 0 |
| 1    | 0 | 0  | 0 |
| 1+   | 0 | 1  | 0 |
| 2    | 0 | 1  | 0 |
| 2+   | 1 | 0  | 0 |
| 3    | 1 | 0  | 0 |
| 3+   | 1 | 1  | 0 |
| 4    | 1 | 1  | 1 |
| 4+   | 0 | 0  | 1 |
| 5    | 0 | 0  | 1 |
| 5+   | 1 | 0  | 1 |
| 6    | 1 | 0  | 1 |
| 6+   | 0 | 1  | 1 |
| 7    | 0 | 1  | 0 |
| 7+   | 1 | 1  | 0 |
| 8    | 1 | 1  | 1 |
| 8+   | 0 | 0  | 1 |
| 9    | 0 | 0  | 1 |
| 9+   | 0 | 0  | 1 |
| 10   | 0 | 0  | 1 |
| 10+  | 0 | 0  | 1 |
| 11   | 0 | 0  | 1 |
| 11+  | 0 | 0  | 1 |
| 12   | 0 | 0  | 1 |
| 12+  | 0 | 0  | 1 |
| 13   | 0 | 0  | 1 |
| 13+  | 0 | 0  | 1 |
| 14   | 0 | 0  | 1 |
| 14+  | 0 | 0  | 1 |
| 15   | 0 | 0  | 1 |
| 15+  | 0 | 0  | 1 |
| 16   | 0 | 0  | 1 |
| 16+  | 0 | 0  | 1 |
| 17   | 0 | 0  | 1 |
| 17+  | 0 | 0  | 1 |
| 18   | 0 | 0  | 1 |
| 18+  | 0 | 0  | 1 |
| 19   | 0 | 0  | 1 |
| 19+  | 0 | 0  | 1 |
| 20   | 0 | 0  | 1 |
| 20+  | 0 | 0  | 1 |
| 21   | 0 | 0  | 1 |
| 21+  | 0 | 0  | 1 |
| 22   | 0 | 0  | 1 |
| 22+  | 0 | 0  | 1 |
| 23   | 0 | 0  | 1 |
| 23+  | 0 | 0  | 1 |
| 24   | 0 | 0  | 1 |
| 24+  | 0 | 0  | 1 |
| 25   | 0 | 0  | 1 |
| 25+  | 0 | 0  | 1 |
| 26   | 0 | 0  | 1 |
| 26+  | 0 | 0  | 1 |
| 27   | 0 | 0  | 1 |
| 27+  | 0 | 0  | 1 |
| 28   | 0 | 0  | 1 |
| 28+  | 0 | 0  | 1 |
| 29   | 0 | 0  | 1 |
| 29+  | 0 | 0  | 1 |
| 30   | 0 | 0  | 1 |
| 30+  | 0 | 0  | 1 |
| 31   | 0 | 0  | 1 |
| 31+  | 0 | 0  | 1 |
| 32   | 0 | 0  | 1 |
| 32+  | 0 | 0  | 1 |
| 33   | 0 | 0  | 1 |
| 33+  | 0 | 0  | 1 |
| 34   | 0 | 0  | 1 |
| 34+  | 0 | 0  | 1 |
| 35   | 0 | 0  | 1 |
| 35+  | 0 | 0  | 1 |
| 36   | 0 | 0  | 1 |
| 36+  | 0 | 0  | 1 |
| 37   | 0 | 0  | 1 |
| 37+  | 0 | 0  | 1 |
| 38   | 0 | 0  | 1 |
| 38+  | 0 | 0  | 1 |
| 39   | 0 | 0  | 1 |
| 39+  | 0 | 0  | 1 |
| 40   | 0 | 0  | 1 |
| 40+  | 0 | 0  | 1 |
| 41   | 0 | 0  | 1 |
| 41+  | 0 | 0  | 1 |
| 42   | 0 | 0  | 1 |
| 42+  | 0 | 0  | 1 |
| 43   | 0 | 0  | 1 |
| 43+  | 0 | 0  | 1 |
| 44   | 0 | 0  | 1 |
| 44+  | 0 | 0  | 1 |
| 45   | 0 | 0  | 1 |
| 45+  | 0 | 0  | 1 |
| 46   | 0 | 0  | 1 |
| 46+  | 0 | 0  | 1 |
| 47   | 0 | 0  | 1 |
| 47+  | 0 | 0  | 1 |
| 48   | 0 | 0  | 1 |
| 48+  | 0 | 0  | 1 |
| 49   | 0 | 0  | 1 |
| 49+  | 0 | 0  | 1 |
| 50   | 0 | 0  | 1 |
| 50+  | 0 | 0  | 1 |
| 51   | 0 | 0  | 1 |
| 51+  | 0 | 0  | 1 |
| 52   | 0 | 0  | 1 |
| 52+  | 0 | 0  | 1 |
| 53   | 0 | 0  | 1 |
| 53+  | 0 | 0  | 1 |
| 54   | 0 | 0  | 1 |
| 54+  | 0 | 0  | 1 |
| 55   | 0 | 0  | 1 |
| 55+  | 0 | 0  | 1 |
| 56   | 0 | 0  | 1 |
| 56+  | 0 | 0  | 1 |
| 57   | 0 | 0  | 1 |
| 57+  | 0 | 1  | 1 |
| 58   | 0 | 1  | 0 |
| 58+  | 1 | 0  | 0 |
| 59   | 1 | 0  | 0 |
| 59+  | 1 | 0  | 0 |
| 60   | 1 | 0  | 0 |
| 60+  | 1 | 0  | 0 |
| 61   | 1 | 0  | 0 |
| 61+  | 1 | 0  | 0 |
| 62   | 1 | 0  | 0 |
| 62+  | 1 | 0  | 0 |
| 63   | 1 | 0  | 0 |
| 63+  | 1 | 0  | 0 |
| 64   | 1 | 0  | 0 |
| 64+  | 1 | 0  | 0 |
| 65   | 1 | 0  | 0 |
| 65+  | 1 | 0  | 0 |
| 66   | 1 | 0  | 0 |
| 66+  | 1 | 0  | 0 |
| 67   | 1 | 0  | 0 |
| 67+  | 1 | 0  | 0 |
| 68   | 1 | 0  | 0 |
| 68+  | 1 | 0  | 0 |
| 69   | 1 | 0  | 0 |
| 69+  | 1 | 0  | 0 |
| 70   | 1 | 0  | 0 |
| 70+  | 1 | 0  | 0 |
| 71   | 1 | 0  | 0 |
| 71+  | 1 | 0  | 0 |
| 72   | 1 | 0  | 0 |
| 72+  | 1 | 0  | 0 |
| 73   | 1 | 0  | 0 |
| 73+  | 1 | 0  | 0 |
| 74   | 1 | 0  | 0 |
| 74+  | 1 | 0  | 0 |
| 75   | 1 | 0  | 0 |
| 75+  | 1 | 0  | 0 |
| 76   | 1 | 0  | 0 |
| 76+  | 1 | 0  | 0 |
| 77   | 1 | 0  | 0 |
| 77+  | 1 | 0  | 0 |
| 78   | 1 | 0  | 0 |
| 78+  | 1 | 0  | 0 |
| 79   | 1 | 0  | 0 |
| 79+  | 1 | 0  | 0 |
| 80   | 1 | 0  | 0 |
| 80+  | 1 | 0  | 0 |
| 81   | 1 | 0  | 0 |
| 81+  | 1 | 0  | 0 |
| 82   | 1 | 0  | 0 |
| 82+  | 1 | 0  | 0 |
| 83   | 1 | 0  | 0 |
| 83+  | 1 | 0  | 0 |
| 84   | 1 | 0  | 0 |
| 84+  | 1 | 0  | 0 |
| 85   | 1 | 0  | 0 |
| 85+  | 1 | 0  | 0 |
| 86   | 1 | 0  | 0 |
| 86+  | 1 | 0  | 0 |
| 87   | 1 | 0  | 0 |
| 87+  | 1 | 0  | 0 |
| 88   | 1 | 0  | 0 |
| 88+  | 1 | 0  | 0 |
| 89   | 1 | 0  | 0 |
| 89+  | 1 | 0  | 0 |
| 90   | 1 | 0  | 0 |
| 90+  | 1 | 0  | 0 |
| 91   | 1 | 0  | 0 |
| 91+  | 1 | 0  | 0 |
| 92   | 1 | 0  | 0 |
| 92+  | 1 | 0  | 0 |
| 93   | 1 | 0  | 0 |
| 93+  | 1 | 0  | 0 |
| 94   | 1 | 0  | 0 |
| 94+  | 1 | 0  | 0 |
| 95   | 1 | 0  | 0 |
| 95+  | 1 | 0  | 0 |
| 96   | 1 | 0  | 0 |
| 96+  | 1 | 0  | 0 |
| 97   | 1 | 0  | 0 |
| 97+  | 1 | 0  | 0 |
| 98   | 1 | 0  | 0 |
| 98+  | 1 | 0  | 0 |
| 99   | 1 | 0  | 0 |
| 99+  | 1 | 0  | 0 |
| 100  | 1 | 0  | 0 |
| 100+ | 1 | 0  | 0 |
| 101  | 1 | 0  | 0 |
| 101+ | 1 | 0  | 0 |
| 102  | 1 | 0  | 0 |
| 102+ | 1 | 0  | 0 |
| 103  | 1 | 0  | 0 |
| 103+ | 1 | 0  | 0 |
| 104  | 1 | 0  | 0 |
| 104+ | 1 | 0  | 0 |
| 105  | 1 | 0  | 0 |
| 105+ | 1 | 0  | 0 |
| 106  | 1 | 0  | 0 |
| 106+ | 1 | 0  | 0 |
| 107  | 1 | 0  | 0 |`,Wo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/Register.hdl
/**
 * 16-bit register:
 * If load is asserted, the register's value is set to in;
 * Otherwise, the register maintains its current value:
 * if (load(t)) out(t+1) = int(t), else out(t+1) = out(t)
 */
CHIP Register {
    IN in[16], load;
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,Ho=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/Register.tst

load Register.hdl,
compare-to Register.cmp,
output-list time%S1.3.1 in%D1.6.1 load%B2.1.1 out%D1.6.1;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 1,
tick,
output;

tock,
output;

set in -32123,
set load 0,
tick,
output;

tock,
output;

set in 11111,
set load 0,
tick,
output;

tock,
output;

set in -32123,
set load 1,
tick,
output;

tock,
output;

set in -32123,
set load 1,
tick,
output;

tock,
output;

set in -32123,
set load 0,
tick,
output;

tock,
output;

set in 12345,
set load 1,
tick,
output;

tock,
output;

set in 0,
set load 0,
tick,
output;

tock,
output;

set in 0,
set load 1,
tick,
output;

tock,
output;

set in %B0000000000000001,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000000000010,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000000000100,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000000001000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000000010000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000000100000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000001000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000010000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000000100000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000001000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000010000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0000100000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0001000000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0010000000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0100000000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1000000000000000,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111111111110,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111111111101,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111111111011,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111111110111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111111101111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111111011111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111110111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111101111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111111011111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111110111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111101111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1111011111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1110111111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1101111111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B1011111111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set in %B0111111111111111,
set load 0,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;`,Go=`|time |   in   |load|  out   |
| 0+  |      0 |  0 |      0 |
| 1   |      0 |  0 |      0 |
| 1+  |      0 |  1 |      0 |
| 2   |      0 |  1 |      0 |
| 2+  | -32123 |  0 |      0 |
| 3   | -32123 |  0 |      0 |
| 3+  |  11111 |  0 |      0 |
| 4   |  11111 |  0 |      0 |
| 4+  | -32123 |  1 |      0 |
| 5   | -32123 |  1 | -32123 |
| 5+  | -32123 |  1 | -32123 |
| 6   | -32123 |  1 | -32123 |
| 6+  | -32123 |  0 | -32123 |
| 7   | -32123 |  0 | -32123 |
| 7+  |  12345 |  1 | -32123 |
| 8   |  12345 |  1 |  12345 |
| 8+  |      0 |  0 |  12345 |
| 9   |      0 |  0 |  12345 |
| 9+  |      0 |  1 |  12345 |
| 10  |      0 |  1 |      0 |
| 10+ |      1 |  0 |      0 |
| 11  |      1 |  0 |      0 |
| 11+ |      1 |  1 |      0 |
| 12  |      1 |  1 |      1 |
| 12+ |      2 |  0 |      1 |
| 13  |      2 |  0 |      1 |
| 13+ |      2 |  1 |      1 |
| 14  |      2 |  1 |      2 |
| 14+ |      4 |  0 |      2 |
| 15  |      4 |  0 |      2 |
| 15+ |      4 |  1 |      2 |
| 16  |      4 |  1 |      4 |
| 16+ |      8 |  0 |      4 |
| 17  |      8 |  0 |      4 |
| 17+ |      8 |  1 |      4 |
| 18  |      8 |  1 |      8 |
| 18+ |     16 |  0 |      8 |
| 19  |     16 |  0 |      8 |
| 19+ |     16 |  1 |      8 |
| 20  |     16 |  1 |     16 |
| 20+ |     32 |  0 |     16 |
| 21  |     32 |  0 |     16 |
| 21+ |     32 |  1 |     16 |
| 22  |     32 |  1 |     32 |
| 22+ |     64 |  0 |     32 |
| 23  |     64 |  0 |     32 |
| 23+ |     64 |  1 |     32 |
| 24  |     64 |  1 |     64 |
| 24+ |    128 |  0 |     64 |
| 25  |    128 |  0 |     64 |
| 25+ |    128 |  1 |     64 |
| 26  |    128 |  1 |    128 |
| 26+ |    256 |  0 |    128 |
| 27  |    256 |  0 |    128 |
| 27+ |    256 |  1 |    128 |
| 28  |    256 |  1 |    256 |
| 28+ |    512 |  0 |    256 |
| 29  |    512 |  0 |    256 |
| 29+ |    512 |  1 |    256 |
| 30  |    512 |  1 |    512 |
| 30+ |   1024 |  0 |    512 |
| 31  |   1024 |  0 |    512 |
| 31+ |   1024 |  1 |    512 |
| 32  |   1024 |  1 |   1024 |
| 32+ |   2048 |  0 |   1024 |
| 33  |   2048 |  0 |   1024 |
| 33+ |   2048 |  1 |   1024 |
| 34  |   2048 |  1 |   2048 |
| 34+ |   4096 |  0 |   2048 |
| 35  |   4096 |  0 |   2048 |
| 35+ |   4096 |  1 |   2048 |
| 36  |   4096 |  1 |   4096 |
| 36+ |   8192 |  0 |   4096 |
| 37  |   8192 |  0 |   4096 |
| 37+ |   8192 |  1 |   4096 |
| 38  |   8192 |  1 |   8192 |
| 38+ |  16384 |  0 |   8192 |
| 39  |  16384 |  0 |   8192 |
| 39+ |  16384 |  1 |   8192 |
| 40  |  16384 |  1 |  16384 |
| 40+ | -32768 |  0 |  16384 |
| 41  | -32768 |  0 |  16384 |
| 41+ | -32768 |  1 |  16384 |
| 42  | -32768 |  1 | -32768 |
| 42+ |     -2 |  0 | -32768 |
| 43  |     -2 |  0 | -32768 |
| 43+ |     -2 |  1 | -32768 |
| 44  |     -2 |  1 |     -2 |
| 44+ |     -3 |  0 |     -2 |
| 45  |     -3 |  0 |     -2 |
| 45+ |     -3 |  1 |     -2 |
| 46  |     -3 |  1 |     -3 |
| 46+ |     -5 |  0 |     -3 |
| 47  |     -5 |  0 |     -3 |
| 47+ |     -5 |  1 |     -3 |
| 48  |     -5 |  1 |     -5 |
| 48+ |     -9 |  0 |     -5 |
| 49  |     -9 |  0 |     -5 |
| 49+ |     -9 |  1 |     -5 |
| 50  |     -9 |  1 |     -9 |
| 50+ |    -17 |  0 |     -9 |
| 51  |    -17 |  0 |     -9 |
| 51+ |    -17 |  1 |     -9 |
| 52  |    -17 |  1 |    -17 |
| 52+ |    -33 |  0 |    -17 |
| 53  |    -33 |  0 |    -17 |
| 53+ |    -33 |  1 |    -17 |
| 54  |    -33 |  1 |    -33 |
| 54+ |    -65 |  0 |    -33 |
| 55  |    -65 |  0 |    -33 |
| 55+ |    -65 |  1 |    -33 |
| 56  |    -65 |  1 |    -65 |
| 56+ |   -129 |  0 |    -65 |
| 57  |   -129 |  0 |    -65 |
| 57+ |   -129 |  1 |    -65 |
| 58  |   -129 |  1 |   -129 |
| 58+ |   -257 |  0 |   -129 |
| 59  |   -257 |  0 |   -129 |
| 59+ |   -257 |  1 |   -129 |
| 60  |   -257 |  1 |   -257 |
| 60+ |   -513 |  0 |   -257 |
| 61  |   -513 |  0 |   -257 |
| 61+ |   -513 |  1 |   -257 |
| 62  |   -513 |  1 |   -513 |
| 62+ |  -1025 |  0 |   -513 |
| 63  |  -1025 |  0 |   -513 |
| 63+ |  -1025 |  1 |   -513 |
| 64  |  -1025 |  1 |  -1025 |
| 64+ |  -2049 |  0 |  -1025 |
| 65  |  -2049 |  0 |  -1025 |
| 65+ |  -2049 |  1 |  -1025 |
| 66  |  -2049 |  1 |  -2049 |
| 66+ |  -4097 |  0 |  -2049 |
| 67  |  -4097 |  0 |  -2049 |
| 67+ |  -4097 |  1 |  -2049 |
| 68  |  -4097 |  1 |  -4097 |
| 68+ |  -8193 |  0 |  -4097 |
| 69  |  -8193 |  0 |  -4097 |
| 69+ |  -8193 |  1 |  -4097 |
| 70  |  -8193 |  1 |  -8193 |
| 70+ | -16385 |  0 |  -8193 |
| 71  | -16385 |  0 |  -8193 |
| 71+ | -16385 |  1 |  -8193 |
| 72  | -16385 |  1 | -16385 |
| 72+ |  32767 |  0 | -16385 |
| 73  |  32767 |  0 | -16385 |
| 73+ |  32767 |  1 | -16385 |
| 74  |  32767 |  1 |  32767 |`,Ko=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/PC.hdl
/**
 * A 16-bit counter.
 * if      reset(t): out(t+1) = 0
 * else if load(t):  out(t+1) = in(t)
 * else if inc(t):   out(t+1) = out(t) + 1
 * else              out(t+1) = out(t)
 */
CHIP PC {
    IN in[16], reset, load, inc;
    OUT out[16];
    
    PARTS:
    //// Replace this comment with your code.
}`,qo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/03/a/PC.tst

load PC.hdl,
compare-to PC.cmp,
output-list time%S1.3.1 in%D1.6.1 reset%B2.1.2 load%B2.1.2 inc%B2.1.2 out%D1.6.1;

set in 0,
set reset 0,
set load 0,
set inc 0,
tick,
output;

tock,
output;

set inc 1,
tick,
output;

tock,
output;

set in -32123,
tick,
output;

tock,
output;

set load 1,
tick,
output;

tock,
output;

set load 0,
tick,
output;

tock,
output;

tick,
output;

tock,
output;

set in 12345,
set load 1,
set inc 0,
tick,
output;

tock,
output;

set reset 1,
tick,
output;

tock,
output;

set reset 0,
set inc 1,
tick,
output;

tock,
output;

set reset 1,
tick,
output;

tock,
output;

set reset 0,
set load 0,
tick,
output;

tock,
output;

set reset 1,
tick,
output;

tock,
output;

set in 0,
set reset 0,
set load 1,
tick,
output;

tock,
output;

set load 0,
set inc 1,
tick,
output;

tock,
output;

set in 22222,
set reset 1,
set inc 0,
tick,
output;

tock,
output;`,Zo=`|time |   in   |reset|load | inc |  out   |
| 0+  |      0 |  0  |  0  |  0  |      0 |
| 1   |      0 |  0  |  0  |  0  |      0 |
| 1+  |      0 |  0  |  0  |  1  |      0 |
| 2   |      0 |  0  |  0  |  1  |      1 |
| 2+  | -32123 |  0  |  0  |  1  |      1 |
| 3   | -32123 |  0  |  0  |  1  |      2 |
| 3+  | -32123 |  0  |  1  |  1  |      2 |
| 4   | -32123 |  0  |  1  |  1  | -32123 |
| 4+  | -32123 |  0  |  0  |  1  | -32123 |
| 5   | -32123 |  0  |  0  |  1  | -32122 |
| 5+  | -32123 |  0  |  0  |  1  | -32122 |
| 6   | -32123 |  0  |  0  |  1  | -32121 |
| 6+  |  12345 |  0  |  1  |  0  | -32121 |
| 7   |  12345 |  0  |  1  |  0  |  12345 |
| 7+  |  12345 |  1  |  1  |  0  |  12345 |
| 8   |  12345 |  1  |  1  |  0  |      0 |
| 8+  |  12345 |  0  |  1  |  1  |      0 |
| 9   |  12345 |  0  |  1  |  1  |  12345 |
| 9+  |  12345 |  1  |  1  |  1  |  12345 |
| 10  |  12345 |  1  |  1  |  1  |      0 |
| 10+ |  12345 |  0  |  0  |  1  |      0 |
| 11  |  12345 |  0  |  0  |  1  |      1 |
| 11+ |  12345 |  1  |  0  |  1  |      1 |
| 12  |  12345 |  1  |  0  |  1  |      0 |
| 12+ |      0 |  0  |  1  |  1  |      0 |
| 13  |      0 |  0  |  1  |  1  |      0 |
| 13+ |      0 |  0  |  0  |  1  |      0 |
| 14  |      0 |  0  |  0  |  1  |      1 |
| 14+ |  22222 |  1  |  0  |  0  |      1 |
| 15  |  22222 |  1  |  0  |  0  |      0 |`,Jo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/RAM8.hdl
/**
 * Memory of eight 16-bit registers.
 * If load is asserted, the value of the register selected by
 * address is set to in; Otherwise, the value does not change.
 * The value of the selected register is emitted by out.
 */
CHIP RAM8 {
    IN in[16], load, address[3];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,Xo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/RAM8.tst

load RAM8.hdl,
compare-to RAM8.cmp,
output-list time%S1.3.1 in%D1.6.1 load%B2.1.1 address%D3.1.3 out%D1.6.1;

set in 0,
set load 0,
set address 0,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set in 11111,
set load 0,
tick,
output;
tock,
output;

set load 1,
set address 1,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;

set in 3333,
set address 3,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 1,
eval,
output;

set in 7777,
tick,
output;
tock,
output;

set load 1,
set address 7,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 3,
eval,
output;

set address 7,
eval,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set in %B0101010101010101,
set address 0,
tick,
output;
tock,
output;
set address 1,
tick,
output,
tock,
output;
set address 2,
tick,
output,
tock,
output;
set address 3,
tick,
output,
tock,
output;
set address 4,
tick,
output,
tock,
output;
set address 5,
tick,
output,
tock,
output;
set address 6,
tick,
output,
tock,
output;
set address 7,
tick,
output,
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 0,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 0,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 1,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 1,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 2,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 2,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 3,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 3,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 4,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 4,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 5,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 5,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 6,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 6,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address 7,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;

set load 1,
set address 7,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;
set address 1,
eval,
output;
set address 2,
eval,
output;
set address 3,
eval,
output;
set address 4,
eval,
output;
set address 5,
eval,
output;
set address 6,
eval,
output;
set address 7,
eval,
output;
`,Yo=`|time |   in   |load|address|  out   |
| 0+  |      0 |  0 |   0   |      0 |
| 1   |      0 |  0 |   0   |      0 |
| 1+  |      0 |  1 |   0   |      0 |
| 2   |      0 |  1 |   0   |      0 |
| 2+  |  11111 |  0 |   0   |      0 |
| 3   |  11111 |  0 |   0   |      0 |
| 3+  |  11111 |  1 |   1   |      0 |
| 4   |  11111 |  1 |   1   |  11111 |
| 4+  |  11111 |  0 |   0   |      0 |
| 5   |  11111 |  0 |   0   |      0 |
| 5+  |   3333 |  0 |   3   |      0 |
| 6   |   3333 |  0 |   3   |      0 |
| 6+  |   3333 |  1 |   3   |      0 |
| 7   |   3333 |  1 |   3   |   3333 |
| 7+  |   3333 |  0 |   3   |   3333 |
| 8   |   3333 |  0 |   3   |   3333 |
| 8   |   3333 |  0 |   1   |  11111 |
| 8+  |   7777 |  0 |   1   |  11111 |
| 9   |   7777 |  0 |   1   |  11111 |
| 9+  |   7777 |  1 |   7   |      0 |
| 10  |   7777 |  1 |   7   |   7777 |
| 10+ |   7777 |  0 |   7   |   7777 |
| 11  |   7777 |  0 |   7   |   7777 |
| 11  |   7777 |  0 |   3   |   3333 |
| 11  |   7777 |  0 |   7   |   7777 |
| 11+ |   7777 |  0 |   0   |      0 |
| 12  |   7777 |  0 |   0   |      0 |
| 12  |   7777 |  0 |   1   |  11111 |
| 12  |   7777 |  0 |   2   |      0 |
| 12  |   7777 |  0 |   3   |   3333 |
| 12  |   7777 |  0 |   4   |      0 |
| 12  |   7777 |  0 |   5   |      0 |
| 12  |   7777 |  0 |   6   |      0 |
| 12  |   7777 |  0 |   7   |   7777 |
| 12+ |  21845 |  1 |   0   |      0 |
| 13  |  21845 |  1 |   0   |  21845 |
| 13+ |  21845 |  1 |   1   |  11111 |
| 14  |  21845 |  1 |   1   |  21845 |
| 14+ |  21845 |  1 |   2   |      0 |
| 15  |  21845 |  1 |   2   |  21845 |
| 15+ |  21845 |  1 |   3   |   3333 |
| 16  |  21845 |  1 |   3   |  21845 |
| 16+ |  21845 |  1 |   4   |      0 |
| 17  |  21845 |  1 |   4   |  21845 |
| 17+ |  21845 |  1 |   5   |      0 |
| 18  |  21845 |  1 |   5   |  21845 |
| 18+ |  21845 |  1 |   6   |      0 |
| 19  |  21845 |  1 |   6   |  21845 |
| 19+ |  21845 |  1 |   7   |   7777 |
| 20  |  21845 |  1 |   7   |  21845 |
| 20+ |  21845 |  0 |   0   |  21845 |
| 21  |  21845 |  0 |   0   |  21845 |
| 21  |  21845 |  0 |   1   |  21845 |
| 21  |  21845 |  0 |   2   |  21845 |
| 21  |  21845 |  0 |   3   |  21845 |
| 21  |  21845 |  0 |   4   |  21845 |
| 21  |  21845 |  0 |   5   |  21845 |
| 21  |  21845 |  0 |   6   |  21845 |
| 21  |  21845 |  0 |   7   |  21845 |
| 21+ | -21846 |  1 |   0   |  21845 |
| 22  | -21846 |  1 |   0   | -21846 |
| 22+ | -21846 |  0 |   0   | -21846 |
| 23  | -21846 |  0 |   0   | -21846 |
| 23  | -21846 |  0 |   1   |  21845 |
| 23  | -21846 |  0 |   2   |  21845 |
| 23  | -21846 |  0 |   3   |  21845 |
| 23  | -21846 |  0 |   4   |  21845 |
| 23  | -21846 |  0 |   5   |  21845 |
| 23  | -21846 |  0 |   6   |  21845 |
| 23  | -21846 |  0 |   7   |  21845 |
| 23+ |  21845 |  1 |   0   | -21846 |
| 24  |  21845 |  1 |   0   |  21845 |
| 24+ | -21846 |  1 |   1   |  21845 |
| 25  | -21846 |  1 |   1   | -21846 |
| 25+ | -21846 |  0 |   0   |  21845 |
| 26  | -21846 |  0 |   0   |  21845 |
| 26  | -21846 |  0 |   1   | -21846 |
| 26  | -21846 |  0 |   2   |  21845 |
| 26  | -21846 |  0 |   3   |  21845 |
| 26  | -21846 |  0 |   4   |  21845 |
| 26  | -21846 |  0 |   5   |  21845 |
| 26  | -21846 |  0 |   6   |  21845 |
| 26  | -21846 |  0 |   7   |  21845 |
| 26+ |  21845 |  1 |   1   | -21846 |
| 27  |  21845 |  1 |   1   |  21845 |
| 27+ | -21846 |  1 |   2   |  21845 |
| 28  | -21846 |  1 |   2   | -21846 |
| 28+ | -21846 |  0 |   0   |  21845 |
| 29  | -21846 |  0 |   0   |  21845 |
| 29  | -21846 |  0 |   1   |  21845 |
| 29  | -21846 |  0 |   2   | -21846 |
| 29  | -21846 |  0 |   3   |  21845 |
| 29  | -21846 |  0 |   4   |  21845 |
| 29  | -21846 |  0 |   5   |  21845 |
| 29  | -21846 |  0 |   6   |  21845 |
| 29  | -21846 |  0 |   7   |  21845 |
| 29+ |  21845 |  1 |   2   | -21846 |
| 30  |  21845 |  1 |   2   |  21845 |
| 30+ | -21846 |  1 |   3   |  21845 |
| 31  | -21846 |  1 |   3   | -21846 |
| 31+ | -21846 |  0 |   0   |  21845 |
| 32  | -21846 |  0 |   0   |  21845 |
| 32  | -21846 |  0 |   1   |  21845 |
| 32  | -21846 |  0 |   2   |  21845 |
| 32  | -21846 |  0 |   3   | -21846 |
| 32  | -21846 |  0 |   4   |  21845 |
| 32  | -21846 |  0 |   5   |  21845 |
| 32  | -21846 |  0 |   6   |  21845 |
| 32  | -21846 |  0 |   7   |  21845 |
| 32+ |  21845 |  1 |   3   | -21846 |
| 33  |  21845 |  1 |   3   |  21845 |
| 33+ | -21846 |  1 |   4   |  21845 |
| 34  | -21846 |  1 |   4   | -21846 |
| 34+ | -21846 |  0 |   0   |  21845 |
| 35  | -21846 |  0 |   0   |  21845 |
| 35  | -21846 |  0 |   1   |  21845 |
| 35  | -21846 |  0 |   2   |  21845 |
| 35  | -21846 |  0 |   3   |  21845 |
| 35  | -21846 |  0 |   4   | -21846 |
| 35  | -21846 |  0 |   5   |  21845 |
| 35  | -21846 |  0 |   6   |  21845 |
| 35  | -21846 |  0 |   7   |  21845 |
| 35+ |  21845 |  1 |   4   | -21846 |
| 36  |  21845 |  1 |   4   |  21845 |
| 36+ | -21846 |  1 |   5   |  21845 |
| 37  | -21846 |  1 |   5   | -21846 |
| 37+ | -21846 |  0 |   0   |  21845 |
| 38  | -21846 |  0 |   0   |  21845 |
| 38  | -21846 |  0 |   1   |  21845 |
| 38  | -21846 |  0 |   2   |  21845 |
| 38  | -21846 |  0 |   3   |  21845 |
| 38  | -21846 |  0 |   4   |  21845 |
| 38  | -21846 |  0 |   5   | -21846 |
| 38  | -21846 |  0 |   6   |  21845 |
| 38  | -21846 |  0 |   7   |  21845 |
| 38+ |  21845 |  1 |   5   | -21846 |
| 39  |  21845 |  1 |   5   |  21845 |
| 39+ | -21846 |  1 |   6   |  21845 |
| 40  | -21846 |  1 |   6   | -21846 |
| 40+ | -21846 |  0 |   0   |  21845 |
| 41  | -21846 |  0 |   0   |  21845 |
| 41  | -21846 |  0 |   1   |  21845 |
| 41  | -21846 |  0 |   2   |  21845 |
| 41  | -21846 |  0 |   3   |  21845 |
| 41  | -21846 |  0 |   4   |  21845 |
| 41  | -21846 |  0 |   5   |  21845 |
| 41  | -21846 |  0 |   6   | -21846 |
| 41  | -21846 |  0 |   7   |  21845 |
| 41+ |  21845 |  1 |   6   | -21846 |
| 42  |  21845 |  1 |   6   |  21845 |
| 42+ | -21846 |  1 |   7   |  21845 |
| 43  | -21846 |  1 |   7   | -21846 |
| 43+ | -21846 |  0 |   0   |  21845 |
| 44  | -21846 |  0 |   0   |  21845 |
| 44  | -21846 |  0 |   1   |  21845 |
| 44  | -21846 |  0 |   2   |  21845 |
| 44  | -21846 |  0 |   3   |  21845 |
| 44  | -21846 |  0 |   4   |  21845 |
| 44  | -21846 |  0 |   5   |  21845 |
| 44  | -21846 |  0 |   6   |  21845 |
| 44  | -21846 |  0 |   7   | -21846 |
| 44+ |  21845 |  1 |   7   | -21846 |
| 45  |  21845 |  1 |   7   |  21845 |
| 45+ |  21845 |  0 |   0   |  21845 |
| 46  |  21845 |  0 |   0   |  21845 |
| 46  |  21845 |  0 |   1   |  21845 |
| 46  |  21845 |  0 |   2   |  21845 |
| 46  |  21845 |  0 |   3   |  21845 |
| 46  |  21845 |  0 |   4   |  21845 |
| 46  |  21845 |  0 |   5   |  21845 |
| 46  |  21845 |  0 |   6   |  21845 |
| 46  |  21845 |  0 |   7   |  21845 |`,Qo=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/RAM64.hdl
/**
 * Memory of sixty four 16-bit registers.
 * If load is asserted, the value of the register selected by
 * address is set to in; Otherwise, the value does not change.
 * The value of the selected register is emitted by out.
 */
CHIP RAM64 {
    IN in[16], load, address[6];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,tn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/a/RAM64.tst

load RAM64.hdl,
compare-to RAM64.cmp,
output-list time%S1.3.1 in%D1.6.1 load%B2.1.1 address%D2.3.2 out%D1.6.1;

set in 0,
set load 0,
set address 0,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set in 1313,
set load 0,
tick,
output;
tock,
output;

set load 1,
set address 13,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;

set in 4747,
set address 47,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 13,
eval,
output;

set in 6363,
tick,
output;
tock,
output;

set load 1,
set address 63,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 47,
eval,
output;

set address 63,
eval,
output;


set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
tick,
output,
tock,
output;
set address %B101010,
tick,
output,
tock,
output;
set address %B101011,
tick,
output,
tock,
output;
set address %B101100,
tick,
output,
tock,
output;
set address %B101101,
tick,
output,
tock,
output;
set address %B101110,
tick,
output,
tock,
output;
set address %B101111,
tick,
output,
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101000,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101000,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101001,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101001,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101011,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101011,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101100,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101100,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101110,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101110,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101111,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;

set load 1,
set address %B101111,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B101000,
tick,
output;
tock,
output;
set address %B101001,
eval,
output;
set address %B101010,
eval,
output;
set address %B101011,
eval,
output;
set address %B101100,
eval,
output;
set address %B101101,
eval,
output;
set address %B101110,
eval,
output;
set address %B101111,
eval,
output;


set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
tick,
output,
tock,
output;
set address %B010101,
tick,
output,
tock,
output;
set address %B011101,
tick,
output,
tock,
output;
set address %B100101,
tick,
output,
tock,
output;
set address %B101101,
tick,
output,
tock,
output;
set address %B110101,
tick,
output,
tock,
output;
set address %B111101,
tick,
output,
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B000101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B000101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B001101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B001101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B011101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B011101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B100101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B100101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B101101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B110101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B110101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B111101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;

set load 1,
set address %B111101,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B000101,
tick,
output;
tock,
output;
set address %B001101,
eval,
output;
set address %B010101,
eval,
output;
set address %B011101,
eval,
output;
set address %B100101,
eval,
output;
set address %B101101,
eval,
output;
set address %B110101,
eval,
output;
set address %B111101,
eval,
output;`,en=`|time |   in   |load|address|  out   |
| 0+  |      0 |  0 |    0  |      0 |
| 1   |      0 |  0 |    0  |      0 |
| 1+  |      0 |  1 |    0  |      0 |
| 2   |      0 |  1 |    0  |      0 |
| 2+  |   1313 |  0 |    0  |      0 |
| 3   |   1313 |  0 |    0  |      0 |
| 3+  |   1313 |  1 |   13  |      0 |
| 4   |   1313 |  1 |   13  |   1313 |
| 4+  |   1313 |  0 |    0  |      0 |
| 5   |   1313 |  0 |    0  |      0 |
| 5+  |   4747 |  0 |   47  |      0 |
| 6   |   4747 |  0 |   47  |      0 |
| 6+  |   4747 |  1 |   47  |      0 |
| 7   |   4747 |  1 |   47  |   4747 |
| 7+  |   4747 |  0 |   47  |   4747 |
| 8   |   4747 |  0 |   47  |   4747 |
| 8   |   4747 |  0 |   13  |   1313 |
| 8+  |   6363 |  0 |   13  |   1313 |
| 9   |   6363 |  0 |   13  |   1313 |
| 9+  |   6363 |  1 |   63  |      0 |
| 10  |   6363 |  1 |   63  |   6363 |
| 10+ |   6363 |  0 |   63  |   6363 |
| 11  |   6363 |  0 |   63  |   6363 |
| 11  |   6363 |  0 |   47  |   4747 |
| 11  |   6363 |  0 |   63  |   6363 |
| 11+ |   6363 |  0 |   40  |      0 |
| 12  |   6363 |  0 |   40  |      0 |
| 12  |   6363 |  0 |   41  |      0 |
| 12  |   6363 |  0 |   42  |      0 |
| 12  |   6363 |  0 |   43  |      0 |
| 12  |   6363 |  0 |   44  |      0 |
| 12  |   6363 |  0 |   45  |      0 |
| 12  |   6363 |  0 |   46  |      0 |
| 12  |   6363 |  0 |   47  |   4747 |
| 12+ |  21845 |  1 |   40  |      0 |
| 13  |  21845 |  1 |   40  |  21845 |
| 13+ |  21845 |  1 |   41  |      0 |
| 14  |  21845 |  1 |   41  |  21845 |
| 14+ |  21845 |  1 |   42  |      0 |
| 15  |  21845 |  1 |   42  |  21845 |
| 15+ |  21845 |  1 |   43  |      0 |
| 16  |  21845 |  1 |   43  |  21845 |
| 16+ |  21845 |  1 |   44  |      0 |
| 17  |  21845 |  1 |   44  |  21845 |
| 17+ |  21845 |  1 |   45  |      0 |
| 18  |  21845 |  1 |   45  |  21845 |
| 18+ |  21845 |  1 |   46  |      0 |
| 19  |  21845 |  1 |   46  |  21845 |
| 19+ |  21845 |  1 |   47  |   4747 |
| 20  |  21845 |  1 |   47  |  21845 |
| 20+ |  21845 |  0 |   40  |  21845 |
| 21  |  21845 |  0 |   40  |  21845 |
| 21  |  21845 |  0 |   41  |  21845 |
| 21  |  21845 |  0 |   42  |  21845 |
| 21  |  21845 |  0 |   43  |  21845 |
| 21  |  21845 |  0 |   44  |  21845 |
| 21  |  21845 |  0 |   45  |  21845 |
| 21  |  21845 |  0 |   46  |  21845 |
| 21  |  21845 |  0 |   47  |  21845 |
| 21+ | -21846 |  1 |   40  |  21845 |
| 22  | -21846 |  1 |   40  | -21846 |
| 22+ | -21846 |  0 |   40  | -21846 |
| 23  | -21846 |  0 |   40  | -21846 |
| 23  | -21846 |  0 |   41  |  21845 |
| 23  | -21846 |  0 |   42  |  21845 |
| 23  | -21846 |  0 |   43  |  21845 |
| 23  | -21846 |  0 |   44  |  21845 |
| 23  | -21846 |  0 |   45  |  21845 |
| 23  | -21846 |  0 |   46  |  21845 |
| 23  | -21846 |  0 |   47  |  21845 |
| 23+ |  21845 |  1 |   40  | -21846 |
| 24  |  21845 |  1 |   40  |  21845 |
| 24+ | -21846 |  1 |   41  |  21845 |
| 25  | -21846 |  1 |   41  | -21846 |
| 25+ | -21846 |  0 |   40  |  21845 |
| 26  | -21846 |  0 |   40  |  21845 |
| 26  | -21846 |  0 |   41  | -21846 |
| 26  | -21846 |  0 |   42  |  21845 |
| 26  | -21846 |  0 |   43  |  21845 |
| 26  | -21846 |  0 |   44  |  21845 |
| 26  | -21846 |  0 |   45  |  21845 |
| 26  | -21846 |  0 |   46  |  21845 |
| 26  | -21846 |  0 |   47  |  21845 |
| 26+ |  21845 |  1 |   41  | -21846 |
| 27  |  21845 |  1 |   41  |  21845 |
| 27+ | -21846 |  1 |   42  |  21845 |
| 28  | -21846 |  1 |   42  | -21846 |
| 28+ | -21846 |  0 |   40  |  21845 |
| 29  | -21846 |  0 |   40  |  21845 |
| 29  | -21846 |  0 |   41  |  21845 |
| 29  | -21846 |  0 |   42  | -21846 |
| 29  | -21846 |  0 |   43  |  21845 |
| 29  | -21846 |  0 |   44  |  21845 |
| 29  | -21846 |  0 |   45  |  21845 |
| 29  | -21846 |  0 |   46  |  21845 |
| 29  | -21846 |  0 |   47  |  21845 |
| 29+ |  21845 |  1 |   42  | -21846 |
| 30  |  21845 |  1 |   42  |  21845 |
| 30+ | -21846 |  1 |   43  |  21845 |
| 31  | -21846 |  1 |   43  | -21846 |
| 31+ | -21846 |  0 |   40  |  21845 |
| 32  | -21846 |  0 |   40  |  21845 |
| 32  | -21846 |  0 |   41  |  21845 |
| 32  | -21846 |  0 |   42  |  21845 |
| 32  | -21846 |  0 |   43  | -21846 |
| 32  | -21846 |  0 |   44  |  21845 |
| 32  | -21846 |  0 |   45  |  21845 |
| 32  | -21846 |  0 |   46  |  21845 |
| 32  | -21846 |  0 |   47  |  21845 |
| 32+ |  21845 |  1 |   43  | -21846 |
| 33  |  21845 |  1 |   43  |  21845 |
| 33+ | -21846 |  1 |   44  |  21845 |
| 34  | -21846 |  1 |   44  | -21846 |
| 34+ | -21846 |  0 |   40  |  21845 |
| 35  | -21846 |  0 |   40  |  21845 |
| 35  | -21846 |  0 |   41  |  21845 |
| 35  | -21846 |  0 |   42  |  21845 |
| 35  | -21846 |  0 |   43  |  21845 |
| 35  | -21846 |  0 |   44  | -21846 |
| 35  | -21846 |  0 |   45  |  21845 |
| 35  | -21846 |  0 |   46  |  21845 |
| 35  | -21846 |  0 |   47  |  21845 |
| 35+ |  21845 |  1 |   44  | -21846 |
| 36  |  21845 |  1 |   44  |  21845 |
| 36+ | -21846 |  1 |   45  |  21845 |
| 37  | -21846 |  1 |   45  | -21846 |
| 37+ | -21846 |  0 |   40  |  21845 |
| 38  | -21846 |  0 |   40  |  21845 |
| 38  | -21846 |  0 |   41  |  21845 |
| 38  | -21846 |  0 |   42  |  21845 |
| 38  | -21846 |  0 |   43  |  21845 |
| 38  | -21846 |  0 |   44  |  21845 |
| 38  | -21846 |  0 |   45  | -21846 |
| 38  | -21846 |  0 |   46  |  21845 |
| 38  | -21846 |  0 |   47  |  21845 |
| 38+ |  21845 |  1 |   45  | -21846 |
| 39  |  21845 |  1 |   45  |  21845 |
| 39+ | -21846 |  1 |   46  |  21845 |
| 40  | -21846 |  1 |   46  | -21846 |
| 40+ | -21846 |  0 |   40  |  21845 |
| 41  | -21846 |  0 |   40  |  21845 |
| 41  | -21846 |  0 |   41  |  21845 |
| 41  | -21846 |  0 |   42  |  21845 |
| 41  | -21846 |  0 |   43  |  21845 |
| 41  | -21846 |  0 |   44  |  21845 |
| 41  | -21846 |  0 |   45  |  21845 |
| 41  | -21846 |  0 |   46  | -21846 |
| 41  | -21846 |  0 |   47  |  21845 |
| 41+ |  21845 |  1 |   46  | -21846 |
| 42  |  21845 |  1 |   46  |  21845 |
| 42+ | -21846 |  1 |   47  |  21845 |
| 43  | -21846 |  1 |   47  | -21846 |
| 43+ | -21846 |  0 |   40  |  21845 |
| 44  | -21846 |  0 |   40  |  21845 |
| 44  | -21846 |  0 |   41  |  21845 |
| 44  | -21846 |  0 |   42  |  21845 |
| 44  | -21846 |  0 |   43  |  21845 |
| 44  | -21846 |  0 |   44  |  21845 |
| 44  | -21846 |  0 |   45  |  21845 |
| 44  | -21846 |  0 |   46  |  21845 |
| 44  | -21846 |  0 |   47  | -21846 |
| 44+ |  21845 |  1 |   47  | -21846 |
| 45  |  21845 |  1 |   47  |  21845 |
| 45+ |  21845 |  0 |   40  |  21845 |
| 46  |  21845 |  0 |   40  |  21845 |
| 46  |  21845 |  0 |   41  |  21845 |
| 46  |  21845 |  0 |   42  |  21845 |
| 46  |  21845 |  0 |   43  |  21845 |
| 46  |  21845 |  0 |   44  |  21845 |
| 46  |  21845 |  0 |   45  |  21845 |
| 46  |  21845 |  0 |   46  |  21845 |
| 46  |  21845 |  0 |   47  |  21845 |
| 46+ |  21845 |  0 |    5  |      0 |
| 47  |  21845 |  0 |    5  |      0 |
| 47  |  21845 |  0 |   13  |   1313 |
| 47  |  21845 |  0 |   21  |      0 |
| 47  |  21845 |  0 |   29  |      0 |
| 47  |  21845 |  0 |   37  |      0 |
| 47  |  21845 |  0 |   45  |  21845 |
| 47  |  21845 |  0 |   53  |      0 |
| 47  |  21845 |  0 |   61  |      0 |
| 47+ |  21845 |  1 |    5  |      0 |
| 48  |  21845 |  1 |    5  |  21845 |
| 48+ |  21845 |  1 |   13  |   1313 |
| 49  |  21845 |  1 |   13  |  21845 |
| 49+ |  21845 |  1 |   21  |      0 |
| 50  |  21845 |  1 |   21  |  21845 |
| 50+ |  21845 |  1 |   29  |      0 |
| 51  |  21845 |  1 |   29  |  21845 |
| 51+ |  21845 |  1 |   37  |      0 |
| 52  |  21845 |  1 |   37  |  21845 |
| 52+ |  21845 |  1 |   45  |  21845 |
| 53  |  21845 |  1 |   45  |  21845 |
| 53+ |  21845 |  1 |   53  |      0 |
| 54  |  21845 |  1 |   53  |  21845 |
| 54+ |  21845 |  1 |   61  |      0 |
| 55  |  21845 |  1 |   61  |  21845 |
| 55+ |  21845 |  0 |    5  |  21845 |
| 56  |  21845 |  0 |    5  |  21845 |
| 56  |  21845 |  0 |   13  |  21845 |
| 56  |  21845 |  0 |   21  |  21845 |
| 56  |  21845 |  0 |   29  |  21845 |
| 56  |  21845 |  0 |   37  |  21845 |
| 56  |  21845 |  0 |   45  |  21845 |
| 56  |  21845 |  0 |   53  |  21845 |
| 56  |  21845 |  0 |   61  |  21845 |
| 56+ | -21846 |  1 |    5  |  21845 |
| 57  | -21846 |  1 |    5  | -21846 |
| 57+ | -21846 |  0 |    5  | -21846 |
| 58  | -21846 |  0 |    5  | -21846 |
| 58  | -21846 |  0 |   13  |  21845 |
| 58  | -21846 |  0 |   21  |  21845 |
| 58  | -21846 |  0 |   29  |  21845 |
| 58  | -21846 |  0 |   37  |  21845 |
| 58  | -21846 |  0 |   45  |  21845 |
| 58  | -21846 |  0 |   53  |  21845 |
| 58  | -21846 |  0 |   61  |  21845 |
| 58+ |  21845 |  1 |    5  | -21846 |
| 59  |  21845 |  1 |    5  |  21845 |
| 59+ | -21846 |  1 |   13  |  21845 |
| 60  | -21846 |  1 |   13  | -21846 |
| 60+ | -21846 |  0 |    5  |  21845 |
| 61  | -21846 |  0 |    5  |  21845 |
| 61  | -21846 |  0 |   13  | -21846 |
| 61  | -21846 |  0 |   21  |  21845 |
| 61  | -21846 |  0 |   29  |  21845 |
| 61  | -21846 |  0 |   37  |  21845 |
| 61  | -21846 |  0 |   45  |  21845 |
| 61  | -21846 |  0 |   53  |  21845 |
| 61  | -21846 |  0 |   61  |  21845 |
| 61+ |  21845 |  1 |   13  | -21846 |
| 62  |  21845 |  1 |   13  |  21845 |
| 62+ | -21846 |  1 |   21  |  21845 |
| 63  | -21846 |  1 |   21  | -21846 |
| 63+ | -21846 |  0 |    5  |  21845 |
| 64  | -21846 |  0 |    5  |  21845 |
| 64  | -21846 |  0 |   13  |  21845 |
| 64  | -21846 |  0 |   21  | -21846 |
| 64  | -21846 |  0 |   29  |  21845 |
| 64  | -21846 |  0 |   37  |  21845 |
| 64  | -21846 |  0 |   45  |  21845 |
| 64  | -21846 |  0 |   53  |  21845 |
| 64  | -21846 |  0 |   61  |  21845 |
| 64+ |  21845 |  1 |   21  | -21846 |
| 65  |  21845 |  1 |   21  |  21845 |
| 65+ | -21846 |  1 |   29  |  21845 |
| 66  | -21846 |  1 |   29  | -21846 |
| 66+ | -21846 |  0 |    5  |  21845 |
| 67  | -21846 |  0 |    5  |  21845 |
| 67  | -21846 |  0 |   13  |  21845 |
| 67  | -21846 |  0 |   21  |  21845 |
| 67  | -21846 |  0 |   29  | -21846 |
| 67  | -21846 |  0 |   37  |  21845 |
| 67  | -21846 |  0 |   45  |  21845 |
| 67  | -21846 |  0 |   53  |  21845 |
| 67  | -21846 |  0 |   61  |  21845 |
| 67+ |  21845 |  1 |   29  | -21846 |
| 68  |  21845 |  1 |   29  |  21845 |
| 68+ | -21846 |  1 |   37  |  21845 |
| 69  | -21846 |  1 |   37  | -21846 |
| 69+ | -21846 |  0 |    5  |  21845 |
| 70  | -21846 |  0 |    5  |  21845 |
| 70  | -21846 |  0 |   13  |  21845 |
| 70  | -21846 |  0 |   21  |  21845 |
| 70  | -21846 |  0 |   29  |  21845 |
| 70  | -21846 |  0 |   37  | -21846 |
| 70  | -21846 |  0 |   45  |  21845 |
| 70  | -21846 |  0 |   53  |  21845 |
| 70  | -21846 |  0 |   61  |  21845 |
| 70+ |  21845 |  1 |   37  | -21846 |
| 71  |  21845 |  1 |   37  |  21845 |
| 71+ | -21846 |  1 |   45  |  21845 |
| 72  | -21846 |  1 |   45  | -21846 |
| 72+ | -21846 |  0 |    5  |  21845 |
| 73  | -21846 |  0 |    5  |  21845 |
| 73  | -21846 |  0 |   13  |  21845 |
| 73  | -21846 |  0 |   21  |  21845 |
| 73  | -21846 |  0 |   29  |  21845 |
| 73  | -21846 |  0 |   37  |  21845 |
| 73  | -21846 |  0 |   45  | -21846 |
| 73  | -21846 |  0 |   53  |  21845 |
| 73  | -21846 |  0 |   61  |  21845 |
| 73+ |  21845 |  1 |   45  | -21846 |
| 74  |  21845 |  1 |   45  |  21845 |
| 74+ | -21846 |  1 |   53  |  21845 |
| 75  | -21846 |  1 |   53  | -21846 |
| 75+ | -21846 |  0 |    5  |  21845 |
| 76  | -21846 |  0 |    5  |  21845 |
| 76  | -21846 |  0 |   13  |  21845 |
| 76  | -21846 |  0 |   21  |  21845 |
| 76  | -21846 |  0 |   29  |  21845 |
| 76  | -21846 |  0 |   37  |  21845 |
| 76  | -21846 |  0 |   45  |  21845 |
| 76  | -21846 |  0 |   53  | -21846 |
| 76  | -21846 |  0 |   61  |  21845 |
| 76+ |  21845 |  1 |   53  | -21846 |
| 77  |  21845 |  1 |   53  |  21845 |
| 77+ | -21846 |  1 |   61  |  21845 |
| 78  | -21846 |  1 |   61  | -21846 |
| 78+ | -21846 |  0 |    5  |  21845 |
| 79  | -21846 |  0 |    5  |  21845 |
| 79  | -21846 |  0 |   13  |  21845 |
| 79  | -21846 |  0 |   21  |  21845 |
| 79  | -21846 |  0 |   29  |  21845 |
| 79  | -21846 |  0 |   37  |  21845 |
| 79  | -21846 |  0 |   45  |  21845 |
| 79  | -21846 |  0 |   53  |  21845 |
| 79  | -21846 |  0 |   61  | -21846 |
| 79+ |  21845 |  1 |   61  | -21846 |
| 80  |  21845 |  1 |   61  |  21845 |
| 80+ |  21845 |  0 |    5  |  21845 |
| 81  |  21845 |  0 |    5  |  21845 |
| 81  |  21845 |  0 |   13  |  21845 |
| 81  |  21845 |  0 |   21  |  21845 |
| 81  |  21845 |  0 |   29  |  21845 |
| 81  |  21845 |  0 |   37  |  21845 |
| 81  |  21845 |  0 |   45  |  21845 |
| 81  |  21845 |  0 |   53  |  21845 |
| 81  |  21845 |  0 |   61  |  21845 |`,sn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/b/RAM512.hdl
/**
 * Memory of 512 16-bit registers.
 * If load is asserted, the value of the register selected by
 * address is set to in; Otherwise, the value does not change.
 * The value of the selected register is emitted by out.
 */
CHIP RAM512 {
    IN in[16], load, address[9];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,rn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/b/RAM512.tst

load RAM512.hdl,
compare-to RAM512.cmp,
output-list time%S1.3.1 in%D1.6.1 load%B2.1.1 address%D2.3.2 out%D1.6.1;

set in 0,
set load 0,
set address 0,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set in 13099,
set load 0,
tick,
output;
tock,
output;

set load 1,
set address 130,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;

set in 4729,
set address 472,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 130,
eval,
output;

set in 5119,
tick,
output;
tock,
output;

set load 1,
set address 511,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 472,
eval,
output;

set address 511,
eval,
output;


set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
tick,
output,
tock,
output;
set address %B010101010,
tick,
output,
tock,
output;
set address %B010101011,
tick,
output,
tock,
output;
set address %B010101100,
tick,
output,
tock,
output;
set address %B010101101,
tick,
output,
tock,
output;
set address %B010101110,
tick,
output,
tock,
output;
set address %B010101111,
tick,
output,
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101000,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101000,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101001,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101001,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101011,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101011,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101100,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101100,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101110,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101110,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101111,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;

set load 1,
set address %B010101111,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B010101000,
tick,
output;
tock,
output;
set address %B010101001,
eval,
output;
set address %B010101010,
eval,
output;
set address %B010101011,
eval,
output;
set address %B010101100,
eval,
output;
set address %B010101101,
eval,
output;
set address %B010101110,
eval,
output;
set address %B010101111,
eval,
output;


set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
tick,
output,
tock,
output;
set address %B010101010,
tick,
output,
tock,
output;
set address %B011101010,
tick,
output,
tock,
output;
set address %B100101010,
tick,
output,
tock,
output;
set address %B101101010,
tick,
output,
tock,
output;
set address %B110101010,
tick,
output,
tock,
output;
set address %B111101010,
tick,
output,
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B000101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B000101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B001101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B001101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B010101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B011101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B011101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B100101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B100101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B101101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B110101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B110101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B111101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;

set load 1,
set address %B111101010,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B000101010,
tick,
output;
tock,
output;
set address %B001101010,
eval,
output;
set address %B010101010,
eval,
output;
set address %B011101010,
eval,
output;
set address %B100101010,
eval,
output;
set address %B101101010,
eval,
output;
set address %B110101010,
eval,
output;
set address %B111101010,
eval,
output;
`,on=`|time |   in   |load|address|  out   |
| 0+  |      0 |  0 |    0  |      0 |
| 1   |      0 |  0 |    0  |      0 |
| 1+  |      0 |  1 |    0  |      0 |
| 2   |      0 |  1 |    0  |      0 |
| 2+  |  13099 |  0 |    0  |      0 |
| 3   |  13099 |  0 |    0  |      0 |
| 3+  |  13099 |  1 |  130  |      0 |
| 4   |  13099 |  1 |  130  |  13099 |
| 4+  |  13099 |  0 |    0  |      0 |
| 5   |  13099 |  0 |    0  |      0 |
| 5+  |   4729 |  0 |  472  |      0 |
| 6   |   4729 |  0 |  472  |      0 |
| 6+  |   4729 |  1 |  472  |      0 |
| 7   |   4729 |  1 |  472  |   4729 |
| 7+  |   4729 |  0 |  472  |   4729 |
| 8   |   4729 |  0 |  472  |   4729 |
| 8   |   4729 |  0 |  130  |  13099 |
| 8+  |   5119 |  0 |  130  |  13099 |
| 9   |   5119 |  0 |  130  |  13099 |
| 9+  |   5119 |  1 |  511  |      0 |
| 10  |   5119 |  1 |  511  |   5119 |
| 10+ |   5119 |  0 |  511  |   5119 |
| 11  |   5119 |  0 |  511  |   5119 |
| 11  |   5119 |  0 |  472  |   4729 |
| 11  |   5119 |  0 |  511  |   5119 |
| 11+ |   5119 |  0 |  168  |      0 |
| 12  |   5119 |  0 |  168  |      0 |
| 12  |   5119 |  0 |  169  |      0 |
| 12  |   5119 |  0 |  170  |      0 |
| 12  |   5119 |  0 |  171  |      0 |
| 12  |   5119 |  0 |  172  |      0 |
| 12  |   5119 |  0 |  173  |      0 |
| 12  |   5119 |  0 |  174  |      0 |
| 12  |   5119 |  0 |  175  |      0 |
| 12+ |  21845 |  1 |  168  |      0 |
| 13  |  21845 |  1 |  168  |  21845 |
| 13+ |  21845 |  1 |  169  |      0 |
| 14  |  21845 |  1 |  169  |  21845 |
| 14+ |  21845 |  1 |  170  |      0 |
| 15  |  21845 |  1 |  170  |  21845 |
| 15+ |  21845 |  1 |  171  |      0 |
| 16  |  21845 |  1 |  171  |  21845 |
| 16+ |  21845 |  1 |  172  |      0 |
| 17  |  21845 |  1 |  172  |  21845 |
| 17+ |  21845 |  1 |  173  |      0 |
| 18  |  21845 |  1 |  173  |  21845 |
| 18+ |  21845 |  1 |  174  |      0 |
| 19  |  21845 |  1 |  174  |  21845 |
| 19+ |  21845 |  1 |  175  |      0 |
| 20  |  21845 |  1 |  175  |  21845 |
| 20+ |  21845 |  0 |  168  |  21845 |
| 21  |  21845 |  0 |  168  |  21845 |
| 21  |  21845 |  0 |  169  |  21845 |
| 21  |  21845 |  0 |  170  |  21845 |
| 21  |  21845 |  0 |  171  |  21845 |
| 21  |  21845 |  0 |  172  |  21845 |
| 21  |  21845 |  0 |  173  |  21845 |
| 21  |  21845 |  0 |  174  |  21845 |
| 21  |  21845 |  0 |  175  |  21845 |
| 21+ | -21846 |  1 |  168  |  21845 |
| 22  | -21846 |  1 |  168  | -21846 |
| 22+ | -21846 |  0 |  168  | -21846 |
| 23  | -21846 |  0 |  168  | -21846 |
| 23  | -21846 |  0 |  169  |  21845 |
| 23  | -21846 |  0 |  170  |  21845 |
| 23  | -21846 |  0 |  171  |  21845 |
| 23  | -21846 |  0 |  172  |  21845 |
| 23  | -21846 |  0 |  173  |  21845 |
| 23  | -21846 |  0 |  174  |  21845 |
| 23  | -21846 |  0 |  175  |  21845 |
| 23+ |  21845 |  1 |  168  | -21846 |
| 24  |  21845 |  1 |  168  |  21845 |
| 24+ | -21846 |  1 |  169  |  21845 |
| 25  | -21846 |  1 |  169  | -21846 |
| 25+ | -21846 |  0 |  168  |  21845 |
| 26  | -21846 |  0 |  168  |  21845 |
| 26  | -21846 |  0 |  169  | -21846 |
| 26  | -21846 |  0 |  170  |  21845 |
| 26  | -21846 |  0 |  171  |  21845 |
| 26  | -21846 |  0 |  172  |  21845 |
| 26  | -21846 |  0 |  173  |  21845 |
| 26  | -21846 |  0 |  174  |  21845 |
| 26  | -21846 |  0 |  175  |  21845 |
| 26+ |  21845 |  1 |  169  | -21846 |
| 27  |  21845 |  1 |  169  |  21845 |
| 27+ | -21846 |  1 |  170  |  21845 |
| 28  | -21846 |  1 |  170  | -21846 |
| 28+ | -21846 |  0 |  168  |  21845 |
| 29  | -21846 |  0 |  168  |  21845 |
| 29  | -21846 |  0 |  169  |  21845 |
| 29  | -21846 |  0 |  170  | -21846 |
| 29  | -21846 |  0 |  171  |  21845 |
| 29  | -21846 |  0 |  172  |  21845 |
| 29  | -21846 |  0 |  173  |  21845 |
| 29  | -21846 |  0 |  174  |  21845 |
| 29  | -21846 |  0 |  175  |  21845 |
| 29+ |  21845 |  1 |  170  | -21846 |
| 30  |  21845 |  1 |  170  |  21845 |
| 30+ | -21846 |  1 |  171  |  21845 |
| 31  | -21846 |  1 |  171  | -21846 |
| 31+ | -21846 |  0 |  168  |  21845 |
| 32  | -21846 |  0 |  168  |  21845 |
| 32  | -21846 |  0 |  169  |  21845 |
| 32  | -21846 |  0 |  170  |  21845 |
| 32  | -21846 |  0 |  171  | -21846 |
| 32  | -21846 |  0 |  172  |  21845 |
| 32  | -21846 |  0 |  173  |  21845 |
| 32  | -21846 |  0 |  174  |  21845 |
| 32  | -21846 |  0 |  175  |  21845 |
| 32+ |  21845 |  1 |  171  | -21846 |
| 33  |  21845 |  1 |  171  |  21845 |
| 33+ | -21846 |  1 |  172  |  21845 |
| 34  | -21846 |  1 |  172  | -21846 |
| 34+ | -21846 |  0 |  168  |  21845 |
| 35  | -21846 |  0 |  168  |  21845 |
| 35  | -21846 |  0 |  169  |  21845 |
| 35  | -21846 |  0 |  170  |  21845 |
| 35  | -21846 |  0 |  171  |  21845 |
| 35  | -21846 |  0 |  172  | -21846 |
| 35  | -21846 |  0 |  173  |  21845 |
| 35  | -21846 |  0 |  174  |  21845 |
| 35  | -21846 |  0 |  175  |  21845 |
| 35+ |  21845 |  1 |  172  | -21846 |
| 36  |  21845 |  1 |  172  |  21845 |
| 36+ | -21846 |  1 |  173  |  21845 |
| 37  | -21846 |  1 |  173  | -21846 |
| 37+ | -21846 |  0 |  168  |  21845 |
| 38  | -21846 |  0 |  168  |  21845 |
| 38  | -21846 |  0 |  169  |  21845 |
| 38  | -21846 |  0 |  170  |  21845 |
| 38  | -21846 |  0 |  171  |  21845 |
| 38  | -21846 |  0 |  172  |  21845 |
| 38  | -21846 |  0 |  173  | -21846 |
| 38  | -21846 |  0 |  174  |  21845 |
| 38  | -21846 |  0 |  175  |  21845 |
| 38+ |  21845 |  1 |  173  | -21846 |
| 39  |  21845 |  1 |  173  |  21845 |
| 39+ | -21846 |  1 |  174  |  21845 |
| 40  | -21846 |  1 |  174  | -21846 |
| 40+ | -21846 |  0 |  168  |  21845 |
| 41  | -21846 |  0 |  168  |  21845 |
| 41  | -21846 |  0 |  169  |  21845 |
| 41  | -21846 |  0 |  170  |  21845 |
| 41  | -21846 |  0 |  171  |  21845 |
| 41  | -21846 |  0 |  172  |  21845 |
| 41  | -21846 |  0 |  173  |  21845 |
| 41  | -21846 |  0 |  174  | -21846 |
| 41  | -21846 |  0 |  175  |  21845 |
| 41+ |  21845 |  1 |  174  | -21846 |
| 42  |  21845 |  1 |  174  |  21845 |
| 42+ | -21846 |  1 |  175  |  21845 |
| 43  | -21846 |  1 |  175  | -21846 |
| 43+ | -21846 |  0 |  168  |  21845 |
| 44  | -21846 |  0 |  168  |  21845 |
| 44  | -21846 |  0 |  169  |  21845 |
| 44  | -21846 |  0 |  170  |  21845 |
| 44  | -21846 |  0 |  171  |  21845 |
| 44  | -21846 |  0 |  172  |  21845 |
| 44  | -21846 |  0 |  173  |  21845 |
| 44  | -21846 |  0 |  174  |  21845 |
| 44  | -21846 |  0 |  175  | -21846 |
| 44+ |  21845 |  1 |  175  | -21846 |
| 45  |  21845 |  1 |  175  |  21845 |
| 45+ |  21845 |  0 |  168  |  21845 |
| 46  |  21845 |  0 |  168  |  21845 |
| 46  |  21845 |  0 |  169  |  21845 |
| 46  |  21845 |  0 |  170  |  21845 |
| 46  |  21845 |  0 |  171  |  21845 |
| 46  |  21845 |  0 |  172  |  21845 |
| 46  |  21845 |  0 |  173  |  21845 |
| 46  |  21845 |  0 |  174  |  21845 |
| 46  |  21845 |  0 |  175  |  21845 |
| 46+ |  21845 |  0 |   42  |      0 |
| 47  |  21845 |  0 |   42  |      0 |
| 47  |  21845 |  0 |  106  |      0 |
| 47  |  21845 |  0 |  170  |  21845 |
| 47  |  21845 |  0 |  234  |      0 |
| 47  |  21845 |  0 |  298  |      0 |
| 47  |  21845 |  0 |  362  |      0 |
| 47  |  21845 |  0 |  426  |      0 |
| 47  |  21845 |  0 |  490  |      0 |
| 47+ |  21845 |  1 |   42  |      0 |
| 48  |  21845 |  1 |   42  |  21845 |
| 48+ |  21845 |  1 |  106  |      0 |
| 49  |  21845 |  1 |  106  |  21845 |
| 49+ |  21845 |  1 |  170  |  21845 |
| 50  |  21845 |  1 |  170  |  21845 |
| 50+ |  21845 |  1 |  234  |      0 |
| 51  |  21845 |  1 |  234  |  21845 |
| 51+ |  21845 |  1 |  298  |      0 |
| 52  |  21845 |  1 |  298  |  21845 |
| 52+ |  21845 |  1 |  362  |      0 |
| 53  |  21845 |  1 |  362  |  21845 |
| 53+ |  21845 |  1 |  426  |      0 |
| 54  |  21845 |  1 |  426  |  21845 |
| 54+ |  21845 |  1 |  490  |      0 |
| 55  |  21845 |  1 |  490  |  21845 |
| 55+ |  21845 |  0 |   42  |  21845 |
| 56  |  21845 |  0 |   42  |  21845 |
| 56  |  21845 |  0 |  106  |  21845 |
| 56  |  21845 |  0 |  170  |  21845 |
| 56  |  21845 |  0 |  234  |  21845 |
| 56  |  21845 |  0 |  298  |  21845 |
| 56  |  21845 |  0 |  362  |  21845 |
| 56  |  21845 |  0 |  426  |  21845 |
| 56  |  21845 |  0 |  490  |  21845 |
| 56+ | -21846 |  1 |   42  |  21845 |
| 57  | -21846 |  1 |   42  | -21846 |
| 57+ | -21846 |  0 |   42  | -21846 |
| 58  | -21846 |  0 |   42  | -21846 |
| 58  | -21846 |  0 |  106  |  21845 |
| 58  | -21846 |  0 |  170  |  21845 |
| 58  | -21846 |  0 |  234  |  21845 |
| 58  | -21846 |  0 |  298  |  21845 |
| 58  | -21846 |  0 |  362  |  21845 |
| 58  | -21846 |  0 |  426  |  21845 |
| 58  | -21846 |  0 |  490  |  21845 |
| 58+ |  21845 |  1 |   42  | -21846 |
| 59  |  21845 |  1 |   42  |  21845 |
| 59+ | -21846 |  1 |  106  |  21845 |
| 60  | -21846 |  1 |  106  | -21846 |
| 60+ | -21846 |  0 |   42  |  21845 |
| 61  | -21846 |  0 |   42  |  21845 |
| 61  | -21846 |  0 |  106  | -21846 |
| 61  | -21846 |  0 |  170  |  21845 |
| 61  | -21846 |  0 |  234  |  21845 |
| 61  | -21846 |  0 |  298  |  21845 |
| 61  | -21846 |  0 |  362  |  21845 |
| 61  | -21846 |  0 |  426  |  21845 |
| 61  | -21846 |  0 |  490  |  21845 |
| 61+ |  21845 |  1 |  106  | -21846 |
| 62  |  21845 |  1 |  106  |  21845 |
| 62+ | -21846 |  1 |  170  |  21845 |
| 63  | -21846 |  1 |  170  | -21846 |
| 63+ | -21846 |  0 |   42  |  21845 |
| 64  | -21846 |  0 |   42  |  21845 |
| 64  | -21846 |  0 |  106  |  21845 |
| 64  | -21846 |  0 |  170  | -21846 |
| 64  | -21846 |  0 |  234  |  21845 |
| 64  | -21846 |  0 |  298  |  21845 |
| 64  | -21846 |  0 |  362  |  21845 |
| 64  | -21846 |  0 |  426  |  21845 |
| 64  | -21846 |  0 |  490  |  21845 |
| 64+ |  21845 |  1 |  170  | -21846 |
| 65  |  21845 |  1 |  170  |  21845 |
| 65+ | -21846 |  1 |  234  |  21845 |
| 66  | -21846 |  1 |  234  | -21846 |
| 66+ | -21846 |  0 |   42  |  21845 |
| 67  | -21846 |  0 |   42  |  21845 |
| 67  | -21846 |  0 |  106  |  21845 |
| 67  | -21846 |  0 |  170  |  21845 |
| 67  | -21846 |  0 |  234  | -21846 |
| 67  | -21846 |  0 |  298  |  21845 |
| 67  | -21846 |  0 |  362  |  21845 |
| 67  | -21846 |  0 |  426  |  21845 |
| 67  | -21846 |  0 |  490  |  21845 |
| 67+ |  21845 |  1 |  234  | -21846 |
| 68  |  21845 |  1 |  234  |  21845 |
| 68+ | -21846 |  1 |  298  |  21845 |
| 69  | -21846 |  1 |  298  | -21846 |
| 69+ | -21846 |  0 |   42  |  21845 |
| 70  | -21846 |  0 |   42  |  21845 |
| 70  | -21846 |  0 |  106  |  21845 |
| 70  | -21846 |  0 |  170  |  21845 |
| 70  | -21846 |  0 |  234  |  21845 |
| 70  | -21846 |  0 |  298  | -21846 |
| 70  | -21846 |  0 |  362  |  21845 |
| 70  | -21846 |  0 |  426  |  21845 |
| 70  | -21846 |  0 |  490  |  21845 |
| 70+ |  21845 |  1 |  298  | -21846 |
| 71  |  21845 |  1 |  298  |  21845 |
| 71+ | -21846 |  1 |  362  |  21845 |
| 72  | -21846 |  1 |  362  | -21846 |
| 72+ | -21846 |  0 |   42  |  21845 |
| 73  | -21846 |  0 |   42  |  21845 |
| 73  | -21846 |  0 |  106  |  21845 |
| 73  | -21846 |  0 |  170  |  21845 |
| 73  | -21846 |  0 |  234  |  21845 |
| 73  | -21846 |  0 |  298  |  21845 |
| 73  | -21846 |  0 |  362  | -21846 |
| 73  | -21846 |  0 |  426  |  21845 |
| 73  | -21846 |  0 |  490  |  21845 |
| 73+ |  21845 |  1 |  362  | -21846 |
| 74  |  21845 |  1 |  362  |  21845 |
| 74+ | -21846 |  1 |  426  |  21845 |
| 75  | -21846 |  1 |  426  | -21846 |
| 75+ | -21846 |  0 |   42  |  21845 |
| 76  | -21846 |  0 |   42  |  21845 |
| 76  | -21846 |  0 |  106  |  21845 |
| 76  | -21846 |  0 |  170  |  21845 |
| 76  | -21846 |  0 |  234  |  21845 |
| 76  | -21846 |  0 |  298  |  21845 |
| 76  | -21846 |  0 |  362  |  21845 |
| 76  | -21846 |  0 |  426  | -21846 |
| 76  | -21846 |  0 |  490  |  21845 |
| 76+ |  21845 |  1 |  426  | -21846 |
| 77  |  21845 |  1 |  426  |  21845 |
| 77+ | -21846 |  1 |  490  |  21845 |
| 78  | -21846 |  1 |  490  | -21846 |
| 78+ | -21846 |  0 |   42  |  21845 |
| 79  | -21846 |  0 |   42  |  21845 |
| 79  | -21846 |  0 |  106  |  21845 |
| 79  | -21846 |  0 |  170  |  21845 |
| 79  | -21846 |  0 |  234  |  21845 |
| 79  | -21846 |  0 |  298  |  21845 |
| 79  | -21846 |  0 |  362  |  21845 |
| 79  | -21846 |  0 |  426  |  21845 |
| 79  | -21846 |  0 |  490  | -21846 |
| 79+ |  21845 |  1 |  490  | -21846 |
| 80  |  21845 |  1 |  490  |  21845 |
| 80+ |  21845 |  0 |   42  |  21845 |
| 81  |  21845 |  0 |   42  |  21845 |
| 81  |  21845 |  0 |  106  |  21845 |
| 81  |  21845 |  0 |  170  |  21845 |
| 81  |  21845 |  0 |  234  |  21845 |
| 81  |  21845 |  0 |  298  |  21845 |
| 81  |  21845 |  0 |  362  |  21845 |
| 81  |  21845 |  0 |  426  |  21845 |
| 81  |  21845 |  0 |  490  |  21845 |`,nn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/b/RAM4K.hdl
/**
 * Memory of 4K 16-bit registers.
 * If load is asserted, the value of the register selected by
 * address is set to in; Otherwise, the value does not change.
 * The value of the selected register is emitted by out.
 */
CHIP RAM4K {
    IN in[16], load, address[12];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,an=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/b/RAM4K.tst

load RAM4K.hdl,
compare-to RAM4K.cmp,
output-list time%S1.3.1 in%D1.6.1 load%B2.1.1 address%D2.4.2 out%D1.6.1;

set in 0,
set load 0,
set address 0,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set in 1111,
set load 0,
tick,
output;
tock,
output;

set load 1,
set address 1111,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;

set in 3513,
set address 3513,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 1111,
eval,
output;

set in 4095,
tick,
output;
tock,
output;

set load 1,
set address 4095,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 3513,
eval,
output;

set address 4095,
eval,
output;


set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
tick,
output,
tock,
output;
set address %B101010101010,
tick,
output,
tock,
output;
set address %B101010101011,
tick,
output,
tock,
output;
set address %B101010101100,
tick,
output,
tock,
output;
set address %B101010101101,
tick,
output,
tock,
output;
set address %B101010101110,
tick,
output,
tock,
output;
set address %B101010101111,
tick,
output,
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101000,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101000,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101001,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101001,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101011,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101011,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101100,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101100,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101110,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101110,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101010101111,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;

set load 1,
set address %B101010101111,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B101010101000,
tick,
output;
tock,
output;
set address %B101010101001,
eval,
output;
set address %B101010101010,
eval,
output;
set address %B101010101011,
eval,
output;
set address %B101010101100,
eval,
output;
set address %B101010101101,
eval,
output;
set address %B101010101110,
eval,
output;
set address %B101010101111,
eval,
output;


set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
tick,
output,
tock,
output;
set address %B010101010101,
tick,
output,
tock,
output;
set address %B011101010101,
tick,
output,
tock,
output;
set address %B100101010101,
tick,
output,
tock,
output;
set address %B101101010101,
tick,
output,
tock,
output;
set address %B110101010101,
tick,
output,
tock,
output;
set address %B111101010101,
tick,
output,
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B000101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B000101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B001101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B001101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B010101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B010101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B011101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B011101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B100101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B100101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B101101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B101101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B110101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B110101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B111101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;

set load 1,
set address %B111101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B000101010101,
tick,
output;
tock,
output;
set address %B001101010101,
eval,
output;
set address %B010101010101,
eval,
output;
set address %B011101010101,
eval,
output;
set address %B100101010101,
eval,
output;
set address %B101101010101,
eval,
output;
set address %B110101010101,
eval,
output;
set address %B111101010101,
eval,
output;`,un=`|time |   in   |load|address |  out   |
| 0+  |      0 |  0 |     0  |      0 |
| 1   |      0 |  0 |     0  |      0 |
| 1+  |      0 |  1 |     0  |      0 |
| 2   |      0 |  1 |     0  |      0 |
| 2+  |   1111 |  0 |     0  |      0 |
| 3   |   1111 |  0 |     0  |      0 |
| 3+  |   1111 |  1 |  1111  |      0 |
| 4   |   1111 |  1 |  1111  |   1111 |
| 4+  |   1111 |  0 |     0  |      0 |
| 5   |   1111 |  0 |     0  |      0 |
| 5+  |   3513 |  0 |  3513  |      0 |
| 6   |   3513 |  0 |  3513  |      0 |
| 6+  |   3513 |  1 |  3513  |      0 |
| 7   |   3513 |  1 |  3513  |   3513 |
| 7+  |   3513 |  0 |  3513  |   3513 |
| 8   |   3513 |  0 |  3513  |   3513 |
| 8   |   3513 |  0 |  1111  |   1111 |
| 8+  |   4095 |  0 |  1111  |   1111 |
| 9   |   4095 |  0 |  1111  |   1111 |
| 9+  |   4095 |  1 |  4095  |      0 |
| 10  |   4095 |  1 |  4095  |   4095 |
| 10+ |   4095 |  0 |  4095  |   4095 |
| 11  |   4095 |  0 |  4095  |   4095 |
| 11  |   4095 |  0 |  3513  |   3513 |
| 11  |   4095 |  0 |  4095  |   4095 |
| 11+ |   4095 |  0 |  2728  |      0 |
| 12  |   4095 |  0 |  2728  |      0 |
| 12  |   4095 |  0 |  2729  |      0 |
| 12  |   4095 |  0 |  2730  |      0 |
| 12  |   4095 |  0 |  2731  |      0 |
| 12  |   4095 |  0 |  2732  |      0 |
| 12  |   4095 |  0 |  2733  |      0 |
| 12  |   4095 |  0 |  2734  |      0 |
| 12  |   4095 |  0 |  2735  |      0 |
| 12+ |  21845 |  1 |  2728  |      0 |
| 13  |  21845 |  1 |  2728  |  21845 |
| 13+ |  21845 |  1 |  2729  |      0 |
| 14  |  21845 |  1 |  2729  |  21845 |
| 14+ |  21845 |  1 |  2730  |      0 |
| 15  |  21845 |  1 |  2730  |  21845 |
| 15+ |  21845 |  1 |  2731  |      0 |
| 16  |  21845 |  1 |  2731  |  21845 |
| 16+ |  21845 |  1 |  2732  |      0 |
| 17  |  21845 |  1 |  2732  |  21845 |
| 17+ |  21845 |  1 |  2733  |      0 |
| 18  |  21845 |  1 |  2733  |  21845 |
| 18+ |  21845 |  1 |  2734  |      0 |
| 19  |  21845 |  1 |  2734  |  21845 |
| 19+ |  21845 |  1 |  2735  |      0 |
| 20  |  21845 |  1 |  2735  |  21845 |
| 20+ |  21845 |  0 |  2728  |  21845 |
| 21  |  21845 |  0 |  2728  |  21845 |
| 21  |  21845 |  0 |  2729  |  21845 |
| 21  |  21845 |  0 |  2730  |  21845 |
| 21  |  21845 |  0 |  2731  |  21845 |
| 21  |  21845 |  0 |  2732  |  21845 |
| 21  |  21845 |  0 |  2733  |  21845 |
| 21  |  21845 |  0 |  2734  |  21845 |
| 21  |  21845 |  0 |  2735  |  21845 |
| 21+ | -21846 |  1 |  2728  |  21845 |
| 22  | -21846 |  1 |  2728  | -21846 |
| 22+ | -21846 |  0 |  2728  | -21846 |
| 23  | -21846 |  0 |  2728  | -21846 |
| 23  | -21846 |  0 |  2729  |  21845 |
| 23  | -21846 |  0 |  2730  |  21845 |
| 23  | -21846 |  0 |  2731  |  21845 |
| 23  | -21846 |  0 |  2732  |  21845 |
| 23  | -21846 |  0 |  2733  |  21845 |
| 23  | -21846 |  0 |  2734  |  21845 |
| 23  | -21846 |  0 |  2735  |  21845 |
| 23+ |  21845 |  1 |  2728  | -21846 |
| 24  |  21845 |  1 |  2728  |  21845 |
| 24+ | -21846 |  1 |  2729  |  21845 |
| 25  | -21846 |  1 |  2729  | -21846 |
| 25+ | -21846 |  0 |  2728  |  21845 |
| 26  | -21846 |  0 |  2728  |  21845 |
| 26  | -21846 |  0 |  2729  | -21846 |
| 26  | -21846 |  0 |  2730  |  21845 |
| 26  | -21846 |  0 |  2731  |  21845 |
| 26  | -21846 |  0 |  2732  |  21845 |
| 26  | -21846 |  0 |  2733  |  21845 |
| 26  | -21846 |  0 |  2734  |  21845 |
| 26  | -21846 |  0 |  2735  |  21845 |
| 26+ |  21845 |  1 |  2729  | -21846 |
| 27  |  21845 |  1 |  2729  |  21845 |
| 27+ | -21846 |  1 |  2730  |  21845 |
| 28  | -21846 |  1 |  2730  | -21846 |
| 28+ | -21846 |  0 |  2728  |  21845 |
| 29  | -21846 |  0 |  2728  |  21845 |
| 29  | -21846 |  0 |  2729  |  21845 |
| 29  | -21846 |  0 |  2730  | -21846 |
| 29  | -21846 |  0 |  2731  |  21845 |
| 29  | -21846 |  0 |  2732  |  21845 |
| 29  | -21846 |  0 |  2733  |  21845 |
| 29  | -21846 |  0 |  2734  |  21845 |
| 29  | -21846 |  0 |  2735  |  21845 |
| 29+ |  21845 |  1 |  2730  | -21846 |
| 30  |  21845 |  1 |  2730  |  21845 |
| 30+ | -21846 |  1 |  2731  |  21845 |
| 31  | -21846 |  1 |  2731  | -21846 |
| 31+ | -21846 |  0 |  2728  |  21845 |
| 32  | -21846 |  0 |  2728  |  21845 |
| 32  | -21846 |  0 |  2729  |  21845 |
| 32  | -21846 |  0 |  2730  |  21845 |
| 32  | -21846 |  0 |  2731  | -21846 |
| 32  | -21846 |  0 |  2732  |  21845 |
| 32  | -21846 |  0 |  2733  |  21845 |
| 32  | -21846 |  0 |  2734  |  21845 |
| 32  | -21846 |  0 |  2735  |  21845 |
| 32+ |  21845 |  1 |  2731  | -21846 |
| 33  |  21845 |  1 |  2731  |  21845 |
| 33+ | -21846 |  1 |  2732  |  21845 |
| 34  | -21846 |  1 |  2732  | -21846 |
| 34+ | -21846 |  0 |  2728  |  21845 |
| 35  | -21846 |  0 |  2728  |  21845 |
| 35  | -21846 |  0 |  2729  |  21845 |
| 35  | -21846 |  0 |  2730  |  21845 |
| 35  | -21846 |  0 |  2731  |  21845 |
| 35  | -21846 |  0 |  2732  | -21846 |
| 35  | -21846 |  0 |  2733  |  21845 |
| 35  | -21846 |  0 |  2734  |  21845 |
| 35  | -21846 |  0 |  2735  |  21845 |
| 35+ |  21845 |  1 |  2732  | -21846 |
| 36  |  21845 |  1 |  2732  |  21845 |
| 36+ | -21846 |  1 |  2733  |  21845 |
| 37  | -21846 |  1 |  2733  | -21846 |
| 37+ | -21846 |  0 |  2728  |  21845 |
| 38  | -21846 |  0 |  2728  |  21845 |
| 38  | -21846 |  0 |  2729  |  21845 |
| 38  | -21846 |  0 |  2730  |  21845 |
| 38  | -21846 |  0 |  2731  |  21845 |
| 38  | -21846 |  0 |  2732  |  21845 |
| 38  | -21846 |  0 |  2733  | -21846 |
| 38  | -21846 |  0 |  2734  |  21845 |
| 38  | -21846 |  0 |  2735  |  21845 |
| 38+ |  21845 |  1 |  2733  | -21846 |
| 39  |  21845 |  1 |  2733  |  21845 |
| 39+ | -21846 |  1 |  2734  |  21845 |
| 40  | -21846 |  1 |  2734  | -21846 |
| 40+ | -21846 |  0 |  2728  |  21845 |
| 41  | -21846 |  0 |  2728  |  21845 |
| 41  | -21846 |  0 |  2729  |  21845 |
| 41  | -21846 |  0 |  2730  |  21845 |
| 41  | -21846 |  0 |  2731  |  21845 |
| 41  | -21846 |  0 |  2732  |  21845 |
| 41  | -21846 |  0 |  2733  |  21845 |
| 41  | -21846 |  0 |  2734  | -21846 |
| 41  | -21846 |  0 |  2735  |  21845 |
| 41+ |  21845 |  1 |  2734  | -21846 |
| 42  |  21845 |  1 |  2734  |  21845 |
| 42+ | -21846 |  1 |  2735  |  21845 |
| 43  | -21846 |  1 |  2735  | -21846 |
| 43+ | -21846 |  0 |  2728  |  21845 |
| 44  | -21846 |  0 |  2728  |  21845 |
| 44  | -21846 |  0 |  2729  |  21845 |
| 44  | -21846 |  0 |  2730  |  21845 |
| 44  | -21846 |  0 |  2731  |  21845 |
| 44  | -21846 |  0 |  2732  |  21845 |
| 44  | -21846 |  0 |  2733  |  21845 |
| 44  | -21846 |  0 |  2734  |  21845 |
| 44  | -21846 |  0 |  2735  | -21846 |
| 44+ |  21845 |  1 |  2735  | -21846 |
| 45  |  21845 |  1 |  2735  |  21845 |
| 45+ |  21845 |  0 |  2728  |  21845 |
| 46  |  21845 |  0 |  2728  |  21845 |
| 46  |  21845 |  0 |  2729  |  21845 |
| 46  |  21845 |  0 |  2730  |  21845 |
| 46  |  21845 |  0 |  2731  |  21845 |
| 46  |  21845 |  0 |  2732  |  21845 |
| 46  |  21845 |  0 |  2733  |  21845 |
| 46  |  21845 |  0 |  2734  |  21845 |
| 46  |  21845 |  0 |  2735  |  21845 |
| 46+ |  21845 |  0 |   341  |      0 |
| 47  |  21845 |  0 |   341  |      0 |
| 47  |  21845 |  0 |   853  |      0 |
| 47  |  21845 |  0 |  1365  |      0 |
| 47  |  21845 |  0 |  1877  |      0 |
| 47  |  21845 |  0 |  2389  |      0 |
| 47  |  21845 |  0 |  2901  |      0 |
| 47  |  21845 |  0 |  3413  |      0 |
| 47  |  21845 |  0 |  3925  |      0 |
| 47+ |  21845 |  1 |   341  |      0 |
| 48  |  21845 |  1 |   341  |  21845 |
| 48+ |  21845 |  1 |   853  |      0 |
| 49  |  21845 |  1 |   853  |  21845 |
| 49+ |  21845 |  1 |  1365  |      0 |
| 50  |  21845 |  1 |  1365  |  21845 |
| 50+ |  21845 |  1 |  1877  |      0 |
| 51  |  21845 |  1 |  1877  |  21845 |
| 51+ |  21845 |  1 |  2389  |      0 |
| 52  |  21845 |  1 |  2389  |  21845 |
| 52+ |  21845 |  1 |  2901  |      0 |
| 53  |  21845 |  1 |  2901  |  21845 |
| 53+ |  21845 |  1 |  3413  |      0 |
| 54  |  21845 |  1 |  3413  |  21845 |
| 54+ |  21845 |  1 |  3925  |      0 |
| 55  |  21845 |  1 |  3925  |  21845 |
| 55+ |  21845 |  0 |   341  |  21845 |
| 56  |  21845 |  0 |   341  |  21845 |
| 56  |  21845 |  0 |   853  |  21845 |
| 56  |  21845 |  0 |  1365  |  21845 |
| 56  |  21845 |  0 |  1877  |  21845 |
| 56  |  21845 |  0 |  2389  |  21845 |
| 56  |  21845 |  0 |  2901  |  21845 |
| 56  |  21845 |  0 |  3413  |  21845 |
| 56  |  21845 |  0 |  3925  |  21845 |
| 56+ | -21846 |  1 |   341  |  21845 |
| 57  | -21846 |  1 |   341  | -21846 |
| 57+ | -21846 |  0 |   341  | -21846 |
| 58  | -21846 |  0 |   341  | -21846 |
| 58  | -21846 |  0 |   853  |  21845 |
| 58  | -21846 |  0 |  1365  |  21845 |
| 58  | -21846 |  0 |  1877  |  21845 |
| 58  | -21846 |  0 |  2389  |  21845 |
| 58  | -21846 |  0 |  2901  |  21845 |
| 58  | -21846 |  0 |  3413  |  21845 |
| 58  | -21846 |  0 |  3925  |  21845 |
| 58+ |  21845 |  1 |   341  | -21846 |
| 59  |  21845 |  1 |   341  |  21845 |
| 59+ | -21846 |  1 |   853  |  21845 |
| 60  | -21846 |  1 |   853  | -21846 |
| 60+ | -21846 |  0 |   341  |  21845 |
| 61  | -21846 |  0 |   341  |  21845 |
| 61  | -21846 |  0 |   853  | -21846 |
| 61  | -21846 |  0 |  1365  |  21845 |
| 61  | -21846 |  0 |  1877  |  21845 |
| 61  | -21846 |  0 |  2389  |  21845 |
| 61  | -21846 |  0 |  2901  |  21845 |
| 61  | -21846 |  0 |  3413  |  21845 |
| 61  | -21846 |  0 |  3925  |  21845 |
| 61+ |  21845 |  1 |   853  | -21846 |
| 62  |  21845 |  1 |   853  |  21845 |
| 62+ | -21846 |  1 |  1365  |  21845 |
| 63  | -21846 |  1 |  1365  | -21846 |
| 63+ | -21846 |  0 |   341  |  21845 |
| 64  | -21846 |  0 |   341  |  21845 |
| 64  | -21846 |  0 |   853  |  21845 |
| 64  | -21846 |  0 |  1365  | -21846 |
| 64  | -21846 |  0 |  1877  |  21845 |
| 64  | -21846 |  0 |  2389  |  21845 |
| 64  | -21846 |  0 |  2901  |  21845 |
| 64  | -21846 |  0 |  3413  |  21845 |
| 64  | -21846 |  0 |  3925  |  21845 |
| 64+ |  21845 |  1 |  1365  | -21846 |
| 65  |  21845 |  1 |  1365  |  21845 |
| 65+ | -21846 |  1 |  1877  |  21845 |
| 66  | -21846 |  1 |  1877  | -21846 |
| 66+ | -21846 |  0 |   341  |  21845 |
| 67  | -21846 |  0 |   341  |  21845 |
| 67  | -21846 |  0 |   853  |  21845 |
| 67  | -21846 |  0 |  1365  |  21845 |
| 67  | -21846 |  0 |  1877  | -21846 |
| 67  | -21846 |  0 |  2389  |  21845 |
| 67  | -21846 |  0 |  2901  |  21845 |
| 67  | -21846 |  0 |  3413  |  21845 |
| 67  | -21846 |  0 |  3925  |  21845 |
| 67+ |  21845 |  1 |  1877  | -21846 |
| 68  |  21845 |  1 |  1877  |  21845 |
| 68+ | -21846 |  1 |  2389  |  21845 |
| 69  | -21846 |  1 |  2389  | -21846 |
| 69+ | -21846 |  0 |   341  |  21845 |
| 70  | -21846 |  0 |   341  |  21845 |
| 70  | -21846 |  0 |   853  |  21845 |
| 70  | -21846 |  0 |  1365  |  21845 |
| 70  | -21846 |  0 |  1877  |  21845 |
| 70  | -21846 |  0 |  2389  | -21846 |
| 70  | -21846 |  0 |  2901  |  21845 |
| 70  | -21846 |  0 |  3413  |  21845 |
| 70  | -21846 |  0 |  3925  |  21845 |
| 70+ |  21845 |  1 |  2389  | -21846 |
| 71  |  21845 |  1 |  2389  |  21845 |
| 71+ | -21846 |  1 |  2901  |  21845 |
| 72  | -21846 |  1 |  2901  | -21846 |
| 72+ | -21846 |  0 |   341  |  21845 |
| 73  | -21846 |  0 |   341  |  21845 |
| 73  | -21846 |  0 |   853  |  21845 |
| 73  | -21846 |  0 |  1365  |  21845 |
| 73  | -21846 |  0 |  1877  |  21845 |
| 73  | -21846 |  0 |  2389  |  21845 |
| 73  | -21846 |  0 |  2901  | -21846 |
| 73  | -21846 |  0 |  3413  |  21845 |
| 73  | -21846 |  0 |  3925  |  21845 |
| 73+ |  21845 |  1 |  2901  | -21846 |
| 74  |  21845 |  1 |  2901  |  21845 |
| 74+ | -21846 |  1 |  3413  |  21845 |
| 75  | -21846 |  1 |  3413  | -21846 |
| 75+ | -21846 |  0 |   341  |  21845 |
| 76  | -21846 |  0 |   341  |  21845 |
| 76  | -21846 |  0 |   853  |  21845 |
| 76  | -21846 |  0 |  1365  |  21845 |
| 76  | -21846 |  0 |  1877  |  21845 |
| 76  | -21846 |  0 |  2389  |  21845 |
| 76  | -21846 |  0 |  2901  |  21845 |
| 76  | -21846 |  0 |  3413  | -21846 |
| 76  | -21846 |  0 |  3925  |  21845 |
| 76+ |  21845 |  1 |  3413  | -21846 |
| 77  |  21845 |  1 |  3413  |  21845 |
| 77+ | -21846 |  1 |  3925  |  21845 |
| 78  | -21846 |  1 |  3925  | -21846 |
| 78+ | -21846 |  0 |   341  |  21845 |
| 79  | -21846 |  0 |   341  |  21845 |
| 79  | -21846 |  0 |   853  |  21845 |
| 79  | -21846 |  0 |  1365  |  21845 |
| 79  | -21846 |  0 |  1877  |  21845 |
| 79  | -21846 |  0 |  2389  |  21845 |
| 79  | -21846 |  0 |  2901  |  21845 |
| 79  | -21846 |  0 |  3413  |  21845 |
| 79  | -21846 |  0 |  3925  | -21846 |
| 79+ |  21845 |  1 |  3925  | -21846 |
| 80  |  21845 |  1 |  3925  |  21845 |
| 80+ |  21845 |  0 |   341  |  21845 |
| 81  |  21845 |  0 |   341  |  21845 |
| 81  |  21845 |  0 |   853  |  21845 |
| 81  |  21845 |  0 |  1365  |  21845 |
| 81  |  21845 |  0 |  1877  |  21845 |
| 81  |  21845 |  0 |  2389  |  21845 |
| 81  |  21845 |  0 |  2901  |  21845 |
| 81  |  21845 |  0 |  3413  |  21845 |
| 81  |  21845 |  0 |  3925  |  21845 |`,cn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/b/RAM16K.hdl
/**
 * Memory of 16K 16-bit registers.
 * If load is asserted, the value of the register selected by
 * address is set to in; Otherwise, the value does not change.
 * The value of the selected register is emitted by out.
 */
CHIP RAM16K {
    IN in[16], load, address[14];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`,ln=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/3/b/RAM16K.tst

load RAM16K.hdl,
compare-to RAM16K.cmp,
output-list time%S1.3.1 in%D1.6.1 load%B2.1.1 address%D2.5.2 out%D1.6.1;

set in 0,
set load 0,
set address 0,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set in 4321,
set load 0,
tick,
output;
tock,
output;

set load 1,
set address 4321,
tick,
output;
tock,
output;

set load 0,
set address 0,
tick,
output;
tock,
output;

set in 12345,
set address 12345,
tick,
output;
tock,
output;

set load 1,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 4321,
eval,
output;

set in 16383,
tick,
output;
tock,
output;

set load 1,
set address 16383,
tick,
output;
tock,
output;

set load 0,
tick,
output;
tock,
output;

set address 12345,
eval,
output;

set address 16383,
eval,
output;


set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
tick,
output,
tock,
output;
set address %B10101010101010,
tick,
output,
tock,
output;
set address %B10101010101011,
tick,
output,
tock,
output;
set address %B10101010101100,
tick,
output,
tock,
output;
set address %B10101010101101,
tick,
output,
tock,
output;
set address %B10101010101110,
tick,
output,
tock,
output;
set address %B10101010101111,
tick,
output,
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101000,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101000,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101001,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101001,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101010,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101010,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101011,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101011,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101100,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101100,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101110,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101110,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10101010101111,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;

set load 1,
set address %B10101010101111,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B10101010101000,
tick,
output;
tock,
output;
set address %B10101010101001,
eval,
output;
set address %B10101010101010,
eval,
output;
set address %B10101010101011,
eval,
output;
set address %B10101010101100,
eval,
output;
set address %B10101010101101,
eval,
output;
set address %B10101010101110,
eval,
output;
set address %B10101010101111,
eval,
output;


set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set in %B0101010101010101,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
tick,
output,
tock,
output;
set address %B01010101010101,
tick,
output,
tock,
output;
set address %B01110101010101,
tick,
output,
tock,
output;
set address %B10010101010101,
tick,
output,
tock,
output;
set address %B10110101010101,
tick,
output,
tock,
output;
set address %B11010101010101,
tick,
output,
tock,
output;
set address %B11110101010101,
tick,
output,
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B00010101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B00010101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B00110101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B00110101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B01010101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B01010101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B01110101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B01110101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10010101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B10010101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B10110101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B10110101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B11010101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B11010101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;
set address %B11110101010101,
set in %B1010101010101010,
tick,
output;
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;

set load 1,
set address %B11110101010101,
set in %B0101010101010101,
tick,
output,
tock,
output;

set load 0,
set address %B00010101010101,
tick,
output;
tock,
output;
set address %B00110101010101,
eval,
output;
set address %B01010101010101,
eval,
output;
set address %B01110101010101,
eval,
output;
set address %B10010101010101,
eval,
output;
set address %B10110101010101,
eval,
output;
set address %B11010101010101,
eval,
output;
set address %B11110101010101,
eval,
output;`,dn=`|time |   in   |load| address |  out   |
| 0+  |      0 |  0 |      0  |      0 |
| 1   |      0 |  0 |      0  |      0 |
| 1+  |      0 |  1 |      0  |      0 |
| 2   |      0 |  1 |      0  |      0 |
| 2+  |   4321 |  0 |      0  |      0 |
| 3   |   4321 |  0 |      0  |      0 |
| 3+  |   4321 |  1 |   4321  |      0 |
| 4   |   4321 |  1 |   4321  |   4321 |
| 4+  |   4321 |  0 |      0  |      0 |
| 5   |   4321 |  0 |      0  |      0 |
| 5+  |  12345 |  0 |  12345  |      0 |
| 6   |  12345 |  0 |  12345  |      0 |
| 6+  |  12345 |  1 |  12345  |      0 |
| 7   |  12345 |  1 |  12345  |  12345 |
| 7+  |  12345 |  0 |  12345  |  12345 |
| 8   |  12345 |  0 |  12345  |  12345 |
| 8   |  12345 |  0 |   4321  |   4321 |
| 8+  |  16383 |  0 |   4321  |   4321 |
| 9   |  16383 |  0 |   4321  |   4321 |
| 9+  |  16383 |  1 |  16383  |      0 |
| 10  |  16383 |  1 |  16383  |  16383 |
| 10+ |  16383 |  0 |  16383  |  16383 |
| 11  |  16383 |  0 |  16383  |  16383 |
| 11  |  16383 |  0 |  12345  |  12345 |
| 11  |  16383 |  0 |  16383  |  16383 |
| 11+ |  16383 |  0 |  10920  |      0 |
| 12  |  16383 |  0 |  10920  |      0 |
| 12  |  16383 |  0 |  10921  |      0 |
| 12  |  16383 |  0 |  10922  |      0 |
| 12  |  16383 |  0 |  10923  |      0 |
| 12  |  16383 |  0 |  10924  |      0 |
| 12  |  16383 |  0 |  10925  |      0 |
| 12  |  16383 |  0 |  10926  |      0 |
| 12  |  16383 |  0 |  10927  |      0 |
| 12+ |  21845 |  1 |  10920  |      0 |
| 13  |  21845 |  1 |  10920  |  21845 |
| 13+ |  21845 |  1 |  10921  |      0 |
| 14  |  21845 |  1 |  10921  |  21845 |
| 14+ |  21845 |  1 |  10922  |      0 |
| 15  |  21845 |  1 |  10922  |  21845 |
| 15+ |  21845 |  1 |  10923  |      0 |
| 16  |  21845 |  1 |  10923  |  21845 |
| 16+ |  21845 |  1 |  10924  |      0 |
| 17  |  21845 |  1 |  10924  |  21845 |
| 17+ |  21845 |  1 |  10925  |      0 |
| 18  |  21845 |  1 |  10925  |  21845 |
| 18+ |  21845 |  1 |  10926  |      0 |
| 19  |  21845 |  1 |  10926  |  21845 |
| 19+ |  21845 |  1 |  10927  |      0 |
| 20  |  21845 |  1 |  10927  |  21845 |
| 20+ |  21845 |  0 |  10920  |  21845 |
| 21  |  21845 |  0 |  10920  |  21845 |
| 21  |  21845 |  0 |  10921  |  21845 |
| 21  |  21845 |  0 |  10922  |  21845 |
| 21  |  21845 |  0 |  10923  |  21845 |
| 21  |  21845 |  0 |  10924  |  21845 |
| 21  |  21845 |  0 |  10925  |  21845 |
| 21  |  21845 |  0 |  10926  |  21845 |
| 21  |  21845 |  0 |  10927  |  21845 |
| 21+ | -21846 |  1 |  10920  |  21845 |
| 22  | -21846 |  1 |  10920  | -21846 |
| 22+ | -21846 |  0 |  10920  | -21846 |
| 23  | -21846 |  0 |  10920  | -21846 |
| 23  | -21846 |  0 |  10921  |  21845 |
| 23  | -21846 |  0 |  10922  |  21845 |
| 23  | -21846 |  0 |  10923  |  21845 |
| 23  | -21846 |  0 |  10924  |  21845 |
| 23  | -21846 |  0 |  10925  |  21845 |
| 23  | -21846 |  0 |  10926  |  21845 |
| 23  | -21846 |  0 |  10927  |  21845 |
| 23+ |  21845 |  1 |  10920  | -21846 |
| 24  |  21845 |  1 |  10920  |  21845 |
| 24+ | -21846 |  1 |  10921  |  21845 |
| 25  | -21846 |  1 |  10921  | -21846 |
| 25+ | -21846 |  0 |  10920  |  21845 |
| 26  | -21846 |  0 |  10920  |  21845 |
| 26  | -21846 |  0 |  10921  | -21846 |
| 26  | -21846 |  0 |  10922  |  21845 |
| 26  | -21846 |  0 |  10923  |  21845 |
| 26  | -21846 |  0 |  10924  |  21845 |
| 26  | -21846 |  0 |  10925  |  21845 |
| 26  | -21846 |  0 |  10926  |  21845 |
| 26  | -21846 |  0 |  10927  |  21845 |
| 26+ |  21845 |  1 |  10921  | -21846 |
| 27  |  21845 |  1 |  10921  |  21845 |
| 27+ | -21846 |  1 |  10922  |  21845 |
| 28  | -21846 |  1 |  10922  | -21846 |
| 28+ | -21846 |  0 |  10920  |  21845 |
| 29  | -21846 |  0 |  10920  |  21845 |
| 29  | -21846 |  0 |  10921  |  21845 |
| 29  | -21846 |  0 |  10922  | -21846 |
| 29  | -21846 |  0 |  10923  |  21845 |
| 29  | -21846 |  0 |  10924  |  21845 |
| 29  | -21846 |  0 |  10925  |  21845 |
| 29  | -21846 |  0 |  10926  |  21845 |
| 29  | -21846 |  0 |  10927  |  21845 |
| 29+ |  21845 |  1 |  10922  | -21846 |
| 30  |  21845 |  1 |  10922  |  21845 |
| 30+ | -21846 |  1 |  10923  |  21845 |
| 31  | -21846 |  1 |  10923  | -21846 |
| 31+ | -21846 |  0 |  10920  |  21845 |
| 32  | -21846 |  0 |  10920  |  21845 |
| 32  | -21846 |  0 |  10921  |  21845 |
| 32  | -21846 |  0 |  10922  |  21845 |
| 32  | -21846 |  0 |  10923  | -21846 |
| 32  | -21846 |  0 |  10924  |  21845 |
| 32  | -21846 |  0 |  10925  |  21845 |
| 32  | -21846 |  0 |  10926  |  21845 |
| 32  | -21846 |  0 |  10927  |  21845 |
| 32+ |  21845 |  1 |  10923  | -21846 |
| 33  |  21845 |  1 |  10923  |  21845 |
| 33+ | -21846 |  1 |  10924  |  21845 |
| 34  | -21846 |  1 |  10924  | -21846 |
| 34+ | -21846 |  0 |  10920  |  21845 |
| 35  | -21846 |  0 |  10920  |  21845 |
| 35  | -21846 |  0 |  10921  |  21845 |
| 35  | -21846 |  0 |  10922  |  21845 |
| 35  | -21846 |  0 |  10923  |  21845 |
| 35  | -21846 |  0 |  10924  | -21846 |
| 35  | -21846 |  0 |  10925  |  21845 |
| 35  | -21846 |  0 |  10926  |  21845 |
| 35  | -21846 |  0 |  10927  |  21845 |
| 35+ |  21845 |  1 |  10924  | -21846 |
| 36  |  21845 |  1 |  10924  |  21845 |
| 36+ | -21846 |  1 |  10925  |  21845 |
| 37  | -21846 |  1 |  10925  | -21846 |
| 37+ | -21846 |  0 |  10920  |  21845 |
| 38  | -21846 |  0 |  10920  |  21845 |
| 38  | -21846 |  0 |  10921  |  21845 |
| 38  | -21846 |  0 |  10922  |  21845 |
| 38  | -21846 |  0 |  10923  |  21845 |
| 38  | -21846 |  0 |  10924  |  21845 |
| 38  | -21846 |  0 |  10925  | -21846 |
| 38  | -21846 |  0 |  10926  |  21845 |
| 38  | -21846 |  0 |  10927  |  21845 |
| 38+ |  21845 |  1 |  10925  | -21846 |
| 39  |  21845 |  1 |  10925  |  21845 |
| 39+ | -21846 |  1 |  10926  |  21845 |
| 40  | -21846 |  1 |  10926  | -21846 |
| 40+ | -21846 |  0 |  10920  |  21845 |
| 41  | -21846 |  0 |  10920  |  21845 |
| 41  | -21846 |  0 |  10921  |  21845 |
| 41  | -21846 |  0 |  10922  |  21845 |
| 41  | -21846 |  0 |  10923  |  21845 |
| 41  | -21846 |  0 |  10924  |  21845 |
| 41  | -21846 |  0 |  10925  |  21845 |
| 41  | -21846 |  0 |  10926  | -21846 |
| 41  | -21846 |  0 |  10927  |  21845 |
| 41+ |  21845 |  1 |  10926  | -21846 |
| 42  |  21845 |  1 |  10926  |  21845 |
| 42+ | -21846 |  1 |  10927  |  21845 |
| 43  | -21846 |  1 |  10927  | -21846 |
| 43+ | -21846 |  0 |  10920  |  21845 |
| 44  | -21846 |  0 |  10920  |  21845 |
| 44  | -21846 |  0 |  10921  |  21845 |
| 44  | -21846 |  0 |  10922  |  21845 |
| 44  | -21846 |  0 |  10923  |  21845 |
| 44  | -21846 |  0 |  10924  |  21845 |
| 44  | -21846 |  0 |  10925  |  21845 |
| 44  | -21846 |  0 |  10926  |  21845 |
| 44  | -21846 |  0 |  10927  | -21846 |
| 44+ |  21845 |  1 |  10927  | -21846 |
| 45  |  21845 |  1 |  10927  |  21845 |
| 45+ |  21845 |  0 |  10920  |  21845 |
| 46  |  21845 |  0 |  10920  |  21845 |
| 46  |  21845 |  0 |  10921  |  21845 |
| 46  |  21845 |  0 |  10922  |  21845 |
| 46  |  21845 |  0 |  10923  |  21845 |
| 46  |  21845 |  0 |  10924  |  21845 |
| 46  |  21845 |  0 |  10925  |  21845 |
| 46  |  21845 |  0 |  10926  |  21845 |
| 46  |  21845 |  0 |  10927  |  21845 |
| 46+ |  21845 |  0 |   1365  |      0 |
| 47  |  21845 |  0 |   1365  |      0 |
| 47  |  21845 |  0 |   3413  |      0 |
| 47  |  21845 |  0 |   5461  |      0 |
| 47  |  21845 |  0 |   7509  |      0 |
| 47  |  21845 |  0 |   9557  |      0 |
| 47  |  21845 |  0 |  11605  |      0 |
| 47  |  21845 |  0 |  13653  |      0 |
| 47  |  21845 |  0 |  15701  |      0 |
| 47+ |  21845 |  1 |   1365  |      0 |
| 48  |  21845 |  1 |   1365  |  21845 |
| 48+ |  21845 |  1 |   3413  |      0 |
| 49  |  21845 |  1 |   3413  |  21845 |
| 49+ |  21845 |  1 |   5461  |      0 |
| 50  |  21845 |  1 |   5461  |  21845 |
| 50+ |  21845 |  1 |   7509  |      0 |
| 51  |  21845 |  1 |   7509  |  21845 |
| 51+ |  21845 |  1 |   9557  |      0 |
| 52  |  21845 |  1 |   9557  |  21845 |
| 52+ |  21845 |  1 |  11605  |      0 |
| 53  |  21845 |  1 |  11605  |  21845 |
| 53+ |  21845 |  1 |  13653  |      0 |
| 54  |  21845 |  1 |  13653  |  21845 |
| 54+ |  21845 |  1 |  15701  |      0 |
| 55  |  21845 |  1 |  15701  |  21845 |
| 55+ |  21845 |  0 |   1365  |  21845 |
| 56  |  21845 |  0 |   1365  |  21845 |
| 56  |  21845 |  0 |   3413  |  21845 |
| 56  |  21845 |  0 |   5461  |  21845 |
| 56  |  21845 |  0 |   7509  |  21845 |
| 56  |  21845 |  0 |   9557  |  21845 |
| 56  |  21845 |  0 |  11605  |  21845 |
| 56  |  21845 |  0 |  13653  |  21845 |
| 56  |  21845 |  0 |  15701  |  21845 |
| 56+ | -21846 |  1 |   1365  |  21845 |
| 57  | -21846 |  1 |   1365  | -21846 |
| 57+ | -21846 |  0 |   1365  | -21846 |
| 58  | -21846 |  0 |   1365  | -21846 |
| 58  | -21846 |  0 |   3413  |  21845 |
| 58  | -21846 |  0 |   5461  |  21845 |
| 58  | -21846 |  0 |   7509  |  21845 |
| 58  | -21846 |  0 |   9557  |  21845 |
| 58  | -21846 |  0 |  11605  |  21845 |
| 58  | -21846 |  0 |  13653  |  21845 |
| 58  | -21846 |  0 |  15701  |  21845 |
| 58+ |  21845 |  1 |   1365  | -21846 |
| 59  |  21845 |  1 |   1365  |  21845 |
| 59+ | -21846 |  1 |   3413  |  21845 |
| 60  | -21846 |  1 |   3413  | -21846 |
| 60+ | -21846 |  0 |   1365  |  21845 |
| 61  | -21846 |  0 |   1365  |  21845 |
| 61  | -21846 |  0 |   3413  | -21846 |
| 61  | -21846 |  0 |   5461  |  21845 |
| 61  | -21846 |  0 |   7509  |  21845 |
| 61  | -21846 |  0 |   9557  |  21845 |
| 61  | -21846 |  0 |  11605  |  21845 |
| 61  | -21846 |  0 |  13653  |  21845 |
| 61  | -21846 |  0 |  15701  |  21845 |
| 61+ |  21845 |  1 |   3413  | -21846 |
| 62  |  21845 |  1 |   3413  |  21845 |
| 62+ | -21846 |  1 |   5461  |  21845 |
| 63  | -21846 |  1 |   5461  | -21846 |
| 63+ | -21846 |  0 |   1365  |  21845 |
| 64  | -21846 |  0 |   1365  |  21845 |
| 64  | -21846 |  0 |   3413  |  21845 |
| 64  | -21846 |  0 |   5461  | -21846 |
| 64  | -21846 |  0 |   7509  |  21845 |
| 64  | -21846 |  0 |   9557  |  21845 |
| 64  | -21846 |  0 |  11605  |  21845 |
| 64  | -21846 |  0 |  13653  |  21845 |
| 64  | -21846 |  0 |  15701  |  21845 |
| 64+ |  21845 |  1 |   5461  | -21846 |
| 65  |  21845 |  1 |   5461  |  21845 |
| 65+ | -21846 |  1 |   7509  |  21845 |
| 66  | -21846 |  1 |   7509  | -21846 |
| 66+ | -21846 |  0 |   1365  |  21845 |
| 67  | -21846 |  0 |   1365  |  21845 |
| 67  | -21846 |  0 |   3413  |  21845 |
| 67  | -21846 |  0 |   5461  |  21845 |
| 67  | -21846 |  0 |   7509  | -21846 |
| 67  | -21846 |  0 |   9557  |  21845 |
| 67  | -21846 |  0 |  11605  |  21845 |
| 67  | -21846 |  0 |  13653  |  21845 |
| 67  | -21846 |  0 |  15701  |  21845 |
| 67+ |  21845 |  1 |   7509  | -21846 |
| 68  |  21845 |  1 |   7509  |  21845 |
| 68+ | -21846 |  1 |   9557  |  21845 |
| 69  | -21846 |  1 |   9557  | -21846 |
| 69+ | -21846 |  0 |   1365  |  21845 |
| 70  | -21846 |  0 |   1365  |  21845 |
| 70  | -21846 |  0 |   3413  |  21845 |
| 70  | -21846 |  0 |   5461  |  21845 |
| 70  | -21846 |  0 |   7509  |  21845 |
| 70  | -21846 |  0 |   9557  | -21846 |
| 70  | -21846 |  0 |  11605  |  21845 |
| 70  | -21846 |  0 |  13653  |  21845 |
| 70  | -21846 |  0 |  15701  |  21845 |
| 70+ |  21845 |  1 |   9557  | -21846 |
| 71  |  21845 |  1 |   9557  |  21845 |
| 71+ | -21846 |  1 |  11605  |  21845 |
| 72  | -21846 |  1 |  11605  | -21846 |
| 72+ | -21846 |  0 |   1365  |  21845 |
| 73  | -21846 |  0 |   1365  |  21845 |
| 73  | -21846 |  0 |   3413  |  21845 |
| 73  | -21846 |  0 |   5461  |  21845 |
| 73  | -21846 |  0 |   7509  |  21845 |
| 73  | -21846 |  0 |   9557  |  21845 |
| 73  | -21846 |  0 |  11605  | -21846 |
| 73  | -21846 |  0 |  13653  |  21845 |
| 73  | -21846 |  0 |  15701  |  21845 |
| 73+ |  21845 |  1 |  11605  | -21846 |
| 74  |  21845 |  1 |  11605  |  21845 |
| 74+ | -21846 |  1 |  13653  |  21845 |
| 75  | -21846 |  1 |  13653  | -21846 |
| 75+ | -21846 |  0 |   1365  |  21845 |
| 76  | -21846 |  0 |   1365  |  21845 |
| 76  | -21846 |  0 |   3413  |  21845 |
| 76  | -21846 |  0 |   5461  |  21845 |
| 76  | -21846 |  0 |   7509  |  21845 |
| 76  | -21846 |  0 |   9557  |  21845 |
| 76  | -21846 |  0 |  11605  |  21845 |
| 76  | -21846 |  0 |  13653  | -21846 |
| 76  | -21846 |  0 |  15701  |  21845 |
| 76+ |  21845 |  1 |  13653  | -21846 |
| 77  |  21845 |  1 |  13653  |  21845 |
| 77+ | -21846 |  1 |  15701  |  21845 |
| 78  | -21846 |  1 |  15701  | -21846 |
| 78+ | -21846 |  0 |   1365  |  21845 |
| 79  | -21846 |  0 |   1365  |  21845 |
| 79  | -21846 |  0 |   3413  |  21845 |
| 79  | -21846 |  0 |   5461  |  21845 |
| 79  | -21846 |  0 |   7509  |  21845 |
| 79  | -21846 |  0 |   9557  |  21845 |
| 79  | -21846 |  0 |  11605  |  21845 |
| 79  | -21846 |  0 |  13653  |  21845 |
| 79  | -21846 |  0 |  15701  | -21846 |
| 79+ |  21845 |  1 |  15701  | -21846 |
| 80  |  21845 |  1 |  15701  |  21845 |
| 80+ |  21845 |  0 |   1365  |  21845 |
| 81  |  21845 |  0 |   1365  |  21845 |
| 81  |  21845 |  0 |   3413  |  21845 |
| 81  |  21845 |  0 |   5461  |  21845 |
| 81  |  21845 |  0 |   7509  |  21845 |
| 81  |  21845 |  0 |   9557  |  21845 |
| 81  |  21845 |  0 |  11605  |  21845 |
| 81  |  21845 |  0 |  13653  |  21845 |
| 81  |  21845 |  0 |  15701  |  21845 |`,pn={"Bit.hdl":$o,"Bit.tst":Uo,"Bit.cmp":Vo,"Register.hdl":Wo,"Register.tst":Ho,"Register.cmp":Go,"PC.hdl":Ko,"PC.tst":qo,"PC.cmp":Zo,"RAM8.hdl":Jo,"RAM8.tst":Xo,"RAM8.cmp":Yo,"RAM64.hdl":Qo,"RAM64.tst":tn,"RAM64.cmp":en,"RAM512.hdl":sn,"RAM512.tst":rn,"RAM512.cmp":on,"RAM4K.hdl":nn,"RAM4K.tst":an,"RAM4K.cmp":un,"RAM16K.hdl":cn,"RAM16K.tst":ln,"RAM16K.cmp":dn},hn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)
// The algorithm is based on repetitive addition.

//// Replace this comment with your code.`,fn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/mult/Mult.tst

// Tests the Mult program, designed to compute R2 = R0 * R1.
// Tests the program by having it multiply several sets of
// R0 and R1 values.

load Mult.asm,
compare-to Mult.cmp,
output-list RAM[0]%D2.6.2 RAM[1]%D2.6.2 RAM[2]%D2.6.2;

set RAM[0] 0,   // Sets R0 and R1 to some input values
set RAM[1] 0,
set RAM[2] -1;  // Ensures that the program initialized R2 to 0
repeat 20 {
  ticktock;
}
set RAM[0] 0,   // Restores R0 and R1 in case the program changed them
set RAM[1] 0,
output;

set PC 0,
set RAM[0] 1,   // Sets R0 and R1 to some input values
set RAM[1] 0,
set RAM[2] -1;  // Ensures that the program initialized R2 to 0
repeat 50 {
  ticktock;
}
set RAM[0] 1,   // Restores R0 and R1 in case the program changed them
set RAM[1] 0,
output;

set PC 0,
set RAM[0] 0,   // Sets R0 and R1 to some input values
set RAM[1] 2,
set RAM[2] -1;  // Ensures that the program initialized R2 to 0
repeat 80 {
  ticktock;
}
set RAM[0] 0,   // Restores R0 and R1 in case the program changed them
set RAM[1] 2,
output;

set PC 0,
set RAM[0] 3,   // Sets R0 and R1 to some input values
set RAM[1] 1,
set RAM[2] -1;  // Ensures that the program initialized R2 to 0
repeat 120 {
  ticktock;
}
set RAM[0] 3,   // Restores R0 and R1 in case the program changed them
set RAM[1] 1,
output;

set PC 0,
set RAM[0] 2,   // Sets R0 and R1 to some input values
set RAM[1] 4,
set RAM[2] -1;  // Ensures that the program initialized R2 to 0
repeat 150 {
  ticktock;
}
set RAM[0] 2,   // Restores R0 and R1 in case the program changed them
set RAM[1] 4,
output;

set PC 0,
set RAM[0] 6,   // Sets R0 and R1 to some input values
set RAM[1] 7,
set RAM[2] -1;  // Ensures that the program initialized R2 to 0
repeat 210 {
  ticktock;
}
set RAM[0] 6,   // Restores R0 and R1 in case the program changed them
set RAM[1] 7,
output;`,mn=`|  RAM[0]  |  RAM[1]  |  RAM[2]  |
|       0  |       0  |       0  |
|       1  |       0  |       0  |
|       0  |       2  |       0  |
|       3  |       1  |       3  |
|       2  |       4  |       8  |
|       6  |       7  |      42  |`,gn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/Fill.asm

// Runs an infinite loop that listens to the keyboard input. 
// When a key is pressed (any key), the program blackens the screen,
// i.e. writes "black" in every pixel. When no key is pressed, 
// the screen should be cleared.

//// Replace this comment with your code.`,vn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/fill/Fill.tst

// Tests the Fill.hack program in the CPU emulator.

load Fill.asm;
echo "Select the highest speed and 'enable keyboard'. Then press any key for some time, and inspect the screen.";

repeat {
  ticktock;
}`,kn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/fill/FillAutomatic

// This script can be used to test the Fill program automatically, 
// rather than interactively. Specifically, the script sets the keyboard
// memory map (RAM[24576]) to 0, 1, and then again to 0. This simulates the 
// acts of leaving the keyboard untouched, pressing some key, and then releasing
// the key. After each one of these simulated events, the script outputs the values
// of some selected registers from the screen memory map (RAM[16384]-RAM[24576]).
// This is done in order to test that these registers are set to 000...0 or 111....1, 
// as mandated by how the Fill program should react to the keyboard events.

load Fill.asm,
compare-to FillAutomatic.cmp,
output-list RAM[16384]%D2.6.2 RAM[17648]%D2.6.2 RAM[18349]%D2.6.2 RAM[19444]%D2.6.2 RAM[20771]%D2.6.2 RAM[21031]%D2.6.2 RAM[22596]%D2.6.2 RAM[23754]%D2.6.2 RAM[24575]%D2.6.2;

set RAM[24576] 0,    // the keyboard is untouched
repeat 1000000 {
  ticktock;
}
output;              // tests that the screen is white

set RAM[24576] 1,    // a keyboard key is pressed
repeat 1000000 {
  ticktock;
}
output;              // tests that the screen is black

set RAM[24576] 0,    // the keyboard is untouched
repeat 1000000 {
  ticktock;
}
output;              // tests that the screen is white`,yn=`|RAM[16384]|RAM[17648]|RAM[18349]|RAM[19444]|RAM[20771]|RAM[21031]|RAM[22596]|RAM[23754]|RAM[24575]|
|       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |
|      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |
|       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |`,bn={Mult:{"Mult.asm":hn,"Mult.tst":fn,"Mult.cmp":mn},Fill:{"Fill.asm":gn,"Fill.tst":vn,"FillAutomatic.tst":kn,"FillAutomatic.cmp":yn}},wn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/Memory.hdl
/**
 * The complete address space of the Hack computer's memory,
 * including RAM and memory-mapped I/O. 
 * The chip facilitates read and write operations, as follows:
 *     Read:  out(t) = Memory[address(t)](t)
 *     Write: if load(t-1) then Memory[address(t-1)](t) = in(t-1)
 * In words: the chip always outputs the value stored at the memory 
 * location specified by address. If load=1, the in value is loaded 
 * into the memory location specified by address. This value becomes 
 * available through the out output from the next time step onward.
 * Address space rules:
 * Only the upper 16K+8K+1 words of the Memory chip are used. 
 * Access to address>0x6000 is invalid and reads 0. Access to any address
 * in the range 0x4000-0x5FFF results in accessing the screen memory 
 * map. Access to address 0x6000 results in accessing the keyboard 
 * memory map. The behavior in these addresses is described in the Screen
 * and Keyboard chip specifications given in the lectures and the book.
 */
CHIP Memory {
    IN in[16], load, address[15];
    OUT out[16];

    PARTS:
	//// Replace this comment with your code.
}`,Bn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/05/Memory.tst

// Tests the Memory chip by inputting values to selected addresses, 
// verifying that these addresses were indeed written to, and verifying  
// that other addresses were not accessed by mistake. In particular, we 
// focus on probing the registers in addresses 'lower RAM', 'upper RAM',
// and 'Screen', which correspond to 0, %X2000, and %X4000 in Hexadecimal 
// (0, 8192 (8K), and 16385 (16K+1) in decimal).

load Memory.hdl,
compare-to Memory.cmp,
output-list in%D1.6.1 load%B2.1.2 address%B1.15.1 out%D1.6.1;

echo "Before you run this script, select the 'Screen' option from the 'View' menu";

// We've noticed a common design mistake in several students' Memory.hdl files.
// This error leads to zeros being written in the offset of inactive memory segments
// instead of the intended location. To identify this issue, the test should check not
// only for incorrect writes into the wrong segment but also for any unexpected changes.
// To prepare for this, we've initialized the memory with a specific number in the areas
// where these erroneous writes might happen.

//// Sets RAM[2000], RAM[4000] = 12345 (for the following overwrite test)
set in 12345, set load 1, set address %X2000, tick, output; tock, output;
set address %X4000, tick, output; tock, output;

set in -1,				// Sets RAM[0] = -1
set load 1,
set address 0,
tick,
output;
tock,
output;

set in 9999,			// RAM[0] holds value
set load 0,
tick,
output;
tock,
output;

set address %X2000,		// Did not also write to upper RAM or Screen
eval,
output;
set address %X4000,
eval,
output;

//// Sets RAM[0], RAM[4000] = 12345 (for following overwrite test)
set in 12345, set load 1, set address %X0000, tick, output; tock, output;
set address %X4000, tick, output; tock, output;

set in 2222,			// Sets RAM[2000] = 2222
set load 1,
set address %X2000,
tick,
output;
tock,
output;

set in 9999,			// RAM[2000] holds value
set load 0,
tick,
output;
tock,
output;

set address 0,			// Did not also write to lower RAM or Screen
eval,
output;
set address %X4000,
eval,
output;

set load 0,				// Low order address bits connected
set address %X0001, eval, output;
set address %X0002, eval, output;
set address %X0004, eval, output;
set address %X0008, eval, output;
set address %X0010, eval, output;
set address %X0020, eval, output;
set address %X0040, eval, output;
set address %X0080, eval, output;
set address %X0100, eval, output;
set address %X0200, eval, output;
set address %X0400, eval, output;
set address %X0800, eval, output;
set address %X1000, eval, output;
set address %X2000, eval, output;

set address %X1234,		// RAM[1234] = 1234
set in 1234,
set load 1,
tick,
output;
tock,
output;

set load 0,
set address %X2234,		// Did not also write to upper RAM or Screen 
eval, output;
set address %X6234,
eval, output;

set address %X2345,		// RAM[2345] = 2345
set in 2345,
set load 1,
tick,
output;
tock,
output;

set load 0,
set address %X0345,		// Did not also write to lower RAM or Screen 
eval, output;
set address %X4345,
eval, output;

//// Clears the overwrite detection value from the screen
set in 0, set load 1, set address %X4000, tick, output; tock, output;

// Keyboard test

set address 24576,
echo "Click the Keyboard icon and hold down the 'K' key (uppercase) until you see the next message...",
// It's important to keep holding the key down since if the system is busy,
// the memory will zero itself before being outputted.

while out <> 75 {
    tick, tock;     // tick, tock prevents hang if sync. parts used in KB path.
}

clear-echo,
output;

// Screen test

//// Sets RAM[0FCF], RAM[2FCF] = 12345 (for following overwrite test)
set in 12345, set load 1, set address %X0FCF, tick, output; tock, output;
set address %X2FCF, tick, output; tock, output;

set load 1,
set in -1,
set address %X4FCF,
tick,
tock,
output,

set address %X504F,
tick,
tock,
output;

set address %X0FCF,		// Did not also write to lower or upper RAM
eval,
output;
set address %X2FCF,
eval,
output;

set load 0,				// Low order address bits connected
set address %X4FCE, eval, output;
set address %X4FCD, eval, output;
set address %X4FCB, eval, output;
set address %X4FC7, eval, output;
set address %X4FDF, eval, output;
set address %X4FEF, eval, output;
set address %X4F8F, eval, output;
set address %X4F4F, eval, output;
set address %X4ECF, eval, output;
set address %X4DCF, eval, output;
set address %X4BCF, eval, output;
set address %X47CF, eval, output;
set address %X5FCF, eval, output;

set load 0,
set address 24576,
echo "Two horizontal lines should be in the middle of the screen. Hold down 'Y' (uppercase) until you see the next message ...",
// It's important to keep holding the key down since if the system is busy,
// the memory will zero itself before being outputted.

while out <> 89 {
    tick, tock;     // tick, tock prevents hang if sync. parts used in KB path.
}

clear-echo,
output;`,_n=`|   in   |load |     address     |  out   |
|  12345 |  1  | 010000000000000 |      0 |
|  12345 |  1  | 010000000000000 |  12345 |
|  12345 |  1  | 100000000000000 |      0 |
|  12345 |  1  | 100000000000000 |  12345 |
|     -1 |  1  | 000000000000000 |      0 |
|     -1 |  1  | 000000000000000 |     -1 |
|   9999 |  0  | 000000000000000 |     -1 |
|   9999 |  0  | 000000000000000 |     -1 |
|   9999 |  0  | 010000000000000 |  12345 |
|   9999 |  0  | 100000000000000 |  12345 |
|  12345 |  1  | 000000000000000 |     -1 |
|  12345 |  1  | 000000000000000 |  12345 |
|  12345 |  1  | 100000000000000 |  12345 |
|  12345 |  1  | 100000000000000 |  12345 |
|   2222 |  1  | 010000000000000 |  12345 |
|   2222 |  1  | 010000000000000 |   2222 |
|   9999 |  0  | 010000000000000 |   2222 |
|   9999 |  0  | 010000000000000 |   2222 |
|   9999 |  0  | 000000000000000 |  12345 |
|   9999 |  0  | 100000000000000 |  12345 |
|   9999 |  0  | 000000000000001 |      0 |
|   9999 |  0  | 000000000000010 |      0 |
|   9999 |  0  | 000000000000100 |      0 |
|   9999 |  0  | 000000000001000 |      0 |
|   9999 |  0  | 000000000010000 |      0 |
|   9999 |  0  | 000000000100000 |      0 |
|   9999 |  0  | 000000001000000 |      0 |
|   9999 |  0  | 000000010000000 |      0 |
|   9999 |  0  | 000000100000000 |      0 |
|   9999 |  0  | 000001000000000 |      0 |
|   9999 |  0  | 000010000000000 |      0 |
|   9999 |  0  | 000100000000000 |      0 |
|   9999 |  0  | 001000000000000 |      0 |
|   9999 |  0  | 010000000000000 |   2222 |
|   1234 |  1  | 001001000110100 |      0 |
|   1234 |  1  | 001001000110100 |   1234 |
|   1234 |  0  | 010001000110100 |      0 |
|   1234 |  0  | 110001000110100 |      0 |
|   2345 |  1  | 010001101000101 |      0 |
|   2345 |  1  | 010001101000101 |   2345 |
|   2345 |  0  | 000001101000101 |      0 |
|   2345 |  0  | 100001101000101 |      0 |
|      0 |  1  | 100000000000000 |  12345 |
|      0 |  1  | 100000000000000 |      0 |
|      0 |  1  | 110000000000000 |     75 |
|  12345 |  1  | 000111111001111 |      0 |
|  12345 |  1  | 000111111001111 |  12345 |
|  12345 |  1  | 010111111001111 |      0 |
|  12345 |  1  | 010111111001111 |  12345 |
|     -1 |  1  | 100111111001111 |     -1 |
|     -1 |  1  | 101000001001111 |     -1 |
|     -1 |  1  | 000111111001111 |  12345 |
|     -1 |  1  | 010111111001111 |  12345 |
|     -1 |  0  | 100111111001110 |      0 |
|     -1 |  0  | 100111111001101 |      0 |
|     -1 |  0  | 100111111001011 |      0 |
|     -1 |  0  | 100111111000111 |      0 |
|     -1 |  0  | 100111111011111 |      0 |
|     -1 |  0  | 100111111101111 |      0 |
|     -1 |  0  | 100111110001111 |      0 |
|     -1 |  0  | 100111101001111 |      0 |
|     -1 |  0  | 100111011001111 |      0 |
|     -1 |  0  | 100110111001111 |      0 |
|     -1 |  0  | 100101111001111 |      0 |
|     -1 |  0  | 100011111001111 |      0 |
|     -1 |  0  | 101111111001111 |      0 |
|     -1 |  0  | 110000000000000 |     89 |`,An=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/CPU.hdl
/**
 * The Hack Central Processing unit (CPU).
 * Parses the binary code in the instruction input and executes it according to the
 * Hack machine language specification. In the case of a C-instruction, computes the
 * function specified by the instruction. If the instruction specifies to read a memory
 * value, the inM input is expected to contain this value. If the instruction specifies
 * to write a value to the memory, sets the outM output to this value, sets the addressM
 * output to the target address, and asserts the writeM output (when writeM = 0, any
 * value may appear in outM).
 * If the reset input is 0, computes the address of the next instruction and sets the
 * pc output to that value. If the reset input is 1, sets pc to 0.
 * Note: The outM and writeM outputs are combinational: they are affected by the
 * instruction's execution during the current cycle. The addressM and pc outputs are
 * clocked: although they are affected by the instruction's execution, they commit to
 * their new values only in the next cycle.
 */
CHIP CPU {

    IN  inM[16],         // M value input  (M = contents of RAM[A])
        instruction[16], // Instruction for execution
        reset;           // Signals whether to re-start the current
                         // program (reset==1) or continue executing
                         // the current program (reset==0).

    OUT outM[16],        // M value output
        writeM,          // Write to M? 
        addressM[15],    // Address in data memory (of M)
        pc[15];          // address of next instruction

    PARTS:
	//// Replace this comment with your code.
}`,Sn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/CPU.tst

load CPU.hdl,
compare-to CPU.cmp,
output-list time%S0.4.0 inM%D0.6.0 instruction%B0.16.0 reset%B2.1.2 outM%D1.6.0 writeM%B3.1.3 addressM%D0.5.0 pc%D0.5.0 DRegister[]%D1.6.1;


set instruction %B0011000000111001, // @12345
tick, output, tock, output;

set instruction %B1110110000010000, // D=A
tick, output, tock, output;

set instruction %B0101101110100000, // @23456
tick, output, tock, output;

set instruction %B1110000111010000, // D=A-D
tick, output, tock, output;

set instruction %B0000001111101000, // @1000
tick, output, tock, output;

set instruction %B1110001100001000, // M=D
tick, output, tock, output;

set instruction %B0000001111101001, // @1001
tick, output, tock, output;

set instruction %B1110001110011000, // MD=D-1
tick, output, tock, output;

set instruction %B0000001111101000, // @1000
tick, output, tock, output;

set instruction %B1111010011010000, // D=D-M
set inM 11111,
tick, output, tock, output;

set instruction %B0000000000001110, // @14
tick, output, tock, output;

set instruction %B1110001100000100, // D;jlt
tick, output, tock, output;

set instruction %B0000001111100111, // @999
tick, output, tock, output;

set instruction %B1110110111100000, // A=A+1
tick, output, tock, output;

set instruction %B1110001100001000, // M=D
tick, output, tock, output;

set instruction %B0000000000010101, // @21
tick, output, tock, output;

set instruction %B1110011111000010, // D+1;jeq
tick, output, tock, output;

set instruction %B0000000000000010, // @2
tick, output, tock, output;

set instruction %B1110000010010000, // D=D+A
tick, output, tock, output;

set instruction %B0000001111101000, // @1000
tick, output, tock, output;

set instruction %B1110111010010000, // D=-1
tick, output, tock, output;

set instruction %B1110001100000001, // D;JGT
tick, output, tock, output;

set instruction %B1110001100000010, // D;JEQ
tick, output, tock, output;

set instruction %B1110001100000011, // D;JGE
tick, output, tock, output;

set instruction %B1110001100000100, // D;JLT
tick, output, tock, output;

set instruction %B1110001100000101, // D;JNE
tick, output, tock, output;

set instruction %B1110001100000110, // D;JLE
tick, output, tock, output;

set instruction %B1110001100000111, // D;JMP
tick, output, tock, output;

set instruction %B1110101010010000, // D=0
tick, output, tock, output;

set instruction %B1110001100000001, // D;JGT
tick, output, tock, output;

set instruction %B1110001100000010, // D;JEQ
tick, output, tock, output;

set instruction %B1110001100000011, // D;JGE
tick, output, tock, output;

set instruction %B1110001100000100, // D;JLT
tick, output, tock, output;

set instruction %B1110001100000101, // D;JNE
tick, output, tock, output;

set instruction %B1110001100000110, // D;JLE
tick, output, tock, output;

set instruction %B1110001100000111, // D;JMP
tick, output, tock, output;

set instruction %B1110111111010000, // D=1
tick, output, tock, output;

set instruction %B1110001100000001, // D;JGT
tick, output, tock, output;

set instruction %B1110001100000010, // D;JEQ
tick, output, tock, output;

set instruction %B1110001100000011, // D;JGE
tick, output, tock, output;

set instruction %B1110001100000100, // D;JLT
tick, output, tock, output;

set instruction %B1110001100000101, // D;JNE
tick, output, tock, output;

set instruction %B1110001100000110, // D;JLE
tick, output, tock, output;

set instruction %B1110001100000111, // D;JMP
tick, output, tock, output;

set reset 1;
tick, output, tock, output;

set instruction %B0111111111111111, // @32767
set reset 0;
tick, output, tock, output;`,xn=`|time| inM  |  instruction   |reset| outM  |writeM |addre| pc  |DRegiste|
|0+  |     0|0011000000111001|  0  |*******|   0   |    0|    0|      0 |
|1   |     0|0011000000111001|  0  |*******|   0   |12345|    1|      0 |
|1+  |     0|1110110000010000|  0  |*******|   0   |12345|    1|  12345 |
|2   |     0|1110110000010000|  0  |*******|   0   |12345|    2|  12345 |
|2+  |     0|0101101110100000|  0  |*******|   0   |12345|    2|  12345 |
|3   |     0|0101101110100000|  0  |*******|   0   |23456|    3|  12345 |
|3+  |     0|1110000111010000|  0  |*******|   0   |23456|    3|  11111 |
|4   |     0|1110000111010000|  0  |*******|   0   |23456|    4|  11111 |
|4+  |     0|0000001111101000|  0  |*******|   0   |23456|    4|  11111 |
|5   |     0|0000001111101000|  0  |*******|   0   | 1000|    5|  11111 |
|5+  |     0|1110001100001000|  0  |  11111|   1   | 1000|    5|  11111 |
|6   |     0|1110001100001000|  0  |  11111|   1   | 1000|    6|  11111 |
|6+  |     0|0000001111101001|  0  |*******|   0   | 1000|    6|  11111 |
|7   |     0|0000001111101001|  0  |*******|   0   | 1001|    7|  11111 |
|7+  |     0|1110001110011000|  0  |  11110|   1   | 1001|    7|  11110 |
|8   |     0|1110001110011000|  0  |  11109|   1   | 1001|    8|  11110 |
|8+  |     0|0000001111101000|  0  |*******|   0   | 1001|    8|  11110 |
|9   |     0|0000001111101000|  0  |*******|   0   | 1000|    9|  11110 |
|9+  | 11111|1111010011010000|  0  |*******|   0   | 1000|    9|     -1 |
|10  | 11111|1111010011010000|  0  |*******|   0   | 1000|   10|     -1 |
|10+ | 11111|0000000000001110|  0  |*******|   0   | 1000|   10|     -1 |
|11  | 11111|0000000000001110|  0  |*******|   0   |   14|   11|     -1 |
|11+ | 11111|1110001100000100|  0  |*******|   0   |   14|   11|     -1 |
|12  | 11111|1110001100000100|  0  |*******|   0   |   14|   14|     -1 |
|12+ | 11111|0000001111100111|  0  |*******|   0   |   14|   14|     -1 |
|13  | 11111|0000001111100111|  0  |*******|   0   |  999|   15|     -1 |
|13+ | 11111|1110110111100000|  0  |*******|   0   |  999|   15|     -1 |
|14  | 11111|1110110111100000|  0  |*******|   0   | 1000|   16|     -1 |
|14+ | 11111|1110001100001000|  0  |     -1|   1   | 1000|   16|     -1 |
|15  | 11111|1110001100001000|  0  |     -1|   1   | 1000|   17|     -1 |
|15+ | 11111|0000000000010101|  0  |*******|   0   | 1000|   17|     -1 |
|16  | 11111|0000000000010101|  0  |*******|   0   |   21|   18|     -1 |
|16+ | 11111|1110011111000010|  0  |*******|   0   |   21|   18|     -1 |
|17  | 11111|1110011111000010|  0  |*******|   0   |   21|   21|     -1 |
|17+ | 11111|0000000000000010|  0  |*******|   0   |   21|   21|     -1 |
|18  | 11111|0000000000000010|  0  |*******|   0   |    2|   22|     -1 |
|18+ | 11111|1110000010010000|  0  |*******|   0   |    2|   22|      1 |
|19  | 11111|1110000010010000|  0  |*******|   0   |    2|   23|      1 |
|19+ | 11111|0000001111101000|  0  |*******|   0   |    2|   23|      1 |
|20  | 11111|0000001111101000|  0  |*******|   0   | 1000|   24|      1 |
|20+ | 11111|1110111010010000|  0  |*******|   0   | 1000|   24|     -1 |
|21  | 11111|1110111010010000|  0  |*******|   0   | 1000|   25|     -1 |
|21+ | 11111|1110001100000001|  0  |*******|   0   | 1000|   25|     -1 |
|22  | 11111|1110001100000001|  0  |*******|   0   | 1000|   26|     -1 |
|22+ | 11111|1110001100000010|  0  |*******|   0   | 1000|   26|     -1 |
|23  | 11111|1110001100000010|  0  |*******|   0   | 1000|   27|     -1 |
|23+ | 11111|1110001100000011|  0  |*******|   0   | 1000|   27|     -1 |
|24  | 11111|1110001100000011|  0  |*******|   0   | 1000|   28|     -1 |
|24+ | 11111|1110001100000100|  0  |*******|   0   | 1000|   28|     -1 |
|25  | 11111|1110001100000100|  0  |*******|   0   | 1000| 1000|     -1 |
|25+ | 11111|1110001100000101|  0  |*******|   0   | 1000| 1000|     -1 |
|26  | 11111|1110001100000101|  0  |*******|   0   | 1000| 1000|     -1 |
|26+ | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|     -1 |
|27  | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|     -1 |
|27+ | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|     -1 |
|28  | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|     -1 |
|28+ | 11111|1110101010010000|  0  |*******|   0   | 1000| 1000|      0 |
|29  | 11111|1110101010010000|  0  |*******|   0   | 1000| 1001|      0 |
|29+ | 11111|1110001100000001|  0  |*******|   0   | 1000| 1001|      0 |
|30  | 11111|1110001100000001|  0  |*******|   0   | 1000| 1002|      0 |
|30+ | 11111|1110001100000010|  0  |*******|   0   | 1000| 1002|      0 |
|31  | 11111|1110001100000010|  0  |*******|   0   | 1000| 1000|      0 |
|31+ | 11111|1110001100000011|  0  |*******|   0   | 1000| 1000|      0 |
|32  | 11111|1110001100000011|  0  |*******|   0   | 1000| 1000|      0 |
|32+ | 11111|1110001100000100|  0  |*******|   0   | 1000| 1000|      0 |
|33  | 11111|1110001100000100|  0  |*******|   0   | 1000| 1001|      0 |
|33+ | 11111|1110001100000101|  0  |*******|   0   | 1000| 1001|      0 |
|34  | 11111|1110001100000101|  0  |*******|   0   | 1000| 1002|      0 |
|34+ | 11111|1110001100000110|  0  |*******|   0   | 1000| 1002|      0 |
|35  | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|      0 |
|35+ | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|      0 |
|36  | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|      0 |
|36+ | 11111|1110111111010000|  0  |*******|   0   | 1000| 1000|      1 |
|37  | 11111|1110111111010000|  0  |*******|   0   | 1000| 1001|      1 |
|37+ | 11111|1110001100000001|  0  |*******|   0   | 1000| 1001|      1 |
|38  | 11111|1110001100000001|  0  |*******|   0   | 1000| 1000|      1 |
|38+ | 11111|1110001100000010|  0  |*******|   0   | 1000| 1000|      1 |
|39  | 11111|1110001100000010|  0  |*******|   0   | 1000| 1001|      1 |
|39+ | 11111|1110001100000011|  0  |*******|   0   | 1000| 1001|      1 |
|40  | 11111|1110001100000011|  0  |*******|   0   | 1000| 1000|      1 |
|40+ | 11111|1110001100000100|  0  |*******|   0   | 1000| 1000|      1 |
|41  | 11111|1110001100000100|  0  |*******|   0   | 1000| 1001|      1 |
|41+ | 11111|1110001100000101|  0  |*******|   0   | 1000| 1001|      1 |
|42  | 11111|1110001100000101|  0  |*******|   0   | 1000| 1000|      1 |
|42+ | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|      1 |
|43  | 11111|1110001100000110|  0  |*******|   0   | 1000| 1001|      1 |
|43+ | 11111|1110001100000111|  0  |*******|   0   | 1000| 1001|      1 |
|44  | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|      1 |
|44+ | 11111|1110001100000111|  1  |*******|   0   | 1000| 1000|      1 |
|45  | 11111|1110001100000111|  1  |*******|   0   | 1000|    0|      1 |
|45+ | 11111|0111111111111111|  0  |*******|   0   | 1000|    0|      1 |
|46  | 11111|0111111111111111|  0  |*******|   0   |32767|    1|      1 |`,In=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/CPU-external.tst

load CPU.hdl,
output-list time%S0.4.0 inM%D0.6.0 instruction%B0.16.0 reset%B2.1.2 outM%D1.6.0 writeM%B3.1.3 addressM%D0.5.0 pc%D0.5.0;


set instruction %B0011000000111001, // @12345
tick, output, tock, output;

set instruction %B1110110000010000, // D=A
tick, output, tock, output;

set instruction %B0101101110100000, // @23456
tick, output, tock, output;

set instruction %B1110000111010000, // D=A-D
tick, output, tock, output;

set instruction %B0000001111101000, // @1000
tick, output, tock, output;

set instruction %B1110001100001000, // M=D
tick, output, tock, output;

set instruction %B0000001111101001, // @1001
tick, output, tock, output;

set instruction %B1110001110011000, // MD=D-1
tick, output, tock, output;

set instruction %B0000001111101000, // @1000
tick, output, tock, output;

set instruction %B1111010011010000, // D=D-M
set inM 11111,
tick, output, tock, output;

set instruction %B0000000000001110, // @14
tick, output, tock, output;

set instruction %B1110001100000100, // D;jlt
tick, output, tock, output;

set instruction %B0000001111100111, // @999
tick, output, tock, output;

set instruction %B1110110111100000, // A=A+1
tick, output, tock, output;

set instruction %B1110001100001000, // M=D
tick, output, tock, output;

set instruction %B0000000000010101, // @21
tick, output, tock, output;

set instruction %B1110011111000010, // D+1;jeq
tick, output, tock, output;

set instruction %B0000000000000010, // @2
tick, output, tock, output;

set instruction %B1110000010010000, // D=D+A
tick, output, tock, output;

set instruction %B0000001111101000, // @1000
tick, output, tock, output;

set instruction %B1110111010010000, // D=-1
tick, output, tock, output;

set instruction %B1110001100000001, // D;JGT
tick, output, tock, output;

set instruction %B1110001100000010, // D;JEQ
tick, output, tock, output;

set instruction %B1110001100000011, // D;JGE
tick, output, tock, output;

set instruction %B1110001100000100, // D;JLT
tick, output, tock, output;

set instruction %B1110001100000101, // D;JNE
tick, output, tock, output;

set instruction %B1110001100000110, // D;JLE
tick, output, tock, output;

set instruction %B1110001100000111, // D;JMP
tick, output, tock, output;

set instruction %B1110101010010000, // D=0
tick, output, tock, output;

set instruction %B1110001100000001, // D;JGT
tick, output, tock, output;

set instruction %B1110001100000010, // D;JEQ
tick, output, tock, output;

set instruction %B1110001100000011, // D;JGE
tick, output, tock, output;

set instruction %B1110001100000100, // D;JLT
tick, output, tock, output;

set instruction %B1110001100000101, // D;JNE
tick, output, tock, output;

set instruction %B1110001100000110, // D;JLE
tick, output, tock, output;

set instruction %B1110001100000111, // D;JMP
tick, output, tock, output;

set instruction %B1110111111010000, // D=1
tick, output, tock, output;

set instruction %B1110001100000001, // D;JGT
tick, output, tock, output;

set instruction %B1110001100000010, // D;JEQ
tick, output, tock, output;

set instruction %B1110001100000011, // D;JGE
tick, output, tock, output;

set instruction %B1110001100000100, // D;JLT
tick, output, tock, output;

set instruction %B1110001100000101, // D;JNE
tick, output, tock, output;

set instruction %B1110001100000110, // D;JLE
tick, output, tock, output;

set instruction %B1110001100000111, // D;JMP
tick, output, tock, output;

set reset 1;
tick, output, tock, output;

set instruction %B0111111111111111, // @32767
set reset 0;
tick, output, tock, output;`,Rn=`|time| inM  |  instruction   |reset| outM  |writeM |addre| pc  |
|0+  |     0|0011000000111001|  0  |*******|   0   |    0|    0|
|1   |     0|0011000000111001|  0  |*******|   0   |12345|    1|
|1+  |     0|1110110000010000|  0  |*******|   0   |12345|    1|
|2   |     0|1110110000010000|  0  |*******|   0   |12345|    2|
|2+  |     0|0101101110100000|  0  |*******|   0   |12345|    2|
|3   |     0|0101101110100000|  0  |*******|   0   |23456|    3|
|3+  |     0|1110000111010000|  0  |*******|   0   |23456|    3|
|4   |     0|1110000111010000|  0  |*******|   0   |23456|    4|
|4+  |     0|0000001111101000|  0  |*******|   0   |23456|    4|
|5   |     0|0000001111101000|  0  |*******|   0   | 1000|    5|
|5+  |     0|1110001100001000|  0  |  11111|   1   | 1000|    5|
|6   |     0|1110001100001000|  0  |  11111|   1   | 1000|    6|
|6+  |     0|0000001111101001|  0  |*******|   0   | 1000|    6|
|7   |     0|0000001111101001|  0  |*******|   0   | 1001|    7|
|7+  |     0|1110001110011000|  0  |  11110|   1   | 1001|    7|
|8   |     0|1110001110011000|  0  |  11109|   1   | 1001|    8|
|8+  |     0|0000001111101000|  0  |*******|   0   | 1001|    8|
|9   |     0|0000001111101000|  0  |*******|   0   | 1000|    9|
|9+  | 11111|1111010011010000|  0  |*******|   0   | 1000|    9|
|10  | 11111|1111010011010000|  0  |*******|   0   | 1000|   10|
|10+ | 11111|0000000000001110|  0  |*******|   0   | 1000|   10|
|11  | 11111|0000000000001110|  0  |*******|   0   |   14|   11|
|11+ | 11111|1110001100000100|  0  |*******|   0   |   14|   11|
|12  | 11111|1110001100000100|  0  |*******|   0   |   14|   14|
|12+ | 11111|0000001111100111|  0  |*******|   0   |   14|   14|
|13  | 11111|0000001111100111|  0  |*******|   0   |  999|   15|
|13+ | 11111|1110110111100000|  0  |*******|   0   |  999|   15|
|14  | 11111|1110110111100000|  0  |*******|   0   | 1000|   16|
|14+ | 11111|1110001100001000|  0  |     -1|   1   | 1000|   16|
|15  | 11111|1110001100001000|  0  |     -1|   1   | 1000|   17|
|15+ | 11111|0000000000010101|  0  |*******|   0   | 1000|   17|
|16  | 11111|0000000000010101|  0  |*******|   0   |   21|   18|
|16+ | 11111|1110011111000010|  0  |*******|   0   |   21|   18|
|17  | 11111|1110011111000010|  0  |*******|   0   |   21|   21|
|17+ | 11111|0000000000000010|  0  |*******|   0   |   21|   21|
|18  | 11111|0000000000000010|  0  |*******|   0   |    2|   22|
|18+ | 11111|1110000010010000|  0  |*******|   0   |    2|   22|
|19  | 11111|1110000010010000|  0  |*******|   0   |    2|   23|
|19+ | 11111|0000001111101000|  0  |*******|   0   |    2|   23|
|20  | 11111|0000001111101000|  0  |*******|   0   | 1000|   24|
|20+ | 11111|1110111010010000|  0  |*******|   0   | 1000|   24|
|21  | 11111|1110111010010000|  0  |*******|   0   | 1000|   25|
|21+ | 11111|1110001100000001|  0  |*******|   0   | 1000|   25|
|22  | 11111|1110001100000001|  0  |*******|   0   | 1000|   26|
|22+ | 11111|1110001100000010|  0  |*******|   0   | 1000|   26|
|23  | 11111|1110001100000010|  0  |*******|   0   | 1000|   27|
|23+ | 11111|1110001100000011|  0  |*******|   0   | 1000|   27|
|24  | 11111|1110001100000011|  0  |*******|   0   | 1000|   28|
|24+ | 11111|1110001100000100|  0  |*******|   0   | 1000|   28|
|25  | 11111|1110001100000100|  0  |*******|   0   | 1000| 1000|
|25+ | 11111|1110001100000101|  0  |*******|   0   | 1000| 1000|
|26  | 11111|1110001100000101|  0  |*******|   0   | 1000| 1000|
|26+ | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|
|27  | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|
|27+ | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|
|28  | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|
|28+ | 11111|1110101010010000|  0  |*******|   0   | 1000| 1000|
|29  | 11111|1110101010010000|  0  |*******|   0   | 1000| 1001|
|29+ | 11111|1110001100000001|  0  |*******|   0   | 1000| 1001|
|30  | 11111|1110001100000001|  0  |*******|   0   | 1000| 1002|
|30+ | 11111|1110001100000010|  0  |*******|   0   | 1000| 1002|
|31  | 11111|1110001100000010|  0  |*******|   0   | 1000| 1000|
|31+ | 11111|1110001100000011|  0  |*******|   0   | 1000| 1000|
|32  | 11111|1110001100000011|  0  |*******|   0   | 1000| 1000|
|32+ | 11111|1110001100000100|  0  |*******|   0   | 1000| 1000|
|33  | 11111|1110001100000100|  0  |*******|   0   | 1000| 1001|
|33+ | 11111|1110001100000101|  0  |*******|   0   | 1000| 1001|
|34  | 11111|1110001100000101|  0  |*******|   0   | 1000| 1002|
|34+ | 11111|1110001100000110|  0  |*******|   0   | 1000| 1002|
|35  | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|
|35+ | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|
|36  | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|
|36+ | 11111|1110111111010000|  0  |*******|   0   | 1000| 1000|
|37  | 11111|1110111111010000|  0  |*******|   0   | 1000| 1001|
|37+ | 11111|1110001100000001|  0  |*******|   0   | 1000| 1001|
|38  | 11111|1110001100000001|  0  |*******|   0   | 1000| 1000|
|38+ | 11111|1110001100000010|  0  |*******|   0   | 1000| 1000|
|39  | 11111|1110001100000010|  0  |*******|   0   | 1000| 1001|
|39+ | 11111|1110001100000011|  0  |*******|   0   | 1000| 1001|
|40  | 11111|1110001100000011|  0  |*******|   0   | 1000| 1000|
|40+ | 11111|1110001100000100|  0  |*******|   0   | 1000| 1000|
|41  | 11111|1110001100000100|  0  |*******|   0   | 1000| 1001|
|41+ | 11111|1110001100000101|  0  |*******|   0   | 1000| 1001|
|42  | 11111|1110001100000101|  0  |*******|   0   | 1000| 1000|
|42+ | 11111|1110001100000110|  0  |*******|   0   | 1000| 1000|
|43  | 11111|1110001100000110|  0  |*******|   0   | 1000| 1001|
|43+ | 11111|1110001100000111|  0  |*******|   0   | 1000| 1001|
|44  | 11111|1110001100000111|  0  |*******|   0   | 1000| 1000|
|44+ | 11111|1110001100000111|  1  |*******|   0   | 1000| 1000|
|45  | 11111|1110001100000111|  1  |*******|   0   | 1000|    0|
|45+ | 11111|0111111111111111|  0  |*******|   0   | 1000|    0|
|46  | 11111|0111111111111111|  0  |*******|   0   |32767|    1|
`,Tn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/Computer.hdl
/**
 * The Hack computer, consisting of CPU, ROM and RAM.
 * When reset = 0, the program stored in the ROM executes.
 * When reset = 1, the program's execution restarts. 
 * Thus, to start running the currently loaded program,
 * set reset to 1, and then set it to 0. 
 * From this point onwards, the user is at the mercy of the software.
 * Depending on the program's code, and whether the code is correct,
 * the screen may show some output, the user may be expected to enter
 * some input using the keyboard, or the program may do some procerssing. 
 */
CHIP Computer {

    IN reset;

    PARTS:
    //// Replace this comment with your code.
}`,Mn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/ComputerAdd.tst

// Tests the Computer chip by having it execute the program Add.hack.
// The program adds up the constants 2 and 3 and writes the result in RAM[0]. 

// Tracks the values of the time, reset bit, A-register, D-register,
// program counter, R0, R1, and R2.

load Computer.hdl,
compare-to ComputerAdd.cmp,
output-list time%S1.3.1 reset%B2.1.2 ARegister[0]%D1.7.1 DRegister[0]%D1.7.1 PC[]%D0.4.0 RAM16K[0]%D1.7.1 RAM16K[1]%D1.7.1 RAM16K[2]%D1.7.1;

// Loads the binary program Add.hack into the computer's instruction memory 
ROM32K load Add.hack,
output;

// First run (at the beginning PC=0)
repeat 6 {
    tick, tock, output;
}

// Resets the PC
set reset 1,
set RAM16K[0] 0,
tick, tock, output;

// Second run, to check that the PC was reset correctly.
set reset 0,

repeat 6 {
    tick, tock, output;
}`,Cn=`|time |reset|ARegister|DRegister|PC[]|RAM16K[0]|RAM16K[1]|RAM16K[2]|
| 0   |  0  |       0 |       0 |   0|       0 |       0 |       0 |
| 1   |  0  |       2 |       0 |   1|       0 |       0 |       0 |
| 2   |  0  |       2 |       2 |   2|       0 |       0 |       0 |
| 3   |  0  |       3 |       2 |   3|       0 |       0 |       0 |
| 4   |  0  |       3 |       5 |   4|       0 |       0 |       0 |
| 5   |  0  |       0 |       5 |   5|       0 |       0 |       0 |
| 6   |  0  |       0 |       5 |   6|       5 |       0 |       0 |
| 7   |  1  |       0 |       5 |   0|       0 |       0 |       0 |
| 8   |  0  |       2 |       5 |   1|       0 |       0 |       0 |
| 9   |  0  |       2 |       2 |   2|       0 |       0 |       0 |
| 10  |  0  |       3 |       2 |   3|       0 |       0 |       0 |
| 11  |  0  |       3 |       5 |   4|       0 |       0 |       0 |
| 12  |  0  |       0 |       5 |   5|       0 |       0 |       0 |
| 13  |  0  |       0 |       5 |   6|       5 |       0 |       0 |`,En=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/ComputerMax.tst

// Tests the Computer chip by having it execute the program Max.hack.
// The program computes maximum(R0, R1) and writes the result in RAM[2].

// Tracks the values of the time, reset bit, A-register, D-register,
// program counter, R0, R1, and R2.
load Computer.hdl,
compare-to ComputerMax.cmp,
output-list time%S1.3.1 reset%B2.1.2 ARegister[]%D1.7.1 DRegister[]%D1.7.1 PC[]%D0.4.0 RAM16K[0]%D1.7.1 RAM16K[1]%D1.7.1 RAM16K[2]%D1.7.1;

// Loads the binary program Add.hack into the computer's instruction memory 
ROM32K load Max.hack,

// first run: computes max(3,5)
set RAM16K[0] 3,
set RAM16K[1] 5,
output;

repeat 14 {
    tick, tock, output;
}

// resets the PC
set reset 1,
tick, tock, output;

// second run: computes max(23456,12345)
set reset 0,
set RAM16K[0] 23456,
set RAM16K[1] 12345,
output;

// The run on these inputs requires less cycles (different branching)
repeat 10 {
    tick, tock, output;
}
`,Pn=`|time |reset|ARegister|DRegister|PC[]|RAM16K[0]|RAM16K[1]|RAM16K[2]|
| 0   |  0  |       0 |       0 |   0|       3 |       5 |       0 |
| 1   |  0  |       0 |       0 |   1|       3 |       5 |       0 |
| 2   |  0  |       0 |       3 |   2|       3 |       5 |       0 |
| 3   |  0  |       1 |       3 |   3|       3 |       5 |       0 |
| 4   |  0  |       1 |      -2 |   4|       3 |       5 |       0 |
| 5   |  0  |      10 |      -2 |   5|       3 |       5 |       0 |
| 6   |  0  |      10 |      -2 |   6|       3 |       5 |       0 |
| 7   |  0  |       1 |      -2 |   7|       3 |       5 |       0 |
| 8   |  0  |       1 |       5 |   8|       3 |       5 |       0 |
| 9   |  0  |      12 |       5 |   9|       3 |       5 |       0 |
| 10  |  0  |      12 |       5 |  12|       3 |       5 |       0 |
| 11  |  0  |       2 |       5 |  13|       3 |       5 |       0 |
| 12  |  0  |       2 |       5 |  14|       3 |       5 |       5 |
| 13  |  0  |      14 |       5 |  15|       3 |       5 |       5 |
| 14  |  0  |      14 |       5 |  14|       3 |       5 |       5 |
| 15  |  1  |      14 |       5 |   0|       3 |       5 |       5 |
| 15  |  0  |      14 |       5 |   0|   23456 |   12345 |       5 |
| 16  |  0  |       0 |       5 |   1|   23456 |   12345 |       5 |
| 17  |  0  |       0 |   23456 |   2|   23456 |   12345 |       5 |
| 18  |  0  |       1 |   23456 |   3|   23456 |   12345 |       5 |
| 19  |  0  |       1 |   11111 |   4|   23456 |   12345 |       5 |
| 20  |  0  |      10 |   11111 |   5|   23456 |   12345 |       5 |
| 21  |  0  |      10 |   11111 |  10|   23456 |   12345 |       5 |
| 22  |  0  |       0 |   11111 |  11|   23456 |   12345 |       5 |
| 23  |  0  |       0 |   23456 |  12|   23456 |   12345 |       5 |
| 24  |  0  |       2 |   23456 |  13|   23456 |   12345 |       5 |
| 25  |  0  |       2 |   23456 |  14|   23456 |   12345 |   23456 |`,On=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/5/ComputerRect.tst

// Tests the Computer chip by having it execute the program Rect.hack.
// The program draws a rectangle of width 16 pixels and length RAM[0]
// at the top left corner of the screen.

// Tracks the values of the time, A-register, D-register, program counter, R0, R1, and R2.
load Computer.hdl,
compare-to ComputerRect.cmp,
output-list time%S1.3.1 ARegister[]%D1.7.1 DRegister[]%D1.7.1 PC[]%D0.4.0 RAM16K[0]%D1.7.1 RAM16K[1]%D1.7.1 RAM16K[2]%D1.7.1;

// Loads the binary program Rect.hack into the computer's instruction memory 
ROM32K load Rect.hack,

echo "Before you run this script, select the 'Screen' option from the 'View' menu";

echo "A small rectangle should be drawn at the top left of the screen (the 'Screen' option of the 'View' menu should be selected.)";

// Draws a rectangle consisting of 4 rows (each 16 pixels wide)
set RAM16K[0] 4,
output;

repeat 63 {
    tick, tock, output;
}`,Dn=`|time |ARegister|DRegister|PC[]|RAM16K[0]|RAM16K[1]|RAM16K[2]|
| 0   |       0 |       0 |   0|       4 |       0 |       0 |
| 1   |       0 |       0 |   1|       4 |       0 |       0 |
| 2   |       0 |       4 |   2|       4 |       0 |       0 |
| 3   |      23 |       4 |   3|       4 |       0 |       0 |
| 4   |      23 |       4 |   4|       4 |       0 |       0 |
| 5   |      16 |       4 |   5|       4 |       0 |       0 |
| 6   |      16 |       4 |   6|       4 |       0 |       0 |
| 7   |   16384 |       4 |   7|       4 |       0 |       0 |
| 8   |   16384 |   16384 |   8|       4 |       0 |       0 |
| 9   |      17 |   16384 |   9|       4 |       0 |       0 |
| 10  |      17 |   16384 |  10|       4 |       0 |       0 |
| 11  |      17 |   16384 |  11|       4 |       0 |       0 |
| 12  |   16384 |   16384 |  12|       4 |       0 |       0 |
| 13  |   16384 |   16384 |  13|       4 |       0 |       0 |
| 14  |      17 |   16384 |  14|       4 |       0 |       0 |
| 15  |      17 |   16384 |  15|       4 |       0 |       0 |
| 16  |      32 |   16384 |  16|       4 |       0 |       0 |
| 17  |      32 |   16416 |  17|       4 |       0 |       0 |
| 18  |      17 |   16416 |  18|       4 |       0 |       0 |
| 19  |      17 |   16416 |  19|       4 |       0 |       0 |
| 20  |      16 |   16416 |  20|       4 |       0 |       0 |
| 21  |      16 |       3 |  21|       4 |       0 |       0 |
| 22  |      10 |       3 |  22|       4 |       0 |       0 |
| 23  |      10 |       3 |  10|       4 |       0 |       0 |
| 24  |      17 |       3 |  11|       4 |       0 |       0 |
| 25  |   16416 |       3 |  12|       4 |       0 |       0 |
| 26  |   16416 |       3 |  13|       4 |       0 |       0 |
| 27  |      17 |       3 |  14|       4 |       0 |       0 |
| 28  |      17 |   16416 |  15|       4 |       0 |       0 |
| 29  |      32 |   16416 |  16|       4 |       0 |       0 |
| 30  |      32 |   16448 |  17|       4 |       0 |       0 |
| 31  |      17 |   16448 |  18|       4 |       0 |       0 |
| 32  |      17 |   16448 |  19|       4 |       0 |       0 |
| 33  |      16 |   16448 |  20|       4 |       0 |       0 |
| 34  |      16 |       2 |  21|       4 |       0 |       0 |
| 35  |      10 |       2 |  22|       4 |       0 |       0 |
| 36  |      10 |       2 |  10|       4 |       0 |       0 |
| 37  |      17 |       2 |  11|       4 |       0 |       0 |
| 38  |   16448 |       2 |  12|       4 |       0 |       0 |
| 39  |   16448 |       2 |  13|       4 |       0 |       0 |
| 40  |      17 |       2 |  14|       4 |       0 |       0 |
| 41  |      17 |   16448 |  15|       4 |       0 |       0 |
| 42  |      32 |   16448 |  16|       4 |       0 |       0 |
| 43  |      32 |   16480 |  17|       4 |       0 |       0 |
| 44  |      17 |   16480 |  18|       4 |       0 |       0 |
| 45  |      17 |   16480 |  19|       4 |       0 |       0 |
| 46  |      16 |   16480 |  20|       4 |       0 |       0 |
| 47  |      16 |       1 |  21|       4 |       0 |       0 |
| 48  |      10 |       1 |  22|       4 |       0 |       0 |
| 49  |      10 |       1 |  10|       4 |       0 |       0 |
| 50  |      17 |       1 |  11|       4 |       0 |       0 |
| 51  |   16480 |       1 |  12|       4 |       0 |       0 |
| 52  |   16480 |       1 |  13|       4 |       0 |       0 |
| 53  |      17 |       1 |  14|       4 |       0 |       0 |
| 54  |      17 |   16480 |  15|       4 |       0 |       0 |
| 55  |      32 |   16480 |  16|       4 |       0 |       0 |
| 56  |      32 |   16512 |  17|       4 |       0 |       0 |
| 57  |      17 |   16512 |  18|       4 |       0 |       0 |
| 58  |      17 |   16512 |  19|       4 |       0 |       0 |
| 59  |      16 |   16512 |  20|       4 |       0 |       0 |
| 60  |      16 |       0 |  21|       4 |       0 |       0 |
| 61  |      10 |       0 |  22|       4 |       0 |       0 |
| 62  |      10 |       0 |  23|       4 |       0 |       0 |
| 63  |      23 |       0 |  24|       4 |       0 |       0 |`,Fn=`
0000000000000010
1110110000010000
0000000000000011
1110000010010000
0000000000000000
1110001100001000
`,Nn=`0000000000000000
1111110000010000
0000000000000001
1111010011010000
0000000000001010
1110001100000001
0000000000000001
1111110000010000
0000000000001100
1110101010000111
0000000000000000
1111110000010000
0000000000000010
1110001100001000
0000000000001110
1110101010000111`,Ln=`
0000000000000000
1111110000010000
0000000000010111
1110001100000110
0000000000010000
1110001100001000
0100000000000000
1110110000010000
0000000000010001
1110001100001000
0000000000010001
1111110000100000
1110111010001000
0000000000010001
1111110000010000
0000000000100000
1110000010010000
0000000000010001
1110001100001000
0000000000010000
1111110010011000
0000000000001010
1110001100000001
0000000000010111
1110101010000111`,zn={"Memory.hdl":wn,"Memory.tst":Bn,"Memory.cmp":_n,"CPU.hdl":An,"CPU.tst":Sn,"CPU.cmp":xn,"CPU-external.tst":In,"CPU-external.cmp":Rn,"Computer.hdl":Tn,"ComputerAdd.tst":Mn,"ComputerAdd.cmp":Cn,"ComputerMax.tst":En,"ComputerMax.cmp":Pn,"ComputerRect.tst":On,"ComputerRect.cmp":Dn,"Add.hack":Fn,"Max.hack":Nn,"Rect.hack":Ln},jn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/SimpleAdd/SimpleAdd.vm

// Pushes and adds two constants.

push constant 7
push constant 8
add
`,$n=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/SimpleAdd/SimpleAddVME.tst

// Tests and illustrates SimpleAdd.vm on the VM simulator.

load SimpleAdd.vm,
compare-to SimpleAdd.cmp,

set RAM[0] 256,  // initializes the stack pointer

repeat 3 {       // SimpleAdd.vm has 3 VM commands
  vmstep;
}

// Outputs the stack pointer and the value at the stack's base
output-list RAM[0]%D2.6.2 RAM[256]%D2.6.2;
output;`,Un=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/SimpleAdd/SimpleAdd.tst

// Tests SimpleAdd.asm on the CPU emulator.

compare-to SimpleAdd.cmp,

set RAM[0] 256,  // initializes the stack pointer 

repeat 60 {      // enough cycles to complete the execution
  ticktock;
}

// Outputs the stack pointer and the value at the stack's base
output-list RAM[0]%D2.6.2 RAM[256]%D2.6.2;
output;
`,Vn=`|  RAM[0]  | RAM[256] |
|     257  |      15  |
`,Wn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/StackTest/StackTest.vm

// Executes a sequence of arithmetic and logical operations on the stack. 

push constant 17
push constant 17
eq
push constant 17
push constant 16
eq
push constant 16
push constant 17
eq
push constant 892
push constant 891
lt
push constant 891
push constant 892
lt
push constant 891
push constant 891
lt
push constant 32767
push constant 32766
gt
push constant 32766
push constant 32767
gt
push constant 32766
push constant 32766
gt
push constant 57
push constant 31
push constant 53
add
push constant 112
sub
neg
and
push constant 82
or
not
`,Hn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/StackTest/StackTestVME.tst

// Tests and illustrates StackTest.vm on the VM simulator.

load StackTest.vm,
compare-to StackTest.cmp,

set RAM[0] 256,  // initializes the stack pointer

repeat 38 {      // StackTest.vm has 38 VM commands
  vmstep;
}

// Outputs the stack pointer (RAM[0]) and the stack contents: RAM[256]-RAM[265]
output-list RAM[0]%D2.6.2 
        RAM[256]%D2.6.2 RAM[257]%D2.6.2 RAM[258]%D2.6.2 RAM[259]%D2.6.2 RAM[260]%D2.6.2;
output;
output-list RAM[261]%D2.6.2 RAM[262]%D2.6.2 RAM[263]%D2.6.2 RAM[264]%D2.6.2 RAM[265]%D2.6.2;
output;
`,Gn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/StackTest/StackTest.tst

// Tests StackTest.asm on the CPU emulator.

compare-to StackTest.cmp,

set RAM[0] 256,  // initializes the stack pointer

repeat 1000 {    // enough cycles to complete the execution
  ticktock;
}

// Outputs the stack pointer and the stack contents: RAM[256]-RAM[265]
output-list RAM[0]%D2.6.2 
        RAM[256]%D2.6.2 RAM[257]%D2.6.2 RAM[258]%D2.6.2 RAM[259]%D2.6.2 RAM[260]%D2.6.2;
output;
output-list RAM[261]%D2.6.2 RAM[262]%D2.6.2 RAM[263]%D2.6.2 RAM[264]%D2.6.2 RAM[265]%D2.6.2;
output;
`,Kn=`|  RAM[0]  | RAM[256] | RAM[257] | RAM[258] | RAM[259] | RAM[260] |
|     266  |      -1  |       0  |       0  |       0  |      -1  |
| RAM[261] | RAM[262] | RAM[263] | RAM[264] | RAM[265] |
|       0  |      -1  |       0  |       0  |     -91  |
`,qn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/BasicTest/BasicTest.vm

// Executes pop and push commands.

push constant 10
pop local 0
push constant 21
push constant 22
pop argument 2
pop argument 1
push constant 36
pop this 6
push constant 42
push constant 45
pop that 5
pop that 2
push constant 510
pop temp 6
push local 0
push that 5
add
push argument 1
sub
push this 6
push this 6
add
sub
push temp 6
add
`,Zn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/BasicTest/BasicTestVME.tst

// Tests and illustrates BasicTest.vm on the VM simulator.
// Starts by setting the stack pointer and the base addresses
// of relevant memory segments to selected RAM addresses.

load BasicTest.vm,
compare-to BasicTest.cmp,

set sp 256,        // stack pointer
set local 300,     // base address of the local segment
set argument 400,  // base address of the argument segment
set this 3000,     // base address of the this segment
set that 3010,     // base address of the that segment

repeat 25 {        // BasicTest.vm has 25 VM commands
  vmstep;
}

// Outputs the value at the stack's base and some values from the tested memory segments
output-list RAM[256]%D1.6.1 RAM[300]%D1.6.1 RAM[401]%D1.6.1 
            RAM[402]%D1.6.1 RAM[3006]%D1.6.1 RAM[3012]%D1.6.1
            RAM[3015]%D1.6.1 RAM[11]%D1.6.1;
output;
`,Jn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/BasicTest/BasicTest.tst

// Tests BasicTest.asm on the CPU emulator.

compare-to BasicTest.cmp,

set RAM[0] 256,   // stack pointer
set RAM[1] 300,   // base address of the local segment
set RAM[2] 400,   // base address of the argument segment
set RAM[3] 3000,  // base address of the this segment
set RAM[4] 3010,  // base address of the that segment

repeat 600 {      // enough cycles to complete the execution
  ticktock;
}

// Outputs the value at the stack's base and some values from the tested memory segments
output-list RAM[256]%D1.6.1 RAM[300]%D1.6.1 RAM[401]%D1.6.1 
            RAM[402]%D1.6.1 RAM[3006]%D1.6.1 RAM[3012]%D1.6.1
            RAM[3015]%D1.6.1 RAM[11]%D1.6.1;
output;
`,Xn=`|RAM[256]|RAM[300]|RAM[401]|RAM[402]|RAM[3006|RAM[3012|RAM[3015|RAM[11] |
|    472 |     10 |     21 |     22 |     36 |     42 |     45 |    510 |`,Yn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/PointerTest/PointerTest.vm

// Executes pop and push commands using the 
// pointer, this, and that segments.

push constant 3030
pop pointer 0
push constant 3040
pop pointer 1
push constant 32
pop this 2
push constant 46
pop that 6
push pointer 0
push pointer 1
add
push this 2
sub
push that 6
add
`,Qn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/PointerTest/PointerTestVME.tst

// Tests and illustrates PointerTest.vm on the VM simulator.

load PointerTest.vm,
compare-to PointerTest.cmp,

set RAM[0] 256,   // initializes the stack pointer

repeat 15 {       // PointerTest.vm has 15 VM commands
  vmstep;
}

// Outputs the stack base, THIS, THAT, and
// some values from the the this and that segments
output-list RAM[256]%D1.6.1 RAM[3]%D1.6.1 RAM[4]%D1.6.1
            RAM[3032]%D1.6.1 RAM[3046]%D1.6.1;
output;
`,ti=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/PointerTest/PointerTest.tst

// Tests PointerTest.asm on the CPU emulator.

compare-to PointerTest.cmp,

set RAM[0] 256,   // initializes the stack pointer

repeat 450 {      // enough cycles to complete the execution
  ticktock;
}

// Outputs the value at the stack's base, THIS, THAT, and
// some values from the the this and that segments
output-list RAM[256]%D1.6.1 RAM[3]%D1.6.1 
            RAM[4]%D1.6.1 RAM[3032]%D1.6.1 RAM[3046]%D1.6.1;
output;
`,ei=`|RAM[256]| RAM[3] | RAM[4] |RAM[3032|RAM[3046|
  |   6084 |   3030 |   3040 |     32 |     46 |`,si=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/StaticTest/StaticTest.vm

// Executes pop and push commands using the static segment.

push constant 111
push constant 333
push constant 888
pop static 8
pop static 3
pop static 1
push static 3
push static 1
sub
push static 8
add
`,ri=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/StaticTest/StaticTestVME.tst

// Tests and illustrates StaticTest.vm on the VM simulator.

load StaticTest.vm,
compare-to StaticTest.cmp,

set sp 256,    // initializes the stack pointer

repeat 11 {    // StaticTest.vm has 11 VM commands
  vmstep;
}

// Outputs the value at the stack's base 
output-list RAM[256]%D1.6.1;
output;
`,oi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/MemoryAccess/StaticTest/StaticTest.tst

// Tests StaticTest.asm on the CPU emulator.

compare-to StaticTest.cmp,

set RAM[0] 256,    // initializes the stack pointer

repeat 200 {       // enough cycles to complete the execution
  ticktock;
}

// Outputs the value at the stack's base 
output-list RAM[256]%D1.6.1;
output;
`,ni=`|RAM[256]|
|   1110 |`,ii={SimpleAdd:{"SimpleAdd.vm":jn,"SimpleAddVME.tst":$n,"SimpleAdd.cmp":Vn,"SimpleAdd.tst":Un},StackTest:{"StackTest.vm":Wn,"StackTestVME.tst":Hn,"StackTest.cmp":Kn,"StackTest.tst":Gn},BasicTest:{"BasicTest.vm":qn,"BasicTestVME.tst":Zn,"BasicTest.cmp":Xn,"BasicTest.tst":Jn},PointerTest:{"PointerTest.vm":Yn,"PointerTestVME.tst":Qn,"PointerTest.cmp":ei,"PointerTest.tst":ti},StaticTest:{"StaticTest.vm":si,"StaticTestVME.tst":ri,"StaticTest.cmp":ni,"StaticTest.tst":oi}},ai=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/ProgramFlow/BasicLoop/BasicLoop.vm

// Computes the sum 1 + 2 + ... + n and pushes the result onto
// the stack. The value n is given in argument[0], which must be 
// initialized by the caller of this code.

	push constant 0    
	pop local 0         // sum = 0
label LOOP
	push argument 0     
	push local 0
	add
	pop local 0	        // sum = sum + n
	push argument 0
	push constant 1
	sub
	pop argument 0      // n--
	push argument 0
	if-goto LOOP        // if n > 0, goto LOOP
	push local 0        // else, pushes sum to the stack's top
`,ui=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/ProgramFlow/BasicLoop/BasicLoopVME.tst

// Tests and illustrates BasicLoop.vm on the VM emulator.
// Before executing the code, initializes the stack pointer
// and the base addresses of the local and argument segments,
// and sets argument[0].

load BasicLoop.vm,
compare-to BasicLoop.cmp,

set sp 256,
set local 300,
set argument 400,
set argument[0] 3,

repeat 33 {
 	vmstep;
}

// Outputs the stack pointer and the value at the stack's base
output-list RAM[0]%D1.6.1 RAM[256]%D1.6.1;
output;
`,ci=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/ProgramFlow/BasicLoop/BasicLoop.tst

// Tests BasicLoop.asm on the CPU emulator.
// Before executing the code, initializes the stack pointer
// and the base addresses of the local and argument segments,
// and sets argument[0].

compare-to BasicLoop.cmp,

set RAM[0] 256,  // SP
set RAM[1] 300,  // LCL
set RAM[2] 400,  // ARG
set RAM[400] 3,  // argument 0

repeat 600 {
	ticktock;
}

// Outputs the stack pointer and the value at the stack's base
output-list RAM[0]%D1.6.1 RAM[256]%D1.6.1;
output;
`,li=`| RAM[0] |RAM[256]|
|    257 |      6 |
`,di=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/ProgramFlow/FibonacciSeries/FibonacciSeries.vm

// Puts the first n elements of the Fibonacci series in the memory,
// starting at address addr. n and addr are given in argument[0] and
// argument[1], which must be initialized by the caller of this code.

	push argument 1         // sets THAT, the base address of the
	pop pointer 1           // that segment, to argument[1]
	push constant 0         // sets the series' first and second
	pop that 0              // elements to 0 and 1, respectively       
	push constant 1   
	pop that 1              
	push argument 0         // sets n, the number of remaining elements
	push constant 2         // to be computed, to argument[0] minus 2,
	sub                     // since 2 elements were already computed.
	pop argument 0          

label LOOP
	push argument 0
	if-goto COMPUTE_ELEMENT // if n > 0, goto COMPUTE_ELEMENT
	goto END                // otherwise, goto END

label COMPUTE_ELEMENT
    // that[2] = that[0] + that[1]
	push that 0
	push that 1
	add
	pop that 2
	// THAT += 1 (updates the base address of that)
	push pointer 1
	push constant 1
	add
	pop pointer 1 
	// updates n-- and loops          
	push argument 0
	push constant 1
	sub
	pop argument 0          
	goto LOOP

label END
`,pi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/ProgramFlow/FibonacciSeries/FibonacciSeriesVME.tst

// Tests and illustrates FibonacciSeries.vm on the VM emulator.
// Before executing the code, initializes the stack pointer
// and the base addresses of the local and argument segments,
// and sets argument[0] to n and argument [1] to the base address
// of the generated series.

load FibonacciSeries.vm,
compare-to FibonacciSeries.cmp,

set sp 256,
set local 300,
set argument 400,
set argument[0] 6,
set argument[1] 3000,

repeat 73 {
	vmstep;
}

// Outputs the series of values generated and written by the code.
output-list RAM[3000]%D1.6.2 RAM[3001]%D1.6.2 RAM[3002]%D1.6.2 
            RAM[3003]%D1.6.2 RAM[3004]%D1.6.2 RAM[3005]%D1.6.2;
output;
`,hi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/ProgramFlow/FibonacciSeries/FibonacciSeries.tst

// Tests FibonacciSeries.asm on the CPU emulator.
// Before executing the code, initializes the stack pointer
// and the base addresses of the local and argument segments,
// and sets argument[0] and argument [1].

compare-to FibonacciSeries.cmp,

set RAM[0] 256,    // SP
set RAM[1] 300,    // LCL
set RAM[2] 400,    // ARG
set RAM[400] 6,    // argument[0], n
set RAM[401] 3000, // argument[1], base address of the generated series

repeat 1100 {
	ticktock;
}

// Outputs the series of values generated and written by the code.
output-list RAM[3000]%D1.6.2 RAM[3001]%D1.6.2 RAM[3002]%D1.6.2 
            RAM[3003]%D1.6.2 RAM[3004]%D1.6.2 RAM[3005]%D1.6.2;
output;
`,fi=`|RAM[3000]|RAM[3001]|RAM[3002]|RAM[3003]|RAM[3004]|RAM[3005]|
|      0  |      1  |      1  |      2  |      3  |      5  |
`,mi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/SimpleFunction/SimpleFunction.vm

// Performs a simple calculation and returns the result.
// argument[0] and argument[1] must be set by the caller.

function SimpleFunction.test 2
	push local 0
	push local 1
	add
	not
	push argument 0
	add
	push argument 1
	sub
	return
`,gi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/SimpleFunction/SimpleFunctionVME.tst

// Tests and illustrates SimpleFunction.vm in the VM emulator. 
// Before executing the code, initializes the stack pointer
// and the base addresses of some of the memory segments, 
// and sets some values in the argument segment.

load SimpleFunction.vm,
compare-to SimpleFunction.cmp,

set sp 317,
set local 317,
set argument 310,
set this 3000,
set that 4000,
set argument[0] 1234,
set argument[1] 37,
set argument[2] 9,
set argument[3] 305,
set argument[4] 300,
set argument[5] 3010,
set argument[6] 4010,

repeat 10 {
	vmstep;
}

// Outputs SP, LCL, ARG, THIS, THAT, and the return value.
output-list RAM[0]%D1.6.1 RAM[1]%D1.6.1 RAM[2]%D1.6.1 
            RAM[3]%D1.6.1 RAM[4]%D1.6.1 RAM[310]%D1.6.1;
output;
`,vi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/SimpleFunction/SimpleFunction.tst

// Tests SimpleFunction.asm in the CPU emulator.
// In particular, tests how the assembly implementation of the 'function'
// VM command initializes local variables, and how the assembly implementation
// of the 'return' VM command handles the return value, SP, LCL, ARG, THIS, and THAT. 
// Before executing the code, initializes the stack pointer and the pointers of some
// of the memory segments, and sets some values in the argument segment.

compare-to SimpleFunction.cmp,

set RAM[0] 317,    // SP
set RAM[1] 317,    // LCL
set RAM[2] 310,    // ARG
set RAM[3] 3000,   // THIS
set RAM[4] 4000,   // THAT
set RAM[310] 1234, 
set RAM[311] 37,    
set RAM[312] 1000, 
set RAM[313] 305,
set RAM[314] 300,
set RAM[315] 3010,
set RAM[316] 4010, 

repeat 300 {
	ticktock;
}

// Outputs SP, LCL, ARG, THIS, THAT, and the return value.
output-list RAM[0]%D1.6.1 RAM[1]%D1.6.1 RAM[2]%D1.6.1 
            RAM[3]%D1.6.1 RAM[4]%D1.6.1 RAM[310]%D1.6.1;
output;
`,ki=`| RAM[0] | RAM[1] | RAM[2] | RAM[3] | RAM[4] |RAM[310]|
|    311 |    305 |    300 |   3010 |   4010 |   1196 |
`,yi=`// Sys.vm. Tested by the NestedCall test script.
// Consists of three functions: Sys.init, Sys.main, and Sys.add12.

// Calls Sys.main() and stores a return value in temp 1.
// Does not return (enters infinite loop).
// The VM implementation starts running the Sys.init function, by default.
function Sys.init 0
	push constant 4000	// tests that THIS and THAT are handled correctly
	pop pointer 0
	push constant 5000
	pop pointer 1
	call Sys.main 0
	pop temp 1
	label LOOP
	goto LOOP

// Sets locals 1, 2 and 3 to some values. Leaves locals 0 and 4 unchanged, 
// to test that the 'function' VM command initializes them to 0 (the test 
// script sets them to -1 before this code starts running).
// Calls Sys.add12(123) and stores the return value (should be 135) in temp 0.
// Returns local 0 + local 1 + local 2 + local 3 + local 4 (should be 456), to 
// confirm that locals were not mangled by the function call.
function Sys.main 5
	push constant 4001
	pop pointer 0
	push constant 5001
	pop pointer 1
	push constant 200
	pop local 1
	push constant 40
	pop local 2
	push constant 6
	pop local 3
	push constant 123
	call Sys.add12 1
	pop temp 0
	push local 0
	push local 1
	push local 2
	push local 3
	push local 4
	add
	add
	add
	add
	return

// Returns (argument 0) + 12.
function Sys.add12 0
	push constant 4002
	pop pointer 0
	push constant 5002
	pop pointer 1
	push argument 0
	push constant 12
	add
	return
`,bi=`// Tests and illustrates how the VM implementation handles function-call-and-return,
// by executing the functions in Sys.vm in the VM emulator.
// In particular, loads and runs the functions in Sys.vm.

load Sys.vm,
compare-to NestedCall.cmp,
output-list RAM[0]%D1.6.1 RAM[1]%D1.6.1 RAM[2]%D1.6.1 RAM[3]%D1.6.1 RAM[4]%D1.6.1 RAM[5]%D1.6.1 RAM[6]%D1.6.1;

set RAM[0] 261,
set RAM[1] 261,
set RAM[2] 256,
set RAM[3] -3,
set RAM[4] -4,
set RAM[5] -1, // test results
set RAM[6] -1,
set RAM[256] 1234, // fake stack frame from call Sys.init
set RAM[257] -1,
set RAM[258] -2,
set RAM[259] -3,
set RAM[260] -4,

set RAM[261] -1, // Initialize stack to check for local segment
set RAM[262] -1, // being cleared to zero.
set RAM[263] -1,
set RAM[264] -1,
set RAM[265] -1,
set RAM[266] -1,
set RAM[267] -1,
set RAM[268] -1,
set RAM[269] -1,
set RAM[270] -1,
set RAM[271] -1,
set RAM[272] -1,
set RAM[273] -1,
set RAM[274] -1,
set RAM[275] -1,
set RAM[276] -1,
set RAM[277] -1,
set RAM[278] -1,
set RAM[279] -1,
set RAM[280] -1,
set RAM[281] -1,
set RAM[282] -1,
set RAM[283] -1,
set RAM[284] -1,
set RAM[285] -1,
set RAM[286] -1,
set RAM[287] -1,
set RAM[288] -1,
set RAM[289] -1,
set RAM[290] -1,
set RAM[291] -1,
set RAM[292] -1,
set RAM[293] -1,
set RAM[294] -1,
set RAM[295] -1,
set RAM[296] -1,
set RAM[297] -1,
set RAM[298] -1,
set RAM[299] -1,

set sp 261,
set local 261,
set argument 256,
set this 3000,
set that 4000;

repeat 50 {
	vmstep;
}
output;
`,wi=`// Tests how the VM implementation handles function-call-and-return,
// by executing the functions in Sys.vm.
// In particular, loads and runs NestedCall.asm, which results when 
// the VM translator is applied to the NestedCall folder, which 
// includes only one VM file: Sys.vm.

compare-to NestedCall.cmp,

set RAM[0] 261,
set RAM[1] 261,
set RAM[2] 256,
set RAM[3] -3,
set RAM[4] -4,
set RAM[5] -1,     // test results
set RAM[6] -1,
set RAM[256] 1234, // fake stack frame from call Sys.init
set RAM[257] -1,
set RAM[258] -2,
set RAM[259] -3,
set RAM[260] -4,

set RAM[261] -1,   // Initializes the stack, to check that the local segment
set RAM[262] -1,   // is initialized to zeros by the 'function' VM command.
set RAM[263] -1,
set RAM[264] -1,
set RAM[265] -1,
set RAM[266] -1,
set RAM[267] -1,
set RAM[268] -1,
set RAM[269] -1,
set RAM[270] -1,
set RAM[271] -1,
set RAM[272] -1,
set RAM[273] -1,
set RAM[274] -1,
set RAM[275] -1,
set RAM[276] -1,
set RAM[277] -1,
set RAM[278] -1,
set RAM[279] -1,
set RAM[280] -1,
set RAM[281] -1,
set RAM[282] -1,
set RAM[283] -1,
set RAM[284] -1,
set RAM[285] -1,
set RAM[286] -1,
set RAM[287] -1,
set RAM[288] -1,
set RAM[289] -1,
set RAM[290] -1,
set RAM[291] -1,
set RAM[292] -1,
set RAM[293] -1,
set RAM[294] -1,
set RAM[295] -1,
set RAM[296] -1,
set RAM[297] -1,
set RAM[298] -1,
set RAM[299] -1,

repeat 4000 {
	ticktock;
}

output-list RAM[0]%D1.6.1 RAM[1]%D1.6.1 RAM[2]%D1.6.1 RAM[3]%D1.6.1 RAM[4]%D1.6.1 RAM[5]%D1.6.1 RAM[6]%D1.6.1;
output;
`,Bi=`| RAM[0] | RAM[1] | RAM[2] | RAM[3] | RAM[4] | RAM[5] | RAM[6] |
|    261 |    261 |    256 |   4000 |   5000 |    135 |    246 |
`,_i=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/Main.vm

// Contains one function: Main.fibonacci.

// Computes the n'th element of the Fibonacci series, recursively.
// n is given in argument[0]. Called by the Sys.init function 
// (part of the Sys.vm file), which sets argument[0] to an input
// value and then calls Main.fibonacci.
function Main.fibonacci 0
	push argument 0
	push constant 2
	lt                     
	if-goto N_LT_2        
	goto N_GE_2
label N_LT_2               // if n < 2 returns n
	push argument 0        
	return
label N_GE_2               // if n >= 2 returns fib(n - 2) + fib(n - 1)
	push argument 0
	push constant 2
	sub
	call Main.fibonacci 1  // computes fib(n - 2)
	push argument 0
	push constant 1
	sub
	call Main.fibonacci 1  // computes fib(n - 1)
	add                    // returns fib(n - 1) + fib(n - 2)
	return
`,Ai=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/Sys.vm

// Containts one function: Sys.init.

// Pushes a constant n onto the stack, and calls the Main.fibonacii
// function, which computes the n'th element of the Fibonacci series.
// Note that by convention, the Sys.init function is called "automatically" 
// by the bootstrap code generated by the VM translator.
function Sys.init 0
    // Computes fibonacci(4)
	push constant 4
	// Calls the function, informing that one argument was pushed onto the stack
	call Main.fibonacci 1
label END  
	goto END  // loops infinitely`,Si=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/FibonacciElementVME.tst

// Tests and illustrates the given Fibonacci element program on the VM emulator.

load,
compare-to FibonacciElement.cmp,

set sp 261,

repeat 110 {
  vmstep;
}

// Outputs the stack pointer and the value at the stack's base.
// That's where the implementation should put the return value.  
output-list RAM[0]%D1.6.1 RAM[261]%D1.6.1;
output;
`,xi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/FibonacciElement.tst

// Tests FibonacciElement.asm on the CPU emulator. 
// FibonacciElement.asm results from translating Main.vm and Sys.vm into
// a single assembly program, stored in the file FibonacciElement.asm.

compare-to FibonacciElement.cmp,

repeat 6000 {
	ticktock;
}

// Outputs the stack pointer and the value at the stack's base.
// That's where the implementation should put the return value.
output-list RAM[0]%D1.6.1 RAM[261]%D1.6.1;
output;
`,Ii=`| RAM[0] |RAM[261]|
|    262 |      3 |
`,Ri=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/StaticsTest/Class1.vm

// Stores two supplied arguments in static[0] and static[1].
function Class1.set 0
	push argument 0
	pop static 0
	push argument 1
	pop static 1
	push constant 0
	return

// Returns static[0] - static[1].
function Class1.get 0
	push static 0
	push static 1
	sub
	return`,Ti=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/StaticsTest/Class2.vm

// Stores two supplied arguments in static[0] and static[1].
function Class2.set 0
	push argument 0
	pop static 0
	push argument 1
	pop static 1
	push constant 0
	return

// Returns static[0] - static[1].
function Class2.get 0
	push static 0
	push static 1
	sub
	return`,Mi=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/StaticsTest/Sys.vm

// Tests that different functions, stored in two different 
// class files, manipulate the static segment correctly. 

function Sys.init 0
	push constant 6
	push constant 8
	call Class1.set 2
	pop temp 0 // dumps the return value
	push constant 23
	push constant 15
	call Class2.set 2
	pop temp 0 // dumps the return value
	call Class1.get 0
	call Class2.get 0
label END
	goto END`,Ci=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/StaticsTest/StaticsTestVME.tst

// Tests and illustrates the statics test on the VM emulator.

load,
compare-to StaticsTest.cmp,

set sp 261,

repeat 36 {
	vmstep;
}

output-list RAM[0]%D1.6.1 RAM[261]%D1.6.1 RAM[262]%D1.6.1;
output;
`,Ei=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/StaticsTest/StaticsTest.tst

// Tests StaticTest.asm in the CPU emulator.
// This assembly file results from translating the staticsTest folder.

compare-to StaticsTest.cmp,

set RAM[0] 256,

repeat 2500 {
	ticktock;
}

output-list RAM[0]%D1.6.1 RAM[261]%D1.6.1 RAM[262]%D1.6.1;
output;
`,Pi=`| RAM[0] |RAM[261]|RAM[262]|
|    263 |     -2 |      8 |
`,Oi={BasicLoop:{"BasicLoop.vm":ai,"BasicLoopVME.tst":ui,"BasicLoop.cmp":li,"BasicLoop.tst":ci},FibonacciSeries:{"FibonacciSeries.vm":di,"FibonacciSeriesVME.tst":pi,"FibonacciSeries.cmp":fi,"FibonacciSeries.tst":hi},SimpleFunction:{"SimpleFunction.vm":mi,"SimpleFunctionVME.tst":gi,"SimpleFunction.cmp":ki,"SimpleFunction.tst":vi},NestedCall:{"Sys.vm":yi,"NestedCallVME.tst":bi,"NestedCall.cmp":Bi,"NestedCall.tst":wi},FibonacciElement:{"Sys.vm":Ai,"Main.vm":_i,"FibonacciElementVME.tst":Si,"FibonacciElement.cmp":Ii,"FibonacciElement.tst":xi},StaticsTest:{"Class1.vm":Ri,"Class2.vm":Ti,"Sys.vm":Mi,"StaticsTestVME.tst":Ci,"StaticsTest.cmp":Pi,"StaticsTest.tst":Ei}},Me={...Bo,...jo,...pn,...zn,...ii,...Oi},Di=s=>s===null,Fe=s=>Object.prototype.hasOwnProperty.call(s??{},"ok"),dt=s=>Object.prototype.hasOwnProperty.call(s,"err");function at(s){return Fe(s)?s.ok:{ok:s,map(t){return t(at(this))}}}function et(s){return s.err??{err:s,map(t){return this}}}function Fi(s){if(Di(s))throw new Error("Attempted to unwrap None");if(dt(s))throw et(s);return Fe(s)?at(s):s}function Dt(s){const t=s||"";return function(){throw new Error("this method "+t+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function pe(s,t){if(!s)throw new Error(t||"Assertion failed")}function T0(s,t,e){let r;Object.defineProperty(s,t,{get(){return r||(r=e.call(this)),r}})}function Ni(s){return s&&Object.assign({},s)}function cs(s,t){const e=[];for(;t-- >0;)e.push(s());return e}function ls(s,t){return new Array(t+1).join(s)}function a0(s,t){return cs(()=>s,t)}function M0(s){const t=[];for(let e=0;e<s.length;e++){const r=s[e];s.lastIndexOf(r)!==e&&t.indexOf(r)<0&&t.push(r)}return t}function ds(s){const t=[];return s.forEach(e=>{t.indexOf(e)<0&&t.push(e)}),t}function fe(s){const t=s[0];return t===t.toUpperCase()}function ps(s){return!fe(s)}function hs(s,t,e){const r=e||" ";return s.length<t?ls(r,t-s.length)+s:s}function me(){this.strings=[]}me.prototype.append=function(s){this.strings.push(s)};me.prototype.contents=function(){return this.strings.join("")};const y0=s=>String.fromCodePoint(parseInt(s,16));function fs(s){if(s.charAt(0)==="\\")switch(s.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return y0(s.slice(2,4));case"u":return s.charAt(2)==="{"?y0(s.slice(3,-1)):y0(s.slice(2,6));default:return s.charAt(1)}else return s}function J0(s){if(s==null)return String(s);const t=Object.prototype.toString.call(s);try{let e;return s.constructor&&s.constructor.name?e=s.constructor.name:t.indexOf("[object ")===0?e=t.slice(8,-1):e=typeof s,e+": "+JSON.stringify(String(s))}catch{return t}}function ms(s,t="unexpected null value"){if(s==null)throw new Error(t);return s}const Li=Object.freeze(Object.defineProperty({__proto__:null,StringBuffer:me,abstract:Dt,assert:pe,checkNotNull:ms,clone:Ni,copyWithoutDuplicates:ds,defineLazyProperty:T0,getDuplicates:M0,isLexical:ps,isSyntactic:fe,padLeft:hs,repeat:a0,repeatFn:cs,repeatStr:ls,unescapeCodePoint:fs,unexpectedObjToString:J0},Symbol.toStringTag,{value:"Module"})),zi={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class nt{constructor(){if(this.constructor===nt)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(t){return t&&(this.source=t.trimmed()),this}}const Tt=Object.create(nt.prototype),Mt=Object.create(nt.prototype);class xt extends nt{constructor(t){super(),this.obj=t}}class Ct extends nt{constructor(t,e){super(),this.from=t,this.to=e,this.matchCodePoint=t.length>1||e.length>1}}class Et extends nt{constructor(t){super(),this.index=t}}class wt extends nt{constructor(t){super(),this.terms=t}}class u0 extends wt{constructor(t,e,r){const o=t.rules[e].body;super([r,o]),this.superGrammar=t,this.name=e,this.body=r}}class c0 extends wt{constructor(t,e,r,o){const n=t.rules[e].body;super([...r,n,...o]),this.superGrammar=t,this.ruleName=e,this.expansionPos=r.length}}class _t extends nt{constructor(t){super(),this.factors=t}}class Ft extends nt{constructor(t){super(),this.expr=t}}class ge extends Ft{}class Se extends Ft{}class ce extends Ft{}ge.prototype.operator="*";Se.prototype.operator="+";ce.prototype.operator="?";ge.prototype.minNumMatches=0;Se.prototype.minNumMatches=1;ce.prototype.minNumMatches=0;ge.prototype.maxNumMatches=Number.POSITIVE_INFINITY;Se.prototype.maxNumMatches=Number.POSITIVE_INFINITY;ce.prototype.maxNumMatches=1;let Nt=class extends nt{constructor(t){super(),this.expr=t}};class Lt extends nt{constructor(t){super(),this.expr=t}}class $t extends nt{constructor(t){super(),this.expr=t}}class pt extends nt{constructor(t,e=[]){super(),this.ruleName=t,this.args=e}isSyntactic(){return fe(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class St extends nt{constructor(t){super(),this.category=t,this.pattern=zi[t]}}function gt(s,t){let e;return t?(e=new Error(t.getLineAndColumnMessage()+s),e.shortMessage=s,e.interval=t):e=new Error(s),e}function C0(){return gt("Interval sources don't match")}function ji(s){const t=new Error;return Object.defineProperty(t,"message",{enumerable:!0,get(){return s.message}}),Object.defineProperty(t,"shortMessage",{enumerable:!0,get(){return"Expected "+s.getExpectedText()}}),t.interval=s.getInterval(),t}function $i(s,t,e){const r=t?`Grammar ${s} is not declared in namespace '${t}'`:"Undeclared grammar "+s;return gt(r,e)}function Ui(s,t){return gt("Grammar "+s.name+" is already declared in this namespace")}function Vi(s){return gt(`Grammar '${s.name}' does not support incremental parsing`)}function gs(s,t,e){return gt("Rule "+s+" is not declared in grammar "+t,e)}function Wi(s,t,e){return gt("Cannot override rule "+s+" because it is not declared in "+t,e)}function Hi(s,t,e){return gt("Cannot extend rule "+s+" because it is not declared in "+t,e)}function A1(s,t,e,r){let o="Duplicate declaration for rule '"+s+"' in grammar '"+t+"'";return t!==e&&(o+=" (originally declared in '"+e+"')"),gt(o,r)}function vs(s,t,e,r){return gt("Wrong number of parameters for rule "+s+" (expected "+t+", got "+e+")",r)}function Gi(s,t,e,r){return gt("Wrong number of arguments for rule "+s+" (expected "+t+", got "+e+")",r)}function S1(s,t,e){return gt("Duplicate parameter names in rule "+s+": "+t.join(", "),e)}function Ki(s,t){return gt("Invalid parameter to rule "+s+": "+t+" has arity "+t.getArity()+", but parameter expressions must have arity 1",t.source)}const qi="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function Zi(s,t){return gt("Cannot apply syntactic rule "+s+" from here (inside a lexical context)",t.source)}function Ji(s){const{ruleName:t}=s;return gt(`applySyntactic is for syntactic rules, but '${t}' is a lexical rule. `+qi,s.source)}function Xi(s){return gt("applySyntactic is not required here (in a syntactic context)",s.source)}function x1(s,t){return gt("Incorrect argument type: expected "+s,t.source)}function Yi(s){return gt("'...' can appear at most once in a rule body",s.source)}function Qi(s){const t=s._node;pe(t&&t.isNonterminal()&&t.ctorName==="escapeChar_unicodeCodePoint");const e=s.children.slice(1,-1).map(o=>o.source),r=e[0].coverageWith(...e.slice(1));return gt(`U+${r.contents} is not a valid Unicode code point`,r)}function ks(s,t){const e=t.length>0?t[t.length-1].args:[];let o="Nullable expression "+s.expr.substituteParams(e)+" is not allowed inside '"+s.operator+"' (possible infinite loop)";if(t.length>0){const n=t.map(i=>new pt(i.ruleName,i.args)).join(`
`);o+=`
Application stack (most recent application last):
`+n}return gt(o,s.expr.source)}function ys(s,t,e,r){return gt("Rule "+s+" involves an alternation which has inconsistent arity (expected "+t+", got "+e+")",r.source)}function ta(s){const t=s.map(e=>e.message);return gt(["Errors:"].concat(t).join(`
- `),s[0].interval)}function ea(s,t,e,r){let o=r.slice(0,-1).map(u=>{const f="  "+u[0].name+" > "+u[1];return u.length===3?f+" for '"+u[2]+"'":f}).join(`
`);o+=`
  `+t+" > "+s;let n="";s==="_iter"&&(n=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const i=[`Missing semantic action for '${s}' in ${e} '${t}'.${n}`,"Action stack (most recent call last):",o].join(`
`),a=gt(i);return a.name="missingSemanticAction",a}function sa(s){if(s.length===1)throw s[0];if(s.length>1)throw ta(s)}function ra(s){let t=0;return s.map(r=>{const o=r.toString();return t=Math.max(t,o.length),o}).map(r=>hs(r,t))}function I1(s,t,e){const r=s.length,o=s.slice(0,e),n=s.slice(e+t.length);return(o+t+n).substr(0,r)}function oa(...s){const t=this,{offset:e}=t,{repeatStr:r}=Li,o=new me;o.append("Line "+t.lineNum+", col "+t.colNum+`:
`);const n=ra([t.prevLine==null?0:t.lineNum-1,t.lineNum,t.nextLine==null?0:t.lineNum+1]),i=(m,h,v)=>{o.append(v+n[m]+" | "+h+`
`)};t.prevLine!=null&&i(0,t.prevLine,"  "),i(1,t.line,"> ");const a=t.line.length;let u=r(" ",a+1);for(let m=0;m<s.length;++m){let h=s[m][0],v=s[m][1];pe(h>=0&&h<=v,"range start must be >= 0 and <= end");const d=e-t.colNum+1;h=Math.max(0,h-d),v=Math.min(v-d,a),u=I1(u,r("~",v-h),h)}const f=2+n[1].length+3;return o.append(r(" ",f)),u=I1(u,"^",t.colNum-1),o.append(u.replace(/ +$/,"")+`
`),t.nextLine!=null&&i(2,t.nextLine,"  "),o.contents()}let E0=[];function bs(s){E0.push(s)}function na(s){E0.forEach(t=>{t(s)}),E0=null}function X0(s,t){let e=1,r=1,o=0,n=0,i=null,a=null,u=-1;for(;o<t;){const h=s.charAt(o++);h===`
`?(e++,r=1,u=n,n=o):h!=="\r"&&r++}let f=s.indexOf(`
`,n);if(f===-1)f=s.length;else{const h=s.indexOf(`
`,f+1);i=h===-1?s.slice(f):s.slice(f,h),i=i.replace(/^\r?\n/,"").replace(/\r$/,"")}u>=0&&(a=s.slice(u,n).replace(/\r?\n$/,""));const m=s.slice(n,f).replace(/\r$/,"");return{offset:t,lineNum:e,colNum:r,line:m,prevLine:a,nextLine:i,toString:oa}}function Y0(s,t,...e){return X0(s,t).toString(...e)}const R1=(()=>{let s=0;return t=>""+t+s++})();class Rt{constructor(t,e,r){this.sourceString=t,this.startIdx=e,this.endIdx=r}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...t){return Rt.coverage(...t,this)}collapsedLeft(){return new Rt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new Rt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return X0(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const t=[this.startIdx,this.endIdx];return Y0(this.sourceString,this.startIdx,t)}minus(t){if(this.sourceString!==t.sourceString)throw C0();return this.startIdx===t.startIdx&&this.endIdx===t.endIdx?[]:this.startIdx<t.startIdx&&t.endIdx<this.endIdx?[new Rt(this.sourceString,this.startIdx,t.startIdx),new Rt(this.sourceString,t.endIdx,this.endIdx)]:this.startIdx<t.endIdx&&t.endIdx<this.endIdx?[new Rt(this.sourceString,t.endIdx,this.endIdx)]:this.startIdx<t.startIdx&&t.startIdx<this.endIdx?[new Rt(this.sourceString,this.startIdx,t.startIdx)]:[this]}relativeTo(t){if(this.sourceString!==t.sourceString)throw C0();return pe(this.startIdx>=t.startIdx&&this.endIdx<=t.endIdx,"other interval does not cover this one"),new Rt(this.sourceString,this.startIdx-t.startIdx,this.endIdx-t.startIdx)}trimmed(){const{contents:t}=this,e=this.startIdx+t.match(/^\s*/)[0].length,r=this.endIdx-t.match(/\s*$/)[0].length;return new Rt(this.sourceString,e,r)}subInterval(t,e){const r=this.startIdx+t;return new Rt(this.sourceString,r,r+e)}}Rt.coverage=function(s,...t){let{startIdx:e,endIdx:r}=s;for(const o of t){if(o.sourceString!==s.sourceString)throw C0();e=Math.min(e,o.startIdx),r=Math.max(r,o.endIdx)}return new Rt(s.sourceString,e,r)};const ia=65535;class l0{constructor(t){this.source=t,this.pos=0,this.examinedLength=0}atEnd(){const t=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),t}next(){const t=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),t}nextCharCode(){const t=this.next();return t&&t.charCodeAt(0)}nextCodePoint(){const t=this.source.slice(this.pos++).codePointAt(0);return t>ia&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),t}matchString(t,e){let r;if(e){for(r=0;r<t.length;r++){const o=this.next(),n=t[r];if(o==null||o.toUpperCase()!==n.toUpperCase())return!1}return!0}for(r=0;r<t.length;r++)if(this.next()!==t[r])return!1;return!0}sourceSlice(t,e){return this.source.slice(t,e)}interval(t,e){return new Rt(this.source,t,e||this.pos)}}class ws{constructor(t,e,r,o,n,i,a){this.matcher=t,this.input=e,this.startExpr=r,this._cst=o,this._cstOffset=n,this._rightmostFailurePosition=i,this._rightmostFailures=a,this.failed()&&(T0(this,"message",function(){const u="Expected "+this.getExpectedText();return Y0(this.input,this.getRightmostFailurePosition())+u}),T0(this,"shortMessage",function(){const u="expected "+this.getExpectedText(),f=X0(this.input,this.getRightmostFailurePosition());return"Line "+f.lineNum+", col "+f.colNum+": "+u}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const t=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=t.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const t=new me;let e=this.getRightmostFailures();e=e.filter(r=>!r.isFluffy());for(let r=0;r<e.length;r++)r>0&&(r===e.length-1?t.append(e.length>2?", or ":" or "):t.append(", ")),t.append(e[r].toString());return t.contents()}getInterval(){const t=this.getRightmostFailurePosition();return new Rt(this.input,t,t)}}class aa{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(t){return this.applicationMemoKeyStack.indexOf(t.toMemoKey())>=0}enter(t){this.applicationMemoKeyStack.push(t.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(t,e){e.isLeftRecursion=!0,e.headApplication=t,e.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=e;const{applicationMemoKeyStack:r}=this,o=r.indexOf(t.toMemoKey())+1,n=r.slice(o);e.isInvolved=function(i){return n.indexOf(i)>=0},e.updateInvolvedApplicationMemoKeys=function(){for(let i=o;i<r.length;i++){const a=r[i];this.isInvolved(a)||n.push(a)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(t){if(!t.isLeftRecursion)return!0;const{applicationMemoKeyStack:e}=this;for(let r=0;r<e.length;r++){const o=e[r];if(t.isInvolved(o))return!1}return!0}memoize(t,e){return this.memo[t]=e,this.maxExaminedLength=Math.max(this.maxExaminedLength,e.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,e.rightmostFailureOffset),e}clearObsoleteEntries(t,e){if(t+this.maxExaminedLength<=e)return;const{memo:r}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(r).forEach(o=>{const n=r[o];t+n.examinedLength>e?delete r[o]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,n.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,n.rightmostFailureOffset))})}}const ua="✗",ca="✓",la="⋅",da="⇒",pa="␉",ha="␊",fa="␍",P0={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function ma(s){return a0(" ",s).join("")}function ga(s,t,e){const r=Bs(s.slice(t,t+e));return r.length<e?r+a0(" ",e-r.length).join(""):r}function Bs(s){return typeof s=="string"?s.replace(/ /g,la).replace(/\t/g,pa).replace(/\n/g,ha).replace(/\r/g,fa):String(s)}class de{constructor(t,e,r,o,n,i,a){this.input=t,this.pos=this.pos1=e,this.pos2=r,this.source=new Rt(t,e,r),this.expr=o,this.bindings=i,this.children=a||[],this.terminatingLREntry=null,this._flags=n?P0.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(t){const e=new de(this.input,this.pos,this.pos2,t,this.succeeded,this.bindings,this.children);return e.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,e.isImplicitSpaces=this.isImplicitSpaces,e.isMemoized=this.isMemoized,e.isRootNode=this.isRootNode,e.terminatesLR=this.terminatesLR,e.terminatingLREntry=this.terminatingLREntry,e}recordLRTermination(t,e){this.terminatingLREntry=new de(this.input,this.pos,this.pos2,this.expr,!1,[e],[t]),this.terminatingLREntry.terminatesLR=!0}walk(t,e){let r=t;typeof r=="function"&&(r={enter:r});function o(n,i,a){let u=!0;r.enter&&r.enter.call(e,n,i,a)===de.prototype.SKIP&&(u=!1),u&&(n.children.forEach(f=>{o(f,n,a+1)}),r.exit&&r.exit.call(e,n,i,a))}this.isRootNode?this.children.forEach(n=>{o(n,null,0)}):o(this,null,0)}toString(){const t=new me;return this.walk((e,r,o)=>{if(!e)return this.SKIP;if(e.expr.constructor.name!=="Alt"){if(t.append(ga(e.input,e.pos,10)+ma(o*2+1)),t.append((e.succeeded?ca:ua)+" "+e.displayString),e.isHeadOfLeftRecursion&&t.append(" (LR)"),e.succeeded){const i=Bs(e.source.contents);t.append(" "+da+"  "),t.append(typeof i=="string"?'"'+i+'"':i)}t.append(`
`)}}),t.contents()}}de.prototype.SKIP={};Object.keys(P0).forEach(s=>{const t=P0[s];Object.defineProperty(de.prototype,s,{get(){return(this._flags&t)!==0},set(e){e?this._flags|=t:this._flags&=~t}})});nt.prototype.allowsSkippingPrecedingSpace=Dt("allowsSkippingPrecedingSpace");Tt.allowsSkippingPrecedingSpace=Mt.allowsSkippingPrecedingSpace=pt.prototype.allowsSkippingPrecedingSpace=xt.prototype.allowsSkippingPrecedingSpace=Ct.prototype.allowsSkippingPrecedingSpace=St.prototype.allowsSkippingPrecedingSpace=function(){return!0};wt.prototype.allowsSkippingPrecedingSpace=Ft.prototype.allowsSkippingPrecedingSpace=$t.prototype.allowsSkippingPrecedingSpace=Lt.prototype.allowsSkippingPrecedingSpace=Nt.prototype.allowsSkippingPrecedingSpace=Et.prototype.allowsSkippingPrecedingSpace=_t.prototype.allowsSkippingPrecedingSpace=function(){return!1};let Ee;bs(s=>{Ee=s});let Qe;nt.prototype.assertAllApplicationsAreValid=function(s,t){Qe=0,this._assertAllApplicationsAreValid(s,t)};nt.prototype._assertAllApplicationsAreValid=Dt("_assertAllApplicationsAreValid");Tt._assertAllApplicationsAreValid=Mt._assertAllApplicationsAreValid=xt.prototype._assertAllApplicationsAreValid=Ct.prototype._assertAllApplicationsAreValid=Et.prototype._assertAllApplicationsAreValid=St.prototype._assertAllApplicationsAreValid=function(s,t){};$t.prototype._assertAllApplicationsAreValid=function(s,t){Qe++,this.expr._assertAllApplicationsAreValid(s,t),Qe--};wt.prototype._assertAllApplicationsAreValid=function(s,t){for(let e=0;e<this.terms.length;e++)this.terms[e]._assertAllApplicationsAreValid(s,t)};_t.prototype._assertAllApplicationsAreValid=function(s,t){for(let e=0;e<this.factors.length;e++)this.factors[e]._assertAllApplicationsAreValid(s,t)};Ft.prototype._assertAllApplicationsAreValid=Nt.prototype._assertAllApplicationsAreValid=Lt.prototype._assertAllApplicationsAreValid=function(s,t){this.expr._assertAllApplicationsAreValid(s,t)};pt.prototype._assertAllApplicationsAreValid=function(s,t,e=!1){const r=t.rules[this.ruleName],o=fe(s)&&Qe===0;if(!r)throw gs(this.ruleName,t.name,this.source);if(!e&&fe(this.ruleName)&&!o)throw Zi(this.ruleName,this);const n=this.args.length,i=r.formals.length;if(n!==i)throw Gi(this.ruleName,i,n,this.source);const a=Ee&&r===Ee.rules.applySyntactic;if(Ee&&r===Ee.rules.caseInsensitive&&!(this.args[0]instanceof xt))throw x1('a Terminal (e.g. "abc")',this.args[0]);if(a){const f=this.args[0];if(!(f instanceof pt))throw x1("a syntactic rule application",f);if(!fe(f.ruleName))throw Ji(f);if(o)throw Xi(this)}this.args.forEach(f=>{if(f._assertAllApplicationsAreValid(s,t,a),f.getArity()!==1)throw Ki(this.ruleName,f)})};nt.prototype.assertChoicesHaveUniformArity=Dt("assertChoicesHaveUniformArity");Tt.assertChoicesHaveUniformArity=Mt.assertChoicesHaveUniformArity=xt.prototype.assertChoicesHaveUniformArity=Ct.prototype.assertChoicesHaveUniformArity=Et.prototype.assertChoicesHaveUniformArity=$t.prototype.assertChoicesHaveUniformArity=St.prototype.assertChoicesHaveUniformArity=function(s){};wt.prototype.assertChoicesHaveUniformArity=function(s){if(this.terms.length===0)return;const t=this.terms[0].getArity();for(let e=0;e<this.terms.length;e++){const r=this.terms[e];r.assertChoicesHaveUniformArity();const o=r.getArity();if(t!==o)throw ys(s,t,o,r)}};u0.prototype.assertChoicesHaveUniformArity=function(s){const t=this.terms[0].getArity(),e=this.terms[1].getArity();if(t!==e)throw ys(s,e,t,this.terms[0])};_t.prototype.assertChoicesHaveUniformArity=function(s){for(let t=0;t<this.factors.length;t++)this.factors[t].assertChoicesHaveUniformArity(s)};Ft.prototype.assertChoicesHaveUniformArity=function(s){this.expr.assertChoicesHaveUniformArity(s)};Nt.prototype.assertChoicesHaveUniformArity=function(s){};Lt.prototype.assertChoicesHaveUniformArity=function(s){this.expr.assertChoicesHaveUniformArity(s)};pt.prototype.assertChoicesHaveUniformArity=function(s){};nt.prototype.assertIteratedExprsAreNotNullable=Dt("assertIteratedExprsAreNotNullable");Tt.assertIteratedExprsAreNotNullable=Mt.assertIteratedExprsAreNotNullable=xt.prototype.assertIteratedExprsAreNotNullable=Ct.prototype.assertIteratedExprsAreNotNullable=Et.prototype.assertIteratedExprsAreNotNullable=St.prototype.assertIteratedExprsAreNotNullable=function(s){};wt.prototype.assertIteratedExprsAreNotNullable=function(s){for(let t=0;t<this.terms.length;t++)this.terms[t].assertIteratedExprsAreNotNullable(s)};_t.prototype.assertIteratedExprsAreNotNullable=function(s){for(let t=0;t<this.factors.length;t++)this.factors[t].assertIteratedExprsAreNotNullable(s)};Ft.prototype.assertIteratedExprsAreNotNullable=function(s){if(this.expr.assertIteratedExprsAreNotNullable(s),this.expr.isNullable(s))throw ks(this,[])};ce.prototype.assertIteratedExprsAreNotNullable=Nt.prototype.assertIteratedExprsAreNotNullable=Lt.prototype.assertIteratedExprsAreNotNullable=$t.prototype.assertIteratedExprsAreNotNullable=function(s){this.expr.assertIteratedExprsAreNotNullable(s)};pt.prototype.assertIteratedExprsAreNotNullable=function(s){this.args.forEach(t=>{t.assertIteratedExprsAreNotNullable(s)})};class Q0{constructor(t){this.matchLength=t}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(t){if(this.children)return this.children[t]}indexOfChild(t){return this.children.indexOf(t)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(t){const e=this.indexOfChild(t);if(e<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(e===0)throw new Error("cannot get child before first child");return this.childAt(e-1)}childAfter(t){const e=this.indexOfChild(t);if(e<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(e===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(e+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class ve extends Q0{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class va extends Q0{constructor(t,e,r,o){super(o),this.ruleName=t,this.children=e,this.childOffsets=r}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return ps(this.ctorName)}isSyntactic(){return fe(this.ctorName)}}class _s extends Q0{constructor(t,e,r,o){super(r),this.children=t,this.childOffsets=e,this.optional=o}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}nt.prototype.eval=Dt("eval");Tt.eval=function(s){const{inputStream:t}=s,e=t.pos,r=t.nextCodePoint();return r!==void 0?(s.pushBinding(new ve(String.fromCodePoint(r).length),e),!0):(s.processFailure(e,this),!1)};Mt.eval=function(s){const{inputStream:t}=s,e=t.pos;return t.atEnd()?(s.pushBinding(new ve(0),e),!0):(s.processFailure(e,this),!1)};xt.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos;return t.matchString(this.obj)?(s.pushBinding(new ve(this.obj.length),e),!0):(s.processFailure(e,this),!1)};Ct.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos,r=this.matchCodePoint?t.nextCodePoint():t.nextCharCode();return r!==void 0&&this.from.codePointAt(0)<=r&&r<=this.to.codePointAt(0)?(s.pushBinding(new ve(String.fromCodePoint(r).length),e),!0):(s.processFailure(e,this),!1)};Et.prototype.eval=function(s){return s.eval(s.currentApplication().args[this.index])};$t.prototype.eval=function(s){s.enterLexifiedContext();const t=s.eval(this.expr);return s.exitLexifiedContext(),t};wt.prototype.eval=function(s){for(let t=0;t<this.terms.length;t++)if(s.eval(this.terms[t]))return!0;return!1};_t.prototype.eval=function(s){for(let t=0;t<this.factors.length;t++){const e=this.factors[t];if(!s.eval(e))return!1}return!0};Ft.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos,r=this.getArity(),o=[],n=[];for(;o.length<r;)o.push([]),n.push([]);let i=0,a=e,u;for(;i<this.maxNumMatches&&s.eval(this.expr);){if(t.pos===a)throw ks(this,s._applicationStack);a=t.pos,i++;const v=s._bindings.splice(s._bindings.length-r,r),d=s._bindingOffsets.splice(s._bindingOffsets.length-r,r);for(u=0;u<v.length;u++)o[u].push(v[u]),n[u].push(d[u])}if(i<this.minNumMatches)return!1;let f=s.posToOffset(e),m=0;if(i>0){const v=o[r-1],d=n[r-1],y=d[d.length-1]+v[v.length-1].matchLength;f=n[0][0],m=y-f}const h=this instanceof ce;for(u=0;u<o.length;u++)s._bindings.push(new _s(o[u],n[u],m,h)),s._bindingOffsets.push(f);return!0};Nt.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos;s.pushFailuresInfo();const r=s.eval(this.expr);return s.popFailuresInfo(),r?(s.processFailure(e,this),!1):(t.pos=e,!0)};Lt.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos;return s.eval(this.expr)?(t.pos=e,!0):!1};pt.prototype.eval=function(s){const t=s.currentApplication(),e=t?t.args:[],r=this.substituteParams(e),o=s.getCurrentPosInfo();if(o.isActive(r))return r.handleCycle(s);const n=r.toMemoKey(),i=o.memo[n];if(i&&o.shouldUseMemoizedResult(i)){if(s.hasNecessaryInfo(i))return s.useMemoizedResult(s.inputStream.pos,i);delete o.memo[n]}return r.reallyEval(s)};pt.prototype.handleCycle=function(s){const t=s.getCurrentPosInfo(),{currentLeftRecursion:e}=t,r=this.toMemoKey();let o=t.memo[r];return e&&e.headApplication.toMemoKey()===r?o.updateInvolvedApplicationMemoKeys():o||(o=t.memoize(r,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),t.startLeftRecursion(this,o)),s.useMemoizedResult(s.inputStream.pos,o)};pt.prototype.reallyEval=function(s){const{inputStream:t}=s,e=t.pos,r=s.getCurrentPosInfo(),o=s.grammar.rules[this.ruleName],{body:n}=o,{description:i}=o;s.enterApplication(r,this),i&&s.pushFailuresInfo();const a=t.examinedLength;t.examinedLength=0;let u=this.evalOnce(n,s);const f=r.currentLeftRecursion,m=this.toMemoKey(),h=f&&f.headApplication.toMemoKey()===m;let v;s.doNotMemoize?s.doNotMemoize=!1:h?(u=this.growSeedResult(n,s,e,f,u),r.endLeftRecursion(),v=f,v.examinedLength=t.examinedLength-e,v.rightmostFailureOffset=s._getRightmostFailureOffset(),r.memoize(m,v)):(!f||!f.isInvolved(m))&&(v=r.memoize(m,{matchLength:t.pos-e,examinedLength:t.examinedLength-e,value:u,failuresAtRightmostPosition:s.cloneRecordedFailures(),rightmostFailureOffset:s._getRightmostFailureOffset()}));const d=!!u;if(i&&(s.popFailuresInfo(),d||s.processFailure(e,this),v&&(v.failuresAtRightmostPosition=s.cloneRecordedFailures())),s.isTracing()&&v){const y=s.getTraceEntry(e,this,d,d?[u]:[]);h&&(pe(y.terminatingLREntry!=null||!d),y.isHeadOfLeftRecursion=!0),v.traceEntry=y}return t.examinedLength=Math.max(t.examinedLength,a),s.exitApplication(r,u),d};pt.prototype.evalOnce=function(s,t){const{inputStream:e}=t,r=e.pos;if(t.eval(s)){const o=s.getArity(),n=t._bindings.splice(t._bindings.length-o,o),i=t._bindingOffsets.splice(t._bindingOffsets.length-o,o),a=e.pos-r;return new va(this.ruleName,n,i,a)}else return!1};pt.prototype.growSeedResult=function(s,t,e,r,o){if(!o)return!1;const{inputStream:n}=t;for(;;){if(r.matchLength=n.pos-e,r.value=o,r.failuresAtRightmostPosition=t.cloneRecordedFailures(),t.isTracing()){const i=t.trace[t.trace.length-1];r.traceEntry=new de(t.input,e,n.pos,this,!0,[o],[i.clone()])}if(n.pos=e,o=this.evalOnce(s,t),n.pos-e<=r.matchLength)break;t.isTracing()&&t.trace.splice(-2,1)}return t.isTracing()&&r.traceEntry.recordLRTermination(t.trace.pop(),o),n.pos=e+r.matchLength,r.value};St.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos,r=t.next();return r&&this.pattern.test(r)?(s.pushBinding(new ve(r.length),e),!0):(s.processFailure(e,this),!1)};nt.prototype.getArity=Dt("getArity");Tt.getArity=Mt.getArity=xt.prototype.getArity=Ct.prototype.getArity=Et.prototype.getArity=pt.prototype.getArity=St.prototype.getArity=function(){return 1};wt.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()};_t.prototype.getArity=function(){let s=0;for(let t=0;t<this.factors.length;t++)s+=this.factors[t].getArity();return s};Ft.prototype.getArity=function(){return this.expr.getArity()};Nt.prototype.getArity=function(){return 0};Lt.prototype.getArity=$t.prototype.getArity=function(){return this.expr.getArity()};function Jt(s,t){const e={};if(s.source&&t){const r=s.source.relativeTo(t);e.sourceInterval=[r.startIdx,r.endIdx]}return e}nt.prototype.outputRecipe=Dt("outputRecipe");Tt.outputRecipe=function(s,t){return["any",Jt(this,t)]};Mt.outputRecipe=function(s,t){return["end",Jt(this,t)]};xt.prototype.outputRecipe=function(s,t){return["terminal",Jt(this,t),this.obj]};Ct.prototype.outputRecipe=function(s,t){return["range",Jt(this,t),this.from,this.to]};Et.prototype.outputRecipe=function(s,t){return["param",Jt(this,t),this.index]};wt.prototype.outputRecipe=function(s,t){return["alt",Jt(this,t)].concat(this.terms.map(e=>e.outputRecipe(s,t)))};u0.prototype.outputRecipe=function(s,t){return this.terms[0].outputRecipe(s,t)};c0.prototype.outputRecipe=function(s,t){const e=this.terms.slice(0,this.expansionPos),r=this.terms.slice(this.expansionPos+1);return["splice",Jt(this,t),e.map(o=>o.outputRecipe(s,t)),r.map(o=>o.outputRecipe(s,t))]};_t.prototype.outputRecipe=function(s,t){return["seq",Jt(this,t)].concat(this.factors.map(e=>e.outputRecipe(s,t)))};ge.prototype.outputRecipe=Se.prototype.outputRecipe=ce.prototype.outputRecipe=Nt.prototype.outputRecipe=Lt.prototype.outputRecipe=$t.prototype.outputRecipe=function(s,t){return[this.constructor.name.toLowerCase(),Jt(this,t),this.expr.outputRecipe(s,t)]};pt.prototype.outputRecipe=function(s,t){return["app",Jt(this,t),this.ruleName,this.args.map(e=>e.outputRecipe(s,t))]};St.prototype.outputRecipe=function(s,t){return["unicodeChar",Jt(this,t),this.category]};nt.prototype.introduceParams=Dt("introduceParams");Tt.introduceParams=Mt.introduceParams=xt.prototype.introduceParams=Ct.prototype.introduceParams=Et.prototype.introduceParams=St.prototype.introduceParams=function(s){return this};wt.prototype.introduceParams=function(s){return this.terms.forEach((t,e,r)=>{r[e]=t.introduceParams(s)}),this};_t.prototype.introduceParams=function(s){return this.factors.forEach((t,e,r)=>{r[e]=t.introduceParams(s)}),this};Ft.prototype.introduceParams=Nt.prototype.introduceParams=Lt.prototype.introduceParams=$t.prototype.introduceParams=function(s){return this.expr=this.expr.introduceParams(s),this};pt.prototype.introduceParams=function(s){const t=s.indexOf(this.ruleName);if(t>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new Et(t).withSource(this.source)}else return this.args.forEach((e,r,o)=>{o[r]=e.introduceParams(s)}),this};nt.prototype.isNullable=function(s){return this._isNullable(s,Object.create(null))};nt.prototype._isNullable=Dt("_isNullable");Tt._isNullable=Ct.prototype._isNullable=Et.prototype._isNullable=Se.prototype._isNullable=St.prototype._isNullable=function(s,t){return!1};Mt._isNullable=function(s,t){return!0};xt.prototype._isNullable=function(s,t){return typeof this.obj=="string"?this.obj==="":!1};wt.prototype._isNullable=function(s,t){return this.terms.length===0||this.terms.some(e=>e._isNullable(s,t))};_t.prototype._isNullable=function(s,t){return this.factors.every(e=>e._isNullable(s,t))};ge.prototype._isNullable=ce.prototype._isNullable=Nt.prototype._isNullable=Lt.prototype._isNullable=function(s,t){return!0};$t.prototype._isNullable=function(s,t){return this.expr._isNullable(s,t)};pt.prototype._isNullable=function(s,t){const e=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(t,e)){const{body:r}=s.rules[this.ruleName],o=r.substituteParams(this.args);t[e]=!1,t[e]=o._isNullable(s,t)}return t[e]};nt.prototype.substituteParams=Dt("substituteParams");Tt.substituteParams=Mt.substituteParams=xt.prototype.substituteParams=Ct.prototype.substituteParams=St.prototype.substituteParams=function(s){return this};Et.prototype.substituteParams=function(s){return ms(s[this.index])};wt.prototype.substituteParams=function(s){return new wt(this.terms.map(t=>t.substituteParams(s)))};_t.prototype.substituteParams=function(s){return new _t(this.factors.map(t=>t.substituteParams(s)))};Ft.prototype.substituteParams=Nt.prototype.substituteParams=Lt.prototype.substituteParams=$t.prototype.substituteParams=function(s){return new this.constructor(this.expr.substituteParams(s))};pt.prototype.substituteParams=function(s){if(this.args.length===0)return this;{const t=this.args.map(e=>e.substituteParams(s));return new pt(this.ruleName,t)}};function T1(s){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(s)}function t1(s){const t=Object.create(null);s.forEach(e=>{t[e]=(t[e]||0)+1}),Object.keys(t).forEach(e=>{if(t[e]<=1)return;let r=1;s.forEach((o,n)=>{o===e&&(s[n]=o+"_"+r++)})})}nt.prototype.toArgumentNameList=Dt("toArgumentNameList");Tt.toArgumentNameList=function(s,t){return["any"]};Mt.toArgumentNameList=function(s,t){return["end"]};xt.prototype.toArgumentNameList=function(s,t){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+s]};Ct.prototype.toArgumentNameList=function(s,t){let e=this.from+"_to_"+this.to;return T1(e)||(e="_"+e),T1(e)||(e="$"+s),[e]};wt.prototype.toArgumentNameList=function(s,t){const e=this.terms.map(n=>n.toArgumentNameList(s,!0)),r=[],o=e[0].length;for(let n=0;n<o;n++){const i=[];for(let u=0;u<this.terms.length;u++)i.push(e[u][n]);const a=ds(i);r.push(a.join("_or_"))}return t||t1(r),r};_t.prototype.toArgumentNameList=function(s,t){let e=[];return this.factors.forEach(r=>{const o=r.toArgumentNameList(s,!0);e=e.concat(o),s+=o.length}),t||t1(e),e};Ft.prototype.toArgumentNameList=function(s,t){const e=this.expr.toArgumentNameList(s,t).map(r=>r[r.length-1]==="s"?r+"es":r+"s");return t||t1(e),e};ce.prototype.toArgumentNameList=function(s,t){return this.expr.toArgumentNameList(s,t).map(e=>"opt"+e[0].toUpperCase()+e.slice(1))};Nt.prototype.toArgumentNameList=function(s,t){return[]};Lt.prototype.toArgumentNameList=$t.prototype.toArgumentNameList=function(s,t){return this.expr.toArgumentNameList(s,t)};pt.prototype.toArgumentNameList=function(s,t){return[this.ruleName]};St.prototype.toArgumentNameList=function(s,t){return["$"+s]};Et.prototype.toArgumentNameList=function(s,t){return["param"+this.index]};nt.prototype.toDisplayString=Dt("toDisplayString");wt.prototype.toDisplayString=_t.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"};Tt.toDisplayString=Mt.toDisplayString=Ft.prototype.toDisplayString=Nt.prototype.toDisplayString=Lt.prototype.toDisplayString=$t.prototype.toDisplayString=xt.prototype.toDisplayString=Ct.prototype.toDisplayString=Et.prototype.toDisplayString=function(){return this.toString()};pt.prototype.toDisplayString=function(){if(this.args.length>0){const s=this.args.map(t=>t.toDisplayString());return this.ruleName+"<"+s.join(",")+">"}else return this.ruleName};St.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function ka(s){return s==="description"||s==="string"||s==="code"}class Ut{constructor(t,e,r){if(!ka(r))throw new Error("invalid Failure type: "+r);this.pexpr=t,this.text=e,this.type=r,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(t){return this.getText()===t.getText()&&this.type===t.type&&(!this.isFluffy()||this.isFluffy()&&t.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const t=new Ut(this.pexpr,this.text,this.type);return this.isFluffy()&&t.makeFluffy(),t}toKey(){return this.toString()+"#"+this.type}}nt.prototype.toFailure=Dt("toFailure");Tt.toFailure=function(s){return new Ut(this,"any object","description")};Mt.toFailure=function(s){return new Ut(this,"end of input","description")};xt.prototype.toFailure=function(s){return new Ut(this,this.obj,"string")};Ct.prototype.toFailure=function(s){return new Ut(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")};Nt.prototype.toFailure=function(s){const t=this.expr===Tt?"nothing":"not "+this.expr.toFailure(s);return new Ut(this,t,"description")};Lt.prototype.toFailure=function(s){return this.expr.toFailure(s)};pt.prototype.toFailure=function(s){let{description:t}=s.rules[this.ruleName];return t||(t=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new Ut(this,t,"description")};St.prototype.toFailure=function(s){return new Ut(this,"a Unicode ["+this.category+"] character","description")};wt.prototype.toFailure=function(s){const e="("+this.terms.map(r=>r.toFailure(s)).join(" or ")+")";return new Ut(this,e,"description")};_t.prototype.toFailure=function(s){const e="("+this.factors.map(r=>r.toFailure(s)).join(" ")+")";return new Ut(this,e,"description")};Ft.prototype.toFailure=function(s){const t="("+this.expr.toFailure(s)+this.operator+")";return new Ut(this,t,"description")};nt.prototype.toString=Dt("toString");Tt.toString=function(){return"any"};Mt.toString=function(){return"end"};xt.prototype.toString=function(){return JSON.stringify(this.obj)};Ct.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)};Et.prototype.toString=function(){return"$"+this.index};$t.prototype.toString=function(){return"#("+this.expr.toString()+")"};wt.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(s=>s.toString()).join(" | ")+")"};_t.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(s=>s.toString()).join(" ")+")"};Ft.prototype.toString=function(){return this.expr+this.operator};Nt.prototype.toString=function(){return"~"+this.expr};Lt.prototype.toString=function(){return"&"+this.expr};pt.prototype.toString=function(){if(this.args.length>0){const s=this.args.map(t=>t.toString());return this.ruleName+"<"+s.join(",")+">"}else return this.ruleName};St.prototype.toString=function(){return"\\p{"+this.category+"}"};class e1 extends nt{constructor(t){super(),this.obj=t}_getString(t){const e=t.currentApplication().args[this.obj.index];return pe(e instanceof xt,"expected a Terminal expression"),e.obj}allowsSkippingPrecedingSpace(){return!0}eval(t){const{inputStream:e}=t,r=e.pos,o=this._getString(t);return e.matchString(o,!0)?(t.pushBinding(new ve(o.length),r),!0):(t.processFailure(r,this),!1)}getArity(){return 1}substituteParams(t){return new e1(this.obj.substituteParams(t))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(t){return new Ut(this,this.obj.toFailure(t)+" (case-insensitive)","description")}_isNullable(t,e){return this.obj._isNullable(t,e)}}let As;bs(s=>{As=s.rules.applySyntactic.body});const b0=new pt("spaces");class ya{constructor(t,e,r){this.matcher=t,this.startExpr=e,this.grammar=t.grammar,this.input=t.getInput(),this.inputStream=new l0(this.input),this.memoTable=t._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],r!==void 0&&(this.positionToRecordFailures=r,this.recordedFailures=Object.create(null))}posToOffset(t){return t-this._posStack[this._posStack.length-1]}enterApplication(t,e){this._posStack.push(this.inputStream.pos),this._applicationStack.push(e),this.inLexifiedContextStack.push(!1),t.enter(e),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(t,e){const r=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),t.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),e&&this.pushBinding(e,r)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const t=this.currentApplication();return t?t.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(b0),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(t){return t.allowsSkippingPrecedingSpace()&&t!==b0?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(t,e){this._bindings.push(t),this._bindingOffsets.push(this.posToOffset(e))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(t){for(;this._bindings.length>t;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(t){let e=this.memoTable[t];return e||(e=this.memoTable[t]=new aa),e}processFailure(t,e){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,t),this.recordedFailures&&t===this.positionToRecordFailures){const r=this.currentApplication();r&&(e=e.substituteParams(r.args)),this.recordFailure(e.toFailure(this.grammar),!1)}}recordFailure(t,e){const r=t.toKey();this.recordedFailures[r]?this.recordedFailures[r].isFluffy()&&!t.isFluffy()&&this.recordedFailures[r].clearFluffy():this.recordedFailures[r]=e?t.clone():t}recordFailures(t,e){Object.keys(t).forEach(r=>{this.recordFailure(t[r],e)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const t=Object.create(null);return Object.keys(this.recordedFailures).forEach(e=>{t[e]=this.recordedFailures[e].clone()}),t}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(t,e){const r=this.memoTable[t];if(r&&e instanceof pt){const o=r.memo[e.toMemoKey()];if(o&&o.traceEntry){const n=o.traceEntry.cloneWithExpr(e);return n.isMemoized=!0,n}}return null}getTraceEntry(t,e,r,o){if(e instanceof pt){const n=this.currentApplication(),i=n?n.args:[];e=e.substituteParams(i)}return this.getMemoizedTraceEntry(t,e)||new de(this.input,t,this.inputStream.pos,e,r,o,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(t){return this.trace&&!t.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+t.rightmostFailureOffset===this.positionToRecordFailures?!!t.failuresAtRightmostPosition:!0}useMemoizedResult(t,e){this.trace&&this.trace.push(e.traceEntry);const r=this.inputStream.pos+e.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&this.positionToRecordFailures===r&&e.failuresAtRightmostPosition&&this.recordFailures(e.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,e.examinedLength+t),e.value?(this.inputStream.pos+=e.matchLength,this.pushBinding(e.value,t),!0):!1}eval(t){const{inputStream:e}=this,r=this._bindings.length,o=this.userData;let n;this.recordedFailures&&(n=this.recordedFailures,this.recordedFailures=Object.create(null));const i=e.pos,a=this.maybeSkipSpacesBefore(t);let u;this.trace&&(u=this.trace,this.trace=[]);const f=t.eval(this);if(this.trace){const m=this._bindings.slice(r),h=this.getTraceEntry(a,t,f,m);h.isImplicitSpaces=t===b0,h.isRootNode=t===this.startExpr,u.push(h),this.trace=u}return f?this.recordedFailures&&e.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(m=>{this.recordedFailures[m].makeFluffy()}):(e.pos=i,this.truncateBindings(r),this.userData=o),this.recordedFailures&&this.recordFailures(n,!1),t===As&&this.skipSpaces(),f}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let t;this.recordedFailures&&(t=Object.keys(this.recordedFailures).map(r=>this.recordedFailures[r]));const e=this._bindings[0];return e&&(e.grammar=this.grammar),new ws(this.matcher,this.input,this.startExpr,e,this._bindingOffsets[0],this.rightmostFailurePosition,t)}getTrace(){this.trace=[];const t=this.getMatchResult(),e=this.trace[this.trace.length-1];return e.result=t,e}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class ba{constructor(t){this.grammar=t,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(t){return this._input!==t&&this.replaceInputRange(0,this._input.length,t),this}replaceInputRange(t,e,r){const o=this._input,n=this._memoTable;if(t<0||t>o.length||e<0||e>o.length||t>e)throw new Error("Invalid indices: "+t+" and "+e);this._input=o.slice(0,t)+r+o.slice(e),this._input!==o&&n.length>0&&(this._isMemoTableStale=!0);const i=n.slice(e);n.length=t;for(let a=0;a<r.length;a++)n.push(void 0);for(const a of i)n.push(a);for(let a=0;a<t;a++){const u=n[a];u&&u.clearObsoleteEntries(a,t)}return this}match(t,e={incremental:!0}){return this._match(this._getStartExpr(t),{incremental:e.incremental,tracing:!1})}trace(t,e={incremental:!0}){return this._match(this._getStartExpr(t),{incremental:e.incremental,tracing:!0})}_match(t,e={}){const r={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...e};if(!r.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Vi(this.grammar);const o=new ya(this,t,r.positionToRecordFailures);return r.tracing?o.getTrace():o.getMatchResult()}_getStartExpr(t){const e=t||this.grammar.defaultStartRule;if(!e)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const r=this.grammar.parseApplication(e);return new _t([r,Mt])}}const Pe=[],O0=(s,t)=>Object.prototype.hasOwnProperty.call(s,t);class M1{constructor(t,e,r){this._node=t,this.source=e,this._baseInterval=r,t.isNonterminal()&&pe(e===r),this._childWrappers=[]}_forgetMemoizedResultFor(t){delete this._node[this._semantics.attributeKeys[t]],this.children.forEach(e=>{e._forgetMemoizedResultFor(t)})}child(t){if(!(0<=t&&t<this._node.numChildren()))return;let e=this._childWrappers[t];if(!e){const r=this._node.childAt(t),o=this._node.childOffsets[t],n=this._baseInterval.subInterval(o,r.matchLength),i=r.isNonterminal()?n:this._baseInterval;e=this._childWrappers[t]=this._semantics.wrap(r,n,i)}return e}_children(){for(let t=0;t<this._node.numChildren();t++)this.child(t);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(t){const e=t||[],r=e.map(i=>i._node),o=new _s(r,[],-1,!1),n=this._semantics.wrap(o,null,null);return n._childWrappers=e,n}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class zt{constructor(t,e){const r=this;if(this.grammar=t,this.checkedActionDicts=!1,this.Wrapper=class extends(e?e.Wrapper:M1){constructor(o,n,i){super(o,n,i),r.checkActionDictsIfHaventAlready(),this._semantics=r}toString(){return"[semantics wrapper for "+r.grammar.name+"]"}},this.super=e,e){if(!(t.equals(this.super.grammar)||t._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+t.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const o in this.attributes)Object.defineProperty(this.attributeKeys,o,{value:R1(o)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let t;for(t in this.operations)this.operations[t].checkActionDict(this.grammar);for(t in this.attributes)this.attributes[t].checkActionDict(this.grammar)}toRecipe(t){function e(o){return o.super!==zt.BuiltInSemantics._getSemantics()}let r=`(function(g) {
`;if(e(this)){r+="  var semantics = "+this.super.toRecipe(!0)+"(g";const o=this.super.grammar;let n=this.grammar;for(;n!==o;)r+=".superGrammar",n=n.superGrammar;r+=`);
`,r+="  return g.extendSemantics(semantics)"}else r+="  return g.createSemantics()";return["Operation","Attribute"].forEach(o=>{const n=this[o.toLowerCase()+"s"];Object.keys(n).forEach(i=>{const{actionDict:a,formals:u,builtInDefault:f}=n[i];let m=i;u.length>0&&(m+="("+u.join(", ")+")");let h;e(this)&&this.super[o.toLowerCase()+"s"][i]?h="extend"+o:h="add"+o,r+=`
    .`+h+"("+JSON.stringify(m)+", {";const v=[];Object.keys(a).forEach(d=>{if(a[d]!==f){let y=a[d].toString().trim();y=y.replace(/^.*\(/,"function("),v.push(`
      `+JSON.stringify(d)+": "+y)}}),r+=v.join(",")+`
    })`})}),r+=`;
  })`,t||(r=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+r+`(grammar);
  return semantics;
});
`),r}addOperationOrAttribute(t,e,r){const o=t+"s",n=C1(e,t),{name:i}=n,{formals:a}=n;this.assertNewName(i,t);const u=wa(t,i,h),f={_default:u};Object.keys(r).forEach(v=>{f[v]=r[v]});const m=t==="operation"?new Ne(i,a,f,u):new D0(i,f,u);m.checkActionDict(this.grammar),this[o][i]=m;function h(...v){const d=this._semantics[o][i];if(arguments.length!==d.formals.length)throw new Error("Invalid number of arguments passed to "+i+" "+t+" (expected "+d.formals.length+", got "+arguments.length+")");const y=Object.create(null);for(const[g,_]of Object.entries(v)){const k=d.formals[g];y[k]=_}const p=this.args;this.args=y;const b=d.execute(this._semantics,this);return this.args=p,b}t==="operation"?(this.Wrapper.prototype[i]=h,this.Wrapper.prototype[i].toString=function(){return"["+i+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,i,{get:h,configurable:!0}),Object.defineProperty(this.attributeKeys,i,{value:R1(i)}))}extendOperationOrAttribute(t,e,r){const o=t+"s";if(C1(e,"attribute"),!(this.super&&e in this.super[o]))throw new Error("Cannot extend "+t+" '"+e+"': did not inherit an "+t+" with that name");if(O0(this[o],e))throw new Error("Cannot extend "+t+" '"+e+"' again");const n=this[o][e].formals,i=this[o][e].actionDict,a=Object.create(i);Object.keys(r).forEach(u=>{a[u]=r[u]}),this[o][e]=t==="operation"?new Ne(e,n,a):new D0(e,a),this[o][e].checkActionDict(this.grammar)}assertNewName(t,e){if(O0(M1.prototype,t))throw new Error("Cannot add "+e+" '"+t+"': that's a reserved name");if(t in this.operations)throw new Error("Cannot add "+e+" '"+t+"': an operation with that name already exists");if(t in this.attributes)throw new Error("Cannot add "+e+" '"+t+"': an attribute with that name already exists")}wrap(t,e,r){const o=r||e;return t instanceof this.Wrapper?t:new this.Wrapper(t,e,o)}}function C1(s,t){if(!zt.prototypeGrammar)return pe(s.indexOf("(")===-1),{name:s,formals:[]};const e=zt.prototypeGrammar.match(s,t==="operation"?"OperationSignature":"AttributeSignature");if(e.failed())throw new Error(e.message);return zt.prototypeGrammarSemantics(e).parse()}function wa(s,t,e){return function(...r){const n=(this._semantics.operations[t]||this._semantics.attributes[t]).formals.map(i=>this.args[i]);if(!this.isIteration()&&r.length===1)return e.apply(r[0],n);throw ea(this.ctorName,t,s,Pe)}}zt.createSemantics=function(s,t){const e=new zt(s,t!==void 0?t:zt.BuiltInSemantics._getSemantics()),r=function(n){if(!(n instanceof ws))throw new TypeError("Semantics expected a MatchResult, but got "+J0(n));if(n.failed())throw new TypeError("cannot apply Semantics to "+n.toString());const i=n._cst;if(i.grammar!==s)throw new Error("Cannot use a MatchResult from grammar '"+i.grammar.name+"' with a semantics for '"+s.name+"'");const a=new l0(n.input);return e.wrap(i,a.interval(n._cstOffset,n.input.length))};return r.addOperation=function(o,n){return e.addOperationOrAttribute("operation",o,n),r},r.extendOperation=function(o,n){return e.extendOperationOrAttribute("operation",o,n),r},r.addAttribute=function(o,n){return e.addOperationOrAttribute("attribute",o,n),r},r.extendAttribute=function(o,n){return e.extendOperationOrAttribute("attribute",o,n),r},r._getActionDict=function(o){const n=e.operations[o]||e.attributes[o];if(!n)throw new Error('"'+o+'" is not a valid operation or attribute name in this semantics for "'+s.name+'"');return n.actionDict},r._remove=function(o){let n;return o in e.operations?(n=e.operations[o],delete e.operations[o]):o in e.attributes&&(n=e.attributes[o],delete e.attributes[o]),delete e.Wrapper.prototype[o],n},r.getOperationNames=function(){return Object.keys(e.operations)},r.getAttributeNames=function(){return Object.keys(e.attributes)},r.getGrammar=function(){return e.grammar},r.toRecipe=function(o){return e.toRecipe(o)},r.toString=e.toString.bind(e),r._getSemantics=function(){return e},r};class Ne{constructor(t,e,r,o){this.name=t,this.formals=e,this.actionDict=r,this.builtInDefault=o}checkActionDict(t){t._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(t,e){try{const{ctorName:r}=e._node;let o=this.actionDict[r];return o?(Pe.push([this,r]),o.apply(e,e._children())):e.isNonterminal()&&(o=this.actionDict._nonterminal,o)?(Pe.push([this,"_nonterminal",r]),o.apply(e,e._children())):(Pe.push([this,"default action",r]),this.actionDict._default.apply(e,e._children()))}finally{Pe.pop()}}}Ne.prototype.typeName="operation";class D0 extends Ne{constructor(t,e,r){super(t,[],e,r)}execute(t,e){const r=e._node,o=t.attributeKeys[this.name];return O0(r,o)||(r[o]=Ne.prototype.execute.call(this,t,e)),r[o]}}D0.prototype.typeName="attribute";const E1=["_iter","_terminal","_nonterminal","_default"];function P1(s){return Object.keys(s.rules).sort().map(t=>s.rules[t])}const Ba=s=>s.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Ss,xs;class Ot{constructor(t,e,r,o){if(this.name=t,this.superGrammar=e,this.rules=r,o){if(!(o in r))throw new Error("Invalid start rule: '"+o+"' is not a rule in grammar '"+t+"'");this.defaultStartRule=o}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new ba(this)}isBuiltIn(){return this===Ot.ProtoBuiltInRules||this===Ot.BuiltInRules}equals(t){if(this===t)return!0;if(t==null||this.name!==t.name||this.defaultStartRule!==t.defaultStartRule||!(this.superGrammar===t.superGrammar||this.superGrammar.equals(t.superGrammar)))return!1;const e=P1(this),r=P1(t);return e.length===r.length&&e.every((o,n)=>o.description===r[n].description&&o.formals.join(",")===r[n].formals.join(",")&&o.body.toString()===r[n].body.toString())}match(t,e){const r=this.matcher();return r.replaceInputRange(0,0,t),r.match(e)}trace(t,e){const r=this.matcher();return r.replaceInputRange(0,0,t),r.trace(e)}createSemantics(){return zt.createSemantics(this)}extendSemantics(t){return zt.createSemantics(this,t._getSemantics())}_checkTopDownActionDict(t,e,r){const o=[];for(const n in r){const i=r[n];if(!E1.includes(n)&&!(n in this.rules)){o.push(`'${n}' is not a valid semantic action for '${this.name}'`);continue}if(typeof i!="function"){o.push(`'${n}' must be a function in an action dictionary for '${this.name}'`);continue}const u=i.length,f=this._topDownActionArity(n);if(u!==f){let m;n==="_iter"||n==="_nonterminal"?m=`it should use a rest parameter, e.g. \`${n}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:m=`expected ${f}, got ${u}`,o.push(`Semantic action '${n}' has the wrong arity: ${m}`)}}if(o.length>0){const n=o.map(a=>"- "+a),i=new Error([`Found errors in the action dictionary of the '${e}' ${t}:`,...n].join(`
`));throw i.problems=o,i}}_topDownActionArity(t){return E1.includes(t)?0:this.rules[t].body.getArity()}_inheritsFrom(t){let e=this.superGrammar;for(;e;){if(e.equals(t,!0))return!0;e=e.superGrammar}return!1}toRecipe(t=void 0){const e={};this.source&&(e.source=this.source.contents);let r=null;this.defaultStartRule&&(r=this.defaultStartRule);const o={};Object.keys(this.rules).forEach(a=>{const u=this.rules[a],{body:f}=u,m=!this.superGrammar||!this.superGrammar.rules[a];let h;m?h="define":h=f instanceof u0?"extend":"override";const v={};if(u.source&&this.source){const p=u.source.relativeTo(this.source);v.sourceInterval=[p.startIdx,p.endIdx]}const d=m?u.description:null,y=f.outputRecipe(u.formals,this.source);o[a]=[h,v,d,u.formals,y]});let n="null";t?n=t:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(n=this.superGrammar.toRecipe());const i=[...["grammar",e,this.name].map(JSON.stringify),n,...[r,o].map(JSON.stringify)];return Ba(`[${i.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const t=new me;t.append("{");let e=!0;for(const r in this.rules){const{body:o}=this.rules[r];e?e=!1:t.append(","),t.append(`
`),t.append("  "),this.addSemanticActionTemplate(r,o,t)}return t.append(`
}`),t.contents()}addSemanticActionTemplate(t,e,r){r.append(t),r.append(": function(");const o=this._topDownActionArity(t);r.append(a0("_",o).join(", ")),r.append(`) {
`),r.append("  }")}parseApplication(t){let e;if(t.indexOf("<")===-1)e=new pt(t);else{const o=Ss.match(t,"Base_application");e=xs(o,{})}if(!(e.ruleName in this.rules))throw gs(e.ruleName,this.name);const{formals:r}=this.rules[e.ruleName];if(r.length!==e.args.length){const{source:o}=this.rules[e.ruleName];throw vs(e.ruleName,r.length,e.args.length,o)}return e}_setUpMatchState(t){this._matchStateInitializer&&this._matchStateInitializer(t)}}Ot.ProtoBuiltInRules=new Ot("ProtoBuiltInRules",void 0,{any:{body:Tt,formals:[],description:"any character",primitive:!0},end:{body:Mt,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new e1(new Et(0)),formals:["str"],primitive:!0},lower:{body:new St("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new St("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new St("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ge(new pt("space")),formals:[]},space:{body:new Ct("\0"," "),formals:[],description:"a space"}});Ot.initApplicationParser=function(s,t){Ss=s,xs=t};class O1{constructor(t){this.name=t}sourceInterval(t,e){return this.source.subInterval(t,e-t)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?Ot.ProtoBuiltInRules:Ot.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(t,e){const r=this.ensureSuperGrammar().rules[t];if(!r)throw Wi(t,this.superGrammar.name,e);return r}installOverriddenOrExtendedRule(t,e,r,o){const n=M0(e);if(n.length>0)throw S1(t,n,o);const i=this.ensureSuperGrammar().rules[t],a=i.formals,u=a?a.length:0;if(e.length!==u)throw vs(t,u,e.length,o);return this.install(t,e,r,i.description,o)}install(t,e,r,o,n,i=!1){return this.rules[t]={body:r.introduceParams(e),formals:e,description:o,source:n,primitive:i},this}withSuperGrammar(t){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=t,this.rules=Object.create(t.rules),t.isBuiltIn()||(this.defaultStartRule=t.defaultStartRule),this}withDefaultStartRule(t){return this.defaultStartRule=t,this}withSource(t){return this.source=new l0(t).interval(0,t.length),this}build(){const t=new Ot(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);t._matchStateInitializer=t.superGrammar._matchStateInitializer,t.supportsIncrementalParsing=t.superGrammar.supportsIncrementalParsing;const e=[];let r=!1;return Object.keys(t.rules).forEach(o=>{const{body:n}=t.rules[o];try{n.assertChoicesHaveUniformArity(o)}catch(i){e.push(i)}try{n.assertAllApplicationsAreValid(o,t)}catch(i){e.push(i),r=!0}}),r||Object.keys(t.rules).forEach(o=>{const{body:n}=t.rules[o];try{n.assertIteratedExprsAreNotNullable(t,[])}catch(i){e.push(i)}}),e.length>0&&sa(e),this.source&&(t.source=this.source),t}define(t,e,r,o,n,i){if(this.ensureSuperGrammar(),this.superGrammar.rules[t])throw A1(t,this.name,this.superGrammar.name,n);if(this.rules[t])throw A1(t,this.name,this.name,n);const a=M0(e);if(a.length>0)throw S1(t,a,n);return this.install(t,e,r,o,n,i)}override(t,e,r,o,n){return this.ensureSuperGrammarRuleForOverriding(t,n),this.installOverriddenOrExtendedRule(t,e,r,n),this}extend(t,e,r,o,n){if(!this.ensureSuperGrammar().rules[t])throw Hi(t,this.superGrammar.name,n);const a=new u0(this.superGrammar,t,r);return a.source=r.source,this.installOverriddenOrExtendedRule(t,e,a,n),this}}class t0{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(t){return new O1(t)}grammar(t,e,r,o,n){const i=new O1(e);return r&&i.withSuperGrammar(r instanceof Ot?r:this.fromRecipe(r)),o&&i.withDefaultStartRule(o),t&&t.source&&i.withSource(t.source),this.currentDecl=i,Object.keys(n).forEach(a=>{this.currentRuleName=a;const u=n[a],f=u[0],m=u[1],h=u[2],v=u[3],d=this.fromRecipe(u[4]);let y;i.source&&m&&m.sourceInterval&&(y=i.source.subInterval(m.sourceInterval[0],m.sourceInterval[1]-m.sourceInterval[0])),i[f](a,v,d,h,y)}),this.currentRuleName=this.currentDecl=null,i.build()}terminal(t){return new xt(t)}range(t,e){return new Ct(t,e)}param(t){return new Et(t)}alt(...t){let e=[];for(let r of t)r instanceof nt||(r=this.fromRecipe(r)),r instanceof wt?e=e.concat(r.terms):e.push(r);return e.length===1?e[0]:new wt(e)}seq(...t){let e=[];for(let r of t)r instanceof nt||(r=this.fromRecipe(r)),r instanceof _t?e=e.concat(r.factors):e.push(r);return e.length===1?e[0]:new _t(e)}star(t){return t instanceof nt||(t=this.fromRecipe(t)),new ge(t)}plus(t){return t instanceof nt||(t=this.fromRecipe(t)),new Se(t)}opt(t){return t instanceof nt||(t=this.fromRecipe(t)),new ce(t)}not(t){return t instanceof nt||(t=this.fromRecipe(t)),new Nt(t)}lookahead(t){return t instanceof nt||(t=this.fromRecipe(t)),new Lt(t)}lex(t){return t instanceof nt||(t=this.fromRecipe(t)),new $t(t)}app(t,e){return e&&e.length>0&&(e=e.map(function(r){return r instanceof nt?r:this.fromRecipe(r)},this)),new pt(t,e)}splice(t,e){return new c0(this.currentDecl.superGrammar,this.currentRuleName,t.map(r=>this.fromRecipe(r)),e.map(r=>this.fromRecipe(r)))}fromRecipe(t){const e=t[0]==="grammar"?t.slice(1):t.slice(2),r=this[t[0]](...e),o=t[1];return o&&o.sourceInterval&&this.currentDecl&&r.withSource(this.currentDecl.sourceInterval(...o.sourceInterval)),r}}function s1(s){return typeof s=="function"?s.call(new t0):(typeof s=="string"&&(s=JSON.parse(s)),new t0().fromRecipe(s))}const r1=s1(["grammar",{source:`BuiltInRules {

  alnum  (an alpha-numeric character)
    = letter
    | digit

  letter  (a letter)
    = lower
    | upper
    | unicodeLtmo

  digit  (a digit)
    = "0".."9"

  hexDigit  (a hexadecimal digit)
    = digit
    | "a".."f"
    | "A".."F"

  ListOf<elem, sep>
    = NonemptyListOf<elem, sep>
    | EmptyListOf<elem, sep>

  NonemptyListOf<elem, sep>
    = elem (sep elem)*

  EmptyListOf<elem, sep>
    = /* nothing */

  listOf<elem, sep>
    = nonemptyListOf<elem, sep>
    | emptyListOf<elem, sep>

  nonemptyListOf<elem, sep>
    = elem (sep elem)*

  emptyListOf<elem, sep>
    = /* nothing */

  // Allows a syntactic rule application within a lexical context.
  applySyntactic<app> = app
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);Ot.BuiltInRules=r1;na(Ot.BuiltInRules);const o1=s1(["grammar",{source:`Ohm {

  Grammars
    = Grammar*

  Grammar
    = ident SuperGrammar? "{" Rule* "}"

  SuperGrammar
    = "<:" ident

  Rule
    = ident Formals? ruleDescr? "="  RuleBody  -- define
    | ident Formals?            ":=" OverrideRuleBody  -- override
    | ident Formals?            "+=" RuleBody  -- extend

  RuleBody
    = "|"? NonemptyListOf<TopLevelTerm, "|">

  TopLevelTerm
    = Seq caseName  -- inline
    | Seq

  OverrideRuleBody
    = "|"? NonemptyListOf<OverrideTopLevelTerm, "|">

  OverrideTopLevelTerm
    = "..."  -- superSplice
    | TopLevelTerm

  Formals
    = "<" ListOf<ident, ","> ">"

  Params
    = "<" ListOf<Seq, ","> ">"

  Alt
    = NonemptyListOf<Seq, "|">

  Seq
    = Iter*

  Iter
    = Pred "*"  -- star
    | Pred "+"  -- plus
    | Pred "?"  -- opt
    | Pred

  Pred
    = "~" Lex  -- not
    | "&" Lex  -- lookahead
    | Lex

  Lex
    = "#" Base  -- lex
    | Base

  Base
    = ident Params? ~(ruleDescr? "=" | ":=" | "+=")  -- application
    | oneCharTerminal ".." oneCharTerminal           -- range
    | terminal                                       -- terminal
    | "(" Alt ")"                                    -- paren

  ruleDescr  (a rule description)
    = "(" ruleDescrText ")"

  ruleDescrText
    = (~")" any)*

  caseName
    = "--" (~"\\n" space)* name (~"\\n" space)* ("\\n" | &"}")

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

  ident  (an identifier)
    = name

  terminal
    = "\\"" terminalChar* "\\""

  oneCharTerminal
    = "\\"" terminalChar "\\""

  terminalChar
    = escapeChar
      | ~"\\\\" ~"\\"" ~"\\n" "\\u{0}".."\\u{10FFFF}"

  escapeChar  (an escape sequence)
    = "\\\\\\\\"                                     -- backslash
    | "\\\\\\""                                     -- doubleQuote
    | "\\\\\\'"                                     -- singleQuote
    | "\\\\b"                                      -- backspace
    | "\\\\n"                                      -- lineFeed
    | "\\\\r"                                      -- carriageReturn
    | "\\\\t"                                      -- tab
    | "\\\\u{" hexDigit hexDigit? hexDigit?
             hexDigit? hexDigit? hexDigit? "}"   -- unicodeCodePoint
    | "\\\\u" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape
    | "\\\\x" hexDigit hexDigit                    -- hexEscape

  space
   += comment

  comment
    = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
    | "/*" (~"*/" any)* "*/"  -- multiLine

  tokens = token*

  token = caseName | comment | ident | operator | punctuation | terminal | any

  operator = "<:" | "=" | ":=" | "+=" | "*" | "+" | "?" | "~" | "&"

  punctuation = "<" | ">" | "," | "--"
}`},"Ohm",null,"Grammars",{Grammars:["define",{sourceInterval:[9,32]},null,[],["star",{sourceInterval:[24,32]},["app",{sourceInterval:[24,31]},"Grammar",[]]]],Grammar:["define",{sourceInterval:[36,83]},null,[],["seq",{sourceInterval:[50,83]},["app",{sourceInterval:[50,55]},"ident",[]],["opt",{sourceInterval:[56,69]},["app",{sourceInterval:[56,68]},"SuperGrammar",[]]],["terminal",{sourceInterval:[70,73]},"{"],["star",{sourceInterval:[74,79]},["app",{sourceInterval:[74,78]},"Rule",[]]],["terminal",{sourceInterval:[80,83]},"}"]]],SuperGrammar:["define",{sourceInterval:[87,116]},null,[],["seq",{sourceInterval:[106,116]},["terminal",{sourceInterval:[106,110]},"<:"],["app",{sourceInterval:[111,116]},"ident",[]]]],Rule_define:["define",{sourceInterval:[131,181]},null,[],["seq",{sourceInterval:[131,170]},["app",{sourceInterval:[131,136]},"ident",[]],["opt",{sourceInterval:[137,145]},["app",{sourceInterval:[137,144]},"Formals",[]]],["opt",{sourceInterval:[146,156]},["app",{sourceInterval:[146,155]},"ruleDescr",[]]],["terminal",{sourceInterval:[157,160]},"="],["app",{sourceInterval:[162,170]},"RuleBody",[]]]],Rule_override:["define",{sourceInterval:[188,248]},null,[],["seq",{sourceInterval:[188,235]},["app",{sourceInterval:[188,193]},"ident",[]],["opt",{sourceInterval:[194,202]},["app",{sourceInterval:[194,201]},"Formals",[]]],["terminal",{sourceInterval:[214,218]},":="],["app",{sourceInterval:[219,235]},"OverrideRuleBody",[]]]],Rule_extend:["define",{sourceInterval:[255,305]},null,[],["seq",{sourceInterval:[255,294]},["app",{sourceInterval:[255,260]},"ident",[]],["opt",{sourceInterval:[261,269]},["app",{sourceInterval:[261,268]},"Formals",[]]],["terminal",{sourceInterval:[281,285]},"+="],["app",{sourceInterval:[286,294]},"RuleBody",[]]]],Rule:["define",{sourceInterval:[120,305]},null,[],["alt",{sourceInterval:[131,305]},["app",{sourceInterval:[131,170]},"Rule_define",[]],["app",{sourceInterval:[188,235]},"Rule_override",[]],["app",{sourceInterval:[255,294]},"Rule_extend",[]]]],RuleBody:["define",{sourceInterval:[309,362]},null,[],["seq",{sourceInterval:[324,362]},["opt",{sourceInterval:[324,328]},["terminal",{sourceInterval:[324,327]},"|"]],["app",{sourceInterval:[329,362]},"NonemptyListOf",[["app",{sourceInterval:[344,356]},"TopLevelTerm",[]],["terminal",{sourceInterval:[358,361]},"|"]]]]],TopLevelTerm_inline:["define",{sourceInterval:[385,408]},null,[],["seq",{sourceInterval:[385,397]},["app",{sourceInterval:[385,388]},"Seq",[]],["app",{sourceInterval:[389,397]},"caseName",[]]]],TopLevelTerm:["define",{sourceInterval:[366,418]},null,[],["alt",{sourceInterval:[385,418]},["app",{sourceInterval:[385,397]},"TopLevelTerm_inline",[]],["app",{sourceInterval:[415,418]},"Seq",[]]]],OverrideRuleBody:["define",{sourceInterval:[422,491]},null,[],["seq",{sourceInterval:[445,491]},["opt",{sourceInterval:[445,449]},["terminal",{sourceInterval:[445,448]},"|"]],["app",{sourceInterval:[450,491]},"NonemptyListOf",[["app",{sourceInterval:[465,485]},"OverrideTopLevelTerm",[]],["terminal",{sourceInterval:[487,490]},"|"]]]]],OverrideTopLevelTerm_superSplice:["define",{sourceInterval:[522,543]},null,[],["terminal",{sourceInterval:[522,527]},"..."]],OverrideTopLevelTerm:["define",{sourceInterval:[495,562]},null,[],["alt",{sourceInterval:[522,562]},["app",{sourceInterval:[522,527]},"OverrideTopLevelTerm_superSplice",[]],["app",{sourceInterval:[550,562]},"TopLevelTerm",[]]]],Formals:["define",{sourceInterval:[566,606]},null,[],["seq",{sourceInterval:[580,606]},["terminal",{sourceInterval:[580,583]},"<"],["app",{sourceInterval:[584,602]},"ListOf",[["app",{sourceInterval:[591,596]},"ident",[]],["terminal",{sourceInterval:[598,601]},","]]],["terminal",{sourceInterval:[603,606]},">"]]],Params:["define",{sourceInterval:[610,647]},null,[],["seq",{sourceInterval:[623,647]},["terminal",{sourceInterval:[623,626]},"<"],["app",{sourceInterval:[627,643]},"ListOf",[["app",{sourceInterval:[634,637]},"Seq",[]],["terminal",{sourceInterval:[639,642]},","]]],["terminal",{sourceInterval:[644,647]},">"]]],Alt:["define",{sourceInterval:[651,685]},null,[],["app",{sourceInterval:[661,685]},"NonemptyListOf",[["app",{sourceInterval:[676,679]},"Seq",[]],["terminal",{sourceInterval:[681,684]},"|"]]]],Seq:["define",{sourceInterval:[689,704]},null,[],["star",{sourceInterval:[699,704]},["app",{sourceInterval:[699,703]},"Iter",[]]]],Iter_star:["define",{sourceInterval:[719,736]},null,[],["seq",{sourceInterval:[719,727]},["app",{sourceInterval:[719,723]},"Pred",[]],["terminal",{sourceInterval:[724,727]},"*"]]],Iter_plus:["define",{sourceInterval:[743,760]},null,[],["seq",{sourceInterval:[743,751]},["app",{sourceInterval:[743,747]},"Pred",[]],["terminal",{sourceInterval:[748,751]},"+"]]],Iter_opt:["define",{sourceInterval:[767,783]},null,[],["seq",{sourceInterval:[767,775]},["app",{sourceInterval:[767,771]},"Pred",[]],["terminal",{sourceInterval:[772,775]},"?"]]],Iter:["define",{sourceInterval:[708,794]},null,[],["alt",{sourceInterval:[719,794]},["app",{sourceInterval:[719,727]},"Iter_star",[]],["app",{sourceInterval:[743,751]},"Iter_plus",[]],["app",{sourceInterval:[767,775]},"Iter_opt",[]],["app",{sourceInterval:[790,794]},"Pred",[]]]],Pred_not:["define",{sourceInterval:[809,824]},null,[],["seq",{sourceInterval:[809,816]},["terminal",{sourceInterval:[809,812]},"~"],["app",{sourceInterval:[813,816]},"Lex",[]]]],Pred_lookahead:["define",{sourceInterval:[831,852]},null,[],["seq",{sourceInterval:[831,838]},["terminal",{sourceInterval:[831,834]},"&"],["app",{sourceInterval:[835,838]},"Lex",[]]]],Pred:["define",{sourceInterval:[798,862]},null,[],["alt",{sourceInterval:[809,862]},["app",{sourceInterval:[809,816]},"Pred_not",[]],["app",{sourceInterval:[831,838]},"Pred_lookahead",[]],["app",{sourceInterval:[859,862]},"Lex",[]]]],Lex_lex:["define",{sourceInterval:[876,892]},null,[],["seq",{sourceInterval:[876,884]},["terminal",{sourceInterval:[876,879]},"#"],["app",{sourceInterval:[880,884]},"Base",[]]]],Lex:["define",{sourceInterval:[866,903]},null,[],["alt",{sourceInterval:[876,903]},["app",{sourceInterval:[876,884]},"Lex_lex",[]],["app",{sourceInterval:[899,903]},"Base",[]]]],Base_application:["define",{sourceInterval:[918,979]},null,[],["seq",{sourceInterval:[918,963]},["app",{sourceInterval:[918,923]},"ident",[]],["opt",{sourceInterval:[924,931]},["app",{sourceInterval:[924,930]},"Params",[]]],["not",{sourceInterval:[932,963]},["alt",{sourceInterval:[934,962]},["seq",{sourceInterval:[934,948]},["opt",{sourceInterval:[934,944]},["app",{sourceInterval:[934,943]},"ruleDescr",[]]],["terminal",{sourceInterval:[945,948]},"="]],["terminal",{sourceInterval:[951,955]},":="],["terminal",{sourceInterval:[958,962]},"+="]]]]],Base_range:["define",{sourceInterval:[986,1041]},null,[],["seq",{sourceInterval:[986,1022]},["app",{sourceInterval:[986,1001]},"oneCharTerminal",[]],["terminal",{sourceInterval:[1002,1006]},".."],["app",{sourceInterval:[1007,1022]},"oneCharTerminal",[]]]],Base_terminal:["define",{sourceInterval:[1048,1106]},null,[],["app",{sourceInterval:[1048,1056]},"terminal",[]]],Base_paren:["define",{sourceInterval:[1113,1168]},null,[],["seq",{sourceInterval:[1113,1124]},["terminal",{sourceInterval:[1113,1116]},"("],["app",{sourceInterval:[1117,1120]},"Alt",[]],["terminal",{sourceInterval:[1121,1124]},")"]]],Base:["define",{sourceInterval:[907,1168]},null,[],["alt",{sourceInterval:[918,1168]},["app",{sourceInterval:[918,963]},"Base_application",[]],["app",{sourceInterval:[986,1022]},"Base_range",[]],["app",{sourceInterval:[1048,1056]},"Base_terminal",[]],["app",{sourceInterval:[1113,1124]},"Base_paren",[]]]],ruleDescr:["define",{sourceInterval:[1172,1231]},"a rule description",[],["seq",{sourceInterval:[1210,1231]},["terminal",{sourceInterval:[1210,1213]},"("],["app",{sourceInterval:[1214,1227]},"ruleDescrText",[]],["terminal",{sourceInterval:[1228,1231]},")"]]],ruleDescrText:["define",{sourceInterval:[1235,1266]},null,[],["star",{sourceInterval:[1255,1266]},["seq",{sourceInterval:[1256,1264]},["not",{sourceInterval:[1256,1260]},["terminal",{sourceInterval:[1257,1260]},")"]],["app",{sourceInterval:[1261,1264]},"any",[]]]]],caseName:["define",{sourceInterval:[1270,1338]},null,[],["seq",{sourceInterval:[1285,1338]},["terminal",{sourceInterval:[1285,1289]},"--"],["star",{sourceInterval:[1290,1304]},["seq",{sourceInterval:[1291,1302]},["not",{sourceInterval:[1291,1296]},["terminal",{sourceInterval:[1292,1296]},`
`]],["app",{sourceInterval:[1297,1302]},"space",[]]]],["app",{sourceInterval:[1305,1309]},"name",[]],["star",{sourceInterval:[1310,1324]},["seq",{sourceInterval:[1311,1322]},["not",{sourceInterval:[1311,1316]},["terminal",{sourceInterval:[1312,1316]},`
`]],["app",{sourceInterval:[1317,1322]},"space",[]]]],["alt",{sourceInterval:[1326,1337]},["terminal",{sourceInterval:[1326,1330]},`
`],["lookahead",{sourceInterval:[1333,1337]},["terminal",{sourceInterval:[1334,1337]},"}"]]]]],name:["define",{sourceInterval:[1342,1382]},"a name",[],["seq",{sourceInterval:[1363,1382]},["app",{sourceInterval:[1363,1372]},"nameFirst",[]],["star",{sourceInterval:[1373,1382]},["app",{sourceInterval:[1373,1381]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[1386,1418]},null,[],["alt",{sourceInterval:[1402,1418]},["terminal",{sourceInterval:[1402,1405]},"_"],["app",{sourceInterval:[1412,1418]},"letter",[]]]],nameRest:["define",{sourceInterval:[1422,1452]},null,[],["alt",{sourceInterval:[1437,1452]},["terminal",{sourceInterval:[1437,1440]},"_"],["app",{sourceInterval:[1447,1452]},"alnum",[]]]],ident:["define",{sourceInterval:[1456,1489]},"an identifier",[],["app",{sourceInterval:[1485,1489]},"name",[]]],terminal:["define",{sourceInterval:[1493,1531]},null,[],["seq",{sourceInterval:[1508,1531]},["terminal",{sourceInterval:[1508,1512]},'"'],["star",{sourceInterval:[1513,1526]},["app",{sourceInterval:[1513,1525]},"terminalChar",[]]],["terminal",{sourceInterval:[1527,1531]},'"']]],oneCharTerminal:["define",{sourceInterval:[1535,1579]},null,[],["seq",{sourceInterval:[1557,1579]},["terminal",{sourceInterval:[1557,1561]},'"'],["app",{sourceInterval:[1562,1574]},"terminalChar",[]],["terminal",{sourceInterval:[1575,1579]},'"']]],terminalChar:["define",{sourceInterval:[1583,1660]},null,[],["alt",{sourceInterval:[1602,1660]},["app",{sourceInterval:[1602,1612]},"escapeChar",[]],["seq",{sourceInterval:[1621,1660]},["not",{sourceInterval:[1621,1626]},["terminal",{sourceInterval:[1622,1626]},"\\"]],["not",{sourceInterval:[1627,1632]},["terminal",{sourceInterval:[1628,1632]},'"']],["not",{sourceInterval:[1633,1638]},["terminal",{sourceInterval:[1634,1638]},`
`]],["range",{sourceInterval:[1639,1660]},"\0","􏿿"]]]],escapeChar_backslash:["define",{sourceInterval:[1703,1758]},null,[],["terminal",{sourceInterval:[1703,1709]},"\\\\"]],escapeChar_doubleQuote:["define",{sourceInterval:[1765,1822]},null,[],["terminal",{sourceInterval:[1765,1771]},'\\"']],escapeChar_singleQuote:["define",{sourceInterval:[1829,1886]},null,[],["terminal",{sourceInterval:[1829,1835]},"\\'"]],escapeChar_backspace:["define",{sourceInterval:[1893,1948]},null,[],["terminal",{sourceInterval:[1893,1898]},"\\b"]],escapeChar_lineFeed:["define",{sourceInterval:[1955,2009]},null,[],["terminal",{sourceInterval:[1955,1960]},"\\n"]],escapeChar_carriageReturn:["define",{sourceInterval:[2016,2076]},null,[],["terminal",{sourceInterval:[2016,2021]},"\\r"]],escapeChar_tab:["define",{sourceInterval:[2083,2132]},null,[],["terminal",{sourceInterval:[2083,2088]},"\\t"]],escapeChar_unicodeCodePoint:["define",{sourceInterval:[2139,2243]},null,[],["seq",{sourceInterval:[2139,2221]},["terminal",{sourceInterval:[2139,2145]},"\\u{"],["app",{sourceInterval:[2146,2154]},"hexDigit",[]],["opt",{sourceInterval:[2155,2164]},["app",{sourceInterval:[2155,2163]},"hexDigit",[]]],["opt",{sourceInterval:[2165,2174]},["app",{sourceInterval:[2165,2173]},"hexDigit",[]]],["opt",{sourceInterval:[2188,2197]},["app",{sourceInterval:[2188,2196]},"hexDigit",[]]],["opt",{sourceInterval:[2198,2207]},["app",{sourceInterval:[2198,2206]},"hexDigit",[]]],["opt",{sourceInterval:[2208,2217]},["app",{sourceInterval:[2208,2216]},"hexDigit",[]]],["terminal",{sourceInterval:[2218,2221]},"}"]]],escapeChar_unicodeEscape:["define",{sourceInterval:[2250,2309]},null,[],["seq",{sourceInterval:[2250,2291]},["terminal",{sourceInterval:[2250,2255]},"\\u"],["app",{sourceInterval:[2256,2264]},"hexDigit",[]],["app",{sourceInterval:[2265,2273]},"hexDigit",[]],["app",{sourceInterval:[2274,2282]},"hexDigit",[]],["app",{sourceInterval:[2283,2291]},"hexDigit",[]]]],escapeChar_hexEscape:["define",{sourceInterval:[2316,2371]},null,[],["seq",{sourceInterval:[2316,2339]},["terminal",{sourceInterval:[2316,2321]},"\\x"],["app",{sourceInterval:[2322,2330]},"hexDigit",[]],["app",{sourceInterval:[2331,2339]},"hexDigit",[]]]],escapeChar:["define",{sourceInterval:[1664,2371]},"an escape sequence",[],["alt",{sourceInterval:[1703,2371]},["app",{sourceInterval:[1703,1709]},"escapeChar_backslash",[]],["app",{sourceInterval:[1765,1771]},"escapeChar_doubleQuote",[]],["app",{sourceInterval:[1829,1835]},"escapeChar_singleQuote",[]],["app",{sourceInterval:[1893,1898]},"escapeChar_backspace",[]],["app",{sourceInterval:[1955,1960]},"escapeChar_lineFeed",[]],["app",{sourceInterval:[2016,2021]},"escapeChar_carriageReturn",[]],["app",{sourceInterval:[2083,2088]},"escapeChar_tab",[]],["app",{sourceInterval:[2139,2221]},"escapeChar_unicodeCodePoint",[]],["app",{sourceInterval:[2250,2291]},"escapeChar_unicodeEscape",[]],["app",{sourceInterval:[2316,2339]},"escapeChar_hexEscape",[]]]],space:["extend",{sourceInterval:[2375,2394]},null,[],["app",{sourceInterval:[2387,2394]},"comment",[]]],comment_singleLine:["define",{sourceInterval:[2412,2458]},null,[],["seq",{sourceInterval:[2412,2443]},["terminal",{sourceInterval:[2412,2416]},"//"],["star",{sourceInterval:[2417,2429]},["seq",{sourceInterval:[2418,2427]},["not",{sourceInterval:[2418,2423]},["terminal",{sourceInterval:[2419,2423]},`
`]],["app",{sourceInterval:[2424,2427]},"any",[]]]],["lookahead",{sourceInterval:[2430,2443]},["alt",{sourceInterval:[2432,2442]},["terminal",{sourceInterval:[2432,2436]},`
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]),w0=Object.create(nt.prototype);function D1(s,t){for(const e in s)if(e===t)return!0;return!1}function Is(s,t,e){const r=new t0;let o,n,i,a=!1;return(e||o1).createSemantics().addOperation("visit",{Grammars(m){return m.children.map(h=>h.visit())},Grammar(m,h,v,d,y){const p=m.visit();o=r.newGrammar(p),h.child(0)&&h.child(0).visit(),d.children.map(g=>g.visit());const b=o.build();if(b.source=this.source.trimmed(),D1(t,p))throw Ui(b);return t[p]=b,b},SuperGrammar(m,h){const v=h.visit();if(v==="null")o.withSuperGrammar(null);else{if(!t||!D1(t,v))throw $i(v,t,h.source);o.withSuperGrammar(t[v])}},Rule_define(m,h,v,d,y){n=m.visit(),i=h.children.map(_=>_.visit())[0]||[],!o.defaultStartRule&&o.ensureSuperGrammar()!==Ot.ProtoBuiltInRules&&o.withDefaultStartRule(n);const p=y.visit(),b=v.children.map(_=>_.visit())[0],g=this.source.trimmed();return o.define(n,i,p,b,g)},Rule_override(m,h,v,d){n=m.visit(),i=h.children.map(b=>b.visit())[0]||[];const y=this.source.trimmed();o.ensureSuperGrammarRuleForOverriding(n,y),a=!0;const p=d.visit();return a=!1,o.override(n,i,p,null,y)},Rule_extend(m,h,v,d){n=m.visit(),i=h.children.map(b=>b.visit())[0]||[];const y=d.visit(),p=this.source.trimmed();return o.extend(n,i,y,null,p)},RuleBody(m,h){return r.alt(...h.visit()).withSource(this.source)},OverrideRuleBody(m,h){const v=h.visit(),d=v.indexOf(w0);if(d>=0){const y=v.slice(0,d),p=v.slice(d+1);return p.forEach(b=>{if(b===w0)throw Yi(b)}),new c0(o.superGrammar,n,y,p).withSource(this.source)}else return r.alt(...v).withSource(this.source)},Formals(m,h,v){return h.visit()},Params(m,h,v){return h.visit()},Alt(m){return r.alt(...m.visit()).withSource(this.source)},TopLevelTerm_inline(m,h){const v=n+"_"+h.visit(),d=m.visit(),y=this.source.trimmed(),p=!(o.superGrammar&&o.superGrammar.rules[v]);a&&!p?o.override(v,i,d,null,y):o.define(v,i,d,null,y);const b=i.map(g=>r.app(g));return r.app(v,b).withSource(d.source)},OverrideTopLevelTerm_superSplice(m){return w0},Seq(m){return r.seq(...m.children.map(h=>h.visit())).withSource(this.source)},Iter_star(m,h){return r.star(m.visit()).withSource(this.source)},Iter_plus(m,h){return r.plus(m.visit()).withSource(this.source)},Iter_opt(m,h){return r.opt(m.visit()).withSource(this.source)},Pred_not(m,h){return r.not(h.visit()).withSource(this.source)},Pred_lookahead(m,h){return r.lookahead(h.visit()).withSource(this.source)},Lex_lex(m,h){return r.lex(h.visit()).withSource(this.source)},Base_application(m,h){const v=h.children.map(d=>d.visit())[0]||[];return r.app(m.visit(),v).withSource(this.source)},Base_range(m,h,v){return r.range(m.visit(),v.visit()).withSource(this.source)},Base_terminal(m){return r.terminal(m.visit()).withSource(this.source)},Base_paren(m,h,v){return h.visit()},ruleDescr(m,h,v){return h.visit()},ruleDescrText(m){return this.sourceString.trim()},caseName(m,h,v,d,y){return v.visit()},name(m,h){return this.sourceString},nameFirst(m){},nameRest(m){},terminal(m,h,v){return h.children.map(d=>d.visit()).join("")},oneCharTerminal(m,h,v){return h.visit()},escapeChar(m){try{return fs(this.sourceString)}catch(h){throw h instanceof RangeError&&h.message.startsWith("Invalid code point ")?Qi(m):h}},NonemptyListOf(m,h,v){return[m.visit()].concat(v.children.map(d=>d.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(s).visit()}const _a=s1(["grammar",{source:`OperationsAndAttributes {

  AttributeSignature =
    name

  OperationSignature =
    name Formals?

  Formals
    = "(" ListOf<name, ","> ")"

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Aa(Ot.BuiltInRules);Sa(_a);function Aa(s){const t={empty(){return this.iteration()},nonEmpty(e,r,o){return this.iteration([e].concat(o.children))},self(...e){return this}};zt.BuiltInSemantics=zt.createSemantics(s,null).addOperation("asIteration",{emptyListOf:t.empty,nonemptyListOf:t.nonEmpty,EmptyListOf:t.empty,NonemptyListOf:t.nonEmpty,_iter:t.self})}function Sa(s){zt.prototypeGrammarSemantics=s.createSemantics().addOperation("parse",{AttributeSignature(t){return{name:t.parse(),formals:[]}},OperationSignature(t,e){return{name:t.parse(),formals:e.children.map(r=>r.parse())[0]||[]}},Formals(t,e,r){return e.asIteration().children.map(o=>o.parse())},name(t,e){return this.sourceString}}),zt.prototypeGrammar=s}function xa(s){let t=0;const e=[0],r=()=>e[e.length-1],o={},n=/( *).*(?:$|\r?\n|\r)/g;let i;for(;(i=n.exec(s))!=null;){const[a,u]=i;if(a.length===0)break;const f=u.length,m=r(),h=t+f;if(f>m)e.push(f),o[h]=1;else if(f<m){const v=e.length;for(;r()!==f;)e.pop();o[h]=-1*(v-e.length)}t+=a.length}return e.length>1&&(o[t]=1-e.length),o}const Rs="an indented block",Ts="a dedent",F1=1114112;class Ia extends l0{constructor(t){super(t.input),this.state=t}_indentationAt(t){return this.state.userData[t]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),F1):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),F1):super.nextCodePoint()}}class N1 extends nt{constructor(t=!0){super(),this.isIndent=t}allowsSkippingPrecedingSpace(){return!0}eval(t){const{inputStream:e}=t,r=t.userData;t.doNotMemoize=!0;const o=e.pos,n=this.isIndent?1:-1;return(r[o]||0)*n>0?(t.userData=Object.create(r),t.userData[o]-=n,t.pushBinding(new ve(0),o),!0):(t.processFailure(o,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(t,e){}_isNullable(t,e){return!1}assertChoicesHaveUniformArity(t){}assertIteratedExprsAreNotNullable(t){}introduceParams(t){return this}substituteParams(t){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(t){const e=this.isIndent?Rs:Ts;return new Ut(this,e,"description")}}const Ra=new pt("indent"),Ta=new pt("dedent"),Ma=new c0(r1,"any",[Ra,Ta],[]),Ca=new t0().newGrammar("IndentationSensitive").withSuperGrammar(r1).define("indent",[],new N1(!0),Rs,void 0,!0).define("dedent",[],new N1(!1),Ts,void 0,!0).extend("any",[],Ma,"any character",void 0).build();Object.assign(Ca,{_matchStateInitializer(s){s.userData=xa(s.input),s.inputStream=new Ia(s)},supportsIncrementalParsing:!1});Ot.initApplicationParser(o1,Is);const Ea=s=>!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s);function Pa(s,t){const e=o1.match(s,"Grammars");if(e.failed())throw ji(e);return Is(e,t)}function d0(s,t){const e=Oa(s,t),r=Object.keys(e);if(r.length===0)throw new Error("Missing grammar definition");if(r.length>1){const n=e[r[1]].source;throw new Error(Y0(n.sourceString,n.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return e[r[0]]}function Oa(s,t){const e=Object.create(t||{});if(typeof s!="string")if(Ea(s))s=s.toString();else throw new TypeError("Expected string as first argument, got "+J0(s));return Pa(s,e),e}const Da=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function Ve(s){return Da[s]??"X"}function We(s){switch(s){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function n1(s,t){return parseInt(s.replace(/[^\d a-f A-F +-.]/g,""),t)&65535}function Ms(s){return n1(s,16)}function Le(s){return n1(s,10)}function i1(s){return n1(s.replaceAll(" ",""),2)}function Fa(s){const t=Ve((s&61440)>>12),e=Ve((s&3840)>>8),r=Ve((s&240)>>4),o=Ve(s&15);return`0x${t}${e}${r}${o}`}function Na(s,t=16){const e=We((s&61440)>>12),r=We((s&3840)>>8),o=We((s&240)>>4),n=We(s&15);return`${e}${r}${o}${n}`.substring(16-t)}function La(s){return s=s&65535,s===32768?"-32768":s&32768?(s=~s+1&32767,`-${s}`):`${s}`}function za(s,t){s=s&65535,t=t&65535;let e=~(s&t);return e=e&65535,e}const ja=`
Base {
  Root = Value*

  At = at
  Bang = bang
  Bar = bar
  CloseAngle = closeAngle
  CloseBrace = closeBrace
  CloseParen = closeParen
  CloseSquare = closeSquare
  Comma = comma
  Dollar = dollar
  Dot = dot
  DoubleQuote = doubleQuote
  Equal = equal
  OpenAngle = openAngle
  OpenBrace = openBrace
  OpenParen = openParen
  OpenSquare = openSquare
  Percent = percent
  Semi = semi
  Underscore = underscore

  at = "@"
  bang = "!"
  bar = "|"
  closeAngle = ">"
  closeBrace = "}"
  closeParen = ")"
  closeSquare = "]"
  comma = ","
  dollar = "$"
  dot = "."
  doubleQuote = "\\""
  equal = "="
  minus = "-"
  newline = "\\r"? "\\n"
  openAngle = "<"
  openBrace = "{"
  openParen = "("
  openSquare = "["
  percent = "%"
  semi = ";"
  underscore = "_"
  colon = ":"

  Value = identifier | number | boolean

  boolean = true | false
  True = true
  False = false
  true = "true"
  false = "false"

  Name = identifier
  identifier = (letter|underscore|dot|dollar) (alnum|underscore|dot|dollar)*

  Number = number
  number = hexNumber | decNumber | binNumber
  binNumber = ("%B") ("0"|"1")+
  hexNumber = ("%X") hexDigit+
  decNumber = ("%D")? (wholeDec | realDec)
  wholeDec = minus? digit+
  realDec = minus? digit* "." digit+

  String = DoubleQuote (~doubleQuote any)* doubleQuote
  
  spaces := (lineComment | comment | space)*
  commentStart = "/*"
  commentEnd = "*/"
  comment = commentStart (~commentEnd any)* commentEnd
  lineCommentStart = "//"
  lineComment = lineCommentStart (~"\\n" any)*

  List<elem, sep> = NonemptyListOf<elem, sep> sep?
  EmptyList<elem, sep> = EmptyList<elem, sep> sep?
}`,p0={Base:d0(ja)},ke=p0.Base.createSemantics();ke.extendOperation("asIteration",{List(s,t){return s.asIteration()}});ke.addAttribute("value",{decNumber(s,t){return Le(t.sourceString)},wholeDec(s,t){return Le(t.sourceString)},binNumber(s,t){return i1(t.sourceString)},hexNumber(s,t){return Ms(t.sourceString)},Number(s){return s.value},Name(s){return s.name},identifier(s,t){return this.sourceString}});ke.addAttribute("name",{identifier(s,t){return this.sourceString},Name(s){var t;return(t=this.child(0))==null?void 0:t.name}});ke.addAttribute("String",{String(s,t,e){return t.sourceString}});const $a="HDL statement has a syntax error";function yt(s,t){var o;const e=s.match(/Line \d+, col \d+: (?<message>.*)/),r=(o=e==null?void 0:e.groups)!=null&&o.message?e.groups.message:s;return{message:`${(t==null?void 0:t.line)!=null?`Line ${t.line}: `:""}${r}`,span:t}}function a1(s,t,e=({root:r})=>r){return function(o){try{const n=s.match(o);if(n.succeeded()){const i=t(n),a=e(i);return at(a)}else return et(yt(n.shortMessage??$a,Gt(n.getInterval())))}catch(n){return et(n)}}}function Gt(s){return{start:s.startIdx,end:s.endIdx,line:s.getLineAndColumn().lineNum}}const Cs=`
Hdl <: Base{
  Root := Chip
  identifier := (letter) (alnum)*
  Name := identifier
  Chip = "CHIP" Name OpenBrace ChipBody CloseBrace
  ChipBody = InList? OutList? PartList ClockedList?
  InList = "IN" PinList Semi
  OutList = "OUT" PinList Semi
  PartList = BuiltinPart | Parts
  PinList = List<PinDecl, Comma>
  PinDecl = Name PinWidth?
  PinWidth = OpenSquare decNumber CloseSquare
  BuiltinPart = "BUILTIN" Semi
  Parts = "PARTS:" Part*
  Part = Name "(" Wires ")" Semi
  Wires = List<Wire, Comma>
  Wire = WireSide Equal (WireSide | True | False) 
  WireSide = Name SubBus? 
  SubBus = OpenSquare decNumber subBusRest? CloseSquare
  subBusRest = ".." decNumber
  ClockedList = "CLOCKED" SimplePinList Semi
  SimplePinList = List<Name, Comma>
}`,F0=d0(Cs,p0),jt=F0.extendSemantics(ke);jt.addAttribute("SubBus",{SubBus(s,t,e,r){var i,a;const o=t.value,n=((a=(i=e.child(0))==null?void 0:i.child(1))==null?void 0:a.value)??o;return{start:o,end:n}}});jt.addAttribute("WireSide",{WireSide({name:s},t){var o;const{start:e,end:r}=((o=t.child(0))==null?void 0:o.SubBus)??{start:void 0,end:void 0};return{pin:s,start:e,end:r,span:Gt(this.source)}}});jt.addAttribute("Wire",{Wire(s,t,e){const r=e.isTerminal()?{pin:e.sourceString}:e.WireSide;return{lhs:s.WireSide,rhs:r}}});jt.addAttribute("Wires",{Wires(s){return s.asIteration().children.map(t=>t.Wire)}});jt.addAttribute("Part",{Part({name:s},t,{Wires:e},r,o){return{name:s,wires:e,span:Gt(this.source)}}});jt.addAttribute("Parts",{Parts(s,t){return t.children.map(e=>e.Part)},BuiltinPart(s,t){return"BUILTIN"}});jt.addAttribute("PartList",{PartList(s){return s.Parts}});jt.addAttribute("Clocked",{ClockedList(s,t,e){return t.asIteration().children.map(({sourceString:r})=>r)??[]}});jt.addAttribute("PinDecl",{PinDecl({name:s},t){var e,r;return{pin:s,width:((r=(e=t.child(0))==null?void 0:e.child(1))==null?void 0:r.value)??1}}});jt.addAttribute("PinList",{PinList(s){return s.asIteration().children.map(t=>t.PinDecl)}});jt.addAttribute("Chip",{Chip(s,t,e,r,o){var n,i,a,u,f;return{name:{value:t.sourceString,span:Gt(t.source)},ins:((i=(n=r.child(0).child(0))==null?void 0:n.child(1))==null?void 0:i.PinList)??[],outs:((u=(a=r.child(1).child(0))==null?void 0:a.child(1))==null?void 0:u.PinList)??[],parts:r.child(2).PartList??[],clocked:(f=r.child(3).child(0))==null?void 0:f.Clocked}}});jt.addAttribute("Root",{Root(s){var t;return(t=s.child(0))==null?void 0:t.Chip}});const u1={parser:F0,grammar:Cs,semantics:jt,parse:a1(F0,jt,s=>s.Chip)};class Ua extends Error{constructor(t="Assertion failed"){super(t)}}function bt(s,t){if(!s)throw new Ua(t instanceof Function?t():t)}function At(s,t="Assertion failed: value does not exist"){return bt(s!=null,t),s}function Va(s,t=`Unexpected value ${s}`){throw new Error(t instanceof Function?t():t)}function He(s,t,e=1){const r=[];for(let o=s;o<t;o+=e)r.push(o);return r}var N0=function(s,t){return N0=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},N0(s,t)};function ze(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");N0(s,t);function e(){this.constructor=s}s.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function L0(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],r=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&r>=s.length&&(s=void 0),{value:s&&s[r++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function z0(s,t){var e=typeof Symbol=="function"&&s[Symbol.iterator];if(!e)return s;var r=e.call(s),o,n=[],i;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)n.push(o.value)}catch(a){i={error:a}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(i)throw i.error}}return n}function j0(s,t,e){if(e||arguments.length===2)for(var r=0,o=t.length,n;r<o;r++)(n||!(r in t))&&(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return s.concat(n||Array.prototype.slice.call(t))}function ue(s){return typeof s=="function"}function Es(s){var t=function(r){Error.call(r),r.stack=new Error().stack},e=s(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var B0=Es(function(s){return function(e){s(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function $0(s,t){if(s){var e=s.indexOf(t);0<=e&&s.splice(e,1)}}var h0=function(){function s(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return s.prototype.unsubscribe=function(){var t,e,r,o,n;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var a=L0(i),u=a.next();!u.done;u=a.next()){var f=u.value;f.remove(this)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else i.remove(this);var m=this.initialTeardown;if(ue(m))try{m()}catch(p){n=p instanceof B0?p.errors:[p]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var v=L0(h),d=v.next();!d.done;d=v.next()){var y=d.value;try{L1(y)}catch(p){n=n??[],p instanceof B0?n=j0(j0([],z0(n)),z0(p.errors)):n.push(p)}}}catch(p){r={error:p}}finally{try{d&&!d.done&&(o=v.return)&&o.call(v)}finally{if(r)throw r.error}}}if(n)throw new B0(n)}},s.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)L1(t);else{if(t instanceof s){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},s.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},s.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},s.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&$0(e,t)},s.prototype.remove=function(t){var e=this._finalizers;e&&$0(e,t),t instanceof s&&t._removeParent(this)},s.EMPTY=function(){var t=new s;return t.closed=!0,t}(),s}(),Ps=h0.EMPTY;function Os(s){return s instanceof h0||s&&"closed"in s&&ue(s.remove)&&ue(s.add)&&ue(s.unsubscribe)}function L1(s){ue(s)?s():s.unsubscribe()}var Wa={Promise:void 0},Ha={setTimeout:function(s,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,j0([s,t],z0(e)))},clearTimeout:function(s){return clearTimeout(s)},delegate:void 0};function Ga(s){Ha.setTimeout(function(){throw s})}function z1(){}function Je(s){s()}var Ds=function(s){ze(t,s);function t(e){var r=s.call(this)||this;return r.isStopped=!1,e?(r.destination=e,Os(e)&&e.add(r)):r.destination=Za,r}return t.create=function(e,r,o){return new U0(e,r,o)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,s.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(h0),Ka=function(){function s(t){this.partialObserver=t}return s.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(r){Ge(r)}},s.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(r){Ge(r)}else Ge(t)},s.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){Ge(e)}},s}(),U0=function(s){ze(t,s);function t(e,r,o){var n=s.call(this)||this,i;return ue(e)||!e?i={next:e??void 0,error:r??void 0,complete:o??void 0}:i=e,n.destination=new Ka(i),n}return t}(Ds);function Ge(s){Ga(s)}function qa(s){throw s}var Za={closed:!0,next:z1,error:qa,complete:z1},Ja=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Xa(s){return s}function Ya(s){return s.length===0?Xa:s.length===1?s[0]:function(e){return s.reduce(function(r,o){return o(r)},e)}}var j1=function(){function s(t){t&&(this._subscribe=t)}return s.prototype.lift=function(t){var e=new s;return e.source=this,e.operator=t,e},s.prototype.subscribe=function(t,e,r){var o=this,n=tu(t)?t:new U0(t,e,r);return Je(function(){var i=o,a=i.operator,u=i.source;n.add(a?a.call(n,u):u?o._subscribe(n):o._trySubscribe(n))}),n},s.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},s.prototype.forEach=function(t,e){var r=this;return e=$1(e),new e(function(o,n){var i=new U0({next:function(a){try{t(a)}catch(u){n(u),i.unsubscribe()}},error:n,complete:o});r.subscribe(i)})},s.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},s.prototype[Ja]=function(){return this},s.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Ya(t)(this)},s.prototype.toPromise=function(t){var e=this;return t=$1(t),new t(function(r,o){var n;e.subscribe(function(i){return n=i},function(i){return o(i)},function(){return r(n)})})},s.create=function(t){return new s(t)},s}();function $1(s){var t;return(t=s??Wa.Promise)!==null&&t!==void 0?t:Promise}function Qa(s){return s&&ue(s.next)&&ue(s.error)&&ue(s.complete)}function tu(s){return s&&s instanceof Ds||Qa(s)&&Os(s)}var eu=Es(function(s){return function(){s(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),e0=function(s){ze(t,s);function t(){var e=s.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var r=new U1(this,this);return r.operator=e,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new eu},t.prototype.next=function(e){var r=this;Je(function(){var o,n;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var i=L0(r.currentObservers),a=i.next();!a.done;a=i.next()){var u=a.value;u.next(e)}}catch(f){o={error:f}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}}})},t.prototype.error=function(e){var r=this;Je(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var o=r.observers;o.length;)o.shift().error(e)}})},t.prototype.complete=function(){var e=this;Je(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),s.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var r=this,o=this,n=o.hasError,i=o.isStopped,a=o.observers;return n||i?Ps:(this.currentObservers=null,a.push(e),new h0(function(){r.currentObservers=null,$0(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var r=this,o=r.hasError,n=r.thrownError,i=r.isStopped;o?e.error(n):i&&e.complete()},t.prototype.asObservable=function(){var e=new j1;return e.source=this,e},t.create=function(e,r){return new U1(e,r)},t}(j1),U1=function(s){ze(t,s);function t(e,r){var o=s.call(this)||this;return o.destination=e,o.source=r,o}return t.prototype.next=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,e)},t.prototype.error=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,e)},t.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},t.prototype._subscribe=function(e){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&o!==void 0?o:Ps},t}(e0),su=function(s){ze(t,s);function t(e){var r=s.call(this)||this;return r._value=e,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(e){var r=s.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},t.prototype.getValue=function(){var e=this,r=e.hasError,o=e.thrownError,n=e._value;if(r)throw o;return this._throwIfClosed(),n},t.prototype.next=function(e){s.prototype.next.call(this,this._value=e)},t}(e0);let _0;class _e{constructor(){C(this,"level",ot);C(this,"ticks",0);C(this,"subject",new su({level:this.level,ticks:this.ticks}));C(this,"frameSubject",new e0);C(this,"resetSubject",new e0);C(this,"$",this.subject);C(this,"frame$",this.frameSubject);C(this,"reset$",this.resetSubject)}static get(){return _0===void 0&&(_0=new _e),_0}static subscribe(t){return _e.get().$.subscribe(t)}get isHigh(){return this.level===tt}get isLow(){return this.level===ot}next(){this.subject.next({level:this.level,ticks:this.ticks})}reset(){this.level=ot,this.ticks=0,this.next(),this.resetSubject.next()}tick(){bt(this.level===ot,"Can only tick up from LOW"),this.level=tt,this.next()}tock(){bt(this.level===tt,"Can only tock down from HIGH"),this.level=ot,this.ticks+=1,this.next()}toggle(){this.level===tt?this.tock():this.tick()}eval(){this.tick(),this.tock()}frame(){this.frameSubject.next()}toString(){return`${this.ticks}${this.level===tt?"+":""}`}}const tt=1,ot=0;function Xe(s){return s==="false"||s==="true"||s==="0"||s==="1"}class Pt{constructor(t,e=1){C(this,"name");C(this,"width");C(this,"state");C(this,"next",[]);this.name=t,this.width=e,this.state=He(0,this.width).map(()=>ot)}ensureWidth(t){bt(t<=16,`Cannot widen past 16 to ${t} bits`),this.width<t&&(this.width=t,this.state=[...this.state,...He(this.width,t).map(()=>ot)])}connect(t){this.next.push(t),t.busVoltage=this.busVoltage}pull(t,e=0){bt(e>=0&&e<this.width,`Bit out of bounds: ${this.name}@${e}`),this.state[e]=t,this.next.forEach(r=>r.pull(t,e))}voltage(t=0){return bt(t>=0&&t<this.width),this.state[t]}set busVoltage(t){for(const e of He(0,this.width))this.state[e]=(t&1<<e)>>e;this.next.forEach(e=>e.busVoltage=this.busVoltage)}get busVoltage(){return He(0,this.width).reduce((t,e)=>t|this.state[e]<<e,0)}toggle(t=0){const e=this.voltage(t)===ot?tt:ot;this.pull(e,t)}}class V1 extends Pt{constructor(e,r,o=1){super(e.name);C(this,"bus");C(this,"start");C(this,"width");this.bus=e,this.start=r,this.width=o,bt(r>=0&&r+o<=e.width,`Mismatched InSubBus dimensions on ${e.name} (${o} + ${r} > ${e.width})`),this.connect(e)}pull(e,r=0){bt(r>=0&&r<this.width),this.bus.pull(e,this.start+r)}voltage(e=0){return bt(e>=0&&e<this.width),this.bus.voltage(this.start+e)}set busVoltage(e){const r=this.bus.busVoltage&~Be(this.width+this.start),o=this.bus.busVoltage&Be(this.start),n=(e&Be(this.width))<<this.start;this.bus.busVoltage=r|n|o}get busVoltage(){return this.bus.busVoltage>>this.start&Be(this.width)}connect(e){bt(this.start+this.width<=e.width,`Mismatched InSubBus connection dimensions (From ${e.name} to ${this.name})`),this.bus=e}}class W1 extends Pt{constructor(e,r,o=1){super(e.name);C(this,"bus");C(this,"start");C(this,"width");this.bus=e,this.start=r,this.width=o,bt(r>=0&&o<=e.width,"Mismatched OutSubBus dimensions"),this.connect(e)}pull(e,r=0){r>=this.start&&r<this.start+this.width&&this.bus.pull(e,r-this.start)}set busVoltage(e){this.bus.busVoltage=(e&Be(this.width+this.start))>>this.start}get busVoltage(){return this.bus.busVoltage>>this.start&Be(this.width)}connect(e){bt(this.width<=e.width,"Mismatched OutSubBus connection dimensions"),this.bus=e}}class f0 extends Pt{constructor(e,r){super(e,16);C(this,"value");this.value=r}pullHigh(e=0){}pullLow(e=0){}voltage(e=0){return this.busVoltage&1}set busVoltage(e){}get busVoltage(){return this.value}}const A0=new f0("true",65535),Oe=new f0("false",0);function S0(s){var r;const{pin:t,w:e}=(r=s.match(/(?<pin>[a-zA-Z]+)(\[(?<w>\d+)\])?/))==null?void 0:r.groups;return{pin:t,width:e?Number(e):1}}class x0{constructor(){C(this,"map",new Map)}insert(t){const{name:e}=t;bt(!this.map.has(e),`Pins already has ${e}!`),this.map.set(e,t)}emplace(t,e){if(this.has(t))return At(this.get(t));{const r=new Pt(t,e);return this.insert(r),r}}has(t){return this.map.has(t)}get(t){return this.map.get(t)}entries(){return this.map.values()}[Symbol.iterator](){return this.map[Symbol.iterator]()}}function Ke(s,t,e){return s+t<=e.width?at():et(`Sub-bus index out of range (${e.name} has width ${e.width})`)}let ru=0;class ht{constructor(t,e,r,o=[],n=[]){C(this,"name");C(this,"id",ru++);C(this,"ins",new x0);C(this,"outs",new x0);C(this,"pins",new x0);C(this,"insToPart",new Map);C(this,"partToOuts",new Map);C(this,"parts",[]);C(this,"clockedPins");C(this,"clockSubscription");this.name=r;for(const i of t){const{pin:a,width:u=1}=i.pin!==void 0?i:S0(i);this.ins.insert(new Pt(a,u))}for(const i of e){const{pin:a,width:u=1}=i.pin!==void 0?i:S0(i);this.outs.insert(new Pt(a,u))}for(const i of o){const{pin:a,width:u=1}=i.pin!==void 0?i:S0(i);this.pins.insert(new Pt(a,u))}this.clockedPins=new Set(n),this.subscribeToClock()}get clocked(){if(this.clockedPins.size>0)return!0;for(const t of this.parts)if(t.clocked)return!0;return!1}subscribeToClock(){var t;(t=this.clockSubscription)==null||t.unsubscribe(),this.clockSubscription=_e.subscribe(()=>this.eval())}reset(){for(const[t,e]of this.ins)e.busVoltage=0;for(const t of this.parts)t.reset();this.eval()}in(t="in"){return bt(this.hasIn(t),`No in pin ${t}`),At(this.ins.get(t))}out(t="out"){return bt(this.hasOut(t),`No in pin ${t}`),At(this.outs.get(t))}hasIn(t){return this.ins.has(t)}hasOut(t){return this.outs.has(t)}pin(t){return bt(this.pins.has(t),"Pin not available in "),At(this.pins.get(t))}get(t,e){return this.ins.has(t)?At(this.ins.get(t)):this.outs.has(t)?At(this.outs.get(t)):this.pins.has(t)?At(this.pins.get(t)):this.getBuiltin(t,e)}getBuiltin(t,e=0){if(nu.includes(t))for(const r of this.parts){const o=r.get(t,e);if(o)return o}}isInPin(t){return this.ins.has(t)}isOutPin(t){return this.outs.has(t)}isExternalPin(t){return this.isInPin(t)||this.isOutPin(t)||Xe(t)}isInternalPin(t){return!this.isExternalPin(t)}pathExists(t,e){const r=[t];for(;r.length>0;){const o=At(r.pop());if(typeof o=="string"){if(o==e)return!0;r.push(...this.insToPart.get(o)??[])}else r.push(...this.partToOuts.get(o)??[])}return!1}isClockedPin(t){return this.isInPin(t)?![...this.outs].some(([e,r])=>this.pathExists(t,e)):![...this.ins].some(([e,r])=>this.pathExists(e,t))}hasConnection(t,e){return[...this.partToOuts.get(t)??[]].some(r=>{var o;return(o=this.insToPart.get(r))==null?void 0:o.has(e)})}wire(t,e){for(let r=0;r<e.length;r++){const{from:o,to:n}=e[r];if(t.isOutPin(n.name)){const i=this.wireOutPin(t,n,o);if(dt(i))return et({wireIndex:r,lhs:et(i).lhs,message:et(i).message})}else{const i=this.wireInPin(t,n,o);if(dt(i))return et({wireIndex:r,lhs:et(i).lhs,message:et(i).message})}}return this.parts.push(t),at()}wireAll(t){for(const{part:e,connections:r}of t)this.wire(e,r);this.sortParts()}sortParts(){const t=[],e=new Set,r=new Set,o=this.parts.map(n=>({part:n,isReturning:!1}));for(;o.length>0;){const n=At(o.pop());if(n.isReturning)e.add(n.part),t.push(n.part);else if(!e.has(n.part)){if(r.has(n.part))return!0;r.add(n.part),o.push({part:n.part,isReturning:!0});for(const i of this.partToOuts.get(n.part)??[])o.push(...Array.from(this.insToPart.get(i)??[]).filter(a=>!e.has(a)).map(a=>({part:a,isReturning:!1})))}}return this.parts=t.reverse(),!1}findPin(t,e){return t==="true"||t==="1"?A0:t==="false"||t==="0"?Oe:this.ins.has(t)?At(this.ins.get(t)):this.outs.has(t)?At(this.outs.get(t)):this.pins.emplace(t,e)}wireOutPin(t,e,r){const o=At(t.outs.get(e.name),()=>`Cannot wire to missing pin ${e.name}`);e.width??(e.width=o.width);let n=this.findPin(r.name,r.width??e.width);const i=this.pins.has(n.name);if(r.width??(r.width=n.width),n instanceof f0)return et({message:"Cannot wire to constant bus",lhs:!0});if(i&&n instanceof Pt&&n.ensureWidth(r.start+r.width),r.start>0||r.width!==n.width){const u=Ke(r.start,r.width,n);if(dt(u))return et({message:et(u),lhs:!0});n=new V1(n,r.start,r.width)}if(e.start>0||e.width!==o.width){const u=Ke(e.start,e.width,o);if(dt(u))return et({message:et(u),lhs:!1});n=new W1(n,e.start,e.width)}if(!t.clockedPins.has(o.name)){const u=this.partToOuts.get(t)??new Set;u.add(n.name),this.partToOuts.set(t,u)}if(this.sortParts()){const u=this.partToOuts.get(t)??new Set;return u.delete(n.name),this.partToOuts.set(t,u),et({message:"Circular pin dependency",lhs:!1})}else o.connect(n);return at()}wireInPin(t,e,r){let o=At(t.ins.get(e.name),()=>`Cannot wire to missing pin ${e.name}`);e.width??(e.width=o.width);const n=this.findPin(r.name,r.width??e.width);if(r.width??(r.width=n.width),e.start>0||e.width!==o.width){const a=Ke(e.start,e.width,o);if(dt(a))return et({message:et(a),lhs:!0});o=new V1(o,e.start,e.width)}if(!["true","false"].includes(n.name)&&(r.start>0||r.width!==n.width)){const a=Ke(r.start,r.width,n);if(dt(a))return et({message:et(a),lhs:!1});o=new W1(o,r.start,r.width)}if(!t.clockedPins.has(o.name)){const a=this.insToPart.get(n.name)??new Set;a.add(t),this.insToPart.set(n.name,a)}if(this.sortParts()){const a=this.insToPart.get(n.name)??new Set;return a.delete(t),this.insToPart.set(n.name,a),et({message:"Circular pin dependency",lhs:!0})}else n.connect(o);return at()}eval(){for(const t of this.parts)A0.next.forEach(e=>e.busVoltage=A0.busVoltage),Oe.next.forEach(e=>e.busVoltage=Oe.busVoltage),t.eval()}tick(){this.eval()}tock(){this.eval()}remove(){var t;(t=this.clockSubscription)==null||t.unsubscribe();for(const e of this.parts)e.remove()}async load(t,e){for(const r of this.parts)r.name==="ROM32K"&&await r.load(t,e)}}class ou extends ht{constructor(){super([],[]),this.outs.insert(Oe)}}class ye extends ht{get clocked(){return!0}subscribeToClock(){var t;(t=this.clockSubscription)==null||t.unsubscribe(),this.clockSubscription=_e.subscribe(({level:e})=>{e===ot?this.tock():this.tick()})}remove(){var t;(t=this.clockSubscription)==null||t.unsubscribe(),super.remove()}reset(){super.reset(),this.tick(),this.tock()}}function Be(s){return Math.pow(2,s)-1}const nu=["Register","ARegister","DRegister","PC","RAM8","RAM64","RAM512","RAM4K","RAM16K","ROM32K","Screen","Keyboard","Memory"];function Fs(s,t){return[s+t&65535]}class iu extends ht{constructor(){super(["a[16]","b[16]"],["out[16]"],"Add16")}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=Fs(t,e);this.out().busVoltage=r}}const H1=new Set(["0","1","-1","D","A","!D","!A","-D","-A","D+1","A+1","D-1","A-1","D+A","D-A","A-D","D&A","D|A"]);function V0(s){return H1.has(s)||H1.has(s.replace("M","A"))}const c1={asm:{0:42,1:63,"-1":58,D:12,A:48,"!D":13,"!A":49,"-D":15,"-A":51,"D+1":31,"A+1":55,"D-1":14,"A-1":50,"D+A":2,"D-A":19,"A-D":7,"D&A":0,"D|A":21},op:{42:"0",63:"1",58:"-1",12:"D",48:"A",13:"!D",49:"!A",15:"-D",51:"-A",31:"D+1",55:"A+1",14:"D-1",50:"A-1",2:"D+A",19:"D-A",7:"A-D",0:"D&A",21:"D|A"},getOp(s){return c1.asm[s.replace("M","A")]}},au=new Set(["","M","D","MD","A","AM","AD","AMD"]);function W0(s){return au.has(s)}const Ns={asm:{"":0,M:1,D:2,MD:3,A:4,AM:5,AD:6,AMD:7}},uu=new Set(["","JGT","JEQ","JGE","JLT","JNE","JLE","JMP"]);function cu(s){return uu.has(s)}const Ls={asm:{"":0,JGT:1,JEQ:2,JGE:3,JLT:4,JNE:5,JLE:6,JMP:7}},oe={Positive:1,Zero:0,Negative:15};function m0(s,t,e){let r=0;switch(s){case 42:r=0;break;case 63:r=1;break;case 58:r=-1;break;case 12:r=t;break;case 48:r=e;break;case 13:r=~t;break;case 49:r=~e;break;case 15:r=-t;break;case 51:r=-e;break;case 31:r=t+1;break;case 55:r=e+1;break;case 14:r=t-1;break;case 50:r=e-1;break;case 2:r=t+e;break;case 19:r=t-e;break;case 7:r=e-t;break;case 0:r=t&e;break;case 21:r=t|e;break}r=r&65535;const o=r===0?oe.Zero:r&32768?oe.Negative:oe.Positive;return[r,o]}class lu extends ht{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,r=this.in("zx").busVoltage<<5,o=this.in("nx").busVoltage<<4,n=this.in("zy").busVoltage<<3,i=this.in("ny").busVoltage<<2,a=this.in("f").busVoltage<<1,u=this.in("no").busVoltage<<0,f=r+o+n+i+a+u,[m]=m0(f,t,e);this.out().busVoltage=m}}class du extends ht{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]","zr","ng"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,r=this.in("zx").busVoltage<<5,o=this.in("nx").busVoltage<<4,n=this.in("zy").busVoltage<<3,i=this.in("ny").busVoltage<<2,a=this.in("f").busVoltage<<1,u=this.in("no").busVoltage<<0,f=r+o+n+i+a+u,[m,h]=m0(f,t,e),v=h===oe.Negative?tt:ot,d=h===oe.Zero?tt:ot;this.out("out").busVoltage=m,this.out("ng").pull(v),this.out("zr").pull(d)}op(){const t=this.in("zx").busVoltage<<5,e=this.in("nx").busVoltage<<4,r=this.in("zy").busVoltage<<3,o=this.in("ny").busVoltage<<2,n=this.in("f").busVoltage<<1,i=this.in("no").busVoltage<<0;return t+e+r+o+n+i}}function zs(s,t){return[s===1||t===1?tt:ot]}function pu(s,t){return[(s|t)&65535]}function hu(s){return[s&255?tt:ot]}class fu extends ht{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=zs(t,e);this.out().pull(r)}}class mu extends ht{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=pu(t,e);this.out().busVoltage=r}}class gu extends ht{constructor(){super(["in[8]"],["out"],"Or8way")}eval(){const t=this.in().busVoltage,[e]=hu(t);this.out().pull(e)}}function H0(s,t){return[s===1&&t===0||s===0&&t===1?tt:ot,s===1&&t===1?tt:ot]}class vu extends ht{constructor(){super(["a","b"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r,o]=H0(t,e);this.out("sum").pull(r),this.out("carry").pull(o)}}function ku(s,t,e){const[r,o]=H0(s,t),[n,i]=H0(r,e),[a]=zs(o,i);return[n,a]}class yu extends ht{constructor(){super(["a","b","c"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),r=this.in("c").voltage(),[o,n]=ku(t,e,r);this.out("sum").pull(o),this.out("carry").pull(n)}}function bu(s){return Fs(s,1)}class wu extends ht{constructor(){super(["in[16]"],["out[16]"],"Inc16")}eval(){const t=this.in().busVoltage,[e]=bu(t);this.out().busVoltage=e}}const G1={CPU:`CHIP CPU {

    IN  inM[16],         // M value input  (M = contents of RAM[A])
        instruction[16], // Instruction for execution
        reset;           // Signals whether to re-start the current
                         // program (reset==1) or continue executing
                         // the current program (reset==0).

    OUT outM[16],        // M value output
        writeM,          // Write to M? 
        addressM[15],    // Address in data memory (of M)
        pc[15];          // address of next instruction

    PARTS:
    Mux16(a=instruction, b=ALUoutput, sel=instruction[15], out=Ainput);
    Not(in=instruction[15], out=Ainstruction);
    Or(a=Ainstruction, b=instruction[5], out=loadA);
    ARegister(in=Ainput, load=loadA, out=Aoutput, out[0..14]=addressM);

    And(a=instruction[15], b=instruction[4], out=loadD);
    DRegister(in=ALUoutput, load=loadD, out=Doutput);

    Mux16(a=Aoutput, b=inM, sel=instruction[12], out=ALUsecondInput);

    ALU(x=Doutput, y=ALUsecondInput, 
        zx=instruction[11], nx=instruction[10], 
        zy=instruction[9], ny=instruction[8],
        f=instruction[7], no=instruction[6], 
        out=ALUoutput, out=outM, ng=negative, zr=zero);

    And(a=instruction[15], b=instruction[3], out=writeM);

    Or(a=negative, b=zero, out=notPositive);
    Not(in=notPositive, out=positive);

    And(a=positive, b=instruction[0], out=j1);
    And(a=zero, b=instruction[1], out=j2);
    And(a=negative, b=instruction[2], out=j3);
    Or(a=j1, b=j2, out=jTemp);
    Or(a=jTemp, b=j3, out=jumpIfC);
    And(a=jumpIfC, b=instruction[15], out=jump);

    PC(reset=reset, inc=true, load=jump, in=Aoutput, out[0..14]=pc);
}`};function Bu(s){return s[0]==="@"?_u(s):Au(s)}function _u(s){return parseInt(s.substring(1),10)}function Au(s){const t=s.match(/(?:(?<assignExists>.+)=)?(.+)(?:;(?<jumpExists>.+))?/),{assignExists:e,jumpExists:r}=(t==null?void 0:t.groups)??{},o=s.match(/(?:(?<assign>[AMD]{1,3})=)?(?<operation>[-+!01ADM&|]{1,3})(?:;(?<jump>JGT|JLT|JGE|JLE|JEQ|JMP))?/);let{assign:n,jump:i}=(o==null?void 0:o.groups)??{};const{operation:a}=(o==null?void 0:o.groups)??{};if(n=n??(e?void 0:""),i=i??(r?void 0:""),(o==null?void 0:o[0])!=s||!W0(n)||!cu(i)||!V0(a))throw new Error("Invalid c instruction");const u=a.includes("M"),f=Ns.asm[n],m=Ls.asm[i],h=c1.getOp(a);return js(u,h,f,m)}function js(s,t,e,r){const n=s?4096:0,i=t<<6,a=e<<3,u=r;return 57344+n+i+a+u}const $s=`ASM <: Base {
  Root := ASM
  ASM = intermediateInstruction* instruction?
  
  instruction = label|aInstruction|cInstruction
  intermediateInstruction = instruction space+

  identifier := (letter|underscore|dot|dollar|colon) (alnum|underscore|dot|dollar|colon)*

  label = openParen identifier closeParen
  aInstruction = at (identifier | decNumber)
  cInstruction = assign? op jmp?

  assignChar = "A" | "M" | "D"
  opChar = assignChar | "0" | "1" | "!" | "-" | "+" | "|" | "&"
  
  assign = assignChar+ equal
  op = opChar+

  jmp = semi ("JGT" | "JEQ" | "JGE" | "JLT" | "JNE" | "JLE" | "JMP")
}`,G0=d0($s,p0),Ae=G0.extendSemantics(ke);function Us(s){return s.type=="A"&&s.label!==void 0}Ae.addAttribute("root",{Root(s){return this.asm}});Ae.addAttribute("asm",{ASM(s,t){const e=s.children.map(r=>r.intermediateInstruction)??[];return{instructions:t.child(0)?[...e,t.child(0).instruction]:e}}});Ae.addAttribute("intermediateInstruction",{intermediateInstruction(s,t){return s.instruction}});function Su(s){var e,r;let t=((r=(e=s.child(0))==null?void 0:e.child(0))==null?void 0:r.sourceString)??"";if(t=="DM"&&(t="MD"),t=="ADM"&&(t="AMD"),t!=""&&!W0(t)){const o=t.split("").reverse().join(""),n=W0(o)?`. Did you mean ${o}?`:"";throw yt(`Invalid ASM target: ${t}${n}`,Gt(s.source))}return t}function xu(s){const t=s.sourceString;if(!V0(t)){const e=t.split("").reverse().join(""),r=V0(e)?`. Did you mean ${e}?`:"";throw yt(`Invalid ASM value: ${s.sourceString}${r}`,Gt(s.source))}return t}Ae.addAttribute("instruction",{aInstruction(s,t){return l1(t.value,Gt(this.source))},cInstruction(s,t,e){var i,a;const r=Su(s),o=xu(t),n=((a=(i=e.child(0))==null?void 0:i.child(1))==null?void 0:a.sourceString)??"";return d1(r,o,n,Gt(this.source))},label(s,{name:t},e){return Vs(t,Gt(this.source))}});function Iu(s,t){let e=16;const r=new Map([["R0",0],["R1",1],["R2",2],["R3",3],["R4",4],["R5",5],["R6",6],["R7",7],["R8",8],["R9",9],["R10",10],["R11",11],["R12",12],["R13",13],["R14",14],["R15",15],["SP",0],["LCL",1],["ARG",2],["THIS",3],["THAT",4],["SCREEN",g0],["KBD",p1]]);function o(u){return r.has(u)||(r.set(u,e),t==null||t(u,e,!0),e+=1),At(r.get(u),`Label not in symbols: ${u}`)}function n(u){const f=o(u.label);u.value=f,delete u.label}const i=[];let a=0;for(const u of s.instructions){if(u.type==="L"){if(r.has(u.label))return et(yt(`Duplicate label ${u.label}`,u.span));r.set(u.label,a),t==null||t(u.label,a,!1);continue}a+=1,u.type==="A"&&Us(u)&&i.push(u)}return i.forEach(n),at()}function Ru(s){if(s.type==="A"){if(Us(s))throw new Error("ASM Emitting unfilled A instruction");return s.value}if(s.type==="C")return js(s.isM,s.op,s.store??0,s.jump??0)}function Tu(s){return s.instructions.map(Ru).filter(t=>t!==void 0)}const l1=(s,t)=>typeof s=="string"?{type:"A",label:s,span:t}:{type:"A",value:s,span:t},d1=(s,t,e,r)=>{const o={type:"C",op:c1.getOp(t),isM:t.includes("M"),span:r};return e&&(o.jump=Ls.asm[e]),s&&(o.store=Ns.asm[s]),o},Mu=(s,t,e,r)=>[l1(s),d1(t,e,r)],Vs=(s,t)=>({type:"L",label:s,span:t}),I0={grammar:$s,semantics:Ae,parser:G0,parse:a1(G0,Ae),passes:{fillLabel:Iu,emit:Tu},A:l1,C:d1,AC:Mu,L:Vs};async function Ws(s){const t=Fi(I0.parse(s));return I0.passes.fillLabel(t),I0.passes.emit(t)}async function Hs(s){return s.split(`
`).filter(t=>t.trim()!=="").map(i1)}async function Gs(s,t){if(t.endsWith(".hack"))return Eu(s,t);if(t.endsWith(".asm"))return Cu(s,t);throw new Error(`Cannot load file without hack or asm extension ${t}`)}async function Cu(s,t){return Ws(await s.readFile(t))}async function Eu(s,t){return Hs(await s.readFile(t))}const g0=16384,Pu=256,Ou=32,v0=Pu*Ou,p1=24576;let h1=class{constructor(t){C(this,"memory");typeof t=="number"?this.memory=new Int16Array(t):this.memory=new Int16Array(t)}get size(){return this.memory.length}get(t){return t<0||t>=this.size?65535:this.memory[t]??0}set(t,e){t>=0&&t<this.size&&(this.memory[t]=e&65535)}reset(){this.memory.fill(0)}update(t,e,r){let o;switch(r){case"asm":try{o=Bu(e)}catch{o=void 0}break;case"bin":o=i1(e);break;case"hex":o=Ms(e);break;case"dec":default:o=Le(e);break}o!==void 0&&isFinite(o)&&o<=65535&&this.set(t,o)}async load(t,e,r){try{this.loadBytes(await Gs(t,e),r)}catch{throw new Error(`Memory Failed to load file ${e}`)}}loadBytes(t,e){this.memory.set(new Int16Array(t),e),this.memory.fill(0,t.length,this.size)}range(t=0,e=this.size){return[...this.memory.slice(t,e)]}*map(t,e=0,r=this.size){bt(e<=r);for(let o=e;o<r;o++)yield t(o,this.get(o))}[Symbol.iterator](){return this.map((t,e)=>e)}isEmpty(){return this.memory.every(t=>t===0)}};class s0{constructor(t,e,r){C(this,"parent");C(this,"size");C(this,"offset");this.parent=t,this.size=e,this.offset=r}get(t){return t<0||t>=this.size?65535:this.parent.get(this.offset+t)}set(t,e,r=!0){t>=0&&t<this.size&&this.parent.set(t+this.offset,e)}reset(){for(let t=0;t<this.size;t++)this.set(t,0,!1)}update(t,e,r){t>=0&&t<this.size&&this.parent.update(t+this.offset,e,r)}load(t,e){return this.parent.load(t,e,this.offset)}loadBytes(t){return this.parent.loadBytes(t,this.offset)}range(t,e){return this.parent.range(t,e)}map(t,e=0,r=this.size){return this.parent.map(t,e+this.offset,r+this.offset)}[Symbol.iterator](){return this.map((t,e)=>e)}}class Du extends s0{constructor(t){super(t,1,24576)}getKey(){return this.get(0)}setKey(t){this.set(0,t&65535)}clearKey(){this.set(0,0)}}const De=class De extends h1{constructor(t){if(t){const e=new Int16Array(De.SIZE);e.set(t),super(e.buffer)}else super(De.SIZE)}};C(De,"SIZE",32768);let r0=De;var he;let Fu=(he=class extends h1{constructor(){super(he.SIZE);C(this,"keyboard",new s0(this,1,p1));C(this,"screen",new s0(this,v0,g0))}},C(he,"SIZE",24577),he);function K1(){return{A:0,D:0,PC:0,ALU:0,flag:oe.Zero}}const qt={c:32768,x1:36864,x2:36864,am:36864,op:4032,d1:32800,d2:32784,d3:32776,j1:32769,j2:32770,j3:32772};function Ks(s){function t(r){return(s&r)===r}return{c:t(qt.c),x1:t(qt.x1),x2:t(qt.x2),am:t(qt.am),op:(s&qt.op)>>6,d1:t(qt.d1),d2:t(qt.d2),d3:t(qt.d3),j1:t(qt.j1),j2:t(qt.j2),j3:t(qt.j3)}}function qs({inM:s,instruction:t},{A:e,D:r,PC:o}){const n=Ks(t),i=n.am?s:e,[a,u]=m0(n.op,r,i);return n.d2&&(r=a),[{A:e,D:r,PC:o+1,ALU:a,flag:u},n.d3,a]}function Zs({inM:s,instruction:t,reset:e},{A:r,D:o,PC:n,ALU:i,flag:a}){const u=Ks(t),f=u.j1&&a===oe.Positive,m=u.j2&&a===oe.Zero,h=u.j3&&a===oe.Negative;n=e?0:f||m||h?r:n,u.c?u.d1&&(r=i):r=t&32767;const d=u.am?s:r,y=m0(u.op,o,d);return i=y[0],a=y[1],[{addressM:r,outM:i,writeM:u.d3},{A:r,D:o,ALU:i,flag:a,PC:n}]}var ie,ee,ae,o0,os;let q1=(os=class{constructor({RAM:t=new Fu,ROM:e}){C(this,"RAM");C(this,"ROM");C(this,"Screen");C(this,"Keyboard");Te(this,ie,0);Te(this,ee,0);Te(this,ae,0);Te(this,o0,{A:0,D:0,PC:0,ALU:0,flag:oe.Zero});this.RAM=t,this.ROM=e,this.Screen=new s0(this.RAM,v0,g0),this.Keyboard=new Du(this.RAM)}get state(){return Ht(this,o0)}get PC(){return Ht(this,ie)}get A(){return Ht(this,ee)}get D(){return Ht(this,ae)}setA(t){Qt(this,ee,t)}setD(t){Qt(this,ae,t)}setPC(t){Qt(this,ie,t)}reset(){Qt(this,ie,0),Qt(this,ee,0),Qt(this,ae,0)}tick(){const t=Ht(this,ee),e={inM:this.RAM.get(Ht(this,ee)),instruction:this.ROM.get(Ht(this,ie)),reset:!1},[r,o,n]=qs(e,{A:Ht(this,ee),D:Ht(this,ae),PC:Ht(this,ie),ALU:Ht(this,ae)});o&&this.RAM.set(t,n);const[i,{A:a,D:u,PC:f}]=Zs(e,r);Qt(this,ee,a),Qt(this,ae,u),Qt(this,ie,f)}},ie=new WeakMap,ee=new WeakMap,ae=new WeakMap,o0=new WeakMap,os);class be extends ye{constructor(e,r){super(["in[16]","load",`address[${e}]`],["out[16]"],r,[],["in","load"]);C(this,"width");C(this,"_memory");C(this,"_nextData",0);C(this,"_address",0);this.width=e,this._memory=new h1(Math.pow(2,this.width))}get memory(){return this._memory}get address(){return this._address}tick(){const e=this.in("load").voltage();this._address=this.in("address").busVoltage,e&&(this._nextData=this.in().busVoltage,this._memory.set(this._address,this._nextData))}tock(){var e;this.out().busVoltage=((e=this._memory)==null?void 0:e.get(this._address))??0}eval(){var r;const e=this.in("address").busVoltage;this.out().busVoltage=((r=this._memory)==null?void 0:r.get(e))??0}at(e){return bt(e<this._memory.size,()=>`Request out of bounds (${e} >= ${this._memory.size})`),new Nu(`${this.name}[${e}]`,e,this._memory)}get(e,r){return e===this.name?this.at(r??0):super.get(e)}reset(){this._memory.reset(),super.reset()}}class Nu extends Pt{constructor(e,r,o){super(e);C(this,"index");C(this,"ram");this.index=r,this.ram=o}get busVoltage(){return this.ram.get(this.index)}set busVoltage(e){this.ram.set(this.index,e)}}class Lu extends be{constructor(){super(3,"RAM8")}}class zu extends be{constructor(){super(6,"RAM64")}}class ju extends be{constructor(){super(9,"RAM512")}}class $u extends be{constructor(){super(12,"RAM4K")}}class Js extends be{constructor(){super(14,"RAM16K")}}class Xs extends be{constructor(){super(15,"ROM")}async load(t,e){try{(await Gs(t,e)).map((r,o)=>this.at(o).busVoltage=r)}catch{throw new Error(`ROM32K Failed to load file ${e}`)}}}class Zt extends be{constructor(){super(13,"Screen")}}C(Zt,"SIZE",v0),C(Zt,"OFFSET",g0);class te extends ht{constructor(){super([],["out[16]"],"Keyboard")}getKey(){return this.out().busVoltage}setKey(t){this.out().busVoltage=t&65535}clearKey(){this.out().busVoltage=0}get(t){return t===this.name?new f0(this.name,this.getKey()):super.get(t)}}C(te,"OFFSET",p1);class Ys extends ye{constructor(){super(["in[16]","load","address[15])"],["out[16]"],"Memory",[],["in","load"]);C(this,"ram",new Js);C(this,"screen",new Zt);C(this,"keyboard",new te);C(this,"address",0);this.parts.push(this.keyboard),this.parts.push(this.screen),this.parts.push(this.ram)}tick(){const e=this.in("load").voltage();if(this.address=this.in("address").busVoltage,e){const r=this.in().busVoltage;this.address>te.OFFSET,this.address==te.OFFSET||(this.address>=Zt.OFFSET?this.screen.at(this.address-Zt.OFFSET).busVoltage=r:this.ram.at(this.address).busVoltage=r)}}tock(){this.eval()}eval(){var r,o,n;if(!this.ram)return;this.address=this.in("address").busVoltage;let e=0;this.address>te.OFFSET||(this.address==te.OFFSET?e=((r=this.keyboard)==null?void 0:r.out().busVoltage)??0:this.address>=Zt.OFFSET?e=((o=this.screen)==null?void 0:o.at(this.address-Zt.OFFSET).busVoltage)??0:e=((n=this.ram)==null?void 0:n.at(this.address).busVoltage)??0),this.out().busVoltage=e}in(e){var r,o,n,i;if(e!=null&&e.startsWith("RAM16K")){const a=Le(((o=(r=e.match(/\[(?<idx>\d+)]/))==null?void 0:r.groups)==null?void 0:o.idx)??"0");return this.ram.at(a)}if(e!=null&&e.startsWith("Screen")){const a=Le(((i=(n=e.match(/\[(?<idx>\d+)]/))==null?void 0:n.groups)==null?void 0:i.idx)??"0");return this.screen.at(a)}return e!=null&&e.startsWith("Keyboard")?this.keyboard.out():super.in(e)}get(e,r=0){return e.startsWith("RAM16K")?this.at(r&16383):e.startsWith("Screen")?this.at(r&8191+Zt.OFFSET):e.startsWith("Keyboard")?this.at(te.OFFSET):e.startsWith("Memory")?this.at(r):super.get(e,r)}at(e){return e>te.OFFSET?Oe:e==te.OFFSET?this.keyboard.out():e>=Zt.OFFSET?this.screen.at(e-Zt.OFFSET):this.ram.at(e)}reset(){this.address=0,this.ram.reset(),this.screen.reset(),super.reset()}}class Uu extends Pt{constructor(e,r){super(e);C(this,"cpu");this.cpu=r}get busVoltage(){return this.cpu.D}set busVoltage(e){this.cpu.D=e}}class Vu extends Pt{constructor(e,r){super(e);C(this,"cpu");this.cpu=r}get busVoltage(){return this.cpu.A}set busVoltage(e){this.cpu.A=e}}class Wu extends Pt{constructor(e,r){super(e);C(this,"cpu");this.cpu=r}get busVoltage(){return this.cpu.PC}set busVoltage(e){this.cpu.PC=e}}class Qs extends ye{constructor(){super(["inM[16]","instruction[16]","reset"],["outM[16]","writeM","addressM[15]","pc[15]"],"CPU",[],["pc","addressM","reset"]);C(this,"_state",K1())}get state(){return this._state}tick(){const[e,r]=qs(this.cpuInput(),this._state);this._state=e,this.out("writeM").pull(r?tt:ot),this.out("outM").busVoltage=this._state.ALU??0}tock(){var o;if(!this._state)return;const[e,r]=Zs(this.cpuInput(),this._state);this._state=r,this.out("addressM").busVoltage=e.addressM??0,this.out("outM").busVoltage=e.outM??0,this.out("writeM").pull(e.writeM?tt:ot),this.out("pc").busVoltage=((o=this._state)==null?void 0:o.PC)??0}cpuInput(){const e=this.in("inM").busVoltage,r=this.in("instruction").busVoltage,o=this.in("reset").busVoltage===1;return{inM:e,instruction:r,reset:o}}get(e,r){return e!=null&&e.startsWith("ARegister")?new Vu("ARegister",this._state):e!=null&&e.startsWith("DRegister")?new Uu("DRegister",this._state):e!=null&&e.startsWith("PC")?new Wu("PC",this._state):super.get(e,r)}reset(){this._state=K1(),this._state.PC=-1,super.reset()}}class Hu extends ht{constructor(){super(["reset"],[]);C(this,"cpu",new Qs);C(this,"ram",new Ys);C(this,"rom",new Xs);this.wire(this.cpu,[{from:{name:"reset",start:0},to:{name:"reset",start:0}},{from:{name:"instruction",start:0},to:{name:"instruction",start:0}},{from:{name:"oldOutM",start:0},to:{name:"inM",start:0}},{from:{name:"writeM",start:0},to:{name:"writeM",start:0}},{from:{name:"addressM",start:0},to:{name:"addressM",start:0}},{from:{name:"newInM",start:0},to:{name:"outM",start:0}},{from:{name:"pc",start:0},to:{name:"pc",start:0}}]),this.wire(this.rom,[{from:{name:"pc",start:0},to:{name:"address",start:0}},{from:{name:"instruction",start:0},to:{name:"out",start:0}}]),this.wire(this.ram,[{from:{name:"newInM",start:0},to:{name:"in",start:0}},{from:{name:"writeM",start:0},to:{name:"load",start:0}},{from:{name:"addressM",start:0},to:{name:"address",start:0}},{from:{name:"oldOutM",start:0},to:{name:"out",start:0}}]);for(const e of[...this.ins.entries(),...this.outs.entries()])this.isClockedPin(e.name)&&this.clockedPins.add(e.name)}eval(){super.eval()}get(e,r){return e.startsWith("PC")||e.startsWith("ARegister")||e.startsWith("DRegister")?this.cpu.get(e):e.startsWith("RAM16K")?this.ram.get(e,r):super.get(e,r)}async load(e,r){return await this.rom.load(e,r)}}function Gu(s,t){return[s===1&&t===1?tt:ot]}function Ku(s,t){return[s&t&65535]}class qu extends ht{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=Gu(t,e);this.out().pull(r)}}class Zu extends ht{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=Ku(t,e);this.out().busVoltage=r}}function Ju(s,t){return[t===ot&&s===tt?tt:ot,t===tt&&s===tt?tt:ot]}function Xu(s,t){return[t===0&&s===tt?tt:ot,t===1&&s===tt?tt:ot,t===2&&s===tt?tt:ot,t===3&&s===tt?tt:ot]}function Yu(s,t){return[t===0&&s===tt?tt:ot,t===1&&s===tt?tt:ot,t===2&&s===tt?tt:ot,t===3&&s===tt?tt:ot,t===4&&s===tt?tt:ot,t===5&&s===tt?tt:ot,t===6&&s===tt?tt:ot,t===7&&s===tt?tt:ot]}class Qu extends ht{constructor(){super(["in","sel"],["a","b"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").voltage(),[r,o]=Ju(t,e);this.out("a").pull(r),this.out("b").pull(o)}}class tc extends ht{constructor(){super(["in","sel[2]"],["a","b","c","d"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[r,o,n,i]=Xu(t,e);this.out("a").pull(r),this.out("b").pull(o),this.out("c").pull(n),this.out("d").pull(i)}}class ec extends ht{constructor(){super(["in","sel[3]"],["a","b","c","d","e","f","g","h"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[r,o,n,i,a,u,f,m]=Yu(t,e);this.out("a").pull(r),this.out("b").pull(o),this.out("c").pull(n),this.out("d").pull(i),this.out("e").pull(a),this.out("f").pull(u),this.out("g").pull(f),this.out("h").pull(m)}}function sc(s,t,e){return[e===ot?s:t]}function K0(s,t,e){return[e===ot?s:t]}function q0(s,t,e,r,o){const n=o&1;return o&2?K0(e,r,n):K0(s,t,n)}function rc(s,t,e,r,o,n,i,a,u){const f=u&3;return u&4?q0(o,n,i,a,f):q0(s,t,e,r,f)}class oc extends ht{constructor(){super(["a","b","sel"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),r=this.in("sel").voltage(),[o]=sc(t,e,r);this.out().pull(o)}}class nc extends ht{constructor(){super(["a[16]","b[16]","sel"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,r=this.in("sel").voltage(),[o]=K0(t,e,r);this.out().busVoltage=o}}class ic extends ht{constructor(){super(["a[16]","b[16]","c[16]","d[16]","sel[2]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,r=this.in("c").busVoltage,o=this.in("d").busVoltage,n=this.in("sel").busVoltage,[i]=q0(t,e,r,o,n);this.out().busVoltage=i}}class ac extends ht{constructor(){super(["a[16]","b[16]","c[16]","d[16]","e[16]","f[16]","g[16]","h[16]","sel[3]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,r=this.in("c").busVoltage,o=this.in("d").busVoltage,n=this.in("e").busVoltage,i=this.in("f").busVoltage,a=this.in("g").busVoltage,u=this.in("h").busVoltage,f=this.in("sel").busVoltage,[m]=rc(t,e,r,o,n,i,a,u,f);this.out().busVoltage=m}}function uc(s,t){return[s===1&&t===1?ot:tt]}class cc extends ht{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=uc(t,e);this.out().pull(r)}}class lc extends ht{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage;this.out().busVoltage=za(t,e)}}function dc(s){return[s===ot?tt:ot]}function pc(s){return[~s&65535]}class hc extends ht{constructor(){super(["in"],["out"])}eval(){const t=this.in("in").voltage(),[e]=dc(t);this.out().pull(e)}}class fc extends ht{constructor(){super(["in[16]"],["out[16]"])}eval(){const[t]=pc(this.in().busVoltage);this.out().busVoltage=t}}function mc(s,t){return[s===tt&&t===ot||s===ot&&t===tt?tt:ot]}function gc(s,t){return[(s^t)&65535]}class Z1 extends ht{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=mc(t,e);this.out().pull(r)}}class J1 extends ht{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=gc(t,e);this.out().busVoltage=r}}class vc extends ye{constructor(e){super(["in","load"],["out"],e,[],["in","load"]);C(this,"bit",ot)}tick(){this.in("load").voltage()===tt&&(this.bit=this.in().voltage())}tock(){this.out().pull(this.bit??0)}reset(){this.bit=ot,super.reset()}}class tr extends Pt{constructor(e,r){super(e);C(this,"register");this.register=r}get busVoltage(){return this.register.bits&65535}set busVoltage(e){this.register.bits=e&65535}}class Ye extends ye{constructor(e){super(["in[16]","load"],["out[16]"],e,[],["in","load"]);C(this,"bits",0)}tick(){this.in("load").voltage()===tt&&(this.bits=this.in().busVoltage&65535)}tock(){this.out().busVoltage=this.bits&65535}get(e,r){return e===this.name?new tr(this.name,this):super.get(e,r)}reset(){this.bits=0,super.reset()}}class X1 extends Ye{}class kc extends ye{constructor(e){super(["in[16]","reset","load","inc"],["out[16]"],e,[],["in","reset","load","inc"]);C(this,"bits",0)}tick(){this.in("reset").voltage()===tt?this.bits=0:this.in("load").voltage()===tt?this.bits=this.in().busVoltage&65535:this.in("inc").voltage()===tt&&(this.bits+=1)}tock(){this.out().busVoltage=this.bits&65535}get(e,r){return e===this.name?new tr(this.name,this):super.get(e,r)}reset(){this.bits=0,super.reset()}}class yc extends ye{constructor(t){super(["in"],["out"],t,["t"],["in"])}tick(){const t=this.in().voltage();this.pin("t").pull(t)}tock(){const t=this.pin("t").voltage();this.out().pull(t)}}const er=new Map([["Nand",cc],["Nand16",lc],["Not",hc],["Not16",fc],["And",qu],["And16",Zu],["Or",fu],["Or16",mu],["Or8Way",gu],["XOr",Z1],["XOr16",J1],["Xor",Z1],["Xor16",J1],["Mux",oc],["Mux16",nc],["Mux4Way16",ic],["Mux8Way16",ac],["DMux",Qu],["DMux4Way",tc],["DMux8Way",ec],["HalfAdder",vu],["FullAdder",yu],["Add16",iu],["Inc16",wu],["ALU",du],["ALUNoStat",lu],["DFF",yc],["Bit",vc],["Register",Ye],["ARegister",Ye],["DRegister",Ye],["PC",kc],["RAM8",Lu],["RAM64",zu],["RAM512",ju],["RAM4K",$u],["RAM16K",Js],["ROM32K",Xs],["Screen",Zt],["Keyboard",te],["CPU",Qs],["Computer",Hu],["Memory",Ys],["ARegister",X1],["DRegister",X1]].map(([s,t])=>[s,()=>{const e=new t;return e.name=s,e}]));function bc(s){return er.has(s)}async function sr(s){if(G1[s]){const e=await wc(G1[s],s);return dt(e)?et(new Error(et(e).message)):e}const t=er.get(s);return t?at(t()):et(new Error(`Chip ${s} not in builtin registry`))}function Y1(s){const t=s.start??0;return s.end===void 0?at(void 0):s.end>=t?at(s.end-t+1):et(yt("Bus start index should be less than or equal to bus end index",s.span))}async function wc(s,t,e,r){const o=u1.parse(s.toString());return dt(o)?o:f1({parts:at(o),dir:t,name:e,fs:r})}async function Bc(s,t,e){if(bc(s)||e===void 0)return await sr(s);try{const r=await e.readFile(`${t}/${s}.hdl`),o=u1.parse(r);let n;if(Fe(o)){const i=await f1({parts:at(o),dir:t,name:s,fs:e});dt(i)?n=et(new Error(et(i).message)):n=i}else n=et(new Error("HDL Was not parsed"));return n}catch{return et(new Error(`Could not load chip ${s}.hdl`))}}async function f1(...s){return await m1.build(...s)}function R0(s){if(s.start!=null&&s.end!=null)return s.end-s.start+1}function Q1(s){return s.start!=null&&s.end!=null?`${s.pin}[${s.start}..${s.end}]`:s.pin}function _c(s,t){const e=Y1(s),r=Y1(t);return dt(e)?e:dt(r)?r:at({to:{name:s.pin.toString(),start:s.start??0,width:at(e)},from:{name:t.pin.toString(),start:t.start??0,width:at(r)}})}function ts(s){if(s.start!=null&&s.end!=null){const t=[];for(let e=s.start;e<=s.end;e++)t.push(e);return t}return[-1]}function es(s,t){let e;const r=t.get(s.pin);if(!r)t.set(s.pin,new Set(ts(s)));else if(r.has(-1))e=s.start??-1;else if(s.start!==void 0&&s.end!==void 0)for(const o of ts(s))r.has(o)&&(e=o),r.add(o);else r.add(-1);return e!=null?et(yt(`Cannot write to pin ${s.pin}${e!=-1?`[${e}]`:""} multiple times`,s.span)):at()}class m1{constructor({parts:t,fs:e,dir:r,name:o}){C(this,"parts");C(this,"fs");C(this,"dir");C(this,"expectedName");C(this,"chip");C(this,"internalPins",new Map);C(this,"inPins",new Map);C(this,"outPins",new Map);C(this,"wires",[]);this.parts=t,this.expectedName=o,this.dir=r,this.fs=e,this.chip=new ht(t.ins.map(({pin:n,width:i})=>({pin:n.toString(),width:i})),t.outs.map(({pin:n,width:i})=>({pin:n.toString(),width:i})),t.name.value,[],t.clocked)}static build(t){return new m1(t).build()}async build(){if(this.expectedName&&this.parts.name.value!=this.expectedName)return et(yt("Wrong chip name",this.parts.name.span));if(this.parts.parts==="BUILTIN")return await sr(this.parts.name.value);const t=await this.wireParts();if(dt(t))return t;this.chip.clockedPins=new Set([...this.chip.ins.entries(),...this.chip.outs.entries()].map(e=>e.name).filter(e=>this.chip.isClockedPin(e)));for(const e of this.chip.parts)e.subscribeToClock();return at(this.chip)}async wireParts(){if(this.parts.parts==="BUILTIN")return at();for(const e of this.parts.parts){const r=await Bc(e.name,this.dir,this.fs);if(dt(r))return et(yt(`Undefined chip name: ${e.name}`,e.span));const o=at(r);if(o.name==this.chip.name)return et(yt(`Cannot use chip ${o.name} to implement itself`,e.span));const n=this.wirePart(e,o);if(dt(n))return n}let t=this.validateInternalPins();return dt(t)||(t=this.validateWireWidths(),dt(t))?t:at()}checkLoops(t,e){const r=new Set,o=new Set;let n;for(const{lhs:i,rhs:a}of t.wires)if(e.isInPin(i.pin))if(o.has(a.pin)){n=a.pin;break}else r.add(a.pin);else if(e.isOutPin(i.pin))if(r.has(a.pin)){n=a.pin;break}else o.add(a.pin);return n?et(yt(`Looping wire ${n}`,t.span)):at()}wirePart(t,e){const r=this.checkLoops(t,e);if(dt(r))return r;const o=[];this.inPins.clear();for(const{lhs:n,rhs:i}of t.wires){const a=this.validateWire(e,n,i);if(dt(a))return a;const u=_c(n,i);if(dt(u))return u;o.push(at(u))}try{const n=this.chip.wire(e,o);if(dt(n)){const i=et(n);return et(yt(i.message,i.lhs?t.wires[i.wireIndex].lhs.span:t.wires[i.wireIndex].rhs.span))}return this.chip.sortParts(),at()}catch(n){return et(yt(n.message,t.span))}}validateWire(t,e,r){if(t.isInPin(e.pin)){const o=this.validateInputWire(e,r);if(dt(o))return o}else if(t.isOutPin(e.pin)){const o=this.validateOutputWire(t,e,r);if(dt(o))return o}else return et(yt(`Undefined pin name: ${e.pin}`,e.span));return Xe(r.pin)||this.wires.push({partChip:t,lhs:e,rhs:r}),at()}validateInputWire(t,e){let r=this.validateInputSource(e);if(dt(r)||(r=es(t,this.inPins),dt(r)))return r;if(this.chip.isInternalPin(e.pin)){const o=this.internalPins.get(e.pin);o==null?this.internalPins.set(e.pin,{isDefined:!1,firstUse:e.span}):o.firstUse=o.firstUse.start<e.span.start?o.firstUse:e.span}return at()}validateOutputWire(t,e,r){var n;let o=this.validateWriteTarget(r);if(dt(o))return o;if(this.chip.isOutPin(r.pin)){if(o=es(r,this.outPins),dt(o))return o}else{if(r.start!==void 0||r.end!==void 0)return et(yt(`Internal pins (in this case: ${r.pin}) cannot be subscripted or indexed`,r.span));const i=this.internalPins.get(r.pin),a=R0(e)??((n=t.get(e.pin))==null?void 0:n.width);if(i==null)this.internalPins.set(r.pin,{isDefined:!0,firstUse:r.span,width:a});else{if(i.isDefined)return et(yt(`Internal pin ${r.pin} already defined`,r.span));i.isDefined=!0,i.width=a}}return at()}validateWriteTarget(t){return this.chip.isInPin(t.pin)?et(yt(`Cannot write to input pin ${t.pin}`,t.span)):Xe(t.pin)?et(yt('Internal pin name cannot be "true" or "false"',t.span)):at()}validateInputSource(t){return this.chip.isOutPin(t.pin)?et(yt("Cannot use output pin as input",t.span)):!this.chip.isInPin(t.pin)&&t.start!=null?et(yt(Xe(t.pin)?"Constant bus cannot be subscripted or indexed":`Internal pins (in this case: ${t.pin}) cannot be subscripted or indexed`,t.span)):at()}validateInternalPins(){for(const[t,e]of this.internalPins)if(!e.isDefined)return et(yt(t.toLowerCase()=="true"||t.toLowerCase()=="false"?`The constant bus ${t.toLowerCase()} must be in lower-case`:`Undefined internal pin name: ${t}`,e.firstUse));return at()}validateWireWidths(){var t,e,r;for(const o of this.wires){const n=R0(o.lhs)??((t=o.partChip.get(o.lhs.pin))==null?void 0:t.width),i=R0(o.rhs)??((e=this.chip.get(o.rhs.pin))==null?void 0:e.width)??((r=this.internalPins.get(o.rhs.pin))==null?void 0:r.width);if(n!=i)return et(yt(`Different bus widths: ${Q1(o.lhs)}(${n}) and ${Q1(o.rhs)}(${i})`,{start:o.lhs.span.start,end:o.rhs.span.end,line:o.lhs.span.line}))}return at()}}const rr=`
Tst <: Base {
  Root := Tst
  Tst = (TstStatement | TstRepeat | TstWhile)+

  TstRepeat = Repeat Number? OpenBrace TstCommand+ CloseBrace
  TstWhile = While Condition OpenBrace TstCommand+ CloseBrace
  TstStatement = TstCommand

  TstCommand = TstOperation Separator
  Separator = (Semi | Bang | Comma)

  TstOperation =
    | TstFileOperation
    | TstOutputListOperation
    | TstEvalOperation
    | TstSetOperation
    | TstOutputOperation
    | TstEchoOperation
    | TstClearEchoOperation
    | TstLoadROMOperation
    | TstResetRAMOperation

  TstLoadROMOperation = ROM32K Load FileName
  TstFileOperation = FileOperation FileName?
  TstOutputListOperation = "output-list" OutputFormat+
  OutputFormat = Name Index? FormatSpec?
  FormatSpec = percent FormatStyle wholeDec dot wholeDec dot wholeDec
  TstSetOperation = Set Name Index? Number
  Index = OpenSquare wholeDec? CloseSquare
  Condition = Value CompareOp Value
  TstEvalOperation = Eval | TickTock | Tick | Tock | VmStep
  TstOutputOperation = Output
  TstEchoOperation = Echo String
  TstClearEchoOperation = ClearEcho
  TstResetRAMOperation = ResetRAM

  filename = (alnum|underscore|dot|dollar|minus)+
  FileName = filename
  FileOperation = "load" | "output-file" | "compare-to"

  Set = "set"
  Eval = "eval"
  Tick = "tick"
  Tock = "tock"
  TickTock = "ticktock"
  VmStep = "vmstep"
  Echo = "echo"
  Repeat = "repeat"
  ClearEcho = "clear-echo"
  Output = "output"
  OutputList = "output-list"
  FormatStyle = "B"|"D"|"S"|"X"
  ROM32K = "ROM32K"
  Load = "load"
  While = "while"
  ResetRAM = "resetRam"

  CompareOp = "<>" | "<=" | ">=" | "=" | "<" | ">"
}`,Z0=d0(rr,p0),Vt=Z0.extendSemantics(ke);Vt.extendAttribute("value",{Index(s,t,e){var r;return((r=t==null?void 0:t.child(0))==null?void 0:r.value)??-1}});Vt.extendAttribute("name",{FileName({name:s}){return s}});Vt.addAttribute("index",{Index(s,t,e){var r;return((r=t.child(0))==null?void 0:r.value)??0}});Vt.addAttribute("formatSpec",{FormatSpec(s,{sourceString:t},{value:e},r,{value:o},n,{value:i}){return{style:t,width:o,lpad:e,rpad:i}}});Vt.addAttribute("format",{OutputFormat({name:s},t,e){var r,o;return{id:s,builtin:(t==null?void 0:t.child(0))!==void 0,address:((r=t==null?void 0:t.child(0))==null?void 0:r.value)??-1,format:(o=e==null?void 0:e.child(0))==null?void 0:o.formatSpec}}});Vt.addAttribute("operation",{TstEvalOperation(s){return{op:s.sourceString}},TstOutputOperation(s){return{op:"output"}},TstOutputListOperation(s,t){return{op:"output-list",spec:t.children.map(e=>e.format)}},TstSetOperation(s,{name:t},e,{value:r}){var i,a;const o={op:"set",id:t,value:r},n=(a=(i=e.child(0))==null?void 0:i.child(1))==null?void 0:a.child(0);return n&&(o.index=n.value),o},TstEchoOperation(s,t){return{op:"echo",message:t.String}},TstClearEchoOperation(s){return{op:"clear-echo"}},TstLoadROMOperation(s,t,e){return{op:"loadRom",file:e.sourceString}},TstFileOperation(s,t){return{op:s.sourceString,file:t==null?void 0:t.sourceString}},TstResetRAMOperation(s){return{op:"resetRam"}}});Vt.addAttribute("command",{TstCommand(s,t){return{op:s.operation,separator:t.sourceString,span:Gt(this.source)}}});Vt.addAttribute("condition",{Condition({value:s},{sourceString:t},{value:e}){return{left:s,right:e,op:t}}});Vt.addAttribute("statement",{TstWhile(s,t,e,r,o){return{statements:r.children.map(n=>n.command),condition:t.condition,span:Gt(this.source)}},TstRepeat(s,t,e,r,o){return{statements:r.children.map(n=>n.command),count:t.sourceString?Number(t.sourceString):-1,span:Gt(this.source)}},TstStatement(s){return s.command}});Vt.addAttribute("tst",{Tst(s){return{lines:s.children.map(t=>t.statement)}}});Vt.addAttribute("root",{Root({tst:s}){return s}});const or={grammar:rr,semantics:Vt,parser:Z0,parse:a1(Z0,Vt)};class Ac{constructor(t,e="%B1.1.1",r,o,n,i,a){C(this,"variable");C(this,"fmt");C(this,"lPad");C(this,"rPad");C(this,"len");C(this,"index");C(this,"builtin");var u;if(this.variable=t,e.startsWith("%")&&r===void 0&&o===void 0&&n===void 0){const{fmt:f,lPad:m,rPad:h,len:v}=(u=e.match(/^%(?<fmt>[BDXS])(?<lPad>\d+)\.(?<len>\d+)\.(?<rPad>\d+)$/))==null?void 0:u.groups;this.fmt=f,this.lPad=parseInt(m),this.rPad=parseInt(h),this.len=parseInt(v),this.builtin=!1,this.index=-1}else bt(["B","X","D","S"].includes(e[0])),this.fmt=e[0],this.len=r??3,this.lPad=o??1,this.rPad=n??1,this.builtin=i??!1,this.index=a??-1}header(t){let e=`${this.variable}`;if(this.builtin){const r=this.index>=0?this.index:"";e=`${e}[${r}]`}return e.length>this.len+this.lPad+this.rPad?e.substring(0,this.len+this.lPad+this.rPad):this.padCenter(e)}print(t){const e=t.getVar(this.variable,this.index);if(this.fmt==="S")return this.padLeft(e);const r={B:Na,D:La,X:Fa}[this.fmt],o=r(e);return this.fmt==="D"?this.padRight(o):this.padLeft(o.slice(o.length-this.len))}padCenter(t){const e=this.lPad+this.len+this.rPad,r=Math.floor((e-t.length)/2),o=e-r-t.length,n=r+t.length,i=n+o;return t=t.padStart(n),t=t.padEnd(i),t}padLeft(t){t=t.substring(0,this.len);const e=this.rPad+this.len,r=this.lPad+e;return t=t.padEnd(e),t=t.padStart(r),t}padRight(t){t=t.substring(0,this.len);const e=this.lPad+this.len,r=this.rPad+e;return t=t.padStart(e),t=t.padEnd(r),t}}class nr{constructor(t){C(this,"span");this.span=t}async do(){}*steps(){yield this}}class ir extends nr{}class ar extends nr{}class Sc{constructor(t,e,r){C(this,"variable");C(this,"value");C(this,"index");this.variable=t,this.value=e,this.index=r}async do(t){t.setVar(this.variable,this.value,this.index)}*steps(){yield this}}class xc{async do(t){t.output()}*steps(){yield this}}class Ic{constructor(t=[]){C(this,"outputs",[]);for(const e of t)this.addOutput(e)}addOutput(t){var e,r,o,n;this.outputs.push({id:t.id,style:((e=t.format)==null?void 0:e.style)??"B",len:((r=t.format)==null?void 0:r.width)??-1,lpad:((o=t.format)==null?void 0:o.lpad)??1,rpad:((n=t.format)==null?void 0:n.rpad)??1,builtin:t.builtin,address:t.address})}async do(t){t.outputList(this.outputs),t.header()}*steps(){yield this}}class ur{constructor(){C(this,"instructions",[]);C(this,"span")}addInstruction(t){this.instructions.push(t)}async do(t){for(const e of this.instructions)e.do(t)}*steps(t){yield this}}class Rc extends ur{constructor(e){super();C(this,"repeat");this.repeat=e}async do(){}*innerSteps(e){for(const r of this.instructions)yield*r.steps(e)}*steps(e){if(this.repeat===-1)for(yield this;;)yield*this.innerSteps(e);else for(let r=0;r<this.repeat;r++)yield this,yield*this.innerSteps(e)}}class Tc{constructor(t,e,r){C(this,"x");C(this,"y");C(this,"op");this.x=t,this.y=e,this.op=r}check(t){const e=t.hasVar(this.x)?t.getVar(this.x):this.x,r=t.hasVar(this.y)?t.getVar(this.y):this.y;if(typeof e=="string"||typeof r=="string")switch(this.op){case"=":return`${e}`==`${r}`;case"<>":return`${e}`!=`${r}`}else switch(this.op){case"<":return e<r;case"<=":return e<=r;case">":return e>r;case">=":return e>=r;case"=":return e===r;case"<>":return e!==r}return!1}}class Mc extends ur{constructor(e){super();C(this,"condition");this.condition=e}*steps(e){for(;this.condition.check(e);){yield this;for(const r of this.instructions)yield*r.steps(e)}}}class Cc{constructor(t){C(this,"content");this.content=t}async do(t){t.echo(this.content)}*steps(){yield this}}class Ec{async do(t){t.clearEcho()}*steps(){yield this}}class Pc{constructor(t){C(this,"file");this.file=t}async do(t){await t.loadROM(this.file)}*steps(){yield this}}class Oc{constructor(t){C(this,"file");this.file=t}async do(t){await t.load(this.file)}*steps(){yield this}}class Dc{constructor(t){C(this,"file");this.file=t}async do(t){this.file&&await t.compareTo(this.file)}*steps(){yield this}}class Fc{constructor(t){C(this,"file");this.file=t}async do(t){this.file&&t.outputFile(this.file)}*steps(){yield this}}const Nc=7;class cr{constructor(t,e,r){C(this,"instructions",[]);C(this,"_outputList",[]);C(this,"_log","");C(this,"fs",new xr);C(this,"doEcho");C(this,"doCompareTo");C(this,"dir");C(this,"outputFileName");C(this,"_steps");C(this,"_step");C(this,"breakpoints",new Map);this.doEcho=e,this.doCompareTo=r,this.dir=t}setFileSystem(t){return this.fs=t,this}echo(t){var e;(e=this.doEcho)==null||e.call(this,t)}clearEcho(){var t;(t=this.doEcho)==null||t.call(this,"")}async loadROM(t){}async load(t){}async compareTo(t){var e;(e=this.doCompareTo)==null||e.call(this,t)}outputFile(t){this.outputFileName=t}createOutputs(t){return t.map(e=>{if(e.len===-1)if(e.id==="time")e.len=Nc,e.style="S";else{const r=this.getWidth(e.id,e.address);e.style==="B"?e.len=r:e.style==="D"?e.len=Math.ceil(Math.log(r)):e.style==="X"&&(e.len=Math.ceil(r/4))}return new Ac(e.id,e.style,e.len,e.lpad,e.rpad,e.builtin,e.address)})}outputList(t){this._outputList=this.createOutputs(t)}addInstruction(t){this.instructions.push(t)}reset(){return this._steps=function*(t){for(const e of t.instructions)yield*e.steps(t)}(this),this._step=this._steps.next(),this._log="",this}get steps(){return this._steps===void 0&&(this.reset(),this._steps=At(this._steps,"Reset did not initialize steps"),this._step=At(this._step,"Reset did not find first step")),this._steps}get currentStep(){var t;return(t=this._step)==null?void 0:t.value}get done(){var t;return((t=this._step)==null?void 0:t.done)??!1}async step(){for(;!this._step.done;){if(await this._step.value.do(this),this._step=this.steps.next(),this._step.value instanceof ir)return this._step=this.steps.next(),!1;if(this._step.value instanceof ar)return!0}return!0}async run(){for(this.reset();!await this.step(););}addBreakpoint(t,e){this.breakpoints.set(t,e)}clearBreakpoints(){this.breakpoints.clear()}output(){const t=this._outputList.map(e=>e.print(this));this._log+=`|${t.join("|")}|
`}header(){const t=this._outputList.map(e=>e.header(this));this._log+=`|${t.join("|")}|
`}log(){return this._log}}class g1 extends cr{constructor({dir:e,rom:r=new r0,doEcho:o,doLoad:n,compareTo:i}={}){super(e,o,i);C(this,"cpu");C(this,"ticks",0);C(this,"doLoad");C(this,"fileLoaded",!1);C(this,"hasLoad",!1);this.doLoad=n,this.cpu=new q1({ROM:r}),this.reset()}static from(e,r={}){const o=new g1(r);return o.hasLoad=e.lines.some(n=>lr(n)&&n.op.op=="load"),dr(o,e,r.requireLoad)}async step(){if(!this.hasLoad&&this.cpu.ROM.isEmpty())throw new Error("Cannot execute the test without first loading an .asm or .hack file");return super.step()}async load(e){var n,i;if(!e&&!this.dir)return;const r=At((n=this.dir)==null?void 0:n.split("/").slice(0,-1).join("/")),o=await((i=this.doLoad)==null?void 0:i.call(this,e?`${r}/${e}`:r));o&&(this.cpu=new q1({ROM:o}))}reset(){return super.reset(),this.cpu.reset(),this.ticks=0,this}hasVar(e){return typeof e=="number"?!1:!!(e==="A"||e==="D"||e==="PC"||e==="time"||e.startsWith("RAM"))}getVar(e,r){switch(e){case"A":return this.cpu.A;case"D":return this.cpu.D;case"PC":return this.cpu.PC;case"time":return this.ticks;case"RAM":return r===void 0?0:this.cpu.RAM.get(r)}if(typeof e=="number")return 0;if(e.startsWith("RAM")){const o=Number(e.substring(4,e.length-1));return this.cpu.RAM.get(o)}return 0}getWidth(e,r){return 16}setVar(e,r,o){switch(e){case"A":this.cpu.setA(r);break;case"D":this.cpu.setD(r);break;case"PC":this.cpu.setPC(r);break;case"RAM":this.cpu.RAM.set(o??0,r);break}}ticktock(){this.ticks+=1,this.cpu.tick()}async loadROM(e){await this.cpu.ROM.load(this.fs,e)}}class Lc{constructor(){C(this,"_cpuTestInstruction_",!0)}async do(t){t.ticktock()}*steps(){yield this}}class zc{constructor(){C(this,"_cpuTestInstruction_",!0)}async do(t){t.cpu.RAM.reset()}*steps(){yield this}}var ss;(function(s){s[s.SYS_WAIT_DURATION_NOT_POSITIVE=1]="SYS_WAIT_DURATION_NOT_POSITIVE",s[s.ARRAY_SIZE_NOT_POSITIVE=2]="ARRAY_SIZE_NOT_POSITIVE",s[s.DIVIDE_BY_ZERO=3]="DIVIDE_BY_ZERO",s[s.SQRT_NEG=4]="SQRT_NEG",s[s.ALLOC_SIZE_NOT_POSITIVE=5]="ALLOC_SIZE_NOT_POSITIVE",s[s.HEAP_OVERFLOW=6]="HEAP_OVERFLOW",s[s.ILLEGAL_PIXEL_COORD=7]="ILLEGAL_PIXEL_COORD",s[s.ILLEGAL_LINE_COORD=8]="ILLEGAL_LINE_COORD",s[s.ILLEGAL_RECT_COORD=9]="ILLEGAL_RECT_COORD",s[s.ILLEGAL_CENTER_COORD=12]="ILLEGAL_CENTER_COORD",s[s.ILLEGAL_RADIUS=13]="ILLEGAL_RADIUS",s[s.STRING_LENGTH_NEG=14]="STRING_LENGTH_NEG",s[s.GET_CHAR_INDEX_OUT_OF_BOUNDS=15]="GET_CHAR_INDEX_OUT_OF_BOUNDS",s[s.SET_CHAR_INDEX_OUT_OF_BOUNDS=16]="SET_CHAR_INDEX_OUT_OF_BOUNDS",s[s.STRING_FULL=17]="STRING_FULL",s[s.STRING_EMPTY=18]="STRING_EMPTY",s[s.STRING_INSUFFICIENT_CAPACITY=19]="STRING_INSUFFICIENT_CAPACITY",s[s.ILLEGAL_CURSOR_LOCATION=20]="ILLEGAL_CURSOR_LOCATION"})(ss||(ss={}));const jc=126;$c();function H(s){return s.map(t=>t.split("").map(e=>e=="█"))}function $c(){const s=new Array(jc);return s[32]=H(["        ","        ","        ","        ","        ","        ","        ","        ","        ","        ","        "]),s[33]=H(["  ██    "," ████   "," ████   "," ████   ","  ██    ","  ██    ","        ","  ██    ","  ██    ","        ","        "]),s[34]=H([" ██ ██  "," ██ ██  ","  █ █   ","        ","        ","        ","        ","        ","        ","        ","        "]),s[35]=H(["        "," █  █   "," █  █   ","██████  "," █  █   "," █  █   ","██████  "," █  █   "," █  █   ","        ","        "]),s[36]=H(["  ██    "," ████   ","██  ██  ","██      "," ████   ","    ██  ","██  ██  "," ████   ","  ██    ","  ██    ","        "]),s[37]=H(["        ","        ","██   █  ","██  ██  ","   ██   ","  ██    "," ██     ","██  ██  ","█   ██  ","        ","        "]),s[38]=H(["  ██    "," ████   "," ████   ","  ██    "," ██ ██  ","██ ██   ","██ ██   ","██ ██   "," ██ ██  ","        ","        "]),s[39]=H(["  ██    ","  ██    "," ██     ","        ","        ","        ","        ","        ","        ","        ","        "]),s[40]=H(["   ██   ","  ██    "," ██     "," ██     "," ██     "," ██     "," ██     ","  ██    ","   ██   ","        ","        "]),s[41]=H([" ██     ","  ██    ","   ██   ","   ██   ","   ██   ","   ██   ","   ██   ","  ██    "," ██     ","        ","        "]),s[42]=H(["        ","        ","        ","██  ██  "," ████   ","██████  "," ████   ","██  ██  ","        ","        ","        "]),s[43]=H(["        ","        ","        ","  ██    ","  ██    ","██████  ","  ██    ","  ██    ","        ","        ","        "]),s[44]=H(["        ","        ","        ","        ","        ","        ","        ","  ██    ","  ██    "," ██     ","        "]),s[45]=H(["        ","        ","        ","        ","        ","██████  ","        ","        ","        ","        ","        "]),s[46]=H(["        ","        ","        ","        ","        ","        ","        ","  ██    ","  ██    ","        ","        "]),s[47]=H(["        ","        ","     █  ","    ██  ","   ██   ","  ██    "," ██     ","██      ","█       ","        ","        "]),s[48]=H(["  ██    "," ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","  ██    ","        ","        "]),s[49]=H(["  ██    "," ███    ","████    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","██████  ","        ","        "]),s[50]=H([" ████   ","██  ██  ","    ██  ","   ██   ","  ██    "," ██     ","██      ","██  ██  ","██████  ","        ","        "]),s[51]=H([" ████   ","██  ██  ","    ██  ","    ██  ","  ███   ","    ██  ","    ██  ","██  ██  "," ████   ","        ","        "]),s[52]=H(["    █   ","   ██   ","  ███   "," █ ██   ","█  ██   ","██████  ","   ██   ","   ██   ","  ████  ","        ","        "]),s[53]=H(["██████  ","██      ","██      ","█████   ","    ██  ","    ██  ","    ██  ","██  ██  "," ████   ","        ","        "]),s[54]=H(["  ███   "," ██     ","██      ","██      ","█████   ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[55]=H(["██████  ","█   ██  ","    ██  ","    ██  ","   ██   ","  ██    ","  ██    ","  ██    ","  ██    ","        ","        "]),s[56]=H([" ████   ","██  ██  ","██  ██  ","██  ██  "," ████   ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[57]=H([" ████   ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","    ██  ","   ██   "," ███    ","        ","        "]),s[58]=H(["        ","        ","  ██    ","  ██    ","        ","        ","  ██    ","  ██    ","        ","        ","        "]),s[59]=H(["        ","        ","  ██    ","  ██    ","        ","        ","  ██    ","  ██    "," ██     ","        ","        "]),s[60]=H(["        ","        ","   ██   ","  ██    "," ██     ","██      "," ██     ","  ██    ","   ██   ","        ","        "]),s[61]=H(["        ","        ","        ","██████  ","        ","        ","██████  ","        ","        ","        ","        "]),s[62]=H(["        ","        ","██      "," ██     ","  ██    ","   ██   ","  ██    "," ██     ","██      ","        ","        "]),s[64]=H([" ████   ","██  ██  ","██  ██  ","██ ███  ","██ ███  ","██ ███  ","██ ██   ","██      "," ████   ","        ","        "]),s[63]=H([" ████   ","██  ██  ","██  ██  ","   ██   ","  ██    ","  ██    ","        ","  ██    ","  ██    ","        ","        "]),s[65]=H(["  ██    "," ████   ","██  ██  ","██  ██  ","██████  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[66]=H(["█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","        ","        "]),s[67]=H(["  ███   "," ██ ██  ","██   █  ","██      ","██      ","██      ","██   █  "," ██ ██  ","  ███   ","        ","        "]),s[68]=H(["████    ","██ ██   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██ ██   ","████    ","        ","        "]),s[69]=H(["██████  ","██  ██  ","██   █  ","██ █    ","████    ","██ █    ","██   █  ","██  ██  ","██████  ","        ","        "]),s[70]=H(["██████  ","██  ██  ","██   █  ","██ █    ","████    ","██ █    ","██      ","██      ","██      ","        ","        "]),s[71]=H(["  ███   "," ██ ██  ","██   █  ","██      ","██ ███  ","██  ██  ","██  ██  "," ██ ██  ","  ██ █  ","        ","        "]),s[72]=H(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██████  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[73]=H([" ████   ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[74]=H(["  ████  ","   ██   ","   ██   ","   ██   ","   ██   ","   ██   ","██ ██   ","██ ██   "," ███    ","        ","        "]),s[75]=H(["██  ██  ","██  ██  ","██  ██  ","██ ██   ","████    ","██ ██   ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[76]=H(["██      ","██      ","██      ","██      ","██      ","██      ","██   █  ","██  ██  ","██████  ","        ","        "]),s[77]=H(["█    █  ","██  ██  ","██████  ","██████  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[78]=H(["██  ██  ","██  ██  ","███ ██  ","███ ██  ","██████  ","██ ███  ","██ ███  ","██  ██  ","██  ██  ","        ","        "]),s[79]=H([" ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[80]=H(["█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██      ","██      ","██      ","██      ","        ","        "]),s[81]=H([" ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██████  ","██ ███  "," ████   ","    ██  ","        "]),s[82]=H(["█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██ ██   ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[83]=H([" ████   ","██  ██  ","██  ██  "," ██     ","  ███   ","    ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[84]=H(["██████  ","██████  ","█ ██ █  ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[85]=H(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[86]=H(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   "," ████   ","  ██    ","  ██    ","        ","        "]),s[87]=H(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██████  ","██████  ","██████  "," █  █   ","        ","        "]),s[88]=H(["██  ██  ","██  ██  "," ████   "," ████   ","  ██    "," ████   "," ████   ","██  ██  ","██  ██  ","        ","        "]),s[89]=H(["██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[90]=H(["██████  ","██  ██  ","█   ██  ","   ██   ","  ██    "," ██     ","██   █  ","██  ██  ","██████  ","        ","        "]),s[91]=H([" ████   "," ██     "," ██     "," ██     "," ██     "," ██     "," ██     "," ██     "," ████   ","        ","        "]),s[92]=H(["        ","        ","█       ","██      "," ██     ","  ██    ","   ██   ","    ██  ","     █  ","        ","        "]),s[93]=H(["   ████ ","     ██ ","     ██ ","     ██ ","     ██ ","     ██ ","     ██ ","     ██ ","   ████ ","        ","        "]),s[94]=H(["   █    ","  ███   "," ██ ██  ","        ","        ","        ","        ","        ","        ","        ","        "]),s[95]=H(["        ","        ","        ","        ","        ","        ","        ","        ","        ","██████  ","        "]),s[96]=H([" ██     ","  ██    ","   ██   ","        ","        ","        ","        ","        ","        ","        ","        "]),s[97]=H(["        ","        ","        "," ███    ","   ██   "," ████   ","██ ██   ","██ ██   "," ██ ██  ","        ","        "]),s[98]=H(["██      ","██      ","██      ","████    ","██ ██   ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[99]=H(["        ","        ","        "," ████   ","██  ██  ","██      ","██      ","██  ██  "," ████   ","        ","        "]),s[100]=H(["    ██  ","    ██  ","    ██  ","  ████  "," ██ ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[101]=H(["        ","        ","        "," ████   ","██  ██  ","██████  ","██      ","██  ██  "," ████   ","        ","        "]),s[102]=H(["  ███   "," ██ ██  "," ██  █  "," ██     ","████    "," ██     "," ██     "," ██     ","████    ","        ","        "]),s[103]=H(["        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","██  ██  "," ████   ","        "]),s[104]=H(["██      ","██      ","██      ","██ ██   ","███ ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[105]=H(["  ██    ","  ██    ","        "," ███    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[106]=H(["    ██  ","    ██  ","        ","   ███  ","    ██  ","    ██  ","    ██  ","    ██  ","██  ██  "," ████   ","        "]),s[107]=H(["██      ","██      ","██      ","██  ██  ","██ ██   ","████    ","████    ","██ ██   ","██  ██  ","        ","        "]),s[108]=H([" ███    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[109]=H(["        ","        ","        ","█ ███   ","██████  ","██ █ █  ","██ █ █  ","██ █ █  ","██ █ █  ","        ","        "]),s[110]=H(["        ","        ","        ","█ ███   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[111]=H(["        ","        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[112]=H(["        ","        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██      ","██      ","        "]),s[113]=H(["        ","        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","    ██  ","        "]),s[114]=H(["        ","        ","        ","█ ███   ","███ ██  ","██  ██  ","██      ","██      ","███     ","        ","        "]),s[115]=H(["        ","        ","        "," ████   ","██  ██  "," ██     ","   ██   ","██  ██  "," ████   ","        ","        "]),s[116]=H(["  █     "," ██     "," ██     ","████    "," ██     "," ██     "," ██     "," ██ ██  ","  ███   ","        ","        "]),s[117]=H(["        ","        ","        ","██ ██   ","██ ██   ","██ ██   ","██ ██   ","██ ██   "," ██ ██  ","        ","        "]),s[118]=H(["        ","        ","        ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","  ██    ","        ","        "]),s[119]=H(["        ","        ","        ","██  ██  ","██  ██  ","██  ██  ","██████  ","██████  "," █  █   ","        ","        "]),s[120]=H(["        ","        ","        ","██  ██  "," ████   ","  ██    ","  ██    "," ████   ","██  ██  ","        ","        "]),s[121]=H(["        ","        ","        ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","   ██   ","████    ","        "]),s[122]=H(["        ","        ","        ","██████  ","██ ██   ","  ██    "," ██     ","██  ██  ","██████  ","        ","        "]),s[123]=H(["   ███  ","  ██    ","  ██    ","  ██    ","███     ","  ██    ","  ██    ","  ██    ","   ███  ","        ","        "]),s[124]=H(["  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","        ","        "]),s[125]=H(["███     ","  ██    ","  ██    ","  ██    ","   ███  ","  ██    ","  ██    ","  ██    ","███     ","        ","        "]),s[126]=H([" ██  █  ","█ ██ █  ","█  ██   ","        ","        ","        ","        ","        ","        ","        ","        "]),s}new Array(v0).fill(0);class Uc{constructor(){C(this,"_vmTestInstruction_",!0)}async do(t){t.vmstep()}*steps(){yield this}}function lr(s){return s.op!==void 0}function Vc(s){return s.condition!==void 0}function Wc(s){const{op:t}=s;switch(t){case"tick":return new Gc;case"tock":return new Kc;case"ticktock":return new Lc;case"eval":return new Hc;case"vmstep":return new Uc;case"output":return new xc;case"set":return new Sc(s.id,s.value,s.index);case"output-list":return new Ic(s.spec);case"echo":return new Cc(s.message);case"clear-echo":return new Ec;case"loadRom":return new Pc(s.file);case"load":return new Oc(s.file);case"output-file":return new Fc(s.file);case"compare-to":return new Dc(s.file);case"resetRam":return new zc;default:Va(t,`Unknown tst operation ${t}`)}}function dr(s,t,e=!0){let r,o=[],n=s,i=[],a=!1;for(const u of t.lines){if(lr(u))n=s,i=[u];else{const f=Vc(u)?new Mc(new Tc(u.condition.left,u.condition.right,u.condition.op)):new Rc(u.count);f.span=u.span,s.addInstruction(f),n=f,i=u.statements}for(const f of i){f.op.op=="load"&&(a=!0);const m=Wc(f.op);if(m!==void 0&&(r===void 0?r=u.span:r.end=u.span.end,n.addInstruction(m),o.push(m)),f.separator!=","){f.separator==";"?n.addInstruction(new ir(r??f.span)):f.separator=="!"&&n.addInstruction(new ar(r??f.span));for(const h of o)h.span=r??f.span;r=void 0,o=[]}}}return e&&!a?et(new Error("A test script must have a load command")):(s.reset(),at(s))}class v1 extends cr{constructor({dir:e,setStatus:r,loadAction:o,compareTo:n}={}){super(e,r,n);C(this,"chip",new ou);C(this,"doLoad");C(this,"clock",_e.get());this.doLoad=o}get chipId(){return this.chip.id}static from(e,r={}){const o=new v1(r);return dr(o,e,r.requireLoad)}with(e){return this.chip=e,this}async load(e){var o;if(!this.dir)return;const r=await((o=this.doLoad)==null?void 0:o.call(this,e?`${this.dir}/${e}`:this.dir));r&&(this.chip=r)}hasVar(e){return e==="time"?!0:(e=`${e}`,this.chip.hasIn(e)||this.chip.hasOut(e))}getVar(e,r){if(e=`${e}`,e==="time")return this.clock.toString();const o=this.chip.get(e,r);return o?o instanceof Pt?o.busVoltage:o.voltage():0}getWidth(e,r){const o=this.chip.get(e,r);return o?o.width:0}setVar(e,r,o){const n=this.chip.get(e,o);n instanceof Pt?n.busVoltage=r:n==null||n.pull(r===0?ot:tt)}eval(){this.chip.eval()}tick(){this.chip.eval(),this.clock.tick()}tock(){this.chip.eval(),this.clock.tock()}async loadROM(e){await this.chip.load(this.fs,[this.dir??"",e].join("/"))}async run(){this.clock.reset(),await super.run()}}class Hc{constructor(){C(this,"_chipTestInstruction_",!0)}async do(t){t.eval()}*steps(){yield this}}class Gc{constructor(){C(this,"_chipTestInstruction_",!0)}async do(t){t.tick()}*steps(){yield this}}class Kc{constructor(){C(this,"_chipTestInstruction_",!0)}async do(t){t.tock()}*steps(){yield this}}const qc=s=>{const t=u1.parse(s.hdl),e=or.parse(s.tst);return{...s,maybeParsedHDL:t,maybeParsedTST:e}},Zc=s=>async t=>{let e;if(Fe(t.maybeParsedHDL)){const o=await f1({parts:at(t.maybeParsedHDL),fs:s});dt(o)?e=et(new Error(et(o).message)):e=o}else e=et(new Error("HDL Was not parsed"));const r=Fe(t.maybeParsedTST)?v1.from(at(t.maybeParsedTST)):et(new Error("TST Was not parsed"));return{...t,maybeChip:e,maybeTest:r}},Jc=s=>async t=>{if(dt(t.maybeChip))return{...t,pass:!1,out:et(t.maybeChip).message};if(dt(t.maybeTest))return{...t,pass:!1,out:et(t.maybeTest).message};const e=at(t.maybeTest).with(at(t.maybeChip)).setFileSystem(s);await e.run();const r=e.log(),o=r.trim()===t.cmp.trim();return{...t,out:r,pass:o}},Xc=(s,t)=>{const e=Jc(s),r=Zc(s);return async o=>{const n=async()=>e(await r(await qc(o))),i=async()=>t==null?void 0:t.hdl(o),[a,u]=await Promise.all([n(),i()]);return{...a,shadow:u}}};async function Yc(s,t,e,r){const o=Xc(e,r);return Promise.all(s.map(t).map(async n=>o(await n)))}var qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qc(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Ze(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,t){(function(e){s.exports=e()})(function(){return function e(r,o,n){function i(f,m){if(!o[f]){if(!r[f]){var h=typeof Ze=="function"&&Ze;if(!m&&h)return h(f,!0);if(a)return a(f,!0);var v=new Error("Cannot find module '"+f+"'");throw v.code="MODULE_NOT_FOUND",v}var d=o[f]={exports:{}};r[f][0].call(d.exports,function(y){var p=r[f][1][y];return i(p||y)},d,d.exports,e,r,o,n)}return o[f].exports}for(var a=typeof Ze=="function"&&Ze,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(e,r,o){var n=e("./utils"),i=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(u){for(var f,m,h,v,d,y,p,b=[],g=0,_=u.length,k=_,S=n.getTypeOf(u)!=="string";g<u.length;)k=_-g,h=S?(f=u[g++],m=g<_?u[g++]:0,g<_?u[g++]:0):(f=u.charCodeAt(g++),m=g<_?u.charCodeAt(g++):0,g<_?u.charCodeAt(g++):0),v=f>>2,d=(3&f)<<4|m>>4,y=1<k?(15&m)<<2|h>>6:64,p=2<k?63&h:64,b.push(a.charAt(v)+a.charAt(d)+a.charAt(y)+a.charAt(p));return b.join("")},o.decode=function(u){var f,m,h,v,d,y,p=0,b=0,g="data:";if(u.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var _,k=3*(u=u.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(u.charAt(u.length-1)===a.charAt(64)&&k--,u.charAt(u.length-2)===a.charAt(64)&&k--,k%1!=0)throw new Error("Invalid base64 input, bad content length.");for(_=i.uint8array?new Uint8Array(0|k):new Array(0|k);p<u.length;)f=a.indexOf(u.charAt(p++))<<2|(v=a.indexOf(u.charAt(p++)))>>4,m=(15&v)<<4|(d=a.indexOf(u.charAt(p++)))>>2,h=(3&d)<<6|(y=a.indexOf(u.charAt(p++))),_[b++]=f,d!==64&&(_[b++]=m),y!==64&&(_[b++]=h);return _}},{"./support":30,"./utils":32}],2:[function(e,r,o){var n=e("./external"),i=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),u=e("./stream/DataLengthProbe");function f(m,h,v,d,y){this.compressedSize=m,this.uncompressedSize=h,this.crc32=v,this.compression=d,this.compressedContent=y}f.prototype={getContentWorker:function(){var m=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),h=this;return m.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(m,h,v){return m.pipe(new a).pipe(new u("uncompressedSize")).pipe(h.compressWorker(v)).pipe(new u("compressedSize")).withStreamInfo("compression",h)},r.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,r,o){var n=e("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,r,o){var n=e("./utils"),i=function(){for(var a,u=[],f=0;f<256;f++){a=f;for(var m=0;m<8;m++)a=1&a?3988292384^a>>>1:a>>>1;u[f]=a}return u}();r.exports=function(a,u){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(f,m,h,v){var d=i,y=v+h;f^=-1;for(var p=v;p<y;p++)f=f>>>8^d[255&(f^m[p])];return-1^f}(0|u,a,a.length,0):function(f,m,h,v){var d=i,y=v+h;f^=-1;for(var p=v;p<y;p++)f=f>>>8^d[255&(f^m.charCodeAt(p))];return-1^f}(0|u,a,a.length,0):0}},{"./utils":32}],5:[function(e,r,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(e,r,o){var n=null;n=typeof Promise<"u"?Promise:e("lie"),r.exports={Promise:n}},{lie:37}],7:[function(e,r,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=e("pako"),a=e("./utils"),u=e("./stream/GenericWorker"),f=n?"uint8array":"array";function m(h,v){u.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=v,this.meta={}}o.magic="\b\0",a.inherits(m,u),m.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(f,h.data),!1)},m.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(v){h.push({data:v,meta:h.meta})}},o.compressWorker=function(h){return new m("Deflate",h)},o.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,r,o){function n(d,y){var p,b="";for(p=0;p<y;p++)b+=String.fromCharCode(255&d),d>>>=8;return b}function i(d,y,p,b,g,_){var k,S,x=d.file,D=d.compression,O=_!==f.utf8encode,j=a.transformTo("string",_(x.name)),E=a.transformTo("string",f.utf8encode(x.name)),V=x.comment,Q=a.transformTo("string",_(V)),A=a.transformTo("string",f.utf8encode(V)),F=E.length!==x.name.length,l=A.length!==V.length,L="",rt="",W="",it=x.dir,z=x.date,X={crc32:0,compressedSize:0,uncompressedSize:0};y&&!p||(X.crc32=d.crc32,X.compressedSize=d.compressedSize,X.uncompressedSize=d.uncompressedSize);var M=0;y&&(M|=8),O||!F&&!l||(M|=2048);var T=0,Y=0;it&&(T|=16),g==="UNIX"?(Y=798,T|=function(q,mt){var It=q;return q||(It=mt?16893:33204),(65535&It)<<16}(x.unixPermissions,it)):(Y=20,T|=function(q){return 63&(q||0)}(x.dosPermissions)),k=z.getUTCHours(),k<<=6,k|=z.getUTCMinutes(),k<<=5,k|=z.getUTCSeconds()/2,S=z.getUTCFullYear()-1980,S<<=4,S|=z.getUTCMonth()+1,S<<=5,S|=z.getUTCDate(),F&&(rt=n(1,1)+n(m(j),4)+E,L+="up"+n(rt.length,2)+rt),l&&(W=n(1,1)+n(m(Q),4)+A,L+="uc"+n(W.length,2)+W);var Z="";return Z+=`
\0`,Z+=n(M,2),Z+=D.magic,Z+=n(k,2),Z+=n(S,2),Z+=n(X.crc32,4),Z+=n(X.compressedSize,4),Z+=n(X.uncompressedSize,4),Z+=n(j.length,2),Z+=n(L.length,2),{fileRecord:h.LOCAL_FILE_HEADER+Z+j+L,dirRecord:h.CENTRAL_FILE_HEADER+n(Y,2)+Z+n(Q.length,2)+"\0\0\0\0"+n(T,4)+n(b,4)+j+L+Q}}var a=e("../utils"),u=e("../stream/GenericWorker"),f=e("../utf8"),m=e("../crc32"),h=e("../signature");function v(d,y,p,b){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=y,this.zipPlatform=p,this.encodeFileName=b,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(v,u),v.prototype.push=function(d){var y=d.meta.percent||0,p=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,u.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:p?(y+100*(p-b-1))/p:100}}))},v.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var y=this.streamFiles&&!d.file.dir;if(y){var p=i(d,y,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(d){this.accumulate=!1;var y=this.streamFiles&&!d.file.dir,p=i(d,y,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),y)this.push({data:function(b){return h.DATA_DESCRIPTOR+n(b.crc32,4)+n(b.compressedSize,4)+n(b.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var d=this.bytesWritten,y=0;y<this.dirRecords.length;y++)this.push({data:this.dirRecords[y],meta:{percent:100}});var p=this.bytesWritten-d,b=function(g,_,k,S,x){var D=a.transformTo("string",x(S));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(g,2)+n(g,2)+n(_,4)+n(k,4)+n(D.length,2)+D}(this.dirRecords.length,p,d,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(d){this._sources.push(d);var y=this;return d.on("data",function(p){y.processChunk(p)}),d.on("end",function(){y.closedSource(y.previous.streamInfo),y._sources.length?y.prepareNextSource():y.end()}),d.on("error",function(p){y.error(p)}),this},v.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(d){var y=this._sources;if(!u.prototype.error.call(this,d))return!1;for(var p=0;p<y.length;p++)try{y[p].error(d)}catch{}return!0},v.prototype.lock=function(){u.prototype.lock.call(this);for(var d=this._sources,y=0;y<d.length;y++)d[y].lock()},r.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,r,o){var n=e("../compressions"),i=e("./ZipFileWorker");o.generateWorker=function(a,u,f){var m=new i(u.streamFiles,f,u.platform,u.encodeFileName),h=0;try{a.forEach(function(v,d){h++;var y=function(_,k){var S=_||k,x=n[S];if(!x)throw new Error(S+" is not a valid compression method !");return x}(d.options.compression,u.compression),p=d.options.compressionOptions||u.compressionOptions||{},b=d.dir,g=d.date;d._compressWorker(y,p).withStreamInfo("file",{name:v,dir:b,date:g,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(m)}),m.entriesCount=h}catch(v){m.error(v)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,r,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new n;for(var a in this)typeof this[a]!="function"&&(i[a]=this[a]);return i}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(i,a){return new n().loadAsync(i,a)},n.external=e("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,r,o){var n=e("./utils"),i=e("./external"),a=e("./utf8"),u=e("./zipEntries"),f=e("./stream/Crc32Probe"),m=e("./nodejsUtils");function h(v){return new i.Promise(function(d,y){var p=v.decompressed.getContentWorker().pipe(new f);p.on("error",function(b){y(b)}).on("end",function(){p.streamInfo.crc32!==v.decompressed.crc32?y(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}r.exports=function(v,d){var y=this;return d=n.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),m.isNode&&m.isStream(v)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",v,!0,d.optimizedBinaryString,d.base64).then(function(p){var b=new u(d);return b.load(p),b}).then(function(p){var b=[i.Promise.resolve(p)],g=p.files;if(d.checkCRC32)for(var _=0;_<g.length;_++)b.push(h(g[_]));return i.Promise.all(b)}).then(function(p){for(var b=p.shift(),g=b.files,_=0;_<g.length;_++){var k=g[_],S=k.fileNameStr,x=n.resolve(k.fileNameStr);y.file(x,k.decompressed,{binary:!0,optimizedBinaryString:!0,date:k.date,dir:k.dir,comment:k.fileCommentStr.length?k.fileCommentStr:null,unixPermissions:k.unixPermissions,dosPermissions:k.dosPermissions,createFolders:d.createFolders}),k.dir||(y.file(x).unsafeOriginalName=S)}return b.zipComment.length&&(y.comment=b.zipComment),y})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,r,o){var n=e("../utils"),i=e("../stream/GenericWorker");function a(u,f){i.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(f)}n.inherits(a,i),a.prototype._bindStream=function(u){var f=this;(this._stream=u).pause(),u.on("data",function(m){f.push({data:m,meta:{percent:0}})}).on("error",function(m){f.isPaused?this.generatedError=m:f.error(m)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,r,o){var n=e("readable-stream").Readable;function i(a,u,f){n.call(this,u),this._helper=a;var m=this;a.on("data",function(h,v){m.push(h)||m._helper.pause(),f&&f(v)}).on("error",function(h){m.emit("error",h)}).on("end",function(){m.push(null)})}e("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},r.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,r,o){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,i);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,i)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var i=new Buffer(n);return i.fill(0),i},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(e,r,o){function n(x,D,O){var j,E=a.getTypeOf(D),V=a.extend(O||{},m);V.date=V.date||new Date,V.compression!==null&&(V.compression=V.compression.toUpperCase()),typeof V.unixPermissions=="string"&&(V.unixPermissions=parseInt(V.unixPermissions,8)),V.unixPermissions&&16384&V.unixPermissions&&(V.dir=!0),V.dosPermissions&&16&V.dosPermissions&&(V.dir=!0),V.dir&&(x=g(x)),V.createFolders&&(j=b(x))&&_.call(this,j,!0);var Q=E==="string"&&V.binary===!1&&V.base64===!1;O&&O.binary!==void 0||(V.binary=!Q),(D instanceof h&&D.uncompressedSize===0||V.dir||!D||D.length===0)&&(V.base64=!1,V.binary=!0,D="",V.compression="STORE",E="string");var A=null;A=D instanceof h||D instanceof u?D:y.isNode&&y.isStream(D)?new p(x,D):a.prepareContent(x,D,V.binary,V.optimizedBinaryString,V.base64);var F=new v(x,A,V);this.files[x]=F}var i=e("./utf8"),a=e("./utils"),u=e("./stream/GenericWorker"),f=e("./stream/StreamHelper"),m=e("./defaults"),h=e("./compressedObject"),v=e("./zipObject"),d=e("./generate"),y=e("./nodejsUtils"),p=e("./nodejs/NodejsStreamInputAdapter"),b=function(x){x.slice(-1)==="/"&&(x=x.substring(0,x.length-1));var D=x.lastIndexOf("/");return 0<D?x.substring(0,D):""},g=function(x){return x.slice(-1)!=="/"&&(x+="/"),x},_=function(x,D){return D=D!==void 0?D:m.createFolders,x=g(x),this.files[x]||n.call(this,x,null,{dir:!0,createFolders:D}),this.files[x]};function k(x){return Object.prototype.toString.call(x)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(x){var D,O,j;for(D in this.files)j=this.files[D],(O=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&x(O,j)},filter:function(x){var D=[];return this.forEach(function(O,j){x(O,j)&&D.push(j)}),D},file:function(x,D,O){if(arguments.length!==1)return x=this.root+x,n.call(this,x,D,O),this;if(k(x)){var j=x;return this.filter(function(V,Q){return!Q.dir&&j.test(V)})}var E=this.files[this.root+x];return E&&!E.dir?E:null},folder:function(x){if(!x)return this;if(k(x))return this.filter(function(E,V){return V.dir&&x.test(E)});var D=this.root+x,O=_.call(this,D),j=this.clone();return j.root=O.name,j},remove:function(x){x=this.root+x;var D=this.files[x];if(D||(x.slice(-1)!=="/"&&(x+="/"),D=this.files[x]),D&&!D.dir)delete this.files[x];else for(var O=this.filter(function(E,V){return V.name.slice(0,x.length)===x}),j=0;j<O.length;j++)delete this.files[O[j].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(x){var D,O={};try{if((O=a.extend(x||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");a.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var j=O.comment||this.comment||"";D=d.generateWorker(this,O,j)}catch(E){(D=new u("error")).error(E)}return new f(D,O.type||"string",O.mimeType)},generateAsync:function(x,D){return this.generateInternalStream(x).accumulate(D)},generateNodeStream:function(x,D){return(x=x||{}).type||(x.type="nodebuffer"),this.generateInternalStream(x).toNodejsStream(D)}};r.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,r,o){r.exports=e("stream")},{stream:void 0}],17:[function(e,r,o){var n=e("./DataReader");function i(a){n.call(this,a);for(var u=0;u<this.data.length;u++)a[u]=255&a[u]}e("../utils").inherits(i,n),i.prototype.byteAt=function(a){return this.data[this.zero+a]},i.prototype.lastIndexOfSignature=function(a){for(var u=a.charCodeAt(0),f=a.charCodeAt(1),m=a.charCodeAt(2),h=a.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===u&&this.data[v+1]===f&&this.data[v+2]===m&&this.data[v+3]===h)return v-this.zero;return-1},i.prototype.readAndCheckSignature=function(a){var u=a.charCodeAt(0),f=a.charCodeAt(1),m=a.charCodeAt(2),h=a.charCodeAt(3),v=this.readData(4);return u===v[0]&&f===v[1]&&m===v[2]&&h===v[3]},i.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,r,o){var n=e("../utils");function i(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var u,f=0;for(this.checkOffset(a),u=this.index+a-1;u>=this.index;u--)f=(f<<8)+this.byteAt(u);return this.index+=a,f},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=i},{"../utils":32}],19:[function(e,r,o){var n=e("./Uint8ArrayReader");function i(a){n.call(this,a)}e("../utils").inherits(i,n),i.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,r,o){var n=e("./DataReader");function i(a){n.call(this,a)}e("../utils").inherits(i,n),i.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},i.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},i.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},i.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,r,o){var n=e("./ArrayReader");function i(a){n.call(this,a)}e("../utils").inherits(i,n),i.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,r,o){var n=e("../utils"),i=e("../support"),a=e("./ArrayReader"),u=e("./StringReader"),f=e("./NodeBufferReader"),m=e("./Uint8ArrayReader");r.exports=function(h){var v=n.getTypeOf(h);return n.checkSupport(v),v!=="string"||i.uint8array?v==="nodebuffer"?new f(h):i.uint8array?new m(n.transformTo("uint8array",h)):new a(n.transformTo("array",h)):new u(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,r,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,r,o){var n=e("./GenericWorker"),i=e("../utils");function a(u){n.call(this,"ConvertWorker to "+u),this.destType=u}i.inherits(a,n),a.prototype.processChunk=function(u){this.push({data:i.transformTo(this.destType,u.data),meta:u.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,r,o){var n=e("./GenericWorker"),i=e("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,n),a.prototype.processChunk=function(u){this.streamInfo.crc32=i(u.data,this.streamInfo.crc32||0),this.push(u)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,r,o){var n=e("../utils"),i=e("./GenericWorker");function a(u){i.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}n.inherits(a,i),a.prototype.processChunk=function(u){if(u){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+u.data.length}i.prototype.processChunk.call(this,u)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,r,o){var n=e("../utils"),i=e("./GenericWorker");function a(u){i.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(m){f.dataIsReady=!0,f.data=m,f.max=m&&m.length||0,f.type=n.getTypeOf(m),f.isPaused||f._tickAndRepeat()},function(m){f.error(m)})}n.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,f);break;case"uint8array":u=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":u=this.data.slice(this.index,f)}return this.index=f,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,r,o){function n(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,a){return this._listeners[i].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,a){if(this._listeners[i])for(var u=0;u<this._listeners[i].length;u++)this._listeners[i][u].call(this,a)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var a=this;return i.on("data",function(u){a.processChunk(u)}),i.on("end",function(){a.end()}),i.on("error",function(u){a.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,a){return this.extraStreamInfo[i]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},r.exports=n},{}],29:[function(e,r,o){var n=e("../utils"),i=e("./ConvertWorker"),a=e("./GenericWorker"),u=e("../base64"),f=e("../support"),m=e("../external"),h=null;if(f.nodestream)try{h=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(y,p){return new m.Promise(function(b,g){var _=[],k=y._internalType,S=y._outputType,x=y._mimeType;y.on("data",function(D,O){_.push(D),p&&p(O)}).on("error",function(D){_=[],g(D)}).on("end",function(){try{var D=function(O,j,E){switch(O){case"blob":return n.newBlob(n.transformTo("arraybuffer",j),E);case"base64":return u.encode(j);default:return n.transformTo(O,j)}}(S,function(O,j){var E,V=0,Q=null,A=0;for(E=0;E<j.length;E++)A+=j[E].length;switch(O){case"string":return j.join("");case"array":return Array.prototype.concat.apply([],j);case"uint8array":for(Q=new Uint8Array(A),E=0;E<j.length;E++)Q.set(j[E],V),V+=j[E].length;return Q;case"nodebuffer":return Buffer.concat(j);default:throw new Error("concat : unsupported type '"+O+"'")}}(k,_),x);b(D)}catch(O){g(O)}_=[]}).resume()})}function d(y,p,b){var g=p;switch(p){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=p,this._mimeType=b,n.checkSupport(g),this._worker=y.pipe(new i(g)),y.lock()}catch(_){this._worker=new a("error"),this._worker.error(_)}}d.prototype={accumulate:function(y){return v(this,y)},on:function(y,p){var b=this;return y==="data"?this._worker.on(y,function(g){p.call(b,g.data,g.meta)}):this._worker.on(y,function(){n.delay(p,arguments,b)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(y){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},y)}},r.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,r,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),o.blob=i.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!e("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(e,r,o){for(var n=e("./utils"),i=e("./support"),a=e("./nodejsUtils"),u=e("./stream/GenericWorker"),f=new Array(256),m=0;m<256;m++)f[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;f[254]=f[254]=1;function h(){u.call(this,"utf-8 decode"),this.leftOver=null}function v(){u.call(this,"utf-8 encode")}o.utf8encode=function(d){return i.nodebuffer?a.newBufferFrom(d,"utf-8"):function(y){var p,b,g,_,k,S=y.length,x=0;for(_=0;_<S;_++)(64512&(b=y.charCodeAt(_)))==55296&&_+1<S&&(64512&(g=y.charCodeAt(_+1)))==56320&&(b=65536+(b-55296<<10)+(g-56320),_++),x+=b<128?1:b<2048?2:b<65536?3:4;for(p=i.uint8array?new Uint8Array(x):new Array(x),_=k=0;k<x;_++)(64512&(b=y.charCodeAt(_)))==55296&&_+1<S&&(64512&(g=y.charCodeAt(_+1)))==56320&&(b=65536+(b-55296<<10)+(g-56320),_++),b<128?p[k++]=b:(b<2048?p[k++]=192|b>>>6:(b<65536?p[k++]=224|b>>>12:(p[k++]=240|b>>>18,p[k++]=128|b>>>12&63),p[k++]=128|b>>>6&63),p[k++]=128|63&b);return p}(d)},o.utf8decode=function(d){return i.nodebuffer?n.transformTo("nodebuffer",d).toString("utf-8"):function(y){var p,b,g,_,k=y.length,S=new Array(2*k);for(p=b=0;p<k;)if((g=y[p++])<128)S[b++]=g;else if(4<(_=f[g]))S[b++]=65533,p+=_-1;else{for(g&=_===2?31:_===3?15:7;1<_&&p<k;)g=g<<6|63&y[p++],_--;1<_?S[b++]=65533:g<65536?S[b++]=g:(g-=65536,S[b++]=55296|g>>10&1023,S[b++]=56320|1023&g)}return S.length!==b&&(S.subarray?S=S.subarray(0,b):S.length=b),n.applyFromCharCode(S)}(d=n.transformTo(i.uint8array?"uint8array":"array",d))},n.inherits(h,u),h.prototype.processChunk=function(d){var y=n.transformTo(i.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var p=y;(y=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),y.set(p,this.leftOver.length)}else y=this.leftOver.concat(y);this.leftOver=null}var b=function(_,k){var S;for((k=k||_.length)>_.length&&(k=_.length),S=k-1;0<=S&&(192&_[S])==128;)S--;return S<0||S===0?k:S+f[_[S]]>k?S:k}(y),g=y;b!==y.length&&(i.uint8array?(g=y.subarray(0,b),this.leftOver=y.subarray(b,y.length)):(g=y.slice(0,b),this.leftOver=y.slice(b,y.length))),this.push({data:o.utf8decode(g),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=h,n.inherits(v,u),v.prototype.processChunk=function(d){this.push({data:o.utf8encode(d.data),meta:d.meta})},o.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,r,o){var n=e("./support"),i=e("./base64"),a=e("./nodejsUtils"),u=e("./external");function f(p){return p}function m(p,b){for(var g=0;g<p.length;++g)b[g]=255&p.charCodeAt(g);return b}e("setimmediate"),o.newBlob=function(p,b){o.checkSupport("blob");try{return new Blob([p],{type:b})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(p),g.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(p,b,g){var _=[],k=0,S=p.length;if(S<=g)return String.fromCharCode.apply(null,p);for(;k<S;)b==="array"||b==="nodebuffer"?_.push(String.fromCharCode.apply(null,p.slice(k,Math.min(k+g,S)))):_.push(String.fromCharCode.apply(null,p.subarray(k,Math.min(k+g,S)))),k+=g;return _.join("")},stringifyByChar:function(p){for(var b="",g=0;g<p.length;g++)b+=String.fromCharCode(p[g]);return b},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function v(p){var b=65536,g=o.getTypeOf(p),_=!0;if(g==="uint8array"?_=h.applyCanBeUsed.uint8array:g==="nodebuffer"&&(_=h.applyCanBeUsed.nodebuffer),_)for(;1<b;)try{return h.stringifyByChunk(p,g,b)}catch{b=Math.floor(b/2)}return h.stringifyByChar(p)}function d(p,b){for(var g=0;g<p.length;g++)b[g]=p[g];return b}o.applyFromCharCode=v;var y={};y.string={string:f,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return y.string.uint8array(p).buffer},uint8array:function(p){return m(p,new Uint8Array(p.length))},nodebuffer:function(p){return m(p,a.allocBuffer(p.length))}},y.array={string:v,array:f,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(p)}},y.arraybuffer={string:function(p){return v(new Uint8Array(p))},array:function(p){return d(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:f,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(new Uint8Array(p))}},y.uint8array={string:v,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:f,nodebuffer:function(p){return a.newBufferFrom(p)}},y.nodebuffer={string:v,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return y.nodebuffer.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:f},o.transformTo=function(p,b){if(b=b||"",!p)return b;o.checkSupport(p);var g=o.getTypeOf(b);return y[g][p](b)},o.resolve=function(p){for(var b=p.split("/"),g=[],_=0;_<b.length;_++){var k=b[_];k==="."||k===""&&_!==0&&_!==b.length-1||(k===".."?g.pop():g.push(k))}return g.join("/")},o.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(p)?"nodebuffer":n.uint8array&&p instanceof Uint8Array?"uint8array":n.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(p){if(!n[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(p){var b,g,_="";for(g=0;g<(p||"").length;g++)_+="\\x"+((b=p.charCodeAt(g))<16?"0":"")+b.toString(16).toUpperCase();return _},o.delay=function(p,b,g){setImmediate(function(){p.apply(g||null,b||[])})},o.inherits=function(p,b){function g(){}g.prototype=b.prototype,p.prototype=new g},o.extend=function(){var p,b,g={};for(p=0;p<arguments.length;p++)for(b in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],b)&&g[b]===void 0&&(g[b]=arguments[p][b]);return g},o.prepareContent=function(p,b,g,_,k){return u.Promise.resolve(b).then(function(S){return n.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new u.Promise(function(x,D){var O=new FileReader;O.onload=function(j){x(j.target.result)},O.onerror=function(j){D(j.target.error)},O.readAsArrayBuffer(S)}):S}).then(function(S){var x=o.getTypeOf(S);return x?(x==="arraybuffer"?S=o.transformTo("uint8array",S):x==="string"&&(k?S=i.decode(S):g&&_!==!0&&(S=function(D){return m(D,n.uint8array?new Uint8Array(D.length):new Array(D.length))}(S))),S):u.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,r,o){var n=e("./reader/readerFor"),i=e("./utils"),a=e("./signature"),u=e("./zipEntry"),f=e("./support");function m(h){this.files=[],this.loadOptions=h}m.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(v)+", expected "+i.pretty(h)+")")}},isSignature:function(h,v){var d=this.reader.index;this.reader.setIndex(h);var y=this.reader.readString(4)===v;return this.reader.setIndex(d),y},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),v=f.uint8array?"uint8array":"array",d=i.transformTo(v,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,v,d,y=this.zip64EndOfCentralSize-44;0<y;)h=this.reader.readInt(2),v=this.reader.readInt(4),d=this.reader.readData(v),this.zip64ExtensibleData[h]={id:h,length:v,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,v;for(h=0;h<this.files.length;h++)v=this.files[h],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var v=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var y=v-d;if(0<y)this.isSignature(v,a.CENTRAL_FILE_HEADER)||(this.reader.zero=y);else if(y<0)throw new Error("Corrupted zip: missing "+Math.abs(y)+" bytes.")},prepareReader:function(h){this.reader=n(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,r,o){var n=e("./reader/readerFor"),i=e("./utils"),a=e("./compressedObject"),u=e("./crc32"),f=e("./utf8"),m=e("./compressions"),h=e("./support");function v(d,y){this.options=d,this.loadOptions=y}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var y,p;if(d.skip(22),this.fileNameLength=d.readInt(2),p=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((y=function(b){for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)&&m[g].magic===b)return m[g];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,y,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var y=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(y),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=n(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var y,p,b,g=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<g;)y=d.readInt(2),p=d.readInt(2),b=d.readData(p),this.extraFields[y]={id:y,length:p,value:b};d.setIndex(g)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var y=this.findExtraFieldUnicodePath();if(y!==null)this.fileNameStr=y;else{var p=i.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var g=i.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var y=n(d.value);return y.readInt(1)!==1||u(this.fileName)!==y.readInt(4)?null:f.utf8decode(y.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var y=n(d.value);return y.readInt(1)!==1||u(this.fileComment)!==y.readInt(4)?null:f.utf8decode(y.readData(d.length-5))}return null}},r.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,r,o){function n(y,p,b){this.name=y,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=p,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var i=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),u=e("./utf8"),f=e("./compressedObject"),m=e("./stream/GenericWorker");n.prototype={internalStream:function(y){var p=null,b="string";try{if(!y)throw new Error("No output type specified.");var g=(b=y.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),p=this._decompressWorker();var _=!this._dataBinary;_&&!g&&(p=p.pipe(new u.Utf8EncodeWorker)),!_&&g&&(p=p.pipe(new u.Utf8DecodeWorker))}catch(k){(p=new m("error")).error(k)}return new i(p,b,"")},async:function(y,p){return this.internalStream(y).accumulate(p)},nodeStream:function(y,p){return this.internalStream(y||"nodebuffer").toNodejsStream(p)},_compressWorker:function(y,p){if(this._data instanceof f&&this._data.compression.magic===y.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new u.Utf8EncodeWorker)),f.createWorkerFrom(b,y,p)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof m?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)n.prototype[h[d]]=v;r.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,r,o){(function(n){var i,a,u=n.MutationObserver||n.WebKitMutationObserver;if(u){var f=0,m=new u(y),h=n.document.createTextNode("");m.observe(h,{characterData:!0}),i=function(){h.data=f=++f%2}}else if(n.setImmediate||n.MessageChannel===void 0)i="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var p=n.document.createElement("script");p.onreadystatechange=function(){y(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},n.document.documentElement.appendChild(p)}:function(){setTimeout(y,0)};else{var v=new n.MessageChannel;v.port1.onmessage=y,i=function(){v.port2.postMessage(0)}}var d=[];function y(){var p,b;a=!0;for(var g=d.length;g;){for(b=d,d=[],p=-1;++p<g;)b[p]();g=d.length}a=!1}r.exports=function(p){d.push(p)!==1||a||i()}}).call(this,typeof qe<"u"?qe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,r,o){var n=e("immediate");function i(){}var a={},u=["REJECTED"],f=["FULFILLED"],m=["PENDING"];function h(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,g!==i&&p(this,g)}function v(g,_,k){this.promise=g,typeof _=="function"&&(this.onFulfilled=_,this.callFulfilled=this.otherCallFulfilled),typeof k=="function"&&(this.onRejected=k,this.callRejected=this.otherCallRejected)}function d(g,_,k){n(function(){var S;try{S=_(k)}catch(x){return a.reject(g,x)}S===g?a.reject(g,new TypeError("Cannot resolve promise with itself")):a.resolve(g,S)})}function y(g){var _=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof _=="function")return function(){_.apply(g,arguments)}}function p(g,_){var k=!1;function S(O){k||(k=!0,a.reject(g,O))}function x(O){k||(k=!0,a.resolve(g,O))}var D=b(function(){_(x,S)});D.status==="error"&&S(D.value)}function b(g,_){var k={};try{k.value=g(_),k.status="success"}catch(S){k.status="error",k.value=S}return k}(r.exports=h).prototype.finally=function(g){if(typeof g!="function")return this;var _=this.constructor;return this.then(function(k){return _.resolve(g()).then(function(){return k})},function(k){return _.resolve(g()).then(function(){throw k})})},h.prototype.catch=function(g){return this.then(null,g)},h.prototype.then=function(g,_){if(typeof g!="function"&&this.state===f||typeof _!="function"&&this.state===u)return this;var k=new this.constructor(i);return this.state!==m?d(k,this.state===f?g:_,this.outcome):this.queue.push(new v(k,g,_)),k},v.prototype.callFulfilled=function(g){a.resolve(this.promise,g)},v.prototype.otherCallFulfilled=function(g){d(this.promise,this.onFulfilled,g)},v.prototype.callRejected=function(g){a.reject(this.promise,g)},v.prototype.otherCallRejected=function(g){d(this.promise,this.onRejected,g)},a.resolve=function(g,_){var k=b(y,_);if(k.status==="error")return a.reject(g,k.value);var S=k.value;if(S)p(g,S);else{g.state=f,g.outcome=_;for(var x=-1,D=g.queue.length;++x<D;)g.queue[x].callFulfilled(_)}return g},a.reject=function(g,_){g.state=u,g.outcome=_;for(var k=-1,S=g.queue.length;++k<S;)g.queue[k].callRejected(_);return g},h.resolve=function(g){return g instanceof this?g:a.resolve(new this(i),g)},h.reject=function(g){var _=new this(i);return a.reject(_,g)},h.all=function(g){var _=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var k=g.length,S=!1;if(!k)return this.resolve([]);for(var x=new Array(k),D=0,O=-1,j=new this(i);++O<k;)E(g[O],O);return j;function E(V,Q){_.resolve(V).then(function(A){x[Q]=A,++D!==k||S||(S=!0,a.resolve(j,x))},function(A){S||(S=!0,a.reject(j,A))})}},h.race=function(g){var _=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var k=g.length,S=!1;if(!k)return this.resolve([]);for(var x=-1,D=new this(i);++x<k;)O=g[x],_.resolve(O).then(function(j){S||(S=!0,a.resolve(D,j))},function(j){S||(S=!0,a.reject(D,j))});var O;return D}},{immediate:36}],38:[function(e,r,o){var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),r.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,r,o){var n=e("./zlib/deflate"),i=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/messages"),f=e("./zlib/zstream"),m=Object.prototype.toString,h=0,v=-1,d=0,y=8;function p(g){if(!(this instanceof p))return new p(g);this.options=i.assign({level:v,method:y,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},g||{});var _=this.options;_.raw&&0<_.windowBits?_.windowBits=-_.windowBits:_.gzip&&0<_.windowBits&&_.windowBits<16&&(_.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var k=n.deflateInit2(this.strm,_.level,_.method,_.windowBits,_.memLevel,_.strategy);if(k!==h)throw new Error(u[k]);if(_.header&&n.deflateSetHeader(this.strm,_.header),_.dictionary){var S;if(S=typeof _.dictionary=="string"?a.string2buf(_.dictionary):m.call(_.dictionary)==="[object ArrayBuffer]"?new Uint8Array(_.dictionary):_.dictionary,(k=n.deflateSetDictionary(this.strm,S))!==h)throw new Error(u[k]);this._dict_set=!0}}function b(g,_){var k=new p(_);if(k.push(g,!0),k.err)throw k.msg||u[k.err];return k.result}p.prototype.push=function(g,_){var k,S,x=this.strm,D=this.options.chunkSize;if(this.ended)return!1;S=_===~~_?_:_===!0?4:0,typeof g=="string"?x.input=a.string2buf(g):m.call(g)==="[object ArrayBuffer]"?x.input=new Uint8Array(g):x.input=g,x.next_in=0,x.avail_in=x.input.length;do{if(x.avail_out===0&&(x.output=new i.Buf8(D),x.next_out=0,x.avail_out=D),(k=n.deflate(x,S))!==1&&k!==h)return this.onEnd(k),!(this.ended=!0);x.avail_out!==0&&(x.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(i.shrinkBuf(x.output,x.next_out))):this.onData(i.shrinkBuf(x.output,x.next_out)))}while((0<x.avail_in||x.avail_out===0)&&k!==1);return S===4?(k=n.deflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===h):S!==2||(this.onEnd(h),!(x.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},o.Deflate=p,o.deflate=b,o.deflateRaw=function(g,_){return(_=_||{}).raw=!0,b(g,_)},o.gzip=function(g,_){return(_=_||{}).gzip=!0,b(g,_)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,r,o){var n=e("./zlib/inflate"),i=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/constants"),f=e("./zlib/messages"),m=e("./zlib/zstream"),h=e("./zlib/gzheader"),v=Object.prototype.toString;function d(p){if(!(this instanceof d))return new d(p);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},p||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||p&&p.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&!(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var g=n.inflateInit2(this.strm,b.windowBits);if(g!==u.Z_OK)throw new Error(f[g]);this.header=new h,n.inflateGetHeader(this.strm,this.header)}function y(p,b){var g=new d(b);if(g.push(p,!0),g.err)throw g.msg||f[g.err];return g.result}d.prototype.push=function(p,b){var g,_,k,S,x,D,O=this.strm,j=this.options.chunkSize,E=this.options.dictionary,V=!1;if(this.ended)return!1;_=b===~~b?b:b===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof p=="string"?O.input=a.binstring2buf(p):v.call(p)==="[object ArrayBuffer]"?O.input=new Uint8Array(p):O.input=p,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new i.Buf8(j),O.next_out=0,O.avail_out=j),(g=n.inflate(O,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&E&&(D=typeof E=="string"?a.string2buf(E):v.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,g=n.inflateSetDictionary(this.strm,D)),g===u.Z_BUF_ERROR&&V===!0&&(g=u.Z_OK,V=!1),g!==u.Z_STREAM_END&&g!==u.Z_OK)return this.onEnd(g),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&g!==u.Z_STREAM_END&&(O.avail_in!==0||_!==u.Z_FINISH&&_!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(k=a.utf8border(O.output,O.next_out),S=O.next_out-k,x=a.buf2string(O.output,k),O.next_out=S,O.avail_out=j-S,S&&i.arraySet(O.output,O.output,k,S,0),this.onData(x)):this.onData(i.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(V=!0)}while((0<O.avail_in||O.avail_out===0)&&g!==u.Z_STREAM_END);return g===u.Z_STREAM_END&&(_=u.Z_FINISH),_===u.Z_FINISH?(g=n.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===u.Z_OK):_!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(O.avail_out=0))},d.prototype.onData=function(p){this.chunks.push(p)},d.prototype.onEnd=function(p){p===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},o.Inflate=d,o.inflate=y,o.inflateRaw=function(p,b){return(b=b||{}).raw=!0,y(p,b)},o.ungzip=y},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,r,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(u){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var m=f.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var h in m)m.hasOwnProperty(h)&&(u[h]=m[h])}}return u},o.shrinkBuf=function(u,f){return u.length===f?u:u.subarray?u.subarray(0,f):(u.length=f,u)};var i={arraySet:function(u,f,m,h,v){if(f.subarray&&u.subarray)u.set(f.subarray(m,m+h),v);else for(var d=0;d<h;d++)u[v+d]=f[m+d]},flattenChunks:function(u){var f,m,h,v,d,y;for(f=h=0,m=u.length;f<m;f++)h+=u[f].length;for(y=new Uint8Array(h),f=v=0,m=u.length;f<m;f++)d=u[f],y.set(d,v),v+=d.length;return y}},a={arraySet:function(u,f,m,h,v){for(var d=0;d<h;d++)u[v+d]=f[m+d]},flattenChunks:function(u){return[].concat.apply([],u)}};o.setTyped=function(u){u?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,i)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,a))},o.setTyped(n)},{}],42:[function(e,r,o){var n=e("./common"),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var u=new n.Buf8(256),f=0;f<256;f++)u[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function m(h,v){if(v<65537&&(h.subarray&&a||!h.subarray&&i))return String.fromCharCode.apply(null,n.shrinkBuf(h,v));for(var d="",y=0;y<v;y++)d+=String.fromCharCode(h[y]);return d}u[254]=u[254]=1,o.string2buf=function(h){var v,d,y,p,b,g=h.length,_=0;for(p=0;p<g;p++)(64512&(d=h.charCodeAt(p)))==55296&&p+1<g&&(64512&(y=h.charCodeAt(p+1)))==56320&&(d=65536+(d-55296<<10)+(y-56320),p++),_+=d<128?1:d<2048?2:d<65536?3:4;for(v=new n.Buf8(_),p=b=0;b<_;p++)(64512&(d=h.charCodeAt(p)))==55296&&p+1<g&&(64512&(y=h.charCodeAt(p+1)))==56320&&(d=65536+(d-55296<<10)+(y-56320),p++),d<128?v[b++]=d:(d<2048?v[b++]=192|d>>>6:(d<65536?v[b++]=224|d>>>12:(v[b++]=240|d>>>18,v[b++]=128|d>>>12&63),v[b++]=128|d>>>6&63),v[b++]=128|63&d);return v},o.buf2binstring=function(h){return m(h,h.length)},o.binstring2buf=function(h){for(var v=new n.Buf8(h.length),d=0,y=v.length;d<y;d++)v[d]=h.charCodeAt(d);return v},o.buf2string=function(h,v){var d,y,p,b,g=v||h.length,_=new Array(2*g);for(d=y=0;d<g;)if((p=h[d++])<128)_[y++]=p;else if(4<(b=u[p]))_[y++]=65533,d+=b-1;else{for(p&=b===2?31:b===3?15:7;1<b&&d<g;)p=p<<6|63&h[d++],b--;1<b?_[y++]=65533:p<65536?_[y++]=p:(p-=65536,_[y++]=55296|p>>10&1023,_[y++]=56320|1023&p)}return m(_,y)},o.utf8border=function(h,v){var d;for((v=v||h.length)>h.length&&(v=h.length),d=v-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?v:d+u[h[d]]>v?d:v}},{"./common":41}],43:[function(e,r,o){r.exports=function(n,i,a,u){for(var f=65535&n|0,m=n>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;m=m+(f=f+i[u++]|0)|0,--h;);f%=65521,m%=65521}return f|m<<16|0}},{}],44:[function(e,r,o){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,r,o){var n=function(){for(var i,a=[],u=0;u<256;u++){i=u;for(var f=0;f<8;f++)i=1&i?3988292384^i>>>1:i>>>1;a[u]=i}return a}();r.exports=function(i,a,u,f){var m=n,h=f+u;i^=-1;for(var v=f;v<h;v++)i=i>>>8^m[255&(i^a[v])];return-1^i}},{}],46:[function(e,r,o){var n,i=e("../utils/common"),a=e("./trees"),u=e("./adler32"),f=e("./crc32"),m=e("./messages"),h=0,v=4,d=0,y=-2,p=-1,b=4,g=2,_=8,k=9,S=286,x=30,D=19,O=2*S+1,j=15,E=3,V=258,Q=V+E+1,A=42,F=113,l=1,L=2,rt=3,W=4;function it(c,N){return c.msg=m[N],N}function z(c){return(c<<1)-(4<c?9:0)}function X(c){for(var N=c.length;0<=--N;)c[N]=0}function M(c){var N=c.state,P=N.pending;P>c.avail_out&&(P=c.avail_out),P!==0&&(i.arraySet(c.output,N.pending_buf,N.pending_out,P,c.next_out),c.next_out+=P,N.pending_out+=P,c.total_out+=P,c.avail_out-=P,N.pending-=P,N.pending===0&&(N.pending_out=0))}function T(c,N){a._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,N),c.block_start=c.strstart,M(c.strm)}function Y(c,N){c.pending_buf[c.pending++]=N}function Z(c,N){c.pending_buf[c.pending++]=N>>>8&255,c.pending_buf[c.pending++]=255&N}function q(c,N){var P,B,w=c.max_chain_length,I=c.strstart,$=c.prev_length,U=c.nice_match,R=c.strstart>c.w_size-Q?c.strstart-(c.w_size-Q):0,G=c.window,J=c.w_mask,K=c.prev,st=c.strstart+V,ft=G[I+$-1],ct=G[I+$];c.prev_length>=c.good_match&&(w>>=2),U>c.lookahead&&(U=c.lookahead);do if(G[(P=N)+$]===ct&&G[P+$-1]===ft&&G[P]===G[I]&&G[++P]===G[I+1]){I+=2,P++;do;while(G[++I]===G[++P]&&G[++I]===G[++P]&&G[++I]===G[++P]&&G[++I]===G[++P]&&G[++I]===G[++P]&&G[++I]===G[++P]&&G[++I]===G[++P]&&G[++I]===G[++P]&&I<st);if(B=V-(st-I),I=st-V,$<B){if(c.match_start=N,U<=($=B))break;ft=G[I+$-1],ct=G[I+$]}}while((N=K[N&J])>R&&--w!=0);return $<=c.lookahead?$:c.lookahead}function mt(c){var N,P,B,w,I,$,U,R,G,J,K=c.w_size;do{if(w=c.window_size-c.lookahead-c.strstart,c.strstart>=K+(K-Q)){for(i.arraySet(c.window,c.window,K,K,0),c.match_start-=K,c.strstart-=K,c.block_start-=K,N=P=c.hash_size;B=c.head[--N],c.head[N]=K<=B?B-K:0,--P;);for(N=P=K;B=c.prev[--N],c.prev[N]=K<=B?B-K:0,--P;);w+=K}if(c.strm.avail_in===0)break;if($=c.strm,U=c.window,R=c.strstart+c.lookahead,G=w,J=void 0,J=$.avail_in,G<J&&(J=G),P=J===0?0:($.avail_in-=J,i.arraySet(U,$.input,$.next_in,J,R),$.state.wrap===1?$.adler=u($.adler,U,J,R):$.state.wrap===2&&($.adler=f($.adler,U,J,R)),$.next_in+=J,$.total_in+=J,J),c.lookahead+=P,c.lookahead+c.insert>=E)for(I=c.strstart-c.insert,c.ins_h=c.window[I],c.ins_h=(c.ins_h<<c.hash_shift^c.window[I+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[I+E-1])&c.hash_mask,c.prev[I&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=I,I++,c.insert--,!(c.lookahead+c.insert<E)););}while(c.lookahead<Q&&c.strm.avail_in!==0)}function It(c,N){for(var P,B;;){if(c.lookahead<Q){if(mt(c),c.lookahead<Q&&N===h)return l;if(c.lookahead===0)break}if(P=0,c.lookahead>=E&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+E-1])&c.hash_mask,P=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),P!==0&&c.strstart-P<=c.w_size-Q&&(c.match_length=q(c,P)),c.match_length>=E)if(B=a._tr_tally(c,c.strstart-c.match_start,c.match_length-E),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=E){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+E-1])&c.hash_mask,P=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else B=a._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(B&&(T(c,!1),c.strm.avail_out===0))return l}return c.insert=c.strstart<E-1?c.strstart:E-1,N===v?(T(c,!0),c.strm.avail_out===0?rt:W):c.last_lit&&(T(c,!1),c.strm.avail_out===0)?l:L}function ut(c,N){for(var P,B,w;;){if(c.lookahead<Q){if(mt(c),c.lookahead<Q&&N===h)return l;if(c.lookahead===0)break}if(P=0,c.lookahead>=E&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+E-1])&c.hash_mask,P=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=E-1,P!==0&&c.prev_length<c.max_lazy_match&&c.strstart-P<=c.w_size-Q&&(c.match_length=q(c,P),c.match_length<=5&&(c.strategy===1||c.match_length===E&&4096<c.strstart-c.match_start)&&(c.match_length=E-1)),c.prev_length>=E&&c.match_length<=c.prev_length){for(w=c.strstart+c.lookahead-E,B=a._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-E),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=w&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+E-1])&c.hash_mask,P=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=E-1,c.strstart++,B&&(T(c,!1),c.strm.avail_out===0))return l}else if(c.match_available){if((B=a._tr_tally(c,0,c.window[c.strstart-1]))&&T(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return l}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(B=a._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<E-1?c.strstart:E-1,N===v?(T(c,!0),c.strm.avail_out===0?rt:W):c.last_lit&&(T(c,!1),c.strm.avail_out===0)?l:L}function lt(c,N,P,B,w){this.good_length=c,this.max_lazy=N,this.nice_length=P,this.max_chain=B,this.func=w}function Bt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*O),this.dyn_dtree=new i.Buf16(2*(2*x+1)),this.bl_tree=new i.Buf16(2*(2*D+1)),X(this.dyn_ltree),X(this.dyn_dtree),X(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(j+1),this.heap=new i.Buf16(2*S+1),X(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*S+1),X(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function vt(c){var N;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=g,(N=c.state).pending=0,N.pending_out=0,N.wrap<0&&(N.wrap=-N.wrap),N.status=N.wrap?A:F,c.adler=N.wrap===2?0:1,N.last_flush=h,a._tr_init(N),d):it(c,y)}function Xt(c){var N=vt(c);return N===d&&function(P){P.window_size=2*P.w_size,X(P.head),P.max_lazy_match=n[P.level].max_lazy,P.good_match=n[P.level].good_length,P.nice_match=n[P.level].nice_length,P.max_chain_length=n[P.level].max_chain,P.strstart=0,P.block_start=0,P.lookahead=0,P.insert=0,P.match_length=P.prev_length=E-1,P.match_available=0,P.ins_h=0}(c.state),N}function Kt(c,N,P,B,w,I){if(!c)return y;var $=1;if(N===p&&(N=6),B<0?($=0,B=-B):15<B&&($=2,B-=16),w<1||k<w||P!==_||B<8||15<B||N<0||9<N||I<0||b<I)return it(c,y);B===8&&(B=9);var U=new Bt;return(c.state=U).strm=c,U.wrap=$,U.gzhead=null,U.w_bits=B,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=w+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+E-1)/E),U.window=new i.Buf8(2*U.w_size),U.head=new i.Buf16(U.hash_size),U.prev=new i.Buf16(U.w_size),U.lit_bufsize=1<<w+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new i.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=N,U.strategy=I,U.method=P,Xt(c)}n=[new lt(0,0,0,0,function(c,N){var P=65535;for(P>c.pending_buf_size-5&&(P=c.pending_buf_size-5);;){if(c.lookahead<=1){if(mt(c),c.lookahead===0&&N===h)return l;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var B=c.block_start+P;if((c.strstart===0||c.strstart>=B)&&(c.lookahead=c.strstart-B,c.strstart=B,T(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-Q&&(T(c,!1),c.strm.avail_out===0))return l}return c.insert=0,N===v?(T(c,!0),c.strm.avail_out===0?rt:W):(c.strstart>c.block_start&&(T(c,!1),c.strm.avail_out),l)}),new lt(4,4,8,4,It),new lt(4,5,16,8,It),new lt(4,6,32,32,It),new lt(4,4,16,16,ut),new lt(8,16,32,32,ut),new lt(8,16,128,128,ut),new lt(8,32,128,256,ut),new lt(32,128,258,1024,ut),new lt(32,258,258,4096,ut)],o.deflateInit=function(c,N){return Kt(c,N,_,15,8,0)},o.deflateInit2=Kt,o.deflateReset=Xt,o.deflateResetKeep=vt,o.deflateSetHeader=function(c,N){return c&&c.state?c.state.wrap!==2?y:(c.state.gzhead=N,d):y},o.deflate=function(c,N){var P,B,w,I;if(!c||!c.state||5<N||N<0)return c?it(c,y):y;if(B=c.state,!c.output||!c.input&&c.avail_in!==0||B.status===666&&N!==v)return it(c,c.avail_out===0?-5:y);if(B.strm=c,P=B.last_flush,B.last_flush=N,B.status===A)if(B.wrap===2)c.adler=0,Y(B,31),Y(B,139),Y(B,8),B.gzhead?(Y(B,(B.gzhead.text?1:0)+(B.gzhead.hcrc?2:0)+(B.gzhead.extra?4:0)+(B.gzhead.name?8:0)+(B.gzhead.comment?16:0)),Y(B,255&B.gzhead.time),Y(B,B.gzhead.time>>8&255),Y(B,B.gzhead.time>>16&255),Y(B,B.gzhead.time>>24&255),Y(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),Y(B,255&B.gzhead.os),B.gzhead.extra&&B.gzhead.extra.length&&(Y(B,255&B.gzhead.extra.length),Y(B,B.gzhead.extra.length>>8&255)),B.gzhead.hcrc&&(c.adler=f(c.adler,B.pending_buf,B.pending,0)),B.gzindex=0,B.status=69):(Y(B,0),Y(B,0),Y(B,0),Y(B,0),Y(B,0),Y(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),Y(B,3),B.status=F);else{var $=_+(B.w_bits-8<<4)<<8;$|=(2<=B.strategy||B.level<2?0:B.level<6?1:B.level===6?2:3)<<6,B.strstart!==0&&($|=32),$+=31-$%31,B.status=F,Z(B,$),B.strstart!==0&&(Z(B,c.adler>>>16),Z(B,65535&c.adler)),c.adler=1}if(B.status===69)if(B.gzhead.extra){for(w=B.pending;B.gzindex<(65535&B.gzhead.extra.length)&&(B.pending!==B.pending_buf_size||(B.gzhead.hcrc&&B.pending>w&&(c.adler=f(c.adler,B.pending_buf,B.pending-w,w)),M(c),w=B.pending,B.pending!==B.pending_buf_size));)Y(B,255&B.gzhead.extra[B.gzindex]),B.gzindex++;B.gzhead.hcrc&&B.pending>w&&(c.adler=f(c.adler,B.pending_buf,B.pending-w,w)),B.gzindex===B.gzhead.extra.length&&(B.gzindex=0,B.status=73)}else B.status=73;if(B.status===73)if(B.gzhead.name){w=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>w&&(c.adler=f(c.adler,B.pending_buf,B.pending-w,w)),M(c),w=B.pending,B.pending===B.pending_buf_size)){I=1;break}I=B.gzindex<B.gzhead.name.length?255&B.gzhead.name.charCodeAt(B.gzindex++):0,Y(B,I)}while(I!==0);B.gzhead.hcrc&&B.pending>w&&(c.adler=f(c.adler,B.pending_buf,B.pending-w,w)),I===0&&(B.gzindex=0,B.status=91)}else B.status=91;if(B.status===91)if(B.gzhead.comment){w=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>w&&(c.adler=f(c.adler,B.pending_buf,B.pending-w,w)),M(c),w=B.pending,B.pending===B.pending_buf_size)){I=1;break}I=B.gzindex<B.gzhead.comment.length?255&B.gzhead.comment.charCodeAt(B.gzindex++):0,Y(B,I)}while(I!==0);B.gzhead.hcrc&&B.pending>w&&(c.adler=f(c.adler,B.pending_buf,B.pending-w,w)),I===0&&(B.status=103)}else B.status=103;if(B.status===103&&(B.gzhead.hcrc?(B.pending+2>B.pending_buf_size&&M(c),B.pending+2<=B.pending_buf_size&&(Y(B,255&c.adler),Y(B,c.adler>>8&255),c.adler=0,B.status=F)):B.status=F),B.pending!==0){if(M(c),c.avail_out===0)return B.last_flush=-1,d}else if(c.avail_in===0&&z(N)<=z(P)&&N!==v)return it(c,-5);if(B.status===666&&c.avail_in!==0)return it(c,-5);if(c.avail_in!==0||B.lookahead!==0||N!==h&&B.status!==666){var U=B.strategy===2?function(R,G){for(var J;;){if(R.lookahead===0&&(mt(R),R.lookahead===0)){if(G===h)return l;break}if(R.match_length=0,J=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,J&&(T(R,!1),R.strm.avail_out===0))return l}return R.insert=0,G===v?(T(R,!0),R.strm.avail_out===0?rt:W):R.last_lit&&(T(R,!1),R.strm.avail_out===0)?l:L}(B,N):B.strategy===3?function(R,G){for(var J,K,st,ft,ct=R.window;;){if(R.lookahead<=V){if(mt(R),R.lookahead<=V&&G===h)return l;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=E&&0<R.strstart&&(K=ct[st=R.strstart-1])===ct[++st]&&K===ct[++st]&&K===ct[++st]){ft=R.strstart+V;do;while(K===ct[++st]&&K===ct[++st]&&K===ct[++st]&&K===ct[++st]&&K===ct[++st]&&K===ct[++st]&&K===ct[++st]&&K===ct[++st]&&st<ft);R.match_length=V-(ft-st),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=E?(J=a._tr_tally(R,1,R.match_length-E),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(J=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),J&&(T(R,!1),R.strm.avail_out===0))return l}return R.insert=0,G===v?(T(R,!0),R.strm.avail_out===0?rt:W):R.last_lit&&(T(R,!1),R.strm.avail_out===0)?l:L}(B,N):n[B.level].func(B,N);if(U!==rt&&U!==W||(B.status=666),U===l||U===rt)return c.avail_out===0&&(B.last_flush=-1),d;if(U===L&&(N===1?a._tr_align(B):N!==5&&(a._tr_stored_block(B,0,0,!1),N===3&&(X(B.head),B.lookahead===0&&(B.strstart=0,B.block_start=0,B.insert=0))),M(c),c.avail_out===0))return B.last_flush=-1,d}return N!==v?d:B.wrap<=0?1:(B.wrap===2?(Y(B,255&c.adler),Y(B,c.adler>>8&255),Y(B,c.adler>>16&255),Y(B,c.adler>>24&255),Y(B,255&c.total_in),Y(B,c.total_in>>8&255),Y(B,c.total_in>>16&255),Y(B,c.total_in>>24&255)):(Z(B,c.adler>>>16),Z(B,65535&c.adler)),M(c),0<B.wrap&&(B.wrap=-B.wrap),B.pending!==0?d:1)},o.deflateEnd=function(c){var N;return c&&c.state?(N=c.state.status)!==A&&N!==69&&N!==73&&N!==91&&N!==103&&N!==F&&N!==666?it(c,y):(c.state=null,N===F?it(c,-3):d):y},o.deflateSetDictionary=function(c,N){var P,B,w,I,$,U,R,G,J=N.length;if(!c||!c.state||(I=(P=c.state).wrap)===2||I===1&&P.status!==A||P.lookahead)return y;for(I===1&&(c.adler=u(c.adler,N,J,0)),P.wrap=0,J>=P.w_size&&(I===0&&(X(P.head),P.strstart=0,P.block_start=0,P.insert=0),G=new i.Buf8(P.w_size),i.arraySet(G,N,J-P.w_size,P.w_size,0),N=G,J=P.w_size),$=c.avail_in,U=c.next_in,R=c.input,c.avail_in=J,c.next_in=0,c.input=N,mt(P);P.lookahead>=E;){for(B=P.strstart,w=P.lookahead-(E-1);P.ins_h=(P.ins_h<<P.hash_shift^P.window[B+E-1])&P.hash_mask,P.prev[B&P.w_mask]=P.head[P.ins_h],P.head[P.ins_h]=B,B++,--w;);P.strstart=B,P.lookahead=E-1,mt(P)}return P.strstart+=P.lookahead,P.block_start=P.strstart,P.insert=P.lookahead,P.lookahead=0,P.match_length=P.prev_length=E-1,P.match_available=0,c.next_in=U,c.input=R,c.avail_in=$,P.wrap=I,d},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,r,o){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,r,o){r.exports=function(n,i){var a,u,f,m,h,v,d,y,p,b,g,_,k,S,x,D,O,j,E,V,Q,A,F,l,L;a=n.state,u=n.next_in,l=n.input,f=u+(n.avail_in-5),m=n.next_out,L=n.output,h=m-(i-n.avail_out),v=m+(n.avail_out-257),d=a.dmax,y=a.wsize,p=a.whave,b=a.wnext,g=a.window,_=a.hold,k=a.bits,S=a.lencode,x=a.distcode,D=(1<<a.lenbits)-1,O=(1<<a.distbits)-1;t:do{k<15&&(_+=l[u++]<<k,k+=8,_+=l[u++]<<k,k+=8),j=S[_&D];e:for(;;){if(_>>>=E=j>>>24,k-=E,(E=j>>>16&255)===0)L[m++]=65535&j;else{if(!(16&E)){if(!(64&E)){j=S[(65535&j)+(_&(1<<E)-1)];continue e}if(32&E){a.mode=12;break t}n.msg="invalid literal/length code",a.mode=30;break t}V=65535&j,(E&=15)&&(k<E&&(_+=l[u++]<<k,k+=8),V+=_&(1<<E)-1,_>>>=E,k-=E),k<15&&(_+=l[u++]<<k,k+=8,_+=l[u++]<<k,k+=8),j=x[_&O];s:for(;;){if(_>>>=E=j>>>24,k-=E,!(16&(E=j>>>16&255))){if(!(64&E)){j=x[(65535&j)+(_&(1<<E)-1)];continue s}n.msg="invalid distance code",a.mode=30;break t}if(Q=65535&j,k<(E&=15)&&(_+=l[u++]<<k,(k+=8)<E&&(_+=l[u++]<<k,k+=8)),d<(Q+=_&(1<<E)-1)){n.msg="invalid distance too far back",a.mode=30;break t}if(_>>>=E,k-=E,(E=m-h)<Q){if(p<(E=Q-E)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break t}if(F=g,(A=0)===b){if(A+=y-E,E<V){for(V-=E;L[m++]=g[A++],--E;);A=m-Q,F=L}}else if(b<E){if(A+=y+b-E,(E-=b)<V){for(V-=E;L[m++]=g[A++],--E;);if(A=0,b<V){for(V-=E=b;L[m++]=g[A++],--E;);A=m-Q,F=L}}}else if(A+=b-E,E<V){for(V-=E;L[m++]=g[A++],--E;);A=m-Q,F=L}for(;2<V;)L[m++]=F[A++],L[m++]=F[A++],L[m++]=F[A++],V-=3;V&&(L[m++]=F[A++],1<V&&(L[m++]=F[A++]))}else{for(A=m-Q;L[m++]=L[A++],L[m++]=L[A++],L[m++]=L[A++],2<(V-=3););V&&(L[m++]=L[A++],1<V&&(L[m++]=L[A++]))}break}}break}}while(u<f&&m<v);u-=V=k>>3,_&=(1<<(k-=V<<3))-1,n.next_in=u,n.next_out=m,n.avail_in=u<f?f-u+5:5-(u-f),n.avail_out=m<v?v-m+257:257-(m-v),a.hold=_,a.bits=k}},{}],49:[function(e,r,o){var n=e("../utils/common"),i=e("./adler32"),a=e("./crc32"),u=e("./inffast"),f=e("./inftrees"),m=1,h=2,v=0,d=-2,y=1,p=852,b=592;function g(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function k(A){var F;return A&&A.state?(F=A.state,A.total_in=A.total_out=F.total=0,A.msg="",F.wrap&&(A.adler=1&F.wrap),F.mode=y,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new n.Buf32(p),F.distcode=F.distdyn=new n.Buf32(b),F.sane=1,F.back=-1,v):d}function S(A){var F;return A&&A.state?((F=A.state).wsize=0,F.whave=0,F.wnext=0,k(A)):d}function x(A,F){var l,L;return A&&A.state?(L=A.state,F<0?(l=0,F=-F):(l=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?d:(L.window!==null&&L.wbits!==F&&(L.window=null),L.wrap=l,L.wbits=F,S(A))):d}function D(A,F){var l,L;return A?(L=new _,(A.state=L).window=null,(l=x(A,F))!==v&&(A.state=null),l):d}var O,j,E=!0;function V(A){if(E){var F;for(O=new n.Buf32(512),j=new n.Buf32(32),F=0;F<144;)A.lens[F++]=8;for(;F<256;)A.lens[F++]=9;for(;F<280;)A.lens[F++]=7;for(;F<288;)A.lens[F++]=8;for(f(m,A.lens,0,288,O,0,A.work,{bits:9}),F=0;F<32;)A.lens[F++]=5;f(h,A.lens,0,32,j,0,A.work,{bits:5}),E=!1}A.lencode=O,A.lenbits=9,A.distcode=j,A.distbits=5}function Q(A,F,l,L){var rt,W=A.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new n.Buf8(W.wsize)),L>=W.wsize?(n.arraySet(W.window,F,l-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(L<(rt=W.wsize-W.wnext)&&(rt=L),n.arraySet(W.window,F,l-L,rt,W.wnext),(L-=rt)?(n.arraySet(W.window,F,l-L,L,0),W.wnext=L,W.whave=W.wsize):(W.wnext+=rt,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=rt))),0}o.inflateReset=S,o.inflateReset2=x,o.inflateResetKeep=k,o.inflateInit=function(A){return D(A,15)},o.inflateInit2=D,o.inflate=function(A,F){var l,L,rt,W,it,z,X,M,T,Y,Z,q,mt,It,ut,lt,Bt,vt,Xt,Kt,c,N,P,B,w=0,I=new n.Buf8(4),$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return d;(l=A.state).mode===12&&(l.mode=13),it=A.next_out,rt=A.output,X=A.avail_out,W=A.next_in,L=A.input,z=A.avail_in,M=l.hold,T=l.bits,Y=z,Z=X,N=v;t:for(;;)switch(l.mode){case y:if(l.wrap===0){l.mode=13;break}for(;T<16;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(2&l.wrap&&M===35615){I[l.check=0]=255&M,I[1]=M>>>8&255,l.check=a(l.check,I,2,0),T=M=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&M)<<8)+(M>>8))%31){A.msg="incorrect header check",l.mode=30;break}if((15&M)!=8){A.msg="unknown compression method",l.mode=30;break}if(T-=4,c=8+(15&(M>>>=4)),l.wbits===0)l.wbits=c;else if(c>l.wbits){A.msg="invalid window size",l.mode=30;break}l.dmax=1<<c,A.adler=l.check=1,l.mode=512&M?10:12,T=M=0;break;case 2:for(;T<16;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(l.flags=M,(255&l.flags)!=8){A.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){A.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=M>>8&1),512&l.flags&&(I[0]=255&M,I[1]=M>>>8&255,l.check=a(l.check,I,2,0)),T=M=0,l.mode=3;case 3:for(;T<32;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}l.head&&(l.head.time=M),512&l.flags&&(I[0]=255&M,I[1]=M>>>8&255,I[2]=M>>>16&255,I[3]=M>>>24&255,l.check=a(l.check,I,4,0)),T=M=0,l.mode=4;case 4:for(;T<16;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}l.head&&(l.head.xflags=255&M,l.head.os=M>>8),512&l.flags&&(I[0]=255&M,I[1]=M>>>8&255,l.check=a(l.check,I,2,0)),T=M=0,l.mode=5;case 5:if(1024&l.flags){for(;T<16;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}l.length=M,l.head&&(l.head.extra_len=M),512&l.flags&&(I[0]=255&M,I[1]=M>>>8&255,l.check=a(l.check,I,2,0)),T=M=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(z<(q=l.length)&&(q=z),q&&(l.head&&(c=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),n.arraySet(l.head.extra,L,W,q,c)),512&l.flags&&(l.check=a(l.check,L,q,W)),z-=q,W+=q,l.length-=q),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(z===0)break t;for(q=0;c=L[W+q++],l.head&&c&&l.length<65536&&(l.head.name+=String.fromCharCode(c)),c&&q<z;);if(512&l.flags&&(l.check=a(l.check,L,q,W)),z-=q,W+=q,c)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(z===0)break t;for(q=0;c=L[W+q++],l.head&&c&&l.length<65536&&(l.head.comment+=String.fromCharCode(c)),c&&q<z;);if(512&l.flags&&(l.check=a(l.check,L,q,W)),z-=q,W+=q,c)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;T<16;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(M!==(65535&l.check)){A.msg="header crc mismatch",l.mode=30;break}T=M=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),A.adler=l.check=0,l.mode=12;break;case 10:for(;T<32;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}A.adler=l.check=g(M),T=M=0,l.mode=11;case 11:if(l.havedict===0)return A.next_out=it,A.avail_out=X,A.next_in=W,A.avail_in=z,l.hold=M,l.bits=T,2;A.adler=l.check=1,l.mode=12;case 12:if(F===5||F===6)break t;case 13:if(l.last){M>>>=7&T,T-=7&T,l.mode=27;break}for(;T<3;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}switch(l.last=1&M,T-=1,3&(M>>>=1)){case 0:l.mode=14;break;case 1:if(V(l),l.mode=20,F!==6)break;M>>>=2,T-=2;break t;case 2:l.mode=17;break;case 3:A.msg="invalid block type",l.mode=30}M>>>=2,T-=2;break;case 14:for(M>>>=7&T,T-=7&T;T<32;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if((65535&M)!=(M>>>16^65535)){A.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&M,T=M=0,l.mode=15,F===6)break t;case 15:l.mode=16;case 16:if(q=l.length){if(z<q&&(q=z),X<q&&(q=X),q===0)break t;n.arraySet(rt,L,W,q,it),z-=q,W+=q,X-=q,it+=q,l.length-=q;break}l.mode=12;break;case 17:for(;T<14;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(l.nlen=257+(31&M),M>>>=5,T-=5,l.ndist=1+(31&M),M>>>=5,T-=5,l.ncode=4+(15&M),M>>>=4,T-=4,286<l.nlen||30<l.ndist){A.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;T<3;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}l.lens[$[l.have++]]=7&M,M>>>=3,T-=3}for(;l.have<19;)l.lens[$[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,P={bits:l.lenbits},N=f(0,l.lens,0,19,l.lencode,0,l.work,P),l.lenbits=P.bits,N){A.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;lt=(w=l.lencode[M&(1<<l.lenbits)-1])>>>16&255,Bt=65535&w,!((ut=w>>>24)<=T);){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(Bt<16)M>>>=ut,T-=ut,l.lens[l.have++]=Bt;else{if(Bt===16){for(B=ut+2;T<B;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(M>>>=ut,T-=ut,l.have===0){A.msg="invalid bit length repeat",l.mode=30;break}c=l.lens[l.have-1],q=3+(3&M),M>>>=2,T-=2}else if(Bt===17){for(B=ut+3;T<B;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}T-=ut,c=0,q=3+(7&(M>>>=ut)),M>>>=3,T-=3}else{for(B=ut+7;T<B;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}T-=ut,c=0,q=11+(127&(M>>>=ut)),M>>>=7,T-=7}if(l.have+q>l.nlen+l.ndist){A.msg="invalid bit length repeat",l.mode=30;break}for(;q--;)l.lens[l.have++]=c}}if(l.mode===30)break;if(l.lens[256]===0){A.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,P={bits:l.lenbits},N=f(m,l.lens,0,l.nlen,l.lencode,0,l.work,P),l.lenbits=P.bits,N){A.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,P={bits:l.distbits},N=f(h,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,P),l.distbits=P.bits,N){A.msg="invalid distances set",l.mode=30;break}if(l.mode=20,F===6)break t;case 20:l.mode=21;case 21:if(6<=z&&258<=X){A.next_out=it,A.avail_out=X,A.next_in=W,A.avail_in=z,l.hold=M,l.bits=T,u(A,Z),it=A.next_out,rt=A.output,X=A.avail_out,W=A.next_in,L=A.input,z=A.avail_in,M=l.hold,T=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;lt=(w=l.lencode[M&(1<<l.lenbits)-1])>>>16&255,Bt=65535&w,!((ut=w>>>24)<=T);){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(lt&&!(240&lt)){for(vt=ut,Xt=lt,Kt=Bt;lt=(w=l.lencode[Kt+((M&(1<<vt+Xt)-1)>>vt)])>>>16&255,Bt=65535&w,!(vt+(ut=w>>>24)<=T);){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}M>>>=vt,T-=vt,l.back+=vt}if(M>>>=ut,T-=ut,l.back+=ut,l.length=Bt,lt===0){l.mode=26;break}if(32&lt){l.back=-1,l.mode=12;break}if(64&lt){A.msg="invalid literal/length code",l.mode=30;break}l.extra=15&lt,l.mode=22;case 22:if(l.extra){for(B=l.extra;T<B;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}l.length+=M&(1<<l.extra)-1,M>>>=l.extra,T-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;lt=(w=l.distcode[M&(1<<l.distbits)-1])>>>16&255,Bt=65535&w,!((ut=w>>>24)<=T);){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(!(240&lt)){for(vt=ut,Xt=lt,Kt=Bt;lt=(w=l.distcode[Kt+((M&(1<<vt+Xt)-1)>>vt)])>>>16&255,Bt=65535&w,!(vt+(ut=w>>>24)<=T);){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}M>>>=vt,T-=vt,l.back+=vt}if(M>>>=ut,T-=ut,l.back+=ut,64&lt){A.msg="invalid distance code",l.mode=30;break}l.offset=Bt,l.extra=15&lt,l.mode=24;case 24:if(l.extra){for(B=l.extra;T<B;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}l.offset+=M&(1<<l.extra)-1,M>>>=l.extra,T-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){A.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(X===0)break t;if(q=Z-X,l.offset>q){if((q=l.offset-q)>l.whave&&l.sane){A.msg="invalid distance too far back",l.mode=30;break}mt=q>l.wnext?(q-=l.wnext,l.wsize-q):l.wnext-q,q>l.length&&(q=l.length),It=l.window}else It=rt,mt=it-l.offset,q=l.length;for(X<q&&(q=X),X-=q,l.length-=q;rt[it++]=It[mt++],--q;);l.length===0&&(l.mode=21);break;case 26:if(X===0)break t;rt[it++]=l.length,X--,l.mode=21;break;case 27:if(l.wrap){for(;T<32;){if(z===0)break t;z--,M|=L[W++]<<T,T+=8}if(Z-=X,A.total_out+=Z,l.total+=Z,Z&&(A.adler=l.check=l.flags?a(l.check,rt,Z,it-Z):i(l.check,rt,Z,it-Z)),Z=X,(l.flags?M:g(M))!==l.check){A.msg="incorrect data check",l.mode=30;break}T=M=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;T<32;){if(z===0)break t;z--,M+=L[W++]<<T,T+=8}if(M!==(4294967295&l.total)){A.msg="incorrect length check",l.mode=30;break}T=M=0}l.mode=29;case 29:N=1;break t;case 30:N=-3;break t;case 31:return-4;case 32:default:return d}return A.next_out=it,A.avail_out=X,A.next_in=W,A.avail_in=z,l.hold=M,l.bits=T,(l.wsize||Z!==A.avail_out&&l.mode<30&&(l.mode<27||F!==4))&&Q(A,A.output,A.next_out,Z-A.avail_out)?(l.mode=31,-4):(Y-=A.avail_in,Z-=A.avail_out,A.total_in+=Y,A.total_out+=Z,l.total+=Z,l.wrap&&Z&&(A.adler=l.check=l.flags?a(l.check,rt,Z,A.next_out-Z):i(l.check,rt,Z,A.next_out-Z)),A.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(Y==0&&Z===0||F===4)&&N===v&&(N=-5),N)},o.inflateEnd=function(A){if(!A||!A.state)return d;var F=A.state;return F.window&&(F.window=null),A.state=null,v},o.inflateGetHeader=function(A,F){var l;return A&&A.state&&2&(l=A.state).wrap?((l.head=F).done=!1,v):d},o.inflateSetDictionary=function(A,F){var l,L=F.length;return A&&A.state?(l=A.state).wrap!==0&&l.mode!==11?d:l.mode===11&&i(1,F,L,0)!==l.check?-3:Q(A,F,L,L)?(l.mode=31,-4):(l.havedict=1,v):d},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,r,o){var n=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(m,h,v,d,y,p,b,g){var _,k,S,x,D,O,j,E,V,Q=g.bits,A=0,F=0,l=0,L=0,rt=0,W=0,it=0,z=0,X=0,M=0,T=null,Y=0,Z=new n.Buf16(16),q=new n.Buf16(16),mt=null,It=0;for(A=0;A<=15;A++)Z[A]=0;for(F=0;F<d;F++)Z[h[v+F]]++;for(rt=Q,L=15;1<=L&&Z[L]===0;L--);if(L<rt&&(rt=L),L===0)return y[p++]=20971520,y[p++]=20971520,g.bits=1,0;for(l=1;l<L&&Z[l]===0;l++);for(rt<l&&(rt=l),A=z=1;A<=15;A++)if(z<<=1,(z-=Z[A])<0)return-1;if(0<z&&(m===0||L!==1))return-1;for(q[1]=0,A=1;A<15;A++)q[A+1]=q[A]+Z[A];for(F=0;F<d;F++)h[v+F]!==0&&(b[q[h[v+F]]++]=F);if(O=m===0?(T=mt=b,19):m===1?(T=i,Y-=257,mt=a,It-=257,256):(T=u,mt=f,-1),A=l,D=p,it=F=M=0,S=-1,x=(X=1<<(W=rt))-1,m===1&&852<X||m===2&&592<X)return 1;for(;;){for(j=A-it,V=b[F]<O?(E=0,b[F]):b[F]>O?(E=mt[It+b[F]],T[Y+b[F]]):(E=96,0),_=1<<A-it,l=k=1<<W;y[D+(M>>it)+(k-=_)]=j<<24|E<<16|V|0,k!==0;);for(_=1<<A-1;M&_;)_>>=1;if(_!==0?(M&=_-1,M+=_):M=0,F++,--Z[A]==0){if(A===L)break;A=h[v+b[F]]}if(rt<A&&(M&x)!==S){for(it===0&&(it=rt),D+=l,z=1<<(W=A-it);W+it<L&&!((z-=Z[W+it])<=0);)W++,z<<=1;if(X+=1<<W,m===1&&852<X||m===2&&592<X)return 1;y[S=M&x]=rt<<24|W<<16|D-p|0}}return M!==0&&(y[D+M]=A-it<<24|64<<16|0),g.bits=rt,0}},{"../utils/common":41}],51:[function(e,r,o){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,r,o){var n=e("../utils/common"),i=0,a=1;function u(w){for(var I=w.length;0<=--I;)w[I]=0}var f=0,m=29,h=256,v=h+1+m,d=30,y=19,p=2*v+1,b=15,g=16,_=7,k=256,S=16,x=17,D=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],j=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(v+2));u(Q);var A=new Array(2*d);u(A);var F=new Array(512);u(F);var l=new Array(256);u(l);var L=new Array(m);u(L);var rt,W,it,z=new Array(d);function X(w,I,$,U,R){this.static_tree=w,this.extra_bits=I,this.extra_base=$,this.elems=U,this.max_length=R,this.has_stree=w&&w.length}function M(w,I){this.dyn_tree=w,this.max_code=0,this.stat_desc=I}function T(w){return w<256?F[w]:F[256+(w>>>7)]}function Y(w,I){w.pending_buf[w.pending++]=255&I,w.pending_buf[w.pending++]=I>>>8&255}function Z(w,I,$){w.bi_valid>g-$?(w.bi_buf|=I<<w.bi_valid&65535,Y(w,w.bi_buf),w.bi_buf=I>>g-w.bi_valid,w.bi_valid+=$-g):(w.bi_buf|=I<<w.bi_valid&65535,w.bi_valid+=$)}function q(w,I,$){Z(w,$[2*I],$[2*I+1])}function mt(w,I){for(var $=0;$|=1&w,w>>>=1,$<<=1,0<--I;);return $>>>1}function It(w,I,$){var U,R,G=new Array(b+1),J=0;for(U=1;U<=b;U++)G[U]=J=J+$[U-1]<<1;for(R=0;R<=I;R++){var K=w[2*R+1];K!==0&&(w[2*R]=mt(G[K]++,K))}}function ut(w){var I;for(I=0;I<v;I++)w.dyn_ltree[2*I]=0;for(I=0;I<d;I++)w.dyn_dtree[2*I]=0;for(I=0;I<y;I++)w.bl_tree[2*I]=0;w.dyn_ltree[2*k]=1,w.opt_len=w.static_len=0,w.last_lit=w.matches=0}function lt(w){8<w.bi_valid?Y(w,w.bi_buf):0<w.bi_valid&&(w.pending_buf[w.pending++]=w.bi_buf),w.bi_buf=0,w.bi_valid=0}function Bt(w,I,$,U){var R=2*I,G=2*$;return w[R]<w[G]||w[R]===w[G]&&U[I]<=U[$]}function vt(w,I,$){for(var U=w.heap[$],R=$<<1;R<=w.heap_len&&(R<w.heap_len&&Bt(I,w.heap[R+1],w.heap[R],w.depth)&&R++,!Bt(I,U,w.heap[R],w.depth));)w.heap[$]=w.heap[R],$=R,R<<=1;w.heap[$]=U}function Xt(w,I,$){var U,R,G,J,K=0;if(w.last_lit!==0)for(;U=w.pending_buf[w.d_buf+2*K]<<8|w.pending_buf[w.d_buf+2*K+1],R=w.pending_buf[w.l_buf+K],K++,U===0?q(w,R,I):(q(w,(G=l[R])+h+1,I),(J=O[G])!==0&&Z(w,R-=L[G],J),q(w,G=T(--U),$),(J=j[G])!==0&&Z(w,U-=z[G],J)),K<w.last_lit;);q(w,k,I)}function Kt(w,I){var $,U,R,G=I.dyn_tree,J=I.stat_desc.static_tree,K=I.stat_desc.has_stree,st=I.stat_desc.elems,ft=-1;for(w.heap_len=0,w.heap_max=p,$=0;$<st;$++)G[2*$]!==0?(w.heap[++w.heap_len]=ft=$,w.depth[$]=0):G[2*$+1]=0;for(;w.heap_len<2;)G[2*(R=w.heap[++w.heap_len]=ft<2?++ft:0)]=1,w.depth[R]=0,w.opt_len--,K&&(w.static_len-=J[2*R+1]);for(I.max_code=ft,$=w.heap_len>>1;1<=$;$--)vt(w,G,$);for(R=st;$=w.heap[1],w.heap[1]=w.heap[w.heap_len--],vt(w,G,1),U=w.heap[1],w.heap[--w.heap_max]=$,w.heap[--w.heap_max]=U,G[2*R]=G[2*$]+G[2*U],w.depth[R]=(w.depth[$]>=w.depth[U]?w.depth[$]:w.depth[U])+1,G[2*$+1]=G[2*U+1]=R,w.heap[1]=R++,vt(w,G,1),2<=w.heap_len;);w.heap[--w.heap_max]=w.heap[1],function(ct,Wt){var xe,Yt,Ie,kt,$e,k0,ne=Wt.dyn_tree,k1=Wt.max_code,hr=Wt.stat_desc.static_tree,fr=Wt.stat_desc.has_stree,mr=Wt.stat_desc.extra_bits,y1=Wt.stat_desc.extra_base,Re=Wt.stat_desc.max_length,Ue=0;for(kt=0;kt<=b;kt++)ct.bl_count[kt]=0;for(ne[2*ct.heap[ct.heap_max]+1]=0,xe=ct.heap_max+1;xe<p;xe++)Re<(kt=ne[2*ne[2*(Yt=ct.heap[xe])+1]+1]+1)&&(kt=Re,Ue++),ne[2*Yt+1]=kt,k1<Yt||(ct.bl_count[kt]++,$e=0,y1<=Yt&&($e=mr[Yt-y1]),k0=ne[2*Yt],ct.opt_len+=k0*(kt+$e),fr&&(ct.static_len+=k0*(hr[2*Yt+1]+$e)));if(Ue!==0){do{for(kt=Re-1;ct.bl_count[kt]===0;)kt--;ct.bl_count[kt]--,ct.bl_count[kt+1]+=2,ct.bl_count[Re]--,Ue-=2}while(0<Ue);for(kt=Re;kt!==0;kt--)for(Yt=ct.bl_count[kt];Yt!==0;)k1<(Ie=ct.heap[--xe])||(ne[2*Ie+1]!==kt&&(ct.opt_len+=(kt-ne[2*Ie+1])*ne[2*Ie],ne[2*Ie+1]=kt),Yt--)}}(w,I),It(G,ft,w.bl_count)}function c(w,I,$){var U,R,G=-1,J=I[1],K=0,st=7,ft=4;for(J===0&&(st=138,ft=3),I[2*($+1)+1]=65535,U=0;U<=$;U++)R=J,J=I[2*(U+1)+1],++K<st&&R===J||(K<ft?w.bl_tree[2*R]+=K:R!==0?(R!==G&&w.bl_tree[2*R]++,w.bl_tree[2*S]++):K<=10?w.bl_tree[2*x]++:w.bl_tree[2*D]++,G=R,ft=(K=0)===J?(st=138,3):R===J?(st=6,3):(st=7,4))}function N(w,I,$){var U,R,G=-1,J=I[1],K=0,st=7,ft=4;for(J===0&&(st=138,ft=3),U=0;U<=$;U++)if(R=J,J=I[2*(U+1)+1],!(++K<st&&R===J)){if(K<ft)for(;q(w,R,w.bl_tree),--K!=0;);else R!==0?(R!==G&&(q(w,R,w.bl_tree),K--),q(w,S,w.bl_tree),Z(w,K-3,2)):K<=10?(q(w,x,w.bl_tree),Z(w,K-3,3)):(q(w,D,w.bl_tree),Z(w,K-11,7));G=R,ft=(K=0)===J?(st=138,3):R===J?(st=6,3):(st=7,4)}}u(z);var P=!1;function B(w,I,$,U){Z(w,(f<<1)+(U?1:0),3),function(R,G,J,K){lt(R),Y(R,J),Y(R,~J),n.arraySet(R.pending_buf,R.window,G,J,R.pending),R.pending+=J}(w,I,$)}o._tr_init=function(w){P||(function(){var I,$,U,R,G,J=new Array(b+1);for(R=U=0;R<m-1;R++)for(L[R]=U,I=0;I<1<<O[R];I++)l[U++]=R;for(l[U-1]=R,R=G=0;R<16;R++)for(z[R]=G,I=0;I<1<<j[R];I++)F[G++]=R;for(G>>=7;R<d;R++)for(z[R]=G<<7,I=0;I<1<<j[R]-7;I++)F[256+G++]=R;for($=0;$<=b;$++)J[$]=0;for(I=0;I<=143;)Q[2*I+1]=8,I++,J[8]++;for(;I<=255;)Q[2*I+1]=9,I++,J[9]++;for(;I<=279;)Q[2*I+1]=7,I++,J[7]++;for(;I<=287;)Q[2*I+1]=8,I++,J[8]++;for(It(Q,v+1,J),I=0;I<d;I++)A[2*I+1]=5,A[2*I]=mt(I,5);rt=new X(Q,O,h+1,v,b),W=new X(A,j,0,d,b),it=new X(new Array(0),E,0,y,_)}(),P=!0),w.l_desc=new M(w.dyn_ltree,rt),w.d_desc=new M(w.dyn_dtree,W),w.bl_desc=new M(w.bl_tree,it),w.bi_buf=0,w.bi_valid=0,ut(w)},o._tr_stored_block=B,o._tr_flush_block=function(w,I,$,U){var R,G,J=0;0<w.level?(w.strm.data_type===2&&(w.strm.data_type=function(K){var st,ft=4093624447;for(st=0;st<=31;st++,ft>>>=1)if(1&ft&&K.dyn_ltree[2*st]!==0)return i;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return a;for(st=32;st<h;st++)if(K.dyn_ltree[2*st]!==0)return a;return i}(w)),Kt(w,w.l_desc),Kt(w,w.d_desc),J=function(K){var st;for(c(K,K.dyn_ltree,K.l_desc.max_code),c(K,K.dyn_dtree,K.d_desc.max_code),Kt(K,K.bl_desc),st=y-1;3<=st&&K.bl_tree[2*V[st]+1]===0;st--);return K.opt_len+=3*(st+1)+5+5+4,st}(w),R=w.opt_len+3+7>>>3,(G=w.static_len+3+7>>>3)<=R&&(R=G)):R=G=$+5,$+4<=R&&I!==-1?B(w,I,$,U):w.strategy===4||G===R?(Z(w,2+(U?1:0),3),Xt(w,Q,A)):(Z(w,4+(U?1:0),3),function(K,st,ft,ct){var Wt;for(Z(K,st-257,5),Z(K,ft-1,5),Z(K,ct-4,4),Wt=0;Wt<ct;Wt++)Z(K,K.bl_tree[2*V[Wt]+1],3);N(K,K.dyn_ltree,st-1),N(K,K.dyn_dtree,ft-1)}(w,w.l_desc.max_code+1,w.d_desc.max_code+1,J+1),Xt(w,w.dyn_ltree,w.dyn_dtree)),ut(w),U&&lt(w)},o._tr_tally=function(w,I,$){return w.pending_buf[w.d_buf+2*w.last_lit]=I>>>8&255,w.pending_buf[w.d_buf+2*w.last_lit+1]=255&I,w.pending_buf[w.l_buf+w.last_lit]=255&$,w.last_lit++,I===0?w.dyn_ltree[2*$]++:(w.matches++,I--,w.dyn_ltree[2*(l[$]+h+1)]++,w.dyn_dtree[2*T(I)]++),w.last_lit===w.lit_bufsize-1},o._tr_align=function(w){Z(w,2,3),q(w,k,Q),function(I){I.bi_valid===16?(Y(I,I.bi_buf),I.bi_buf=0,I.bi_valid=0):8<=I.bi_valid&&(I.pending_buf[I.pending++]=255&I.bi_buf,I.bi_buf>>=8,I.bi_valid-=8)}(w)}},{"../utils/common":41}],53:[function(e,r,o){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,r,o){(function(n){(function(i,a){if(!i.setImmediate){var u,f,m,h,v=1,d={},y=!1,p=i.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(i);b=b&&b.setTimeout?b:i,u={}.toString.call(i.process)==="[object process]"?function(S){process.nextTick(function(){_(S)})}:function(){if(i.postMessage&&!i.importScripts){var S=!0,x=i.onmessage;return i.onmessage=function(){S=!1},i.postMessage("","*"),i.onmessage=x,S}}()?(h="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",k,!1):i.attachEvent("onmessage",k),function(S){i.postMessage(h+S,"*")}):i.MessageChannel?((m=new MessageChannel).port1.onmessage=function(S){_(S.data)},function(S){m.port2.postMessage(S)}):p&&"onreadystatechange"in p.createElement("script")?(f=p.documentElement,function(S){var x=p.createElement("script");x.onreadystatechange=function(){_(S),x.onreadystatechange=null,f.removeChild(x),x=null},f.appendChild(x)}):function(S){setTimeout(_,0,S)},b.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var x=new Array(arguments.length-1),D=0;D<x.length;D++)x[D]=arguments[D+1];var O={callback:S,args:x};return d[v]=O,u(v),v++},b.clearImmediate=g}function g(S){delete d[S]}function _(S){if(y)setTimeout(_,0,S);else{var x=d[S];if(x){y=!0;try{(function(D){var O=D.callback,j=D.args;switch(j.length){case 0:O();break;case 1:O(j[0]);break;case 2:O(j[0],j[1]);break;case 3:O(j[0],j[1],j[2]);break;default:O.apply(a,j)}})(x)}finally{g(S),y=!1}}}}function k(S){S.source===i&&typeof S.data=="string"&&S.data.indexOf(h)===0&&_(+S.data.slice(h.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof qe<"u"?qe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(pr);var tl=pr.exports;const el=Qc(tl);class sl{constructor(t){C(this,"zip");this.zip=t}normalize(t){return t.replace(/^\.?\//,"")}async readFile(t){const e=this.zip.file(this.normalize(t));if(!e)throw new Error(`File not found in zip: ${t}`);return await e.async("string")}async readdir(t){const e=this.normalize(t),r=e?e+"/":"";return Object.keys(this.zip.files).filter(o=>o.startsWith(r)).map(o=>o.substring(r.length).split("/")[0]).filter((o,n,i)=>i.indexOf(o)===n)}async stat(t){const e=this.normalize(t),r=this.zip.file(e),o=Object.keys(this.zip.files).some(n=>n.startsWith(e+"/"));if(!r&&!o)throw new Error(`Path not found: ${t}`);return{name:e.split("/").pop()||"",isFile:()=>!!r,isDirectory:()=>o}}async writeFile(t,e){throw new Error("Read Only")}async mkdir(t){throw new Error("Read Only")}async rm(t){throw new Error("Read Only")}async copyFile(t,e){throw new Error("Read Only")}async scandir(t){throw new Error("Not implemented")}}function rl(s){const e=s.toLowerCase().match(/(?:^|[-_.])0?([1-9]|1[0-9])(?:[-_.]|$)/);if(!e)return null;const r=Number(e[1]);return String(r).padStart(2,"0")}function ol(s,t){const e=s.toLowerCase(),r=t.toLowerCase(),o=e.length,n=r.length,i=Array.from({length:o+1},()=>Array(n+1).fill(0));for(let a=0;a<=o;a++)i[a][0]=a;for(let a=0;a<=n;a++)i[0][a]=a;for(let a=1;a<=o;a++)for(let u=1;u<=n;u++){const f=e[a-1]===r[u-1]?0:1;i[a][u]=Math.min(i[a-1][u]+1,i[a][u-1]+1,i[a-1][u-1]+f)}return i[o][n]}function nl(s,t){if(t.length===0)return;const e=s.toLowerCase().replace(/hack$/i,"");let r;for(const o of t){const n=o.replace(/\.tst$|\.cmp$|\.asm$|\.hdl$|\.vm$/i,""),i=n.toLowerCase(),a=ol(e,i);(!r||a<r.dist)&&(r={name:n,dist:a})}if(r&&r.dist<=2)return r.name}async function il(s,t){t("Loading zip...");const e=await el.loadAsync(s),r=new wr(new sl(e)),n=Object.keys(e.files).filter(k=>!k.endsWith("/")).map(k=>{const S=k.split("/"),x=S[S.length-1],D="."+x.split(".").pop();return{name:x.replace(D,""),base:x,ext:D,full:k}}).filter(k=>[".asm",".hack"].includes(k.ext)?!0:Me[`${k.name}.tst`]!==void 0).filter(k=>[".hdl",".asm",".vm",".hack"].includes(k.ext));new Set(n.filter(k=>k.ext===".asm").map(k=>k.name));const i=new Map;for(const k of n)i.has(k.name)?i.get(k.name).ext===".hack"&&k.ext===".asm"&&i.set(k.name,k):i.set(k.name,k);const a=Array.from(i.values());if(n.length===0)return{exitCode:0,stdout:"No recognizable Nand2Tetris project files found in zip.",resultsByFile:{}};t(`Found ${n.length} project files. Fetching solutions...`);const u=rl(s.name)||null;console.log(`[DEBUG] Inferred project directory: ${u||"none"}`);let f=[];try{const k=await fetch("/solutions.json");k.ok&&(f=await k.json())}catch(k){console.warn("Failed to load solutions manifest",k)}u&&(f=f.filter(k=>k.split("/")[0]===u));const m=new Map;for(const k of f){const S=k.split("/"),x=S[S.length-1],D="."+x.split(".").pop().toLowerCase(),j=x.replace(/\.[^.]+$/,"").toLowerCase(),E=k.substring(0,k.lastIndexOf("/"));m.has(j)||m.set(j,{files:{},relDir:E});const V=m.get(j);V.files[D]=k}const h=async k=>{e.file(k.base)||e.file(k.full);let S=e.file(k.full);if(!S){const V=Object.keys(e.files).find(Q=>Q.endsWith("/"+k.base)||Q===k.base);V&&(S=e.file(V))}const x=S?await S.async("string"):"",D=Me[`${k.name}.tst`],O=Me[`${k.name}.cmp`],j=k.full.substring(0,k.full.lastIndexOf("/"))||".",E=j.split("/")[0]||".";return{...k,hdl:x,tst:D,cmp:O,root:E,dir:j}},v=a.filter(k=>[".asm",".hack"].includes(k.ext)),d=a.filter(k=>k.ext===".hdl"),y=async(k,S,x)=>{let D=null;try{const O=new Promise((j,E)=>{D=setTimeout(()=>{try{const V=x();j(V)}catch(V){E(V)}},S)});return await Promise.race([k,O])}finally{D&&clearTimeout(D)}},p=[];t("Running ASM/HACK tests...");for(const k of v)try{let S=Me[`${k.name}.tst`],x=Me[`${k.name}.cmp`],D=S?"Assignments":void 0,O=x?"Assignments":void 0;if(!S||!x)try{const z=bn;if(z){const X=z[k.name];if(X&&X[`${k.name}.tst`]&&X[`${k.name}.cmp`])S=X[`${k.name}.tst`],x=X[`${k.name}.cmp`],D=`project_04:${k.name}`,O=`project_04:${k.name}`;else{const M=Object.keys(z||{}).flatMap(Y=>Object.keys(z[Y]||{})),T=nl(k.name,M);if(T)for(const Y of Object.keys(z||{})){const Z=z[Y],q=`${T}.tst`,mt=`${T}.cmp`;if(Z&&Z[q]&&Z[mt]){S=Z[q],x=Z[mt],D=`project_04:${Y}/${T}`,O=`project_04:${Y}/${T}`;break}}}}}catch{}if(!S||!x){const z=m.get(k.name.toLowerCase());if(z){if(!S&&z.files[".tst"]){const X=await fetch("/solutions/"+z.files[".tst"]);X.ok&&(S=await X.text())}if(!x&&z.files[".cmp"]){const X=await fetch("/solutions/"+z.files[".cmp"]);X.ok&&(x=await X.text())}}}if((!S||!x)&&k.name==="Fill")try{const z=await fetch("/solutions/04/fill/FillAutomatic.tst"),X=await fetch("/solutions/04/fill/FillAutomatic.cmp");z.ok&&X.ok&&(S=await z.text(),x=await X.text(),D="FillAutomatic",O="FillAutomatic")}catch{}if(!S||!x){p.push({name:k.name,pass:!1,out:`No test/cmp mapping found for ${k.name}`});continue}const j=or.parse(S);if(j.ok===void 0&&j.error){p.push({name:k.name,pass:!1,out:"TST parse failed"});continue}let E=[],V=e.file(k.full);if(!V){const z=Object.keys(e.files).find(X=>X.endsWith("/"+k.base)||X===k.base);z&&(V=e.file(z))}const Q=V?await V.async("string"):"";k.ext===".asm"?E=await Ws(Q):E=await Hs(Q);const A=new r0(Int16Array.from(E)),F=async()=>A,l=g1.from(j.ok?j.ok:j,{dir:".",doLoad:F,requireLoad:!1}),L=l.ok?l.ok:l,rt=3e4;await y((async()=>(await L.run(),!0))(),rt,()=>{throw new Error(`Test run timed out after ${rt}ms`)});const W=L.log(),it=W.trim()===x.trim();p.push({name:k.name,pass:it,out:W,cmp:x})}catch(S){p.push({name:k.name,pass:!1,out:`Error: ${S.message}`})}t("Running HDL tests...");const b=6e4,g=d.length>0?await y(Yc(d,h,r),b,()=>(console.error(`[ERROR] HDL tests timed out after ${b}ms`),[])):[],_={};for(const k of g)_[k.name]={status:k.pass?"pass":"fail",isPass:k.pass,message:k.out,expected:k.cmp,actual:k.out};for(const k of p)_[k.name]={status:k.pass?"pass":"fail",isPass:k.pass,message:k.pass?"Passed":"Failed",expected:k.cmp,actual:k.out};return{exitCode:0,stdout:JSON.stringify({resultsByFile:_}),resultJson:{resultsByFile:_},dedupedResults:[...g,...p]}}const je=s=>document.querySelector(s),rs=je("#file-upload"),al=je("#do-grade"),Ce=je("#status"),ul=je("#results-table"),we=je("#results-table tbody");function le(s=""){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function cl(s){const t=document.createElement("tr"),e=s.pass?"pass":s.out&&typeof s.out=="string"&&s.out.includes("not found")?"not-found":"fail",r=s.out||(s.diff?s.diff:""),o=s.cmp||"",n=s.out||"";t.innerHTML=`<td>${s.name}</td>
                  <td class="${e}">${s.pass?"PASS":"FAIL"}</td>
                  <td><div class="code">${le(o)}</div></td>
                  <td><div class="code">${le(n)}</div></td>
                  <td><div class="code">${le(r)}</div></td>`,we.appendChild(t)}al.addEventListener("click",async()=>{const s=rs.files&&rs.files[0];if(!s)return alert("Choose a zip file first");Ce.textContent="Starting grader...",we.innerHTML="",ul.classList.remove("hidden");try{const t=await il(s,r=>Ce.textContent=r);Ce.textContent="Done.";let e=t.resultJson;if(e&&e.resultsByFile){const r=e.resultsByFile,o=Object.entries(r);let n=0,i=0,a=0;if(o.forEach(([u,f])=>{f&&f.status==="not_found"?a++:f&&f.isPass?n++:i++}),Ce.textContent=`Done. Summary: ${n} passed, ${i} failed, ${a} missing.`,o.length===0){const u=document.createElement("tr");u.innerHTML='<td colspan="5">No results in grader JSON</td>',we.appendChild(u)}else{const u=document.createElement("tr");u.innerHTML=`<td><b>Summary</b></td><td colspan="4"><b>${n} passed</b>, <b>${i} failed</b>, <b>${a} missing</b></td>`,we.appendChild(u),o.forEach(([f,m])=>{const h=document.createElement("tr"),v=m.isPass?"pass":m.status==="not_found"?"not-found":"fail",d=m.message||"",y=m.expected||"",p=m.actual||"";h.innerHTML=`<td>${le(f)}</td>
                          <td class="${v}">${m.isPass?"PASS":"FAIL"}</td>
                          <td>${y?`<div class="code">${le(y)}</div>`:""}</td>
                          <td>${p?`<div class="code">${le(p)}</div>`:""}</td>
                          <td>${d?`<div class="code">${le(d)}</div>`:""}</td>`,we.appendChild(h)})}}else{const r=t.dedupedResults||t.results||[];if(!r||r.length===0){const o=document.createElement("tr");o.innerHTML=`<td colspan="5"><pre class="code">${le(t.stdout||t.stderr||JSON.stringify(t))}</pre></td>`,we.appendChild(o)}else r.forEach(o=>cl(o))}}catch(t){Ce.textContent="Error: "+(t.message||t),console.error(t)}});
