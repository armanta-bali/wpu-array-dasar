// Membuat Object
// Object Literal (contoh)
const mhs1 = {
    nama : "Armanta",
    nrp : "0978378378",
    email : "armanta@gmail.com",
    jurusan : "tekni komputer"
}
const mhs2 = {
    nama : "Galang Rahardika",
    nrp : "073874883",
    email : "galangaja@gmail.com",
    jurusan : "sitem informasi"
}

// creat an object by function declaration
function dataObjectMahasiswa(nama, nrp, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
const mhs3 = dataObjectMahasiswa("Ermayanti", "0647382826", "erma@gmail.com", "Sistem informasi");
console.log(mhs3);

const mhs4 = dataObjectMahasiswa("suryanti", "08828782", "ssuryanti@gmail.com", "teknik teknikan");

//contoh membuat objek dengan function contruction
// bedanya mengunakan "keyword 'this'" dan "keyword'new"
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
const mhs5 = new Mahasiswa("erik", "087274847", "erik@gmail.com", "matematika");