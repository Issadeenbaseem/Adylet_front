<template>
   <div>

        <div class="pxp-preloader">
            <span>
                <img src="images/adylet-logo2.png" />
            </span>
        </div>

        <header class="pxp-header fixed-top">
            <div class="pxp-container">
                <div class="pxp-header-container">
                    <div class="pxp-logo pxp-light">
                        <a href="javascript:;" class="pxp-animate">
                            <img id="logo-light" style="width: 10rem" src="images/adylet-logo.png" />
                            <img id="logo-dark" style="width: 10rem" src="images/adylet-logo2.png" />
                        </a>
                    </div>
                    <!-- <div class="pxp-nav-trigger pxp-light navbar d-xl-none flex-fill">
                        <a role="button" data-bs-toggle="offcanvas" data-bs-target="#pxpMobileNav" aria-controls="pxpMobileNav">
                            <div class="pxp-line-1"></div>
                            <div class="pxp-line-2"></div>
                            <div class="pxp-line-3"></div>
                        </a>
                        <div class="offcanvas offcanvas-start pxp-nav-mobile-container" tabindex="-1" id="pxpMobileNav">
                            <div class="offcanvas-header">
                                <div class="pxp-logo">
                                    <a href="index.html" class="pxp-animate"><span style="color: var(--pxpMainColor)">j</span>obster</a>
                                </div>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <nav class="pxp-nav-mobile">
                                    <ul class="navbar-nav justify-content-end flex-grow-1">
                                        <li class="nav-item dropdown">
                                            <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Home</a>
                                            <ul class="dropdown-menu">
                                                <li class="pxp-dropdown-header">Home Page Versions</li>
                                                <li class="nav-item"><a href="index.html">Hero with Animated Cards</a></li>
                                                <li class="nav-item"><a href="index-2.html">Center Image Rotator Hero</a></li>
                                                <li class="nav-item"><a href="index-3.html">Hero with Illustration</a></li>
                                                <li class="nav-item"><a href="index-4.html">Boxed Hero with Animation</a></li>
                                                <li class="nav-item"><a href="index-5.html">Full Image Background Hero</a></li>
                                                <li class="nav-item"><a href="index-6.html">Full Image with Top Search</a></li>
                                                <li class="nav-item"><a href="index-7.html">Hero With Image Card</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Find Jobs</a>
                                            <ul class="dropdown-menu">
                                                <li class="pxp-dropdown-header">Job Listings</li>
                                                <li class="nav-item"><a href="javascript:;">Top Search with Cards</a></li>
                                                <li class="nav-item"><a href="jobs-list-2.html">Top Search with Small Cards</a></li>
                                                <li class="nav-item"><a href="jobs-list-3.html">Top Search with List</a></li>
                                                <li class="nav-item"><a href="jobs-list-4.html">Left Search with Cards</a></li>
                                                <li class="nav-item"><a href="jobs-list-5.html">Left Search with Small Cards</a></li>
                                                <li class="nav-item"><a href="jobs-list-6.html">Left Search with List</a></li>
                                                <li class="nav-item"><a href="jobs-list-7.html">No Sidebar with Cards</a></li>
                                                <li class="nav-item"><a href="jobs-list-8.html">No Sidebar with Small Cards</a></li>
                                                <li class="nav-item"><a href="jobs-list-9.html">No Sidebar with List</a></li>
                                                <li class="nav-item"><a href="jobs-list-10.html">Top Search with Card Details</a></li>
                                                <li class="pxp-dropdown-header">Single Job</li>
                                                <li class="nav-item"><a href="single-job-1.html">Wide Content</a></li>
                                                <li class="nav-item"><a href="single-job-2.html">Right Side Panel</a></li>
                                                <li class="nav-item"><a href="single-job-3.html">Center Boxed Content</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Companies</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item dropdown">
                                                    <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Companies List</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item"><a href="companies-list-1.html">Top Search</a></li>
                                                        <li class="nav-item"><a href="companies-list-2.html">Left Search Side Panel</a></li>
                                                        <li class="nav-item"><a href="companies-list-3.html">Top Search Light</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Single Company</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item"><a href="single-company-1.html">Wide Content</a></li>
                                                        <li class="nav-item"><a href="single-company-2.html">Right Side Panel</a></li>
                                                        <li class="nav-item"><a href="single-company-3.html">Center Boxed Content</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item"><a href="company-dashboard.html">Company Dashboard</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Candidates</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item dropdown">
                                                    <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Candidates List</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item"><a href="candidates-list-1.html">Top Search</a></li>
                                                        <li class="nav-item"><a href="candidates-list-2.html">Left Search Side Panel</a></li>
                                                        <li class="nav-item"><a href="candidates-list-3.html">Top Search Light</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Single Candidate</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item"><a href="single-candidate-1.html">Wide Content</a></li>
                                                        <li class="nav-item"><a href="single-candidate-2.html">Right Side Panel</a></li>
                                                        <li class="nav-item"><a href="single-candidate-3.html">Center Boxed Content</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item"><a href="javasc">Candidate Dashboard</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="blog-list-1.html">Articles Cards</a></li>
                                                <li class="nav-item"><a href="blog-list-2.html">Articles List</a></li>
                                                <li class="nav-item"><a href="blog-list-3.html">Articles Boxed</a></li>
                                                <li class="nav-item"><a href="single-blog-post.html">Single Article</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a role="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="about-us.html">About Us</a></li>
                                                <li class="nav-item"><a href="pricing.html">Pricing</a></li>
                                                <li class="nav-item"><a href="faqs.html">FAQs</a></li>
                                                <li class="nav-item"><a href="contact-us.html">Contact Us</a></li>
                                                <li class="nav-item"><a href="sign-in.html">Sign In</a></li>
                                                <li class="nav-item"><a href="sign-up.html">Sign Up</a></li>
                                                <li class="nav-item"><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> -->

                    <nav class="pxp-user-nav d-none d-sm-flex">
                        <a href="javascript:;" class="btn rounded-pill pxp-nav-btn">Post Ad</a>
                        <a class="btn rounded-pill pxp-user-nav-trigger" data-bs-toggle="modal" href="#pxp-signin-modal" role="button">Sign in</a>
                    </nav>
                </div>
            </div>
        </header>

        <section class="pxp-hero pxp-hero-bg pxp-cover" style="background-image: url(images/hero-bg.jpg);">
            <div class="pxp-hero-opacity"></div>
            <div class="pxp-hero-caption">
                <div class="pxp-container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-xl-9 col-xxl-8">
                            <h1 class="text-white text-center">#1 Destination For Ads</h1>

                            <div class="pxp-hero-form pxp-hero-form-round pxp-large mt-4 mt-lg-5">
                                <form class="row gx-3 align-items-center" action="#">
                                    <div class="col-12 col-lg">
                                        <div class="input-group mb-3 mb-lg-0">
                                            <span class="input-group-text"><span class="fa fa-search"></span></span>
                                            <input autofocus type="text" class="form-control" placeholder="Searching for?">
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg pxp-has-left-border">
                                        <div class="input-group mb-3 mb-lg-0">
                                            <span class="input-group-text"><span class="fa fa-globe"></span></span>
                                            <select class="form-select">
                                                <option selected>All Locations</option>
                                                <option>Gaborone</option>
                                                <option>Molepolole</option>
                                                <option>Maun</option>
                                                <option>Francistown</option>
                                                <option>Selebi-Phikwe</option>
                                                <option>Serowe/Palapye</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg pxp-has-left-border">
                                        <div class="input-group mb-3 mb-lg-0">
                                            <span class="input-group-text"><span class="fa fa-folder-o"></span></span>
                                            <select class="form-select">
                                                <option selected>All categories</option>
                                                <option>Electronics</option>
                                                <option>Vehicles</option>
                                                <option>Animals</option>
                                                <option>Properties</option>
                                                <option>Gardening</option>
                                                <option>Services</option>
                                                <option>Industry</option>
                                                <option>Fashion</option>
                                                <option>Essentials</option>
                                                <option>Education</option>
                                                <option>Jobs</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-auto">
                                        <button>Find</button>
                                    </div>
                                </form>
                            </div>

                            <div class="pxp-hero-subtitle text-white text-center mt-3 mt-lg-4"><strong>12,800</strong> ads & counting...</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-100">
            <div class="pxp-container">
                <h2 class="pxp-section-h2 text-center">Browse by Category</h2>
                <!-- <p class="pxp-text-light text-center">Browse what you need with our categories</p> -->

                <div class="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top">
                <div v-for=" category in categories" v-bind:key="category.id">
                  <div class="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-2-container">
                        <a href="javascript:;" class="pxp-categories-card-2">
                            <div class="pxp-categories-card-2-icon-container">
                                <div class="pxp-categories-card-2-icon">
                                    <img style="width: 48px;" src="images/responsive.png" />
                                </div>
                            </div>
                            <div class="pxp-categories-card-2-title">{{category.name}}</div>
                            <div class="pxp-categories-card-2-subtitle">119,549 ads</div>
                        </a>
                    </div></div>
                  
                   
                </div>
            </div>
        </section>

        <footer class="pxp-main-footer mt-100">
            <div class="pxp-main-footer-top pt-100 pb-100" style="background-color: var(--pxpMainColorLight);">
                <div class="pxp-container">
                    <div class="row">
                        <div class="col-lg-6 col-xl-5 col-xxl-4 mb-4">
                            <div class="pxp-footer-logo">
                                <a href="javascript:;" class="pxp-animate">
                                    <img style="width: 12rem" src="images/adylet-logo2.png" />
                                </a>
                            </div>
                            <div class="pxp-footer-section mt-3 mt-md-4">
                                <!-- <h3>Call us</h3> -->
                                <div class="pxp-footer-phone">(+267) 76 780 630</div>
                            </div>
                            <div class="mt-3 mt-md-4 pxp-footer-section">
                                <!-- <h3>Write to us</h3> -->
                                <ul class="pxp-footer-list">
                                    <li><a href="mailto:info@adylet.com">info@adylet.com</a></li>
                                    <li><a href="mailto:support@adylet.com">support@adylet.com</a></li>
                                    <li><a href="mailto:escalations@adylet.com">escalations@adylet.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-7 col-xxl-8">
                            <div class="row">
                                <div class="col-md-6 col-xl-4 col-xxl-3 mb-4">
                                    <div class="pxp-footer-section">
                                        <h3>Support</h3>
                                        <ul class="pxp-footer-list">
                                            <li><a href="javascript:;">FAQ</a></li>
                                            <li><a href="javascript:;">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-4 col-xxl-3 mb-4">
                                    <div class="pxp-footer-section">
                                        <h3>Adylet</h3>
                                        <ul class="pxp-footer-list">
                                            <li><a href="javascript:;">About Us</a></li>
                                            <li><a href="javascript:;">Careers</a></li>
                                            <li><a href="javascript:;">Terms & Conditions</a></li>
                                            <li><a href="javascript:;">Privacy Policy</a></li>
                                            <li><a href="javascript:;">Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pxp-main-footer-bottom" style="background-color: var(--pxpSecondaryColor);">
                <div class="pxp-container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-auto">
                            <div class="pxp-footer-copyright pxp-text-light">© 2021 Adylet. All Right Reserved. Engineered by <a style="color: #fff" href="https://pragicts.com" target="_blank">PragICTS</a></div>
                        </div>
                        <div class="col-lg-auto">
                            <div class="pxp-footer-social mt-3 mt-lg-0">
                                <ul class="list-unstyled">
                                    <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                                    <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fa fa-instagram"></span></a></li>
                                    <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div class="modal fade pxp-user-modal" id="pxp-signin-modal" aria-hidden="true" aria-labelledby="signinModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="pxp-user-modal-fig text-center">
                            <img src="images/signin-fig.png" alt="Sign in">
                        </div>
                        <h5 class="modal-title text-center mt-4" id="signinModal">Welcome back!</h5>
                        <form class="mt-4">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="pxp-signin-email" placeholder="Email address">
                                <label for="pxp-signin-email">Email address</label>
                                <span class="fa fa-envelope-o"></span>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="pxp-signin-password" placeholder="Password">
                                <label for="pxp-signin-password">Password</label>
                                <span class="fa fa-lock"></span>
                            </div>
                            <a href="#" class="btn rounded-pill pxp-modal-cta">Continue</a>
                            <div class="mt-4 text-center pxp-modal-small">
                                <a href="#" class="pxp-modal-link">Forgot password</a>
                            </div>
                            <div class="mt-4 text-center pxp-modal-small">
                                New to Adylet? <a role="button" class="" data-bs-target="#pxp-signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Create an account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade pxp-user-modal" id="pxp-signup-modal" aria-hidden="true" aria-labelledby="signupModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="pxp-user-modal-fig text-center">
                            <img src="images/signup-fig.png" alt="Sign up">
                        </div>
                        <h5 class="modal-title text-center mt-4" id="signupModal">Create an account</h5>
                        <form class="mt-4">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="pxp-signup-email" placeholder="Email address">
                                <label for="pxp-signup-email">Email address</label>
                                <span class="fa fa-envelope-o"></span>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="pxp-signup-password" placeholder="Create password">
                                <label for="pxp-signup-password">Create password</label>
                                <span class="fa fa-lock"></span>
                            </div>
                            <a href="#" class="btn rounded-pill pxp-modal-cta">Continue</a>
                            <div class="mt-4 text-center pxp-modal-small">
                                Already have an account? <a role="button" class="" data-bs-target="#pxp-signin-modal" data-bs-toggle="modal">Sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>






    </div>
</template>

<script>

import {categoryQuery} from '~/graphql/query.js'
export default {


  data(){
    return {
      categories:[]
    }
  },
  apollo:{
    categories:{
      prefetch:true,
     query:categoryQuery
    }

  }
}
</script>
