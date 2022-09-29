<template>
    <div id="footer" class="footer">
        <div class="brand-info">
            <h3>Æthyr Systems</h3>
            <ul class="social_footer_ul">
                <li><a href="http://facebook.com"><i class="fa-brands fa-facebook fa-xl"></i></a></li>
                <li><a href="http://twitter.com"><i class="fa-brands fa-twitter fa-xl"></i></a></li>
                <li><a href="http://linkedin.com"><i class="fa-brands fa-linkedin fa-xl"></i></a></li>
                <li><a href="http://instagram.com"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
            </ul>
        </div>
        <div class="aethyr-info">
            <p><i class="fa-solid fa-phone"></i>  +91-9999878398  </p>
            <p><i class="fa-solid fa-envelope"></i> info@aethyr.com  </p>
            <p><a href="https://goo.gl/maps/upCuBV9RghwmjFt58"><i class="fa-solid fa-location-dot"></i></a> 221B Baker Street, Marinilla-Ant, Colombia</p>
        </div>
        <div class="copyright">
            <p class="text-center">Copyright @2022 | Designed by <a href="#">Æthyr Systems</a></p>
        </div>
    </div>
</template>

<script>    
    export default {
        name: 'CustomFooter'
    }
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');

.footer {
    border-top:1px solid #323f45;
    min-height: 80px;
    height: 15vh;
    padding: 1vh 0;
    margin-left: 10vh;
    margin-right: 10vh;
    position: relative;
    bottom: 0%;
    display: flex;
    justify-content: space-around;
    background-color: #74afee3a ;
    color:rgb(20, 24, 90);
}
.social_footer_ul { display:table; margin:1px auto -0 auto; list-style-type:none;  }
.social_footer_ul li { padding-left:20px; padding-top:5px; float:left; }
.social_footer_ul li a { color:rgb(75, 71, 71); border:2px solid #CCC; padding:10px;border-radius:50%;}
.social_footer_ul li i {  width:20px; height:20px; text-align:center;}

.aethyr-info p{
    height: 15px;
}
.copyright {
    align-self: flex-end;
}
</style>>