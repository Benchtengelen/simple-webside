import React from 'react'

function Home() {
  return (
      <div className='row'> 
     
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/id/230/1600/600" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/id/232/1600/600" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/id/234/1600/600" class="d-block w-100" alt="..." />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

   <div class="container" > 

  <div class="row mx-auto mt-3">
    <div class="col-sm-6">
     <img class="w-100 img-thumbnail" src="https://picsum.photos/id/237/600/400" alt="" />
    </div>
    <div class="col-sm-6 ">
         <h1>About Us</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
         <p>Rem dolorum a debitis libero veritatis at.</p>
         <p>Harum praesentium enim vel qui doloribus maxime!</p>
         <p>Vero fugiat voluptas aliquid facilis repellat nam!</p>
    </div>
  </div>


  <div class="row mt-5 ">
    <div class="col-sm-4" >
      <div class="card" >
        <img src="https://picsum.photos/id/230/400/300" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card" >
        <img src="https://picsum.photos/id/232/400/300" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card" >
        <img src="https://picsum.photos/id/234/400/300" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>


  <div class="row mt-3">
  
  <div class="col-sm">
    <img src="https://picsum.photos/id/210/400/300" alt="" class="w-100 img-thumbnail" />
  </div>
  <div class="col-sm">
    <img src="https://picsum.photos/id/211/400/300" alt="" class="w-100 img-thumbnail" />
  </div>
  <div class="col-sm">
    <img src="https://picsum.photos/id/212/400/300" alt="" class="w-100 img-thumbnail" />
  </div>
  <div class="col-sm">
    <img src="https://picsum.photos/id/213/400/300" alt="" class="w-100 img-thumbnail" />
  </div>
  <div class="col-sm">
    <img src="https://picsum.photos/id/214/400/300" alt="" class="w-100 img-thumbnail" />
  </div>
</div>


<footer class="container py-5  mt-3">
<div class="row">
  <div class="col-12 col-md">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    <small class="d-block mb-3 text-muted">© 2017-2019</small>
  </div>
  <div class="col-6 col-md">
    <h5>Features</h5>
    <ul class="list-unstyled text-small">
      <li><a class="text-muted" href="#">Cool stuff</a></li>
      <li><a class="text-muted" href="#">Random feature</a></li>
      <li><a class="text-muted" href="#">Team feature</a></li>
      <li><a class="text-muted" href="#">Stuff for developers</a></li>
      <li><a class="text-muted" href="#">Another one</a></li>
      <li><a class="text-muted" href="#">Last time</a></li>
    </ul>
  </div>
  <div class="col-6 col-md">
    <h5>Resources</h5>
    <ul class="list-unstyled text-small">
      <li><a class="text-muted" href="#">Resource</a></li>
      <li><a class="text-muted" href="#">Resource name</a></li>
      <li><a class="text-muted" href="#">Another resource</a></li>
      <li><a class="text-muted" href="#">Final resource</a></li>
    </ul>
  </div>
  <div class="col-6 col-md">
    <h5>Resources</h5>
    <ul class="list-unstyled text-small">
      <li><a class="text-muted" href="#">Business</a></li>
      <li><a class="text-muted" href="#">Education</a></li>
      <li><a class="text-muted" href="#">Government</a></li>
      <li><a class="text-muted" href="#">Gaming</a></li>
    </ul>
  </div>
  <div class="col-6 col-md">
    <h5>About</h5>
    <ul class="list-unstyled text-small">
      <li><a class="text-muted" href="#">Team</a></li>
      <li><a class="text-muted" href="#">Locations</a></li>
      <li><a class="text-muted" href="#">Privacy</a></li>
      <li><a class="text-muted" href="#">Terms</a></li>
    </ul>
  </div>
</div>
</footer>



  </div>
  
</div>






 






  )
}
export default Home
