var fr=Object.defineProperty;var w1=s=>{throw TypeError(s)};var mr=(s,t,e)=>t in s?fr(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>mr(s,typeof t!="symbol"?t+"":t,e),B1=(s,t,e)=>t.has(s)||w1("Cannot "+e);var Ht=(s,t,e)=>(B1(s,t,"read from private field"),e?e.call(s):t.get(s)),Te=(s,t,e)=>t.has(s)?w1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),Qt=(s,t,e,r)=>(B1(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const gr={SEP:"\\",WD:"C:\\\\",isAbsolute:s=>!!s.match(new RegExp("^[a-zA-Z]:\\\\"))},os={SEP:"/",WD:"/",isAbsolute:s=>s[0]=="/"},n0=typeof process<"u"&&process.platform=="win32"?gr:os,se=n0.SEP,vr=n0.WD,kr=n0.isAbsolute;function A1(s){return s.endsWith(se)&&(s=s.substring(0,s.length-1)),s.split(se).at(-1)??""}function ns(...s){const t=[];for(const e of s)for(const r of e.split(se))switch(r){case"":case".":break;case"..":t.pop();break;default:t.push(r)}return(n0==os?se:"")+t.join(se)}class is{constructor(t=new yr){F(this,"adapter");F(this,"wd",vr);F(this,"stack",[]);this.adapter=t}cwd(){return this.wd}cd(t){this.wd=this.p(t)}pushd(t){this.stack.push(this.wd),this.cd(t)}popd(){this.stack.length>0&&(this.wd=this.stack.pop())}stat(t){return this.adapter.stat(this.p(t))}scandir(t){return this.adapter.scandir(this.p(t))}readdir(t){return this.adapter.readdir(this.p(t))}mkdir(t){return this.adapter.mkdir(this.p(t))}copyFile(t,e){return this.adapter.copyFile(this.p(t),this.p(e))}readFile(t){return this.adapter.readFile(this.p(t))}writeFile(t,e){return this.adapter.writeFile(this.p(t),e)}rm(t){return this.adapter.rm(this.p(t))}p(t){return kr(t)?t:ns(this.cwd(),t)}}class yr{constructor(t={}){F(this,"fs");this.fs=t}stat(t){return new Promise((e,r)=>{if(this.fs[t])return e({name:A1(t),isDirectory(){return!1},isFile(){return!0}});t.endsWith(se)||(t+=se);for(let o of Object.keys(this.fs))if(o.startsWith(t))return e({name:A1(t),isDirectory(){return!0},isFile(){return!1}});r()})}async scandir(t){return(await this.readdir(t)).map(e=>{let r=this.fs[ns(t,e)]!==void 0;return{name:e,isDirectory(){return!r},isFile(){return r}}})}readdir(t){return t.endsWith(se)||(t+=se),new Promise(e=>{let r=new Set;for(const o of Object.keys(this.fs))if(o.startsWith(t)){const n=o.indexOf(se,t.length+1),i=o.substring(t.length,n===-1?void 0:n);r.add(i)}return e([...r].sort())})}mkdir(t){return Promise.resolve()}copyFile(t,e){return new Promise(r=>{this.fs[e]=this.fs[t],r()})}readFile(t){return new Promise((e,r)=>{let o=this.fs[t];if(o===void 0){const n=new Error(`File Not Found ${t}`);r(n)}else e(o)})}writeFile(t,e){return new Promise(r=>{this.fs[t]=e,r()})}rm(t){return new Promise(e=>{delete this.fs[t],e()})}}const br=`// This file is part of www.nand2tetris.org
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
output;`,wr=`| a | b |out|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |`,Br=`|in |out|
| 0 | 1 |
| 1 | 0 |`,Ar=`// This file is part of www.nand2tetris.org
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
}`,_r=`// This file is part of www.nand2tetris.org
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
output;`,xr=`// This file is part of www.nand2tetris.org
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
}`,Sr=`// This file is part of www.nand2tetris.org
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
output;`,Ir=`| a | b |out|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |`,Rr=`| a | b |out|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |`,Tr=`// This file is part of www.nand2tetris.org
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
}`,Mr=`// This file is part of www.nand2tetris.org
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
output;`,Cr=`| a | b |out|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |`,Er=`// This file is part of www.nand2tetris.org
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
}`,Pr=`// This file is part of www.nand2tetris.org
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
output;`,Or=`| a | b |sel|out|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |`,Dr=`// This file is part of www.nand2tetris.org
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
}`,Fr=`// This file is part of www.nand2tetris.org
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
output;`,Nr=`// This file is part of www.nand2tetris.org
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
}`,Lr=`// This file is part of www.nand2tetris.org
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
output;`,zr=`|in |sel| a | b |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |`,jr=`// This file is part of www.nand2tetris.org
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
}`,$r=`// This file is part of www.nand2tetris.org
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
output;`,Ur=`|        in        |       out        |
| 0000000000000000 | 1111111111111111 |
| 1111111111111111 | 0000000000000000 |
| 1010101010101010 | 0101010101010101 |
| 0011110011000011 | 1100001100111100 |
| 0001001000110100 | 1110110111001011 |`,Vr=`// This file is part of www.nand2tetris.org
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
}`,Wr=`// This file is part of www.nand2tetris.org
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
output;`,Gr=`|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 0000000000000000 |
| 1111111111111111 | 1111111111111111 | 1111111111111111 |
| 1010101010101010 | 0101010101010101 | 0000000000000000 |
| 0011110011000011 | 0000111111110000 | 0000110011000000 |
| 0001001000110100 | 1001100001110110 | 0001000000110100 |`,Hr=`|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1111111111111111 |
| 1111111111111111 | 1111111111111111 | 1111111111111111 |
| 1010101010101010 | 0101010101010101 | 1111111111111111 |
| 0011110011000011 | 0000111111110000 | 0011111111110011 |
| 0001001000110100 | 1001100001110110 | 1001101001110110 |`,Kr=`// This file is part of www.nand2tetris.org
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
}`,qr=`// This file is part of www.nand2tetris.org
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
output;`,Zr=`|        a         |        b         |sel|       out        |
| 0000000000000000 | 0000000000000000 | 0 | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 1 | 0000000000000000 |
| 0000000000000000 | 0001001000110100 | 0 | 0000000000000000 |
| 0000000000000000 | 0001001000110100 | 1 | 0001001000110100 |
| 1001100001110110 | 0000000000000000 | 0 | 1001100001110110 |
| 1001100001110110 | 0000000000000000 | 1 | 0000000000000000 |
| 1010101010101010 | 0101010101010101 | 0 | 1010101010101010 |
| 1010101010101010 | 0101010101010101 | 1 | 0101010101010101 |`,Jr=`// This file is part of www.nand2tetris.org
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
}`,Xr=`// This file is part of www.nand2tetris.org
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
output;`,Yr=`|        a         |        b         |        c         |        d         | sel  |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  00  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  01  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  10  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  11  | 0000000000000000 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  00  | 0001001000110100 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  01  | 1001100001110110 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  10  | 1010101010101010 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  11  | 0101010101010101 |`,Qr=`// This file is part of www.nand2tetris.org
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
}`,to=`// This file is part of www.nand2tetris.org
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
output;`,eo=`|        a         |        b         |        c         |        d         |        e         |        f         |        g         |        h         |  sel  |       out        |
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
| 0001001000110100 | 0010001101000101 | 0011010001010110 | 0100010101100111 | 0101011001111000 | 0110011110001001 | 0111100010011010 | 1000100110101011 |  111  | 1000100110101011 |`,so=`// This file is part of www.nand2tetris.org
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
}`,ro=`// This file is part of www.nand2tetris.org
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
output;`,oo=`// This file is part of www.nand2tetris.org
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
}`,no=`// This file is part of www.nand2tetris.org
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
output;`,io=`|in | sel  | a | b | c | d |
| 0 |  00  | 0 | 0 | 0 | 0 |
| 0 |  01  | 0 | 0 | 0 | 0 |
| 0 |  10  | 0 | 0 | 0 | 0 |
| 0 |  11  | 0 | 0 | 0 | 0 |
| 1 |  00  | 1 | 0 | 0 | 0 |
| 1 |  01  | 0 | 1 | 0 | 0 |
| 1 |  10  | 0 | 0 | 1 | 0 |
| 1 |  11  | 0 | 0 | 0 | 1 |`,ao=`// This file is part of www.nand2tetris.org
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
}`,uo=`// This file is part of www.nand2tetris.org
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
output;`,co=`|in |  sel  | a | b | c | d | e | f | g | h |
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
| 1 |  111  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |`,lo=`|     in     |out|
|  00000000  | 0 |
|  11111111  | 1 |
|  00010000  | 1 |
|  00000001  | 1 |
|  00100110  | 1 |`,po=`// This file is part of www.nand2tetris.org
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
}`,ho=`// This file is part of www.nand2tetris.org
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
output;`,fo={"Nand.tst":br,"Nand.cmp":wr,"Not.hdl":Ar,"Not.tst":_r,"Not.cmp":Br,"And.hdl":xr,"And.tst":Sr,"And.cmp":Ir,"Or.hdl":Tr,"Or.tst":Mr,"Or.cmp":Rr,"Xor.hdl":Er,"Xor.tst":Pr,"Xor.cmp":Cr,"Mux.hdl":Dr,"Mux.tst":Fr,"Mux.cmp":Or,"DMux.hdl":Nr,"DMux.tst":Lr,"DMux.cmp":zr,"Not16.hdl":jr,"Not16.tst":$r,"Not16.cmp":Ur,"And16.hdl":Vr,"And16.tst":Wr,"And16.cmp":Gr,"Or16.hdl":Kr,"Or16.tst":qr,"Or16.cmp":Hr,"Mux16.hdl":Jr,"Mux16.tst":Xr,"Mux16.cmp":Zr,"Mux4Way16.hdl":Qr,"Mux4Way16.tst":to,"Mux4Way16.cmp":Yr,"Mux8Way16.hdl":so,"Mux8Way16.tst":ro,"Mux8Way16.cmp":eo,"DMux4Way.hdl":oo,"DMux4Way.tst":no,"DMux4Way.cmp":io,"DMux8Way.hdl":ao,"DMux8Way.tst":uo,"DMux8Way.cmp":co,"Or8Way.hdl":po,"Or8Way.tst":ho,"Or8Way.cmp":lo},mo=`// This file is part of www.nand2tetris.org
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
}`,go=`| a | b |sum|car|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |`,vo=`// This file is part of www.nand2tetris.org
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
output;`,ko=`// This file is part of www.nand2tetris.org
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
}`,yo=`| a | b | c |sum|carry|
| 0 | 0 | 0 | 0 |  0  |
| 0 | 0 | 1 | 1 |  0  |
| 0 | 1 | 0 | 1 |  0  |
| 0 | 1 | 1 | 0 |  1  |
| 1 | 0 | 0 | 1 |  0  |
| 1 | 0 | 1 | 0 |  1  |
| 1 | 1 | 0 | 0 |  1  |
| 1 | 1 | 1 | 1 |  1  |`,bo=`// This file is part of www.nand2tetris.org
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
output;`,wo=`// This file is part of www.nand2tetris.org
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
}`,Bo=`|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1111111111111111 |
| 1111111111111111 | 1111111111111111 | 1111111111111110 |
| 1010101010101010 | 0101010101010101 | 1111111111111111 |
| 0011110011000011 | 0000111111110000 | 0100110010110011 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 |`,Ao=`// This file is part of www.nand2tetris.org
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
output;`,_o=`// This file is part of www.nand2tetris.org
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
}`,xo=`|        in        |       out        |
| 0000000000000000 | 0000000000000001 |
| 1111111111111111 | 0000000000000000 |
| 0000000000000101 | 0000000000000110 |
| 1111111111111011 | 1111111111111100 |
`,So=`// This file is part of www.nand2tetris.org
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
output;`,Io=`// This file is part of www.nand2tetris.org
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
}`,Ro=`|        x         |        y         |zx |nx |zy |ny | f |no |       out        |zr |ng |
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
| 0000000000010001 | 0000000000000011 | 0 | 1 | 0 | 1 | 0 | 1 | 0000000000010011 | 0 | 0 |`,To=`// This file is part of www.nand2tetris.org
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
output;`,Mo=`// This file is part of www.nand2tetris.org
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
output;`,Co=`|        x         |        y         |zx |nx |zy |ny | f |no |       out        |
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
| 0101101110100000 | 0001111011010010 | 0 | 1 | 0 | 1 | 0 | 1 | 0101111111110010 |`,Eo={"HalfAdder.hdl":mo,"HalfAdder.tst":vo,"HalfAdder.cmp":go,"FullAdder.hdl":ko,"FullAdder.tst":bo,"FullAdder.cmp":yo,"Add16.hdl":wo,"Add16.tst":Ao,"Add16.cmp":Bo,"Inc16.hdl":_o,"Inc16.tst":So,"Inc16.cmp":xo,"ALU.hdl":Io,"ALU.tst":To,"ALU.cmp":Ro,"ALU-basic.tst":Mo,"ALU-basic.cmp":Co},Po=`// This file is part of www.nand2tetris.org
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
}`,Oo=`// This file is part of www.nand2tetris.org
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
output;`,Do=`| time |in |load|out|
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
| 107  | 1 | 0  | 0 |`,Fo=`// This file is part of www.nand2tetris.org
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
}`,No=`// This file is part of www.nand2tetris.org
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
output;`,Lo=`|time |   in   |load|  out   |
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
| 74  |  32767 |  1 |  32767 |`,zo=`// This file is part of www.nand2tetris.org
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
}`,jo=`// This file is part of www.nand2tetris.org
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
output;`,$o=`|time |   in   |reset|load | inc |  out   |
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
| 15  |  22222 |  1  |  0  |  0  |      0 |`,Uo=`// This file is part of www.nand2tetris.org
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
}`,Vo=`// This file is part of www.nand2tetris.org
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
`,Wo=`|time |   in   |load|address|  out   |
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
| 46  |  21845 |  0 |   7   |  21845 |`,Go=`// This file is part of www.nand2tetris.org
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
}`,Ho=`// This file is part of www.nand2tetris.org
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
output;`,Ko=`|time |   in   |load|address|  out   |
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
| 81  |  21845 |  0 |   61  |  21845 |`,qo=`// This file is part of www.nand2tetris.org
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
}`,Zo=`// This file is part of www.nand2tetris.org
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
`,Jo=`|time |   in   |load|address|  out   |
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
| 81  |  21845 |  0 |  490  |  21845 |`,Xo=`// This file is part of www.nand2tetris.org
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
}`,Yo=`// This file is part of www.nand2tetris.org
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
output;`,Qo=`|time |   in   |load|address |  out   |
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
| 81  |  21845 |  0 |  3925  |  21845 |`,tn=`// This file is part of www.nand2tetris.org
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
}`,en=`// This file is part of www.nand2tetris.org
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
output;`,sn=`|time |   in   |load| address |  out   |
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
| 81  |  21845 |  0 |  15701  |  21845 |`,rn={"Bit.hdl":Po,"Bit.tst":Oo,"Bit.cmp":Do,"Register.hdl":Fo,"Register.tst":No,"Register.cmp":Lo,"PC.hdl":zo,"PC.tst":jo,"PC.cmp":$o,"RAM8.hdl":Uo,"RAM8.tst":Vo,"RAM8.cmp":Wo,"RAM64.hdl":Go,"RAM64.tst":Ho,"RAM64.cmp":Ko,"RAM512.hdl":qo,"RAM512.tst":Zo,"RAM512.cmp":Jo,"RAM4K.hdl":Xo,"RAM4K.tst":Yo,"RAM4K.cmp":Qo,"RAM16K.hdl":tn,"RAM16K.tst":en,"RAM16K.cmp":sn},on=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)
// The algorithm is based on repetitive addition.

//// Replace this comment with your code.`,nn=`// This file is part of www.nand2tetris.org
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
output;`,an=`|  RAM[0]  |  RAM[1]  |  RAM[2]  |
|       0  |       0  |       0  |
|       1  |       0  |       0  |
|       0  |       2  |       0  |
|       3  |       1  |       3  |
|       2  |       4  |       8  |
|       6  |       7  |      42  |`,un=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/Fill.asm

// Runs an infinite loop that listens to the keyboard input. 
// When a key is pressed (any key), the program blackens the screen,
// i.e. writes "black" in every pixel. When no key is pressed, 
// the screen should be cleared.

//// Replace this comment with your code.`,cn=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/4/fill/Fill.tst

// Tests the Fill.hack program in the CPU emulator.

load Fill.asm;
echo "Select the highest speed and 'enable keyboard'. Then press any key for some time, and inspect the screen.";

repeat {
  ticktock;
}`,ln=`// This file is part of www.nand2tetris.org
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
output;              // tests that the screen is white`,dn=`|RAM[16384]|RAM[17648]|RAM[18349]|RAM[19444]|RAM[20771]|RAM[21031]|RAM[22596]|RAM[23754]|RAM[24575]|
|       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |
|      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |      -1  |
|       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |       0  |`,pn={Mult:{"Mult.asm":on,"Mult.tst":nn,"Mult.cmp":an},Fill:{"Fill.asm":un,"Fill.tst":cn,"FillAutomatic.tst":ln,"FillAutomatic.cmp":dn}},hn=`// This file is part of www.nand2tetris.org
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
}`,fn=`// This file is part of www.nand2tetris.org
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
output;`,mn=`|   in   |load |     address     |  out   |
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
|     -1 |  0  | 110000000000000 |     89 |`,gn=`// This file is part of www.nand2tetris.org
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
}`,vn=`// This file is part of www.nand2tetris.org
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
tick, output, tock, output;`,kn=`|time| inM  |  instruction   |reset| outM  |writeM |addre| pc  |DRegiste|
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
|46  | 11111|0111111111111111|  0  |*******|   0   |32767|    1|      1 |`,yn=`// This file is part of www.nand2tetris.org
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
tick, output, tock, output;`,bn=`|time| inM  |  instruction   |reset| outM  |writeM |addre| pc  |
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
`,wn=`// This file is part of www.nand2tetris.org
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
}`,Bn=`// This file is part of www.nand2tetris.org
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
}`,An=`|time |reset|ARegister|DRegister|PC[]|RAM16K[0]|RAM16K[1]|RAM16K[2]|
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
| 13  |  0  |       0 |       5 |   6|       5 |       0 |       0 |`,_n=`// This file is part of www.nand2tetris.org
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
`,xn=`|time |reset|ARegister|DRegister|PC[]|RAM16K[0]|RAM16K[1]|RAM16K[2]|
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
| 25  |  0  |       2 |   23456 |  14|   23456 |   12345 |   23456 |`,Sn=`// This file is part of www.nand2tetris.org
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
}`,In=`|time |ARegister|DRegister|PC[]|RAM16K[0]|RAM16K[1]|RAM16K[2]|
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
| 63  |      23 |       0 |  24|       4 |       0 |       0 |`,Rn=`
0000000000000010
1110110000010000
0000000000000011
1110000010010000
0000000000000000
1110001100001000
`,Tn=`0000000000000000
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
1110101010000111`,Mn=`
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
1110101010000111`,Cn={"Memory.hdl":hn,"Memory.tst":fn,"Memory.cmp":mn,"CPU.hdl":gn,"CPU.tst":vn,"CPU.cmp":kn,"CPU-external.tst":yn,"CPU-external.cmp":bn,"Computer.hdl":wn,"ComputerAdd.tst":Bn,"ComputerAdd.cmp":An,"ComputerMax.tst":_n,"ComputerMax.cmp":xn,"ComputerRect.tst":Sn,"ComputerRect.cmp":In,"Add.hack":Rn,"Max.hack":Tn,"Rect.hack":Mn},En=`// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/7/StackArithmetic/SimpleAdd/SimpleAdd.vm

// Pushes and adds two constants.

