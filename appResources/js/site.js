var app = angular.module('clocery', []);

app.controller('DefaultController', ['$scope', function ($scope) {
    $scope.banners = [
        {
            url: 'appResources/images/clocery-banner-1.jpg'
        },
        {
            url: 'appResources/images/clocery-banner-2.jpg'
        },
        {
            url: 'appResources/images/clocery-banner-3.jpg'
        }
    ];

    $scope.frequentProducts = [
        {
            title: 'Tata Salt',
            discount: '',
            url: 'appResources/images/20150901_102808_tata-salt-1kg.jpg',
            description: 'Tata Salt. Plus, an iron-fortified iodised salt specially. formulated to provide 50 per cent of the iron....',
            cost: 17,
            amount: '1 Kg'
        },
        {
            title: 'Curd',
            discount: '',
            url: 'appResources/images/20150910_050859_Parag-Dahi.jpg',
            description: 'Parag-Dahi MRP Rs 22. Save Rs 2 today. Limited stock.',
            cost: '20',
            amount: '200 gm'
        },
        {
            title: 'Cello Whiteboard Marker',
            discount: '',
            url: 'appResources/images/20150303_043222_Cello - White Board Marker.jpg',
            description: '',
            cost: '300',
            amount: '10 Pkts'
        },
        {
            title: 'Peas / Matar',
            discount: '',
            url: 'appResources/images/20160110_085606_IMG_20160109_210454.jpg',
            description: '',
            cost: '40',
            amount: '1 Kg'
        },

        {
            title: "Ching's Masala",
            discount: '',
            url: "appResources/images/20150303_043511_Ching's - Manchow Instant Soup Box.png",
            description: '',
            cost: '35',
            amount: '30 Gm'
        },
        {
            title: 'Tide Plug',
            discount: '',
            url: 'appResources/images/20150917_081519_tideplusdetergent500g.jpg',
            description: '',
            cost: '47',
            amount: '500 Gm'
        },
        {
            title: 'Amar Tea',
            discount: '',
            url: 'appResources/images/20150303_050145_Amar - Popular Tea Leaf.jpg',
            description: '',
            cost: '1300',
            amount: '5 Kg'
        },
        {
            title: 'Active Wheel',
            discount: '',
            url: 'appResources/images/20150302_063719_Wheel.jpg',
            description: '',
            cost: '50',
            amount: '1 Kg'
        }
    ];

    $scope.weeklyProducts = [
        {
            title: 'Taj Mahal Tea Bags',
            discount: '',
            url: 'appResources/images/20150303_050413_Taj Mahal - Tea Bags.png',
            description: '',
            cost: '50',
            amount: '25 Pkt',
            outOfStock: true
        },
        {
            title: 'Pears',
            discount: '',
            url: 'appResources/images/20151201_110836_Pears-Pure-Gentle-Soap-450x450_tcm114-298257-1000x1000.jpg',
            description: '',
            cost: '36',
            amount: '75 Gm',
            outOfStock: false
        },
        {
            title: 'Little Hearts',
            discount: '',
            url: 'appResources/images/20150303_045359_britannia-littlehearts.jpg',
            description: '',
            cost: '5',
            amount: '20 Gm',
            outOfStock: true
        },
        {
            title: 'Parle-G',
            discount: '',
            url: 'appResources/images/20150914_121549_parle-parle-original-gluco-biscuits-846-gm-3384-g.png',
            description: '',
            cost: '20',
            amount: '250g',
            outOfStock: false
        },

        {
            title: 'Amul Gold Milk',
            discount: '',
            url: 'appResources/images/20150913_114801_1349093908_02.jpg',
            description: '',
            cost: '24',
            amount: '500',
            outOfStock: false
        },
        {
            title: 'Surf Excel',
            discount: '',
            url: 'appResources/images/20150917_010945_Packshot-Surf-Excel-Detergent-Bar-500x500.jpg',
            description: '',
            cost: '10',
            amount: '200 Gm',
            outOfStock: false
        },
        {
            title: 'Parle-G',
            discount: '',
            url: 'appResources/images/20150303_045233_parel-g.png',
            description: '',
            cost: '10',
            amount: '140 Gm',
            outOfStock: false
        },
        {
            title: 'Taj Mahal Ginger',
            discount: '',
            url: 'appResources/images/20150303_050507_Taj Mahal - Tea Bags Ginger.png',
            description: '',
            cost: '150',
            amount: '25 Pkts',
            outOfStock: false
        }
    ]
}]);