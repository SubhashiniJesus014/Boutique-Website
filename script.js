function showDetails(dressId) {
    var details = getDetailsForDress(dressId);
    if (details) {
        var url = 'dress-details.html?image=' + encodeURIComponent(details.image) + '&name=' + encodeURIComponent(details.name) + '&desc=' + encodeURIComponent(details.desc) + '&price=' + encodeURIComponent(details.price);
        window.location.href = url;
    }
}

function getDetailsForDress(dressId) {
    // Simulated function to get dress details
    var dressDetails = {
        dress1: {
            name: 'Navy Blue Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'dress1.jpg',
            price: 'price:$10'
            
        },
        dress2: {
            name: 'Black Printed Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg2.jpg',
            price: 'price:$15'
        },
        dress3: {
            name: 'Golden Yellow Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg3.jpg',
            price: 'price:$13'
        },
        dress4: {
            name: 'SkyBlue printed Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg3.jpeg',
            price: 'price:$20'
        },
        dress5: {
            name: 'Dark Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg14.webp',
            price: 'price:$15'
        },
        dress6: {
            name: 'Blue Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg5.webp',
            price: 'price:$30'
        },
        dress7: {
            name: 'Light Bluish-Orange Printed Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg6.webp',
            price: 'price:$10'
        },
        dress8: {
            name: 'Red Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg7.webp',
            price: 'price:$35'
        },
        dress9: {
            name: 'Yellowish Printed Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg8.webp',
            price: 'price:$38'
        },
        dress10: {
            name: 'Blue-Yellowish designer Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg9.webp',
            price: 'price:$40'
        },
        dress11: {
            name: 'Yellowish printed Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg10.webp',
            price: 'price:$28'
        },
        dress12: {
            name: 'Yellow Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg11.jpg',
            price: 'price:$40'
        },
        dress13: {
            name: 'Yellowish Printed Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg12.jpg',
            price: 'price:$41'
        },
        dress14: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg13.webp',
            price: 'price:$36'
        },
        dress15: {
            name: 'Blue Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg15.webp',
            price: 'price:$45'
        },
        dress16: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg16webp.webp',
            price: 'price:$30'
        },
        dress17: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg17.webp',
            price: 'price:$18'
        },
        dress18: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg19.webp',
            price: 'price:$22'
        },
        dress19: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cimg20.webp',
            price: 'price:$36'
        },
        dress20: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'dress2.jpg',
            price: 'price:$35'
        },
        dress21: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk1.jpeg',
            price: 'price:$31'
        },
        dress22: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk2.webp',
            price: 'price:$24'
        },
        dress23: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk3.webp',
            price: 'price:$18'
        },
        dress24: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk4.webp',
            price: 'price:$10'
        },
        dress25: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk5.jpg',
            price: 'price:$12'
        },
        dress26: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk6.webp',
            price: 'price:$12'
        },
        dress27: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk7.jpeg',
            price: 'price:$19'
        },
        dress28: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk8.jpeg',
            price: 'price:$30'
        },
        dress29: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk9.jpeg',
            price: 'price:$25'
        },
        dress30: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk10.jpeg',
            price: 'price:$35'
        },
        dress31: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk11.jpeg',
            price: 'price:$30'
        },
        dress32: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silk12.jpeg',
            price: 'price:$10'
        },
        dress33: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon1.jpg',
            price: 'price:$25'
        },
        dress34: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon2.webp',
            price: 'price:$39'
        },
        dress35: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon3.webp',
            price: 'price:$15'
        },
        dress36: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon4.jpeg',
            price: 'price:$25'
        },
        dress37: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon5.jpeg',
            price: 'price:$14'
        },
        dress38: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon6.jpg',
            price: 'price:$20'
        },
        dress39: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon7.jpeg',
            price: 'price:$12'
        },
        dress40: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon8.webp',
            price: 'price:$16'
        },
        dress41: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon9.jpg',
            price: 'price:$18'
        },
        dress42: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon10.jpg',
            price: 'price:$10'
        },

        dress43: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon11.jpg',
            price: 'price:$20'
        },
        dress44: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon12.jpeg',
            price: 'price:$20'
        },
        dress45: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon13.webp',
            price: 'price:$20'
        },
        dress46: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon14.webp',
            price: 'price:$20'
        },
        dress47: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon15.webp',
            price: 'price:$20'
        },
        dress49: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon17.avif',
            price: 'price:$21'
        },
        dress50: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon18.jpeg',
            price: 'price:$23'
        },
        dress51: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon19.jpeg',
            price: 'price:$21'
        },
        dress52: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'chiffon20.jpeg',
            price: 'price:$30'
        },
        dress53: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen1.jpeg',
            price: 'price:$18'
        },
        dress54: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen2.jpg',
            price: 'price:$17'
        },
        dress55: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen3.jpeg',
            price: 'price:$15'
        },
        dress56: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen4.jpg',
            price: 'price:$11'
        },
        dress57: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen5.jpeg',
            price: 'price:$28'
        },
        dress58: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen6.webp',
            price: 'price:$12'
        },
        dress59: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen7.jpeg',
            price: 'price:$10'
        },
        dress60: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen8.jpg',
            price: 'price:$28'
        },
        dress61: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen9.webp',
            price: 'price:$21'
        },
        dress62: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen10.jpeg',
            price: 'price:$12'
        },
        dress63: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen11.jpeg',
            price: 'price:$14'
        },
        dress64: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'linen12.jpeg',
            price: 'price:$19'
        },
        dress65: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh1.jpeg',
            price: 'price:$25'
        },
        dress66: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh2.jpeg',
            price: 'price:$35'
        },
        dress67: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh3.jpeg',
            price: 'price:$28'
        },
        dress68: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh4.jpeg',
            price: 'price:$27'
        },
        dress69: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh5.jpeg',
            price: 'price:$38'
        },
        dress70: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh6.jpeg',
            price: 'price:$31'
        },
        dress71: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh7.jpeg',
            price: 'price:$28'
        },
        dress72: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh8.jpeg',
            price: 'price:$36'
        },
        dress73: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh9.jpeg',
            price: 'price:$29'
        },
        dress74: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh10.jpeg',
            price: 'price:$39'
        },
        dress75: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh11.jpeg',
            price: 'price:$37'
        },
        dress76: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh12.jpeg',
            price: 'price:$21'
        },
        dress77: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh13.jpeg',
            price: 'price:$23'
        },
        dress78: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh14.jpeg',
            price: 'price:$18'
        },
        dress79: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh15.jpeg',
            price: 'price:$42'
        },
        dress80: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh16.jpeg',
            price: 'price:$23'
        },
        dress81: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh17.jpeg',
            price: 'price:$26'
        },
        dress82: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh18.jpeg',
            price: 'price:$22'
        },
        dress83: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh19.jpeg',
            price: 'price:$32'
        },
        dress84: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'silkleh20.jpeg',
            price: 'price:$36'
        }
            // Add more dresses as needed
    
    };

    return dressDetails[dressId];
}