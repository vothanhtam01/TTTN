import React from "react";
import { NavLink } from "react-router-dom";
import "./blog.css"

function blog() {
  return (
      <div>
    <h3 className="h3">  Xu hướng mặt hàng nội thất 2023</h3>
    <div>
   
      <div className="row">
        <div className="col s4">
          <img

            src="https://toanphu.vn/wp-content/uploads/thuong-hieu-noi-that-Viet-Nam-06-800x450.jpg"
                      className="img"
            alt=""
          />
          <p className="p">Đôi nét về thương hiệu ChiLai</p>
          <p>
          ChiLai là một trong các công ty nội thất hàng đầu Việt Nam với xu hướng thiết kế chủ đạo theo phong cách châu Âu. Khách hàng thường xuyên của ChiLai chính là các khách sạn 5 sao ở khắp các miền tổ quốc. Hơn nữa, các gia đình trẻ cũng vô cùng yêu thích địa chỉ nội thất này.
          </p>
          <NavLink to={`/`} className="nl">discover more</NavLink>
        </div>

        <div className="col s4">
          <img
         

            src="https://rgb.vn/wp-content/uploads/2021/03/04-rgb-creative-decor-noi-that-jysk-1024x536.jpg"
            className="img"
            alt=""
          />
          <p className="p">
            Về thương hiệu JYSK
          </p>
          <p className="collection-subtitle size-14 color-dim-gray mb-30px">
          JYSK là một thương hiệu nội thất ngoại mới tham gia vào thị trường Việt Nam. Tuy nhiên đây là một thương hiệu nổi tiếng trên thế giới đến từ Đan Mạch. Với 40 năm hình thành và phát triển, tính tới hiện tại thương hiệu nội thất Đan Mạch này đã có mặt ở 52 quốc gia trên thế giới. Về độ uy tín và chất lượng sản phẩm thì không có gì phải bàn cãi.

Với style scandinavian đặc trưng, JYSK là địa chỉ dành cho những ai đam mê phong cách Bắc Âu. Sản phẩm của JYSK thực sự rất đa dạng. Bạn có thể tìm mua các sản phẩm lớn như bàn trà, bàn ăn, ghế sofa tới cả khay nến, hoa, bình trang trí. Các vật dụng dành cho sân vườn, ban công cũng đều có mặt ở đây. Mức giá cả từ bình dân tới cao cấp, phù hợp với nhiều gia đình.
          </p>
          <NavLink to={`/`} className="nl">discover more</NavLink>
        </div>

        <div className="col s4">
          <img
         
            src="https://rgb.vn/wp-content/uploads/2021/03/04-rgb-creative-decor-noi-that-cozy-living-1024x564.jpg"
            alt=""
            className="img"
          />
          <p className="p">Sofa & Nội thất Cozy Living</p>
          <p>
          Cozy được hình thành từ năm 1995 với sứ mệnh mang đến những bộ sưu tập nội thất có thiết kế đương đại, chất lượng vượt trội từ các nước Italy, Nhật Bản, Malaysia, HongKong với giá thành hợp lý nhất. Các sản phẩm từ sofa, bàn ăn đến từng lọ hoa trang trí,… tất cả được các Designers đến từ Italy và Australia thiết kế đồng bộ, tạo nên những không gian sống hoàn chỉnh và tinh tế nhất.Cozy luôn cố gắng làm hài lòng các gia đình trong việc lựa chọn và bài trí sofa theo không gian nội thất hoàn chỉnh. Cách kết hợp đồng bộ của từng nhóm phong cách với những chiếc sofa, bàn gỗ, tranh treo hay đèn đứng… đều mang lại những gợi ý hữu ích cho khách hàng. Từ đó, gia chủ sẽ dễ dàng định hình nên diện mạo cho tổ ấm mà mình mong muốn..{" "}
          </p>
          <NavLink to={`/`} className="nl">discover more</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default blog;
