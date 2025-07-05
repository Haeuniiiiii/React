// 값을 받아서 localStorage에 저장할 것임
// title/writer/skill/cont
// 쿼리스트링에 있는 값을 split()메서드로 잘라서 가져오려고 함
// 그런데 이렇게 쓰면 나쁜 개발자ㅋㅋㅋㅋ 너무 어려워!
// const title = location.href.split("?")[1].split("&")[0].split("=")[1];
// alert("체크" + decodeURIComponent(title));

    // 프로그램 스타일 상, 함수 이름이 덮어지지 않게 namespace를 지정하면 좋다
    const request = {}; // 네임스페이스용 빈 객체, 나중에 필요하면 더 추가해도 됨!
    // 지역 나누듯이 지정하는 것임. 서울에 사는 하은 대전에 사는 하은 다른 것처럼


    // 쿼리스트링의 형식은 이렇다 name=val()
    // name이 하나밖에 없는 것
    request.getParameter = function(pName) {

        // 페이지 처리 위해서 하나 만들자! queryString이 없는 경우
        if( location.href.indexOf("?") == -1 ) return null;// ? 뒤에 번호가 없으면 -1 못찾겠다!
         
        let queryString = location.href.split("?")[1];
        let items = queryString.split("&");
        
        for (let i=0; i < items.length; i++) {
            let item = items[i];
            let name = item.split("=")[0]; // =의 왼쪽이 name 속성값
            if(name == pName) {
                return decodeURIComponent(item.split("=")[1]); // =의 오른쪽이 value값
            }
        }
    }
    
    // 같은 name이 여러개 인거
    request.getParameterValues = function(pName) {
        
        // 페이지 처리 위해서 하나 만들자! queryString이 없는 경우
        if( location.href.indexOf("?") == -1 ) return null;// ? 뒤에 번호가 없으면 -1 못찾겠다!

        let queryString = location.href.split("?")[1];
        let items = queryString.split("&");
        let result = []; // 빈 배열 선언
        for (let i=0; i < items.length; i++) {
            let item = items[i];
            let name = item.split("=")[0]; // =의 왼쪽이 name 속성값
            if(name == pName) {
                result.push( decodeURIComponent(item.split("=")[1]) ); // 리턴하지 말고 결과를 담아야함
            }
        }
        return result; //담은배열 리턴
    }