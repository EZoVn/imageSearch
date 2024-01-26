const accessKey = '';


const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const resultBtn = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more');

let keyword = 'birds';
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (page === 1) {
    resultBtn.innerHTML = '';
  }
  results.map((result) => {
    const img = document.createElement('img');
    img.src = result.urls.small;
    img.alt = result.alt_description;
    img.title = result.alt_description;
    img.className = 'w-full h-full object-cover rounded';

    const imgContainer = document.createElement('a');
    imgContainer.href = result.links.html;
    imgContainer.target = '_blank';

    imgContainer.appendChild(img);
    resultBtn.appendChild(imgContainer);
  });

  showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener('click', () => {
  page++;
  searchImages();
});