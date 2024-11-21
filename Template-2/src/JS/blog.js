const blog = document.querySelector(".post");

const createBlogPost = function (num) {
  const newDate = new Date();
  const months = [
    "Januaray",
    "Februrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Descember",
  ];
  const html = `
    <div class="container-post">
        <img
            src="https://cdn.prod.website-files.com/5b681be5dc6fa89a65131967/5b71e03e9f758e953e217239_image-blogpost-thumbnail-01.jpg"
            alt="post-img-1"
            class="img-post"
        />
        <div class="overview-post">
            <h4 class="date-post">${newDate.getDay()} ${
    months[newDate.getMonth()]
  } ${newDate.getFullYear()}</h4>
            <h2 class="topic-post">Lorem ipsum dolor sit</h2>
            <p class="detail-post">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                consequatur corrupti adipisci quisquam doloremque et rem, atque est
                eos natus nesciunt laudantium quis neque sed dolor odio quae maiores
                sint?
            </p>
        </div>
    </div>`;
  for (let i = 0; i < num; i++) blog.insertAdjacentHTML("beforeend", html);
};

createBlogPost(6);
