const menuData = {
            coffee: [
                { id: 101, name: 'ลาเต้ (latte)', price: 65, img: 'img/latte.png' },
                { id: 102, name: 'อเมริกาโน่ (americano)', price: 55, img: 'img/americano.png' },
                { id: 103, name: 'คาปูชิโน่ (cappuccino)', price: 70, img: 'img/cappuccino.png' },
                { id: 104, name: 'เอสเพรสโซ่ (espresso)', price: 50, img: 'img/espresso.png' },
                { id: 105, name: 'มอคค่า (mocha)', price: 75, img: 'img/mocha.png' },
                { id: 106, name: 'คาราเมลมัคคิอาโต้ (caramel macchiato)', price: 80, img: 'img/caramelmacchiato.png' }
            ],
            smoothies: [
                { id: 201, name: 'สตรอเบอร์รี่โยเกิร์ต (strawberrysmoothie)', price: 80, img: 'img/strawberrysmoothie.png' },
                { id: 202, name: 'มะม่วงปั่น (mangosmoothie)', price: 75, img: 'img/mangosmoothie.png' },
                { id: 203, name: 'มัทฉะสมูทตี้ (matchasmoothie)', price: 70, img: 'img/matchasmoothie.png' },
                { id: 204, name: 'กล้วยปั่นนมสด (bananasmoothie)', price: 70, img: 'img/bananasmoothiev.png' },
                { id: 205, name: 'ช็อกโกแลตสมูทตี้ (chocolatesmoothie)', price: 75, img: 'img/chocolatesmoothie.png' },
                { id: 206, name: 'บลูเบอร์รี่สมูทตี้ (mixedberrysmoothie)', price: 85, img: 'img/mixedberrysmoothie.png' }
            ],
            cake: [
                { id: 301, name: 'ช็อกโกแลตเค้ก (chocolatecake)', price: 95, img: 'img/chocolatecake.png' },
                { id: 302, name: 'สตรอว์เบอร์รีชอร์ตเค้ก (strawberry shortcake)', price: 120, img: 'img/strawberryshortcake.png' },
                { id: 303, name: 'ชีสเค้ก (cheesecake)', price: 100, img: 'img/cheesecake.png' },
                { id: 304, name: 'แครอทเค้ก (carrotcake)', price: 65, img: 'img/carrotcake.png' },
                { id: 305, name: 'เรดเวลเวทเค้ก (redvelvet cake)', price: 110, img: 'img/redvelvetcake.png' },
                { id: 306, name: 'มัทฉะเค้ก (matchacake)', price: 95, img: 'img/matchacake.png' }
            ],
            noncoffeedrinks: [
                { id: 401, name: 'ชาไทยนม (thaimilktea)', price: 60, img: 'img/thaimilktea.png' },
                { id: 402, name: 'ชาเขียวมัทฉะ (matchalatte)', price: 70, img: 'img/matchalatte.png' },
                { id: 403, name: 'ช็อกโกแลตนม (chocolatemilk)', price: 65, img: 'img/chocolatemilk.png' },
                { id: 404, name: 'น้ำผึ้งมะนาว (honeylemon)', price: 55, img: 'img/honeylemon.png' },
                { id: 405, name: 'พีชที (peachtea)', price: 55, img: 'img/peachtea.png' },
                { id: 406, name: 'นมสด (freshmilk)', price: 60, img: 'img/freshmilk.png' }
            ],
            bakery: [
                { id: 501, name: 'ครัวซองต์ (croissant)', price: 55, img: 'img/croissant.png' },
                { id: 502, name: 'ครัวซองต์เนยสด (buttercroissant)', price: 45, img: 'img/buttercroissant.png' },
                { id: 503, name: 'ครัวซองต์ช็อกโกแลต (chocolatecroissant)', price: 40, img: 'img/chocolatecroissant.png' },
                { id: 504, name: 'บลูเบอร์รีมัฟฟิน (blueberrymuffin)', price: 50, img: 'img/blueberrymuffin.png' },
                { id: 505, name: 'ขนมปังกล้วย (bananabread)', price: 85, img: 'img/bananabread.png' },
                { id: 506, name: 'ขนมปังกระเทียม (garlicbread)', price: 60, img: 'img/garlicbread.png' }
            ],
            snacks: [
                { id: 601, name: 'เฟรนช์ฟรายส์ (frenchfries)', price: 69, img: 'img/frenchfries.png' },
                { id: 602, name: 'นักเก็ตไก่ (chickennuggets)', price: 79, img: 'img/chickennuggets.png' },
                { id: 603, name: 'ไส้กรอก (sausage)', price: 89, img: 'img/sausage.png' },
                { id: 604, name: 'หอมทอด (onionrings)', price: 89, img: 'img/onionrings.png' },
                { id: 605, name: 'ขนมปังปิ้ง (toast)', price: 69, img: 'img/toast.png' },
                { id: 606, name: 'ชีสบอล (cheeseballs)', price: 79, img: 'img/cheeseballs.png' }
            ]
        };

        // ตัวแปรเก็บตะกร้าสินค้า
        let cart = [];
        
        // ข้อมูลรีวิว (Mock Data ตัวอย่างให้ดูว่ามีคนรีวิวแล้ว)
        // ** รักษาข้อมูลชุดนี้ไว้ตามคำขอ **
        const defaultReviews = {
            101: [
                { user: 'คุณสมชาย', rating: 5, text: 'กาแฟหอมมาก บรรยากาศดีสุดๆ แนะนำครับ' },
                { user: 'Nancy J.', rating: 5, text: 'Best Latte in Ayutthaya!' }
            ],
            302: [{ user: 'CheeseFan', rating: 5, text: 'ชีสเค้กละลายในปากสุดๆ' }]
        };

        // โหลดรีวิวจาก LocalStorage ถ้าไม่มีให้ใช้ข้อมูลตัวอย่าง
        let reviews = JSON.parse(localStorage.getItem('shopReviews'));
        if (!reviews || Object.keys(reviews).length === 0) {
            reviews = defaultReviews;
        }

        // เก็บสินค้าที่เลือกดูอยู่ปัจจุบัน
        let currentSelectedProduct = null;

        // ==========================================
        // ส่วนที่ 2: ฟังก์ชันการทำงาน (LOGIC)
        // ==========================================

        // เลื่อนหน้าจอไปที่ส่วนเมนู
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }

        // --- จัดการ Modal หมวดหมู่ ---
        
        // เปิดหน้าต่างเลือกเมนูตามหมวดหมู่
        function openCategoryModal(categoryName) {
            const modal = document.getElementById('categoryModal');
            const title = document.getElementById('modal-category-title');
            const listContainer = document.getElementById('product-list-container');
            const detailView = document.getElementById('product-detail-view');

            // รีเซ็ตการแสดงผล: โชว์รายการ, ซ่อนรายละเอียด
            listContainer.style.display = 'grid';
            detailView.style.display = 'none';
            title.innerText = categoryName;

            // ล้างข้อมูลเก่า
            listContainer.innerHTML = '';
            
            // ดึงข้อมูลเมนูในหมวดนั้นๆ
            const items = menuData[categoryName] || [];

            if (items.length === 0) {
                listContainer.innerHTML = '<p style="text-align:center; color:#999; grid-column: 1/-1;">ยังไม่มีเมนูในหมวดนี้</p>';
            }

            // วนลูปสร้างการ์ดสินค้า
            items.forEach(item => {
                const stats = calculateRating(item.id);
                const starHtml = generateStarHtml(stats.average);
                
                listContainer.innerHTML += `
                    <div class="product-card" onclick="openProductDetail(${item.id}, '${categoryName}')">
                        <div class="product-img-wrapper">
                            <img src="${item.img}" class="product-img" onerror="this.src='https://placehold.co/300?text=No+Image'">
                        </div>
                        <div class="product-info">
                            <div class="product-name">${item.name}</div>
                            <div class="stars-display">${starHtml} <span class="review-count">(${stats.count})</span></div>
                            <div class="product-price">${item.price}.-</div>
                        </div>
                    </div>
                `;
            });

            // แสดง Modal
            modal.style.display = 'block';
        }

        // ปิด Modal หมวดหมู่
        function closeCategoryModal() {
            document.getElementById('categoryModal').style.display = 'none';
        }

        // --- จัดการหน้ารายละเอียดสินค้า ---

        // เปิดหน้ารายละเอียดสินค้า (เมื่อคลิกที่การ์ด)
        function openProductDetail(productId, categoryName) {
            const listContainer = document.getElementById('product-list-container');
            const detailView = document.getElementById('product-detail-view');
            
            // หาข้อมูลสินค้าจาก ID
            const items = menuData[categoryName];
            const product = items.find(p => p.id === productId);

            if (!product) return;
            currentSelectedProduct = product;

            // สลับวิว: ซ่อนรายการ -> โชว์รายละเอียด
            listContainer.style.display = 'none';
            detailView.style.display = 'block';

            // เติมข้อมูลลงในหน้าจอ
            document.getElementById('detail-name').innerText = product.name;
            document.getElementById('detail-price').innerText = product.price + '.-';
            document.getElementById('detail-img').src = product.img;
            
            // ผูกฟังก์ชันปุ่ม "เพิ่มลงตะกร้า"
            const btn = document.getElementById('add-to-cart-btn');
            btn.onclick = () => addToCart(product.name, product.price);

            // โหลดรีวิว
            renderReviews(productId);
            resetReviewForm();
        }

        // ปุ่มย้อนกลับไปหน้ารายการ
        function backToProductList() {
            document.getElementById('product-list-container').style.display = 'grid';
            document.getElementById('product-detail-view').style.display = 'none';
        }

        // --- ระบบรีวิว (Review System) ---

        // คำนวณคะแนนเฉลี่ย
        function calculateRating(productId) {
            const productReviews = reviews[productId] || [];
            if (productReviews.length === 0) return { average: 0, count: 0 };
            
            const sum = productReviews.reduce((a, b) => a + b.rating, 0);
            return {
                average: (sum / productReviews.length).toFixed(1),
                count: productReviews.length
            };
        }

        // สร้าง HTML รูปดาว (เต็ม, ครึ่ง, ว่าง)
        function generateStarHtml(rating) {
            let html = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    html += '<i class="fas fa-star"></i>'; // ดาวเต็ม
                } else if (i - 0.5 <= rating) {
                    html += '<i class="fas fa-star-half-alt"></i>'; // ดาวครึ่ง
                } else {
                    html += '<i class="far fa-star"></i>'; // ดาวว่าง
                }
            }
            return html;
        }

        // แสดงรายการรีวิว
        function renderReviews(productId) {
            const container = document.getElementById('reviews-container');
            const stats = calculateRating(productId);
            
            // อัปเดตดาวรวมด้านบน
            document.getElementById('detail-stars').innerHTML = 
                `${generateStarHtml(stats.average)} <span style="color:#666;">(${stats.average}/5 จาก ${stats.count} รีวิว)</span>`;

            container.innerHTML = '';
            const productReviews = reviews[productId] || [];

            if (productReviews.length === 0) {
                container.innerHTML = '<p style="text-align:center; color:#999; margin-top:20px;">ยังไม่มีรีวิว เป็นคนแรกที่รีวิวเมนูนี้สิครับ!</p>';
                return;
            }

            // เรียงรีวิวใหม่สุดขึ้นก่อน
            [...productReviews].reverse().forEach(r => {
                container.innerHTML += `
                    <div class="review-item">
                        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                            <span style="font-weight:bold; color:var(--secondary-color);">${r.user}</span>
                            <span style="color:var(--star-color);">${generateStarHtml(r.rating)}</span>
                        </div>
                        <p style="color:#555;">${r.text}</p>
                    </div>
                `;
            });
        }

        // เลือกดาวในฟอร์มรีวิว
        function setRating(val) {
            document.getElementById('rating-value').value = val;
            const stars = document.querySelectorAll('#star-input-group i');
            stars.forEach((star, index) => {
                if (index < val) {
                    star.style.color = 'var(--star-color)';
                    star.classList.add('active');
                } else {
                    star.style.color = '#ddd';
                    star.classList.remove('active');
                }
            });
        }

        // ส่งรีวิว
        function submitReview() {
            const rating = parseInt(document.getElementById('rating-value').value);
            const text = document.getElementById('review-comment').value;
            const name = document.getElementById('review-name').value || 'ลูกค้าทั่วไป';

            if (rating === 0) {
                alert('กรุณากดให้ดาวก่อนส่งรีวิวครับ');
                return;
            }

            // สร้างอาร์เรย์รีวิวถ้ายังไม่มี
            if (!reviews[currentSelectedProduct.id]) {
                reviews[currentSelectedProduct.id] = [];
            }

            // บันทึกรีวิวใหม่
            reviews[currentSelectedProduct.id].push({
                user: name,
                rating: rating,
                text: text
            });

            // บันทึกลง LocalStorage
            localStorage.setItem('shopReviews', JSON.stringify(reviews));
            
            // รีเฟรชหน้า
            renderReviews(currentSelectedProduct.id);
            resetReviewForm();
            alert('ขอบคุณสำหรับรีวิวครับ!');
        }

        // ล้างฟอร์มรีวิว
        function resetReviewForm() {
            document.getElementById('rating-value').value = 0;
            document.getElementById('review-comment').value = '';
            document.getElementById('review-name').value = '';
            setRating(0); // รีเซตดาว
        }

        // --- ระบบตะกร้าสินค้า (Cart System) ---

        // เพิ่มสินค้าลงตะกร้า
        function addToCart(name, price) {
            cart.push({ name, price });
            updateCartCount();
            
            // เอฟเฟกต์แจ้งเตือนเล็กๆ แทน alert
            const btn = document.getElementById('add-to-cart-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> เพิ่มแล้ว';
            btn.style.background = '#4caf50'; // สีเขียวชั่วคราว
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = ''; // กลับเป็นสีเดิม (Gradient)
            }, 1500);
        }

        // อัปเดตตัวเลขจำนวนสินค้าที่ปุ่มลอย
        function updateCartCount() {
            document.getElementById('cart-count').innerText = cart.length;
        }

        // เปิด Modal ตะกร้า
        function openCartModal() {
            const modal = document.getElementById('cartModal');
            const itemsContainer = document.getElementById('order-items');
            const totalElement = document.getElementById('total-price');
            
            modal.style.display = 'block';
            itemsContainer.innerHTML = '';

            if (cart.length === 0) {
                itemsContainer.innerHTML = '<p style="text-align: center; color: #999;">ยังไม่มีสินค้าในตะกร้า</p>';
                totalElement.innerText = '0';
                return;
            }

            let total = 0;
            cart.forEach((item, index) => {
                total += item.price;
                itemsContainer.innerHTML += `
                    <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                        <span>${index + 1}. ${item.name}</span>
                        <span style="font-weight:bold;">${item.price}.-</span>
                    </div>
                `;
            });
            
            totalElement.innerText = total;
        }

        // ปิด Modal ตะกร้า
        function closeCartModal() {
            document.getElementById('cartModal').style.display = 'none';
        }

        // ยืนยันการสั่งซื้อ
        function confirmOrder() {
            if (cart.length === 0) return;
            alert(`ขอบคุณสำหรับการสั่งซื้อ! ยอดรวม ${document.getElementById('total-price').innerText} บาท \nพนักงานกำลังจัดเตรียมอาหารครับ`);
            cart = []; // ล้างตะกร้า
            updateCartCount();
            closeCartModal();
        }

        // ปิด Modal เมื่อคลิกพื้นที่ว่างๆ ด้านนอก
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
            }
        }

        // เอฟเฟกต์เลื่อนหน้าจอแล้วค่อยๆ ปรากฏ (Scroll Reveal)
        window.addEventListener('scroll', () => {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        });