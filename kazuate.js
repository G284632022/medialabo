// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let p;
let h2;
let yoso;
let h3;
let h4;
let b1 = document.querySelector('#print');
  b1.addEventListener('click',greeting);

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする




// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  

  
  // 課題3-1: 正解判定する
  if (yoso === kotae) {
    console.log('正解です．おめでとう!');
    hyouji();
    h2.textContent='正解です．おめでとう!';
    //h2.insertAdjacentElement('beforeend',p);
  } else if(yoso < kotae) {
    console.log('まちがい．答えはもっと大きいですよ');
    hyouji();
    h2.textContent='まちがい．答えはもっと大きいですよ'
    //h2.insertAdjacentElement('beforeend',p);
  } else {
    console.log('まちがい．答えはもっと小さいですよ');
    hyouji();
    h2.textContent='まちがい．答えはもっと小さいですよ';
    //h2.insertAdjacentElement('beforeend',p);
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

function greeting() {
  let i = document.querySelector('input[name="kazuate"]');
  let kazu = i.value;
  let kazu2 = Number(kazu);
  yoso = kazu2;
  kaisu = kaisu + 1;
  if (kaisu < 4) {
    hantei();
  } else {
    seikai();
  }
  nankai();
  yosou();

}
function hyouji() {
  h2 = document.querySelector('p#result');
  p = document.createElement('p');

}

function seikai() {
  hyouji();
  h2.textContent='答えは' + kotae + 'でした. すでにゲームは終わっています';
}
function nankai() {
  h3 = document.querySelector('span#kaisu');
  h3.textContent=kaisu;
}
function yosou() {
  h4 = document.querySelector('span#answer');
  h4.textContent=kotae;
}