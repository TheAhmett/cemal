const hedefDizi = ["g", "t", "b"]; // Hedef tuş sırası
let basilanlar = []; // Basılan tuşları takip etmek için boş dizi

document.addEventListener("keydown", function(event) {
    basilanlar.push(event.key); // Basılan tuşu diziye ekle

    // Eğer basılanların sayısı hedef diziyi geçerse eski tuşları sil
    if (basilanlar.length > hedefDizi.length) {
        basilanlar.shift(); // İlk elemanı kaldır
    }

    // Basılan tuş dizisi hedef diziyi tutuyorsa işlem yap
    if (JSON.stringify(basilanlar) === JSON.stringify(hedefDizi)) {
        alert("Doğru sırada tuşlara bastın!");
        basilanlar = []; // İşlemden sonra basılanları sıfırla
    }
});
