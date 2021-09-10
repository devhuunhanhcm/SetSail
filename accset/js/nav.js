
const subListElement = document.querySelector('.sub-list')
const subListHome = document.querySelector('.header__nav-item-home .sub-list')
const subListPage = document.querySelector('.header__nav-link-page .sub-list')
const subListDest = document.querySelector('.header__nav-link-dest .sub-list')
const subListTour = document.querySelector('.header__nav-link-tour .sub-list')
const subListBlog = document.querySelector('.header__nav-link-blog .sub-list')
const subListShop = document.querySelector('.header__nav-link-shop .sub-list')

const tripItem = document.querySelector('.trip-product-wrap')

const app = {
    homes: [
        'Travel Agency',
        'Winter Holidays',
        'Exotic Destinations',
        'Summer Holidays',
        'City Tours',
        'New Year Trips',
        'Destinations Carousel',
        'Wine Tours',
        'Vacation Showcase',
        'Landing',
    ],
    Pages: [
        'About Us',
        'What We Offer',
        'Our Team',
        'Get In Touch',
        'Contact Us',
        'FAQ Page',
        'Coming soong',
        'Error Page'
    ],
    Destinations: [
        'Destination List ',
        'Destination Slider',
        'Destination Item'
    ],
    Tours: [
        'Standard List',
        'Gallery List',
        'Split List',
        'Tour Item'
    ],
    Blogs: [
        'Blog Masonry',
        'Blog Standard',
        'Post Types'
    ],
    Shops: [
        'Product List',
        'Product Single',
        'Shop Layouts',
        'Shop Page'
    ],
    trips: [
        {
            name: 'Pain',
            price: '1740',
            rate: '5.5 Good',
            path: './accset/img/trip/img-1-650x650.jpg'
        },
        {
            name: 'Tararagona',
            price: '1740',
            rate: '5.5 Good',
            path: './accset/img/trip/img-2.jpg'
        },
        {
            name: 'Madrid',
            price: '1100',
            rate: '7 super',
            path: './accset/img/trip/img-3.jpg'
        },
        {
            name: 'Barcelona',
            price: '840',
            rate: '5.3 Good',
            path: './accset/img/trip/img-4.jpg'
        },
        {
            name: 'Kaohsiung',
            price: '964',
            rate: '8 super',
            path: './accset/img/trip/img-5.jpg'
        },
        {
            name: 'Taipei',
            price: '2130',
            rate: '5 Good',
            path: './accset/img/trip/img-6.jpg'
        },
        {
            name: 'Tainan',
            price: '1740',
            rate: '7.3 super',
            path: './accset/img/trip/img-7.jpg'
        },
        {
            name: 'Taiwan',
            price: '1740',
            rate: '5.5 Good',
            path: './accset/img/trip/img-8.jpg'
        },
        {
            name: 'Bali',
            price: '1740',
            rate: '5.5 Good',
            path: './accset/img/trip/img-9.jpg'
        },
        {
            name: 'Ubud',
            price: '888',
            rate: '6.0 Good',
            path: './accset/img/trip/img-10.jpg'
        },
        {
            name: 'Seminyak',
            price: '966',
            rate: '9.0 super',
            path: './accset/img/trip/img-11.jpg'
        },
        {
            name: 'Denpasar',
            price: '999',
            rate: '6.7 Good',
            path: './accset/img/trip/img-12.jpg'
        },
    ],
    holidays: [
        {   
            name: 'Rome',
            image: './accset/img/trip/holiday-1.jpg',
            price: '1000',
            rating: '5.0',
            review: 'Good'
        },
        {   
            name: 'Milan',
            image: './accset/img/trip/holiday-2.jpg',
            price: '1230',
            rating: '5.0',
            review: 'Good'
        },
        {   
            name: 'Vatican City',
            image: './accset/img/trip/holiday-3.jpg',
            price: '860',
            rating: '5.0',
            review: 'Good'
        },
        {   
            name: 'Winter Action',
            image: './accset/img/trip/holiday-4.jpg',
            price: '960',
            rating: '6.0',
            review: 'Good'
        },
        {   
            name: 'Magic Of Italy',
            image: './accset/img/trip/holiday-5.jpg',
            price: '100',
            rating: '6.7',
            review: 'Good'
        },
        {   
            name: 'Kids Ski School',
            image: './accset/img/trip/holiday-6.jpg',
            price: '1600',
            rating: '6.7',
            review: 'Good'
        },
        {   
            name: 'Now Surfing',
            image: './accset/img/trip/holiday-7.jpg',
            price: '700',
            rating: '7.0',
            review: 'Superb'
        },
        {   
            name: 'Active Winter',
            image: './accset/img/trip/holiday-8.jpg',
            price: '3700',
            rating: '8.0',
            review: 'Superb'
        },
        {   
            name: 'Winter Action',
            image: './accset/img/trip/holiday-4.jpg',
            price: '960',
            rating: '6.0',
            review: 'Good'
        },
        {   
            name: 'Magic Of Italy',
            image: './accset/img/trip/holiday-5.jpg',
            price: '100',
            rating: '6.7',
            review: 'Good'
        },
        {   
            name: 'Winter Action',
            image: './accset/img/trip/holiday-4.jpg',
            price: '960',
            rating: '6.0',
            review: 'Good'
        },
        {   
            name: 'Now Surfing',
            image: './accset/img/trip/holiday-7.jpg',
            price: '700',
            rating: '7.0',
            review: 'Superb'
        }
       
    ],
    reviewers: [
        {
            avatar: './accset/img/icon_custom/member1.png',
            name: 'Holland Canals',
            author: 'Emacoper',
            comment:'Sa etor aviues Impedlt, tes vof ef nihc agem queail. Ai apvy'
        },
        {
            avatar: './accset/img/icon_custom/member2.png',
            name: 'Holland Canals',
            author: 'Emacoper',
            comment:'Sa etor aviues Impedlt, tes vof ef nihc agem queail. Ai apvy'
        },
        {
            avatar: './accset/img/icon_custom/member3.png',
            name: 'Tarragona',
            author: 'Carimore',
            comment:'Sa etor aviues Impedlt, tes vof ef nihc agem queail. Ai apvy'
        },
        {
            avatar: './accset/img/icon_custom/member4.png',
            name: 'Beautiful Holland',
            author: 'Carosival',
            comment:'Sa etor aviues Impedlt, tes vof ef nihc agem queail. Ai apvy'
        },
        {
            avatar: './accset/img/icon_custom/member5.png',
            name: 'Temple Tour',
            author: 'Calre Moore',
            comment:'Sa etor aviues Impedlt, tes vof ef nihc agem queail. Ai apvy'
        },
        {
            avatar: './accset/img/icon_custom/member6.png',
            name: 'Taipei',
            author: 'SuSan Day',
            comment:'Sa etor aviues Impedlt, tes vof ef nihc agem queail. Ai apvy'
        }
        
    ],
    renderComment: function(){
        const htmls = this.reviewers.map(function(reviewer){
            return `
            <div class="review-item">
                        <div class="review__img-wrap">
                            <img src="${reviewer.avatar}" class="review__img">
                        </div>
                        <div class="review-content">
                            <h4 class="review-content__name">${reviewer.name}</h4>
                            <div class="review-content__rate">
                                <i class="ti-star"></i>
                                <i class="ti-star"></i>
                                <i class="ti-star"></i>
                                <i class="ti-star"></i>
                                <i class="ti-star"></i>
                            </div>
                            <p class="review-content__comemt">${reviewer.comment}</p>
                            <p class="review-content__author">${reviewer.author}</p>
                        </div>
                    </div>
            `
        })
        var listReviewer = document.querySelector('.parallax-review-wrap .review-list')
        listReviewer.innerHTML  = htmls.join('');
        
    },
    renderList: function(items,parent){
        const itemHTMLs = items.map(function(item){
            return `
            <li class="header__sub-item">
                <a href="/" class="header__sub-link">
                    <span class="line-hover isRelative">${item}</span>
                </a>
            </li>
        `
        }) 
        parent.innerHTML = itemHTMLs.join('');
    },
    renderTrip: function(){
        const tripItemHtmls = this.trips.map(function(trip){
            return `
            <div class="col l-3 m-6 c-12 col-trip-item">
                <div class="trip-item">
                    <a href="/" class="trip-item__Link">
                        <div class="trip-img" style="background-image: url(${trip.path})"></div>
                        <div class="trip-content">
                            <h4 class="trip-name">${trip.name}</h4>
                            <div class="trip-price-wrap">
                                <div class="trip-rate">
                                    <i class="trip-rate-icon ti-star"></i>
                                    <span class="trip-rate-text">${trip.rate}</span>
                                </div>
                                <span class="trip-price">$ ${trip.price}</span>
                            </div>
                        </div>
                        <div class="trip-review">
                            <h3 class="trip-review-title">${trip.name}</h3>
                        </div>
                    </a>
                </div>
            </div>
            
            `
        })
        tripItem.innerHTML = tripItemHtmls.join('')
    },
    renderHoliday: function(){
        const holidayItem = this.holidays.map(function(holiday){
            return `
            <div class="slider-holiday__item">
                <a href="#" class="holiday__item-link">
                    <div class="holiday-item__img-wrap">
                        <div class="holiday-item__img" style="background-image: url(${holiday.image})"></div>
                    </div>
                    <div class="holiday-item__date-wrap">
                        <span class="slider-item__date">
                            <i class="ti-calendar"></i>
                            1
                        </span>
                        <span class="slider-item__date">
                            <i class="ti-user"></i>
                            13+
                        </span>
                        <span class="slider-item__date">
                            <i class="ti-location-pin"></i>
                            Europe
                        </span>
                    </div>
                    <div class="holiday-item__content">
                        <h3 class="item__content-name">${holiday.name}</h3>
                        <span class="item__content-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque blanditiis, vitae tenetur tempore ad distinctio. Ut illum officiis aspernatur nesciunt totam ex at soluta esse eligendi excepturi aliquam, ab consectetur.
                        </span>
                        <div class="item__rate-wrap">
                            <span class="item__content-price">$${holiday.price}</span>
                            <span class="item__rating"> <i class="ti-star"></i> ${holiday.rating} </span>
                            <span class="item__rating">${holiday.review}</span>
                        </div>
                    </div>
                </a>
                        
                    </div>
            
            `
        })
        const listHoliday = document.querySelector('.slider-holiday__list')
        listHoliday.innerHTML = holidayItem.join('')
    },
    start: function(){
        this.renderList(this.homes,subListHome)
        this.renderList(this.Pages,subListPage)
        this.renderList(this.Destinations,subListDest)
        this.renderList(this.Tours,subListTour)
        this.renderList(this.Blogs,subListBlog)
        this.renderList(this.Shops,subListShop)
        this.renderTrip()
        this.renderHoliday()
        this.renderComment()
    }
}
app.start()

