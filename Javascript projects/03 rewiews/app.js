// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://images.unsplash.com/photo-1594524952992-0cddcede63dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29ja2F0b298ZW58MHx8MHx8&w=1000&q=80",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://images.unsplash.com/photo-1618999385326-b98e613ea109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja2F0b298ZW58MHx8MHx8&w=1000&q=80",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://images.unsplash.com/photo-1563132742-a2b9d57a1c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBwYXJyb3R8ZW58MHx8MHx8&w=1000&q=80",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbepgOgH7_xXLO4rXeOPlQ1XUBBVmRjm_TOBcDCfMBR9eERfD3xrBiHg2IcynYBp6DlD8&usqp=CAU",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");

let currentItem = 0;

// Tohle by tu ani nemuselo b??t, jen to nastav?? po????te??n?? obr??zek

window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// Ta funkce mus?? b??t na konci u EventListener, jinak se str??nka nena??te znova a jen se zm??n?? currentItem
// Je lep???? ud??lat si funkci ne?? to po????d p??episovat

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.author;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
  if (currentItem < reviews.length - 1) {
    currentItem++;
  }
  else {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function() {
  if (currentItem > 0) {
    currentItem--;
  }
  else {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Nemus?? tam b??t reviews.length - 1 proto??e chci ????sla od 0 do 3

randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
