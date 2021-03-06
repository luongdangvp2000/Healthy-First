import bcrypt from 'bcryptjs';
const data = {
    users: [
        {

            name: 'Admin',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
           
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
            name: 'Thit cho Ngu Kien',
            slug: 'thit-cho-ngu-kien',
            address: 'So 1, duong Pham Van Dong, phuong Dich Vong Hau',
            district: 'Cau Giay',
            number: '0123456789',
            businessType: 'Food production',
            idCertificate: 0,
            image: 'images/Book_1.jpg',
            status: 'Ok',
        },
        {
            //_id: '2',
            name: 'Banh mi Dan To',
            slug: 'banh-mi-dan-to',
            address: 'So 2, duong Pham Van Dong, phuong Dich Vong Hau',
            district: 'Ha Tay',
            number: '0123654789',
            businessType: 'Food production',
            idCertificate: 1,
            image: 'images/Book_2.jpg',
            status: 'Not',
        },
        {
            //_id: '3',
            
            name: 'Thit cho Tay Ninh',
            slug: 'thit-cho-tay-ninh',
            address: 'So 3, duong Pham Van Dong, phuong Dich Vong Hau',
            district: 'Ha Dong',
            number: '0456123789',
            businessType: 'Food production',
            idCertificate: 2,
            image: 'images/Book_3.jpg',
            status: 'Ok',
        },
        {
            //_id: '4',
           
            name: 'Thit cho Thanh Hoa',
            slug: 'thit-cho-thanh-hoa',
            address: 'So 4, duong Pham Van Dong, phuong Dich Vong Hau',
            district: 'Cau Giay',
            number: '0321654987',
            businessType: 'Food production',
            idCertificate: 3,
            image: 'images/Book_4.jpg',
            status: 'Not',
        },
        {
            //_id: '5',
            
            name: 'Chim to dan',
            slug: 'chim-to-dan',
            address: 'So 5, duong Pham Van Dong, phuong Dich Vong Hau',
            district: 'Ba Dinh',
            number: '0789654321',
            businessType: 'Food production',
            idCertificate: 4,
            image: 'images/Book_5.jpg',
            status: 'Ok',
        },
    ], 
    districts:[
        {
            name: 'Cau Giay',
            nameOfSupervisor: 'Luong Ngoc Dang',
        },
        {
            name: 'Ha Dong',
            nameOfSupervisor: 'Nguyen Tien Dung',
        },
        {
            name: 'Ha Tay',
            nameOfSupervisor: 'Nguyen Ho Bac',
        },
        {
            name: 'Ba Dinh',
            nameOfSupervisor: 'Le Le Le',
        },
    ],
    // certificates: [
    //     {
    //         beginDate: '',
    //     },
    // ],
}

export default data;