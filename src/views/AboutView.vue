<template>
 <section id="about">
          <h2>About Us</h2>
          <div class="about-para">
            <img id="img-left" src="https://images.unsplash.com/photo-1567705925383-37978e4b3c18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1338&q=80" alt="Business man">
            <p>
           Turbo Thurst  was founded in 1998 by car enthusiast Azasiphe Ndoro. For many years, Aza felt disappointed about the quality of the cars he rented while traveling the world on business trips. She eventually grew tired of having to rent cars with dirty, smelly interiors, poor sound-systems and weathered paint jobs, and decided to start his own business so that other business men like him would never have to rent dirty cars again.
            </p>
          </div>
          <div class="about-para">
            <p>
              By 2004, Turbo had Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque unde ut reprehenderit est, voluptatem nesciunt at accusantium amet, quo qui dignissimos, cupiditate maxime suscipit ab quae tempore non eveniet repellat. Similique fugiat exercitationem officiis eius iste? Voluptatem facilis deleniti accusamus voluptas omnis magnam odit unde recusandae nihil? Et, incidunt!
            </p>
          </div>
          <div class="about-para">
            <img id="img-right" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80" alt="Transaction">
            <p>
              Today, Turbo is the number one Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quasi distinctio, perferendis est aut labore voluptas! Vel saepe libero aspernatur officiis. Aperiam, laborum sint ut laudantium saepe id amet, ex officiis excepturi necessitatibus corrupti totam nisi iste voluptas atque delectus odit rerum? Perspiciatis vero doloremque dolorem optio est dolores consequatur voluptatem quas nam porro eaque officia dicta, rem quia voluptate rerum. Alias asperiores quae nesciunt.
            </p>
          </div>
          <div class="about-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis atque dolor fuga officiis tempora. Labore laudantium vel aut voluptas esse expedita saepe, voluptate necessitatibus omnis adipisci maiores inventore eius commodi ab, doloremque nostrum quam earum aliquid? Voluptate voluptas alias illo iusto. Earum quam illo officia eum consequuntur dolores. Deleniti quasi officiis cumque veritatis, ducimus, non consequatur ipsa ad assumenda doloremque distinctio natus voluptas, modi aperiam odit porro amet voluptate debitis.
            </p>
          </div>

          <h3>A demonstration of the sound in our cars</h3>

          <div class='embed-container'><iframe id="video" src='https://www.youtube.com/embed/zIRPDU9ZUXA' frameborder='0' allowfullscreen></iframe></div>
        </section>

</template>



<style>
body{
  background-color: black;
}
.cars__cover:hover {
  backdrop-filter: brightness(100%) contrast(1.3);
}

.cars__category {
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;

  font-size: 2.5rem;
  font-weight: 500;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.555), -3px -3px 3px rgba(0, 0, 0, 0.555);
}

#cars__one {
  background-image: url(https://images.unsplash.com/photo-1566347238843-0782a8526e49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80);
  background-size: cover;
  background-position: center;
}

#cars__two {
  background-image: url(https://images.unsplash.com/photo-1592461051628-2ae171481b82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-size: cover;
  background-position: center;
}

#cars__three {
  background-image: url(https://images.unsplash.com/photo-1539720473538-74cabbc4f113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-size: cover;
  background-position: center;
}

#cars__four {
  background-image: url(https://images.unsplash.com/photo-1546356594-3bb0e904d8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-size: cover;
  background-position: center;
}

#about {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: left;
  line-height: 1.5;

  width: 100%;
  max-width: 1000px;
  height: auto;
  min-height: 100vh;

  padding: 1rem;
  padding-top: 3rem;
}

.about-para {
  display: inline-block;

  margin: 1rem 0rem;

  max-width: 600px;
}

#about img {
  height: 138px;

  padding-top: 0.2rem;
}

img#img-left {
  float: left;

  margin-right: 0.8rem;
}

img#img-right {
  float: right;

  margin-left: 0.8rem;
}

#about h2 {
  text-align: center;
  color: rgb(77, 152, 223);
}

.embed-container {
  display: flex;
  justify-content: center;

  padding: 2rem;

  position: relative;
  overflow: hidden; 
  width: 100%;
}
</style>














