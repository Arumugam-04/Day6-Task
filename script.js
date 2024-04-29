/*class Movie {
    constructor(title,studio,rating="PG"){
       this.title = title;   
       this.studio = studio;
       this.rating = rating;
    }
  }
   const obj1 = new Movie("Casino Royale","Eon Productions",)
   console.log(obj1.title,obj1.studio,obj1.rating);

   *?
   
  /* class Movie {
      constructor(title,studio,rating="PG"){
         this.title = title;   
         this.studio = studio;
         this.rating = rating;
      }
    }
     const obj1 = new Movie("Casino Royale","Eon Productions",)
     console.log(obj1.title,obj1.studio,obj1.rating);
     */

   class circle{
      constructor(radius,color){
         this.radius=radius;
         this.color = color;

      }
      get Radius(){
         return this.radius
      }
      set Radius(n){
         this.radius = n
      }
      get color(){
         return this.color;
      }
      set color(c){
         this.color = c
      }
      get toString(){
         return '"circle[radius= ${this.radius} ,color = ${this.color}]"'
      }
      get area(){
         return Math.PI*Math.pow(this.radius,2)
      }
      get circumference(){
         return 2*Math.PI*this.radius
      }

     }
     let obj = new circle(1.8,"red")
     console.log(Obj.color); 
     console.log(obj.Radius);
     console.log(Obj.toString);
     console.log(obj.area);
     console.log(obj.circumference);
     obj.Radius=3.5
     console.log(obj.Radius);
     obj.color="green"
     console.log(obj.color);
   
    /* class Person {
      constructor(name, age) {
      this.name = name;
      this.age = age;
      }
      displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      }
      }
      const person1 = new Person('MSD', 25 );
      const person2 = new Person('VK ', 30);
      console.log('Person-1 Details:');
      person1.displayDetails();
      console.log('\nPerson-2 Details:');
      person2.displayDetails();
      */
     