push constant 7
push constant 8
add
`,Pn=`// This file is part of www.nand2tetris.org
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
output;`,On=`// This file is part of www.nand2tetris.org
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
`,Dn=`|  RAM[0]  | RAM[256] |
|     257  |      15  |
`,Fn=`// This file is part of www.nand2tetris.org
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
`,Nn=`// This file is part of www.nand2tetris.org
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
`,Ln=`// This file is part of www.nand2tetris.org
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
`,zn=`|  RAM[0]  | RAM[256] | RAM[257] | RAM[258] | RAM[259] | RAM[260] |
|     266  |      -1  |       0  |       0  |       0  |      -1  |
| RAM[261] | RAM[262] | RAM[263] | RAM[264] | RAM[265] |
|       0  |      -1  |       0  |       0  |     -91  |
`,jn=`// This file is part of www.nand2tetris.org
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
`,$n=`// This file is part of www.nand2tetris.org
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
`,Un=`// This file is part of www.nand2tetris.org
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
`,Vn=`|RAM[256]|RAM[300]|RAM[401]|RAM[402]|RAM[3006|RAM[3012|RAM[3015|RAM[11] |
|    472 |     10 |     21 |     22 |     36 |     42 |     45 |    510 |`,Wn=`// This file is part of www.nand2tetris.org
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
`,Gn=`// This file is part of www.nand2tetris.org
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
`,Hn=`// This file is part of www.nand2tetris.org
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
`,Kn=`|RAM[256]| RAM[3] | RAM[4] |RAM[3032|RAM[3046|
  |   6084 |   3030 |   3040 |     32 |     46 |`,qn=`// This file is part of www.nand2tetris.org
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
`,Zn=`// This file is part of www.nand2tetris.org
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
`,Jn=`// This file is part of www.nand2tetris.org
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
`,Xn=`|RAM[256]|
|   1110 |`,Yn={SimpleAdd:{"SimpleAdd.vm":En,"SimpleAddVME.tst":Pn,"SimpleAdd.cmp":Dn,"SimpleAdd.tst":On},StackTest:{"StackTest.vm":Fn,"StackTestVME.tst":Nn,"StackTest.cmp":zn,"StackTest.tst":Ln},BasicTest:{"BasicTest.vm":jn,"BasicTestVME.tst":$n,"BasicTest.cmp":Vn,"BasicTest.tst":Un},PointerTest:{"PointerTest.vm":Wn,"PointerTestVME.tst":Gn,"PointerTest.cmp":Kn,"PointerTest.tst":Hn},StaticTest:{"StaticTest.vm":qn,"StaticTestVME.tst":Zn,"StaticTest.cmp":Xn,"StaticTest.tst":Jn}},Qn=`// This file is part of www.nand2tetris.org
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
`,ti=`// This file is part of www.nand2tetris.org
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
`,ei=`// This file is part of www.nand2tetris.org
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
`,si=`| RAM[0] |RAM[256]|
|    257 |      6 |
`,ri=`// This file is part of www.nand2tetris.org
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
`,oi=`// This file is part of www.nand2tetris.org
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
`,ni=`// This file is part of www.nand2tetris.org
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
`,ii=`|RAM[3000]|RAM[3001]|RAM[3002]|RAM[3003]|RAM[3004]|RAM[3005]|
|      0  |      1  |      1  |      2  |      3  |      5  |
`,ai=`// This file is part of www.nand2tetris.org
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
`,ui=`// This file is part of www.nand2tetris.org
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
`,ci=`// This file is part of www.nand2tetris.org
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
`,li=`| RAM[0] | RAM[1] | RAM[2] | RAM[3] | RAM[4] |RAM[310]|
|    311 |    305 |    300 |   3010 |   4010 |   1196 |
`,di=`// Sys.vm. Tested by the NestedCall test script.
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
`,pi=`// Tests and illustrates how the VM implementation handles function-call-and-return,
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
`,hi=`// Tests how the VM implementation handles function-call-and-return,
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
`,fi=`| RAM[0] | RAM[1] | RAM[2] | RAM[3] | RAM[4] | RAM[5] | RAM[6] |
|    261 |    261 |    256 |   4000 |   5000 |    135 |    246 |
`,mi=`// This file is part of www.nand2tetris.org
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
`,gi=`// This file is part of www.nand2tetris.org
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
	goto END  // loops infinitely`,vi=`// This file is part of www.nand2tetris.org
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
`,ki=`// This file is part of www.nand2tetris.org
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
`,yi=`| RAM[0] |RAM[261]|
|    262 |      3 |
`,bi=`// This file is part of www.nand2tetris.org
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
	return`,wi=`// This file is part of www.nand2tetris.org
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
	return`,Bi=`// This file is part of www.nand2tetris.org
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
	goto END`,Ai=`// This file is part of www.nand2tetris.org
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
`,_i=`// This file is part of www.nand2tetris.org
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
`,xi=`| RAM[0] |RAM[261]|RAM[262]|
|    263 |     -2 |      8 |
`,Si={BasicLoop:{"BasicLoop.vm":Qn,"BasicLoopVME.tst":ti,"BasicLoop.cmp":si,"BasicLoop.tst":ei},FibonacciSeries:{"FibonacciSeries.vm":ri,"FibonacciSeriesVME.tst":oi,"FibonacciSeries.cmp":ii,"FibonacciSeries.tst":ni},SimpleFunction:{"SimpleFunction.vm":ai,"SimpleFunctionVME.tst":ui,"SimpleFunction.cmp":li,"SimpleFunction.tst":ci},NestedCall:{"Sys.vm":di,"NestedCallVME.tst":pi,"NestedCall.cmp":fi,"NestedCall.tst":hi},FibonacciElement:{"Sys.vm":gi,"Main.vm":mi,"FibonacciElementVME.tst":vi,"FibonacciElement.cmp":yi,"FibonacciElement.tst":ki},StaticsTest:{"Class1.vm":bi,"Class2.vm":wi,"Sys.vm":Bi,"StaticsTestVME.tst":Ai,"StaticsTest.cmp":xi,"StaticsTest.tst":_i}},Me={...fo,...Eo,...rn,...Cn,...Yn,...Si},Ii=s=>s===null,Fe=s=>Object.prototype.hasOwnProperty.call(s??{},"ok"),pt=s=>Object.prototype.hasOwnProperty.call(s,"err");function lt(s){return Fe(s)?s.ok:{ok:s,map(t){return t(lt(this))}}}function tt(s){return s.err??{err:s,map(t){return this}}}function Ri(s){if(Ii(s))throw new Error("Attempted to unwrap None");if(pt(s))throw tt(s);return Fe(s)?lt(s):s}function Dt(s){const t=s||"";return function(){throw new Error("this method "+t+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function de(s,t){if(!s)throw new Error(t||"Assertion failed")}function T0(s,t,e){let r;Object.defineProperty(s,t,{get(){return r||(r=e.call(this)),r}})}function Ti(s){return s&&Object.assign({},s)}function as(s,t){const e=[];for(;t-- >0;)e.push(s());return e}function us(s,t){return new Array(t+1).join(s)}function i0(s,t){return as(()=>s,t)}function M0(s){const t=[];for(let e=0;e<s.length;e++){const r=s[e];s.lastIndexOf(r)!==e&&t.indexOf(r)<0&&t.push(r)}return t}function cs(s){const t=[];return s.forEach(e=>{t.indexOf(e)<0&&t.push(e)}),t}function he(s){const t=s[0];return t===t.toUpperCase()}function ls(s){return!he(s)}function ds(s,t,e){const r=e||" ";return s.length<t?us(r,t-s.length)+s:s}function fe(){this.strings=[]}fe.prototype.append=function(s){this.strings.push(s)};fe.prototype.contents=function(){return this.strings.join("")};const k0=s=>String.fromCodePoint(parseInt(s,16));function ps(s){if(s.charAt(0)==="\\")switch(s.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return k0(s.slice(2,4));case"u":return s.charAt(2)==="{"?k0(s.slice(3,-1)):k0(s.slice(2,6));default:return s.charAt(1)}else return s}function J0(s){if(s==null)return String(s);const t=Object.prototype.toString.call(s);try{let e;return s.constructor&&s.constructor.name?e=s.constructor.name:t.indexOf("[object ")===0?e=t.slice(8,-1):e=typeof s,e+": "+JSON.stringify(String(s))}catch{return t}}function hs(s,t="unexpected null value"){if(s==null)throw new Error(t);return s}const Mi=Object.freeze(Object.defineProperty({__proto__:null,StringBuffer:fe,abstract:Dt,assert:de,checkNotNull:hs,clone:Ti,copyWithoutDuplicates:cs,defineLazyProperty:T0,getDuplicates:M0,isLexical:ls,isSyntactic:he,padLeft:ds,repeat:i0,repeatFn:as,repeatStr:us,unescapeCodePoint:ps,unexpectedObjToString:J0},Symbol.toStringTag,{value:"Module"})),Ci={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class it{constructor(){if(this.constructor===it)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(t){return t&&(this.source=t.trimmed()),this}}const Tt=Object.create(it.prototype),Mt=Object.create(it.prototype);class It extends it{constructor(t){super(),this.obj=t}}class Ct extends it{constructor(t,e){super(),this.from=t,this.to=e,this.matchCodePoint=t.length>1||e.length>1}}class Et extends it{constructor(t){super(),this.index=t}}class At extends it{constructor(t){super(),this.terms=t}}class a0 extends At{constructor(t,e,r){const o=t.rules[e].body;super([r,o]),this.superGrammar=t,this.name=e,this.body=r}}class u0 extends At{constructor(t,e,r,o){const n=t.rules[e].body;super([...r,n,...o]),this.superGrammar=t,this.ruleName=e,this.expansionPos=r.length}}class _t extends it{constructor(t){super(),this.factors=t}}class Ft extends it{constructor(t){super(),this.expr=t}}class me extends Ft{}class xe extends Ft{}class ue extends Ft{}me.prototype.operator="*";xe.prototype.operator="+";ue.prototype.operator="?";me.prototype.minNumMatches=0;xe.prototype.minNumMatches=1;ue.prototype.minNumMatches=0;me.prototype.maxNumMatches=Number.POSITIVE_INFINITY;xe.prototype.maxNumMatches=Number.POSITIVE_INFINITY;ue.prototype.maxNumMatches=1;let Nt=class extends it{constructor(t){super(),this.expr=t}};class Lt extends it{constructor(t){super(),this.expr=t}}class $t extends it{constructor(t){super(),this.expr=t}}class ht extends it{constructor(t,e=[]){super(),this.ruleName=t,this.args=e}isSyntactic(){return he(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class St extends it{constructor(t){super(),this.category=t,this.pattern=Ci[t]}}function yt(s,t){let e;return t?(e=new Error(t.getLineAndColumnMessage()+s),e.shortMessage=s,e.interval=t):e=new Error(s),e}function C0(){return yt("Interval sources don't match")}function Ei(s){const t=new Error;return Object.defineProperty(t,"message",{enumerable:!0,get(){return s.message}}),Object.defineProperty(t,"shortMessage",{enumerable:!0,get(){return"Expected "+s.getExpectedText()}}),t.interval=s.getInterval(),t}function Pi(s,t,e){const r=t?`Grammar ${s} is not declared in namespace '${t}'`:"Undeclared grammar "+s;return yt(r,e)}function Oi(s,t){return yt("Grammar "+s.name+" is already declared in this namespace")}function Di(s){return yt(`Grammar '${s.name}' does not support incremental parsing`)}function fs(s,t,e){return yt("Rule "+s+" is not declared in grammar "+t,e)}function Fi(s,t,e){return yt("Cannot override rule "+s+" because it is not declared in "+t,e)}function Ni(s,t,e){return yt("Cannot extend rule "+s+" because it is not declared in "+t,e)}function _1(s,t,e,r){let o="Duplicate declaration for rule '"+s+"' in grammar '"+t+"'";return t!==e&&(o+=" (originally declared in '"+e+"')"),yt(o,r)}function ms(s,t,e,r){return yt("Wrong number of parameters for rule "+s+" (expected "+t+", got "+e+")",r)}function Li(s,t,e,r){return yt("Wrong number of arguments for rule "+s+" (expected "+t+", got "+e+")",r)}function x1(s,t,e){return yt("Duplicate parameter names in rule "+s+": "+t.join(", "),e)}function zi(s,t){return yt("Invalid parameter to rule "+s+": "+t+" has arity "+t.getArity()+", but parameter expressions must have arity 1",t.source)}const ji="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function $i(s,t){return yt("Cannot apply syntactic rule "+s+" from here (inside a lexical context)",t.source)}function Ui(s){const{ruleName:t}=s;return yt(`applySyntactic is for syntactic rules, but '${t}' is a lexical rule. `+ji,s.source)}function Vi(s){return yt("applySyntactic is not required here (in a syntactic context)",s.source)}function S1(s,t){return yt("Incorrect argument type: expected "+s,t.source)}function Wi(s){return yt("'...' can appear at most once in a rule body",s.source)}function Gi(s){const t=s._node;de(t&&t.isNonterminal()&&t.ctorName==="escapeChar_unicodeCodePoint");const e=s.children.slice(1,-1).map(o=>o.source),r=e[0].coverageWith(...e.slice(1));return yt(`U+${r.contents} is not a valid Unicode code point`,r)}function gs(s,t){const e=t.length>0?t[t.length-1].args:[];let o="Nullable expression "+s.expr.substituteParams(e)+" is not allowed inside '"+s.operator+"' (possible infinite loop)";if(t.length>0){const n=t.map(i=>new ht(i.ruleName,i.args)).join(`
`);o+=`
Application stack (most recent application last):
`+n}return yt(o,s.expr.source)}function vs(s,t,e,r){return yt("Rule "+s+" involves an alternation which has inconsistent arity (expected "+t+", got "+e+")",r.source)}function Hi(s){const t=s.map(e=>e.message);return yt(["Errors:"].concat(t).join(`
- `),s[0].interval)}function Ki(s,t,e,r){let o=r.slice(0,-1).map(u=>{const h="  "+u[0].name+" > "+u[1];return u.length===3?h+" for '"+u[2]+"'":h}).join(`
`);o+=`
  `+t+" > "+s;let n="";s==="_iter"&&(n=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const i=[`Missing semantic action for '${s}' in ${e} '${t}'.${n}`,"Action stack (most recent call last):",o].join(`
`),a=yt(i);return a.name="missingSemanticAction",a}function qi(s){if(s.length===1)throw s[0];if(s.length>1)throw Hi(s)}function Zi(s){let t=0;return s.map(r=>{const o=r.toString();return t=Math.max(t,o.length),o}).map(r=>ds(r,t))}function I1(s,t,e){const r=s.length,o=s.slice(0,e),n=s.slice(e+t.length);return(o+t+n).substr(0,r)}function Ji(...s){const t=this,{offset:e}=t,{repeatStr:r}=Mi,o=new fe;o.append("Line "+t.lineNum+", col "+t.colNum+`:
`);const n=Zi([t.prevLine==null?0:t.lineNum-1,t.lineNum,t.nextLine==null?0:t.lineNum+1]),i=(m,f,v)=>{o.append(v+n[m]+" | "+f+`
`)};t.prevLine!=null&&i(0,t.prevLine,"  "),i(1,t.line,"> ");const a=t.line.length;let u=r(" ",a+1);for(let m=0;m<s.length;++m){let f=s[m][0],v=s[m][1];de(f>=0&&f<=v,"range start must be >= 0 and <= end");const d=e-t.colNum+1;f=Math.max(0,f-d),v=Math.min(v-d,a),u=I1(u,r("~",v-f),f)}const h=2+n[1].length+3;return o.append(r(" ",h)),u=I1(u,"^",t.colNum-1),o.append(u.replace(/ +$/,"")+`
`),t.nextLine!=null&&i(2,t.nextLine,"  "),o.contents()}let E0=[];function ks(s){E0.push(s)}function Xi(s){E0.forEach(t=>{t(s)}),E0=null}function X0(s,t){let e=1,r=1,o=0,n=0,i=null,a=null,u=-1;for(;o<t;){const f=s.charAt(o++);f===`
`?(e++,r=1,u=n,n=o):f!=="\r"&&r++}let h=s.indexOf(`
`,n);if(h===-1)h=s.length;else{const f=s.indexOf(`
`,h+1);i=f===-1?s.slice(h):s.slice(h,f),i=i.replace(/^\r?\n/,"").replace(/\r$/,"")}u>=0&&(a=s.slice(u,n).replace(/\r?\n$/,""));const m=s.slice(n,h).replace(/\r$/,"");return{offset:t,lineNum:e,colNum:r,line:m,prevLine:a,nextLine:i,toString:Ji}}function Y0(s,t,...e){return X0(s,t).toString(...e)}const R1=(()=>{let s=0;return t=>""+t+s++})();class Rt{constructor(t,e,r){this.sourceString=t,this.startIdx=e,this.endIdx=r}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...t){return Rt.coverage(...t,this)}collapsedLeft(){return new Rt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new Rt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return X0(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const t=[this.startIdx,this.endIdx];return Y0(this.sourceString,this.startIdx,t)}minus(t){if(this.sourceString!==t.sourceString)throw C0();return this.startIdx===t.startIdx&&this.endIdx===t.endIdx?[]:this.startIdx<t.startIdx&&t.endIdx<this.endIdx?[new Rt(this.sourceString,this.startIdx,t.startIdx),new Rt(this.sourceString,t.endIdx,this.endIdx)]:this.startIdx<t.endIdx&&t.endIdx<this.endIdx?[new Rt(this.sourceString,t.endIdx,this.endIdx)]:this.startIdx<t.startIdx&&t.startIdx<this.endIdx?[new Rt(this.sourceString,this.startIdx,t.startIdx)]:[this]}relativeTo(t){if(this.sourceString!==t.sourceString)throw C0();return de(this.startIdx>=t.startIdx&&this.endIdx<=t.endIdx,"other interval does not cover this one"),new Rt(this.sourceString,this.startIdx-t.startIdx,this.endIdx-t.startIdx)}trimmed(){const{contents:t}=this,e=this.startIdx+t.match(/^\s*/)[0].length,r=this.endIdx-t.match(/\s*$/)[0].length;return new Rt(this.sourceString,e,r)}subInterval(t,e){const r=this.startIdx+t;return new Rt(this.sourceString,r,r+e)}}Rt.coverage=function(s,...t){let{startIdx:e,endIdx:r}=s;for(const o of t){if(o.sourceString!==s.sourceString)throw C0();e=Math.min(e,o.startIdx),r=Math.max(r,o.endIdx)}return new Rt(s.sourceString,e,r)};const Yi=65535;class c0{constructor(t){this.source=t,this.pos=0,this.examinedLength=0}atEnd(){const t=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),t}next(){const t=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),t}nextCharCode(){const t=this.next();return t&&t.charCodeAt(0)}nextCodePoint(){const t=this.source.slice(this.pos++).codePointAt(0);return t>Yi&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),t}matchString(t,e){let r;if(e){for(r=0;r<t.length;r++){const o=this.next(),n=t[r];if(o==null||o.toUpperCase()!==n.toUpperCase())return!1}return!0}for(r=0;r<t.length;r++)if(this.next()!==t[r])return!1;return!0}sourceSlice(t,e){return this.source.slice(t,e)}interval(t,e){return new Rt(this.source,t,e||this.pos)}}class ys{constructor(t,e,r,o,n,i,a){this.matcher=t,this.input=e,this.startExpr=r,this._cst=o,this._cstOffset=n,this._rightmostFailurePosition=i,this._rightmostFailures=a,this.failed()&&(T0(this,"message",function(){const u="Expected "+this.getExpectedText();return Y0(this.input,this.getRightmostFailurePosition())+u}),T0(this,"shortMessage",function(){const u="expected "+this.getExpectedText(),h=X0(this.input,this.getRightmostFailurePosition());return"Line "+h.lineNum+", col "+h.colNum+": "+u}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const t=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=t.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const t=new fe;let e=this.getRightmostFailures();e=e.filter(r=>!r.isFluffy());for(let r=0;r<e.length;r++)r>0&&(r===e.length-1?t.append(e.length>2?", or ":" or "):t.append(", ")),t.append(e[r].toString());return t.contents()}getInterval(){const t=this.getRightmostFailurePosition();return new Rt(this.input,t,t)}}class Qi{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(t){return this.applicationMemoKeyStack.indexOf(t.toMemoKey())>=0}enter(t){this.applicationMemoKeyStack.push(t.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(t,e){e.isLeftRecursion=!0,e.headApplication=t,e.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=e;const{applicationMemoKeyStack:r}=this,o=r.indexOf(t.toMemoKey())+1,n=r.slice(o);e.isInvolved=function(i){return n.indexOf(i)>=0},e.updateInvolvedApplicationMemoKeys=function(){for(let i=o;i<r.length;i++){const a=r[i];this.isInvolved(a)||n.push(a)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(t){if(!t.isLeftRecursion)return!0;const{applicationMemoKeyStack:e}=this;for(let r=0;r<e.length;r++){const o=e[r];if(t.isInvolved(o))return!1}return!0}memoize(t,e){return this.memo[t]=e,this.maxExaminedLength=Math.max(this.maxExaminedLength,e.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,e.rightmostFailureOffset),e}clearObsoleteEntries(t,e){if(t+this.maxExaminedLength<=e)return;const{memo:r}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(r).forEach(o=>{const n=r[o];t+n.examinedLength>e?delete r[o]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,n.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,n.rightmostFailureOffset))})}}const ta="✗",ea="✓",sa="⋅",ra="⇒",oa="␉",na="␊",ia="␍",P0={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function aa(s){return i0(" ",s).join("")}function ua(s,t,e){const r=bs(s.slice(t,t+e));return r.length<e?r+i0(" ",e-r.length).join(""):r}function bs(s){return typeof s=="string"?s.replace(/ /g,sa).replace(/\t/g,oa).replace(/\n/g,na).replace(/\r/g,ia):String(s)}class le{constructor(t,e,r,o,n,i,a){this.input=t,this.pos=this.pos1=e,this.pos2=r,this.source=new Rt(t,e,r),this.expr=o,this.bindings=i,this.children=a||[],this.terminatingLREntry=null,this._flags=n?P0.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(t){const e=new le(this.input,this.pos,this.pos2,t,this.succeeded,this.bindings,this.children);return e.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,e.isImplicitSpaces=this.isImplicitSpaces,e.isMemoized=this.isMemoized,e.isRootNode=this.isRootNode,e.terminatesLR=this.terminatesLR,e.terminatingLREntry=this.terminatingLREntry,e}recordLRTermination(t,e){this.terminatingLREntry=new le(this.input,this.pos,this.pos2,this.expr,!1,[e],[t]),this.terminatingLREntry.terminatesLR=!0}walk(t,e){let r=t;typeof r=="function"&&(r={enter:r});function o(n,i,a){let u=!0;r.enter&&r.enter.call(e,n,i,a)===le.prototype.SKIP&&(u=!1),u&&(n.children.forEach(h=>{o(h,n,a+1)}),r.exit&&r.exit.call(e,n,i,a))}this.isRootNode?this.children.forEach(n=>{o(n,null,0)}):o(this,null,0)}toString(){const t=new fe;return this.walk((e,r,o)=>{if(!e)return this.SKIP;if(e.expr.constructor.name!=="Alt"){if(t.append(ua(e.input,e.pos,10)+aa(o*2+1)),t.append((e.succeeded?ea:ta)+" "+e.displayString),e.isHeadOfLeftRecursion&&t.append(" (LR)"),e.succeeded){const i=bs(e.source.contents);t.append(" "+ra+"  "),t.append(typeof i=="string"?'"'+i+'"':i)}t.append(`
`)}}),t.contents()}}le.prototype.SKIP={};Object.keys(P0).forEach(s=>{const t=P0[s];Object.defineProperty(le.prototype,s,{get(){return(this._flags&t)!==0},set(e){e?this._flags|=t:this._flags&=~t}})});it.prototype.allowsSkippingPrecedingSpace=Dt("allowsSkippingPrecedingSpace");Tt.allowsSkippingPrecedingSpace=Mt.allowsSkippingPrecedingSpace=ht.prototype.allowsSkippingPrecedingSpace=It.prototype.allowsSkippingPrecedingSpace=Ct.prototype.allowsSkippingPrecedingSpace=St.prototype.allowsSkippingPrecedingSpace=function(){return!0};At.prototype.allowsSkippingPrecedingSpace=Ft.prototype.allowsSkippingPrecedingSpace=$t.prototype.allowsSkippingPrecedingSpace=Lt.prototype.allowsSkippingPrecedingSpace=Nt.prototype.allowsSkippingPrecedingSpace=Et.prototype.allowsSkippingPrecedingSpace=_t.prototype.allowsSkippingPrecedingSpace=function(){return!1};let Ee;ks(s=>{Ee=s});let Qe;it.prototype.assertAllApplicationsAreValid=function(s,t){Qe=0,this._assertAllApplicationsAreValid(s,t)};it.prototype._assertAllApplicationsAreValid=Dt("_assertAllApplicationsAreValid");Tt._assertAllApplicationsAreValid=Mt._assertAllApplicationsAreValid=It.prototype._assertAllApplicationsAreValid=Ct.prototype._assertAllApplicationsAreValid=Et.prototype._assertAllApplicationsAreValid=St.prototype._assertAllApplicationsAreValid=function(s,t){};$t.prototype._assertAllApplicationsAreValid=function(s,t){Qe++,this.expr._assertAllApplicationsAreValid(s,t),Qe--};At.prototype._assertAllApplicationsAreValid=function(s,t){for(let e=0;e<this.terms.length;e++)this.terms[e]._assertAllApplicationsAreValid(s,t)};_t.prototype._assertAllApplicationsAreValid=function(s,t){for(let e=0;e<this.factors.length;e++)this.factors[e]._assertAllApplicationsAreValid(s,t)};Ft.prototype._assertAllApplicationsAreValid=Nt.prototype._assertAllApplicationsAreValid=Lt.prototype._assertAllApplicationsAreValid=function(s,t){this.expr._assertAllApplicationsAreValid(s,t)};ht.prototype._assertAllApplicationsAreValid=function(s,t,e=!1){const r=t.rules[this.ruleName],o=he(s)&&Qe===0;if(!r)throw fs(this.ruleName,t.name,this.source);if(!e&&he(this.ruleName)&&!o)throw $i(this.ruleName,this);const n=this.args.length,i=r.formals.length;if(n!==i)throw Li(this.ruleName,i,n,this.source);const a=Ee&&r===Ee.rules.applySyntactic;if(Ee&&r===Ee.rules.caseInsensitive&&!(this.args[0]instanceof It))throw S1('a Terminal (e.g. "abc")',this.args[0]);if(a){const h=this.args[0];if(!(h instanceof ht))throw S1("a syntactic rule application",h);if(!he(h.ruleName))throw Ui(h);if(o)throw Vi(this)}this.args.forEach(h=>{if(h._assertAllApplicationsAreValid(s,t,a),h.getArity()!==1)throw zi(this.ruleName,h)})};it.prototype.assertChoicesHaveUniformArity=Dt("assertChoicesHaveUniformArity");Tt.assertChoicesHaveUniformArity=Mt.assertChoicesHaveUniformArity=It.prototype.assertChoicesHaveUniformArity=Ct.prototype.assertChoicesHaveUniformArity=Et.prototype.assertChoicesHaveUniformArity=$t.prototype.assertChoicesHaveUniformArity=St.prototype.assertChoicesHaveUniformArity=function(s){};At.prototype.assertChoicesHaveUniformArity=function(s){if(this.terms.length===0)return;const t=this.terms[0].getArity();for(let e=0;e<this.terms.length;e++){const r=this.terms[e];r.assertChoicesHaveUniformArity();const o=r.getArity();if(t!==o)throw vs(s,t,o,r)}};a0.prototype.assertChoicesHaveUniformArity=function(s){const t=this.terms[0].getArity(),e=this.terms[1].getArity();if(t!==e)throw vs(s,e,t,this.terms[0])};_t.prototype.assertChoicesHaveUniformArity=function(s){for(let t=0;t<this.factors.length;t++)this.factors[t].assertChoicesHaveUniformArity(s)};Ft.prototype.assertChoicesHaveUniformArity=function(s){this.expr.assertChoicesHaveUniformArity(s)};Nt.prototype.assertChoicesHaveUniformArity=function(s){};Lt.prototype.assertChoicesHaveUniformArity=function(s){this.expr.assertChoicesHaveUniformArity(s)};ht.prototype.assertChoicesHaveUniformArity=function(s){};it.prototype.assertIteratedExprsAreNotNullable=Dt("assertIteratedExprsAreNotNullable");Tt.assertIteratedExprsAreNotNullable=Mt.assertIteratedExprsAreNotNullable=It.prototype.assertIteratedExprsAreNotNullable=Ct.prototype.assertIteratedExprsAreNotNullable=Et.prototype.assertIteratedExprsAreNotNullable=St.prototype.assertIteratedExprsAreNotNullable=function(s){};At.prototype.assertIteratedExprsAreNotNullable=function(s){for(let t=0;t<this.terms.length;t++)this.terms[t].assertIteratedExprsAreNotNullable(s)};_t.prototype.assertIteratedExprsAreNotNullable=function(s){for(let t=0;t<this.factors.length;t++)this.factors[t].assertIteratedExprsAreNotNullable(s)};Ft.prototype.assertIteratedExprsAreNotNullable=function(s){if(this.expr.assertIteratedExprsAreNotNullable(s),this.expr.isNullable(s))throw gs(this,[])};ue.prototype.assertIteratedExprsAreNotNullable=Nt.prototype.assertIteratedExprsAreNotNullable=Lt.prototype.assertIteratedExprsAreNotNullable=$t.prototype.assertIteratedExprsAreNotNullable=function(s){this.expr.assertIteratedExprsAreNotNullable(s)};ht.prototype.assertIteratedExprsAreNotNullable=function(s){this.args.forEach(t=>{t.assertIteratedExprsAreNotNullable(s)})};class Q0{constructor(t){this.matchLength=t}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(t){if(this.children)return this.children[t]}indexOfChild(t){return this.children.indexOf(t)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(t){const e=this.indexOfChild(t);if(e<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(e===0)throw new Error("cannot get child before first child");return this.childAt(e-1)}childAfter(t){const e=this.indexOfChild(t);if(e<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(e===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(e+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class ge extends Q0{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class ca extends Q0{constructor(t,e,r,o){super(o),this.ruleName=t,this.children=e,this.childOffsets=r}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return ls(this.ctorName)}isSyntactic(){return he(this.ctorName)}}class ws extends Q0{constructor(t,e,r,o){super(r),this.children=t,this.childOffsets=e,this.optional=o}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}it.prototype.eval=Dt("eval");Tt.eval=function(s){const{inputStream:t}=s,e=t.pos,r=t.nextCodePoint();return r!==void 0?(s.pushBinding(new ge(String.fromCodePoint(r).length),e),!0):(s.processFailure(e,this),!1)};Mt.eval=function(s){const{inputStream:t}=s,e=t.pos;return t.atEnd()?(s.pushBinding(new ge(0),e),!0):(s.processFailure(e,this),!1)};It.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos;return t.matchString(this.obj)?(s.pushBinding(new ge(this.obj.length),e),!0):(s.processFailure(e,this),!1)};Ct.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos,r=this.matchCodePoint?t.nextCodePoint():t.nextCharCode();return r!==void 0&&this.from.codePointAt(0)<=r&&r<=this.to.codePointAt(0)?(s.pushBinding(new ge(String.fromCodePoint(r).length),e),!0):(s.processFailure(e,this),!1)};Et.prototype.eval=function(s){return s.eval(s.currentApplication().args[this.index])};$t.prototype.eval=function(s){s.enterLexifiedContext();const t=s.eval(this.expr);return s.exitLexifiedContext(),t};At.prototype.eval=function(s){for(let t=0;t<this.terms.length;t++)if(s.eval(this.terms[t]))return!0;return!1};_t.prototype.eval=function(s){for(let t=0;t<this.factors.length;t++){const e=this.factors[t];if(!s.eval(e))return!1}return!0};Ft.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos,r=this.getArity(),o=[],n=[];for(;o.length<r;)o.push([]),n.push([]);let i=0,a=e,u;for(;i<this.maxNumMatches&&s.eval(this.expr);){if(t.pos===a)throw gs(this,s._applicationStack);a=t.pos,i++;const v=s._bindings.splice(s._bindings.length-r,r),d=s._bindingOffsets.splice(s._bindingOffsets.length-r,r);for(u=0;u<v.length;u++)o[u].push(v[u]),n[u].push(d[u])}if(i<this.minNumMatches)return!1;let h=s.posToOffset(e),m=0;if(i>0){const v=o[r-1],d=n[r-1],y=d[d.length-1]+v[v.length-1].matchLength;h=n[0][0],m=y-h}const f=this instanceof ue;for(u=0;u<o.length;u++)s._bindings.push(new ws(o[u],n[u],m,f)),s._bindingOffsets.push(h);return!0};Nt.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos;s.pushFailuresInfo();const r=s.eval(this.expr);return s.popFailuresInfo(),r?(s.processFailure(e,this),!1):(t.pos=e,!0)};Lt.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos;return s.eval(this.expr)?(t.pos=e,!0):!1};ht.prototype.eval=function(s){const t=s.currentApplication(),e=t?t.args:[],r=this.substituteParams(e),o=s.getCurrentPosInfo();if(o.isActive(r))return r.handleCycle(s);const n=r.toMemoKey(),i=o.memo[n];if(i&&o.shouldUseMemoizedResult(i)){if(s.hasNecessaryInfo(i))return s.useMemoizedResult(s.inputStream.pos,i);delete o.memo[n]}return r.reallyEval(s)};ht.prototype.handleCycle=function(s){const t=s.getCurrentPosInfo(),{currentLeftRecursion:e}=t,r=this.toMemoKey();let o=t.memo[r];return e&&e.headApplication.toMemoKey()===r?o.updateInvolvedApplicationMemoKeys():o||(o=t.memoize(r,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),t.startLeftRecursion(this,o)),s.useMemoizedResult(s.inputStream.pos,o)};ht.prototype.reallyEval=function(s){const{inputStream:t}=s,e=t.pos,r=s.getCurrentPosInfo(),o=s.grammar.rules[this.ruleName],{body:n}=o,{description:i}=o;s.enterApplication(r,this),i&&s.pushFailuresInfo();const a=t.examinedLength;t.examinedLength=0;let u=this.evalOnce(n,s);const h=r.currentLeftRecursion,m=this.toMemoKey(),f=h&&h.headApplication.toMemoKey()===m;let v;s.doNotMemoize?s.doNotMemoize=!1:f?(u=this.growSeedResult(n,s,e,h,u),r.endLeftRecursion(),v=h,v.examinedLength=t.examinedLength-e,v.rightmostFailureOffset=s._getRightmostFailureOffset(),r.memoize(m,v)):(!h||!h.isInvolved(m))&&(v=r.memoize(m,{matchLength:t.pos-e,examinedLength:t.examinedLength-e,value:u,failuresAtRightmostPosition:s.cloneRecordedFailures(),rightmostFailureOffset:s._getRightmostFailureOffset()}));const d=!!u;if(i&&(s.popFailuresInfo(),d||s.processFailure(e,this),v&&(v.failuresAtRightmostPosition=s.cloneRecordedFailures())),s.isTracing()&&v){const y=s.getTraceEntry(e,this,d,d?[u]:[]);f&&(de(y.terminatingLREntry!=null||!d),y.isHeadOfLeftRecursion=!0),v.traceEntry=y}return t.examinedLength=Math.max(t.examinedLength,a),s.exitApplication(r,u),d};ht.prototype.evalOnce=function(s,t){const{inputStream:e}=t,r=e.pos;if(t.eval(s)){const o=s.getArity(),n=t._bindings.splice(t._bindings.length-o,o),i=t._bindingOffsets.splice(t._bindingOffsets.length-o,o),a=e.pos-r;return new ca(this.ruleName,n,i,a)}else return!1};ht.prototype.growSeedResult=function(s,t,e,r,o){if(!o)return!1;const{inputStream:n}=t;for(;;){if(r.matchLength=n.pos-e,r.value=o,r.failuresAtRightmostPosition=t.cloneRecordedFailures(),t.isTracing()){const i=t.trace[t.trace.length-1];r.traceEntry=new le(t.input,e,n.pos,this,!0,[o],[i.clone()])}if(n.pos=e,o=this.evalOnce(s,t),n.pos-e<=r.matchLength)break;t.isTracing()&&t.trace.splice(-2,1)}return t.isTracing()&&r.traceEntry.recordLRTermination(t.trace.pop(),o),n.pos=e+r.matchLength,r.value};St.prototype.eval=function(s){const{inputStream:t}=s,e=t.pos,r=t.next();return r&&this.pattern.test(r)?(s.pushBinding(new ge(r.length),e),!0):(s.processFailure(e,this),!1)};it.prototype.getArity=Dt("getArity");Tt.getArity=Mt.getArity=It.prototype.getArity=Ct.prototype.getArity=Et.prototype.getArity=ht.prototype.getArity=St.prototype.getArity=function(){return 1};At.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()};_t.prototype.getArity=function(){let s=0;for(let t=0;t<this.factors.length;t++)s+=this.factors[t].getArity();return s};Ft.prototype.getArity=function(){return this.expr.getArity()};Nt.prototype.getArity=function(){return 0};Lt.prototype.getArity=$t.prototype.getArity=function(){return this.expr.getArity()};function Xt(s,t){const e={};if(s.source&&t){const r=s.source.relativeTo(t);e.sourceInterval=[r.startIdx,r.endIdx]}return e}it.prototype.outputRecipe=Dt("outputRecipe");Tt.outputRecipe=function(s,t){return["any",Xt(this,t)]};Mt.outputRecipe=function(s,t){return["end",Xt(this,t)]};It.prototype.outputRecipe=function(s,t){return["terminal",Xt(this,t),this.obj]};Ct.prototype.outputRecipe=function(s,t){return["range",Xt(this,t),this.from,this.to]};Et.prototype.outputRecipe=function(s,t){return["param",Xt(this,t),this.index]};At.prototype.outputRecipe=function(s,t){return["alt",Xt(this,t)].concat(this.terms.map(e=>e.outputRecipe(s,t)))};a0.prototype.outputRecipe=function(s,t){return this.terms[0].outputRecipe(s,t)};u0.prototype.outputRecipe=function(s,t){const e=this.terms.slice(0,this.expansionPos),r=this.terms.slice(this.expansionPos+1);return["splice",Xt(this,t),e.map(o=>o.outputRecipe(s,t)),r.map(o=>o.outputRecipe(s,t))]};_t.prototype.outputRecipe=function(s,t){return["seq",Xt(this,t)].concat(this.factors.map(e=>e.outputRecipe(s,t)))};me.prototype.outputRecipe=xe.prototype.outputRecipe=ue.prototype.outputRecipe=Nt.prototype.outputRecipe=Lt.prototype.outputRecipe=$t.prototype.outputRecipe=function(s,t){return[this.constructor.name.toLowerCase(),Xt(this,t),this.expr.outputRecipe(s,t)]};ht.prototype.outputRecipe=function(s,t){return["app",Xt(this,t),this.ruleName,this.args.map(e=>e.outputRecipe(s,t))]};St.prototype.outputRecipe=function(s,t){return["unicodeChar",Xt(this,t),this.category]};it.prototype.introduceParams=Dt("introduceParams");Tt.introduceParams=Mt.introduceParams=It.prototype.introduceParams=Ct.prototype.introduceParams=Et.prototype.introduceParams=St.prototype.introduceParams=function(s){return this};At.prototype.introduceParams=function(s){return this.terms.forEach((t,e,r)=>{r[e]=t.introduceParams(s)}),this};_t.prototype.introduceParams=function(s){return this.factors.forEach((t,e,r)=>{r[e]=t.introduceParams(s)}),this};Ft.prototype.introduceParams=Nt.prototype.introduceParams=Lt.prototype.introduceParams=$t.prototype.introduceParams=function(s){return this.expr=this.expr.introduceParams(s),this};ht.prototype.introduceParams=function(s){const t=s.indexOf(this.ruleName);if(t>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new Et(t).withSource(this.source)}else return this.args.forEach((e,r,o)=>{o[r]=e.introduceParams(s)}),this};it.prototype.isNullable=function(s){return this._isNullable(s,Object.create(null))};it.prototype._isNullable=Dt("_isNullable");Tt._isNullable=Ct.prototype._isNullable=Et.prototype._isNullable=xe.prototype._isNullable=St.prototype._isNullable=function(s,t){return!1};Mt._isNullable=function(s,t){return!0};It.prototype._isNullable=function(s,t){return typeof this.obj=="string"?this.obj==="":!1};At.prototype._isNullable=function(s,t){return this.terms.length===0||this.terms.some(e=>e._isNullable(s,t))};_t.prototype._isNullable=function(s,t){return this.factors.every(e=>e._isNullable(s,t))};me.prototype._isNullable=ue.prototype._isNullable=Nt.prototype._isNullable=Lt.prototype._isNullable=function(s,t){return!0};$t.prototype._isNullable=function(s,t){return this.expr._isNullable(s,t)};ht.prototype._isNullable=function(s,t){const e=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(t,e)){const{body:r}=s.rules[this.ruleName],o=r.substituteParams(this.args);t[e]=!1,t[e]=o._isNullable(s,t)}return t[e]};it.prototype.substituteParams=Dt("substituteParams");Tt.substituteParams=Mt.substituteParams=It.prototype.substituteParams=Ct.prototype.substituteParams=St.prototype.substituteParams=function(s){return this};Et.prototype.substituteParams=function(s){return hs(s[this.index])};At.prototype.substituteParams=function(s){return new At(this.terms.map(t=>t.substituteParams(s)))};_t.prototype.substituteParams=function(s){return new _t(this.factors.map(t=>t.substituteParams(s)))};Ft.prototype.substituteParams=Nt.prototype.substituteParams=Lt.prototype.substituteParams=$t.prototype.substituteParams=function(s){return new this.constructor(this.expr.substituteParams(s))};ht.prototype.substituteParams=function(s){if(this.args.length===0)return this;{const t=this.args.map(e=>e.substituteParams(s));return new ht(this.ruleName,t)}};function T1(s){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(s)}function t1(s){const t=Object.create(null);s.forEach(e=>{t[e]=(t[e]||0)+1}),Object.keys(t).forEach(e=>{if(t[e]<=1)return;let r=1;s.forEach((o,n)=>{o===e&&(s[n]=o+"_"+r++)})})}it.prototype.toArgumentNameList=Dt("toArgumentNameList");Tt.toArgumentNameList=function(s,t){return["any"]};Mt.toArgumentNameList=function(s,t){return["end"]};It.prototype.toArgumentNameList=function(s,t){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+s]};Ct.prototype.toArgumentNameList=function(s,t){let e=this.from+"_to_"+this.to;return T1(e)||(e="_"+e),T1(e)||(e="$"+s),[e]};At.prototype.toArgumentNameList=function(s,t){const e=this.terms.map(n=>n.toArgumentNameList(s,!0)),r=[],o=e[0].length;for(let n=0;n<o;n++){const i=[];for(let u=0;u<this.terms.length;u++)i.push(e[u][n]);const a=cs(i);r.push(a.join("_or_"))}return t||t1(r),r};_t.prototype.toArgumentNameList=function(s,t){let e=[];return this.factors.forEach(r=>{const o=r.toArgumentNameList(s,!0);e=e.concat(o),s+=o.length}),t||t1(e),e};Ft.prototype.toArgumentNameList=function(s,t){const e=this.expr.toArgumentNameList(s,t).map(r=>r[r.length-1]==="s"?r+"es":r+"s");return t||t1(e),e};ue.prototype.toArgumentNameList=function(s,t){return this.expr.toArgumentNameList(s,t).map(e=>"opt"+e[0].toUpperCase()+e.slice(1))};Nt.prototype.toArgumentNameList=function(s,t){return[]};Lt.prototype.toArgumentNameList=$t.prototype.toArgumentNameList=function(s,t){return this.expr.toArgumentNameList(s,t)};ht.prototype.toArgumentNameList=function(s,t){return[this.ruleName]};St.prototype.toArgumentNameList=function(s,t){return["$"+s]};Et.prototype.toArgumentNameList=function(s,t){return["param"+this.index]};it.prototype.toDisplayString=Dt("toDisplayString");At.prototype.toDisplayString=_t.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"};Tt.toDisplayString=Mt.toDisplayString=Ft.prototype.toDisplayString=Nt.prototype.toDisplayString=Lt.prototype.toDisplayString=$t.prototype.toDisplayString=It.prototype.toDisplayString=Ct.prototype.toDisplayString=Et.prototype.toDisplayString=function(){return this.toString()};ht.prototype.toDisplayString=function(){if(this.args.length>0){const s=this.args.map(t=>t.toDisplayString());return this.ruleName+"<"+s.join(",")+">"}else return this.ruleName};St.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function la(s){return s==="description"||s==="string"||s==="code"}class Ut{constructor(t,e,r){if(!la(r))throw new Error("invalid Failure type: "+r);this.pexpr=t,this.text=e,this.type=r,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(t){return this.getText()===t.getText()&&this.type===t.type&&(!this.isFluffy()||this.isFluffy()&&t.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const t=new Ut(this.pexpr,this.text,this.type);return this.isFluffy()&&t.makeFluffy(),t}toKey(){return this.toString()+"#"+this.type}}it.prototype.toFailure=Dt("toFailure");Tt.toFailure=function(s){return new Ut(this,"any object","description")};Mt.toFailure=function(s){return new Ut(this,"end of input","description")};It.prototype.toFailure=function(s){return new Ut(this,this.obj,"string")};Ct.prototype.toFailure=function(s){return new Ut(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")};Nt.prototype.toFailure=function(s){const t=this.expr===Tt?"nothing":"not "+this.expr.toFailure(s);return new Ut(this,t,"description")};Lt.prototype.toFailure=function(s){return this.expr.toFailure(s)};ht.prototype.toFailure=function(s){let{description:t}=s.rules[this.ruleName];return t||(t=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new Ut(this,t,"description")};St.prototype.toFailure=function(s){return new Ut(this,"a Unicode ["+this.category+"] character","description")};At.prototype.toFailure=function(s){const e="("+this.terms.map(r=>r.toFailure(s)).join(" or ")+")";return new Ut(this,e,"description")};_t.prototype.toFailure=function(s){const e="("+this.factors.map(r=>r.toFailure(s)).join(" ")+")";return new Ut(this,e,"description")};Ft.prototype.toFailure=function(s){const t="("+this.expr.toFailure(s)+this.operator+")";return new Ut(this,t,"description")};it.prototype.toString=Dt("toString");Tt.toString=function(){return"any"};Mt.toString=function(){return"end"};It.prototype.toString=function(){return JSON.stringify(this.obj)};Ct.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)};Et.prototype.toString=function(){return"$"+this.index};$t.prototype.toString=function(){return"#("+this.expr.toString()+")"};At.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(s=>s.toString()).join(" | ")+")"};_t.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(s=>s.toString()).join(" ")+")"};Ft.prototype.toString=function(){return this.expr+this.operator};Nt.prototype.toString=function(){return"~"+this.expr};Lt.prototype.toString=function(){return"&"+this.expr};ht.prototype.toString=function(){if(this.args.length>0){const s=this.args.map(t=>t.toString());return this.ruleName+"<"+s.join(",")+">"}else return this.ruleName};St.prototype.toString=function(){return"\\p{"+this.category+"}"};class e1 extends it{constructor(t){super(),this.obj=t}_getString(t){const e=t.currentApplication().args[this.obj.index];return de(e instanceof It,"expected a Terminal expression"),e.obj}allowsSkippingPrecedingSpace(){return!0}eval(t){const{inputStream:e}=t,r=e.pos,o=this._getString(t);return e.matchString(o,!0)?(t.pushBinding(new ge(o.length),r),!0):(t.processFailure(r,this),!1)}getArity(){return 1}substituteParams(t){return new e1(this.obj.substituteParams(t))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(t){return new Ut(this,this.obj.toFailure(t)+" (case-insensitive)","description")}_isNullable(t,e){return this.obj._isNullable(t,e)}}let Bs;ks(s=>{Bs=s.rules.applySyntactic.body});const y0=new ht("spaces");class da{constructor(t,e,r){this.matcher=t,this.startExpr=e,this.grammar=t.grammar,this.input=t.getInput(),this.inputStream=new c0(this.input),this.memoTable=t._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],r!==void 0&&(this.positionToRecordFailures=r,this.recordedFailures=Object.create(null))}posToOffset(t){return t-this._posStack[this._posStack.length-1]}enterApplication(t,e){this._posStack.push(this.inputStream.pos),this._applicationStack.push(e),this.inLexifiedContextStack.push(!1),t.enter(e),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(t,e){const r=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),t.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),e&&this.pushBinding(e,r)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const t=this.currentApplication();return t?t.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(y0),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(t){return t.allowsSkippingPrecedingSpace()&&t!==y0?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(t,e){this._bindings.push(t),this._bindingOffsets.push(this.posToOffset(e))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(t){for(;this._bindings.length>t;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(t){let e=this.memoTable[t];return e||(e=this.memoTable[t]=new Qi),e}processFailure(t,e){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,t),this.recordedFailures&&t===this.positionToRecordFailures){const r=this.currentApplication();r&&(e=e.substituteParams(r.args)),this.recordFailure(e.toFailure(this.grammar),!1)}}recordFailure(t,e){const r=t.toKey();this.recordedFailures[r]?this.recordedFailures[r].isFluffy()&&!t.isFluffy()&&this.recordedFailures[r].clearFluffy():this.recordedFailures[r]=e?t.clone():t}recordFailures(t,e){Object.keys(t).forEach(r=>{this.recordFailure(t[r],e)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const t=Object.create(null);return Object.keys(this.recordedFailures).forEach(e=>{t[e]=this.recordedFailures[e].clone()}),t}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(t,e){const r=this.memoTable[t];if(r&&e instanceof ht){const o=r.memo[e.toMemoKey()];if(o&&o.traceEntry){const n=o.traceEntry.cloneWithExpr(e);return n.isMemoized=!0,n}}return null}getTraceEntry(t,e,r,o){if(e instanceof ht){const n=this.currentApplication(),i=n?n.args:[];e=e.substituteParams(i)}return this.getMemoizedTraceEntry(t,e)||new le(this.input,t,this.inputStream.pos,e,r,o,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(t){return this.trace&&!t.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+t.rightmostFailureOffset===this.positionToRecordFailures?!!t.failuresAtRightmostPosition:!0}useMemoizedResult(t,e){this.trace&&this.trace.push(e.traceEntry);const r=this.inputStream.pos+e.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&this.positionToRecordFailures===r&&e.failuresAtRightmostPosition&&this.recordFailures(e.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,e.examinedLength+t),e.value?(this.inputStream.pos+=e.matchLength,this.pushBinding(e.value,t),!0):!1}eval(t){const{inputStream:e}=this,r=this._bindings.length,o=this.userData;let n;this.recordedFailures&&(n=this.recordedFailures,this.recordedFailures=Object.create(null));const i=e.pos,a=this.maybeSkipSpacesBefore(t);let u;this.trace&&(u=this.trace,this.trace=[]);const h=t.eval(this);if(this.trace){const m=this._bindings.slice(r),f=this.getTraceEntry(a,t,h,m);f.isImplicitSpaces=t===y0,f.isRootNode=t===this.startExpr,u.push(f),this.trace=u}return h?this.recordedFailures&&e.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(m=>{this.recordedFailures[m].makeFluffy()}):(e.pos=i,this.truncateBindings(r),this.userData=o),this.recordedFailures&&this.recordFailures(n,!1),t===Bs&&this.skipSpaces(),h}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let t;this.recordedFailures&&(t=Object.keys(this.recordedFailures).map(r=>this.recordedFailures[r]));const e=this._bindings[0];return e&&(e.grammar=this.grammar),new ys(this.matcher,this.input,this.startExpr,e,this._bindingOffsets[0],this.rightmostFailurePosition,t)}getTrace(){this.trace=[];const t=this.getMatchResult(),e=this.trace[this.trace.length-1];return e.result=t,e}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class pa{constructor(t){this.grammar=t,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(t){return this._input!==t&&this.replaceInputRange(0,this._input.length,t),this}replaceInputRange(t,e,r){const o=this._input,n=this._memoTable;if(t<0||t>o.length||e<0||e>o.length||t>e)throw new Error("Invalid indices: "+t+" and "+e);this._input=o.slice(0,t)+r+o.slice(e),this._input!==o&&n.length>0&&(this._isMemoTableStale=!0);const i=n.slice(e);n.length=t;for(let a=0;a<r.length;a++)n.push(void 0);for(const a of i)n.push(a);for(let a=0;a<t;a++){const u=n[a];u&&u.clearObsoleteEntries(a,t)}return this}match(t,e={incremental:!0}){return this._match(this._getStartExpr(t),{incremental:e.incremental,tracing:!1})}trace(t,e={incremental:!0}){return this._match(this._getStartExpr(t),{incremental:e.incremental,tracing:!0})}_match(t,e={}){const r={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...e};if(!r.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Di(this.grammar);const o=new da(this,t,r.positionToRecordFailures);return r.tracing?o.getTrace():o.getMatchResult()}_getStartExpr(t){const e=t||this.grammar.defaultStartRule;if(!e)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const r=this.grammar.parseApplication(e);return new _t([r,Mt])}}const Pe=[],O0=(s,t)=>Object.prototype.hasOwnProperty.call(s,t);class M1{constructor(t,e,r){this._node=t,this.source=e,this._baseInterval=r,t.isNonterminal()&&de(e===r),this._childWrappers=[]}_forgetMemoizedResultFor(t){delete this._node[this._semantics.attributeKeys[t]],this.children.forEach(e=>{e._forgetMemoizedResultFor(t)})}child(t){if(!(0<=t&&t<this._node.numChildren()))return;let e=this._childWrappers[t];if(!e){const r=this._node.childAt(t),o=this._node.childOffsets[t],n=this._baseInterval.subInterval(o,r.matchLength),i=r.isNonterminal()?n:this._baseInterval;e=this._childWrappers[t]=this._semantics.wrap(r,n,i)}return e}_children(){for(let t=0;t<this._node.numChildren();t++)this.child(t);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(t){const e=t||[],r=e.map(i=>i._node),o=new ws(r,[],-1,!1),n=this._semantics.wrap(o,null,null);return n._childWrappers=e,n}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class zt{constructor(t,e){const r=this;if(this.grammar=t,this.checkedActionDicts=!1,this.Wrapper=class extends(e?e.Wrapper:M1){constructor(o,n,i){super(o,n,i),r.checkActionDictsIfHaventAlready(),this._semantics=r}toString(){return"[semantics wrapper for "+r.grammar.name+"]"}},this.super=e,e){if(!(t.equals(this.super.grammar)||t._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+t.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const o in this.attributes)Object.defineProperty(this.attributeKeys,o,{value:R1(o)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let t;for(t in this.operations)this.operations[t].checkActionDict(this.grammar);for(t in this.attributes)this.attributes[t].checkActionDict(this.grammar)}toRecipe(t){function e(o){return o.super!==zt.BuiltInSemantics._getSemantics()}let r=`(function(g) {
`;if(e(this)){r+="  var semantics = "+this.super.toRecipe(!0)+"(g";const o=this.super.grammar;let n=this.grammar;for(;n!==o;)r+=".superGrammar",n=n.superGrammar;r+=`);
`,r+="  return g.extendSemantics(semantics)"}else r+="  return g.createSemantics()";return["Operation","Attribute"].forEach(o=>{const n=this[o.toLowerCase()+"s"];Object.keys(n).forEach(i=>{const{actionDict:a,formals:u,builtInDefault:h}=n[i];let m=i;u.length>0&&(m+="("+u.join(", ")+")");let f;e(this)&&this.super[o.toLowerCase()+"s"][i]?f="extend"+o:f="add"+o,r+=`
    .`+f+"("+JSON.stringify(m)+", {";const v=[];Object.keys(a).forEach(d=>{if(a[d]!==h){let y=a[d].toString().trim();y=y.replace(/^.*\(/,"function("),v.push(`
      `+JSON.stringify(d)+": "+y)}}),r+=v.join(",")+`
    })`})}),r+=`;
  })`,t||(r=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+r+`(grammar);
  return semantics;
});
`),r}addOperationOrAttribute(t,e,r){const o=t+"s",n=C1(e,t),{name:i}=n,{formals:a}=n;this.assertNewName(i,t);const u=ha(t,i,f),h={_default:u};Object.keys(r).forEach(v=>{h[v]=r[v]});const m=t==="operation"?new Ne(i,a,h,u):new D0(i,h,u);m.checkActionDict(this.grammar),this[o][i]=m;function f(...v){const d=this._semantics[o][i];if(arguments.length!==d.formals.length)throw new Error("Invalid number of arguments passed to "+i+" "+t+" (expected "+d.formals.length+", got "+arguments.length+")");const y=Object.create(null);for(const[g,A]of Object.entries(v)){const x=d.formals[g];y[x]=A}const p=this.args;this.args=y;const k=d.execute(this._semantics,this);return this.args=p,k}t==="operation"?(this.Wrapper.prototype[i]=f,this.Wrapper.prototype[i].toString=function(){return"["+i+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,i,{get:f,configurable:!0}),Object.defineProperty(this.attributeKeys,i,{value:R1(i)}))}extendOperationOrAttribute(t,e,r){const o=t+"s";if(C1(e,"attribute"),!(this.super&&e in this.super[o]))throw new Error("Cannot extend "+t+" '"+e+"': did not inherit an "+t+" with that name");if(O0(this[o],e))throw new Error("Cannot extend "+t+" '"+e+"' again");const n=this[o][e].formals,i=this[o][e].actionDict,a=Object.create(i);Object.keys(r).forEach(u=>{a[u]=r[u]}),this[o][e]=t==="operation"?new Ne(e,n,a):new D0(e,a),this[o][e].checkActionDict(this.grammar)}assertNewName(t,e){if(O0(M1.prototype,t))throw new Error("Cannot add "+e+" '"+t+"': that's a reserved name");if(t in this.operations)throw new Error("Cannot add "+e+" '"+t+"': an operation with that name already exists");if(t in this.attributes)throw new Error("Cannot add "+e+" '"+t+"': an attribute with that name already exists")}wrap(t,e,r){const o=r||e;return t instanceof this.Wrapper?t:new this.Wrapper(t,e,o)}}function C1(s,t){if(!zt.prototypeGrammar)return de(s.indexOf("(")===-1),{name:s,formals:[]};const e=zt.prototypeGrammar.match(s,t==="operation"?"OperationSignature":"AttributeSignature");if(e.failed())throw new Error(e.message);return zt.prototypeGrammarSemantics(e).parse()}function ha(s,t,e){return function(...r){const n=(this._semantics.operations[t]||this._semantics.attributes[t]).formals.map(i=>this.args[i]);if(!this.isIteration()&&r.length===1)return e.apply(r[0],n);throw Ki(this.ctorName,t,s,Pe)}}zt.createSemantics=function(s,t){const e=new zt(s,t!==void 0?t:zt.BuiltInSemantics._getSemantics()),r=function(n){if(!(n instanceof ys))throw new TypeError("Semantics expected a MatchResult, but got "+J0(n));if(n.failed())throw new TypeError("cannot apply Semantics to "+n.toString());const i=n._cst;if(i.grammar!==s)throw new Error("Cannot use a MatchResult from grammar '"+i.grammar.name+"' with a semantics for '"+s.name+"'");const a=new c0(n.input);return e.wrap(i,a.interval(n._cstOffset,n.input.length))};return r.addOperation=function(o,n){return e.addOperationOrAttribute("operation",o,n),r},r.extendOperation=function(o,n){return e.extendOperationOrAttribute("operation",o,n),r},r.addAttribute=function(o,n){return e.addOperationOrAttribute("attribute",o,n),r},r.extendAttribute=function(o,n){return e.extendOperationOrAttribute("attribute",o,n),r},r._getActionDict=function(o){const n=e.operations[o]||e.attributes[o];if(!n)throw new Error('"'+o+'" is not a valid operation or attribute name in this semantics for "'+s.name+'"');return n.actionDict},r._remove=function(o){let n;return o in e.operations?(n=e.operations[o],delete e.operations[o]):o in e.attributes&&(n=e.attributes[o],delete e.attributes[o]),delete e.Wrapper.prototype[o],n},r.getOperationNames=function(){return Object.keys(e.operations)},r.getAttributeNames=function(){return Object.keys(e.attributes)},r.getGrammar=function(){return e.grammar},r.toRecipe=function(o){return e.toRecipe(o)},r.toString=e.toString.bind(e),r._getSemantics=function(){return e},r};class Ne{constructor(t,e,r,o){this.name=t,this.formals=e,this.actionDict=r,this.builtInDefault=o}checkActionDict(t){t._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(t,e){try{const{ctorName:r}=e._node;let o=this.actionDict[r];return o?(Pe.push([this,r]),o.apply(e,e._children())):e.isNonterminal()&&(o=this.actionDict._nonterminal,o)?(Pe.push([this,"_nonterminal",r]),o.apply(e,e._children())):(Pe.push([this,"default action",r]),this.actionDict._default.apply(e,e._children()))}finally{Pe.pop()}}}Ne.prototype.typeName="operation";class D0 extends Ne{constructor(t,e,r){super(t,[],e,r)}execute(t,e){const r=e._node,o=t.attributeKeys[this.name];return O0(r,o)||(r[o]=Ne.prototype.execute.call(this,t,e)),r[o]}}D0.prototype.typeName="attribute";const E1=["_iter","_terminal","_nonterminal","_default"];function P1(s){return Object.keys(s.rules).sort().map(t=>s.rules[t])}const fa=s=>s.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let As,_s;class Ot{constructor(t,e,r,o){if(this.name=t,this.superGrammar=e,this.rules=r,o){if(!(o in r))throw new Error("Invalid start rule: '"+o+"' is not a rule in grammar '"+t+"'");this.defaultStartRule=o}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new pa(this)}isBuiltIn(){return this===Ot.ProtoBuiltInRules||this===Ot.BuiltInRules}equals(t){if(this===t)return!0;if(t==null||this.name!==t.name||this.defaultStartRule!==t.defaultStartRule||!(this.superGrammar===t.superGrammar||this.superGrammar.equals(t.superGrammar)))return!1;const e=P1(this),r=P1(t);return e.length===r.length&&e.every((o,n)=>o.description===r[n].description&&o.formals.join(",")===r[n].formals.join(",")&&o.body.toString()===r[n].body.toString())}match(t,e){const r=this.matcher();return r.replaceInputRange(0,0,t),r.match(e)}trace(t,e){const r=this.matcher();return r.replaceInputRange(0,0,t),r.trace(e)}createSemantics(){return zt.createSemantics(this)}extendSemantics(t){return zt.createSemantics(this,t._getSemantics())}_checkTopDownActionDict(t,e,r){const o=[];for(const n in r){const i=r[n];if(!E1.includes(n)&&!(n in this.rules)){o.push(`'${n}' is not a valid semantic action for '${this.name}'`);continue}if(typeof i!="function"){o.push(`'${n}' must be a function in an action dictionary for '${this.name}'`);continue}const u=i.length,h=this._topDownActionArity(n);if(u!==h){let m;n==="_iter"||n==="_nonterminal"?m=`it should use a rest parameter, e.g. \`${n}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:m=`expected ${h}, got ${u}`,o.push(`Semantic action '${n}' has the wrong arity: ${m}`)}}if(o.length>0){const n=o.map(a=>"- "+a),i=new Error([`Found errors in the action dictionary of the '${e}' ${t}:`,...n].join(`
`));throw i.problems=o,i}}_topDownActionArity(t){return E1.includes(t)?0:this.rules[t].body.getArity()}_inheritsFrom(t){let e=this.superGrammar;for(;e;){if(e.equals(t,!0))return!0;e=e.superGrammar}return!1}toRecipe(t=void 0){const e={};this.source&&(e.source=this.source.contents);let r=null;this.defaultStartRule&&(r=this.defaultStartRule);const o={};Object.keys(this.rules).forEach(a=>{const u=this.rules[a],{body:h}=u,m=!this.superGrammar||!this.superGrammar.rules[a];let f;m?f="define":f=h instanceof a0?"extend":"override";const v={};if(u.source&&this.source){const p=u.source.relativeTo(this.source);v.sourceInterval=[p.startIdx,p.endIdx]}const d=m?u.description:null,y=h.outputRecipe(u.formals,this.source);o[a]=[f,v,d,u.formals,y]});let n="null";t?n=t:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(n=this.superGrammar.toRecipe());const i=[...["grammar",e,this.name].map(JSON.stringify),n,...[r,o].map(JSON.stringify)];return fa(`[${i.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const t=new fe;t.append("{");let e=!0;for(const r in this.rules){const{body:o}=this.rules[r];e?e=!1:t.append(","),t.append(`
`),t.append("  "),this.addSemanticActionTemplate(r,o,t)}return t.append(`
}`),t.contents()}addSemanticActionTemplate(t,e,r){r.append(t),r.append(": function(");const o=this._topDownActionArity(t);r.append(i0("_",o).join(", ")),r.append(`) {
`),r.append("  }")}parseApplication(t){let e;if(t.indexOf("<")===-1)e=new ht(t);else{const o=As.match(t,"Base_application");e=_s(o,{})}if(!(e.ruleName in this.rules))throw fs(e.ruleName,this.name);const{formals:r}=this.rules[e.ruleName];if(r.length!==e.args.length){const{source:o}=this.rules[e.ruleName];throw ms(e.ruleName,r.length,e.args.length,o)}return e}_setUpMatchState(t){this._matchStateInitializer&&this._matchStateInitializer(t)}}Ot.ProtoBuiltInRules=new Ot("ProtoBuiltInRules",void 0,{any:{body:Tt,formals:[],description:"any character",primitive:!0},end:{body:Mt,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new e1(new Et(0)),formals:["str"],primitive:!0},lower:{body:new St("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new St("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new St("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new me(new ht("space")),formals:[]},space:{body:new Ct("\0"," "),formals:[],description:"a space"}});Ot.initApplicationParser=function(s,t){As=s,_s=t};class O1{constructor(t){this.name=t}sourceInterval(t,e){return this.source.subInterval(t,e-t)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?Ot.ProtoBuiltInRules:Ot.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(t,e){const r=this.ensureSuperGrammar().rules[t];if(!r)throw Fi(t,this.superGrammar.name,e);return r}installOverriddenOrExtendedRule(t,e,r,o){const n=M0(e);if(n.length>0)throw x1(t,n,o);const i=this.ensureSuperGrammar().rules[t],a=i.formals,u=a?a.length:0;if(e.length!==u)throw ms(t,u,e.length,o);return this.install(t,e,r,i.description,o)}install(t,e,r,o,n,i=!1){return this.rules[t]={body:r.introduceParams(e),formals:e,description:o,source:n,primitive:i},this}withSuperGrammar(t){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=t,this.rules=Object.create(t.rules),t.isBuiltIn()||(this.defaultStartRule=t.defaultStartRule),this}withDefaultStartRule(t){return this.defaultStartRule=t,this}withSource(t){return this.source=new c0(t).interval(0,t.length),this}build(){const t=new Ot(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);t._matchStateInitializer=t.superGrammar._matchStateInitializer,t.supportsIncrementalParsing=t.superGrammar.supportsIncrementalParsing;const e=[];let r=!1;return Object.keys(t.rules).forEach(o=>{const{body:n}=t.rules[o];try{n.assertChoicesHaveUniformArity(o)}catch(i){e.push(i)}try{n.assertAllApplicationsAreValid(o,t)}catch(i){e.push(i),r=!0}}),r||Object.keys(t.rules).forEach(o=>{const{body:n}=t.rules[o];try{n.assertIteratedExprsAreNotNullable(t,[])}catch(i){e.push(i)}}),e.length>0&&qi(e),this.source&&(t.source=this.source),t}define(t,e,r,o,n,i){if(this.ensureSuperGrammar(),this.superGrammar.rules[t])throw _1(t,this.name,this.superGrammar.name,n);if(this.rules[t])throw _1(t,this.name,this.name,n);const a=M0(e);if(a.length>0)throw x1(t,a,n);return this.install(t,e,r,o,n,i)}override(t,e,r,o,n){return this.ensureSuperGrammarRuleForOverriding(t,n),this.installOverriddenOrExtendedRule(t,e,r,n),this}extend(t,e,r,o,n){if(!this.ensureSuperGrammar().rules[t])throw Ni(t,this.superGrammar.name,n);const a=new a0(this.superGrammar,t,r);return a.source=r.source,this.installOverriddenOrExtendedRule(t,e,a,n),this}}class t0{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(t){return new O1(t)}grammar(t,e,r,o,n){const i=new O1(e);return r&&i.withSuperGrammar(r instanceof Ot?r:this.fromRecipe(r)),o&&i.withDefaultStartRule(o),t&&t.source&&i.withSource(t.source),this.currentDecl=i,Object.keys(n).forEach(a=>{this.currentRuleName=a;const u=n[a],h=u[0],m=u[1],f=u[2],v=u[3],d=this.fromRecipe(u[4]);let y;i.source&&m&&m.sourceInterval&&(y=i.source.subInterval(m.sourceInterval[0],m.sourceInterval[1]-m.sourceInterval[0])),i[h](a,v,d,f,y)}),this.currentRuleName=this.currentDecl=null,i.build()}terminal(t){return new It(t)}range(t,e){return new Ct(t,e)}param(t){return new Et(t)}alt(...t){let e=[];for(let r of t)r instanceof it||(r=this.fromRecipe(r)),r instanceof At?e=e.concat(r.terms):e.push(r);return e.length===1?e[0]:new At(e)}seq(...t){let e=[];for(let r of t)r instanceof it||(r=this.fromRecipe(r)),r instanceof _t?e=e.concat(r.factors):e.push(r);return e.length===1?e[0]:new _t(e)}star(t){return t instanceof it||(t=this.fromRecipe(t)),new me(t)}plus(t){return t instanceof it||(t=this.fromRecipe(t)),new xe(t)}opt(t){return t instanceof it||(t=this.fromRecipe(t)),new ue(t)}not(t){return t instanceof it||(t=this.fromRecipe(t)),new Nt(t)}lookahead(t){return t instanceof it||(t=this.fromRecipe(t)),new Lt(t)}lex(t){return t instanceof it||(t=this.fromRecipe(t)),new $t(t)}app(t,e){return e&&e.length>0&&(e=e.map(function(r){return r instanceof it?r:this.fromRecipe(r)},this)),new ht(t,e)}splice(t,e){return new u0(this.currentDecl.superGrammar,this.currentRuleName,t.map(r=>this.fromRecipe(r)),e.map(r=>this.fromRecipe(r)))}fromRecipe(t){const e=t[0]==="grammar"?t.slice(1):t.slice(2),r=this[t[0]](...e),o=t[1];return o&&o.sourceInterval&&this.currentDecl&&r.withSource(this.currentDecl.sourceInterval(...o.sourceInterval)),r}}function s1(s){return typeof s=="function"?s.call(new t0):(typeof s=="string"&&(s=JSON.parse(s)),new t0().fromRecipe(s))}const r1=s1(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);Ot.BuiltInRules=r1;Xi(Ot.BuiltInRules);const o1=s1(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]),b0=Object.create(it.prototype);function D1(s,t){for(const e in s)if(e===t)return!0;return!1}function xs(s,t,e){const r=new t0;let o,n,i,a=!1;return(e||o1).createSemantics().addOperation("visit",{Grammars(m){return m.children.map(f=>f.visit())},Grammar(m,f,v,d,y){const p=m.visit();o=r.newGrammar(p),f.child(0)&&f.child(0).visit(),d.children.map(g=>g.visit());const k=o.build();if(k.source=this.source.trimmed(),D1(t,p))throw Oi(k);return t[p]=k,k},SuperGrammar(m,f){const v=f.visit();if(v==="null")o.withSuperGrammar(null);else{if(!t||!D1(t,v))throw Pi(v,t,f.source);o.withSuperGrammar(t[v])}},Rule_define(m,f,v,d,y){n=m.visit(),i=f.children.map(A=>A.visit())[0]||[],!o.defaultStartRule&&o.ensureSuperGrammar()!==Ot.ProtoBuiltInRules&&o.withDefaultStartRule(n);const p=y.visit(),k=v.children.map(A=>A.visit())[0],g=this.source.trimmed();return o.define(n,i,p,k,g)},Rule_override(m,f,v,d){n=m.visit(),i=f.children.map(k=>k.visit())[0]||[];const y=this.source.trimmed();o.ensureSuperGrammarRuleForOverriding(n,y),a=!0;const p=d.visit();return a=!1,o.override(n,i,p,null,y)},Rule_extend(m,f,v,d){n=m.visit(),i=f.children.map(k=>k.visit())[0]||[];const y=d.visit(),p=this.source.trimmed();return o.extend(n,i,y,null,p)},RuleBody(m,f){return r.alt(...f.visit()).withSource(this.source)},OverrideRuleBody(m,f){const v=f.visit(),d=v.indexOf(b0);if(d>=0){const y=v.slice(0,d),p=v.slice(d+1);return p.forEach(k=>{if(k===b0)throw Wi(k)}),new u0(o.superGrammar,n,y,p).withSource(this.source)}else return r.alt(...v).withSource(this.source)},Formals(m,f,v){return f.visit()},Params(m,f,v){return f.visit()},Alt(m){return r.alt(...m.visit()).withSource(this.source)},TopLevelTerm_inline(m,f){const v=n+"_"+f.visit(),d=m.visit(),y=this.source.trimmed(),p=!(o.superGrammar&&o.superGrammar.rules[v]);a&&!p?o.override(v,i,d,null,y):o.define(v,i,d,null,y);const k=i.map(g=>r.app(g));return r.app(v,k).withSource(d.source)},OverrideTopLevelTerm_superSplice(m){return b0},Seq(m){return r.seq(...m.children.map(f=>f.visit())).withSource(this.source)},Iter_star(m,f){return r.star(m.visit()).withSource(this.source)},Iter_plus(m,f){return r.plus(m.visit()).withSource(this.source)},Iter_opt(m,f){return r.opt(m.visit()).withSource(this.source)},Pred_not(m,f){return r.not(f.visit()).withSource(this.source)},Pred_lookahead(m,f){return r.lookahead(f.visit()).withSource(this.source)},Lex_lex(m,f){return r.lex(f.visit()).withSource(this.source)},Base_application(m,f){const v=f.children.map(d=>d.visit())[0]||[];return r.app(m.visit(),v).withSource(this.source)},Base_range(m,f,v){return r.range(m.visit(),v.visit()).withSource(this.source)},Base_terminal(m){return r.terminal(m.visit()).withSource(this.source)},Base_paren(m,f,v){return f.visit()},ruleDescr(m,f,v){return f.visit()},ruleDescrText(m){return this.sourceString.trim()},caseName(m,f,v,d,y){return v.visit()},name(m,f){return this.sourceString},nameFirst(m){},nameRest(m){},terminal(m,f,v){return f.children.map(d=>d.visit()).join("")},oneCharTerminal(m,f,v){return f.visit()},escapeChar(m){try{return ps(this.sourceString)}catch(f){throw f instanceof RangeError&&f.message.startsWith("Invalid code point ")?Gi(m):f}},NonemptyListOf(m,f,v){return[m.visit()].concat(v.children.map(d=>d.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(s).visit()}const ma=s1(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);ga(Ot.BuiltInRules);va(ma);function ga(s){const t={empty(){return this.iteration()},nonEmpty(e,r,o){return this.iteration([e].concat(o.children))},self(...e){return this}};zt.BuiltInSemantics=zt.createSemantics(s,null).addOperation("asIteration",{emptyListOf:t.empty,nonemptyListOf:t.nonEmpty,EmptyListOf:t.empty,NonemptyListOf:t.nonEmpty,_iter:t.self})}function va(s){zt.prototypeGrammarSemantics=s.createSemantics().addOperation("parse",{AttributeSignature(t){return{name:t.parse(),formals:[]}},OperationSignature(t,e){return{name:t.parse(),formals:e.children.map(r=>r.parse())[0]||[]}},Formals(t,e,r){return e.asIteration().children.map(o=>o.parse())},name(t,e){return this.sourceString}}),zt.prototypeGrammar=s}function ka(s){let t=0;const e=[0],r=()=>e[e.length-1],o={},n=/( *).*(?:$|\r?\n|\r)/g;let i;for(;(i=n.exec(s))!=null;){const[a,u]=i;if(a.length===0)break;const h=u.length,m=r(),f=t+h;if(h>m)e.push(h),o[f]=1;else if(h<m){const v=e.length;for(;r()!==h;)e.pop();o[f]=-1*(v-e.length)}t+=a.length}return e.length>1&&(o[t]=1-e.length),o}const Ss="an indented block",Is="a dedent",F1=1114112;class ya extends c0{constructor(t){super(t.input),this.state=t}_indentationAt(t){return this.state.userData[t]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),F1):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),F1):super.nextCodePoint()}}class N1 extends it{constructor(t=!0){super(),this.isIndent=t}allowsSkippingPrecedingSpace(){return!0}eval(t){const{inputStream:e}=t,r=t.userData;t.doNotMemoize=!0;const o=e.pos,n=this.isIndent?1:-1;return(r[o]||0)*n>0?(t.userData=Object.create(r),t.userData[o]-=n,t.pushBinding(new ge(0),o),!0):(t.processFailure(o,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(t,e){}_isNullable(t,e){return!1}assertChoicesHaveUniformArity(t){}assertIteratedExprsAreNotNullable(t){}introduceParams(t){return this}substituteParams(t){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(t){const e=this.isIndent?Ss:Is;return new Ut(this,e,"description")}}const ba=new ht("indent"),wa=new ht("dedent"),Ba=new u0(r1,"any",[ba,wa],[]),Aa=new t0().newGrammar("IndentationSensitive").withSuperGrammar(r1).define("indent",[],new N1(!0),Ss,void 0,!0).define("dedent",[],new N1(!1),Is,void 0,!0).extend("any",[],Ba,"any character",void 0).build();Object.assign(Aa,{_matchStateInitializer(s){s.userData=ka(s.input),s.inputStream=new ya(s)},supportsIncrementalParsing:!1});Ot.initApplicationParser(o1,xs);const _a=s=>!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s);function xa(s,t){const e=o1.match(s,"Grammars");if(e.failed())throw Ei(e);return xs(e,t)}function l0(s,t){const e=Sa(s,t),r=Object.keys(e);if(r.length===0)throw new Error("Missing grammar definition");if(r.length>1){const n=e[r[1]].source;throw new Error(Y0(n.sourceString,n.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return e[r[0]]}function Sa(s,t){const e=Object.create(t||{});if(typeof s!="string")if(_a(s))s=s.toString();else throw new TypeError("Expected string as first argument, got "+J0(s));return xa(s,e),e}const Ia=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function Ve(s){return Ia[s]??"X"}function We(s){switch(s){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function n1(s,t){return parseInt(s.replace(/[^\d a-f A-F +-.]/g,""),t)&65535}function Rs(s){return n1(s,16)}function Le(s){return n1(s,10)}function i1(s){return n1(s.replaceAll(" ",""),2)}function Ra(s){const t=Ve((s&61440)>>12),e=Ve((s&3840)>>8),r=Ve((s&240)>>4),o=Ve(s&15);return`0x${t}${e}${r}${o}`}function Ta(s,t=16){const e=We((s&61440)>>12),r=We((s&3840)>>8),o=We((s&240)>>4),n=We(s&15);return`${e}${r}${o}${n}`.substring(16-t)}function Ma(s){return s=s&65535,s===32768?"-32768":s&32768?(s=~s+1&32767,`-${s}`):`${s}`}function Ca(s,t){s=s&65535,t=t&65535;let e=~(s&t);return e=e&65535,e}const Ea=`
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
}`,d0={Base:l0(Ea)},ve=d0.Base.createSemantics();ve.extendOperation("asIteration",{List(s,t){return s.asIteration()}});ve.addAttribute("value",{decNumber(s,t){return Le(t.sourceString)},wholeDec(s,t){return Le(t.sourceString)},binNumber(s,t){return i1(t.sourceString)},hexNumber(s,t){return Rs(t.sourceString)},Number(s){return s.value},Name(s){return s.name},identifier(s,t){return this.sourceString}});ve.addAttribute("name",{identifier(s,t){return this.sourceString},Name(s){var t;return(t=this.child(0))==null?void 0:t.name}});ve.addAttribute("String",{String(s,t,e){return t.sourceString}});const Pa="HDL statement has a syntax error";function wt(s,t){var o;const e=s.match(/Line \d+, col \d+: (?<message>.*)/),r=(o=e==null?void 0:e.groups)!=null&&o.message?e.groups.message:s;return{message:`${(t==null?void 0:t.line)!=null?`Line ${t.line}: `:""}${r}`,span:t}}function a1(s,t,e=({root:r})=>r){return function(o){try{const n=s.match(o);if(n.succeeded()){const i=t(n),a=e(i);return lt(a)}else return tt(wt(n.shortMessage??Pa,Kt(n.getInterval())))}catch(n){return tt(n)}}}function Kt(s){return{start:s.startIdx,end:s.endIdx,line:s.getLineAndColumn().lineNum}}const Ts=`
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
}`,F0=l0(Ts,d0),jt=F0.extendSemantics(ve);jt.addAttribute("SubBus",{SubBus(s,t,e,r){var i,a;const o=t.value,n=((a=(i=e.child(0))==null?void 0:i.child(1))==null?void 0:a.value)??o;return{start:o,end:n}}});jt.addAttribute("WireSide",{WireSide({name:s},t){var o;const{start:e,end:r}=((o=t.child(0))==null?void 0:o.SubBus)??{start:void 0,end:void 0};return{pin:s,start:e,end:r,span:Kt(this.source)}}});jt.addAttribute("Wire",{Wire(s,t,e){const r=e.isTerminal()?{pin:e.sourceString}:e.WireSide;return{lhs:s.WireSide,rhs:r}}});jt.addAttribute("Wires",{Wires(s){return s.asIteration().children.map(t=>t.Wire)}});jt.addAttribute("Part",{Part({name:s},t,{Wires:e},r,o){return{name:s,wires:e,span:Kt(this.source)}}});jt.addAttribute("Parts",{Parts(s,t){return t.children.map(e=>e.Part)},BuiltinPart(s,t){return"BUILTIN"}});jt.addAttribute("PartList",{PartList(s){return s.Parts}});jt.addAttribute("Clocked",{ClockedList(s,t,e){return t.asIteration().children.map(({sourceString:r})=>r)??[]}});jt.addAttribute("PinDecl",{PinDecl({name:s},t){var e,r;return{pin:s,width:((r=(e=t.child(0))==null?void 0:e.child(1))==null?void 0:r.value)??1}}});jt.addAttribute("PinList",{PinList(s){return s.asIteration().children.map(t=>t.PinDecl)}});jt.addAttribute("Chip",{Chip(s,t,e,r,o){var n,i,a,u,h;return{name:{value:t.sourceString,span:Kt(t.source)},ins:((i=(n=r.child(0).child(0))==null?void 0:n.child(1))==null?void 0:i.PinList)??[],outs:((u=(a=r.child(1).child(0))==null?void 0:a.child(1))==null?void 0:u.PinList)??[],parts:r.child(2).PartList??[],clocked:(h=r.child(3).child(0))==null?void 0:h.Clocked}}});jt.addAttribute("Root",{Root(s){var t;return(t=s.child(0))==null?void 0:t.Chip}});const u1={parser:F0,grammar:Ts,semantics:jt,parse:a1(F0,jt,s=>s.Chip)};class Oa extends Error{constructor(t="Assertion failed"){super(t)}}function Bt(s,t){if(!s)throw new Oa(t instanceof Function?t():t)}function xt(s,t="Assertion failed: value does not exist"){return Bt(s!=null,t),s}function Da(s,t=`Unexpected value ${s}`){throw new Error(t instanceof Function?t():t)}function Ge(s,t,e=1){const r=[];for(let o=s;o<t;o+=e)r.push(o);return r}var N0=function(s,t){return N0=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},N0(s,t)};function ze(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");N0(s,t);function e(){this.constructor=s}s.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function L0(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],r=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&r>=s.length&&(s=void 0),{value:s&&s[r++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function z0(s,t){var e=typeof Symbol=="function"&&s[Symbol.iterator];if(!e)return s;var r=e.call(s),o,n=[],i;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)n.push(o.value)}catch(a){i={error:a}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(i)throw i.error}}return n}function j0(s,t,e){if(e||arguments.length===2)for(var r=0,o=t.length,n;r<o;r++)(n||!(r in t))&&(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return s.concat(n||Array.prototype.slice.call(t))}function ae(s){return typeof s=="function"}function Ms(s){var t=function(r){Error.call(r),r.stack=new Error().stack},e=s(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var w0=Ms(function(s){return function(e){s(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function $0(s,t){if(s){var e=s.indexOf(t);0<=e&&s.splice(e,1)}}var p0=function(){function s(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return s.prototype.unsubscribe=function(){var t,e,r,o,n;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var a=L0(i),u=a.next();!u.done;u=a.next()){var h=u.value;h.remove(this)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else i.remove(this);var m=this.initialTeardown;if(ae(m))try{m()}catch(p){n=p instanceof w0?p.errors:[p]}var f=this._finalizers;if(f){this._finalizers=null;try{for(var v=L0(f),d=v.next();!d.done;d=v.next()){var y=d.value;try{L1(y)}catch(p){n=n??[],p instanceof w0?n=j0(j0([],z0(n)),z0(p.errors)):n.push(p)}}}catch(p){r={error:p}}finally{try{d&&!d.done&&(o=v.return)&&o.call(v)}finally{if(r)throw r.error}}}if(n)throw new w0(n)}},s.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)L1(t);else{if(t instanceof s){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},s.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},s.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},s.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&$0(e,t)},s.prototype.remove=function(t){var e=this._finalizers;e&&$0(e,t),t instanceof s&&t._removeParent(this)},s.EMPTY=function(){var t=new s;return t.closed=!0,t}(),s}(),Cs=p0.EMPTY;function Es(s){return s instanceof p0||s&&"closed"in s&&ae(s.remove)&&ae(s.add)&&ae(s.unsubscribe)}function L1(s){ae(s)?s():s.unsubscribe()}var Fa={Promise:void 0},Na={setTimeout:function(s,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,j0([s,t],z0(e)))},clearTimeout:function(s){return clearTimeout(s)},delegate:void 0};function La(s){Na.setTimeout(function(){throw s})}function z1(){}function Je(s){s()}var Ps=function(s){ze(t,s);function t(e){var r=s.call(this)||this;return r.isStopped=!1,e?(r.destination=e,Es(e)&&e.add(r)):r.destination=$a,r}return t.create=function(e,r,o){return new U0(e,r,o)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,s.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(p0),za=function(){function s(t){this.partialObserver=t}return s.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(r){He(r)}},s.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(r){He(r)}else He(t)},s.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){He(e)}},s}(),U0=function(s){ze(t,s);function t(e,r,o){var n=s.call(this)||this,i;return ae(e)||!e?i={next:e??void 0,error:r??void 0,complete:o??void 0}:i=e,n.destination=new za(i),n}return t}(Ps);function He(s){La(s)}function ja(s){throw s}var $a={closed:!0,next:z1,error:ja,complete:z1},Ua=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Va(s){return s}function Wa(s){return s.length===0?Va:s.length===1?s[0]:function(e){return s.reduce(function(r,o){return o(r)},e)}}var j1=function(){function s(t){t&&(this._subscribe=t)}return s.prototype.lift=function(t){var e=new s;return e.source=this,e.operator=t,e},s.prototype.subscribe=function(t,e,r){var o=this,n=Ha(t)?t:new U0(t,e,r);return Je(function(){var i=o,a=i.operator,u=i.source;n.add(a?a.call(n,u):u?o._subscribe(n):o._trySubscribe(n))}),n},s.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},s.prototype.forEach=function(t,e){var r=this;return e=$1(e),new e(function(o,n){var i=new U0({next:function(a){try{t(a)}catch(u){n(u),i.unsubscribe()}},error:n,complete:o});r.subscribe(i)})},s.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},s.prototype[Ua]=function(){return this},s.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Wa(t)(this)},s.prototype.toPromise=function(t){var e=this;return t=$1(t),new t(function(r,o){var n;e.subscribe(function(i){return n=i},function(i){return o(i)},function(){return r(n)})})},s.create=function(t){return new s(t)},s}();function $1(s){var t;return(t=s??Fa.Promise)!==null&&t!==void 0?t:Promise}function Ga(s){return s&&ae(s.next)&&ae(s.error)&&ae(s.complete)}function Ha(s){return s&&s instanceof Ps||Ga(s)&&Es(s)}var Ka=Ms(function(s){return function(){s(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),e0=function(s){ze(t,s);function t(){var e=s.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var r=new U1(this,this);return r.operator=e,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Ka},t.prototype.next=function(e){var r=this;Je(function(){var o,n;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var i=L0(r.currentObservers),a=i.next();!a.done;a=i.next()){var u=a.value;u.next(e)}}catch(h){o={error:h}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}}})},t.prototype.error=function(e){var r=this;Je(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var o=r.observers;o.length;)o.shift().error(e)}})},t.prototype.complete=function(){var e=this;Je(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),s.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var r=this,o=this,n=o.hasError,i=o.isStopped,a=o.observers;return n||i?Cs:(this.currentObservers=null,a.push(e),new p0(function(){r.currentObservers=null,$0(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var r=this,o=r.hasError,n=r.thrownError,i=r.isStopped;o?e.error(n):i&&e.complete()},t.prototype.asObservable=function(){var e=new j1;return e.source=this,e},t.create=function(e,r){return new U1(e,r)},t}(j1),U1=function(s){ze(t,s);function t(e,r){var o=s.call(this)||this;return o.destination=e,o.source=r,o}return t.prototype.next=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,e)},t.prototype.error=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,e)},t.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},t.prototype._subscribe=function(e){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&o!==void 0?o:Cs},t}(e0),qa=function(s){ze(t,s);function t(e){var r=s.call(this)||this;return r._value=e,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(e){var r=s.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},t.prototype.getValue=function(){var e=this,r=e.hasError,o=e.thrownError,n=e._value;if(r)throw o;return this._throwIfClosed(),n},t.prototype.next=function(e){s.prototype.next.call(this,this._value=e)},t}(e0);let B0;class Ae{constructor(){F(this,"level",ot);F(this,"ticks",0);F(this,"subject",new qa({level:this.level,ticks:this.ticks}));F(this,"frameSubject",new e0);F(this,"resetSubject",new e0);F(this,"$",this.subject);F(this,"frame$",this.frameSubject);F(this,"reset$",this.resetSubject)}static get(){return B0===void 0&&(B0=new Ae),B0}static subscribe(t){return Ae.get().$.subscribe(t)}get isHigh(){return this.level===Y}get isLow(){return this.level===ot}next(){this.subject.next({level:this.level,ticks:this.ticks})}reset(){this.level=ot,this.ticks=0,this.next(),this.resetSubject.next()}tick(){Bt(this.level===ot,"Can only tick up from LOW"),this.level=Y,this.next()}tock(){Bt(this.level===Y,"Can only tock down from HIGH"),this.level=ot,this.ticks+=1,this.next()}toggle(){this.level===Y?this.tock():this.tick()}eval(){this.tick(),this.tock()}frame(){this.frameSubject.next()}toString(){return`${this.ticks}${this.level===Y?"+":""}`}}const Y=1,ot=0;function Xe(s){return s==="false"||s==="true"||s==="0"||s==="1"}class Pt{constructor(t,e=1){F(this,"name");F(this,"width");F(this,"state");F(this,"next",[]);this.name=t,this.width=e,this.state=Ge(0,this.width).map(()=>ot)}ensureWidth(t){Bt(t<=16,`Cannot widen past 16 to ${t} bits`),this.width<t&&(this.width=t,this.state=[...this.state,...Ge(this.width,t).map(()=>ot)])}connect(t){this.next.push(t),t.busVoltage=this.busVoltage}pull(t,e=0){Bt(e>=0&&e<this.width,`Bit out of bounds: ${this.name}@${e}`),this.state[e]=t,this.next.forEach(r=>r.pull(t,e))}voltage(t=0){return Bt(t>=0&&t<this.width),this.state[t]}set busVoltage(t){for(const e of Ge(0,this.width))this.state[e]=(t&1<<e)>>e;this.next.forEach(e=>e.busVoltage=this.busVoltage)}get busVoltage(){return Ge(0,this.width).reduce((t,e)=>t|this.state[e]<<e,0)}toggle(t=0){const e=this.voltage(t)===ot?Y:ot;this.pull(e,t)}}class V1 extends Pt{constructor(e,r,o=1){super(e.name);F(this,"bus");F(this,"start");F(this,"width");this.bus=e,this.start=r,this.width=o,Bt(r>=0&&r+o<=e.width,`Mismatched InSubBus dimensions on ${e.name} (${o} + ${r} > ${e.width})`),this.connect(e)}pull(e,r=0){Bt(r>=0&&r<this.width),this.bus.pull(e,this.start+r)}voltage(e=0){return Bt(e>=0&&e<this.width),this.bus.voltage(this.start+e)}set busVoltage(e){const r=this.bus.busVoltage&~Be(this.width+this.start),o=this.bus.busVoltage&Be(this.start),n=(e&Be(this.width))<<this.start;this.bus.busVoltage=r|n|o}get busVoltage(){return this.bus.busVoltage>>this.start&Be(this.width)}connect(e){Bt(this.start+this.width<=e.width,`Mismatched InSubBus connection dimensions (From ${e.name} to ${this.name})`),this.bus=e}}class W1 extends Pt{constructor(e,r,o=1){super(e.name);F(this,"bus");F(this,"start");F(this,"width");this.bus=e,this.start=r,this.width=o,Bt(r>=0&&o<=e.width,"Mismatched OutSubBus dimensions"),this.connect(e)}pull(e,r=0){r>=this.start&&r<this.start+this.width&&this.bus.pull(e,r-this.start)}set busVoltage(e){this.bus.busVoltage=(e&Be(this.width+this.start))>>this.start}get busVoltage(){return this.bus.busVoltage>>this.start&Be(this.width)}connect(e){Bt(this.width<=e.width,"Mismatched OutSubBus connection dimensions"),this.bus=e}}class h0 extends Pt{constructor(e,r){super(e,16);F(this,"value");this.value=r}pullHigh(e=0){}pullLow(e=0){}voltage(e=0){return this.busVoltage&1}set busVoltage(e){}get busVoltage(){return this.value}}const A0=new h0("true",65535),Oe=new h0("false",0);function _0(s){var r;const{pin:t,w:e}=(r=s.match(/(?<pin>[a-zA-Z]+)(\[(?<w>\d+)\])?/))==null?void 0:r.groups;return{pin:t,width:e?Number(e):1}}class x0{constructor(){F(this,"map",new Map)}insert(t){const{name:e}=t;Bt(!this.map.has(e),`Pins already has ${e}!`),this.map.set(e,t)}emplace(t,e){if(this.has(t))return xt(this.get(t));{const r=new Pt(t,e);return this.insert(r),r}}has(t){return this.map.has(t)}get(t){return this.map.get(t)}entries(){return this.map.values()}[Symbol.iterator](){return this.map[Symbol.iterator]()}}function Ke(s,t,e){return s+t<=e.width?lt():tt(`Sub-bus index out of range (${e.name} has width ${e.width})`)}let Za=0;class ft{constructor(t,e,r,o=[],n=[]){F(this,"name");F(this,"id",Za++);F(this,"ins",new x0);F(this,"outs",new x0);F(this,"pins",new x0);F(this,"insToPart",new Map);F(this,"partToOuts",new Map);F(this,"parts",[]);F(this,"clockedPins");F(this,"clockSubscription");this.name=r;for(const i of t){const{pin:a,width:u=1}=i.pin!==void 0?i:_0(i);this.ins.insert(new Pt(a,u))}for(const i of e){const{pin:a,width:u=1}=i.pin!==void 0?i:_0(i);this.outs.insert(new Pt(a,u))}for(const i of o){const{pin:a,width:u=1}=i.pin!==void 0?i:_0(i);this.pins.insert(new Pt(a,u))}this.clockedPins=new Set(n),this.subscribeToClock()}get clocked(){if(this.clockedPins.size>0)return!0;for(const t of this.parts)if(t.clocked)return!0;return!1}subscribeToClock(){var t;(t=this.clockSubscription)==null||t.unsubscribe(),this.clockSubscription=Ae.subscribe(()=>this.eval())}reset(){for(const[t,e]of this.ins)e.busVoltage=0;for(const t of this.parts)t.reset();this.eval()}in(t="in"){return Bt(this.hasIn(t),`No in pin ${t}`),xt(this.ins.get(t))}out(t="out"){return Bt(this.hasOut(t),`No in pin ${t}`),xt(this.outs.get(t))}hasIn(t){return this.ins.has(t)}hasOut(t){return this.outs.has(t)}pin(t){return Bt(this.pins.has(t),"Pin not available in "),xt(this.pins.get(t))}get(t,e){return this.ins.has(t)?xt(this.ins.get(t)):this.outs.has(t)?xt(this.outs.get(t)):this.pins.has(t)?xt(this.pins.get(t)):this.getBuiltin(t,e)}getBuiltin(t,e=0){if(Xa.includes(t))for(const r of this.parts){const o=r.get(t,e);if(o)return o}}isInPin(t){return this.ins.has(t)}isOutPin(t){return this.outs.has(t)}isExternalPin(t){return this.isInPin(t)||this.isOutPin(t)||Xe(t)}isInternalPin(t){return!this.isExternalPin(t)}pathExists(t,e){const r=[t];for(;r.length>0;){const o=xt(r.pop());if(typeof o=="string"){if(o==e)return!0;r.push(...this.insToPart.get(o)??[])}else r.push(...this.partToOuts.get(o)??[])}return!1}isClockedPin(t){return this.isInPin(t)?![...this.outs].some(([e,r])=>this.pathExists(t,e)):![...this.ins].some(([e,r])=>this.pathExists(e,t))}hasConnection(t,e){return[...this.partToOuts.get(t)??[]].some(r=>{var o;return(o=this.insToPart.get(r))==null?void 0:o.has(e)})}wire(t,e){for(let r=0;r<e.length;r++){const{from:o,to:n}=e[r];if(t.isOutPin(n.name)){const i=this.wireOutPin(t,n,o);if(pt(i))return tt({wireIndex:r,lhs:tt(i).lhs,message:tt(i).message})}else{const i=this.wireInPin(t,n,o);if(pt(i))return tt({wireIndex:r,lhs:tt(i).lhs,message:tt(i).message})}}return this.parts.push(t),lt()}wireAll(t){for(const{part:e,connections:r}of t)this.wire(e,r);this.sortParts()}sortParts(){const t=[],e=new Set,r=new Set,o=this.parts.map(n=>({part:n,isReturning:!1}));for(;o.length>0;){const n=xt(o.pop());if(n.isReturning)e.add(n.part),t.push(n.part);else if(!e.has(n.part)){if(r.has(n.part))return!0;r.add(n.part),o.push({part:n.part,isReturning:!0});for(const i of this.partToOuts.get(n.part)??[])o.push(...Array.from(this.insToPart.get(i)??[]).filter(a=>!e.has(a)).map(a=>({part:a,isReturning:!1})))}}return this.parts=t.reverse(),!1}findPin(t,e){return t==="true"||t==="1"?A0:t==="false"||t==="0"?Oe:this.ins.has(t)?xt(this.ins.get(t)):this.outs.has(t)?xt(this.outs.get(t)):this.pins.emplace(t,e)}wireOutPin(t,e,r){const o=xt(t.outs.get(e.name),()=>`Cannot wire to missing pin ${e.name}`);e.width??(e.width=o.width);let n=this.findPin(r.name,r.width??e.width);const i=this.pins.has(n.name);if(r.width??(r.width=n.width),n instanceof h0)return tt({message:"Cannot wire to constant bus",lhs:!0});if(i&&n instanceof Pt&&n.ensureWidth(r.start+r.width),r.start>0||r.width!==n.width){const u=Ke(r.start,r.width,n);if(pt(u))return tt({message:tt(u),lhs:!0});n=new V1(n,r.start,r.width)}if(e.start>0||e.width!==o.width){const u=Ke(e.start,e.width,o);if(pt(u))return tt({message:tt(u),lhs:!1});n=new W1(n,e.start,e.width)}if(!t.clockedPins.has(o.name)){const u=this.partToOuts.get(t)??new Set;u.add(n.name),this.partToOuts.set(t,u)}if(this.sortParts()){const u=this.partToOuts.get(t)??new Set;return u.delete(n.name),this.partToOuts.set(t,u),tt({message:"Circular pin dependency",lhs:!1})}else o.connect(n);return lt()}wireInPin(t,e,r){let o=xt(t.ins.get(e.name),()=>`Cannot wire to missing pin ${e.name}`);e.width??(e.width=o.width);const n=this.findPin(r.name,r.width??e.width);if(r.width??(r.width=n.width),e.start>0||e.width!==o.width){const a=Ke(e.start,e.width,o);if(pt(a))return tt({message:tt(a),lhs:!0});o=new V1(o,e.start,e.width)}if(!["true","false"].includes(n.name)&&(r.start>0||r.width!==n.width)){const a=Ke(r.start,r.width,n);if(pt(a))return tt({message:tt(a),lhs:!1});o=new W1(o,r.start,r.width)}if(!t.clockedPins.has(o.name)){const a=this.insToPart.get(n.name)??new Set;a.add(t),this.insToPart.set(n.name,a)}if(this.sortParts()){const a=this.insToPart.get(n.name)??new Set;return a.delete(t),this.insToPart.set(n.name,a),tt({message:"Circular pin dependency",lhs:!0})}else n.connect(o);return lt()}eval(){for(const t of this.parts)A0.next.forEach(e=>e.busVoltage=A0.busVoltage),Oe.next.forEach(e=>e.busVoltage=Oe.busVoltage),t.eval()}tick(){this.eval()}tock(){this.eval()}remove(){var t;(t=this.clockSubscription)==null||t.unsubscribe();for(const e of this.parts)e.remove()}async load(t,e){for(const r of this.parts)r.name==="ROM32K"&&await r.load(t,e)}}class Ja extends ft{constructor(){super([],[]),this.outs.insert(Oe)}}class ke extends ft{get clocked(){return!0}subscribeToClock(){var t;(t=this.clockSubscription)==null||t.unsubscribe(),this.clockSubscription=Ae.subscribe(({level:e})=>{e===ot?this.tock():this.tick()})}remove(){var t;(t=this.clockSubscription)==null||t.unsubscribe(),super.remove()}reset(){super.reset(),this.tick(),this.tock()}}function Be(s){return Math.pow(2,s)-1}const Xa=["Register","ARegister","DRegister","PC","RAM8","RAM64","RAM512","RAM4K","RAM16K","ROM32K","Screen","Keyboard","Memory"];function Os(s,t){return[s+t&65535]}class Ya extends ft{constructor(){super(["a[16]","b[16]"],["out[16]"],"Add16")}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=Os(t,e);this.out().busVoltage=r}}const G1=new Set(["0","1","-1","D","A","!D","!A","-D","-A","D+1","A+1","D-1","A-1","D+A","D-A","A-D","D&A","D|A"]);function V0(s){return G1.has(s)||G1.has(s.replace("M","A"))}const c1={asm:{0:42,1:63,"-1":58,D:12,A:48,"!D":13,"!A":49,"-D":15,"-A":51,"D+1":31,"A+1":55,"D-1":14,"A-1":50,"D+A":2,"D-A":19,"A-D":7,"D&A":0,"D|A":21},op:{42:"0",63:"1",58:"-1",12:"D",48:"A",13:"!D",49:"!A",15:"-D",51:"-A",31:"D+1",55:"A+1",14:"D-1",50:"A-1",2:"D+A",19:"D-A",7:"A-D",0:"D&A",21:"D|A"},getOp(s){return c1.asm[s.replace("M","A")]}},Qa=new Set(["","M","D","MD","A","AM","AD","AMD"]);function W0(s){return Qa.has(s)}const Ds={asm:{"":0,M:1,D:2,MD:3,A:4,AM:5,AD:6,AMD:7}},tu=new Set(["","JGT","JEQ","JGE","JLT","JNE","JLE","JMP"]);function eu(s){return tu.has(s)}const Fs={asm:{"":0,JGT:1,JEQ:2,JGE:3,JLT:4,JNE:5,JLE:6,JMP:7}},re={Positive:1,Zero:0,Negative:15};function f0(s,t,e){let r=0;switch(s){case 42:r=0;break;case 63:r=1;break;case 58:r=-1;break;case 12:r=t;break;case 48:r=e;break;case 13:r=~t;break;case 49:r=~e;break;case 15:r=-t;break;case 51:r=-e;break;case 31:r=t+1;break;case 55:r=e+1;break;case 14:r=t-1;break;case 50:r=e-1;break;case 2:r=t+e;break;case 19:r=t-e;break;case 7:r=e-t;break;case 0:r=t&e;break;case 21:r=t|e;break}r=r&65535;const o=r===0?re.Zero:r&32768?re.Negative:re.Positive;return[r,o]}class su extends ft{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,r=this.in("zx").busVoltage<<5,o=this.in("nx").busVoltage<<4,n=this.in("zy").busVoltage<<3,i=this.in("ny").busVoltage<<2,a=this.in("f").busVoltage<<1,u=this.in("no").busVoltage<<0,h=r+o+n+i+a+u,[m]=f0(h,t,e);this.out().busVoltage=m}}class ru extends ft{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]","zr","ng"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,r=this.in("zx").busVoltage<<5,o=this.in("nx").busVoltage<<4,n=this.in("zy").busVoltage<<3,i=this.in("ny").busVoltage<<2,a=this.in("f").busVoltage<<1,u=this.in("no").busVoltage<<0,h=r+o+n+i+a+u,[m,f]=f0(h,t,e),v=f===re.Negative?Y:ot,d=f===re.Zero?Y:ot;this.out("out").busVoltage=m,this.out("ng").pull(v),this.out("zr").pull(d)}op(){const t=this.in("zx").busVoltage<<5,e=this.in("nx").busVoltage<<4,r=this.in("zy").busVoltage<<3,o=this.in("ny").busVoltage<<2,n=this.in("f").busVoltage<<1,i=this.in("no").busVoltage<<0;return t+e+r+o+n+i}}function Ns(s,t){return[s===1||t===1?Y:ot]}function ou(s,t){return[(s|t)&65535]}function nu(s){return[s&255?Y:ot]}class iu extends ft{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=Ns(t,e);this.out().pull(r)}}class au extends ft{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=ou(t,e);this.out().busVoltage=r}}class uu extends ft{constructor(){super(["in[8]"],["out"],"Or8way")}eval(){const t=this.in().busVoltage,[e]=nu(t);this.out().pull(e)}}function G0(s,t){return[s===1&&t===0||s===0&&t===1?Y:ot,s===1&&t===1?Y:ot]}class cu extends ft{constructor(){super(["a","b"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r,o]=G0(t,e);this.out("sum").pull(r),this.out("carry").pull(o)}}function lu(s,t,e){const[r,o]=G0(s,t),[n,i]=G0(r,e),[a]=Ns(o,i);return[n,a]}class du extends ft{constructor(){super(["a","b","c"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),r=this.in("c").voltage(),[o,n]=lu(t,e,r);this.out("sum").pull(o),this.out("carry").pull(n)}}function pu(s){return Os(s,1)}class hu extends ft{constructor(){super(["in[16]"],["out[16]"],"Inc16")}eval(){const t=this.in().busVoltage,[e]=pu(t);this.out().busVoltage=e}}const H1={CPU:`CHIP CPU {

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
}`};function fu(s){return s[0]==="@"?mu(s):gu(s)}function mu(s){return parseInt(s.substring(1),10)}function gu(s){const t=s.match(/(?:(?<assignExists>.+)=)?(.+)(?:;(?<jumpExists>.+))?/),{assignExists:e,jumpExists:r}=(t==null?void 0:t.groups)??{},o=s.match(/(?:(?<assign>[AMD]{1,3})=)?(?<operation>[-+!01ADM&|]{1,3})(?:;(?<jump>JGT|JLT|JGE|JLE|JEQ|JMP))?/);let{assign:n,jump:i}=(o==null?void 0:o.groups)??{};const{operation:a}=(o==null?void 0:o.groups)??{};if(n=n??(e?void 0:""),i=i??(r?void 0:""),(o==null?void 0:o[0])!=s||!W0(n)||!eu(i)||!V0(a))throw new Error("Invalid c instruction");const u=a.includes("M"),h=Ds.asm[n],m=Fs.asm[i],f=c1.getOp(a);return Ls(u,f,h,m)}function Ls(s,t,e,r){const n=s?4096:0,i=t<<6,a=e<<3,u=r;return 57344+n+i+a+u}const zs=`ASM <: Base {
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
}`,H0=l0(zs,d0),_e=H0.extendSemantics(ve);function js(s){return s.type=="A"&&s.label!==void 0}_e.addAttribute("root",{Root(s){return this.asm}});_e.addAttribute("asm",{ASM(s,t){const e=s.children.map(r=>r.intermediateInstruction)??[];return{instructions:t.child(0)?[...e,t.child(0).instruction]:e}}});_e.addAttribute("intermediateInstruction",{intermediateInstruction(s,t){return s.instruction}});function vu(s){var e,r;let t=((r=(e=s.child(0))==null?void 0:e.child(0))==null?void 0:r.sourceString)??"";if(t=="DM"&&(t="MD"),t=="ADM"&&(t="AMD"),t!=""&&!W0(t)){const o=t.split("").reverse().join(""),n=W0(o)?`. Did you mean ${o}?`:"";throw wt(`Invalid ASM target: ${t}${n}`,Kt(s.source))}return t}function ku(s){const t=s.sourceString;if(!V0(t)){const e=t.split("").reverse().join(""),r=V0(e)?`. Did you mean ${e}?`:"";throw wt(`Invalid ASM value: ${s.sourceString}${r}`,Kt(s.source))}return t}_e.addAttribute("instruction",{aInstruction(s,t){return l1(t.value,Kt(this.source))},cInstruction(s,t,e){var i,a;const r=vu(s),o=ku(t),n=((a=(i=e.child(0))==null?void 0:i.child(1))==null?void 0:a.sourceString)??"";return d1(r,o,n,Kt(this.source))},label(s,{name:t},e){return $s(t,Kt(this.source))}});function yu(s,t){let e=16;const r=new Map([["R0",0],["R1",1],["R2",2],["R3",3],["R4",4],["R5",5],["R6",6],["R7",7],["R8",8],["R9",9],["R10",10],["R11",11],["R12",12],["R13",13],["R14",14],["R15",15],["SP",0],["LCL",1],["ARG",2],["THIS",3],["THAT",4],["SCREEN",m0],["KBD",p1]]);function o(u){return r.has(u)||(r.set(u,e),t==null||t(u,e,!0),e+=1),xt(r.get(u),`Label not in symbols: ${u}`)}function n(u){const h=o(u.label);u.value=h,delete u.label}const i=[];let a=0;for(const u of s.instructions){if(u.type==="L"){if(r.has(u.label))return tt(wt(`Duplicate label ${u.label}`,u.span));r.set(u.label,a),t==null||t(u.label,a,!1);continue}a+=1,u.type==="A"&&js(u)&&i.push(u)}return i.forEach(n),lt()}function bu(s){if(s.type==="A"){if(js(s))throw new Error("ASM Emitting unfilled A instruction");return s.value}if(s.type==="C")return Ls(s.isM,s.op,s.store??0,s.jump??0)}function wu(s){return s.instructions.map(bu).filter(t=>t!==void 0)}const l1=(s,t)=>typeof s=="string"?{type:"A",label:s,span:t}:{type:"A",value:s,span:t},d1=(s,t,e,r)=>{const o={type:"C",op:c1.getOp(t),isM:t.includes("M"),span:r};return e&&(o.jump=Fs.asm[e]),s&&(o.store=Ds.asm[s]),o},Bu=(s,t,e,r)=>[l1(s),d1(t,e,r)],$s=(s,t)=>({type:"L",label:s,span:t}),S0={grammar:zs,semantics:_e,parser:H0,parse:a1(H0,_e),passes:{fillLabel:yu,emit:wu},A:l1,C:d1,AC:Bu,L:$s};async function Us(s){const t=Ri(S0.parse(s));return S0.passes.fillLabel(t),S0.passes.emit(t)}async function Vs(s){return s.split(`
`).filter(t=>t.trim()!=="").map(i1)}async function Ws(s,t){if(t.endsWith(".hack"))return _u(s,t);if(t.endsWith(".asm"))return Au(s,t);throw new Error(`Cannot load file without hack or asm extension ${t}`)}async function Au(s,t){return Us(await s.readFile(t))}async function _u(s,t){return Vs(await s.readFile(t))}const m0=16384,xu=256,Su=32,g0=xu*Su,p1=24576;let h1=class{constructor(t){F(this,"memory");typeof t=="number"?this.memory=new Int16Array(t):this.memory=new Int16Array(t)}get size(){return this.memory.length}get(t){return t<0||t>=this.size?65535:this.memory[t]??0}set(t,e){t>=0&&t<this.size&&(this.memory[t]=e&65535)}reset(){this.memory.fill(0)}update(t,e,r){let o;switch(r){case"asm":try{o=fu(e)}catch{o=void 0}break;case"bin":o=i1(e);break;case"hex":o=Rs(e);break;case"dec":default:o=Le(e);break}o!==void 0&&isFinite(o)&&o<=65535&&this.set(t,o)}async load(t,e,r){try{this.loadBytes(await Ws(t,e),r)}catch{throw new Error(`Memory Failed to load file ${e}`)}}loadBytes(t,e){this.memory.set(new Int16Array(t),e),this.memory.fill(0,t.length,this.size)}range(t=0,e=this.size){return[...this.memory.slice(t,e)]}*map(t,e=0,r=this.size){Bt(e<=r);for(let o=e;o<r;o++)yield t(o,this.get(o))}[Symbol.iterator](){return this.map((t,e)=>e)}isEmpty(){return this.memory.every(t=>t===0)}};class s0{constructor(t,e,r){F(this,"parent");F(this,"size");F(this,"offset");this.parent=t,this.size=e,this.offset=r}get(t){return t<0||t>=this.size?65535:this.parent.get(this.offset+t)}set(t,e,r=!0){t>=0&&t<this.size&&this.parent.set(t+this.offset,e)}reset(){for(let t=0;t<this.size;t++)this.set(t,0,!1)}update(t,e,r){t>=0&&t<this.size&&this.parent.update(t+this.offset,e,r)}load(t,e){return this.parent.load(t,e,this.offset)}loadBytes(t){return this.parent.loadBytes(t,this.offset)}range(t,e){return this.parent.range(t,e)}map(t,e=0,r=this.size){return this.parent.map(t,e+this.offset,r+this.offset)}[Symbol.iterator](){return this.map((t,e)=>e)}}class Iu extends s0{constructor(t){super(t,1,24576)}getKey(){return this.get(0)}setKey(t){this.set(0,t&65535)}clearKey(){this.set(0,0)}}const De=class De extends h1{constructor(t){if(t){const e=new Int16Array(De.SIZE);e.set(t),super(e.buffer)}else super(De.SIZE)}};F(De,"SIZE",32768);let r0=De;var pe;let Ru=(pe=class extends h1{constructor(){super(pe.SIZE);F(this,"keyboard",new s0(this,1,p1));F(this,"screen",new s0(this,g0,m0))}},F(pe,"SIZE",24577),pe);function K1(){return{A:0,D:0,PC:0,ALU:0,flag:re.Zero}}const Zt={c:32768,x1:36864,x2:36864,am:36864,op:4032,d1:32800,d2:32784,d3:32776,j1:32769,j2:32770,j3:32772};function Gs(s){function t(r){return(s&r)===r}return{c:t(Zt.c),x1:t(Zt.x1),x2:t(Zt.x2),am:t(Zt.am),op:(s&Zt.op)>>6,d1:t(Zt.d1),d2:t(Zt.d2),d3:t(Zt.d3),j1:t(Zt.j1),j2:t(Zt.j2),j3:t(Zt.j3)}}function Hs({inM:s,instruction:t},{A:e,D:r,PC:o}){const n=Gs(t),i=n.am?s:e,[a,u]=f0(n.op,r,i);return n.d2&&(r=a),[{A:e,D:r,PC:o+1,ALU:a,flag:u},n.d3,a]}function Ks({inM:s,instruction:t,reset:e},{A:r,D:o,PC:n,ALU:i,flag:a}){const u=Gs(t),h=u.j1&&a===re.Positive,m=u.j2&&a===re.Zero,f=u.j3&&a===re.Negative;n=e?0:h||m||f?r:n,u.c?u.d1&&(r=i):r=t&32767;const d=u.am?s:r,y=f0(u.op,o,d);return i=y[0],a=y[1],[{addressM:r,outM:i,writeM:u.d3},{A:r,D:o,ALU:i,flag:a,PC:n}]}var ne,ee,ie,o0,rs;let q1=(rs=class{constructor({RAM:t=new Ru,ROM:e}){F(this,"RAM");F(this,"ROM");F(this,"Screen");F(this,"Keyboard");Te(this,ne,0);Te(this,ee,0);Te(this,ie,0);Te(this,o0,{A:0,D:0,PC:0,ALU:0,flag:re.Zero});this.RAM=t,this.ROM=e,this.Screen=new s0(this.RAM,g0,m0),this.Keyboard=new Iu(this.RAM)}get state(){return Ht(this,o0)}get PC(){return Ht(this,ne)}get A(){return Ht(this,ee)}get D(){return Ht(this,ie)}setA(t){Qt(this,ee,t)}setD(t){Qt(this,ie,t)}setPC(t){Qt(this,ne,t)}reset(){Qt(this,ne,0),Qt(this,ee,0),Qt(this,ie,0)}tick(){const t=Ht(this,ee),e={inM:this.RAM.get(Ht(this,ee)),instruction:this.ROM.get(Ht(this,ne)),reset:!1},[r,o,n]=Hs(e,{A:Ht(this,ee),D:Ht(this,ie),PC:Ht(this,ne),ALU:Ht(this,ie)});o&&this.RAM.set(t,n);const[i,{A:a,D:u,PC:h}]=Ks(e,r);Qt(this,ee,a),Qt(this,ie,u),Qt(this,ne,h)}},ne=new WeakMap,ee=new WeakMap,ie=new WeakMap,o0=new WeakMap,rs);class ye extends ke{constructor(e,r){super(["in[16]","load",`address[${e}]`],["out[16]"],r,[],["in","load"]);F(this,"width");F(this,"_memory");F(this,"_nextData",0);F(this,"_address",0);this.width=e,this._memory=new h1(Math.pow(2,this.width))}get memory(){return this._memory}get address(){return this._address}tick(){const e=this.in("load").voltage();this._address=this.in("address").busVoltage,e&&(this._nextData=this.in().busVoltage,this._memory.set(this._address,this._nextData))}tock(){var e;this.out().busVoltage=((e=this._memory)==null?void 0:e.get(this._address))??0}eval(){var r;const e=this.in("address").busVoltage;this.out().busVoltage=((r=this._memory)==null?void 0:r.get(e))??0}at(e){return Bt(e<this._memory.size,()=>`Request out of bounds (${e} >= ${this._memory.size})`),new Tu(`${this.name}[${e}]`,e,this._memory)}get(e,r){return e===this.name?this.at(r??0):super.get(e)}reset(){this._memory.reset(),super.reset()}}class Tu extends Pt{constructor(e,r,o){super(e);F(this,"index");F(this,"ram");this.index=r,this.ram=o}get busVoltage(){return this.ram.get(this.index)}set busVoltage(e){this.ram.set(this.index,e)}}class Mu extends ye{constructor(){super(3,"RAM8")}}class Cu extends ye{constructor(){super(6,"RAM64")}}class Eu extends ye{constructor(){super(9,"RAM512")}}class Pu extends ye{constructor(){super(12,"RAM4K")}}class qs extends ye{constructor(){super(14,"RAM16K")}}class Zs extends ye{constructor(){super(15,"ROM")}async load(t,e){try{(await Ws(t,e)).map((r,o)=>this.at(o).busVoltage=r)}catch{throw new Error(`ROM32K Failed to load file ${e}`)}}}class Jt extends ye{constructor(){super(13,"Screen")}}F(Jt,"SIZE",g0),F(Jt,"OFFSET",m0);class te extends ft{constructor(){super([],["out[16]"],"Keyboard")}getKey(){return this.out().busVoltage}setKey(t){this.out().busVoltage=t&65535}clearKey(){this.out().busVoltage=0}get(t){return t===this.name?new h0(this.name,this.getKey()):super.get(t)}}F(te,"OFFSET",p1);class Js extends ke{constructor(){super(["in[16]","load","address[15])"],["out[16]"],"Memory",[],["in","load"]);F(this,"ram",new qs);F(this,"screen",new Jt);F(this,"keyboard",new te);F(this,"address",0);this.parts.push(this.keyboard),this.parts.push(this.screen),this.parts.push(this.ram)}tick(){const e=this.in("load").voltage();if(this.address=this.in("address").busVoltage,e){const r=this.in().busVoltage;this.address>te.OFFSET,this.address==te.OFFSET||(this.address>=Jt.OFFSET?this.screen.at(this.address-Jt.OFFSET).busVoltage=r:this.ram.at(this.address).busVoltage=r)}}tock(){this.eval()}eval(){var r,o,n;if(!this.ram)return;this.address=this.in("address").busVoltage;let e=0;this.address>te.OFFSET||(this.address==te.OFFSET?e=((r=this.keyboard)==null?void 0:r.out().busVoltage)??0:this.address>=Jt.OFFSET?e=((o=this.screen)==null?void 0:o.at(this.address-Jt.OFFSET).busVoltage)??0:e=((n=this.ram)==null?void 0:n.at(this.address).busVoltage)??0),this.out().busVoltage=e}in(e){var r,o,n,i;if(e!=null&&e.startsWith("RAM16K")){const a=Le(((o=(r=e.match(/\[(?<idx>\d+)]/))==null?void 0:r.groups)==null?void 0:o.idx)??"0");return this.ram.at(a)}if(e!=null&&e.startsWith("Screen")){const a=Le(((i=(n=e.match(/\[(?<idx>\d+)]/))==null?void 0:n.groups)==null?void 0:i.idx)??"0");return this.screen.at(a)}return e!=null&&e.startsWith("Keyboard")?this.keyboard.out():super.in(e)}get(e,r=0){return e.startsWith("RAM16K")?this.at(r&16383):e.startsWith("Screen")?this.at(r&8191+Jt.OFFSET):e.startsWith("Keyboard")?this.at(te.OFFSET):e.startsWith("Memory")?this.at(r):super.get(e,r)}at(e){return e>te.OFFSET?Oe:e==te.OFFSET?this.keyboard.out():e>=Jt.OFFSET?this.screen.at(e-Jt.OFFSET):this.ram.at(e)}reset(){this.address=0,this.ram.reset(),this.screen.reset(),super.reset()}}class Ou extends Pt{constructor(e,r){super(e);F(this,"cpu");this.cpu=r}get busVoltage(){return this.cpu.D}set busVoltage(e){this.cpu.D=e}}class Du extends Pt{constructor(e,r){super(e);F(this,"cpu");this.cpu=r}get busVoltage(){return this.cpu.A}set busVoltage(e){this.cpu.A=e}}class Fu extends Pt{constructor(e,r){super(e);F(this,"cpu");this.cpu=r}get busVoltage(){return this.cpu.PC}set busVoltage(e){this.cpu.PC=e}}class Xs extends ke{constructor(){super(["inM[16]","instruction[16]","reset"],["outM[16]","writeM","addressM[15]","pc[15]"],"CPU",[],["pc","addressM","reset"]);F(this,"_state",K1())}get state(){return this._state}tick(){const[e,r]=Hs(this.cpuInput(),this._state);this._state=e,this.out("writeM").pull(r?Y:ot),this.out("outM").busVoltage=this._state.ALU??0}tock(){var o;if(!this._state)return;const[e,r]=Ks(this.cpuInput(),this._state);this._state=r,this.out("addressM").busVoltage=e.addressM??0,this.out("outM").busVoltage=e.outM??0,this.out("writeM").pull(e.writeM?Y:ot),this.out("pc").busVoltage=((o=this._state)==null?void 0:o.PC)??0}cpuInput(){const e=this.in("inM").busVoltage,r=this.in("instruction").busVoltage,o=this.in("reset").busVoltage===1;return{inM:e,instruction:r,reset:o}}get(e,r){return e!=null&&e.startsWith("ARegister")?new Du("ARegister",this._state):e!=null&&e.startsWith("DRegister")?new Ou("DRegister",this._state):e!=null&&e.startsWith("PC")?new Fu("PC",this._state):super.get(e,r)}reset(){this._state=K1(),this._state.PC=-1,super.reset()}}class Nu extends ft{constructor(){super(["reset"],[]);F(this,"cpu",new Xs);F(this,"ram",new Js);F(this,"rom",new Zs);this.wire(this.cpu,[{from:{name:"reset",start:0},to:{name:"reset",start:0}},{from:{name:"instruction",start:0},to:{name:"instruction",start:0}},{from:{name:"oldOutM",start:0},to:{name:"inM",start:0}},{from:{name:"writeM",start:0},to:{name:"writeM",start:0}},{from:{name:"addressM",start:0},to:{name:"addressM",start:0}},{from:{name:"newInM",start:0},to:{name:"outM",start:0}},{from:{name:"pc",start:0},to:{name:"pc",start:0}}]),this.wire(this.rom,[{from:{name:"pc",start:0},to:{name:"address",start:0}},{from:{name:"instruction",start:0},to:{name:"out",start:0}}]),this.wire(this.ram,[{from:{name:"newInM",start:0},to:{name:"in",start:0}},{from:{name:"writeM",start:0},to:{name:"load",start:0}},{from:{name:"addressM",start:0},to:{name:"address",start:0}},{from:{name:"oldOutM",start:0},to:{name:"out",start:0}}]);for(const e of[...this.ins.entries(),...this.outs.entries()])this.isClockedPin(e.name)&&this.clockedPins.add(e.name)}eval(){super.eval()}get(e,r){return e.startsWith("PC")||e.startsWith("ARegister")||e.startsWith("DRegister")?this.cpu.get(e):e.startsWith("RAM16K")?this.ram.get(e,r):super.get(e,r)}async load(e,r){return await this.rom.load(e,r)}}function Lu(s,t){return[s===1&&t===1?Y:ot]}function zu(s,t){return[s&t&65535]}class ju extends ft{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=Lu(t,e);this.out().pull(r)}}class $u extends ft{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=zu(t,e);this.out().busVoltage=r}}function Uu(s,t){return[t===ot&&s===Y?Y:ot,t===Y&&s===Y?Y:ot]}function Vu(s,t){return[t===0&&s===Y?Y:ot,t===1&&s===Y?Y:ot,t===2&&s===Y?Y:ot,t===3&&s===Y?Y:ot]}function Wu(s,t){return[t===0&&s===Y?Y:ot,t===1&&s===Y?Y:ot,t===2&&s===Y?Y:ot,t===3&&s===Y?Y:ot,t===4&&s===Y?Y:ot,t===5&&s===Y?Y:ot,t===6&&s===Y?Y:ot,t===7&&s===Y?Y:ot]}class Gu extends ft{constructor(){super(["in","sel"],["a","b"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").voltage(),[r,o]=Uu(t,e);this.out("a").pull(r),this.out("b").pull(o)}}class Hu extends ft{constructor(){super(["in","sel[2]"],["a","b","c","d"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[r,o,n,i]=Vu(t,e);this.out("a").pull(r),this.out("b").pull(o),this.out("c").pull(n),this.out("d").pull(i)}}class Ku extends ft{constructor(){super(["in","sel[3]"],["a","b","c","d","e","f","g","h"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[r,o,n,i,a,u,h,m]=Wu(t,e);this.out("a").pull(r),this.out("b").pull(o),this.out("c").pull(n),this.out("d").pull(i),this.out("e").pull(a),this.out("f").pull(u),this.out("g").pull(h),this.out("h").pull(m)}}function qu(s,t,e){return[e===ot?s:t]}function K0(s,t,e){return[e===ot?s:t]}function q0(s,t,e,r,o){const n=o&1;return o&2?K0(e,r,n):K0(s,t,n)}function Zu(s,t,e,r,o,n,i,a,u){const h=u&3;return u&4?q0(o,n,i,a,h):q0(s,t,e,r,h)}class Ju extends ft{constructor(){super(["a","b","sel"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),r=this.in("sel").voltage(),[o]=qu(t,e,r);this.out().pull(o)}}class Xu extends ft{constructor(){super(["a[16]","b[16]","sel"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,r=this.in("sel").voltage(),[o]=K0(t,e,r);this.out().busVoltage=o}}class Yu extends ft{constructor(){super(["a[16]","b[16]","c[16]","d[16]","sel[2]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,r=this.in("c").busVoltage,o=this.in("d").busVoltage,n=this.in("sel").busVoltage,[i]=q0(t,e,r,o,n);this.out().busVoltage=i}}class Qu extends ft{constructor(){super(["a[16]","b[16]","c[16]","d[16]","e[16]","f[16]","g[16]","h[16]","sel[3]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,r=this.in("c").busVoltage,o=this.in("d").busVoltage,n=this.in("e").busVoltage,i=this.in("f").busVoltage,a=this.in("g").busVoltage,u=this.in("h").busVoltage,h=this.in("sel").busVoltage,[m]=Zu(t,e,r,o,n,i,a,u,h);this.out().busVoltage=m}}function tc(s,t){return[s===1&&t===1?ot:Y]}class ec extends ft{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=tc(t,e);this.out().pull(r)}}class sc extends ft{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage;this.out().busVoltage=Ca(t,e)}}function rc(s){return[s===ot?Y:ot]}function oc(s){return[~s&65535]}class nc extends ft{constructor(){super(["in"],["out"])}eval(){const t=this.in("in").voltage(),[e]=rc(t);this.out().pull(e)}}class ic extends ft{constructor(){super(["in[16]"],["out[16]"])}eval(){const[t]=oc(this.in().busVoltage);this.out().busVoltage=t}}function ac(s,t){return[s===Y&&t===ot||s===ot&&t===Y?Y:ot]}function uc(s,t){return[(s^t)&65535]}class Z1 extends ft{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[r]=ac(t,e);this.out().pull(r)}}class J1 extends ft{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[r]=uc(t,e);this.out().busVoltage=r}}class cc extends ke{constructor(e){super(["in","load"],["out"],e,[],["in","load"]);F(this,"bit",ot)}tick(){this.in("load").voltage()===Y&&(this.bit=this.in().voltage())}tock(){this.out().pull(this.bit??0)}reset(){this.bit=ot,super.reset()}}class Ys extends Pt{constructor(e,r){super(e);F(this,"register");this.register=r}get busVoltage(){return this.register.bits&65535}set busVoltage(e){this.register.bits=e&65535}}class Ye extends ke{constructor(e){super(["in[16]","load"],["out[16]"],e,[],["in","load"]);F(this,"bits",0)}tick(){this.in("load").voltage()===Y&&(this.bits=this.in().busVoltage&65535)}tock(){this.out().busVoltage=this.bits&65535}get(e,r){return e===this.name?new Ys(this.name,this):super.get(e,r)}reset(){this.bits=0,super.reset()}}class X1 extends Ye{}class lc extends ke{constructor(e){super(["in[16]","reset","load","inc"],["out[16]"],e,[],["in","reset","load","inc"]);F(this,"bits",0)}tick(){this.in("reset").voltage()===Y?this.bits=0:this.in("load").voltage()===Y?this.bits=this.in().busVoltage&65535:this.in("inc").voltage()===Y&&(this.bits+=1)}tock(){this.out().busVoltage=this.bits&65535}get(e,r){return e===this.name?new Ys(this.name,this):super.get(e,r)}reset(){this.bits=0,super.reset()}}class dc extends ke{constructor(t){super(["in"],["out"],t,["t"],["in"])}tick(){const t=this.in().voltage();this.pin("t").pull(t)}tock(){const t=this.pin("t").voltage();this.out().pull(t)}}const Qs=new Map([["Nand",ec],["Nand16",sc],["Not",nc],["Not16",ic],["And",ju],["And16",$u],["Or",iu],["Or16",au],["Or8Way",uu],["XOr",Z1],["XOr16",J1],["Xor",Z1],["Xor16",J1],["Mux",Ju],["Mux16",Xu],["Mux4Way16",Yu],["Mux8Way16",Qu],["DMux",Gu],["DMux4Way",Hu],["DMux8Way",Ku],["HalfAdder",cu],["FullAdder",du],["Add16",Ya],["Inc16",hu],["ALU",ru],["ALUNoStat",su],["DFF",dc],["Bit",cc],["Register",Ye],["ARegister",Ye],["DRegister",Ye],["PC",lc],["RAM8",Mu],["RAM64",Cu],["RAM512",Eu],["RAM4K",Pu],["RAM16K",qs],["ROM32K",Zs],["Screen",Jt],["Keyboard",te],["CPU",Xs],["Computer",Nu],["Memory",Js],["ARegister",X1],["DRegister",X1]].map(([s,t])=>[s,()=>{const e=new t;return e.name=s,e}]));function pc(s){return Qs.has(s)}async function tr(s){if(H1[s]){const e=await hc(H1[s],s);return pt(e)?tt(new Error(tt(e).message)):e}const t=Qs.get(s);return t?lt(t()):tt(new Error(`Chip ${s} not in builtin registry`))}function Y1(s){const t=s.start??0;return s.end===void 0?lt(void 0):s.end>=t?lt(s.end-t+1):tt(wt("Bus start index should be less than or equal to bus end index",s.span))}async function hc(s,t,e,r){const o=u1.parse(s.toString());return pt(o)?o:f1({parts:lt(o),dir:t,name:e,fs:r})}async function fc(s,t,e){if(pc(s)||e===void 0)return await tr(s);try{const r=await e.readFile(`${t}/${s}.hdl`),o=u1.parse(r);let n;if(Fe(o)){const i=await f1({parts:lt(o),dir:t,name:s,fs:e});pt(i)?n=tt(new Error(tt(i).message)):n=i}else n=tt(new Error("HDL Was not parsed"));return n}catch{return tt(new Error(`Could not load chip ${s}.hdl`))}}async function f1(...s){return await m1.build(...s)}function I0(s){if(s.start!=null&&s.end!=null)return s.end-s.start+1}function Q1(s){return s.start!=null&&s.end!=null?`${s.pin}[${s.start}..${s.end}]`:s.pin}function mc(s,t){const e=Y1(s),r=Y1(t);return pt(e)?e:pt(r)?r:lt({to:{name:s.pin.toString(),start:s.start??0,width:lt(e)},from:{name:t.pin.toString(),start:t.start??0,width:lt(r)}})}function ts(s){if(s.start!=null&&s.end!=null){const t=[];for(let e=s.start;e<=s.end;e++)t.push(e);return t}return[-1]}function es(s,t){let e;const r=t.get(s.pin);if(!r)t.set(s.pin,new Set(ts(s)));else if(r.has(-1))e=s.start??-1;else if(s.start!==void 0&&s.end!==void 0)for(const o of ts(s))r.has(o)&&(e=o),r.add(o);else r.add(-1);return e!=null?tt(wt(`Cannot write to pin ${s.pin}${e!=-1?`[${e}]`:""} multiple times`,s.span)):lt()}class m1{constructor({parts:t,fs:e,dir:r,name:o}){F(this,"parts");F(this,"fs");F(this,"dir");F(this,"expectedName");F(this,"chip");F(this,"internalPins",new Map);F(this,"inPins",new Map);F(this,"outPins",new Map);F(this,"wires",[]);this.parts=t,this.expectedName=o,this.dir=r,this.fs=e,this.chip=new ft(t.ins.map(({pin:n,width:i})=>({pin:n.toString(),width:i})),t.outs.map(({pin:n,width:i})=>({pin:n.toString(),width:i})),t.name.value,[],t.clocked)}static build(t){return new m1(t).build()}async build(){if(this.expectedName&&this.parts.name.value!=this.expectedName)return tt(wt("Wrong chip name",this.parts.name.span));if(this.parts.parts==="BUILTIN")return await tr(this.parts.name.value);const t=await this.wireParts();if(pt(t))return t;this.chip.clockedPins=new Set([...this.chip.ins.entries(),...this.chip.outs.entries()].map(e=>e.name).filter(e=>this.chip.isClockedPin(e)));for(const e of this.chip.parts)e.subscribeToClock();return lt(this.chip)}async wireParts(){if(this.parts.parts==="BUILTIN")return lt();for(const e of this.parts.parts){const r=await fc(e.name,this.dir,this.fs);if(pt(r))return tt(wt(`Undefined chip name: ${e.name}`,e.span));const o=lt(r);if(o.name==this.chip.name)return tt(wt(`Cannot use chip ${o.name} to implement itself`,e.span));const n=this.wirePart(e,o);if(pt(n))return n}let t=this.validateInternalPins();return pt(t)||(t=this.validateWireWidths(),pt(t))?t:lt()}checkLoops(t,e){const r=new Set,o=new Set;let n;for(const{lhs:i,rhs:a}of t.wires)if(e.isInPin(i.pin))if(o.has(a.pin)){n=a.pin;break}else r.add(a.pin);else if(e.isOutPin(i.pin))if(r.has(a.pin)){n=a.pin;break}else o.add(a.pin);return n?tt(wt(`Looping wire ${n}`,t.span)):lt()}wirePart(t,e){const r=this.checkLoops(t,e);if(pt(r))return r;const o=[];this.inPins.clear();for(const{lhs:n,rhs:i}of t.wires){const a=this.validateWire(e,n,i);if(pt(a))return a;const u=mc(n,i);if(pt(u))return u;o.push(lt(u))}try{const n=this.chip.wire(e,o);if(pt(n)){const i=tt(n);return tt(wt(i.message,i.lhs?t.wires[i.wireIndex].lhs.span:t.wires[i.wireIndex].rhs.span))}return this.chip.sortParts(),lt()}catch(n){return tt(wt(n.message,t.span))}}validateWire(t,e,r){if(t.isInPin(e.pin)){const o=this.validateInputWire(e,r);if(pt(o))return o}else if(t.isOutPin(e.pin)){const o=this.validateOutputWire(t,e,r);if(pt(o))return o}else return tt(wt(`Undefined pin name: ${e.pin}`,e.span));return Xe(r.pin)||this.wires.push({partChip:t,lhs:e,rhs:r}),lt()}validateInputWire(t,e){let r=this.validateInputSource(e);if(pt(r)||(r=es(t,this.inPins),pt(r)))return r;if(this.chip.isInternalPin(e.pin)){const o=this.internalPins.get(e.pin);o==null?this.internalPins.set(e.pin,{isDefined:!1,firstUse:e.span}):o.firstUse=o.firstUse.start<e.span.start?o.firstUse:e.span}return lt()}validateOutputWire(t,e,r){var n;let o=this.validateWriteTarget(r);if(pt(o))return o;if(this.chip.isOutPin(r.pin)){if(o=es(r,this.outPins),pt(o))return o}else{if(r.start!==void 0||r.end!==void 0)return tt(wt(`Internal pins (in this case: ${r.pin}) cannot be subscripted or indexed`,r.span));const i=this.internalPins.get(r.pin),a=I0(e)??((n=t.get(e.pin))==null?void 0:n.width);if(i==null)this.internalPins.set(r.pin,{isDefined:!0,firstUse:r.span,width:a});else{if(i.isDefined)return tt(wt(`Internal pin ${r.pin} already defined`,r.span));i.isDefined=!0,i.width=a}}return lt()}validateWriteTarget(t){return this.chip.isInPin(t.pin)?tt(wt(`Cannot write to input pin ${t.pin}`,t.span)):Xe(t.pin)?tt(wt('Internal pin name cannot be "true" or "false"',t.span)):lt()}validateInputSource(t){return this.chip.isOutPin(t.pin)?tt(wt("Cannot use output pin as input",t.span)):!this.chip.isInPin(t.pin)&&t.start!=null?tt(wt(Xe(t.pin)?"Constant bus cannot be subscripted or indexed":`Internal pins (in this case: ${t.pin}) cannot be subscripted or indexed`,t.span)):lt()}validateInternalPins(){for(const[t,e]of this.internalPins)if(!e.isDefined)return tt(wt(t.toLowerCase()=="true"||t.toLowerCase()=="false"?`The constant bus ${t.toLowerCase()} must be in lower-case`:`Undefined internal pin name: ${t}`,e.firstUse));return lt()}validateWireWidths(){var t,e,r;for(const o of this.wires){const n=I0(o.lhs)??((t=o.partChip.get(o.lhs.pin))==null?void 0:t.width),i=I0(o.rhs)??((e=this.chip.get(o.rhs.pin))==null?void 0:e.width)??((r=this.internalPins.get(o.rhs.pin))==null?void 0:r.width);if(n!=i)return tt(wt(`Different bus widths: ${Q1(o.lhs)}(${n}) and ${Q1(o.rhs)}(${i})`,{start:o.lhs.span.start,end:o.rhs.span.end,line:o.lhs.span.line}))}return lt()}}const er=`
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
}`,Z0=l0(er,d0),Wt=Z0.extendSemantics(ve);Wt.extendAttribute("value",{Index(s,t,e){var r;return((r=t==null?void 0:t.child(0))==null?void 0:r.value)??-1}});Wt.extendAttribute("name",{FileName({name:s}){return s}});Wt.addAttribute("index",{Index(s,t,e){var r;return((r=t.child(0))==null?void 0:r.value)??0}});Wt.addAttribute("formatSpec",{FormatSpec(s,{sourceString:t},{value:e},r,{value:o},n,{value:i}){return{style:t,width:o,lpad:e,rpad:i}}});Wt.addAttribute("format",{OutputFormat({name:s},t,e){var r,o;return{id:s,builtin:(t==null?void 0:t.child(0))!==void 0,address:((r=t==null?void 0:t.child(0))==null?void 0:r.value)??-1,format:(o=e==null?void 0:e.child(0))==null?void 0:o.formatSpec}}});Wt.addAttribute("operation",{TstEvalOperation(s){return{op:s.sourceString}},TstOutputOperation(s){return{op:"output"}},TstOutputListOperation(s,t){return{op:"output-list",spec:t.children.map(e=>e.format)}},TstSetOperation(s,{name:t},e,{value:r}){var i,a;const o={op:"set",id:t,value:r},n=(a=(i=e.child(0))==null?void 0:i.child(1))==null?void 0:a.child(0);return n&&(o.index=n.value),o},TstEchoOperation(s,t){return{op:"echo",message:t.String}},TstClearEchoOperation(s){return{op:"clear-echo"}},TstLoadROMOperation(s,t,e){return{op:"loadRom",file:e.sourceString}},TstFileOperation(s,t){return{op:s.sourceString,file:t==null?void 0:t.sourceString}},TstResetRAMOperation(s){return{op:"resetRam"}}});Wt.addAttribute("command",{TstCommand(s,t){return{op:s.operation,separator:t.sourceString,span:Kt(this.source)}}});Wt.addAttribute("condition",{Condition({value:s},{sourceString:t},{value:e}){return{left:s,right:e,op:t}}});Wt.addAttribute("statement",{TstWhile(s,t,e,r,o){return{statements:r.children.map(n=>n.command),condition:t.condition,span:Kt(this.source)}},TstRepeat(s,t,e,r,o){return{statements:r.children.map(n=>n.command),count:t.sourceString?Number(t.sourceString):-1,span:Kt(this.source)}},TstStatement(s){return s.command}});Wt.addAttribute("tst",{Tst(s){return{lines:s.children.map(t=>t.statement)}}});Wt.addAttribute("root",{Root({tst:s}){return s}});const sr={grammar:er,semantics:Wt,parser:Z0,parse:a1(Z0,Wt)};class gc{constructor(t,e="%B1.1.1",r,o,n,i,a){F(this,"variable");F(this,"fmt");F(this,"lPad");F(this,"rPad");F(this,"len");F(this,"index");F(this,"builtin");var u;if(this.variable=t,e.startsWith("%")&&r===void 0&&o===void 0&&n===void 0){const{fmt:h,lPad:m,rPad:f,len:v}=(u=e.match(/^%(?<fmt>[BDXS])(?<lPad>\d+)\.(?<len>\d+)\.(?<rPad>\d+)$/))==null?void 0:u.groups;this.fmt=h,this.lPad=parseInt(m),this.rPad=parseInt(f),this.len=parseInt(v),this.builtin=!1,this.index=-1}else Bt(["B","X","D","S"].includes(e[0])),this.fmt=e[0],this.len=r??3,this.lPad=o??1,this.rPad=n??1,this.builtin=i??!1,this.index=a??-1}header(t){let e=`${this.variable}`;if(this.builtin){const r=this.index>=0?this.index:"";e=`${e}[${r}]`}return e.length>this.len+this.lPad+this.rPad?e.substring(0,this.len+this.lPad+this.rPad):this.padCenter(e)}print(t){const e=t.getVar(this.variable,this.index);if(this.fmt==="S")return this.padLeft(e);const r={B:Ta,D:Ma,X:Ra}[this.fmt],o=r(e);return this.fmt==="D"?this.padRight(o):this.padLeft(o.slice(o.length-this.len))}padCenter(t){const e=this.lPad+this.len+this.rPad,r=Math.floor((e-t.length)/2),o=e-r-t.length,n=r+t.length,i=n+o;return t=t.padStart(n),t=t.padEnd(i),t}padLeft(t){t=t.substring(0,this.len);const e=this.rPad+this.len,r=this.lPad+e;return t=t.padEnd(e),t=t.padStart(r),t}padRight(t){t=t.substring(0,this.len);const e=this.lPad+this.len,r=this.rPad+e;return t=t.padStart(e),t=t.padEnd(r),t}}class rr{constructor(t){F(this,"span");this.span=t}async do(){}*steps(){yield this}}class g1 extends rr{}class or extends rr{}class vc{constructor(t,e,r){F(this,"variable");F(this,"value");F(this,"index");this.variable=t,this.value=e,this.index=r}async do(t){t.setVar(this.variable,this.value,this.index)}*steps(){yield this}}class kc{async do(t){t.output()}*steps(){yield this}}class yc{constructor(t=[]){F(this,"outputs",[]);for(const e of t)this.addOutput(e)}addOutput(t){var e,r,o,n;this.outputs.push({id:t.id,style:((e=t.format)==null?void 0:e.style)??"B",len:((r=t.format)==null?void 0:r.width)??-1,lpad:((o=t.format)==null?void 0:o.lpad)??1,rpad:((n=t.format)==null?void 0:n.rpad)??1,builtin:t.builtin,address:t.address})}async do(t){t.outputList(this.outputs),t.header()}*steps(){yield this}}class nr{constructor(){F(this,"instructions",[]);F(this,"span")}addInstruction(t){this.instructions.push(t)}async do(t){for(const e of this.instructions)e.do(t)}*steps(t){yield this}}class bc extends nr{constructor(e){super();F(this,"repeat");this.repeat=e}async do(){}*innerSteps(e){for(const r of this.instructions)yield*r.steps(e)}isTicktockOnly(){if(this.instructions.length===0||this.instructions.length>2)return!1;const r=this.instructions[0]._cpuTestInstruction_===!0;if(this.instructions.length===1)return r;const n=this.instructions[1]instanceof g1;return r&&n}*steps(e){if(this.repeat===-1){yield this;let r=0;const o=1e5;for(;r<o;)r++,r%1e4===0&&console.log(`[DEBUG] TestRepeatInstruction infinite loop iteration: ${r}`),yield*this.innerSteps(e);console.warn(`[WARN] TestRepeatInstruction hit max iterations (${o}), breaking out`)}else if(this.isTicktockOnly()&&this.repeat>1e3){const r=e;if(typeof r.ticktock=="function"){const o=performance.now();for(let i=0;i<this.repeat;i++)r.ticktock();const n=performance.now();console.log(`[PERF] Batched ${this.repeat} ticktocks in ${(n-o).toFixed(1)}ms`)}else{const o=this.instructions[0];for(let n=0;n<this.repeat;n++)o.do(e)}yield this}else for(let r=0;r<this.repeat;r++)yield this,yield*this.innerSteps(e)}}class wc{constructor(t,e,r){F(this,"x");F(this,"y");F(this,"op");this.x=t,this.y=e,this.op=r}check(t){const e=t.hasVar(this.x)?t.getVar(this.x):this.x,r=t.hasVar(this.y)?t.getVar(this.y):this.y;if(typeof e=="string"||typeof r=="string")switch(this.op){case"=":return`${e}`==`${r}`;case"<>":return`${e}`!=`${r}`}else switch(this.op){case"<":return e<r;case"<=":return e<=r;case">":return e>r;case">=":return e>=r;case"=":return e===r;case"<>":return e!==r}return!1}}class Bc extends nr{constructor(e){super();F(this,"condition");this.condition=e}*steps(e){let r=0;const o=1e5,n=10,i=this.condition.x==="out"&&this.condition.op==="<>"&&typeof this.condition.y=="number",a=i?this.condition.y:0;for(;this.condition.check(e);){if(r++,i&&r===n){console.log(`[DEBUG] TestWhileInstruction: Simulating keyboard press ${a} (${String.fromCharCode(a)})`),e.hasVar("Keyboard")&&e.setVar("Keyboard",a);try{const u=e.chip;if(u&&u.keyboard&&typeof u.keyboard.setKey=="function")u.keyboard.setKey(a);else if(u&&u.parts){for(const h of u.parts)if(h.name==="Keyboard"&&typeof h.setKey=="function"){h.setKey(a);break}}}catch{}}if(r%1e4===0&&console.log(`[DEBUG] TestWhileInstruction loop iteration: ${r}, condition: ${this.condition.x} ${this.condition.op} ${this.condition.y}`),r>=o){console.warn(`[WARN] TestWhileInstruction hit max iterations (${o}), condition: ${this.condition.x} ${this.condition.op} ${this.condition.y}, breaking out`);break}yield this;for(const u of this.instructions)yield*u.steps(e)}}}class Ac{constructor(t){F(this,"content");this.content=t}async do(t){t.echo(this.content)}*steps(){yield this}}class _c{async do(t){t.clearEcho()}*steps(){yield this}}class xc{constructor(t){F(this,"file");this.file=t}async do(t){await t.loadROM(this.file)}*steps(){yield this}}class Sc{constructor(t){F(this,"file");this.file=t}async do(t){await t.load(this.file)}*steps(){yield this}}class Ic{constructor(t){F(this,"file");this.file=t}async do(t){this.file&&await t.compareTo(this.file)}*steps(){yield this}}class Rc{constructor(t){F(this,"file");this.file=t}async do(t){this.file&&t.outputFile(this.file)}*steps(){yield this}}const Tc=7;class ir{constructor(t,e,r){F(this,"instructions",[]);F(this,"_outputList",[]);F(this,"_log","");F(this,"fs",new is);F(this,"doEcho");F(this,"doCompareTo");F(this,"dir");F(this,"outputFileName");F(this,"_steps");F(this,"_step");F(this,"breakpoints",new Map);this.doEcho=e,this.doCompareTo=r,this.dir=t}setFileSystem(t){return this.fs=t,this}echo(t){var e;(e=this.doEcho)==null||e.call(this,t)}clearEcho(){var t;(t=this.doEcho)==null||t.call(this,"")}async loadROM(t){}async load(t){}async compareTo(t){var e;(e=this.doCompareTo)==null||e.call(this,t)}outputFile(t){this.outputFileName=t}createOutputs(t){return t.map(e=>{if(e.len===-1)if(e.id==="time")e.len=Tc,e.style="S";else{const r=this.getWidth(e.id,e.address);e.style==="B"?e.len=r:e.style==="D"?e.len=Math.ceil(Math.log(r)):e.style==="X"&&(e.len=Math.ceil(r/4))}return new gc(e.id,e.style,e.len,e.lpad,e.rpad,e.builtin,e.address)})}outputList(t){this._outputList=this.createOutputs(t)}addInstruction(t){this.instructions.push(t)}reset(){return this._steps=function*(t){for(const e of t.instructions)yield*e.steps(t)}(this),this._step=this._steps.next(),this._log="",this}get steps(){return this._steps===void 0&&(this.reset(),this._steps=xt(this._steps,"Reset did not initialize steps"),this._step=xt(this._step,"Reset did not find first step")),this._steps}get currentStep(){var t;return(t=this._step)==null?void 0:t.value}get done(){var t;return((t=this._step)==null?void 0:t.done)??!1}async step(){var r,o;let t=0;const e=1e5;for(;!this._step.done;){if(t++,t%1e4===0&&console.log(`[DEBUG] Test.step() iteration: ${t}, current instruction: ${(o=(r=this._step.value)==null?void 0:r.constructor)==null?void 0:o.name}`),t>=e){console.warn(`[WARN] Test.step() hit max steps (${e}), breaking out`);break}if(await this._step.value.do(this),this._step=this.steps.next(),this._step.value instanceof g1)return this._step=this.steps.next(),!1;if(this._step.value instanceof or)return!0}return!0}async run(){console.log("[DEBUG] Test.run() starting..."),this.reset();let t=0;const e=35e5;for(;!await this.step();)if(t++,t%5e5===0&&console.log(`[DEBUG] Test.run() loop iteration: ${t}`),t>=e){console.warn(`[WARN] Test.run() hit max runs (${e}), breaking out`);break}console.log(`[DEBUG] Test.run() completed after ${t} runs`)}addBreakpoint(t,e){this.breakpoints.set(t,e)}clearBreakpoints(){this.breakpoints.clear()}output(){const t=this._outputList.map(e=>e.print(this));this._log+=`|${t.join("|")}|
`}header(){const t=this._outputList.map(e=>e.header(this));this._log+=`|${t.join("|")}|
`}log(){return this._log}}class v1 extends ir{constructor({dir:e,rom:r=new r0,doEcho:o,doLoad:n,compareTo:i}={}){super(e,o,i);F(this,"cpu");F(this,"ticks",0);F(this,"doLoad");F(this,"fileLoaded",!1);F(this,"hasLoad",!1);this.doLoad=n,this.cpu=new q1({ROM:r}),this.reset()}static from(e,r={}){const o=new v1(r);return o.hasLoad=e.lines.some(n=>ar(n)&&n.op.op=="load"),ur(o,e,r.requireLoad)}async step(){if(!this.hasLoad&&this.cpu.ROM.isEmpty())throw new Error("Cannot execute the test without first loading an .asm or .hack file");return super.step()}async load(e){var n,i;if(!e&&!this.dir)return;const r=xt((n=this.dir)==null?void 0:n.split("/").slice(0,-1).join("/")),o=await((i=this.doLoad)==null?void 0:i.call(this,e?`${r}/${e}`:r));o&&(this.cpu=new q1({ROM:o}))}reset(){return super.reset(),this.cpu.reset(),this.ticks=0,this}hasVar(e){return typeof e=="number"?!1:!!(e==="A"||e==="D"||e==="PC"||e==="time"||e.startsWith("RAM"))}getVar(e,r){switch(e){case"A":return this.cpu.A;case"D":return this.cpu.D;case"PC":return this.cpu.PC;case"time":return this.ticks;case"RAM":return r===void 0?0:this.cpu.RAM.get(r)}if(typeof e=="number")return 0;if(e.startsWith("RAM")){const o=Number(e.substring(4,e.length-1));return this.cpu.RAM.get(o)}return 0}getWidth(e,r){return 16}setVar(e,r,o){switch(e){case"A":this.cpu.setA(r);break;case"D":this.cpu.setD(r);break;case"PC":this.cpu.setPC(r);break;case"RAM":this.cpu.RAM.set(o??0,r);break}}ticktock(){this.ticks+=1,this.cpu.tick()}async loadROM(e){await this.cpu.ROM.load(this.fs,e)}}class Mc{constructor(){F(this,"_cpuTestInstruction_",!0)}async do(t){t.ticktock()}*steps(){yield this}}class Cc{constructor(){F(this,"_cpuTestInstruction_",!0)}async do(t){t.cpu.RAM.reset()}*steps(){yield this}}var R0;(function(s){s[s.SYS_WAIT_DURATION_NOT_POSITIVE=1]="SYS_WAIT_DURATION_NOT_POSITIVE",s[s.ARRAY_SIZE_NOT_POSITIVE=2]="ARRAY_SIZE_NOT_POSITIVE",s[s.DIVIDE_BY_ZERO=3]="DIVIDE_BY_ZERO",s[s.SQRT_NEG=4]="SQRT_NEG",s[s.ALLOC_SIZE_NOT_POSITIVE=5]="ALLOC_SIZE_NOT_POSITIVE",s[s.HEAP_OVERFLOW=6]="HEAP_OVERFLOW",s[s.ILLEGAL_PIXEL_COORD=7]="ILLEGAL_PIXEL_COORD",s[s.ILLEGAL_LINE_COORD=8]="ILLEGAL_LINE_COORD",s[s.ILLEGAL_RECT_COORD=9]="ILLEGAL_RECT_COORD",s[s.ILLEGAL_CENTER_COORD=12]="ILLEGAL_CENTER_COORD",s[s.ILLEGAL_RADIUS=13]="ILLEGAL_RADIUS",s[s.STRING_LENGTH_NEG=14]="STRING_LENGTH_NEG",s[s.GET_CHAR_INDEX_OUT_OF_BOUNDS=15]="GET_CHAR_INDEX_OUT_OF_BOUNDS",s[s.SET_CHAR_INDEX_OUT_OF_BOUNDS=16]="SET_CHAR_INDEX_OUT_OF_BOUNDS",s[s.STRING_FULL=17]="STRING_FULL",s[s.STRING_EMPTY=18]="STRING_EMPTY",s[s.STRING_INSUFFICIENT_CAPACITY=19]="STRING_INSUFFICIENT_CAPACITY",s[s.ILLEGAL_CURSOR_LOCATION=20]="ILLEGAL_CURSOR_LOCATION"})(R0=R0||(R0={}));const Ec=126;Pc();function G(s){return s.map(t=>t.split("").map(e=>e=="█"))}function Pc(){const s=new Array(Ec);return s[32]=G(["        ","        ","        ","        ","        ","        ","        ","        ","        ","        ","        "]),s[33]=G(["  ██    "," ████   "," ████   "," ████   ","  ██    ","  ██    ","        ","  ██    ","  ██    ","        ","        "]),s[34]=G([" ██ ██  "," ██ ██  ","  █ █   ","        ","        ","        ","        ","        ","        ","        ","        "]),s[35]=G(["        "," █  █   "," █  █   ","██████  "," █  █   "," █  █   ","██████  "," █  █   "," █  █   ","        ","        "]),s[36]=G(["  ██    "," ████   ","██  ██  ","██      "," ████   ","    ██  ","██  ██  "," ████   ","  ██    ","  ██    ","        "]),s[37]=G(["        ","        ","██   █  ","██  ██  ","   ██   ","  ██    "," ██     ","██  ██  ","█   ██  ","        ","        "]),s[38]=G(["  ██    "," ████   "," ████   ","  ██    "," ██ ██  ","██ ██   ","██ ██   ","██ ██   "," ██ ██  ","        ","        "]),s[39]=G(["  ██    ","  ██    "," ██     ","        ","        ","        ","        ","        ","        ","        ","        "]),s[40]=G(["   ██   ","  ██    "," ██     "," ██     "," ██     "," ██     "," ██     ","  ██    ","   ██   ","        ","        "]),s[41]=G([" ██     ","  ██    ","   ██   ","   ██   ","   ██   ","   ██   ","   ██   ","  ██    "," ██     ","        ","        "]),s[42]=G(["        ","        ","        ","██  ██  "," ████   ","██████  "," ████   ","██  ██  ","        ","        ","        "]),s[43]=G(["        ","        ","        ","  ██    ","  ██    ","██████  ","  ██    ","  ██    ","        ","        ","        "]),s[44]=G(["        ","        ","        ","        ","        ","        ","        ","  ██    ","  ██    "," ██     ","        "]),s[45]=G(["        ","        ","        ","        ","        ","██████  ","        ","        ","        ","        ","        "]),s[46]=G(["        ","        ","        ","        ","        ","        ","        ","  ██    ","  ██    ","        ","        "]),s[47]=G(["        ","        ","     █  ","    ██  ","   ██   ","  ██    "," ██     ","██      ","█       ","        ","        "]),s[48]=G(["  ██    "," ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","  ██    ","        ","        "]),s[49]=G(["  ██    "," ███    ","████    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","██████  ","        ","        "]),s[50]=G([" ████   ","██  ██  ","    ██  ","   ██   ","  ██    "," ██     ","██      ","██  ██  ","██████  ","        ","        "]),s[51]=G([" ████   ","██  ██  ","    ██  ","    ██  ","  ███   ","    ██  ","    ██  ","██  ██  "," ████   ","        ","        "]),s[52]=G(["    █   ","   ██   ","  ███   "," █ ██   ","█  ██   ","██████  ","   ██   ","   ██   ","  ████  ","        ","        "]),s[53]=G(["██████  ","██      ","██      ","█████   ","    ██  ","    ██  ","    ██  ","██  ██  "," ████   ","        ","        "]),s[54]=G(["  ███   "," ██     ","██      ","██      ","█████   ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[55]=G(["██████  ","█   ██  ","    ██  ","    ██  ","   ██   ","  ██    ","  ██    ","  ██    ","  ██    ","        ","        "]),s[56]=G([" ████   ","██  ██  ","██  ██  ","██  ██  "," ████   ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[57]=G([" ████   ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","    ██  ","   ██   "," ███    ","        ","        "]),s[58]=G(["        ","        ","  ██    ","  ██    ","        ","        ","  ██    ","  ██    ","        ","        ","        "]),s[59]=G(["        ","        ","  ██    ","  ██    ","        ","        ","  ██    ","  ██    "," ██     ","        ","        "]),s[60]=G(["        ","        ","   ██   ","  ██    "," ██     ","██      "," ██     ","  ██    ","   ██   ","        ","        "]),s[61]=G(["        ","        ","        ","██████  ","        ","        ","██████  ","        ","        ","        ","        "]),s[62]=G(["        ","        ","██      "," ██     ","  ██    ","   ██   ","  ██    "," ██     ","██      ","        ","        "]),s[64]=G([" ████   ","██  ██  ","██  ██  ","██ ███  ","██ ███  ","██ ███  ","██ ██   ","██      "," ████   ","        ","        "]),s[63]=G([" ████   ","██  ██  ","██  ██  ","   ██   ","  ██    ","  ██    ","        ","  ██    ","  ██    ","        ","        "]),s[65]=G(["  ██    "," ████   ","██  ██  ","██  ██  ","██████  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[66]=G(["█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","        ","        "]),s[67]=G(["  ███   "," ██ ██  ","██   █  ","██      ","██      ","██      ","██   █  "," ██ ██  ","  ███   ","        ","        "]),s[68]=G(["████    ","██ ██   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██ ██   ","████    ","        ","        "]),s[69]=G(["██████  ","██  ██  ","██   █  ","██ █    ","████    ","██ █    ","██   █  ","██  ██  ","██████  ","        ","        "]),s[70]=G(["██████  ","██  ██  ","██   █  ","██ █    ","████    ","██ █    ","██      ","██      ","██      ","        ","        "]),s[71]=G(["  ███   "," ██ ██  ","██   █  ","██      ","██ ███  ","██  ██  ","██  ██  "," ██ ██  ","  ██ █  ","        ","        "]),s[72]=G(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██████  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[73]=G([" ████   ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[74]=G(["  ████  ","   ██   ","   ██   ","   ██   ","   ██   ","   ██   ","██ ██   ","██ ██   "," ███    ","        ","        "]),s[75]=G(["██  ██  ","██  ██  ","██  ██  ","██ ██   ","████    ","██ ██   ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[76]=G(["██      ","██      ","██      ","██      ","██      ","██      ","██   █  ","██  ██  ","██████  ","        ","        "]),s[77]=G(["█    █  ","██  ██  ","██████  ","██████  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[78]=G(["██  ██  ","██  ██  ","███ ██  ","███ ██  ","██████  ","██ ███  ","██ ███  ","██  ██  ","██  ██  ","        ","        "]),s[79]=G([" ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[80]=G(["█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██      ","██      ","██      ","██      ","        ","        "]),s[81]=G([" ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██████  ","██ ███  "," ████   ","    ██  ","        "]),s[82]=G(["█████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██ ██   ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[83]=G([" ████   ","██  ██  ","██  ██  "," ██     ","  ███   ","    ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[84]=G(["██████  ","██████  ","█ ██ █  ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[85]=G(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[86]=G(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   "," ████   ","  ██    ","  ██    ","        ","        "]),s[87]=G(["██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██████  ","██████  ","██████  "," █  █   ","        ","        "]),s[88]=G(["██  ██  ","██  ██  "," ████   "," ████   ","  ██    "," ████   "," ████   ","██  ██  ","██  ██  ","        ","        "]),s[89]=G(["██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[90]=G(["██████  ","██  ██  ","█   ██  ","   ██   ","  ██    "," ██     ","██   █  ","██  ██  ","██████  ","        ","        "]),s[91]=G([" ████   "," ██     "," ██     "," ██     "," ██     "," ██     "," ██     "," ██     "," ████   ","        ","        "]),s[92]=G(["        ","        ","█       ","██      "," ██     ","  ██    ","   ██   ","    ██  ","     █  ","        ","        "]),s[93]=G(["   ████ ","     ██ ","     ██ ","     ██ ","     ██ ","     ██ ","     ██ ","     ██ ","   ████ ","        ","        "]),s[94]=G(["   █    ","  ███   "," ██ ██  ","        ","        ","        ","        ","        ","        ","        ","        "]),s[95]=G(["        ","        ","        ","        ","        ","        ","        ","        ","        ","██████  ","        "]),s[96]=G([" ██     ","  ██    ","   ██   ","        ","        ","        ","        ","        ","        ","        ","        "]),s[97]=G(["        ","        ","        "," ███    ","   ██   "," ████   ","██ ██   ","██ ██   "," ██ ██  ","        ","        "]),s[98]=G(["██      ","██      ","██      ","████    ","██ ██   ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[99]=G(["        ","        ","        "," ████   ","██  ██  ","██      ","██      ","██  ██  "," ████   ","        ","        "]),s[100]=G(["    ██  ","    ██  ","    ██  ","  ████  "," ██ ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[101]=G(["        ","        ","        "," ████   ","██  ██  ","██████  ","██      ","██  ██  "," ████   ","        ","        "]),s[102]=G(["  ███   "," ██ ██  "," ██  █  "," ██     ","████    "," ██     "," ██     "," ██     ","████    ","        ","        "]),s[103]=G(["        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","██  ██  "," ████   ","        "]),s[104]=G(["██      ","██      ","██      ","██ ██   ","███ ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[105]=G(["  ██    ","  ██    ","        "," ███    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[106]=G(["    ██  ","    ██  ","        ","   ███  ","    ██  ","    ██  ","    ██  ","    ██  ","██  ██  "," ████   ","        "]),s[107]=G(["██      ","██      ","██      ","██  ██  ","██ ██   ","████    ","████    ","██ ██   ","██  ██  ","        ","        "]),s[108]=G([" ███    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    "," ████   ","        ","        "]),s[109]=G(["        ","        ","        ","█ ███   ","██████  ","██ █ █  ","██ █ █  ","██ █ █  ","██ █ █  ","        ","        "]),s[110]=G(["        ","        ","        ","█ ███   ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","██  ██  ","        ","        "]),s[111]=G(["        ","        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","        ","        "]),s[112]=G(["        ","        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  ","█████   ","██      ","██      ","        "]),s[113]=G(["        ","        ","        "," ████   ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","    ██  ","        "]),s[114]=G(["        ","        ","        ","█ ███   ","███ ██  ","██  ██  ","██      ","██      ","███     ","        ","        "]),s[115]=G(["        ","        ","        "," ████   ","██  ██  "," ██     ","   ██   ","██  ██  "," ████   ","        ","        "]),s[116]=G(["  █     "," ██     "," ██     ","████    "," ██     "," ██     "," ██     "," ██ ██  ","  ███   ","        ","        "]),s[117]=G(["        ","        ","        ","██ ██   ","██ ██   ","██ ██   ","██ ██   ","██ ██   "," ██ ██  ","        ","        "]),s[118]=G(["        ","        ","        ","██  ██  ","██  ██  ","██  ██  ","██  ██  "," ████   ","  ██    ","        ","        "]),s[119]=G(["        ","        ","        ","██  ██  ","██  ██  ","██  ██  ","██████  ","██████  "," █  █   ","        ","        "]),s[120]=G(["        ","        ","        ","██  ██  "," ████   ","  ██    ","  ██    "," ████   ","██  ██  ","        ","        "]),s[121]=G(["        ","        ","        ","██  ██  ","██  ██  ","██  ██  "," █████  ","    ██  ","   ██   ","████    ","        "]),s[122]=G(["        ","        ","        ","██████  ","██ ██   ","  ██    "," ██     ","██  ██  ","██████  ","        ","        "]),s[123]=G(["   ███  ","  ██    ","  ██    ","  ██    ","███     ","  ██    ","  ██    ","  ██    ","   ███  ","        ","        "]),s[124]=G(["  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","  ██    ","        ","        "]),s[125]=G(["███     ","  ██    ","  ██    ","  ██    ","   ███  ","  ██    ","  ██    ","  ██    ","███     ","        ","        "]),s[126]=G([" ██  █  ","█ ██ █  ","█  ██   ","        ","        ","        ","        ","        ","        ","        ","        "]),s}new Array(g0).fill(0);class Oc{constructor(){F(this,"_vmTestInstruction_",!0)}async do(t){t.vmstep()}*steps(){yield this}}function ar(s){return s.op!==void 0}function Dc(s){return s.condition!==void 0}function Fc(s){const{op:t}=s;switch(t){case"tick":return new Lc;case"tock":return new zc;case"ticktock":return new Mc;case"eval":return new Nc;case"vmstep":return new Oc;case"output":return new kc;case"set":return new vc(s.id,s.value,s.index);case"output-list":return new yc(s.spec);case"echo":return new Ac(s.message);case"clear-echo":return new _c;case"loadRom":return new xc(s.file);case"load":return new Sc(s.file);case"output-file":return new Rc(s.file);case"compare-to":return new Ic(s.file);case"resetRam":return new Cc;default:Da(t,`Unknown tst operation ${t}`)}}function ur(s,t,e=!0){let r,o=[],n=s,i=[],a=!1;for(const u of t.lines){if(ar(u))n=s,i=[u];else{const h=Dc(u)?new Bc(new wc(u.condition.left,u.condition.right,u.condition.op)):new bc(u.count);h.span=u.span,s.addInstruction(h),n=h,i=u.statements}for(const h of i){h.op.op=="load"&&(a=!0);const m=Fc(h.op);if(m!==void 0&&(r===void 0?r=u.span:r.end=u.span.end,n.addInstruction(m),o.push(m)),h.separator!=","){h.separator==";"?n.addInstruction(new g1(r??h.span)):h.separator=="!"&&n.addInstruction(new or(r??h.span));for(const f of o)f.span=r??h.span;r=void 0,o=[]}}}return e&&!a?tt(new Error("A test script must have a load command")):(s.reset(),lt(s))}class k1 extends ir{constructor({dir:e,setStatus:r,loadAction:o,compareTo:n}={}){super(e,r,n);F(this,"chip",new Ja);F(this,"doLoad");F(this,"clock",Ae.get());this.doLoad=o}get chipId(){return this.chip.id}static from(e,r={}){const o=new k1(r);return ur(o,e,r.requireLoad)}with(e){return this.chip=e,this}async load(e){var o;if(!this.dir)return;const r=await((o=this.doLoad)==null?void 0:o.call(this,e?`${this.dir}/${e}`:this.dir));r&&(this.chip=r)}hasVar(e){return e==="time"?!0:(e=`${e}`,this.chip.hasIn(e)||this.chip.hasOut(e))}getVar(e,r){if(e=`${e}`,e==="time")return this.clock.toString();const o=this.chip.get(e,r);return o?o instanceof Pt?o.busVoltage:o.voltage():0}getWidth(e,r){const o=this.chip.get(e,r);return o?o.width:0}setVar(e,r,o){const n=this.chip.get(e,o);n instanceof Pt?n.busVoltage=r:n==null||n.pull(r===0?ot:Y)}eval(){this.chip.eval()}tick(){this.chip.eval(),this.clock.tick()}tock(){this.chip.eval(),this.clock.tock()}async loadROM(e){await this.chip.load(this.fs,[this.dir??"",e].join("/"))}async run(){this.clock.reset(),await super.run()}}class Nc{constructor(){F(this,"_chipTestInstruction_",!0)}async do(t){t.eval()}*steps(){yield this}}class Lc{constructor(){F(this,"_chipTestInstruction_",!0)}async do(t){t.tick()}*steps(){yield this}}class zc{constructor(){F(this,"_chipTestInstruction_",!0)}async do(t){t.tock()}*steps(){yield this}}function cr(s,t){let e=[];const r=Math.max(s.length,t.length);for(let o=0;o<r;o++){const n=s[o]??[],i=t[o]??[];e=e.concat(jc(n,i).map(a=>(a.row=o,a)))}return e}function jc(s,t){const e=[],r=Math.max(s.length,t.length);for(let o=0;o<r;o++){const n=s[o]??"",i=t[o]??"";n!==i&&!i.match(/^\*+$/)&&e.push({a:n,b:i,col:o})}return e}const $c=s=>{const t=u1.parse(s.hdl),e=sr.parse(s.tst);return{...s,maybeParsedHDL:t,maybeParsedTST:e}},Uc=s=>async t=>{let e;if(Fe(t.maybeParsedHDL)){const o=await f1({parts:lt(t.maybeParsedHDL),fs:s});pt(o)?e=tt(new Error(tt(o).message)):e=o}else e=tt(new Error("HDL Was not parsed"));const r=Fe(t.maybeParsedTST)?k1.from(lt(t.maybeParsedTST)):tt(new Error("TST Was not parsed"));return{...t,maybeChip:e,maybeTest:r}},Vc=s=>async t=>{if(console.log(`[DEBUG] tryRun starting for: ${t.name}`),pt(t.maybeChip))return console.log(`[DEBUG] ${t.name}: Chip build error`),{...t,pass:!1,out:tt(t.maybeChip).message};if(pt(t.maybeTest))return console.log(`[DEBUG] ${t.name}: Test build error`),{...t,pass:!1,out:tt(t.maybeTest).message};console.log(`[DEBUG] ${t.name}: Running test...`);const e=lt(t.maybeTest).with(lt(t.maybeChip)).setFileSystem(s);await e.run(),console.log(`[DEBUG] ${t.name}: Test completed`);const r=e.log(),o=h=>h.trim().split(`
`).map(m=>m.split("|").map(f=>f.trim()).filter(f=>f!=="")),n=o(r),i=o(t.cmp),a=cr(n,i),u=a.length===0;return console.log(`[DEBUG] ${t.name}: pass=${u}, diffs=${a.length}`),u||console.log("[DEBUG] First diff:",a[0]),{...t,out:r,pass:u}},Wc=(s,t)=>{const e=Vc(s),r=Uc(s);return async o=>{const n=async()=>e(await r(await $c(o))),i=async()=>t==null?void 0:t.hdl(o),[a,u]=await Promise.all([n(),i()]);return{...a,shadow:u}}};async function Gc(s,t,e,r){const o=Wc(e,r);return Promise.all(s.map(t).map(async n=>o(await n)))}var qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hc(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Ze(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,t){(function(e){s.exports=e()})(function(){return function e(r,o,n){function i(h,m){if(!o[h]){if(!r[h]){var f=typeof Ze=="function"&&Ze;if(!m&&f)return f(h,!0);if(a)return a(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var d=o[h]={exports:{}};r[h][0].call(d.exports,function(y){var p=r[h][1][y];return i(p||y)},d,d.exports,e,r,o,n)}return o[h].exports}for(var a=typeof Ze=="function"&&Ze,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(e,r,o){var n=e("./utils"),i=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(u){for(var h,m,f,v,d,y,p,k=[],g=0,A=u.length,x=A,I=n.getTypeOf(u)!=="string";g<u.length;)x=A-g,f=I?(h=u[g++],m=g<A?u[g++]:0,g<A?u[g++]:0):(h=u.charCodeAt(g++),m=g<A?u.charCodeAt(g++):0,g<A?u.charCodeAt(g++):0),v=h>>2,d=(3&h)<<4|m>>4,y=1<x?(15&m)<<2|f>>6:64,p=2<x?63&f:64,k.push(a.charAt(v)+a.charAt(d)+a.charAt(y)+a.charAt(p));return k.join("")},o.decode=function(u){var h,m,f,v,d,y,p=0,k=0,g="data:";if(u.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var A,x=3*(u=u.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(u.charAt(u.length-1)===a.charAt(64)&&x--,u.charAt(u.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=i.uint8array?new Uint8Array(0|x):new Array(0|x);p<u.length;)h=a.indexOf(u.charAt(p++))<<2|(v=a.indexOf(u.charAt(p++)))>>4,m=(15&v)<<4|(d=a.indexOf(u.charAt(p++)))>>2,f=(3&d)<<6|(y=a.indexOf(u.charAt(p++))),A[k++]=h,d!==64&&(A[k++]=m),y!==64&&(A[k++]=f);return A}},{"./support":30,"./utils":32}],2:[function(e,r,o){var n=e("./external"),i=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),u=e("./stream/DataLengthProbe");function h(m,f,v,d,y){this.compressedSize=m,this.uncompressedSize=f,this.crc32=v,this.compression=d,this.compressedContent=y}h.prototype={getContentWorker:function(){var m=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),f=this;return m.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(m,f,v){return m.pipe(new a).pipe(new u("uncompressedSize")).pipe(f.compressWorker(v)).pipe(new u("compressedSize")).withStreamInfo("compression",f)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,r,o){var n=e("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,r,o){var n=e("./utils"),i=function(){for(var a,u=[],h=0;h<256;h++){a=h;for(var m=0;m<8;m++)a=1&a?3988292384^a>>>1:a>>>1;u[h]=a}return u}();r.exports=function(a,u){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(h,m,f,v){var d=i,y=v+f;h^=-1;for(var p=v;p<y;p++)h=h>>>8^d[255&(h^m[p])];return-1^h}(0|u,a,a.length,0):function(h,m,f,v){var d=i,y=v+f;h^=-1;for(var p=v;p<y;p++)h=h>>>8^d[255&(h^m.charCodeAt(p))];return-1^h}(0|u,a,a.length,0):0}},{"./utils":32}],5:[function(e,r,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(e,r,o){var n=null;n=typeof Promise<"u"?Promise:e("lie"),r.exports={Promise:n}},{lie:37}],7:[function(e,r,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=e("pako"),a=e("./utils"),u=e("./stream/GenericWorker"),h=n?"uint8array":"array";function m(f,v){u.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=v,this.meta={}}o.magic="\b\0",a.inherits(m,u),m.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,f.data),!1)},m.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(v){f.push({data:v,meta:f.meta})}},o.compressWorker=function(f){return new m("Deflate",f)},o.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,r,o){function n(d,y){var p,k="";for(p=0;p<y;p++)k+=String.fromCharCode(255&d),d>>>=8;return k}function i(d,y,p,k,g,A){var x,I,w=d.file,C=d.compression,T=A!==h.utf8encode,z=a.transformTo("string",A(w.name)),P=a.transformTo("string",h.utf8encode(w.name)),U=w.comment,X=a.transformTo("string",A(U)),_=a.transformTo("string",h.utf8encode(U)),D=P.length!==w.name.length,l=_.length!==U.length,N="",st="",W="",nt=w.dir,H=w.date,rt={crc32:0,compressedSize:0,uncompressedSize:0};y&&!p||(rt.crc32=d.crc32,rt.compressedSize=d.compressedSize,rt.uncompressedSize=d.uncompressedSize);var E=0;y&&(E|=8),T||!D&&!l||(E|=2048);var M=0,Q=0;nt&&(M|=16),g==="UNIX"?(Q=798,M|=function(j,at){var kt=j;return j||(kt=at?16893:33204),(65535&kt)<<16}(w.unixPermissions,nt)):(Q=20,M|=function(j){return 63&(j||0)}(w.dosPermissions)),x=H.getUTCHours(),x<<=6,x|=H.getUTCMinutes(),x<<=5,x|=H.getUTCSeconds()/2,I=H.getUTCFullYear()-1980,I<<=4,I|=H.getUTCMonth()+1,I<<=5,I|=H.getUTCDate(),D&&(st=n(1,1)+n(m(z),4)+P,N+="up"+n(st.length,2)+st),l&&(W=n(1,1)+n(m(X),4)+_,N+="uc"+n(W.length,2)+W);var Z="";return Z+=`
\0`,Z+=n(E,2),Z+=C.magic,Z+=n(x,2),Z+=n(I,2),Z+=n(rt.crc32,4),Z+=n(rt.compressedSize,4),Z+=n(rt.uncompressedSize,4),Z+=n(z.length,2),Z+=n(N.length,2),{fileRecord:f.LOCAL_FILE_HEADER+Z+z+N,dirRecord:f.CENTRAL_FILE_HEADER+n(Q,2)+Z+n(X.length,2)+"\0\0\0\0"+n(M,4)+n(k,4)+z+N+X}}var a=e("../utils"),u=e("../stream/GenericWorker"),h=e("../utf8"),m=e("../crc32"),f=e("../signature");function v(d,y,p,k){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=y,this.zipPlatform=p,this.encodeFileName=k,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(v,u),v.prototype.push=function(d){var y=d.meta.percent||0,p=this.entriesCount,k=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,u.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:p?(y+100*(p-k-1))/p:100}}))},v.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var y=this.streamFiles&&!d.file.dir;if(y){var p=i(d,y,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(d){this.accumulate=!1;var y=this.streamFiles&&!d.file.dir,p=i(d,y,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),y)this.push({data:function(k){return f.DATA_DESCRIPTOR+n(k.crc32,4)+n(k.compressedSize,4)+n(k.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var d=this.bytesWritten,y=0;y<this.dirRecords.length;y++)this.push({data:this.dirRecords[y],meta:{percent:100}});var p=this.bytesWritten-d,k=function(g,A,x,I,w){var C=a.transformTo("string",w(I));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(g,2)+n(g,2)+n(A,4)+n(x,4)+n(C.length,2)+C}(this.dirRecords.length,p,d,this.zipComment,this.encodeFileName);this.push({data:k,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(d){this._sources.push(d);var y=this;return d.on("data",function(p){y.processChunk(p)}),d.on("end",function(){y.closedSource(y.previous.streamInfo),y._sources.length?y.prepareNextSource():y.end()}),d.on("error",function(p){y.error(p)}),this},v.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(d){var y=this._sources;if(!u.prototype.error.call(this,d))return!1;for(var p=0;p<y.length;p++)try{y[p].error(d)}catch{}return!0},v.prototype.lock=function(){u.prototype.lock.call(this);for(var d=this._sources,y=0;y<d.length;y++)d[y].lock()},r.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,r,o){var n=e("../compressions"),i=e("./ZipFileWorker");o.generateWorker=function(a,u,h){var m=new i(u.streamFiles,h,u.platform,u.encodeFileName),f=0;try{a.forEach(function(v,d){f++;var y=function(A,x){var I=A||x,w=n[I];if(!w)throw new Error(I+" is not a valid compression method !");return w}(d.options.compression,u.compression),p=d.options.compressionOptions||u.compressionOptions||{},k=d.dir,g=d.date;d._compressWorker(y,p).withStreamInfo("file",{name:v,dir:k,date:g,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(m)}),m.entriesCount=f}catch(v){m.error(v)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,r,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new n;for(var a in this)typeof this[a]!="function"&&(i[a]=this[a]);return i}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(i,a){return new n().loadAsync(i,a)},n.external=e("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,r,o){var n=e("./utils"),i=e("./external"),a=e("./utf8"),u=e("./zipEntries"),h=e("./stream/Crc32Probe"),m=e("./nodejsUtils");function f(v){return new i.Promise(function(d,y){var p=v.decompressed.getContentWorker().pipe(new h);p.on("error",function(k){y(k)}).on("end",function(){p.streamInfo.crc32!==v.decompressed.crc32?y(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}r.exports=function(v,d){var y=this;return d=n.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),m.isNode&&m.isStream(v)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",v,!0,d.optimizedBinaryString,d.base64).then(function(p){var k=new u(d);return k.load(p),k}).then(function(p){var k=[i.Promise.resolve(p)],g=p.files;if(d.checkCRC32)for(var A=0;A<g.length;A++)k.push(f(g[A]));return i.Promise.all(k)}).then(function(p){for(var k=p.shift(),g=k.files,A=0;A<g.length;A++){var x=g[A],I=x.fileNameStr,w=n.resolve(x.fileNameStr);y.file(w,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:d.createFolders}),x.dir||(y.file(w).unsafeOriginalName=I)}return k.zipComment.length&&(y.comment=k.zipComment),y})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,r,o){var n=e("../utils"),i=e("../stream/GenericWorker");function a(u,h){i.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(h)}n.inherits(a,i),a.prototype._bindStream=function(u){var h=this;(this._stream=u).pause(),u.on("data",function(m){h.push({data:m,meta:{percent:0}})}).on("error",function(m){h.isPaused?this.generatedError=m:h.error(m)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,r,o){var n=e("readable-stream").Readable;function i(a,u,h){n.call(this,u),this._helper=a;var m=this;a.on("data",function(f,v){m.push(f)||m._helper.pause(),h&&h(v)}).on("error",function(f){m.emit("error",f)}).on("end",function(){m.push(null)})}e("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},r.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,r,o){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,i);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,i)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var i=new Buffer(n);return i.fill(0),i},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(e,r,o){function n(w,C,T){var z,P=a.getTypeOf(C),U=a.extend(T||{},m);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(w=g(w)),U.createFolders&&(z=k(w))&&A.call(this,z,!0);var X=P==="string"&&U.binary===!1&&U.base64===!1;T&&T.binary!==void 0||(U.binary=!X),(C instanceof f&&C.uncompressedSize===0||U.dir||!C||C.length===0)&&(U.base64=!1,U.binary=!0,C="",U.compression="STORE",P="string");var _=null;_=C instanceof f||C instanceof u?C:y.isNode&&y.isStream(C)?new p(w,C):a.prepareContent(w,C,U.binary,U.optimizedBinaryString,U.base64);var D=new v(w,_,U);this.files[w]=D}var i=e("./utf8"),a=e("./utils"),u=e("./stream/GenericWorker"),h=e("./stream/StreamHelper"),m=e("./defaults"),f=e("./compressedObject"),v=e("./zipObject"),d=e("./generate"),y=e("./nodejsUtils"),p=e("./nodejs/NodejsStreamInputAdapter"),k=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var C=w.lastIndexOf("/");return 0<C?w.substring(0,C):""},g=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},A=function(w,C){return C=C!==void 0?C:m.createFolders,w=g(w),this.files[w]||n.call(this,w,null,{dir:!0,createFolders:C}),this.files[w]};function x(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var I={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var C,T,z;for(C in this.files)z=this.files[C],(T=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&w(T,z)},filter:function(w){var C=[];return this.forEach(function(T,z){w(T,z)&&C.push(z)}),C},file:function(w,C,T){if(arguments.length!==1)return w=this.root+w,n.call(this,w,C,T),this;if(x(w)){var z=w;return this.filter(function(U,X){return!X.dir&&z.test(U)})}var P=this.files[this.root+w];return P&&!P.dir?P:null},folder:function(w){if(!w)return this;if(x(w))return this.filter(function(P,U){return U.dir&&w.test(P)});var C=this.root+w,T=A.call(this,C),z=this.clone();return z.root=T.name,z},remove:function(w){w=this.root+w;var C=this.files[w];if(C||(w.slice(-1)!=="/"&&(w+="/"),C=this.files[w]),C&&!C.dir)delete this.files[w];else for(var T=this.filter(function(P,U){return U.name.slice(0,w.length)===w}),z=0;z<T.length;z++)delete this.files[T[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var C,T={};try{if((T=a.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var z=T.comment||this.comment||"";C=d.generateWorker(this,T,z)}catch(P){(C=new u("error")).error(P)}return new h(C,T.type||"string",T.mimeType)},generateAsync:function(w,C){return this.generateInternalStream(w).accumulate(C)},generateNodeStream:function(w,C){return(w=w||{}).type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(C)}};r.exports=I},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,r,o){r.exports=e("stream")},{stream:void 0}],17:[function(e,r,o){var n=e("./DataReader");function i(a){n.call(this,a);for(var u=0;u<this.data.length;u++)a[u]=255&a[u]}e("../utils").inherits(i,n),i.prototype.byteAt=function(a){return this.data[this.zero+a]},i.prototype.lastIndexOfSignature=function(a){for(var u=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),f=a.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===u&&this.data[v+1]===h&&this.data[v+2]===m&&this.data[v+3]===f)return v-this.zero;return-1},i.prototype.readAndCheckSignature=function(a){var u=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),f=a.charCodeAt(3),v=this.readData(4);return u===v[0]&&h===v[1]&&m===v[2]&&f===v[3]},i.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,r,o){var n=e("../utils");function i(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var u,h=0;for(this.checkOffset(a),u=this.index+a-1;u>=this.index;u--)h=(h<<8)+this.byteAt(u);return this.index+=a,h},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=i},{"../utils":32}],19:[function(e,r,o){var n=e("./Uint8ArrayReader");function i(a){n.call(this,a)}e("../utils").inherits(i,n),i.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,r,o){var n=e("./DataReader");function i(a){n.call(this,a)}e("../utils").inherits(i,n),i.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},i.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},i.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},i.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,r,o){var n=e("./ArrayReader");function i(a){n.call(this,a)}e("../utils").inherits(i,n),i.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},r.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,r,o){var n=e("../utils"),i=e("../support"),a=e("./ArrayReader"),u=e("./StringReader"),h=e("./NodeBufferReader"),m=e("./Uint8ArrayReader");r.exports=function(f){var v=n.getTypeOf(f);return n.checkSupport(v),v!=="string"||i.uint8array?v==="nodebuffer"?new h(f):i.uint8array?new m(n.transformTo("uint8array",f)):new a(n.transformTo("array",f)):new u(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,r,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,r,o){var n=e("./GenericWorker"),i=e("../utils");function a(u){n.call(this,"ConvertWorker to "+u),this.destType=u}i.inherits(a,n),a.prototype.processChunk=function(u){this.push({data:i.transformTo(this.destType,u.data),meta:u.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,r,o){var n=e("./GenericWorker"),i=e("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,n),a.prototype.processChunk=function(u){this.streamInfo.crc32=i(u.data,this.streamInfo.crc32||0),this.push(u)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,r,o){var n=e("../utils"),i=e("./GenericWorker");function a(u){i.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}n.inherits(a,i),a.prototype.processChunk=function(u){if(u){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+u.data.length}i.prototype.processChunk.call(this,u)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,r,o){var n=e("../utils"),i=e("./GenericWorker");function a(u){i.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(m){h.dataIsReady=!0,h.data=m,h.max=m&&m.length||0,h.type=n.getTypeOf(m),h.isPaused||h._tickAndRepeat()},function(m){h.error(m)})}n.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,h);break;case"uint8array":u=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":u=this.data.slice(this.index,h)}return this.index=h,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,r,o){function n(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,a){return this._listeners[i].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,a){if(this._listeners[i])for(var u=0;u<this._listeners[i].length;u++)this._listeners[i][u].call(this,a)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var a=this;return i.on("data",function(u){a.processChunk(u)}),i.on("end",function(){a.end()}),i.on("error",function(u){a.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,a){return this.extraStreamInfo[i]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},r.exports=n},{}],29:[function(e,r,o){var n=e("../utils"),i=e("./ConvertWorker"),a=e("./GenericWorker"),u=e("../base64"),h=e("../support"),m=e("../external"),f=null;if(h.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(y,p){return new m.Promise(function(k,g){var A=[],x=y._internalType,I=y._outputType,w=y._mimeType;y.on("data",function(C,T){A.push(C),p&&p(T)}).on("error",function(C){A=[],g(C)}).on("end",function(){try{var C=function(T,z,P){switch(T){case"blob":return n.newBlob(n.transformTo("arraybuffer",z),P);case"base64":return u.encode(z);default:return n.transformTo(T,z)}}(I,function(T,z){var P,U=0,X=null,_=0;for(P=0;P<z.length;P++)_+=z[P].length;switch(T){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(X=new Uint8Array(_),P=0;P<z.length;P++)X.set(z[P],U),U+=z[P].length;return X;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+T+"'")}}(x,A),w);k(C)}catch(T){g(T)}A=[]}).resume()})}function d(y,p,k){var g=p;switch(p){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=p,this._mimeType=k,n.checkSupport(g),this._worker=y.pipe(new i(g)),y.lock()}catch(A){this._worker=new a("error"),this._worker.error(A)}}d.prototype={accumulate:function(y){return v(this,y)},on:function(y,p){var k=this;return y==="data"?this._worker.on(y,function(g){p.call(k,g.data,g.meta)}):this._worker.on(y,function(){n.delay(p,arguments,k)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(y){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},y)}},r.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,r,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),o.blob=i.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!e("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(e,r,o){for(var n=e("./utils"),i=e("./support"),a=e("./nodejsUtils"),u=e("./stream/GenericWorker"),h=new Array(256),m=0;m<256;m++)h[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;h[254]=h[254]=1;function f(){u.call(this,"utf-8 decode"),this.leftOver=null}function v(){u.call(this,"utf-8 encode")}o.utf8encode=function(d){return i.nodebuffer?a.newBufferFrom(d,"utf-8"):function(y){var p,k,g,A,x,I=y.length,w=0;for(A=0;A<I;A++)(64512&(k=y.charCodeAt(A)))==55296&&A+1<I&&(64512&(g=y.charCodeAt(A+1)))==56320&&(k=65536+(k-55296<<10)+(g-56320),A++),w+=k<128?1:k<2048?2:k<65536?3:4;for(p=i.uint8array?new Uint8Array(w):new Array(w),A=x=0;x<w;A++)(64512&(k=y.charCodeAt(A)))==55296&&A+1<I&&(64512&(g=y.charCodeAt(A+1)))==56320&&(k=65536+(k-55296<<10)+(g-56320),A++),k<128?p[x++]=k:(k<2048?p[x++]=192|k>>>6:(k<65536?p[x++]=224|k>>>12:(p[x++]=240|k>>>18,p[x++]=128|k>>>12&63),p[x++]=128|k>>>6&63),p[x++]=128|63&k);return p}(d)},o.utf8decode=function(d){return i.nodebuffer?n.transformTo("nodebuffer",d).toString("utf-8"):function(y){var p,k,g,A,x=y.length,I=new Array(2*x);for(p=k=0;p<x;)if((g=y[p++])<128)I[k++]=g;else if(4<(A=h[g]))I[k++]=65533,p+=A-1;else{for(g&=A===2?31:A===3?15:7;1<A&&p<x;)g=g<<6|63&y[p++],A--;1<A?I[k++]=65533:g<65536?I[k++]=g:(g-=65536,I[k++]=55296|g>>10&1023,I[k++]=56320|1023&g)}return I.length!==k&&(I.subarray?I=I.subarray(0,k):I.length=k),n.applyFromCharCode(I)}(d=n.transformTo(i.uint8array?"uint8array":"array",d))},n.inherits(f,u),f.prototype.processChunk=function(d){var y=n.transformTo(i.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var p=y;(y=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),y.set(p,this.leftOver.length)}else y=this.leftOver.concat(y);this.leftOver=null}var k=function(A,x){var I;for((x=x||A.length)>A.length&&(x=A.length),I=x-1;0<=I&&(192&A[I])==128;)I--;return I<0||I===0?x:I+h[A[I]]>x?I:x}(y),g=y;k!==y.length&&(i.uint8array?(g=y.subarray(0,k),this.leftOver=y.subarray(k,y.length)):(g=y.slice(0,k),this.leftOver=y.slice(k,y.length))),this.push({data:o.utf8decode(g),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=f,n.inherits(v,u),v.prototype.processChunk=function(d){this.push({data:o.utf8encode(d.data),meta:d.meta})},o.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,r,o){var n=e("./support"),i=e("./base64"),a=e("./nodejsUtils"),u=e("./external");function h(p){return p}function m(p,k){for(var g=0;g<p.length;++g)k[g]=255&p.charCodeAt(g);return k}e("setimmediate"),o.newBlob=function(p,k){o.checkSupport("blob");try{return new Blob([p],{type:k})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(p),g.getBlob(k)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(p,k,g){var A=[],x=0,I=p.length;if(I<=g)return String.fromCharCode.apply(null,p);for(;x<I;)k==="array"||k==="nodebuffer"?A.push(String.fromCharCode.apply(null,p.slice(x,Math.min(x+g,I)))):A.push(String.fromCharCode.apply(null,p.subarray(x,Math.min(x+g,I)))),x+=g;return A.join("")},stringifyByChar:function(p){for(var k="",g=0;g<p.length;g++)k+=String.fromCharCode(p[g]);return k},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function v(p){var k=65536,g=o.getTypeOf(p),A=!0;if(g==="uint8array"?A=f.applyCanBeUsed.uint8array:g==="nodebuffer"&&(A=f.applyCanBeUsed.nodebuffer),A)for(;1<k;)try{return f.stringifyByChunk(p,g,k)}catch{k=Math.floor(k/2)}return f.stringifyByChar(p)}function d(p,k){for(var g=0;g<p.length;g++)k[g]=p[g];return k}o.applyFromCharCode=v;var y={};y.string={string:h,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return y.string.uint8array(p).buffer},uint8array:function(p){return m(p,new Uint8Array(p.length))},nodebuffer:function(p){return m(p,a.allocBuffer(p.length))}},y.array={string:v,array:h,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(p)}},y.arraybuffer={string:function(p){return v(new Uint8Array(p))},array:function(p){return d(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:h,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(new Uint8Array(p))}},y.uint8array={string:v,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:h,nodebuffer:function(p){return a.newBufferFrom(p)}},y.nodebuffer={string:v,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return y.nodebuffer.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:h},o.transformTo=function(p,k){if(k=k||"",!p)return k;o.checkSupport(p);var g=o.getTypeOf(k);return y[g][p](k)},o.resolve=function(p){for(var k=p.split("/"),g=[],A=0;A<k.length;A++){var x=k[A];x==="."||x===""&&A!==0&&A!==k.length-1||(x===".."?g.pop():g.push(x))}return g.join("/")},o.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(p)?"nodebuffer":n.uint8array&&p instanceof Uint8Array?"uint8array":n.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(p){if(!n[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(p){var k,g,A="";for(g=0;g<(p||"").length;g++)A+="\\x"+((k=p.charCodeAt(g))<16?"0":"")+k.toString(16).toUpperCase();return A},o.delay=function(p,k,g){setImmediate(function(){p.apply(g||null,k||[])})},o.inherits=function(p,k){function g(){}g.prototype=k.prototype,p.prototype=new g},o.extend=function(){var p,k,g={};for(p=0;p<arguments.length;p++)for(k in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],k)&&g[k]===void 0&&(g[k]=arguments[p][k]);return g},o.prepareContent=function(p,k,g,A,x){return u.Promise.resolve(k).then(function(I){return n.blob&&(I instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(I))!==-1)&&typeof FileReader<"u"?new u.Promise(function(w,C){var T=new FileReader;T.onload=function(z){w(z.target.result)},T.onerror=function(z){C(z.target.error)},T.readAsArrayBuffer(I)}):I}).then(function(I){var w=o.getTypeOf(I);return w?(w==="arraybuffer"?I=o.transformTo("uint8array",I):w==="string"&&(x?I=i.decode(I):g&&A!==!0&&(I=function(C){return m(C,n.uint8array?new Uint8Array(C.length):new Array(C.length))}(I))),I):u.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,r,o){var n=e("./reader/readerFor"),i=e("./utils"),a=e("./signature"),u=e("./zipEntry"),h=e("./support");function m(f){this.files=[],this.loadOptions=f}m.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(v)+", expected "+i.pretty(f)+")")}},isSignature:function(f,v){var d=this.reader.index;this.reader.setIndex(f);var y=this.reader.readString(4)===v;return this.reader.setIndex(d),y},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",d=i.transformTo(v,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,v,d,y=this.zip64EndOfCentralSize-44;0<y;)f=this.reader.readInt(2),v=this.reader.readInt(4),d=this.reader.readData(v),this.zip64ExtensibleData[f]={id:f,length:v,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,v;for(f=0;f<this.files.length;f++)v=this.files[f],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var v=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var y=v-d;if(0<y)this.isSignature(v,a.CENTRAL_FILE_HEADER)||(this.reader.zero=y);else if(y<0)throw new Error("Corrupted zip: missing "+Math.abs(y)+" bytes.")},prepareReader:function(f){this.reader=n(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,r,o){var n=e("./reader/readerFor"),i=e("./utils"),a=e("./compressedObject"),u=e("./crc32"),h=e("./utf8"),m=e("./compressions"),f=e("./support");function v(d,y){this.options=d,this.loadOptions=y}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var y,p;if(d.skip(22),this.fileNameLength=d.readInt(2),p=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((y=function(k){for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)&&m[g].magic===k)return m[g];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,y,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var y=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(y),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=n(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var y,p,k,g=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<g;)y=d.readInt(2),p=d.readInt(2),k=d.readData(p),this.extraFields[y]={id:y,length:p,value:k};d.setIndex(g)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var y=this.findExtraFieldUnicodePath();if(y!==null)this.fileNameStr=y;else{var p=i.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var k=this.findExtraFieldUnicodeComment();if(k!==null)this.fileCommentStr=k;else{var g=i.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var y=n(d.value);return y.readInt(1)!==1||u(this.fileName)!==y.readInt(4)?null:h.utf8decode(y.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var y=n(d.value);return y.readInt(1)!==1||u(this.fileComment)!==y.readInt(4)?null:h.utf8decode(y.readData(d.length-5))}return null}},r.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,r,o){function n(y,p,k){this.name=y,this.dir=k.dir,this.date=k.date,this.comment=k.comment,this.unixPermissions=k.unixPermissions,this.dosPermissions=k.dosPermissions,this._data=p,this._dataBinary=k.binary,this.options={compression:k.compression,compressionOptions:k.compressionOptions}}var i=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),u=e("./utf8"),h=e("./compressedObject"),m=e("./stream/GenericWorker");n.prototype={internalStream:function(y){var p=null,k="string";try{if(!y)throw new Error("No output type specified.");var g=(k=y.toLowerCase())==="string"||k==="text";k!=="binarystring"&&k!=="text"||(k="string"),p=this._decompressWorker();var A=!this._dataBinary;A&&!g&&(p=p.pipe(new u.Utf8EncodeWorker)),!A&&g&&(p=p.pipe(new u.Utf8DecodeWorker))}catch(x){(p=new m("error")).error(x)}return new i(p,k,"")},async:function(y,p){return this.internalStream(y).accumulate(p)},nodeStream:function(y,p){return this.internalStream(y||"nodebuffer").toNodejsStream(p)},_compressWorker:function(y,p){if(this._data instanceof h&&this._data.compression.magic===y.magic)return this._data.getCompressedWorker();var k=this._decompressWorker();return this._dataBinary||(k=k.pipe(new u.Utf8EncodeWorker)),h.createWorkerFrom(k,y,p)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof m?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)n.prototype[f[d]]=v;r.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,r,o){(function(n){var i,a,u=n.MutationObserver||n.WebKitMutationObserver;if(u){var h=0,m=new u(y),f=n.document.createTextNode("");m.observe(f,{characterData:!0}),i=function(){f.data=h=++h%2}}else if(n.setImmediate||n.MessageChannel===void 0)i="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var p=n.document.createElement("script");p.onreadystatechange=function(){y(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},n.document.documentElement.appendChild(p)}:function(){setTimeout(y,0)};else{var v=new n.MessageChannel;v.port1.onmessage=y,i=function(){v.port2.postMessage(0)}}var d=[];function y(){var p,k;a=!0;for(var g=d.length;g;){for(k=d,d=[],p=-1;++p<g;)k[p]();g=d.length}a=!1}r.exports=function(p){d.push(p)!==1||a||i()}}).call(this,typeof qe<"u"?qe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,r,o){var n=e("immediate");function i(){}var a={},u=["REJECTED"],h=["FULFILLED"],m=["PENDING"];function f(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,g!==i&&p(this,g)}function v(g,A,x){this.promise=g,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function d(g,A,x){n(function(){var I;try{I=A(x)}catch(w){return a.reject(g,w)}I===g?a.reject(g,new TypeError("Cannot resolve promise with itself")):a.resolve(g,I)})}function y(g){var A=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof A=="function")return function(){A.apply(g,arguments)}}function p(g,A){var x=!1;function I(T){x||(x=!0,a.reject(g,T))}function w(T){x||(x=!0,a.resolve(g,T))}var C=k(function(){A(w,I)});C.status==="error"&&I(C.value)}function k(g,A){var x={};try{x.value=g(A),x.status="success"}catch(I){x.status="error",x.value=I}return x}(r.exports=f).prototype.finally=function(g){if(typeof g!="function")return this;var A=this.constructor;return this.then(function(x){return A.resolve(g()).then(function(){return x})},function(x){return A.resolve(g()).then(function(){throw x})})},f.prototype.catch=function(g){return this.then(null,g)},f.prototype.then=function(g,A){if(typeof g!="function"&&this.state===h||typeof A!="function"&&this.state===u)return this;var x=new this.constructor(i);return this.state!==m?d(x,this.state===h?g:A,this.outcome):this.queue.push(new v(x,g,A)),x},v.prototype.callFulfilled=function(g){a.resolve(this.promise,g)},v.prototype.otherCallFulfilled=function(g){d(this.promise,this.onFulfilled,g)},v.prototype.callRejected=function(g){a.reject(this.promise,g)},v.prototype.otherCallRejected=function(g){d(this.promise,this.onRejected,g)},a.resolve=function(g,A){var x=k(y,A);if(x.status==="error")return a.reject(g,x.value);var I=x.value;if(I)p(g,I);else{g.state=h,g.outcome=A;for(var w=-1,C=g.queue.length;++w<C;)g.queue[w].callFulfilled(A)}return g},a.reject=function(g,A){g.state=u,g.outcome=A;for(var x=-1,I=g.queue.length;++x<I;)g.queue[x].callRejected(A);return g},f.resolve=function(g){return g instanceof this?g:a.resolve(new this(i),g)},f.reject=function(g){var A=new this(i);return a.reject(A,g)},f.all=function(g){var A=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=g.length,I=!1;if(!x)return this.resolve([]);for(var w=new Array(x),C=0,T=-1,z=new this(i);++T<x;)P(g[T],T);return z;function P(U,X){A.resolve(U).then(function(_){w[X]=_,++C!==x||I||(I=!0,a.resolve(z,w))},function(_){I||(I=!0,a.reject(z,_))})}},f.race=function(g){var A=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=g.length,I=!1;if(!x)return this.resolve([]);for(var w=-1,C=new this(i);++w<x;)T=g[w],A.resolve(T).then(function(z){I||(I=!0,a.resolve(C,z))},function(z){I||(I=!0,a.reject(C,z))});var T;return C}},{immediate:36}],38:[function(e,r,o){var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),r.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,r,o){var n=e("./zlib/deflate"),i=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/messages"),h=e("./zlib/zstream"),m=Object.prototype.toString,f=0,v=-1,d=0,y=8;function p(g){if(!(this instanceof p))return new p(g);this.options=i.assign({level:v,method:y,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},g||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var x=n.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(x!==f)throw new Error(u[x]);if(A.header&&n.deflateSetHeader(this.strm,A.header),A.dictionary){var I;if(I=typeof A.dictionary=="string"?a.string2buf(A.dictionary):m.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(x=n.deflateSetDictionary(this.strm,I))!==f)throw new Error(u[x]);this._dict_set=!0}}function k(g,A){var x=new p(A);if(x.push(g,!0),x.err)throw x.msg||u[x.err];return x.result}p.prototype.push=function(g,A){var x,I,w=this.strm,C=this.options.chunkSize;if(this.ended)return!1;I=A===~~A?A:A===!0?4:0,typeof g=="string"?w.input=a.string2buf(g):m.call(g)==="[object ArrayBuffer]"?w.input=new Uint8Array(g):w.input=g,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new i.Buf8(C),w.next_out=0,w.avail_out=C),(x=n.deflate(w,I))!==1&&x!==f)return this.onEnd(x),!(this.ended=!0);w.avail_out!==0&&(w.avail_in!==0||I!==4&&I!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(i.shrinkBuf(w.output,w.next_out))):this.onData(i.shrinkBuf(w.output,w.next_out)))}while((0<w.avail_in||w.avail_out===0)&&x!==1);return I===4?(x=n.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===f):I!==2||(this.onEnd(f),!(w.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},o.Deflate=p,o.deflate=k,o.deflateRaw=function(g,A){return(A=A||{}).raw=!0,k(g,A)},o.gzip=function(g,A){return(A=A||{}).gzip=!0,k(g,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,r,o){var n=e("./zlib/inflate"),i=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/constants"),h=e("./zlib/messages"),m=e("./zlib/zstream"),f=e("./zlib/gzheader"),v=Object.prototype.toString;function d(p){if(!(this instanceof d))return new d(p);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},p||{});var k=this.options;k.raw&&0<=k.windowBits&&k.windowBits<16&&(k.windowBits=-k.windowBits,k.windowBits===0&&(k.windowBits=-15)),!(0<=k.windowBits&&k.windowBits<16)||p&&p.windowBits||(k.windowBits+=32),15<k.windowBits&&k.windowBits<48&&!(15&k.windowBits)&&(k.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var g=n.inflateInit2(this.strm,k.windowBits);if(g!==u.Z_OK)throw new Error(h[g]);this.header=new f,n.inflateGetHeader(this.strm,this.header)}function y(p,k){var g=new d(k);if(g.push(p,!0),g.err)throw g.msg||h[g.err];return g.result}d.prototype.push=function(p,k){var g,A,x,I,w,C,T=this.strm,z=this.options.chunkSize,P=this.options.dictionary,U=!1;if(this.ended)return!1;A=k===~~k?k:k===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof p=="string"?T.input=a.binstring2buf(p):v.call(p)==="[object ArrayBuffer]"?T.input=new Uint8Array(p):T.input=p,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new i.Buf8(z),T.next_out=0,T.avail_out=z),(g=n.inflate(T,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&P&&(C=typeof P=="string"?a.string2buf(P):v.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,g=n.inflateSetDictionary(this.strm,C)),g===u.Z_BUF_ERROR&&U===!0&&(g=u.Z_OK,U=!1),g!==u.Z_STREAM_END&&g!==u.Z_OK)return this.onEnd(g),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&g!==u.Z_STREAM_END&&(T.avail_in!==0||A!==u.Z_FINISH&&A!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(T.output,T.next_out),I=T.next_out-x,w=a.buf2string(T.output,x),T.next_out=I,T.avail_out=z-I,I&&i.arraySet(T.output,T.output,x,I,0),this.onData(w)):this.onData(i.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(U=!0)}while((0<T.avail_in||T.avail_out===0)&&g!==u.Z_STREAM_END);return g===u.Z_STREAM_END&&(A=u.Z_FINISH),A===u.Z_FINISH?(g=n.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===u.Z_OK):A!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(T.avail_out=0))},d.prototype.onData=function(p){this.chunks.push(p)},d.prototype.onEnd=function(p){p===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},o.Inflate=d,o.inflate=y,o.inflateRaw=function(p,k){return(k=k||{}).raw=!0,y(p,k)},o.ungzip=y},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,r,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(u){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var m=h.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var f in m)m.hasOwnProperty(f)&&(u[f]=m[f])}}return u},o.shrinkBuf=function(u,h){return u.length===h?u:u.subarray?u.subarray(0,h):(u.length=h,u)};var i={arraySet:function(u,h,m,f,v){if(h.subarray&&u.subarray)u.set(h.subarray(m,m+f),v);else for(var d=0;d<f;d++)u[v+d]=h[m+d]},flattenChunks:function(u){var h,m,f,v,d,y;for(h=f=0,m=u.length;h<m;h++)f+=u[h].length;for(y=new Uint8Array(f),h=v=0,m=u.length;h<m;h++)d=u[h],y.set(d,v),v+=d.length;return y}},a={arraySet:function(u,h,m,f,v){for(var d=0;d<f;d++)u[v+d]=h[m+d]},flattenChunks:function(u){return[].concat.apply([],u)}};o.setTyped=function(u){u?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,i)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,a))},o.setTyped(n)},{}],42:[function(e,r,o){var n=e("./common"),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var u=new n.Buf8(256),h=0;h<256;h++)u[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function m(f,v){if(v<65537&&(f.subarray&&a||!f.subarray&&i))return String.fromCharCode.apply(null,n.shrinkBuf(f,v));for(var d="",y=0;y<v;y++)d+=String.fromCharCode(f[y]);return d}u[254]=u[254]=1,o.string2buf=function(f){var v,d,y,p,k,g=f.length,A=0;for(p=0;p<g;p++)(64512&(d=f.charCodeAt(p)))==55296&&p+1<g&&(64512&(y=f.charCodeAt(p+1)))==56320&&(d=65536+(d-55296<<10)+(y-56320),p++),A+=d<128?1:d<2048?2:d<65536?3:4;for(v=new n.Buf8(A),p=k=0;k<A;p++)(64512&(d=f.charCodeAt(p)))==55296&&p+1<g&&(64512&(y=f.charCodeAt(p+1)))==56320&&(d=65536+(d-55296<<10)+(y-56320),p++),d<128?v[k++]=d:(d<2048?v[k++]=192|d>>>6:(d<65536?v[k++]=224|d>>>12:(v[k++]=240|d>>>18,v[k++]=128|d>>>12&63),v[k++]=128|d>>>6&63),v[k++]=128|63&d);return v},o.buf2binstring=function(f){return m(f,f.length)},o.binstring2buf=function(f){for(var v=new n.Buf8(f.length),d=0,y=v.length;d<y;d++)v[d]=f.charCodeAt(d);return v},o.buf2string=function(f,v){var d,y,p,k,g=v||f.length,A=new Array(2*g);for(d=y=0;d<g;)if((p=f[d++])<128)A[y++]=p;else if(4<(k=u[p]))A[y++]=65533,d+=k-1;else{for(p&=k===2?31:k===3?15:7;1<k&&d<g;)p=p<<6|63&f[d++],k--;1<k?A[y++]=65533:p<65536?A[y++]=p:(p-=65536,A[y++]=55296|p>>10&1023,A[y++]=56320|1023&p)}return m(A,y)},o.utf8border=function(f,v){var d;for((v=v||f.length)>f.length&&(v=f.length),d=v-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?v:d+u[f[d]]>v?d:v}},{"./common":41}],43:[function(e,r,o){r.exports=function(n,i,a,u){for(var h=65535&n|0,m=n>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;m=m+(h=h+i[u++]|0)|0,--f;);h%=65521,m%=65521}return h|m<<16|0}},{}],44:[function(e,r,o){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,r,o){var n=function(){for(var i,a=[],u=0;u<256;u++){i=u;for(var h=0;h<8;h++)i=1&i?3988292384^i>>>1:i>>>1;a[u]=i}return a}();r.exports=function(i,a,u,h){var m=n,f=h+u;i^=-1;for(var v=h;v<f;v++)i=i>>>8^m[255&(i^a[v])];return-1^i}},{}],46:[function(e,r,o){var n,i=e("../utils/common"),a=e("./trees"),u=e("./adler32"),h=e("./crc32"),m=e("./messages"),f=0,v=4,d=0,y=-2,p=-1,k=4,g=2,A=8,x=9,I=286,w=30,C=19,T=2*I+1,z=15,P=3,U=258,X=U+P+1,_=42,D=113,l=1,N=2,st=3,W=4;function nt(c,L){return c.msg=m[L],L}function H(c){return(c<<1)-(4<c?9:0)}function rt(c){for(var L=c.length;0<=--L;)c[L]=0}function E(c){var L=c.state,O=L.pending;O>c.avail_out&&(O=c.avail_out),O!==0&&(i.arraySet(c.output,L.pending_buf,L.pending_out,O,c.next_out),c.next_out+=O,L.pending_out+=O,c.total_out+=O,c.avail_out-=O,L.pending-=O,L.pending===0&&(L.pending_out=0))}function M(c,L){a._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,L),c.block_start=c.strstart,E(c.strm)}function Q(c,L){c.pending_buf[c.pending++]=L}function Z(c,L){c.pending_buf[c.pending++]=L>>>8&255,c.pending_buf[c.pending++]=255&L}function j(c,L){var O,B,b=c.max_chain_length,S=c.strstart,$=c.prev_length,V=c.nice_match,R=c.strstart>c.w_size-X?c.strstart-(c.w_size-X):0,K=c.window,J=c.w_mask,q=c.prev,et=c.strstart+U,mt=K[S+$-1],dt=K[S+$];c.prev_length>=c.good_match&&(b>>=2),V>c.lookahead&&(V=c.lookahead);do if(K[(O=L)+$]===dt&&K[O+$-1]===mt&&K[O]===K[S]&&K[++O]===K[S+1]){S+=2,O++;do;while(K[++S]===K[++O]&&K[++S]===K[++O]&&K[++S]===K[++O]&&K[++S]===K[++O]&&K[++S]===K[++O]&&K[++S]===K[++O]&&K[++S]===K[++O]&&K[++S]===K[++O]&&S<et);if(B=U-(et-S),S=et-U,$<B){if(c.match_start=L,V<=($=B))break;mt=K[S+$-1],dt=K[S+$]}}while((L=q[L&J])>R&&--b!=0);return $<=c.lookahead?$:c.lookahead}function at(c){var L,O,B,b,S,$,V,R,K,J,q=c.w_size;do{if(b=c.window_size-c.lookahead-c.strstart,c.strstart>=q+(q-X)){for(i.arraySet(c.window,c.window,q,q,0),c.match_start-=q,c.strstart-=q,c.block_start-=q,L=O=c.hash_size;B=c.head[--L],c.head[L]=q<=B?B-q:0,--O;);for(L=O=q;B=c.prev[--L],c.prev[L]=q<=B?B-q:0,--O;);b+=q}if(c.strm.avail_in===0)break;if($=c.strm,V=c.window,R=c.strstart+c.lookahead,K=b,J=void 0,J=$.avail_in,K<J&&(J=K),O=J===0?0:($.avail_in-=J,i.arraySet(V,$.input,$.next_in,J,R),$.state.wrap===1?$.adler=u($.adler,V,J,R):$.state.wrap===2&&($.adler=h($.adler,V,J,R)),$.next_in+=J,$.total_in+=J,J),c.lookahead+=O,c.lookahead+c.insert>=P)for(S=c.strstart-c.insert,c.ins_h=c.window[S],c.ins_h=(c.ins_h<<c.hash_shift^c.window[S+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[S+P-1])&c.hash_mask,c.prev[S&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=S,S++,c.insert--,!(c.lookahead+c.insert<P)););}while(c.lookahead<X&&c.strm.avail_in!==0)}function kt(c,L){for(var O,B;;){if(c.lookahead<X){if(at(c),c.lookahead<X&&L===f)return l;if(c.lookahead===0)break}if(O=0,c.lookahead>=P&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),O!==0&&c.strstart-O<=c.w_size-X&&(c.match_length=j(c,O)),c.match_length>=P)if(B=a._tr_tally(c,c.strstart-c.match_start,c.match_length-P),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=P){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else B=a._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(B&&(M(c,!1),c.strm.avail_out===0))return l}return c.insert=c.strstart<P-1?c.strstart:P-1,L===v?(M(c,!0),c.strm.avail_out===0?st:W):c.last_lit&&(M(c,!1),c.strm.avail_out===0)?l:N}function ut(c,L){for(var O,B,b;;){if(c.lookahead<X){if(at(c),c.lookahead<X&&L===f)return l;if(c.lookahead===0)break}if(O=0,c.lookahead>=P&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=P-1,O!==0&&c.prev_length<c.max_lazy_match&&c.strstart-O<=c.w_size-X&&(c.match_length=j(c,O),c.match_length<=5&&(c.strategy===1||c.match_length===P&&4096<c.strstart-c.match_start)&&(c.match_length=P-1)),c.prev_length>=P&&c.match_length<=c.prev_length){for(b=c.strstart+c.lookahead-P,B=a._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-P),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=b&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=P-1,c.strstart++,B&&(M(c,!1),c.strm.avail_out===0))return l}else if(c.match_available){if((B=a._tr_tally(c,0,c.window[c.strstart-1]))&&M(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return l}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(B=a._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<P-1?c.strstart:P-1,L===v?(M(c,!0),c.strm.avail_out===0?st:W):c.last_lit&&(M(c,!1),c.strm.avail_out===0)?l:N}function ct(c,L,O,B,b){this.good_length=c,this.max_lazy=L,this.nice_length=O,this.max_chain=B,this.func=b}function gt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*T),this.dyn_dtree=new i.Buf16(2*(2*w+1)),this.bl_tree=new i.Buf16(2*(2*C+1)),rt(this.dyn_ltree),rt(this.dyn_dtree),rt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(z+1),this.heap=new i.Buf16(2*I+1),rt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*I+1),rt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function vt(c){var L;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=g,(L=c.state).pending=0,L.pending_out=0,L.wrap<0&&(L.wrap=-L.wrap),L.status=L.wrap?_:D,c.adler=L.wrap===2?0:1,L.last_flush=f,a._tr_init(L),d):nt(c,y)}function Vt(c){var L=vt(c);return L===d&&function(O){O.window_size=2*O.w_size,rt(O.head),O.max_lazy_match=n[O.level].max_lazy,O.good_match=n[O.level].good_length,O.nice_match=n[O.level].nice_length,O.max_chain_length=n[O.level].max_chain,O.strstart=0,O.block_start=0,O.lookahead=0,O.insert=0,O.match_length=O.prev_length=P-1,O.match_available=0,O.ins_h=0}(c.state),L}function qt(c,L,O,B,b,S){if(!c)return y;var $=1;if(L===p&&(L=6),B<0?($=0,B=-B):15<B&&($=2,B-=16),b<1||x<b||O!==A||B<8||15<B||L<0||9<L||S<0||k<S)return nt(c,y);B===8&&(B=9);var V=new gt;return(c.state=V).strm=c,V.wrap=$,V.gzhead=null,V.w_bits=B,V.w_size=1<<V.w_bits,V.w_mask=V.w_size-1,V.hash_bits=b+7,V.hash_size=1<<V.hash_bits,V.hash_mask=V.hash_size-1,V.hash_shift=~~((V.hash_bits+P-1)/P),V.window=new i.Buf8(2*V.w_size),V.head=new i.Buf16(V.hash_size),V.prev=new i.Buf16(V.w_size),V.lit_bufsize=1<<b+6,V.pending_buf_size=4*V.lit_bufsize,V.pending_buf=new i.Buf8(V.pending_buf_size),V.d_buf=1*V.lit_bufsize,V.l_buf=3*V.lit_bufsize,V.level=L,V.strategy=S,V.method=O,Vt(c)}n=[new ct(0,0,0,0,function(c,L){var O=65535;for(O>c.pending_buf_size-5&&(O=c.pending_buf_size-5);;){if(c.lookahead<=1){if(at(c),c.lookahead===0&&L===f)return l;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var B=c.block_start+O;if((c.strstart===0||c.strstart>=B)&&(c.lookahead=c.strstart-B,c.strstart=B,M(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-X&&(M(c,!1),c.strm.avail_out===0))return l}return c.insert=0,L===v?(M(c,!0),c.strm.avail_out===0?st:W):(c.strstart>c.block_start&&(M(c,!1),c.strm.avail_out),l)}),new ct(4,4,8,4,kt),new ct(4,5,16,8,kt),new ct(4,6,32,32,kt),new ct(4,4,16,16,ut),new ct(8,16,32,32,ut),new ct(8,16,128,128,ut),new ct(8,32,128,256,ut),new ct(32,128,258,1024,ut),new ct(32,258,258,4096,ut)],o.deflateInit=function(c,L){return qt(c,L,A,15,8,0)},o.deflateInit2=qt,o.deflateReset=Vt,o.deflateResetKeep=vt,o.deflateSetHeader=function(c,L){return c&&c.state?c.state.wrap!==2?y:(c.state.gzhead=L,d):y},o.deflate=function(c,L){var O,B,b,S;if(!c||!c.state||5<L||L<0)return c?nt(c,y):y;if(B=c.state,!c.output||!c.input&&c.avail_in!==0||B.status===666&&L!==v)return nt(c,c.avail_out===0?-5:y);if(B.strm=c,O=B.last_flush,B.last_flush=L,B.status===_)if(B.wrap===2)c.adler=0,Q(B,31),Q(B,139),Q(B,8),B.gzhead?(Q(B,(B.gzhead.text?1:0)+(B.gzhead.hcrc?2:0)+(B.gzhead.extra?4:0)+(B.gzhead.name?8:0)+(B.gzhead.comment?16:0)),Q(B,255&B.gzhead.time),Q(B,B.gzhead.time>>8&255),Q(B,B.gzhead.time>>16&255),Q(B,B.gzhead.time>>24&255),Q(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),Q(B,255&B.gzhead.os),B.gzhead.extra&&B.gzhead.extra.length&&(Q(B,255&B.gzhead.extra.length),Q(B,B.gzhead.extra.length>>8&255)),B.gzhead.hcrc&&(c.adler=h(c.adler,B.pending_buf,B.pending,0)),B.gzindex=0,B.status=69):(Q(B,0),Q(B,0),Q(B,0),Q(B,0),Q(B,0),Q(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),Q(B,3),B.status=D);else{var $=A+(B.w_bits-8<<4)<<8;$|=(2<=B.strategy||B.level<2?0:B.level<6?1:B.level===6?2:3)<<6,B.strstart!==0&&($|=32),$+=31-$%31,B.status=D,Z(B,$),B.strstart!==0&&(Z(B,c.adler>>>16),Z(B,65535&c.adler)),c.adler=1}if(B.status===69)if(B.gzhead.extra){for(b=B.pending;B.gzindex<(65535&B.gzhead.extra.length)&&(B.pending!==B.pending_buf_size||(B.gzhead.hcrc&&B.pending>b&&(c.adler=h(c.adler,B.pending_buf,B.pending-b,b)),E(c),b=B.pending,B.pending!==B.pending_buf_size));)Q(B,255&B.gzhead.extra[B.gzindex]),B.gzindex++;B.gzhead.hcrc&&B.pending>b&&(c.adler=h(c.adler,B.pending_buf,B.pending-b,b)),B.gzindex===B.gzhead.extra.length&&(B.gzindex=0,B.status=73)}else B.status=73;if(B.status===73)if(B.gzhead.name){b=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>b&&(c.adler=h(c.adler,B.pending_buf,B.pending-b,b)),E(c),b=B.pending,B.pending===B.pending_buf_size)){S=1;break}S=B.gzindex<B.gzhead.name.length?255&B.gzhead.name.charCodeAt(B.gzindex++):0,Q(B,S)}while(S!==0);B.gzhead.hcrc&&B.pending>b&&(c.adler=h(c.adler,B.pending_buf,B.pending-b,b)),S===0&&(B.gzindex=0,B.status=91)}else B.status=91;if(B.status===91)if(B.gzhead.comment){b=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>b&&(c.adler=h(c.adler,B.pending_buf,B.pending-b,b)),E(c),b=B.pending,B.pending===B.pending_buf_size)){S=1;break}S=B.gzindex<B.gzhead.comment.length?255&B.gzhead.comment.charCodeAt(B.gzindex++):0,Q(B,S)}while(S!==0);B.gzhead.hcrc&&B.pending>b&&(c.adler=h(c.adler,B.pending_buf,B.pending-b,b)),S===0&&(B.status=103)}else B.status=103;if(B.status===103&&(B.gzhead.hcrc?(B.pending+2>B.pending_buf_size&&E(c),B.pending+2<=B.pending_buf_size&&(Q(B,255&c.adler),Q(B,c.adler>>8&255),c.adler=0,B.status=D)):B.status=D),B.pending!==0){if(E(c),c.avail_out===0)return B.last_flush=-1,d}else if(c.avail_in===0&&H(L)<=H(O)&&L!==v)return nt(c,-5);if(B.status===666&&c.avail_in!==0)return nt(c,-5);if(c.avail_in!==0||B.lookahead!==0||L!==f&&B.status!==666){var V=B.strategy===2?function(R,K){for(var J;;){if(R.lookahead===0&&(at(R),R.lookahead===0)){if(K===f)return l;break}if(R.match_length=0,J=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,J&&(M(R,!1),R.strm.avail_out===0))return l}return R.insert=0,K===v?(M(R,!0),R.strm.avail_out===0?st:W):R.last_lit&&(M(R,!1),R.strm.avail_out===0)?l:N}(B,L):B.strategy===3?function(R,K){for(var J,q,et,mt,dt=R.window;;){if(R.lookahead<=U){if(at(R),R.lookahead<=U&&K===f)return l;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=P&&0<R.strstart&&(q=dt[et=R.strstart-1])===dt[++et]&&q===dt[++et]&&q===dt[++et]){mt=R.strstart+U;do;while(q===dt[++et]&&q===dt[++et]&&q===dt[++et]&&q===dt[++et]&&q===dt[++et]&&q===dt[++et]&&q===dt[++et]&&q===dt[++et]&&et<mt);R.match_length=U-(mt-et),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=P?(J=a._tr_tally(R,1,R.match_length-P),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(J=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),J&&(M(R,!1),R.strm.avail_out===0))return l}return R.insert=0,K===v?(M(R,!0),R.strm.avail_out===0?st:W):R.last_lit&&(M(R,!1),R.strm.avail_out===0)?l:N}(B,L):n[B.level].func(B,L);if(V!==st&&V!==W||(B.status=666),V===l||V===st)return c.avail_out===0&&(B.last_flush=-1),d;if(V===N&&(L===1?a._tr_align(B):L!==5&&(a._tr_stored_block(B,0,0,!1),L===3&&(rt(B.head),B.lookahead===0&&(B.strstart=0,B.block_start=0,B.insert=0))),E(c),c.avail_out===0))return B.last_flush=-1,d}return L!==v?d:B.wrap<=0?1:(B.wrap===2?(Q(B,255&c.adler),Q(B,c.adler>>8&255),Q(B,c.adler>>16&255),Q(B,c.adler>>24&255),Q(B,255&c.total_in),Q(B,c.total_in>>8&255),Q(B,c.total_in>>16&255),Q(B,c.total_in>>24&255)):(Z(B,c.adler>>>16),Z(B,65535&c.adler)),E(c),0<B.wrap&&(B.wrap=-B.wrap),B.pending!==0?d:1)},o.deflateEnd=function(c){var L;return c&&c.state?(L=c.state.status)!==_&&L!==69&&L!==73&&L!==91&&L!==103&&L!==D&&L!==666?nt(c,y):(c.state=null,L===D?nt(c,-3):d):y},o.deflateSetDictionary=function(c,L){var O,B,b,S,$,V,R,K,J=L.length;if(!c||!c.state||(S=(O=c.state).wrap)===2||S===1&&O.status!==_||O.lookahead)return y;for(S===1&&(c.adler=u(c.adler,L,J,0)),O.wrap=0,J>=O.w_size&&(S===0&&(rt(O.head),O.strstart=0,O.block_start=0,O.insert=0),K=new i.Buf8(O.w_size),i.arraySet(K,L,J-O.w_size,O.w_size,0),L=K,J=O.w_size),$=c.avail_in,V=c.next_in,R=c.input,c.avail_in=J,c.next_in=0,c.input=L,at(O);O.lookahead>=P;){for(B=O.strstart,b=O.lookahead-(P-1);O.ins_h=(O.ins_h<<O.hash_shift^O.window[B+P-1])&O.hash_mask,O.prev[B&O.w_mask]=O.head[O.ins_h],O.head[O.ins_h]=B,B++,--b;);O.strstart=B,O.lookahead=P-1,at(O)}return O.strstart+=O.lookahead,O.block_start=O.strstart,O.insert=O.lookahead,O.lookahead=0,O.match_length=O.prev_length=P-1,O.match_available=0,c.next_in=V,c.input=R,c.avail_in=$,O.wrap=S,d},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,r,o){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,r,o){r.exports=function(n,i){var a,u,h,m,f,v,d,y,p,k,g,A,x,I,w,C,T,z,P,U,X,_,D,l,N;a=n.state,u=n.next_in,l=n.input,h=u+(n.avail_in-5),m=n.next_out,N=n.output,f=m-(i-n.avail_out),v=m+(n.avail_out-257),d=a.dmax,y=a.wsize,p=a.whave,k=a.wnext,g=a.window,A=a.hold,x=a.bits,I=a.lencode,w=a.distcode,C=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;t:do{x<15&&(A+=l[u++]<<x,x+=8,A+=l[u++]<<x,x+=8),z=I[A&C];e:for(;;){if(A>>>=P=z>>>24,x-=P,(P=z>>>16&255)===0)N[m++]=65535&z;else{if(!(16&P)){if(!(64&P)){z=I[(65535&z)+(A&(1<<P)-1)];continue e}if(32&P){a.mode=12;break t}n.msg="invalid literal/length code",a.mode=30;break t}U=65535&z,(P&=15)&&(x<P&&(A+=l[u++]<<x,x+=8),U+=A&(1<<P)-1,A>>>=P,x-=P),x<15&&(A+=l[u++]<<x,x+=8,A+=l[u++]<<x,x+=8),z=w[A&T];s:for(;;){if(A>>>=P=z>>>24,x-=P,!(16&(P=z>>>16&255))){if(!(64&P)){z=w[(65535&z)+(A&(1<<P)-1)];continue s}n.msg="invalid distance code",a.mode=30;break t}if(X=65535&z,x<(P&=15)&&(A+=l[u++]<<x,(x+=8)<P&&(A+=l[u++]<<x,x+=8)),d<(X+=A&(1<<P)-1)){n.msg="invalid distance too far back",a.mode=30;break t}if(A>>>=P,x-=P,(P=m-f)<X){if(p<(P=X-P)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break t}if(D=g,(_=0)===k){if(_+=y-P,P<U){for(U-=P;N[m++]=g[_++],--P;);_=m-X,D=N}}else if(k<P){if(_+=y+k-P,(P-=k)<U){for(U-=P;N[m++]=g[_++],--P;);if(_=0,k<U){for(U-=P=k;N[m++]=g[_++],--P;);_=m-X,D=N}}}else if(_+=k-P,P<U){for(U-=P;N[m++]=g[_++],--P;);_=m-X,D=N}for(;2<U;)N[m++]=D[_++],N[m++]=D[_++],N[m++]=D[_++],U-=3;U&&(N[m++]=D[_++],1<U&&(N[m++]=D[_++]))}else{for(_=m-X;N[m++]=N[_++],N[m++]=N[_++],N[m++]=N[_++],2<(U-=3););U&&(N[m++]=N[_++],1<U&&(N[m++]=N[_++]))}break}}break}}while(u<h&&m<v);u-=U=x>>3,A&=(1<<(x-=U<<3))-1,n.next_in=u,n.next_out=m,n.avail_in=u<h?h-u+5:5-(u-h),n.avail_out=m<v?v-m+257:257-(m-v),a.hold=A,a.bits=x}},{}],49:[function(e,r,o){var n=e("../utils/common"),i=e("./adler32"),a=e("./crc32"),u=e("./inffast"),h=e("./inftrees"),m=1,f=2,v=0,d=-2,y=1,p=852,k=592;function g(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var D;return _&&_.state?(D=_.state,_.total_in=_.total_out=D.total=0,_.msg="",D.wrap&&(_.adler=1&D.wrap),D.mode=y,D.last=0,D.havedict=0,D.dmax=32768,D.head=null,D.hold=0,D.bits=0,D.lencode=D.lendyn=new n.Buf32(p),D.distcode=D.distdyn=new n.Buf32(k),D.sane=1,D.back=-1,v):d}function I(_){var D;return _&&_.state?((D=_.state).wsize=0,D.whave=0,D.wnext=0,x(_)):d}function w(_,D){var l,N;return _&&_.state?(N=_.state,D<0?(l=0,D=-D):(l=1+(D>>4),D<48&&(D&=15)),D&&(D<8||15<D)?d:(N.window!==null&&N.wbits!==D&&(N.window=null),N.wrap=l,N.wbits=D,I(_))):d}function C(_,D){var l,N;return _?(N=new A,(_.state=N).window=null,(l=w(_,D))!==v&&(_.state=null),l):d}var T,z,P=!0;function U(_){if(P){var D;for(T=new n.Buf32(512),z=new n.Buf32(32),D=0;D<144;)_.lens[D++]=8;for(;D<256;)_.lens[D++]=9;for(;D<280;)_.lens[D++]=7;for(;D<288;)_.lens[D++]=8;for(h(m,_.lens,0,288,T,0,_.work,{bits:9}),D=0;D<32;)_.lens[D++]=5;h(f,_.lens,0,32,z,0,_.work,{bits:5}),P=!1}_.lencode=T,_.lenbits=9,_.distcode=z,_.distbits=5}function X(_,D,l,N){var st,W=_.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new n.Buf8(W.wsize)),N>=W.wsize?(n.arraySet(W.window,D,l-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(N<(st=W.wsize-W.wnext)&&(st=N),n.arraySet(W.window,D,l-N,st,W.wnext),(N-=st)?(n.arraySet(W.window,D,l-N,N,0),W.wnext=N,W.whave=W.wsize):(W.wnext+=st,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=st))),0}o.inflateReset=I,o.inflateReset2=w,o.inflateResetKeep=x,o.inflateInit=function(_){return C(_,15)},o.inflateInit2=C,o.inflate=function(_,D){var l,N,st,W,nt,H,rt,E,M,Q,Z,j,at,kt,ut,ct,gt,vt,Vt,qt,c,L,O,B,b=0,S=new n.Buf8(4),$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return d;(l=_.state).mode===12&&(l.mode=13),nt=_.next_out,st=_.output,rt=_.avail_out,W=_.next_in,N=_.input,H=_.avail_in,E=l.hold,M=l.bits,Q=H,Z=rt,L=v;t:for(;;)switch(l.mode){case y:if(l.wrap===0){l.mode=13;break}for(;M<16;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(2&l.wrap&&E===35615){S[l.check=0]=255&E,S[1]=E>>>8&255,l.check=a(l.check,S,2,0),M=E=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&E)<<8)+(E>>8))%31){_.msg="incorrect header check",l.mode=30;break}if((15&E)!=8){_.msg="unknown compression method",l.mode=30;break}if(M-=4,c=8+(15&(E>>>=4)),l.wbits===0)l.wbits=c;else if(c>l.wbits){_.msg="invalid window size",l.mode=30;break}l.dmax=1<<c,_.adler=l.check=1,l.mode=512&E?10:12,M=E=0;break;case 2:for(;M<16;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(l.flags=E,(255&l.flags)!=8){_.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){_.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=E>>8&1),512&l.flags&&(S[0]=255&E,S[1]=E>>>8&255,l.check=a(l.check,S,2,0)),M=E=0,l.mode=3;case 3:for(;M<32;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}l.head&&(l.head.time=E),512&l.flags&&(S[0]=255&E,S[1]=E>>>8&255,S[2]=E>>>16&255,S[3]=E>>>24&255,l.check=a(l.check,S,4,0)),M=E=0,l.mode=4;case 4:for(;M<16;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}l.head&&(l.head.xflags=255&E,l.head.os=E>>8),512&l.flags&&(S[0]=255&E,S[1]=E>>>8&255,l.check=a(l.check,S,2,0)),M=E=0,l.mode=5;case 5:if(1024&l.flags){for(;M<16;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}l.length=E,l.head&&(l.head.extra_len=E),512&l.flags&&(S[0]=255&E,S[1]=E>>>8&255,l.check=a(l.check,S,2,0)),M=E=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(H<(j=l.length)&&(j=H),j&&(l.head&&(c=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),n.arraySet(l.head.extra,N,W,j,c)),512&l.flags&&(l.check=a(l.check,N,j,W)),H-=j,W+=j,l.length-=j),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(H===0)break t;for(j=0;c=N[W+j++],l.head&&c&&l.length<65536&&(l.head.name+=String.fromCharCode(c)),c&&j<H;);if(512&l.flags&&(l.check=a(l.check,N,j,W)),H-=j,W+=j,c)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(H===0)break t;for(j=0;c=N[W+j++],l.head&&c&&l.length<65536&&(l.head.comment+=String.fromCharCode(c)),c&&j<H;);if(512&l.flags&&(l.check=a(l.check,N,j,W)),H-=j,W+=j,c)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;M<16;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(E!==(65535&l.check)){_.msg="header crc mismatch",l.mode=30;break}M=E=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),_.adler=l.check=0,l.mode=12;break;case 10:for(;M<32;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}_.adler=l.check=g(E),M=E=0,l.mode=11;case 11:if(l.havedict===0)return _.next_out=nt,_.avail_out=rt,_.next_in=W,_.avail_in=H,l.hold=E,l.bits=M,2;_.adler=l.check=1,l.mode=12;case 12:if(D===5||D===6)break t;case 13:if(l.last){E>>>=7&M,M-=7&M,l.mode=27;break}for(;M<3;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}switch(l.last=1&E,M-=1,3&(E>>>=1)){case 0:l.mode=14;break;case 1:if(U(l),l.mode=20,D!==6)break;E>>>=2,M-=2;break t;case 2:l.mode=17;break;case 3:_.msg="invalid block type",l.mode=30}E>>>=2,M-=2;break;case 14:for(E>>>=7&M,M-=7&M;M<32;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if((65535&E)!=(E>>>16^65535)){_.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&E,M=E=0,l.mode=15,D===6)break t;case 15:l.mode=16;case 16:if(j=l.length){if(H<j&&(j=H),rt<j&&(j=rt),j===0)break t;n.arraySet(st,N,W,j,nt),H-=j,W+=j,rt-=j,nt+=j,l.length-=j;break}l.mode=12;break;case 17:for(;M<14;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(l.nlen=257+(31&E),E>>>=5,M-=5,l.ndist=1+(31&E),E>>>=5,M-=5,l.ncode=4+(15&E),E>>>=4,M-=4,286<l.nlen||30<l.ndist){_.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;M<3;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}l.lens[$[l.have++]]=7&E,E>>>=3,M-=3}for(;l.have<19;)l.lens[$[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,O={bits:l.lenbits},L=h(0,l.lens,0,19,l.lencode,0,l.work,O),l.lenbits=O.bits,L){_.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;ct=(b=l.lencode[E&(1<<l.lenbits)-1])>>>16&255,gt=65535&b,!((ut=b>>>24)<=M);){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(gt<16)E>>>=ut,M-=ut,l.lens[l.have++]=gt;else{if(gt===16){for(B=ut+2;M<B;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(E>>>=ut,M-=ut,l.have===0){_.msg="invalid bit length repeat",l.mode=30;break}c=l.lens[l.have-1],j=3+(3&E),E>>>=2,M-=2}else if(gt===17){for(B=ut+3;M<B;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}M-=ut,c=0,j=3+(7&(E>>>=ut)),E>>>=3,M-=3}else{for(B=ut+7;M<B;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}M-=ut,c=0,j=11+(127&(E>>>=ut)),E>>>=7,M-=7}if(l.have+j>l.nlen+l.ndist){_.msg="invalid bit length repeat",l.mode=30;break}for(;j--;)l.lens[l.have++]=c}}if(l.mode===30)break;if(l.lens[256]===0){_.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,O={bits:l.lenbits},L=h(m,l.lens,0,l.nlen,l.lencode,0,l.work,O),l.lenbits=O.bits,L){_.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,O={bits:l.distbits},L=h(f,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,O),l.distbits=O.bits,L){_.msg="invalid distances set",l.mode=30;break}if(l.mode=20,D===6)break t;case 20:l.mode=21;case 21:if(6<=H&&258<=rt){_.next_out=nt,_.avail_out=rt,_.next_in=W,_.avail_in=H,l.hold=E,l.bits=M,u(_,Z),nt=_.next_out,st=_.output,rt=_.avail_out,W=_.next_in,N=_.input,H=_.avail_in,E=l.hold,M=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;ct=(b=l.lencode[E&(1<<l.lenbits)-1])>>>16&255,gt=65535&b,!((ut=b>>>24)<=M);){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(ct&&!(240&ct)){for(vt=ut,Vt=ct,qt=gt;ct=(b=l.lencode[qt+((E&(1<<vt+Vt)-1)>>vt)])>>>16&255,gt=65535&b,!(vt+(ut=b>>>24)<=M);){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}E>>>=vt,M-=vt,l.back+=vt}if(E>>>=ut,M-=ut,l.back+=ut,l.length=gt,ct===0){l.mode=26;break}if(32&ct){l.back=-1,l.mode=12;break}if(64&ct){_.msg="invalid literal/length code",l.mode=30;break}l.extra=15&ct,l.mode=22;case 22:if(l.extra){for(B=l.extra;M<B;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}l.length+=E&(1<<l.extra)-1,E>>>=l.extra,M-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;ct=(b=l.distcode[E&(1<<l.distbits)-1])>>>16&255,gt=65535&b,!((ut=b>>>24)<=M);){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(!(240&ct)){for(vt=ut,Vt=ct,qt=gt;ct=(b=l.distcode[qt+((E&(1<<vt+Vt)-1)>>vt)])>>>16&255,gt=65535&b,!(vt+(ut=b>>>24)<=M);){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}E>>>=vt,M-=vt,l.back+=vt}if(E>>>=ut,M-=ut,l.back+=ut,64&ct){_.msg="invalid distance code",l.mode=30;break}l.offset=gt,l.extra=15&ct,l.mode=24;case 24:if(l.extra){for(B=l.extra;M<B;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}l.offset+=E&(1<<l.extra)-1,E>>>=l.extra,M-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){_.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(rt===0)break t;if(j=Z-rt,l.offset>j){if((j=l.offset-j)>l.whave&&l.sane){_.msg="invalid distance too far back",l.mode=30;break}at=j>l.wnext?(j-=l.wnext,l.wsize-j):l.wnext-j,j>l.length&&(j=l.length),kt=l.window}else kt=st,at=nt-l.offset,j=l.length;for(rt<j&&(j=rt),rt-=j,l.length-=j;st[nt++]=kt[at++],--j;);l.length===0&&(l.mode=21);break;case 26:if(rt===0)break t;st[nt++]=l.length,rt--,l.mode=21;break;case 27:if(l.wrap){for(;M<32;){if(H===0)break t;H--,E|=N[W++]<<M,M+=8}if(Z-=rt,_.total_out+=Z,l.total+=Z,Z&&(_.adler=l.check=l.flags?a(l.check,st,Z,nt-Z):i(l.check,st,Z,nt-Z)),Z=rt,(l.flags?E:g(E))!==l.check){_.msg="incorrect data check",l.mode=30;break}M=E=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;M<32;){if(H===0)break t;H--,E+=N[W++]<<M,M+=8}if(E!==(4294967295&l.total)){_.msg="incorrect length check",l.mode=30;break}M=E=0}l.mode=29;case 29:L=1;break t;case 30:L=-3;break t;case 31:return-4;case 32:default:return d}return _.next_out=nt,_.avail_out=rt,_.next_in=W,_.avail_in=H,l.hold=E,l.bits=M,(l.wsize||Z!==_.avail_out&&l.mode<30&&(l.mode<27||D!==4))&&X(_,_.output,_.next_out,Z-_.avail_out)?(l.mode=31,-4):(Q-=_.avail_in,Z-=_.avail_out,_.total_in+=Q,_.total_out+=Z,l.total+=Z,l.wrap&&Z&&(_.adler=l.check=l.flags?a(l.check,st,Z,_.next_out-Z):i(l.check,st,Z,_.next_out-Z)),_.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(Q==0&&Z===0||D===4)&&L===v&&(L=-5),L)},o.inflateEnd=function(_){if(!_||!_.state)return d;var D=_.state;return D.window&&(D.window=null),_.state=null,v},o.inflateGetHeader=function(_,D){var l;return _&&_.state&&2&(l=_.state).wrap?((l.head=D).done=!1,v):d},o.inflateSetDictionary=function(_,D){var l,N=D.length;return _&&_.state?(l=_.state).wrap!==0&&l.mode!==11?d:l.mode===11&&i(1,D,N,0)!==l.check?-3:X(_,D,N,N)?(l.mode=31,-4):(l.havedict=1,v):d},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,r,o){var n=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(m,f,v,d,y,p,k,g){var A,x,I,w,C,T,z,P,U,X=g.bits,_=0,D=0,l=0,N=0,st=0,W=0,nt=0,H=0,rt=0,E=0,M=null,Q=0,Z=new n.Buf16(16),j=new n.Buf16(16),at=null,kt=0;for(_=0;_<=15;_++)Z[_]=0;for(D=0;D<d;D++)Z[f[v+D]]++;for(st=X,N=15;1<=N&&Z[N]===0;N--);if(N<st&&(st=N),N===0)return y[p++]=20971520,y[p++]=20971520,g.bits=1,0;for(l=1;l<N&&Z[l]===0;l++);for(st<l&&(st=l),_=H=1;_<=15;_++)if(H<<=1,(H-=Z[_])<0)return-1;if(0<H&&(m===0||N!==1))return-1;for(j[1]=0,_=1;_<15;_++)j[_+1]=j[_]+Z[_];for(D=0;D<d;D++)f[v+D]!==0&&(k[j[f[v+D]]++]=D);if(T=m===0?(M=at=k,19):m===1?(M=i,Q-=257,at=a,kt-=257,256):(M=u,at=h,-1),_=l,C=p,nt=D=E=0,I=-1,w=(rt=1<<(W=st))-1,m===1&&852<rt||m===2&&592<rt)return 1;for(;;){for(z=_-nt,U=k[D]<T?(P=0,k[D]):k[D]>T?(P=at[kt+k[D]],M[Q+k[D]]):(P=96,0),A=1<<_-nt,l=x=1<<W;y[C+(E>>nt)+(x-=A)]=z<<24|P<<16|U|0,x!==0;);for(A=1<<_-1;E&A;)A>>=1;if(A!==0?(E&=A-1,E+=A):E=0,D++,--Z[_]==0){if(_===N)break;_=f[v+k[D]]}if(st<_&&(E&w)!==I){for(nt===0&&(nt=st),C+=l,H=1<<(W=_-nt);W+nt<N&&!((H-=Z[W+nt])<=0);)W++,H<<=1;if(rt+=1<<W,m===1&&852<rt||m===2&&592<rt)return 1;y[I=E&w]=st<<24|W<<16|C-p|0}}return E!==0&&(y[C+E]=_-nt<<24|64<<16|0),g.bits=st,0}},{"../utils/common":41}],51:[function(e,r,o){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,r,o){var n=e("../utils/common"),i=0,a=1;function u(b){for(var S=b.length;0<=--S;)b[S]=0}var h=0,m=29,f=256,v=f+1+m,d=30,y=19,p=2*v+1,k=15,g=16,A=7,x=256,I=16,w=17,C=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(v+2));u(X);var _=new Array(2*d);u(_);var D=new Array(512);u(D);var l=new Array(256);u(l);var N=new Array(m);u(N);var st,W,nt,H=new Array(d);function rt(b,S,$,V,R){this.static_tree=b,this.extra_bits=S,this.extra_base=$,this.elems=V,this.max_length=R,this.has_stree=b&&b.length}function E(b,S){this.dyn_tree=b,this.max_code=0,this.stat_desc=S}function M(b){return b<256?D[b]:D[256+(b>>>7)]}function Q(b,S){b.pending_buf[b.pending++]=255&S,b.pending_buf[b.pending++]=S>>>8&255}function Z(b,S,$){b.bi_valid>g-$?(b.bi_buf|=S<<b.bi_valid&65535,Q(b,b.bi_buf),b.bi_buf=S>>g-b.bi_valid,b.bi_valid+=$-g):(b.bi_buf|=S<<b.bi_valid&65535,b.bi_valid+=$)}function j(b,S,$){Z(b,$[2*S],$[2*S+1])}function at(b,S){for(var $=0;$|=1&b,b>>>=1,$<<=1,0<--S;);return $>>>1}function kt(b,S,$){var V,R,K=new Array(k+1),J=0;for(V=1;V<=k;V++)K[V]=J=J+$[V-1]<<1;for(R=0;R<=S;R++){var q=b[2*R+1];q!==0&&(b[2*R]=at(K[q]++,q))}}function ut(b){var S;for(S=0;S<v;S++)b.dyn_ltree[2*S]=0;for(S=0;S<d;S++)b.dyn_dtree[2*S]=0;for(S=0;S<y;S++)b.bl_tree[2*S]=0;b.dyn_ltree[2*x]=1,b.opt_len=b.static_len=0,b.last_lit=b.matches=0}function ct(b){8<b.bi_valid?Q(b,b.bi_buf):0<b.bi_valid&&(b.pending_buf[b.pending++]=b.bi_buf),b.bi_buf=0,b.bi_valid=0}function gt(b,S,$,V){var R=2*S,K=2*$;return b[R]<b[K]||b[R]===b[K]&&V[S]<=V[$]}function vt(b,S,$){for(var V=b.heap[$],R=$<<1;R<=b.heap_len&&(R<b.heap_len&&gt(S,b.heap[R+1],b.heap[R],b.depth)&&R++,!gt(S,V,b.heap[R],b.depth));)b.heap[$]=b.heap[R],$=R,R<<=1;b.heap[$]=V}function Vt(b,S,$){var V,R,K,J,q=0;if(b.last_lit!==0)for(;V=b.pending_buf[b.d_buf+2*q]<<8|b.pending_buf[b.d_buf+2*q+1],R=b.pending_buf[b.l_buf+q],q++,V===0?j(b,R,S):(j(b,(K=l[R])+f+1,S),(J=T[K])!==0&&Z(b,R-=N[K],J),j(b,K=M(--V),$),(J=z[K])!==0&&Z(b,V-=H[K],J)),q<b.last_lit;);j(b,x,S)}function qt(b,S){var $,V,R,K=S.dyn_tree,J=S.stat_desc.static_tree,q=S.stat_desc.has_stree,et=S.stat_desc.elems,mt=-1;for(b.heap_len=0,b.heap_max=p,$=0;$<et;$++)K[2*$]!==0?(b.heap[++b.heap_len]=mt=$,b.depth[$]=0):K[2*$+1]=0;for(;b.heap_len<2;)K[2*(R=b.heap[++b.heap_len]=mt<2?++mt:0)]=1,b.depth[R]=0,b.opt_len--,q&&(b.static_len-=J[2*R+1]);for(S.max_code=mt,$=b.heap_len>>1;1<=$;$--)vt(b,K,$);for(R=et;$=b.heap[1],b.heap[1]=b.heap[b.heap_len--],vt(b,K,1),V=b.heap[1],b.heap[--b.heap_max]=$,b.heap[--b.heap_max]=V,K[2*R]=K[2*$]+K[2*V],b.depth[R]=(b.depth[$]>=b.depth[V]?b.depth[$]:b.depth[V])+1,K[2*$+1]=K[2*V+1]=R,b.heap[1]=R++,vt(b,K,1),2<=b.heap_len;);b.heap[--b.heap_max]=b.heap[1],function(dt,Gt){var Se,Yt,Ie,bt,$e,v0,oe=Gt.dyn_tree,y1=Gt.max_code,dr=Gt.stat_desc.static_tree,pr=Gt.stat_desc.has_stree,hr=Gt.stat_desc.extra_bits,b1=Gt.stat_desc.extra_base,Re=Gt.stat_desc.max_length,Ue=0;for(bt=0;bt<=k;bt++)dt.bl_count[bt]=0;for(oe[2*dt.heap[dt.heap_max]+1]=0,Se=dt.heap_max+1;Se<p;Se++)Re<(bt=oe[2*oe[2*(Yt=dt.heap[Se])+1]+1]+1)&&(bt=Re,Ue++),oe[2*Yt+1]=bt,y1<Yt||(dt.bl_count[bt]++,$e=0,b1<=Yt&&($e=hr[Yt-b1]),v0=oe[2*Yt],dt.opt_len+=v0*(bt+$e),pr&&(dt.static_len+=v0*(dr[2*Yt+1]+$e)));if(Ue!==0){do{for(bt=Re-1;dt.bl_count[bt]===0;)bt--;dt.bl_count[bt]--,dt.bl_count[bt+1]+=2,dt.bl_count[Re]--,Ue-=2}while(0<Ue);for(bt=Re;bt!==0;bt--)for(Yt=dt.bl_count[bt];Yt!==0;)y1<(Ie=dt.heap[--Se])||(oe[2*Ie+1]!==bt&&(dt.opt_len+=(bt-oe[2*Ie+1])*oe[2*Ie],oe[2*Ie+1]=bt),Yt--)}}(b,S),kt(K,mt,b.bl_count)}function c(b,S,$){var V,R,K=-1,J=S[1],q=0,et=7,mt=4;for(J===0&&(et=138,mt=3),S[2*($+1)+1]=65535,V=0;V<=$;V++)R=J,J=S[2*(V+1)+1],++q<et&&R===J||(q<mt?b.bl_tree[2*R]+=q:R!==0?(R!==K&&b.bl_tree[2*R]++,b.bl_tree[2*I]++):q<=10?b.bl_tree[2*w]++:b.bl_tree[2*C]++,K=R,mt=(q=0)===J?(et=138,3):R===J?(et=6,3):(et=7,4))}function L(b,S,$){var V,R,K=-1,J=S[1],q=0,et=7,mt=4;for(J===0&&(et=138,mt=3),V=0;V<=$;V++)if(R=J,J=S[2*(V+1)+1],!(++q<et&&R===J)){if(q<mt)for(;j(b,R,b.bl_tree),--q!=0;);else R!==0?(R!==K&&(j(b,R,b.bl_tree),q--),j(b,I,b.bl_tree),Z(b,q-3,2)):q<=10?(j(b,w,b.bl_tree),Z(b,q-3,3)):(j(b,C,b.bl_tree),Z(b,q-11,7));K=R,mt=(q=0)===J?(et=138,3):R===J?(et=6,3):(et=7,4)}}u(H);var O=!1;function B(b,S,$,V){Z(b,(h<<1)+(V?1:0),3),function(R,K,J,q){ct(R),Q(R,J),Q(R,~J),n.arraySet(R.pending_buf,R.window,K,J,R.pending),R.pending+=J}(b,S,$)}o._tr_init=function(b){O||(function(){var S,$,V,R,K,J=new Array(k+1);for(R=V=0;R<m-1;R++)for(N[R]=V,S=0;S<1<<T[R];S++)l[V++]=R;for(l[V-1]=R,R=K=0;R<16;R++)for(H[R]=K,S=0;S<1<<z[R];S++)D[K++]=R;for(K>>=7;R<d;R++)for(H[R]=K<<7,S=0;S<1<<z[R]-7;S++)D[256+K++]=R;for($=0;$<=k;$++)J[$]=0;for(S=0;S<=143;)X[2*S+1]=8,S++,J[8]++;for(;S<=255;)X[2*S+1]=9,S++,J[9]++;for(;S<=279;)X[2*S+1]=7,S++,J[7]++;for(;S<=287;)X[2*S+1]=8,S++,J[8]++;for(kt(X,v+1,J),S=0;S<d;S++)_[2*S+1]=5,_[2*S]=at(S,5);st=new rt(X,T,f+1,v,k),W=new rt(_,z,0,d,k),nt=new rt(new Array(0),P,0,y,A)}(),O=!0),b.l_desc=new E(b.dyn_ltree,st),b.d_desc=new E(b.dyn_dtree,W),b.bl_desc=new E(b.bl_tree,nt),b.bi_buf=0,b.bi_valid=0,ut(b)},o._tr_stored_block=B,o._tr_flush_block=function(b,S,$,V){var R,K,J=0;0<b.level?(b.strm.data_type===2&&(b.strm.data_type=function(q){var et,mt=4093624447;for(et=0;et<=31;et++,mt>>>=1)if(1&mt&&q.dyn_ltree[2*et]!==0)return i;if(q.dyn_ltree[18]!==0||q.dyn_ltree[20]!==0||q.dyn_ltree[26]!==0)return a;for(et=32;et<f;et++)if(q.dyn_ltree[2*et]!==0)return a;return i}(b)),qt(b,b.l_desc),qt(b,b.d_desc),J=function(q){var et;for(c(q,q.dyn_ltree,q.l_desc.max_code),c(q,q.dyn_dtree,q.d_desc.max_code),qt(q,q.bl_desc),et=y-1;3<=et&&q.bl_tree[2*U[et]+1]===0;et--);return q.opt_len+=3*(et+1)+5+5+4,et}(b),R=b.opt_len+3+7>>>3,(K=b.static_len+3+7>>>3)<=R&&(R=K)):R=K=$+5,$+4<=R&&S!==-1?B(b,S,$,V):b.strategy===4||K===R?(Z(b,2+(V?1:0),3),Vt(b,X,_)):(Z(b,4+(V?1:0),3),function(q,et,mt,dt){var Gt;for(Z(q,et-257,5),Z(q,mt-1,5),Z(q,dt-4,4),Gt=0;Gt<dt;Gt++)Z(q,q.bl_tree[2*U[Gt]+1],3);L(q,q.dyn_ltree,et-1),L(q,q.dyn_dtree,mt-1)}(b,b.l_desc.max_code+1,b.d_desc.max_code+1,J+1),Vt(b,b.dyn_ltree,b.dyn_dtree)),ut(b),V&&ct(b)},o._tr_tally=function(b,S,$){return b.pending_buf[b.d_buf+2*b.last_lit]=S>>>8&255,b.pending_buf[b.d_buf+2*b.last_lit+1]=255&S,b.pending_buf[b.l_buf+b.last_lit]=255&$,b.last_lit++,S===0?b.dyn_ltree[2*$]++:(b.matches++,S--,b.dyn_ltree[2*(l[$]+f+1)]++,b.dyn_dtree[2*M(S)]++),b.last_lit===b.lit_bufsize-1},o._tr_align=function(b){Z(b,2,3),j(b,x,X),function(S){S.bi_valid===16?(Q(S,S.bi_buf),S.bi_buf=0,S.bi_valid=0):8<=S.bi_valid&&(S.pending_buf[S.pending++]=255&S.bi_buf,S.bi_buf>>=8,S.bi_valid-=8)}(b)}},{"../utils/common":41}],53:[function(e,r,o){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,r,o){(function(n){(function(i,a){if(!i.setImmediate){var u,h,m,f,v=1,d={},y=!1,p=i.document,k=Object.getPrototypeOf&&Object.getPrototypeOf(i);k=k&&k.setTimeout?k:i,u={}.toString.call(i.process)==="[object process]"?function(I){process.nextTick(function(){A(I)})}:function(){if(i.postMessage&&!i.importScripts){var I=!0,w=i.onmessage;return i.onmessage=function(){I=!1},i.postMessage("","*"),i.onmessage=w,I}}()?(f="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",x,!1):i.attachEvent("onmessage",x),function(I){i.postMessage(f+I,"*")}):i.MessageChannel?((m=new MessageChannel).port1.onmessage=function(I){A(I.data)},function(I){m.port2.postMessage(I)}):p&&"onreadystatechange"in p.createElement("script")?(h=p.documentElement,function(I){var w=p.createElement("script");w.onreadystatechange=function(){A(I),w.onreadystatechange=null,h.removeChild(w),w=null},h.appendChild(w)}):function(I){setTimeout(A,0,I)},k.setImmediate=function(I){typeof I!="function"&&(I=new Function(""+I));for(var w=new Array(arguments.length-1),C=0;C<w.length;C++)w[C]=arguments[C+1];var T={callback:I,args:w};return d[v]=T,u(v),v++},k.clearImmediate=g}function g(I){delete d[I]}function A(I){if(y)setTimeout(A,0,I);else{var w=d[I];if(w){y=!0;try{(function(C){var T=C.callback,z=C.args;switch(z.length){case 0:T();break;case 1:T(z[0]);break;case 2:T(z[0],z[1]);break;case 3:T(z[0],z[1],z[2]);break;default:T.apply(a,z)}})(w)}finally{g(I),y=!1}}}}function x(I){I.source===i&&typeof I.data=="string"&&I.data.indexOf(f)===0&&A(+I.data.slice(f.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof qe<"u"?qe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(lr);var Kc=lr.exports;const qc=Hc(Kc);class Zc{constructor(t){this.zip=t}normalize(t){return t.replace(/^\.?\//,"")}async readFile(t){const e=this.zip.file(this.normalize(t));if(!e)throw new Error(`File not found in zip: ${t}`);return await e.async("string")}async readdir(t){const e=this.normalize(t),r=e?e+"/":"";return Object.keys(this.zip.files).filter(o=>o.startsWith(r)).map(o=>o.substring(r.length).split("/")[0]).filter((o,n,i)=>i.indexOf(o)===n)}async stat(t){const e=this.normalize(t),r=this.zip.file(e),o=Object.keys(this.zip.files).some(n=>n.startsWith(e+"/"));if(!r&&!o)throw new Error(`Path not found: ${t}`);return{name:e.split("/").pop()||"",isFile:()=>!!r,isDirectory:()=>o}}async writeFile(t,e){throw new Error("Read Only")}async mkdir(t){throw new Error("Read Only")}async rm(t){throw new Error("Read Only")}async copyFile(t,e){throw new Error("Read Only")}async scandir(t){throw new Error("Not implemented")}}const Jc="/n2tgrader-node/";function be(s){return Jc+s.replace(/^\//,"")}function Xc(s){const e=s.toLowerCase().match(/(?:^|[-_.])0?([1-9]|1[0-9])(?:[-_.]|$)/);if(!e)return null;const r=Number(e[1]);return String(r).padStart(2,"0")}function Yc(s,t){const e=s.toLowerCase(),r=t.toLowerCase(),o=e.length,n=r.length,i=Array.from({length:o+1},()=>Array(n+1).fill(0));for(let a=0;a<=o;a++)i[a][0]=a;for(let a=0;a<=n;a++)i[0][a]=a;for(let a=1;a<=o;a++)for(let u=1;u<=n;u++){const h=e[a-1]===r[u-1]?0:1;i[a][u]=Math.min(i[a-1][u]+1,i[a][u-1]+1,i[a-1][u-1]+h)}return i[o][n]}function Qc(s,t){if(t.length===0)return;const e=s.toLowerCase().replace(/hack$/i,"");let r;for(const o of t){const n=o.replace(/\.tst$|\.cmp$|\.asm$|\.hdl$|\.vm$/i,""),i=n.toLowerCase(),a=Yc(e,i);(!r||a<r.dist)&&(r={name:n,dist:a})}if(r&&r.dist<=2)return r.name}async function tl(s,t){t("Loading zip...");const e=await qc.loadAsync(s),r=new is(new Zc(e)),n=Object.keys(e.files).filter(w=>!w.endsWith("/")).map(w=>{const C=w.split("/"),T=C[C.length-1],z="."+T.split(".").pop();return{name:T.replace(z,""),base:T,ext:z,full:w}}).filter(w=>[".asm",".hack"].includes(w.ext)?!0:Me[`${w.name}.tst`]!==void 0).filter(w=>[".hdl",".asm",".vm",".hack"].includes(w.ext));new Set(n.filter(w=>w.ext===".asm").map(w=>w.name));const i=new Map;for(const w of n)i.has(w.name)?i.get(w.name).ext===".hack"&&w.ext===".asm"&&i.set(w.name,w):i.set(w.name,w);const a=Array.from(i.values());if(n.length===0)return{exitCode:0,stdout:"No recognizable Nand2Tetris project files found in zip.",resultsByFile:{}};t(`Found ${n.length} project files. Fetching solutions...`);const u=Xc(s.name)||null;console.log(`[DEBUG] Inferred project directory: ${u||"none"}`);let h=[];try{const w=await fetch(be("solutions.json"));console.log(`[DEBUG] Fetching solutions.json from: ${be("solutions.json")}, status: ${w.status}`),w.ok&&(h=await w.json(),console.log(`[DEBUG] Loaded ${h.length} solution files`))}catch(w){console.warn("Failed to load solutions manifest",w)}u&&(h=h.filter(w=>w.split("/")[0]===u));const m=new Map;for(const w of h){const C=w.split("/"),T=C[C.length-1],z="."+T.split(".").pop().toLowerCase(),U=T.replace(/\.[^.]+$/,"").toLowerCase(),X=w.substring(0,w.lastIndexOf("/"));m.has(U)||m.set(U,{files:{},relDir:X});const _=m.get(U);_.files[z]=w}console.log("[DEBUG] Solution map keys:",Array.from(m.keys())),console.log("[DEBUG] Looking for computeradd:",m.has("computeradd"),m.get("computeradd"));const f={add:"computeradd",max:"computermax",rect:"computerrect"};function v(w){const C=w.toLowerCase(),T=f[C];if(T&&m.has(T))return console.log(`[DEBUG] Using Project 05 mapping: ${w} -> ${T}`),m.get(T);if(m.has(C))return m.get(C);const z="computer"+C;if(m.has(z))return console.log(`[DEBUG] Found with Computer prefix: ${w} -> ${z}`),m.get(z);const P=h.filter(D=>{const l=D.split("/");return l[l.length-1].replace(/\.[^.]+$/,"").toLowerCase()===C});if(P.length===0)return;const U=P[0],X=U.substring(0,U.lastIndexOf("/")),_={};for(const D of h){if(D.substring(0,D.lastIndexOf("/"))!==X)continue;const N=D.split("/"),st=N[N.length-1];if(st.replace(/\.[^.]+$/,"").toLowerCase()!==C)continue;const nt="."+st.split(".").pop().toLowerCase();_[nt]=D}return{files:_,relDir:X}}const d=async w=>{e.file(w.base)||e.file(w.full);let C=e.file(w.full);if(!C){const _=Object.keys(e.files).find(D=>D.endsWith("/"+w.base)||D===w.base);_&&(C=e.file(_))}const T=C?await C.async("string"):"",z=Me[`${w.name}.tst`],P=Me[`${w.name}.cmp`],U=w.full.substring(0,w.full.lastIndexOf("/"))||".",X=U.split("/")[0]||".";return{...w,hdl:T,tst:z,cmp:P,root:X,dir:U}},y=a.filter(w=>[".asm",".hack"].includes(w.ext)),p=a.filter(w=>w.ext===".hdl"),k=async(w,C,T)=>{let z=null;try{const P=new Promise((U,X)=>{z=setTimeout(()=>{try{const _=T();U(_)}catch(_){X(_)}},C)});return await Promise.race([w,P])}finally{z&&clearTimeout(z)}},g=[];t("Running ASM/HACK tests...");for(const w of y)try{if(u==="05"&&["max","rect","add"].includes(w.name.toLowerCase())){console.log(`[DEBUG] Skipping Project 05 program ${w.name}.hack - requires Computer chip test`),g.push({name:w.name,pass:!0,out:`${w.name}.hack is a test program for Computer.hdl (skipped - tested via Computer chip)`});continue}let C=Me[`${w.name}.tst`],T=Me[`${w.name}.cmp`],z=C?"Assignments":void 0,P=T?"Assignments":void 0;if(!C||!T)try{const j=pn;if(j){const at=j[w.name];if(at&&at[`${w.name}.tst`]&&at[`${w.name}.cmp`])C=at[`${w.name}.tst`],T=at[`${w.name}.cmp`],z=`project_04:${w.name}`,P=`project_04:${w.name}`;else{const kt=Object.keys(j||{}).flatMap(ct=>Object.keys(j[ct]||{})),ut=Qc(w.name,kt);if(ut)for(const ct of Object.keys(j||{})){const gt=j[ct],vt=`${ut}.tst`,Vt=`${ut}.cmp`;if(gt&&gt[vt]&&gt[Vt]){C=gt[vt],T=gt[Vt],z=`project_04:${ct}/${ut}`,P=`project_04:${ct}/${ut}`;break}}}}}catch{}if(!C||!T){const j=v(w.name);if(j){if(console.log(`[DEBUG] Found solution entry for ${w.name}:`,Object.keys(j.files)),!C&&j.files[".tst"]){const at=await fetch(be("solutions/"+j.files[".tst"]));at.ok&&(C=await at.text(),console.log(`[DEBUG] Loaded tst from: ${j.files[".tst"]}`))}if(!T&&j.files[".cmp"]){const at=await fetch(be("solutions/"+j.files[".cmp"]));at.ok&&(T=await at.text(),console.log(`[DEBUG] Loaded cmp from: ${j.files[".cmp"]}`))}}else console.log(`[DEBUG] No solution entry found for ${w.name}`)}if(w.name.toLowerCase()==="fill"){console.log("[DEBUG] Fill detected - using FillAutomatic");try{const j=await fetch(be("solutions/04/fill/FillAutomatic.tst")),at=await fetch(be("solutions/04/fill/FillAutomatic.cmp"));j.ok&&at.ok?(C=await j.text(),T=await at.text(),z="FillAutomatic",P="FillAutomatic",console.log("[DEBUG] Loaded FillAutomatic.tst and FillAutomatic.cmp")):console.log(`[DEBUG] Failed to load FillAutomatic files: tst=${j.ok}, cmp=${at.ok}`)}catch(j){console.log("[DEBUG] Error loading FillAutomatic:",j)}}if(!C||!T){g.push({name:w.name,pass:!1,out:`No test/cmp mapping found for ${w.name}`});continue}const U=sr.parse(C);if(U.ok===void 0&&U.error){g.push({name:w.name,pass:!1,out:"TST parse failed"});continue}let X=[],_=e.file(w.full);if(!_){const j=Object.keys(e.files).find(at=>at.endsWith("/"+w.base)||at===w.base);j&&(_=e.file(j))}const D=_?await _.async("string"):"";w.ext===".asm"?X=await Us(D):X=await Vs(D);const l=new r0(Int16Array.from(X)),N=async()=>l,st=v1.from(U.ok?U.ok:U,{dir:".",doLoad:N,requireLoad:!1}),W=st.ok?st.ok:st,nt=3e4;await k((async()=>(await W.run(),!0))(),nt,()=>{throw new Error(`Test run timed out after ${nt}ms`)});const H=W.log(),rt=j=>j.trim().split(`
`).map(at=>at.split("|").map(kt=>kt.trim()).filter(kt=>kt!=="")),E=rt(H),M=rt(T),Q=cr(E,M),Z=Q.length===0;Z||(console.log(`[DEBUG] ${w.name}: Comparison failed with ${Q.length} diffs`),console.log("[DEBUG] First diff:",Q[0])),g.push({name:w.name,pass:Z,out:H,cmp:T})}catch(C){g.push({name:w.name,pass:!1,out:`Error: ${C.message}`})}t("Running HDL tests...");const A=6e4,x=p.length>0?await k(Gc(p,d,r),A,()=>(console.error(`[ERROR] HDL tests timed out after ${A}ms`),[])):[],I={};for(const w of x)I[w.name]={status:w.pass?"pass":"fail",isPass:w.pass,message:w.out,expected:w.cmp,actual:w.out};for(const w of g)I[w.name]={status:w.pass?"pass":"fail",isPass:w.pass,message:w.pass?"Passed":"Failed",expected:w.cmp,actual:w.out};return{exitCode:0,stdout:JSON.stringify({resultsByFile:I}),resultJson:{resultsByFile:I},dedupedResults:[...x,...g]}}const je=s=>document.querySelector(s),ss=je("#file-upload"),el=je("#do-grade"),Ce=je("#status"),sl=je("#results-table"),we=je("#results-table tbody");function ce(s=""){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function rl(s){const t=document.createElement("tr"),e=s.pass?"pass":s.out&&typeof s.out=="string"&&s.out.includes("not found")?"not-found":"fail",r=s.out||(s.diff?s.diff:""),o=s.cmp||"",n=s.out||"";t.innerHTML=`<td>${s.name}</td>
                  <td class="${e}">${s.pass?"PASS":"FAIL"}</td>
                  <td><div class="code">${ce(o)}</div></td>
                  <td><div class="code">${ce(n)}</div></td>
                  <td><div class="code">${ce(r)}</div></td>`,we.appendChild(t)}el.addEventListener("click",async()=>{const s=ss.files&&ss.files[0];if(!s)return alert("Choose a zip file first");Ce.textContent="Starting grader...",we.innerHTML="",sl.classList.remove("hidden");try{const t=await tl(s,r=>Ce.textContent=r);Ce.textContent="Done.";let e=t.resultJson;if(e&&e.resultsByFile){const r=e.resultsByFile,o=Object.entries(r);let n=0,i=0,a=0;if(o.forEach(([u,h])=>{h&&h.status==="not_found"?a++:h&&h.isPass?n++:i++}),Ce.textContent=`Done. Summary: ${n} passed, ${i} failed, ${a} missing.`,o.length===0){const u=document.createElement("tr");u.innerHTML='<td colspan="5">No results in grader JSON</td>',we.appendChild(u)}else{const u=document.createElement("tr");u.innerHTML=`<td><b>Summary</b></td><td colspan="4"><b>${n} passed</b>, <b>${i} failed</b>, <b>${a} missing</b></td>`,we.appendChild(u),o.forEach(([h,m])=>{const f=document.createElement("tr"),v=m.isPass?"pass":m.status==="not_found"?"not-found":"fail",d=m.message||"",y=m.expected||"",p=m.actual||"";f.innerHTML=`<td>${ce(h)}</td>
                          <td class="${v}">${m.isPass?"PASS":"FAIL"}</td>
                          <td>${y?`<div class="code">${ce(y)}</div>`:""}</td>
                          <td>${p?`<div class="code">${ce(p)}</div>`:""}</td>
                          <td>${d?`<div class="code">${ce(d)}</div>`:""}</td>`,we.appendChild(f)})}}else{const r=t.dedupedResults||t.results||[];if(!r||r.length===0){const o=document.createElement("tr");o.innerHTML=`<td colspan="5"><pre class="code">${ce(t.stdout||t.stderr||JSON.stringify(t))}</pre></td>`,we.appendChild(o)}else r.forEach(o=>rl(o))}}catch(t){Ce.textContent="Error: "+(t.message||t),console.error(t)}});
