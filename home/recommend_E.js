const allData = [
  { id: 1, name: "Mau Rice Eatery", price: 30000, rating: 5, type: "food", image: "home/home-assets/recommend-img-1.jpg" },
  { id: 2, name: "Bao Cap Rice", price: 30000, rating: 5, type: "food", image: "home/home-assets/recommend-img-2.png" },
  { id: 3, name: "Mixue Milk Tea", price: 12000, rating: 4, type: "drink", image: "home/home-assets/recommend-img-3.jpg" },
  { id: 4, name: "Sasin Spicy Noodles", price: 40000, rating: 4, type: "food", image: "home/home-assets/recommend-img-4.jpg" },
  { id: 5, name: "Toocha Mini Milk Tea", price: 30000, rating: 4, type: "drink", image: "home/home-assets/recommend-img-5.jpg" },
  { id: 6, name: "Highlands Coffee", price: 40000, rating: 5, type: "drink", image: "home/home-assets/recommend-img-6.jpg" },
  { id: 7, name: "Pho 79", price: 45000, rating: 5, type: "food", image: "home/home-assets/recommend-img-7.jfif" },
  { id: 8, name: "Bui Pho Lemon Tea", price: 12000, rating: 4, type: "drink", image: "home/home-assets/recommend-img-8.jfif" },
  { id: 9, name: "Co Loan Rice Paper", price: 15000, rating: 3, type: "food", image: "home/home-assets/recommend-img-9.jfif" },
  { id: 10, name: "Anh Ba Crispy Chicken Rice", price: 35000, rating: 5, type: "food", image: "home/home-assets/recommend-img-10.jfif" },
  { id: 11, name: "Ba Tam Grilled Pork Noodles", price: 35000, rating: 5, type: "food", image: "home/home-assets/recommend-img-11.jfif" },
  { id: 12, name: "Milano Coffee 436", price: 20000, rating: 4, type: "drink", image: "home/home-assets/recommend-img-12.jpg" }
];

const itemsPerPage = 6;
let currentPage = 1;
let filteredData = [...allData];

const listEl = document.getElementById('food-list');
const pagEl = document.getElementById('pagination');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const ratingFilter = document.getElementById('ratingFilter');
const searchInput = document.getElementById('searchInput');


function applyFilters() {
  const category = categoryFilter.value;
  const price = priceFilter.value;
  const rating = ratingFilter.value;
  const search = searchInput.value.trim().toLowerCase();

  filteredData = allData.filter(item => {
    const matchCategory = (category === 'all' || item.type === category);
    const matchPrice = (price === 'all') || (price === 'low' && item.price <= 30000) || (price === 'high' && item.price > 30000);
    const matchRating = (rating === 'all') || (item.rating === Number(rating));
    const matchSearch = item.name.toLowerCase().includes(search);
    return matchCategory && matchPrice && matchRating && matchSearch;
  });


  if (category === 'all' && price === 'all' && rating === 'all' && search === '') {
    filteredData.sort((a, b) => b.rating - a.rating);
  }

  currentPage = 1;
  renderPage();
  renderPagination();
}

function renderPage() {
  listEl.innerHTML = '';
  const start = (currentPage - 1) * itemsPerPage;
  const pageItems = filteredData.slice(start, start + itemsPerPage);

  if (pageItems.length === 0) {
    listEl.innerHTML = '<p>No results found.</p>';
    return;
  }

  for (const item of pageItems) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
          <img src="${item.image}" alt="${escapeHtml(item.name)}" />
          <h3>${escapeHtml(item.name)}</h3>
          <p>Price: From ${item.price.toLocaleString()} VND</p>
          <p>Rating: ${renderStars(item.rating)}</p>
          <a class="detail-btn" href="home/home-page-E.html?id=${item.id}">See details</a>
        `;
    listEl.appendChild(div);
  }
}

function renderPagination() {
  pagEl.innerHTML = '';
  const total = Math.ceil(filteredData.length / itemsPerPage) || 1;
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentPage = i;
      renderPage();
      renderPagination();
      document.querySelector(".recommend").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
    pagEl.appendChild(btn);
  }
}

function renderStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>\"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\\': '\\\\', '"': '&quot;' }[c]));
}

categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);
ratingFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);

applyFilters();