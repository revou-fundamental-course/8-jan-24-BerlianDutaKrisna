function luas(){
    document.getElementById("labelRumus").innerHTML = "Luas Persegi"
    document.getElementById("labelInput").innerHTML = "Luas Persegi"
    document.getElementById("rumus").innerHTML = "L = S x S"
    document.getElementById("hitungLuas").innerHTML = "Hitung Luas Persegi"
}
function keliling(){
    document.getElementById("labelRumus").innerHTML = "Kelilling Persegi"
    document.getElementById("labelInput").innerHTML = "Kelilling Persegi"
    document.getElementById("rumus").innerHTML = "K = 4 x S"
    document.getElementById("hitungKeliling").innerHTML = "Hitung Keliling Persegi"
}
function btnLuas(){
    var hasil = parseFloat(document.getElementById('input').value);
    if ( hasil > 0 ){
        document.getElementById("luasBerapa").innerHTML = "Sisi = " + hasil;
        document.getElementById("luasKali").innerHTML = "L = " + hasil + " x " + hasil;
        var luas = hasil * hasil;
        document.getElementById("hasil").innerHTML = "Luas Persegi = " + luas;
    }else{
        document.getElementById("luasBerapa").innerHTML = "Masukan Nilai yang Benar ( Bilangan bulat positif )";
        document.getElementById("luasKali").innerHTML = "Pastikan Memilih Jenis Perhitungan Luas / Keliling Persegi";
        document.getElementById("hasil").innerHTML = "";
    }
}   
function btnKeliling(){
        var hasil = parseFloat(document.getElementById('input').value);
        if ( hasil > 0 ){
            document.getElementById("luasBerapa").innerHTML = "Sisi = " + hasil;
            document.getElementById("luasKali").innerHTML = "K = 4 x " + hasil;
            var luas = 4 * hasil;
            document.getElementById("hasil").innerHTML = "Keliling Persegi = " + luas;
        }else{
            document.getElementById("luasBerapa").innerHTML = "Masukan Nilai yang Benar ( Bilangan bulat positif )";
            document.getElementById("luasKali").innerHTML = "Pastikan Memilih Jenis Perhitungan Luas / Keliling Persegi";
            document.getElementById("hasil").innerHTML = "";
        }
}
function btnReset(){
    document.getElementById('input').value= "";
    document.getElementById("luasBerapa").innerHTML = "";
            document.getElementById("luasKali").innerHTML = "";
            document.getElementById("hasil").innerHTML = "";
}
