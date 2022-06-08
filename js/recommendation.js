function recommendMajor() {
    let nhapMonLapTrinh = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let toanRoiRac = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let khaiThacDuLieu = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let coSoDuLieu = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let heQuanTriCSDL = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let cauTrucDuLieuVaGiaiThuat = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let huongDoiTuong = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let kienTrucMayTinh = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let mangMayTinh = document.querySelector("#txtDiemNhapMonLapTrinh").value;
    let heDieuHanh = document.querySelector("#txtDiemNhapMonLapTrinh").value;

    let reqData = {
        'nmlt': nhapMonLapTrinh,
        'trr': toanRoiRac,
        'ktdl': khaiThacDuLieu,
        'csdl': coSoDuLieu,
        'hqtcsdl': heQuanTriCSDL,
        'ctdlgt': cauTrucDuLieuVaGiaiThuat,
        'lthdt': huongDoiTuong,
        'ktmt': kienTrucMayTinh,
        'mmt': mangMayTinh,
        'hdh': heDieuHanh
    };

    console.log(reqData);

    (async () => {
        let req = await fetch(
            'https://fuzzy-c-mean-api-production.up.railway.app/get-recommend',
            {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData)
            }
        );
        let res = await req.json();

        document.querySelector("#td-khptdl").innerHTML = res.khptdl + "%";
        document.querySelector("#td-httt").innerHTML = res.httt + "%";
        document.querySelector("#td-cnpm").innerHTML = res.cnpm + "%";
        document.querySelector("#td-mmt").innerHTML = res.mmt + "%";
    })();
    $('#myModal').modal('hide');
    return false;
}

// thêm sự kiện click để gọi đến hàm recommend
document.querySelector("#btnRecommend").addEventListener('click', recommendMajor);