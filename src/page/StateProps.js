import React, { useState } from 'react'

function StateProps({data, name}) {
  console.log(data, name)

	let [count, setCount] = useState(0);
	console.log(count);

	function plus() {
		console.log(count);
		// count++;
		// document.querySelector('button').innerHTML = count;
		setCount(++count);
	}

  return (
    <>
			<h2>Props</h2>
			* 부모컨포넌트에서 자식컨포트로 값을 보내줄 때 사용 <br />
			* 부모안에 있는 &#60;자식컨포넌트 속성='값' /	&#62; <br />
			* function 자식 (props) &#123; <br />
				console.log(props) // &#123;속성 : '값'&#125; <br />
			&#125; <br /><br />
			<h2>State</h2>
			<button onClick={plus}>{count}</button> <br />
			* useState() // 상태[값, 값수정 함수] <br />
			* 값 수정함수를 이용해서 값을 수정하면 컨포넌트 자체내에 랜더링 발생 <br />
			* 랜더링 발생 시 바뀐 값이 실체 dom에 적용됨
    </>
  )
}

export default StateProps