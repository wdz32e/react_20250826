import React, { useState } from 'react'

const headerNav =[
  {
    title:"intro",
    url:"#intro"
  },
  {
    title:"skill",
    url:"#skill"
  },
  {
    title:"site",
    url:"#site"
  },
  {
    title:"port",
    url:"#port"
  },
  {
    title:"contact",
    url:"#contact"
  },
   {
    title:"Footer",
    url:"#Footer"
  },
]

const Header = () => {
  /* 상태를 보여주는 ...react명령어 */
  const [show, setShow] = useState(false);
  //show : 상태를 만들고 초기값을 FALSE로 지정
  //setShow 상태값을 바꾸는 값
  //useState : 상태를 만들어주는 hook명령어
  //hook명령어 : 컴포넌트 안에서 상태를 만들고 관리하는 명령어들

  /* 클릭시 togglemenu 실행하기 */
  const toggleMenu = ()=>{
    setShow(pshow => !pshow)
    /* (pshow => !pshow) 는 false=>true or true=>false */
    //! : 반대값으로 변경
  }
  return (
    <header id='header' roll="banner">
      <div className="header_inner">
          <h1 className='header_logo'>
            portfolio 
            <em>developer</em>
          </h1>
          <nav 
          className={`header_nav ${show ?  "show" : " "}`}
          roll="navigation" 
          aria-label='메인메뉴'>
            <ul>
              {/* ul안에 있는 li가 5번 돌기 */}
              {headerNav.map((nav,key)=>(
                <li key={key}><a href={nav.url}>{nav.title}</a></li>
              ))}
              {/* key= index번호-> 반복될 아이한테 넣기 */}
    
            </ul>
          </nav>
          <nav
          className='header_nav_mobile' 
          id='headerToggle' 
          roll="button"
          tabIndex="0"
          /* clickevent 넣기 */
          onClick={toggleMenu}
          >
            <span></span>
          </nav>
      </div>
    </header>
  ) 
}

export default Header
