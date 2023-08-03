import React from 'react'
import logo from '../logo.svg';


function Image() {
  return (
    <>
			* public폴더 안에 이미지 출력 <br />
			<img src='./logo512.png' alt='' /> <br /><br />
			* src 폴더 안에 이미지 출력 - 상단에 import 해놓고 가져오기
			<img src={logo} alt='' />
    </>
  )
}

export default Image