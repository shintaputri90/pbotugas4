class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang}m x ${this.lebar}m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitaspenumpang, hargaTiket) {
        super(nama, jenis, panjang, lebar);
        this.kapasitaspenumpang = kapasitaspenumpang;
        this.hargaTiket = hargaTiket;
        this.jumlahTiket = kapasitaspenumpang; 
    }

    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitaspenumpang} orang dan harga tiket Rp${this.hargaTiket}.`;
    }

    kurangiTiket(jumlah) {
        if (jumlah > this.jumlahTiket) {
            return `Tiket tidak cukup. Hanya tersedia ${this.jumlahTiket} tiket.`;
        } else {
            this.jumlahTiket -= jumlah;
            return `${jumlah} tiket berhasil dibeli. Sisa tiket: ${this.jumlahTiket}.`;
        }
    }
}

class PembelianTiketKapal {
    constructor() {
        this.tujuan = null;
        this.hariKeberangkatan = null;
        this.jamKeberangkatan = null;
        this.kapalDipilih = null;
    }

    pilihTujuan(tujuan) {
        const tujuanTersedia = ["Paris", "Italia"];
        if (tujuanTersedia.includes(tujuan)) {
            this.tujuan = tujuan;
            return `Anda telah memilih tujuan ke ${tujuan}.`;
        } else {
            return `Tujuan tidak tersedia. Pilih tujuan yang tersedia.`;
        }
    }

    aturHariKeberangkatan(hari) {
        const hariTersedia = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
        if (hariTersedia.includes(hari)) {
            this.hariKeberangkatan = hari;
            return `Keberangkatan dijadwalkan pada hari ${hari}.`;
        } else {
            return `Hari tidak valid. Pilih hari antara Senin hingga Minggu.`;
        }
    }

    aturJamKeberangkatan(jam) {
        const regexJam = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (regexJam.test(jam)) {
            this.jamKeberangkatan = jam;
            return `Keberangkatan dijadwalkan pada jam ${jam}.`;
        } else {
            return `Format jam tidak valid. Gunakan format 24-jam (contoh: 14:30).`;
        }
    }

    pilihKapal(kapalList, namaKapal) {
        const kapalDipilih = kapalList.find(kapal => kapal.nama === namaKapal);
        if (kapalDipilih) {
            this.kapalDipilih = kapalDipilih;
            return `Anda telah memilih kapal ${kapalDipilih.nama} (${kapalDipilih.jenis}).`;
        } else {
            return `Kapal dengan nama ${namaKapal} tidak ditemukan.`;
        }
    }

    pembelianTiket(jumlahBeli) {
        if (!this.tujuan || !this.hariKeberangkatan || !this.jamKeberangkatan || !this.kapalDipilih) {
            return `Anda belum melengkapi tujuan, hari, jam keberangkatan, atau memilih kapal. Silakan lengkapi semua informasi terlebih dahulu.`;
        }

        let totalHarga = jumlahBeli * this.kapalDipilih.hargaTiket;
        let hasilPembelian = this.kapalDipilih.kurangiTiket(jumlahBeli);
        return `${hasilPembelian} Tujuan: ${this.tujuan}. Keberangkatan pada hari ${this.hariKeberangkatan}, jam ${this.jamKeberangkatan}. Total harga: Rp${totalHarga}.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKargo) {
        super(nama, "kargo", panjang, lebar);
        this.kapasitasKargo = kapasitasKargo;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal kargo yang berukuran ${this.panjang}m x ${this.lebar}m dan mampu membawa ${this.kapasitasKargo} ton barang.`;
    }
}

class KapalCepat extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, kecepatanMax) {
        super(nama, "kapal cepat", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.kecepatanMax = kecepatanMax;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal cepat dengan kapasitas ${this.kapasitaspenumpang} penumpang. Kecepatan maksimum kapal ini adalah ${this.kecepatanMax} knot. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalLayananVIP extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, fasilitasVIP) {
        super(nama, "kapal layanan VIP", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.fasilitasVIP = fasilitasVIP;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal VIP dengan kapasitas ${this.kapasitaspenumpang} penumpang. Fasilitas yang tersedia: ${this.fasilitasVIP.join(", ")}. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, fasilitasHiburan) {
        super(nama, "kapal pesiar", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.fasilitasHiburan = fasilitasHiburan;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal pesiar mewah dengan kapasitas ${this.kapasitaspenumpang} penumpang. Fasilitas hiburan: ${this.fasilitasHiburan.join(", ")}. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalSailboat extends Kapal {
    constructor(nama, panjang, lebar, jenisLayar) {
        super(nama, "sailboat", panjang, lebar);
        this.jenisLayar = jenisLayar;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah sailboat berukuran ${this.panjang}m x ${this.lebar}m dengan jenis layar ${this.jenisLayar}.`;
    }
}

