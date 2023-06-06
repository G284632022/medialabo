let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
//console.log('都市名:' + data.name);
//console.log('最高気温:' + data.main.temp_max);
//console.log('最低気温:' + data.main.temp_min);
let b = document.querySelector('#answer');
b.addEventListener('click',printAnswer);



function printAnswer() {
  let cs = document.querySelectorAll('input[name="countly"]');
  for (let c of cs) {
    if(c.checked) {
      //console.log(countly(c));
      sendRequest(countly(c));
    }
  }
  
}
function countly(s) {
  if (s.value === "1") {
    return 360630;
  } else if (s.value === "2") {
    return 524901;
  } else if (s.value === "3") {
    return 993800;
  } else if (s.value === "4") {
    return 1816670;
  } else if (s.value === "5") {
    return 1850147;
  } else if (s.value === "6") {
    return 1880252;
  } else if (s.value === "7") {
    return 2147714;
  } else if (s.value === "8") {
    return 2643743;
  } else if (s.value === "9") {
    return 2968815;
  } else if (s.value === "10") {
    return 3451189;
  } else if (s.value === "11") {
    return 5128581;
  } else if (s.value === "12") {
    return 5368361;
  }

}
function sendRequest(a) {
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ a  +'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.name);
  hyouji(data.weather[0].description, data.main.temp_max, data.main.temp_min, data.main.humidity, );
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
function hyouji(v,w,x,y,) {
  let h3 = document.querySelector('p#tenkou');
  h3.textContent = v;
  let h32 = document.querySelector('p#saikou');
  h32.textContent = w;
  let h33 = document.querySelector('p#saitei');
  h33.textContent = x;
  let h34 = document.querySelector('p#situdo');
  h34.textContent = y;
  
}