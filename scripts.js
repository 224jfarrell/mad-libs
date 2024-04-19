let A = document.getElementById('a');
let B = document.getElementById('b');
let C = document.getElementById('c');
let D = document.getElementById('d');
let E = document.getElementById('e');
let F = document.getElementById('f');
let G = document.getElementById('g');
let H = document.getElementById('h');
let I = document.getElementById('i');
let J = document.getElementById('j');
let K = document.getElementById('k');
let L = document.getElementById('l');
let M = document.getElementById('m');
let N = document.getElementById('n');
let O = document.getElementById('o');
let P, Q, R, S, T, U, V, W, X, Y, Z;
let b = document.getElementById('p');
let c = document.getElementById('q');
let d = document.getElementById('r');
let e = document.getElementById('s');
let f = d.clientHeight + e.clientHeight;


function submit(){
    P = A.value;
    Q = B.value;
    R = C.value;
    S = D.value;
    T = E.value;
    U = F.value;
    V = G.value;
    W = H.value;
    X = I.value;
    Y = J.value;
    Z = K.value;
    L.classList.add('to-hide');
    M.classList.add('to-hide');
    setTimeout(loadStory, 430);
    return P, Q, R, S, T, U, V, W, X, Y, Z;
}
function loadStory(){
    let a = `Hey ${P}!

Guess what? Last night was an absolute ${Q}! We ended up at this ${R} little karaoke bar downtown, where the drinks were ${S} and the dance floor was ${T}. Picture this: me, belting out ${U} songs like a ${V}, while the crowd cheered me on like I was headlining at ${W}. And just when I thought the night couldn't get any crazier, we stumbled upon a late-night ${X} truck that served up the most mouthwatering ${X}s this side of the border. It was one of those nights where the stars aligned, and the memories were made of pure gold. Can't wait to fill you in on all the ${Y} details!

Catch you later,
${Z}`;

    N.classList.add('to-show');
    O.innerText = a;
    b.disabled = true;
    c.style.height = (window.outerHeight - parseFloat(f) + 166) + "px";
}

