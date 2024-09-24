async function fetchProductDetails() {
    const productId = localStorage.getItem('productId'); // جلب productId من localStorage
    if (productId) {
        try {
            // جلب تفاصيل المنتج من API
            const response = await fetch(`https://localhost:44332/api/Products/GetProductByIdNew/${productId}`);
            const product = await response.json();

            // تحديث محتويات الصفحة باستخدام innerHTML
            document.querySelector('.product_right_sidebar').innerHTML = `
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product-details-tab">
                        <div id="img-1" class="zoomWrapper single-zoom">
                            <a href="#">
                                <img id="zoom1" src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}" 
                                    data-zoom-image="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}" alt="${product.name}">
                            </a>
                        </div>
                        <div class="single-zoom-thumb">
                            <ul class="s-tab-zoom owl-carousel single-product-active" id="gallery_01">
                                <li>
                                    <a href="#" class="elevatezoom-gallery active" data-update="" data-image="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}" data-zoom-image="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}">
                                        <img id="thumb1" src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}" alt="zo-th-1"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="elevatezoom-gallery active" data-update="" data-image="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}" data-zoom-image="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}">
                                        <img id="thumb2" src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${product.image}" alt="zo-th-2"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div class="col-lg-6 col-md-6">
                    <div class="product_d_right">
                        <form action="#">
                            <h1><a id="productName" href="#">${product.name}</a></h1>
                            <div class="product_nav">
                                <ul>
                                    <li class="prev"><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                    <li class="next"><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                            <div class="product_ratting">
                                <ul>
                                    <li><a href="#"><i class="icon icon-Star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-Star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-Star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-Star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-Star"></i></a></li>
                                    <li class="review"><a href="#"> (تقييم العملاء) </a></li>
                                </ul>
                            </div>
                            <div class="price_box">
                                <span id="currentPrice" class="current_price">$${product.priceWithDiscount}</span>
                                <span id="oldPrice" class="old_price">$${product.oldPrice ? product.oldPrice : ''}</span>
                            </div>
                            <div class="product_desc">
                                <p id="productDescription">${product.description}</p>
                            </div>
                            <div class="product_variant color">
                                <h3>الخيارات المتاحة</h3>
                                <label>اللون</label>
                                <ul>
                                    <li class="color1"><a href="#"></a></li>
                                    <li class="color2"><a href="#"></a></li>
                                    <li class="color3"><a href="#"></a></li>
                                    <li class="color4"><a href="#"></a></li>
                                </ul>
                            </div>
                            <div class="product_variant quantity">
                                <label>الكمية</label>
                                <input min="1" max="100" value="1" type="number">
                                <a class="btn btn-danger" class="button" href="cart.html">أضف إلى السلة</a> 
                                <button class="button" type="submit">مفاوضة على السعر</button>
                            </div>
                            <div class="product_d_action">
                                <ul>
                                    <li><a href="#" title="أضف إلى المفضلة">+ أضف إلى المفضلة</a></li>
                                    <li><a href="#" title="قارن">+ قارن</a></li>
                                </ul>
                            </div>
                           
                        </form>
                        <div class="priduct_social">
                            <ul>
                                <li><a class="facebook" href="#" title="facebook"><i class="fa fa-facebook"></i> أعجبني</a></li>           
                                <li><a class="twitter" href="#" title="twitter"><i class="fa fa-twitter"></i> غرد</a></li>           
                                <li><a class="pinterest" href="#" title="pinterest"><i class="fa fa-pinterest"></i> احفظ</a></li>           
                                <li><a class="google-plus" href="#" title="google +"><i class="fa fa-google-plus"></i> شارك</a></li>        
                                <li><a class="linkedin" href="#" title="linkedin"><i class="fa fa-linkedin"></i> شارك</a></li>        
                            </ul>      
                        </div>
                    </div>
                </div>
            </div>
            `;

            // تفعيل الزووم بعد تحميل الصور
            $('#zoom1').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair"
            });

            // إعادة تفعيل الـ Owl Carousel بعد إضافة الصور
            $(".owl-carousel").owlCarousel({
                items: 3,  // عدد الصور الصغيرة المراد عرضها
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                autoplay: true
            });

        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    } else {
        console.error('Product ID not found in localStorage');
    }
}

// استدعاء الدالة لجلب التفاصيل عند تحميل الصفحة
window.onload = fetchProductDetails;
