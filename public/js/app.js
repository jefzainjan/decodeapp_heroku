"use strict";

class App{
  constructor(){
    this.car = [

  {
        "id": 1,
        "name": "Ford Everest",
        "details": "Manual, Diesel, ₱ 1,339,000",
        "image": "img/Ford.jpg",
      
      },
      {
        "id": 2,
        "name": "BMW Gran-Turismo 335i",
        "details": "Manual, Gasoline, PRICE ON REQUEST  ",
        "image": "img/bmw.jpg",
       
      },
      {
        "id": 3,
        "name": "Chevrolet Trailblazer 2016",
        "details": "Automatic Diesel ₱ 1,509,888",
        "image": "img/Chevy.jpg",
      },
      {
        "id": 4,
        "name": "FOTON View Traveller",
        "details": "Manual Diesel ₱ 1,299,000 ",
        "image": "img/Foton.jpg",
       
      },
      {
        "id": 5,
        "name": "Honda City",
        "details": "CVT, Gasoline, ₱ 804,000",
        "image": "img/Honda.jpg",
      },
      {

        "id": 6,
        "name": "Hyundai Santa Fe",
        "details": "Manual, Diesel, ₱ 1,568,000",
        "image": "img/Hyundai.jpg",
      },
      {

        "id": 7,
        "name": "Isuzu D-Max",
        "details": "Manual, Diesel, ₱ 1,190,000",
        "image": "img/Izuzu.jpg",
      },
       {

        "id": 8,
        "name": "Jeep Grand Cherokee",
        "details": "Automatic, Gasoline, ₱ 3,860,000",
        "image": "img/Jeep.jpg",
      },
       
    ];
      
  
  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

carDesign(){
    let id = document.getElementById('car1');
    let name = document.getElementById('car2');
    let details = document.getElementById('car3');
    let image = document.getElementById('car4');
  

    let car = {      
      "id": id.value,
      "name": name.value,
      "details": details.value,
      "image": image.value,
     
    };


    this.car.push(car);

    
    id.value = name.value = details.value = image.value = ''; 
  } 

  carDelete(key){
    let r = this.car;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.car.splice(i,1);
        break;
      }
    }   
    this.carList();
  }

  SearchCarById(id){
    let r = this.car;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

  SearchCar(name){
    let objects = [];
    let r = this.car;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }
}


class Component extends App{
  constructor(){
    
    super();
  }

carDesignLayout(){
  let html = `

<nav>
    <div class="nav-wrapper  #26a69a teal lighten-1">
      <a href="#" onclick="component.carList()" class="brand-logo"> &nbsp&nbsp&nbsp&nbspCariTown </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <li><a href="#" onclick="component.Home()">Home</a></li>
    <li><a href="#" onclick="component.carList()">Cars</a></li>  
  <li><a href="#" onclick="component.latestCar()">Sale a Car</a></li>
  
      </ul>

     
    </div>
    </nav>

<div class="slider">
    <ul class="slides">
      <li>
        <img src="img/2.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Our Best Seller of the month</h3>   
        </div>
      </li>
      <li>
        <img src="img/3.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Limited Editions</h3>
        </div>
      </li>
      <li>
        <img src="img/1.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h5 class="light grey-text text-lighten-3">Makes you feel comfortable</h5>
        </div>
      </li>
      <li>
        <img src="img/4.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Buy and sell cars!</h3>
          
        </div>
      </li>
    </ul>
  </div>

  


</div>


         <div id="Home"></div>
        <div id="carRecent"></div>
        <div id="Car"></div>
        <div id="carList"></div>
        <div id="latestCar"></div>
        
  
        <footer class="page-footer #26a69a teal lighten-1">
          <div class="container">
            <div class="row">
              <div class="col l6 ">
                <h5 class="white-text">CariTown</h5>
                <p class="grey-text text-lighten-4">CariTown can easily sell your car or buy a car in just a simple click.</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright #009688 teal">
            <div class="container">
            © 2016 Copyright Text
            </div>
          </div>
        </footer>
            


`;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.carRecent();    
  }

Car(id){
    let r = this.SearchCarById(id);

    let html = `

     <h5 class="center-align">${r.name}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="cardpanel teal">
            <div class="card-image">
              <img src="${r.image}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.details}</p>
              </div>
            <div class="card-action small">               
                <span onclick="component.carDelete(${r.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
               <span onclick="component.carList()" class="new badge small" data-badge-caption="">Back to List</span>
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("Car"));
    $('#Car').show();
    $('#carRecent').hide();
    $('#carList').hide();
    $('#latestCar').hide();

      $('#Home').hide();
  }

  carList(){
    let html = `




      <br/>
        <nav>
          <div class="nav-wrapper white">
          <form>
            <div class="input-field">       
              <input onkeyup="component.carItems(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="carItems">
    `;
    let r = this.car;
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Car(${r[i].id})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("carList"));
    $('#carList').show();
    $('#Car').hide();
    $('#carRecent').hide();
    $('#latestCar').hide();    
         $('#Home').hide();
  }

carItems(name){
    let html = ``;
    let r = this.SearchCar(name);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Car(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   

    this.reRender(`
      ${html}
      `,document.getElementById("carItems"));
    $('#carList').show();
    $('#Car').hide();
    $('#carRecent').hide();  
    $('#latestCar').hide();
        $('#Home').hide();    
  }

  carRecent(){
    
    let html = `



      <div class="row">
    `;

    let r = this.car;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Car(${r[i].id})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("carRecent"));
  }

  latestCar(){
    let html = `

   
     
          
       <div class="row">
            <div class="input-field col s6 ">
           
              <input disabled value="${this.car.length+1}" id="car" type="text"class=" validate" >
            </div>
              <div class="row">
          <div class="input-field col s6 ">
              <input id="car2" type="text" class=" vintage">
              <label for="car2">Brand Name</label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6 ">
              <input id="car3" type="text" class="vintage">
             <label for="car3">Car Details</label>
            </div>

            <div class="row">
            <div class="input-field col s6 ">
              <input id="car5" type="text" class="vintage">
              <label for="car5">Enter Link Address Picture</label>
            </div>
       
        <div align="left">
       
       <button onclick="component.carList()" class="btn waves-effect waves-light">Back</button>
       <button onclick="component.carDesign()" class="btn waves-effect waves-light">Save</button>
         </div>
        
      

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("latestCar"));
    $('#latestCar').show();
    $('#carList').hide();
    $('#Car').hide();
    $('#carRecent').hide(); 
    $('#Home').hide();    
  }

  Home(){
  let html=`



  `;
   this.reRender(`
      ${html}
      `,document.getElementById("latestCar"));
    $('#latestCar').hide();
    $('#carList').hide();
    $('#Car').hide();
    $('#carRecent').show();  
    $('#Home').hide();  

}

} 
let component = new Component();
component.carDesignLayout();