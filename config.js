var config = {
    style: 'mapbox://styles/alexbhill/ck73pzpsa0f1k1ikpxts9jm7f',
    accessToken: 'pk.eyJ1IjoiYWxleGJoaWxsIiwiYSI6IjZFN0swWE0ifQ.PF_TEbZamKXTdN3pn0j-VA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Hypertension Across the Metro Detroit Region',
            image: 'https://mac.wayne.edu/images/wsu_primary_stacked_color.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-83.13276, 42.38263],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'alexbhill.5vjjm99j',
                     opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'other-identifier',
            title: 'Second Title',
            image: '',
            description: 'The majority of city residents live in medically underserved areas where there are not enough doctors to serve everyone.',
            location: {
                center: [-83.13276, 42.38263],
                zoom: 10,
                pitch: 10,
                bearing: -43.2
            },
            onChapterEnter: [
                { 
                layer:  'alexbhill.ck7cem7hc007y2qqo6aammq1v-84uwz',
                opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: 'https://images1.apartments.com/i2/EpR-pytwo6L7quP0JM-7vz7MZmTxXzHqBC6WJ59TrcI/115/2900-e-jefferson-ave-detroit-mi-building-photo.jpg',
            description: 'The lower Eastside area of Detroit has low rent high-rise apartments where many Seniors live. However, this also makes access to nearby health care services difficult.',
            location: {
                center: [-83.00160, 42.34710],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
