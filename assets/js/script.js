/* Google Tag Manager */
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-MJ7X7C9');

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-03HQFL22KX', {
    'page_title': document.title,
    'currency': 'EUR',
    'country': 'IT',
    'user_id': Math.floor(Math.random() * 9999999)
});
gtag('consent', 'default', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted'
});
gtag('config', 'G-8E4SH08FZL', {
    'page_title': document.title,
    'currency': 'EUR',
    'country': 'IT',
    'user_id': Math.floor(Math.random() * 9999999)
});
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied'
});


dataLayer.push({
    pageLocation: window.location.pathname,
    timestamp: Date(),
    epoch: Date.now()
})

document.querySelectorAll('.fa-shopping-cart')
    .forEach(e => e.parentElement.href = 'confirmation.html');

if (window.location.pathname === '/single-product.html') {
    dataLayer.push({
        ecommerce: null
    }); // Clear the previous ecommerce object.
    dataLayer.push({
        event: "view_item",
        ecommerce: {
            currency: "USD",
            value: 7.77,
            items: [{
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: "Google",
                item_category: "Apparel",
                item_category2: "Adult",
                item_category3: "Shirts",
                item_category4: "Crew",
                item_category5: "Short sleeve",
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: "green",
                location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                price: 9.99,
                quantity: 1
            }]
        }
    });
}

if (document.location.pathname === '/confirmation.html') {
    dataLayer.push({
        ecommerce: null
    }); // Clear the previous ecommerce object.
    dataLayer.push({
        event: "purchase",
        ecommerce: {
            transaction_id: "T_12345",
            value: 25.42,
            tax: 4.90,
            shipping: 5.99,
            currency: "USD",
            coupon: "SUMMER_SALE",
            items: [{
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee",
                    affiliation: "Google Merchandise Store",
                    coupon: "SUMMER_FUN",
                    discount: 2.22,
                    index: 0,
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_category2: "Adult",
                    item_category3: "Shirts",
                    item_category4: "Crew",
                    item_category5: "Short sleeve",
                    item_list_id: "related_products",
                    item_list_name: "Related Products",
                    item_variant: "green",
                    location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                    price: 9.99,
                    quantity: 1
                },
                {
                    item_id: "SKU_12346",
                    item_name: "Google Grey Women's Tee",
                    affiliation: "Google Merchandise Store",
                    coupon: "SUMMER_FUN",
                    discount: 3.33,
                    index: 1,
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_category2: "Adult",
                    item_category3: "Shirts",
                    item_category4: "Crew",
                    item_category5: "Short sleeve",
                    item_list_id: "related_products",
                    item_list_name: "Related Products",
                    item_variant: "gray",
                    location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                    price: 20.99,
                    promotion_id: "P_12345",
                    promotion_name: "Summer Sale",
                    quantity: 1
                }
            ]
        }
    });
}


function refreshPage() {
    location.reload();
}

setInterval(refreshPage, 10000); // Refresh every 10 seconds (adjust interval as needed)