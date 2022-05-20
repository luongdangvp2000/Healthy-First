import bcrypt from 'bcryptjs';
const data = {
    users: [
        {

            name: 'Admin',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            // isSeller: true,
            // seller: {
            //     name: 'Puma',
            //     logo: '/images/logo1.png',
            //     description: 'best seller',
            //     rating: 4.5,
            //     numReviews: 120,

            // },
        },
        {
            name: 'Dangg',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    places: [
        {
            // _id: '1',
            STT: 1,
            name: 'Thit cho Ngu Kien',
            slug: 'thit-cho-ngu-kien',
            address: 'So 1, duong Pham Van Dong, phuong Dich Vong Hau, quan Cau Giay',
            number: '0123456789',
            businessType: 'Food production',
            idCertificate: 0,
            image: 'images/Book_1.jpg',
            description: 'Very Big',
        },
        {
            //_id: '2',
            STT: 2,
            name: 'Banh mi Dan To',
            slug: 'banh-mi-dan-to',
            address: 'So 2, duong Pham Van Dong, phuong Dich Vong Hau, quan Cau Giay',
            number: '0123654789',
            businessType: 'Food production',
            idCertificate: 1,
            image: 'images/Book_2.jpg',
            description: 'Very Big',
        },
        {
            //_id: '3',
            STT: 3,
            name: 'Thit cho Tay Ninh',
            slug: 'thit-cho-tay-ninh',
            address: 'So 3, duong Pham Van Dong, phuong Dich Vong Hau, quan Cau Giay',
            number: '0456123789',
            businessType: 'Food production',
            idCertificate: 2,
            image: 'images/Book_3.jpg',
            description: 'Very Big',
        },
        {
            //_id: '4',
            STT: 4,
            name: 'Thit cho Thanh Hoa',
            slug: 'thit-cho-thanh-hoa',
            address: 'So 4, duong Pham Van Dong, phuong Dich Vong Hau, quan Cau Giay',
            number: '0321654987',
            businessType: 'Food production',
            idCertificate: 3,
            image: 'images/Book_4.jpg',
            description: 'Very Big',
        },
        {
            //_id: '5',
            STT: 5,
            name: 'Chim to dan',
            slug: 'chim-to-dan',
            address: 'So 5, duong Pham Van Dong, phuong Dich Vong Hau, quan Cau Giay',
            number: '0789654321',
            businessType: 'Food production',
            idCertificate: 4,
            image: 'images/Book_5.jpg',
            description: 'Very Big',
        },
    ]
}

export default data;