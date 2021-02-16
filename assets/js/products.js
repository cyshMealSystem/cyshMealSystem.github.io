const slideData = [{
  index: 0,
  headline: "廠商一",
  button: "前往購買",
  store: "#store1",
  src: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001540/img/basic/a0001540_main.jpg"
}, {
  index: 1,
  headline: "廠商二",
  button: "前往購買",
  store: "#store2",
  src: "https://d1r3ekpbhdi0gp.cloudfront.net/uploads/venue/picture/141/e2216dba4a6354fc.jpg"
}, {
  index: 2,
  headline: "廠商三",
  button: "前往購買",
  store: "#store3",
  src: "https://d2b6u3r9.rocketcdn.me/wp-content/uploads/Cafe-Flaneur-at-night-in-Tainan.jpg"
}, {
  index: 3,
  headline: "廠商四",
  button: "前往購買",
  store: "#store4",
  src: "https://www.willflyforfood.net/wp-content/uploads/2018/05/fuhang-soy-milk3.jpg"
}, {
  index: 4,
  headline: "結帳櫃檯",
  button: "直接去結帳",
  store: "#cash",
  src: "https://images.fosterwebmarketing.com/thehartlawfirm.com/Hart%20Cashier.jpg"
}];


for(let i = 0;i < slideData.length;i++){
	let card = document.createElement("div");
	card.className = "card";
	let img = document.createElement("img");
	img.src = `${slideData[i].src}`;
	card.appendChild(img);
	let block = document.createElement("div");
	block.className = "block";
	let head = document.createElement("h2");
	head.innerHTML = `${slideData[i].headline}`;
	let button = document.createElement("button");
	button.innerHTML = `${slideData[i].button}`;
	
	button.addEventListener("click", ()=>{
		window.location.href=`${slideData[i].store}`;
		if(slideData[i].store === '#cash')
			for(let i = 0;i<4;i++)
				for(let j = 0;j<size[i];j++)
					console.log(`第${i+1}間商店的第${j+1}個商品有${product[i][j].amount}件`);

	});
	block.appendChild(head);
	block.appendChild(button);
	card.appendChild(block);
	let hr = document.createElement("hr");
	if(i!==4)card.appendChild(hr);
	document.getElementById("stores").append(card);

}


const product = [
  [{
	index: 0,
	headline: "A商品一",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001540/img/basic/a0001540_main.jpg"
  }, {
	index: 1,
	headline: "A商品二",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d1r3ekpbhdi0gp.cloudfront.net/uploads/venue/picture/141/e2216dba4a6354fc.jpg"
  }, {
	index: 2,
	headline: "A商品三",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d2b6u3r9.rocketcdn.me/wp-content/uploads/Cafe-Flaneur-at-night-in-Tainan.jpg"
  }, {
	index: 3,
	headline: "A商品四",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://www.willflyforfood.net/wp-content/uploads/2018/05/fuhang-soy-milk3.jpg"
  }],
  [{	
	index: 0,
	headline: "B商品一",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001540/img/basic/a0001540_main.jpg"
	}, {
	index: 1,
	headline: "B商品二",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d1r3ekpbhdi0gp.cloudfront.net/uploads/venue/picture/141/e2216dba4a6354fc.jpg"
	}, {
	index: 2,
	headline: "B商品三",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d2b6u3r9.rocketcdn.me/wp-content/uploads/Cafe-Flaneur-at-night-in-Tainan.jpg"
	}, {
	index: 3,
	headline: "B商品四",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://www.willflyforfood.net/wp-content/uploads/2018/05/fuhang-soy-milk3.jpg"
  }],
  [{	
	index: 0,
	headline: "C商品一",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001540/img/basic/a0001540_main.jpg"
	}, {
	index: 1,
	headline: "C商品二",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d1r3ekpbhdi0gp.cloudfront.net/uploads/venue/picture/141/e2216dba4a6354fc.jpg"
	}, {
	index: 2,
	headline: "C商品三",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d2b6u3r9.rocketcdn.me/wp-content/uploads/Cafe-Flaneur-at-night-in-Tainan.jpg"
	}, {
	index: 3,
	headline: "C商品四",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://www.willflyforfood.net/wp-content/uploads/2018/05/fuhang-soy-milk3.jpg"
  }],
  [{	
	index: 0,
	headline: "D商品一",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001540/img/basic/a0001540_main.jpg"
	}, {
	index: 1,
	headline: "D商品二",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d1r3ekpbhdi0gp.cloudfront.net/uploads/venue/picture/141/e2216dba4a6354fc.jpg"
	}, {
	index: 2,
	headline: "D商品三",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://d2b6u3r9.rocketcdn.me/wp-content/uploads/Cafe-Flaneur-at-night-in-Tainan.jpg"
	}, {
	index: 3,
	headline: "D商品四",
	button: "點擊購買",
	price: 48,
	amount: 0,
	src: "https://www.willflyforfood.net/wp-content/uploads/2018/05/fuhang-soy-milk3.jpg"
  }]
];
const size = [4,4,4,4];
  
for(let j = 0;j<4;j++){
	for(let i = 0;i < size[j];i++){
		let card = document.createElement("div");
		card.className = "card product";
		let img = document.createElement("img");
		img.src = `${product[j][i].src}`;
		card.appendChild(img);
		let block = document.createElement("div");
		block.className = "block";
		let head = document.createElement("h2");
		head.innerHTML = `${product[j][i].headline} - ${product[j][i].price}元`;
		let button = document.createElement("button");
		let shop_btn = document.createElement("button");
		let add_btn = document.createElement("button");
		let minus_btn = document.createElement("button");
		let show_number = document.createElement("p");
		let cancel = document.createElement("button");

		shop_btn.style.display="none";
		add_btn.style.display="none";
		minus_btn.style.display="none";
		show_number.style.display="none";
		cancel.style.display = "none";
		add_btn.innerHTML = "+1";
		minus_btn.innerHTML = "-1";
		shop_btn.innerHTML = "加入購物車";
		cancel.innerHTML = "取消購買";
		button.innerHTML = `${product[j][i].button}`;

		button.addEventListener("click", ()=>{
			add_btn.style.display = "block";
			show_number.style.display = "block";
			minus_btn.style.display = "block";
			shop_btn.style.display = "block";
			button.style.display = "none";
			show_number.innerHTML = `${current}`;			
		});

		let current = 0;
		add_btn.addEventListener("click", ()=>{
			if(current<10) current++;
			show_number.innerHTML = `${current}`;
		});
		minus_btn.addEventListener("click", ()=>{
			if(current>0) current--;
			show_number.innerHTML = `${current}`;
		});
		shop_btn.addEventListener("click", ()=>{
			product[j][i].amount = current;
			add_btn.style.display = "none";
			show_number.style.display = "none";
			minus_btn.style.display = "none";
			shop_btn.style.display = "none";
			if(product[j][i].amount) cancel.style.display = "block";
		});
		cancel.addEventListener("click",()=>{
			product[j][i].amount = 0;
			current = 0;
			cancel.style.display = "none";
			button.style.display = "block";
		});

		block.appendChild(head);
		block.appendChild(button);
		block.appendChild(minus_btn);
		block.appendChild(show_number);
		block.appendChild(add_btn);
		block.appendChild(shop_btn);
		block.appendChild(cancel);

		card.appendChild(block);
		let hr = document.createElement("hr");
		if(i!==product[j].length-1)card.appendChild(hr);
		document.getElementById(`store${j+1}`).append(card);
	}
}


