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
            image: 'https://ibio.wayne.edu/ibio_photos/ibio_logo.jpg',
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
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.98478, 42.35601 ],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
