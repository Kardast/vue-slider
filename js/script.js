var myApp = new Vue ({

    // qui mettiamo il selezionatore dell'html (preferibilmente un id)
    el: "#app",

    // qui invece mettiamo i nostri dati
    data: {
        activeSlide: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },
    created(){
        this.myTime();
    },
    methods: {
        // forma intera
        // nextSlide function () {}

        // forma compatta
        nextSlide(){
            this.activeSlide++;
            if (this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
            console.log(this.activeSlide);
        },
        prevSlide(){
            this.activeSlide--;
            if (this.activeSlide < 0 ) {
                this.activeSlide = this.slides.length - 1;
            }
            console.log(this.activeSlide);
        },
        clickSlide(i){
            this.activeSlide = i;
        },
        myTime(){
            setInterval(() => {
                this.nextSlide();
            }, 5000);
        }
    }

});
