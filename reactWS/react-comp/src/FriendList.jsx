import friends from './dummy'
import Friend from './Friend'

function FriendList() {

    // 화면에 재석이만 나오게 코드 작성하기 (필터 사용)
    return (
        <>
        {
            // friends.map((frd, index) => {
            //     if(frd.name !== '재석') return null
            //     return <Friend key={index} name={frd.name} alias={frd.alias} />
            // })
            

            // friends
                // .filter((frd) => {
            //     if(frd.name == '재석') {
            //         return true;
            //     } 
            //     return false;
            // }).map((frd, index) => (<Friend key={index} name={frd.name} alias={frd.alias} />))


            // filter는 return 값 T.F로 반환, 새 배열에 담을지 아닐지 결정(=검색)
            // 배열의 map / filter / sort 는 꼭 손에 익히기
            // friends
            //     .filter(frd => frd.name == '재석')
            //     .map((frd, index) => (
            //         <Friend key={index} name={frd.name} alias={frd.alias} />
            //     ))


            // 이름 순으로 정렬해서 값을 출력하고 싶다
            friends.sort((a, b) => a.name > b.name ? 1 : -1)
            .map((frd, index) => (
                <Friend key={index} name={frd.name} alias={frd.alias} />
            ))




        }
        </>
    )
}

export default FriendList