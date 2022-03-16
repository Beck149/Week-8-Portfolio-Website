function objForIn(){

    //คำสั่ง value เป็นการแสดงผลออกมาหน้า html.//
    let nameValue = document.getElementById("name").value; //บรรทัดนี้เป็นการแสดงผลข้อมูลที่พิมพ์ตรงช่อง name //
    let ageValue = document.getElementById("age").value;
    let locationValue = document.getElementById("location").value;
    var obj = {name: nameValue, age: ageValue, location: locationValue};
    for(key in obj){ //บรรทัดนี้ for เป็นการแสดงข้อมูลที่พิมพ์ วนลูปไปเรื่อยๆ
        let value = obj[key];
        document.getElementById("bbct").innerHTML += key + ' : ' + value + '<br>';
    }
} 