const recipes = [
    {
        name: 'Cháo Thịt Heo Bí Đỏ',
        backgroundImage: 'link to background',
        description: 'Cháo thịt heo bí đỏ cung cấp đầy đủ dinh dưỡng và năng lượng cho các hoạt động hằng ngày của các bé. Bạn có thể thêm món này vào thực đơn ăn dặm, bé sẽ thích lắm đây. Chỉ với 40 phút thực hiện.',
        hastag: ['#buasang', '#buatoi'],
        ration: '1',
        timeForPrepare: '1h',
        timeForProcess: '2h',
        material: [
            {
                quality: 1,
                unit: 'g',
                materialName: 'Cháo'
            },
            {
                quality: 20,
                unit: 'g',
                materialName: 'Bí đỏ'
            },
            {
                quality: 10,
                unit: 'g',
                materialName: 'Thịt nạc'
            },
            {
                quality: 1,
                unit: 'ml',
                materialName: 'dầu ăn'
            }
        ],
        step: [
            {
                stepNumber: 1,
                title: 'Bí đỏ gọt vỏ, cắt miếng vừa phải rồi cho vào nồi nước luộc chín. Sau đó vớt ra để vào chén và tán nhuyễn.',
                note: ''
            },
            {
                stepNumber: 2,
                title: 'Cho thịt heo vào nấu với nước tới chín. Thịt heo bạn mua loại thịt nạc đã xay sẵn hoặc bằm nhỏ nhé!',
                note: ''
            }
        ],
        category: 'công thức mới',
        price: 30000,
        calo: 150,
        comment: {
            totalComment: 10,
            result: [
                {
                    userId: '1',
                    commentText: 'I like it',
                    like: 100,
                    createdAt: 'Thu May 19 2022 23:18:52 GMT+0700 (Indochina Time)'
                },
                {
                    userId: '1',
                    commentText: 'I like it',
                    like: 100,
                    createdAt: 'Thu May 19 2022 23:18:52 GMT+0700 (Indochina Time)'
                },
                {
                    userId: '1',
                    commentText: 'I like it',
                    like: 100,
                    createdAt: 'Thu May 19 2022 23:18:52 GMT+0700 (Indochina Time)'
                },
            ]

        },
        like: 100,
        seen: 10500,
        vote: 3,
        createdByUser: {
            userId : '123',
            avatar : 'avatar',
            fullname : 'Lê Thị Huế'
        },
        createdAt: 'Thu May 19 2022 22:12:16 GMT+0700 (Indochina Time)'
    },
]


const users = [
    {
        username: 'kimhuegg',
        fullname: 'Lê Thị Huế',
        email: 'kimhuegg@gmail.com',
        password: '123456',
        coverImg: 'coverimg',
        avatar: 'avatar',
        post: ['1', '2', '3'], //save id post
        recipe: ['1', '2', '3'], //save recipe id
        saved: [], //save id
        follower: [], // save id user
        following: [], //save id user
        description: 'tell something not special tell something not special',
        gender: true,
        birthday: 'Thu May 19 2022 21:59:20 GMT+0700 (Indochina Time)',
        major: 'sinh viên',
        hometown: 'Thanh hóa',
        liveIn: 'Hà Nội',
        role: 'user',
        createdAt: 'Thu May 19 2022 21:59:20 GMT+0700 (Indochina Time)'
    }
]


const posts = [
    {
        name: 'review nồi chiên không dầu',
        body: [
            {
                title : 'nồi chiên không dầu là gì?',
                img: 'img',
                text : 'Thực tế, Philippines gây nhiều khó khăn cho Việt Nam, thậm chí vượt lên dẫn trước nhờ công của Annis phút 15. Tuy nhiên, với những điều chỉnh nhân sự và lối chơi hợp lý, thầy trò HLV Mai Đức Chung đã ngược dòng từ các bàn thắng của Nguyễn Thị Tuyết Dung và Trần Thị Thuỳ Trang.'
            },
            {
                title : 'nồi chiên không dầu là gì?',
                img: 'img',
                text : 'Thực tế, Philippines gây nhiều khó khăn cho Việt Nam, thậm chí vượt lên dẫn trước nhờ công của Annis phút 15. Tuy nhiên, với những điều chỉnh nhân sự và lối chơi hợp lý, thầy trò HLV Mai Đức Chung đã ngược dòng từ các bàn thắng của Nguyễn Thị Tuyết Dung và Trần Thị Thuỳ Trang.'
            },
        ]
    }
]

// need to fix data
const materials = [
    {
        name: 'thịt bò',
        calo: 150,
        price: 20,
        unit: 'g',
    }
]

// need to fix data
const categories = [
    'Bữa sáng', 
    'Bữa trưa', 
    'Bữa tối', 
    'Đồ dùng nhà bếp', 
    'Trái cây', 
    'Rau củ',
    'Đồ uống'
]

// need to fix data
const hastag = []
