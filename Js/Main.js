let cart = [];

        function addToCart(name, price, btnElement) {
            cart.push({ name, price });
            updateCartCount();
            
            // Animation Feedback
            const originalText = btnElement.innerText;
            btnElement.innerText = "✓ เพิ่มแล้ว";
            btnElement.style.background = "#4caf50";
            setTimeout(() => {
                btnElement.innerText = originalText;
                btnElement.style.background = ""; 
            }, 1000);
        }

        function updateCartCount() {
            document.getElementById('cart-count').innerText = cart.length;
        }

        function openModal() {
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
                    <div class="cart-item">
                        <span>${index + 1}. ${item.name}</span>
                        <span>${item.price}.-</span>
                    </div>
                `;
            });
            
            totalElement.innerText = total;
        }

        function closeModal() {
            document.getElementById('cartModal').style.display = 'none';
        }

        function confirmOrder() {
            if (cart.length === 0) {
                alert('กรุณาเลือกสินค้าก่อนยืนยัน');
                return;
            }
            alert(`ขอบคุณสำหรับการสั่งซื้อ! ยอดรวมทั้งหมด ${document.getElementById('total-price').innerText} บาท\nพนักงานจะไปเสิร์ฟที่โต๊ะสักครู่`);
            cart = [];
            updateCartCount();
            closeModal();
        }

        window.onclick = function(event) {
            const modal = document.getElementById('cartModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // --- Smooth Scrolling ---
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }

        // --- Reveal Animation ---
        window.addEventListener('scroll', reveal);

        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
        
        reveal();