const app = new Vue ({
        el: '#root',
        data: {
            arrayIndex: 0,
            arrayFoto:[
                {
                    immagine: '01.jpg',
                    titolo: 'Svezia',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    immagine: '02.jpg',
                    titolo: 'Svizzera',
                    testo: 'Lorem ipsum',
                },
                {
                    immagine: '03.jpg',
                    titolo: 'Gran Bretagna',
                    testo:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    immagine: '04.jpg',
                    titolo: 'Germania',
                    testo:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    immagine: '05.jpg',
                    titolo: 'Paradise',
                    testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },

            ],
        },

        methods: {
            addIndex(arrayIndex, arrayFoto) {
                if (arrayIndex < arrayFoto.length - 1){
                this.arrayIndex++;
            }else {
                this.arrayIndex = 0; 
            }
            },
            removeIndex(arrayIndex, arrayFoto) {
                if (arrayIndex == 0){
                    this.arrayIndex = arrayFoto.length - 1;
                }else {
                this.arrayIndex--;
            }
            },

        },



    })    

        
    
