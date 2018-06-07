<template>
 <div class="moke">
  <div class="moke-header">
    <nav>
       <div class="moke-logo">
         <a href="###" class="moke-logo-a"></a>
       </div>
       <div class="moke-menu">
         <ul class="moke-menu-list">
          <li><a href="###">免费课程</a></li>
          <li><a href="###">职业路径</a></li>
          <li><a href="###">实战</a></li>
          <li><a href="###">猿问</a></li>
          <li><a href="###">发现</a></li>
         </ul>
       </div>
       <div class="login-area">
         <ul class="loginlist">
           <li class="shop-car">
             <a href="###" class="shop-car-a">
               <span >购物车</span>
             </a>
             <div class="mycar">
              <div class="mycar-title">
                <span class="my">我的购物车</span>
                <span class="courses">已加入0门课程</span>
              </div>
              <div class="carcontent">
                <div class="car-icon-container">
                  <div class="car-icon">
                  </div>
                  <p>购物车里空空如也</p>
                </div>
                <p class="text">快去这里选购你中意的课程</p>
                <p class="text"><a href="###">实战课程</a></p>
                <p class="text"><a href="###">职业路径</a></p>
              </div>
              <div class="myfooter">
                <span>我的订单中心</span>
                <a href="###" class="goshop">去购物</a>
              </div>
             </div>
           </li>
           <li class="remind-wrap">
            <a href="###">sss</a>
           </li>
           <li class="user-header">
            <a href="###"></a>
           </li>
         </ul>
       </div>
    </nav>
  </div>
 </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.moke {
  .moke-header {
    background: #07111b;
    nav {
      padding-right: 20px;
      height: 72px;
      .moke-logo {
        width: 140px;
        float: left;
        margin: 0 20px;
        .moke-logo-a {
            display: block;
            height: 72px;
            background: url('../assets/images/logo.png') no-repeat;
            background-position: center center;
            overflow: hidden;
        }
      }
      .moke-menu {
        @include left-right(left);
        .moke-menu-list li{
          @include left-right(left);
          a {
            font-size: 16px;
            color: rgba(255,255,255,.6);
            display: block;
            padding: 0 25px;
            line-height: 72px;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .login-area {
        @include left-right(right);
        .loginlist {
          li {
            @include left-right(left);
          }
          .shop-car {
            height: 36px;
            margin-top: 18px;
            position: relative;
            .shop-car-a {
              width: auto;
              height: 36px;
              padding: 0 33px;
              line-height: 36px;
              display: inline-block;
              border: 1px solid rgba(255,255,255,.2);
              border-radius: 18px;
              color: rgba(255,255,255,.6);
            }
            .mycar {
              display: none;
              padding: 0 12px;
              position: absolute;
              top: 54px;
              left: -240px;
              background: #fff;
              width: 350px;
              .mycar-title {
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #d9dde1;
                .my {
                    font-size: 16px;
                    color: #07111b;
                }
                .courses {
                    @include left-right(right);
                    font-size: 12px;
                    color: #93999f;
                }
              }
              .carcontent {
                text-align: center;
                .car-icon-container {
                  width: 200px;
                  margin: 20px auto;
                  border-bottom: 1px solid #d9dde1;
                  .car-icon {
                    width: 80px;
                    height: 80px;
                    margin: 10px auto;
                    border-radius: 50%;
                    background: #d9dde1;
                  }
                  p {
                    line-height: 40px;
                  }
                }
                .text {
                  line-height: 30px;
                  a {
                    color: rgba(240,20,20,.8);
                  }
                }
              }
              .myfooter {
                border-top: 1px solid #d9dde1;
                overflow: hidden;
                padding-top: 10px;
                padding-bottom: 10px;
                span {
                  @include left-right(left);
                  line-height: 36px;
                  color: #e4e4e4;
                  font-size: 12px;
                }
                .goshop {
                  @include left-right(right);
                  padding: 7px 17px;
                  background: rgba(240,20,20,.8);
                  border-radius: 14px;
                  color: #fff;
                }
              }
            }
            &:hover .mycar{
              display: block;
            }
          }
          .remind-wrap {
            width: 60px;
            height: 48px;
            text-align: center;
            line-height: 48px;
            margin-top: 12px;
            a {
              color: rgba(255,255,255,.6);
            }
          }
          .user-header {
            height: 72px;
            line-height: 72px;
            a {
              display: inline-block;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid rgba(255,255,255,.6);
              margin-top: 16px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1440px) {
    .moke .moke-header nav .moke-menu .moke-menu-list li a{
      padding: 0 20px;
    }
}
</style>
