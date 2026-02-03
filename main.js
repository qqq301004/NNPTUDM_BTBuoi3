// Sử dụng fetch để lấy dữ liệu từ server http://localhost:3000/posts
// Node.js >=18 đã hỗ trợ fetch, nếu phiên bản thấp hơn cần cài node-fetch

import ProductListTable from "./ProductListTable";

fetch('http://localhost:3000/posts')
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		console.log('Dữ liệu lấy về:', data);
	})
	.catch(error => {
		console.error('Lỗi khi lấy dữ liệu:', error);
	});

function App() {
  return (
    <div>
      <ProductListTable />
    </div>
  );
}

export default App;