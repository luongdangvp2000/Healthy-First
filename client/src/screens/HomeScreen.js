import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPlaces } from '../actions/placeActions';
//import data from '../data.js'

export default function HomeScreen(props) {
    // const [places, setPlaces] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const place = props;
    const dispatch = useDispatch();
    const placeList = useSelector(state => state.placeList);
    const { loading, error, places } = placeList;
    useEffect(() => {
        dispatch(listPlaces());
    }, [dispatch])

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <div>
                            <div className="small-container ">
                                <h2 className='title'>Paper</h2>
                                <div className="w3-container">
                                    <div className="w3-content">
                                        {/* <h1 className="w3-center w3-text-grey"><b>Jane & John</b></h1> */}
                                        {/* <img className="w3-round w3-grayscale-min" src="/w3images/wedding_couple2.jpg" style="width:100%;margin:32px 0" /> */}
                                        <div className='w3-center'>
                                            <img className="" src="images/AN-TOAN-THUC-PHAM-LA-GI.jpg" />
                                        </div>
                                        <br />
                                        <h3>Giải pháp đảm bảo vệ sinh an toàn thực phẩm</h3>
                                        <h4>
                                            <b>Người tiêu dùng:</b>
                                            <ol>
                                                <li>Lựa chọn các cơ sở kinh doanh thực phẩm uy tín, đầy đủ giấy chứng nhận vệ sinh an toàn thực phẩm, và ko có lịch sử gây ngộ độc thực phẩm.</li>
                                                <li>Khi chế biến cần phải rửa sạch tay, bề mặt thớt và nơi sơ chế.</li>
                                                <li>Không dùng chung vật đựng đồ sống, đồ chín. Vì có thể lây nhiễm chéo vi khuẩn và ký sinh trùng từ đồ sống sang đồ chín</li>
                                                <li>Ăn chín, uống sôi. Không nên ăn thực phẩm sống. Bởi thực phẩm sống thường chứa nhiều giun, sán, các vi sinh vật và vi trùng có hại cho cơ thể.</li>
                                                <li>Bảo quản thực phẩm luôn ở nhiệt độ thích hợp.</li>
                                                <li>Nên sử dụng thực phẩm tươi sống để chế biến. Bởi thực phẩm để lâu dễ hỏng, gây hại cho cơ thể.</li>
                                                <li>Không ăn đồ đã để lâu, mốc hư hỏng.</li>
                                                <li>Không mua thực phẩm trôi nổi, không rõ nguồn gốc, và không được kiểm nghiệm.</li>
                                            </ol>

                                        </h4><br />
                                        <div className='w3-center'>
                                            <img className="" src="images/an-toan-thuc-pham-la-gi-4.jpg" />
                                        </div>
                                        <br />
                                        <h4>
                                            <b>Doanh nghiệp, công ty:</b>
                                            <ol>
                                                <li>Tuân thủ quy định của nhà nước, thế giới về mọi tiêu chuẩn trong giữ gìn VSATTP.</li>
                                                <li>Theo dõi sát sao quy trình chuẩn bị sản xuất, phân phối sản phẩm để đảm bảo chất lượng.</li>
                                                <li>Kiểm soát nguồn nguyên vật liệu an toàn và vệ sinh. Không chế biến vượt mức các loại phụ gia thực phẩm cho phép gây ra nguy hại đến người tiêu dùng.</li>
                                                <li>Thực hiện kiểm nghiệm thực phẩm định kỳ thường xuyên. Đảm bảo, cải tạo lại quy trình sản xuất khi cần thiết.</li>
                                            </ol>

                                        </h4><br />
                                        {/* <p className="w3-center"><className="w3-button w3-black w3-round w3-padding-large w3-large">Wedding Details</a></p> */}
                                    </div>
                                </div>

                                <h2 className="title">Places</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>ADDRESS</th>
                                            <th>DISTRICT</th>
                                            <th>NUMBER</th>
                                            <th>BUSINESS TYPE</th>
                                            <th>STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {places.map((place) => (
                                            <tr key={place._id} className='place'>
                                                <th><Link to={`/place/${place._id}`}>{place.name}</Link></th>
                                                <th>{place.address}</th>
                                                <th>{place.district}</th>
                                                <th>{place.number}</th>
                                                <th>{place.businessType}</th>
                                                <th>{place.status}</th>
                                                {/* <th>
                                                    <p>Edit</p>
                                                    <p>Delete</p>
                                                </th> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
            <br />
            <br />
        </div>
    )
}