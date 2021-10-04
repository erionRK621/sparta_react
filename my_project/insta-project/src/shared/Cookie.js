// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
//name으로 value를 받아올거니까 파라미터에 name
const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

// 만료일을 예전으로 설정해 쿠키를 지웁니다.
const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };
