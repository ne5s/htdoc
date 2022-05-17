// 버튼을 클릭했을 때 동작하는 것
const btn = document.getElementById('list'); // 목록으로
const update = document.getElementById('update'); // 수정하기
const del = document.getElementById('delete'); //삭제하기

btn.addEventListener('click', () => {
    location.href='/blog';
})

del.addEventListener('click', ()=>{
    fetch(`http://localhost:3000/blog/delete/${del.dataset.doc}`, {
        method:'DELETE',
    })
    .then(res => res.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));
});

update.addEventListener('click', ()=>{
    location.href=`/blog/updateread/${update.dataset.doc}`;
})

/*
글 no 정보를 찾아야될 것
그 찾은 정보를 삭제할 것
목록에서 다시 반영할 것

router.delete; -> 페이지를 다시 돌려보낼 필요는 없을듯
삭제가 완료되었다는 메시지만 클라이언트로 전달
클라이언트가 특정 동작을 하도록 -> 경로 이동을 하도록
router.post;

글 수정하기를 위해서

기존의 글 값들을 가져오기 -> get으로
post 전송을 한 후에 수정하는 함수 코드를 활용. 수정
PUT 활용하지 않는 것을 지향하는 게..

*/