var districtLevel = [
	{
		Province:"Ha Noi",
		Max:370117, //Đống Đa
		Min:125749 //Sơn Tây
	},
	{
		Province:"Vinh Phuc",
        Max:189178, //Vĩnh Tường
		Min:69084 //Tam Đảo
	},
	{
		Province:"Bac Ninh",
		Max:164307, //Bắc Ninh
	    Min:92269 //Gia Bình
	},
	{
		Province:"Quang Ninh",
		Max:218830, //Hạ Long
		Min:4985 //Cô Tô
	},
	{
		Province:"Hai Duong",
		Max:213096, //Hải Dương
		Min:104767 //Bình Giang
	},
	{
		Province:"Hai Phong",
		Max:303094, //Thủy Nguyên
		Min:902 //Bạch Long Vĩ
	},
	{
		Province:"Hung Yen",
		Max:181403, //Khoái Châu
		Min:77386 //Phú Cừ
	},
	{
		Province:"Thai Binh",
        Max:248633, //Hưng Hà
        Min:182982 //Thái Bình
	},
    {
        Province:"Ha Nam",
        Max:175878, //Lý Nhân
        Min:112288 //Thanh Liêm
    },
    {
        Province:"Nam Dinh",
        Max:256864, //Hải Hậu
        Min:69143 //Mỹ Lộc
    },
    {
        Province:"Ninh Binh",
        Max:164735, //Kim Sơn
        Min:55021 //Tam Điệp
    },
    {
        Province:"Ha Giang",
        Max:104922, //Bắc Quang
        Min:44506 //Quản Bạch
    },
    {
        Province:"Cao Bang",
        Max:64650, //Cao Bằng
        Min:21558 //Trà Lĩnh
    },
    {
        Province:"Bac Kan",
        Max:48122, //Chợ Đồn
        Min:27680 //Ngân Sơn
    },
    {
        Province:"Tuyen Quang",
        Max:171694, //Sơn Dương
        Min:29459 //Lâm Bình
    },
    {
        Province:"Lao Cai",
        Max:99974, //Bảo Thắng
        Min:31323 //Si Ma Cai
    },
    {
        Province:"Yen Bai",
        Max:144152, //Văn Chấn
        Min:26704 //Trạm Tấu
    },
    {
        Province:"Thai Nguyen",
        Max:307318, //Thái Nguyên
        Min:62715 //Sông Công
    },
    {
        Province:"Lang Son",
        Max:112451, //Hữu Lũng
        Min:26429 //Đình Lập
    },
    {
        Province:"Bac Giang",
        Max:213002, //Hiệp Hòa
        Min:68724 //Sơn Động    
    },   
    {
        Province:"Phu Tho",
        Max:184685, //Việt Trì
        Min:68392 //Phú Thọ
    },
    {
        Province:"Dien Bien",
        Max:106313, //Điện Biên
        Min:11650 //Mường Lay
    },
    {
        Province:"Lai Chau",
        Max:71833, //Sìn Hồ
        Min:18177 //Mạn Nhùn
    },
    {
        Province:"Son La",
        Max:147374, //Thuận Châu
        Min:39038 //Sốp Cộp
    },
    {
        Province:"Hoa Binh",
        Max:132337, //Lạc Sơn
        Min:30969 //Kỳ Sơn    
    },
    {
        Province:"Thanh Hoa",
        Max:322543, //Thanh Hóa
        Min:33182 //Mường Lát
    },
    {
        Province:"Nghe An",
        Max:303714, //Vinh
        Min:50477 //Cửa Lò
    },
    {
        Province:"Ha Tinh",
        Max:141216, //Cẩm Xuyên
        Min:30989 //Vũ Quang
    },
    {
        Province:"Quang Binh",
        Max:178464, //Bố Trạch
        Min:46862 //Minh Hóa
    },
    {
        Province:"Quang Tri",
        Max:94610, //Triệu Phong
        Min:83 //Cồn Cỏ
    },
    {
        Province:"Thua Thien - Hue",
        Max:335575, //Huế
        Min:22566 //Nam Đông
    },
    {
        Province:"Da Nang",
        Max:189561, //Hải Châu
        Min:63067 //Ngũ Hành Sơn
    },
    {
        Province:"Quang Nam",
        Max:197830, //Điện Bàn
        Min:16534 //Tây Giang
    },
    {
        Province:"Quang Ngai",
        Max:243545, //Quảng Ngãi
        Min:15498 //Minh Long
    },
    {
        Province:"Binh Dinh",
        Max:280535, //Qui Nhơn
        Min:24200 //An Lão
    },
    {
        Province:"Phu Yen",
        Max:152113, //Tuy Hòa
        Min:54067 //Sơn Hòa
    },
    {
        Province:"Khanh Hoa",
        Max:392279, //Nha Trang
        Min:20930 //Khánh Sơn
    },
    {
        Province:"Ninh Thuan",
        Max:161730, //Phan Rang - Tháp Chàm
        Min:24304 //Bác Ái
    },
    {
        Province:"Binh Thuan",
        Max:216327, //Phan Thiết
        Min:25738 //Phú Quý 
    },
    {
        Province:"Kon Tum",
        Max:143099, //Kon Tum
        Min:3792 //la H'Drai
    },
    {
        Province:"Gia Lai",
        Max:208634, //Pleiku
        Min:34890 //Ayun Pa
    },
    {
        Province:"Dak Lak",
        Max:326135, //Buôn Ma Thuột
        Min:57387 //Krông Búk
    },
    {
        Province:"Dak Nong",
        Max:87831, //Đắk Mil
        Min:38656 //Tuy Đức
    },
    {
        Province:"Lam Dong",
        Max:205287, //Đà Lạt
        Min:19298 //Lạc Dương
    },
    {
        Province:"Binh Phuoc",
        Max:109866, //Lộc Ninh
        Min:42978 //Bình Long
    },
    {
        Province:"Tay Ninh",
        Max:152339, //Trảng Bàng
        Min:62934 //Bến Cầu
    },
    {
        Province:"Binh Duong",
        Max:375571, //Thuận An
        Min:48459 //Bắc Tân Uyên
    },
    {
        Province:"Dong Nai",
        Max:797840, //Biên Hòa
        Min:124912 //Vĩnh Cữu
    },
    {
        Province:"Ba Ria - Vung Tau",
        Max:296237, //Vũng Tàu
        Min:5127 //Côn Đảo
    },
    {
        Province:"TP. Ho Chi Minh",
        Max:572132, //Bình Tân
        Min:68846 //Cần Giờ
    },
    {
        Province:"Long An",
        Max:215716, //Đức Hòa
        Min:28108 //Mộc Hóa
    },
    {
        Province:"Tien Giang",
        Max:287035, //Cái Bè
        Min:40430 //Tân Phú Đông
    },
    {
        Province:"Ben Tre",
        Max:187398, //Ba Trì
        Min:97514 //Mỏ Cày Bắc
    },
    {
        Province:"Tra Vinh",
        Max:149609, //Trà Cú
        Min:48502 //Duyên Hải
    },
    {
        Province:"Vinh Long",
        Max:160537, //Long Hồ
        Min:87458 //Bình Minh
    },
    {
        Province:"Dong Thap",
        Max:200689, //Cao Lãnh(tp)
        Min:77735 //Hồng Ngự(thị xã)
    },
    {
        Province:"An Giang",
        Max:345200, //Chợ Mới
        Min:111620 //Châu Đốc
    },
    {
        Province:"Kien Giang",
        Max:226316, //Rạch Giá
        Min:20807 //Kiên Hải
    },
    {
        Province:"Can Tho",
        Max:243794, //Ninh Kiều
        Min:86278 //Cái Răng
    },
    {
        Province:"Hau Giang",
        Max:190578, //Phụng Hiệp
        Min:57847 //Ngã Bảy
    },
    {
        Province:"Soc Trang",
        Max:163800, //Vĩnh Châu
        Min:62931 //Cù Lao Dung   
    },
    {
        Province:"Bac Lieu",
        Max:147855, //Bạc Liêu
        Min:98155 //Vĩnh Lợi
    },
    {
        Province:"Ca Mau",
        Max:216196, //Cà Mau
        Min:66229 //Năm Căn
    },
]
var DensityWard = [
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "An Thới",
    "Population": "18,499",
    "Density": 4847.37
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Bình Thủy",
    "Population": "18,307",
    "Density": 3100.78
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Bùi Hữu Nghĩa",
    "Population": "11,745",
    "Density": 1588.94
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Long Hòa",
    "Population": "16,450",
    "Density": 1033.36
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Long Tuyền",
    "Population": "15,232",
    "Density": 1156.39
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Thới An Đông",
    "Population": "10,773",
    "Density": 891.58
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Trà An",
    "Population": "8,209",
    "Density": 1257.64
  },
  {
    "Province": "Cần Thơ",
    "District": "Bình Thủy",
    "Ward": "Trà Nóc",
    "Population": "14,350",
    "Density": 2200.75
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Ba Láng",
    "Population": "6,313",
    "Density": 1393.75
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Hưng Phú",
    "Population": "17,885",
    "Density": 2234.95
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Hưng Thạnh",
    "Population": "10,053",
    "Density": 1078.65
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Lê Bình",
    "Population": "15,678",
    "Density": 6657.61
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Phú Thứ",
    "Population": "17,541",
    "Density": 805.22
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Tân Phú",
    "Population": "6,867",
    "Density": 607.86
  },
  {
    "Province": "Cần Thơ",
    "District": "Cái Răng",
    "Ward": "Thường Thạnh",
    "Population": "11,941",
    "Density": 1107.6
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Cờ Đỏ",
    "Population": "12,942",
    "Density": 1426.24
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Đông Hiệp",
    "Population": "6,838",
    "Density": 454.59
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Đông Thắng",
    "Population": "4,709",
    "Density": 277.38
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Thạnh Phú",
    "Population": "21,043",
    "Density": 213.01
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Thới Đông",
    "Population": "6,430",
    "Density": 331.75
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Thới Hưng",
    "Population": "14,978",
    "Density": 220.32
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Thới Xuân",
    "Population": "7,455",
    "Density": 441.8
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Trung An",
    "Population": "10,598",
    "Density": 846.35
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Trung Hưng",
    "Population": "22,244",
    "Density": 623.55
  },
  {
    "Province": "Cần Thơ",
    "District": "Cờ Đỏ",
    "Ward": "Trung Thạnh",
    "Population": "16,832",
    "Density": 668.97
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Bình",
    "Population": "17,224",
    "Density": 2385.36
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Cư",
    "Population": "17,508",
    "Density": 27379.78
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Hòa",
    "Population": "29,563",
    "Density": 17043.12
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Hội",
    "Population": "7,822",
    "Density": 24133.04
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Khánh",
    "Population": "23,016",
    "Density": 4957.78
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Lạc",
    "Population": "12,332",
    "Density": 26285.28
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Nghiệp",
    "Population": "9,260",
    "Density": 26120.56
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "An Phú",
    "Population": "12,932",
    "Density": 27475.73
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "Cái Khế",
    "Population": "24,537",
    "Density": 3491.27
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "Hưng Lợi",
    "Population": "35,350",
    "Density": 10361.4
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "Tân An",
    "Population": "6,633",
    "Density": 11662.62
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "Thới Bình",
    "Population": "15,082",
    "Density": 27338.81
  },
  {
    "Province": "Cần Thơ",
    "District": "Ninh Kiều",
    "Ward": "Xuân Khánh",
    "Population": "32,535",
    "Density": 15939.15
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Châu Văn Liêm",
    "Population": "22,647",
    "Density": 2558.55
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Long Hưng",
    "Population": "13,542",
    "Density": 723.67
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Phước Thới",
    "Population": "25,646",
    "Density": 903.66
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Thới An",
    "Population": "25,454",
    "Density": 1017.92
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Thới Hòa",
    "Population": "7,102",
    "Density": 960.79
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Thới Long",
    "Population": "19,041",
    "Density": 937.38
  },
  {
    "Province": "Cần Thơ",
    "District": "Ô Môn",
    "Ward": "Trường Lạc",
    "Population": "16,251",
    "Density": 725.23
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Giai Xuân",
    "Population": "15,294",
    "Density": 786.73
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Mỹ Khánh",
    "Population": "10,324",
    "Density": 977.19
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Nhơn Ái",
    "Population": "14,032",
    "Density": 866.6
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Nhơn Nghĩa",
    "Population": "16,975",
    "Density": 773.63
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Phong Điền",
    "Population": "10,721",
    "Density": 1302.93
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Tân Thới",
    "Population": "13,706",
    "Density": 773.74
  },
  {
    "Province": "Cần Thơ",
    "District": "Phong Điền",
    "Ward": "Trường Long",
    "Population": "18,276",
    "Density": 587.52
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Định Môn",
    "Population": "10,648",
    "Density": 460.79
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Đông Bình",
    "Population": "9,126",
    "Density": 308.33
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Đông Thuận",
    "Population": "9,518",
    "Density": 302.26
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Tân Thạnh",
    "Population": "7,683",
    "Density": 440.59
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Thới Lai",
    "Population": "10,629",
    "Density": 1095.48
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Thới Tân",
    "Population": "6,830",
    "Density": 248.9
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Thới Thạnh",
    "Population": "11,287",
    "Density": 722.28
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Trường Thắng",
    "Population": "10,822",
    "Density": 702.77
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Trường Thành",
    "Population": "11,370",
    "Density": 587.23
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Trường Xuân",
    "Population": "12,728",
    "Density": 441.07
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Trường Xuân A",
    "Population": "6,411",
    "Density": 338.31
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Trường Xuân B",
    "Population": "7,462",
    "Density": 370.03
  },
  {
    "Province": "Cần Thơ",
    "District": "Thới Lai",
    "Ward": "Xuân Thắng",
    "Population": "6,450",
    "Density": 469.26
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Tân Hưng",
    "Population": "10,007",
    "Density": 645.78
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Tân Lộc",
    "Population": "29,617",
    "Density": 881.2
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Thạnh Hoà",
    "Population": "10,109",
    "Density": 1268.16
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Thới Thuận",
    "Population": "18,201",
    "Density": 1996.12
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Thốt Nốt",
    "Population": "21,429",
    "Density": 3797.11
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Thuận An",
    "Population": "13,287",
    "Density": 1545.5
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Thuận Hưng",
    "Population": "19,997",
    "Density": 1327.12
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Trung Kiên",
    "Population": "24,455",
    "Density": 1621.36
  },
  {
    "Province": "Cần Thơ",
    "District": "Thốt Nốt",
    "Ward": "Trung Nhứt",
    "Population": "11,123",
    "Density": 1102.05
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh An",
    "Population": "11,400",
    "Density": 612.71
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh An",
    "Population": "8,505",
    "Density": 187.96
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh Lộc",
    "Population": "13,796",
    "Density": 379.33
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh Lợi",
    "Population": "8,771",
    "Density": 202.42
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh Mỹ",
    "Population": "8,499",
    "Density": 367.83
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh Qưới",
    "Population": "14,623",
    "Density": 411.54
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh Thắng",
    "Population": "6,012",
    "Density": 251.48
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Thạnh Tiến",
    "Population": "9,427",
    "Density": 411.19
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Bình",
    "Population": "6,426",
    "Density": 297.28
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Thạnh",
    "Population": "5,885",
    "Density": 906.88
  },
  {
    "Province": "Cần Thơ",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Trinh",
    "Population": "19,185",
    "Density": 633.25
  },
  {
    "Province": "Đà Nẵng",
    "District": "Cẩm Lệ",
    "Ward": "Hòa An",
    "Population": "18,355",
    "Density": 6145.99
  },
  {
    "Province": "Đà Nẵng",
    "District": "Cẩm Lệ",
    "Ward": "Hòa Phát",
    "Population": "11,952",
    "Density": 1780.61
  },
  {
    "Province": "Đà Nẵng",
    "District": "Cẩm Lệ",
    "Ward": "Hòa Thọ Đông",
    "Population": "12,696",
    "Density": 4702.22
  },
  {
    "Province": "Đà Nẵng",
    "District": "Cẩm Lệ",
    "Ward": "Hòa Thọ Tây",
    "Population": "9,456",
    "Density": 1152.33
  },
  {
    "Province": "Đà Nẵng",
    "District": "Cẩm Lệ",
    "Ward": "Hòa Xuân",
    "Population": "12,515",
    "Density": 1177.22
  },
  {
    "Province": "Đà Nẵng",
    "District": "Cẩm Lệ",
    "Ward": "Khuê Trung",
    "Population": "22,717",
    "Density": 6925.28
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Bình Hiên",
    "Population": "11,938",
    "Density": 22773.75
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Bình Thuận",
    "Population": "12,801",
    "Density": 31262.36
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Hải Châu I",
    "Population": "12,460",
    "Density": 13106.13
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Hải Châu II",
    "Population": "12,088",
    "Density": 33186
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Hòa Cường Bắc",
    "Population": "23,493",
    "Density": 6320.59
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Hòa Cường Nam",
    "Population": "18,380",
    "Density": 9117.06
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Hòa Thuận Đông",
    "Population": "14,262",
    "Density": 13504.4
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Hòa Thuận Tây",
    "Population": "13,532",
    "Density": 1645.43
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Nam Dương",
    "Population": "8,205",
    "Density": 33383.51
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Phước Ninh",
    "Population": "9,665",
    "Density": 17272.81
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Thạch Thang",
    "Population": "14,225",
    "Density": 13851.02
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Thanh Bình",
    "Population": "20,667",
    "Density": 25787.98
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hải Châu",
    "Ward": "Thuận Phước",
    "Population": "17,845",
    "Density": 16041.89
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Bắc",
    "Population": "3,770",
    "Density": 10.93
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Châu",
    "Population": "12,541",
    "Density": 1219.11
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Khương",
    "Population": "11,037",
    "Density": 216.7
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Liên",
    "Population": "12,397",
    "Density": 312.57
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Nhơn",
    "Population": "13,500",
    "Density": 414.49
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Ninh",
    "Population": "4,666",
    "Density": 44.9
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Phong",
    "Population": "14,338",
    "Density": 770.2
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Phú",
    "Population": "4,962",
    "Density": 55.38
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Phước",
    "Population": "11,546",
    "Density": 1562.3
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Sơn",
    "Population": "12,527",
    "Density": 514.41
  },
  {
    "Province": "Đà Nẵng",
    "District": "Hòa Vang",
    "Ward": "Hòa Tiến",
    "Population": "15,240",
    "Density": 1050.53
  },
  {
    "Province": "Đà Nẵng",
    "District": "Liên Chiểu",
    "Ward": "Hòa Hiệp Bắc",
    "Population": "13,417",
    "Density": 293.45
  },
  {
    "Province": "Đà Nẵng",
    "District": "Liên Chiểu",
    "Ward": "Hòa Hiệp Nam",
    "Population": "15,120",
    "Density": 1937.77
  },
  {
    "Province": "Đà Nẵng",
    "District": "Liên Chiểu",
    "Ward": "Hòa Khánh Bắc",
    "Population": "40,183",
    "Density": 4017.9
  },
  {
    "Province": "Đà Nẵng",
    "District": "Liên Chiểu",
    "Ward": "Hòa Khánh Nam",
    "Population": "24,080",
    "Density": 2427.91
  },
  {
    "Province": "Đà Nẵng",
    "District": "Liên Chiểu",
    "Ward": "Hòa Minh",
    "Population": "35,553",
    "Density": 4274.22
  },
  {
    "Province": "Đà Nẵng",
    "District": "Ngũ Hành Sơn",
    "Ward": "Hoà Hải",
    "Population": "18,833",
    "Density": 1238.93
  },
  {
    "Province": "Đà Nẵng",
    "District": "Ngũ Hành Sơn",
    "Ward": "Hoà Quý",
    "Population": "11,544",
    "Density": 787.29
  },
  {
    "Province": "Đà Nẵng",
    "District": "Ngũ Hành Sơn",
    "Ward": "Khuê Mỹ",
    "Population": "10,143",
    "Density": 1787.47
  },
  {
    "Province": "Đà Nẵng",
    "District": "Ngũ Hành Sơn",
    "Ward": "Mỹ An",
    "Population": "22,547",
    "Density": 6745.15
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "An Hải Bắc",
    "Population": "26,166",
    "Density": 8603.84
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "An Hải Đông",
    "Population": "17,235",
    "Density": 20783.84
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "An Hải Tây",
    "Population": "11,760",
    "Density": 7738.88
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "Mân Thái",
    "Population": "14,506",
    "Density": 11258.05
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "Nại Hiên Đông",
    "Population": "16,549",
    "Density": 8611.65
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "Phước Mỹ",
    "Population": "15,186",
    "Density": 7598.32
  },
  {
    "Province": "Đà Nẵng",
    "District": "Sơn Trà",
    "Ward": "Thọ Quang",
    "Population": "26,280",
    "Density": 573.34
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "An Khê",
    "Population": "21,628",
    "Density": 11305.21
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Chính Gián",
    "Population": "20,721",
    "Density": 27656.02
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Hòa Khê",
    "Population": "17,239",
    "Density": 11817.25
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Tam Thuận",
    "Population": "17,185",
    "Density": 34519.82
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Tân Chính",
    "Population": "12,789",
    "Density": 35226.55
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Thạc Gián",
    "Population": "18,466",
    "Density": 24430.45
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Thanh Khê Đông",
    "Population": "14,149",
    "Density": 14243
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Thanh Khê Tây",
    "Population": "17,819",
    "Density": 14384.08
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Vĩnh Trung",
    "Population": "16,716",
    "Density": 32251.59
  },
  {
    "Province": "Đà Nẵng",
    "District": "Thanh Khê",
    "Ward": "Xuân Hà",
    "Population": "17,845",
    "Density": 22798.41
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "An Đồng",
    "Population": "22,476",
    "Density": 3248.31
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "An Dương",
    "Population": "6,924",
    "Density": 3220.17
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "An Hoà",
    "Population": "10,576",
    "Density": 1120.73
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "An Hồng",
    "Population": "9,951",
    "Density": 1173.23
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "An Hưng",
    "Population": "9,732",
    "Density": 1785.26
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Bắc Sơn",
    "Population": "7,136",
    "Density": 1544.96
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Đại Bản",
    "Population": "15,344",
    "Density": 1332.87
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Đặng Cương",
    "Population": "7,397",
    "Density": 1457.85
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Đồng Thái",
    "Population": "8,533",
    "Density": 1522.17
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Hồng Phong",
    "Population": "10,676",
    "Density": 1101.22
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Hồng Thái",
    "Population": "10,555",
    "Density": 1509.37
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Lê Lợi",
    "Population": "5,741",
    "Density": 1049.7
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Lê Thiện",
    "Population": "9,578",
    "Density": 1337.3
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Nam Sơn",
    "Population": "8,476",
    "Density": 2110.98
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Quốc Tuấn",
    "Population": "7,233",
    "Density": 1023.5
  },
  {
    "Province": "Hải Phòng",
    "District": "An Dương",
    "Ward": "Tân Tiến",
    "Population": "10,423",
    "Density": 2242.47
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "An Lão",
    "Population": "4,112",
    "Density": 2433.28
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "An Thái",
    "Population": "8,194",
    "Density": 1422.08
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "An Thắng",
    "Population": "7,166",
    "Density": 1302.6
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "An Thọ",
    "Population": "5,704",
    "Density": 1010.54
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "An Tiến",
    "Population": "7,837",
    "Density": 1179.61
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Bát Trang",
    "Population": "9,960",
    "Density": 822.73
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Chiến Thắng",
    "Population": "6,281",
    "Density": 703.95
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Mỹ Đức",
    "Population": "11,873",
    "Density": 1259.31
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Quang Hưng",
    "Population": "5,922",
    "Density": 881.26
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Quang Trung",
    "Population": "7,916",
    "Density": 1178.15
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Quốc Tuấn",
    "Population": "9,292",
    "Density": 1137.43
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Tân Dân",
    "Population": "6,988",
    "Density": 1161.53
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Tân Viên",
    "Population": "7,425",
    "Density": 876.73
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Thái Sơn",
    "Population": "11,913",
    "Density": 1382.18
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Trường Sơn",
    "Population": "8,441",
    "Density": 2009.33
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Trường Thành",
    "Population": "4,763",
    "Density": 937.14
  },
  {
    "Province": "Hải Phòng",
    "District": "An Lão",
    "Ward": "Trường Thọ",
    "Population": "8,529",
    "Density": 1043.51
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Cát Bà",
    "Population": "11,219",
    "Density": 829.99
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Cát Hải",
    "Population": "6,011",
    "Density": 2386.74
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Đồng Bài",
    "Population": 945,
    "Density": 194.82
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Gia Luận",
    "Population": 682,
    "Density": 15.21
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Hiền Hào",
    "Population": 401,
    "Density": 48.07
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Hoàng Châu",
    "Population": "1,419",
    "Density": 1558.95
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Nghĩa Lộ",
    "Population": "2,146",
    "Density": 416.58
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Phù Long",
    "Population": "1,954",
    "Density": 78.15
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Trân Châu",
    "Population": "1,521",
    "Density": 42.96
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Văn Phong",
    "Population": "2,103",
    "Density": 1059.18
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Việt Hải",
    "Population": 380,
    "Density": 10.3
  },
  {
    "Province": "Hải Phòng",
    "District": "Cát Hải",
    "Ward": "Xuân Đám",
    "Population": 895,
    "Density": 106.1
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Bàng La",
    "Population": "9,085",
    "Density": 1721.07
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Hợp Đức",
    "Population": "7,265",
    "Density": 1275.43
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Minh Đức",
    "Population": "5,543",
    "Density": 1057.54
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Ngọc Hải",
    "Population": "7,618",
    "Density": 4429.58
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Ngọc Xuyên",
    "Population": "5,737",
    "Density": 639.07
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Vạn Hương",
    "Population": "3,558",
    "Density": 1547.43
  },
  {
    "Province": "Hải Phòng",
    "District": "Đồ Sơn",
    "Ward": "Vạn Sơn",
    "Population": "5,708",
    "Density": 3052.57
  },
  {
    "Province": "Hải Phòng",
    "District": "Dương Kinh",
    "Ward": "Anh Dũng",
    "Population": "7,682",
    "Density": 1077.56
  },
  {
    "Province": "Hải Phòng",
    "District": "Dương Kinh",
    "Ward": "Đa Phúc",
    "Population": "9,038",
    "Density": 1524.35
  },
  {
    "Province": "Hải Phòng",
    "District": "Dương Kinh",
    "Ward": "Hải Thành",
    "Population": "4,984",
    "Density": 932.76
  },
  {
    "Province": "Hải Phòng",
    "District": "Dương Kinh",
    "Ward": "Hoà Nghĩa",
    "Population": "12,148",
    "Density": 1088.53
  },
  {
    "Province": "Hải Phòng",
    "District": "Dương Kinh",
    "Ward": "Hưng Đạo",
    "Population": "10,712",
    "Density": 1634.12
  },
  {
    "Province": "Hải Phòng",
    "District": "Dương Kinh",
    "Ward": "Tân Thành",
    "Population": "4,136",
    "Density": 589.79
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Cát Bi",
    "Population": "15,552",
    "Density": 12563.21
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Đằng Hải",
    "Population": "11,476",
    "Density": 3717.89
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Đằng Lâm",
    "Population": "17,537",
    "Density": 7673.83
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Đông HảI 1",
    "Population": "20,999",
    "Density": 764.71
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Đông HảI 2",
    "Population": "8,150",
    "Density": 811.11
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Nam Hải",
    "Population": "8,399",
    "Density": 2104.8
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Thành Tô",
    "Population": "11,802",
    "Density": 4232.38
  },
  {
    "Province": "Hải Phòng",
    "District": "Hải An",
    "Ward": "Tràng Cát",
    "Population": "9,352",
    "Density": 696.71
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Hạ Lý",
    "Population": "13,383",
    "Density": 12051.33
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Hoàng Văn Thụ",
    "Population": "3,818",
    "Density": 13639.61
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Hùng Vương",
    "Population": "12,432",
    "Density": 2892.17
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Minh Khai",
    "Population": "5,518",
    "Density": 9343.83
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Phạm Hồng Thái",
    "Population": "2,973",
    "Density": 21343.96
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Phan Bội Châu",
    "Population": "5,192",
    "Density": 35767.43
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Quang Trung",
    "Population": "5,200",
    "Density": 35570.15
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Quán Toan",
    "Population": "11,428",
    "Density": 4549.36
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Sở Dầu",
    "Population": "13,920",
    "Density": 4176.42
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Thượng Lý",
    "Population": "17,877",
    "Density": 11865.79
  },
  {
    "Province": "Hải Phòng",
    "District": "Hồng Bàng",
    "Ward": "Trại Chuối",
    "Population": "9,884",
    "Density": 22942.3
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Bắc Sơn",
    "Population": "8,938",
    "Density": 3909.2
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Đồng Hoà",
    "Population": "8,155",
    "Density": 2304.39
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Lãm Hà",
    "Population": "12,407",
    "Density": 8788.69
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Nam Sơn",
    "Population": "8,748",
    "Density": 2338.35
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Ngọc Sơn",
    "Population": "8,428",
    "Density": 2433.87
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Phù Liễn",
    "Population": "8,068",
    "Density": 2257.41
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Quán Trữ",
    "Population": "8,583",
    "Density": 4678.66
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Tràng Minh",
    "Population": "8,907",
    "Density": 2376.15
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Trần Thành Ngọ",
    "Population": "11,732",
    "Density": 10047.1
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến An",
    "Ward": "Văn Đẩu",
    "Population": "13,437",
    "Density": 2876.81
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Đại Đồng",
    "Population": "6,522",
    "Density": 1189.02
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Đại Hà",
    "Population": "6,728",
    "Density": 1691.56
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Đại Hợp",
    "Population": "9,487",
    "Density": 1732.56
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Đoàn Xá",
    "Population": "8,115",
    "Density": 987.32
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Đông Phương",
    "Population": "6,466",
    "Density": 1410.28
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Du Lễ",
    "Population": "4,891",
    "Density": 1552.11
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Hữu Bằng",
    "Population": "7,990",
    "Density": 1182.3
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Kiến Quốc",
    "Population": "8,714",
    "Density": 1047.82
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Minh Tân",
    "Population": "7,578",
    "Density": 1219.82
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Ngũ Đoan",
    "Population": "7,318",
    "Density": 1083.19
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Ngũ Phúc",
    "Population": "6,417",
    "Density": 718.5
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Núi Đối",
    "Population": "3,628",
    "Density": 2699.81
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Tân Phong",
    "Population": "6,571",
    "Density": 953.09
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Tân Trào",
    "Population": "7,979",
    "Density": 851.09
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Thanh Sơn",
    "Population": "5,621",
    "Density": 1523.31
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Thuận Thiên",
    "Population": "7,408",
    "Density": 1408.9
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Thuỵ Hương",
    "Population": "4,802",
    "Density": 1524.4
  },
  {
    "Province": "Hải Phòng",
    "District": "Kiến Thụy",
    "Ward": "Tú Sơn",
    "Population": "10,089",
    "Density": 1477.44
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "An Biên",
    "Population": "10,570",
    "Density": 34285.9
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "An Dương",
    "Population": "9,826",
    "Density": 50909.28
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Cát Dài",
    "Population": "9,043",
    "Density": 26813.14
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Đông Hải",
    "Population": "13,023",
    "Density": 31030.05
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Dư Hàng",
    "Population": "11,405",
    "Density": 42951.83
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Dư Hàng Kênh",
    "Population": "30,383",
    "Density": 20759.09
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Hàng Kênh",
    "Population": "15,002",
    "Density": 40136.98
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Hồ Nam",
    "Population": "13,796",
    "Density": 39139.81
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Kênh Dương",
    "Population": "14,309",
    "Density": 11212.19
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Lam Sơn",
    "Population": "11,357",
    "Density": 22154.38
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Nghĩa Xá",
    "Population": "14,792",
    "Density": 25268.62
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Niệm Nghĩa",
    "Population": "13,927",
    "Density": 24786.87
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Trại Cau",
    "Population": "9,674",
    "Density": 31733.64
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Trần Nguyên Hãn",
    "Population": "11,121",
    "Density": 43248.81
  },
  {
    "Province": "Hải Phòng",
    "District": "Lê Chân",
    "Ward": "Vĩnh Niệm",
    "Population": "21,390",
    "Density": 4544.39
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Cầu Đất",
    "Population": "5,999",
    "Density": 38708.22
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Cầu Tre",
    "Population": "16,919",
    "Density": 37278.02
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Đằng Giang",
    "Population": "22,601",
    "Density": 12326.7
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Đông Khê",
    "Population": "16,044",
    "Density": 9257.93
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Đổng Quốc Bình",
    "Population": "8,385",
    "Density": 33680.11
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Gia Viên",
    "Population": "10,345",
    "Density": 41282.57
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Lạch Tray",
    "Population": "9,241",
    "Density": 12953.28
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Lạc Viên",
    "Population": "10,733",
    "Density": 28615.99
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Lê Lợi",
    "Population": "8,088",
    "Density": 36916.34
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Lương Khánh Thiện",
    "Population": "6,736",
    "Density": 21158.44
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Máy Chai",
    "Population": "19,127",
    "Density": 7842.15
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Máy Tơ",
    "Population": "12,303",
    "Density": 7967.23
  },
  {
    "Province": "Hải Phòng",
    "District": "Ngô Quyền",
    "Ward": "Vạn Mỹ",
    "Population": "18,091",
    "Density": 15783.46
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "An Lư",
    "Population": "12,786",
    "Density": 1761.35
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "An Sơn",
    "Population": "5,908",
    "Density": 911.52
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Cao Nhân",
    "Population": "9,506",
    "Density": 1754.1
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Chính Mỹ",
    "Population": "8,582",
    "Density": 1269.88
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Đông Sơn",
    "Population": "5,845",
    "Density": 1235.76
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Dương Quan",
    "Population": "7,674",
    "Density": 1024.31
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Gia Đức",
    "Population": "4,818",
    "Density": 485.17
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Gia Minh",
    "Population": "4,426",
    "Density": 510.44
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Hoà Bình",
    "Population": "11,150",
    "Density": 1548.12
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Hoa Động",
    "Population": "9,474",
    "Density": 1561.77
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Hoàng Động",
    "Population": "7,300",
    "Density": 1292.88
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Hợp Thành",
    "Population": "7,477",
    "Density": 1261.54
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Kênh Giang",
    "Population": "9,117",
    "Density": 1242.96
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Kiền Bái",
    "Population": "10,466",
    "Density": 2252.5
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Kỳ Sơn",
    "Population": "8,769",
    "Density": 1062.64
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Lại Xuân",
    "Population": "9,641",
    "Density": 835.44
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Lâm Động",
    "Population": "5,014",
    "Density": 1172.95
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Lập Lễ",
    "Population": "11,274",
    "Density": 924.17
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Liên Khê",
    "Population": "10,400",
    "Density": 695.19
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Lưu Kiếm",
    "Population": "10,100",
    "Density": 954
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Lưu Kỳ",
    "Population": "2,334",
    "Density": 520.95
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Minh Đức",
    "Population": "11,511",
    "Density": 718.76
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Minh Tân",
    "Population": "10,253",
    "Density": 827.12
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Mỹ Đồng",
    "Population": "6,320",
    "Density": 1929.18
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Ngũ Lão",
    "Population": "10,049",
    "Density": 1570.52
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Núi Đèo",
    "Population": "4,260",
    "Density": 3860.79
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Phả Lễ",
    "Population": "6,842",
    "Density": 1594.69
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Phục Lễ",
    "Population": "6,437",
    "Density": 1077.74
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Phù Ninh",
    "Population": "5,412",
    "Density": 1152.64
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Quảng Thanh",
    "Population": "8,567",
    "Density": 1472.83
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Tam Hưng",
    "Population": "7,413",
    "Density": 1030.23
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Tân Dương",
    "Population": "9,725",
    "Density": 2084.14
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Thiên Hương",
    "Population": "10,599",
    "Density": 1826.59
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Thuỷ Đường",
    "Population": "11,460",
    "Density": 2252.62
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Thuỷ Sơn",
    "Population": "7,024",
    "Density": 1912.91
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Thuỷ Triều",
    "Population": "9,293",
    "Density": 785.15
  },
  {
    "Province": "Hải Phòng",
    "District": "Thủy Nguyên",
    "Ward": "Trung Hà",
    "Population": "5,868",
    "Density": 1423.03
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Bạch Đằng",
    "Population": "5,167",
    "Density": 1073.19
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Bắc Hưng",
    "Population": "5,852",
    "Density": 1173.71
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Cấp Tiến",
    "Population": "5,884",
    "Density": 796.35
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Đại Thắng",
    "Population": "5,656",
    "Density": 674.27
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Đoàn Lập",
    "Population": "7,019",
    "Density": 834.42
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Đông Hưng",
    "Population": "6,376",
    "Density": 803.16
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Hùng Thắng",
    "Population": "9,583",
    "Density": 728.47
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Khởi Nghĩa",
    "Population": "5,200",
    "Density": 944.46
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Kiến Thiết",
    "Population": "9,675",
    "Density": 789.86
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Nam Hưng",
    "Population": "4,922",
    "Density": 1053.17
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Quang Phục",
    "Population": "9,329",
    "Density": 929.83
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Quyết Tiến",
    "Population": "4,000",
    "Density": 813.31
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tây Hưng",
    "Population": "3,152",
    "Density": 395.54
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Cường",
    "Population": "5,561",
    "Density": 988.76
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Hưng",
    "Population": "2,857",
    "Density": 570.34
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Lãng",
    "Population": "12,928",
    "Density": 1793.61
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Minh",
    "Population": "6,681",
    "Density": 596.25
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Thắng",
    "Population": "6,849",
    "Density": 672.92
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Thanh",
    "Population": "4,909",
    "Density": 778.81
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tiên Tiến",
    "Population": "2,713",
    "Density": 670.17
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Toàn Thắng",
    "Population": "3,807",
    "Density": 735.67
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Tự Cường",
    "Population": "5,761",
    "Density": 744.16
  },
  {
    "Province": "Hải Phòng",
    "District": "Tiên Lãng",
    "Ward": "Vinh Quang",
    "Population": "7,407",
    "Density": 641.08
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "An Hoà",
    "Population": "6,611",
    "Density": 1060.08
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Cao Minh",
    "Population": "7,112",
    "Density": 942.26
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Cổ Am",
    "Population": "4,522",
    "Density": 1328.09
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Cộng Hiền",
    "Population": "6,280",
    "Density": 962.67
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Đồng Minh",
    "Population": "6,768",
    "Density": 1061.26
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Dũng Tiến",
    "Population": "7,470",
    "Density": 888.67
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Giang Biên",
    "Population": "6,978",
    "Density": 875.35
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Hiệp Hoà",
    "Population": "5,315",
    "Density": 946.82
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Hoà Bình",
    "Population": "7,047",
    "Density": 746.69
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Hưng Nhân",
    "Population": "3,405",
    "Density": 793.34
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Hùng Tiến",
    "Population": "6,766",
    "Density": 1193.38
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Liên Am",
    "Population": "5,589",
    "Density": 834.03
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Lý Học",
    "Population": "5,014",
    "Density": 970.2
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Nhân Hoà",
    "Population": "4,853",
    "Density": 1193.62
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Tam Cường",
    "Population": "6,523",
    "Density": 1042.5
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Tam Đa",
    "Population": "4,293",
    "Density": 800.51
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Tân Hưng",
    "Population": "5,544",
    "Density": 789.22
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Tân Liên",
    "Population": "4,897",
    "Density": 1033.54
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Thắng Thuỷ",
    "Population": "6,893",
    "Density": 890.35
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Thanh Lương",
    "Population": "4,073",
    "Density": 797.67
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Tiền Phong",
    "Population": "5,977",
    "Density": 1053.77
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Trấn Dương",
    "Population": "6,729",
    "Density": 568.23
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Trung Lập",
    "Population": "6,220",
    "Density": 868.1
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Việt Tiến",
    "Population": "7,164",
    "Density": 1094.76
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Vĩnh An",
    "Population": "6,307",
    "Density": 897.17
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Vĩnh Bảo",
    "Population": "7,418",
    "Density": 2369.06
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Vĩnh Long",
    "Population": "4,104",
    "Density": 996.43
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Vĩnh Phong",
    "Population": "3,352",
    "Density": 816.15
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Vinh Quang",
    "Population": "6,449",
    "Density": 1002.46
  },
  {
    "Province": "Hải Phòng",
    "District": "Vĩnh Bảo",
    "Ward": "Vĩnh Tiến",
    "Population": "3,410",
    "Density": 1031.71
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Cổ Nhuế",
    "Population": "58,554",
    "Density": 9153.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Đông Ngạc",
    "Population": "31,577",
    "Density": 8667.14
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Liên Mạc",
    "Population": "8,221",
    "Density": 1316.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Minh Khai",
    "Population": "25,689",
    "Density": 5180.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Phú Diễn",
    "Population": "30,312",
    "Density": 7480.57
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Tây Tựu",
    "Population": "17,412",
    "Density": 3055.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Thượng Cát",
    "Population": "7,626",
    "Density": 1940.56
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Thụy Phương",
    "Population": "10,678",
    "Density": 3662.74
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Bắc Từ Liêm",
    "Ward": "Xuân Đỉnh",
    "Population": "32,903",
    "Density": 5748.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Cống Vị",
    "Population": "15,866",
    "Density": 30278.63
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Điện Biên",
    "Population": "9,905",
    "Density": 10957.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Đội Cấn",
    "Population": "15,895",
    "Density": 38683.38
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Giảng Võ",
    "Population": "17,730",
    "Density": 27900.61
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Kim Mã",
    "Population": "15,272",
    "Density": 30655.59
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Liễu Giai",
    "Population": "21,007",
    "Density": 29944.98
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Ngọc Hà",
    "Population": "19,430",
    "Density": 23891.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Ngọc Khánh",
    "Population": "20,072",
    "Density": 19187.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Nguyễn Trung Trực",
    "Population": "7,174",
    "Density": 45934.18
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Phúc Xá",
    "Population": "21,559",
    "Density": 20304.2
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Quán Thánh",
    "Population": "8,705",
    "Density": 11009.51
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Thành Công",
    "Population": "23,049",
    "Density": 35293.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Trúc Bạch",
    "Population": "8,699",
    "Density": 15836.23
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Đình",
    "Ward": "Vĩnh Phúc",
    "Population": "21,547",
    "Density": 29616.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Ba Trại",
    "Population": "11,833",
    "Density": 584.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Ba Vì",
    "Population": "1,957",
    "Density": 78.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Cẩm Lĩnh",
    "Population": "10,487",
    "Density": 391.2
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Cam Thượng",
    "Population": "6,018",
    "Density": 758.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Châu Sơn",
    "Population": "3,605",
    "Density": 920.79
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Chu Minh",
    "Population": "6,768",
    "Density": 1385.78
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Cổ Đô",
    "Population": "6,497",
    "Density": 796.84
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Đông Quang",
    "Population": "4,291",
    "Density": 1108.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Đồng Thái",
    "Population": "10,535",
    "Density": 1286.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Khánh Thượng",
    "Population": "7,337",
    "Density": 257.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Minh Châu",
    "Population": "5,638",
    "Density": 993.03
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Minh Quang",
    "Population": "11,066",
    "Density": 393.92
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Phong Vân",
    "Population": "5,687",
    "Density": 1271.52
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Phú Châu",
    "Population": "9,050",
    "Density": 898.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Phú Cường",
    "Population": "4,743",
    "Density": 502.66
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Phú Đông",
    "Population": "4,496",
    "Density": 1248.82
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Phú Phương",
    "Population": "5,077",
    "Density": 1255.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Phú Sơn",
    "Population": "7,920",
    "Density": 597.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Sơn Đà",
    "Population": "7,809",
    "Density": 667.72
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Tản Hồng",
    "Population": "10,506",
    "Density": 1184.91
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Tản Lĩnh",
    "Population": "14,379",
    "Density": 507.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Tây Đằng",
    "Population": "12,790",
    "Density": 1051.2
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Thái Hòa",
    "Population": "6,712",
    "Density": 1195.56
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Thuần Mỹ",
    "Population": "5,076",
    "Density": 428.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Thụy An",
    "Population": "8,786",
    "Density": 576.32
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Tiên Phong",
    "Population": "6,603",
    "Density": 735.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Tòng Bạt",
    "Population": "8,499",
    "Density": 1039.32
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Vân Hòa",
    "Population": "8,899",
    "Density": 268.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Vạn Thắng",
    "Population": "13,019",
    "Density": 1312.2
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Vật Lại",
    "Population": "11,183",
    "Density": 770.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ba Vì",
    "Ward": "Yên Bài",
    "Population": "8,854",
    "Density": 240.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Dịch Vọng",
    "Population": "21,150",
    "Density": 16728.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Dịch Vọng Hậu",
    "Population": "28,255",
    "Density": 17557.32
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Mai Dịch",
    "Population": "34,471",
    "Density": 17264.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Nghĩa Đô",
    "Population": "28,929",
    "Density": 19935.91
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Nghĩa Tân",
    "Population": "22,354",
    "Density": 37240.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Quan Hoa",
    "Population": "24,434",
    "Density": 28659.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Trung Hoà",
    "Population": "31,746",
    "Density": 12656.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Cầu Giấy",
    "Ward": "Yên Hoà",
    "Population": "34,304",
    "Density": 16038.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Chúc Sơn",
    "Population": "11,551",
    "Density": 2533.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Đại Yên",
    "Population": "5,323",
    "Density": 1210.52
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Đồng Lạc",
    "Population": "4,090",
    "Density": 806.91
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Đồng Phú",
    "Population": "5,419",
    "Density": 1331.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Đông Phương Yên",
    "Population": "9,797",
    "Density": 1666.98
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Đông Sơn",
    "Population": "8,897",
    "Density": 1137.84
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Hòa Chính",
    "Population": "5,955",
    "Density": 1287.76
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Hoàng Diệu",
    "Population": "8,727",
    "Density": 1081.06
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Hoàng Văn Thụ",
    "Population": "10,470",
    "Density": 813.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Hồng Phong",
    "Population": "3,962",
    "Density": 1248.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Hợp Đồng",
    "Population": "5,871",
    "Density": 1184.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Hữu Văn",
    "Population": "7,754",
    "Density": 1401.49
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Lam Điền",
    "Population": "9,695",
    "Density": 1189.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Mỹ Lương",
    "Population": "6,758",
    "Density": 913.6
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Nam Phương Tiến",
    "Population": "8,652",
    "Density": 424.74
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Ngọc Hòa",
    "Population": "7,003",
    "Density": 1170.01
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Phú Nam An",
    "Population": "3,800",
    "Density": 1152.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Phụng Châu",
    "Population": "11,818",
    "Density": 1594.83
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Phú Nghĩa",
    "Population": "9,749",
    "Density": 1189.44
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Quảng Bị",
    "Population": "10,109",
    "Density": 1423.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Tân Tiến",
    "Population": "9,483",
    "Density": 701.04
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Thanh Bình",
    "Population": "5,776",
    "Density": 1090.22
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Thượng Vực",
    "Population": "5,644",
    "Density": 1176.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Thụy Hương",
    "Population": "7,485",
    "Density": 1384.91
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Thủy Xuân Tiên",
    "Population": "16,068",
    "Density": 1178.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Tiên Phương",
    "Population": "14,054",
    "Density": 1704.59
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Tốt Động",
    "Population": "12,247",
    "Density": 1346.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Trần Phú",
    "Population": "8,320",
    "Density": 494.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Trung Hòa",
    "Population": "9,085",
    "Density": 1430.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Trường Yên",
    "Population": "9,845",
    "Density": 1621
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Văn Võ",
    "Population": "7,422",
    "Density": 1584.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Chương Mỹ",
    "Ward": "Xuân Mai",
    "Population": "25,530",
    "Density": 2802.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Đan Phượng",
    "Population": "7,486",
    "Density": 2006.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Đồng Tháp",
    "Population": "6,911",
    "Density": 2362.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Hạ Mỗ",
    "Population": "7,628",
    "Density": 2030.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Hồng Hà",
    "Population": "10,297",
    "Density": 1051.51
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Liên Hà",
    "Population": "7,621",
    "Density": 2048.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Liên Hồng",
    "Population": "6,432",
    "Density": 1218.39
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Liên Trung",
    "Population": "7,046",
    "Density": 1648.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Phùng",
    "Population": "8,624",
    "Density": 3353.55
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Phương Đình",
    "Population": "11,170",
    "Density": 1843.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Song Phượng",
    "Population": "4,058",
    "Density": 1582.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Tân Hội",
    "Population": "16,842",
    "Density": 3061.63
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Tân Lập",
    "Population": "14,953",
    "Density": 2584.43
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Thọ An",
    "Population": "9,181",
    "Density": 1671.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Thọ Xuân",
    "Population": "8,924",
    "Density": 1884.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Thượng Mỗ",
    "Population": "7,802",
    "Density": 2185.31
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đan Phượng",
    "Ward": "Trung Châu",
    "Population": "7,505",
    "Density": 937.57
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Bắc Hồng",
    "Population": "11,696",
    "Density": 1683.6
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Cổ Loa",
    "Population": "16,648",
    "Density": 2062.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Đại Mạch",
    "Population": "9,756",
    "Density": 1151.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Đông Anh",
    "Population": "22,757",
    "Density": 4721.76
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Đông Hội",
    "Population": "10,006",
    "Density": 1444.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Dục Tú",
    "Population": "16,085",
    "Density": 1842.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Hải Bối",
    "Population": "16,034",
    "Density": 2011.42
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Kim Chung",
    "Population": "30,730",
    "Density": 4047.63
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Kim Nỗ",
    "Population": "12,367",
    "Density": 1910.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Liên Hà",
    "Population": "15,428",
    "Density": 1889.57
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Mai Lâm",
    "Population": "12,227",
    "Density": 1963.96
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Nam Hồng",
    "Population": "12,530",
    "Density": 1340.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Nguyên Khê",
    "Population": "12,729",
    "Density": 1603.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Tầm Xá",
    "Population": "4,201",
    "Density": 813.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Thuỵ Lâm",
    "Population": "16,763",
    "Density": 1485.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Tiên Dương",
    "Population": "15,317",
    "Density": 1613.71
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Uy Nỗ",
    "Population": "17,144",
    "Density": 2191.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Vân Hà",
    "Population": "9,371",
    "Density": 1783.66
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Vân Nội",
    "Population": "10,626",
    "Density": 1542.08
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Việt Hùng",
    "Population": "17,202",
    "Density": 1990.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Vĩnh Ngọc",
    "Population": "12,638",
    "Density": 1306.71
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Võng La",
    "Population": "6,920",
    "Density": 1003.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Xuân Canh",
    "Population": "10,136",
    "Density": 1582.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đông Anh",
    "Ward": "Xuân Nộn",
    "Population": "14,026",
    "Density": 1300.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Cát Linh",
    "Population": "12,503",
    "Density": 36389.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Hàng Bột",
    "Population": "18,822",
    "Density": 69928.67
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Khâm Thiên",
    "Population": "9,807",
    "Density": 47397.42
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Khương Thượng",
    "Population": "14,469",
    "Density": 47517.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Kim Liên",
    "Population": "14,929",
    "Density": 46124.14
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Láng Hạ",
    "Population": "28,680",
    "Density": 28759.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Láng Thượng",
    "Population": "31,279",
    "Density": 26251.78
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Nam Đồng",
    "Population": "16,501",
    "Density": 38050.55
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Ngã Tư Sở",
    "Population": "7,932",
    "Density": 27644.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Ô Chợ Dừa",
    "Population": "36,318",
    "Density": 33025.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Phương Liên",
    "Population": "15,752",
    "Density": 33220.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Phương Mai",
    "Population": "19,858",
    "Density": 30249.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Quang Trung",
    "Population": "13,788",
    "Density": 31761.54
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Quốc Tử Giám",
    "Population": "8,540",
    "Density": 43723.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Thịnh Quang",
    "Population": "18,058",
    "Density": 43503.82
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Thổ Quan",
    "Population": "17,500",
    "Density": 62406.39
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Trung Liệt",
    "Population": "27,488",
    "Density": 34689.11
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Trung Phụng",
    "Population": "17,027",
    "Density": 80980.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Trung Tự",
    "Population": "13,059",
    "Density": 31296.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Văn Chương",
    "Population": "17,655",
    "Density": 53504.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Đống Đa",
    "Ward": "Văn Miếu",
    "Population": "10,152",
    "Density": 38804.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Bát Tràng",
    "Population": "7,082",
    "Density": 3823.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Cổ Bi",
    "Population": "8,313",
    "Density": 1706.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Đặng Xá",
    "Population": "8,965",
    "Density": 1509.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Đa Tốn",
    "Population": "11,501",
    "Density": 1571.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Đình Xuyên",
    "Population": "9,519",
    "Density": 2962.19
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Đông Dư",
    "Population": "4,445",
    "Density": 1136.94
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Dương Hà",
    "Population": "5,511",
    "Density": 2097.75
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Dương Quang",
    "Population": "10,658",
    "Density": 1862.31
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Dương Xá",
    "Population": "13,146",
    "Density": 2766.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Kiêu Kỵ",
    "Population": "11,338",
    "Density": 1966.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Kim Lan",
    "Population": "5,631",
    "Density": 2074.42
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Kim Sơn",
    "Population": "10,985",
    "Density": 1747.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Lệ Chi",
    "Population": "13,715",
    "Density": 1626.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Ninh Hiệp",
    "Population": "14,988",
    "Density": 3014.06
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Phù Đổng",
    "Population": "11,848",
    "Density": 1002.54
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Phú Thị",
    "Population": "7,714",
    "Density": 1557.79
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Trâu Quỳ",
    "Population": "20,790",
    "Density": 2786
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Trung Mầu",
    "Population": "4,966",
    "Density": 1149.78
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Văn Đức",
    "Population": "6,805",
    "Density": 1006.05
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Yên Thường",
    "Population": "16,683",
    "Density": 1935.27
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Yên Viên",
    "Population": "12,631",
    "Density": 11166.02
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Gia Lâm",
    "Ward": "Yên Viên",
    "Population": "12,501",
    "Density": 3489.56
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Biên Giang",
    "Population": "6,546",
    "Density": 2394.56
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Đồng Mai",
    "Population": "13,404",
    "Density": 2022.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Dương Nội",
    "Population": "18,353",
    "Density": 3060.26
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Hà Cầu",
    "Population": "10,413",
    "Density": 7223.22
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Kiến Hưng",
    "Population": "13,551",
    "Density": 3190.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "La Khê",
    "Population": "15,915",
    "Density": 6180.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Mộ Lao",
    "Population": "19,528",
    "Density": 14895.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Nguyễn Trãi",
    "Population": "12,454",
    "Density": 33219.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Phúc La",
    "Population": "13,977",
    "Density": 9972.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Phú La",
    "Population": "8,671",
    "Density": 5648.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Phú Lãm",
    "Population": "13,222",
    "Density": 5065.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Phú Lương",
    "Population": "19,014",
    "Density": 2757.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Quang Trung",
    "Population": "15,578",
    "Density": 13067.7
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Vạn Phúc",
    "Population": "13,543",
    "Density": 9955.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Văn Quán",
    "Population": "19,932",
    "Density": 14114.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Yên Nghĩa",
    "Population": "13,759",
    "Density": 1787.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hà Đông",
    "Ward": "Yết Kiêu",
    "Population": "5,276",
    "Density": 24558.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Bạch Đằng",
    "Population": "20,621",
    "Density": 17188.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Bách Khoa",
    "Population": "14,644",
    "Density": 28109.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Bạch Mai",
    "Population": "16,236",
    "Density": 72288.51
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Bùi Thị Xuân",
    "Population": "5,202",
    "Density": 36049.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Cầu Dền",
    "Population": "11,694",
    "Density": 85401.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Đống Mác",
    "Population": "8,990",
    "Density": 74217.78
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Đồng Nhân",
    "Population": "10,065",
    "Density": 61211.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Đồng Tâm",
    "Population": "20,686",
    "Density": 42893.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Lê Đại Hành",
    "Population": "9,211",
    "Density": 11167.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Minh Khai",
    "Population": "17,843",
    "Density": 34924.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Ngô Thì Nhậm",
    "Population": "6,870",
    "Density": 35885.92
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Nguyễn Du",
    "Population": "6,601",
    "Density": 16400.41
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Phạm Đình Hổ",
    "Population": "7,019",
    "Density": 21994.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Phố Huế",
    "Population": "9,931",
    "Density": 46875.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Quỳnh Lôi",
    "Population": "15,882",
    "Density": 63708.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Quỳnh Mai",
    "Population": "12,316",
    "Density": 81229.39
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Thanh Lương",
    "Population": "25,043",
    "Density": 21033.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Thanh Nhàn",
    "Population": "21,227",
    "Density": 28216.51
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Trương Định",
    "Population": "22,104",
    "Density": 44349.03
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hai Bà Trưng",
    "Ward": "Vĩnh Tuy",
    "Population": "33,541",
    "Density": 23210.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "An Khánh",
    "Population": "17,130",
    "Density": 2028.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "An Thượng",
    "Population": "13,112",
    "Density": 1609.94
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Cát Quế",
    "Population": "14,664",
    "Density": 3559.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Đắc Sở",
    "Population": "3,951",
    "Density": 1983.04
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Di Trạch",
    "Population": "8,691",
    "Density": 3085.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Đông La",
    "Population": "9,667",
    "Density": 2081.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Đức Giang",
    "Population": "10,811",
    "Density": 3253.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Đức Thượng",
    "Population": "9,936",
    "Density": 1856.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Dương Liễu",
    "Population": "11,876",
    "Density": 2747.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Kim Chung",
    "Population": "10,994",
    "Density": 2796.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Lại Yên",
    "Population": "6,375",
    "Density": 1867.75
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "La Phù",
    "Population": "9,764",
    "Density": 2892.61
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Minh Khai",
    "Population": "5,061",
    "Density": 2687.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Sơn Đồng",
    "Population": "8,480",
    "Density": 2570.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Song Phương",
    "Population": "11,447",
    "Density": 2086.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Tiền Yên",
    "Population": "5,907",
    "Density": 1909.98
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Trạm Trôi",
    "Population": "5,110",
    "Density": 4045.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Vân Canh",
    "Population": "7,834",
    "Density": 1704.41
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Vân Côn",
    "Population": "11,242",
    "Density": 1688.67
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoài Đức",
    "Ward": "Yên Sở",
    "Population": "9,054",
    "Density": 1844.41
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Đại Kim",
    "Population": "25,660",
    "Density": 9416.51
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Định Công",
    "Population": "41,442",
    "Density": 14890.59
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Giáp Bát",
    "Population": "16,590",
    "Density": 28250.32
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Hoàng Liệt",
    "Population": "26,133",
    "Density": 4931.41
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Hoàng Văn Thụ",
    "Population": "30,566",
    "Density": 18589.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Lĩnh Nam",
    "Population": "22,983",
    "Density": 4167.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Mai Động",
    "Population": "20,350",
    "Density": 21184.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Tân Mai",
    "Population": "23,084",
    "Density": 42629.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Thanh Trì",
    "Population": "17,315",
    "Density": 5974.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Thịnh Liệt",
    "Population": "30,836",
    "Density": 10456.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Trần Phú",
    "Population": "7,486",
    "Density": 1915.66
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Tương Mai",
    "Population": "27,972",
    "Density": 32100.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Vĩnh Hưng",
    "Population": "30,962",
    "Density": 17678.43
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàng Mai",
    "Ward": "Yên Sở",
    "Population": "14,130",
    "Density": 1907.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Chương Dương Độ",
    "Population": "23,284",
    "Density": 22219.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Cửa Đông",
    "Population": "7,409",
    "Density": 52062.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Cửa Nam",
    "Population": "8,275",
    "Density": 32969.44
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Đồng Xuân",
    "Population": "8,631",
    "Density": 50806.45
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Bạc",
    "Population": "5,608",
    "Density": 56887.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Bài",
    "Population": "7,506",
    "Density": 29946.14
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Bồ",
    "Population": "6,626",
    "Density": 69674.03
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Bông",
    "Population": "5,958",
    "Density": 32902.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Buồm",
    "Population": "7,553",
    "Density": 64472.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Đào",
    "Population": "4,506",
    "Density": 64463.52
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Gai",
    "Population": "7,291",
    "Density": 85645.48
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Mã",
    "Population": "7,163",
    "Density": 49098.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Hàng Trống",
    "Population": "6,296",
    "Density": 18333.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Lý Thái Tổ",
    "Population": "5,326",
    "Density": 21914.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Phan Chu Trinh",
    "Population": "5,772",
    "Density": 13690.38
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Phúc Tân",
    "Population": "16,072",
    "Density": 22228.98
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Tràng Tiền",
    "Population": "6,456",
    "Density": 17252.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Hoàn Kiếm",
    "Ward": "Trần Hưng Đạo",
    "Population": "7,602",
    "Density": 16354.01
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Bồ Đề",
    "Population": "24,606",
    "Density": 6011.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Cự Khối",
    "Population": "6,705",
    "Density": 1347.14
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Đức Giang",
    "Population": "26,653",
    "Density": 10846.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Giang Biên",
    "Population": "9,563",
    "Density": 2177.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Gia Thụy",
    "Population": "11,356",
    "Density": 8145.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Long Biên",
    "Population": "13,788",
    "Density": 1760.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Ngọc Lâm",
    "Population": "22,155",
    "Density": 26106.48
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Ngọc Thụy",
    "Population": "26,754",
    "Density": 3029.45
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Phúc Đồng",
    "Population": "10,500",
    "Density": 2231.29
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Phúc Lợi",
    "Population": "10,650",
    "Density": 1758.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Sài Đồng",
    "Population": "16,016",
    "Density": 13922.11
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Thạch Bàn",
    "Population": "14,501",
    "Density": 2900.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Thượng Thanh",
    "Population": "21,625",
    "Density": 4460.6
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Long Biên",
    "Ward": "Việt Hưng",
    "Population": "12,041",
    "Density": 3250.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Chi Đông",
    "Population": "7,930",
    "Density": 1735.88
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Chu Phan",
    "Population": "8,575",
    "Density": 1132.67
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Đại Thịnh",
    "Population": "10,491",
    "Density": 1235.11
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Hoàng Kim",
    "Population": "4,862",
    "Density": 865.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Kim Hoa",
    "Population": "9,485",
    "Density": 1205.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Liên Mạc",
    "Population": "12,650",
    "Density": 1462.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Mê Linh",
    "Population": "11,630",
    "Density": 1940.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Quang Minh",
    "Population": "16,112",
    "Density": 1745.78
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Tam Đồng",
    "Population": "8,073",
    "Density": 1202.65
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Thạch Đà",
    "Population": "12,607",
    "Density": 1618.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Thanh Lâm",
    "Population": "15,424",
    "Density": 1253.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Tiền Phong",
    "Population": "15,166",
    "Density": 1416.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Tiến Thắng",
    "Population": "12,034",
    "Density": 1414.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Tiến Thịnh",
    "Population": "9,749",
    "Density": 1332.65
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Tráng Việt",
    "Population": "9,446",
    "Density": 1298.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Tự Lập",
    "Population": "10,059",
    "Density": 1518.98
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Văn Khê",
    "Population": "12,867",
    "Density": 953.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mê Linh",
    "Ward": "Vạn Yên",
    "Population": "4,330",
    "Density": 1456.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "An Mỹ",
    "Population": "5,771",
    "Density": 943.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "An Phú",
    "Population": "7,410",
    "Density": 317.22
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "An Tiến",
    "Population": "5,718",
    "Density": 583.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Bột Xuyên",
    "Population": "6,884",
    "Density": 1192.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Đại Hưng",
    "Population": "6,423",
    "Density": 919.56
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Đại Nghĩa",
    "Population": "6,610",
    "Density": 1335.92
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Đốc Tín",
    "Population": "3,799",
    "Density": 1078.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Đồng Tâm",
    "Population": "8,482",
    "Density": 965.54
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Hồng Sơn",
    "Population": "5,943",
    "Density": 347.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Hợp Thanh",
    "Population": "11,789",
    "Density": 1116.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Hợp Tiến",
    "Population": "11,137",
    "Density": 755.72
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Hùng Tiến",
    "Population": "6,260",
    "Density": 712.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Hương Sơn",
    "Population": "17,844",
    "Density": 440.77
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Lê Thanh",
    "Population": "10,874",
    "Density": 1449.71
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Mỹ Thành",
    "Population": "3,235",
    "Density": 822.74
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Phúc Lâm",
    "Population": "7,815",
    "Density": 1684.19
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Phù Lưu Tế",
    "Population": "6,835",
    "Density": 1023.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Phùng Xá",
    "Population": "6,663",
    "Density": 1525.13
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Thượng Lâm",
    "Population": "5,350",
    "Density": 858.13
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Tuy Lai",
    "Population": "11,836",
    "Density": 445.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Vạn Kim",
    "Population": "5,391",
    "Density": 903.48
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Mỹ Đức",
    "Ward": "Xuy Xá",
    "Population": "7,930",
    "Density": 1500.39
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Cầu Diễn",
    "Population": "27,045",
    "Density": 12239.77
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Đại Mỗ",
    "Population": "18,807",
    "Density": 3534.02
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Mễ Trì",
    "Population": "22,544",
    "Density": 3224.26
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Mỹ Đình 1",
    "Population": "38,452",
    "Density": 8216.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Tây Mỗ",
    "Population": "15,623",
    "Density": 2552.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Trung Văn",
    "Population": "22,225",
    "Density": 8017.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Nam Từ Liêm",
    "Ward": "Xuân Phương",
    "Population": "24,890",
    "Density": 4533.78
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Cẩm Đình",
    "Population": "2,706",
    "Density": 691.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Hát Môn",
    "Population": "6,861",
    "Density": 1608.03
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Hiệp Thuận",
    "Population": "9,285",
    "Density": 1256.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Liên Hiệp",
    "Population": "9,095",
    "Density": 2223.01
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Long Xuyên",
    "Population": "7,560",
    "Density": 1133.82
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Ngọc Tảo",
    "Population": "7,348",
    "Density": 1122.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Phúc Hòa",
    "Population": "5,812",
    "Density": 1370.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Phúc Thọ",
    "Population": "7,040",
    "Density": 1901.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Phụng Thượng",
    "Population": "12,309",
    "Density": 1933.61
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Phương Độ",
    "Population": "1,410",
    "Density": 603.26
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Sen Chiểu",
    "Population": "8,913",
    "Density": 1614.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Tam Hiệp",
    "Population": "10,147",
    "Density": 1787.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Tam Thuấn",
    "Population": "5,143",
    "Density": 1048.35
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Thanh Đa",
    "Population": "6,190",
    "Density": 1348.38
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Thọ Lộc",
    "Population": "7,433",
    "Density": 1988.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Thượng Cốc",
    "Population": "4,620",
    "Density": 1404
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Tích Giang",
    "Population": "7,723",
    "Density": 1232.05
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Trạch Mỹ Lộc",
    "Population": "6,163",
    "Density": 1102.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Vân Hà",
    "Population": "1,746",
    "Density": 299.01
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Vân Nam",
    "Population": "5,935",
    "Density": 933.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Vân Phúc",
    "Population": "5,919",
    "Density": 1138.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Võng Xuyên",
    "Population": "15,209",
    "Density": 2007.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phúc Thọ",
    "Ward": "Xuân Phú",
    "Population": "4,917",
    "Density": 999.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Bạch Hạ",
    "Population": "6,407",
    "Density": 1119.91
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Châu Can",
    "Population": "8,770",
    "Density": 1038.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Chuyên Mỹ",
    "Population": "7,502",
    "Density": 880.61
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Đại Thắng",
    "Population": "5,831",
    "Density": 1399.29
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Đại Xuyên",
    "Population": "7,232",
    "Density": 764.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Hoàng Long",
    "Population": "8,184",
    "Density": 777.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Hồng Minh",
    "Population": "6,823",
    "Density": 1199.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Hồng Thái",
    "Population": "6,542",
    "Density": 701.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Khai Thái",
    "Population": "7,515",
    "Density": 790.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Minh Tân",
    "Population": "12,347",
    "Density": 1484.19
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Nam Phong",
    "Population": "4,583",
    "Density": 1243.79
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Nam Triều",
    "Population": "5,728",
    "Density": 956.04
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Phúc Tiến",
    "Population": "7,712",
    "Density": 1040.43
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Phú Minh",
    "Population": "4,872",
    "Density": 4348.45
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Phượng Dực",
    "Population": "7,815",
    "Density": 1205.01
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Phú Túc",
    "Population": "7,535",
    "Density": 948.83
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Phú Xuyên",
    "Population": "9,826",
    "Density": 1416.26
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Phú Yên",
    "Population": "4,494",
    "Density": 1031.96
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Quang Lãng",
    "Population": "4,432",
    "Density": 736.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Quang Trung",
    "Population": "3,906",
    "Density": 939.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Sơn Hà",
    "Population": "4,721",
    "Density": 1253.45
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Tân Dân",
    "Population": "8,166",
    "Density": 1068.6
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Thụy Phú",
    "Population": "2,570",
    "Density": 769.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Tri Thủy",
    "Population": "8,485",
    "Density": 1536.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Tri Trung",
    "Population": "3,362",
    "Density": 892.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Văn Hoàng",
    "Population": "5,647",
    "Density": 913.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Văn Nhân",
    "Population": "5,270",
    "Density": 1529.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Phú Xuyên",
    "Ward": "Vân Từ",
    "Population": "5,111",
    "Density": 783.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Cấn Hữu",
    "Population": "8,717",
    "Density": 880.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Cộng Hòa",
    "Population": "6,499",
    "Density": 1476.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Đại Thành",
    "Population": "5,211",
    "Density": 2028.65
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Đồng Quang",
    "Population": "12,596",
    "Density": 1135.8
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Đông Xuân",
    "Population": "4,661",
    "Density": 290.79
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Đông Yên",
    "Population": "10,539",
    "Density": 842.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Hòa Thạch",
    "Population": "11,620",
    "Density": 625.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Liệp Tuyết",
    "Population": "4,775",
    "Density": 1210.45
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Nghĩa Hương",
    "Population": "6,009",
    "Density": 1620.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Ngọc Liệp",
    "Population": "7,497",
    "Density": 1161.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Ngọc Mỹ",
    "Population": "9,889",
    "Density": 1787.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Phú Cát",
    "Population": "7,370",
    "Density": 661.76
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Phú Mãn",
    "Population": "2,067",
    "Density": 271.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Phượng Cách",
    "Population": "4,764",
    "Density": 1870.29
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Quốc Oai",
    "Population": "12,188",
    "Density": 2380.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Sài Sơn",
    "Population": "16,352",
    "Density": 1618.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Tân Hòa",
    "Population": "6,915",
    "Density": 1815.39
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Tân Phú",
    "Population": "4,821",
    "Density": 1603.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Thạch Thán",
    "Population": "5,595",
    "Density": 2684.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Tuyết Nghĩa",
    "Population": "5,629",
    "Density": 1113.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Quốc Oai",
    "Ward": "Yên Sơn",
    "Population": "6,476",
    "Density": 1556.84
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Bắc Phú",
    "Population": "9,694",
    "Density": 832.39
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Bắc Sơn",
    "Population": "14,199",
    "Density": 471.18
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Đông Xuân",
    "Population": "12,014",
    "Density": 1692.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Đức Hoà",
    "Population": "7,257",
    "Density": 977.7
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Hiền Ninh",
    "Population": "10,494",
    "Density": 805.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Hồng Kỳ",
    "Population": "10,201",
    "Density": 702.84
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Kim Lũ",
    "Population": "8,917",
    "Density": 1725.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Mai Đình",
    "Population": "17,525",
    "Density": 1161.06
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Minh Phú",
    "Population": "11,079",
    "Density": 612.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Minh Trí",
    "Population": "12,270",
    "Density": 497.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Nam Sơn",
    "Population": "7,864",
    "Density": 327.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Phú Cường",
    "Population": "11,905",
    "Density": 1400.08
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Phù Linh",
    "Population": "8,692",
    "Density": 617.72
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Phù Lỗ",
    "Population": "13,645",
    "Density": 2119.18
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Phú Minh",
    "Population": "8,564",
    "Density": 1126.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Quang Tiến",
    "Population": "9,102",
    "Density": 695.71
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Sóc Sơn",
    "Population": "3,979",
    "Density": 3775.14
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Tân Dân",
    "Population": "14,246",
    "Density": 1382.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Tân Hưng",
    "Population": "9,632",
    "Density": 1047.05
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Tân Minh",
    "Population": "16,959",
    "Density": 1372.75
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Thanh Xuân",
    "Population": "11,468",
    "Density": 1306.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Tiên Dược",
    "Population": "14,632",
    "Density": 1117.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Trung Giã",
    "Population": "11,867",
    "Density": 1376.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Việt Long",
    "Population": "7,705",
    "Density": 1055.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Xuân Giang",
    "Population": "8,931",
    "Density": 978.79
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Xuân Thu",
    "Population": "9,695",
    "Density": 1638.06
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Sơn Tây",
    "Population": "125,749",
    "Density": 1068.48
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Cổ Đông",
    "Population": "13,783",
    "Density": 532.59
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Đường Lâm",
    "Population": "8,892",
    "Density": 1107.61
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Kim Sơn",
    "Population": "5,934",
    "Density": 380.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Lê Lợi",
    "Population": "8,313",
    "Density": 8880.27
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Ngô Quyền",
    "Population": "4,965",
    "Density": 14142.88
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Phú Thịnh",
    "Population": "6,145",
    "Density": 2283.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Quang Trung",
    "Population": "7,807",
    "Density": 9903.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Sơn Đông",
    "Population": "12,855",
    "Density": 642.33
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Sơn Lộc",
    "Population": "8,563",
    "Density": 7281.46
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Thanh Mỹ",
    "Population": "9,722",
    "Density": 895.21
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Trung Hưng",
    "Population": "7,997",
    "Density": 1438.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Trung Sơn Trầm",
    "Population": "6,422",
    "Density": 1871.65
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Viên Sơn",
    "Population": "6,536",
    "Density": 2210.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Xuân Khanh",
    "Population": "9,769",
    "Density": 2073.13
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Sóc Sơn",
    "Ward": "Xuân Sơn",
    "Population": "8,046",
    "Density": 547.42
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Bưởi",
    "Population": "23,816",
    "Density": 14883.14
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Nhật Tân",
    "Population": "10,368",
    "Density": 3023.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Phú Thượng",
    "Population": "16,635",
    "Density": 2644
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Quảng An",
    "Population": "9,243",
    "Density": 2346.42
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Thụy Khuê",
    "Population": "15,143",
    "Density": 8571.83
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Tứ Liên",
    "Population": "14,065",
    "Density": 5301.55
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Xuân La",
    "Population": "19,671",
    "Density": 8002.85
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Tây Hồ",
    "Ward": "Yên Phụ",
    "Population": "21,698",
    "Density": 14186.34
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Bình Phú",
    "Population": "8,776",
    "Density": 1787.66
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Bình Yên",
    "Population": "9,979",
    "Density": 842.75
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Cẩm Yên",
    "Population": "4,400",
    "Density": 1106.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Canh Nậu",
    "Population": "12,643",
    "Density": 2496.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Cần Kiệm",
    "Population": "7,989",
    "Density": 1094.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Chàng Sơn",
    "Population": "8,293",
    "Density": 2983.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Đại Đồng",
    "Population": "8,576",
    "Density": 1610.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Dị Nậu",
    "Population": "6,539",
    "Density": 1993.54
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Đồng Trúc",
    "Population": "6,474",
    "Density": 960.28
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Hạ Bằng",
    "Population": "5,725",
    "Density": 830.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Hương Ngải",
    "Population": "7,743",
    "Density": 1640.47
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Hữu Bằng",
    "Population": "14,340",
    "Density": 7619.55
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Kim Quan",
    "Population": "7,028",
    "Density": 1598.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Lại Thượng",
    "Population": "8,516",
    "Density": 971.82
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Liên Quan",
    "Population": "5,746",
    "Density": 1935.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Phú Kim",
    "Population": "8,738",
    "Density": 1382.86
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Phùng Xá",
    "Population": "11,055",
    "Density": 2302.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Tân Xã",
    "Population": "4,451",
    "Density": 522.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Thạch Hoà",
    "Population": "8,570",
    "Density": 258.23
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Thạch Xá",
    "Population": "6,017",
    "Density": 1810.5
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Tiến Xuân",
    "Population": "6,688",
    "Density": 371.35
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Yên Bình",
    "Population": "5,956",
    "Density": 348.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thạch Thất",
    "Ward": "Yên Trung",
    "Population": "3,303",
    "Density": 238.73
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Bích Hòa",
    "Population": "8,784",
    "Density": 1723.47
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Bình Minh",
    "Population": "11,398",
    "Density": 1692.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Cao Dương",
    "Population": "9,394",
    "Density": 2085.52
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Cao Viên",
    "Population": "16,034",
    "Density": 2217.06
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Cự Khê",
    "Population": "5,258",
    "Density": 904.57
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Dân Hòa",
    "Population": "7,651",
    "Density": 1473.53
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Đỗ Động",
    "Population": "4,968",
    "Density": 775.79
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Hồng Dương",
    "Population": "10,318",
    "Density": 1007.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Kim An",
    "Population": "3,278",
    "Density": 1054.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Kim Bài",
    "Population": "5,859",
    "Density": 1394.57
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Kim Thư",
    "Population": "4,978",
    "Density": 1713.18
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Liên Châu",
    "Population": "6,225",
    "Density": 991.02
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Mỹ Hưng",
    "Population": "8,752",
    "Density": 1412.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Phương Trung",
    "Population": "13,405",
    "Density": 2819.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Tam Hưng",
    "Population": "9,989",
    "Density": 896.52
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Tân Ước",
    "Population": "6,349",
    "Density": 726.27
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Thanh Cao",
    "Population": "9,076",
    "Density": 2009.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Thanh Mai",
    "Population": "8,223",
    "Density": 1506.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Thanh Thùy",
    "Population": "6,787",
    "Density": 1280.76
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Thanh Văn",
    "Population": "5,314",
    "Density": 775.38
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Oai",
    "Ward": "Xuân Dương",
    "Population": "5,210",
    "Density": 1447.75
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Đại Áng",
    "Population": "8,755",
    "Density": 1650.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Đông Mỹ",
    "Population": "7,454",
    "Density": 2835.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Duyên Hà",
    "Population": "4,993",
    "Density": 1640.92
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Hữu Hoà",
    "Population": "8,637",
    "Density": 2861.07
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Liên Ninh",
    "Population": "12,468",
    "Density": 2935.37
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Ngọc Hồi",
    "Population": "10,204",
    "Density": 2732.43
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Ngũ Hiệp",
    "Population": "11,889",
    "Density": 3849.94
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Tam Hiệp",
    "Population": "11,949",
    "Density": 3742.13
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Tân Triều",
    "Population": "25,215",
    "Density": 8462.55
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Tả Thanh Oai",
    "Population": "20,900",
    "Density": 2511.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Thanh Liệt",
    "Population": "12,836",
    "Density": 3809.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Tứ Hiệp",
    "Population": "11,357",
    "Density": 2648.74
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Văn Điển",
    "Population": "14,578",
    "Density": 13171.3
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Vạn Phúc",
    "Population": "9,618",
    "Density": 1949.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Vĩnh Quỳnh",
    "Population": "22,801",
    "Density": 3687.45
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Trì",
    "Ward": "Yên Mỹ",
    "Population": "5,052",
    "Density": 1332
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Hạ Đình",
    "Population": "15,848",
    "Density": 18522.02
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Khương Đình",
    "Population": "23,628",
    "Density": 18509.99
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Khương Mai",
    "Population": "18,372",
    "Density": 17195.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Khương Trung",
    "Population": "29,156",
    "Density": 38303.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Kim Giang",
    "Population": "8,713",
    "Density": 62436.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Nhân Chính",
    "Population": "36,913",
    "Density": 23057.66
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Phương Liệt",
    "Population": "20,929",
    "Density": 20127.91
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Thanh Xuân Bắc",
    "Population": "24,859",
    "Density": 50773.06
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Thanh Xuân Nam",
    "Population": "10,775",
    "Density": 36837.61
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Thanh Xuân Trung",
    "Population": "17,607",
    "Density": 17804.81
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thanh Xuân",
    "Ward": "Thượng Đình",
    "Population": "16,894",
    "Density": 24269.15
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Chương Dương",
    "Population": "4,635",
    "Density": 1118.59
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Dũng Tiến",
    "Population": "7,500",
    "Density": 1220.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Duyên Thái",
    "Population": "9,970",
    "Density": 2545.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Hà Hồi",
    "Population": "8,826",
    "Density": 2225.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Hiền Giang",
    "Population": "4,496",
    "Density": 1434.63
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Hòa Bình",
    "Population": "7,111",
    "Density": 1810.89
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Hồng Vân",
    "Population": "4,809",
    "Density": 1089.98
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Khánh Hà",
    "Population": "10,055",
    "Density": 2383.83
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Lê Lợi",
    "Population": "7,179",
    "Density": 1383.64
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Liên Phương",
    "Population": "7,581",
    "Density": 2743.76
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Minh Cường",
    "Population": "8,284",
    "Density": 1757.95
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Nghiêm Xuyên",
    "Population": "5,298",
    "Density": 950.11
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Nguyễn Trãi",
    "Population": "8,528",
    "Density": 1417.6
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Nhị Khê",
    "Population": "6,587",
    "Density": 1999.88
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Ninh Sở",
    "Population": "8,860",
    "Density": 1740.12
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Quất Động",
    "Population": "7,107",
    "Density": 1463.4
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Tân Minh",
    "Population": "7,615",
    "Density": 1227.02
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Thắng Lợi",
    "Population": "8,354",
    "Density": 1406.92
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Thống Nhất",
    "Population": "6,701",
    "Density": 1382.9
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Thường Tín",
    "Population": "6,856",
    "Density": 7100.18
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Thư Phú",
    "Population": "5,324",
    "Density": 2076.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Tiền Phong",
    "Population": "8,117",
    "Density": 1663.49
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Tô Hiệu",
    "Population": "10,168",
    "Density": 1840.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Tự Nhiên",
    "Population": "8,612",
    "Density": 1421.08
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Văn Bình",
    "Population": "9,174",
    "Density": 1769.13
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Vạn Điểm",
    "Population": "6,651",
    "Density": 2073.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Văn Phú",
    "Population": "6,854",
    "Density": 2130.62
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Vân Tảo",
    "Population": "9,816",
    "Density": 1963.24
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Thường Tín",
    "Ward": "Văn Tự",
    "Population": "8,180",
    "Density": 1586.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Cao Thành",
    "Population": "3,855",
    "Density": 972.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Đại Cường",
    "Population": "4,006",
    "Density": 789.84
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Đại Hùng",
    "Population": "4,094",
    "Density": 834.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Đội Bình",
    "Population": "7,249",
    "Density": 917.1
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Đông Lỗ",
    "Population": "5,084",
    "Density": 666.25
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Đồng Tân",
    "Population": "4,245",
    "Density": 664.58
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Đồng Tiến",
    "Population": "6,384",
    "Density": 991.18
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Hòa Lâm",
    "Population": "5,852",
    "Density": 612.55
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Hòa Nam",
    "Population": "9,623",
    "Density": 2277.26
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Hòa Phú",
    "Population": "6,441",
    "Density": 1004.74
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Hoa Sơn",
    "Population": "6,462",
    "Density": 1009.48
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Hòa Xá",
    "Population": "3,876",
    "Density": 1774.97
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Hồng Quang",
    "Population": "5,980",
    "Density": 1134.57
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Kim Đường",
    "Population": "5,698",
    "Density": 659.68
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Liên Bạt",
    "Population": "6,512",
    "Density": 825.22
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Lưu Hoàng",
    "Population": "4,493",
    "Density": 1154.83
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Minh Đức",
    "Population": "4,990",
    "Density": 565.8
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Phù Lưu",
    "Population": "5,086",
    "Density": 1081.16
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Phương Tú",
    "Population": "10,942",
    "Density": 1023.29
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Quảng Phú Cầu",
    "Population": "10,750",
    "Density": 1257.93
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Sơn Công",
    "Population": "5,558",
    "Density": 843.05
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Tảo Dương Văn",
    "Population": "6,036",
    "Density": 709.52
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Trầm Lộng",
    "Population": "3,926",
    "Density": 544.36
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Trung Tú",
    "Population": "6,878",
    "Density": 701.69
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Trường Thịnh",
    "Population": "6,205",
    "Density": 1089.17
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Vân Đình",
    "Population": "12,823",
    "Density": 2263.03
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Vạn Thái",
    "Population": "8,836",
    "Density": 1458.09
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Viên An",
    "Population": "6,054",
    "Density": 1285.87
  },
  {
    "Province": "Hà Nội [Hanoi]",
    "District": "Ứng Hòa",
    "Ward": "Viên Nội",
    "Population": "4,070",
    "Density": 891.78
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "An Phú Tây",
    "Population": "10,094",
    "Density": 1736.6
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Bình Chánh",
    "Population": "20,466",
    "Density": 2519.64
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Bình Hưng",
    "Population": "61,349",
    "Density": 4465.64
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Bình Lợi",
    "Population": "8,611",
    "Density": 454.81
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Đa Phước",
    "Population": "15,974",
    "Density": 987.21
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Hưng Long",
    "Population": "17,345",
    "Density": 1316.51
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Lê Minh Xuân",
    "Population": "31,348",
    "Density": 891.66
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Phạm Văn Hai",
    "Population": "20,442",
    "Density": 745.62
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Phong Phú",
    "Population": "21,758",
    "Density": 1158.88
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Quy Đức",
    "Population": "9,437",
    "Density": 1455.86
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Tân Kiên",
    "Population": "41,683",
    "Density": 3648.08
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Tân Nhựt",
    "Population": "20,785",
    "Density": 881.69
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Tân Quý Tây",
    "Population": "16,551",
    "Density": 1963.21
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Tân Túc",
    "Population": "16,526",
    "Density": 1945.52
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Vĩnh Lộc A",
    "Population": "49,946",
    "Density": 2545.67
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Chánh",
    "Ward": "Vĩnh Lộc B",
    "Population": "57,794",
    "Density": 3330.68
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "An Lạc",
    "Population": "55,686",
    "Density": 11695.79
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "An Lạc A",
    "Population": "30,973",
    "Density": 24719.07
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Bình Hưng Hòa",
    "Population": "57,250",
    "Density": 12811.91
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Bình Hưng Hoà A",
    "Population": "98,483",
    "Density": 21219.3
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Bình Hưng Hoà B",
    "Population": "48,483",
    "Density": 6593.19
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Bình Trị Đông",
    "Population": "72,802",
    "Density": 24819.99
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Bình Trị Đông A",
    "Population": "50,102",
    "Density": 10708.76
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Bình Trị Đông B",
    "Population": "49,246",
    "Density": 11280.21
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Tân Tạo",
    "Population": "56,554",
    "Density": 11187.07
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Tân",
    "Ward": "Tân Tạo A",
    "Population": "52,553",
    "Density": 4219.09
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 1",
    "Population": "14,117",
    "Density": 55434.7
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 2",
    "Population": "17,571",
    "Density": 50429.07
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 3",
    "Population": "25,549",
    "Density": 54444.14
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 5",
    "Population": "15,693",
    "Density": 44336.77
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 6",
    "Population": "10,533",
    "Density": 36561.49
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 7",
    "Population": "15,135",
    "Density": 38730.23
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 11",
    "Population": "31,616",
    "Density": 41030.97
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 12",
    "Population": "39,367",
    "Density": 35513.76
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 13",
    "Population": "25,031",
    "Density": 9494.39
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 14",
    "Population": "12,528",
    "Density": 39529.23
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 15",
    "Population": "23,633",
    "Density": 47632.77
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 17",
    "Population": "25,149",
    "Density": 37988.85
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 19",
    "Population": "17,303",
    "Density": 44004.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 21",
    "Population": "22,245",
    "Density": 57668.38
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 22",
    "Population": "26,268",
    "Density": 14062.1
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 24",
    "Population": "24,237",
    "Density": 43561.17
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 25",
    "Population": "41,574",
    "Density": 22801.51
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 26",
    "Population": "33,166",
    "Density": 24871.39
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 27",
    "Population": "23,814",
    "Density": 27758.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Bình Thạnh",
    "Ward": "Phường 28",
    "Population": "12,833",
    "Density": 2313.71
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "An Thới Đông",
    "Population": "12,516",
    "Density": 120.69
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "Bình Khánh",
    "Population": "18,492",
    "Density": 425.12
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "Cần Thạnh",
    "Population": "11,017",
    "Density": 685.52
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "Long Hòa",
    "Population": "11,064",
    "Density": 90.94
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "Lý Nhơn",
    "Population": "5,696",
    "Density": 38.65
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "Tam Thôn Hiệp",
    "Population": "5,642",
    "Density": 50.9
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Cần Giờ",
    "Ward": "Thạnh An",
    "Population": "4,419",
    "Density": 59.25
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "An Nhơn Tây",
    "Population": "14,943",
    "Density": 507.47
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "An Phú",
    "Population": "10,272",
    "Density": 428.7
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Bình Mỹ",
    "Population": "18,841",
    "Density": 746.83
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Củ Chi",
    "Population": "19,573",
    "Density": 4975.34
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Hòa Phú",
    "Population": "10,778",
    "Density": 1184.19
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Nhuận Đức",
    "Population": "11,391",
    "Density": 520.35
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Phạm Văn Cội",
    "Population": "7,508",
    "Density": 321.35
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Phú Hòa Đông",
    "Population": "21,560",
    "Density": 989.63
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Phú Mỹ Hưng",
    "Population": "6,709",
    "Density": 274.72
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Phước Hiệp",
    "Population": "11,260",
    "Density": 578.41
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Phước Thạnh",
    "Population": "15,253",
    "Density": 1023.49
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Phước Vĩnh An",
    "Population": "14,189",
    "Density": 871.99
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Tân An Hội",
    "Population": "24,990",
    "Density": 842.58
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Tân Phú Trung",
    "Population": "31,169",
    "Density": 1013.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Tân Thạnh Đông",
    "Population": "32,929",
    "Density": 1239.8
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Tân Thạnh Tây",
    "Population": "10,842",
    "Density": 943.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Tân Thông Hội",
    "Population": "30,983",
    "Density": 1744.44
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Thái Mỹ",
    "Population": "11,537",
    "Density": 480.01
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Trung An",
    "Population": "16,245",
    "Density": 803.77
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Trung Lập Hạ",
    "Population": "11,069",
    "Density": 654.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Củ Chi",
    "Ward": "Trung Lập Thượng",
    "Population": "11,114",
    "Density": 497.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 1",
    "Population": "20,160",
    "Density": 36760.82
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 3",
    "Population": "42,221",
    "Density": 28610.83
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 4",
    "Population": "19,322",
    "Density": 51147.52
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 5",
    "Population": "43,624",
    "Density": 27457.2
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 6",
    "Population": "24,630",
    "Density": 14822.17
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 7",
    "Population": "23,888",
    "Density": 23449.49
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 8",
    "Population": "26,545",
    "Density": 19076.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 9",
    "Population": "26,785",
    "Density": 39652.7
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 10",
    "Population": "41,868",
    "Density": 24594.96
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 11",
    "Population": "39,493",
    "Density": 33020.9
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 12",
    "Population": "50,356",
    "Density": 34819.53
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 13",
    "Population": "19,134",
    "Density": 22098.01
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 14",
    "Population": "33,145",
    "Density": 15605.73
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 15",
    "Population": "23,018",
    "Density": 15951.49
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 16",
    "Population": "44,275",
    "Density": 33968.85
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Gò Vấp",
    "Ward": "Phường 17",
    "Population": "44,226",
    "Density": 38804.95
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Bà Điểm",
    "Population": "49,748",
    "Density": 7086.71
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Đông Thạnh",
    "Population": "39,679",
    "Density": 3133.95
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Hóc Môn",
    "Population": "17,190",
    "Density": 9824.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Nhị Bình",
    "Population": "11,112",
    "Density": 1278.36
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Tân Hiệp",
    "Population": "24,095",
    "Density": 2040.05
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Tân Thới Nhì",
    "Population": "25,031",
    "Density": 1452
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Tân Xuân",
    "Population": "18,678",
    "Density": 6480.69
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Thới Tam Thôn",
    "Population": "55,814",
    "Density": 6270.11
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Trung Chánh",
    "Population": "29,044",
    "Density": 16951.09
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Xuân Thới Đông",
    "Population": "23,326",
    "Density": 7974.97
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Xuân Thới Sơn",
    "Population": "18,558",
    "Density": 1232.52
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Hóc Môn",
    "Ward": "Xuân Thới Thượng",
    "Population": "36,790",
    "Density": 1970.33
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Hiệp Phước",
    "Population": "13,217",
    "Density": 346.92
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Long Thới",
    "Population": "6,342",
    "Density": 581.35
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Nhà Bè",
    "Population": "23,463",
    "Density": 3926.86
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Nhơn Đức",
    "Population": "11,313",
    "Density": 781.01
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Phước Kiển",
    "Population": "20,354",
    "Density": 1357.39
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Phước Lộc",
    "Population": "6,633",
    "Density": 1080.4
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Nhà Bè",
    "Ward": "Phú Xuân",
    "Population": "19,752",
    "Density": 2046.58
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 1",
    "Population": "11,604",
    "Density": 58990.39
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 2",
    "Population": "13,150",
    "Density": 34540.73
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 3",
    "Population": "8,318",
    "Density": 47428.44
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 4",
    "Population": "12,481",
    "Density": 45423.45
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 5",
    "Population": "16,498",
    "Density": 52093.46
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 7",
    "Population": "21,621",
    "Density": 50898.09
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 8",
    "Population": "8,333",
    "Density": 26220.89
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 9",
    "Population": "19,053",
    "Density": 14234.59
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 10",
    "Population": "9,603",
    "Density": 30301.02
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 11",
    "Population": "9,640",
    "Density": 40812.87
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 12",
    "Population": "6,244",
    "Density": 36228.6
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 13",
    "Population": "9,646",
    "Density": 48665.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 14",
    "Population": "7,712",
    "Density": 73876.81
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 15",
    "Population": "11,743",
    "Density": 50433.77
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Phú Nhuận",
    "Ward": "Phường 17",
    "Population": "8,889",
    "Density": 62917.61
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Bến Nghé",
    "Population": "13,580",
    "Density": 5487.09
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Bến Thành",
    "Population": "14,204",
    "Density": 14601.3
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Cầu Kho",
    "Population": "16,301",
    "Density": 47293.14
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Cầu Ông Lãnh",
    "Population": "12,917",
    "Density": 54884.21
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Cô Giang",
    "Population": "18,967",
    "Density": 54126.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Đa Kao",
    "Population": "19,122",
    "Density": 18493.23
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Nguyễn Cư Trinh",
    "Population": "25,667",
    "Density": 33374.08
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Nguyễn Thái Bình",
    "Population": "13,197",
    "Density": 26507.98
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Phạm Ngũ Lão",
    "Population": "19,699",
    "Density": 43215.67
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 1",
    "Ward": "Tân Định",
    "Population": "26,571",
    "Density": 39167.16
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "An Khánh",
    "Population": "15,659",
    "Density": 9142.34
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "An Lợi Đông",
    "Population": "5,710",
    "Density": 1624.98
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "An Phú",
    "Population": "17,928",
    "Density": 1736.03
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Bình An",
    "Population": "19,105",
    "Density": 10494.37
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Bình Khánh",
    "Population": "8,767",
    "Density": 4591.98
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Bình Trưng Đông",
    "Population": "15,367",
    "Density": 4648.22
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Bình Trưng Tây",
    "Population": "18,082",
    "Density": 8836
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Cát Lái",
    "Population": "12,881",
    "Density": 1928
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Thạnh Mỹ Lợi",
    "Population": "12,468",
    "Density": 947.34
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Thảo Điền",
    "Population": "16,256",
    "Density": 4316.29
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 2",
    "Ward": "Thủ Thiêm",
    "Population": "5,267",
    "Density": 3219.83
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 1",
    "Population": "14,795",
    "Density": 93009.37
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 2",
    "Population": "9,878",
    "Density": 62649.84
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 3",
    "Population": "10,916",
    "Density": 73197.88
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 4",
    "Population": "18,960",
    "Density": 57015.7
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 5",
    "Population": "14,120",
    "Density": 56210.19
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 6",
    "Population": "7,253",
    "Density": 8754.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 7",
    "Population": "12,899",
    "Density": 14103.59
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 8",
    "Population": "15,458",
    "Density": 43234.32
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 9",
    "Population": "18,645",
    "Density": 39425.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 10",
    "Population": "9,296",
    "Density": 54302.24
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 11",
    "Population": "23,294",
    "Density": 56581.41
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 12",
    "Population": "11,600",
    "Density": 67398.76
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 13",
    "Population": "6,637",
    "Density": 42684.42
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 3",
    "Ward": "Phường 14",
    "Population": "16,802",
    "Density": 57378
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 1",
    "Population": "9,408",
    "Density": 25155.08
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 2",
    "Population": "11,988",
    "Density": 65987.78
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 3",
    "Population": "13,131",
    "Density": 47650.32
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 4",
    "Population": "17,239",
    "Density": 55239.04
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 5",
    "Population": "5,671",
    "Density": 26288.71
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 6",
    "Population": "10,550",
    "Density": 68778.93
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 8",
    "Population": "16,221",
    "Density": 104020.78
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 9",
    "Population": "9,828",
    "Density": 76733.29
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 10",
    "Population": "10,395",
    "Density": 94294.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 12",
    "Population": "8,319",
    "Density": 19965.44
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 13",
    "Population": "9,875",
    "Density": 24345.45
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 14",
    "Population": "15,667",
    "Density": 89571.78
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 15",
    "Population": "12,779",
    "Density": 58263.8
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 16",
    "Population": "19,529",
    "Density": 63208.83
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 4",
    "Ward": "Phường 18",
    "Population": "10,380",
    "Density": 14681.34
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 1",
    "Population": "17,696",
    "Density": 41242.69
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 2",
    "Population": "16,582",
    "Density": 58449.07
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 3",
    "Population": "6,798",
    "Density": 36933.61
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 4",
    "Population": "11,693",
    "Density": 31821.15
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 5",
    "Population": "12,814",
    "Density": 56641.47
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 6",
    "Population": "9,342",
    "Density": 39651.95
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 7",
    "Population": "12,872",
    "Density": 52389.09
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 8",
    "Population": "9,067",
    "Density": 37062.62
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 9",
    "Population": "14,461",
    "Density": 37121.37
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 10",
    "Population": "8,189",
    "Density": 35802.04
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 11",
    "Population": "13,835",
    "Density": 44773.46
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 12",
    "Population": "5,974",
    "Density": 15288.94
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 13",
    "Population": "8,742",
    "Density": 32246.4
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 14",
    "Population": "12,757",
    "Density": 47049.49
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 5",
    "Ward": "Phường 15",
    "Population": "10,630",
    "Density": 54326.16
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 1",
    "Population": "11,720",
    "Density": 38352.04
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 2",
    "Population": "8,803",
    "Density": 36866.57
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 3",
    "Population": "9,930",
    "Density": 41778.86
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 4",
    "Population": "12,944",
    "Density": 59950.91
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 5",
    "Population": "15,111",
    "Density": 69056.76
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 6",
    "Population": "16,294",
    "Density": 51782.88
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 7",
    "Population": "14,366",
    "Density": 30530.88
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 8",
    "Population": "24,641",
    "Density": 61227.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 9",
    "Population": "12,439",
    "Density": 43850.25
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 10",
    "Population": "22,727",
    "Density": 14826.15
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 11",
    "Population": "24,191",
    "Density": 26768.84
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 12",
    "Population": "26,994",
    "Density": 35906.78
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 13",
    "Population": "26,835",
    "Density": 32819.67
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 6",
    "Ward": "Phường 14",
    "Population": "22,334",
    "Density": 48043.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Bình Thuận",
    "Population": "30,949",
    "Density": 18949.91
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Phú Mỹ",
    "Population": "14,699",
    "Density": 3754.73
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Phú Thuận",
    "Population": "26,042",
    "Density": 3127.72
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Hưng",
    "Population": "31,572",
    "Density": 14075.16
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Kiểng",
    "Population": "26,535",
    "Density": 25568.51
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Phong",
    "Population": "12,221",
    "Density": 2764.68
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Phú",
    "Population": "19,997",
    "Density": 4656.64
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Quy",
    "Population": "21,718",
    "Density": 25218.01
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Thuận Đông",
    "Population": "34,577",
    "Density": 4613.1
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 7",
    "Ward": "Tân Thuận Tây",
    "Population": "25,966",
    "Density": 24231.06
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 1",
    "Population": "25,277",
    "Density": 51972.86
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 2",
    "Population": "23,097",
    "Density": 42660.83
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 3",
    "Population": "25,677",
    "Density": 49703.83
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 4",
    "Population": "42,634",
    "Density": 29197.37
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 5",
    "Population": "38,118",
    "Density": 24830.96
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 6",
    "Population": "32,610",
    "Density": 22974.5
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 7",
    "Population": "30,812",
    "Density": 5390.95
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 8",
    "Population": "11,219",
    "Density": 33737.29
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 9",
    "Population": "21,852",
    "Density": 48406.18
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 10",
    "Population": "22,013",
    "Density": 88239.07
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 11",
    "Population": "11,686",
    "Density": 38418.04
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 12",
    "Population": "18,447",
    "Density": 58985.1
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 13",
    "Population": "9,304",
    "Density": 41400.79
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 14",
    "Population": "21,116",
    "Density": 38260.55
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 15",
    "Population": "38,328",
    "Density": 24392.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 8",
    "Ward": "Phường 16",
    "Population": "36,582",
    "Density": 10452.3
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Hiệp Phú",
    "Population": "25,296",
    "Density": 11297.4
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Long Bình",
    "Population": "21,225",
    "Density": 1225.46
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Long Phước",
    "Population": "8,154",
    "Density": 335.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Long Thạnh Mỹ",
    "Population": "19,216",
    "Density": 1492.62
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Long Trường",
    "Population": "10,955",
    "Density": 857.4
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Phú Hữu",
    "Population": "7,265",
    "Density": 611.12
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Phước Bình",
    "Population": "16,866",
    "Density": 17595.88
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Phước Long A",
    "Population": "19,199",
    "Density": 7982.29
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Phước Long B",
    "Population": "40,404",
    "Density": 6864.89
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Tăng Nhơn Phú A",
    "Population": "32,158",
    "Density": 7660.13
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Tăng Nhơn Phú B",
    "Population": "21,573",
    "Density": 4280.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Tân Phú",
    "Population": "21,576",
    "Density": 4750.12
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 9",
    "Ward": "Trường Thạnh",
    "Population": "12,370",
    "Density": 1271.53
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 1",
    "Population": "14,348",
    "Density": 69240.42
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 2",
    "Population": "16,431",
    "Density": 85338.11
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 3",
    "Population": "7,759",
    "Density": 75994.12
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 4",
    "Population": "11,372",
    "Density": 70774.21
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 5",
    "Population": "10,793",
    "Density": 66937.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 6",
    "Population": "8,198",
    "Density": 36253.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 7",
    "Population": "8,460",
    "Density": 77444.16
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 8",
    "Population": "10,695",
    "Density": 72346.61
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 9",
    "Population": "17,206",
    "Density": 86688.84
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 10",
    "Population": "10,618",
    "Density": 55869.51
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 11",
    "Population": "11,066",
    "Density": 51780.45
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 12",
    "Population": "25,352",
    "Density": 19772.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 13",
    "Population": "23,147",
    "Density": 49461.52
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 14",
    "Population": "26,969",
    "Density": 21571.75
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 10",
    "Ward": "Phường 15",
    "Population": "27,931",
    "Density": 36352.4
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 1",
    "Population": "13,795",
    "Density": 50817.8
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 2",
    "Population": "11,414",
    "Density": 55961.95
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 3",
    "Population": "23,122",
    "Density": 28773.74
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 4",
    "Population": "10,013",
    "Density": 56930.86
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 5",
    "Population": "31,466",
    "Density": 48163.23
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 6",
    "Population": "11,230",
    "Density": 69794.9
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 7",
    "Population": "12,792",
    "Density": 82300.71
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 8",
    "Population": "13,978",
    "Density": 40472.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 9",
    "Population": "9,668",
    "Density": 60045.96
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 10",
    "Population": "9,812",
    "Density": 38845.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 11",
    "Population": "14,352",
    "Density": 62065.39
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 12",
    "Population": "10,760",
    "Density": 81620.27
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 13",
    "Population": "12,809",
    "Density": 74683.69
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 14",
    "Population": "18,198",
    "Density": 56906.09
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 15",
    "Population": "8,836",
    "Density": 10970.4
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 11",
    "Ward": "Phường 16",
    "Population": "14,609",
    "Density": 50114.92
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "An Phú Đông",
    "Population": "25,823",
    "Density": 2915.91
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Đông Hưng Thuận",
    "Population": "36,404",
    "Density": 12356.67
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Hiệp Thành",
    "Population": "63,859",
    "Density": 11725.42
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Tân Chánh Hiệp",
    "Population": "45,519",
    "Density": 10726.51
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Tân Hưng Thuận",
    "Population": "28,892",
    "Density": 20310.72
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Tân Thới Hiệp",
    "Population": "38,171",
    "Density": 14441.21
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Tân Thới Nhất",
    "Population": "44,808",
    "Density": 11395.44
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Thạnh Lộc",
    "Population": "30,766",
    "Density": 5304.85
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Thạnh Xuân",
    "Population": "26,675",
    "Density": 2803.17
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Thới An",
    "Population": "27,172",
    "Density": 5262.53
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Quận 12",
    "Ward": "Trung Mỹ Tây",
    "Population": "37,271",
    "Density": 13690.49
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 1",
    "Population": "12,152",
    "Density": 33484.89
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 2",
    "Population": "29,624",
    "Density": 14567.99
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 3",
    "Population": "14,202",
    "Density": 56370.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 4",
    "Population": "29,254",
    "Density": 12120.48
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 5",
    "Population": "17,673",
    "Density": 58299.8
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 6",
    "Population": "25,839",
    "Density": 45380.94
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 7",
    "Population": "15,673",
    "Density": 32274.87
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 8",
    "Population": "20,830",
    "Density": 53196.11
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 9",
    "Population": "25,171",
    "Density": 48133.63
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 10",
    "Population": "47,208",
    "Density": 55299.41
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 11",
    "Population": "25,803",
    "Density": 41969.06
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 12",
    "Population": "30,434",
    "Density": 20370.82
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 13",
    "Population": "49,772",
    "Density": 37872.47
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 14",
    "Population": "26,633",
    "Density": 36780.32
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Bình",
    "Ward": "Phường 15",
    "Population": "51,456",
    "Density": 5068.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Hiệp Tân",
    "Population": "25,427",
    "Density": 22658.17
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Hòa Thạnh",
    "Population": "25,781",
    "Density": 27561.47
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Phú Thạnh",
    "Population": "38,798",
    "Density": 34234.54
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Phú Thọ Hòa",
    "Population": "43,710",
    "Density": 35395.58
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Phú Trung",
    "Population": "40,014",
    "Density": 45177.32
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Sơn Kỳ",
    "Population": "30,578",
    "Density": 14414.07
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Tân Quý",
    "Population": "56,373",
    "Density": 32937.77
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Tân Sơn Nhì",
    "Population": "34,994",
    "Density": 32288.25
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Tân Thành",
    "Population": "29,534",
    "Density": 30088.53
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Tân Thới Hòa",
    "Population": "25,592",
    "Density": 22758.56
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Tân Phú",
    "Ward": "Tây Thạnh",
    "Population": "47,301",
    "Density": 13402.75
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Bình Chiểu",
    "Population": "61,924",
    "Density": 11149.64
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Bình Thọ",
    "Population": "15,741",
    "Density": 13238.86
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Hiệp Bình Chánh",
    "Population": "66,551",
    "Density": 9471.16
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Hiệp Bình Phước",
    "Population": "38,331",
    "Density": 4932.7
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Linh Chiểu",
    "Population": "28,882",
    "Density": 20469.17
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Linh Đông",
    "Population": "28,872",
    "Density": 9762.96
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Linh Tây",
    "Population": "19,132",
    "Density": 14362.29
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Linh Trung",
    "Population": "52,302",
    "Density": 7307.61
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Linh Xuân",
    "Population": "51,629",
    "Density": 13047.84
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Tam Bình",
    "Population": "25,202",
    "Density": 11589.26
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Tam Phú",
    "Population": "21,765",
    "Density": 8275.67
  },
  {
    "Province": "Thành Phố Hồ Chí Minh [Ho Chi Minh City]",
    "District": "Thủ Đức",
    "Ward": "Trường Thọ",
    "Population": "31,846",
    "Density": 6351.92
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "An Phú",
    "Population": "11,559",
    "Density": 1402.4
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Đa Phước",
    "Population": "19,635",
    "Density": 1245.56
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Khánh An",
    "Population": "11,910",
    "Density": 1894.45
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Khánh Bình",
    "Population": "7,254",
    "Density": 906.32
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Long Bình",
    "Population": "9,590",
    "Density": 2358.53
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Nhơn Hội",
    "Population": "13,393",
    "Density": 1047.8
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Phú Hội",
    "Population": "13,354",
    "Density": 573.75
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Phú Hữu",
    "Population": "17,886",
    "Density": 494.48
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Phước Hưng",
    "Population": "10,945",
    "Density": 714.89
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Quốc Thái",
    "Population": "14,333",
    "Density": 1350.51
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Vĩnh Hậu",
    "Population": "9,439",
    "Density": 468.41
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Vĩnh Hội Đông",
    "Population": "13,502",
    "Density": 1758.51
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Vĩnh Lộc",
    "Population": "10,665",
    "Density": 292.74
  },
  {
    "Province": "An Giang",
    "District": "An Phú",
    "Ward": "Vĩnh Trường",
    "Population": "14,245",
    "Density": 1138.33
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Châu Phú A",
    "Population": "26,729",
    "Density": 5078.18
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Châu Phú B",
    "Population": "28,603",
    "Density": 2457.3
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Núi Sam",
    "Population": "21,822",
    "Density": 1550.74
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Vĩnh Châu",
    "Population": "4,423",
    "Density": 193.01
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Vĩnh Mỹ",
    "Population": "15,513",
    "Density": 1935.69
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Vĩnh Ngươn",
    "Population": "7,396",
    "Density": 767.32
  },
  {
    "Province": "An Giang",
    "District": "Châu Đốc",
    "Ward": "Vĩnh Tế",
    "Population": "7,134",
    "Density": 212.14
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Bình Chánh",
    "Population": "9,701",
    "Density": 301.71
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Bình Long",
    "Population": "17,935",
    "Density": 703.53
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Bình Mỹ",
    "Population": "24,621",
    "Density": 690.81
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Bình Phú",
    "Population": "9,358",
    "Density": 195.45
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Bình Thủy",
    "Population": "17,580",
    "Density": 1125.62
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Cái Dầu",
    "Population": "18,244",
    "Density": 2848
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Đào Hữu Cảnh",
    "Population": "14,535",
    "Density": 270.72
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Khánh Hòa",
    "Population": "25,320",
    "Density": 1148.72
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Mỹ Đức",
    "Population": "21,283",
    "Density": 538.35
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Mỹ Phú",
    "Population": "21,718",
    "Density": 592.89
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Ô Long Vỹ",
    "Population": "12,420",
    "Density": 171.13
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Thạnh Mỹ Tây",
    "Population": "22,997",
    "Density": 643.42
  },
  {
    "Province": "An Giang",
    "District": "Châu Phú",
    "Ward": "Vĩnh Thạnh Trung",
    "Population": "29,390",
    "Density": 1030.47
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "An Châu",
    "Population": "24,214",
    "Density": 1956.21
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "An Hòa",
    "Population": "16,373",
    "Density": 965.79
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Bình Hòa",
    "Population": "20,887",
    "Density": 920.94
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Bình Thạnh",
    "Population": "6,676",
    "Density": 700.77
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Cần Đăng",
    "Population": "20,994",
    "Density": 558.57
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Hòa Bình Thạnh",
    "Population": "13,064",
    "Density": 399.71
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Tân Phú",
    "Population": "4,090",
    "Density": 164.26
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh An",
    "Population": "10,129",
    "Density": 334.28
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Bình",
    "Population": "10,256",
    "Density": 252.77
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Hanh",
    "Population": "14,392",
    "Density": 390.14
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Lợi",
    "Population": "6,046",
    "Density": 227.78
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Nhuận",
    "Population": "7,880",
    "Density": 206.05
  },
  {
    "Province": "An Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Thành",
    "Population": "14,722",
    "Density": 569.16
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "An Thạnh Trung",
    "Population": "18,478",
    "Density": 574.1
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Bình Phước Xuân",
    "Population": "13,701",
    "Density": 718.46
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Chợ Mới",
    "Population": "12,530",
    "Density": 4061.72
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Hòa An",
    "Population": "21,147",
    "Density": 1115.88
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Hòa Bình",
    "Population": "19,682",
    "Density": 875.85
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Hội An",
    "Population": "20,217",
    "Density": 878.16
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Kiến An",
    "Population": "28,333",
    "Density": 1124.15
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Kiến Thành",
    "Population": "20,882",
    "Density": 919.95
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Long Điền A",
    "Population": "16,649",
    "Density": 916.59
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Long Điền B",
    "Population": "20,640",
    "Density": 1153.39
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Long Giang",
    "Population": "19,604",
    "Density": 1031.95
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Long Kiến",
    "Population": "14,152",
    "Density": 862.87
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Mỹ An",
    "Population": "11,782",
    "Density": 935.52
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Mỹ Hiệp",
    "Population": "20,047",
    "Density": 871.12
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Mỹ Hội Đông",
    "Population": "26,619",
    "Density": 933.67
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Mỹ Luông",
    "Population": "14,037",
    "Density": 1486.2
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Nhơn Mỹ",
    "Population": "27,103",
    "Density": 876.41
  },
  {
    "Province": "An Giang",
    "District": "Chợ Mới",
    "Ward": "Tấn Mỹ",
    "Population": "19,597",
    "Density": 712.2
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Bình Đức",
    "Population": "20,482",
    "Density": 1781.04
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Bình Khánh",
    "Population": "28,240",
    "Density": 4366.58
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Đông Xuyên",
    "Population": "14,353",
    "Density": 12582.62
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Bình",
    "Population": "19,116",
    "Density": 12182.78
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Hòa",
    "Population": "30,429",
    "Density": 1852.15
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Hoà Hưng",
    "Population": "21,849",
    "Density": 1074.19
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Khánh",
    "Population": "11,110",
    "Density": 1179.62
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Long",
    "Population": "20,628",
    "Density": 16472.09
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Phước",
    "Population": "31,051",
    "Density": 7555.72
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Quý",
    "Population": "13,669",
    "Density": 2851.27
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Thạnh",
    "Population": "26,893",
    "Density": 1724.02
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Thới",
    "Population": "25,204",
    "Density": 1194.33
  },
  {
    "Province": "An Giang",
    "District": "Long Xuyên",
    "Ward": "Mỹ Xuyên",
    "Population": "15,634",
    "Density": 22308.15
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Bình Thạnh Đông",
    "Population": "14,788",
    "Density": 961.82
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Chợ Vàm",
    "Population": "16,325",
    "Density": 957.87
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Hiệp Xương",
    "Population": "9,027",
    "Density": 391.9
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Hoà Lạc",
    "Population": "16,364",
    "Density": 601.73
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Long Hoà",
    "Population": "9,299",
    "Density": 1099.24
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú An",
    "Population": "11,331",
    "Density": 522.53
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Bình",
    "Population": "13,897",
    "Density": 609.89
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Hiệp",
    "Population": "13,722",
    "Density": 740.73
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Hưng",
    "Population": "14,132",
    "Density": 901.79
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Lâm",
    "Population": "11,152",
    "Density": 749.66
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Long",
    "Population": "4,855",
    "Density": 278.96
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Mỹ",
    "Population": "20,998",
    "Density": 2668.31
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Thạnh",
    "Population": "14,026",
    "Density": 513.17
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Thành",
    "Population": "8,070",
    "Density": 368.78
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Thọ",
    "Population": "12,335",
    "Density": 708.22
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Xuân",
    "Population": "5,268",
    "Density": 286.71
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Tân Hòa",
    "Population": "8,081",
    "Density": 803.12
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Tân Trung",
    "Population": "11,001",
    "Density": 1327.39
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Tân Châu",
    "Population": "165,584",
    "Density": 902.56
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Châu Phong",
    "Population": "16,543",
    "Density": 931.79
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Lê Chánh",
    "Population": "8,911",
    "Density": 531.4
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Long An",
    "Population": "13,682",
    "Density": 861.75
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Long Phú",
    "Population": "14,110",
    "Density": 1363.55
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Long Sơn",
    "Population": "12,399",
    "Density": 912.03
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Long Thạnh",
    "Population": "34,198",
    "Density": 6030.86
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Lộc",
    "Population": "6,605",
    "Density": 283.82
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Phú Vĩnh",
    "Population": "12,128",
    "Density": 684.12
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Tân An",
    "Population": "13,464",
    "Density": 936.5
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Tân Thạnh",
    "Population": "7,550",
    "Density": 589.2
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Vĩnh Hòa",
    "Population": "10,944",
    "Density": 517.06
  },
  {
    "Province": "An Giang",
    "District": "Phú Tân",
    "Ward": "Vĩnh Xương",
    "Population": "15,050",
    "Density": 1068.44
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "An Bình",
    "Population": "7,407",
    "Density": 168.35
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Bình Thành",
    "Population": "8,892",
    "Density": 322.64
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Định Mỹ",
    "Population": "10,169",
    "Density": 276.26
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Định Thành",
    "Population": "12,663",
    "Density": 354.76
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Mỹ Phú Đông",
    "Population": "4,004",
    "Density": 128.92
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Núi Sập",
    "Population": "17,772",
    "Density": 1865.89
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Óc Eo",
    "Population": "13,184",
    "Density": 1116.15
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Phú Hoà",
    "Population": "12,098",
    "Density": 1707.33
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Phú Thuận",
    "Population": "10,493",
    "Density": 335.34
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Tây Phú",
    "Population": "7,212",
    "Density": 140.06
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Thoại Giang",
    "Population": "10,909",
    "Density": 379.4
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Vĩnh Chánh",
    "Population": "9,739",
    "Density": 253.55
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Vĩnh Khánh",
    "Population": "10,631",
    "Density": 325.61
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Vĩnh Phú",
    "Population": "11,662",
    "Density": 317.68
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Vĩnh Trạch",
    "Population": "16,243",
    "Density": 785.18
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Vọng Đông",
    "Population": "12,257",
    "Density": 834.09
  },
  {
    "Province": "An Giang",
    "District": "Thoại Sơn",
    "Ward": "Vọng Thê",
    "Population": "5,216",
    "Density": 492.54
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "An Cư",
    "Population": "10,141",
    "Density": 241.21
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "An Hảo",
    "Population": "12,680",
    "Density": 238.18
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "An Nông",
    "Population": "4,349",
    "Density": 134.53
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "An Phú",
    "Population": "7,985",
    "Density": 368.77
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Chi Lăng",
    "Population": "7,213",
    "Density": 1103.18
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Nhà Bàng",
    "Population": "12,343",
    "Density": 2055.25
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Nhơn Hưng",
    "Population": "4,978",
    "Density": 253.08
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Núi Voi",
    "Population": "5,170",
    "Density": 366.35
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Tân Lập",
    "Population": "5,958",
    "Density": 200.15
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Tân Lợi",
    "Population": "9,510",
    "Density": 303.56
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Thới Sơn",
    "Population": "7,847",
    "Density": 321.4
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Tịnh Biên",
    "Population": "14,635",
    "Density": 663.3
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Văn Giáo",
    "Population": "7,974",
    "Density": 296.22
  },
  {
    "Province": "An Giang",
    "District": "Tịnh Biên",
    "Ward": "Vĩnh Trung",
    "Population": "9,998",
    "Density": 401.85
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "An Tức",
    "Population": "6,225",
    "Density": 223.89
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Ba Chúc",
    "Population": "16,110",
    "Density": 856.5
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Châu Lăng",
    "Population": "15,676",
    "Density": 482.87
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Cô Tô",
    "Population": "11,232",
    "Density": 266.04
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Lạc Quới",
    "Population": "3,854",
    "Density": 153.51
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Lê Trì",
    "Population": "5,823",
    "Density": 217.41
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Lương An Trà",
    "Population": "8,011",
    "Density": 90.68
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Lương Phi",
    "Population": "10,256",
    "Density": 249.03
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Núi Tô",
    "Population": "7,609",
    "Density": 232.55
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Ô Lâm",
    "Population": "11,329",
    "Density": 371.31
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Tà Đảnh",
    "Population": "7,369",
    "Density": 145.96
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Tân Tuyến",
    "Population": "6,603",
    "Density": 78.81
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Tri Tôn",
    "Population": "14,857",
    "Density": 1824.74
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Vĩnh Gia",
    "Population": "6,383",
    "Density": 166.71
  },
  {
    "Province": "An Giang",
    "District": "Tri Tôn",
    "Ward": "Vĩnh Phước",
    "Population": "1,772",
    "Density": 32.45
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Hoà Long",
    "Population": "12,862",
    "Density": 856.9
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Kim Dinh",
    "Population": "9,211",
    "Density": 492.28
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Long Hương",
    "Population": "9,155",
    "Density": 623
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Long Phước",
    "Population": "8,897",
    "Density": 551.41
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Long Tâm",
    "Population": "5,146",
    "Density": 1362.6
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Long Toàn",
    "Population": "11,113",
    "Density": 3817.85
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Phước Hiệp",
    "Population": "7,325",
    "Density": 7531.75
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Phước Hưng",
    "Population": "5,758",
    "Density": 1931.7
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Phước Nguyên",
    "Population": "12,035",
    "Density": 5358.89
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Phước Trung",
    "Population": "6,598",
    "Density": 1039.04
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Bà Rịa",
    "Ward": "Tân Hưng",
    "Population": "6,625",
    "Density": 919.26
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Bàu Chinh",
    "Population": "6,963",
    "Density": 332.3
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Bình Ba",
    "Population": "8,352",
    "Density": 267.95
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Bình Giã",
    "Population": "8,974",
    "Density": 504.55
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Bình Trung",
    "Population": "7,206",
    "Density": 398.36
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Cù Bị",
    "Population": "9,976",
    "Density": 213.73
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Đá Bạc",
    "Population": "7,288",
    "Density": 166.27
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Kim Long",
    "Population": "11,083",
    "Density": 508.14
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Láng Lớn",
    "Population": "5,827",
    "Density": 271.07
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Ngãi Giao",
    "Population": "13,881",
    "Density": 1014.84
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Nghĩa Thành",
    "Population": "11,780",
    "Density": 533.61
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Quảng Thành",
    "Population": "8,935",
    "Density": 288.67
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Sơn Bình",
    "Population": "8,425",
    "Density": 360.44
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Suối Nghệ",
    "Population": "11,820",
    "Density": 483.95
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Suối Rao",
    "Population": "3,082",
    "Density": 91.04
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Xà Bang",
    "Population": "11,378",
    "Density": 300.11
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Châu Đức",
    "Ward": "Xuân Sơn",
    "Population": "8,336",
    "Density": 505.24
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Đất Đỏ",
    "Population": "19,500",
    "Density": 861.5
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Láng Dài",
    "Population": "5,522",
    "Density": 170.76
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Lộc An",
    "Population": "4,066",
    "Density": 230.77
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Long Mỹ",
    "Population": "3,404",
    "Density": 263.41
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Long Tân",
    "Population": "5,397",
    "Density": 185.89
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Phước Hải",
    "Population": "22,857",
    "Density": 1627.06
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Phước Hội",
    "Population": "5,701",
    "Density": 251.13
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Đất Đỏ",
    "Ward": "Phước Long Thọ",
    "Population": "3,055",
    "Density": 84.69
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "An Ngãi",
    "Population": "6,923",
    "Density": 392.88
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "An Nhứt",
    "Population": "3,928",
    "Density": 656.72
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Long Điền",
    "Population": "18,093",
    "Density": 1283.46
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Long Hải",
    "Population": "39,682",
    "Density": 3111.58
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Phước Hưng",
    "Population": "22,808",
    "Density": 2384.55
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Phước Tỉnh",
    "Population": "27,819",
    "Density": 4992.91
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Tam Phước",
    "Population": "5,926",
    "Density": 435.8
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Phú Mỹ (Tân Thành)",
    "Population": "128,205",
    "Density": 385.88
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Châu Pha",
    "Population": "11,401",
    "Density": 350.82
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Hắc Dịch",
    "Population": "12,416",
    "Density": 386.91
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Mỹ Xuân",
    "Population": "25,580",
    "Density": 657.26
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Phú Mỹ",
    "Population": "20,901",
    "Density": 652.5
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Phước Hoà",
    "Population": "10,068",
    "Density": 194.7
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Sông Xoài",
    "Population": "6,650",
    "Density": 227.88
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Tân Hải",
    "Population": "13,412",
    "Density": 583.69
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Tân Hoà",
    "Population": "11,321",
    "Density": 389
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Tân Phước",
    "Population": "10,809",
    "Density": 361.67
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Long Điền",
    "Ward": "Tóc Tiên",
    "Population": "5,647",
    "Density": 166.86
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Long Sơn",
    "Population": "13,822",
    "Density": 262.17
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Nguyễn An Ninh",
    "Population": "13,391",
    "Density": 2905.59
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 1",
    "Population": "7,369",
    "Density": 4644.52
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 2",
    "Population": "12,603",
    "Density": 5174.71
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 3",
    "Population": "17,384",
    "Density": 18763.9
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 4",
    "Population": "18,812",
    "Density": 23237.03
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 5",
    "Population": "16,696",
    "Density": 4601.35
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 7",
    "Population": "28,213",
    "Density": 17565.06
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 8",
    "Population": "18,563",
    "Density": 9548.87
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 9",
    "Population": "9,945",
    "Density": 3042.87
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 10",
    "Population": "15,174",
    "Density": 4358.59
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 11",
    "Population": "21,652",
    "Density": 2104.79
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Phường 12",
    "Population": "21,708",
    "Density": 592.05
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Rạch Dừa",
    "Population": "18,080",
    "Density": 4891.38
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Thắng Nhất",
    "Population": "26,567",
    "Density": 6246.21
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Thắng Nhì",
    "Population": "19,347",
    "Density": 6972.9
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Vũng Tàu",
    "Ward": "Thắng Tam",
    "Population": "16,911",
    "Density": 7672.17
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Bàu Lâm",
    "Population": "9,904",
    "Density": 284.65
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Bình Châu",
    "Population": "19,563",
    "Density": 229.27
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Bông Trang",
    "Population": "3,748",
    "Density": 107.09
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Bưng Riềng",
    "Population": "4,929",
    "Density": 99.24
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Hòa Bình",
    "Population": "11,232",
    "Density": 299.83
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Hòa Hiệp",
    "Population": "18,672",
    "Density": 184.25
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Hòa Hội",
    "Population": "10,515",
    "Density": 149.49
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Hòa Hưng",
    "Population": "4,341",
    "Density": 157.89
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Phước Bửu",
    "Population": "13,215",
    "Density": 1444.99
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Phước Tân",
    "Population": "12,765",
    "Density": 392.2
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Phước Thuận",
    "Population": "8,014",
    "Density": 153.83
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Tân Lâm",
    "Population": "7,030",
    "Density": 79.75
  },
  {
    "Province": "Bà Rịa - Vũng Tàu",
    "District": "Xuyên Mộc",
    "Ward": "Xuyên Mộc",
    "Population": "10,473",
    "Density": 582.51
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Đa Mai",
    "Population": "6,337",
    "Density": 1697.29
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Dĩnh Kế",
    "Population": "11,159",
    "Density": 2527.29
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Dĩnh Trì",
    "Population": "10,372",
    "Density": 1476.17
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Đồng Sơn",
    "Population": "8,751",
    "Density": 1036.98
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Hoàng Văn Thụ",
    "Population": "10,896",
    "Density": 7144.92
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Lê Lợi",
    "Population": "9,916",
    "Density": 9634.67
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Mỹ Độ",
    "Population": "4,855",
    "Density": 3117.78
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Ngô Quyền",
    "Population": "8,109",
    "Density": 8595.51
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Song Khê",
    "Population": "4,617",
    "Density": 1030.97
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Song Mai",
    "Population": "10,249",
    "Density": 1051.09
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Tân Mỹ",
    "Population": "10,422",
    "Density": 1422.99
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Tân Tiến",
    "Population": "9,178",
    "Density": 1141.9
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Thọ Xương",
    "Population": "13,191",
    "Density": 3280.77
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Trần Nguyên Hãn",
    "Population": "11,416",
    "Density": 13032.11
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Trần Phú",
    "Population": "8,295",
    "Density": 7827.69
  },
  {
    "Province": "Bắc Giang",
    "District": "Bắc Giang",
    "Ward": "Xương Giang",
    "Population": "6,710",
    "Density": 2336.03
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Bắc Lý",
    "Population": "11,849",
    "Density": 941.89
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Châu Minh",
    "Population": "8,467",
    "Density": 742.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Đại Thành",
    "Population": "3,697",
    "Density": 1334.08
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Danh Thắng",
    "Population": "8,600",
    "Density": 924.98
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Đoan Bái",
    "Population": "12,201",
    "Density": 1147.47
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Đông Lỗ",
    "Population": "14,054",
    "Density": 812.04
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Đồng Tân",
    "Population": "3,123",
    "Density": 837.04
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Đức Thắng",
    "Population": "11,905",
    "Density": 1190.26
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hoàng An",
    "Population": "6,106",
    "Density": 1063.5
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hoàng Lương",
    "Population": "5,448",
    "Density": 1112.06
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hoàng Thanh",
    "Population": "5,219",
    "Density": 1162.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hoàng Vân",
    "Population": "5,349",
    "Density": 806.13
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hòa Sơn",
    "Population": "5,367",
    "Density": 1043.31
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hợp Thịnh",
    "Population": "10,162",
    "Density": 1067.81
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hùng Sơn",
    "Population": "3,596",
    "Density": 796.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Hương Lâm",
    "Population": "12,176",
    "Density": 945.19
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Lương Phong",
    "Population": "14,272",
    "Density": 1097.42
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Mai Đình",
    "Population": "11,868",
    "Density": 1250.78
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Mai Trung",
    "Population": "12,980",
    "Density": 1312.65
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Ngọc Sơn",
    "Population": "9,412",
    "Density": 909.99
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Quang Minh",
    "Population": "4,610",
    "Density": 882.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Thái Sơn",
    "Population": "4,912",
    "Density": 1091
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Thắng",
    "Population": "4,971",
    "Density": 3640.42
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Thanh Vân",
    "Population": "5,018",
    "Density": 1183.21
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Thường Thắng",
    "Population": "7,981",
    "Density": 1032.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Hiệp Hòa",
    "Ward": "Xuân Cẩm",
    "Population": "9,659",
    "Density": 1097.63
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "An Hà",
    "Population": "7,720",
    "Density": 927.29
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Đại Lâm",
    "Population": "5,704",
    "Density": 500.22
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Đào Mỹ",
    "Population": "7,537",
    "Density": 900.73
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Dương Đức",
    "Population": "6,732",
    "Density": 693.49
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Hương Lạc",
    "Population": "8,026",
    "Density": 717.06
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Hương Sơn",
    "Population": "12,694",
    "Density": 340.36
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Kép",
    "Population": "2,455",
    "Density": 3308.4
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Mỹ Hà",
    "Population": "6,233",
    "Density": 1013.13
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Mỹ Thái",
    "Population": "8,194",
    "Density": 935.05
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Nghĩa Hòa",
    "Population": "7,193",
    "Density": 940.78
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Nghĩa Hưng",
    "Population": "5,444",
    "Density": 841.17
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Phi Mô",
    "Population": "8,603",
    "Density": 969.08
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Quang Thịnh",
    "Population": "8,819",
    "Density": 756.22
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Tân Dĩnh",
    "Population": "11,880",
    "Density": 1210.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Tân Hưng",
    "Population": "9,472",
    "Density": 711.43
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Tân Thanh",
    "Population": "9,083",
    "Density": 567.47
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Tân Thịnh",
    "Population": "8,441",
    "Density": 895.34
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Thái Đào",
    "Population": "8,925",
    "Density": 911.4
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Tiên Lục",
    "Population": "10,883",
    "Density": 735.64
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Vôi",
    "Population": "6,104",
    "Density": 1774.32
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Xuân Hương",
    "Population": "11,928",
    "Density": 1015.24
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Xương Lâm",
    "Population": "7,863",
    "Density": 714.56
  },
  {
    "Province": "Bắc Giang",
    "District": "Lạng Giang",
    "Ward": "Yên Mỹ",
    "Population": "6,107",
    "Density": 839.08
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Bắc Lũng",
    "Population": "6,221",
    "Density": 679.57
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Bảo Đài",
    "Population": "8,705",
    "Density": 766.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Bảo Sơn",
    "Population": "12,484",
    "Density": 523.42
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Bình Sơn",
    "Population": "6,076",
    "Density": 224.4
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Cẩm Lý",
    "Population": "7,054",
    "Density": 257.5
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Chu Điện",
    "Population": "10,162",
    "Density": 704.28
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Cương Sơn",
    "Population": "5,432",
    "Density": 504.5
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Đan Hội",
    "Population": "4,366",
    "Density": 410.3
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Đồi Ngô",
    "Population": "7,627",
    "Density": 1601.97
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Đông Hưng",
    "Population": "8,648",
    "Density": 170.19
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Đông Phú",
    "Population": "9,665",
    "Density": 371.54
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Huyền Sơn",
    "Population": "4,908",
    "Density": 236.46
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Khám Lạng",
    "Population": "5,317",
    "Density": 575.84
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Lan Mẫu",
    "Population": "7,067",
    "Density": 587.06
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Lục Nam",
    "Population": "3,329",
    "Density": 2116.47
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Lục Sơn",
    "Population": "6,994",
    "Density": 71.52
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Nghĩa Phương",
    "Population": "13,307",
    "Density": 245.53
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Phương Sơn",
    "Population": "6,727",
    "Density": 811.5
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Tam Dị",
    "Population": "16,235",
    "Density": 511.34
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Thanh Lâm",
    "Population": "9,018",
    "Density": 539.77
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Tiên Hưng",
    "Population": "5,701",
    "Density": 763.54
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Tiên Nha",
    "Population": "3,916",
    "Density": 362.06
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Trường Giang",
    "Population": "2,474",
    "Density": 181.52
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Trường Sơn",
    "Population": "5,860",
    "Density": 229.53
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Vô Tranh",
    "Population": "8,647",
    "Density": 185.71
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Vũ Xá",
    "Population": "3,509",
    "Density": 239.36
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Nam",
    "Ward": "Yên Sơn",
    "Population": "8,909",
    "Density": 472.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Biển Động",
    "Population": "7,545",
    "Density": 411.46
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Biên Sơn",
    "Population": "7,350",
    "Density": 365.45
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Cấm Sơn",
    "Population": "4,603",
    "Density": 113.22
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Chũ",
    "Population": "6,830",
    "Density": 1101.54
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Đèo Gia",
    "Population": "4,234",
    "Density": 89.14
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Đồng Cốc",
    "Population": "5,205",
    "Density": 288.67
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Giáp Sơn",
    "Population": "8,286",
    "Density": 490.09
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Hộ Đáp",
    "Population": "4,053",
    "Density": 89.28
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Hồng Giang",
    "Population": "9,181",
    "Density": 651.32
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Kiên Lao",
    "Population": "6,370",
    "Density": 111.49
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Kiên Thành",
    "Population": "8,404",
    "Density": 286.49
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Kim Sơn",
    "Population": "2,795",
    "Density": 206.32
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Mỹ An",
    "Population": "6,050",
    "Density": 339.79
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Nam Dương",
    "Population": "7,741",
    "Density": 253.65
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Nghĩa Hồ",
    "Population": "6,248",
    "Density": 610.93
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Phì Điền",
    "Population": "4,015",
    "Density": 563.16
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Phong Minh",
    "Population": "4,112",
    "Density": 85.44
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Phong Vân",
    "Population": "6,383",
    "Density": 175.93
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Phú Nhuận",
    "Population": "4,114",
    "Density": 161.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Phượng Sơn",
    "Population": "10,421",
    "Density": 538.66
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Quý Sơn",
    "Population": "15,894",
    "Density": 396.88
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Sơn Hải",
    "Population": "3,673",
    "Density": 66.73
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Tân Hoa",
    "Population": "6,071",
    "Density": 288.86
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Tân Lập",
    "Population": "7,255",
    "Density": 130.16
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Tân Mộc",
    "Population": "5,552",
    "Density": 147.77
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Tân Quang",
    "Population": "9,187",
    "Density": 491.49
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Tân Sơn",
    "Population": "7,442",
    "Density": 137.14
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Thanh Hải",
    "Population": "13,987",
    "Density": 479.14
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Trù Hựu",
    "Population": "8,630",
    "Density": 933.44
  },
  {
    "Province": "Bắc Giang",
    "District": "Lục Ngạn",
    "Ward": "Xa Lý",
    "Population": "2,785",
    "Density": 78.36
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "An Bá",
    "Population": "3,372",
    "Density": 113.39
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "An Châu",
    "Population": "4,143",
    "Density": 1742.81
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "An Châu",
    "Population": "4,098",
    "Density": 226.72
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "An Lạc",
    "Population": "3,154",
    "Density": 26.74
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "An Lập",
    "Population": "4,915",
    "Density": 403.03
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Bồng Am",
    "Population": 913,
    "Density": 29.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Cẩm Đàn",
    "Population": "3,174",
    "Density": 177.89
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Chiên Sơn",
    "Population": "2,200",
    "Density": 386.66
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Dương Hưu",
    "Population": "4,799",
    "Density": 61.71
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Giáo Liêm",
    "Population": "2,734",
    "Density": 127.45
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Hữu Sản",
    "Population": "1,968",
    "Density": 52.46
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Lệ Viễn",
    "Population": "3,572",
    "Density": 224.03
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Long Sơn",
    "Population": "4,731",
    "Density": 74.21
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Phúc Thắng",
    "Population": "1,288",
    "Density": 69.12
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Quế Sơn",
    "Population": "3,028",
    "Density": 299.59
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Thạch Sơn",
    "Population": 497,
    "Density": 23.82
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Thanh Luận",
    "Population": "2,444",
    "Density": 49.56
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Thanh Sơn",
    "Population": "3,204",
    "Density": 158.43
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Tuấn Đạo",
    "Population": "4,209",
    "Density": 62.02
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Tuấn Mậu",
    "Population": "1,901",
    "Density": 30.99
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Vân Sơn",
    "Population": "2,526",
    "Density": 66.84
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Vĩnh Khương",
    "Population": "1,880",
    "Density": 116.94
  },
  {
    "Province": "Bắc Giang",
    "District": "Sơn Động",
    "Ward": "Yên Định",
    "Population": "3,974",
    "Density": 135.08
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "An Dương",
    "Population": "6,195",
    "Density": 567.05
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Cao Thượng",
    "Population": "5,341",
    "Density": 1586.28
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Cao Thượng",
    "Population": "6,115",
    "Density": 918.35
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Cao Xá",
    "Population": "10,537",
    "Density": 730.06
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Đại Hóa",
    "Population": "4,103",
    "Density": 806.63
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Hợp Đức",
    "Population": "6,437",
    "Density": 669.67
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Lam Cốt",
    "Population": "6,587",
    "Density": 725.89
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Lan Giới",
    "Population": "3,317",
    "Density": 594.31
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Liên Chung",
    "Population": "7,052",
    "Density": 586.2
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Liên Sơn",
    "Population": "5,037",
    "Density": 685.05
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Ngọc Châu",
    "Population": "6,428",
    "Density": 670.78
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Ngọc Lý",
    "Population": "6,518",
    "Density": 702.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Ngọc Thiện",
    "Population": "12,609",
    "Density": 893.75
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Ngọc Vân",
    "Population": "7,779",
    "Density": 740.79
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Nhã Nam",
    "Population": "2,480",
    "Density": 1702.95
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Nhã Nam",
    "Population": "4,554",
    "Density": 1110.95
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Phúc Hòa",
    "Population": "6,310",
    "Density": 582.48
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Phúc Sơn",
    "Population": "5,106",
    "Density": 807.39
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Quang Tiến",
    "Population": "5,245",
    "Density": 861.08
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Quế Nham",
    "Population": "8,490",
    "Density": 827.81
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Song Vân",
    "Population": "8,430",
    "Density": 964.48
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Tân Trung",
    "Population": "7,190",
    "Density": 716.78
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Việt Lập",
    "Population": "8,485",
    "Density": 587.89
  },
  {
    "Province": "Bắc Giang",
    "District": "Tân Yên",
    "Ward": "Việt Ngọc",
    "Population": "8,202",
    "Density": 904.31
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Bích Động",
    "Population": "6,704",
    "Density": 1047.79
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Bích Sơn",
    "Population": "7,917",
    "Density": 1158.62
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Hoàng Ninh",
    "Population": "9,418",
    "Density": 1511.18
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Hồng Thái",
    "Population": "8,238",
    "Density": 1395.87
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Hương Mai",
    "Population": "8,801",
    "Density": 934.21
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Minh Đức",
    "Population": "11,363",
    "Density": 661.49
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Nếnh",
    "Population": "8,024",
    "Density": 1812.72
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Nghĩa Trung",
    "Population": "9,278",
    "Density": 643.95
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Ninh Sơn",
    "Population": "7,916",
    "Density": 988.61
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Quang Châu",
    "Population": "9,517",
    "Density": 1059.39
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Quảng Minh",
    "Population": "9,301",
    "Density": 1241.14
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Tăng Tiến",
    "Population": "7,135",
    "Density": 1446.03
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Thượng Lan",
    "Population": "7,645",
    "Density": 754.17
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Tiên Sơn",
    "Population": "9,871",
    "Density": 668.5
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Trung Sơn",
    "Population": "8,996",
    "Density": 718.87
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Tự Lạn",
    "Population": "6,808",
    "Density": 756.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Vân Hà",
    "Population": "7,125",
    "Density": 2406.77
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Vân Trung",
    "Population": "6,769",
    "Density": 665.72
  },
  {
    "Province": "Bắc Giang",
    "District": "Việt Yên",
    "Ward": "Việt Tiến",
    "Population": "9,110",
    "Density": 823.76
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Cảnh Thụy",
    "Population": "6,022",
    "Density": 956.19
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Đồng Phúc",
    "Population": "7,636",
    "Density": 565.63
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Đồng Việt",
    "Population": "5,398",
    "Density": 545.11
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Đức Giang",
    "Population": "6,921",
    "Density": 702.33
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Hương Gián",
    "Population": "8,946",
    "Density": 1059.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Lãng Sơn",
    "Population": "6,052",
    "Density": 662.71
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Lão Hộ",
    "Population": "2,760",
    "Density": 589.35
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Neo",
    "Population": "5,714",
    "Density": 979.38
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Nham Sơn",
    "Population": "5,082",
    "Density": 470.6
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Nội Hoàng",
    "Population": "6,111",
    "Density": 798.26
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Quỳnh Sơn",
    "Population": "5,247",
    "Density": 631.52
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Tân An",
    "Population": "3,510",
    "Density": 786.33
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Tân Dân",
    "Population": "5,296",
    "Density": 1080.64
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Tân Liễu",
    "Population": "5,364",
    "Density": 595.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Thắng Cương",
    "Population": "2,045",
    "Density": 496.54
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Tiến Dũng",
    "Population": "6,705",
    "Density": 713.45
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Tiền Phong",
    "Population": "7,639",
    "Density": 729.19
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Trí Yên",
    "Population": "4,373",
    "Density": 369.53
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Tư Mại",
    "Population": "7,689",
    "Density": 660.91
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Xuân Phú",
    "Population": "6,849",
    "Density": 752.6
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Dũng",
    "Ward": "Yên Lư",
    "Population": "12,574",
    "Density": 591.88
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "An Thượng",
    "Population": "3,823",
    "Density": 495.35
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Bố Hạ",
    "Population": "3,495",
    "Density": 2566.27
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Bố Hạ",
    "Population": "5,798",
    "Density": 1064.67
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Canh Nậu",
    "Population": "5,879",
    "Density": 162.93
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Cầu Gồ",
    "Population": "3,350",
    "Density": 1616.64
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đồng Hưu",
    "Population": "4,508",
    "Density": 201.1
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đồng Kỳ",
    "Population": "5,195",
    "Density": 724.83
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đồng Lạc",
    "Population": "3,325",
    "Density": 566.89
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đông Sơn",
    "Population": "7,504",
    "Density": 274.12
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đồng Tâm",
    "Population": "2,462",
    "Density": 372.19
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đồng Tiến",
    "Population": "3,757",
    "Density": 96.62
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Đồng Vương",
    "Population": "4,277",
    "Density": 184.25
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Hồng Kỳ",
    "Population": "3,811",
    "Density": 442.76
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Hương Vĩ",
    "Population": "5,147",
    "Density": 746.85
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Phồn Xương",
    "Population": "3,962",
    "Density": 589.43
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Tam Hiệp",
    "Population": "3,135",
    "Density": 348.04
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Tam Tiến",
    "Population": "5,851",
    "Density": 190.24
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Tân Hiệp",
    "Population": "3,867",
    "Density": 521.07
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Tân Sỏi",
    "Population": "4,130",
    "Density": 663.41
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Tiến Thắng",
    "Population": "4,117",
    "Density": 189.62
  },
  {
    "Province": "Bắc Giang",
    "District": "Yên Thế",
    "Ward": "Xuân Lương",
    "Population": "5,309",
    "Density": 210.56
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Bành Trạch",
    "Population": "3,043",
    "Density": 51.54
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Cao Thượng",
    "Population": "3,671",
    "Density": 90.98
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Cao Trĩ",
    "Population": "1,925",
    "Density": 79.44
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Chợ Rã",
    "Population": "3,672",
    "Density": 817.94
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Chu Hương",
    "Population": "3,188",
    "Density": 91.48
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Địa Linh",
    "Population": "3,057",
    "Density": 98.56
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Đồng Phúc",
    "Population": "2,755",
    "Density": 47.49
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Hà Hiệu",
    "Population": "2,642",
    "Density": 65.22
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Hoàng Trĩ",
    "Population": "1,303",
    "Density": 37.44
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Khang Ninh",
    "Population": "3,841",
    "Density": 87.02
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Mỹ Phương",
    "Population": "3,259",
    "Density": 57.43
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Nam Mẫu",
    "Population": "2,000",
    "Density": 30.57
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Phúc Lộc",
    "Population": "2,984",
    "Density": 47.03
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Quảng Khê",
    "Population": "3,344",
    "Density": 60.74
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Thượng Giáo",
    "Population": "3,268",
    "Density": 100.67
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ba Bể",
    "Ward": "Yến Dương",
    "Population": "2,398",
    "Density": 61.6
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Cẩm Giàng",
    "Population": "2,021",
    "Density": 206.51
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Cao Sơn",
    "Population": 829,
    "Density": 12.42
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Đôn Phong",
    "Population": "2,210",
    "Density": 17.36
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Dương Phong",
    "Population": "1,664",
    "Density": 34.41
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Hà Vị",
    "Population": "1,644",
    "Density": 128.59
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Lục Bình",
    "Population": "2,330",
    "Density": 80.33
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Mỹ Thanh",
    "Population": "1,929",
    "Density": 65.27
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Nguyên Phúc",
    "Population": "1,881",
    "Density": 39.47
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Phương Linh",
    "Population": "1,520",
    "Density": 72.23
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Phủ Thông",
    "Population": "1,683",
    "Density": 1610.22
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Quân Bình",
    "Population": "1,954",
    "Density": 262.83
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Quang Thuận",
    "Population": "1,788",
    "Density": 54.53
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Sĩ Bình",
    "Population": "1,640",
    "Density": 60.38
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Tân Tiến",
    "Population": "1,460",
    "Density": 104.74
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Tú Trĩ",
    "Population": "1,751",
    "Density": 144.09
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Vi Hương",
    "Population": "2,397",
    "Density": 113.12
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bạch Thông",
    "Ward": "Vũ Muộn",
    "Population": "1,515",
    "Density": 39.27
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Đức Xuân",
    "Population": "7,383",
    "Density": 1308.11
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Dương Quang",
    "Population": "2,689",
    "Density": 105.65
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Huyền Tụng",
    "Population": "4,147",
    "Density": 149.32
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Nguyễn Thị Minh Khai",
    "Population": "4,321",
    "Density": 3746.96
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Nông Thượng",
    "Population": "3,050",
    "Density": 141.79
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Phùng Chí Kiên",
    "Population": "4,282",
    "Density": 1286.89
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Sông Cầu",
    "Population": "8,358",
    "Density": 1914.38
  },
  {
    "Province": "Bắc Kạn",
    "District": "Bắc Kạn",
    "Ward": "Xuất Hóa",
    "Population": "2,950",
    "Density": 61.67
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Bằng Lãng",
    "Population": "1,635",
    "Density": 49.2
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Bằng Lũng",
    "Population": "5,999",
    "Density": 229.99
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Bằng Phúc",
    "Population": "2,302",
    "Density": 46.22
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Bản Thi",
    "Population": "2,165",
    "Density": 32.81
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Bình Trung",
    "Population": "2,825",
    "Density": 43.76
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Đại Sảo",
    "Population": "1,819",
    "Density": 57.49
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Đồng Lạc",
    "Population": "2,203",
    "Density": 60.6
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Đông Viên",
    "Population": "2,022",
    "Density": 93.24
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Lương Bằng",
    "Population": "1,846",
    "Density": 29.54
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Nam Cường",
    "Population": "3,053",
    "Density": 96.04
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Nghĩa Tá",
    "Population": "1,527",
    "Density": 37.54
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Ngọc Phái",
    "Population": "2,214",
    "Density": 55.05
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Phong Huân",
    "Population": 953,
    "Density": 39.21
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Phương Viên",
    "Population": "3,217",
    "Density": 86.07
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Quảng Bạch",
    "Population": "1,847",
    "Density": 46.35
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Rã Bản",
    "Population": "1,429",
    "Density": 57.16
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Tân Lập",
    "Population": "1,253",
    "Density": 40.3
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Xuân Lạc",
    "Population": "3,339",
    "Density": 37.33
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Yên Mỹ",
    "Population": "1,418",
    "Density": 39.64
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Yên Nhuận",
    "Population": "2,073",
    "Density": 74.49
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Yên Thịnh",
    "Population": "1,654",
    "Density": 31.69
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Đồn",
    "Ward": "Yên Thượng",
    "Population": "1,329",
    "Density": 26.25
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Bình Văn",
    "Population": "1,349",
    "Density": 48.61
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Cao Kỳ",
    "Population": "2,754",
    "Density": 46.47
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Chợ Mới",
    "Population": "2,383",
    "Density": 861.16
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Hoà Mục",
    "Population": "2,172",
    "Density": 53.05
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Mai Lạp",
    "Population": "1,521",
    "Density": 35.61
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Như Cố",
    "Population": "2,663",
    "Density": 62.06
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Nông Hạ",
    "Population": "3,589",
    "Density": 62.47
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Nông Thịnh",
    "Population": "1,687",
    "Density": 69.41
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Quảng Chu",
    "Population": "3,418",
    "Density": 71.42
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Tân Sơn",
    "Population": "1,351",
    "Density": 21.39
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Thanh Bình",
    "Population": "1,889",
    "Density": 65.74
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Thanh Mai",
    "Population": "2,559",
    "Density": 63.33
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Thanh Vận",
    "Population": "2,193",
    "Density": 73.32
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Yên Cư",
    "Population": "2,636",
    "Density": 58.49
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Yên Đĩnh",
    "Population": "2,880",
    "Density": 133.95
  },
  {
    "Province": "Bắc Kạn",
    "District": "Chợ Mới",
    "Ward": "Yên Hân",
    "Population": "1,703",
    "Density": 64.34
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Ân Tình",
    "Population": "1,022",
    "Density": 45.62
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Côn Minh",
    "Population": "2,423",
    "Density": 37.43
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Cư Lễ",
    "Population": "1,936",
    "Density": 32.77
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Cường Lợi",
    "Population": "1,763",
    "Density": 96.66
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Đổng Xá",
    "Population": "2,530",
    "Density": 32.05
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Dương Sơn",
    "Population": "1,588",
    "Density": 44.06
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Hảo Nghĩa",
    "Population": "1,297",
    "Density": 57.49
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Hữu Thác",
    "Population": "1,375",
    "Density": 58.19
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Kim Hỷ",
    "Population": "1,606",
    "Density": 21.06
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Kim Lư",
    "Population": "2,151",
    "Density": 40.55
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Lam Sơn",
    "Population": "1,795",
    "Density": 80.41
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Lạng San",
    "Population": "1,812",
    "Density": 51.81
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Liêm Thuỷ",
    "Population": "1,245",
    "Density": 28.21
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Lương Hạ",
    "Population": "1,394",
    "Density": 80.26
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Lương Thành",
    "Population": 975,
    "Density": 56.52
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Lương Thượng",
    "Population": "1,718",
    "Density": 45.07
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Quang Phong",
    "Population": "1,488",
    "Density": 32.83
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Văn Học",
    "Population": "1,019",
    "Density": 70.3
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Văn Minh",
    "Population": "1,110",
    "Density": 28.83
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Vũ Loan",
    "Population": "1,597",
    "Density": 20.43
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Xuân Dương",
    "Population": "2,228",
    "Density": 64.82
  },
  {
    "Province": "Bắc Kạn",
    "District": "Na Rì",
    "Ward": "Yến Lạc",
    "Population": "3,400",
    "Density": 798.53
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Bằng Vân",
    "Population": "2,827",
    "Density": 42.55
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Cốc Đán",
    "Population": "2,421",
    "Density": 36.45
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Đức Vân",
    "Population": "1,419",
    "Density": 50.22
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Hương Nê",
    "Population": "1,175",
    "Density": 49.36
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Lãng Ngâm",
    "Population": "2,278",
    "Density": 81.3
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Nà Phặc",
    "Population": "5,702",
    "Density": 91.45
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Thuần Mang",
    "Population": "2,049",
    "Density": 38.51
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Thượng Ân",
    "Population": "1,872",
    "Density": 27.81
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Thượng Quan",
    "Population": "3,116",
    "Density": 19.45
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Trung Hoà",
    "Population": "1,332",
    "Density": 34.78
  },
  {
    "Province": "Bắc Kạn",
    "District": "Ngân Sơn",
    "Ward": "Vân Tùng",
    "Population": "3,489",
    "Density": 67.97
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "An Thắng",
    "Population": "1,314",
    "Density": 40.09
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Bằng Thành",
    "Population": "3,685",
    "Density": 42.43
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Bộc Bố",
    "Population": "3,748",
    "Density": 70.56
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Cao Tân",
    "Population": "3,625",
    "Density": 85.68
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Cổ Linh",
    "Population": "3,618",
    "Density": 90.3
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Công Bằng",
    "Population": "2,879",
    "Density": 48.72
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Giáo Hiệu",
    "Population": "1,522",
    "Density": 53.75
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Nghiên Loan",
    "Population": "5,170",
    "Density": 89.25
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Nhạn Môn",
    "Population": "1,776",
    "Density": 43.36
  },
  {
    "Province": "Bắc Kạn",
    "District": "Pác Nặm",
    "Ward": "Xuân La",
    "Population": "2,722",
    "Density": 68.13
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Hiệp Thành",
    "Population": "9,105",
    "Density": 452.18
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Nhà Mát",
    "Population": "10,493",
    "Density": 686.49
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Phường 1",
    "Population": "20,069",
    "Density": 3606.42
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Phường 2",
    "Population": "12,506",
    "Density": 1521.32
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Phường 3",
    "Population": "16,386",
    "Density": 17919.16
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Phường 5",
    "Population": "19,157",
    "Density": 1868.79
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Phường 7",
    "Population": "16,886",
    "Density": 5059.63
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Phường 8",
    "Population": "14,032",
    "Density": 1279.01
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Vĩnh Trạch",
    "Population": "15,437",
    "Density": 498.31
  },
  {
    "Province": "Bạc Liêu",
    "District": "Bạc Liêu",
    "Ward": "Vĩnh Trạch Đông",
    "Population": "13,784",
    "Density": 328.88
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "An Phúc",
    "Population": "11,062",
    "Density": 190.19
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "An Trạch",
    "Population": "13,124",
    "Density": 246.76
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "An Trạch A",
    "Population": "11,396",
    "Density": 245.87
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Điền Hải",
    "Population": "8,693",
    "Density": 296.75
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Định Thành",
    "Population": "10,954",
    "Density": 348.21
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Định Thành A",
    "Population": "7,576",
    "Density": 272.62
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Gành Hào",
    "Population": "14,312",
    "Density": 1283.01
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Long Điền",
    "Population": "23,607",
    "Density": 269.19
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Long Điền Đông",
    "Population": "17,862",
    "Density": 314.79
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Long Điền Đông A",
    "Population": "14,645",
    "Density": 251.86
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Long Điền Tây",
    "Population": "10,359",
    "Density": 166.25
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Giá Rai",
    "Population": "137,249",
    "Density": 386.78
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Hộ Phòng",
    "Population": "19,158",
    "Density": 1604.12
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Láng Tròn (Phong Thạnh Đông A)",
    "Population": "17,481",
    "Density": 544.16
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Phong Tân",
    "Population": "13,697",
    "Density": 253.37
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Phong Thạnh",
    "Population": "10,800",
    "Density": 230.13
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Phong Thạnh A",
    "Population": "9,244",
    "Density": 266.44
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Phong Thạnh Đông",
    "Population": "6,962",
    "Density": 342.5
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Phong Thạnh Tây",
    "Population": "9,521",
    "Density": 179.29
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Phường 1 (Giá Rai)",
    "Population": "16,687",
    "Density": 1439.65
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Tân Phong",
    "Population": "25,312",
    "Density": 402.49
  },
  {
    "Province": "Bạc Liêu",
    "District": "Đông Hải",
    "Ward": "Tân Thạnh",
    "Population": "8,387",
    "Density": 308.45
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Hòa Bình",
    "Population": "20,054",
    "Density": 745
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Minh Diệu",
    "Population": "11,777",
    "Density": 288.89
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Vĩnh Bình",
    "Population": "13,034",
    "Density": 337.16
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Vĩnh Hậu",
    "Population": "9,583",
    "Density": 205.16
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Vĩnh Hậu A",
    "Population": "7,976",
    "Density": 205.76
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Vĩnh Mỹ A",
    "Population": "16,563",
    "Density": 324.6
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Vĩnh Mỹ B",
    "Population": "14,762",
    "Density": 407.62
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hòa Bình",
    "Ward": "Vĩnh Thịnh",
    "Population": "13,043",
    "Density": 222.86
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Lộc Ninh",
    "Population": "11,540",
    "Density": 216.52
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Ngan Dừa",
    "Population": "11,097",
    "Density": 782.36
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Ninh Hòa",
    "Population": "18,641",
    "Density": 327.25
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Ninh Quới",
    "Population": "11,370",
    "Density": 323.43
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Ninh Quới A",
    "Population": "15,137",
    "Density": 370.81
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Ninh Thạnh Lợi",
    "Population": "10,776",
    "Density": 161.68
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Ninh Thạnh Lợi A",
    "Population": "8,218",
    "Density": 95.14
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Vĩnh Lộc",
    "Population": "9,266",
    "Density": 198.51
  },
  {
    "Province": "Bạc Liêu",
    "District": "Hồng Dân",
    "Ward": "Vĩnh Lộc A",
    "Population": "9,132",
    "Density": 203.19
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Hưng Phú",
    "Population": "12,697",
    "Density": 345.7
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Phong Thạnh Tây A",
    "Population": "10,804",
    "Density": 196.42
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Phong Thạnh Tây B",
    "Population": "12,722",
    "Density": 211.53
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Phước Long",
    "Population": "19,307",
    "Density": 409.94
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Phước Long",
    "Population": "16,182",
    "Density": 205.2
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Vĩnh Phú Đông",
    "Population": "16,951",
    "Density": 343.74
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Vĩnh Phú Tây",
    "Population": "14,467",
    "Density": 282.66
  },
  {
    "Province": "Bạc Liêu",
    "District": "Phước Long",
    "Ward": "Vĩnh Thanh",
    "Population": "14,570",
    "Density": 385.73
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Châu Hưng",
    "Population": "13,815",
    "Density": 394.65
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Châu Hưng A",
    "Population": "10,314",
    "Density": 351.39
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Châu Thới",
    "Population": "14,337",
    "Density": 324.69
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Hưng Hội",
    "Population": "11,660",
    "Density": 426.47
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Hưng Thành",
    "Population": "11,865",
    "Density": 349.51
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Long Thạnh",
    "Population": "16,326",
    "Density": 444.94
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Vĩnh Hưng",
    "Population": "10,515",
    "Density": 451.83
  },
  {
    "Province": "Bạc Liêu",
    "District": "Vĩnh Lợi",
    "Ward": "Vĩnh Hưng A",
    "Population": "9,323",
    "Density": 430.52
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Đại Phúc",
    "Population": "14,235",
    "Density": 3084.31
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Đáp Cầu",
    "Population": "7,973",
    "Density": 9416.67
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Hạp Lĩnh",
    "Population": "6,378",
    "Density": 1218.59
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Hòa Long",
    "Population": "10,367",
    "Density": 1193.72
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Khắc Niệm",
    "Population": "9,667",
    "Density": 1307.15
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Khúc Xuyên",
    "Population": "3,417",
    "Density": 1467.09
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Kim Chân",
    "Population": "4,790",
    "Density": 1088.91
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Kinh Bắc",
    "Population": "8,312",
    "Density": 3892.48
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Nam Sơn",
    "Population": "9,046",
    "Density": 763.38
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Ninh Xá",
    "Population": "8,565",
    "Density": 10654.44
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Phong Khê",
    "Population": "9,312",
    "Density": 1705.53
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Suối Hoa",
    "Population": "5,541",
    "Density": 4328.91
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Thị Cầu",
    "Population": "12,557",
    "Density": 7128.18
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Tiền An",
    "Population": "6,561",
    "Density": 20260
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Vạn An",
    "Population": "6,898",
    "Density": 1889.6
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Vân Dương",
    "Population": "8,024",
    "Density": 1217.31
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Vệ An",
    "Population": "6,517",
    "Density": 11504.99
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Võ Cường",
    "Population": "15,177",
    "Density": 1907.59
  },
  {
    "Province": "Bắc Ninh",
    "District": "Bắc Ninh",
    "Ward": "Vũ Ninh",
    "Population": "10,970",
    "Density": 1841.72
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Bình Dương",
    "Population": "5,404",
    "Density": 785.29
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Cao Đức",
    "Population": "4,900",
    "Density": 433.44
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Đại Bái",
    "Population": "8,799",
    "Density": 1389.61
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Đại Lai",
    "Population": "7,320",
    "Density": 897.08
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Đông Cứu",
    "Population": "6,250",
    "Density": 957.77
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Gia Bình",
    "Population": "6,576",
    "Density": 1171.11
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Giang Sơn",
    "Population": "5,483",
    "Density": 815.01
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Lãng Ngâm",
    "Population": "6,794",
    "Density": 1074.47
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Nhân Thắng",
    "Population": "7,702",
    "Density": 942.65
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Quỳnh Phú",
    "Population": "5,547",
    "Density": 701.91
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Song Giang",
    "Population": "6,742",
    "Density": 956.2
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Thái Bảo",
    "Population": "5,647",
    "Density": 793.18
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Vạn Ninh",
    "Population": "6,735",
    "Density": 815.28
  },
  {
    "Province": "Bắc Ninh",
    "District": "Gia Bình",
    "Ward": "Xuân Lai",
    "Population": "8,370",
    "Density": 755.96
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "An Thịnh",
    "Population": "9,436",
    "Density": 938.63
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Bình Định",
    "Population": "7,815",
    "Density": 847.67
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Lai Hạ",
    "Population": "3,878",
    "Density": 779.45
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Lâm Thao",
    "Population": "5,897",
    "Density": 925.18
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Minh Tân",
    "Population": "4,498",
    "Density": 759.05
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Mỹ Hương",
    "Population": "5,711",
    "Density": 1047.87
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Phú Hòa",
    "Population": "8,987",
    "Density": 680.32
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Phú Lương",
    "Population": "3,585",
    "Density": 686.48
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Quảng Phú",
    "Population": "11,372",
    "Density": 1039.77
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Tân Lãng",
    "Population": "5,190",
    "Density": 1192.42
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Thứa",
    "Population": "8,871",
    "Density": 1232.79
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Trung Chính",
    "Population": "8,005",
    "Density": 726.01
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Trung Kênh",
    "Population": "9,059",
    "Density": 1368.24
  },
  {
    "Province": "Bắc Ninh",
    "District": "Lương Tài",
    "Ward": "Trừng Xá",
    "Population": "4,022",
    "Density": 730.36
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Bằng An",
    "Population": "4,012",
    "Density": 855.36
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Bồng Lai",
    "Population": "7,525",
    "Density": 1134.99
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Cách Bi",
    "Population": "5,211",
    "Density": 634.37
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Châu Phong",
    "Population": "5,740",
    "Density": 686.84
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Chi Lăng",
    "Population": "7,663",
    "Density": 795.18
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Đại Xuân",
    "Population": "8,977",
    "Density": 1155
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Đào Viên",
    "Population": "9,561",
    "Density": 1005.85
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Đức Long",
    "Population": "6,359",
    "Density": 724.07
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Hán Quảng",
    "Population": "3,879",
    "Density": 652.36
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Mộ Đạo",
    "Population": "4,566",
    "Density": 902.18
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Ngọc Xá",
    "Population": "8,221",
    "Density": 879.93
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Nhân Hòa",
    "Population": "6,593",
    "Density": 970.39
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Phố Mới",
    "Population": "6,457",
    "Density": 3172.35
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Phù Lãng",
    "Population": "7,190",
    "Density": 695.76
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Phù Lương",
    "Population": "5,121",
    "Density": 630.93
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Phương Liễu",
    "Population": "9,383",
    "Density": 1106
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Phượng Mao",
    "Population": "5,050",
    "Density": 1019.21
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Quế Tân",
    "Population": "5,804",
    "Density": 747.78
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Việt Hùng",
    "Population": "9,053",
    "Density": 1055.64
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Việt Thống",
    "Population": "5,109",
    "Density": 998.75
  },
  {
    "Province": "Bắc Ninh",
    "District": "Quế Võ",
    "Ward": "Yên Giả",
    "Population": "4,464",
    "Density": 580.82
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "An Bình",
    "Population": "7,384",
    "Density": 910.5
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Đại Đồng Thành",
    "Population": "10,876",
    "Density": 1248.67
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Đình Tổ",
    "Population": "10,839",
    "Density": 1102.45
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Gia Đông",
    "Population": "8,885",
    "Density": 993.16
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Hà Mãn",
    "Population": "5,387",
    "Density": 1492.16
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Hồ",
    "Population": "11,414",
    "Density": 2351.61
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Hoài Thượng",
    "Population": "8,539",
    "Density": 1528.56
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Mão Điền",
    "Population": "11,854",
    "Density": 1961.67
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Nghĩa Đạo",
    "Population": "8,076",
    "Density": 939.93
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Ngũ Thái",
    "Population": "7,095",
    "Density": 1145.8
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Nguyệt Đức",
    "Population": "7,909",
    "Density": 1050.82
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Ninh Xá",
    "Population": "8,481",
    "Density": 1039.07
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Song Hồ",
    "Population": "5,544",
    "Density": 1376.33
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Song Liễu",
    "Population": "3,845",
    "Density": 1157.82
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Thanh Khương",
    "Population": "6,365",
    "Density": 1313.89
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Trạm Lộ",
    "Population": "7,645",
    "Density": 786.89
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Trí Quả",
    "Population": "8,035",
    "Density": 1425.4
  },
  {
    "Province": "Bắc Ninh",
    "District": "Thuận Thành",
    "Ward": "Xuân Lâm",
    "Population": "6,363",
    "Density": 1328.64
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Cảnh Hưng",
    "Population": "5,009",
    "Density": 908.79
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Đại Đồng",
    "Population": "10,672",
    "Density": 1429.64
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Hiên Vân",
    "Population": "5,925",
    "Density": 1336.51
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Hoàn Sơn",
    "Population": "11,741",
    "Density": 1710.92
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Lạc Vệ",
    "Population": "11,663",
    "Density": 1107.81
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Liên Bão",
    "Population": "9,299",
    "Density": 1350.5
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Lim",
    "Population": "11,087",
    "Density": 2183.12
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Minh Đạo",
    "Population": "6,085",
    "Density": 1021.66
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Nội Duệ",
    "Population": "7,790",
    "Density": 2076.89
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Phật Tích",
    "Population": "6,275",
    "Density": 1146.35
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Phú Lâm",
    "Population": "13,754",
    "Density": 1134.54
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Tân Chi",
    "Population": "7,537",
    "Density": 1004.53
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Tri Phương",
    "Population": "7,704",
    "Density": 1364.36
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Việt Đoàn",
    "Population": "9,855",
    "Density": 1157.74
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Từ Sơn",
    "Population": "140,040",
    "Density": 2280.97
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Châu Khê",
    "Population": "13,468",
    "Density": 2714.34
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Đình Bảng",
    "Population": "17,209",
    "Density": 2011.78
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Đồng Kỵ",
    "Population": "14,126",
    "Density": 5804.09
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Đông Ngàn",
    "Population": "9,366",
    "Density": 24479.23
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Đồng Nguyên",
    "Population": "14,496",
    "Density": 2078.13
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Hương Mạc",
    "Population": "13,582",
    "Density": 2399.1
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Phù Chẩn",
    "Population": "7,721",
    "Density": 1246.23
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Phù Khê",
    "Population": "9,014",
    "Density": 2587.48
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Tam Sơn",
    "Population": "13,108",
    "Density": 1550.75
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Tân Hồng",
    "Population": "10,624",
    "Density": 2066.2
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Trang Hạ",
    "Population": "7,000",
    "Density": 2010.4
  },
  {
    "Province": "Bắc Ninh",
    "District": "Tiên Du",
    "Ward": "Tương Giang",
    "Population": "10,326",
    "Density": 1821.26
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Chờ",
    "Population": "13,885",
    "Density": 1650.21
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Đông Phong",
    "Population": "7,591",
    "Density": 1186.15
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Đông Thọ",
    "Population": "7,046",
    "Density": 1297.53
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Đông Tiến",
    "Population": "6,528",
    "Density": 1194.44
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Dũng Liệt",
    "Population": "7,642",
    "Density": 922.51
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Hòa Tiến",
    "Population": "8,070",
    "Density": 1274.62
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Long Châu",
    "Population": "7,365",
    "Density": 1179.25
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Tam Đa",
    "Population": "10,817",
    "Density": 1335.73
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Tam Giang",
    "Population": "10,281",
    "Density": 1209.49
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Thụy Hòa",
    "Population": "7,140",
    "Density": 1182.33
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Trung Nghĩa",
    "Population": "9,572",
    "Density": 1240.52
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Văn Môn",
    "Population": "9,945",
    "Density": 2305.71
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Yên Phụ",
    "Population": "10,031",
    "Density": 1790.39
  },
  {
    "Province": "Bắc Ninh",
    "District": "Yên Phong",
    "Ward": "Yên Trung",
    "Population": "10,747",
    "Density": 1095.68
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Bình Tây",
    "Population": "10,604",
    "Density": 697.49
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Đức",
    "Population": "6,550",
    "Density": 513.64
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Hiệp",
    "Population": "9,330",
    "Density": 316.22
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Hòa Tây",
    "Population": "10,736",
    "Density": 607.07
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Ngãi Tây",
    "Population": "5,742",
    "Density": 393.21
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Ngãi Trung",
    "Population": "8,933",
    "Density": 632.25
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Phú Trung",
    "Population": "6,554",
    "Density": 636.37
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "An Thủy",
    "Population": "15,754",
    "Density": 634.78
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Bảo Thạnh",
    "Population": "10,628",
    "Density": 373.13
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Bảo Thuận",
    "Population": "8,881",
    "Density": 340.75
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Ba Tri",
    "Population": "10,813",
    "Density": 1826.37
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Mỹ Chánh",
    "Population": "6,613",
    "Density": 559.19
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Mỹ Hòa",
    "Population": "6,927",
    "Density": 427.28
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Mỹ Nhơn",
    "Population": "6,739",
    "Density": 725.83
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Mỹ Thạnh",
    "Population": "5,290",
    "Density": 572.44
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Phú Lễ",
    "Population": "6,545",
    "Density": 629.51
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Phú Ngãi",
    "Population": "5,753",
    "Density": 551.69
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Phước Tuy",
    "Population": "3,710",
    "Density": 705.91
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Tân Hưng",
    "Population": "5,932",
    "Density": 492.04
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Tân Mỹ",
    "Population": "2,535",
    "Density": 193.78
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Tân Thủy",
    "Population": "9,712",
    "Density": 895.94
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Tân Xuân",
    "Population": "11,954",
    "Density": 488.08
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Vĩnh An",
    "Population": "5,611",
    "Density": 734.86
  },
  {
    "Province": "Bến Tre",
    "District": "Ba Tri",
    "Ward": "Vĩnh Hòa",
    "Population": "5,552",
    "Density": 700.1
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Bình Phú",
    "Population": "6,899",
    "Density": 1104.65
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Mỹ Thành",
    "Population": "2,428",
    "Density": 837.56
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Mỹ Thạnh An",
    "Population": "10,438",
    "Density": 1038.19
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Nhơn Thạnh",
    "Population": "6,644",
    "Density": 716.35
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phú Hưng",
    "Population": "13,934",
    "Density": 1223.35
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phú Khương",
    "Population": "17,367",
    "Density": 2989.41
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phú Nhuận",
    "Population": "3,923",
    "Density": 761.26
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 1",
    "Population": "4,089",
    "Density": 14972.54
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 2",
    "Population": "2,091",
    "Density": 8891.82
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 3",
    "Population": "4,363",
    "Density": 11025.47
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 4",
    "Population": "5,110",
    "Density": 13276.87
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 5",
    "Population": "5,603",
    "Density": 10667.3
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 6",
    "Population": "8,132",
    "Density": 5026.27
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 7",
    "Population": "7,436",
    "Density": 3080.24
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Phường 8",
    "Population": "7,777",
    "Density": 3555.53
  },
  {
    "Province": "Bến Tre",
    "District": "Bến Tre",
    "Ward": "Sơn Đông",
    "Population": "12,293",
    "Density": 1148.99
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Bình Đại",
    "Population": "9,859",
    "Density": 984.62
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Bình Thắng",
    "Population": "10,630",
    "Density": 760.26
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Bình Thới",
    "Population": "7,899",
    "Density": 427.94
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Châu Hưng",
    "Population": "5,035",
    "Density": 404.32
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Đại Hòa Lộc",
    "Population": "7,913",
    "Density": 345.17
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Định Trung",
    "Population": "8,354",
    "Density": 312.07
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Lộc Thuận",
    "Population": "6,518",
    "Density": 585.15
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Long Định",
    "Population": "5,014",
    "Density": 639.19
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Long Hòa",
    "Population": "4,789",
    "Density": 664.11
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Phú Long",
    "Population": "5,931",
    "Density": 286.6
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Phú Thuận",
    "Population": "4,492",
    "Density": 565
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Phú Vang",
    "Population": "3,789",
    "Density": 353.25
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Tam Hiệp",
    "Population": "3,284",
    "Density": 239.53
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Thạnh Phước",
    "Population": "9,228",
    "Density": 173.84
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Thạnh Trị",
    "Population": "7,567",
    "Density": 309.6
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Thới Lai",
    "Population": "6,499",
    "Density": 472.96
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Thới Thuận",
    "Population": "7,370",
    "Density": 180.1
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Thừa Đức",
    "Population": "7,464",
    "Density": 177.41
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Vang Quới Đông",
    "Population": "4,609",
    "Density": 377.17
  },
  {
    "Province": "Bến Tre",
    "District": "Bình Đại",
    "Ward": "Vang Quới Tây",
    "Population": "5,949",
    "Density": 571.09
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "An Hiệp",
    "Population": "5,524",
    "Density": 770.24
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "An Hóa",
    "Population": "3,997",
    "Density": 1021.28
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "An Khánh",
    "Population": "8,810",
    "Density": 737.3
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "An Phước",
    "Population": "3,765",
    "Density": 586.89
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Châu Thành",
    "Population": "3,538",
    "Density": 1132.38
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Giao Hòa",
    "Population": "3,478",
    "Density": 571.31
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Giao Long",
    "Population": "3,312",
    "Density": 631.69
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Hữu Định",
    "Population": "8,810",
    "Density": 657.41
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Phú An Hòa",
    "Population": "5,039",
    "Density": 902.8
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Phú Đức",
    "Population": "7,376",
    "Density": 499.76
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Phước Thạnh",
    "Population": "5,656",
    "Density": 617.74
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Phú Túc",
    "Population": "8,852",
    "Density": 558.42
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Qưới Sơn",
    "Population": "11,037",
    "Density": 723.6
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Quới Thành",
    "Population": "4,942",
    "Density": 744.58
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Sơn Hòa",
    "Population": "5,329",
    "Density": 916.01
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Tam Phước",
    "Population": "9,458",
    "Density": 852.23
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Tân Phú",
    "Population": "12,208",
    "Density": 500.66
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Tân Thạch",
    "Population": "12,353",
    "Density": 1284.34
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Thành Triệu",
    "Population": "5,703",
    "Density": 639.94
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Tiên Long",
    "Population": "7,275",
    "Density": 546.38
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Tiên Thủy",
    "Population": "13,455",
    "Density": 740.51
  },
  {
    "Province": "Bến Tre",
    "District": "Châu Thành",
    "Ward": "Tường Đa",
    "Population": "4,871",
    "Density": 516.59
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Chợ Lách",
    "Population": "7,632",
    "Density": 927.53
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Hòa Nghĩa",
    "Population": "10,832",
    "Density": 620.6
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Hưng Khánh Trung B",
    "Population": "14,609",
    "Density": 618.13
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Long Thới",
    "Population": "14,418",
    "Density": 611.19
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Phú Phụng",
    "Population": "9,663",
    "Density": 741.03
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Phú Sơn",
    "Population": "12,664",
    "Density": 629.83
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Sơn Định",
    "Population": "11,627",
    "Density": 787.52
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Tân Thiềng",
    "Population": "10,711",
    "Density": 439.99
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Vĩnh Bình",
    "Population": "9,311",
    "Density": 470.75
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Vĩnh Hòa",
    "Population": "6,517",
    "Density": 775.18
  },
  {
    "Province": "Bến Tre",
    "District": "Chợ Lách",
    "Ward": "Vĩnh Thành",
    "Population": "15,554",
    "Density": 955.35
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Bình Hoà",
    "Population": "9,077",
    "Density": 677.29
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Bình Thành",
    "Population": "9,531",
    "Density": 607.03
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Châu Bình",
    "Population": "7,926",
    "Density": 271.75
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Châu Hòa",
    "Population": "8,848",
    "Density": 469.94
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Giồng Trôm",
    "Population": "9,857",
    "Density": 854.9
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Hưng Lễ",
    "Population": "6,862",
    "Density": 379.75
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Hưng Nhượng",
    "Population": "10,568",
    "Density": 546.38
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Hưng Phong",
    "Population": "5,066",
    "Density": 381.88
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Long Mỹ",
    "Population": "7,067",
    "Density": 579.17
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Lương Hòa",
    "Population": "10,591",
    "Density": 626.72
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Lương Phú",
    "Population": "5,973",
    "Density": 568.48
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Lương Quới",
    "Population": "4,578",
    "Density": 744.21
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Mỹ Thạnh",
    "Population": "8,015",
    "Density": 1102.17
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Phong Mỹ",
    "Population": "3,675",
    "Density": 360.93
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Phong Nẫm",
    "Population": "5,750",
    "Density": 562.62
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Phước Long",
    "Population": "8,150",
    "Density": 546.14
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Sơn Phú",
    "Population": "7,187",
    "Density": 492.09
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Tân Hào",
    "Population": "6,833",
    "Density": 661.66
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Tân Lợi Thạnh",
    "Population": "6,814",
    "Density": 557.47
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Tân Thanh",
    "Population": "10,951",
    "Density": 632.82
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Thạnh Phú Đông",
    "Population": "9,742",
    "Density": 449.27
  },
  {
    "Province": "Bến Tre",
    "District": "Giồng Trôm",
    "Ward": "Thuận Điền",
    "Population": "5,683",
    "Density": 564.13
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Hòa Lộc",
    "Population": "8,187",
    "Density": 613.67
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Khánh Thạnh Tân",
    "Population": "12,017",
    "Density": 799.53
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Nhuận Phú Tân",
    "Population": "12,281",
    "Density": 670.87
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Phước Mỹ Trung",
    "Population": "7,071",
    "Density": 859.08
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Tân Bình",
    "Population": "7,566",
    "Density": 723.33
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Tân Phú Tây",
    "Population": "6,555",
    "Density": 650.75
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Tân Thành Bình",
    "Population": "12,120",
    "Density": 677.59
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Tân Thanh Tây",
    "Population": "6,131",
    "Density": 612.12
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Thành An",
    "Population": "7,480",
    "Density": 664.36
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Thạnh Ngãi",
    "Population": "7,770",
    "Density": 664.1
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Bắc",
    "Ward": "Thanh Tân",
    "Population": "10,336",
    "Density": 511.13
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "An Định",
    "Population": "11,036",
    "Density": 724.1
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "An Thạnh",
    "Population": "12,186",
    "Density": 905.42
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "An Thới",
    "Population": "7,203",
    "Density": 650.03
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Bình Khánh Đông",
    "Population": "6,348",
    "Density": 626.34
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Bình Khánh Tây",
    "Population": "3,799",
    "Density": 676.34
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Cẩm Sơn",
    "Population": "11,475",
    "Density": 475.45
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Đa Phước Hội",
    "Population": "13,878",
    "Density": 776.83
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Định Thủy",
    "Population": "9,978",
    "Density": 678.08
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Hương Mỹ",
    "Population": "10,926",
    "Density": 488.88
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Minh Đức",
    "Population": "8,711",
    "Density": 510.52
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Mỏ Cày",
    "Population": "11,330",
    "Density": 2158.88
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Ngãi Đăng",
    "Population": "5,118",
    "Density": 584.85
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Phước Hiệp",
    "Population": "6,471",
    "Density": 611.86
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Tân Trung",
    "Population": "7,795",
    "Density": 554.06
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Thành Thới A",
    "Population": "10,025",
    "Density": 403.88
  },
  {
    "Province": "Bến Tre",
    "District": "Mỏ Cày Nam",
    "Ward": "Thành Thới B",
    "Population": "8,849",
    "Density": 651.62
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "An Điền",
    "Population": "5,590",
    "Density": 136.46
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "An Nhơn",
    "Population": "5,466",
    "Density": 204.17
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "An Quy",
    "Population": "6,577",
    "Density": 253.59
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "An Thạnh",
    "Population": "4,307",
    "Density": 499.61
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "An Thuận",
    "Population": "8,846",
    "Density": 441.53
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Bình Thạnh",
    "Population": "8,100",
    "Density": 434.62
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Đại Điền",
    "Population": "5,346",
    "Density": 463.54
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Giao Thạnh",
    "Population": "6,229",
    "Density": 320.08
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Hòa Lợi",
    "Population": "9,397",
    "Density": 468.05
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Mỹ An",
    "Population": "8,410",
    "Density": 260.9
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Mỹ Hưng",
    "Population": "6,794",
    "Density": 503.93
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Phú Khánh",
    "Population": "6,018",
    "Density": 440.3
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Quới Điền",
    "Population": "6,250",
    "Density": 392.71
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Tân Phong",
    "Population": "7,445",
    "Density": 522.35
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Thạnh Hải",
    "Population": "8,065",
    "Density": 180.16
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Thạnh Phong",
    "Population": "9,206",
    "Density": 196.74
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Thạnh Phú",
    "Population": "9,317",
    "Density": 817.07
  },
  {
    "Province": "Bến Tre",
    "District": "Thạnh Phú",
    "Ward": "Thới Thạnh",
    "Population": "6,753",
    "Density": 332.23
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Dũng",
    "Population": "1,406",
    "Density": 33.02
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Hòa",
    "Population": "9,305",
    "Density": 225.47
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Hưng",
    "Population": "1,163",
    "Density": 17.38
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Lão",
    "Population": "3,401",
    "Density": 222.94
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Nghĩa",
    "Population": 594,
    "Density": 16.19
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Quang",
    "Population": "1,102",
    "Density": 19.79
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Tân",
    "Population": "2,835",
    "Density": 119.68
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Toàn",
    "Population": 649,
    "Density": 2.47
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Trung",
    "Population": "2,037",
    "Density": 30.41
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Vinh",
    "Population": "1,708",
    "Density": 20.03
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "An Nhơn",
    "Population": "178,424",
    "Density": 728.98
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Bình Định",
    "Population": "17,165",
    "Density": 2816.98
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Đập Đá",
    "Population": "16,977",
    "Density": 3364.71
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn An",
    "Population": "10,059",
    "Density": 1123.15
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Hạnh",
    "Population": "10,696",
    "Density": 993.68
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Hậu",
    "Population": "13,297",
    "Density": 1078.86
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Hoà (Nhơn Hòa)",
    "Population": "17,864",
    "Density": 647.13
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Hưng",
    "Population": "12,353",
    "Density": 1481.96
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Khánh",
    "Population": "8,530",
    "Density": 978.49
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Lộc",
    "Population": "8,901",
    "Density": 728.99
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Mỹ",
    "Population": "11,264",
    "Density": 640.66
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Phong",
    "Population": "8,565",
    "Density": 1048.3
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Phúc",
    "Population": "10,607",
    "Density": 1029.21
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Tân",
    "Population": "7,788",
    "Density": 123.38
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Thành",
    "Population": "15,474",
    "Density": 1204.86
  },
  {
    "Province": "Bình Định",
    "District": "An Lão",
    "Ward": "Nhơn Thọ",
    "Population": "8,884",
    "Density": 271.81
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Đức",
    "Population": "8,186",
    "Density": 286.87
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Hảo Đông",
    "Population": "6,290",
    "Density": 172.5
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Hảo Tây",
    "Population": "3,557",
    "Density": 130.7
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Hữu",
    "Population": "5,688",
    "Density": 143.39
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Mỹ",
    "Population": "6,151",
    "Density": 196.97
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Nghĩa",
    "Population": "10,207",
    "Density": 103.84
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Phong",
    "Population": "6,739",
    "Density": 215.88
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Sơn",
    "Population": 387,
    "Density": 6.2
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Thạnh",
    "Population": "7,889",
    "Density": 456.88
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Tín",
    "Population": "7,733",
    "Density": 239.98
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Tường Đông",
    "Population": "4,591",
    "Density": 79.14
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Ân Tường Tây",
    "Population": "7,790",
    "Density": 141.15
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Bok Tới",
    "Population": "1,346",
    "Density": 12.86
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Dak Mang",
    "Population": 999,
    "Density": 7.99
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Ân",
    "Ward": "Tăng Bạt Hổ",
    "Population": "6,884",
    "Density": 1328.14
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Bồng Sơn",
    "Population": "17,493",
    "Density": 1026.83
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Châu",
    "Population": "8,686",
    "Density": 382.53
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Châu Bắc",
    "Population": "9,430",
    "Density": 422.51
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Đức",
    "Population": "14,016",
    "Density": 219.09
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Hải",
    "Population": "6,969",
    "Density": 1478.68
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Hảo",
    "Population": "12,575",
    "Density": 324.63
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Hương",
    "Population": "16,173",
    "Density": 1465.34
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Mỹ",
    "Population": "13,175",
    "Density": 269.86
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Phú",
    "Population": "8,795",
    "Density": 218.89
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Sơn",
    "Population": "9,491",
    "Density": 159.82
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Tân",
    "Population": "17,750",
    "Density": 638.4
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Thanh",
    "Population": "12,156",
    "Density": 738.02
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Thanh Tây",
    "Population": "10,873",
    "Density": 772.72
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Hoài Xuân",
    "Population": "8,117",
    "Density": 817.29
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Tam Quan",
    "Population": "11,038",
    "Density": 1497.53
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Tam Quan Bắc",
    "Population": "17,210",
    "Density": 2290.51
  },
  {
    "Province": "Bình Định",
    "District": "Hoài Nhơn",
    "Ward": "Tam Quan Nam",
    "Population": "11,643",
    "Density": 1263.52
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Chánh",
    "Population": "6,341",
    "Density": 542.06
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Hải",
    "Population": "5,538",
    "Density": 125.35
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Hanh",
    "Population": "15,347",
    "Density": 344.9
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Hiệp",
    "Population": "7,492",
    "Density": 182
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Hưng",
    "Population": "7,520",
    "Density": 182.51
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Khánh",
    "Population": "13,541",
    "Density": 446.79
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Lâm",
    "Population": "7,087",
    "Density": 102.27
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Minh",
    "Population": "15,012",
    "Density": 595.9
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Nhơn",
    "Population": "9,791",
    "Density": 253.62
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Sơn",
    "Population": "5,010",
    "Density": 43.81
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Tài",
    "Population": "10,145",
    "Density": 262.87
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Tân",
    "Population": "16,552",
    "Density": 587.6
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Thắng",
    "Population": "7,795",
    "Density": 877.47
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Thành",
    "Population": "8,488",
    "Density": 204.79
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Tiến",
    "Population": "11,367",
    "Density": 645.27
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Trinh",
    "Population": "13,230",
    "Density": 274.97
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Cát Tường",
    "Population": "16,808",
    "Density": 578.53
  },
  {
    "Province": "Bình Định",
    "District": "Phù Cát",
    "Ward": "Ngô Mây",
    "Population": "10,978",
    "Density": 1394.81
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Bình Dương",
    "Population": "5,434",
    "Density": 1274.21
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ An",
    "Population": "8,216",
    "Density": 343.23
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Cát",
    "Population": "6,567",
    "Density": 741.67
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Chánh",
    "Population": "13,685",
    "Density": 586.79
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Chánh Tây",
    "Population": "4,356",
    "Density": 194.16
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Châu",
    "Population": "8,316",
    "Density": 262.78
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Đức",
    "Population": "7,165",
    "Density": 223.17
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Hiệp",
    "Population": "13,500",
    "Density": 237.38
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Hòa",
    "Population": "8,815",
    "Density": 196.73
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Lộc",
    "Population": "7,239",
    "Density": 194.08
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Lợi",
    "Population": "7,322",
    "Density": 282.39
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Phong",
    "Population": "8,658",
    "Density": 244.09
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Quang",
    "Population": "6,725",
    "Density": 325.78
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Tài",
    "Population": "10,231",
    "Density": 360.84
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Thắng",
    "Population": "10,505",
    "Density": 384.57
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Thành",
    "Population": "10,435",
    "Density": 298.4
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Thọ",
    "Population": "14,631",
    "Density": 422.18
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Mỹ Trinh",
    "Population": "6,290",
    "Density": 121.31
  },
  {
    "Province": "Bình Định",
    "District": "Phù Mỹ",
    "Ward": "Phù Mỹ",
    "Population": "11,214",
    "Density": 1059.82
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Bùi Thị Xuân",
    "Population": "15,363",
    "Density": 311.64
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Đống Đa",
    "Population": "29,030",
    "Density": 7088.61
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Ghềnh Ráng",
    "Population": "10,519",
    "Density": 411.43
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Hải Cảng",
    "Population": "17,448",
    "Density": 4368.99
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Lê Hồng Phong",
    "Population": "14,169",
    "Density": 10618.26
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Lê Lợi",
    "Population": "12,745",
    "Density": 12930.03
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Lý Thường Kiệt",
    "Population": "5,444",
    "Density": 8145.8
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Ngô Mây",
    "Population": "22,690",
    "Density": 20599.18
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nguyễn Văn Cừ",
    "Population": "19,727",
    "Density": 14076.64
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nhơn Bình",
    "Population": "18,387",
    "Density": 1727.45
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nhơn Châu",
    "Population": "1,953",
    "Density": 549.71
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nhơn Hải",
    "Population": "5,957",
    "Density": 514.64
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nhơn Hội",
    "Population": "3,656",
    "Density": 138.26
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nhơn Lý",
    "Population": "8,257",
    "Density": 560.75
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Nhơn Phú",
    "Population": "20,067",
    "Density": 1557.27
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Phước Mỹ",
    "Population": "5,249",
    "Density": 75.27
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Quang Trung",
    "Population": "21,838",
    "Density": 2763.5
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Thị Nại",
    "Population": "11,013",
    "Density": 15002.25
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Trần Hưng Đạo",
    "Population": "9,073",
    "Density": 22999.32
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Trần Phú",
    "Population": "11,134",
    "Density": 35761.55
  },
  {
    "Province": "Bình Định",
    "District": "Qui Nhơn",
    "Ward": "Trần Quang Diệu",
    "Population": "16,816",
    "Density": 1553.44
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Bình Hòa",
    "Population": "8,228",
    "Density": 599.23
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Bình Nghi",
    "Population": "13,491",
    "Density": 276.9
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Bình Tân",
    "Population": "6,165",
    "Density": 56.01
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Bình Thành",
    "Population": "9,349",
    "Density": 165.37
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Bình Thuận",
    "Population": "7,198",
    "Density": 175.96
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Bình Tường",
    "Population": "9,019",
    "Density": 254.8
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Phú Phong",
    "Population": "19,930",
    "Density": 2516.92
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây An",
    "Population": "4,888",
    "Density": 461.05
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây Bình",
    "Population": "5,417",
    "Density": 725.82
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây Giang",
    "Population": "11,292",
    "Density": 154.45
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây Phú",
    "Population": "8,184",
    "Density": 137.25
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây Thuận",
    "Population": "6,959",
    "Density": 89.05
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây Vinh",
    "Population": "6,453",
    "Density": 925.68
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Tây Xuân",
    "Population": "5,569",
    "Density": 150.68
  },
  {
    "Province": "Bình Định",
    "District": "Tây Sơn",
    "Ward": "Vĩnh An",
    "Population": "1,167",
    "Density": 11.03
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Diêu Trì",
    "Population": "12,115",
    "Density": 2075.8
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước An",
    "Population": "18,997",
    "Density": 571.42
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Hiệp",
    "Population": "15,558",
    "Density": 967.18
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Hòa",
    "Population": "15,314",
    "Density": 1180.91
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Hưng",
    "Population": "12,820",
    "Density": 1270.82
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Lộc",
    "Population": "15,215",
    "Density": 1278.89
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Nghĩa",
    "Population": "4,733",
    "Density": 688.54
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Quang",
    "Population": "12,727",
    "Density": 1178.21
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Sơn",
    "Population": "22,910",
    "Density": 1163.89
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Thắng",
    "Population": "9,440",
    "Density": 702.64
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Thành",
    "Population": "10,709",
    "Density": 303.38
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Phước Thuận",
    "Population": "16,349",
    "Density": 1154.35
  },
  {
    "Province": "Bình Định",
    "District": "Tuy Phước",
    "Ward": "Tuy Phước",
    "Population": "13,098",
    "Density": 2017.25
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Canh Hiển",
    "Population": "2,508",
    "Density": 68.08
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Canh Hiệp",
    "Population": "1,923",
    "Density": 15.16
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Canh Hòa",
    "Population": "1,726",
    "Density": 32.5
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Canh Liên",
    "Population": "2,068",
    "Density": 5.38
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Canh Thuận",
    "Population": "2,686",
    "Density": 31.99
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Canh Vinh",
    "Population": "7,957",
    "Density": 80.15
  },
  {
    "Province": "Bình Định",
    "District": "Vân Canh",
    "Ward": "Vân Canh",
    "Population": "5,793",
    "Density": 305.01
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Hảo",
    "Population": "2,649",
    "Density": 17.18
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Hiệp",
    "Population": "2,830",
    "Density": 33.77
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Hòa",
    "Population": "1,586",
    "Density": 51.68
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Kim",
    "Population": "1,772",
    "Density": 13.02
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Quang",
    "Population": "3,735",
    "Density": 152.71
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Sơn",
    "Population": "2,789",
    "Density": 14.37
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Thạnh",
    "Population": "5,278",
    "Density": 557.04
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Thịnh",
    "Population": "5,984",
    "Density": 119.28
  },
  {
    "Province": "Bình Định",
    "District": "Vĩnh Thạnh",
    "Ward": "Vĩnh Thuận",
    "Population": "1,355",
    "Density": 38.08
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Bình Mỹ",
    "Population": "7,548",
    "Density": 118.74
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Đất Cuốc",
    "Population": "2,678",
    "Density": 87.64
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Hiếu Liêm",
    "Population": "1,965",
    "Density": 43.72
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Lạc An",
    "Population": "6,953",
    "Density": 187.54
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Tân Bình",
    "Population": "6,272",
    "Density": 291.07
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Tân Định",
    "Population": "6,788",
    "Density": 79.5
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Tân Lập",
    "Population": "2,467",
    "Density": 88.57
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Tân Mỹ",
    "Population": "4,494",
    "Density": 112.69
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Tân Thành",
    "Population": "4,570",
    "Density": 162.39
  },
  {
    "Province": "Bình Dương",
    "District": "Bắc Tân Uyên",
    "Ward": "Thường Tân",
    "Population": "4,724",
    "Density": 215.95
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Cây Trường II",
    "Population": "4,312",
    "Density": 96.31
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Hưng Hòa",
    "Population": "5,815",
    "Density": 253.42
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Lai Hưng",
    "Population": "10,951",
    "Density": 216.47
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Lai Uyên",
    "Population": "11,435",
    "Density": 134.01
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Long Nguyên",
    "Population": "11,498",
    "Density": 150.27
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Tân Hưng",
    "Population": "5,923",
    "Density": 189.15
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Trừ Văn Thố",
    "Population": "5,777",
    "Density": 211.36
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Bến Cát",
    "Population": "137,107",
    "Density": 564.11
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "An Điền",
    "Population": "12,254",
    "Density": 395.95
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "An Tây",
    "Population": "13,427",
    "Density": 302.81
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Chánh Phú Hòa",
    "Population": "11,495",
    "Density": 261.77
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Hòa Lợi",
    "Population": "17,197",
    "Density": 606.23
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Mỹ Phước",
    "Population": "33,763",
    "Density": 1577.05
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Phú An",
    "Population": "11,171",
    "Density": 562.12
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Tân Định",
    "Population": "17,962",
    "Density": 1106.24
  },
  {
    "Province": "Bình Dương",
    "District": "Bàu Bàng",
    "Ward": "Thới Hòa",
    "Population": "19,838",
    "Density": 522.58
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "An Lập",
    "Population": "6,316",
    "Density": 95.78
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Dầu Tiếng",
    "Population": "18,196",
    "Density": 684.24
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Định An",
    "Population": "6,699",
    "Density": 97.57
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Định Hiệp",
    "Population": "7,488",
    "Density": 135.57
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Định Thành",
    "Population": "3,203",
    "Density": 54.85
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Long Hoà",
    "Population": "9,470",
    "Density": 215.05
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Long Tân",
    "Population": "5,699",
    "Density": 98.32
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Minh Hoà",
    "Population": "7,687",
    "Density": 82
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Minh Tân",
    "Population": "6,791",
    "Density": 104.45
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Minh Thạnh",
    "Population": "8,085",
    "Density": 125.51
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Thanh An",
    "Population": "9,976",
    "Density": 167.76
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Thanh Tuyền",
    "Population": "13,811",
    "Density": 216.49
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Dĩ An",
    "Population": "298,515",
    "Density": 5017.31
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "An Bình",
    "Population": "62,301",
    "Density": 18077.65
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Bình An",
    "Population": "22,564",
    "Density": 4176.82
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Bình Thắng",
    "Population": "12,770",
    "Density": 2303.43
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Dĩ An",
    "Population": "73,859",
    "Density": 7683.32
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Đông Hòa",
    "Population": "46,900",
    "Density": 4246.65
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Tân Bình",
    "Population": "15,214",
    "Density": 1459.52
  },
  {
    "Province": "Bình Dương",
    "District": "Dầu Tiếng",
    "Ward": "Tân Đông Hiệp",
    "Population": "64,907",
    "Density": 4628.28
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Bình",
    "Population": "14,173",
    "Density": 223.29
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Linh",
    "Population": "4,081",
    "Density": 163.2
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Long",
    "Population": "2,414",
    "Density": 95.02
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Thái",
    "Population": "7,471",
    "Density": 115.28
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Phước Hoà",
    "Population": "13,696",
    "Density": 221.87
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Phước Sang",
    "Population": "3,085",
    "Density": 119.44
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Phước Vĩnh",
    "Population": "13,520",
    "Density": 413.41
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tam Lập",
    "Population": "2,948",
    "Density": 24.76
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tân Hiệp",
    "Population": "3,876",
    "Density": 127.6
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tân Long",
    "Population": "6,480",
    "Density": 123.82
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Vĩnh Hoà",
    "Population": "11,811",
    "Density": 270.43
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tân Uyên",
    "Population": "156,366",
    "Density": 737.85
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Bạch Đằng",
    "Population": "5,542",
    "Density": 508.67
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Hội Nghĩa",
    "Population": "13,584",
    "Density": 773.58
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Khánh Bình",
    "Population": "20,871",
    "Density": 982.9
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Phú Chánh",
    "Population": "9,979",
    "Density": 580.48
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tân Hiệp",
    "Population": "14,204",
    "Density": 501.04
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tân Phước Khánh",
    "Population": "23,582",
    "Density": 2395.38
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Tân Vĩnh Hiệp",
    "Population": "13,988",
    "Density": 793.15
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Thái Hòa",
    "Population": "21,428",
    "Density": 1912.36
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Thạnh Hội",
    "Population": "2,500",
    "Density": 597.37
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Thạnh Phước",
    "Population": "7,895",
    "Density": 990.06
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Uyên Hưng",
    "Population": "15,540",
    "Density": 462.62
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Vĩnh Tân",
    "Population": "7,253",
    "Density": 224.86
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Thuận An",
    "Population": "375,571",
    "Density": 4488.82
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Phú",
    "Population": "50,930",
    "Density": 4715.74
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Sơn",
    "Population": "6,018",
    "Density": 1047.03
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "An Thạnh",
    "Population": "25,259",
    "Density": 3412.69
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Bình Chuẩn",
    "Population": "44,521",
    "Density": 3781.62
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Bình Hòa",
    "Population": "81,690",
    "Density": 5785.82
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Bình Nhâm",
    "Population": "12,624",
    "Density": 2421.22
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Hưng Định",
    "Population": "10,763",
    "Density": 3714.2
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Lái Thiêu",
    "Population": "52,147",
    "Density": 6483.61
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Thuận Giao",
    "Population": "75,600",
    "Density": 6655.52
  },
  {
    "Province": "Bình Dương",
    "District": "Phú Giáo",
    "Ward": "Vĩnh Phú",
    "Population": "16,019",
    "Density": 2537.54
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Chánh Mỹ",
    "Population": "10,507",
    "Density": 1518.16
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Chánh Nghĩa",
    "Population": "25,917",
    "Density": 5322.75
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Định Hòa",
    "Population": "12,867",
    "Density": 900.17
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Hiệp An",
    "Population": "14,650",
    "Density": 2173.72
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Hiệp Thành",
    "Population": "28,323",
    "Density": 4840.55
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Phú Cường",
    "Population": "22,061",
    "Density": 8747.77
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Phú Hòa",
    "Population": "27,613",
    "Density": 4239.22
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Phú Lợi",
    "Population": "29,212",
    "Density": 4049.52
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Phú Mỹ",
    "Population": "10,727",
    "Density": 846.65
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Phú Thọ",
    "Population": "16,009",
    "Density": 3315.45
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Tân An",
    "Population": "12,691",
    "Density": 1239.96
  },
  {
    "Province": "Bình Dương",
    "District": "Thủ Dầu Một",
    "Ward": "Tương Bình Hiệp",
    "Population": "12,268",
    "Density": 2299.4
  },
  {
    "Province": "Bình Phước",
    "District": "Thủ Dầu Một",
    "Ward": "Bình Long",
    "Population": "42,978",
    "Density": 427.34
  },
  {
    "Province": "Bình Phước",
    "District": "Thủ Dầu Một",
    "Ward": "An Lộc",
    "Population": "19,321",
    "Density": 1512.41
  },
  {
    "Province": "Bình Phước",
    "District": "Thủ Dầu Một",
    "Ward": "Thanh Lương",
    "Population": "13,276",
    "Density": 279.14
  },
  {
    "Province": "Bình Phước",
    "District": "Thủ Dầu Một",
    "Ward": "Thanh Phú",
    "Population": "10,381",
    "Density": 258
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Bình Minh",
    "Population": "11,675",
    "Density": 86.6
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Bom Bo",
    "Population": "12,103",
    "Density": 96.38
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Đak Nhau",
    "Population": "16,958",
    "Density": 97.52
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Đăng Hà",
    "Population": "6,996",
    "Density": 37.59
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Đoàn Kết",
    "Population": "5,912",
    "Density": 81.25
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Đồng Nai",
    "Population": "4,351",
    "Density": 44.82
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Đức Liễu",
    "Population": "12,610",
    "Density": 142.09
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Đức Phong",
    "Population": "8,704",
    "Density": 834.68
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Minh Hưng",
    "Population": "10,008",
    "Density": 171.71
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Nghĩa Bình",
    "Population": "4,902",
    "Density": 88.53
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Nghĩa Trung",
    "Population": "8,572",
    "Density": 108.5
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Phước Sơn",
    "Population": "5,877",
    "Density": 109.13
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Phú Sơn",
    "Population": "5,027",
    "Density": 40.38
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Thống Nhất",
    "Population": "12,675",
    "Density": 86.84
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đăng",
    "Ward": "Thọ Sơn",
    "Population": "7,105",
    "Density": 91.54
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Hưng Phước",
    "Population": "4,884",
    "Density": 94.98
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Phước Thiện",
    "Population": "3,852",
    "Density": 27.47
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Tân Thành",
    "Population": "9,016",
    "Density": 225.13
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Tân Tiến",
    "Population": "7,954",
    "Density": 188.29
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Thanh Bình",
    "Population": "7,225",
    "Density": 544.42
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Thanh Hòa",
    "Population": "7,988",
    "Density": 162.57
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Đốp",
    "Ward": "Thiện Hưng",
    "Population": "10,657",
    "Density": 206.82
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Bình Thắng",
    "Population": "8,410",
    "Density": 143.7
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Bù Gia Mập",
    "Population": "6,112",
    "Density": 17.69
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Đa Kia",
    "Population": "9,219",
    "Density": 137.43
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Đak Ơ",
    "Population": "12,972",
    "Density": 52.24
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Đức Hạnh",
    "Population": "5,862",
    "Density": 121.84
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Phú Nghĩa",
    "Population": "10,609",
    "Density": 72.02
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Phước Minh",
    "Population": "7,691",
    "Density": 107.8
  },
  {
    "Province": "Bình Phước",
    "District": "Bù Gia Mập",
    "Ward": "Phú Văn",
    "Population": "8,367",
    "Density": 107.73
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Chơn Thành",
    "Population": "14,352",
    "Density": 440.34
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Minh Hưng",
    "Population": "15,200",
    "Density": 263.22
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Minh Lập",
    "Population": "6,911",
    "Density": 141.94
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Minh Long",
    "Population": "6,126",
    "Density": 159.12
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Minh Thắng",
    "Population": "4,286",
    "Density": 113.78
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Minh Thành",
    "Population": "5,093",
    "Density": 102.88
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Nha Bích",
    "Population": "4,785",
    "Density": 97.89
  },
  {
    "Province": "Bình Phước",
    "District": "Chơn Thành",
    "Ward": "Thành Tâm",
    "Population": "5,676",
    "Density": 148.92
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Đồng Tâm",
    "Population": "7,270",
    "Density": 83.37
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Đồng Tiến",
    "Population": "11,664",
    "Density": 199.71
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Hòa",
    "Population": "2,886",
    "Density": 21.56
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Hưng",
    "Population": "4,013",
    "Density": 33.71
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Lập",
    "Population": "9,120",
    "Density": 127.69
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Lợi",
    "Population": "3,843",
    "Density": 31.48
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Phú",
    "Population": "8,315",
    "Density": 253.42
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Phước",
    "Population": "7,154",
    "Density": 73.61
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Tiến",
    "Population": "8,825",
    "Density": 267.85
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Thuận Lợi",
    "Population": "9,938",
    "Density": 133.72
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Thuận Phú",
    "Population": "9,162",
    "Density": 97.24
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Đồng Xoài",
    "Population": "80,099",
    "Density": 485.98
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Bình",
    "Population": "10,558",
    "Density": 2039.37
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Đồng",
    "Population": "7,822",
    "Density": 1070.47
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Phú",
    "Population": "13,483",
    "Density": 1463.51
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Thành",
    "Population": "10,422",
    "Density": 188.06
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Thiện",
    "Population": "9,186",
    "Density": 2535.54
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tân Xuân",
    "Population": "9,778",
    "Density": 1000.79
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tiến Hưng",
    "Population": "10,172",
    "Density": 204.21
  },
  {
    "Province": "Bình Phước",
    "District": "Đồng Phú",
    "Ward": "Tiến Thành",
    "Population": "8,678",
    "Density": 354.15
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "An Khương",
    "Population": "6,756",
    "Density": 141.11
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "An Phú",
    "Population": "11,590",
    "Density": 217.38
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Đồng Nơ",
    "Population": "5,341",
    "Density": 111.84
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Minh Đức",
    "Population": "5,861",
    "Density": 112.39
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Minh Tâm",
    "Population": "4,847",
    "Density": 65.85
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Phước An",
    "Population": "9,172",
    "Density": 200.46
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Tân Hiệp",
    "Population": "7,123",
    "Density": 101.22
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Tân Hưng",
    "Population": "11,782",
    "Density": 121.75
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Tân Khai",
    "Population": "11,567",
    "Density": 257.04
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Tân Lợi",
    "Population": "8,492",
    "Density": 183.44
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Tân Quan",
    "Population": "6,921",
    "Density": 121.41
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Thanh An",
    "Population": "10,235",
    "Density": 164.93
  },
  {
    "Province": "Bình Phước",
    "District": "Hớn Quản",
    "Ward": "Thanh Bình",
    "Population": "9,242",
    "Density": 327.22
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc An",
    "Population": "6,903",
    "Density": 103.44
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Điền",
    "Population": "7,636",
    "Density": 236.94
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Hiệp",
    "Population": "7,656",
    "Density": 253.55
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Hòa",
    "Population": "5,411",
    "Density": 105.76
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Hưng",
    "Population": "7,734",
    "Density": 262.32
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Khánh",
    "Population": "5,747",
    "Density": 155.08
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Ninh",
    "Population": "10,504",
    "Density": 1260.83
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Phú",
    "Population": "6,258",
    "Density": 182.27
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Quang",
    "Population": "5,719",
    "Density": 139.95
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Tấn",
    "Population": "10,341",
    "Density": 75.77
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Thái",
    "Population": "6,774",
    "Density": 415.94
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Thạnh",
    "Population": "3,098",
    "Density": 42.27
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Thành",
    "Population": "6,459",
    "Density": 47.12
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Thiện",
    "Population": "7,616",
    "Density": 147.42
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Thịnh",
    "Population": "3,596",
    "Density": 48.44
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Lộc Thuận",
    "Population": "8,414",
    "Density": 194.51
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Phước Long",
    "Population": "45,206",
    "Density": 198.45
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Phước Bình",
    "Population": "13,665",
    "Density": 981.68
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Phước Tín",
    "Population": "13,226",
    "Density": 81.42
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Sơn Giang",
    "Population": "6,986",
    "Density": 250.38
  },
  {
    "Province": "Bình Phước",
    "District": "Lộc Ninh",
    "Ward": "Thác Mơ",
    "Population": "11,329",
    "Density": 481.8
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Bình Sơn",
    "Population": "8,053",
    "Density": 178.69
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Bình Tân",
    "Population": "9,623",
    "Density": 167.09
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Bù Nho",
    "Population": "11,317",
    "Density": 350.01
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Long Bình",
    "Population": "9,264",
    "Density": 96.58
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Long Hà",
    "Population": "14,546",
    "Density": 159.55
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Long Hưng",
    "Population": "7,985",
    "Density": 174.98
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Long Tân",
    "Population": "8,098",
    "Density": 106.58
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Phú Riềng",
    "Population": "14,259",
    "Density": 186.06
  },
  {
    "Province": "Bình Phước",
    "District": "Phú Riềng",
    "Ward": "Phú Trung",
    "Population": "4,463",
    "Density": 87.06
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Bình An",
    "Population": "4,592",
    "Density": 35.54
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Bình Tân",
    "Population": "6,361",
    "Density": 84.18
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Chợ Lầu",
    "Population": "12,636",
    "Density": 367.53
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Hải Ninh",
    "Population": "8,791",
    "Density": 183.96
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Hòa Thắng",
    "Population": "7,164",
    "Density": 35.95
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Hồng Phong",
    "Population": "1,357",
    "Density": 15.69
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Hồng Thái",
    "Population": "11,234",
    "Density": 157.39
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Lương Sơn",
    "Population": "12,901",
    "Density": 89.33
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Điền",
    "Population": "1,166",
    "Density": 10.48
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Hiệp",
    "Population": "4,943",
    "Density": 227.45
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Hòa",
    "Population": "8,569",
    "Density": 113.53
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Lâm",
    "Population": "1,684",
    "Density": 4.24
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Rí Thành",
    "Population": "11,614",
    "Density": 514.26
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Sơn",
    "Population": "3,327",
    "Density": 17.59
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Thanh",
    "Population": "6,903",
    "Density": 247.03
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Phan Tiến",
    "Population": "1,444",
    "Density": 18.68
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Sông Bình",
    "Population": "4,083",
    "Density": 72.83
  },
  {
    "Province": "Bình Thuận",
    "District": "Bắc Bình",
    "Ward": "Sông Lũy",
    "Population": "8,132",
    "Density": 81.04
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Đa Kai",
    "Population": "9,785",
    "Density": 112.74
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Đông Hà",
    "Population": "7,510",
    "Density": 207.83
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Đức Chính",
    "Population": "5,361",
    "Density": 222.17
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Đức Hạnh",
    "Population": "8,465",
    "Density": 185.77
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Đức Tài",
    "Population": "18,259",
    "Density": 569.19
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Đức Tín",
    "Population": "9,198",
    "Density": 326.56
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Mê Pu",
    "Population": "11,964",
    "Density": 185.89
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Nam Chính",
    "Population": "8,963",
    "Density": 318.62
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Sùng Nhơn",
    "Population": "7,257",
    "Density": 146.24
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Tân Hà",
    "Population": "5,555",
    "Density": 90.71
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Trà Tân",
    "Population": "8,081",
    "Density": 216.05
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Võ Xu",
    "Population": "15,907",
    "Density": 566.11
  },
  {
    "Province": "Bình Thuận",
    "District": "Đức Linh",
    "Ward": "Vũ Hoà",
    "Population": "8,728",
    "Density": 368.01
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Sông Phan",
    "Population": "4,922",
    "Density": 78.4
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Sơn Mỹ",
    "Population": "6,586",
    "Density": 138.68
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Đức",
    "Population": "5,316",
    "Density": 47.67
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Hà",
    "Population": "6,995",
    "Density": 100.86
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Minh",
    "Population": "5,165",
    "Density": 1032.77
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Nghĩa",
    "Population": "11,612",
    "Density": 210.18
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Phúc",
    "Population": "6,623",
    "Density": 61.48
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Thắng",
    "Population": "9,055",
    "Density": 44.46
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Tân Xuân",
    "Population": "7,863",
    "Density": 106.3
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Tân",
    "Ward": "Thắng Hải",
    "Population": "5,350",
    "Density": ""
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Đa Mi",
    "Population": "3,946",
    "Density": 26.83
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Đông Giang",
    "Population": "2,502",
    "Density": 27.62
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Đông Tiến",
    "Population": "1,021",
    "Density": 9.18
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Chính",
    "Population": "13,972",
    "Density": 282.82
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Đức",
    "Population": "18,922",
    "Density": 326.3
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Hiệp",
    "Population": "12,250",
    "Density": 327.2
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Liêm",
    "Population": "10,915",
    "Density": 172.54
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Phú",
    "Population": "8,227",
    "Density": 74.32
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Thắng",
    "Population": "18,688",
    "Density": 1035.92
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hàm Trí",
    "Population": "8,429",
    "Density": 118.5
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hồng Liêm",
    "Population": "9,854",
    "Density": 94.55
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Hồng Sơn",
    "Population": "13,420",
    "Density": 158.55
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "La Dạ",
    "Population": "3,284",
    "Density": 27.84
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Ma Lâm",
    "Population": "14,060",
    "Density": 806.42
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Phú Long",
    "Population": "15,625",
    "Density": 621.89
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Thuận Hòa",
    "Population": "5,687",
    "Density": 51.28
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Bắc",
    "Ward": "Thuận Minh",
    "Population": "6,844",
    "Density": 54.73
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Hàm Cần",
    "Population": "3,077",
    "Density": 25.39
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Hàm Cường",
    "Population": "8,534",
    "Density": 101.36
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Hàm Kiệm",
    "Population": "7,061",
    "Density": 117.61
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Hàm Minh",
    "Population": "8,879",
    "Density": 112.93
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Hàm Mỹ",
    "Population": "14,069",
    "Density": 420.81
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Hàm Thạnh",
    "Population": "6,847",
    "Density": 60.93
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Mương Mán",
    "Population": "5,800",
    "Density": 317.74
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Mỹ Thạnh",
    "Population": 775,
    "Density": 3.74
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Lập",
    "Population": "9,411",
    "Density": 69.36
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Thành",
    "Population": "5,873",
    "Density": 97.36
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Thuận",
    "Population": "13,196",
    "Density": 197.15
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Thuận Nam",
    "Population": "12,287",
    "Density": 420.44
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Thuận Quí",
    "Population": "2,823",
    "Density": 55.26
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "La Gi",
    "Population": "104,525",
    "Density": 569.34
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Bình Tân",
    "Population": "18,191",
    "Density": 4879.04
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Phước Hội",
    "Population": "16,247",
    "Density": 6123.55
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Phước Lộc",
    "Population": "14,249",
    "Density": 8389.66
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân An",
    "Population": "12,684",
    "Density": 1919.11
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Bình",
    "Population": "6,761",
    "Density": 122.76
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Hải",
    "Population": "8,000",
    "Density": 224.75
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Phước",
    "Population": "10,924",
    "Density": 341.7
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Thiện",
    "Population": "7,191",
    "Density": 1772.06
  },
  {
    "Province": "Bình Thuận",
    "District": "Hàm Thuận Nam",
    "Ward": "Tân Tiến",
    "Population": "10,278",
    "Density": 243.54
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Bình Hưng",
    "Population": "10,515",
    "Density": 13622.05
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Đức Long",
    "Population": "17,329",
    "Density": 8346.5
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Đức Nghĩa",
    "Population": "9,758",
    "Density": 22423.94
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Đức Thắng",
    "Population": "8,674",
    "Density": 20750.2
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Hàm Tiến",
    "Population": "7,701",
    "Density": 851.86
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Hưng Long",
    "Population": "10,203",
    "Density": 14512.27
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Lạc Đạo",
    "Population": "12,970",
    "Density": 38532.38
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Mũi Né",
    "Population": "26,412",
    "Density": 780.27
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Phong Nẫm",
    "Population": "5,988",
    "Density": 1477.93
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Phú Hài",
    "Population": "12,635",
    "Density": 1088
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Phú Tài",
    "Population": "17,640",
    "Density": 5268.35
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Phú Thủy",
    "Population": "21,906",
    "Density": 5144.43
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Phú Trinh",
    "Population": "17,998",
    "Density": 11537.18
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Thanh Hải",
    "Population": "8,576",
    "Density": 9503.44
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Thiện Nghiệp",
    "Population": "6,041",
    "Density": 81.12
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Tiến Lợi",
    "Population": "7,841",
    "Density": 1223.47
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Tiến Thành",
    "Population": "6,838",
    "Density": 131.62
  },
  {
    "Province": "Bình Thuận",
    "District": "Phan Thiết",
    "Ward": "Xuân An",
    "Population": "7,302",
    "Density": 3081.66
  },
  {
    "Province": "Bình Thuận",
    "District": "Phú Quý",
    "Ward": "Long Hải",
    "Population": "8,742",
    "Density": 404.7
  },
  {
    "Province": "Bình Thuận",
    "District": "Phú Quý",
    "Ward": "Ngũ Phụng",
    "Population": "7,376",
    "Density": 335.52
  },
  {
    "Province": "Bình Thuận",
    "District": "Phú Quý",
    "Ward": "Tam Thanh",
    "Population": "9,620",
    "Density": 365.27
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Bắc Ruộng",
    "Population": "5,620",
    "Density": 60.32
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Đồng Kho",
    "Population": "6,322",
    "Density": 161.37
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Đức Bình",
    "Population": "7,200",
    "Density": 92.5
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Đức Phú",
    "Population": "7,213",
    "Density": 173.76
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Đức Tân",
    "Population": "6,717",
    "Density": 316.71
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Đức Thuận",
    "Population": "5,638",
    "Density": 44.64
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Gia An",
    "Population": "14,036",
    "Density": 133
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Gia Huynh",
    "Population": "5,513",
    "Density": 34.97
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Huy Khiêm",
    "Population": "7,741",
    "Density": 136.66
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Lạc Tánh",
    "Population": "15,810",
    "Density": 399.84
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "La Ngâu",
    "Population": "2,151",
    "Density": 22.49
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Măng Tố",
    "Population": "2,815",
    "Density": 54.91
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Nghị Đức",
    "Population": "9,515",
    "Density": 128.05
  },
  {
    "Province": "Bình Thuận",
    "District": "Tánh Linh",
    "Ward": "Suối Kiết",
    "Population": "5,735",
    "Density": 26.13
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Bình Thạnh",
    "Population": "2,983",
    "Density": 108.37
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Chí Công",
    "Population": "19,429",
    "Density": 777.19
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Hòa Minh",
    "Population": "5,716",
    "Density": 345.98
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Hòa Phú",
    "Population": "6,863",
    "Density": 541.97
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Liên Hương",
    "Population": "28,789",
    "Density": 2807.04
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Phan Dũng",
    "Population": 819,
    "Density": 2.46
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Phan Rí Cửa",
    "Population": "37,288",
    "Density": 13218.48
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Phong Phú",
    "Population": "6,859",
    "Density": 57.76
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Phú Lạc",
    "Population": "8,533",
    "Density": 105.79
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Phước Thể",
    "Population": "11,583",
    "Density": 1102.72
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Vĩnh Hảo",
    "Population": "6,435",
    "Density": 80.52
  },
  {
    "Province": "Bình Thuận",
    "District": "Tuy Phong",
    "Ward": "Vĩnh Tân",
    "Population": "5,411",
    "Density": 95.25
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Cái Nước",
    "Population": "14,047",
    "Density": 552.27
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Đông Hưng",
    "Population": "10,186",
    "Density": 300.13
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Đông Thới",
    "Population": "8,297",
    "Density": 279.49
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Hoà Mỹ",
    "Population": "8,882",
    "Density": 275.99
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Hưng Mỹ",
    "Population": "11,504",
    "Density": 323.15
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Lương Thế Trân",
    "Population": "10,498",
    "Density": 435.84
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Phú Hưng",
    "Population": "14,292",
    "Density": 348.17
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Tân Hưng",
    "Population": "16,653",
    "Density": 255.32
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Tân Hưng Đông",
    "Population": "16,107",
    "Density": 309.2
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Thạnh Phú",
    "Population": "13,950",
    "Density": 407.68
  },
  {
    "Province": "Cà Mau",
    "District": "Cái Nước",
    "Ward": "Trần Thới",
    "Population": "12,980",
    "Density": 309.17
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "An Xuyên",
    "Population": "19,944",
    "Density": 344.55
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Định Bình",
    "Population": "9,428",
    "Density": 412.6
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Hòa Tân",
    "Population": "8,421",
    "Density": 179.51
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Hòa Thành",
    "Population": "9,283",
    "Density": 525.21
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Lý Văn Lâm",
    "Population": "13,753",
    "Density": 567.79
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 1",
    "Population": "12,126",
    "Density": 3307.06
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 2",
    "Population": "6,289",
    "Density": 23579.92
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 4",
    "Population": "10,949",
    "Density": 5752.64
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 5",
    "Population": "21,821",
    "Density": 10357.41
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 6",
    "Population": "23,473",
    "Density": 1929.39
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 7",
    "Population": "11,421",
    "Density": 3284.54
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 8",
    "Population": "28,277",
    "Density": 3081.89
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Phường 9",
    "Population": "15,540",
    "Density": 2262.87
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Tắc Vân",
    "Population": "12,044",
    "Density": 2281.28
  },
  {
    "Province": "Cà Mau",
    "District": "Cà Mau",
    "Ward": "Tân Thành",
    "Population": "13,427",
    "Density": 382.55
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Đầm Dơi",
    "Population": "9,009",
    "Density": 830.32
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Ngọc Chánh",
    "Population": "10,714",
    "Density": 254.08
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Nguyễn Huân",
    "Population": "14,492",
    "Density": 125.55
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Quách Phẩm",
    "Population": "10,909",
    "Density": 289.41
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Quách Phẩm Bắc",
    "Population": "11,974",
    "Density": 327.14
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tạ An Khương",
    "Population": "10,095",
    "Density": 267.18
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tạ An Khương Đông",
    "Population": "8,647",
    "Density": 254
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tạ An Khương Nam",
    "Population": "7,776",
    "Density": 250.5
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tân Dân",
    "Population": "6,223",
    "Density": 193.24
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tân Đức",
    "Population": "13,398",
    "Density": 205.97
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tân Duyệt",
    "Population": "16,286",
    "Density": 312.02
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tân Thuận",
    "Population": "15,345",
    "Density": 142.32
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tân Tiến",
    "Population": "14,416",
    "Density": 152.56
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Tân Trung",
    "Population": "8,915",
    "Density": 264.12
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Thanh Tùng",
    "Population": "10,070",
    "Density": 216.78
  },
  {
    "Province": "Cà Mau",
    "District": "Đầm Dơi",
    "Ward": "Trần Phán",
    "Population": "13,759",
    "Density": 332.22
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Đất Mới",
    "Population": "8,087",
    "Density": 122.61
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Hàm Rồng",
    "Population": "6,179",
    "Density": 147.55
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Hàng Vịnh",
    "Population": "6,357",
    "Density": 261.68
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Hiệp Tùng",
    "Population": "5,538",
    "Density": 151.62
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Lâm Hải",
    "Population": "8,604",
    "Density": 89.64
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Năm Căn (Ngọc Hiển)",
    "Population": "18,480",
    "Density": 689.06
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Tam Giang",
    "Population": "8,241",
    "Density": 80.39
  },
  {
    "Province": "Cà Mau",
    "District": "Năm Căn",
    "Ward": "Tam Giang Đông",
    "Population": "4,743",
    "Density": 65.64
  },
  {
    "Province": "Cà Mau",
    "District": "Ngọc Hiển",
    "Ward": "Đất Mũi",
    "Population": "15,779",
    "Density": 149.07
  },
  {
    "Province": "Cà Mau",
    "District": "Ngọc Hiển",
    "Ward": "Tam Giang Tây",
    "Population": "10,734",
    "Density": 96.45
  },
  {
    "Province": "Cà Mau",
    "District": "Ngọc Hiển",
    "Ward": "Tân Ân",
    "Population": "15,411",
    "Density": 146.76
  },
  {
    "Province": "Cà Mau",
    "District": "Ngọc Hiển",
    "Ward": "Tân Ân Tây",
    "Population": "9,956",
    "Density": 86.42
  },
  {
    "Province": "Cà Mau",
    "District": "Ngọc Hiển",
    "Ward": "Viên An",
    "Population": "12,715",
    "Density": 121.36
  },
  {
    "Province": "Cà Mau",
    "District": "Ngọc Hiển",
    "Ward": "Viên An Đông",
    "Population": "13,766",
    "Density": 102.32
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Cái Đôi Vàm",
    "Population": "15,176",
    "Density": 723.46
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Phú Mỹ",
    "Population": "9,268",
    "Density": 230.08
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Phú Tân",
    "Population": "15,693",
    "Density": 282.32
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Phú Thuận",
    "Population": "10,306",
    "Density": 218.08
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Rạch Chèo",
    "Population": "10,173",
    "Density": 216.15
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Tân Hải",
    "Population": "9,830",
    "Density": 211.96
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Tân Hưng Tây",
    "Population": "11,189",
    "Density": 258.32
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Việt Khái",
    "Population": "13,658",
    "Density": 152.07
  },
  {
    "Province": "Cà Mau",
    "District": "Phú Tân",
    "Ward": "Việt Thắng",
    "Population": "8,592",
    "Density": 216.15
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Biển Bạch",
    "Population": "6,725",
    "Density": 161.67
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Biển Bạch Đông",
    "Population": "10,478",
    "Density": 146.67
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Hồ Thị Kỷ",
    "Population": "18,767",
    "Density": 200.12
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Tân Bằng",
    "Population": "8,242",
    "Density": 178.61
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Tân Lộc",
    "Population": "10,699",
    "Density": 429.77
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Tân Lộc Bắc",
    "Population": "9,703",
    "Density": 311.79
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Tân Lộc Đông",
    "Population": "6,307",
    "Density": 157
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Tân Phú",
    "Population": "17,078",
    "Density": 182.18
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Thới Bình",
    "Population": "10,396",
    "Density": 466.54
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Thới Bình",
    "Population": "16,999",
    "Density": 174.23
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Trí Lực",
    "Population": "6,998",
    "Density": 196.58
  },
  {
    "Province": "Cà Mau",
    "District": "Thới Bình",
    "Ward": "Trí Phải",
    "Population": "11,894",
    "Density": 307.36
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Bình",
    "Population": "10,807",
    "Density": 301.04
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Bình Đông",
    "Population": "18,018",
    "Density": 266.57
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Bình Tây",
    "Population": "13,174",
    "Density": 220.38
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Bình Tây Bắc",
    "Population": "15,429",
    "Density": 174.02
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Hải",
    "Population": "13,064",
    "Density": 204.67
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Hưng",
    "Population": "17,448",
    "Density": 261.92
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Khánh Lộc",
    "Population": "7,883",
    "Density": 300.09
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Lợi An",
    "Population": "12,042",
    "Density": 258.14
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Phong Điền",
    "Population": "13,367",
    "Density": 183.58
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Phong Lạc",
    "Population": "8,317",
    "Density": 244.5
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Sông Đốc",
    "Population": "32,118",
    "Density": 1195.62
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Trần Hợi",
    "Population": "14,160",
    "Density": 149.99
  },
  {
    "Province": "Cà Mau",
    "District": "Trần Văn Thời",
    "Ward": "Trần Văn Thời",
    "Population": "10,425",
    "Density": 483
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "Khánh An",
    "Population": "18,317",
    "Density": 116.96
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "Khánh Hòa",
    "Population": "20,986",
    "Density": 89.94
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "Khánh Hội",
    "Population": "11,589",
    "Density": 312.67
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "Khánh Lâm",
    "Population": "13,757",
    "Density": 128.4
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "Khánh Tiến",
    "Population": "11,724",
    "Density": 174.21
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "Nguyễn Phích",
    "Population": "19,215",
    "Density": 122.95
  },
  {
    "Province": "Cà Mau",
    "District": "U Minh",
    "Ward": "U Minh",
    "Population": "6,717",
    "Density": 362.61
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Bảo Lạc",
    "Population": "3,681",
    "Density": 338.7
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Bảo Toàn",
    "Population": "2,816",
    "Density": 42.02
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Cô Ba",
    "Population": "3,157",
    "Density": 43.59
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Cốc Pàng",
    "Population": "3,038",
    "Density": 37.31
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Đình Phùng",
    "Population": "2,970",
    "Density": 53.71
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Hồng An",
    "Population": 723,
    "Density": 17.46
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Hồng Trị",
    "Population": "3,137",
    "Density": 79.82
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Hưng Đạo",
    "Population": "3,002",
    "Density": 87.18
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Hưng Thịnh",
    "Population": "2,407",
    "Density": 53.18
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Huy Giáp",
    "Population": "3,962",
    "Density": 52.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Khánh Xuân",
    "Population": "2,856",
    "Density": 48.26
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Kim Cúc",
    "Population": "2,795",
    "Density": 61.82
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Phan Thanh",
    "Population": "2,870",
    "Density": 55.76
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Sơn Lập",
    "Population": "1,603",
    "Density": 39.02
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Sơn Lộ",
    "Population": "2,836",
    "Density": 51.99
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Thượng Hà",
    "Population": "3,665",
    "Density": 57.31
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lạc",
    "Ward": "Xuân Trường",
    "Population": "3,844",
    "Density": 45.16
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Đức Hạnh",
    "Population": "4,628",
    "Density": 49.94
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Lý Bôn",
    "Population": "5,097",
    "Density": 43.56
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Mông Ân",
    "Population": "4,954",
    "Density": 103.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Nam Cao",
    "Population": "3,315",
    "Density": 41.24
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Nam Quang",
    "Population": "2,847",
    "Density": 62.75
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Pác Miầu",
    "Population": "4,793",
    "Density": 109.99
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Quảng Lâm",
    "Population": "5,161",
    "Density": 55.85
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Tân Việt",
    "Population": "1,820",
    "Density": 83.83
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Thạch Lâm",
    "Population": "5,705",
    "Density": 71.49
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Thái Học",
    "Population": "3,275",
    "Density": 74.52
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "TháI Sơn",
    "Population": "2,995",
    "Density": 62.35
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Vĩnh Phong",
    "Population": "2,485",
    "Density": 35.56
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Vĩnh Quang",
    "Population": "4,517",
    "Density": 80.56
  },
  {
    "Province": "Cao Bằng",
    "District": "Bảo Lâm",
    "Ward": "Yên Thổ",
    "Population": "4,344",
    "Density": 57.39
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Chu Trinh",
    "Population": "2,042",
    "Density": 73.75
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Đề Thám",
    "Population": "8,318",
    "Density": 733.19
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Duyệt Trung",
    "Population": "2,568",
    "Density": 249.32
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Hoà Chung",
    "Population": "3,295",
    "Density": 613.69
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Hợp Giang",
    "Population": "9,517",
    "Density": 9185.41
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Hưng Đạo",
    "Population": "4,824",
    "Density": 458.64
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Ngọc Xuân",
    "Population": "5,909",
    "Density": 869.85
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Sông Bằng",
    "Population": "7,459",
    "Density": 955.76
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Sông Hiến",
    "Population": "9,617",
    "Density": 1093.36
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Tân Giang",
    "Population": "7,572",
    "Density": 1708.79
  },
  {
    "Province": "Cao Bằng",
    "District": "Cao Bằng",
    "Ward": "Vĩnh Quang",
    "Population": "3,529",
    "Density": 239.51
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "An Lạc",
    "Population": "2,028",
    "Density": 50.64
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Cô Ngân",
    "Population": "1,584",
    "Density": 51.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Đồng Loan",
    "Population": "1,261",
    "Density": 45.62
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Đức Quang",
    "Population": "1,555",
    "Density": 41.94
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Kim Loan",
    "Population": "1,294",
    "Density": 44.12
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Lý Quốc",
    "Population": "2,150",
    "Density": 58.09
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Minh Long",
    "Population": "1,909",
    "Density": 48.06
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Quang Long",
    "Population": "2,012",
    "Density": 45.75
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Thái Đức",
    "Population": "1,277",
    "Density": 74.59
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Thắng Lợi",
    "Population": "2,037",
    "Density": 39.91
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Thanh Nhật",
    "Population": "2,969",
    "Density": 187.96
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Thị Hoa",
    "Population": "1,747",
    "Density": 55.57
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Việt Chu",
    "Population": "1,769",
    "Density": 78.33
  },
  {
    "Province": "Cao Bằng",
    "District": "Hạ Lang",
    "Ward": "Vinh Quý",
    "Population": "1,702",
    "Density": 39.24
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Cải Viên",
    "Population": "1,187",
    "Density": 86.03
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Đào Ngạn",
    "Population": "2,050",
    "Density": 121.68
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Hạ Thôn",
    "Population": 856,
    "Density": 51.45
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Hồng Sĩ",
    "Population": "1,471",
    "Density": 72.51
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Kéo Yên",
    "Population": "1,148",
    "Density": 55.75
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Lũng Nặm",
    "Population": "1,421",
    "Density": 51.36
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Mã Ba",
    "Population": "1,210",
    "Density": 59.16
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Nà Sác",
    "Population": "1,285",
    "Density": 62.19
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Nội Thôn",
    "Population": "1,960",
    "Density": 54.85
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Phù Ngọc",
    "Population": "3,013",
    "Density": 134.76
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Quý Quân",
    "Population": "1,251",
    "Density": 46.21
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Sĩ Hai",
    "Population": "1,115",
    "Density": 72.9
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Sóc Hà",
    "Population": "2,517",
    "Density": 77.92
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Thượng Thôn",
    "Population": "2,423",
    "Density": 78.77
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Tổng Cọt",
    "Population": "2,282",
    "Density": 69.8
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Trường Hà",
    "Population": "1,488",
    "Density": 49.61
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Vân An",
    "Population": "1,077",
    "Density": 55
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Vần Dính",
    "Population": "1,535",
    "Density": 79.26
  },
  {
    "Province": "Cao Bằng",
    "District": "Hà Quảng",
    "Ward": "Xuân Hòa",
    "Population": "3,972",
    "Density": 115.77
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Bạch Đằng",
    "Population": "2,105",
    "Density": 35.54
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Bế Triều",
    "Population": "5,821",
    "Density": 231.69
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Bình Dương",
    "Population": "1,271",
    "Density": 38.78
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Bình Long",
    "Population": "2,859",
    "Density": 164.54
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Công Trừng",
    "Population": 969,
    "Density": 61.14
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Đại Tiến",
    "Population": "1,416",
    "Density": 69.8
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Dân Chủ",
    "Population": "5,126",
    "Density": 92.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Đức Long",
    "Population": "5,601",
    "Density": 189.85
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Đức Xuân",
    "Population": 523,
    "Density": 25.91
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Hà Trì",
    "Population": 932,
    "Density": 48
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Hoàng Tung",
    "Population": "3,243",
    "Density": 132.21
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Hồng Nam",
    "Population": "1,318",
    "Density": 38.87
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Hồng Việt",
    "Population": "2,568",
    "Density": 234.78
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Lê Chung",
    "Population": "1,205",
    "Density": 32.12
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Nam Tuấn",
    "Population": "4,613",
    "Density": 124.66
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Ngũ Lão",
    "Population": "2,293",
    "Density": 41.47
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Nguyễn Huệ",
    "Population": "1,780",
    "Density": 87.47
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Nước Hai",
    "Population": "3,493",
    "Density": 2652.24
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Quang Trung",
    "Population": "1,566",
    "Density": 54.65
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Trương Lương",
    "Population": "2,445",
    "Density": 65.97
  },
  {
    "Province": "Cao Bằng",
    "District": "Hòa An",
    "Ward": "Trương Vương",
    "Population": "1,973",
    "Density": 86.02
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Bắc Hợp",
    "Population": "1,298",
    "Density": 74.1
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Ca Thành",
    "Population": "2,884",
    "Density": 37.1
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Hoa Thám",
    "Population": "1,517",
    "Density": 24.21
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Hưng Đạo",
    "Population": "1,159",
    "Density": 25.79
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Lang Môn",
    "Population": "1,665",
    "Density": 63.83
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Mai Long",
    "Population": "3,123",
    "Density": 57.74
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Minh Tâm",
    "Population": "1,432",
    "Density": 83.38
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Minh Thanh",
    "Population": "1,392",
    "Density": 60.07
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Nguyên Bình",
    "Population": "3,685",
    "Density": 195.57
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Phan Thanh",
    "Population": "2,925",
    "Density": 34.42
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Quang Thành",
    "Population": "1,673",
    "Density": 28.4
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Tam Kim",
    "Population": "2,559",
    "Density": 47.16
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Thái Học",
    "Population": "1,715",
    "Density": 75.5
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Thành Công",
    "Population": "2,787",
    "Density": 33.89
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Thể Dục",
    "Population": "1,548",
    "Density": 56.82
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Thịnh Vượng",
    "Population": 770,
    "Density": 16.43
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Tĩnh Túc",
    "Population": "3,089",
    "Density": 140.31
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Triệu Nguyên",
    "Population": "1,351",
    "Density": 39.92
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Vũ Nông",
    "Population": "1,896",
    "Density": 62.76
  },
  {
    "Province": "Cao Bằng",
    "District": "Nguyên Bình",
    "Ward": "Yên Lạc",
    "Population": 952,
    "Density": 28.24
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Cách Linh",
    "Population": "3,049",
    "Density": 87.46
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Đại Sơn",
    "Population": "2,996",
    "Density": 77.67
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Hoà Thuận",
    "Population": "4,648",
    "Density": 206.97
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Hồng Đại",
    "Population": "2,077",
    "Density": 100.76
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Lương Thiện",
    "Population": 783,
    "Density": 50.79
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Mỹ Hưng",
    "Population": "2,176",
    "Density": 52.59
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Tà Lùng",
    "Population": "3,010",
    "Density": 428.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Tiên Thành",
    "Population": "1,690",
    "Density": 44.69
  },
  {
    "Province": "Cao Bằng",
    "District": "Phục Hòa",
    "Ward": "Triệu Ẩu",
    "Population": "2,072",
    "Density": 58.38
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Bình Lăng",
    "Population": "1,697",
    "Density": 101.11
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Cai Bộ",
    "Population": "2,322",
    "Density": 60.35
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Chí Thảo",
    "Population": "3,588",
    "Density": 116.54
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Đoài Khôn",
    "Population": "1,536",
    "Density": 94.12
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Độc Lập",
    "Population": "2,175",
    "Density": 110.13
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Hạnh Phúc",
    "Population": "2,928",
    "Density": 116.77
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Hoàng Hải",
    "Population": "1,912",
    "Density": 75.56
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Hồng Định",
    "Population": "2,328",
    "Density": 144.65
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Hồng Quang",
    "Population": "2,492",
    "Density": 88.02
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Ngọc Động",
    "Population": "2,846",
    "Density": 121.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Phi Hải",
    "Population": "3,187",
    "Density": 62.87
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Phúc Sen",
    "Population": "1,874",
    "Density": 145.06
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Quảng Hưng",
    "Population": "1,568",
    "Density": 60.41
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Quảng Uyên",
    "Population": "2,726",
    "Density": 2846.34
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Quốc Dân",
    "Population": "2,223",
    "Density": 118.49
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Quốc Phong",
    "Population": "1,564",
    "Density": 112.5
  },
  {
    "Province": "Cao Bằng",
    "District": "Quảng Uyên",
    "Ward": "Tự Do",
    "Population": "2,606",
    "Density": 127.67
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Canh Tân",
    "Population": "2,101",
    "Density": 34.1
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Danh Sỹ",
    "Population": 811,
    "Density": 39.38
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Đông Khê",
    "Population": "4,249",
    "Density": 274.55
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Đức Long",
    "Population": "1,925",
    "Density": 62.73
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Đức Thông",
    "Population": "1,893",
    "Density": 26.88
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Đức Xuân",
    "Population": "1,953",
    "Density": 60.37
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Kim Đồng",
    "Population": "3,041",
    "Density": 56.12
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Lê Lai",
    "Population": "2,645",
    "Density": 80.54
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Lê Lợi",
    "Population": "1,046",
    "Density": 71.72
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Minh Khai",
    "Population": "2,100",
    "Density": 24.15
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Quang Trọng",
    "Population": "1,958",
    "Density": 23.53
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Thái Cường",
    "Population": "1,139",
    "Density": 46.67
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Thị Ngân",
    "Population": 802,
    "Density": 41.18
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Thụy Hùng",
    "Population": "1,115",
    "Density": 29.72
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Trọng Con",
    "Population": "2,046",
    "Density": 27.14
  },
  {
    "Province": "Cao Bằng",
    "District": "Thạch An",
    "Ward": "Vân Trình",
    "Population": "1,739",
    "Density": 78.41
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Bình Lãng",
    "Population": "1,551",
    "Density": 51.19
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Cần Nông",
    "Population": "1,798",
    "Density": 62.05
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Cần Yên",
    "Population": "1,858",
    "Density": 77.27
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Đa Thông",
    "Population": "3,486",
    "Density": 65
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Lương Can",
    "Population": "2,129",
    "Density": 68.26
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Lương Thông",
    "Population": "4,497",
    "Density": 62.86
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Ngọc Động",
    "Population": "1,733",
    "Density": 46.09
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Thanh Long",
    "Population": "1,512",
    "Density": 69.58
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Thông Nông",
    "Population": "2,477",
    "Density": 257.93
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Vị Quang",
    "Population": 948,
    "Density": 38.28
  },
  {
    "Province": "Cao Bằng",
    "District": "Thông Nông",
    "Ward": "Yên Sơn",
    "Population": "1,244",
    "Density": 41.56
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Cao Chương",
    "Population": "3,106",
    "Density": 107.88
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Cô Mười",
    "Population": "1,400",
    "Density": 57.01
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Hùng Quốc",
    "Population": "4,510",
    "Density": 292.38
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Lưu Ngọc",
    "Population": "1,106",
    "Density": 51.51
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Quang Hán",
    "Population": "2,487",
    "Density": 105.29
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Quang Trung",
    "Population": "1,764",
    "Density": 63.37
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Quang Vinh",
    "Population": "1,295",
    "Density": 43.06
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Quốc Toản",
    "Population": "2,123",
    "Density": 67.9
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Tri Phương",
    "Population": "2,217",
    "Density": 80.06
  },
  {
    "Province": "Cao Bằng",
    "District": "Trà Lĩnh",
    "Ward": "Xuân Nội",
    "Population": "1,550",
    "Density": 53.07
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Cảnh Tiên",
    "Population": "1,812",
    "Density": 115.41
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Cao Thăng",
    "Population": "3,205",
    "Density": 110.69
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Chí Viễn",
    "Population": "3,984",
    "Density": 90.33
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Đàm Thuỷ",
    "Population": "5,045",
    "Density": 107.74
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Đình Minh",
    "Population": "1,363",
    "Density": 150.4
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Đình Phong",
    "Population": "3,096",
    "Density": 90.21
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Đoài Côn",
    "Population": "1,864",
    "Density": 102.64
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Đức Hồng",
    "Population": "3,024",
    "Density": 149.55
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Khâm Thành",
    "Population": "1,868",
    "Density": 78.74
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Lăng Hiếu",
    "Population": "1,780",
    "Density": 121.53
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Lăng Yên",
    "Population": "1,266",
    "Density": 72.42
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Ngọc Chung",
    "Population": 977,
    "Density": 45.25
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Ngọc Côn",
    "Population": "2,300",
    "Density": 103.14
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Ngọc Khê",
    "Population": "2,607",
    "Density": 88.12
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Phong Châu",
    "Population": "2,161",
    "Density": 85.96
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Phong Nậm",
    "Population": "1,383",
    "Density": 47.84
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Thân Giáp",
    "Population": "1,544",
    "Density": 72.04
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Thông Hoè",
    "Population": "1,987",
    "Density": 144.64
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Trùng Khánh",
    "Population": "4,302",
    "Density": 946.14
  },
  {
    "Province": "Cao Bằng",
    "District": "Trùng Khánh",
    "Ward": "Trung Phúc",
    "Population": "3,145",
    "Density": 99.58
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Cuôr KNia",
    "Population": "7,396",
    "Density": 388.87
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Bar",
    "Population": "15,266",
    "Density": 598.88
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Huar",
    "Population": "3,275",
    "Density": 70.96
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Nuôl",
    "Population": "10,618",
    "Density": 156.63
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Wer",
    "Population": "8,053",
    "Density": 99.23
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Krông Na",
    "Population": "4,540",
    "Density": 4.08
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Tân Hoà",
    "Population": "10,811",
    "Density": 191.15
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Buôn Hồ",
    "Population": "96,685",
    "Density": 342.07
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "An Bình",
    "Population": "10,363",
    "Density": 1167.73
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "An Lạc",
    "Population": "8,392",
    "Density": 1337.67
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Bình Tân",
    "Population": "6,104",
    "Density": 247.75
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Bình Thuận",
    "Population": "12,723",
    "Density": 306.36
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Cư Bao",
    "Population": "11,159",
    "Density": 267.81
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Đạt Hiếu",
    "Population": "7,204",
    "Density": 633.82
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Đoàn Kết",
    "Population": "3,517",
    "Density": 244.59
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Blang",
    "Population": "2,874",
    "Density": 98.25
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Drông",
    "Population": "10,385",
    "Density": 213.16
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Ea Siên",
    "Population": "7,135",
    "Density": 225.2
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Thiện An",
    "Population": "4,941",
    "Density": 628.84
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Đôn",
    "Ward": "Thống Nhất",
    "Population": "11,888",
    "Density": 724.3
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Cư ÊBur",
    "Population": "16,083",
    "Density": 371.29
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Ea Kao",
    "Population": "16,059",
    "Density": 337.21
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Ea Tam",
    "Population": "27,199",
    "Density": 1904.29
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Ea Tu",
    "Population": "14,879",
    "Density": 529.16
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Hòa Khánh",
    "Population": "14,740",
    "Density": 438.99
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Hòa Phú",
    "Population": "15,746",
    "Density": 296.6
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Hòa Thắng",
    "Population": "16,548",
    "Density": 512.69
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Hòa Thuận",
    "Population": "13,473",
    "Density": 766.51
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Hòa Xuân",
    "Population": "6,716",
    "Density": 287.08
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Khánh Xuân",
    "Population": "23,180",
    "Density": 1055.22
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tân An",
    "Population": "16,334",
    "Density": 1451.4
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tân Hòa",
    "Population": "11,270",
    "Density": 2023.92
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tân Lập",
    "Population": "22,017",
    "Density": 2288.5
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tân Lợi",
    "Population": "20,230",
    "Density": 1470.2
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tân Thành",
    "Population": "17,367",
    "Density": 3831.41
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tân Tiến",
    "Population": "15,121",
    "Density": 6165.55
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Thắng Lợi",
    "Population": "7,685",
    "Density": 9061.65
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Thành Công",
    "Population": "15,183",
    "Density": 13254.47
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Thành Nhất",
    "Population": "13,075",
    "Density": 1252.63
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Thống Nhất",
    "Population": "5,577",
    "Density": 8307.27
  },
  {
    "Province": "Đắk Lắk",
    "District": "Buôn Ma Thuột",
    "Ward": "Tự An",
    "Population": "17,653",
    "Density": 3127.3
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Cư Ê Wi",
    "Population": "7,782",
    "Density": 235.77
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Dray Bhăng",
    "Population": "9,299",
    "Density": 227.21
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Ea BHốk",
    "Population": "15,806",
    "Density": 385.97
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Ea Hu",
    "Population": "9,131",
    "Density": 355.49
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Ea Ktur",
    "Population": "16,970",
    "Density": 389.61
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Ea Ning",
    "Population": "11,053",
    "Density": 387.81
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Ea Tiêu",
    "Population": "20,198",
    "Density": 421.27
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư Kuin",
    "Ward": "Hòa Hiệp",
    "Population": "9,312",
    "Density": 301.9
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Cư Dliê M'nông",
    "Population": "9,815",
    "Density": 156.3
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Cư M'gar",
    "Population": "8,351",
    "Density": 262
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Cuor Đăng",
    "Population": "10,028",
    "Density": 300.83
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Cư Suê",
    "Population": "10,264",
    "Density": 289.65
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea D'Rơng",
    "Population": "12,175",
    "Density": 177.21
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea H'đinh",
    "Population": "9,863",
    "Density": 238.72
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea Kiết",
    "Population": "8,841",
    "Density": 97.43
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea KPam",
    "Population": "7,048",
    "Density": 170.74
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea Kuêh",
    "Population": "6,324",
    "Density": 56.62
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea M'DRóh",
    "Population": "7,453",
    "Density": 127.86
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea M'nang",
    "Population": "8,393",
    "Density": 363.96
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea Pốk",
    "Population": "14,473",
    "Density": 368.76
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea Tar",
    "Population": "7,633",
    "Density": 185.59
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Ea Tul",
    "Population": "9,948",
    "Density": 182.18
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Quảng Hiệp",
    "Population": "11,660",
    "Density": 215.87
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Quảng Phú",
    "Population": "14,699",
    "Density": 1423.08
  },
  {
    "Province": "Đắk Lắk",
    "District": "Cư M'gar",
    "Ward": "Quảng Tiến",
    "Population": "6,632",
    "Density": 250.13
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Cư A Mung",
    "Population": "3,601",
    "Density": 48.81
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Cư Mốt",
    "Population": "7,736",
    "Density": 97.55
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Dlê Yang",
    "Population": "9,328",
    "Density": 112.87
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Drăng",
    "Population": "18,948",
    "Density": 1235.69
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Hiao",
    "Population": "12,259",
    "Density": 92.89
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea H'leo",
    "Population": "10,942",
    "Density": 32.24
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Khal",
    "Population": "8,369",
    "Density": 112.59
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Nam",
    "Population": "10,246",
    "Density": 138.51
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Ral",
    "Population": "13,622",
    "Density": 188.87
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Sol",
    "Population": "11,027",
    "Density": 47.61
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Tir",
    "Population": "3,175",
    "Density": 32.13
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea H'leo",
    "Ward": "Ea Wy",
    "Population": "11,715",
    "Density": 191.69
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Cư Bông",
    "Population": "5,617",
    "Density": 61.69
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Cư Elang",
    "Population": "6,573",
    "Density": 77.38
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Cư Huê",
    "Population": "10,275",
    "Density": 380.68
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Cư Jang",
    "Population": "7,205",
    "Density": 118.52
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Cư Ni",
    "Population": "16,356",
    "Density": 283.31
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Cư Prông",
    "Population": "3,940",
    "Density": 59.49
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Đar",
    "Population": "12,817",
    "Density": 421.25
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Kar",
    "Population": "12,446",
    "Density": 473.99
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Kmút",
    "Population": "12,085",
    "Density": 396.45
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Knốp",
    "Population": "10,241",
    "Density": 375.65
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Ô",
    "Population": "10,964",
    "Density": 203.17
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Păl",
    "Population": "8,179",
    "Density": 213.9
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Sar",
    "Population": "7,292",
    "Density": 128.99
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Sô",
    "Population": "3,260",
    "Density": 10.14
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Ea Tih",
    "Population": "8,557",
    "Density": 201.99
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Kar",
    "Ward": "Xuân Phú",
    "Population": "5,524",
    "Density": 214.67
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Cư KBang",
    "Population": "6,950",
    "Density": 80.43
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Cư M'Lan",
    "Population": "2,950",
    "Density": 10.82
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ea Bung",
    "Population": "3,498",
    "Density": 11.75
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ea Lê",
    "Population": "9,776",
    "Density": 73.47
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ea Rốk",
    "Population": "8,301",
    "Density": 45.03
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ea Súp",
    "Population": "10,888",
    "Density": 750.53
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ia JLơi",
    "Population": "2,640",
    "Density": 9.77
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ia Lốp",
    "Population": "4,455",
    "Density": 23.06
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ia RVê",
    "Population": "4,639",
    "Density": 19.25
  },
  {
    "Province": "Đắk Lắk",
    "District": "Ea Súp",
    "Ward": "Ya Tờ Mốt",
    "Population": "4,482",
    "Density": 61.31
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Băng A Drênh",
    "Population": "3,870",
    "Density": 84.79
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Bình Hòa",
    "Population": "7,520",
    "Density": 141.4
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Buôn Trấp",
    "Population": "23,495",
    "Density": 786.1
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Dray Sáp",
    "Population": "8,603",
    "Density": 183.28
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Dur KMăl",
    "Population": "6,412",
    "Density": 90.14
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Ea Bông",
    "Population": "12,185",
    "Density": 247.54
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Ea Na",
    "Population": "12,199",
    "Density": 350.76
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Ana",
    "Ward": "Quảng Điền",
    "Population": "6,726",
    "Density": 296.3
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Cư Drăm",
    "Population": "6,984",
    "Density": 43.17
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Cư KTy",
    "Population": "4,914",
    "Density": 148.58
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Cư Pui",
    "Population": "11,139",
    "Density": 64.81
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Dang Kang",
    "Population": "6,218",
    "Density": 218.3
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Ea Trul",
    "Population": "5,988",
    "Density": 230.75
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Hòa Lễ",
    "Population": "6,426",
    "Density": 65.72
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Hòa Phong",
    "Population": "7,531",
    "Density": 53.92
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Hòa Sơn",
    "Population": "8,948",
    "Density": 167.17
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Hòa Tân",
    "Population": "2,601",
    "Density": 158.82
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Hòa Thành",
    "Population": "4,024",
    "Density": 147.42
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Khuê Ngọc Điền",
    "Population": "6,457",
    "Density": 106.17
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Krông Kmar",
    "Population": "6,343",
    "Density": 1109.77
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Yang Mao",
    "Population": "4,439",
    "Density": 10.96
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Bông",
    "Ward": "Yang Reh",
    "Population": "5,127",
    "Density": 181.15
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Chứ KBô",
    "Population": "10,999",
    "Density": 176.74
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Cư Né",
    "Population": "11,793",
    "Density": 163.75
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Cư Pơng",
    "Population": "9,591",
    "Density": 129.52
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Ea Ngai",
    "Population": "3,281",
    "Density": 92.41
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Ea Sin",
    "Population": "1,698",
    "Density": 26.91
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Pơng Drang",
    "Population": "16,695",
    "Density": 554.03
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Búk",
    "Ward": "Tân Lập",
    "Population": "3,330",
    "Density": 184.39
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Cư Klông",
    "Population": "4,108",
    "Density": 53.59
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "ĐLiê Ya",
    "Population": "14,079",
    "Density": 162.32
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Ea Dăh",
    "Population": "7,045",
    "Density": 136.34
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Ea Hồ",
    "Population": "11,204",
    "Density": 273
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Ea Puk",
    "Population": "4,454",
    "Density": 103.43
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Ea Tam",
    "Population": "9,714",
    "Density": 115.27
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Ea Tân",
    "Population": "9,522",
    "Density": 176.46
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Ea Tóh",
    "Population": "12,543",
    "Density": 321.25
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Krông Năng",
    "Population": "11,923",
    "Density": 471.92
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Phú Lộc",
    "Population": "11,140",
    "Density": 329.7
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Phú Xuân",
    "Population": "16,271",
    "Density": 357.59
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Năng",
    "Ward": "Tam Giang",
    "Population": "6,220",
    "Density": 181.7
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Hiu",
    "Population": "5,482",
    "Density": 406.22
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Kênh",
    "Population": "12,176",
    "Density": 264.22
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Kly",
    "Population": "19,250",
    "Density": 359.06
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea KNuec",
    "Population": "12,655",
    "Density": 470.52
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Kuăng",
    "Population": "11,987",
    "Density": 455.66
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Phê",
    "Population": "22,583",
    "Density": 510.26
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Uy",
    "Population": "5,989",
    "Density": 187.17
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Yiêng",
    "Population": "5,183",
    "Density": 204.85
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Ea Yông",
    "Population": "16,163",
    "Density": 283.13
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Hòa An",
    "Population": "11,706",
    "Density": 432.51
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Hòa Đông",
    "Population": "11,068",
    "Density": 226.52
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Hòa Tiến",
    "Population": "7,296",
    "Density": 338.67
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Krông Búk",
    "Population": "13,256",
    "Density": 235.17
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Phước An",
    "Population": "17,400",
    "Density": 1700.55
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Tân Tiến",
    "Population": "11,046",
    "Density": 372.21
  },
  {
    "Province": "Đắk Lắk",
    "District": "Krông Pắc (Krông Pắk)",
    "Ward": "Vụ Bổn",
    "Population": "14,769",
    "Density": 134.8
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Bông Krang",
    "Population": "6,115",
    "Density": 19.42
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Buôn Tría",
    "Population": "3,201",
    "Density": 100.67
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Buôn Triết",
    "Population": "6,698",
    "Density": 91.03
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Đắk Liêng",
    "Population": "8,974",
    "Density": 289.33
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Đắk Nuê",
    "Population": "4,790",
    "Density": 37.67
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Đắk Phơi",
    "Population": "5,386",
    "Density": 39.03
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Ea R'Bin",
    "Population": "2,342",
    "Density": 30.79
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Krông Nô",
    "Population": "7,187",
    "Density": 25.39
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Liên Sơn",
    "Population": "5,703",
    "Density": 449.44
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Nam Ka",
    "Population": "2,212",
    "Density": 23.67
  },
  {
    "Province": "Đắk Lắk",
    "District": "Lắk",
    "Ward": "Yang Tao",
    "Population": "7,346",
    "Density": 108
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Cư Króa",
    "Population": "3,324",
    "Density": 15.73
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Cư M'ta",
    "Population": "5,930",
    "Density": 113.95
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Cư Prao",
    "Population": "4,995",
    "Density": 40.02
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Cư San",
    "Population": "6,281",
    "Density": 29.93
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Ea H'MLay",
    "Population": "3,349",
    "Density": 64.36
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Ea Lai",
    "Population": "2,745",
    "Density": 40.43
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Ea M' Doal",
    "Population": "3,962",
    "Density": 49.42
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Ea Pil",
    "Population": "6,522",
    "Density": 78.32
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Ea Riêng",
    "Population": "6,306",
    "Density": 182.04
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Ea Trang",
    "Population": "4,646",
    "Density": 26.92
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Krông Á",
    "Population": "3,347",
    "Density": 41.01
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "Krông Jing",
    "Population": "8,665",
    "Density": 116.49
  },
  {
    "Province": "Đắk Lắk",
    "District": "M'Drắk",
    "Ward": "M'Đrắk",
    "Population": "5,022",
    "Density": 772.32
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Cư Knia",
    "Population": "7,131",
    "Density": 238.58
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Đắk DRông",
    "Population": "14,070",
    "Density": 235.88
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Đắk Wil",
    "Population": "8,835",
    "Density": 21.01
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Ea Pô",
    "Population": "11,575",
    "Density": 120.94
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Ea T'Ling",
    "Population": "15,342",
    "Density": 683.17
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Nam Dong",
    "Population": "15,779",
    "Density": 358.26
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Tâm Thắng",
    "Population": "12,554",
    "Density": 577.65
  },
  {
    "Province": "Đắk Nông",
    "District": "Cư Jút",
    "Ward": "Trúc Sơn",
    "Population": "2,978",
    "Density": 105.8
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Đắk Ha",
    "Population": "4,404",
    "Density": 28.77
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Đắk Plao",
    "Population": "2,971",
    "Density": 13
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Đắk R'Măng",
    "Population": "5,538",
    "Density": 28.4
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Đắk Som",
    "Population": "4,973",
    "Density": 64.79
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Quảng Hoà",
    "Population": "4,804",
    "Density": 55.82
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Quảng Khê",
    "Population": "8,207",
    "Density": 36.56
  },
  {
    "Province": "Đắk Nông",
    "District": "Đăk Glong",
    "Ward": "Quảng Sơn",
    "Population": "8,152",
    "Density": 16.86
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đắk Gằn",
    "Population": "6,737",
    "Density": 88.05
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đắk Lao",
    "Population": "6,626",
    "Density": 25.98
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đắk Mil",
    "Population": "9,657",
    "Density": 2021.1
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đắk N'Drót",
    "Population": "6,392",
    "Density": 137.38
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đắk R'La",
    "Population": "9,181",
    "Density": 98.55
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đắk Sắk",
    "Population": "12,673",
    "Density": 409.9
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đức Mạnh",
    "Population": "12,335",
    "Density": 251.53
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Đức Minh",
    "Population": "13,123",
    "Density": 378.94
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Long Sơn",
    "Population": "1,499",
    "Density": 49.59
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Mil",
    "Ward": "Thuận An",
    "Population": "9,608",
    "Density": 155.3
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Đắk Ru",
    "Population": "8,788",
    "Density": 132.15
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Đắk Sin",
    "Population": "7,118",
    "Density": 70.34
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Đắk Wer",
    "Population": "6,570",
    "Density": 142.76
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Đạo Nghĩa",
    "Population": "4,319",
    "Density": 72.57
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Hưng Bình",
    "Population": "3,235",
    "Density": 36.56
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Kiến Đức",
    "Population": "8,714",
    "Density": 548.15
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Kiến Thành",
    "Population": "5,908",
    "Density": 133.78
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Nghĩa Thắng",
    "Population": "7,965",
    "Density": 166.67
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Nhân Cơ",
    "Population": "8,771",
    "Density": 190.3
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Nhân Đạo",
    "Population": "3,752",
    "Density": 56.11
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk R'Lấp",
    "Ward": "Quảng Tín",
    "Population": "8,947",
    "Density": 167.58
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Đắk Hoà",
    "Population": "3,115",
    "Density": 27.01
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Đắk Môl",
    "Population": "6,407",
    "Density": 82.54
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Đắk N'Dung",
    "Population": "8,194",
    "Density": 120.79
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Đức An",
    "Population": "4,130",
    "Density": 323.24
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nam Bình",
    "Population": "8,457",
    "Density": 104.41
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nâm N'Jang",
    "Population": "7,534",
    "Density": 45.73
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Thuận Hà",
    "Population": "4,474",
    "Density": 79.69
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Thuận Hạnh",
    "Population": "7,372",
    "Density": 99.4
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Trường Xuân",
    "Population": "7,146",
    "Density": 45.3
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Gia Nghĩa",
    "Population": "41,788",
    "Density": 147.05
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Đắk Nia",
    "Population": "6,694",
    "Density": 72.02
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Đắk R'Moan",
    "Population": "3,606",
    "Density": 73.95
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nghĩa Đức",
    "Population": "4,550",
    "Density": 267.22
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nghĩa Phú",
    "Population": "4,108",
    "Density": 318.85
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nghĩa Tân",
    "Population": "5,104",
    "Density": 271.11
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nghĩa Thành",
    "Population": "8,872",
    "Density": 2781.89
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Nghĩa Trung",
    "Population": "5,975",
    "Density": 491.89
  },
  {
    "Province": "Đắk Nông",
    "District": "Đắk Song",
    "Ward": "Quảng Thành",
    "Population": "2,879",
    "Density": 36.73
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Buôn Choah",
    "Population": "2,266",
    "Density": 48.48
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Đắk Drô",
    "Population": "6,939",
    "Density": 128.98
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Đắk Mâm",
    "Population": "5,702",
    "Density": 225.57
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Đắk Nang",
    "Population": "2,316",
    "Density": 55.8
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Đắk Sôr",
    "Population": "4,139",
    "Density": 145.66
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Đức Xuyên",
    "Population": "3,012",
    "Density": 29.78
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Nam Đà",
    "Population": "10,709",
    "Density": 186.2
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Nâm N'Đir",
    "Population": "7,084",
    "Density": 61.61
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Nâm Nung",
    "Population": "5,377",
    "Density": 51.29
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Nam Xuân",
    "Population": "6,483",
    "Density": 211.28
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Quảng Phú",
    "Population": "5,939",
    "Density": 48.87
  },
  {
    "Province": "Đắk Nông",
    "District": "Krông Nô",
    "Ward": "Tân Thành",
    "Population": "2,922",
    "Density": 33.33
  },
  {
    "Province": "Đắk Nông",
    "District": "Tuy Đức",
    "Ward": "Đắk Búk So",
    "Population": "8,006",
    "Density": 96.06
  },
  {
    "Province": "Đắk Nông",
    "District": "Tuy Đức",
    "Ward": "Đắk Ngo",
    "Population": "8,236",
    "Density": 49.36
  },
  {
    "Province": "Đắk Nông",
    "District": "Tuy Đức",
    "Ward": "Đắk R'Tíh",
    "Population": "5,732",
    "Density": 51.01
  },
  {
    "Province": "Đắk Nông",
    "District": "Tuy Đức",
    "Ward": "Quảng Tâm",
    "Population": "2,469",
    "Density": 35.32
  },
  {
    "Province": "Đắk Nông",
    "District": "Tuy Đức",
    "Ward": "Quảng Tân",
    "Population": "10,317",
    "Density": 81.15
  },
  {
    "Province": "Đắk Nông",
    "District": "Tuy Đức",
    "Ward": "Quảng Trực",
    "Population": "3,896",
    "Density": 6.95
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Mường Lói",
    "Population": "3,832",
    "Density": 11.62
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Mường Nhà",
    "Population": "7,257",
    "Density": 26.28
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Mường Phăng",
    "Population": "8,357",
    "Density": 91.62
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Mường Pồn",
    "Population": "4,090",
    "Density": 32.39
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Nà Nhạn",
    "Population": "4,264",
    "Density": 53.66
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Nà Tấu",
    "Population": "5,362",
    "Density": 74.95
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Na Ư",
    "Population": "1,467",
    "Density": 12.81
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Noọng Hẹt",
    "Population": "7,202",
    "Density": 565.13
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Noong Luống",
    "Population": "5,123",
    "Density": 238.92
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Núa Ngam",
    "Population": "5,683",
    "Density": 46.45
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Pa Thơm",
    "Population": "1,091",
    "Density": 12.34
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Sam Mứn",
    "Population": "9,475",
    "Density": 141.81
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh An",
    "Population": "5,992",
    "Density": 296.18
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh Chăn",
    "Population": "4,580",
    "Density": 207.07
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh Hưng",
    "Population": "5,942",
    "Density": 303.02
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh Luông",
    "Population": "6,095",
    "Density": 165.25
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh Nưa",
    "Population": "6,403",
    "Density": 64.93
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh Xương",
    "Population": "7,065",
    "Density": 369.76
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên",
    "Ward": "Thanh Yên",
    "Population": "7,033",
    "Density": 357.01
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Chiềng Sơ",
    "Population": "4,740",
    "Density": 76.89
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Điện Biên Đông",
    "Population": "2,410",
    "Density": 118.18
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Háng Lìa",
    "Population": "2,143",
    "Density": 34.06
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Keo Lôm",
    "Population": "5,802",
    "Density": 41.55
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Luân Giới",
    "Population": "4,716",
    "Density": 73.48
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Mường Luân",
    "Population": "3,611",
    "Density": 59.24
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Na Son",
    "Population": "3,514",
    "Density": 49.34
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Nong U",
    "Population": "2,764",
    "Density": 38.2
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Phình Giàng",
    "Population": "3,341",
    "Density": 36.43
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Phì Nhừ",
    "Population": "5,789",
    "Density": 46.21
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Pú Hồng",
    "Population": "4,264",
    "Density": 31.7
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Pú Nhi",
    "Population": "4,543",
    "Density": 42.39
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Tìa Dình",
    "Population": "2,900",
    "Density": 28.13
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Đông",
    "Ward": "Xa Dung",
    "Population": "5,712",
    "Density": 63.2
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Him Lam",
    "Population": "8,547",
    "Density": 1341.06
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Mường Thanh",
    "Population": "9,977",
    "Density": 8174.52
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Nam Thanh",
    "Population": "6,730",
    "Density": 1515.87
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Noong Bua",
    "Population": "3,774",
    "Density": 204.54
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Tân Thanh",
    "Population": "7,803",
    "Density": 4617.16
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Thanh Bình",
    "Population": "4,814",
    "Density": 5715.98
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Thanh Minh",
    "Population": "1,658",
    "Density": 66.87
  },
  {
    "Province": "Điện Biên",
    "District": "Điện Biên Phủ",
    "Ward": "Thanh Trường",
    "Population": "4,717",
    "Density": 819.92
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Ẳng Cang",
    "Population": "6,040",
    "Density": 112.02
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Ẳng Nưa",
    "Population": "3,169",
    "Density": 128.08
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Ẳng Tở",
    "Population": "4,967",
    "Density": 83.02
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Búng Lao",
    "Population": "4,915",
    "Density": 102.74
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Mường Ảng",
    "Population": "3,994",
    "Density": 605.56
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Mường Đăng",
    "Population": "3,313",
    "Density": 50.18
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Mường Lạn",
    "Population": "3,767",
    "Density": 92.94
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Nặm Lịch",
    "Population": "2,716",
    "Density": 75.36
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Ngối Cáy",
    "Population": "2,871",
    "Density": 59.27
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Ảng",
    "Ward": "Xuân Lao",
    "Population": "4,367",
    "Density": 73.14
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Hừa Ngài",
    "Population": "5,458",
    "Density": 22.5
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Huổi Lèng",
    "Population": "2,609",
    "Density": 24.05
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Ma Thì Hồ",
    "Population": "3,694",
    "Density": 27.27
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Mường Chà",
    "Population": "3,263",
    "Density": 146.58
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Mường Mươn",
    "Population": "3,524",
    "Density": 26.47
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Mường Tùng",
    "Population": "3,477",
    "Density": 20.33
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Na Sang",
    "Population": "4,072",
    "Density": 34.49
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Pa Ham",
    "Population": "5,649",
    "Density": 82.64
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Sa Lông",
    "Population": "2,777",
    "Density": 32.5
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Xá Tổng",
    "Population": "4,094",
    "Density": 37.32
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Mường Lay",
    "Population": "11,650",
    "Density": 103.76
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Lay Nưa",
    "Population": "4,417",
    "Density": 73.32
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Na Lay",
    "Population": "4,854",
    "Density": 213.19
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Chà",
    "Ward": "Sông Đà",
    "Population": "2,379",
    "Density": 81.28
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Nhé",
    "Ward": "Chung Chải",
    "Population": "5,547",
    "Density": 14.18
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Nhé",
    "Ward": "Mường Nhé",
    "Population": "7,751",
    "Density": 27.9
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Nhé",
    "Ward": "Mường Toong",
    "Population": "5,141",
    "Density": 22.23
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Nhé",
    "Ward": "Nậm Kè",
    "Population": "5,613",
    "Density": 25.07
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Nhé",
    "Ward": "Quảng Lâm",
    "Population": "4,930",
    "Density": 21.1
  },
  {
    "Province": "Điện Biên",
    "District": "Mường Nhé",
    "Ward": "Sín Thầu",
    "Population": "1,937",
    "Density": 5.74
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Chà Cang",
    "Population": "4,410",
    "Density": 22.63
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Chà Nưa",
    "Population": "2,329",
    "Density": 23.69
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Chà Tở",
    "Population": "2,149",
    "Density": 17.46
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Nà Bủng",
    "Population": "6,342",
    "Density": 38.83
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Nà Hỳ",
    "Population": "5,051",
    "Density": 33.57
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Nà Khoa",
    "Population": "5,385",
    "Density": 43.27
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Nậm Khăn",
    "Population": "1,456",
    "Density": 13.92
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Pa Tần",
    "Population": "2,458",
    "Density": 14.78
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Phìn Hồ",
    "Population": "2,859",
    "Density": 23.85
  },
  {
    "Province": "Điện Biên",
    "District": "Nậm Pồ",
    "Ward": "Si Pa Phìn",
    "Population": "4,670",
    "Density": 37.48
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Huổi Só",
    "Population": "2,360",
    "Density": 38.62
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Lao Xả Phình",
    "Population": "2,026",
    "Density": 40.45
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Mường Báng",
    "Population": "7,861",
    "Density": 114.98
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Mường Đun",
    "Population": "3,185",
    "Density": 84.35
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Sáng Nhè",
    "Population": "5,514",
    "Density": 89.33
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Sính Phình",
    "Population": "5,322",
    "Density": 76.89
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Tả Phìn",
    "Population": "3,162",
    "Density": 62.5
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Tả Sìn Thàng",
    "Population": "3,307",
    "Density": 65.13
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Trung Thu",
    "Population": "2,968",
    "Density": 55.46
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Tủa Chùa",
    "Population": "2,940",
    "Density": 1031.22
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Tủa Thàng",
    "Population": "4,232",
    "Density": 48.02
  },
  {
    "Province": "Điện Biên",
    "District": "Tủa Chùa",
    "Ward": "Xín Chải",
    "Population": "4,402",
    "Density": 49.3
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Chiềng Sinh",
    "Population": "9,400",
    "Density": 166.76
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Mùn Chung",
    "Population": "5,467",
    "Density": 68.3
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Mường Mùn",
    "Population": "7,143",
    "Density": 33.72
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Mường Thín",
    "Population": "2,198",
    "Density": 35.88
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Nà Sáy",
    "Population": "5,247",
    "Density": 37.94
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Phình Sáng",
    "Population": "7,582",
    "Density": 59.65
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Pú Nhung",
    "Population": "2,975",
    "Density": 46.29
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Quài Cang",
    "Population": "7,125",
    "Density": 180.72
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Quài Nưa",
    "Population": "5,551",
    "Density": 106.08
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Quài Tở",
    "Population": "8,020",
    "Density": 132.54
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Ta Ma",
    "Population": "3,065",
    "Density": 28.59
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Tênh Phông",
    "Population": "1,145",
    "Density": 19.95
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Tỏa Tình",
    "Population": "1,855",
    "Density": 28.92
  },
  {
    "Province": "Điện Biên",
    "District": "Tuần Giáo",
    "Ward": "Tuần Giáo",
    "Population": "7,258",
    "Density": 439.37
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "An Bình",
    "Population": "44,114",
    "Density": 4219.01
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "An Hoà",
    "Population": "18,269",
    "Density": 1957.5
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Bình Đa",
    "Population": "17,806",
    "Density": 14626.25
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Bửu Hòa",
    "Population": "19,211",
    "Density": 4502.44
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Bửu Long",
    "Population": "25,765",
    "Density": 4310.98
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Hiệp Hòa",
    "Population": "12,796",
    "Density": 1848.01
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Hóa An",
    "Population": "27,217",
    "Density": 4073.36
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Hòa Bình",
    "Population": "7,965",
    "Density": 14555.92
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Hố Nai",
    "Population": "31,840",
    "Density": 8105.08
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Long Bình",
    "Population": "75,894",
    "Density": 2200.21
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Long Bình Tân",
    "Population": "46,693",
    "Density": 3989.49
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Long Hưng",
    "Population": "5,885",
    "Density": 497.8
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Phước Tân",
    "Population": "33,754",
    "Density": 775.58
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Quang Vinh",
    "Population": "15,465",
    "Density": 14199.8
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Quyết Thắng",
    "Population": "14,995",
    "Density": 11575.58
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tam Hiệp",
    "Population": "33,529",
    "Density": 15368.29
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tam Hòa",
    "Population": "16,274",
    "Density": 13338.25
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tam Phước",
    "Population": "38,738",
    "Density": 860.35
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Biên",
    "Population": "37,537",
    "Density": 6167.76
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Hạnh",
    "Population": "8,535",
    "Density": 1402.28
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Hiệp",
    "Population": "31,594",
    "Density": 8987.31
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Hòa",
    "Population": "38,133",
    "Density": 9909.57
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Mai",
    "Population": "20,165",
    "Density": 14552.21
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Phong",
    "Population": "43,173",
    "Density": 2619.09
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Tiến",
    "Population": "15,012",
    "Density": 11253.37
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Tân Vạn",
    "Population": "14,078",
    "Density": 3312.31
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Thanh Bình",
    "Population": "5,071",
    "Density": 12639.58
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Thống Nhất",
    "Population": "24,008",
    "Density": 6924.72
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Trảng Dài",
    "Population": "55,840",
    "Density": 3899.99
  },
  {
    "Province": "Đồng Nai",
    "District": "Biên Hòa",
    "Ward": "Trung Dũng",
    "Population": "18,484",
    "Density": 20762.47
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Bảo Bình",
    "Population": "13,939",
    "Density": 389.67
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Lâm San",
    "Population": "8,072",
    "Density": 249.45
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Long Giao",
    "Population": "6,391",
    "Density": 188.4
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Nhân Nghĩa",
    "Population": "6,192",
    "Density": 382.01
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Sông Nhạn",
    "Population": "8,423",
    "Density": 176.16
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Sông Ray",
    "Population": "16,453",
    "Density": 486.88
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Thừa Đức",
    "Population": "8,134",
    "Density": 278.93
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Xuân Bảo",
    "Population": "9,587",
    "Density": 451.39
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Xuân Đông",
    "Population": "18,099",
    "Density": 361.92
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Xuân Đường",
    "Population": "5,801",
    "Density": 152.74
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Xuân Mỹ",
    "Population": "10,820",
    "Density": 381.36
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Xuân Quế",
    "Population": "8,016",
    "Density": 172.97
  },
  {
    "Province": "Đồng Nai",
    "District": "Cẩm Mỹ",
    "Ward": "Xuân Tây",
    "Population": "17,943",
    "Density": 341.16
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Định Quán",
    "Population": "19,487",
    "Density": 1845.71
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Gia Canh",
    "Population": "16,358",
    "Density": 95.03
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "La Ngà",
    "Population": "14,948",
    "Density": 180.18
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Ngọc Định",
    "Population": "7,831",
    "Density": 180.37
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Cường",
    "Population": "13,357",
    "Density": 230.9
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Hòa",
    "Population": "5,493",
    "Density": 356.9
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Lợi",
    "Population": "11,877",
    "Density": 461.12
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Ngọc",
    "Population": "17,175",
    "Density": 245.51
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Tân",
    "Population": "10,502",
    "Density": 235.96
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Túc",
    "Population": "12,232",
    "Density": 437.45
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Vinh",
    "Population": "13,359",
    "Density": 548.89
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Suối Nho",
    "Population": "14,298",
    "Density": 433.55
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Thanh Sơn",
    "Population": "24,265",
    "Density": 77.05
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Túc Trưng",
    "Population": "10,158",
    "Density": 196.61
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Long Khánh",
    "Population": "130,704",
    "Density": 682.42
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Bảo Quang",
    "Population": "9,843",
    "Density": 280.65
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Bảo Vinh",
    "Population": "14,380",
    "Density": 913.94
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Bàu Sen",
    "Population": "5,236",
    "Density": 443.58
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Bàu Trâm",
    "Population": "5,224",
    "Density": 455.49
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Bình Lộc",
    "Population": "7,597",
    "Density": 347.78
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Hàng Gòn",
    "Population": "10,474",
    "Density": 307.13
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Phú Bình",
    "Population": "4,378",
    "Density": 1885.04
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Suối Tre",
    "Population": "10,089",
    "Density": 403.24
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân An",
    "Population": "11,714",
    "Density": 9468.92
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân Bình",
    "Population": "8,451",
    "Density": 7003.4
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân Hoà",
    "Population": "7,012",
    "Density": 3095.94
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân Lập",
    "Population": "8,459",
    "Density": 518.54
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân Tân",
    "Population": "8,787",
    "Density": 820.83
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân Thanh",
    "Population": "8,380",
    "Density": 6167.21
  },
  {
    "Province": "Đồng Nai",
    "District": "Định Quán",
    "Ward": "Xuân Trung",
    "Population": "10,680",
    "Density": 9956.19
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "An Phước",
    "Population": "22,422",
    "Density": 790.09
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Bàu Cạn",
    "Population": "12,929",
    "Density": 303.65
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Bình An",
    "Population": "7,024",
    "Density": 307.61
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Bình Sơn",
    "Population": "10,375",
    "Density": 204.67
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Cẩm Đường",
    "Population": "8,325",
    "Density": 416.81
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Lộc An",
    "Population": "5,601",
    "Density": 292.57
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Long An",
    "Population": "14,217",
    "Density": 418.92
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Long Đức",
    "Population": "8,883",
    "Density": 292.28
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Long Phước",
    "Population": "16,059",
    "Density": 380.7
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Long Thành",
    "Population": "27,084",
    "Density": 2884.41
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Phước Bình",
    "Population": "11,305",
    "Density": 293.93
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Phước Thái",
    "Population": "22,034",
    "Density": 1192.9
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Suối Trầu",
    "Population": "4,792",
    "Density": 528.11
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Tam An",
    "Population": "10,142",
    "Density": 336.83
  },
  {
    "Province": "Đồng Nai",
    "District": "Long Thành",
    "Ward": "Tân Hiệp",
    "Population": "9,906",
    "Density": 307.78
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Đại Phước",
    "Population": "8,759",
    "Density": 528.8
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Hiệp Phước",
    "Population": "26,279",
    "Density": 1408.31
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Long Tân",
    "Population": "8,645",
    "Density": 251.97
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Long Thọ",
    "Population": "9,719",
    "Density": 409.1
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phú Đông",
    "Population": "10,308",
    "Density": 445.73
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phú Hội",
    "Population": "10,225",
    "Density": 537.76
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phú Hữu",
    "Population": "11,203",
    "Density": 515.25
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phước An",
    "Population": "8,658",
    "Density": 58.12
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phước Khánh",
    "Population": "11,829",
    "Density": 321
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phước Thiền",
    "Population": "24,666",
    "Density": 1431.49
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Phú Thạnh",
    "Population": "10,411",
    "Density": 534.42
  },
  {
    "Province": "Đồng Nai",
    "District": "Nhơn Trạch",
    "Ward": "Vĩnh Thanh",
    "Population": "17,554",
    "Density": 536.18
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Dak Lua",
    "Population": "5,852",
    "Density": 14.1
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Nam Cát Tiên",
    "Population": "5,351",
    "Density": 239.33
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Núi Tượng",
    "Population": "4,931",
    "Density": 216.7
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú An",
    "Population": "4,347",
    "Density": 83.94
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Bình",
    "Population": "11,071",
    "Density": 693.89
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Điền",
    "Population": "7,484",
    "Density": 375.83
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Lâm",
    "Population": "13,590",
    "Density": 2241.95
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Lập",
    "Population": "6,693",
    "Density": 443.77
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Lộc",
    "Population": "8,007",
    "Density": 260.61
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Sơn",
    "Population": "8,849",
    "Density": 640.3
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Thanh",
    "Population": "12,332",
    "Density": 431.66
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Thịnh",
    "Population": "8,408",
    "Density": 316.08
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Trung",
    "Population": "7,304",
    "Density": 460.73
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Phú Xuân",
    "Population": "11,740",
    "Density": 534.78
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Tà Lài",
    "Population": "6,914",
    "Density": 250.66
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Tân Phú",
    "Population": "21,050",
    "Density": 2573.16
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Thanh Sơn",
    "Population": "5,565",
    "Density": 374.34
  },
  {
    "Province": "Đồng Nai",
    "District": "Tân Phú",
    "Ward": "Trà Cổ",
    "Population": "6,438",
    "Density": 372.05
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Bàu Hàm 2",
    "Population": "17,109",
    "Density": 880.91
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Gia Kiệm",
    "Population": "20,975",
    "Density": 647.94
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Gia Tân 1",
    "Population": "14,505",
    "Density": 700.08
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Gia Tân 2",
    "Population": "13,390",
    "Density": 887.23
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Gia Tân 3",
    "Population": "19,890",
    "Density": 1099.68
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Hưng Lộc",
    "Population": "9,690",
    "Density": 476.87
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Lộ 25",
    "Population": "10,903",
    "Density": 562.76
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Quang Trung",
    "Population": "20,726",
    "Density": 553.02
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Xuân Thạnh",
    "Population": "10,537",
    "Density": 318.36
  },
  {
    "Province": "Đồng Nai",
    "District": "Thống Nhất",
    "Ward": "Xuân Thiện",
    "Population": "9,207",
    "Density": 296.97
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "An Viễn",
    "Population": "5,692",
    "Density": 251.24
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Bắc Sơn",
    "Population": "39,468",
    "Density": 1744.9
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Bàu Hàm",
    "Population": "9,283",
    "Density": 398.7
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Bình Minh",
    "Population": "19,123",
    "Density": 1389.05
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Cây Gáo",
    "Population": "9,635",
    "Density": 540.59
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Đồi 61",
    "Population": "9,560",
    "Density": 373.66
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Đông Hoà",
    "Population": "10,253",
    "Density": 578.15
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Giang Điền",
    "Population": "5,431",
    "Density": 610.7
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Hố Nai 3",
    "Population": "33,745",
    "Density": 1748.36
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Hưng Thịnh",
    "Population": "8,566",
    "Density": 495.37
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Quảng Tiến",
    "Population": "12,545",
    "Density": 1727.25
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Sông Thao",
    "Population": "10,029",
    "Density": 369.62
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Sông Trầu",
    "Population": "19,964",
    "Density": 479.34
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Tây Hoà",
    "Population": "11,212",
    "Density": 776.08
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Thanh Bình",
    "Population": "11,191",
    "Density": 381.48
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Trảng Bom",
    "Population": "19,068",
    "Density": 2082.27
  },
  {
    "Province": "Đồng Nai",
    "District": "Trảng Bom",
    "Ward": "Trung Hoà",
    "Population": "10,964",
    "Density": 762.77
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Bình Hòa",
    "Population": "6,288",
    "Density": 935.38
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Bình Lợi",
    "Population": "6,718",
    "Density": 437.43
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Hiếu Liêm",
    "Population": "3,648",
    "Density": 17.54
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Mã Đà",
    "Population": "7,309",
    "Density": 18.14
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Phú Lý",
    "Population": "11,553",
    "Density": 41.82
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Tân An",
    "Population": "9,547",
    "Density": 181.01
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Tân Bình",
    "Population": "9,822",
    "Density": 901.51
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Thạnh Phú",
    "Population": "21,351",
    "Density": 1539.48
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Thiện Tân",
    "Population": "5,795",
    "Density": 248.34
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Trị An",
    "Population": "3,694",
    "Density": 199.69
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Vĩnh An",
    "Population": "22,505",
    "Density": 697.94
  },
  {
    "Province": "Đồng Nai",
    "District": "Vĩnh Cửu",
    "Ward": "Vĩnh Tân",
    "Population": "16,682",
    "Density": 594.91
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Bảo Hoà",
    "Population": "10,880",
    "Density": 612.03
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Gia Ray",
    "Population": "12,368",
    "Density": 884.5
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Lang Minh",
    "Population": "6,756",
    "Density": 406.01
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Suối Cao",
    "Population": "12,723",
    "Density": 234.93
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Suối Cát",
    "Population": "10,891",
    "Density": 634.82
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Bắc",
    "Population": "17,583",
    "Density": 276.18
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Định",
    "Population": "7,377",
    "Density": 569.92
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Hiệp",
    "Population": "13,462",
    "Density": 546.21
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Hòa",
    "Population": "10,891",
    "Density": 126.36
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Hưng",
    "Population": "22,431",
    "Density": 216.47
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Phú",
    "Population": "15,541",
    "Density": 396.3
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Tâm",
    "Population": "24,476",
    "Density": 201.81
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Thành",
    "Population": "8,432",
    "Density": 122.61
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Thọ",
    "Population": "15,810",
    "Density": 415.54
  },
  {
    "Province": "Đồng Nai",
    "District": "Xuân Lộc",
    "Ward": "Xuân Trường",
    "Population": "15,926",
    "Density": 343.08
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Hòa An",
    "Population": "12,974",
    "Density": 1154.78
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Hoà Thuận",
    "Population": "7,546",
    "Density": 3281.58
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Ngãi",
    "Population": "4,115",
    "Density": 668.8
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Phú",
    "Population": "9,983",
    "Density": 3637.85
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Tân",
    "Population": "14,042",
    "Density": 1398.33
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Trà",
    "Population": "5,331",
    "Density": 702.25
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phường 1",
    "Population": "9,640",
    "Density": 4756.74
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phường 2",
    "Population": "9,623",
    "Density": 17932.62
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phường 3",
    "Population": "10,788",
    "Density": 3124.6
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phường 4",
    "Population": "10,131",
    "Density": 5365.71
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phường 6",
    "Population": "21,894",
    "Density": 2462.55
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phường 11",
    "Population": "11,613",
    "Density": 1391.24
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Tân Thuận Đông",
    "Population": "10,471",
    "Density": 645.76
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Tân Thuận Tây",
    "Population": "10,613",
    "Density": 1044.38
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Tịnh Thới",
    "Population": "12,528",
    "Density": 775.87
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "An Bình",
    "Population": "9,254",
    "Density": 1079.84
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Ba Sao",
    "Population": "13,822",
    "Density": 209.49
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Bình Hàng Tây",
    "Population": "9,414",
    "Density": 623.44
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Bình Hàng Trung",
    "Population": "11,321",
    "Density": 547.09
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Bình Thạnh",
    "Population": "19,345",
    "Density": 616.08
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Gáo Giồng",
    "Population": "7,575",
    "Density": 137.98
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Hiệp",
    "Population": "11,668",
    "Density": 460
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Hội",
    "Population": "10,626",
    "Density": 634.39
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Long",
    "Population": "11,217",
    "Density": 479.75
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Thọ",
    "Population": "13,796",
    "Density": 1560.86
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Thọ",
    "Population": "8,630",
    "Density": 338.86
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Mỹ Xương",
    "Population": "7,844",
    "Density": 696.13
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Nhị Mỹ",
    "Population": "11,016",
    "Density": 389.6
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phong Mỹ",
    "Population": "19,142",
    "Density": 654.56
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phương Thịnh",
    "Population": "8,657",
    "Density": 189.29
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Phương Trà",
    "Population": "8,025",
    "Density": 531.42
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Tân Hội Trung",
    "Population": "9,539",
    "Density": 240.19
  },
  {
    "Province": "Đồng Tháp",
    "District": "Cao Lãnh",
    "Ward": "Tân Nghĩa",
    "Population": "9,798",
    "Density": 407.93
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Hiệp",
    "Population": "11,059",
    "Density": 722.48
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Khánh",
    "Population": "13,276",
    "Density": 426
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Nhơn",
    "Population": "12,328",
    "Density": 575.91
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Phú Thuận",
    "Population": "10,774",
    "Density": 536.53
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Cái Tàu Hạ",
    "Population": "11,998",
    "Density": 2596.41
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Hòa Tân",
    "Population": "11,999",
    "Density": 340.76
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Phú Hựu",
    "Population": "8,362",
    "Density": 722.36
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Phú Long",
    "Population": "10,632",
    "Density": 517.9
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Tân Bình",
    "Population": "16,189",
    "Density": 998.52
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Tân Nhuận Đông",
    "Population": "19,723",
    "Density": 773.03
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Tân Phú",
    "Population": "6,352",
    "Density": 390.05
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Tân Phú Trung",
    "Population": "18,244",
    "Density": 612.96
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Hồng Ngự",
    "Population": "77,735",
    "Density": 635.4
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Bình A",
    "Population": "13,025",
    "Density": 480.36
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Bình B",
    "Population": "4,782",
    "Density": 251.83
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Lạc",
    "Population": "9,321",
    "Density": 1222.52
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Lộc",
    "Population": "7,922",
    "Density": 2066.14
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "An Thạnh",
    "Population": "24,858",
    "Density": 5156.62
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Bình Thạnh",
    "Population": "10,676",
    "Density": 219.35
  },
  {
    "Province": "Đồng Tháp",
    "District": "Châu Thành",
    "Ward": "Tân Hội",
    "Population": "7,151",
    "Density": 633.62
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Long Khánh A",
    "Population": "16,488",
    "Density": 845.45
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Long Khánh B",
    "Population": "11,649",
    "Density": 1250.3
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Long Thuận",
    "Population": "18,688",
    "Density": 889.1
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Phú Thuận A",
    "Population": "16,658",
    "Density": 833.61
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Phú Thuận B",
    "Population": "17,082",
    "Density": 741.53
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Thường Lạc",
    "Population": "3,234",
    "Density": 385.53
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Thường Phước 1",
    "Population": "20,126",
    "Density": 576.43
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Thường Phước 2",
    "Population": "10,128",
    "Density": 634.75
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Thường Thới Hậu A",
    "Population": "7,569",
    "Density": 555.52
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Thường Thới Hậu B",
    "Population": "8,740",
    "Density": 606.99
  },
  {
    "Province": "Đồng Tháp",
    "District": "Hồng Ngự",
    "Ward": "Thường Thới Tiền",
    "Population": "13,870",
    "Density": 458.45
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Định Hòa",
    "Population": "9,813",
    "Density": 559.27
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Hòa Long",
    "Population": "11,175",
    "Density": 621.14
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Hòa Thành",
    "Population": "8,721",
    "Density": 470.46
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Lai Vung",
    "Population": "8,747",
    "Density": 1156.55
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Long Hậu",
    "Population": "21,171",
    "Density": 863.56
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Long Thắng",
    "Population": "13,368",
    "Density": 429
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Phong Hòa",
    "Population": "17,864",
    "Density": 560.72
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Tân Dương",
    "Population": "11,199",
    "Density": 701.25
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Tân Hòa",
    "Population": "13,660",
    "Density": 704.34
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Tân Phước",
    "Population": "13,214",
    "Density": 797.9
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Tân Thành",
    "Population": "15,748",
    "Density": 881.35
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lai Vung",
    "Ward": "Vĩnh Thới",
    "Population": "15,339",
    "Density": 789
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Bình Thành",
    "Population": "16,783",
    "Density": 889.4
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Bình Thạnh Trung",
    "Population": "17,204",
    "Density": 549.95
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Định An",
    "Population": "18,065",
    "Density": 966.87
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Định Yên",
    "Population": "19,025",
    "Density": 1057.47
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Hội An Đông",
    "Population": "8,649",
    "Density": 691.81
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Lấp Vò",
    "Population": "10,560",
    "Density": 2349.02
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Long Hưng A",
    "Population": "9,437",
    "Density": 532.95
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Long Hưng B",
    "Population": "12,202",
    "Density": 555.55
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Mỹ An Hưng A",
    "Population": "9,367",
    "Density": 833.44
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Mỹ An Hưng B",
    "Population": "15,728",
    "Density": 668.96
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Tân Khánh Trung",
    "Population": "14,676",
    "Density": 770.64
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Tân Mỹ",
    "Population": "11,414",
    "Density": 634.46
  },
  {
    "Province": "Đồng Tháp",
    "District": "Lấp Vò",
    "Ward": "Vĩnh Thạnh",
    "Population": "16,914",
    "Density": 550.82
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "An Hoà",
    "Population": "10,700",
    "Density": 1635.29
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Phường 1",
    "Population": "17,771",
    "Density": 8402.36
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Phường 2",
    "Population": "15,921",
    "Density": 8885.48
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Phường 3",
    "Population": "9,322",
    "Density": 6448.09
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Phường 4",
    "Population": "4,577",
    "Density": 2641.08
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Tân Khánh Đông",
    "Population": "16,385",
    "Density": 753.61
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Tân Phú Đông",
    "Population": "15,988",
    "Density": 1289.87
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Tân Quy Đông",
    "Population": "8,194",
    "Density": 1312.93
  },
  {
    "Province": "Đồng Tháp",
    "District": "Sa Đéc",
    "Ward": "Tân Quy Tây",
    "Population": "4,725",
    "Density": 868.28
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "An Hòa",
    "Population": "10,163",
    "Density": 391.11
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "An Long",
    "Population": "13,558",
    "Density": 754.4
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Hoà Bình",
    "Population": "4,823",
    "Density": 159.09
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Cường",
    "Population": "9,281",
    "Density": 171.39
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Đức",
    "Population": "7,860",
    "Density": 156.84
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Hiệp",
    "Population": "8,062",
    "Density": 160.02
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Ninh",
    "Population": "8,368",
    "Density": 555.02
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Thành A",
    "Population": "11,595",
    "Density": 539.28
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Thành B",
    "Population": "4,439",
    "Density": 85.57
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Phú Thọ",
    "Population": "11,037",
    "Density": 170.87
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Tân Công Sính",
    "Population": "5,937",
    "Density": 75.36
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tam Nông",
    "Ward": "Tràm Chim",
    "Population": "10,167",
    "Density": 892.39
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "An Phước",
    "Population": "6,295",
    "Density": 265.69
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Bình Phú",
    "Population": "10,583",
    "Density": 240.21
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Sa Rài",
    "Population": "9,670",
    "Density": 1306.95
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Tân Công Chí",
    "Population": "11,449",
    "Density": 222.23
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Tân Hộ Cơ",
    "Population": "10,683",
    "Density": 227.8
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Tân Phước",
    "Population": "11,947",
    "Density": 285.19
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Tân Thành A",
    "Population": "9,943",
    "Density": 284.07
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Tân Thành B",
    "Population": "7,745",
    "Density": 243.52
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tân Hồng",
    "Ward": "Thông Bình",
    "Population": "12,679",
    "Density": 424.93
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "An Phong",
    "Population": "16,920",
    "Density": 435.33
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Bình Tấn",
    "Population": "5,649",
    "Density": 173.48
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Bình Thành",
    "Population": "18,844",
    "Density": 478.76
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Phú Lợi",
    "Population": "6,719",
    "Density": 180.05
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Bình",
    "Population": "8,956",
    "Density": 567.91
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Hòa",
    "Population": "9,585",
    "Density": 593.39
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Huề",
    "Population": "14,259",
    "Density": 645.76
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Long",
    "Population": "10,538",
    "Density": 714.68
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Mỹ",
    "Population": "8,961",
    "Density": 189.07
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Phú",
    "Population": "8,978",
    "Density": 380.57
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Quới",
    "Population": "13,158",
    "Density": 693.22
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Tân Thạnh",
    "Population": "19,114",
    "Density": 660.4
  },
  {
    "Province": "Đồng Tháp",
    "District": "Thanh Bình",
    "Ward": "Thanh Bình",
    "Population": "12,511",
    "Density": 1622.76
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Đốc Binh Kiều",
    "Population": "12,263",
    "Density": 360.43
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Hưng Thạnh",
    "Population": "8,978",
    "Density": 195.52
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Láng Biển",
    "Population": "4,452",
    "Density": 174.64
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Mỹ An",
    "Population": "18,706",
    "Density": 1015.47
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Mỹ An",
    "Population": "7,687",
    "Density": 397.1
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Mỹ Đông",
    "Population": "8,339",
    "Density": 301.29
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Mỹ Hòa",
    "Population": "9,880",
    "Density": 262.27
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Mỹ Quý",
    "Population": "17,063",
    "Density": 264.9
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Phú Điền",
    "Population": "12,580",
    "Density": 273.16
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Tân Kiều",
    "Population": "9,782",
    "Density": 241.66
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Thạnh Lợi",
    "Population": "4,553",
    "Density": 74.13
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Thanh Mỹ",
    "Population": "13,538",
    "Density": 287.96
  },
  {
    "Province": "Đồng Tháp",
    "District": "Tháp Mười",
    "Ward": "Trường Xuân",
    "Population": "9,660",
    "Density": 144.24
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "An Khê",
    "Population": "63,375",
    "Density": 318.1
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "An Bình",
    "Population": "7,281",
    "Density": 766.07
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "An Phú",
    "Population": "12,232",
    "Density": 3082.74
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "An Phước",
    "Population": "3,388",
    "Density": 342.03
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "An Tân",
    "Population": "3,259",
    "Density": 952.87
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Cửu An",
    "Population": "3,815",
    "Density": 132.97
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Ngô Mây",
    "Population": "4,850",
    "Density": 502.95
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Song An",
    "Population": "4,854",
    "Density": 110.54
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Tây Sơn",
    "Population": "10,513",
    "Density": 2421.62
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Thành An",
    "Population": "5,011",
    "Density": 222.08
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Tú An",
    "Population": "4,858",
    "Density": 140.75
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Xuân An",
    "Population": "3,314",
    "Density": 115.18
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Ayun Pa",
    "Population": "34,890",
    "Density": 121.22
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Cheo Reo",
    "Population": "4,031",
    "Density": 898.65
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Chư Băh",
    "Population": "3,611",
    "Density": 50.76
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Đoàn Kết",
    "Population": "7,065",
    "Density": 1713.35
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Hòa Bình",
    "Population": "3,768",
    "Density": 778.45
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Ia RBol",
    "Population": "3,885",
    "Density": 46.6
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Ia RTô",
    "Population": "2,915",
    "Density": 77.05
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Ia Sao",
    "Population": "3,815",
    "Density": 49.07
  },
  {
    "Province": "Gia Lai",
    "District": "Tháp Mười",
    "Ward": "Sông Bờ",
    "Population": "5,800",
    "Density": 1354.32
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Chư Đăng Ya",
    "Population": "2,259",
    "Density": 53.81
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Chư Jôr",
    "Population": "1,040",
    "Density": 91.71
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Đăk Tơ Ver",
    "Population": "1,923",
    "Density": 47.17
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Hà Tây",
    "Population": "3,627",
    "Density": 16.31
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Hòa Phú",
    "Population": "5,491",
    "Density": 97.4
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Ka",
    "Population": "6,517",
    "Density": 56.94
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Khươl",
    "Population": "5,959",
    "Density": 64.97
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Kreng",
    "Population": "1,503",
    "Density": 13.98
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Ly",
    "Population": "6,186",
    "Density": 132.4
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Mơ Nông",
    "Population": "3,376",
    "Density": 58.63
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Nhin",
    "Population": "5,790",
    "Density": 181.77
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Ia Phí",
    "Population": "5,726",
    "Density": 83.16
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Nghĩa Hòa",
    "Population": "4,157",
    "Density": 184.26
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Nghĩa Hưng",
    "Population": "8,693",
    "Density": 220.86
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Păh",
    "Ward": "Phú Hòa",
    "Population": "5,068",
    "Density": 196.66
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Bàu Cạn",
    "Population": "5,299",
    "Density": 156.59
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Bình Giáo",
    "Population": "5,271",
    "Density": 126.55
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Chư Prông",
    "Population": "8,346",
    "Density": 408.98
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Băng",
    "Population": "5,141",
    "Density": 131.4
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Bang",
    "Population": "3,351",
    "Density": 84.79
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Boòng",
    "Population": "5,388",
    "Density": 103.08
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Drăng",
    "Population": "7,097",
    "Density": 173.36
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Ga",
    "Population": "3,399",
    "Density": 27.81
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Kly",
    "Population": "2,064",
    "Density": 93.74
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Lâu",
    "Population": "8,079",
    "Density": 65.54
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Me",
    "Population": "5,167",
    "Density": 47.64
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Mơ",
    "Population": "1,507",
    "Density": 3.45
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia O",
    "Population": "2,809",
    "Density": 77.96
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Phìn",
    "Population": "6,006",
    "Density": 143.93
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Pia",
    "Population": "4,886",
    "Density": 112.87
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Piơr",
    "Population": "7,413",
    "Density": 79.03
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Púch",
    "Population": "2,034",
    "Density": 7.58
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Tôr",
    "Population": "4,011",
    "Density": 175.65
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Ia Vê",
    "Population": "4,984",
    "Density": 70.24
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Prông",
    "Ward": "Thăng Hưng",
    "Population": "5,613",
    "Density": 145.71
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Chư Don",
    "Population": "2,726",
    "Density": 78.13
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Ia BLứ",
    "Population": "6,510",
    "Density": 33.53
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Ia Dreng",
    "Population": "5,743",
    "Density": 255.7
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Ia Hla",
    "Population": "4,232",
    "Density": 32.49
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Ia Hrú",
    "Population": "12,580",
    "Density": 200.49
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Ia Le",
    "Population": "9,869",
    "Density": 79.56
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Ia Phang",
    "Population": "8,865",
    "Density": 69.49
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Pưh",
    "Ward": "Nhơn Hoà",
    "Population": "10,881",
    "Density": 496.58
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Al Bá",
    "Population": "8,683",
    "Density": 184.02
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Ayun",
    "Population": "3,273",
    "Density": 63.12
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Bar Măih",
    "Population": "5,052",
    "Density": 103.15
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Bờ Ngoong",
    "Population": "6,486",
    "Density": 176.92
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Chư Pơng",
    "Population": "3,086",
    "Density": 78.12
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Chư Sê",
    "Population": "25,346",
    "Density": 914.52
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Dun",
    "Population": "10,026",
    "Density": 187.87
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "H Bông",
    "Population": "6,672",
    "Density": 42.48
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Ia Blang",
    "Population": "9,362",
    "Density": 462.07
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Ia Glai",
    "Population": "5,461",
    "Density": 155.31
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Ia HLốp",
    "Population": "8,787",
    "Density": 204.29
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Ia Ko",
    "Population": "4,852",
    "Density": 129.57
  },
  {
    "Province": "Gia Lai",
    "District": "Chư Sê",
    "Ward": "Ia Tiêm",
    "Population": "7,144",
    "Density": 154
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "A Dơk",
    "Population": "5,237",
    "Density": 250.1
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Đăk Đoa",
    "Population": "8,734",
    "Density": 1597.35
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Đak Krong",
    "Population": "4,813",
    "Density": 143.94
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Đăk Sơmei",
    "Population": "4,345",
    "Density": 30.02
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Glar",
    "Population": "9,442",
    "Density": 216.53
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Hà Bầu",
    "Population": "6,187",
    "Density": 129.84
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Hà Đông",
    "Population": "3,608",
    "Density": 18.45
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Hải Yang",
    "Population": "3,188",
    "Density": 45.62
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "H'Neng",
    "Population": "4,573",
    "Density": 217.6
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "HNol",
    "Population": "2,868",
    "Density": 62.43
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Ia Băng",
    "Population": "10,276",
    "Density": 192.72
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Ia Pết",
    "Population": "5,929",
    "Density": 143.86
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "K'Dang",
    "Population": "9,031",
    "Density": 118.86
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Kon Gang",
    "Population": "4,830",
    "Density": 54.45
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Nam Yang",
    "Population": "6,208",
    "Density": 403.35
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Tân Bình",
    "Population": "4,207",
    "Density": 194.82
  },
  {
    "Province": "Gia Lai",
    "District": "Đắk Đoa",
    "Ward": "Trang",
    "Population": "4,775",
    "Density": 83.15
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "An Thành",
    "Population": "2,505",
    "Density": 59.26
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Cư An",
    "Population": "6,114",
    "Density": 163.73
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Đak Pơ",
    "Population": "4,279",
    "Density": 195.38
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Hà Tam",
    "Population": "3,565",
    "Density": 37.01
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Phú An",
    "Population": "4,352",
    "Density": 115.74
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Tân An",
    "Population": "10,972",
    "Density": 421
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Ya Hội",
    "Population": "2,341",
    "Density": 13.19
  },
  {
    "Province": "Gia Lai",
    "District": "Đak Pơ",
    "Ward": "Yang Bắc",
    "Population": "3,889",
    "Density": 62.57
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Chư Ty",
    "Population": "10,607",
    "Density": 707.56
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Din",
    "Population": "6,035",
    "Density": 138.02
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Dơk",
    "Population": "7,048",
    "Density": 138.95
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Dom",
    "Population": "5,650",
    "Density": 39.29
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Kla",
    "Population": "7,202",
    "Density": 146
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Krêl",
    "Population": "7,443",
    "Density": 139.02
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Kriêng",
    "Population": "4,100",
    "Density": 37.71
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Lang",
    "Population": "3,340",
    "Density": 67.08
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Nan",
    "Population": "6,753",
    "Density": 73.37
  },
  {
    "Province": "Gia Lai",
    "District": "Đức Cơ",
    "Ward": "Ia Pnôn",
    "Population": "3,853",
    "Density": 33.78
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Bă",
    "Population": "5,151",
    "Density": 47.41
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Chia",
    "Population": "6,668",
    "Density": 38.37
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Dêr",
    "Population": "8,259",
    "Density": 133.6
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Grăng",
    "Population": "3,010",
    "Density": 37.99
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Hrung",
    "Population": "4,921",
    "Density": 111.67
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Kha",
    "Population": "9,920",
    "Density": 166.32
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Khai",
    "Population": "3,478",
    "Density": 21.03
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia KRai",
    "Population": "8,125",
    "Density": 131.03
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia O",
    "Population": "9,075",
    "Density": 66.68
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Pếch",
    "Population": "3,664",
    "Density": 44.04
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Sao",
    "Population": "7,952",
    "Density": 216.98
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Tô",
    "Population": "10,327",
    "Density": 128.35
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Grai",
    "Ward": "Ia Yok",
    "Population": "8,063",
    "Density": 309.37
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Chư Mố",
    "Population": "5,757",
    "Density": 32.22
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Chư Răng",
    "Population": "3,930",
    "Density": 91.09
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Ia Broăi",
    "Population": "3,493",
    "Density": 129.13
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Ia KDăm",
    "Population": "3,162",
    "Density": 27.74
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Ia Ma Rơn",
    "Population": "10,646",
    "Density": 339
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Ia Trok",
    "Population": "8,475",
    "Density": 374.37
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Ia Tul",
    "Population": "2,621",
    "Density": 9.8
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Kim Tân",
    "Population": "5,243",
    "Density": 105.6
  },
  {
    "Province": "Gia Lai",
    "District": "Ia Pa",
    "Ward": "Pờ Tó",
    "Population": "5,703",
    "Density": 42.45
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Đăk HLơ",
    "Population": "2,605",
    "Density": 132.98
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Đăk Roong",
    "Population": "3,219",
    "Density": 9.4
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Đak SMar",
    "Population": "1,510",
    "Density": 11.66
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Đông",
    "Population": "5,037",
    "Density": 135.79
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "KBang",
    "Population": "15,753",
    "Density": 880.99
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Kông Lơng Khơng",
    "Population": "3,807",
    "Density": 99.51
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Kông Pla",
    "Population": "2,847",
    "Density": 70.45
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Kon Pne",
    "Population": "1,376",
    "Density": 7.98
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "KRong",
    "Population": "4,782",
    "Density": 15.36
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Lơ Ku",
    "Population": "2,895",
    "Density": 20.47
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Nghĩa An",
    "Population": "3,654",
    "Density": 104.06
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Sơn Lang",
    "Population": "3,876",
    "Density": 11.53
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Sơ Pai",
    "Population": "4,830",
    "Density": 42.35
  },
  {
    "Province": "Gia Lai",
    "District": "K'Bang",
    "Ward": "Tơ Tung",
    "Population": "5,491",
    "Density": 53.45
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "An Trung",
    "Population": "4,414",
    "Density": 49.87
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Chơ Long",
    "Population": "3,252",
    "Density": 23.29
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Chư Krêy",
    "Population": "2,344",
    "Density": 21.66
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Đắk Cơ Ning (Kơ Ning)",
    "Population": "2,166",
    "Density": 15.61
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Đăk Pling",
    "Population": "1,597",
    "Density": 8.94
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Đăk Pơ Pho",
    "Population": "1,759",
    "Density": 31.39
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Đăk Song",
    "Population": "1,964",
    "Density": 13.13
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Đăk Tơ Pang",
    "Population": "1,224",
    "Density": 15.57
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Kông Chro",
    "Population": "9,014",
    "Density": 340.38
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Kông Yang",
    "Population": "3,445",
    "Density": 63.85
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "SRó",
    "Population": "3,351",
    "Density": 16.2
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Ya Ma",
    "Population": "1,756",
    "Density": 38.98
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Yang Nam",
    "Population": "4,096",
    "Density": 31.34
  },
  {
    "Province": "Gia Lai",
    "District": "Kông Chro",
    "Ward": "Yang Trung",
    "Population": "2,253",
    "Density": 51.38
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Chư Drăng",
    "Population": "5,173",
    "Density": 33.36
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Chư Gu",
    "Population": "6,359",
    "Density": 88.19
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Chư Ngọc",
    "Population": "4,536",
    "Density": 60.22
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Chư Rcăm",
    "Population": "6,067",
    "Density": 29.51
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Đất Bằng",
    "Population": "3,832",
    "Density": 30.47
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Ia HDreh",
    "Population": "4,164",
    "Density": 30.98
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Ia Mláh",
    "Population": "3,420",
    "Density": 31.17
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Ia RMok",
    "Population": "5,685",
    "Density": 38.36
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Ia RSai",
    "Population": "4,000",
    "Density": 20.37
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Ia RSươm",
    "Population": "6,026",
    "Density": 55.91
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Krông Năng",
    "Population": "3,042",
    "Density": 30.35
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Phú Cần",
    "Population": "5,593",
    "Density": 219.76
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Phú Túc",
    "Population": "10,403",
    "Density": 493.48
  },
  {
    "Province": "Gia Lai",
    "District": "Krông Pa",
    "Ward": "Uar",
    "Population": "4,097",
    "Density": 27.92
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Ayun",
    "Population": "7,247",
    "Density": 80.68
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Đăk Djrăng",
    "Population": "4,336",
    "Density": 89.37
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Đak Jơ Ta",
    "Population": "2,486",
    "Density": 22.84
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Đak Ta Ley",
    "Population": "2,984",
    "Density": 57.63
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Đăk Trôi",
    "Population": "2,220",
    "Density": 30.05
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Đăk Yă",
    "Population": "4,095",
    "Density": 104.75
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Đê Ar",
    "Population": "3,027",
    "Density": 33.6
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Hà Ra (Hra)",
    "Population": "6,857",
    "Density": 37.57
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Kon Chiêng",
    "Population": "4,086",
    "Density": 20.59
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Kon Dơng",
    "Population": "7,831",
    "Density": 460.24
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Kon Thụp",
    "Population": "4,278",
    "Density": 70.09
  },
  {
    "Province": "Gia Lai",
    "District": "Mang Yang",
    "Ward": "Lơ Pang",
    "Population": "3,713",
    "Density": 22.41
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ayun Hạ",
    "Population": "5,445",
    "Density": 225.58
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Chrôh Pơnan",
    "Population": "4,279",
    "Density": 214.95
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Chư A Thai",
    "Population": "3,464",
    "Density": 45.83
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ia Ake",
    "Population": "6,490",
    "Density": 190.8
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ia Hiao",
    "Population": "7,136",
    "Density": 107.84
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ia Peng",
    "Population": "5,214",
    "Density": 276.74
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ia Piar",
    "Population": "7,198",
    "Density": 76.26
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ia Sol",
    "Population": "8,751",
    "Density": 72.61
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Ia Yeng",
    "Population": "4,981",
    "Density": 133.74
  },
  {
    "Province": "Gia Lai",
    "District": "Phú Thiện",
    "Ward": "Phú Thiện",
    "Population": "17,923",
    "Density": 1316.71
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "An Phú",
    "Population": "10,085",
    "Density": 920.42
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Biển Hồ",
    "Population": "7,476",
    "Density": 393.41
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Chi Lăng",
    "Population": "6,993",
    "Density": 537.43
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Chư Á",
    "Population": "8,065",
    "Density": 547.15
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Chư HDrông",
    "Population": "2,206",
    "Density": 171.75
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Diên Hồng",
    "Population": "10,084",
    "Density": 7119.96
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Diên Phú",
    "Population": "2,449",
    "Density": 148.02
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Đống Đa",
    "Population": "6,434",
    "Density": 1442.6
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Gào",
    "Population": "3,567",
    "Density": 61.36
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Hoa Lư",
    "Population": "14,176",
    "Density": 2729.99
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Hội Phú",
    "Population": "9,570",
    "Density": 1989.03
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Hội Thương",
    "Population": "11,012",
    "Density": 14340.78
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Ia Kênh",
    "Population": "3,394",
    "Density": 107.96
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Ia Kring",
    "Population": "15,824",
    "Density": 2268.15
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Phù Đổng",
    "Population": "13,977",
    "Density": 3038.94
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Tân Sơn",
    "Population": "5,023",
    "Density": 554.24
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Tây Sơn",
    "Population": "9,551",
    "Density": 5834.1
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Thắng Lợi",
    "Population": "9,398",
    "Density": 1453.22
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Thống Nhất",
    "Population": "9,756",
    "Density": 1642.87
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Trà Bá",
    "Population": "11,030",
    "Density": 2384.56
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Trà Đa",
    "Population": "4,318",
    "Density": 312.9
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Yên Đỗ",
    "Population": "16,499",
    "Density": 8976.61
  },
  {
    "Province": "Gia Lai",
    "District": "Pleiku",
    "Ward": "Yên Thế",
    "Population": "17,747",
    "Density": 1319.87
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Đường Âm",
    "Population": "3,593",
    "Density": 87.45
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Đường Hồng",
    "Population": "3,922",
    "Density": 95.18
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Giáp Trung",
    "Population": "4,679",
    "Density": 63.44
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Lạc Nông",
    "Population": "2,320",
    "Density": 51.54
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Minh Ngọc",
    "Population": "3,791",
    "Density": 43.07
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Minh Sơn",
    "Population": "5,435",
    "Density": 37.23
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Phiêng Luông",
    "Population": "1,229",
    "Density": 94.36
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Phú Nam",
    "Population": "2,474",
    "Density": 52.92
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Thượng Tân",
    "Population": "2,035",
    "Density": 27.88
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Yên Cường",
    "Population": "5,978",
    "Density": 58.48
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Yên Định",
    "Population": "3,417",
    "Density": 47.17
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Yên Phong",
    "Population": "1,900",
    "Density": 53.28
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Mê",
    "Ward": "Yên Phú",
    "Population": "6,566",
    "Density": 97.38
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Bằng Hành",
    "Population": "4,389",
    "Density": 103.82
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Đồng Tâm",
    "Population": "4,427",
    "Density": 68.13
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Đông Thành",
    "Population": "2,155",
    "Density": 68.13
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Đồng Tiến",
    "Population": "2,089",
    "Density": 57.79
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Đồng Yên",
    "Population": "7,076",
    "Density": 148.77
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Đức Xuân",
    "Population": "2,076",
    "Density": 40.72
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Hùng An",
    "Population": "7,992",
    "Density": 219.21
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Hữu Sản",
    "Population": "2,445",
    "Density": 45.82
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Kim Ngọc",
    "Population": "4,092",
    "Density": 102.74
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Liên Hiệp",
    "Population": "3,657",
    "Density": 64.25
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Quang Minh",
    "Population": "9,039",
    "Density": 177.43
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Tân Lập",
    "Population": "2,173",
    "Density": 17.9
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Tân Quang",
    "Population": "4,613",
    "Density": 348.73
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Tân Thành",
    "Population": "3,132",
    "Density": 89.93
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Thượng Bình",
    "Population": "1,762",
    "Density": 40.48
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Tiên Kiều",
    "Population": "3,629",
    "Density": 64.6
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Việt Hồng",
    "Population": "2,405",
    "Density": 91.39
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Việt Quang",
    "Population": "12,946",
    "Density": 283.07
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Việt Vinh",
    "Population": "4,604",
    "Density": 100.98
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Vĩnh Hảo",
    "Population": "4,723",
    "Density": 73.71
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Vĩnh Phúc",
    "Population": "7,050",
    "Density": 184.72
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Vĩnh Tuy",
    "Population": "3,174",
    "Density": 295.5
  },
  {
    "Province": "Hà Giang",
    "District": "Bắc Quang",
    "Ward": "Vô Điếm",
    "Population": "5,274",
    "Density": 72.71
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Đồng Văn",
    "Population": "6,989",
    "Density": 187.47
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Hố Quáng Phìn",
    "Population": "2,890",
    "Density": 105.23
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Lũng Cú",
    "Population": "3,745",
    "Density": 103.28
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Lũng Phìn",
    "Population": "3,733",
    "Density": 218.09
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Lũng Táo",
    "Population": "3,029",
    "Density": 139.25
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Lũng Thầu",
    "Population": "1,884",
    "Density": 129.66
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Má Lé",
    "Population": "3,376",
    "Density": 78.94
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Phó Bảng",
    "Population": "2,188",
    "Density": 192.52
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Phố Cáo",
    "Population": "5,095",
    "Density": 135.75
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Phố Là",
    "Population": "2,103",
    "Density": 155.24
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Sảng Tủng",
    "Population": "3,185",
    "Density": 99.77
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Sính Lủng",
    "Population": "3,085",
    "Density": 150.15
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Sủng Là",
    "Population": "3,276",
    "Density": 220.25
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Sủng Trái",
    "Population": "5,349",
    "Density": 214.72
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Tả Lủng",
    "Population": "2,927",
    "Density": 101.32
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Tả Phìn",
    "Population": "2,884",
    "Density": 140.61
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Thài Phìn Tủng",
    "Population": "3,101",
    "Density": 201.05
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Vần Chải",
    "Population": "3,277",
    "Density": 130.55
  },
  {
    "Province": "Hà Giang",
    "District": "Đồng Văn",
    "Ward": "Xà Phìn",
    "Population": "2,641",
    "Density": 150.24
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Minh Khai",
    "Population": "10,500",
    "Density": 1728.48
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Ngọc Đường",
    "Population": "2,943",
    "Density": 99.08
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Ngọc Hà",
    "Population": "3,957",
    "Density": 774.85
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Nguyễn Trãi",
    "Population": "8,861",
    "Density": 2085.38
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Phương Độ",
    "Population": "4,347",
    "Density": 99.19
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Phương Thiện",
    "Population": "3,510",
    "Density": 106.33
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Quang Trung",
    "Population": "4,047",
    "Density": 322.11
  },
  {
    "Province": "Hà Giang",
    "District": "Hà Giang",
    "Ward": "Trần Phú",
    "Population": "7,121",
    "Density": 3327.73
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Bản Luốc",
    "Population": "2,201",
    "Density": 78.73
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Bản Máy",
    "Population": "2,035",
    "Density": 64.38
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Bản Nhùng",
    "Population": "2,282",
    "Density": 137.07
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Bản Péo",
    "Population": "1,302",
    "Density": 110.67
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Bản Phùng",
    "Population": "2,518",
    "Density": 146.78
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Chiến Phố",
    "Population": "3,252",
    "Density": 106.77
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Đản Ván",
    "Population": "1,861",
    "Density": 108.89
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Hồ Thầu",
    "Population": "2,074",
    "Density": 38.94
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Nậm Dịch",
    "Population": "1,818",
    "Density": 98.88
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Nậm Khòa",
    "Population": "2,916",
    "Density": 65.4
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Nam Sơn",
    "Population": "2,860",
    "Density": 94.98
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Nậm Tỵ",
    "Population": "2,725",
    "Density": 62.2
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Nàng Đôn",
    "Population": "1,756",
    "Density": 131.71
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Ngàm Đăng Vài",
    "Population": "1,964",
    "Density": 165.64
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Pố Lồ",
    "Population": "2,830",
    "Density": 107.27
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Pờ Ly Ngài",
    "Population": "1,896",
    "Density": 90.41
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Sán Xả Hồ",
    "Population": "2,046",
    "Density": 149.54
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Tân Tiến",
    "Population": "3,566",
    "Density": 196.84
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Tả Sử Choóng",
    "Population": "1,450",
    "Density": 60.62
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Thàng Tín",
    "Population": "1,882",
    "Density": 82.69
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Thèn Chu Phìn",
    "Population": "1,606",
    "Density": 77.4
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Thông Nguyên",
    "Population": "3,029",
    "Density": 78.02
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Túng Sán",
    "Population": "2,880",
    "Density": 58.9
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Tụ Nhân",
    "Population": "3,235",
    "Density": 122.49
  },
  {
    "Province": "Hà Giang",
    "District": "Hoàng Su Phì",
    "Ward": "Vinh Quang",
    "Population": "3,443",
    "Density": 760.87
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Cán Chu Phìn",
    "Population": "5,101",
    "Density": 201.16
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Giàng Chu Phìn",
    "Population": "4,127",
    "Density": 161.78
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Khâu Vai",
    "Population": "5,935",
    "Density": 191.92
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Lũng Chinh",
    "Population": "3,406",
    "Density": 177.87
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Lũng Pù",
    "Population": "4,510",
    "Density": 141.73
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Mèo Vạc",
    "Population": "4,866",
    "Density": 267.88
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Nậm Ban",
    "Population": "3,150",
    "Density": 59.86
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Niêm Sơn",
    "Population": "4,378",
    "Density": 79.94
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Niêm Tòng",
    "Population": "4,497",
    "Density": 140.61
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Pải Lủng",
    "Population": "2,628",
    "Density": 127.75
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Pả Vi",
    "Population": "2,464",
    "Density": 86.14
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Sơn Vĩ",
    "Population": "5,388",
    "Density": 98.49
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Sủng Máng",
    "Population": "2,403",
    "Density": 98.08
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Sủng Trà",
    "Population": "3,829",
    "Density": 159.22
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Tả Lủng",
    "Population": "2,553",
    "Density": 160.28
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Tát Ngà",
    "Population": "3,027",
    "Density": 61.75
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Thượng Phùng",
    "Population": "3,698",
    "Density": 112.2
  },
  {
    "Province": "Hà Giang",
    "District": "Mèo Vạc",
    "Ward": "Xín Cái",
    "Population": "4,202",
    "Density": 120.19
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Bát Đại Sơn",
    "Population": "2,768",
    "Density": 52.99
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Cán Tỷ",
    "Population": "4,158",
    "Density": 102.13
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Cao Mã Pờ",
    "Population": "2,153",
    "Density": 53.24
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Đông Hà",
    "Population": "2,351",
    "Density": 69.63
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Lùng Tám",
    "Population": "3,361",
    "Density": 70.82
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Nghĩa Thuận",
    "Population": "3,056",
    "Density": 73.96
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Quản Bạ",
    "Population": "2,660",
    "Density": 133.64
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Quyết Tiến",
    "Population": "6,263",
    "Density": 104.16
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Tam Sơn",
    "Population": "5,184",
    "Density": 466.31
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Tả Ván",
    "Population": "2,119",
    "Density": 47.85
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Thái An",
    "Population": "2,294",
    "Density": 49.41
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Thanh Vân",
    "Population": "4,154",
    "Density": 105.35
  },
  {
    "Province": "Hà Giang",
    "District": "Quản Bạ",
    "Ward": "Tùng Vài",
    "Population": "3,985",
    "Density": 53.6
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Bằng Lang",
    "Population": "6,034",
    "Density": 84.2
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Bản Rịa",
    "Population": "1,750",
    "Density": 52.91
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Hương Sơn",
    "Population": "2,310",
    "Density": 62.81
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Nà Khương",
    "Population": "2,607",
    "Density": 87.91
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Tân Bắc",
    "Population": "3,983",
    "Density": 63.42
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Tân Nam",
    "Population": "2,867",
    "Density": 35.37
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Tân Trịnh",
    "Population": "4,413",
    "Density": 85.48
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Tiên Nguyên",
    "Population": "4,277",
    "Density": 41.57
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Tiên Yên",
    "Population": "3,685",
    "Density": 115.84
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Vĩ Thượng",
    "Population": "5,430",
    "Density": 184.19
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Xuân Giang",
    "Population": "4,670",
    "Density": 92.89
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Xuân Minh",
    "Population": "2,307",
    "Density": 33.47
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Yên Bình",
    "Population": "5,751",
    "Density": 121.22
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Yên Hà",
    "Population": "3,555",
    "Density": 73.28
  },
  {
    "Province": "Hà Giang",
    "District": "Quang Bình",
    "Ward": "Yên Thành",
    "Population": "2,954",
    "Density": 67.35
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Bạch Ngọc",
    "Population": "3,809",
    "Density": 31.85
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Cao Bồ",
    "Population": "3,680",
    "Density": 33.51
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Đạo Đức",
    "Population": "4,944",
    "Density": 110.89
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Kim Linh",
    "Population": "2,521",
    "Density": 60.15
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Kim Thạch",
    "Population": "2,207",
    "Density": 83.78
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Lao Chải",
    "Population": "1,801",
    "Density": 34.96
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Linh Hồ",
    "Population": "7,571",
    "Density": 99.54
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Minh Tân",
    "Population": "5,457",
    "Density": 47.29
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Ngọc Linh",
    "Population": "4,208",
    "Density": 90.13
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Ngọc Minh",
    "Population": "3,861",
    "Density": 54.49
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Nông trường Việt Lâm (NT Việt Lâm)",
    "Population": "4,495",
    "Density": 264.23
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Phong Quang",
    "Population": "2,192",
    "Density": 65.61
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Phú Linh",
    "Population": "5,073",
    "Density": 106.58
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Phương Tiến",
    "Population": "2,887",
    "Density": 48.19
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Quảng Ngần",
    "Population": "2,163",
    "Density": 26.22
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Thanh Đức",
    "Population": 738,
    "Density": 31.38
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Thanh Thủy",
    "Population": "2,054",
    "Density": 39.27
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Thuận Hoà",
    "Population": "5,902",
    "Density": 54.45
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Thượng Sơn",
    "Population": "5,199",
    "Density": 45.06
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Trung Thành",
    "Population": "5,481",
    "Density": 89.46
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Tùng Bá",
    "Population": "6,827",
    "Density": 55.74
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Việt Lâm",
    "Population": "4,159",
    "Density": 106.53
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Vị Xuyên",
    "Population": "7,579",
    "Density": 494.23
  },
  {
    "Province": "Hà Giang",
    "District": "Vị Xuyên",
    "Ward": "Xín Chải",
    "Population": 917,
    "Density": 39.71
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Bản Díu",
    "Population": "4,231",
    "Density": 232.49
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Bản Ngò",
    "Population": "3,253",
    "Density": 165.33
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Chế Là",
    "Population": "2,965",
    "Density": 109.53
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Chí Cà",
    "Population": "2,669",
    "Density": 123.83
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Cốc Pài",
    "Population": "4,215",
    "Density": 265.6
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Cốc Rế",
    "Population": "2,071",
    "Density": 150.89
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Khuôn Lùng",
    "Population": "2,594",
    "Density": 75.14
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Nà Chì",
    "Population": "3,860",
    "Density": 46.56
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Nấm Dẩn",
    "Population": "3,287",
    "Density": 82.96
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Nàn Ma",
    "Population": "2,835",
    "Density": 141.58
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Nàn Xỉn",
    "Population": "3,299",
    "Density": 126.39
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Ngán Chiên",
    "Population": "3,529",
    "Density": 198.99
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Pà Vầy Sủ",
    "Population": "1,685",
    "Density": 66.18
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Quảng Nguyên",
    "Population": "4,986",
    "Density": 48.65
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Tả Nhìu",
    "Population": "3,244",
    "Density": 179.56
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Thèn Phàng",
    "Population": "3,870",
    "Density": 103.42
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Thu Tà",
    "Population": "2,434",
    "Density": 90.57
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Trung Thịnh",
    "Population": "2,024",
    "Density": 151.06
  },
  {
    "Province": "Hà Giang",
    "District": "Xín Mần",
    "Ward": "Xín Mần",
    "Population": "1,144",
    "Density": 49.22
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Bạch Đích",
    "Population": "3,152",
    "Density": 106.49
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Đông Minh",
    "Population": "2,278",
    "Density": 90.72
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Du Già",
    "Population": "6,535",
    "Density": 95.18
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Đường Thượng",
    "Population": "3,421",
    "Density": 68.7
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Du Tiến",
    "Population": "3,661",
    "Density": 62.45
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Hữu Vinh",
    "Population": "3,295",
    "Density": 118.75
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Lao Và Chải",
    "Population": "4,945",
    "Density": 78.84
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Lũng Hồ",
    "Population": "5,893",
    "Density": 112.7
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Mậu Duệ",
    "Population": "5,533",
    "Density": 117.1
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Mậu Long",
    "Population": "5,187",
    "Density": 85.14
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Na Khê",
    "Population": "3,760",
    "Density": 65.38
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Ngam La",
    "Population": "3,295",
    "Density": 58.01
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Ngọc Long",
    "Population": "7,288",
    "Density": 77.82
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Phú Lũng",
    "Population": "2,560",
    "Density": 191.37
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Sủng Thài",
    "Population": "5,569",
    "Density": 251.67
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Sủng Tráng",
    "Population": "3,043",
    "Density": 134.44
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Thắng Mố",
    "Population": "2,233",
    "Density": 94.35
  },
  {
    "Province": "Hà Giang",
    "District": "Yên Minh",
    "Ward": "Yên Minh",
    "Population": "5,977",
    "Density": 298.82
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "An Đổ",
    "Population": "8,591",
    "Density": 1029.42
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "An Lão",
    "Population": "10,174",
    "Density": 873.08
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "An Mỹ",
    "Population": "5,200",
    "Density": 815.06
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "An Ninh",
    "Population": "5,542",
    "Density": 943.59
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "An Nội",
    "Population": "7,784",
    "Density": 783.05
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Bình Mỹ",
    "Population": "5,236",
    "Density": 1747.26
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Bình Nghĩa",
    "Population": "12,687",
    "Density": 1562.96
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Bồ Đề",
    "Population": "6,064",
    "Density": 718.58
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Bối Cầu",
    "Population": "4,427",
    "Density": 632.96
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Đồng Du",
    "Population": "6,936",
    "Density": 961.6
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Đồn Xá",
    "Population": "5,323",
    "Density": 688.99
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Hưng Công",
    "Population": "6,267",
    "Density": 948.8
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "La Sơn",
    "Population": "6,251",
    "Density": 808.85
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Mỹ Thọ",
    "Population": "2,990",
    "Density": 587.38
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Ngọc Lũ",
    "Population": "7,673",
    "Density": 1352
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Tiêu Động",
    "Population": "6,967",
    "Density": 884.35
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Tràng An",
    "Population": "9,657",
    "Density": 1126.25
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Trung Lương",
    "Population": "6,498",
    "Density": 757.07
  },
  {
    "Province": "Hà Nam",
    "District": "Bình Lục",
    "Ward": "Vũ Bản",
    "Population": "8,549",
    "Density": 867.76
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Bạch Thượng",
    "Population": "7,601",
    "Density": 1002.8
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Châu Giang",
    "Population": "13,091",
    "Density": 902.02
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Châu Sơn",
    "Population": "3,370",
    "Density": 943.85
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Chuyên Ngoại",
    "Population": "8,876",
    "Density": 997.93
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Đọi Sơn",
    "Population": "5,539",
    "Density": 874.27
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Đồng Văn",
    "Population": "5,928",
    "Density": 1581.98
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Duy Hải",
    "Population": "5,024",
    "Density": 966.71
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Duy Minh",
    "Population": "5,730",
    "Density": 1284.52
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Hòa Mạc",
    "Population": "3,682",
    "Density": 2003.59
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Hoàng Đông",
    "Population": "7,454",
    "Density": 1056.06
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Mộc Bắc",
    "Population": "5,286",
    "Density": 484.11
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Mộc Nam",
    "Population": "3,569",
    "Density": 632.39
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Tiên Ngoại",
    "Population": "4,121",
    "Density": 552.83
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Tiên Nội",
    "Population": "6,461",
    "Density": 822.91
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Tiền Phong",
    "Population": "2,648",
    "Density": 1153.76
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Trác Văn",
    "Population": "7,286",
    "Density": 1076.6
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Yên Bắc",
    "Population": "10,463",
    "Density": 1101.47
  },
  {
    "Province": "Hà Nam",
    "District": "Duy Tiên",
    "Ward": "Yên Nam",
    "Population": "7,600",
    "Density": 928.31
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Ba Sao",
    "Population": "5,111",
    "Density": 161.91
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Đại Cương",
    "Population": "7,166",
    "Density": 1288.99
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Đồng Hóa",
    "Population": "8,762",
    "Density": 970.55
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Hoàng Tây",
    "Population": "5,278",
    "Density": 1114.84
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Khả Phong",
    "Population": "5,931",
    "Density": 515.69
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Lê Hồ",
    "Population": "8,310",
    "Density": 1122.09
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Liên Sơn",
    "Population": "3,541",
    "Density": 173.13
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Ngọc Sơn",
    "Population": "5,294",
    "Density": 832.26
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Nguyễn Úy",
    "Population": "6,427",
    "Density": 1098.8
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Nhật Tân",
    "Population": "9,418",
    "Density": 2002.68
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Nhật Tựu",
    "Population": "4,620",
    "Density": 1101.86
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Quế",
    "Population": "4,972",
    "Density": 1863.99
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Tân Sơn",
    "Population": "9,324",
    "Density": 917.9
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Thanh Sơn",
    "Population": "10,629",
    "Density": 348.78
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Thi Sơn",
    "Population": "8,087",
    "Density": 1155.17
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Thụy Lôi",
    "Population": "4,460",
    "Density": 1223.76
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Tượng Lĩnh",
    "Population": "6,405",
    "Density": 788.75
  },
  {
    "Province": "Hà Nam",
    "District": "Kim Bảng",
    "Ward": "Văn Xá",
    "Population": "7,568",
    "Density": 1262.81
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Bắc Lý",
    "Population": "7,815",
    "Density": 768.13
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Chân Lý",
    "Population": "10,364",
    "Density": 687.91
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Chính Lý",
    "Population": "10,166",
    "Density": 1293.91
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Công Lý",
    "Population": "9,727",
    "Density": 1582.48
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Đạo Lý",
    "Population": "6,789",
    "Density": 1163.97
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Đồng Lý",
    "Population": "5,180",
    "Density": 1648.21
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Đức Lý",
    "Population": "8,801",
    "Density": 1041.27
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Hòa Hậu",
    "Population": "13,425",
    "Density": 1575.02
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Hợp Lý",
    "Population": "9,648",
    "Density": 1814.35
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nguyên Lý",
    "Population": "9,431",
    "Density": 1166.18
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Bình",
    "Population": "5,513",
    "Density": 850.43
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Chính",
    "Population": "9,322",
    "Density": 1406.54
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Đạo",
    "Population": "3,723",
    "Density": 534.85
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Hưng",
    "Population": "3,694",
    "Density": 609.43
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Khang",
    "Population": "7,890",
    "Density": 1347.24
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Mỹ",
    "Population": "5,391",
    "Density": 688.05
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Nghĩa",
    "Population": "5,076",
    "Density": 735.51
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Nhân Thịnh",
    "Population": "8,630",
    "Density": 771.02
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Phú Phúc",
    "Population": "8,926",
    "Density": 737.75
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Tiến Thắng",
    "Population": "8,888",
    "Density": 1152.73
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Văn Lý",
    "Population": "6,100",
    "Density": 1169.1
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Vĩnh Trụ",
    "Population": "5,434",
    "Density": 2683.32
  },
  {
    "Province": "Hà Nam",
    "District": "Lý Nhân",
    "Ward": "Xuân Khê",
    "Population": "5,945",
    "Density": 1149.1
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Châu Sơn",
    "Population": "8,480",
    "Density": 1575.89
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Đinh Xá",
    "Population": "7,558",
    "Density": 1192.77
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Hai Bà Trưng",
    "Population": "6,667",
    "Density": 10256.92
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Kim Bình",
    "Population": "5,166",
    "Density": 841.52
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Lam Hà",
    "Population": "5,763",
    "Density": 899.48
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Lê Hồng Phong",
    "Population": "9,315",
    "Density": 3286.41
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Liêm Chính",
    "Population": "4,983",
    "Density": 1443.18
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Liêm Chung",
    "Population": "6,516",
    "Density": 1902.54
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Liêm Tiết",
    "Population": "4,909",
    "Density": 894.12
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Liêm Tuyền",
    "Population": "3,573",
    "Density": 1107.87
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Lương Khánh Thiện",
    "Population": "4,976",
    "Density": 23987.66
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Minh Khai",
    "Population": "6,941",
    "Density": 21277.7
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Phù Vân",
    "Population": "9,407",
    "Density": 1670.04
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Quang Trung",
    "Population": "6,046",
    "Density": 2392.94
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Thanh Châu",
    "Population": "6,598",
    "Density": 1953.52
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Thanh Tuyền",
    "Population": "7,341",
    "Density": 1546.32
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Tiên Hải",
    "Population": "3,417",
    "Density": 814.89
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Tiên Hiệp",
    "Population": "4,020",
    "Density": 783.37
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Tiên Tân",
    "Population": "4,817",
    "Density": 648.97
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Trần Hưng Đạo",
    "Population": "6,194",
    "Density": 36577.3
  },
  {
    "Province": "Hà Nam",
    "District": "Phủ Lý",
    "Ward": "Trịnh Xá",
    "Population": "5,344",
    "Density": 875.58
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Kiện Khê",
    "Population": "9,279",
    "Density": 1227.22
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Liêm Cần",
    "Population": "7,084",
    "Density": 968.29
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Liêm Phong",
    "Population": "4,337",
    "Density": 765
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Liêm Sơn",
    "Population": "7,967",
    "Density": 721.32
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Liêm Thuận",
    "Population": "5,335",
    "Density": 826.47
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Liêm Túc",
    "Population": "5,028",
    "Density": 771.32
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Bình",
    "Population": "3,666",
    "Density": 768.89
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Hà",
    "Population": "10,806",
    "Density": 1307.39
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Hải",
    "Population": "8,760",
    "Density": 637.93
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Hương",
    "Population": "7,243",
    "Density": 787.6
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Lưu",
    "Population": "5,519",
    "Density": 802.33
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Nghị",
    "Population": "8,894",
    "Density": 383.97
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Nguyên",
    "Population": "5,930",
    "Density": 849.97
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Phong",
    "Population": "5,020",
    "Density": 785.59
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Tâm",
    "Population": "4,627",
    "Density": 640.7
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Tân",
    "Population": "6,019",
    "Density": 373.09
  },
  {
    "Province": "Hà Nam",
    "District": "Thanh Liêm",
    "Ward": "Thanh Thủy",
    "Population": "6,774",
    "Density": 378.86
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Bình",
    "Population": "5,047",
    "Density": 443.77
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Duệ",
    "Population": "7,030",
    "Density": 562.85
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Dương",
    "Population": "5,129",
    "Density": 339.38
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Hà",
    "Population": "4,113",
    "Density": 666.39
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Hòa",
    "Population": "4,508",
    "Density": 308.87
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Hưng",
    "Population": "6,112",
    "Density": 294.78
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Huy",
    "Population": "3,911",
    "Density": 419.31
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Lạc",
    "Population": "5,254",
    "Density": 135.74
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Lĩnh",
    "Population": "5,201",
    "Density": 304.95
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Lộc",
    "Population": "4,039",
    "Density": 682.83
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Minh",
    "Population": "4,019",
    "Density": 138.34
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Mỹ",
    "Population": "5,314",
    "Density": 32.7
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Nam",
    "Population": "3,697",
    "Density": 402.67
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Nhượng",
    "Population": "8,573",
    "Density": 2787.88
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Phúc",
    "Population": "3,740",
    "Density": 468.21
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Quan",
    "Population": "7,010",
    "Density": 120.71
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Quang",
    "Population": "5,839",
    "Density": 640.95
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Sơn",
    "Population": "4,588",
    "Density": 95.43
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Thạch",
    "Population": "5,423",
    "Density": 280.78
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Thăng",
    "Population": "3,733",
    "Density": 579.41
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Thành",
    "Population": "6,596",
    "Density": 588.14
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Thịnh",
    "Population": "6,219",
    "Density": 80.51
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Trung",
    "Population": "5,086",
    "Density": 539.25
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Vĩnh",
    "Population": "4,075",
    "Density": 559.05
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Xuyên",
    "Population": "8,308",
    "Density": 1270.34
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Cẩm Yên",
    "Population": "3,897",
    "Density": 462.29
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Cẩm Xuyên",
    "Ward": "Thiên Cầm",
    "Population": "4,755",
    "Density": 342.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Đồng Lộc",
    "Population": "4,886",
    "Density": 263.82
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Gia Hanh",
    "Population": "5,825",
    "Density": 315.38
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Khánh Lộc",
    "Population": "3,929",
    "Density": 601.97
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Kim Lộc",
    "Population": "3,519",
    "Density": 584.83
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Mỹ Lộc",
    "Population": "7,061",
    "Density": 387.65
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Nghèn",
    "Population": "12,618",
    "Density": 1105.19
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Phú Lộc",
    "Population": "5,425",
    "Density": 257.6
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Quang Lộc",
    "Population": "6,084",
    "Density": 692.66
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Song Lộc",
    "Population": "3,704",
    "Density": 723.31
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Sơn Lộc",
    "Population": "6,263",
    "Density": 711.28
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Thanh Lộc",
    "Population": "4,663",
    "Density": 591.8
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Thiên Lộc",
    "Population": "6,571",
    "Density": 198.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Thuần Thiện",
    "Population": "7,819",
    "Density": 291.8
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Thượng Lộc",
    "Population": "4,997",
    "Density": 177.19
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Thường Nga",
    "Population": "4,118",
    "Density": 309.97
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Tiến Lộc",
    "Population": "3,732",
    "Density": 548.42
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Trung Lộc",
    "Population": "4,318",
    "Density": 753.13
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Trường Lộc",
    "Population": "2,493",
    "Density": 526.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Tùng Lộc",
    "Population": "8,388",
    "Density": 857.46
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Vĩnh Lộc",
    "Population": "3,008",
    "Density": 459.1
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Vượng Lộc",
    "Population": "7,162",
    "Density": 506.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Xuân Lộc",
    "Population": "7,354",
    "Density": 684.67
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Can Lộc",
    "Ward": "Yên Lộc",
    "Population": "3,578",
    "Density": 622.11
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Bùi Xá",
    "Population": "3,365",
    "Density": 559.27
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức An",
    "Population": "4,880",
    "Density": 378.71
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Châu",
    "Population": "2,038",
    "Density": 477.9
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Đồng",
    "Population": "5,292",
    "Density": 348.85
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Dũng",
    "Population": "3,894",
    "Density": 348.52
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Hòa",
    "Population": "2,844",
    "Density": 330.14
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức La",
    "Population": "1,625",
    "Density": 513.18
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Lạc",
    "Population": "3,368",
    "Density": 436.32
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Lâm",
    "Population": "4,777",
    "Density": 757.22
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Lạng",
    "Population": "2,924",
    "Density": 195.47
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Lập",
    "Population": "2,628",
    "Density": 361.59
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Long",
    "Population": "4,423",
    "Density": 434.44
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Nhân",
    "Population": "2,449",
    "Density": 602.4
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Quang",
    "Population": "1,817",
    "Density": 400.12
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Thanh",
    "Population": "3,990",
    "Density": 682.9
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Thịnh",
    "Population": "3,673",
    "Density": 952.62
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Thọ",
    "Population": "6,877",
    "Density": 1956.14
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Thủy",
    "Population": "3,258",
    "Density": 669.34
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Tùng",
    "Population": "2,147",
    "Density": 469.54
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Vĩnh",
    "Population": "1,380",
    "Density": 297.54
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Đức Yên",
    "Population": "4,076",
    "Density": 1248.01
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Liên Minh",
    "Population": "4,571",
    "Density": 788.1
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Tân Hương",
    "Population": "1,283",
    "Density": 74.31
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Thái Yên",
    "Population": "6,218",
    "Density": 1488.74
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Trung Lễ",
    "Population": "2,912",
    "Density": 696.57
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Trường Sơn",
    "Population": "7,429",
    "Density": 906.87
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Tùng ảnh",
    "Population": "6,120",
    "Density": 719.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Đức Thọ",
    "Ward": "Yên Hồ",
    "Population": "4,278",
    "Density": 562.88
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Bắc Hà",
    "Population": "10,532",
    "Density": 8860.84
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Đại Nài",
    "Population": "6,445",
    "Density": 1441.06
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Hà Huy Tập",
    "Population": "4,989",
    "Density": 2221.78
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Nam Hà",
    "Population": "7,194",
    "Density": 6226.95
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Nguyễn Du",
    "Population": "5,450",
    "Density": 6500.01
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Tân Giang",
    "Population": "6,352",
    "Density": 6478.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Bình",
    "Population": "2,489",
    "Density": 685.54
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Đồng",
    "Population": "3,404",
    "Density": 1058.69
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Hạ",
    "Population": "5,622",
    "Density": 706.49
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Hưng",
    "Population": "3,322",
    "Density": 669.84
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Linh",
    "Population": "5,935",
    "Density": 922.5
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Môn",
    "Population": "2,824",
    "Density": 506.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Quý",
    "Population": "6,859",
    "Density": 1820.18
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thạch Trung",
    "Population": "7,881",
    "Density": 1292.94
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Trần Phú",
    "Population": "6,341",
    "Density": 4729.27
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Văn Yên",
    "Population": "3,318",
    "Density": 1393.77
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Hồng Lĩnh",
    "Population": "35,436",
    "Density": 597.7
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Bắc Hồng",
    "Population": "8,036",
    "Density": 1441.59
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Đậu Liêu",
    "Population": "4,522",
    "Density": 185.52
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Đức Thuận",
    "Population": "5,835",
    "Density": 688.93
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Nam Hồng",
    "Population": "7,931",
    "Density": 1568.07
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Thuận Lộc",
    "Population": "3,854",
    "Density": 538.12
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hà Tĩnh",
    "Ward": "Trung Lương",
    "Population": "5,258",
    "Density": 608.01
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Gia Phố",
    "Population": "5,743",
    "Density": 478.98
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hà Linh",
    "Population": "5,891",
    "Density": 76.47
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hòa Hải",
    "Population": "6,297",
    "Density": 39.48
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Bình",
    "Population": "3,967",
    "Density": 110.69
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Đô",
    "Population": "3,858",
    "Density": 181.91
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Giang",
    "Population": "4,987",
    "Density": 72.77
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Khê",
    "Population": "8,091",
    "Density": 2746.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Lâm",
    "Population": "5,830",
    "Density": 35.25
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Liên",
    "Population": "2,204",
    "Density": 43.22
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Long",
    "Population": "4,832",
    "Density": 312.1
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Thủy",
    "Population": "4,510",
    "Density": 81.37
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Trà",
    "Population": "2,447",
    "Density": 165.25
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Trạch",
    "Population": "6,372",
    "Density": 56.74
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Vĩnh",
    "Population": "4,273",
    "Density": 67.01
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Hương Xuân",
    "Population": "3,754",
    "Density": 132.96
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Lộc Yên",
    "Population": "5,126",
    "Density": 48.83
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Phúc Đồng",
    "Population": "4,319",
    "Density": 204.13
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Phúc Trạch",
    "Population": "5,142",
    "Density": 134.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Phú Gia",
    "Population": "4,466",
    "Density": 31.75
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Phương Điền",
    "Population": "1,975",
    "Density": 143.22
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Phương Mỹ",
    "Population": "2,835",
    "Density": 56.52
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Khê",
    "Ward": "Phú Phong",
    "Population": "3,293",
    "Density": 628.69
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Phố Châu",
    "Population": "8,972",
    "Density": 2054.26
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn An",
    "Population": "2,210",
    "Density": 531.43
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Bằng",
    "Population": "3,170",
    "Density": 537.15
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Bình",
    "Population": "2,745",
    "Density": 387.05
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Châu",
    "Population": "3,392",
    "Density": 693.16
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Diệm",
    "Population": "4,507",
    "Density": 240.13
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Giang",
    "Population": "5,373",
    "Density": 394.46
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Hà",
    "Population": "2,248",
    "Density": 625.96
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Hàm",
    "Population": "3,600",
    "Density": 160.43
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Hòa",
    "Population": "2,300",
    "Density": 590.27
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Hồng",
    "Population": "3,951",
    "Density": 20.83
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Kim 1",
    "Population": "4,650",
    "Density": 20.93
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Kim 2",
    "Population": "4,005",
    "Density": 19.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Lâm",
    "Population": "2,614",
    "Density": 68.94
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Lễ",
    "Population": "4,079",
    "Density": 140.18
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Lĩnh",
    "Population": "2,928",
    "Density": 150.57
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Long",
    "Population": "2,587",
    "Density": 452.71
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Mai",
    "Population": "2,065",
    "Density": 107.38
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Mỹ",
    "Population": "1,846",
    "Density": 567.08
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Ninh",
    "Population": "3,684",
    "Density": 518.54
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Phú",
    "Population": "3,584",
    "Density": 592.96
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Phúc",
    "Population": "2,350",
    "Density": 374
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Quang",
    "Population": "2,415",
    "Density": 157.62
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Tân",
    "Population": "1,964",
    "Density": 271.11
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Tây",
    "Population": "7,629",
    "Density": 58.88
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Thịnh",
    "Population": "2,670",
    "Density": 456.9
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Thủy",
    "Population": "4,083",
    "Density": 192.58
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Tiến",
    "Population": "6,175",
    "Density": 168.1
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Trà",
    "Population": "2,669",
    "Density": 379.21
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Trung",
    "Population": "5,071",
    "Density": 537.36
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Sơn Trường",
    "Population": "3,675",
    "Density": 190.47
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Hương Sơn",
    "Ward": "Tây Sơn",
    "Population": "3,956",
    "Density": 948.18
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Bắc",
    "Population": "4,610",
    "Density": 231.19
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Châu",
    "Population": "2,908",
    "Density": 1315.42
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Đồng",
    "Population": "4,970",
    "Density": 351.41
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Giang",
    "Population": "5,267",
    "Density": 300.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Hải",
    "Population": "3,588",
    "Density": 486.2
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Hợp",
    "Population": "2,047",
    "Density": 81.08
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Khang",
    "Population": "11,029",
    "Density": 421.24
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Lạc",
    "Population": "3,537",
    "Density": 32.77
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Lâm",
    "Population": "4,309",
    "Density": 119.47
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Phong",
    "Population": "7,013",
    "Density": 213.85
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Phú",
    "Population": "9,177",
    "Density": 606.54
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Sơn",
    "Population": "6,338",
    "Density": 71.32
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Tân",
    "Population": "6,859",
    "Density": 165.4
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Tây",
    "Population": "5,557",
    "Density": 71.49
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Thọ",
    "Population": "3,763",
    "Density": 213.25
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Thư",
    "Population": "3,011",
    "Density": 617.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Thượng",
    "Population": "6,173",
    "Density": 47.92
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Tiến",
    "Population": "5,711",
    "Density": 321.1
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Trung",
    "Population": "1,575",
    "Density": 54.29
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Văn",
    "Population": "6,195",
    "Density": 250.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Xuân",
    "Population": "6,487",
    "Density": 282.02
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Anh",
    "Population": "61,877",
    "Density": 222.48
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Hà",
    "Population": "5,243",
    "Density": 499.86
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Hoa",
    "Population": "4,108",
    "Density": 129.52
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Hưng",
    "Population": "1,707",
    "Density": 114.93
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Liên",
    "Population": "2,109",
    "Density": 168.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Lợi",
    "Population": "8,086",
    "Density": 405.15
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Long",
    "Population": "3,245",
    "Density": 149.62
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Nam",
    "Population": "2,078",
    "Density": 89.69
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Ninh",
    "Population": "6,218",
    "Density": 296.66
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Phương",
    "Population": "4,918",
    "Density": 165.45
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Thịnh",
    "Population": "8,773",
    "Density": 218.77
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Kỳ Trinh",
    "Population": "5,150",
    "Density": 108.15
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Kỳ Anh",
    "Ward": "Sông Trí (Kỳ Anh)",
    "Population": "10,242",
    "Density": 1913.57
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "An Lộc",
    "Population": "2,835",
    "Density": 614.33
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Bình Lộc",
    "Population": "4,592",
    "Density": 1086.58
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Hộ Độ",
    "Population": "7,082",
    "Density": 1052.29
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Hồng Lộc",
    "Population": "7,601",
    "Density": 357.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Ích Hậu",
    "Population": "6,929",
    "Density": 747.93
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Mai Phụ",
    "Population": "5,026",
    "Density": 946.61
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Phù Lưu",
    "Population": "5,428",
    "Density": 640.43
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Tân Lộc",
    "Population": "5,519",
    "Density": 433.61
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Thạch Bằng",
    "Population": "7,854",
    "Density": 834.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Thạch Châu",
    "Population": "5,319",
    "Density": 776.93
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Thạch Kim",
    "Population": "8,491",
    "Density": 3179.32
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Thạch Mỹ",
    "Population": "6,218",
    "Density": 605.81
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Lộc Hà",
    "Ward": "Thịnh Lộc",
    "Population": "5,908",
    "Density": 398.33
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Cỗ Đạm",
    "Population": "8,033",
    "Density": 275.05
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Cương Gián",
    "Population": "12,216",
    "Density": 557.38
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Nghi Xuân",
    "Population": "2,590",
    "Density": 1839.1
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Tiên Điền",
    "Population": "3,090",
    "Density": 858.67
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân An",
    "Population": "9,924",
    "Density": 861.68
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Đan",
    "Population": "2,394",
    "Density": 396.32
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Giang",
    "Population": "5,500",
    "Density": 495.85
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Hải",
    "Population": "4,546",
    "Density": 835.86
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Hội",
    "Population": "5,640",
    "Density": 492.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Hồng",
    "Population": "5,912",
    "Density": 319.62
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Lam",
    "Population": "2,497",
    "Density": 201.37
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Liên",
    "Population": "6,688",
    "Density": 611.22
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Lĩnh",
    "Population": "2,878",
    "Density": 181.43
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Mỹ",
    "Population": "3,556",
    "Density": 305.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Phổ",
    "Population": "4,123",
    "Density": 696.99
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Thành",
    "Population": "4,575",
    "Density": 509.47
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Trường",
    "Population": "4,630",
    "Density": 651.27
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Viên",
    "Population": "4,163",
    "Density": 201.85
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Nghi Xuân",
    "Ward": "Xuân Yên",
    "Population": "4,875",
    "Density": 825.89
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Bắc Sơn",
    "Population": "2,878",
    "Density": 132.52
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Nam Hương",
    "Population": "1,760",
    "Density": 98.64
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Ngọc Sơn",
    "Population": "2,306",
    "Density": 92.84
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Phù Việt",
    "Population": "3,613",
    "Density": 533.76
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Bàn",
    "Population": "3,389",
    "Density": 242.56
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Đài",
    "Population": "5,359",
    "Density": 501.78
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Điền",
    "Population": "5,322",
    "Density": 187.54
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Đỉnh",
    "Population": "3,632",
    "Density": 397.76
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Hà",
    "Population": "9,097",
    "Density": 1052.36
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Hải",
    "Population": "3,311",
    "Density": 252.48
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Hội",
    "Population": "4,938",
    "Density": 431.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Hương",
    "Population": "4,020",
    "Density": 651.17
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Kênh",
    "Population": "4,438",
    "Density": 448.34
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Khê",
    "Population": "3,560",
    "Density": 352.16
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Lạc",
    "Population": "4,810",
    "Density": 421.34
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Lâm",
    "Population": "2,883",
    "Density": 567.43
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Liên",
    "Population": "4,924",
    "Density": 547.63
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Long",
    "Population": "5,568",
    "Density": 945.8
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Lưu",
    "Population": "3,244",
    "Density": 445.44
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Ngọc",
    "Population": "3,901",
    "Density": 326.14
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Sơn",
    "Population": "5,322",
    "Density": 522.02
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Tân",
    "Population": "6,331",
    "Density": 684.23
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Thắng",
    "Population": "4,528",
    "Density": 516.79
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Thanh",
    "Population": "3,464",
    "Density": 548.68
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Tiến",
    "Population": "2,273",
    "Density": 302.14
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Trị",
    "Population": "4,531",
    "Density": 420.86
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Văn",
    "Population": "5,072",
    "Density": 474.55
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Vĩnh",
    "Population": "6,182",
    "Density": 564.98
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Thạch Xuân",
    "Population": "4,626",
    "Density": 177.53
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Tượng Sơn",
    "Population": "4,053",
    "Density": 522.41
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Thạch Hà",
    "Ward": "Việt Xuyên",
    "Population": "3,042",
    "Density": 591.81
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Ân Phú",
    "Population": "1,647",
    "Density": 176.37
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Đức Bồng",
    "Population": "2,787",
    "Density": 208.83
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Đức Giang",
    "Population": "2,729",
    "Density": 225.13
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Đức Hương",
    "Population": "3,432",
    "Density": 189.34
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Đức Liên",
    "Population": "2,169",
    "Density": 83.04
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Đức Lĩnh",
    "Population": "4,928",
    "Density": 205.8
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Hương Điền",
    "Population": "1,016",
    "Density": 32.94
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Hương Minh",
    "Population": "2,412",
    "Density": 50.22
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Hương Quang",
    "Population": "1,779",
    "Density": 5.46
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Hương Thọ",
    "Population": "2,480",
    "Density": 55.18
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Sơn Thọ",
    "Population": "2,682",
    "Density": 58.41
  },
  {
    "Province": "Hà Tĩnh",
    "District": "Vũ Quang",
    "Ward": "Vũ Quang",
    "Population": "2,928",
    "Density": 76.62
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Bình Minh",
    "Population": "4,140",
    "Density": 979.63
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Bình Xuyên",
    "Population": "8,486",
    "Density": 989
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Cổ Bi",
    "Population": "6,495",
    "Density": 923.33
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Hồng Khê",
    "Population": "5,985",
    "Density": 794.57
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Hùng Thắng",
    "Population": "4,947",
    "Density": 735.97
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Hưng Thịnh",
    "Population": "2,592",
    "Density": 1314.14
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Kẻ Sặt",
    "Population": "4,832",
    "Density": 7187.91
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Long Xuyên",
    "Population": "5,838",
    "Density": 1109.38
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Nhân Quyền",
    "Population": "6,224",
    "Density": 985.92
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Tân Hồng",
    "Population": "5,700",
    "Density": 801.02
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Tân Việt",
    "Population": "5,992",
    "Density": 964.37
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Thái Dương",
    "Population": "5,317",
    "Density": 703.74
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Thái Hòa",
    "Population": "6,413",
    "Density": 847.25
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Thái Học",
    "Population": "8,496",
    "Density": 1374.51
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Thúc Kháng",
    "Population": "6,961",
    "Density": 869.82
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Tráng Liệt",
    "Population": "4,476",
    "Density": 1807.32
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Vĩnh Hồng",
    "Population": "8,118",
    "Density": 939.72
  },
  {
    "Province": "Hải Dương",
    "District": "Bình Giang",
    "Ward": "Vĩnh Tuy",
    "Population": "3,755",
    "Density": 873.82
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Điền",
    "Population": "5,144",
    "Density": 1261.8
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Định",
    "Population": "6,148",
    "Density": 938.91
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Đoài",
    "Population": "3,987",
    "Density": 881.51
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Đông",
    "Population": "6,500",
    "Density": 919.92
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Giàng",
    "Population": "1,982",
    "Density": 3672.89
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Hoàng",
    "Population": "7,439",
    "Density": 934.01
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Hưng",
    "Population": "5,954",
    "Density": 966.15
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Phúc",
    "Population": "7,723",
    "Density": 1371.15
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Sơn",
    "Population": "2,193",
    "Density": 1255.87
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Văn",
    "Population": "7,654",
    "Density": 1333.01
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cẩm Vũ",
    "Population": "7,261",
    "Density": 1475.27
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cao An",
    "Population": "7,065",
    "Density": 1250.66
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Đức Chính",
    "Population": "6,661",
    "Density": 908.71
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Kim Giang",
    "Population": "5,481",
    "Density": 1118.27
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Lai Cách",
    "Population": "14,135",
    "Density": 1805.1
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Lương Điền",
    "Population": "9,703",
    "Density": 1053.96
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Ngọc Liên",
    "Population": "7,760",
    "Density": 1076.43
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Tân Trường",
    "Population": "11,095",
    "Density": 1281.87
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Thạch Lỗi",
    "Population": "3,301",
    "Density": 677.78
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Chí Linh",
    "Population": "157,418",
    "Density": 557.05
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "An Lạc",
    "Population": "5,229",
    "Density": 488.6
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Bắc An",
    "Population": "6,750",
    "Density": 153.37
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Bến Tắm",
    "Population": "3,115",
    "Density": 753.07
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Chí Minh",
    "Population": "9,150",
    "Density": 786.76
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cộng Hoà",
    "Population": "15,258",
    "Density": 541.08
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Cổ Thành",
    "Population": "5,763",
    "Density": 710.35
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Đồng Lạc",
    "Population": "6,990",
    "Density": 604.99
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Hoàng Hoa Thám",
    "Population": "2,802",
    "Density": 99.49
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Hoàng Tân",
    "Population": "6,653",
    "Density": 627.46
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Hoàng Tiến",
    "Population": "5,904",
    "Density": 373.27
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Hưng Đạo",
    "Population": "4,985",
    "Density": 388.48
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Kênh Giang",
    "Population": 601,
    "Density": 1265.1
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Lê Lợi",
    "Population": "9,134",
    "Density": 350.9
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Nhân Huệ",
    "Population": "3,535",
    "Density": 700.28
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Phả Lại",
    "Population": "15,990",
    "Density": 1198.56
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Sao Đỏ",
    "Population": "25,700",
    "Density": 5208.65
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Tân Dân",
    "Population": "7,161",
    "Density": 766.38
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Thái Học",
    "Population": "5,578",
    "Density": 704.38
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Văn An",
    "Population": "8,541",
    "Density": 578.5
  },
  {
    "Province": "Hải Dương",
    "District": "Cẩm Giàng",
    "Ward": "Văn Đức",
    "Population": "8,579",
    "Density": 573
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Đoàn Thượng",
    "Population": "4,952",
    "Density": 889.72
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Đồng Quang",
    "Population": "5,114",
    "Density": 994.92
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Đức Xương",
    "Population": "4,579",
    "Density": 820.61
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Gia Hòa",
    "Population": "4,911",
    "Density": 1257.17
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Gia Khánh",
    "Population": "5,596",
    "Density": 1195.27
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Gia Lộc",
    "Population": "12,357",
    "Density": 2286.26
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Gia Lương",
    "Population": "4,762",
    "Density": 1445.44
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Gia Tân",
    "Population": "5,073",
    "Density": 1411.44
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Gia Xuyên",
    "Population": "8,302",
    "Density": 1690.53
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Hoàng Diệu",
    "Population": "7,131",
    "Density": 919.57
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Hồng Hưng",
    "Population": "6,862",
    "Density": 1274.49
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Lê Lợi",
    "Population": "5,806",
    "Density": 874.07
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Liên Hồng",
    "Population": "9,099",
    "Density": 981.92
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Nhật Tân",
    "Population": "3,861",
    "Density": 1069.32
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Phạm Trấn",
    "Population": "4,981",
    "Density": 893.2
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Phương Hưng",
    "Population": "3,307",
    "Density": 1571.1
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Quang Minh",
    "Population": "5,157",
    "Density": 1299.84
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Tân Tiến",
    "Population": "3,725",
    "Density": 1389.51
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Thống Kênh",
    "Population": "5,873",
    "Density": 992.58
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Thống Nhất",
    "Population": "7,951",
    "Density": 1274.1
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Toàn Thắng",
    "Population": "6,113",
    "Density": 1213.81
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Trùng Khánh",
    "Population": "2,351",
    "Density": 789.69
  },
  {
    "Province": "Hải Dương",
    "District": "Gia Lộc",
    "Ward": "Yết Kiêu",
    "Population": "6,646",
    "Density": 1470.32
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Ái Quốc",
    "Population": "10,667",
    "Density": 1289.55
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "An Châu",
    "Population": "3,890",
    "Density": 949.71
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Bình Hàn",
    "Population": "21,229",
    "Density": 8716.84
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Cẩm Thượng",
    "Population": "10,697",
    "Density": 4101.61
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Hải Tân",
    "Population": "13,749",
    "Density": 5079.05
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Lê Thanh Nghị",
    "Population": "6,990",
    "Density": 8017.25
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Nam Đồng",
    "Population": "9,041",
    "Density": 1013.6
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Ngọc Châu",
    "Population": "20,490",
    "Density": 3178.47
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Nguyễn Trãi",
    "Population": "8,956",
    "Density": 15530.01
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Phạm Ngũ Lão",
    "Population": "11,959",
    "Density": 14642
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Quang Trung",
    "Population": "12,436",
    "Density": 13593.63
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Tân Hưng",
    "Population": "7,053",
    "Density": 1335.82
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Thạch Khôi",
    "Population": "9,397",
    "Density": 1788.3
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Thanh Bình",
    "Population": "30,872",
    "Density": 5581.83
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Thượng Đạt",
    "Population": "2,628",
    "Density": 1036.69
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Trần Hưng Đạo",
    "Population": "4,788",
    "Density": 11243.66
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Trần Phú",
    "Population": "6,758",
    "Density": 13716.26
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Tứ Minh",
    "Population": "12,702",
    "Density": 1760.45
  },
  {
    "Province": "Hải Dương",
    "District": "Hải Dương",
    "Ward": "Việt Hòa",
    "Population": "8,794",
    "Density": 1352.38
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Bình Dân",
    "Population": "4,302",
    "Density": 981.77
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Cẩm La",
    "Population": "3,258",
    "Density": 1136.93
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Cổ Dũng",
    "Population": "5,804",
    "Density": 1488.55
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Cộng Hòa",
    "Population": "5,613",
    "Density": 1453.43
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Đại Đức",
    "Population": "7,959",
    "Density": 824.75
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Đồng Gia",
    "Population": "5,826",
    "Density": 1421.36
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Kim Anh",
    "Population": "6,176",
    "Density": 1297.56
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Kim Đính",
    "Population": "7,064",
    "Density": 972.77
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Kim Khê",
    "Population": "2,963",
    "Density": 972.5
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Kim Lương",
    "Population": "7,238",
    "Density": 1364.73
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Kim Tân",
    "Population": "8,050",
    "Density": 950.95
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Kim Xuyên",
    "Population": "8,131",
    "Density": 928.03
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Lai Vu",
    "Population": "4,935",
    "Density": 989.43
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Liên Hòa",
    "Population": "6,908",
    "Density": 938.4
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Ngũ Phúc",
    "Population": "6,961",
    "Density": 881.45
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Phúc Thành A",
    "Population": "3,895",
    "Density": 1076.5
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Phú Thái",
    "Population": "5,462",
    "Density": 2377.26
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Tam Kỳ",
    "Population": "5,021",
    "Density": 872.79
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Thượng Vũ",
    "Population": "5,714",
    "Density": 1035.84
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Tuấn Hưng",
    "Population": "7,974",
    "Density": 1154.8
  },
  {
    "Province": "Hải Dương",
    "District": "Kim Thành",
    "Ward": "Việt Hưng",
    "Population": "3,228",
    "Density": 789.71
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "An Phụ",
    "Population": "8,832",
    "Density": 1095.89
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "An Sinh",
    "Population": "4,621",
    "Density": 854.65
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Bạch Đằng",
    "Population": "4,689",
    "Density": 693.27
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Duy Tân",
    "Population": "6,483",
    "Density": 836.12
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Hiến Thành",
    "Population": "8,060",
    "Density": 1294.7
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Hiệp An",
    "Population": "5,604",
    "Density": 1755.14
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Hiệp Hòa",
    "Population": "7,270",
    "Density": 742.14
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Hiệp Sơn",
    "Population": "6,298",
    "Density": 883.81
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Hoành Sơn",
    "Population": "3,224",
    "Density": 774.89
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Kinh Môn (An Lưu)",
    "Population": "7,506",
    "Density": 1982.41
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Lạc Long",
    "Population": "6,007",
    "Density": 884.84
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Lê Ninh",
    "Population": "6,349",
    "Density": 555.57
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Long Xuyên",
    "Population": "4,726",
    "Density": 1030.24
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Minh Hòa",
    "Population": "7,935",
    "Density": 1106.94
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Minh Tân",
    "Population": "12,727",
    "Density": 939.82
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Phạm Mệnh",
    "Population": "3,549",
    "Density": 815.34
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Phúc Thành B",
    "Population": "3,101",
    "Density": 651.74
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Phú Thứ",
    "Population": "10,027",
    "Density": 1141.46
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Quang Trung",
    "Population": "6,144",
    "Density": 931.43
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Tân Dân",
    "Population": "4,150",
    "Density": 831.53
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Thái Sơn",
    "Population": "3,815",
    "Density": 705.85
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Thái Thịnh",
    "Population": "6,438",
    "Density": 1581.31
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Thăng Long",
    "Population": "6,642",
    "Density": 1057.39
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Thất Hùng",
    "Population": "6,324",
    "Density": 845.45
  },
  {
    "Province": "Hải Dương",
    "District": "Kinh Môn",
    "Ward": "Thượng Quận",
    "Population": "6,486",
    "Density": 890.89
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "An Bình",
    "Population": "7,315",
    "Density": 1150.05
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "An Lâm",
    "Population": "6,558",
    "Density": 1039.95
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "An Sơn",
    "Population": "5,141",
    "Density": 920.29
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Cộng Hòa",
    "Population": "8,757",
    "Density": 768.02
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Đồng Lạc",
    "Population": "6,723",
    "Density": 994.72
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Hiệp Cát",
    "Population": "6,122",
    "Density": 894.34
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Hồng Phong",
    "Population": "4,910",
    "Density": 1069.25
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Hợp Tiến",
    "Population": "6,993",
    "Density": 1071.46
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Minh Tân",
    "Population": "4,227",
    "Density": 634.58
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Nam Chính",
    "Population": "3,963",
    "Density": 909.07
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Nam Hồng",
    "Population": "4,850",
    "Density": 1417.55
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Nam Hưng",
    "Population": "5,368",
    "Density": 1074.55
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Nam Sách",
    "Population": "10,158",
    "Density": 2150.21
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Nam Tân",
    "Population": "4,513",
    "Density": 742.33
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Nam Trung",
    "Population": "5,210",
    "Density": 1382.95
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Phú Điền",
    "Population": "3,715",
    "Density": 901.37
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Quốc Tuấn",
    "Population": "7,475",
    "Density": 1220.27
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Thái Tân",
    "Population": "5,523",
    "Density": 647.05
  },
  {
    "Province": "Hải Dương",
    "District": "Nam Sách",
    "Ward": "Thanh Quang",
    "Population": "4,573",
    "Density": 1209.85
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "An Đức",
    "Population": "4,862",
    "Density": 906.45
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Đồng Tâm",
    "Population": "5,333",
    "Density": 1080.82
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Đông Xuyên",
    "Population": "4,709",
    "Density": 767.61
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hiệp Lực",
    "Population": "5,550",
    "Density": 1052.47
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hoàng Hanh",
    "Population": "3,805",
    "Density": 839.66
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hồng Dụ",
    "Population": "3,220",
    "Density": 950.3
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hồng Đức",
    "Population": "6,519",
    "Density": 1048.04
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hồng Phong",
    "Population": "6,429",
    "Density": 959.42
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hồng Phúc",
    "Population": "4,445",
    "Density": 867.84
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hồng Thái",
    "Population": "4,483",
    "Density": 1014.51
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hưng Long",
    "Population": "3,678",
    "Density": 933.57
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Hưng Thái",
    "Population": "4,444",
    "Density": 987.8
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Kiến Quốc",
    "Population": "6,453",
    "Density": 1149.04
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Nghĩa An",
    "Population": "9,575",
    "Density": 1281.83
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Ninh Giang",
    "Population": "6,591",
    "Density": 3716.8
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Ninh Hải",
    "Population": "5,725",
    "Density": 878.5
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Ninh Hòa",
    "Population": "2,337",
    "Density": 808.18
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Ninh Thành",
    "Population": "3,767",
    "Density": 1798
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Quang Hưng",
    "Population": "2,608",
    "Density": 681.65
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Quyết Thắng",
    "Population": "3,276",
    "Density": 921.91
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Tân Hương",
    "Population": "7,760",
    "Density": 1713.1
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Tân Phong",
    "Population": "6,947",
    "Density": 833.88
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Tân Quang",
    "Population": "3,667",
    "Density": 897.17
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Ứng Hoè",
    "Population": "5,859",
    "Density": 1353.77
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Văn Giang",
    "Population": "4,958",
    "Density": 1150.99
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Văn Hội",
    "Population": "3,378",
    "Density": 764.41
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Vạn Phúc",
    "Population": "3,854",
    "Density": 779.91
  },
  {
    "Province": "Hải Dương",
    "District": "Ninh Giang",
    "Ward": "Vĩnh Hòa",
    "Population": "7,301",
    "Density": 969.23
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "An Lương",
    "Population": "2,740",
    "Density": 950.96
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Cẩm Chế",
    "Population": "7,217",
    "Density": 1122.97
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Hồng Lạc",
    "Population": "8,583",
    "Density": 997.63
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Hợp Đức",
    "Population": "3,412",
    "Density": 813.8
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Liên Mạc",
    "Population": "6,580",
    "Density": 902.77
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Phượng Hoàng",
    "Population": "6,694",
    "Density": 835.41
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Quyết Thắng",
    "Population": "9,409",
    "Density": 1050.26
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Tân An",
    "Population": "6,044",
    "Density": 945.29
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Tân Việt",
    "Population": "8,921",
    "Density": 1293.5
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh An",
    "Population": "4,710",
    "Density": 952.11
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Bính",
    "Population": "4,247",
    "Density": 778
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Cường",
    "Population": "5,437",
    "Density": 942.19
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Hà",
    "Population": "7,337",
    "Density": 1383.82
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Hải",
    "Population": "10,709",
    "Density": 1173.23
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Hồng",
    "Population": "6,696",
    "Density": 815.56
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Khê",
    "Population": "5,458",
    "Density": 1461.35
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Lang",
    "Population": "6,016",
    "Density": 734.99
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Sơn",
    "Population": "7,403",
    "Density": 1133.66
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Thủy",
    "Population": "5,172",
    "Density": 971.78
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Xá",
    "Population": "3,890",
    "Density": 803.5
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Thanh Xuân",
    "Population": "4,941",
    "Density": 702.71
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Tiền Tiến",
    "Population": "10,841",
    "Density": 1012.89
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Trường Thành",
    "Population": "2,746",
    "Density": 936.24
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Việt Hồng",
    "Population": "4,177",
    "Density": 721.5
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Hà",
    "Ward": "Vĩnh Lập",
    "Population": "4,175",
    "Density": 650.05
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Cao Thắng",
    "Population": "5,219",
    "Density": 872.33
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Chi Lăng Bắc",
    "Population": "6,627",
    "Density": 1215.9
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Chi Lăng Nam",
    "Population": "4,866",
    "Density": 949.57
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Diên Hồng",
    "Population": "2,828",
    "Density": 956.7
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Đoàn Kết",
    "Population": "6,700",
    "Density": 891.84
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Đoàn Tùng",
    "Population": "7,592",
    "Density": 1283.99
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Hồng Quang",
    "Population": "8,305",
    "Density": 920.66
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Hùng Sơn",
    "Population": "3,203",
    "Density": 896.9
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Lam Sơn",
    "Population": "6,257",
    "Density": 927.38
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Lê Hồng",
    "Population": "6,712",
    "Density": 720.96
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Ngô Quyền",
    "Population": "7,400",
    "Density": 759.98
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Ngũ Hùng",
    "Population": "7,626",
    "Density": 868.99
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Phạm Kha",
    "Population": "6,741",
    "Density": 1313.86
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Tân Trào",
    "Population": "6,149",
    "Density": 812.65
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Thanh Giang",
    "Population": "7,534",
    "Density": 1111.42
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Thanh Miện",
    "Population": "9,009",
    "Density": 1457.44
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Thanh Tùng",
    "Population": "5,562",
    "Density": 1098.71
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Tiền Phong",
    "Population": "4,905",
    "Density": 1309.89
  },
  {
    "Province": "Hải Dương",
    "District": "Thanh Miện",
    "Ward": "Tứ Cường",
    "Population": "9,455",
    "Density": 1029.78
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "An Thanh",
    "Population": "7,267",
    "Density": 729.39
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Bình Lăng",
    "Population": "4,968",
    "Density": 1070.18
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Cộng Lạc",
    "Population": "4,350",
    "Density": 772.74
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Đại Đồng",
    "Population": "5,924",
    "Density": 904.4
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Đại Hợp",
    "Population": "6,186",
    "Density": 1417.73
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Dân Chủ",
    "Population": "5,055",
    "Density": 994.28
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Đông Kỳ",
    "Population": "2,956",
    "Density": 759.45
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Hà Kỳ",
    "Population": "7,448",
    "Density": 812.28
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Hà Thanh",
    "Population": "5,627",
    "Density": 637.28
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Hưng Đạo",
    "Population": "9,716",
    "Density": 1377.67
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Kỳ Sơn",
    "Population": "3,367",
    "Density": 1056.38
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Minh Đức",
    "Population": "9,869",
    "Density": 780.71
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Ngọc Kỳ",
    "Population": "3,898",
    "Density": 1062.76
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Ngọc Sơn",
    "Population": "6,755",
    "Density": 1215.17
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Nguyên Giáp",
    "Population": "9,423",
    "Density": 1051.53
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Phượng Kỳ",
    "Population": "4,011",
    "Density": 843.64
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Quang Khải",
    "Population": "5,237",
    "Density": 795.2
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Quảng Nghiệp",
    "Population": "3,969",
    "Density": 1049.14
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Quang Phục",
    "Population": "6,178",
    "Density": 914.43
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Quang Trung",
    "Population": "7,543",
    "Density": 1053.14
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Tái Sơn",
    "Population": "3,643",
    "Density": 969.19
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Tân Kỳ",
    "Population": "7,852",
    "Density": 1121.51
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Tây Kỳ",
    "Population": "3,854",
    "Density": 844.05
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Tiên Động",
    "Population": "6,701",
    "Density": 892.08
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Tứ Kỳ",
    "Population": "6,059",
    "Density": 1268.77
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Tứ Xuyên",
    "Population": "3,117",
    "Density": 488.4
  },
  {
    "Province": "Hải Dương",
    "District": "Tứ Kỳ",
    "Ward": "Văn Tố",
    "Population": "7,749",
    "Density": 862.43
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Đông Phú",
    "Population": "9,593",
    "Density": 558.02
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Đông Phước",
    "Population": "9,744",
    "Density": 448.47
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Đông Phước A",
    "Population": "9,866",
    "Density": 573.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Đông Thạnh",
    "Population": "8,861",
    "Density": 772.67
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Mái Dầm (Phú Hữu A)",
    "Population": "11,594",
    "Density": 663.42
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Ngã Sáu",
    "Population": "7,291",
    "Density": 700.25
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Phú An",
    "Population": "3,599",
    "Density": 451.72
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành",
    "Ward": "Phú Hữu",
    "Population": "21,262",
    "Density": 568.84
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Cái Tắc",
    "Population": "10,184",
    "Density": 1360.61
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Một Ngàn",
    "Population": "6,330",
    "Density": 769.66
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Nhơn Nhơn Nghĩa A",
    "Population": "9,927",
    "Density": 615.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Rạch Gòi",
    "Population": "9,407",
    "Density": 802.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Tân Hòa",
    "Population": "13,708",
    "Density": 729.61
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Tân Phú Thạnh",
    "Population": "13,563",
    "Density": 902.1
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Tân Thuận",
    "Population": "8,388",
    "Density": 538.73
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Thạnh Xuân",
    "Population": "10,624",
    "Density": 618.79
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Trường Long A",
    "Population": "10,752",
    "Density": 383.3
  },
  {
    "Province": "Hậu Giang",
    "District": "Châu Thành A",
    "Ward": "Trường Long Tây",
    "Population": "8,142",
    "Density": 360.86
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Lương Nghĩa",
    "Population": "9,997",
    "Density": 327.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Lương Tâm",
    "Population": "8,890",
    "Density": 296.99
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Thuận Hòa",
    "Population": "10,461",
    "Density": 362.46
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Thuận Hưng",
    "Population": "9,113",
    "Density": 380.52
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Vĩnh Thuận Đông",
    "Population": "12,237",
    "Density": 395.96
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Vĩnh Viễn",
    "Population": "11,175",
    "Density": 272.71
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Vĩnh Viễn A",
    "Population": "6,993",
    "Density": 248.28
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Xà Phiên",
    "Population": "15,367",
    "Density": 325.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Long Mỹ",
    "Population": "70,934",
    "Density": 475.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Long Bình",
    "Population": "16,766",
    "Density": 448.55
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Long Phú",
    "Population": "9,206",
    "Density": 353.38
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Long Trị",
    "Population": "16,094",
    "Density": 410.96
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Tân Phú",
    "Population": "8,830",
    "Density": 309.98
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Thuận An (Long Mỹ)",
    "Population": "15,660",
    "Density": 1047.14
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Trà Lồng",
    "Population": "4,378",
    "Density": 1346.95
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Ngã Bảy",
    "Population": "57,847",
    "Density": 779.44
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Đại Thành",
    "Population": "11,074",
    "Density": 424.29
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Hiệp Lợi",
    "Population": "7,731",
    "Density": 689.16
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Hiệp Thành",
    "Population": "11,842",
    "Density": 1449.95
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "LáI Hiếu",
    "Population": "8,783",
    "Density": 933.58
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Ngã Bảy",
    "Population": "10,538",
    "Density": 2851.34
  },
  {
    "Province": "Hậu Giang",
    "District": "Long Mỹ",
    "Ward": "Tân Thành",
    "Population": "7,879",
    "Density": 504.19
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Bình Thành",
    "Population": "9,242",
    "Density": 385.31
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Cây Dương",
    "Population": "7,214",
    "Density": 483.8
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Hiệp Hưng",
    "Population": "16,440",
    "Density": 302.32
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Hòa An",
    "Population": "16,559",
    "Density": 332.16
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Hòa Mỹ",
    "Population": "17,110",
    "Density": 344.2
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Kinh Cùng",
    "Population": "8,488",
    "Density": 710.47
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Long Thạnh",
    "Population": "14,772",
    "Density": 577.48
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Phụng Hiệp",
    "Population": "6,335",
    "Density": 322.49
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Phương Bình",
    "Population": "15,335",
    "Density": 270.75
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Phương Phú",
    "Population": "9,827",
    "Density": 334.32
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Tân Bình",
    "Population": "20,086",
    "Density": 529.4
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Tân Long",
    "Population": "13,336",
    "Density": 601.83
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Tân Phước Hưng",
    "Population": "18,520",
    "Density": 312.93
  },
  {
    "Province": "Hậu Giang",
    "District": "Phụng Hiệp",
    "Ward": "Thạnh Hòa",
    "Population": "17,314",
    "Density": 517.98
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Hoả Lựu",
    "Population": "7,125",
    "Density": 418.87
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Hoả Tiến",
    "Population": "4,181",
    "Density": 176.07
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Phường I",
    "Population": "6,609",
    "Density": 9050.7
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Phường III",
    "Population": "8,015",
    "Density": 591.21
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Phường IV",
    "Population": "12,285",
    "Density": 1567.18
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Phường V",
    "Population": "7,275",
    "Density": 920.19
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Phường VII",
    "Population": "7,529",
    "Density": 1205.01
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Tân Tiến",
    "Population": "7,149",
    "Density": 381.85
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thanh",
    "Ward": "Vị Tân",
    "Population": "11,229",
    "Density": 486.76
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Nàng Mau",
    "Population": "6,485",
    "Density": 1194.58
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vị Bình",
    "Population": "9,096",
    "Density": 434.07
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vị Đông",
    "Population": "14,194",
    "Density": 472.87
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vĩnh Thuận Tây",
    "Population": "8,371",
    "Density": 363.17
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vĩnh Trung",
    "Population": "11,658",
    "Density": 357.71
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vĩnh Tường",
    "Population": "13,256",
    "Density": 386.66
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vị Thắng",
    "Population": "9,504",
    "Density": 431.57
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vị Thanh",
    "Population": "9,967",
    "Density": 490.33
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vị Thuỷ",
    "Population": "8,134",
    "Density": 442.79
  },
  {
    "Province": "Hậu Giang",
    "District": "Vị Thủy",
    "Ward": "Vị Trung",
    "Population": "8,811",
    "Density": 394.16
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Bắc Phong",
    "Population": "4,232",
    "Density": 173.37
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Bình Thanh",
    "Population": "2,401",
    "Density": 92.5
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Cao Phong",
    "Population": "5,057",
    "Density": 429.1
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Đông Phong",
    "Population": "2,014",
    "Density": 207.08
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Dũng Phong",
    "Population": "3,372",
    "Density": 327.73
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Nam Phong",
    "Population": "3,790",
    "Density": 199.47
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Tân Phong",
    "Population": "2,380",
    "Density": 284.8
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Tây Phong",
    "Population": "4,886",
    "Density": 221.18
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Thung Nai",
    "Population": "1,794",
    "Density": 51.64
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Thu Phong",
    "Population": "3,339",
    "Density": 198.1
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Xuân Phong",
    "Population": "3,373",
    "Density": 108.29
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Yên Lập",
    "Population": "1,987",
    "Density": 87.99
  },
  {
    "Province": "Hòa Bình",
    "District": "Cao Phong",
    "Ward": "Yên Thượng",
    "Population": "2,324",
    "Density": 136.51
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Cao Sơn",
    "Population": "3,817",
    "Density": 75.81
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Đà Bắc",
    "Population": "4,688",
    "Density": 921.28
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Đoàn Kết",
    "Population": "2,791",
    "Density": 68.36
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Đồng Chum",
    "Population": "2,938",
    "Density": 52.55
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Đồng Nghê",
    "Population": "1,649",
    "Density": 51.69
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Đồng Ruộng",
    "Population": "2,127",
    "Density": 49.93
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Giáp Đắt",
    "Population": "1,930",
    "Density": 53.22
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Hào Lý",
    "Population": "1,635",
    "Density": 85.89
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Hiền Lương",
    "Population": "1,744",
    "Density": 43.79
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Mường Chiềng",
    "Population": "2,743",
    "Density": 106.72
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Mường Tuổng",
    "Population": "1,082",
    "Density": 75.63
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Suối Nánh",
    "Population": "1,198",
    "Density": 33.81
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Tân Minh",
    "Population": "3,582",
    "Density": 47.96
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Tân Pheo",
    "Population": "3,558",
    "Density": 75.08
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Tiền Phong",
    "Population": "2,159",
    "Density": 35.14
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Toàn Sơn",
    "Population": "2,051",
    "Density": 72.51
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Trung Thành",
    "Population": "1,762",
    "Density": 58.5
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Tu Lý",
    "Population": "5,502",
    "Density": 120.85
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Vầy Nưa",
    "Population": "2,405",
    "Density": 39.64
  },
  {
    "Province": "Hòa Bình",
    "District": "Đà Bắc",
    "Ward": "Yên Hòa",
    "Population": "1,524",
    "Density": 45.92
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Chăm Mát",
    "Population": "7,804",
    "Density": 2248.93
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Dân Chủ",
    "Population": "3,700",
    "Density": 487.57
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Đồng Tiến",
    "Population": "11,285",
    "Density": 4675.78
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Hòa Bình",
    "Population": "2,174",
    "Density": 188.98
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Hữu Nghị",
    "Population": "9,565",
    "Density": 2500.85
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Phương Lâm",
    "Population": "10,383",
    "Density": 3256.59
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Sủ Ngòi",
    "Population": "4,079",
    "Density": 460.33
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Tân Hòa",
    "Population": "6,157",
    "Density": 1276.25
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Tân Thịnh",
    "Population": "10,006",
    "Density": 2677.84
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Thái Bình",
    "Population": "5,735",
    "Density": 272.34
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Thái Thịnh",
    "Population": "1,169",
    "Density": 74.85
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Thịnh Lang",
    "Population": "4,442",
    "Density": 1530.19
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Thống Nhất",
    "Population": "3,242",
    "Density": 210.08
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Trung Minh",
    "Population": "5,726",
    "Density": 396.59
  },
  {
    "Province": "Hòa Bình",
    "District": "Hòa Bình",
    "Ward": "Yên Mông",
    "Population": "3,339",
    "Density": 135.23
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Bắc Sơn",
    "Population": "3,013",
    "Density": 125.31
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Bình Sơn",
    "Population": "2,470",
    "Density": 161.66
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Bo",
    "Population": "2,810",
    "Density": 3913.65
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Cuối Hạ",
    "Population": "6,893",
    "Density": 191.83
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Đông Bắc",
    "Population": "3,581",
    "Density": 316.68
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Đú Sáng",
    "Population": "5,141",
    "Density": 101.52
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Hạ Bì",
    "Population": "5,789",
    "Density": 786.08
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Hợp Đồng",
    "Population": "3,537",
    "Density": 254.08
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Hợp Kim",
    "Population": "2,587",
    "Density": 323.89
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Hùng Tiến",
    "Population": "2,002",
    "Density": 127.03
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Kim Bình",
    "Population": "4,210",
    "Density": 832.41
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Kim Bôi",
    "Population": "3,578",
    "Density": 441.95
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Kim Sơn",
    "Population": "3,220",
    "Density": 130.19
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Kim Tiến",
    "Population": "4,208",
    "Density": 193.41
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Kim Truy",
    "Population": "4,091",
    "Density": 388.36
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Lập Chiệng",
    "Population": "1,817",
    "Density": 119.41
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Mi Hòa",
    "Population": "5,427",
    "Density": 180.13
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Nam Thượng",
    "Population": "4,871",
    "Density": 239.57
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Nật Sơn",
    "Population": "2,361",
    "Density": 134.29
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Nuông Dăm",
    "Population": "3,750",
    "Density": 105.2
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Sào Báy",
    "Population": "3,926",
    "Density": 215.57
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Sơn Thủy",
    "Population": "2,738",
    "Density": 254.01
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Thượng Bì",
    "Population": "2,597",
    "Density": 231.19
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Thượng Tiến",
    "Population": "1,244",
    "Density": 22.43
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Trung Bì",
    "Population": "2,423",
    "Density": 280.59
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Tú Sơn",
    "Population": "6,474",
    "Density": 138.02
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Vĩnh Đồng",
    "Population": "4,412",
    "Density": 438.57
  },
  {
    "Province": "Hòa Bình",
    "District": "Kim Bôi",
    "Ward": "Vĩnh Tiến",
    "Population": "6,110",
    "Density": 347.65
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Dân Hạ",
    "Population": "5,035",
    "Density": 132.96
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Dân Hòa",
    "Population": "2,087",
    "Density": 85.49
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Độc Lập",
    "Population": "1,712",
    "Density": 52.72
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Hợp Thành",
    "Population": "3,254",
    "Density": 179.25
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Hợp Thịnh",
    "Population": "3,703",
    "Density": 394.84
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Kỳ Sơn",
    "Population": "2,356",
    "Density": 689.07
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Mông Hóa",
    "Population": "4,838",
    "Density": 271.28
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Phúc Tiến",
    "Population": "1,735",
    "Density": 93.81
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Phú Minh",
    "Population": "2,382",
    "Density": 120.44
  },
  {
    "Province": "Hòa Bình",
    "District": "Kỳ Sơn",
    "Ward": "Yên Quang",
    "Population": "3,867",
    "Density": 172.07
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Ân Nghĩa",
    "Population": "7,861",
    "Density": 289.38
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Bình Cảng",
    "Population": "3,320",
    "Density": 293.7
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Bình Chân",
    "Population": "3,007",
    "Density": 206.03
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Bình Hẻm",
    "Population": "3,016",
    "Density": 109.51
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Chí Đạo",
    "Population": "2,694",
    "Density": 252.7
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Chí Thiện",
    "Population": "2,606",
    "Density": 350.09
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Định Cư",
    "Population": "4,491",
    "Density": 408.24
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Hương Nhượng",
    "Population": "3,319",
    "Density": 282.42
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Liên Vũ",
    "Population": "4,461",
    "Density": 387.95
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Miền Đồi",
    "Population": "3,743",
    "Density": 143.67
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Mỹ Thành",
    "Population": "4,145",
    "Density": 114.65
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Ngọc Lâu",
    "Population": "2,649",
    "Density": 87.65
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Ngọc Sơn",
    "Population": "2,337",
    "Density": 69.97
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Nhân Nghĩa",
    "Population": "5,261",
    "Density": 372.57
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Phúc Tuy",
    "Population": "2,682",
    "Density": 282
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Phú Lương",
    "Population": "6,445",
    "Density": 298.02
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Quý Hòa",
    "Population": "5,570",
    "Density": 130.62
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Tân Lập",
    "Population": "7,221",
    "Density": 491.53
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Tân Mỹ",
    "Population": "6,449",
    "Density": 206.67
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Thượng Cốc",
    "Population": "7,100",
    "Density": 466.28
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Tuân Đạo",
    "Population": "4,541",
    "Density": 361
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Tự Do",
    "Population": "2,316",
    "Density": 45.56
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Văn Nghĩa",
    "Population": "6,120",
    "Density": 200.25
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Văn Sơn",
    "Population": "3,915",
    "Density": 225.77
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Vụ Bản",
    "Population": "4,141",
    "Density": 2297.24
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Vũ Lâm",
    "Population": "3,749",
    "Density": 511.87
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Xuất Hóa",
    "Population": "6,867",
    "Density": 457.43
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Yên Nghiệp",
    "Population": "5,467",
    "Density": 238.94
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Sơn",
    "Ward": "Yên Phú",
    "Population": "6,844",
    "Density": 321.07
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "An Bình",
    "Population": "5,987",
    "Density": 197.41
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "An Lạc",
    "Population": "2,679",
    "Density": 111.38
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Chi Nê",
    "Population": "5,481",
    "Density": 858.39
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Cố Nghĩa",
    "Population": "3,979",
    "Density": 301.42
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Đồng Môn",
    "Population": "1,262",
    "Density": 65.9
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Đồng Tâm",
    "Population": "5,262",
    "Density": 111.47
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Hưng Thi",
    "Population": "3,397",
    "Density": 83.62
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Khoan Dụ",
    "Population": "2,920",
    "Density": 239.13
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Lạc Long",
    "Population": "1,591",
    "Density": 191.71
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Liên Hòa",
    "Population": "1,569",
    "Density": 108.76
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Phú Lão",
    "Population": "3,567",
    "Density": 205
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Phú Thành",
    "Population": "7,137",
    "Density": 189.55
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Thanh Hà",
    "Population": "1,927",
    "Density": 616.86
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Thanh Nông",
    "Population": "4,934",
    "Density": 202.07
  },
  {
    "Province": "Hòa Bình",
    "District": "Lạc Thủy",
    "Ward": "Yên Bồng",
    "Population": "4,321",
    "Density": 273.34
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Cao Dương",
    "Population": "4,581",
    "Density": 275.27
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Cao Răm",
    "Population": "4,312",
    "Density": 128.42
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Cao Thắng",
    "Population": "5,138",
    "Density": 661.83
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Cư Yên",
    "Population": "3,839",
    "Density": 274.92
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Hòa Sơn",
    "Population": "6,748",
    "Density": 349.96
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Hợp Châu",
    "Population": "3,845",
    "Density": 237.24
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Hợp Hòa",
    "Population": "2,408",
    "Density": 254.2
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Hợp Thanh",
    "Population": "3,598",
    "Density": 210.62
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Lâm Sơn",
    "Population": "4,040",
    "Density": 113.82
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Liên Sơn",
    "Population": "3,962",
    "Density": 306.4
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Long Sơn",
    "Population": "3,963",
    "Density": 225.73
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Lương Sơn",
    "Population": "11,528",
    "Density": 666.86
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Nhuận Trạch",
    "Population": "5,318",
    "Density": 586.06
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Tân Thành",
    "Population": "5,417",
    "Density": 200.4
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Tân Vinh",
    "Population": "4,268",
    "Density": 222.27
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Thành Lập",
    "Population": "3,512",
    "Density": 376.03
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Thanh Lương",
    "Population": "3,396",
    "Density": 435.72
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Tiến Sơn",
    "Population": "3,557",
    "Density": 147.07
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Trung Sơn",
    "Population": "4,032",
    "Density": 390.28
  },
  {
    "Province": "Hòa Bình",
    "District": "Lương Sơn",
    "Ward": "Trường Sơn",
    "Population": "2,093",
    "Density": 66.52
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Ba Khan",
    "Population": "1,486",
    "Density": 78.65
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Bao La",
    "Population": "2,302",
    "Density": 108.85
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Chiềng Châu",
    "Population": "3,432",
    "Density": 197.66
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Cun Pheo",
    "Population": "2,171",
    "Density": 36.09
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Đồng Bảng",
    "Population": "1,353",
    "Density": 43.94
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Hang Kia",
    "Population": "2,695",
    "Density": 116.39
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Mai Châu",
    "Population": "5,145",
    "Density": 470.9
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Mai Hạ",
    "Population": "2,632",
    "Density": 148.19
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Mai Hịch",
    "Population": "3,658",
    "Density": 91.85
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Nà Mèo",
    "Population": "1,360",
    "Density": 50.16
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Nà Phòn",
    "Population": "1,590",
    "Density": 266.53
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Nong Luông",
    "Population": "1,560",
    "Density": 102.03
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Pà Cò",
    "Population": "2,584",
    "Density": 136.47
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Phúc Sạn",
    "Population": "2,234",
    "Density": 69.46
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Piềng Vế",
    "Population": "2,354",
    "Density": 149
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Pù Pin",
    "Population": "1,705",
    "Density": 79.29
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Săm Khóe",
    "Population": "2,654",
    "Density": 106.97
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Tân Dân",
    "Population": "2,243",
    "Density": 51.3
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Tân Mai",
    "Population": "1,564",
    "Density": 43.7
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Tân Sơn",
    "Population": "1,059",
    "Density": 92.5
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Thung Khe",
    "Population": 540,
    "Density": 29.17
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Tòng Đậu",
    "Population": "2,751",
    "Density": 140.46
  },
  {
    "Province": "Hòa Bình",
    "District": "Mai Châu",
    "Ward": "Vạn Mai",
    "Population": "2,996",
    "Density": 83.46
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Bắc Sơn",
    "Population": "1,349",
    "Density": 96.49
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Địch Giáo",
    "Population": "3,532",
    "Density": 291.49
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Đông Lai",
    "Population": "5,787",
    "Density": 250.23
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Do Nhân",
    "Population": "2,177",
    "Density": 124.31
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Gia Mô",
    "Population": "3,121",
    "Density": 154.9
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Lỗ Sơn",
    "Population": "3,143",
    "Density": 189.09
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Lũng Vân",
    "Population": "2,078",
    "Density": 96.9
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Mãn Đức",
    "Population": "4,164",
    "Density": 253.35
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Mường Khến",
    "Population": "4,206",
    "Density": 1039.83
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Mỹ Hòa",
    "Population": "3,473",
    "Density": 108.97
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Nam Sơn",
    "Population": "1,481",
    "Density": 72.02
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Ngọc Mỹ",
    "Population": "5,615",
    "Density": 175.09
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Ngòi Hoa",
    "Population": "1,293",
    "Density": 34.42
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Ngổ Luông",
    "Population": "1,386",
    "Density": 36.39
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Phong Phú",
    "Population": "3,790",
    "Density": 281.43
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Phú Cường",
    "Population": "6,467",
    "Density": 169.63
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Phú Vinh",
    "Population": "3,657",
    "Density": 104.7
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Quyết Chiến",
    "Population": "1,471",
    "Density": 56.08
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Quy Hậu",
    "Population": "4,326",
    "Density": 221.18
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Quy Mỹ",
    "Population": "1,912",
    "Density": 212.51
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Thanh Hối",
    "Population": "5,909",
    "Density": 222.12
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Trung Hòa",
    "Population": "2,151",
    "Density": 61.31
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Tuân Lộ",
    "Population": "2,372",
    "Density": 272.71
  },
  {
    "Province": "Hòa Bình",
    "District": "Tân Lạc",
    "Ward": "Tử Nê",
    "Population": "3,805",
    "Density": 214.45
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Bảo Hiệu",
    "Population": "5,566",
    "Density": 197.49
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Đa Phúc",
    "Population": "4,927",
    "Density": 182.3
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Đoàn Kết",
    "Population": "3,854",
    "Density": 245.51
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Hàng Trạm",
    "Population": "4,845",
    "Density": 2040.69
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Hữu Lợi",
    "Population": "3,666",
    "Density": 162.83
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Lạc Hưng",
    "Population": "1,390",
    "Density": 105.82
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Lạc Lương",
    "Population": "5,003",
    "Density": 157.26
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Lạc Sỹ",
    "Population": "1,985",
    "Density": 68.45
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Lạc Thịnh",
    "Population": "5,509",
    "Density": 173.64
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Ngọc Lương",
    "Population": "8,165",
    "Density": 319.42
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Phú Lai",
    "Population": "3,171",
    "Density": 266.94
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Yên Lạc",
    "Population": "5,430",
    "Density": 183.18
  },
  {
    "Province": "Hòa Bình",
    "District": "Yên Thủy",
    "Ward": "Yên Trị",
    "Population": "6,179",
    "Density": 356.45
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Ân Thi",
    "Population": "8,189",
    "Density": 1065.96
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Bắc Sơn",
    "Population": "7,321",
    "Density": 934.96
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Bãi Sậy",
    "Population": "6,380",
    "Density": 915.25
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Cẩm Ninh",
    "Population": "4,624",
    "Density": 962.89
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Đa Lộc",
    "Population": "4,767",
    "Density": 780.87
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Đặng Lễ",
    "Population": "5,709",
    "Density": 922.61
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Đào Dương",
    "Population": "8,567",
    "Density": 1370.57
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Hạ Lễ",
    "Population": "4,426",
    "Density": 765.24
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Hoàng Hoa Thám",
    "Population": "5,492",
    "Density": 850.47
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Hồng Quang",
    "Population": "5,409",
    "Density": 1556.46
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Hồng Vân",
    "Population": "4,980",
    "Density": 1119.63
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Hồ Tùng Mậu",
    "Population": "8,149",
    "Density": 1144.46
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Nguyễn Trãi",
    "Population": "5,558",
    "Density": 741.16
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Phù Ủng",
    "Population": "8,047",
    "Density": 981.07
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Quảng Lãng",
    "Population": "6,085",
    "Density": 904.52
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Quang Vinh",
    "Population": "5,686",
    "Density": 1009.18
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Tân Phúc",
    "Population": "4,132",
    "Density": 894.74
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Tiền Phong",
    "Population": "4,578",
    "Density": 971.21
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Vân Du",
    "Population": "6,782",
    "Density": 1174.84
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Văn Nhuệ",
    "Population": "5,028",
    "Density": 837.22
  },
  {
    "Province": "Hưng Yên",
    "District": "Ân Thi",
    "Ward": "Xuân Trúc",
    "Population": "7,879",
    "Density": 1037.54
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "An Tảo",
    "Population": "9,330",
    "Density": 2953.93
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Bảo Khê",
    "Population": "6,497",
    "Density": 1722.11
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Hiến Nam",
    "Population": "7,472",
    "Density": 3179.57
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Hoàng Hanh",
    "Population": "3,196",
    "Density": 681.96
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Hồng Châu",
    "Population": "3,914",
    "Density": 1397.21
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Hồng Nam",
    "Population": "4,163",
    "Density": 1131.93
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Hùng Cường",
    "Population": "4,178",
    "Density": 796.51
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Lam Sơn",
    "Population": "6,884",
    "Density": 924.44
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Lê Lợi",
    "Population": "6,358",
    "Density": 3103.13
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Liên Phương",
    "Population": "7,525",
    "Density": 1365.03
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Minh Khai",
    "Population": "5,415",
    "Density": 2881.85
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Phú Cường",
    "Population": "5,901",
    "Density": 994.91
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Phương Chiểu",
    "Population": "4,776",
    "Density": 1852.6
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Quảng Châu",
    "Population": "7,735",
    "Density": 890.19
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Quang Trung",
    "Population": "8,646",
    "Density": 20222.2
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Tân Hưng",
    "Population": "4,858",
    "Density": 673.33
  },
  {
    "Province": "Hưng Yên",
    "District": "Hưng Yên",
    "Ward": "Trung Nghĩa",
    "Population": "8,698",
    "Density": 1557.22
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "An Vĩ",
    "Population": "6,170",
    "Density": 1256.26
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Bình Kiều",
    "Population": "6,053",
    "Density": 1477.64
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Bình Minh",
    "Population": "7,851",
    "Density": 1285.97
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Chí Tân",
    "Population": "5,495",
    "Density": 1316.26
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Đại Hưng",
    "Population": "6,251",
    "Density": 1676.01
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Đại Tập",
    "Population": "6,643",
    "Density": 1129.92
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Dân Tiến",
    "Population": "11,203",
    "Density": 2449.6
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Dạ Trạch",
    "Population": "4,983",
    "Density": 1273.68
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Đông Kết",
    "Population": "9,279",
    "Density": 1435.6
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Đông Ninh",
    "Population": "4,653",
    "Density": 1156.11
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Đông Tảo",
    "Population": "7,812",
    "Density": 1530.77
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Đồng Tiến",
    "Population": "4,835",
    "Density": 1376.87
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Hàm Tử",
    "Population": "5,916",
    "Density": 1291.56
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Hồng Tiến",
    "Population": "8,839",
    "Density": 1562.68
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Khoái Châu",
    "Population": "7,626",
    "Density": 1724.95
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Liên Khê",
    "Population": "5,663",
    "Density": 1096.99
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Nhuế Dương",
    "Population": "4,282",
    "Density": 1137.23
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Ông Đình",
    "Population": "4,273",
    "Density": 1375.24
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Phùng Hưng",
    "Population": "10,888",
    "Density": 1169.21
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Tân Châu",
    "Population": "9,897",
    "Density": 1662.3
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Tân Dân",
    "Population": "12,453",
    "Density": 1166.45
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Thành Công",
    "Population": "5,880",
    "Density": 1363.45
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Thuần Hưng",
    "Population": "8,255",
    "Density": 1715.32
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Tứ Dân",
    "Population": "9,114",
    "Density": 1497.56
  },
  {
    "Province": "Hưng Yên",
    "District": "Khoái Châu",
    "Ward": "Việt Hòa",
    "Population": "7,089",
    "Density": 1094.78
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Chính Nghĩa",
    "Population": "6,345",
    "Density": 974.83
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Đồng Thanh",
    "Population": "6,070",
    "Density": 1074.39
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Đức Hợp",
    "Population": "7,479",
    "Density": 999.73
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Hiệp Cường",
    "Population": "7,632",
    "Density": 1025.83
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Hùng An",
    "Population": "6,217",
    "Density": 827.06
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Lương Bằng",
    "Population": "9,453",
    "Density": 1280.89
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Mai Động",
    "Population": "5,322",
    "Density": 797.16
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Nghĩa Dân",
    "Population": "6,265",
    "Density": 1356.21
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Ngọc Thanh",
    "Population": "6,420",
    "Density": 984.24
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Nhân La",
    "Population": "3,599",
    "Density": 1125.71
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Phạm Ngũ Lão",
    "Population": "6,719",
    "Density": 996.5
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Phú Thịnh",
    "Population": "5,787",
    "Density": 1228.77
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Song Mai",
    "Population": "6,476",
    "Density": 869.26
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Thọ Vinh",
    "Population": "6,240",
    "Density": 1783.32
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Toàn Thắng",
    "Population": "9,552",
    "Density": 1326.96
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Vĩnh Xá",
    "Population": "6,705",
    "Density": 1147.02
  },
  {
    "Province": "Hưng Yên",
    "District": "Kim Động",
    "Ward": "Vũ Xá",
    "Population": "5,318",
    "Density": 1034.81
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Bạch Sam",
    "Population": "6,034",
    "Density": 1352.67
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Bần Yên Nhân",
    "Population": "12,483",
    "Density": 2192.38
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Cẩm Xá",
    "Population": "9,382",
    "Density": 1043.45
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Dị Sử",
    "Population": "10,168",
    "Density": 1482.6
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Dương Quang",
    "Population": "6,894",
    "Density": 891.58
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Hòa Phong",
    "Population": "7,927",
    "Density": 1079.11
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Hưng Long",
    "Population": "3,323",
    "Density": 704.06
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Minh Đức",
    "Population": "7,031",
    "Density": 1244.42
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Ngọc Lâm",
    "Population": "4,954",
    "Density": 910.65
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Nhân Hòa",
    "Population": "9,046",
    "Density": 1471.95
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Phan Đình Phùng",
    "Population": "7,191",
    "Density": 947.82
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Phùng Chí Kiên",
    "Population": "4,910",
    "Density": 1159.14
  },
  {
    "Province": "Hưng Yên",
    "District": "Mỹ Hào",
    "Ward": "Xuân Dục",
    "Population": "4,031",
    "Density": 942.31
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Đình Cao",
    "Population": "9,332",
    "Density": 939.04
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Đoàn Đào",
    "Population": "8,585",
    "Density": 840.76
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Minh Hoàng",
    "Population": "4,420",
    "Density": 752.97
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Minh Tân",
    "Population": "4,746",
    "Density": 769.34
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Minh Tiến",
    "Population": "4,410",
    "Density": 744.22
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Nguyên Hòa",
    "Population": "4,525",
    "Density": 733.39
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Nhật Quang",
    "Population": "4,679",
    "Density": 934.75
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Phan Sào Nam",
    "Population": "4,838",
    "Density": 744.32
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Quang Hưng",
    "Population": "6,010",
    "Density": 874.89
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Tam Đa",
    "Population": "4,881",
    "Density": 881.8
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Tiền Tiến",
    "Population": "3,194",
    "Density": 673.48
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Tống Phan",
    "Population": "6,170",
    "Density": 797.46
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Tống Trân",
    "Population": "6,395",
    "Density": 712.22
  },
  {
    "Province": "Hưng Yên",
    "District": "Phù Cừ",
    "Ward": "Trần Cao",
    "Population": "5,201",
    "Density": 1060.82
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "An Viên",
    "Population": "7,761",
    "Density": 1378.61
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Cương Chính",
    "Population": "6,620",
    "Density": 1042.98
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Dị Chế",
    "Population": "6,444",
    "Density": 1285.02
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Đức Thắng",
    "Population": "3,623",
    "Density": 859.73
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Hải Triều",
    "Population": "5,013",
    "Density": 965.9
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Hưng Đạo",
    "Population": "5,567",
    "Density": 832.61
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Lệ Xá",
    "Population": "5,415",
    "Density": 851.6
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Minh Phương",
    "Population": "3,162",
    "Density": 830.44
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Ngô Quyền",
    "Population": "4,977",
    "Density": 766.8
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Nhật Tân",
    "Population": "6,411",
    "Density": 1154.7
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Thiện Phiến",
    "Population": "6,406",
    "Density": 1325.83
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Thủ Sỹ",
    "Population": "8,151",
    "Density": 1450.69
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Thụy Lôi",
    "Population": "6,183",
    "Density": 1158.78
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Trung Dũng",
    "Population": "4,803",
    "Density": 928.35
  },
  {
    "Province": "Hưng Yên",
    "District": "Tiên Lữ",
    "Ward": "Vương",
    "Population": "4,438",
    "Density": 1838.29
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Cửu Cao",
    "Population": "5,883",
    "Density": 1369.8
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Liên Nghĩa",
    "Population": "9,566",
    "Density": 1461.17
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Long Hưng",
    "Population": "11,881",
    "Density": 1418.85
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Mễ Sở",
    "Population": "10,179",
    "Density": 1525.13
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Nghĩa Trụ",
    "Population": "8,859",
    "Density": 1080.26
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Phụng Công",
    "Population": "5,829",
    "Density": 1149.32
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Tân Tiến",
    "Population": "12,037",
    "Density": 1237.47
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Thắng Lợi",
    "Population": "6,357",
    "Density": 1318.2
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Văn Giang",
    "Population": "9,854",
    "Density": 1419.19
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Vĩnh Khúc",
    "Population": "11,069",
    "Density": 1627.91
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Giang",
    "Ward": "Xuân Quan",
    "Population": "7,623",
    "Density": 1378.63
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Chỉ Đạo",
    "Population": "7,741",
    "Density": 1284.26
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Đại Đồng",
    "Population": "9,016",
    "Density": 1011.87
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Đình Dù",
    "Population": "7,778",
    "Density": 1907.87
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Lạc Đạo",
    "Population": "13,634",
    "Density": 1678.13
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Lạc Hồng",
    "Population": "8,305",
    "Density": 1356.63
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Lương Tài",
    "Population": "7,740",
    "Density": 876.75
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Minh Hải",
    "Population": "9,338",
    "Density": 1175.7
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Như Quỳnh",
    "Population": "17,570",
    "Density": 2488.56
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Tân Quang",
    "Population": "12,953",
    "Density": 2142.9
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Trưng Trắc",
    "Population": "10,796",
    "Density": 3304.56
  },
  {
    "Province": "Hưng Yên",
    "District": "Văn Lâm",
    "Ward": "Việt Hưng",
    "Population": "8,095",
    "Density": 972.85
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Đồng Than",
    "Population": "10,193",
    "Density": 1187.39
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Giai Phạm",
    "Population": "9,039",
    "Density": 1508.74
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Hoàn Long",
    "Population": "7,245",
    "Density": 1243.03
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Liêu Xá",
    "Population": "8,889",
    "Density": 1379.98
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Lý Thường Kiệt",
    "Population": "5,965",
    "Density": 759.78
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Minh Châu",
    "Population": "4,435",
    "Density": 1302.15
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Nghĩa Hiệp",
    "Population": "5,580",
    "Density": 1677.44
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Ngọc Long",
    "Population": "5,574",
    "Density": 1125.86
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Tân Lập",
    "Population": "8,280",
    "Density": 1575.34
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Tân Việt",
    "Population": "7,757",
    "Density": 2000.46
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Thanh Long",
    "Population": "8,396",
    "Density": 1360.49
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Trung Hòa",
    "Population": "11,067",
    "Density": 1275.04
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Trung Hưng",
    "Population": "7,089",
    "Density": 2081.75
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Việt Cường",
    "Population": "3,756",
    "Density": 1399.35
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Yên Hòa",
    "Population": "5,276",
    "Density": 1714.04
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Yên Mỹ",
    "Population": "13,375",
    "Density": 3318.78
  },
  {
    "Province": "Hưng Yên",
    "District": "Yên Mỹ",
    "Ward": "Yên Phú",
    "Population": "11,814",
    "Density": 1393.32
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam An Bắc",
    "Population": "5,459",
    "Density": 266.75
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam An Nam",
    "Population": "4,765",
    "Density": 241.41
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Đức",
    "Population": "14,586",
    "Density": 919.44
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Hải Đông",
    "Population": "2,828",
    "Density": 76.23
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Hải Tây",
    "Population": "5,080",
    "Density": 428.11
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Hiệp Bắc",
    "Population": "2,937",
    "Density": 185.6
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Hiệp Nam",
    "Population": "5,149",
    "Density": 271.36
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Hòa",
    "Population": "13,166",
    "Density": 362.58
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Phước Tây",
    "Population": "6,550",
    "Density": 75.04
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Tân",
    "Population": "7,767",
    "Density": 265.46
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Cam Thành Bắc",
    "Population": "13,333",
    "Density": 637.88
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Sơn Tân",
    "Population": 884,
    "Density": 15.97
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Suối Cát",
    "Population": "9,095",
    "Density": 89.58
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Lâm",
    "Ward": "Suối Tân",
    "Population": "9,251",
    "Density": 122.04
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Ba Ngòi",
    "Population": "11,982",
    "Density": 1726.29
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Bình",
    "Population": "4,880",
    "Density": 934.97
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Lập",
    "Population": "1,873",
    "Density": 86.77
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Linh",
    "Population": "9,397",
    "Density": 7240.72
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Lộc",
    "Population": "7,009",
    "Density": 1522.47
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Lợi",
    "Population": "8,668",
    "Density": 11365.19
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Nghĩa",
    "Population": "13,300",
    "Density": 123.96
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Phú",
    "Population": "7,050",
    "Density": 1459.51
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Phúc Bắc",
    "Population": "12,204",
    "Density": 897.29
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Phúc Nam",
    "Population": "6,718",
    "Density": 1245.3
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Phước Đông",
    "Population": "12,329",
    "Density": 174.7
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Thành Nam",
    "Population": "4,504",
    "Density": 341.39
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Thịnh Đông",
    "Population": "7,151",
    "Density": 242.41
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Thịnh Tây",
    "Population": "4,806",
    "Density": 153.89
  },
  {
    "Province": "Khánh Hòa",
    "District": "Cam Ranh",
    "Ward": "Cam Thuận",
    "Population": "9,179",
    "Density": 5980.58
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên An",
    "Population": "9,084",
    "Density": 1051.4
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Bình",
    "Population": "3,380",
    "Density": 708.4
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Điền",
    "Population": "10,072",
    "Density": 307.69
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Đồng",
    "Population": "3,176",
    "Density": 188.98
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Hòa",
    "Population": "5,067",
    "Density": 705.9
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Khánh",
    "Population": "20,659",
    "Density": 4946.72
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Lạc",
    "Population": "8,558",
    "Density": 1854.95
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Lâm",
    "Population": "6,517",
    "Density": 87.49
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Lộc",
    "Population": "2,916",
    "Density": 342.28
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Phú",
    "Population": "9,535",
    "Density": 1488.68
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Phước",
    "Population": "5,866",
    "Density": 1159.47
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Sơn",
    "Population": "9,710",
    "Density": 401.7
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Tân",
    "Population": "2,754",
    "Density": 63.14
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Thạnh",
    "Population": "5,616",
    "Density": 1532.96
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Thọ",
    "Population": "4,644",
    "Density": 193.26
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Toàn",
    "Population": "6,299",
    "Density": 1039.75
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Diên Xuân",
    "Population": "4,903",
    "Density": 190.79
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Suối Hiệp",
    "Population": "8,674",
    "Density": 525.06
  },
  {
    "Province": "Khánh Hòa",
    "District": "Diên Khánh",
    "Ward": "Suối Tiên",
    "Population": "4,289",
    "Density": 166.26
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Ba Cụm Bắc",
    "Population": "4,276",
    "Density": 111.77
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Ba Cụm Nam",
    "Population": "1,168",
    "Density": 27.23
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Sơn Bình",
    "Population": "2,698",
    "Density": 56.98
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Sơn Hiệp",
    "Population": "1,520",
    "Density": 44.27
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Sơn Lâm",
    "Population": "2,662",
    "Density": 51.5
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Sơn Trung",
    "Population": "2,039",
    "Density": 60.38
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Thành Sơn",
    "Population": "2,530",
    "Density": 34.3
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Sơn",
    "Ward": "Tô Hạp",
    "Population": "4,037",
    "Density": 244.49
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Cầu Bà",
    "Population": "2,248",
    "Density": 114.61
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Giang Ly",
    "Population": "1,429",
    "Density": 31.55
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Bình",
    "Population": "4,060",
    "Density": 46.03
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Đông",
    "Population": "3,105",
    "Density": 54.57
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Hiệp",
    "Population": "3,317",
    "Density": 20.49
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Nam",
    "Population": "1,749",
    "Density": 42.49
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Phú",
    "Population": "2,893",
    "Density": 18.44
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Thành",
    "Population": "1,691",
    "Density": 29.29
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Thượng",
    "Population": "2,105",
    "Density": 10.11
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Trung",
    "Population": "2,671",
    "Density": 15.12
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Khánh Vĩnh",
    "Population": "3,973",
    "Density": 400.6
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Liên Sang",
    "Population": "1,664",
    "Density": 28.98
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Sông Cầu",
    "Population": "1,026",
    "Density": 41.73
  },
  {
    "Province": "Khánh Hòa",
    "District": "Khánh Vĩnh",
    "Ward": "Sơn Thái",
    "Population": "1,783",
    "Density": 28.27
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Lộc Thọ",
    "Population": "12,198",
    "Density": 12026.03
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ngọc Hiệp",
    "Population": "19,151",
    "Density": 4825.14
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phước Đồng",
    "Population": "19,679",
    "Density": 351.34
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phước Hải",
    "Population": "19,843",
    "Density": 7573.95
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phước Hòa",
    "Population": "11,976",
    "Density": 11507.64
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phước Long",
    "Population": "29,011",
    "Density": 6608.28
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phước Tân",
    "Population": "13,268",
    "Density": 28097.07
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phước Tiến",
    "Population": "8,757",
    "Density": 33206.93
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phương Sài",
    "Population": "9,880",
    "Density": 26704.15
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Phương Sơn",
    "Population": "9,563",
    "Density": 18555.96
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Tân Lập",
    "Population": "13,213",
    "Density": 19630.65
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vạn Thắng",
    "Population": "10,623",
    "Density": 25217.8
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vạn Thạnh",
    "Population": "11,176",
    "Density": 27370.02
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Hải",
    "Population": "23,659",
    "Density": 6223.6
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Hiệp",
    "Population": "7,763",
    "Density": 2529.9
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Hòa",
    "Population": "15,873",
    "Density": 1381.82
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Lương",
    "Population": "14,633",
    "Density": 311.5
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Ngọc",
    "Population": "16,166",
    "Density": 1911.51
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Nguyên",
    "Population": "21,260",
    "Density": 516.13
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Phước",
    "Population": "26,752",
    "Density": 14818.59
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Phương",
    "Population": "12,697",
    "Density": 387.73
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Thái",
    "Population": "9,756",
    "Density": 634.33
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Thạnh",
    "Population": "10,811",
    "Density": 3070.52
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Thọ",
    "Population": "10,135",
    "Density": 16174.08
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Trung",
    "Population": "8,081",
    "Density": 989.69
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Vĩnh Trường",
    "Population": "15,577",
    "Density": 6025.69
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Xương Huân",
    "Population": "10,778",
    "Density": 17021.21
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Hòa",
    "Population": "230,390",
    "Density": 193.17
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh An",
    "Population": "12,854",
    "Density": 342.65
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Bình",
    "Population": "10,729",
    "Density": 776.96
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Đa",
    "Population": "10,169",
    "Density": 757.19
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Diêm",
    "Population": "8,343",
    "Density": 357.85
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Đông",
    "Population": "5,649",
    "Density": 647.73
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Giang",
    "Population": "8,217",
    "Density": 1165.02
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Hà",
    "Population": "7,468",
    "Density": 584.21
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Hải",
    "Population": "8,325",
    "Density": 980.27
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Hiệp (Ninh Hòa)",
    "Population": "21,013",
    "Density": 3338.74
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Hưng",
    "Population": "5,805",
    "Density": 189.53
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Ích",
    "Population": "8,698",
    "Density": 151.94
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Lộc",
    "Population": "8,567",
    "Density": 303.4
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Phú",
    "Population": "6,520",
    "Density": 113.6
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Phụng",
    "Population": "11,465",
    "Density": 1356.07
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Phước",
    "Population": "6,778",
    "Density": 185.76
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Quang",
    "Population": "12,273",
    "Density": 667.63
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Sim",
    "Population": "10,710",
    "Density": 312.64
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Sơn",
    "Population": "5,651",
    "Density": 32.87
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Tân",
    "Population": "3,042",
    "Density": 38.89
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Tây",
    "Population": "4,536",
    "Density": 16.06
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Thân",
    "Population": "9,594",
    "Density": 566.59
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Thọ",
    "Population": "7,414",
    "Density": 274.6
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Thượng",
    "Population": "6,459",
    "Density": 87.59
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Thủy",
    "Population": "11,330",
    "Density": 709.06
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Trung",
    "Population": "6,499",
    "Density": 379.59
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Vân",
    "Population": "1,699",
    "Density": 36.32
  },
  {
    "Province": "Khánh Hòa",
    "District": "Nha Trang",
    "Ward": "Ninh Xuân",
    "Population": "10,583",
    "Density": 176.43
  },
  {
    "Province": "Khánh Hòa",
    "District": "Trường Sa [Spratly Islands]",
    "Ward": "Sinh Tồn [Sin Cowe Island]",
    "Population": 65,
    "Density": ""
  },
  {
    "Province": "Khánh Hòa",
    "District": "Trường Sa [Spratly Islands]",
    "Ward": "Song Tử Tây [Southwest Cay]",
    "Population": 48,
    "Density": ""
  },
  {
    "Province": "Khánh Hòa",
    "District": "Trường Sa [Spratly Islands]",
    "Ward": "Trường Sa [Spratly Island]",
    "Population": 82,
    "Density": ""
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Đại Lãnh",
    "Population": "10,184",
    "Density": 502.69
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Bình",
    "Population": "8,162",
    "Density": 142.9
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Giã",
    "Population": "18,966",
    "Density": 10595.53
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Hưng",
    "Population": "10,919",
    "Density": 215.67
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Khánh",
    "Population": "8,595",
    "Density": 198.12
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Long",
    "Population": "8,389",
    "Density": 283.95
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Lương",
    "Population": "11,181",
    "Density": 189.47
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Phú",
    "Population": "11,908",
    "Density": 176.12
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Phước",
    "Population": "8,127",
    "Density": 336.63
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Thắng",
    "Population": "16,099",
    "Density": 941.08
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Thạnh",
    "Population": "5,789",
    "Density": 46.32
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Vạn Thọ",
    "Population": "4,400",
    "Density": 204.41
  },
  {
    "Province": "Khánh Hòa",
    "District": "Vạn Ninh",
    "Ward": "Xuân Sơn",
    "Population": "3,758",
    "Density": 106.52
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Đông Thái",
    "Population": "18,477",
    "Density": 307.71
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Đông Yên",
    "Population": "13,589",
    "Density": 244.29
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Hưng Yên",
    "Population": "14,813",
    "Density": 312.46
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Nam Thái",
    "Population": "13,927",
    "Density": 281.36
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Nam Thái A",
    "Population": "7,894",
    "Density": 195.79
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Nam Yên",
    "Population": "15,647",
    "Density": 305.57
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Tây Yên",
    "Population": "15,294",
    "Density": 326.9
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Tây Yên A",
    "Population": "10,975",
    "Density": 381.29
  },
  {
    "Province": "Kiên Giang",
    "District": "An Biên",
    "Ward": "Thứ Ba",
    "Population": "11,452",
    "Density": 736.94
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Đông Hòa",
    "Population": "21,444",
    "Density": 216.34
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Đông Hưng",
    "Population": "9,556",
    "Density": 191.96
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Đông Hưng A",
    "Population": "7,446",
    "Density": 184.27
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Đông Hưng B",
    "Population": "8,031",
    "Density": 102.08
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Đông Thạnh",
    "Population": "10,917",
    "Density": 201.83
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Tân Thạnh",
    "Population": "9,959",
    "Density": 247.36
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Thuận Hoà",
    "Population": "16,186",
    "Density": 212.8
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Thứ Mười Một",
    "Population": "6,555",
    "Density": 541.78
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Vân Khánh",
    "Population": "10,410",
    "Density": 177.21
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Vân Khánh Đông",
    "Population": "8,973",
    "Density": 301.69
  },
  {
    "Province": "Kiên Giang",
    "District": "An Minh",
    "Ward": "Vân Khánh Tây",
    "Population": "5,585",
    "Density": 132.4
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Bình An",
    "Population": "17,850",
    "Density": 537
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Giục Tượng",
    "Population": "15,635",
    "Density": 380.5
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Minh Hòa",
    "Population": "18,256",
    "Density": 384.23
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Minh Lương",
    "Population": "20,609",
    "Density": 1052.12
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Mong Thọ",
    "Population": "7,520",
    "Density": 510.18
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Mong Thọ A",
    "Population": "10,249",
    "Density": 285.68
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Mong Thọ B",
    "Population": "14,748",
    "Density": 728.19
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Thạnh Lộc",
    "Population": "14,237",
    "Density": 417.89
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Hòa Hiệp",
    "Population": "15,919",
    "Density": 927.14
  },
  {
    "Province": "Kiên Giang",
    "District": "Châu Thành",
    "Ward": "Vĩnh Hoà Phú",
    "Population": "13,290",
    "Density": 593.94
  },
  {
    "Province": "Kiên Giang",
    "District": "Giang Thành",
    "Ward": "Phú Lợi",
    "Population": "3,617",
    "Density": 78.18
  },
  {
    "Province": "Kiên Giang",
    "District": "Giang Thành",
    "Ward": "Phú Mỹ",
    "Population": "4,866",
    "Density": 47.55
  },
  {
    "Province": "Kiên Giang",
    "District": "Giang Thành",
    "Ward": "Tân Khánh Hòa",
    "Population": "5,924",
    "Density": 115.23
  },
  {
    "Province": "Kiên Giang",
    "District": "Giang Thành",
    "Ward": "Vĩnh Điều",
    "Population": "5,909",
    "Density": 57.77
  },
  {
    "Province": "Kiên Giang",
    "District": "Giang Thành",
    "Ward": "Vĩnh Phú",
    "Population": "6,775",
    "Density": 56.03
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Bàn Tân Định",
    "Population": "12,581",
    "Density": 397.91
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Bàn Thạch",
    "Population": "10,243",
    "Density": 457.64
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Giồng Riềng (Giồng Giềng)",
    "Population": "17,349",
    "Density": 756.18
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Hoà An",
    "Population": "9,039",
    "Density": 334.59
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Hòa Hưng",
    "Population": "10,633",
    "Density": 255.14
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Hoà Lợi",
    "Population": "10,614",
    "Density": 235.81
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Hòa Thuận",
    "Population": "15,351",
    "Density": 348.41
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Long Thạnh",
    "Population": "16,047",
    "Density": 357.31
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Ngọc Chúc",
    "Population": "12,313",
    "Density": 441.04
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Ngọc Hoà",
    "Population": "10,152",
    "Density": 338.95
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Ngọc Thành",
    "Population": "8,682",
    "Density": 345.73
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Ngọc Thuận",
    "Population": "9,362",
    "Density": 252.26
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Thạnh Hòa",
    "Population": "15,051",
    "Density": 340.8
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Thạnh Hưng",
    "Population": "15,385",
    "Density": 496.24
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Thạnh Lộc",
    "Population": "14,226",
    "Density": 217.04
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Thạnh Phước",
    "Population": "8,126",
    "Density": 179.16
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Vĩnh Phú",
    "Population": "6,943",
    "Density": 297.6
  },
  {
    "Province": "Kiên Giang",
    "District": "Giồng Riềng",
    "Ward": "Vĩnh Thạnh",
    "Population": "9,399",
    "Density": 324.29
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Định An",
    "Population": "17,247",
    "Density": 476.03
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Định Hòa",
    "Population": "15,920",
    "Density": 313.03
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Gò Quao",
    "Population": "9,364",
    "Density": 415.49
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Thới Quản",
    "Population": "17,387",
    "Density": 323.29
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Thủy Liễu",
    "Population": "11,758",
    "Density": 311.82
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Vĩnh Hòa Hưng Bắc",
    "Population": "13,022",
    "Density": 272.43
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Vĩnh Hòa Hưng Nam",
    "Population": "15,052",
    "Density": 312.06
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Vĩnh Phước A",
    "Population": "9,156",
    "Density": 206.24
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Vĩnh Phước B",
    "Population": "8,717",
    "Density": 350.52
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Vĩnh Thắng",
    "Population": "7,696",
    "Density": 277.38
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Vĩnh Tuy",
    "Population": "11,228",
    "Density": 256.86
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Hà Tiên",
    "Population": "44,721",
    "Density": 641.63
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Bình San",
    "Population": "8,853",
    "Density": 5417.66
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Đông Hồ",
    "Population": "7,494",
    "Density": 1052.06
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Mỹ Đức",
    "Population": "5,872",
    "Density": 333.73
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Pháo Đài",
    "Population": "7,388",
    "Density": 888.75
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Thuận Yên",
    "Population": "7,079",
    "Density": 242.26
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Tiên Hải",
    "Population": "1,693",
    "Density": 794.57
  },
  {
    "Province": "Kiên Giang",
    "District": "Gò Quao",
    "Ward": "Tô Châu",
    "Population": "6,342",
    "Density": 1722.01
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Bình Giang",
    "Population": "15,115",
    "Density": 86.86
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Bình Sơn",
    "Population": "14,527",
    "Density": 80.63
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Hòn Đất",
    "Population": "12,517",
    "Density": 377.6
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Lình Huỳnh",
    "Population": "9,269",
    "Density": 272.65
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Mỹ Hiệp Sơn",
    "Population": "17,072",
    "Density": 165.12
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Mỹ Lâm",
    "Population": "19,065",
    "Density": 421.17
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Mỹ Phước",
    "Population": "6,664",
    "Density": 192.36
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Mỹ Thái",
    "Population": "4,309",
    "Density": 58.61
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Mỹ Thuận",
    "Population": "7,010",
    "Density": 188.18
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Nam Thái Sơn",
    "Population": "11,504",
    "Density": 73.09
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Sóc Sơn",
    "Population": "17,300",
    "Density": 672.86
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Sơn Bình",
    "Population": "7,352",
    "Density": 214.53
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Sơn Kiên",
    "Population": "11,480",
    "Density": 215.94
  },
  {
    "Province": "Kiên Giang",
    "District": "Hòn Đất",
    "Ward": "Thổ Sơn",
    "Population": "13,696",
    "Density": 239.52
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Hải",
    "Ward": "An Sơn",
    "Population": "4,944",
    "Density": 639.23
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Hải",
    "Ward": "Hòn Tre",
    "Population": "4,199",
    "Density": 1001.6
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Hải",
    "Ward": "Lại Sơn",
    "Population": "8,004",
    "Density": 740.36
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Hải",
    "Ward": "Nam Du",
    "Population": "3,660",
    "Density": 1831.1
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Bình An",
    "Population": "10,796",
    "Density": 280.61
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Bình Trị",
    "Population": "5,574",
    "Density": 96.28
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Dương Hòa",
    "Population": "6,984",
    "Density": 173.11
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Hòa Điền",
    "Population": "9,589",
    "Density": 79.32
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Hòn Nghệ",
    "Population": "2,146",
    "Density": 595.22
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Kiên Bình",
    "Population": "7,730",
    "Density": 46.56
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Kiên Lương",
    "Population": "32,837",
    "Density": 902.54
  },
  {
    "Province": "Kiên Giang",
    "District": "Kiên Lương",
    "Ward": "Sơn Hải",
    "Population": "2,083",
    "Density": 411.89
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "An Thới",
    "Population": "20,566",
    "Density": 779.46
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Bãi Thơm",
    "Population": "4,381",
    "Density": 45.22
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Cửa Cạn",
    "Population": "3,344",
    "Density": 99.59
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Cửa Dương",
    "Population": "7,660",
    "Density": 41.81
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Dương Đông",
    "Population": "32,550",
    "Density": 2512.74
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Dương Tơ",
    "Population": "7,045",
    "Density": 85.46
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Gành Dầu",
    "Population": "4,224",
    "Density": 66.54
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Hàm Ninh",
    "Population": "7,282",
    "Density": 128.41
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Hòn Thơm",
    "Population": "2,401",
    "Density": 319.32
  },
  {
    "Province": "Kiên Giang",
    "District": "Phú Quốc",
    "Ward": "Thổ Châu",
    "Population": "1,788",
    "Density": 127.46
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "An Bình",
    "Population": "15,715",
    "Density": 3340.84
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "An Hòa",
    "Population": "26,366",
    "Density": 2688.54
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Phi Thông",
    "Population": "15,532",
    "Density": 338.62
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Rạch Sỏi",
    "Population": "17,030",
    "Density": 3216.06
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Bảo",
    "Population": "19,597",
    "Density": 23955.46
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Hiệp",
    "Population": "17,428",
    "Density": 1656.18
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Lạc",
    "Population": "24,683",
    "Density": 12628.81
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Lợi",
    "Population": "8,791",
    "Density": 2556.04
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Quang",
    "Population": "32,391",
    "Density": 29013.79
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Thanh",
    "Population": "24,631",
    "Density": 2718.5
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Thanh Vân",
    "Population": "15,283",
    "Density": 27509.68
  },
  {
    "Province": "Kiên Giang",
    "District": "Rạch Giá",
    "Ward": "Vĩnh Thông",
    "Population": "8,869",
    "Density": 684.81
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Tân An",
    "Population": "7,669",
    "Density": 221.33
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Tân Hiệp",
    "Population": "19,299",
    "Density": 601.42
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Tân Hiệp A",
    "Population": "15,401",
    "Density": 382.92
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Tân Hiệp B",
    "Population": "17,879",
    "Density": 259.24
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Tân Hội",
    "Population": "13,700",
    "Density": 303.62
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Tân Thành",
    "Population": "10,741",
    "Density": 322.17
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Thạnh Đông",
    "Population": "17,209",
    "Density": 332.1
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Thạnh Đông A",
    "Population": "18,871",
    "Density": 414.03
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Thạnh Đông B",
    "Population": "8,238",
    "Density": 285.36
  },
  {
    "Province": "Kiên Giang",
    "District": "Tân Hiệp",
    "Ward": "Thạnh Trị",
    "Population": "13,398",
    "Density": 300.98
  },
  {
    "Province": "Kiên Giang",
    "District": "U Minh Thượng",
    "Ward": "An Minh Bắc",
    "Population": "10,766",
    "Density": 80.46
  },
  {
    "Province": "Kiên Giang",
    "District": "U Minh Thượng",
    "Ward": "Hoà Chánh",
    "Population": "12,498",
    "Density": 284.78
  },
  {
    "Province": "Kiên Giang",
    "District": "U Minh Thượng",
    "Ward": "Minh Thuận",
    "Population": "18,670",
    "Density": 123.06
  },
  {
    "Province": "Kiên Giang",
    "District": "U Minh Thượng",
    "Ward": "Thạnh Yên",
    "Population": "10,250",
    "Density": 260.06
  },
  {
    "Province": "Kiên Giang",
    "District": "U Minh Thượng",
    "Ward": "Thạnh Yên A",
    "Population": "7,829",
    "Density": 238.86
  },
  {
    "Province": "Kiên Giang",
    "District": "U Minh Thượng",
    "Ward": "Vĩnh Hòa",
    "Population": "7,751",
    "Density": 258.96
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Phong Đông",
    "Population": "5,243",
    "Density": 174.41
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Tân Thuận",
    "Population": "10,601",
    "Density": 277.91
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Vĩnh Bình Bắc",
    "Population": "15,635",
    "Density": 185.1
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Vĩnh Bình Nam",
    "Population": "16,453",
    "Density": 217.76
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Vĩnh Phong",
    "Population": "13,883",
    "Density": 206.98
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Vĩnh Thuận",
    "Population": "13,761",
    "Density": 633.8
  },
  {
    "Province": "Kiên Giang",
    "District": "Vĩnh Thuận",
    "Ward": "Vĩnh Thuận",
    "Population": "14,222",
    "Density": 249.28
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Blô",
    "Population": "1,175",
    "Density": 8.04
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Choong",
    "Population": "2,727",
    "Density": 22.53
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Glei",
    "Population": "5,441",
    "Density": 57.56
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk KRoong",
    "Population": "3,494",
    "Density": 40.52
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Long",
    "Population": "4,302",
    "Density": 15.29
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Man",
    "Population": "1,060",
    "Density": 8.73
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Môn",
    "Population": "5,310",
    "Density": 82.06
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Nhoong",
    "Population": "1,757",
    "Density": 10.6
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Đắk Pék",
    "Population": "6,948",
    "Density": 79.04
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Mường Hoong",
    "Population": "2,788",
    "Density": 26.51
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Ngọc Linh",
    "Population": "2,389",
    "Density": 31.64
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Glei",
    "Ward": "Xốp",
    "Population": "1,472",
    "Density": 10.16
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Đắk Hà",
    "Population": "16,165",
    "Density": 628.01
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Đắk HRing",
    "Population": "8,398",
    "Density": 86
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Đắk La",
    "Population": "8,008",
    "Density": 157.65
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Đắk Mar",
    "Population": "6,136",
    "Density": 136.14
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Đắk PXi",
    "Population": "4,602",
    "Density": 15.68
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Đắk Ui",
    "Population": "5,965",
    "Density": 55.51
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Hà Mòn",
    "Population": "4,168",
    "Density": 110.6
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Ngok Réo",
    "Population": "3,554",
    "Density": 33.34
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Hà",
    "Ward": "Ngok Wang",
    "Population": "4,669",
    "Density": 59.95
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Đăk Rơ Nga",
    "Population": "2,723",
    "Density": 25.78
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Đắk Tô",
    "Population": "10,931",
    "Density": 272.83
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Đăk Trăm",
    "Population": "3,439",
    "Density": 68.5
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Diên Bình",
    "Population": "6,014",
    "Density": 131.82
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Kon Đào",
    "Population": "3,237",
    "Density": 96.37
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Ngọk Tụ",
    "Population": "2,235",
    "Density": 41.5
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Pô Kô",
    "Population": "2,273",
    "Density": 27.94
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Tân Cảnh",
    "Population": "4,749",
    "Density": 92.14
  },
  {
    "Province": "Kon Tum",
    "District": "Đắk Tô",
    "Ward": "Văn Lem",
    "Population": "1,839",
    "Density": 40.47
  },
  {
    "Province": "Kon Tum",
    "District": "Ia H'Drai",
    "Ward": "Mô Rai",
    "Population": "3,792",
    "Density": 2.42
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Đắk Long",
    "Population": "2,964",
    "Density": 21.01
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Đắk Nên",
    "Population": "2,003",
    "Density": 16.37
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Đắk Ring",
    "Population": "1,935",
    "Density": 18.1
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Đắk Tăng",
    "Population": "1,172",
    "Density": 7.03
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Hiếu",
    "Population": "2,689",
    "Density": 13.16
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Măng Buk",
    "Population": "3,536",
    "Density": 25.62
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Măng Cành",
    "Population": "1,914",
    "Density": 13.85
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Ngok Tem",
    "Population": "2,702",
    "Density": 11.16
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Plông",
    "Ward": "Pờ Ê",
    "Population": "1,975",
    "Density": 17.48
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Đắk Kôi",
    "Population": "2,233",
    "Density": 6.85
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Đắk Pne",
    "Population": "1,620",
    "Density": 9.86
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Đắk Ruồng",
    "Population": "3,742",
    "Density": 54.67
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Đắk Rve",
    "Population": "4,861",
    "Density": 95.31
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Đắk Tơ Lung",
    "Population": "2,010",
    "Density": 16.14
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Đắk Tờ Re",
    "Population": "4,771",
    "Density": 43.31
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Rẫy",
    "Ward": "Tân Lập",
    "Population": "3,385",
    "Density": 46.65
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Chư Hreng",
    "Population": "2,640",
    "Density": 90.44
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Đắk Blà",
    "Population": "5,802",
    "Density": 139.72
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Đắk Cấm",
    "Population": "4,141",
    "Density": 95.49
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Đăk Năng",
    "Population": "3,352",
    "Density": 145.45
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Đắk Rơ Wa",
    "Population": "2,902",
    "Density": 109.22
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Đoàn Kết",
    "Population": "3,718",
    "Density": 161.93
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Duy Tân",
    "Population": "12,777",
    "Density": 2333.44
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Hòa Bình",
    "Population": "5,615",
    "Density": 94.72
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Ia Chim",
    "Population": "9,088",
    "Density": 137.1
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Kroong",
    "Population": "4,270",
    "Density": 131.15
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Lê Lợi",
    "Population": "5,811",
    "Density": 1423.78
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Ngọk Bay",
    "Population": "4,825",
    "Density": 258.1
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Ngô Mây",
    "Population": "2,198",
    "Density": 320.21
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Nguyễn Trãi",
    "Population": "4,251",
    "Density": 874.28
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Quang Trung",
    "Population": "16,320",
    "Density": 14895.95
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Quyết Thắng",
    "Population": "9,812",
    "Density": 7873.54
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Thắng Lợi",
    "Population": "10,483",
    "Density": 2257.37
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Thống Nhất",
    "Population": "9,874",
    "Density": 2136.77
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Trần Hưng Đạo",
    "Population": "5,905",
    "Density": 857.21
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Trường Chinh",
    "Population": "8,931",
    "Density": 1747.75
  },
  {
    "Province": "Kon Tum",
    "District": "Kon Tum",
    "Ward": "Vinh Quang",
    "Population": "10,384",
    "Density": 447.24
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Đắk Ang",
    "Population": "3,567",
    "Density": 25.54
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Đắk Dục",
    "Population": "4,532",
    "Density": 51.84
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Đắk Kan",
    "Population": "4,378",
    "Density": 48.08
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Đắk Nông",
    "Population": "3,120",
    "Density": 32.51
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Đắk Xú",
    "Population": "5,018",
    "Density": 40.82
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Plei Cần (Plei Kần)",
    "Population": "11,186",
    "Density": 440.72
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Pờ Y (Bờ Y)",
    "Population": "5,513",
    "Density": 55.43
  },
  {
    "Province": "Kon Tum",
    "District": "Ngọc Hồi",
    "Ward": "Sa Loong",
    "Population": "4,514",
    "Density": 24.31
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Hơ Moong",
    "Population": "5,465",
    "Density": 81.66
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Rơ Kơi",
    "Population": "4,115",
    "Density": 13.79
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Sa Bình",
    "Population": "4,245",
    "Density": 104.38
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Sa Nghĩa",
    "Population": "1,927",
    "Density": 52.05
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Sa Nhơn",
    "Population": "2,999",
    "Density": 55.45
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Sa Sơn",
    "Population": "1,950",
    "Density": 29.71
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Sa Thầy",
    "Population": "9,220",
    "Density": 640.68
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Ya ly",
    "Population": "1,549",
    "Density": 8.44
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Ya Tăng",
    "Population": "1,276",
    "Density": 34.24
  },
  {
    "Province": "Kon Tum",
    "District": "Sa Thầy",
    "Ward": "Ya Xiêr",
    "Population": "4,690",
    "Density": 97.84
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Đắk Hà",
    "Population": "2,905",
    "Density": 30.57
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Đắk Na",
    "Population": "2,544",
    "Density": 29.89
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Đăk Rơ Ông",
    "Population": "2,980",
    "Density": 43.21
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Đắk Sao",
    "Population": "2,856",
    "Density": 32.33
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Đắk Tờ Kan",
    "Population": "2,604",
    "Density": 40.74
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Măng Ri",
    "Population": "1,698",
    "Density": 38.03
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Ngọc Lây",
    "Population": "1,525",
    "Density": 16.47
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Ngọc Yêu",
    "Population": "1,341",
    "Density": 9.96
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Tê Xăng",
    "Population": "1,664",
    "Density": 36.21
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Tu Mơ Rông",
    "Population": "1,261",
    "Density": 22.35
  },
  {
    "Province": "Kon Tum",
    "District": "Tu Mơ Rông",
    "Ward": "Văn Xuôi",
    "Population": "1,120",
    "Density": 13.45
  },
  {
    "Province": "Lai Châu",
    "District": "Lai Châu",
    "Ward": "Đoàn Kết",
    "Population": "6,351",
    "Density": 2878.31
  },
  {
    "Province": "Lai Châu",
    "District": "Lai Châu",
    "Ward": "Nậm Loỏng",
    "Population": "1,861",
    "Density": 64.36
  },
  {
    "Province": "Lai Châu",
    "District": "Lai Châu",
    "Ward": "Quyết Thắng",
    "Population": "6,513",
    "Density": 888.15
  },
  {
    "Province": "Lai Châu",
    "District": "Lai Châu",
    "Ward": "San Thàng",
    "Population": "4,454",
    "Density": 166.9
  },
  {
    "Province": "Lai Châu",
    "District": "Lai Châu",
    "Ward": "Tân Phong",
    "Population": "7,527",
    "Density": 1122.53
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Bun Nưa",
    "Population": "5,615",
    "Density": 33.24
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Bun Tở",
    "Population": "2,923",
    "Density": 21.65
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Ka Lăng",
    "Population": "3,825",
    "Density": 15.07
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Kan Hồ",
    "Population": "2,027",
    "Density": 8.54
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Mù Cả",
    "Population": "2,097",
    "Density": 5.46
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Mường Tè",
    "Population": "4,558",
    "Density": 371.44
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Mường Tè",
    "Population": "3,666",
    "Density": 19.89
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Nậm Khao",
    "Population": "1,041",
    "Density": 9.63
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Pa Ủ",
    "Population": "2,730",
    "Density": 8.24
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Pa Vệ Sử",
    "Population": "2,233",
    "Density": 9.25
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Tà Tổng",
    "Population": "4,845",
    "Density": 9.48
  },
  {
    "Province": "Lai Châu",
    "District": "Mường Tè",
    "Ward": "Thu Lũm",
    "Population": "2,005",
    "Density": 17.74
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Hua Bun",
    "Population": "1,471",
    "Density": 5.63
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Lê Lợi",
    "Population": "1,465",
    "Density": 45.1
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Mường Mô",
    "Population": "5,151",
    "Density": 13.05
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Nậm Ban",
    "Population": "2,762",
    "Density": 13.42
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Nậm Hàng",
    "Population": "4,430",
    "Density": 23.8
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Nậm Manh",
    "Population": "1,873",
    "Density": 12.6
  },
  {
    "Province": "Lai Châu",
    "District": "Nậm Nhùn",
    "Ward": "Pú Đao",
    "Population": "1,025",
    "Density": 11.83
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Bản Lang",
    "Population": "6,700",
    "Density": 64.39
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Dào San",
    "Population": "6,700",
    "Density": 96.04
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Hoang Thèn",
    "Population": "3,343",
    "Density": 53.31
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Huổi Luông",
    "Population": "6,203",
    "Density": 47.49
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Khổng Lào",
    "Population": "3,271",
    "Density": 128.86
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Lả Nhì Thàng",
    "Population": "2,570",
    "Density": 33.86
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Ma Li Chải",
    "Population": "1,759",
    "Density": 178.2
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Ma Ly Pho",
    "Population": "2,390",
    "Density": 42.98
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Mồ Sì San",
    "Population": "2,196",
    "Density": 98.88
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Mường So",
    "Population": "5,017",
    "Density": 142.03
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Mù Sang",
    "Population": "2,417",
    "Density": 71.33
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Nậm Xe",
    "Population": "5,635",
    "Density": 45.39
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Pa Vây Sử",
    "Population": "1,772",
    "Density": 42.07
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Phong Thổ",
    "Population": "4,091",
    "Density": 101.69
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Sì Lờ Lầu",
    "Population": "3,601",
    "Density": 75.35
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Sin Suối Hồ",
    "Population": "3,813",
    "Density": 41.31
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Tông Qua Lìn",
    "Population": "1,811",
    "Density": 57.12
  },
  {
    "Province": "Lai Châu",
    "District": "Phong Thổ",
    "Ward": "Vàng Ma Chải",
    "Population": "3,083",
    "Density": 116.92
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Căn Co",
    "Population": "3,506",
    "Density": 42.71
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Chăn Nưa",
    "Population": "4,706",
    "Density": 27.69
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Hồng Thu",
    "Population": "4,108",
    "Density": 64.95
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Làng Mô",
    "Population": "3,319",
    "Density": 26.97
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Ma Quai",
    "Population": "6,485",
    "Density": 47.55
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Nậm Cha",
    "Population": "3,817",
    "Density": 51.28
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Nậm Cuổi",
    "Population": "4,061",
    "Density": 47.24
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Nậm Hăn",
    "Population": "4,646",
    "Density": 50.51
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Nậm Mạ",
    "Population": "1,777",
    "Density": 58
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Nậm Tăm",
    "Population": "3,755",
    "Density": 30.06
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Noong Hẻo",
    "Population": "6,491",
    "Density": 94.32
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Pa Tần",
    "Population": "3,231",
    "Density": 28.06
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Phăng Sô Lin",
    "Population": "1,913",
    "Density": 44.37
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Phìn Hồ",
    "Population": "2,025",
    "Density": 32.84
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Pu Sam Cáp",
    "Population": "1,386",
    "Density": 27.19
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Sà Dề Phìn",
    "Population": "1,725",
    "Density": 27.32
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Sìn Hồ",
    "Population": "3,995",
    "Density": 367.86
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Tả Ngảo",
    "Population": "3,686",
    "Density": 57.21
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Tả Phìn",
    "Population": "2,882",
    "Density": 67.06
  },
  {
    "Province": "Lai Châu",
    "District": "Sìn Hồ",
    "Ward": "Tủa Sín Chải",
    "Population": "4,319",
    "Density": 43.7
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Bản Bo",
    "Population": "4,220",
    "Density": 55.35
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Bản Giang",
    "Population": "3,218",
    "Density": 90.76
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Bản Hon",
    "Population": "2,314",
    "Density": 42.03
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Bình Lư",
    "Population": "4,542",
    "Density": 177.96
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Giang Ma",
    "Population": "3,119",
    "Density": 75.28
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Hồ Thầu",
    "Population": "2,798",
    "Density": 73.2
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Khun Há",
    "Population": "4,263",
    "Density": 44.98
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Nà Tăm",
    "Population": "3,023",
    "Density": 125.41
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Nùng Nàng",
    "Population": "2,437",
    "Density": 68.35
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Sơn Bình",
    "Population": "3,096",
    "Density": 24.17
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Sùng Phài",
    "Population": "1,701",
    "Density": 82.56
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Tả Lèng",
    "Population": "3,633",
    "Density": 70.99
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Tam Đường",
    "Population": "5,651",
    "Density": 301.45
  },
  {
    "Province": "Lai Châu",
    "District": "Tam Đường",
    "Ward": "Thèn Sin",
    "Population": "2,752",
    "Density": 70.45
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Hố Mít",
    "Population": "2,706",
    "Density": 37.76
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Mường Khoa",
    "Population": "6,008",
    "Density": 71.88
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Nậm Cần",
    "Population": "1,943",
    "Density": 14.43
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Nậm Sỏ",
    "Population": "6,380",
    "Density": 39.68
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Pắc Ta",
    "Population": "4,493",
    "Density": 46.58
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Phúc Khoa",
    "Population": "4,102",
    "Density": 47.99
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Tà Mít",
    "Population": "4,076",
    "Density": 39.34
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Tân Uyên",
    "Population": "8,344",
    "Density": 118.35
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Thân Thuộc",
    "Population": "3,109",
    "Density": 108.11
  },
  {
    "Province": "Lai Châu",
    "District": "Tân Uyên",
    "Ward": "Trung Đồng",
    "Population": "4,451",
    "Density": 70.39
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Hua Nà",
    "Population": "2,731",
    "Density": 126.12
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Khoen On",
    "Population": "4,030",
    "Density": 39.74
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Mường Cang",
    "Population": "5,329",
    "Density": 115.36
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Mường Kim",
    "Population": "10,106",
    "Density": 154.63
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Mường Mít",
    "Population": "3,101",
    "Density": 41.13
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Mường Than",
    "Population": "6,847",
    "Density": 167.58
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Pha Mu",
    "Population": "3,568",
    "Density": 24.9
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Phúc Than",
    "Population": "5,699",
    "Density": 91.96
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Tà Gia",
    "Population": "4,456",
    "Density": 46.36
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Tà Hừa",
    "Population": "3,350",
    "Density": 45.23
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Tà Mung",
    "Population": "2,771",
    "Density": 50.5
  },
  {
    "Province": "Lai Châu",
    "District": "Than Uyên",
    "Ward": "Than Uyên",
    "Population": "5,482",
    "Density": 595.69
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "B' Lá",
    "Population": "2,684",
    "Density": 32.75
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc An",
    "Population": "17,547",
    "Density": 361.82
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Bắc",
    "Population": "3,481",
    "Density": 13.15
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Bảo",
    "Population": "3,143",
    "Density": 12.8
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Đức",
    "Population": "7,915",
    "Density": 205.14
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Lâm",
    "Population": "1,843",
    "Density": 13.56
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Nam",
    "Population": "12,003",
    "Density": 169.33
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Ngãi",
    "Population": "12,949",
    "Density": 132.19
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Phú",
    "Population": "2,415",
    "Density": 19.13
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Quảng",
    "Population": "3,824",
    "Density": 142.34
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Tân",
    "Population": "6,311",
    "Density": 46.03
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Thắng",
    "Population": "16,894",
    "Density": 210.23
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Lộc Thành",
    "Population": "14,294",
    "Density": 172.83
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lâm",
    "Ward": "Tân Lạc",
    "Population": "3,933",
    "Density": 144.96
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "B'lao",
    "Population": "11,188",
    "Density": 2242.76
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Đại Lào",
    "Population": "11,382",
    "Density": 191.71
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Đạm Bri",
    "Population": "9,081",
    "Density": 273.2
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Lộc Châu",
    "Population": "16,273",
    "Density": 445.2
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Lộc Nga",
    "Population": "9,679",
    "Density": 594.31
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Lộc Phát",
    "Population": "19,090",
    "Density": 773.59
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Lộc Sơn",
    "Population": "16,896",
    "Density": 1362.58
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Lộc Thanh",
    "Population": "10,116",
    "Density": 464.95
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Lộc Tiến",
    "Population": "13,287",
    "Density": 1043.67
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Phường 1",
    "Population": "11,648",
    "Density": 2639.18
  },
  {
    "Province": "Lâm Đồng",
    "District": "Bảo Lộc",
    "Ward": "Phường 2",
    "Population": "19,927",
    "Density": 2749.96
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Cát Tiên",
    "Population": "6,542",
    "Density": 496.13
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Đồng Nai Thượng",
    "Population": "1,530",
    "Density": 17.41
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Đức Phổ",
    "Population": "3,014",
    "Density": 266.21
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Gia Viễn",
    "Population": "4,512",
    "Density": 158.54
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Mỹ Lâm",
    "Population": "1,123",
    "Density": 70.26
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Nam Ninh",
    "Population": "2,095",
    "Density": 102.56
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Phù Mỹ",
    "Population": "3,335",
    "Density": 476.68
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Phước Cát 1",
    "Population": "6,741",
    "Density": 394
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Phước Cát 2",
    "Population": "2,529",
    "Density": 17.04
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Quảng Ngãi",
    "Population": "1,537",
    "Density": 215.63
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Tiên Hoàng",
    "Population": "2,862",
    "Density": 51.73
  },
  {
    "Province": "Lâm Đồng",
    "District": "Cát Tiên",
    "Ward": "Tư Nghĩa",
    "Population": "1,292",
    "Density": 90.32
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Đạ M'ri",
    "Population": "4,161",
    "Density": 101.35
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Đạ M'ri",
    "Population": "1,006",
    "Density": 11.73
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Đạ Oai",
    "Population": "3,302",
    "Density": 143.1
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Đạ Ploa",
    "Population": "3,315",
    "Density": 35.85
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Đạ Tồn",
    "Population": "1,301",
    "Density": 28.3
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Đoàn Kết",
    "Population": "1,496",
    "Density": 39.14
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Hà Lâm",
    "Population": "3,342",
    "Density": 76.77
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Ma Đa Guôi",
    "Population": "9,141",
    "Density": 359.16
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Ma Đa Guôi",
    "Population": "3,887",
    "Density": 191.07
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Huoai",
    "Ward": "Phước Lộc",
    "Population": "2,499",
    "Density": 31.01
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 1",
    "Population": "9,351",
    "Density": 4096.29
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 2",
    "Population": "18,622",
    "Density": 16178.97
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 3",
    "Population": "16,663",
    "Density": 622.06
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 4",
    "Population": "20,809",
    "Density": 715.01
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 5",
    "Population": "13,622",
    "Density": 391.48
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 6",
    "Population": "16,586",
    "Density": 10118.35
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 7",
    "Population": "14,337",
    "Density": 419.44
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 8",
    "Population": "25,718",
    "Density": 1449.15
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 9",
    "Population": "17,224",
    "Density": 3433.88
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 10",
    "Population": "15,123",
    "Density": 1136.98
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 11",
    "Population": "8,958",
    "Density": 543.47
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Phường 12",
    "Population": "7,742",
    "Density": 628.61
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Tà Nung",
    "Population": "3,944",
    "Density": 84.98
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Trạm Hành",
    "Population": "4,503",
    "Density": 81.42
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Xuân Thọ",
    "Population": "6,142",
    "Density": 97.74
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đà Lạt",
    "Ward": "Xuân Trường",
    "Population": "5,943",
    "Density": 171.03
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Đạ K'Nàng",
    "Population": "5,908",
    "Density": 118.78
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Đạ Long",
    "Population": "2,708",
    "Density": 47.91
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Đạ M'Rong",
    "Population": "3,928",
    "Density": 78.89
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Đạ Rsal",
    "Population": "6,004",
    "Density": 70.75
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Đạ Tông",
    "Population": "7,215",
    "Density": 49.62
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Liêng Srônh",
    "Population": "4,459",
    "Density": 18.9
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Phi Liêng",
    "Population": "4,047",
    "Density": 36.34
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đam Rông",
    "Ward": "Rô Men",
    "Population": "4,138",
    "Density": 31.83
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "An Nhơn",
    "Population": "3,907",
    "Density": 56.76
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Đạ Kho",
    "Population": "4,484",
    "Density": 111.95
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Đạ Lây",
    "Population": "2,932",
    "Density": 102.7
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Đạ Pal",
    "Population": "1,492",
    "Density": 29.04
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Đạ Tẻh",
    "Population": "15,720",
    "Density": 623.14
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Hà Đông",
    "Population": "1,508",
    "Density": 353.95
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Hương Lâm",
    "Population": "1,867",
    "Density": 79.08
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Mỹ Đức",
    "Population": "3,698",
    "Density": 35.85
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Quảng Trị",
    "Population": "2,528",
    "Density": 39.68
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Quốc Oai",
    "Population": "3,391",
    "Density": 39.28
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đạ Tẻh",
    "Ward": "Triệu Hải",
    "Population": "2,283",
    "Density": 70.84
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Bảo Thuận",
    "Population": "5,897",
    "Density": 25.32
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Di Linh",
    "Population": "18,912",
    "Density": 1031.58
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Đinh Lạc",
    "Population": "10,528",
    "Density": 225.14
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Đinh Trang Hòa",
    "Population": "13,899",
    "Density": 256.36
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Đinh Trang Thượng",
    "Population": "2,863",
    "Density": 32.31
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Gia Bắc",
    "Population": "2,422",
    "Density": 16.61
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Gia Hiệp",
    "Population": "10,280",
    "Density": 316.23
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Gung Ré",
    "Population": "10,111",
    "Density": 82.79
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Hòa Bắc",
    "Population": "8,836",
    "Density": 76.69
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Hòa Nam",
    "Population": "9,125",
    "Density": 207.17
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Hòa Ninh",
    "Population": "9,501",
    "Density": 436.75
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Hòa Trung",
    "Population": "3,164",
    "Density": 164.32
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Liên Đầm",
    "Population": "10,029",
    "Density": 116.91
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Sơn Điền",
    "Population": "2,528",
    "Density": 21.72
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Tam Bố",
    "Population": "6,304",
    "Density": 22.68
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Tân Châu",
    "Population": "10,633",
    "Density": 245.38
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Tân Lâm",
    "Population": "7,062",
    "Density": 121.21
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Tân Nghĩa",
    "Population": "6,912",
    "Density": 193.35
  },
  {
    "Province": "Lâm Đồng",
    "District": "Di Linh",
    "Ward": "Tân Thượng",
    "Population": "5,616",
    "Density": 94.86
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Đạ Ròn",
    "Population": "7,668",
    "Density": 234.06
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "D'Ran",
    "Population": "13,682",
    "Density": 99.88
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Ka Đô",
    "Population": "11,353",
    "Density": 129.61
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Ka Đơn",
    "Population": "7,336",
    "Density": 199.97
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Lạc Lâm",
    "Population": "9,128",
    "Density": 433.78
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Lạc Xuân",
    "Population": "12,223",
    "Density": 118.02
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Pró",
    "Population": "5,337",
    "Density": 60.24
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Quảng Lập",
    "Population": "4,424",
    "Density": 461.44
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Thạnh Mỹ",
    "Population": "10,759",
    "Density": 515.4
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đơn Dương",
    "Ward": "Tu Tra",
    "Population": "11,792",
    "Density": 159.68
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Bình Thạnh",
    "Population": "7,408",
    "Density": 465.33
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Đà Loan",
    "Population": "9,880",
    "Density": 177.82
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Đa Quyn",
    "Population": "4,004",
    "Density": 23.93
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Hiệp An",
    "Population": "10,765",
    "Density": 171.29
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Hiệp Thạnh",
    "Population": "15,090",
    "Density": 499.19
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Liên Hiệp",
    "Population": "10,883",
    "Density": 295.55
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Liên Nghĩa",
    "Population": "42,898",
    "Density": 1169.04
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Ninh Gia",
    "Population": "12,686",
    "Density": 88.52
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Ninh Loan",
    "Population": "4,531",
    "Density": 134.33
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "N'Thol Hạ",
    "Population": "6,999",
    "Density": 206.05
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Phú Hội",
    "Population": "17,841",
    "Density": 162.84
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Tà Hine",
    "Population": "3,141",
    "Density": 73.15
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Tà Năng",
    "Population": "5,196",
    "Density": 57.17
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Tân Hội",
    "Population": "9,760",
    "Density": 405.55
  },
  {
    "Province": "Lâm Đồng",
    "District": "Đức Trọng",
    "Ward": "Tân Thành",
    "Population": "5,311",
    "Density": 240.36
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lạc Dương",
    "Ward": "Đạ Chais",
    "Population": "1,349",
    "Density": 3.93
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lạc Dương",
    "Ward": "Đạ Nhim",
    "Population": "3,440",
    "Density": 14.37
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lạc Dương",
    "Ward": "Đạ Sar",
    "Population": "3,932",
    "Density": 15.87
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lạc Dương",
    "Ward": "Đưng KNớ",
    "Population": "1,536",
    "Density": 7.98
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lạc Dương",
    "Ward": "Lạc Dương",
    "Population": "4,850",
    "Density": 133
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lạc Dương",
    "Ward": "Lát",
    "Population": "4,191",
    "Density": 20.38
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Đạ Đờn",
    "Population": "13,839",
    "Density": 191.35
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Đan Phượng",
    "Population": "5,585",
    "Density": 115.63
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Đinh Văn",
    "Population": "18,600",
    "Density": 536.91
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Đông Thanh",
    "Population": "4,656",
    "Density": 137.06
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Gia Lâm",
    "Population": "4,866",
    "Density": 243.43
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Hoài Đức",
    "Population": "8,295",
    "Density": 263.88
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Liên Hà",
    "Population": "9,477",
    "Density": 168.06
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Mê Linh",
    "Population": "6,705",
    "Density": 157.38
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Nam Ban",
    "Population": "9,620",
    "Density": 453.32
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Nam Hà",
    "Population": "4,203",
    "Density": 186.15
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Phi Tô",
    "Population": "4,400",
    "Density": 35.85
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Phúc Thọ",
    "Population": "7,220",
    "Density": 66.7
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Phú Sơn",
    "Population": "7,671",
    "Density": 43.96
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Tân Hà",
    "Population": "10,923",
    "Density": 371.2
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Tân Thanh",
    "Population": "10,922",
    "Density": 86.37
  },
  {
    "Province": "Lâm Đồng",
    "District": "Lâm Hà",
    "Ward": "Tân Văn",
    "Population": "10,708",
    "Density": 287.96
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Bắc Sơn",
    "Population": "4,266",
    "Density": 1308.19
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Bắc Sơn",
    "Population": "2,082",
    "Density": 116.59
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Chiến Thắng",
    "Population": "3,148",
    "Density": 90.21
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Chiêu Vũ",
    "Population": "2,182",
    "Density": 132.68
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Đồng Ý",
    "Population": "3,900",
    "Density": 141.24
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Hưng Vũ",
    "Population": "4,218",
    "Density": 94.1
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Hữu Vĩnh",
    "Population": "1,895",
    "Density": 160.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Long Đống",
    "Population": "3,908",
    "Density": 118.47
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Nhất Hòa",
    "Population": "3,929",
    "Density": 92.46
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Nhất Tiến",
    "Population": "3,611",
    "Density": 52.53
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Quỳnh Sơn",
    "Population": "1,810",
    "Density": 124.57
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Tân Hương",
    "Population": "2,203",
    "Density": 71.93
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Tân Lập",
    "Population": "2,331",
    "Density": 98
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Tân Thành",
    "Population": "1,953",
    "Density": 61.39
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Tân Tri",
    "Population": "4,264",
    "Density": 61.06
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Trấn Yên",
    "Population": "5,962",
    "Density": 66.97
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Vạn Thủy",
    "Population": "1,508",
    "Density": 37.33
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Vũ Lăng",
    "Population": "4,968",
    "Density": 120.08
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Vũ Lễ",
    "Population": "5,010",
    "Density": 127.16
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bắc Sơn",
    "Ward": "Vũ Sơn",
    "Population": "2,688",
    "Density": 148.89
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Bình Gia",
    "Population": "2,754",
    "Density": 872.37
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Bình La",
    "Population": "1,407",
    "Density": 41.87
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Hòa Bình",
    "Population": "1,407",
    "Density": 27.18
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Hoàng Văn Thụ",
    "Population": "2,942",
    "Density": 72.54
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Hoa Thám",
    "Population": "3,412",
    "Density": 30.17
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Hồng Phong",
    "Population": "3,449",
    "Density": 49.27
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Hồng Thái",
    "Population": "2,589",
    "Density": 67.76
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Hưng Đạo",
    "Population": "2,061",
    "Density": 53.47
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Minh Khai",
    "Population": "2,557",
    "Density": 40.74
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Mông Ân",
    "Population": "1,744",
    "Density": 50.65
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Quang Trung",
    "Population": "3,263",
    "Density": 60.69
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Quý Hòa",
    "Population": "1,840",
    "Density": 23
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Tân Hòa",
    "Population": "1,130",
    "Density": 18.66
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Tân Văn",
    "Population": "4,181",
    "Density": 106.18
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Thiện Hòa",
    "Population": "3,120",
    "Density": 36.73
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Thiện Long",
    "Population": "2,430",
    "Density": 44.15
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Thiện Thuật",
    "Population": "3,286",
    "Density": 40.55
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Tô Hiệu",
    "Population": "4,478",
    "Density": 169.22
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Vĩnh Yên",
    "Population": "1,026",
    "Density": 20.42
  },
  {
    "Province": "Lạng Sơn",
    "District": "Bình Gia",
    "Ward": "Yên Lỗ",
    "Population": "3,011",
    "Density": 40
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Bảo Lâm",
    "Population": "2,856",
    "Density": 68.36
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Bình Trung",
    "Population": "2,053",
    "Density": 134.64
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Cao Lâu",
    "Population": "3,227",
    "Density": 54.94
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Cao Lộc",
    "Population": "6,682",
    "Density": 2450.94
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Công Sơn",
    "Population": "1,214",
    "Density": 35.19
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Đồng Đăng",
    "Population": "7,312",
    "Density": 1394.44
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Gia Cát",
    "Population": "4,757",
    "Density": 142.99
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Hải Yến",
    "Population": "1,785",
    "Density": 60.66
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Hòa Cư",
    "Population": "2,707",
    "Density": 128.15
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Hồng Phong",
    "Population": "2,847",
    "Density": 267.65
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Hợp Thành",
    "Population": "2,627",
    "Density": 285.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Lộc Yên",
    "Population": "1,893",
    "Density": 61.37
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Mẫu Sơn",
    "Population": 426,
    "Density": 18.07
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Phú Xá",
    "Population": "2,493",
    "Density": 193.27
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Song Giáp",
    "Population": 987,
    "Density": 110.53
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Tân Liên",
    "Population": "3,744",
    "Density": 249.32
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Tân Thành",
    "Population": "3,552",
    "Density": 90.15
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Thạch Đạn",
    "Population": "2,834",
    "Density": 80.46
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Thanh Lòa",
    "Population": "1,565",
    "Density": 41.81
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Thụy Hùng",
    "Population": "4,524",
    "Density": 199.99
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Xuân Long",
    "Population": "2,401",
    "Density": 106.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Xuất Lễ",
    "Population": "5,517",
    "Density": 72.78
  },
  {
    "Province": "Lạng Sơn",
    "District": "Cao Lộc",
    "Ward": "Yên Trạch",
    "Population": "5,513",
    "Density": 148.17
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Bắc Thủy",
    "Population": "2,003",
    "Density": 60.7
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Bằng Hữu",
    "Population": "2,723",
    "Density": 85.6
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Bằng Mạc",
    "Population": "2,475",
    "Density": 111.96
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Chiến Thắng",
    "Population": "3,487",
    "Density": 86.05
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Chi Lăng",
    "Population": "5,603",
    "Density": 265.44
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Chi Lăng",
    "Population": "4,852",
    "Density": 198.07
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Đồng Mỏ",
    "Population": "6,322",
    "Density": 1312.27
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Gia Lộc",
    "Population": "3,687",
    "Density": 89.36
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Hòa Bình",
    "Population": "2,760",
    "Density": 123.86
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Hữu Kiên",
    "Population": "2,710",
    "Density": 32.67
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Lâm Sơn",
    "Population": "1,639",
    "Density": 42.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Liên Sơn",
    "Population": 846,
    "Density": 64.07
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Mai Sao",
    "Population": "3,415",
    "Density": 96.77
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Nhân Lý",
    "Population": "2,526",
    "Density": 126.71
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Quang Lang",
    "Population": "6,740",
    "Density": 220.42
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Quan Sơn",
    "Population": "3,692",
    "Density": 66.87
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Thượng Cường",
    "Population": "2,805",
    "Density": 126.39
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Vân An",
    "Population": "3,646",
    "Density": 114.22
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Vạn Linh",
    "Population": "6,065",
    "Density": 104.77
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Vân Thủy",
    "Population": "2,368",
    "Density": 83.45
  },
  {
    "Province": "Lạng Sơn",
    "District": "Chi Lăng",
    "Ward": "Y Tịch",
    "Population": "3,523",
    "Density": 75.72
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Bắc Lãng",
    "Population": "1,359",
    "Density": 23.75
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Bắc Xa",
    "Population": "1,279",
    "Density": 8.21
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Bính Xá",
    "Population": "3,357",
    "Density": 22.98
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Châu Sơn",
    "Population": "1,502",
    "Density": 15.38
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Cường Lợi",
    "Population": "1,349",
    "Density": 17.17
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Đình Lập",
    "Population": "3,863",
    "Density": 616.39
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Đình Lập",
    "Population": "3,715",
    "Density": 28.19
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Đồng Thắng",
    "Population": 456,
    "Density": 8.4
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Kiên Mộc",
    "Population": "2,351",
    "Density": 14.9
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Lâm Ca",
    "Population": "3,393",
    "Density": 24.44
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Nông trường Thái Bình (NT Thái Bình)",
    "Population": "1,676",
    "Density": 143.68
  },
  {
    "Province": "Lạng Sơn",
    "District": "Đình Lập",
    "Ward": "Thái Bình",
    "Population": "2,129",
    "Density": 13.65
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Cai Kinh",
    "Population": "4,516",
    "Density": 185.04
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Đô Lương",
    "Population": "4,235",
    "Density": 153.9
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Đồng Tân",
    "Population": "6,484",
    "Density": 246.16
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Đồng Tiến",
    "Population": "3,491",
    "Density": 165.01
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hòa Bình",
    "Population": "2,732",
    "Density": 72.74
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hòa Lạc",
    "Population": "4,402",
    "Density": 159.26
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hòa Sơn",
    "Population": "5,597",
    "Density": 110.2
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hòa Thắng",
    "Population": "7,008",
    "Density": 113.87
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hồ Sơn",
    "Population": "4,171",
    "Density": 268.47
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hữu Liên",
    "Population": "3,183",
    "Density": 47.46
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Hữu Lũng",
    "Population": "8,914",
    "Density": 1725.95
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Minh Hòa",
    "Population": "2,441",
    "Density": 164.91
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Minh Sơn",
    "Population": "7,801",
    "Density": 224.75
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Minh Tiến",
    "Population": "3,231",
    "Density": 133.33
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Nhật Tiến",
    "Population": "3,760",
    "Density": 187.25
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Quyết Thắng",
    "Population": "4,334",
    "Density": 151.61
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Sơn Hà",
    "Population": "3,767",
    "Density": 654.74
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Tân Lập",
    "Population": "2,228",
    "Density": 101.94
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Tân Thành",
    "Population": "6,695",
    "Density": 153.48
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Thanh Sơn",
    "Population": "2,976",
    "Density": 131.03
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Thiện Kỵ",
    "Population": "2,837",
    "Density": 103.78
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Vân Nham",
    "Population": "4,089",
    "Density": 444.73
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Yên Bình",
    "Population": "4,611",
    "Density": 85.66
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Yên Sơn",
    "Population": "2,373",
    "Density": 47.57
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Yên Thịnh",
    "Population": "3,956",
    "Density": 71.63
  },
  {
    "Province": "Lạng Sơn",
    "District": "Hữu Lũng",
    "Ward": "Yên Vượng",
    "Population": "2,619",
    "Density": 83.14
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Chi Lăng",
    "Population": "12,985",
    "Density": 3231.14
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Đông Kinh",
    "Population": "13,606",
    "Density": 6238.99
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Hoàng Đồng",
    "Population": "11,108",
    "Density": 449.99
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Hoàng Văn Thụ",
    "Population": "13,117",
    "Density": 9298.88
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Mai Pha",
    "Population": "6,171",
    "Density": 451.86
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Quảng Lạc",
    "Population": "4,245",
    "Density": 155.44
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Tam Thanh",
    "Population": "12,287",
    "Density": 5149.41
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lạng Sơn",
    "Ward": "Vĩnh Trại",
    "Population": "13,759",
    "Density": 7626.09
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Ái Quốc",
    "Population": "1,784",
    "Density": 18.18
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Bằng Khánh",
    "Population": "1,193",
    "Density": 94.4
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Đồng Bục",
    "Population": "3,304",
    "Density": 342.63
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Đông Quan",
    "Population": "4,627",
    "Density": 85.77
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Hiệp Hạ",
    "Population": "1,791",
    "Density": 106.84
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Hữu Khánh",
    "Population": "2,900",
    "Density": 135.29
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Hữu Lân",
    "Population": "2,269",
    "Density": 24.75
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Khuất Xá",
    "Population": "4,829",
    "Density": 175.64
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Lộc Bình",
    "Population": "7,824",
    "Density": 1946.37
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Lợi Bác",
    "Population": "2,785",
    "Density": 37.25
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Lục Thôn",
    "Population": "1,360",
    "Density": 116.55
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Mẫu Sơn",
    "Population": 927,
    "Density": 14.2
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Minh Phát",
    "Population": "1,868",
    "Density": 51.83
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Na Dương",
    "Population": "7,274",
    "Density": 652.85
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Nam Quan",
    "Population": "2,332",
    "Density": 37.6
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Như Khuê",
    "Population": "1,273",
    "Density": 123.39
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Nhượng Bạn",
    "Population": "1,521",
    "Density": 102.04
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Quan Bản",
    "Population": "1,924",
    "Density": 94.79
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Sàn Viên",
    "Population": "2,968",
    "Density": 46.3
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Tam Gia",
    "Population": "1,710",
    "Density": 34.96
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Tĩnh Bắc",
    "Population": "1,891",
    "Density": 38.54
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Tú Đoạn",
    "Population": "6,421",
    "Density": 258.83
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Tú Mịch",
    "Population": "3,432",
    "Density": 63.79
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Vân Mộng",
    "Population": "2,110",
    "Density": 132.02
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Xuân Dương",
    "Population": "1,561",
    "Density": 34.01
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Xuân Lễ",
    "Population": 820,
    "Density": 114.84
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Xuân Mãn",
    "Population": "1,140",
    "Density": 107.58
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Xuân Tình",
    "Population": "1,456",
    "Density": 189.33
  },
  {
    "Province": "Lạng Sơn",
    "District": "Lộc Bình",
    "Ward": "Yên Khoái",
    "Population": "3,030",
    "Density": 115.02
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Bắc Ái",
    "Population": 959,
    "Density": 42.56
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Cao Minh",
    "Population": 563,
    "Density": 18.41
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Chi Lăng",
    "Population": "3,416",
    "Density": 115.99
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Chí Minh",
    "Population": "1,612",
    "Density": 30.8
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Đại Đồng",
    "Population": "8,021",
    "Density": 287.7
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Đào Viên",
    "Population": "2,048",
    "Density": 28.81
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Đề Thám",
    "Population": "4,206",
    "Density": 105.85
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Đoàn Kết",
    "Population": "1,322",
    "Density": 26.11
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Đội Cấn",
    "Population": 712,
    "Density": 15.29
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Hùng Sơn",
    "Population": "3,665",
    "Density": 101.23
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Hùng Việt",
    "Population": "1,537",
    "Density": 48.64
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Kháng Chiến",
    "Population": "2,510",
    "Density": 78.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Khánh Long",
    "Population": 734,
    "Density": 16.16
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Kim Đồng",
    "Population": "1,939",
    "Density": 32.38
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Quốc Khánh",
    "Population": "5,838",
    "Density": 84.64
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Quốc Việt",
    "Population": "3,168",
    "Density": 65.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Tân Minh",
    "Population": "1,417",
    "Density": 24.2
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Tân Tiến",
    "Population": "2,658",
    "Density": 36.3
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Tân Yên",
    "Population": 974,
    "Density": 14.23
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Thất Khê",
    "Population": "4,265",
    "Density": 4837.69
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Tri Phương",
    "Population": "5,166",
    "Density": 111.68
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Trung Thành",
    "Population": "1,139",
    "Density": 21.54
  },
  {
    "Province": "Lạng Sơn",
    "District": "Tràng Định",
    "Ward": "Vĩnh Tiến",
    "Population": 572,
    "Density": 19.22
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "An Hùng",
    "Population": 905,
    "Density": 51.77
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Bắc La",
    "Population": "1,476",
    "Density": 35.56
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Gia Miễn",
    "Population": "2,253",
    "Density": 43.5
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Hoàng Văn Thụ",
    "Population": "2,855",
    "Density": 167.4
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Hoàng Việt",
    "Population": "4,927",
    "Density": 136.52
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Hội Hoan",
    "Population": "2,809",
    "Density": 65.28
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Hồng Thái",
    "Population": "1,929",
    "Density": 119.57
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Nam La",
    "Population": "1,674",
    "Density": 73.5
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Na Sầm",
    "Population": "3,668",
    "Density": 2500.34
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Nhạc Kỳ",
    "Population": "1,395",
    "Density": 92.48
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Tân Lang",
    "Population": "2,026",
    "Density": 109.96
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Tân Mỹ",
    "Population": "6,865",
    "Density": 168.74
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Tân Tác",
    "Population": "1,097",
    "Density": 40.99
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Tân Thanh",
    "Population": "4,817",
    "Density": 188.96
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Tân Việt",
    "Population": "1,379",
    "Density": 48.59
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Thành Hòa",
    "Population": "1,648",
    "Density": 62.43
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Thanh Long",
    "Population": "2,952",
    "Density": 76.03
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Thụy Hùng",
    "Population": "1,588",
    "Density": 52.79
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Trùng Khánh",
    "Population": "1,750",
    "Density": 43.18
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Lãng",
    "Ward": "Trùng Quán",
    "Population": "2,185",
    "Density": 71.9
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Bình Phúc",
    "Population": "2,495",
    "Density": 103.46
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Chu Túc",
    "Population": "2,290",
    "Density": 149.3
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Đại An",
    "Population": "2,276",
    "Density": 113.32
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Đồng Giáp",
    "Population": "2,286",
    "Density": 121.45
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Hòa Bình",
    "Population": "1,119",
    "Density": 48.6
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Hữu Lễ",
    "Population": "2,323",
    "Density": 50.71
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Khánh Khê",
    "Population": "1,664",
    "Density": 176.24
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Lương Năng",
    "Population": "2,458",
    "Density": 66.39
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Phú Mỹ",
    "Population": 852,
    "Density": 47.73
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Song Giang",
    "Population": "1,153",
    "Density": 96.7
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Tân Đoàn",
    "Population": "2,769",
    "Density": 135.17
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Tràng Các",
    "Population": "2,176",
    "Density": 120.04
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Tràng Phái",
    "Population": "2,943",
    "Density": 72.11
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Tràng Sơn",
    "Population": "1,721",
    "Density": 100.41
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Trấn Ninh",
    "Population": "2,399",
    "Density": 72.1
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Tri Lễ",
    "Population": "4,178",
    "Density": 85.67
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Tú Xuyên",
    "Population": "2,668",
    "Density": 55.01
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Văn An",
    "Population": "2,341",
    "Density": 213.93
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Vân Mộng",
    "Population": "1,238",
    "Density": 117.57
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Văn Quan",
    "Population": "4,305",
    "Density": 344.59
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Việt Yên",
    "Population": 954,
    "Density": 114.46
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Vĩnh Lại",
    "Population": "1,508",
    "Density": 107.81
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Xuân Mai",
    "Population": "1,500",
    "Density": 106.26
  },
  {
    "Province": "Lạng Sơn",
    "District": "Văn Quan",
    "Ward": "Yên Phúc",
    "Population": "4,452",
    "Density": 160.4
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Bắc Hà",
    "Population": "4,253",
    "Density": 2661.45
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Bản Cái",
    "Population": "1,228",
    "Density": 38.73
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Bản Già",
    "Population": "1,271",
    "Density": 82.37
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Bản Liền",
    "Population": "2,030",
    "Density": 35.3
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Bản Phố",
    "Population": "3,168",
    "Density": 189.32
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Bảo Nhai",
    "Population": "5,262",
    "Density": 84.94
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Cốc Lầu",
    "Population": "2,516",
    "Density": 68.73
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Cốc Ly",
    "Population": "5,091",
    "Density": 95.02
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Hoàng Thu Phố",
    "Population": "2,539",
    "Density": 73.17
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Lầu Thí Ngài",
    "Population": "1,566",
    "Density": 93.55
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Lùng Cải",
    "Population": "2,270",
    "Density": 77.89
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Lùng Phình",
    "Population": "1,315",
    "Density": 56.11
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Na Hối",
    "Population": "3,439",
    "Density": 147.89
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Nậm Đét",
    "Population": "2,450",
    "Density": 57.93
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Nậm Khánh",
    "Population": "1,053",
    "Density": 40.67
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Nậm Lúc",
    "Population": "2,802",
    "Density": 46.12
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Nậm Mòn",
    "Population": "2,464",
    "Density": 70.48
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Tà Chải",
    "Population": "2,299",
    "Density": 447.54
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Tả Củ Tỷ",
    "Population": "1,592",
    "Density": 60.59
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Tả Van Chư",
    "Population": "2,178",
    "Density": 88.99
  },
  {
    "Province": "Lào Cai",
    "District": "Bắc Hà",
    "Ward": "Thải Giàng Phố",
    "Population": "2,801",
    "Density": 42.55
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Bản Cầm",
    "Population": "3,581",
    "Density": 84.17
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Bản Phiệt",
    "Population": "3,905",
    "Density": 124.24
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Gia Phú",
    "Population": "14,095",
    "Density": 180.54
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Nông trường Phong Hải (NT Phong Hải)",
    "Population": "8,375",
    "Density": 91.22
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Phố Lu",
    "Population": "8,559",
    "Density": 591.54
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Phố Lu",
    "Population": "1,483",
    "Density": 182.06
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Phong Niên",
    "Population": "6,708",
    "Density": 156.78
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Phú Nhuận",
    "Population": "9,148",
    "Density": 108.23
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Sơn Hà",
    "Population": "4,449",
    "Density": 210.84
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Sơn Hải",
    "Population": "2,919",
    "Density": 173.27
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Tằng Loỏng",
    "Population": "4,824",
    "Density": 142.46
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Thái Niên",
    "Population": "8,340",
    "Density": 88.18
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Trì Quang",
    "Population": "3,779",
    "Density": 116.14
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Xuân Giao",
    "Population": "8,561",
    "Density": 295.29
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Thắng",
    "Ward": "Xuân Quang",
    "Population": "11,248",
    "Density": 188.62
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Bảo Hà",
    "Population": "8,631",
    "Density": 129.64
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Cam Cọn",
    "Population": "4,576",
    "Density": 97.77
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Điện Quan",
    "Population": "3,651",
    "Density": 82.92
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Kim Sơn",
    "Population": "6,734",
    "Density": 97.33
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Long Khánh",
    "Population": "2,870",
    "Density": 50.55
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Long Phúc",
    "Population": "1,709",
    "Density": 70.86
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Lương Sơn",
    "Population": "2,632",
    "Density": 69.44
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Minh Tân",
    "Population": "2,574",
    "Density": 76.31
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Nghĩa Đô",
    "Population": "4,883",
    "Density": 124.04
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Phố Ràng",
    "Population": "8,074",
    "Density": 597.37
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Tân Dương",
    "Population": "2,900",
    "Density": 91.34
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Tân Tiến",
    "Population": "2,042",
    "Density": 34.8
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Thượng Hà",
    "Population": "5,269",
    "Density": 80.74
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Việt Tiến",
    "Population": "2,373",
    "Density": 71.59
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Vĩnh Yên",
    "Population": "4,441",
    "Density": 70.25
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Xuân Hoà",
    "Population": "7,210",
    "Density": 94.5
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Xuân Thượng",
    "Population": "3,766",
    "Density": 88.81
  },
  {
    "Province": "Lào Cai",
    "District": "Bảo Yên",
    "Ward": "Yên Sơn",
    "Population": "2,080",
    "Density": 78.33
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "A Lù",
    "Population": "2,065",
    "Density": 77.4
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "A Mú Sung",
    "Population": "2,244",
    "Density": 40.22
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Bản Qua",
    "Population": "5,311",
    "Density": 98.64
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Bản Vược",
    "Population": "3,563",
    "Density": 100.65
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Bản Xèo",
    "Population": "1,878",
    "Density": 70.13
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Bát Xát",
    "Population": "3,583",
    "Density": 1101.04
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Cốc Mỳ",
    "Population": "4,196",
    "Density": 52.09
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Cốc San",
    "Population": "3,971",
    "Density": 211.72
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Dền Sáng",
    "Population": "1,958",
    "Density": 47.95
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Dền Thàng",
    "Population": "3,365",
    "Density": 168.94
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Mường Hum",
    "Population": "1,906",
    "Density": 70.97
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Mường Vi",
    "Population": "2,166",
    "Density": 77.02
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Nậm Chạc",
    "Population": "2,289",
    "Density": 45.8
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Nậm Pung",
    "Population": "1,675",
    "Density": 42.58
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Ngải Thầu",
    "Population": "1,779",
    "Density": 111.34
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Pa Cheo",
    "Population": "2,966",
    "Density": 105.53
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Phìn Ngan",
    "Population": "2,727",
    "Density": 42.76
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Quang Kim",
    "Population": "5,059",
    "Density": 156.83
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Sàng Ma Sáo",
    "Population": "4,014",
    "Density": 55.4
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Tòng Sành",
    "Population": "1,492",
    "Density": 58.32
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Trịnh Tường",
    "Population": "5,467",
    "Density": 69.58
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Trung Lèng Hồ",
    "Population": "1,997",
    "Density": 13.53
  },
  {
    "Province": "Lào Cai",
    "District": "Bát Xát",
    "Ward": "Y Tý",
    "Population": "4,344",
    "Density": 51.01
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Bắc Cường",
    "Population": "6,544",
    "Density": 508.51
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Bắc Lệnh",
    "Population": "3,305",
    "Density": 972.57
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Bình Minh",
    "Population": "5,992",
    "Density": 632.2
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Cam Đường",
    "Population": "4,837",
    "Density": 309.43
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Cốc Lếu",
    "Population": "9,703",
    "Density": 8263.5
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Đồng Tuyển",
    "Population": "3,311",
    "Density": 220.47
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Duyên Hải",
    "Population": "9,940",
    "Density": 2553.56
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Hợp Thành",
    "Population": "4,307",
    "Density": 161.58
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Kim Tân",
    "Population": "15,698",
    "Density": 6205.72
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Lào Cai",
    "Population": "1,829",
    "Density": 539.89
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Nam Cường",
    "Population": "3,285",
    "Density": 296.19
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Phố Mới",
    "Population": "10,174",
    "Density": 2103.67
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Pom Hán",
    "Population": "7,932",
    "Density": 4427.08
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Tả Phời",
    "Population": "6,035",
    "Density": 68.18
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Thống Nhất",
    "Population": "1,355",
    "Density": 615.69
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Vạn Hoà",
    "Population": "3,037",
    "Density": 151.04
  },
  {
    "Province": "Lào Cai",
    "District": "Lào Cai",
    "Ward": "Xuân Tăng",
    "Population": "1,079",
    "Density": 311.68
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Bản Lầu",
    "Population": "5,479",
    "Density": 95.49
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Bản Sen",
    "Population": "3,438",
    "Density": 159.09
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Cao Sơn",
    "Population": "2,757",
    "Density": 82.12
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Dìn Chin",
    "Population": "3,340",
    "Density": 111.17
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "La Pan Tẩn",
    "Population": "2,600",
    "Density": 56.81
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Lùng Khấu Nhin",
    "Population": "2,749",
    "Density": 92.01
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Lùng Vai",
    "Population": "4,353",
    "Density": 73.53
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Mường Khương",
    "Population": "4,546",
    "Density": 161.64
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Nậm Chảy",
    "Population": "2,386",
    "Density": 47.08
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Nấm Lư",
    "Population": "2,913",
    "Density": 134.02
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Pha Long",
    "Population": "3,202",
    "Density": 117.79
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Tả Gia Khâu",
    "Population": "2,170",
    "Density": 78.51
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Tả Ngải Chồ",
    "Population": "2,474",
    "Density": 112.86
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Tả Thàng",
    "Population": "2,290",
    "Density": 75.2
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Thanh Bình",
    "Population": "2,937",
    "Density": 74.99
  },
  {
    "Province": "Lào Cai",
    "District": "Mường Khương",
    "Ward": "Tung Chung Phố",
    "Population": "4,515",
    "Density": 131.94
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Bản Hồ",
    "Population": "2,646",
    "Density": 131.28
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Bản Khoang",
    "Population": "2,566",
    "Density": 45.67
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Bản Phùng",
    "Population": "1,789",
    "Density": 58.02
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Hầu Thào",
    "Population": "2,508",
    "Density": 284.72
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Lao Chải",
    "Population": "3,272",
    "Density": 112.44
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Nậm Cang",
    "Population": "1,478",
    "Density": 20.58
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Nậm Sài",
    "Population": "1,670",
    "Density": 65.63
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "San Sả Hồ",
    "Population": "3,664",
    "Density": 66.08
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Sa Pa",
    "Population": "8,975",
    "Density": 361.79
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Sa Pả",
    "Population": "4,424",
    "Density": 176.47
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Suối Thầu",
    "Population": "1,912",
    "Density": 64.38
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Sử Pán",
    "Population": "2,152",
    "Density": 237.87
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Tả Giàng Phình",
    "Population": "2,979",
    "Density": 123.92
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Tả Phìn",
    "Population": "2,772",
    "Density": 100.37
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Tả Van",
    "Population": "3,422",
    "Density": 50.54
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Thanh Kim",
    "Population": "1,736",
    "Density": 82.05
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Thanh Phú",
    "Population": "2,062",
    "Density": 17.79
  },
  {
    "Province": "Lào Cai",
    "District": "Sa Pa",
    "Ward": "Trung Chải",
    "Population": "3,522",
    "Density": 90.01
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Bản Mế",
    "Population": "2,258",
    "Density": 115.75
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Cán Cấu",
    "Population": "2,295",
    "Density": 140.41
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Cán Hồ",
    "Population": "1,189",
    "Density": 207.25
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Lùng Sui",
    "Population": "2,134",
    "Density": 105.49
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Lử Thẩn",
    "Population": "1,620",
    "Density": 105.39
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Mản Thẩn",
    "Population": "1,810",
    "Density": 139.94
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Nàn Sán",
    "Population": "3,203",
    "Density": 143.88
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Nàn Xín",
    "Population": "1,829",
    "Density": 78.77
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Quan Thần Sán",
    "Population": "1,618",
    "Density": 165.09
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Sán Chải",
    "Population": "2,988",
    "Density": 117.5
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Si Ma Cai",
    "Population": "4,253",
    "Density": 289.04
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Sín Chéng",
    "Population": "3,841",
    "Density": 181.99
  },
  {
    "Province": "Lào Cai",
    "District": "Si Ma Cai",
    "Ward": "Thào Chư Phìn",
    "Population": "2,285",
    "Density": 84.72
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Chiềng Ken",
    "Population": "4,800",
    "Density": 88.43
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Dần Thàng",
    "Population": "1,603",
    "Density": 32.82
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Dương Quỳ",
    "Population": "5,340",
    "Density": 50.86
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Hoà Mạc",
    "Population": "3,127",
    "Density": 121.76
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Khánh Yên",
    "Population": "5,644",
    "Density": 850.31
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Khánh Yên Hạ",
    "Population": "4,866",
    "Density": 74.04
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Khánh Yên Thượng",
    "Population": "3,606",
    "Density": 128.59
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Khánh Yên Trung",
    "Population": "3,593",
    "Density": 75.49
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Làng Giàng",
    "Population": "3,731",
    "Density": 129.19
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Liêm Phú",
    "Population": "3,745",
    "Density": 61.11
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Minh Lương",
    "Population": "4,642",
    "Density": 132.11
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Nậm Chầy",
    "Population": "2,533",
    "Density": 29.88
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Nậm Mả",
    "Population": "1,139",
    "Density": 16.55
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Nậm Rạng",
    "Population": "1,515",
    "Density": 40
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Nậm Tha",
    "Population": "2,673",
    "Density": 19.61
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Nậm Xây",
    "Population": "2,455",
    "Density": 14.31
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Nậm Xé",
    "Population": "1,142",
    "Density": 6.67
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Sơn Thuỷ",
    "Population": "3,049",
    "Density": 53.81
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Tân An",
    "Population": "3,237",
    "Density": 102.88
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Tân Thượng",
    "Population": "3,418",
    "Density": 92.41
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Thẩm Dương",
    "Population": "2,004",
    "Density": 33.38
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Văn Sơn",
    "Population": "2,110",
    "Density": 212.56
  },
  {
    "Province": "Lào Cai",
    "District": "Văn Bàn",
    "Ward": "Võ Lao",
    "Population": "9,248",
    "Density": 189.41
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "An Thạnh",
    "Population": "12,022",
    "Density": 475.95
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Bến Lức",
    "Population": "22,474",
    "Density": 2566.96
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Bình Đức",
    "Population": "5,399",
    "Density": 235.68
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Long Hiệp",
    "Population": "14,128",
    "Density": 1161.27
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Lương Bình",
    "Population": "6,788",
    "Density": 393.23
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Lương Hòa",
    "Population": "10,832",
    "Density": 336.95
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Mỹ Yên",
    "Population": "10,786",
    "Density": 1144.34
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Nhựt Chánh",
    "Population": "11,974",
    "Density": 817.11
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Phước Lợi",
    "Population": "11,270",
    "Density": 1497.1
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Tân Bửu",
    "Population": "8,957",
    "Density": 496.1
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Tân Hòa",
    "Population": "1,371",
    "Density": 91.89
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Thạnh Đức",
    "Population": "11,870",
    "Density": 867.12
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Thạnh Hòa",
    "Population": "5,041",
    "Density": 167.93
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Thạnh Lợi",
    "Population": "6,833",
    "Density": 134.93
  },
  {
    "Province": "Long An",
    "District": "Bến Lức",
    "Ward": "Thanh Phú",
    "Population": "8,876",
    "Density": 753.48
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Cần Đước",
    "Population": "12,363",
    "Density": 2128.91
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Cang",
    "Population": "5,987",
    "Density": 646.18
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Định",
    "Population": "9,559",
    "Density": 881.83
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Hòa",
    "Population": "7,877",
    "Density": 1030.09
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Hựu Đông",
    "Population": "13,661",
    "Density": 629.42
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Hựu Tây",
    "Population": "9,282",
    "Density": 582.56
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Khê",
    "Population": "7,556",
    "Density": 983.87
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Sơn",
    "Population": "7,729",
    "Density": 573.84
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Long Trạch",
    "Population": "11,789",
    "Density": 1272.52
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Mỹ Lệ",
    "Population": "10,834",
    "Density": 879.38
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Phước Đông",
    "Population": "14,128",
    "Density": 662.85
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Phước Tuy",
    "Population": "7,656",
    "Density": 480.63
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Phước Vân",
    "Population": "9,751",
    "Density": 850.58
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Tân Ân",
    "Population": "7,449",
    "Density": 765.15
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Tân Chánh",
    "Population": "12,136",
    "Density": 708.51
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Tân Lân",
    "Population": "11,131",
    "Density": 630.69
  },
  {
    "Province": "Long An",
    "District": "Cần Đước",
    "Ward": "Tân Trạch",
    "Population": "9,842",
    "Density": 703.3
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Cần Giuộc",
    "Population": "10,940",
    "Density": 7742.94
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Đông Thạnh",
    "Population": "11,245",
    "Density": 818.95
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Long An",
    "Population": "7,071",
    "Density": 687.71
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Long Hậu",
    "Population": "8,904",
    "Density": 438.69
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Long Phụng",
    "Population": "5,251",
    "Density": 643.42
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Long Thượng",
    "Population": "9,575",
    "Density": 1225.91
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Mỹ Lộc",
    "Population": "12,264",
    "Density": 1037.04
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Phước Hậu",
    "Population": "10,475",
    "Density": 1132.91
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Phước Lại",
    "Population": "11,922",
    "Density": 632.57
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Phước Lâm",
    "Population": "8,612",
    "Density": 868.48
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Phước Lý",
    "Population": "11,388",
    "Density": 1133.25
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Phước Vĩnh Đông",
    "Population": "7,344",
    "Density": 413.65
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Phước Vĩnh Tây",
    "Population": "8,441",
    "Density": 523.08
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Tân Kim",
    "Population": "12,615",
    "Density": 1299.86
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Tân Tập",
    "Population": "14,225",
    "Density": 482.02
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Thuận Thành",
    "Population": "7,967",
    "Density": 829.35
  },
  {
    "Province": "Long An",
    "District": "Cần Giuộc",
    "Ward": "Trường Bình",
    "Population": "10,799",
    "Density": 996.13
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "An Lục Long",
    "Population": "11,225",
    "Density": 646.38
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Bình Quới",
    "Population": "6,167",
    "Density": 872.23
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Dương Xuân Hội",
    "Population": "4,465",
    "Density": 644.91
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Hiệp Thạnh",
    "Population": "7,597",
    "Density": 581.08
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Hòa Phú",
    "Population": "6,007",
    "Density": 649.1
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Long Trì",
    "Population": "6,891",
    "Density": 716.45
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Phú Ngãi Trị",
    "Population": "6,978",
    "Density": 522.46
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Phước Tân Hưng",
    "Population": "7,076",
    "Density": 509.61
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Tầm Vu",
    "Population": "5,889",
    "Density": 1723.95
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Thanh Phú Long",
    "Population": "11,707",
    "Density": 592.1
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Thanh Vĩnh Đông",
    "Population": "6,046",
    "Density": 535.76
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Thuận Mỹ",
    "Population": "11,083",
    "Density": 503.16
  },
  {
    "Province": "Long An",
    "District": "Châu Thành",
    "Ward": "Vĩnh Công",
    "Population": "6,288",
    "Density": 768
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "An Ninh Đông",
    "Population": "7,590",
    "Density": 417.81
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "An Ninh Tây",
    "Population": "9,409",
    "Density": 439.1
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Đức Hòa",
    "Population": "12,358",
    "Density": 1681.09
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Đức Hòa Đông",
    "Population": "13,901",
    "Density": 547.74
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Đức Hòa Hạ",
    "Population": "12,598",
    "Density": 550.64
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Đức Hòa Thượng",
    "Population": "15,675",
    "Density": 708.99
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Đức Lập Hạ",
    "Population": "11,147",
    "Density": 427.79
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Đức Lập Thượng",
    "Population": "9,503",
    "Density": 502.72
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hậu Nghĩa",
    "Population": "14,781",
    "Density": 1312.7
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hiệp Hòa",
    "Population": "7,154",
    "Density": 724.35
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hiệp Hòa",
    "Population": "9,454",
    "Density": 535.03
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hòa Khánh Đông",
    "Population": "9,775",
    "Density": 630.16
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hòa Khánh Nam",
    "Population": "7,679",
    "Density": 480.39
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hòa Khánh Tây",
    "Population": "9,096",
    "Density": 317.45
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Hựu Thạnh",
    "Population": "10,111",
    "Density": 307.61
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Lộc Giang",
    "Population": "11,987",
    "Density": 595.24
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Mỹ Hạnh Bắc",
    "Population": "10,537",
    "Density": 332.89
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Mỹ Hạnh Nam",
    "Population": "12,169",
    "Density": 698.65
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Tân Mỹ",
    "Population": "11,851",
    "Density": 325.64
  },
  {
    "Province": "Long An",
    "District": "Đức Hòa",
    "Ward": "Tân Phú",
    "Population": "8,941",
    "Density": 327.57
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Bình Hòa Bắc",
    "Population": "7,415",
    "Density": 205.46
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Bình Hòa Hưng",
    "Population": "1,847",
    "Density": 64.65
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Bình Hòa Nam",
    "Population": "6,275",
    "Density": 89.05
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Bình Thành",
    "Population": "2,662",
    "Density": 99.38
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Đông Thành",
    "Population": "5,156",
    "Density": 634.21
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Mỹ Bình",
    "Population": "1,698",
    "Density": 38.8
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Mỹ Quý Đông",
    "Population": "5,293",
    "Density": 120.67
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Mỹ Quý Tây",
    "Population": "9,633",
    "Density": 182.52
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Mỹ Thạnh Bắc",
    "Population": "6,598",
    "Density": 160.37
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Mỹ Thạnh Đông",
    "Population": "6,795",
    "Density": 207.44
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Mỹ Thạnh Tây",
    "Population": "5,662",
    "Density": 117.37
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Kiến Tường",
    "Population": "41,056",
    "Density": 200.71
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Bình Hiệp",
    "Population": "6,712",
    "Density": 207.39
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Bình Tân",
    "Population": "2,377",
    "Density": 188.01
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Phường 1 (Mộc Hóa)",
    "Population": "15,744",
    "Density": 854.35
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Thạnh Hưng",
    "Population": "4,629",
    "Density": 67.3
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Thạnh Trị",
    "Population": "2,643",
    "Density": 79.35
  },
  {
    "Province": "Long An",
    "District": "Đức Huệ",
    "Ward": "Tuyên Thạnh",
    "Population": "8,951",
    "Density": 229.34
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Bình Hòa Đông",
    "Population": "3,929",
    "Density": 120.4
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Bình Hòa Tây",
    "Population": "4,691",
    "Density": 106.55
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Bình Hòa Trung",
    "Population": "4,191",
    "Density": 114.54
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Bình Phong Thạnh",
    "Population": "4,109",
    "Density": 89.11
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Bình Thạnh",
    "Population": "2,583",
    "Density": 54.02
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Tân Lập",
    "Population": "5,100",
    "Density": 94.74
  },
  {
    "Province": "Long An",
    "District": "Mộc Hóa",
    "Ward": "Tân Thành",
    "Population": "3,505",
    "Density": 99.51
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "An Vĩnh Ngãi",
    "Population": "5,085",
    "Density": 760.01
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Bình Tâm",
    "Population": "5,427",
    "Density": 916.99
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Hướng Thọ Phú",
    "Population": "6,525",
    "Density": 747.45
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Khánh Hậu",
    "Population": "7,785",
    "Density": 1824.81
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Lợi Bình Nhơn",
    "Population": "10,350",
    "Density": 861.78
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Nhơn Thạnh Trung",
    "Population": "7,026",
    "Density": 809.43
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 1",
    "Population": "9,299",
    "Density": 13593.04
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 2",
    "Population": "16,464",
    "Density": 11620.55
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 3",
    "Population": "16,356",
    "Density": 5270.69
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 4",
    "Population": "14,587",
    "Density": 2634.17
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 5",
    "Population": "10,819",
    "Density": 1708.14
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 6",
    "Population": "11,679",
    "Density": 1576.3
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Phường 7",
    "Population": "5,013",
    "Density": 1198.34
  },
  {
    "Province": "Long An",
    "District": "Tân An",
    "Ward": "Tân Khánh",
    "Population": "6,155",
    "Density": 943.27
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Hưng Điền",
    "Population": "4,765",
    "Density": 116.32
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Hưng Điền B",
    "Population": "7,251",
    "Density": 165.06
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Hưng Hà",
    "Population": "2,768",
    "Density": 55.95
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Hưng Thạnh",
    "Population": "3,060",
    "Density": 86.24
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Tân Hưng",
    "Population": "4,995",
    "Density": 908.02
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Thạnh Hưng",
    "Population": "2,713",
    "Density": 49.63
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Vĩnh Bửu",
    "Population": "3,563",
    "Density": 89.22
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Vĩnh Châu A",
    "Population": "3,137",
    "Density": 49.78
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Vĩnh Châu B",
    "Population": "3,234",
    "Density": 103.84
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Vĩnh Đại",
    "Population": "3,638",
    "Density": 106.65
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Vĩnh Lợi",
    "Population": "4,134",
    "Density": 77.47
  },
  {
    "Province": "Long An",
    "District": "Tân Hưng",
    "Ward": "Vĩnh Thạnh",
    "Population": "4,484",
    "Density": 91.67
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Bắc Hòa",
    "Population": "3,908",
    "Density": 129.31
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Hậu Thạnh Đông",
    "Population": "6,948",
    "Density": 267.94
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Hậu Thạnh Tây",
    "Population": "6,187",
    "Density": 143.22
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Kiến Bình",
    "Population": "4,052",
    "Density": 119.51
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Nhơn Hoà",
    "Population": "2,389",
    "Density": 81.76
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Nhơn Hòa Lập",
    "Population": "6,266",
    "Density": 171.24
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Nhơn Ninh",
    "Population": "9,417",
    "Density": 251.95
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Tân Bình",
    "Population": "2,943",
    "Density": 102.83
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Tân Hòa",
    "Population": "7,659",
    "Density": 160.22
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Tân Lập",
    "Population": "6,640",
    "Density": 151.12
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Tân Ninh",
    "Population": "7,234",
    "Density": 257.39
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Tân Thạnh",
    "Population": "5,414",
    "Density": 697.42
  },
  {
    "Province": "Long An",
    "District": "Tân Thạnh",
    "Ward": "Tân Thành",
    "Population": "6,494",
    "Density": 233.7
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "An Nhựt Tân",
    "Population": "5,709",
    "Density": 557.52
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Bình Lãng",
    "Population": "5,936",
    "Density": 720.51
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Bình Tịnh",
    "Population": "4,188",
    "Density": 568.93
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Bình Trinh Đông",
    "Population": "4,963",
    "Density": 510.32
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Đức Tân",
    "Population": "6,321",
    "Density": 477.16
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Lạc Tấn",
    "Population": "5,740",
    "Density": 630.91
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Mỹ Bình",
    "Population": "3,677",
    "Density": 559.72
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Nhựt Ninh",
    "Population": "6,792",
    "Density": 468.03
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Quê Mỹ Thạnh",
    "Population": "5,528",
    "Density": 624.2
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Tân Phước Tây",
    "Population": "5,726",
    "Density": 444.63
  },
  {
    "Province": "Long An",
    "District": "Tân Trụ",
    "Ward": "Tân Trụ",
    "Population": "5,698",
    "Density": 1015.43
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Tân Đông",
    "Population": "5,881",
    "Density": 184.42
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Tân Hiệp",
    "Population": "3,548",
    "Density": 79.35
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Tân Tây",
    "Population": "4,095",
    "Density": 109.97
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thạnh An",
    "Population": "2,491",
    "Density": 41.17
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thạnh Hóa",
    "Population": "5,160",
    "Density": 424.2
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thạnh Phú",
    "Population": "4,338",
    "Density": 143.22
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thạnh Phước",
    "Population": "7,250",
    "Density": 92.23
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thuận Bình",
    "Population": "2,475",
    "Density": 43.02
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thuận Nghĩa Hòa",
    "Population": "6,415",
    "Density": 173.71
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thủy Đông",
    "Population": "5,331",
    "Density": 120.16
  },
  {
    "Province": "Long An",
    "District": "Thạnh Hóa",
    "Ward": "Thủy Tây",
    "Population": "6,613",
    "Density": 183.87
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Bình An",
    "Population": "7,077",
    "Density": 674.9
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Bình Thạnh",
    "Population": "9,497",
    "Density": 841.71
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Long Thạnh",
    "Population": "4,584",
    "Density": 125.85
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Long Thành",
    "Population": 776,
    "Density": 19.55
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Long Thuận",
    "Population": "4,692",
    "Density": 135
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Mỹ An",
    "Population": "8,501",
    "Density": 426.09
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Mỹ Lạc",
    "Population": "6,221",
    "Density": 358.02
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Mỹ Phú",
    "Population": "8,083",
    "Density": 644.78
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Mỹ Thạnh",
    "Population": "6,364",
    "Density": 369.57
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Nhị Thành",
    "Population": "13,002",
    "Density": 1030.68
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Tân Lập",
    "Population": 746,
    "Density": 20
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Tân Thành",
    "Population": "5,352",
    "Density": 134.57
  },
  {
    "Province": "Long An",
    "District": "Thủ Thừa",
    "Ward": "Thủ Thừa",
    "Population": "14,340",
    "Density": 1634.17
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Hưng Điền A",
    "Population": "4,792",
    "Density": 116.65
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Khánh Hưng",
    "Population": "5,667",
    "Density": 99.76
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Thái Bình Trung",
    "Population": "4,677",
    "Density": 131.71
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Thái Trị",
    "Population": "3,537",
    "Density": 92.15
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Tuyên Bình",
    "Population": "4,180",
    "Density": 85.67
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Tuyên Bình Tây",
    "Population": "3,826",
    "Density": 89.15
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Vĩnh Bình",
    "Population": "3,036",
    "Density": 126.06
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Vĩnh Hưng",
    "Population": "9,407",
    "Density": 1827.49
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Vĩnh Thuận",
    "Population": "4,171",
    "Density": 119.88
  },
  {
    "Province": "Long An",
    "District": "Vĩnh Hưng",
    "Ward": "Vĩnh Trị",
    "Population": "6,078",
    "Density": 104.85
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Bạch Long",
    "Population": "7,786",
    "Density": 756.8
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Bình Hòa",
    "Population": "7,690",
    "Density": 1226.34
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao An",
    "Population": "8,766",
    "Density": 725.3
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Châu",
    "Population": "7,768",
    "Density": 1002.78
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Hà",
    "Population": "9,157",
    "Density": 1452.66
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Hải",
    "Population": "6,036",
    "Density": 1107.46
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Hương",
    "Population": "7,345",
    "Density": 764.95
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Lạc",
    "Population": "9,412",
    "Density": 937.64
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Long",
    "Population": "7,388",
    "Density": 964.23
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Nhân",
    "Population": "7,357",
    "Density": 1139.97
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Phong",
    "Population": "6,983",
    "Density": 943.52
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Tân",
    "Population": "7,081",
    "Density": 1390.72
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Thanh",
    "Population": "6,358",
    "Density": 1037.96
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Thiện",
    "Population": "9,664",
    "Density": 297.72
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Thịnh",
    "Population": "10,371",
    "Density": 1004.16
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Tiến",
    "Population": "15,823",
    "Density": 1794.24
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Xuân",
    "Population": "9,157",
    "Density": 866.65
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Giao Yến",
    "Population": "7,845",
    "Density": 1216.58
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Hoành Sơn",
    "Population": "8,042",
    "Density": 1380.48
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Hồng Thuận",
    "Population": "14,296",
    "Density": 982.95
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Ngô Đồng",
    "Population": "5,537",
    "Density": 1951.85
  },
  {
    "Province": "Nam Định",
    "District": "Giao Thủy",
    "Ward": "Quất Lâm",
    "Population": "9,013",
    "Density": 1100.47
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Cồn",
    "Population": "6,044",
    "Density": 2653.9
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải An",
    "Population": "5,283",
    "Density": 877.66
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Anh",
    "Population": "12,150",
    "Density": 1770.57
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Bắc",
    "Population": "5,734",
    "Density": 1459.85
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Châu",
    "Population": "6,112",
    "Density": 717.93
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Chính",
    "Population": "4,457",
    "Density": 1070.93
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Cường",
    "Population": "5,960",
    "Density": 882.04
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Đông",
    "Population": "6,913",
    "Density": 723.35
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Đường",
    "Population": "11,395",
    "Density": 1069.95
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Giang",
    "Population": "5,017",
    "Density": 795.52
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Hà",
    "Population": "5,578",
    "Density": 1365.02
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Hòa",
    "Population": "7,609",
    "Density": 849.6
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Hưng",
    "Population": "10,098",
    "Density": 1678.8
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Lộc",
    "Population": "7,485",
    "Density": 1046.68
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Long",
    "Population": "6,663",
    "Density": 1156.93
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Lý",
    "Population": "9,424",
    "Density": 1350.92
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Minh",
    "Population": "15,060",
    "Density": 1714.79
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Nam",
    "Population": "7,530",
    "Density": 952.02
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Ninh",
    "Population": "5,724",
    "Density": 650.94
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Phong",
    "Population": "6,467",
    "Density": 828.23
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Phú",
    "Population": "8,360",
    "Density": 1119.29
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Phúc",
    "Population": "5,643",
    "Density": 838.17
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Phương",
    "Population": "6,376",
    "Density": 1168.64
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Quang",
    "Population": "6,432",
    "Density": 687.22
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Sơn",
    "Population": "8,089",
    "Density": 1090.72
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Tân",
    "Population": "6,035",
    "Density": 1143.19
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Tây",
    "Population": "5,919",
    "Density": 939.45
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Thanh",
    "Population": "5,985",
    "Density": 1207.09
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Toàn",
    "Population": "3,653",
    "Density": 712.27
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Triều",
    "Population": "4,632",
    "Density": 1373.95
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Trung",
    "Population": "10,916",
    "Density": 1503.87
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Vân",
    "Population": "8,519",
    "Density": 2569.21
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Hải Xuân",
    "Population": "7,489",
    "Density": 1442.74
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Thịnh Long",
    "Population": "13,399",
    "Density": 858.8
  },
  {
    "Province": "Nam Định",
    "District": "Hải Hậu",
    "Ward": "Yên Định",
    "Population": "4,714",
    "Density": 3028.01
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Hà",
    "Population": "7,590",
    "Density": 928.74
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Hưng",
    "Population": "6,291",
    "Density": 1223.57
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Lộc",
    "Population": "4,686",
    "Density": 927.48
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Phúc",
    "Population": "7,677",
    "Density": 1244
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Tân",
    "Population": "10,447",
    "Density": 1004.62
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Thắng",
    "Population": "7,465",
    "Density": 992.13
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Thành",
    "Population": "4,462",
    "Density": 777.34
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Thịnh",
    "Population": "4,153",
    "Density": 815.13
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Thuận",
    "Population": "6,351",
    "Density": 737.85
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Tiến",
    "Population": "5,061",
    "Density": 891.46
  },
  {
    "Province": "Nam Định",
    "District": "Mỹ Lộc",
    "Ward": "Mỹ Trung",
    "Population": "4,960",
    "Density": 744.44
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Bà Triệu",
    "Population": "6,444",
    "Density": 22973.26
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Cửa Bắc",
    "Population": "13,695",
    "Density": 23031.9
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Cửa Nam",
    "Population": "5,964",
    "Density": 4030.27
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Hạ Long",
    "Population": "14,622",
    "Density": 26782.18
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Lộc An",
    "Population": "6,739",
    "Density": 2075.33
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Lộc Hạ",
    "Population": "13,840",
    "Density": 4794.24
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Lộc Hòa",
    "Population": "9,289",
    "Density": 1447.16
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Lộc Vượng",
    "Population": "15,050",
    "Density": 2930.92
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Mỹ Xá",
    "Population": "18,561",
    "Density": 2921.06
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Nam Phong",
    "Population": "8,279",
    "Density": 1259.16
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Nam Vân",
    "Population": "6,550",
    "Density": 1175.44
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Năng Tĩnh",
    "Population": "11,510",
    "Density": 14551.75
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Ngô Quyền",
    "Population": "4,950",
    "Density": 14103.77
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Nguyễn Du",
    "Population": "6,271",
    "Density": 28247.75
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Phan Đình Phùng",
    "Population": "7,473",
    "Density": 20823.7
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Quang Trung",
    "Population": "10,047",
    "Density": 34190.91
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Thống Nhất",
    "Population": "7,602",
    "Density": 11230.61
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Trần Đăng Ninh",
    "Population": "8,912",
    "Density": 18919.03
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Trần Hưng Đạo",
    "Population": "5,534",
    "Density": 14267.67
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Trần Quang Khải",
    "Population": "8,150",
    "Density": 8938.66
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Trần Tế Xương",
    "Population": "12,887",
    "Density": 18545.65
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Trường Thi",
    "Population": "12,880",
    "Density": 17127.66
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Văn Miếu",
    "Population": "10,889",
    "Density": 24628.5
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Vị Hoàng",
    "Population": "7,080",
    "Density": 10967.56
  },
  {
    "Province": "Nam Định",
    "District": "Nam Định",
    "Ward": "Vị Xuyên",
    "Population": "9,968",
    "Density": 19384.32
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Bình Minh",
    "Population": "10,474",
    "Density": 1168.03
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Điền Xá",
    "Population": "11,949",
    "Density": 1130.57
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Đồng Sơn",
    "Population": "13,974",
    "Density": 938.48
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Hồng Quang",
    "Population": "13,467",
    "Density": 1292.29
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Cường",
    "Population": "8,545",
    "Density": 1139.73
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Dương",
    "Population": "9,710",
    "Density": 1565.78
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Giang",
    "Population": "17,079",
    "Density": 2420.53
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Hải",
    "Population": "5,625",
    "Density": 846.54
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Hoa",
    "Population": "6,154",
    "Density": 1407.79
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Hồng",
    "Population": "9,245",
    "Density": 1131.21
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Hùng",
    "Population": "7,107",
    "Density": 1225.01
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Lợi",
    "Population": "8,641",
    "Density": 1093.83
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Mỹ",
    "Population": "6,036",
    "Density": 1412.09
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Thái",
    "Population": "8,840",
    "Density": 1060.64
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Thắng",
    "Population": "7,476",
    "Density": 775.63
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Thanh",
    "Population": "11,571",
    "Density": 1593.12
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Tiến",
    "Population": "11,179",
    "Density": 1180.32
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nam Toàn",
    "Population": "4,328",
    "Density": 1044.68
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Nghĩa An",
    "Population": "10,339",
    "Density": 906.93
  },
  {
    "Province": "Nam Định",
    "District": "Nam Trực",
    "Ward": "Tân Thịnh",
    "Population": "10,574",
    "Density": 940.41
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Hoàng Nam",
    "Population": "7,934",
    "Density": 761.35
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Liễu Đề",
    "Population": "5,918",
    "Density": 1354.82
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nam Điền",
    "Population": "5,813",
    "Density": 454.14
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Bình",
    "Population": "4,128",
    "Density": 503.39
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Châu",
    "Population": "7,546",
    "Density": 981.96
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Đồng",
    "Population": "5,578",
    "Density": 907.83
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Hải",
    "Population": "14,105",
    "Density": 989.2
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Hồng",
    "Population": "7,750",
    "Density": 891.1
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Hùng",
    "Population": "6,547",
    "Density": 834.46
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Lạc",
    "Population": "8,881",
    "Density": 766.13
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Lâm",
    "Population": "6,648",
    "Density": 1107.24
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Lợi",
    "Population": "4,814",
    "Density": 875.54
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Minh",
    "Population": "4,782",
    "Density": 895.62
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Phong",
    "Population": "7,877",
    "Density": 812.77
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Phú",
    "Population": "7,849",
    "Density": 718.05
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Phúc",
    "Population": "1,911",
    "Density": 786.71
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Sơn",
    "Population": "13,845",
    "Density": 902.37
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Tân",
    "Population": "5,169",
    "Density": 814.25
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Thái",
    "Population": "8,259",
    "Density": 1077
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Thắng",
    "Population": "6,603",
    "Density": 748.89
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Thành",
    "Population": "6,560",
    "Density": 915.09
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Thịnh",
    "Population": "7,610",
    "Density": 881.55
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Nghĩa Trung",
    "Population": "8,042",
    "Density": 1238.87
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Quỹ Nhất",
    "Population": "6,051",
    "Density": 1074.05
  },
  {
    "Province": "Nam Định",
    "District": "Nghĩa Hưng",
    "Ward": "Rạng Đông",
    "Population": "8,320",
    "Density": 623.78
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Cát Thành",
    "Population": "13,092",
    "Density": 1564.05
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Cổ Lễ",
    "Population": "10,581",
    "Density": 2090.28
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Liêm Hải",
    "Population": "10,809",
    "Density": 1299.88
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Phương Định",
    "Population": "15,536",
    "Density": 1643
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Chính",
    "Population": "5,265",
    "Density": 926.82
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Cường",
    "Population": "7,792",
    "Density": 1026.64
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Đại",
    "Population": "11,811",
    "Density": 1281.34
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Đạo",
    "Population": "7,470",
    "Density": 1221.53
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Hưng",
    "Population": "5,203",
    "Density": 915.49
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Hùng",
    "Population": "8,747",
    "Density": 1183.51
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Khang",
    "Population": "4,589",
    "Density": 960.68
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Mỹ",
    "Population": "4,714",
    "Density": 887.14
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Nội",
    "Population": "5,040",
    "Density": 838.71
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Phú",
    "Population": "7,958",
    "Density": 1108.62
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Thái",
    "Population": "7,371",
    "Density": 896.53
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Thắng",
    "Population": "6,963",
    "Density": 1156.97
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Thanh",
    "Population": "5,274",
    "Density": 940.86
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Thuận",
    "Population": "7,388",
    "Density": 1313.84
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trực Tuấn",
    "Population": "6,201",
    "Density": 1064.48
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Trung Đông",
    "Population": "14,412",
    "Density": 1901.29
  },
  {
    "Province": "Nam Định",
    "District": "Trực Ninh",
    "Ward": "Việt Hùng",
    "Population": "10,406",
    "Density": 1192.3
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Cộng Hòa",
    "Population": "5,194",
    "Density": 708.4
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Đại An",
    "Population": "7,641",
    "Density": 774.97
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Đại Thắng",
    "Population": "8,963",
    "Density": 641.18
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Gôi",
    "Population": "6,473",
    "Density": 1384.63
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Hiển Khánh",
    "Population": "7,635",
    "Density": 635.03
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Hợp Hưng",
    "Population": "6,015",
    "Density": 691.54
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Kim Thái",
    "Population": "8,553",
    "Density": 892.31
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Liên Bảo",
    "Population": "9,817",
    "Density": 944.4
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Liên Minh",
    "Population": "8,836",
    "Density": 839.92
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Minh Tân",
    "Population": "4,423",
    "Density": 633.31
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Minh Thuận",
    "Population": "8,289",
    "Density": 886.96
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Quang Trung",
    "Population": "5,914",
    "Density": 1205.81
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Tam Thanh",
    "Population": "5,117",
    "Density": 718.78
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Tân Khánh",
    "Population": "5,779",
    "Density": 598
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Tân Thành",
    "Population": "4,636",
    "Density": 1052.15
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Thành Lợi",
    "Population": "15,600",
    "Density": 1291.6
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Trung Thành",
    "Population": "5,526",
    "Density": 1151.75
  },
  {
    "Province": "Nam Định",
    "District": "Vụ Bản",
    "Ward": "Vĩnh Hào",
    "Population": "5,258",
    "Density": 809.89
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Thọ Nghiệp",
    "Population": "10,697",
    "Density": 1528.8
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Bắc",
    "Population": "7,011",
    "Density": 2202.71
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Châu",
    "Population": "5,757",
    "Density": 941.59
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Đài",
    "Population": "7,100",
    "Density": 1343.5
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Hòa",
    "Population": "8,181",
    "Density": 1556.18
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Hồng",
    "Population": "16,023",
    "Density": 1330.37
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Kiên",
    "Population": "7,706",
    "Density": 2320.6
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Ngọc",
    "Population": "6,945",
    "Density": 1474.02
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Ninh",
    "Population": "14,069",
    "Density": 1461.05
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Phong",
    "Population": "9,095",
    "Density": 1506.12
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Phú",
    "Population": "9,857",
    "Density": 1376.91
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Phương",
    "Population": "5,839",
    "Density": 2052.08
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Tân",
    "Population": "7,325",
    "Density": 734.02
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Thành",
    "Population": "5,164",
    "Density": 1004.34
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Thượng",
    "Population": "3,352",
    "Density": 771.85
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Thủy",
    "Population": "4,717",
    "Density": 1316.31
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Tiến",
    "Population": "10,889",
    "Density": 3094.7
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Trung",
    "Population": "7,752",
    "Density": 3431.91
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Trường",
    "Population": "7,548",
    "Density": 1175.33
  },
  {
    "Province": "Nam Định",
    "District": "Xuân Trường",
    "Ward": "Xuân Vinh",
    "Population": "10,712",
    "Density": 1348.68
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Lâm",
    "Population": "9,288",
    "Density": 1883.63
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Bằng",
    "Population": "8,647",
    "Density": 814.45
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Bình",
    "Population": "7,424",
    "Density": 839.86
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Chính",
    "Population": "6,867",
    "Density": 799.48
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Cường",
    "Population": "9,120",
    "Density": 1094.14
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Đồng",
    "Population": "11,187",
    "Density": 1035.74
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Dương",
    "Population": "8,303",
    "Density": 1175.3
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Hồng",
    "Population": "5,740",
    "Density": 804.96
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Hưng",
    "Population": "4,248",
    "Density": 624.41
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Khang",
    "Population": "5,706",
    "Density": 748.69
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Khánh",
    "Population": "5,123",
    "Density": 813.86
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Lộc",
    "Population": "9,924",
    "Density": 1311.97
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Lợi",
    "Population": "5,611",
    "Density": 683.47
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Lương",
    "Population": "6,500",
    "Density": 782.07
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Minh",
    "Population": "4,073",
    "Density": 544.82
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Mỹ",
    "Population": "5,552",
    "Density": 920.7
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Nghĩa",
    "Population": "4,750",
    "Density": 943.51
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Nhân",
    "Population": "9,697",
    "Density": 1130.24
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Ninh",
    "Population": "10,276",
    "Density": 1211.34
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Phong",
    "Population": "6,141",
    "Density": 724.38
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Phú",
    "Population": "6,717",
    "Density": 1121.03
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Phúc",
    "Population": "7,396",
    "Density": 932.87
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Phương",
    "Population": "5,583",
    "Density": 906.04
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Quang",
    "Population": "4,415",
    "Density": 617.55
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Tân",
    "Population": "5,491",
    "Density": 653.5
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Thắng",
    "Population": "10,910",
    "Density": 1233.72
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Thành",
    "Population": "3,293",
    "Density": 581.42
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Thọ",
    "Population": "6,928",
    "Density": 951.13
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Tiến",
    "Population": "11,839",
    "Density": 1320.87
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Trị",
    "Population": "11,428",
    "Density": 952.49
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Trung",
    "Population": "5,804",
    "Density": 575.74
  },
  {
    "Province": "Nam Định",
    "District": "Ý Yên",
    "Ward": "Yên Xá",
    "Population": "3,179",
    "Density": 1630.51
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Anh Sơn",
    "Population": "4,654",
    "Density": 1770.19
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Bình Sơn",
    "Population": "3,866",
    "Density": 141.55
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Cẩm Sơn",
    "Population": "5,009",
    "Density": 189.58
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Cao Sơn",
    "Population": "4,506",
    "Density": 164.52
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Đỉnh Sơn",
    "Population": "6,379",
    "Density": 249.52
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Đức Sơn",
    "Population": "6,760",
    "Density": 164.84
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Hội Sơn",
    "Population": "9,785",
    "Density": 253.57
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Hùng Sơn",
    "Population": "3,352",
    "Density": 134.05
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Khai Sơn",
    "Population": "3,228",
    "Density": 205.96
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Lạng Sơn",
    "Population": "4,862",
    "Density": 202.09
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Lĩnh Sơn",
    "Population": "7,023",
    "Density": 355.18
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Long Sơn",
    "Population": "6,341",
    "Density": 294.14
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Phúc Sơn",
    "Population": "7,251",
    "Density": 47.27
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Tam Sơn",
    "Population": "2,252",
    "Density": 200.87
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Tào Sơn",
    "Population": "4,200",
    "Density": 205.08
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Thạch Sơn",
    "Population": "2,711",
    "Density": 498.36
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Thành Sơn",
    "Population": "2,897",
    "Density": 181.4
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Thọ Sơn",
    "Population": "3,331",
    "Density": 73.14
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Tường Sơn",
    "Population": "7,939",
    "Density": 209.64
  },
  {
    "Province": "Nghệ An",
    "District": "Anh Sơn",
    "Ward": "Vĩnh Sơn",
    "Population": "3,012",
    "Density": 148.56
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Bình Chuẩn",
    "Population": "3,765",
    "Density": 20.39
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Bồng Khê",
    "Population": "5,224",
    "Density": 193.41
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Cam Lâm",
    "Population": "2,424",
    "Density": 39.35
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Châu Khê",
    "Population": "5,413",
    "Density": 12.17
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Chi Khê",
    "Population": "5,442",
    "Density": 72.32
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Con Cuông",
    "Population": "4,753",
    "Density": 2651.6
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Đôn Phục",
    "Population": "3,423",
    "Density": 34.73
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Lạng Khê",
    "Population": "4,231",
    "Density": 40.2
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Lục Dạ",
    "Population": "6,885",
    "Density": 56.98
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Mậu Đức",
    "Population": "4,983",
    "Density": 69.7
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Môn Sơn",
    "Population": "7,719",
    "Density": 19.01
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Thạch Ngàn",
    "Population": "5,275",
    "Density": 54.09
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Yên Khê",
    "Population": "4,703",
    "Density": 84.86
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Cửa Lò",
    "Population": "50,477",
    "Density": 1917.82
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Nghi Hải",
    "Population": "9,053",
    "Density": 2194.51
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Nghi Hòa",
    "Population": "4,680",
    "Density": 1013.21
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Nghi Hương",
    "Population": "6,549",
    "Density": 647.07
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Nghi Tân",
    "Population": "11,266",
    "Density": 6307.24
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Nghi Thu",
    "Population": "5,406",
    "Density": 1611.76
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Nghi Thuỷ",
    "Population": "8,393",
    "Density": 7482.39
  },
  {
    "Province": "Nghệ An",
    "District": "Con Cuông",
    "Ward": "Thu Thuỷ",
    "Population": "5,130",
    "Density": 4299.72
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn An",
    "Population": "4,605",
    "Density": 590.61
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Bích",
    "Population": "9,398",
    "Density": 3574.61
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Bình",
    "Population": "3,314",
    "Density": 670.7
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Cát",
    "Population": "6,009",
    "Density": 850.24
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Châu",
    "Population": "5,374",
    "Density": 5039.86
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Đoài",
    "Population": "6,731",
    "Density": 506.09
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Đồng",
    "Population": "4,411",
    "Density": 787.73
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Hải",
    "Population": "7,853",
    "Density": 1507.15
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Hạnh",
    "Population": "6,837",
    "Density": 1546.1
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Hoa",
    "Population": "4,342",
    "Density": 1029.35
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Hoàng",
    "Population": "5,791",
    "Density": 920.23
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Hồng",
    "Population": "9,426",
    "Density": 1458.34
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Hùng",
    "Population": "4,776",
    "Density": 895.34
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Kim",
    "Population": "8,330",
    "Density": 1369.14
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Kỷ",
    "Population": "9,302",
    "Density": 1461.38
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Lâm",
    "Population": "11,891",
    "Density": 342.77
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Liên",
    "Population": "5,705",
    "Density": 813.44
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Lộc",
    "Population": "5,424",
    "Density": 743.72
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Lợi",
    "Population": "4,815",
    "Density": 304.38
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Minh",
    "Population": "2,617",
    "Density": 629.39
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Mỹ",
    "Population": "5,692",
    "Density": 1352.21
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Ngọc",
    "Population": "13,025",
    "Density": 4676.67
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Nguyên",
    "Population": "6,327",
    "Density": 1139.3
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Phong",
    "Population": "4,117",
    "Density": 1072
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Phú",
    "Population": "7,195",
    "Density": 215.07
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Phúc",
    "Population": "4,085",
    "Density": 924.33
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Quảng",
    "Population": "4,177",
    "Density": 964.11
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Tân",
    "Population": "6,982",
    "Density": 1448.1
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Thái",
    "Population": "6,291",
    "Density": 988.48
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Thắng",
    "Population": "4,313",
    "Density": 527.78
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Thành",
    "Population": "9,637",
    "Density": 1338.97
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Tháp",
    "Population": "5,414",
    "Density": 1416.5
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Thịnh",
    "Population": "11,005",
    "Density": 1309.76
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Thọ",
    "Population": "6,795",
    "Density": 808.33
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Trung",
    "Population": "9,604",
    "Density": 699.74
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Trường",
    "Population": "10,169",
    "Density": 1152.45
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Vạn",
    "Population": "6,465",
    "Density": 1523.65
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Xuân",
    "Population": "5,223",
    "Density": 1417.1
  },
  {
    "Province": "Nghệ An",
    "District": "Diễn Châu",
    "Ward": "Diễn Yên",
    "Population": "12,980",
    "Density": 977.48
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Bắc Sơn",
    "Population": "4,394",
    "Density": 887.09
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Bài Sơn",
    "Population": "3,415",
    "Density": 259.97
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Bồi Sơn",
    "Population": "4,012",
    "Density": 414.3
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Đại Sơn",
    "Population": "8,279",
    "Density": 312.38
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Đặng Sơn",
    "Population": "5,323",
    "Density": 1341.14
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Đà Sơn",
    "Population": "6,757",
    "Density": 1598.61
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Đô Lương",
    "Population": "7,742",
    "Density": 3114.24
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Đông Sơn",
    "Population": "5,760",
    "Density": 573.99
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Giang Sơn Đông",
    "Population": "6,613",
    "Density": 258.4
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Giang Sơn Tây",
    "Population": "3,845",
    "Density": 236.01
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Hiến Sơn",
    "Population": "7,020",
    "Density": 537.35
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Hòa Sơn",
    "Population": "5,932",
    "Density": 406.86
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Hồng Sơn",
    "Population": "3,535",
    "Density": 242.29
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Lạc Sơn",
    "Population": "3,575",
    "Density": 713.19
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Lam Sơn",
    "Population": "5,698",
    "Density": 287.52
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Lưu Sơn",
    "Population": "4,905",
    "Density": 1007.06
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Minh Sơn",
    "Population": "6,710",
    "Density": 967.67
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Mỹ Sơn",
    "Population": "5,352",
    "Density": 312.96
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Nam Sơn",
    "Population": "5,228",
    "Density": 413.9
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Ngọc Sơn",
    "Population": "2,993",
    "Density": 799.33
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Nhân Sơn",
    "Population": "5,730",
    "Density": 459.36
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quang Sơn",
    "Population": "5,353",
    "Density": 570.08
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Tân Sơn",
    "Population": "5,364",
    "Density": 904.02
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Thái Sơn",
    "Population": "5,748",
    "Density": 569.9
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Thịnh Sơn",
    "Population": "4,913",
    "Density": 586.09
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Thuận Sơn",
    "Population": "5,315",
    "Density": 776.98
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Thượng Sơn",
    "Population": "7,374",
    "Density": 451.92
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Tràng Sơn",
    "Population": "8,227",
    "Density": 859.58
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Trung Sơn",
    "Population": "4,902",
    "Density": 607.16
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Trù Sơn",
    "Population": "9,230",
    "Density": 469.41
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Văn Sơn",
    "Population": "4,184",
    "Density": 959.41
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Xuân Sơn",
    "Population": "5,270",
    "Density": 556.27
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Yên Sơn",
    "Population": "4,886",
    "Density": 1096.4
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Hoàng Mai",
    "Population": "94,337",
    "Density": 548.28
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Mai Hùng",
    "Population": "8,081",
    "Density": 633.26
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Dị",
    "Population": "5,411",
    "Density": 936.32
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Lập",
    "Population": "9,257",
    "Density": 428.11
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Liên",
    "Population": "5,463",
    "Density": 712.92
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Lộc",
    "Population": "8,380",
    "Density": 351.98
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Phương",
    "Population": "14,864",
    "Density": 6617.4
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Thiện (Hoàng Mai)",
    "Population": "9,226",
    "Density": 731.7
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Trang",
    "Population": "7,695",
    "Density": 332
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Vinh",
    "Population": "14,089",
    "Density": 325.13
  },
  {
    "Province": "Nghệ An",
    "District": "Đô Lương",
    "Ward": "Quỳnh Xuân",
    "Population": "11,871",
    "Density": 622.69
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Châu",
    "Population": "3,922",
    "Density": 766.05
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Đạo",
    "Population": "7,390",
    "Density": 748.68
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Khánh",
    "Population": "1,655",
    "Density": 630.14
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Lam",
    "Population": "3,636",
    "Density": 443.66
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Lĩnh",
    "Population": "6,872",
    "Density": 1050.41
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Lợi",
    "Population": "3,785",
    "Density": 501.09
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Long",
    "Population": "5,694",
    "Density": 1129.38
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Mỹ",
    "Population": "4,213",
    "Density": 816.36
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Nguyên",
    "Population": "7,855",
    "Density": 979.89
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Nhân",
    "Population": "3,440",
    "Density": 506.35
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Phú",
    "Population": "2,744",
    "Density": 831.89
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Phúc",
    "Population": "3,632",
    "Density": 685.44
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Tân",
    "Population": "3,657",
    "Density": 768.05
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Tây",
    "Population": "10,083",
    "Density": 562.86
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Thắng",
    "Population": "3,442",
    "Density": 749.81
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Thịnh",
    "Population": "4,126",
    "Density": 867.19
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Thông",
    "Population": "4,782",
    "Density": 825.88
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Tiến",
    "Population": "2,978",
    "Density": 955.28
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Trung",
    "Population": "8,799",
    "Density": 927.45
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Xá",
    "Population": "2,952",
    "Density": 750.84
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Xuân",
    "Population": "4,151",
    "Density": 907.34
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Yên",
    "Population": "5,973",
    "Density": 308.67
  },
  {
    "Province": "Nghệ An",
    "District": "Hưng Nguyên",
    "Ward": "Hưng Yên Bắc",
    "Population": "4,670",
    "Density": 543.98
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Bắc Lý",
    "Population": "4,263",
    "Density": 76.21
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Bảo Nam",
    "Population": "2,945",
    "Density": 48.98
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Bảo Thắng",
    "Population": "1,848",
    "Density": 23.18
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Chiêu Lưu",
    "Population": "5,915",
    "Density": 49.01
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Đoọc Mạy",
    "Population": "1,984",
    "Density": 20.56
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Huồi Tụ",
    "Population": "4,176",
    "Density": 37.18
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Hữu Kiệm",
    "Population": "3,951",
    "Density": 52.52
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Hữu Lập",
    "Population": "2,596",
    "Density": 54.48
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Keng Đu",
    "Population": "3,764",
    "Density": 46.81
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Mường Ải",
    "Population": "2,118",
    "Density": 22.48
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Mường Lống",
    "Population": "4,177",
    "Density": 29.54
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Mường Típ",
    "Population": "2,594",
    "Density": 21.25
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Mường Xén",
    "Population": "2,933",
    "Density": 1341.6
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Mỹ Lý",
    "Population": "5,019",
    "Density": 18.53
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Na Loi",
    "Population": "1,737",
    "Density": 29.54
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Nậm Cắn",
    "Population": "3,996",
    "Density": 43.18
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Nậm Càn",
    "Population": "1,928",
    "Density": 13.14
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Na Ngoi",
    "Population": "5,099",
    "Density": 26.29
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Phà Đánh",
    "Population": "2,940",
    "Density": 48.7
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Tà Cạ",
    "Population": "3,988",
    "Density": 63.28
  },
  {
    "Province": "Nghệ An",
    "District": "Kỳ Sơn",
    "Ward": "Tây Sơn",
    "Population": "1,553",
    "Density": 13.31
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Hồng Long",
    "Population": "4,458",
    "Density": 573.38
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Hùng Tiến",
    "Population": "7,741",
    "Density": 751.85
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Khánh Sơn",
    "Population": "11,257",
    "Density": 356.98
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Kim Liên",
    "Population": "11,355",
    "Density": 772.29
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Anh",
    "Population": "7,322",
    "Density": 553.48
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Cát",
    "Population": "5,607",
    "Density": 882.73
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Cường",
    "Population": "5,528",
    "Density": 684.61
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Đàn",
    "Population": "6,534",
    "Density": 2977.58
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Giang",
    "Population": "5,841",
    "Density": 490.22
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Hưng",
    "Population": "3,679",
    "Density": 178.72
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Kim",
    "Population": "9,319",
    "Density": 432.16
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Lĩnh",
    "Population": "5,227",
    "Density": 474.53
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Lộc",
    "Population": "5,888",
    "Density": 395.43
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Nghĩa",
    "Population": "3,908",
    "Density": 325.53
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Phúc",
    "Population": "2,850",
    "Density": 655.73
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Tân",
    "Population": "3,760",
    "Density": 351.01
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Thái",
    "Population": "3,533",
    "Density": 295.8
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Thanh",
    "Population": "7,613",
    "Density": 330.47
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Thượng",
    "Population": "1,938",
    "Density": 276.12
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Trung",
    "Population": "6,262",
    "Density": 702.52
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Nam Xuân",
    "Population": "5,543",
    "Density": 453.82
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Vân Diên",
    "Population": "11,270",
    "Density": 829.1
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Xuân Hòa",
    "Population": "5,947",
    "Density": 892.37
  },
  {
    "Province": "Nghệ An",
    "District": "Nam Đàn",
    "Ward": "Xuân Lâm",
    "Population": "7,446",
    "Density": 790.35
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa An",
    "Population": "6,771",
    "Density": 469.13
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Bình",
    "Population": "5,545",
    "Density": 237.94
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Đức",
    "Population": "4,762",
    "Density": 137
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Hiếu",
    "Population": "2,807",
    "Density": 184.45
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Hội",
    "Population": "8,036",
    "Density": 262.07
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Hồng",
    "Population": "4,728",
    "Density": 292.36
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Hưng",
    "Population": "5,887",
    "Density": 344.95
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Khánh",
    "Population": "8,309",
    "Density": 311.4
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Lạc",
    "Population": "2,766",
    "Density": 69.18
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Lâm",
    "Population": "6,806",
    "Density": 204.65
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Liên",
    "Population": "3,985",
    "Density": 399.55
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Lộc",
    "Population": "14,429",
    "Density": 278.29
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Lợi",
    "Population": "3,881",
    "Density": 158.75
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Long",
    "Population": "3,018",
    "Density": 287.16
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Mai",
    "Population": "6,657",
    "Density": 56.13
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Minh",
    "Population": "2,984",
    "Density": 244.47
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Phú",
    "Population": "2,671",
    "Density": 173.54
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Sơn",
    "Population": "3,580",
    "Density": 224.56
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Tân",
    "Population": "2,266",
    "Density": 252.04
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Thắng",
    "Population": "2,397",
    "Density": 328.55
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Thịnh",
    "Population": "3,738",
    "Density": 456.12
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Thọ",
    "Population": "2,890",
    "Density": 126.84
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Trung",
    "Population": "7,723",
    "Density": 330.09
  },
  {
    "Province": "Nghệ An",
    "District": "Nghĩa Đàn",
    "Ward": "Nghĩa Yên",
    "Population": "5,667",
    "Density": 160.82
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Công Bắc",
    "Population": "4,323",
    "Density": 328.32
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Công Nam",
    "Population": "4,979",
    "Density": 228.37
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Diên",
    "Population": "7,164",
    "Density": 1060.47
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Đồng",
    "Population": "4,375",
    "Density": 302.85
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Hoa",
    "Population": "5,165",
    "Density": 1193.25
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Hợp",
    "Population": "3,230",
    "Density": 815.24
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Hưng",
    "Population": "4,429",
    "Density": 295.17
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Khánh",
    "Population": "4,450",
    "Density": 1057.61
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Kiều",
    "Population": "11,278",
    "Density": 338.24
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Lâm",
    "Population": "7,999",
    "Density": 336.9
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Long",
    "Population": "6,415",
    "Density": 794.82
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Mỹ",
    "Population": "4,210",
    "Density": 421.82
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Phong",
    "Population": "8,203",
    "Density": 772.48
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Phương",
    "Population": "6,576",
    "Density": 432.77
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Quang",
    "Population": "5,383",
    "Density": 607.34
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Thạch",
    "Population": "5,520",
    "Density": 806.82
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Thái",
    "Population": "7,943",
    "Density": 885.88
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Thiết",
    "Population": "5,135",
    "Density": 817.13
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Thịnh",
    "Population": "4,688",
    "Density": 941.35
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Thuận",
    "Population": "5,970",
    "Density": 706.7
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Tiến",
    "Population": "3,541",
    "Density": 326.39
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Trung",
    "Population": "7,546",
    "Density": 894.65
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Trường",
    "Population": "5,215",
    "Density": 595.76
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Văn",
    "Population": "9,415",
    "Density": 281.26
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Vạn",
    "Population": "7,707",
    "Density": 744.85
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Xá",
    "Population": "4,413",
    "Density": 667.39
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Xuân",
    "Population": "9,103",
    "Density": 1669.69
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Nghi Yên",
    "Population": "7,095",
    "Density": 294.2
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Phúc Thọ",
    "Population": "7,914",
    "Density": 1309.55
  },
  {
    "Province": "Nghệ An",
    "District": "Nghi Lộc",
    "Ward": "Quán Hành",
    "Population": "4,764",
    "Density": 1442.46
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Căm Muộn",
    "Population": "5,478",
    "Density": 51.22
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Châu Kim",
    "Population": "3,743",
    "Density": 62.09
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Châu Thôn",
    "Population": "3,466",
    "Density": 56.67
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Đồng Văn",
    "Population": "3,832",
    "Density": 13.32
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Hạnh Dịch",
    "Population": "3,164",
    "Density": 17.72
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Kim Sơn",
    "Population": "3,259",
    "Density": 1674.03
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Mường Nọc",
    "Population": "5,739",
    "Density": 193.83
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Nậm Giải",
    "Population": "1,773",
    "Density": 12.71
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Nậm Nhoóng",
    "Population": "2,096",
    "Density": 52.11
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Quang Phong",
    "Population": "5,471",
    "Density": 32.86
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Quế Sơn",
    "Population": "3,218",
    "Density": 85.51
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Thông Thụ",
    "Population": "4,424",
    "Density": 10.45
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Tiền Phong",
    "Population": "8,666",
    "Density": 59.68
  },
  {
    "Province": "Nghệ An",
    "District": "Quế Phong",
    "Ward": "Tri Lễ",
    "Population": "7,800",
    "Density": 38.5
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Bính",
    "Population": "4,491",
    "Density": 32.9
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Bình",
    "Population": "8,699",
    "Density": 65.29
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Hạnh",
    "Population": "8,467",
    "Density": 64.65
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Hoàn",
    "Population": "2,194",
    "Density": 27.76
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Hội",
    "Population": "5,915",
    "Density": 60.12
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Nga",
    "Population": "1,895",
    "Density": 18.53
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Phong",
    "Population": "5,889",
    "Density": 42.33
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Thắng",
    "Population": "2,791",
    "Density": 63
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Thuận",
    "Population": "3,044",
    "Density": 50.99
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Châu Tiến",
    "Population": "4,622",
    "Density": 318.85
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Diên Lãm",
    "Population": "2,268",
    "Density": 16.02
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Châu",
    "Ward": "Tân Lạc",
    "Population": "2,362",
    "Density": 2234.2
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Bắc Sơn",
    "Population": "1,809",
    "Density": 38.08
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Cường",
    "Population": "4,741",
    "Density": 56.46
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Đình",
    "Population": "5,769",
    "Density": 143.48
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Hồng",
    "Population": "4,050",
    "Density": 145.66
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Lộc",
    "Population": "4,005",
    "Density": 87.58
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Lý",
    "Population": "6,028",
    "Density": 93.54
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Quang",
    "Population": "10,966",
    "Density": 413.2
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Thái",
    "Population": "6,722",
    "Density": 89.99
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Thành",
    "Population": "3,910",
    "Density": 51.78
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Châu Tiến",
    "Population": "2,465",
    "Density": 83.97
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Đồng Hợp",
    "Population": "7,299",
    "Density": 203.67
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Hạ Sơn",
    "Population": "3,640",
    "Density": 85.11
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Liên Hợp",
    "Population": "1,958",
    "Density": 45.46
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Minh Hợp",
    "Population": "9,357",
    "Density": 163.4
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Nam Sơn",
    "Population": "1,396",
    "Density": 21.88
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Nghĩa Xuân",
    "Population": "7,953",
    "Density": 339.87
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Quỳ Hợp",
    "Population": "9,909",
    "Density": 1349.96
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Tam Hợp",
    "Population": "11,831",
    "Density": 404.84
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Thọ Hợp",
    "Population": "3,324",
    "Density": 202.68
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Văn Lợi",
    "Population": "4,026",
    "Density": 70.88
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳ Hợp",
    "Ward": "Yên Hợp",
    "Population": "5,396",
    "Density": 111.57
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "An Hòa",
    "Population": "9,573",
    "Density": 1253.75
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Cầu Giát",
    "Population": "5,532",
    "Density": 3233.57
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Ngọc Sơn",
    "Population": "7,292",
    "Density": 248.09
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Bá",
    "Population": "4,516",
    "Density": 1068.57
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Bảng",
    "Population": "11,007",
    "Density": 921.32
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Châu",
    "Population": "11,096",
    "Density": 230.61
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Diện",
    "Population": "5,552",
    "Density": 888.92
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Đôi",
    "Population": "4,204",
    "Density": 1024.67
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Giang",
    "Population": "9,008",
    "Density": 1188.45
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Hậu",
    "Population": "7,090",
    "Density": 1238.95
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Hoa",
    "Population": "4,616",
    "Density": 511.5
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Hồng",
    "Population": "6,959",
    "Density": 1541.07
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Hưng",
    "Population": "7,952",
    "Density": 1373.54
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Lâm",
    "Population": "11,701",
    "Density": 766.78
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Long",
    "Population": "8,429",
    "Density": 7191.37
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Lương",
    "Population": "6,151",
    "Density": 1306.22
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Minh",
    "Population": "4,499",
    "Density": 1299.31
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Mỹ",
    "Population": "7,006",
    "Density": 761.68
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Nghĩa",
    "Population": "7,461",
    "Density": 1200.77
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Ngọc",
    "Population": "4,821",
    "Density": 1553.16
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Tam",
    "Population": "7,760",
    "Density": 349.74
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Tân",
    "Population": "10,932",
    "Density": 374.06
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Thạch",
    "Population": "7,716",
    "Density": 1058.55
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Thắng",
    "Population": "8,724",
    "Density": 215.46
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Thanh",
    "Population": "10,909",
    "Density": 1301.67
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Thọ",
    "Population": "5,271",
    "Density": 1198.53
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Thuận",
    "Population": "5,263",
    "Density": 803.87
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Văn",
    "Population": "12,122",
    "Density": 898.66
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Quỳnh Yên",
    "Population": "7,285",
    "Density": 1002.5
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Sơn Hải",
    "Population": "11,538",
    "Density": 4847.7
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Tân Sơn",
    "Population": "7,931",
    "Density": 256.72
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Tân Thắng",
    "Population": "3,387",
    "Density": 48.8
  },
  {
    "Province": "Nghệ An",
    "District": "Quỳnh Lưu",
    "Ward": "Tiến Thủy",
    "Population": "8,390",
    "Density": 2066.66
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Đồng Văn",
    "Population": "10,943",
    "Density": 128.13
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Giai Xuân",
    "Population": "7,523",
    "Density": 139.87
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Hương Sơn",
    "Population": "5,455",
    "Density": 307.22
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Kỳ Sơn",
    "Population": "7,002",
    "Density": 225.64
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Kỳ Tân",
    "Population": "5,626",
    "Density": 236.57
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Bình",
    "Population": "5,388",
    "Density": 135.61
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Đồng",
    "Population": "7,800",
    "Density": 463.6
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Dũng",
    "Population": "7,807",
    "Density": 137.15
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Hành",
    "Population": "5,966",
    "Density": 112.42
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Hoàn",
    "Population": "6,872",
    "Density": 679.92
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Hợp",
    "Population": "2,322",
    "Density": 182.62
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Phúc",
    "Population": "8,505",
    "Density": 239.4
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Thái",
    "Population": "6,134",
    "Density": 671.45
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Phú Sơn",
    "Population": "4,325",
    "Density": 102.09
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân An",
    "Population": "3,320",
    "Density": 122.9
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân Hợp",
    "Population": "4,039",
    "Density": 60.36
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân Hương",
    "Population": "7,027",
    "Density": 274.32
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân Kỳ",
    "Population": "6,425",
    "Density": 882.51
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân Long",
    "Population": "2,403",
    "Density": 84.32
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân Phú",
    "Population": "4,815",
    "Density": 185.86
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tân Xuân",
    "Population": "4,512",
    "Density": 211.51
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tiên Kỳ",
    "Population": "5,092",
    "Density": 147.7
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Thái Hòa",
    "Population": "59,962",
    "Density": 432.78
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Đông Hiếu",
    "Population": "6,741",
    "Density": 310.24
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Hoà Hiếu",
    "Population": "9,593",
    "Density": 1813.18
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Long Sơn",
    "Population": "4,458",
    "Density": 786.45
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Hòa",
    "Population": "2,066",
    "Density": 196.74
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Mỹ",
    "Population": "4,530",
    "Density": 387.61
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Thuận",
    "Population": "9,926",
    "Density": 304.21
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Nghĩa Tiến",
    "Population": "3,226",
    "Density": 264.95
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Quang Phong",
    "Population": "3,922",
    "Density": 537.99
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Quang Tiến",
    "Population": "8,499",
    "Density": 1133.85
  },
  {
    "Province": "Nghệ An",
    "District": "Tân Kỳ",
    "Ward": "Tây Hiếu",
    "Population": "7,001",
    "Density": 290.64
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Cát Văn",
    "Population": "6,829",
    "Density": 463.58
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Đồng Văn",
    "Population": "6,920",
    "Density": 809.36
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Hạnh Lâm",
    "Population": "10,402",
    "Density": 60.57
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Ngọc Sơn",
    "Population": "6,221",
    "Density": 266.13
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Phong Thịnh",
    "Population": "5,745",
    "Density": 496.16
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh An",
    "Population": "5,066",
    "Density": 138.73
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Chi",
    "Population": "4,097",
    "Density": 501.62
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Chương",
    "Population": "5,832",
    "Density": 2606.25
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Đồng",
    "Population": "3,882",
    "Density": 678.22
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Đức",
    "Population": "5,319",
    "Density": 31.41
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Dương",
    "Population": "5,244",
    "Density": 612.42
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Giang",
    "Population": "3,742",
    "Density": 757.83
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Hà",
    "Population": "4,423",
    "Density": 103.44
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Hòa",
    "Population": "2,396",
    "Density": 213.6
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Hưng",
    "Population": "4,213",
    "Density": 605.98
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Hương",
    "Population": "7,561",
    "Density": 86.79
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Khai",
    "Population": "3,726",
    "Density": 559.51
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Khê",
    "Population": "5,028",
    "Density": 543.79
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Lâm",
    "Population": "5,180",
    "Density": 145.24
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Liên",
    "Population": "7,328",
    "Density": 427.79
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Lĩnh",
    "Population": "5,162",
    "Density": 658.69
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Long",
    "Population": "3,997",
    "Density": 581.85
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Lương",
    "Population": "5,987",
    "Density": 641.5
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Mai",
    "Population": "6,206",
    "Density": 132.89
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Mỹ",
    "Population": "6,772",
    "Density": 193.74
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Ngọc",
    "Population": "6,511",
    "Density": 301.7
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Nho",
    "Population": "3,933",
    "Density": 206.87
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Phong",
    "Population": "6,803",
    "Density": 465.54
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Thịnh",
    "Population": "6,757",
    "Density": 124.65
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Thủy",
    "Population": "5,008",
    "Density": 40.87
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Tiên",
    "Population": "5,574",
    "Density": 681.83
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Tùng",
    "Population": "5,026",
    "Density": 245.99
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Tường",
    "Population": "3,161",
    "Density": 857.01
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Văn",
    "Population": "4,839",
    "Density": 725.25
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Xuân",
    "Population": "8,121",
    "Density": 182.3
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Thanh Yên",
    "Population": "5,445",
    "Density": 1120.46
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Võ Liệt",
    "Population": "8,423",
    "Density": 511.94
  },
  {
    "Province": "Nghệ An",
    "District": "Thanh Chương",
    "Ward": "Xuân Tường",
    "Population": "4,325",
    "Density": 460.5
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Hòa Bình",
    "Population": "3,108",
    "Density": 1526.3
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Hữu Khuông",
    "Population": "4,906",
    "Density": 39.46
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Lưỡng Minh",
    "Population": "4,982",
    "Density": 63
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Lưu Kiền",
    "Population": "3,752",
    "Density": 26.68
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Mai Sơn",
    "Population": "2,161",
    "Density": 28.72
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Nga My",
    "Population": "4,299",
    "Density": 22.94
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Nhôn Mai",
    "Population": "4,075",
    "Density": 32.26
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Tam Đình",
    "Population": "3,898",
    "Density": 29.36
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Tam Hợp",
    "Population": "1,931",
    "Density": 8.29
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Tam Quang",
    "Population": "7,187",
    "Density": 18.85
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Tam Thái",
    "Population": "3,613",
    "Density": 31.95
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Thạch Giám",
    "Population": "4,086",
    "Density": 47.05
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Xá Lượng",
    "Population": "4,855",
    "Density": 42.41
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Xiêng My",
    "Population": "2,544",
    "Density": 21
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Yên Hòa",
    "Population": "4,415",
    "Density": 34.06
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Yên Na",
    "Population": "5,711",
    "Density": 59.51
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Yên Thắng",
    "Population": "2,947",
    "Density": 37.99
  },
  {
    "Province": "Nghệ An",
    "District": "Tương Dương",
    "Ward": "Yên Tĩnh",
    "Population": "3,935",
    "Density": 24.92
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Bến Thủy",
    "Population": "21,069",
    "Density": 6545.4
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Cửa Nam",
    "Population": "14,149",
    "Density": 6651.47
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Đội Cung",
    "Population": "8,360",
    "Density": 11537.24
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Đông Vĩnh",
    "Population": "11,793",
    "Density": 3345.44
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hà Huy Tập",
    "Population": "21,273",
    "Density": 7274.56
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hồng Sơn",
    "Population": "6,771",
    "Density": 12263.86
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Bình",
    "Population": "18,622",
    "Density": 10860.21
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Chính",
    "Population": "6,433",
    "Density": 1648.81
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Đông",
    "Population": "10,037",
    "Density": 1637.12
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Dũng",
    "Population": "21,803",
    "Density": 4216.89
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Hòa",
    "Population": "6,997",
    "Density": 456.22
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Lộc",
    "Population": "17,354",
    "Density": 2707.37
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Hưng Phúc",
    "Population": "8,761",
    "Density": 6231.15
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Lê Lợi",
    "Population": "12,462",
    "Density": 8435.66
  },
  {
    "Province": "Nghệ An",
    "District": "Vinh",
    "Ward": "Lê Mao",
    "Population": "9,544",
    "Density": 11917.34
  },
  {
  },
]