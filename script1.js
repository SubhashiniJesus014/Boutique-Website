function showDetails(dressId) {
    var details = getDetailsForDress(dressId);
    if (details) {
        var url = 'dress-details1.html?image=' + encodeURIComponent(details.image) + '&name=' + encodeURIComponent(details.name) + '&desc=' + encodeURIComponent(details.desc) + '&price=' + encodeURIComponent(details.price);
        window.location.href = url;
    }
}

function getDetailsForDress(dressId) {
    // Simulated function to get dress details
    var dressDetails = {
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
        },
        dress85: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh1.jpeg',
            price: 'price:$30'
        },
        dress86: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh2.webp',
            price: 'price:$23'
        },
        dress87: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh3.jpg',
            price: 'price:$12'
        },
        dress88: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh4.webp',
            price: 'price:$32'
        },
        dress89: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh5.webp',
            price: 'price:$26'
        },
        dress90: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh6.jpeg',
            price: 'price:$26'
        },
        dress91: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh7.webp',
            price: 'price:$29'
        },
        dress92: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh8.jpg',
            price: 'price:$16'
        },
        dress93: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh9.jpg',
            price: 'price:$36'
        },
        dress94: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh10.webp',
            price: 'price:$36'
        },
        dress95: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh11.jpg',
            price: 'price:$20'
        },
        dress96: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'cottonleh12.jpeg',
            price: 'price:$30'
        },
        dress97: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh1.webp',
            price: 'price:$26'
        },
        dress98: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh2.jpg',
            price: 'price:$33'
        },
        dress99: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh3.jpg',
            price: 'price:$26'
        },
        dress100: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh4.jpeg',
            price: 'price:$36'
        },
        dress101: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh5.jpg',
            price: 'price:$26'
        },
        dress102: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh6.jpg',
            price: 'price:$19'
        },
        dress103: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh7.webp',
            price: 'price:$30'
        },
        dress104: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh8.jpeg',
            price: 'price:$27'
        },
        dress105: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh9.jpeg',
            price: 'price:$36'
        },
        dress106: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh10.jpg',
            price: 'price:$24'
        },
        dress107: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh11.jpeg',
            price: 'price:$36'
        },
        dress108: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh12.jpeg',
            price: 'price:$36'
        },
        dress109: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh13.jpeg',
            price: 'price:$34'
        },
        dress110: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh14.webp',
            price: 'price:$32'
        },
        dress111: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh15.webp',
            price: 'price:$31'
        },
        dress112: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh16.webp',
            price: 'price:$28'
        },
        dress113: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh17.jpeg',
            price: 'price:$28'
        },
        dress114: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh18.jpeg',
            price: 'price:$24'
        },
        dress115: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh19.jpeg',
            price: 'price:$27'
        },
        dress116: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'netleh20.webp',
            price: 'price:$36'
        },
        dress117: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh1.webp',
            price: 'price:$37'
        },
        dress118: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh2.webp',
            price: 'price:$25'
        },
        dress119: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh3.jpg',
            price: 'price:$26'
        },
        dress120: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh4.jpg',
            price: 'price:$20'
        },
        dress121: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh5.jpg',
            price: 'price:$26'
        },
        dress122: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh6.jpg',
            price: 'price:$17'
        },
        dress123: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh7.jpg',
            price: 'price:$31'
        },
        dress124: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh8.jpg',
            price: 'price:$26'
        },
        dress125: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh9.webp',
            price: 'price:$17'
        },
        dress126: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh10.jpeg',
            price: 'price:$28'
        },
        dress127: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh11.jpg',
            price: 'price:$25'
        },
        dress128: {
            name: 'Navy Blue Kalankari Cotton Dress',
            desc:'Elevate your style with the timeless elegance of cotton.',
            image: 'velvetleh12.jpeg',
            price: 'price:$28'
        }
            // Add more dresses as needed
    
    };

    return dressDetails[dressId];
}