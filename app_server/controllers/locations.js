module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Interiors unleash your style potential',
        pageHeader: {
            title: 'Interiors',
            strapline: 'unleash your style potential!!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'livspace ',
            
            rating: 4,
            facilities: ['tables', 'bed', 'chairs','sofas'],
            
        }, {
            name: 'Recon blinds',
            
            rating: 4,
            facilities: ['wall papers', 'wall mirrors', 'lamps'],
            
        }, {
            name: 'homelane',
            
            rating: 2,
            facilities: ['Zebra blinds ', 'roller blinds ','vertical blinds '],
            
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};