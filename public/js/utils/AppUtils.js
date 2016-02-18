import fetch from 'whatwg-fetch';


export const compareTimeMs = function(a,b) {
  if (a.date > b.date)
    return -1;
  else if (a.date < b.date)
    return 1;
  else
    return 0;
}

export const parseTimeMs = function(date){
  return new Date(Number(date)).toString().slice(0,15);
}

export const postJSON = function(url, body) {
    var body = JSON.stringify(body);
    return new Promise(function(resolve, reject) {
      window.fetch(url, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then((response) => {
        response.json()
        .then(function(json) {
          resolve(json);
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  }

export const simplePost = function(url, body) {
    var body = JSON.stringify(body);
    return new Promise(function(resolve, reject) {
      window.fetch(url, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then((response) => {
          resolve(response);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  }