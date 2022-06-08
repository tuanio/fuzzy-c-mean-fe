function display() {
  var masv = document.getElementById("txtMaSV").value;
  var namesv = document.getElementById("txtTenSV").value;
  var course = document.getElementById("khSV").value;

  var isValid = validation();
  while (!isValid) {
    alert("Vui lòng nhập vào các giá trị");
    hidenModal();
   return;
  }
}

function isRequired(value) {
  if (!value) {
    return false;
  }
  return true;
}
function validation() {
  var masv = document.getElementById("txtMaSV").value;
  var name = document.getElementById("txtTenSV").value;
  var course = document.getElementById("khSV").value;

  var masvPattern = /^[0-9\d]{0,10}$/;
  var namePattern = new RegExp("[A-Za-z-]+$");

  var isValid = true;

  if (!isRequired(masv)) {
    document.getElementById("spanMaSV").style.display = "block";
    isValid = false;
    document.getElementById("spanMaSV").innerHTML =
      "Mã sinh viên không được để trống";
  } else if (!masvPattern.test(masv)) {
    isValid = false;
    document.getElementById("spanMaSV").style.display = "block";
    document.getElementById("spanMaSV").innerHTML =
      "Định dạng mã sinh viên không hợp lệ";
  } else document.getElementById("spanMaSV").innerHTML = "";

  if (!isRequired(name)) {
    isValid = false;
    document.getElementById("spanTenSV").style.display = "block";
    document.getElementById("spanTenSV").innerHTML =
      "Tên sinh viên không được để trống";
  } else if (!namePattern.test(name)) {
    isValid = false;
    document.getElementById("spanTenSV").style.display = "block";
    document.getElementById("spanTenSV").innerHTML =
      "Định dạng tên sinh viên không hợp lệ";
  } else document.getElementById("spanTenSV").innerHTML = "";

  console.log(isValid);
}
function hidenModal(){  
  $('#myModal').modal('hide');

}
