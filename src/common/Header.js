function Header(){
  return(
    <header id="header">
      <div class="inner">
        <nav class="menuWeb">
          <h1><a href="index.html">UNISTYLE</a></h1>
  
          <div class="gnbWrap">
            <ul id="gnb_left">
              <li>
                <a href="department.html">DEPARTMENT</a>
                <div class="sub depth2_dep">
                  <strong>DEPARTMENT</strong>
                  <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Department</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Classes</a></li>
                  </ul>
                  <div class="sub_content">
                    <article></article>
                  </div>
                </div>
              </li>
              <li>
                <a href="youtube.html">YOUTUBE</a>
                <div class="sub">
                  <ul>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Youtube</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="community.html">COMMUNITY</a>
                <div class="sub">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Review</a></li>
                    <li><a href="#">Media</a></li>
                  </ul>
                </div>
              </li>
            </ul>
    
            <ul id="gnb_right">
              <li>
                <a href="gallery.html">GALLERY</a>
                <div class="sub">
                  <ul>
                    <li><a href="#">Books&Stuff</a></li>
                    <li><a href="#">KeyHolders</a></li>
                    <li><a href="#">Pouches</a></li>
                    <li><a href="#">Voucher</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="location.html">LOCATION</a>
                <div class="sub">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Recruit</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="login.html"><i class="far fa-user"></i></a>
              </li>
              <li>
                <a href="join.html"><i class="fas fa-sign-in-alt"></i></a>
              </li>
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