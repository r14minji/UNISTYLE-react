function Header(){
  return(
    <header id="header">
      <div class="inner">
        <nav class="menuWeb">
          <h1><a href="index.html">UNISTYLE</a></h1>
  
          <div class="gnbWrap">
            <ul id="gnb_left">
              <li><a href="department.html">DEPARTMENT</a></li>
              <li><a href="youtube.html">YOUTUBE</a></li>
              <li><a href="community.html">COMMUNITY</a></li>
            </ul>
    
            <ul id="gnb_right">
              <li><a href="gallery.html">GALLERY</a></li>
              <li><a href="location.html">LOCATION</a></li>
              <li><a href="login.html"><i class="far fa-user"></i></a></li>
              <li><a href="join.html"><i class="fas fa-sign-in-alt"></i></a></li>
            </ul>
          </div>
  
        </nav>
  
        <a href="#" class="btnCall">
          <span>메뉴호출</span>
        </a>
  
        <nav class="menuMo">
          <h1><a href="index.html">UNISTYLE</a></h1>
  
          <ul id="gnbMo">
            <li><a href="department.html">DEPARTMENT</a></li>
            <li><a href="youtube.html">YOUTUBE</a></li>
            <li><a href="community.html">COMMUNITY</a></li>
            <li><a href="gallery.html">GALLERY</a></li>
            <li><a href="location.html">LOCATION</a></li>
            <li><a href="login.html">LOGIN</a></li>
            <li><a href="join.html">JOIN</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;