class KapalTugboat extends Kapal {
    constructor(nama, panjang, lebar, dayaTarik) {
        super(nama, "tugboat", panjang, lebar);
        this.dayatarik = dayaTarik;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah tugboat berukuran ${this.panjang}m x ${this.lebar}m dengan daya tarik ${this.dayatarik} ton.`;
    }
}

class KapalBermotor extends Kapal {
    constructor(nama, panjang, lebar, dayaMesin) {
        super(nama, "kapal bermotor", panjang, lebar);
        this.dayaMesin = dayaMesin;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal bermotor berukuran ${this.panjang}m x ${this.lebar}m dengan daya mesin ${this.dayaMesin} HP.`;
    }
}

class KapalKecil extends Kapal {
    constructor(nama, panjang, lebar, jenisKecil) {
        super(nama, "kapal kecil", panjang, lebar);
        this.jenisKecil = jenisKecil;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal kecil berukuran ${this.panjang}m x ${this.lebar}m dengan jenis ${this.jenisKecil}.`;
    }
}

class KapalSailboatKecil extends KapalSailboat {
    constructor(nama, panjang, lebar, jenisLayar, kapasitas) {
        super(nama, panjang, lebar, jenisLayar);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} orang.`;
    }
}

class KapalTugboatBesar extends KapalTugboat {
    constructor(nama, panjang, lebar, dayaTarik, kapasitas) {
        super(nama, panjang, lebar, dayaTarik);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} ton barang.`;
    }
}

class KapalBermotorKecil extends KapalBermotor {
    constructor(nama, panjang, lebar, dayaMesin, kapasitas) {
        super(nama, panjang, lebar, dayaMesin);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} orang.`;
    }
}

class KapalKecilLaut extends KapalKecil {
    constructor(nama, panjang, lebar, jenisKecil, kapasitas) {
        super(nama, panjang, lebar, jenisKecil);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} orang.`;
    }
}

const kapal1 = new KapalPenumpang("Kapal Pelni", "penumpang", 120, 25, 200, 500000);
const kapal2 = new KapalKargo("Kapal Kargo 1", 150, 30, 1000);
const kapal3 = new KapalCepat("Kapal Cepat 1", 80, 15, 100, 200000, 45);
const kapal4 = new KapalLayananVIP("Kapal VIP 1", 100, 20, 50, 1000000, ["Lounge", "Makanan Khusus"]);
const kapal5 = new KapalPesiar("Kapal Pesiar 1", 200, 30, 150, 1500000, ["Kolam Renang", "Spa"]);

const kapalSailboat = new KapalSailboat("Sailboat 1", 30, 8, "Layar Persegi");
const kapalTugboat = new KapalTugboat("Tugboat 1", 40, 12, 600);
const kapalBermotor = new KapalBermotor("Bermotor 1", 25, 6, 300);
const kapalKecil = new KapalKecil("Kecil 1", 15, 5, "Kecil");
const kapalSailboatKecil = new KapalSailboatKecil("Sailboat Kecil 1", 10, 3, "Layar Segitiga", 4);
const kapalTugboatBesar = new KapalTugboatBesar("Tugboat Besar 1", 50, 15, 1200, 800);
const kapalBermotorKecil = new KapalBermotorKecil("Bermotor Kecil 1", 12, 4, 150, 2);
const kapalKecilLaut = new KapalKecilLaut("Kecil Laut 1", 8, 2, "Kecil Laut", 3);

console.log(kapal1.infokapal());
console.log(kapal2.infokapal());
console.log(kapal3.infokapal());
console.log(kapal4.infokapal());
console.log(kapal5.infokapal());
console.log(kapalSailboat.infokapal());
console.log(kapalTugboat.infokapal());
console.log(kapalBermotor.infokapal());
console.log(kapalKecil.infokapal());
console.log(kapalSailboatKecil.infokapal());
console.log(kapalTugboatBesar.infokapal());
console.log(kapalBermotorKecil.infokapal());
console.log(kapalKecilLaut.infokapal());

const pembelian = new PembelianTiketKapal();
console.log(pembelian.pilihTujuan("Paris"));
console.log(pembelian.aturHariKeberangkatan("Senin"));
console.log(pembelian.aturJamKeberangkatan("14:00"));
console.log(pembelian.pilihKapal([kapal1, kapal3], "Kapal Pelni"));
console.log(pembelian.pembelianTiket(2));
